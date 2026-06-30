import { Routes } from '@angular/router';
import {loadRemoteModule} from '@angular-architects/native-federation';
import {hubAuthGuard} from '@daruix/hub-auth';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component')
        .then(c => c.LoginComponent)
  },
  {
    path: 'hub',
    canActivate: [hubAuthGuard],
    loadComponent: () =>
      import('./core/layout/hub-layout/hub-layout.component')
        .then(c => c.HubLayoutComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '',
      },
      {
        path: 'remessas',
        loadChildren: () =>
          loadRemoteModule('remessas', './Routes')
            .then((m) => {
              console.log('[Shell] Remote remessas module:', m);
              console.log('[Shell] REMESSAS_ROUTES:', m.REMESSAS_ROUTES);

              return m.REMESSAS_ROUTES;
            }),
      }
    ],

  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'hub'
  },
  {
    path: '**',
    redirectTo: 'hub'
  }
];
