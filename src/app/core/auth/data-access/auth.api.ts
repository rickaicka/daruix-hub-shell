import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { environment } from '../../../../environments/environment';
import {
  HubUser,
  LoginRequest,
  LoginResponse,
  RefreshTokenResponse
} from '../models/auth.models';

@Injectable({
  providedIn: 'root'
})
export class AuthApi {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  login(payload: LoginRequest) {
    return this.http.post<LoginResponse>(
      `${this.apiUrl}/auth/login/`,
      payload
    );
  }

  me() {
    return this.http.get<HubUser>(
      `${this.apiUrl}/auth/me/`
    );
  }

  logout(refresh: string) {
    return this.http.post<{ detail: string }>(
      `${this.apiUrl}/auth/logout/`,
      { refresh }
    );
  }

  refresh(refresh: string) {
    return this.http.post<RefreshTokenResponse>(
      `${this.apiUrl}/auth/refresh/`,
      { refresh }
    );
  }
}
