import { a as p } from "@nf-internal/chunk-C4FLJMU7";
import { computed as B } from "@angular/core";
import { signalStoreFeature as v, withState as A, withComputed as b } from "@ngrx/signals";
var d = (function (t) { return t[t.None = 0] = "None", t[t.Entities = 1] = "Entities", t[t.Both = 2] = "Both", t; })(d || {}), N = t => t.id;
function l(t) { return t?.selectId ?? N; }
function u(t) { let n = t?.collection, s = n === void 0 ? "entityMap" : `${n}EntityMap`, i = n === void 0 ? "ids" : `${n}Ids`, e = n === void 0 ? "entities" : `${n}Entities`; return { entityMapKey: s, idsKey: i, entitiesKey: e }; }
function a(t, n) { return { entityMap: p({}, t[n.entityMapKey]), ids: [...t[n.idsKey]] }; }
function y(t, n, s) { switch (s) {
    case d.Both: return { [n.entityMapKey]: t.entityMap, [n.idsKey]: t.ids };
    case d.Entities: return { [n.entityMapKey]: t.entityMap };
    default: return {};
} }
function K(t, n, s, i = !1) { let e = s(n); return t.entityMap[e] ? d.None : (t.entityMap[e] = n, i ? t.ids.unshift(e) : t.ids.push(e), d.Both); }
function m(t, n, s, i = !1) { let e = d.None; for (let o of n) {
    let c = K(t, o, s, i);
    c === d.Both && (e = c);
} return e; }
function h(t, n, s, i = !0) { let e = s(n); return t.entityMap[e] ? (t.entityMap[e] = i ? n : p(p({}, t.entityMap[e]), n), d.Entities) : (t.entityMap[e] = n, t.ids.push(e), d.Both); }
function I(t, n, s, i = !0) { let e = d.None; for (let o of n) {
    let c = h(t, o, s, i);
    e !== d.Both && (e = c);
} return e; }
function w(t, n) { let s = Array.isArray(n) ? n : t.ids.filter(e => n(t.entityMap[e])), i = d.None; for (let e of s)
    t.entityMap[e] && (delete t.entityMap[e], i = d.Both); return i === d.Both && (t.ids = t.ids.filter(e => e in t.entityMap)), i; }
function S(t, n, s, i) { let e = Array.isArray(n) ? n : t.ids.filter(r => n(t.entityMap[r])), o, c = d.None; for (let r of e) {
    let M = t.entityMap[r];
    if (M) {
        let E = typeof s == "function" ? s(M) : s;
        t.entityMap[r] = p(p({}, M), E), c = d.Entities;
        let f = i(t.entityMap[r]);
        f !== r && (t.entityMap[f] = t.entityMap[r], delete t.entityMap[r], o = o || {}, o[r] = f);
    }
} return o && (t.ids = t.ids.map(r => o[r] ?? r), c = d.Both), c; }
function k(t, n) { let s = l(n), i = u(n); return e => { let o = a(e, i), c = K(o, t, s); return y(o, i, c); }; }
function x(t, n) { let s = l(n), i = u(n); return e => { let o = a(e, i), c = m(o, t, s); return y(o, i, c); }; }
function C(t, n) { let s = l(n), i = u(n); return e => { let o = a(e, i), c = K(o, t, s, !0); return y(o, i, c); }; }
function R(t, n) { let s = l(n), i = u(n); return e => { let o = a(e, i), c = [], r = new Set; for (let E of t) {
    let f = s(E);
    r.has(f) || (c.unshift(E), r.add(f));
} let M = m(o, c, s, !0); return y(o, i, M); }; }
function j(t, n) { let s = u(n); return i => { let e = a(i, s), o = w(e, [t]); return y(e, s, o); }; }
function q(t, n) { let s = u(n); return i => { let e = a(i, s), o = w(e, t); return y(e, s, o); }; }
function F(t) { let n = u(t); return () => ({ [n.entityMapKey]: {}, [n.idsKey]: [] }); }
function U(t, n) { let s = l(n), i = u(n); return e => { let o = a(e, i), c = h(o, t, s); return y(o, i, c); }; }
function z(t, n) { let s = l(n), i = u(n); return e => { let o = a(e, i), c = I(o, t, s); return y(o, i, c); }; }
function G(t, n) { let s = l(n), i = u(n); return () => { let e = { entityMap: {}, ids: [] }; return I(e, t, s), { [i.entityMapKey]: e.entityMap, [i.idsKey]: e.ids }; }; }
function H(t, n) { let s = l(n), i = u(n); return e => { let o = a(e, i), c = S(o, [t.id], t.changes, s); return y(o, i, c); }; }
function J(t, n) { let s = l(n), i = u(n), e = "ids" in t ? t.ids : t.predicate; return o => { let c = a(o, i), r = S(c, e, t.changes, s); return y(c, i, r); }; }
function L(t, n) { let s = l(n), i = u(n); return e => { let o = a(e, i), c = S(o, e[i.idsKey], t, s); return y(o, i, c); }; }
function Q(t, n) { let s = l(n), i = u(n); return e => { let o = a(e, i), c = h(o, t, s, !1); return y(o, i, c); }; }
function T(t, n) { let s = l(n), i = u(n); return e => { let o = a(e, i), c = I(o, t, s, !1); return y(o, i, c); }; }
function V(t) { return t; }
function W(t) { let { entityMapKey: n, idsKey: s, entitiesKey: i } = u(t); return v(A({ [n]: {}, [s]: [] }), b(e => ({ [i]: B(() => { let o = e[n](); return e[s]().map(r => o[r]); }) }))); }
export { x as addEntities, k as addEntity, V as entityConfig, R as prependEntities, C as prependEntity, F as removeAllEntities, q as removeEntities, j as removeEntity, G as setAllEntities, z as setEntities, U as setEntity, L as updateAllEntities, J as updateEntities, H as updateEntity, T as upsertEntities, Q as upsertEntity, W as withEntities };
