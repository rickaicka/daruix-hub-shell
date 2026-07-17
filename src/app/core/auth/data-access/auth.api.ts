import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

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

  login(payload: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      `${this.apiUrl}/auth/login/`,
      payload
    );
  }

  me(): Observable<HubUser> {
    return this.http.get<HubUser>(
      `${this.apiUrl}/auth/me/`
    );
  }

  logout(refreshToken: string): Observable<{ detail: string }> {
    return this.http.post<{ detail: string }>(
      `${this.apiUrl}/auth/logout/`,
      {
        refresh_token: refreshToken
      }
    );
  }

  refresh(refreshToken: string): Observable<RefreshTokenResponse> {
    return this.http.post<RefreshTokenResponse>(
      `${this.apiUrl}/auth/refresh/`,
      {
        refresh_token: refreshToken
      }
    );
  }
}
