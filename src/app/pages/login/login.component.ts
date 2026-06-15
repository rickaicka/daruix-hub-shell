import { Component, effect, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import {
  email,
  form,
  FormField,
  FormRoot,
  required,
  submit
} from '@angular/forms/signals';

import { AuthStore } from '../../core/auth/store/auth.store';

type LoginFormModel = {
  email: string;
  password: string;
};

@Component({
  selector: 'app-login',
  imports: [
    FormRoot,
    FormField
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  readonly authStore = inject(AuthStore);
  private readonly router = inject(Router);

  readonly loginModel = signal<LoginFormModel>({
    email: 'admin@daruix.com.br',
    password: '123456',
  });

  readonly loginForm = form(this.loginModel, (path: any) => {
    required(path.email, {
      message: 'E-mail é obrigatório.',
    });

    email(path.email, {
      message: 'Informe um e-mail válido.',
    });

    required(path.password, {
      message: 'Senha é obrigatória.',
    });
  });

  constructor() {
    effect(() => {
      if (this.authStore.isLoggedIn()) {
        this.router.navigate(['/']);
      }
    });
  }

  onSubmit(): void {
    submit(this.loginForm, async () => {
      const { email, password } = this.loginModel();

      this.authStore.login({
        email,
        password,
      });
    });
  }
}
