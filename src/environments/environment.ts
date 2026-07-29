const host = window.location.hostname;

export const environment = {
  production: false,
  apiUrl: `http://${host}:8000/api`,
  remotes: {
    remessas: `http://${host}:4301/remoteEntry.json`,
  },
} as const;
