import { b as Rt, c as Bt } from "@nf-internal/chunk-423I2V4L";
import "@nf-internal/chunk-YLA7ERIM";
import "@nf-internal/chunk-KJNNELWU";
import "@nf-internal/chunk-OH2VUCAL";
import { b as wt, c as xt, d as Et, e as Tt, f as At } from "@nf-internal/chunk-XZL2YYLE";
import "@nf-internal/chunk-JYWXGWOM";
import { b as Dt } from "@nf-internal/chunk-VIUXLIDC";
import "@nf-internal/chunk-VUYV6ZIW";
import "@nf-internal/chunk-3IHVGUEN";
import { a as v, b as L, e as yt, h as F } from "@nf-internal/chunk-C4FLJMU7";
import "@angular/core";
import * as Pt from "@angular/core";
var Xt = (() => { class n {
    read(t) { Ot().read(t); }
    write(t) { Ot().write(t); }
    static \u0275fac = function (e) { return new (e || n); };
    static \u0275prov = Pt.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" });
} return n; })();
var Ot = () => { let n = typeof window < "u" ? window : null; if (n != null) {
    let i = n.Ionic;
    return i?.queue ? i.queue : { read: t => n.requestAnimationFrame(t), write: t => n.requestAnimationFrame(t) };
} return { read: i => i(), write: i => i() }; };
var K = class {
    menuController;
    constructor(i) { this.menuController = i; }
    open(i) { return this.menuController.open(i); }
    close(i) { return this.menuController.close(i); }
    toggle(i) { return this.menuController.toggle(i); }
    enable(i, t) { return this.menuController.enable(i, t); }
    swipeGesture(i, t) { return this.menuController.swipeGesture(i, t); }
    isOpen(i) { return this.menuController.isOpen(i); }
    isEnabled(i) { return this.menuController.isEnabled(i); }
    get(i) { return this.menuController.get(i); }
    getOpen() { return this.menuController.getOpen(); }
    getMenus() { return this.menuController.getMenus(); }
    registerAnimation(i, t) { return this.menuController.registerAnimation(i, t); }
    isAnimating() { return this.menuController.isAnimating(); }
    _getOpenSync() { return this.menuController._getOpenSync(); }
    _createAnimation(i, t) { return this.menuController._createAnimation(i, t); }
    _register(i) { return this.menuController._register(i); }
    _unregister(i) { return this.menuController._unregister(i); }
    _setOpen(i, t, e) { return this.menuController._setOpen(i, t, e); }
};
import "@angular/core";
import { NavigationStart as ne, NavigationCancel as re, NavigationError as oe } from "@angular/router";
import * as E from "@angular/core";
import { DOCUMENT as te } from "@angular/common";
import "@angular/core";
import { Subject as A } from "rxjs";
import * as x from "@angular/core";
var $ = (() => { class n {
    doc;
    _readyPromise;
    win;
    backButton = new A;
    keyboardDidShow = new A;
    keyboardDidHide = new A;
    pause = new A;
    resume = new A;
    resize = new A;
    constructor(t, e) { this.doc = t, e.run(() => { this.win = t.defaultView, this.backButton.subscribeWithPriority = function (o, s) { return this.subscribe(a => a.register(o, c => e.run(() => s(c)))); }, R(this.pause, t, "pause", e), R(this.resume, t, "resume", e), R(this.backButton, t, "ionBackButton", e), R(this.resize, this.win, "resize", e), R(this.keyboardDidShow, this.win, "ionKeyboardDidShow", e), R(this.keyboardDidHide, this.win, "ionKeyboardDidHide", e); let r; this._readyPromise = new Promise(o => { r = o; }), this.win?.cordova ? t.addEventListener("deviceready", () => { r("cordova"); }, { once: !0 }) : r("dom"); }); }
    is(t) { return Bt(this.win, t); }
    platforms() { return Rt(this.win); }
    ready() { return this._readyPromise; }
    get isRTL() { return this.doc.dir === "rtl"; }
    getQueryParam(t) { return ee(this.win.location.href, t); }
    isLandscape() { return !this.isPortrait(); }
    isPortrait() { return this.win.matchMedia?.("(orientation: portrait)").matches; }
    testUserAgent(t) { let e = this.win.navigator; return !!(e?.userAgent && e.userAgent.indexOf(t) >= 0); }
    url() { return this.win.location.href; }
    width() { return this.win.innerWidth; }
    height() { return this.win.innerHeight; }
    static \u0275fac = function (e) { return new (e || n)(x.\u0275\u0275inject(te), x.\u0275\u0275inject(x.NgZone)); };
    static \u0275prov = x.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" });
} return n; })();
var ee = (n, i) => { i = i.replace(/[[\]\\]/g, "\\$&"); let e = new RegExp("[\\?&]" + i + "=([^&#]*)").exec(n); return e ? decodeURIComponent(e[1].replace(/\+/g, " ")) : null; }, R = (n, i, t, e) => { i && i.addEventListener(t, r => { e.run(() => { let o = r?.detail; n.next(o); }); }); };
import * as St from "@angular/common";
import * as H from "@angular/router";
var I = (() => { class n {
    location;
    serializer;
    router;
    topOutlet;
    direction = Y;
    animated = Z;
    animationBuilder;
    guessDirection = "forward";
    guessAnimation;
    lastNavId = -1;
    constructor(t, e, r, o) { this.location = e, this.serializer = r, this.router = o, o && o.events.subscribe(s => { if (s instanceof ne) {
        let a = s.restoredState ? s.restoredState.navigationId : s.id;
        this.guessDirection = this.guessAnimation = a < this.lastNavId ? "back" : "forward", this.lastNavId = this.guessDirection === "forward" ? s.id : a;
    } (s instanceof re || s instanceof oe) && (this.direction = Y, this.animated = Z, this.animationBuilder = void 0); }), t.backButton.subscribeWithPriority(0, s => { this.pop(), s(); }); }
    navigateForward(t, e = {}) { return this.setDirection("forward", e.animated, e.animationDirection, e.animation), this.navigate(t, e); }
    navigateBack(t, e = {}) { return this.setDirection("back", e.animated, e.animationDirection, e.animation), this.navigate(t, e); }
    navigateRoot(t, e = {}) { return this.setDirection("root", e.animated, e.animationDirection, e.animation), this.navigate(t, e); }
    back(t = { animated: !0, animationDirection: "back" }) { return this.setDirection("back", t.animated, t.animationDirection, t.animation), this.location.back(); }
    pop() { return F(this, null, function* () { let t = this.topOutlet; for (; t;) {
        if (yield t.pop())
            return !0;
        t = t.parentOutlet;
    } return !1; }); }
    setDirection(t, e, r, o) { this.direction = t, this.animated = se(t, e, r), this.animationBuilder = o; }
    setTopOutlet(t) { this.topOutlet = t; }
    consumeTransition() { let t = "root", e, r = this.animationBuilder; return this.direction === "auto" ? (t = this.guessDirection, e = this.guessAnimation) : (e = this.animated, t = this.direction), this.direction = Y, this.animated = Z, this.animationBuilder = void 0, { direction: t, animation: e, animationBuilder: r }; }
    navigate(t, e) { if (Array.isArray(t))
        return this.router.navigate(t, e); {
        let r = this.serializer.parse(t.toString());
        return e.queryParams !== void 0 && (r.queryParams = v({}, e.queryParams)), e.fragment !== void 0 && (r.fragment = e.fragment), this.router.navigateByUrl(r, e);
    } }
    static \u0275fac = function (e) { return new (e || n)(E.\u0275\u0275inject($), E.\u0275\u0275inject(St.Location), E.\u0275\u0275inject(H.UrlSerializer), E.\u0275\u0275inject(H.Router, 8)); };
    static \u0275prov = E.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" });
} return n; })();
var se = (n, i, t) => { if (i !== !1) {
    if (t !== void 0)
        return t;
    if (n === "forward" || n === "back")
        return n;
    if (n === "root" && i === !0)
        return "forward";
} }, Y = "auto", Z = void 0;
import { InjectionToken as ae } from "@angular/core";
import * as jt from "@angular/core";
var _ = (() => { class n {
    get(t, e) { let r = X(); return r ? r.get(t, e) : null; }
    getBoolean(t, e) { let r = X(); return r ? r.getBoolean(t, e) : !1; }
    getNumber(t, e) { let r = X(); return r ? r.getNumber(t, e) : 0; }
    static \u0275fac = function (e) { return new (e || n); };
    static \u0275prov = jt.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" });
} return n; })();
var tt = new ae("USERCONFIG"), X = () => { if (typeof window < "u") {
    let n = window.Ionic;
    if (n?.config)
        return n.config;
} return null; };
import { ApplicationRef as ue, createComponent as le, inject as et, InjectionToken as Lt, Injector as de, NgZone as he } from "@angular/core";
var B = class {
    data;
    constructor(i = {}) { this.data = i, console.warn("[Ionic Warning]: NavParams has been deprecated in favor of using Angular's input API. Developers should migrate to either the @Input decorator or the Signals-based input API."); }
    get(i) { return this.data[i]; }
};
import * as _t from "@angular/core";
var Nt = new Lt("IonModalToken"), nt = (() => { class n {
    zone = et(he);
    applicationRef = et(ue);
    config = et(tt);
    create(t, e, r, o) { return new it(t, e, this.applicationRef, this.zone, r, this.config.useSetInputAPI ?? !1, o); }
    static \u0275fac = function (e) { return new (e || n); };
    static \u0275prov = _t.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac });
} return n; })();
var it = class {
    environmentInjector;
    injector;
    applicationRef;
    zone;
    elementReferenceKey;
    enableSignalsSupport;
    customInjector;
    elRefMap = new WeakMap;
    elEventsMap = new WeakMap;
    constructor(i, t, e, r, o, s, a) { this.environmentInjector = i, this.injector = t, this.applicationRef = e, this.zone = r, this.elementReferenceKey = o, this.enableSignalsSupport = s, this.customInjector = a; }
    attachViewToDom(i, t, e, r) { return this.zone.run(() => new Promise(o => { let s = v({}, e); this.elementReferenceKey !== void 0 && (s[this.elementReferenceKey] = i); let a = fe(this.zone, this.environmentInjector, this.injector, this.applicationRef, this.elRefMap, this.elEventsMap, i, t, s, r, this.elementReferenceKey, this.enableSignalsSupport, this.customInjector); o(a); })); }
    removeViewFromDom(i, t) { return this.zone.run(() => new Promise(e => { let r = this.elRefMap.get(t); if (r) {
        r.destroy(), this.elRefMap.delete(t);
        let o = this.elEventsMap.get(t);
        o && (o(), this.elEventsMap.delete(t));
    } e(); })); }
}, fe = (n, i, t, e, r, o, s, a, c, l, d, b, D) => { let j = pe(c); s.tagName.toLowerCase() === "ion-modal" && j.push({ provide: Nt, useValue: s }); let Zt = de.create({ providers: j, parent: D ?? t }), w = le(a, { environmentInjector: i, elementInjector: Zt }), M = w.instance, T = w.location.nativeElement; if (c)
    if (d && M[d] !== void 0 && console.error(`[Ionic Error]: ${d} is a reserved property when using ${s.tagName.toLowerCase()}. Rename or remove the "${d}" property from ${a.name}.`), b === !0 && w.setInput !== void 0) {
        let Ct = c, { modal: U, popover: bt } = Ct, kt = yt(Ct, ["modal", "popover"]);
        for (let It in kt)
            w.setInput(It, kt[It]);
        U !== void 0 && Object.assign(M, { modal: U }), bt !== void 0 && Object.assign(M, { popover: bt });
    }
    else
        Object.assign(M, c); if (l)
    for (let U of l)
        T.classList.add(U); let Jt = W(n, M, T); return s.appendChild(T), e.attachView(w.hostView), w.changeDetectorRef.detectChanges(), r.set(T, w), o.set(T, Jt), T; }, me = [wt, xt, Et, Tt, At], W = (n, i, t) => n.run(() => { let e = me.filter(r => typeof i[r] == "function").map(r => { let o = s => i[r](s.detail); return t.addEventListener(r, o), () => t.removeEventListener(r, o); }); return () => e.forEach(r => r()); }), Mt = new Lt("NavParamsToken"), pe = n => [{ provide: Mt, useValue: n }, { provide: B, useFactory: ge, deps: [Mt] }], ge = n => new B(n);
