import {
  Component,
  DestroyRef,
  computed,
  effect,
  inject,
  signal
} from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterOutlet
} from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IonContent } from '@ionic/angular/standalone';
import { filter } from 'rxjs';

import {
  DrxSidebarComponent,
  DrxSidebarFeature,
  DrxSidebarModule,
  DrxSidebarSelection
} from '@daruix/hub-ui';

import { AuthStore } from '../../auth/store/auth.store';
import { ViewportStore } from '../../device/viewport.store';
import { HubIconComponent } from '../../icons/hub-icon.component';
import { DrxHubHeaderComponent } from '../../../shared/drx-hub-header/drx-hub-header.component';

@Component({
  selector: 'app-hub-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    DrxHubHeaderComponent,
    HubIconComponent,
    DrxSidebarComponent,
    IonContent
  ],
  templateUrl: './hub-layout.component.html',
  styleUrl: './hub-layout.component.scss'
})
export class HubLayoutComponent {
  readonly authStore = inject(AuthStore);
  readonly viewportStore = inject(ViewportStore);

  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  private readonly sessionSynced = signal(false);

  readonly usuario = this.authStore.usuario;
  readonly isMobile = this.viewportStore.isMobile;
  readonly isDesktop = this.viewportStore.isDesktop;

  readonly sidebarCollapsed = signal(false);
  readonly expandedGroups = signal<Record<string, boolean>>({});
  readonly mobileMenuOpen = signal(false);

  readonly currentUrl = signal(
    this.normalizeRoute(this.router.url)
  );

  readonly modulos = computed(() =>
    this.authStore.usuario()?.modulos ?? []
  );

  readonly desktopModulos = computed(() =>
    this.modulos().filter(
      (modulo: any) => modulo.desktop_enabled !== false
    )
  );

  readonly mobileModulos = computed(() =>
    this.modulos().filter((modulo: any) =>
      this.isVisibleOnMobile(modulo)
    )
  );

  /**
   * Adapta o contrato retornado pelo BFF ao contrato estável do Design System.
   *
   * Estrutura final:
   * módulo -> categoria -> feature.
   */
  readonly sidebarItems = computed<readonly DrxSidebarModule[]>(() =>
    this.desktopModulos().map((module: any, moduleIndex: number) =>
      this.toSidebarModule(module, moduleIndex)
    )
  );

  constructor() {
    this.authStore.syncFromSession();
    this.sessionSynced.set(true);

    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd =>
            event instanceof NavigationEnd
        ),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(event => {
        this.currentUrl.set(
          this.normalizeRoute(event.urlAfterRedirects)
        );
      });

