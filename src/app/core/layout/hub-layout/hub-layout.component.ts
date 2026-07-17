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
import { IonContent } from '@ionic/angular/standalone';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { AuthStore } from '../../auth/store/auth.store';
import { ViewportStore } from '../../device/viewport.store';
import { DrxHubHeaderComponent } from '../../../shared/drx-hub-header/drx-hub-header.component';
import { HubIconComponent } from '../../icons/hub-icon.component';

@Component({
  selector: 'app-hub-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    DrxHubHeaderComponent,
    HubIconComponent,
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
  readonly collapsedMenuOpen = signal(false);
  readonly expandedGroups = signal<Record<string, boolean>>({});
  readonly mobileMenuOpen = signal(false);

  readonly currentUrl = signal(this.normalizeRoute(this.router.url));

  readonly nomeUsuario = computed(() =>
    this.authStore.usuario()?.nome ?? 'Usuário'
  );

  readonly permissoes = computed(() =>
    this.authStore.usuario()?.permissoes ?? []
  );

  readonly modulos = computed(() =>
    this.authStore.usuario()?.modulos ?? []
  );

  readonly desktopModulos = computed(() =>
    this.modulos().filter((modulo: any) => modulo.desktop_enabled !== false)
  );

  readonly mobileModulos = computed(() =>
    this.modulos().filter((modulo: any) => this.isVisibleOnMobile(modulo))
  );


  constructor() {
    this.authStore.syncFromSession();
    this.sessionSynced.set(true);

    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(event => {
        this.currentUrl.set(this.normalizeRoute(event.urlAfterRedirects));
      });

    effect(() => {
      if (!this.sessionSynced()) {
        return;
      }

      if (!this.authStore.isLoggedIn()) {
        this.router.navigate(['/login']);
      }
    });
  }

  logout(): void {
    this.authStore.logout();
  }

  toggleSidebar(): void {
    this.sidebarCollapsed.update(value => !value);
    this.closeCollapsedMenu();
  }

  openCollapsedMenu(): void {
    if (!this.sidebarCollapsed()) {
      return;
    }

    this.collapsedMenuOpen.set(true);
  }

  closeCollapsedMenu(): void {
    this.collapsedMenuOpen.set(false);
  }

  handleModuleClick(modulo: any): void {
    const children = this.moduleChildren(modulo);

    if (this.sidebarCollapsed()) {
      if (children.length > 0) {
        this.openCollapsedMenu();
        return;
      }

      this.navigateMenuItem(modulo);
      return;
    }

    if (children.length > 0) {
      this.toggleGroup(modulo.slug);
      return;
    }

    this.navigateMenuItem(modulo);
  }

  handleCollapsedPanelGroupClick(modulo: any): void {
    const children = this.moduleChildren(modulo);

    if (children.length > 0) {
      this.toggleGroup(modulo.slug);
      return;
    }

    this.navigateMenuItem(modulo);
  }

  navigateMenuItem(item: any): void {
    const route = this.moduleRoute(item);

    if (!route) {
      return;
    }

    this.closeCollapsedMenu();
    this.closeMobileMenu();
    this.navigateRoute(route);
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

  moduleChildren(modulo: any): any[] {
    return (
      modulo.children ??
      modulo.submodulos ??
      modulo.submodules ??
      modulo.modulos ??
      []
    );
  }

  moduleName(modulo: any): string {
    return modulo.nome ?? modulo.name ?? modulo.slug;
  }

  moduleIcon(modulo: any): string {
    return modulo.icone ?? modulo.icon ?? modulo.slug ?? 'square';
  }

  moduleRoute(modulo: any): string {
    return modulo.rota ?? modulo.route ?? '';
  }

  isActiveModule(modulo: any): boolean {
    const route = this.moduleRoute(modulo);
    const currentUrl = this.currentUrl();

    if (route) {
      const targetRoute = this.normalizeRoute(this.buildHubRoute(route));

      if (
        currentUrl === targetRoute ||
        currentUrl.startsWith(`${targetRoute}/`)
      ) {
        return true;
      }
    }

    return this.moduleChildren(modulo).some(child => this.isActiveModule(child));
  }

  getModuleRoute(rota: string): string[] {
    return [this.buildHubRoute(rota)];
  }

  navigateRoute(rota: string): void {
    const route = this.buildHubRoute(rota);

    if (!route) {
      return;
    }

    this.router.navigateByUrl(route);
  }

  private buildHubRoute(rota: string): string {
    if (!rota) {
      return '/hub';
    }

    if (rota.startsWith('/hub')) {
      return rota;
    }

    const cleanRoute = rota.replace(/^\/+/, '');

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

  openMobileMenu(): void {
    this.mobileMenuOpen.set(true);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(value => !value);
  }

  handleMobileModuleClick(modulo: any): void {
    const children = this.mobileChildren(modulo);

    if (children.length > 0) {
      this.toggleGroup(modulo.slug);
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
    return this.moduleChildren(modulo).filter(child => this.isVisibleOnMobile(child));
  }

  isVisibleOnMobile(modulo: any): boolean {
    const children = this.moduleChildren(modulo);

    const hasVisibleChild = children.some(child => this.isVisibleOnMobile(child));

    return (hasVisibleChild || (modulo.mobile_enabled && !modulo.legacy_enabled));
  }

  moduleAvailabilityLabel(modulo: any): string {
    if (modulo.legacy_enabled === true) {
      return 'legado';
    }

    if (modulo.mobile_enabled !== false) {
      return 'mobile';
    }

    return 'web';
  }

  isRouteActive(route: string): boolean {
    const currentRoute = this.currentUrl();
    const targetRoute = this.normalizeRoute(this.buildHubRoute(route));

    return (
      currentRoute === targetRoute ||
      currentRoute.startsWith(`${targetRoute}/`)
    );
  }
}
