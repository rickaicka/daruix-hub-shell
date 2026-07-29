import { a as J } from "@nf-internal/chunk-ZA2VCZYX";
import { a as B } from "@nf-internal/chunk-B5XQ7TKQ";
import { b as Jt, c as Y } from "@nf-internal/chunk-YO6BUQC4";
import { c as H, d as W, e as X, f as q, g as K, h as Q, i as U } from "@nf-internal/chunk-PW3ODLEF";
import "@nf-internal/chunk-56RDUDAP";
import { d as Yt } from "@nf-internal/chunk-JIWXQZSC";
import { a as F } from "@nf-internal/chunk-3VPKZZES";
import "@nf-internal/chunk-55MUSWHY";
import "@nf-internal/chunk-GNHA26NQ";
import { b as $t } from "@nf-internal/chunk-7P4ZSBVB";
import { a as en } from "@nf-internal/chunk-FWSUTPJN";
import { i as tn } from "@nf-internal/chunk-3EH34PB5";
import { a as P } from "@nf-internal/chunk-QUCC4MFB";
import "@nf-internal/chunk-PJKO2XHO";
import { a as Qt, b as Ut, d as G } from "@nf-internal/chunk-DBOLI3CQ";
import "@nf-internal/chunk-NTOTMM2V";
import { t as nn } from "@nf-internal/chunk-DPCBKAOC";
import { a as S, b as M, e as A, h as Kt } from "@nf-internal/chunk-C4FLJMU7";
import "@angular/core";
import { NG_VALUE_ACCESSOR as Jo } from "@angular/forms";
import { ValueAccessor as $o, setIonicClasses as ei } from "@ionic/angular/common";
import * as v from "@angular/core";
var $ = (() => { class n extends $o {
    constructor(o, t) { super(o, t); }
    writeValue(o) { this.elementRef.nativeElement.checked = this.lastValue = o, ei(this.elementRef); }
    _handleIonChange(o) { this.handleValueChange(o, o.checked); }
    static \u0275fac = function (t) { return new (t || n)(v.\u0275\u0275directiveInject(v.Injector), v.\u0275\u0275directiveInject(v.ElementRef)); };
    static \u0275dir = v.\u0275\u0275defineDirective({ type: n, selectors: [["ion-checkbox"], ["ion-toggle"]], hostBindings: function (t, i) { t & 1 && v.\u0275\u0275listener("ionChange", function (u) { return i._handleIonChange(u.target); }); }, standalone: !1, features: [v.\u0275\u0275ProvidersFeature([{ provide: Jo, useExisting: n, multi: !0 }]), v.\u0275\u0275InheritDefinitionFeature] });
} return n; })();
import "@angular/core";
import { NG_VALUE_ACCESSOR as ti } from "@angular/forms";
import { ValueAccessor as ni } from "@ionic/angular/common";
import * as I from "@angular/core";
var ee = (() => { class n extends ni {
    el;
    constructor(o, t) { super(o, t), this.el = t; }
    handleInputEvent(o) { this.handleValueChange(o, o.value); }
    registerOnChange(o) { this.el.nativeElement.tagName === "ION-INPUT" || this.el.nativeElement.tagName === "ION-INPUT-OTP" ? super.registerOnChange(t => { o(t === "" ? null : parseFloat(t)); }) : super.registerOnChange(o); }
    static \u0275fac = function (t) { return new (t || n)(I.\u0275\u0275directiveInject(I.Injector), I.\u0275\u0275directiveInject(I.ElementRef)); };
    static \u0275dir = I.\u0275\u0275defineDirective({ type: n, selectors: [["ion-input", "type", "number"], ["ion-input-otp", 3, "type", "text"], ["ion-range"]], hostBindings: function (t, i) { t & 1 && I.\u0275\u0275listener("ionInput", function (u) { return i.handleInputEvent(u.target); }); }, standalone: !1, features: [I.\u0275\u0275ProvidersFeature([{ provide: ti, useExisting: n, multi: !0 }]), I.\u0275\u0275InheritDefinitionFeature] });
} return n; })();
import "@angular/core";
import { NG_VALUE_ACCESSOR as oi } from "@angular/forms";
import { ValueAccessor as ii } from "@ionic/angular/common";
import * as D from "@angular/core";
var te = (() => { class n extends ii {
    constructor(o, t) { super(o, t); }
    _handleChangeEvent(o) { this.handleValueChange(o, o.value); }
    static \u0275fac = function (t) { return new (t || n)(D.\u0275\u0275directiveInject(D.Injector), D.\u0275\u0275directiveInject(D.ElementRef)); };
    static \u0275dir = D.\u0275\u0275defineDirective({ type: n, selectors: [["ion-select"], ["ion-radio-group"], ["ion-segment"], ["ion-datetime"]], hostBindings: function (t, i) { t & 1 && D.\u0275\u0275listener("ionChange", function (u) { return i._handleChangeEvent(u.target); }); }, standalone: !1, features: [D.\u0275\u0275ProvidersFeature([{ provide: oi, useExisting: n, multi: !0 }]), D.\u0275\u0275InheritDefinitionFeature] });
} return n; })();
import "@angular/core";
import { NG_VALUE_ACCESSOR as ri } from "@angular/forms";
import { ValueAccessor as ai } from "@ionic/angular/common";
import * as C from "@angular/core";
var ne = (() => { class n extends ai {
    constructor(o, t) { super(o, t); }
    _handleInputEvent(o) { this.handleValueChange(o, o.value); }
    static \u0275fac = function (t) { return new (t || n)(C.\u0275\u0275directiveInject(C.Injector), C.\u0275\u0275directiveInject(C.ElementRef)); };
    static \u0275dir = C.\u0275\u0275defineDirective({ type: n, selectors: [["ion-input", 3, "type", "number"], ["ion-input-otp", "type", "text"], ["ion-textarea"], ["ion-searchbar"]], hostBindings: function (t, i) { t & 1 && C.\u0275\u0275listener("ionInput", function (u) { return i._handleInputEvent(u.target); }); }, standalone: !1, features: [C.\u0275\u0275ProvidersFeature([{ provide: ri, useExisting: n, multi: !0 }]), C.\u0275\u0275InheritDefinitionFeature] });
} return n; })();
import "@angular/core";
import { IonTabs as gi } from "@ionic/angular/common";
import { __decorate as a } from "tslib";
import "@angular/core";
import { fromEvent as ci } from "rxjs";
var li = (n, h) => { let o = n.prototype; h.forEach(t => { Object.defineProperty(o, t, { get() { return this.el[t]; }, set(i) { this.z.runOutsideAngular(() => this.el[t] = i); }, configurable: !0 }); }); }, si = (n, h) => { let o = n.prototype; h.forEach(t => { o[t] = function () { let i = arguments; return this.z.runOutsideAngular(() => this.el[t].apply(this.el, i)); }; }); }, d = (n, h, o) => { o.forEach(t => n[t] = ci(h, t)); };
function r(n) { return function (o) { let { defineCustomElementFn: t, inputs: i, methods: s } = n; return t !== void 0 && t(), i && li(o, i), s && si(o, s), o; }; }
import * as e from "@angular/core";
var c = ["*"], on = (() => { let n = class oe {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement; }
    static \u0275fac = function (t) { return new (t || oe)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: oe, selectors: [["ion-accordion"]], inputs: { disabled: "disabled", mode: "mode", readonly: "readonly", toggleIcon: "toggleIcon", toggleIconSlot: "toggleIconSlot", value: "value" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["disabled", "mode", "readonly", "toggleIcon", "toggleIconSlot", "value"] })], n), n; })();
var rn = (() => { let n = class ie {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement, d(this, this.el, ["ionChange"]); }
    static \u0275fac = function (t) { return new (t || ie)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: ie, selectors: [["ion-accordion-group"]], inputs: { animated: "animated", disabled: "disabled", expand: "expand", mode: "mode", multiple: "multiple", readonly: "readonly", value: "value" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["animated", "disabled", "expand", "mode", "multiple", "readonly", "value"] })], n), n; })();
var an = (() => { let n = class re {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement, d(this, this.el, ["ionActionSheetDidPresent", "ionActionSheetWillPresent", "ionActionSheetWillDismiss", "ionActionSheetDidDismiss", "didPresent", "willPresent", "willDismiss", "didDismiss"]); }
    static \u0275fac = function (t) { return new (t || re)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: re, selectors: [["ion-action-sheet"]], inputs: { animated: "animated", backdropDismiss: "backdropDismiss", buttons: "buttons", cssClass: "cssClass", enterAnimation: "enterAnimation", header: "header", htmlAttributes: "htmlAttributes", isOpen: "isOpen", keyboardClose: "keyboardClose", leaveAnimation: "leaveAnimation", mode: "mode", subHeader: "subHeader", translucent: "translucent", trigger: "trigger" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["animated", "backdropDismiss", "buttons", "cssClass", "enterAnimation", "header", "htmlAttributes", "isOpen", "keyboardClose", "leaveAnimation", "mode", "subHeader", "translucent", "trigger"], methods: ["present", "dismiss", "onDidDismiss", "onWillDismiss"] })], n), n; })();
var cn = (() => { let n = class ae {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement, d(this, this.el, ["ionAlertDidPresent", "ionAlertWillPresent", "ionAlertWillDismiss", "ionAlertDidDismiss", "didPresent", "willPresent", "willDismiss", "didDismiss"]); }
    static \u0275fac = function (t) { return new (t || ae)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: ae, selectors: [["ion-alert"]], inputs: { animated: "animated", backdropDismiss: "backdropDismiss", buttons: "buttons", cssClass: "cssClass", enterAnimation: "enterAnimation", header: "header", htmlAttributes: "htmlAttributes", inputs: "inputs", isOpen: "isOpen", keyboardClose: "keyboardClose", leaveAnimation: "leaveAnimation", message: "message", mode: "mode", subHeader: "subHeader", translucent: "translucent", trigger: "trigger" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["animated", "backdropDismiss", "buttons", "cssClass", "enterAnimation", "header", "htmlAttributes", "inputs", "isOpen", "keyboardClose", "leaveAnimation", "message", "mode", "subHeader", "translucent", "trigger"], methods: ["present", "dismiss", "onDidDismiss", "onWillDismiss"] })], n), n; })();
var ln = (() => { let n = class ce {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement; }
    static \u0275fac = function (t) { return new (t || ce)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: ce, selectors: [["ion-app"]], standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ methods: ["setFocus"] })], n), n; })();
var sn = (() => { let n = class le {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement; }
    static \u0275fac = function (t) { return new (t || le)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: le, selectors: [["ion-avatar"]], standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({})], n), n; })();
var dn = (() => { let n = class se {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement, d(this, this.el, ["ionBackdropTap"]); }
    static \u0275fac = function (t) { return new (t || se)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: se, selectors: [["ion-backdrop"]], inputs: { stopPropagation: "stopPropagation", tappable: "tappable", visible: "visible" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["stopPropagation", "tappable", "visible"] })], n), n; })();
var pn = (() => { let n = class de {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement; }
    static \u0275fac = function (t) { return new (t || de)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: de, selectors: [["ion-badge"]], inputs: { color: "color", mode: "mode" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["color", "mode"] })], n), n; })();
var un = (() => { let n = class pe {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement, d(this, this.el, ["ionFocus", "ionBlur"]); }
    static \u0275fac = function (t) { return new (t || pe)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: pe, selectors: [["ion-breadcrumb"]], inputs: { active: "active", color: "color", disabled: "disabled", download: "download", href: "href", mode: "mode", rel: "rel", routerAnimation: "routerAnimation", routerDirection: "routerDirection", separator: "separator", target: "target" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["active", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "separator", "target"] })], n), n; })();
var mn = (() => { let n = class ue {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement, d(this, this.el, ["ionCollapsedClick"]); }
    static \u0275fac = function (t) { return new (t || ue)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: ue, selectors: [["ion-breadcrumbs"]], inputs: { color: "color", itemsAfterCollapse: "itemsAfterCollapse", itemsBeforeCollapse: "itemsBeforeCollapse", maxItems: "maxItems", mode: "mode" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["color", "itemsAfterCollapse", "itemsBeforeCollapse", "maxItems", "mode"] })], n), n; })();
var fn = (() => { let n = class me {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement, d(this, this.el, ["ionFocus", "ionBlur"]); }
    static \u0275fac = function (t) { return new (t || me)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: me, selectors: [["ion-button"]], inputs: { buttonType: "buttonType", color: "color", disabled: "disabled", download: "download", expand: "expand", fill: "fill", form: "form", href: "href", mode: "mode", rel: "rel", routerAnimation: "routerAnimation", routerDirection: "routerDirection", shape: "shape", size: "size", strong: "strong", target: "target", type: "type" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "form", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] })], n), n; })();
var gn = (() => { let n = class fe {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement; }
    static \u0275fac = function (t) { return new (t || fe)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: fe, selectors: [["ion-buttons"]], inputs: { collapse: "collapse" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["collapse"] })], n), n; })();
