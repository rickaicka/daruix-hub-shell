import { a as f, d as c, e as u, f as m, k as g, l as p, m as b, n as v, o as w } from "@nf-internal/chunk-OVAT75OL";
import "@nf-internal/chunk-C4FLJMU7";
var k = o => { let t = document.createElement("div"); t.innerHTML = o; for (let n = t.childNodes.length - 1; n >= 0; n--)
    t.childNodes[n].nodeName.toLowerCase() !== "svg" && t.removeChild(t.childNodes[n]); let e = t.firstElementChild; if (e && e.nodeName.toLowerCase() === "svg") {
    let n = e.getAttribute("class") || "";
    if (e.setAttribute("class", (n + " s-ion-icon").trim()), I(e))
        return t.innerHTML;
} return ""; }, I = o => { if (o.nodeType === 1) {
    if (o.nodeName.toLowerCase() === "script")
        return !1;
    for (let t = 0; t < o.attributes.length; t++) {
        let e = o.attributes[t].name;
        if (b(e) && e.toLowerCase().indexOf("on") === 0)
            return !1;
    }
    for (let t = 0; t < o.childNodes.length; t++)
        if (!I(o.childNodes[t]))
            return !1;
} return !0; }, L = o => o.startsWith("data:image/svg+xml"), x = o => o.indexOf(";utf8,") !== -1, r = new Map, C = new Map, l;
function d(o) { return r.set(o, ""), ""; }
var E = (o, t) => { let e = C.get(o); return e || (typeof fetch < "u" && typeof document < "u" ? L(o) && x(o) ? Promise.resolve(z(o)) : N(o, t) : Promise.resolve(d(o))); };
function z(o) { l || (l = new DOMParser); let e = l.parseFromString(o, "text/html").querySelector("svg"); if (e)
    return r.set(o, e.outerHTML), e.outerHTML; throw new Error(`Could not parse svg from ${o}`); }
function N(o, t) { let e = fetch(o).then(n => n.text().then(i => { i && t !== !1 && (i = k(i)); let s = i || ""; return r.set(o, s), s; }).catch(() => d(o))).catch(() => d(o)); return C.set(o, e), e; }
var O = ":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}@supports (background: -webkit-named-image(i)){:host(.icon-rtl) .icon-inner{transform:scaleX(-1)}}@supports not selector(:dir(rtl)) and selector(:host-context([dir='rtl'])){:host(.icon-rtl) .icon-inner{transform:scaleX(-1)}}:host(.flip-rtl):host-context([dir='rtl']) .icon-inner{transform:scaleX(-1)}@supports selector(:dir(rtl)){:host(.flip-rtl:dir(rtl)) .icon-inner{transform:scaleX(-1)}:host(.flip-rtl:dir(ltr)) .icon-inner{transform:scaleX(1)}}:host(.icon-small){font-size:1.125rem !important}:host(.icon-large){font-size:2rem !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}", y = m(class extends f {
    constructor() { super(), this.__registerHost(), this.__attachShadow(), this.iconName = null, this.inheritedAttributes = {}, this.didLoadIcon = !1, this.isVisible = !1, this.mode = S(), this.lazy = !1, this.sanitize = !0; }
    componentWillLoad() { this.inheritedAttributes = v(this.el, ["aria-label"]); }
    connectedCallback() { this.waitUntilVisible(this.el, "50px", () => { this.isVisible = !0, this.loadIcon(); }); }
    componentDidLoad() { this.didLoadIcon || this.loadIcon(); }
    disconnectedCallback() { this.io && (this.io.disconnect(), this.io = void 0); }
    waitUntilVisible(t, e, n) { if (!!!(this.lazy && typeof window < "u" && window.IntersectionObserver))
        return n(); let s = this.io = new window.IntersectionObserver(a => { a[0].isIntersecting && (s.disconnect(), this.io = void 0, n()); }, { rootMargin: e }); s.observe(t); }
    loadIcon() { if (this.isVisible) {
        let t = g(this);
        t && (r.has(t) ? this.svgContent = r.get(t) : E(t, this.sanitize).then(() => this.svgContent = r.get(t)), this.didLoadIcon = !0);
    } this.iconName = p(this.name, this.icon, this.mode, this.ios, this.md); }
    render() { let { flipRtl: t, iconName: e, inheritedAttributes: n, el: i } = this, s = this.mode || "md", a = e ? (e.includes("arrow") || e.includes("chevron")) && t !== !1 : !1, h = t || a; return c(u, Object.assign({ key: "0578c899781ca145dd8205acd9670af39b57cf2e", role: "img", class: Object.assign(Object.assign({ [s]: !0 }, M(this.color)), { [`icon-${this.size}`]: !!this.size, "flip-rtl": h, "icon-rtl": h && w(i) }) }, n), this.svgContent ? c("div", { class: "icon-inner", innerHTML: this.svgContent }) : c("div", { class: "icon-inner" })); }
    static get assetsDirs() { return ["svg"]; }
    get el() { return this; }
    static get watchers() { return { name: ["loadIcon"], src: ["loadIcon"], icon: ["loadIcon"], ios: ["loadIcon"], md: ["loadIcon"] }; }
    static get style() { return O; }
}, [1, "ion-icon", { mode: [1025], color: [1], ios: [1], md: [1], flipRtl: [4, "flip-rtl"], name: [513], src: [1], icon: [8], size: [1], lazy: [4], sanitize: [4], svgContent: [32], isVisible: [32] }, void 0, { name: ["loadIcon"], src: ["loadIcon"], icon: ["loadIcon"], ios: ["loadIcon"], md: ["loadIcon"] }]), S = () => typeof document < "u" && document.documentElement.getAttribute("mode") || "md", M = o => o ? { "ion-color": !0, [`ion-color-${o}`]: !0 } : null;
function A() { if (typeof customElements > "u")
    return; ["ion-icon"].forEach(t => { t === "ion-icon" && (customElements.get(t) || customElements.define(t, y)); }); }
var V = y, U = A;
export { V as IonIcon, U as defineCustomElement };
