import { h as A } from "@nf-internal/chunk-C4FLJMU7";
var kt = "ionicons", j = { hydratedSelectorName: "hydrated", lazyLoad: !1, updatable: !0 }, Et = Object.defineProperty, _t = (t, e) => { for (var n in e)
    Et(t, n, { get: e[n], enumerable: !0 }); }, y = t => { if (t.__stencil__getHostRef)
    return t.__stencil__getHostRef(); }, wt = (t, e) => { let n = { $flags$: 0, $hostElement$: t, $cmpMeta$: e, $instanceValues$: new Map }; n.$onReadyPromise$ = new Promise(r => n.$onReadyResolve$ = r), t["s-p"] = [], t["s-rc"] = []; let s = n; return t.__stencil__getHostRef = () => s, s; }, Y = (t, e) => e in t, U = (t, e) => (0, console.error)(t, e), O = new Map, At = "slot-fb{display:contents}slot-fb[hidden]{display:none}", J = "http://www.w3.org/1999/xlink", g = typeof window < "u" ? window : {}, le = g.HTMLElement || class {
}, p = { $flags$: 0, $resourcesUrl$: "", jmp: t => t(), raf: t => requestAnimationFrame(t), ael: (t, e, n, s) => t.addEventListener(e, n, s), rel: (t, e, n, s) => t.removeEventListener(e, n, s), ce: (t, e) => new CustomEvent(t, e) }, xt = t => Promise.resolve(t), ot = (() => { try {
    return new CSSStyleSheet, typeof new CSSStyleSheet().replaceSync == "function";
}
catch { } return !1; })(), D = !1, Q = [], lt = [], bt = (t, e) => n => { t.push(n), D || (D = !0, e && p.$flags$ & 4 ? H(W) : p.raf(W)); }, m = t => { for (let e = 0; e < t.length; e++)
    try {
        t[e](performance.now());
    }
    catch (n) {
        U(n);
    } t.length = 0; }, W = () => { m(Q), m(lt), (D = Q.length > 0) && p.raf(W); }, H = t => xt().then(t), Pt = bt(lt, !0), Lt = t => { let e = new URL(t, p.$resourcesUrl$); return e.origin !== g.location.origin ? e.href : e.pathname; }, ie = t => p.$resourcesUrl$ = t, C = t => (t = typeof t, t === "object" || t === "function");
function Ot(t) { var e, n, s; return (s = (n = (e = t.head) == null ? void 0 : e.querySelector('meta[name="csp-nonce"]')) == null ? void 0 : n.getAttribute("content")) != null ? s : void 0; }
var Tt = t => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), jt = {};
_t(jt, { err: () => it, map: () => Ut, ok: () => q, unwrap: () => Ht, unwrapErr: () => Mt });
var q = t => ({ isOk: !0, isErr: !1, value: t }), it = t => ({ isOk: !1, isErr: !0, value: t });
function Ut(t, e) { if (t.isOk) {
    let n = e(t.value);
    return n instanceof Promise ? n.then(s => q(s)) : q(n);
} if (t.isErr) {
    let n = t.value;
    return it(n);
} throw "should never get here"; }
var Ht = t => { if (t.isOk)
    return t.value; throw t.value; }, Mt = t => { if (t.isErr)
    return t.value; throw t.value; };