var hn = (() => { let n = class ge {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement; }
    static \u0275fac = function (t) { return new (t || ge)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: ge, selectors: [["ion-card"]], inputs: { button: "button", color: "color", disabled: "disabled", download: "download", href: "href", mode: "mode", rel: "rel", routerAnimation: "routerAnimation", routerDirection: "routerDirection", target: "target", type: "type" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["button", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"] })], n), n; })();
var vn = (() => { let n = class he {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement; }
    static \u0275fac = function (t) { return new (t || he)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: he, selectors: [["ion-card-content"]], inputs: { mode: "mode" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["mode"] })], n), n; })();
var In = (() => { let n = class ve {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement; }
    static \u0275fac = function (t) { return new (t || ve)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: ve, selectors: [["ion-card-header"]], inputs: { color: "color", mode: "mode", translucent: "translucent" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["color", "mode", "translucent"] })], n), n; })();
var Dn = (() => { let n = class Ie {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement; }
    static \u0275fac = function (t) { return new (t || Ie)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: Ie, selectors: [["ion-card-subtitle"]], inputs: { color: "color", mode: "mode" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["color", "mode"] })], n), n; })();
var Cn = (() => { let n = class De {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement; }
    static \u0275fac = function (t) { return new (t || De)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: De, selectors: [["ion-card-title"]], inputs: { color: "color", mode: "mode" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["color", "mode"] })], n), n; })();
var bn = (() => { let n = class Ce {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement, d(this, this.el, ["ionChange", "ionFocus", "ionBlur"]); }
    static \u0275fac = function (t) { return new (t || Ce)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: Ce, selectors: [["ion-checkbox"]], inputs: { alignment: "alignment", checked: "checked", color: "color", disabled: "disabled", errorText: "errorText", helperText: "helperText", indeterminate: "indeterminate", justify: "justify", labelPlacement: "labelPlacement", mode: "mode", name: "name", required: "required", value: "value" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["alignment", "checked", "color", "disabled", "errorText", "helperText", "indeterminate", "justify", "labelPlacement", "mode", "name", "required", "value"] })], n), n; })();
var yn = (() => { let n = class be {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement; }
    static \u0275fac = function (t) { return new (t || be)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: be, selectors: [["ion-chip"]], inputs: { color: "color", disabled: "disabled", mode: "mode", outline: "outline" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["color", "disabled", "mode", "outline"] })], n), n; })();
var xn = (() => { let n = class ye {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement; }
    static \u0275fac = function (t) { return new (t || ye)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: ye, selectors: [["ion-col"]], inputs: { offset: "offset", offsetLg: "offsetLg", offsetMd: "offsetMd", offsetSm: "offsetSm", offsetXl: "offsetXl", offsetXs: "offsetXs", pull: "pull", pullLg: "pullLg", pullMd: "pullMd", pullSm: "pullSm", pullXl: "pullXl", pullXs: "pullXs", push: "push", pushLg: "pushLg", pushMd: "pushMd", pushSm: "pushSm", pushXl: "pushXl", pushXs: "pushXs", size: "size", sizeLg: "sizeLg", sizeMd: "sizeMd", sizeSm: "sizeSm", sizeXl: "sizeXl", sizeXs: "sizeXs" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["offset", "offsetLg", "offsetMd", "offsetSm", "offsetXl", "offsetXs", "pull", "pullLg", "pullMd", "pullSm", "pullXl", "pullXs", "push", "pushLg", "pushMd", "pushSm", "pushXl", "pushXs", "size", "sizeLg", "sizeMd", "sizeSm", "sizeXl", "sizeXs"] })], n), n; })();
var jn = (() => { let n = class xe {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement, d(this, this.el, ["ionScrollStart", "ionScroll", "ionScrollEnd"]); }
    static \u0275fac = function (t) { return new (t || xe)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: xe, selectors: [["ion-content"]], inputs: { color: "color", fixedSlotPlacement: "fixedSlotPlacement", forceOverscroll: "forceOverscroll", fullscreen: "fullscreen", scrollEvents: "scrollEvents", scrollX: "scrollX", scrollY: "scrollY" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["color", "fixedSlotPlacement", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"], methods: ["getScrollElement", "scrollToTop", "scrollToBottom", "scrollByPoint", "scrollToPoint"] })], n), n; })();
var Tn = (() => { let n = class je {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement, d(this, this.el, ["ionCancel", "ionChange", "ionFocus", "ionBlur"]); }
    static \u0275fac = function (t) { return new (t || je)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: je, selectors: [["ion-datetime"]], inputs: { cancelText: "cancelText", clearText: "clearText", color: "color", dayValues: "dayValues", disabled: "disabled", doneText: "doneText", firstDayOfWeek: "firstDayOfWeek", formatOptions: "formatOptions", highlightedDates: "highlightedDates", hourCycle: "hourCycle", hourValues: "hourValues", isDateEnabled: "isDateEnabled", locale: "locale", max: "max", min: "min", minuteValues: "minuteValues", mode: "mode", monthValues: "monthValues", multiple: "multiple", name: "name", preferWheel: "preferWheel", presentation: "presentation", readonly: "readonly", showAdjacentDays: "showAdjacentDays", showClearButton: "showClearButton", showDefaultButtons: "showDefaultButtons", showDefaultTimeLabel: "showDefaultTimeLabel", showDefaultTitle: "showDefaultTitle", size: "size", titleSelectedDatesFormatter: "titleSelectedDatesFormatter", value: "value", yearValues: "yearValues" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["cancelText", "clearText", "color", "dayValues", "disabled", "doneText", "firstDayOfWeek", "formatOptions", "highlightedDates", "hourCycle", "hourValues", "isDateEnabled", "locale", "max", "min", "minuteValues", "mode", "monthValues", "multiple", "name", "preferWheel", "presentation", "readonly", "showAdjacentDays", "showClearButton", "showDefaultButtons", "showDefaultTimeLabel", "showDefaultTitle", "size", "titleSelectedDatesFormatter", "value", "yearValues"], methods: ["confirm", "reset", "cancel"] })], n), n; })();
var wn = (() => { let n = class Te {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement; }
    static \u0275fac = function (t) { return new (t || Te)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: Te, selectors: [["ion-datetime-button"]], inputs: { color: "color", datetime: "datetime", disabled: "disabled", mode: "mode" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["color", "datetime", "disabled", "mode"] })], n), n; })();
var Sn = (() => { let n = class we {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement; }
    static \u0275fac = function (t) { return new (t || we)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: we, selectors: [["ion-fab"]], inputs: { activated: "activated", edge: "edge", horizontal: "horizontal", vertical: "vertical" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["activated", "edge", "horizontal", "vertical"], methods: ["close"] })], n), n; })();
var Mn = (() => { let n = class Se {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement, d(this, this.el, ["ionFocus", "ionBlur"]); }
    static \u0275fac = function (t) { return new (t || Se)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: Se, selectors: [["ion-fab-button"]], inputs: { activated: "activated", closeIcon: "closeIcon", color: "color", disabled: "disabled", download: "download", href: "href", mode: "mode", rel: "rel", routerAnimation: "routerAnimation", routerDirection: "routerDirection", show: "show", size: "size", target: "target", translucent: "translucent", type: "type" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["activated", "closeIcon", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "show", "size", "target", "translucent", "type"] })], n), n; })();
var Rn = (() => { let n = class Me {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement; }
    static \u0275fac = function (t) { return new (t || Me)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: Me, selectors: [["ion-fab-list"]], inputs: { activated: "activated", side: "side" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["activated", "side"] })], n), n; })();
var En = (() => { let n = class Re {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement; }
    static \u0275fac = function (t) { return new (t || Re)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: Re, selectors: [["ion-footer"]], inputs: { collapse: "collapse", mode: "mode", translucent: "translucent" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["collapse", "mode", "translucent"] })], n), n; })();
var kn = (() => { let n = class Ee {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement; }
    static \u0275fac = function (t) { return new (t || Ee)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: Ee, selectors: [["ion-grid"]], inputs: { fixed: "fixed" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["fixed"] })], n), n; })();
var zn = (() => { let n = class ke {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement; }
    static \u0275fac = function (t) { return new (t || ke)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: ke, selectors: [["ion-header"]], inputs: { collapse: "collapse", mode: "mode", translucent: "translucent" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["collapse", "mode", "translucent"] })], n), n; })();
var An = (() => { let n = class ze {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement; }
    static \u0275fac = function (t) { return new (t || ze)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: ze, selectors: [["ion-icon"]], inputs: { color: "color", flipRtl: "flipRtl", icon: "icon", ios: "ios", lazy: "lazy", md: "md", mode: "mode", name: "name", sanitize: "sanitize", size: "size", src: "src" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"] })], n), n; })();
var Fn = (() => { let n = class Ae {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement, d(this, this.el, ["ionImgWillLoad", "ionImgDidLoad", "ionError"]); }
    static \u0275fac = function (t) { return new (t || Ae)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: Ae, selectors: [["ion-img"]], inputs: { alt: "alt", src: "src" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["alt", "src"] })], n), n; })();
var Bn = (() => { let n = class Fe {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement, d(this, this.el, ["ionInfinite"]); }
    static \u0275fac = function (t) { return new (t || Fe)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: Fe, selectors: [["ion-infinite-scroll"]], inputs: { disabled: "disabled", position: "position", threshold: "threshold" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["disabled", "position", "threshold"], methods: ["complete"] })], n), n; })();
var Pn = (() => { let n = class Be {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement; }
    static \u0275fac = function (t) { return new (t || Be)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: Be, selectors: [["ion-infinite-scroll-content"]], inputs: { loadingSpinner: "loadingSpinner", loadingText: "loadingText" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["loadingSpinner", "loadingText"] })], n), n; })();
var On = (() => { let n = class Pe {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement, d(this, this.el, ["ionInput", "ionChange", "ionBlur", "ionFocus"]); }
    static \u0275fac = function (t) { return new (t || Pe)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: Pe, selectors: [["ion-input"]], inputs: { autocapitalize: "autocapitalize", autocomplete: "autocomplete", autocorrect: "autocorrect", autofocus: "autofocus", clearInput: "clearInput", clearInputIcon: "clearInputIcon", clearOnEdit: "clearOnEdit", color: "color", counter: "counter", counterFormatter: "counterFormatter", debounce: "debounce", disabled: "disabled", enterkeyhint: "enterkeyhint", errorText: "errorText", fill: "fill", helperText: "helperText", inputmode: "inputmode", label: "label", labelPlacement: "labelPlacement", max: "max", maxlength: "maxlength", min: "min", minlength: "minlength", mode: "mode", multiple: "multiple", name: "name", pattern: "pattern", placeholder: "placeholder", readonly: "readonly", required: "required", shape: "shape", spellcheck: "spellcheck", step: "step", type: "type", value: "value" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["autocapitalize", "autocomplete", "autocorrect", "autofocus", "clearInput", "clearInputIcon", "clearOnEdit", "color", "counter", "counterFormatter", "debounce", "disabled", "enterkeyhint", "errorText", "fill", "helperText", "inputmode", "label", "labelPlacement", "max", "maxlength", "min", "minlength", "mode", "multiple", "name", "pattern", "placeholder", "readonly", "required", "shape", "spellcheck", "step", "type", "value"], methods: ["setFocus", "getInputElement"] })], n), n; })();
var Nn = (() => { let n = class Oe {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement, d(this, this.el, ["ionInput", "ionChange", "ionComplete", "ionBlur", "ionFocus"]); }
    static \u0275fac = function (t) { return new (t || Oe)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: Oe, selectors: [["ion-input-otp"]], inputs: { autocapitalize: "autocapitalize", color: "color", disabled: "disabled", fill: "fill", inputmode: "inputmode", length: "length", pattern: "pattern", readonly: "readonly", separators: "separators", shape: "shape", size: "size", type: "type", value: "value" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["autocapitalize", "color", "disabled", "fill", "inputmode", "length", "pattern", "readonly", "separators", "shape", "size", "type", "value"], methods: ["setFocus"] })], n), n; })();
var Ln = (() => { let n = class Ne {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement; }
    static \u0275fac = function (t) { return new (t || Ne)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: Ne, selectors: [["ion-input-password-toggle"]], inputs: { color: "color", hideIcon: "hideIcon", mode: "mode", showIcon: "showIcon" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["color", "hideIcon", "mode", "showIcon"] })], n), n; })();
var Vn = (() => { let n = class Le {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement; }
    static \u0275fac = function (t) { return new (t || Le)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: Le, selectors: [["ion-item"]], inputs: { button: "button", color: "color", detail: "detail", detailIcon: "detailIcon", disabled: "disabled", download: "download", href: "href", lines: "lines", mode: "mode", rel: "rel", routerAnimation: "routerAnimation", routerDirection: "routerDirection", target: "target", type: "type" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["button", "color", "detail", "detailIcon", "disabled", "download", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"] })], n), n; })();
var _n = (() => { let n = class Ve {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement; }
    static \u0275fac = function (t) { return new (t || Ve)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: Ve, selectors: [["ion-item-divider"]], inputs: { color: "color", mode: "mode", sticky: "sticky" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["color", "mode", "sticky"] })], n), n; })();
var Zn = (() => { let n = class _e {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement; }
    static \u0275fac = function (t) { return new (t || _e)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: _e, selectors: [["ion-item-group"]], standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({})], n), n; })();
var Gn = (() => { let n = class Ze {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement; }
    static \u0275fac = function (t) { return new (t || Ze)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: Ze, selectors: [["ion-item-option"]], inputs: { color: "color", disabled: "disabled", download: "download", expandable: "expandable", href: "href", mode: "mode", rel: "rel", target: "target", type: "type" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["color", "disabled", "download", "expandable", "href", "mode", "rel", "target", "type"] })], n), n; })();
