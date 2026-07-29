import { a as vi, c as Ip, d as Ep, e as Dp, g as Cp, h as Tp, i as Mp, j as Np, l as wp, o as wc } from "@nf-internal/chunk-P76HKCL2";
import { a as nT } from "@nf-internal/chunk-RKKP7VIB";
import { $ as Eo, $a as No, $b as T, $c as GC, A as gn, Aa as G, Ab as ue, Ac as ee, B as Yr, Ba as ce, Bb as Ya, Bc as Ze, C as Fa, Ca as le, Cb as si, Cc as De, D as yt, Da as se, Db as ep, Dc as gc, E as Lt, Ea as Ft, Eb as So, Ec as mc, F as mn, Fa as F, Fb as ai, Fc as yc, G as Kr, Ga as R, Gb as ci, Gc as gi, H as W, Ha as $e, Hb as li, Hc as Ro, I as Me, Ia as C, Ib as Ka, Ic as He, J as Be, Ja as Et, Jb as $t, Jc as UC, K as vo, Ka as Co, Kb as tp, Kc as fp, L as M, La as To, Lb as np, Lc as Ce, M as Ne, Ma as K, Mb as op, Mc as Ut, N as Bf, Na as Dt, Nb as rp, Nc as ko, O as Ha, Oa as vn, Ob as ip, Oc as pp, P as Pt, Pa as Ue, Pb as Ja, Pc as hp, Q as $f, Qa as _e, Qb as ui, Qc as zt, R as Le, Ra as za, Rb as bo, Rc as zC, S as Jr, Sa as Wa, Sb as Xa, Sc as gp, T as E, Ta as ii, Tb as ec, Tc as mp, U as ja, Ua as Mo, Ub as sp, Uc as vc, V as yn, Va as Se, Vb as tc, Vc as B, W as Xr, Wa as Ht, Wb as nc, Wc as Ic, X as Uf, Xa as ze, Xb as g, Xc as Ec, Y as Pe, Ya as I, Yb as N, Yc as Wt, Z as Va, Za as Ee, Zb as oc, Zc as Dc, _ as Io, _a as Fe, _b as rc, _c as WC, a as kC, aa as Ba, ab as jt, ac as ap, ad as Cc, b as xC, ba as zf, bb as H, bc as En, bd as yp, c as xa, ca as Do, cb as oe, cc as Ge, cd as qC, d as Wr, da as ei, db as X, dc as ic, dd as mi, e as w, ea as ti, eb as Ga, ec as sc, ed as Mt, f as Hf, fa as we, fb as ge, fc as ac, fd as Dn, g as Ie, ga as P, gb as In, gc as cc, gd as QC, h as Oa, ha as vt, hb as be, hc as lc, hd as yi, i as jf, ia as jC, ib as We, ic as de, id as Tc, j as Gr, ja as tt, jb as qa, jc as qe, jd as Mc, k as qr, ka as VC, kb as Zf, kc as uc, kd as ZC, l as OC, la as BC, lb as Ct, lc as pe, ld as Nc, m as La, ma as $a, mb as Qa, mc as Qe, md as YC, n as z, na as ni, nb as Za, nc as cp, nd as KC, o as Qr, oa as Wf, ob as k, oc as dc, od as Gt, p as Vf, pa as Gf, pb as wo, pc as lp, pd as JC, q as V, qa as oi, qb as Vt, qc as up, qd as XC, r as yo, ra as It, rb as re, rc as fc, rd as eT, s as LC, sa as Ua, sb as Yf, sc as di, sd as tT, t as PC, ta as qf, tb as Bt, tc as fi, td as vp, u as Zr, ua as ri, ub as Tt, uc as Ao, v as Pa, va as Qf, vb as _o, vc as pc, w as _, wa as $C, wb as fe, wc as pi, x as FC, xa as j, xb as Kf, xc as hc, y as HC, ya as m, yb as Jf, yc as hi, z as mt, za as b, zb as Xf, zc as dp } from "@nf-internal/chunk-LOL4GZEF";
import { B as Ra, E as ka, a as et, b as O, c as Lf, f as Aa, g as $r, n as go, p as Ur, r as zr, s as mo, w as Pf, x as Ff } from "@nf-internal/chunk-L6PGYJU6";
import { b as RC } from "@nf-internal/chunk-GJ3B5U6M";
import { a as Y, b as Xe, h as gt } from "@nf-internal/chunk-C4FLJMU7";
import { setActiveConsumer as Tn } from "@angular/core/primitives/signals";
import { Subject as Uh, Subscription as oT } from "rxjs";
import { map as rT } from "rxjs/operators";
function Ke(e) { return { toString: e }.toString(); }
var Mn = "__annotations__", Nn = "__parameters__", wn = "__prop__metadata__";
function hr(e, t, n, o, r) { return Ke(() => { let i = eu(t); function s(...a) { if (this instanceof s)
    return i.call(this, ...a), this; let c = new s(...a); return function (u) { return r && r(u, ...a), (u.hasOwnProperty(Mn) ? u[Mn] : Object.defineProperty(u, Mn, { value: [] })[Mn]).push(c), u; }; } return n && (s.prototype = Object.create(n.prototype)), s.prototype.ngMetadataName = e, s.annotationCls = s, s; }); }
function eu(e) { return function (...n) { if (e) {
    let o = e(...n);
    for (let r in o)
        this[r] = o[r];
} }; }
function qn(e, t, n) { return Ke(() => { let o = eu(t); function r(...i) { if (this instanceof r)
    return o.apply(this, i), this; let s = new r(...i); return a.annotation = s, a; function a(c, l, u) { let d = c.hasOwnProperty(Nn) ? c[Nn] : Object.defineProperty(c, Nn, { value: [] })[Nn]; for (; d.length <= u;)
    d.push(null); return (d[u] = d[u] || []).push(s), c; } } return r.prototype.ngMetadataName = e, r.annotationCls = r, r; }); }
function at(e, t, n, o) { return Ke(() => { let r = eu(t); function i(...s) { if (this instanceof i)
    return r.apply(this, s), this; let a = new i(...s); function c(l, u) { if (l === void 0)
    throw new Error("Standard Angular field decorators are not supported in JIT mode."); let d = l.constructor, f = d.hasOwnProperty(wn) ? d[wn] : Object.defineProperty(d, wn, { value: {} })[wn]; f[u] = f.hasOwnProperty(u) && f[u] || [], f[u].unshift(a); } return c; } return n && (i.prototype = Object.create(n.prototype)), i.prototype.ngMetadataName = e, i.annotationCls = i, i; }); }
var zh = yn(qn("Inject", e => ({ token: e })), -1), Wh = yn(qn("Optional"), 8), Gh = yn(qn("Self"), 2), qh = yn(qn("SkipSelf"), 4), Qh = yn(qn("Host"), 1);
function ne(e) { let t = Ie.ng; if (t && t.\u0275compilerFacade)
    return t.\u0275compilerFacade; throw new Error("JIT compiler unavailable"); }
var _p = { \u0275\u0275defineInjectable: V, \u0275\u0275defineInjector: yo, \u0275\u0275inject: Le, \u0275\u0275invalidFactoryDep: Jr, resolveForwardRef: z }, Zh = Function;
function Lo(e) { return typeof e == "function"; }
var iT = /^function\s+\S+\(\)\s*{[\s\S]+\.apply\(this,\s*(arguments|(?:[^()]+\(\[\],)?[^()]+\(arguments\).*)\)/, sT = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{/, aT = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(/, cT = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(\)\s*{[^}]*super\(\.\.\.arguments\)/;
function lT(e) { return iT.test(e) || cT.test(e) || sT.test(e) && !aT.test(e); }
var Bi = class {
    _reflect;
    constructor(t) { this._reflect = t || Ie.Reflect; }
    factory(t) { return (...n) => new t(...n); }
    _zipTypesAndAnnotations(t, n) { let o; typeof t > "u" ? o = Eo(n.length) : o = Eo(t.length); for (let r = 0; r < o.length; r++)
        typeof t > "u" ? o[r] = [] : t[r] && t[r] != Object ? o[r] = [t[r]] : o[r] = [], n && n[r] != null && (o[r] = o[r].concat(n[r])); return o; }
    _ownParameters(t, n) { let o = t.toString(); if (lT(o))
        return null; if (t.parameters && t.parameters !== n.parameters)
        return t.parameters; let r = t.ctorParameters; if (r && r !== n.ctorParameters) {
        let a = typeof r == "function" ? r() : r, c = a.map(u => u && u.type), l = a.map(u => u && _c(u.decorators));
        return this._zipTypesAndAnnotations(c, l);
    } let i = t.hasOwnProperty(Nn) && t[Nn], s = this._reflect && this._reflect.getOwnMetadata && this._reflect.getOwnMetadata("design:paramtypes", t); return s || i ? this._zipTypesAndAnnotations(s, i) : Eo(t.length); }
    parameters(t) { if (!Lo(t))
        return []; let n = Ii(t), o = this._ownParameters(t, n); return !o && n !== Object && (o = this.parameters(n)), o || []; }
    _ownAnnotations(t, n) { if (t.annotations && t.annotations !== n.annotations) {
        let o = t.annotations;
        return typeof o == "function" && o.annotations && (o = o.annotations), o;
    } return t.decorators && t.decorators !== n.decorators ? _c(t.decorators) : t.hasOwnProperty(Mn) ? t[Mn] : null; }
    annotations(t) { if (!Lo(t))
        return []; let n = Ii(t), o = this._ownAnnotations(t, n) || []; return (n !== Object ? this.annotations(n) : []).concat(o); }
    _ownPropMetadata(t, n) { if (t.propMetadata && t.propMetadata !== n.propMetadata) {
        let o = t.propMetadata;
        return typeof o == "function" && o.propMetadata && (o = o.propMetadata), o;
    } if (t.propDecorators && t.propDecorators !== n.propDecorators) {
        let o = t.propDecorators, r = {};
        return Object.keys(o).forEach(i => { r[i] = _c(o[i]); }), r;
    } return t.hasOwnProperty(wn) ? t[wn] : null; }
    propMetadata(t) { if (!Lo(t))
        return {}; let n = Ii(t), o = {}; if (n !== Object) {
        let i = this.propMetadata(n);
        Object.keys(i).forEach(s => { o[s] = i[s]; });
    } let r = this._ownPropMetadata(t, n); return r && Object.keys(r).forEach(i => { let s = []; o.hasOwnProperty(i) && s.push(...o[i]), s.push(...r[i]), o[i] = s; }), o; }
    ownPropMetadata(t) { return Lo(t) ? this._ownPropMetadata(t, Ii(t)) || {} : {}; }
    hasLifecycleHook(t, n) { return t instanceof Zh && n in t.prototype; }
};
function _c(e) { return e ? e.map(t => { let o = t.type.annotationCls, r = t.args ? t.args : []; return new o(...r); }) : []; }
function Ii(e) { let t = e.prototype ? Object.getPrototypeOf(e.prototype) : null; return (t ? t.constructor : null) || Object; }
function Yh(e, t, n, o) { t !== null ? t.applyValueToInputSignal(t, o) : e[n] = o; }
var $i = class {
    previousValue;
    currentValue;
    firstChange;
    constructor(t, n, o) { this.previousValue = t, this.currentValue = n, this.firstChange = o; }
    isFirstChange() { return this.firstChange; }
}, Kh = (() => { let e = () => Jh; return e.ngInherit = !0, e; })();
function Jh(e) { return e.type.prototype.ngOnChanges && (e.setInput = dT), uT; }
function uT() { let e = eg(this), t = e?.current; if (t) {
    let n = e.previous;
    if (n === we)
        e.previous = t;
    else
        for (let o in t)
            n[o] = t[o];
    e.current = null, this.ngOnChanges(t);
} }
function dT(e, t, n, o, r) { let i = this.declaredInputs[o], s = eg(e) || fT(e, { previous: we, current: null }), a = s.current || (s.current = {}), c = s.previous, l = c[i]; a[i] = new $i(l && l.currentValue, n, c === we), Yh(e, t, r, n); }
var Xh = "__ngSimpleChanges__";
function eg(e) { return e[Xh] || null; }
function fT(e, t) { return e[Xh] = t; }
var Sp = [];
var x = function (e, t = null, n) { for (let o = 0; o < Sp.length; o++) {
    let r = Sp[o];
    r(e, t, n);
} }, A = (function (e) { return e[e.TemplateCreateStart = 0] = "TemplateCreateStart", e[e.TemplateCreateEnd = 1] = "TemplateCreateEnd", e[e.TemplateUpdateStart = 2] = "TemplateUpdateStart", e[e.TemplateUpdateEnd = 3] = "TemplateUpdateEnd", e[e.LifecycleHookStart = 4] = "LifecycleHookStart", e[e.LifecycleHookEnd = 5] = "LifecycleHookEnd", e[e.OutputStart = 6] = "OutputStart", e[e.OutputEnd = 7] = "OutputEnd", e[e.BootstrapApplicationStart = 8] = "BootstrapApplicationStart", e[e.BootstrapApplicationEnd = 9] = "BootstrapApplicationEnd", e[e.BootstrapComponentStart = 10] = "BootstrapComponentStart", e[e.BootstrapComponentEnd = 11] = "BootstrapComponentEnd", e[e.ChangeDetectionStart = 12] = "ChangeDetectionStart", e[e.ChangeDetectionEnd = 13] = "ChangeDetectionEnd", e[e.ChangeDetectionSyncStart = 14] = "ChangeDetectionSyncStart", e[e.ChangeDetectionSyncEnd = 15] = "ChangeDetectionSyncEnd", e[e.AfterRenderHooksStart = 16] = "AfterRenderHooksStart", e[e.AfterRenderHooksEnd = 17] = "AfterRenderHooksEnd", e[e.ComponentStart = 18] = "ComponentStart", e[e.ComponentEnd = 19] = "ComponentEnd", e[e.DeferBlockStateStart = 20] = "DeferBlockStateStart", e[e.DeferBlockStateEnd = 21] = "DeferBlockStateEnd", e[e.DynamicComponentStart = 22] = "DynamicComponentStart", e[e.DynamicComponentEnd = 23] = "DynamicComponentEnd", e[e.HostBindingsUpdateStart = 24] = "HostBindingsUpdateStart", e[e.HostBindingsUpdateEnd = 25] = "HostBindingsUpdateEnd", e; })(A || {});
function pT(e, t, n) { let { ngOnChanges: o, ngOnInit: r, ngDoCheck: i } = t.type.prototype; if (o) {
    let s = Jh(t);
    (n.preOrderHooks ??= []).push(e, s), (n.preOrderCheckHooks ??= []).push(e, s);
} r && (n.preOrderHooks ??= []).push(0 - e, r), i && ((n.preOrderHooks ??= []).push(e, i), (n.preOrderCheckHooks ??= []).push(e, i)); }
function tg(e, t) { for (let n = t.directiveStart, o = t.directiveEnd; n < o; n++) {
    let i = e.data[n].type.prototype, { ngAfterContentInit: s, ngAfterContentChecked: a, ngAfterViewInit: c, ngAfterViewChecked: l, ngOnDestroy: u } = i;
    s && (e.contentHooks ??= []).push(-n, s), a && ((e.contentHooks ??= []).push(n, a), (e.contentCheckHooks ??= []).push(n, a)), c && (e.viewHooks ??= []).push(-n, c), l && ((e.viewHooks ??= []).push(n, l), (e.viewCheckHooks ??= []).push(n, l)), u != null && (e.destroyHooks ??= []).push(n, u);
} }
function Ai(e, t, n) { ng(e, t, 3, n); }
function Ri(e, t, n, o) { (e[b] & 3) === n && ng(e, t, n, o); }
function Sc(e, t) { let n = e[b]; (n & 3) === t && (n &= 16383, n += 1, e[b] = n); }
function ng(e, t, n, o) { let r = o !== void 0 ? e[vn] & 65535 : 0, i = o ?? -1, s = t.length - 1, a = 0; for (let c = r; c < s; c++)
    if (typeof t[c + 1] == "number") {
        if (a = t[c], o != null && a >= o)
            break;
    }
    else
        t[c] < 0 && (e[vn] += 65536), (a < i || i == -1) && (hT(e, n, t, c), e[vn] = (e[vn] & 4294901760) + c + 2), c++; }
function bp(e, t) { x(A.LifecycleHookStart, e, t); let n = O(null); try {
    t.call(e);
}
finally {
    O(n), x(A.LifecycleHookEnd, e, t);
} }
function hT(e, t, n, o) { let r = n[o] < 0, i = n[o + 1], s = r ? -n[o] : n[o], a = e[s]; r ? e[b] >> 14 < e[vn] >> 16 && (e[b] & 3) === t && (e[b] += 16384, bp(a, i)) : bp(a, i); }
var An = -1, Xt = class {
    factory;
    name;
    injectImpl;
    resolving = !1;
    canSeeViewProviders;
    multi;
    componentProviders;
    index;
    providerFactory;
    constructor(t, n, o, r) { this.factory = t, this.name = r, this.canSeeViewProviders = n, this.injectImpl = o; }
};
function ms(e) { return e != null && typeof e == "object" && (e.insertBeforeIndex === null || typeof e.insertBeforeIndex == "number" || Array.isArray(e.insertBeforeIndex)); }
function og(e) { return !!(e.type & 128); }
function gT(e) { return (e.flags & 8) !== 0; }
function mT(e) { return (e.flags & 16) !== 0; }
function yT(e, t, n) { let o = 0; for (; o < n.length;) {
    let r = n[o];
    if (typeof r == "number") {
        if (r !== 0)
            break;
        o++;
        let i = n[o++], s = n[o++], a = n[o++];
        e.setAttribute(t, s, a, i);
    }
    else {
        let i = r, s = n[++o];
        vT(i) ? e.setProperty(t, i, s) : e.setAttribute(t, i, s), o++;
    }
} return o; }
function rg(e) { return e === 3 || e === 4 || e === 6; }
function vT(e) { return e.charCodeAt(0) === 64; }
function Pn(e, t) { if (!(t === null || t.length === 0))
    if (e === null || e.length === 0)
        e = t.slice();
    else {
        let n = -1;
        for (let o = 0; o < t.length; o++) {
            let r = t[o];
            typeof r == "number" ? n = r : n === 0 || (n === -1 || n === 2 ? Ap(e, n, r, null, t[++o]) : Ap(e, n, r, null, null));
        }
    } return e; }
function Ap(e, t, n, o, r) { let i = 0, s = e.length; if (t === -1)
    s = -1;
else
    for (; i < e.length;) {
        let a = e[i++];
        if (typeof a == "number") {
            if (a === t) {
                s = -1;
                break;
            }
            else if (a > t) {
                s = i - 1;
                break;
            }
        }
    } for (; i < e.length;) {
    let a = e[i];
    if (typeof a == "number")
        break;
    if (a === n) {
        r !== null && (e[i + 1] = r);
        return;
    }
    i++, r !== null && i++;
} s !== -1 && (e.splice(s, 0, t), i = s + 1), e.splice(i++, 0, n), r !== null && e.splice(i++, 0, r); }
function ig(e) { return e !== An; }
function Ui(e) { return e & 32767; }
function IT(e) { return e >> 16; }
function zi(e, t) { let n = IT(e), o = t; for (; n > 0;)
    o = o[To], n--; return o; }
var Kc = !0;
function Wi(e) { let t = Kc; return Kc = e, t; }
var ET = 256, sg = ET - 1, ag = 5, DT = 0, Ye = {};
function CT(e, t, n) { let o; typeof n == "string" ? o = n.charCodeAt(0) || 0 : n.hasOwnProperty(Lt) && (o = n[Lt]), o == null && (o = n[Lt] = DT++); let r = o & sg, i = 1 << r; t.data[e + (r >> ag)] |= i; }
function Gi(e, t) { let n = cg(e, t); if (n !== -1)
    return n; let o = t[m]; o.firstCreatePass && (e.injectorIndex = t.length, bc(o.data, e), bc(t, null), bc(o.blueprint, null)); let r = tu(e, t), i = e.injectorIndex; if (ig(r)) {
    let s = Ui(r), a = zi(r, t), c = a[m].data;
    for (let l = 0; l < 8; l++)
        t[i + l] = a[s + l] | c[s + l];
} return t[i + 8] = r, i; }
function bc(e, t) { e.push(0, 0, 0, 0, 0, 0, 0, 0, t); }
function cg(e, t) { return e.injectorIndex === -1 || e.parent && e.parent.injectorIndex === e.injectorIndex || t[e.injectorIndex + 8] === null ? -1 : e.injectorIndex; }
function tu(e, t) { if (e.parent && e.parent.injectorIndex !== -1)
    return e.parent.injectorIndex; let n = 0, o = null, r = t; for (; r !== null;) {
    if (o = hg(r), o === null)
        return An;
    if (n++, r = r[To], o.injectorIndex !== -1)
        return o.injectorIndex | n << 16;
} return An; }
function Jc(e, t, n) { CT(e, t, n); }
function TT(e, t) { if (t === "class")
    return e.classes; if (t === "style")
    return e.styles; let n = e.attrs; if (n) {
    let o = n.length, r = 0;
    for (; r < o;) {
        let i = n[r];
        if (rg(i))
            break;
        if (i === 0)
            r = r + 2;
        else if (typeof i == "number")
            for (r++; r < o && typeof n[r] == "string";)
                r++;
        else {
            if (i === t)
                return n[r + 1];
            r = r + 2;
        }
    }
} return null; }
function lg(e, t, n) { if (n & 8 || e !== void 0)
    return e; Ha(t, "NodeInjector"); }
function ug(e, t, n, o) { if (n & 8 && o === void 0 && (o = null), (n & 3) === 0) {
    let r = e[R], i = Pt(void 0);
    try {
        return r ? r.get(t, o, n & 8) : $f(t, o, n & 8);
    }
    finally {
        Pt(i);
    }
} return lg(o, t, n); }
function dg(e, t, n, o = 0, r) { if (e !== null) {
    if (t[b] & 2048 && !(o & 2)) {
        let s = _T(e, t, n, o, Ye);
        if (s !== Ye)
            return s;
    }
    let i = fg(e, t, n, o, Ye);
    if (i !== Ye)
        return i;
} return ug(t, n, o, r); }
function fg(e, t, n, o, r) { let i = NT(n); if (typeof i == "function") {
    if (!pc(t, e, o))
        return o & 1 ? lg(r, n, o) : ug(t, n, o, r);
    try {
        let s;
        if (s = i(o), s == null && !(o & 8))
            Ha(n);
        else
            return s;
    }
    finally {
        hc();
    }
}
else if (typeof i == "number") {
    let s = null, a = cg(e, t), c = An, l = o & 1 ? t[K][le] : null;
    for ((a === -1 || o & 4) && (c = a === -1 ? tu(e, t) : t[a + 8], c === An || !kp(o, !1) ? a = -1 : (s = t[m], a = Ui(c), t = zi(c, t))); a !== -1;) {
        let u = t[m];
        if (Rp(i, a, u.data)) {
            let d = MT(a, t, n, s, o, l);
            if (d !== Ye)
                return d;
        }
        c = t[a + 8], c !== An && kp(o, t[m].data[a + 8] === l) && Rp(i, a, t) ? (s = u, a = Ui(c), t = zi(c, t)) : a = -1;
    }
} return r; }
function MT(e, t, n, o, r, i) { let s = t[m], a = s.data[e + 8], c = o == null ? ge(a) && Kc : o != s && (a.type & 3) !== 0, l = r & 1 && i === a, u = ki(a, s, n, c, l); return u !== null ? Qo(t, s, u, a, r) : Ye; }
function ki(e, t, n, o, r) { let i = e.providerIndexes, s = t.data, a = i & 1048575, c = e.directiveStart, l = e.directiveEnd, u = i >> 20, d = o ? a : a + u, f = r ? a + u : l; for (let p = d; p < f; p++) {
    let h = s[p];
    if (p < c && n === h || p >= c && h.type === n)
        return p;
} if (r) {
    let p = s[c];
    if (p && be(p) && p.type === n)
        return c;
} return null; }
function Qo(e, t, n, o, r) { let i = e[n], s = t.data; if (i instanceof Xt) {
    let a = i;
    if (a.resolving)
        throw Bf("");
    let c = Wi(a.canSeeViewProviders);
    a.resolving = !0;
    let l = s[n].type || s[n], u, d = a.injectImpl ? Pt(a.injectImpl) : null, f = pc(e, o, 0);
    try {
        i = e[n] = a.factory(void 0, r, s, e, o), t.firstCreatePass && n >= o.directiveStart && pT(n, s[n], t);
    }
    finally {
        d !== null && Pt(d), Wi(c), a.resolving = !1, hc();
    }
} return i; }
function NT(e) { if (typeof e == "string")
    return e.charCodeAt(0) || 0; let t = e.hasOwnProperty(Lt) ? e[Lt] : void 0; return typeof t == "number" ? t >= 0 ? t & sg : wT : t; }
function Rp(e, t, n) { let o = 1 << e; return !!(n[t + (e >> ag)] & o); }
function kp(e, t) { return !(e & 2) && !(e & 1 && t); }
var St = class {
    _tNode;
    _lView;
    constructor(t, n) { this._tNode = t, this._lView = n; }
    get(t, n, o) { return dg(this._tNode, this._lView, t, ja(o), n); }
};
function wT() { return new St(T(), g()); }
function pg(e) { return Ke(() => { let t = e.prototype.constructor, n = t[yt] || Xc(t), o = Object.prototype, r = Object.getPrototypeOf(e.prototype).constructor; for (; r && r !== o;) {
    let i = r[yt] || Xc(r);
    if (i && i !== n)
        return i;
    r = Object.getPrototypeOf(r);
} return i => new i; }); }
function Xc(e) { return Qr(e) ? () => { let t = Xc(z(e)); return t && t(); } : Xr(e); }
function _T(e, t, n, o, r) { let i = e, s = t; for (; i !== null && s !== null && s[b] & 2048 && !We(s);) {
    let a = fg(i, s, n, o | 2, Ye);
    if (a !== Ye)
        return a;
    let c = i.parent;
    if (!c) {
        let l = s[za];
        if (l) {
            let u = l.get(n, Ye, o & -5);
            if (u !== Ye)
                return u;
        }
        c = hg(s), s = s[To];
    }
    i = c;
} return r; }
function hg(e) { let t = e[m], n = t.type; return n === 2 ? t.declTNode : n === 1 ? e[le] : null; }
function ys(e) { return TT(T(), e); }
var gg = qn("Attribute", e => ({ attributeName: e, __NG_ELEMENT_ID__: () => ys(e) })), xp = null;
function nu() { return xp = xp || new Bi; }
function vs(e) { return mg(nu().parameters(e)); }
function mg(e) { return e.map(t => ST(t)); }
function ST(e) { let t = { token: null, attribute: null, host: !1, optional: !1, self: !1, skipSelf: !1 }; if (Array.isArray(e) && e.length > 0)
    for (let n = 0; n < e.length; n++) {
        let o = e[n];
        if (o === void 0)
            continue;
        let r = Object.getPrototypeOf(o);
        if (o instanceof Wh || r.ngMetadataName === "Optional")
            t.optional = !0;
        else if (o instanceof qh || r.ngMetadataName === "SkipSelf")
            t.skipSelf = !0;
        else if (o instanceof Gh || r.ngMetadataName === "Self")
            t.self = !0;
        else if (o instanceof Qh || r.ngMetadataName === "Host")
            t.host = !0;
        else if (o instanceof zh)
            t.token = o.token;
        else if (o instanceof gg) {
            if (o.attributeName === void 0)
                throw new w(-204, !1);
            t.attribute = o.attributeName;
        }
        else
            t.token = o;
    }
else
    e === void 0 || Array.isArray(e) && e.length === 0 ? t.token = null : t.token = e; return t; }
function bT(e, t) { let n = null, o = null; e.hasOwnProperty(Zr) || Object.defineProperty(e, Zr, { get: () => (n === null && (n = ne({ usage: 0, kind: "injectable", type: e }).compileInjectable(_p, `ng:///${e.name}/\u0275prov.js`, xT(e, t))), n) }), e.hasOwnProperty(yt) || Object.defineProperty(e, yt, { get: () => { if (o === null) {
        let r = ne({ usage: 0, kind: "injectable", type: e });
        o = r.compileFactory(_p, `ng:///${e.name}/\u0275fac.js`, { name: e.name, type: e, typeArgumentCount: 0, deps: vs(e), target: r.FactoryTarget.Injectable });
    } return o; }, configurable: !0 }); }
var AT = Oa({ provide: String, useValue: Oa });
function Op(e) { return e.useClass !== void 0; }
function RT(e) { return AT in e; }
function Lp(e) { return e.useFactory !== void 0; }
function kT(e) { return e.useExisting !== void 0; }
function xT(e, t) { let n = t || { providedIn: null }, o = { name: e.name, type: e, typeArgumentCount: 0, providedIn: n.providedIn }; return (Op(n) || Lp(n)) && n.deps !== void 0 && (o.deps = mg(n.deps)), Op(n) ? o.useClass = n.useClass : RT(n) ? o.useValue = n.useValue : Lp(n) ? o.useFactory = n.useFactory : kT(n) && (o.useExisting = n.useExisting), o; }
var OT = hr("Injectable", void 0, void 0, void 0, (e, t) => bT(e, t));
function LT() { return Qn(T(), g()); }
function Qn(e, t) { return new gr(re(e, t)); }
var gr = (() => { class e {
    nativeElement;
    constructor(n) { this.nativeElement = n; }
    static __NG_ELEMENT_ID__ = LT;
} return e; })();
function yg(e) { return e instanceof gr ? e.nativeElement : e; }
function PT() { return this._results[Symbol.iterator](); }
var qi = class {
    _emitDistinctChangesOnly;
    dirty = !0;
    _onDirty = void 0;
    _results = [];
    _changesDetected = !1;
    _changes = void 0;
    length = 0;
    first = void 0;
    last = void 0;
    get changes() { return this._changes ??= new Uh; }
    constructor(t = !1) { this._emitDistinctChangesOnly = t; }
    get(t) { return this._results[t]; }
    map(t) { return this._results.map(t); }
    filter(t) { return this._results.filter(t); }
    find(t) { return this._results.find(t); }
    reduce(t, n) { return this._results.reduce(t, n); }
    forEach(t) { this._results.forEach(t); }
    some(t) { return this._results.some(t); }
    toArray() { return this._results.slice(); }
    toString() { return this._results.toString(); }
    reset(t, n) { this.dirty = !1; let o = Pe(t); (this._changesDetected = !Uf(this._results, o, n)) && (this._results = o, this.length = o.length, this.last = o[this.length - 1], this.first = o[0]); }
    notifyOnChanges() { this._changes !== void 0 && (this._changesDetected || !this._emitDistinctChangesOnly) && this._changes.next(this); }
    onDirty(t) { this._onDirty = t; }
    setDirty() { this.dirty = !0, this._onDirty?.(); }
    destroy() { this._changes !== void 0 && (this._changes.complete(), this._changes.unsubscribe()); }
    [Symbol.iterator] = PT;
}, un = "ngSkipHydration", FT = "ngskiphydration";
function ou(e) { let t = e.mergedAttrs; if (t === null)
    return !1; for (let n = 0; n < t.length; n += 2) {
    let o = t[n];
    if (typeof o == "number")
        return !1;
    if (typeof o == "string" && o.toLowerCase() === FT)
        return !0;
} return !1; }
function vg(e) { return e.hasAttribute(un); }
function Zo(e) { return (e.flags & 128) === 128; }
function Zn(e) { if (Zo(e))
    return !0; let t = e.parent; for (; t;) {
    if (Zo(e) || ou(t))
        return !0;
    t = t.parent;
} return !1; }
function Ig(e) { return Zo(e) || ou(e) || Zn(e); }
var Is = (function (e) { return e[e.OnPush = 0] = "OnPush", e[e.Eager = 1] = "Eager", e[e.Default = 1] = "Default", e; })(Is || {}), Es = new Map, HT = 0;
function jT() { return HT++; }
function VT(e) { Es.set(e[_e], e); }
function Eg(e) { return Es.get(e) || null; }
function el(e) { Es.delete(e[_e]); }
function BT() { return Es; }
var Qi = class {
    lViewId;
    nodeIndex;
    native;
    component;
    directives;
    localRefs;
    get lView() { return Eg(this.lViewId); }
    constructor(t, n, o) { this.lViewId = t, this.nodeIndex = n, this.native = o; }
};
function ve(e) { let t = xi(e); if (t) {
    if (oe(t)) {
        let n = t, o, r, i;
        if (Dg(e)) {
            if (o = WT(n, e), o == -1)
                throw new Error("The provided component was not found in the application");
            r = e;
        }
        else if (UT(e)) {
            if (o = GT(n, e), o == -1)
                throw new Error("The provided directive was not found in the application");
            i = Cg(o, n);
        }
        else if (o = Fp(n, e), o == -1)
            return null;
        let s = k(n[o]), a = xi(s), c = a && !Array.isArray(a) ? a : Pp(n, o, s);
        if (r && c.component === void 0 && (c.component = r, Ae(c.component, c)), i && c.directives === void 0) {
            c.directives = i;
            for (let l = 0; l < i.length; l++)
                Ae(i[l], c);
        }
        Ae(c.native, c), t = c;
    }
}
else {
    let n = e, o = n;
    for (; o = o.parentNode;) {
        let r = xi(o);
        if (r) {
            let i = Array.isArray(r) ? r : r.lView;
            if (!i)
                return null;
            let s = Fp(i, n);
            if (s >= 0) {
                let a = k(i[s]), c = Pp(i, s, a);
                Ae(a, c), t = c;
                break;
            }
        }
    }
} return t || null; }
function Pp(e, t, n) { return new Qi(e[_e], t, n); }
var tl = "__ngContext__";
function Ae(e, t) { oe(t) ? (e[tl] = t[_e], VT(t)) : e[tl] = t; }
function xi(e) { let t = e[tl]; return typeof t == "number" ? Eg(t) : t || null; }
function $T(e) { let t = xi(e); return t ? oe(t) ? t : t.lView : null; }
function Dg(e) { return e && e.constructor && e.constructor.\u0275cmp; }
function UT(e) { return e && e.constructor && e.constructor.\u0275dir; }
function Fp(e, t) { let n = e[m]; for (let o = I; o < n.bindingStartIndex; o++)
    if (k(e[o]) === t)
        return o; return -1; }
function zT(e) { if (e.child)
    return e.child; if (e.next)
    return e.next; for (; e.parent && !e.parent.next;)
    e = e.parent; return e.parent && e.parent.next; }
function WT(e, t) { let n = e[m].components; if (n)
    for (let o = 0; o < n.length; o++) {
        let r = n[o];
        if (fe(r, e)[F] === t)
            return r;
    }
else if (fe(I, e)[F] === t)
    return I; return -1; }
function GT(e, t) { let n = e[m].firstChild; for (; n;) {
    let o = n.directiveStart, r = n.directiveEnd;
    for (let i = o; i < r; i++)
        if (e[i] === t)
            return n.index;
    n = zT(n);
} return -1; }
function Cg(e, t) { let n = t[m].data[e]; if (n.directiveStart === 0)
    return P; let o = []; for (let r = n.directiveStart; r < n.directiveEnd; r++) {
    let i = t[r];
    Dg(i) || o.push(i);
} return o; }
function qT(e, t) { let n = t[m].data[e]; return ge(n) ? t[n.directiveStart + n.componentOffset] : null; }
function QT(e, t) { let n = e[m].data[t]; if (n && n.localNames) {
    let o = {}, r = n.index + 1;
    for (let i = 0; i < n.localNames.length; i += 2)
        o[n.localNames[i]] = e[r], r++;
    return o;
} return null; }
function Tg(e) { return Ng(e[Et]); }
function Mg(e) { return Ng(e[ce]); }
function Ng(e) { for (; e !== null && !X(e);)
    e = e[ce]; return e; }
function Hp(e) { let t = ve(e); if (t === null)
    return null; if (t.component === void 0) {
    let n = t.lView;
    if (n === null)
        return null;
    t.component = qT(t.nodeIndex, n);
} return t.component; }
function ZT(e) { iM(e); let t = ve(e), n = t ? t.lView : null; return n === null ? null : n[F]; }
function YT(e) { let t = ve(e), n = t ? t.lView : null; if (n === null)
    return null; let o; for (; n[m].type === 2 && (o = $t(n));)
    n = o; return We(n) ? null : n[F]; }
function KT(e) { let t = ve(e), n = t ? t.lView : null; if (n === null)
    return Ce.NULL; let o = n[m].data[t.nodeIndex]; return new St(o, n); }
function JT(e) { let t = ve(e), n = t ? t.lView : null; if (n === null)
    return []; let o = n[m], r = o.data[t.nodeIndex], i = [], s = r.providerIndexes & 1048575, a = r.directiveEnd; for (let c = s; c < a; c++) {
    let l = o.data[c];
    rM(l) && (l = l.type), i.push(l);
} return i; }
function XT(e) { if (e instanceof Text)
    return []; let t = ve(e), n = t ? t.lView : null; if (n === null)
    return []; let o = n[m], r = t.nodeIndex; return o?.data[r] ? (t.directives === void 0 && (t.directives = Cg(r, n)), t.directives === null ? [] : [...t.directives]) : []; }
var wg = (function (e) { return e[e.Default = 0] = "Default", e[e.OnPush = 1] = "OnPush", e; })(wg || {}), _g = (function (e) { return e[e.Emulated = 0] = "Emulated", e[e.None = 1] = "None", e; })(_g || {});
function eM(e) { let t = ve(e); if (t === null)
    return {}; if (t.localRefs === void 0) {
    let n = t.lView;
    if (n === null)
        return {};
    t.localRefs = QT(n, t.nodeIndex);
} return t.localRefs || {}; }
function tM(e) { return ve(e).native; }
function nM(e) { let t = ve(e), n = t === null ? null : t.lView; if (n === null)
    return []; let o = n[m], r = n[Ft], i = o.cleanup, s = []; if (i && r)
    for (let a = 0; a < i.length;) {
        let c = i[a++], l = i[a++];
        if (typeof c == "string") {
            let u = c, d = k(n[l]), f = r[i[a++]], p = i[a++], h = typeof p == "boolean" || p >= 0 ? "dom" : "output", y = typeof p == "boolean" ? p : !1;
            e == d && s.push({ element: e, name: u, callback: f, useCapture: y, type: h });
        }
    } return s.sort(oM), s; }
function oM(e, t) { return e.name == t.name ? 0 : e.name < t.name ? -1 : 1; }
function rM(e) { return e.type !== void 0 && e.declaredInputs !== void 0 && e.resolveHostDirectives !== void 0; }
function iM(e) { if (typeof Element < "u" && !(e instanceof Element))
    throw new Error("Expecting instance of DOM Element"); }
var nl;
function sM(e) { nl = e; }
function Ds() { if (nl !== void 0)
    return nl; if (typeof document < "u")
    return document; throw new w(210, !1); }
var ct = new _("", { factory: () => aM }), aM = "ng";
var ru = new _(""), cM = new _("", { providedIn: "platform", factory: () => "unknown" }), lM = new _(""), uM = new _("", { factory: () => E(Ut).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce") || null }), Sg = { breakpoints: [16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840], placeholderResolution: 30, disableImageSizeWarning: !1, disableImageLazyLoadWarning: !1 }, dM = new _("", { factory: () => Sg });
function fM(e) { return e; }
var Yn = (() => { class e {
    static \u0275prov = V({ token: e, providedIn: "root", factory: () => { let n = new e; return (typeof ngServerMode > "u" || !ngServerMode) && (n.store = bg(E(Ut), E(ct))), n; } });
    store = {};
    onSerializeCallbacks = {};
    get(n, o) { return this.store[n] !== void 0 ? this.store[n] : o; }
    set(n, o) { this.store[n] = o; }
    remove(n) { delete this.store[n]; }
    hasKey(n) { return this.store.hasOwnProperty(n); }
    get isEmpty() { return Object.keys(this.store).length === 0; }
    onSerialize(n, o) { this.onSerializeCallbacks[n] = o; }
    toJson() { for (let n in this.onSerializeCallbacks)
        if (this.onSerializeCallbacks.hasOwnProperty(n))
            try {
                this.store[n] = this.onSerializeCallbacks[n]();
            }
            catch (o) {
                console.warn("Exception in onSerialize callback: ", o);
            } return JSON.stringify(this.store).replace(/</g, "\\u003C").replace(/\//g, "\\u002F"); }
} return e; })();
function bg(e, t) { let n = e.getElementById(t + "-state"); if (n?.tagName === "SCRIPT" && n.textContent)
    try {
        return JSON.parse(n.textContent);
    }
    catch (o) {
        console.warn("Exception while restoring TransferState for app " + t, o);
    } return {}; }
var iu = "h", su = "b", Ag = "f", Rg = "n", mr = "e", Cs = "t", Kn = "c", yr = "x", it = "r", Ts = "i", vr = "n", Jn = "d", Ms = "l", Ns = "di", Ir = "s", au = "p", Er = "t", dn = new _(""), kg = !1, cu = new _("", { factory: () => kg }), lu = new _(""), ws = new _(""), uu = !1, xg = new _("", { factory: () => [] }), du = new _(""), Dr = new _("", { factory: () => new Map }), pM = new _(""), Zi = { passive: !0, capture: !0 }, Ac = new WeakMap, Rc = new WeakMap, _t = new WeakMap, Yi = ["click", "keydown"], Ki = ["mouseenter", "mouseover", "focusin"], Ei = new Map, Yo = class {
    callbacks = new Set;
    listener = () => { for (let t of this.callbacks)
        t(); };
};
function Og(e, t) { let n = Rc.get(e); if (!n) {
    n = new Yo, Rc.set(e, n);
    for (let o of Yi)
        e.addEventListener(o, n.listener, Zi);
} return n.callbacks.add(t), () => { let { callbacks: o, listener: r } = n; if (o.delete(t), o.size === 0) {
    Rc.delete(e);
    for (let i of Yi)
        e.removeEventListener(i, r, Zi);
} }; }
function Lg(e, t) { let n = Ac.get(e); if (!n) {
    n = new Yo, Ac.set(e, n);
    for (let o of Ki)
        e.addEventListener(o, n.listener, Zi);
} return n.callbacks.add(t), () => { let { callbacks: o, listener: r } = n; if (o.delete(t), o.size === 0) {
    for (let i of Ki)
        e.removeEventListener(i, r, Zi);
    Ac.delete(e);
} }; }
function hM(e) { let t = Pg(e); return new IntersectionObserver(n => { for (let o of n)
    o.isIntersecting && _t.has(o.target) && _t.get(o.target)?.get(t)?.listener(); }, e); }
function gM(e, t, n, o) { let r = Pg(o), i = _t.get(e)?.get(r); Ei.has(r) || Ei.set(r, { observer: n(o), count: 0 }); let s = Ei.get(r); if (!i) {
    i = new Yo, s.observer.observe(e);
    let a = _t.get(e);
    a ? a.set(r, i) : (a = new Map, _t.set(e, a)), a.set(r, i), s.count++;
} return i.callbacks.add(t), () => { if (_t.get(e)?.has(r)) {
    if (i.callbacks.delete(t), i.callbacks.size === 0) {
        s.observer.unobserve(e), s.count--;
        let a = _t.get(e);
        a && (a.delete(r), a.size === 0 && _t.delete(e));
    }
    s.count === 0 && (s.observer.disconnect(), Ei.delete(r));
} }; }
function Pg(e) {
    return e ? `${e.rootMargin}/${typeof e.threshold == "number" ? e.threshold : e.threshold?.join(`
`)}` : "";
}
var Xn = "ngb";
function fu(e, t, n = null) { if (t.length === 0 || e.nodeType !== Node.ELEMENT_NODE)
    return; let o = e.getAttribute(vi.JSACTION), r = t.reduce((s, a) => (o?.indexOf(a) ?? -1) === -1 ? s + a + ":;" : s, ""); e.setAttribute(vi.JSACTION, `${o ?? ""}${r}`); let i = n ?? ""; i !== "" && r.length > 0 && e.setAttribute(Xn, i); }
var Fg = (e, t, n) => { let o = e, r = o.__jsaction_fns ?? new Map, i = r.get(t) ?? []; i.push(n), r.set(t, i), o.__jsaction_fns = r; }, pu = (e, t) => { let n = e, o = n.getAttribute(Xn) ?? "", r = t.get(o) ?? new Set; r.has(n) || r.add(n), t.set(o, r); };
function mM(e, t) { if (e.length > 0) {
    let n = [];
    for (let r of e)
        t.has(r) && (n = [...n, ...t.get(r)]);
    new Set(n).forEach(hu);
} }
var hu = e => { e.removeAttribute(vi.JSACTION), e.removeAttribute(Xn), e.__jsaction_fns = void 0; }, gu = new _("", { factory: () => ({}) }), ol = new WeakMap;
function yM(e, t) { if (e == null || typeof e != "object")
    return; let n = ol.get(e); n || (n = new WeakSet, ol.set(e, n)), n.add(t); }
function mu(e, t) { let n = t?.__jsaction_fns?.get(e.type); if (!(!n || !t?.isConnected) && !(t && ol.get(e)?.has(t)))
    for (let o of n)
        o(e); }
var rl = new Map;
function Hg(e, t) { return rl.set(e, t), () => rl.delete(e); }
var jp = !1, jg = (e, t, n, o) => { };
function vM(e, t, n, o) { jg(e, t, n, o); }
function Vg() { jp || (jg = (e, t, n, o) => { let r = e[R].get(ct); rl.get(r)?.(t, n, o); }, jp = !0); }
var lt = new _(""), Bg = (() => { class e {
    registry = new Map;
    cleanupFns = new Map;
    jsActionMap = E(Dr);
    contract = E(gu);
    add(n, o) { if (this.registry.set(n, o), this.awaitingCallbacks.has(n)) {
        let r = this.awaitingCallbacks.get(n);
        for (let i of r)
            i();
    } }
    get(n) { return this.registry.get(n) ?? null; }
    has(n) { return this.registry.has(n); }
    cleanup(n) { mM(n, this.jsActionMap); for (let o of n)
        this.registry.delete(o), this.jsActionMap.delete(o), this.invokeTriggerCleanupFns(o), this.hydrating.delete(o), this.awaitingCallbacks.delete(o); this.size === 0 && this.contract.instance?.cleanUp(); }
    get size() { return this.registry.size; }
    addCleanupFn(n, o) { let r = []; this.cleanupFns.has(n) && (r = this.cleanupFns.get(n)), r.push(o), this.cleanupFns.set(n, r); }
    invokeTriggerCleanupFns(n) { let o = this.cleanupFns.get(n) ?? []; for (let r of o)
        r(); this.cleanupFns.delete(n); }
    hydrating = new Map;
    awaitingCallbacks = new Map;
    awaitParentBlock(n, o) { let r = this.awaitingCallbacks.get(n) ?? []; r.push(o), this.awaitingCallbacks.set(n, r); }
    static \u0275prov = V({ token: e, providedIn: null, factory: () => new e });
} return e; })();
function eo(e) { return (e.flags & 32) === 32; }
var $g = "__nghData__", _s = $g, Ug = "__nghDeferData__", Ss = Ug;
function IM(e) { return e === $g || e === Ug; }
var Rn = "ngh", zg = "nghm", Wg = () => null;
function EM(e, t, n = !1) { let o = e.getAttribute(Rn); if (o == null)
    return null; let [r, i] = o.split("|"); if (o = n ? i : r, !o)
    return null; let s = i ? `|${i}` : "", a = n ? r : s, c = {}; if (o !== "") {
    let u = t.get(Yn, null, { optional: !0 });
    u !== null && (c = u.get(_s, [])[Number(o)]);
} let l = { data: c, firstChild: e.firstChild ?? null }; return n && (l.firstChild = e, bs(l, 0, e.nextSibling)), a ? e.setAttribute(Rn, a) : e.removeAttribute(Rn), l; }
function Gg() { Wg = EM; }
function qg(e, t, n = !1) { return Wg(e, t, n); }
function yu(e) { let t = e._lView; return t[m].type === 2 ? null : (We(t) && (t = t[I]), t); }
function DM(e) { return e.textContent?.replace(/\s/gm, ""); }
function CM(e) { let t = Ds(), n = t.createNodeIterator(e, NodeFilter.SHOW_COMMENT, { acceptNode(i) { let s = DM(i); return s === "ngetn" || s === "ngtns" ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; } }), o, r = []; for (; o = n.nextNode();)
    r.push(o); for (let i of r)
    i.textContent === "ngetn" ? i.replaceWith(t.createTextNode("")) : i.remove(); }
var Qg = (function (e) { return e.Hydrated = "hydrated", e.Skipped = "skipped", e.Mismatched = "mismatched", e; })(Qg || {}), TM = "__ngDebugHydrationInfo__";
function MM(e) { return e[TM] ?? null; }
function bs(e, t, n) { e.segmentHeads ??= {}, e.segmentHeads[t] = n; }
function il(e, t) { return e.segmentHeads?.[t] ?? null; }
function Cr(e) { return e.get(du, !1, { optional: !0 }); }
var NM = !1;
function wM() { NM = !1; }
function Zg(e, t) { let n = e.data, o = n[mr]?.[t] ?? null; return o === null && n[Kn]?.[t] && (o = vu(e, t)), o; }
function _M(e, t) { return e.data[mr]?.[t] !== void 0; }
function Yg(e, t) { return e.data[Kn]?.[t] ?? null; }
function vu(e, t) { let n = Yg(e, t) ?? [], o = 0; for (let r of n)
    o += r[it] * (r[yr] ?? 1); return o; }
function Kg(e) { if (typeof e.disconnectedNodes > "u") {
    let t = e.data[Jn];
    e.disconnectedNodes = t ? new Set(t) : null;
} return e.disconnectedNodes; }
function As(e, t) { if (typeof e.disconnectedNodes > "u") {
    let n = e.data[Jn];
    e.disconnectedNodes = n ? new Set(n) : null;
} return !!Kg(e)?.has(t); }
function Rs(e, t) { let n = e[se]; return n !== null && !bo() && !eo(t) && !As(n, t.index - I); }
function Iu(e, t) { let n = t, o = e.corruptedTextNodes; n.textContent === "" ? o.set(n, "ngetn") : n.nextSibling?.nodeType === Node.TEXT_NODE && o.set(n, "ngtns"); }
function Jg(e) { let t = []; return e !== null && (e.has(4) && t.push(...Ki), e.has(3) && t.push(...Yi)), t; }
function SM(e, t) { let n = t.get(lt), r = t.get(Yn).get(Ss, {}), i = !1, s = e, a = null, c = []; for (; !i && s;) {
    i = n.has(s);
    let l = n.hydrating.get(s);
    if (a === null && l != null) {
        a = l.promise;
        break;
    }
    c.unshift(s), s = r[s][au];
} return { parentBlockPromise: a, hydrationQueue: c }; }
function bM(e) { let t = e.body.querySelectorAll("[jsaction]"), n = new Set, o = [Ki.join(":;"), Yi.join(":;")].join("|"); for (let r of t) {
    let i = r.getAttribute("jsaction"), s = r.getAttribute("ngb");
    i?.match(o) && s !== null && n.add(r);
} return n; }
function Xg(e, t) { let n = bM(e), o = t.get(Dr); for (let r of n)
    pu(r, o); }
var em = () => ({});
function AM(e) { let t = e.get(Yn, null, { optional: !0 }); return t !== null ? t.get(Ss, {}) : {}; }
function tm() { em = AM; }
function RM(e) { return em(e); }
function kM(e) { return typeof e == "object" && e.trigger === 5; }
function xM(e) { return e[Er]?.find(n => kM(n))?.delay ?? null; }
function OM(e) { let t = e[Er]; if (t)
    for (let n of t) {
        if (n === 2)
            return !0;
        if (typeof n == "object" && n.trigger === 2)
            return n.intersectionObserverOptions || !0;
    } return null; }
function Vp(e, t) { return e[Er]?.includes(t) ?? !1; }
function LM(e) { return { data: e, hydrate: { idle: Vp(e, 0), immediate: Vp(e, 1), timer: xM(e), viewport: OM(e) } }; }
function nm(e) { let t = RM(e), n = new Map; for (let o in t)
    n.set(o, LM(t[o])); return n; }
function kc(e) { return !!e && e.nodeType === Node.COMMENT_NODE && e.textContent?.trim() === zg; }
function Bp(e) { for (; e && e.nodeType === Node.TEXT_NODE;)
    e = e.previousSibling; return e; }
function om(e) { for (let o of e.body.childNodes)
    if (kc(o))
        return; let t = Bp(e.body.previousSibling); if (kc(t))
    return; let n = Bp(e.head.lastChild); if (!kc(n))
    throw new w(-507, !1); }
function rm(e, t) { let n = e.contentQueries; if (n !== null) {
    let o = O(null);
    try {
        for (let r = 0; r < n.length; r += 2) {
            let i = n[r], s = n[r + 1];
            if (s !== -1) {
                let a = e.data[s];
                Ao(i), a.contentQueries(2, t[s], s);
            }
        }
    }
    finally {
        O(o);
    }
} }
function sl(e, t, n) { Ao(0); let o = O(null); try {
    t(e, n);
}
finally {
    O(o);
} }
function Eu(e, t, n) { if (Ga(t)) {
    let o = O(null);
    try {
        let r = t.directiveStart, i = t.directiveEnd;
        for (let s = r; s < i; s++) {
            let a = e.data[s];
            if (a.contentQueries) {
                let c = n[s];
                a.contentQueries(1, c, s);
            }
        }
    }
    finally {
        O(o);
    }
} }
var Re = (function (e) { return e[e.Emulated = 0] = "Emulated", e[e.None = 2] = "None", e[e.ShadowDom = 3] = "ShadowDom", e[e.ExperimentalIsolatedShadowDom = 4] = "ExperimentalIsolatedShadowDom", e; })(Re || {}), PM = { name: "custom-elements" }, FM = { name: "no-errors-schema" }, im = !1;
function HM(e) { im = e; }
function jM() { return im; }
var sm = !1;
function VM(e) { sm = e; }
function BM() { return sm; }
var Di;
function am() { if (Di === void 0 && (Di = null, Ie.trustedTypes))
    try {
        Di = Ie.trustedTypes.createPolicy("angular", { createHTML: e => e, createScript: e => e, createScriptURL: e => e });
    }
    catch { } return Di; }
function to(e) { return am()?.createHTML(e) || e; }
function $M(e) { return am()?.createScriptURL(e) || e; }
var Ci;
function Du() { if (Ci === void 0 && (Ci = null, Ie.trustedTypes))
    try {
        Ci = Ie.trustedTypes.createPolicy("angular#unsafe-bypass", { createHTML: e => e, createScript: e => e, createScriptURL: e => e });
    }
    catch { } return Ci; }
function $p(e) { return Du()?.createHTML(e) || e; }
function Up(e) { return Du()?.createScript(e) || e; }
function zp(e) { return Du()?.createScriptURL(e) || e; }
var st = class {
    changingThisBreaksApplicationSecurity;
    constructor(t) { this.changingThisBreaksApplicationSecurity = t; }
    toString() { return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Wr})`; }
}, al = class extends st {
    getTypeName() { return "HTML"; }
}, cl = class extends st {
    getTypeName() { return "Style"; }
}, ll = class extends st {
    getTypeName() { return "Script"; }
}, ul = class extends st {
    getTypeName() { return "URL"; }
}, dl = class extends st {
    getTypeName() { return "ResourceURL"; }
};
function ut(e) { return e instanceof st ? e.changingThisBreaksApplicationSecurity : e; }
function no(e, t) { let n = cm(e); if (n != null && n !== t) {
    if (n === "ResourceURL" && t === "URL")
        return !0;
    throw new Error(`Required a safe ${t}, got a ${n} (see ${Wr})`);
} return n === t; }
function cm(e) { return e instanceof st && e.getTypeName() || null; }
function UM(e) { return new al(e); }
function zM(e) { return new cl(e); }
function WM(e) { return new ll(e); }
function GM(e) { return new ul(e); }
function qM(e) { return new dl(e); }
function lm(e) { let t = new pl(e); return QM() ? new fl(t) : t; }
var fl = class {
    inertDocumentHelper;
    constructor(t) { this.inertDocumentHelper = t; }
    getInertBodyElement(t) { t = "<body><remove></remove>" + t; try {
        let n = new window.DOMParser().parseFromString(to(t), "text/html").body;
        return n === null ? this.inertDocumentHelper.getInertBodyElement(t) : (n.firstChild?.remove(), n);
    }
    catch {
        return null;
    } }
}, pl = class {
    defaultDoc;
    inertDocument;
    constructor(t) { this.defaultDoc = t, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"); }
    getInertBodyElement(t) { let n = this.inertDocument.createElement("template"); return n.innerHTML = to(t), n; }
};
function QM() { try {
    return !!new window.DOMParser().parseFromString(to(""), "text/html");
}
catch {
    return !1;
} }
var ZM = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
function ks(e) { return e = String(e), e.match(ZM) ? e : "unsafe:" + e; }
function dt(e) { let t = {}; for (let n of e.split(","))
    t[n] = !0; return t; }
function Tr(...e) { let t = {}; for (let n of e)
    for (let o in n)
        n.hasOwnProperty(o) && (t[o] = !0); return t; }
var um = dt("area,br,col,hr,img,wbr"), dm = dt("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"), fm = dt("rp,rt"), YM = Tr(fm, dm), KM = Tr(dm, dt("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), JM = Tr(fm, dt("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), hl = Tr(um, KM, JM, YM), pm = dt("background,cite,href,itemtype,longdesc,poster,src,xlink:href"), XM = dt("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"), eN = dt("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"), gl = Tr(pm, XM, eN), tN = dt("script,style,template"), ml = class {
    sanitizedSomething = !1;
    buf = [];
    sanitizeChildren(t) { let n = t.firstChild, o = !0, r = []; for (; n;) {
        if (n.nodeType === Node.ELEMENT_NODE ? o = this.startElement(n) : n.nodeType === Node.TEXT_NODE ? this.chars(n.nodeValue) : this.sanitizedSomething = !0, o && n.firstChild) {
            r.push(n), n = rN(n);
            continue;
        }
        for (; n;) {
            n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
            let i = oN(n);
            if (i) {
                n = i;
                break;
            }
            n = r.pop();
        }
    } return this.buf.join(""); }
    startElement(t) { let n = Wp(t).toLowerCase(); if (!hl.hasOwnProperty(n))
        return this.sanitizedSomething = !0, !tN.hasOwnProperty(n); this.buf.push("<"), this.buf.push(n); let o = t.attributes; for (let r = 0; r < o.length; r++) {
        let i = o.item(r), s = i.name, a = s.toLowerCase();
        if (!gl.hasOwnProperty(a)) {
            this.sanitizedSomething = !0;
            continue;
        }
        let c = i.value;
        pm[a] && (c = ks(c)), this.buf.push(" ", s, '="', Gp(c), '"');
    } return this.buf.push(">"), !0; }
    endElement(t) { let n = Wp(t).toLowerCase(); hl.hasOwnProperty(n) && !um.hasOwnProperty(n) && (this.buf.push("</"), this.buf.push(n), this.buf.push(">")); }
    chars(t) { this.buf.push(Gp(t)); }
};
function nN(e, t) { return (e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) !== Node.DOCUMENT_POSITION_CONTAINED_BY; }
function oN(e) { let t = e.nextSibling; if (t && e !== t.previousSibling)
    throw hm(t); return t; }
function rN(e) { let t = e.firstChild; if (t && nN(e, t))
    throw hm(t); return t; }
function Wp(e) { let t = e.nodeName; return typeof t == "string" ? t : "FORM"; }
function hm(e) { return new Error(`Failed to sanitize html because the element is clobbered: ${e.outerHTML}`); }
var iN = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, sN = /([^\#-~ |!])/g;
function Gp(e) { return e.replace(/&/g, "&amp;").replace(iN, function (t) { let n = t.charCodeAt(0), o = t.charCodeAt(1); return "&#" + ((n - 55296) * 1024 + (o - 56320) + 65536) + ";"; }).replace(sN, function (t) { return "&#" + t.charCodeAt(0) + ";"; }).replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
var Ti;
function gm(e, t) { let n = null; try {
    Ti = Ti || lm(e);
    let o = t ? String(t) : "";
    n = Ti.getInertBodyElement(o);
    let r = 5, i = o;
    do {
        if (r === 0)
            throw new Error("Failed to sanitize html because the input is unstable");
        r--, o = i, i = n.innerHTML, n = Ti.getInertBodyElement(o);
    } while (o !== i);
    let a = new ml().sanitizeChildren(yl(n) || n);
    return to(a);
}
finally {
    if (n) {
        let o = yl(n) || n;
        for (; o.firstChild;)
            o.firstChild.remove();
    }
} }
function yl(e) { return "content" in e && aN(e) ? e.content : null; }
function aN(e) { return e.nodeType === Node.ELEMENT_NODE && e.nodeName === "TEMPLATE"; }
var cN = /^>|^->|<!--|-->|--!>|<!-$/g, lN = /(<|>)/g, uN = "\u200B$1\u200B";
function dN(e) { return e.replace(cN, t => t.replace(lN, uN)); }
function Cu(e, t) { return e.createText(t); }
function mm(e, t, n) { e.setValue(t, n); }
function Tu(e, t) { return e.createComment(dN(t)); }
function xs(e, t, n) { return e.createElement(t, n); }
function en(e, t, n, o, r) { e.insertBefore(t, n, o, r); }
function ym(e, t, n) { e.appendChild(t, n); }
function qp(e, t, n, o, r) { o !== null ? en(e, t, n, o, r) : ym(e, t, n); }
function Mr(e, t, n, o) { e.removeChild(null, t, n, o); }
function vm(e) { e.textContent = ""; }
function fN(e, t, n) { e.setAttribute(t, "style", n); }
function pN(e, t, n) { n === "" ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n); }
function Im(e, t, n) { let { mergedAttrs: o, classes: r, styles: i } = n; o !== null && yT(e, t, o), r !== null && pN(e, t, r), i !== null && fN(e, t, i); }
function hN(e) { let t = g(); e.src = "", e.srcdoc = to(""), Mr(t[C], e); }
var q = (function (e) { return e[e.NONE = 0] = "NONE", e[e.HTML = 1] = "HTML", e[e.STYLE = 2] = "STYLE", e[e.SCRIPT = 3] = "SCRIPT", e[e.URL = 4] = "URL", e[e.RESOURCE_URL = 5] = "RESOURCE_URL", e[e.ATTRIBUTE_NO_BINDING = 6] = "ATTRIBUTE_NO_BINDING", e; })(q || {}), Oi, Qp = "svg", gN = "math";
function mN() { return Oi || (Oi = {}, Nt(q.HTML, void 0, [["iframe", ["srcdoc"]], ["*", ["innerHTML", "outerHTML"]]]), Nt(q.STYLE, void 0, [["*", ["style"]]]), Nt(q.URL, void 0, [["*", ["formAction"]], ["area", ["href"]], ["a", ["href", "xlink:href"]], ["form", ["action"]], ["img", ["src"]], ["video", ["src"]]]), Nt(q.URL, gN, [["annotation", ["href", "xlink:href"]], ["annotation-xml", ["href", "xlink:href"]], ["maction", ["href", "xlink:href"]], ["malignmark", ["href", "xlink:href"]], ["math", ["href", "xlink:href"]], ["mroot", ["href", "xlink:href"]], ["msqrt", ["href", "xlink:href"]], ["merror", ["href", "xlink:href"]], ["mfrac", ["href", "xlink:href"]], ["mglyph", ["href", "xlink:href"]], ["msub", ["href", "xlink:href"]], ["msup", ["href", "xlink:href"]], ["msubsup", ["href", "xlink:href"]], ["mmultiscripts", ["href", "xlink:href"]], ["mprescripts", ["href", "xlink:href"]], ["mi", ["href", "xlink:href"]], ["mn", ["href", "xlink:href"]], ["mo", ["href", "xlink:href"]], ["mpadded", ["href", "xlink:href"]], ["mphantom", ["href", "xlink:href"]], ["mrow", ["href", "xlink:href"]], ["ms", ["href", "xlink:href"]], ["mspace", ["href", "xlink:href"]], ["mstyle", ["href", "xlink:href"]], ["mtable", ["href", "xlink:href"]], ["mtd", ["href", "xlink:href"]], ["mtr", ["href", "xlink:href"]], ["mtext", ["href", "xlink:href"]], ["mover", ["href", "xlink:href"]], ["munder", ["href", "xlink:href"]], ["munderover", ["href", "xlink:href"]], ["semantics", ["href", "xlink:href"]], ["none", ["href", "xlink:href"]]]), Nt(q.RESOURCE_URL, void 0, [["base", ["href"]], ["embed", ["src"]], ["frame", ["src"]], ["iframe", ["src"]], ["link", ["href"]], ["object", ["codebase", "data"]]]), Nt(q.URL, Qp, [["a", ["href", "xlink:href"]]]), Nt(q.ATTRIBUTE_NO_BINDING, Qp, [["animate", ["attributeName", "values", "to", "from"]], ["set", ["to", "attributeName"]], ["animateMotion", ["attributeName"]], ["animateTransform", ["attributeName"]]]), Nt(q.ATTRIBUTE_NO_BINDING, void 0, [["unknown", ["attributeName", "values", "to", "from", "sandbox", "allow", "allowFullscreen", "referrerPolicy", "csp", "fetchPriority"]], ["iframe", ["sandbox", "allow", "allowFullscreen", "referrerPolicy", "csp", "fetchPriority"]]])), Oi; }
function Nt(e, t, n) { for (let [o, r] of n) {
    let i = t && o !== "*" && o !== "unknown" ? `:${t}:${o}` : o;
    i = i.toLowerCase();
    for (let s of r)
        Oi[`${i}|${s.toLowerCase()}`] = e;
} }
function Mu(e) { let t = Nr(); return t ? $p(t.sanitize(q.HTML, e) || "") : no(e, "HTML") ? $p(ut(e)) : gm(Ds(), M(e)); }
function Nu(e) { let t = Nr(); return t ? t.sanitize(q.STYLE, e) || "" : no(e, "Style") ? ut(e) : M(e); }
function wu(e) { let t = Nr(); return t ? t.sanitize(q.URL, e) || "" : no(e, "URL") ? ut(e) : ks(M(e)); }
function Os(e) { let t = Nr(); if (t)
    return zp(t.sanitize(q.RESOURCE_URL, e) || ""); if (no(e, "ResourceURL"))
    return zp(ut(e)); throw new w(904, !1); }
function _u(e) { let t = Nr(); if (t)
    return Up(t.sanitize(q.SCRIPT, e) || ""); if (no(e, "Script"))
    return Up(ut(e)); throw new w(905, !1); }
function Em(e) { return to(e[0]); }
function Dm(e) { return $M(e[0]); }
var yN = { embed: { src: !0 }, frame: { src: !0 }, iframe: { src: !0 }, media: { src: !0 }, base: { href: !0 }, link: { href: !0 }, object: { data: !0, codebase: !0 } };
function vN(e, t) { return yN[e.toLowerCase()]?.[t.toLowerCase()] === !0 ? Os : wu; }
function Cm(e, t, n) { return vN(t, n)(e); }
function Nr() { let e = g(); return e && e[$e].sanitizer; }
var Mi = new Set(["href", "xlink:href"]), IN = ["attributeName", "attributename"], EN = { iframe: { sandbox: !0, allow: !0, allowfullscreen: !0, referrerpolicy: !0, csp: !0, fetchpriority: !0 }, ":svg:animate": { attributename: !0, to: Mi, values: Mi, from: Mi }, ":svg:set": { attributename: !0, to: Mi }, ":svg:animatemotion": { attributename: !0 }, ":svg:animatetransform": { attributename: !0 } };
function Su(e, t, n) { let o = t.toLowerCase(), r = n.toLowerCase(), s = ee() === -1 ? null : De(); if (s && s.type !== 2)
    return e; let a = o[0] !== ":" && s?.namespace ? `:${s.namespace}:${o}` : o, c = EN[a]?.[r]; if (!c)
    return e; let l = g(); if (s && o === "iframe") {
    let f = re(s, l);
    hN(f);
} let u = t[0] === ":" ? t.split(":").pop() : t; if (typeof c != "boolean") {
    if (!s)
        throw new w(-910, !1);
    let f = re(s, l);
    if (DN(f, c))
        throw new w(-910, !1);
    return e;
} let d = !1; throw new w(-910, d); }
function DN(e, t) { for (let n of IN) {
    let o = e.getAttribute(n);
    if (o !== null && t.has(o.toLowerCase()))
        return o;
} return null; }
function CN() { return tt([]); }
function Tm(e) { return e.ownerDocument.defaultView; }
function Mm(e) { return e.ownerDocument; }
function bu(e) { return e.ownerDocument.body; }
var TN = "\uFFFD";
function _n(e) { return e instanceof Function ? e() : e; }
function MN(e, t, n) { let o = e.length; for (;;) {
    let r = e.indexOf(t, n);
    if (r === -1)
        return r;
    if (r === 0 || e.charCodeAt(r - 1) <= 32) {
        let i = t.length;
        if (r + i === o || e.charCodeAt(r + i) <= 32)
            return r;
    }
    n = r + 1;
} }
var Nm = "ng-template";
function NN(e, t, n, o) { let r = 0; if (o) {
    for (; r < t.length && typeof t[r] == "string"; r += 2)
        if (t[r] === "class" && MN(t[r + 1].toLowerCase(), n, 0) !== -1)
            return !0;
}
else if (Au(e))
    return !1; if (r = t.indexOf(1, r), r > -1) {
    let i;
    for (; ++r < t.length && typeof (i = t[r]) == "string";)
        if (i.toLowerCase() === n)
            return !0;
} return !1; }
function Au(e) { return e.type === 4 && e.value !== Nm; }
function wN(e, t, n) { let o = e.type === 4 && !n ? Nm : e.value; return t === o; }
function _N(e, t, n) { let o = 4, r = e.attrs, i = r !== null ? AN(r) : 0, s = !1; for (let a = 0; a < t.length; a++) {
    let c = t[a];
    if (typeof c == "number") {
        if (!s && !je(o) && !je(c))
            return !1;
        if (s && je(c))
            continue;
        s = !1, o = c | o & 1;
        continue;
    }
    if (!s)
        if (o & 4) {
            if (o = 2 | o & 1, c !== "" && !wN(e, c, n) || c === "" && t.length === 1) {
                if (je(o))
                    return !1;
                s = !0;
            }
        }
        else if (o & 8) {
            if (r === null || !NN(e, r, c, n)) {
                if (je(o))
                    return !1;
                s = !0;
            }
        }
        else {
            let l = t[++a], u = SN(c, r, Au(e), n);
            if (u === -1) {
                if (je(o))
                    return !1;
                s = !0;
                continue;
            }
            if (l !== "") {
                let d;
                if (u > i ? d = "" : d = r[u + 1].toLowerCase(), o & 2 && l !== d) {
                    if (je(o))
                        return !1;
                    s = !0;
                }
            }
        }
} return je(o) || s; }
function je(e) { return (e & 1) === 0; }
function SN(e, t, n, o) { if (t === null)
    return -1; let r = 0; if (o || !n) {
    let i = !1;
    for (; r < t.length;) {
        let s = t[r];
        if (s === e)
            return r;
        if (s === 3 || s === 6)
            i = !0;
        else if (s === 1 || s === 2) {
            let a = t[++r];
            for (; typeof a == "string";)
                a = t[++r];
            continue;
        }
        else {
            if (s === 4)
                break;
            if (s === 0) {
                r += 4;
                continue;
            }
        }
        r += i ? 1 : 2;
    }
    return -1;
}
else
    return RN(t, e); }
function wm(e, t, n = !1) { for (let o = 0; o < t.length; o++)
    if (_N(e, t[o], n))
        return !0; return !1; }
function bN(e) { let t = e.attrs; if (t != null) {
    let n = t.indexOf(5);
    if ((n & 1) === 0)
        return t[n + 1];
} return null; }
function AN(e) { for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (rg(n))
        return t;
} return e.length; }
function RN(e, t) { let n = e.indexOf(4); if (n > -1)
    for (n++; n < e.length;) {
        let o = e[n];
        if (typeof o == "number")
            return -1;
        if (o === t)
            return n;
        n++;
    } return -1; }
function kN(e, t) { e: for (let n = 0; n < t.length; n++) {
    let o = t[n];
    if (e.length === o.length) {
        for (let r = 0; r < e.length; r++)
            if (e[r] !== o[r])
                continue e;
        return !0;
    }
} return !1; }
function Zp(e, t) { return e ? ":not(" + t.trim() + ")" : t; }
function xN(e) { let t = e[0], n = 1, o = 2, r = "", i = !1; for (; n < e.length;) {
    let s = e[n];
    if (typeof s == "string")
        if (o & 2) {
            let a = e[++n];
            r += "[" + s + (a.length > 0 ? '="' + a + '"' : "") + "]";
        }
        else
            o & 8 ? r += "." + s : o & 4 && (r += " " + s);
    else
        r !== "" && !je(s) && (t += Zp(i, r), r = ""), o = s, i = i || !je(o);
    n++;
} return r !== "" && (t += Zp(i, r)), t; }
function ON(e) { return e.map(xN).join(","); }
function LN(e) { let t = [], n = [], o = 1, r = 2; for (; o < e.length;) {
    let i = e[o];
    if (typeof i == "string")
        r === 2 ? i !== "" && t.push(i, e[++o]) : r === 8 && n.push(i);
    else {
        if (!je(r))
            break;
        r = i;
    }
    o++;
} return n.length && t.push(1, ...n), t; }
var L = {};
function Ru(e, t, n, o, r, i, s, a, c, l, u) { let d = I + o, f = d + r, p = PN(d, f), h = typeof l == "function" ? l() : l; return p[m] = { type: e, blueprint: p, template: n, queries: null, viewQuery: a, declTNode: t, data: p.slice().fill(null, d), bindingStartIndex: d, expandoStartIndex: f, hostBindingOpCodes: null, firstCreatePass: !0, firstUpdatePass: !0, staticViewQueries: !1, staticContentQueries: !1, preOrderHooks: null, preOrderCheckHooks: null, contentHooks: null, contentCheckHooks: null, viewHooks: null, viewCheckHooks: null, destroyHooks: null, cleanup: null, contentQueries: null, components: null, directiveRegistry: typeof i == "function" ? i() : i, pipeRegistry: typeof s == "function" ? s() : s, firstChild: null, schemas: c, consts: h, incompleteFirstPass: !1, ssrId: u }; }
function PN(e, t) { let n = []; for (let o = 0; o < t; o++)
    n.push(o < e ? null : L); return n; }
function _m(e) { let t = e.tView; return t === null || t.incompleteFirstPass ? e.tView = Ru(1, null, e.template, e.decls, e.vars, e.directiveDefs, e.pipeDefs, e.viewQuery, e.schemas, e.consts, e.id) : t; }
function Ls(e, t, n, o, r, i, s, a, c, l, u) { let d = t.blueprint.slice(); return d[j] = r, d[b] = o | 4 | 128 | 8 | 64 | 1024, (l !== null || e && e[b] & 2048) && (d[b] |= 2048), Ya(d), d[G] = d[To] = e, d[F] = n, d[$e] = s || e && e[$e], d[C] = a || e && e[C], d[R] = c || e && e[R] || null, d[le] = i, d[_e] = jT(), d[se] = u, d[za] = l, d[K] = t.type == 2 ? e[K] : d, d; }
function FN(e, t, n) { let o = re(t, e), r = _m(n), i = e[$e].rendererFactory, s = xu(e, Ls(e, r, null, ku(n), o, t, null, i.createRenderer(o, n), null, null, null)); return e[t.index] = s; }
function ku(e) { let t = 16; return e.signals ? t = 4096 : e.onPush && (t = 64), t; }
function wr(e, t, n, o) { if (n === 0)
    return -1; let r = t.length; for (let i = 0; i < n; i++)
    t.push(o), e.blueprint.push(o), e.data.push(null); return r; }
function xu(e, t) { return e[Et] ? e[Co][ce] = t : e[Et] = t, e[Co] = t, t; }
function Sm(e = 1) { bm(N(), g(), ee() + e, !1); }
function bm(e, t, n, o) { if (!o)
    if ((t[b] & 3) === 3) {
        let i = e.preOrderCheckHooks;
        i !== null && Ai(t, i, n);
    }
    else {
        let i = e.preOrderHooks;
        i !== null && Ri(t, i, 0, n);
    } Ze(n); }
var Ps = (function (e) { return e[e.None = 0] = "None", e[e.SignalBased = 1] = "SignalBased", e[e.HasDecoratorInputTransform = 2] = "HasDecoratorInputTransform", e; })(Ps || {});
function bt(e, t, n, o) { let r = O(null); try {
    let [i, s, a] = e.inputs[n], c = null;
    (s & Ps.SignalBased) !== 0 && (c = t[i][et]), c !== null && c.transformFn !== void 0 ? o = c.transformFn(o) : a !== null && (o = a.call(t, o)), e.setInput !== null ? e.setInput(t, c, o, n, i) : Yh(t, c, i, o);
}
finally {
    O(r);
} }
var Ji = (function (e) { return e[e.Important = 1] = "Important", e[e.DashCase = 2] = "DashCase", e; })(Ji || {}), vl;
function Ou(e, t) { return vl(e, t); }
function HN(e) { vl === void 0 && (vl = e()); }
var Am = new _("", { factory: () => !1 }), Rm = new _("", { factory: () => jN }), jN = 4e3, VN = !1, fn = (typeof ngServerMode > "u" || !ngServerMode) && typeof document < "u" && typeof document?.documentElement?.getAnimations == "function";
function Fs(e) { return e[R].get(Am, VN); }
function BN(e, t, n) { let o = Fn.get(e); if (o) {
    for (let r of t)
        o.classList.push(r);
    for (let r of n)
        o.cleanupFns.push(r);
}
else
    Fn.set(e, { classList: t, cleanupFns: n }); }
function Lu(e) { let t = Fn.get(e); if (t) {
    for (let n of t.cleanupFns)
        n();
    Fn.delete(e);
} Jt.delete(e); }
var $N = () => { }, Fn = new WeakMap, Jt = new WeakMap, Ko = new WeakMap, Po = new WeakSet;
function Il(e, t) { let n = Ko.get(e); if (n && n.length > 0) {
    let o = n.findIndex(r => r === t);
    o > -1 && n.splice(o, 1);
} n?.length === 0 && Ko.delete(e); }
function UN(e, t) { let n = Ko.get(e); if (!n || n.length === 0)
    return; let o = t.parentNode, r = t.previousSibling; for (let i = n.length - 1; i >= 0; i--) {
    let s = n[i], a = s.parentNode;
    s === t ? (n.splice(i, 1), Po.add(s), s.dispatchEvent(new CustomEvent("animationend", { detail: { cancel: !0 } }))) : (r && s === r || a && o && a !== o) && (n.splice(i, 1), s.dispatchEvent(new CustomEvent("animationend", { detail: { cancel: !0 } })), s.parentNode?.removeChild(s));
} }
function Pu(e, t) { let n = Ko.get(e); n ? n.includes(t) || n.push(t) : Ko.set(e, [t]); }
function Xi(e) { let t = e[ze] ??= {}; return t.enter ??= new Map; }
function tn(e) { let t = e[ze] ??= {}; return t.leave ??= new Map; }
function km(e) { let t = typeof e == "function" ? e() : e, n = Array.isArray(t) ? t : null; return typeof t == "string" && (n = t.trim().split(/\s+/).filter(o => o)), n; }
function zN(e, t) { if (!fn)
    return; let n = Fn.get(e); if (n && n.classList.length > 0 && WN(e, n.classList))
    for (let o of n.classList)
        t.removeClass(e, o); Lu(e); }
function WN(e, t) { for (let n of t)
    if (e.classList.contains(n))
        return !0; return !1; }
function Jo(e) { return e.composedPath ? e.composedPath()[0] : e.target; }
function Fu(e, t) { let n = Jt.get(t); return n === void 0 ? !0 : t === Jo(e) && (n.animationName !== void 0 && e.animationName === n.animationName || n.propertyName !== void 0 && (n.propertyName === "all" || e.propertyName === n.propertyName)); }
function Hs(e, t, n) { let o = e.get(t.index) ?? { animateFns: [] }; o.animateFns.push(n), e.set(t.index, o); }
function El(e, t) { if (e)
    for (let n of e)
        n(); for (let n of t)
    n(); }
function Dl(e, t) { let n = tn(e).get(t.index); n && (n.resolvers = void 0); }
function Ni(e, t, n, o, r) { Il(t, n), El(o, r), Dl(e, t); }
function es(e) { if (!e)
    return 0; let t = e.toLowerCase().indexOf("ms") > -1 ? 1 : 1e3; return parseFloat(e) * t; }
function Yt(e, t) { return e.getPropertyValue(t).split(",").map(o => o.trim()); }
function GN(e) { let t = Yt(e, "transition-property"), n = Yt(e, "transition-duration"), o = Yt(e, "transition-delay"), r = { propertyName: "", duration: 0, animationName: void 0 }; for (let i = 0; i < t.length; i++) {
    let s = es(o[i]) + es(n[i]);
    s > r.duration && (r.propertyName = t[i], r.duration = s);
} return r; }
function qN(e) { let t = Yt(e, "animation-name"), n = Yt(e, "animation-delay"), o = Yt(e, "animation-duration"), r = Yt(e, "animation-iteration-count"), i = { animationName: "", propertyName: void 0, duration: 0 }; for (let s = 0; s < t.length; s++) {
    let a = es(n[s]) + es(o[s]), c = r[s];
    a > i.duration && c !== "infinite" && (i.animationName = t[s], i.duration = a);
} return i; }
function xm(e, t) { return e !== void 0 && e.duration > t.duration; }
function Om(e) { return (e.animationName != null || e.propertyName != null) && e.duration > 0; }
function QN(e, t) { let n = getComputedStyle(e), o = qN(n), r = GN(n), i = o.duration > r.duration ? o : r; xm(t.get(e), i) || Om(i) && t.set(e, i); }
function Lm(e, t, n) { if (!n)
    return; let o = e.getAnimations(); return o.length === 0 ? QN(e, t) : ZN(e, t, o); }
function ZN(e, t, n) { let o = { animationName: void 0, propertyName: void 0, duration: 0 }; for (let r of n) {
    let i = r.effect?.getTiming();
    if (i?.iterations === 1 / 0)
        continue;
    let s = typeof i?.duration == "number" ? i.duration : 0, a = (i?.delay ?? 0) + s, c = r.playbackRate;
    c !== void 0 && c !== 0 && c !== 1 && (a /= Math.abs(c));
    let l, u;
    r.animationName ? u = r.animationName : l = r.transitionProperty, a >= o.duration && (o = { animationName: u, propertyName: l, duration: a });
} xm(t.get(e), o) || Om(o) && t.set(e, o); }
var nn = new Set, js = (function (e) { return e[e.CHANGE_DETECTION = 0] = "CHANGE_DETECTION", e[e.AFTER_NEXT_RENDER = 1] = "AFTER_NEXT_RENDER", e; })(js || {}), pn = new _(""), Yp = new Set;
function Q(e) { Yp.has(e) || (Yp.add(e), performance?.mark?.("mark_feature_usage", { detail: { feature: e } })); }
var Vs = (() => { class e {
    impl = null;
    execute() { this.impl?.execute(); }
    static \u0275prov = V({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), Hu = [0, 1, 2, 3], ju = (() => { class e {
    ngZone = E(B);
    scheduler = E(Mt);
    errorHandler = E(Ec, { optional: !0 });
    sequences = new Set;
    deferredRegistrations = new Set;
    executing = !1;
    constructor() { E(pn, { optional: !0 }); }
    execute() { let n = this.sequences.size > 0; n && x(A.AfterRenderHooksStart), this.executing = !0; for (let o of Hu)
        for (let r of this.sequences)
            if (!(r.erroredOrDestroyed || !r.hooks[o]))
                try {
                    r.pipelinedValue = this.ngZone.runOutsideAngular(() => this.maybeTrace(() => { let i = r.hooks[o]; return i(r.pipelinedValue); }, r.snapshot));
                }
                catch (i) {
                    r.erroredOrDestroyed = !0, this.errorHandler?.handleError(i);
                } this.executing = !1; for (let o of this.sequences)
        o.afterRun(), o.once && (this.sequences.delete(o), o.destroy()); for (let o of this.deferredRegistrations)
        this.sequences.add(o); this.deferredRegistrations.size > 0 && this.scheduler.notify(7), this.deferredRegistrations.clear(), n && x(A.AfterRenderHooksEnd); }
    register(n) { let { view: o } = n; o !== void 0 ? ((o[Ht] ??= []).push(n), ci(o), o[b] |= 8192) : this.executing ? this.deferredRegistrations.add(n) : this.addSequence(n); }
    addSequence(n) { this.sequences.add(n), this.scheduler.notify(7); }
    unregister(n) { this.executing && this.sequences.has(n) ? (n.erroredOrDestroyed = !0, n.pipelinedValue = void 0, n.once = !0) : (this.sequences.delete(n), this.deferredRegistrations.delete(n)); }
    maybeTrace(n, o) { return o ? o.run(js.AFTER_NEXT_RENDER, n) : n(); }
    static \u0275prov = V({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), Xo = class {
    impl;
    hooks;
    view;
    once;
    snapshot;
    erroredOrDestroyed = !1;
    pipelinedValue = void 0;
    unregisterOnDestroy;
    constructor(t, n, o, r, i, s = null) { this.impl = t, this.hooks = n, this.view = o, this.once = r, this.snapshot = s, this.unregisterOnDestroy = i?.onDestroy(() => this.destroy()); }
    afterRun() { this.erroredOrDestroyed = !1, this.pipelinedValue = void 0, this.snapshot?.dispose(), this.snapshot = null; }
    destroy() { this.impl.unregister(this), this.unregisterOnDestroy?.(); let t = this.view?.[Ht]; t && (this.view[Ht] = t.filter(n => n !== this)); }
};
function Pm(e, t) { let n = t?.injector ?? E(Ce); return typeof ngServerMode < "u" && ngServerMode ? Bs : (Q("NgAfterRender"), Fm(e, n, t, !1)); }
function Vu(e, t) { let n = t?.injector ?? E(Ce); return typeof ngServerMode < "u" && ngServerMode ? Bs : (Q("NgAfterNextRender"), Fm(e, n, t, !0)); }
function YN(e) { return e instanceof Function ? [void 0, void 0, e, void 0] : [e.earlyRead, e.write, e.mixedReadWrite, e.read]; }
function Fm(e, t, n, o) { let r = t.get(Vs); r.impl ??= t.get(ju); let i = t.get(pn, null, { optional: !0 }), s = n?.manualCleanup !== !0 ? t.get(ko) : null, a = t.get(mi, null, { optional: !0 }), c = new Xo(r.impl, YN(e), a?.view, o, s, i?.snapshot(null)); return r.impl.register(c), c; }
var Bs = { destroy() { } }, $s = new _("", { factory: () => ({ queue: new Set, isScheduled: !1, scheduler: null, injector: E(It) }) });
function Hm(e, t, n) { let o = e.get($s); if (Array.isArray(t))
    for (let r of t)
        o.queue.add(r), n?.detachedLeaveAnimationFns?.push(r);
else
    o.queue.add(t), n?.detachedLeaveAnimationFns?.push(t); o.scheduler && o.scheduler(e); }
function KN(e, t) { let n = e.get($s); if (t.detachedLeaveAnimationFns) {
    for (let o of t.detachedLeaveAnimationFns)
        n.queue.delete(o);
    t.detachedLeaveAnimationFns = void 0;
} }
function JN(e) { let t = e.get($s); t.isScheduled || (Vu(() => { t.isScheduled = !1; for (let n of t.queue)
    n(); t.queue.clear(); }, { injector: t.injector }), t.isScheduled = !0); }
function Us(e) { let t = e.get($s); t.scheduler = JN, t.scheduler(e); }
function Bu(e, t) { for (let [n, o] of t)
    Hm(e, o.animateFns); }
function Kp(e, t, n, o) { let r = e?.[ze]?.enter; t !== null && r && r.has(n.index) && Bu(o, r); }
function Sn(e, t, n, o, r, i, s, a) { if (r != null) {
    let c, l = !1;
    X(r) ? c = r : oe(r) && (l = !0, r = r[j]);
    let u = k(r);
    e === 0 && o !== null ? (Kp(a, o, i, n), s == null ? ym(t, o, u) : en(t, o, u, s || null, !0)) : e === 1 && o !== null ? (Kp(a, o, i, n), en(t, o, u, s || null, !0), UN(i, u)) : e === 2 ? (a?.[ze]?.leave?.has(i.index) && Pu(i, u), Po.delete(u), Jp(a, i, n, d => { if (Po.has(u)) {
        Po.delete(u);
        return;
    } Mr(t, u, l, d); })) : e === 3 && (Po.delete(u), Jp(a, i, n, () => { t.destroyNode(u); })), c != null && iw(t, e, n, c, i, o, s);
} }
function jm(e, t) { Vm(e, t), t[j] = null, t[le] = null; }
function XN(e, t, n, o, r, i) { o[j] = r, o[le] = t, zs(e, o, n, 1, r, i); }
function Vm(e, t) { t[$e].changeDetectionScheduler?.notify(9), zs(e, t, t[C], 2, null, null); }
function ew(e) { let t = e[Et]; if (!t)
    return xc(e[m], e); for (; t;) {
    let n = null;
    if (oe(t))
        n = t[Et];
    else {
        let o = t[H];
        o && (n = o);
    }
    if (!n) {
        for (; t && !t[ce] && t !== e;)
            oe(t) && xc(t[m], t), t = t[G];
        t === null && (t = e), oe(t) && xc(t[m], t), n = t && t[ce];
    }
    t = n;
} }
function $u(e, t) { let n = e[jt], o = n.indexOf(t); n.splice(o, 1); }
function _r(e, t) { if (Ct(t))
    return; let n = t[C]; n.destroyNode && zs(e, t, n, 3, null, null), ew(t); }
function xc(e, t) { if (Ct(t))
    return; let n = O(null); try {
    t[b] &= -129, t[b] |= 256, t[Se] && mo(t[Se]), ow(e, t), nw(e, t), t[m].type === 1 && t[C].destroy();
    let o = t[Dt];
    if (o !== null && X(t[G])) {
        o !== t[G] && $u(o, t);
        let r = t[Ue];
        r !== null && r.detachView(e);
    }
    el(t);
}
finally {
    O(n);
} }
function Jp(e, t, n, o) { let r = e?.[ze]; if (r == null || r.leave == null || !r.leave.has(t.index))
    return o(!1); e && nn.add(e[_e]), Hm(n, () => { if (r.leave && r.leave.has(t.index)) {
    let s = r.leave.get(t.index), a = [];
    if (s) {
        for (let c = 0; c < s.animateFns.length; c++) {
            let l = s.animateFns[c], { promise: u } = l();
            a.push(u);
        }
        r.detachedLeaveAnimationFns = void 0;
    }
    r.running = Promise.allSettled(a), tw(e, o);
}
else
    e && nn.delete(e[_e]), o(!1); }, r); }
function tw(e, t) { let n = e[ze]?.running; if (n) {
    n.then(() => { e[ze].running = void 0, nn.delete(e[_e]), t(!0); });
    return;
} t(!1); }
function nw(e, t) { let n = e.cleanup, o = t[Ft]; if (n !== null)
    for (let s = 0; s < n.length - 1; s += 2)
        if (typeof n[s] == "string") {
            let a = n[s + 3];
            a >= 0 ? o[a]() : o[-a].unsubscribe(), s += 2;
        }
        else {
            let a = o[n[s + 1]];
            n[s].call(a);
        } o !== null && (t[Ft] = null); let r = t[Wa]; if (r !== null) {
    t[Wa] = null;
    for (let s = 0; s < r.length; s++) {
        let a = r[s];
        a();
    }
} let i = t[Mo]; if (i !== null) {
    t[Mo] = null;
    for (let s of i)
        s.destroy();
} }
function ow(e, t) { let n; if (e != null && (n = e.destroyHooks) != null)
    for (let o = 0; o < n.length; o += 2) {
        let r = t[n[o]];
        if (!(r instanceof Xt)) {
            let i = n[o + 1];
            if (Array.isArray(i))
                for (let s = 0; s < i.length; s += 2) {
                    let a = r[i[s]], c = i[s + 1];
                    x(A.LifecycleHookStart, a, c);
                    try {
                        c.call(a);
                    }
                    finally {
                        x(A.LifecycleHookEnd, a, c);
                    }
                }
            else {
                x(A.LifecycleHookStart, r, i);
                try {
                    i.call(r);
                }
                finally {
                    x(A.LifecycleHookEnd, r, i);
                }
            }
        }
    } }
function Uu(e, t, n) { return Bm(e, t.parent, n); }
function Bm(e, t, n) { let o = t; for (; o !== null && o.type & 168;)
    t = o, o = t.parent; if (o === null)
    return n[j]; if (ge(o)) {
    let { encapsulation: r } = e.data[o.directiveStart + o.componentOffset];
    if (r === Re.None || r === Re.Emulated)
        return null;
} return re(o, n); }
function $m(e, t, n) { return zm(e, t, n); }
function Um(e, t, n) { return e.type & 40 ? re(e, n) : null; }
var zm = Um, Cl;
function Wm(e, t) { zm = e, Cl = t; }
function zu(e, t, n, o) { let r = Uu(e, o, t), i = t[C], s = o.parent || t[le], a = $m(s, o, t); if (r != null)
    if (Array.isArray(n))
        for (let c = 0; c < n.length; c++)
            qp(i, r, n[c], a, !1);
    else
        qp(i, r, n, a, !1); Cl !== void 0 && Cl(i, o, t, n, r); }
function Kt(e, t) { if (t !== null) {
    let n = t.type;
    if (n & 3)
        return re(t, e);
    if (n & 4)
        return Tl(-1, e[t.index]);
    if (n & 8) {
        let o = t.child;
        if (o !== null)
            return Kt(e, o);
        {
            let r = e[t.index];
            return X(r) ? Tl(-1, r) : k(r);
        }
    }
    else {
        if (n & 128)
            return Kt(e, t.next);
        if (n & 32)
            return Ou(t, e)() || k(e[t.index]);
        {
            let o = Gm(e, t);
            if (o !== null) {
                if (Array.isArray(o))
                    return o[0];
                let r = $t(e[K]);
                return Kt(r, o);
            }
            else
                return Kt(e, t.next);
        }
    }
} return null; }
function Gm(e, t) { if (t !== null) {
    let o = e[K][le], r = t.projection;
    return o.projection[r];
} return null; }
function Tl(e, t) { let n = H + e + 1; if (n < t.length) {
    let o = t[n], r = o[m].firstChild;
    if (r !== null)
        return Kt(o, r);
} return t[Fe]; }
function Wu(e, t, n, o, r, i, s) { for (; n != null;) {
    let a = o[R];
    if (n.type === 128) {
        n = n.next;
        continue;
    }
    let c = o[n.index], l = n.type;
    if (s && t === 0 && (c && Ae(k(c), o), n.flags |= 2), !eo(n))
        if (l & 8)
            Wu(e, t, n.child, o, r, i, !1), Sn(t, e, a, r, c, n, i, o);
        else if (l & 32) {
            let u = Ou(n, o), d;
            for (; d = u();)
                Sn(t, e, a, r, d, n, i, o);
            Sn(t, e, a, r, c, n, i, o);
        }
        else
            l & 16 ? qm(e, t, o, n, r, i) : Sn(t, e, a, r, c, n, i, o);
    n = s ? n.projectionNext : n.next;
} }
function zs(e, t, n, o, r, i) { Wu(n, o, e.firstChild, t, r, i, !1); }
function rw(e, t, n) { let o = t[C], r = Uu(e, n, t), i = n.parent || t[le], s = $m(i, n, t); qm(o, 0, t, n, r, s); }
function qm(e, t, n, o, r, i) { let s = n[K], c = s[le].projection[o.projection]; if (Array.isArray(c))
    for (let l = 0; l < c.length; l++) {
        let u = c[l];
        Sn(t, e, n[R], r, u, o, i, n);
    }
else {
    let l = c, u = s[G];
    Zo(o) && (l.flags |= 128), Wu(e, t, l, u, r, i, !0);
} }
function iw(e, t, n, o, r, i, s) { let a = o[Fe], c = k(o); a !== c && Sn(t, e, n, i, a, r, s); for (let l = H; l < o.length; l++) {
    let u = o[l];
    zs(u[m], u, e, t, i, a);
} }
function sw(e, t, n, o, r) { if (t)
    r ? e.addClass(n, o) : e.removeClass(n, o);
else {
    let i = o.indexOf("-") === -1 ? void 0 : Ji.DashCase;
    r == null ? e.removeStyle(n, o, i) : (typeof r == "string" && r.endsWith("!important") && (r = r.slice(0, -10), i |= Ji.Important), e.setStyle(n, o, r, i));
} }
function Qm(e, t, n, o, r) { let i = ee(), s = o & 2; try {
    Ze(-1), s && t.length > I && bm(e, t, I, !1);
    let a = s ? A.TemplateUpdateStart : A.TemplateCreateStart;
    x(a, r, n), n(o, r);
}
finally {
    Ze(i);
    let a = s ? A.TemplateUpdateEnd : A.TemplateCreateEnd;
    x(a, r, n);
} }
function Ws(e, t, n) { dw(e, t, n), (n.flags & 64) === 64 && fw(e, t, n); }
function oo(e, t, n = re) { let o = t.localNames; if (o !== null) {
    let r = t.index + 1;
    for (let i = 0; i < o.length; i += 2) {
        let s = o[i + 1], a = s === -1 ? n(t, e) : e[s];
        e[r++] = a;
    }
} }
function aw(e, t, n, o) { let i = o.get(cu, kg) || n === Re.ShadowDom || n === Re.ExperimentalIsolatedShadowDom, s = e.selectRootElement(t, i); return cw(s), s; }
function cw(e) { Zm(e); }
var Zm = () => null;
function lw(e) { vg(e) ? vm(e) : CM(e); }
function Ym() { Zm = lw; }
function uw(e) { return e === "class" ? "className" : e === "for" ? "htmlFor" : e === "formaction" ? "formAction" : e === "innerHtml" ? "innerHTML" : e === "readonly" ? "readOnly" : e === "tabindex" ? "tabIndex" : e; }
function Gu(e, t, n, o, r, i) { let s = t[m]; if (Zs(e, s, t, n, o)) {
    ge(e) && Km(t, e.index);
    return;
} e.type & 3 && (n = uw(n)), qu(e, t, n, o, r, i); }
function qu(e, t, n, o, r, i) { if (e.type & 3) {
    let s = re(e, t);
    o = i != null ? i(o, e.value || "", n) : o, r.setProperty(s, n, o);
}
else
    e.type & 12; }
function Km(e, t) { let n = fe(t, e); n[b] & 16 || (n[b] |= 64); }
function dw(e, t, n) { let o = n.directiveStart, r = n.directiveEnd; ge(n) && FN(t, n, e.data[o + n.componentOffset]), e.firstCreatePass || Gi(n, t); let i = n.initialInputs; for (let s = o; s < r; s++) {
    let a = e.data[s], c = Qo(t, e, s, n);
    if (Ae(c, t), i !== null && gw(t, s - o, c, a, n, i), be(a)) {
        let l = fe(n.index, t);
        l[F] = Qo(t, e, s, n);
    }
} }
function fw(e, t, n) { let o = n.directiveStart, r = n.directiveEnd, i = n.index, s = up(); try {
    Ze(i);
    for (let a = o; a < r; a++) {
        let c = e.data[a], l = t[a];
        fc(a), (c.hostBindings !== null || c.hostVars !== 0 || c.hostAttrs !== null) && pw(c, l);
    }
}
finally {
    Ze(-1), fc(s);
} }
function pw(e, t) { e.hostBindings !== null && e.hostBindings(1, t); }
function Qu(e, t) { let n = e.directiveRegistry, o = null; if (n)
    for (let r = 0; r < n.length; r++) {
        let i = n[r];
        wm(t, i.selectors, !1) && (o ??= [], be(i) ? o.unshift(i) : o.push(i));
    } return o; }
function hw(e, t, n, o, r, i) { let s = re(e, t); Gs(t[C], s, i, e.value, n, o, r); }
function Gs(e, t, n, o, r, i, s) { if (i == null)
    e.removeAttribute(t, r, n);
else {
    let a = s == null ? M(i) : s(i, o || "", r);
    e.setAttribute(t, r, a, n);
} }
function gw(e, t, n, o, r, i) { let s = i[t]; if (s !== null)
    for (let a = 0; a < s.length; a += 2) {
        let c = s[a], l = s[a + 1];
        bt(o, n, c, l);
    } }
function qs(e, t, n, o, r) { let i = I + n, s = t[m], a = r(s, t, e, o, n); t[i] = a, Ge(e, !0); let c = e.type === 2; return c ? (Im(t[C], a, e), (rp() === 0 || In(e)) && Ae(a, t), ip()) : Ae(a, t), Ro() && (!c || !eo(e)) && zu(s, t, a, e), e; }
function Qs(e) { let t = e; return ic() ? sc() : (t = t.parent, Ge(t, !1)), t; }
function Jm(e, t, n) { return (e === null || be(e)) && (n = wo(n[t.index])), n[C]; }
function Zu(e, t) { let n = e[R]; if (!n)
    return; let o; try {
    o = n.get(Wt, null);
}
catch {
    o = null;
} o?.(t); }
function Zs(e, t, n, o, r) { let i = e.inputs?.[o], s = e.hostDirectiveInputs?.[o], a = !1; if (s)
    for (let c = 0; c < s.length; c += 2) {
        let l = s[c], u = s[c + 1], d = t.data[l];
        bt(d, n[l], u, r), a = !0;
    } if (i)
    for (let c of i) {
        let l = n[c], u = t.data[c];
        bt(u, l, o, r), a = !0;
    } return a; }
function mw(e, t, n, o, r, i) { let s = null, a = null, c = null, l = !1, u = e.directiveToIndex.get(o.type); if (typeof u == "number" ? s = u : [s, a, c] = u, a !== null && c !== null && e.hostDirectiveInputs?.hasOwnProperty(r)) {
    let d = e.hostDirectiveInputs[r];
    for (let f = 0; f < d.length; f += 2) {
        let p = d[f];
        if (p >= a && p <= c) {
            let h = t.data[p], y = d[f + 1];
            bt(h, n[p], y, i), l = !0;
        }
        else if (p > c)
            break;
    }
} return s !== null && o.inputs.hasOwnProperty(r) && (bt(o, n[s], r, i), l = !0), l; }
function yw(e, t) { let n = fe(t, e), o = n[m]; vw(o, n); let r = n[j]; r !== null && n[se] === null && (n[se] = qg(r, n[R])), x(A.ComponentStart); try {
    Ys(o, n, n[F]);
}
finally {
    x(A.ComponentEnd, n[F]);
} }
function vw(e, t) { for (let n = t.length; n < e.blueprint.length; n++)
    t.push(e.blueprint[n]); }
function Ys(e, t, n) { pi(t); try {
    let o = e.viewQuery;
    o !== null && sl(1, o, n);
    let r = e.template;
    r !== null && Qm(e, t, r, 1, n), e.firstCreatePass && (e.firstCreatePass = !1), t[Ue]?.finishViewCreation(e), e.staticContentQueries && rm(e, t), e.staticViewQueries && sl(2, e.viewQuery, n);
    let i = e.components;
    i !== null && Iw(t, i);
}
catch (o) {
    throw e.firstCreatePass && (e.incompleteFirstPass = !0, e.firstCreatePass = !1), o;
}
finally {
    t[b] &= -5, hi();
} }
function Iw(e, t) { for (let n = 0; n < t.length; n++)
    yw(e, t[n]); }
function ro(e, t, n, o) { let r = O(null); try {
    let i = t.tView, a = e[b] & 4096 ? 4096 : 16, c = Ls(e, i, n, a, null, t, null, null, o?.injector ?? null, o?.embeddedViewInjector ?? null, o?.dehydratedView ?? null), l = e[t.index];
    c[Dt] = l;
    let u = e[Ue];
    return u !== null && (c[Ue] = u.createEmbeddedView(i)), Ys(i, c, n), c;
}
finally {
    O(r);
} }
function on(e, t) { return !t || t.firstChild === null || Zo(e); }
function Hn(e, t, n, o, r = !1) { for (; n !== null;) {
    if (n.type === 128) {
        n = r ? n.projectionNext : n.next;
        continue;
    }
    let i = t[n.index];
    i !== null && o.push(k(i)), X(i) && Ks(i, o);
    let s = n.type;
    if (s & 8)
        Hn(e, t, n.child, o);
    else if (s & 32) {
        let a = Ou(n, t), c;
        for (; c = a();)
            o.push(c);
    }
    else if (s & 16) {
        let a = Gm(t, n);
        if (Array.isArray(a))
            o.push(...a);
        else {
            let c = $t(t[K]);
            Hn(c[m], c, a, o, !0);
        }
    }
    n = r ? n.projectionNext : n.next;
} return o; }
function Ks(e, t) { for (let n = H; n < e.length; n++) {
    let o = e[n], r = o[m].firstChild;
    r !== null && Hn(o[m], o, r, t);
} e[Fe] !== e[j] && t.push(e[Fe]); }
function Xm(e) { if (e[Ht] !== null) {
    for (let t of e[Ht])
        t.impl.addSequence(t);
    e[Ht].length = 0;
} }
var ey = [];
function Ew(e) { return e[Se] ?? Dw(e); }
function Dw(e) { let t = ey.pop() ?? Object.create(Tw); return t.lView = e, t; }
function Cw(e) { e.lView[Se] !== e && (e.lView = null, ey.push(e)); }
var Tw = Xe(Y({}, Aa), { consumerIsAlwaysLive: !0, kind: "template", consumerMarkedDirty: e => { ci(e.lView); }, consumerOnSignalRead() { this.lView[Se] = this; } });
function Mw(e) { let t = e[Se] ?? Object.create(Nw); return t.lView = e, t; }
var Nw = Xe(Y({}, Aa), { consumerIsAlwaysLive: !0, kind: "template", consumerMarkedDirty: e => { let t = $t(e.lView); for (; t && !ty(t[m]);)
        t = $t(t); t && si(t); }, consumerOnSignalRead() { this.lView[Se] = this; } });
function ty(e) { return e.type !== 2; }
function ny(e) { if (e[Mo] === null)
    return; let t = !0; for (; t;) {
    let n = !1;
    for (let o of e[Mo])
        o.dirty && (n = !0, o.zone === null || Zone.current === o.zone ? o.run() : o.zone.run(() => o.run()));
    t = n && !!(e[b] & 8192);
} }
var ww = 100;
function oy(e, t = 0) { let o = e[$e].rendererFactory, r = !1; r || o.begin?.(); try {
    _w(e, t);
}
finally {
    r || o.end?.();
} }
function _w(e, t) { let n = cc(); try {
    lc(!0), Ml(e, t);
    let o = 0;
    for (; So(e);) {
        if (o === ww)
            throw new w(103, !1);
        o++, Ml(e, 1);
    }
}
finally {
    lc(n);
} }
function ry(e, t, n, o) { if (Ct(t))
    return; let r = t[b], i = !1, s = !1; pi(t); let a = !0, c = null, l = null; i || (ty(e) ? (l = Ew(t), c = go(l)) : Lf() === null ? (a = !1, l = Mw(t), c = go(l)) : t[Se] && (mo(t[Se]), t[Se] = null)); try {
    Ya(t), uc(e.bindingStartIndex), n !== null && Qm(e, t, n, 2, o);
    let u = (r & 3) === 3;
    if (!i)
        if (u) {
            let p = e.preOrderCheckHooks;
            p !== null && Ai(t, p, null);
        }
        else {
            let p = e.preOrderHooks;
            p !== null && Ri(t, p, 0, null), Sc(t, 0);
        }
    if (s || Sw(t), ny(t), iy(t, 0), e.contentQueries !== null && rm(e, t), !i)
        if (u) {
            let p = e.contentCheckHooks;
            p !== null && Ai(t, p);
        }
        else {
            let p = e.contentHooks;
            p !== null && Ri(t, p, 1), Sc(t, 1);
        }
    Aw(e, t);
    let d = e.components;
    d !== null && ay(t, d, 0);
    let f = e.viewQuery;
    if (f !== null && sl(2, f, o), !i)
        if (u) {
            let p = e.viewCheckHooks;
            p !== null && Ai(t, p);
        }
        else {
            let p = e.viewHooks;
            p !== null && Ri(t, p, 2), Sc(t, 2);
        }
    if (e.firstUpdatePass === !0 && (e.firstUpdatePass = !1), t[ii]) {
        for (let p of t[ii])
            p();
        t[ii] = null;
    }
    i || (Xm(t), t[b] &= -73);
}
catch (u) {
    throw i || ci(t), u;
}
finally {
    l !== null && (Ur(l, c), a && Cw(l)), hi();
} }
function iy(e, t) { for (let n = Tg(e); n !== null; n = Mg(n))
    for (let o = H; o < n.length; o++) {
        let r = n[o];
        sy(r, t);
    } }
function Sw(e) { for (let t = Tg(e); t !== null; t = Mg(t)) {
    if (!(t[b] & 2))
        continue;
    let n = t[jt];
    for (let o = 0; o < n.length; o++) {
        let r = n[o];
        si(r);
    }
} }
function bw(e, t, n) { x(A.ComponentStart); let o = fe(t, e); try {
    sy(o, n);
}
finally {
    x(A.ComponentEnd, o[F]);
} }
function sy(e, t) { Jf(e) && Ml(e, t); }
function Ml(e, t) { let o = e[m], r = e[b], i = e[Se], s = !!(t === 0 && r & 16); if (s ||= !!(r & 64 && t === 0), s ||= !!(r & 1024), s ||= !!(i?.dirty && zr(i)), s ||= !1, i && (i.dirty = !1), e[b] &= -9217, s)
    ry(o, e, o.template, e[F]);
else if (r & 8192) {
    let a = O(null);
    try {
        ny(e), iy(e, 1);
        let c = o.components;
        c !== null && ay(e, c, 1), Xm(e);
    }
    finally {
        O(a);
    }
} }
function ay(e, t, n) { for (let o = 0; o < t.length; o++)
    bw(e, t[o], n); }
function Aw(e, t) { let n = e.hostBindingOpCodes; if (n !== null)
    try {
        for (let o = 0; o < n.length; o++) {
            let r = n[o];
            if (r < 0)
                Ze(~r);
            else {
                let i = r, s = n[++o], a = n[++o];
                lp(s, i);
                let c = t[i];
                x(A.HostBindingsUpdateStart, c);
                try {
                    a(2, c);
                }
                finally {
                    x(A.HostBindingsUpdateEnd, c);
                }
            }
        }
    }
    finally {
        Ze(-1);
    } }
function Sr(e, t) { let n = cc() ? 64 : 1088; for (e[$e].changeDetectionScheduler?.notify(t); e;) {
    e[b] |= n;
    let o = $t(e);
    if (We(e) && !o)
        return e;
    e = o;
} return null; }
function cy(e, t, n, o) { return [e, !0, 0, t, null, o, null, n, null, null]; }
function ly(e, t) { let n = H + t; if (n < e.length)
    return e[n]; }
function io(e, t, n, o = !0) { let r = t[m]; if (Rw(r, t, e, n), o) {
    let s = Tl(n, e), a = t[C], c = a.parentNode(e[Fe]);
    c !== null && XN(r, e[le], a, t, c, s);
} let i = t[se]; i !== null && i.firstChild !== null && (i.firstChild = null); }
function Yu(e, t) { let n = er(e, t); return n !== void 0 && _r(n[m], n), n; }
function er(e, t) { if (e.length <= H)
    return; let n = H + t, o = e[n]; if (o) {
    let r = o[Dt];
    r !== null && r !== e && $u(r, o), t > 0 && (e[n - 1][ce] = o[ce]);
    let i = Io(e, H + t);
    jm(o[m], o);
    let s = i[Ue];
    s !== null && s.detachView(i[m]), o[G] = null, o[ce] = null, o[b] &= -129;
} return o; }
function Rw(e, t, n, o) { let r = H + o, i = n.length; o > 0 && (n[r - 1][ce] = t), o < i - H ? (t[ce] = n[r], Va(n, H + o, t)) : (n.push(t), t[ce] = null), t[G] = n; let s = t[Dt]; s !== null && n !== s && uy(s, t); let a = t[Ue]; a !== null && a.insertView(e), ai(t), t[b] |= 128; }
function uy(e, t) { let n = e[jt], o = t[G]; if (oe(o))
    e[b] |= 2;
else {
    let r = o[G][K];
    t[K] !== r && (e[b] |= 2);
} n === null ? e[jt] = [t] : n.push(t); }
var Rt = class {
    _lView;
    _cdRefInjectingView;
    _appRef = null;
    _attachedToViewContainer = !1;
    exhaustive;
    get rootNodes() { let t = this._lView, n = t[m]; return Hn(n, t, n.firstChild, []); }
    constructor(t, n) { this._lView = t, this._cdRefInjectingView = n; }
    get context() { return this._lView[F]; }
    set context(t) { this._lView[F] = t; }
    get destroyed() { return Ct(this._lView); }
    destroy() { if (this._appRef)
        this._appRef.detachView(this);
    else if (this._attachedToViewContainer) {
        let t = this._lView[G];
        if (X(t)) {
            let n = t[No], o = n ? n.indexOf(this) : -1;
            o > -1 && (er(t, o), Io(n, o));
        }
        this._attachedToViewContainer = !1;
    } _r(this._lView[m], this._lView); }
    onDestroy(t) { li(this._lView, t); }
    markForCheck() { Sr(this._cdRefInjectingView || this._lView, 4); }
    detach() { this._lView[b] &= -129; }
    reattach() { ai(this._lView), this._lView[b] |= 128; }
    detectChanges() { this._lView[b] |= 1024, oy(this._lView); }
    checkNoChanges() { }
    attachToViewContainerRef() { if (this._appRef)
        throw new w(902, !1); this._attachedToViewContainer = !0; }
    detachFromAppRef() { this._appRef = null; let t = We(this._lView), n = this._lView[Dt]; n !== null && !t && $u(n, this._lView), Vm(this._lView[m], this._lView); }
    attachToAppRef(t) { if (this._attachedToViewContainer)
        throw new w(902, !1); this._appRef = t; let n = We(this._lView), o = this._lView[Dt]; o !== null && !n && uy(o, this._lView), ai(this._lView); }
};
function kw(e) { return So(e._lView) || !!(e._lView[b] & 64); }
function xw(e) { si(e._lView); }
var tr = (() => { class e {
    _declarationLView;
    _declarationTContainer;
    elementRef;
    static __NG_ELEMENT_ID__ = Ow;
    constructor(n, o, r) { this._declarationLView = n, this._declarationTContainer = o, this.elementRef = r; }
    get ssrId() { return this._declarationTContainer.tView?.ssrId || null; }
    createEmbeddedView(n, o) { return this.createEmbeddedViewImpl(n, o); }
    createEmbeddedViewImpl(n, o, r) { let i = ro(this._declarationLView, this._declarationTContainer, n, { embeddedViewInjector: o, dehydratedView: r }); return new Rt(i); }
} return e; })();
function Ow() { return Js(T(), g()); }
function Js(e, t) { return e.type & 4 ? new tr(t, e, Qn(e, t)) : null; }
var Nl = "<-- AT THIS LOCATION", Lw = "/guide/hydration#third-party-scripts-with-dom-manipulation";
function Pw(e) { switch (e) {
    case 4: return "view container";
    case 2: return "element";
    case 8: return "ng-container";
    case 32: return "icu";
    case 64: return "i18n";
    case 16: return "projection";
    case 1: return "text";
    case 128: return "@let";
    default: return "<unknown>";
} }
function Fw(e, t) {
    let n = `During serialization, Angular was unable to find an element in the DOM:

`, o = `${Bw(e, t, !1)}

`, r = Uw();
    throw new w(-502, n + o + r);
}
function dy(e) {
    let t = "During serialization, Angular detected DOM nodes that were created outside of Angular context and provided as projectable nodes (likely via `ViewContainerRef.createComponent` or `createComponent` APIs). Hydration is not supported for such cases, consider refactoring the code to avoid this pattern or using `ngSkipHydration` on the host element of the component.\n\n", n = `${$w(e)}

`, o = t + n + zw();
    return new w(-503, o);
}
function Hw(e) { let t = []; if (e.attrs)
    for (let n = 0; n < e.attrs.length;) {
        let o = e.attrs[n++];
        if (typeof o == "number")
            break;
        let r = e.attrs[n++];
        t.push(`${o}="${ts(r)}"`);
    } return t.join(" "); }
var jw = new Set(["ngh", "ng-version", "ng-server-context"]);
function Vw(e) { let t = []; for (let n = 0; n < e.attributes.length; n++) {
    let o = e.attributes[n];
    jw.has(o.name) || t.push(`${o.name}="${ts(o.value)}"`);
} return t.join(" "); }
function Oc(e, t = "\u2026") { switch (e.type) {
    case 1: return `#text${e.value ? `(${e.value})` : ""}`;
    case 2:
        let o = Hw(e), r = e.value.toLowerCase();
        return `<${r}${o ? " " + o : ""}>${t}</${r}>`;
    case 8: return "<!-- ng-container -->";
    case 4: return "<!-- container -->";
    default: return `#node(${Pw(e.type)})`;
} }
function Li(e, t = "\u2026") { let n = e; switch (n.nodeType) {
    case Node.ELEMENT_NODE:
        let o = n.tagName.toLowerCase(), r = Vw(n);
        return `<${o}${r ? " " + r : ""}>${t}</${o}>`;
    case Node.TEXT_NODE:
        let i = n.textContent ? ts(n.textContent) : "";
        return `#text${i ? `(${i})` : ""}`;
    case Node.COMMENT_NODE: return `<!-- ${ts(n.textContent ?? "")} -->`;
    default: return `#node(${n.nodeType})`;
} }
function Bw(e, t, n) {
    let r = "";
    t.prev ? (r += `  \u2026
`, r += "  " + Oc(t.prev) + `
`) : t.type && t.type & 12 && (r += `  \u2026
`), n ? (r += "  " + Oc(t) + `
`, r += `  <!-- container -->  ${Nl}
`) : r += "  " + Oc(t) + `  ${Nl}
`, r += `  \u2026
`;
    let i = t.type ? Uu(e[m], t, e) : null;
    return i && (r = Li(i, `
` + r)), r;
}
function $w(e) {
    let n = "", o = e;
    return o.previousSibling && (n += `  \u2026
`, n += "  " + Li(o.previousSibling) + `
`), n += "  " + Li(o) + `  ${Nl}
`, e.nextSibling && (n += `  \u2026
`), e.parentNode && (n = Li(o.parentNode, `
` + n)), n;
}
function Uw(e) {
    return `To fix this problem:
  * check ${e ? `the "${e}"` : "corresponding"} component for hydration-related issues
  * check to see if your template has valid HTML structure
  * check if there are any third-party scripts that manipulate the DOM. More info: ${xa}${Lw}
  * or skip hydration by adding the \`ngSkipHydration\` attribute to its host node in a template

`;
}
function zw() {
    return `Note: attributes are only displayed to better represent the DOM but have no effect on hydration mismatches.

`;
}
function Ww(e) { return e.replace(/\s+/gm, ""); }
function ts(e, t = 50) { return e ? (e = Ww(e), e.length > t ? `${e.substring(0, t - 1)}\u2026` : e) : ""; }
function fy(e, t, n) { let o = t.insertBeforeIndex, r = Array.isArray(o) ? o[0] : o; return r === null ? Um(e, t, n) : k(n[r]); }
function py(e, t, n, o, r) { let i = t.insertBeforeIndex; if (Array.isArray(i)) {
    let s = o, a = null;
    if (t.type & 3 || (a = s, s = r), s !== null && t.componentOffset === -1)
        for (let c = 1; c < i.length; c++) {
            let l = n[i[c]];
            en(e, s, l, a, !1);
        }
} }
function hn(e, t, n, o, r) { let i = e.data[t]; if (i === null)
    i = Ku(e, t, n, o, r), cp() && (i.flags |= 32);
else if (i.type & 64) {
    i.type = n, i.value = o, i.attrs = r;
    let s = En();
    i.injectorIndex = s === null ? -1 : s.injectorIndex;
} return Ge(i, !0), i; }
function Ku(e, t, n, o, r) { let i = ap(), s = ic(), a = s ? i : i && i.parent, c = e.data[t] = qw(e, a, n, t, o, r); return Gw(e, c, i, s), c; }
function Gw(e, t, n, o) { e.firstChild === null && (e.firstChild = t), n !== null && (o ? n.child == null && t.parent !== null && (n.child = t) : n.next === null && (n.next = t, t.prev = n)); }
function qw(e, t, n, o, r, i) { let s = t ? t.injectorIndex : -1, a = 0; return bo() && (a |= 128), { type: n, index: o, insertBeforeIndex: null, injectorIndex: s, directiveStart: -1, directiveEnd: -1, directiveStylingLast: -1, componentOffset: -1, controlDirectiveIndex: -1, customControlIndex: -1, propertyBindings: null, flags: a, providerIndexes: 0, value: r, namespace: gi(), attrs: i, mergedAttrs: null, localNames: null, initialInputs: null, inputs: null, hostDirectiveInputs: null, outputs: null, hostDirectiveOutputs: null, directiveToIndex: null, tView: null, next: null, prev: null, projectionNext: null, child: null, parent: t, projection: null, styles: null, stylesWithoutHost: null, residualStyles: void 0, classes: null, classesWithoutHost: null, residualClasses: void 0, classBindings: 0, styleBindings: 0 }; }
function hy(e, t) { if (e.push(t), e.length > 1)
    for (let n = e.length - 2; n >= 0; n--) {
        let o = e[n];
        gy(o) || Qw(o, t) && Zw(o) === null && Yw(o, t.index);
    } }
function gy(e) { return !(e.type & 64); }
function Qw(e, t) { return gy(t) || e.index > t.index; }
function Zw(e) { let t = e.insertBeforeIndex; return Array.isArray(t) ? t[0] : t; }
function Yw(e, t) { let n = e.insertBeforeIndex; Array.isArray(n) ? n[0] = t : (Wm(fy, py), e.insertBeforeIndex = t); }
function Ho(e, t) { let n = e.data[t]; return n === null || typeof n == "string" ? null : n.hasOwnProperty("currentCaseLViewIndex") ? n : n.value; }
function Kw(e, t, n) { let o = e.data[t]; o === null ? e.data[t] = n : o.value = n; }
function Jw(e, t) { let n = e.insertBeforeIndex; n === null ? (Wm(fy, py), n = e.insertBeforeIndex = [null, t]) : (Vf(Array.isArray(n), !0, "Expecting array here"), n.push(t)); }
function Xw(e, t, n) { let o = Ku(e, n, 64, null, null); return hy(t, o), o; }
function Xs(e, t) { let n = t[e.currentCaseLViewIndex]; return n === null ? n : n < 0 ? ~n : n; }
function e_(e) { return e >>> 17; }
function t_(e) { return (e & 131070) >>> 1; }
function n_(e, t, n) { return e | t << 17 | n << 1; }
function my(e) { return e === -1; }
function Ju(e, t, n) { e.index = 0; let o = Xs(t, n); o !== null ? e.removes = t.remove[o] : e.removes = P; }
function ns(e) { if (e.index < e.removes.length) {
    let t = e.removes[e.index++];
    if (t > 0)
        return e.lView[t];
    {
        e.stack.push(e.index, e.removes);
        let n = ~t, o = e.lView[m].data[n];
        return Ju(e, o, e.lView), ns(e);
    }
}
else
    return e.stack.length === 0 ? (e.lView = void 0, null) : (e.removes = e.stack.pop(), e.index = e.stack.pop(), ns(e)); }
function o_() { let e = { stack: [], index: -1 }; function t(n, o) { for (e.lView = o; e.stack.length;)
    e.stack.pop(); return Ju(e, n.value, o), ns.bind(null, e); } return t; }
function r_(e, t) { let n = { stack: [], index: -1, lView: t }; return Ju(n, e, t), ns.bind(null, n); }
var i_ = new RegExp(`^(\\d+)*(${su}|${iu})*(.*)`);
function s_(e, t) { let n = [e]; for (let o of t) {
    let r = n.length - 1;
    if (r > 0 && n[r - 1] === o) {
        let i = n[r] || 1;
        n[r] = i + 1;
    }
    else
        n.push(o, "");
} return n.join(""); }
function a_(e) { let t = e.match(i_), [n, o, r, i] = t, s = o ? parseInt(o, 10) : r, a = []; for (let [c, l, u] of i.matchAll(/(f|n)(\d*)/g)) {
    let d = parseInt(u, 10) || 1;
    a.push(l, d);
} return [s, ...a]; }
function c_(e) { return !e.prev && e.parent?.type === 8; }
function Lc(e) { return e.index - I; }
function so(e, t) { return !(e.type & 144) && !!t[e.index] && yy(k(t[e.index])); }
function yy(e) { return !!e && !e.isConnected; }
function vy(e, t) { let n = e.i18nNodes; if (n)
    return n.get(t); }
function l_(e, t, n) { let r = e.data[vr]?.[n]; return r ? Iy(r, t) : null; }
function br(e, t, n, o) { let r = Lc(o), i = vy(e, r); if (i === void 0) {
    let s = e.data[vr];
    if (s?.[r])
        i = Iy(s[r], n);
    else if (t.firstChild === o)
        i = e.firstChild;
    else {
        let a = o.prev === null, c = o.prev ?? o.parent;
        if (c_(o)) {
            let l = Lc(o.parent);
            i = il(e, l);
        }
        else {
            let l = re(c, n);
            if (a)
                i = l.firstChild;
            else {
                let u = Lc(c), d = il(e, u);
                if (c.type === 2 && d) {
                    let p = vu(e, u) + 1;
                    i = ea(p, d);
                }
                else
                    i = l.nextSibling;
            }
        }
    }
} return i; }
function ea(e, t) { let n = t; for (let o = 0; o < e; o++)
    n = n.nextSibling; return n; }
function u_(e, t) { let n = e; for (let o = 0; o < t.length; o += 2) {
    let r = t[o], i = t[o + 1];
    for (let s = 0; s < i; s++)
        switch (r) {
            case Ag:
                n = n.firstChild;
                break;
            case Rg:
                n = n.nextSibling;
                break;
        }
} return n; }
function Iy(e, t) { let [n, ...o] = a_(e), r; if (n === iu)
    r = t[K][j];
else if (n === su)
    r = bu(t[K][j]);
else {
    let i = Number(n);
    r = k(t[i + I]);
} return u_(r, o); }
function wl(e, t) { if (e === t)
    return []; if (e.parentElement == null || t.parentElement == null)
    return null; if (e.parentElement === t.parentElement)
    return d_(e, t); {
    let n = t.parentElement, o = wl(e, n), r = wl(n.firstChild, t);
    return !o || !r ? null : [...o, Ag, ...r];
} }
function d_(e, t) { let n = [], o = null; for (o = e; o != null && o !== t; o = o.nextSibling)
    n.push(Rg); return o == null ? null : n; }
function Xp(e, t, n) { let o = wl(e, t); return o === null ? null : s_(n, o); }
function Ey(e, t, n) { let o = e.parent, r, i, s; for (; o !== null && (so(o, t) || n?.has(o.index));)
    o = o.parent; o === null || !(o.type & 3) ? (r = s = iu, i = t[K][j]) : (r = o.index, i = k(t[r]), s = M(r - I)); let a = k(t[e.index]); if (e.type & 44) {
    let l = Kt(t, e);
    l && (a = l);
} let c = Xp(i, a, s); if (c === null && i !== a) {
    let l = i.ownerDocument.body;
    if (c = Xp(l, a, su), c === null)
        throw Fw(t, e);
} return c; }
function Dy(e, t) { let n = e.createNodeIterator(t, NodeFilter.SHOW_COMMENT, { acceptNode: f_ }), o, r = new Map; for (; o = n.nextNode();) {
    let i = "ngh=", s = o?.textContent, a = s?.indexOf(i) ?? -1;
    if (a > -1) {
        let c = s.substring(a + i.length).trim();
        r.set(c, o);
    }
} return r; }
function f_(e) { return e.textContent?.trimStart().startsWith("ngh=") ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; }
var Cy = !1, Ty = () => { };
function Xu(e) { Cy = e; }
function ta() { return Cy; }
function p_(e, t, n, o) { Ty(e, t, n, o); }
function My() { Ty = v_; }
function Ny(e) { return e = e ?? E(Ce), e.get(lu, !1); }
function wy(e, t) { let n = t.i18nChildren.get(e); return n === void 0 && (n = h_(e), t.i18nChildren.set(e, n)), n; }
function h_(e) { let t = new Set; function n(o) { switch (t.add(o.index), o.kind) {
    case 1:
    case 2: {
        for (let r of o.children)
            n(r);
        break;
    }
    case 3: {
        for (let r of o.cases)
            for (let i of r)
                n(i);
        break;
    }
} } for (let o = I; o < e.bindingStartIndex; o++) {
    let r = e.data[o];
    if (!(!r || !r.ast))
        for (let i of r.ast)
            n(i);
} return t.size === 0 ? null : t; }
function _y(e, t, n) { if (!n.isI18nHydrationEnabled)
    return null; let o = e[m], r = o.data[t]; if (!r || !r.ast)
    return null; let i = o.data[r.parentTNodeIndex]; if (i && Ig(i))
    return null; let s = { caseQueue: [], disconnectedNodes: new Set, disjointNodes: new Set }; return _l(e, s, n, r.ast), s.caseQueue.length === 0 && s.disconnectedNodes.size === 0 && s.disjointNodes.size === 0 ? null : s; }
function _l(e, t, n, o) { let r = null; for (let i of o) {
    let s = m_(e, t, n, i);
    s && (g_(r, s) && t.disjointNodes.add(i.index - I), r = s);
} return r; }
function g_(e, t) { return e && e.nextSibling !== t; }
function m_(e, t, n, o) { let r = k(e[o.index]); if (!r || yy(r))
    return t.disconnectedNodes.add(o.index - I), null; let i = r; switch (o.kind) {
    case 0: {
        Iu(n, i);
        break;
    }
    case 1:
    case 2: {
        _l(e, t, n, o.children);
        break;
    }
    case 3: {
        let s = e[o.currentCaseLViewIndex];
        if (s != null) {
            let a = s < 0 ? ~s : s;
            t.caseQueue.push(a), _l(e, t, n, o.cases[a]);
        }
        break;
    }
} return y_(e, o); }
function y_(e, t) { let o = e[m].data[t.index]; return ms(o) ? Kt(e, o) : t.kind === 3 ? r_(o, e)() ?? k(e[t.index]) : k(e[t.index]) ?? null; }
function qt(e, t) { e.currentNode = t; }
function xo(e, t, n) { let o = n.index - I, { disconnectedNodes: r } = e, i = t.currentNode; return t.isConnected ? (e.i18nNodes.set(o, i), r.delete(o)) : r.add(o), i; }
function Pc(e, t) { let n = e.currentNode; for (let o = 0; o < t && n; o++)
    n = n?.nextSibling ?? null; return n; }
function Fc(e, t) { return { currentNode: t, isConnected: e.isConnected }; }
function v_(e, t, n, o) { let r = e[se]; if (!r || !ta() || n && (Ig(n) || As(r, n.index - I)))
    return; let i = e[m], s = i.data[t]; function a() { if (my(o)) {
    let p = br(r, i, e, n);
    return n.type & 8 ? p : p.firstChild;
} return r?.firstChild; } let c = a(), l = Kg(r) ?? new Set, u = r.i18nNodes ??= new Map, d = r.data[Ms]?.[t - I] ?? [], f = r.dehydratedIcuData ??= new Map; Cn({ hydrationInfo: r, lView: e, i18nNodes: u, disconnectedNodes: l, caseQueue: d, dehydratedIcuData: f }, { currentNode: c, isConnected: !0 }, s.ast), r.disconnectedNodes = l.size === 0 ? null : l; }
function Cn(e, t, n) { if (Array.isArray(n)) {
    let o = t;
    for (let r of n) {
        let i = l_(e.hydrationInfo, e.lView, r.index - I);
        i && (o = Fc(t, i)), Cn(e, o, r);
    }
}
else {
    if (e.disconnectedNodes.has(n.index - I))
        return;
    switch (n.kind) {
        case 0: {
            let o = xo(e, t, n);
            qt(t, o?.nextSibling ?? null);
            break;
        }
        case 1: {
            Cn(e, Fc(t, t.currentNode?.firstChild ?? null), n.children);
            let o = xo(e, t, n);
            qt(t, o?.nextSibling ?? null);
            break;
        }
        case 2: {
            let o = n.index - I, { hydrationInfo: r } = e, i = Zg(r, o);
            switch (n.type) {
                case 0: {
                    let s = xo(e, t, n);
                    if (_M(r, o)) {
                        Cn(e, t, n.children);
                        let a = Pc(t, 1);
                        qt(t, a);
                    }
                    else if (Cn(e, Fc(t, t.currentNode?.firstChild ?? null), n.children), qt(t, s?.nextSibling ?? null), i !== null) {
                        let a = Pc(t, i + 1);
                        qt(t, a);
                    }
                    break;
                }
                case 1: {
                    xo(e, t, n);
                    let s = Pc(t, i + 1);
                    qt(t, s);
                    break;
                }
            }
            break;
        }
        case 3: {
            let o = t.isConnected ? e.caseQueue.shift() : null, r = { currentNode: null, isConnected: !1 };
            for (let s = 0; s < n.cases.length; s++)
                Cn(e, s === o ? t : r, n.cases[s]);
            o !== null && e.dehydratedIcuData.set(n.index, { case: o, node: n });
            let i = xo(e, t, n);
            qt(t, i?.nextSibling ?? null);
            break;
        }
    }
} }
var Sy = () => { };
function I_(e, t, n) { Sy(e, t, n); }
function by() { Sy = E_; }
function E_(e, t, n) { let o = e[se]?.dehydratedIcuData; o && o.get(t)?.case === n && o.delete(t); }
function D_(e) { let t = e[se]; if (t) {
    let { i18nNodes: n, dehydratedIcuData: o } = t;
    if (n && o) {
        let r = e[C];
        for (let i of o.values())
            C_(r, n, i);
    }
    t.i18nNodes = void 0, t.dehydratedIcuData = void 0;
} }
function C_(e, t, n) { for (let o of n.node.cases[n.case]) {
    let r = t.get(o.index - I);
    r && Mr(e, r, !1);
} }
function na(e) { let t = e[Ee] ?? [], o = e[G][C], r = []; for (let i of t)
    i.data[Ns] !== void 0 ? r.push(i) : Ay(i, o); e[Ee] = r; }
function T_(e) { let { lContainer: t } = e, n = t[Ee]; if (n === null)
    return; let r = t[G][C]; for (let i of n)
    Ay(i, r); }
function Ay(e, t) { let n = 0, o = e.firstChild; if (o) {
    let r = e.data[it];
    for (; n < r;) {
        let i = o.nextSibling;
        Mr(t, o, !1), o = i, n++;
    }
} }
function oa(e) { na(e); let t = e[j]; oe(t) && nr(t); for (let n = H; n < e.length; n++)
    nr(e[n]); }
function nr(e) { D_(e); let t = e[m]; for (let n = I; n < t.bindingStartIndex; n++)
    if (X(e[n])) {
        let o = e[n];
        oa(o);
    }
    else
        oe(e[n]) && nr(e[n]); }
function ed(e) { let t = e._views; for (let n of t) {
    let o = yu(n);
    o !== null && o[j] !== null && (oe(o) ? nr(o) : oa(o));
} }
function M_(e, t, n, o) { e !== null && (n.cleanup(t), oa(e.lContainer), ed(o)); }
function N_(e, t) { let n = []; for (let o of t)
    for (let r = 0; r < (o[yr] ?? 1); r++) {
        let i = { data: o, firstChild: null };
        o[it] > 0 && (i.firstChild = e, e = ea(o[it], e)), n.push(i);
    } return [e, n]; }
var Ry = () => null, ky = () => null;
function xy() { Ry = w_, ky = __; }
function w_(e, t) { return Ly(e, t) ? e[Ee].shift() : (na(e), null); }
function or(e, t) { return Ry(e, t); }
function __(e, t, n) { if (t.tView.ssrId === null)
    return null; let o = or(e, t.tView.ssrId); return n[m].firstUpdatePass && o === null && S_(n, t), o; }
function Oy(e, t, n) { return ky(e, t, n); }
function S_(e, t) { let n = t; for (; n;) {
    if (eh(e, n))
        return;
    if ((n.flags & 256) === 256)
        break;
    n = n.prev;
} for (n = t.next; n && (n.flags & 512) === 512;) {
    if (eh(e, n))
        return;
    n = n.next;
} }
function Ly(e, t) { let n = e[Ee]; return !t || n === null || n.length === 0 ? !1 : n[0].data[Ts] === t; }
function eh(e, t) { let n = t.tView?.ssrId; if (n == null)
    return !1; let o = e[t.index]; return X(o) && Ly(o, n) ? (na(o), !0) : !1; }
var Py = class {
}, ra = class {
}, Sl = class {
    resolveComponentFactory(t) { throw new w(917, !1); }
}, Ar = class {
    static NULL = new Sl;
}, rr = class {
}, b_ = (() => { class e {
    destroyNode = null;
    static __NG_ELEMENT_ID__ = () => A_();
} return e; })();
function A_() { let e = g(), t = T(), n = fe(t.index, e); return (oe(n) ? n : e)[C]; }
var Fy = (() => { class e {
    static \u0275prov = V({ token: e, providedIn: "root", factory: () => null });
} return e; })();
function td(e) { return e.ngModule !== void 0; }
function Qt(e) { return !!mn(e); }
function wi(e) { return !!Be(e); }
function th(e) { return !!Me(e); }
function jo(e) { return !!W(e); }
function R_(e) { return W(e) ? "component" : Me(e) ? "directive" : Be(e) ? "pipe" : "type"; }
function k_(e, t) { if (Qr(e) && (e = z(e), !e))
    throw new Error(`Expected forwardRef function, imported from "${Ne(t)}", to return a standalone entity or NgModule but got "${Ne(e) || e}".`); if (mn(e) == null) {
    let n = W(e) || Me(e) || Be(e);
    if (n != null) {
        if (!n.standalone) {
            let o = R_(e);
            throw new Error(`The "${Ne(e)}" ${o}, imported from "${Ne(t)}", is not standalone. Does the ${o} have the standalone: false flag?`);
        }
    }
    else
        throw td(e) ? new Error(`A module with providers was imported from "${Ne(t)}". Modules with providers are not supported in standalone components imports.`) : new Error(`The "${Ne(e)}" type, imported from "${Ne(t)}", must be a standalone component / directive / pipe or an NgModule. Did you forget to add the required @Component / @Directive / @Pipe or @NgModule annotation?`);
} }
var bl = class {
    ownerNgModule = new WeakMap;
    ngModulesWithSomeUnresolvedDecls = new Set;
    ngModulesScopeCache = new WeakMap;
    standaloneComponentsScopeCache = new WeakMap;
    resolveNgModulesDecls() { if (this.ngModulesWithSomeUnresolvedDecls.size !== 0) {
        for (let t of this.ngModulesWithSomeUnresolvedDecls) {
            let n = mn(t);
            if (n?.declarations)
                for (let o of _n(n.declarations))
                    jo(o) && this.ownerNgModule.set(o, t);
        }
        this.ngModulesWithSomeUnresolvedDecls.clear();
    } }
    getComponentDependencies(t, n) { this.resolveNgModulesDecls(); let o = W(t); if (o === null)
        throw new Error(`Attempting to get component dependencies for a type that is not a component: ${t}`); if (o.standalone) {
        let r = this.getStandaloneComponentScope(t, n);
        return r.compilation.isPoisoned ? { dependencies: [] } : { dependencies: [...r.compilation.directives, ...r.compilation.pipes, ...r.compilation.ngModules] };
    }
    else {
        if (!this.ownerNgModule.has(t))
            return { dependencies: [] };
        let r = this.getNgModuleScope(this.ownerNgModule.get(t));
        return r.compilation.isPoisoned ? { dependencies: [] } : { dependencies: [...r.compilation.directives, ...r.compilation.pipes] };
    } }
    registerNgModule(t, n) { if (!Qt(t))
        throw new Error(`Attempting to register a Type which is not NgModule as NgModule: ${t}`); this.ngModulesWithSomeUnresolvedDecls.add(t); }
    clearScopeCacheFor(t) { this.ngModulesScopeCache.delete(t), this.standaloneComponentsScopeCache.delete(t); }
    getNgModuleScope(t) { if (this.ngModulesScopeCache.has(t))
        return this.ngModulesScopeCache.get(t); let n = this.computeNgModuleScope(t); return this.ngModulesScopeCache.set(t, n), n; }
    computeNgModuleScope(t) { let n = Kr(t), o = { exported: { directives: new Set, pipes: new Set }, compilation: { directives: new Set, pipes: new Set } }; for (let r of _n(n.imports))
        if (Qt(r)) {
            let i = this.getNgModuleScope(r);
            wt(i.exported.directives, o.compilation.directives), wt(i.exported.pipes, o.compilation.pipes);
        }
        else if (vo(r))
            if (th(r) || jo(r))
                o.compilation.directives.add(r);
            else if (wi(r))
                o.compilation.pipes.add(r);
            else
                throw new w(980, "The standalone imported type is neither a component nor a directive nor a pipe");
        else {
            o.compilation.isPoisoned = !0;
            break;
        } if (!o.compilation.isPoisoned)
        for (let r of _n(n.declarations)) {
            if (Qt(r) || vo(r)) {
                o.compilation.isPoisoned = !0;
                break;
            }
            wi(r) ? o.compilation.pipes.add(r) : o.compilation.directives.add(r);
        } for (let r of _n(n.exports))
        if (Qt(r)) {
            let i = this.getNgModuleScope(r);
            wt(i.exported.directives, o.exported.directives), wt(i.exported.pipes, o.exported.pipes), wt(i.exported.directives, o.compilation.directives), wt(i.exported.pipes, o.compilation.pipes);
        }
        else
            wi(r) ? o.exported.pipes.add(r) : o.exported.directives.add(r); return o; }
    getStandaloneComponentScope(t, n) { if (this.standaloneComponentsScopeCache.has(t))
        return this.standaloneComponentsScopeCache.get(t); let o = this.computeStandaloneComponentScope(t, n); return this.standaloneComponentsScopeCache.set(t, o), o; }
    computeStandaloneComponentScope(t, n) { let o = { compilation: { directives: new Set([t]), pipes: new Set, ngModules: new Set } }; for (let r of Pe(n ?? [])) {
        let i = z(r);
        try {
            k_(i, t);
        }
        catch {
            return o.compilation.isPoisoned = !0, o;
        }
        if (Qt(i)) {
            o.compilation.ngModules.add(i);
            let s = this.getNgModuleScope(i);
            if (s.exported.isPoisoned)
                return o.compilation.isPoisoned = !0, o;
            wt(s.exported.directives, o.compilation.directives), wt(s.exported.pipes, o.compilation.pipes);
        }
        else if (wi(i))
            o.compilation.pipes.add(i);
        else if (th(i) || jo(i))
            o.compilation.directives.add(i);
        else
            return o.compilation.isPoisoned = !0, o;
    } return o; }
    isOrphanComponent(t) { let n = W(t); return !n || n.standalone ? !1 : (this.resolveNgModulesDecls(), !this.ownerNgModule.has(t)); }
};
function wt(e, t) { for (let n of e)
    t.add(n); }
var jn = new bl, Pi = {}, kn = class {
    injector;
    parentInjector;
    constructor(t, n) { this.injector = t, this.parentInjector = n; }
    get(t, n, o) { let r = this.injector.get(t, Pi, o); return r !== Pi || n === Pi ? r : this.parentInjector.get(t, n, o); }
};
function os(e, t, n) { let o = n ? e.styles : null, r = n ? e.classes : null, i = 0; if (t !== null)
    for (let s = 0; s < t.length; s++) {
        let a = t[s];
        if (typeof a == "number")
            i = a;
        else if (i == 1)
            r = qr(r, a);
        else if (i == 2) {
            let c = a, l = t[++s];
            o = qr(o, c + ": " + l + ";");
        }
    } n ? e.styles = o : e.stylesWithoutHost = o, n ? e.classes = r : e.classesWithoutHost = r; }
function ao(e, t = 0) { let n = g(); if (n === null)
    return Le(e, t); let o = T(); return dg(o, n, z(e), t); }
function Hy() { let e = "invalid"; throw new Error(e); }
function jy(e, t, n, o, r) { let i = o === null ? null : { "": -1 }, s = r(e, n); if (s !== null) {
    let a = s, c = null, l = null;
    for (let u of s)
        if (u.resolveHostDirectives !== null) {
            [a, c, l] = u.resolveHostDirectives(s);
            break;
        }
    L_(e, t, n, a, i, c, l);
} i !== null && o !== null && x_(n, o, i); }
function x_(e, t, n) { let o = e.localNames = []; for (let r = 0; r < t.length; r += 2) {
    let i = n[t[r + 1]];
    if (i == null)
        throw new w(-301, !1);
    o.push(t[r], i);
} }
function O_(e, t, n) { t.componentOffset = n, (e.components ??= []).push(t.index); }
function L_(e, t, n, o, r, i, s) { let a = o.length, c = null; for (let f = 0; f < a; f++) {
    let p = o[f];
    c === null && be(p) && (c = p, O_(e, n, f)), Jc(Gi(n, t), e, p.type);
} B_(n, e.data.length, a), c?.viewProvidersResolver && c.viewProvidersResolver(c); for (let f = 0; f < a; f++) {
    let p = o[f];
    p.providersResolver && p.providersResolver(p);
} let l = !1, u = !1, d = wr(e, t, a, null); a > 0 && (n.directiveToIndex = new Map); for (let f = 0; f < a; f++) {
    let p = o[f];
    if (n.mergedAttrs = Pn(n.mergedAttrs, p.hostAttrs), F_(e, n, t, d, p), V_(d, p, r), s !== null && s.has(p)) {
        let [y, v] = s.get(p);
        n.directiveToIndex.set(p.type, [d, y + n.directiveStart, v + n.directiveStart]);
    }
    else
        (i === null || !i.has(p)) && n.directiveToIndex.set(p.type, d);
    p.contentQueries !== null && (n.flags |= 4), (p.hostBindings !== null || p.hostAttrs !== null || p.hostVars !== 0) && (n.flags |= 64);
    let h = p.type.prototype;
    !l && (h.ngOnChanges || h.ngOnInit || h.ngDoCheck) && ((e.preOrderHooks ??= []).push(n.index), l = !0), !u && (h.ngOnChanges || h.ngDoCheck) && ((e.preOrderCheckHooks ??= []).push(n.index), u = !0), d++;
} P_(e, n, i); }
function P_(e, t, n) { for (let o = t.directiveStart; o < t.directiveEnd; o++) {
    let r = e.data[o];
    if (n === null || !n.has(r))
        nh(0, t, r, o), nh(1, t, r, o), rh(t, o, !1);
    else {
        let i = n.get(r);
        oh(0, t, i, o), oh(1, t, i, o), rh(t, o, !0);
    }
} }
function nh(e, t, n, o) { let r = e === 0 ? n.inputs : n.outputs; for (let i in r)
    if (r.hasOwnProperty(i)) {
        let s;
        e === 0 ? s = t.inputs ??= {} : s = t.outputs ??= {}, s[i] ??= [], s[i].push(o), Vy(t, i);
    } }
function oh(e, t, n, o) { let r = e === 0 ? n.inputs : n.outputs; for (let i in r)
    if (r.hasOwnProperty(i)) {
        let s = r[i], a;
        e === 0 ? a = t.hostDirectiveInputs ??= {} : a = t.hostDirectiveOutputs ??= {}, a[s] ??= [], a[s].push(o, i), Vy(t, s);
    } }
function Vy(e, t) { t === "class" ? e.flags |= 8 : t === "style" && (e.flags |= 16); }
function rh(e, t, n) { let { attrs: o, inputs: r, hostDirectiveInputs: i } = e; if (o === null || !n && r === null || n && i === null || Au(e)) {
    e.initialInputs ??= [], e.initialInputs.push(null);
    return;
} let s = null, a = 0; for (; a < o.length;) {
    let c = o[a];
    if (c === 0) {
        a += 4;
        continue;
    }
    else if (c === 5) {
        a += 2;
        continue;
    }
    else if (typeof c == "number")
        break;
    if (!n && r.hasOwnProperty(c)) {
        let l = r[c];
        for (let u of l)
            if (u === t) {
                s ??= [], s.push(c, o[a + 1]);
                break;
            }
    }
    else if (n && i.hasOwnProperty(c)) {
        let l = i[c];
        for (let u = 0; u < l.length; u += 2)
            if (l[u] === t) {
                s ??= [], s.push(l[u + 1], o[a + 1]);
                break;
            }
    }
    a += 2;
} e.initialInputs ??= [], e.initialInputs.push(s); }
function F_(e, t, n, o, r) { e.data[o] = r; let i = r.factory || (r.factory = Xr(r.type, !0)), s = new Xt(i, be(r), ao, null); e.blueprint[o] = s, n[o] = s, H_(e, t, o, wr(e, n, r.hostVars, L), r); }
function H_(e, t, n, o, r) { let i = r.hostBindings; if (i) {
    let s = e.hostBindingOpCodes;
    s === null && (s = e.hostBindingOpCodes = []);
    let a = ~t.index;
    j_(s) != a && s.push(a), s.push(n, o, i);
} }
function j_(e) { let t = e.length; for (; t > 0;) {
    let n = e[--t];
    if (typeof n == "number" && n < 0)
        return n;
} return 0; }
function V_(e, t, n) { if (n) {
    if (t.exportAs)
        for (let o = 0; o < t.exportAs.length; o++)
            n[t.exportAs[o]] = e;
    be(t) && (n[""] = e);
} }
function B_(e, t, n) { e.flags |= 1, e.directiveStart = t, e.directiveEnd = t + n, e.providerIndexes = t; }
function nd(e, t, n, o, r, i, s, a) { let c = t[m], l = c.consts, u = ue(l, s), d = hn(c, e, n, o, u); return i && jy(c, t, d, ue(l, a), r), d.mergedAttrs = Pn(d.mergedAttrs, d.attrs), d.attrs !== null && os(d, d.attrs, !1), d.mergedAttrs !== null && os(d, d.mergedAttrs, !0), c.queries !== null && c.queries.elementStart(c, d), d; }
function od(e, t) { tg(e, t), Ga(t) && e.queries.elementEnd(t); }
function By(e, t, n, o, r, i) { let s = t.consts, a = ue(s, r), c = hn(t, e, n, o, a); if (c.mergedAttrs = Pn(c.mergedAttrs, c.attrs), i != null) {
    let l = ue(s, i);
    c.localNames = [];
    for (let u = 0; u < l.length; u += 2)
        c.localNames.push(l[u], -1);
} return c.attrs !== null && os(c, c.attrs, !1), c.mergedAttrs !== null && os(c, c.mergedAttrs, !0), t.queries !== null && t.queries.elementStart(t, c), c; }
function ir(e) { return ia(e) ? Array.isArray(e) || !(e instanceof Map) && Symbol.iterator in e : !1; }
function $_(e, t, n) { let o = e[Symbol.iterator](), r = t[Symbol.iterator](); for (;;) {
    let i = o.next(), s = r.next();
    if (i.done && s.done)
        return !0;
    if (i.done || s.done || !n(i.value, s.value))
        return !1;
} }
function $y(e, t) { if (Array.isArray(e))
    for (let n = 0; n < e.length; n++)
        t(e[n]);
else {
    let n = e[Symbol.iterator](), o;
    for (; !(o = n.next()).done;)
        t(o.value);
} }
function ia(e) { return e !== null && (typeof e == "function" || typeof e == "object"); }
function Uy(e, t) { let n = ir(e), o = ir(t); return n && o ? $_(e, t, Uy) : !n && (e && (typeof e == "object" || typeof e == "function")) && !o && (t && (typeof t == "object" || typeof t == "function")) ? !0 : Object.is(e, t); }
function Ve(e, t, n) { return e[t] = n; }
function co(e, t) { return e[t]; }
function U(e, t, n) { if (n === L)
    return !1; let o = e[t]; return Object.is(o, n) ? !1 : (e[t] = n, !0); }
function rn(e, t, n, o) { let r = U(e, t, n); return U(e, t + 1, o) || r; }
function sa(e, t, n, o, r) { let i = rn(e, t, n, o); return U(e, t + 2, r) || i; }
function ke(e, t, n, o, r, i) { let s = rn(e, t, n, o); return rn(e, t + 2, r, i) || s; }
function At(e, t, n) { return function o(r) { let i = o.__ngNativeEl__; i !== void 0 && yM(r, i); let s = ge(e) ? fe(e.index, t) : t; Sr(s, 5); let a = t[F], c = ih(t, a, n, r), l = o.__ngNextListenerFn__; for (; l;)
    c = ih(t, a, l, r) && c, l = l.__ngNextListenerFn__; return c; }; }
function ih(e, t, n, o) { let r = Tn(null); try {
    return x(A.OutputStart, t, n), n(o) !== !1;
}
catch (i) {
    return Zu(e, i), !1;
}
finally {
    x(A.OutputEnd, t, n), Tn(r);
} }
function rd(e, t, n, o, r, i, s, a) { let c = In(e), l = !1, u = null; if (!o && c && (u = z_(t, n, i, e.index)), u !== null) {
    let d = u.__ngLastListenerFn__ || u;
    d.__ngNextListenerFn__ = s, u.__ngLastListenerFn__ = s, l = !0;
}
else {
    let d = re(e, n), f = o ? o(d) : d;
    vM(n, f, i, a), o || (a.__ngNativeEl__ = d);
    let p = r.listen(f, i, a);
    if (!U_(i)) {
        let h = o ? y => o(k(y[e.index])) : e.index;
        zy(h, t, n, i, a, p, !1);
    }
} return l; }
function U_(e) { return e.startsWith("animation") || e.startsWith("transition"); }
function z_(e, t, n, o) { let r = e.cleanup; if (r != null)
    for (let i = 0; i < r.length - 1; i += 2) {
        let s = r[i];
        if (s === n && r[i + 1] === o) {
            let a = t[Ft], c = r[i + 2];
            return a && a.length > c ? a[c] : null;
        }
        typeof s == "string" && (i += 2);
    } return null; }
function zy(e, t, n, o, r, i, s) { let a = t.firstCreatePass ? np(t) : null, c = tp(n), l = c.length; c.push(r, i), a && a.push(o, e, l, (l + 1) * (s ? -1 : 1)); }
function W_(e, t, n, o, r) { let i = At(e, t, n), s = G_(e, t, o, r, i); }
function G_(e, t, n, o, r) { let i = null, s = null, a = null, c = !1, l = e.directiveToIndex.get(n.type); if (typeof l == "number" ? i = l : [i, s, a] = l, s !== null && a !== null && e.hostDirectiveOutputs?.hasOwnProperty(o)) {
    let u = e.hostDirectiveOutputs[o];
    for (let d = 0; d < u.length; d += 2) {
        let f = u[d];
        if (f >= s && f <= a)
            c = !0, Vn(e, t, f, u[d + 1], o, r);
        else if (f > a)
            break;
    }
} return n.outputs.hasOwnProperty(o) && (c = !0, Vn(e, t, i, o, o, r)), c; }
function Vn(e, t, n, o, r, i) { let s = t[n], a = t[m], l = a.data[n].outputs[o], d = s[l].subscribe(i); zy(e.index, a, t, r, i, d, !0); }
function Wy() { Gy(); }
function Gy() { let e = g(), t = N(), n = T(); if (t.firstCreatePass && q_(t, n), n.controlDirectiveIndex === -1)
    return; Q("NgSignalForms"); let o = e[n.controlDirectiveIndex]; t.data[n.controlDirectiveIndex].controlDef.create(o, new rs(e, t, n)); }
function qy() { Qy(); }
function Qy() { let e = g(), t = N(), n = De(); if (n.controlDirectiveIndex === -1)
    return; let o = t.data[n.controlDirectiveIndex].controlDef, r = e[n.controlDirectiveIndex]; o.update(r, new rs(e, t, n)); }
var rs = class {
    lView;
    tView;
    tNode;
    hasPassThrough;
    constructor(t, n, o) { this.lView = t, this.tView = n, this.tNode = o, this.hasPassThrough = !!(o.flags & 4096); }
    get customControl() { return this.tNode.customControlIndex !== -1 ? this.lView[this.tNode.customControlIndex] : void 0; }
    get descriptor() { return `<${this.tNode.value}>`; }
    listenToCustomControlOutput(t, n) { Zy(this.tView.data[this.tNode.customControlIndex], t) && Vn(this.tNode, this.lView, this.tNode.customControlIndex, t, t, At(this.tNode, this.lView, n)); }
    listenToCustomControlModel(t) { let n = this.tNode.flags & 1024 ? "valueChange" : "checkedChange"; Vn(this.tNode, this.lView, this.tNode.customControlIndex, n, n, At(this.tNode, this.lView, t)); }
    listenToDom(t, n) { rd(this.tNode, this.tView, this.lView, void 0, this.lView[C], t, n, At(this.tNode, this.lView, n)); }
    setInputOnDirectives(t, n) { let o = this.tNode.inputs?.[t], r = this.tNode.hostDirectiveInputs?.[t]; if (!o && !r)
        return !1; if (o)
        for (let i of o) {
            let s = this.tView.data[i], a = this.lView[i];
            bt(s, a, t, n);
        } if (r)
        for (let i = 0; i < r.length; i += 2) {
            let s = r[i], a = r[i + 1], c = this.tView.data[s], l = this.lView[s];
            bt(c, l, a, n);
        } return !0; }
    setCustomControlModelInput(t) { let n = this.lView[this.tNode.customControlIndex], o = this.tView.data[this.tNode.customControlIndex], r = this.tNode.flags & 1024 ? "value" : "checked"; bt(o, n, r, t); }
    customControlHasInput(t) { return this.tNode.customControlIndex === -1 ? !1 : this.tView.data[this.tNode.customControlIndex].inputs[t] != null; }
};
function q_(e, t, n) { for (let r = t.directiveStart; r < t.directiveEnd; r++)
    if (e.data[r].controlDef) {
        t.controlDirectiveIndex = r;
        break;
    } if (t.controlDirectiveIndex === -1)
    return; let o = e.data[t.controlDirectiveIndex].controlDef; if (o.passThroughInput && (t.inputs?.[o.passThroughInput]?.length ?? 0) > 1) {
    t.flags |= 4096;
    return;
} Q_(e, t); }
function Q_(e, t) { for (let n = t.directiveStart; n < t.directiveEnd; n++) {
    let o = e.data[n];
    if (sh(o, "value")) {
        t.flags |= 1024, t.customControlIndex = n;
        return;
    }
    if (sh(o, "checked")) {
        t.flags |= 2048, t.customControlIndex = n;
        return;
    }
} }
function sh(e, t) { return Z_(e, t) && Zy(e, t + "Change"); }
function Z_(e, t) { return t in e.inputs; }
function Zy(e, t) { return t in e.outputs; }
var rt = Symbol("BINDING"), ah = { kind: "input", requiredVars: 1 }, Y_ = { kind: "output", requiredVars: 0 };
function ch(e, t, n) { let o = g(), r = pe(); if (U(o, r, n)) {
    let i = o[m], s = De(), a = fe(s.index, o);
    Sr(a, 1);
    let c = i.directiveRegistry[e], l = mw(s, i, o, c, t, n);
} }
function Yy(e, t) { if (e === "formField") {
    let o = { [rt]: ah, create: () => { Gy(); }, update: () => { ch(o.targetIdx, e, t()), Qy(); } };
    return o;
} let n = { [rt]: ah, update: () => ch(n.targetIdx, e, t()) }; return n; }
function Ky(e, t) { let n = { [rt]: Y_, create: () => { let o = g(), r = T(), s = o[m].directiveRegistry[n.targetIdx]; W_(r, o, t, s, e); } }; return n; }
function K_(e, t) { let n = Yy(e, t), o = Ky(e + "Change", i => t.set(i)); return { [rt]: { kind: "twoWay", requiredVars: n[rt].requiredVars + o[rt].requiredVars }, set targetIdx(i) { n.targetIdx = i, o.targetIdx = i; }, create: o.create, update: n.update }; }
function J_(e) { let t = e; for (; t;) {
    let n = $T(t);
    if (n !== null)
        for (let o = I; o < n.length; o++) {
            let r = n[o];
            if (!oe(r) && !X(r) || r[j] !== t)
                continue;
            let i = n[m], s = Bt(i, o);
            if (ge(s)) {
                let a = i.data[s.directiveStart + s.componentOffset], c = id(a);
                if (c !== null)
                    return c;
                break;
            }
        }
    t = t.parentNode;
} return null; }
function id(e) { return e.debugInfo?.className || e.type.name || null; }
var is = class extends Ar {
    ngModule;
    constructor(t) { super(), this.ngModule = t; }
    resolveComponentFactory(t) { let n = W(t); return new kt(n, this.ngModule); }
};
function X_(e) { return Object.keys(e).map(t => { let [n, o, r] = e[t], i = { propName: n, templateName: t, isSignal: (o & Ps.SignalBased) !== 0 }; return r && (i.transform = r), i; }); }
function eS(e) { return Object.keys(e).map(t => ({ propName: e[t], templateName: t })); }
function tS(e, t, n) { let o = t instanceof It ? t : t?.injector; return o && e.getStandaloneInjector !== null && (o = e.getStandaloneInjector(o) || o), o ? new kn(n, o) : n; }
function nS(e) { let t = e.get(rr, null); if (t === null)
    throw new w(407, !1); let n = e.get(Fy, null), o = e.get(Mt, null), r = e.get(pn, null, { optional: !0 }); return { rendererFactory: t, sanitizer: n, changeDetectionScheduler: o, ngReflect: !1, tracingService: r }; }
function oS(e, t) { let n = Jy(e); return xs(t, n, n === "svg" ? Qa : n === "math" ? Za : null); }
function rS(e) { if (e?.toLowerCase() === "script")
    throw new w(905, !1); }
function Jy(e) { return (e.selectors[0][0] || "div").toLowerCase(); }
var kt = class extends ra {
    componentDef;
    ngModule;
    selector;
    componentType;
    ngContentSelectors;
    isBoundToModule;
    cachedInputs = null;
    cachedOutputs = null;
    get inputs() { return this.cachedInputs ??= X_(this.componentDef.inputs), this.cachedInputs; }
    get outputs() { return this.cachedOutputs ??= eS(this.componentDef.outputs), this.cachedOutputs; }
    constructor(t, n) { super(), this.componentDef = t, this.ngModule = n, this.componentType = t.type, this.selector = ON(t.selectors), this.ngContentSelectors = t.ngContentSelectors ?? [], this.isBoundToModule = !!n; }
    create(t, n, o, r, i, s) { x(A.DynamicComponentStart); let a = O(null); try {
        let c = this.componentDef, l = tS(c, r || this.ngModule, t), u = nS(l), d = u.tracingService;
        return d && d.componentCreate ? d.componentCreate(id(c), () => this.createComponentRef(u, l, n, o, i, s)) : this.createComponentRef(u, l, n, o, i, s);
    }
    finally {
        O(a);
    } }
    createComponentRef(t, n, o, r, i, s) { let a = this.componentDef, c = iS(r, a, s, i), l = t.rendererFactory.createRenderer(null, a), u = r ? aw(l, r, a.encapsulation, n) : oS(a, l); rS(u?.tagName); let d = s?.some(lh) || i?.some(h => typeof h != "function" && h.bindings.some(lh)), f = Ls(null, c, null, 512 | ku(a), null, null, t, l, n, null, qg(u, n, !0)); f[I] = u, pi(f); let p = null; try {
        let h = nd(I, f, 2, "#host", () => c.directiveRegistry, !0, 0);
        Im(l, u, h), Ae(u, f), Ws(c, f, h), Eu(c, h, f), od(c, h), o !== void 0 && aS(h, this.ngContentSelectors, o), p = fe(h.index, f), f[F] = p[F], Ys(c, f, null);
    }
    catch (h) {
        throw p !== null && el(p), el(f), h;
    }
    finally {
        x(A.DynamicComponentEnd), hi();
    } return new ss(this.componentType, f, !!d); }
};
function iS(e, t, n, o) { let r = e ? ["ng-version", "21.2.18"] : LN(t.selectors[0]), i = null, s = null, a = 0; if (n)
    for (let u of n)
        a += u[rt].requiredVars, u.create && (u.targetIdx = 0, (i ??= []).push(u)), u.update && (u.targetIdx = 0, (s ??= []).push(u)); if (o)
    for (let u = 0; u < o.length; u++) {
        let d = o[u];
        if (typeof d != "function")
            for (let f of d.bindings) {
                a += f[rt].requiredVars;
                let p = u + 1;
                f.create && (f.targetIdx = p, (i ??= []).push(f)), f.update && (f.targetIdx = p, (s ??= []).push(f));
            }
    } let c = [t]; if (o)
    for (let u of o) {
        let d = typeof u == "function" ? u : u.type, f = Me(d);
        c.push(f);
    } return Ru(0, null, sS(i, s), 1, a, c, null, null, null, [r], null); }
function sS(e, t) { return !e && !t ? null : n => { if (n & 1 && e)
    for (let o of e)
        o.create(); if (n & 2 && t)
    for (let o of t)
        o.update(); }; }
function lh(e) { let t = e[rt].kind; return t === "input" || t === "twoWay"; }
var ss = class extends Py {
    _rootLView;
    _hasInputBindings;
    instance;
    hostView;
    changeDetectorRef;
    componentType;
    location;
    previousInputValues = null;
    _tNode;
    constructor(t, n, o) { super(), this._rootLView = n, this._hasInputBindings = o, this._tNode = Bt(n[m], I), this.location = Qn(this._tNode, n), this.instance = fe(this._tNode.index, n)[F], this.hostView = this.changeDetectorRef = new Rt(n, void 0), this.componentType = t; }
    setInput(t, n) { this._hasInputBindings; let o = this._tNode; if (this.previousInputValues ??= new Map, this.previousInputValues.has(t) && Object.is(this.previousInputValues.get(t), n))
        return; let r = this._rootLView, i = Zs(o, r[m], r, t, n); this.previousInputValues.set(t, n); let s = fe(o.index, r); Sr(s, 1); }
    get injector() { return new St(this._tNode, this._rootLView); }
    destroy() { this.hostView.destroy(); }
    onDestroy(t) { this.hostView.onDestroy(t); }
};
function aS(e, t, n) { let o = e.projection = []; for (let r = 0; r < t.length; r++) {
    let i = n[r];
    o.push(i != null && i.length ? Array.from(i) : null);
} }
var aa = (() => { class e {
    static __NG_ELEMENT_ID__ = cS;
} return e; })();
function cS() { let e = T(); return Xy(e, g()); }
var Al = class e extends aa {
    _lContainer;
    _hostTNode;
    _hostLView;
    constructor(t, n, o) { super(), this._lContainer = t, this._hostTNode = n, this._hostLView = o; }
    get element() { return Qn(this._hostTNode, this._hostLView); }
    get injector() { return new St(this._hostTNode, this._hostLView); }
    get parentInjector() { let t = tu(this._hostTNode, this._hostLView); if (ig(t)) {
        let n = zi(t, this._hostLView), o = Ui(t), r = n[m].data[o + 8];
        return new St(r, n);
    }
    else
        return new St(null, this._hostLView); }
    clear() { for (; this.length > 0;)
        this.remove(this.length - 1); }
    get(t) { let n = uh(this._lContainer); return n !== null && n[t] || null; }
    get length() { return this._lContainer.length - H; }
    createEmbeddedView(t, n, o) { let r, i; typeof o == "number" ? r = o : o != null && (r = o.index, i = o.injector); let s = or(this._lContainer, t.ssrId), a = t.createEmbeddedViewImpl(n || {}, i, s); return this.insertImpl(a, r, on(this._hostTNode, s)), a; }
    createComponent(t, n, o, r, i, s, a) { let c = t && !Lo(t), l; if (c)
        l = n;
    else {
        let v = n || {};
        l = v.index, o = v.injector, r = v.projectableNodes, i = v.environmentInjector || v.ngModuleRef, s = v.directives, a = v.bindings;
    } let u = c ? t : new kt(W(t)), d = o || this.parentInjector; if (!i && u.ngModule == null) {
        let D = (c ? d : this.parentInjector).get(It, null);
        D && (i = D);
    } let f = W(u.componentType ?? {}), p = or(this._lContainer, f?.id ?? null), h = p?.firstChild ?? null, y = u.create(d, r, h, i, s, a); return this.insertImpl(y.hostView, l, on(this._hostTNode, p)), y; }
    insert(t, n) { return this.insertImpl(t, n, !0); }
    insertImpl(t, n, o) { let r = t._lView; if (Xf(r)) {
        let a = this.indexOf(t);
        if (a !== -1)
            this.detach(a);
        else {
            let c = r[G], l = new e(c, c[le], c[G]);
            l.detach(l.indexOf(t));
        }
    } let i = this._adjustIndex(n), s = this._lContainer; return io(s, r, i, o), t.attachToViewContainerRef(), Va(Hc(s), i, t), t; }
    move(t, n) { return this.insert(t, n); }
    indexOf(t) { let n = uh(this._lContainer); return n !== null ? n.indexOf(t) : -1; }
    remove(t) { let n = this._adjustIndex(t, -1), o = er(this._lContainer, n); o && (Io(Hc(this._lContainer), n), _r(o[m], o)); }
    detach(t) { let n = this._adjustIndex(t, -1), o = er(this._lContainer, n); return o && Io(Hc(this._lContainer), n) != null ? new Rt(o) : null; }
    _adjustIndex(t, n = 0) { return t ?? this.length + n; }
};
function uh(e) { return e[No]; }
function Hc(e) { return e[No] || (e[No] = []); }
function Xy(e, t) { let n, o = t[e.index]; return X(o) ? n = o : (n = cy(o, t, null, e), t[e.index] = n, xu(t, n)), ev(n, t, e, o), new Al(n, e, t); }
function lS(e, t) { let n = e[C], o = n.createComment(""), r = re(t, e), i = n.parentNode(r); return en(n, i, o, n.nextSibling(r), !1), o; }
var ev = nv, sd = () => !1;
function tv(e, t, n) { return sd(e, t, n); }
function nv(e, t, n, o) { if (e[Fe])
    return; let r; n.type & 8 ? r = k(o) : r = lS(t, n), e[Fe] = r; }
function uS(e, t, n) { if (e[Fe] && e[Ee])
    return !0; let o = n[se], r = t.index - I; if (!o || Zn(t) || As(o, r))
    return !1; let s = il(o, r), a = o.data[Kn]?.[r]; if (a === void 0)
    return !1; let [c, l] = N_(s, a); return e[Fe] = c, e[Ee] = l, !0; }
function dS(e, t, n, o) { sd(e, n, t) || nv(e, t, n, o); }
function ov() { ev = dS, sd = uS; }
var Rl = class e {
    queryList;
    matches = null;
    constructor(t) { this.queryList = t; }
    clone() { return new e(this.queryList); }
    setDirty() { this.queryList.setDirty(); }
}, kl = class e {
    queries;
    constructor(t = []) { this.queries = t; }
    createEmbeddedView(t) { let n = t.queries; if (n !== null) {
        let o = t.contentQueries !== null ? t.contentQueries[0] : n.length, r = [];
        for (let i = 0; i < o; i++) {
            let s = n.getByIndex(i), a = this.queries[s.indexInDeclarationView];
            r.push(a.clone());
        }
        return new e(r);
    } return null; }
    insertView(t) { this.dirtyQueriesWithMatches(t); }
    detachView(t) { this.dirtyQueriesWithMatches(t); }
    finishViewCreation(t) { this.dirtyQueriesWithMatches(t); }
    dirtyQueriesWithMatches(t) { for (let n = 0; n < this.queries.length; n++)
        cd(t, n).matches !== null && this.queries[n].setDirty(); }
}, as = class {
    flags;
    read;
    predicate;
    constructor(t, n, o = null) { this.flags = n, this.read = o, typeof t == "string" ? this.predicate = mS(t) : this.predicate = t; }
}, xl = class e {
    queries;
    constructor(t = []) { this.queries = t; }
    elementStart(t, n) { for (let o = 0; o < this.queries.length; o++)
        this.queries[o].elementStart(t, n); }
    elementEnd(t) { for (let n = 0; n < this.queries.length; n++)
        this.queries[n].elementEnd(t); }
    embeddedTView(t) { let n = null; for (let o = 0; o < this.length; o++) {
        let r = n !== null ? n.length : 0, i = this.getByIndex(o).embeddedTView(t, r);
        i && (i.indexInDeclarationView = o, n !== null ? n.push(i) : n = [i]);
    } return n !== null ? new e(n) : null; }
    template(t, n) { for (let o = 0; o < this.queries.length; o++)
        this.queries[o].template(t, n); }
    getByIndex(t) { return this.queries[t]; }
    get length() { return this.queries.length; }
    track(t) { this.queries.push(t); }
}, Ol = class e {
    metadata;
    matches = null;
    indexInDeclarationView = -1;
    crossesNgTemplate = !1;
    _declarationNodeIndex;
    _appliesToNextNode = !0;
    constructor(t, n = -1) { this.metadata = t, this._declarationNodeIndex = n; }
    elementStart(t, n) { this.isApplyingToNode(n) && this.matchTNode(t, n); }
    elementEnd(t) { this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1); }
    template(t, n) { this.elementStart(t, n); }
    embeddedTView(t, n) { return this.isApplyingToNode(t) ? (this.crossesNgTemplate = !0, this.addMatch(-t.index, n), new e(this.metadata)) : null; }
    isApplyingToNode(t) { if (this._appliesToNextNode && (this.metadata.flags & 1) !== 1) {
        let n = this._declarationNodeIndex, o = t.parent;
        for (; o !== null && o.type & 8 && o.index !== n;)
            o = o.parent;
        return n === (o !== null ? o.index : -1);
    } return this._appliesToNextNode; }
    matchTNode(t, n) { let o = this.metadata.predicate; if (Array.isArray(o))
        for (let r = 0; r < o.length; r++) {
            let i = o[r];
            this.matchTNodeWithReadOption(t, n, fS(n, i)), this.matchTNodeWithReadOption(t, n, ki(n, t, i, !1, !1));
        }
    else
        o === tr ? n.type & 4 && this.matchTNodeWithReadOption(t, n, -1) : this.matchTNodeWithReadOption(t, n, ki(n, t, o, !1, !1)); }
    matchTNodeWithReadOption(t, n, o) { if (o !== null) {
        let r = this.metadata.read;
        if (r !== null)
            if (r === gr || r === aa || r === tr && n.type & 4)
                this.addMatch(n.index, -2);
            else {
                let i = ki(n, t, r, !1, !1);
                i !== null && this.addMatch(n.index, i);
            }
        else
            this.addMatch(n.index, o);
    } }
    addMatch(t, n) { this.matches === null ? this.matches = [t, n] : this.matches.push(t, n); }
};
function fS(e, t) { let n = e.localNames; if (n !== null) {
    for (let o = 0; o < n.length; o += 2)
        if (n[o] === t)
            return n[o + 1];
} return null; }
function pS(e, t) { return e.type & 11 ? Qn(e, t) : e.type & 4 ? Js(e, t) : null; }
function hS(e, t, n, o) { return n === -1 ? pS(t, e) : n === -2 ? gS(e, t, o) : Qo(e, e[m], n, t); }
function gS(e, t, n) { if (n === gr)
    return Qn(t, e); if (n === tr)
    return Js(t, e); if (n === aa)
    return Xy(t, e); }
function rv(e, t, n, o) { let r = t[Ue].queries[o]; if (r.matches === null) {
    let i = e.data, s = n.matches, a = [];
    for (let c = 0; s !== null && c < s.length; c += 2) {
        let l = s[c];
        if (l < 0)
            a.push(null);
        else {
            let u = i[l];
            a.push(hS(t, u, s[c + 1], n.metadata.read));
        }
    }
    r.matches = a;
} return r.matches; }
function Ll(e, t, n, o) { let r = e.queries.getByIndex(n), i = r.matches; if (i !== null) {
    let s = rv(e, t, r, n);
    for (let a = 0; a < i.length; a += 2) {
        let c = i[a];
        if (c > 0)
            o.push(s[a / 2]);
        else {
            let l = i[a + 1], u = t[-c];
            for (let d = H; d < u.length; d++) {
                let f = u[d];
                f[Dt] === f[G] && Ll(f[m], f, l, o);
            }
            if (u[jt] !== null) {
                let d = u[jt];
                for (let f = 0; f < d.length; f++) {
                    let p = d[f];
                    Ll(p[m], p, l, o);
                }
            }
        }
    }
} return o; }
function ad(e, t) { return e[Ue].queries[t].queryList; }
function iv(e, t, n) { let o = new qi((n & 4) === 4); return op(e, t, o, o.destroy), (t[Ue] ??= new kl).queries.push(new Rl(o)) - 1; }
function sv(e, t, n) { let o = N(); return o.firstCreatePass && (cv(o, new as(e, t, n), -1), (t & 2) === 2 && (o.staticViewQueries = !0)), iv(o, g(), t); }
function av(e, t, n, o) { let r = N(); if (r.firstCreatePass) {
    let i = T();
    cv(r, new as(t, n, o), i.index), yS(r, e), (n & 2) === 2 && (r.staticContentQueries = !0);
} return iv(r, g(), n); }
function mS(e) { return e.split(",").map(t => t.trim()); }
function cv(e, t, n) { e.queries === null && (e.queries = new xl), e.queries.track(new Ol(t, n)); }
function yS(e, t) { let n = e.contentQueries || (e.contentQueries = []), o = n.length ? n[n.length - 1] : -1; t !== o && n.push(e.queries.length - 1, t); }
function cd(e, t) { return e.queries.getByIndex(t); }
function lv(e, t) { let n = e[m], o = cd(n, t); return o.crossesNgTemplate ? Ll(n, e, t, []) : rv(n, e, o, t); }
function ld(e, t, n) { let o, r = Pf(() => { o._dirtyCounter(); let i = vS(o, e); if (t && i === void 0)
    throw new w(-951, !1); return i; }); return o = r[et], o._dirtyCounter = Cc(0), o._flatValue = void 0, r; }
function ud(e) { return ld(!0, !1, e); }
function dd(e) { return ld(!0, !0, e); }
function fd(e) { return ld(!1, !1, e); }
function uv(e, t) { let n = e[et]; n._lView = g(), n._queryIndex = t, n._queryList = ad(n._lView, t), n._queryList.onDirty(() => n._dirtyCounter.update(o => o + 1)); }
function vS(e, t) { let n = e._lView, o = e._queryIndex; if (n === void 0 || o === void 0 || n[b] & 4)
    return t ? void 0 : P; let r = ad(n, o), i = lv(n, o); return r.reset(i, yg), t ? r.first : r._changesDetected || e._flatValue === void 0 ? e._flatValue = r.toArray() : e._flatValue; }
var sn = new Map, sr = new Set;
function dv(e) { return gt(this, null, function* () { let t = sn; sn = new Map; let n = new Map; function o(i) { let s = n.get(i); if (s)
    return s; let a = e(i).then(c => TS(i, c)); return n.set(i, a), a; } let r = Array.from(t).map(a => gt(null, [a], function* ([i, s]) { if (s.styleUrl && s.styleUrls?.length)
    throw new Error("@Component cannot define both `styleUrl` and `styleUrls`. Use `styleUrl` if the component has one stylesheet, or `styleUrls` if it has multiple"); let c = []; s.templateUrl && c.push(o(s.templateUrl).then(f => { s.template = f; })); let l = typeof s.styles == "string" ? [s.styles] : s.styles ?? []; s.styles = l; let { styleUrl: u, styleUrls: d } = s; if (u && (d = [u], s.styleUrl = void 0), d?.length) {
    let f = Promise.all(d.map(p => o(p))).then(p => { l.push(...p), s.styleUrls = void 0; });
    c.push(f);
} yield Promise.all(c), sr.delete(i); })); yield Promise.all(r); }); }
function IS(e, t) { fv(t) && (sn.set(e, t), sr.add(e)); }
function ES(e) { return sr.has(e); }
function fv(e) { return !!(e.templateUrl && !e.hasOwnProperty("template") || e.styleUrls?.length || e.styleUrl); }
function DS() { let e = sn; return sn = new Map, e; }
function CS(e) { sr.clear(); for (let t of e.keys())
    sr.add(t); sn = e; }
function pv() { return sn.size === 0; }
function TS(e, t) { return gt(this, null, function* () { if (typeof t == "string")
    return t; if (t.status !== void 0 && t.status !== 200)
    throw new w(918, !1); return t.text(); }); }
var Pl = new Map, hv = !0;
function MS(e, t, n) { if (t && t !== n && hv)
    throw new w(921, !1); }
function pd(e, t) { let n = Pl.get(t) || null; MS(t, n, e), Pl.set(t, e); }
function hd(e) { return Pl.get(e); }
function NS(e) { hv = !e; }
var Bn = class {
}, gv = class {
};
function mv(e, t) { return new $n(e, t ?? null, []); }
var wS = mv, $n = class extends Bn {
    ngModuleType;
    _parent;
    _bootstrapComponents = [];
    _r3Injector;
    instance;
    destroyCbs = [];
    componentFactoryResolver = new is(this);
    constructor(t, n, o, r = !0) { super(), this.ngModuleType = t, this._parent = n; let i = mn(t); this._bootstrapComponents = _n(i.bootstrap), this._r3Injector = fp(t, n, [{ provide: Bn, useValue: this }, { provide: Ar, useValue: this.componentFactoryResolver }, ...o], Gr(t), new Set(["environment"])), r && this.resolveInjectorInitializers(); }
    resolveInjectorInitializers() { this._r3Injector.resolveInjectorInitializers(), this.instance = this._r3Injector.get(this.ngModuleType); }
    get injector() { return this._r3Injector; }
    destroy() { let t = this._r3Injector; !t.destroyed && t.destroy(), this.destroyCbs.forEach(n => n()), this.destroyCbs = null; }
    onDestroy(t) { this.destroyCbs.push(t); }
}, Un = class extends gv {
    moduleType;
    constructor(t) { super(), this.moduleType = t; }
    create(t) { return new $n(this.moduleType, t, []); }
};
function yv(e, t, n) { return new $n(e, t, n, !1); }
var ar = class extends Bn {
    injector;
    componentFactoryResolver = new is(this);
    instance = null;
    constructor(t) { super(); let n = new Ua([...t.providers, { provide: Bn, useValue: this }, { provide: Ar, useValue: this.componentFactoryResolver }], t.parent || oi(), t.debugName, new Set(["environment"])); this.injector = n, t.runEnvironmentInitializers && n.resolveInjectorInitializers(); }
    destroy() { this.injector.destroy(); }
    onDestroy(t) { this.injector.onDestroy(t); }
};
function gd(e, t, n = null) { return new ar({ providers: e, parent: t, debugName: n, runEnvironmentInitializers: !0 }).injector; }
var _S = (() => { class e {
    _injector;
    cachedInjectors = new Map;
    constructor(n) { this._injector = n; }
    getOrCreateStandaloneInjector(n) { if (!n.standalone)
        return null; if (!this.cachedInjectors.has(n)) {
        let o = $a(!1, n.type), r = o.length > 0 ? gd([o], this._injector, "") : null;
        this.cachedInjectors.set(n, r);
    } return this.cachedInjectors.get(n); }
    ngOnDestroy() { try {
        for (let n of this.cachedInjectors.values())
            n !== null && n.destroy();
    }
    finally {
        this.cachedInjectors.clear();
    } }
    static \u0275prov = V({ token: e, providedIn: "environment", factory: () => new e(Le(It)) });
} return e; })();
function vv(e) { return Ke(() => { let t = Cv(e), n = Xe(Y({}, t), { decls: e.decls, vars: e.vars, template: e.template, consts: e.consts || null, ngContentSelectors: e.ngContentSelectors, onPush: e.changeDetection === Is.OnPush, directiveDefs: null, pipeDefs: null, dependencies: t.standalone && e.dependencies || null, getStandaloneInjector: t.standalone ? r => r.get(_S).getOrCreateStandaloneInjector(n) : null, getExternalStyles: null, signals: e.signals ?? !1, data: e.data || {}, encapsulation: e.encapsulation || Re.Emulated, styles: e.styles || P, _: null, schemas: e.schemas || null, tView: null, id: "" }); t.standalone && Q("NgStandalone"), Tv(n); let o = e.dependencies; return n.directiveDefs = cs(o, Iv), n.pipeDefs = cs(o, Be), n.id = RS(n), n; }); }
function Iv(e) { return W(e) || Me(e); }
function md(e) { return Ke(() => ({ type: e.type, bootstrap: e.bootstrap || P, declarations: e.declarations || P, imports: e.imports || P, exports: e.exports || P, transitiveCompileScopes: null, schemas: e.schemas || null, id: e.id || null })); }
function SS(e, t) { if (e == null)
    return we; let n = {}; for (let o in e)
    if (e.hasOwnProperty(o)) {
        let r = e[o], i, s, a, c;
        Array.isArray(r) ? (a = r[0], i = r[1], s = r[2] ?? i, c = r[3] || null) : (i = r, s = r, a = Ps.None, c = null), n[i] = [o, a, c], t[i] = s;
    } return n; }
function bS(e) { if (e == null)
    return we; let t = {}; for (let n in e)
    e.hasOwnProperty(n) && (t[e[n]] = n); return t; }
function Ev(e) { return Ke(() => { let t = Cv(e); return Tv(t), t; }); }
function Dv(e) { return { type: e.type, name: e.name, factory: null, pure: e.pure !== !1, standalone: e.standalone ?? !0, onDestroy: e.type.prototype.ngOnDestroy || null }; }
function Cv(e) { let t = {}; return { type: e.type, providersResolver: null, viewProvidersResolver: null, factory: null, hostBindings: e.hostBindings || null, hostVars: e.hostVars || 0, hostAttrs: e.hostAttrs || null, contentQueries: e.contentQueries || null, declaredInputs: t, inputConfig: e.inputs || we, exportAs: e.exportAs || null, standalone: e.standalone ?? !0, signals: e.signals === !0, selectors: e.selectors || P, viewQuery: e.viewQuery || null, features: e.features || null, setInput: null, resolveHostDirectives: null, hostDirectives: null, controlDef: null, inputs: SS(e.inputs, t), outputs: bS(e.outputs), debugInfo: null }; }
function Tv(e) { e.features?.forEach(t => t(e)); }
function cs(e, t) { return e ? () => { let n = typeof e == "function" ? e() : e, o = []; for (let r of n) {
    let i = t(r);
    i !== null && o.push(i);
} return o; } : null; }
var AS = new Map;
function RS(e) { let t = 0, n = typeof e.consts == "function" ? "" : e.consts, o = [e.selectors, e.ngContentSelectors, e.hostVars, e.hostAttrs, n, e.vars, e.decls, e.encapsulation, e.standalone, e.signals, e.exportAs, JSON.stringify(e.inputs), JSON.stringify(e.outputs), Object.getOwnPropertyNames(e.type.prototype), !!e.contentQueries, !!e.viewQuery]; for (let i of o.join("|"))
    t = Math.imul(31, t) + i.charCodeAt(0) << 0; return t += 2147483648, "c" + t; }
function Mv(e) { return t => { t.controlDef = { create: (n, o) => { n?.\u0275ngControlCreate(o); }, update: (n, o) => { n?.\u0275ngControlUpdate?.(o); }, passThroughInput: e }; }; }
function Nv(e) { let t = n => { let o = Array.isArray(e); n.hostDirectives === null ? (n.resolveHostDirectives = kS, n.hostDirectives = o ? e.map(Fl) : [e]) : o ? n.hostDirectives.unshift(...e.map(Fl)) : n.hostDirectives.unshift(e); }; return t.ngInherit = !0, t; }
function kS(e) { let t = [], n = !1, o = null, r = null; for (let i = 0; i < e.length; i++) {
    let s = e[i];
    if (s.hostDirectives !== null) {
        let a = t.length;
        o ??= new Map, r ??= new Map, wv(s, t, o), r.set(s, [a, t.length - 1]);
    }
    i === 0 && be(s) && (n = !0, t.push(s));
} for (let i = n ? 1 : 0; i < e.length; i++)
    t.push(e[i]); return [t, o, r]; }
function wv(e, t, n) { if (e.hostDirectives !== null)
    for (let o of e.hostDirectives)
        if (typeof o == "function") {
            let r = o();
            for (let i of r)
                dh(Fl(i), t, n);
        }
        else
            dh(o, t, n); }
function dh(e, t, n) { let o = Me(e.directive); xS(o.declaredInputs, e.inputs), wv(o, t, n), n.set(o, e), t.push(o); }
function Fl(e) { return typeof e == "function" ? { directive: z(e), inputs: we, outputs: we } : { directive: z(e.directive), inputs: fh(e.inputs), outputs: fh(e.outputs) }; }
function fh(e) { if (e === void 0 || e.length === 0)
    return we; let t = {}; for (let n = 0; n < e.length; n += 2)
    t[e[n]] = e[n + 1]; return t; }
function xS(e, t) { for (let n in t)
    if (t.hasOwnProperty(n)) {
        let o = t[n], r = e[n];
        e[o] = r;
    } }
function OS(e) { return Object.getPrototypeOf(e.prototype).constructor; }
function yd(e) { let t = OS(e.type), n = !0, o = [e]; for (; t && t !== Function.prototype && t !== Object.prototype;) {
    let r, i = Object.hasOwn(t, mt) ? t[mt] : void 0, s = Object.hasOwn(t, gn) ? t[gn] : void 0;
    if (be(e))
        r = i ?? s;
    else {
        if (i)
            throw new w(903, !1);
        r = s;
    }
    if (r) {
        if (n) {
            o.push(r);
            let c = e;
            c.inputs = jc(e.inputs), c.declaredInputs = jc(e.declaredInputs), c.outputs = jc(e.outputs);
            let l = r.hostBindings;
            l && jS(e, l);
            let u = r.viewQuery, d = r.contentQueries;
            if (u && FS(e, u), d && HS(e, d), LS(e, r), jf(e.outputs, r.outputs), be(r) && r.data.animation) {
                let f = e.data;
                f.animation = (f.animation || []).concat(r.data.animation);
            }
        }
        let a = r.features;
        if (a)
            for (let c = 0; c < a.length; c++) {
                let l = a[c];
                l && l.ngInherit && l(e), l === yd && (n = !1);
            }
    }
    t = Object.getPrototypeOf(t);
} PS(o); }
function LS(e, t) { for (let n in t.inputs) {
    if (!t.inputs.hasOwnProperty(n) || e.inputs.hasOwnProperty(n))
        continue;
    let o = t.inputs[n];
    o !== void 0 && (e.inputs[n] = o, e.declaredInputs[n] = t.declaredInputs[n]);
} }
function PS(e) { let t = 0, n = null; for (let o = e.length - 1; o >= 0; o--) {
    let r = e[o];
    r.hostVars = t += r.hostVars, r.hostAttrs = Pn(r.hostAttrs, n = Pn(n, r.hostAttrs));
} }
function jc(e) { return e === we ? {} : e === P ? [] : e; }
function FS(e, t) { let n = e.viewQuery; n ? e.viewQuery = (o, r) => { t(o, r), n(o, r); } : e.viewQuery = t; }
function HS(e, t) { let n = e.contentQueries; n ? e.contentQueries = (o, r, i) => { t(o, r, i), n(o, r, i); } : e.contentQueries = t; }
function jS(e, t) { let n = e.hostBindings; n ? e.hostBindings = (o, r) => { t(o, r), n(o, r); } : e.hostBindings = t; }
function _v(e, t, n, o, r, i, s, a) { if (n.firstCreatePass) {
    e.mergedAttrs = Pn(e.mergedAttrs, e.attrs);
    let u = e.tView = Ru(2, e, r, i, s, n.directiveRegistry, n.pipeRegistry, null, n.schemas, n.consts, null);
    n.queries !== null && (n.queries.template(n, e), u.queries = n.queries.embeddedTView(e));
} a && (e.flags |= a), Ge(e, !1); let c = Sv(n, t, e, o); Ro() && zu(n, t, c, e), Ae(c, t); let l = cy(c, t, c, e); t[o + I] = l, xu(t, l), tv(l, e, t); }
function VS(e, t, n, o, r, i, s, a, c, l, u) { let d = n + I, f; return t.firstCreatePass ? (f = hn(t, d, 4, s || null, a || null), ui() && jy(t, e, f, ue(t.consts, l), Qu), tg(t, f)) : f = t.data[d], _v(f, e, t, n, o, r, i, c), In(f) && Ws(t, e, f), l != null && oo(e, f, u), f; }
function an(e, t, n, o, r, i, s, a, c, l, u) { let d = n + I, f; if (t.firstCreatePass) {
    if (f = hn(t, d, 4, s || null, a || null), l != null) {
        let p = ue(t.consts, l);
        f.localNames = [];
        for (let h = 0; h < p.length; h += 2)
            f.localNames.push(p[h], -1);
    }
}
else
    f = t.data[d]; return _v(f, e, t, n, o, r, i, c), l != null && oo(e, f, u), f; }
function vd(e, t, n, o, r, i, s, a) { let c = g(), l = N(), u = ue(l.consts, i); return VS(c, l, e, t, n, o, r, u, void 0, s, a), vd; }
function Id(e, t, n, o, r, i, s, a) { let c = g(), l = N(), u = ue(l.consts, i); return an(c, l, e, t, n, o, r, u, void 0, s, a), Id; }
var Sv = bv;
function bv(e, t, n, o) { return He(!0), t[C].createComment(""); }
function BS(e, t, n, o) { let r = !Rs(t, n); He(r); let i = t[se]?.data[Cs]?.[o] ?? null; if (i !== null && n.tView !== null && n.tView.ssrId === null && (n.tView.ssrId = i), r)
    return bv(e, t); let s = t[se], a = br(s, e, t, n); bs(s, o, a); let c = vu(s, o); return ea(c, a); }
function Av() { Sv = BS; }
var te = (function (e) { return e[e.NOT_STARTED = 0] = "NOT_STARTED", e[e.IN_PROGRESS = 1] = "IN_PROGRESS", e[e.COMPLETE = 2] = "COMPLETE", e[e.FAILED = 3] = "FAILED", e; })(te || {}), ph = 0, $S = 1, $ = (function (e) { return e[e.Placeholder = 0] = "Placeholder", e[e.Loading = 1] = "Loading", e[e.Complete = 2] = "Complete", e[e.Error = 3] = "Error", e; })($ || {}), cr = (function (e) { return e[e.Initial = -1] = "Initial", e; })(cr || {}), xn = 0, ft = 1, Fo = 2, _i = 3, US = 4, zS = 5, ca = 6, WS = 7, On = 8, GS = 9, Ed = (function (e) { return e[e.Manual = 0] = "Manual", e[e.Playthrough = 1] = "Playthrough", e; })(Ed || {});
function Rr(e, t, n) { let o = kv(e); t[o] === null && (t[o] = []), t[o].push(n); }
function Fi(e, t) { let n = kv(e), o = t[n]; if (o !== null) {
    for (let r of o)
        r();
    t[n] = null;
} }
function Rv(e) { Fi(1, e), Fi(0, e), Fi(2, e); }
function kv(e) { let t = US; return e === 1 ? t = zS : e === 2 && (t = GS), t; }
function kr(e) { return e + 1; }
function me(e, t) { let n = e[m], o = kr(t.index); return e[o]; }
function qS(e, t, n) { let o = e[m], r = kr(t); e[r] = n; }
function ae(e, t) { let n = kr(t.index); return e.data[n]; }
function QS(e, t, n) { let o = kr(t); e.data[o] = n; }
function ZS(e, t, n) { let o = t[m], r = ae(o, n); switch (e) {
    case $.Complete: return r.primaryTmplIndex;
    case $.Loading: return r.loadingTmplIndex;
    case $.Error: return r.errorTmplIndex;
    case $.Placeholder: return r.placeholderTmplIndex;
    default: return null;
} }
function Hl(e, t) { return t === $.Placeholder ? e.placeholderBlockConfig?.[ph] ?? null : t === $.Loading ? e.loadingBlockConfig?.[ph] ?? null : null; }
function xv(e) { return e.loadingBlockConfig?.[$S] ?? null; }
function hh(e, t) { if (!e || e.length === 0)
    return t; let n = new Set(e); for (let o of t)
    n.add(o); return e.length === n.size ? e : Array.from(n); }
function YS(e, t) { let n = t.primaryTmplIndex + I; return Bt(e, n); }
function Ov(e) { return e !== null && typeof e == "object" && typeof e.primaryTmplIndex == "number"; }
function Lv(e, t) { let n = null, o = kr(t.index); return I < o && o < e.bindingStartIndex && (n = ae(e, t)), !!n && Ov(n); }
function Dd(e, t, n, o) { let r = n.get(B); return gM(e, () => r.run(t), i => r.runOutsideAngular(() => hM(i)), o); }
function KS(e, t, n) { return n == null ? e : n >= 0 ? ep(n, e) : e[t.index][H] ?? null; }
function JS(e, t) { return Vt(I + t, e); }
function lo(e, t, n, o, r, i, s, a) { let c = e[R], l = c.get(B), u; function d() { if (Ct(e)) {
    u.destroy();
    return;
} let f = me(e, t), p = f[ft]; if (p !== cr.Initial && p !== $.Placeholder) {
    u.destroy();
    return;
} let h = KS(e, t, o); if (!h || (u.destroy(), Ct(h)))
    return; let y = JS(h, n), v = r(y, () => { l.run(() => { e !== h && Ka(h, v), i(); }); }, c, a); e !== h && li(h, v), Rr(s, f, v); } u = Pm({ read: d }, { injector: c }); }
function la(e, t) { let n = t.get(tb), o = () => n.remove(e); return n.add(e), o; }
var XS = () => typeof requestIdleCallback < "u" ? requestIdleCallback : setTimeout, eb = () => typeof requestIdleCallback < "u" ? cancelIdleCallback : clearTimeout, tb = (() => { class e {
    executingCallbacks = !1;
    idleId = null;
    current = new Set;
    deferred = new Set;
    ngZone = E(B);
    requestIdleCallbackFn = XS().bind(globalThis);
    cancelIdleCallbackFn = eb().bind(globalThis);
    add(n) { (this.executingCallbacks ? this.deferred : this.current).add(n), this.idleId === null && this.scheduleIdleCallback(); }
    remove(n) { let { current: o, deferred: r } = this; o.delete(n), r.delete(n), o.size === 0 && r.size === 0 && this.cancelIdleCallback(); }
    scheduleIdleCallback() { let n = () => { this.cancelIdleCallback(), this.executingCallbacks = !0; for (let o of this.current)
        o(); if (this.current.clear(), this.executingCallbacks = !1, this.deferred.size > 0) {
        for (let o of this.deferred)
            this.current.add(o);
        this.deferred.clear(), this.scheduleIdleCallback();
    } }; this.idleId = this.requestIdleCallbackFn(() => this.ngZone.run(n)); }
    cancelIdleCallback() { this.idleId !== null && (this.cancelIdleCallbackFn(this.idleId), this.idleId = null); }
    ngOnDestroy() { this.cancelIdleCallback(), this.current.clear(), this.deferred.clear(); }
    static \u0275prov = V({ token: e, providedIn: "root", factory: () => new e });
} return e; })();
function ua(e) { return (t, n) => Pv(e, t, n); }
function Pv(e, t, n) { let o = n.get(Fv), r = n.get(B), i = () => o.remove(t); return o.add(e, t, r), i; }
var Fv = (() => { class e {
    executingCallbacks = !1;
    timeoutId = null;
    invokeTimerAt = null;
    current = [];
    deferred = [];
    add(n, o, r) { let i = this.executingCallbacks ? this.deferred : this.current; this.addToQueue(i, Date.now() + n, o), this.scheduleTimer(r); }
    remove(n) { let { current: o, deferred: r } = this; this.removeFromQueue(o, n) === -1 && this.removeFromQueue(r, n), o.length === 0 && r.length === 0 && this.clearTimeout(); }
    addToQueue(n, o, r) { let i = n.length; for (let s = 0; s < n.length; s += 2)
        if (n[s] > o) {
            i = s;
            break;
        } zf(n, i, o, r); }
    removeFromQueue(n, o) { let r = -1; for (let i = 0; i < n.length; i += 2)
        if (n[i + 1] === o) {
            r = i;
            break;
        } return r > -1 && Ba(n, r, 2), r; }
    scheduleTimer(n) { let o = () => { this.clearTimeout(), this.executingCallbacks = !0; let i = [...this.current], s = Date.now(); for (let c = 0; c < i.length; c += 2) {
        let l = i[c], u = i[c + 1];
        if (l <= s)
            u();
        else
            break;
    } let a = -1; for (let c = 0; c < this.current.length && this.current[c] <= s; c += 2)
        a = c + 1; if (a >= 0 && Ba(this.current, 0, a + 1), this.executingCallbacks = !1, this.deferred.length > 0) {
        for (let c = 0; c < this.deferred.length; c += 2) {
            let l = this.deferred[c], u = this.deferred[c + 1];
            this.addToQueue(this.current, l, u);
        }
        this.deferred.length = 0;
    } this.scheduleTimer(n); }; if (this.current.length > 0) {
        let i = Date.now(), s = this.current[0];
        if (this.timeoutId === null || this.invokeTimerAt && this.invokeTimerAt - s > 16) {
            this.clearTimeout();
            let a = Math.max(s - i, 16);
            this.invokeTimerAt = s, this.timeoutId = n.runOutsideAngular(() => setTimeout(() => n.run(o), a));
        }
    } }
    clearTimeout() { this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null); }
    ngOnDestroy() { this.clearTimeout(), this.current.length = 0, this.deferred.length = 0; }
    static \u0275prov = V({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), nb = (() => { class e {
    cachedInjectors = new Map;
    getOrCreateInjector(n, o, r, i) { if (!this.cachedInjectors.has(n)) {
        let s = r.length > 0 ? gd(r, o, i) : null;
        this.cachedInjectors.set(n, s);
    } return this.cachedInjectors.get(n); }
    ngOnDestroy() { try {
        for (let n of this.cachedInjectors.values())
            n !== null && n.destroy();
    }
    finally {
        this.cachedInjectors.clear();
    } }
    static \u0275prov = V({ token: e, providedIn: "environment", factory: () => new e });
} return e; })(), ob = new _("DEFER_BLOCK_DEPENDENCY_INTERCEPTOR"), Hv = new _("");
function Vc(e, t, n) { return e.get(nb).getOrCreateInjector(t, e, n, ""); }
function rb(e, t, n) { if (e instanceof kn) {
    let r = e.injector, i = e.parentInjector, s = Vc(i, t, n);
    return new kn(r, s);
} let o = e.get(It); if (o !== e) {
    let r = Vc(o, t, n);
    return new kn(e, r);
} return Vc(e, t, n); }
function ot(e, t, n, o = !1) { let r = n[G], i = r[m]; if (Ct(r))
    return; let s = me(r, t), a = s[ft], c = s[WS]; if (!(c !== null && e < c) && mh(a, e) && mh(s[xn] ?? -1, e)) {
    let l = ae(i, t), d = !o && (typeof ngServerMode > "u" || !ngServerMode) && (xv(l) !== null || Hl(l, $.Loading) !== null || Hl(l, $.Placeholder)) ? jl : jv;
    try {
        d(e, s, n, t, r);
    }
    catch (f) {
        Zu(r, f);
    }
} }
function ib(e, t) { let n = e[Ee]?.findIndex(r => r.data[Ir] === t[ft]) ?? -1; return { dehydratedView: n > -1 ? e[Ee][n] : null, dehydratedViewIx: n }; }
function jv(e, t, n, o, r) { x(A.DeferBlockStateStart); let i = ZS(e, r, o); if (i !== null) {
    t[ft] = e;
    let s = r[m], a = i + I, c = Bt(s, a), l = 0;
    Yu(n, l);
    let u;
    if (e === $.Complete) {
        let h = ae(s, o), y = h.providers;
        y && y.length > 0 && (u = rb(r[R], h, y));
    }
    let { dehydratedView: d, dehydratedViewIx: f } = ib(n, t), p = ro(r, c, null, { injector: u, dehydratedView: d });
    if (io(n, p, l, on(c, d)), Sr(p, 2), f > -1 && n[Ee]?.splice(f, 1), (e === $.Complete || e === $.Error) && Array.isArray(t[On])) {
        for (let h of t[On])
            h();
        t[On] = null;
    }
} x(A.DeferBlockStateEnd); }
function sb(e, t, n, o, r) { let i = Date.now(), s = r[m], a = ae(s, o); if (t[Fo] === null || t[Fo] <= i) {
    t[Fo] = null;
    let c = xv(a), l = t[_i] !== null;
    if (e === $.Loading && c !== null && !l) {
        t[xn] = e;
        let u = gh(c, t, o, n, r);
        t[_i] = u;
    }
    else {
        e > $.Loading && l && (t[_i](), t[_i] = null, t[xn] = null), jv(e, t, n, o, r);
        let u = Hl(a, e);
        u !== null && (t[Fo] = i + u, gh(u, t, o, n, r));
    }
}
else
    t[xn] = e; }
function gh(e, t, n, o, r) { return Pv(e, () => { let s = t[xn]; t[Fo] = null, t[xn] = null, s !== null && ot(s, n, o); }, r[R]); }
function mh(e, t) { return e < t; }
function uo(e, t) { let n = e[t.index]; ot($.Placeholder, t, n); }
function yh(e, t, n) { e.loadingPromise.then(() => { e.loadingState === te.COMPLETE ? ot($.Complete, t, n) : e.loadingState === te.FAILED && ot($.Error, t, n); }); }
var jl = null;
function Vv(e, t, n, o) { let r = e.consts; n != null && (t.placeholderBlockConfig = ue(r, n)), o != null && (t.loadingBlockConfig = ue(r, o)), jl === null && (jl = sb); }
var Hi = "__ngAsyncComponentMetadataFn__";
function ab(e) { return e[Hi] ?? null; }
function Bv(e, t, n) { let o = e; return o[Hi] = () => Promise.all(t()).then(r => (n(...r), o[Hi] = null, r)), o[Hi]; }
function Cd(e, t, n, o) { return Ke(() => { let r = e; t !== null && (r.hasOwnProperty("decorators") && r.decorators !== void 0 ? r.decorators.push(...t) : r.decorators = t), n !== null && (r.ctorParameters = n), o !== null && (r.hasOwnProperty("propDecorators") && r.propDecorators !== void 0 ? r.propDecorators = Y(Y({}, r.propDecorators), o) : r.propDecorators = o); }); }
var cb = (() => { class e {
    log(n) { console.log(n); }
    warn(n) { console.warn(n); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = V({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })();
function Td(e) { return typeof e == "function" && e[et] !== void 0; }
function Md(e) { return Td(e) && typeof e.set == "function"; }
function ji(e, t) { let n = e[m]; for (let o = I; o < n.bindingStartIndex; o++)
    if (X(e[o])) {
        let r = e[o];
        if (!(o === n.bindingStartIndex - 1)) {
            let s = n.data[o], a = ae(n, s);
            if (Ov(a)) {
                t.push({ lContainer: r, lView: e, tNode: s, tDetails: a });
                continue;
            }
        }
        oe(r[j]) && ji(r[j], t);
        for (let s = H; s < r.length; s++)
            ji(r[s], t);
    }
    else
        oe(e[o]) && ji(e[o], t); }
function lb() { return Q("Chrome DevTools profiling"), () => { }; }
function ub(e) { let t = e.get(Ut), n = e.get(ct), o = bg(t, n), r = {}; for (let [i, s] of Object.entries(o))
    IM(i) || (r[i] = s); return r; }
var vh = "ng";
function db(e, t) { fb(e, t); }
function fb(e, t) { if (typeof COMPILED > "u" || !COMPILED) {
    let n = Ie;
    n[vh] ??= {}, n[vh][e] = t;
} }
var $v = new _(""), Uv = new _(""), pb = (() => { class e {
    _ngZone;
    registry;
    _isZoneStable = !0;
    _callbacks = [];
    _taskTrackingZone = null;
    _destroyRef;
    constructor(n, o, r) { this._ngZone = n, this.registry = o, Qf() && (this._destroyRef = E(ko, { optional: !0 }) ?? void 0), Nd || (Wv(r), r.addToWindow(o)), this._watchAngularEvents(), n.run(() => { this._taskTrackingZone = typeof Zone > "u" ? null : Zone.current.get("TaskTrackingZone"); }); }
    _watchAngularEvents() { let n = this._ngZone.onUnstable.subscribe({ next: () => { this._isZoneStable = !1; } }), o = this._ngZone.runOutsideAngular(() => this._ngZone.onStable.subscribe({ next: () => { B.assertNotInAngularZone(), queueMicrotask(() => { this._isZoneStable = !0, this._runCallbacksIfReady(); }); } })); this._destroyRef?.onDestroy(() => { n.unsubscribe(), o.unsubscribe(); }); }
    isStable() { return this._isZoneStable && !this._ngZone.hasPendingMacrotasks; }
    _runCallbacksIfReady() { if (this.isStable())
        queueMicrotask(() => { for (; this._callbacks.length !== 0;) {
            let n = this._callbacks.pop();
            clearTimeout(n.timeoutId), n.doneCb();
        } });
    else {
        let n = this.getPendingTasks();
        this._callbacks = this._callbacks.filter(o => o.updateCb && o.updateCb(n) ? (clearTimeout(o.timeoutId), !1) : !0);
    } }
    getPendingTasks() { return this._taskTrackingZone ? this._taskTrackingZone.macroTasks.map(n => ({ source: n.source, creationLocation: n.creationLocation, data: n.data })) : []; }
    addCallback(n, o, r) { let i = -1; o && o > 0 && (i = setTimeout(() => { this._callbacks = this._callbacks.filter(s => s.timeoutId !== i), n(); }, o)), this._callbacks.push({ doneCb: n, timeoutId: i, updateCb: r }); }
    whenStable(n, o, r) { if (r && !this._taskTrackingZone)
        throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?'); this.addCallback(n, o, r), this._runCallbacksIfReady(); }
    registerApplication(n) { this.registry.registerApplication(n, this); }
    unregisterApplication(n) { this.registry.unregisterApplication(n); }
    findProviders(n, o, r) { return []; }
    static \u0275fac = function (o) { return new (o || e)(Le(B), Le(zv), Le(Uv)); };
    static \u0275prov = V({ token: e, factory: e.\u0275fac });
} return e; })(), zv = (() => { class e {
    _applications = new Map;
    registerApplication(n, o) { this._applications.set(n, o); }
    unregisterApplication(n) { this._applications.delete(n); }
    unregisterAllApplications() { this._applications.clear(); }
    getTestability(n) { return this._applications.get(n) || null; }
    getAllTestabilities() { return Array.from(this._applications.values()); }
    getAllRootElements() { return Array.from(this._applications.keys()); }
    findTestabilityInTree(n, o = !0) { return Nd?.findTestabilityInTree(this, n, o) ?? null; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = V({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })();
function Wv(e) { Nd = e; }
var Nd;
function wd(e) { return !!e && typeof e.then == "function"; }
function Gv(e) { return !!e && typeof e.subscribe == "function"; }
var _d = new _("");
function qv(e) { return tt([{ provide: _d, multi: !0, useValue: e }]); }
var Sd = (() => { class e {
    resolve;
    reject;
    initialized = !1;
    done = !1;
    donePromise = new Promise((n, o) => { this.resolve = n, this.reject = o; });
    appInits = E(_d, { optional: !0 }) ?? [];
    injector = E(Ce);
    constructor() { }
    runInitializers() { if (this.initialized)
        return; let n = []; for (let r of this.appInits) {
        let i = ri(this.injector, r);
        if (wd(i))
            n.push(i);
        else if (Gv(i)) {
            let s = new Promise((a, c) => { i.subscribe({ complete: a, error: c }); });
            n.push(s);
        }
    } let o = () => { this.done = !0, this.resolve(); }; Promise.all(n).then(() => { o(); }).catch(r => { this.reject(r); }), n.length === 0 && o(), this.initialized = !0; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = V({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), xr = new _("");
function bd() { Ff(() => { let e = ""; throw new w(600, e); }); }
function Qv(e) { return e.isBoundToModule; }
var hb = 10;
function Ad(e, t) { return Array.isArray(t) ? t.reduce(Ad, e) : Y(Y({}, e), t); }
var xe = (() => { class e {
    _runningTick = !1;
    _destroyed = !1;
    _destroyListeners = [];
    _views = [];
    internalErrorHandler = E(Wt);
    afterRenderManager = E(Vs);
    zonelessEnabled = E(Dn);
    rootEffectScheduler = E(Mc);
    dirtyFlags = 0;
    tracingSnapshot = null;
    allTestViews = new Set;
    autoDetectTestViews = new Set;
    includeAllTestViews = !1;
    afterTick = new Uh;
    get allViews() { return [...(this.includeAllTestViews ? this.allTestViews : this.autoDetectTestViews).keys(), ...this._views]; }
    get destroyed() { return this._destroyed; }
    componentTypes = [];
    components = [];
    internalPendingTask = E(zt);
    get isStable() { return this.internalPendingTask.hasPendingTasksObservable.pipe(rT(n => !n)); }
    constructor() { E(pn, { optional: !0 }); }
    whenStable() { let n; return new Promise(o => { n = this.isStable.subscribe({ next: r => { r && o(); } }); }).finally(() => { n.unsubscribe(); }); }
    _injector = E(It);
    _rendererFactory = null;
    get injector() { return this._injector; }
    bootstrap(n, o) { return this.bootstrapImpl(n, o); }
    bootstrapImpl(n, o, r = Ce.NULL) { return this._injector.get(B).run(() => { x(A.BootstrapComponentStart); let s = n instanceof ra; if (!this._injector.get(Sd).done) {
        let h = "";
        throw new w(405, h);
    } let c; s ? c = n : c = this._injector.get(Ar).resolveComponentFactory(n), this.componentTypes.push(c.componentType); let l = Qv(c) ? void 0 : this._injector.get(Bn), u = o || c.selector, d = c.create(r, [], u, l), f = d.location.nativeElement, p = d.injector.get($v, null); return p?.registerApplication(f), d.onDestroy(() => { this.detachView(d.hostView), Vo(this.components, d), p?.unregisterApplication(f); }), this._loadComponent(d), x(A.BootstrapComponentEnd, d), d; }); }
    tick() { this.zonelessEnabled || (this.dirtyFlags |= 1), this._tick(); }
    _tick() { x(A.ChangeDetectionStart), this.tracingSnapshot !== null ? this.tracingSnapshot.run(js.CHANGE_DETECTION, this.tickImpl) : this.tickImpl(); }
    tickImpl = () => { if (this._runningTick)
        throw x(A.ChangeDetectionEnd), new w(101, !1); let n = O(null); try {
        this._runningTick = !0, this.synchronize();
    }
    finally {
        this._runningTick = !1, this.tracingSnapshot?.dispose(), this.tracingSnapshot = null, O(n), this.afterTick.next(), x(A.ChangeDetectionEnd);
    } };
    synchronize() { this._rendererFactory === null && !this._injector.destroyed && (this._rendererFactory = this._injector.get(rr, null, { optional: !0 })); let n = 0; for (; this.dirtyFlags !== 0 && n++ < hb;) {
        x(A.ChangeDetectionSyncStart);
        try {
            this.synchronizeOnce();
        }
        finally {
            x(A.ChangeDetectionSyncEnd);
        }
    } }
    synchronizeOnce() { this.dirtyFlags & 16 && (this.dirtyFlags &= -17, this.rootEffectScheduler.flush()); let n = !1; if (this.dirtyFlags & 7) {
        let o = !!(this.dirtyFlags & 1);
        this.dirtyFlags &= -8, this.dirtyFlags |= 8;
        for (let { _lView: r } of this.allViews) {
            if (!o && !So(r))
                continue;
            let i = o && !this.zonelessEnabled ? 0 : 1;
            oy(r, i), n = !0;
        }
        if (this.dirtyFlags &= -5, this.syncDirtyFlagsWithViews(), this.dirtyFlags & 23)
            return;
    } n || (this._rendererFactory?.begin?.(), this._rendererFactory?.end?.()), this.dirtyFlags & 8 && (this.dirtyFlags &= -9, this.afterRenderManager.execute()), this.syncDirtyFlagsWithViews(); }
    syncDirtyFlagsWithViews() { if (this.allViews.some(({ _lView: n }) => So(n))) {
        this.dirtyFlags |= 2;
        return;
    }
    else
        this.dirtyFlags &= -8; }
    attachView(n) { let o = n; this._views.push(o), o.attachToAppRef(this); }
    detachView(n) { let o = n; Vo(this._views, o), o.detachFromAppRef(); }
    _loadComponent(n) { this.attachView(n.hostView); try {
        this.tick();
    }
    catch (r) {
        this.internalErrorHandler(r);
    } this.components.push(n), this._injector.get(xr, []).forEach(r => r(n)); }
    ngOnDestroy() { if (!this._destroyed)
        try {
            this._destroyListeners.forEach(n => n()), this._views.slice().forEach(n => n.destroy());
        }
        finally {
            this._destroyed = !0, this._views = [], this._destroyListeners = [];
        } }
    onDestroy(n) { return this._destroyListeners.push(n), () => Vo(this._destroyListeners, n); }
    destroy() { if (this._destroyed)
        throw new w(406, !1); let n = this._injector; n.destroy && !n.destroyed && n.destroy(); }
    get viewCount() { return this._views.length; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = V({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
function Vo(e, t) { let n = e.indexOf(t); n > -1 && e.splice(n, 1); }
function da() { let e, t; return { promise: new Promise((o, r) => { e = o, t = r; }), resolve: e, reject: t }; }
function Zv(e) { let t = g(), n = T(); if (uo(t, n), !Jv(0, t))
    return; let o = t[R], r = me(t, n), i = e(() => ye(0, t, n), o); Rr(0, r, i); }
function Yv(e) { if (typeof ngServerMode < "u" && ngServerMode)
    return; let t = g(), n = t[R], o = T(), r = t[m], i = ae(r, o); if (i.loadingState === te.NOT_STARTED) {
    let s = me(t, o), c = e(() => Or(i, t, o), n);
    Rr(1, s, c);
} }
function Kv(e, t, n) { if (typeof ngServerMode < "u" && ngServerMode)
    return; let o = t[R], r = me(t, n), i = r[ca], s = e(() => pt(o, i), o); Rr(2, r, s); }
function Or(e, t, n) { fa(e, t, n); }
function fa(e, t, n) { let o = t[R], r = t[m]; if (e.loadingState !== te.NOT_STARTED)
    return e.loadingPromise ?? Promise.resolve(); let i = me(t, n), s = YS(r, e); e.loadingState = te.IN_PROGRESS, Fi(1, i); let a = e.dependencyResolverFn, c = o.get(Tc).add(); return a ? (e.loadingPromise = Promise.allSettled(a()).then(l => { let u = !1, d = null, f = [], p = []; for (let h = 0; h < l.length; h++) {
    let y = l[h];
    if (y.status === "fulfilled") {
        let v = y.value, D = W(v) || Me(v);
        if (D)
            f.push(D);
        else {
            let S = Be(v);
            S && p.push(S);
        }
    }
    else {
        u = !0, d = y.reason instanceof Error ? y.reason : new Error(String(y.reason));
        break;
    }
} if (u) {
    if (e.loadingState = te.FAILED, e.errorTmplIndex === null) {
        let y = "", v = new w(-750, y);
        Zu(t, v);
    }
}
else {
    e.loadingState = te.COMPLETE;
    let h = s.tView;
    if (f.length > 0) {
        h.directiveRegistry = hh(h.directiveRegistry, f);
        let y = f.map(D => D.type), v = $a(!1, ...y);
        e.providers = v;
    }
    p.length > 0 && (h.pipeRegistry = hh(h.pipeRegistry, p));
} }), e.loadingPromise.finally(() => { e.loadingPromise = null, c(); })) : (e.loadingPromise = Promise.resolve().then(() => { e.loadingPromise = null, e.loadingState = te.COMPLETE, c(); }), e.loadingPromise); }
function Jv(e, t) { return !(e === 0 && typeof ngServerMode < "u" && ngServerMode || t[R].get(Hv, null, { optional: !0 })?.behavior === Ed.Manual); }
function ye(e, t, n) { let o = t[m], r = t[n.index]; if (!Jv(e, t))
    return; let i = me(t, n), s = ae(o, n); switch (Rv(i), s.loadingState) {
    case te.NOT_STARTED:
        ot($.Loading, n, r), fa(s, t, n), s.loadingState === te.IN_PROGRESS && yh(s, n, r);
        break;
    case te.IN_PROGRESS:
        ot($.Loading, n, r), yh(s, n, r);
        break;
    case te.COMPLETE:
        ot($.Complete, n, r);
        break;
    case te.FAILED:
        ot($.Error, n, r);
        break;
    default:
} }
function pt(e, t, n) { return gt(this, null, function* () { let o = e.get(lt); if (o.hydrating.has(t))
    return; let { parentBlockPromise: i, hydrationQueue: s } = SM(t, e); if (s.length === 0)
    return; i !== null && s.shift(), yb(o, s), i !== null && (yield i); let a = s[0]; o.has(a) ? yield Ih(e, s, n) : o.awaitParentBlock(a, () => gt(null, null, function* () { return yield Ih(e, s, n); })); }); }
function Ih(e, t, n) { return gt(this, null, function* () { let o = e.get(lt), r = o.hydrating, i = e.get(zt), s = i.add(); for (let c = 0; c < t.length; c++) {
    let l = t[c], u = o.get(l);
    if (u != null) {
        if (yield Ib(u), yield vb(e), gb(u)) {
            T_(u), Eh(t.slice(c), o);
            break;
        }
        r.get(l).resolve();
    }
    else {
        mb(c, t, o), Eh(t.slice(c), o);
        break;
    }
} let a = t[t.length - 1]; yield r.get(a)?.promise, i.remove(s), n && n(t), M_(o.get(a), t, o, e.get(xe)); }); }
function gb(e) { return me(e.lView, e.tNode)[ft] === $.Error; }
function mb(e, t, n) { let o = e - 1, r = o > -1 ? n.get(t[o]) : null; r && oa(r.lContainer); }
function Eh(e, t) { let n = t.hydrating; for (let o in e)
    n.get(o)?.reject(); t.cleanup(e); }
function yb(e, t) { for (let n of t)
    e.hydrating.set(n, da()); }
function vb(e) { return new Promise(t => Vu(t, { injector: e })); }
function Ib(e) { return gt(this, null, function* () { let { tNode: t, lView: n } = e, o = me(n, t); return new Promise(r => { Eb(o, r), ye(2, n, t); }); }); }
function Eb(e, t) { Array.isArray(e[On]) || (e[On] = []), e[On].push(t); }
function Z(e, t, n) { return e === 0 ? Dh(t, n) : e === 2 ? !Dh(t, n) : !(typeof ngServerMode < "u" && ngServerMode); }
function Db(e) { return e != null && (e & 1) === 1; }
function Dh(e, t) { let n = e[R], o = ae(e[m], t), r = Cr(n), i = Db(o.flags); if (typeof ngServerMode < "u" && ngServerMode)
    return !r || !i; let a = me(e, t)[ca] !== null; return !(i && a && r); }
function xt(e, t) { let n = ae(e, t); return n.hydrateTriggers ??= new Map; }
function Xv(e, t, n) { let o = [], r = [], i = [], s = []; for (let [a, c] of t) {
    let l = n.get(a);
    if (l !== void 0) {
        let u = c.data[it], d = l;
        for (let f = 0; f < u; f++) {
            if (d = d.previousSibling, d.nodeType !== Node.ELEMENT_NODE)
                continue;
            let p = { el: d, blockName: a };
            c.hydrate.idle && o.push(p), c.hydrate.immediate && s.push(p), c.hydrate.timer !== null && (p.delay = c.hydrate.timer, r.push(p)), c.hydrate.viewport && (typeof c.hydrate.viewport != "boolean" && (p.intersectionObserverOptions = c.hydrate.viewport), i.push(p));
        }
    }
} Cb(e, o), Nb(e, s), Tb(e, i), Mb(e, r); }
function Cb(e, t) { for (let n of t) {
    let o = e.get(lt), i = la(() => pt(e, n.blockName), e);
    o.addCleanupFn(n.blockName, i);
} }
function Tb(e, t) { if (t.length > 0) {
    let n = e.get(lt);
    for (let o of t) {
        let r = Dd(o.el, () => pt(e, o.blockName), e, o.intersectionObserverOptions);
        n.addCleanupFn(o.blockName, r);
    }
} }
function Mb(e, t) { for (let n of t) {
    let o = e.get(lt), r = () => pt(e, n.blockName), s = ua(n.delay)(r, e);
    o.addCleanupFn(n.blockName, s);
} }
function Nb(e, t) { for (let n of t)
    pt(e, n.blockName); }
function eI(e, t, n, o, r, i, s, a, c, l) { let u = g(), d = N(), f = e + I, p = an(u, d, e, null, 0, 0), h = u[R], y = Cr(h); if (d.firstCreatePass) {
    Q("NgDefer");
    let Je = { primaryTmplIndex: t, loadingTmplIndex: o ?? null, placeholderTmplIndex: r ?? null, errorTmplIndex: i ?? null, placeholderBlockConfig: null, loadingBlockConfig: null, dependencyResolverFn: n ?? null, loadingState: te.NOT_STARTED, loadingPromise: null, providers: null, hydrateTriggers: null, debug: null, flags: l ?? 0 };
    c?.(d, Je, a, s), QS(d, f, Je);
} let v = u[f]; tv(v, p, u); let D = null, S = null; if (v[Ee]?.length > 0) {
    let Je = v[Ee][0].data;
    S = Je[Ns] ?? null, D = Je[Ir];
} let J = [null, cr.Initial, null, null, null, null, S, D, null, null]; qS(u, f, J); let Oe = null; S !== null && y && (Oe = h.get(lt), Oe.add(S, { lView: u, tNode: p, lContainer: v })); let Te = () => { Rv(J), S !== null && Oe?.cleanup([S]); }; Rr(0, J, () => Ka(u, Te)), li(u, Te); }
function tI(e) { let t = g(), n = De(); if (!Z(0, t, n))
    return; let o = pe(); if (U(t, o, e)) {
    let r = O(null);
    try {
        let i = !!e, a = me(t, n)[ft];
        i === !1 && a === cr.Initial ? uo(t, n) : i === !0 && (a === cr.Initial || a === $.Placeholder) && ye(0, t, n);
    }
    finally {
        O(r);
    }
} }
function nI(e) { let t = g(), n = De(); if (!Z(1, t, n))
    return; let o = pe(); if (U(t, o, e)) {
    let r = O(null);
    try {
        let i = !!e, s = t[m], a = ae(s, n);
        i === !0 && a.loadingState === te.NOT_STARTED && Or(a, t, n);
    }
    finally {
        O(r);
    }
} }
function oI(e) { let t = g(), n = De(); if (!Z(2, t, n))
    return; let o = pe(), r = N(); if (xt(r, n).set(6, null), U(t, o, e))
    if (typeof ngServerMode < "u" && ngServerMode)
        ye(2, t, n);
    else {
        let s = t[R], a = O(null);
        try {
            if (!!e === !0) {
                let u = me(t, n)[ca];
                pt(s, u);
            }
        }
        finally {
            O(a);
        }
    } }
function rI() { let e = g(), t = T(); if (!Z(2, e, t))
    return; xt(N(), t).set(7, null), typeof ngServerMode < "u" && ngServerMode && ye(2, e, t); }
function iI() { let e = g(), t = T(); Z(0, e, t) && Zv(la); }
function sI() { let e = g(), t = T(); Z(1, e, t) && Yv(la); }
function aI() { let e = g(), t = T(); if (!Z(2, e, t))
    return; xt(N(), t).set(0, null), typeof ngServerMode < "u" && ngServerMode ? ye(2, e, t) : Kv(la, e, t); }
function cI() { let e = g(), t = T(); if (!Z(0, e, t))
    return; ae(e[m], t).loadingTmplIndex === null && uo(e, t), ye(0, e, t); }
function lI() { let e = g(), t = T(); if (!Z(1, e, t))
    return; let n = e[m], o = ae(n, t); o.loadingState === te.NOT_STARTED && fa(o, e, t); }
function uI() { let e = g(), t = T(); if (!Z(2, e, t))
    return; if (xt(N(), t).set(1, null), typeof ngServerMode < "u" && ngServerMode)
    ye(2, e, t);
else {
    let o = e[R], i = me(e, t)[ca];
    pt(o, i);
} }
function dI(e) { let t = g(), n = T(); Z(0, t, n) && Zv(ua(e)); }
function fI(e) { let t = g(), n = T(); Z(1, t, n) && Yv(ua(e)); }
function pI(e) { let t = g(), n = T(); if (!Z(2, t, n))
    return; xt(N(), n).set(5, { type: 5, delay: e }), typeof ngServerMode < "u" && ngServerMode ? ye(2, t, n) : Kv(ua(e), t, n); }
function hI(e, t) { let n = g(), o = T(); Z(0, n, o) && (uo(n, o), typeof ngServerMode < "u" && ngServerMode || lo(n, o, e, t, Lg, () => ye(0, n, o), 0)); }
function gI(e, t) { let n = g(), o = T(); if (!Z(1, n, o))
    return; let r = n[m], i = ae(r, o); i.loadingState === te.NOT_STARTED && lo(n, o, e, t, Lg, () => Or(i, n, o), 1); }
function mI() { let e = g(), t = T(); if (!Z(2, e, t))
    return; xt(N(), t).set(4, null), typeof ngServerMode < "u" && ngServerMode && ye(2, e, t); }
function yI(e, t) { let n = g(), o = T(); Z(0, n, o) && (uo(n, o), typeof ngServerMode < "u" && ngServerMode || lo(n, o, e, t, Og, () => ye(0, n, o), 0)); }
function vI(e, t) { let n = g(), o = T(); if (!Z(1, n, o))
    return; let r = n[m], i = ae(r, o); i.loadingState === te.NOT_STARTED && lo(n, o, e, t, Og, () => Or(i, n, o), 1); }
function II() { let e = g(), t = T(); if (!Z(2, e, t))
    return; xt(N(), t).set(3, null), typeof ngServerMode < "u" && ngServerMode && ye(2, e, t); }
function EI(e, t, n) { let o = g(), r = T(); Z(0, o, r) && (uo(o, r), typeof ngServerMode < "u" && ngServerMode || lo(o, r, e, t, Dd, () => ye(0, o, r), 0, n)); }
function DI(e, t, n) { let o = g(), r = T(); if (!Z(1, o, r))
    return; let i = o[m], s = ae(i, r); s.loadingState === te.NOT_STARTED && lo(o, r, e, t, Dd, () => Or(s, o, r), 1, n); }
function CI(e) { let t = g(), n = T(); if (!Z(2, t, n))
    return; xt(N(), n).set(2, e ? { type: 2, intersectionObserverOptions: e } : null), typeof ngServerMode < "u" && ngServerMode && ye(2, t, n); }
function Rd(e, t) { let n = g(), o = pe(); if (U(n, o, t)) {
    let r = N(), i = De();
    if (Zs(i, r, n, e, t))
        ge(i) && Km(n, i.index);
    else {
        let a = re(i, n);
        Gs(n[C], a, null, i.value, e, t, null);
    }
} return Rd; }
function kd(e, t, n, o) { let r = g(), i = pe(); if (U(r, i, t)) {
    let s = N(), a = De();
    hw(a, r, e, t, n, o);
} return kd; }
function Bo(e) { if (Q("NgAnimateEnter"), typeof ngServerMode < "u" && ngServerMode || !fn)
    return Bo; let t = g(); if (Fs(t))
    return Bo; let n = T(), o = t[R].get(B); return Hs(Xi(t), n, () => wb(t, n, e, o)), Us(t[R]), Bu(t[R], Xi(t)), Bo; }
function wb(e, t, n, o) { let r = re(t, e), i = e[C], s = km(n), a = [], c = !1, l = d => { if (Jo(d) !== r)
    return; let f = d instanceof AnimationEvent ? "animationend" : "transitionend"; o.runOutsideAngular(() => { i.listen(r, f, u); }); }, u = d => { Jo(d) === r && (Fu(d, r) && (c = !0), _b(d, r, i)); }; if (s && s.length > 0) {
    o.runOutsideAngular(() => { a.push(i.listen(r, "animationstart", l)), a.push(i.listen(r, "transitionstart", l)); }), BN(r, s, a);
    for (let d of s)
        i.addClass(r, d);
    o.runOutsideAngular(() => { requestAnimationFrame(() => { if (!c && (Lm(r, Jt, fn), !Jt.has(r))) {
        for (let d of s)
            i.removeClass(r, d);
        Lu(r);
    } }); });
} }
function _b(e, t, n) { let o = Fn.get(t); if (!(Jo(e) !== t || !o) && Fu(e, t)) {
    e.stopPropagation();
    for (let r of o.classList)
        n.removeClass(t, r);
    Lu(t);
} }
function $o(e) { if (Q("NgAnimateEnter"), typeof ngServerMode < "u" && ngServerMode || !fn)
    return $o; let t = g(); if (Fs(t))
    return $o; let n = T(); return Hs(Xi(t), n, () => Sb(t, n, e)), Us(t[R]), Bu(t[R], Xi(t)), $o; }
function Sb(e, t, n) { let o = re(t, e); n.call(e[F], { target: o, animationComplete: $N }); }
function Uo(e) { if (Q("NgAnimateLeave"), typeof ngServerMode < "u" && ngServerMode || !fn)
    return Uo; let t = g(); if (Fs(t))
    return Uo; let o = T(), r = t[R].get(B); return Hs(tn(t), o, () => bb(t, o, e, r)), Us(t[R]), Uo; }
function bb(e, t, n, o) { let { promise: r, resolve: i } = da(), s = re(t, e), a = e[C]; nn.add(e[_e]), (tn(e).get(t.index).resolvers ??= []).push(i); let c = km(n); return c && c.length > 0 ? Ab(s, t, e, c, a, o) : i(), { promise: r, resolve: i }; }
function Ab(e, t, n, o, r, i) { zN(e, r); let s = [], a = tn(n).get(t.index)?.resolvers, c, l = !1, u = d => { if (!(Jo(d) !== e && d.type !== "animation-fallback") && (d.type === "animation-fallback" || Fu(d, e))) {
    if (l = !0, c && clearTimeout(c), d.type !== "animation-fallback" && d.stopPropagation(), Jt.delete(e), Il(t, e), Array.isArray(t.projection))
        for (let p of o)
            r.removeClass(e, p);
    El(a, s), Dl(n, t);
} }; i.runOutsideAngular(() => { s.push(r.listen(e, "animationend", u)), s.push(r.listen(e, "transitionend", u)); }), Pu(t, e); for (let d of o)
    r.addClass(e, d); i.runOutsideAngular(() => { requestAnimationFrame(() => { if (l)
    return; Lm(e, Jt, fn); let d = Jt.get(e); d ? (c = setTimeout(() => { u(new CustomEvent("animation-fallback")); }, d.duration + 50), s.push(() => clearTimeout(c))) : (Il(t, e), El(a, s), Dl(n, t)); }); }); }
function ls(e) { if (Q("NgAnimateLeave"), typeof ngServerMode < "u" && ngServerMode || !fn)
    return ls; let t = g(), n = T(); nn.add(t[_e]); let o = t[R].get(B), r = t[R].get(Rm); return Hs(tn(t), n, () => Rb(t, n, e, o, r)), Us(t[R]), ls; }
function Rb(e, t, n, o, r) { let { promise: i, resolve: s } = da(), a = re(t, e), c = [], l = e[C], u = Fs(e); (tn(e).get(t.index).resolvers ??= []).push(s); let d = tn(e).get(t.index)?.resolvers; if (u)
    Ni(e, t, a, d, c);
else {
    let f = setTimeout(() => Ni(e, t, a, d, c), r), p = { target: a, animationComplete: () => { Ni(e, t, a, d, c), clearTimeout(f); } };
    Pu(t, a), o.runOutsideAngular(() => { c.push(l.listen(a, "animationend", () => { Ni(e, t, a, d, c), clearTimeout(f); }, { once: !0 })); }), n.call(e[F], p);
} return { promise: i, resolve: s }; }
function TI() { return g()[K][F]; }
var Vl = class {
    destroy(t) { }
    updateValue(t, n) { }
    swap(t, n) { let o = Math.min(t, n), r = Math.max(t, n), i = this.detach(r); if (r - o > 1) {
        let s = this.detach(o);
        this.attach(o, i), this.attach(r, s);
    }
    else
        this.attach(o, i); }
    move(t, n) { this.attach(n, this.detach(t)); }
};
function Bc(e, t, n, o, r) { return e === n && Object.is(t, o) ? 1 : Object.is(r(e, t), r(n, o)) ? -1 : 0; }
function kb(e, t, n, o) { let r, i, s = 0, a = e.length - 1, c = void 0; if (Array.isArray(t)) {
    Tn(o);
    let l = t.length - 1;
    for (Tn(null); s <= a && s <= l;) {
        let u = e.at(s), d = t[s], f = Bc(s, u, s, d, n);
        if (f !== 0) {
            f < 0 && e.updateValue(s, d), s++;
            continue;
        }
        let p = e.at(a), h = t[l], y = Bc(a, p, l, h, n);
        if (y !== 0) {
            y < 0 && e.updateValue(a, h), a--, l--;
            continue;
        }
        let v = n(s, u), D = n(a, p), S = n(s, d);
        if (Object.is(S, D)) {
            let J = n(l, h);
            Object.is(J, v) ? (e.swap(s, a), e.updateValue(a, h), l--, a--) : e.move(a, s), e.updateValue(s, d), s++;
            continue;
        }
        if (r ??= new us, i ??= Th(e, s, a, n), Bl(e, r, s, S))
            e.updateValue(s, d), s++, a++;
        else if (i.has(S))
            r.set(v, e.detach(s)), a--;
        else {
            let J = e.create(s, t[s]);
            e.attach(s, J), s++, a++;
        }
    }
    for (; s <= l;)
        Ch(e, r, n, s, t[s]), s++;
}
else if (t != null) {
    Tn(o);
    let l = t[Symbol.iterator]();
    Tn(null);
    let u = l.next();
    for (; !u.done && s <= a;) {
        let d = e.at(s), f = u.value, p = Bc(s, d, s, f, n);
        if (p !== 0)
            p < 0 && e.updateValue(s, f), s++, u = l.next();
        else {
            r ??= new us, i ??= Th(e, s, a, n);
            let h = n(s, f);
            if (Bl(e, r, s, h))
                e.updateValue(s, f), s++, a++, u = l.next();
            else if (!i.has(h))
                e.attach(s, e.create(s, f)), s++, a++, u = l.next();
            else {
                let y = n(s, d);
                r.set(y, e.detach(s)), a--;
            }
        }
    }
    for (; !u.done;)
        Ch(e, r, n, e.length, u.value), u = l.next();
} for (; s <= a;)
    e.destroy(e.detach(a--)); r?.forEach(l => { e.destroy(l); }); }
function Bl(e, t, n, o) { return t !== void 0 && t.has(o) ? (e.attach(n, t.get(o)), t.delete(o), !0) : !1; }
function Ch(e, t, n, o, r) { if (Bl(e, t, o, n(o, r)))
    e.updateValue(o, r);
else {
    let i = e.create(o, r);
    e.attach(o, i);
} }
function Th(e, t, n, o) { let r = new Set; for (let i = t; i <= n; i++)
    r.add(o(i, e.at(i))); return r; }
var us = class {
    kvMap = new Map;
    _vMap = void 0;
    has(t) { return this.kvMap.has(t); }
    delete(t) { if (!this.has(t))
        return !1; let n = this.kvMap.get(t); return this._vMap !== void 0 && this._vMap.has(n) ? (this.kvMap.set(t, this._vMap.get(n)), this._vMap.delete(n)) : this.kvMap.delete(t), !0; }
    get(t) { return this.kvMap.get(t); }
    set(t, n) { if (this.kvMap.has(t)) {
        let o = this.kvMap.get(t);
        this._vMap === void 0 && (this._vMap = new Map);
        let r = this._vMap;
        for (; r.has(o);)
            o = r.get(o);
        r.set(o, n);
    }
    else
        this.kvMap.set(t, n); }
    forEach(t) { for (let [n, o] of this.kvMap)
        if (t(o, n), this._vMap !== void 0) {
            let r = this._vMap;
            for (; r.has(o);)
                o = r.get(o), t(o, n);
        } }
};
function MI(e, t, n, o, r, i, s, a) { Q("NgControlFlow"); let c = g(), l = N(), u = ue(l.consts, i); return an(c, l, e, t, n, o, r, u, 256, s, a), pa; }
function pa(e, t, n, o, r, i, s, a) { Q("NgControlFlow"); let c = g(), l = N(), u = ue(l.consts, i); return an(c, l, e, t, n, o, r, u, 512, s, a), pa; }
function NI(e, t) { Q("NgControlFlow"); let n = g(), o = pe(), r = n[o] !== L ? n[o] : -1, i = r !== -1 ? ds(n, I + r) : void 0, s = 0; if (U(n, o, e)) {
    let a = O(null);
    try {
        if (i !== void 0 && Yu(i, s), e !== -1) {
            let c = I + e, l = ds(n, c), u = Wl(n[m], c), d = Oy(l, u, n), f = ro(n, u, t, { dehydratedView: d });
            io(l, f, s, on(u, d));
        }
    }
    finally {
        O(a);
    }
}
else if (i !== void 0) {
    let a = ly(i, s);
    a !== void 0 && (a[F] = t);
} }
var $l = class {
    lContainer;
    $implicit;
    $index;
    constructor(t, n, o) { this.lContainer = t, this.$implicit = n, this.$index = o; }
    get $count() { return this.lContainer.length - H; }
};
function wI(e) { return e; }
function _I(e, t) { return t; }
var Ul = class {
    hasEmptyBlock;
    trackByFn;
    liveCollection;
    constructor(t, n, o) { this.hasEmptyBlock = t, this.trackByFn = n, this.liveCollection = o; }
};
function SI(e, t, n, o, r, i, s, a, c, l, u, d, f) { Q("NgControlFlow"); let p = g(), h = N(), y = c !== void 0, v = g(), D = a ? s.bind(v[K][F]) : s, S = new Ul(y, D); v[I + e] = S, an(p, h, e + 1, t, n, o, r, ue(h.consts, i), 256), y && an(p, h, e + 2, c, l, u, d, ue(h.consts, f), 512); }
var zl = class extends Vl {
    lContainer;
    hostLView;
    templateTNode;
    operationsCounter = void 0;
    needsIndexUpdate = !1;
    constructor(t, n, o) { super(), this.lContainer = t, this.hostLView = n, this.templateTNode = o; }
    get length() { return this.lContainer.length - H; }
    at(t) { return this.getLView(t)[F].$implicit; }
    attach(t, n) { let o = n[se]; this.needsIndexUpdate ||= t !== this.length, io(this.lContainer, n, t, on(this.templateTNode, o)), xb(this.lContainer, t); }
    detach(t) { return this.needsIndexUpdate ||= t !== this.length - 1, Ob(this.lContainer, t), Lb(this.lContainer, t); }
    create(t, n) { let o = or(this.lContainer, this.templateTNode.tView.ssrId); return ro(this.hostLView, this.templateTNode, new $l(this.lContainer, n, t), { dehydratedView: o }); }
    destroy(t) { _r(t[m], t); }
    updateValue(t, n) { this.getLView(t)[F].$implicit = n; }
    reset() { this.needsIndexUpdate = !1; }
    updateIndexes() { if (this.needsIndexUpdate)
        for (let t = 0; t < this.length; t++)
            this.getLView(t)[F].$index = t; }
    getLView(t) { return Pb(this.lContainer, t); }
};
function bI(e) { let t = O(null), n = ee(); try {
    let o = g(), r = o[m], i = o[n], s = n + 1, a = ds(o, s);
    if (i.liveCollection === void 0) {
        let l = Wl(r, s);
        i.liveCollection = new zl(a, o, l);
    }
    else
        i.liveCollection.reset();
    let c = i.liveCollection;
    if (kb(c, e, i.trackByFn, t), c.updateIndexes(), i.hasEmptyBlock) {
        let l = pe(), u = c.length === 0;
        if (U(o, l, u)) {
            let d = n + 2, f = ds(o, d);
            if (u) {
                let p = Wl(r, d), h = Oy(f, p, o), y = ro(o, p, void 0, { dehydratedView: h });
                io(f, y, 0, on(p, h));
            }
            else
                r.firstUpdatePass && na(f), Yu(f, 0);
        }
    }
}
finally {
    O(t);
} }
function ds(e, t) { return e[t]; }
function xb(e, t) { if (e.length <= H)
    return; let n = H + t, o = e[n], r = o ? o[ze] : void 0; if (o && r && r.detachedLeaveAnimationFns && r.detachedLeaveAnimationFns.length > 0) {
    let i = o[R];
    KN(i, r), nn.delete(o[_e]), r.detachedLeaveAnimationFns = void 0;
} }
function Ob(e, t) { if (e.length <= H)
    return; let n = H + t, o = e[n], r = o ? o[ze] : void 0; r && r.leave && r.leave.size > 0 && (r.detachedLeaveAnimationFns = []); }
function Lb(e, t) { return er(e, t); }
function Pb(e, t) { return ly(e, t); }
function Wl(e, t) { return Bt(e, t); }
function xd(e, t, n) { let o = g(), r = pe(); if (U(o, r, t)) {
    let i = N(), s = De();
    Gu(s, o, e, t, o[C], n);
} return xd; }
function Gl(e, t, n, o, r) { Zs(t, e, n, r ? "class" : "style", o); }
function lr(e, t, n, o) { let r = g(), i = r[m], s = e + I, a = i.firstCreatePass ? nd(s, r, 2, t, Qu, ui(), n, o) : i.data[s]; if (ge(a)) {
    let c = r[$e].tracingService;
    if (c && c.componentCreate) {
        let l = i.data[a.directiveStart + a.componentOffset];
        return c.componentCreate(id(l), () => (Mh(e, t, r, a, o), lr));
    }
} return Mh(e, t, r, a, o), lr; }
function Mh(e, t, n, o, r) { if (qs(o, n, e, t, Pd), In(o)) {
    let i = n[m];
    Ws(i, n, o), Eu(i, o, n);
} r != null && oo(n, o); }
function ha() { let e = N(), t = T(), n = Qs(t); return e.firstCreatePass && od(e, n), Xa(n) && nc(), Ja(), n.classesWithoutHost != null && gT(n) && Gl(e, n, g(), n.classesWithoutHost, !0), n.stylesWithoutHost != null && mT(n) && Gl(e, n, g(), n.stylesWithoutHost, !1), ha; }
function Od(e, t, n, o) { return lr(e, t, n, o), ha(), Od; }
function ga(e, t, n, o) { let r = g(), i = r[m], s = e + I, a = i.firstCreatePass ? By(s, i, 2, t, n, o) : i.data[s]; return qs(a, r, e, t, Pd), o != null && oo(r, a), ga; }
function ma() { let e = T(), t = Qs(e); return Xa(t) && nc(), Ja(), ma; }
function Ld(e, t, n, o) { return ga(e, t, n, o), ma(), Ld; }
var Pd = (e, t, n, o, r) => (He(!0), xs(t[C], o, gi()));
function Fb(e, t, n, o, r) { let i = !Rs(t, n); if (He(i), i)
    return xs(t[C], o, gi()); let s = t[se], a = br(s, e, t, n); return Yg(s, r) && bs(s, r, a.nextSibling), s && (ou(n) || vg(a)) && ge(n) && (sp(n), vm(a)), a; }
function AI() { Pd = Fb; }
function ya(e, t, n) { let o = g(), r = o[m], i = e + I, s = r.firstCreatePass ? nd(i, o, 8, "ng-container", Qu, ui(), t, n) : r.data[i]; if (qs(s, o, e, "ng-container", Vd), In(s)) {
    let a = o[m];
    Ws(a, o, s), Eu(a, s, o);
} return n != null && oo(o, s), ya; }
function Lr() { let e = N(), t = T(), n = Qs(t); return e.firstCreatePass && od(e, n), Lr; }
function Fd(e, t, n) { return ya(e, t, n), Lr(), Fd; }
function va(e, t, n) { let o = g(), r = o[m], i = e + I, s = r.firstCreatePass ? By(i, r, 8, "ng-container", t, n) : r.data[i]; return qs(s, o, e, "ng-container", Vd), n != null && oo(o, s), va; }
function Hd() { let e = T(), t = Qs(e); return Lr; }
function jd(e, t, n) { return va(e, t, n), Hd(), jd; }
var Vd = (e, t, n, o, r) => (He(!0), Tu(t[C], ""));
function Hb(e, t, n, o, r) { let i, s = !Rs(t, n); if (He(s), s)
    return Tu(t[C], ""); let a = t[se], c = br(a, e, t, n), l = Zg(a, r); return bs(a, r, c), i = ea(l, c), i; }
function RI() { Vd = Hb; }
function kI() { return g(); }
function Bd(e, t, n) { let o = g(), r = pe(); if (U(o, r, t)) {
    let i = N(), s = De();
    qu(s, o, e, t, o[C], n);
} return Bd; }
function $d(e, t, n) { let o = g(), r = pe(); if (U(o, r, t)) {
    let i = N(), s = De(), a = di(i.data), c = Jm(a, s, o);
    qu(s, o, e, t, c, n);
} return $d; }
var Oo = void 0;
function jb(e) { let t = Math.floor(Math.abs(e)), n = e.toString().replace(/^[^.]*\.?/, "").length; return t === 1 && n === 0 ? 1 : 5; }
var Vb = ["en", [["a", "p"], ["AM", "PM"]], [["AM", "PM"]], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], Oo, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], Oo, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm\u202Fa", "h:mm:ss\u202Fa", "h:mm:ss\u202Fa z", "h:mm:ss\u202Fa zzzz"], ["{1}, {0}", Oo, Oo, Oo], [".", ",", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0%", "\xA4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr", jb], Ln = Object.create(null);
function Bb(e, t, n) { typeof t != "string" && (n = t, t = e[zn.LocaleId]), t = t.toLowerCase().replace(/_/g, "-"), Ln[t] = e, n && (Ln[t][zn.ExtraData] = n); }
function Ud(e) { let t = zb(e), n = Nh(t); if (n)
    return n; let o = t.split("-")[0]; if (n = Nh(o), n)
    return n; if (o === "en")
    return Vb; throw new w(701, !1); }
function $b(e) { return Ud(e)[zn.CurrencyCode] || null; }
function xI(e) { return Ud(e)[zn.PluralCase]; }
function Nh(e) { if (!(e in Ln)) {
    let t = Ie.ng && Ie.ng.common && Ie.ng.common.locales && Ie.ng.common.locales[e];
    return t !== void 0 && (Ln[e] = t), t;
} return Ln[e]; }
function Ub() { Ln = Object.create(null); }
var zn = (function (e) { return e[e.LocaleId = 0] = "LocaleId", e[e.DayPeriodsFormat = 1] = "DayPeriodsFormat", e[e.DayPeriodsStandalone = 2] = "DayPeriodsStandalone", e[e.DaysFormat = 3] = "DaysFormat", e[e.DaysStandalone = 4] = "DaysStandalone", e[e.MonthsFormat = 5] = "MonthsFormat", e[e.MonthsStandalone = 6] = "MonthsStandalone", e[e.Eras = 7] = "Eras", e[e.FirstDayOfWeek = 8] = "FirstDayOfWeek", e[e.WeekendRange = 9] = "WeekendRange", e[e.DateFormat = 10] = "DateFormat", e[e.TimeFormat = 11] = "TimeFormat", e[e.DateTimeFormat = 12] = "DateTimeFormat", e[e.NumberSymbols = 13] = "NumberSymbols", e[e.NumberFormats = 14] = "NumberFormats", e[e.CurrencyCode = 15] = "CurrencyCode", e[e.CurrencySymbol = 16] = "CurrencySymbol", e[e.CurrencyName = 17] = "CurrencyName", e[e.Currencies = 18] = "Currencies", e[e.Directionality = 19] = "Directionality", e[e.PluralCase = 20] = "PluralCase", e[e.ExtraData = 21] = "ExtraData", e; })(zn || {});
function zb(e) { return e.toLowerCase().replace(/_/g, "-"); }
var Wb = ["zero", "one", "two", "few", "many"];
function Gb(e, t) { let n = xI(t)(parseInt(e, 10)), o = Wb[n]; return o !== void 0 ? o : "other"; }
var Pr = "en-US", qb = "USD", OI = { marker: "element" }, LI = { marker: "ICU" }, nt = (function (e) { return e[e.SHIFT = 2] = "SHIFT", e[e.APPEND_EAGERLY = 1] = "APPEND_EAGERLY", e[e.COMMENT = 2] = "COMMENT", e; })(nt || {}), PI = Pr;
function FI(e) { typeof e == "string" && (PI = e.toLowerCase().replace(/_/g, "-")); }
function Qb() { return PI; }
var ur = 0, zo = 0;
function Zb(e) { e && (ur = ur | 1 << Math.min(zo, 31)), zo++; }
function Yb(e, t, n) { try {
    if (zo > 0) {
        let o = e.data[n], r = Array.isArray(o) ? o : o.update, i = qe() - zo - 1;
        BI(e, t, r, i, ur);
    }
}
finally {
    ur = 0, zo = 0;
} }
function HI(e, t, n) { let o = e[C]; switch (n) {
    case Node.COMMENT_NODE: return Tu(o, t);
    case Node.TEXT_NODE: return Cu(o, t);
    case Node.ELEMENT_NODE: return xs(o, t, null);
} }
var Wo = (e, t, n, o) => (He(!0), HI(e, n, o));
function Kb(e, t, n, o) { let r = e[se], i = t - I, s = !ta() || !r || bo() || As(r, i); return He(s), s ? HI(e, n, o) : vy(r, i); }
function jI() { Wo = Kb; }
function Jb(e, t, n, o) { let r = e[C]; for (let i = 0; i < t.length; i++) {
    let s = t[i++], a = t[i], c = (s & nt.COMMENT) === nt.COMMENT, l = (s & nt.APPEND_EAGERLY) === nt.APPEND_EAGERLY, u = s >>> nt.SHIFT, d = e[u], f = !1;
    d === null && (d = e[u] = Wo(e, u, a, c ? Node.COMMENT_NODE : Node.TEXT_NODE), f = Ro()), l && n !== null && f && en(r, n, d, o, !1);
} }
function VI(e, t, n, o) { let r = n[C], i = null, s; for (let a = 0; a < t.length; a++) {
    let c = t[a];
    if (typeof c == "string") {
        let l = t[++a];
        n[l] === null && (n[l] = Wo(n, l, c, Node.TEXT_NODE));
    }
    else if (typeof c == "number")
        switch (c & 1) {
            case 0:
                let l = e_(c);
                i === null && (i = l, s = r.parentNode(o));
                let u, d;
                if (l === i ? (u = o, d = s) : (u = null, d = k(n[l])), d !== null) {
                    let y = t_(c), v = n[y];
                    en(r, d, v, u, !1);
                    let D = Ho(e, y);
                    if (D !== null && typeof D == "object") {
                        let S = Xs(D, n);
                        S !== null && VI(e, D.create[S], n, n[D.anchorIdx]);
                    }
                }
                break;
            case 1:
                let f = c >>> 1, p = t[++a], h = t[++a];
                Gs(r, Vt(f, n), null, null, p, h, null);
                break;
            default:
        }
    else
        switch (c) {
            case LI:
                let l = t[++a], u = t[++a];
                if (n[u] === null) {
                    let p = n[u] = Wo(n, u, l, Node.COMMENT_NODE);
                    Ae(p, n);
                }
                break;
            case OI:
                let d = t[++a], f = t[++a];
                if (n[f] === null) {
                    let p = n[f] = Wo(n, f, d, Node.ELEMENT_NODE);
                    Ae(p, n);
                }
                break;
            default:
        }
} }
function BI(e, t, n, o, r) { for (let i = 0; i < n.length; i++) {
    let s = n[i], a = n[++i];
    if (s & r) {
        let c = "";
        for (let l = i + 1; l <= i + a; l++) {
            let u = n[l];
            if (typeof u == "string")
                c += u;
            else if (typeof u == "number")
                if (u < 0)
                    c += M(t[o - u]);
                else {
                    let d = u >>> 2;
                    switch (u & 3) {
                        case 1:
                            let f = n[++l], p = n[++l], h = e.data[d];
                            if (typeof h == "string")
                                Gs(t[C], t[d], null, h, f, c, p);
                            else {
                                let v = ee();
                                Ze(d);
                                try {
                                    Gu(h, t, f, c, t[C], p);
                                }
                                finally {
                                    Ze(v);
                                }
                            }
                            break;
                        case 0:
                            let y = t[d];
                            y !== null && mm(t[C], y, c);
                            break;
                        case 2:
                            Xb(e, Ho(e, d), t, c);
                            break;
                        case 3:
                            wh(e, Ho(e, d), o, t);
                            break;
                    }
                }
        }
    }
    else {
        let c = n[i + 1];
        if (c > 0 && (c & 3) === 3) {
            let l = c >>> 2, u = Ho(e, l);
            t[u.currentCaseLViewIndex] < 0 && wh(e, u, o, t);
        }
    }
    i += a;
} }
function wh(e, t, n, o) { let r = o[t.currentCaseLViewIndex]; if (r !== null) {
    let i = ur;
    r < 0 && (r = o[t.currentCaseLViewIndex] = ~r, i = -1), BI(e, o, t.update[r], n, i);
} }
function Xb(e, t, n, o) { let r = eA(t, o); if (Xs(t, n) !== r && ($I(e, t, n), n[t.currentCaseLViewIndex] = r === null ? null : ~r, r !== null)) {
    let s = n[t.anchorIdx];
    s && VI(e, t.create[r], n, s), I_(n, t.anchorIdx, r);
} }
function $I(e, t, n) { let o = Xs(t, n); if (o !== null) {
    let r = t.remove[o];
    for (let i = 0; i < r.length; i++) {
        let s = r[i];
        if (s > 0) {
            let a = Vt(s, n);
            a !== null && Mr(n[C], a);
        }
        else
            $I(e, Ho(e, ~s), n);
    }
} }
function eA(e, t) { let n = e.cases.indexOf(t); if (n === -1)
    switch (e.type) {
        case 1: {
            let o = Gb(t, Qb());
            n = e.cases.indexOf(o), n === -1 && o !== "other" && (n = e.cases.indexOf("other"));
            break;
        }
        case 0: {
            n = e.cases.indexOf("other");
            break;
        }
    } return n === -1 ? null : n; }
var fs = /�(\d+):?\d*�/gi, tA = /({\s*�\d+:?\d*�\s*,\s*\S{6}\s*,[\s\S]*})/gi, nA = /�(\d+)�/, UI = /^\s*(�\d+:?\d*�)\s*,\s*(select|plural)\s*,/, Go = "\uFFFD", oA = /�\/?\*(\d+:\d+)�/gi, rA = /�(\/?[#*]\d+):?\d*�/gi, iA = /\uE500/g;
function sA(e) { return e.replace(iA, " "); }
function aA(e, t, n, o, r, i) { let s = En(), a = [], c = [], l = [[]], u = [[]]; r = dA(r, i); let d = sA(r).split(rA); for (let f = 0; f < d.length; f++) {
    let p = d[f];
    if ((f & 1) === 0) {
        let h = ql(p);
        for (let y = 0; y < h.length; y++) {
            let v = h[y];
            if ((y & 1) === 0) {
                let D = v;
                D !== "" && cA(u[0], e, s, l[0], a, c, n, D);
            }
            else {
                let D = v;
                if (typeof D != "object")
                    throw new Error(`Unable to parse ICU expression in "${r}" message.`);
                let J = zI(e, s, l[0], n, a, "", !0).index;
                GI(u[0], e, n, c, t, D, J);
            }
        }
    }
    else {
        let h = p.charCodeAt(0) === 47, y = p.charCodeAt(h ? 1 : 0), v = I + Number.parseInt(p.substring(h ? 2 : 1));
        if (h)
            l.shift(), u.shift(), Ge(En(), !1);
        else {
            let D = Xw(e, l[0], v);
            l.unshift([]), Ge(D, !0);
            let S = { kind: 2, index: v, children: [], type: y === 35 ? 0 : 1 };
            u[0].push(S), u.unshift(S.children);
        }
    }
} e.data[o] = { create: a, update: c, ast: u[0], parentTNodeIndex: t }; }
function zI(e, t, n, o, r, i, s) { let a = wr(e, o, 1, null), c = a << nt.SHIFT, l = En(); t === l && (l = null), l === null && (c |= nt.APPEND_EAGERLY), s && (c |= nt.COMMENT, HN(o_)), r.push(c, i === null ? "" : i); let u = Ku(e, a, s ? 32 : 1, i === null ? "" : i, null); hy(n, u); let d = u.index; return Ge(u, !1), l !== null && t !== l && Jw(l, d), u; }
function cA(e, t, n, o, r, i, s, a) { let c = a.match(fs), u = zI(t, n, o, s, r, c ? null : a, !1).index; c && ps(i, a, u, null, 0, null), e.push({ kind: 0, index: u }); }
function lA(e, t, n) { let o = T(), r = o.index, i = []; if (e.firstCreatePass && e.data[t] === null) {
    for (let s = 0; s < n.length; s += 2) {
        let a = n[s], c = n[s + 1];
        if (c !== "") {
            if (tA.test(c))
                throw new Error(`ICU expressions are not supported in attributes. Message: "${c}".`);
            let l = o.namespace ? `:${o.namespace}:${o.value}` : o.value;
            ps(i, c, r, a, uA(i), Ql(a, l));
        }
    }
    e.data[t] = i;
} }
function ps(e, t, n, o, r, i) { let s = e.length, a = s + 1; e.push(null, null); let c = s + 2, l = t.split(fs), u = 0; for (let d = 0; d < l.length; d++) {
    let f = l[d];
    if (d & 1) {
        let p = r + parseInt(f, 10);
        e.push(-1 - p), u = u | WI(p);
    }
    else
        f !== "" && e.push(f);
} return e.push(n << 2 | (o ? 1 : 0)), o && e.push(o, i), e[s] = u, e[a] = e.length - c, u; }
function uA(e) { let t = 0; for (let n = 0; n < e.length; n++) {
    let o = e[n];
    typeof o == "number" && o < 0 && t++;
} return t; }
function WI(e) { return 1 << Math.min(e, 31); }
function _h(e) { let t, n = "", o = 0, r = !1, i; for (; (t = oA.exec(e)) !== null;)
    r ? t[0] === `${Go}/*${i}${Go}` && (o = t.index, r = !1) : (n += e.substring(o, t.index + t[0].length), i = t[1], r = !0); return n += e.slice(o), n; }
function dA(e, t) { if (my(t))
    return _h(e); {
    let n = e.indexOf(`:${t}${Go}`) + 2 + t.toString().length, o = e.search(new RegExp(`${Go}\\/\\*\\d+:${t}${Go}`));
    return _h(e.substring(n, o));
} }
function GI(e, t, n, o, r, i, s) { let a = 0, c = { type: i.type, currentCaseLViewIndex: wr(t, n, 1, null), anchorIdx: s, cases: [], create: [], remove: [], update: [] }; gA(o, i, s), Kw(t, s, c); let l = i.values, u = []; for (let d = 0; d < l.length; d++) {
    let f = l[d], p = [];
    for (let y = 0; y < f.length; y++) {
        let v = f[y];
        if (typeof v != "string") {
            let D = p.push(v) - 1;
            f[y] = `<!--\uFFFD${D}\uFFFD-->`;
        }
    }
    let h = [];
    u.push(h), a = pA(h, t, c, n, o, r, i.cases[d], f.join(""), p) | a;
} a && mA(o, a, s), e.push({ kind: 3, index: s, cases: u, currentCaseLViewIndex: c.currentCaseLViewIndex }); }
function fA(e) { let t = [], n = [], o = 1, r = 0; e = e.replace(UI, function (s, a, c) { return c === "select" ? o = 0 : o = 1, r = parseInt(a.slice(1), 10), ""; }); let i = ql(e); for (let s = 0; s < i.length;) {
    let a = i[s++].trim();
    o === 1 && (a = a.replace(/\s*(?:=)?(\w+)\s*/, "$1")), a.length && t.push(a);
    let c = ql(i[s++]);
    t.length > n.length && n.push(c);
} return { type: o, mainBinding: r, cases: t, values: n }; }
function ql(e) { if (!e)
    return []; let t = 0, n = [], o = [], r = /[{}]/g; r.lastIndex = 0; let i; for (; i = r.exec(e);) {
    let a = i.index;
    if (i[0] == "}") {
        if (n.pop(), n.length == 0) {
            let c = e.substring(t, a);
            UI.test(c) ? o.push(fA(c)) : o.push(c), t = a + 1;
        }
    }
    else {
        if (n.length == 0) {
            let c = e.substring(t, a);
            o.push(c), t = a + 1;
        }
        n.push("{");
    }
} let s = e.substring(t); return o.push(s), o; }
function pA(e, t, n, o, r, i, s, a, c) { let l = [], u = [], d = []; n.cases.push(s), n.create.push(l), n.remove.push(u), n.update.push(d); let p = lm(Ds()).getInertBodyElement(a), h = yl(p) || p; return h ? qI(e, t, n, o, r, l, u, d, h, i, c, 0) : 0; }
function qI(e, t, n, o, r, i, s, a, c, l, u, d) { let f = 0, p = c.firstChild; for (; p;) {
    let h = wr(t, o, 1, null);
    switch (p.nodeType) {
        case Node.ELEMENT_NODE:
            let y = p, v = y.tagName.toLowerCase();
            if (hl.hasOwnProperty(v)) {
                $c(i, OI, v, l, h), t.data[h] = v;
                let Oe = y.attributes;
                for (let Je = 0; Je < Oe.length; Je++) {
                    let Ot = Oe.item(Je), Br = Ot.name.toLowerCase(), bC = !!Ot.value.match(fs), xf = y.namespaceURI, Of = xf === "http://www.w3.org/2000/svg" ? `:svg:${v}` : xf === "http://www.w3.org/1998/Math/MathML" ? `:math:${v}` : v;
                    if (bC)
                        gl.hasOwnProperty(Br) && ps(a, Ot.value, h, Ot.name, 0, Ql(Br, Of));
                    else if (gl[Br]) {
                        let AC = Ot.value;
                        Ql(Br, Of) ? bh(i, h, Ot.name, "unsafe:blocked") : bh(i, h, Ot.name, AC);
                    }
                }
                let Te = { kind: 1, index: h, children: [] };
                e.push(Te), f = qI(Te.children, t, n, o, r, i, s, a, p, h, u, d + 1) | f, Sh(s, h, d);
            }
            break;
        case Node.TEXT_NODE:
            let D = p.textContent || "", S = D.match(fs);
            $c(i, null, S ? "" : D, l, h), Sh(s, h, d), S && (f = ps(a, D, h, null, 0, null) | f), e.push({ kind: 0, index: h });
            break;
        case Node.COMMENT_NODE:
            let J = nA.exec(p.textContent || "");
            if (J) {
                let Oe = parseInt(J[1], 10), Te = u[Oe];
                $c(i, LI, "", l, h), GI(e, t, o, r, l, Te, h), hA(s, h, d);
            }
            break;
    }
    p = p.nextSibling;
} return f; }
function Sh(e, t, n) { n === 0 && e.push(t); }
function hA(e, t, n) { n === 0 && (e.push(~t), e.push(t)); }
function gA(e, t, n) { e.push(WI(t.mainBinding), 2, -1 - t.mainBinding, n << 2 | 2); }
function mA(e, t, n) { e.push(t, 1, n << 2 | 3); }
function $c(e, t, n, o, r) { t !== null && e.push(t), e.push(n, r, n_(0, o, r)); }
function bh(e, t, n, o) { e.push(t << 1 | 1, n, o); }
function yA(e, t = !0) { if (e[0] != ":")
    return [null, e]; let n = e.indexOf(":", 1); if (n === -1) {
    if (t)
        throw new Error(`Unsupported format "${e}" expecting ":namespace:name"`);
    return [null, e];
} return [e.slice(1, n), e.slice(n + 1)]; }
function vA(e) { let t = e.toLowerCase(), [n, o] = yA(t, !1); return n === Qa || n === Za ? `:${n}:${o}` : o; }
function Ql(e, t) { let n = e.toLowerCase(), o = t ? vA(t) : "*", r = mN(); switch (r[`${o}|${n}`] || r[`*|${n}`] || q.NONE) {
    case q.HTML: return Mu;
    case q.STYLE: return Nu;
    case q.SCRIPT: return _u;
    case q.URL: return ks;
    case q.RESOURCE_URL: return Os;
    case q.ATTRIBUTE_NO_BINDING: return Su;
    default: return null;
} }
var Ah = 0, IA = /\[(�.+?�?)\]/, EA = /\[(�.+?�?)\]|(�\/?\*\d+:\d+�)/g, DA = /({\s*)(VAR_(PLURAL|SELECT)(_\d+)?)(\s*,)/g, CA = /{([A-Z0-9_]+)}/g, TA = /�I18N_EXP_(ICU(_\d+)?)�/g, MA = /\/\*/, NA = /\d+\:(\d+)/;
function wA(e, t = {}) { let n = e; if (IA.test(e)) {
    let o = {}, r = [Ah];
    n = n.replace(EA, (i, s, a) => { let c = s || a, l = o[c] || []; if (l.length || (c.split("|").forEach(y => { let v = y.match(NA), D = v ? parseInt(v[1], 10) : Ah, S = MA.test(y); l.push([D, S, y]); }), o[c] = l), !l.length)
        throw new Error(`i18n postprocess: unmatched placeholder - ${c}`); let u = r[r.length - 1], d = 0; for (let y = 0; y < l.length; y++)
        if (l[y][0] === u) {
            d = y;
            break;
        } let [f, p, h] = l[d]; return p ? r.pop() : u !== f && r.push(f), l.splice(d, 1), h; });
} return Object.keys(t).length && (n = n.replace(DA, (o, r, i, s, a, c) => t.hasOwnProperty(i) ? `${r}${t[i]}${c}` : o), n = n.replace(CA, (o, r) => t.hasOwnProperty(r) ? t[r] : o), n = n.replace(TA, (o, r) => { if (t.hasOwnProperty(r)) {
    let i = t[r];
    if (!i.length)
        throw new Error(`i18n postprocess: unmatched ICU - ${o} with key: ${r}`);
    return i.shift();
} return o; })), n; }
function zd(e, t, n = -1) { let o = N(), r = g(), i = I + e, s = ue(o.consts, t), a = En(); if (o.firstCreatePass && aA(o, a === null ? 0 : a.index, r, i, s, n), o.type === 2) {
    let f = r[K];
    f[b] |= 32;
}
else
    r[b] |= 32; let c = o.data[i], l = a === r[le] ? null : a, u = Bm(o, l, r), d = a && a.type & 8 ? r[a.index] : null; p_(r, i, a, n), Jb(r, c.create, u, d), dc(!0); }
function Wd() { dc(!1); }
function QI(e, t, n) { zd(e, t, n), Wd(); }
function ZI(e, t) { let n = N(), o = ue(n.consts, t); lA(n, e + I, o); }
function Gd(e) { let t = g(); return Zb(U(t, pe(), e)), Gd; }
function YI(e) { Yb(N(), g(), e + I); }
function KI(e, t = {}) { return wA(e, t); }
function qd(e, t, n) { let o = g(), r = N(), i = T(); return Yd(r, o, o[C], i, e, t, n), qd; }
function Qd(e, t) { let n = T(), o = g(), r = N(), i = di(r.data), s = Jm(i, n, o); return Yd(r, o, s, n, e, t), Qd; }
function Zd(e, t, n) { let o = g(), r = N(), i = T(); return (i.type & 3 || n) && rd(i, r, o, n, o[C], e, t, At(i, o, t)), Zd; }
function Yd(e, t, n, o, r, i, s) { let a = !0, c = null; if ((o.type & 3 || s) && (c ??= At(o, t, i), rd(o, e, t, s, n, r, i, c) && (a = !1)), a) {
    let l = o.outputs?.[r], u = o.hostDirectiveOutputs?.[r];
    if (u && u.length)
        for (let d = 0; d < u.length; d += 2) {
            let f = u[d], p = u[d + 1];
            c ??= At(o, t, i), Vn(o, t, f, p, r, c);
        }
    if (l && l.length)
        for (let d of l)
            c ??= At(o, t, i), Vn(o, t, d, r, r, c);
} }
function JI(e = 1) { return dp(e); }
function _A(e, t) { let n = null, o = bN(e); for (let r = 0; r < t.length; r++) {
    let i = t[r];
    if (i === "*") {
        n = r;
        continue;
    }
    if (o === null ? wm(e, i, !0) : kN(o, i))
        return r;
} return n; }
function XI(e) { let t = g()[K][le]; if (!t.projection) {
    let n = e ? e.length : 1, o = t.projection = Eo(n, null), r = o.slice(), i = t.child;
    for (; i !== null;) {
        if (i.type !== 128) {
            let s = e ? _A(i, e) : 0;
            s !== null && (r[s] ? r[s].projectionNext = i : o[s] = i, r[s] = i);
        }
        i = i.next;
    }
} }
function eE(e, t = 0, n, o, r, i) { let s = g(), a = N(), c = o ? e + 1 : null; c !== null && an(s, a, c, o, r, i, null, n); let l = hn(a, I + e, 16, null, n || null); l.projection === null && (l.projection = t), sc(); let d = !s[se] || bo(); s[K][le].projection[l.projection] === null && c !== null ? SA(s, a, c) : d && !eo(l) && rw(a, s, l); }
function SA(e, t, n) { let o = I + n, r = t.data[o], i = e[o], s = or(i, r.tView.ssrId), a = ro(e, r, void 0, { dehydratedView: s }); io(i, a, 0, on(r, s)); }
function Kd(e, t, n, o) { return av(e, t, n, o), Kd; }
function Jd(e, t, n) { return sv(e, t, n), Jd; }
function tE(e) { let t = g(), n = N(), o = fi(); Ao(o + 1); let r = cd(n, o); if (e.dirty && Kf(t) === ((r.metadata.flags & 2) === 2)) {
    if (r.matches === null)
        e.reset([]);
    else {
        let i = lv(t, o);
        e.reset(i, yg), e.notifyOnChanges();
    }
    return !0;
} return !1; }
function nE() { return ad(g(), fi()); }
function Xd(e, t, n, o, r) { return uv(t, av(e, n, o, r)), Xd; }
function ef(e, t, n, o) { return uv(e, sv(t, n, o)), ef; }
function oE(e = 1) { Ao(fi() + e); }
function rE(e) { let t = ac(); return Tt(t, I + e); }
function Si(e, t) { return e << 17 | t << 2; }
function cn(e) { return e >> 17 & 32767; }
function bA(e) { return (e & 2) == 2; }
function AA(e, t) { return e & 131071 | t << 17; }
function Zl(e) { return e | 2; }
function Wn(e) { return (e & 131068) >> 2; }
function Uc(e, t) { return e & -131069 | t << 2; }
function RA(e) { return (e & 1) === 1; }
function Yl(e) { return e | 1; }
function kA(e, t, n, o, r, i) { let s = i ? t.classBindings : t.styleBindings, a = cn(s), c = Wn(s); e[o] = n; let l = !1, u; if (Array.isArray(n)) {
    let d = n;
    u = d[1], (u === null || ti(d, u) > 0) && (l = !0);
}
else
    u = n; if (r)
    if (c !== 0) {
        let f = cn(e[a + 1]);
        e[o + 1] = Si(f, a), f !== 0 && (e[f + 1] = Uc(e[f + 1], o)), e[a + 1] = AA(e[a + 1], o);
    }
    else
        e[o + 1] = Si(a, 0), a !== 0 && (e[a + 1] = Uc(e[a + 1], o)), a = o;
else
    e[o + 1] = Si(c, 0), a === 0 ? a = o : e[c + 1] = Uc(e[c + 1], o), c = o; l && (e[o + 1] = Zl(e[o + 1])), Rh(e, u, o, !0), Rh(e, u, o, !1), xA(t, u, e, o, i), s = Si(a, c), i ? t.classBindings = s : t.styleBindings = s; }
function xA(e, t, n, o, r) { let i = r ? e.residualClasses : e.residualStyles; i != null && typeof t == "string" && ti(i, t) >= 0 && (n[o + 1] = Yl(n[o + 1])); }
function Rh(e, t, n, o) { let r = e[n + 1], i = t === null, s = o ? cn(r) : Wn(r), a = !1; for (; s !== 0 && (a === !1 || i);) {
    let c = e[s], l = e[s + 1];
    OA(c, t) && (a = !0, e[s + 1] = o ? Yl(l) : Zl(l)), s = o ? cn(l) : Wn(l);
} a && (e[n + 1] = o ? Zl(r) : Yl(r)); }
function OA(e, t) { return e === null || t == null || (Array.isArray(e) ? e[1] : e) === t ? !0 : Array.isArray(e) && typeof t == "string" ? ti(e, t) >= 0 : !1; }
var ie = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
function iE(e) { return e.substring(ie.key, ie.keyEnd); }
function LA(e) { return e.substring(ie.value, ie.valueEnd); }
function PA(e) { return cE(e), sE(e, Gn(e, 0, ie.textEnd)); }
function sE(e, t) { let n = ie.textEnd; return n === t ? -1 : (t = ie.keyEnd = HA(e, ie.key = t, n), Gn(e, t, n)); }
function FA(e) { return cE(e), aE(e, Gn(e, 0, ie.textEnd)); }
function aE(e, t) { let n = ie.textEnd, o = ie.key = Gn(e, t, n); return n === o ? -1 : (o = ie.keyEnd = jA(e, o, n), o = kh(e, o, n, 58), o = ie.value = Gn(e, o, n), o = ie.valueEnd = VA(e, o, n), kh(e, o, n, 59)); }
function cE(e) { ie.key = 0, ie.keyEnd = 0, ie.value = 0, ie.valueEnd = 0, ie.textEnd = e.length; }
function Gn(e, t, n) { for (; t < n && e.charCodeAt(t) <= 32;)
    t++; return t; }
function HA(e, t, n) { for (; t < n && e.charCodeAt(t) > 32;)
    t++; return t; }
function jA(e, t, n) { let o; for (; t < n && ((o = e.charCodeAt(t)) === 45 || o === 95 || (o & -33) >= 65 && (o & -33) <= 90 || o >= 48 && o <= 57);)
    t++; return t; }
function kh(e, t, n, o) { return t = Gn(e, t, n), t < n && t++, t; }
function VA(e, t, n) { let o = -1, r = -1, i = -1, s = t, a = s; for (; s < n;) {
    let c = e.charCodeAt(s++);
    if (c === 59)
        return a;
    c === 34 || c === 39 ? a = s = xh(e, c, s, n) : t === s - 4 && i === 85 && r === 82 && o === 76 && c === 40 ? a = s = xh(e, 41, s, n) : c > 32 && (a = s), i = r, r = o, o = c & -33;
} return a; }
function xh(e, t, n, o) { let r = -1, i = n; for (; i < o;) {
    let s = e.charCodeAt(i++);
    if (s == t && r !== 92)
        return i;
    s == 92 && r === 92 ? r = 0 : r = s;
} throw new Error; }
function tf(e, t, n) { return dE(e, t, n, !1), tf; }
function nf(e, t) { return dE(e, t, null, !0), nf; }
function lE(e) { fE(gE, BA, e, !1); }
function BA(e, t) { for (let n = FA(t); n >= 0; n = aE(t, n))
    gE(e, iE(t), LA(t)); }
function uE(e) { fE(QA, $A, e, !0); }
function $A(e, t) { for (let n = PA(t); n >= 0; n = sE(t, n))
    Do(e, iE(t), !0); }
function dE(e, t, n, o) { let r = g(), i = N(), s = Qe(2); if (i.firstUpdatePass && hE(i, e, s, o), t !== L && U(r, s, t)) {
    let a = i.data[ee()];
    mE(i, a, r, r[C], e, r[s + 1] = YA(t, n), o, s);
} }
function fE(e, t, n, o) { let r = N(), i = Qe(2); r.firstUpdatePass && hE(r, null, i, o); let s = g(); if (n !== L && U(s, i, n)) {
    let a = r.data[ee()];
    if (yE(a, o) && !pE(r, i)) {
        let c = o ? a.classesWithoutHost : a.stylesWithoutHost;
        c !== null && (n = qr(c, n || "")), Gl(r, a, s, n, o);
    }
    else
        ZA(r, a, s, s[C], s[i + 1], s[i + 1] = qA(e, t, n), o, i);
} }
function pE(e, t) { return t >= e.expandoStartIndex; }
function hE(e, t, n, o) { let r = e.data; if (r[n + 1] === null) {
    let i = r[ee()], s = pE(e, n);
    yE(i, o) && t === null && !s && (t = !1), t = UA(r, i, t, o), kA(r, i, t, n, s, o);
} }
function UA(e, t, n, o) { let r = di(e), i = o ? t.residualClasses : t.residualStyles; if (r === null)
    (o ? t.classBindings : t.styleBindings) === 0 && (n = zc(null, e, t, n, o), n = dr(n, t.attrs, o), i = null);
else {
    let s = t.directiveStylingLast;
    if (s === -1 || e[s] !== r)
        if (n = zc(r, e, t, n, o), i === null) {
            let c = zA(e, t, o);
            c !== void 0 && Array.isArray(c) && (c = zc(null, e, t, c[1], o), c = dr(c, t.attrs, o), WA(e, t, o, c));
        }
        else
            i = GA(e, t, o);
} return i !== void 0 && (o ? t.residualClasses = i : t.residualStyles = i), n; }
function zA(e, t, n) { let o = n ? t.classBindings : t.styleBindings; if (Wn(o) !== 0)
    return e[cn(o)]; }
function WA(e, t, n, o) { let r = n ? t.classBindings : t.styleBindings; e[cn(r)] = o; }
function GA(e, t, n) { let o, r = t.directiveEnd; for (let i = 1 + t.directiveStylingLast; i < r; i++) {
    let s = e[i].hostAttrs;
    o = dr(o, s, n);
} return dr(o, t.attrs, n); }
function zc(e, t, n, o, r) { let i = null, s = n.directiveEnd, a = n.directiveStylingLast; for (a === -1 ? a = n.directiveStart : a++; a < s && (i = t[a], o = dr(o, i.hostAttrs, r), i !== e);)
    a++; return e !== null && (n.directiveStylingLast = a), o; }
function dr(e, t, n) { let o = n ? 1 : 2, r = -1; if (t !== null)
    for (let i = 0; i < t.length; i++) {
        let s = t[i];
        typeof s == "number" ? r = s : r === o && (Array.isArray(e) || (e = e === void 0 ? [] : ["", e]), Do(e, s, n ? !0 : t[++i]));
    } return e === void 0 ? null : e; }
function qA(e, t, n) { if (n == null || n === "")
    return P; let o = [], r = ut(n); if (Array.isArray(r))
    for (let i = 0; i < r.length; i++)
        e(o, r[i], !0);
else if (r instanceof Set)
    for (let i of r)
        e(o, i, !0);
else if (typeof r == "object")
    for (let i in r)
        r.hasOwnProperty(i) && e(o, i, r[i]);
else
    typeof r == "string" && t(o, r); return o; }
function gE(e, t, n) { Do(e, t, ut(n)); }
function QA(e, t, n) { let o = String(t); o !== "" && !o.includes(" ") && Do(e, o, n); }
function ZA(e, t, n, o, r, i, s, a) { r === L && (r = P); let c = 0, l = 0, u = 0 < r.length ? r[0] : null, d = 0 < i.length ? i[0] : null; for (; u !== null || d !== null;) {
    let f = c < r.length ? r[c + 1] : void 0, p = l < i.length ? i[l + 1] : void 0, h = null, y;
    u === d ? (c += 2, l += 2, f !== p && (h = d, y = p)) : d === null || u !== null && u < d ? (c += 2, h = u) : (l += 2, h = d, y = p), h !== null && mE(e, t, n, o, h, y, s, a), u = c < r.length ? r[c] : null, d = l < i.length ? i[l] : null;
} }
function mE(e, t, n, o, r, i, s, a) { if (!(t.type & 3))
    return; let c = e.data, l = c[a + 1], u = RA(l) ? Oh(c, t, n, r, Wn(l), s) : void 0; if (!hs(u)) {
    hs(i) || bA(l) && (i = Oh(c, null, n, r, a, s));
    let d = Vt(ee(), n);
    sw(o, s, d, r, i);
} }
function Oh(e, t, n, o, r, i) { let s = t === null, a; for (; r > 0;) {
    let c = e[r], l = Array.isArray(c), u = l ? c[1] : c, d = u === null, f = n[r + 1];
    f === L && (f = d ? P : void 0);
    let p = d ? ei(f, o) : u === o ? f : void 0;
    if (l && !hs(p) && (p = ei(c, o)), hs(p) && (a = p, s))
        return a;
    let h = e[r + 1];
    r = s ? cn(h) : Wn(h);
} if (t !== null) {
    let c = i ? t.residualClasses : t.residualStyles;
    c != null && (a = ei(c, o));
} return a; }
function hs(e) { return e !== void 0; }
function YA(e, t) { return e == null || e === "" || (typeof t == "string" ? e = e + t : typeof e == "object" && (e = Gr(ut(e)))), e; }
function yE(e, t) { return (e.flags & (t ? 8 : 16)) !== 0; }
function vE(e, t = "") { let n = g(), o = N(), r = e + I, i = o.firstCreatePass ? hn(o, r, 1, t, null) : o.data[r], s = IE(o, n, i, t); n[r] = s, Ro() && zu(o, n, s, i), Ge(i, !1); }
var IE = (e, t, n, o) => (He(!0), Cu(t[C], o));
function KA(e, t, n, o) { let r = !Rs(t, n); if (He(r), r)
    return Cu(t[C], o); let i = t[se]; return br(i, e, t, n); }
function EE() { IE = KA; }
function DE(e, t) { let n = !1, o = qe(); for (let i = 1; i < t.length; i += 2)
    n = U(e, o++, t[i]) || n; if (uc(o), !n)
    return L; let r = t[0]; for (let i = 1; i < t.length; i += 2)
    r += M(t[i]) + (i + 1 !== t.length ? t[i + 1] : ""); return r; }
function CE(e, t, n, o = "") { return U(e, pe(), n) ? t + M(n) + o : L; }
function TE(e, t, n, o, r, i = "") { let s = qe(), a = rn(e, s, n, r); return Qe(2), a ? t + M(n) + o + M(r) + i : L; }
function ME(e, t, n, o, r, i, s, a = "") { let c = qe(), l = sa(e, c, n, r, s); return Qe(3), l ? t + M(n) + o + M(r) + i + M(s) + a : L; }
function NE(e, t, n, o, r, i, s, a, c, l = "") { let u = qe(), d = ke(e, u, n, r, s, c); return Qe(4), d ? t + M(n) + o + M(r) + i + M(s) + a + M(c) + l : L; }
function wE(e, t, n, o, r, i, s, a, c, l, u, d = "") { let f = qe(), p = ke(e, f, n, r, s, c); return p = U(e, f + 4, u) || p, Qe(5), p ? t + M(n) + o + M(r) + i + M(s) + a + M(c) + l + M(u) + d : L; }
function _E(e, t, n, o, r, i, s, a, c, l, u, d, f, p = "") { let h = qe(), y = ke(e, h, n, r, s, c); return y = rn(e, h + 4, u, f) || y, Qe(6), y ? t + M(n) + o + M(r) + i + M(s) + a + M(c) + l + M(u) + d + M(f) + p : L; }
function SE(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, y = "") { let v = qe(), D = ke(e, v, n, r, s, c); return D = sa(e, v + 4, u, f, h) || D, Qe(7), D ? t + M(n) + o + M(r) + i + M(s) + a + M(c) + l + M(u) + d + M(f) + p + M(h) + y : L; }
function bE(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, y, v, D = "") { let S = qe(), J = ke(e, S, n, r, s, c); return J = ke(e, S + 4, u, f, h, v) || J, Qe(8), J ? t + M(n) + o + M(r) + i + M(s) + a + M(c) + l + M(u) + d + M(f) + p + M(h) + y + M(v) + D : L; }
function of(e) { return Ia("", e), of; }
function Ia(e, t, n) { let o = g(), r = CE(o, e, t, n); return r !== L && ht(o, ee(), r), Ia; }
function rf(e, t, n, o, r) { let i = g(), s = TE(i, e, t, n, o, r); return s !== L && ht(i, ee(), s), rf; }
function sf(e, t, n, o, r, i, s) { let a = g(), c = ME(a, e, t, n, o, r, i, s); return c !== L && ht(a, ee(), c), sf; }
function af(e, t, n, o, r, i, s, a, c) { let l = g(), u = NE(l, e, t, n, o, r, i, s, a, c); return u !== L && ht(l, ee(), u), af; }
function cf(e, t, n, o, r, i, s, a, c, l, u) { let d = g(), f = wE(d, e, t, n, o, r, i, s, a, c, l, u); return f !== L && ht(d, ee(), f), cf; }
function lf(e, t, n, o, r, i, s, a, c, l, u, d, f) { let p = g(), h = _E(p, e, t, n, o, r, i, s, a, c, l, u, d, f); return h !== L && ht(p, ee(), h), lf; }
function uf(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h) { let y = g(), v = SE(y, e, t, n, o, r, i, s, a, c, l, u, d, f, p, h); return v !== L && ht(y, ee(), v), uf; }
function df(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, y, v) { let D = g(), S = bE(D, e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, y, v); return S !== L && ht(D, ee(), S), df; }
function ff(e) { let t = g(), n = DE(t, e); return n !== L && ht(t, ee(), n), ff; }
function ht(e, t, n) { let o = Vt(t, e); mm(e[C], o, n); }
function pf(e, t, n) { Md(t) && (t = t()); let o = g(), r = pe(); if (U(o, r, t)) {
    let i = N(), s = De();
    Gu(s, o, e, t, o[C], n);
} return pf; }
function AE(e, t) { let n = Md(e); return n && e.set(t), n; }
function hf(e, t) { let n = g(), o = N(), r = T(); return Yd(o, n, n[C], r, e, t), hf; }
var RE = {};
function gf(e) { Q("NgLet"); let t = N(), n = g(), o = e + I, r = hn(t, o, 128, null, null); return Ge(r, !1), _o(t, n, o, RE), gf; }
function kE(e) { let t = N(), n = g(), o = ee(); return _o(t, n, o, e), e; }
function xE(e) { let t = ac(), n = Tt(t, I + e); if (n === RE)
    throw new w(314, !1); return n; }
function OE(e, t) { let n = N(), o = g(), r = o[C], i = "data-ng-source-location"; for (let [s, a, c, l] of t) {
    let u = Bt(n, s + I), d = Vt(s + I, o);
    if (!d.hasAttribute(i)) {
        let f = `${e}@o:${a},l:${c},c:${l}`;
        r.setAttribute(d, i, f);
    }
} }
function LE(e) { return U(g(), pe(), e) ? M(e) : L; }
function PE(e, t, n = "") { return CE(g(), e, t, n); }
function FE(e, t, n, o, r = "") { return TE(g(), e, t, n, o, r); }
function HE(e, t, n, o, r, i, s = "") { return ME(g(), e, t, n, o, r, i, s); }
function jE(e, t, n, o, r, i, s, a, c = "") { return NE(g(), e, t, n, o, r, i, s, a, c); }
function VE(e, t, n, o, r, i, s, a, c, l, u = "") { return wE(g(), e, t, n, o, r, i, s, a, c, l, u); }
function BE(e, t, n, o, r, i, s, a, c, l, u, d, f = "") { return _E(g(), e, t, n, o, r, i, s, a, c, l, u, d, f); }
function $E(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h = "") { return SE(g(), e, t, n, o, r, i, s, a, c, l, u, d, f, p, h); }
function UE(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, y, v = "") { return bE(g(), e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, y, v); }
function zE(e) { return DE(g(), e); }
function WE(e, t, n) { let o = de() + e, r = g(); return r[o] === L ? Ve(r, o, t(n, r)) : co(r, o); }
function Lh(e, t, n) { let o = N(); o.firstCreatePass && GE(t, o.data, o.blueprint, be(e), n); }
function GE(e, t, n, o, r) { if (e = z(e), Array.isArray(e))
    for (let i = 0; i < e.length; i++)
        GE(e[i], t, n, o, r);
else {
    let i = N(), s = g(), a = T(), c = ni(e) ? e : z(e.provide), l = qf(e), u = a.providerIndexes & 1048575, d = a.directiveStart, f = a.providerIndexes >> 20;
    if (ni(e) || !e.multi) {
        let p = new Xt(l, r, ao, null), h = Gc(c, t, r ? u : u + f, d);
        h === -1 ? (Jc(Gi(a, s), i, c), Wc(i, e, t.length), t.push(c), a.directiveStart++, a.directiveEnd++, r && (a.providerIndexes += 1048576), n.push(p), s.push(p)) : (n[h] = p, s[h] = p);
    }
    else {
        let p = Gc(c, t, u + f, d), h = Gc(c, t, u, u + f), y = p >= 0 && n[p], v = h >= 0 && n[h];
        if (r && !v || !r && !y) {
            Jc(Gi(a, s), i, c);
            let D = eR(r ? XA : JA, n.length, r, o, l, e);
            !r && v && (n[h].providerFactory = D), Wc(i, e, t.length, 0), t.push(c), a.directiveStart++, a.directiveEnd++, r && (a.providerIndexes += 1048576), n.push(D), s.push(D);
        }
        else {
            let D = qE(n[r ? h : p], l, !r && o);
            Wc(i, e, p > -1 ? p : h, D);
        }
        !r && o && v && n[h].componentProviders++;
    }
} }
function Wc(e, t, n, o) { let r = ni(t), i = Wf(t); if (r || i) {
    let c = (i ? z(t.useClass) : t).prototype.ngOnDestroy;
    if (c) {
        let l = e.destroyHooks || (e.destroyHooks = []);
        if (!r && t.multi) {
            let u = l.indexOf(n);
            u === -1 ? l.push(n, [o, c]) : l[u + 1].push(o, c);
        }
        else
            l.push(n, c);
    }
} }
function qE(e, t, n) { return n && e.componentProviders++, e.multi.push(t) - 1; }
function Gc(e, t, n, o) { for (let r = n; r < o; r++)
    if (t[r] === e)
        return r; return -1; }
function JA(e, t, n, o, r) { return Kl(this.multi, []); }
function XA(e, t, n, o, r) { let i = this.multi, s; if (this.providerFactory) {
    let a = this.providerFactory.componentProviders, c = Qo(o, o[m], this.providerFactory.index, r);
    s = c.slice(0, a), Kl(i, s);
    for (let l = a; l < c.length; l++)
        s.push(c[l]);
}
else
    s = [], Kl(i, s); return s; }
function Kl(e, t) { for (let n = 0; n < e.length; n++) {
    let o = e[n];
    t.push(o());
} return t; }
function eR(e, t, n, o, r, i) { let s = new Xt(e, n, ao, null); return s.multi = [], s.index = t, s.componentProviders = 0, qE(s, r, o && !n), s; }
function QE(e, t) { return n => { n.providersResolver = (o, r) => Lh(o, r ? r(e) : e, !1), t && (n.viewProvidersResolver = (o, r) => Lh(o, r ? r(t) : t, !0)); }; }
function ZE(e) { return t => { e.length < 1 || (t.getExternalStyles = n => e.map(r => r + "?ngcomp" + (n ? "=" + encodeURIComponent(n) : "") + "&e=" + t.encapsulation)); }; }
function YE(e, t, n) { let o = e.\u0275cmp; o.directiveDefs = cs(t, Iv), o.pipeDefs = cs(n, Be); }
function KE(e, t) { return Ke(() => { let n = Kr(e); n.declarations = bi(t.declarations || P), n.imports = bi(t.imports || P), n.exports = bi(t.exports || P), t.bootstrap && (n.bootstrap = bi(t.bootstrap)), jn.registerNgModule(e, t); }); }
function bi(e) { if (typeof e == "function")
    return e; let t = Pe(e); return t.some(Qr) ? () => t.map(z).map(Ph) : t.map(Ph); }
function Ph(e) { return td(e) ? e.ngModule : e; }
function JE(e, t) { let n = de() + e, o = g(); return o[n] === L ? Ve(o, n, t()) : co(o, n); }
function XE(e, t, n) { return cD(g(), de(), e, t, n); }
function eD(e, t, n, o) { return lD(g(), de(), e, t, n, o); }
function tD(e, t, n, o, r) { return uD(g(), de(), e, t, n, o, r); }
function nD(e, t, n, o, r, i, s) { return dD(g(), de(), e, t, n, o, r, i); }
function oD(e, t, n, o, r, i, s) { let a = de() + e, c = g(), l = ke(c, a, n, o, r, i); return U(c, a + 4, s) || l ? Ve(c, a + 5, t(n, o, r, i, s)) : co(c, a + 5); }
function rD(e, t, n, o, r, i, s, a) { let c = de() + e, l = g(), u = ke(l, c, n, o, r, i); return rn(l, c + 4, s, a) || u ? Ve(l, c + 6, t(n, o, r, i, s, a)) : co(l, c + 6); }
function iD(e, t, n, o, r, i, s, a, c) { let l = de() + e, u = g(), d = ke(u, l, n, o, r, i); return sa(u, l + 4, s, a, c) || d ? Ve(u, l + 7, t(n, o, r, i, s, a, c)) : co(u, l + 7); }
function sD(e, t, n, o, r, i, s, a, c, l) { let u = de() + e, d = g(), f = ke(d, u, n, o, r, i); return ke(d, u + 4, s, a, c, l) || f ? Ve(d, u + 8, t(n, o, r, i, s, a, c, l)) : co(d, u + 8); }
function aD(e, t, n) { return fD(g(), de(), e, t, n); }
function Fr(e, t) { let n = e[t]; return n === L ? void 0 : n; }
function cD(e, t, n, o, r, i) { let s = t + n; return U(e, s, r) ? Ve(e, s + 1, i ? o.call(i, r) : o(r)) : Fr(e, s + 1); }
function lD(e, t, n, o, r, i, s) { let a = t + n; return rn(e, a, r, i) ? Ve(e, a + 2, s ? o.call(s, r, i) : o(r, i)) : Fr(e, a + 2); }
function uD(e, t, n, o, r, i, s, a) { let c = t + n; return sa(e, c, r, i, s) ? Ve(e, c + 3, a ? o.call(a, r, i, s) : o(r, i, s)) : Fr(e, c + 3); }
function dD(e, t, n, o, r, i, s, a, c) { let l = t + n; return ke(e, l, r, i, s, a) ? Ve(e, l + 4, c ? o.call(c, r, i, s, a) : o(r, i, s, a)) : Fr(e, l + 4); }
function fD(e, t, n, o, r, i) { let s = t + n, a = !1; for (let c = 0; c < r.length; c++)
    U(e, s++, r[c]) && (a = !0); return a ? Ve(e, s, o.apply(i, r)) : Fr(e, s); }
function pD(e, t) { let n = N(), o, r = e + I; n.firstCreatePass ? (o = tR(t, n.pipeRegistry), n.data[r] = o, o.onDestroy && (n.destroyHooks ??= []).push(r, o.onDestroy)) : o = n.data[r]; let i = o.factory || (o.factory = Xr(o.type, !0)), s, a = Pt(ao); try {
    let c = Wi(!1), l = i();
    return Wi(c), _o(n, g(), r, l), l;
}
finally {
    Pt(a);
} }
function tR(e, t) { if (t)
    for (let n = t.length - 1; n >= 0; n--) {
        let o = t[n];
        if (e === o.name)
            return o;
    } }
function hD(e, t, n) { let o = e + I, r = g(), i = Tt(r, o); return Hr(r, o) ? cD(r, de(), t, i.transform, n, i) : i.transform(n); }
function gD(e, t, n, o) { let r = e + I, i = g(), s = Tt(i, r); return Hr(i, r) ? lD(i, de(), t, s.transform, n, o, s) : s.transform(n, o); }
function mD(e, t, n, o, r) { let i = e + I, s = g(), a = Tt(s, i); return Hr(s, i) ? uD(s, de(), t, a.transform, n, o, r, a) : a.transform(n, o, r); }
function yD(e, t, n, o, r, i) { let s = e + I, a = g(), c = Tt(a, s); return Hr(a, s) ? dD(a, de(), t, c.transform, n, o, r, i, c) : c.transform(n, o, r, i); }
function vD(e, t, n) { let o = e + I, r = g(), i = Tt(r, o); return Hr(r, o) ? fD(r, de(), t, i.transform, n, i) : i.transform.apply(i, n); }
function Hr(e, t) { return e[m].data[t].pure; }
function ID(e, t) { return Js(e, t); }
function ED(e, t) { return () => { try {
    return jn.getComponentDependencies(e, t).dependencies;
}
catch (n) {
    throw console.error(`Computing dependencies in local compilation mode for the component "${e.name}" failed with the exception:`, n), n;
} }; }
function DD(e, t) { let n = W(e); n !== null && (n.debugInfo = t); }
function CD(e, t, n) { let o = `./@ng/component?c=${e}&t=${encodeURIComponent(t)}`; return new URL(o, n).href; }
function TD(e, t, n, o, r = null, i = null) { let s = W(e); t.apply(null, [e, n, ...o]); let { newDef: a, oldDef: c } = nR(s, W(e)); if (e[mt] = a, c.tView) {
    let l = BT().values();
    for (let u of l)
        We(u) && u[G] === null && Vi(r, i, a, c, u);
} }
function nR(e, t) { let n = Y({}, e); return { newDef: Object.assign(e, t, { directiveDefs: n.directiveDefs, pipeDefs: n.pipeDefs, setInput: n.setInput, type: n.type }), oldDef: n }; }
function Vi(e, t, n, o, r) { let i = r[m]; if (i === o.tView) {
    rR(e, t, n, o, r);
    return;
} for (let s = I; s < i.bindingStartIndex; s++) {
    let a = r[s];
    if (X(a)) {
        oe(a[j]) && Vi(e, t, n, o, a[j]);
        for (let c = H; c < a.length; c++)
            Vi(e, t, n, o, a[c]);
    }
    else
        oe(a) && Vi(e, t, n, o, a);
} }
function oR(e, t) { e.componentReplaced?.(t.id); }
function rR(e, t, n, o, r) { let i = r[F], s = r[j], a = r[G], c = r[le], l = r[R].get(B, null), u = () => { if (o.encapsulation === Re.ShadowDom || o.encapsulation === Re.ExperimentalIsolatedShadowDom) {
    let h = s.cloneNode(!1);
    s.replaceWith(h), s = h;
} let d = _m(n), f = Ls(a, d, i, ku(n), s, c, null, null, null, null, null); iR(a, r, f, c.index), _r(r[m], r), nr(r); let p = r[$e].rendererFactory; oR(p, o), f[C] = p.createRenderer(s, n), jm(r[m], r), sR(c), Ys(d, f, i), ry(d, f, d.template, i); }; l === null ? Fh(e, t, u) : l.run(() => Fh(e, t, u)); }
function Fh(e, t, n) {
    try {
        n();
    }
    catch (o) {
        let r = o;
        if (t !== null && r.message) {
            let i = r.message + (r.stack ? `
` + r.stack : "");
            e?.hot?.send?.("angular:invalidate", { id: t, message: i, error: !0 });
        }
        throw o;
    }
}
function iR(e, t, n, o) { for (let r = I; r < e[m].bindingStartIndex; r++) {
    let i = e[r];
    if ((oe(i) || X(i)) && i[ce] === t) {
        i[ce] = n;
        break;
    }
} e[Et] === t && (e[Et] = n), e[Co] === t && (e[Co] = n), n[ce] = t[ce], t[ce] = null, e[o] = n; }
function sR(e) { if (e.projection !== null) {
    for (let t of e.projection)
        ms(t) && (t.projectionNext = null, t.flags &= -3);
    e.projection = null;
} }
var he = { \u0275\u0275animateEnter: Bo, \u0275\u0275animateEnterListener: $o, \u0275\u0275animateLeave: Uo, \u0275\u0275animateLeaveListener: ls, \u0275\u0275attribute: kd, \u0275\u0275defineComponent: vv, \u0275\u0275defineDirective: Ev, \u0275\u0275defineInjectable: V, \u0275\u0275defineInjector: yo, \u0275\u0275defineNgModule: md, \u0275\u0275definePipe: Dv, \u0275\u0275directiveInject: ao, \u0275\u0275getInheritedFactory: pg, \u0275\u0275inject: Le, \u0275\u0275injectAttribute: ys, \u0275\u0275invalidFactory: Hy, \u0275\u0275invalidFactoryDep: Jr, \u0275\u0275templateRefExtractor: ID, \u0275\u0275resetView: rc, \u0275\u0275HostDirectivesFeature: Nv, \u0275\u0275NgOnChangesFeature: Kh, \u0275\u0275ControlFeature: Mv, \u0275\u0275ProvidersFeature: QE, \u0275\u0275InheritDefinitionFeature: yd, \u0275\u0275ExternalStylesFeature: ZE, \u0275\u0275nextContext: JI, \u0275\u0275namespaceHTML: yc, \u0275\u0275namespaceMathML: mc, \u0275\u0275namespaceSVG: gc, \u0275\u0275enableBindings: ec, \u0275\u0275disableBindings: tc, \u0275\u0275elementStart: lr, \u0275\u0275elementEnd: ha, \u0275\u0275element: Od, \u0275\u0275elementContainerStart: ya, \u0275\u0275elementContainerEnd: Lr, \u0275\u0275domElement: Ld, \u0275\u0275domElementStart: ga, \u0275\u0275domElementEnd: ma, \u0275\u0275domElementContainer: jd, \u0275\u0275domElementContainerStart: va, \u0275\u0275domElementContainerEnd: Hd, \u0275\u0275domTemplate: Id, \u0275\u0275domListener: Zd, \u0275\u0275elementContainer: Fd, \u0275\u0275pureFunction0: JE, \u0275\u0275pureFunction1: XE, \u0275\u0275pureFunction2: eD, \u0275\u0275pureFunction3: tD, \u0275\u0275pureFunction4: nD, \u0275\u0275pureFunction5: oD, \u0275\u0275pureFunction6: rD, \u0275\u0275pureFunction7: iD, \u0275\u0275pureFunction8: sD, \u0275\u0275pureFunctionV: aD, \u0275\u0275getCurrentView: kI, \u0275\u0275restoreView: oc, \u0275\u0275listener: qd, \u0275\u0275projection: eE, \u0275\u0275syntheticHostProperty: $d, \u0275\u0275syntheticHostListener: Qd, \u0275\u0275pipeBind1: hD, \u0275\u0275pipeBind2: gD, \u0275\u0275pipeBind3: mD, \u0275\u0275pipeBind4: yD, \u0275\u0275pipeBindV: vD, \u0275\u0275projectionDef: XI, \u0275\u0275domProperty: Bd, \u0275\u0275ariaProperty: Rd, \u0275\u0275property: xd, \u0275\u0275control: qy, \u0275\u0275controlCreate: Wy, \u0275\u0275pipe: pD, \u0275\u0275queryRefresh: tE, \u0275\u0275queryAdvance: oE, \u0275\u0275viewQuery: Jd, \u0275\u0275viewQuerySignal: ef, \u0275\u0275loadQuery: nE, \u0275\u0275contentQuery: Kd, \u0275\u0275contentQuerySignal: Xd, \u0275\u0275reference: rE, \u0275\u0275classMap: uE, \u0275\u0275styleMap: lE, \u0275\u0275styleProp: tf, \u0275\u0275classProp: nf, \u0275\u0275advance: Sm, \u0275\u0275template: vd, \u0275\u0275conditional: NI, \u0275\u0275conditionalCreate: MI, \u0275\u0275conditionalBranchCreate: pa, \u0275\u0275defer: eI, \u0275\u0275deferWhen: tI, \u0275\u0275deferOnIdle: iI, \u0275\u0275deferOnImmediate: cI, \u0275\u0275deferOnTimer: dI, \u0275\u0275deferOnHover: hI, \u0275\u0275deferOnInteraction: yI, \u0275\u0275deferOnViewport: EI, \u0275\u0275deferPrefetchWhen: nI, \u0275\u0275deferPrefetchOnIdle: sI, \u0275\u0275deferPrefetchOnImmediate: lI, \u0275\u0275deferPrefetchOnTimer: fI, \u0275\u0275deferPrefetchOnHover: gI, \u0275\u0275deferPrefetchOnInteraction: vI, \u0275\u0275deferPrefetchOnViewport: DI, \u0275\u0275deferHydrateWhen: oI, \u0275\u0275deferHydrateNever: rI, \u0275\u0275deferHydrateOnIdle: aI, \u0275\u0275deferHydrateOnImmediate: uI, \u0275\u0275deferHydrateOnTimer: pI, \u0275\u0275deferHydrateOnHover: mI, \u0275\u0275deferHydrateOnInteraction: II, \u0275\u0275deferHydrateOnViewport: CI, \u0275\u0275deferEnableTimerScheduling: Vv, \u0275\u0275repeater: bI, \u0275\u0275repeaterCreate: SI, \u0275\u0275repeaterTrackByIndex: wI, \u0275\u0275repeaterTrackByIdentity: _I, \u0275\u0275componentInstance: TI, \u0275\u0275text: vE, \u0275\u0275textInterpolate: of, \u0275\u0275textInterpolate1: Ia, \u0275\u0275textInterpolate2: rf, \u0275\u0275textInterpolate3: sf, \u0275\u0275textInterpolate4: af, \u0275\u0275textInterpolate5: cf, \u0275\u0275textInterpolate6: lf, \u0275\u0275textInterpolate7: uf, \u0275\u0275textInterpolate8: df, \u0275\u0275textInterpolateV: ff, \u0275\u0275i18n: QI, \u0275\u0275i18nAttributes: ZI, \u0275\u0275i18nExp: Gd, \u0275\u0275i18nStart: zd, \u0275\u0275i18nEnd: Wd, \u0275\u0275i18nApply: YI, \u0275\u0275i18nPostprocess: KI, \u0275\u0275resolveWindow: Tm, \u0275\u0275resolveDocument: Mm, \u0275\u0275resolveBody: bu, \u0275\u0275setComponentScope: YE, \u0275\u0275setNgModuleScope: KE, \u0275\u0275registerNgModuleType: pd, \u0275\u0275getComponentDepsFactory: ED, \u0275setClassDebugInfo: DD, \u0275\u0275declareLet: gf, \u0275\u0275storeLet: kE, \u0275\u0275arrowFunction: WE, \u0275\u0275readContextLet: xE, \u0275\u0275attachSourceLocations: OE, \u0275\u0275interpolate: LE, \u0275\u0275interpolate1: PE, \u0275\u0275interpolate2: FE, \u0275\u0275interpolate3: HE, \u0275\u0275interpolate4: jE, \u0275\u0275interpolate5: VE, \u0275\u0275interpolate6: BE, \u0275\u0275interpolate7: $E, \u0275\u0275interpolate8: UE, \u0275\u0275interpolateV: zE, \u0275\u0275sanitizeHtml: Mu, \u0275\u0275sanitizeStyle: Nu, \u0275\u0275sanitizeResourceUrl: Os, \u0275\u0275sanitizeScript: _u, \u0275\u0275validateAttribute: Su, \u0275\u0275sanitizeUrl: wu, \u0275\u0275sanitizeUrlOrResourceUrl: Cm, \u0275\u0275trustConstantHtml: Em, \u0275\u0275trustConstantResourceUrl: Dm, forwardRef: La, resolveForwardRef: z, \u0275\u0275twoWayProperty: pf, \u0275\u0275twoWayBindingSet: AE, \u0275\u0275twoWayListener: hf, \u0275\u0275replaceMetadata: TD, \u0275\u0275getReplaceMetadataURL: CD }, bn = null;
function MD(e) { bn !== null && (e.defaultEncapsulation !== bn.defaultEncapsulation || e.preserveWhitespaces !== bn.preserveWhitespaces) || (bn = e); }
function aR() { return bn; }
function cR() { bn = null; }
var qo = [];
function lR(e, t) { qo.push({ moduleType: e, ngModule: t }); }
var qc = !1;
function ND() { if (!qc) {
    qc = !0;
    try {
        for (let e = qo.length - 1; e >= 0; e--) {
            let { moduleType: t, ngModule: n } = qo[e];
            n.declarations && n.declarations.every(wD) && (qo.splice(e, 1), hR(t, n));
        }
    }
    finally {
        qc = !1;
    }
} }
function wD(e) { return Array.isArray(e) ? e.every(wD) : !!z(e); }
function _D(e, t = {}) { SD(e, t), t.id !== void 0 && pd(e, t.id), lR(e, t); }
function SD(e, t, n = !1) { let o = Pe(t.declarations || P), r = null; Object.defineProperty(e, Fa, { configurable: !0, get: () => (r === null && (r = ne({ usage: 0, kind: "NgModule", type: e }).compileNgModule(he, `ng:///${e.name}/\u0275mod.js`, { type: e, bootstrap: Pe(t.bootstrap || P).map(z), declarations: o.map(z), imports: Pe(t.imports || P).map(z).map(Hh), exports: Pe(t.exports || P).map(z).map(Hh), schemas: t.schemas ? Pe(t.schemas) : null, id: t.id || null }), r.schemas || (r.schemas = [])), r) }); let i = null; Object.defineProperty(e, yt, { get: () => { if (i === null) {
        let a = ne({ usage: 0, kind: "NgModule", type: e });
        i = a.compileFactory(he, `ng:///${e.name}/\u0275fac.js`, { name: e.name, type: e, deps: vs(e), target: a.FactoryTarget.NgModule, typeArgumentCount: 0 });
    } return i; }, configurable: !1 }); let s = null; Object.defineProperty(e, Pa, { get: () => { if (s === null) {
        let a = { name: e.name, type: e, providers: t.providers || P, imports: [(t.imports || P).map(z), (t.exports || P).map(z)] };
        s = ne({ usage: 0, kind: "NgModule", type: e }).compileInjector(he, `ng:///${e.name}/\u0275inj.js`, a);
    } return s; }, configurable: !1 }); }
function uR(e, t) { let n = `Unexpected "${Ne(e)}" found in the "declarations" array of the`, o = `"${Ne(e)}" is marked as standalone and can't be declared in any NgModule - did you intend to import it instead (by adding it to the "imports" array)?`; return `${n} ${t}, ${o}`; }
var dR = new WeakMap, fR = new WeakMap;
function pR() { dR = new WeakMap, fR = new WeakMap, qo.length = 0, AS.clear(); }
function hR(e, t) { let n = Pe(t.declarations || P), o = yf(e); n.forEach(r => { if (r = z(r), r.hasOwnProperty(mt)) {
    let s = W(r);
    mf(s, o);
}
else
    !r.hasOwnProperty(gn) && !r.hasOwnProperty(Yr) && (r.ngSelectorScope = e); }); }
function mf(e, t) { e.directiveDefs = () => Array.from(t.compilation.directives).map(n => n.hasOwnProperty(mt) ? W(n) : Me(n)).filter(n => !!n), e.pipeDefs = () => Array.from(t.compilation.pipes).map(n => Be(n)), e.schemas = t.schemas, e.tView = null; }
function yf(e) { if (Qt(e)) {
    let t = jn.getNgModuleScope(e), n = Kr(e);
    return Y({ schemas: n.schemas || null }, t);
}
else if (vo(e)) {
    if ((W(e) || Me(e)) !== null)
        return { schemas: null, compilation: { directives: new Set, pipes: new Set }, exported: { directives: new Set([e]), pipes: new Set } };
    if (Be(e) !== null)
        return { schemas: null, compilation: { directives: new Set, pipes: new Set }, exported: { directives: new Set, pipes: new Set([e]) } };
} throw new Error(`${e.name} does not have a module def (\u0275mod property)`); }
function Hh(e) { return td(e) ? e.ngModule : e; }
var Qc = 0;
function bD(e, t) {
    let n = null;
    IS(e, t), RD(e, t), Object.defineProperty(e, mt, { get: () => {
            if (n === null) {
                let o = ne({ usage: 0, kind: "component", type: e });
                if (fv(t)) {
                    let u = [`Component '${e.name}' is not resolved:`];
                    throw t.templateUrl && u.push(` - templateUrl: ${t.templateUrl}`), t.styleUrls && t.styleUrls.length && u.push(` - styleUrls: ${JSON.stringify(t.styleUrls)}`), t.styleUrl && u.push(` - styleUrl: ${t.styleUrl}`), u.push("Did you run and wait for 'resolveComponentResources()'?"), new Error(u.join(`
`));
                }
                let r = aR(), i = t.preserveWhitespaces;
                i === void 0 && (r !== null && r.preserveWhitespaces !== void 0 ? i = r.preserveWhitespaces : i = !1);
                let s = t.encapsulation;
                s === void 0 && (r !== null && r.defaultEncapsulation !== void 0 ? s = r.defaultEncapsulation : s = Re.Emulated);
                let a = t.templateUrl || `ng:///${e.name}/template.html`, c = kD(e, t), l = Xe(Y({}, c), { typeSourceSpan: o.createParseSourceSpan("Component", e.name, a), template: t.template || "", preserveWhitespaces: i, styles: typeof t.styles == "string" ? [t.styles] : t.styles || P, animations: t.animations, declarations: [], changeDetection: t.changeDetection, encapsulation: s, viewProviders: t.viewProviders || null, hasDirectiveDependencies: !c.isStandalone || t.imports != null && t.imports.length > 0 });
                Qc++;
                try {
                    if (l.usesInheritance && xD(e), n = o.compileComponent(he, a, l), l.isStandalone) {
                        let u = Pe(t.imports || P), { directiveDefs: d, pipeDefs: f } = gR(e, u);
                        n.directiveDefs = d, n.pipeDefs = f, n.dependencies = () => u.map(z);
                    }
                }
                finally {
                    Qc--;
                }
                if (Qc === 0 && ND(), mR(e)) {
                    let u = yf(e.ngSelectorScope);
                    mf(n, u);
                }
                if (t.schemas)
                    if (l.isStandalone)
                        n.schemas = t.schemas;
                    else
                        throw new Error(`The 'schemas' was specified for the ${Ne(e)} but is only valid on a component that is standalone.`);
                else
                    l.isStandalone && (n.schemas = []);
            }
            return n;
        }, set: o => { n = o; }, configurable: !1 });
}
function gR(e, t) { return { directiveDefs: () => jo(e) ? [...jn.getStandaloneComponentScope(e, t).compilation.directives].map(i => W(i) || Me(i)).filter(i => i !== null) : [], pipeDefs: () => jo(e) ? [...jn.getStandaloneComponentScope(e, t).compilation.pipes].map(i => Be(i)).filter(i => i !== null) : [] }; }
function mR(e) { return e.ngSelectorScope !== void 0; }
function vf(e, t) { let n = null; RD(e, t || {}), Object.defineProperty(e, gn, { get: () => { if (n === null) {
        let o = AD(e, t || {});
        n = ne({ usage: 0, kind: "directive", type: e }).compileDirective(he, o.sourceMapUrl, o.metadata);
    } return n; }, configurable: !1 }); }
function AD(e, t) { let n = e && e.name, o = `ng:///${n}/\u0275dir.js`, r = ne({ usage: 0, kind: "directive", type: e }), i = kD(e, t); return i.typeSourceSpan = r.createParseSourceSpan("Directive", n, o), i.usesInheritance && xD(e), { metadata: i, sourceMapUrl: o }; }
function RD(e, t) { let n = null; Object.defineProperty(e, yt, { get: () => { if (n === null) {
        let o = AD(e, t), r = ne({ usage: 0, kind: "directive", type: e });
        n = r.compileFactory(he, `ng:///${e.name}/\u0275fac.js`, { name: o.metadata.name, type: o.metadata.type, typeArgumentCount: 0, deps: vs(e), target: r.FactoryTarget.Directive });
    } return n; }, configurable: !1 }); }
function yR(e) { return Object.getPrototypeOf(e.prototype) === Object.prototype; }
function kD(e, t) { let n = nu(), o = n.ownPropMetadata(e); return { name: e.name, type: e, selector: t.selector !== void 0 ? t.selector : null, host: t.host || we, propMetadata: o, inputs: t.inputs || P, outputs: t.outputs || P, queries: jh(e, o, OD), lifecycle: { usesOnChanges: n.hasLifecycleHook(e, "ngOnChanges") }, controlCreate: null, typeSourceSpan: null, usesInheritance: !yR(e), exportAs: ER(t.exportAs), providers: t.providers || null, viewQueries: jh(e, o, LD), isStandalone: t.standalone === void 0 ? !0 : !!t.standalone, isSignal: !!t.signals, hostDirectives: t.hostDirectives?.map(r => typeof r == "function" ? { directive: r } : r) || null }; }
function xD(e) { let t = Object.prototype, n = Object.getPrototypeOf(e.prototype).constructor; for (; n && n !== t;)
    !Me(n) && !W(n) && CR(n) && vf(n, null), n = Object.getPrototypeOf(n); }
function vR(e) { return typeof e == "string" ? FD(e) : z(e); }
function IR(e, t) { return { propertyName: e, predicate: vR(t.selector), descendants: t.descendants, first: t.first, read: t.read ? t.read : null, static: !!t.static, emitDistinctChangesOnly: !!t.emitDistinctChangesOnly, isSignal: !!t.isSignal }; }
function jh(e, t, n) { let o = [], r = []; for (let i in t)
    if (t.hasOwnProperty(i)) {
        let s = t[i];
        s.forEach(a => { if (n(a)) {
            if (!a.selector)
                throw new Error(`Can't construct a query for the property "${i}" of "${Ne(e)}" since the query selector wasn't defined.`);
            if (s.some(PD))
                throw new Error("Cannot combine @Input decorators with query decorators");
            let c = IR(i, a);
            c.isSignal ? o.push(c) : r.push(c);
        } });
    } return [...o, ...r]; }
function ER(e) { return e === void 0 ? null : FD(e); }
function OD(e) { let t = e.ngMetadataName; return t === "ContentChild" || t === "ContentChildren"; }
function LD(e) { let t = e.ngMetadataName; return t === "ViewChild" || t === "ViewChildren"; }
function PD(e) { return e.ngMetadataName === "Input"; }
function FD(e) { return e.split(",").map(t => t.trim()); }
var DR = ["ngOnChanges", "ngOnInit", "ngOnDestroy", "ngDoCheck", "ngAfterViewInit", "ngAfterViewChecked", "ngAfterContentInit", "ngAfterContentChecked"];
function CR(e) { let t = nu(); if (DR.some(o => t.hasLifecycleHook(e, o)))
    return !0; let n = t.propMetadata(e); for (let o in n) {
    let r = n[o];
    for (let i = 0; i < r.length; i++) {
        let s = r[i], a = s.ngMetadataName;
        if (PD(s) || OD(s) || LD(s) || a === "Output" || a === "HostBinding" || a === "HostListener")
            return !0;
    }
} return !1; }
function HD(e, t) { let n = null, o = null; Object.defineProperty(e, yt, { get: () => { if (o === null) {
        let r = Vh(e, t), i = ne({ usage: 0, kind: "pipe", type: r.type });
        o = i.compileFactory(he, `ng:///${r.name}/\u0275fac.js`, { name: r.name, type: r.type, typeArgumentCount: 0, deps: vs(e), target: i.FactoryTarget.Pipe });
    } return o; }, configurable: !1 }), Object.defineProperty(e, Yr, { get: () => { if (n === null) {
        let r = Vh(e, t);
        n = ne({ usage: 0, kind: "pipe", type: r.type }).compilePipe(he, `ng:///${r.name}/\u0275pipe.js`, r);
    } return n; }, configurable: !1 }); }
function Vh(e, t) { return { type: e, name: e.name, pipeName: t.name, pure: t.pure !== void 0 ? t.pure : !0, isStandalone: t.standalone === void 0 ? !0 : !!t.standalone }; }
var jD = hr("Directive", (e = {}) => e, void 0, void 0, (e, t) => vf(e, t)), TR = hr("Component", (e = {}) => Y({ changeDetection: Is.Eager }, e), jD, void 0, (e, t) => bD(e, t)), MR = hr("Pipe", e => Y({ pure: !0 }, e), void 0, void 0, (e, t) => HD(e, t)), NR = at("Input", e => e ? typeof e == "string" ? { alias: e } : e : {}), wR = at("Output", e => ({ alias: e })), _R = at("HostBinding", e => ({ hostPropertyName: e })), SR = at("HostListener", (e, t) => ({ eventName: e, args: t })), bR = hr("NgModule", e => e, void 0, void 0, (e, t) => _D(e, t)), gs = class {
    ngModuleFactory;
    componentFactories;
    constructor(t, n) { this.ngModuleFactory = t, this.componentFactories = n; }
}, AR = (() => { class e {
    compileModuleSync(n) { return new Un(n); }
    compileModuleAsync(n) { return Promise.resolve(this.compileModuleSync(n)); }
    compileModuleAndAllComponentsSync(n) { let o = this.compileModuleSync(n), r = mn(n), i = _n(r.declarations).reduce((s, a) => { let c = W(a); return c && s.push(new kt(c)), s; }, []); return new gs(o, i); }
    compileModuleAndAllComponentsAsync(n) { return Promise.resolve(this.compileModuleAndAllComponentsSync(n)); }
    clearCache() { }
    clearCacheFor(n) { }
    getModuleId(n) { }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = V({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), VD = new _(""), Jl = class {
};
var BD = (() => { class e {
    applicationErrorHandler = E(Wt);
    appRef = E(xe);
    taskService = E(zt);
    ngZone = E(B);
    zonelessEnabled = E(Dn);
    tracing = E(pn, { optional: !0 });
    zoneIsDefined = typeof Zone < "u" && !!Zone.root.run;
    schedulerTickApplyArgs = [{ data: { __scheduler_tick__: !0 } }];
    subscriptions = new oT;
    angularZoneId = this.zoneIsDefined ? this.ngZone._inner?.get(vc) : null;
    scheduleInRootZone = !this.zonelessEnabled && this.zoneIsDefined && (E(yi, { optional: !0 }) ?? !1);
    cancelScheduledCallback = null;
    useMicrotaskScheduler = !1;
    runningTick = !1;
    pendingRenderTaskId = null;
    constructor() { this.subscriptions.add(this.appRef.afterTick.subscribe(() => { let n = this.taskService.add(); if (!this.runningTick && (this.cleanup(), !this.zonelessEnabled || this.appRef.includeAllTestViews)) {
        this.taskService.remove(n);
        return;
    } this.switchToMicrotaskScheduler(), this.taskService.remove(n); })), this.subscriptions.add(this.ngZone.onUnstable.subscribe(() => { this.runningTick || this.cleanup(); })); }
    switchToMicrotaskScheduler() { this.ngZone.runOutsideAngular(() => { let n = this.taskService.add(); this.useMicrotaskScheduler = !0, queueMicrotask(() => { this.useMicrotaskScheduler = !1, this.taskService.remove(n); }); }); }
    notify(n) { if (!this.zonelessEnabled && n === 5)
        return; switch (n) {
        case 0: {
            this.appRef.dirtyFlags |= 2;
            break;
        }
        case 3:
        case 2:
        case 4:
        case 5:
        case 1: {
            this.appRef.dirtyFlags |= 4;
            break;
        }
        case 6: {
            this.appRef.dirtyFlags |= 2;
            break;
        }
        case 12: {
            this.appRef.dirtyFlags |= 16;
            break;
        }
        case 13: {
            this.appRef.dirtyFlags |= 2;
            break;
        }
        case 11: break;
        default: this.appRef.dirtyFlags |= 8;
    } if (this.appRef.tracingSnapshot = this.tracing?.snapshot(this.appRef.tracingSnapshot) ?? null, !this.shouldScheduleTick())
        return; let o = this.useMicrotaskScheduler ? mp : gp; this.pendingRenderTaskId = this.taskService.add(), this.scheduleInRootZone ? this.cancelScheduledCallback = Zone.root.run(() => o(() => this.tick())) : this.cancelScheduledCallback = this.ngZone.runOutsideAngular(() => o(() => this.tick())); }
    shouldScheduleTick() { return !(this.appRef.destroyed || this.pendingRenderTaskId !== null || this.runningTick || this.appRef._runningTick || !this.zonelessEnabled && this.zoneIsDefined && Zone.current.get(vc + this.angularZoneId)); }
    tick() { if (this.runningTick || this.appRef.destroyed)
        return; if (this.appRef.dirtyFlags === 0) {
        this.cleanup();
        return;
    } !this.zonelessEnabled && this.appRef.dirtyFlags & 7 && (this.appRef.dirtyFlags |= 1); let n = this.taskService.add(); try {
        this.ngZone.run(() => { this.runningTick = !0, this.appRef._tick(); }, void 0, this.schedulerTickApplyArgs);
    }
    catch (o) {
        this.applicationErrorHandler(o);
    }
    finally {
        this.taskService.remove(n), this.cleanup();
    } }
    ngOnDestroy() { this.subscriptions.unsubscribe(), this.cleanup(); }
    cleanup() { if (this.runningTick = !1, this.cancelScheduledCallback?.(), this.cancelScheduledCallback = null, this.pendingRenderTaskId !== null) {
        let n = this.pendingRenderTaskId;
        this.pendingRenderTaskId = null, this.taskService.remove(n);
    } }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = V({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
function RR() { return Q("NgZoneless"), tt([...Ea(), []]); }
function Ea() { return [{ provide: Mt, useExisting: BD }, { provide: B, useClass: Ic }, { provide: Dn, useValue: !0 }]; }
function kR() { return typeof $localize < "u" && $localize.locale || Pr; }
var If = new _("", { factory: () => E(If, { optional: !0, skipSelf: !0 }) || kR() }), xR = new _("", { factory: () => qb }), OR = new _(""), LR = new _(""), $D = (function (e) { return e[e.Error = 0] = "Error", e[e.Warning = 1] = "Warning", e[e.Ignore = 2] = "Ignore", e; })($D || {}), Xl = class {
    name;
    callback;
    constructor(t, n) { this.name = t, this.callback = n; }
};
function PR(e) { return e.map(t => t.nativeElement); }
var fr = class {
    nativeNode;
    constructor(t) { this.nativeNode = t; }
    get parent() { let t = this.nativeNode.parentNode; return t ? new ln(t) : null; }
    get injector() { return KT(this.nativeNode); }
    get componentInstance() { let t = this.nativeNode; return t && (Hp(t) || YT(t)); }
    get context() { return Hp(this.nativeNode) || ZT(this.nativeNode); }
    get listeners() { return nM(this.nativeNode).filter(t => t.type === "dom"); }
    get references() { return eM(this.nativeNode); }
    get providerTokens() { return JT(this.nativeNode); }
}, ln = class extends fr {
    constructor(t) { super(t); }
    get nativeElement() { return this.nativeNode.nodeType == Node.ELEMENT_NODE ? this.nativeNode : null; }
    get name() { let t = ve(this.nativeNode), n = t ? t.lView : null; return n !== null ? n[m].data[t.nodeIndex].value : this.nativeNode.nodeName; }
    get properties() { let t = ve(this.nativeNode), n = t ? t.lView : null; if (n === null)
        return {}; let o = n[m].data, r = o[t.nodeIndex], i = {}; return FR(this.nativeElement, i), jR(i, r, n, o), i; }
    get attributes() { let t = {}, n = this.nativeElement; if (!n)
        return t; let o = ve(n), r = o ? o.lView : null; if (r === null)
        return {}; let i = r[m].data[o.nodeIndex].attrs, s = []; if (i) {
        let a = 0;
        for (; a < i.length;) {
            let c = i[a];
            if (typeof c != "string")
                break;
            let l = i[a + 1];
            t[c] = l, s.push(c.toLowerCase()), a += 2;
        }
    } for (let a of n.attributes)
        s.includes(a.name) || (t[a.name] = a.value); return t; }
    get styles() { return this.nativeElement?.style ?? {}; }
    get classes() { let t = {}, o = this.nativeElement.className; return (typeof o != "string" ? o.baseVal.split(" ") : o.split(" ")).forEach(i => t[i] = !0), t; }
    get childNodes() { let t = this.nativeNode.childNodes, n = []; for (let o = 0; o < t.length; o++) {
        let r = t[o];
        n.push(pr(r));
    } return n; }
    get children() { let t = this.nativeElement; if (!t)
        return []; let n = t.children, o = []; for (let r = 0; r < n.length; r++) {
        let i = n[r];
        o.push(pr(i));
    } return o; }
    query(t) { return this.queryAll(t)[0] || null; }
    queryAll(t) { let n = []; return Bh(this, t, n, !0), n; }
    queryAllNodes(t) { let n = []; return Bh(this, t, n, !1), n; }
    triggerEventHandler(t, n) { let o = this.nativeNode, r = []; this.listeners.forEach(i => { if (i.name === t) {
        let s = i.callback;
        s.call(o, n), r.push(s);
    } }), typeof o.eventListeners == "function" && o.eventListeners(t).forEach(i => { if (i.toString().indexOf("__ngUnwrap__") !== -1) {
        let s = i("__ngUnwrap__");
        return r.indexOf(s) === -1 && s.call(o, n);
    } }); }
};
function FR(e, t) { if (e) {
    let n = Object.getPrototypeOf(e), o = Node.prototype;
    for (; n !== null && n !== o;) {
        let r = Object.getOwnPropertyDescriptors(n);
        for (let i in r)
            if (!i.startsWith("__") && !i.startsWith("on")) {
                let s = e[i];
                HR(s) && (t[i] = s);
            }
        n = Object.getPrototypeOf(n);
    }
} }
function HR(e) { return typeof e == "string" || typeof e == "boolean" || typeof e == "number" || e === null; }
function Bh(e, t, n, o) { let r = ve(e.nativeNode), i = r ? r.lView : null; if (i !== null) {
    let s = i[m].data[r.nodeIndex];
    Zt(s, i, t, n, o, e.nativeNode);
}
else
    Ef(e.nativeNode, t, n, o); }
function Zt(e, t, n, o, r, i) { let s = Yf(e, t); if (e.type & 11) {
    if (Zc(s, n, o, r, i), ge(e)) {
        let c = fe(e.index, t);
        c && c[m].firstChild && Zt(c[m].firstChild, c, n, o, r, i);
    }
    else
        e.child && Zt(e.child, t, n, o, r, i), s && Ef(s, n, o, r);
    let a = t[e.index];
    X(a) && $h(a, n, o, r, i);
}
else if (e.type & 4) {
    let a = t[e.index];
    Zc(a[Fe], n, o, r, i), $h(a, n, o, r, i);
}
else if (e.type & 16) {
    let a = t[K], l = a[le].projection[e.projection];
    if (Array.isArray(l))
        for (let u of l)
            Zc(u, n, o, r, i);
    else if (l) {
        let u = a[G], d = u[m].data[l.index];
        Zt(d, u, n, o, r, i);
    }
}
else
    e.child && Zt(e.child, t, n, o, r, i); if (i !== s) {
    let a = e.flags & 2 ? e.projectionNext : e.next;
    a && Zt(a, t, n, o, r, i);
} }
function $h(e, t, n, o, r) { for (let i = H; i < e.length; i++) {
    let s = e[i], a = s[m].firstChild;
    a && Zt(a, s, t, n, o, r);
} }
function Zc(e, t, n, o, r) { if (r !== e) {
    let i = pr(e);
    if (!i)
        return;
    (o && i instanceof ln && t(i) && n.indexOf(i) === -1 || !o && t(i) && n.indexOf(i) === -1) && n.push(i);
} }
function Ef(e, t, n, o) { let r = e.childNodes, i = r.length; for (let s = 0; s < i; s++) {
    let a = r[s], c = pr(a);
    c && ((o && c instanceof ln && t(c) && n.indexOf(c) === -1 || !o && t(c) && n.indexOf(c) === -1) && n.push(c), Ef(a, t, n, o));
} }
function jR(e, t, n, o) { let r = t.propertyBindings; if (r !== null)
    for (let i = 0; i < r.length; i++) {
        let s = r[i], c = o[s].split(TN), l = c[0];
        if (c.length > 1) {
            let u = c[1];
            for (let d = 1; d < c.length - 1; d++)
                u += M(n[s + d - 1]) + c[d + 1];
            e[l] = u;
        }
        else
            e[l] = n[s];
    } }
var Yc = "__ng_debug__";
function pr(e) { return e instanceof Node ? (e.hasOwnProperty(Yc) || (e[Yc] = e.nodeType == Node.ELEMENT_NODE ? new ln(e) : new fr(e)), e[Yc]) : null; }
import { Subscription as VR } from "rxjs";
import "@angular/core/primitives/signals";
import "rxjs/operators";
import "@angular/core/primitives/di";
typeof globalThis.ngServerMode > "u" && (globalThis.ngServerMode = typeof window > "u");
var _a = Symbol("InputSignalNode#UNSET"), lC = Xe(Y({}, ka), { transformFn: void 0, applyValueToInputSignal(e, t) { Ra(e, t); } }), DO = Symbol();
function uC(e, t) { let n = Object.create(lC); n.value = e, n.transformFn = t?.transform; function o() { if ($r(n), n.value === _a) {
    let r = null;
    throw new w(-950, r);
} return n.value; } return o[et] = n, o; }
var fo = (function (e) { return e[e.Directive = 0] = "Directive", e[e.Component = 1] = "Component", e[e.Injectable = 2] = "Injectable", e[e.Pipe = 3] = "Pipe", e[e.NgModule = 4] = "NgModule", e; })(fo || {});
var BR = (function (e) { return e.Angular = "angular", e.ACX = "acx", e.Wiz = "wiz", e; })(BR || {}), UD = class {
    attributeName;
    constructor(t) { this.attributeName = t; }
    __NG_ELEMENT_ID__ = () => ys(this.attributeName);
    toString() { return `HostAttributeToken ${this.attributeName}`; }
}, CO = (() => { let e = new _(""); return e.__NG_ELEMENT_ID__ = t => { let n = T(); if (n === null)
    throw new w(-204, !1); if (n.type & 2)
    return n.value; if (t & 8)
    return null; throw new w(-204, !1); }, e; })();
function TO(e) { return new Nc; }
function zD(e, t) { return uC(e, t); }
function $R(e) { return uC(_a, e); }
var MO = (zD.required = $R, zD);
function WD(e, t) { return ud(t); }
function UR(e, t) { return dd(t); }
var NO = (WD.required = UR, WD);
function wO(e, t) { return fd(t); }
function GD(e, t) { return ud(t); }
function zR(e, t) { return dd(t); }
var _O = (GD.required = zR, GD);
function SO(e, t) { return fd(t); }
function dC(e, t) { let n = Object.create(lC), o = new Nc; n.value = e; function r() { return $r(n), qD(n.value), n.value; } return r[et] = n, r.asReadonly = yp.bind(r), r.set = i => { n.equal(n.value, i) || (Ra(n, i), o.emit(i)); }, r.update = i => { qD(n.value), r.set(i(n.value)); }, r.subscribe = o.subscribe.bind(o), r.destroyRef = o.destroyRef, r; }
function qD(e) { if (e === _a)
    throw new w(952, !1); }
function QD(e, t) { return dC(e, t); }
function WR(e) { return dC(_a, e); }
var bO = (QD.required = WR, QD), fC = !0, ho = class {
}, AO = at("ContentChildren", (e, t = {}) => Y({ selector: e, first: !1, isViewQuery: !1, descendants: !1, emitDistinctChangesOnly: fC }, t), ho), RO = at("ContentChild", (e, t = {}) => Y({ selector: e, first: !0, isViewQuery: !1, descendants: !0 }, t), ho), kO = at("ViewChildren", (e, t = {}) => Y({ selector: e, first: !1, isViewQuery: !0, descendants: !0, emitDistinctChangesOnly: fC }, t), ho), xO = at("ViewChild", (e, t) => Y({ selector: e, first: !0, isViewQuery: !0, descendants: !0 }, t), ho);
function GR(e, t, n) { let o = new Un(n); return Promise.resolve(o); }
function ZD(e) { for (let t = e.length - 1; t >= 0; t--)
    if (e[t] !== void 0)
        return e[t]; }
var qR = (() => { class e {
    zone = E(B);
    changeDetectionScheduler = E(Mt);
    applicationRef = E(xe);
    applicationErrorHandler = E(Wt);
    _onMicrotaskEmptySubscription;
    initialize() { this._onMicrotaskEmptySubscription || (this._onMicrotaskEmptySubscription = this.zone.onMicrotaskEmpty.subscribe({ next: () => { this.changeDetectionScheduler.runningTick || this.zone.run(() => { try {
            this.applicationRef.dirtyFlags |= 1, this.applicationRef._tick();
        }
        catch (n) {
            this.applicationErrorHandler(n);
        } }); } })); }
    ngOnDestroy() { this._onMicrotaskEmptySubscription?.unsubscribe(); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = V({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), QR = new _("", { factory: () => !1 });
function ZR({ ngZoneFactory: e, scheduleInRootZone: t }) { return e ??= () => new B(Xe(Y({}, pC()), { scheduleInRootZone: t })), [{ provide: Dn, useValue: !1 }, { provide: B, useFactory: e }, { provide: vt, multi: !0, useFactory: () => { let n = E(qR, { optional: !0 }); return () => n.initialize(); } }, { provide: vt, multi: !0, useFactory: () => { let n = E(YR); return () => { n.initialize(); }; } }, { provide: yi, useValue: t ?? pp }]; }
function OO(e) { let t = e?.scheduleInRootZone, n = ZR({ ngZoneFactory: () => { let o = pC(e); return o.scheduleInRootZone = t, o.shouldCoalesceEventChangeDetection && Q("NgZone_CoalesceEvent"), new B(o); }, scheduleInRootZone: t }); return tt([{ provide: QR, useValue: !0 }, n]); }
function pC(e) { return { enableLongStackTrace: !1, shouldCoalesceEventChangeDetection: e?.eventCoalescing ?? !1, shouldCoalesceRunChangeDetection: e?.runCoalescing ?? !1 }; }
var YR = (() => { class e {
    subscription = new VR;
    initialized = !1;
    zone = E(B);
    pendingTasks = E(zt);
    initialize() { if (this.initialized)
        return; this.initialized = !0; let n = null; !this.zone.isStable && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (n = this.pendingTasks.add()), this.zone.runOutsideAngular(() => { this.subscription.add(this.zone.onStable.subscribe(() => { B.assertNotInAngularZone(), queueMicrotask(() => { n !== null && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (this.pendingTasks.remove(n), n = null); }); })); }), this.subscription.add(this.zone.onUnstable.subscribe(() => { B.assertInAngularZone(), n ??= this.pendingTasks.add(); })); }
    ngOnDestroy() { this.subscription.unsubscribe(); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = V({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
var Ca = new _(""), KR = new _("");
function jr(e) { return !e.moduleRef; }
function hC(e) { let t = jr(e) ? e.r3Injector : e.moduleRef.injector, n = t.get(B); return n.run(() => { jr(e) ? e.r3Injector.resolveInjectorInitializers() : e.moduleRef.resolveInjectorInitializers(); let o = t.get(Wt), r; if (n.runOutsideAngular(() => { r = n.onError.subscribe({ next: o }); }), jr(e)) {
    let i = () => t.destroy(), s = e.platformInjector.get(Ca);
    s.add(i), t.onDestroy(() => { r.unsubscribe(), s.delete(i); });
}
else {
    let i = () => e.moduleRef.destroy(), s = e.platformInjector.get(Ca);
    s.add(i), e.moduleRef.onDestroy(() => { Vo(e.allPlatformModules, e.moduleRef), r.unsubscribe(), s.delete(i); });
} return XR(o, n, () => { let i = t.get(zt), s = i.add(), a = t.get(Sd); return a.runInitializers(), a.donePromise.then(() => { let c = t.get(If, Pr); if (FI(c || Pr), !t.get(KR, !0))
    return jr(e) ? t.get(xe) : (e.allPlatformModules.push(e.moduleRef), e.moduleRef); if (jr(e)) {
    let u = t.get(xe);
    return e.rootComponent !== void 0 && u.bootstrap(e.rootComponent), u;
}
else
    return gC?.(e.moduleRef, e.allPlatformModules), e.moduleRef; }).finally(() => { i.remove(s); }); }); }); }
var gC;
function YD() { gC = JR; }
function JR(e, t) { let n = e.injector.get(xe); if (e._bootstrapComponents.length > 0)
    e._bootstrapComponents.forEach(o => n.bootstrap(o));
else if (e.instance.ngDoBootstrap)
    e.instance.ngDoBootstrap(n);
else
    throw new w(-403, !1); t.push(e); }
function XR(e, t, n) { try {
    let o = n();
    return wd(o) ? o.catch(r => { throw t.runOutsideAngular(() => e(r)), r; }) : o;
}
catch (o) {
    throw t.runOutsideAngular(() => e(o)), o;
} }
var mC = (() => { class e {
    _injector;
    _modules = [];
    _destroyListeners = [];
    _destroyed = !1;
    constructor(n) { this._injector = n; }
    bootstrapModuleFactory(n, o) { let r = [Ea(), ...o?.applicationProviders ?? [], Dc], i = yv(n.moduleType, this.injector, r); return YD(), hC({ moduleRef: i, allPlatformModules: this._modules, platformInjector: this.injector }); }
    bootstrapModule(n, o = []) { let r = Ad({}, o); return YD(), GR(this.injector, r, n).then(i => this.bootstrapModuleFactory(i, r)); }
    onDestroy(n) { this._destroyListeners.push(n); }
    get injector() { return this._injector; }
    destroy() { if (this._destroyed)
        throw new w(404, !1); this._modules.slice().forEach(o => o.destroy()), this._destroyListeners.forEach(o => o()); let n = this._injector.get(Ca, null); n && (n.forEach(o => o()), n.clear()), this._destroyed = !0; }
    get destroyed() { return this._destroyed; }
    static \u0275fac = function (o) { return new (o || e)(Le(Ce)); };
    static \u0275prov = V({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })(), po = null;
function ek(e) { if (Sa())
    throw new w(400, !1); bd(), po = typeof ngServerMode > "u" || !ngServerMode ? e : null; let t = e.get(mC); return vC(e), t; }
function tk(e, t, n = []) { let o = `Platform: ${t}`, r = new _(o); return (i = []) => { let s = Sa(); if (!s) {
    let a = [...n, ...i, { provide: r, useValue: !0 }];
    s = e?.(a) ?? ek(yC(a, o));
} return typeof ngServerMode < "u" && ngServerMode ? s : nk(r); }; }
function yC(e = [], t) { return Ce.create({ name: t, providers: [{ provide: Gf, useValue: "platform" }, { provide: Ca, useValue: new Set([() => po = null]) }, ...e] }); }
function nk(e) { let t = Sa(); if (!t)
    throw new w(-401, !1); return t; }
function Sa() { return typeof ngServerMode < "u" && ngServerMode ? null : po?.get(mC) ?? null; }
function LO() { Sa()?.destroy(); }
function ok(e = []) { if (po)
    return po; let t = yC(e); return (typeof ngServerMode > "u" || !ngServerMode) && (po = t), bd(), vC(t), t; }
function PO(e) { return { provide: ru, useValue: e, multi: !0 }; }
function vC(e) { let t = e.get(ru, null); ri(e, () => { t?.forEach(n => n()); }); }
function FO(e) { return tt([]); }
function HO() { return !1; }
function jO() { }
var Da = new WeakSet, KD = "";
function JD(e) { return e.get(ws, uu); }
function rk() { let e = [{ provide: ws, useFactory: () => { let t = !0; if (typeof ngServerMode > "u" || !ngServerMode) {
            let n = E(ct);
            t = !!window._ejsas?.[n];
        } return t && Q("NgEventReplay"), t; } }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: vt, useValue: () => { let t = E(xe), { injector: n } = t; if (!Da.has(t)) {
        let o = E(Dr);
        if (JD(n)) {
            Vg();
            let r = n.get(ct), i = Hg(r, (s, a, c) => { s.nodeType === Node.ELEMENT_NODE && (Fg(s, a, c), pu(s, o)); });
            t.onDestroy(i);
        }
    } }, multi: !0 }, { provide: xr, useFactory: () => { let t = E(xe), { injector: n } = t; return () => { if (!JD(n) || Da.has(t))
        return; Da.add(t); let o = n.get(ct); t.onDestroy(() => { Da.delete(t), typeof ngServerMode < "u" && !ngServerMode && wc(o); }), t.whenStable().then(() => { if (t.destroyed)
        return; let r = n.get(gu); ik(r, n); let i = n.get(Dr); i.get(KD)?.forEach(hu), i.delete(KD); let s = r.instance; Cr(n) ? t.onDestroy(() => s.cleanUp()) : s.cleanUp(); }); }; }, multi: !0 }), e; }
var ik = (e, t) => { let n = t.get(ct), o = window._ejsas[n], r = e.instance = new Np(new Dp(o.c)); for (let a of o.et)
    r.addEvent(a); for (let a of o.etc)
    r.addEvent(a); let i = wp(n); r.replayEarlyEventInfos(i), wc(n); let s = new Tp(a => { ak(t, a, a.currentTarget); }); Mp(r, s); };
function sk(e, t, n) { let o = new Map, r = t[Ft], i = e.cleanup; if (!i || !r)
    return o; for (let s = 0; s < i.length;) {
    let a = i[s++], c = i[s++];
    if (typeof a != "string")
        continue;
    let l = a;
    if (!Ep(l))
        continue;
    Ip(l) ? n.capture.add(l) : n.regular.add(l);
    let u = k(t[c]);
    s++;
    let d = i[s++];
    (typeof d == "boolean" || d >= 0) && (o.has(u) ? o.get(u).push(l) : o.set(u, [l]));
} return o; }
function ak(e, t, n) { let o = (n && n.getAttribute(Xn)) ?? ""; /d\d+/.test(o) ? ck(o, e, t, n) : t.eventPhase === Cp.REPLAY && mu(t, n); }
function ck(e, t, n, o) { let r = t.get(xg); r.push({ event: n, currentTarget: o }), pt(t, e, lk(r)); }
function lk(e) { return t => { let n = new Set(t), o = []; for (let { event: r, currentTarget: i } of e) {
    let s = i.getAttribute(Xn);
    n.has(s) ? mu(r, i) : o.push({ event: r, currentTarget: i });
} e.length = 0, e.push(...o); }; }
var XD = !1, eC = !1, tC = !1, uk = 1e4;
function dk() { XD || (XD = !0, Gg(), AI(), EE(), RI(), Av(), ov(), xy(), Ym()); }
function fk() { eC || (eC = !0, jI(), My(), by()); }
function pk() { tC || (tC = !0, tm()); }
function hk(e) { return e.whenStable(); }
var VO = "ngcm";
function BO() { let e = [{ provide: dn, useFactory: () => { let t = !0; return (typeof ngServerMode > "u" || !ngServerMode) && (t = !!E(Yn, { optional: !0 })?.get(_s, null)), t && Q("NgHydration"), t; } }, { provide: vt, useValue: () => { if (Xu(!1), typeof ngServerMode < "u" && ngServerMode)
            return; let t = E(Ut); E(dn) && (om(t), dk()); }, multi: !0 }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: cu, useFactory: () => E(dn) }, { provide: xr, useFactory: () => { let t = E(Mt); if (E(dn)) {
        let n = E(xe);
        return () => { hk(n).then(() => { n.destroyed || (ed(n), t.notify(7)); }); };
    } return () => { }; }, multi: !0 }), tt(e); }
function $O() { return [{ provide: lu, useFactory: () => E(dn) }, { provide: vt, useValue: () => { E(dn) && (fk(), Xu(!0), Q("NgI18nHydration")); }, multi: !0 }]; }
function UO() { let e = [rk(), { provide: du, useValue: !0 }, { provide: lt, useClass: Bg }, { provide: vt, useValue: () => { pk(), Q("NgIncrementalHydration"); }, multi: !0 }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: xr, useFactory: () => { let t = E(Ce), n = E(Ut); return () => { let o = nm(t), r = Dy(n, n.body); Xv(t, o, r), Xg(n, t); }; }, multi: !0 }), e; }
var nC = uk - 1e3, Tf = class {
    openTasks = new Map;
    add(t) { this.openTasks.set(t, new Error("Task stack tracking error")); }
    remove(t) { this.openTasks.delete(t); }
};
function zO() { let e = new Tf, { openTasks: t } = e; return tt([{ provide: hp, useValue: e }, qv(() => { console.warn("Stability debugging utility was provided in production mode. This will cause debug code to be included in production bundles. If this is intentional because you are debugging stability issues in a production environment, you can ignore this warning."); let n = E(B), o = E(xe), r = null; typeof Zone < "u" && n.run(() => { r = Zone.current.get("TaskTrackingZone"); }), n.runOutsideAngular(() => { let i = setTimeout(() => { if (console.debug(`---- Application did not stabilize within ${nC / 1e3} seconds ----`), typeof Zone < "u" && !r && console.info('Zone.js is present but no TaskTrackingZone found. To enable better debugging of tasks in the Angular Zone, import "zone.js/plugins/task-tracking" in your application.'), r?.macroTasks?.length) {
        console.group("Macrotasks keeping Angular Zone unstable:");
        for (let s of r?.macroTasks ?? [])
            console.debug(s.creationLocation.stack);
        console.groupEnd();
    } console.group("PendingTasks keeping application unstable:"); for (let s of t.values())
        console.debug(s.stack); console.groupEnd(); }, nC); o.whenStable().then(() => { clearTimeout(i); }); }); })]); }
function WO(e) { let t = hd(e); if (!t)
    throw IC(e); return new Un(t); }
function GO(e) { let t = hd(e); if (!t)
    throw IC(e); return t; }
function IC(e) { return new w(920, !1); }
var gk = (() => { class e {
    static __NG_ELEMENT_ID__ = mk;
} return e; })();
function mk(e) { return yk(T(), g(), (e & 16) === 16); }
function yk(e, t, n) { if (ge(e) && !n) {
    let o = fe(e.index, t);
    return new Rt(o, o);
}
else if (e.type & 175) {
    let o = t[K];
    return new Rt(o, t);
} return null; }
var Mf = class extends gk {
}, oC = class extends Mf {
}, Ta = class {
    supports(t) { return ir(t); }
    create(t) { return new Nf(t); }
}, vk = (e, t) => t, Nf = class {
    length = 0;
    collection;
    _linkedRecords = null;
    _unlinkedRecords = null;
    _previousItHead = null;
    _itHead = null;
    _itTail = null;
    _additionsHead = null;
    _additionsTail = null;
    _movesHead = null;
    _movesTail = null;
    _removalsHead = null;
    _removalsTail = null;
    _identityChangesHead = null;
    _identityChangesTail = null;
    _trackByFn;
    constructor(t) { this._trackByFn = t || vk; }
    forEachItem(t) { let n; for (n = this._itHead; n !== null; n = n._next)
        t(n); }
    forEachOperation(t) { let n = this._itHead, o = this._removalsHead, r = 0, i = null; for (; n || o;) {
        let s = !o || n && n.currentIndex < rC(o, r, i) ? n : o, a = rC(s, r, i), c = s.currentIndex;
        if (s === o)
            r--, o = o._nextRemoved;
        else if (n = n._next, s.previousIndex == null)
            r++;
        else {
            i || (i = []);
            let l = a - r, u = c - r;
            if (l != u) {
                for (let f = 0; f < l; f++) {
                    let p = f < i.length ? i[f] : i[f] = 0, h = p + f;
                    u <= h && h < l && (i[f] = p + 1);
                }
                let d = s.previousIndex;
                i[d] = u - l;
            }
        }
        a !== c && t(s, a, c);
    } }
    forEachPreviousItem(t) { let n; for (n = this._previousItHead; n !== null; n = n._nextPrevious)
        t(n); }
    forEachAddedItem(t) { let n; for (n = this._additionsHead; n !== null; n = n._nextAdded)
        t(n); }
    forEachMovedItem(t) { let n; for (n = this._movesHead; n !== null; n = n._nextMoved)
        t(n); }
    forEachRemovedItem(t) { let n; for (n = this._removalsHead; n !== null; n = n._nextRemoved)
        t(n); }
    forEachIdentityChange(t) { let n; for (n = this._identityChangesHead; n !== null; n = n._nextIdentityChange)
        t(n); }
    diff(t) { if (t == null && (t = []), !ir(t))
        throw new w(900, !1); return this.check(t) ? this : null; }
    onDestroy() { }
    check(t) { this._reset(); let n = this._itHead, o = !1, r, i, s; if (Array.isArray(t)) {
        this.length = t.length;
        for (let a = 0; a < this.length; a++)
            i = t[a], s = this._trackByFn(a, i), n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, i, s, a), o = !0) : (o && (n = this._verifyReinsertion(n, i, s, a)), Object.is(n.item, i) || this._addIdentityChange(n, i)), n = n._next;
    }
    else
        r = 0, $y(t, a => { s = this._trackByFn(r, a), n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, a, s, r), o = !0) : (o && (n = this._verifyReinsertion(n, a, s, r)), Object.is(n.item, a) || this._addIdentityChange(n, a)), n = n._next, r++; }), this.length = r; return this._truncate(n), this.collection = t, this.isDirty; }
    get isDirty() { return this._additionsHead !== null || this._movesHead !== null || this._removalsHead !== null || this._identityChangesHead !== null; }
    _reset() { if (this.isDirty) {
        let t;
        for (t = this._previousItHead = this._itHead; t !== null; t = t._next)
            t._nextPrevious = t._next;
        for (t = this._additionsHead; t !== null; t = t._nextAdded)
            t.previousIndex = t.currentIndex;
        for (this._additionsHead = this._additionsTail = null, t = this._movesHead; t !== null; t = t._nextMoved)
            t.previousIndex = t.currentIndex;
        this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null;
    } }
    _mismatch(t, n, o, r) { let i; return t === null ? i = this._itTail : (i = t._prev, this._remove(t)), t = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(o, null), t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._reinsertAfter(t, i, r)) : (t = this._linkedRecords === null ? null : this._linkedRecords.get(o, r), t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._moveAfter(t, i, r)) : t = this._addAfter(new wf(n, o), i, r)), t; }
    _verifyReinsertion(t, n, o, r) { let i = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(o, null); return i !== null ? t = this._reinsertAfter(i, t._prev, r) : t.currentIndex != r && (t.currentIndex = r, this._addToMoves(t, r)), t; }
    _truncate(t) { for (; t !== null;) {
        let n = t._next;
        this._addToRemovals(this._unlink(t)), t = n;
    } this._unlinkedRecords !== null && this._unlinkedRecords.clear(), this._additionsTail !== null && (this._additionsTail._nextAdded = null), this._movesTail !== null && (this._movesTail._nextMoved = null), this._itTail !== null && (this._itTail._next = null), this._removalsTail !== null && (this._removalsTail._nextRemoved = null), this._identityChangesTail !== null && (this._identityChangesTail._nextIdentityChange = null); }
    _reinsertAfter(t, n, o) { this._unlinkedRecords !== null && this._unlinkedRecords.remove(t); let r = t._prevRemoved, i = t._nextRemoved; return r === null ? this._removalsHead = i : r._nextRemoved = i, i === null ? this._removalsTail = r : i._prevRemoved = r, this._insertAfter(t, n, o), this._addToMoves(t, o), t; }
    _moveAfter(t, n, o) { return this._unlink(t), this._insertAfter(t, n, o), this._addToMoves(t, o), t; }
    _addAfter(t, n, o) { return this._insertAfter(t, n, o), this._additionsTail === null ? this._additionsTail = this._additionsHead = t : this._additionsTail = this._additionsTail._nextAdded = t, t; }
    _insertAfter(t, n, o) { let r = n === null ? this._itHead : n._next; return t._next = r, t._prev = n, r === null ? this._itTail = t : r._prev = t, n === null ? this._itHead = t : n._next = t, this._linkedRecords === null && (this._linkedRecords = new Ma), this._linkedRecords.put(t), t.currentIndex = o, t; }
    _remove(t) { return this._addToRemovals(this._unlink(t)); }
    _unlink(t) { this._linkedRecords !== null && this._linkedRecords.remove(t); let n = t._prev, o = t._next; return n === null ? this._itHead = o : n._next = o, o === null ? this._itTail = n : o._prev = n, t; }
    _addToMoves(t, n) { return t.previousIndex === n || (this._movesTail === null ? this._movesTail = this._movesHead = t : this._movesTail = this._movesTail._nextMoved = t), t; }
    _addToRemovals(t) { return this._unlinkedRecords === null && (this._unlinkedRecords = new Ma), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, this._removalsTail === null ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t; }
    _addIdentityChange(t, n) { return t.item = n, this._identityChangesTail === null ? this._identityChangesTail = this._identityChangesHead = t : this._identityChangesTail = this._identityChangesTail._nextIdentityChange = t, t; }
}, wf = class {
    item;
    trackById;
    currentIndex = null;
    previousIndex = null;
    _nextPrevious = null;
    _prev = null;
    _next = null;
    _prevDup = null;
    _nextDup = null;
    _prevRemoved = null;
    _nextRemoved = null;
    _nextAdded = null;
    _nextMoved = null;
    _nextIdentityChange = null;
    constructor(t, n) { this.item = t, this.trackById = n; }
}, _f = class {
    _head = null;
    _tail = null;
    add(t) { this._head === null ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t); }
    get(t, n) { let o; for (o = this._head; o !== null; o = o._nextDup)
        if ((n === null || n <= o.currentIndex) && Object.is(o.trackById, t))
            return o; return null; }
    remove(t) { let n = t._prevDup, o = t._nextDup; return n === null ? this._head = o : n._nextDup = o, o === null ? this._tail = n : o._prevDup = n, this._head === null; }
}, Ma = class {
    map = new Map;
    put(t) { let n = t.trackById, o = this.map.get(n); o || (o = new _f, this.map.set(n, o)), o.add(t); }
    get(t, n) { let o = t, r = this.map.get(o); return r ? r.get(t, n) : null; }
    remove(t) { let n = t.trackById; return this.map.get(n).remove(t) && this.map.delete(n), t; }
    get isEmpty() { return this.map.size === 0; }
    clear() { this.map.clear(); }
};
function rC(e, t, n) { let o = e.previousIndex; if (o === null)
    return o; let r = 0; return n && o < n.length && (r = n[o]), o + t + r; }
var Na = class {
    supports(t) { return t instanceof Map || ia(t); }
    create() { return new Sf; }
}, Sf = class {
    _records = new Map;
    _mapHead = null;
    _appendAfter = null;
    _previousMapHead = null;
    _changesHead = null;
    _changesTail = null;
    _additionsHead = null;
    _additionsTail = null;
    _removalsHead = null;
    get isDirty() { return this._additionsHead !== null || this._changesHead !== null || this._removalsHead !== null; }
    forEachItem(t) { let n; for (n = this._mapHead; n !== null; n = n._next)
        t(n); }
    forEachPreviousItem(t) { let n; for (n = this._previousMapHead; n !== null; n = n._nextPrevious)
        t(n); }
    forEachChangedItem(t) { let n; for (n = this._changesHead; n !== null; n = n._nextChanged)
        t(n); }
    forEachAddedItem(t) { let n; for (n = this._additionsHead; n !== null; n = n._nextAdded)
        t(n); }
    forEachRemovedItem(t) { let n; for (n = this._removalsHead; n !== null; n = n._nextRemoved)
        t(n); }
    diff(t) { if (!t)
        t = new Map;
    else if (!(t instanceof Map || ia(t)))
        throw new w(900, !1); return this.check(t) ? this : null; }
    check(t) { this._reset(); let n = this._mapHead; if (this._appendAfter = null, this._forEach(t, (o, r) => { if (n && n.key === r)
        this._maybeAddToChanges(n, o), this._appendAfter = n, n = n._next;
    else {
        let i = this._getOrCreateRecordForKey(r, o);
        n = this._insertBeforeOrAppend(n, i);
    } }), n) {
        n._prev && (n._prev._next = null), this._removalsHead = n;
        for (let o = n; o !== null; o = o._nextRemoved)
            o === this._mapHead && (this._mapHead = null), this._records.delete(o.key), o._nextRemoved = o._next, o.previousValue = o.currentValue, o.currentValue = null, o._prev = null, o._next = null;
    } return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty; }
    _insertBeforeOrAppend(t, n) { if (t) {
        let o = t._prev;
        return n._next = t, n._prev = o, t._prev = n, o && (o._next = n), t === this._mapHead && (this._mapHead = n), this._appendAfter = t, t;
    } return this._appendAfter ? (this._appendAfter._next = n, n._prev = this._appendAfter) : this._mapHead = n, this._appendAfter = n, null; }
    _getOrCreateRecordForKey(t, n) { if (this._records.has(t)) {
        let r = this._records.get(t);
        this._maybeAddToChanges(r, n);
        let i = r._prev, s = r._next;
        return i && (i._next = s), s && (s._prev = i), r._next = null, r._prev = null, r;
    } let o = new bf(t); return this._records.set(t, o), o.currentValue = n, this._addToAdditions(o), o; }
    _reset() { if (this.isDirty) {
        let t;
        for (this._previousMapHead = this._mapHead, t = this._previousMapHead; t !== null; t = t._next)
            t._nextPrevious = t._next;
        for (t = this._changesHead; t !== null; t = t._nextChanged)
            t.previousValue = t.currentValue;
        for (t = this._additionsHead; t != null; t = t._nextAdded)
            t.previousValue = t.currentValue;
        this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null;
    } }
    _maybeAddToChanges(t, n) { Object.is(n, t.currentValue) || (t.previousValue = t.currentValue, t.currentValue = n, this._addToChanges(t)); }
    _addToAdditions(t) { this._additionsHead === null ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t, this._additionsTail = t); }
    _addToChanges(t) { this._changesHead === null ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t, this._changesTail = t); }
    _forEach(t, n) { t instanceof Map ? t.forEach(n) : Object.keys(t).forEach(o => n(t[o], o)); }
}, bf = class {
    key;
    previousValue = null;
    currentValue = null;
    _nextPrevious = null;
    _next = null;
    _prev = null;
    _nextAdded = null;
    _nextRemoved = null;
    _nextChanged = null;
    constructor(t) { this.key = t; }
};
function iC() { return new EC([new Ta]); }
var EC = (() => { class e {
    factories;
    static \u0275prov = V({ token: e, providedIn: "root", factory: iC });
    constructor(n) { this.factories = n; }
    static create(n, o) { if (o != null) {
        let r = o.factories.slice();
        n = n.concat(r);
    } return new e(n); }
    static extend(n) { return { provide: e, useFactory: () => { let o = E(e, { optional: !0, skipSelf: !0 }); return e.create(n, o || iC()); } }; }
    find(n) { let o = this.factories.find(r => r.supports(n)); if (o != null)
        return o; throw new w(901, !1); }
} return e; })();
function sC() { return new DC([new Na]); }
var DC = (() => { class e {
    static \u0275prov = V({ token: e, providedIn: "root", factory: sC });
    factories;
    constructor(n) { this.factories = n; }
    static create(n, o) { if (o) {
        let r = o.factories.slice();
        n = n.concat(r);
    } return new e(n); }
    static extend(n) { return { provide: e, useFactory: () => { let o = E(e, { optional: !0, skipSelf: !0 }); return e.create(n, o || sC()); } }; }
    find(n) { let o = this.factories.find(r => r.supports(n)); if (o)
        return o; throw new w(901, !1); }
} return e; })(), Ik = [new Na], Ek = [new Ta], qO = new EC(Ek), QO = new DC(Ik), ZO = tk(null, "core", []), YO = (() => { class e {
    constructor(n) { }
    static \u0275fac = function (o) { return new (o || e)(Le(xe)); };
    static \u0275mod = md({ type: e });
    static \u0275inj = yo({});
} return e; })();
function KO(e) { let { rootComponent: t, appProviders: n, platformProviders: o, platformRef: r } = e; if (x(A.BootstrapApplicationStart), typeof ngServerMode < "u" && ngServerMode && !r)
    throw new w(-401, !1); try {
    let i = r?.injector ?? ok(o), s = [Ea(), Dc, ...n || []], a = new ar({ providers: s, parent: i, debugName: "", runEnvironmentInitializers: !1 });
    return hC({ r3Injector: a.injector, platformInjector: i, rootComponent: t });
}
catch (i) {
    return Promise.reject(i);
}
finally {
    x(A.BootstrapApplicationEnd);
} }
var Af = class {
    views = [];
    indexByContent = new Map;
    add(t) { let n = JSON.stringify(t); if (!this.indexByContent.has(n)) {
        let o = this.views.length;
        return this.views.push(t), this.indexByContent.set(n, o), o;
    } return this.indexByContent.get(n); }
    getAll() { return this.views; }
}, Dk = 0;
function CC(e) { return e.ssrId || (e.ssrId = `t${Dk++}`), e.ssrId; }
function TC(e, t, n) { let o = []; return Hn(e, t, n, o), o.length; }
function Ck(e) { let t = []; return Ks(e, t), t.length; }
function MC(e, t) { let n = e[j]; return n && !n.hasAttribute(un) ? wa(n, e, null, t) : null; }
function NC(e, t) { let n = wo(e[j]), o = MC(n, t); if (o === null)
    return; let r = k(n[j]), i = e[G], s = wa(r, i, null, t), a = n[C], c = `${o}|${s}`; a.setAttribute(r, Rn, c); }
function JO(e, t) { let n = e.injector, o = Ny(n), r = Cr(n), i = new Af, s = new Map, a = e._views, c = n.get(ws, uu), l = { regular: new Set, capture: new Set }, u = new Map; e.injector.get(ct); for (let p of a) {
    let h = yu(p);
    if (h !== null) {
        let y = { serializedViewCollection: i, corruptedTextNodes: s, isI18nHydrationEnabled: o, isIncrementalHydrationEnabled: r, i18nChildren: new Map, eventTypesToReplay: l, shouldReplayEvents: c, deferBlocks: u };
        X(h) ? NC(h, y) : MC(h, y), _k(s, t);
    }
} let d = i.getAll(), f = n.get(Yn); if (f.set(_s, d), u.size > 0) {
    let p = {};
    for (let [h, y] of u.entries())
        p[h] = y;
    f.set(Ss, p);
} return l; }
function Tk(e, t, n, o, r) { let i = [], s = ""; for (let a = H; a < e.length; a++) {
    let c = e[a], l, u, d;
    if (We(c) && (c = c[I], X(c))) {
        u = Ck(c) + 1, NC(c, r);
        let p = wo(c[j]);
        d = { [Ts]: p[m].ssrId, [it]: u };
    }
    if (!d) {
        let p = c[m];
        p.type === 1 ? (l = p.ssrId, u = 1) : (l = CC(p), u = TC(p, c, p.firstChild)), d = { [Ts]: l, [it]: u };
        let h = !1;
        if (Lv(n[m], t)) {
            let y = me(n, t), v = ae(n[m], t);
            if (r.isIncrementalHydrationEnabled && v.hydrateTriggers !== null) {
                let D = `d${r.deferBlocks.size}`;
                v.hydrateTriggers.has(7) && (h = !0);
                let S = [];
                Ks(e, S);
                let J = { [it]: S.length, [Ir]: y[ft] }, Oe = Mk(v.hydrateTriggers);
                Oe.length > 0 && (J[Er] = Oe), o !== null && (J[au] = o), r.deferBlocks.set(D, J);
                let Te = k(e);
                Te !== void 0 ? Te.nodeType === Node.COMMENT_NODE && aC(Te, D) : aC(Te, D), h || bk(v, S, D, r), o = D, d[Ns] = D;
            }
            d[Ir] = y[ft];
        }
        if (!h) {
            let y = k(c[j]);
            (c[m].type !== 1 || y === null || !y.hasAttribute(un)) && Object.assign(d, wC(e[a], o, r));
        }
    }
    let f = JSON.stringify(d);
    if (i.length > 0 && f === s) {
        let p = i[i.length - 1];
        p[yr] ??= 1, p[yr]++;
    }
    else
        s = f, i.push(d);
} return i; }
function Mk(e) { let t = new Set([0, 1, 2, 5]), n = []; for (let [o, r] of e)
    t.has(o) && (r === null ? n.push(o) : r.type === 5 ? n.push({ trigger: o, delay: r.delay }) : n.push({ trigger: o, intersectionObserverOptions: r.intersectionObserverOptions })); return n; }
function Vr(e, t, n, o) { let r = t.index - I; e[vr] ??= {}, e[vr][r] ??= Ey(t, n, o); }
function Df(e, t) { let n = typeof t == "number" ? t : t.index - I; e[Jn] ??= [], e[Jn].includes(n) || e[Jn].push(n); }
function wC(e, t = null, n) { let o = {}, r = e[m], i = wy(r, n), s = n.shouldReplayEvents ? sk(r, e, n.eventTypesToReplay) : null; for (let a = I; a < r.bindingStartIndex; a++) {
    let c = r.data[a], l = a - I, u = _y(e, a, n);
    if (u) {
        o[Ms] ??= {}, o[Ms][l] = u.caseQueue;
        for (let d of u.disconnectedNodes)
            Df(o, d);
        for (let d of u.disjointNodes) {
            let f = r.data[d + I];
            Vr(o, f, e, i);
        }
        continue;
    }
    if (ms(c) && !eo(c)) {
        if (X(e[a]) && c.tView && (o[Cs] ??= {}, o[Cs][l] = CC(c.tView)), so(c, e) && Sk(c)) {
            Df(o, c);
            continue;
        }
        if (Array.isArray(c.projection)) {
            for (let d of c.projection)
                if (d)
                    if (!Array.isArray(d))
                        !qa(d) && !Zn(d) && (so(d, e) ? Df(o, d) : Vr(o, d, e, i));
                    else
                        throw dy(k(e[a]));
        }
        if (Nk(o, c, e, i), X(e[a])) {
            let d = e[a][j];
            if (Array.isArray(d)) {
                let f = k(d);
                f.hasAttribute(un) || wa(f, d, t, n);
            }
            o[Kn] ??= {}, o[Kn][l] = Tk(e[a], c, e, t, n);
        }
        else if (Array.isArray(e[a]) && !og(c)) {
            let d = k(e[a][j]);
            d.hasAttribute(un) || wa(d, e[a], t, n);
        }
        else if (c.type & 8)
            o[mr] ??= {}, o[mr][l] = TC(r, e, c.child);
        else if (c.type & 144) {
            let d = c.next;
            for (; d !== null && d.type & 144;)
                d = d.next;
            d && !Zn(d) && Vr(o, d, e, i);
        }
        else if (c.type & 1) {
            let d = k(e[a]);
            Iu(n, d);
        }
        if (s && c.type & 2) {
            let d = k(e[a]);
            s.has(d) && fu(d, s.get(d), t);
        }
    }
} return o; }
function Nk(e, t, n, o) { qa(t) || (t.projectionNext && t.projectionNext !== t.next && !Zn(t.projectionNext) && Vr(e, t.projectionNext, n, o), t.prev === null && t.parent !== null && so(t.parent, n) && !so(t, n) && Vr(e, t, n, o)); }
function wk(e) { let t = e[F]; if (!t?.constructor)
    return !1; let n = W(t.constructor); return n?.encapsulation === Re.ShadowDom || n?.encapsulation === Re.ExperimentalIsolatedShadowDom; }
function wa(e, t, n, o) { let r = t[C]; if (Zf(t) && !ta() || wk(t))
    return r.setAttribute(e, un, ""), null; {
    let i = wC(t, n, o), s = o.serializedViewCollection.add(i);
    return r.setAttribute(e, Rn, s.toString()), s;
} }
function aC(e, t) { e.textContent = `ngh=${t}`; }
function _k(e, t) { for (let [n, o] of e)
    n.after(t.createComment(o)); }
function Sk(e) { let t = e; for (; t != null;) {
    if (ge(t))
        return !0;
    t = t.parent;
} return !1; }
function bk(e, t, n, o) { let r = Jg(e.hydrateTriggers); for (let i of r)
    o.eventTypesToReplay.regular.add(i); if (r.length > 0) {
    let i = t.filter(s => s.nodeType === Node.ELEMENT_NODE);
    for (let s of i)
        fu(s, r, n);
} }
function XO(e) { return typeof e == "boolean" ? e : e != null && e !== "false"; }
function eL(e, t = NaN) { return !isNaN(parseFloat(e)) && !isNaN(Number(e)) ? Number(e) : t; }
var Ak = "\u{1F170}\uFE0F", ba = !1;
function tL(e) { if (!ba)
    return; let { startLabel: t } = _C(e); performance.mark(t); }
function nL(e) { if (!ba)
    return; let { startLabel: t, labelName: n, endLabel: o } = _C(e); performance.mark(o), performance.measure(n, t, o), performance.clearMarks(t), performance.clearMarks(o); }
function _C(e) { let t = `${Ak}:${e}`; return { labelName: t, startLabel: `start:${t}`, endLabel: `end:${t}` }; }
var cC = !1;
function oL() { if (!cC && (typeof performance > "u" || !performance.mark || !performance.measure)) {
    cC = !0, console.warn("Performance API is not supported on this platform");
    return;
} ba = !0; }
function rL() { ba = !1; }
function iL(e) { }
function sL(e) { return ne({ usage: 1, kind: "directive", type: e.type }).compileDirectiveDeclaration(he, `ng:///${e.type.name}/\u0275fac.js`, e); }
function aL(e) { Cd(e.type, e.decorators, e.ctorParameters ?? null, e.propDecorators ?? null); }
function cL(e) { Bv(e.type, e.resolveDeferredDeps, (...t) => { let n = e.resolveMetadata(...t); Cd(e.type, n.decorators, n.ctorParameters, n.propDecorators); }); }
function lL(e) { return ne({ usage: 1, kind: "component", type: e.type }).compileComponentDeclaration(he, `ng:///${e.type.name}/\u0275cmp.js`, e); }
function uL(e) { return ne({ usage: 1, kind: Rk(e.target), type: e.type }).compileFactoryDeclaration(he, `ng:///${e.type.name}/\u0275fac.js`, e); }
function Rk(e) { switch (e) {
    case fo.Directive: return "directive";
    case fo.Component: return "component";
    case fo.Injectable: return "injectable";
    case fo.Pipe: return "pipe";
    case fo.NgModule: return "NgModule";
} }
function dL(e) { return ne({ usage: 1, kind: "injectable", type: e.type }).compileInjectableDeclaration(he, `ng:///${e.type.name}/\u0275prov.js`, e); }
function fL(e) { return ne({ usage: 1, kind: "NgModule", type: e.type }).compileInjectorDeclaration(he, `ng:///${e.type.name}/\u0275inj.js`, e); }
function pL(e) { return ne({ usage: 1, kind: "NgModule", type: e.type }).compileNgModuleDeclaration(he, `ng:///${e.type.name}/\u0275mod.js`, e); }
function hL(e) { return ne({ usage: 1, kind: "pipe", type: e.type }).compilePipeDeclaration(he, `ng:///${e.type.name}/\u0275pipe.js`, e); }
var Cf = Symbol("NOT_SET"), SC = new Set, kk = Xe(Y({}, ka), { kind: "afterRenderEffectPhase", consumerIsAlwaysLive: !0, consumerAllowSignalWrites: !0, value: Cf, cleanup: null, consumerMarkedDirty() { if (this.sequence.impl.executing) {
        if (this.sequence.lastPhase === null || this.sequence.lastPhase < this.phase)
            return;
        this.sequence.erroredOrDestroyed = !0;
    } this.sequence.scheduler.notify(7); }, phaseFn(e) { if (this.sequence.lastPhase = this.phase, !this.dirty)
        return this.signal; if (this.dirty = !1, this.value !== Cf && !zr(this))
        return this.signal; try {
        for (let r of this.cleanup ?? SC)
            r();
    }
    finally {
        this.cleanup?.clear();
    } let t = []; e !== void 0 && t.push(e), t.push(this.registerCleanupFn); let n = go(this), o; try {
        o = this.userFn.apply(null, t);
    }
    finally {
        Ur(this, n);
    } return (this.value === Cf || !this.equal(this.value, o)) && (this.value = o, this.version++), this.signal; } }), Rf = class extends Xo {
    scheduler;
    lastPhase = null;
    nodes = [void 0, void 0, void 0, void 0];
    onDestroyFns = null;
    constructor(t, n, o, r, i, s = null) { super(t, [void 0, void 0, void 0, void 0], o, !1, i.get(ko), s), this.scheduler = r; for (let a of Hu) {
        let c = n[a];
        if (c === void 0)
            continue;
        let l = Object.create(kk);
        l.sequence = this, l.phase = a, l.userFn = c, l.dirty = !0, l.signal = () => ($r(l), l.value), l.signal[et] = l, l.registerCleanupFn = u => (l.cleanup ??= new Set).add(u), this.nodes[a] = l, this.hooks[a] = u => l.phaseFn(u);
    } }
    afterRun() { super.afterRun(), this.lastPhase = null; }
    destroy() { if (this.onDestroyFns !== null)
        for (let t of this.onDestroyFns)
            t(); super.destroy(); for (let t of this.nodes)
        if (t)
            try {
                for (let n of t.cleanup ?? SC)
                    n();
            }
            finally {
                mo(t);
            } }
};
function gL(e, t) { if (typeof ngServerMode < "u" && ngServerMode)
    return Bs; let n = t?.injector ?? E(Ce), o = n.get(Mt), r = n.get(Vs), i = n.get(pn, null, { optional: !0 }); r.impl ??= n.get(ju); let s = e; typeof s == "function" && (s = { mixedReadWrite: e }); let a = n.get(mi, null, { optional: !0 }), c = new Rf(r.impl, [s.earlyRead, s.write, s.mixedReadWrite, s.read], a?.view, o, n, i?.snapshot(null)); return r.impl.register(c), c; }
function mL(e) { return new kf(Td(e) ? e : Gt(e)); }
var kf = class {
    snapshot;
    constructor(t) { this.snapshot = t; }
    get state() { return this.snapshot(); }
    value = Gt(() => { if (this.state.status === "error")
        throw new vp(this.state.error); return this.state.value; });
    status = Gt(() => this.state.status);
    error = Gt(() => this.state.status === "error" ? this.state.error : void 0);
    isLoading = Gt(() => this.state.status === "loading" || this.state.status === "reloading");
    isValueDefined = Gt(() => this.state.status !== "error" && this.state.value !== void 0);
    hasValue() { return this.isValueDefined(); }
};
function yL(e, t) { let n = W(e), o = t.elementInjector || oi(); return new kt(n).create(o, t.projectableNodes, t.hostElement, t.environmentInjector, t.directives, t.bindings); }
function vL(e) { let t = W(e); if (!t)
    return null; let n = new kt(t); return { get selector() { return n.selector; }, get type() { return n.componentType; }, get inputs() { return n.inputs; }, get outputs() { return n.outputs; }, get ngContentSelectors() { return n.ngContentSelectors; }, get isStandalone() { return t.standalone; }, get isSignal() { return t.signals; } }; }
function IL(...e) { return e.reduce((t, n) => Object.assign(t, n, { providers: [...t.providers, ...n.providers] }), { providers: [] }); }
var EL = new _("", { providedIn: "platform", factory: () => null }), DL = new _("", { providedIn: "platform", factory: () => null }), CL = new _("", { providedIn: "platform", factory: () => null });
export { lM as ANIMATION_MODULE_TYPE, xr as APP_BOOTSTRAP_LISTENER, ct as APP_ID, _d as APP_INITIALIZER, Sd as ApplicationInitStatus, YO as ApplicationModule, xe as ApplicationRef, gg as Attribute, VD as COMPILER_OPTIONS, uM as CSP_NONCE, PM as CUSTOM_ELEMENTS_SCHEMA, Is as ChangeDetectionStrategy, gk as ChangeDetectorRef, AR as Compiler, Jl as CompilerFactory, TR as Component, ra as ComponentFactory, Ar as ComponentFactoryResolver, Py as ComponentRef, RO as ContentChild, AO as ContentChildren, xR as DEFAULT_CURRENCY_CODE, Ut as DOCUMENT, ln as DebugElement, Xl as DebugEventListener, fr as DebugNode, Nf as DefaultIterableDiffer, ko as DestroyRef, jD as Directive, vt as ENVIRONMENT_INITIALIZER, gr as ElementRef, oC as EmbeddedViewRef, It as EnvironmentInjector, Ec as ErrorHandler, zC as EventEmitter, CO as HOST_TAG_NAME, Qh as Host, UD as HostAttributeToken, _R as HostBinding, SR as HostListener, jC as INJECTOR, zh as Inject, OT as Injectable, _ as InjectionToken, Ce as Injector, NR as Input, EC as IterableDiffers, DC as KeyValueDiffers, If as LOCALE_ID, Rm as MAX_ANIMATION_TIMEOUT, $D as MissingTranslationStrategy, gs as ModuleWithComponentFactories, FM as NO_ERRORS_SCHEMA, bR as NgModule, gv as NgModuleFactory, Bn as NgModuleRef, B as NgZone, Wh as Optional, wR as Output, Nc as OutputEmitterRef, cM as PLATFORM_ID, ru as PLATFORM_INITIALIZER, Tc as PendingTasks, MR as Pipe, mC as PlatformRef, ho as Query, qi as QueryList, EL as REQUEST, CL as REQUEST_CONTEXT, DL as RESPONSE_INIT, b_ as Renderer2, rr as RendererFactory2, Ji as RendererStyleFlags2, Fy as Sanitizer, q as SecurityContext, Gh as Self, $i as SimpleChange, qh as SkipSelf, OR as TRANSLATIONS, LR as TRANSLATIONS_FORMAT, tr as TemplateRef, pb as Testability, zv as TestabilityRegistry, Yn as TransferState, Zh as Type, xC as VERSION, kC as Version, xO as ViewChild, kO as ViewChildren, aa as ViewContainerRef, Re as ViewEncapsulation, Mf as ViewRef, Pm as afterEveryRender, Vu as afterNextRender, gL as afterRenderEffect, PR as asNativeElements, $C as assertInInjectionContext, qC as assertNotInReactiveContext, nk as assertPlatform, XO as booleanAttribute, Gt as computed, _O as contentChild, SO as contentChildren, yL as createComponent, gd as createEnvironmentInjector, mv as createNgModule, wS as createNgModuleRef, ek as createPlatform, tk as createPlatformFactory, LO as destroyPlatform, ZC as effect, jO as enableProdMode, lb as enableProfiling, La as forwardRef, pr as getDebugNode, WO as getModuleFactory, GO as getNgModuleById, Sa as getPlatform, BC as importProvidersFrom, E as inject, MO as input, Yy as inputBinding, HO as isDevMode, Td as isSignal, vo as isStandalone, Md as isWritableSignal, JC as linkedSignal, tt as makeEnvironmentProviders, fM as makeStateKey, IL as mergeApplicationConfig, bO as model, eL as numberAttribute, TO as output, Ky as outputBinding, ZO as platformCore, qv as provideAppInitializer, WC as provideBrowserGlobalErrorListeners, FO as provideCheckNoChangesConfig, VC as provideEnvironmentInitializer, CN as provideNgReflectAttributes, PO as providePlatformInitializer, zO as provideStabilityDebugging, OO as provideZoneChangeDetection, RR as provideZonelessChangeDetection, vL as reflectComponentType, z as resolveForwardRef, XC as resource, mL as resourceFromSnapshots, ri as runInInjectionContext, Wv as setTestabilityGetter, Cc as signal, K_ as twoWayBinding, KC as untracked, NO as viewChild, wO as viewChildren, Am as \u0275ANIMATIONS_DISABLED, wg as \u0275AcxChangeDetectionStrategy, _g as \u0275AcxViewEncapsulation, Vs as \u0275AfterRenderManager, VO as \u0275CLIENT_RENDER_MODE_FLAG, H as \u0275CONTAINER_HEADER_OFFSET, Mt as \u0275ChangeDetectionScheduler, ra as \u0275ComponentFactory, cb as \u0275Console, Pr as \u0275DEFAULT_LOCALE_ID, Hv as \u0275DEFER_BLOCK_CONFIG, ob as \u0275DEFER_BLOCK_DEPENDENCY_INTERCEPTOR, lt as \u0275DEHYDRATED_BLOCK_REGISTRY, Ed as \u0275DeferBlockBehavior, $ as \u0275DeferBlockState, KR as \u0275ENABLE_ROOT_COMPONENT_BOOTSTRAP, xg as \u0275EVENT_REPLAY_QUEUE, Mc as \u0275EffectScheduler, BR as \u0275Framework, Qg as \u0275HydrationStatus, dM as \u0275IMAGE_CONFIG, Sg as \u0275IMAGE_CONFIG_DEFAULTS, Gf as \u0275INJECTOR_SCOPE, DO as \u0275INPUT_SIGNAL_BRAND_WRITE_TYPE, Wt as \u0275INTERNAL_APPLICATION_ERROR_HANDLER, pM as \u0275IS_ENABLED_BLOCKING_INITIAL_NAVIGATION, dn as \u0275IS_HYDRATION_DOM_REUSE_ENABLED, du as \u0275IS_INCREMENTAL_HYDRATION_ENABLED, Dr as \u0275JSACTION_BLOCK_ELEMENT_MAP, gu as \u0275JSACTION_EVENT_CONTRACT, Qi as \u0275LContext, zn as \u0275LocaleDataIndex, mt as \u0275NG_COMP_DEF, gn as \u0275NG_DIR_DEF, Lt as \u0275NG_ELEMENT_ID, Pa as \u0275NG_INJ_DEF, Fa as \u0275NG_MOD_DEF, Yr as \u0275NG_PIPE_DEF, Zr as \u0275NG_PROV_DEF, Pi as \u0275NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR, L as \u0275NO_CHANGE, Un as \u0275NgModuleFactory, Ic as \u0275NoopNgZone, Ak as \u0275PERFORMANCE_MARK_PREFIX, QR as \u0275PROVIDED_NG_ZONE, QC as \u0275PROVIDED_ZONELESS, zt as \u0275PendingTasksInternal, A as \u0275ProfilerEvent, Ua as \u0275R3Injector, Bi as \u0275ReflectionCapabilities, kt as \u0275Render3ComponentFactory, ss as \u0275Render3ComponentRef, $n as \u0275Render3NgModuleRef, eT as \u0275ResourceImpl, w as \u0275RuntimeError, et as \u0275SIGNAL, zg as \u0275SSR_CONTENT_INTEGRITY_MARKER, $v as \u0275TESTABILITY, Uv as \u0275TESTABILITY_GETTER, Fv as \u0275TimerScheduler, js as \u0275TracingAction, pn as \u0275TracingService, Rt as \u0275ViewRef, Wr as \u0275XSS_SECURITY_URL, Dn as \u0275ZONELESS_ENABLED, gm as \u0275_sanitizeHtml, ks as \u0275_sanitizeUrl, nn as \u0275allLeavingAnimations, no as \u0275allowSanitizationBypassAndThrow, JO as \u0275annotateForHydration, iL as \u0275assertType, UM as \u0275bypassSanitizationTrustHtml, qM as \u0275bypassSanitizationTrustResourceUrl, WM as \u0275bypassSanitizationTrustScript, zM as \u0275bypassSanitizationTrustStyle, GM as \u0275bypassSanitizationTrustUrl, DS as \u0275clearResolutionOfComponentResourcesQueue, bD as \u0275compileComponent, vf as \u0275compileDirective, _D as \u0275compileNgModule, SD as \u0275compileNgModuleDefs, GR as \u0275compileNgModuleFactory, HD as \u0275compilePipe, ja as \u0275convertToBitFlags, UC as \u0275createInjector, ok as \u0275createOrReusePlatformInjector, qO as \u0275defaultIterableDiffers, QO as \u0275defaultKeyValueDiffers, jn as \u0275depsTracker, Uy as \u0275devModeEqual, rL as \u0275disableProfiling, oL as \u0275enableProfiling, tT as \u0275encapsulateResourceError, Ud as \u0275findLocaleData, ND as \u0275flushModuleScopingQueueAsMuchAsPossible, Hf as \u0275formatRuntimeError, uR as \u0275generateStandaloneInDeclarationsError, ab as \u0275getAsyncClassMetadataFn, J_ as \u0275getClosestComponentName, W as \u0275getComponentDef, ji as \u0275getDeferBlocks, XT as \u0275getDirectives, Ds as \u0275getDocument, tM as \u0275getHostElement, LC as \u0275getInjectableDef, ve as \u0275getLContext, $b as \u0275getLocaleCurrencyCode, xI as \u0275getLocalePluralCase, YC as \u0275getOutputDestroyRef, cm as \u0275getSanitizationBypassType, ub as \u0275getTransferState, jM as \u0275getUnknownElementStrictMode, BM as \u0275getUnknownPropertyStrictMode, Ie as \u0275global, Jy as \u0275inferTagNameFromDefinition, mk as \u0275injectChangeDetectorRef, KO as \u0275internalCreateApplication, ZR as \u0275internalProvideZoneChangeDetection, Qv as \u0275isBoundToModule, ES as \u0275isComponentDefPendingResolution, HC as \u0275isEnvironmentProviders, PC as \u0275isInjectable, Qt as \u0275isNgModule, wd as \u0275isPromise, Gv as \u0275isSubscribable, kw as \u0275isViewDirty, xw as \u0275markForRefresh, Ke as \u0275noSideEffects, mf as \u0275patchComponentDefWithScope, Q as \u0275performanceMarkFeature, da as \u0275promiseWithResolvers, Ea as \u0275provideZonelessChangeDetectionInternal, db as \u0275publishExternalGlobalUtil, MM as \u0275readHydrationInfo, Bb as \u0275registerLocaleData, ot as \u0275renderDeferBlockState, pR as \u0275resetCompiledComponents, wM as \u0275resetIncrementalHydrationEnabledWarnedForTests, cR as \u0275resetJitOptions, dv as \u0275resolveComponentResources, CS as \u0275restoreComponentResolutionQueue, NS as \u0275setAllowDuplicateNgModuleIdsForTest, nT as \u0275setAlternateWeakRefImpl, DD as \u0275setClassDebugInfo, Cd as \u0275setClassMetadata, Bv as \u0275setClassMetadataAsync, RC as \u0275setCurrentInjector, sM as \u0275setDocument, FC as \u0275setInjectorProfilerContext, FI as \u0275setLocaleId, HM as \u0275setUnknownElementStrictMode, VM as \u0275setUnknownPropertyStrictMode, tL as \u0275startMeasuring, nL as \u0275stopMeasuring, _o as \u0275store, Gr as \u0275stringify, yf as \u0275transitiveScopesFor, fa as \u0275triggerResourceLoading, OC as \u0275truncateMiddle, Ub as \u0275unregisterLocaleData, ut as \u0275unwrapSafeValue, GC as \u0275unwrapWritableSignal, BO as \u0275withDomHydration, rk as \u0275withEventReplay, $O as \u0275withI18nSupport, UO as \u0275withIncrementalHydration, Mv as \u0275\u0275ControlFeature, ZE as \u0275\u0275ExternalStylesFeature, fo as \u0275\u0275FactoryTarget, Nv as \u0275\u0275HostDirectivesFeature, yd as \u0275\u0275InheritDefinitionFeature, Kh as \u0275\u0275NgOnChangesFeature, QE as \u0275\u0275ProvidersFeature, Sm as \u0275\u0275advance, Bo as \u0275\u0275animateEnter, $o as \u0275\u0275animateEnterListener, Uo as \u0275\u0275animateLeave, ls as \u0275\u0275animateLeaveListener, Rd as \u0275\u0275ariaProperty, WE as \u0275\u0275arrowFunction, OE as \u0275\u0275attachSourceLocations, kd as \u0275\u0275attribute, uE as \u0275\u0275classMap, nf as \u0275\u0275classProp, TI as \u0275\u0275componentInstance, NI as \u0275\u0275conditional, pa as \u0275\u0275conditionalBranchCreate, MI as \u0275\u0275conditionalCreate, Kd as \u0275\u0275contentQuery, Xd as \u0275\u0275contentQuerySignal, qy as \u0275\u0275control, Wy as \u0275\u0275controlCreate, gf as \u0275\u0275declareLet, eI as \u0275\u0275defer, Vv as \u0275\u0275deferEnableTimerScheduling, rI as \u0275\u0275deferHydrateNever, mI as \u0275\u0275deferHydrateOnHover, aI as \u0275\u0275deferHydrateOnIdle, uI as \u0275\u0275deferHydrateOnImmediate, II as \u0275\u0275deferHydrateOnInteraction, pI as \u0275\u0275deferHydrateOnTimer, CI as \u0275\u0275deferHydrateOnViewport, oI as \u0275\u0275deferHydrateWhen, hI as \u0275\u0275deferOnHover, iI as \u0275\u0275deferOnIdle, cI as \u0275\u0275deferOnImmediate, yI as \u0275\u0275deferOnInteraction, dI as \u0275\u0275deferOnTimer, EI as \u0275\u0275deferOnViewport, gI as \u0275\u0275deferPrefetchOnHover, sI as \u0275\u0275deferPrefetchOnIdle, lI as \u0275\u0275deferPrefetchOnImmediate, vI as \u0275\u0275deferPrefetchOnInteraction, fI as \u0275\u0275deferPrefetchOnTimer, DI as \u0275\u0275deferPrefetchOnViewport, nI as \u0275\u0275deferPrefetchWhen, tI as \u0275\u0275deferWhen, vv as \u0275\u0275defineComponent, Ev as \u0275\u0275defineDirective, V as \u0275\u0275defineInjectable, yo as \u0275\u0275defineInjector, md as \u0275\u0275defineNgModule, Dv as \u0275\u0275definePipe, ao as \u0275\u0275directiveInject, tc as \u0275\u0275disableBindings, Ld as \u0275\u0275domElement, jd as \u0275\u0275domElementContainer, Hd as \u0275\u0275domElementContainerEnd, va as \u0275\u0275domElementContainerStart, ma as \u0275\u0275domElementEnd, ga as \u0275\u0275domElementStart, Zd as \u0275\u0275domListener, Bd as \u0275\u0275domProperty, Id as \u0275\u0275domTemplate, Od as \u0275\u0275element, Fd as \u0275\u0275elementContainer, Lr as \u0275\u0275elementContainerEnd, ya as \u0275\u0275elementContainerStart, ha as \u0275\u0275elementEnd, lr as \u0275\u0275elementStart, ec as \u0275\u0275enableBindings, ED as \u0275\u0275getComponentDepsFactory, kI as \u0275\u0275getCurrentView, pg as \u0275\u0275getInheritedFactory, CD as \u0275\u0275getReplaceMetadataURL, QI as \u0275\u0275i18n, YI as \u0275\u0275i18nApply, ZI as \u0275\u0275i18nAttributes, Wd as \u0275\u0275i18nEnd, Gd as \u0275\u0275i18nExp, KI as \u0275\u0275i18nPostprocess, zd as \u0275\u0275i18nStart, Le as \u0275\u0275inject, ys as \u0275\u0275injectAttribute, LE as \u0275\u0275interpolate, PE as \u0275\u0275interpolate1, FE as \u0275\u0275interpolate2, HE as \u0275\u0275interpolate3, jE as \u0275\u0275interpolate4, VE as \u0275\u0275interpolate5, BE as \u0275\u0275interpolate6, $E as \u0275\u0275interpolate7, UE as \u0275\u0275interpolate8, zE as \u0275\u0275interpolateV, Hy as \u0275\u0275invalidFactory, Jr as \u0275\u0275invalidFactoryDep, qd as \u0275\u0275listener, nE as \u0275\u0275loadQuery, yc as \u0275\u0275namespaceHTML, mc as \u0275\u0275namespaceMathML, gc as \u0275\u0275namespaceSVG, JI as \u0275\u0275nextContext, aL as \u0275\u0275ngDeclareClassMetadata, cL as \u0275\u0275ngDeclareClassMetadataAsync, lL as \u0275\u0275ngDeclareComponent, sL as \u0275\u0275ngDeclareDirective, uL as \u0275\u0275ngDeclareFactory, dL as \u0275\u0275ngDeclareInjectable, fL as \u0275\u0275ngDeclareInjector, pL as \u0275\u0275ngDeclareNgModule, hL as \u0275\u0275ngDeclarePipe, pD as \u0275\u0275pipe, hD as \u0275\u0275pipeBind1, gD as \u0275\u0275pipeBind2, mD as \u0275\u0275pipeBind3, yD as \u0275\u0275pipeBind4, vD as \u0275\u0275pipeBindV, eE as \u0275\u0275projection, XI as \u0275\u0275projectionDef, xd as \u0275\u0275property, JE as \u0275\u0275pureFunction0, XE as \u0275\u0275pureFunction1, eD as \u0275\u0275pureFunction2, tD as \u0275\u0275pureFunction3, nD as \u0275\u0275pureFunction4, oD as \u0275\u0275pureFunction5, rD as \u0275\u0275pureFunction6, iD as \u0275\u0275pureFunction7, sD as \u0275\u0275pureFunction8, aD as \u0275\u0275pureFunctionV, oE as \u0275\u0275queryAdvance, tE as \u0275\u0275queryRefresh, xE as \u0275\u0275readContextLet, rE as \u0275\u0275reference, pd as \u0275\u0275registerNgModuleType, bI as \u0275\u0275repeater, SI as \u0275\u0275repeaterCreate, _I as \u0275\u0275repeaterTrackByIdentity, wI as \u0275\u0275repeaterTrackByIndex, TD as \u0275\u0275replaceMetadata, rc as \u0275\u0275resetView, bu as \u0275\u0275resolveBody, Mm as \u0275\u0275resolveDocument, Tm as \u0275\u0275resolveWindow, oc as \u0275\u0275restoreView, Mu as \u0275\u0275sanitizeHtml, Os as \u0275\u0275sanitizeResourceUrl, _u as \u0275\u0275sanitizeScript, Nu as \u0275\u0275sanitizeStyle, wu as \u0275\u0275sanitizeUrl, Cm as \u0275\u0275sanitizeUrlOrResourceUrl, YE as \u0275\u0275setComponentScope, KE as \u0275\u0275setNgModuleScope, kE as \u0275\u0275storeLet, lE as \u0275\u0275styleMap, tf as \u0275\u0275styleProp, Qd as \u0275\u0275syntheticHostListener, $d as \u0275\u0275syntheticHostProperty, vd as \u0275\u0275template, ID as \u0275\u0275templateRefExtractor, vE as \u0275\u0275text, of as \u0275\u0275textInterpolate, Ia as \u0275\u0275textInterpolate1, rf as \u0275\u0275textInterpolate2, sf as \u0275\u0275textInterpolate3, af as \u0275\u0275textInterpolate4, cf as \u0275\u0275textInterpolate5, lf as \u0275\u0275textInterpolate6, uf as \u0275\u0275textInterpolate7, df as \u0275\u0275textInterpolate8, ff as \u0275\u0275textInterpolateV, Em as \u0275\u0275trustConstantHtml, Dm as \u0275\u0275trustConstantResourceUrl, AE as \u0275\u0275twoWayBindingSet, hf as \u0275\u0275twoWayListener, pf as \u0275\u0275twoWayProperty, Su as \u0275\u0275validateAttribute, Jd as \u0275\u0275viewQuery, ef as \u0275\u0275viewQuerySignal };
/*! Bundled license information:

@angular/core/fesm2022/_debug_node-chunk.mjs:
@angular/core/fesm2022/core.mjs:
  (**
   * @license Angular v21.2.18
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
