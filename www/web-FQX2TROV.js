import { h as e } from "@nf-internal/chunk-C4FLJMU7";
import { WebPlugin as i } from "@capacitor/core";
var t = class extends i {
    constructor() { super(), this.handleVisibilityChange = () => { let n = { isActive: document.hidden !== !0 }; this.notifyListeners("appStateChange", n), document.hidden ? this.notifyListeners("pause", null) : this.notifyListeners("resume", null); }, document.addEventListener("visibilitychange", this.handleVisibilityChange, !1); }
    exitApp() { throw this.unimplemented("Not implemented on web."); }
    getInfo() { return e(this, null, function* () { throw this.unimplemented("Not implemented on web."); }); }
    getLaunchUrl() { return e(this, null, function* () { return { url: "" }; }); }
    getState() { return e(this, null, function* () { return { isActive: document.hidden !== !0 }; }); }
    minimizeApp() { return e(this, null, function* () { throw this.unimplemented("Not implemented on web."); }); }
    toggleBackButtonHandler() { return e(this, null, function* () { throw this.unimplemented("Not implemented on web."); }); }
    getAppLanguage() { return e(this, null, function* () { return { value: navigator.language.split("-")[0].toLowerCase() }; }); }
};
export { t as AppWeb };
