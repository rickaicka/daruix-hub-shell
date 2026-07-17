import {
  Component,
  computed,
  inject,
  input,
  output
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