var x;
function Rt(t) { var e; let n = this.attachShadow({ mode: "open" }); x === void 0 && (x = (e = void 0) != null ? e : null), x && n.adoptedStyleSheets.push(x); }
var S = (t, e = "") => () => { }, E = new WeakMap, It = (t, e, n) => { let s = O.get(t); ot && n ? (s = s || new CSSStyleSheet, typeof s == "string" ? s = e : s.replaceSync(e)) : s = e, O.set(t, s); }, Dt = (t, e, n) => { var s; let r = at(e), l = O.get(r); if (!g.document)
    return r; if (t = t.nodeType === 11 ? t : g.document, l)
    if (typeof l == "string") {
        t = t.head || t;
        let a = E.get(t), o;
        if (a || E.set(t, a = new Set), !a.has(r)) {
            {
                o = g.document.createElement("style"), o.innerHTML = l;
                let c = (s = p.$nonce$) != null ? s : Ot(g.document);
                if (c != null && o.setAttribute("nonce", c), !(e.$flags$ & 1))
                    if (t.nodeName === "HEAD") {
                        let i = t.querySelectorAll("link[rel=preconnect]"), $ = i.length > 0 ? i[i.length - 1].nextSibling : t.querySelector("style");
                        t.insertBefore(o, $?.parentNode === t ? $ : null);
                    }
                    else if ("host" in t)
                        if (ot) {
                            let i = new CSSStyleSheet;
                            i.replaceSync(l), t.adoptedStyleSheets.unshift(i);
                        }
                        else {
                            let i = t.querySelector("style");
                            i ? i.innerHTML = l + i.innerHTML : t.prepend(o);
                        }
                    else
                        t.append(o);
                e.$flags$ & 1 && t.insertBefore(o, null);
            }
            e.$flags$ & 4 && (o.innerHTML += At), a && a.add(r);
        }
    }
    else
        t.adoptedStyleSheets.includes(l) || t.adoptedStyleSheets.push(l); return r; }, Wt = t => { let e = t.$cmpMeta$, n = t.$hostElement$, s = e.$flags$, r = S("attachStyles", e.$tagName$), l = Dt(n.shadowRoot ? n.shadowRoot : n.getRootNode(), e); s & 10 && (n["s-sc"] = l, n.classList.add(l + "-h")), r(); }, at = (t, e) => "sc-" + t.$tagName$, qt = (t, e, ...n) => { let s = null, r = null, l = !1, a = !1, o = [], c = $ => { for (let f = 0; f < $.length; f++)
    s = $[f], Array.isArray(s) ? c(s) : s != null && typeof s != "boolean" && ((l = typeof t != "function" && !C(s)) && (s = String(s)), l && a ? o[o.length - 1].$text$ += s : o.push(l ? z(null, s) : s), a = l); }; if (c(n), e) {
    e.key && (r = e.key);
    {
        let $ = e.className || e.class;
        $ && (e.class = typeof $ != "object" ? $ : Object.keys($).filter(f => $[f]).join(" "));
    }
} let i = z(t, null); return i.$attrs$ = e, o.length > 0 && (i.$children$ = o), i.$key$ = r, i; }, z = (t, e) => { let n = { $flags$: 0, $tag$: t, $text$: e, $elm$: null, $children$: null }; return n.$attrs$ = null, n.$key$ = null, n; }, zt = {}, Bt = t => t && t.$tag$ === zt, G = t => { let e = Tt(t); return new RegExp(`(^|[^@]|@(?!supports\\s+selector\\s*\\([^{]*?${e}))(${e}\\b)`, "g"); };
G("::slotted");
G(":host");
G(":host-context");
var ct = (t, e, n) => t != null && !C(t) ? e & 4 ? t === "false" ? !1 : t === "" || !!t : e & 1 ? String(t) : t : t, Ct = (t, e, n) => { let s = p.ce(e, n); return t.dispatchEvent(s), s; }, V = (t, e, n, s, r, l, a) => { if (n === s)
    return; let o = Y(t, e), c = e.toLowerCase(); if (e === "class") {
    let i = t.classList, $ = N(n), f = N(s);
    i.remove(...$.filter(u => u && !f.includes(u))), i.add(...f.filter(u => u && !$.includes(u)));
}
else if (e === "style") {
    for (let i in n)
        (!s || s[i] == null) && (i.includes("-") ? t.style.removeProperty(i) : t.style[i] = "");
    for (let i in s)
        (!n || s[i] !== n[i]) && (i.includes("-") ? t.style.setProperty(i, s[i]) : t.style[i] = s[i]);
}
else if (e !== "key")
    if (e === "ref")
        s && s(t);
    else if (!t.__lookupSetter__(e) && e[0] === "o" && e[1] === "n") {
        if (e[2] === "-" ? e = e.slice(3) : Y(g, c) ? e = c.slice(2) : e = c[2] + e.slice(3), n || s) {
            let i = e.endsWith($t);
            e = e.replace(Xt, ""), n && p.rel(t, e, n, i), s && p.ael(t, e, s, i);
        }
    }
    else {
        let i = C(s);
        if (o || i && s !== null)
            try {
                if (t.tagName.includes("-"))
                    t[e] !== s && (t[e] = s);
                else {
                    let f = s ?? "";
                    e === "list" ? o = !1 : (n == null || t[e] != f) && (typeof t.__lookupSetter__(e) == "function" ? t[e] = f : t.setAttribute(e, f));
                }
            }
            catch { }
        let $ = !1;
        c !== (c = c.replace(/^xlink\:?/, "")) && (e = c, $ = !0), s == null || s === !1 ? (s !== !1 || t.getAttribute(e) === "") && ($ ? t.removeAttributeNS(J, e) : t.removeAttribute(e)) : (!o || l & 4 || r) && !i && t.nodeType === 1 && (s = s === !0 ? "" : s, $ ? t.setAttributeNS(J, e, s) : t.setAttribute(e, s));
    } }, Gt = /\s/, N = t => (typeof t == "object" && t && "baseVal" in t && (t = t.baseVal), !t || typeof t != "string" ? [] : t.split(Gt)), $t = "Capture", Xt = new RegExp($t + "$"), ft = (t, e, n, s) => { let r = e.$elm$.nodeType === 11 && e.$elm$.host ? e.$elm$.host : e.$elm$, l = t && t.$attrs$ || {}, a = e.$attrs$ || {}; for (let o of tt(Object.keys(l)))
    o in a || V(r, o, l[o], void 0, n, e.$flags$); for (let o of tt(Object.keys(a)))
    V(r, o, l[o], a[o], n, e.$flags$); };
