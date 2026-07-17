import {
  HubModulo,
  HubSessionInfo,
  HubUser,
} from '@daruix/hub-auth';

export type HubModule = HubModulo;

export type {
  HubSessionInfo,
  HubUser,
};

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  refresh_token: string;
  token_type: 'bearer';
  usuario: HubUser;
  sessao: HubSessionInfo;
}

export interface RefreshTokenResponse {
  access_token: string;
  refresh_token: string;
  token_type: 'bearer';
  sessao: HubSessionInfo;
}

export interface AuthState {
  usuario: HubUser | null;
  accessToken: string | null;
  refreshToken: string | null;
  sessao: HubSessionInfo | null;
  loading: boolean;
  loginSuccess: boolean;
  error: string | null;
}
