import { afterNextRender, Component, DestroyRef, inject } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, Router, RouterOutlet } from '@angular/router';
import { HubUserActivityService } from '@daruix/hub-auth';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly userActivity = inject(HubUserActivityService);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    this.userActivity.start();

    // Keep the startup overlay visible until the first route is ready.
    afterNextRender(() => {
      const hideLoader = () => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            document.getElementById('daruix-startup-loader')?.remove();
          });
        });
      };

      if (this.router.navigated) {
        hideLoader();
        return;
      }

      const subscription = this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
          subscription.unsubscribe();
          hideLoader();
        }
      });
      this.destroyRef.onDestroy(() => subscription.unsubscribe());

      // Prevent a permanent overlay if the remote module fails to initialize.
      const timeoutId = window.setTimeout(() => {
        subscription.unsubscribe();
        hideLoader();
      }, 15000);
      this.destroyRef.onDestroy(() => window.clearTimeout(timeoutId));
    });
  }
}
