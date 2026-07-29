import { a as j, b as k, c as U, d as P, e as z, f as B, g as x, h as G } from "@nf-internal/chunk-L63RFK5Q";
import { a as S, b as N, c as w, d as O, e as H, f as A, g as L } from "@nf-internal/chunk-T46P23FO";
import "@nf-internal/chunk-C4FLJMU7";
import { \u0275getDOM as M, DOCUMENT as h } from "@angular/common";
import { \u0275getDOM as Ge } from "@angular/common";
import * as o from "@angular/core";
import { \u0275global as E, ApplicationRef as V, InjectionToken as b, Injector as $, Optional as Y, \u0275Console as ge, \u0275RuntimeError as g, SecurityContext as l, \u0275allowSanitizationBypassAndThrow as p, \u0275unwrapSafeValue as f, \u0275_sanitizeUrl as F, \u0275_sanitizeHtml as q, \u0275bypassSanitizationTrustHtml as X, \u0275bypassSanitizationTrustStyle as J, \u0275bypassSanitizationTrustScript as K, \u0275bypassSanitizationTrustUrl as Z, \u0275bypassSanitizationTrustResourceUrl as Q, makeEnvironmentProviders as W, \u0275withDomHydration as ee, \u0275withEventReplay as te, \u0275withI18nSupport as ne, \u0275withIncrementalHydration as re, ENVIRONMENT_INITIALIZER as we, inject as Ee, \u0275IS_ENABLED_BLOCKING_INITIAL_NAVIGATION as Te, \u0275formatRuntimeError as Me, Version as oe } from "@angular/core";
import { \u0275withHttpTransferCache as D } from "@angular/common/http";
var Ie = (() => { class n {
    _doc;
    _dom;
    constructor(e) { this._doc = e, this._dom = M(); }
    addTag(e, t = !1) { return e ? this._getOrCreateElement(e, t) : null; }
    addTags(e, t = !1) { return e ? e.reduce((r, s) => (s && r.push(this._getOrCreateElement(s, t)), r), []) : []; }
    getTag(e) { if (!e)
        return null; let t = this._doc.querySelector(`meta[${e}]`); return t?.nodeName.toLowerCase() === "meta" ? t : null; }
    getTags(e) { if (!e)
        return []; let t = this._doc.querySelectorAll(`meta[${e}]`); return t ? [].slice.call(t).filter(r => r.nodeName.toLowerCase() === "meta") : []; }
    updateTag(e, t) { if (!e)
        return null; t = t || this._parseSelector(e); let r = this.getTag(t); return r ? this._setMetaElementAttributes(e, r) : this._getOrCreateElement(e, !0); }
    removeTag(e) { this.removeTagElement(this.getTag(e)); }
    removeTagElement(e) { e && this._dom.remove(e); }
    _getOrCreateElement(e, t = !1) { if (!t) {
        let c = this._parseSelector(e), a = this.getTags(c).filter(d => this._containsAttributes(e, d))[0];
        if (a !== void 0)
            return a;
    } let r = this._dom.createElement("meta"); return this._setMetaElementAttributes(e, r), this._doc.getElementsByTagName("head")[0].appendChild(r), r; }
    _setMetaElementAttributes(e, t) { return Object.keys(e).forEach(r => t.setAttribute(this._getMetaKeyMap(r), e[r])), t; }
    _parseSelector(e) { let t = e.name ? "name" : "property"; return `${t}=${this._escapeSelectorValue(String(e[t]))}`; }
    _escapeSelectorValue(e) { return `"${e.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`; }
    _containsAttributes(e, t) { return Object.keys(e).every(r => t.getAttribute(this._getMetaKeyMap(r)) === e[r]); }
    _getMetaKeyMap(e) { return ie[e] || e; }
    static \u0275fac = function (t) { return new (t || n)(o.\u0275\u0275inject(h)); };
    static \u0275prov = o.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" });
} return n; })(), ie = { httpEquiv: "http-equiv" }, Ce = (() => { class n {
    _doc;
    constructor(e) { this._doc = e; }
    getTitle() { return this._doc.title; }
    setTitle(e) { this._doc.title = e || ""; }
    static \u0275fac = function (t) { return new (t || n)(o.\u0275\u0275inject(h)); };
    static \u0275prov = o.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" });
} return n; })();
function I(n, i) { if (typeof COMPILED > "u" || !COMPILED) {
    let e = E.ng = E.ng || {};
    e[n] = i;
} }
var _ = class {
    msPerTick;
    numTicks;
    constructor(i, e) { this.msPerTick = i, this.numTicks = e; }
}, v = class {
    appRef;
    constructor(i) { this.appRef = i.injector.get(V); }
    timeChangeDetection(i) { let e = i && i.record, t = "Change Detection"; e && "profile" in console && typeof console.profile == "function" && console.profile(t); let r = performance.now(), s = 0; for (; s < 5 || performance.now() - r < 500;)
        this.appRef.tick(), s++; let c = performance.now(); e && "profileEnd" in console && typeof console.profileEnd == "function" && console.profileEnd(t); let a = (c - r) / s; return console.log(`ran ${s} change detection cycles`), console.log(`${a.toFixed(2)} ms per check`), new _(a, s); }
}, C = "profiler";
function Re(n) { return I(C, new v(n)), n; }
function Ne() { I(C, null); }
var T = class {
    static all() { return () => !0; }
    static css(i) { return e => e.nativeElement != null ? se(e.nativeElement, i) : !1; }
    static directive(i) { return e => e.providerTokens.indexOf(i) !== -1; }
};
function se(n, i) { return M().isElementNode(n) ? n.matches && n.matches(i) || n.msMatchesSelector && n.msMatchesSelector(i) || n.webkitMatchesSelector && n.webkitMatchesSelector(i) : !1; }
var ae = { pan: !0, panstart: !0, panmove: !0, panend: !0, pancancel: !0, panleft: !0, panright: !0, panup: !0, pandown: !0, pinch: !0, pinchstart: !0, pinchmove: !0, pinchend: !0, pinchcancel: !0, pinchin: !0, pinchout: !0, press: !0, pressup: !0, rotate: !0, rotatestart: !0, rotatemove: !0, rotateend: !0, rotatecancel: !0, swipe: !0, swipeleft: !0, swiperight: !0, swipeup: !0, swipedown: !0, tap: !0, doubletap: !0 }, y = new b(""), R = new b(""), ce = (() => { class n {
    events = [];
    overrides = {};
    options;
    buildHammer(e) { let t = new Hammer(e, this.options); t.get("pinch").set({ enable: !0 }), t.get("rotate").set({ enable: !0 }); for (let r in this.overrides)
        t.get(r).set(this.overrides[r]); return t; }
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275prov = o.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac });
} return n; })(), ue = (() => { class n extends S {
    _config;
    _injector;
    loader;
    _loaderPromise = null;
    constructor(e, t, r, s) { super(e), this._config = t, this._injector = r, this.loader = s; }
    supports(e) { return !(!ae.hasOwnProperty(e.toLowerCase()) && !this.isCustomEvent(e) || !window.Hammer && !this.loader); }
    addEventListener(e, t, r) { let s = this.manager.getZone(); if (t = t.toLowerCase(), !window.Hammer && this.loader) {
        this._loaderPromise = this._loaderPromise || s.runOutsideAngular(() => this.loader());
        let c = !1, a = () => { c = !0; };
        return s.runOutsideAngular(() => this._loaderPromise.then(() => { if (!window.Hammer) {
            a = () => { };
            return;
        } c || (a = this.addEventListener(e, t, r)); }).catch(() => { a = () => { }; })), () => { a(); };
    } return s.runOutsideAngular(() => { let c = this._config.buildHammer(e), a = function (d) { s.runGuarded(function () { r(d); }); }; return c.on(t, a), () => { c.off(t, a), typeof c.destroy == "function" && c.destroy(); }; }); }
    isCustomEvent(e) { return this._config.events.indexOf(e) > -1; }
    static \u0275fac = function (t) { return new (t || n)(o.\u0275\u0275inject(h), o.\u0275\u0275inject(y), o.\u0275\u0275inject(o.Injector), o.\u0275\u0275inject(R, 8)); };
    static \u0275prov = o.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac });
} return n; })(), Oe = (() => { class n {
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275mod = o.\u0275\u0275defineNgModule({ type: n });
    static \u0275inj = o.\u0275\u0275defineInjector({ providers: [{ provide: w, useClass: ue, multi: !0, deps: [h, y, $, [new Y, R]] }, { provide: y, useClass: ce }] });
} return n; })(), le = (() => { class n {
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275prov = o.\u0275\u0275defineInjectable({ token: n, factory: function (t) { let r = null; return t ? r = new (t || n) : r = o.\u0275\u0275inject(de), r; }, providedIn: "root" });
} return n; })(), de = (() => { class n extends le {
    _doc;
    constructor(e) { super(), this._doc = e; }
    sanitize(e, t) { if (t == null)
        return null; switch (e) {
        case l.NONE: return t;
        case l.HTML: return p(t, "HTML") ? f(t) : q(this._doc, String(t)).toString();
        case l.STYLE: return p(t, "Style") ? f(t) : t;
        case l.SCRIPT:
            if (p(t, "Script"))
                return f(t);
            throw new g(5200, !1);
        case l.URL: return p(t, "URL") ? f(t) : F(String(t));
        case l.RESOURCE_URL:
            if (p(t, "ResourceURL"))
                return f(t);
            throw new g(5201, !1);
        default: throw new g(5202, !1);
    } }
    bypassSecurityTrustHtml(e) { return X(e); }
    bypassSecurityTrustStyle(e) { return J(e); }
    bypassSecurityTrustScript(e) { return K(e); }
    bypassSecurityTrustUrl(e) { return Z(e); }
    bypassSecurityTrustResourceUrl(e) { return Q(e); }
    static \u0275fac = function (t) { return new (t || n)(o.\u0275\u0275inject(h)); };
    static \u0275prov = o.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" });
} return n; })(), u = (function (n) { return n[n.NoHttpTransferCache = 0] = "NoHttpTransferCache", n[n.HttpTransferCacheOptions = 1] = "HttpTransferCacheOptions", n[n.I18nSupport = 2] = "I18nSupport", n[n.EventReplay = 3] = "EventReplay", n[n.IncrementalHydration = 4] = "IncrementalHydration", n; })(u || {});
function m(n, i = [], e = {}) { return { \u0275kind: n, \u0275providers: i }; }
function He() { return m(u.NoHttpTransferCache); }
function Ae(n) { return m(u.HttpTransferCacheOptions, D(n)); }
function Le() { return m(u.I18nSupport, ne()); }
function je() { return m(u.EventReplay, te()); }
function ke() { return m(u.IncrementalHydration, re()); }
function Ue(...n) { let i = [], e = new Set; for (let { \u0275providers: r, \u0275kind: s } of n)
    e.add(s), r.length && i.push(r); let t = e.has(u.HttpTransferCacheOptions); return W([[], [], ee(), e.has(u.NoHttpTransferCache) || t ? [] : D({}), i]); }
