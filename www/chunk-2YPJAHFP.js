import { d as Z, h as L } from "@nf-internal/chunk-C4FLJMU7";
var xt = Z({ "./ion-icon.entry.js": () => import("@nf-internal/ion-icon.entry-6Z3NZ3ZZ") });
var wt = "ionicons", G = { hydratedSelectorName: "hydrated", lazyLoad: !0, updatable: !0 }, Pt = Object.defineProperty, At = (t, e) => { for (var n in e)
    Pt(t, n, { get: e[n], enumerable: !0 }); }, E = t => { if (t.__stencil__getHostRef)
    return t.__stencil__getHostRef(); }, ae = (t, e) => { t.__stencil__getHostRef = () => e, e.$lazyInstance$ = t; }, Tt = (t, e) => { let n = { $flags$: 0, $hostElement$: t, $cmpMeta$: e, $instanceValues$: new Map }; n.$onReadyPromise$ = new Promise(r => n.$onReadyResolve$ = r), t["s-p"] = [], t["s-rc"] = []; let s = n; return t.__stencil__getHostRef = () => s, s; }, M = (t, e) => e in t, T = (t, e) => (0, console.error)(t, e), m = new Map, It = (t, e, n) => { let s = t.$tagName$.replace(/-/g, "_"), r = t.$lazyBundleId$; if (!r)
    return; let l = m.get(r); if (l)
    return l[s]; return xt(`./${r}.entry.js`).then(a => (m.set(r, a), a[s]), a => { T(a, e.$hostElement$); }); }, O = new Map, Lt = "{visibility:hidden}.hydrated{visibility:inherit}", lt = "slot-fb{display:contents}slot-fb[hidden]{display:none}", N = "http://www.w3.org/1999/xlink", g = typeof window < "u" ? window : {}, h = { $flags$: 0, $resourcesUrl$: "", jmp: t => t(), raf: t => requestAnimationFrame(t), ael: (t, e, n, s) => t.addEventListener(e, n, s), rel: (t, e, n, s) => t.removeEventListener(e, n, s), ce: (t, e) => new CustomEvent(t, e) }, bt = t => Promise.resolve(t), it = (() => { try {
    return new CSSStyleSheet, typeof new CSSStyleSheet().replaceSync == "function";
}
catch { } return !1; })(), R = !1, V = [], $t = [], zt = (t, e) => n => { t.push(n), R || (R = !0, e && h.$flags$ & 4 ? X(B) : h.raf(B)); }, tt = t => { for (let e = 0; e < t.length; e++)
    try {
        t[e](performance.now());
    }
    catch (n) {
        T(n);
    } t.length = 0; }, B = () => { tt(V), tt($t), (R = V.length > 0) && h.raf(B); }, X = t => bt().then(t), jt = zt($t, !0), ce = t => { let e = new URL(t, h.$resourcesUrl$); return e.origin !== g.location.origin ? e.href : e.pathname; }, fe = t => h.$resourcesUrl$ = t, Y = t => (t = typeof t, t === "object" || t === "function");
function at(t) { var e, n, s; return (s = (n = (e = t.head) == null ? void 0 : e.querySelector('meta[name="csp-nonce"]')) == null ? void 0 : n.getAttribute("content")) != null ? s : void 0; }
var Ot = t => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), Ut = {};
At(Ut, { err: () => ct, map: () => Ht, ok: () => q, unwrap: () => Rt, unwrapErr: () => Bt });
var q = t => ({ isOk: !0, isErr: !1, value: t }), ct = t => ({ isOk: !1, isErr: !0, value: t });
function Ht(t, e) { if (t.isOk) {
    let n = e(t.value);
    return n instanceof Promise ? n.then(s => q(s)) : q(n);
} if (t.isErr) {
    let n = t.value;
    return ct(n);
} throw "should never get here"; }
var Rt = t => { if (t.isOk)
    return t.value; throw t.value; }, Bt = t => { if (t.isErr)
    return t.value; throw t.value; };