var Hn = (() => { let n = class Ge {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement, d(this, this.el, ["ionSwipe"]); }
    static \u0275fac = function (t) { return new (t || Ge)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: Ge, selectors: [["ion-item-options"]], inputs: { side: "side" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["side"] })], n), n; })();
var Wn = (() => { let n = class He {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement, d(this, this.el, ["ionDrag"]); }
    static \u0275fac = function (t) { return new (t || He)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: He, selectors: [["ion-item-sliding"]], inputs: { disabled: "disabled" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["disabled"], methods: ["getOpenAmount", "getSlidingRatio", "open", "close", "closeOpened"] })], n), n; })();
var Xn = (() => { let n = class We {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement; }
    static \u0275fac = function (t) { return new (t || We)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: We, selectors: [["ion-label"]], inputs: { color: "color", mode: "mode", position: "position" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["color", "mode", "position"] })], n), n; })();
var qn = (() => { let n = class Xe {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement; }
    static \u0275fac = function (t) { return new (t || Xe)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: Xe, selectors: [["ion-list"]], inputs: { inset: "inset", lines: "lines", mode: "mode" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["inset", "lines", "mode"], methods: ["closeSlidingItems"] })], n), n; })();
var Kn = (() => { let n = class qe {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement; }
    static \u0275fac = function (t) { return new (t || qe)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: qe, selectors: [["ion-list-header"]], inputs: { color: "color", lines: "lines", mode: "mode" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["color", "lines", "mode"] })], n), n; })();
var Qn = (() => { let n = class Ke {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement, d(this, this.el, ["ionLoadingDidPresent", "ionLoadingWillPresent", "ionLoadingWillDismiss", "ionLoadingDidDismiss", "didPresent", "willPresent", "willDismiss", "didDismiss"]); }
    static \u0275fac = function (t) { return new (t || Ke)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: Ke, selectors: [["ion-loading"]], inputs: { animated: "animated", backdropDismiss: "backdropDismiss", cssClass: "cssClass", duration: "duration", enterAnimation: "enterAnimation", htmlAttributes: "htmlAttributes", isOpen: "isOpen", keyboardClose: "keyboardClose", leaveAnimation: "leaveAnimation", message: "message", mode: "mode", showBackdrop: "showBackdrop", spinner: "spinner", translucent: "translucent", trigger: "trigger" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["animated", "backdropDismiss", "cssClass", "duration", "enterAnimation", "htmlAttributes", "isOpen", "keyboardClose", "leaveAnimation", "message", "mode", "showBackdrop", "spinner", "translucent", "trigger"], methods: ["present", "dismiss", "onDidDismiss", "onWillDismiss"] })], n), n; })();
var Un = (() => { let n = class Qe {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement, d(this, this.el, ["ionWillOpen", "ionWillClose", "ionDidOpen", "ionDidClose"]); }
    static \u0275fac = function (t) { return new (t || Qe)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: Qe, selectors: [["ion-menu"]], inputs: { contentId: "contentId", disabled: "disabled", maxEdgeStart: "maxEdgeStart", menuId: "menuId", side: "side", swipeGesture: "swipeGesture", type: "type" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["contentId", "disabled", "maxEdgeStart", "menuId", "side", "swipeGesture", "type"], methods: ["isOpen", "isActive", "open", "close", "toggle", "setOpen"] })], n), n; })();
var Yn = (() => { let n = class Ue {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement; }
    static \u0275fac = function (t) { return new (t || Ue)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: Ue, selectors: [["ion-menu-button"]], inputs: { autoHide: "autoHide", color: "color", disabled: "disabled", menu: "menu", mode: "mode", type: "type" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["autoHide", "color", "disabled", "menu", "mode", "type"] })], n), n; })();
var Jn = (() => { let n = class Ye {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement; }
    static \u0275fac = function (t) { return new (t || Ye)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: Ye, selectors: [["ion-menu-toggle"]], inputs: { autoHide: "autoHide", menu: "menu" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["autoHide", "menu"] })], n), n; })();
var $n = (() => { let n = class Je {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement; }
    static \u0275fac = function (t) { return new (t || Je)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: Je, selectors: [["ion-nav-link"]], inputs: { component: "component", componentProps: "componentProps", routerAnimation: "routerAnimation", routerDirection: "routerDirection" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["component", "componentProps", "routerAnimation", "routerDirection"] })], n), n; })();
var eo = (() => { let n = class $e {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement; }
    static \u0275fac = function (t) { return new (t || $e)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: $e, selectors: [["ion-note"]], inputs: { color: "color", mode: "mode" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["color", "mode"] })], n), n; })();
var to = (() => { let n = class et {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement; }
    static \u0275fac = function (t) { return new (t || et)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: et, selectors: [["ion-picker"]], inputs: { mode: "mode" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["mode"] })], n), n; })();
var no = (() => { let n = class tt {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement, d(this, this.el, ["ionChange"]); }
    static \u0275fac = function (t) { return new (t || tt)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: tt, selectors: [["ion-picker-column"]], inputs: { color: "color", disabled: "disabled", mode: "mode", value: "value" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["color", "disabled", "mode", "value"], methods: ["setFocus"] })], n), n; })();
var oo = (() => { let n = class nt {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement; }
    static \u0275fac = function (t) { return new (t || nt)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: nt, selectors: [["ion-picker-column-option"]], inputs: { color: "color", disabled: "disabled", value: "value" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["color", "disabled", "value"] })], n), n; })();
var io = (() => { let n = class ot {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement, d(this, this.el, ["ionPickerDidPresent", "ionPickerWillPresent", "ionPickerWillDismiss", "ionPickerDidDismiss", "didPresent", "willPresent", "willDismiss", "didDismiss"]); }
    static \u0275fac = function (t) { return new (t || ot)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: ot, selectors: [["ion-picker-legacy"]], inputs: { animated: "animated", backdropDismiss: "backdropDismiss", buttons: "buttons", columns: "columns", cssClass: "cssClass", duration: "duration", enterAnimation: "enterAnimation", htmlAttributes: "htmlAttributes", isOpen: "isOpen", keyboardClose: "keyboardClose", leaveAnimation: "leaveAnimation", mode: "mode", showBackdrop: "showBackdrop", trigger: "trigger" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["animated", "backdropDismiss", "buttons", "columns", "cssClass", "duration", "enterAnimation", "htmlAttributes", "isOpen", "keyboardClose", "leaveAnimation", "mode", "showBackdrop", "trigger"], methods: ["present", "dismiss", "onDidDismiss", "onWillDismiss", "getColumn"] })], n), n; })();
var ro = (() => { let n = class it {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement; }
    static \u0275fac = function (t) { return new (t || it)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: it, selectors: [["ion-progress-bar"]], inputs: { buffer: "buffer", color: "color", mode: "mode", reversed: "reversed", type: "type", value: "value" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["buffer", "color", "mode", "reversed", "type", "value"] })], n), n; })();
var ao = (() => { let n = class rt {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement, d(this, this.el, ["ionFocus", "ionBlur"]); }
    static \u0275fac = function (t) { return new (t || rt)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: rt, selectors: [["ion-radio"]], inputs: { alignment: "alignment", color: "color", disabled: "disabled", justify: "justify", labelPlacement: "labelPlacement", mode: "mode", name: "name", value: "value" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["alignment", "color", "disabled", "justify", "labelPlacement", "mode", "name", "value"] })], n), n; })();
var co = (() => { let n = class at {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement, d(this, this.el, ["ionChange"]); }
    static \u0275fac = function (t) { return new (t || at)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: at, selectors: [["ion-radio-group"]], inputs: { allowEmptySelection: "allowEmptySelection", compareWith: "compareWith", errorText: "errorText", helperText: "helperText", name: "name", value: "value" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["allowEmptySelection", "compareWith", "errorText", "helperText", "name", "value"] })], n), n; })();
var lo = (() => { let n = class ct {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement, d(this, this.el, ["ionChange", "ionInput", "ionFocus", "ionBlur", "ionKnobMoveStart", "ionKnobMoveEnd"]); }
    static \u0275fac = function (t) { return new (t || ct)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: ct, selectors: [["ion-range"]], inputs: { activeBarStart: "activeBarStart", color: "color", debounce: "debounce", disabled: "disabled", dualKnobs: "dualKnobs", label: "label", labelPlacement: "labelPlacement", max: "max", min: "min", mode: "mode", name: "name", pin: "pin", pinFormatter: "pinFormatter", snaps: "snaps", step: "step", ticks: "ticks", value: "value" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["activeBarStart", "color", "debounce", "disabled", "dualKnobs", "label", "labelPlacement", "max", "min", "mode", "name", "pin", "pinFormatter", "snaps", "step", "ticks", "value"] })], n), n; })();
var so = (() => { let n = class lt {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement, d(this, this.el, ["ionRefresh", "ionPull", "ionStart", "ionPullStart", "ionPullEnd"]); }
    static \u0275fac = function (t) { return new (t || lt)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: lt, selectors: [["ion-refresher"]], inputs: { closeDuration: "closeDuration", disabled: "disabled", mode: "mode", pullFactor: "pullFactor", pullMax: "pullMax", pullMin: "pullMin", snapbackDuration: "snapbackDuration" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["closeDuration", "disabled", "mode", "pullFactor", "pullMax", "pullMin", "snapbackDuration"], methods: ["complete", "cancel", "getProgress"] })], n), n; })();
var po = (() => { let n = class st {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement; }
    static \u0275fac = function (t) { return new (t || st)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: st, selectors: [["ion-refresher-content"]], inputs: { pullingIcon: "pullingIcon", pullingText: "pullingText", refreshingSpinner: "refreshingSpinner", refreshingText: "refreshingText" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["pullingIcon", "pullingText", "refreshingSpinner", "refreshingText"] })], n), n; })();
var uo = (() => { let n = class dt {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement; }
    static \u0275fac = function (t) { return new (t || dt)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: dt, selectors: [["ion-reorder"]], standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({})], n), n; })();
var mo = (() => { let n = class pt {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement, d(this, this.el, ["ionItemReorder", "ionReorderStart", "ionReorderMove", "ionReorderEnd"]); }
    static \u0275fac = function (t) { return new (t || pt)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: pt, selectors: [["ion-reorder-group"]], inputs: { disabled: "disabled" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["disabled"], methods: ["complete"] })], n), n; })();
var fo = (() => { let n = class ut {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement; }
    static \u0275fac = function (t) { return new (t || ut)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: ut, selectors: [["ion-ripple-effect"]], inputs: { type: "type" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["type"], methods: ["addRipple"] })], n), n; })();
var go = (() => { let n = class mt {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement; }
    static \u0275fac = function (t) { return new (t || mt)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: mt, selectors: [["ion-row"]], standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({})], n), n; })();
var ho = (() => { let n = class ft {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement, d(this, this.el, ["ionInput", "ionChange", "ionCancel", "ionClear", "ionBlur", "ionFocus"]); }
    static \u0275fac = function (t) { return new (t || ft)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: ft, selectors: [["ion-searchbar"]], inputs: { animated: "animated", autocapitalize: "autocapitalize", autocomplete: "autocomplete", autocorrect: "autocorrect", cancelButtonIcon: "cancelButtonIcon", cancelButtonText: "cancelButtonText", clearIcon: "clearIcon", color: "color", debounce: "debounce", disabled: "disabled", enterkeyhint: "enterkeyhint", inputmode: "inputmode", maxlength: "maxlength", minlength: "minlength", mode: "mode", name: "name", placeholder: "placeholder", searchIcon: "searchIcon", showCancelButton: "showCancelButton", showClearButton: "showClearButton", spellcheck: "spellcheck", type: "type", value: "value" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["animated", "autocapitalize", "autocomplete", "autocorrect", "cancelButtonIcon", "cancelButtonText", "clearIcon", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "maxlength", "minlength", "mode", "name", "placeholder", "searchIcon", "showCancelButton", "showClearButton", "spellcheck", "type", "value"], methods: ["setFocus", "getInputElement"] })], n), n; })();
var vo = (() => { let n = class gt {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement, d(this, this.el, ["ionChange"]); }
    static \u0275fac = function (t) { return new (t || gt)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: gt, selectors: [["ion-segment"]], inputs: { color: "color", disabled: "disabled", mode: "mode", scrollable: "scrollable", selectOnFocus: "selectOnFocus", swipeGesture: "swipeGesture", value: "value" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["color", "disabled", "mode", "scrollable", "selectOnFocus", "swipeGesture", "value"] })], n), n; })();
var Io = (() => { let n = class ht {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement; }
    static \u0275fac = function (t) { return new (t || ht)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: ht, selectors: [["ion-segment-button"]], inputs: { contentId: "contentId", disabled: "disabled", layout: "layout", mode: "mode", type: "type", value: "value" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["contentId", "disabled", "layout", "mode", "type", "value"] })], n), n; })();
var Do = (() => { let n = class vt {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement; }
    static \u0275fac = function (t) { return new (t || vt)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: vt, selectors: [["ion-segment-content"]], standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({})], n), n; })();
