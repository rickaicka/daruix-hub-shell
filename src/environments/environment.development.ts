const host = window.location.hostname;

export const environment = {
  production: false,
  apiUrl: `http://${host}:8000/api`,
} as const;
