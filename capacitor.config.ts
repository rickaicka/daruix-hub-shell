import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'br.com.daruix.hub',
  appName: 'Daruix Hub',
  webDir: 'www',

  android: {
    allowMixedContent: true,
    webContentsDebuggingEnabled: true,
  },

  server: {
    cleartext: true,
  },
};

export default config;