var Co = (() => { let n = class It {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement, d(this, this.el, ["ionSegmentViewScroll"]); }
    static \u0275fac = function (t) { return new (t || It)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: It, selectors: [["ion-segment-view"]], inputs: { disabled: "disabled", swipeGesture: "swipeGesture" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["disabled", "swipeGesture"] })], n), n; })();
var bo = (() => { let n = class Dt {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement, d(this, this.el, ["ionChange", "ionCancel", "ionDismiss", "ionFocus", "ionBlur"]); }
    static \u0275fac = function (t) { return new (t || Dt)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: Dt, selectors: [["ion-select"]], inputs: { cancelText: "cancelText", color: "color", compareWith: "compareWith", disabled: "disabled", errorText: "errorText", expandedIcon: "expandedIcon", fill: "fill", helperText: "helperText", interface: "interface", interfaceOptions: "interfaceOptions", justify: "justify", label: "label", labelPlacement: "labelPlacement", mode: "mode", multiple: "multiple", name: "name", okText: "okText", placeholder: "placeholder", required: "required", selectedText: "selectedText", shape: "shape", toggleIcon: "toggleIcon", value: "value" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["cancelText", "color", "compareWith", "disabled", "errorText", "expandedIcon", "fill", "helperText", "interface", "interfaceOptions", "justify", "label", "labelPlacement", "mode", "multiple", "name", "okText", "placeholder", "required", "selectedText", "shape", "toggleIcon", "value"], methods: ["open"] })], n), n; })();
var yo = (() => { let n = class Ct {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement; }
    static \u0275fac = function (t) { return new (t || Ct)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: Ct, selectors: [["ion-select-modal"]], inputs: { cancelText: "cancelText", header: "header", multiple: "multiple", options: "options" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["cancelText", "header", "multiple", "options"] })], n), n; })();
var xo = (() => { let n = class bt {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement; }
    static \u0275fac = function (t) { return new (t || bt)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: bt, selectors: [["ion-select-option"]], inputs: { disabled: "disabled", value: "value" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["disabled", "value"] })], n), n; })();
var jo = (() => { let n = class yt {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement; }
    static \u0275fac = function (t) { return new (t || yt)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: yt, selectors: [["ion-skeleton-text"]], inputs: { animated: "animated" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["animated"] })], n), n; })();
var To = (() => { let n = class xt {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement; }
    static \u0275fac = function (t) { return new (t || xt)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: xt, selectors: [["ion-spinner"]], inputs: { color: "color", duration: "duration", name: "name", paused: "paused" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["color", "duration", "name", "paused"] })], n), n; })();
var wo = (() => { let n = class jt {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement, d(this, this.el, ["ionSplitPaneVisible"]); }
    static \u0275fac = function (t) { return new (t || jt)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: jt, selectors: [["ion-split-pane"]], inputs: { contentId: "contentId", disabled: "disabled", when: "when" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["contentId", "disabled", "when"] })], n), n; })();
var O = (() => { let n = class Tt {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement; }
    static \u0275fac = function (t) { return new (t || Tt)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: Tt, selectors: [["ion-tab"]], inputs: { component: "component", tab: "tab" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["component", "tab"], methods: ["setActive"] })], n), n; })();
var k = (() => { let n = class wt {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement; }
    static \u0275fac = function (t) { return new (t || wt)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: wt, selectors: [["ion-tab-bar"]], inputs: { color: "color", mode: "mode", selectedTab: "selectedTab", translucent: "translucent" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["color", "mode", "selectedTab", "translucent"] })], n), n; })();
var So = (() => { let n = class St {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement; }
    static \u0275fac = function (t) { return new (t || St)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: St, selectors: [["ion-tab-button"]], inputs: { disabled: "disabled", download: "download", href: "href", layout: "layout", mode: "mode", rel: "rel", selected: "selected", tab: "tab", target: "target" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["disabled", "download", "href", "layout", "mode", "rel", "selected", "tab", "target"] })], n), n; })();
var Mo = (() => { let n = class Mt {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement; }
    static \u0275fac = function (t) { return new (t || Mt)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: Mt, selectors: [["ion-text"]], inputs: { color: "color", mode: "mode" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["color", "mode"] })], n), n; })();
var Ro = (() => { let n = class Rt {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement, d(this, this.el, ["ionChange", "ionInput", "ionBlur", "ionFocus"]); }
    static \u0275fac = function (t) { return new (t || Rt)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: Rt, selectors: [["ion-textarea"]], inputs: { autoGrow: "autoGrow", autocapitalize: "autocapitalize", autofocus: "autofocus", clearOnEdit: "clearOnEdit", color: "color", cols: "cols", counter: "counter", counterFormatter: "counterFormatter", debounce: "debounce", disabled: "disabled", enterkeyhint: "enterkeyhint", errorText: "errorText", fill: "fill", helperText: "helperText", inputmode: "inputmode", label: "label", labelPlacement: "labelPlacement", maxlength: "maxlength", minlength: "minlength", mode: "mode", name: "name", placeholder: "placeholder", readonly: "readonly", required: "required", rows: "rows", shape: "shape", spellcheck: "spellcheck", value: "value", wrap: "wrap" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["autoGrow", "autocapitalize", "autofocus", "clearOnEdit", "color", "cols", "counter", "counterFormatter", "debounce", "disabled", "enterkeyhint", "errorText", "fill", "helperText", "inputmode", "label", "labelPlacement", "maxlength", "minlength", "mode", "name", "placeholder", "readonly", "required", "rows", "shape", "spellcheck", "value", "wrap"], methods: ["setFocus", "getInputElement"] })], n), n; })();
var Eo = (() => { let n = class Et {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement; }
    static \u0275fac = function (t) { return new (t || Et)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: Et, selectors: [["ion-thumbnail"]], standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({})], n), n; })();
var ko = (() => { let n = class kt {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement; }
    static \u0275fac = function (t) { return new (t || kt)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: kt, selectors: [["ion-title"]], inputs: { color: "color", size: "size" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["color", "size"] })], n), n; })();
var zo = (() => { let n = class zt {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement, d(this, this.el, ["ionToastDidPresent", "ionToastWillPresent", "ionToastWillDismiss", "ionToastDidDismiss", "didPresent", "willPresent", "willDismiss", "didDismiss"]); }
    static \u0275fac = function (t) { return new (t || zt)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: zt, selectors: [["ion-toast"]], inputs: { animated: "animated", buttons: "buttons", color: "color", cssClass: "cssClass", duration: "duration", enterAnimation: "enterAnimation", header: "header", htmlAttributes: "htmlAttributes", icon: "icon", isOpen: "isOpen", keyboardClose: "keyboardClose", layout: "layout", leaveAnimation: "leaveAnimation", message: "message", mode: "mode", position: "position", positionAnchor: "positionAnchor", swipeGesture: "swipeGesture", translucent: "translucent", trigger: "trigger" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["animated", "buttons", "color", "cssClass", "duration", "enterAnimation", "header", "htmlAttributes", "icon", "isOpen", "keyboardClose", "layout", "leaveAnimation", "message", "mode", "position", "positionAnchor", "swipeGesture", "translucent", "trigger"], methods: ["present", "dismiss", "onDidDismiss", "onWillDismiss"] })], n), n; })();
var Ao = (() => { let n = class At {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement, d(this, this.el, ["ionChange", "ionFocus", "ionBlur"]); }
    static \u0275fac = function (t) { return new (t || At)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: At, selectors: [["ion-toggle"]], inputs: { alignment: "alignment", checked: "checked", color: "color", disabled: "disabled", enableOnOffLabels: "enableOnOffLabels", errorText: "errorText", helperText: "helperText", justify: "justify", labelPlacement: "labelPlacement", mode: "mode", name: "name", required: "required", value: "value" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["alignment", "checked", "color", "disabled", "enableOnOffLabels", "errorText", "helperText", "justify", "labelPlacement", "mode", "name", "required", "value"] })], n), n; })();
