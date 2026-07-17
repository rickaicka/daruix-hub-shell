import {
  Component,
  computed,
  inject,
  signal
} from '@angular/core';
import { Router } from '@angular/router';
import {
  IonCard,
  IonCardContent,
  IonCol,
  IonGrid,
  IonRow
} from '@ionic/angular/standalone';

import { AuthStore } from '../../core/auth/store/auth.store';
import { HubModule } from '../../core/auth/models/auth.models';
import { ViewportStore } from '../../core/device/viewport.store';
import { HubIconComponent } from '../../core/icons/hub-icon.component';
import { HubDashboardService } from './hub-dashboard.service';

@Component({
  selector: 'app-hub-dashboard',
  standalone: true,
  imports: [
    IonCard,
    IonCardContent,
    IonGrid,
    IonRow,
    IonCol,
    HubIconComponent
  ],
  templateUrl: './hub-dashboard.component.html',
  styleUrl: './hub-dashboard.component.scss'
})
export class HubDashboardComponent {
  private readonly router = inject(Router);
  private readonly viewportStore = inject(ViewportStore);
  private readonly dashboardService = inject(HubDashboardService);

  readonly authStore = inject(AuthStore);

  readonly isMobile = this.viewportStore.isMobile;
  readonly isDesktop = this.viewportStore.isDesktop;

  readonly userModules = this.authStore.userModules;

  readonly mobilePreviewLimit = 9;
  readonly showAllMobile = signal(false);

  readonly mobileModulos = computed<HubModule[]>(() =>
    this.userModules().filter((modulo) =>
      this.isVisibleOnMobile(modulo)
    )
  );

  readonly orderedMobileModules = computed<HubModule[]>(() => {
    return this.mobileModulos()
      .map((modulo, originalIndex) => ({
        modulo,
        originalIndex
      }))
      .sort((itemA, itemB) => {
        const favoriteDifference =
          Number(Boolean(itemB.modulo.favorito)) -
          Number(Boolean(itemA.modulo.favorito));

        if (favoriteDifference !== 0) {
          return favoriteDifference;
        }

        return itemA.originalIndex - itemB.originalIndex;
      })
      .map(({ modulo }) => modulo);
  });

  readonly visibleMobileModules = computed<HubModule[]>(() => {
    const modules = this.orderedMobileModules();

    return this.showAllMobile()
      ? modules
      : modules.slice(0, this.mobilePreviewLimit);
  });

  readonly onlyFavorites = computed<HubModule[]>(() =>
    this.userModules().filter((modulo) =>
      modulo.favorito &&
      modulo.desktop_enabled
    )
  );

  navigateRoute(rota: string): void {
    if (!rota) {
      return;
    }

    const cleanRoute = rota.replace(/^\/+/, '');

    void this.router.navigateByUrl(
      `/hub/${cleanRoute}`
    );
  }

  moduleChildren(modulo: HubModule): HubModule[] {
    return modulo.children ?? [];
  }

  mobileChildren(modulo: HubModule): HubModule[] {
    return this.moduleChildren(modulo).filter((child) =>
      this.isVisibleOnMobile(child)
    );
  }

  isVisibleOnMobile(modulo: HubModule): boolean {
    const hasVisibleChild = this
      .moduleChildren(modulo)
      .some((child) =>
        this.isVisibleOnMobile(child)
      );

    const isModuleVisible =
      modulo.mobile_enabled &&
      !modulo.legacy_enabled;

    return isModuleVisible || hasVisibleChild;
  }

  isRouteActive(route: string): boolean {
    if (!route) {
      return false;
    }

    const cleanRoute = route.replace(/^\/+/, '');

    return this.router.url.startsWith(
      `/hub/${cleanRoute}`
    );
  }

  toggleMobileModules(): void {
    this.showAllMobile.update((showAll) =>
      !showAll
    );
  }

  toggleFavorite(
    event: MouseEvent,
    modulo: HubModule
  ): void {
    event.stopPropagation();

    this.dashboardService
      .updateFavorite(
        modulo.slug,
        !modulo.favorito
      )
      .subscribe({
        next: (updatedModule) => {
          this.authStore.updateHubModule(
            updatedModule
          );
        },

        error: (error) => {
          console.error(
            'Não foi possível atualizar o favorito.',
            error
          );
        }
      });
  }
}
