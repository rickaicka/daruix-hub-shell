export interface HubUser {
  id: number;
  name: string;
  email: string;
  role: string;
  apps: string[];
  permissions: string[];
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  access: string;
  refresh: string;
  user: HubUser;
}

export interface RefreshTokenResponse {
  access: string;
}

export interface AuthState {
  user: HubUser | null;
  accessToken: string | null;
  refreshToken: string | null;
  loading: boolean;
  error: string | null;
}
