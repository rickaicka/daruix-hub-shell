import { computed, inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap, catchError, of } from 'rxjs';

import { AuthApi } from '../data-access/auth.api';
import {
  AuthState,
  LoginRequest,
  LoginResponse,
  HubUser
} from '../models/auth.models';

const ACCESS_TOKEN_KEY = 'daruix_hub_access_token';
const REFRESH_TOKEN_KEY = 'daruix_hub_refresh_token';
const USER_KEY = 'daruix_hub_user';

function loadUserFromStorage(): HubUser | null {
  const user = localStorage.getItem(USER_KEY);

  if (!user) {
    return null;
  }

  try {
    return JSON.parse(user) as HubUser;
  } catch {
    localStorage.removeItem(USER_KEY);
    return null;
  }
}

function initialState(): AuthState {
  return {
    user: loadUserFromStorage(),
    accessToken: localStorage.getItem(ACCESS_TOKEN_KEY),
    refreshToken: localStorage.getItem(REFRESH_TOKEN_KEY),
    loading: false,
    error: null
  };
}

function persistSession(response: LoginResponse): void {
  localStorage.setItem(ACCESS_TOKEN_KEY, response.access);
  localStorage.setItem(REFRESH_TOKEN_KEY, response.refresh);
  localStorage.setItem(USER_KEY, JSON.stringify(response.user));
}

function clearSession(): void {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

export const AuthStore = signalStore(
  { providedIn: 'root' },

  withState<AuthState>(initialState()),

  withComputed((store) => ({
    isLoggedIn: computed(() =>
      !!store.accessToken() && !!store.user()
    ),

    userName: computed(() =>
      store.user()?.name ?? ''
    ),

    userPermissions: computed(() =>
      store.user()?.permissions ?? []
    ),

    userApps: computed(() =>
      store.user()?.apps ?? []
    )
  })),

  withMethods((store, authApi = inject(AuthApi)) => ({
    login: rxMethod<LoginRequest>(
      pipe(
        tap(() => {
          patchState(store, {
            loading: true,
            error: null
          });
        }),

        switchMap((payload) =>
          authApi.login(payload).pipe(
            tap((response) => {
              persistSession(response);

              patchState(store, {
                user: response.user,
                accessToken: response.access,
                refreshToken: response.refresh,
                loading: false,
                error: null
              });
            }),

            catchError(() => {
              clearSession();

              patchState(store, {
                user: null,
                accessToken: null,
                refreshToken: null,
                loading: false,
                error: 'E-mail ou senha inválidos.'
              });

              return of(null);
            })
          )
        )
      )
    ),

    loadMe: rxMethod<void>(
      pipe(
        switchMap(() =>
          authApi.me().pipe(
            tap((user) => {
              localStorage.setItem(USER_KEY, JSON.stringify(user));

              patchState(store, {
                user,
                error: null
              });
            }),

            catchError(() => {
              clearSession();

              patchState(store, {
                user: null,
                accessToken: null,
                refreshToken: null,
                error: null
              });

              return of(null);
            })
          )
        )
      )
    ),

    logout(): void {
      clearSession();

      patchState(store, {
        user: null,
        accessToken: null,
        refreshToken: null,
        loading: false,
        error: null
      });
    },

    hasPermission(permission: string): boolean {
      return store.userPermissions().includes(permission);
    },

    hasApp(appId: string): boolean {
      return store.userApps().includes(appId);
    },

    setAccessToken(accessToken: string): void {
      localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);

      patchState(store, {
        accessToken
      });
    }
  }))
);