var b;
function qt(t) { var e; let n = this.attachShadow({ mode: "open" }); b === void 0 && (b = (e = void 0) != null ? e : null), b && n.adoptedStyleSheets.push(b); }
var _ = (t, e = "") => () => { }, Dt = (t, e) => () => { }, A = new WeakMap, Ct = (t, e, n) => { let s = O.get(t); it && n ? (s = s || new CSSStyleSheet, typeof s == "string" ? s = e : s.replaceSync(e)) : s = e, O.set(t, s); }, Wt = (t, e, n) => { var s; let r = ft(e), l = O.get(r); if (!g.document)
    return r; if (t = t.nodeType === 11 ? t : g.document, l)
    if (typeof l == "string") {
        t = t.head || t;
        let a = A.get(t), o;
        if (a || A.set(t, a = new Set), !a.has(r)) {
            {
                o = g.document.createElement("style"), o.innerHTML = l;
                let $ = (s = h.$nonce$) != null ? s : at(g.document);
                if ($ != null && o.setAttribute("nonce", $), !(e.$flags$ & 1))
                    if (t.nodeName === "HEAD") {
                        let i = t.querySelectorAll("link[rel=preconnect]"), c = i.length > 0 ? i[i.length - 1].nextSibling : t.querySelector("style");
                        t.insertBefore(o, c?.parentNode === t ? c : null);
                    }
                    else if ("host" in t)
                        if (it) {
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
            e.$flags$ & 4 && (o.innerHTML += lt), a && a.add(r);
        }
    }
    else
        t.adoptedStyleSheets.includes(l) || t.adoptedStyleSheets.push(l); return r; }, Gt = t => { let e = t.$cmpMeta$, n = t.$hostElement$, s = e.$flags$, r = _("attachStyles", e.$tagName$), l = Wt(n.shadowRoot ? n.shadowRoot : n.getRootNode(), e); s & 10 && (n["s-sc"] = l, n.classList.add(l + "-h")), r(); }, ft = (t, e) => "sc-" + t.$tagName$, Xt = (t, e, ...n) => { let s = null, r = null, l = !1, a = !1, o = [], $ = c => { for (let d = 0; d < c.length; d++)
    s = c[d], Array.isArray(s) ? $(s) : s != null && typeof s != "boolean" && ((l = typeof t != "function" && !Y(s)) && (s = String(s)), l && a ? o[o.length - 1].$text$ += s : o.push(l ? D(null, s) : s), a = l); }; if ($(n), e) {
    e.key && (r = e.key);
    {
        let c = e.className || e.class;
        c && (e.class = typeof c != "object" ? c : Object.keys(c).filter(d => c[d]).join(" "));
    }
} let i = D(t, null); return i.$attrs$ = e, o.length > 0 && (i.$children$ = o), i.$key$ = r, i; }, D = (t, e) => { let n = { $flags$: 0, $tag$: t, $text$: e, $elm$: null, $children$: null }; return n.$attrs$ = null, n.$key$ = null, n; }, Yt = {}, Ft = t => t && t.$tag$ === Yt, F = t => { let e = Ot(t); return new RegExp(`(^|[^@]|@(?!supports\\s+selector\\s*\\([^{]*?${e}))(${e}\\b)`, "g"); };
F("::slotted");
F(":host");
F(":host-context");
var C = (t, e, n) => t != null && !Y(t) ? e & 4 ? t === "false" ? !1 : t === "" || !!t : e & 1 ? String(t) : t : t, de = t => E(t).$hostElement$, Kt = (t, e, n) => { let s = h.ce(e, n); return t.dispatchEvent(s), s; }, et = (t, e, n, s, r, l, a) => { if (n === s)
    return; let o = M(t, e), $ = e.toLowerCase(); if (e === "class") {
    let i = t.classList, c = st(n), d = st(s);
    i.remove(...c.filter(f => f && !d.includes(f))), i.add(...d.filter(f => f && !c.includes(f)));
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
    else if (!o && e[0] === "o" && e[1] === "n") {
        if (e[2] === "-" ? e = e.slice(3) : M(g, $) ? e = $.slice(2) : e = $[2] + e.slice(3), n || s) {
            let i = e.endsWith(dt);
            e = e.replace(Qt, ""), n && h.rel(t, e, n, i), s && h.ael(t, e, s, i);
        }
    }
    else {
        let i = Y(s);
        if (o || i && s !== null)
            try {
                if (t.tagName.includes("-"))
                    t[e] !== s && (t[e] = s);
                else {
                    let d = s ?? "";
                    e === "list" ? o = !1 : (n == null || t[e] != d) && (typeof t.__lookupSetter__(e) == "function" ? t[e] = d : t.setAttribute(e, d));
                }
            }
            catch { }
        let c = !1;
        $ !== ($ = $.replace(/^xlink\:?/, "")) && (e = $, c = !0), s == null || s === !1 ? (s !== !1 || t.getAttribute(e) === "") && (c ? t.removeAttributeNS(N, e) : t.removeAttribute(e)) : (!o || l & 4 || r) && !i && t.nodeType === 1 && (s = s === !0 ? "" : s, c ? t.setAttributeNS(N, e, s) : t.setAttribute(e, s));
    } }, Jt = /\s/, st = t => (typeof t == "object" && t && "baseVal" in t && (t = t.baseVal), !t || typeof t != "string" ? [] : t.split(Jt)), dt = "Capture", Qt = new RegExp(dt + "$"), ut = (t, e, n, s) => { let r = e.$elm$.nodeType === 11 && e.$elm$.host ? e.$elm$.host : e.$elm$, l = t && t.$attrs$ || {}, a = e.$attrs$ || {}; for (let o of nt(Object.keys(l)))
    o in a || et(r, o, l[o], void 0, n, e.$flags$); for (let o of nt(Object.keys(a)))
    et(r, o, l[o], a[o], n, e.$flags$); };
function nt(t) { return t.includes("ref") ? [...t.filter(e => e !== "ref"), "ref"] : t; }
var K, pt = !1, U = (t, e, n) => { let s = e.$children$[n], r = 0, l, a; if (s.$text$ !== null)
    l = s.$elm$ = g.document.createTextNode(s.$text$);
else {
    if (!g.document)
        throw new Error("You are trying to render a Stencil component in an environment that doesn't support the DOM. Make sure to populate the [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window/window) object before rendering a component.");
    if (l = s.$elm$ = g.document.createElement(s.$tag$), ut(null, s, pt), s.$children$)
        for (r = 0; r < s.$children$.length; ++r)
            a = U(t, s, r), a && l.appendChild(a);
} return l["s-hn"] = K, l; }, ht = (t, e, n, s, r, l) => { let a = t, o; for (a.shadowRoot && a.tagName === K && (a = a.shadowRoot); r <= l; ++r)
    s[r] && (o = U(null, n, r), o && (s[r].$elm$ = o, j(a, o, e))); }, vt = (t, e, n) => { for (let s = e; s <= n; ++s) {
    let r = t[s];
    if (r) {
        let l = r.$elm$;
        gt(r), l && l.remove();
    }
} }, Zt = (t, e, n, s, r = !1) => { let l = 0, a = 0, o = 0, $ = 0, i = e.length - 1, c = e[0], d = e[i], f = s.length - 1, u = s[0], p = s[f], v, S; for (; l <= i && a <= f;)
    if (c == null)
        c = e[++l];
    else if (d == null)
        d = e[--i];
    else if (u == null)
        u = s[++a];
    else if (p == null)
        p = s[--f];
    else if (z(c, u, r))
        P(c, u, r), c = e[++l], u = s[++a];
    else if (z(d, p, r))
        P(d, p, r), d = e[--i], p = s[--f];
    else if (z(c, p, r))
        P(c, p, r), j(t, c.$elm$, d.$elm$.nextSibling), c = e[++l], p = s[--f];
    else if (z(d, u, r))
        P(d, u, r), j(t, d.$elm$, c.$elm$), d = e[--i], u = s[++a];
    else {
        for (o = -1, $ = l; $ <= i; ++$)
            if (e[$] && e[$].$key$ !== null && e[$].$key$ === u.$key$) {
                o = $;
                break;
            }
        o >= 0 ? (S = e[o], S.$tag$ !== u.$tag$ ? v = U(e && e[a], n, o) : (P(S, u, r), e[o] = void 0, v = S.$elm$), u = s[++a]) : (v = U(e && e[a], n, a), u = s[++a]), v && j(c.$elm$.parentNode, v, c.$elm$);
    } l > i ? ht(t, s[f + 1] == null ? null : s[f + 1].$elm$, n, s, a, f) : a > f && vt(e, l, i); }, z = (t, e, n = !1) => t.$tag$ === e.$tag$ ? n ? (n && !t.$key$ && e.$key$ && (t.$key$ = e.$key$), !0) : t.$key$ === e.$key$ : !1, P = (t, e, n = !1) => { let s = e.$elm$ = t.$elm$, r = t.$children$, l = e.$children$, a = e.$text$; a === null ? (ut(t, e, pt), r !== null && l !== null ? Zt(s, r, e, l, n) : l !== null ? (t.$text$ !== null && (s.textContent = ""), ht(s, null, e, l, 0, l.length - 1)) : !n && G.updatable && r !== null && vt(r, 0, r.length - 1)) : t.$text$ !== a && (s.data = a); }, gt = t => { t.$attrs$ && t.$attrs$.ref && t.$attrs$.ref(null), t.$children$ && t.$children$.map(gt); }, j = (t, e, n) => t?.insertBefore(e, n), Mt = (t, e, n = !1) => { let s = t.$hostElement$, r = t.$cmpMeta$, l = t.$vnode$ || D(null, null), o = Ft(e) ? e : Xt(null, null, e); if (K = s.tagName, r.$attrsToReflect$ && (o.$attrs$ = o.$attrs$ || {}, r.$attrsToReflect$.map(([$, i]) => o.$attrs$[i] = s[$])), n && o.$attrs$)
    for (let $ of Object.keys(o.$attrs$))
        s.hasAttribute($) && !["key", "ref", "style", "class"].includes($) && (o.$attrs$[$] = s[$]); o.$tag$ = null, o.$flags$ |= 4, t.$vnode$ = o, o.$elm$ = l.$elm$ = s.shadowRoot || s, P(l, o, n); }, yt = (t, e) => { if (e && !t.$onRenderResolve$ && e["s-p"]) {
    let n = e["s-p"].push(new Promise(s => t.$onRenderResolve$ = () => { e["s-p"].splice(n - 1, 1), s(); }));
} }, J = (t, e) => { if (t.$flags$ |= 16, t.$flags$ & 4) {
    t.$flags$ |= 512;
    return;
} return yt(t, t.$ancestorComponent$), jt(() => mt(t, e)); }, mt = (t, e) => { let n = t.$hostElement$, s = _("scheduleUpdate", t.$cmpMeta$.$tagName$), r = t.$lazyInstance$; if (!r)
    throw new Error(`Can't render component <${n.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`); let l; return e ? l = x(r, "componentWillLoad", void 0, n) : l = x(r, "componentWillUpdate", void 0, n), l = rt(l, () => x(r, "componentWillRender", void 0, n)), s(), rt(l, () => Vt(t, r, e)); }, rt = (t, e) => Nt(t) ? t.then(e).catch(n => { console.error(n), e(); }) : e(), Nt = t => t instanceof Promise || t && t.then && typeof t.then == "function", Vt = (t, e, n) => L(null, null, function* () { var s; let r = t.$hostElement$, l = _("update", t.$cmpMeta$.$tagName$), a = r["s-rc"]; n && Gt(t); let o = _("render", t.$cmpMeta$.$tagName$); te(t, e, r, n), a && (a.map($ => $()), r["s-rc"] = void 0), o(), l(); {
    let $ = (s = r["s-p"]) != null ? s : [], i = () => ee(t);
    $.length === 0 ? i() : (Promise.all($).then(i), t.$flags$ |= 4, $.length = 0);
} }), te = (t, e, n, s) => { try {
    e = e.render(), t.$flags$ &= -17, t.$flags$ |= 2, Mt(t, e, s);
}
catch (r) {
    T(r, t.$hostElement$);
} return null; }, ee = t => { let e = t.$cmpMeta$.$tagName$, n = t.$hostElement$, s = _("postUpdate", e), r = t.$lazyInstance$, l = t.$ancestorComponent$; x(r, "componentDidRender", void 0, n), t.$flags$ & 64 ? (x(r, "componentDidUpdate", void 0, n), s()) : (t.$flags$ |= 64, se(n), x(r, "componentDidLoad", void 0, n), s(), t.$onReadyResolve$(n), l || St()), t.$onRenderResolve$ && (t.$onRenderResolve$(), t.$onRenderResolve$ = void 0), t.$flags$ & 512 && X(() => J(t, !1)), t.$flags$ &= -517; }, St = t => { X(() => Kt(g, "appload", { detail: { namespace: wt } })); }, x = (t, e, n, s) => { if (t && t[e])
    try {
        return t[e](n);
    }
    catch (r) {
        T(r, s);
    } }, se = t => { var e; return t.classList.add((e = G.hydratedSelectorName) != null ? e : "hydrated"); }, ne = (t, e) => E(t).$instanceValues$.get(e), H = (t, e, n, s) => { let r = E(t); if (!r)
    throw new Error(`Couldn't find host element for "${s.$tagName$}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/stenciljs/core/issues/5457).`); let l = r.$hostElement$, a = r.$instanceValues$.get(e), o = r.$flags$, $ = r.$lazyInstance$; n = C(n, s.$members$[e][0]); let i = Number.isNaN(a) && Number.isNaN(n), c = n !== a && !i; if ((!(o & 8) || a === void 0) && c && (r.$instanceValues$.set(e, n), $)) {
    if (s.$watchers$ && o & 128) {
        let d = s.$watchers$[e];
        d && d.map(f => { try {
            $[f](n, a, e);
        }
        catch (u) {
            T(u, l);
        } });
    }
    if ((o & 18) === 2) {
        if ($.componentShouldUpdate && $.componentShouldUpdate(n, a, e) === !1)
            return;
        J(r, !1);
    }
} }, Et = (t, e, n) => { var s, r; let l = t.prototype; if (e.$members$ || e.$watchers$ || t.watchers) {
    t.watchers && !e.$watchers$ && (e.$watchers$ = t.watchers);
    let a = Object.entries((s = e.$members$) != null ? s : {});
    if (a.map(([o, [$]]) => { if ($ & 31 || n & 2 && $ & 32) {
        let { get: i, set: c } = Object.getOwnPropertyDescriptor(l, o) || {};
        i && (e.$members$[o][0] |= 2048), c && (e.$members$[o][0] |= 4096), (n & 1 || !i) && Object.defineProperty(l, o, { get() { {
                if ((e.$members$[o][0] & 2048) === 0)
                    return ne(this, o);
                let d = E(this), f = d ? d.$lazyInstance$ : l;
                return f ? f[o] : void 0;
            } }, configurable: !0, enumerable: !0 }), Object.defineProperty(l, o, { set(d) { let f = E(this); if (c) {
                let u = $ & 32 ? this[o] : f.$hostElement$[o];
                typeof u > "u" && f.$instanceValues$.get(o) ? d = f.$instanceValues$.get(o) : !f.$instanceValues$.get(o) && u && f.$instanceValues$.set(o, u), c.apply(this, [C(d, $)]), d = $ & 32 ? this[o] : f.$hostElement$[o], H(this, o, d, e);
                return;
            } {
                if ((n & 1) === 0 || (e.$members$[o][0] & 4096) === 0) {
                    H(this, o, d, e), n & 1 && !f.$lazyInstance$ && f.$onReadyPromise$.then(() => { e.$members$[o][0] & 4096 && f.$lazyInstance$[o] !== f.$instanceValues$.get(o) && (f.$lazyInstance$[o] = d); });
                    return;
                }
                let u = () => { let p = f.$lazyInstance$[o]; !f.$instanceValues$.get(o) && p && f.$instanceValues$.set(o, p), f.$lazyInstance$[o] = C(d, $), H(this, o, f.$lazyInstance$[o], e); };
                f.$lazyInstance$ ? u() : f.$onReadyPromise$.then(() => u());
            } } });
    } }), n & 1) {
        let o = new Map;
        l.attributeChangedCallback = function ($, i, c) { h.jmp(() => { var d; let f = o.get($); if (this.hasOwnProperty(f) && G.lazyLoad)
            c = this[f], delete this[f];
        else {
            if (l.hasOwnProperty(f) && typeof this[f] == "number" && this[f] == c)
                return;
            if (f == null) {
                let p = E(this), v = p?.$flags$;
                if (v && !(v & 8) && v & 128 && c !== i) {
                    let S = p.$lazyInstance$, y = (d = e.$watchers$) == null ? void 0 : d[$];
                    y?.forEach(w => { S[w] != null && S[w].call(S, c, i, $); });
                }
                return;
            }
        } let u = Object.getOwnPropertyDescriptor(l, f); c = c === null && typeof this[f] == "boolean" ? !1 : c, c !== this[f] && (!u.get || u.set) && (this[f] = c); }); }, t.observedAttributes = Array.from(new Set([...Object.keys((r = e.$watchers$) != null ? r : {}), ...a.filter(([$, i]) => i[0] & 15).map(([$, i]) => { var c; let d = i[1] || $; return o.set(d, $), i[0] & 512 && ((c = e.$attrsToReflect$) == null || c.push([$, d])), d; })]));
    }
} return t; }, re = (t, e, n, s) => L(null, null, function* () { let r; if ((e.$flags$ & 32) === 0) {
    if (e.$flags$ |= 32, n.$lazyBundleId$) {
        let $ = It(n, e);
        if ($ && "then" in $) {
            let c = Dt();
            r = yield $, c();
        }
        else
            r = $;
        if (!r)
            throw new Error(`Constructor for "${n.$tagName$}#${e.$modeName$}" was not found`);
        r.isProxied || (n.$watchers$ = r.watchers, Et(r, n, 2), r.isProxied = !0);
        let i = _("createInstance", n.$tagName$);
        e.$flags$ |= 8;
        try {
            new r(e);
        }
        catch (c) {
            T(c, t);
        }
        e.$flags$ &= -9, e.$flags$ |= 128, i(), W(e.$lazyInstance$, t);
    }
    else {
        r = t.constructor;
        let $ = t.localName;
        customElements.whenDefined($).then(() => e.$flags$ |= 128);
    }
    if (r && r.style) {
        let $;
        typeof r.style == "string" && ($ = r.style);
        let i = ft(n);
        if (!O.has(i)) {
            let c = _("registerStyles", n.$tagName$);
            Ct(i, $, !!(n.$flags$ & 1)), c();
        }
    }
} let l = e.$ancestorComponent$, a = () => J(e, !0); l && l["s-rc"] ? l["s-rc"].push(a) : a(); }), W = (t, e) => { x(t, "connectedCallback", void 0, e); }, oe = t => { if ((h.$flags$ & 1) === 0) {
    let e = E(t), n = e.$cmpMeta$, s = _("connectedCallback", n.$tagName$);
    if (e.$flags$ & 1)
        e?.$lazyInstance$ ? W(e.$lazyInstance$, t) : e?.$onReadyPromise$ && e.$onReadyPromise$.then(() => W(e.$lazyInstance$, t));
    else {
        e.$flags$ |= 1;
        {
            let r = t;
            for (; r = r.parentNode || r.host;)
                if (r["s-p"]) {
                    yt(e, e.$ancestorComponent$ = r);
                    break;
                }
        }
        n.$members$ && Object.entries(n.$members$).map(([r, [l]]) => { if (l & 31 && t.hasOwnProperty(r)) {
            let a = t[r];
            delete t[r], t[r] = a;
        } }), re(t, e, n);
    }
    s();
} }, ot = (t, e) => { x(t, "disconnectedCallback", void 0, e || t); }, le = t => L(null, null, function* () { if ((h.$flags$ & 1) === 0) {
    let e = E(t);
    e?.$lazyInstance$ ? ot(e.$lazyInstance$, t) : e?.$onReadyPromise$ && e.$onReadyPromise$.then(() => ot(e.$lazyInstance$, t));
} A.has(t) && A.delete(t), t.shadowRoot && A.has(t.shadowRoot) && A.delete(t.shadowRoot); }), ue = (t, e = {}) => { var n; if (!g.document) {
    console.warn("Stencil: No document found. Skipping bootstrapping lazy components.");
    return;
} let s = _(), r = [], l = e.exclude || [], a = g.customElements, o = g.document.head, $ = o.querySelector("meta[charset]"), i = g.document.createElement("style"), c = [], d, f = !0; Object.assign(h, e), h.$resourcesUrl$ = new URL(e.resourcesUrl || "./", g.document.baseURI).href; let u = !1; if (t.map(p => { p[1].map(v => { var S; let y = { $flags$: v[0], $tagName$: v[1], $members$: v[2], $listeners$: v[3] }; y.$flags$ & 4 && (u = !0), y.$members$ = v[2], y.$attrsToReflect$ = [], y.$watchers$ = (S = v[4]) != null ? S : {}; let w = y.$tagName$, kt = class extends HTMLElement {
    constructor(k) { if (super(k), this.hasRegisteredEventListeners = !1, k = this, Tt(k, y), y.$flags$ & 1) {
        if (!k.shadowRoot)
            qt.call(k, y);
        else if (k.shadowRoot.mode !== "open")
            throw new Error(`Unable to re-use existing shadow root for ${y.$tagName$}! Mode is set to ${k.shadowRoot.mode} but Stencil only supports open shadow roots.`);
    } }
    connectedCallback() { E(this), this.hasRegisteredEventListeners || (this.hasRegisteredEventListeners = !0), d && (clearTimeout(d), d = null), f ? c.push(this) : h.jmp(() => oe(this)); }
    disconnectedCallback() { h.jmp(() => le(this)), h.raf(() => { var k; let I = E(this), Q = c.findIndex(_t => _t === this); Q > -1 && c.splice(Q, 1), ((k = I?.$vnode$) == null ? void 0 : k.$elm$) instanceof Node && !I.$vnode$.$elm$.isConnected && delete I.$vnode$.$elm$; }); }
    componentOnReady() { return E(this).$onReadyPromise$; }
}; y.$lazyBundleId$ = p[0], !l.includes(w) && !a.get(w) && (r.push(w), a.define(w, Et(kt, y, 1))); }); }), r.length > 0 && (u && (i.textContent += lt), i.textContent += r.sort() + Lt, i.innerHTML.length)) {
    i.setAttribute("data-styles", "");
    let p = (n = h.$nonce$) != null ? n : at(g.document);
    p != null && i.setAttribute("nonce", p), o.insertBefore(i, $ ? $.nextSibling : o.firstChild);
} f = !1, c.length ? c.map(p => p.connectedCallback()) : h.jmp(() => d = setTimeout(St, 30)), s(); }, pe = t => h.$nonce$ = t;
export { ae as a, ce as b, fe as c, Xt as d, Yt as e, de as f, ue as g, pe as h };
/*! Bundled license information:

ionicons/dist/esm/index-Z3yp5Yym.js:
  (*!__STENCIL_STATIC_IMPORT_SWITCH__*)
*/
