import {HubUser} from '@daruix/hub-auth';

export type { HubUser };

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  refresh_token: string;
  token_type: string;
  usuario: HubUser;
}

export interface RefreshTokenResponse {
  access_token: string;
}

export interface AuthState {
  usuario: HubUser | null;
  accessToken: string | null;
  refreshToken: string | null;
  loading: boolean;
  loginSuccess: boolean;
  error: string | null;
}
