import {
  Component,
  computed,
  DestroyRef,
  effect,
  inject,
  signal
} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import { Platform } from '@ionic/angular';
import {AuthStore} from '../../auth/store/auth.store';
import {DrxHubHeaderComponent} from '../../../shared/drx-hub-header/drx-hub-header.component';
import {LucidePanelsTopLeft} from '@lucide/angular';
import {HubIconComponent} from '../../icons/hub-icon.component';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-hub-layout',
  standalone: true,
  imports: [RouterOutlet, DrxHubHeaderComponent, HubIconComponent, RouterLink, JsonPipe],
  templateUrl: './hub-layout.component.html',
  styleUrl: './hub-layout.component.scss'
})
export class HubLayoutComponent {
  readonly authStore = inject(AuthStore);
  readonly usuario = this.authStore.usuario;

  private readonly router = inject(Router);
  private readonly platform = inject(Platform);
  private readonly destroyRef = inject(DestroyRef);

  private readonly isSmallScreen = signal(false);
  private readonly sessionSynced = signal(false);

  readonly nomeUsuario = computed(() =>
    this.authStore.usuario()?.nome ?? 'Usuário'
  );

  readonly permissoes = computed(() =>
    this.authStore.usuario()?.permissoes ?? []
  );

  readonly modulos = computed(() =>
    this.authStore.usuario()?.modulos ?? []
  );

  readonly isMobile = computed(() => {
    return (
      this.isSmallScreen() ||
      this.platform.is('ios') ||
      this.platform.is('android') ||
      this.platform.is('mobileweb')
    );
  });

  constructor() {
    this.authStore.syncFromSession();
    this.sessionSynced.set(true);

    effect(() => {
      if (!this.sessionSynced()) {
        return;
      }

      if (!this.authStore.isLoggedIn()) {
        this.router.navigate(['/login']);
      }
    });

    this.listenScreenSize();
  }

  logout(): void {
    this.authStore.logout();
  }

  private listenScreenSize(): void {
    const mediaQuery = window.matchMedia('(max-width: 900px)');

    this.isSmallScreen.set(mediaQuery.matches);

    const onChange = (event: MediaQueryListEvent) => {
      this.isSmallScreen.set(event.matches);
    };

    mediaQuery.addEventListener('change', onChange);

    this.destroyRef.onDestroy(() => {
      mediaQuery.removeEventListener('change', onChange);
    });
  }

  getModuleRoute(rota: string): string[] {
    const cleanRoute = rota.replace(/^\/+/, '');

    return ['/hub', cleanRoute];
  }

  navigateRoute(rota:string): void {
    this.router.navigate([`/hub/${rota}`]);
  }
}
