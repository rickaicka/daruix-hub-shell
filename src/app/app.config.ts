import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection
} from '@angular/core';
import {
  provideHttpClient,
  withInterceptors
} from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideIonicAngular} from '@ionic/angular/standalone';
import {hubAuthInterceptor} from '@daruix/hub-auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([hubAuthInterceptor])
    ),
    provideIonicAngular()
  ]
};