var Fo = (() => { let n = class Ft {
    z;
    el;
    constructor(o, t, i) { this.z = i, o.detach(), this.el = t.nativeElement; }
    static \u0275fac = function (t) { return new (t || Ft)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef), e.\u0275\u0275directiveInject(e.ElementRef), e.\u0275\u0275directiveInject(e.NgZone)); };
    static \u0275cmp = e.\u0275\u0275defineComponent({ type: Ft, selectors: [["ion-toolbar"]], inputs: { color: "color", mode: "mode" }, standalone: !1, ngContentSelectors: c, decls: 1, vars: 0, template: function (t, i) { t & 1 && (e.\u0275\u0275projectionDef(), e.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
}; return n = a([r({ inputs: ["color", "mode"] })], n), n; })();
import { ViewContainerRef as pi } from "@angular/core";
import { IonRouterOutlet as ui } from "@ionic/angular/common";
import * as p from "@angular/core";
import * as Bo from "@angular/common";
import * as N from "@angular/router";
var mi = ["outletContent"], fi = ["*"], T = (() => { class n extends ui {
    parentOutlet;
    outletContent;
    constructor(o, t, i, s, u, j, E, qt) { super(o, t, i, s, u, j, E, qt), this.parentOutlet = qt; }
    static \u0275fac = function (t) { return new (t || n)(p.\u0275\u0275injectAttribute("name"), p.\u0275\u0275injectAttribute("tabs"), p.\u0275\u0275directiveInject(Bo.Location), p.\u0275\u0275directiveInject(p.ElementRef), p.\u0275\u0275directiveInject(N.Router), p.\u0275\u0275directiveInject(p.NgZone), p.\u0275\u0275directiveInject(N.ActivatedRoute), p.\u0275\u0275directiveInject(n, 12)); };
    static \u0275cmp = p.\u0275\u0275defineComponent({ type: n, selectors: [["ion-router-outlet"]], viewQuery: function (t, i) { if (t & 1 && p.\u0275\u0275viewQuery(mi, 7, pi), t & 2) {
            let s;
            p.\u0275\u0275queryRefresh(s = p.\u0275\u0275loadQuery()) && (i.outletContent = s.first);
        } }, standalone: !1, features: [p.\u0275\u0275InheritDefinitionFeature], ngContentSelectors: fi, decls: 3, vars: 0, consts: [["outletContent", ""]], template: function (t, i) { t & 1 && (p.\u0275\u0275projectionDef(), p.\u0275\u0275elementContainerStart(0, null, 0), p.\u0275\u0275projection(2), p.\u0275\u0275elementContainerEnd()); }, encapsulation: 2 });
} return n; })();
import * as l from "@angular/core";
import * as Oo from "@angular/common";
var hi = ["outlet"], vi = [[["", "slot", "top"]], "*", [["ion-tab"]]], Ii = ["[slot=top]", "*", "ion-tab"], Di = ["*ngIf", "tabs.length > 0"];
function Ci(n, h) { if (n & 1) {
    let o = l.\u0275\u0275getCurrentView();
    l.\u0275\u0275elementStart(0, "ion-router-outlet", 5, 1), l.\u0275\u0275listener("stackWillChange", function (i) { l.\u0275\u0275restoreView(o); let s = l.\u0275\u0275nextContext(); return l.\u0275\u0275resetView(s.onStackWillChange(i)); })("stackDidChange", function (i) { l.\u0275\u0275restoreView(o); let s = l.\u0275\u0275nextContext(); return l.\u0275\u0275resetView(s.onStackDidChange(i)); }), l.\u0275\u0275elementEnd();
} }
function bi(n, h) { n & 1 && l.\u0275\u0275projection(0, 2, Di); }
var Bt = (() => { class n extends gi {
    outlet;
    tabBar;
    tabBars;
    tabs;
    static \u0275fac = (() => { let o; return function (i) { return (o || (o = l.\u0275\u0275getInheritedFactory(n)))(i || n); }; })();
    static \u0275cmp = l.\u0275\u0275defineComponent({ type: n, selectors: [["ion-tabs"]], contentQueries: function (t, i, s) { if (t & 1 && l.\u0275\u0275contentQuery(s, k, 5)(s, k, 4)(s, O, 4), t & 2) {
            let u;
            l.\u0275\u0275queryRefresh(u = l.\u0275\u0275loadQuery()) && (i.tabBar = u.first), l.\u0275\u0275queryRefresh(u = l.\u0275\u0275loadQuery()) && (i.tabBars = u), l.\u0275\u0275queryRefresh(u = l.\u0275\u0275loadQuery()) && (i.tabs = u);
        } }, viewQuery: function (t, i) { if (t & 1 && l.\u0275\u0275viewQuery(hi, 5, T), t & 2) {
            let s;
            l.\u0275\u0275queryRefresh(s = l.\u0275\u0275loadQuery()) && (i.outlet = s.first);
        } }, standalone: !1, features: [l.\u0275\u0275InheritDefinitionFeature], ngContentSelectors: Ii, decls: 6, vars: 2, consts: [["tabsInner", ""], ["outlet", ""], [1, "tabs-inner"], ["tabs", "true", 3, "stackWillChange", "stackDidChange", 4, "ngIf"], [4, "ngIf"], ["tabs", "true", 3, "stackWillChange", "stackDidChange"]], template: function (t, i) { t & 1 && (l.\u0275\u0275projectionDef(vi), l.\u0275\u0275projection(0), l.\u0275\u0275elementStart(1, "div", 2, 0), l.\u0275\u0275template(3, Ci, 2, 0, "ion-router-outlet", 3)(4, bi, 1, 0, "ng-content", 4), l.\u0275\u0275elementEnd(), l.\u0275\u0275projection(5, 1)), t & 2 && (l.\u0275\u0275advance(3), l.\u0275\u0275property("ngIf", i.tabs.length === 0), l.\u0275\u0275advance(), l.\u0275\u0275property("ngIf", i.tabs.length > 0)); }, dependencies: [Oo.NgIf, T], styles: ["[_nghost-%COMP%]{display:flex;position:absolute;inset:0;flex-direction:column;width:100%;height:100%;contain:layout size style}.tabs-inner[_ngcontent-%COMP%]{position:relative;flex:1;contain:layout size style}"] });
} return n; })();
import "@angular/core";
import { IonBackButton as yi } from "@ionic/angular/common";
import * as f from "@angular/core";
import * as L from "@ionic/angular/common";
var xi = ["*"], Pt = (() => { class n extends yi {
    constructor(o, t, i, s, u, j) { super(o, t, i, s, u, j); }
    static \u0275fac = function (t) { return new (t || n)(f.\u0275\u0275directiveInject(T, 8), f.\u0275\u0275directiveInject(L.NavController), f.\u0275\u0275directiveInject(L.Config), f.\u0275\u0275directiveInject(f.ElementRef), f.\u0275\u0275directiveInject(f.NgZone), f.\u0275\u0275directiveInject(f.ChangeDetectorRef)); };
    static \u0275cmp = f.\u0275\u0275defineComponent({ type: n, selectors: [["ion-back-button"]], standalone: !1, features: [f.\u0275\u0275InheritDefinitionFeature], ngContentSelectors: xi, decls: 1, vars: 0, template: function (t, i) { t & 1 && (f.\u0275\u0275projectionDef(), f.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
} return n; })();
import "@angular/core";
import { IonNav as ji } from "@ionic/angular/common";
import * as m from "@angular/core";
import * as No from "@ionic/angular/common";
var Ti = ["*"], Ot = (() => { class n extends ji {
    constructor(o, t, i, s, u, j) { super(o, t, i, s, u, j); }
    static \u0275fac = function (t) { return new (t || n)(m.\u0275\u0275directiveInject(m.ElementRef), m.\u0275\u0275directiveInject(m.EnvironmentInjector), m.\u0275\u0275directiveInject(m.Injector), m.\u0275\u0275directiveInject(No.AngularDelegate), m.\u0275\u0275directiveInject(m.NgZone), m.\u0275\u0275directiveInject(m.ChangeDetectorRef)); };
    static \u0275cmp = m.\u0275\u0275defineComponent({ type: n, selectors: [["ion-nav"]], standalone: !1, features: [m.\u0275\u0275InheritDefinitionFeature], ngContentSelectors: Ti, decls: 1, vars: 0, template: function (t, i) { t & 1 && (m.\u0275\u0275projectionDef(), m.\u0275\u0275projection(0)); }, encapsulation: 2, changeDetection: 0 });
} return n; })();
import "@angular/core";
import { RouterLinkDelegateDirective as wi, RouterLinkWithHrefDelegateDirective as Si } from "@ionic/angular/common";
import * as w from "@angular/core";
var Nt = (() => { class n extends wi {
    static \u0275fac = (() => { let o; return function (i) { return (o || (o = w.\u0275\u0275getInheritedFactory(n)))(i || n); }; })();
    static \u0275dir = w.\u0275\u0275defineDirective({ type: n, selectors: [["", "routerLink", "", 5, "a", 5, "area"]], standalone: !1, features: [w.\u0275\u0275InheritDefinitionFeature] });
} return n; })();
var Lt = (() => { class n extends Si {
    static \u0275fac = (() => { let o; return function (i) { return (o || (o = w.\u0275\u0275getInheritedFactory(n)))(i || n); }; })();
    static \u0275dir = w.\u0275\u0275defineDirective({ type: n, selectors: [["a", "routerLink", ""], ["area", "routerLink", ""]], standalone: !1, features: [w.\u0275\u0275InheritDefinitionFeature] });
} return n; })();
import "@angular/core";
import { IonModal as Mi } from "@ionic/angular/common";
import * as g from "@angular/core";
import * as V from "@angular/common";
function Ri(n, h) { if (n & 1 && (g.\u0275\u0275elementStart(0, "div", 1), g.\u0275\u0275elementContainer(1, 2), g.\u0275\u0275elementEnd()), n & 2) {
    let o = g.\u0275\u0275nextContext();
    g.\u0275\u0275advance(), g.\u0275\u0275property("ngTemplateOutlet", o.template);
} }
var Vt = (() => { class n extends Mi {
    static \u0275fac = (() => { let o; return function (i) { return (o || (o = g.\u0275\u0275getInheritedFactory(n)))(i || n); }; })();
    static \u0275cmp = g.\u0275\u0275defineComponent({ type: n, selectors: [["ion-modal"]], standalone: !1, features: [g.\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [["class", "ion-delegate-host ion-page", 4, "ngIf"], [1, "ion-delegate-host", "ion-page"], [3, "ngTemplateOutlet"]], template: function (t, i) { t & 1 && g.\u0275\u0275template(0, Ri, 2, 1, "div", 0), t & 2 && g.\u0275\u0275property("ngIf", i.isCmpOpen || i.keepContentsMounted); }, dependencies: [V.NgIf, V.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
} return n; })();
import "@angular/core";
import { IonPopover as Ei } from "@ionic/angular/common";
import * as b from "@angular/core";
import * as _ from "@angular/common";
function ki(n, h) { if (n & 1 && b.\u0275\u0275elementContainer(0, 1), n & 2) {
    let o = b.\u0275\u0275nextContext();
    b.\u0275\u0275property("ngTemplateOutlet", o.template);
} }
var _t = (() => { class n extends Ei {
    static \u0275fac = (() => { let o; return function (i) { return (o || (o = b.\u0275\u0275getInheritedFactory(n)))(i || n); }; })();
    static \u0275cmp = b.\u0275\u0275defineComponent({ type: n, selectors: [["ion-popover"]], standalone: !1, features: [b.\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[3, "ngTemplateOutlet", 4, "ngIf"], [3, "ngTemplateOutlet"]], template: function (t, i) { t & 1 && b.\u0275\u0275template(0, ki, 1, 1, "ng-container", 0), t & 2 && b.\u0275\u0275property("ngIf", i.isCmpOpen || i.keepContentsMounted); }, dependencies: [_.NgIf, _.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
} return n; })();
import { forwardRef as zi } from "@angular/core";
import { MaxValidator as Ai, NG_VALIDATORS as Fi } from "@angular/forms";
import * as y from "@angular/core";
var Bi = { provide: Fi, useExisting: zi(() => Zt), multi: !0 }, Zt = (() => { class n extends Ai {
    static \u0275fac = (() => { let o; return function (i) { return (o || (o = y.\u0275\u0275getInheritedFactory(n)))(i || n); }; })();
    static \u0275dir = y.\u0275\u0275defineDirective({ type: n, selectors: [["ion-input", "type", "number", "max", "", "formControlName", ""], ["ion-input", "type", "number", "max", "", "formControl", ""], ["ion-input", "type", "number", "max", "", "ngModel", ""]], hostVars: 1, hostBindings: function (t, i) { t & 2 && y.\u0275\u0275attribute("max", i._enabled ? i.max : null); }, standalone: !1, features: [y.\u0275\u0275ProvidersFeature([Bi]), y.\u0275\u0275InheritDefinitionFeature] });
} return n; })();
import { forwardRef as Pi } from "@angular/core";
import { MinValidator as Oi, NG_VALIDATORS as Ni } from "@angular/forms";
import * as x from "@angular/core";
var Li = { provide: Ni, useExisting: Pi(() => Gt), multi: !0 }, Gt = (() => { class n extends Oi {
    static \u0275fac = (() => { let o; return function (i) { return (o || (o = x.\u0275\u0275getInheritedFactory(n)))(i || n); }; })();
    static \u0275dir = x.\u0275\u0275defineDirective({ type: n, selectors: [["ion-input", "type", "number", "min", "", "formControlName", ""], ["ion-input", "type", "number", "min", "", "formControl", ""], ["ion-input", "type", "number", "min", "", "ngModel", ""]], hostVars: 1, hostBindings: function (t, i) { t & 2 && x.\u0275\u0275attribute("min", i._enabled ? i.min : null); }, standalone: !1, features: [x.\u0275\u0275ProvidersFeature([Li]), x.\u0275\u0275InheritDefinitionFeature] });
} return n; })();
import { DomController as ds, NavController as ps, Config as us, Platform as ms, AngularDelegate as fs, NavParams as gs, IonicRouteStrategy as hs, IonModalToken as vs } from "@ionic/angular/common";
import "@angular/core";
import { OverlayBaseController as _i } from "@ionic/angular/common";
var Vi = n => { let { swiper: h, extendParams: o } = n, t = { effect: void 0, direction: "horizontal", initialSlide: 0, loop: !1, parallax: !1, slidesPerView: 1, spaceBetween: 0, speed: 300, slidesPerColumn: 1, slidesPerColumnFill: "column", slidesPerGroup: 1, centeredSlides: !1, slidesOffsetBefore: 0, slidesOffsetAfter: 0, touchEventsTarget: "container", freeMode: !1, freeModeMomentum: !0, freeModeMomentumRatio: 1, freeModeMomentumBounce: !0, freeModeMomentumBounceRatio: 1, freeModeMomentumVelocityRatio: 1, freeModeSticky: !1, freeModeMinimumVelocity: .02, autoHeight: !1, setWrapperSize: !1, zoom: { maxRatio: 3, minRatio: 1, toggle: !1 }, touchRatio: 1, touchAngle: 45, simulateTouch: !0, touchStartPreventDefault: !1, shortSwipes: !0, longSwipes: !0, longSwipesRatio: .5, longSwipesMs: 300, followFinger: !0, threshold: 0, touchMoveStopPropagation: !0, touchReleaseOnEdges: !1, iOSEdgeSwipeDetection: !1, iOSEdgeSwipeThreshold: 20, resistance: !0, resistanceRatio: .85, watchSlidesProgress: !1, watchSlidesVisibility: !1, preventClicks: !0, preventClicksPropagation: !0, slideToClickedSlide: !1, loopAdditionalSlides: 0, noSwiping: !0, runCallbacksOnInit: !0, coverflowEffect: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0 }, flipEffect: { slideShadows: !0, limitRotation: !0 }, cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94 }, fadeEffect: { crossFade: !1 }, a11y: { prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide", firstSlideMessage: "This is the first slide", lastSlideMessage: "This is the last slide" } }; h.pagination && (t.pagination = { type: "bullets", clickable: !1, hideOnClick: !1 }), h.scrollbar && (t.scrollbar = { hide: !0 }), o(t); };
import * as Lo from "@angular/core";
var Zi = (() => { class n extends _i {
    constructor() { super(H); }
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275prov = Lo.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" });
} return n; })();
import "@angular/core";
import * as Vo from "@angular/core";
var Gi = (() => { class n {
    create(o) { return P(o); }
    easingTime(o, t, i, s, u) { return B(o, t, i, s, u); }
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275prov = Vo.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" });
} return n; })();
import "@angular/core";
import { OverlayBaseController as Hi } from "@ionic/angular/common";
import * as _o from "@angular/core";
var Wi = (() => { class n extends Hi {
    constructor() { super(W); }
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275prov = _o.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" });
} return n; })();
import "@angular/core";
import * as R from "@angular/core";
var Xi = (() => { class n {
    zone;
    constructor(o) { this.zone = o; }
    create(o, t = !1) { return t && Object.getOwnPropertyNames(o).forEach(i => { if (typeof o[i] == "function") {
        let s = o[i];
        o[i] = (...u) => this.zone.run(() => s(...u));
    } }), F(o); }
    static \u0275fac = function (t) { return new (t || n)(R.\u0275\u0275inject(R.NgZone)); };
    static \u0275prov = R.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" });
} return n; })();
import "@angular/core";
import { OverlayBaseController as qi } from "@ionic/angular/common";
import * as Zo from "@angular/core";
var Ki = (() => { class n extends qi {
    constructor() { super(X); }
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275prov = Zo.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" });
} return n; })();
import "@angular/core";
import { MenuController as Qi } from "@ionic/angular/common";
import * as Go from "@angular/core";
var Ui = (() => { class n extends Qi {
    constructor() { super(J); }
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275prov = Go.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" });
} return n; })();
import { Injector as Yi, EnvironmentInjector as Ji, inject as Ht } from "@angular/core";
import { AngularDelegate as $i, OverlayBaseController as er } from "@ionic/angular/common";
import * as Ho from "@angular/core";
var Wt = (() => { class n extends er {
    angularDelegate = Ht($i);
    injector = Ht(Yi);
    environmentInjector = Ht(Ji);
    constructor() { super(q); }
    create(o) { let s = o, { injector: t } = s, i = A(s, ["injector"]); return super.create(M(S({}, i), { delegate: this.angularDelegate.create(this.environmentInjector, this.injector, "modal", t) })); }
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275prov = Ho.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac });
} return n; })();
import "@angular/core";
import { OverlayBaseController as tr } from "@ionic/angular/common";
import * as Wo from "@angular/core";
var nr = (() => { class n extends tr {
    constructor() { super(K); }
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275prov = Wo.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" });
} return n; })();
import { Injector as or, inject as Xt, EnvironmentInjector as ir } from "@angular/core";
import { AngularDelegate as rr, OverlayBaseController as ar } from "@ionic/angular/common";
var z = class extends ar {
    angularDelegate = Xt(rr);
    injector = Xt(or);
    environmentInjector = Xt(ir);
    constructor() { super(Q); }
    create(h) { let i = h, { injector: o } = i, t = A(i, ["injector"]); return super.create(M(S({}, t), { delegate: this.angularDelegate.create(this.environmentInjector, this.injector, "popover", o) })); }
};
import "@angular/core";
import { OverlayBaseController as cr } from "@ionic/angular/common";
import * as Xo from "@angular/core";
var lr = (() => { class n extends cr {
    constructor() { super(U); }
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275prov = Xo.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" });
} return n; })();
import { CommonModule as pr, DOCUMENT as ur } from "@angular/common";
import { APP_INITIALIZER as mr, NgZone as fr } from "@angular/core";
import { ConfigToken as Yo, AngularDelegate as gr, provideComponentInputBinding as hr } from "@ionic/angular/common";
import { raf as dr } from "@ionic/angular/common";
var sr = G || (() => { }), qo = sr;
var Ko = (n, h) => Kt(null, null, function* () { if (!(typeof window > "u"))
    return yield qo(), nn(JSON.parse('[["ion-menu_3",[[289,"ion-menu-button",{"color":[513],"disabled":[4],"menu":[1],"autoHide":[4,"auto-hide"],"type":[1],"visible":[32]},[[16,"ionMenuChange","visibilityChanged"],[16,"ionSplitPaneVisible","visibilityChanged"]]],[289,"ion-menu",{"contentId":[513,"content-id"],"menuId":[513,"menu-id"],"type":[1025],"disabled":[1028],"side":[513],"swipeGesture":[4,"swipe-gesture"],"maxEdgeStart":[2,"max-edge-start"],"isPaneVisible":[32],"isEndSide":[32],"isOpen":[64],"isActive":[64],"open":[64],"close":[64],"toggle":[64],"setOpen":[64]},[[16,"ionSplitPaneVisible","onSplitPaneChanged"],[2,"click","onBackdropClick"]],{"type":[{"typeChanged":0}],"disabled":[{"disabledChanged":0}],"side":[{"sideChanged":0}],"swipeGesture":[{"swipeGestureChanged":0}]}],[257,"ion-menu-toggle",{"menu":[1],"autoHide":[4,"auto-hide"],"visible":[32]},[[16,"ionMenuChange","visibilityChanged"],[16,"ionSplitPaneVisible","visibilityChanged"]]]]],["ion-input-password-toggle",[[33,"ion-input-password-toggle",{"color":[513],"showIcon":[1,"show-icon"],"hideIcon":[1,"hide-icon"],"type":[1025]},null,{"type":[{"onTypeChange":0}]}]]],["ion-fab_3",[[289,"ion-fab-button",{"color":[513],"activated":[4],"disabled":[4],"download":[1],"href":[1],"rel":[1],"routerDirection":[1,"router-direction"],"routerAnimation":[16],"target":[1],"show":[4],"translucent":[4],"type":[1],"size":[1],"closeIcon":[1,"close-icon"]}],[257,"ion-fab",{"horizontal":[1],"vertical":[1],"edge":[4],"activated":[1028],"close":[64],"toggle":[64]},null,{"activated":[{"activatedChanged":0}]}],[257,"ion-fab-list",{"activated":[4],"side":[1]},null,{"activated":[{"activatedChanged":0}]}]]],["ion-refresher_2",[[0,"ion-refresher-content",{"pullingIcon":[1025,"pulling-icon"],"pullingText":[1,"pulling-text"],"refreshingSpinner":[1025,"refreshing-spinner"],"refreshingText":[1,"refreshing-text"]}],[32,"ion-refresher",{"pullMin":[2,"pull-min"],"pullMax":[2,"pull-max"],"closeDuration":[1,"close-duration"],"snapbackDuration":[1,"snapback-duration"],"pullFactor":[2,"pull-factor"],"disabled":[4],"nativeRefresher":[32],"state":[32],"complete":[64],"cancel":[64],"getProgress":[64]},null,{"disabled":[{"disabledChanged":0}]}]]],["ion-back-button",[[33,"ion-back-button",{"color":[513],"defaultHref":[1025,"default-href"],"disabled":[516],"icon":[1],"text":[1],"type":[1],"routerAnimation":[16]}]]],["ion-toast",[[33,"ion-toast",{"overlayIndex":[2,"overlay-index"],"delegate":[16],"hasController":[4,"has-controller"],"color":[513],"enterAnimation":[16],"leaveAnimation":[16],"cssClass":[1,"css-class"],"duration":[2],"header":[1],"layout":[1],"message":[1],"keyboardClose":[4,"keyboard-close"],"position":[1],"positionAnchor":[1,"position-anchor"],"buttons":[16],"translucent":[4],"animated":[4],"icon":[1],"htmlAttributes":[16],"swipeGesture":[1,"swipe-gesture"],"isOpen":[4,"is-open"],"trigger":[1],"revealContentToScreenReader":[32],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]},null,{"swipeGesture":[{"swipeGestureChanged":0}],"isOpen":[{"onIsOpenChange":0}],"trigger":[{"triggerChanged":0}]}]]],["ion-card_5",[[289,"ion-card",{"color":[513],"button":[4],"type":[1],"disabled":[4],"download":[1],"href":[1],"rel":[1],"routerDirection":[1,"router-direction"],"routerAnimation":[16],"target":[1]}],[32,"ion-card-content"],[289,"ion-card-header",{"color":[513],"translucent":[4]}],[289,"ion-card-subtitle",{"color":[513]}],[289,"ion-card-title",{"color":[513]}]]],["ion-item-option_3",[[289,"ion-item-option",{"color":[513],"disabled":[4],"download":[1],"expandable":[4],"href":[1],"rel":[1],"target":[1],"type":[1]}],[32,"ion-item-options",{"side":[1],"fireSwipeEvent":[64]}],[0,"ion-item-sliding",{"disabled":[4],"state":[32],"getOpenAmount":[64],"getSlidingRatio":[64],"open":[64],"close":[64],"closeOpened":[64]},null,{"disabled":[{"disabledChanged":0}]}]]],["ion-accordion_2",[[305,"ion-accordion",{"value":[1],"disabled":[4],"readonly":[4],"toggleIcon":[1,"toggle-icon"],"toggleIconSlot":[1,"toggle-icon-slot"],"state":[32],"isNext":[32],"isPrevious":[32],"hasInteracted":[32]},null,{"value":[{"valueChanged":0}]}],[289,"ion-accordion-group",{"animated":[4],"multiple":[4],"value":[1025],"disabled":[4],"readonly":[4],"expand":[1],"requestAccordionToggle":[64],"getAccordions":[64]},[[0,"keydown","onKeydown"]],{"value":[{"valueChanged":0}],"disabled":[{"disabledChanged":0}],"readonly":[{"readonlyChanged":0}]}]]],["ion-infinite-scroll_2",[[32,"ion-infinite-scroll-content",{"loadingSpinner":[1025,"loading-spinner"],"loadingText":[1,"loading-text"]}],[0,"ion-infinite-scroll",{"threshold":[1],"disabled":[4],"position":[1],"isLoading":[32],"complete":[64]},null,{"threshold":[{"thresholdChanged":0}],"disabled":[{"disabledChanged":0}]}]]],["ion-reorder_2",[[289,"ion-reorder",null,[[2,"click","onClick"]]],[0,"ion-reorder-group",{"disabled":[4],"state":[32],"complete":[64]},null,{"disabled":[{"disabledChanged":0}]}]]],["ion-segment_2",[[289,"ion-segment-button",{"contentId":[513,"content-id"],"disabled":[1028],"layout":[1],"type":[1],"value":[8],"checked":[32],"setFocus":[64]},null,{"value":[{"valueChanged":0}]}],[289,"ion-segment",{"color":[513],"disabled":[4],"scrollable":[4],"swipeGesture":[4,"swipe-gesture"],"value":[1032],"selectOnFocus":[4,"select-on-focus"],"activated":[32]},[[16,"ionSegmentViewScroll","handleSegmentViewScroll"],[0,"keydown","onKeyDown"]],{"color":[{"colorChanged":0}],"swipeGesture":[{"swipeGestureChanged":0}],"value":[{"valueChanged":0}],"disabled":[{"disabledChanged":0}]}]]],["ion-chip",[[289,"ion-chip",{"color":[513],"outline":[4],"disabled":[4]}]]],["ion-input",[[294,"ion-input",{"color":[513],"autocapitalize":[1],"autocomplete":[1],"autocorrect":[1],"autofocus":[4],"clearInput":[4,"clear-input"],"clearInputIcon":[1,"clear-input-icon"],"clearOnEdit":[4,"clear-on-edit"],"counter":[4],"counterFormatter":[16],"debounce":[2],"disabled":[516],"enterkeyhint":[1],"errorText":[1,"error-text"],"fill":[1],"inputmode":[1],"helperText":[1,"helper-text"],"label":[1],"labelPlacement":[1,"label-placement"],"max":[8],"maxlength":[2],"min":[8],"minlength":[2],"multiple":[4],"name":[1],"pattern":[1],"placeholder":[1],"readonly":[516],"required":[4],"shape":[1],"spellcheck":[4],"step":[1],"type":[1],"value":[1032],"hasFocus":[32],"isInvalid":[32],"setFocus":[64],"getInputElement":[64]},[[2,"click","onClickCapture"]],{"debounce":[{"debounceChanged":0}],"type":[{"onTypeChange":0}],"value":[{"valueChanged":0}],"dir":[{"onDirChanged":0}]}]]],["ion-searchbar",[[34,"ion-searchbar",{"color":[513],"animated":[4],"autocapitalize":[1],"autocomplete":[1],"autocorrect":[1],"cancelButtonIcon":[1,"cancel-button-icon"],"cancelButtonText":[1,"cancel-button-text"],"clearIcon":[1,"clear-icon"],"debounce":[2],"disabled":[4],"inputmode":[1],"enterkeyhint":[1],"maxlength":[2],"minlength":[2],"name":[1],"placeholder":[1],"searchIcon":[1,"search-icon"],"showCancelButton":[1,"show-cancel-button"],"showClearButton":[1,"show-clear-button"],"spellcheck":[4],"type":[1],"value":[1025],"focused":[32],"noAnimate":[32],"setFocus":[64],"getInputElement":[64]},null,{"lang":[{"onLangChanged":0}],"dir":[{"onDirChanged":0}],"debounce":[{"debounceChanged":0}],"value":[{"valueChanged":0}],"showCancelButton":[{"showCancelButtonChanged":0}]}]]],["ion-toggle",[[289,"ion-toggle",{"color":[513],"name":[1],"checked":[1028],"disabled":[4],"errorText":[1,"error-text"],"helperText":[1,"helper-text"],"value":[1],"enableOnOffLabels":[4,"enable-on-off-labels"],"labelPlacement":[1,"label-placement"],"justify":[1],"alignment":[1],"required":[4],"activated":[32],"isInvalid":[32],"hintTextId":[32]},null,{"disabled":[{"disabledChanged":0}]}]]],["ion-nav_2",[[257,"ion-nav",{"delegate":[16],"swipeGesture":[1028,"swipe-gesture"],"animated":[4],"animation":[16],"rootParams":[16],"root":[1],"push":[64],"insert":[64],"insertPages":[64],"pop":[64],"popTo":[64],"popToRoot":[64],"removeIndex":[64],"setRoot":[64],"setPages":[64],"setRouteId":[64],"getRouteId":[64],"getActive":[64],"getByIndex":[64],"canGoBack":[64],"getPrevious":[64],"getLength":[64]},null,{"swipeGesture":[{"swipeGestureChanged":0}],"root":[{"rootChanged":0}]}],[0,"ion-nav-link",{"component":[1],"componentProps":[16],"routerDirection":[1,"router-direction"],"routerAnimation":[16]}]]],["ion-tab_2",[[257,"ion-tab",{"active":[1028],"delegate":[16],"tab":[1],"component":[1],"setActive":[64]},null,{"active":[{"changeActive":0}]}],[257,"ion-tabs",{"useRouter":[1028,"use-router"],"selectedTab":[32],"select":[64],"getTab":[64],"getSelected":[64],"setRouteId":[64],"getRouteId":[64]}]]],["ion-textarea",[[294,"ion-textarea",{"color":[513],"autocapitalize":[1],"autofocus":[4],"clearOnEdit":[4,"clear-on-edit"],"debounce":[2],"disabled":[516],"fill":[1],"inputmode":[1],"enterkeyhint":[1],"maxlength":[2],"minlength":[2],"name":[1],"placeholder":[1],"readonly":[516],"required":[4],"spellcheck":[4],"cols":[514],"rows":[2],"wrap":[1],"autoGrow":[516,"auto-grow"],"value":[1025],"counter":[4],"counterFormatter":[16],"errorText":[1,"error-text"],"helperText":[1,"helper-text"],"label":[1],"labelPlacement":[1,"label-placement"],"shape":[1],"hasFocus":[32],"isInvalid":[32],"setFocus":[64],"getInputElement":[64]},[[2,"click","onClickCapture"]],{"debounce":[{"debounceChanged":0}],"value":[{"valueChanged":0}],"dir":[{"onDirChanged":0}]}]]],["ion-backdrop",[[33,"ion-backdrop",{"visible":[4],"tappable":[4],"stopPropagation":[4,"stop-propagation"]},[[2,"click","onMouseDown"]]]]],["ion-loading",[[34,"ion-loading",{"overlayIndex":[2,"overlay-index"],"delegate":[16],"hasController":[4,"has-controller"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"message":[1],"cssClass":[1,"css-class"],"duration":[2],"backdropDismiss":[4,"backdrop-dismiss"],"showBackdrop":[4,"show-backdrop"],"spinner":[1025],"translucent":[4],"animated":[4],"htmlAttributes":[16],"isOpen":[4,"is-open"],"trigger":[1],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]},null,{"isOpen":[{"onIsOpenChange":0}],"trigger":[{"triggerChanged":0}]}]]],["ion-breadcrumb_2",[[289,"ion-breadcrumb",{"collapsed":[4],"last":[4],"showCollapsedIndicator":[4,"show-collapsed-indicator"],"color":[1],"active":[4],"disabled":[4],"download":[1],"href":[1],"rel":[1],"separator":[4],"target":[1],"routerDirection":[1,"router-direction"],"routerAnimation":[16]}],[289,"ion-breadcrumbs",{"color":[513],"maxItems":[2,"max-items"],"itemsBeforeCollapse":[2,"items-before-collapse"],"itemsAfterCollapse":[2,"items-after-collapse"],"collapsed":[32],"activeChanged":[32]},[[0,"collapsedClick","onCollapsedClick"]],{"maxItems":[{"maxItemsChanged":0}],"itemsBeforeCollapse":[{"maxItemsChanged":0}],"itemsAfterCollapse":[{"maxItemsChanged":0}]}]]],["ion-tab-bar_2",[[289,"ion-tab-button",{"disabled":[4],"download":[1],"href":[1],"rel":[1],"layout":[1025],"selected":[1028],"tab":[1],"target":[1]},[[8,"ionTabBarChanged","onTabBarChanged"]]],[289,"ion-tab-bar",{"color":[513],"selectedTab":[1,"selected-tab"],"translucent":[4],"keyboardVisible":[32]},null,{"selectedTab":[{"selectedTabChanged":0}]}]]],["ion-datetime-button",[[289,"ion-datetime-button",{"color":[513],"disabled":[516],"datetime":[1],"datetimePresentation":[32],"dateText":[32],"timeText":[32],"datetimeActive":[32],"selectedButton":[32]}]]],["ion-route_4",[[0,"ion-route",{"url":[1],"component":[1],"componentProps":[16],"beforeLeave":[16],"beforeEnter":[16]},null,{"url":[{"onUpdate":0}],"component":[{"onUpdate":0}],"componentProps":[{"onComponentProps":0}]}],[0,"ion-route-redirect",{"from":[1],"to":[1]},null,{"from":[{"propDidChange":0}],"to":[{"propDidChange":0}]}],[0,"ion-router",{"root":[1],"useHash":[4,"use-hash"],"canTransition":[64],"push":[64],"back":[64],"printDebug":[64],"navChanged":[64]},[[8,"popstate","onPopState"],[4,"ionBackButton","onBackButton"]]],[257,"ion-router-link",{"color":[513],"href":[1],"rel":[1],"routerDirection":[1,"router-direction"],"routerAnimation":[16],"target":[1]}]]],["ion-avatar_3",[[289,"ion-avatar"],[289,"ion-badge",{"color":[513]}],[257,"ion-thumbnail"]]],["ion-col_3",[[257,"ion-col",{"offset":[1],"offsetXs":[1,"offset-xs"],"offsetSm":[1,"offset-sm"],"offsetMd":[1,"offset-md"],"offsetLg":[1,"offset-lg"],"offsetXl":[1,"offset-xl"],"pull":[1],"pullXs":[1,"pull-xs"],"pullSm":[1,"pull-sm"],"pullMd":[1,"pull-md"],"pullLg":[1,"pull-lg"],"pullXl":[1,"pull-xl"],"push":[1],"pushXs":[1,"push-xs"],"pushSm":[1,"push-sm"],"pushMd":[1,"push-md"],"pushLg":[1,"push-lg"],"pushXl":[1,"push-xl"],"size":[1],"sizeXs":[1,"size-xs"],"sizeSm":[1,"size-sm"],"sizeMd":[1,"size-md"],"sizeLg":[1,"size-lg"],"sizeXl":[1,"size-xl"]},[[9,"resize","onResize"]]],[257,"ion-grid",{"fixed":[4]}],[257,"ion-row"]]],["ion-img",[[1,"ion-img",{"alt":[1],"src":[1],"loadSrc":[32],"loadError":[32]},null,{"src":[{"srcChanged":0}]}]]],["ion-input-otp",[[294,"ion-input-otp",{"autocapitalize":[1],"color":[513],"disabled":[516],"fill":[1],"inputmode":[1],"length":[2],"pattern":[1],"readonly":[516],"separators":[1],"shape":[1],"size":[1],"type":[1],"value":[1032],"inputValues":[32],"hasFocus":[32],"previousInputValues":[32],"setFocus":[64]},null,{"value":[{"valueChanged":0}],"separators":[{"processSeparators":0}],"length":[{"processSeparators":0}]}]]],["ion-progress-bar",[[33,"ion-progress-bar",{"type":[1],"reversed":[4],"value":[2],"buffer":[2],"color":[513]}]]],["ion-range",[[289,"ion-range",{"color":[513],"debounce":[2],"name":[1],"label":[1],"dualKnobs":[4,"dual-knobs"],"min":[2],"max":[2],"pin":[4],"pinFormatter":[16],"snaps":[4],"step":[2],"ticks":[4],"activeBarStart":[1026,"active-bar-start"],"disabled":[4],"value":[1026],"labelPlacement":[1,"label-placement"],"ratioA":[32],"ratioB":[32],"activatedKnob":[32],"focusedKnob":[32],"hoveredKnob":[32],"pressedKnob":[32]},null,{"debounce":[{"debounceChanged":0}],"min":[{"minChanged":0}],"max":[{"maxChanged":0}],"step":[{"stepChanged":0}],"activeBarStart":[{"activeBarStartChanged":0}],"disabled":[{"disabledChanged":0}],"value":[{"valueChanged":0}]}]]],["ion-segment-content",[[257,"ion-segment-content"]]],["ion-segment-view",[[289,"ion-segment-view",{"disabled":[4],"swipeGesture":[4,"swipe-gesture"],"isManualScroll":[32],"setContent":[64]},[[1,"scroll","handleScroll"],[1,"touchstart","handleScrollStart"],[1,"touchend","handleTouchEnd"]]]]],["ion-split-pane",[[289,"ion-split-pane",{"contentId":[513,"content-id"],"disabled":[4],"when":[8],"visible":[32],"isVisible":[64]},null,{"visible":[{"visibleChanged":0}],"disabled":[{"updateState":0}],"when":[{"updateState":0}]}]]],["ion-text",[[257,"ion-text",{"color":[513]}]]],["ion-select-modal",[[34,"ion-select-modal",{"header":[1],"cancelText":[1,"cancel-text"],"multiple":[4],"options":[16]}]]],["ion-datetime_3",[[289,"ion-datetime",{"color":[1],"name":[1],"disabled":[4],"formatOptions":[16],"readonly":[4],"isDateEnabled":[16],"showAdjacentDays":[4,"show-adjacent-days"],"min":[1025],"max":[1025],"presentation":[1],"cancelText":[1,"cancel-text"],"doneText":[1,"done-text"],"clearText":[1,"clear-text"],"yearValues":[8,"year-values"],"monthValues":[8,"month-values"],"dayValues":[8,"day-values"],"hourValues":[8,"hour-values"],"minuteValues":[8,"minute-values"],"locale":[1],"firstDayOfWeek":[2,"first-day-of-week"],"titleSelectedDatesFormatter":[16],"multiple":[4],"highlightedDates":[16],"value":[1025],"showDefaultTitle":[4,"show-default-title"],"showDefaultButtons":[4,"show-default-buttons"],"showClearButton":[4,"show-clear-button"],"showDefaultTimeLabel":[4,"show-default-time-label"],"hourCycle":[1,"hour-cycle"],"size":[1],"preferWheel":[4,"prefer-wheel"],"showMonthAndYear":[32],"activeParts":[32],"workingParts":[32],"isTimePopoverOpen":[32],"forceRenderDate":[32],"confirm":[64],"reset":[64],"cancel":[64],"getDefaultPart":[64]},null,{"formatOptions":[{"formatOptionsChanged":0}],"disabled":[{"disabledChanged":0}],"min":[{"minChanged":0}],"max":[{"maxChanged":0}],"presentation":[{"presentationChanged":0}],"yearValues":[{"yearValuesChanged":0}],"monthValues":[{"monthValuesChanged":0}],"dayValues":[{"dayValuesChanged":0}],"hourValues":[{"hourValuesChanged":0}],"minuteValues":[{"minuteValuesChanged":0}],"value":[{"valueChanged":0}]}],[34,"ion-picker-legacy",{"overlayIndex":[2,"overlay-index"],"delegate":[16],"hasController":[4,"has-controller"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"buttons":[16],"columns":[16],"cssClass":[1,"css-class"],"duration":[2],"showBackdrop":[4,"show-backdrop"],"backdropDismiss":[4,"backdrop-dismiss"],"animated":[4],"htmlAttributes":[16],"isOpen":[4,"is-open"],"trigger":[1],"presented":[32],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64],"getColumn":[64]},null,{"isOpen":[{"onIsOpenChange":0}],"trigger":[{"triggerChanged":0}]}],[32,"ion-picker-legacy-column",{"col":[16]},null,{"col":[{"colChanged":0}]}]]],["ion-action-sheet",[[34,"ion-action-sheet",{"overlayIndex":[2,"overlay-index"],"delegate":[16],"hasController":[4,"has-controller"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"buttons":[16],"cssClass":[1,"css-class"],"backdropDismiss":[4,"backdrop-dismiss"],"header":[1],"subHeader":[1,"sub-header"],"translucent":[4],"animated":[4],"htmlAttributes":[16],"isOpen":[4,"is-open"],"trigger":[1],"activeRadioId":[32],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]},[[0,"keydown","onKeydown"]],{"buttons":[{"buttonsChanged":0}],"isOpen":[{"onIsOpenChange":0}],"trigger":[{"triggerChanged":0}]}]]],["ion-alert",[[34,"ion-alert",{"overlayIndex":[2,"overlay-index"],"delegate":[16],"hasController":[4,"has-controller"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"cssClass":[1,"css-class"],"header":[1],"subHeader":[1,"sub-header"],"message":[1],"buttons":[16],"inputs":[1040],"backdropDismiss":[4,"backdrop-dismiss"],"translucent":[4],"animated":[4],"htmlAttributes":[16],"isOpen":[4,"is-open"],"trigger":[1],"isButtonGroupWrapped":[32],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]},[[4,"keydown","onKeydown"]],{"isOpen":[{"onIsOpenChange":0}],"trigger":[{"triggerChanged":0}],"buttons":[{"buttonsChanged":0}],"inputs":[{"inputsChanged":0}]}]]],["ion-modal",[[289,"ion-modal",{"hasController":[4,"has-controller"],"overlayIndex":[2,"overlay-index"],"delegate":[16],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"breakpoints":[16],"expandToScroll":[4,"expand-to-scroll"],"initialBreakpoint":[2,"initial-breakpoint"],"backdropBreakpoint":[2,"backdrop-breakpoint"],"handle":[4],"handleBehavior":[1,"handle-behavior"],"component":[1],"componentProps":[16],"cssClass":[1,"css-class"],"backdropDismiss":[4,"backdrop-dismiss"],"showBackdrop":[4,"show-backdrop"],"animated":[4],"presentingElement":[16],"htmlAttributes":[16],"isOpen":[4,"is-open"],"trigger":[1],"keepContentsMounted":[4,"keep-contents-mounted"],"focusTrap":[4,"focus-trap"],"canDismiss":[4,"can-dismiss"],"isSheetModal":[32],"presented":[32],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64],"setCurrentBreakpoint":[64],"getCurrentBreakpoint":[64]},[[9,"resize","onWindowResize"]],{"isOpen":[{"onIsOpenChange":0}],"trigger":[{"triggerChanged":0}],"breakpoints":[{"breakpointsChanged":0}]}]]],["ion-picker",[[289,"ion-picker",{"exitInputMode":[64]},[[1,"touchstart","preventTouchStartPropagation"]]]]],["ion-picker-column",[[257,"ion-picker-column",{"disabled":[4],"value":[1032],"color":[513],"numericInput":[4,"numeric-input"],"ariaLabel":[32],"isActive":[32],"scrollActiveItemIntoView":[64],"setValue":[64],"setFocus":[64]},null,{"aria-label":[{"ariaLabelChanged":0}],"value":[{"valueChange":0}]}]]],["ion-picker-column-option",[[289,"ion-picker-column-option",{"disabled":[4],"value":[8],"color":[513],"ariaLabel":[32]},null,{"aria-label":[{"onAriaLabelChange":0}]}]]],["ion-popover",[[289,"ion-popover",{"hasController":[4,"has-controller"],"delegate":[16],"overlayIndex":[2,"overlay-index"],"enterAnimation":[16],"leaveAnimation":[16],"component":[1],"componentProps":[16],"keyboardClose":[4,"keyboard-close"],"cssClass":[1,"css-class"],"backdropDismiss":[4,"backdrop-dismiss"],"event":[8],"showBackdrop":[4,"show-backdrop"],"translucent":[4],"animated":[4],"htmlAttributes":[16],"triggerAction":[1,"trigger-action"],"trigger":[1],"size":[1],"dismissOnSelect":[4,"dismiss-on-select"],"reference":[1],"side":[1],"alignment":[1025],"arrow":[4],"isOpen":[4,"is-open"],"keyboardEvents":[4,"keyboard-events"],"focusTrap":[4,"focus-trap"],"keepContentsMounted":[4,"keep-contents-mounted"],"presented":[32],"presentFromTrigger":[64],"present":[64],"dismiss":[64],"getParentPopover":[64],"onDidDismiss":[64],"onWillDismiss":[64]},null,{"trigger":[{"onTriggerChange":0}],"triggerAction":[{"onTriggerChange":0}],"isOpen":[{"onIsOpenChange":0}]}]]],["ion-checkbox",[[289,"ion-checkbox",{"color":[513],"name":[1],"checked":[1028],"indeterminate":[1028],"disabled":[4],"errorText":[1,"error-text"],"helperText":[1,"helper-text"],"value":[8],"labelPlacement":[1,"label-placement"],"justify":[1],"alignment":[1],"required":[4],"isInvalid":[32],"hasLabelContent":[32],"hintTextId":[32],"setFocus":[64]}]]],["ion-item_8",[[289,"ion-item-divider",{"color":[513],"sticky":[4]}],[32,"ion-item-group"],[289,"ion-note",{"color":[513]}],[1,"ion-skeleton-text",{"animated":[4]}],[294,"ion-label",{"color":[513],"position":[1],"noAnimate":[32]},null,{"color":[{"colorChanged":0}],"position":[{"positionChanged":0}]}],[289,"ion-list-header",{"color":[513],"lines":[1]}],[289,"ion-item",{"color":[513],"button":[4],"detail":[4],"detailIcon":[1,"detail-icon"],"disabled":[516],"download":[1],"href":[1],"rel":[1],"lines":[1],"routerAnimation":[16],"routerDirection":[1,"router-direction"],"target":[1],"type":[1],"multipleInputs":[32],"focusable":[32],"isInteractive":[32]},[[0,"ionColor","labelColorChanged"],[0,"ionStyle","itemStyle"]],{"button":[{"buttonChanged":0}]}],[32,"ion-list",{"lines":[1],"inset":[4],"closeSlidingItems":[64]}]]],["ion-app_8",[[0,"ion-app",{"setFocus":[64]}],[292,"ion-footer",{"collapse":[1],"translucent":[4],"keyboardVisible":[32]}],[257,"ion-router-outlet",{"mode":[1025],"delegate":[16],"animated":[4],"animation":[16],"swipeHandler":[16],"commit":[64],"setRouteId":[64],"getRouteId":[64]},null,{"swipeHandler":[{"swipeHandlerChanged":0}]}],[257,"ion-content",{"color":[513],"fullscreen":[4],"fixedSlotPlacement":[1,"fixed-slot-placement"],"forceOverscroll":[1028,"force-overscroll"],"scrollX":[4,"scroll-x"],"scrollY":[4,"scroll-y"],"scrollEvents":[4,"scroll-events"],"recalculateDimensions":[64],"getScrollElement":[64],"getBackgroundElement":[64],"scrollToTop":[64],"scrollToBottom":[64],"scrollByPoint":[64],"scrollToPoint":[64]},[[9,"resize","onResize"]]],[292,"ion-header",{"collapse":[1],"translucent":[4]}],[289,"ion-title",{"color":[513],"size":[1]},null,{"size":[{"sizeChanged":0}]}],[289,"ion-toolbar",{"color":[513]},[[0,"ionStyle","childrenStyle"]]],[294,"ion-buttons",{"collapse":[4]}]]],["ion-select_3",[[289,"ion-select",{"cancelText":[1,"cancel-text"],"color":[513],"compareWith":[1,"compare-with"],"disabled":[4],"fill":[1],"errorText":[1,"error-text"],"helperText":[1,"helper-text"],"interface":[1],"interfaceOptions":[8,"interface-options"],"justify":[1],"label":[1],"labelPlacement":[1,"label-placement"],"multiple":[4],"name":[1],"okText":[1,"ok-text"],"placeholder":[1],"selectedText":[1,"selected-text"],"toggleIcon":[1,"toggle-icon"],"expandedIcon":[1,"expanded-icon"],"shape":[1],"value":[1032],"required":[4],"isExpanded":[32],"hasFocus":[32],"isInvalid":[32],"hintTextId":[32],"open":[64]},null,{"disabled":[{"styleChanged":0}],"isExpanded":[{"styleChanged":0}],"placeholder":[{"styleChanged":0}],"value":[{"styleChanged":0}]}],[1,"ion-select-option",{"disabled":[4],"value":[8]}],[34,"ion-select-popover",{"header":[1],"subHeader":[1,"sub-header"],"message":[1],"multiple":[4],"options":[16]}]]],["ion-spinner",[[1,"ion-spinner",{"color":[513],"duration":[2],"name":[1],"paused":[4]}]]],["ion-radio_2",[[289,"ion-radio",{"color":[513],"name":[1],"disabled":[4],"value":[8],"labelPlacement":[1,"label-placement"],"justify":[1],"alignment":[1],"checked":[32],"buttonTabindex":[32],"setFocus":[64],"setButtonTabindex":[64]},null,{"value":[{"valueChanged":0}]}],[292,"ion-radio-group",{"allowEmptySelection":[4,"allow-empty-selection"],"compareWith":[1,"compare-with"],"name":[1],"value":[1032],"helperText":[1,"helper-text"],"errorText":[1,"error-text"],"isInvalid":[32],"hintTextId":[32],"setFocus":[64]},[[4,"keydown","onKeydown"]],{"value":[{"valueChanged":0}]}]]],["ion-ripple-effect",[[1,"ion-ripple-effect",{"type":[1],"addRipple":[64]}]]],["ion-button_2",[[289,"ion-button",{"color":[513],"buttonType":[1025,"button-type"],"disabled":[516],"expand":[513],"fill":[1537],"routerDirection":[1,"router-direction"],"routerAnimation":[16],"download":[1],"href":[1],"rel":[1],"shape":[513],"size":[513],"strong":[4],"target":[1],"type":[1],"form":[1],"isCircle":[32]},null,{"disabled":[{"disabledChanged":0}],"aria-checked":[{"onAriaChanged":0}],"aria-label":[{"onAriaChanged":0}],"aria-pressed":[{"onAriaChanged":0}]}],[1,"ion-icon",{"mode":[1025],"color":[1],"ios":[1],"md":[1],"flipRtl":[4,"flip-rtl"],"name":[513],"src":[1],"icon":[8],"size":[1],"lazy":[4],"sanitize":[4],"svgContent":[32],"isVisible":[32]},null,{"name":[{"loadIcon":0}],"src":[{"loadIcon":0}],"icon":[{"loadIcon":0}],"ios":[{"loadIcon":0}],"md":[{"loadIcon":0}]}]]]]'), h); });
(function () { if (typeof window < "u" && window.Reflect !== void 0 && window.customElements !== void 0) {
    var n = HTMLElement;
    window.HTMLElement = function () { return Reflect.construct(n, [], this.constructor); }, HTMLElement.prototype = n.prototype, HTMLElement.prototype.constructor = HTMLElement, Object.setPrototypeOf(HTMLElement, n);
} })();
var Qo = (n, h, o) => () => { let t = h.defaultView; if (t && typeof window < "u") {
    Y(M(S({}, n), { _zoneGate: s => o.run(s) }));
    let i = "__zone_symbol__addEventListener" in h.body ? "__zone_symbol__addEventListener" : "addEventListener";
    return Ko(t, { exclude: ["ion-tabs"], syncQueue: !0, raf: dr, jmp: s => o.runOutsideAngular(s), ael(s, u, j, E) { s[i](u, j, E); }, rel(s, u, j, E) { s.removeEventListener(u, j, E); } });
} };
var Uo = [on, rn, an, cn, ln, sn, dn, pn, un, mn, fn, gn, hn, vn, In, Dn, Cn, bn, yn, xn, jn, Tn, wn, Sn, Mn, Rn, En, kn, zn, An, Fn, Bn, Pn, On, Nn, Ln, Vn, _n, Zn, Gn, Hn, Wn, Xn, qn, Kn, Qn, Un, Yn, Jn, $n, eo, to, no, oo, io, ro, ao, co, lo, so, po, uo, mo, fo, go, ho, vo, Io, Do, Co, bo, yo, xo, jo, To, wo, O, k, So, Mo, Ro, Eo, ko, zo, Ao, Fo];
import * as Z from "@angular/core";
var ql = [...Uo, Vt, _t, $, ee, te, ne, Bt, T, Pt, Ot, Nt, Lt, Gt, Zt], vr = (() => { class n {
    static forRoot(o = {}) { return { ngModule: n, providers: [{ provide: Yo, useValue: o }, { provide: mr, useFactory: Qo, multi: !0, deps: [Yo, ur, fr] }, gr, hr()] }; }
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275mod = Z.\u0275\u0275defineNgModule({ type: n });
    static \u0275inj = Z.\u0275\u0275defineInjector({ providers: [Wt, z], imports: [pr] });
} return n; })();
export { Wi as ActionSheetController, Zi as AlertController, fs as AngularDelegate, Gi as AnimationController, $ as BooleanValueAccessor, us as Config, ds as DomController, Xi as GestureController, Bi as ION_MAX_VALIDATOR, Li as ION_MIN_VALIDATOR, on as IonAccordion, rn as IonAccordionGroup, an as IonActionSheet, cn as IonAlert, ln as IonApp, sn as IonAvatar, Pt as IonBackButton, dn as IonBackdrop, pn as IonBadge, un as IonBreadcrumb, mn as IonBreadcrumbs, fn as IonButton, gn as IonButtons, hn as IonCard, vn as IonCardContent, In as IonCardHeader, Dn as IonCardSubtitle, Cn as IonCardTitle, bn as IonCheckbox, yn as IonChip, xn as IonCol, jn as IonContent, Tn as IonDatetime, wn as IonDatetimeButton, Sn as IonFab, Mn as IonFabButton, Rn as IonFabList, En as IonFooter, kn as IonGrid, zn as IonHeader, An as IonIcon, Fn as IonImg, Bn as IonInfiniteScroll, Pn as IonInfiniteScrollContent, On as IonInput, Nn as IonInputOtp, Ln as IonInputPasswordToggle, Vn as IonItem, _n as IonItemDivider, Zn as IonItemGroup, Gn as IonItemOption, Hn as IonItemOptions, Wn as IonItemSliding, Xn as IonLabel, qn as IonList, Kn as IonListHeader, Qn as IonLoading, Zt as IonMaxValidator, Un as IonMenu, Yn as IonMenuButton, Jn as IonMenuToggle, Gt as IonMinValidator, Vt as IonModal, vs as IonModalToken, Ot as IonNav, $n as IonNavLink, eo as IonNote, to as IonPicker, no as IonPickerColumn, oo as IonPickerColumnOption, io as IonPickerLegacy, _t as IonPopover, ro as IonProgressBar, ao as IonRadio, co as IonRadioGroup, lo as IonRange, so as IonRefresher, po as IonRefresherContent, uo as IonReorder, mo as IonReorderGroup, fo as IonRippleEffect, T as IonRouterOutlet, go as IonRow, ho as IonSearchbar, vo as IonSegment, Io as IonSegmentButton, Do as IonSegmentContent, Co as IonSegmentView, bo as IonSelect, yo as IonSelectModal, xo as IonSelectOption, jo as IonSkeletonText, To as IonSpinner, wo as IonSplitPane, O as IonTab, k as IonTabBar, So as IonTabButton, Bt as IonTabs, Mo as IonText, Ro as IonTextarea, Eo as IonThumbnail, ko as IonTitle, zo as IonToast, Ao as IonToggle, Fo as IonToolbar, vr as IonicModule, hs as IonicRouteStrategy, Jt as IonicSafeString, Vi as IonicSlides, Ki as LoadingController, Ui as MenuController, Wt as ModalController, ps as NavController, gs as NavParams, ee as NumericValueAccessor, nr as PickerController, ms as Platform, z as PopoverController, Nt as RouterLinkDelegate, Lt as RouterLinkWithHrefDelegate, te as SelectValueAccessor, ne as TextValueAccessor, lr as ToastController, P as createAnimation, F as createGesture, tn as getIonPageElement, Qt as getPlatforms, B as getTimeGivenProgression, $t as iosTransitionAnimation, Ut as isPlatform, en as mdTransitionAnimation, Yt as openURL };
/*! Bundled license information:

@ionic/core/dist/esm/index.js:
@ionic/core/dist/esm/app-globals-D0C5S4hU.js:
@ionic/core/dist/esm/loader.js:
@ionic/core/loader/index.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
