import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter, withDebugTracing } from '@angular/router';
import { provideIonicAngular } from '@ionic/angular/standalone';
import {
  HUB_AUTH_API_URL,
  hubAuthInterceptor,
} from '@daruix/hub-auth';

import { environment } from '../environments/environment';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withDebugTracing()),
    {
      provide: HUB_AUTH_API_URL,
      useValue: environment.apiUrl,
    },
    provideHttpClient(withInterceptors([hubAuthInterceptor])),
    provideIonicAngular(),
  ],
};