function tt(t) { return t.includes("ref") ? [...t.filter(e => e !== "ref"), "ref"] : t; }
var X, ut = !1, T = (t, e, n) => { let s = e.$children$[n], r = 0, l, a; if (s.$text$ !== null)
    l = s.$elm$ = g.document.createTextNode(s.$text$);
else {
    if (!g.document)
        throw new Error("You are trying to render a Stencil component in an environment that doesn't support the DOM. Make sure to populate the [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window/window) object before rendering a component.");
    if (l = s.$elm$ = g.document.createElement(s.$tag$), ft(null, s, ut), s.$children$)
        for (r = 0; r < s.$children$.length; ++r)
            a = T(t, s, r), a && l.appendChild(a);
} return l["s-hn"] = X, l; }, dt = (t, e, n, s, r, l) => { let a = t, o; for (a.shadowRoot && a.tagName === X && (a = a.shadowRoot); r <= l; ++r)
    s[r] && (o = T(null, n, r), o && (s[r].$elm$ = o, L(a, o, e))); }, pt = (t, e, n) => { for (let s = e; s <= n; ++s) {
    let r = t[s];
    if (r) {
        let l = r.$elm$;
        ht(r), l && l.remove();
    }
} }, Kt = (t, e, n, s, r = !1) => { let l = 0, a = 0, o = 0, c = 0, i = e.length - 1, $ = e[0], f = e[i], u = s.length - 1, d = s[0], h = s[u], v, w; for (; l <= i && a <= u;)
    if ($ == null)
        $ = e[++l];
    else if (f == null)
        f = e[--i];
    else if (d == null)
        d = s[++a];
    else if (h == null)
        h = s[--u];
    else if (b($, d, r))
        k($, d, r), $ = e[++l], d = s[++a];
    else if (b(f, h, r))
        k(f, h, r), f = e[--i], h = s[--u];
    else if (b($, h, r))
        k($, h, r), L(t, $.$elm$, f.$elm$.nextSibling), $ = e[++l], h = s[--u];
    else if (b(f, d, r))
        k(f, d, r), L(t, f.$elm$, $.$elm$), f = e[--i], d = s[++a];
    else {
        for (o = -1, c = l; c <= i; ++c)
            if (e[c] && e[c].$key$ !== null && e[c].$key$ === d.$key$) {
                o = c;
                break;
            }
        o >= 0 ? (w = e[o], w.$tag$ !== d.$tag$ ? v = T(e && e[a], n, o) : (k(w, d, r), e[o] = void 0, v = w.$elm$), d = s[++a]) : (v = T(e && e[a], n, a), d = s[++a]), v && L($.$elm$.parentNode, v, $.$elm$);
    } l > i ? dt(t, s[u + 1] == null ? null : s[u + 1].$elm$, n, s, a, u) : a > u && pt(e, l, i); }, b = (t, e, n = !1) => t.$tag$ === e.$tag$ ? n ? (n && !t.$key$ && e.$key$ && (t.$key$ = e.$key$), !0) : t.$key$ === e.$key$ : !1, k = (t, e, n = !1) => { let s = e.$elm$ = t.$elm$, r = t.$children$, l = e.$children$, a = e.$text$; a === null ? (ft(t, e, ut), r !== null && l !== null ? Kt(s, r, e, l, n) : l !== null ? (t.$text$ !== null && (s.textContent = ""), dt(s, null, e, l, 0, l.length - 1)) : !n && j.updatable && r !== null && pt(r, 0, r.length - 1)) : t.$text$ !== a && (s.data = a); }, ht = t => { t.$attrs$ && t.$attrs$.ref && t.$attrs$.ref(null), t.$children$ && t.$children$.map(ht); }, L = (t, e, n) => t?.insertBefore(e, n), gt = (t, e, n = !1) => { let s = t.$hostElement$, r = t.$cmpMeta$, l = t.$vnode$ || z(null, null), o = Bt(e) ? e : qt(null, null, e); if (X = s.tagName, r.$attrsToReflect$ && (o.$attrs$ = o.$attrs$ || {}, r.$attrsToReflect$.map(([c, i]) => o.$attrs$[i] = s[c])), n && o.$attrs$)
    for (let c of Object.keys(o.$attrs$))
        s.hasAttribute(c) && !["key", "ref", "style", "class"].includes(c) && (o.$attrs$[c] = s[c]); o.$tag$ = null, o.$flags$ |= 4, t.$vnode$ = o, o.$elm$ = l.$elm$ = s.shadowRoot || s, k(l, o, n); }, vt = (t, e) => { if (e && !t.$onRenderResolve$ && e["s-p"]) {
    let n = e["s-p"].push(new Promise(s => t.$onRenderResolve$ = () => { e["s-p"].splice(n - 1, 1), s(); }));
} }, K = (t, e) => { if (t.$flags$ |= 16, t.$flags$ & 4) {
    t.$flags$ |= 512;
    return;
} return vt(t, t.$ancestorComponent$), Pt(() => Zt(t, e)); }, Zt = (t, e) => { let n = t.$hostElement$, s = S("scheduleUpdate", t.$cmpMeta$.$tagName$), r = n; if (!r)
    throw new Error(`Can't render component <${n.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`); let l; return e ? l = _(r, "componentWillLoad", void 0, n) : l = _(r, "componentWillUpdate", void 0, n), l = et(l, () => _(r, "componentWillRender", void 0, n)), s(), et(l, () => Yt(t, r, e)); }, et = (t, e) => Ft(t) ? t.then(e).catch(n => { console.error(n), e(); }) : e(), Ft = t => t instanceof Promise || t && t.then && typeof t.then == "function", Yt = (t, e, n) => A(null, null, function* () { var s; let r = t.$hostElement$, l = S("update", t.$cmpMeta$.$tagName$), a = r["s-rc"]; n && Wt(t); let o = S("render", t.$cmpMeta$.$tagName$); Jt(t, e, r, n), a && (a.map(c => c()), r["s-rc"] = void 0), o(), l(); {
    let c = (s = r["s-p"]) != null ? s : [], i = () => Qt(t);
    c.length === 0 ? i() : (Promise.all(c).then(i), t.$flags$ |= 4, c.length = 0);
} }), Jt = (t, e, n, s) => { try {
    e = e.render(), t.$flags$ &= -17, t.$flags$ |= 2, gt(t, e, s);
}
catch (r) {
    U(r, t.$hostElement$);
} return null; }, Qt = t => { let e = t.$cmpMeta$.$tagName$, n = t.$hostElement$, s = S("postUpdate", e), r = n, l = t.$ancestorComponent$; _(r, "componentDidRender", void 0, n), t.$flags$ & 64 ? (_(r, "componentDidUpdate", void 0, n), s()) : (t.$flags$ |= 64, Vt(n), _(r, "componentDidLoad", void 0, n), s(), t.$onReadyResolve$(n), l || mt()), t.$onRenderResolve$ && (t.$onRenderResolve$(), t.$onRenderResolve$ = void 0), t.$flags$ & 512 && H(() => K(t, !1)), t.$flags$ &= -517; }, mt = t => { H(() => Ct(g, "appload", { detail: { namespace: kt } })); }, _ = (t, e, n, s) => { if (t && t[e])
    try {
        return t[e](n);
    }
    catch (r) {
        U(r, s);
    } }, Vt = t => { var e; return t.classList.add((e = j.hydratedSelectorName) != null ? e : "hydrated"); }, Nt = (t, e) => y(t).$instanceValues$.get(e), st = (t, e, n, s) => { let r = y(t), l = t, a = r.$instanceValues$.get(e), o = r.$flags$, c = l; n = ct(n, s.$members$[e][0]); let i = Number.isNaN(a) && Number.isNaN(n); if (n !== a && !i) {
    r.$instanceValues$.set(e, n);
    {
        if (s.$watchers$ && o & 128) {
            let f = s.$watchers$[e];
            f && f.map(u => { try {
                c[u](n, a, e);
            }
            catch (d) {
                U(d, l);
            } });
        }
        if ((o & 18) === 2) {
            if (c.componentShouldUpdate && c.componentShouldUpdate(n, a, e) === !1)
                return;
            K(r, !1);
        }
    }
} }, te = (t, e, n) => { var s, r; let l = t.prototype; if (e.$members$ || e.$watchers$ || t.watchers) {
    t.watchers && !e.$watchers$ && (e.$watchers$ = t.watchers);
    let a = Object.entries((s = e.$members$) != null ? s : {});
    a.map(([o, [c]]) => { if (c & 31 || c & 32) {
        let { get: i, set: $ } = Object.getOwnPropertyDescriptor(l, o) || {};
        i && (e.$members$[o][0] |= 2048), $ && (e.$members$[o][0] |= 4096), Object.defineProperty(l, o, { get() { return i ? i.apply(this) : Nt(this, o); }, configurable: !0, enumerable: !0 }), Object.defineProperty(l, o, { set(f) { let u = y(this); if ($) {
                let d = c & 32 ? this[o] : u.$hostElement$[o];
                typeof d > "u" && u.$instanceValues$.get(o) ? f = u.$instanceValues$.get(o) : !u.$instanceValues$.get(o) && d && u.$instanceValues$.set(o, d), $.apply(this, [ct(f, c)]), f = c & 32 ? this[o] : u.$hostElement$[o], st(this, o, f, e);
                return;
            } {
                st(this, o, f, e);
                return;
            } } });
    } });
    {
        let o = new Map;
        l.attributeChangedCallback = function (c, i, $) { p.jmp(() => { var f; let u = o.get(c); if (!(this.hasOwnProperty(u) && j.lazyLoad)) {
            if (l.hasOwnProperty(u) && typeof this[u] == "number" && this[u] == $)
                return;
            if (u == null) {
                let h = y(this), v = h?.$flags$;
                if (v && !(v & 8) && v & 128 && $ !== i) {
                    let M = this, Z = (f = e.$watchers$) == null ? void 0 : f[c];
                    Z?.forEach(F => { M[F] != null && M[F].call(M, $, i, c); });
                }
                return;
            }
        } let d = Object.getOwnPropertyDescriptor(l, u); $ = $ === null && typeof this[u] == "boolean" ? !1 : $, $ !== this[u] && (!d.get || d.set) && (this[u] = $); }); }, t.observedAttributes = Array.from(new Set([...Object.keys((r = e.$watchers$) != null ? r : {}), ...a.filter(([c, i]) => i[0] & 15).map(([c, i]) => { var $; let f = i[1] || c; return o.set(f, c), i[0] & 512 && (($ = e.$attrsToReflect$) == null || $.push([c, f])), f; })]));
    }
} return t; }, nt = (t, e, n, s) => A(null, null, function* () { let r; if ((e.$flags$ & 32) === 0) {
    e.$flags$ |= 32;
    {
        r = t.constructor;
        let o = t.localName;
        customElements.whenDefined(o).then(() => e.$flags$ |= 128);
    }
    if (r && r.style) {
        let o;
        typeof r.style == "string" && (o = r.style);
        let c = at(n);
        if (!O.has(c)) {
            let i = S("registerStyles", n.$tagName$);
            It(c, o, !!(n.$flags$ & 1)), i();
        }
    }
} let l = e.$ancestorComponent$, a = () => K(e, !0); l && l["s-rc"] ? l["s-rc"].push(a) : a(); }), ee = (t, e) => { }, se = t => { if ((p.$flags$ & 1) === 0) {
    let e = y(t), n = e.$cmpMeta$, s = S("connectedCallback", n.$tagName$);
    if (e.$flags$ & 1)
        e?.$lazyInstance$ || e?.$onReadyPromise$ && e.$onReadyPromise$.then(() => ee());
    else {
        e.$flags$ |= 1;
        {
            let r = t;
            for (; r = r.parentNode || r.host;)
                if (r["s-p"]) {
                    vt(e, e.$ancestorComponent$ = r);
                    break;
                }
        }
        n.$members$ && Object.entries(n.$members$).map(([r, [l]]) => { if (l & 31 && t.hasOwnProperty(r)) {
            let a = t[r];
            delete t[r], t[r] = a;
        } }), j.initializeNextTick ? H(() => nt(t, e, n)) : nt(t, e, n);
    }
    s();
} }, ne = t => A(null, null, function* () { (p.$flags$ & 1) === 0 && y(t), E.has(t) && E.delete(t), t.shadowRoot && E.has(t.shadowRoot) && E.delete(t.shadowRoot); }), ae = (t, e) => { let n = { $flags$: e[0], $tagName$: e[1] }; n.$members$ = e[2], n.$watchers$ = t.$watchers$, n.$attrsToReflect$ = []; let s = t.prototype.connectedCallback, r = t.prototype.disconnectedCallback; return Object.assign(t.prototype, { __hasHostListenerAttached: !1, __registerHost() { wt(this, n); }, connectedCallback() { this.__hasHostListenerAttached || (y(this), this.__hasHostListenerAttached = !0), se(this), s && s.call(this); }, disconnectedCallback() { ne(this), r && r.call(this); }, __attachShadow() { if (!this.shadowRoot)
        Rt.call(this, n);
    else if (this.shadowRoot.mode !== "open")
        throw new Error(`Unable to re-use existing shadow root for ${n.$tagName$}! Mode is set to ${this.shadowRoot.mode} but Stencil only supports open shadow roots.`); } }), t.is = n.$tagName$, te(t, n); }, ce = t => p.$nonce$ = t, $e = t => Object.assign(p, t);
