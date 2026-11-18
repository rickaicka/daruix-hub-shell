import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { hubAuthGuard } from '@daruix/hub-auth';

export const routes: Routes = [
// Portal externo do fornecedor: mesma URL já enviada nos convites pelo BFF.
// Esta rota deve vir ANTES de `hub`, para não montar o layout interno
// (sidebar, header, breadcrumbs) e não exigir sessão de colaborador.
{
  path: 'hub/obras/leilao-reverso',
  loadChildren: () =>
    loadRemoteModule('obras', './Routes').then((m) => {
      // Reutiliza a tela do MFE, sem expor as demais rotas do módulo.
      const tenderRoute = (m.OBRAS_ROUTES as Routes).find(
        (route) => route.path === 'leilao-reverso',
      );
      if (!tenderRoute?.loadComponent) {
        throw new Error('Rota leilao-reverso não encontrada no MFE Obras.');
      }
      return [{ path: '', loadComponent: tenderRoute.loadComponent }];
    }),
},
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then(
        ({ LoginComponent }) => LoginComponent,
      ),
  },
  {
    path: 'hub',
    canActivate: [hubAuthGuard],
    loadComponent: () =>
      import('./core/layout/hub-layout/hub-layout.component').then(
        ({ HubLayoutComponent }) => HubLayoutComponent,
      ),
    children: [
      {
        path: 'dashboard',

        loadComponent: () =>
          import('./pages/hub-dashboard/hub-dashboard.component').then(
            ({ HubDashboardComponent }) => HubDashboardComponent,
          ),
      },
      {
        path: 'remessas',
        loadChildren: () =>
          loadRemoteModule('remessas', './Routes').then(
            (m) => m.REMESSAS_ROUTES,
          ),
      },
      {
        path: 'obras',
        loadChildren: () =>
          loadRemoteModule('obras', './Routes').then(
            (m) => m.OBRAS_ROUTES,
          ),
      },
      {
        path: 'gestao-administrativa',
        loadChildren: () =>
          loadRemoteModule('gestao-administrativa', './Routes').then(
            (m) => m.CADASTROS_ROUTES,
          ),
      },
      {
        path: 'ordens-compra',
        loadChildren: () =>
          loadRemoteModule('ordens-compra', './Routes').then(
            (m) => m.ORDENS_COMPRA_ROUTES,
          ),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'hub',
  },
  {
    path: '**',
    redirectTo: 'hub',
  },
];
