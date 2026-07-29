import { Component, computed, inject, signal } from "@angular/core";
import { Router } from "@angular/router";
import {
  IonCard,
  IonCardContent,
  IonCol,
  IonGrid,
  IonRow,
} from "@ionic/angular/standalone";

import { AuthStore } from "../../core/auth/store/auth.store";
import { HubModule } from "../../core/auth/models/auth.models";
import { ViewportStore } from "../../core/device/viewport.store";
import { HubIconComponent } from "../../core/icons/hub-icon.component";
import { HubDashboardService } from "./hub-dashboard.service";
import {CardComponent} from '@daruix/hub-ui';

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
  selector: "app-hub-dashboard",
  standalone: true,
  imports: [IonCard, IonCardContent, IonGrid, IonRow, IonCol, HubIconComponent, CardComponent],
  templateUrl: "./hub-dashboard.component.html",
  styleUrl: "./hub-dashboard.component.scss",
})
export class HubDashboardComponent {
  private readonly router = inject(Router);
  private readonly viewportStore = inject(ViewportStore);
  private readonly dashboardService = inject(HubDashboardService);
  private readonly favoriteOverrides = signal<Record<string, boolean>>({});

  readonly authStore = inject(AuthStore);

  readonly isMobile = this.viewportStore.isMobile;
  readonly isDesktop = this.viewportStore.isDesktop;

  readonly userModules = this.authStore.userModules;

  readonly mobilePreviewLimit = 9;
  readonly showAllMobile = signal(false);

  readonly mobileModulos = computed<HubModule[]>(() =>
    this.userModules().filter((module) => this.isVisibleOnMobile(module)),
  );

  readonly visibleMobileModules = computed<HubModule[]>(() => {
    const modules = this.mobileModulos();

    return this.showAllMobile()
      ? modules
      : modules.slice(0, this.mobilePreviewLimit);
  });

  readonly onlyFavorites = computed<FavoriteMenuItem[]>(() => {
    this.favoriteOverrides();

    return this.userModules().flatMap((module) =>
      this.moduleFeatures(module)
        .filter(
          (item) => this.itemIsFavorite(item) && item.desktop_enabled !== false,
        )
        .map((item) => ({ item, module })),
    );
  });

  navigateRoute(route: string): void {
    if (!route?.trim()) {
      return;
    }

    const cleanRoute = route
      .trim()
      .replace(/^\/hub\/?/, '')
      .replace(/^\/+/, '');

    void this.router.navigate(['/hub', cleanRoute]);
  }

  moduleChildren(module: HubModule): HubMenuItem[] {
    return (module.children ?? []) as HubMenuItem[];
  }

  moduleFeatures(module: HubModule): HubMenuItem[] {
    return this.moduleChildren(module).flatMap((item) => {
      const nestedItems = this.moduleFeatures(item);
      const isNavigable = Boolean(item.rota);
      const isFavoritable = item.favoritavel !== false;

      return [...(isNavigable && isFavoritable ? [item] : []), ...nestedItems];
    });
  }

  mobileChildren(module: HubModule): HubMenuItem[] {
    return this.moduleChildren(module).filter((child) =>
      this.isVisibleOnMobile(child),
    );
  }

  isVisibleOnMobile(module: HubModule): boolean {
    const hasVisibleChild = this.moduleChildren(module).some((child) =>
      this.isVisibleOnMobile(child),
    );

    const isModuleVisible = module.mobile_enabled && !module.legacy_enabled;

    return isModuleVisible || hasVisibleChild;
  }

  isRouteActive(route: string): boolean {
    if (!route) {
      return false;
    }

    const cleanRoute = route.replace(/^\/+/, "");
    return this.router.url.startsWith(`/hub/${cleanRoute}`);
  }

  itemIsFavorite(item: HubMenuItem): boolean {
    return this.favoriteOverrides()[item.slug] ?? Boolean(item.favorito);
  }

  moduleIconColor(module: HubModule): string {
    const iconColor = (
      module as HubModule & { cor_icone?: string }
    ).cor_icone?.trim();

    return iconColor;
  }

  toggleMobileModules(): void {
    this.showAllMobile.update((showAll) => !showAll);
  }

  toggleFavorite(
    nextFavoriteState: boolean,
    item: HubMenuItem,
  ): void {
    this.dashboardService
      .updateFavorite(item.slug, nextFavoriteState)
      .subscribe({
        next: (updatedItem) => {
          const favoriteState = Boolean(updatedItem.favorito);

          item.favorito = favoriteState;

          this.favoriteOverrides.update((overrides) => ({
            ...overrides,
            [item.slug]: favoriteState,
          }));
        },
        error: (error) => {
          console.error(
            'Não foi possível atualizar o favorito.',
            error,
          );
        },
      });
  }

  toggleFavoriteFromButton(
    event: Event,
    item: HubMenuItem,
  ): void {
    event.stopPropagation();

    this.toggleFavorite(
      !this.itemIsFavorite(item),
      item,
    );
  }
}