var Pe = new oe("21.2.18");
export { G as BrowserModule, T as By, le as DomSanitizer, w as EVENT_MANAGER_PLUGINS, O as EventManager, S as EventManagerPlugin, y as HAMMER_GESTURE_CONFIG, R as HAMMER_LOADER, ce as HammerGestureConfig, Oe as HammerModule, u as HydrationFeatureKind, Ie as Meta, A as REMOVE_STYLES_ON_COMPONENT_DESTROY, Ce as Title, Pe as VERSION, P as bootstrapApplication, z as createApplication, Ne as disableDebugTools, Re as enableDebugTools, x as platformBrowser, Ue as provideClientHydration, B as provideProtractorTestingSupport, je as withEventReplay, Ae as withHttpTransferCacheOptions, Le as withI18nSupport, ke as withIncrementalHydration, He as withNoHttpTransferCache, j as \u0275BrowserDomAdapter, k as \u0275BrowserGetTestability, N as \u0275DomEventsPlugin, L as \u0275DomRendererFactory2, de as \u0275DomSanitizerImpl, ue as \u0275HammerGesturesPlugin, U as \u0275KeyEventsPlugin, H as \u0275SharedStylesHost, Ge as \u0275getDOM };
/*! Bundled license information:

@angular/platform-browser/fesm2022/platform-browser.mjs:
  (**
   * @license Angular v21.2.18
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
