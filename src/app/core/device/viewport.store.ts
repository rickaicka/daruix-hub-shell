import {
  computed,
  DestroyRef,
  inject,
  Injectable,
  PLATFORM_ID,
  signal
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ViewportStore {
  private readonly platform = inject(Platform);
  private readonly destroyRef = inject(DestroyRef);
  private readonly platformId = inject(PLATFORM_ID);

  private readonly isBrowser = isPlatformBrowser(this.platformId);

  private readonly isSmallScreenState = signal(false);

  readonly isSmallScreen = this.isSmallScreenState.asReadonly();

  readonly isMobile = computed(() => {
    return (
      this.isSmallScreen() ||
      this.platform.is('ios') ||
      this.platform.is('android') ||
      this.platform.is('mobileweb')
    );
  });

  readonly isDesktop = computed(() => !this.isMobile());

  constructor() {
    if (!this.isBrowser) {
      return;
    }

    const mediaQuery = window.matchMedia('(max-width: 900px)');

    const updateScreenSize = () => {
      this.isSmallScreenState.set(mediaQuery.matches);
    };

    updateScreenSize();

    mediaQuery.addEventListener('change', updateScreenSize);

    this.destroyRef.onDestroy(() => {
      mediaQuery.removeEventListener('change', updateScreenSize);
    });
  }
}
