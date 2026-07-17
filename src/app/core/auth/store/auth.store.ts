import { computed, inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import {
  catchError,
  finalize,
  of,
  pipe,
  switchMap,
  tap
} from 'rxjs';

import { HubSessionService } from '@daruix/hub-auth';

import { AuthApi } from '../data-access/auth.api';
import {
  AuthState,
  HubModule,
  LoginRequest
} from '../models/auth.models';

function initialState(): AuthState {
  return {
    usuario: null,
    accessToken: null,
    refreshToken: null,
    sessao: null,
    loading: false,
    loginSuccess: false,
    error: null
  };
}

function clearAuthState(store: any): void {
  patchState(store, {
    usuario: null,
    accessToken: null,
    refreshToken: null,
    sessao: null,
    loading: false,
    loginSuccess: false,
    error: null
  });
}

export const AuthStore = signalStore(
  { providedIn: 'root' },

  withState<AuthState>(initialState()),

  withComputed((store) => ({
    isSessionExpired: computed(() => {
      const sessao = store.sessao();

      if (!sessao?.expira_em) {
        return false;
      }

      return new Date(sessao.expira_em).getTime() <= Date.now();
    }),

    isLoggedIn: computed(() => {
      const sessao = store.sessao();
      const sessionExpired = Boolean(
        sessao?.expira_em &&
        new Date(sessao.expira_em).getTime() <= Date.now()
      );

      return (
        Boolean(store.accessToken()) &&
        Boolean(store.usuario()) &&
        Boolean(sessao) &&
        !sessionExpired
      );
    }),

    userName: computed(() =>
      store.usuario()?.nome ??
      store.usuario()?.username ??
      ''
    ),

    userPermissions: computed(() =>
      store.usuario()?.permissoes ?? []
    ),

    userModules: computed(() =>
      store.usuario()?.modulos ?? []
    )
  })),

  withMethods((
    store,
    authApi = inject(AuthApi),
    hubSession = inject(HubSessionService)
  ) => ({
    syncFromSession(): void {
      hubSession.reloadFromStorage();

      patchState(store, {
        usuario: hubSession.usuario(),
        accessToken: hubSession.accessToken(),
        refreshToken: hubSession.refreshToken(),
        sessao: hubSession.sessao(),
        error: null
      });
    },

    login: rxMethod<LoginRequest>(
      pipe(
        tap(() => {
          patchState(store, {
            loading: true,
            loginSuccess: false,
            error: null
          });
        }),

        switchMap((payload) =>
          authApi.login(payload).pipe(
            tap((response) => {
              hubSession.setSession({
                usuario: response.usuario,
                accessToken: response.access_token,
                refreshToken: response.refresh_token,
                sessao: response.sessao
              });

              patchState(store, {
                usuario: response.usuario,
                accessToken: response.access_token,
                refreshToken: response.refresh_token,
                sessao: response.sessao,
                loginSuccess: true,
                error: null
              });
            }),

            catchError(() => {
              hubSession.clearSession();
              clearAuthState(store);

              patchState(store, {
                error: 'E-mail ou senha inválidos.'
              });

              return of(null);
            }),

            finalize(() => {
              patchState(store, {
                loading: false
              });
            })
          )
        )
      )
    ),

    loadMe: rxMethod<void>(
      pipe(
        tap(() => {
          patchState(store, {
            loading: true,
            error: null
          });
        }),

        switchMap(() =>
          authApi.me().pipe(
            tap((usuario) => {
              hubSession.setUsuario(usuario);

              patchState(store, {
                usuario,
                accessToken: hubSession.accessToken(),
                refreshToken: hubSession.refreshToken(),
                sessao: hubSession.sessao(),
                error: null
              });
            }),

            catchError(() => {
              hubSession.clearSession();
              clearAuthState(store);

              return of(null);
            }),

            finalize(() => {
              patchState(store, {
                loading: false
              });
            })
          )
        )
      )
    ),

    logout: rxMethod<void>(
      pipe(
        tap(() => {
          patchState(store, {
            loading: true,
            error: null
          });
        }),

        switchMap(() => {
          const refreshToken =
            hubSession.refreshToken() ??
            store.refreshToken();

          if (!refreshToken) {
            hubSession.clearSession();
            clearAuthState(store);

            return of(null);
          }

          return authApi.logout(refreshToken).pipe(
            tap(() => {
              hubSession.clearSession();
              clearAuthState(store);
            }),

            catchError(() => {
              hubSession.clearSession();
              clearAuthState(store);

              return of(null);
            }),

            finalize(() => {
              patchState(store, {
                loading: false
              });
            })
          );
        })
      )
    ),

    hasPermission(permission: string): boolean {
      return store.userPermissions().includes(permission);
    },

    setAccessToken(accessToken: string): void {
      hubSession.setAccessToken(accessToken);

      patchState(store, {
        accessToken
      });
    },

    updateHubModule(updatedModule: HubModule): void {
      const usuario = store.usuario();

      if (!usuario) {
        return;
      }

      const modulosAtualizados = (usuario.modulos ?? []).map((modulo) =>
        modulo.slug === updatedModule.slug
          ? {
            ...modulo,
            ...updatedModule
          }
          : modulo
      );

      const usuarioAtualizado = {
        ...usuario,
        modulos: modulosAtualizados
      };

      hubSession.setUsuario(usuarioAtualizado);

      patchState(store, {
        usuario: usuarioAtualizado
      });
    }
  }))
);
