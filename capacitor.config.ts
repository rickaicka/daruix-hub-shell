import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'br.com.daruix.hub',
  appName: 'Daruix Hub',
  webDir: 'www',
  android: {
    allowMixedContent: true,
    webContentsDebuggingEnabled: true,
  },
  server: { cleartext: true },
  plugins: {
    SplashScreen: {
      launchAutoHide: true,
      backgroundColor: '#15151D',
      showSpinner: false,
      launchFadeOutDuration: 250,
    },
  },
};
export default config;
