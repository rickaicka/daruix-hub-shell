import { HttpInterceptorFn } from '@angular/common/http';

const ACCESS_TOKEN_KEY = 'daruix_hub_access_token';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem(ACCESS_TOKEN_KEY);

  if (!token) {
    return next(req);
  }

  const authRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });

  return next(authRequest);
};
