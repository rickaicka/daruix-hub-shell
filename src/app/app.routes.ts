import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { hubAuthGuard } from '@daruix/hub-auth';

const remoteHost = window.location.hostname;

export const routes: Routes = [
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
          loadRemoteModule({
            remoteName: 'remessas',
            remoteEntry: `http://${remoteHost}:4301/remoteEntry.json`,
            exposedModule: './Routes',
          }).then(
            (remoteModule) => remoteModule.REMESSAS_ROUTES,
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
