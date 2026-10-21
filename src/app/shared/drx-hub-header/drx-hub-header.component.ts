import {
  Component,
  ElementRef,
  HostListener,
  computed,
  inject,
  input,
  output,
  signal,
  viewChild
} from '@angular/core';
import {
  NavigationEnd,
  Router
} from '@angular/router';
import {
  toSignal
} from '@angular/core/rxjs-interop';
import {
  filter,
  map,
  startWith
} from 'rxjs';

import {
  LucideBell,
  LucideChevronDown,
  LucideMenu,
  LucideUser
} from '@lucide/angular';

import {
  HubModulo,
  HubUser
} from '@daruix/hub-auth';

@Component({
  selector: 'app-drx-hub-header',
  standalone: true,
  imports: [
    LucideMenu,
    LucideBell,
    LucideUser,
    LucideChevronDown
  ],
  templateUrl: './drx-hub-header.component.html',
  styleUrl: './drx-hub-header.component.scss'
})
export class DrxHubHeaderComponent {
  private readonly router = inject(Router);

  userLogged = input<HubUser | null>();
  isMobile = input<boolean>(false);
  modulos = input<HubModulo[]>([]);
  sidebarCollapsed = input<boolean>(false);

  menuToggle = output<void>();
  readonly logoutSelected = output<void>();
  readonly userMenuOpen = signal(false);
  private readonly userMenu = viewChild<ElementRef<HTMLElement>>('userMenu');
  private readonly userMenuTrigger = viewChild<ElementRef<HTMLButtonElement>>('userMenuTrigger');

  toggleUserMenu(): void {
    this.userMenuOpen.update((open) => !open);
  }

  selectLogout(): void {
    this.userMenuOpen.set(false);
    this.logoutSelected.emit();
  }

  @HostListener('document:click', ['$event'])
  closeUserMenuOnOutsideClick(event: MouseEvent): void {
    const container = this.userMenu()?.nativeElement;
    if (this.userMenuOpen() && container && !container.contains(event.target as Node)) {
      this.userMenuOpen.set(false);
    }
  }

  @HostListener('document:keydown.escape')
  closeUserMenuOnEscape(): void {
    if (this.userMenuOpen()) {
      this.userMenuOpen.set(false);
      this.userMenuTrigger()?.nativeElement.focus();
    }
  }

  closeUserMenuOnFocusOut(event: FocusEvent): void {
    const container = this.userMenu()?.nativeElement;
    if (container && !container.contains(event.relatedTarget as Node | null)) {
      this.userMenuOpen.set(false);
    }
  }


  /**
   * Rotas em que a apresentação do usuário deve aparecer.
   *
   * As variações permitem que o componente continue funcionando
   * caso o dashboard seja registrado como /dashboard ou /hub/dashboard.
   */
  private readonly mobileWelcomeRoutes = new Set<string>([
    '/',
    '/hub',
    '/dashboard',
    '/hub/dashboard'
  ]);

  /**
   * URL reativa do Router do Shell.
   *
   * urlAfterRedirects evita considerar uma rota anterior quando
   * houver redirecionamento.
   *
   * startWith permite que a regra funcione quando a página é
   * atualizada diretamente dentro de um MFE.
   */
  private readonly currentUrl = toSignal(
    this.router.events.pipe(
      filter(
        (event): event is NavigationEnd =>
          event instanceof NavigationEnd
      ),
      map((event) => event.urlAfterRedirects),
      startWith(this.router.url)
    ),
    {
      initialValue: this.router.url
    }
  );

  /**
   * A saudação aparece somente no dashboard mobile.
   */
  readonly showMobileWelcome = computed<boolean>(() => {
    if (!this.isMobile()) {
      return false;
    }

    const currentRoute = this.normalizeRoute(
      this.currentUrl()
    );

    return this.mobileWelcomeRoutes.has(
      currentRoute
    );
  });

  /**
   * Em qualquer rota diferente do dashboard, o header
   * mobile fica compacto.
   */
  readonly compactMobileHeader = computed<boolean>(() =>
    this.isMobile() &&
    !this.showMobileWelcome()
  );

  private normalizeRoute(url: string): string {
    const routeWithoutParameters = url
      .split('?')[0]
      .split('#')[0];

    const routeWithoutTrailingSlash =
      routeWithoutParameters.replace(/\/+$/, '');

    return routeWithoutTrailingSlash || '/';
  }
}