    effect(() => {
      if (!this.sessionSynced()) {
        return;
      }

      if (!this.authStore.isLoggedIn()) {
        void this.router.navigate(['/login']);
      }
    });
  }

  logout(): void {
    this.authStore.logout();
  }

  toggleSidebar(): void {
    this.sidebarCollapsed.update(value => !value);
  }

  handleSidebarSelection(
    selection: DrxSidebarSelection
  ): void {
    this.navigateRoute(selection.route);
  }

  moduleChildren(modulo: any): any[] {
    return (
      modulo?.children ??
      modulo?.submodulos ??
      modulo?.submodules ??
      modulo?.modulos ??
      []
    );
  }

  moduleName(modulo: any): string {
    return (
      modulo?.nome ??
      modulo?.name ??
      modulo?.label ??
      modulo?.slug ??
      'Item'
    );
  }

  moduleIcon(modulo: any): string {
    return (
      this.explicitIcon(modulo) ??
      modulo?.slug ??
      'square'
    );
  }

  moduleRoute(modulo: any): string {
    return (
      this.explicitRoute(modulo) ||
      modulo?.modulo_slug ||
      ''
    );
  }

  isActiveModule(modulo: any): boolean {
    const route = this.moduleRoute(modulo);
    const currentUrl = this.currentUrl();

    if (route) {
      const targetRoute = this.normalizeRoute(
        this.buildHubRoute(route)
      );

      if (
        currentUrl === targetRoute ||
        currentUrl.startsWith(`${targetRoute}/`)
      ) {
        return true;
      }
    }

    return this.moduleChildren(modulo).some(child =>
      this.isActiveModule(child)
    );
  }

  navigateRoute(route: string): void {
    const targetRoute = this.buildHubRoute(route);

    if (!targetRoute) {
      return;
    }

    void this.router.navigateByUrl(targetRoute);
  }

  openMobileMenu(): void {
    this.mobileMenuOpen.set(true);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(value => !value);
  }

  toggleGroup(slug: string): void {
    this.expandedGroups.update(groups => ({
      ...groups,
      [slug]: !(groups[slug] ?? true)
    }));
  }

  isGroupOpen(slug: string): boolean {
    return this.expandedGroups()[slug] ?? true;
  }

  handleMobileModuleClick(modulo: any): void {
    const children = this.mobileChildren(modulo);

    if (children.length > 0) {
      this.toggleGroup(this.moduleKey(modulo));
      return;
    }

    this.navigateMobileMenuItem(modulo);
  }

  navigateMobileMenuItem(item: any): void {
    const route = this.moduleRoute(item);

    if (!route) {
      return;
    }

    this.closeMobileMenu();
    this.navigateRoute(route);
  }

  mobileChildren(modulo: any): any[] {
    return this.moduleChildren(modulo).filter(child =>
      this.isVisibleOnMobile(child)
    );
  }

  isVisibleOnMobile(modulo: any): boolean {
    const children = this.moduleChildren(modulo);
    const hasVisibleChild = children.some(child =>
      this.isVisibleOnMobile(child)
    );

    return (
      hasVisibleChild ||
      (modulo?.mobile_enabled && !modulo?.legacy_enabled)
    );
  }

  moduleAvailabilityLabel(modulo: any): string {
    if (modulo?.legacy_enabled === true) {
      return 'legado';
    }

    if (modulo?.mobile_enabled !== false) {
      return 'mobile';
    }

    return 'web';
  }

  isRouteActive(route: string): boolean {
    const currentRoute = this.currentUrl();
    const targetRoute = this.normalizeRoute(
      this.buildHubRoute(route)
    );

    return (
      currentRoute === targetRoute ||
      currentRoute.startsWith(`${targetRoute}/`)
    );
  }

  moduleKey(modulo: any): string {
    return String(
      modulo?.slug ??
      modulo?.id ??
      modulo?.modulo_slug ??
      modulo?.rota ??
      modulo?.route ??
      this.moduleName(modulo)
    );
  }

  private toSidebarModule(
    module: any,
    moduleIndex: number
  ): DrxSidebarModule {
    const moduleId = this.nodeId(
      module,
      `module-${moduleIndex}`
    );
    const children = this.moduleChildren(module).filter(
      child => child?.desktop_enabled !== false
    );

    const categories: Array<{
      id: string;
      label: string;
      icon?: string;
      features: readonly DrxSidebarFeature[];
    }> = [];
    const directFeatures: DrxSidebarFeature[] = [];
    const moduleBaseRoute = this.resolveModuleBaseRoute(module);

    children.forEach((child, categoryIndex) => {
      const grandchildren = this.moduleChildren(child).filter(
        feature => feature?.desktop_enabled !== false
      );

      if (grandchildren.length === 0) {
        const directFeature = this.toSidebarFeature(
          child,
          moduleId,
          'general',
          categoryIndex,
          moduleBaseRoute
        );

        if (directFeature) {
          directFeatures.push(directFeature);
        }

        return;
      }

      const categoryId = this.nodeId(
        child,
        `category-${categoryIndex}`
      );
      const features = grandchildren
        .map((feature, featureIndex) =>
          this.toSidebarFeature(
            feature,
            moduleId,
            categoryId,
            featureIndex,
            moduleBaseRoute
          )
        )
        .filter(
          (feature): feature is DrxSidebarFeature =>
            feature !== null
        );

      if (features.length > 0) {
        categories.push({
          id: `${moduleId}:${categoryId}`,
          label: this.moduleName(child),
          icon: this.explicitIcon(child),
          features
        });
      }
    });

    if (directFeatures.length > 0) {
      categories.unshift({
        id: `${moduleId}:general`,
        label: 'Geral',
        features: directFeatures
      });
    }

    return {
      id: moduleId,
      label: this.moduleName(module),
      icon: this.moduleIcon(module),
      route: moduleBaseRoute || undefined,
      categories
    };
  }

  private toSidebarFeature(
    feature: any,
    moduleId: string,
    categoryId: string,
    featureIndex: number,
    moduleBaseRoute: string
  ): DrxSidebarFeature | null {
    // Uma feature nunca pode usar `modulo_slug` como rota. Esse campo
    // identifica o MFE/módulo proprietário, não a tela final.
    const explicitRoute = this.explicitRoute(feature);

    if (!explicitRoute) {
      return null;
    }

    const featureId = this.nodeId(
      feature,
      `feature-${featureIndex}`
    );

    return {
      id: `${moduleId}:${categoryId}:${featureId}`,
      label: this.moduleName(feature),
      icon: this.explicitIcon(feature),
      route: this.resolveFeatureRoute(
        explicitRoute,
        moduleBaseRoute
      ),
      disabled: feature?.desktop_enabled === false
    };
  }

  private nodeId(node: any, fallback: string): string {
    return String(
      node?.slug ??
      node?.id ??
      node?.modulo_slug ??
      node?.rota ??
      node?.route ??
      fallback
    );
  }

  private explicitIcon(node: any): string | undefined {
    const icon =
      node?.icone ??
      node?.icon ??
      node?.icone_nome ??
      node?.icon_name;

    if (typeof icon !== 'string' || !icon.trim()) {
      return undefined;
    }

    return icon.trim();
  }

  private explicitRoute(node: any): string {
    const route =
      node?.rota ??
      node?.route ??
      node?.url ??
      node?.path ??
      node?.caminho ??
      node?.modulo_rota;

    if (typeof route !== 'string') {
      return '';
    }

    return route.trim();
  }

  private resolveModuleBaseRoute(module: any): string {
    const route =
      this.explicitRoute(module) ||
      (typeof module?.modulo_slug === 'string'
        ? module.modulo_slug.trim()
        : '');

    return route ? this.buildHubRoute(route) : '';
  }

  private resolveFeatureRoute(
    featureRoute: string,
    moduleBaseRoute: string
  ): string {
    if (featureRoute.startsWith('/hub')) {
      return this.normalizeRoute(featureRoute);
    }

    if (
      featureRoute === 'hub' ||
      featureRoute.startsWith('hub/')
    ) {
      return this.buildHubRoute(featureRoute);
    }

    const isRootRelative = featureRoute.startsWith('/');
    const cleanFeatureRoute = featureRoute.replace(/^\/+/, '');

    if (!moduleBaseRoute) {
      return this.buildHubRoute(cleanFeatureRoute);
    }

    const cleanModuleRoute = moduleBaseRoute.replace(
      /^\/hub\/?/,
      ''
    );

    if (
      cleanFeatureRoute === cleanModuleRoute ||
      cleanFeatureRoute.startsWith(`${cleanModuleRoute}/`) ||
      isRootRelative
    ) {
      return this.buildHubRoute(cleanFeatureRoute);
    }

    return `${this.normalizeRoute(moduleBaseRoute)}/${cleanFeatureRoute}`;
  }

  private buildHubRoute(route: string): string {
    if (!route) {
      return '/hub';
    }

    const normalizedInput = route.trim();

    if (normalizedInput.startsWith('/hub')) {
      return this.normalizeRoute(normalizedInput);
    }

    if (
      normalizedInput === 'hub' ||
      normalizedInput.startsWith('hub/')
    ) {
      return this.normalizeRoute(`/${normalizedInput}`);
    }

    const cleanRoute = normalizedInput.replace(/^\/+/, '');

    if (!cleanRoute) {
      return '/hub';
    }

    return `/hub/${cleanRoute}`;
  }

  private normalizeRoute(route: string): string {
    const cleanRoute = route
      .split('?')[0]
      .split('#')[0]
      .replace(/\/+$/, '');

    return cleanRoute || '/';
  }
}