function fe(t, e) { let s = { $cmpMeta$: { $flags$: 0, $tagName$: e.tagName }, $hostElement$: e }; gt(s, t); }
var R, yt = () => { if (typeof window > "u")
    return new Map; if (!R) {
    let t = window;
    t.Ionicons = t.Ionicons || {}, R = t.Ionicons.map = t.Ionicons.map || new Map;
} return R; }, ue = t => { Object.keys(t).forEach(e => { rt(e, t[e]); let n = e.replace(/([a-z0-9]|(?=[A-Z]))([A-Z0-9])/g, "$1-$2").toLowerCase(); e !== n && rt(n, t[e]); }); }, rt = (t, e) => { let n = yt(), s = n.get(t); s === void 0 ? n.set(t, e) : s !== e && console.warn(`[Ionicons Warning]: Multiple icons were mapped to name "${t}". Ensure that multiple icons are not mapped to the same icon name.`); }, de = t => { let e = I(t.src); return e || (e = oe(t.name, t.icon, t.mode, t.ios, t.md), e ? re(e, t) : t.icon && (e = I(t.icon), e || (e = I(t.icon[t.mode]), e)) ? e : null); }, re = (t, e) => { let n = yt().get(t); if (n)
    return n; try {
    return Lt(`svg/${t}.svg`);
}
catch (s) {
    console.log("e", s), console.warn(`[Ionicons Warning]: Could not load icon with name "${t}". Ensure that the icon is registered using addIcons or that the icon SVG data is passed directly to the icon component.`, e);
} }, oe = (t, e, n, s, r) => (n = (n && P(n)) === "ios" ? "ios" : "md", s && n === "ios" ? t = P(s) : r && n === "md" ? t = P(r) : (!t && e && !St(e) && (t = e), B(t) && (t = P(t))), !B(t) || t.trim() === "" || t.replace(/[a-z]|-|\d/gi, "") !== "" ? null : t), I = t => B(t) && (t = t.trim(), St(t)) ? t : null, St = t => t.length > 0 && /(\/|\.)/.test(t), B = t => typeof t == "string", P = t => t.toLowerCase(), pe = (t, e = []) => { let n = {}; return e.forEach(s => { t.hasAttribute(s) && (t.getAttribute(s) !== null && (n[s] = t.getAttribute(s)), t.removeAttribute(s)); }), n; }, he = t => t && t.dir !== "" ? t.dir.toLowerCase() === "rtl" : document?.dir.toLowerCase() === "rtl";
export { le as a, Lt as b, ie as c, qt as d, zt as e, ae as f, ce as g, $e as h, fe as i, ue as j, de as k, oe as l, B as m, pe as n, he as o };
