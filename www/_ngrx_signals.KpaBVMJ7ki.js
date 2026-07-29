import { a as o, b as u } from "@nf-internal/chunk-C4FLJMU7";
import * as E from "@angular/core";
import { untracked as S, isSignal as h, computed as m, inject as w, Injector as M, effect as W, DestroyRef as D, signal as k, linkedSignal as A } from "@angular/core";
var x = Symbol("");
function y(n) { return new Proxy(n, { has(e, t) { return !!this.get(e, t, void 0); }, get(e, t) { let i = S(e); return !U(i) || !(t in i) ? (h(e[t]) && e[t][x] && delete e[t], e[t]) : (h(e[t]) || (Object.defineProperty(e, t, { value: m(() => e()[t]), configurable: !0 }), e[t][x] = !0), y(e[t])); } }); }
var T = [WeakSet, WeakMap, Promise, Date, Error, RegExp, ArrayBuffer, DataView, Function];
function U(n) { if (n === null || typeof n != "object" || q(n))
    return !1; let e = Object.getPrototypeOf(n); if (e === Object.prototype)
    return !0; for (; e && e !== Object.prototype;) {
    if (T.includes(e.constructor))
        return !1;
    e = Object.getPrototypeOf(e);
} return e === Object.prototype; }
function q(n) { return typeof n?.[Symbol.iterator] == "function"; }
function J(n) { return y(m(n)); }
function Q(n, e) { let t = [], i = e?.injector ?? w(M), r = (s, c) => { if (N(s)) {
    let a = F(), d = c?.injector ?? a ?? i, g = W(() => { let l = s(); S(() => n(l)); }, { injector: d });
    return t.push(g), d.get(D).onDestroy(() => { let l = t.indexOf(g); l !== -1 && t.splice(l, 1); }), g;
}
else
    return n(s), { destroy: () => { } }; }; return r.destroy = () => t.forEach(s => s.destroy()), r; }
function F() { try {
    return w(M);
}
catch {
    return;
} }
function N(n) { return typeof n == "function"; }
var v = new WeakMap, f = Symbol("");
function C(n) { return h(n) && "set" in n && "update" in n && typeof n.set == "function" && typeof n.update == "function"; }
function X(n) { let e = n[f]; return Reflect.ownKeys(n[f]).every(t => C(e[t])); }
function Y(n, ...e) { let t = S(() => j(n)), i = e.reduce((c, a) => o(o({}, c), typeof a == "function" ? a(c) : a), t), r = n[f], s = Reflect.ownKeys(n[f]); for (let c of Reflect.ownKeys(i))
    if (s.includes(c)) {
        let a = c;
        t[a] !== i[a] && r[a].set(i[a]);
    } L(n); }
function j(n) { let e = n[f]; return Reflect.ownKeys(n[f]).reduce((t, i) => { let r = e[i](); return u(o({}, t), { [i]: r }); }, {}); }
function Z(n, e, t) { let r = (t?.injector ?? w(M)).get(D); _(n, e), e(j(n)); let s = () => G(n, e); return r.onDestroy(s), { destroy: s }; }
function b(n) { return v.get(n[f]) || []; }
function L(n) { let e = b(n); for (let t of e) {
    let i = S(() => j(n));
    t(i);
} }
function _(n, e) { let t = b(n); v.set(n[f], [...t, e]); }
function G(n, e) { let t = b(n); v.set(n[f], t.filter(i => i !== e)); }
function ee(n) { let e = Reflect.ownKeys(n), t = e.reduce((r, s) => u(o({}, r), { [s]: k(n[s]) }), {}), i = m(() => e.reduce((r, s) => u(o({}, r), { [s]: t[s]() }), {}), {}); Object.defineProperty(i, f, { value: t }); for (let r of e)
    Object.defineProperty(i, r, { value: y(t[r]) }); return i; }
function ne(...n) { let e = [...n], t = typeof e[0] == "function" ? {} : e.shift(), i = e; return (() => { class s {
    constructor() { let a = i.reduce((p, P) => P(p), z()), { stateSignals: d, props: g, methods: l, hooks: O } = a, I = o(o(o({}, d), g), l); this[f] = a[f]; for (let p of Reflect.ownKeys(I))
        this[p] = I[p]; let { onInit: R, onDestroy: K } = O; R && R(), K && w(D).onDestroy(K); }
    static \u0275fac = function (d) { return new (d || s); };
    static \u0275prov = E.\u0275\u0275defineInjectable({ token: s, factory: s.\u0275fac, providedIn: t.providedIn || null });
} return s; })(); }
function z() { return { [f]: {}, stateSignals: {}, props: {}, methods: {}, hooks: {} }; }
function te(...n) { let e = typeof n[0] == "function" ? n : n.slice(1); return t => e.reduce((i, r) => r(i), t); }
function oe() { }
function B(n) { return e => { let t = n(o(o(o({ [f]: e[f] }, e.stateSignals), e.props), e.methods)); return u(o({}, e), { props: o(o({}, e.props), t) }); }; }
function se(n) { return B(e => { let t = n(e); return Reflect.ownKeys(t).reduce((r, s) => { let c = t[s]; return u(o({}, r), { [s]: h(c) ? c : m(c) }); }, {}); }); }
function ie(n) { return e => { let t = o(o(o({ [f]: e[f] }, e.stateSignals), e.props), e.methods); return n(t)(e); }; }
function re(n) { return e => { let t = o(o(o({ [f]: e[f] }, e.stateSignals), e.props), e.methods), i = typeof n == "function" ? n(t) : n, r = (s, c) => c ? () => { s && s(), c(t); } : s; return u(o({}, e), { hooks: { onInit: r(e.hooks.onInit, i.onInit), onDestroy: r(e.hooks.onDestroy, i.onDestroy) } }); }; }
function ce(n) { return e => { let t = n(o(o({}, e.stateSignals), e.props)), i = Reflect.ownKeys(t), r = e[f], s = {}; for (let c of i) {
    let a = t[c];
    r[c] = C(a) ? a : A(a), s[c] = y(r[c]);
} return u(o({}, e), { stateSignals: o(o({}, e.stateSignals), s) }); }; }
function fe(n) { return e => { let t = n(o(o(o({ [f]: e[f] }, e.stateSignals), e.props), e.methods)); return u(o({}, e), { methods: o(o({}, e.methods), t) }); }; }
function ae(n) { return e => { let t = typeof n == "function" ? n() : n, i = Reflect.ownKeys(t), r = e[f], s = {}; for (let c of i)
    r[c] = k(t[c]), s[c] = y(r[c]); return u(o({}, e), { stateSignals: o(o({}, e.stateSignals), s) }); }; }
export { J as deepComputed, j as getState, X as isWritableStateSource, Y as patchState, Q as signalMethod, ee as signalState, ne as signalStore, te as signalStoreFeature, oe as type, Z as watchState, se as withComputed, ie as withFeature, re as withHooks, ce as withLinkedState, fe as withMethods, B as withProps, ae as withState };
