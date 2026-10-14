import {
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';

import {
  Router, RouterLink,
} from '@angular/router';

import {
  IonCard,
  IonCardContent,
  IonCol,
  IonGrid,
  IonRow,
} from '@ionic/angular/standalone';

import {
  HubSessionService,
} from '@daruix/hub-auth';


import {
  HubModule,
} from '../../core/auth/models/auth.models';

import {
  ViewportStore,
} from '../../core/device/viewport.store';

import {
  HubDashboardService,
} from './hub-dashboard.service';
import {CardComponent, HubIconComponent} from '@daruix/hub-ui';
import {JsonPipe} from '@angular/common';

type HubMenuItem = HubModule & {
  favoritavel?: boolean;
  modulo_nome?: string;
  modulo_slug?: string;
};

interface FavoriteMenuItem {
  item: HubMenuItem;
  module: HubModule;
}

@Component({
  selector: 'app-hub-dashboard',
  standalone: true,
  imports: [
    IonCard,
    IonCardContent,
    IonGrid,
    IonRow,
    IonCol,
    HubIconComponent,
    CardComponent,
    RouterLink
  ],
  templateUrl:
    './hub-dashboard.component.html',
  styleUrl:
    './hub-dashboard.component.scss',
})
export class HubDashboardComponent {
  private readonly router =
    inject(Router);

  private readonly viewportStore =
    inject(ViewportStore);

  private readonly dashboardService =
    inject(HubDashboardService);

  readonly hubSession =
    inject(HubSessionService);

  readonly isMobile =
    this.viewportStore.isMobile;

  readonly isDesktop =
    this.viewportStore.isDesktop;

  /**
   * A Home passa a observar diretamente
   * o estado compartilhado da hub-auth.
   */
  readonly userModules =
    computed<HubModule[]>(
      () =>
        this.hubSession
          .userModules() as HubModule[],
    );

  readonly mobilePreviewLimit = 9;

  readonly showAllMobile =
    signal(false);

  readonly mobileModulos =
    computed<HubModule[]>(() =>
      this.userModules().filter(
        (module) =>
          this.isVisibleOnMobile(
            module,
          ),
      ),
    );

  readonly visibleMobileModules =
    computed<HubModule[]>(() => {
      const modules =
        this.mobileModulos();

      return this.showAllMobile()
        ? modules
        : modules.slice(
          0,
          this.mobilePreviewLimit,
        );
    });

  readonly onlyFavorites =
    computed<FavoriteMenuItem[]>(
      () =>
        this.userModules().flatMap(
          (module) =>
            this.moduleFeatures(
              module,
            )
              .filter(
                (item) =>
                  this.itemIsFavorite(
                    item,
                  ) &&
                  item.desktop_enabled !==
                  false,
              )
              .map((item) => ({
                item,
                module,
              })),
        ),
    );

  navigateRoute(
    route: string,
    module?: HubModule,
  ): void {
    const requestedRoute =
      route?.trim() ||
      module?.rota?.trim() ||
      module?.slug?.trim();

    if (!requestedRoute) {
      console.warn(
        '[HubDashboard] Módulo sem rota:',
        module,
      );
      return;
    }

    const cleanRoute = requestedRoute
      .replace(/^\/+|\/+$/g, '');

    const hubRoute = cleanRoute.startsWith('hub/')
      ? `/${cleanRoute}`
      : `/hub/${cleanRoute}`;

    void this.router.navigateByUrl(hubRoute).then(
      (success) => {
        if (!success) {
          console.warn(
            '[HubDashboard] Navegação não concluída:',
            hubRoute,
            module,
          );
        }
      },
    ).catch((error) => {
      console.error(
        '[HubDashboard] Erro ao navegar:',
        hubRoute,
        error,
      );
    });
  }

  moduleChildren(
    module: HubModule,
  ): HubMenuItem[] {
    return (
      module.children ?? []
    ) as HubMenuItem[];
  }

  moduleFeatures(
    module: HubModule,
  ): HubMenuItem[] {
    return this.moduleChildren(
      module,
    ).flatMap((item) => {
      const nestedItems =
        this.moduleFeatures(item);

      const isNavigable =
        Boolean(item.rota);

      const isFavoritable =
        item.favoritavel !== false;

      return [
        ...(
          isNavigable &&
          isFavoritable
            ? [item]
            : []
        ),
        ...nestedItems,
      ];
    });
  }

  mobileChildren(
    module: HubModule,
  ): HubMenuItem[] {
    return this.moduleChildren(
      module,
    ).filter((child) =>
      this.isVisibleOnMobile(
        child,
      ),
    );
  }

  isVisibleOnMobile(
    module: HubModule,
  ): boolean {
    const hasVisibleChild =
      this.moduleChildren(
        module,
      ).some((child) =>
        this.isVisibleOnMobile(
          child,
        ),
      );

    const isModuleVisible =
      module.mobile_enabled &&
      !module.legacy_enabled;

    return (
      isModuleVisible ||
      hasVisibleChild
    );
  }

  isRouteActive(
    route: string,
  ): boolean {
    if (!route) {
      return false;
    }

    const cleanRoute =
      route.replace(
        /^\/+/,
        '',
      );

    return this.router.url.startsWith(
      `/hub/${cleanRoute}`,
    );
  }

  itemIsFavorite(
    item: HubMenuItem,
  ): boolean {
    return Boolean(
      item.favorito,
    );
  }

  moduleIconColor(
    module: HubModule,
  ): string {
    const iconColor = (
      module as HubModule & {
        cor_icone?: string;
      }
    ).cor_icone?.trim();

    return iconColor;
  }

  toggleMobileModules(): void {
    this.showAllMobile.update(
      (showAll) => !showAll,
    );
  }

  toggleFavorite(
    nextFavoriteState: boolean,
    item: HubMenuItem,
  ): void {
    this.dashboardService
      .updateFavorite(
        item.slug,
        nextFavoriteState,
      )
      .subscribe({
        next: (updatedItem) => {
          this.hubSession
            .updateModuleFavorite(
              item.slug,
              Boolean(
                updatedItem.favorito,
              ),
            );
        },

        error: (error) => {
          console.error(
            'Não foi possível atualizar o favorito.',
            error,
          );
        },
      });
  }

  navigateFavoriteRoute(route: string){
    this.router.navigate([route]);
  }

  toggleFavoriteFromButton(
    event: Event,
    item: HubMenuItem,
  ): void {
    event.stopPropagation();

    this.toggleFavorite(
      !this.itemIsFavorite(
        item,
      ),
      item,
    );
  }
}
