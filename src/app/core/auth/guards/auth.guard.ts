import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AuthStore } from '../store/auth.store';

export const permissionGuard: CanActivateFn = (route) => {
  const authStore = inject(AuthStore);
  const router = inject(Router);

  const requiredPermission = route.data?.['permission'] as string | undefined;

  if (!requiredPermission) {
    return true;
  }

  if (authStore.hasPermission(requiredPermission)) {
    return true;
  }

  return router.createUrlTree(['/unauthorized']);
};
