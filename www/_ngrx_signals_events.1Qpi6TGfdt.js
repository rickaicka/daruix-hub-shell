import { a, b as d, e as j } from "@nf-internal/chunk-C4FLJMU7";
import * as h from "@angular/core";
import { inject as u, Injector as x, untracked as m } from "@angular/core";
import { Subject as C, merge as D, filter as P, map as S, queueScheduler as $, tap as E } from "rxjs";
import { takeUntilDestroyed as A } from "@angular/core/rxjs-interop";
import { signalStoreFeature as I, type as M, withHooks as F, getState as G, patchState as U } from "@ngrx/signals";
function Z(...e) { return { reducer: e.pop(), events: e }; }
var f = Symbol(""), g = Symbol(""), v = class {
    [f] = new C;
    events$;
    constructor(n) { let t = u(n, { skipSelf: !0, optional: !0 }); this.events$ = t ? D(t.events$, this[f]) : this[f].asObservable(); }
    on(...n) { return this.events$.pipe(H(n), Y()); }
}, O = (() => { class e extends v {
    constructor() { super(e); }
    static \u0275fac = function (r) { return new (r || e); };
    static \u0275prov = h.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })(), y = (() => { class e extends v {
    constructor() { super(e); }
    static \u0275fac = function (r) { return new (r || e); };
    static \u0275prov = h.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })();
function H(e) { if (e.length === 0)
    return t => t; let n = V(e); return P(({ type: t }) => !!n[t]); }
function V(e) { return e.reduce((n, t) => d(a({}, n), { [t.type]: t }), {}); }
function Y() { return S(n => { var e = j(n, []); return Object.defineProperty(e, g, { value: e.type }), e; }); }
var b = (() => { class e {
    reducerEvents = u(y);
    events = u(O);
    parentDispatcher = u(e, { skipSelf: !0, optional: !0 });
    dispatch(t, r) { this.parentDispatcher && q(r) ? this.parentDispatcher.dispatch(t, r.scope === "global" ? r : void 0) : (this.reducerEvents[f].next(t), $.schedule(() => this.events[f].next(t))); }
    static \u0275fac = function (r) { return new (r || e); };
    static \u0275prov = h.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })();
function _() { return [O, y, b]; }
function q(e) { return e?.scope === "parent" || e?.scope === "global"; }
function R(e) { let n = t => ({ type: e, payload: t }); return n.type = e, n; }
function ee(e) { return Object.entries(e.events).reduce((n, [t]) => { let r = `[${e.source}] ${t}`; return d(a({}, n), { [t]: R(r) }); }, {}); }
function z(e) { return { scope: e }; }
function te(e) { return S(n => [n, z(e)]); }
function ne(e, n) { let r = (n?.injector ?? u(x)).get(b), s = {}, i = c => (s[c.scope] || (s[c.scope] = Object.entries(e).reduce((l, [k, w]) => d(a({}, l), { [k]: T => m(() => r.dispatch(w(T), c)) }), {})), s[c.scope]), o = i({ scope: "self" }), p = Object.keys(o).reduce((c, l) => d(a({}, c), { [l]: { value: o[l], enumerable: !0 } }), {}); return Object.defineProperties(i, p), i; }
function B(e) { return typeof e == "object" && e !== null && "type" in e; }
function J(e) { return I(M(), F({ onInit(n, t = u(b)) { let r = e(n), s = Object.values(r).map(i => i.pipe(E(o => { let [p, c] = Array.isArray(o) ? o : [o]; B(p) && !(g in p) && t.dispatch(p, c); }))); D(...s).pipe(A()).subscribe(); } })); }
function re(...e) { return I({ state: M() }, J((n, t = u(y)) => e.map(r => t.on(...r.events).pipe(E(s => { let i = m(() => G(n)), o = r.reducer(s, i), p = Array.isArray(o) ? o : [o]; U(n, ...p); }))))); }
export { b as Dispatcher, O as Events, y as ReducerEvents, R as event, ee as eventGroup, ne as injectDispatch, te as mapToScope, Z as on, _ as provideDispatcher, z as toScope, J as withEventHandlers, re as withReducer };
