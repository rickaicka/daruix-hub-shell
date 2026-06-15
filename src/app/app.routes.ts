import { Routes } from '@angular/router';

import { authGuard } from './core/auth/guards/auth.guard';
import { permissionGuard } from './core/auth/guards/permission.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component')
        .then(c => c.LoginComponent)
  },
  {
    path: 'unauthorized',
    loadComponent: () =>
      import('./pages/unauthorized/unauthorized.component')
        .then(c => c.UnauthorizedComponent)
  },
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./core/layout/hub-layout/hub-layout.component')
        .then(c => c.HubLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component')
            .then(c => c.DashboardComponent)
      },
      {
        path: 'remessas',
        canActivate: [permissionGuard],
        data: {
          permission: 'remessas.access'
        },
        loadComponent: () =>
          import('./pages/remessas-placeholder/remessas-placeholder.component')
            .then(c => c.RemessasPlaceholderComponent)
      },
      {
        path: 'admin',
        canActivate: [permissionGuard],
        data: {
          permission: 'admin.access'
        },
        loadComponent: () =>
          import('./pages/admin-placeholder/admin-placeholder.component')
            .then(c => c.AdminPlaceholderComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
