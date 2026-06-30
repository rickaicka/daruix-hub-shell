import {
  Component,
  computed,
  DestroyRef,
  effect,
  inject,
  signal
} from '@angular/core';
import { Router } from '@angular/router';
import {
  form,
  FormField,
  required,
  submit
} from '@angular/forms/signals';
import { FormsModule } from '@angular/forms';
import {
  LucideArrowRightFromLine,
  LucideChartNoAxesCombined,
  LucideLayoutGrid,
  LucideLoader,
  LucideLockKeyhole,
  LucideShieldCheck,
  LucideUserRound
} from '@lucide/angular';
import { Platform } from '@ionic/angular';

import { AuthStore } from '../../core/auth/store/auth.store';

type LoginFormModel = {
  username: string;
  password: string;
};

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormField,
    FormsModule,
    LucideShieldCheck,
    LucideLayoutGrid,
    LucideChartNoAxesCombined,
    LucideUserRound,
    LucideLockKeyhole,
    LucideArrowRightFromLine,
    LucideLoader
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  readonly authStore = inject(AuthStore);

  private readonly router = inject(Router);
  private readonly platform = inject(Platform);
  private readonly destroyRef = inject(DestroyRef);

  private readonly isSmallScreen = signal(false);

  readonly isMobile = computed(() => {
    return (
      this.isSmallScreen() ||
      this.platform.is('ios') ||
      this.platform.is('android') ||
      this.platform.is('mobileweb')
    );
  });

  readonly loginModel = signal<LoginFormModel>({
    username: '',
    password: ''
  });

  readonly loginForm = form(this.loginModel, (path: any) => {
    required(path.username, {
      message: 'Login é obrigatório.'
    });

    required(path.password, {
      message: 'Senha é obrigatória.'
    });
  });

  constructor() {
    this.authStore.syncFromSession();

    effect(() => {
      if (this.authStore.isLoggedIn()) {
        this.router.navigate(['/hub']);
      }
    });

    this.listenScreenSize();
  }

  onSubmit(): void {
    submit(this.loginForm, async () => {
      const { username, password } = this.loginModel();

      this.authStore.login({
        username,
        password
      });
    });
  }

  private listenScreenSize(): void {
    const mediaQuery = window.matchMedia('(max-width: 900px)');

    this.isSmallScreen.set(mediaQuery.matches);

    const onChange = (event: MediaQueryListEvent) => {
      this.isSmallScreen.set(event.matches);
    };

    mediaQuery.addEventListener('change', onChange);

    this.destroyRef.onDestroy(() => {
      mediaQuery.removeEventListener('change', onChange);
    });
  }
}