import { __decorate as Ie } from "tslib";
import { TemplateRef as ye } from "@angular/core";
import { fromEvent as Ce } from "rxjs";
var be = (n, i) => { let t = n.prototype; i.forEach(e => { Object.defineProperty(t, e, { get() { return this.el[e]; }, set(r) { this.z.runOutsideAngular(() => this.el[e] = r); } }); }); }, ke = (n, i) => { let t = n.prototype; i.forEach(e => { t[e] = function () { let r = arguments; return this.z.runOutsideAngular(() => this.el[e].apply(this.el, r)); }; }); }, O = (n, i, t) => { t.forEach(e => n[e] = Ce(i, e)); };
function y(n) { return function (t) { let { defineCustomElementFn: e, inputs: r, methods: o } = n; return e !== void 0 && e(), r && be(t, r), o && ke(t, o), t; }; }
import * as f from "@angular/core";
var De = ["animated", "keepContentsMounted", "backdropBreakpoint", "backdropDismiss", "breakpoints", "canDismiss", "cssClass", "enterAnimation", "expandToScroll", "event", "focusTrap", "handle", "handleBehavior", "initialBreakpoint", "isOpen", "keyboardClose", "leaveAnimation", "mode", "presentingElement", "showBackdrop", "translucent", "trigger"], we = ["present", "dismiss", "onDidDismiss", "onWillDismiss", "setCurrentBreakpoint", "getCurrentBreakpoint"], xe = (() => { let n = class rt {
    z;
    template;
    isCmpOpen = !1;
    el;
    constructor(t, e, r) { this.z = r, this.el = e.nativeElement, this.el.addEventListener("ionMount", () => { this.isCmpOpen = !0, t.detectChanges(); }), this.el.addEventListener("didDismiss", () => { this.isCmpOpen = !1, t.detectChanges(); }), O(this, this.el, ["ionModalDidPresent", "ionModalWillPresent", "ionModalWillDismiss", "ionModalDidDismiss", "ionBreakpointDidChange", "didPresent", "willPresent", "willDismiss", "didDismiss", "ionDragStart", "ionDragMove", "ionDragEnd"]); }
    static \u0275fac = function (e) { return new (e || rt)(f.\u0275\u0275directiveInject(f.ChangeDetectorRef), f.\u0275\u0275directiveInject(f.ElementRef), f.\u0275\u0275directiveInject(f.NgZone)); };
    static \u0275dir = f.\u0275\u0275defineDirective({ type: rt, selectors: [["ion-modal"]], contentQueries: function (e, r, o) { if (e & 1 && f.\u0275\u0275contentQuery(o, ye, 5), e & 2) {
            let s;
            f.\u0275\u0275queryRefresh(s = f.\u0275\u0275loadQuery()) && (r.template = s.first);
        } }, inputs: { animated: "animated", keepContentsMounted: "keepContentsMounted", backdropBreakpoint: "backdropBreakpoint", backdropDismiss: "backdropDismiss", breakpoints: "breakpoints", canDismiss: "canDismiss", cssClass: "cssClass", enterAnimation: "enterAnimation", expandToScroll: "expandToScroll", event: "event", focusTrap: "focusTrap", handle: "handle", handleBehavior: "handleBehavior", initialBreakpoint: "initialBreakpoint", isOpen: "isOpen", keyboardClose: "keyboardClose", leaveAnimation: "leaveAnimation", mode: "mode", presentingElement: "presentingElement", showBackdrop: "showBackdrop", translucent: "translucent", trigger: "trigger" }, standalone: !1 });
}; return n = Ie([y({ inputs: De, methods: we })], n), n; })();
import { __decorate as Ee } from "tslib";
import { TemplateRef as Te } from "@angular/core";
import * as m from "@angular/core";
var Ae = ["alignment", "animated", "arrow", "keepContentsMounted", "backdropDismiss", "cssClass", "dismissOnSelect", "enterAnimation", "event", "focusTrap", "isOpen", "keyboardClose", "leaveAnimation", "mode", "showBackdrop", "translucent", "trigger", "triggerAction", "reference", "size", "side"], Re = ["present", "dismiss", "onDidDismiss", "onWillDismiss"], Be = (() => { let n = class ot {
    z;
    template;
    isCmpOpen = !1;
    el;
    constructor(t, e, r) { this.z = r, this.el = e.nativeElement, this.el.addEventListener("ionMount", () => { this.isCmpOpen = !0, t.detectChanges(); }), this.el.addEventListener("didDismiss", () => { this.isCmpOpen = !1, t.detectChanges(); }), O(this, this.el, ["ionPopoverDidPresent", "ionPopoverWillPresent", "ionPopoverWillDismiss", "ionPopoverDidDismiss", "didPresent", "willPresent", "willDismiss", "didDismiss"]); }
    static \u0275fac = function (e) { return new (e || ot)(m.\u0275\u0275directiveInject(m.ChangeDetectorRef), m.\u0275\u0275directiveInject(m.ElementRef), m.\u0275\u0275directiveInject(m.NgZone)); };
    static \u0275dir = m.\u0275\u0275defineDirective({ type: ot, selectors: [["ion-popover"]], contentQueries: function (e, r, o) { if (e & 1 && m.\u0275\u0275contentQuery(o, Te, 5), e & 2) {
            let s;
            m.\u0275\u0275queryRefresh(s = m.\u0275\u0275loadQuery()) && (r.template = s.first);
        } }, inputs: { alignment: "alignment", animated: "animated", arrow: "arrow", keepContentsMounted: "keepContentsMounted", backdropDismiss: "backdropDismiss", cssClass: "cssClass", dismissOnSelect: "dismissOnSelect", enterAnimation: "enterAnimation", event: "event", focusTrap: "focusTrap", isOpen: "isOpen", keyboardClose: "keyboardClose", leaveAnimation: "leaveAnimation", mode: "mode", showBackdrop: "showBackdrop", translucent: "translucent", trigger: "trigger", triggerAction: "triggerAction", reference: "reference", size: "size", side: "side" }, standalone: !1 });
}; return n = Ee([y({ inputs: Ae, methods: Re })], n), n; })();
import { ViewContainerRef as je, inject as P, EventEmitter as G, EnvironmentInjector as Me, InjectionToken as Le, reflectComponentType as _e } from "@angular/core";
import { Router as Ne, ActivatedRoute as Gt, ChildrenOutletContexts as Qt, PRIMARY_OUTLET as Wt } from "@angular/router";
import { BehaviorSubject as zt, combineLatest as Ve, of as Ue } from "rxjs";
import { distinctUntilChanged as Fe, filter as qt, switchMap as ct } from "rxjs/operators";
var Vt = (n, i, t) => t === "root" ? Ut(n, i) : t === "forward" ? Oe(n, i) : Pe(n, i), Ut = (n, i) => (n = n.filter(t => t.stackId !== i.stackId), n.push(i), n), Oe = (n, i) => (n.indexOf(i) >= 0 ? n = n.filter(e => e.stackId !== i.stackId || e.id <= i.id) : n.push(i), n), Pe = (n, i) => n.indexOf(i) >= 0 ? n.filter(e => e.stackId !== i.stackId || e.id <= i.id) : Ut(n, i), N = (n, i) => { let t = n.createUrlTree(["."], { relativeTo: i }); return n.serializeUrl(t); }, z = (n, i) => i ? n.stackId !== i.stackId : !0, Ft = (n, i) => { if (!n)
    return; let t = st(i); for (let e = 0; e < t.length; e++) {
    if (e >= n.length)
        return t[e];
    if (t[e] !== n[e])
        return;
} }, st = n => n.split("/").map(i => i.trim()).filter(i => i !== ""), at = n => { n && (n.ref.destroy(), n.unlistenEvents()); };
var q = class {
    containerEl;
    router;
    navCtrl;
    zone;
    location;
    views = [];
    runningTask;
    skipTransition = !1;
    tabsPrefix;
    activeView;
    nextId = 0;
    constructor(i, t, e, r, o, s) { this.containerEl = t, this.router = e, this.navCtrl = r, this.zone = o, this.location = s, this.tabsPrefix = i !== void 0 ? st(i) : void 0; }
    createView(i, t) { let e = N(this.router, t), r = i?.location?.nativeElement, o = W(this.zone, i.instance, r); return { id: this.nextId++, stackId: Ft(this.tabsPrefix, e), unlistenEvents: o, element: r, ref: i, url: e }; }
    getExistingView(i) { let t = N(this.router, i), e = this.views.find(r => r.url === t); return e && e.ref.changeDetectorRef.reattach(), e; }
    setActive(i) { let t = this.navCtrl.consumeTransition(), { direction: e, animation: r, animationBuilder: o } = t, s = this.activeView, a = z(i, s); a && (e = "back", r = void 0); let c = this.views.slice(), l, d = this.router; d.getCurrentNavigation ? l = d.getCurrentNavigation() : d.navigations?.value && (l = d.navigations.value), l?.extras?.replaceUrl && this.views.length > 0 && this.views.splice(-1, 1); let b = this.views.includes(i), D = this.insertView(i, e); b || i.ref.changeDetectorRef.detectChanges(); let j = i.animationBuilder; return o === void 0 && e === "back" && !a && j !== void 0 && (o = j), s && (s.animationBuilder = o), this.zone.runOutsideAngular(() => this.wait(() => (s && s.ref.changeDetectorRef.detach(), i.ref.changeDetectorRef.reattach(), this.transition(i, s, r, this.canGoBack(1), !1, o).then(() => Se(i, D, c, this.location, this.zone)).then(() => ({ enteringView: i, direction: e, animation: r, tabSwitch: a }))))); }
    canGoBack(i, t = this.getActiveStackId()) { return this.getStack(t).length > i; }
    pop(i, t = this.getActiveStackId()) { return this.zone.run(() => { let e = this.getStack(t); if (e.length <= i)
        return Promise.resolve(!1); let r = e[e.length - i - 1], o = r.url, s = r.savedData; if (s) {
        let c = s.get("primary");
        c?.route?._routerState?.snapshot.url && (o = c.route._routerState.snapshot.url);
    } let { animationBuilder: a } = this.navCtrl.consumeTransition(); return this.navCtrl.navigateBack(o, L(v({}, r.savedExtras), { animation: a })).then(() => !0); }); }
    startBackTransition() { let i = this.activeView; if (i) {
        let t = this.getStack(i.stackId), e = t[t.length - 2], r = e.animationBuilder;
        return this.wait(() => this.transition(e, i, "back", this.canGoBack(2), !0, r));
    } return Promise.resolve(); }
    endBackTransition(i) { i ? (this.skipTransition = !0, this.pop(1)) : this.activeView && Ht(this.activeView, this.views, this.views, this.location, this.zone); }
    getLastUrl(i) { let t = this.getStack(i); return t.length > 0 ? t[t.length - 1] : void 0; }
    getRootUrl(i) { let t = this.getStack(i); return t.length > 0 ? t[0] : void 0; }
    getActiveStackId() { return this.activeView ? this.activeView.stackId : void 0; }
    getActiveView() { return this.activeView; }
    hasRunningTask() { return this.runningTask !== void 0; }
    destroy() { this.containerEl = void 0, this.views.forEach(at), this.activeView = void 0, this.views = []; }
    getStack(i) { return this.views.filter(t => t.stackId === i); }
    insertView(i, t) { return this.activeView = i, this.views = Vt(this.views, i, t), this.views.slice(); }
    transition(i, t, e, r, o, s) { if (this.skipTransition)
        return this.skipTransition = !1, Promise.resolve(!1); if (t === i)
        return Promise.resolve(!1); let a = i ? i.element : void 0, c = t ? t.element : void 0, l = this.containerEl; return a && a !== c && (a.classList.add("ion-page"), a.classList.add("ion-page-invisible"), l.commit) ? l.commit(a, c, { duration: e === void 0 ? 0 : void 0, direction: e, showGoBack: r, progressAnimation: o, animationBuilder: s }) : Promise.resolve(!1); }
    wait(i) { return F(this, null, function* () { this.runningTask !== void 0 && (yield this.runningTask, this.runningTask = void 0); let t = this.runningTask = i(); return t.finally(() => this.runningTask = void 0), t; }); }
}, Se = (n, i, t, e, r) => typeof requestAnimationFrame == "function" ? new Promise(o => { requestAnimationFrame(() => { Ht(n, i, t, e, r), o(); }); }) : Promise.resolve(), Ht = (n, i, t, e, r) => { r.run(() => t.filter(o => !i.includes(o)).forEach(at)), i.forEach(o => { let a = e.path().split("?")[0].split("#")[0]; if (o !== n && o.url !== a) {
    let c = o.element;
    c.setAttribute("aria-hidden", "true"), c.classList.add("ion-page-hidden"), o.ref.changeDetectorRef.detach();
} }); };
import * as p from "@angular/core";
import * as Kt from "@angular/common";
import * as Q from "@angular/router";
var lt = (() => { class n {
    parentOutlet;
    nativeEl;
    activatedView = null;
    tabsPrefix;
    _swipeGesture;
    stackCtrl;
    proxyMap = new WeakMap;
    currentActivatedRoute$ = new zt(null);
    activated = null;
    get activatedComponentRef() { return this.activated; }
    _activatedRoute = null;
    name = Wt;
    stackWillChange = new G;
    stackDidChange = new G;
    activateEvents = new G;
    deactivateEvents = new G;
    parentContexts = P(Qt);
    location = P(je);
    environmentInjector = P(Me);
    inputBinder = P($t, { optional: !0 });
    supportsBindingToComponentInputs = !0;
    config = P(_);
    navCtrl = P(I);
    set animation(t) { this.nativeEl.animation = t; }
    set animated(t) { this.nativeEl.animated = t; }
    set swipeGesture(t) { this._swipeGesture = t, this.nativeEl.swipeHandler = t ? { canStart: () => this.stackCtrl.canGoBack(1) && !this.stackCtrl.hasRunningTask(), onStart: () => this.stackCtrl.startBackTransition(), onEnd: e => this.stackCtrl.endBackTransition(e) } : void 0; }
    constructor(t, e, r, o, s, a, c, l) { this.parentOutlet = l, this.nativeEl = o.nativeElement, this.name = t || Wt, this.tabsPrefix = e === "true" ? N(s, c) : void 0, this.stackCtrl = new q(this.tabsPrefix, this.nativeEl, s, this.navCtrl, a, r), this.parentContexts.onChildOutletCreated(this.name, this); }
    ngOnDestroy() { this.stackCtrl.destroy(), this.inputBinder?.unsubscribeFromRouteData(this); }
    getContext() { return this.parentContexts.getContext(this.name); }
    ngOnInit() { this.initializeOutletWithName(); }
    initializeOutletWithName() { if (!this.activated) {
        let t = this.getContext();
        t?.route && this.activateWith(t.route, t.injector);
    } new Promise(t => Dt(this.nativeEl, t)).then(() => { this._swipeGesture === void 0 && (this.swipeGesture = this.config.getBoolean("swipeBackEnabled", this.nativeEl.mode === "ios")); }); }
    get isActivated() { return !!this.activated; }
    get component() { if (!this.activated)
        throw new Error("Outlet is not activated"); return this.activated.instance; }
    get activatedRoute() { if (!this.activated)
        throw new Error("Outlet is not activated"); return this._activatedRoute; }
    get activatedRouteData() { return this._activatedRoute ? this._activatedRoute.snapshot.data : {}; }
    detach() { throw new Error("incompatible reuse strategy"); }
    attach(t, e) { throw new Error("incompatible reuse strategy"); }
    deactivate() { if (this.activated) {
        if (this.activatedView) {
            let e = this.getContext();
            this.activatedView.savedData = new Map(e.children.contexts);
            let r = this.activatedView.savedData.get("primary");
            if (r && e.route && (r.route = v({}, e.route)), this.activatedView.savedExtras = {}, e.route) {
                let o = e.route.snapshot;
                this.activatedView.savedExtras.queryParams = o.queryParams, this.activatedView.savedExtras.fragment = o.fragment;
            }
        }
        let t = this.component;
        this.activatedView = null, this.activated = null, this._activatedRoute = null, this.deactivateEvents.emit(t);
    } }
    activateWith(t, e) { if (this.isActivated)
        throw new Error("Cannot activate an already activated outlet"); this._activatedRoute = t; let r, o = this.stackCtrl.getExistingView(t); if (o) {
        r = this.activated = o.ref;
        let a = o.savedData;
        if (a) {
            let c = this.getContext();
            c.children.contexts = a;
        }
        this.updateActivatedRouteProxy(r.instance, t);
    }
    else {
        let a = t._futureSnapshot, c = this.parentContexts.getOrCreateContext(this.name).children, l = new zt(null), d = this.createActivatedRouteProxy(l, t), b = new ut(d, c, this.location.injector), D = a.routeConfig.component ?? a.component;
        r = this.activated = this.outletContent.createComponent(D, { index: this.outletContent.length, injector: b, environmentInjector: e ?? this.environmentInjector }), l.next(r.instance), o = this.stackCtrl.createView(this.activated, t), this.proxyMap.set(r.instance, d), this.currentActivatedRoute$.next({ component: r.instance, activatedRoute: t });
    } this.inputBinder?.bindActivatedRouteToOutletComponent(this), this.activatedView = o, this.navCtrl.setTopOutlet(this); let s = this.stackCtrl.getActiveView(); this.stackWillChange.emit({ enteringView: o, tabSwitch: z(o, s) }), this.stackCtrl.setActive(o).then(a => { this.activateEvents.emit(r.instance), this.stackDidChange.emit(a); }); }
    canGoBack(t = 1, e) { return this.stackCtrl.canGoBack(t, e); }
    pop(t = 1, e) { return this.stackCtrl.pop(t, e); }
    getLastUrl(t) { let e = this.stackCtrl.getLastUrl(t); return e ? e.url : void 0; }
    getLastRouteView(t) { return this.stackCtrl.getLastUrl(t); }
    getRootView(t) { return this.stackCtrl.getRootUrl(t); }
    getActiveStackId() { return this.stackCtrl.getActiveStackId(); }
    createActivatedRouteProxy(t, e) { let r = new Gt; return r._futureSnapshot = e._futureSnapshot, r._routerState = e._routerState, r.snapshot = e.snapshot, r.outlet = e.outlet, r.component = e.component, r._paramMap = this.proxyObservable(t, "paramMap"), r._queryParamMap = this.proxyObservable(t, "queryParamMap"), r.url = this.proxyObservable(t, "url"), r.params = this.proxyObservable(t, "params"), r.queryParams = this.proxyObservable(t, "queryParams"), r.fragment = this.proxyObservable(t, "fragment"), r.data = this.proxyObservable(t, "data"), r; }
    proxyObservable(t, e) { return t.pipe(qt(r => !!r), ct(r => this.currentActivatedRoute$.pipe(qt(o => o !== null && o.component === r), ct(o => o && o.activatedRoute[e]), Fe()))); }
    updateActivatedRouteProxy(t, e) { let r = this.proxyMap.get(t); if (!r)
        throw new Error("Could not find activated route proxy for view"); r._futureSnapshot = e._futureSnapshot, r._routerState = e._routerState, r.snapshot = e.snapshot, r.outlet = e.outlet, r.component = e.component, this.currentActivatedRoute$.next({ component: t, activatedRoute: e }); }
    static \u0275fac = function (e) { return new (e || n)(p.\u0275\u0275injectAttribute("name"), p.\u0275\u0275injectAttribute("tabs"), p.\u0275\u0275directiveInject(Kt.Location), p.\u0275\u0275directiveInject(p.ElementRef), p.\u0275\u0275directiveInject(Q.Router), p.\u0275\u0275directiveInject(p.NgZone), p.\u0275\u0275directiveInject(Q.ActivatedRoute), p.\u0275\u0275directiveInject(n, 12)); };
    static \u0275dir = p.\u0275\u0275defineDirective({ type: n, selectors: [["ion-router-outlet"]], inputs: { animated: "animated", animation: "animation", mode: "mode", swipeGesture: "swipeGesture", name: "name" }, outputs: { stackWillChange: "stackWillChange", stackDidChange: "stackDidChange", activateEvents: "activate", deactivateEvents: "deactivate" }, exportAs: ["outlet"], standalone: !1 });
} return n; })();
var ut = class {
    route;
    childContexts;
    parent;
    constructor(i, t, e) { this.route = i, this.childContexts = t, this.parent = e; }
    get(i, t) { return i === Gt ? this.route : i === Qt ? this.childContexts : this.parent.get(i, t); }
}, $t = new Le(""), He = (() => { class n {
    outletDataSubscriptions = new Map;
    bindActivatedRouteToOutletComponent(t) { this.unsubscribeFromRouteData(t), this.subscribeToRouteData(t); }
    unsubscribeFromRouteData(t) { this.outletDataSubscriptions.get(t)?.unsubscribe(), this.outletDataSubscriptions.delete(t); }
    subscribeToRouteData(t) { let { activatedRoute: e } = t, r = Ve([e.queryParams, e.params, e.data]).pipe(ct(([o, s, a], c) => (a = v(v(v({}, o), s), a), c === 0 ? Ue(a) : Promise.resolve(a)))).subscribe(o => { if (!t.isActivated || !t.activatedComponentRef || t.activatedRoute !== e || e.component === null) {
        this.unsubscribeFromRouteData(t);
        return;
    } let s = _e(e.component); if (!s) {
        this.unsubscribeFromRouteData(t);
        return;
    } for (let { templateName: a } of s.inputs)
        t.activatedComponentRef.setInput(a, o[a]); }); this.outletDataSubscriptions.set(t, r); }
    static \u0275fac = function (e) { return new (e || n); };
    static \u0275prov = p.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac });
} return n; })(), We = () => ({ provide: $t, useFactory: ze, deps: [Ne] });
function ze(n) { return n?.componentInputBindingEnabled ? new He : null; }
import "@angular/core";
import { NgControl as Ge } from "@angular/forms";
var dt = n => typeof __zone_symbol__requestAnimationFrame == "function" ? __zone_symbol__requestAnimationFrame(n) : typeof requestAnimationFrame == "function" ? requestAnimationFrame(n) : setTimeout(n);
import * as k from "@angular/core";
var In = (() => { class n {
    injector;
    elementRef;
    onChange = () => { };
    onTouched = () => { };
    lastValue;
    statusChanges;
    constructor(t, e) { this.injector = t, this.elementRef = e; }
    writeValue(t) { this.elementRef.nativeElement.value = this.lastValue = t, V(this.elementRef); }
    handleValueChange(t, e) { t === this.elementRef.nativeElement && (e !== this.lastValue && (this.lastValue = e, this.onChange(e)), V(this.elementRef)); }
    _handleBlurEvent(t) { t === this.elementRef.nativeElement ? (this.onTouched(), V(this.elementRef)) : t.closest("ion-radio-group") === this.elementRef.nativeElement && this.onTouched(); }
    registerOnChange(t) { this.onChange = t; }
    registerOnTouched(t) { this.onTouched = t; }
    setDisabledState(t) { this.elementRef.nativeElement.disabled = t; }
    ngOnDestroy() { this.statusChanges && this.statusChanges.unsubscribe(); }
    ngAfterViewInit() { let t; try {
        t = this.injector.get(Ge);
    }
    catch { } if (!t)
        return; t.statusChanges && (this.statusChanges = t.statusChanges.subscribe(() => V(this.elementRef))); let e = t.control; e && ["markAsTouched", "markAllAsTouched", "markAsUntouched", "markAsDirty", "markAsPristine"].forEach(o => { if (typeof e[o] < "u") {
        let s = e[o].bind(e);
        e[o] = (...a) => { s(...a), V(this.elementRef); };
    } }); }
    static \u0275fac = function (e) { return new (e || n)(k.\u0275\u0275directiveInject(k.Injector), k.\u0275\u0275directiveInject(k.ElementRef)); };
    static \u0275dir = k.\u0275\u0275defineDirective({ type: n, hostBindings: function (e, r) { e & 1 && k.\u0275\u0275listener("ionBlur", function (s) { return r._handleBlurEvent(s.target); }); }, standalone: !1 });
} return n; })();
var V = n => { dt(() => { let i = n.nativeElement, t = i.value != null && i.value.toString().length > 0, e = Qe(i); ht(i, e); let r = i.closest("ion-item"); r && (t ? ht(r, [...e, "item-has-value"]) : ht(r, e)); }); }, Qe = n => { let i = n.classList, t = []; for (let e = 0; e < i.length; e++) {
    let r = i.item(e);
    r !== null && Ke(r, "ng-") && t.push(`ion-${r.substring(3)}`);
} return t; }, ht = (n, i) => { let t = n.classList; t.remove("ion-valid", "ion-invalid", "ion-touched", "ion-untouched", "ion-dirty", "ion-pristine"), t.add(...i); }, Ke = (n, i) => n.substring(0, i.length) === i;
import { __decorate as $e } from "tslib";
import "@angular/core";
import * as g from "@angular/core";
var Ye = ["color", "defaultHref", "disabled", "icon", "mode", "routerAnimation", "text", "type"], Ze = (() => { let n = class ft {
    routerOutlet;
    navCtrl;
    config;
    r;
    z;
    el;
    constructor(t, e, r, o, s, a) { this.routerOutlet = t, this.navCtrl = e, this.config = r, this.r = o, this.z = s, a.detach(), this.el = this.r.nativeElement; }
    onClick(t) { let e = this.defaultHref || this.config.get("backButtonDefaultHref"); this.routerOutlet?.canGoBack() ? (this.navCtrl.setDirection("back", void 0, void 0, this.routerAnimation), this.routerOutlet.pop(), t.preventDefault()) : e != null && (this.navCtrl.navigateBack(e, { animation: this.routerAnimation }), t.preventDefault()); }
    static \u0275fac = function (e) { return new (e || ft)(g.\u0275\u0275directiveInject(lt, 8), g.\u0275\u0275directiveInject(I), g.\u0275\u0275directiveInject(_), g.\u0275\u0275directiveInject(g.ElementRef), g.\u0275\u0275directiveInject(g.NgZone), g.\u0275\u0275directiveInject(g.ChangeDetectorRef)); };
    static \u0275dir = g.\u0275\u0275defineDirective({ type: ft, hostBindings: function (e, r) { e & 1 && g.\u0275\u0275listener("click", function (s) { return r.onClick(s); }); }, inputs: { color: "color", defaultHref: "defaultHref", disabled: "disabled", icon: "icon", mode: "mode", routerAnimation: "routerAnimation", text: "text", type: "type" }, standalone: !1 });
}; return n = $e([y({ inputs: Ye })], n), n; })();
import { __decorate as Je } from "tslib";
import "@angular/core";
import * as h from "@angular/core";
var Xe = ["animated", "animation", "root", "rootParams", "swipeGesture"], ti = ["push", "insert", "insertPages", "pop", "popTo", "popToRoot", "removeIndex", "setRoot", "setPages", "getActive", "getByIndex", "canGoBack", "getPrevious"], ei = (() => { let n = class mt {
    z;
    el;
    constructor(t, e, r, o, s, a) { this.z = s, a.detach(), this.el = t.nativeElement, t.nativeElement.delegate = o.create(e, r), O(this, this.el, ["ionNavDidChange", "ionNavWillChange"]); }
    static \u0275fac = function (e) { return new (e || mt)(h.\u0275\u0275directiveInject(h.ElementRef), h.\u0275\u0275directiveInject(h.EnvironmentInjector), h.\u0275\u0275directiveInject(h.Injector), h.\u0275\u0275directiveInject(nt), h.\u0275\u0275directiveInject(h.NgZone), h.\u0275\u0275directiveInject(h.ChangeDetectorRef)); };
    static \u0275dir = h.\u0275\u0275defineDirective({ type: mt, inputs: { animated: "animated", animation: "animation", root: "root", rootParams: "rootParams", swipeGesture: "swipeGesture" }, standalone: !1 });
}; return n = Je([y({ inputs: Xe, methods: ti })], n), n; })();
import "@angular/core";
import * as u from "@angular/core";
import * as pt from "@angular/common";
import * as S from "@angular/router";
var ii = (() => { class n {
    locationStrategy;
    navCtrl;
    elementRef;
    router;
    routerLink;
    routerDirection = "forward";
    routerAnimation;
    constructor(t, e, r, o, s) { this.locationStrategy = t, this.navCtrl = e, this.elementRef = r, this.router = o, this.routerLink = s; }
    ngOnInit() { this.updateTargetUrlAndHref(), this.updateTabindex(), this.elementRef.nativeElement.addEventListener("click", this.onCaptureClick, { capture: !0 }); }
    ngOnChanges() { this.updateTargetUrlAndHref(); }
    ngOnDestroy() { this.elementRef.nativeElement.removeEventListener("click", this.onCaptureClick, { capture: !0 }); }
    onCaptureClick = t => { this.opensNatively(t) && t.stopImmediatePropagation(); };
    opensNatively(t) { if (t instanceof MouseEvent && (t.ctrlKey || t.metaKey || t.shiftKey || t.altKey))
        return !0; let e = this.elementRef.nativeElement.target; return e != null && e !== "" && e !== "_self"; }
    updateTabindex() { let t = ["ION-BACK-BUTTON", "ION-BREADCRUMB", "ION-BUTTON", "ION-CARD", "ION-FAB-BUTTON", "ION-ITEM", "ION-ITEM-OPTION", "ION-MENU-BUTTON", "ION-SEGMENT-BUTTON", "ION-TAB-BUTTON"], e = this.elementRef.nativeElement; t.includes(e.tagName) && e.getAttribute("tabindex") === "0" && e.removeAttribute("tabindex"); }
    updateTargetUrlAndHref() { if (this.routerLink?.urlTree) {
        let t = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.routerLink.urlTree));
        this.elementRef.nativeElement.href = t;
    } }
    onClick(t) { this.navCtrl.setDirection(this.routerDirection, void 0, void 0, this.routerAnimation), t.preventDefault(); }
    static \u0275fac = function (e) { return new (e || n)(u.\u0275\u0275directiveInject(pt.LocationStrategy), u.\u0275\u0275directiveInject(I), u.\u0275\u0275directiveInject(u.ElementRef), u.\u0275\u0275directiveInject(S.Router), u.\u0275\u0275directiveInject(S.RouterLink, 8)); };
    static \u0275dir = u.\u0275\u0275defineDirective({ type: n, selectors: [["", "routerLink", "", 5, "a", 5, "area"]], hostBindings: function (e, r) { e & 1 && u.\u0275\u0275listener("click", function (s) { return r.onClick(s); }); }, inputs: { routerDirection: "routerDirection", routerAnimation: "routerAnimation" }, standalone: !1, features: [u.\u0275\u0275NgOnChangesFeature] });
} return n; })();
var ni = (() => { class n {
    locationStrategy;
    navCtrl;
    elementRef;
    router;
    routerLink;
    routerDirection = "forward";
    routerAnimation;
    constructor(t, e, r, o, s) { this.locationStrategy = t, this.navCtrl = e, this.elementRef = r, this.router = o, this.routerLink = s; }
    ngOnInit() { this.updateTargetUrlAndHref(); }
    ngOnChanges() { this.updateTargetUrlAndHref(); }
    updateTargetUrlAndHref() { if (this.routerLink?.urlTree) {
        let t = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.routerLink.urlTree));
        this.elementRef.nativeElement.href = t;
    } }
    onClick() { this.navCtrl.setDirection(this.routerDirection, void 0, void 0, this.routerAnimation); }
    static \u0275fac = function (e) { return new (e || n)(u.\u0275\u0275directiveInject(pt.LocationStrategy), u.\u0275\u0275directiveInject(I), u.\u0275\u0275directiveInject(u.ElementRef), u.\u0275\u0275directiveInject(S.Router), u.\u0275\u0275directiveInject(S.RouterLink, 8)); };
    static \u0275dir = u.\u0275\u0275defineDirective({ type: n, selectors: [["a", "routerLink", ""], ["area", "routerLink", ""]], hostBindings: function (e, r) { e & 1 && u.\u0275\u0275listener("click", function () { return r.onClick(); }); }, inputs: { routerDirection: "routerDirection", routerAnimation: "routerAnimation" }, standalone: !1, features: [u.\u0275\u0275NgOnChangesFeature] });
} return n; })();
import { ElementRef as ri, EventEmitter as Yt } from "@angular/core";
import * as C from "@angular/core";
var oi = ["tabsInner"], si = n => { if (!n)
    return; let i = n.indexOf("#"), t = i >= 0 && i < n.length - 1 ? n.slice(i + 1) : void 0, e = i >= 0 ? n.slice(0, i) : n, r = e.indexOf("?"), o = r >= 0 ? e.slice(r + 1) : "", s; if (o) {
    let c = new URLSearchParams(o);
    s = {};
    for (let l of new Set(c.keys())) {
        let d = c.getAll(l);
        s[l] = d.length > 1 ? d : d[0];
    }
} if (!s && t === void 0)
    return; let a = {}; return s && (a.queryParams = s), t !== void 0 && (a.fragment = t), a; }, ai = (() => { class n {
    navCtrl;
    tabsInner;
    ionTabsWillChange = new Yt;
    ionTabsDidChange = new Yt;
    tabBarSlot = "bottom";
    hasTab = !1;
    selectedTab;
    leavingTab;
    constructor(t) { this.navCtrl = t; }
    ngAfterViewInit() { let t = this.tabs.length > 0 ? this.tabs.first : void 0; t && (this.hasTab = !0, this.setActiveTab(t.tab), this.tabSwitch()); }
    ngAfterContentInit() { this.detectSlotChanges(); }
    ngAfterContentChecked() { this.detectSlotChanges(); }
    onStackWillChange({ enteringView: t, tabSwitch: e }) { let r = t.stackId; e && r !== void 0 && this.ionTabsWillChange.emit({ tab: r }); }
    onStackDidChange({ enteringView: t, tabSwitch: e }) { let r = t.stackId; e && r !== void 0 && (this.tabBar && (this.tabBar.selectedTab = r), this.ionTabsDidChange.emit({ tab: r })); }
    select(t) { let e = typeof t == "string", r = e ? t : t.detail.tab, o = e ? void 0 : t.detail.href; if (this.hasTab) {
        this.setActiveTab(r), this.tabSwitch();
        return;
    } let s = this.outlet.getActiveStackId() === r, a = `${this.outlet.tabsPrefix}/${r}`, c = si(o); if (e || t.stopPropagation(), s) {
        let l = this.outlet.getActiveStackId();
        if (this.outlet.getLastRouteView(l)?.url === a)
            return;
        let b = this.outlet.getRootView(r), D = b && a === b.url && b.savedExtras;
        return this.navCtrl.navigateRoot(a, L(v(v({}, D), c), { animated: !0, animationDirection: "back" }));
    }
    else {
        let l = this.outlet.getLastRouteView(r), d = l?.url || a, b = l?.savedExtras ?? (d === a ? c : void 0);
        return this.navCtrl.navigateRoot(d, L(v({}, b), { animated: !0, animationDirection: "back" }));
    } }
    setActiveTab(t) { let r = this.tabs.find(o => o.tab === t); if (!r) {
        console.error(`[Ionic Error]: Tab with id: "${t}" does not exist`);
        return;
    } this.leavingTab = this.selectedTab, this.selectedTab = r, this.ionTabsWillChange.emit({ tab: t }), r.el.active = !0; }
    tabSwitch() { let { selectedTab: t, leavingTab: e } = this; this.tabBar && t && (this.tabBar.selectedTab = t.tab), e?.tab !== t?.tab && e?.el && (e.el.active = !1), t && this.ionTabsDidChange.emit({ tab: t.tab }); }
    getSelected() { return this.hasTab ? this.selectedTab?.tab : this.outlet.getActiveStackId(); }
    detectSlotChanges() { this.tabBars.forEach(t => { let e = t.el.getAttribute("slot"); e !== this.tabBarSlot && (this.tabBarSlot = e, this.relocateTabBar()); }); }
    relocateTabBar() { let t = this.tabBar.el; this.tabBarSlot === "top" ? this.tabsInner.nativeElement.before(t) : this.tabsInner.nativeElement.after(t); }
    static \u0275fac = function (e) { return new (e || n)(C.\u0275\u0275directiveInject(I)); };
    static \u0275dir = C.\u0275\u0275defineDirective({ type: n, selectors: [["ion-tabs"]], viewQuery: function (e, r) { if (e & 1 && C.\u0275\u0275viewQuery(oi, 7, ri), e & 2) {
            let o;
            C.\u0275\u0275queryRefresh(o = C.\u0275\u0275loadQuery()) && (r.tabsInner = o.first);
        } }, hostBindings: function (e, r) { e & 1 && C.\u0275\u0275listener("ionTabButtonClick", function (s) { return r.select(s); }); }, outputs: { ionTabsWillChange: "ionTabsWillChange", ionTabsDidChange: "ionTabsDidChange" }, standalone: !1 });
} return n; })();
var gt = class {
    ctrl;
    constructor(i) { this.ctrl = i; }
    create(i) { return this.ctrl.create(i || {}); }
    dismiss(i, t, e) { return this.ctrl.dismiss(i, t, e); }
    getTop() { return this.ctrl.getTop(); }
};
var vt = class {
    shouldDetach(i) { return !1; }
    shouldAttach(i) { return !1; }
    store(i, t) { }
    retrieve(i) { return null; }
    shouldReuseRoute(i, t) { if (i.routeConfig !== t.routeConfig)
        return !1; let e = i.params, r = t.params, o = Object.keys(e), s = Object.keys(r); if (o.length !== s.length)
        return !1; for (let a of o)
        if (r[a] !== e[a])
            return !1; return !0; }
};
export { nt as AngularDelegate, _ as Config, tt as ConfigToken, Xt as DomController, Ze as IonBackButton, xe as IonModal, Nt as IonModalToken, ei as IonNav, Be as IonPopover, lt as IonRouterOutlet, ai as IonTabs, vt as IonicRouteStrategy, K as MenuController, I as NavController, B as NavParams, gt as OverlayBaseController, $ as Platform, y as ProxyCmp, ii as RouterLinkDelegateDirective, ni as RouterLinkWithHrefDelegateDirective, In as ValueAccessor, W as bindLifecycleEvents, We as provideComponentInputBinding, dt as raf, V as setIonicClasses };
