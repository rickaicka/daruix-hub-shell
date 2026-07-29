import "@nf-internal/chunk-C4FLJMU7";
import { registerPlugin as r } from "@capacitor/core";
var p = r("SplashScreen", { web: () => import("@nf-internal/web-GFKKEVHC").then(e => new e.SplashScreenWeb) });
export { p as SplashScreen };
