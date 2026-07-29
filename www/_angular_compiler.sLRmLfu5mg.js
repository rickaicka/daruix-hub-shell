import { a as S, b as pe } from "@nf-internal/chunk-C4FLJMU7";
var Eu = new RegExp(`(\\:not\\()|(([\\.\\#]?)[-\\w]+)|(?:\\[([-.\\w*\\\\$]+)(?:=(["']?)([^\\]"']*)\\5)?\\])|(\\))|(\\s*,\\s*)`, "g"), as = class n {
    element = null;
    classNames = [];
    attrs = [];
    notSelectors = [];
    static parse(e) { let t = [], s = (l, c) => { c.notSelectors.length > 0 && !c.element && c.classNames.length == 0 && c.attrs.length == 0 && (c.element = "*"), l.push(c); }, r = new n, i, a = r, o = !1; for (Eu.lastIndex = 0; i = Eu.exec(e);) {
        if (i[1]) {
            if (o)
                throw new Error("Nesting :not in a selector is not allowed");
            o = !0, a = new n, r.notSelectors.push(a);
        }
        let l = i[2];
        if (l) {
            let h = i[3];
            h === "#" ? a.addAttribute("id", l.slice(1)) : h === "." ? a.addClassName(l.slice(1)) : a.setElement(l);
        }
        let c = i[4];
        if (c && a.addAttribute(a.unescapeAttribute(c), i[6]), i[7] && (o = !1, a = r), i[8]) {
            if (o)
                throw new Error("Multiple selectors in :not are not supported");
            s(t, r), r = a = new n;
        }
    } return s(t, r), t; }
    unescapeAttribute(e) { let t = "", s = !1; for (let r = 0; r < e.length; r++) {
        let i = e.charAt(r);
        if (i === "\\") {
            s = !0;
            continue;
        }
        if (i === "$" && !s)
            throw new Error(`Error in attribute selector "${e}". Unescaped "$" is not supported. Please escape with "\\$".`);
        s = !1, t += i;
    } return t; }
    escapeAttribute(e) { return e.replace(/\\/g, "\\\\").replace(/\$/g, "\\$"); }
    isElementSelector() { return this.hasElementSelector() && this.classNames.length == 0 && this.attrs.length == 0 && this.notSelectors.length === 0; }
    hasElementSelector() { return !!this.element; }
    setElement(e = null) { this.element = e; }
    getAttrs() { let e = []; return this.classNames.length > 0 && e.push("class", this.classNames.join(" ")), e.concat(this.attrs); }
    addAttribute(e, t = "") { this.attrs.push(e, t && t.toLowerCase() || ""); }
    addClassName(e) { this.classNames.push(e.toLowerCase()); }
    toString() { let e = this.element || ""; if (this.classNames && this.classNames.forEach(t => e += `.${t}`), this.attrs)
        for (let t = 0; t < this.attrs.length; t += 2) {
            let s = this.escapeAttribute(this.attrs[t]), r = this.attrs[t + 1];
            e += `[${s}${r ? "=" + r : ""}]`;
        } return this.notSelectors.forEach(t => e += `:not(${t})`), e; }
}, Fr = class n {
    static createNotMatcher(e) { let t = new n; return t.addSelectables(e, null), t; }
    _elementMap = new Map;
    _elementPartialMap = new Map;
    _classMap = new Map;
    _classPartialMap = new Map;
    _attrValueMap = new Map;
    _attrValuePartialMap = new Map;
    _listContexts = [];
    addSelectables(e, t) { let s = null; e.length > 1 && (s = new Yo(e), this._listContexts.push(s)); for (let r = 0; r < e.length; r++)
        this._addSelectable(e[r], t, s); }
    _addSelectable(e, t, s) { let r = this, i = e.element, a = e.classNames, o = e.attrs, l = new Qo(e, t, s); if (i && (o.length === 0 && a.length === 0 ? this._addTerminal(r._elementMap, i, l) : r = this._addPartial(r._elementPartialMap, i)), a)
        for (let c = 0; c < a.length; c++) {
            let h = o.length === 0 && c === a.length - 1, p = a[c];
            h ? this._addTerminal(r._classMap, p, l) : r = this._addPartial(r._classPartialMap, p);
        } if (o)
        for (let c = 0; c < o.length; c += 2) {
            let h = c === o.length - 2, p = o[c], m = o[c + 1];
            if (h) {
                let v = r._attrValueMap, w = v.get(p);
                w || (w = new Map, v.set(p, w)), this._addTerminal(w, m, l);
            }
            else {
                let v = r._attrValuePartialMap, w = v.get(p);
                w || (w = new Map, v.set(p, w)), r = this._addPartial(w, m);
            }
        } }
    _addTerminal(e, t, s) { let r = e.get(t); r || (r = [], e.set(t, r)), r.push(s); }
    _addPartial(e, t) { let s = e.get(t); return s || (s = new n, e.set(t, s)), s; }
    match(e, t) { let s = !1, r = e.element, i = e.classNames, a = e.attrs; for (let o = 0; o < this._listContexts.length; o++)
        this._listContexts[o].alreadyMatched = !1; if (s = this._matchTerminal(this._elementMap, r, e, t) || s, s = this._matchPartial(this._elementPartialMap, r, e, t) || s, i)
        for (let o = 0; o < i.length; o++) {
            let l = i[o];
            s = this._matchTerminal(this._classMap, l, e, t) || s, s = this._matchPartial(this._classPartialMap, l, e, t) || s;
        } if (a)
        for (let o = 0; o < a.length; o += 2) {
            let l = a[o], c = a[o + 1], h = this._attrValueMap.get(l);
            c && (s = this._matchTerminal(h, "", e, t) || s), s = this._matchTerminal(h, c, e, t) || s;
            let p = this._attrValuePartialMap.get(l);
            c && (s = this._matchPartial(p, "", e, t) || s), s = this._matchPartial(p, c, e, t) || s;
        } return s; }
    _matchTerminal(e, t, s, r) { if (!e || typeof t != "string")
        return !1; let i = e.get(t) || [], a = e.get("*"); if (a && (i = i.concat(a)), i.length === 0)
        return !1; let o, l = !1; for (let c = 0; c < i.length; c++)
        o = i[c], l = o.finalize(s, r) || l; return l; }
    _matchPartial(e, t, s, r) { if (!e || typeof t != "string")
        return !1; let i = e.get(t); return i ? i.match(s, r) : !1; }
}, Yo = class {
    selectors;
    alreadyMatched = !1;
    constructor(e) { this.selectors = e; }
}, Qo = class {
    selector;
    cbContext;
    listContext;
    notSelectors;
    constructor(e, t, s) { this.selector = e, this.cbContext = t, this.listContext = s, this.notSelectors = e.notSelectors; }
    finalize(e, t) { let s = !0; return this.notSelectors.length > 0 && (!this.listContext || !this.listContext.alreadyMatched) && (s = !Fr.createNotMatcher(this.notSelectors).match(e, null)), s && t && (!this.listContext || !this.listContext.alreadyMatched) && (this.listContext && (this.listContext.alreadyMatched = !0), t(this.selector, this.cbContext)), s; }
}, oa = class {
    registry;
    constructor(e) { this.registry = e; }
    match(e) { return this.registry.has(e) ? this.registry.get(e) : []; }
}, j = (function (n) { return n[n.NONE = 0] = "NONE", n[n.HTML = 1] = "HTML", n[n.STYLE = 2] = "STYLE", n[n.SCRIPT = 3] = "SCRIPT", n[n.URL = 4] = "URL", n[n.RESOURCE_URL = 5] = "RESOURCE_URL", n[n.ATTRIBUTE_NO_BINDING = 6] = "ATTRIBUTE_NO_BINDING", n; })(j || {}), ta, Su = "svg", Ld = "math";
function Bd() { return ta || (ta = {}, un(j.HTML, void 0, [["iframe", ["srcdoc"]], ["*", ["innerHTML", "outerHTML"]]]), un(j.STYLE, void 0, [["*", ["style"]]]), un(j.URL, void 0, [["*", ["formAction"]], ["area", ["href"]], ["a", ["href", "xlink:href"]], ["form", ["action"]], ["img", ["src"]], ["video", ["src"]]]), un(j.URL, Ld, [["annotation", ["href", "xlink:href"]], ["annotation-xml", ["href", "xlink:href"]], ["maction", ["href", "xlink:href"]], ["malignmark", ["href", "xlink:href"]], ["math", ["href", "xlink:href"]], ["mroot", ["href", "xlink:href"]], ["msqrt", ["href", "xlink:href"]], ["merror", ["href", "xlink:href"]], ["mfrac", ["href", "xlink:href"]], ["mglyph", ["href", "xlink:href"]], ["msub", ["href", "xlink:href"]], ["msup", ["href", "xlink:href"]], ["msubsup", ["href", "xlink:href"]], ["mmultiscripts", ["href", "xlink:href"]], ["mprescripts", ["href", "xlink:href"]], ["mi", ["href", "xlink:href"]], ["mn", ["href", "xlink:href"]], ["mo", ["href", "xlink:href"]], ["mpadded", ["href", "xlink:href"]], ["mphantom", ["href", "xlink:href"]], ["mrow", ["href", "xlink:href"]], ["ms", ["href", "xlink:href"]], ["mspace", ["href", "xlink:href"]], ["mstyle", ["href", "xlink:href"]], ["mtable", ["href", "xlink:href"]], ["mtd", ["href", "xlink:href"]], ["mtr", ["href", "xlink:href"]], ["mtext", ["href", "xlink:href"]], ["mover", ["href", "xlink:href"]], ["munder", ["href", "xlink:href"]], ["munderover", ["href", "xlink:href"]], ["semantics", ["href", "xlink:href"]], ["none", ["href", "xlink:href"]]]), un(j.RESOURCE_URL, void 0, [["base", ["href"]], ["embed", ["src"]], ["frame", ["src"]], ["iframe", ["src"]], ["link", ["href"]], ["object", ["codebase", "data"]]]), un(j.URL, Su, [["a", ["href", "xlink:href"]]]), un(j.ATTRIBUTE_NO_BINDING, Su, [["animate", ["attributeName", "values", "to", "from"]], ["set", ["to", "attributeName"]], ["animateMotion", ["attributeName"]], ["animateTransform", ["attributeName"]]]), un(j.ATTRIBUTE_NO_BINDING, void 0, [["unknown", ["attributeName", "values", "to", "from", "sandbox", "allow", "allowFullscreen", "referrerPolicy", "csp", "fetchPriority"]], ["iframe", ["sandbox", "allow", "allowFullscreen", "referrerPolicy", "csp", "fetchPriority"]]])), ta; }
function un(n, e, t) { for (let [s, r] of t) {
    let i = e && s !== "*" && s !== "unknown" ? `:${e}:${s}` : s;
    i = i.toLowerCase();
    for (let a of r)
        ta[`${i}|${a.toLowerCase()}`] = n;
} }
var Md = !0, At = (function (n) { return n[n.Emulated = 0] = "Emulated", n[n.None = 2] = "None", n[n.ShadowDom = 3] = "ShadowDom", n[n.ExperimentalIsolatedShadowDom = 4] = "ExperimentalIsolatedShadowDom", n; })(At || {}), Fi = (function (n) { return n[n.OnPush = 0] = "OnPush", n[n.Default = 1] = "Default", n[n.Eager = 1] = "Eager", n; })(Fi || {}), Ds = (function (n) { return n[n.None = 0] = "None", n[n.SignalBased = 1] = "SignalBased", n[n.HasDecoratorInputTransform = 2] = "HasDecoratorInputTransform", n; })(Ds || {}), Zo = { name: "custom-elements" }, Jo = { name: "no-errors-schema" }, Rd = Function, Os = (function (n) { return n[n.Error = 0] = "Error", n[n.Warning = 1] = "Warning", n[n.Ignore = 2] = "Ignore", n; })(Os || {});
function Fd(n) { let e = n.classNames && n.classNames.length ? [8, ...n.classNames] : []; return [n.element && n.element !== "*" ? n.element : "", ...n.attrs, ...e]; }
function $d(n) { let e = n.classNames && n.classNames.length ? [8, ...n.classNames] : []; return n.element ? [5, n.element, ...n.attrs, ...e] : n.attrs.length ? [3, ...n.attrs, ...e] : n.classNames && n.classNames.length ? [9, ...n.classNames] : []; }
function Od(n) { let e = Fd(n), t = n.notSelectors && n.notSelectors.length ? n.notSelectors.map(s => $d(s)) : []; return e.concat(...t); }
function mo(n) { return n ? as.parse(n).map(Od) : []; }
var uk = Object.freeze({ __proto__: null, CUSTOM_ELEMENTS_SCHEMA: Zo, get ChangeDetectionStrategy() { return Fi; }, get InputFlags() { return Ds; }, get MissingTranslationStrategy() { return Os; }, NO_ERRORS_SCHEMA: Jo, get SecurityContext() { return j; }, Type: Rd, get ViewEncapsulation() { return At; }, emitDistinctChangesOnlyDefaultValue: Md, parseSelectorToR3Selector: mo }), Lt = (function (n) { return n[n.Directive = 0] = "Directive", n[n.Component = 1] = "Component", n[n.Injectable = 2] = "Injectable", n[n.Pipe = 3] = "Pipe", n[n.NgModule = 4] = "NgModule", n; })(Lt || {});
var la;
function kp(n) { return n.id || _p(n); }
function _p(n) { return Ud(qd(n.nodes).join("") + `[${n.meaning}]`); }
function Gc(n) { return n.id || bp(n); }
function bp(n) { let e = new Ko, t = n.nodes.map(s => s.visit(e, null)); return Tp(t.join(""), n.meaning); }
var ca = class {
    visitText(e, t) { return e.value; }
    visitContainer(e, t) { return `[${e.children.map(s => s.visit(this)).join(", ")}]`; }
    visitIcu(e, t) { let s = Object.keys(e.cases).map(r => `${r} {${e.cases[r].visit(this)}}`); return `{${e.expression}, ${e.type}, ${s.join(", ")}}`; }
    visitTagPlaceholder(e, t) { return e.isVoid ? `<ph tag name="${e.startName}"/>` : `<ph tag name="${e.startName}">${e.children.map(s => s.visit(this)).join(", ")}</ph name="${e.closeName}">`; }
    visitPlaceholder(e, t) { return e.value ? `<ph name="${e.name}">${e.value}</ph>` : `<ph name="${e.name}"/>`; }
    visitIcuPlaceholder(e, t) { return `<ph icu name="${e.name}">${e.value.visit(this)}</ph>`; }
    visitBlockPlaceholder(e, t) { return `<ph block name="${e.startName}">${e.children.map(s => s.visit(this)).join(", ")}</ph name="${e.closeName}">`; }
}, Vd = new ca;
function qd(n) { return n.map(e => e.visit(Vd, null)); }
var Ko = class extends ca {
    visitIcu(e) { let t = Object.keys(e.cases).map(s => `${s} {${e.cases[s].visit(this)}}`); return `{${e.type}, ${t.join(", ")}}`; }
};
function Ud(n) { la ??= new TextEncoder; let e = [...la.encode(n)], t = jd(e, Xc.Big), s = e.length * 8, r = new Uint32Array(80), i = 1732584193, a = 4023233417, o = 2562383102, l = 271733878, c = 3285377520; t[s >> 5] |= 128 << 24 - s % 32, t[(s + 64 >> 9 << 4) + 15] = s; for (let h = 0; h < t.length; h += 16) {
    let p = i, m = a, v = o, w = l, C = c;
    for (let T = 0; T < 80; T++) {
        T < 16 ? r[T] = t[h + T] : r[T] = bo(r[T - 3] ^ r[T - 8] ^ r[T - 14] ^ r[T - 16], 1);
        let k = Hd(T, a, o, l), R = k[0], se = k[1], O = [bo(i, 5), R, c, se, r[T]].reduce(ys);
        c = l, l = o, o = bo(a, 30), a = i, i = O;
    }
    i = ys(i, p), a = ys(a, m), o = ys(o, v), l = ys(l, w), c = ys(c, C);
} return fr(i) + fr(a) + fr(o) + fr(l) + fr(c); }
function fr(n) { return (n >>> 0).toString(16).padStart(8, "0"); }
function Hd(n, e, t, s) { return n < 20 ? [e & t | ~e & s, 1518500249] : n < 40 ? [e ^ t ^ s, 1859775393] : n < 60 ? [e & t | e & s | t & s, 2400959708] : [e ^ t ^ s, 3395469782]; }
function xu(n) { la ??= new TextEncoder; let e = la.encode(n), t = new DataView(e.buffer, e.byteOffset, e.byteLength), s = yu(t, e.length, 0), r = yu(t, e.length, 102072); return s == 0 && (r == 0 || r == 1) && (s = s ^ 319790063, r = r ^ -1801410264), BigInt.asUintN(32, BigInt(s)) << BigInt(32) | BigInt.asUintN(32, BigInt(r)); }
function Tp(n, e = "") { let t = xu(n); return e && (t = BigInt.asUintN(64, t << BigInt(1)) | t >> BigInt(63) & BigInt(1), t += xu(e)), BigInt.asUintN(63, t).toString(); }
function yu(n, e, t) { let s = 2654435769, r = 2654435769, i = 0, a = e - 12; for (; i <= a; i += 12) {
    s += n.getUint32(i, !0), r += n.getUint32(i + 4, !0), t += n.getUint32(i + 8, !0);
    let l = Cu(s, r, t);
    s = l[0], r = l[1], t = l[2];
} let o = e - i; return t += e, o >= 4 ? (s += n.getUint32(i, !0), i += 4, o >= 8 ? (r += n.getUint32(i, !0), i += 4, o >= 9 && (t += n.getUint8(i++) << 8), o >= 10 && (t += n.getUint8(i++) << 16), o === 11 && (t += n.getUint8(i++) << 24)) : (o >= 5 && (r += n.getUint8(i++)), o >= 6 && (r += n.getUint8(i++) << 8), o === 7 && (r += n.getUint8(i++) << 16))) : (o >= 1 && (s += n.getUint8(i++)), o >= 2 && (s += n.getUint8(i++) << 8), o === 3 && (s += n.getUint8(i++) << 16)), Cu(s, r, t)[2]; }
function Cu(n, e, t) { return n -= e, n -= t, n ^= t >>> 13, e -= t, e -= n, e ^= n << 8, t -= n, t -= e, t ^= e >>> 13, n -= e, n -= t, n ^= t >>> 12, e -= t, e -= n, e ^= n << 16, t -= n, t -= e, t ^= e >>> 5, n -= e, n -= t, n ^= t >>> 3, e -= t, e -= n, e ^= n << 10, t -= n, t -= e, t ^= e >>> 15, [n, e, t]; }
var Xc = (function (n) { return n[n.Little = 0] = "Little", n[n.Big = 1] = "Big", n; })(Xc || {});
function ys(n, e) { return Wd(n, e)[1]; }
function Wd(n, e) { let t = (n & 65535) + (e & 65535), s = (n >>> 16) + (e >>> 16) + (t >>> 16); return [s >>> 16, s << 16 | t & 65535]; }
function bo(n, e) { return n << e | n >>> 32 - e; }
function jd(n, e) { let t = n.length + 3 >>> 2, s = []; for (let r = 0; r < t; r++)
    s[r] = zd(n, r * 4, e); return s; }
function Au(n, e) { return e >= n.length ? 0 : n[e]; }
function zd(n, e, t) { let s = 0; if (t === Xc.Big)
    for (let r = 0; r < 4; r++)
        s += Au(n, e + r) << 24 - 8 * r;
else
    for (let r = 0; r < 4; r++)
        s += Au(n, e + r) << 8 * r; return s; }
var Yc = (function (n) { return n[n.None = 0] = "None", n[n.Const = 1] = "Const", n; })(Yc || {}), yn = class {
    modifiers;
    constructor(e = Yc.None) { this.modifiers = e; }
    hasModifier(e) { return (this.modifiers & e) !== 0; }
}, Yt = (function (n) { return n[n.Dynamic = 0] = "Dynamic", n[n.Bool = 1] = "Bool", n[n.String = 2] = "String", n[n.Int = 3] = "Int", n[n.Number = 4] = "Number", n[n.Function = 5] = "Function", n[n.Inferred = 6] = "Inferred", n[n.None = 7] = "None", n; })(Yt || {}), _t = class extends yn {
    name;
    constructor(e, t) { super(t), this.name = e; }
    visitType(e, t) { return e.visitBuiltinType(this, t); }
}, st = class extends yn {
    value;
    typeParams;
    constructor(e, t, s = null) { super(t), this.value = e, this.typeParams = s; }
    visitType(e, t) { return e.visitExpressionType(this, t); }
}, el = class extends yn {
    of;
    constructor(e, t) { super(t), this.of = e; }
    visitType(e, t) { return e.visitArrayType(this, t); }
}, tl = class extends yn {
    valueType;
    constructor(e, t) { super(t), this.valueType = e || null; }
    visitType(e, t) { return e.visitMapType(this, t); }
}, ua = class extends yn {
    type;
    constructor(e, t) { super(t), this.type = e; }
    visitType(e, t) { return e.visitTransplantedType(this, t); }
}, re = new _t(Yt.Dynamic), vt = new _t(Yt.Inferred), Ip = new _t(Yt.Bool), Gd = new _t(Yt.Int), Cn = new _t(Yt.Number), go = new _t(Yt.String), Xd = new _t(Yt.Function), bt = new _t(Yt.None), Vs = (function (n) { return n[n.Minus = 0] = "Minus", n[n.Plus = 1] = "Plus", n; })(Vs || {}), x = (function (n) { return n[n.Equals = 0] = "Equals", n[n.NotEquals = 1] = "NotEquals", n[n.Assign = 2] = "Assign", n[n.Identical = 3] = "Identical", n[n.NotIdentical = 4] = "NotIdentical", n[n.Minus = 5] = "Minus", n[n.Plus = 6] = "Plus", n[n.Divide = 7] = "Divide", n[n.Multiply = 8] = "Multiply", n[n.Modulo = 9] = "Modulo", n[n.And = 10] = "And", n[n.Or = 11] = "Or", n[n.BitwiseOr = 12] = "BitwiseOr", n[n.BitwiseAnd = 13] = "BitwiseAnd", n[n.Lower = 14] = "Lower", n[n.LowerEquals = 15] = "LowerEquals", n[n.Bigger = 16] = "Bigger", n[n.BiggerEquals = 17] = "BiggerEquals", n[n.NullishCoalesce = 18] = "NullishCoalesce", n[n.Exponentiation = 19] = "Exponentiation", n[n.In = 20] = "In", n[n.InstanceOf = 21] = "InstanceOf", n[n.AdditionAssignment = 22] = "AdditionAssignment", n[n.SubtractionAssignment = 23] = "SubtractionAssignment", n[n.MultiplicationAssignment = 24] = "MultiplicationAssignment", n[n.DivisionAssignment = 25] = "DivisionAssignment", n[n.RemainderAssignment = 26] = "RemainderAssignment", n[n.ExponentiationAssignment = 27] = "ExponentiationAssignment", n[n.AndAssignment = 28] = "AndAssignment", n[n.OrAssignment = 29] = "OrAssignment", n[n.NullishCoalesceAssignment = 30] = "NullishCoalesceAssignment", n; })(x || {});
function Np(n, e) { return n == null || e == null ? n == e : n.isEquivalent(e); }
function Dp(n, e, t) { let s = n.length; if (s !== e.length)
    return !1; for (let r = 0; r < s; r++)
    if (!t(n[r], e[r]))
        return !1; return !0; }
function Ue(n, e) { return Dp(n, e, (t, s) => t.isEquivalent(s)); }
var Q = class {
    type;
    sourceSpan;
    constructor(e, t) { this.type = e || null, this.sourceSpan = t || null; }
    prop(e, t) { return new Ye(this, e, null, t); }
    key(e, t, s) { return new Vt(this, e, t, s); }
    callFn(e, t, s) { return new He(this, e, null, t, s); }
    instantiate(e, t, s) { return new Us(this, e, t, s); }
    conditional(e, t = null, s) { return new Tt(this, e, t, null, s); }
    equals(e, t) { return new z(x.Equals, this, e, null, t); }
    notEquals(e, t) { return new z(x.NotEquals, this, e, null, t); }
    identical(e, t) { return new z(x.Identical, this, e, null, t); }
    notIdentical(e, t) { return new z(x.NotIdentical, this, e, null, t); }
    minus(e, t) { return new z(x.Minus, this, e, null, t); }
    plus(e, t) { return new z(x.Plus, this, e, null, t); }
    divide(e, t) { return new z(x.Divide, this, e, null, t); }
    multiply(e, t) { return new z(x.Multiply, this, e, null, t); }
    modulo(e, t) { return new z(x.Modulo, this, e, null, t); }
    power(e, t) { return new z(x.Exponentiation, this, e, null, t); }
    and(e, t) { return new z(x.And, this, e, null, t); }
    bitwiseOr(e, t) { return new z(x.BitwiseOr, this, e, null, t); }
    bitwiseAnd(e, t) { return new z(x.BitwiseAnd, this, e, null, t); }
    or(e, t) { return new z(x.Or, this, e, null, t); }
    lower(e, t) { return new z(x.Lower, this, e, null, t); }
    lowerEquals(e, t) { return new z(x.LowerEquals, this, e, null, t); }
    bigger(e, t) { return new z(x.Bigger, this, e, null, t); }
    biggerEquals(e, t) { return new z(x.BiggerEquals, this, e, null, t); }
    isBlank(e) { return this.equals(Pp, e); }
    nullishCoalesce(e, t) { return new z(x.NullishCoalesce, this, e, null, t); }
    toStmt() { return new Ie(this, null); }
}, wt = class n extends Q {
    name;
    constructor(e, t, s) { super(t, s), this.name = e; }
    isEquivalent(e) { return e instanceof n && this.name === e.name; }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitReadVarExpr(this, t); }
    clone() { return new n(this.name, this.type, this.sourceSpan); }
    set(e) { return new z(x.Assign, this, e, null, this.sourceSpan); }
}, os = class n extends Q {
    expr;
    constructor(e, t, s) { super(t, s), this.expr = e; }
    visitExpression(e, t) { return e.visitTypeofExpr(this, t); }
    isEquivalent(e) { return e instanceof n && e.expr.isEquivalent(this.expr); }
    isConstant() { return this.expr.isConstant(); }
    clone() { return new n(this.expr.clone()); }
}, $r = class n extends Q {
    expr;
    constructor(e, t, s) { super(t, s), this.expr = e; }
    visitExpression(e, t) { return e.visitVoidExpr(this, t); }
    isEquivalent(e) { return e instanceof n && e.expr.isEquivalent(this.expr); }
    isConstant() { return this.expr.isConstant(); }
    clone() { return new n(this.expr.clone()); }
}, W = class n extends Q {
    node;
    constructor(e, t, s) { super(t, s), this.node = e; }
    isEquivalent(e) { return e instanceof n && this.node === e.node; }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitWrappedNodeExpr(this, t); }
    clone() { return new n(this.node, this.type, this.sourceSpan); }
}, He = class n extends Q {
    fn;
    args;
    pure;
    constructor(e, t, s, r, i = !1) { super(s, r), this.fn = e, this.args = t, this.pure = i; }
    get receiver() { return this.fn; }
    isEquivalent(e) { return e instanceof n && this.fn.isEquivalent(e.fn) && Ue(this.args, e.args) && this.pure === e.pure; }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitInvokeFunctionExpr(this, t); }
    clone() { return new n(this.fn.clone(), this.args.map(e => e.clone()), this.type, this.sourceSpan, this.pure); }
}, qs = class n extends Q {
    tag;
    template;
    constructor(e, t, s, r) { super(s, r), this.tag = e, this.template = t; }
    isEquivalent(e) { return e instanceof n && this.tag.isEquivalent(e.tag) && this.template.isEquivalent(e.template); }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitTaggedTemplateLiteralExpr(this, t); }
    clone() { return new n(this.tag.clone(), this.template.clone(), this.type, this.sourceSpan); }
}, Us = class n extends Q {
    classExpr;
    args;
    constructor(e, t, s, r) { super(s, r), this.classExpr = e, this.args = t; }
    isEquivalent(e) { return e instanceof n && this.classExpr.isEquivalent(e.classExpr) && Ue(this.args, e.args); }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitInstantiateExpr(this, t); }
    clone() { return new n(this.classExpr.clone(), this.args.map(e => e.clone()), this.type, this.sourceSpan); }
}, ls = class n extends Q {
    body;
    flags;
    constructor(e, t, s) { super(null, s), this.body = e, this.flags = t; }
    isEquivalent(e) { return e instanceof n && this.body === e.body && this.flags === e.flags; }
    isConstant() { return !0; }
    visitExpression(e, t) { return e.visitRegularExpressionLiteral(this, t); }
    clone() { return new n(this.body, this.flags, this.sourceSpan); }
}, ye = class n extends Q {
    value;
    constructor(e, t, s) { super(t, s), this.value = e; }
    isEquivalent(e) { return e instanceof n && this.value === e.value; }
    isConstant() { return !0; }
    visitExpression(e, t) { return e.visitLiteralExpr(this, t); }
    clone() { return new n(this.value, this.type, this.sourceSpan); }
}, Hs = class n extends Q {
    elements;
    expressions;
    constructor(e, t, s) { super(null, s), this.elements = e, this.expressions = t; }
    isEquivalent(e) { return e instanceof n && Dp(this.elements, e.elements, (t, s) => t.text === s.text) && Ue(this.expressions, e.expressions); }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitTemplateLiteralExpr(this, t); }
    clone() { return new n(this.elements.map(e => e.clone()), this.expressions.map(e => e.clone())); }
}, Or = class n extends Q {
    text;
    rawText;
    constructor(e, t, s) { super(go, t), this.text = e, this.rawText = s ?? nl(na(e)); }
    visitExpression(e, t) { return e.visitTemplateLiteralElementExpr(this, t); }
    isEquivalent(e) { return e instanceof n && e.text === this.text && e.rawText === this.rawText; }
    isConstant() { return !0; }
    clone() { return new n(this.text, this.sourceSpan, this.rawText); }
}, En = class {
    text;
    sourceSpan;
    constructor(e, t) { this.text = e, this.sourceSpan = t; }
}, Kn = class {
    text;
    sourceSpan;
    associatedMessage;
    constructor(e, t, s) { this.text = e, this.sourceSpan = t, this.associatedMessage = s; }
}, Yd = "|", ku = "@@", Qd = "\u241F", Vr = class n extends Q {
    metaBlock;
    messageParts;
    placeHolderNames;
    expressions;
    constructor(e, t, s, r, i) { super(go, i), this.metaBlock = e, this.messageParts = t, this.placeHolderNames = s, this.expressions = r; }
    isEquivalent(e) { return !1; }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitLocalizedString(this, t); }
    clone() { return new n(this.metaBlock, this.messageParts, this.placeHolderNames, this.expressions.map(e => e.clone()), this.sourceSpan); }
    serializeI18nHead() { let e = this.metaBlock.description || ""; return this.metaBlock.meaning && (e = `${this.metaBlock.meaning}${Yd}${e}`), this.metaBlock.customId && (e = `${e}${ku}${this.metaBlock.customId}`), this.metaBlock.legacyIds && this.metaBlock.legacyIds.forEach(t => { e = `${e}${Qd}${t}`; }), _u(e, this.messageParts[0].text, this.getMessagePartSourceSpan(0)); }
    getMessagePartSourceSpan(e) { return this.messageParts[e]?.sourceSpan ?? this.sourceSpan; }
    getPlaceholderSourceSpan(e) { return this.placeHolderNames[e]?.sourceSpan ?? this.expressions[e]?.sourceSpan ?? this.sourceSpan; }
    serializeI18nTemplatePart(e) { let t = this.placeHolderNames[e - 1], s = this.messageParts[e], r = t.text; return t.associatedMessage?.legacyIds.length === 0 && (r += `${ku}${Tp(t.associatedMessage.messageString, t.associatedMessage.meaning)}`), _u(r, s.text, this.getMessagePartSourceSpan(e)); }
}, na = n => n.replace(/\\/g, "\\\\"), Zd = n => n.replace(/^:/, "\\:"), Jd = n => n.replace(/:/g, "\\:"), nl = n => n.replace(/`/g, "\\`").replace(/\${/g, "$\\{");
function _u(n, e, t) { return n === "" ? { cooked: e, raw: nl(Zd(na(e))), range: t } : { cooked: `:${n}:${e}`, raw: nl(`:${Jd(na(n))}:${na(e)}`), range: t }; }
var sn = class n extends Q {
    value;
    typeParams;
    constructor(e, t, s = null, r) { super(t, r), this.value = e, this.typeParams = s; }
    isEquivalent(e) { return e instanceof n && this.value.name === e.value.name && this.value.moduleName === e.value.moduleName; }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitExternalExpr(this, t); }
    clone() { return new n(this.value, this.type, this.typeParams, this.sourceSpan); }
}, sl = class {
    moduleName;
    name;
    constructor(e, t) { this.moduleName = e, this.name = t; }
}, Tt = class n extends Q {
    condition;
    falseCase;
    trueCase;
    constructor(e, t, s = null, r, i) { super(r || t.type, i), this.condition = e, this.falseCase = s, this.trueCase = t; }
    isEquivalent(e) { return e instanceof n && this.condition.isEquivalent(e.condition) && this.trueCase.isEquivalent(e.trueCase) && Np(this.falseCase, e.falseCase); }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitConditionalExpr(this, t); }
    clone() { return new n(this.condition.clone(), this.trueCase.clone(), this.falseCase?.clone(), this.type, this.sourceSpan); }
}, cs = class n extends Q {
    url;
    urlComment;
    constructor(e, t, s) { super(null, t), this.url = e, this.urlComment = s; }
    isEquivalent(e) { return e instanceof n && this.url === e.url && this.urlComment === e.urlComment; }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitDynamicImportExpr(this, t); }
    clone() { return new n(typeof this.url == "string" ? this.url : this.url.clone(), this.sourceSpan, this.urlComment); }
}, Ws = class n extends Q {
    condition;
    constructor(e, t) { super(Ip, t), this.condition = e; }
    isEquivalent(e) { return e instanceof n && this.condition.isEquivalent(e.condition); }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitNotExpr(this, t); }
    clone() { return new n(this.condition.clone(), this.sourceSpan); }
}, J = class n {
    name;
    type;
    constructor(e, t = null) { this.name = e, this.type = t; }
    isEquivalent(e) { return this.name === e.name; }
    clone() { return new n(this.name, this.type); }
}, en = class n extends Q {
    params;
    statements;
    name;
    constructor(e, t, s, r, i) { super(s, r), this.params = e, this.statements = t, this.name = i; }
    isEquivalent(e) { return (e instanceof n || e instanceof bn) && Ue(this.params, e.params) && Ue(this.statements, e.statements); }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitFunctionExpr(this, t); }
    toDeclStmt(e, t) { return new bn(e, this.params, this.statements, this.type, t, this.sourceSpan); }
    clone() { return new n(this.params.map(e => e.clone()), this.statements, this.type, this.sourceSpan, this.name); }
}, $n = class rl extends Q {
    params;
    body;
    constructor(e, t, s, r) { super(s, r), this.params = e, this.body = t; }
    isEquivalent(e) { return !(e instanceof rl) || !Ue(this.params, e.params) ? !1 : this.body instanceof Q && e.body instanceof Q ? this.body.isEquivalent(e.body) : Array.isArray(this.body) && Array.isArray(e.body) ? Ue(this.body, e.body) : !1; }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitArrowFunctionExpr(this, t); }
    clone() { return new rl(this.params.map(e => e.clone()), Array.isArray(this.body) ? this.body : this.body.clone(), this.type, this.sourceSpan); }
    toDeclStmt(e, t) { return new he(e, this, vt, t, this.sourceSpan); }
}, rn = class n extends Q {
    operator;
    expr;
    parens;
    constructor(e, t, s, r, i = !0) { super(s || Cn, r), this.operator = e, this.expr = t, this.parens = i; }
    isEquivalent(e) { return e instanceof n && this.operator === e.operator && this.expr.isEquivalent(e.expr); }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitUnaryOperatorExpr(this, t); }
    clone() { return new n(this.operator, this.expr.clone(), this.type, this.sourceSpan, this.parens); }
}, Et = class n extends Q {
    expr;
    constructor(e, t, s) { super(t, s), this.expr = e; }
    visitExpression(e, t) { return e.visitParenthesizedExpr(this, t); }
    isEquivalent(e) { return e instanceof n && e.expr.isEquivalent(this.expr); }
    isConstant() { return this.expr.isConstant(); }
    clone() { return new n(this.expr.clone()); }
}, z = class n extends Q {
    operator;
    rhs;
    lhs;
    constructor(e, t, s, r, i) { super(r || t.type, i), this.operator = e, this.rhs = s, this.lhs = t; }
    isEquivalent(e) { return e instanceof n && this.operator === e.operator && this.lhs.isEquivalent(e.lhs) && this.rhs.isEquivalent(e.rhs); }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitBinaryOperatorExpr(this, t); }
    clone() { return new n(this.operator, this.lhs.clone(), this.rhs.clone(), this.type, this.sourceSpan); }
    isAssignment() { let e = this.operator; return e === x.Assign || e === x.AdditionAssignment || e === x.SubtractionAssignment || e === x.MultiplicationAssignment || e === x.DivisionAssignment || e === x.RemainderAssignment || e === x.ExponentiationAssignment || e === x.AndAssignment || e === x.OrAssignment || e === x.NullishCoalesceAssignment; }
}, Ye = class n extends Q {
    receiver;
    name;
    constructor(e, t, s, r) { super(s, r), this.receiver = e, this.name = t; }
    get index() { return this.name; }
    isEquivalent(e) { return e instanceof n && this.receiver.isEquivalent(e.receiver) && this.name === e.name; }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitReadPropExpr(this, t); }
    set(e) { return new z(x.Assign, this.receiver.prop(this.name), e, null, this.sourceSpan); }
    clone() { return new n(this.receiver.clone(), this.name, this.type, this.sourceSpan); }
}, Vt = class n extends Q {
    receiver;
    index;
    constructor(e, t, s, r) { super(s, r), this.receiver = e, this.index = t; }
    isEquivalent(e) { return e instanceof n && this.receiver.isEquivalent(e.receiver) && this.index.isEquivalent(e.index); }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitReadKeyExpr(this, t); }
    set(e) { return new z(x.Assign, this.receiver.key(this.index), e, null, this.sourceSpan); }
    clone() { return new n(this.receiver.clone(), this.index.clone(), this.type, this.sourceSpan); }
}, It = class n extends Q {
    entries;
    constructor(e, t, s) { super(t, s), this.entries = e; }
    isConstant() { return this.entries.every(e => e.isConstant()); }
    isEquivalent(e) { return e instanceof n && Ue(this.entries, e.entries); }
    visitExpression(e, t) { return e.visitLiteralArrayExpr(this, t); }
    clone() { return new n(this.entries.map(e => e.clone()), this.type, this.sourceSpan); }
}, us = class n {
    key;
    value;
    quoted;
    constructor(e, t, s) { this.key = e, this.value = t, this.quoted = s; }
    isEquivalent(e) { return this.key === e.key && this.value.isEquivalent(e.value); }
    clone() { return new n(this.key, this.value.clone(), this.quoted); }
    isConstant() { return this.value.isConstant(); }
}, qt = class n {
    expression;
    constructor(e) { this.expression = e; }
    isEquivalent(e) { return e instanceof n && this.expression.isEquivalent(e.expression); }
    clone() { return new n(this.expression.clone()); }
    isConstant() { return this.expression.isConstant(); }
}, St = class n extends Q {
    entries;
    valueType = null;
    constructor(e, t, s) { super(t, s), this.entries = e, t && (this.valueType = t.valueType); }
    isEquivalent(e) { return e instanceof n && Ue(this.entries, e.entries); }
    isConstant() { return this.entries.every(e => e.isConstant()); }
    visitExpression(e, t) { return e.visitLiteralMapExpr(this, t); }
    clone() { let e = this.entries.map(t => t.clone()); return new n(e, this.type, this.sourceSpan); }
}, il = class n extends Q {
    parts;
    constructor(e, t) { super(e[e.length - 1].type, t), this.parts = e; }
    isEquivalent(e) { return e instanceof n && Ue(this.parts, e.parts); }
    isConstant() { return !1; }
    visitExpression(e, t) { return e.visitCommaExpr(this, t); }
    clone() { return new n(this.parts.map(e => e.clone())); }
}, An = class n extends Q {
    expression;
    constructor(e, t) { super(null, t), this.expression = e; }
    isEquivalent(e) { return e instanceof n && this.expression.isEquivalent(e.expression); }
    isConstant() { return this.expression.isConstant(); }
    visitExpression(e, t) { return e.visitSpreadElementExpr(this, t); }
    clone() { return new n(this.expression.clone(), this.sourceSpan); }
}, kn = new ye(null, null, null), Pp = new ye(null, vt, null), ue = (function (n) { return n[n.None = 0] = "None", n[n.Final = 1] = "Final", n[n.Private = 2] = "Private", n[n.Exported = 4] = "Exported", n[n.Static = 8] = "Static", n; })(ue || {}), qr = class {
    text;
    multiline;
    trailingNewline;
    constructor(e, t, s) { this.text = e, this.multiline = t, this.trailingNewline = s; }
    toString() { return this.multiline ? ` ${this.text} ` : this.text; }
}, Ur = class extends qr {
    tags;
    constructor(e) { super("", !0, !0), this.tags = e; }
    toString() { return im(this.tags); }
}, _n = class {
    modifiers;
    sourceSpan;
    leadingComments;
    constructor(e = ue.None, t = null, s) { this.modifiers = e, this.sourceSpan = t, this.leadingComments = s; }
    hasModifier(e) { return (this.modifiers & e) !== 0; }
    addLeadingComment(e) { this.leadingComments = this.leadingComments ?? [], this.leadingComments.push(e); }
}, he = class n extends _n {
    name;
    value;
    type;
    constructor(e, t, s, r, i, a) { super(r, i, a), this.name = e, this.value = t, this.type = s || t && t.type || null; }
    isEquivalent(e) { return e instanceof n && this.name === e.name && (this.value ? !!e.value && this.value.isEquivalent(e.value) : !e.value); }
    visitStatement(e, t) { return e.visitDeclareVarStmt(this, t); }
}, bn = class n extends _n {
    name;
    params;
    statements;
    type;
    constructor(e, t, s, r, i, a, o) { super(i, a, o), this.name = e, this.params = t, this.statements = s, this.type = r || null; }
    isEquivalent(e) { return e instanceof n && Ue(this.params, e.params) && Ue(this.statements, e.statements); }
    visitStatement(e, t) { return e.visitDeclareFunctionStmt(this, t); }
}, Ie = class n extends _n {
    expr;
    constructor(e, t, s) { super(ue.None, t, s), this.expr = e; }
    isEquivalent(e) { return e instanceof n && this.expr.isEquivalent(e.expr); }
    visitStatement(e, t) { return e.visitExpressionStmt(this, t); }
}, me = class n extends _n {
    value;
    constructor(e, t = null, s) { super(ue.None, t, s), this.value = e; }
    isEquivalent(e) { return e instanceof n && this.value.isEquivalent(e.value); }
    visitStatement(e, t) { return e.visitReturnStmt(this, t); }
}, Hr = class n extends _n {
    condition;
    trueCase;
    falseCase;
    constructor(e, t, s = [], r, i) { super(ue.None, r, i), this.condition = e, this.trueCase = t, this.falseCase = s; }
    isEquivalent(e) { return e instanceof n && this.condition.isEquivalent(e.condition) && Ue(this.trueCase, e.trueCase) && Ue(this.falseCase, e.falseCase); }
    visitStatement(e, t) { return e.visitIfStmt(this, t); }
}, Kd = class {
    visitType(e, t) { return e; }
    visitExpression(e, t) { return e.type && e.type.visitType(this, t), e; }
    visitBuiltinType(e, t) { return this.visitType(e, t); }
    visitExpressionType(e, t) { return e.value.visitExpression(this, t), e.typeParams !== null && e.typeParams.forEach(s => this.visitType(s, t)), this.visitType(e, t); }
    visitArrayType(e, t) { return this.visitType(e, t); }
    visitMapType(e, t) { return this.visitType(e, t); }
    visitTransplantedType(e, t) { return e; }
    visitWrappedNodeExpr(e, t) { return e; }
    visitReadVarExpr(e, t) { return this.visitExpression(e, t); }
    visitDynamicImportExpr(e, t) { return this.visitExpression(e, t); }
    visitInvokeFunctionExpr(e, t) { return e.fn.visitExpression(this, t), this.visitAllExpressions(e.args, t), this.visitExpression(e, t); }
    visitTaggedTemplateLiteralExpr(e, t) { return e.tag.visitExpression(this, t), e.template.visitExpression(this, t), this.visitExpression(e, t); }
    visitInstantiateExpr(e, t) { return e.classExpr.visitExpression(this, t), this.visitAllExpressions(e.args, t), this.visitExpression(e, t); }
    visitLiteralExpr(e, t) { return this.visitExpression(e, t); }
    visitRegularExpressionLiteral(e, t) { return this.visitExpression(e, t); }
    visitLocalizedString(e, t) { return this.visitExpression(e, t); }
    visitExternalExpr(e, t) { return e.typeParams && e.typeParams.forEach(s => s.visitType(this, t)), this.visitExpression(e, t); }
    visitConditionalExpr(e, t) { return e.condition.visitExpression(this, t), e.trueCase.visitExpression(this, t), e.falseCase.visitExpression(this, t), this.visitExpression(e, t); }
    visitNotExpr(e, t) { return e.condition.visitExpression(this, t), this.visitExpression(e, t); }
    visitFunctionExpr(e, t) { return this.visitAllStatements(e.statements, t), this.visitExpression(e, t); }
    visitArrowFunctionExpr(e, t) { return Array.isArray(e.body) ? this.visitAllStatements(e.body, t) : e.body.visitExpression(this, t), this.visitExpression(e, t); }
    visitUnaryOperatorExpr(e, t) { return e.expr.visitExpression(this, t), this.visitExpression(e, t); }
    visitTypeofExpr(e, t) { return e.expr.visitExpression(this, t), this.visitExpression(e, t); }
    visitVoidExpr(e, t) { return e.expr.visitExpression(this, t), this.visitExpression(e, t); }
    visitBinaryOperatorExpr(e, t) { return e.lhs.visitExpression(this, t), e.rhs.visitExpression(this, t), this.visitExpression(e, t); }
    visitReadPropExpr(e, t) { return e.receiver.visitExpression(this, t), this.visitExpression(e, t); }
    visitReadKeyExpr(e, t) { return e.receiver.visitExpression(this, t), e.index.visitExpression(this, t), this.visitExpression(e, t); }
    visitLiteralArrayExpr(e, t) { return this.visitAllExpressions(e.entries, t), this.visitExpression(e, t); }
    visitLiteralMapExpr(e, t) { return e.entries.forEach(s => { s instanceof qt ? s.expression.visitExpression(this, t) : s.value.visitExpression(this, t); }), this.visitExpression(e, t); }
    visitCommaExpr(e, t) { return this.visitAllExpressions(e.parts, t), this.visitExpression(e, t); }
    visitTemplateLiteralExpr(e, t) { return this.visitAllExpressions(e.elements, t), this.visitAllExpressions(e.expressions, t), this.visitExpression(e, t); }
    visitTemplateLiteralElementExpr(e, t) { return this.visitExpression(e, t); }
    visitParenthesizedExpr(e, t) { return e.expr.visitExpression(this, t), this.visitExpression(e, t); }
    visitSpreadElementExpr(e, t) { return e.expression.visitExpression(this, t), this.visitExpression(e, t); }
    visitAllExpressions(e, t) { e.forEach(s => s.visitExpression(this, t)); }
    visitDeclareVarStmt(e, t) { return e.value && e.value.visitExpression(this, t), e.type && e.type.visitType(this, t), e; }
    visitDeclareFunctionStmt(e, t) { return this.visitAllStatements(e.statements, t), e.type && e.type.visitType(this, t), e; }
    visitExpressionStmt(e, t) { return e.expr.visitExpression(this, t), e; }
    visitReturnStmt(e, t) { return e.value.visitExpression(this, t), e; }
    visitIfStmt(e, t) { return e.condition.visitExpression(this, t), this.visitAllStatements(e.trueCase, t), this.visitAllStatements(e.falseCase, t), e; }
    visitAllStatements(e, t) { e.forEach(s => s.visitStatement(this, t)); }
};
function em(n, e = !1, t = !0) { return new qr(n, e, t); }
function Lp(n = []) { return new Ur(n); }
function D(n, e, t) { return new wt(n, e, t); }
function y(n, e = null, t) { return new sn(n, null, e, t); }
function tm(n, e, t) { return n != null ? xe(y(n, e, null), t) : null; }
function xe(n, e, t) { return new st(n, e, t); }
function nm(n, e) { return new ua(n, e); }
function ar(n) { return new os(n); }
function q(n, e, t) { return new It(n, e, t); }
function Ce(n, e = null) { return new St(n.map(t => new us(t.key, t.value, t.quoted)), e, null); }
function sm(n, e, t, s) { return new rn(n, e, t, s); }
function Bp(n, e) { return new Ws(n, e); }
function an(n, e, t, s, r) { return new en(n, e, t, s, r); }
function ie(n, e, t, s) { return new $n(n, e, t, s); }
function $i(n, e, t, s, r) { return new Hr(n, e, t, s, r); }
function Mp(n, e, t, s) { return new qs(n, e, t, s); }
function d(n, e, t) { return new ye(n, e, t); }
function Rp(n, e, t, s, r) { return new Vr(n, e, t, s, r); }
function rm(n) { return n instanceof ye && n.value === null; }
function bu(n) { let e = ""; if (n.tagName && (e += ` @${n.tagName}`), n.text) {
    if (n.text.match(/\/\*|\*\//))
        throw new Error('JSDoc text cannot contain "/*" and "*/"');
    e += " " + n.text.replace(/@/g, "\\@");
} return e; }
function im(n) {
    if (n.length === 0)
        return "";
    if (n.length === 1 && n[0].tagName && !n[0].text)
        return `*${bu(n[0])} `;
    let e = `*
`;
    for (let t of n)
        e += " *", e += bu(t).replace(/\n/g, `
 * `), e += `
`;
    return e += " ", e;
}
var pk = Object.freeze({ __proto__: null, ArrayType: el, ArrowFunctionExpr: $n, BOOL_TYPE: Ip, get BinaryOperator() { return x; }, BinaryOperatorExpr: z, BuiltinType: _t, get BuiltinTypeName() { return Yt; }, CommaExpr: il, ConditionalExpr: Tt, DYNAMIC_TYPE: re, DeclareFunctionStmt: bn, DeclareVarStmt: he, DynamicImportExpr: cs, Expression: Q, ExpressionStatement: Ie, ExpressionType: st, ExternalExpr: sn, ExternalReference: sl, FUNCTION_TYPE: Xd, FnParam: J, FunctionExpr: en, INFERRED_TYPE: vt, INT_TYPE: Gd, IfStmt: Hr, InstantiateExpr: Us, InvokeFunctionExpr: He, JSDocComment: Ur, LeadingComment: qr, LiteralArrayExpr: It, LiteralExpr: ye, LiteralMapExpr: St, LiteralMapPropertyAssignment: us, LiteralMapSpreadAssignment: qt, LiteralPiece: En, LocalizedString: Vr, MapType: tl, NONE_TYPE: bt, NULL_EXPR: kn, NUMBER_TYPE: Cn, NotExpr: Ws, ParenthesizedExpr: Et, PlaceholderPiece: Kn, ReadKeyExpr: Vt, ReadPropExpr: Ye, ReadVarExpr: wt, RecursiveAstVisitor: Kd, RegularExpressionLiteralExpr: ls, ReturnStatement: me, STRING_TYPE: go, SpreadElementExpr: An, Statement: _n, get StmtModifier() { return ue; }, TYPED_NULL_EXPR: Pp, TaggedTemplateLiteralExpr: qs, TemplateLiteralElementExpr: Or, TemplateLiteralExpr: Hs, TransplantedType: ua, Type: yn, get TypeModifier() { return Yc; }, TypeofExpr: os, get UnaryOperator() { return Vs; }, UnaryOperatorExpr: rn, VoidExpr: $r, WrappedNodeExpr: W, areAllEquivalent: Ue, arrowFn: ie, expressionType: xe, fn: an, ifStmt: $i, importExpr: y, importType: tm, isNull: rm, jsDocComment: Lp, leadingComment: em, literal: d, literalArr: q, literalMap: Ce, localizedString: Rp, not: Bp, nullSafeIsEquivalent: Np, taggedTemplate: Mp, transplantedType: nm, typeofExpr: ar, unary: sm, variable: D }), am = "_c", om = {}, lm = 50, ha = class n extends Q {
    resolved;
    original;
    shared = !1;
    constructor(e) { super(e.type), this.resolved = e, this.original = e; }
    visitExpression(e, t) { return t === om ? this.original.visitExpression(e, t) : this.resolved.visitExpression(e, t); }
    isEquivalent(e) { return e instanceof n && this.resolved.isEquivalent(e.resolved); }
    isConstant() { return !0; }
    clone() { throw new Error("Not supported."); }
    fixup(e) { this.resolved = e, this.shared = !0; }
}, pa = class {
    isClosureCompilerEnabled;
    statements = [];
    literals = new Map;
    literalFactories = new Map;
    sharedConstants = new Map;
    _claimedNames = new Map;
    nextNameIndex = 0;
    constructor(e = !1) { this.isClosureCompilerEnabled = e; }
    getConstLiteral(e, t) { if (e instanceof ye && !Tu(e) || e instanceof ha)
        return e; let s = Wr.INSTANCE.keyOf(e), r = this.literals.get(s), i = !1; if (r || (r = new ha(e), this.literals.set(s, r), i = !0), !i && !r.shared || i && t) {
        let a = this.freshName(), o, l;
        this.isClosureCompilerEnabled && Tu(e) ? (o = new en([], [new me(e)]), l = D(a).callFn([])) : (o = e, l = D(a)), this.statements.push(new he(a, o, vt, ue.Final)), r.fixup(l);
    } return r; }
    getSharedConstant(e, t) { let s = e.keyOf(t); if (!this.sharedConstants.has(s)) {
        let r = this.freshName();
        this.sharedConstants.set(s, D(r)), this.statements.push(e.toSharedConstantDeclaration(r, t));
    } return this.sharedConstants.get(s); }
    getSharedFunctionReference(e, t, s = !0) { let r = e instanceof $n; for (let a of this.statements)
        if (r && a instanceof he && a.value?.isEquivalent(e) || !r && a instanceof bn && e instanceof en && e.isEquivalent(a))
            return D(a.name); let i = s ? this.uniqueName(t) : t; return this.statements.push(e instanceof en ? e.toDeclStmt(i, ue.Final) : new he(i, e, vt, ue.Final, e.sourceSpan)), D(i); }
    uniqueName(e, t = !0) { let s = this._claimedNames.get(e) ?? 0, r = s === 0 && !t ? `${e}` : `${e}${s}`; return this._claimedNames.set(e, s + 1), r; }
    freshName() { return this.uniqueName(am); }
}, Wr = class n {
    static INSTANCE = new n;
    keyOf(e) { if (e instanceof ye && typeof e.value == "string")
        return `"${e.value}"`; if (e instanceof ye)
        return String(e.value); if (e instanceof ls)
        return `/${e.body}/${e.flags ?? ""}`; if (e instanceof It) {
        let t = [];
        for (let s of e.entries)
            t.push(this.keyOf(s));
        return `[${t.join(",")}]`;
    }
    else if (e instanceof St) {
        let t = [];
        for (let s of e.entries)
            if (s instanceof qt)
                t.push("..." + this.keyOf(s.expression));
            else {
                let r = s.key;
                s.quoted && (r = `"${r}"`), t.push(r + ":" + this.keyOf(s.value));
            }
        return `{${t.join(",")}}`;
    }
    else {
        if (e instanceof sn)
            return `import("${e.value.moduleName}", ${e.value.name})`;
        if (e instanceof wt)
            return `read(${e.name})`;
        if (e instanceof os)
            return `typeof(${this.keyOf(e.expr)})`;
        if (e instanceof An)
            return `...${this.keyOf(e.expression)}`;
        throw new Error(`${this.constructor.name} does not handle expressions of type ${e.constructor.name}`);
    } }
};
function Tu(n) { return n instanceof ye && typeof n.value == "string" && n.value.length >= lm; }
var g = "@angular/core", f = (() => { class n {
    static core = { name: null, moduleName: g };
    static namespaceHTML = { name: "\u0275\u0275namespaceHTML", moduleName: g };
    static namespaceMathML = { name: "\u0275\u0275namespaceMathML", moduleName: g };
    static namespaceSVG = { name: "\u0275\u0275namespaceSVG", moduleName: g };
    static element = { name: "\u0275\u0275element", moduleName: g };
    static elementStart = { name: "\u0275\u0275elementStart", moduleName: g };
    static elementEnd = { name: "\u0275\u0275elementEnd", moduleName: g };
    static domElement = { name: "\u0275\u0275domElement", moduleName: g };
    static domElementStart = { name: "\u0275\u0275domElementStart", moduleName: g };
    static domElementEnd = { name: "\u0275\u0275domElementEnd", moduleName: g };
    static domElementContainer = { name: "\u0275\u0275domElementContainer", moduleName: g };
    static domElementContainerStart = { name: "\u0275\u0275domElementContainerStart", moduleName: g };
    static domElementContainerEnd = { name: "\u0275\u0275domElementContainerEnd", moduleName: g };
    static domTemplate = { name: "\u0275\u0275domTemplate", moduleName: g };
    static domListener = { name: "\u0275\u0275domListener", moduleName: g };
    static advance = { name: "\u0275\u0275advance", moduleName: g };
    static syntheticHostProperty = { name: "\u0275\u0275syntheticHostProperty", moduleName: g };
    static syntheticHostListener = { name: "\u0275\u0275syntheticHostListener", moduleName: g };
    static attribute = { name: "\u0275\u0275attribute", moduleName: g };
    static classProp = { name: "\u0275\u0275classProp", moduleName: g };
    static elementContainerStart = { name: "\u0275\u0275elementContainerStart", moduleName: g };
    static elementContainerEnd = { name: "\u0275\u0275elementContainerEnd", moduleName: g };
    static elementContainer = { name: "\u0275\u0275elementContainer", moduleName: g };
    static styleMap = { name: "\u0275\u0275styleMap", moduleName: g };
    static classMap = { name: "\u0275\u0275classMap", moduleName: g };
    static styleProp = { name: "\u0275\u0275styleProp", moduleName: g };
    static interpolate = { name: "\u0275\u0275interpolate", moduleName: g };
    static interpolate1 = { name: "\u0275\u0275interpolate1", moduleName: g };
    static interpolate2 = { name: "\u0275\u0275interpolate2", moduleName: g };
    static interpolate3 = { name: "\u0275\u0275interpolate3", moduleName: g };
    static interpolate4 = { name: "\u0275\u0275interpolate4", moduleName: g };
    static interpolate5 = { name: "\u0275\u0275interpolate5", moduleName: g };
    static interpolate6 = { name: "\u0275\u0275interpolate6", moduleName: g };
    static interpolate7 = { name: "\u0275\u0275interpolate7", moduleName: g };
    static interpolate8 = { name: "\u0275\u0275interpolate8", moduleName: g };
    static interpolateV = { name: "\u0275\u0275interpolateV", moduleName: g };
    static nextContext = { name: "\u0275\u0275nextContext", moduleName: g };
    static resetView = { name: "\u0275\u0275resetView", moduleName: g };
    static templateCreate = { name: "\u0275\u0275template", moduleName: g };
    static defer = { name: "\u0275\u0275defer", moduleName: g };
    static deferWhen = { name: "\u0275\u0275deferWhen", moduleName: g };
    static deferOnIdle = { name: "\u0275\u0275deferOnIdle", moduleName: g };
    static deferOnImmediate = { name: "\u0275\u0275deferOnImmediate", moduleName: g };
    static deferOnTimer = { name: "\u0275\u0275deferOnTimer", moduleName: g };
    static deferOnHover = { name: "\u0275\u0275deferOnHover", moduleName: g };
    static deferOnInteraction = { name: "\u0275\u0275deferOnInteraction", moduleName: g };
    static deferOnViewport = { name: "\u0275\u0275deferOnViewport", moduleName: g };
    static deferPrefetchWhen = { name: "\u0275\u0275deferPrefetchWhen", moduleName: g };
    static deferPrefetchOnIdle = { name: "\u0275\u0275deferPrefetchOnIdle", moduleName: g };
    static deferPrefetchOnImmediate = { name: "\u0275\u0275deferPrefetchOnImmediate", moduleName: g };
    static deferPrefetchOnTimer = { name: "\u0275\u0275deferPrefetchOnTimer", moduleName: g };
    static deferPrefetchOnHover = { name: "\u0275\u0275deferPrefetchOnHover", moduleName: g };
    static deferPrefetchOnInteraction = { name: "\u0275\u0275deferPrefetchOnInteraction", moduleName: g };
    static deferPrefetchOnViewport = { name: "\u0275\u0275deferPrefetchOnViewport", moduleName: g };
    static deferHydrateWhen = { name: "\u0275\u0275deferHydrateWhen", moduleName: g };
    static deferHydrateNever = { name: "\u0275\u0275deferHydrateNever", moduleName: g };
    static deferHydrateOnIdle = { name: "\u0275\u0275deferHydrateOnIdle", moduleName: g };
    static deferHydrateOnImmediate = { name: "\u0275\u0275deferHydrateOnImmediate", moduleName: g };
    static deferHydrateOnTimer = { name: "\u0275\u0275deferHydrateOnTimer", moduleName: g };
    static deferHydrateOnHover = { name: "\u0275\u0275deferHydrateOnHover", moduleName: g };
    static deferHydrateOnInteraction = { name: "\u0275\u0275deferHydrateOnInteraction", moduleName: g };
    static deferHydrateOnViewport = { name: "\u0275\u0275deferHydrateOnViewport", moduleName: g };
    static deferEnableTimerScheduling = { name: "\u0275\u0275deferEnableTimerScheduling", moduleName: g };
    static conditionalCreate = { name: "\u0275\u0275conditionalCreate", moduleName: g };
    static conditionalBranchCreate = { name: "\u0275\u0275conditionalBranchCreate", moduleName: g };
    static conditional = { name: "\u0275\u0275conditional", moduleName: g };
    static repeater = { name: "\u0275\u0275repeater", moduleName: g };
    static repeaterCreate = { name: "\u0275\u0275repeaterCreate", moduleName: g };
    static repeaterTrackByIndex = { name: "\u0275\u0275repeaterTrackByIndex", moduleName: g };
    static repeaterTrackByIdentity = { name: "\u0275\u0275repeaterTrackByIdentity", moduleName: g };
    static componentInstance = { name: "\u0275\u0275componentInstance", moduleName: g };
    static text = { name: "\u0275\u0275text", moduleName: g };
    static enableBindings = { name: "\u0275\u0275enableBindings", moduleName: g };
    static disableBindings = { name: "\u0275\u0275disableBindings", moduleName: g };
    static getCurrentView = { name: "\u0275\u0275getCurrentView", moduleName: g };
    static textInterpolate = { name: "\u0275\u0275textInterpolate", moduleName: g };
    static textInterpolate1 = { name: "\u0275\u0275textInterpolate1", moduleName: g };
    static textInterpolate2 = { name: "\u0275\u0275textInterpolate2", moduleName: g };
    static textInterpolate3 = { name: "\u0275\u0275textInterpolate3", moduleName: g };
    static textInterpolate4 = { name: "\u0275\u0275textInterpolate4", moduleName: g };
    static textInterpolate5 = { name: "\u0275\u0275textInterpolate5", moduleName: g };
    static textInterpolate6 = { name: "\u0275\u0275textInterpolate6", moduleName: g };
    static textInterpolate7 = { name: "\u0275\u0275textInterpolate7", moduleName: g };
    static textInterpolate8 = { name: "\u0275\u0275textInterpolate8", moduleName: g };
    static textInterpolateV = { name: "\u0275\u0275textInterpolateV", moduleName: g };
    static restoreView = { name: "\u0275\u0275restoreView", moduleName: g };
    static pureFunction0 = { name: "\u0275\u0275pureFunction0", moduleName: g };
    static pureFunction1 = { name: "\u0275\u0275pureFunction1", moduleName: g };
    static pureFunction2 = { name: "\u0275\u0275pureFunction2", moduleName: g };
    static pureFunction3 = { name: "\u0275\u0275pureFunction3", moduleName: g };
    static pureFunction4 = { name: "\u0275\u0275pureFunction4", moduleName: g };
    static pureFunction5 = { name: "\u0275\u0275pureFunction5", moduleName: g };
    static pureFunction6 = { name: "\u0275\u0275pureFunction6", moduleName: g };
    static pureFunction7 = { name: "\u0275\u0275pureFunction7", moduleName: g };
    static pureFunction8 = { name: "\u0275\u0275pureFunction8", moduleName: g };
    static pureFunctionV = { name: "\u0275\u0275pureFunctionV", moduleName: g };
    static pipeBind1 = { name: "\u0275\u0275pipeBind1", moduleName: g };
    static pipeBind2 = { name: "\u0275\u0275pipeBind2", moduleName: g };
    static pipeBind3 = { name: "\u0275\u0275pipeBind3", moduleName: g };
    static pipeBind4 = { name: "\u0275\u0275pipeBind4", moduleName: g };
    static pipeBindV = { name: "\u0275\u0275pipeBindV", moduleName: g };
    static domProperty = { name: "\u0275\u0275domProperty", moduleName: g };
    static ariaProperty = { name: "\u0275\u0275ariaProperty", moduleName: g };
    static property = { name: "\u0275\u0275property", moduleName: g };
    static control = { name: "\u0275\u0275control", moduleName: g };
    static controlCreate = { name: "\u0275\u0275controlCreate", moduleName: g };
    static animationEnterListener = { name: "\u0275\u0275animateEnterListener", moduleName: g };
    static animationLeaveListener = { name: "\u0275\u0275animateLeaveListener", moduleName: g };
    static animationEnter = { name: "\u0275\u0275animateEnter", moduleName: g };
    static animationLeave = { name: "\u0275\u0275animateLeave", moduleName: g };
    static i18n = { name: "\u0275\u0275i18n", moduleName: g };
    static i18nAttributes = { name: "\u0275\u0275i18nAttributes", moduleName: g };
    static i18nExp = { name: "\u0275\u0275i18nExp", moduleName: g };
    static i18nStart = { name: "\u0275\u0275i18nStart", moduleName: g };
    static i18nEnd = { name: "\u0275\u0275i18nEnd", moduleName: g };
    static i18nApply = { name: "\u0275\u0275i18nApply", moduleName: g };
    static i18nPostprocess = { name: "\u0275\u0275i18nPostprocess", moduleName: g };
    static pipe = { name: "\u0275\u0275pipe", moduleName: g };
    static projection = { name: "\u0275\u0275projection", moduleName: g };
    static projectionDef = { name: "\u0275\u0275projectionDef", moduleName: g };
    static reference = { name: "\u0275\u0275reference", moduleName: g };
    static inject = { name: "\u0275\u0275inject", moduleName: g };
    static injectAttribute = { name: "\u0275\u0275injectAttribute", moduleName: g };
    static directiveInject = { name: "\u0275\u0275directiveInject", moduleName: g };
    static invalidFactory = { name: "\u0275\u0275invalidFactory", moduleName: g };
    static invalidFactoryDep = { name: "\u0275\u0275invalidFactoryDep", moduleName: g };
    static templateRefExtractor = { name: "\u0275\u0275templateRefExtractor", moduleName: g };
    static forwardRef = { name: "forwardRef", moduleName: g };
    static resolveForwardRef = { name: "resolveForwardRef", moduleName: g };
    static replaceMetadata = { name: "\u0275\u0275replaceMetadata", moduleName: g };
    static getReplaceMetadataURL = { name: "\u0275\u0275getReplaceMetadataURL", moduleName: g };
    static \u0275\u0275defineInjectable = { name: "\u0275\u0275defineInjectable", moduleName: g };
    static declareInjectable = { name: "\u0275\u0275ngDeclareInjectable", moduleName: g };
    static InjectableDeclaration = { name: "\u0275\u0275InjectableDeclaration", moduleName: g };
    static resolveWindow = { name: "\u0275\u0275resolveWindow", moduleName: g };
    static resolveDocument = { name: "\u0275\u0275resolveDocument", moduleName: g };
    static resolveBody = { name: "\u0275\u0275resolveBody", moduleName: g };
    static getComponentDepsFactory = { name: "\u0275\u0275getComponentDepsFactory", moduleName: g };
    static defineComponent = { name: "\u0275\u0275defineComponent", moduleName: g };
    static declareComponent = { name: "\u0275\u0275ngDeclareComponent", moduleName: g };
    static setComponentScope = { name: "\u0275\u0275setComponentScope", moduleName: g };
    static ChangeDetectionStrategy = { name: "ChangeDetectionStrategy", moduleName: g };
    static ViewEncapsulation = { name: "ViewEncapsulation", moduleName: g };
    static ComponentDeclaration = { name: "\u0275\u0275ComponentDeclaration", moduleName: g };
    static FactoryDeclaration = { name: "\u0275\u0275FactoryDeclaration", moduleName: g };
    static declareFactory = { name: "\u0275\u0275ngDeclareFactory", moduleName: g };
    static FactoryTarget = { name: "\u0275\u0275FactoryTarget", moduleName: g };
    static defineDirective = { name: "\u0275\u0275defineDirective", moduleName: g };
    static declareDirective = { name: "\u0275\u0275ngDeclareDirective", moduleName: g };
    static DirectiveDeclaration = { name: "\u0275\u0275DirectiveDeclaration", moduleName: g };
    static InjectorDef = { name: "\u0275\u0275InjectorDef", moduleName: g };
    static InjectorDeclaration = { name: "\u0275\u0275InjectorDeclaration", moduleName: g };
    static defineInjector = { name: "\u0275\u0275defineInjector", moduleName: g };
    static declareInjector = { name: "\u0275\u0275ngDeclareInjector", moduleName: g };
    static NgModuleDeclaration = { name: "\u0275\u0275NgModuleDeclaration", moduleName: g };
    static ModuleWithProviders = { name: "ModuleWithProviders", moduleName: g };
    static defineNgModule = { name: "\u0275\u0275defineNgModule", moduleName: g };
    static declareNgModule = { name: "\u0275\u0275ngDeclareNgModule", moduleName: g };
    static setNgModuleScope = { name: "\u0275\u0275setNgModuleScope", moduleName: g };
    static registerNgModuleType = { name: "\u0275\u0275registerNgModuleType", moduleName: g };
    static PipeDeclaration = { name: "\u0275\u0275PipeDeclaration", moduleName: g };
    static definePipe = { name: "\u0275\u0275definePipe", moduleName: g };
    static declarePipe = { name: "\u0275\u0275ngDeclarePipe", moduleName: g };
    static declareClassMetadata = { name: "\u0275\u0275ngDeclareClassMetadata", moduleName: g };
    static declareClassMetadataAsync = { name: "\u0275\u0275ngDeclareClassMetadataAsync", moduleName: g };
    static setClassMetadata = { name: "\u0275setClassMetadata", moduleName: g };
    static setClassMetadataAsync = { name: "\u0275setClassMetadataAsync", moduleName: g };
    static setClassDebugInfo = { name: "\u0275setClassDebugInfo", moduleName: g };
    static queryRefresh = { name: "\u0275\u0275queryRefresh", moduleName: g };
    static viewQuery = { name: "\u0275\u0275viewQuery", moduleName: g };
    static loadQuery = { name: "\u0275\u0275loadQuery", moduleName: g };
    static contentQuery = { name: "\u0275\u0275contentQuery", moduleName: g };
    static viewQuerySignal = { name: "\u0275\u0275viewQuerySignal", moduleName: g };
    static contentQuerySignal = { name: "\u0275\u0275contentQuerySignal", moduleName: g };
    static queryAdvance = { name: "\u0275\u0275queryAdvance", moduleName: g };
    static twoWayProperty = { name: "\u0275\u0275twoWayProperty", moduleName: g };
    static twoWayBindingSet = { name: "\u0275\u0275twoWayBindingSet", moduleName: g };
    static twoWayListener = { name: "\u0275\u0275twoWayListener", moduleName: g };
    static declareLet = { name: "\u0275\u0275declareLet", moduleName: g };
    static storeLet = { name: "\u0275\u0275storeLet", moduleName: g };
    static readContextLet = { name: "\u0275\u0275readContextLet", moduleName: g };
    static arrowFunction = { name: "\u0275\u0275arrowFunction", moduleName: g };
    static attachSourceLocations = { name: "\u0275\u0275attachSourceLocations", moduleName: g };
    static NgOnChangesFeature = { name: "\u0275\u0275NgOnChangesFeature", moduleName: g };
    static ControlFeature = { name: "\u0275\u0275ControlFeature", moduleName: g };
    static InheritDefinitionFeature = { name: "\u0275\u0275InheritDefinitionFeature", moduleName: g };
    static ProvidersFeature = { name: "\u0275\u0275ProvidersFeature", moduleName: g };
    static HostDirectivesFeature = { name: "\u0275\u0275HostDirectivesFeature", moduleName: g };
    static ExternalStylesFeature = { name: "\u0275\u0275ExternalStylesFeature", moduleName: g };
    static listener = { name: "\u0275\u0275listener", moduleName: g };
    static getInheritedFactory = { name: "\u0275\u0275getInheritedFactory", moduleName: g };
    static sanitizeHtml = { name: "\u0275\u0275sanitizeHtml", moduleName: g };
    static sanitizeStyle = { name: "\u0275\u0275sanitizeStyle", moduleName: g };
    static validateAttribute = { name: "\u0275\u0275validateAttribute", moduleName: g };
    static sanitizeResourceUrl = { name: "\u0275\u0275sanitizeResourceUrl", moduleName: g };
    static sanitizeScript = { name: "\u0275\u0275sanitizeScript", moduleName: g };
    static sanitizeUrl = { name: "\u0275\u0275sanitizeUrl", moduleName: g };
    static sanitizeUrlOrResourceUrl = { name: "\u0275\u0275sanitizeUrlOrResourceUrl", moduleName: g };
    static trustConstantHtml = { name: "\u0275\u0275trustConstantHtml", moduleName: g };
    static trustConstantResourceUrl = { name: "\u0275\u0275trustConstantResourceUrl", moduleName: g };
    static inputDecorator = { name: "Input", moduleName: g };
    static outputDecorator = { name: "Output", moduleName: g };
    static viewChildDecorator = { name: "ViewChild", moduleName: g };
    static viewChildrenDecorator = { name: "ViewChildren", moduleName: g };
    static contentChildDecorator = { name: "ContentChild", moduleName: g };
    static contentChildrenDecorator = { name: "ContentChildren", moduleName: g };
    static InputSignalBrandWriteType = { name: "\u0275INPUT_SIGNAL_BRAND_WRITE_TYPE", moduleName: g };
    static UnwrapDirectiveSignalInputs = { name: "\u0275UnwrapDirectiveSignalInputs", moduleName: g };
    static unwrapWritableSignal = { name: "\u0275unwrapWritableSignal", moduleName: g };
    static assertType = { name: "\u0275assertType", moduleName: g };
} return n; })(), cm = /-+([a-z0-9])/g;
function um(n) { return n.replace(cm, (...e) => e[1].toUpperCase()); }
function hm(n, e) { return Fp(n, ":", e); }
function pm(n, e) { return Fp(n, ".", e); }
function Fp(n, e, t) { let s = n.indexOf(e); return s == -1 ? t : [n.slice(0, s).trim(), n.slice(s + 1).trim()]; }
function fm(n) { return n === void 0 ? null : n; }
function fk(n) { return n.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1"); }
function dm(n) { let e = []; for (let t = 0; t < n.length; t++) {
    let s = n.charCodeAt(t);
    if (s >= 55296 && s <= 56319 && n.length > t + 1) {
        let r = n.charCodeAt(t + 1);
        r >= 56320 && r <= 57343 && (t++, s = (s - 55296 << 10) + r - 56320 + 65536);
    }
    s <= 127 ? e.push(s) : s <= 2047 ? e.push(s >> 6 & 31 | 192, s & 63 | 128) : s <= 65535 ? e.push(s >> 12 | 224, s >> 6 & 63 | 128, s & 63 | 128) : s <= 2097151 && e.push(s >> 18 & 7 | 240, s >> 12 & 63 | 128, s >> 6 & 63 | 128, s & 63 | 128);
} return e; }
function $p(n) {
    if (typeof n == "string")
        return n;
    if (Array.isArray(n))
        return `[${n.map($p).join(", ")}]`;
    if (n == null)
        return "" + n;
    let e = n.overriddenName || n.name;
    if (e)
        return `${e}`;
    if (!n.toString)
        return "object";
    let t = n.toString();
    if (t == null)
        return "" + t;
    let s = t.indexOf(`
`);
    return s >= 0 ? t.slice(0, s) : t;
}
var al = class {
    full;
    major;
    minor;
    patch;
    constructor(e) { this.full = e; let t = e.split("."); this.major = t[0], this.minor = t[1], this.patch = t.slice(2).join("."); }
}, sa = globalThis, mm = /^([1-9]|1[0-8])\./;
function Op(n) { return n.startsWith("0.") ? !0 : !mm.test(n); }
var gm = 3, vm = "# sourceMappingURL=data:application/json;base64,", ol = class {
    file;
    sourcesContent = new Map;
    lines = [];
    lastCol0 = 0;
    hasMappings = !1;
    constructor(e = null) { this.file = e; }
    addSource(e, t = null) { return this.sourcesContent.has(e) || this.sourcesContent.set(e, t), this; }
    addLine() { return this.lines.push([]), this.lastCol0 = 0, this; }
    addMapping(e, t, s, r) { if (!this.currentLine)
        throw new Error("A line must be added before mappings can be added"); if (t != null && !this.sourcesContent.has(t))
        throw new Error(`Unknown source file "${t}"`); if (e == null)
        throw new Error("The column in the generated code must be provided"); if (e < this.lastCol0)
        throw new Error("Mapping should be added in output order"); if (t && (s == null || r == null))
        throw new Error("The source location must be provided when a source url is provided"); return this.hasMappings = !0, this.lastCol0 = e, this.currentLine.push({ col0: e, sourceUrl: t, sourceLine0: s, sourceCol0: r }), this; }
    get currentLine() { return this.lines.slice(-1)[0]; }
    toJSON() { if (!this.hasMappings)
        return null; let e = new Map, t = [], s = []; Array.from(this.sourcesContent.keys()).forEach((c, h) => { e.set(c, h), t.push(c), s.push(this.sourcesContent.get(c) || null); }); let r = "", i = 0, a = 0, o = 0, l = 0; return this.lines.forEach(c => { i = 0, r += c.map(h => { let p = Hi(h.col0 - i); return i = h.col0, h.sourceUrl != null && (p += Hi(e.get(h.sourceUrl) - a), a = e.get(h.sourceUrl), p += Hi(h.sourceLine0 - o), o = h.sourceLine0, p += Hi(h.sourceCol0 - l), l = h.sourceCol0), p; }).join(","), r += ";"; }), r = r.slice(0, -1), { file: this.file || "", version: gm, sourceRoot: "", sources: t, sourcesContent: s, mappings: r }; }
    toJsComment() { return this.hasMappings ? "//" + vm + wm(JSON.stringify(this, null, 0)) : ""; }
};
function wm(n) { let e = "", t = dm(n); for (let s = 0; s < t.length;) {
    let r = t[s++], i = s < t.length ? t[s++] : null, a = s < t.length ? t[s++] : null;
    e += Cr(r >> 2), e += Cr((r & 3) << 4 | (i === null ? 0 : i >> 4)), e += i === null ? "=" : Cr((i & 15) << 2 | (a === null ? 0 : a >> 6)), e += i === null || a === null ? "=" : Cr(a & 63);
} return e; }
function Hi(n) { n = n < 0 ? (-n << 1) + 1 : n << 1; let e = ""; do {
    let t = n & 31;
    n = n >> 5, n > 0 && (t = t | 32), e += Cr(t);
} while (n > 0); return e; }
var Em = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function Cr(n) { if (n < 0 || n >= 64)
    throw new Error("Can only encode value in the range [0, 63]"); return Em[n]; }
var Sm = /'|\\|\n|\r|\$/g, xm = /^[$A-Z_][0-9A-Z_$]*$/i, ll = "  ", fa = class {
    indent;
    partsLength = 0;
    parts = [];
    srcSpans = [];
    constructor(e) { this.indent = e; }
}, ym = new Map([[x.And, "&&"], [x.Bigger, ">"], [x.BiggerEquals, ">="], [x.BitwiseOr, "|"], [x.BitwiseAnd, "&"], [x.Divide, "/"], [x.Assign, "="], [x.Equals, "=="], [x.Identical, "==="], [x.Lower, "<"], [x.LowerEquals, "<="], [x.Minus, "-"], [x.Modulo, "%"], [x.Exponentiation, "**"], [x.Multiply, "*"], [x.NotEquals, "!="], [x.NotIdentical, "!=="], [x.NullishCoalesce, "??"], [x.Or, "||"], [x.Plus, "+"], [x.In, "in"], [x.InstanceOf, "instanceof"], [x.AdditionAssignment, "+="], [x.SubtractionAssignment, "-="], [x.MultiplicationAssignment, "*="], [x.DivisionAssignment, "/="], [x.RemainderAssignment, "%="], [x.ExponentiationAssignment, "**="], [x.AndAssignment, "&&="], [x.OrAssignment, "||="], [x.NullishCoalesceAssignment, "??="]]), cl = class n {
    _indent;
    static createRoot() { return new n(0); }
    _lines;
    constructor(e) { this._indent = e, this._lines = [new fa(e)]; }
    get _currentLine() { return this._lines[this._lines.length - 1]; }
    println(e, t = "") { this.print(e || null, t, !0); }
    lineIsEmpty() { return this._currentLine.parts.length === 0; }
    lineLength() { return this._currentLine.indent * ll.length + this._currentLine.partsLength; }
    print(e, t, s = !1) { t.length > 0 && (this._currentLine.parts.push(t), this._currentLine.partsLength += t.length, this._currentLine.srcSpans.push(e && e.sourceSpan || null)), s && this._lines.push(new fa(this._indent)); }
    removeEmptyLastLine() { this.lineIsEmpty() && this._lines.pop(); }
    incIndent() { this._indent++, this.lineIsEmpty() && (this._currentLine.indent = this._indent); }
    decIndent() { this._indent--, this.lineIsEmpty() && (this._currentLine.indent = this._indent); }
    toSource() {
        return this.sourceLines.map(e => e.parts.length > 0 ? Iu(e.indent) + e.parts.join("") : "").join(`
`);
    }
    toSourceMapGenerator(e, t = 0) { let s = new ol(e), r = !1, i = () => { r || (s.addSource(e, " ").addMapping(0, e, 0, 0), r = !0); }; for (let a = 0; a < t; a++)
        s.addLine(), i(); return this.sourceLines.forEach((a, o) => { s.addLine(); let l = a.srcSpans, c = a.parts, h = a.indent * ll.length, p = 0; for (; p < l.length && !l[p];)
        h += c[p].length, p++; for (p < l.length && o === 0 && h === 0 ? r = !0 : i(); p < l.length;) {
        let m = l[p], v = m.start.file, w = m.start.line, C = m.start.col;
        for (s.addSource(v.url, v.content).addMapping(h, v.url, w, C), h += c[p].length, p++; p < l.length && (m === l[p] || !l[p]);)
            h += c[p].length, p++;
    } }), s; }
    spanOf(e, t) { let s = this._lines[e]; if (s) {
        let r = t - Iu(s.indent).length;
        for (let i = 0; i < s.parts.length; i++) {
            let a = s.parts[i];
            if (a.length > r)
                return s.srcSpans[i];
            r -= a.length;
        }
    } return null; }
    get sourceLines() { return this._lines.length && this._lines[this._lines.length - 1].parts.length === 0 ? this._lines.slice(0, -1) : this._lines; }
}, ul = class {
    _escapeDollarInStrings;
    lastIfCondition = null;
    constructor(e) { this._escapeDollarInStrings = e; }
    printLeadingComments(e, t) {
        if (e.leadingComments !== void 0)
            for (let s of e.leadingComments)
                s instanceof Ur ? t.print(e, `/*${s.toString()}*/`, s.trailingNewline) : s.multiline ? t.print(e, `/* ${s.text} */`, s.trailingNewline) : s.text.split(`
`).forEach(r => { t.println(e, `// ${r}`); });
    }
    visitExpressionStmt(e, t) { return this.printLeadingComments(e, t), e.expr.visitExpression(this, t), t.println(e, ";"), null; }
    visitReturnStmt(e, t) { return this.printLeadingComments(e, t), t.print(e, "return "), e.value.visitExpression(this, t), t.println(e, ";"), null; }
    visitIfStmt(e, t) { this.printLeadingComments(e, t), t.print(e, "if ("), this.lastIfCondition = e.condition, e.condition.visitExpression(this, t), this.lastIfCondition = null, t.print(e, ") {"); let s = e.falseCase != null && e.falseCase.length > 0; return e.trueCase.length <= 1 && !s ? (t.print(e, " "), this.visitAllStatements(e.trueCase, t), t.removeEmptyLastLine(), t.print(e, " ")) : (t.println(), t.incIndent(), this.visitAllStatements(e.trueCase, t), t.decIndent(), s && (t.println(e, "} else {"), t.incIndent(), this.visitAllStatements(e.falseCase, t), t.decIndent())), t.println(e, "}"), null; }
    visitInvokeFunctionExpr(e, t) { let s = e.fn instanceof $n; return s && t.print(e.fn, "("), e.fn.visitExpression(this, t), s && t.print(e.fn, ")"), t.print(e, "("), this.visitAllExpressions(e.args, t, ","), t.print(e, ")"), null; }
    visitTaggedTemplateLiteralExpr(e, t) { return e.tag.visitExpression(this, t), e.template.visitExpression(this, t), null; }
    visitTemplateLiteralExpr(e, t) { t.print(e, "`"); for (let s = 0; s < e.elements.length; s++) {
        e.elements[s].visitExpression(this, t);
        let r = s < e.expressions.length ? e.expressions[s] : null;
        r !== null && (t.print(r, "${"), r.visitExpression(this, t), t.print(r, "}"));
    } t.print(e, "`"); }
    visitTemplateLiteralElementExpr(e, t) { t.print(e, e.rawText); }
    visitWrappedNodeExpr(e, t) { throw new Error("Abstract emitter cannot visit WrappedNodeExpr."); }
    visitTypeofExpr(e, t) { t.print(e, "typeof "), e.expr.visitExpression(this, t); }
    visitVoidExpr(e, t) { t.print(e, "void "), e.expr.visitExpression(this, t); }
    visitReadVarExpr(e, t) { return t.print(e, e.name), null; }
    visitInstantiateExpr(e, t) { return t.print(e, "new "), e.classExpr.visitExpression(this, t), t.print(e, "("), this.visitAllExpressions(e.args, t, ","), t.print(e, ")"), null; }
    visitLiteralExpr(e, t) { let s = e.value; return typeof s == "string" ? t.print(e, Yn(s, this._escapeDollarInStrings)) : t.print(e, `${s}`), null; }
    visitRegularExpressionLiteral(e, t) { return t.print(e, `/${e.body}/${e.flags || ""}`), null; }
    visitLocalizedString(e, t) { let s = e.serializeI18nHead(); t.print(e, "$localize `" + s.raw); for (let r = 1; r < e.messageParts.length; r++)
        t.print(e, "${"), e.expressions[r - 1].visitExpression(this, t), t.print(e, `}${e.serializeI18nTemplatePart(r).raw}`); return t.print(e, "`"), null; }
    visitConditionalExpr(e, t) { return t.print(e, "("), e.condition.visitExpression(this, t), t.print(e, "? "), e.trueCase.visitExpression(this, t), t.print(e, ": "), e.falseCase.visitExpression(this, t), t.print(e, ")"), null; }
    visitDynamicImportExpr(e, t) { t.print(e, `import(${e.url})`); }
    visitNotExpr(e, t) { return t.print(e, "!"), e.condition.visitExpression(this, t), null; }
    visitUnaryOperatorExpr(e, t) { let s; switch (e.operator) {
        case Vs.Plus:
            s = "+";
            break;
        case Vs.Minus:
            s = "-";
            break;
        default: throw new Error(`Unknown operator ${e.operator}`);
    } let r = e !== this.lastIfCondition; return r && t.print(e, "("), t.print(e, s), e.expr.visitExpression(this, t), r && t.print(e, ")"), null; }
    visitBinaryOperatorExpr(e, t) { let s = ym.get(e.operator); if (!s)
        throw new Error(`Unknown operator ${e.operator}`); let r = e !== this.lastIfCondition; return r && t.print(e, "("), e.lhs.visitExpression(this, t), t.print(e, ` ${s} `), e.rhs.visitExpression(this, t), r && t.print(e, ")"), null; }
    visitReadPropExpr(e, t) { return e.receiver.visitExpression(this, t), t.print(e, "."), t.print(e, e.name), null; }
    visitReadKeyExpr(e, t) { return e.receiver.visitExpression(this, t), t.print(e, "["), e.index.visitExpression(this, t), t.print(e, "]"), null; }
    visitLiteralArrayExpr(e, t) { return t.print(e, "["), this.visitAllExpressions(e.entries, t, ","), t.print(e, "]"), null; }
    visitLiteralMapExpr(e, t) { return t.print(e, "{"), this.visitAllObjects(s => { s instanceof qt ? (t.print(e, "..."), s.expression.visitExpression(this, t)) : (t.print(e, `${Yn(s.key, this._escapeDollarInStrings, s.quoted)}:`), s.value.visitExpression(this, t)); }, e.entries, t, ","), t.print(e, "}"), null; }
    visitCommaExpr(e, t) { return t.print(e, "("), this.visitAllExpressions(e.parts, t, ","), t.print(e, ")"), null; }
    visitParenthesizedExpr(e, t) { e.expr.visitExpression(this, t); }
    visitSpreadElementExpr(e, t) { t.print(e, "..."), e.expression.visitExpression(this, t); }
    visitAllExpressions(e, t, s) { this.visitAllObjects(r => r.visitExpression(this, t), e, t, s); }
    visitAllObjects(e, t, s, r) { let i = !1; for (let a = 0; a < t.length; a++)
        a > 0 && (s.lineLength() > 80 ? (s.print(null, r, !0), i || (s.incIndent(), s.incIndent(), i = !0)) : s.print(null, r, !1)), e(t[a]); i && (s.decIndent(), s.decIndent()); }
    visitAllStatements(e, t) { e.forEach(s => s.visitStatement(this, t)); }
};
function Yn(n, e, t = !0) {
    if (n == null)
        return null;
    let s = n.replace(Sm, (...i) => i[0] == "$" ? e ? "\\$" : "$" : i[0] == `
` ? "\\n" : i[0] == "\r" ? "\\r" : `\\${i[0]}`);
    return t || !xm.test(s) ? `'${s}'` : s;
}
function Iu(n) { let e = ""; for (let t = 0; t < n; t++)
    e += ll; return e; }
function vo(n, e) { if (e === 0)
    return xe(n); let t = []; for (let s = 0; s < e; s++)
    t.push(re); return xe(n, void 0, t); }
function Cm(n, e) { let t = Yn(e, !1, !1); return t !== e ? `${n}[${t}]` : `${n}.${e}`; }
function Am(n) { return Vp("ngJitMode", n); }
function jr(n) { return Vp("ngDevMode", n); }
function Vp(n, e) { let t = new sn({ name: n, moduleName: null }), s = new z(x.Identical, new os(t), d("undefined")), r = new z(x.Or, s, t, void 0, void 0); return new z(x.And, r, e); }
function Ee(n) { let e = new W(n); return { value: e, type: e }; }
function kt(n, e) { let t = q(n.map(s => s.value)); return e ? ie([], t) : t; }
function Qc(n, e) { return { expression: n, forwardRef: e }; }
function Ps({ expression: n, forwardRef: e }) { switch (e) {
    case 0:
    case 1: return n;
    case 2: return Zc(n);
} }
function Zc(n) { return y(f.forwardRef).callFn([ie([], n)]); }
var da = (function (n) { return n[n.Class = 0] = "Class", n[n.Function = 1] = "Function", n; })(da || {});
function zn(n) { let e = D("__ngFactoryType__"), t = null, s = Du(n) ? e : new z(x.Or, e, n.type.value), r = null; n.deps !== null ? n.deps !== "invalid" && (r = new Us(s, Nu(n.deps, n.target))) : (t = D(`\u0275${n.name}_BaseFactory`), r = t.callFn([s])); let i = [], a = null; function o(c) { let h = D("__ngConditionalFactory__"); i.push(new he(h.name, kn, vt)); let p = r !== null ? h.set(r).toStmt() : y(f.invalidFactory).callFn([]).toStmt(); return i.push($i(e, [p], [h.set(c).toStmt()])), h; } if (Du(n)) {
    let c = Nu(n.delegateDeps, n.target), h = new (n.delegateType === da.Class ? Us : He)(n.delegate, c);
    a = o(h);
}
else
    Tm(n) ? a = o(n.expression) : a = r; if (a === null)
    i.push(y(f.invalidFactory).callFn([]).toStmt());
else if (t !== null) {
    let c = y(f.getInheritedFactory).callFn([n.type.value]), h = new z(x.Or, t, t.set(c));
    i.push(new me(h.callFn([s])));
}
else
    i.push(new me(a)); let l = an([new J(e.name, re)], i, vt, void 0, `${n.name}_Factory`); return t !== null && (l = ie([], [new he(t.name), new me(l)]).callFn([], void 0, !0)), { expression: l, statements: [], type: qp(n) }; }
function qp(n) { let e = n.deps !== null && n.deps !== "invalid" ? _m(n.deps) : bt; return xe(y(f.FactoryDeclaration, [vo(n.type.type, n.typeArgumentCount), e])); }
function Nu(n, e) { return n.map((t, s) => km(t, e, s)); }
function km(n, e, t) { if (n.token === null)
    return y(f.invalidFactoryDep).callFn([d(t)]); if (n.attributeNameType === null) {
    let s = 0 | (n.self ? 2 : 0) | (n.skipSelf ? 4 : 0) | (n.host ? 1 : 0) | (n.optional ? 8 : 0) | (e === Lt.Pipe ? 16 : 0), r = s !== 0 || n.optional ? d(s) : null, i = [n.token];
    r && i.push(r);
    let a = Im(e);
    return y(a).callFn(i);
}
else
    return y(f.injectAttribute).callFn([n.token]); }
function _m(n) { let e = !1, t = n.map(s => { let r = bm(s); return r !== null ? (e = !0, r) : d(null); }); return e ? xe(q(t)) : bt; }
function bm(n) { let e = []; return n.attributeNameType !== null && e.push({ key: "attribute", value: n.attributeNameType, quoted: !1 }), n.optional && e.push({ key: "optional", value: d(!0), quoted: !1 }), n.host && e.push({ key: "host", value: d(!0), quoted: !1 }), n.self && e.push({ key: "self", value: d(!0), quoted: !1 }), n.skipSelf && e.push({ key: "skipSelf", value: d(!0), quoted: !1 }), e.length > 0 ? Ce(e) : null; }
function Du(n) { return n.delegateType !== void 0; }
function Tm(n) { return n.expression !== void 0; }
function Im(n) { switch (n) {
    case Lt.Component:
    case Lt.Directive:
    case Lt.Pipe: return f.directiveInject;
    case Lt.NgModule:
    case Lt.Injectable:
    default: return f.inject;
} }
var hs = class {
    start;
    end;
    constructor(e, t) { this.start = e, this.end = t; }
    toAbsolute(e) { return new nt(e + this.start, e + this.end); }
}, te = class {
    span;
    sourceSpan;
    constructor(e, t) { this.span = e, this.sourceSpan = t; }
    toString() { return "AST"; }
}, zr = class extends te {
    nameSpan;
    constructor(e, t, s) { super(e, t), this.nameSpan = s; }
}, De = class extends te {
    visit(e, t = null) { return e.visitEmptyExpr?.(this, t); }
}, Ut = class extends te {
    visit(e, t = null) { return e.visitImplicitReceiver(this, t); }
}, Gr = class extends te {
    visit(e, t = null) { return e.visitThisReceiver?.(this, t); }
}, js = class extends te {
    expressions;
    constructor(e, t, s) { super(e, t), this.expressions = s; }
    visit(e, t = null) { return e.visitChain(this, t); }
}, ma = class extends te {
    condition;
    trueExp;
    falseExp;
    constructor(e, t, s, r, i) { super(e, t), this.condition = s, this.trueExp = r, this.falseExp = i; }
    visit(e, t = null) { return e.visitConditional(this, t); }
}, $t = class extends zr {
    receiver;
    name;
    constructor(e, t, s, r, i) { super(e, t, s), this.receiver = r, this.name = i; }
    visit(e, t = null) { return e.visitPropertyRead(this, t); }
}, Xr = class extends zr {
    receiver;
    name;
    constructor(e, t, s, r, i) { super(e, t, s), this.receiver = r, this.name = i; }
    visit(e, t = null) { return e.visitSafePropertyRead(this, t); }
}, ps = class extends te {
    receiver;
    key;
    constructor(e, t, s, r) { super(e, t), this.receiver = s, this.key = r; }
    visit(e, t = null) { return e.visitKeyedRead(this, t); }
}, Yr = class extends te {
    receiver;
    key;
    constructor(e, t, s, r) { super(e, t), this.receiver = s, this.key = r; }
    visit(e, t = null) { return e.visitSafeKeyedRead(this, t); }
}, ra = (function (n) { return n[n.ReferencedByName = 0] = "ReferencedByName", n[n.ReferencedDirectly = 1] = "ReferencedDirectly", n; })(ra || {}), ga = class extends zr {
    exp;
    name;
    args;
    type;
    constructor(e, t, s, r, i, a, o) { super(e, t, o), this.exp = s, this.name = r, this.args = i, this.type = a; }
    visit(e, t = null) { return e.visitPipe(this, t); }
}, je = class extends te {
    value;
    constructor(e, t, s) { super(e, t), this.value = s; }
    visit(e, t = null) { return e.visitLiteralPrimitive(this, t); }
}, Qr = class extends te {
    expressions;
    constructor(e, t, s) { super(e, t), this.expressions = s; }
    visit(e, t = null) { return e.visitLiteralArray(this, t); }
}, va = class extends te {
    expression;
    constructor(e, t, s) { super(e, t), this.expression = s; }
    visit(e, t = null) { return e.visitSpreadElement(this, t); }
}, fs = class extends te {
    keys;
    values;
    constructor(e, t, s, r) { super(e, t), this.keys = s, this.values = r; }
    visit(e, t = null) { return e.visitLiteralMap(this, t); }
}, Oi = class extends te {
    strings;
    expressions;
    constructor(e, t, s, r) { super(e, t), this.strings = s, this.expressions = r; }
    visit(e, t = null) { return e.visitInterpolation(this, t); }
}, Me = class extends te {
    operation;
    left;
    right;
    constructor(e, t, s, r, i) { super(e, t), this.operation = s, this.left = r, this.right = i; }
    visit(e, t = null) { return e.visitBinary(this, t); }
    static isAssignmentOperation(e) { return e === "=" || e === "+=" || e === "-=" || e === "*=" || e === "/=" || e === "%=" || e === "**=" || e === "&&=" || e === "||=" || e === "??="; }
}, Fs = class n extends Me {
    operator;
    expr;
    left = null;
    right = null;
    operation = null;
    static createMinus(e, t, s) { return new n(e, t, "-", s, "-", new je(e, t, 0), s); }
    static createPlus(e, t, s) { return new n(e, t, "+", s, "-", s, new je(e, t, 0)); }
    constructor(e, t, s, r, i, a, o) { super(e, t, i, a, o), this.operator = s, this.expr = r; }
    visit(e, t = null) { return e.visitUnary !== void 0 ? e.visitUnary(this, t) : e.visitBinary(this, t); }
}, Zr = class extends te {
    expression;
    constructor(e, t, s) { super(e, t), this.expression = s; }
    visit(e, t = null) { return e.visitPrefixNot(this, t); }
}, Jr = class extends te {
    expression;
    constructor(e, t, s) { super(e, t), this.expression = s; }
    visit(e, t = null) { return e.visitTypeofExpression(this, t); }
}, Kr = class extends te {
    expression;
    constructor(e, t, s) { super(e, t), this.expression = s; }
    visit(e, t = null) { return e.visitVoidExpression(this, t); }
}, ei = class extends te {
    expression;
    constructor(e, t, s) { super(e, t), this.expression = s; }
    visit(e, t = null) { return e.visitNonNullAssert(this, t); }
}, zs = class extends te {
    receiver;
    args;
    argumentSpan;
    constructor(e, t, s, r, i) { super(e, t), this.receiver = s, this.args = r, this.argumentSpan = i; }
    visit(e, t = null) { return e.visitCall(this, t); }
}, wa = class extends te {
    receiver;
    args;
    argumentSpan;
    constructor(e, t, s, r, i) { super(e, t), this.receiver = s, this.args = r, this.argumentSpan = i; }
    visit(e, t = null) { return e.visitSafeCall(this, t); }
}, ti = class extends te {
    tag;
    template;
    constructor(e, t, s, r) { super(e, t), this.tag = s, this.template = r; }
    visit(e, t) { return e.visitTaggedTemplateLiteral(this, t); }
}, ni = class extends te {
    elements;
    expressions;
    constructor(e, t, s, r) { super(e, t), this.elements = s, this.expressions = r; }
    visit(e, t) { return e.visitTemplateLiteral(this, t); }
}, Ea = class extends te {
    text;
    constructor(e, t, s) { super(e, t), this.text = s; }
    visit(e, t) { return e.visitTemplateLiteralElement(this, t); }
}, si = class extends te {
    expression;
    constructor(e, t, s) { super(e, t), this.expression = s; }
    visit(e, t) { return e.visitParenthesizedExpression(this, t); }
}, hl = class {
    name;
    span;
    sourceSpan;
    constructor(e, t, s) { this.name = e, this.span = t, this.sourceSpan = s; }
}, Sa = class extends te {
    parameters;
    body;
    constructor(e, t, s, r) { super(e, t), this.parameters = s, this.body = r; }
    visit(e, t) { return e.visitArrowFunction(this, t); }
}, xa = class extends te {
    body;
    flags;
    constructor(e, t, s, r) { super(e, t), this.body = s, this.flags = r; }
    visit(e, t) { return e.visitRegularExpressionLiteral(this, t); }
}, nt = class {
    start;
    end;
    constructor(e, t) { this.start = e, this.end = t; }
}, Ge = class extends te {
    ast;
    source;
    location;
    errors;
    constructor(e, t, s, r, i) { super(new hs(0, t === null ? 0 : t.length), new nt(r, t === null ? r : r + t.length)), this.ast = e, this.source = t, this.location = s, this.errors = i; }
    visit(e, t = null) { return e.visitASTWithSource ? e.visitASTWithSource(this, t) : this.ast.visit(e, t); }
    toString() { return `${this.source} in ${this.location}`; }
}, ri = class {
    sourceSpan;
    key;
    value;
    constructor(e, t, s) { this.sourceSpan = e, this.key = t, this.value = s; }
}, pl = class {
    sourceSpan;
    key;
    value;
    constructor(e, t, s) { this.sourceSpan = e, this.key = t, this.value = s; }
}, Gs = class {
    visit(e, t) { e.visit(this, t); }
    visitUnary(e, t) { this.visit(e.expr, t); }
    visitBinary(e, t) { this.visit(e.left, t), this.visit(e.right, t); }
    visitChain(e, t) { this.visitAll(e.expressions, t); }
    visitConditional(e, t) { this.visit(e.condition, t), this.visit(e.trueExp, t), this.visit(e.falseExp, t); }
    visitPipe(e, t) { this.visit(e.exp, t), this.visitAll(e.args, t); }
    visitImplicitReceiver(e, t) { }
    visitThisReceiver(e, t) { }
    visitInterpolation(e, t) { this.visitAll(e.expressions, t); }
    visitKeyedRead(e, t) { this.visit(e.receiver, t), this.visit(e.key, t); }
    visitLiteralArray(e, t) { this.visitAll(e.expressions, t); }
    visitLiteralMap(e, t) { this.visitAll(e.values, t); }
    visitLiteralPrimitive(e, t) { }
    visitPrefixNot(e, t) { this.visit(e.expression, t); }
    visitTypeofExpression(e, t) { this.visit(e.expression, t); }
    visitVoidExpression(e, t) { this.visit(e.expression, t); }
    visitNonNullAssert(e, t) { this.visit(e.expression, t); }
    visitPropertyRead(e, t) { this.visit(e.receiver, t); }
    visitSafePropertyRead(e, t) { this.visit(e.receiver, t); }
    visitSafeKeyedRead(e, t) { this.visit(e.receiver, t), this.visit(e.key, t); }
    visitCall(e, t) { this.visit(e.receiver, t), this.visitAll(e.args, t); }
    visitSafeCall(e, t) { this.visit(e.receiver, t), this.visitAll(e.args, t); }
    visitTemplateLiteral(e, t) { for (let s = 0; s < e.elements.length; s++) {
        this.visit(e.elements[s], t);
        let r = s < e.expressions.length ? e.expressions[s] : null;
        r !== null && this.visit(r, t);
    } }
    visitTemplateLiteralElement(e, t) { }
    visitTaggedTemplateLiteral(e, t) { this.visit(e.tag, t), this.visit(e.template, t); }
    visitParenthesizedExpression(e, t) { this.visit(e.expression, t); }
    visitArrowFunction(e, t) { this.visit(e.body, t); }
    visitRegularExpressionLiteral(e, t) { }
    visitSpreadElement(e, t) { this.visit(e.expression, t); }
    visitEmptyExpr(e, t) { }
    visitAll(e, t) { for (let s of e)
        this.visit(s, t); }
}, Ls = class {
    name;
    expression;
    type;
    sourceSpan;
    keySpan;
    valueSpan;
    isLiteral;
    isLegacyAnimation;
    isAnimation;
    constructor(e, t, s, r, i, a) { this.name = e, this.expression = t, this.type = s, this.sourceSpan = r, this.keySpan = i, this.valueSpan = a, this.isLiteral = this.type === Pt.LITERAL_ATTR, this.isLegacyAnimation = this.type === Pt.LEGACY_ANIMATION, this.isAnimation = this.type === Pt.ANIMATION; }
}, Pt = (function (n) { return n[n.DEFAULT = 0] = "DEFAULT", n[n.LITERAL_ATTR = 1] = "LITERAL_ATTR", n[n.LEGACY_ANIMATION = 2] = "LEGACY_ANIMATION", n[n.TWO_WAY = 3] = "TWO_WAY", n[n.ANIMATION = 4] = "ANIMATION", n; })(Pt || {}), Ve = (function (n) { return n[n.Regular = 0] = "Regular", n[n.LegacyAnimation = 1] = "LegacyAnimation", n[n.TwoWay = 2] = "TwoWay", n[n.Animation = 3] = "Animation", n; })(Ve || {}), ya = class {
    name;
    targetOrPhase;
    type;
    handler;
    sourceSpan;
    handlerSpan;
    keySpan;
    constructor(e, t, s, r, i, a, o) { this.name = e, this.targetOrPhase = t, this.type = s, this.handler = r, this.sourceSpan = i, this.handlerSpan = a, this.keySpan = o; }
}, fl = class {
    name;
    value;
    sourceSpan;
    keySpan;
    valueSpan;
    constructor(e, t, s, r, i) { this.name = e, this.value = t, this.sourceSpan = s, this.keySpan = r, this.valueSpan = i; }
}, Y = (function (n) { return n[n.Property = 0] = "Property", n[n.Attribute = 1] = "Attribute", n[n.Class = 2] = "Class", n[n.Style = 3] = "Style", n[n.LegacyAnimation = 4] = "LegacyAnimation", n[n.TwoWay = 5] = "TwoWay", n[n.Animation = 6] = "Animation", n; })(Y || {}), Ca = class {
    name;
    type;
    securityContext;
    value;
    unit;
    sourceSpan;
    keySpan;
    valueSpan;
    constructor(e, t, s, r, i, a, o, l) { this.name = e, this.type = t, this.securityContext = s, this.value = r, this.unit = i, this.sourceSpan = a, this.keySpan = o, this.valueSpan = l; }
}, Bt = (function (n) { return n[n.RAW_TEXT = 0] = "RAW_TEXT", n[n.ESCAPABLE_RAW_TEXT = 1] = "ESCAPABLE_RAW_TEXT", n[n.PARSABLE_DATA = 2] = "PARSABLE_DATA", n; })(Bt || {});
function Le(n, e = !0) { if (n[0] != ":")
    return [null, n]; let t = n.indexOf(":", 1); if (t === -1) {
    if (e)
        throw new Error(`Unsupported format "${n}" expecting ":namespace:name"`);
    return [null, n];
} return [n.slice(1, t), n.slice(t + 1)]; }
function Pu(n) { return Le(n)[1] === "ng-container"; }
function dl(n) { return Le(n)[1] === "ng-content"; }
function Nm(n) { return Le(n)[1] === "ng-template"; }
function ml(n) { return n === null ? null : Le(n)[0]; }
function ia(n, e) { return n ? `:${n}:${e}` : e; }
var wo = class {
    value;
    sourceSpan;
    constructor(e, t) { this.value = e, this.sourceSpan = t; }
    visit(e) { throw new Error("visit() not implemented for Comment"); }
}, Qn = class {
    value;
    sourceSpan;
    constructor(e, t) { this.value = e, this.sourceSpan = t; }
    visit(e) { return e.visitText(this); }
}, Xs = class {
    value;
    sourceSpan;
    i18n;
    constructor(e, t, s) { this.value = e, this.sourceSpan = t, this.i18n = s; }
    visit(e) { return e.visitBoundText(this); }
}, Ys = class {
    name;
    value;
    sourceSpan;
    keySpan;
    valueSpan;
    i18n;
    constructor(e, t, s, r, i, a) { this.name = e, this.value = t, this.sourceSpan = s, this.keySpan = r, this.valueSpan = i, this.i18n = a; }
    visit(e) { return e.visitTextAttribute(this); }
}, gl = class n {
    name;
    type;
    securityContext;
    value;
    unit;
    sourceSpan;
    keySpan;
    valueSpan;
    i18n;
    constructor(e, t, s, r, i, a, o, l, c) { this.name = e, this.type = t, this.securityContext = s, this.value = r, this.unit = i, this.sourceSpan = a, this.keySpan = o, this.valueSpan = l, this.i18n = c; }
    static fromBoundElementProperty(e, t) { if (e.keySpan === void 0)
        throw new Error(`Unexpected state: keySpan must be defined for bound attributes but was not for ${e.name}: ${e.sourceSpan}`); return new n(e.name, e.type, e.securityContext, e.value, e.unit, e.sourceSpan, e.keySpan, e.valueSpan, t); }
    visit(e) { return e.visitBoundAttribute(this); }
}, vl = class n {
    name;
    type;
    handler;
    target;
    phase;
    sourceSpan;
    handlerSpan;
    keySpan;
    constructor(e, t, s, r, i, a, o, l) { this.name = e, this.type = t, this.handler = s, this.target = r, this.phase = i, this.sourceSpan = a, this.handlerSpan = o, this.keySpan = l; }
    static fromParsedEvent(e) { let t = e.type === Ve.Regular ? e.targetOrPhase : null, s = e.type === Ve.LegacyAnimation ? e.targetOrPhase : null; if (e.keySpan === void 0)
        throw new Error(`Unexpected state: keySpan must be defined for bound event but was not for ${e.name}: ${e.sourceSpan}`); return new n(e.name, e.type, e.handler, t, s, e.sourceSpan, e.handlerSpan, e.keySpan); }
    visit(e) { return e.visitBoundEvent(this); }
}, Ht = class {
    name;
    attributes;
    inputs;
    outputs;
    directives;
    children;
    references;
    isSelfClosing;
    sourceSpan;
    startSourceSpan;
    endSourceSpan;
    isVoid;
    i18n;
    constructor(e, t, s, r, i, a, o, l, c, h, p, m, v) { this.name = e, this.attributes = t, this.inputs = s, this.outputs = r, this.directives = i, this.children = a, this.references = o, this.isSelfClosing = l, this.sourceSpan = c, this.startSourceSpan = h, this.endSourceSpan = p, this.isVoid = m, this.i18n = v; }
    visit(e) { return e.visitElement(this); }
}, Wt = class {
    nameSpan;
    sourceSpan;
    prefetchSpan;
    whenOrOnSourceSpan;
    hydrateSpan;
    constructor(e, t, s, r, i) { this.nameSpan = e, this.sourceSpan = t, this.prefetchSpan = s, this.whenOrOnSourceSpan = r, this.hydrateSpan = i; }
    visit(e) { return e.visitDeferredTrigger(this); }
}, Aa = class extends Wt {
    value;
    constructor(e, t, s, r, i) { super(null, t, s, r, i), this.value = e; }
}, wl = class extends Wt {
}, El = class extends Wt {
}, Sl = class extends Wt {
}, ka = class extends Wt {
    reference;
    constructor(e, t, s, r, i, a) { super(t, s, r, i, a), this.reference = e; }
}, xl = class extends Wt {
    delay;
    constructor(e, t, s, r, i, a) { super(t, s, r, i, a), this.delay = e; }
}, _a = class extends Wt {
    reference;
    constructor(e, t, s, r, i, a) { super(t, s, r, i, a), this.reference = e; }
}, ii = class extends Wt {
    reference;
    options;
    constructor(e, t, s, r, i, a, o) { super(s, r, i, a, o), this.reference = e, this.options = t; }
}, Qe = class {
    nameSpan;
    sourceSpan;
    startSourceSpan;
    endSourceSpan;
    constructor(e, t, s, r) { this.nameSpan = e, this.sourceSpan = t, this.startSourceSpan = s, this.endSourceSpan = r; }
}, ai = class extends Qe {
    children;
    minimumTime;
    i18n;
    constructor(e, t, s, r, i, a, o) { super(s, r, i, a), this.children = e, this.minimumTime = t, this.i18n = o; }
    visit(e) { return e.visitDeferredBlockPlaceholder(this); }
}, oi = class extends Qe {
    children;
    afterTime;
    minimumTime;
    i18n;
    constructor(e, t, s, r, i, a, o, l) { super(r, i, a, o), this.children = e, this.afterTime = t, this.minimumTime = s, this.i18n = l; }
    visit(e) { return e.visitDeferredBlockLoading(this); }
}, li = class extends Qe {
    children;
    i18n;
    constructor(e, t, s, r, i, a) { super(t, s, r, i), this.children = e, this.i18n = a; }
    visit(e) { return e.visitDeferredBlockError(this); }
}, ds = class extends Qe {
    children;
    placeholder;
    loading;
    error;
    mainBlockSpan;
    i18n;
    triggers;
    prefetchTriggers;
    hydrateTriggers;
    definedTriggers;
    definedPrefetchTriggers;
    definedHydrateTriggers;
    constructor(e, t, s, r, i, a, o, l, c, h, p, m, v) { super(l, c, p, m), this.children = e, this.placeholder = i, this.loading = a, this.error = o, this.mainBlockSpan = h, this.i18n = v, this.triggers = t, this.prefetchTriggers = s, this.hydrateTriggers = r, this.definedTriggers = Object.keys(t), this.definedPrefetchTriggers = Object.keys(s), this.definedHydrateTriggers = Object.keys(r); }
    visit(e) { return e.visitDeferredBlock(this); }
    visitAll(e) { this.visitTriggers(this.definedHydrateTriggers, this.hydrateTriggers, e), this.visitTriggers(this.definedTriggers, this.triggers, e), this.visitTriggers(this.definedPrefetchTriggers, this.prefetchTriggers, e), G(e, this.children); let t = [this.placeholder, this.loading, this.error].filter(s => s !== null); G(e, t); }
    visitTriggers(e, t, s) { G(s, e.map(r => t[r])); }
}, ba = class extends Qe {
    expression;
    groups;
    unknownBlocks;
    exhaustiveCheck;
    constructor(e, t, s, r, i, a, o, l) { super(l, i, a, o), this.expression = e, this.groups = t, this.unknownBlocks = s, this.exhaustiveCheck = r; }
    visit(e) { return e.visitSwitchBlock(this); }
}, yl = class extends Qe {
    expression;
    constructor(e, t, s, r, i) { super(i, t, s, r), this.expression = e; }
    visit(e) { return e.visitSwitchBlockCase(this); }
}, ci = class extends Qe {
    cases;
    children;
    i18n;
    constructor(e, t, s, r, i, a, o) { super(a, s, r, i), this.cases = e, this.children = t, this.i18n = o; }
    visit(e) { return e.visitSwitchBlockCaseGroup(this); }
}, Cl = class extends Qe {
    constructor(e, t, s, r) { super(r, e, t, s); }
    visit(e) { return e.visitSwitchExhaustiveCheck(this); }
}, Qs = class extends Qe {
    item;
    expression;
    trackBy;
    trackKeywordSpan;
    contextVariables;
    children;
    empty;
    mainBlockSpan;
    i18n;
    constructor(e, t, s, r, i, a, o, l, c, h, p, m, v) { super(m, l, h, p), this.item = e, this.expression = t, this.trackBy = s, this.trackKeywordSpan = r, this.contextVariables = i, this.children = a, this.empty = o, this.mainBlockSpan = c, this.i18n = v; }
    visit(e) { return e.visitForLoopBlock(this); }
}, ui = class extends Qe {
    children;
    i18n;
    constructor(e, t, s, r, i, a) { super(i, t, s, r), this.children = e, this.i18n = a; }
    visit(e) { return e.visitForLoopBlockEmpty(this); }
}, Ta = class extends Qe {
    branches;
    constructor(e, t, s, r, i) { super(i, t, s, r), this.branches = e; }
    visit(e) { return e.visitIfBlock(this); }
}, es = class extends Qe {
    expression;
    children;
    expressionAlias;
    i18n;
    constructor(e, t, s, r, i, a, o, l) { super(o, r, i, a), this.expression = e, this.children = t, this.expressionAlias = s, this.i18n = l; }
    visit(e) { return e.visitIfBlockBranch(this); }
}, Ia = class {
    name;
    sourceSpan;
    nameSpan;
    constructor(e, t, s) { this.name = e, this.sourceSpan = t, this.nameSpan = s; }
    visit(e) { return e.visitUnknownBlock(this); }
}, Jc = class {
    name;
    value;
    sourceSpan;
    nameSpan;
    valueSpan;
    constructor(e, t, s, r, i) { this.name = e, this.value = t, this.sourceSpan = s, this.nameSpan = r, this.valueSpan = i; }
    visit(e) { return e.visitLetDeclaration(this); }
}, Ir = class {
    componentName;
    tagName;
    fullName;
    attributes;
    inputs;
    outputs;
    directives;
    children;
    references;
    isSelfClosing;
    sourceSpan;
    startSourceSpan;
    endSourceSpan;
    i18n;
    constructor(e, t, s, r, i, a, o, l, c, h, p, m, v, w) { this.componentName = e, this.tagName = t, this.fullName = s, this.attributes = r, this.inputs = i, this.outputs = a, this.directives = o, this.children = l, this.references = c, this.isSelfClosing = h, this.sourceSpan = p, this.startSourceSpan = m, this.endSourceSpan = v, this.i18n = w; }
    visit(e) { return e.visitComponent(this); }
}, Up = class {
    name;
    attributes;
    inputs;
    outputs;
    references;
    sourceSpan;
    startSourceSpan;
    endSourceSpan;
    i18n;
    constructor(e, t, s, r, i, a, o, l, c) { this.name = e, this.attributes = t, this.inputs = s, this.outputs = r, this.references = i, this.sourceSpan = a, this.startSourceSpan = o, this.endSourceSpan = l, this.i18n = c; }
    visit(e) { return e.visitDirective(this); }
}, rt = class {
    tagName;
    attributes;
    inputs;
    outputs;
    directives;
    templateAttrs;
    children;
    references;
    variables;
    isSelfClosing;
    sourceSpan;
    startSourceSpan;
    endSourceSpan;
    i18n;
    constructor(e, t, s, r, i, a, o, l, c, h, p, m, v, w) { this.tagName = e, this.attributes = t, this.inputs = s, this.outputs = r, this.directives = i, this.templateAttrs = a, this.children = o, this.references = l, this.variables = c, this.isSelfClosing = h, this.sourceSpan = p, this.startSourceSpan = m, this.endSourceSpan = v, this.i18n = w; }
    visit(e) { return e.visitTemplate(this); }
}, Zs = class {
    selector;
    attributes;
    children;
    isSelfClosing;
    sourceSpan;
    startSourceSpan;
    endSourceSpan;
    i18n;
    name = "ng-content";
    constructor(e, t, s, r, i, a, o, l) { this.selector = e, this.attributes = t, this.children = s, this.isSelfClosing = r, this.sourceSpan = i, this.startSourceSpan = a, this.endSourceSpan = o, this.i18n = l; }
    visit(e) { return e.visitContent(this); }
}, Tn = class {
    name;
    value;
    sourceSpan;
    keySpan;
    valueSpan;
    constructor(e, t, s, r, i) { this.name = e, this.value = t, this.sourceSpan = s, this.keySpan = r, this.valueSpan = i; }
    visit(e) { return e.visitVariable(this); }
}, hi = class {
    name;
    value;
    sourceSpan;
    keySpan;
    valueSpan;
    constructor(e, t, s, r, i) { this.name = e, this.value = t, this.sourceSpan = s, this.keySpan = r, this.valueSpan = i; }
    visit(e) { return e.visitReference(this); }
}, Hp = class {
    vars;
    placeholders;
    sourceSpan;
    i18n;
    constructor(e, t, s, r) { this.vars = e, this.placeholders = t, this.sourceSpan = s, this.i18n = r; }
    visit(e) { return e.visitIcu(this); }
}, pi = class {
    tagNames;
    bindings;
    listeners;
    sourceSpan;
    constructor(e, t, s, r) { if (this.tagNames = e, this.bindings = t, this.listeners = s, this.sourceSpan = r, e.length === 0)
        throw new Error("HostElement must have at least one tag name."); }
    visit() { throw new Error("HostElement cannot be visited"); }
}, Dm = class {
    visitElement(e) { G(this, e.attributes), G(this, e.inputs), G(this, e.outputs), G(this, e.directives), G(this, e.children), G(this, e.references); }
    visitTemplate(e) { G(this, e.attributes), G(this, e.inputs), G(this, e.outputs), G(this, e.directives), G(this, e.children), G(this, e.references), G(this, e.variables); }
    visitDeferredBlock(e) { e.visitAll(this); }
    visitDeferredBlockPlaceholder(e) { G(this, e.children); }
    visitDeferredBlockError(e) { G(this, e.children); }
    visitDeferredBlockLoading(e) { G(this, e.children); }
    visitSwitchBlock(e) { G(this, e.groups); }
    visitSwitchBlockCase(e) { }
    visitSwitchBlockCaseGroup(e) { G(this, e.cases), G(this, e.children); }
    visitSwitchExhaustiveCheck(e) { }
    visitForLoopBlock(e) { let t = [e.item, ...e.contextVariables, ...e.children]; e.empty && t.push(e.empty), G(this, t); }
    visitForLoopBlockEmpty(e) { G(this, e.children); }
    visitIfBlock(e) { G(this, e.branches); }
    visitIfBlockBranch(e) { G(this, e.children), e.expressionAlias?.visit(this); }
    visitContent(e) { G(this, e.children); }
    visitComponent(e) { G(this, e.attributes), G(this, e.inputs), G(this, e.outputs), G(this, e.directives), G(this, e.children), G(this, e.references); }
    visitDirective(e) { G(this, e.attributes), G(this, e.inputs), G(this, e.outputs), G(this, e.references); }
    visitVariable(e) { }
    visitReference(e) { }
    visitTextAttribute(e) { }
    visitBoundAttribute(e) { }
    visitBoundEvent(e) { }
    visitText(e) { }
    visitBoundText(e) { }
    visitIcu(e) { }
    visitDeferredTrigger(e) { }
    visitUnknownBlock(e) { }
    visitLetDeclaration(e) { }
};
function G(n, e) { let t = []; if (n.visit)
    for (let s of e)
        n.visit(s);
else
    for (let s of e) {
        let r = s.visit(n);
        r && t.push(r);
    } return t; }
var Be = class {
    nodes;
    placeholders;
    placeholderToMessage;
    meaning;
    description;
    customId;
    sources;
    id;
    legacyIds = [];
    messageString;
    constructor(e, t, s, r, i, a) { this.nodes = e, this.placeholders = t, this.placeholderToMessage = s, this.meaning = r, this.description = i, this.customId = a, this.id = this.customId, this.messageString = Pm(this.nodes), e.length ? this.sources = [{ filePath: e[0].sourceSpan.start.file.url, startLine: e[0].sourceSpan.start.line + 1, startCol: e[0].sourceSpan.start.col + 1, endLine: e[e.length - 1].sourceSpan.end.line + 1, endCol: e[0].sourceSpan.start.col + 1 }] : this.sources = []; }
}, Mt = class {
    value;
    sourceSpan;
    constructor(e, t) { this.value = e, this.sourceSpan = t; }
    visit(e, t) { return e.visitText(this, t); }
}, it = class {
    children;
    sourceSpan;
    constructor(e, t) { this.children = e, this.sourceSpan = t; }
    visit(e, t) { return e.visitContainer(this, t); }
}, In = class {
    expression;
    type;
    cases;
    sourceSpan;
    expressionPlaceholder;
    constructor(e, t, s, r, i) { this.expression = e, this.type = t, this.cases = s, this.sourceSpan = r, this.expressionPlaceholder = i; }
    visit(e, t) { return e.visitIcu(this, t); }
}, jt = class {
    tag;
    attrs;
    startName;
    closeName;
    children;
    isVoid;
    sourceSpan;
    startSourceSpan;
    endSourceSpan;
    constructor(e, t, s, r, i, a, o, l, c) { this.tag = e, this.attrs = t, this.startName = s, this.closeName = r, this.children = i, this.isVoid = a, this.sourceSpan = o, this.startSourceSpan = l, this.endSourceSpan = c; }
    visit(e, t) { return e.visitTagPlaceholder(this, t); }
}, gt = class {
    value;
    name;
    sourceSpan;
    constructor(e, t, s) { this.value = e, this.name = t, this.sourceSpan = s; }
    visit(e, t) { return e.visitPlaceholder(this, t); }
}, Nn = class {
    value;
    name;
    sourceSpan;
    previousMessage;
    constructor(e, t, s) { this.value = e, this.name = t, this.sourceSpan = s; }
    visit(e, t) { return e.visitIcuPlaceholder(this, t); }
}, zt = class {
    name;
    parameters;
    startName;
    closeName;
    children;
    sourceSpan;
    startSourceSpan;
    endSourceSpan;
    constructor(e, t, s, r, i, a, o, l) { this.name = e, this.parameters = t, this.startName = s, this.closeName = r, this.children = i, this.sourceSpan = a, this.startSourceSpan = o, this.endSourceSpan = l; }
    visit(e, t) { return e.visitBlockPlaceholder(this, t); }
}, Al = class {
    visitText(e, t) { return new Mt(e.value, e.sourceSpan); }
    visitContainer(e, t) { let s = e.children.map(r => r.visit(this, t)); return new it(s, e.sourceSpan); }
    visitIcu(e, t) { let s = {}; return Object.keys(e.cases).forEach(i => s[i] = e.cases[i].visit(this, t)), new In(e.expression, e.type, s, e.sourceSpan, e.expressionPlaceholder); }
    visitTagPlaceholder(e, t) { let s = e.children.map(r => r.visit(this, t)); return new jt(e.tag, e.attrs, e.startName, e.closeName, s, e.isVoid, e.sourceSpan, e.startSourceSpan, e.endSourceSpan); }
    visitPlaceholder(e, t) { return new gt(e.value, e.name, e.sourceSpan); }
    visitIcuPlaceholder(e, t) { return new Nn(e.value, e.name, e.sourceSpan); }
    visitBlockPlaceholder(e, t) { let s = e.children.map(r => r.visit(this, t)); return new zt(e.name, e.parameters, e.startName, e.closeName, s, e.sourceSpan, e.startSourceSpan, e.endSourceSpan); }
}, kl = class {
    visitText(e, t) { }
    visitContainer(e, t) { e.children.forEach(s => s.visit(this)); }
    visitIcu(e, t) { Object.keys(e.cases).forEach(s => { e.cases[s].visit(this); }); }
    visitTagPlaceholder(e, t) { e.children.forEach(s => s.visit(this)); }
    visitPlaceholder(e, t) { }
    visitIcuPlaceholder(e, t) { }
    visitBlockPlaceholder(e, t) { e.children.forEach(s => s.visit(this)); }
};
function Pm(n) { let e = new _l; return n.map(s => s.visit(e)).join(""); }
var _l = class {
    visitText(e) { return e.value; }
    visitContainer(e) { return e.children.map(t => t.visit(this)).join(""); }
    visitIcu(e) { let t = Object.keys(e.cases).map(s => `${s} {${e.cases[s].visit(this)}}`); return `{${e.expressionPlaceholder}, ${e.type}, ${t.join(" ")}}`; }
    visitTagPlaceholder(e) { let t = e.children.map(s => s.visit(this)).join(""); return `{$${e.startName}}${t}{$${e.closeName}}`; }
    visitPlaceholder(e) { return `{$${e.name}}`; }
    visitIcuPlaceholder(e) { return `{$${e.name}}`; }
    visitBlockPlaceholder(e) { let t = e.children.map(s => s.visit(this)).join(""); return `{$${e.startName}}${t}{$${e.closeName}}`; }
}, Js = class {
    createNameMapper(e) { return null; }
}, Na = class extends kl {
    mapName;
    internalToPublic = {};
    publicToNextId = {};
    publicToInternal = {};
    constructor(e, t) { super(), this.mapName = t, e.nodes.forEach(s => s.visit(this)); }
    toPublicName(e) { return this.internalToPublic.hasOwnProperty(e) ? this.internalToPublic[e] : null; }
    toInternalName(e) { return this.publicToInternal.hasOwnProperty(e) ? this.publicToInternal[e] : null; }
    visitText(e, t) { return null; }
    visitTagPlaceholder(e, t) { this.visitPlaceholderName(e.startName), super.visitTagPlaceholder(e, t), this.visitPlaceholderName(e.closeName); }
    visitPlaceholder(e, t) { this.visitPlaceholderName(e.name); }
    visitBlockPlaceholder(e, t) { this.visitPlaceholderName(e.startName), super.visitBlockPlaceholder(e, t), this.visitPlaceholderName(e.closeName); }
    visitIcuPlaceholder(e, t) { this.visitPlaceholderName(e.name); }
    visitPlaceholderName(e) { if (!e || this.internalToPublic.hasOwnProperty(e))
        return; let t = this.mapName(e); if (this.publicToInternal.hasOwnProperty(t)) {
        let s = this.publicToNextId[t];
        this.publicToNextId[t] = s + 1, t = `${t}_${s}`;
    }
    else
        this.publicToNextId[t] = 1; this.internalToPublic[e] = t, this.publicToInternal[t] = e; }
}, Lm = class {
    visitTag(e) { let t = this._serializeAttributes(e.attrs); if (e.children.length == 0)
        return `<${e.name}${t}/>`; let s = e.children.map(r => r.visit(this)); return `<${e.name}${t}>${s.join("")}</${e.name}>`; }
    visitText(e) { return e.value; }
    visitDeclaration(e) { return `<?xml${this._serializeAttributes(e.attrs)} ?>`; }
    _serializeAttributes(e) { let t = Object.keys(e).map(s => `${s}="${e[s]}"`).join(" "); return t.length > 0 ? " " + t : ""; }
    visitDoctype(e) {
        return `<!DOCTYPE ${e.rootTag} [
${e.dtd}
]>`;
    }
}, Bm = new Lm;
function Kc(n) { return n.map(e => e.visit(Bm)).join(""); }
var fi = class {
    attrs = {};
    constructor(e) { Object.keys(e).forEach(t => { this.attrs[t] = Eo(e[t]); }); }
    visit(e) { return e.visitDeclaration(this); }
}, bl = class {
    rootTag;
    dtd;
    constructor(e, t) { this.rootTag = e, this.dtd = t; }
    visit(e) { return e.visitDoctype(this); }
}, $ = class {
    name;
    children;
    attrs = {};
    constructor(e, t = {}, s = []) { this.name = e, this.children = s, Object.keys(t).forEach(r => { this.attrs[r] = Eo(t[r]); }); }
    visit(e) { return e.visitTag(this); }
}, Z = class {
    value;
    constructor(e) { this.value = Eo(e); }
    visit(e) { return e.visitText(this); }
}, X = class extends Z {
    constructor(e = 0) {
        super(`
${new Array(e + 1).join(" ")}`);
    }
}, Mm = [[/&/g, "&amp;"], [/"/g, "&quot;"], [/'/g, "&apos;"], [/</g, "&lt;"], [/>/g, "&gt;"]];
function Eo(n) { return Mm.reduce((e, t) => e.replace(t[0], t[1]), n); }
var Rm = "angular", Lu = "messagebundle", Fm = "msg", Hn = "ph", Wn = "ex", $m = "source", Om = `<!ELEMENT messagebundle (msg)*>
<!ATTLIST messagebundle class CDATA #IMPLIED>

<!ELEMENT msg (#PCDATA|ph|source)*>
<!ATTLIST msg id CDATA #IMPLIED>
<!ATTLIST msg seq CDATA #IMPLIED>
<!ATTLIST msg name CDATA #IMPLIED>
<!ATTLIST msg desc CDATA #IMPLIED>
<!ATTLIST msg meaning CDATA #IMPLIED>
<!ATTLIST msg obsolete (obsolete) #IMPLIED>
<!ATTLIST msg xml:space (default|preserve) "default">
<!ATTLIST msg is_hidden CDATA #IMPLIED>

<!ELEMENT source (#PCDATA)>

<!ELEMENT ph (#PCDATA|ex)*>
<!ATTLIST ph name CDATA #REQUIRED>

<!ELEMENT ex (#PCDATA)>`, Tl = class extends Js {
    write(e, t) { let s = new Il, r = new Vm, i = new $(Lu); return i.attrs.handler = Rm, e.forEach(a => { let o = { id: a.id }; a.description && (o.desc = a.description), a.meaning && (o.meaning = a.meaning); let l = []; a.sources.forEach(c => { l.push(new $($m, {}, [new Z(`${c.filePath}:${c.startLine}${c.endLine !== c.startLine ? "," + c.endLine : ""}`)])); }), i.children.push(new X(2), new $(Fm, o, [...l, ...r.serialize(a.nodes)])); }), i.children.push(new X), Kc([new fi({ version: "1.0", encoding: "UTF-8" }), new X, new bl(Lu, Om), new X, s.addDefaultExamples(i), new X]); }
    load(e, t) { throw new Error("Unsupported"); }
    digest(e) { return Wp(e); }
    createNameMapper(e) { return new Na(e, eu); }
}, Vm = class {
    visitText(e, t) { return [new Z(e.value)]; }
    visitContainer(e, t) { let s = []; return e.children.forEach(r => s.push(...r.visit(this))), s; }
    visitIcu(e, t) { let s = [new Z(`{${e.expressionPlaceholder}, ${e.type}, `)]; return Object.keys(e.cases).forEach(r => { s.push(new Z(`${r} {`), ...e.cases[r].visit(this), new Z("} ")); }), s.push(new Z("}")), s; }
    visitTagPlaceholder(e, t) { let s = new Z(`<${e.tag}>`), r = new $(Wn, {}, [s]), i = new $(Hn, { name: e.startName }, [r, s]); if (e.isVoid)
        return [i]; let a = new Z(`</${e.tag}>`), o = new $(Wn, {}, [a]), l = new $(Hn, { name: e.closeName }, [o, a]); return [i, ...this.serialize(e.children), l]; }
    visitPlaceholder(e, t) { let s = new Z(`{{${e.value}}}`), r = new $(Wn, {}, [s]); return [new $(Hn, { name: e.name }, [r, s])]; }
    visitBlockPlaceholder(e, t) { let s = new Z(`@${e.name}`), r = new $(Wn, {}, [s]), i = new $(Hn, { name: e.startName }, [r, s]), a = new Z("}"), o = new $(Wn, {}, [a]), l = new $(Hn, { name: e.closeName }, [o, a]); return [i, ...this.serialize(e.children), l]; }
    visitIcuPlaceholder(e, t) { let s = e.value.expression, r = e.value.type, i = Object.keys(e.value.cases).map(l => l + " {...}").join(" "), a = new Z(`{${s}, ${r}, ${i}}`), o = new $(Wn, {}, [a]); return [new $(Hn, { name: e.name }, [o, a])]; }
    serialize(e) { return [].concat(...e.map(t => t.visit(this))); }
};
function Wp(n) { return Gc(n); }
var Il = class {
    addDefaultExamples(e) { return e.visit(this), e; }
    visitTag(e) { if (e.name === Hn) {
        if (!e.children || e.children.length == 0) {
            let t = new Z(e.attrs.name || "...");
            e.children = [new $(Wn, {}, [t])];
        }
    }
    else
        e.children && e.children.forEach(t => t.visit(this)); }
    visitText(e) { }
    visitDeclaration(e) { }
    visitDoctype(e) { }
};
function eu(n) { return n.toUpperCase().replace(/[^A-Z0-9_]/g, "_"); }
var jp = "i18n", Nl = "i18n-", qm = "VAR_";
function zp(n) { return n === jp || n.startsWith(Nl); }
function Um(n) { return n.attrs.some(e => zp(e.name)); }
function Gp(n) { return n.nodes[0]; }
function tu(n = {}, e) { let t = {}; return n && Object.keys(n).length && Object.keys(n).forEach(s => t[Vi(s, e)] = n[s]), t; }
function Vi(n, e = !0) { let t = eu(n); if (!e)
    return t; let s = t.split("_"); if (s.length === 1)
    return n.toLowerCase(); let r; /^\d+$/.test(s[s.length - 1]) && (r = s.pop()); let i = s.shift().toLowerCase(); return s.length && (i += s.map(a => a.charAt(0).toUpperCase() + a.slice(1).toLowerCase()).join("")), r ? `${i}_${r}` : i; }
var nu = /[-.]/, su = "_t", at = "ctx", or = "rf";
function Xp(n, e) { let t = null; return () => (t || (n(new he(su, void 0, re)), t = D(e)), t); }
function qe(n) { return Array.isArray(n) ? q(n.map(qe)) : d(n, vt); }
function Dl(n, e) { let t = Object.getOwnPropertyNames(n); return t.length === 0 ? null : Ce(t.map(s => { let r = n[s], i, a, o, l; if (typeof r == "string")
    i = s, o = s, a = r, l = qe(a);
else {
    o = s, i = r.classPropertyName, a = r.bindingPropertyName;
    let c = a !== i, h = r.transformFunction !== null, p = Ds.None;
    if (r.isSignal && (p |= Ds.SignalBased), h && (p |= Ds.HasDecoratorInputTransform), e && (c || h || p !== Ds.None)) {
        let m = [d(p), qe(a)];
        (c || h) && (m.push(qe(i)), h && m.push(r.transformFunction)), l = q(m);
    }
    else
        l = qe(a);
} return { key: o, quoted: nu.test(o), value: l }; })); }
var oe = class {
    values = [];
    set(e, t) { if (t) {
        let s = this.values.find(r => r.key === e);
        s ? s.value = t : this.values.push({ key: e, value: t, quoted: !1 });
    } }
    toLiteralMap() { return Ce(this.values); }
};
function Hm(n) { let e = n instanceof Ht ? n.name : "ng-template", t = Wm(n), s = new as, r = Le(e)[1]; return s.setElement(r), Object.getOwnPropertyNames(t).forEach(i => { let a = Le(i)[1], o = t[i]; s.addAttribute(a, o), i.toLowerCase() === "class" && o.trim().split(/\s+/).forEach(c => s.addClassName(c)); }), s; }
function Wm(n) { let e = {}; return n instanceof rt && n.tagName !== "ng-template" ? n.templateAttrs.forEach(t => e[t.name] = "") : (n.attributes.forEach(t => { zp(t.name) || (e[t.name] = t.value); }), n.inputs.forEach(t => { (t.type === Y.Property || t.type === Y.TwoWay) && (e[t.name] = ""); }), n.outputs.forEach(t => { e[t.name] = ""; })), e; }
function Bu(n, e) { let t = null, s = { name: n.name, type: n.type, typeArgumentCount: n.typeArgumentCount, deps: [], target: Lt.Injectable }; if (n.useClass !== void 0) {
    let o = n.useClass.expression.isEquivalent(n.type.value), l;
    n.deps !== void 0 && (l = n.deps), l !== void 0 ? t = zn(pe(S({}, s), { delegate: n.useClass.expression, delegateDeps: l, delegateType: da.Class })) : o ? t = zn(s) : t = { statements: [], expression: Mu(n.type.value, n.useClass.expression, e) };
}
else
    n.useFactory !== void 0 ? n.deps !== void 0 ? t = zn(pe(S({}, s), { delegate: n.useFactory, delegateDeps: n.deps || [], delegateType: da.Function })) : t = { statements: [], expression: ie([], n.useFactory.callFn([])) } : n.useValue !== void 0 ? t = zn(pe(S({}, s), { expression: n.useValue.expression })) : n.useExisting !== void 0 ? t = zn(pe(S({}, s), { expression: y(f.inject).callFn([n.useExisting.expression]) })) : t = { statements: [], expression: Mu(n.type.value, n.type.value, e) }; let r = n.type.value, i = new oe; return i.set("token", r), i.set("factory", t.expression), n.providedIn.expression.value !== null && i.set("providedIn", Ps(n.providedIn)), { expression: y(f.\u0275\u0275defineInjectable).callFn([i.toLiteralMap()], void 0, !0), type: Yp(n), statements: t.statements }; }
function Yp(n) { return new st(y(f.InjectableDeclaration, [vo(n.type.type, n.typeArgumentCount)])); }
function Mu(n, e, t) { if (n.node === e.node)
    return e.prop("\u0275fac"); if (!t)
    return Ru(e); let s = y(f.resolveForwardRef).callFn([e]); return Ru(s); }
function Ru(n) { let e = new J("__ngFactoryType__", re); return ie([e], n.prop("\u0275fac").callFn([D(e.name)])); }
var be = 0, jm = 8, ru = 9, ts = 10, Qp = 11, Zp = 12, iu = 13, Jp = 32, Pl = 33, di = 34, Kp = 35, So = 36, zm = 37, Da = 38, mi = 39, Oe = 40, ge = 41, Fu = 42, ef = 43, Pe = 44, Pa = 45, jn = 46, ct = 47, Rt = 58, ze = 59, $s = 60, Ae = 61, et = 62, $u = 63, au = 48, Gm = 55, tf = 57, On = 65, Xm = 69, Ym = 70, Qm = 88, lr = 90, Ot = 91, ns = 92, Zt = 93, Zm = 94, Vn = 95, ms = 97, Jm = 98, Km = 101, ou = 102, nf = 110, sf = 114, rf = 116, af = 117, of = 118, lf = 120, qi = 122, pt = 123, Ou = 124, Fe = 125, cf = 160, Cs = 64, Ll = 96;
function gi(n) { return n >= ru && n <= Jp || n == cf; }
function ut(n) { return au <= n && n <= tf; }
function Dn(n) { return n >= ms && n <= qi || n >= On && n <= lr; }
function eg(n) { return n >= ms && n <= ou || n >= On && n <= Ym || ut(n); }
function La(n) { return n === ts || n === iu; }
function Vu(n) { return au <= n && n <= Gm; }
function Nr(n) { return n === mi || n === di || n === Ll; }
var gs = class n {
    file;
    offset;
    line;
    col;
    constructor(e, t, s, r) { this.file = e, this.offset = t, this.line = s, this.col = r; }
    toString() { return this.offset != null ? `${this.file.url}@${this.line}:${this.col}` : this.file.url; }
    moveBy(e) { let t = this.file.content, s = t.length, r = this.offset, i = this.line, a = this.col; for (; r > 0 && e < 0;)
        if (r--, e++, t.charCodeAt(r) == ts) {
            i--;
            let l = t.substring(0, r - 1).lastIndexOf(String.fromCharCode(ts));
            a = l > 0 ? r - l : r;
        }
        else
            a--; for (; r < s && e > 0;) {
        let o = t.charCodeAt(r);
        r++, e--, o == ts ? (i++, a = 0) : a++;
    } return new n(this.file, r, i, a); }
    getContext(e, t) {
        let s = this.file.content, r = this.offset;
        if (r != null) {
            r > s.length - 1 && (r = s.length - 1);
            let i = r, a = 0, o = 0;
            for (; a < e && r > 0 && (r--, a++, !(s[r] == `
` && ++o == t));)
                ;
            for (a = 0, o = 0; a < e && i < s.length - 1 && (i++, a++, !(s[i] == `
` && ++o == t));)
                ;
            return { before: s.substring(r, this.offset), after: s.substring(this.offset, i + 1) };
        }
        return null;
    }
}, vi = class {
    content;
    url;
    constructor(e, t) { this.content = e, this.url = t; }
}, B = class {
    start;
    end;
    fullStart;
    details;
    constructor(e, t, s = e, r = null) { this.start = e, this.end = t, this.fullStart = s, this.details = r; }
    toString() { return this.start.file.content.substring(this.start.offset, this.end.offset); }
}, wn = (function (n) { return n[n.WARNING = 0] = "WARNING", n[n.ERROR = 1] = "ERROR", n; })(wn || {}), I = class extends Error {
    span;
    msg;
    level;
    relatedError;
    constructor(e, t, s = wn.ERROR, r) { super(t), this.span = e, this.msg = t, this.level = s, this.relatedError = r, Object.setPrototypeOf(this, new.target.prototype); }
    contextualMessage() { let e = this.span.start.getContext(100, 3); return e ? `${this.msg} ("${e.before}[${wn[this.level]} ->]${e.after}")` : this.msg; }
    toString() { let e = this.span.details ? `, ${this.span.details}` : ""; return `${this.contextualMessage()}: ${this.span.start}${e}`; }
};
function tg(n, e, t) { let s = `in ${n} ${e} in ${t}`, r = new vi("", s); return new B(new gs(r, -1, -1, -1), new gs(r, -1, -1, -1)); }
var ng = 0;
function sg(n) { if (!n || !n.reference)
    return null; let e = n.reference; if (e.__anonymousType)
    return e.__anonymousType; if (e.__forward_ref__)
    return "__forward_ref__"; let t = $p(e); return t.indexOf("(") >= 0 ? (t = `anonymous_${ng++}`, e.__anonymousType = t) : t = Gn(t), t; }
function Gn(n) { return n.replace(/\W/g, "_"); }
var qu = '(this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e})', Bl = class extends ul {
    constructor() { super(!1); }
    visitWrappedNodeExpr(e, t) { throw new Error("Cannot emit a WrappedNodeExpr in Javascript."); }
    visitDeclareVarStmt(e, t) { return t.print(e, `var ${e.name}`), e.value && (t.print(e, " = "), e.value.visitExpression(this, t)), t.println(e, ";"), null; }
    visitTaggedTemplateLiteralExpr(e, t) { let s = e.template.elements; return e.tag.visitExpression(this, t), t.print(e, `(${qu}(`), t.print(e, `[${s.map(r => Yn(r.text, !1)).join(", ")}], `), t.print(e, `[${s.map(r => Yn(r.rawText, !1)).join(", ")}])`), e.template.expressions.forEach(r => { t.print(e, ", "), r.visitExpression(this, t); }), t.print(e, ")"), null; }
    visitTemplateLiteralExpr(e, t) { t.print(e, "`"); for (let s = 0; s < e.elements.length; s++) {
        e.elements[s].visitExpression(this, t);
        let r = s < e.expressions.length ? e.expressions[s] : null;
        r !== null && (t.print(r, "${"), r.visitExpression(this, t), t.print(r, "}"));
    } t.print(e, "`"); }
    visitTemplateLiteralElementExpr(e, t) { return t.print(e, e.rawText), null; }
    visitFunctionExpr(e, t) { return t.print(e, `function${e.name ? " " + e.name : ""}(`), this._visitParams(e.params, t), t.println(e, ") {"), t.incIndent(), this.visitAllStatements(e.statements, t), t.decIndent(), t.print(e, "}"), null; }
    visitArrowFunctionExpr(e, t) { if (t.print(e, "("), this._visitParams(e.params, t), t.print(e, ") =>"), Array.isArray(e.body))
        t.println(e, "{"), t.incIndent(), this.visitAllStatements(e.body, t), t.decIndent(), t.print(e, "}");
    else {
        let s = e.body instanceof St;
        s && t.print(e, "("), e.body.visitExpression(this, t), s && t.print(e, ")");
    } return null; }
    visitDeclareFunctionStmt(e, t) { return t.print(e, `function ${e.name}(`), this._visitParams(e.params, t), t.println(e, ") {"), t.incIndent(), this.visitAllStatements(e.statements, t), t.decIndent(), t.println(e, "}"), null; }
    visitLocalizedString(e, t) { t.print(e, `$localize(${qu}(`); let s = [e.serializeI18nHead()]; for (let r = 1; r < e.messageParts.length; r++)
        s.push(e.serializeI18nTemplatePart(r)); return t.print(e, `[${s.map(r => Yn(r.cooked, !1)).join(", ")}], `), t.print(e, `[${s.map(r => Yn(r.raw, !1)).join(", ")}])`), e.expressions.forEach(r => { t.print(e, ", "), r.visitExpression(this, t); }), t.print(e, ")"), null; }
    _visitParams(e, t) { this.visitAllObjects(s => t.print(null, s.name), e, t, ","); }
}, Wi;
function rg() { if (Wi === void 0) {
    let n = sa.trustedTypes;
    if (Wi = null, n)
        try {
            Wi = n.createPolicy("angular#unsafe-jit", { createScript: e => e });
        }
        catch { }
} return Wi; }
function ig(n) { return rg()?.createScript(n) || n; }
function Uu(...n) {
    if (!sa.trustedTypes)
        return new Function(...n);
    let e = n.slice(0, -1).join(","), t = n[n.length - 1], s = `(function anonymous(${e}
) { ${t}
})`, r = sa.eval(ig(s));
    return r.bind === void 0 ? new Function(...n) : (r.toString = () => s, r.bind(sa));
}
var Ml = class {
    evaluateStatements(e, t, s, r) { let i = new Rl(s), a = cl.createRoot(); return t.length > 0 && !ag(t[0]) && (t = [d("use strict").toStmt(), ...t]), i.visitAllStatements(t, a), i.createReturnStmt(a), this.evaluateCode(e, a, i.getArgs(), r); }
    evaluateCode(e, t, s, r) {
        let i = `"use strict";${t.toSource()}
//# sourceURL=${e}`, a = [], o = [];
        for (let c in s)
            o.push(s[c]), a.push(c);
        if (r) {
            let c = Uu(...a.concat("return null;")).toString(), h = c.slice(0, c.indexOf("return null;")).split(`
`).length - 1;
            i += `
${t.toSourceMapGenerator(e, h).toJsComment()}`;
        }
        let l = Uu(...a.concat(i));
        return this.executeFunction(l, o);
    }
    executeFunction(e, t) { return e(...t); }
}, Rl = class extends Bl {
    refResolver;
    _evalArgNames = [];
    _evalArgValues = [];
    _evalExportedVars = [];
    constructor(e) { super(), this.refResolver = e; }
    createReturnStmt(e) { new me(new St(this._evalExportedVars.map(s => new us(s, D(s), !1)))).visitStatement(this, e); }
    getArgs() { let e = {}; for (let t = 0; t < this._evalArgNames.length; t++)
        e[this._evalArgNames[t]] = this._evalArgValues[t]; return e; }
    visitExternalExpr(e, t) { return this._emitReferenceToExternal(e, this.refResolver.resolveExternalReference(e.value), t), null; }
    visitWrappedNodeExpr(e, t) { return this._emitReferenceToExternal(e, e.node, t), null; }
    visitDeclareVarStmt(e, t) { return e.hasModifier(ue.Exported) && this._evalExportedVars.push(e.name), super.visitDeclareVarStmt(e, t); }
    visitDeclareFunctionStmt(e, t) { return e.hasModifier(ue.Exported) && this._evalExportedVars.push(e.name), super.visitDeclareFunctionStmt(e, t); }
    _emitReferenceToExternal(e, t, s) { let r = this._evalArgValues.indexOf(t); if (r === -1) {
        r = this._evalArgValues.length, this._evalArgValues.push(t);
        let i = sg({ reference: t }) || "val";
        this._evalArgNames.push(`jit_${i}_${r}`);
    } s.print(e, this._evalArgNames[r]); }
};
function ag(n) { return n.isEquivalent(d("use strict").toStmt()); }
function Hu(n) { let e = new oe; n.providers !== null && e.set("providers", n.providers), n.imports.length > 0 && e.set("imports", q(n.imports)); let t = y(f.defineInjector).callFn([e.toLiteralMap()], void 0, !0), s = uf(n); return { expression: t, type: s, statements: [] }; }
function uf(n) { return new st(y(f.InjectorDeclaration, [new st(n.type.type)])); }
var Fl = class {
    context;
    constructor(e) { this.context = e; }
    resolveExternalReference(e) { if (e.moduleName !== "@angular/core")
        throw new Error(`Cannot resolve external reference to ${e.moduleName}, only references to @angular/core are supported.`); if (!this.context.hasOwnProperty(e.name))
        throw new Error(`No value provided for @angular/core symbol '${e.name}'.`); return this.context[e.name]; }
}, Ba = (function (n) { return n[n.Inline = 0] = "Inline", n[n.SideEffect = 1] = "SideEffect", n[n.Omit = 2] = "Omit", n; })(Ba || {}), Jt = (function (n) { return n[n.Global = 0] = "Global", n[n.Local = 1] = "Local", n; })(Jt || {});
function og(n) { let e = [], t = new oe; if (t.set("type", n.type.value), n.kind === Jt.Global && n.bootstrap.length > 0 && t.set("bootstrap", kt(n.bootstrap, n.containsForwardDecls)), n.selectorScopeMode === Ba.Inline)
    n.declarations.length > 0 && t.set("declarations", kt(n.declarations, n.containsForwardDecls)), n.imports.length > 0 && t.set("imports", kt(n.imports, n.containsForwardDecls)), n.exports.length > 0 && t.set("exports", kt(n.exports, n.containsForwardDecls));
else if (n.selectorScopeMode === Ba.SideEffect) {
    let i = cg(n);
    i !== null && e.push(i);
} n.schemas !== null && n.schemas.length > 0 && t.set("schemas", q(n.schemas.map(i => i.value))), n.id !== null && (t.set("id", n.id), e.push(y(f.registerNgModuleType).callFn([n.type.value, n.id]).toStmt())); let s = y(f.defineNgModule).callFn([t.toLiteralMap()], void 0, !0), r = hf(n); return { expression: s, type: r, statements: e }; }
function lg(n) { let e = new oe; return e.set("type", new W(n.type)), n.bootstrap !== void 0 && e.set("bootstrap", new W(n.bootstrap)), n.declarations !== void 0 && e.set("declarations", new W(n.declarations)), n.imports !== void 0 && e.set("imports", new W(n.imports)), n.exports !== void 0 && e.set("exports", new W(n.exports)), n.schemas !== void 0 && e.set("schemas", new W(n.schemas)), n.id !== void 0 && e.set("id", new W(n.id)), y(f.defineNgModule).callFn([e.toLiteralMap()]); }
function hf(n) { if (n.kind === Jt.Local)
    return new st(n.type.value); let { type: e, declarations: t, exports: s, imports: r, includeImportTypes: i, publicDeclarationTypes: a } = n; return new st(y(f.NgModuleDeclaration, [new st(e.type), a === null ? To(t) : ug(a), i ? To(r) : bt, To(s)])); }
function cg(n) { let e = new oe; if (n.kind === Jt.Global ? n.declarations.length > 0 && e.set("declarations", kt(n.declarations, n.containsForwardDecls)) : n.declarationsExpression && e.set("declarations", n.declarationsExpression), n.kind === Jt.Global ? n.imports.length > 0 && e.set("imports", kt(n.imports, n.containsForwardDecls)) : n.importsExpression && e.set("imports", n.importsExpression), n.kind === Jt.Global ? n.exports.length > 0 && e.set("exports", kt(n.exports, n.containsForwardDecls)) : n.exportsExpression && e.set("exports", n.exportsExpression), n.kind === Jt.Local && n.bootstrapExpression && e.set("bootstrap", n.bootstrapExpression), Object.keys(e.values).length === 0)
    return null; let t = new He(y(f.setNgModuleScope), [n.type.value, e.toLiteralMap()]), s = Am(t), r = new en([], [s.toStmt()]); return new He(r, []).toStmt(); }
function To(n) { let e = n.map(t => ar(t.type)); return n.length > 0 ? xe(q(e)) : bt; }
function ug(n) { let e = n.map(t => ar(t)); return n.length > 0 ? xe(q(e)) : bt; }
function Wu(n) { let e = []; e.push({ key: "name", value: d(n.pipeName ?? n.name), quoted: !1 }), e.push({ key: "type", value: n.type.value, quoted: !1 }), e.push({ key: "pure", value: d(n.pure), quoted: !1 }), n.isStandalone === !1 && e.push({ key: "standalone", value: d(!1), quoted: !1 }); let t = y(f.definePipe).callFn([Ce(e)], void 0, !0), s = pf(n); return { expression: t, type: s, statements: [] }; }
function pf(n) { return new st(y(f.PipeDeclaration, [vo(n.type.type, n.typeArgumentCount), new st(new ye(n.pipeName)), new st(new ye(n.isStandalone))])); }
var tn = (function (n) { return n[n.Directive = 0] = "Directive", n[n.Pipe = 1] = "Pipe", n[n.NgModule = 2] = "NgModule", n; })(tn || {}), hg = new Set(["inherit", "initial", "revert", "unset", "alternate", "alternate-reverse", "normal", "reverse", "backwards", "both", "forwards", "none", "paused", "running", "ease", "ease-in", "ease-in-out", "ease-out", "linear", "step-start", "step-end", "end", "jump-both", "jump-end", "jump-none", "jump-start", "start"]), pg = ["@media", "@supports", "@document", "@layer", "@container", "@scope", "@starting-style"], Ma = class {
    shimCssText(e, t, s = "") { let r = []; e = e.replace(Tg, o => { if (o.match(Ig))
        r.push(o);
    else {
        let l = o.match(bg);
        r.push(l?.join("") ?? "");
    } return cu; }), e = this._insertDirectives(e); let i = this._scopeCssText(e, t, s), a = 0; return i.replace(Ng, () => r[a++]); }
    _insertDirectives(e) { return e = this._insertPolyfillDirectivesInCssText(e), this._insertPolyfillRulesInCssText(e); }
    _scopeKeyframesRelatedCss(e, t) { let s = new Set, r = ji(e, i => this._scopeLocalKeyframeDeclarations(i, t, s)); return ji(r, i => this._scopeAnimationRule(i, t, s)); }
    _scopeLocalKeyframeDeclarations(e, t, s) { return pe(S({}, e), { selector: e.selector.replace(/(^@(?:-webkit-)?keyframes(?:\s+))(['"]?)(.+)\2(\s*)$/, (r, i, a, o, l) => (s.add(Gu(o, a)), `${i}${a}${t}_${o}${a}${l}`)) }); }
    _scopeAnimationKeyframe(e, t, s) { return e.replace(/^(\s*)(['"]?)(.+?)\2(\s*)$/, (r, i, a, o, l) => (o = `${s.has(Gu(o, a)) ? t + "_" : ""}${o}`, `${i}${a}${o}${a}${l}`)); }
    _animationDeclarationKeyframesRe = /(^|\s+|,)(?:(?:(['"])((?:\\\\|\\\2|(?!\2).)+)\2)|(-?[A-Za-z][\w\-]*))(?=[,\s]|$)/g;
    _scopeAnimationRule(e, t, s) { let r = e.content.replace(/((?:^|\s+|;)(?:-webkit-)?animation\s*:\s*),*([^;]+)/g, (i, a, o) => a + o.replace(this._animationDeclarationKeyframesRe, (l, c, h = "", p, m) => p ? `${c}${this._scopeAnimationKeyframe(`${h}${p}${h}`, t, s)}` : hg.has(m) ? l : `${c}${this._scopeAnimationKeyframe(m, t, s)}`)); return r = r.replace(/((?:^|\s+|;)(?:-webkit-)?animation-name(?:\s*):(?:\s*))([^;]+)/g, (i, a, o) => `${a}${o.split(",").map(l => this._scopeAnimationKeyframe(l, t, s)).join(",")}`), pe(S({}, e), { content: r }); }
    _insertPolyfillDirectivesInCssText(e) { return e.replace(dg, function (...t) { return t[2] + "{"; }); }
    _insertPolyfillRulesInCssText(e) { return e.replace(mg, (...t) => { let s = t[0].replace(t[1], "").replace(t[2], ""); return t[4] + s; }); }
    _scopeCssText(e, t, s) {
        let r = this._extractUnscopedRulesFromCssText(e);
        return e = this._insertPolyfillHostInCssText(e), e = this._convertColonHost(e), e = this._convertColonHostContext(e), e = this._convertShadowDOMSelectors(e), t && (e = this._scopeKeyframesRelatedCss(e, t), e = this._scopeSelectors(e, t, s)), e = e + `
` + r, e.trim();
    }
    _extractUnscopedRulesFromCssText(e) {
        let t = "", s;
        for (ju.lastIndex = 0; (s = ju.exec(e)) !== null;) {
            let r = s[0].replace(s[2], "").replace(s[1], s[4]);
            t += r + `

`;
        }
        return t;
    }
    _convertColonHost(e) { return e.replace(Eg, (t, s, r) => { if (s) {
        let i = [];
        for (let a of this._splitOnTopLevelCommas(s, !0)) {
            let o = a.trim();
            if (!o)
                break;
            let l = mn + o.replace(Ra, "") + r;
            i.push(l);
        }
        return i.join(",");
    }
    else
        return mn + r; }); }
    *_splitOnTopLevelCommas(e, t) { let s = e.length, r = 0, i = 0; for (let a = 0; a < s; a++) {
        let o = e.charCodeAt(a);
        if (o === Oe)
            r++;
        else if (o === ge) {
            if (r--, r < 0 && t) {
                yield e.slice(i, a);
                return;
            }
        }
        else
            o === Pe && r === 0 && (yield e.slice(i, a), i = a + 1);
    } yield e.slice(i); }
    _convertColonHostContext(e) { let t = []; for (let s of this._splitOnTopLevelCommas(e, !1))
        t.push(this._convertColonHostContextInSelectorPart(s)); return t.join(","); }
    _convertColonHostContextInSelectorPart(e) { return e.replace(xg, (t, s) => { let r = [[]], i = t.indexOf(Is); for (; i !== -1;) {
        let a = t.substring(i + Is.length);
        if (!a || a[0] !== "(") {
            t = a, i = t.indexOf(Is);
            continue;
        }
        let o = [], l = 0;
        for (let h of this._splitOnTopLevelCommas(a.substring(1), !0)) {
            l = l + h.length + 1;
            let p = h.trim();
            p && o.push(p);
        }
        let c = r.length;
        qg(r, o.length);
        for (let h = 0; h < o.length; h++)
            for (let p = 0; p < c; p++)
                r[p + h * c].push(o[h]);
        t = a.substring(l + 1), i = t.indexOf(Is);
    } return r.map(a => Vg(a, t, s)).join(", "); }); }
    _convertShadowDOMSelectors(e) { return Cg.reduce((t, s) => t.replace(s, " "), e); }
    _scopeSelectors(e, t, s) { return ji(e, r => { let i = r.selector, a = r.content; return r.selector[0] !== "@" ? i = this._scopeSelector({ selector: i, scopeSelector: t, hostSelector: s, isParentSelector: !0 }) : pg.some(o => r.selector.startsWith(o)) ? a = this._scopeSelectors(r.content, t, s) : (r.selector.startsWith("@font-face") || r.selector.startsWith("@page")) && (a = this._stripScopingSelectors(r.content)), new wi(i, a); }); }
    _stripScopingSelectors(e) { return ji(e, t => { let s = t.selector.replace(zu, " ").replace(Io, " "); return new wi(s, t.content); }); }
    _safeSelector;
    _shouldScopeIndicator;
    _scopeSelector({ selector: e, scopeSelector: t, hostSelector: s, isParentSelector: r = !1 }) { let i = / ?,(?!(?:[^)(]*(?:\([^)(]*(?:\([^)(]*(?:\([^)(]*\)[^)(]*)*\)[^)(]*)*\)[^)(]*)*\))) ?/; return e.split(i).map(a => a.split(zu)).map(a => { let [o, ...l] = a; return [(h => this._selectorNeedsScoping(h, t) ? this._applySelectorScope({ selector: h, scopeSelector: t, hostSelector: s, isParentSelector: r }) : h)(o), ...l].join(" "); }).join(", "); }
    _selectorNeedsScoping(e, t) { return !this._makeScopeMatcher(t).test(e); }
    _makeScopeMatcher(e) { let t = /\[/g, s = /\]/g; return e = e.replace(t, "\\[").replace(s, "\\]"), new RegExp("^(" + e + ")" + Ag, "m"); }
    _applySimpleSelectorScope(e, t, s) { if (Bs.lastIndex = 0, Bs.test(e)) {
        let r = `[${s}]`, i = e;
        for (; i.match(Io);)
            i = i.replace(Io, (a, o) => o.replace(/([^:\)]*)(:*)(.*)/, (l, c, h, p) => c + r + h + p));
        return i.replace(Bs, r);
    } return t + " " + e; }
    _applySelectorScope({ selector: e, scopeSelector: t, hostSelector: s, isParentSelector: r }) { let i = /\[is=([^\]]*)\]/g; t = t.replace(i, (C, ...T) => T[0]); let a = `[${t}]`, o = C => { let T = C.trim(); if (!T)
        return C; if (C.includes(mn)) {
        if (T = this._applySimpleSelectorScope(C, t, s), !C.match(yg)) {
            let [k, R, se, O] = T.match(/([^:]*)(:*)([\s\S]*)/);
            T = R + a + se + O;
        }
    }
    else {
        let k = C.replace(Bs, "");
        if (k.length > 0) {
            let R = k.match(/([^:]*)(:*)([\s\S]*)/);
            R && (T = R[1] + a + R[2] + R[3]);
        }
    } return T; }, l = C => { let T = "", k = [], R; for (; (R = dr.exec(C)) !== null;) {
        let se = 1, O = dr.lastIndex;
        for (; O < C.length;) {
            let yt = C[O];
            if (O++, yt === "(") {
                se++;
                continue;
            }
            if (yt === ")") {
                if (se--, se === 0)
                    break;
                continue;
            }
        }
        k.push(`${R[0]}${C.slice(dr.lastIndex, O)}`), dr.lastIndex = O;
    } return k.join("") === C ? T = k.map(se => { let [O] = se.match(dr) ?? [], yt = se.slice(O?.length, -1); yt.includes(mn) && (this._shouldScopeIndicator = !0); let pr = this._scopeSelector({ selector: yt, scopeSelector: t, hostSelector: s }); return `${O}${pr})`; }).join("") : (this._shouldScopeIndicator = this._shouldScopeIndicator || C.includes(mn), T = this._shouldScopeIndicator ? o(C) : C), T; }; r && (this._safeSelector = new $l(e), e = this._safeSelector.content()); let c = "", h = 0, p, m = /( |>|\+|~(?!=))(?!([^)(]*(?:\([^)(]*(?:\([^)(]*(?:\([^)(]*\)[^)(]*)*\)[^)(]*)*\)[^)(]*)*\)))\s*/g, v = e.includes(mn); for ((r || this._shouldScopeIndicator) && (this._shouldScopeIndicator = !v); (p = m.exec(e)) !== null;) {
        let C = p[1], T = e.slice(h, p.index);
        if (T.match(/__esc-ph-(\d+)__/) && e[p.index + 1]?.match(/[a-fA-F\d]/))
            continue;
        let k = l(T);
        c += `${k} ${C} `, h = m.lastIndex;
    } let w = e.substring(h); return c += l(w), this._safeSelector.restore(c); }
    _insertPolyfillHostInCssText(e) { return e.replace(_g, Is).replace(kg, Ra); }
}, $l = class {
    placeholders = [];
    index = 0;
    _content;
    constructor(e) { e = this._escapeRegexMatches(e, /(\[[^\]]*\])/g), e = e.replace(/(\\.)/g, (t, s) => { let r = `__esc-ph-${this.index}__`; return this.placeholders.push(s), this.index++, r; }), this._content = e.replace(wg, (t, s, r) => { let i = `__ph-${this.index}__`; return this.placeholders.push(`(${r})`), this.index++, s + i; }); }
    restore(e) { return e.replace(/__(?:ph|esc-ph)-(\d+)__/g, (t, s) => this.placeholders[+s]); }
    content() { return this._content; }
    _escapeRegexMatches(e, t) { return e.replace(t, (s, r) => { let i = `__ph-${this.index}__`; return this.placeholders.push(r), this.index++, i; }); }
}, fg = "(:(where|is)\\()?", dr = /:(where|is)\(/gi, dg = /polyfill-next-selector[^}]*content:[\s]*?(['"])(.*?)\1[;\s]*}([^{]*?){/gim, mg = /(polyfill-rule)[^}]*(content:[\s]*(['"])(.*?)\3)[;\s]*[^}]*}/gim, ju = /(polyfill-unscoped-rule)[^}]*(content:[\s]*(['"])(.*?)\3)[;\s]*[^}]*}/gim, Ra = "-shadowcsshost", Is = "-shadowcsscontext", Ol = "[^)(]*", gg = String.raw `(?:\(${Ol}\)|${Ol})+?`, vg = String.raw `(?:\(${gg}\)|${Ol})+?`, lu = String.raw `(?:\((${vg})\))`, wg = new RegExp(String.raw `(:nth-[-\w]+)` + lu, "g"), Eg = new RegExp(Ra + lu + "?([^,{]*)", "gim"), Sg = Is + lu + "?([^{]*)", xg = new RegExp(`${fg}(${Sg})`, "gim"), mn = Ra + "-no-combinator", yg = new RegExp(`${mn}(?![^(]*\\))`, "g"), Io = /-shadowcsshost-no-combinator([^\s,]*)/, Cg = [/::shadow/g, /::content/g, /\/shadow-deep\//g, /\/shadow\//g], zu = /(?:>>>)|(?:\/deep\/)|(?:::ng-deep)/g, Ag = "([>\\s~+[.,{:][\\s\\S]*)?$", Bs = /-shadowcsshost/gim, kg = /:host/gim, _g = /:host-context/gim, bg = /\r?\n/g, Tg = /\/\*[\s\S]*?\*\//g, Ig = /\/\*\s*#\s*source(Mapping)?URL=/g, cu = "%COMMENT%", Ng = new RegExp(cu, "g"), No = "%BLOCK%", Dg = new RegExp(`(\\s*(?:${cu}\\s*)*)([^;\\{\\}]+?)(\\s*)((?:{%BLOCK%}?\\s*;?)|(?:\\s*;))`, "g"), Pg = new Map([["{", "}"]]), ff = "%COMMA_IN_PLACEHOLDER%", df = "%SEMI_IN_PLACEHOLDER%", mf = "%COLON_IN_PLACEHOLDER%", Lg = new RegExp(ff, "g"), Bg = new RegExp(df, "g"), Mg = new RegExp(mf, "g"), wi = class {
    selector;
    content;
    constructor(e, t) { this.selector = e, this.content = t; }
};
function ji(n, e) { let t = $g(n), s = Rg(t, Pg, No), r = 0, i = s.escapedString.replace(Dg, (...a) => { let o = a[2], l = "", c = a[4], h = ""; c && c.startsWith("{" + No) && (l = s.blocks[r++], c = c.substring(No.length + 1), h = "{"); let p = e(new wi(o, l)); return `${a[1]}${p.selector}${a[3]}${h}${p.content}${c}`; }); return Og(i); }
var Vl = class {
    escapedString;
    blocks;
    constructor(e, t) { this.escapedString = e, this.blocks = t; }
};
function Rg(n, e, t) { let s = [], r = [], i = 0, a = 0, o = -1, l, c; for (let h = 0; h < n.length; h++) {
    let p = n[h];
    p === "\\" ? h++ : p === c ? (i--, i === 0 && (r.push(n.substring(o, h)), s.push(t), a = h, o = -1, l = c = void 0)) : p === l ? i++ : i === 0 && e.has(p) && (l = p, c = e.get(p), i = 1, o = h + 1, s.push(n.substring(a, o)));
} return o !== -1 ? (r.push(n.substring(o)), s.push(t)) : s.push(n.substring(a)), new Vl(s.join(""), r); }
var Fg = { ";": df, ",": ff, ":": mf };
function $g(n) { let e = n, t = null; for (let s = 0; s < e.length; s++) {
    let r = e[s];
    if (r === "\\")
        s++;
    else if (t !== null)
        if (r === t)
            t = null;
        else {
            let i = Fg[r];
            i && (e = `${e.substr(0, s)}${i}${e.substr(s + 1)}`, s += i.length - 1);
        }
    else
        (r === "'" || r === '"') && (t = r);
} return e; }
function Og(n) { let e = n.replace(Lg, ","); return e = e.replace(Bg, ";"), e = e.replace(Mg, ":"), e; }
function Gu(n, e) { return e ? n.replace(/((?:^|[^\\])(?:\\\\)*)\\(?=['"])/g, "$1") : n; }
function Vg(n, e, t = "") { let s = mn; Bs.lastIndex = 0; let r = Bs.test(e); if (n.length === 0)
    return s + e; let i = [n.pop() || ""]; for (; n.length > 0;) {
    let a = i.length, o = n.pop();
    for (let l = 0; l < a; l++) {
        let c = i[l];
        i[a * 2 + l] = c + " " + o, i[a + l] = o + " " + c, i[l] = o + c;
    }
} return i.map(a => r ? `${t}${a}${e}` : `${t}${a}${s}${e}, ${t}${a} ${s}${e}`).join(","); }
function qg(n, e) { let t = n.length; for (let s = 1; s < e; s++)
    for (let r = 0; r < t; r++)
        n[r + s * t] = n[r].slice(0); }
var u = (function (n) { return n[n.ListEnd = 0] = "ListEnd", n[n.Statement = 1] = "Statement", n[n.Variable = 2] = "Variable", n[n.ElementStart = 3] = "ElementStart", n[n.Element = 4] = "Element", n[n.Template = 5] = "Template", n[n.ElementEnd = 6] = "ElementEnd", n[n.ContainerStart = 7] = "ContainerStart", n[n.Container = 8] = "Container", n[n.ContainerEnd = 9] = "ContainerEnd", n[n.DisableBindings = 10] = "DisableBindings", n[n.ConditionalCreate = 11] = "ConditionalCreate", n[n.ConditionalBranchCreate = 12] = "ConditionalBranchCreate", n[n.Conditional = 13] = "Conditional", n[n.EnableBindings = 14] = "EnableBindings", n[n.Text = 15] = "Text", n[n.Listener = 16] = "Listener", n[n.InterpolateText = 17] = "InterpolateText", n[n.Binding = 18] = "Binding", n[n.Property = 19] = "Property", n[n.StyleProp = 20] = "StyleProp", n[n.ClassProp = 21] = "ClassProp", n[n.StyleMap = 22] = "StyleMap", n[n.ClassMap = 23] = "ClassMap", n[n.Advance = 24] = "Advance", n[n.Pipe = 25] = "Pipe", n[n.Attribute = 26] = "Attribute", n[n.ExtractedAttribute = 27] = "ExtractedAttribute", n[n.Defer = 28] = "Defer", n[n.DeferOn = 29] = "DeferOn", n[n.DeferWhen = 30] = "DeferWhen", n[n.I18nMessage = 31] = "I18nMessage", n[n.DomProperty = 32] = "DomProperty", n[n.Namespace = 33] = "Namespace", n[n.ProjectionDef = 34] = "ProjectionDef", n[n.Projection = 35] = "Projection", n[n.RepeaterCreate = 36] = "RepeaterCreate", n[n.Repeater = 37] = "Repeater", n[n.TwoWayProperty = 38] = "TwoWayProperty", n[n.TwoWayListener = 39] = "TwoWayListener", n[n.DeclareLet = 40] = "DeclareLet", n[n.StoreLet = 41] = "StoreLet", n[n.I18nStart = 42] = "I18nStart", n[n.I18n = 43] = "I18n", n[n.I18nEnd = 44] = "I18nEnd", n[n.I18nExpression = 45] = "I18nExpression", n[n.I18nApply = 46] = "I18nApply", n[n.IcuStart = 47] = "IcuStart", n[n.IcuEnd = 48] = "IcuEnd", n[n.IcuPlaceholder = 49] = "IcuPlaceholder", n[n.I18nContext = 50] = "I18nContext", n[n.I18nAttributes = 51] = "I18nAttributes", n[n.SourceLocation = 52] = "SourceLocation", n[n.Animation = 53] = "Animation", n[n.AnimationString = 54] = "AnimationString", n[n.AnimationBinding = 55] = "AnimationBinding", n[n.AnimationListener = 56] = "AnimationListener", n[n.Control = 57] = "Control", n[n.ControlCreate = 58] = "ControlCreate", n; })(u || {}), N = (function (n) { return n[n.LexicalRead = 0] = "LexicalRead", n[n.Context = 1] = "Context", n[n.TrackContext = 2] = "TrackContext", n[n.ReadVariable = 3] = "ReadVariable", n[n.NextContext = 4] = "NextContext", n[n.Reference = 5] = "Reference", n[n.StoreLet = 6] = "StoreLet", n[n.ContextLetReference = 7] = "ContextLetReference", n[n.GetCurrentView = 8] = "GetCurrentView", n[n.RestoreView = 9] = "RestoreView", n[n.ResetView = 10] = "ResetView", n[n.PureFunctionExpr = 11] = "PureFunctionExpr", n[n.PureFunctionParameterExpr = 12] = "PureFunctionParameterExpr", n[n.PipeBinding = 13] = "PipeBinding", n[n.PipeBindingVariadic = 14] = "PipeBindingVariadic", n[n.SafePropertyRead = 15] = "SafePropertyRead", n[n.SafeKeyedRead = 16] = "SafeKeyedRead", n[n.SafeInvokeFunction = 17] = "SafeInvokeFunction", n[n.SafeTernaryExpr = 18] = "SafeTernaryExpr", n[n.EmptyExpr = 19] = "EmptyExpr", n[n.AssignTemporaryExpr = 20] = "AssignTemporaryExpr", n[n.ReadTemporaryExpr = 21] = "ReadTemporaryExpr", n[n.SlotLiteralExpr = 22] = "SlotLiteralExpr", n[n.ConditionalCase = 23] = "ConditionalCase", n[n.ConstCollected = 24] = "ConstCollected", n[n.TwoWayBindingSet = 25] = "TwoWayBindingSet", n[n.ArrowFunction = 26] = "ArrowFunction", n; })(N || {}), ft = (function (n) { return n[n.None = 0] = "None", n[n.AlwaysInline = 1] = "AlwaysInline", n; })(ft || {}), Te = (function (n) { return n[n.Context = 0] = "Context", n[n.Identifier = 1] = "Identifier", n[n.SavedView = 2] = "SavedView", n[n.Alias = 3] = "Alias", n; })(Te || {}), b = (function (n) { return n[n.Attribute = 0] = "Attribute", n[n.ClassName = 1] = "ClassName", n[n.StyleProperty = 2] = "StyleProperty", n[n.Property = 3] = "Property", n[n.Template = 4] = "Template", n[n.I18n = 5] = "I18n", n[n.LegacyAnimation = 6] = "LegacyAnimation", n[n.TwoWayProperty = 7] = "TwoWayProperty", n[n.Animation = 8] = "Animation", n; })(b || {}), Ei = (function (n) { return n[n.Creation = 0] = "Creation", n[n.Postproccessing = 1] = "Postproccessing", n; })(Ei || {}), cr = (function (n) { return n[n.I18nText = 0] = "I18nText", n[n.I18nAttribute = 1] = "I18nAttribute", n; })(cr || {}), ne = (function (n) { return n[n.None = 0] = "None", n[n.ElementTag = 1] = "ElementTag", n[n.TemplateTag = 2] = "TemplateTag", n[n.OpenTag = 4] = "OpenTag", n[n.CloseTag = 8] = "CloseTag", n[n.ExpressionIndex = 16] = "ExpressionIndex", n; })(ne || {}), ve = (function (n) { return n[n.HTML = 0] = "HTML", n[n.SVG = 1] = "SVG", n[n.Math = 2] = "Math", n; })(ve || {}), ee = (function (n) { return n[n.Idle = 0] = "Idle", n[n.Immediate = 1] = "Immediate", n[n.Timer = 2] = "Timer", n[n.Hover = 3] = "Hover", n[n.Interaction = 4] = "Interaction", n[n.Viewport = 5] = "Viewport", n[n.Never = 6] = "Never", n; })(ee || {}), Zn = (function (n) { return n[n.RootI18n = 0] = "RootI18n", n[n.Icu = 1] = "Icu", n[n.Attr = 2] = "Attr", n; })(Zn || {}), Xe = (function (n) { return n[n.NgTemplate = 0] = "NgTemplate", n[n.Structural = 1] = "Structural", n[n.Block = 2] = "Block", n; })(Xe || {}), E = (() => { class n {
    static nextListId = 0;
    debugListId = n.nextListId++;
    head = { kind: u.ListEnd, next: null, prev: null, debugListId: this.debugListId };
    tail = { kind: u.ListEnd, next: null, prev: null, debugListId: this.debugListId };
    constructor() { this.head.next = this.tail, this.tail.prev = this.head; }
    push(t) { if (Array.isArray(t)) {
        for (let r of t)
            this.push(r);
        return;
    } n.assertIsNotEnd(t), n.assertIsUnowned(t), t.debugListId = this.debugListId; let s = this.tail.prev; t.prev = s, s.next = t, t.next = this.tail, this.tail.prev = t; }
    prepend(t) { if (t.length === 0)
        return; for (let i of t)
        n.assertIsNotEnd(i), n.assertIsUnowned(i), i.debugListId = this.debugListId; let s = this.head.next, r = this.head; for (let i of t)
        r.next = i, i.prev = r, r = i; r.next = s, s.prev = r; }
    *[Symbol.iterator]() { let t = this.head.next; for (; t !== this.tail;) {
        n.assertIsOwned(t, this.debugListId);
        let s = t.next;
        yield t, t = s;
    } }
    *reversed() { let t = this.tail.prev; for (; t !== this.head;) {
        n.assertIsOwned(t, this.debugListId);
        let s = t.prev;
        yield t, t = s;
    } }
    static replace(t, s) { n.assertIsNotEnd(t), n.assertIsNotEnd(s), n.assertIsOwned(t), n.assertIsUnowned(s), s.debugListId = t.debugListId, t.prev !== null && (t.prev.next = s, s.prev = t.prev), t.next !== null && (t.next.prev = s, s.next = t.next), t.debugListId = null, t.prev = null, t.next = null; }
    static replaceWithMany(t, s) { if (s.length === 0) {
        n.remove(t);
        return;
    } n.assertIsNotEnd(t), n.assertIsOwned(t); let r = t.debugListId; t.debugListId = null; for (let h of s)
        n.assertIsNotEnd(h), n.assertIsUnowned(h); let { prev: i, next: a } = t; t.prev = null, t.next = null; let o = i; for (let h of s)
        n.assertIsUnowned(h), h.debugListId = r, o.next = h, h.prev = o, h.next = null, o = h; let l = s[0], c = o; i !== null && (i.next = l, l.prev = i), a !== null && (a.prev = c, c.next = a); }
    static remove(t) { n.assertIsNotEnd(t), n.assertIsOwned(t), t.prev.next = t.next, t.next.prev = t.prev, t.debugListId = null, t.prev = null, t.next = null; }
    static insertBefore(t, s) { if (Array.isArray(t)) {
        for (let r of t)
            n.insertBefore(r, s);
        return;
    } if (n.assertIsOwned(s), s.prev === null)
        throw new Error("AssertionError: illegal operation on list start"); n.assertIsNotEnd(t), n.assertIsUnowned(t), t.debugListId = s.debugListId, t.prev = null, s.prev.next = t, t.prev = s.prev, t.next = s, s.prev = t; }
    static insertAfter(t, s) { if (n.assertIsOwned(s), s.next === null)
        throw new Error("AssertionError: illegal operation on list end"); n.assertIsNotEnd(t), n.assertIsUnowned(t), t.debugListId = s.debugListId, s.next.prev = t, t.next = s.next, t.prev = s, s.next = t; }
    static assertIsUnowned(t) { if (t.debugListId !== null)
        throw new Error(`AssertionError: illegal operation on owned node: ${u[t.kind]}`); }
    static assertIsOwned(t, s) { if (t.debugListId === null)
        throw new Error(`AssertionError: illegal operation on unowned node: ${u[t.kind]}`); if (s !== void 0 && t.debugListId !== s)
        throw new Error(`AssertionError: node belongs to the wrong list (expected ${s}, actual ${t.debugListId})`); }
    static assertIsNotEnd(t) { if (t.kind === u.ListEnd)
        throw new Error("AssertionError: illegal operation on list head or tail"); }
} return n; })();
function ot(n) { return S({ kind: u.Statement, statement: n }, M); }
function vn(n, e, t, s) { return S({ kind: u.Variable, xref: n, variable: e, initializer: t, flags: s }, M); }
var M = { debugListId: null, prev: null, next: null }, gf = Symbol("ConsumesSlot"), uu = Symbol("DependsOnSlotContext"), xs = Symbol("ConsumesVars"), Ui = Symbol("UsesVarOffset"), xt = { [gf]: !0, numSlotsUsed: 1 }, Ze = { [uu]: !0 }, Je = { [xs]: !0 };
function ur(n) { return n[gf] === !0; }
function Si(n) { return n[uu] === !0; }
function Do(n) { return n[xs] === !0; }
function Xu(n) { return n[Ui] === !0; }
function Ug(n, e, t) { return S(S(S({ kind: u.InterpolateText, target: n, interpolation: e, sourceSpan: t }, Ze), Je), M); }
var le = class {
    strings;
    expressions;
    i18nPlaceholders;
    constructor(e, t, s) { if (this.strings = e, this.expressions = t, this.i18nPlaceholders = s, s.length !== 0 && s.length !== t.length)
        throw new Error(`Expected ${t.length} placeholders to match interpolation expression count, but got ${s.length}`); }
};
function vs(n, e, t, s, r, i, a, o, l, c, h) { return S({ kind: u.Binding, bindingKind: e, target: n, name: t, expression: s, unit: r, securityContext: i, isTextAttribute: a, isStructuralTemplateAttribute: o, templateKind: l, i18nContext: null, i18nMessage: c, sourceSpan: h }, M); }
function Hg(n, e, t, s, r, i, a, o, l, c) { return S(S(S({ kind: u.Property, target: n, name: e, expression: t, bindingKind: s, securityContext: r, sanitizer: null, isStructuralTemplateAttribute: i, templateKind: a, i18nContext: o, i18nMessage: l, sourceSpan: c }, Ze), Je), M); }
function Wg(n, e, t, s, r, i, a, o, l) { return S(S(S({ kind: u.TwoWayProperty, target: n, name: e, expression: t, securityContext: s, sanitizer: null, isStructuralTemplateAttribute: r, templateKind: i, i18nContext: a, i18nMessage: o, sourceSpan: l }, Ze), Je), M); }
function jg(n, e, t, s, r) { return S(S(S({ kind: u.StyleProp, target: n, name: e, expression: t, unit: s, sourceSpan: r }, Ze), Je), M); }
function zg(n, e, t, s) { return S(S(S({ kind: u.ClassProp, target: n, name: e, expression: t, sourceSpan: s }, Ze), Je), M); }
function Gg(n, e, t) { return S(S(S({ kind: u.StyleMap, target: n, expression: e, sourceSpan: t }, Ze), Je), M); }
function Xg(n, e, t) { return S(S(S({ kind: u.ClassMap, target: n, expression: e, sourceSpan: t }, Ze), Je), M); }
function Yu(n, e, t, s, r, i, a, o, l, c) { return S(S(S({ kind: u.Attribute, target: n, namespace: e, name: t, expression: s, securityContext: r, sanitizer: null, isTextAttribute: i, isStructuralTemplateAttribute: a, templateKind: o, i18nContext: null, i18nMessage: l, sourceSpan: c }, Ze), Je), M); }
function Yg(n, e) { return S({ kind: u.Advance, delta: n, sourceSpan: e }, M); }
function vf(n, e, t, s) { return S(S(S({ kind: u.Conditional, target: n, test: e, conditions: t, processed: null, sourceSpan: s, contextValue: null }, M), Ze), Je); }
function Qg(n, e, t, s) { return S(S({ kind: u.Repeater, target: n, targetSlot: e, collection: t, sourceSpan: s }, M), Ze); }
function Qu(n, e, t, s, r, i, a) { return S({ kind: u.AnimationBinding, name: n, target: e, animationKind: t, expression: s, i18nMessage: null, securityContext: r, sanitizer: null, sourceSpan: i, animationBindingKind: a }, M); }
function Zg(n, e, t, s) { return S(S(S({ kind: u.DeferWhen, target: n, expr: e, modifier: t, sourceSpan: s }, M), Ze), Je); }
function wf(n, e, t, s, r, i, a, o, l, c, h) { return S(S(S({ kind: u.I18nExpression, context: n, target: e, i18nOwner: t, handle: s, expression: r, icuPlaceholder: i, i18nPlaceholder: a, resolutionTime: o, usage: l, name: c, sourceSpan: h }, M), Je), Ze); }
function Jg(n, e, t) { return S({ kind: u.I18nApply, owner: n, handle: e, sourceSpan: t }, M); }
function Kg(n, e, t, s) { return S(S(S({ kind: u.StoreLet, target: n, declaredName: e, value: t, sourceSpan: s }, Ze), Je), M); }
function ev(n, e) { return S(S({ kind: u.Control, sourceSpan: e, target: n }, Ze), M); }
function Gt(n) { return n instanceof K; }
var K = class extends Q {
    constructor(e = null) { super(null, e); }
}, _e = class n extends K {
    name;
    kind = N.LexicalRead;
    constructor(e) { super(), this.name = e; }
    visitExpression(e, t) { }
    isEquivalent(e) { return this.name === e.name; }
    isConstant() { return !1; }
    transformInternalExpressions() { }
    clone() { return new n(this.name); }
}, Fa = class n extends K {
    target;
    targetSlot;
    offset;
    kind = N.Reference;
    constructor(e, t, s) { super(), this.target = e, this.targetSlot = t, this.offset = s; }
    visitExpression() { }
    isEquivalent(e) { return e instanceof n && e.target === this.target; }
    isConstant() { return !1; }
    transformInternalExpressions() { }
    clone() { return new n(this.target, this.targetSlot, this.offset); }
}, xi = class n extends K {
    target;
    value;
    sourceSpan;
    kind = N.StoreLet;
    [xs] = !0;
    [uu] = !0;
    constructor(e, t, s) { super(), this.target = e, this.value = t, this.sourceSpan = s; }
    visitExpression() { }
    isEquivalent(e) { return e instanceof n && e.target === this.target && e.value.isEquivalent(this.value); }
    isConstant() { return !1; }
    transformInternalExpressions(e, t) { this.value = _(this.value, e, t); }
    clone() { return new n(this.target, this.value, this.sourceSpan); }
}, yi = class n extends K {
    target;
    targetSlot;
    kind = N.ContextLetReference;
    constructor(e, t) { super(), this.target = e, this.targetSlot = t; }
    visitExpression() { }
    isEquivalent(e) { return e instanceof n && e.target === this.target; }
    isConstant() { return !1; }
    transformInternalExpressions() { }
    clone() { return new n(this.target, this.targetSlot); }
}, Pn = class n extends K {
    view;
    kind = N.Context;
    constructor(e) { super(), this.view = e; }
    visitExpression() { }
    isEquivalent(e) { return e instanceof n && e.view === this.view; }
    isConstant() { return !1; }
    transformInternalExpressions() { }
    clone() { return new n(this.view); }
}, ql = class n extends K {
    view;
    kind = N.TrackContext;
    constructor(e) { super(), this.view = e; }
    visitExpression() { }
    isEquivalent(e) { return e instanceof n && e.view === this.view; }
    isConstant() { return !1; }
    transformInternalExpressions() { }
    clone() { return new n(this.view); }
}, $a = class n extends K {
    kind = N.NextContext;
    steps = 1;
    visitExpression() { }
    isEquivalent(e) { return e instanceof n && e.steps === this.steps; }
    isConstant() { return !1; }
    transformInternalExpressions() { }
    clone() { let e = new n; return e.steps = this.steps, e; }
}, Ul = class n extends K {
    kind = N.GetCurrentView;
    constructor() { super(); }
    visitExpression() { }
    isEquivalent(e) { return e instanceof n; }
    isConstant() { return !1; }
    transformInternalExpressions() { }
    clone() { return new n; }
}, Ci = class n extends K {
    view;
    kind = N.RestoreView;
    constructor(e) { super(), this.view = e; }
    visitExpression(e, t) { typeof this.view != "number" && this.view.visitExpression(e, t); }
    isEquivalent(e) { return !(e instanceof n) || typeof e.view != typeof this.view ? !1 : typeof this.view == "number" ? this.view === e.view : this.view.isEquivalent(e.view); }
    isConstant() { return !1; }
    transformInternalExpressions(e, t) { typeof this.view != "number" && (this.view = _(this.view, e, t)); }
    clone() { return new n(this.view instanceof Q ? this.view.clone() : this.view); }
}, Oa = class n extends K {
    expr;
    kind = N.ResetView;
    constructor(e) { super(), this.expr = e; }
    visitExpression(e, t) { this.expr.visitExpression(e, t); }
    isEquivalent(e) { return e instanceof n && this.expr.isEquivalent(e.expr); }
    isConstant() { return !1; }
    transformInternalExpressions(e, t) { this.expr = _(this.expr, e, t); }
    clone() { return new n(this.expr.clone()); }
}, Va = class n extends K {
    target;
    value;
    kind = N.TwoWayBindingSet;
    constructor(e, t) { super(), this.target = e, this.value = t; }
    visitExpression(e, t) { this.target.visitExpression(e, t), this.value.visitExpression(e, t); }
    isEquivalent(e) { return this.target.isEquivalent(e.target) && this.value.isEquivalent(e.value); }
    isConstant() { return !1; }
    transformInternalExpressions(e, t) { this.target = _(this.target, e, t), this.value = _(this.value, e, t); }
    clone() { return new n(this.target, this.value); }
}, nn = class n extends K {
    xref;
    kind = N.ReadVariable;
    name = null;
    constructor(e) { super(), this.xref = e; }
    visitExpression() { }
    isEquivalent(e) { return e instanceof n && e.xref === this.xref; }
    isConstant() { return !1; }
    transformInternalExpressions() { }
    clone() { let e = new n(this.xref); return e.name = this.name, e; }
}, ws = class n extends K {
    kind = N.PureFunctionExpr;
    [xs] = !0;
    [Ui] = !0;
    varOffset = null;
    body;
    args;
    fn = null;
    constructor(e, t) { super(), this.body = e, this.args = t; }
    visitExpression(e, t) { this.body?.visitExpression(e, t); for (let s of this.args)
        s.visitExpression(e, t); }
    isEquivalent(e) { return !(e instanceof n) || e.args.length !== this.args.length ? !1 : e.body !== null && this.body !== null && e.body.isEquivalent(this.body) && e.args.every((t, s) => t.isEquivalent(this.args[s])); }
    isConstant() { return !1; }
    transformInternalExpressions(e, t) { this.body !== null ? this.body = _(this.body, e, t | U.InChildOperation) : this.fn !== null && (this.fn = _(this.fn, e, t)); for (let s = 0; s < this.args.length; s++)
        this.args[s] = _(this.args[s], e, t); }
    clone() { let e = new n(this.body?.clone() ?? null, this.args.map(t => t.clone())); return e.fn = this.fn?.clone() ?? null, e.varOffset = this.varOffset, e; }
}, Ln = class n extends K {
    index;
    kind = N.PureFunctionParameterExpr;
    constructor(e) { super(), this.index = e; }
    visitExpression() { }
    isEquivalent(e) { return e instanceof n && e.index === this.index; }
    isConstant() { return !0; }
    transformInternalExpressions() { }
    clone() { return new n(this.index); }
}, Es = class n extends K {
    target;
    targetSlot;
    name;
    args;
    kind = N.PipeBinding;
    [xs] = !0;
    [Ui] = !0;
    varOffset = null;
    constructor(e, t, s, r) { super(), this.target = e, this.targetSlot = t, this.name = s, this.args = r; }
    visitExpression(e, t) { for (let s of this.args)
        s.visitExpression(e, t); }
    isEquivalent() { return !1; }
    isConstant() { return !1; }
    transformInternalExpressions(e, t) { for (let s = 0; s < this.args.length; s++)
        this.args[s] = _(this.args[s], e, t); }
    clone() { let e = new n(this.target, this.targetSlot, this.name, this.args.map(t => t.clone())); return e.varOffset = this.varOffset, e; }
}, Ai = class n extends K {
    target;
    targetSlot;
    name;
    args;
    numArgs;
    kind = N.PipeBindingVariadic;
    [xs] = !0;
    [Ui] = !0;
    varOffset = null;
    constructor(e, t, s, r, i) { super(), this.target = e, this.targetSlot = t, this.name = s, this.args = r, this.numArgs = i; }
    visitExpression(e, t) { this.args.visitExpression(e, t); }
    isEquivalent() { return !1; }
    isConstant() { return !1; }
    transformInternalExpressions(e, t) { this.args = _(this.args, e, t); }
    clone() { let e = new n(this.target, this.targetSlot, this.name, this.args.clone(), this.numArgs); return e.varOffset = this.varOffset, e; }
}, Ks = class n extends K {
    receiver;
    name;
    kind = N.SafePropertyRead;
    constructor(e, t) { super(), this.receiver = e, this.name = t; }
    get index() { return this.name; }
    visitExpression(e, t) { this.receiver.visitExpression(e, t); }
    isEquivalent() { return !1; }
    isConstant() { return !1; }
    transformInternalExpressions(e, t) { this.receiver = _(this.receiver, e, t); }
    clone() { return new n(this.receiver.clone(), this.name); }
}, er = class n extends K {
    receiver;
    index;
    kind = N.SafeKeyedRead;
    constructor(e, t, s) { super(s), this.receiver = e, this.index = t; }
    visitExpression(e, t) { this.receiver.visitExpression(e, t), this.index.visitExpression(e, t); }
    isEquivalent() { return !1; }
    isConstant() { return !1; }
    transformInternalExpressions(e, t) { this.receiver = _(this.receiver, e, t), this.index = _(this.index, e, t); }
    clone() { return new n(this.receiver.clone(), this.index.clone(), this.sourceSpan); }
}, Ss = class n extends K {
    receiver;
    args;
    kind = N.SafeInvokeFunction;
    constructor(e, t) { super(), this.receiver = e, this.args = t; }
    visitExpression(e, t) { this.receiver.visitExpression(e, t); for (let s of this.args)
        s.visitExpression(e, t); }
    isEquivalent() { return !1; }
    isConstant() { return !1; }
    transformInternalExpressions(e, t) { this.receiver = _(this.receiver, e, t); for (let s = 0; s < this.args.length; s++)
        this.args[s] = _(this.args[s], e, t); }
    clone() { return new n(this.receiver.clone(), this.args.map(e => e.clone())); }
}, tr = class n extends K {
    guard;
    expr;
    kind = N.SafeTernaryExpr;
    constructor(e, t) { super(), this.guard = e, this.expr = t; }
    visitExpression(e, t) { this.guard.visitExpression(e, t), this.expr.visitExpression(e, t); }
    isEquivalent() { return !1; }
    isConstant() { return !1; }
    transformInternalExpressions(e, t) { this.guard = _(this.guard, e, t), this.expr = _(this.expr, e, t); }
    clone() { return new n(this.guard.clone(), this.expr.clone()); }
}, ki = class n extends K {
    kind = N.EmptyExpr;
    visitExpression(e, t) { }
    isEquivalent(e) { return e instanceof n; }
    isConstant() { return !0; }
    clone() { return new n; }
    transformInternalExpressions() { }
}, Xt = class n extends K {
    expr;
    xref;
    kind = N.AssignTemporaryExpr;
    name = null;
    constructor(e, t) { super(), this.expr = e, this.xref = t; }
    visitExpression(e, t) { this.expr.visitExpression(e, t); }
    isEquivalent() { return !1; }
    isConstant() { return !1; }
    transformInternalExpressions(e, t) { this.expr = _(this.expr, e, t); }
    clone() { let e = new n(this.expr.clone(), this.xref); return e.name = this.name, e; }
}, Bn = class n extends K {
    xref;
    kind = N.ReadTemporaryExpr;
    name = null;
    constructor(e) { super(), this.xref = e; }
    visitExpression(e, t) { }
    isEquivalent() { return this.xref === this.xref; }
    isConstant() { return !1; }
    transformInternalExpressions(e, t) { }
    clone() { let e = new n(this.xref); return e.name = this.name, e; }
}, qa = class n extends K {
    slot;
    kind = N.SlotLiteralExpr;
    constructor(e) { super(), this.slot = e; }
    visitExpression(e, t) { }
    isEquivalent(e) { return e instanceof n && e.slot === this.slot; }
    isConstant() { return !0; }
    clone() { return new n(this.slot); }
    transformInternalExpressions() { }
}, Ua = class n extends K {
    expr;
    target;
    targetSlot;
    alias;
    kind = N.ConditionalCase;
    constructor(e, t, s, r = null) { super(), this.expr = e, this.target = t, this.targetSlot = s, this.alias = r; }
    visitExpression(e, t) { this.expr !== null && this.expr.visitExpression(e, t); }
    isEquivalent(e) { return e instanceof n && e.expr === this.expr; }
    isConstant() { return !0; }
    clone() { return new n(this.expr, this.target, this.targetSlot); }
    transformInternalExpressions(e, t) { this.expr !== null && (this.expr = _(this.expr, e, t)); }
}, _i = class n extends K {
    expr;
    kind = N.ConstCollected;
    constructor(e) { super(), this.expr = e; }
    transformInternalExpressions(e, t) { this.expr = e(this.expr, t); }
    visitExpression(e, t) { this.expr.visitExpression(e, t); }
    isEquivalent(e) { return e instanceof n ? this.expr.isEquivalent(e.expr) : !1; }
    isConstant() { return this.expr.isConstant(); }
    clone() { return new n(this.expr); }
}, Hl = class n extends K {
    parameters;
    body;
    kind = N.ArrowFunction;
    [xs] = !0;
    [Ui] = !0;
    contextName = at;
    currentViewName = "view";
    varOffset = null;
    ops;
    constructor(e, t) { super(), this.parameters = e, this.body = t, this.ops = new E, this.ops.push([ot(new me(t, t.sourceSpan))]); }
    visitExpression(e, t) { for (let s of this.ops)
        de(s, r => { r.visitExpression(e, t); }); }
    isEquivalent(e) { return e instanceof n && e.parameters.length === this.parameters.length && e.parameters.every((t, s) => t.isEquivalent(this.parameters[s])) && e.body.isEquivalent(this.body); }
    isConstant() { return !1; }
    transformInternalExpressions(e, t) { for (let s of this.ops)
        ce(s, e, t | (U.InChildOperation | U.InArrowFunctionOperation)); }
    clone() { let e = new n(this.parameters, this.body); return e.varOffset = this.varOffset, e.ops = this.ops, e; }
};
function de(n, e) { ce(n, (t, s) => (e(t, s), t), U.None); }
var U = (function (n) { return n[n.None = 0] = "None", n[n.InChildOperation = 1] = "InChildOperation", n[n.InArrowFunctionOperation = 2] = "InArrowFunctionOperation", n; })(U || {});
function Po(n, e, t) { for (let s = 0; s < n.expressions.length; s++)
    n.expressions[s] = _(n.expressions[s], e, t); }
function ce(n, e, t) { switch (n.kind) {
    case u.StyleProp:
    case u.StyleMap:
    case u.ClassProp:
    case u.ClassMap:
    case u.AnimationString:
    case u.AnimationBinding:
    case u.Binding:
        n.expression instanceof le ? Po(n.expression, e, t) : n.expression = _(n.expression, e, t);
        break;
    case u.Property:
    case u.DomProperty:
    case u.Attribute:
        n.expression instanceof le ? Po(n.expression, e, t) : n.expression = _(n.expression, e, t), n.sanitizer = n.sanitizer && _(n.sanitizer, e, t);
        break;
    case u.TwoWayProperty:
        n.expression = _(n.expression, e, t), n.sanitizer = n.sanitizer && _(n.sanitizer, e, t);
        break;
    case u.I18nExpression:
        n.expression = _(n.expression, e, t);
        break;
    case u.InterpolateText:
        Po(n.interpolation, e, t);
        break;
    case u.Statement:
        Ha(n.statement, e, t);
        break;
    case u.Variable:
        n.initializer = _(n.initializer, e, t);
        break;
    case u.Conditional:
        for (let s of n.conditions)
            s.expr !== null && (s.expr = _(s.expr, e, t));
        n.processed !== null && (n.processed = _(n.processed, e, t)), n.contextValue !== null && (n.contextValue = _(n.contextValue, e, t));
        break;
    case u.Animation:
    case u.AnimationListener:
    case u.Listener:
    case u.TwoWayListener:
        for (let s of n.handlerOps)
            ce(s, e, t | U.InChildOperation);
        break;
    case u.ExtractedAttribute:
        n.expression = n.expression && _(n.expression, e, t), n.trustedValueFn = n.trustedValueFn && _(n.trustedValueFn, e, t);
        break;
    case u.RepeaterCreate:
        if (n.trackByOps === null)
            n.track = _(n.track, e, t);
        else
            for (let s of n.trackByOps)
                ce(s, e, t | U.InChildOperation);
        n.trackByFn !== null && (n.trackByFn = _(n.trackByFn, e, t));
        break;
    case u.Repeater:
        n.collection = _(n.collection, e, t);
        break;
    case u.Defer:
        n.loadingConfig !== null && (n.loadingConfig = _(n.loadingConfig, e, t)), n.placeholderConfig !== null && (n.placeholderConfig = _(n.placeholderConfig, e, t)), n.resolverFn !== null && (n.resolverFn = _(n.resolverFn, e, t));
        break;
    case u.I18nMessage:
        for (let [s, r] of n.params)
            n.params.set(s, _(r, e, t));
        for (let [s, r] of n.postprocessingParams)
            n.postprocessingParams.set(s, _(r, e, t));
        break;
    case u.DeferWhen:
        n.expr = _(n.expr, e, t);
        break;
    case u.StoreLet:
        n.value = _(n.value, e, t);
        break;
    case u.Advance:
    case u.Container:
    case u.ContainerEnd:
    case u.ContainerStart:
    case u.DeferOn:
    case u.DisableBindings:
    case u.Element:
    case u.ElementEnd:
    case u.ElementStart:
    case u.EnableBindings:
    case u.I18n:
    case u.I18nApply:
    case u.I18nContext:
    case u.I18nEnd:
    case u.I18nStart:
    case u.IcuEnd:
    case u.IcuStart:
    case u.Namespace:
    case u.Pipe:
    case u.Projection:
    case u.ProjectionDef:
    case u.Template:
    case u.Text:
    case u.I18nAttributes:
    case u.IcuPlaceholder:
    case u.DeclareLet:
    case u.SourceLocation:
    case u.ConditionalCreate:
    case u.ConditionalBranchCreate:
    case u.Control:
    case u.ControlCreate: break;
    default: throw new Error(`AssertionError: transformExpressionsInOp doesn't handle ${u[n.kind]}`);
} }
function _(n, e, t) { if (n instanceof K)
    n.transformInternalExpressions(e, t);
else if (n instanceof z)
    n.lhs = _(n.lhs, e, t), n.rhs = _(n.rhs, e, t);
else if (n instanceof rn)
    n.expr = _(n.expr, e, t);
else if (n instanceof Ye)
    n.receiver = _(n.receiver, e, t);
else if (n instanceof Vt)
    n.receiver = _(n.receiver, e, t), n.index = _(n.index, e, t);
else if (n instanceof He) {
    n.fn = _(n.fn, e, t);
    for (let s = 0; s < n.args.length; s++)
        n.args[s] = _(n.args[s], e, t);
}
else if (n instanceof It)
    for (let s = 0; s < n.entries.length; s++)
        n.entries[s] = _(n.entries[s], e, t);
else if (n instanceof St)
    for (let s of n.entries)
        s instanceof qt ? s.expression = _(s.expression, e, t) : s.value = _(s.value, e, t);
else if (n instanceof Tt)
    n.condition = _(n.condition, e, t), n.trueCase = _(n.trueCase, e, t), n.falseCase !== null && (n.falseCase = _(n.falseCase, e, t));
else if (n instanceof os)
    n.expr = _(n.expr, e, t);
else if (n instanceof $r)
    n.expr = _(n.expr, e, t);
else if (n instanceof Vr)
    for (let s = 0; s < n.expressions.length; s++)
        n.expressions[s] = _(n.expressions[s], e, t);
else if (n instanceof Ws)
    n.condition = _(n.condition, e, t);
else if (n instanceof qs)
    n.tag = _(n.tag, e, t), n.template.expressions = n.template.expressions.map(s => _(s, e, t));
else if (n instanceof $n)
    if (Array.isArray(n.body))
        for (let s = 0; s < n.body.length; s++)
            Ha(n.body[s], e, t | U.InChildOperation);
    else
        n.body = _(n.body, e, t | U.InChildOperation);
else if (!(n instanceof W)) {
    if (n instanceof Hs)
        for (let s = 0; s < n.expressions.length; s++)
            n.expressions[s] = _(n.expressions[s], e, t);
    else if (n instanceof Et)
        n.expr = _(n.expr, e, t);
    else if (n instanceof An)
        n.expression = _(n.expression, e, t);
    else if (!(n instanceof wt || n instanceof sn || n instanceof ye || n instanceof ls))
        throw new Error(`Unhandled expression kind: ${n.constructor.name}`);
} return e(n, t); }
function Ha(n, e, t) { if (n instanceof Ie)
    n.expr = _(n.expr, e, t);
else if (n instanceof me)
    n.value = _(n.value, e, t);
else if (n instanceof he)
    n.value !== void 0 && (n.value = _(n.value, e, t));
else if (n instanceof Hr) {
    n.condition = _(n.condition, e, t);
    for (let s of n.trueCase)
        Ha(s, e, t);
    for (let s of n.falseCase)
        Ha(s, e, t);
}
else
    throw new Error(`Unhandled statement kind: ${n.constructor.name}`); }
function Ef(n) { return n instanceof ye && typeof n.value == "string"; }
var Ne = class {
    slot = null;
}, tv = new Set([u.Element, u.ElementStart, u.Container, u.ContainerStart, u.Template, u.RepeaterCreate, u.ConditionalCreate, u.ConditionalBranchCreate]);
function Mn(n) { return tv.has(n.kind); }
function nv(n, e, t, s, r, i) { return S(S({ kind: u.ElementStart, xref: e, tag: n, handle: new Ne, attributes: null, localRefs: [], nonBindable: !1, namespace: t, i18nPlaceholder: s, startSourceSpan: r, wholeSourceSpan: i }, xt), M); }
function Sf(n, e, t, s, r, i, a, o) { return S(S({ kind: u.Template, xref: n, templateKind: e, attributes: null, tag: t, handle: new Ne, functionNameSuffix: s, decls: null, vars: null, localRefs: [], nonBindable: !1, namespace: r, i18nPlaceholder: i, startSourceSpan: a, wholeSourceSpan: o }, xt), M); }
function xf(n, e, t, s, r, i, a, o) { return S(S({ kind: u.ConditionalCreate, xref: n, templateKind: e, attributes: null, tag: t, handle: new Ne, functionNameSuffix: s, decls: null, vars: null, localRefs: [], nonBindable: !1, namespace: r, i18nPlaceholder: i, startSourceSpan: a, wholeSourceSpan: o }, xt), M); }
function yf(n, e, t, s, r, i, a, o) { return S(S({ kind: u.ConditionalBranchCreate, xref: n, templateKind: e, attributes: null, tag: t, handle: new Ne, functionNameSuffix: s, decls: null, vars: null, localRefs: [], nonBindable: !1, namespace: r, i18nPlaceholder: i, startSourceSpan: a, wholeSourceSpan: o }, xt), M); }
function sv(n, e, t, s, r, i, a, o, l, c) { return pe(S(S(S({ kind: u.RepeaterCreate, attributes: null, xref: n, handle: new Ne, emptyView: e, track: s, trackByFn: null, trackByOps: null, tag: t, emptyTag: i, emptyAttributes: null, functionNameSuffix: "For", namespace: ve.HTML, nonBindable: !1, localRefs: [], decls: null, vars: null, varNames: r, usesComponentInstance: !1, i18nPlaceholder: a, emptyI18nPlaceholder: o, startSourceSpan: l, wholeSourceSpan: c }, xt), M), Je), { numSlotsUsed: e === null ? 2 : 3 }); }
function rv(n, e) { return S({ kind: u.ElementEnd, xref: n, sourceSpan: e }, M); }
function iv(n) { return S({ kind: u.DisableBindings, xref: n }, M); }
function av(n) { return S({ kind: u.EnableBindings, xref: n }, M); }
function Cf(n, e, t, s) { return S(S({ kind: u.Text, xref: n, handle: new Ne, initialValue: e, icuPlaceholder: t, sourceSpan: s }, xt), M); }
function ov(n, e, t, s, r, i) { return S({ kind: u.AnimationString, name: n, target: e, animationKind: t, expression: s, i18nMessage: null, securityContext: r, sanitizer: null, sourceSpan: i }, M); }
function lv(n, e, t, s, r, i) { let a = new E; return a.push(s), S({ kind: u.Animation, name: n, target: e, animationKind: t, handlerOps: a, handlerFnName: null, i18nMessage: null, securityContext: r, sanitizer: null, sourceSpan: i }, M); }
function hu(n, e, t, s, r, i, a, o, l) { let c = new E; return c.push(r), S({ kind: u.Listener, target: n, targetSlot: e, tag: s, hostListener: o, name: t, handlerOps: c, handlerFnName: null, consumesDollarEvent: !1, isLegacyAnimationListener: i !== null, legacyAnimationPhase: i, eventTarget: a, sourceSpan: l }, M); }
function Af(n, e, t, s, r, i, a, o, l) { let c = new E; return c.push(r), S({ kind: u.AnimationListener, target: n, targetSlot: e, tag: s, hostListener: o, name: t, animationKind: i, handlerOps: c, handlerFnName: null, consumesDollarEvent: !1, eventTarget: a, sourceSpan: l }, M); }
function kf(n, e, t, s, r, i) { let a = new E; return a.push(r), S({ kind: u.TwoWayListener, target: n, targetSlot: e, tag: s, name: t, handlerOps: a, handlerFnName: null, sourceSpan: i }, M); }
function cv(n, e, t) { return S(S({ kind: u.Pipe, xref: n, handle: e, name: t }, M), xt); }
function uv(n) { return S({ kind: u.Namespace, active: n }, M); }
function hv(n) { return S({ kind: u.ProjectionDef, def: n }, M); }
function pv(n, e, t, s, r) { return pe(S(S({ kind: u.Projection, xref: n, handle: new Ne, selector: e, i18nPlaceholder: t, fallbackView: s, projectionSlotIndex: 0, attributes: null, localRefs: [], sourceSpan: r }, M), xt), { numSlotsUsed: s === null ? 1 : 2 }); }
function dt(n, e, t, s, r, i, a, o) { return S({ kind: u.ExtractedAttribute, target: n, bindingKind: e, namespace: t, name: s, expression: r, i18nContext: i, i18nMessage: a, securityContext: o, trustedValueFn: null }, M); }
function fv(n, e, t, s, r, i) { return pe(S(S({ kind: u.Defer, xref: n, handle: new Ne, mainView: e, mainSlot: t, loadingView: null, loadingSlot: null, loadingConfig: null, loadingMinimumTime: null, loadingAfterTime: null, placeholderView: null, placeholderSlot: null, placeholderConfig: null, placeholderMinimumTime: null, errorView: null, errorSlot: null, ownResolverFn: s, resolverFn: r, flags: null, sourceSpan: i }, M), xt), { numSlotsUsed: 2 }); }
function dn(n, e, t, s) { return S({ kind: u.DeferOn, defer: n, trigger: e, modifier: t, sourceSpan: s }, M); }
function dv(n, e, t) { return S(S({ kind: u.DeclareLet, xref: n, declaredName: e, sourceSpan: t, handle: new Ne }, xt), M); }
function mv(n, e, t, s, r, i, a, o) { return S({ kind: u.I18nMessage, xref: n, i18nContext: e, i18nBlock: t, message: s, messagePlaceholder: r, params: i, postprocessingParams: a, needsPostprocessing: o, subMessages: [] }, M); }
function xo(n, e, t, s) { return S(S({ kind: u.I18nStart, xref: n, handle: new Ne, root: t ?? n, message: e, messageIndex: null, subTemplateIndex: null, context: null, sourceSpan: s }, M), xt); }
function yo(n, e) { return S({ kind: u.I18nEnd, xref: n, sourceSpan: e }, M); }
function gv(n, e, t, s) { return S({ kind: u.IcuStart, xref: n, message: e, messagePlaceholder: t, context: null, sourceSpan: s }, M); }
function vv(n) { return S({ kind: u.IcuEnd, xref: n }, M); }
function wv(n, e, t) { return S({ kind: u.IcuPlaceholder, xref: n, name: e, strings: t, expressionPlaceholders: [] }, M); }
function Lo(n, e, t, s, r) { if (t === null && n !== Zn.Attr)
    throw new Error("AssertionError: i18nBlock must be provided for non-attribute contexts."); return S({ kind: u.I18nContext, contextKind: n, xref: e, i18nBlock: t, message: s, sourceSpan: r, params: new Map, postprocessingParams: new Map }, M); }
function _f(n, e, t) { return S(S({ kind: u.I18nAttributes, xref: n, handle: e, target: t, i18nAttributesConfig: null }, M), xt); }
function Ev(n, e) { return S({ kind: u.SourceLocation, templatePath: n, locations: e }, M); }
function Sv(n) { return S({ kind: u.ControlCreate, sourceSpan: n }, M); }
function xv(n, e, t, s, r, i) { return S(S({ kind: u.DomProperty, name: n, expression: e, bindingKind: t, i18nContext: s, securityContext: r, sanitizer: null, sourceSpan: i }, Je), M); }
var bf = "CTX_REF_MARKER", A = (function (n) { return n[n.Tmpl = 0] = "Tmpl", n[n.Host = 1] = "Host", n[n.Both = 2] = "Both", n; })(A || {}), We = (function (n) { return n[n.Full = 0] = "Full", n[n.DomOnly = 1] = "DomOnly", n; })(We || {}), Wa = class {
    componentName;
    pool;
    mode;
    constructor(e, t, s) { this.componentName = e, this.pool = t, this.mode = s; }
    kind = A.Both;
    allocateXrefId() { return this.nextXrefId++; }
    nextXrefId = 0;
}, bi = class extends Wa {
    relativeContextFilePath;
    i18nUseExternalIds;
    deferMeta;
    allDeferrableDepsFn;
    relativeTemplatePath;
    enableDebugLocations;
    constructor(e, t, s, r, i, a, o, l, c) { super(e, t, s), this.relativeContextFilePath = r, this.i18nUseExternalIds = i, this.deferMeta = a, this.allDeferrableDepsFn = o, this.relativeTemplatePath = l, this.enableDebugLocations = c, this.root = new mt(this, this.allocateXrefId(), null), this.views.set(this.root.xref, this.root); }
    kind = A.Tmpl;
    fnSuffix = "Template";
    root;
    views = new Map;
    contentSelectors = null;
    allocateView(e) { let t = new mt(this, this.allocateXrefId(), e); return this.views.set(t.xref, t), t; }
    get units() { return this.views.values(); }
    addConst(e, t) { for (let r = 0; r < this.consts.length; r++)
        if (this.consts[r].isEquivalent(e))
            return r; let s = this.consts.length; return this.consts.push(e), t && this.constsInitializers.push(...t), s; }
    consts = [];
    constsInitializers = [];
}, ja = class {
    xref;
    constructor(e) { this.xref = e; }
    create = new E;
    update = new E;
    functions = new Set;
    fnName = null;
    vars = null;
    *ops() { for (let e of this.functions)
        for (let t of e.ops)
            yield t; for (let e of this.create)
        if (yield e, e.kind === u.Listener || e.kind === u.Animation || e.kind === u.AnimationListener || e.kind === u.TwoWayListener)
            for (let t of e.handlerOps)
                yield t;
        else if (e.kind === u.RepeaterCreate && e.trackByOps !== null)
            for (let t of e.trackByOps)
                yield t; for (let e of this.update)
        yield e; }
}, mt = class extends ja {
    job;
    parent;
    constructor(e, t, s) { super(t), this.job = e, this.parent = s; }
    contextVariables = new Map;
    aliases = new Set;
    decls = null;
}, za = class extends Wa {
    constructor(e, t, s) { super(e, t, s), this.root = new Wl(this); }
    kind = A.Host;
    fnSuffix = "HostBindings";
    root;
    get units() { return [this.root]; }
}, Wl = class extends ja {
    job;
    constructor(e) { super(0), this.job = e; }
    attributes = null;
};
function yv(n) { for (let e of n.units)
    for (let t of e.ops())
        ce(t, Cv, U.None); }
function Cv(n) { if (n instanceof He && n.fn instanceof _e && n.fn.name === "$any") {
    if (n.args.length !== 1)
        throw new Error("The $any builtin function expects exactly one argument.");
    return n.args[0];
} return n; }
function Av(n) { let e = new Map; for (let t of n.units)
    for (let s of t.create)
        s.kind === u.I18nContext && e.set(s.xref, s); for (let t of n.units)
    for (let s of t.update)
        s.kind === u.I18nExpression && kv(e, s) && E.insertAfter(Jg(s.i18nOwner, s.handle, null), s); }
function kv(n, e) { if (e.next?.kind !== u.I18nExpression)
    return !0; let t = n.get(e.context), s = n.get(e.next.context); if (t === void 0)
    throw new Error("AssertionError: expected an I18nContextOp to exist for the I18nExpressionOp's context"); if (s === void 0)
    throw new Error("AssertionError: expected an I18nContextOp to exist for the next I18nExpressionOp's context"); return t.i18nBlock !== null ? t.i18nBlock !== s.i18nBlock : e.i18nOwner !== e.next.i18nOwner; }
function _v(n) { for (let e of n.units) {
    let t = e.update.head, s = [], r = null;
    for (let i of e.create) {
        if (i.kind === u.I18nStart)
            r = { blockXref: i.xref, lastSlotConsumer: i.xref };
        else if (i.kind === u.I18nEnd) {
            for (let a of s)
                a.target = r.lastSlotConsumer, E.insertBefore(a, t);
            s.length = 0, r = null;
        }
        if (ur(i))
            for (r !== null && (r.lastSlotConsumer = i.xref); t.next !== null;) {
                if (r !== null && t.kind === u.I18nExpression && t.usage === cr.I18nText && t.i18nOwner === r.blockXref) {
                    let o = t;
                    t = t.next, E.remove(o), s.push(o);
                    continue;
                }
                let a = !1;
                if (Si(t) && t.target !== i.xref ? a = !0 : (t.kind === u.Statement || t.kind === u.Variable) && de(t, o => { !a && Si(o) && o.target !== i.xref && (a = !0); }), a)
                    break;
                t = t.next;
            }
    }
} }
function bv(n) { if (!(!n.enableDebugLocations || n.relativeTemplatePath === null))
    for (let e of n.units) {
        let t = [];
        for (let s of e.create)
            if (s.kind === u.ElementStart || s.kind === u.Element) {
                let r = s.startSourceSpan.start;
                t.push({ targetSlot: s.handle, offset: r.offset, line: r.line, column: r.col });
            }
        t.length > 0 && e.create.push(Ev(n.relativeTemplatePath, t));
    } }
function Tf(n) { let e = new Map; for (let t of n.create)
    ur(t) && (e.set(t.xref, t), t.kind === u.RepeaterCreate && t.emptyView !== null && e.set(t.emptyView, t)); return e; }
function Tv(n) { for (let e of n.units) {
    let t = Tf(e);
    for (let s of e.ops())
        switch (s.kind) {
            case u.Attribute:
                Iv(e, s, t);
                break;
            case u.Property:
                if (s.bindingKind !== b.LegacyAnimation && s.bindingKind !== b.Animation) {
                    let r;
                    s.i18nMessage !== null && s.templateKind === null ? r = b.I18n : s.isStructuralTemplateAttribute ? r = b.Template : r = b.Property, E.insertBefore(dt(s.target, r, null, s.name, null, null, null, s.securityContext), Ns(t, s.target));
                }
                break;
            case u.TwoWayProperty:
                E.insertBefore(dt(s.target, b.TwoWayProperty, null, s.name, null, null, null, s.securityContext), Ns(t, s.target));
                break;
            case u.StyleProp:
            case u.ClassProp:
                s.expression instanceof ki && E.insertBefore(dt(s.target, b.Property, null, s.name, null, null, null, j.STYLE), Ns(t, s.target));
                break;
            case u.Listener:
                if (!s.isLegacyAnimationListener) {
                    let r = dt(s.target, b.Property, null, s.name, null, null, null, j.NONE);
                    if (n.kind === A.Host)
                        break;
                    E.insertBefore(r, Ns(t, s.target));
                }
                break;
            case u.TwoWayListener:
                if (n.kind !== A.Host) {
                    let r = dt(s.target, b.Property, null, s.name, null, null, null, j.NONE);
                    E.insertBefore(r, Ns(t, s.target));
                }
                break;
        }
} }
function Ns(n, e) { let t = n.get(e); if (t === void 0)
    throw new Error("All attributes should have an element-like target."); return t; }
function Iv(n, e, t) { if (!(e.expression instanceof le) && e.isTextAttribute) {
    let s = dt(e.target, e.isStructuralTemplateAttribute ? b.Template : b.Attribute, e.namespace, e.name, e.expression, e.i18nContext, e.i18nMessage, e.securityContext);
    if (n.job.kind === A.Host)
        n.create.push(s);
    else {
        let r = Ns(t, e.target);
        E.insertBefore(s, r);
    }
    E.remove(e);
} }
var Zu = "aria-";
function If(n) { return n.startsWith(Zu) && n.length > Zu.length; }
function Nv(n, e) { let t = n.get(e); if (t === void 0)
    throw new Error("All attributes should have an element-like target."); return t; }
function Dv(n) { let e = new Map; for (let t of n.units)
    for (let s of t.create)
        Mn(s) && e.set(s.xref, s); for (let t of n.units)
    for (let s of t.ops())
        if (s.kind === u.Binding)
            switch (s.bindingKind) {
                case b.Attribute:
                    if (s.name === "ngNonBindable") {
                        E.remove(s);
                        let r = Nv(e, s.target);
                        r.nonBindable = !0;
                    }
                    else if (s.name.startsWith("animate."))
                        E.replace(s, Qu(s.name, s.target, s.name === "animate.enter" ? "enter" : "leave", s.expression, s.securityContext, s.sourceSpan, 0));
                    else {
                        let [r, i] = Le(s.name);
                        E.replace(s, Yu(s.target, r, i, s.expression, s.securityContext, s.isTextAttribute, s.isStructuralTemplateAttribute, s.templateKind, s.i18nMessage, s.sourceSpan));
                    }
                    break;
                case b.Animation:
                    E.replace(s, Qu(s.name, s.target, s.name === "animate.enter" ? "enter" : "leave", s.expression, s.securityContext, s.sourceSpan, 1));
                    break;
                case b.Property:
                case b.LegacyAnimation:
                    n.mode === We.DomOnly && If(s.name) ? E.replace(s, Yu(s.target, null, s.name, s.expression, s.securityContext, !1, s.isStructuralTemplateAttribute, s.templateKind, s.i18nMessage, s.sourceSpan)) : n.kind === A.Host ? E.replace(s, xv(s.name, s.expression, s.bindingKind, s.i18nContext, s.securityContext, s.sourceSpan)) : E.replace(s, Hg(s.target, s.name, s.expression, s.bindingKind, s.securityContext, s.isStructuralTemplateAttribute, s.templateKind, s.i18nContext, s.i18nMessage, s.sourceSpan));
                    break;
                case b.TwoWayProperty:
                    if (!(s.expression instanceof Q))
                        throw new Error(`Expected value of two-way property binding "${s.name}" to be an expression`);
                    E.replace(s, Wg(s.target, s.name, s.expression, s.securityContext, s.isStructuralTemplateAttribute, s.templateKind, s.i18nContext, s.i18nMessage, s.sourceSpan));
                    break;
                case b.I18n:
                case b.ClassName:
                case b.StyleProperty: throw new Error(`Unhandled binding of kind ${b[s.bindingKind]}`);
            } }
var Ju = new Map([[f.ariaProperty, f.ariaProperty], [f.attribute, f.attribute], [f.classProp, f.classProp], [f.element, f.element], [f.elementContainer, f.elementContainer], [f.elementContainerEnd, f.elementContainerEnd], [f.elementContainerStart, f.elementContainerStart], [f.elementEnd, f.elementEnd], [f.elementStart, f.elementStart], [f.domProperty, f.domProperty], [f.i18nExp, f.i18nExp], [f.listener, f.listener], [f.listener, f.listener], [f.property, f.property], [f.styleProp, f.styleProp], [f.syntheticHostListener, f.syntheticHostListener], [f.syntheticHostProperty, f.syntheticHostProperty], [f.templateCreate, f.templateCreate], [f.twoWayProperty, f.twoWayProperty], [f.twoWayListener, f.twoWayListener], [f.declareLet, f.declareLet], [f.conditionalCreate, f.conditionalBranchCreate], [f.conditionalBranchCreate, f.conditionalBranchCreate], [f.domElement, f.domElement], [f.domElementStart, f.domElementStart], [f.domElementEnd, f.domElementEnd], [f.domElementContainer, f.domElementContainer], [f.domElementContainerStart, f.domElementContainerStart], [f.domElementContainerEnd, f.domElementContainerEnd], [f.domListener, f.domListener], [f.domTemplate, f.domTemplate], [f.animationEnter, f.animationEnter], [f.animationLeave, f.animationLeave], [f.animationEnterListener, f.animationEnterListener], [f.animationLeaveListener, f.animationLeaveListener]]), Pv = 256;
function Lv(n) { for (let e of n.units)
    Ku(e.create), Ku(e.update); }
function Ku(n) { let e = null; for (let t of n) {
    if (t.kind !== u.Statement || !(t.statement instanceof Ie)) {
        e = null;
        continue;
    }
    if (!(t.statement.expr instanceof He) || !(t.statement.expr.fn instanceof sn)) {
        e = null;
        continue;
    }
    let s = t.statement.expr.fn.value;
    if (!Ju.has(s)) {
        e = null;
        continue;
    }
    if (e !== null && Ju.get(e.instruction) === s && e.length < Pv) {
        let r = e.expression.callFn(t.statement.expr.args, t.statement.expr.sourceSpan, t.statement.expr.pure);
        e.expression = r, e.op.statement = r.toStmt(), e.length++, E.remove(t);
    }
    else
        e = { op: t, instruction: s, expression: t.statement.expr, length: 1 };
} }
function Bv(n) { for (let e of n.units)
    for (let t of e.update)
        (t.kind === u.Attribute || t.kind === u.StyleProp || t.kind == u.StyleMap || t.kind === u.ClassMap) && t.expression instanceof le && t.expression.strings.length === 2 && t.expression.strings.every(r => r === "") && (t.expression = t.expression.expressions[0]); }
function Mv(n) { for (let e of n.units)
    for (let t of e.ops()) {
        if (t.kind !== u.Conditional)
            continue;
        let s, r = t.conditions.findIndex(o => o.expr === null);
        if (r >= 0) {
            let o = t.conditions.splice(r, 1)[0].targetSlot;
            s = new qa(o);
        }
        else
            s = d(-1);
        let i = t.test == null ? null : new Xt(t.test, n.allocateXrefId()), a = null;
        for (let o = t.conditions.length - 1; o >= 0; o--) {
            let l = t.conditions[o];
            if (l.expr !== null) {
                if (i !== null) {
                    let c = o === 0 ? i : new Bn(i.xref);
                    l.expr = new z(x.Identical, c, l.expr);
                }
                else
                    l.alias !== null && (a ??= n.allocateXrefId(), l.expr = new Xt(l.expr, a), t.contextValue = new Bn(a));
                s = new Tt(l.expr, new qa(l.targetSlot), s);
            }
        }
        t.processed = s, t.conditions = [];
    } }
var Rv = new Map([["&&", x.And], [">", x.Bigger], [">=", x.BiggerEquals], ["|", x.BitwiseOr], ["&", x.BitwiseAnd], ["/", x.Divide], ["=", x.Assign], ["==", x.Equals], ["===", x.Identical], ["<", x.Lower], ["<=", x.LowerEquals], ["-", x.Minus], ["%", x.Modulo], ["**", x.Exponentiation], ["*", x.Multiply], ["!=", x.NotEquals], ["!==", x.NotIdentical], ["??", x.NullishCoalesce], ["||", x.Or], ["+", x.Plus], ["in", x.In], ["instanceof", x.InstanceOf], ["+=", x.AdditionAssignment], ["-=", x.SubtractionAssignment], ["*=", x.MultiplicationAssignment], ["/=", x.DivisionAssignment], ["%=", x.RemainderAssignment], ["**=", x.ExponentiationAssignment], ["&&=", x.AndAssignment], ["||=", x.OrAssignment], ["??=", x.NullishCoalesceAssignment]]);
function Nf(n) { let e = new Map([["svg", ve.SVG], ["math", ve.Math]]); return n === null ? ve.HTML : e.get(n) ?? ve.HTML; }
function Fv(n) { let e = new Map([["svg", ve.SVG], ["math", ve.Math]]); for (let [t, s] of e.entries())
    if (s === n)
        return t; return null; }
function $v(n, e) { return e === ve.HTML ? n : `:${Fv(e)}:${n}`; }
function nr(n) { return Array.isArray(n) ? q(n.map(nr)) : d(n); }
function Ov(n) { let e = new Map; for (let t of n.units)
    for (let s of t.create)
        if (s.kind === u.ExtractedAttribute) {
            let r = e.get(s.target) || new jl;
            e.set(s.target, r), r.add(s.bindingKind, s.name, s.expression, s.namespace, s.trustedValueFn), E.remove(s);
        } if (n instanceof bi)
    for (let t of n.units)
        for (let s of t.create)
            if (s.kind == u.Projection) {
                let r = e.get(s.xref);
                if (r !== void 0) {
                    let i = zl(r);
                    i.entries.length > 0 && (s.attributes = n.pool.getConstLiteral(i, !0));
                }
            }
            else
                Mn(s) && (s.attributes = eh(n, e, s.xref), s.kind === u.RepeaterCreate && s.emptyView !== null && (s.emptyAttributes = eh(n, e, s.emptyView)));
else if (n instanceof za)
    for (let [t, s] of e.entries()) {
        if (t !== n.root.xref)
            throw new Error("An attribute would be const collected into the host binding's template function, but is not associated with the root xref.");
        let r = zl(s);
        r.entries.length > 0 && (n.root.attributes = r);
    } }
function eh(n, e, t) { let s = e.get(t); if (s !== void 0) {
    let r = zl(s);
    if (r.entries.length > 0)
        return n.addConst(r);
} return null; }
var As = Object.freeze([]), jl = class {
    known = new Map;
    byKind = new Map;
    propertyBindings = null;
    projectAs = null;
    get attributes() { return this.byKind.get(b.Attribute) ?? As; }
    get classes() { return this.byKind.get(b.ClassName) ?? As; }
    get styles() { return this.byKind.get(b.StyleProperty) ?? As; }
    get bindings() { return this.propertyBindings ?? As; }
    get template() { return this.byKind.get(b.Template) ?? As; }
    get i18n() { return this.byKind.get(b.I18n) ?? As; }
    isKnown(e, t) { let s = this.known.get(e) ?? new Set; return this.known.set(e, s), s.has(t) ? !0 : (s.add(t), !1); }
    add(e, t, s, r, i) { if (!(e === b.Attribute || e === b.ClassName || e === b.StyleProperty) && this.isKnown(e, t))
        return; if (t === "ngProjectAs") {
        if (s === null || !(s instanceof ye) || s.value == null || typeof s.value?.toString() != "string")
            throw Error("ngProjectAs must have a string literal value");
        this.projectAs = s.value.toString();
    } let o = this.arrayFor(e); if (o.push(...Vv(r, t)), e === b.Attribute || e === b.StyleProperty) {
        if (s === null)
            throw Error("Attribute, i18n attribute, & style element attributes must have a value");
        i !== null && Ef(s) ? o.push(Mp(i, new Hs([new Or(s.value)], []), void 0, s.sourceSpan)) : o.push(s);
    } }
    arrayFor(e) { return e === b.Property || e === b.TwoWayProperty ? (this.propertyBindings ??= [], this.propertyBindings) : (this.byKind.has(e) || this.byKind.set(e, []), this.byKind.get(e)); }
};
function Vv(n, e) { let t = d(e); return n ? [d(0), d(n), t] : [t]; }
function zl({ attributes: n, bindings: e, classes: t, i18n: s, projectAs: r, styles: i, template: a }) { let o = [...n]; if (r !== null) {
    let l = mo(r)[0];
    o.push(d(5), nr(l));
} return t.length > 0 && o.push(d(1), ...t), i.length > 0 && o.push(d(2), ...i), e.length > 0 && o.push(d(3), ...e), a.length > 0 && o.push(d(4), ...a), s.length > 0 && o.push(d(6), ...s), q(o); }
function qv(n, e) { let t = n.get(e); if (t === void 0)
    throw new Error("All attributes should have an element-like target."); return t; }
function Uv(n) { let e = new Map; for (let t of n.units)
    for (let s of t.create)
        Mn(s) && e.set(s.xref, s); for (let t of n.units)
    for (let s of t.ops())
        if (s.kind === u.AnimationBinding) {
            let r = Hv(s);
            n.kind === A.Host ? t.create.push(r) : E.insertAfter(r, qv(e, s.target)), E.remove(s);
        } }
function Hv(n) { if (n.animationBindingKind === 0)
    return ov(n.name, n.target, n.name === "animate.enter" ? "enter" : "leave", n.expression, n.securityContext, n.sourceSpan); {
    let e = n.expression;
    return lv(n.name, n.target, n.name === "animate.enter" ? "enter" : "leave", [ot(new me(e, e.sourceSpan))], n.securityContext, n.sourceSpan);
} }
function Wv(n) { let e = new Map; for (let t of n.units) {
    for (let s of t.create)
        s.kind === u.I18nAttributes && e.set(s.target, s);
    for (let s of t.update)
        switch (s.kind) {
            case u.Property:
            case u.Attribute:
                if (s.i18nContext === null || !(s.expression instanceof le))
                    continue;
                let r = e.get(s.target);
                if (r === void 0)
                    throw new Error("AssertionError: An i18n attribute binding instruction requires the owning element to have an I18nAttributes create instruction");
                if (r.target !== s.target)
                    throw new Error("AssertionError: Expected i18nAttributes target element to match binding target element");
                let i = [];
                for (let a = 0; a < s.expression.expressions.length; a++) {
                    let o = s.expression.expressions[a];
                    if (s.expression.i18nPlaceholders.length !== s.expression.expressions.length)
                        throw new Error(`AssertionError: An i18n attribute binding instruction requires the same number of expressions and placeholders, but found ${s.expression.i18nPlaceholders.length} placeholders and ${s.expression.expressions.length} expressions`);
                    i.push(wf(s.i18nContext, r.target, r.xref, r.handle, o, null, s.expression.i18nPlaceholders[a], Ei.Creation, cr.I18nAttribute, s.name, s.sourceSpan));
                }
                E.replaceWithMany(s, i);
                break;
        }
} }
function jv(n) { let e = new Map; for (let r of n.units)
    for (let i of r.ops())
        switch (i.kind) {
            case u.Binding:
            case u.Property:
            case u.Attribute:
            case u.ExtractedAttribute:
                if (i.i18nMessage === null)
                    continue;
                if (!e.has(i.i18nMessage)) {
                    let a = Lo(Zn.Attr, n.allocateXrefId(), null, i.i18nMessage, null);
                    r.create.push(a), e.set(i.i18nMessage, a.xref);
                }
                i.i18nContext = e.get(i.i18nMessage);
                break;
        } let t = new Map; for (let r of n.units)
    for (let i of r.create)
        switch (i.kind) {
            case u.I18nStart:
                if (i.xref === i.root) {
                    let a = Lo(Zn.RootI18n, n.allocateXrefId(), i.xref, i.message, null);
                    r.create.push(a), i.context = a.xref, t.set(i.xref, a);
                }
                break;
        } for (let r of n.units)
    for (let i of r.create)
        if (i.kind === u.I18nStart && i.xref !== i.root) {
            let a = t.get(i.root);
            if (a === void 0)
                throw Error("AssertionError: Root i18n block i18n context should have been created.");
            i.context = a.xref, t.set(i.xref, a);
        } let s = null; for (let r of n.units)
    for (let i of r.create)
        switch (i.kind) {
            case u.I18nStart:
                s = i;
                break;
            case u.I18nEnd:
                s = null;
                break;
            case u.IcuStart:
                if (s === null)
                    throw Error("AssertionError: Unexpected ICU outside of an i18n block.");
                if (i.message.id !== s.message.id) {
                    let a = Lo(Zn.Icu, n.allocateXrefId(), s.root, i.message, null);
                    r.create.push(a), i.context = a.xref;
                }
                else
                    i.context = s.context, t.get(s.xref).contextKind = Zn.Icu;
                break;
        } }
function zv(n) { let e = new Map; for (let t of n.units)
    for (let s of t.update.reversed())
        if (s.kind === u.Binding && s.isTextAttribute) {
            let r = e.get(s.target) || new Set;
            r.has(s.name) && (s.name === "style" || s.name === "class") && E.remove(s), r.add(s.name), e.set(s.target, r);
        } }
function Gv(n) { for (let e of n.units)
    for (let t of e.create)
        t.kind === u.Defer && (t.placeholderMinimumTime !== null && (t.placeholderConfig = new _i(nr([t.placeholderMinimumTime]))), (t.loadingMinimumTime !== null || t.loadingAfterTime !== null) && (t.loadingConfig = new _i(nr([t.loadingMinimumTime, t.loadingAfterTime])))); }
function Xv(n) { let e = new Map; function t(r) { if (e.has(r.xref))
    return e.get(r.xref); let i = new Yv; for (let a of r.create)
    if (!(!Mn(a) || a.localRefs === null)) {
        if (!Array.isArray(a.localRefs))
            throw new Error("LocalRefs were already processed, but were needed to resolve defer targets.");
        for (let o of a.localRefs)
            o.target === "" && i.targets.set(o.name, { xref: a.xref, slot: a.handle });
    } return e.set(r.xref, i), i; } function s(r, i, a) { switch (i.trigger.kind) {
    case ee.Idle:
    case ee.Never:
    case ee.Immediate:
    case ee.Timer: return;
    case ee.Hover:
    case ee.Interaction:
    case ee.Viewport:
        if (i.trigger.targetName === null) {
            if (a === null)
                throw new Error("defer on trigger with no target name must have a placeholder block");
            let c = n.views.get(a);
            if (c == null)
                throw new Error("AssertionError: could not find placeholder view for defer on trigger");
            for (let h of c.create)
                if (ur(h) && (Mn(h) || h.kind === u.Projection)) {
                    i.trigger.targetXref = h.xref, i.trigger.targetView = a, i.trigger.targetSlotViewSteps = -1, i.trigger.targetSlot = h.handle;
                    return;
                }
            return;
        }
        let o = a !== null ? n.views.get(a) : r, l = a !== null ? -1 : 0;
        for (; o !== null;) {
            let c = t(o);
            if (c.targets.has(i.trigger.targetName)) {
                let { xref: h, slot: p } = c.targets.get(i.trigger.targetName);
                i.trigger.targetXref = h, i.trigger.targetView = o.xref, i.trigger.targetSlotViewSteps = l, i.trigger.targetSlot = p;
                return;
            }
            o = o.parent !== null ? n.views.get(o.parent) : null, l++;
        }
        break;
    default: throw new Error(`Trigger kind ${i.trigger.kind} not handled`);
} } for (let r of n.units) {
    let i = new Map;
    for (let a of r.create)
        switch (a.kind) {
            case u.Defer:
                i.set(a.xref, a);
                break;
            case u.DeferOn:
                let o = i.get(a.defer);
                s(r, a, a.modifier === "hydrate" ? o.mainView : o.placeholderView);
                break;
        }
} }
var Yv = class {
    targets = new Map;
}, Qv = new Map([[u.ElementEnd, [u.ElementStart, u.Element]], [u.ContainerEnd, [u.ContainerStart, u.Container]], [u.I18nEnd, [u.I18nStart, u.I18n]]]), Zv = new Set([u.Pipe]);
function Jv(n) { for (let e of n.units)
    for (let t of e.create) {
        let s = Qv.get(t.kind);
        if (s === void 0)
            continue;
        let [r, i] = s, a = t.prev;
        for (; a !== null && Zv.has(a.kind);)
            a = a.prev;
        a !== null && a.kind === r && (a.kind = i, E.remove(t));
    } }
function Kv(n) { for (let e of n.units)
    for (let t of e.ops())
        ce(t, s => iw(s, { job: n }), U.None), ce(t, aw, U.None); }
function Ke(n) { return n instanceof rn ? Ke(n.expr) : n instanceof z ? Ke(n.lhs) || Ke(n.rhs) : n instanceof Tt ? n.falseCase && Ke(n.falseCase) ? !0 : Ke(n.condition) || Ke(n.trueCase) : n instanceof Ws ? Ke(n.condition) : n instanceof Xt ? Ke(n.expr) : n instanceof Ye ? Ke(n.receiver) : n instanceof Vt ? Ke(n.receiver) || Ke(n.index) : n instanceof Et ? Ke(n.expr) : n instanceof He || n instanceof It || n instanceof St || n instanceof Ss || n instanceof Es; }
function ew(n) { let e = new Set; return _(n, t => (t instanceof Xt && e.add(t.xref), t), U.None), e; }
function tw(n, e, t) { return _(n, s => { if (s instanceof Xt && e.has(s.xref)) {
    let r = new Bn(s.xref);
    return new Xt(r, r.xref);
} return s; }, U.None), n; }
function ks(n, e, t) { let s; if (Ke(n)) {
    let r = t.job.allocateXrefId();
    s = [new Xt(n, r), new Bn(r)];
}
else
    s = [n, n.clone()], tw(s[1], ew(s[0])); return new tr(s[0], e(s[1])); }
function nw(n) { return n instanceof Ks || n instanceof er || n instanceof Ss; }
function sw(n) { return n instanceof Ye || n instanceof Vt || n instanceof He; }
function Df(n) { return nw(n) || sw(n); }
function rw(n) { if (Df(n) && n.receiver instanceof tr) {
    let e = n.receiver;
    for (; e.expr instanceof tr;)
        e = e.expr;
    return e;
} return null; }
function iw(n, e) { if (!Df(n))
    return n; let t = rw(n); if (t) {
    if (n instanceof He)
        return t.expr = t.expr.callFn(n.args), n.receiver;
    if (n instanceof Ye)
        return t.expr = t.expr.prop(n.name), n.receiver;
    if (n instanceof Vt)
        return t.expr = t.expr.key(n.index), n.receiver;
    if (n instanceof Ss)
        return t.expr = ks(t.expr, s => s.callFn(n.args), e), n.receiver;
    if (n instanceof Ks)
        return t.expr = ks(t.expr, s => s.prop(n.name), e), n.receiver;
    if (n instanceof er)
        return t.expr = ks(t.expr, s => s.key(n.index), e), n.receiver;
}
else {
    if (n instanceof Ss)
        return ks(n.receiver, s => s.callFn(n.args), e);
    if (n instanceof Ks)
        return ks(n.receiver, s => s.prop(n.name), e);
    if (n instanceof er)
        return ks(n.receiver, s => s.key(n.index), e);
} return n; }
function aw(n) { return n instanceof tr ? new Et(new Tt(new z(x.Equals, n.guard, kn), kn, n.expr)) : n; }
var th = "\uFFFD", ow = "#", lw = "*", cw = "/", uw = ":", hw = "[", pw = "]", fw = "|";
function dw(n) { let e = new Map, t = new Map, s = new Map; for (let i of n.units)
    for (let a of i.create)
        switch (a.kind) {
            case u.I18nContext:
                let o = mw(n, a);
                i.create.push(o), e.set(a.xref, o), s.set(a.xref, a);
                break;
            case u.I18nStart:
                t.set(a.xref, a);
                break;
        } let r = null; for (let i of n.units)
    for (let a of i.create)
        switch (a.kind) {
            case u.IcuStart:
                r = a, E.remove(a);
                let o = s.get(a.context);
                if (o.contextKind !== Zn.Icu)
                    continue;
                let l = t.get(o.i18nBlock);
                if (l.context === o.xref)
                    continue;
                let c = t.get(l.root), h = e.get(c.context);
                if (h === void 0)
                    throw Error("AssertionError: ICU sub-message should belong to a root message.");
                let p = e.get(o.xref);
                p.messagePlaceholder = a.messagePlaceholder, h.subMessages.push(p.xref);
                break;
            case u.IcuEnd:
                r = null, E.remove(a);
                break;
            case u.IcuPlaceholder:
                if (r === null || r.context == null)
                    throw Error("AssertionError: Unexpected ICU placeholder outside of i18n context");
                e.get(r.context).postprocessingParams.set(a.name, d(gw(a))), E.remove(a);
                break;
        } }
function mw(n, e, t) { let s = nh(e.params), r = nh(e.postprocessingParams), i = [...e.params.values()].some(a => a.length > 1); return mv(n.allocateXrefId(), e.xref, e.i18nBlock, e.message, null, s, r, i); }
function gw(n) { if (n.strings.length !== n.expressionPlaceholders.length + 1)
    throw Error(`AssertionError: Invalid ICU placeholder with ${n.strings.length} strings and ${n.expressionPlaceholders.length} expressions`); let e = n.expressionPlaceholders.map(Ms); return n.strings.flatMap((t, s) => [t, e[s] || ""]).join(""); }
function nh(n) { let e = new Map; for (let [t, s] of n) {
    let r = vw(s);
    r !== null && e.set(t, d(r));
} return e; }
function vw(n) { if (n.length === 0)
    return null; let e = n.map(t => Ms(t)); return e.length === 1 ? e[0] : `${hw}${e.join(fw)}${pw}`; }
function Ms(n) { if (n.flags & ne.ElementTag && n.flags & ne.TemplateTag) {
    if (typeof n.value != "object")
        throw Error("AssertionError: Expected i18n param value to have an element and template slot");
    let r = Ms(pe(S({}, n), { value: n.value.element, flags: n.flags & ~ne.TemplateTag })), i = Ms(pe(S({}, n), { value: n.value.template, flags: n.flags & ~ne.ElementTag }));
    return n.flags & ne.OpenTag && n.flags & ne.CloseTag ? `${i}${r}${i}` : n.flags & ne.CloseTag ? `${r}${i}` : `${i}${r}`;
} if (n.flags & ne.OpenTag && n.flags & ne.CloseTag)
    return `${Ms(pe(S({}, n), { flags: n.flags & ~ne.CloseTag }))}${Ms(pe(S({}, n), { flags: n.flags & ~ne.OpenTag }))}`; if (n.flags === ne.None)
    return `${n.value}`; let e = "", t = ""; n.flags & ne.ElementTag ? e = ow : n.flags & ne.TemplateTag && (e = lw), e !== "" && (t = n.flags & ne.CloseTag ? cw : ""); let s = n.subTemplateIndex === null ? "" : `${uw}${n.subTemplateIndex}`; return `${th}${t}${e}${n.value}${s}${th}`; }
function ww(n) { for (let e of n.units) {
    let t = new Map;
    for (let r of e.create) {
        if (ur(r)) {
            if (r.handle.slot === null)
                throw new Error("AssertionError: expected slots to have been allocated before generating advance() calls");
        }
        else
            continue;
        t.set(r.xref, r.handle.slot);
    }
    let s = 0;
    for (let r of e.update) {
        let i = null;
        if (Si(r) ? i = r : de(r, o => { i === null && Si(o) && (i = o); }), i === null)
            continue;
        if (!t.has(i.target))
            throw new Error(`AssertionError: reference to unknown slot for target ${i.target}`);
        let a = t.get(i.target);
        if (s !== a) {
            let o = a - s;
            if (o < 0)
                throw new Error("AssertionError: slot counter should never need to move backwards");
            E.insertBefore(Yg(o, i.sourceSpan), r), s = a;
        }
    }
} }
function Ew(n) { for (let e of n.units)
    for (let t of e.update) {
        if (t.kind !== u.StoreLet)
            continue;
        let s = { kind: Te.Identifier, name: null, identifier: t.declaredName, local: !0 };
        E.replace(t, vn(n.allocateXrefId(), s, new xi(t.target, t.value, t.sourceSpan), ft.None));
    } }
function Sw(n) { let t = [], s = 0; for (let r of n.units)
    for (let i of r.create)
        i.kind === u.Projection && (t.push(i.selector), i.projectionSlotIndex = s++); if (t.length > 0) {
    let r = null;
    if (t.length > 1 || t[0] !== "*") {
        let i = t.map(a => a === "*" ? a : mo(a));
        r = n.pool.getConstLiteral(nr(i), !0);
    }
    n.contentSelectors = n.pool.getConstLiteral(nr(t), !0), n.root.create.prepend([hv(r)]);
} }
function xw(n) { Ar(n.root, null); }
function Ar(n, e) { let t = sh(n, e); for (let s of n.create)
    switch (s.kind) {
        case u.ConditionalCreate:
        case u.ConditionalBranchCreate:
        case u.Template:
            Ar(n.job.views.get(s.xref), t);
            break;
        case u.Projection:
            s.fallbackView !== null && Ar(n.job.views.get(s.fallbackView), t);
            break;
        case u.RepeaterCreate:
            Ar(n.job.views.get(s.xref), t), s.emptyView && Ar(n.job.views.get(s.emptyView), t), s.trackByOps !== null && s.trackByOps.prepend(kr(n, t, !1));
            break;
        case u.Animation:
        case u.AnimationListener:
        case u.Listener:
        case u.TwoWayListener:
            s.handlerOps.prepend(kr(n, t, !0));
            break;
    } n.update.prepend(kr(n, t, !1)); for (let s of n.functions)
    s.ops.prepend(kr(n, sh(n, e), !0)); }
function sh(n, e) { let t = { view: n.xref, viewContextVariable: { kind: Te.Context, name: null, view: n.xref }, contextVariables: new Map, aliases: n.aliases, references: [], letDeclarations: [], parent: e }; for (let s of n.contextVariables.keys())
    t.contextVariables.set(s, { kind: Te.Identifier, name: null, identifier: s, local: !1 }); for (let s of n.create)
    switch (s.kind) {
        case u.ElementStart:
        case u.ConditionalCreate:
        case u.ConditionalBranchCreate:
        case u.Template:
            if (!Array.isArray(s.localRefs))
                throw new Error("AssertionError: expected localRefs to be an array");
            for (let r = 0; r < s.localRefs.length; r++)
                t.references.push({ name: s.localRefs[r].name, targetId: s.xref, targetSlot: s.handle, offset: r, variable: { kind: Te.Identifier, name: null, identifier: s.localRefs[r].name, local: !1 } });
            break;
        case u.DeclareLet:
            t.letDeclarations.push({ targetId: s.xref, targetSlot: s.handle, variable: { kind: Te.Identifier, name: null, identifier: s.declaredName, local: !1 } });
            break;
    } return t; }
function kr(n, e, t) { let s = []; e.view !== n.xref && s.push(vn(n.job.allocateXrefId(), e.viewContextVariable, new $a, ft.None)); let r = n.job.views.get(e.view); for (let [i, a] of r.contextVariables) {
    let o = new Pn(e.view), l = a === bf ? o : new Ye(o, a);
    s.push(vn(n.job.allocateXrefId(), e.contextVariables.get(i), l, ft.None));
} for (let i of r.aliases)
    s.push(vn(n.job.allocateXrefId(), i, i.expression.clone(), ft.AlwaysInline)); for (let i of e.references)
    s.push(vn(n.job.allocateXrefId(), i.variable, new Fa(i.targetId, i.targetSlot, i.offset), ft.None)); if (e.view !== n.xref || t)
    for (let i of e.letDeclarations)
        s.push(vn(n.job.allocateXrefId(), i.variable, new yi(i.targetId, i.targetSlot), ft.None)); return e.parent !== null && s.push(...kr(n, e.parent, !1)), s; }
function yw(n) { for (let e of n.units)
    for (let t of e.ops())
        ce(t, s => s instanceof _i ? d(n.addConst(s.expr)) : s, U.None); }
var rh = "style.", ih = "class.", Cw = "style!", ah = "class!", oh = "!important";
function Aw(n) { for (let e of n.root.update)
    if (e.kind === u.Binding && e.bindingKind === b.Property)
        if (e.name.endsWith(oh) && (e.name = e.name.substring(0, e.name.length - oh.length)), e.name.startsWith(rh)) {
            e.bindingKind = b.StyleProperty, e.name = e.name.substring(rh.length), kw(e.name) || (e.name = _w(e.name));
            let { property: t, suffix: s } = Bo(e.name);
            e.name = t, e.unit = s;
        }
        else
            e.name.startsWith(Cw) ? (e.bindingKind = b.StyleProperty, e.name = "style") : e.name.startsWith(ih) ? (e.bindingKind = b.ClassName, e.name = Bo(e.name.substring(ih.length)).property) : e.name.startsWith(ah) && (e.bindingKind = b.ClassName, e.name = Bo(e.name.substring(ah.length)).property); }
function kw(n) { return n.startsWith("--"); }
function _w(n) { return n.replace(/[a-z][A-Z]/g, e => e.charAt(0) + "-" + e.charAt(1)).toLowerCase(); }
function Bo(n) { let e = n.indexOf("!important"); e !== -1 && (n = e > 0 ? n.substring(0, e) : ""); let t = null, s = n, r = n.lastIndexOf("."); return r > 0 && (t = n.slice(r + 1), s = n.substring(0, r)), { property: s, suffix: t }; }
function Ga(n, e = !1) { return Ce(Object.keys(n).map(t => ({ key: t, quoted: e, value: n[t] }))); }
var Gl = class {
    visitText(e) { return e.value; }
    visitContainer(e) { return e.children.map(t => t.visit(this)).join(""); }
    visitIcu(e) { let t = Object.keys(e.cases).map(r => `${r} {${e.cases[r].visit(this)}}`); return `{${e.expressionPlaceholder}, ${e.type}, ${t.join(" ")}}`; }
    visitTagPlaceholder(e) { return e.isVoid ? this.formatPh(e.startName) : `${this.formatPh(e.startName)}${e.children.map(t => t.visit(this)).join("")}${this.formatPh(e.closeName)}`; }
    visitPlaceholder(e) { return this.formatPh(e.name); }
    visitBlockPlaceholder(e) { return `${this.formatPh(e.startName)}${e.children.map(t => t.visit(this)).join("")}${this.formatPh(e.closeName)}`; }
    visitIcuPlaceholder(e, t) { return this.formatPh(e.name); }
    formatPh(e) { return `{${Vi(e, !1)}}`; }
}, bw = new Gl;
function Pf(n) { return n.visit(bw); }
var on = class {
    sourceSpan;
    i18n;
    constructor(e, t) { this.sourceSpan = e, this.i18n = t; }
}, ln = class extends on {
    value;
    tokens;
    constructor(e, t, s, r) { super(t, r), this.value = e, this.tokens = s; }
    visit(e, t) { return e.visitText(this, t); }
}, Sn = class extends on {
    switchValue;
    type;
    cases;
    switchValueSourceSpan;
    constructor(e, t, s, r, i, a) { super(r, a), this.switchValue = e, this.type = t, this.cases = s, this.switchValueSourceSpan = i; }
    visit(e, t) { return e.visitExpansion(this, t); }
}, Ti = class {
    value;
    expression;
    sourceSpan;
    valueSourceSpan;
    expSourceSpan;
    constructor(e, t, s, r, i) { this.value = e, this.expression = t, this.sourceSpan = s, this.valueSourceSpan = r, this.expSourceSpan = i; }
    visit(e, t) { return e.visitExpansionCase(this, t); }
}, xn = class extends on {
    name;
    value;
    keySpan;
    valueSpan;
    valueTokens;
    constructor(e, t, s, r, i, a, o) { super(s, o), this.name = e, this.value = t, this.keySpan = r, this.valueSpan = i, this.valueTokens = a; }
    visit(e, t) { return e.visitAttribute(this, t); }
}, Re = class extends on {
    name;
    attrs;
    directives;
    children;
    isSelfClosing;
    startSourceSpan;
    endSourceSpan;
    isVoid;
    constructor(e, t, s, r, i, a, o, l = null, c, h) { super(a, h), this.name = e, this.attrs = t, this.directives = s, this.children = r, this.isSelfClosing = i, this.startSourceSpan = o, this.endSourceSpan = l, this.isVoid = c; }
    visit(e, t) { return e.visitElement(this, t); }
}, Rn = class {
    value;
    sourceSpan;
    constructor(e, t) { this.value = e, this.sourceSpan = t; }
    visit(e, t) { return e.visitComment(this, t); }
}, ht = class extends on {
    name;
    parameters;
    children;
    nameSpan;
    startSourceSpan;
    endSourceSpan;
    constructor(e, t, s, r, i, a, o = null, l) { super(r, l), this.name = e, this.parameters = t, this.children = s, this.nameSpan = i, this.startSourceSpan = a, this.endSourceSpan = o; }
    visit(e, t) { return e.visitBlock(this, t); }
}, ke = class extends on {
    componentName;
    tagName;
    fullName;
    attrs;
    directives;
    children;
    isSelfClosing;
    startSourceSpan;
    endSourceSpan;
    constructor(e, t, s, r, i, a, o, l, c, h = null, p) { super(l, p), this.componentName = e, this.tagName = t, this.fullName = s, this.attrs = r, this.directives = i, this.children = a, this.isSelfClosing = o, this.startSourceSpan = c, this.endSourceSpan = h; }
    visit(e, t) { return e.visitComponent(this, t); }
}, Xa = class {
    name;
    attrs;
    sourceSpan;
    startSourceSpan;
    endSourceSpan;
    constructor(e, t, s, r, i = null) { this.name = e, this.attrs = t, this.sourceSpan = s, this.startSourceSpan = r, this.endSourceSpan = i; }
    visit(e, t) { return e.visitDirective(this, t); }
}, Ya = class {
    expression;
    sourceSpan;
    constructor(e, t) { this.expression = e, this.sourceSpan = t; }
    visit(e, t) { return e.visitBlockParameter(this, t); }
}, Qa = class {
    name;
    value;
    sourceSpan;
    nameSpan;
    valueSpan;
    constructor(e, t, s, r, i) { this.name = e, this.value = t, this.sourceSpan = s, this.nameSpan = r, this.valueSpan = i; }
    visit(e, t) { return e.visitLetDeclaration(this, t); }
};
function P(n, e, t = null) { let s = [], r = n.visit ? i => n.visit(i, t) || i.visit(n, t) : i => i.visit(n, t); return e.forEach(i => { let a = r(i); a && s.push(a); }), s; }
var lh = class {
    constructor() { }
    visitElement(e, t) { this.visitChildren(t, s => { s(e.attrs), s(e.directives), s(e.children); }); }
    visitAttribute(e, t) { }
    visitText(e, t) { }
    visitComment(e, t) { }
    visitExpansion(e, t) { return this.visitChildren(t, s => { s(e.cases); }); }
    visitExpansionCase(e, t) { }
    visitBlock(e, t) { this.visitChildren(t, s => { s(e.parameters), s(e.children); }); }
    visitBlockParameter(e, t) { }
    visitLetDeclaration(e, t) { }
    visitComponent(e, t) { this.visitChildren(t, s => { s(e.attrs), s(e.children); }); }
    visitDirective(e, t) { this.visitChildren(t, s => { s(e.attrs); }); }
    visitChildren(e, t) { let s = [], r = this; function i(a) { a && s.push(P(r, a, e)); } return t(i), Array.prototype.concat.apply([], s); }
}, Ii = { AElig: "\xC6", AMP: "&", amp: "&", Aacute: "\xC1", Abreve: "\u0102", Acirc: "\xC2", Acy: "\u0410", Afr: "\u{1D504}", Agrave: "\xC0", Alpha: "\u0391", Amacr: "\u0100", And: "\u2A53", Aogon: "\u0104", Aopf: "\u{1D538}", ApplyFunction: "\u2061", af: "\u2061", Aring: "\xC5", angst: "\xC5", Ascr: "\u{1D49C}", Assign: "\u2254", colone: "\u2254", coloneq: "\u2254", Atilde: "\xC3", Auml: "\xC4", Backslash: "\u2216", setminus: "\u2216", setmn: "\u2216", smallsetminus: "\u2216", ssetmn: "\u2216", Barv: "\u2AE7", Barwed: "\u2306", doublebarwedge: "\u2306", Bcy: "\u0411", Because: "\u2235", becaus: "\u2235", because: "\u2235", Bernoullis: "\u212C", Bscr: "\u212C", bernou: "\u212C", Beta: "\u0392", Bfr: "\u{1D505}", Bopf: "\u{1D539}", Breve: "\u02D8", breve: "\u02D8", Bumpeq: "\u224E", HumpDownHump: "\u224E", bump: "\u224E", CHcy: "\u0427", COPY: "\xA9", copy: "\xA9", Cacute: "\u0106", Cap: "\u22D2", CapitalDifferentialD: "\u2145", DD: "\u2145", Cayleys: "\u212D", Cfr: "\u212D", Ccaron: "\u010C", Ccedil: "\xC7", Ccirc: "\u0108", Cconint: "\u2230", Cdot: "\u010A", Cedilla: "\xB8", cedil: "\xB8", CenterDot: "\xB7", centerdot: "\xB7", middot: "\xB7", Chi: "\u03A7", CircleDot: "\u2299", odot: "\u2299", CircleMinus: "\u2296", ominus: "\u2296", CirclePlus: "\u2295", oplus: "\u2295", CircleTimes: "\u2297", otimes: "\u2297", ClockwiseContourIntegral: "\u2232", cwconint: "\u2232", CloseCurlyDoubleQuote: "\u201D", rdquo: "\u201D", rdquor: "\u201D", CloseCurlyQuote: "\u2019", rsquo: "\u2019", rsquor: "\u2019", Colon: "\u2237", Proportion: "\u2237", Colone: "\u2A74", Congruent: "\u2261", equiv: "\u2261", Conint: "\u222F", DoubleContourIntegral: "\u222F", ContourIntegral: "\u222E", conint: "\u222E", oint: "\u222E", Copf: "\u2102", complexes: "\u2102", Coproduct: "\u2210", coprod: "\u2210", CounterClockwiseContourIntegral: "\u2233", awconint: "\u2233", Cross: "\u2A2F", Cscr: "\u{1D49E}", Cup: "\u22D3", CupCap: "\u224D", asympeq: "\u224D", DDotrahd: "\u2911", DJcy: "\u0402", DScy: "\u0405", DZcy: "\u040F", Dagger: "\u2021", ddagger: "\u2021", Darr: "\u21A1", Dashv: "\u2AE4", DoubleLeftTee: "\u2AE4", Dcaron: "\u010E", Dcy: "\u0414", Del: "\u2207", nabla: "\u2207", Delta: "\u0394", Dfr: "\u{1D507}", DiacriticalAcute: "\xB4", acute: "\xB4", DiacriticalDot: "\u02D9", dot: "\u02D9", DiacriticalDoubleAcute: "\u02DD", dblac: "\u02DD", DiacriticalGrave: "`", grave: "`", DiacriticalTilde: "\u02DC", tilde: "\u02DC", Diamond: "\u22C4", diam: "\u22C4", diamond: "\u22C4", DifferentialD: "\u2146", dd: "\u2146", Dopf: "\u{1D53B}", Dot: "\xA8", DoubleDot: "\xA8", die: "\xA8", uml: "\xA8", DotDot: "\u20DC", DotEqual: "\u2250", doteq: "\u2250", esdot: "\u2250", DoubleDownArrow: "\u21D3", Downarrow: "\u21D3", dArr: "\u21D3", DoubleLeftArrow: "\u21D0", Leftarrow: "\u21D0", lArr: "\u21D0", DoubleLeftRightArrow: "\u21D4", Leftrightarrow: "\u21D4", hArr: "\u21D4", iff: "\u21D4", DoubleLongLeftArrow: "\u27F8", Longleftarrow: "\u27F8", xlArr: "\u27F8", DoubleLongLeftRightArrow: "\u27FA", Longleftrightarrow: "\u27FA", xhArr: "\u27FA", DoubleLongRightArrow: "\u27F9", Longrightarrow: "\u27F9", xrArr: "\u27F9", DoubleRightArrow: "\u21D2", Implies: "\u21D2", Rightarrow: "\u21D2", rArr: "\u21D2", DoubleRightTee: "\u22A8", vDash: "\u22A8", DoubleUpArrow: "\u21D1", Uparrow: "\u21D1", uArr: "\u21D1", DoubleUpDownArrow: "\u21D5", Updownarrow: "\u21D5", vArr: "\u21D5", DoubleVerticalBar: "\u2225", par: "\u2225", parallel: "\u2225", shortparallel: "\u2225", spar: "\u2225", DownArrow: "\u2193", ShortDownArrow: "\u2193", darr: "\u2193", downarrow: "\u2193", DownArrowBar: "\u2913", DownArrowUpArrow: "\u21F5", duarr: "\u21F5", DownBreve: "\u0311", DownLeftRightVector: "\u2950", DownLeftTeeVector: "\u295E", DownLeftVector: "\u21BD", leftharpoondown: "\u21BD", lhard: "\u21BD", DownLeftVectorBar: "\u2956", DownRightTeeVector: "\u295F", DownRightVector: "\u21C1", rhard: "\u21C1", rightharpoondown: "\u21C1", DownRightVectorBar: "\u2957", DownTee: "\u22A4", top: "\u22A4", DownTeeArrow: "\u21A7", mapstodown: "\u21A7", Dscr: "\u{1D49F}", Dstrok: "\u0110", ENG: "\u014A", ETH: "\xD0", Eacute: "\xC9", Ecaron: "\u011A", Ecirc: "\xCA", Ecy: "\u042D", Edot: "\u0116", Efr: "\u{1D508}", Egrave: "\xC8", Element: "\u2208", in: "\u2208", isin: "\u2208", isinv: "\u2208", Emacr: "\u0112", EmptySmallSquare: "\u25FB", EmptyVerySmallSquare: "\u25AB", Eogon: "\u0118", Eopf: "\u{1D53C}", Epsilon: "\u0395", Equal: "\u2A75", EqualTilde: "\u2242", eqsim: "\u2242", esim: "\u2242", Equilibrium: "\u21CC", rightleftharpoons: "\u21CC", rlhar: "\u21CC", Escr: "\u2130", expectation: "\u2130", Esim: "\u2A73", Eta: "\u0397", Euml: "\xCB", Exists: "\u2203", exist: "\u2203", ExponentialE: "\u2147", ee: "\u2147", exponentiale: "\u2147", Fcy: "\u0424", Ffr: "\u{1D509}", FilledSmallSquare: "\u25FC", FilledVerySmallSquare: "\u25AA", blacksquare: "\u25AA", squarf: "\u25AA", squf: "\u25AA", Fopf: "\u{1D53D}", ForAll: "\u2200", forall: "\u2200", Fouriertrf: "\u2131", Fscr: "\u2131", GJcy: "\u0403", GT: ">", gt: ">", Gamma: "\u0393", Gammad: "\u03DC", Gbreve: "\u011E", Gcedil: "\u0122", Gcirc: "\u011C", Gcy: "\u0413", Gdot: "\u0120", Gfr: "\u{1D50A}", Gg: "\u22D9", ggg: "\u22D9", Gopf: "\u{1D53E}", GreaterEqual: "\u2265", ge: "\u2265", geq: "\u2265", GreaterEqualLess: "\u22DB", gel: "\u22DB", gtreqless: "\u22DB", GreaterFullEqual: "\u2267", gE: "\u2267", geqq: "\u2267", GreaterGreater: "\u2AA2", GreaterLess: "\u2277", gl: "\u2277", gtrless: "\u2277", GreaterSlantEqual: "\u2A7E", geqslant: "\u2A7E", ges: "\u2A7E", GreaterTilde: "\u2273", gsim: "\u2273", gtrsim: "\u2273", Gscr: "\u{1D4A2}", Gt: "\u226B", NestedGreaterGreater: "\u226B", gg: "\u226B", HARDcy: "\u042A", Hacek: "\u02C7", caron: "\u02C7", Hat: "^", Hcirc: "\u0124", Hfr: "\u210C", Poincareplane: "\u210C", HilbertSpace: "\u210B", Hscr: "\u210B", hamilt: "\u210B", Hopf: "\u210D", quaternions: "\u210D", HorizontalLine: "\u2500", boxh: "\u2500", Hstrok: "\u0126", HumpEqual: "\u224F", bumpe: "\u224F", bumpeq: "\u224F", IEcy: "\u0415", IJlig: "\u0132", IOcy: "\u0401", Iacute: "\xCD", Icirc: "\xCE", Icy: "\u0418", Idot: "\u0130", Ifr: "\u2111", Im: "\u2111", image: "\u2111", imagpart: "\u2111", Igrave: "\xCC", Imacr: "\u012A", ImaginaryI: "\u2148", ii: "\u2148", Int: "\u222C", Integral: "\u222B", int: "\u222B", Intersection: "\u22C2", bigcap: "\u22C2", xcap: "\u22C2", InvisibleComma: "\u2063", ic: "\u2063", InvisibleTimes: "\u2062", it: "\u2062", Iogon: "\u012E", Iopf: "\u{1D540}", Iota: "\u0399", Iscr: "\u2110", imagline: "\u2110", Itilde: "\u0128", Iukcy: "\u0406", Iuml: "\xCF", Jcirc: "\u0134", Jcy: "\u0419", Jfr: "\u{1D50D}", Jopf: "\u{1D541}", Jscr: "\u{1D4A5}", Jsercy: "\u0408", Jukcy: "\u0404", KHcy: "\u0425", KJcy: "\u040C", Kappa: "\u039A", Kcedil: "\u0136", Kcy: "\u041A", Kfr: "\u{1D50E}", Kopf: "\u{1D542}", Kscr: "\u{1D4A6}", LJcy: "\u0409", LT: "<", lt: "<", Lacute: "\u0139", Lambda: "\u039B", Lang: "\u27EA", Laplacetrf: "\u2112", Lscr: "\u2112", lagran: "\u2112", Larr: "\u219E", twoheadleftarrow: "\u219E", Lcaron: "\u013D", Lcedil: "\u013B", Lcy: "\u041B", LeftAngleBracket: "\u27E8", lang: "\u27E8", langle: "\u27E8", LeftArrow: "\u2190", ShortLeftArrow: "\u2190", larr: "\u2190", leftarrow: "\u2190", slarr: "\u2190", LeftArrowBar: "\u21E4", larrb: "\u21E4", LeftArrowRightArrow: "\u21C6", leftrightarrows: "\u21C6", lrarr: "\u21C6", LeftCeiling: "\u2308", lceil: "\u2308", LeftDoubleBracket: "\u27E6", lobrk: "\u27E6", LeftDownTeeVector: "\u2961", LeftDownVector: "\u21C3", dharl: "\u21C3", downharpoonleft: "\u21C3", LeftDownVectorBar: "\u2959", LeftFloor: "\u230A", lfloor: "\u230A", LeftRightArrow: "\u2194", harr: "\u2194", leftrightarrow: "\u2194", LeftRightVector: "\u294E", LeftTee: "\u22A3", dashv: "\u22A3", LeftTeeArrow: "\u21A4", mapstoleft: "\u21A4", LeftTeeVector: "\u295A", LeftTriangle: "\u22B2", vartriangleleft: "\u22B2", vltri: "\u22B2", LeftTriangleBar: "\u29CF", LeftTriangleEqual: "\u22B4", ltrie: "\u22B4", trianglelefteq: "\u22B4", LeftUpDownVector: "\u2951", LeftUpTeeVector: "\u2960", LeftUpVector: "\u21BF", uharl: "\u21BF", upharpoonleft: "\u21BF", LeftUpVectorBar: "\u2958", LeftVector: "\u21BC", leftharpoonup: "\u21BC", lharu: "\u21BC", LeftVectorBar: "\u2952", LessEqualGreater: "\u22DA", leg: "\u22DA", lesseqgtr: "\u22DA", LessFullEqual: "\u2266", lE: "\u2266", leqq: "\u2266", LessGreater: "\u2276", lessgtr: "\u2276", lg: "\u2276", LessLess: "\u2AA1", LessSlantEqual: "\u2A7D", leqslant: "\u2A7D", les: "\u2A7D", LessTilde: "\u2272", lesssim: "\u2272", lsim: "\u2272", Lfr: "\u{1D50F}", Ll: "\u22D8", Lleftarrow: "\u21DA", lAarr: "\u21DA", Lmidot: "\u013F", LongLeftArrow: "\u27F5", longleftarrow: "\u27F5", xlarr: "\u27F5", LongLeftRightArrow: "\u27F7", longleftrightarrow: "\u27F7", xharr: "\u27F7", LongRightArrow: "\u27F6", longrightarrow: "\u27F6", xrarr: "\u27F6", Lopf: "\u{1D543}", LowerLeftArrow: "\u2199", swarr: "\u2199", swarrow: "\u2199", LowerRightArrow: "\u2198", searr: "\u2198", searrow: "\u2198", Lsh: "\u21B0", lsh: "\u21B0", Lstrok: "\u0141", Lt: "\u226A", NestedLessLess: "\u226A", ll: "\u226A", Map: "\u2905", Mcy: "\u041C", MediumSpace: "\u205F", Mellintrf: "\u2133", Mscr: "\u2133", phmmat: "\u2133", Mfr: "\u{1D510}", MinusPlus: "\u2213", mnplus: "\u2213", mp: "\u2213", Mopf: "\u{1D544}", Mu: "\u039C", NJcy: "\u040A", Nacute: "\u0143", Ncaron: "\u0147", Ncedil: "\u0145", Ncy: "\u041D", NegativeMediumSpace: "\u200B", NegativeThickSpace: "\u200B", NegativeThinSpace: "\u200B", NegativeVeryThinSpace: "\u200B", ZeroWidthSpace: "\u200B", NewLine: `
`, Nfr: "\u{1D511}", NoBreak: "\u2060", NonBreakingSpace: "\xA0", nbsp: "\xA0", Nopf: "\u2115", naturals: "\u2115", Not: "\u2AEC", NotCongruent: "\u2262", nequiv: "\u2262", NotCupCap: "\u226D", NotDoubleVerticalBar: "\u2226", npar: "\u2226", nparallel: "\u2226", nshortparallel: "\u2226", nspar: "\u2226", NotElement: "\u2209", notin: "\u2209", notinva: "\u2209", NotEqual: "\u2260", ne: "\u2260", NotEqualTilde: "\u2242\u0338", nesim: "\u2242\u0338", NotExists: "\u2204", nexist: "\u2204", nexists: "\u2204", NotGreater: "\u226F", ngt: "\u226F", ngtr: "\u226F", NotGreaterEqual: "\u2271", nge: "\u2271", ngeq: "\u2271", NotGreaterFullEqual: "\u2267\u0338", ngE: "\u2267\u0338", ngeqq: "\u2267\u0338", NotGreaterGreater: "\u226B\u0338", nGtv: "\u226B\u0338", NotGreaterLess: "\u2279", ntgl: "\u2279", NotGreaterSlantEqual: "\u2A7E\u0338", ngeqslant: "\u2A7E\u0338", nges: "\u2A7E\u0338", NotGreaterTilde: "\u2275", ngsim: "\u2275", NotHumpDownHump: "\u224E\u0338", nbump: "\u224E\u0338", NotHumpEqual: "\u224F\u0338", nbumpe: "\u224F\u0338", NotLeftTriangle: "\u22EA", nltri: "\u22EA", ntriangleleft: "\u22EA", NotLeftTriangleBar: "\u29CF\u0338", NotLeftTriangleEqual: "\u22EC", nltrie: "\u22EC", ntrianglelefteq: "\u22EC", NotLess: "\u226E", nless: "\u226E", nlt: "\u226E", NotLessEqual: "\u2270", nle: "\u2270", nleq: "\u2270", NotLessGreater: "\u2278", ntlg: "\u2278", NotLessLess: "\u226A\u0338", nLtv: "\u226A\u0338", NotLessSlantEqual: "\u2A7D\u0338", nleqslant: "\u2A7D\u0338", nles: "\u2A7D\u0338", NotLessTilde: "\u2274", nlsim: "\u2274", NotNestedGreaterGreater: "\u2AA2\u0338", NotNestedLessLess: "\u2AA1\u0338", NotPrecedes: "\u2280", npr: "\u2280", nprec: "\u2280", NotPrecedesEqual: "\u2AAF\u0338", npre: "\u2AAF\u0338", npreceq: "\u2AAF\u0338", NotPrecedesSlantEqual: "\u22E0", nprcue: "\u22E0", NotReverseElement: "\u220C", notni: "\u220C", notniva: "\u220C", NotRightTriangle: "\u22EB", nrtri: "\u22EB", ntriangleright: "\u22EB", NotRightTriangleBar: "\u29D0\u0338", NotRightTriangleEqual: "\u22ED", nrtrie: "\u22ED", ntrianglerighteq: "\u22ED", NotSquareSubset: "\u228F\u0338", NotSquareSubsetEqual: "\u22E2", nsqsube: "\u22E2", NotSquareSuperset: "\u2290\u0338", NotSquareSupersetEqual: "\u22E3", nsqsupe: "\u22E3", NotSubset: "\u2282\u20D2", nsubset: "\u2282\u20D2", vnsub: "\u2282\u20D2", NotSubsetEqual: "\u2288", nsube: "\u2288", nsubseteq: "\u2288", NotSucceeds: "\u2281", nsc: "\u2281", nsucc: "\u2281", NotSucceedsEqual: "\u2AB0\u0338", nsce: "\u2AB0\u0338", nsucceq: "\u2AB0\u0338", NotSucceedsSlantEqual: "\u22E1", nsccue: "\u22E1", NotSucceedsTilde: "\u227F\u0338", NotSuperset: "\u2283\u20D2", nsupset: "\u2283\u20D2", vnsup: "\u2283\u20D2", NotSupersetEqual: "\u2289", nsupe: "\u2289", nsupseteq: "\u2289", NotTilde: "\u2241", nsim: "\u2241", NotTildeEqual: "\u2244", nsime: "\u2244", nsimeq: "\u2244", NotTildeFullEqual: "\u2247", ncong: "\u2247", NotTildeTilde: "\u2249", nap: "\u2249", napprox: "\u2249", NotVerticalBar: "\u2224", nmid: "\u2224", nshortmid: "\u2224", nsmid: "\u2224", Nscr: "\u{1D4A9}", Ntilde: "\xD1", Nu: "\u039D", OElig: "\u0152", Oacute: "\xD3", Ocirc: "\xD4", Ocy: "\u041E", Odblac: "\u0150", Ofr: "\u{1D512}", Ograve: "\xD2", Omacr: "\u014C", Omega: "\u03A9", ohm: "\u03A9", Omicron: "\u039F", Oopf: "\u{1D546}", OpenCurlyDoubleQuote: "\u201C", ldquo: "\u201C", OpenCurlyQuote: "\u2018", lsquo: "\u2018", Or: "\u2A54", Oscr: "\u{1D4AA}", Oslash: "\xD8", Otilde: "\xD5", Otimes: "\u2A37", Ouml: "\xD6", OverBar: "\u203E", oline: "\u203E", OverBrace: "\u23DE", OverBracket: "\u23B4", tbrk: "\u23B4", OverParenthesis: "\u23DC", PartialD: "\u2202", part: "\u2202", Pcy: "\u041F", Pfr: "\u{1D513}", Phi: "\u03A6", Pi: "\u03A0", PlusMinus: "\xB1", plusmn: "\xB1", pm: "\xB1", Popf: "\u2119", primes: "\u2119", Pr: "\u2ABB", Precedes: "\u227A", pr: "\u227A", prec: "\u227A", PrecedesEqual: "\u2AAF", pre: "\u2AAF", preceq: "\u2AAF", PrecedesSlantEqual: "\u227C", prcue: "\u227C", preccurlyeq: "\u227C", PrecedesTilde: "\u227E", precsim: "\u227E", prsim: "\u227E", Prime: "\u2033", Product: "\u220F", prod: "\u220F", Proportional: "\u221D", prop: "\u221D", propto: "\u221D", varpropto: "\u221D", vprop: "\u221D", Pscr: "\u{1D4AB}", Psi: "\u03A8", QUOT: '"', quot: '"', Qfr: "\u{1D514}", Qopf: "\u211A", rationals: "\u211A", Qscr: "\u{1D4AC}", RBarr: "\u2910", drbkarow: "\u2910", REG: "\xAE", circledR: "\xAE", reg: "\xAE", Racute: "\u0154", Rang: "\u27EB", Rarr: "\u21A0", twoheadrightarrow: "\u21A0", Rarrtl: "\u2916", Rcaron: "\u0158", Rcedil: "\u0156", Rcy: "\u0420", Re: "\u211C", Rfr: "\u211C", real: "\u211C", realpart: "\u211C", ReverseElement: "\u220B", SuchThat: "\u220B", ni: "\u220B", niv: "\u220B", ReverseEquilibrium: "\u21CB", leftrightharpoons: "\u21CB", lrhar: "\u21CB", ReverseUpEquilibrium: "\u296F", duhar: "\u296F", Rho: "\u03A1", RightAngleBracket: "\u27E9", rang: "\u27E9", rangle: "\u27E9", RightArrow: "\u2192", ShortRightArrow: "\u2192", rarr: "\u2192", rightarrow: "\u2192", srarr: "\u2192", RightArrowBar: "\u21E5", rarrb: "\u21E5", RightArrowLeftArrow: "\u21C4", rightleftarrows: "\u21C4", rlarr: "\u21C4", RightCeiling: "\u2309", rceil: "\u2309", RightDoubleBracket: "\u27E7", robrk: "\u27E7", RightDownTeeVector: "\u295D", RightDownVector: "\u21C2", dharr: "\u21C2", downharpoonright: "\u21C2", RightDownVectorBar: "\u2955", RightFloor: "\u230B", rfloor: "\u230B", RightTee: "\u22A2", vdash: "\u22A2", RightTeeArrow: "\u21A6", map: "\u21A6", mapsto: "\u21A6", RightTeeVector: "\u295B", RightTriangle: "\u22B3", vartriangleright: "\u22B3", vrtri: "\u22B3", RightTriangleBar: "\u29D0", RightTriangleEqual: "\u22B5", rtrie: "\u22B5", trianglerighteq: "\u22B5", RightUpDownVector: "\u294F", RightUpTeeVector: "\u295C", RightUpVector: "\u21BE", uharr: "\u21BE", upharpoonright: "\u21BE", RightUpVectorBar: "\u2954", RightVector: "\u21C0", rharu: "\u21C0", rightharpoonup: "\u21C0", RightVectorBar: "\u2953", Ropf: "\u211D", reals: "\u211D", RoundImplies: "\u2970", Rrightarrow: "\u21DB", rAarr: "\u21DB", Rscr: "\u211B", realine: "\u211B", Rsh: "\u21B1", rsh: "\u21B1", RuleDelayed: "\u29F4", SHCHcy: "\u0429", SHcy: "\u0428", SOFTcy: "\u042C", Sacute: "\u015A", Sc: "\u2ABC", Scaron: "\u0160", Scedil: "\u015E", Scirc: "\u015C", Scy: "\u0421", Sfr: "\u{1D516}", ShortUpArrow: "\u2191", UpArrow: "\u2191", uarr: "\u2191", uparrow: "\u2191", Sigma: "\u03A3", SmallCircle: "\u2218", compfn: "\u2218", Sopf: "\u{1D54A}", Sqrt: "\u221A", radic: "\u221A", Square: "\u25A1", squ: "\u25A1", square: "\u25A1", SquareIntersection: "\u2293", sqcap: "\u2293", SquareSubset: "\u228F", sqsub: "\u228F", sqsubset: "\u228F", SquareSubsetEqual: "\u2291", sqsube: "\u2291", sqsubseteq: "\u2291", SquareSuperset: "\u2290", sqsup: "\u2290", sqsupset: "\u2290", SquareSupersetEqual: "\u2292", sqsupe: "\u2292", sqsupseteq: "\u2292", SquareUnion: "\u2294", sqcup: "\u2294", Sscr: "\u{1D4AE}", Star: "\u22C6", sstarf: "\u22C6", Sub: "\u22D0", Subset: "\u22D0", SubsetEqual: "\u2286", sube: "\u2286", subseteq: "\u2286", Succeeds: "\u227B", sc: "\u227B", succ: "\u227B", SucceedsEqual: "\u2AB0", sce: "\u2AB0", succeq: "\u2AB0", SucceedsSlantEqual: "\u227D", sccue: "\u227D", succcurlyeq: "\u227D", SucceedsTilde: "\u227F", scsim: "\u227F", succsim: "\u227F", Sum: "\u2211", sum: "\u2211", Sup: "\u22D1", Supset: "\u22D1", Superset: "\u2283", sup: "\u2283", supset: "\u2283", SupersetEqual: "\u2287", supe: "\u2287", supseteq: "\u2287", THORN: "\xDE", TRADE: "\u2122", trade: "\u2122", TSHcy: "\u040B", TScy: "\u0426", Tab: "	", Tau: "\u03A4", Tcaron: "\u0164", Tcedil: "\u0162", Tcy: "\u0422", Tfr: "\u{1D517}", Therefore: "\u2234", there4: "\u2234", therefore: "\u2234", Theta: "\u0398", ThickSpace: "\u205F\u200A", ThinSpace: "\u2009", thinsp: "\u2009", Tilde: "\u223C", sim: "\u223C", thicksim: "\u223C", thksim: "\u223C", TildeEqual: "\u2243", sime: "\u2243", simeq: "\u2243", TildeFullEqual: "\u2245", cong: "\u2245", TildeTilde: "\u2248", ap: "\u2248", approx: "\u2248", asymp: "\u2248", thickapprox: "\u2248", thkap: "\u2248", Topf: "\u{1D54B}", TripleDot: "\u20DB", tdot: "\u20DB", Tscr: "\u{1D4AF}", Tstrok: "\u0166", Uacute: "\xDA", Uarr: "\u219F", Uarrocir: "\u2949", Ubrcy: "\u040E", Ubreve: "\u016C", Ucirc: "\xDB", Ucy: "\u0423", Udblac: "\u0170", Ufr: "\u{1D518}", Ugrave: "\xD9", Umacr: "\u016A", UnderBar: "_", lowbar: "_", UnderBrace: "\u23DF", UnderBracket: "\u23B5", bbrk: "\u23B5", UnderParenthesis: "\u23DD", Union: "\u22C3", bigcup: "\u22C3", xcup: "\u22C3", UnionPlus: "\u228E", uplus: "\u228E", Uogon: "\u0172", Uopf: "\u{1D54C}", UpArrowBar: "\u2912", UpArrowDownArrow: "\u21C5", udarr: "\u21C5", UpDownArrow: "\u2195", updownarrow: "\u2195", varr: "\u2195", UpEquilibrium: "\u296E", udhar: "\u296E", UpTee: "\u22A5", bot: "\u22A5", bottom: "\u22A5", perp: "\u22A5", UpTeeArrow: "\u21A5", mapstoup: "\u21A5", UpperLeftArrow: "\u2196", nwarr: "\u2196", nwarrow: "\u2196", UpperRightArrow: "\u2197", nearr: "\u2197", nearrow: "\u2197", Upsi: "\u03D2", upsih: "\u03D2", Upsilon: "\u03A5", Uring: "\u016E", Uscr: "\u{1D4B0}", Utilde: "\u0168", Uuml: "\xDC", VDash: "\u22AB", Vbar: "\u2AEB", Vcy: "\u0412", Vdash: "\u22A9", Vdashl: "\u2AE6", Vee: "\u22C1", bigvee: "\u22C1", xvee: "\u22C1", Verbar: "\u2016", Vert: "\u2016", VerticalBar: "\u2223", mid: "\u2223", shortmid: "\u2223", smid: "\u2223", VerticalLine: "|", verbar: "|", vert: "|", VerticalSeparator: "\u2758", VerticalTilde: "\u2240", wr: "\u2240", wreath: "\u2240", VeryThinSpace: "\u200A", hairsp: "\u200A", Vfr: "\u{1D519}", Vopf: "\u{1D54D}", Vscr: "\u{1D4B1}", Vvdash: "\u22AA", Wcirc: "\u0174", Wedge: "\u22C0", bigwedge: "\u22C0", xwedge: "\u22C0", Wfr: "\u{1D51A}", Wopf: "\u{1D54E}", Wscr: "\u{1D4B2}", Xfr: "\u{1D51B}", Xi: "\u039E", Xopf: "\u{1D54F}", Xscr: "\u{1D4B3}", YAcy: "\u042F", YIcy: "\u0407", YUcy: "\u042E", Yacute: "\xDD", Ycirc: "\u0176", Ycy: "\u042B", Yfr: "\u{1D51C}", Yopf: "\u{1D550}", Yscr: "\u{1D4B4}", Yuml: "\u0178", ZHcy: "\u0416", Zacute: "\u0179", Zcaron: "\u017D", Zcy: "\u0417", Zdot: "\u017B", Zeta: "\u0396", Zfr: "\u2128", zeetrf: "\u2128", Zopf: "\u2124", integers: "\u2124", Zscr: "\u{1D4B5}", aacute: "\xE1", abreve: "\u0103", ac: "\u223E", mstpos: "\u223E", acE: "\u223E\u0333", acd: "\u223F", acirc: "\xE2", acy: "\u0430", aelig: "\xE6", afr: "\u{1D51E}", agrave: "\xE0", alefsym: "\u2135", aleph: "\u2135", alpha: "\u03B1", amacr: "\u0101", amalg: "\u2A3F", and: "\u2227", wedge: "\u2227", andand: "\u2A55", andd: "\u2A5C", andslope: "\u2A58", andv: "\u2A5A", ang: "\u2220", angle: "\u2220", ange: "\u29A4", angmsd: "\u2221", measuredangle: "\u2221", angmsdaa: "\u29A8", angmsdab: "\u29A9", angmsdac: "\u29AA", angmsdad: "\u29AB", angmsdae: "\u29AC", angmsdaf: "\u29AD", angmsdag: "\u29AE", angmsdah: "\u29AF", angrt: "\u221F", angrtvb: "\u22BE", angrtvbd: "\u299D", angsph: "\u2222", angzarr: "\u237C", aogon: "\u0105", aopf: "\u{1D552}", apE: "\u2A70", apacir: "\u2A6F", ape: "\u224A", approxeq: "\u224A", apid: "\u224B", apos: "'", aring: "\xE5", ascr: "\u{1D4B6}", ast: "*", midast: "*", atilde: "\xE3", auml: "\xE4", awint: "\u2A11", bNot: "\u2AED", backcong: "\u224C", bcong: "\u224C", backepsilon: "\u03F6", bepsi: "\u03F6", backprime: "\u2035", bprime: "\u2035", backsim: "\u223D", bsim: "\u223D", backsimeq: "\u22CD", bsime: "\u22CD", barvee: "\u22BD", barwed: "\u2305", barwedge: "\u2305", bbrktbrk: "\u23B6", bcy: "\u0431", bdquo: "\u201E", ldquor: "\u201E", bemptyv: "\u29B0", beta: "\u03B2", beth: "\u2136", between: "\u226C", twixt: "\u226C", bfr: "\u{1D51F}", bigcirc: "\u25EF", xcirc: "\u25EF", bigodot: "\u2A00", xodot: "\u2A00", bigoplus: "\u2A01", xoplus: "\u2A01", bigotimes: "\u2A02", xotime: "\u2A02", bigsqcup: "\u2A06", xsqcup: "\u2A06", bigstar: "\u2605", starf: "\u2605", bigtriangledown: "\u25BD", xdtri: "\u25BD", bigtriangleup: "\u25B3", xutri: "\u25B3", biguplus: "\u2A04", xuplus: "\u2A04", bkarow: "\u290D", rbarr: "\u290D", blacklozenge: "\u29EB", lozf: "\u29EB", blacktriangle: "\u25B4", utrif: "\u25B4", blacktriangledown: "\u25BE", dtrif: "\u25BE", blacktriangleleft: "\u25C2", ltrif: "\u25C2", blacktriangleright: "\u25B8", rtrif: "\u25B8", blank: "\u2423", blk12: "\u2592", blk14: "\u2591", blk34: "\u2593", block: "\u2588", bne: "=\u20E5", bnequiv: "\u2261\u20E5", bnot: "\u2310", bopf: "\u{1D553}", bowtie: "\u22C8", boxDL: "\u2557", boxDR: "\u2554", boxDl: "\u2556", boxDr: "\u2553", boxH: "\u2550", boxHD: "\u2566", boxHU: "\u2569", boxHd: "\u2564", boxHu: "\u2567", boxUL: "\u255D", boxUR: "\u255A", boxUl: "\u255C", boxUr: "\u2559", boxV: "\u2551", boxVH: "\u256C", boxVL: "\u2563", boxVR: "\u2560", boxVh: "\u256B", boxVl: "\u2562", boxVr: "\u255F", boxbox: "\u29C9", boxdL: "\u2555", boxdR: "\u2552", boxdl: "\u2510", boxdr: "\u250C", boxhD: "\u2565", boxhU: "\u2568", boxhd: "\u252C", boxhu: "\u2534", boxminus: "\u229F", minusb: "\u229F", boxplus: "\u229E", plusb: "\u229E", boxtimes: "\u22A0", timesb: "\u22A0", boxuL: "\u255B", boxuR: "\u2558", boxul: "\u2518", boxur: "\u2514", boxv: "\u2502", boxvH: "\u256A", boxvL: "\u2561", boxvR: "\u255E", boxvh: "\u253C", boxvl: "\u2524", boxvr: "\u251C", brvbar: "\xA6", bscr: "\u{1D4B7}", bsemi: "\u204F", bsol: "\\", bsolb: "\u29C5", bsolhsub: "\u27C8", bull: "\u2022", bullet: "\u2022", bumpE: "\u2AAE", cacute: "\u0107", cap: "\u2229", capand: "\u2A44", capbrcup: "\u2A49", capcap: "\u2A4B", capcup: "\u2A47", capdot: "\u2A40", caps: "\u2229\uFE00", caret: "\u2041", ccaps: "\u2A4D", ccaron: "\u010D", ccedil: "\xE7", ccirc: "\u0109", ccups: "\u2A4C", ccupssm: "\u2A50", cdot: "\u010B", cemptyv: "\u29B2", cent: "\xA2", cfr: "\u{1D520}", chcy: "\u0447", check: "\u2713", checkmark: "\u2713", chi: "\u03C7", cir: "\u25CB", cirE: "\u29C3", circ: "\u02C6", circeq: "\u2257", cire: "\u2257", circlearrowleft: "\u21BA", olarr: "\u21BA", circlearrowright: "\u21BB", orarr: "\u21BB", circledS: "\u24C8", oS: "\u24C8", circledast: "\u229B", oast: "\u229B", circledcirc: "\u229A", ocir: "\u229A", circleddash: "\u229D", odash: "\u229D", cirfnint: "\u2A10", cirmid: "\u2AEF", cirscir: "\u29C2", clubs: "\u2663", clubsuit: "\u2663", colon: ":", comma: ",", commat: "@", comp: "\u2201", complement: "\u2201", congdot: "\u2A6D", copf: "\u{1D554}", copysr: "\u2117", crarr: "\u21B5", cross: "\u2717", cscr: "\u{1D4B8}", csub: "\u2ACF", csube: "\u2AD1", csup: "\u2AD0", csupe: "\u2AD2", ctdot: "\u22EF", cudarrl: "\u2938", cudarrr: "\u2935", cuepr: "\u22DE", curlyeqprec: "\u22DE", cuesc: "\u22DF", curlyeqsucc: "\u22DF", cularr: "\u21B6", curvearrowleft: "\u21B6", cularrp: "\u293D", cup: "\u222A", cupbrcap: "\u2A48", cupcap: "\u2A46", cupcup: "\u2A4A", cupdot: "\u228D", cupor: "\u2A45", cups: "\u222A\uFE00", curarr: "\u21B7", curvearrowright: "\u21B7", curarrm: "\u293C", curlyvee: "\u22CE", cuvee: "\u22CE", curlywedge: "\u22CF", cuwed: "\u22CF", curren: "\xA4", cwint: "\u2231", cylcty: "\u232D", dHar: "\u2965", dagger: "\u2020", daleth: "\u2138", dash: "\u2010", hyphen: "\u2010", dbkarow: "\u290F", rBarr: "\u290F", dcaron: "\u010F", dcy: "\u0434", ddarr: "\u21CA", downdownarrows: "\u21CA", ddotseq: "\u2A77", eDDot: "\u2A77", deg: "\xB0", delta: "\u03B4", demptyv: "\u29B1", dfisht: "\u297F", dfr: "\u{1D521}", diamondsuit: "\u2666", diams: "\u2666", digamma: "\u03DD", gammad: "\u03DD", disin: "\u22F2", div: "\xF7", divide: "\xF7", divideontimes: "\u22C7", divonx: "\u22C7", djcy: "\u0452", dlcorn: "\u231E", llcorner: "\u231E", dlcrop: "\u230D", dollar: "$", dopf: "\u{1D555}", doteqdot: "\u2251", eDot: "\u2251", dotminus: "\u2238", minusd: "\u2238", dotplus: "\u2214", plusdo: "\u2214", dotsquare: "\u22A1", sdotb: "\u22A1", drcorn: "\u231F", lrcorner: "\u231F", drcrop: "\u230C", dscr: "\u{1D4B9}", dscy: "\u0455", dsol: "\u29F6", dstrok: "\u0111", dtdot: "\u22F1", dtri: "\u25BF", triangledown: "\u25BF", dwangle: "\u29A6", dzcy: "\u045F", dzigrarr: "\u27FF", eacute: "\xE9", easter: "\u2A6E", ecaron: "\u011B", ecir: "\u2256", eqcirc: "\u2256", ecirc: "\xEA", ecolon: "\u2255", eqcolon: "\u2255", ecy: "\u044D", edot: "\u0117", efDot: "\u2252", fallingdotseq: "\u2252", efr: "\u{1D522}", eg: "\u2A9A", egrave: "\xE8", egs: "\u2A96", eqslantgtr: "\u2A96", egsdot: "\u2A98", el: "\u2A99", elinters: "\u23E7", ell: "\u2113", els: "\u2A95", eqslantless: "\u2A95", elsdot: "\u2A97", emacr: "\u0113", empty: "\u2205", emptyset: "\u2205", emptyv: "\u2205", varnothing: "\u2205", emsp13: "\u2004", emsp14: "\u2005", emsp: "\u2003", eng: "\u014B", ensp: "\u2002", eogon: "\u0119", eopf: "\u{1D556}", epar: "\u22D5", eparsl: "\u29E3", eplus: "\u2A71", epsi: "\u03B5", epsilon: "\u03B5", epsiv: "\u03F5", straightepsilon: "\u03F5", varepsilon: "\u03F5", equals: "=", equest: "\u225F", questeq: "\u225F", equivDD: "\u2A78", eqvparsl: "\u29E5", erDot: "\u2253", risingdotseq: "\u2253", erarr: "\u2971", escr: "\u212F", eta: "\u03B7", eth: "\xF0", euml: "\xEB", euro: "\u20AC", excl: "!", fcy: "\u0444", female: "\u2640", ffilig: "\uFB03", fflig: "\uFB00", ffllig: "\uFB04", ffr: "\u{1D523}", filig: "\uFB01", fjlig: "fj", flat: "\u266D", fllig: "\uFB02", fltns: "\u25B1", fnof: "\u0192", fopf: "\u{1D557}", fork: "\u22D4", pitchfork: "\u22D4", forkv: "\u2AD9", fpartint: "\u2A0D", frac12: "\xBD", half: "\xBD", frac13: "\u2153", frac14: "\xBC", frac15: "\u2155", frac16: "\u2159", frac18: "\u215B", frac23: "\u2154", frac25: "\u2156", frac34: "\xBE", frac35: "\u2157", frac38: "\u215C", frac45: "\u2158", frac56: "\u215A", frac58: "\u215D", frac78: "\u215E", frasl: "\u2044", frown: "\u2322", sfrown: "\u2322", fscr: "\u{1D4BB}", gEl: "\u2A8C", gtreqqless: "\u2A8C", gacute: "\u01F5", gamma: "\u03B3", gap: "\u2A86", gtrapprox: "\u2A86", gbreve: "\u011F", gcirc: "\u011D", gcy: "\u0433", gdot: "\u0121", gescc: "\u2AA9", gesdot: "\u2A80", gesdoto: "\u2A82", gesdotol: "\u2A84", gesl: "\u22DB\uFE00", gesles: "\u2A94", gfr: "\u{1D524}", gimel: "\u2137", gjcy: "\u0453", glE: "\u2A92", gla: "\u2AA5", glj: "\u2AA4", gnE: "\u2269", gneqq: "\u2269", gnap: "\u2A8A", gnapprox: "\u2A8A", gne: "\u2A88", gneq: "\u2A88", gnsim: "\u22E7", gopf: "\u{1D558}", gscr: "\u210A", gsime: "\u2A8E", gsiml: "\u2A90", gtcc: "\u2AA7", gtcir: "\u2A7A", gtdot: "\u22D7", gtrdot: "\u22D7", gtlPar: "\u2995", gtquest: "\u2A7C", gtrarr: "\u2978", gvertneqq: "\u2269\uFE00", gvnE: "\u2269\uFE00", hardcy: "\u044A", harrcir: "\u2948", harrw: "\u21AD", leftrightsquigarrow: "\u21AD", hbar: "\u210F", hslash: "\u210F", planck: "\u210F", plankv: "\u210F", hcirc: "\u0125", hearts: "\u2665", heartsuit: "\u2665", hellip: "\u2026", mldr: "\u2026", hercon: "\u22B9", hfr: "\u{1D525}", hksearow: "\u2925", searhk: "\u2925", hkswarow: "\u2926", swarhk: "\u2926", hoarr: "\u21FF", homtht: "\u223B", hookleftarrow: "\u21A9", larrhk: "\u21A9", hookrightarrow: "\u21AA", rarrhk: "\u21AA", hopf: "\u{1D559}", horbar: "\u2015", hscr: "\u{1D4BD}", hstrok: "\u0127", hybull: "\u2043", iacute: "\xED", icirc: "\xEE", icy: "\u0438", iecy: "\u0435", iexcl: "\xA1", ifr: "\u{1D526}", igrave: "\xEC", iiiint: "\u2A0C", qint: "\u2A0C", iiint: "\u222D", tint: "\u222D", iinfin: "\u29DC", iiota: "\u2129", ijlig: "\u0133", imacr: "\u012B", imath: "\u0131", inodot: "\u0131", imof: "\u22B7", imped: "\u01B5", incare: "\u2105", infin: "\u221E", infintie: "\u29DD", intcal: "\u22BA", intercal: "\u22BA", intlarhk: "\u2A17", intprod: "\u2A3C", iprod: "\u2A3C", iocy: "\u0451", iogon: "\u012F", iopf: "\u{1D55A}", iota: "\u03B9", iquest: "\xBF", iscr: "\u{1D4BE}", isinE: "\u22F9", isindot: "\u22F5", isins: "\u22F4", isinsv: "\u22F3", itilde: "\u0129", iukcy: "\u0456", iuml: "\xEF", jcirc: "\u0135", jcy: "\u0439", jfr: "\u{1D527}", jmath: "\u0237", jopf: "\u{1D55B}", jscr: "\u{1D4BF}", jsercy: "\u0458", jukcy: "\u0454", kappa: "\u03BA", kappav: "\u03F0", varkappa: "\u03F0", kcedil: "\u0137", kcy: "\u043A", kfr: "\u{1D528}", kgreen: "\u0138", khcy: "\u0445", kjcy: "\u045C", kopf: "\u{1D55C}", kscr: "\u{1D4C0}", lAtail: "\u291B", lBarr: "\u290E", lEg: "\u2A8B", lesseqqgtr: "\u2A8B", lHar: "\u2962", lacute: "\u013A", laemptyv: "\u29B4", lambda: "\u03BB", langd: "\u2991", lap: "\u2A85", lessapprox: "\u2A85", laquo: "\xAB", larrbfs: "\u291F", larrfs: "\u291D", larrlp: "\u21AB", looparrowleft: "\u21AB", larrpl: "\u2939", larrsim: "\u2973", larrtl: "\u21A2", leftarrowtail: "\u21A2", lat: "\u2AAB", latail: "\u2919", late: "\u2AAD", lates: "\u2AAD\uFE00", lbarr: "\u290C", lbbrk: "\u2772", lbrace: "{", lcub: "{", lbrack: "[", lsqb: "[", lbrke: "\u298B", lbrksld: "\u298F", lbrkslu: "\u298D", lcaron: "\u013E", lcedil: "\u013C", lcy: "\u043B", ldca: "\u2936", ldrdhar: "\u2967", ldrushar: "\u294B", ldsh: "\u21B2", le: "\u2264", leq: "\u2264", leftleftarrows: "\u21C7", llarr: "\u21C7", leftthreetimes: "\u22CB", lthree: "\u22CB", lescc: "\u2AA8", lesdot: "\u2A7F", lesdoto: "\u2A81", lesdotor: "\u2A83", lesg: "\u22DA\uFE00", lesges: "\u2A93", lessdot: "\u22D6", ltdot: "\u22D6", lfisht: "\u297C", lfr: "\u{1D529}", lgE: "\u2A91", lharul: "\u296A", lhblk: "\u2584", ljcy: "\u0459", llhard: "\u296B", lltri: "\u25FA", lmidot: "\u0140", lmoust: "\u23B0", lmoustache: "\u23B0", lnE: "\u2268", lneqq: "\u2268", lnap: "\u2A89", lnapprox: "\u2A89", lne: "\u2A87", lneq: "\u2A87", lnsim: "\u22E6", loang: "\u27EC", loarr: "\u21FD", longmapsto: "\u27FC", xmap: "\u27FC", looparrowright: "\u21AC", rarrlp: "\u21AC", lopar: "\u2985", lopf: "\u{1D55D}", loplus: "\u2A2D", lotimes: "\u2A34", lowast: "\u2217", loz: "\u25CA", lozenge: "\u25CA", lpar: "(", lparlt: "\u2993", lrhard: "\u296D", lrm: "\u200E", lrtri: "\u22BF", lsaquo: "\u2039", lscr: "\u{1D4C1}", lsime: "\u2A8D", lsimg: "\u2A8F", lsquor: "\u201A", sbquo: "\u201A", lstrok: "\u0142", ltcc: "\u2AA6", ltcir: "\u2A79", ltimes: "\u22C9", ltlarr: "\u2976", ltquest: "\u2A7B", ltrPar: "\u2996", ltri: "\u25C3", triangleleft: "\u25C3", lurdshar: "\u294A", luruhar: "\u2966", lvertneqq: "\u2268\uFE00", lvnE: "\u2268\uFE00", mDDot: "\u223A", macr: "\xAF", strns: "\xAF", male: "\u2642", malt: "\u2720", maltese: "\u2720", marker: "\u25AE", mcomma: "\u2A29", mcy: "\u043C", mdash: "\u2014", mfr: "\u{1D52A}", mho: "\u2127", micro: "\xB5", midcir: "\u2AF0", minus: "\u2212", minusdu: "\u2A2A", mlcp: "\u2ADB", models: "\u22A7", mopf: "\u{1D55E}", mscr: "\u{1D4C2}", mu: "\u03BC", multimap: "\u22B8", mumap: "\u22B8", nGg: "\u22D9\u0338", nGt: "\u226B\u20D2", nLeftarrow: "\u21CD", nlArr: "\u21CD", nLeftrightarrow: "\u21CE", nhArr: "\u21CE", nLl: "\u22D8\u0338", nLt: "\u226A\u20D2", nRightarrow: "\u21CF", nrArr: "\u21CF", nVDash: "\u22AF", nVdash: "\u22AE", nacute: "\u0144", nang: "\u2220\u20D2", napE: "\u2A70\u0338", napid: "\u224B\u0338", napos: "\u0149", natur: "\u266E", natural: "\u266E", ncap: "\u2A43", ncaron: "\u0148", ncedil: "\u0146", ncongdot: "\u2A6D\u0338", ncup: "\u2A42", ncy: "\u043D", ndash: "\u2013", neArr: "\u21D7", nearhk: "\u2924", nedot: "\u2250\u0338", nesear: "\u2928", toea: "\u2928", nfr: "\u{1D52B}", nharr: "\u21AE", nleftrightarrow: "\u21AE", nhpar: "\u2AF2", nis: "\u22FC", nisd: "\u22FA", njcy: "\u045A", nlE: "\u2266\u0338", nleqq: "\u2266\u0338", nlarr: "\u219A", nleftarrow: "\u219A", nldr: "\u2025", nopf: "\u{1D55F}", not: "\xAC", notinE: "\u22F9\u0338", notindot: "\u22F5\u0338", notinvb: "\u22F7", notinvc: "\u22F6", notnivb: "\u22FE", notnivc: "\u22FD", nparsl: "\u2AFD\u20E5", npart: "\u2202\u0338", npolint: "\u2A14", nrarr: "\u219B", nrightarrow: "\u219B", nrarrc: "\u2933\u0338", nrarrw: "\u219D\u0338", nscr: "\u{1D4C3}", nsub: "\u2284", nsubE: "\u2AC5\u0338", nsubseteqq: "\u2AC5\u0338", nsup: "\u2285", nsupE: "\u2AC6\u0338", nsupseteqq: "\u2AC6\u0338", ntilde: "\xF1", nu: "\u03BD", num: "#", numero: "\u2116", numsp: "\u2007", nvDash: "\u22AD", nvHarr: "\u2904", nvap: "\u224D\u20D2", nvdash: "\u22AC", nvge: "\u2265\u20D2", nvgt: ">\u20D2", nvinfin: "\u29DE", nvlArr: "\u2902", nvle: "\u2264\u20D2", nvlt: "<\u20D2", nvltrie: "\u22B4\u20D2", nvrArr: "\u2903", nvrtrie: "\u22B5\u20D2", nvsim: "\u223C\u20D2", nwArr: "\u21D6", nwarhk: "\u2923", nwnear: "\u2927", oacute: "\xF3", ocirc: "\xF4", ocy: "\u043E", odblac: "\u0151", odiv: "\u2A38", odsold: "\u29BC", oelig: "\u0153", ofcir: "\u29BF", ofr: "\u{1D52C}", ogon: "\u02DB", ograve: "\xF2", ogt: "\u29C1", ohbar: "\u29B5", olcir: "\u29BE", olcross: "\u29BB", olt: "\u29C0", omacr: "\u014D", omega: "\u03C9", omicron: "\u03BF", omid: "\u29B6", oopf: "\u{1D560}", opar: "\u29B7", operp: "\u29B9", or: "\u2228", vee: "\u2228", ord: "\u2A5D", order: "\u2134", orderof: "\u2134", oscr: "\u2134", ordf: "\xAA", ordm: "\xBA", origof: "\u22B6", oror: "\u2A56", orslope: "\u2A57", orv: "\u2A5B", oslash: "\xF8", osol: "\u2298", otilde: "\xF5", otimesas: "\u2A36", ouml: "\xF6", ovbar: "\u233D", para: "\xB6", parsim: "\u2AF3", parsl: "\u2AFD", pcy: "\u043F", percnt: "%", period: ".", permil: "\u2030", pertenk: "\u2031", pfr: "\u{1D52D}", phi: "\u03C6", phiv: "\u03D5", straightphi: "\u03D5", varphi: "\u03D5", phone: "\u260E", pi: "\u03C0", piv: "\u03D6", varpi: "\u03D6", planckh: "\u210E", plus: "+", plusacir: "\u2A23", pluscir: "\u2A22", plusdu: "\u2A25", pluse: "\u2A72", plussim: "\u2A26", plustwo: "\u2A27", pointint: "\u2A15", popf: "\u{1D561}", pound: "\xA3", prE: "\u2AB3", prap: "\u2AB7", precapprox: "\u2AB7", precnapprox: "\u2AB9", prnap: "\u2AB9", precneqq: "\u2AB5", prnE: "\u2AB5", precnsim: "\u22E8", prnsim: "\u22E8", prime: "\u2032", profalar: "\u232E", profline: "\u2312", profsurf: "\u2313", prurel: "\u22B0", pscr: "\u{1D4C5}", psi: "\u03C8", puncsp: "\u2008", qfr: "\u{1D52E}", qopf: "\u{1D562}", qprime: "\u2057", qscr: "\u{1D4C6}", quatint: "\u2A16", quest: "?", rAtail: "\u291C", rHar: "\u2964", race: "\u223D\u0331", racute: "\u0155", raemptyv: "\u29B3", rangd: "\u2992", range: "\u29A5", raquo: "\xBB", rarrap: "\u2975", rarrbfs: "\u2920", rarrc: "\u2933", rarrfs: "\u291E", rarrpl: "\u2945", rarrsim: "\u2974", rarrtl: "\u21A3", rightarrowtail: "\u21A3", rarrw: "\u219D", rightsquigarrow: "\u219D", ratail: "\u291A", ratio: "\u2236", rbbrk: "\u2773", rbrace: "}", rcub: "}", rbrack: "]", rsqb: "]", rbrke: "\u298C", rbrksld: "\u298E", rbrkslu: "\u2990", rcaron: "\u0159", rcedil: "\u0157", rcy: "\u0440", rdca: "\u2937", rdldhar: "\u2969", rdsh: "\u21B3", rect: "\u25AD", rfisht: "\u297D", rfr: "\u{1D52F}", rharul: "\u296C", rho: "\u03C1", rhov: "\u03F1", varrho: "\u03F1", rightrightarrows: "\u21C9", rrarr: "\u21C9", rightthreetimes: "\u22CC", rthree: "\u22CC", ring: "\u02DA", rlm: "\u200F", rmoust: "\u23B1", rmoustache: "\u23B1", rnmid: "\u2AEE", roang: "\u27ED", roarr: "\u21FE", ropar: "\u2986", ropf: "\u{1D563}", roplus: "\u2A2E", rotimes: "\u2A35", rpar: ")", rpargt: "\u2994", rppolint: "\u2A12", rsaquo: "\u203A", rscr: "\u{1D4C7}", rtimes: "\u22CA", rtri: "\u25B9", triangleright: "\u25B9", rtriltri: "\u29CE", ruluhar: "\u2968", rx: "\u211E", sacute: "\u015B", scE: "\u2AB4", scap: "\u2AB8", succapprox: "\u2AB8", scaron: "\u0161", scedil: "\u015F", scirc: "\u015D", scnE: "\u2AB6", succneqq: "\u2AB6", scnap: "\u2ABA", succnapprox: "\u2ABA", scnsim: "\u22E9", succnsim: "\u22E9", scpolint: "\u2A13", scy: "\u0441", sdot: "\u22C5", sdote: "\u2A66", seArr: "\u21D8", sect: "\xA7", semi: ";", seswar: "\u2929", tosa: "\u2929", sext: "\u2736", sfr: "\u{1D530}", sharp: "\u266F", shchcy: "\u0449", shcy: "\u0448", shy: "\xAD", sigma: "\u03C3", sigmaf: "\u03C2", sigmav: "\u03C2", varsigma: "\u03C2", simdot: "\u2A6A", simg: "\u2A9E", simgE: "\u2AA0", siml: "\u2A9D", simlE: "\u2A9F", simne: "\u2246", simplus: "\u2A24", simrarr: "\u2972", smashp: "\u2A33", smeparsl: "\u29E4", smile: "\u2323", ssmile: "\u2323", smt: "\u2AAA", smte: "\u2AAC", smtes: "\u2AAC\uFE00", softcy: "\u044C", sol: "/", solb: "\u29C4", solbar: "\u233F", sopf: "\u{1D564}", spades: "\u2660", spadesuit: "\u2660", sqcaps: "\u2293\uFE00", sqcups: "\u2294\uFE00", sscr: "\u{1D4C8}", star: "\u2606", sub: "\u2282", subset: "\u2282", subE: "\u2AC5", subseteqq: "\u2AC5", subdot: "\u2ABD", subedot: "\u2AC3", submult: "\u2AC1", subnE: "\u2ACB", subsetneqq: "\u2ACB", subne: "\u228A", subsetneq: "\u228A", subplus: "\u2ABF", subrarr: "\u2979", subsim: "\u2AC7", subsub: "\u2AD5", subsup: "\u2AD3", sung: "\u266A", sup1: "\xB9", sup2: "\xB2", sup3: "\xB3", supE: "\u2AC6", supseteqq: "\u2AC6", supdot: "\u2ABE", supdsub: "\u2AD8", supedot: "\u2AC4", suphsol: "\u27C9", suphsub: "\u2AD7", suplarr: "\u297B", supmult: "\u2AC2", supnE: "\u2ACC", supsetneqq: "\u2ACC", supne: "\u228B", supsetneq: "\u228B", supplus: "\u2AC0", supsim: "\u2AC8", supsub: "\u2AD4", supsup: "\u2AD6", swArr: "\u21D9", swnwar: "\u292A", szlig: "\xDF", target: "\u2316", tau: "\u03C4", tcaron: "\u0165", tcedil: "\u0163", tcy: "\u0442", telrec: "\u2315", tfr: "\u{1D531}", theta: "\u03B8", thetasym: "\u03D1", thetav: "\u03D1", vartheta: "\u03D1", thorn: "\xFE", times: "\xD7", timesbar: "\u2A31", timesd: "\u2A30", topbot: "\u2336", topcir: "\u2AF1", topf: "\u{1D565}", topfork: "\u2ADA", tprime: "\u2034", triangle: "\u25B5", utri: "\u25B5", triangleq: "\u225C", trie: "\u225C", tridot: "\u25EC", triminus: "\u2A3A", triplus: "\u2A39", trisb: "\u29CD", tritime: "\u2A3B", trpezium: "\u23E2", tscr: "\u{1D4C9}", tscy: "\u0446", tshcy: "\u045B", tstrok: "\u0167", uHar: "\u2963", uacute: "\xFA", ubrcy: "\u045E", ubreve: "\u016D", ucirc: "\xFB", ucy: "\u0443", udblac: "\u0171", ufisht: "\u297E", ufr: "\u{1D532}", ugrave: "\xF9", uhblk: "\u2580", ulcorn: "\u231C", ulcorner: "\u231C", ulcrop: "\u230F", ultri: "\u25F8", umacr: "\u016B", uogon: "\u0173", uopf: "\u{1D566}", upsi: "\u03C5", upsilon: "\u03C5", upuparrows: "\u21C8", uuarr: "\u21C8", urcorn: "\u231D", urcorner: "\u231D", urcrop: "\u230E", uring: "\u016F", urtri: "\u25F9", uscr: "\u{1D4CA}", utdot: "\u22F0", utilde: "\u0169", uuml: "\xFC", uwangle: "\u29A7", vBar: "\u2AE8", vBarv: "\u2AE9", vangrt: "\u299C", varsubsetneq: "\u228A\uFE00", vsubne: "\u228A\uFE00", varsubsetneqq: "\u2ACB\uFE00", vsubnE: "\u2ACB\uFE00", varsupsetneq: "\u228B\uFE00", vsupne: "\u228B\uFE00", varsupsetneqq: "\u2ACC\uFE00", vsupnE: "\u2ACC\uFE00", vcy: "\u0432", veebar: "\u22BB", veeeq: "\u225A", vellip: "\u22EE", vfr: "\u{1D533}", vopf: "\u{1D567}", vscr: "\u{1D4CB}", vzigzag: "\u299A", wcirc: "\u0175", wedbar: "\u2A5F", wedgeq: "\u2259", weierp: "\u2118", wp: "\u2118", wfr: "\u{1D534}", wopf: "\u{1D568}", wscr: "\u{1D4CC}", xfr: "\u{1D535}", xi: "\u03BE", xnis: "\u22FB", xopf: "\u{1D569}", xscr: "\u{1D4CD}", yacute: "\xFD", yacy: "\u044F", ycirc: "\u0177", ycy: "\u044B", yen: "\xA5", yfr: "\u{1D536}", yicy: "\u0457", yopf: "\u{1D56A}", yscr: "\u{1D4CE}", yucy: "\u044E", yuml: "\xFF", zacute: "\u017A", zcaron: "\u017E", zcy: "\u0437", zdot: "\u017C", zeta: "\u03B6", zfr: "\u{1D537}", zhcy: "\u0436", zigrarr: "\u21DD", zopf: "\u{1D56B}", zscr: "\u{1D4CF}", zwj: "\u200D", zwnj: "\u200C" }, Lf = "\uE500";
Ii.ngsp = Lf;
var Xl = class {
    tokens;
    errors;
    nonNormalizedIcuExpressions;
    constructor(e, t, s) { this.tokens = e, this.errors = t, this.nonNormalizedIcuExpressions = s; }
};
function Tw(n, e, t, s = {}) { let r = new Ql(new vi(n, e), t, s); return r.tokenize(), new Xl($w(r.tokens), r.errors, r.nonNormalizedIcuExpressions); }
var Iw = /\r\n?/g;
function _s(n) { return `Unexpected character "${n === be ? "EOF" : String.fromCharCode(n)}"`; }
function ch(n) { return `Unknown entity "${n}" - use the "&#<decimal>;" or  "&#x<hex>;" syntax`; }
function Nw(n, e) { return `Unable to parse entity "${e}" - ${n} character reference entities must end with ";"`; }
var Yl = (function (n) { return n.HEX = "hexadecimal", n.DEC = "decimal", n; })(Yl || {}), Dw = ["@if", "@else", "@for", "@switch", "@case", "@default", "@empty", "@defer", "@placeholder", "@loading", "@error"], mr = { start: "{{", end: "}}" }, Ql = class {
    _getTagDefinition;
    _cursor;
    _tokenizeIcu;
    _leadingTriviaCodePoints;
    _currentTokenStart = null;
    _currentTokenType = null;
    _expansionCaseStack = [];
    _openDirectiveCount = 0;
    _inInterpolation = !1;
    _preserveLineEndings;
    _i18nNormalizeLineEndingsInICUs;
    _tokenizeBlocks;
    _tokenizeLet;
    _selectorlessEnabled;
    tokens = [];
    errors = [];
    nonNormalizedIcuExpressions = [];
    constructor(e, t, s) { this._getTagDefinition = t, this._tokenizeIcu = s.tokenizeExpansionForms || !1, this._leadingTriviaCodePoints = s.leadingTriviaChars && s.leadingTriviaChars.map(i => i.codePointAt(0) || 0); let r = s.range || { endPos: e.content.length, startPos: 0, startLine: 0, startCol: 0 }; this._cursor = s.escapedString ? new Zl(e, r) : new Za(e, r), this._preserveLineEndings = s.preserveLineEndings || !1, this._i18nNormalizeLineEndingsInICUs = s.i18nNormalizeLineEndingsInICUs || !1, this._tokenizeBlocks = s.tokenizeBlocks ?? !0, this._tokenizeLet = s.tokenizeLet ?? !0, this._selectorlessEnabled = s.selectorlessEnabled ?? !1; try {
        this._cursor.init();
    }
    catch (i) {
        this.handleError(i);
    } }
    _processCarriageReturns(e) {
        return this._preserveLineEndings ? e : e.replace(Iw, `
`);
    }
    tokenize() { for (; this._cursor.peek() !== be;) {
        let e = this._cursor.clone();
        try {
            this._attemptCharCode($s) ? this._attemptCharCode(Pl) ? this._attemptCharCode(Ot) ? this._consumeCdata(e) : this._attemptCharCode(Pa) ? this._consumeComment(e) : this._consumeDocType(e) : this._attemptCharCode(ct) ? this._consumeTagClose(e) : this._consumeTagOpen(e) : this._tokenizeLet && this._cursor.peek() === Cs && !this._inInterpolation && this._isLetStart() ? this._consumeLetDeclaration(e) : this._tokenizeBlocks && this._isBlockStart() ? this._consumeBlockStart(e) : this._tokenizeBlocks && !this._inInterpolation && !this._isInExpansionCase() && !this._isInExpansionForm() && this._attemptCharCode(Fe) ? this._consumeBlockEnd(e) : this._tokenizeIcu && this._tokenizeExpansionForm() || this._consumeWithInterpolation(5, 8, () => this._isTextEnd(), () => this._isTagStart());
        }
        catch (t) {
            this.handleError(t);
        }
    } this._beginToken(41), this._endToken([]); }
    _getBlockName() { let e = !1, t = this._cursor.clone(); return this._attemptCharCodeUntilFn(s => gi(s) ? !e : Fw(s) ? (e = !0, !1) : !0), this._cursor.getChars(t).trim(); }
    _consumeBlockStart(e) { this._requireCharCode(Cs), this._beginToken(24, e); let t = this._endToken([this._getBlockName()]); if (t.parts[0] === "default never" && this._attemptCharCode(ze)) {
        this._beginToken(25), this._endToken([]), this._beginToken(26), this._endToken([]);
        return;
    } if (this._cursor.peek() === Oe)
        if (this._cursor.advance(), this._consumeBlockParameters(), this._attemptCharCodeUntilFn(ae), this._attemptCharCode(ge))
            this._attemptCharCodeUntilFn(ae);
        else {
            t.type = 28;
            return;
        } this._attemptCharCode(pt) ? (this._beginToken(25), this._endToken([])) : this._isBlockStart() && (t.parts[0] === "case" || t.parts[0] === "default") ? (this._beginToken(25), this._endToken([]), this._beginToken(26), this._endToken([])) : t.type = 28; }
    _consumeBlockEnd(e) { this._beginToken(26, e), this._endToken([]); }
    _consumeBlockParameters() { for (this._attemptCharCodeUntilFn(hh); this._cursor.peek() !== ge && this._cursor.peek() !== be;) {
        this._beginToken(27);
        let e = this._cursor.clone(), t = null, s = 0;
        for (; this._cursor.peek() !== ze && this._cursor.peek() !== be || t !== null;) {
            let r = this._cursor.peek();
            if (r === ns)
                this._cursor.advance();
            else if (r === t)
                t = null;
            else if (t === null && Nr(r))
                t = r;
            else if (r === Oe && t === null)
                s++;
            else if (r === ge && t === null) {
                if (s === 0)
                    break;
                s > 0 && s--;
            }
            this._cursor.advance();
        }
        this._endToken([this._cursor.getChars(e)]), this._attemptCharCodeUntilFn(hh);
    } }
    _consumeLetDeclaration(e) { if (this._requireStr("@let"), this._beginToken(29, e), gi(this._cursor.peek()))
        this._attemptCharCodeUntilFn(ae);
    else {
        let r = this._endToken([this._cursor.getChars(e)]);
        r.type = 32;
        return;
    } let t = this._endToken([this._getLetDeclarationName()]); if (this._attemptCharCodeUntilFn(ae), !this._attemptCharCode(Ae)) {
        t.type = 32;
        return;
    } this._attemptCharCodeUntilFn(r => ae(r) && !La(r)), this._consumeLetDeclarationValue(), this._cursor.peek() === ze ? (this._beginToken(31), this._cursor.advance(), this._endToken([])) : (t.type = 32, t.sourceSpan = this._cursor.getSpan(e)); }
    _getLetDeclarationName() { let e = this._cursor.clone(), t = !1; return this._attemptCharCodeUntilFn(s => Dn(s) || s === So || s === Vn || t && ut(s) ? (t = !0, !1) : !0), this._cursor.getChars(e).trim(); }
    _consumeLetDeclarationValue() { let e = this._cursor.clone(); for (this._beginToken(30, e); this._cursor.peek() !== be;) {
        let t = this._cursor.peek();
        if (t === ze)
            break;
        Nr(t) && (this._cursor.advance(), this._attemptCharCodeUntilFn(s => s === ns ? (this._cursor.advance(), !1) : s === t)), this._cursor.advance();
    } this._endToken([this._cursor.getChars(e)]); }
    _tokenizeExpansionForm() { if (this.isExpansionFormStart())
        return this._consumeExpansionFormStart(), !0; if (Mw(this._cursor.peek()) && this._isInExpansionForm())
        return this._consumeExpansionCaseStart(), !0; if (this._cursor.peek() === Fe) {
        if (this._isInExpansionCase())
            return this._consumeExpansionCaseEnd(), !0;
        if (this._isInExpansionForm())
            return this._consumeExpansionFormEnd(), !0;
    } return !1; }
    _beginToken(e, t = this._cursor.clone()) { this._currentTokenStart = t, this._currentTokenType = e; }
    _endToken(e, t) { if (this._currentTokenStart === null)
        throw new I(this._cursor.getSpan(t), "Programming error - attempted to end a token when there was no start to the token"); if (this._currentTokenType === null)
        throw new I(this._cursor.getSpan(this._currentTokenStart), "Programming error - attempted to end a token which has no token type"); let s = { type: this._currentTokenType, parts: e, sourceSpan: (t ?? this._cursor).getSpan(this._currentTokenStart, this._leadingTriviaCodePoints) }; return this.tokens.push(s), this._currentTokenStart = null, this._currentTokenType = null, s; }
    _createError(e, t) { this._isInExpansionForm() && (e += ` (Do you have an unescaped "{" in your template? Use "{{ '{' }}") to escape it.)`); let s = new I(t, e); return this._currentTokenStart = null, this._currentTokenType = null, s; }
    handleError(e) { if (e instanceof Ni && (e = this._createError(e.msg, this._cursor.getSpan(e.cursor))), e instanceof I)
        this.errors.push(e);
    else
        throw e; }
    _attemptCharCode(e) { return this._cursor.peek() === e ? (this._cursor.advance(), !0) : !1; }
    _attemptCharCodeCaseInsensitive(e) { return Rw(this._cursor.peek(), e) ? (this._cursor.advance(), !0) : !1; }
    _requireCharCode(e) { let t = this._cursor.clone(); if (!this._attemptCharCode(e))
        throw this._createError(_s(this._cursor.peek()), this._cursor.getSpan(t)); }
    _attemptStr(e) { let t = e.length; if (this._cursor.charsLeft() < t)
        return !1; let s = this._cursor.clone(); for (let r = 0; r < t; r++)
        if (!this._attemptCharCode(e.charCodeAt(r)))
            return this._cursor = s, !1; return !0; }
    _attemptStrCaseInsensitive(e) { for (let t = 0; t < e.length; t++)
        if (!this._attemptCharCodeCaseInsensitive(e.charCodeAt(t)))
            return !1; return !0; }
    _requireStr(e) { let t = this._cursor.clone(); if (!this._attemptStr(e))
        throw this._createError(_s(this._cursor.peek()), this._cursor.getSpan(t)); }
    _attemptCharCodeUntilFn(e) { for (; !e(this._cursor.peek());)
        this._cursor.advance(); }
    _requireCharCodeUntilFn(e, t) { let s = this._cursor.clone(); if (this._attemptCharCodeUntilFn(e), this._cursor.diff(s) < t)
        throw this._createError(_s(this._cursor.peek()), this._cursor.getSpan(s)); }
    _attemptUntilChar(e) { for (; this._cursor.peek() !== e;)
        this._cursor.advance(); }
    _readChar() { let e = String.fromCodePoint(this._cursor.peek()); return this._cursor.advance(), e; }
    _peekStr(e) { let t = e.length; if (this._cursor.charsLeft() < t)
        return !1; let s = this._cursor.clone(); for (let r = 0; r < t; r++) {
        if (s.peek() !== e.charCodeAt(r))
            return !1;
        s.advance();
    } return !0; }
    _isBlockStart() { return this._cursor.peek() === Cs && Dw.some(e => this._peekStr(e)); }
    _isLetStart() { return this._cursor.peek() === Cs && this._peekStr("@let"); }
    _consumeEntity(e) { this._beginToken(9); let t = this._cursor.clone(); if (this._cursor.advance(), this._attemptCharCode(Kp)) {
        let s = this._attemptCharCode(lf) || this._attemptCharCode(Qm), r = this._cursor.clone();
        if (this._attemptCharCodeUntilFn(Lw), this._cursor.peek() != ze) {
            this._cursor.advance();
            let a = s ? Yl.HEX : Yl.DEC;
            throw this._createError(Nw(a, this._cursor.getChars(t)), this._cursor.getSpan());
        }
        let i = this._cursor.getChars(r);
        this._cursor.advance();
        try {
            let a = parseInt(i, s ? 16 : 10);
            this._endToken([String.fromCodePoint(a), this._cursor.getChars(t)]);
        }
        catch {
            throw this._createError(ch(this._cursor.getChars(t)), this._cursor.getSpan());
        }
    }
    else {
        let s = this._cursor.clone();
        if (this._attemptCharCodeUntilFn(Bw), this._cursor.peek() != ze)
            this._beginToken(e, t), this._cursor = s, this._endToken(["&"]);
        else {
            let r = this._cursor.getChars(s);
            this._cursor.advance();
            let i = Ii.hasOwnProperty(r) && Ii[r];
            if (!i)
                throw this._createError(ch(r), this._cursor.getSpan(t));
            this._endToken([i, `&${r};`]);
        }
    } }
    _consumeRawText(e, t) { this._beginToken(e ? 6 : 7); let s = []; for (;;) {
        let r = this._cursor.clone(), i = t();
        if (this._cursor = r, i)
            break;
        e && this._cursor.peek() === Da ? (this._endToken([this._processCarriageReturns(s.join(""))]), s.length = 0, this._consumeEntity(6), this._beginToken(6)) : s.push(this._readChar());
    } this._endToken([this._processCarriageReturns(s.join(""))]); }
    _consumeComment(e) { this._beginToken(10, e), this._requireCharCode(Pa), this._endToken([]), this._consumeRawText(!1, () => this._attemptStr("-->")), this._beginToken(11), this._requireStr("-->"), this._endToken([]); }
    _consumeCdata(e) { this._beginToken(12, e), this._requireStr("CDATA["), this._endToken([]), this._consumeRawText(!1, () => this._attemptStr("]]>")), this._beginToken(13), this._requireStr("]]>"), this._endToken([]); }
    _consumeDocType(e) { this._beginToken(18, e); let t = this._cursor.clone(); this._attemptUntilChar(et); let s = this._cursor.getChars(t); this._cursor.advance(), this._endToken([s]); }
    _consumePrefixAndName(e) { let t = this._cursor.clone(), s = ""; for (; this._cursor.peek() !== Rt && !Pw(this._cursor.peek());)
        this._cursor.advance(); let r; this._cursor.peek() === Rt ? (s = this._cursor.getChars(t), this._cursor.advance(), r = this._cursor.clone()) : r = t, this._requireCharCodeUntilFn(e, s === "" ? 0 : 1); let i = this._cursor.getChars(r); return [s, i]; }
    _consumeTagOpen(e) { let t, s, r, i; try {
        if (this._selectorlessEnabled && zi(this._cursor.peek()))
            i = this._consumeComponentOpenStart(e), [r, s, t] = i.parts, s && (r += `:${s}`), t && (r += `:${t}`), this._attemptCharCodeUntilFn(ae);
        else {
            if (!Dn(this._cursor.peek()))
                throw this._createError(_s(this._cursor.peek()), this._cursor.getSpan(e));
            i = this._consumeTagOpenStart(e), s = i.parts[0], t = r = i.parts[1], this._attemptCharCodeUntilFn(ae);
        }
        for (; !fh(this._cursor.peek());)
            if (this._selectorlessEnabled && this._cursor.peek() === Cs) {
                let o = this._cursor.clone(), l = o.clone();
                l.advance(), zi(l.peek()) && this._consumeDirective(o, l);
            }
            else
                this._consumeAttribute();
        i.type === 33 ? this._consumeComponentOpenEnd() : this._consumeTagOpenEnd();
    }
    catch (o) {
        if (o instanceof I) {
            i ? i.type = i.type === 33 ? 37 : 4 : (this._beginToken(5, e), this._endToken(["<"]));
            return;
        }
        throw o;
    } let a = this._getTagDefinition(t).getContentType(s); a === Bt.RAW_TEXT ? this._consumeRawTextWithTagClose(i, r, !1) : a === Bt.ESCAPABLE_RAW_TEXT && this._consumeRawTextWithTagClose(i, r, !0); }
    _consumeRawTextWithTagClose(e, t, s) { this._consumeRawText(s, () => !this._attemptCharCode($s) || !this._attemptCharCode(ct) || (this._attemptCharCodeUntilFn(ae), !this._attemptStrCaseInsensitive(t)) ? !1 : (this._attemptCharCodeUntilFn(ae), this._attemptCharCode(et))), this._beginToken(e.type === 33 ? 36 : 3), this._requireCharCodeUntilFn(r => r === et, 3), this._cursor.advance(), this._endToken(e.parts); }
    _consumeTagOpenStart(e) { this._beginToken(0, e); let t = this._consumePrefixAndName(Un); return this._endToken(t); }
    _consumeComponentOpenStart(e) { this._beginToken(33, e); let t = this._consumeComponentName(); return this._endToken(t); }
    _consumeComponentName() { let e = this._cursor.clone(); for (; ph(this._cursor.peek());)
        this._cursor.advance(); let t = this._cursor.getChars(e), s = "", r = ""; return this._cursor.peek() === Rt && (this._cursor.advance(), [s, r] = this._consumePrefixAndName(Un)), [t, s, r]; }
    _consumeAttribute() { this._consumeAttributeName(), this._attemptCharCodeUntilFn(ae), this._attemptCharCode(Ae) && (this._attemptCharCodeUntilFn(ae), this._consumeAttributeValue()), this._attemptCharCodeUntilFn(ae); }
    _consumeAttributeName() { let e = this._cursor.peek(); if (e === mi || e === di)
        throw this._createError(_s(e), this._cursor.getSpan()); this._beginToken(14); let t; if (this._openDirectiveCount > 0) {
        let r = 0;
        t = i => { if (this._openDirectiveCount > 0) {
            if (i === Oe)
                r++;
            else if (i === ge) {
                if (r === 0)
                    return !0;
                r--;
            }
        } return Un(i); };
    }
    else if (e === Ot) {
        let r = 0;
        t = i => (i === Ot ? r++ : i === Zt && r--, r <= 0 ? Un(i) : La(i));
    }
    else
        t = Un; let s = this._consumePrefixAndName(t); this._endToken(s); }
    _consumeAttributeValue() { if (this._cursor.peek() === mi || this._cursor.peek() === di) {
        let e = this._cursor.peek();
        this._consumeQuote(e);
        let t = () => this._cursor.peek() === e;
        this._consumeWithInterpolation(16, 17, t, t), this._consumeQuote(e);
    }
    else {
        let e = () => Un(this._cursor.peek());
        this._consumeWithInterpolation(16, 17, e, e);
    } }
    _consumeQuote(e) { this._beginToken(15), this._requireCharCode(e), this._endToken([String.fromCodePoint(e)]); }
    _consumeTagOpenEnd() { let e = this._attemptCharCode(ct) ? 2 : 1; this._beginToken(e), this._requireCharCode(et), this._endToken([]); }
    _consumeComponentOpenEnd() { let e = this._attemptCharCode(ct) ? 35 : 34; this._beginToken(e), this._requireCharCode(et), this._endToken([]); }
    _consumeTagClose(e) { if (this._selectorlessEnabled) {
        let s = e.clone();
        for (; s.peek() !== et && !zi(s.peek());)
            s.advance();
        if (zi(s.peek())) {
            this._beginToken(36, e);
            let r = this._consumeComponentName();
            this._attemptCharCodeUntilFn(ae), this._requireCharCode(et), this._endToken(r);
            return;
        }
    } this._beginToken(3, e), this._attemptCharCodeUntilFn(ae); let t = this._consumePrefixAndName(Un); this._attemptCharCodeUntilFn(ae), this._requireCharCode(et), this._endToken(t); }
    _consumeExpansionFormStart() { this._beginToken(19), this._requireCharCode(pt), this._endToken([]), this._expansionCaseStack.push(19), this._beginToken(7); let e = this._readUntil(Pe), t = this._processCarriageReturns(e); if (this._i18nNormalizeLineEndingsInICUs)
        this._endToken([t]);
    else {
        let r = this._endToken([e]);
        t !== e && this.nonNormalizedIcuExpressions.push(r);
    } this._requireCharCode(Pe), this._attemptCharCodeUntilFn(ae), this._beginToken(7); let s = this._readUntil(Pe); this._endToken([s]), this._requireCharCode(Pe), this._attemptCharCodeUntilFn(ae); }
    _consumeExpansionCaseStart() { this._beginToken(20); let e = this._readUntil(pt).trim(); this._endToken([e]), this._attemptCharCodeUntilFn(ae), this._beginToken(21), this._requireCharCode(pt), this._endToken([]), this._attemptCharCodeUntilFn(ae), this._expansionCaseStack.push(21); }
    _consumeExpansionCaseEnd() { this._beginToken(22), this._requireCharCode(Fe), this._endToken([]), this._attemptCharCodeUntilFn(ae), this._expansionCaseStack.pop(); }
    _consumeExpansionFormEnd() { this._beginToken(23), this._requireCharCode(Fe), this._endToken([]), this._expansionCaseStack.pop(); }
    _consumeWithInterpolation(e, t, s, r) { this._beginToken(e); let i = []; for (; !s();) {
        let a = this._cursor.clone();
        this._attemptStr(mr.start) ? (this._endToken([this._processCarriageReturns(i.join(""))], a), i.length = 0, this._consumeInterpolation(t, a, r), this._beginToken(e)) : this._cursor.peek() === Da ? (this._endToken([this._processCarriageReturns(i.join(""))]), i.length = 0, this._consumeEntity(e), this._beginToken(e)) : i.push(this._readChar());
    } this._inInterpolation = !1, this._endToken([this._processCarriageReturns(i.join(""))]); }
    _consumeInterpolation(e, t, s) { let r = []; this._beginToken(e, t), r.push(mr.start); let i = this._cursor.clone(), a = null, o = !1; for (; this._cursor.peek() !== be && (s === null || !s());) {
        let l = this._cursor.clone();
        if (this._isTagStart()) {
            this._cursor = l, r.push(this._getProcessedChars(i, l)), this._endToken(r);
            return;
        }
        if (a === null)
            if (this._attemptStr(mr.end)) {
                r.push(this._getProcessedChars(i, l)), r.push(mr.end), this._endToken(r);
                return;
            }
            else
                this._attemptStr("//") && (o = !0);
        let c = this._cursor.peek();
        this._cursor.advance(), c === ns ? this._cursor.advance() : c === a ? a = null : !o && a === null && Nr(c) && (a = c);
    } r.push(this._getProcessedChars(i, this._cursor)), this._endToken(r); }
    _consumeDirective(e, t) { for (this._requireCharCode(Cs), this._cursor.advance(); ph(this._cursor.peek());)
        this._cursor.advance(); this._beginToken(38, e); let s = this._cursor.getChars(t); if (this._endToken([s]), this._attemptCharCodeUntilFn(ae), this._cursor.peek() === Oe) {
        for (this._openDirectiveCount++, this._beginToken(39), this._cursor.advance(), this._endToken([]), this._attemptCharCodeUntilFn(ae); !fh(this._cursor.peek()) && this._cursor.peek() !== ge;)
            this._consumeAttribute();
        if (this._attemptCharCodeUntilFn(ae), this._openDirectiveCount--, this._cursor.peek() !== ge) {
            if (this._cursor.peek() === et || this._cursor.peek() === ct)
                return;
            throw this._createError(_s(this._cursor.peek()), this._cursor.getSpan(e));
        }
        this._beginToken(40), this._cursor.advance(), this._endToken([]), this._attemptCharCodeUntilFn(ae);
    } }
    _getProcessedChars(e, t) { return this._processCarriageReturns(t.getChars(e)); }
    _isTextEnd() { return !!(this._isTagStart() || this._cursor.peek() === be || this._tokenizeIcu && !this._inInterpolation && (this.isExpansionFormStart() || this._cursor.peek() === Fe && this._isInExpansionCase()) || this._tokenizeBlocks && !this._inInterpolation && !this._isInExpansion() && (this._isBlockStart() || this._isLetStart() || this._cursor.peek() === Fe)); }
    _isTagStart() { if (this._cursor.peek() === $s) {
        let e = this._cursor.clone();
        e.advance();
        let t = e.peek();
        if (ms <= t && t <= qi || On <= t && t <= lr || t === ct || t === Pl)
            return !0;
    } return !1; }
    _readUntil(e) { let t = this._cursor.clone(); return this._attemptUntilChar(e), this._cursor.getChars(t); }
    _isInExpansion() { return this._isInExpansionCase() || this._isInExpansionForm(); }
    _isInExpansionCase() { return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === 21; }
    _isInExpansionForm() { return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === 19; }
    isExpansionFormStart() { if (this._cursor.peek() !== pt)
        return !1; let e = this._cursor.clone(), t = this._attemptStr(mr.start); return this._cursor = e, !t; }
};
function ae(n) { return !gi(n) || n === be; }
function Un(n) { return gi(n) || n === et || n === $s || n === ct || n === mi || n === di || n === Ae || n === be; }
function Pw(n) { return (n < ms || qi < n) && (n < On || lr < n) && (n < au || n > tf); }
function Lw(n) { return n === ze || n === be || !eg(n); }
function Bw(n) { return n === ze || n === be || !(Dn(n) || ut(n)); }
function Mw(n) { return n !== Fe; }
function Rw(n, e) { return uh(n) === uh(e); }
function uh(n) { return n >= ms && n <= qi ? n - ms + On : n; }
function Fw(n) { return Dn(n) || ut(n) || n === Vn; }
function hh(n) { return n !== ze && ae(n); }
function zi(n) { return n === Vn || n >= On && n <= lr; }
function ph(n) { return Dn(n) || ut(n) || n === Vn; }
function fh(n) { return n === ct || n === et || n === $s || n === be; }
function $w(n) { let e = [], t; for (let s = 0; s < n.length; s++) {
    let r = n[s];
    t && t.type === 5 && r.type === 5 || t && t.type === 16 && r.type === 16 ? (t.parts[0] += r.parts[0], t.sourceSpan.end = r.sourceSpan.end) : (t = r, e.push(t));
} return e; }
var Za = class n {
    state;
    file;
    input;
    end;
    constructor(e, t) { if (e instanceof n) {
        this.file = e.file, this.input = e.input, this.end = e.end;
        let s = e.state;
        this.state = { peek: s.peek, offset: s.offset, line: s.line, column: s.column };
    }
    else {
        if (!t)
            throw new Error("Programming error: the range argument must be provided with a file argument.");
        this.file = e, this.input = e.content, this.end = t.endPos, this.state = { peek: -1, offset: t.startPos, line: t.startLine, column: t.startCol };
    } }
    clone() { return new n(this); }
    peek() { return this.state.peek; }
    charsLeft() { return this.end - this.state.offset; }
    diff(e) { return this.state.offset - e.state.offset; }
    advance() { this.advanceState(this.state); }
    init() { this.updatePeek(this.state); }
    getSpan(e, t) { e = e || this; let s = e; if (t)
        for (; this.diff(e) > 0 && t.indexOf(e.peek()) !== -1;)
            s === e && (e = e.clone()), e.advance(); let r = this.locationFromCursor(e), i = this.locationFromCursor(this), a = s !== e ? this.locationFromCursor(s) : r; return new B(r, i, a); }
    getChars(e) { return this.input.substring(e.state.offset, this.state.offset); }
    charAt(e) { return this.input.charCodeAt(e); }
    advanceState(e) { if (e.offset >= this.end)
        throw this.state = e, new Ni('Unexpected character "EOF"', this); let t = this.charAt(e.offset); t === ts ? (e.line++, e.column = 0) : La(t) || e.column++, e.offset++, this.updatePeek(e); }
    updatePeek(e) { e.peek = e.offset >= this.end ? be : this.charAt(e.offset); }
    locationFromCursor(e) { return new gs(e.file, e.state.offset, e.state.line, e.state.column); }
}, Zl = class n extends Za {
    internalState;
    constructor(e, t) { e instanceof n ? (super(e), this.internalState = S({}, e.internalState)) : (super(e, t), this.internalState = this.state); }
    advance() { this.state = this.internalState, super.advance(), this.processEscapeSequence(); }
    init() { super.init(), this.processEscapeSequence(); }
    clone() { return new n(this); }
    getChars(e) { let t = e.clone(), s = ""; for (; t.internalState.offset < this.internalState.offset;)
        s += String.fromCodePoint(t.peek()), t.advance(); return s; }
    processEscapeSequence() { let e = () => this.internalState.peek; if (e() === ns)
        if (this.internalState = S({}, this.state), this.advanceState(this.internalState), e() === nf)
            this.state.peek = ts;
        else if (e() === sf)
            this.state.peek = iu;
        else if (e() === of)
            this.state.peek = Qp;
        else if (e() === rf)
            this.state.peek = ru;
        else if (e() === Jm)
            this.state.peek = jm;
        else if (e() === ou)
            this.state.peek = Zp;
        else if (e() === af)
            if (this.advanceState(this.internalState), e() === pt) {
                this.advanceState(this.internalState);
                let t = this.clone(), s = 0;
                for (; e() !== Fe;)
                    this.advanceState(this.internalState), s++;
                this.state.peek = this.decodeHexDigits(t, s);
            }
            else {
                let t = this.clone();
                this.advanceState(this.internalState), this.advanceState(this.internalState), this.advanceState(this.internalState), this.state.peek = this.decodeHexDigits(t, 4);
            }
        else if (e() === lf) {
            this.advanceState(this.internalState);
            let t = this.clone();
            this.advanceState(this.internalState), this.state.peek = this.decodeHexDigits(t, 2);
        }
        else if (Vu(e())) {
            let t = "", s = 0, r = this.clone();
            for (; Vu(e()) && s < 3;)
                r = this.clone(), t += String.fromCodePoint(e()), this.advanceState(this.internalState), s++;
            this.state.peek = parseInt(t, 8), this.internalState = r.internalState;
        }
        else
            La(this.internalState.peek) ? (this.advanceState(this.internalState), this.state = this.internalState) : this.state.peek = this.internalState.peek; }
    decodeHexDigits(e, t) { let s = this.input.slice(e.internalState.offset, e.internalState.offset + t), r = parseInt(s, 16); if (isNaN(r))
        throw e.state = e.internalState, new Ni("Invalid hexadecimal escape sequence", e); return r; }
}, Ni = class extends Error {
    msg;
    cursor;
    constructor(e, t) { super(e), this.msg = e, this.cursor = t, Object.setPrototypeOf(this, new.target.prototype); }
}, fe = class n extends I {
    elementName;
    static create(e, t, s) { return new n(e, t, s); }
    constructor(e, t, s) { super(t, s), this.elementName = e; }
}, sr = class {
    rootNodes;
    errors;
    constructor(e, t) { this.rootNodes = e, this.errors = t; }
}, Bf = class {
    getTagDefinition;
    constructor(e) { this.getTagDefinition = e; }
    parse(e, t, s) { let r = Tw(e, t, this.getTagDefinition, s), i = new Jl(r.tokens, this.getTagDefinition); return i.build(), new sr(i.rootNodes, [...r.errors, ...i.errors]); }
}, Jl = class n {
    tokens;
    tagDefinitionResolver;
    _index = -1;
    _peek;
    _containerStack = [];
    rootNodes = [];
    errors = [];
    constructor(e, t) { this.tokens = e, this.tagDefinitionResolver = t, this._advance(); }
    build() { for (; this._peek.type !== 41;)
        this._peek.type === 0 || this._peek.type === 4 ? this._consumeElementStartTag(this._advance()) : this._peek.type === 3 ? this._consumeElementEndTag(this._advance()) : this._peek.type === 12 ? (this._closeVoidElement(), this._consumeCdata(this._advance())) : this._peek.type === 10 ? (this._closeVoidElement(), this._consumeComment(this._advance())) : this._peek.type === 5 || this._peek.type === 7 || this._peek.type === 6 ? (this._closeVoidElement(), this._consumeText(this._advance())) : this._peek.type === 19 ? this._consumeExpansion(this._advance()) : this._peek.type === 24 ? (this._closeVoidElement(), this._consumeBlockOpen(this._advance())) : this._peek.type === 26 ? (this._closeVoidElement(), this._consumeBlockClose(this._advance())) : this._peek.type === 28 ? (this._closeVoidElement(), this._consumeIncompleteBlock(this._advance())) : this._peek.type === 29 ? (this._closeVoidElement(), this._consumeLet(this._advance())) : this._peek.type === 32 ? (this._closeVoidElement(), this._consumeIncompleteLet(this._advance())) : this._peek.type === 33 || this._peek.type === 37 ? this._consumeComponentStartTag(this._advance()) : this._peek.type === 36 ? this._consumeComponentEndTag(this._advance()) : this._advance(); for (let e of this._containerStack)
        e instanceof ht && this.errors.push(fe.create(e.name, e.sourceSpan, `Unclosed block "${e.name}"`)); }
    _advance() { let e = this._peek; return this._index < this.tokens.length - 1 && this._index++, this._peek = this.tokens[this._index], e; }
    _advanceIf(e) { return this._peek.type === e ? this._advance() : null; }
    _consumeCdata(e) { this._consumeText(this._advance()), this._advanceIf(13); }
    _consumeComment(e) { let t = this._advanceIf(7), s = this._advanceIf(11), r = t != null ? t.parts[0].trim() : null, i = s == null ? e.sourceSpan : new B(e.sourceSpan.start, s.sourceSpan.end, e.sourceSpan.fullStart); this._addToParent(new Rn(r, i)); }
    _consumeExpansion(e) { let t = this._advance(), s = this._advance(), r = []; for (; this._peek.type === 20;) {
        let a = this._parseExpansionCase();
        if (!a)
            return;
        r.push(a);
    } if (this._peek.type !== 23) {
        this.errors.push(fe.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '}'."));
        return;
    } let i = new B(e.sourceSpan.start, this._peek.sourceSpan.end, e.sourceSpan.fullStart); this._addToParent(new Sn(t.parts[0], s.parts[0], r, i, t.sourceSpan)), this._advance(); }
    _parseExpansionCase() { let e = this._advance(); if (this._peek.type !== 21)
        return this.errors.push(fe.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '{'.")), null; let t = this._advance(), s = this._collectExpansionExpTokens(t); if (!s)
        return null; let r = this._advance(); s.push({ type: 41, parts: [], sourceSpan: r.sourceSpan }); let i = new n(s, this.tagDefinitionResolver); if (i.build(), i.errors.length > 0)
        return this.errors = this.errors.concat(i.errors), null; let a = new B(e.sourceSpan.start, r.sourceSpan.end, e.sourceSpan.fullStart), o = new B(t.sourceSpan.start, r.sourceSpan.end, t.sourceSpan.fullStart); return new Ti(e.parts[0], i.rootNodes, a, e.sourceSpan, o); }
    _collectExpansionExpTokens(e) { let t = [], s = [21]; for (;;) {
        if ((this._peek.type === 19 || this._peek.type === 21) && s.push(this._peek.type), this._peek.type === 22)
            if (dh(s, 21)) {
                if (s.pop(), s.length === 0)
                    return t;
            }
            else
                return this.errors.push(fe.create(null, e.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
        if (this._peek.type === 23)
            if (dh(s, 19))
                s.pop();
            else
                return this.errors.push(fe.create(null, e.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
        if (this._peek.type === 41)
            return this.errors.push(fe.create(null, e.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
        t.push(this._advance());
    } }
    _consumeText(e) {
        let t = [e], s = e.sourceSpan, r = e.parts[0];
        if (r.length > 0 && r[0] === `
`) {
            let i = this._getContainer();
            i != null && i.children.length === 0 && this._getTagDefinition(i)?.ignoreFirstLf && (r = r.substring(1), t[0] = { type: e.type, sourceSpan: e.sourceSpan, parts: [r] });
        }
        for (; this._peek.type === 8 || this._peek.type === 5 || this._peek.type === 9;)
            e = this._advance(), t.push(e), e.type === 8 ? r += e.parts.join("").replace(/&([^;]+);/g, mh) : e.type === 9 ? r += e.parts[0] : r += e.parts.join("");
        if (r.length > 0) {
            let i = e.sourceSpan;
            this._addToParent(new ln(r, new B(s.start, i.end, s.fullStart, s.details), t));
        }
    }
    _closeVoidElement() { let e = this._getContainer(); e !== null && this._getTagDefinition(e)?.isVoid && this._containerStack.pop(); }
    _consumeElementStartTag(e) { let t = [], s = []; this._consumeAttributesAndDirectives(t, s); let r = this._getElementFullName(e, this._getClosestElementLikeParent()), i = this._getTagDefinition(r), a = !1; this._peek.type === 2 ? (this._advance(), a = !0, i?.canSelfClose || ml(r) !== null || i?.isVoid || this.errors.push(fe.create(r, e.sourceSpan, `Only void, custom and foreign elements can be self closed "${e.parts[1]}"`))) : this._peek.type === 1 && (this._advance(), a = !1); let o = this._peek.sourceSpan.fullStart, l = new B(e.sourceSpan.start, o, e.sourceSpan.fullStart), c = new B(e.sourceSpan.start, o, e.sourceSpan.fullStart), h = new Re(r, t, s, [], a, l, c, void 0, i?.isVoid ?? !1), p = this._getContainer(), m = p !== null && !!this._getTagDefinition(p)?.isClosedByChild(h.name); this._pushContainer(h, m), a ? this._popContainer(r, Re, l) : e.type === 4 && (this._popContainer(r, Re, null), this.errors.push(fe.create(r, l, `Opening tag "${r}" not terminated.`))); }
    _consumeComponentStartTag(e) { let t = e.parts[0], s = [], r = []; this._consumeAttributesAndDirectives(s, r); let i = this._getClosestElementLikeParent(), a = this._getComponentTagName(e, i), o = this._getComponentFullName(e, i), l = this._peek.type === 35; this._advance(); let c = this._peek.sourceSpan.fullStart, h = new B(e.sourceSpan.start, c, e.sourceSpan.fullStart), p = new B(e.sourceSpan.start, c, e.sourceSpan.fullStart), m = new ke(t, a, o, s, r, [], l, h, p, void 0), v = this._getContainer(), w = v !== null && m.tagName !== null && !!this._getTagDefinition(v)?.isClosedByChild(m.tagName); this._pushContainer(m, w), l ? this._popContainer(o, ke, h) : e.type === 37 && (this._popContainer(o, ke, null), this.errors.push(fe.create(o, h, `Opening tag "${o}" not terminated.`))); }
    _consumeAttributesAndDirectives(e, t) { for (; this._peek.type === 14 || this._peek.type === 38;)
        this._peek.type === 38 ? t.push(this._consumeDirective(this._peek)) : e.push(this._consumeAttr(this._advance())); }
    _consumeComponentEndTag(e) { let t = this._getComponentFullName(e, this._getClosestElementLikeParent()); if (!this._popContainer(t, ke, e.sourceSpan)) {
        let s = this._containerStack[this._containerStack.length - 1], r;
        s instanceof ke && s.componentName === e.parts[0] ? r = `, did you mean "${s.fullName}"?` : r = ". It may happen when the tag has already been closed by another tag.";
        let i = `Unexpected closing tag "${t}"${r}`;
        this.errors.push(fe.create(t, e.sourceSpan, i));
    } }
    _getTagDefinition(e) { return typeof e == "string" ? this.tagDefinitionResolver(e) : e instanceof Re ? this.tagDefinitionResolver(e.name) : e instanceof ke && e.tagName !== null ? this.tagDefinitionResolver(e.tagName) : null; }
    _pushContainer(e, t) { t && this._containerStack.pop(), this._addToParent(e), this._containerStack.push(e); }
    _consumeElementEndTag(e) { let t = this._getElementFullName(e, this._getClosestElementLikeParent()); if (this._getTagDefinition(t)?.isVoid)
        this.errors.push(fe.create(t, e.sourceSpan, `Void elements do not have end tags "${e.parts[1]}"`));
    else if (!this._popContainer(t, Re, e.sourceSpan)) {
        let s = `Unexpected closing tag "${t}". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags`;
        this.errors.push(fe.create(t, e.sourceSpan, s));
    } }
    _popContainer(e, t, s) { let r = !1; for (let i = this._containerStack.length - 1; i >= 0; i--) {
        let a = this._containerStack[i];
        if (((a instanceof ke ? a.fullName : a.name) === e || e === null) && a instanceof t)
            return a.endSourceSpan = s, a.sourceSpan.end = s !== null ? s.end : a.sourceSpan.end, this._containerStack.splice(i, this._containerStack.length - i), !r;
        (a instanceof ht || !this._getTagDefinition(a)?.closedByParent) && (r = !0);
    } return !1; }
    _consumeAttr(e) { let t = ia(e.parts[0], e.parts[1]), s = e.sourceSpan.end; this._peek.type === 15 && this._advance(); let r = "", i = [], a, o; if (this._peek.type === 16)
        for (a = this._peek.sourceSpan, o = this._peek.sourceSpan.end; this._peek.type === 16 || this._peek.type === 17 || this._peek.type === 9;) {
            let h = this._advance();
            i.push(h), h.type === 17 ? r += h.parts.join("").replace(/&([^;]+);/g, mh) : h.type === 9 ? r += h.parts[0] : r += h.parts.join(""), o = s = h.sourceSpan.end;
        } this._peek.type === 15 && (s = this._advance().sourceSpan.end); let c = a && o && new B(a.start, o, a.fullStart); return new xn(t, r, new B(e.sourceSpan.start, s, e.sourceSpan.fullStart), e.sourceSpan, c, i.length > 0 ? i : void 0, void 0); }
    _consumeDirective(e) { let t = [], s = e.sourceSpan.end, r = null; if (this._advance(), this._peek.type === 39) {
        for (s = this._peek.sourceSpan.end, this._advance(); this._peek.type === 14;)
            t.push(this._consumeAttr(this._advance()));
        this._peek.type === 40 ? (r = this._peek.sourceSpan, this._advance()) : this.errors.push(fe.create(null, e.sourceSpan, "Unterminated directive definition"));
    } let i = new B(e.sourceSpan.start, s, e.sourceSpan.fullStart), a = new B(i.start, r === null ? e.sourceSpan.end : r.end, i.fullStart); return new Xa(e.parts[0], t, a, i, r); }
    _consumeBlockOpen(e) { let t = []; for (; this._peek.type === 27;) {
        let o = this._advance();
        t.push(new Ya(o.parts[0], o.sourceSpan));
    } this._peek.type === 25 && this._advance(); let s = this._peek.sourceSpan.fullStart, r = new B(e.sourceSpan.start, s, e.sourceSpan.fullStart), i = new B(e.sourceSpan.start, s, e.sourceSpan.fullStart), a = new ht(e.parts[0], t, [], r, e.sourceSpan, i); this._pushContainer(a, !1); }
    _consumeBlockClose(e) { let t = this._containerStack.length, s = this._containerStack[t - 1]; if (!this._popContainer(null, ht, e.sourceSpan)) {
        if (this._containerStack.length < t) {
            let r = s instanceof ke ? s.fullName : s.name;
            this.errors.push(fe.create(null, e.sourceSpan, `Unexpected closing block. The block may have been closed earlier. Did you forget to close the <${r}> element? If you meant to write the \`}\` character, you should use the "&#125;" HTML entity instead.`));
            return;
        }
        this.errors.push(fe.create(null, e.sourceSpan, 'Unexpected closing block. The block may have been closed earlier. If you meant to write the `}` character, you should use the "&#125;" HTML entity instead.'));
    } }
    _consumeIncompleteBlock(e) { let t = []; for (; this._peek.type === 27;) {
        let o = this._advance();
        t.push(new Ya(o.parts[0], o.sourceSpan));
    } let s = this._peek.sourceSpan.fullStart, r = new B(e.sourceSpan.start, s, e.sourceSpan.fullStart), i = new B(e.sourceSpan.start, s, e.sourceSpan.fullStart), a = new ht(e.parts[0], t, [], r, e.sourceSpan, i); this._pushContainer(a, !1), this._popContainer(null, ht, null), this.errors.push(fe.create(e.parts[0], r, `Incomplete block "${e.parts[0]}". If you meant to write the @ character, you should use the "&#64;" HTML entity instead.`)); }
    _consumeLet(e) { let t = e.parts[0], s, r; if (this._peek.type !== 30) {
        this.errors.push(fe.create(e.parts[0], e.sourceSpan, `Invalid @let declaration "${t}". Declaration must have a value.`));
        return;
    }
    else
        s = this._advance(); if (this._peek.type !== 31) {
        this.errors.push(fe.create(e.parts[0], e.sourceSpan, `Unterminated @let declaration "${t}". Declaration must be terminated with a semicolon.`));
        return;
    }
    else
        r = this._advance(); let i = r.sourceSpan.end, a = new B(e.sourceSpan.start, i, e.sourceSpan.fullStart), o = e.sourceSpan.toString().lastIndexOf(t), l = e.sourceSpan.start.moveBy(o), c = new B(l, e.sourceSpan.end), h = new Qa(t, s.parts[0], a, c, s.sourceSpan); this._addToParent(h); }
    _consumeIncompleteLet(e) { let t = e.parts[0] ?? "", s = t ? ` "${t}"` : ""; if (t.length > 0) {
        let r = e.sourceSpan.toString().lastIndexOf(t), i = e.sourceSpan.start.moveBy(r), a = new B(i, e.sourceSpan.end), o = new B(e.sourceSpan.start, e.sourceSpan.start.moveBy(0)), l = new Qa(t, "", e.sourceSpan, a, o);
        this._addToParent(l);
    } this.errors.push(fe.create(e.parts[0], e.sourceSpan, `Incomplete @let declaration${s}. @let declarations must be written as \`@let <name> = <value>;\``)); }
    _getContainer() { return this._containerStack.length > 0 ? this._containerStack[this._containerStack.length - 1] : null; }
    _getClosestElementLikeParent() { for (let e = this._containerStack.length - 1; e > -1; e--) {
        let t = this._containerStack[e];
        if (t instanceof Re || t instanceof ke)
            return t;
    } return null; }
    _addToParent(e) { let t = this._getContainer(); t === null ? this.rootNodes.push(e) : t.children.push(e); }
    _getElementFullName(e, t) { let s = this._getPrefix(e, t); return ia(s, e.parts[1]); }
    _getComponentFullName(e, t) { let s = e.parts[0], r = this._getComponentTagName(e, t); return r === null ? s : r.startsWith(":") ? s + r : `${s}:${r}`; }
    _getComponentTagName(e, t) { let s = this._getPrefix(e, t), r = e.parts[2]; return !s && !r ? null : !s && r ? r : ia(s, r || "ng-component"); }
    _getPrefix(e, t) { let s, r; if (e.type === 33 || e.type === 37 || e.type === 36 ? (s = e.parts[1], r = e.parts[2]) : (s = e.parts[0], r = e.parts[1]), s = s || this._getTagDefinition(r)?.implicitNamespacePrefix || "", !s && t) {
        let i = t instanceof Re ? t.name : t.tagName;
        if (i !== null) {
            let a = Le(i)[1], o = this._getTagDefinition(a);
            o !== null && !o.preventNamespaceInheritance && (s = ml(i));
        }
    } return s; }
};
function dh(n, e) { return n.length > 0 && n[n.length - 1] === e; }
function mh(n, e) { return Ii[e] !== void 0 ? Ii[e] || n : /^#x[a-f0-9]+$/i.test(e) ? String.fromCodePoint(parseInt(e.slice(2), 16)) : /^#\d+$/.test(e) ? String.fromCodePoint(parseInt(e.slice(1), 10)) : n; }
var Mf = "ngPreserveWhitespaces", gh = new Set(["pre", "template", "textarea", "script", "style"]), Rf = ` \f
\r	\v\u1680\u180E\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF`, Ow = new RegExp(`[^${Rf}]`), Vw = new RegExp(`[${Rf}]{2,}`, "g");
function vh(n) { return n.some(e => e.name === Mf); }
function Ff(n) { return n.replace(new RegExp(Lf, "g"), " "); }
var Di = class {
    preserveSignificantWhitespace;
    originalNodeMap;
    requireContext;
    icuExpansionDepth = 0;
    constructor(e, t, s = !0) { this.preserveSignificantWhitespace = e, this.originalNodeMap = t, this.requireContext = s; }
    visitElement(e, t) { if (gh.has(e.name) || vh(e.attrs)) {
        let r = new Re(e.name, Ct(this, e.attrs), Ct(this, e.directives), e.children, e.isSelfClosing, e.sourceSpan, e.startSourceSpan, e.endSourceSpan, e.isVoid, e.i18n);
        return this.originalNodeMap?.set(r, e), r;
    } let s = new Re(e.name, e.attrs, e.directives, Ct(this, e.children), e.isSelfClosing, e.sourceSpan, e.startSourceSpan, e.endSourceSpan, e.isVoid, e.i18n); return this.originalNodeMap?.set(s, e), s; }
    visitAttribute(e, t) { return e.name !== Mf ? e : null; }
    visitText(e, t) { let s = e.value.match(Ow), r = t && (t.prev instanceof Sn || t.next instanceof Sn); if (this.icuExpansionDepth > 0 && this.preserveSignificantWhitespace)
        return e; if (s || r) {
        let a = e.tokens.map(h => h.type === 5 ? Ww(h) : h);
        if (!this.preserveSignificantWhitespace && a.length > 0) {
            let h = a[0];
            a.splice(0, 1, qw(h, t));
            let p = a[a.length - 1];
            a.splice(a.length - 1, 1, Uw(p, t));
        }
        let o = Of(e.value), l = this.preserveSignificantWhitespace ? o : Hw(o, t), c = new ln(l, e.sourceSpan, a, e.i18n);
        return this.originalNodeMap?.set(c, e), c;
    } return null; }
    visitComment(e, t) { return e; }
    visitExpansion(e, t) { this.icuExpansionDepth++; let s; try {
        s = new Sn(e.switchValue, e.type, Ct(this, e.cases), e.sourceSpan, e.switchValueSourceSpan, e.i18n);
    }
    finally {
        this.icuExpansionDepth--;
    } return this.originalNodeMap?.set(s, e), s; }
    visitExpansionCase(e, t) { let s = new Ti(e.value, Ct(this, e.expression), e.sourceSpan, e.valueSourceSpan, e.expSourceSpan); return this.originalNodeMap?.set(s, e), s; }
    visitBlock(e, t) { let s = new ht(e.name, e.parameters, Ct(this, e.children), e.sourceSpan, e.nameSpan, e.startSourceSpan, e.endSourceSpan); return this.originalNodeMap?.set(s, e), s; }
    visitBlockParameter(e, t) { return e; }
    visitLetDeclaration(e, t) { return e; }
    visitComponent(e, t) { if (e.tagName && gh.has(e.tagName) || vh(e.attrs)) {
        let r = new ke(e.componentName, e.tagName, e.fullName, Ct(this, e.attrs), Ct(this, e.directives), e.children, e.isSelfClosing, e.sourceSpan, e.startSourceSpan, e.endSourceSpan, e.i18n);
        return this.originalNodeMap?.set(r, e), r;
    } let s = new ke(e.componentName, e.tagName, e.fullName, e.attrs, e.directives, Ct(this, e.children), e.isSelfClosing, e.sourceSpan, e.startSourceSpan, e.endSourceSpan, e.i18n); return this.originalNodeMap?.set(s, e), s; }
    visitDirective(e, t) { return e; }
    visit(e, t) { if (this.requireContext && !t)
        throw new Error("WhitespaceVisitor requires context. Visit via `visitAllWithSiblings` to get this context."); return !1; }
};
function qw(n, e) { return n.type !== 5 || !!e?.prev ? n : $f(n, s => s.trimStart()); }
function Uw(n, e) { return n.type !== 5 || !!e?.next ? n : $f(n, s => s.trimEnd()); }
function Hw(n, e) { let t = !e?.prev, s = !e?.next, r = t ? n.trimStart() : n; return s ? r.trimEnd() : r; }
function Ww({ type: n, parts: e, sourceSpan: t }) { return { type: n, parts: [Of(e[0])], sourceSpan: t }; }
function $f({ type: n, parts: e, sourceSpan: t }, s) { return { type: n, parts: [s(e[0])], sourceSpan: t }; }
function Of(n) { return Ff(n).replace(Vw, " "); }
function Ct(n, e) { let t = []; return e.forEach((s, r) => { let i = { prev: e[r - 1], next: e[r + 1] }, a = s.visit(n, i); a && t.push(a); }), t; }
var L = (function (n) { return n[n.Character = 0] = "Character", n[n.Identifier = 1] = "Identifier", n[n.PrivateIdentifier = 2] = "PrivateIdentifier", n[n.Keyword = 3] = "Keyword", n[n.String = 4] = "String", n[n.Operator = 5] = "Operator", n[n.Number = 6] = "Number", n[n.RegExpBody = 7] = "RegExpBody", n[n.RegExpFlags = 8] = "RegExpFlags", n[n.Error = 9] = "Error", n; })(L || {}), ss = (function (n) { return n[n.Plain = 0] = "Plain", n[n.TemplateLiteralPart = 1] = "TemplateLiteralPart", n[n.TemplateLiteralEnd = 2] = "TemplateLiteralEnd", n; })(ss || {}), jw = ["var", "let", "as", "null", "undefined", "true", "false", "if", "else", "this", "typeof", "void", "in", "instanceof"], Pi = class {
    tokenize(e) { return new Kl(e).scan(); }
}, lt = class {
    index;
    end;
    type;
    numValue;
    strValue;
    constructor(e, t, s, r, i) { this.index = e, this.end = t, this.type = s, this.numValue = r, this.strValue = i; }
    isCharacter(e) { return this.type === L.Character && this.numValue === e; }
    isNumber() { return this.type === L.Number; }
    isString() { return this.type === L.String; }
    isOperator(e) { return this.type === L.Operator && this.strValue === e; }
    isIdentifier() { return this.type === L.Identifier; }
    isPrivateIdentifier() { return this.type === L.PrivateIdentifier; }
    isKeyword() { return this.type === L.Keyword; }
    isKeywordLet() { return this.type === L.Keyword && this.strValue === "let"; }
    isKeywordAs() { return this.type === L.Keyword && this.strValue === "as"; }
    isKeywordNull() { return this.type === L.Keyword && this.strValue === "null"; }
    isKeywordUndefined() { return this.type === L.Keyword && this.strValue === "undefined"; }
    isKeywordTrue() { return this.type === L.Keyword && this.strValue === "true"; }
    isKeywordFalse() { return this.type === L.Keyword && this.strValue === "false"; }
    isKeywordThis() { return this.type === L.Keyword && this.strValue === "this"; }
    isKeywordTypeof() { return this.type === L.Keyword && this.strValue === "typeof"; }
    isKeywordVoid() { return this.type === L.Keyword && this.strValue === "void"; }
    isKeywordIn() { return this.type === L.Keyword && this.strValue === "in"; }
    isKeywordInstanceOf() { return this.type === L.Keyword && this.strValue === "instanceof"; }
    isError() { return this.type === L.Error; }
    isRegExpBody() { return this.type === L.RegExpBody; }
    isRegExpFlags() { return this.type === L.RegExpFlags; }
    toNumber() { return this.type === L.Number ? this.numValue : -1; }
    isTemplateLiteralPart() { return this.isString() && this.kind === ss.TemplateLiteralPart; }
    isTemplateLiteralEnd() { return this.isString() && this.kind === ss.TemplateLiteralEnd; }
    isTemplateLiteralInterpolationStart() { return this.isOperator("${"); }
    toString() { switch (this.type) {
        case L.Character:
        case L.Identifier:
        case L.Keyword:
        case L.Operator:
        case L.PrivateIdentifier:
        case L.String:
        case L.Error:
        case L.RegExpBody:
        case L.RegExpFlags: return this.strValue;
        case L.Number: return this.numValue.toString();
        default: return null;
    } }
}, Dr = class extends lt {
    kind;
    constructor(e, t, s, r) { super(e, t, L.String, 0, s), this.kind = r; }
};
function gr(n, e, t) { return new lt(n, e, L.Character, t, String.fromCharCode(t)); }
function zw(n, e, t) { return new lt(n, e, L.Identifier, 0, t); }
function Gw(n, e, t) { return new lt(n, e, L.PrivateIdentifier, 0, t); }
function Xw(n, e, t) { return new lt(n, e, L.Keyword, 0, t); }
function hn(n, e, t) { return new lt(n, e, L.Operator, 0, t); }
function Yw(n, e, t) { return new lt(n, e, L.Number, t, ""); }
function Qw(n, e, t) { return new lt(n, e, L.Error, 0, t); }
function Zw(n, e, t) { return new lt(n, e, L.RegExpBody, 0, t); }
function Jw(n, e, t) { return new lt(n, e, L.RegExpFlags, 0, t); }
var vr = new lt(-1, -1, L.Character, 0, ""), Kl = class {
    input;
    tokens = [];
    length;
    peek = 0;
    index = -1;
    braceStack = [];
    constructor(e) { this.input = e, this.length = e.length, this.advance(); }
    scan() { let e = this.scanToken(); for (; e !== null;)
        this.tokens.push(e), e = this.scanToken(); return this.tokens; }
    advance() { this.peek = ++this.index >= this.length ? be : this.input.charCodeAt(this.index); }
    scanToken() { let e = this.input, t = this.length, s = this.peek, r = this.index; for (; s <= Jp;)
        if (++r >= t) {
            s = be;
            break;
        }
        else
            s = e.charCodeAt(r); if (this.peek = s, this.index = r, r >= t)
        return null; if (wh(s))
        return this.scanIdentifier(); if (ut(s))
        return this.scanNumber(r); let i = r; switch (s) {
        case jn: return this.advance(), ut(this.peek) ? this.scanNumber(i) : this.peek !== jn ? gr(i, this.index, jn) : (this.advance(), this.peek === jn ? (this.advance(), hn(i, this.index, "...")) : this.error(`Unexpected character [${String.fromCharCode(s)}]`, 0));
        case Oe:
        case ge:
        case Ot:
        case Zt:
        case Pe:
        case Rt:
        case ze: return this.scanCharacter(i, s);
        case pt: return this.scanOpenBrace(i, s);
        case Fe: return this.scanCloseBrace(i, s);
        case mi:
        case di: return this.scanString();
        case Ll: return this.advance(), this.scanTemplateLiteralPart(i);
        case Kp: return this.scanPrivateIdentifier();
        case ef: return this.scanComplexOperator(i, "+", Ae, "=");
        case Pa: return this.scanComplexOperator(i, "-", Ae, "=");
        case ct: return this.isStartOfRegex() ? this.scanRegex(r) : this.scanComplexOperator(i, "/", Ae, "=");
        case zm: return this.scanComplexOperator(i, "%", Ae, "=");
        case Zm: return this.scanOperator(i, "^");
        case Fu: return this.scanStar(i);
        case $u: return this.scanQuestion(i);
        case $s:
        case et: return this.scanComplexOperator(i, String.fromCharCode(s), Ae, "=");
        case Pl: return this.scanComplexOperator(i, "!", Ae, "=", Ae, "=");
        case Ae: return this.scanEquals(i);
        case Da: return this.scanComplexOperator(i, "&", Da, "&", Ae, "=");
        case Ou: return this.scanComplexOperator(i, "|", Ou, "|", Ae, "=");
        case cf:
            for (; gi(this.peek);)
                this.advance();
            return this.scanToken();
    } return this.advance(), this.error(`Unexpected character [${String.fromCharCode(s)}]`, 0); }
    scanCharacter(e, t) { return this.advance(), gr(e, this.index, t); }
    scanOperator(e, t) { return this.advance(), hn(e, this.index, t); }
    scanOpenBrace(e, t) { return this.braceStack.push("expression"), this.advance(), gr(e, this.index, t); }
    scanCloseBrace(e, t) { return this.advance(), this.braceStack.pop() === "interpolation" ? (this.tokens.push(gr(e, this.index, Fe)), this.scanTemplateLiteralPart(this.index)) : gr(e, this.index, t); }
    scanComplexOperator(e, t, s, r, i, a) { this.advance(); let o = t; return this.peek == s && (this.advance(), o += r), i != null && this.peek == i && (this.advance(), o += a), hn(e, this.index, o); }
    scanEquals(e) { this.advance(); let t = "="; if (this.peek === Ae)
        this.advance(), t += "=";
    else if (this.peek === et)
        return this.advance(), t += ">", hn(e, this.index, t); return this.peek === Ae && (this.advance(), t += "="), hn(e, this.index, t); }
    scanIdentifier() { let e = this.index; for (this.advance(); Eh(this.peek);)
        this.advance(); let t = this.input.substring(e, this.index); return jw.indexOf(t) > -1 ? Xw(e, this.index, t) : zw(e, this.index, t); }
    scanPrivateIdentifier() { let e = this.index; if (this.advance(), !wh(this.peek))
        return this.error("Invalid character [#]", -1); for (; Eh(this.peek);)
        this.advance(); let t = this.input.substring(e, this.index); return Gw(e, this.index, t); }
    scanNumber(e) { let t = this.index === e, s = !1; for (this.advance();;) {
        if (!ut(this.peek))
            if (this.peek === Vn) {
                if (!ut(this.input.charCodeAt(this.index - 1)) || !ut(this.input.charCodeAt(this.index + 1)))
                    return this.error("Invalid numeric separator", 0);
                s = !0;
            }
            else if (this.peek === jn)
                t = !1;
            else if (Kw(this.peek)) {
                if (this.advance(), eE(this.peek) && this.advance(), !ut(this.peek))
                    return this.error("Invalid exponent", -1);
                t = !1;
            }
            else
                break;
        this.advance();
    } let r = this.input.substring(e, this.index); s && (r = r.replace(/_/g, "")); let i = t ? nE(r) : parseFloat(r); return Yw(e, this.index, i); }
    scanString() { let e = this.index, t = this.peek; this.advance(); let s = "", r = this.index, i = this.input; for (; this.peek != t;)
        if (this.peek == ns) {
            let o = this.scanStringBackslash(s, r);
            if (typeof o != "string")
                return o;
            s = o, r = this.index;
        }
        else {
            if (this.peek == be)
                return this.error("Unterminated quote", 0);
            this.advance();
        } let a = i.substring(r, this.index); return this.advance(), new Dr(e, this.index, s + a, ss.Plain); }
    scanQuestion(e) { this.advance(); let t = "?"; return this.peek === $u ? (t += "?", this.advance(), this.peek === Ae && (t += "=", this.advance())) : this.peek === jn && (t += ".", this.advance()), hn(e, this.index, t); }
    scanTemplateLiteralPart(e) { let t = "", s = this.index; for (; this.peek !== Ll;)
        if (this.peek === ns) {
            let i = this.scanStringBackslash(t, s);
            if (typeof i != "string")
                return i;
            t = i, s = this.index;
        }
        else if (this.peek === So) {
            let i = this.index;
            if (this.advance(), this.peek === pt)
                return this.braceStack.push("interpolation"), this.tokens.push(new Dr(e, i, t + this.input.substring(s, i), ss.TemplateLiteralPart)), this.advance(), hn(i, this.index, this.input.substring(i, this.index));
        }
        else {
            if (this.peek === be)
                return this.error("Unterminated template literal", 0);
            this.advance();
        } let r = this.input.substring(s, this.index); return this.advance(), new Dr(e, this.index, t + r, ss.TemplateLiteralEnd); }
    error(e, t) { let s = this.index + t; return Qw(s, this.index, `Lexer Error: ${e} at column ${s} in expression [${this.input}]`); }
    scanStringBackslash(e, t) { e += this.input.substring(t, this.index); let s; if (this.advance(), this.peek === af) {
        let r = this.input.substring(this.index + 1, this.index + 5);
        if (/^[0-9a-f]+$/i.test(r))
            s = parseInt(r, 16);
        else
            return this.error(`Invalid unicode escape [\\u${r}]`, 0);
        for (let i = 0; i < 5; i++)
            this.advance();
    }
    else
        s = tE(this.peek), this.advance(); return e += String.fromCharCode(s), e; }
    scanStar(e) { this.advance(); let t = "*"; return this.peek === Fu ? (t += "*", this.advance(), this.peek === Ae && (t += "=", this.advance())) : this.peek === Ae && (t += "=", this.advance()), hn(e, this.index, t); }
    isStartOfRegex() { if (this.tokens.length === 0)
        return !0; let e = this.tokens[this.tokens.length - 1]; if (e.isOperator("!")) {
        let t = this.tokens.length > 1 ? this.tokens[this.tokens.length - 2] : null;
        return t === null || t.type !== L.Identifier && !t.isCharacter(ge) && !t.isCharacter(Zt);
    } return e.type === L.Operator || e.isCharacter(Oe) || e.isCharacter(Ot) || e.isCharacter(Pe) || e.isCharacter(Rt); }
    scanRegex(e) { this.advance(); let t = this.index, s = !1, r = !1; for (;;) {
        let l = this.peek;
        if (l === be)
            return this.error("Unterminated regular expression", 0);
        if (s)
            s = !1;
        else if (l === ns)
            s = !0;
        else if (l === Ot)
            r = !0;
        else if (l === Zt)
            r = !1;
        else if (l === ct && !r)
            break;
        this.advance();
    } let i = this.input.substring(t, this.index); this.advance(); let a = Zw(e, this.index, i), o = this.scanRegexFlags(this.index); return o !== null ? (this.tokens.push(a), o) : a; }
    scanRegexFlags(e) { if (!Dn(this.peek))
        return null; for (; Dn(this.peek);)
        this.advance(); return Jw(e, this.index, this.input.substring(e, this.index)); }
};
function wh(n) { return ms <= n && n <= qi || On <= n && n <= lr || n == Vn || n == So; }
function Eh(n) { return Dn(n) || ut(n) || n == Vn || n == So; }
function Kw(n) { return n == Km || n == Xm; }
function eE(n) { return n == Pa || n == ef; }
function tE(n) { switch (n) {
    case nf: return ts;
    case ou: return Zp;
    case sf: return iu;
    case rf: return ru;
    case of: return Qp;
    default: return n;
} }
function nE(n) { let e = parseInt(n); if (isNaN(e))
    throw new Error("Invalid integer literal when parsing " + n); return e; }
var ec = class {
    strings;
    expressions;
    offsets;
    constructor(e, t, s) { this.strings = e, this.expressions = t, this.offsets = s; }
}, tc = class {
    templateBindings;
    warnings;
    errors;
    constructor(e, t, s) { this.templateBindings = e, this.warnings = t, this.errors = s; }
};
function gn(n) { return n.start.toString() || "(unknown)"; }
var Ja = class {
    _lexer;
    _supportsDirectPipeReferences;
    constructor(e, t = !1) { this._lexer = e, this._supportsDirectPipeReferences = t; }
    parseAction(e, t, s) { let r = []; this._checkNoInterpolation(r, e, t); let { stripped: i } = this._stripComments(e), a = this._lexer.tokenize(i), o = new Xn(e, t, s, a, 1, r, 0, this._supportsDirectPipeReferences).parseChain(); return new Ge(o, e, gn(t), s, r); }
    parseBinding(e, t, s) { let r = [], i = this._parseBindingAst(e, t, s, r); return new Ge(i, e, gn(t), s, r); }
    checkSimpleExpression(e) { let t = new nc; return e.visit(t), t.errors; }
    parseSimpleBinding(e, t, s) { let r = [], i = this._parseBindingAst(e, t, s, r), a = this.checkSimpleExpression(i); return a.length > 0 && r.push(Rs(`Host binding expression cannot contain ${a.join(" ")}`, e, "", t)), new Ge(i, e, gn(t), s, r); }
    _parseBindingAst(e, t, s, r) { this._checkNoInterpolation(r, e, t); let { stripped: i } = this._stripComments(e), a = this._lexer.tokenize(i); return new Xn(e, t, s, a, 0, r, 0, this._supportsDirectPipeReferences).parseChain(); }
    parseTemplateBindings(e, t, s, r, i) { let a = this._lexer.tokenize(t), o = []; return new Xn(t, s, i, a, 0, o, 0, this._supportsDirectPipeReferences).parseTemplateBindings({ source: e, span: new nt(r, r + e.length) }); }
    parseInterpolation(e, t, s, r) { let i = [], { strings: a, expressions: o, offsets: l } = this.splitInterpolation(e, t, i, r); if (o.length === 0)
        return null; let c = []; for (let h = 0; h < o.length; ++h) {
        let p = r?.[h * 2 + 1]?.sourceSpan, m = o[h].text, { stripped: v, hasComments: w } = this._stripComments(m), C = this._lexer.tokenize(v);
        if (w && v.trim().length === 0 && C.length === 0) {
            i.push(Rs("Interpolation expression cannot only contain a comment", e, `at column ${o[h].start} in`, t));
            continue;
        }
        let T = new Xn(p ? m : e, p || t, s, C, 0, i, l[h], this._supportsDirectPipeReferences).parseChain();
        c.push(T);
    } return this.createInterpolationAst(a.map(h => h.text), c, e, gn(t), s, i); }
    parseInterpolationExpression(e, t, s) { let { stripped: r } = this._stripComments(e), i = this._lexer.tokenize(r), a = [], o = new Xn(e, t, s, i, 0, a, 0, this._supportsDirectPipeReferences).parseChain(), l = ["", ""]; return this.createInterpolationAst(l, [o], e, gn(t), s, a); }
    createInterpolationAst(e, t, s, r, i, a) { let o = new hs(0, s.length), l = new Oi(o, o.toAbsolute(i), e, t); return new Ge(l, s, r, i, a); }
    splitInterpolation(e, t, s, r) { let i = [], a = [], o = [], l = r ? sE(r) : null, c = 0, h = !1, p = !1, m = "{{", v = "}}"; for (; c < e.length;)
        if (h) {
            let w = c, C = w + m.length, T = this._getInterpolationEndIndex(e, v, C);
            if (T === -1) {
                h = !1, p = !0;
                break;
            }
            let k = T + v.length, R = e.substring(C, T);
            R.trim().length === 0 && s.push(Rs("Blank expressions are not allowed in interpolated strings", e, `at column ${c} in`, t)), a.push({ text: R, start: w, end: k });
            let O = (l?.get(w) ?? w) + m.length;
            o.push(O), c = k, h = !1;
        }
        else {
            let w = c;
            c = e.indexOf(m, c), c === -1 && (c = e.length);
            let C = e.substring(w, c);
            i.push({ text: C, start: w, end: c }), h = !0;
        } if (!h)
        if (p) {
            let w = i[i.length - 1];
            w.text += e.substring(c), w.end = e.length;
        }
        else
            i.push({ text: e.substring(c), start: c, end: e.length }); return new ec(i, a, o); }
    wrapLiteralPrimitive(e, t, s) { let r = new hs(0, e == null ? 0 : e.length); return new Ge(new je(r, r.toAbsolute(s), e), e, typeof t == "string" ? t : gn(t), s, []); }
    _stripComments(e) { let t = this._commentStart(e); return t != null ? { stripped: e.substring(0, t), hasComments: !0 } : { stripped: e, hasComments: !1 }; }
    _commentStart(e) { let t = null; for (let s = 0; s < e.length - 1; s++) {
        let r = e.charCodeAt(s), i = e.charCodeAt(s + 1);
        if (r === ct && i == ct && t == null)
            return s;
        t === r ? t = null : t == null && Nr(r) && (t = r);
    } return null; }
    _checkNoInterpolation(e, t, s) { let r = -1, i = -1; for (let a of this._forEachUnquotedChar(t, 0))
        if (r === -1)
            t.startsWith("{{") && (r = a);
        else if (i = this._getInterpolationEndIndex(t, "}}", a), i > -1)
            break; r > -1 && i > -1 && e.push(Rs("Got interpolation ({{}}) where expression was expected", t, `at column ${r} in`, s)); }
    _getInterpolationEndIndex(e, t, s) { for (let r of this._forEachUnquotedChar(e, s)) {
        if (e.startsWith(t, r))
            return r;
        if (e.startsWith("//", r))
            return e.indexOf(t, r);
    } return -1; }
    *_forEachUnquotedChar(e, t) { let s = null, r = 0; for (let i = t; i < e.length; i++) {
        let a = e[i];
        Nr(e.charCodeAt(i)) && (s === null || s === a) && r % 2 === 0 ? s = s === null ? a : null : s === null && (yield i), r = a === "\\" ? r + 1 : 0;
    } }
}, _r = (function (n) { return n[n.None = 0] = "None", n[n.Writable = 1] = "Writable", n; })(_r || {}), Sh = new Set(["d", "g", "i", "m", "s", "u", "v", "y"]), Xn = class {
    input;
    parseSourceSpan;
    absoluteOffset;
    tokens;
    parseFlags;
    errors;
    offset;
    supportsDirectPipeReferences;
    rparensExpected = 0;
    rbracketsExpected = 0;
    rbracesExpected = 0;
    context = _r.None;
    sourceSpanCache = new Map;
    index = 0;
    constructor(e, t, s, r, i, a, o, l) { this.input = e, this.parseSourceSpan = t, this.absoluteOffset = s, this.tokens = r, this.parseFlags = i, this.errors = a, this.offset = o, this.supportsDirectPipeReferences = l; }
    peek(e) { let t = this.index + e; return t < this.tokens.length ? this.tokens[t] : vr; }
    get next() { return this.peek(0); }
    get atEOF() { return this.index >= this.tokens.length; }
    get inputIndex() { return this.atEOF ? this.currentEndIndex : this.next.index + this.offset; }
    get currentEndIndex() { return this.index > 0 ? this.peek(-1).end + this.offset : this.tokens.length === 0 ? this.input.length + this.offset : this.next.index + this.offset; }
    get currentAbsoluteOffset() { return this.absoluteOffset + this.inputIndex; }
    span(e, t) { let s = this.currentEndIndex; if (t !== void 0 && t > this.currentEndIndex && (s = t), e > s) {
        let r = s;
        s = e, e = r;
    } return new hs(e, s); }
    sourceSpan(e, t) { let s = `${e}@${this.inputIndex}:${t}`; return this.sourceSpanCache.has(s) || this.sourceSpanCache.set(s, this.span(e, t).toAbsolute(this.absoluteOffset)), this.sourceSpanCache.get(s); }
    advance() { this.index++; }
    withContext(e, t) { this.context |= e; let s = t(); return this.context ^= e, s; }
    consumeOptionalCharacter(e) { return this.next.isCharacter(e) ? (this.advance(), !0) : !1; }
    peekKeywordLet() { return this.next.isKeywordLet(); }
    peekKeywordAs() { return this.next.isKeywordAs(); }
    expectCharacter(e) { this.consumeOptionalCharacter(e) || this.error(`Missing expected ${String.fromCharCode(e)}`); }
    consumeOptionalOperator(e) { return this.next.isOperator(e) ? (this.advance(), !0) : !1; }
    isAssignmentOperator(e) { return e.type === L.Operator && Me.isAssignmentOperation(e.strValue); }
    expectOperator(e) { this.consumeOptionalOperator(e) || this.error(`Missing expected operator ${e}`); }
    prettyPrintToken(e) { return e === vr ? "end of input" : `token ${e}`; }
    expectIdentifierOrKeyword() { let e = this.next; return !e.isIdentifier() && !e.isKeyword() ? (e.isPrivateIdentifier() ? this._reportErrorForPrivateIdentifier(e, "expected identifier or keyword") : this.error(`Unexpected ${this.prettyPrintToken(e)}, expected identifier or keyword`), null) : (this.advance(), e.toString()); }
    expectIdentifierOrKeywordOrString() { let e = this.next; return !e.isIdentifier() && !e.isKeyword() && !e.isString() ? (e.isPrivateIdentifier() ? this._reportErrorForPrivateIdentifier(e, "expected identifier, keyword or string") : this.error(`Unexpected ${this.prettyPrintToken(e)}, expected identifier, keyword, or string`), "") : (this.advance(), e.toString()); }
    parseChain() { let e = [], t = this.inputIndex; for (; this.index < this.tokens.length;) {
        let s = this.parsePipe();
        if (e.push(s), this.consumeOptionalCharacter(ze))
            for (this.parseFlags & 1 || this.error("Binding expression cannot contain chained expression"); this.consumeOptionalCharacter(ze);)
                ;
        else if (this.index < this.tokens.length) {
            let r = this.index;
            if (this.error(`Unexpected token '${this.next}'`), this.index === r)
                break;
        }
    } if (e.length === 0) {
        let s = this.offset, r = this.offset + this.input.length;
        return new De(this.span(s, r), this.sourceSpan(s, r));
    } return e.length == 1 ? e[0] : new js(this.span(t), this.sourceSpan(t), e); }
    parsePipe() { let e = this.inputIndex, t = this.parseExpression(); if (this.consumeOptionalOperator("|")) {
        this.parseFlags & 1 && this.error("Cannot have a pipe in an action expression");
        do {
            let s = this.inputIndex, r = this.expectIdentifierOrKeyword(), i, a;
            r !== null ? i = this.sourceSpan(s) : (r = "", a = this.next.index !== -1 ? this.next.index : this.input.length + this.offset, i = new hs(a, a).toAbsolute(this.absoluteOffset));
            let o = [];
            for (; this.consumeOptionalCharacter(Rt);)
                o.push(this.parseExpression());
            let l;
            if (this.supportsDirectPipeReferences) {
                let c = r.charCodeAt(0);
                l = c === Vn || c >= On && c <= lr ? ra.ReferencedDirectly : ra.ReferencedByName;
            }
            else
                l = ra.ReferencedByName;
            t = new ga(this.span(e), this.sourceSpan(e, a), t, r, o, l, i);
        } while (this.consumeOptionalOperator("|"));
    } return t; }
    parseExpression() { return this.parseConditional(); }
    parseConditional() { let e = this.inputIndex, t = this.parseLogicalOr(); if (this.consumeOptionalOperator("?")) {
        let s = this.parsePipe(), r;
        if (this.consumeOptionalCharacter(Rt))
            r = this.parsePipe();
        else {
            let i = this.inputIndex, a = this.input.substring(e, i);
            this.error(`Conditional expression ${a} requires all 3 expressions`), r = new De(this.span(e), this.sourceSpan(e));
        }
        return new ma(this.span(e), this.sourceSpan(e), t, s, r);
    }
    else
        return t; }
    parseLogicalOr() { let e = this.inputIndex, t = this.parseLogicalAnd(); for (; this.consumeOptionalOperator("||");) {
        let s = this.parseLogicalAnd();
        t = new Me(this.span(e), this.sourceSpan(e), "||", t, s);
    } return t; }
    parseLogicalAnd() { let e = this.inputIndex, t = this.parseNullishCoalescing(); for (; this.consumeOptionalOperator("&&");) {
        let s = this.parseNullishCoalescing();
        t = new Me(this.span(e), this.sourceSpan(e), "&&", t, s);
    } return t; }
    parseNullishCoalescing() { let e = this.inputIndex, t = this.parseEquality(); for (; this.consumeOptionalOperator("??");) {
        let s = this.parseEquality();
        t = new Me(this.span(e), this.sourceSpan(e), "??", t, s);
    } return t; }
    parseEquality() { let e = this.inputIndex, t = this.parseRelational(); for (; this.next.type == L.Operator;) {
        let s = this.next.strValue;
        switch (s) {
            case "==":
            case "===":
            case "!=":
            case "!==":
                this.advance();
                let r = this.parseRelational();
                t = new Me(this.span(e), this.sourceSpan(e), s, t, r);
                continue;
        }
        break;
    } return t; }
    parseRelational() { let e = this.inputIndex, t = this.parseAdditive(); for (; this.next.type == L.Operator || this.next.isKeywordIn() || this.next.isKeywordInstanceOf();) {
        let s = this.next.strValue;
        switch (s) {
            case "<":
            case ">":
            case "<=":
            case ">=":
            case "in":
            case "instanceof":
                this.advance();
                let r = this.parseAdditive();
                t = new Me(this.span(e), this.sourceSpan(e), s, t, r);
                continue;
        }
        break;
    } return t; }
    parseAdditive() { let e = this.inputIndex, t = this.parseMultiplicative(); for (; this.next.type == L.Operator;) {
        let s = this.next.strValue;
        switch (s) {
            case "+":
            case "-":
                this.advance();
                let r = this.parseMultiplicative();
                t = new Me(this.span(e), this.sourceSpan(e), s, t, r);
                continue;
        }
        break;
    } return t; }
    parseMultiplicative() { let e = this.inputIndex, t = this.parseExponentiation(); for (; this.next.type == L.Operator;) {
        let s = this.next.strValue;
        switch (s) {
            case "*":
            case "%":
            case "/":
                this.advance();
                let r = this.parseExponentiation();
                t = new Me(this.span(e), this.sourceSpan(e), s, t, r);
                continue;
        }
        break;
    } return t; }
    parseExponentiation() { let e = this.inputIndex, t = this.parsePrefix(); for (; this.next.type == L.Operator && this.next.strValue === "**";) {
        (t instanceof Fs || t instanceof Zr || t instanceof Jr || t instanceof Kr) && this.error("Unary operator used immediately before exponentiation expression. Parenthesis must be used to disambiguate operator precedence"), this.advance();
        let s = this.parseExponentiation();
        t = new Me(this.span(e), this.sourceSpan(e), "**", t, s);
    } return t; }
    parsePrefix() { if (this.next.type == L.Operator) {
        let e = this.inputIndex, t = this.next.strValue, s;
        switch (t) {
            case "+": return this.advance(), s = this.parsePrefix(), Fs.createPlus(this.span(e), this.sourceSpan(e), s);
            case "-": return this.advance(), s = this.parsePrefix(), Fs.createMinus(this.span(e), this.sourceSpan(e), s);
            case "!": return this.advance(), s = this.parsePrefix(), new Zr(this.span(e), this.sourceSpan(e), s);
        }
    }
    else if (this.next.isKeywordTypeof()) {
        let e = this.inputIndex;
        this.advance();
        let t = this.parsePrefix();
        return new Jr(this.span(e), this.sourceSpan(e), t);
    }
    else if (this.next.isKeywordVoid()) {
        let e = this.inputIndex;
        this.advance();
        let t = this.parsePrefix();
        return new Kr(this.span(e), this.sourceSpan(e), t);
    } return this.parseCallChain(); }
    parseCallChain() { let e = this.inputIndex, t = this.parsePrimary(); for (;;)
        if (this.consumeOptionalCharacter(jn))
            t = this.parseAccessMember(t, e, !1);
        else if (this.consumeOptionalOperator("?."))
            this.consumeOptionalCharacter(Oe) ? t = this.parseCall(t, e, !0) : t = this.consumeOptionalCharacter(Ot) ? this.parseKeyedReadOrWrite(t, e, !0) : this.parseAccessMember(t, e, !0);
        else if (this.consumeOptionalCharacter(Ot))
            t = this.parseKeyedReadOrWrite(t, e, !1);
        else if (this.consumeOptionalCharacter(Oe))
            t = this.parseCall(t, e, !1);
        else if (this.consumeOptionalOperator("!"))
            t = new ei(this.span(e), this.sourceSpan(e), t);
        else if (this.next.isTemplateLiteralEnd())
            t = this.parseNoInterpolationTaggedTemplateLiteral(t, e);
        else if (this.next.isTemplateLiteralPart())
            t = this.parseTaggedTemplateLiteral(t, e);
        else
            return t; }
    parsePrimary() { let e = this.inputIndex; if (this.isArrowFunction())
        return this.parseArrowFunction(e); if (this.consumeOptionalCharacter(Oe)) {
        this.rparensExpected++;
        let t = this.parsePipe();
        return this.consumeOptionalCharacter(ge) || (this.error("Missing closing parentheses"), this.consumeOptionalCharacter(ge)), this.rparensExpected--, new si(this.span(e), this.sourceSpan(e), t);
    }
    else {
        if (this.next.isKeywordNull())
            return this.advance(), new je(this.span(e), this.sourceSpan(e), null);
        if (this.next.isKeywordUndefined())
            return this.advance(), new je(this.span(e), this.sourceSpan(e), void 0);
        if (this.next.isKeywordTrue())
            return this.advance(), new je(this.span(e), this.sourceSpan(e), !0);
        if (this.next.isKeywordFalse())
            return this.advance(), new je(this.span(e), this.sourceSpan(e), !1);
        if (this.next.isKeywordIn())
            return this.advance(), new je(this.span(e), this.sourceSpan(e), "in");
        if (this.next.isKeywordThis())
            return this.advance(), new Gr(this.span(e), this.sourceSpan(e));
        if (this.consumeOptionalCharacter(Ot))
            return this.parseLiteralArray(e);
        if (this.next.isCharacter(pt))
            return this.parseLiteralMap();
        if (this.next.isIdentifier())
            return this.parseAccessMember(new Ut(this.span(e), this.sourceSpan(e)), e, !1);
        if (this.next.isNumber()) {
            let t = this.next.toNumber();
            return this.advance(), new je(this.span(e), this.sourceSpan(e), t);
        }
        else {
            if (this.next.isTemplateLiteralEnd())
                return this.parseNoInterpolationTemplateLiteral();
            if (this.next.isTemplateLiteralPart())
                return this.parseTemplateLiteral();
            if (this.next.isString() && this.next.kind === ss.Plain) {
                let t = this.next.toString();
                return this.advance(), new je(this.span(e), this.sourceSpan(e), t);
            }
            else
                return this.next.isPrivateIdentifier() ? (this._reportErrorForPrivateIdentifier(this.next, null), new De(this.span(e), this.sourceSpan(e))) : this.next.isRegExpBody() ? this.parseRegularExpressionLiteral() : this.index >= this.tokens.length ? (this.error(`Unexpected end of expression: ${this.input}`), new De(this.span(e), this.sourceSpan(e))) : (this.error(`Unexpected token ${this.next}`), new De(this.span(e), this.sourceSpan(e)));
        }
    } }
    parseLiteralArray(e) { this.rbracketsExpected++; let t = []; do
        if (this.next.isOperator("..."))
            t.push(this.parseSpreadElement());
        else if (!this.next.isCharacter(Zt))
            t.push(this.parsePipe());
        else
            break;
    while (this.consumeOptionalCharacter(Pe)); return this.rbracketsExpected--, this.expectCharacter(Zt), new Qr(this.span(e), this.sourceSpan(e), t); }
    parseLiteralMap() { let e = [], t = [], s = this.inputIndex; if (this.expectCharacter(pt), !this.consumeOptionalCharacter(Fe)) {
        this.rbracesExpected++;
        do {
            let r = this.inputIndex;
            if (this.next.isOperator("...")) {
                this.advance(), e.push({ kind: "spread", span: this.span(r), sourceSpan: this.sourceSpan(r) }), t.push(this.parsePipe());
                continue;
            }
            let i = this.next.isString(), a = this.expectIdentifierOrKeywordOrString(), o = this.span(r), l = this.sourceSpan(r), c = { kind: "property", key: a, quoted: i, span: o, sourceSpan: l };
            e.push(c), i ? (this.expectCharacter(Rt), t.push(this.parsePipe())) : this.consumeOptionalCharacter(Rt) ? t.push(this.parsePipe()) : (c.isShorthandInitialized = !0, t.push(new $t(o, l, l, new Ut(o, l), a)));
        } while (this.consumeOptionalCharacter(Pe) && !this.next.isCharacter(Fe));
        this.rbracesExpected--, this.expectCharacter(Fe);
    } return new fs(this.span(s), this.sourceSpan(s), e, t); }
    parseAccessMember(e, t, s) { let r = this.inputIndex, i = this.withContext(_r.Writable, () => { let o = this.expectIdentifierOrKeyword() ?? ""; return o.length === 0 && this.error("Expected identifier for property access", e.span.end), o; }), a = this.sourceSpan(r); if (s)
        return this.isAssignmentOperator(this.next) ? (this.advance(), this.error("The '?.' operator cannot be used in the assignment"), new De(this.span(t), this.sourceSpan(t))) : new Xr(this.span(t), this.sourceSpan(t), a, e, i); if (this.isAssignmentOperator(this.next)) {
        let o = this.next.strValue;
        if (!(this.parseFlags & 1))
            return this.advance(), this.error("Bindings cannot contain assignments"), new De(this.span(t), this.sourceSpan(t));
        let l = new $t(this.span(t), this.sourceSpan(t), a, e, i);
        this.advance();
        let c = this.parseConditional();
        return new Me(this.span(t), this.sourceSpan(t), o, l, c);
    }
    else
        return new $t(this.span(t), this.sourceSpan(t), a, e, i); }
    parseCall(e, t, s) { let r = this.inputIndex; this.rparensExpected++; let i = this.parseCallArguments(), a = this.span(r, this.inputIndex).toAbsolute(this.absoluteOffset); this.expectCharacter(ge), this.rparensExpected--; let o = this.span(t), l = this.sourceSpan(t); return s ? new wa(o, l, e, i, a) : new zs(o, l, e, i, a); }
    parseCallArguments() { if (this.next.isCharacter(ge))
        return []; let e = []; do
        e.push(this.next.isOperator("...") ? this.parseSpreadElement() : this.parsePipe());
    while (this.consumeOptionalCharacter(Pe)); return e; }
    parseSpreadElement() { this.next.isOperator("...") || this.error("Spread element must start with '...' operator"); let e = this.inputIndex; this.advance(); let t = this.parsePipe(), s = this.span(e), r = this.sourceSpan(e); return new va(s, r, t); }
    expectTemplateBindingKey() { let e = "", t = !1, s = this.currentAbsoluteOffset; do
        e += this.expectIdentifierOrKeywordOrString(), t = this.consumeOptionalOperator("-"), t && (e += "-");
    while (t); return { source: e, span: new nt(s, s + e.length) }; }
    parseTemplateBindings(e) { let t = []; for (t.push(...this.parseDirectiveKeywordBindings(e)); this.index < this.tokens.length;) {
        let s = this.parseLetBinding();
        if (s)
            t.push(s);
        else {
            let r = this.expectTemplateBindingKey(), i = this.parseAsBinding(r);
            i ? t.push(i) : (r.source = e.source + r.source.charAt(0).toUpperCase() + r.source.substring(1), t.push(...this.parseDirectiveKeywordBindings(r)));
        }
        this.consumeStatementTerminator();
    } return new tc(t, [], this.errors); }
    parseKeyedReadOrWrite(e, t, s) { return this.withContext(_r.Writable, () => { this.rbracketsExpected++; let r = this.parsePipe(); if (r instanceof De && this.error("Key access cannot be empty"), this.rbracketsExpected--, this.expectCharacter(Zt), this.isAssignmentOperator(this.next)) {
        let i = this.next.strValue;
        if (s)
            this.advance(), this.error("The '?.' operator cannot be used in the assignment");
        else {
            let a = new ps(this.span(t), this.sourceSpan(t), e, r);
            this.advance();
            let o = this.parseConditional();
            return new Me(this.span(t), this.sourceSpan(t), i, a, o);
        }
    }
    else
        return s ? new Yr(this.span(t), this.sourceSpan(t), e, r) : new ps(this.span(t), this.sourceSpan(t), e, r); return new De(this.span(t), this.sourceSpan(t)); }); }
    parseDirectiveKeywordBindings(e) { let t = []; this.consumeOptionalCharacter(Rt); let s = this.getDirectiveBoundTarget(), r = this.currentAbsoluteOffset, i = this.parseAsBinding(e); i || (this.consumeStatementTerminator(), r = this.currentAbsoluteOffset); let a = new nt(e.span.start, r); return t.push(new pl(a, e, s)), i && t.push(i), t; }
    getDirectiveBoundTarget() { if (this.next === vr || this.peekKeywordAs() || this.peekKeywordLet())
        return null; let e = this.parsePipe(), { start: t, end: s } = e.span, r = this.input.substring(t, s); return new Ge(e, r, gn(this.parseSourceSpan), this.absoluteOffset + t, this.errors); }
    parseAsBinding(e) { if (!this.peekKeywordAs())
        return null; this.advance(); let t = this.expectTemplateBindingKey(); this.consumeStatementTerminator(); let s = new nt(e.span.start, this.currentAbsoluteOffset); return new ri(s, t, e); }
    parseLetBinding() { if (!this.peekKeywordLet())
        return null; let e = this.currentAbsoluteOffset; this.advance(); let t = this.expectTemplateBindingKey(), s = null; this.consumeOptionalOperator("=") && (s = this.expectTemplateBindingKey()), this.consumeStatementTerminator(); let r = new nt(e, this.currentAbsoluteOffset); return new ri(r, t, s); }
    parseNoInterpolationTaggedTemplateLiteral(e, t) { let s = this.parseNoInterpolationTemplateLiteral(); return new ti(this.span(t), this.sourceSpan(t), e, s); }
    parseNoInterpolationTemplateLiteral() { let e = this.next.strValue, t = this.inputIndex; this.advance(); let s = this.span(t), r = this.sourceSpan(t); return new ni(s, r, [new Ea(s, r, e)], []); }
    parseTaggedTemplateLiteral(e, t) { let s = this.parseTemplateLiteral(); return new ti(this.span(t), this.sourceSpan(t), e, s); }
    parseTemplateLiteral() { let e = [], t = [], s = this.inputIndex; for (; this.next !== vr;) {
        let r = this.next;
        if (r.isTemplateLiteralPart() || r.isTemplateLiteralEnd()) {
            let i = this.inputIndex;
            if (this.advance(), e.push(new Ea(this.span(i), this.sourceSpan(i), r.strValue)), r.isTemplateLiteralEnd())
                break;
        }
        else if (r.isTemplateLiteralInterpolationStart()) {
            this.advance(), this.rbracesExpected++;
            let i = this.parsePipe();
            i instanceof De ? this.error("Template literal interpolation cannot be empty") : t.push(i), this.rbracesExpected--;
        }
        else
            this.advance();
    } return new ni(this.span(s), this.sourceSpan(s), e, t); }
    parseRegularExpressionLiteral() { let e = this.next; if (this.advance(), !e.isRegExpBody())
        return new De(this.span(this.inputIndex), this.sourceSpan(this.inputIndex)); let t = null; if (this.next.isRegExpFlags()) {
        t = this.next, this.advance();
        let i = new Set;
        for (let a = 0; a < t.strValue.length; a++) {
            let o = t.strValue[a];
            Sh.has(o) ? i.has(o) ? this.error(`Duplicate regular expression flag "${o}"`, t.index + a) : i.add(o) : this.error(`Unsupported regular expression flag "${o}". The supported flags are: ` + Array.from(Sh, l => `"${l}"`).join(", "), t.index + a);
        }
    } let s = e.index, r = t ? t.end : e.end; return new xa(this.span(s, r), this.sourceSpan(s, r), e.strValue, t ? t.strValue : null); }
    parseArrowFunction(e) { let t; if (this.next.isIdentifier()) {
        let r = this.next;
        this.advance(), t = [this.getArrowFunctionIdentifierArg(r)];
    }
    else
        this.next.isCharacter(Oe) ? (this.rparensExpected++, this.advance(), t = this.parseArrowFunctionParameters(), this.rparensExpected--) : (t = [], this.error(`Unexpected token ${this.next}`)); this.expectOperator("=>"); let s; if (this.next.isCharacter(pt))
        this.error("Multi-line arrow functions are not supported. If you meant to return an object literal, wrap it with parentheses."), s = new De(this.span(e), this.sourceSpan(e));
    else {
        let r = this.parseFlags;
        this.parseFlags = 1, s = this.parseExpression(), this.parseFlags = r;
    } return new Sa(this.span(e), this.sourceSpan(e), t, s); }
    parseArrowFunctionParameters() { let e = []; if (!this.consumeOptionalCharacter(ge))
        for (; this.next !== vr;)
            if (this.next.isIdentifier()) {
                let t = this.next;
                if (this.advance(), e.push(this.getArrowFunctionIdentifierArg(t)), this.consumeOptionalCharacter(ge))
                    break;
                this.expectCharacter(Pe);
            }
            else {
                this.error(`Unexpected token ${this.next}`);
                break;
            } return e; }
    getArrowFunctionIdentifierArg(e) { return new hl(e.strValue, this.span(e.index), this.sourceSpan(e.index)); }
    isArrowFunction() { let e = this.index, t = this.tokens; if (e > t.length - 2)
        return !1; if (t[e].isIdentifier() && t[e + 1].isOperator("=>"))
        return !0; if (t[e].isCharacter(Oe)) {
        let s = e + 1;
        for (s; s < t.length && !(!t[s].isIdentifier() && !t[s].isCharacter(Pe)); s++)
            ;
        return s < t.length - 1 && t[s].isCharacter(ge) && t[s + 1].isOperator("=>");
    } return !1; }
    consumeStatementTerminator() { this.consumeOptionalCharacter(ze) || this.consumeOptionalCharacter(Pe); }
    error(e, t = this.index) { this.errors.push(Rs(e, this.input, this.getErrorLocationText(t), this.parseSourceSpan)), this.skip(); }
    getErrorLocationText(e) { return e < this.tokens.length ? `at column ${this.tokens[e].index + 1} in` : "at the end of the expression"; }
    _reportErrorForPrivateIdentifier(e, t) { let s = `Private identifiers are not supported. Unexpected private identifier: ${e}`; t !== null && (s += `, ${t}`), this.error(s); }
    skip() { let e = this.next; for (; this.index < this.tokens.length && !e.isCharacter(ze) && !e.isOperator("|") && (this.rparensExpected <= 0 || !e.isCharacter(ge)) && (this.rbracesExpected <= 0 || !e.isCharacter(Fe)) && (this.rbracketsExpected <= 0 || !e.isCharacter(Zt)) && (!(this.context & _r.Writable) || !this.isAssignmentOperator(e));)
        this.next.isError() && this.errors.push(Rs(this.next.toString(), this.input, this.getErrorLocationText(this.next.index), this.parseSourceSpan)), this.advance(), e = this.next; }
};
function Rs(n, e, t, s) { t.length > 0 && (t = ` ${t} `); let r = gn(s), i = `Parser Error: ${n}${t}[${e}] in ${r}`; return new I(s, i); }
var nc = class extends Gs {
    errors = [];
    visitPipe() { this.errors.push("pipes"); }
};
function sE(n) { let e = new Map, t = 0, s = 0, r = 0; for (; r < n.length;) {
    let i = n[r];
    if (i.type === 9) {
        let [a, o] = i.parts;
        t += o.length, s += a.length;
    }
    else {
        let a = i.parts.reduce((o, l) => o + l.length, 0);
        s += a, t += a;
    }
    e.set(s, t), r++;
} return e; }
function rE(n) { return n.visit(new sc); }
var sc = class {
    visitUnary(e, t) { return `${e.operator}${e.expr.visit(this, t)}`; }
    visitBinary(e, t) { return `${e.left.visit(this, t)} ${e.operation} ${e.right.visit(this, t)}`; }
    visitChain(e, t) { return e.expressions.map(s => s.visit(this, t)).join("; "); }
    visitConditional(e, t) { return `${e.condition.visit(this, t)} ? ${e.trueExp.visit(this, t)} : ${e.falseExp.visit(this, t)}`; }
    visitThisReceiver() { return "this"; }
    visitImplicitReceiver() { return ""; }
    visitInterpolation(e, t) { return aE(e.strings, e.expressions.map(s => s.visit(this, t))).join(""); }
    visitKeyedRead(e, t) { return `${e.receiver.visit(this, t)}[${e.key.visit(this, t)}]`; }
    visitLiteralArray(e, t) { return `[${e.expressions.map(s => s.visit(this, t)).join(", ")}]`; }
    visitLiteralMap(e, t) { return `{${iE(e.keys.map(s => s.kind === "spread" ? "..." : s.quoted ? `'${s.key}'` : s.key), e.values.map(s => s.visit(this, t))).map(([s, r]) => `${s}: ${r}`).join(", ")}}`; }
    visitLiteralPrimitive(e) { if (e.value === null)
        return "null"; switch (typeof e.value) {
        case "number":
        case "boolean": return e.value.toString();
        case "undefined": return "undefined";
        case "string": return `'${e.value.replace(/'/g, "\\'")}'`;
        default: throw new Error(`Unsupported primitive type: ${e.value}`);
    } }
    visitPipe(e, t) { return `${e.exp.visit(this, t)} | ${e.name}`; }
    visitPrefixNot(e, t) { return `!${e.expression.visit(this, t)}`; }
    visitNonNullAssert(e, t) { return `${e.expression.visit(this, t)}!`; }
    visitPropertyRead(e, t) { return e.receiver instanceof Ut || e.receiver instanceof Gr ? e.name : `${e.receiver.visit(this, t)}.${e.name}`; }
    visitSafePropertyRead(e, t) { return `${e.receiver.visit(this, t)}?.${e.name}`; }
    visitSafeKeyedRead(e, t) { return `${e.receiver.visit(this, t)}?.[${e.key.visit(this, t)}]`; }
    visitCall(e, t) { return `${e.receiver.visit(this, t)}(${e.args.map(s => s.visit(this, t)).join(", ")})`; }
    visitSafeCall(e, t) { return `${e.receiver.visit(this, t)}?.(${e.args.map(s => s.visit(this, t)).join(", ")})`; }
    visitTypeofExpression(e, t) { return `typeof ${e.expression.visit(this, t)}`; }
    visitVoidExpression(e, t) { return `void ${e.expression.visit(this, t)}`; }
    visitRegularExpressionLiteral(e, t) { return `/${e.body}/${e.flags || ""}`; }
    visitArrowFunction(e, t) { let s; return e.parameters.length === 1 ? s = e.parameters[0].name : s = `(${e.parameters.map(r => r.name).join(", ")})`, `${s} => ${e.body.visit(this, t)}`; }
    visitASTWithSource(e, t) { return e.ast.visit(this, t); }
    visitTemplateLiteral(e, t) { let s = ""; for (let r = 0; r < e.elements.length; r++) {
        s += e.elements[r].visit(this, t);
        let i = r < e.expressions.length ? e.expressions[r] : null;
        i !== null && (s += "${" + i.visit(this, t) + "}");
    } return "`" + s + "`"; }
    visitTemplateLiteralElement(e, t) { return e.text; }
    visitTaggedTemplateLiteral(e, t) { return e.tag.visit(this, t) + e.template.visit(this, t); }
    visitSpreadElement(e, t) { return `...${e.expression.visit(this, t)}`; }
    visitParenthesizedExpression(e, t) { return "(" + e.expression.visit(this, t) + ")"; }
};
function iE(n, e) { if (n.length !== e.length)
    throw new Error("Array lengths must match"); return n.map((t, s) => [t, e[s]]); }
function aE(n, e) { let t = []; for (let s = 0; s < Math.max(n.length, e.length); s++)
    s < n.length && t.push(n[s]), s < e.length && t.push(e[s]); return t; }
var Co = "svg", Ao = "math", rc = class {
}, oE = "boolean", lE = "number", cE = "string", uE = "object";
function wr(n) { let e = n.toLowerCase(), [t, s] = Le(e, !1); return t === Co || t === Ao ? `:${t}:${s}` : s; }
var hE = ["[Element]|textContent,%ariaActiveDescendantElement,%ariaAtomic,%ariaAutoComplete,%ariaBusy,%ariaChecked,%ariaColCount,%ariaColIndex,%ariaColIndexText,%ariaColSpan,%ariaControlsElements,%ariaCurrent,%ariaDescribedByElements,%ariaDescription,%ariaDetailsElements,%ariaDisabled,%ariaErrorMessageElements,%ariaExpanded,%ariaFlowToElements,%ariaHasPopup,%ariaHidden,%ariaInvalid,%ariaKeyShortcuts,%ariaLabel,%ariaLabelledByElements,%ariaLevel,%ariaLive,%ariaModal,%ariaMultiLine,%ariaMultiSelectable,%ariaOrientation,%ariaOwnsElements,%ariaPlaceholder,%ariaPosInSet,%ariaPressed,%ariaReadOnly,%ariaRelevant,%ariaRequired,%ariaRoleDescription,%ariaRowCount,%ariaRowIndex,%ariaRowIndexText,%ariaRowSpan,%ariaSelected,%ariaSetSize,%ariaSort,%ariaValueMax,%ariaValueMin,%ariaValueNow,%ariaValueText,%classList,className,elementTiming,id,innerHTML,*beforecopy,*beforecut,*beforepaste,*fullscreenchange,*fullscreenerror,*search,*webkitfullscreenchange,*webkitfullscreenerror,outerHTML,%part,#scrollLeft,#scrollTop,slot,*message,*mozfullscreenchange,*mozfullscreenerror,*mozpointerlockchange,*mozpointerlockerror,*webglcontextcreationerror,*webglcontextlost,*webglcontextrestored", "[HTMLElement]^[Element]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,!inert,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy", "abbr,address,article,aside,b,bdi,bdo,cite,content,code,dd,dfn,dt,em,figcaption,figure,footer,header,hgroup,i,kbd,main,mark,nav,noscript,rb,rp,rt,rtc,ruby,s,samp,search,section,small,strong,sub,sup,u,var,wbr^[HTMLElement]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy", "media^[HTMLElement]|!autoplay,!controls,%controlsList,%crossOrigin,#currentTime,!defaultMuted,#defaultPlaybackRate,!disableRemotePlayback,!loop,!muted,*encrypted,*waitingforkey,#playbackRate,preload,!preservesPitch,src,%srcObject,#volume", ":svg:^[HTMLElement]|!autofocus,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,%style,#tabIndex", ":svg:graphics^:svg:|", ":svg:animation^:svg:|*begin,*end,*repeat", ":svg:geometry^:svg:|", ":svg:componentTransferFunction^:svg:|", ":svg:gradient^:svg:|", ":svg:textContent^:svg:graphics|", ":svg:textPositioning^:svg:textContent|", "a^[HTMLElement]|charset,coords,download,hash,host,hostname,href,hreflang,name,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,rev,search,shape,target,text,type,username", "area^[HTMLElement]|alt,coords,download,hash,host,hostname,href,!noHref,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,search,shape,target,username", "audio^media|", "br^[HTMLElement]|clear", "base^[HTMLElement]|href,target", "body^[HTMLElement]|aLink,background,bgColor,link,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,text,vLink", "button^[HTMLElement]|!disabled,formAction,formEnctype,formMethod,!formNoValidate,formTarget,name,type,value", "canvas^[HTMLElement]|#height,#width", "content^[HTMLElement]|select", "dl^[HTMLElement]|!compact", "data^[HTMLElement]|value", "datalist^[HTMLElement]|", "details^[HTMLElement]|!open", "dialog^[HTMLElement]|!open,returnValue", "dir^[HTMLElement]|!compact", "div^[HTMLElement]|align", "embed^[HTMLElement]|align,height,name,src,type,width", "fieldset^[HTMLElement]|!disabled,name", "font^[HTMLElement]|color,face,size", "form^[HTMLElement]|acceptCharset,action,autocomplete,encoding,enctype,method,name,!noValidate,target", "frame^[HTMLElement]|frameBorder,longDesc,marginHeight,marginWidth,name,!noResize,scrolling,src", "frameset^[HTMLElement]|cols,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,rows", "geolocation^[HTMLElement]|accuracymode,!autolocate,*location,*promptaction,*promptdismiss,*validationstatuschange,!watch", "hr^[HTMLElement]|align,color,!noShade,size,width", "head^[HTMLElement]|", "h1,h2,h3,h4,h5,h6^[HTMLElement]|align", "html^[HTMLElement]|version", "iframe^[HTMLElement]|align,allow,!allowFullscreen,!allowPaymentRequest,csp,frameBorder,height,loading,longDesc,marginHeight,marginWidth,name,referrerPolicy,%sandbox,scrolling,src,srcdoc,width", "img^[HTMLElement]|align,alt,border,%crossOrigin,decoding,#height,#hspace,!isMap,loading,longDesc,lowsrc,name,referrerPolicy,sizes,src,srcset,useMap,#vspace,#width", "input^[HTMLElement]|accept,align,alt,autocomplete,!checked,!defaultChecked,defaultValue,dirName,!disabled,%files,formAction,formEnctype,formMethod,!formNoValidate,formTarget,#height,!incremental,!indeterminate,max,#maxLength,min,#minLength,!multiple,name,pattern,placeholder,!readOnly,!required,selectionDirection,#selectionEnd,#selectionStart,#size,src,step,type,useMap,value,%valueAsDate,#valueAsNumber,#width", "li^[HTMLElement]|type,#value", "label^[HTMLElement]|htmlFor", "legend^[HTMLElement]|align", "link^[HTMLElement]|as,charset,%crossOrigin,!disabled,href,hreflang,imageSizes,imageSrcset,integrity,media,referrerPolicy,rel,%relList,rev,%sizes,target,type", "map^[HTMLElement]|name", "marquee^[HTMLElement]|behavior,bgColor,direction,height,#hspace,#loop,#scrollAmount,#scrollDelay,!trueSpeed,#vspace,width", "menu^[HTMLElement]|!compact", "meta^[HTMLElement]|content,httpEquiv,media,name,scheme", "meter^[HTMLElement]|#high,#low,#max,#min,#optimum,#value", "ins,del^[HTMLElement]|cite,dateTime", "ol^[HTMLElement]|!compact,!reversed,#start,type", "object^[HTMLElement]|align,archive,border,code,codeBase,codeType,data,!declare,height,#hspace,name,standby,type,useMap,#vspace,width", "optgroup^[HTMLElement]|!disabled,label", "option^[HTMLElement]|!defaultSelected,!disabled,label,!selected,text,value", "output^[HTMLElement]|defaultValue,%htmlFor,name,value", "p^[HTMLElement]|align", "param^[HTMLElement]|name,type,value,valueType", "picture^[HTMLElement]|", "pre^[HTMLElement]|#width", "progress^[HTMLElement]|#max,#value", "q,blockquote,cite^[HTMLElement]|", "script^[HTMLElement]|!async,charset,%crossOrigin,!defer,event,htmlFor,integrity,!noModule,%referrerPolicy,src,text,type", "select^[HTMLElement]|autocomplete,!disabled,#length,!multiple,name,!required,#selectedIndex,#size,value", "selectedcontent^[HTMLElement]|", "slot^[HTMLElement]|name", "source^[HTMLElement]|#height,media,sizes,src,srcset,type,#width", "span^[HTMLElement]|", "style^[HTMLElement]|!disabled,media,type", "search^[HTMLELement]|", "caption^[HTMLElement]|align", "th,td^[HTMLElement]|abbr,align,axis,bgColor,ch,chOff,#colSpan,headers,height,!noWrap,#rowSpan,scope,vAlign,width", "col,colgroup^[HTMLElement]|align,ch,chOff,#span,vAlign,width", "table^[HTMLElement]|align,bgColor,border,%caption,cellPadding,cellSpacing,frame,rules,summary,%tFoot,%tHead,width", "tr^[HTMLElement]|align,bgColor,ch,chOff,vAlign", "tfoot,thead,tbody^[HTMLElement]|align,ch,chOff,vAlign", "template^[HTMLElement]|", "textarea^[HTMLElement]|autocomplete,#cols,defaultValue,dirName,!disabled,#maxLength,#minLength,name,placeholder,!readOnly,!required,#rows,selectionDirection,#selectionEnd,#selectionStart,value,wrap", "time^[HTMLElement]|dateTime", "title^[HTMLElement]|text", "track^[HTMLElement]|!default,kind,label,src,srclang", "ul^[HTMLElement]|!compact,type", "unknown^[HTMLElement]|", "video^media|!disablePictureInPicture,#height,*enterpictureinpicture,*leavepictureinpicture,!playsInline,poster,#width", ":svg:a^:svg:graphics|", ":svg:animate^:svg:animation|", ":svg:animateMotion^:svg:animation|", ":svg:animateTransform^:svg:animation|", ":svg:circle^:svg:geometry|", ":svg:clipPath^:svg:graphics|", ":svg:defs^:svg:graphics|", ":svg:desc^:svg:|", ":svg:discard^:svg:|", ":svg:ellipse^:svg:geometry|", ":svg:feBlend^:svg:|", ":svg:feColorMatrix^:svg:|", ":svg:feComponentTransfer^:svg:|", ":svg:feComposite^:svg:|", ":svg:feConvolveMatrix^:svg:|", ":svg:feDiffuseLighting^:svg:|", ":svg:feDisplacementMap^:svg:|", ":svg:feDistantLight^:svg:|", ":svg:feDropShadow^:svg:|", ":svg:feFlood^:svg:|", ":svg:feFuncA^:svg:componentTransferFunction|", ":svg:feFuncB^:svg:componentTransferFunction|", ":svg:feFuncG^:svg:componentTransferFunction|", ":svg:feFuncR^:svg:componentTransferFunction|", ":svg:feGaussianBlur^:svg:|", ":svg:feImage^:svg:|", ":svg:feMerge^:svg:|", ":svg:feMergeNode^:svg:|", ":svg:feMorphology^:svg:|", ":svg:feOffset^:svg:|", ":svg:fePointLight^:svg:|", ":svg:feSpecularLighting^:svg:|", ":svg:feSpotLight^:svg:|", ":svg:feTile^:svg:|", ":svg:feTurbulence^:svg:|", ":svg:filter^:svg:|", ":svg:foreignObject^:svg:graphics|", ":svg:g^:svg:graphics|", ":svg:image^:svg:graphics|decoding", ":svg:line^:svg:geometry|", ":svg:linearGradient^:svg:gradient|", ":svg:mpath^:svg:|", ":svg:marker^:svg:|", ":svg:mask^:svg:|", ":svg:metadata^:svg:|", ":svg:path^:svg:geometry|", ":svg:pattern^:svg:|", ":svg:polygon^:svg:geometry|", ":svg:polyline^:svg:geometry|", ":svg:radialGradient^:svg:gradient|", ":svg:rect^:svg:geometry|", ":svg:svg^:svg:graphics|#currentScale,#zoomAndPan", ":svg:script^:svg:|type", ":svg:set^:svg:animation|", ":svg:stop^:svg:|", ":svg:style^:svg:|!disabled,media,title,type", ":svg:switch^:svg:graphics|", ":svg:symbol^:svg:|", ":svg:tspan^:svg:textPositioning|", ":svg:text^:svg:textPositioning|", ":svg:textPath^:svg:textContent|", ":svg:title^:svg:|", ":svg:use^:svg:graphics|", ":svg:view^:svg:|#zoomAndPan", "data^[HTMLElement]|value", "keygen^[HTMLElement]|!autofocus,challenge,!disabled,form,keytype,name", "menuitem^[HTMLElement]|type,label,icon,!disabled,!checked,radiogroup,!default", "summary^[HTMLElement]|", "time^[HTMLElement]|dateTime", ":svg:cursor^:svg:|", ":math:^[HTMLElement]|!autofocus,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforeinput,*beforematch,*beforetoggle,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contentvisibilityautostatechange,*contextlost,*contextmenu,*contextrestored,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*scrollend,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,%style,#tabIndex", ":math:math^:math:|", ":math:maction^:math:|", ":math:menclose^:math:|", ":math:merror^:math:|", ":math:mfenced^:math:|", ":math:mfrac^:math:|", ":math:mi^:math:|", ":math:mmultiscripts^:math:|", ":math:mn^:math:|", ":math:mo^:math:|", ":math:mover^:math:|", ":math:mpadded^:math:|", ":math:mphantom^:math:|", ":math:mroot^:math:|", ":math:mrow^:math:|", ":math:ms^:math:|", ":math:mspace^:math:|", ":math:msqrt^:math:|", ":math:mstyle^:math:|", ":math:msub^:math:|", ":math:msubsup^:math:|", ":math:msup^:math:|", ":math:mtable^:math:|", ":math:mtd^:math:|", ":math:mtext^:math:|", ":math:mtr^:math:|", ":math:munder^:math:|", ":math:munderover^:math:|", ":math:semantics^:math:|"], Vf = new Map(Object.entries({ class: "className", for: "htmlFor", formaction: "formAction", innerHtml: "innerHTML", readonly: "readOnly", tabindex: "tabIndex", "aria-activedescendant": "ariaActiveDescendantElement", "aria-atomic": "ariaAtomic", "aria-autocomplete": "ariaAutoComplete", "aria-busy": "ariaBusy", "aria-checked": "ariaChecked", "aria-colcount": "ariaColCount", "aria-colindex": "ariaColIndex", "aria-colindextext": "ariaColIndexText", "aria-colspan": "ariaColSpan", "aria-controls": "ariaControlsElements", "aria-current": "ariaCurrent", "aria-describedby": "ariaDescribedByElements", "aria-description": "ariaDescription", "aria-details": "ariaDetailsElements", "aria-disabled": "ariaDisabled", "aria-errormessage": "ariaErrorMessageElements", "aria-expanded": "ariaExpanded", "aria-flowto": "ariaFlowToElements", "aria-haspopup": "ariaHasPopup", "aria-hidden": "ariaHidden", "aria-invalid": "ariaInvalid", "aria-keyshortcuts": "ariaKeyShortcuts", "aria-label": "ariaLabel", "aria-labelledby": "ariaLabelledByElements", "aria-level": "ariaLevel", "aria-live": "ariaLive", "aria-modal": "ariaModal", "aria-multiline": "ariaMultiLine", "aria-multiselectable": "ariaMultiSelectable", "aria-orientation": "ariaOrientation", "aria-owns": "ariaOwnsElements", "aria-placeholder": "ariaPlaceholder", "aria-posinset": "ariaPosInSet", "aria-pressed": "ariaPressed", "aria-readonly": "ariaReadOnly", "aria-required": "ariaRequired", "aria-roledescription": "ariaRoleDescription", "aria-rowcount": "ariaRowCount", "aria-rowindex": "ariaRowIndex", "aria-rowindextext": "ariaRowIndexText", "aria-rowspan": "ariaRowSpan", "aria-selected": "ariaSelected", "aria-setsize": "ariaSetSize", "aria-sort": "ariaSort", "aria-valuemax": "ariaValueMax", "aria-valuemin": "ariaValueMin", "aria-valuenow": "ariaValueNow", "aria-valuetext": "ariaValueText" })), pE = Array.from(Vf).reduce((n, [e, t]) => (n.set(e, t), n), new Map), rr = class extends rc {
    _schema = new Map;
    _eventSchema = new Map;
    constructor() { super(), hE.forEach(e => { let t = new Map, s = new Set, [r, i] = e.split("|"), a = i.split(","), [o, l] = r.split("^"); o.split(",").forEach(h => { this._schema.set(h.toLowerCase(), t), this._eventSchema.set(h.toLowerCase(), s); }); let c = l && this._schema.get(l.toLowerCase()); if (c) {
        for (let [h, p] of c)
            t.set(h, p);
        for (let h of this._eventSchema.get(l.toLowerCase()))
            s.add(h);
    } a.forEach(h => { if (h.length > 0)
        switch (h[0]) {
            case "*":
                s.add(h.substring(1));
                break;
            case "!":
                t.set(h.substring(1), oE);
                break;
            case "#":
                t.set(h.substring(1), lE);
                break;
            case "%":
                t.set(h.substring(1), uE);
                break;
            default: t.set(h, cE);
        } }); }); }
    hasProperty(e, t, s) { if (s.some(a => a.name === Jo.name))
        return !0; let r = wr(e); if (r.includes("-")) {
        if (Pu(r) || dl(r))
            return !1;
        if (s.some(a => a.name === Zo.name))
            return !0;
    } return (this._schema.get(r) || this._schema.get("unknown")).has(t); }
    hasElement(e, t) { if (t.some(r => r.name === Jo.name))
        return !0; let s = wr(e); return s.includes("-") && (Pu(s) || dl(s) || t.some(r => r.name === Zo.name)) ? !0 : this._schema.has(s); }
    securityContext(e, t, s) { s && (t = this.getMappedPropName(t)); let r = wr(e); t = t.toLowerCase(); let i = Bd(); return i[r + "|" + t] ?? i["*|" + t] ?? j.NONE; }
    getMappedPropName(e) { return Vf.get(e) ?? e; }
    getDefaultComponentElementName() { return "ng-component"; }
    validateProperty(e) {
        return e.toLowerCase().startsWith("on") ? { error: !0, msg: `Binding to event property '${e}' is disallowed for security reasons, please use (${e.slice(2)})=...
If '${e}' is a directive input, make sure the directive is imported by the current module.` } : { error: !1 };
    }
    validateAttribute(e) { return e.toLowerCase().startsWith("on") ? { error: !0, msg: `Binding to event attribute '${e}' is disallowed for security reasons, please use (${e.slice(2)})=...` } : { error: !1 }; }
    allKnownElementNames() { return Array.from(this._schema.keys()); }
    allKnownAttributesOfElement(e) { let t = wr(e), s = this._schema.get(t) || this._schema.get("unknown"); return Array.from(s.keys()).map(r => pE.get(r) ?? r); }
    allKnownEventsOfElement(e) { let t = wr(e); return Array.from(this._eventSchema.get(t) ?? []); }
    normalizeAnimationStyleProperty(e) { return um(e); }
    normalizeAnimationStyleValue(e, t, s) { let r = "", i = s.toString().trim(), a = null; if (fE(e) && s !== 0 && s !== "0")
        if (typeof s == "number")
            r = "px";
        else {
            let o = s.match(/^[+-]?[\d\.]+([a-z]*)$/);
            o && o[1].length == 0 && (a = `Please provide a CSS unit value for ${t}:${s}`);
        } return { error: a, value: i + r }; }
};
function fE(n) { switch (n) {
    case "width":
    case "height":
    case "minWidth":
    case "minHeight":
    case "maxWidth":
    case "maxHeight":
    case "left":
    case "top":
    case "bottom":
    case "right":
    case "fontSize":
    case "outlineWidth":
    case "outlineOffset":
    case "paddingTop":
    case "paddingLeft":
    case "paddingBottom":
    case "paddingRight":
    case "marginTop":
    case "marginLeft":
    case "marginBottom":
    case "marginRight":
    case "borderRadius":
    case "borderWidth":
    case "borderTopWidth":
    case "borderLeftWidth":
    case "borderRightWidth":
    case "borderBottomWidth":
    case "textIndent": return !0;
    default: return !1;
} }
var H = class {
    closedByChildren = {};
    contentType;
    closedByParent = !1;
    implicitNamespacePrefix;
    isVoid;
    ignoreFirstLf;
    canSelfClose;
    preventNamespaceInheritance;
    constructor({ closedByChildren: e, implicitNamespacePrefix: t, contentType: s = Bt.PARSABLE_DATA, closedByParent: r = !1, isVoid: i = !1, ignoreFirstLf: a = !1, preventNamespaceInheritance: o = !1, canSelfClose: l = !1 } = {}) { e && e.length > 0 && e.forEach(c => this.closedByChildren[c] = !0), this.isVoid = i, this.closedByParent = r || i, this.implicitNamespacePrefix = t || null, this.contentType = s, this.ignoreFirstLf = a, this.preventNamespaceInheritance = o, this.canSelfClose = l ?? i; }
    isClosedByChild(e) { return this.isVoid || e.toLowerCase() in this.closedByChildren; }
    getContentType(e) { return typeof this.contentType == "object" ? (e === void 0 ? void 0 : this.contentType[e]) ?? this.contentType.default : this.contentType; }
}, xh, bs;
function ic(n) { return bs || (xh = new H({ canSelfClose: !0 }), bs = Object.assign(Object.create(null), { base: new H({ isVoid: !0 }), meta: new H({ isVoid: !0 }), area: new H({ isVoid: !0 }), embed: new H({ isVoid: !0 }), link: new H({ isVoid: !0 }), img: new H({ isVoid: !0 }), input: new H({ isVoid: !0 }), param: new H({ isVoid: !0 }), hr: new H({ isVoid: !0 }), br: new H({ isVoid: !0 }), source: new H({ isVoid: !0 }), track: new H({ isVoid: !0 }), wbr: new H({ isVoid: !0 }), p: new H({ closedByChildren: ["address", "article", "aside", "blockquote", "div", "dl", "fieldset", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "main", "nav", "ol", "p", "pre", "section", "table", "ul"], closedByParent: !0 }), thead: new H({ closedByChildren: ["tbody", "tfoot"] }), tbody: new H({ closedByChildren: ["tbody", "tfoot"], closedByParent: !0 }), tfoot: new H({ closedByChildren: ["tbody"], closedByParent: !0 }), tr: new H({ closedByChildren: ["tr"], closedByParent: !0 }), td: new H({ closedByChildren: ["td", "th"], closedByParent: !0 }), th: new H({ closedByChildren: ["td", "th"], closedByParent: !0 }), col: new H({ isVoid: !0 }), svg: new H({ implicitNamespacePrefix: "svg" }), foreignObject: new H({ implicitNamespacePrefix: "svg", preventNamespaceInheritance: !0 }), math: new H({ implicitNamespacePrefix: "math" }), li: new H({ closedByChildren: ["li"], closedByParent: !0 }), dt: new H({ closedByChildren: ["dt", "dd"] }), dd: new H({ closedByChildren: ["dt", "dd"], closedByParent: !0 }), rb: new H({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: !0 }), rt: new H({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: !0 }), rtc: new H({ closedByChildren: ["rb", "rtc", "rp"], closedByParent: !0 }), rp: new H({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: !0 }), optgroup: new H({ closedByChildren: ["optgroup"], closedByParent: !0 }), option: new H({ closedByChildren: ["option", "optgroup"], closedByParent: !0 }), pre: new H({ ignoreFirstLf: !0 }), listing: new H({ ignoreFirstLf: !0 }), style: new H({ contentType: Bt.RAW_TEXT }), script: new H({ contentType: Bt.RAW_TEXT }), title: new H({ contentType: { default: Bt.ESCAPABLE_RAW_TEXT, svg: Bt.PARSABLE_DATA } }), textarea: new H({ contentType: Bt.ESCAPABLE_RAW_TEXT, ignoreFirstLf: !0 }) }), new rr().allKnownElementNames().forEach(e => { !bs[e] && ml(e) === null && (bs[e] = new H({ canSelfClose: !1 })); })), bs[n] ?? bs[n.toLowerCase()] ?? xh; }
var yh = { A: "LINK", B: "BOLD_TEXT", BR: "LINE_BREAK", EM: "EMPHASISED_TEXT", H1: "HEADING_LEVEL1", H2: "HEADING_LEVEL2", H3: "HEADING_LEVEL3", H4: "HEADING_LEVEL4", H5: "HEADING_LEVEL5", H6: "HEADING_LEVEL6", HR: "HORIZONTAL_RULE", I: "ITALIC_TEXT", LI: "LIST_ITEM", LINK: "MEDIA_LINK", OL: "ORDERED_LIST", P: "PARAGRAPH", Q: "QUOTATION", S: "STRIKETHROUGH_TEXT", SMALL: "SMALL_TEXT", SUB: "SUBSTRIPT", SUP: "SUPERSCRIPT", TBODY: "TABLE_BODY", TD: "TABLE_CELL", TFOOT: "TABLE_FOOTER", TH: "TABLE_HEADER_CELL", THEAD: "TABLE_HEADER", TR: "TABLE_ROW", TT: "MONOSPACED_TEXT", U: "UNDERLINED_TEXT", UL: "UNORDERED_LIST" }, ac = class {
    _placeHolderNameCounts = {};
    _signatureToName = {};
    getStartTagPlaceholderName(e, t, s) { let r = this._hashTag(e, t, s); if (this._signatureToName[r])
        return this._signatureToName[r]; let i = e.toUpperCase(), a = yh[i] || `TAG_${i}`, o = this._generateUniqueName(s ? a : `START_${a}`); return this._signatureToName[r] = o, o; }
    getCloseTagPlaceholderName(e) { let t = this._hashClosingTag(e); if (this._signatureToName[t])
        return this._signatureToName[t]; let s = e.toUpperCase(), r = yh[s] || `TAG_${s}`, i = this._generateUniqueName(`CLOSE_${r}`); return this._signatureToName[t] = i, i; }
    getPlaceholderName(e, t) { let s = e.toUpperCase(), r = `PH: ${s}=${t}`; if (this._signatureToName[r])
        return this._signatureToName[r]; let i = this._generateUniqueName(s); return this._signatureToName[r] = i, i; }
    getUniquePlaceholder(e) { return this._generateUniqueName(e.toUpperCase()); }
    getStartBlockPlaceholderName(e, t) { let s = this._hashBlock(e, t); if (this._signatureToName[s])
        return this._signatureToName[s]; let r = this._generateUniqueName(`START_BLOCK_${this._toSnakeCase(e)}`); return this._signatureToName[s] = r, r; }
    getCloseBlockPlaceholderName(e) { let t = this._hashClosingBlock(e); if (this._signatureToName[t])
        return this._signatureToName[t]; let s = this._generateUniqueName(`CLOSE_BLOCK_${this._toSnakeCase(e)}`); return this._signatureToName[t] = s, s; }
    _hashTag(e, t, s) { let r = `<${e}`, i = Object.keys(t).sort().map(o => ` ${o}=${t[o]}`).join(""), a = s ? "/>" : `></${e}>`; return r + i + a; }
    _hashClosingTag(e) { return this._hashTag(`/${e}`, {}, !1); }
    _hashBlock(e, t) { let s = t.length === 0 ? "" : ` (${t.sort().join("; ")})`; return `@${e}${s} {}`; }
    _hashClosingBlock(e) { return this._hashBlock(`close_${e}`, []); }
    _toSnakeCase(e) { return e.toUpperCase().replace(/[^A-Z0-9]/g, "_"); }
    _generateUniqueName(e) { if (!this._placeHolderNameCounts.hasOwnProperty(e))
        return this._placeHolderNameCounts[e] = 1, e; let s = this._placeHolderNameCounts[e]; return this._placeHolderNameCounts[e] = s + 1, `${e}_${s}`; }
}, dE = new Ja(new Pi);
function qf(n, e) { let t = new oc(dE, n, e); return (s, r, i, a, o) => t.toI18nMessage(s, r, i, a, o); }
function mE(n, e) { return e; }
var oc = class {
    _expressionParser;
    _retainEmptyTokens;
    _preserveExpressionWhitespace;
    constructor(e, t, s) { this._expressionParser = e, this._retainEmptyTokens = t, this._preserveExpressionWhitespace = s; }
    toI18nMessage(e, t = "", s = "", r = "", i) { let a = { isIcu: e.length == 1 && e[0] instanceof Sn, icuDepth: 0, placeholderRegistry: new ac, placeholderToContent: {}, placeholderToMessage: {}, visitNodeFn: i || mE }, o = P(this, e, a); return new Be(o, a.placeholderToContent, a.placeholderToMessage, t, s, r); }
    visitElement(e, t) { return this._visitElementLike(e, t); }
    visitComponent(e, t) { return this._visitElementLike(e, t); }
    visitDirective(e, t) { throw new Error("Unreachable code"); }
    visitAttribute(e, t) { let s = e.valueTokens === void 0 || e.valueTokens.length === 1 ? new Mt(e.value, e.valueSpan || e.sourceSpan) : this._visitTextWithInterpolation(e.valueTokens, e.valueSpan || e.sourceSpan, t, e.i18n); return t.visitNodeFn(e, s); }
    visitText(e, t) { let s = e.tokens.length === 1 ? new Mt(e.value, e.sourceSpan) : this._visitTextWithInterpolation(e.tokens, e.sourceSpan, t, e.i18n); return t.visitNodeFn(e, s); }
    visitComment(e, t) { return null; }
    visitExpansion(e, t) { t.icuDepth++; let s = {}, r = new In(e.switchValue, e.type, s, e.sourceSpan); if (e.cases.forEach(o => { s[o.value] = new it(o.expression.map(l => l.visit(this, t)), o.expSourceSpan); }), t.icuDepth--, t.isIcu || t.icuDepth > 0) {
        let o = t.placeholderRegistry.getUniquePlaceholder(`VAR_${e.type}`);
        return r.expressionPlaceholder = o, t.placeholderToContent[o] = { text: e.switchValue, sourceSpan: e.switchValueSourceSpan }, t.visitNodeFn(e, r);
    } let i = t.placeholderRegistry.getPlaceholderName("ICU", e.sourceSpan.toString()); t.placeholderToMessage[i] = this.toI18nMessage([e], "", "", "", void 0); let a = new Nn(r, i, e.sourceSpan); return t.visitNodeFn(e, a); }
    visitExpansionCase(e, t) { throw new Error("Unreachable code"); }
    visitBlock(e, t) { let s = P(this, e.children, t); if (e.name === "switch")
        return new it(s, e.sourceSpan); let r = e.parameters.map(l => l.expression), i = t.placeholderRegistry.getStartBlockPlaceholderName(e.name, r), a = t.placeholderRegistry.getCloseBlockPlaceholderName(e.name); t.placeholderToContent[i] = { text: e.startSourceSpan.toString(), sourceSpan: e.startSourceSpan }, t.placeholderToContent[a] = { text: e.endSourceSpan ? e.endSourceSpan.toString() : "}", sourceSpan: e.endSourceSpan ?? e.sourceSpan }; let o = new zt(e.name, r, i, a, s, e.sourceSpan, e.startSourceSpan, e.endSourceSpan); return t.visitNodeFn(e, o); }
    visitBlockParameter(e, t) { throw new Error("Unreachable code"); }
    visitLetDeclaration(e, t) { return null; }
    _visitElementLike(e, t) { let s = P(this, e.children, t), r = {}, i = p => { r[p.name] = p.value; }, a, o; e instanceof Re ? (a = e.name, o = ic(e.name).isVoid) : (a = e.fullName, o = e.tagName ? ic(e.tagName).isVoid : !1), e.attrs.forEach(i), e.directives.forEach(p => p.attrs.forEach(i)); let l = t.placeholderRegistry.getStartTagPlaceholderName(a, r, o); t.placeholderToContent[l] = { text: e.startSourceSpan.toString(), sourceSpan: e.startSourceSpan }; let c = ""; o || (c = t.placeholderRegistry.getCloseTagPlaceholderName(a), t.placeholderToContent[c] = { text: `</${a}>`, sourceSpan: e.endSourceSpan ?? e.sourceSpan }); let h = new jt(a, r, l, c, s, o, e.sourceSpan, e.startSourceSpan, e.endSourceSpan); return t.visitNodeFn(e, h); }
    _visitTextWithInterpolation(e, t, s, r) { let i = [], a = !1; for (let o of e)
        switch (o.type) {
            case 8:
            case 17:
                a = !0;
                let [l, c, h] = o.parts, p = SE(c) || "INTERPOLATION", m = s.placeholderRegistry.getPlaceholderName(p, c);
                if (this._preserveExpressionWhitespace)
                    s.placeholderToContent[m] = { text: o.parts.join(""), sourceSpan: o.sourceSpan }, i.push(new gt(c, m, o.sourceSpan));
                else {
                    let v = this.normalizeExpression(o);
                    s.placeholderToContent[m] = { text: `${l}${v}${h}`, sourceSpan: o.sourceSpan }, i.push(new gt(v, m, o.sourceSpan));
                }
                break;
            default:
                if (o.parts[0].length > 0 || this._retainEmptyTokens) {
                    let v = i[i.length - 1];
                    v instanceof Mt ? (v.value += o.parts[0], v.sourceSpan = new B(v.sourceSpan.start, o.sourceSpan.end, v.sourceSpan.fullStart, v.sourceSpan.details)) : i.push(new Mt(o.parts[0], o.sourceSpan));
                }
                else
                    this._retainEmptyTokens && i.push(new Mt(o.parts[0], o.sourceSpan));
                break;
        } return a ? (gE(i, r), new it(i, t)) : i[0]; }
    normalizeExpression(e) { let t = e.parts[1], s = this._expressionParser.parseBinding(t, e.sourceSpan, e.sourceSpan.start.offset); return rE(s); }
};
function gE(n, e) { if (e instanceof Be && (vE(e), e = e.nodes[0]), e instanceof it) {
    wE(e.children, n);
    for (let t = 0; t < n.length; t++)
        n[t].sourceSpan = e.children[t].sourceSpan;
} }
function vE(n) { let e = n.nodes; if (e.length !== 1 || !(e[0] instanceof it))
    throw new Error("Unexpected previous i18n message - expected it to consist of only a single `Container` node."); }
function wE(n, e) {
    if (n.length !== e.length)
        throw new Error(`
The number of i18n message children changed between first and second pass.

First pass (${n.length} tokens):
${n.map(t => `"${t.sourceSpan.toString()}"`).join(`
`)}

Second pass (${e.length} tokens):
${e.map(t => `"${t.sourceSpan.toString()}"`).join(`
`)}
    `.trim());
    if (n.some((t, s) => e[s].constructor !== t.constructor))
        throw new Error("The types of the i18n message children changed between first and second pass.");
}
var EE = /\/\/[\s\S]*i18n[\s\S]*\([\s\S]*ph[\s\S]*=[\s\S]*("|')([\s\S]*?)\1[\s\S]*\)/g;
function SE(n) { return n.split(EE)[2]; }
var Ch = new Set(["iframe|srcdoc", "*|innerhtml", "*|outerhtml", "embed|src", "iframe|src", "object|codebase", "object|data"]);
function Ah(n, e) { return n = n.toLowerCase(), e = e.toLowerCase(), Ch.has(n + "|" + e) || Ch.has("*|" + e); }
var xE = n => (e, t) => { let s = n.get(e) ?? e; return s instanceof on && (t instanceof Nn && s.i18n instanceof Be && (t.previousMessage = s.i18n), s.i18n = t), t; }, Ka = class {
    keepI18nAttrs;
    enableI18nLegacyMessageIdFormat;
    preserveSignificantWhitespace;
    retainEmptyTokens;
    hasI18nMeta = !1;
    _errors = [];
    constructor(e = !1, t = !1, s = !0, r = !s) { this.keepI18nAttrs = e, this.enableI18nLegacyMessageIdFormat = t, this.preserveSignificantWhitespace = s, this.retainEmptyTokens = r; }
    _generateI18nMessage(e, t = "", s) { let { meaning: r, description: i, customId: a } = this._parseMetadata(t), l = qf(this.retainEmptyTokens, this.preserveSignificantWhitespace)(e, r, i, a, s); return this._setMessageId(l, t), this._setLegacyIds(l, t), l; }
    visitAllWithErrors(e) { let t = e.map(s => s.visit(this, null)); return new sr(t, this._errors); }
    visitElement(e) { return this._visitElementLike(e), e; }
    visitComponent(e, t) { return this._visitElementLike(e), e; }
    visitExpansion(e, t) { let s, r = e.i18n; if (this.hasI18nMeta = !0, r instanceof Nn) {
        let i = r.name;
        s = this._generateI18nMessage([e], r);
        let a = Gp(s);
        a.name = i, t !== null && (t.placeholderToMessage[i] = s);
    }
    else
        s = this._generateI18nMessage([e], t || r); return e.i18n = s, e; }
    visitText(e) { return e; }
    visitAttribute(e) { return e; }
    visitComment(e) { return e; }
    visitExpansionCase(e) { return e; }
    visitBlock(e, t) { return P(this, e.children, t), e; }
    visitBlockParameter(e, t) { return e; }
    visitLetDeclaration(e, t) { return e; }
    visitDirective(e, t) { return e; }
    _visitElementLike(e) { let t; if (Um(e)) {
        this.hasI18nMeta = !0;
        let s = [], r = {};
        for (let i of e.attrs)
            if (i.name === jp) {
                let a = e.i18n || i.value, o = new Map, l = this.preserveSignificantWhitespace ? e.children : Ct(new Di(!1, o), e.children);
                t = this._generateI18nMessage(l, a, xE(o)), t.nodes.length === 0 && (t = void 0), e.i18n = t;
            }
            else if (i.name.startsWith(Nl)) {
                let a = i.name.slice(Nl.length), o;
                e instanceof ke ? o = e.tagName === null ? !1 : Ah(e.tagName, a) : o = Ah(e.name, a), o ? this._reportError(i, `Translating attribute '${a}' is disallowed for security reasons.`) : r[a] = i.value;
            }
            else
                s.push(i);
        if (Object.keys(r).length)
            for (let i of s) {
                let a = r[i.name];
                a !== void 0 && i.value && (i.i18n = this._generateI18nMessage([i], i.i18n || a));
            }
        this.keepI18nAttrs || (e.attrs = s);
    } P(this, e.children, t); }
    _parseMetadata(e) { return typeof e == "string" ? AE(e) : e instanceof Be ? e : {}; }
    _setMessageId(e, t) { e.id || (e.id = t instanceof Be && t.id || Gc(e)); }
    _setLegacyIds(e, t) { if (this.enableI18nLegacyMessageIdFormat)
        e.legacyIds = [_p(e), bp(e)];
    else if (typeof t != "string") {
        let s = t instanceof Be ? t : t instanceof Nn ? t.previousMessage : void 0;
        e.legacyIds = s ? s.legacyIds : [];
    } }
    _reportError(e, t) { this._errors.push(new I(e.sourceSpan, t)); }
}, yE = "|", CE = "@@";
function AE(n = "") { let e, t, s; if (n = n.trim(), n) {
    let r = n.indexOf(CE), i = n.indexOf(yE), a;
    [a, e] = r > -1 ? [n.slice(0, r), n.slice(r + 2)] : [n, ""], [t, s] = i > -1 ? [a.slice(0, i), a.slice(i + 1)] : ["", a];
} return { customId: e, meaning: t, description: s }; }
function kE(n) { let e = []; return n.description ? e.push({ tagName: "desc", text: n.description }) : e.push({ tagName: "suppress", text: "{msgDescriptions}" }), n.meaning && e.push({ tagName: "meaning", text: n.meaning }), Lp(e); }
var _E = "goog.getMsg";
function bE(n, e, t, s) { let r = IE(e), i = [d(r)]; Object.keys(s).length && (i.push(Ga(tu(s, !0), !0)), i.push(Ga({ original_code: Ce(Object.keys(s).map(l => ({ key: Vi(l), quoted: !0, value: e.placeholders[l] ? d(e.placeholders[l].sourceSpan.toString()) : d(e.placeholderToMessage[l].nodes.map(c => c.sourceSpan.toString()).join("")) }))) }))); let a = new he(t.name, D(_E).callFn(i), vt, ue.Final); a.addLeadingComment(kE(e)); let o = new Ie(n.set(t)); return [a, o]; }
var lc = class {
    formatPh(e) { return `{$${Vi(e)}}`; }
    visitText(e) { return e.value; }
    visitContainer(e) { return e.children.map(t => t.visit(this)).join(""); }
    visitIcu(e) { return Pf(e); }
    visitTagPlaceholder(e) { return e.isVoid ? this.formatPh(e.startName) : `${this.formatPh(e.startName)}${e.children.map(t => t.visit(this)).join("")}${this.formatPh(e.closeName)}`; }
    visitPlaceholder(e) { return this.formatPh(e.name); }
    visitBlockPlaceholder(e) { return `${this.formatPh(e.startName)}${e.children.map(t => t.visit(this)).join("")}${this.formatPh(e.closeName)}`; }
    visitIcuPlaceholder(e, t) { return this.formatPh(e.name); }
}, TE = new lc;
function IE(n) { return n.nodes.map(e => e.visit(TE, null)).join(""); }
function NE(n, e, t) { let { messageParts: s, placeHolders: r } = DE(e), i = PE(e), a = r.map(c => t[c.text]), o = Rp(e, s, r, a, i), l = n.set(o); return [new Ie(l)]; }
var cc = class {
    placeholderToMessage;
    pieces;
    constructor(e, t) { this.placeholderToMessage = e, this.pieces = t; }
    visitText(e) { if (this.pieces[this.pieces.length - 1] instanceof En)
        this.pieces[this.pieces.length - 1].text += e.value;
    else {
        let t = new B(e.sourceSpan.fullStart, e.sourceSpan.end, e.sourceSpan.fullStart, e.sourceSpan.details);
        this.pieces.push(new En(e.value, t));
    } }
    visitContainer(e) { e.children.forEach(t => t.visit(this)); }
    visitIcu(e) { this.pieces.push(new En(Pf(e), e.sourceSpan)); }
    visitTagPlaceholder(e) { this.pieces.push(this.createPlaceholderPiece(e.startName, e.startSourceSpan ?? e.sourceSpan)), e.isVoid || (e.children.forEach(t => t.visit(this)), this.pieces.push(this.createPlaceholderPiece(e.closeName, e.endSourceSpan ?? e.sourceSpan))); }
    visitPlaceholder(e) { this.pieces.push(this.createPlaceholderPiece(e.name, e.sourceSpan)); }
    visitBlockPlaceholder(e) { this.pieces.push(this.createPlaceholderPiece(e.startName, e.startSourceSpan ?? e.sourceSpan)), e.children.forEach(t => t.visit(this)), this.pieces.push(this.createPlaceholderPiece(e.closeName, e.endSourceSpan ?? e.sourceSpan)); }
    visitIcuPlaceholder(e) { this.pieces.push(this.createPlaceholderPiece(e.name, e.sourceSpan, this.placeholderToMessage[e.name])); }
    createPlaceholderPiece(e, t, s) { return new Kn(Vi(e, !1), t, s); }
};
function DE(n) { let e = [], t = new cc(n.placeholderToMessage, e); return n.nodes.forEach(s => s.visit(t)), LE(e); }
function PE(n) { let e = n.nodes[0], t = n.nodes[n.nodes.length - 1]; return new B(e.sourceSpan.fullStart, t.sourceSpan.end, e.sourceSpan.fullStart, e.sourceSpan.details); }
function LE(n) { let e = [], t = []; n[0] instanceof Kn && e.push(Mo(n[0].sourceSpan.start)); for (let s = 0; s < n.length; s++) {
    let r = n[s];
    r instanceof En ? e.push(r) : (t.push(r), n[s - 1] instanceof Kn && e.push(Mo(n[s - 1].sourceSpan.end)));
} return n[n.length - 1] instanceof Kn && e.push(Mo(n[n.length - 1].sourceSpan.end)), { messageParts: e, placeHolders: t }; }
function Mo(n) { return new En("", new B(n, n)); }
var kh = "ngI18nClosureMode", BE = "i18n_", ME = "I18N_EXP_", _h = "\uFFFD", RE = "MSG_";
function bh(n) { return `${RE}${n}`.toUpperCase(); }
function FE(n) { return new he(n.name, void 0, vt, void 0, n.sourceSpan); }
function $E(n) { let e = n.relativeContextFilePath.replace(/[^A-Za-z0-9]/g, "_").toUpperCase() + "_", t = new Map, s = new Map, r = new Map, i = new Map; for (let l of n.units)
    for (let c of l.ops())
        if (c.kind === u.ExtractedAttribute && c.i18nContext !== null) {
            let h = t.get(c.i18nContext) ?? [];
            h.push(c), t.set(c.i18nContext, h);
        }
        else if (c.kind === u.I18nAttributes)
            s.set(c.target, c);
        else if (c.kind === u.I18nExpression && c.usage === cr.I18nAttribute) {
            let h = r.get(c.target) ?? [];
            h.push(c), r.set(c.target, h);
        }
        else
            c.kind === u.I18nMessage && i.set(c.xref, c); let a = new Map, o = new Map; for (let l of n.units)
    for (let c of l.create)
        if (c.kind === u.I18nMessage) {
            if (c.messagePlaceholder === null) {
                let { mainVar: h, statements: p } = Uf(n, e, i, c);
                if (c.i18nBlock !== null) {
                    let m = n.addConst(h, p);
                    o.set(c.i18nBlock, m);
                }
                else {
                    n.constsInitializers.push(...p), a.set(c.i18nContext, h);
                    let m = t.get(c.i18nContext);
                    if (m !== void 0)
                        for (let v of m)
                            v.expression = h.clone();
                }
            }
            E.remove(c);
        } for (let l of n.units)
    for (let c of l.create)
        if (Mn(c)) {
            let h = s.get(c.xref);
            if (h === void 0)
                continue;
            let p = r.get(c.xref);
            if (p === void 0)
                throw new Error("AssertionError: Could not find any i18n expressions associated with an I18nAttributes instruction");
            let m = new Set;
            p = p.filter(w => { let C = m.has(w.name); return m.add(w.name), !C; });
            let v = p.flatMap(w => { let C = a.get(w.context); if (C === void 0)
                throw new Error("AssertionError: Could not find i18n expression's value"); return [d(w.name), C]; });
            h.i18nAttributesConfig = n.addConst(new It(v));
        } for (let l of n.units)
    for (let c of l.create)
        if (c.kind === u.I18nStart) {
            let h = o.get(c.root);
            if (h === void 0)
                throw new Error("AssertionError: Could not find corresponding i18n block index for an i18n message op; was an i18n message incorrectly assumed to correspond to an attribute?");
            c.messageIndex = h;
        } }
function Uf(n, e, t, s) { let r = [], i = new Map; for (let c of s.subMessages) {
    let h = t.get(c), { mainVar: p, statements: m } = Uf(n, e, t, h);
    r.push(...m);
    let v = i.get(h.messagePlaceholder) ?? [];
    v.push(p), i.set(h.messagePlaceholder, v);
} OE(s, i), s.params = new Map([...s.params.entries()].sort()); let a = D(n.pool.uniqueName(BE)), o = UE(n.pool, s.message.id, e, n.i18nUseExternalIds), l; if (s.needsPostprocessing || s.postprocessingParams.size > 0) {
    let c = Object.fromEntries([...s.postprocessingParams.entries()].sort()), h = tu(c, !1), p = [];
    s.postprocessingParams.size > 0 && p.push(Ga(h, !0)), l = m => y(f.i18nPostprocess).callFn([m, ...p]);
} return r.push(...VE(s.message, a, o, s.params, l)), { mainVar: a, statements: r }; }
function OE(n, e) { for (let [t, s] of e)
    s.length === 1 ? n.params.set(t, s[0]) : (n.params.set(t, d(`${_h}${ME}${t}${_h}`)), n.postprocessingParams.set(t, q(s))); }
function VE(n, e, t, s, r) { let i = Object.fromEntries(s), a = [FE(e), $i(qE(), bE(e, n, t, i), NE(e, n, tu(i, !1)))]; return r && a.push(new Ie(e.set(r(e)))), a; }
function qE() { return ar(D(kh)).notIdentical(d("undefined", go)).and(D(kh)); }
function UE(n, e, t, s) { let r, i = t; if (s) {
    let a = bh("EXTERNAL_"), o = n.uniqueName(i);
    r = `${a}${Gn(e)}$$${o}`;
}
else {
    let a = bh(i);
    r = n.uniqueName(a);
} return D(r); }
function HE(n) { for (let e of n.units) {
    let t = null, s = null, r = new Map, i = new Map, a = new Map;
    for (let o of e.create)
        switch (o.kind) {
            case u.I18nStart:
                if (o.context === null)
                    throw Error("I18n op should have its context set.");
                t = o;
                break;
            case u.I18nEnd:
                t = null;
                break;
            case u.IcuStart:
                if (o.context === null)
                    throw Error("Icu op should have its context set.");
                s = o;
                break;
            case u.IcuEnd:
                s = null;
                break;
            case u.Text:
                if (t !== null)
                    if (r.set(o.xref, t), i.set(o.xref, s), o.icuPlaceholder !== null) {
                        let l = wv(n.allocateXrefId(), o.icuPlaceholder, [o.initialValue]);
                        E.replace(o, l), a.set(o.xref, l);
                    }
                    else
                        E.remove(o);
                break;
        }
    for (let o of e.update)
        switch (o.kind) {
            case u.InterpolateText:
                if (!r.has(o.target))
                    continue;
                let l = r.get(o.target), c = i.get(o.target), h = a.get(o.target), p = c ? c.context : l.context, m = c ? Ei.Postproccessing : Ei.Creation, v = [];
                for (let w = 0; w < o.interpolation.expressions.length; w++) {
                    let C = o.interpolation.expressions[w];
                    v.push(wf(p, l.xref, l.xref, l.handle, C, h?.xref ?? null, o.interpolation.i18nPlaceholders[w] ?? null, m, cr.I18nText, "", C.sourceSpan ?? o.sourceSpan));
                }
                E.replaceWithMany(o, v), h !== void 0 && (h.strings = o.interpolation.strings);
                break;
        }
} }
function WE(n) { for (let e of n.units)
    for (let t of e.create)
        switch (t.kind) {
            case u.ElementStart:
            case u.ConditionalCreate:
            case u.ConditionalBranchCreate:
            case u.Template:
                if (!Array.isArray(t.localRefs))
                    throw new Error("AssertionError: expected localRefs to be an array still");
                if (t.numSlotsUsed += t.localRefs.length, t.localRefs.length > 0) {
                    let s = jE(t.localRefs);
                    t.localRefs = n.addConst(s);
                }
                else
                    t.localRefs = null;
                break;
        } }
function jE(n) { let e = []; for (let t of n)
    e.push(d(t.name), d(t.target)); return q(e); }
function zE(n) { for (let e of n.units) {
    let t = ve.HTML;
    for (let s of e.create)
        s.kind === u.ElementStart && s.namespace !== t && (E.insertBefore(uv(s.namespace), s), t = s.namespace);
} }
function GE(n) { let e = [], t = 0, s = 0, r = 0, i = 0, a = 0, o = null; for (; t < n.length;)
    switch (n.charCodeAt(t++)) {
        case 40:
            s++;
            break;
        case 41:
            s--;
            break;
        case 39:
            r === 0 ? r = 39 : r === 39 && n.charCodeAt(t - 1) !== 92 && (r = 0);
            break;
        case 34:
            r === 0 ? r = 34 : r === 34 && n.charCodeAt(t - 1) !== 92 && (r = 0);
            break;
        case 58:
            !o && s === 0 && r === 0 && (o = Hf(n.substring(a, t - 1).trim()), i = t);
            break;
        case 59:
            if (o && i > 0 && s === 0 && r === 0) {
                let c = n.substring(i, t - 1).trim();
                e.push(o, c), a = t, i = 0, o = null;
            }
            break;
    } if (o && i) {
    let l = n.slice(i).trim();
    e.push(o, l);
} return e; }
function Hf(n) { return n.replace(/[a-z][A-Z]/g, e => e.charAt(0) + "-" + e.charAt(1)).toLowerCase(); }
function XE(n) { let e = new Map; for (let t of n.units)
    for (let s of t.create)
        Mn(s) && e.set(s.xref, s); for (let t of n.units)
    for (let s of t.create)
        if (s.kind === u.ExtractedAttribute && s.bindingKind === b.Attribute && Ef(s.expression)) {
            let r = e.get(s.target);
            if (r !== void 0 && (r.kind === u.Template || r.kind === u.ConditionalCreate || r.kind === u.ConditionalBranchCreate) && r.templateKind === Xe.Structural)
                continue;
            if (s.name === "style") {
                let i = GE(s.expression.value);
                for (let a = 0; a < i.length - 1; a += 2)
                    E.insertBefore(dt(s.target, b.StyleProperty, null, i[a], d(i[a + 1]), null, null, j.STYLE), s);
                E.remove(s);
            }
            else if (s.name === "class") {
                let i = s.expression.value.trim().split(/\s+/g);
                for (let a of i)
                    E.insertBefore(dt(s.target, b.ClassName, null, a, null, null, null, j.NONE), s);
                E.remove(s);
            }
        } }
function YE(n) { br(n.root, n.componentName, { index: 0 }); }
function br(n, e, t) { n.fnName === null && (n.fnName = n.job.pool.uniqueName(Gn(`${e}_${n.job.fnSuffix}`), !1)); let s = new Map; for (let r of n.ops())
    switch (r.kind) {
        case u.Property:
        case u.DomProperty:
            r.bindingKind === b.LegacyAnimation && (r.name = "@" + r.name);
            break;
        case u.Animation:
            if (r.handlerFnName === null) {
                let c = r.name.replace(".", "");
                r.handlerFnName = `${n.fnName}_${c}_cb`, r.handlerFnName = Gn(r.handlerFnName);
            }
            break;
        case u.AnimationListener:
            if (r.handlerFnName !== null)
                break;
            if (!r.hostListener && r.targetSlot.slot === null)
                throw new Error("Expected a slot to be assigned");
            let i = r.name.replace(".", "");
            r.hostListener ? r.handlerFnName = `${e}_${i}_HostBindingHandler` : r.handlerFnName = `${n.fnName}_${r.tag.replace("-", "_")}_${i}_${r.targetSlot.slot}_listener`, r.handlerFnName = Gn(r.handlerFnName);
            break;
        case u.Listener:
            if (r.handlerFnName !== null)
                break;
            if (!r.hostListener && r.targetSlot.slot === null)
                throw new Error("Expected a slot to be assigned");
            let a = "";
            r.isLegacyAnimationListener && (r.name = `@${r.name}.${r.legacyAnimationPhase}`, a = "animation"), r.hostListener ? r.handlerFnName = `${e}_${a}${r.name}_HostBindingHandler` : r.handlerFnName = `${n.fnName}_${r.tag.replace("-", "_")}_${a}${r.name}_${r.targetSlot.slot}_listener`, r.handlerFnName = Gn(r.handlerFnName);
            break;
        case u.TwoWayListener:
            if (r.handlerFnName !== null)
                break;
            if (r.targetSlot.slot === null)
                throw new Error("Expected a slot to be assigned");
            r.handlerFnName = Gn(`${n.fnName}_${r.tag.replace("-", "_")}_${r.name}_${r.targetSlot.slot}_listener`);
            break;
        case u.Variable:
            s.set(r.xref, QE(r.variable, t));
            break;
        case u.RepeaterCreate:
            if (!(n instanceof mt))
                throw new Error("AssertionError: must be compiling a component");
            if (r.handle.slot === null)
                throw new Error("Expected slot to be assigned");
            if (r.emptyView !== null) {
                let c = n.job.views.get(r.emptyView);
                br(c, `${e}_${r.functionNameSuffix}Empty_${r.handle.slot + 2}`, t);
            }
            br(n.job.views.get(r.xref), `${e}_${r.functionNameSuffix}_${r.handle.slot + 1}`, t);
            break;
        case u.Projection:
            if (!(n instanceof mt))
                throw new Error("AssertionError: must be compiling a component");
            if (r.handle.slot === null)
                throw new Error("Expected slot to be assigned");
            if (r.fallbackView !== null) {
                let c = n.job.views.get(r.fallbackView);
                br(c, `${e}_ProjectionFallback_${r.handle.slot}`, t);
            }
            break;
        case u.ConditionalCreate:
        case u.ConditionalBranchCreate:
        case u.Template:
            if (!(n instanceof mt))
                throw new Error("AssertionError: must be compiling a component");
            let o = n.job.views.get(r.xref);
            if (r.handle.slot === null)
                throw new Error("Expected slot to be assigned");
            let l = r.functionNameSuffix.length === 0 ? "" : `_${r.functionNameSuffix}`;
            br(o, `${e}${l}_${r.handle.slot}`, t);
            break;
        case u.StyleProp:
            r.name = Th(ZE(r.name));
            break;
        case u.ClassProp:
            r.name = Th(r.name);
            break;
    } for (let r of n.ops())
    de(r, i => { if (!(!(i instanceof nn) || i.name !== null)) {
        if (!s.has(i.xref))
            throw new Error(`Variable ${i.xref} not yet named`);
        i.name = s.get(i.xref);
    } }); }
function QE(n, e) { if (n.name === null)
    switch (n.kind) {
        case Te.Context:
            n.name = `ctx_r${e.index++}`;
            break;
        case Te.Identifier:
            let t = n.identifier === at ? "i" : "";
            n.name = `${n.identifier}_${t}r${++e.index}`;
            break;
        default:
            n.name = `_r${++e.index}`;
            break;
    } return n.name; }
function ZE(n) { return n.startsWith("--") ? n : Hf(n); }
function Th(n) { let e = n.indexOf("!important"); return e > -1 ? n.substring(0, e) : n; }
function JE(n) { for (let e of n.units) {
    for (let t of e.functions)
        Ro(t.ops);
    for (let t of e.create)
        (t.kind === u.Listener || t.kind === u.Animation || t.kind === u.AnimationListener || t.kind === u.TwoWayListener) && Ro(t.handlerOps);
    Ro(e.update);
} }
function Ro(n) { for (let e of n) {
    if (e.kind !== u.Statement || !(e.statement instanceof Ie) || !(e.statement.expr instanceof $a))
        continue;
    let t = e.statement.expr.steps, s = !0;
    for (let r = e.next; r.kind !== u.ListEnd && s; r = r.next)
        de(r, (i, a) => { if (!Gt(i))
            return i; if (s && !(a & U.InChildOperation))
            switch (i.kind) {
                case N.NextContext:
                    i.steps += t, E.remove(e), s = !1;
                    break;
                case N.GetCurrentView:
                case N.Reference:
                case N.ContextLetReference:
                    s = !1;
                    break;
            } });
} }
var KE = "ng-container";
function eS(n) { for (let e of n.units) {
    let t = new Set;
    for (let s of e.create)
        s.kind === u.ElementStart && s.tag === KE && (s.kind = u.ContainerStart, t.add(s.xref)), s.kind === u.ElementEnd && t.has(s.xref) && (s.kind = u.ContainerEnd);
} }
function tS(n, e) { let t = n.get(e); if (t === void 0)
    throw new Error("All attributes should have an element-like target."); return t; }
function nS(n) { let e = new Map; for (let t of n.units)
    for (let s of t.create)
        Mn(s) && e.set(s.xref, s); for (let t of n.units)
    for (let s of t.create)
        (s.kind === u.ElementStart || s.kind === u.ContainerStart) && s.nonBindable && E.insertAfter(iv(s.xref), s), (s.kind === u.ElementEnd || s.kind === u.ContainerEnd) && tS(e, s.xref).nonBindable && E.insertBefore(av(s.xref), s); }
function Ft(n) { return e => e.kind === n; }
function Pr(n, e) { return t => t.kind === n && e === t.expression instanceof le; }
function sS(n) { return n.kind === u.Listener && !(n.hostListener && n.isLegacyAnimationListener) || n.kind === u.TwoWayListener || n.kind === u.Animation || n.kind === u.AnimationListener; }
function rS(n) { return (n.kind === u.Property || n.kind === u.TwoWayProperty) && !(n.expression instanceof le); }
var iS = [{ test: n => n.kind === u.Listener && n.hostListener && n.isLegacyAnimationListener }, { test: sS }], aS = [{ test: Ft(u.StyleMap), transform: eo }, { test: Ft(u.ClassMap), transform: eo }, { test: Ft(u.StyleProp) }, { test: Ft(u.ClassProp) }, { test: Pr(u.Attribute, !0) }, { test: Pr(u.Property, !0) }, { test: rS }, { test: Pr(u.Attribute, !1) }, { test: Ft(u.Control) }], oS = [{ test: Pr(u.DomProperty, !0) }, { test: Pr(u.DomProperty, !1) }, { test: Ft(u.Attribute) }, { test: Ft(u.StyleMap), transform: eo }, { test: Ft(u.ClassMap), transform: eo }, { test: Ft(u.StyleProp) }, { test: Ft(u.ClassProp) }], Ih = new Set([u.Listener, u.TwoWayListener, u.AnimationListener, u.StyleMap, u.ClassMap, u.StyleProp, u.ClassProp, u.Property, u.TwoWayProperty, u.DomProperty, u.Attribute, u.Animation, u.Control]);
function lS(n) { for (let e of n.units) {
    Nh(e.create, iS);
    let t = e.job.kind === A.Host ? oS : aS;
    Nh(e.update, t);
} }
function Nh(n, e) { let t = [], s = null; for (let r of n) {
    let i = Si(r) ? r.target : null;
    (!Ih.has(r.kind) || i !== s && s !== null && i !== null) && (E.insertBefore(Dh(t, e), r), t = [], s = null), Ih.has(r.kind) && (t.push(r), E.remove(r), s = i ?? s);
} n.push(Dh(t, e)); }
function Dh(n, e) { let t = Array.from(e, () => new Array); for (let s of n) {
    let r = e.findIndex(i => i.test(s));
    t[r].push(s);
} return t.flatMap((s, r) => { let i = e[r].transform; return i ? i(s) : s; }); }
function eo(n) { return n.slice(n.length - 1); }
function cS(n) { for (let e of n.units) {
    let t = Tf(e);
    for (let s of e.ops())
        if (s.kind === u.Binding) {
            let r = hS(t, s.target);
            uS(s.name) && r.kind === u.Projection && E.remove(s);
        }
} }
function uS(n) { return n.toLowerCase() === "select"; }
function hS(n, e) { let t = n.get(e); if (t === void 0)
    throw new Error("All attributes should have an slottable target."); return t; }
function pS(n) { for (let e of n.units)
    fS(e); }
function fS(n) { for (let e of n.update)
    de(e, (t, s) => { if (!Gt(t) || t.kind !== N.PipeBinding)
        return; if (s & U.InChildOperation)
        throw new Error("AssertionError: pipe bindings should not appear in child expressions"); if (e.target == null)
        throw new Error("AssertionError: expected slot handle to be assigned for pipe creation"); dS(n, e.target, t); }); }
function dS(n, e, t) { for (let s = n.create.head.next; s.kind !== u.ListEnd; s = s.next) {
    if (!ur(s) || s.xref !== e)
        continue;
    for (; s.next.kind === u.Pipe;)
        s = s.next;
    let r = cv(t.target, t.targetSlot, t.name);
    E.insertBefore(r, s.next);
    return;
} throw new Error(`AssertionError: unable to find insertion point for pipe ${t.name}`); }
function mS(n) { for (let e of n.units)
    for (let t of e.update)
        ce(t, s => !(s instanceof Es) || s.args.length <= 4 ? s : new Ai(s.target, s.targetSlot, s.name, q(s.args), s.args.length), U.None); }
function gS(n) { Wf(n.root, 0); }
function Wf(n, e) { let t = null; for (let s of n.create)
    switch (s.kind) {
        case u.I18nStart:
            s.subTemplateIndex = e === 0 ? null : e, t = s;
            break;
        case u.I18nEnd:
            t.subTemplateIndex === null && (e = 0), t = null;
            break;
        case u.ConditionalCreate:
        case u.ConditionalBranchCreate:
        case u.Template:
            e = Gi(n.job.views.get(s.xref), t, s.i18nPlaceholder, e);
            break;
        case u.RepeaterCreate:
            let r = n.job.views.get(s.xref);
            e = Gi(r, t, s.i18nPlaceholder, e), s.emptyView !== null && (e = Gi(n.job.views.get(s.emptyView), t, s.emptyI18nPlaceholder, e));
            break;
        case u.Projection:
            s.fallbackView !== null && (e = Gi(n.job.views.get(s.fallbackView), t, s.fallbackViewI18nPlaceholder, e));
            break;
    } return e; }
function Gi(n, e, t, s) { if (t !== void 0) {
    if (e === null)
        throw Error("Expected template with i18n placeholder to be in an i18n block.");
    s++, vS(n, e);
} return Wf(n, s); }
function vS(n, e) { if (n.create.head.next?.kind !== u.I18nStart) {
    let t = n.job.allocateXrefId();
    E.insertAfter(xo(t, e.message, e.root, null), n.create.head), E.insertBefore(yo(t, null), n.create.tail);
} }
function wS(n) { for (let e of n.units)
    for (let t of e.ops())
        de(t, s => { if (!(s instanceof ws) || s.body === null)
            return; let r = new uc(s.args.length); s.fn = n.pool.getSharedConstant(r, s.body), s.body = null; }); }
var uc = class extends Wr {
    numArgs;
    constructor(e) { super(), this.numArgs = e; }
    keyOf(e) { return e instanceof Ln ? `param(${e.index})` : super.keyOf(e); }
    toSharedConstantDeclaration(e, t) { let s = []; for (let i = 0; i < this.numArgs; i++)
        s.push(new J("a" + i, re)); let r = _(t, i => i instanceof Ln ? D("a" + i.index) : i, U.None); return new he(e, new $n(s, r), void 0, ue.Final); }
};
function ES(n) { for (let e of n.units)
    for (let t of e.update)
        ce(t, (s, r) => r & U.InChildOperation ? s : s instanceof It ? SS(s) : s instanceof St ? xS(s) : s, U.None); }
function SS(n) { let e = [], t = []; for (let s of n.entries) {
    if (s instanceof An) {
        if (s.expression.isConstant())
            e.push(s);
        else {
            let r = t.length;
            t.push(s.expression), e.push(new An(new Ln(r)));
        }
        continue;
    }
    if (s.isConstant())
        e.push(s);
    else {
        let r = t.length;
        t.push(s), e.push(new Ln(r));
    }
} return new ws(q(e), t); }
function xS(n) { let e = [], t = []; for (let s of n.entries) {
    if (s instanceof qt) {
        if (s.expression.isConstant())
            e.push(s);
        else {
            let r = t.length;
            t.push(s.expression), e.push(new qt(new Ln(r)));
        }
        continue;
    }
    if (s.value.isConstant())
        e.push(s);
    else {
        let r = t.length;
        t.push(s.value), e.push(new us(s.key, new Ln(r), s.quoted));
    }
} return new ws(new St(e), t); }
function yS(n) { for (let e of n.units)
    for (let t of e.ops())
        ce(t, s => s instanceof ls && (s.flags === null || !s.flags.includes("g")) ? n.pool.getSharedConstant(new hc, s) : s, U.None); }
var hc = class extends Wr {
    toSharedConstantDeclaration(e, t) { return new he(e, t, void 0, ue.Final); }
};
function CS(n, e, t, s, r) { return qn(f.element, n, e, t, s, r); }
function AS(n, e, t, s, r) { return qn(f.elementStart, n, e, t, s, r); }
function qn(n, e, t, s, r, i) { let a = [d(e)]; return t !== null && a.push(d(t)), r !== null ? a.push(d(s), d(r)) : s !== null && a.push(d(s)), F(n, a, i); }
function jf(n, e, t, s, r, i, a, o, l) { let c = [d(e), t, d(s), d(r), d(i), d(a)]; for (o !== null && (c.push(d(o)), c.push(y(f.templateRefExtractor))); c[c.length - 1].isEquivalent(kn);)
    c.pop(); return F(n, c, l); }
function pu(n, e, t, s, r) { let i = [d(e)]; return t instanceof le ? i.push(hr(t, r)) : i.push(t), s !== null && i.push(s), F(n, i, r); }
function kS(n) { return F(f.elementEnd, [], n); }
function _S(n, e, t, s) { return qn(f.elementContainerStart, n, null, e, t, s); }
function bS(n, e, t, s) { return qn(f.elementContainer, n, null, e, t, s); }
function TS() { return F(f.elementContainerEnd, [], null); }
function IS(n, e, t, s, r, i, a, o) { return jf(f.templateCreate, n, e, t, s, r, i, a, o); }
function NS() { return F(f.disableBindings, [], null); }
function DS() { return F(f.enableBindings, [], null); }
function PS(n, e, t, s, r) { let i = [d(n), e]; return t !== null && i.push(y(t)), F(s ? f.syntheticHostListener : f.listener, i, r); }
function Ph(n, e) { return y(f.twoWayBindingSet).callFn([n, e]); }
function LS(n, e, t) { return F(f.twoWayListener, [d(n), e], t); }
function BS(n, e) { return F(f.pipe, [d(n), d(e)], null); }
function MS() { return F(f.namespaceHTML, [], null); }
function RS() { return F(f.namespaceSVG, [], null); }
function FS() { return F(f.namespaceMathML, [], null); }
function $S(n, e) { return F(f.advance, n > 1 ? [d(n)] : [], e); }
function OS(n) { return y(f.reference).callFn([d(n)]); }
function VS(n) { return y(f.nextContext).callFn(n === 1 ? [] : [d(n)]); }
function qS() { return y(f.getCurrentView).callFn([]); }
function US(n) { return y(f.restoreView).callFn([n]); }
function HS(n) { return y(f.resetView).callFn([n]); }
function WS(n, e, t) { let s = [d(n, null)]; return e !== "" && s.push(d(e)), F(f.text, s, t); }
function jS(n, e, t, s, r, i, a, o, l, c, h) { let p = [d(n), d(e), t ?? d(null), d(s), d(r), d(i), a ?? d(null), o ?? d(null), l ? y(f.deferEnableTimerScheduling) : d(null), d(h)], m; for (; (m = p[p.length - 1]) !== null && m instanceof ye && m.value === null;)
    p.pop(); return F(f.defer, p, c); }
var zS = new Map([[ee.Idle, { none: f.deferOnIdle, prefetch: f.deferPrefetchOnIdle, hydrate: f.deferHydrateOnIdle }], [ee.Immediate, { none: f.deferOnImmediate, prefetch: f.deferPrefetchOnImmediate, hydrate: f.deferHydrateOnImmediate }], [ee.Timer, { none: f.deferOnTimer, prefetch: f.deferPrefetchOnTimer, hydrate: f.deferHydrateOnTimer }], [ee.Hover, { none: f.deferOnHover, prefetch: f.deferPrefetchOnHover, hydrate: f.deferHydrateOnHover }], [ee.Interaction, { none: f.deferOnInteraction, prefetch: f.deferPrefetchOnInteraction, hydrate: f.deferHydrateOnInteraction }], [ee.Viewport, { none: f.deferOnViewport, prefetch: f.deferPrefetchOnViewport, hydrate: f.deferHydrateOnViewport }], [ee.Never, { none: f.deferHydrateNever, prefetch: f.deferHydrateNever, hydrate: f.deferHydrateNever }]]);
function GS(n, e, t, s) { let r = zS.get(n)?.[t]; if (r === void 0)
    throw new Error(`Unable to determine instruction for trigger ${n}`); return F(r, e, s); }
function XS(n) { return F(f.projectionDef, n ? [n] : [], null); }
function YS(n, e, t, s, r, i, a) { let o = [d(n)]; return (e !== 0 || t !== null || s !== null) && (o.push(d(e)), t !== null && o.push(t), s !== null && (t === null && o.push(d(null)), o.push(D(s), d(r), d(i)))), F(f.projection, o, a); }
function QS(n, e, t, s) { let r = [d(n), d(e)]; return t !== null && r.push(d(t)), F(f.i18nStart, r, s); }
function ZS(n, e, t, s, r, i, a, o) { let l = [d(n), e, d(t), d(s), d(r), d(i)]; for (a !== null && (l.push(d(a)), l.push(y(f.templateRefExtractor))); l[l.length - 1].isEquivalent(kn);)
    l.pop(); return F(f.conditionalCreate, l, o); }
function JS(n, e, t, s, r, i, a, o) { let l = [d(n), e, d(t), d(s), d(r), d(i)]; for (a !== null && (l.push(d(a)), l.push(y(f.templateRefExtractor))); l[l.length - 1].isEquivalent(kn);)
    l.pop(); return F(f.conditionalBranchCreate, l, o); }
function KS(n, e, t, s, r, i, a, o, l, c, h, p, m, v) { let w = [d(n), D(e), d(t), d(s), d(r), d(i), a]; return (o || l !== null) && (w.push(d(o)), l !== null && (w.push(D(l), d(c), d(h)), (p !== null || m !== null) && w.push(d(p)), m !== null && w.push(d(m)))), F(f.repeaterCreate, w, v); }
function ex(n, e) { return F(f.repeater, [n], e); }
function tx(n, e, t) { return n === "prefetch" ? F(f.deferPrefetchWhen, [e], t) : n === "hydrate" ? F(f.deferHydrateWhen, [e], t) : F(f.deferWhen, [e], t); }
function nx(n, e) { return F(f.declareLet, [d(n)], e); }
function sx(n, e) { return y(f.storeLet).callFn([n], e); }
function rx(n) { return y(f.readContextLet).callFn([d(n)]); }
function ix(n, e, t, s) { let r = [d(n), d(e)]; return t && r.push(d(t)), F(f.i18n, r, s); }
function ax(n) { return F(f.i18nEnd, [], n); }
function ox(n, e) { let t = [d(n), d(e)]; return F(f.i18nAttributes, t, null); }
function lx(n, e, t) { return pu(f.ariaProperty, n, e, null, t); }
function cx(n, e, t, s) { return pu(f.property, n, e, t, s); }
function ux(n) { return F(f.control, [], n); }
function hx(n) { return F(f.controlCreate, [], n); }
function px(n, e, t, s) { let r = [d(n), e]; return t !== null && r.push(t), F(f.twoWayProperty, r, s); }
function fx(n, e, t, s, r) { let i = [d(n)]; return e instanceof le ? i.push(hr(e, r)) : i.push(e), (t !== null || s !== null) && i.push(t ?? d(null)), s !== null && i.push(d(s)), F(f.attribute, i, null); }
function dx(n, e, t, s) { let r = [d(n)]; return e instanceof le ? r.push(hr(e, s)) : r.push(e), t !== null && r.push(d(t)), F(f.styleProp, r, s); }
function mx(n, e, t) { return F(f.classProp, [d(n), e], t); }
function gx(n, e) { let t = n instanceof le ? hr(n, e) : n; return F(f.styleMap, [t], e); }
function vx(n, e) { let t = n instanceof le ? hr(n, e) : n; return F(f.classMap, [t], e); }
function wx(n, e, t, s, r) { return qn(f.domElement, n, e, t, s, r); }
function Ex(n, e, t, s, r) { return qn(f.domElementStart, n, e, t, s, r); }
function Sx(n) { return F(f.domElementEnd, [], n); }
function xx(n, e, t, s) { return qn(f.domElementContainerStart, n, null, e, t, s); }
function yx(n, e, t, s) { return qn(f.domElementContainer, n, null, e, t, s); }
function Cx() { return F(f.domElementContainerEnd, [], null); }
function Ax(n, e, t, s) { let r = [d(n), e]; return t !== null && r.push(y(t)), F(f.domListener, r, s); }
function kx(n, e, t, s, r, i, a, o) { return jf(f.domTemplate, n, e, t, s, r, i, a, o); }
var Lh = [f.pipeBind1, f.pipeBind2, f.pipeBind3, f.pipeBind4];
function _x(n, e, t) { if (t.length < 1 || t.length > Lh.length)
    throw new Error("pipeBind() argument count out of bounds"); let s = Lh[t.length - 1]; return y(s).callFn([d(n), d(e), ...t]); }
function bx(n, e, t) { return y(f.pipeBindV).callFn([d(n), d(e), t]); }
function Tx(n, e, t) { let s = zf(n, e); return Hx(Vx, [], s, t); }
function Ix(n, e) { return F(f.i18nExp, [n], e); }
function Nx(n, e) { return F(f.i18nApply, [d(n)], e); }
function Dx(n, e, t, s) { return pu(f.domProperty, n, e, t, s); }
function Px(n, e, t, s) { let r = [e]; t !== null && r.push(t); let i = n === "enter" ? f.animationEnter : f.animationLeave; return F(i, r, s); }
function Lx(n, e, t, s) { let i = [e instanceof le ? hr(e, s) : e]; t !== null && i.push(t); let a = n === "enter" ? f.animationEnter : f.animationLeave; return F(a, i, s); }
function Bx(n, e, t, s) { let r = [e], i = n === "enter" ? f.animationEnterListener : f.animationLeaveListener; return F(i, r, s); }
function Mx(n, e, t) { return F(f.syntheticHostProperty, [d(n), e], t); }
function Rx(n, e, t) { return fu(Ux, [d(n), e], t, null); }
function Fx(n, e) { return F(f.attachSourceLocations, [d(n), e], null); }
function $x(n, e, t) { return y(f.arrowFunction).callFn([d(n), e, t]); }
function zf(n, e) { if (n.length < 1 || e.length !== n.length - 1)
    throw new Error("AssertionError: expected specific shape of args for strings/expressions in interpolation"); let t = []; if (e.length === 1 && n[0] === "" && n[1] === "")
    t.push(e[0]);
else {
    let s;
    for (s = 0; s < e.length; s++)
        t.push(d(n[s]), e[s]);
    t.push(d(n[s]));
} return t; }
function hr(n, e) { let t = zf(n.strings, n.expressions); return fu(qx, [], t, e); }
function F(n, e, t) { let s = y(n).callFn(e, t); return ot(new Ie(s, t)); }
function Ox(n, e, t) { let s = [n]; return e !== null && s.push(e), F(f.conditional, s, t); }
var Vx = { constant: [f.textInterpolate, f.textInterpolate1, f.textInterpolate2, f.textInterpolate3, f.textInterpolate4, f.textInterpolate5, f.textInterpolate6, f.textInterpolate7, f.textInterpolate8], variable: f.textInterpolateV, mapping: n => { if (n % 2 === 0)
        throw new Error("Expected odd number of arguments"); return (n - 1) / 2; } }, qx = { constant: [f.interpolate, f.interpolate1, f.interpolate2, f.interpolate3, f.interpolate4, f.interpolate5, f.interpolate6, f.interpolate7, f.interpolate8], variable: f.interpolateV, mapping: n => { if (n % 2 === 0)
        throw new Error("Expected odd number of arguments"); return (n - 1) / 2; } }, Ux = { constant: [f.pureFunction0, f.pureFunction1, f.pureFunction2, f.pureFunction3, f.pureFunction4, f.pureFunction5, f.pureFunction6, f.pureFunction7, f.pureFunction8], variable: f.pureFunctionV, mapping: n => n };
function fu(n, e, t, s) { let r = n.mapping(t.length), i = t.at(-1); if (t.length > 1 && i instanceof ye && i.value === "" && t.pop(), r < n.constant.length)
    return y(n.constant[r]).callFn([...e, ...t], s); if (n.variable !== null)
    return y(n.variable).callFn([...e, q(t)], s); throw new Error("AssertionError: unable to call variadic function"); }
function Hx(n, e, t, s) { return ot(fu(n, e, t, s).toStmt()); }
var Wx = new Map([["window", f.resolveWindow], ["document", f.resolveDocument], ["body", f.resolveBody]]), jx = new Map([["class", "className"], ["for", "htmlFor"], ["formaction", "formAction"], ["innerHtml", "innerHTML"], ["readonly", "readOnly"], ["tabindex", "tabIndex"]]);
function zx(n) { for (let e of n.units)
    Gx(e, e.create), ko(e, e.update); }
function Gx(n, e) { for (let t of e)
    switch (ce(t, s => Gf(n, s), U.None), t.kind) {
        case u.Text:
            E.replace(t, WS(t.handle.slot, t.initialValue, t.sourceSpan));
            break;
        case u.ElementStart:
            E.replace(t, n.job.mode === We.DomOnly ? Ex(t.handle.slot, t.tag, t.attributes, t.localRefs, t.startSourceSpan) : AS(t.handle.slot, t.tag, t.attributes, t.localRefs, t.startSourceSpan));
            break;
        case u.Element:
            E.replace(t, n.job.mode === We.DomOnly ? wx(t.handle.slot, t.tag, t.attributes, t.localRefs, t.wholeSourceSpan) : CS(t.handle.slot, t.tag, t.attributes, t.localRefs, t.wholeSourceSpan));
            break;
        case u.ElementEnd:
            E.replace(t, n.job.mode === We.DomOnly ? Sx(t.sourceSpan) : kS(t.sourceSpan));
            break;
        case u.ContainerStart:
            E.replace(t, n.job.mode === We.DomOnly ? xx(t.handle.slot, t.attributes, t.localRefs, t.startSourceSpan) : _S(t.handle.slot, t.attributes, t.localRefs, t.startSourceSpan));
            break;
        case u.Container:
            E.replace(t, n.job.mode === We.DomOnly ? yx(t.handle.slot, t.attributes, t.localRefs, t.wholeSourceSpan) : bS(t.handle.slot, t.attributes, t.localRefs, t.wholeSourceSpan));
            break;
        case u.ContainerEnd:
            E.replace(t, n.job.mode === We.DomOnly ? Cx() : TS());
            break;
        case u.I18nStart:
            E.replace(t, QS(t.handle.slot, t.messageIndex, t.subTemplateIndex, t.sourceSpan));
            break;
        case u.I18nEnd:
            E.replace(t, ax(t.sourceSpan));
            break;
        case u.I18n:
            E.replace(t, ix(t.handle.slot, t.messageIndex, t.subTemplateIndex, t.sourceSpan));
            break;
        case u.I18nAttributes:
            if (t.i18nAttributesConfig === null)
                throw new Error("AssertionError: i18nAttributesConfig was not set");
            E.replace(t, ox(t.handle.slot, t.i18nAttributesConfig));
            break;
        case u.Template:
            if (!(n instanceof mt))
                throw new Error("AssertionError: must be compiling a component");
            if (Array.isArray(t.localRefs))
                throw new Error("AssertionError: local refs array should have been extracted into a constant");
            let s = n.job.views.get(t.xref);
            E.replace(t, t.templateKind === Xe.Block || n.job.mode === We.DomOnly ? kx(t.handle.slot, D(s.fnName), s.decls, s.vars, t.tag, t.attributes, t.localRefs, t.startSourceSpan) : IS(t.handle.slot, D(s.fnName), s.decls, s.vars, t.tag, t.attributes, t.localRefs, t.startSourceSpan));
            break;
        case u.DisableBindings:
            E.replace(t, NS());
            break;
        case u.EnableBindings:
            E.replace(t, DS());
            break;
        case u.Pipe:
            E.replace(t, BS(t.handle.slot, t.name));
            break;
        case u.DeclareLet:
            E.replace(t, nx(t.handle.slot, t.sourceSpan));
            break;
        case u.AnimationString:
            E.replace(t, Lx(t.animationKind, t.expression, t.sanitizer, t.sourceSpan));
            break;
        case u.Animation:
            let r = Xi(n, t.handlerFnName, t.handlerOps, !1);
            E.replace(t, Px(t.animationKind, r, t.sanitizer, t.sourceSpan));
            break;
        case u.AnimationListener:
            let i = Xi(n, t.handlerFnName, t.handlerOps, t.consumesDollarEvent);
            E.replace(t, Bx(t.animationKind, i, null, t.sourceSpan));
            break;
        case u.Listener:
            let a = Xi(n, t.handlerFnName, t.handlerOps, t.consumesDollarEvent), o = t.eventTarget ? Wx.get(t.eventTarget) : null;
            if (o === void 0)
                throw new Error(`Unexpected global target '${t.eventTarget}' defined for '${t.name}' event. Supported list of global targets: window,document,body.`);
            E.replace(t, n.job.mode === We.DomOnly && !t.hostListener && !t.isLegacyAnimationListener ? Ax(t.name, a, o, t.sourceSpan) : PS(t.name, a, o, t.hostListener && t.isLegacyAnimationListener, t.sourceSpan));
            break;
        case u.TwoWayListener:
            E.replace(t, LS(t.name, Xi(n, t.handlerFnName, t.handlerOps, !0), t.sourceSpan));
            break;
        case u.Variable:
            if (t.variable.name === null)
                throw new Error(`AssertionError: unnamed variable ${t.xref}`);
            E.replace(t, ot(new he(t.variable.name, t.initializer, void 0, ue.Final)));
            break;
        case u.Namespace:
            switch (t.active) {
                case ve.HTML:
                    E.replace(t, MS());
                    break;
                case ve.SVG:
                    E.replace(t, RS());
                    break;
                case ve.Math:
                    E.replace(t, FS());
                    break;
            }
            break;
        case u.Defer:
            let l = !!t.loadingMinimumTime || !!t.loadingAfterTime || !!t.placeholderMinimumTime;
            E.replace(t, jS(t.handle.slot, t.mainSlot.slot, t.resolverFn, t.loadingSlot?.slot ?? null, t.placeholderSlot?.slot ?? null, t.errorSlot?.slot ?? null, t.loadingConfig, t.placeholderConfig, l, t.sourceSpan, t.flags));
            break;
        case u.DeferOn:
            let c = [];
            switch (t.trigger.kind) {
                case ee.Never:
                case ee.Idle:
                case ee.Immediate: break;
                case ee.Timer:
                    c = [d(t.trigger.delay)];
                    break;
                case ee.Viewport:
                    t.modifier === "hydrate" ? c = t.trigger.options ? [t.trigger.options] : [] : (c = [d(t.trigger.targetSlot?.slot ?? null)], t.trigger.targetSlotViewSteps !== 0 ? c.push(d(t.trigger.targetSlotViewSteps)) : t.trigger.options && c.push(d(null)), t.trigger.options && c.push(t.trigger.options));
                    break;
                case ee.Interaction:
                case ee.Hover:
                    t.modifier === "hydrate" ? c = [] : (c = [d(t.trigger.targetSlot?.slot ?? null)], t.trigger.targetSlotViewSteps !== 0 && c.push(d(t.trigger.targetSlotViewSteps)));
                    break;
                default: throw new Error(`AssertionError: Unsupported reification of defer trigger kind ${t.trigger.kind}`);
            }
            E.replace(t, GS(t.trigger.kind, c, t.modifier, t.sourceSpan));
            break;
        case u.ProjectionDef:
            E.replace(t, XS(t.def));
            break;
        case u.Projection:
            if (t.handle.slot === null)
                throw new Error("No slot was assigned for project instruction");
            let h = null, p = null, m = null;
            if (t.fallbackView !== null) {
                if (!(n instanceof mt))
                    throw new Error("AssertionError: must be compiling a component");
                let O = n.job.views.get(t.fallbackView);
                if (O === void 0)
                    throw new Error("AssertionError: projection had fallback view xref, but fallback view was not found");
                if (O.fnName === null || O.decls === null || O.vars === null)
                    throw new Error("AssertionError: expected projection fallback view to have been named and counted");
                h = O.fnName, p = O.decls, m = O.vars;
            }
            E.replace(t, YS(t.handle.slot, t.projectionSlotIndex, t.attributes, h, p, m, t.sourceSpan));
            break;
        case u.ConditionalCreate:
            if (!(n instanceof mt))
                throw new Error("AssertionError: must be compiling a component");
            if (Array.isArray(t.localRefs))
                throw new Error("AssertionError: local refs array should have been extracted into a constant");
            let v = n.job.views.get(t.xref);
            E.replace(t, ZS(t.handle.slot, D(v.fnName), v.decls, v.vars, t.tag, t.attributes, t.localRefs, t.startSourceSpan));
            break;
        case u.ConditionalBranchCreate:
            if (!(n instanceof mt))
                throw new Error("AssertionError: must be compiling a component");
            if (Array.isArray(t.localRefs))
                throw new Error("AssertionError: local refs array should have been extracted into a constant");
            let w = n.job.views.get(t.xref);
            E.replace(t, JS(t.handle.slot, D(w.fnName), w.decls, w.vars, t.tag, t.attributes, t.localRefs, t.startSourceSpan));
            break;
        case u.RepeaterCreate:
            if (t.handle.slot === null)
                throw new Error("No slot was assigned for repeater instruction");
            if (!(n instanceof mt))
                throw new Error("AssertionError: must be compiling a component");
            let C = n.job.views.get(t.xref);
            if (C.fnName === null)
                throw new Error("AssertionError: expected repeater primary view to have been named");
            let T = null, k = null, R = null;
            if (t.emptyView !== null) {
                let O = n.job.views.get(t.emptyView);
                if (O === void 0)
                    throw new Error("AssertionError: repeater had empty view xref, but empty view was not found");
                if (O.fnName === null || O.decls === null || O.vars === null)
                    throw new Error("AssertionError: expected repeater empty view to have been named and counted");
                T = O.fnName, k = O.decls, R = O.vars;
            }
            E.replace(t, KS(t.handle.slot, C.fnName, t.decls, t.vars, t.tag, t.attributes, Qx(n, t), t.usesComponentInstance, T, k, R, t.emptyTag, t.emptyAttributes, t.wholeSourceSpan));
            break;
        case u.SourceLocation:
            let se = q(t.locations.map(({ targetSlot: O, offset: yt, line: pr, column: Pd }) => { if (O.slot === null)
                throw new Error("No slot was assigned for source location"); return q([d(O.slot), d(yt), d(pr), d(Pd)]); }));
            E.replace(t, Fx(t.templatePath, se));
            break;
        case u.ControlCreate:
            E.replace(t, hx(t.sourceSpan));
            break;
        case u.Statement: break;
        default: throw new Error(`AssertionError: Unsupported reification of create op ${u[t.kind]}`);
    } }
function ko(n, e) { for (let t of e)
    switch (ce(t, s => Gf(n, s), U.None), t.kind) {
        case u.Advance:
            E.replace(t, $S(t.delta, t.sourceSpan));
            break;
        case u.Property:
            E.replace(t, n.job.mode === We.DomOnly && t.bindingKind !== b.LegacyAnimation && t.bindingKind !== b.Animation ? Bh(t) : Xx(t));
            break;
        case u.Control:
            E.replace(t, Yx(t));
            break;
        case u.TwoWayProperty:
            E.replace(t, px(t.name, t.expression, t.sanitizer, t.sourceSpan));
            break;
        case u.StyleProp:
            E.replace(t, dx(t.name, t.expression, t.unit, t.sourceSpan));
            break;
        case u.ClassProp:
            E.replace(t, mx(t.name, t.expression, t.sourceSpan));
            break;
        case u.StyleMap:
            E.replace(t, gx(t.expression, t.sourceSpan));
            break;
        case u.ClassMap:
            E.replace(t, vx(t.expression, t.sourceSpan));
            break;
        case u.I18nExpression:
            E.replace(t, Ix(t.expression, t.sourceSpan));
            break;
        case u.I18nApply:
            E.replace(t, Nx(t.handle.slot, t.sourceSpan));
            break;
        case u.InterpolateText:
            E.replace(t, Tx(t.interpolation.strings, t.interpolation.expressions, t.sourceSpan));
            break;
        case u.Attribute:
            E.replace(t, fx(t.name, t.expression, t.sanitizer, t.namespace, t.sourceSpan));
            break;
        case u.DomProperty:
            if (t.expression instanceof le)
                throw new Error("not yet handled");
            t.bindingKind === b.LegacyAnimation || t.bindingKind === b.Animation ? E.replace(t, Mx(t.name, t.expression, t.sourceSpan)) : E.replace(t, Bh(t));
            break;
        case u.Variable:
            if (t.variable.name === null)
                throw new Error(`AssertionError: unnamed variable ${t.xref}`);
            E.replace(t, ot(new he(t.variable.name, t.initializer, void 0, ue.Final)));
            break;
        case u.Conditional:
            if (t.processed === null)
                throw new Error("Conditional test was not set.");
            E.replace(t, Ox(t.processed, t.contextValue, t.sourceSpan));
            break;
        case u.Repeater:
            E.replace(t, ex(t.collection, t.sourceSpan));
            break;
        case u.DeferWhen:
            E.replace(t, tx(t.modifier, t.expr, t.sourceSpan));
            break;
        case u.StoreLet: throw new Error(`AssertionError: unexpected storeLet ${t.declaredName}`);
        case u.Statement: break;
        default: throw new Error(`AssertionError: Unsupported reification of update op ${u[t.kind]}`);
    } }
function Bh(n) { return Dx(jx.get(n.name) ?? n.name, n.expression, n.sanitizer, n.sourceSpan); }
function Xx(n) { return If(n.name) ? lx(n.name, n.expression, n.sourceSpan) : cx(n.name, n.expression, n.sanitizer, n.sourceSpan); }
function Yx(n) { return ux(n.sourceSpan); }
function Gf(n, e) { if (!Gt(e))
    return e; switch (e.kind) {
    case N.NextContext: return VS(e.steps);
    case N.Reference: return OS(e.targetSlot.slot + 1 + e.offset);
    case N.LexicalRead: throw new Error(`AssertionError: unresolved LexicalRead of ${e.name}`);
    case N.TwoWayBindingSet: throw new Error("AssertionError: unresolved TwoWayBindingSet");
    case N.RestoreView:
        if (typeof e.view == "number")
            throw new Error("AssertionError: unresolved RestoreView");
        return US(e.view);
    case N.ResetView: return HS(e.expr);
    case N.GetCurrentView: return qS();
    case N.ReadVariable:
        if (e.name === null)
            throw new Error(`Read of unnamed variable ${e.xref}`);
        return D(e.name);
    case N.ReadTemporaryExpr:
        if (e.name === null)
            throw new Error(`Read of unnamed temporary ${e.xref}`);
        return D(e.name);
    case N.AssignTemporaryExpr:
        if (e.name === null)
            throw new Error(`Assign of unnamed temporary ${e.xref}`);
        return D(e.name).set(e.expr);
    case N.PureFunctionExpr:
        if (e.fn === null)
            throw new Error("AssertionError: expected PureFunctions to have been extracted");
        return Rx(e.varOffset, e.fn, e.args);
    case N.PureFunctionParameterExpr: throw new Error("AssertionError: expected PureFunctionParameterExpr to have been extracted");
    case N.PipeBinding: return _x(e.targetSlot.slot, e.varOffset, e.args);
    case N.PipeBindingVariadic: return bx(e.targetSlot.slot, e.varOffset, e.args);
    case N.SlotLiteralExpr: return d(e.slot.slot);
    case N.ContextLetReference: return rx(e.targetSlot.slot);
    case N.StoreLet: return sx(e.value, e.sourceSpan);
    case N.TrackContext: return D("this");
    case N.ArrowFunction:
        if (e.varOffset === null)
            throw new Error("AssertionError: variable offset was not assigned to arrow function");
        return $x(e.varOffset, n.job.pool.getSharedFunctionReference(Zx(n, e), "arrowFn"), D(at));
    default: throw new Error(`AssertionError: Unsupported reification of ir.Expression kind: ${N[e.kind]}`);
} }
function Xi(n, e, t, s) { ko(n, t); let r = []; for (let a of t) {
    if (a.kind !== u.Statement)
        throw new Error(`AssertionError: expected reified statements, but found op ${u[a.kind]}`);
    r.push(a.statement);
} let i = []; return s && i.push(new J("$event", re)), an(i, r, void 0, void 0, e); }
function Qx(n, e) { if (e.trackByFn !== null)
    return e.trackByFn; let t = [new J("$index", Cn), new J("$item", re)], s; if (e.trackByOps === null)
    s = e.usesComponentInstance ? an(t, [new me(e.track)]) : ie(t, e.track);
else {
    ko(n, e.trackByOps);
    let r = [];
    for (let i of e.trackByOps) {
        if (i.kind !== u.Statement)
            throw new Error(`AssertionError: expected reified statements, but found op ${u[i.kind]}`);
        r.push(i.statement);
    }
    s = e.usesComponentInstance || r.length !== 1 || !(r[0] instanceof me) ? an(t, r) : ie(t, r[0].value);
} return e.trackByFn = n.job.pool.getSharedFunctionReference(s, "_forTrack"), e.trackByFn; }
function Zx(n, e) { ko(n, e.ops); let t = []; for (let r of e.ops) {
    if (r.kind !== u.Statement)
        throw new Error(`AssertionError: expected reified statements, but found op ${u[r.kind]}`);
    t.push(r.statement);
} let s = t.length === 1 && t[0] instanceof me ? t[0].value : t; return ie([new J(e.contextName, re), new J(e.currentViewName, re)], ie(e.parameters, s)); }
function Jx(n) { for (let e of n.units)
    for (let t of e.update)
        switch (t.kind) {
            case u.Attribute:
            case u.Binding:
            case u.ClassProp:
            case u.ClassMap:
            case u.Property:
            case u.StyleProp:
            case u.StyleMap:
                t.expression instanceof ki && E.remove(t);
                break;
        } }
function Kx(n) { for (let e of n.units)
    for (let t of e.create)
        switch (t.kind) {
            case u.I18nContext:
                E.remove(t);
                break;
            case u.I18nStart:
                t.context = null;
                break;
        } }
function e2(n) { for (let e of n.units)
    for (let t of e.update) {
        if (t.kind !== u.Variable || t.variable.kind !== Te.Identifier || !(t.initializer instanceof xi))
            continue;
        let s = t.variable.identifier, r = t;
        for (; r && r.kind !== u.ListEnd;)
            ce(r, i => i instanceof _e && i.name === s ? d(void 0) : i, U.None), r = r.prev;
    } }
function t2(n) { for (let e of n.units) {
    let t = new Set;
    for (let s of e.update)
        s.kind === u.I18nExpression && t.add(s.i18nOwner);
    for (let s of e.create)
        switch (s.kind) {
            case u.I18nAttributes:
                if (t.has(s.xref))
                    continue;
                E.remove(s);
        }
} }
function n2(n) { for (let e of n.units) {
    for (let t of e.functions)
        Lr(e, t.ops);
    Lr(e, e.create), Lr(e, e.update);
} }
function Lr(n, e) { let t = new Map; t.set(n.xref, D(at)); for (let s of e)
    switch (s.kind) {
        case u.Variable:
            s.variable.kind === Te.Context && t.set(s.variable.view, new nn(s.xref));
            break;
        case u.Animation:
        case u.AnimationListener:
        case u.Listener:
        case u.TwoWayListener:
            Lr(n, s.handlerOps);
            break;
        case u.RepeaterCreate:
            s.trackByOps !== null && Lr(n, s.trackByOps);
            break;
    } n === n.job.root && t.set(n.xref, D(at)); for (let s of e)
    ce(s, r => { if (r instanceof Pn) {
        if (!t.has(r.view))
            throw new Error(`No context found for reference to view ${r.view} from view ${n.xref}`);
        return t.get(r.view);
    }
    else
        return r; }, U.None); }
function s2(n) { for (let e of n.units)
    for (let t of e.create)
        if (t.kind === u.Defer) {
            if (t.resolverFn !== null)
                continue;
            if (t.ownResolverFn !== null) {
                if (t.handle.slot === null)
                    throw new Error("AssertionError: slot must be assigned before extracting defer deps functions");
                let s = e.fnName?.replace("_Template", "");
                t.resolverFn = n.pool.getSharedFunctionReference(t.ownResolverFn, `${s}_Defer_${t.handle.slot}_DepsFn`, !1);
            }
        } }
function r2(n) { for (let e of n.units)
    Mh(e.create), Mh(e.update); }
function Mh(n) { for (let e of n)
    (e.kind === u.Listener || e.kind === u.TwoWayListener || e.kind === u.AnimationListener) && ce(e, t => t instanceof _e && t.name === "$event" ? ((e.kind === u.Listener || e.kind === u.AnimationListener) && (e.consumesDollarEvent = !0), new wt(t.name)) : t, U.InChildOperation); }
function i2(n) { let e = new Map, t = new Map; for (let s of n.units)
    for (let r of s.create)
        switch (r.kind) {
            case u.I18nContext:
                e.set(r.xref, r);
                break;
            case u.ElementStart:
                t.set(r.xref, r);
                break;
        } Nt(n, n.root, e, t); }
function Nt(n, e, t, s, r) { let i = null, a = new Map; for (let o of e.create)
    switch (o.kind) {
        case u.I18nStart:
            if (!o.context)
                throw Error("Could not find i18n context for i18n op");
            i = { i18nBlock: o, i18nContext: t.get(o.context) };
            break;
        case u.I18nEnd:
            i = null;
            break;
        case u.ElementStart:
            if (o.i18nPlaceholder !== void 0) {
                if (i === null)
                    throw Error("i18n tag placeholder should only occur inside an i18n block");
                Rh(o, i.i18nContext, i.i18nBlock, r), r && o.i18nPlaceholder.closeName && a.set(o.xref, r), r = void 0;
            }
            break;
        case u.ElementEnd:
            let l = s.get(o.xref);
            if (l && l.i18nPlaceholder !== void 0) {
                if (i === null)
                    throw Error("AssertionError: i18n tag placeholder should only occur inside an i18n block");
                Fh(l, i.i18nContext, i.i18nBlock, a.get(o.xref)), a.delete(o.xref);
            }
            break;
        case u.Projection:
            if (o.i18nPlaceholder !== void 0) {
                if (i === null)
                    throw Error("i18n tag placeholder should only occur inside an i18n block");
                Rh(o, i.i18nContext, i.i18nBlock, r), Fh(o, i.i18nContext, i.i18nBlock, r), r = void 0;
            }
            if (o.fallbackView !== null) {
                let m = n.views.get(o.fallbackView);
                if (o.fallbackViewI18nPlaceholder === void 0)
                    Nt(n, m, t, s);
                else {
                    if (i === null)
                        throw Error("i18n tag placeholder should only occur inside an i18n block");
                    Yi(n, m, o.handle.slot, o.fallbackViewI18nPlaceholder, i.i18nContext, i.i18nBlock, r), Nt(n, m, t, s), Qi(n, m, o.handle.slot, o.fallbackViewI18nPlaceholder, i.i18nContext, i.i18nBlock, r), r = void 0;
                }
            }
            break;
        case u.ConditionalCreate:
        case u.ConditionalBranchCreate:
        case u.Template:
            let c = n.views.get(o.xref);
            if (o.i18nPlaceholder === void 0)
                Nt(n, c, t, s);
            else {
                if (i === null)
                    throw Error("i18n tag placeholder should only occur inside an i18n block");
                o.templateKind === Xe.Structural ? Nt(n, c, t, s, o) : (Yi(n, c, o.handle.slot, o.i18nPlaceholder, i.i18nContext, i.i18nBlock, r), Nt(n, c, t, s), Qi(n, c, o.handle.slot, o.i18nPlaceholder, i.i18nContext, i.i18nBlock, r), r = void 0);
            }
            break;
        case u.RepeaterCreate:
            if (r !== void 0)
                throw Error("AssertionError: Unexpected structural directive associated with @for block");
            let h = o.handle.slot + 1, p = n.views.get(o.xref);
            if (o.i18nPlaceholder === void 0)
                Nt(n, p, t, s);
            else {
                if (i === null)
                    throw Error("i18n tag placeholder should only occur inside an i18n block");
                Yi(n, p, h, o.i18nPlaceholder, i.i18nContext, i.i18nBlock, r), Nt(n, p, t, s), Qi(n, p, h, o.i18nPlaceholder, i.i18nContext, i.i18nBlock, r), r = void 0;
            }
            if (o.emptyView !== null) {
                let m = o.handle.slot + 2, v = n.views.get(o.emptyView);
                if (o.emptyI18nPlaceholder === void 0)
                    Nt(n, v, t, s);
                else {
                    if (i === null)
                        throw Error("i18n tag placeholder should only occur inside an i18n block");
                    Yi(n, v, m, o.emptyI18nPlaceholder, i.i18nContext, i.i18nBlock, r), Nt(n, v, t, s), Qi(n, v, m, o.emptyI18nPlaceholder, i.i18nContext, i.i18nBlock, r), r = void 0;
                }
            }
            break;
    } }
function Rh(n, e, t, s) { let { startName: r, closeName: i } = n.i18nPlaceholder, a = ne.ElementTag | ne.OpenTag, o = n.handle.slot; s !== void 0 && (a |= ne.TemplateTag, o = { element: o, template: s.handle.slot }), i || (a |= ne.CloseTag), ir(e.params, r, o, t.subTemplateIndex, a); }
function Fh(n, e, t, s) { let { closeName: r } = n.i18nPlaceholder; if (r) {
    let i = ne.ElementTag | ne.CloseTag, a = n.handle.slot;
    s !== void 0 && (i |= ne.TemplateTag, a = { element: a, template: s.handle.slot }), ir(e.params, r, a, t.subTemplateIndex, i);
} }
function Yi(n, e, t, s, r, i, a) { let { startName: o, closeName: l } = s, c = ne.TemplateTag | ne.OpenTag; l || (c |= ne.CloseTag), a !== void 0 && ir(r.params, o, a.handle.slot, i.subTemplateIndex, c), ir(r.params, o, t, Xf(n, i, e), c); }
function Qi(n, e, t, s, r, i, a) { let { closeName: o } = s, l = ne.TemplateTag | ne.CloseTag; o && (ir(r.params, o, t, Xf(n, i, e), l), a !== void 0 && ir(r.params, o, a.handle.slot, i.subTemplateIndex, l)); }
function Xf(n, e, t) { for (let s of t.create)
    if (s.kind === u.I18nStart)
        return s.subTemplateIndex; return e.subTemplateIndex; }
function ir(n, e, t, s, r) { let i = n.get(e) ?? []; i.push({ value: t, subTemplateIndex: s, flags: r }), n.set(e, i); }
function a2(n) { let e = new Map, t = new Map, s = new Map; for (let a of n.units)
    for (let o of a.create)
        switch (o.kind) {
            case u.I18nStart:
                e.set(o.xref, o.subTemplateIndex);
                break;
            case u.I18nContext:
                t.set(o.xref, o);
                break;
            case u.IcuPlaceholder:
                s.set(o.xref, o);
                break;
        } let r = new Map, i = a => a.usage === cr.I18nText ? a.i18nOwner : a.context; for (let a of n.units)
    for (let o of a.update)
        if (o.kind === u.I18nExpression) {
            let l = r.get(i(o)) || 0, c = e.get(o.i18nOwner) ?? null, h = { value: l, subTemplateIndex: c, flags: ne.ExpressionIndex };
            o2(o, h, t, s), r.set(i(o), l + 1);
        } }
function o2(n, e, t, s) { if (n.i18nPlaceholder !== null) {
    let r = t.get(n.context), i = n.resolutionTime === Ei.Creation ? r.params : r.postprocessingParams, a = i.get(n.i18nPlaceholder) || [];
    a.push(e), i.set(n.i18nPlaceholder, a);
} n.icuPlaceholder !== null && s.get(n.icuPlaceholder)?.expressionPlaceholders.push(e); }
function l2(n) { let e = new Map; for (let t of n.units)
    for (let s of t.ops())
        if (s.kind === u.ElementStart || s.kind === u.Template) {
            let r = s.tag ?? "";
            switch (s.namespace) {
                case ve.SVG:
                    r = `:${Co}:${r}`;
                    break;
                case ve.Math:
                    r = `:${Ao}:${r}`;
                    break;
            }
            e.set(s.xref, r);
        } for (let t of n.units)
    for (let s of t.create)
        if (s.kind === u.ExtractedAttribute && s.i18nContext !== null && s.expression !== null) {
            let r = e.get(s.target) ?? "", i = s.expression;
            switch (s.securityContext) {
                case j.HTML:
                    i = y(f.sanitizeHtml).callFn([i]);
                    break;
                case j.STYLE:
                    i = y(f.sanitizeStyle).callFn([i]);
                    break;
                case j.SCRIPT:
                    i = y(f.sanitizeScript).callFn([i]);
                    break;
                case j.URL:
                    i = y(f.sanitizeUrl).callFn([i]);
                    break;
                case j.RESOURCE_URL:
                    i = y(f.sanitizeResourceUrl).callFn([i]);
                    break;
                case j.ATTRIBUTE_NO_BINDING:
                    i = y(f.validateAttribute).callFn([i, d(r), d(s.name)]);
                    break;
            }
            s.expression = i;
        } }
function c2(n) { for (let e of n.units) {
    for (let t of e.functions)
        Br(e, t.ops, null);
    Br(e, e.create, null), Br(e, e.update, null);
} }
function Br(n, e, t) { let s = new Map, r = new Map; for (let i of e)
    switch (i.kind) {
        case u.Variable:
            switch (i.variable.kind) {
                case Te.Identifier:
                    if (i.variable.local) {
                        if (r.has(i.variable.identifier))
                            continue;
                        r.set(i.variable.identifier, i.xref);
                    }
                    else if (s.has(i.variable.identifier))
                        continue;
                    s.set(i.variable.identifier, i.xref);
                    break;
                case Te.Alias:
                    if (s.has(i.variable.identifier))
                        continue;
                    s.set(i.variable.identifier, i.xref);
                    break;
                case Te.SavedView:
                    t = { view: i.variable.view, variable: i.xref };
                    break;
            }
            break;
        case u.Animation:
        case u.AnimationListener:
        case u.Listener:
        case u.TwoWayListener:
            Br(n, i.handlerOps, t);
            break;
        case u.RepeaterCreate:
            i.trackByOps !== null && Br(n, i.trackByOps, t);
            break;
    } for (let i of e)
    i.kind === u.Listener || i.kind === u.TwoWayListener || i.kind === u.Animation || i.kind === u.AnimationListener || ce(i, a => { if (a instanceof _e)
        return r.has(a.name) ? new nn(r.get(a.name)) : s.has(a.name) ? new nn(s.get(a.name)) : new Ye(new Pn(n.job.root.xref), a.name); if (a instanceof Ci && typeof a.view == "number") {
        if (t === null || t.view !== a.view)
            throw new Error(`AssertionError: no saved view ${a.view} from view ${n.xref}`);
        return a.view = new nn(t.variable), a;
    }
    else
        return a; }, U.None); for (let i of e)
    de(i, a => { if (a instanceof _e)
        throw new Error(`AssertionError: no lexical reads should remain, but found read of ${a.name}`); }); }
var u2 = new Map([[j.HTML, f.sanitizeHtml], [j.RESOURCE_URL, f.sanitizeResourceUrl], [j.SCRIPT, f.sanitizeScript], [j.STYLE, f.sanitizeStyle], [j.URL, f.sanitizeUrl], [j.ATTRIBUTE_NO_BINDING, f.validateAttribute]]), h2 = new Map([[j.HTML, f.trustConstantHtml], [j.RESOURCE_URL, f.trustConstantResourceUrl]]);
function p2(n) { for (let e of n.units) {
    if (n.kind !== A.Host) {
        for (let t of e.create)
            if (t.kind === u.ExtractedAttribute) {
                let s = h2.get($h(t.securityContext)) ?? null;
                t.trustedValueFn = s !== null ? y(s) : null;
            }
    }
    for (let t of e.update)
        switch (t.kind) {
            case u.Property:
            case u.Attribute:
            case u.DomProperty:
            case u.TwoWayProperty:
                let s = null;
                Array.isArray(t.securityContext) && t.securityContext.length === 2 && t.securityContext.includes(j.URL) && t.securityContext.includes(j.RESOURCE_URL) ? s = f.sanitizeUrlOrResourceUrl : s = u2.get($h(t.securityContext)) ?? null, t.sanitizer = s !== null ? y(s) : null;
                break;
        }
} }
function $h(n) { if (Array.isArray(n)) {
    if (n.length > 1)
        throw Error("AssertionError: Ambiguous security context");
    return n[0] || j.NONE;
} return n; }
function f2(n) { for (let e of n.units) {
    for (let t of e.functions)
        Oh(n, e, t.ops) && Vh(e, t.ops, D(t.currentViewName));
    e.create.prepend([vn(e.job.allocateXrefId(), { kind: Te.SavedView, name: null, view: e.xref }, new Ul, ft.None)]);
    for (let t of e.create)
        (t.kind === u.Listener || t.kind === u.TwoWayListener || t.kind === u.Animation || t.kind === u.AnimationListener) && Oh(n, e, t.handlerOps) && Vh(e, t.handlerOps, e.xref);
} }
function Oh(n, e, t) { let s = e !== n.root; if (!s)
    for (let r of t)
        de(r, i => { (i instanceof Fa || i instanceof yi) && (s = !0); }); return s; }
function Vh(n, e, t) { e.prepend([vn(n.job.allocateXrefId(), { kind: Te.Context, name: null, view: n.xref }, new Ci(t), ft.None)]); for (let s of e)
    s.kind === u.Statement && s.statement instanceof me && (s.statement.value = new Oa(s.statement.value)); }
function d2(n) { let e = new Map; for (let t of n.units) {
    let s = 0;
    for (let r of t.create)
        ur(r) && (r.handle.slot = s, e.set(r.xref, r.handle.slot), s += r.numSlotsUsed);
    t.decls = s;
} for (let t of n.units)
    for (let s of t.ops())
        if (s.kind === u.Template || s.kind === u.ConditionalCreate || s.kind === u.ConditionalBranchCreate || s.kind === u.RepeaterCreate) {
            let r = n.views.get(s.xref);
            s.decls = r.decls;
        } }
function m2(n) { let e = new Set, t = new Map; for (let s of n.units)
    for (let r of s.ops())
        r.kind === u.DeclareLet && t.set(r.xref, r), de(r, i => { i instanceof yi && e.add(i.target); }); for (let s of n.units)
    for (let r of s.update)
        ce(r, i => i instanceof xi && !e.has(i.target) ? (g2(i) || E.remove(t.get(i.target)), i.value) : i, U.None); }
function g2(n) { let e = !1; return _(n, t => ((t instanceof Es || t instanceof Ai) && (e = !0), t), U.None), e; }
function v2(n) { let e = new Set; for (let t of n.units)
    for (let s of t.ops())
        de(s, r => { if (r instanceof z)
            switch (r.operator) {
                case x.Exponentiation:
                    w2(r, e);
                    break;
                case x.NullishCoalesce:
                    E2(r, e);
                    break;
                case x.And:
                case x.Or: S2(r, e);
            } }); for (let t of n.units)
    for (let s of t.ops())
        ce(s, r => r instanceof Et ? e.has(r) ? r : r.expr : r, U.None); }
function w2(n, e) { n.lhs instanceof Et && n.lhs.expr instanceof rn && e.add(n.lhs); }
function E2(n, e) { n.lhs instanceof Et && (qh(n.lhs.expr) || n.lhs.expr instanceof Tt) && e.add(n.lhs), n.rhs instanceof Et && (qh(n.rhs.expr) || n.rhs.expr instanceof Tt) && e.add(n.rhs); }
function S2(n, e) { n.lhs instanceof Et && n.lhs.expr instanceof z && n.lhs.expr.operator === x.NullishCoalesce && e.add(n.lhs); }
function qh(n) { return n instanceof z && (n.operator === x.And || n.operator === x.Or); }
function x2(n) { for (let e of n.units)
    for (let t of e.update)
        if (t.kind === u.Binding)
            switch (t.bindingKind) {
                case b.ClassName:
                    if (t.expression instanceof le)
                        throw new Error("Unexpected interpolation in ClassName binding");
                    E.replace(t, zg(t.target, t.name, t.expression, t.sourceSpan));
                    break;
                case b.StyleProperty:
                    E.replace(t, jg(t.target, t.name, t.expression, t.unit, t.sourceSpan));
                    break;
                case b.Property:
                case b.Template:
                    t.name === "style" ? E.replace(t, Gg(t.target, t.expression, t.sourceSpan)) : t.name === "class" && E.replace(t, Xg(t.target, t.expression, t.sourceSpan));
                    break;
            } }
function y2(n) { for (let e of n.units) {
    e.create.prepend(Mr(e.create)), e.update.prepend(Mr(e.update));
    for (let t of e.functions)
        t.ops.prepend(Mr(t.ops));
} }
function Mr(n) { let e = 0, t = []; for (let s of n) {
    let r = new Map;
    de(s, (c, h) => { h & U.InChildOperation || c instanceof Bn && r.set(c.xref, c); });
    let i = 0, a = new Set, o = new Set, l = new Map;
    de(s, (c, h) => { h & U.InChildOperation || (c instanceof Xt ? (a.has(c.xref) || (a.add(c.xref), l.set(c.xref, `tmp_${e}_${i++}`)), Uh(l, c)) : c instanceof Bn && (r.get(c.xref) === c && (o.add(c.xref), i--), Uh(l, c))); }), t.push(...Array.from(new Set(l.values())).map(c => ot(new he(c)))), e++, s.kind === u.Listener || s.kind === u.Animation || s.kind === u.AnimationListener || s.kind === u.TwoWayListener ? s.handlerOps.prepend(Mr(s.handlerOps)) : s.kind === u.RepeaterCreate && s.trackByOps !== null && s.trackByOps.prepend(Mr(s.trackByOps));
} return t; }
function Uh(n, e) { let t = n.get(e.xref); if (t === void 0)
    throw new Error(`Found xref with unassigned name: ${e.xref}`); e.name = t; }
function C2(n) { for (let e of n.units)
    for (let t of e.create)
        if (t.kind === u.RepeaterCreate)
            if (t.track instanceof wt && t.track.name === "$index")
                t.trackByFn = y(f.repeaterTrackByIndex);
            else if (t.track instanceof wt && t.track.name === "$item")
                t.trackByFn = y(f.repeaterTrackByIdentity);
            else if (A2(n.root.xref, t.track))
                t.usesComponentInstance = !0, t.track.receiver.receiver.view === e.xref ? t.trackByFn = t.track.receiver : (t.trackByFn = y(f.componentInstance).callFn([]).prop(t.track.receiver.name), t.track = t.trackByFn);
            else {
                t.track = _(t.track, r => { if (r instanceof Es || r instanceof Ai)
                    throw new Error("Illegal State: Pipes are not allowed in this context"); return r instanceof Pn ? (t.usesComponentInstance = !0, new ql(r.view)) : r; }, U.None);
                let s = new E;
                s.push(ot(new me(t.track, t.track.sourceSpan))), t.trackByOps = s;
            } }
function A2(n, e) { if (!(e instanceof He) || e.args.length === 0 || e.args.length > 2 || !(e.receiver instanceof Ye && e.receiver.receiver instanceof Pn) || e.receiver.receiver.view !== n)
    return !1; let [t, s] = e.args; return !(t instanceof wt) || t.name !== "$index" ? !1 : e.args.length === 1 ? !0 : !(!(s instanceof wt) || s.name !== "$item"); }
function k2(n) { for (let e of n.units)
    for (let t of e.create)
        t.kind === u.RepeaterCreate && (t.track = _(t.track, s => { if (s instanceof _e) {
            if (t.varNames.$index.has(s.name))
                return D("$index");
            if (s.name === t.varNames.$implicit)
                return D("$item");
        } return s; }, U.None)); }
function _2(n) { for (let e of n.units)
    for (let t of e.create)
        t.kind === u.TwoWayListener && ce(t, s => { if (!(s instanceof Va))
            return s; let { target: r, value: i } = s; if (r instanceof Ye || r instanceof Vt)
            return Ph(r, i).or(r.set(i)); if (r instanceof nn)
            return Ph(r, i); throw new Error("Unsupported expression in two-way action binding."); }, U.InChildOperation); }
function b2(n) { for (let e of n.units) {
    let t = 0;
    for (let i of e.ops())
        Do(i) && (t += T2(i));
    let s = i => { Gt(i) && (i instanceof ws || (Xu(i) && (i.varOffset = t), Do(i) && (t += Hh(i)))); }, r = i => { !Gt(i) || !(i instanceof ws) || (Xu(i) && (i.varOffset = t), Do(i) && (t += Hh(i))); };
    for (let i of e.create)
        de(i, s);
    for (let i of e.update)
        de(i, s);
    for (let i of e.create)
        de(i, r);
    for (let i of e.update)
        de(i, r);
    e.vars = t;
} if (n instanceof bi)
    for (let e of n.units)
        for (let t of e.create) {
            if (t.kind !== u.Template && t.kind !== u.RepeaterCreate && t.kind !== u.ConditionalCreate && t.kind !== u.ConditionalBranchCreate)
                continue;
            let s = n.views.get(t.xref);
            t.vars = s.vars;
        } }
function T2(n) { let e; switch (n.kind) {
    case u.Attribute: return e = 1, n.expression instanceof le && !I2(n.expression) && (e += n.expression.expressions.length), e;
    case u.Property:
    case u.DomProperty: return e = 1, n.expression instanceof le && (e += n.expression.expressions.length), e;
    case u.Control: return 2;
    case u.TwoWayProperty: return 1;
    case u.StyleProp:
    case u.ClassProp:
    case u.StyleMap:
    case u.ClassMap: return e = 2, n.expression instanceof le && (e += n.expression.expressions.length), e;
    case u.InterpolateText: return n.interpolation.expressions.length;
    case u.I18nExpression:
    case u.Conditional:
    case u.DeferWhen:
    case u.StoreLet: return 1;
    case u.RepeaterCreate: return n.emptyView ? 1 : 0;
    default: throw new Error(`Unhandled op: ${u[n.kind]}`);
} }
function Hh(n) { switch (n.kind) {
    case N.PureFunctionExpr: return 1 + n.args.length;
    case N.PipeBinding: return 1 + n.args.length;
    case N.PipeBindingVariadic: return 1 + n.numArgs;
    case N.StoreLet:
    case N.ArrowFunction: return 1;
    default: throw new Error(`AssertionError: unhandled ConsumesVarsTrait expression ${n.constructor.name}`);
} }
function I2(n) { return !(n.expressions.length !== 1 || n.strings.length !== 2 || n.strings[0] !== "" || n.strings[1] !== ""); }
function N2(n) { for (let e of n.units) {
    for (let t of e.functions)
        Er(t.ops);
    Er(e.create), Er(e.update);
    for (let t of e.create)
        t.kind === u.Listener || t.kind === u.Animation || t.kind === u.AnimationListener || t.kind === u.TwoWayListener ? Er(t.handlerOps) : t.kind === u.RepeaterCreate && t.trackByOps !== null && Er(t.trackByOps);
    for (let t of e.functions)
        Sr(t.ops, null), Wh(t.ops);
    for (let t of e.create)
        t.kind === u.Listener || t.kind === u.Animation || t.kind === u.AnimationListener || t.kind === u.TwoWayListener ? (Sr(t.handlerOps, Zi), Wh(t.handlerOps)) : t.kind === u.RepeaterCreate && t.trackByOps !== null && Sr(t.trackByOps, Zi);
    Sr(e.create, Zi), Sr(e.update, Zi);
} }
var Se = (function (n) { return n[n.None = 0] = "None", n[n.ViewContextRead = 1] = "ViewContextRead", n[n.ViewContextWrite = 2] = "ViewContextWrite", n[n.SideEffectful = 4] = "SideEffectful", n; })(Se || {});
function Zi(n) { return !(n & U.InArrowFunctionOperation); }
function Er(n) { let e = new Map; for (let t of n)
    t.kind === u.Variable && t.flags & ft.AlwaysInline && (de(t, s => { if (Gt(s) && du(s) !== Se.None)
        throw new Error("AssertionError: A context-sensitive variable was marked AlwaysInline"); }), e.set(t.xref, t)), ce(t, s => s instanceof nn && e.has(s.xref) ? e.get(s.xref).initializer.clone() : s, U.None); for (let t of e.values())
    E.remove(t); }
function Sr(n, e) { let t = new Map, s = new Map, r = new Set, i = new Map; for (let c of n) {
    if (c.kind === u.Variable) {
        if (t.has(c.xref) || s.has(c.xref))
            throw new Error(`Should not see two declarations of the same variable: ${c.xref}`);
        t.set(c.xref, c), s.set(c.xref, 0);
    }
    i.set(c, D2(c, e)), P2(c, s, r, e);
} let a = !1; for (let c of n.reversed()) {
    let h = i.get(c);
    if (c.kind === u.Variable && s.get(c.xref) === 0) {
        if (a && h.fences & Se.ViewContextWrite || h.fences & Se.SideEffectful) {
            let p = ot(c.initializer.toStmt());
            i.set(p, h), E.replace(c, p);
        }
        else
            L2(c, s), E.remove(c);
        i.delete(c), t.delete(c.xref), s.delete(c.xref);
        continue;
    }
    h.fences & Se.ViewContextRead && (a = !0);
} let o = []; for (let [c, h] of s) {
    let m = !!(t.get(c).flags & ft.AlwaysInline);
    h !== 1 || m || r.has(c) || o.push(c);
} let l; for (; l = o.pop();) {
    let c = t.get(l), h = i.get(c);
    if (!!(c.flags & ft.AlwaysInline))
        throw new Error("AssertionError: Found an 'AlwaysInline' variable after the always inlining pass.");
    for (let m = c.next; m.kind !== u.ListEnd; m = m.next) {
        let v = i.get(m);
        if (v.variablesUsed.has(l)) {
            if (!M2(c, m))
                break;
            if (B2(l, c.initializer, m, h.fences)) {
                v.variablesUsed.delete(l);
                for (let w of h.variablesUsed)
                    v.variablesUsed.add(w);
                v.fences |= h.fences, t.delete(l), s.delete(l), i.delete(c), E.remove(c);
            }
            break;
        }
        if (!Yf(v.fences, h.fences))
            break;
    }
} }
function du(n) { switch (n.kind) {
    case N.NextContext: return Se.ViewContextRead | Se.ViewContextWrite;
    case N.RestoreView: return Se.ViewContextRead | Se.ViewContextWrite | Se.SideEffectful;
    case N.StoreLet: return Se.SideEffectful;
    case N.Reference:
    case N.ContextLetReference: return Se.ViewContextRead;
    default: return Se.None;
} }
function D2(n, e) { let t = Se.None, s = new Set; return de(n, (r, i) => { !Gt(r) || e !== null && !e(i) || (r.kind === N.ReadVariable ? s.add(r.xref) : t |= du(r)); }), { fences: t, variablesUsed: s }; }
function P2(n, e, t, s) { de(n, (r, i) => { if (!Gt(r) || s !== null && !s(i) || r.kind !== N.ReadVariable)
    return; let a = e.get(r.xref); a !== void 0 && (e.set(r.xref, a + 1), i & U.InChildOperation && t.add(r.xref)); }); }
function L2(n, e) { de(n, t => { if (!Gt(t) || t.kind !== N.ReadVariable)
    return; let s = e.get(t.xref); if (s !== void 0) {
    if (s === 0)
        throw new Error(`Inaccurate variable count: ${t.xref} - found another read but count is already 0`);
    e.set(t.xref, s - 1);
} }); }
function Yf(n, e) { if (n & Se.ViewContextWrite) {
    if (e & Se.ViewContextRead)
        return !1;
}
else if (n & Se.ViewContextRead && e & Se.ViewContextWrite)
    return !1; return !0; }
function B2(n, e, t, s) { let r = !1, i = !0; return ce(t, (a, o) => { if (!Gt(a) || r || !i)
    return a; if (o & U.InChildOperation && s & Se.ViewContextRead)
    return a; switch (a.kind) {
    case N.ReadVariable:
        if (a.xref === n)
            return r = !0, e;
        break;
    default:
        let l = du(a);
        i = i && Yf(l, s);
        break;
} return a; }, U.None), r; }
function M2(n, e) { switch (n.variable.kind) {
    case Te.Identifier: return n.initializer instanceof wt && n.initializer.name === at;
    case Te.Context: return e.kind === u.Variable;
    default: return !0;
} }
function Wh(n) { let e = n.head.next, t = n.tail.prev; e !== null && t !== null && e.next === t && e.kind === u.Statement && e.statement instanceof Ie && e.statement.expr instanceof Ci && t.kind === u.Statement && t.statement instanceof me && t.statement.value instanceof Oa && (E.remove(e), t.statement.value = t.statement.value.expr); }
function R2(n) { for (let e of n.units) {
    let t = null, s = null;
    for (let r of e.create)
        switch (r.kind) {
            case u.I18nStart:
                t = r;
                break;
            case u.I18nEnd:
                t = null;
                break;
            case u.IcuStart:
                t === null && (s = n.allocateXrefId(), E.insertBefore(xo(s, r.message, void 0, null), r));
                break;
            case u.IcuEnd:
                s !== null && (E.insertAfter(yo(s, null), r), s = null);
                break;
        }
} }
function F2(n) { for (let e of n.units) {
    for (let t of e.create)
        t.kind !== u.Animation && t.kind !== u.AnimationListener && t.kind !== u.Listener && t.kind !== u.TwoWayListener && jh(e, t);
    for (let t of e.update)
        jh(e, t);
} }
function jh(n, e) { ce(e, (t, s) => { if (!(t instanceof $n) || s & U.InChildOperation)
    return t; if (Array.isArray(t.body))
    throw new Error("AssertionError: unexpected multi-line arrow function"); let r = new Hl(t.params, t.body); return n.functions.add(r), r; }, U.None); }
var $2 = new Set(["formField"]);
function O2(n) { for (let e of n.units)
    V2(e); }
function V2(n) { for (let e of n.update)
    e.kind === u.Property && $2.has(e.name) && W2(n, e); }
var q2 = new Set([u.Container, u.ContainerStart, u.ContainerEnd, u.Element, u.ElementStart, u.ElementEnd, u.Template]);
function U2(n) { return q2.has(n.kind); }
function H2(n, e) { let t = null; for (let s of n.create)
    !U2(s) || s.xref !== e || (t = s); return t; }
function W2(n, e) { let t = H2(n, e.target); if (t === null)
    throw new Error(`No create instruction found for control target ${e.target}`); let s = Sv(e.sourceSpan); E.insertAfter(s, t), E.insertAfter(ev(e.target, e.sourceSpan), e); }
var j2 = [{ kind: A.Tmpl, fn: cS }, { kind: A.Both, fn: yS }, { kind: A.Host, fn: Aw }, { kind: A.Tmpl, fn: zE }, { kind: A.Tmpl, fn: gS }, { kind: A.Tmpl, fn: R2 }, { kind: A.Both, fn: zv }, { kind: A.Both, fn: x2 }, { kind: A.Both, fn: Dv }, { kind: A.Tmpl, fn: O2 }, { kind: A.Both, fn: Uv }, { kind: A.Both, fn: Tv }, { kind: A.Tmpl, fn: jv }, { kind: A.Both, fn: XE }, { kind: A.Tmpl, fn: Jx }, { kind: A.Both, fn: Bv }, { kind: A.Both, fn: lS }, { kind: A.Tmpl, fn: Mv }, { kind: A.Tmpl, fn: pS }, { kind: A.Tmpl, fn: Gv }, { kind: A.Tmpl, fn: mS }, { kind: A.Both, fn: F2 }, { kind: A.Both, fn: ES }, { kind: A.Tmpl, fn: Sw }, { kind: A.Tmpl, fn: Ew }, { kind: A.Tmpl, fn: xw }, { kind: A.Tmpl, fn: f2 }, { kind: A.Both, fn: yv }, { kind: A.Both, fn: r2 }, { kind: A.Tmpl, fn: k2 }, { kind: A.Tmpl, fn: e2 }, { kind: A.Both, fn: c2 }, { kind: A.Tmpl, fn: Xv }, { kind: A.Tmpl, fn: _2 }, { kind: A.Tmpl, fn: C2 }, { kind: A.Both, fn: n2 }, { kind: A.Both, fn: p2 }, { kind: A.Tmpl, fn: WE }, { kind: A.Both, fn: Kv }, { kind: A.Both, fn: v2 }, { kind: A.Both, fn: y2 }, { kind: A.Both, fn: N2 }, { kind: A.Both, fn: m2 }, { kind: A.Tmpl, fn: HE }, { kind: A.Tmpl, fn: Wv }, { kind: A.Tmpl, fn: t2 }, { kind: A.Tmpl, fn: _v }, { kind: A.Tmpl, fn: Av }, { kind: A.Tmpl, fn: d2 }, { kind: A.Tmpl, fn: i2 }, { kind: A.Tmpl, fn: a2 }, { kind: A.Tmpl, fn: dw }, { kind: A.Tmpl, fn: $E }, { kind: A.Tmpl, fn: l2 }, { kind: A.Tmpl, fn: yw }, { kind: A.Both, fn: Ov }, { kind: A.Tmpl, fn: Kx }, { kind: A.Both, fn: b2 }, { kind: A.Tmpl, fn: ww }, { kind: A.Both, fn: YE }, { kind: A.Tmpl, fn: s2 }, { kind: A.Tmpl, fn: JE }, { kind: A.Tmpl, fn: eS }, { kind: A.Tmpl, fn: Jv }, { kind: A.Tmpl, fn: bv }, { kind: A.Tmpl, fn: nS }, { kind: A.Both, fn: wS }, { kind: A.Both, fn: zx }, { kind: A.Both, fn: Lv }];
function Qf(n, e) { for (let t of j2)
    (t.kind === e || t.kind === A.Both) && t.fn(n); }
function z2(n, e) { let t = Jf(n.root); return Zf(n.root, e), t; }
function Zf(n, e) { for (let t of n.job.units) {
    if (t.parent !== n.xref)
        continue;
    Zf(t, e);
    let s = Jf(t);
    e.statements.push(s.toDeclStmt(s.name));
} }
function Jf(n) { if (n.fnName === null)
    throw new Error(`AssertionError: view ${n.xref} is unnamed`); let e = []; for (let i of n.create) {
    if (i.kind !== u.Statement)
        throw new Error(`AssertionError: expected all create ops to have been compiled, but got ${u[i.kind]}`);
    e.push(i.statement);
} let t = []; for (let i of n.update) {
    if (i.kind !== u.Statement)
        throw new Error(`AssertionError: expected all update ops to have been compiled, but got ${u[i.kind]}`);
    t.push(i.statement);
} let s = to(1, e), r = to(2, t); return an([new J(or, Cn), new J(at, re)], [...s, ...r], void 0, void 0, n.fnName); }
function to(n, e) { return e.length === 0 ? [] : [$i(new z(x.BitwiseAnd, D(or), d(n)), e)]; }
function G2(n) { if (n.root.fnName === null)
    throw new Error("AssertionError: host binding function is unnamed"); let e = []; for (let i of n.root.create) {
    if (i.kind !== u.Statement)
        throw new Error(`AssertionError: expected all create ops to have been compiled, but got ${u[i.kind]}`);
    e.push(i.statement);
} let t = []; for (let i of n.root.update) {
    if (i.kind !== u.Statement)
        throw new Error(`AssertionError: expected all update ops to have been compiled, but got ${u[i.kind]}`);
    t.push(i.statement);
} if (e.length === 0 && t.length === 0)
    return null; let s = to(1, e), r = to(2, t); return an([new J(or, Cn), new J(at, re)], [...s, ...r], void 0, void 0, n.root.fnName); }
var rs = new rr, is = "ng-template", X2 = "animate.";
function aa(n) { return n instanceof Be; }
function Y2(n) { return aa(n) && n.nodes.length === 1 && n.nodes[0] instanceof In; }
function Q2(n, e, t, s, r, i, a, o, l, c) { let h = new bi(n, t, s, r, i, a, o, l, c); return cn(h.root, e), h; }
function Z2(n, e, t) { let s = new za(n.componentName, t, We.DomOnly); for (let r of n.properties ?? []) {
    let i = b.Property;
    r.name.startsWith("attr.") && (r.name = r.name.substring(5), i = b.Attribute), r.isLegacyAnimation && (i = b.LegacyAnimation), r.isAnimation && (i = b.Animation);
    let a = e.calcPossibleSecurityContexts(n.componentSelector, r.name, i === b.Attribute).filter(o => o !== j.NONE);
    J2(s, r, i, a);
} for (let [r, i] of Object.entries(n.attributes) ?? []) {
    let a = e.calcPossibleSecurityContexts(n.componentSelector, r, !0).filter(o => o !== j.NONE);
    K2(s, r, i, a);
} for (let r of n.events ?? [])
    ey(s, r); return s; }
function J2(n, e, t, s) { let r, i = e.expression.ast; i instanceof Oi ? r = new le(i.strings, i.expressions.map(a => V(a, n, e.sourceSpan)), []) : r = V(i, n, e.sourceSpan), n.root.update.push(vs(n.root.xref, t, e.name, r, null, s, !1, !1, null, null, e.sourceSpan)); }
function K2(n, e, t, s) { let r = vs(n.root.xref, b.Attribute, e, t, null, s, !0, !1, null, null, t.sourceSpan); n.root.update.push(r); }
function ey(n, e) { let t; if (e.type === Ve.Animation)
    t = Af(n.root.xref, new Ne, e.name, null, Li(n.root, e.handler, e.handlerSpan), e.name.endsWith("enter") ? "enter" : "leave", e.targetOrPhase, !0, e.sourceSpan);
else {
    let [s, r] = e.type !== Ve.LegacyAnimation ? [null, e.targetOrPhase] : [e.targetOrPhase, null];
    t = hu(n.root.xref, new Ne, e.name, null, Li(n.root, e.handler, e.handlerSpan), s, r, !0, e.sourceSpan);
} n.root.create.push(t); }
function cn(n, e) { for (let t of e)
    if (t instanceof Ht)
        ty(n, t);
    else if (t instanceof rt)
        ny(n, t);
    else if (t instanceof Zs)
        sy(n, t);
    else if (t instanceof Qn)
        Kf(n, t, null);
    else if (t instanceof Xs)
        ed(n, t, null);
    else if (t instanceof Ta)
        ry(n, t);
    else if (t instanceof ba)
        iy(n, t);
    else if (t instanceof ds)
        ay(n, t);
    else if (t instanceof Hp)
        ly(n, t);
    else if (t instanceof Qs)
        cy(n, t);
    else if (t instanceof Jc)
        hy(n, t);
    else if (!(t instanceof Ir))
        throw new Error(`Unsupported template node: ${t.constructor.name}`); }
function ty(n, e) { if (e.i18n !== void 0 && !(e.i18n instanceof Be || e.i18n instanceof jt))
    throw Error(`Unhandled i18n metadata type for element: ${e.i18n.constructor.name}`); let t = n.job.allocateXrefId(), [s, r] = Le(e.name), i = nv(r, t, Nf(s), e.i18n instanceof jt ? e.i18n : void 0, e.startSourceSpan, e.sourceSpan); n.create.push(i), fy(n, i, e), sd(i, e); let a = null; e.i18n instanceof Be && (a = n.job.allocateXrefId(), n.create.push(xo(a, e.i18n, void 0, e.startSourceSpan))), cn(n, e.children); let o = rv(t, e.endSourceSpan ?? e.startSourceSpan); n.create.push(o), a !== null && E.insertBefore(yo(a, e.endSourceSpan ?? e.startSourceSpan), o); }
function ny(n, e) { if (e.i18n !== void 0 && !(e.i18n instanceof Be || e.i18n instanceof jt))
    throw Error(`Unhandled i18n metadata type for template: ${e.i18n.constructor.name}`); let t = n.job.allocateView(n.xref), s = e.tagName, r = ""; e.tagName && ([r, s] = Le(e.tagName)); let i = e.i18n instanceof jt ? e.i18n : void 0, a = Nf(r), o = s === null ? "" : $v(s, a), l = py(e) ? Xe.NgTemplate : Xe.Structural, c = Sf(t.xref, l, s, o, a, i, e.startSourceSpan, e.sourceSpan); n.create.push(c), dy(n, c, e, l), sd(c, e), cn(t, e.children); for (let { name: h, value: p } of e.variables)
    t.contextVariables.set(h, p !== "" ? p : "$implicit"); if (l === Xe.NgTemplate && e.i18n instanceof Be) {
    let h = n.job.allocateXrefId();
    E.insertAfter(xo(h, e.i18n, void 0, e.startSourceSpan), t.create.head), E.insertBefore(yo(h, e.endSourceSpan ?? e.startSourceSpan), t.create.tail);
} }
function sy(n, e) { if (e.i18n !== void 0 && !(e.i18n instanceof jt))
    throw Error(`Unhandled i18n metadata type for element: ${e.i18n.constructor.name}`); let t = null; e.children.some(i => !(i instanceof wo) && (!(i instanceof Qn) || i.value.trim().length > 0)) && (t = n.job.allocateView(n.xref), cn(t, e.children)); let s = n.job.allocateXrefId(), r = pv(s, e.selector, e.i18n, t?.xref ?? null, e.sourceSpan); for (let i of e.attributes) {
    let a = rs.securityContext(e.name, i.name, !0);
    n.update.push(vs(r.xref, b.Attribute, i.name, d(i.value), null, a, !0, !1, null, Kt(i.i18n), i.sourceSpan));
} n.create.push(r); }
function Kf(n, e, t) { n.create.push(Cf(n.job.allocateXrefId(), e.value, t, e.sourceSpan)); }
function ed(n, e, t) { let s = e.value; if (s instanceof Ge && (s = s.ast), !(s instanceof Oi))
    throw new Error(`AssertionError: expected Interpolation for BoundText node, got ${s.constructor.name}`); if (e.i18n !== void 0 && !(e.i18n instanceof it))
    throw Error(`Unhandled i18n metadata type for text interpolation: ${e.i18n?.constructor.name}`); let r = e.i18n instanceof it ? e.i18n.children.filter(a => a instanceof gt).map(a => a.name) : []; if (r.length > 0 && r.length !== s.expressions.length)
    throw Error(`Unexpected number of i18n placeholders (${s.expressions.length}) for BoundText with ${s.expressions.length} expressions`); let i = n.job.allocateXrefId(); n.create.push(Cf(i, "", t, e.sourceSpan)), n.update.push(Ug(i, new le(s.strings, s.expressions.map(a => V(a, n.job, null)), r), e.sourceSpan)); }
function ry(n, e) { let t = null, s = []; for (let r = 0; r < e.branches.length; r++) {
    let i = e.branches[r], a = n.job.allocateView(n.xref), o = no(n, a.xref, i);
    i.expressionAlias !== null && a.contextVariables.set(i.expressionAlias.name, bf);
    let l;
    if (i.i18n !== void 0) {
        if (!(i.i18n instanceof zt))
            throw Error(`Unhandled i18n metadata type for if block: ${i.i18n?.constructor.name}`);
        l = i.i18n;
    }
    let h = (r === 0 ? xf : yf)(a.xref, Xe.Block, o, "Conditional", ve.HTML, l, i.startSourceSpan, i.sourceSpan);
    n.create.push(h), t === null && (t = a.xref);
    let p = i.expression ? V(i.expression, n.job, null) : null, m = new Ua(p, h.xref, h.handle, i.expressionAlias);
    s.push(m), cn(a, i.children);
} n.update.push(vf(t, null, s, e.sourceSpan)); }
function iy(n, e) { if (e.groups.length === 0)
    return; let t = null, s = []; for (let r = 0; r < e.groups.length; r++) {
    let i = e.groups[r], a = n.job.allocateView(n.xref), o = no(n, a.xref, i), l;
    if (i.i18n !== void 0) {
        if (!(i.i18n instanceof zt))
            throw Error(`Unhandled i18n metadata type for switch block: ${i.i18n?.constructor.name}`);
        l = i.i18n;
    }
    let h = (r === 0 ? xf : yf)(a.xref, Xe.Block, o, "Case", ve.HTML, l, i.startSourceSpan, i.sourceSpan);
    n.create.push(h), t === null && (t = a.xref);
    for (let p of i.cases) {
        let m = p.expression ? V(p.expression, n.job, e.startSourceSpan) : null, v = new Ua(m, h.xref, h.handle);
        s.push(v);
    }
    cn(a, i.children);
} n.update.push(vf(t, V(e.expression, n.job, null), s, e.sourceSpan)); }
function Ji(n, e, t, s, r) { if (t !== void 0 && !(t instanceof zt))
    throw Error("Unhandled i18n metadata type for defer block"); if (s === void 0)
    return null; let i = n.job.allocateView(n.xref); cn(i, s); let a = Sf(i.xref, Xe.Block, null, `Defer${e}`, ve.HTML, t, r, r); return n.create.push(a), a; }
function ay(n, e) { let t = null; if (n.job.deferMeta.mode === 0) {
    if (!n.job.deferMeta.blocks.has(e))
        throw new Error("AssertionError: unable to find a dependency function for this deferred block");
    t = n.job.deferMeta.blocks.get(e) ?? null;
} let s = Ji(n, "", e.i18n, e.children, e.sourceSpan), r = Ji(n, "Loading", e.loading?.i18n, e.loading?.children, e.loading?.sourceSpan), i = Ji(n, "Placeholder", e.placeholder?.i18n, e.placeholder?.children, e.placeholder?.sourceSpan), a = Ji(n, "Error", e.error?.i18n, e.error?.children, e.error?.sourceSpan), o = n.job.allocateXrefId(), l = fv(o, s.xref, s.handle, t, n.job.allDeferrableDepsFn, e.sourceSpan); l.placeholderView = i?.xref ?? null, l.placeholderSlot = i?.handle ?? null, l.loadingSlot = r?.handle ?? null, l.errorSlot = a?.handle ?? null, l.placeholderMinimumTime = e.placeholder?.minimumTime ?? null, l.loadingMinimumTime = e.loading?.minimumTime ?? null, l.loadingAfterTime = e.loading?.afterTime ?? null, l.flags = oy(e), n.create.push(l); let c = [], h = []; Fo("hydrate", e.hydrateTriggers, c, h, n, o), Fo("none", e.triggers, c, h, n, o), Fo("prefetch", e.prefetchTriggers, c, h, n, o), c.some(m => m.modifier === "none") || h.some(m => m.modifier === "none") || c.push(dn(o, { kind: ee.Idle }, "none", null)), n.create.push(c), n.update.push(h); }
function oy(n) { return Object.keys(n.hydrateTriggers).length > 0 ? 1 : null; }
function Fo(n, e, t, s, r, i) { if (e.idle !== void 0) {
    let a = dn(i, { kind: ee.Idle }, n, e.idle.sourceSpan);
    t.push(a);
} if (e.immediate !== void 0) {
    let a = dn(i, { kind: ee.Immediate }, n, e.immediate.sourceSpan);
    t.push(a);
} if (e.timer !== void 0) {
    let a = dn(i, { kind: ee.Timer, delay: e.timer.delay }, n, e.timer.sourceSpan);
    t.push(a);
} if (e.hover !== void 0) {
    let a = dn(i, { kind: ee.Hover, targetName: e.hover.reference, targetXref: null, targetSlot: null, targetView: null, targetSlotViewSteps: null }, n, e.hover.sourceSpan);
    t.push(a);
} if (e.interaction !== void 0) {
    let a = dn(i, { kind: ee.Interaction, targetName: e.interaction.reference, targetXref: null, targetSlot: null, targetView: null, targetSlotViewSteps: null }, n, e.interaction.sourceSpan);
    t.push(a);
} if (e.viewport !== void 0) {
    let a = dn(i, { kind: ee.Viewport, targetName: e.viewport.reference, targetXref: null, targetSlot: null, targetView: null, targetSlotViewSteps: null, options: e.viewport.options ? V(e.viewport.options, r.job, e.viewport.sourceSpan) : null }, n, e.viewport.sourceSpan);
    t.push(a);
} if (e.never !== void 0) {
    let a = dn(i, { kind: ee.Never }, n, e.never.sourceSpan);
    t.push(a);
} if (e.when !== void 0) {
    if (e.when.value instanceof Oi)
        throw new Error("Unexpected interpolation in defer block when trigger");
    let a = Zg(i, V(e.when.value, r.job, e.when.sourceSpan), n, e.when.sourceSpan);
    s.push(a);
} }
function ly(n, e) { if (e.i18n instanceof Be && Y2(e.i18n)) {
    let t = n.job.allocateXrefId();
    n.create.push(gv(t, e.i18n, Gp(e.i18n).name, null));
    for (let [s, r] of Object.entries(S(S({}, e.vars), e.placeholders)))
        r instanceof Xs ? ed(n, r, s) : Kf(n, r, s);
    n.create.push(vv(t));
}
else
    throw Error(`Unhandled i18n metadata type for ICU: ${e.i18n?.constructor.name}`); }
function cy(n, e) { let t = n.job.allocateView(n.xref), s = `\u0275$index_${t.xref}`, r = `\u0275$count_${t.xref}`, i = new Set; t.contextVariables.set(e.item.name, e.item.value); for (let k of e.contextVariables)
    k.value === "$index" && i.add(k.name), k.name === "$index" ? t.contextVariables.set("$index", k.value).set(s, k.value) : k.name === "$count" ? t.contextVariables.set("$count", k.value).set(r, k.value) : t.aliases.add({ kind: Te.Alias, name: null, identifier: k.name, expression: uy(k, s, r) }); let a = we(e.trackBy.span, e.sourceSpan), o = V(e.trackBy, n.job, a); cn(t, e.children); let l = null, c = null; e.empty !== null && (l = n.job.allocateView(n.xref), cn(l, e.empty.children), c = no(n, l.xref, e.empty)); let h = { $index: i, $implicit: e.item.name }; if (e.i18n !== void 0 && !(e.i18n instanceof zt))
    throw Error("AssertionError: Unhandled i18n metadata type or @for"); if (e.empty?.i18n !== void 0 && !(e.empty.i18n instanceof zt))
    throw Error("AssertionError: Unhandled i18n metadata type or @empty"); let p = e.i18n, m = e.empty?.i18n, v = no(n, t.xref, e), w = sv(t.xref, l?.xref ?? null, v, o, h, c, p, m, e.startSourceSpan, e.sourceSpan); n.create.push(w); let C = V(e.expression, n.job, we(e.expression.span, e.sourceSpan)), T = Qg(w.xref, w.handle, C, e.sourceSpan); n.update.push(T); }
function uy(n, e, t) { switch (n.value) {
    case "$index": return new _e(e);
    case "$count": return new _e(t);
    case "$first": return new _e(e).identical(d(0));
    case "$last": return new _e(e).identical(new _e(t).minus(d(1)));
    case "$even": return new _e(e).modulo(d(2)).identical(d(0));
    case "$odd": return new _e(e).modulo(d(2)).notIdentical(d(0));
    default: throw new Error(`AssertionError: unknown @for loop variable ${n.value}`);
} }
function hy(n, e) { let t = n.job.allocateXrefId(); n.create.push(dv(t, e.name, e.sourceSpan)), n.update.push(Kg(t, e.name, V(e.value, n.job, e.valueSpan), e.sourceSpan)); }
function V(n, e, t) { if (n instanceof Ge)
    return V(n.ast, e, t); if (n instanceof $t)
    return n.receiver instanceof Ut ? new _e(n.name) : new Ye(V(n.receiver, e, t), n.name, null, we(n.span, t)); if (n instanceof zs) {
    if (n.receiver instanceof Ut)
        throw new Error("Unexpected ImplicitReceiver");
    return new He(V(n.receiver, e, t), n.args.map(s => V(s, e, t)), void 0, we(n.span, t));
}
else {
    if (n instanceof je)
        return d(n.value, void 0, we(n.span, t));
    if (n instanceof Fs)
        switch (n.operator) {
            case "+": return new rn(Vs.Plus, V(n.expr, e, t), void 0, we(n.span, t));
            case "-": return new rn(Vs.Minus, V(n.expr, e, t), void 0, we(n.span, t));
            default: throw new Error(`AssertionError: unknown unary operator ${n.operator}`);
        }
    else if (n instanceof Me) {
        let s = Rv.get(n.operation);
        if (s === void 0)
            throw new Error(`AssertionError: unknown binary operator ${n.operation}`);
        return new z(s, V(n.left, e, t), V(n.right, e, t), void 0, we(n.span, t));
    }
    else {
        if (n instanceof Gr)
            return new Pn(e.root.xref);
        if (n instanceof ps)
            return new Vt(V(n.receiver, e, t), V(n.key, e, t), void 0, we(n.span, t));
        if (n instanceof js)
            throw new Error("AssertionError: Chain in unknown context");
        if (n instanceof fs) {
            let s = n.keys.map((r, i) => { let a = V(n.values[i], e, t); return r.kind === "spread" ? new qt(a) : new us(r.key, a, r.quoted); });
            return new St(s, void 0, we(n.span, t));
        }
        else {
            if (n instanceof Qr)
                return new It(n.expressions.map(s => V(s, e, t)));
            if (n instanceof ma)
                return new Tt(V(n.condition, e, t), V(n.trueExp, e, t), V(n.falseExp, e, t), void 0, we(n.span, t));
            if (n instanceof ei)
                return V(n.expression, e, t);
            if (n instanceof ga)
                return new Es(e.allocateXrefId(), new Ne, n.name, [V(n.exp, e, t), ...n.args.map(s => V(s, e, t))]);
            if (n instanceof Yr)
                return new er(V(n.receiver, e, t), V(n.key, e, t), we(n.span, t));
            if (n instanceof Xr)
                return new Ks(V(n.receiver, e, t), n.name);
            if (n instanceof wa)
                return new Ss(V(n.receiver, e, t), n.args.map(s => V(s, e, t)));
            if (n instanceof De)
                return new ki(we(n.span, t));
            if (n instanceof Zr)
                return Bp(V(n.expression, e, t), we(n.span, t));
            if (n instanceof Jr)
                return ar(V(n.expression, e, t));
            if (n instanceof Kr)
                return new $r(V(n.expression, e, t), void 0, we(n.span, t));
            if (n instanceof ni)
                return zh(n, e, t);
            if (n instanceof ti)
                return new qs(V(n.tag, e, t), zh(n.template, e, t), void 0, we(n.span, t));
            if (n instanceof si)
                return new Et(V(n.expression, e, t), void 0, we(n.span, t));
            if (n instanceof xa)
                return new ls(n.body, n.flags, t);
            if (n instanceof va)
                return new An(V(n.expression, e, t));
            if (n instanceof Sa)
                return gy(ie(n.parameters.map(s => new J(s.name, re)), V(n.body, e, t)));
            throw new Error(`Unhandled expression type "${n.constructor.name}" in file "${t?.start.file.url}"`);
        }
    }
} }
function zh(n, e, t) { return new Hs(n.elements.map(s => new Or(s.text, we(s.span, t))), n.expressions.map(s => V(s, e, t)), we(n.span, t)); }
function pc(n, e, t, s) { let r; return e instanceof Oi ? r = new le(e.strings, e.expressions.map(i => V(i, n, null)), Object.keys(Kt(t)?.placeholders ?? {})) : e instanceof te ? r = V(e, n, null) : r = d(e), r; }
var td = new Map([[Y.Property, b.Property], [Y.TwoWay, b.TwoWayProperty], [Y.Attribute, b.Attribute], [Y.Class, b.ClassName], [Y.Style, b.StyleProperty], [Y.LegacyAnimation, b.LegacyAnimation], [Y.Animation, b.Animation]]);
function py(n) { return Le(n.tagName ?? "")[1] === is; }
function Kt(n) { if (n == null)
    return null; if (!(n instanceof Be))
    throw Error(`Expected i18n meta to be a Message, but got: ${n.constructor.name}`); return n; }
function fy(n, e, t) { let s = new Array, r = new Set; for (let i of t.attributes) {
    let [a, o] = Le(t.name), l = a;
    if (!a)
        switch (e.namespace) {
            case ve.SVG:
                l = Co;
                break;
            case ve.Math:
                l = Ao;
                break;
        }
    let c = rs.securityContext(l ? `:${l}:${o}` : o, i.name, !0);
    s.push(vs(e.xref, b.Attribute, i.name, pc(n.job, i.value, i.i18n), null, c, !0, !1, null, Kt(i.i18n), i.sourceSpan)), i.i18n && r.add(i.name);
} for (let i of t.inputs)
    r.has(i.name) && console.error(`On component ${n.job.componentName}, the binding ${i.name} is both an i18n attribute and a property. You may want to remove the property binding. This will become a compilation error in future versions of Angular.`), s.push(vs(e.xref, td.get(i.type), i.name, pc(n.job, Bi(i.value), i.i18n), i.unit, i.securityContext, !1, !1, null, Kt(i.i18n) ?? null, i.sourceSpan)); n.create.push(s.filter(i => i?.kind === u.ExtractedAttribute)), n.update.push(s.filter(i => i?.kind === u.Binding)); for (let i of t.outputs) {
    if (i.type === Ve.LegacyAnimation && i.phase === null)
        throw Error("Animation listener should have a phase");
    i.type === Ve.TwoWay ? n.create.push(kf(e.xref, e.handle, i.name, e.tag, nd(n, i.handler, i.handlerSpan), i.sourceSpan)) : i.type === Ve.Animation ? n.create.push(Af(e.xref, e.handle, i.name, e.tag, Li(n, i.handler, i.handlerSpan), i.name.endsWith("enter") ? "enter" : "leave", i.target, !1, i.sourceSpan)) : n.create.push(hu(e.xref, e.handle, i.name, e.tag, Li(n, i.handler, i.handlerSpan), i.phase, i.target, !1, i.sourceSpan));
} s.some(i => i?.i18nMessage) !== null && n.create.push(_f(n.job.allocateXrefId(), new Ne, e.xref)); }
function dy(n, e, t, s) { let r = new Array; for (let i of t.templateAttrs)
    if (i instanceof Ys) {
        let a = rs.securityContext(is, i.name, !0);
        r.push(Ki(n, e.xref, Y.Attribute, i.name, i.value, null, a, !0, s, Kt(i.i18n), i.sourceSpan));
    }
    else
        r.push(Ki(n, e.xref, i.type, i.name, Bi(i.value), i.unit, i.securityContext, !0, s, Kt(i.i18n), i.sourceSpan)); for (let i of t.attributes) {
    let a = rs.securityContext(is, i.name, !0);
    r.push(Ki(n, e.xref, Y.Attribute, i.name, i.value, null, a, !1, s, Kt(i.i18n), i.sourceSpan));
} for (let i of t.inputs)
    r.push(Ki(n, e.xref, i.type, i.name, Bi(i.value), i.unit, i.securityContext, !1, s, Kt(i.i18n), i.sourceSpan)); n.create.push(r.filter(i => i?.kind === u.ExtractedAttribute)), n.update.push(r.filter(i => i?.kind === u.Binding)); for (let i of t.outputs) {
    if (i.type === Ve.LegacyAnimation && i.phase === null)
        throw Error("Animation listener should have a phase");
    if (s === Xe.NgTemplate && (i.type === Ve.TwoWay ? n.create.push(kf(e.xref, e.handle, i.name, e.tag, nd(n, i.handler, i.handlerSpan), i.sourceSpan)) : n.create.push(hu(e.xref, e.handle, i.name, e.tag, Li(n, i.handler, i.handlerSpan), i.phase, i.target, !1, i.sourceSpan))), s === Xe.Structural && i.type !== Ve.LegacyAnimation) {
        let a = rs.securityContext(is, i.name, !1);
        n.create.push(dt(e.xref, b.Property, null, i.name, null, null, null, a));
    }
} r.some(i => i?.i18nMessage) !== null && n.create.push(_f(n.job.allocateXrefId(), new Ne, e.xref)); }
function Ki(n, e, t, s, r, i, a, o, l, c, h) { let p = typeof r == "string"; if (l === Xe.Structural) {
    if (!o)
        switch (t) {
            case Y.Property:
            case Y.Class:
            case Y.Style: return dt(e, b.Property, null, s, null, null, c, a);
            case Y.TwoWay: return dt(e, b.TwoWayProperty, null, s, null, null, c, a);
        }
    if (!p && (t === Y.Attribute || t === Y.LegacyAnimation || t === Y.Animation))
        return null;
} let m = td.get(t); return l === Xe.NgTemplate && (t === Y.Class || t === Y.Style || t === Y.Attribute && !p) && (m = b.Property), vs(e, m, s, pc(n.job, r, c), i, a, p, o, l, c, h); }
function Li(n, e, t) { e = Bi(e); let s = new Array, r = e instanceof js ? e.expressions : [e]; if (r.length === 0)
    throw new Error("Expected listener to have non-empty expression list."); let i = r.map(o => V(o, n.job, t)), a = i.pop(); return s.push(...i.map(o => ot(new Ie(o, o.sourceSpan)))), s.push(ot(new me(a, a.sourceSpan))), s; }
function nd(n, e, t) { e = Bi(e); let s = new Array; if (e instanceof js)
    if (e.expressions.length === 1)
        e = e.expressions[0];
    else
        throw new Error("Expected two-way listener to have a single expression."); let r = V(e, n.job, t), i = new _e("$event"), a = new Va(r, i); return s.push(ot(new Ie(a))), s.push(ot(new me(i))), s; }
function Bi(n) { return n instanceof Ge ? n.ast : n; }
function sd(n, e) { my(n.localRefs); for (let { name: t, value: s } of e.references)
    n.localRefs.push({ name: t, target: s }); }
function my(n) { if (!Array.isArray(n))
    throw new Error("AssertionError: expected an array"); }
function we(n, e) { if (e === null)
    return null; let t = e.start.moveBy(n.start), s = e.start.moveBy(n.end), r = e.fullStart.moveBy(n.start); return new B(t, s, r); }
function no(n, e, t) { let s = null; for (let r of t.children)
    if (!(r instanceof wo || r instanceof Jc)) {
        if (s !== null)
            return null;
        if (r instanceof Ht || r instanceof rt && r.tagName !== null)
            s = r;
        else
            return null;
    } if (s !== null) {
    for (let i of s.attributes)
        if (!i.name.startsWith(X2)) {
            let a = rs.securityContext(is, i.name, !0);
            n.update.push(vs(e, b.Attribute, i.name, d(i.value), null, a, !0, !1, null, Kt(i.i18n), i.sourceSpan));
        }
    for (let i of s.inputs)
        if (i.type !== Y.LegacyAnimation && i.type !== Y.Animation && i.type !== Y.Attribute) {
            let a = rs.securityContext(is, i.name, !0);
            n.create.push(dt(e, b.Property, null, i.name, null, null, null, a));
        }
    let r = s instanceof Ht ? s.name : s.tagName;
    return r === is ? null : r;
} return null; }
function gy(n) { let e = new Set(n.params.map(t => t.name)); return _(n, t => { if (t instanceof $n)
    for (let s of t.params)
        e.add(s.name);
else if (t instanceof _e && e.has(t.name))
    return D(t.name); return t; }, U.None); }
var rd = !1;
function Nk(n) { rd = n; }
function vy() { return rd; }
function so(n, e) { return $i(D(or).bitwiseAnd(d(n), null), e); }
function wy(n) { return (n.descendants ? 1 : 0) | (n.static ? 2 : 0) | (n.emitDistinctChangesOnly ? 4 : 0); }
function Ey(n, e) { if (Array.isArray(n.predicate)) {
    let t = [];
    return n.predicate.forEach(s => { let r = s.split(",").map(i => d(i.trim())); t.push(...r); }), e.getConstLiteral(q(t), !0);
}
else
    switch (n.predicate.forwardRef) {
        case 0:
        case 2: return n.predicate.expression;
        case 1: return y(f.resolveForwardRef).callFn([n.predicate.expression]);
    } }
function id(n, e, t) { let s = []; return t !== void 0 && s.push(...t), n.isSignal && s.push(new Ye(D(at), n.propertyName)), s.push(Ey(n, e), d(wy(n))), n.read && s.push(n.read), s; }
var mu = Symbol("queryAdvancePlaceholder");
function ad(n) { let e = [], t = 0, s = () => { t > 0 && (e.unshift(y(f.queryAdvance).callFn(t === 1 ? [] : [d(t)]).toStmt()), t = 0); }; for (let r = n.length - 1; r >= 0; r--) {
    let i = n[r];
    i === mu ? t++ : (s(), e.unshift(i));
} return s(), e; }
function Sy(n, e, t) { let s = [], r = [], i = Xp(c => r.push(c), su), a = null, o = null; n.forEach(c => { let h = id(c, e); if (c.isSignal ? (a ??= y(f.viewQuerySignal), a = a.callFn(h)) : (o ??= y(f.viewQuery), o = o.callFn(h)), c.isSignal) {
    r.push(mu);
    return;
} let p = i(), m = y(f.loadQuery).callFn([]), v = y(f.queryRefresh).callFn([p.set(m)]), w = D(at).prop(c.propertyName).set(c.first ? p.prop("first") : p); r.push(v.and(w).toStmt()); }), a !== null && s.push(new Ie(a)), o !== null && s.push(new Ie(o)); let l = t ? `${t}_Query` : null; return an([new J(or, Cn), new J(at, re)], [so(1, s), so(2, ad(r))], vt, null, l); }
function xy(n, e, t) { let s = [], r = [], i = Xp(c => r.push(c), su), a = null, o = null; for (let c of n) {
    let h = id(c, e, [D("dirIndex")]);
    if (c.isSignal ? (a ??= y(f.contentQuerySignal), a = a.callFn(h)) : (o ??= y(f.contentQuery), o = o.callFn(h)), c.isSignal) {
        r.push(mu);
        continue;
    }
    let p = i(), m = y(f.loadQuery).callFn([]), v = y(f.queryRefresh).callFn([p.set(m)]), w = D(at).prop(c.propertyName).set(c.first ? p.prop("first") : p);
    r.push(v.and(w).toStmt());
} a !== null && s.push(new Ie(a)), o !== null && s.push(new Ie(o)); let l = t ? `${t}_ContentQueries` : null; return an([new J(or, Cn), new J(at, re), new J("dirIndex", Cn)], [so(1, s), so(2, ad(r))], vt, null, l); }
var ro = class extends Bf {
    constructor() { super(ic); }
    parse(e, t, s) { return super.parse(e, t, s); }
}, ea = ".", yy = "attr", $o = "animate", Cy = "class", Ay = "style", ky = "*", Oo = "animate-", fc = class {
    _exprParser;
    _schemaRegistry;
    errors;
    constructor(e, t, s) { this._exprParser = e, this._schemaRegistry = t, this.errors = s; }
    createBoundHostProperties(e, t) { let s = []; for (let r of Object.keys(e)) {
        let i = e[r];
        typeof i == "string" ? this.parsePropertyBinding(r, i, !0, !1, t, t.start.offset, void 0, [], s, t) : this._reportError(`Value of the host property binding "${r}" needs to be a string representing an expression but got "${i}" (${typeof i})`, t);
    } return s; }
    createDirectiveHostEventAsts(e, t) { let s = []; for (let r of Object.keys(e)) {
        let i = e[r];
        typeof i == "string" ? this.parseEvent(r, i, !1, t, t, [], s, t) : this._reportError(`Value of the host listener "${r}" needs to be a string representing an expression but got "${i}" (${typeof i})`, t);
    } return s; }
    parseInterpolation(e, t, s) { let r = t.fullStart.offset; try {
        let i = this._exprParser.parseInterpolation(e, t, r, s);
        return i && this.errors.push(...i.errors), i;
    }
    catch (i) {
        return this._reportError(`${i}`, t), this._exprParser.wrapLiteralPrimitive("ERROR", t, r);
    } }
    parseInterpolationExpression(e, t) { let s = t.start.offset; try {
        let r = this._exprParser.parseInterpolationExpression(e, t, s);
        return r && this.errors.push(...r.errors), r;
    }
    catch (r) {
        return this._reportError(`${r}`, t), this._exprParser.wrapLiteralPrimitive("ERROR", t, s);
    } }
    parseInlineTemplateBinding(e, t, s, r, i, a, o, l) { let c = s.start.offset + ky.length, h = this._parseTemplateBindings(e, t, s, c, r); for (let p of h) {
        let m = pn(s, p.sourceSpan), v = p.key.source, w = pn(s, p.key.span);
        if (p instanceof ri) {
            let C = p.value ? p.value.source : "$implicit", T = p.value ? pn(s, p.value.span) : void 0;
            o.push(new fl(v, C, m, w, T));
        }
        else if (p.value) {
            let C = l ? m : s, T = pn(s, p.value.ast.sourceSpan);
            this._parsePropertyAst(v, p.value, !1, C, w, T, i, a);
        }
        else
            i.push([v, ""]), this.parseLiteralAttr(v, null, w, r, void 0, i, a, w);
    } }
    _parseTemplateBindings(e, t, s, r, i) { try {
        let a = this._exprParser.parseTemplateBindings(e, t, s, r, i);
        return a.errors.forEach(o => this.errors.push(o)), a.warnings.forEach(o => { this._reportError(o, s, wn.WARNING); }), a.templateBindings;
    }
    catch (a) {
        return this._reportError(`${a}`, s), [];
    } }
    parseLiteralAttr(e, t, s, r, i, a, o, l) { Vo(e) ? (e = e.substring(1), l !== void 0 && (l = pn(l, new nt(l.start.offset + 1, l.end.offset))), t && this._reportError('Assigning animation triggers via @prop="exp" attributes with an expression is invalid. Use property bindings (e.g. [@prop]="exp") or use an attribute without a value (e.g. @prop) instead.', s, wn.ERROR), this._parseLegacyAnimation(e, t, s, r, l, i, a, o)) : o.push(new Ls(e, this._exprParser.wrapLiteralPrimitive(t, "", r), Pt.LITERAL_ATTR, s, l, i)); }
    parsePropertyBinding(e, t, s, r, i, a, o, l, c, h) { e.length === 0 && this._reportError("Property name is missing in binding", i); let p = !1; e.startsWith(Oo) ? (p = !0, e = e.substring(Oo.length), h !== void 0 && (h = pn(h, new nt(h.start.offset + Oo.length, h.end.offset)))) : Vo(e) && (p = !0, e = e.substring(1), h !== void 0 && (h = pn(h, new nt(h.start.offset + 1, h.end.offset)))), p ? this._parseLegacyAnimation(e, t, i, a, h, o, l, c) : e.startsWith(`${$o}${ea}`) ? this._parseAnimation(e, this.parseBinding(t, s, o || i, a), i, h, o, l, c) : this._parsePropertyAst(e, this.parseBinding(t, s, o || i, a), r, i, h, o, l, c); }
    parsePropertyInterpolation(e, t, s, r, i, a, o, l) { let c = this.parseInterpolation(t, r || s, l); return c ? (this._parsePropertyAst(e, c, !1, s, o, r, i, a), !0) : !1; }
    _parsePropertyAst(e, t, s, r, i, a, o, l) { o.push([e, t.source]), l.push(new Ls(e, t, s ? Pt.TWO_WAY : Pt.DEFAULT, r, i, a)); }
    _parseAnimation(e, t, s, r, i, a, o) { a.push([e, t.source]), o.push(new Ls(e, t, Pt.ANIMATION, s, r, i)); }
    _parseLegacyAnimation(e, t, s, r, i, a, o, l) { e.length === 0 && this._reportError("Animation trigger is missing", s); let c = this.parseBinding(t || "undefined", !1, a || s, r); o.push([e, c.source]), l.push(new Ls(e, c, Pt.LEGACY_ANIMATION, s, i, a)); }
    parseBinding(e, t, s, r) { try {
        let i = t ? this._exprParser.parseSimpleBinding(e, s, r) : this._exprParser.parseBinding(e, s, r);
        return i && this.errors.push(...i.errors), i;
    }
    catch (i) {
        return this._reportError(`${i}`, s), this._exprParser.wrapLiteralPrimitive("ERROR", s, r);
    } }
    createBoundElementProperty(e, t, s = !1, r = !0) { if (t.isLegacyAnimation)
        return new Ca(t.name, Y.LegacyAnimation, j.NONE, t.expression, null, t.sourceSpan, t.keySpan, t.valueSpan); let i = null, a, o = null, l = t.name.split(ea), c; if (l.length > 1)
        if (l[0] == yy) {
            o = l.slice(1).join(ea), s || this._validatePropertyOrAttributeName(o, t.sourceSpan, !0), c = qo(this._schemaRegistry, e, o, !0);
            let h = o.indexOf(":");
            if (h > -1) {
                let p = o.substring(0, h), m = o.substring(h + 1);
                o = ia(p, m);
            }
            a = Y.Attribute;
        }
        else
            l[0] == Cy ? (o = l[1], a = Y.Class, c = [j.NONE]) : l[0] == Ay ? (i = l.length > 2 ? l[2] : null, o = l[1], a = Y.Style, c = [j.STYLE]) : l[0] == $o && (o = t.name, a = Y.Animation, c = [j.NONE]); if (o === null) {
        let h = this._schemaRegistry.getMappedPropName(t.name);
        o = r ? h : t.name, c = qo(this._schemaRegistry, e, h, !1), a = t.type === Pt.TWO_WAY ? Y.TwoWay : Y.Property, s || this._validatePropertyOrAttributeName(h, t.sourceSpan, !1);
    } return new Ca(o, a, c[0], t.expression, i, t.sourceSpan, t.keySpan, t.valueSpan); }
    parseEvent(e, t, s, r, i, a, o, l) { e.length === 0 && this._reportError("Event name is missing in binding", r), Vo(e) ? (e = e.slice(1), l !== void 0 && (l = pn(l, new nt(l.start.offset + 1, l.end.offset))), this._parseLegacyAnimationEvent(e, t, r, i, o, l)) : this._parseRegularEvent(e, t, s, r, i, a, o, l); }
    calcPossibleSecurityContexts(e, t, s) { let r = this._schemaRegistry.getMappedPropName(t); return qo(this._schemaRegistry, e, r, s); }
    parseEventListenerName(e) { let [t, s] = hm(e, [null, e]); return { eventName: s, target: t }; }
    parseLegacyAnimationEventName(e) { let t = pm(e, [e, null]); return { eventName: t[0], phase: t[1] === null ? null : t[1].toLowerCase() }; }
    _parseLegacyAnimationEvent(e, t, s, r, i, a) { let { eventName: o, phase: l } = this.parseLegacyAnimationEventName(e), c = this._parseAction(t, r); i.push(new ya(o, l, Ve.LegacyAnimation, c, s, r, a)), o.length === 0 && this._reportError("Animation event name is missing in binding", s), l ? l !== "start" && l !== "done" && this._reportError(`The provided animation output phase value "${l}" for "@${o}" is not supported (use start or done)`, s) : this._reportError(`The animation trigger output event (@${o}) is missing its phase value name (start or done are currently supported)`, s); }
    _parseRegularEvent(e, t, s, r, i, a, o, l) { let { eventName: c, target: h } = this.parseEventListenerName(e), p = this.errors.length, m = this._parseAction(t, i), v = this.errors.length === p; a.push([e, m.source]), s && v && !this._isAllowedAssignmentEvent(m) && this._reportError("Unsupported expression in a two-way binding", r); let w = Ve.Regular; s && (w = Ve.TwoWay), e.startsWith(`${$o}${ea}`) && (w = Ve.Animation), o.push(new ya(c, h, w, m, r, i, l)); }
    _parseAction(e, t) { let s = t && t.start ? t.start.offset : 0; try {
        let r = this._exprParser.parseAction(e, t, s);
        return r && this.errors.push(...r.errors), !r || r.ast instanceof De ? (this._reportError("Empty expressions are not allowed", t), this._exprParser.wrapLiteralPrimitive("ERROR", t, s)) : r;
    }
    catch (r) {
        return this._reportError(`${r}`, t), this._exprParser.wrapLiteralPrimitive("ERROR", t, s);
    } }
    _reportError(e, t, s = wn.ERROR) { this.errors.push(new I(t, e, s)); }
    _validatePropertyOrAttributeName(e, t, s) { let r = s ? this._schemaRegistry.validateAttribute(e) : this._schemaRegistry.validateProperty(e); r.error && this._reportError(r.msg, t, wn.ERROR); }
    _isAllowedAssignmentEvent(e) { return e instanceof Ge ? this._isAllowedAssignmentEvent(e.ast) : e instanceof ei ? this._isAllowedAssignmentEvent(e.expression) : e instanceof zs && e.args.length === 1 && e.receiver instanceof $t && e.receiver.name === "$any" && e.receiver.receiver instanceof Ut ? this._isAllowedAssignmentEvent(e.args[0]) : (e instanceof $t || e instanceof ps) && !dc(e); }
};
function dc(n) { return n instanceof Xr || n instanceof Yr ? !0 : n instanceof si ? dc(n.expression) : n instanceof $t || n instanceof ps || n instanceof zs ? dc(n.receiver) : !1; }
function Vo(n) { return n[0] == "@"; }
function qo(n, e, t, s) { let r, [i, a] = e ? Le(e, !1) : [null, e], o = c => { let [h, p] = Le(c, !1), m = h ?? i, v = m ? `:${m}:${p}` : p; return n.securityContext(v, t, s); }, l = n.allKnownElementNames(); return a === null ? r = l.map(o) : (r = [], as.parse(a).forEach(c => { let h = c.element ? [c.element] : l; if (c.element && !n.hasElement(c.element, [])) {
    let v = `:${Co}:${c.element}`, w = `:${Ao}:${c.element}`;
    n.hasElement(v, []) ? h = [v] : n.hasElement(w, []) && (h = [w]);
} let p = new Set(c.notSelectors.filter(v => v.isElementSelector()).map(v => v.element?.toLowerCase())), m = h.filter(v => { let w = v.toLowerCase(); return !p.has(w) && !p.has(Le(w)[1]); }); r.push(...m.map(o)); })), r.length === 0 ? [j.NONE] : Array.from(new Set(r)).sort(); }
function pn(n, e) { let t = e.start - n.start.offset, s = e.end - n.end.offset; return new B(n.start.moveBy(t), n.end.moveBy(s), n.fullStart.moveBy(t), n.details); }
function _y(n) { if (n == null || n.length === 0 || n[0] == "/")
    return !1; let e = n.match(by); return e === null || e[1] == "package" || e[1] == "asset"; }
var by = /^([^:/?#]+):/, Ty = "select", Iy = "link", Ny = "rel", Dy = "href", Py = "stylesheet", Ly = "style", By = new Set([":svg:script", "script"]), My = "ngNonBindable", Ry = "ngProjectAs";
function od(n) { let e = null, t = null, s = null, r = !1, i = ""; for (let l of n.attrs) {
    let c = l.name.toLowerCase();
    c == Ty ? e = l.value : c == Dy ? t = l.value : c == Ny ? s = l.value : l.name == My ? r = !0 : l.name == Ry && l.value.length > 0 && (i = l.value);
} e ||= "*"; let a = n.name.toLowerCase(), o = tt.OTHER; return dl(a) ? o = tt.NG_CONTENT : Ly === a ? o = tt.STYLE : By.has(a) ? o = tt.SCRIPT : a == Iy && s == Py && (o = tt.STYLESHEET), new mc(o, e, t, r, i); }
var tt = (function (n) { return n[n.NG_CONTENT = 0] = "NG_CONTENT", n[n.STYLE = 1] = "STYLE", n[n.STYLESHEET = 2] = "STYLESHEET", n[n.SCRIPT = 3] = "SCRIPT", n[n.OTHER = 4] = "OTHER", n; })(tt || {}), mc = class {
    type;
    selectAttr;
    hrefAttr;
    nonBindable;
    projectAs;
    constructor(e, t, s, r, i) { this.type = e, this.selectAttr = t, this.hrefAttr = s, this.nonBindable = r, this.projectAs = i; }
}, Fy = /^\s*([0-9A-Za-z_$]*)\s+of\s+([\S\s]*)/, $y = /^track\s+([\S\s]*)/, Oy = /^(as\s+)(.*)/, _o = /^else[^\S\r\n]+if/, Vy = /^let\s+([\S\s]*)/, qy = /^[$A-Z_][0-9A-Z_$]*$/i, Gh = /(\s*)(\S+)(\s*)/, Rr = new Set(["$index", "$first", "$last", "$even", "$odd", "$count"]);
function Xh(n) { return n === "empty"; }
function Yh(n) { return n === "else" || _o.test(n); }
function Uy(n, e, t, s) { let r = Xy(e), i = [], a = Qh(n, r, s); a !== null && i.push(new es(a.expression, P(t, n.children, n.children), a.expressionAlias, n.sourceSpan, n.startSourceSpan, n.endSourceSpan, n.nameSpan, n.i18n)); for (let p of e)
    if (_o.test(p.name)) {
        let m = Qh(p, r, s);
        if (m !== null) {
            let v = P(t, p.children, p.children);
            i.push(new es(m.expression, v, m.expressionAlias, p.sourceSpan, p.startSourceSpan, p.endSourceSpan, p.nameSpan, p.i18n));
        }
    }
    else if (p.name === "else") {
        let m = P(t, p.children, p.children);
        i.push(new es(null, m, null, p.sourceSpan, p.startSourceSpan, p.endSourceSpan, p.nameSpan, p.i18n));
    } let o = i.length > 0 ? i[0].startSourceSpan : n.startSourceSpan, l = i.length > 0 ? i[i.length - 1].endSourceSpan : n.endSourceSpan, c = n.sourceSpan, h = i[i.length - 1]; return h !== void 0 && (c = new B(o.start, h.sourceSpan.end)), { node: new Ta(i, c, n.startSourceSpan, l, n.nameSpan), errors: r }; }
function Hy(n, e, t, s) { let r = [], i = jy(n, r, s), a = null, o = null; for (let l of e)
    l.name === "empty" ? o !== null ? r.push(new I(l.sourceSpan, "@for loop can only have one @empty block")) : l.parameters.length > 0 ? r.push(new I(l.sourceSpan, "@empty block cannot have parameters")) : o = new ui(P(t, l.children, l.children), l.sourceSpan, l.startSourceSpan, l.endSourceSpan, l.nameSpan, l.i18n) : r.push(new I(l.sourceSpan, `Unrecognized @for loop block "${l.name}"`)); if (i !== null)
    if (i.trackBy === null)
        r.push(new I(n.startSourceSpan, '@for loop must have a "track" expression'));
    else {
        let l = o?.endSourceSpan ?? n.endSourceSpan, c = new B(n.sourceSpan.start, l?.end ?? n.sourceSpan.end);
        zy(i.trackBy.expression, i.trackBy.keywordSpan, r), a = new Qs(i.itemName, i.expression, i.trackBy.expression, i.trackBy.keywordSpan, i.context, P(t, n.children, n.children), o, c, n.sourceSpan, n.startSourceSpan, l, n.nameSpan, n.i18n);
    } return { node: a, errors: r }; }
function Wy(n, e, t) { let s = Yy(n), r = n.parameters.length > 0 ? Mi(n.parameters[0], t) : t.parseBinding("", !1, n.sourceSpan, 0), i = [], a = [], o = [], l = null, c = null; for (let p of n.children) {
    if (!(p instanceof ht))
        continue;
    if ((p.name !== "case" || p.parameters.length === 0) && p.name !== "default" && p.name !== "default never") {
        a.push(new Ia(p.name, p.sourceSpan, p.nameSpan));
        continue;
    }
    c !== null && s.push(new I(p.sourceSpan, '@default block with "never" parameter must be the last case in a switch'));
    let m = p.name === "case", v = null;
    if (m)
        v = Mi(p.parameters[0], t);
    else if (p.name === "default never") {
        (p.children.length > 0 || p.endSourceSpan !== null && p.endSourceSpan.start.offset !== p.endSourceSpan.end.offset) && s.push(new I(p.sourceSpan, '@default block with "never" parameter cannot have a body')), o.length > 0 && s.push(new I(p.sourceSpan, 'A @case block with no body cannot be followed by a @default block with "never" parameter')), c = new Cl(p.sourceSpan, p.startSourceSpan, p.endSourceSpan, p.nameSpan);
        continue;
    }
    let w = new yl(v, p.sourceSpan, p.startSourceSpan, p.endSourceSpan, p.nameSpan);
    if (o.push(w), p.children.length === 0 && p.endSourceSpan !== null && p.endSourceSpan.start.offset === p.endSourceSpan.end.offset) {
        l === null && (l = p.sourceSpan);
        continue;
    }
    let T = p.sourceSpan, k = p.startSourceSpan;
    l !== null && (T = new B(l.start, p.sourceSpan.end), k = new B(l.start, p.startSourceSpan.end), l = null);
    let R = new ci(o, P(e, p.children, p.children), T, k, p.endSourceSpan, p.nameSpan, p.i18n);
    i.push(R), o = [];
} return { node: new ba(r, i, a, c, n.sourceSpan, n.startSourceSpan, n.endSourceSpan, n.nameSpan), errors: s }; }
function jy(n, e, t) { if (n.parameters.length === 0)
    return e.push(new I(n.startSourceSpan, "@for loop does not have an expression")), null; let [s, ...r] = n.parameters, i = Qy(s, e)?.match(Fy); if (!i || i[2].trim().length === 0)
    return e.push(new I(s.sourceSpan, 'Cannot parse expression. @for loop expression must match the pattern "<identifier> of <expression>"')), null; let [, a, o] = i; Rr.has(a) && e.push(new I(s.sourceSpan, `@for loop item name cannot be one of ${Array.from(Rr).join(", ")}.`)); let l = s.expression.split(" ")[0], c = new B(s.sourceSpan.start, s.sourceSpan.start.moveBy(l.length)), h = { itemName: new Tn(a, "$implicit", c, c), trackBy: null, expression: Mi(s, t, o), context: Array.from(Rr, p => { let m = new B(n.startSourceSpan.end, n.startSourceSpan.end); return new Tn(p, p, m, m); }) }; for (let p of r) {
    let m = p.expression.match(Vy);
    if (m !== null) {
        let w = new B(p.sourceSpan.start.moveBy(m[0].length - m[1].length), p.sourceSpan.end);
        Gy(p.sourceSpan, m[1], w, a, h.context, e);
        continue;
    }
    let v = p.expression.match($y);
    if (v !== null) {
        if (h.trackBy !== null)
            e.push(new I(p.sourceSpan, '@for loop can only have one "track" expression'));
        else {
            let w = Mi(p, t, v[1]);
            w.ast instanceof De && e.push(new I(n.startSourceSpan, '@for loop must have a "track" expression'));
            let C = new B(p.sourceSpan.start, p.sourceSpan.start.moveBy(5));
            h.trackBy = { expression: w, keywordSpan: C };
        }
        continue;
    }
    e.push(new I(p.sourceSpan, `Unrecognized @for loop parameter "${p.expression}"`));
} return h; }
function zy(n, e, t) { let s = new gc; n.ast.visit(s), s.hasPipe && t.push(new I(e, "Cannot use pipes in track expressions")); }
function Gy(n, e, t, s, r, i) { let a = e.split(","), o = t.start; for (let l of a) {
    let c = l.split("="), h = c.length === 2 ? c[0].trim() : "", p = c.length === 2 ? c[1].trim() : "";
    if (h.length === 0 || p.length === 0)
        i.push(new I(n, 'Invalid @for loop "let" parameter. Parameter should match the pattern "<name> = <variable name>"'));
    else if (!Rr.has(p))
        i.push(new I(n, `Unknown "let" parameter variable "${p}". The allowed variables are: ${Array.from(Rr).join(", ")}`));
    else if (h === s)
        i.push(new I(n, `Invalid @for loop "let" parameter. Variable cannot be called "${s}"`));
    else if (r.some(m => m.name === h))
        i.push(new I(n, `Duplicate "let" parameter variable "${p}"`));
    else {
        let [, m, v] = c[0].match(Gh) ?? [], w = m !== void 0 && c.length === 2 ? new B(o.moveBy(m.length), o.moveBy(m.length + v.length)) : t, C;
        if (c.length === 2) {
            let [, k, R] = c[1].match(Gh) ?? [];
            C = k !== void 0 ? new B(o.moveBy(c[0].length + 1 + k.length), o.moveBy(c[0].length + 1 + k.length + R.length)) : void 0;
        }
        let T = new B(w.start, C?.end ?? w.end);
        r.push(new Tn(h, p, T, w, C));
    }
    o = o.moveBy(l.length + 1);
} }
function Xy(n) { let e = [], t = !1; for (let s = 0; s < n.length; s++) {
    let r = n[s];
    r.name === "else" ? (t ? e.push(new I(r.startSourceSpan, "Conditional can only have one @else block")) : n.length > 1 && s < n.length - 1 ? e.push(new I(r.startSourceSpan, "@else block must be last inside the conditional")) : r.parameters.length > 0 && e.push(new I(r.startSourceSpan, "@else block cannot have parameters")), t = !0) : _o.test(r.name) || e.push(new I(r.startSourceSpan, `Unrecognized conditional block @${r.name}`));
} return e; }
function Yy(n) { let e = [], t = !1; if (n.parameters.length !== 1)
    return e.push(new I(n.startSourceSpan, "@switch block must have exactly one parameter")), e; for (let s of n.children)
    if (!(s instanceof Rn || s instanceof ln && s.value.trim().length === 0)) {
        if (!(s instanceof ht) || s.name !== "case" && s.name !== "default" && s.name !== "default never") {
            e.push(new I(s.sourceSpan, "@switch block can only contain @case and @default blocks"));
            continue;
        }
        s.name === "default never" ? (t && e.push(new I(s.startSourceSpan, "@switch block can only have one @default block")), t = !0) : s.name === "default" ? (t ? e.push(new I(s.startSourceSpan, "@switch block can only have one @default block")) : s.parameters.length > 0 && e.push(new I(s.startSourceSpan, "@default block cannot have parameters")), t = !0) : s.name === "case" && s.parameters.length !== 1 && e.push(new I(s.startSourceSpan, "@case block must have exactly one parameter"));
    } return e; }
function Mi(n, e, t) { let s, r; return typeof t == "string" ? (s = Math.max(0, n.expression.lastIndexOf(t)), r = s + t.length) : (s = 0, r = n.expression.length), e.parseBinding(n.expression.slice(s, r), !1, n.sourceSpan, n.sourceSpan.start.offset + s); }
function Qh(n, e, t) { if (n.parameters.length === 0)
    return e.push(new I(n.startSourceSpan, "Conditional block does not have an expression")), null; let s = Mi(n.parameters[0], t), r = null; for (let i = 1; i < n.parameters.length; i++) {
    let a = n.parameters[i], o = a.expression.match(Oy);
    if (o === null)
        e.push(new I(a.sourceSpan, `Unrecognized conditional parameter "${a.expression}"`));
    else if (n.name !== "if" && !_o.test(n.name))
        e.push(new I(a.sourceSpan, '"as" expression is only allowed on `@if` and `@else if` blocks'));
    else if (r !== null)
        e.push(new I(a.sourceSpan, 'Conditional can only have one "as" expression'));
    else {
        let l = o[2].trim();
        if (qy.test(l)) {
            let c = a.sourceSpan.start.moveBy(o[1].length), h = new B(c, c.moveBy(l.length));
            r = new Tn(l, l, h, h);
        }
        else
            e.push(new I(a.sourceSpan, '"as" expression must be a valid JavaScript identifier'));
    }
} return { expression: s, expressionAlias: r }; }
function Qy(n, e) { let t = n.expression, s = /^\s$/, r = 0, i = 0, a = t.length - 1; for (let o = 0; o < t.length; o++) {
    let l = t[o];
    if (l === "(")
        i = o + 1, r++;
    else {
        if (s.test(l))
            continue;
        break;
    }
} if (r === 0)
    return t; for (let o = t.length - 1; o > -1; o--) {
    let l = t[o];
    if (l === ")") {
        if (a = o, r--, r === 0)
            break;
    }
    else {
        if (s.test(l))
            continue;
        break;
    }
} return r !== 0 ? (e.push(new I(n.sourceSpan, "Unclosed parentheses in expression")), null) : t.slice(i, a); }
var gc = class extends Gs {
    hasPipe = !1;
    visitPipe() { this.hasPipe = !0; }
}, Zy = /^\d+\.?\d*(ms|s)?$/, Jy = /^\s$/, Zh = new Map([[pt, Fe], [Ot, Zt], [Oe, ge]]), $e = (function (n) { return n.IDLE = "idle", n.TIMER = "timer", n.INTERACTION = "interaction", n.IMMEDIATE = "immediate", n.HOVER = "hover", n.VIEWPORT = "viewport", n.NEVER = "never", n; })($e || {});
function Ky({ expression: n, sourceSpan: e }, t, s) { let r = n.indexOf("never"), i = new B(e.start.moveBy(r), e.start.moveBy(r + 5)), a = gu(n, e), o = vu(n, e); r === -1 ? s.push(new I(e, 'Could not find "never" keyword in expression')) : wu("never", t, s, new wl(i, e, a, null, o)); }
function Uo({ expression: n, sourceSpan: e }, t, s, r) { let i = n.indexOf("when"), a = new B(e.start.moveBy(i), e.start.moveBy(i + 4)), o = gu(n, e), l = vu(n, e); if (i === -1)
    r.push(new I(e, 'Could not find "when" keyword in expression'));
else {
    let c = Ri(n, i + 1), h = t.parseBinding(n.slice(c), !1, e, e.start.offset + c);
    wu("when", s, r, new Aa(h, e, o, a, l));
} }
function Ho({ expression: n, sourceSpan: e }, t, s, r, i) { let a = n.indexOf("on"), o = new B(e.start.moveBy(a), e.start.moveBy(a + 2)), l = gu(n, e), c = vu(n, e); if (a === -1)
    r.push(new I(e, 'Could not find "on" keyword in expression'));
else {
    let h = Ri(n, a + 1), p = n.startsWith("hydrate");
    new vc(n, t, h, e, s, r, p ? oC : aC, p, l, o, c).parse();
} }
function gu(n, e) { return n.startsWith("prefetch") ? new B(e.start, e.start.moveBy(8)) : null; }
function vu(n, e) { return n.startsWith("hydrate") ? new B(e.start, e.start.moveBy(7)) : null; }
var vc = class {
    expression;
    bindingParser;
    start;
    span;
    triggers;
    errors;
    validator;
    isHydrationTrigger;
    prefetchSpan;
    onSourceSpan;
    hydrateSpan;
    index = 0;
    tokens;
    constructor(e, t, s, r, i, a, o, l, c, h, p) { this.expression = e, this.bindingParser = t, this.start = s, this.span = r, this.triggers = i, this.errors = a, this.validator = o, this.isHydrationTrigger = l, this.prefetchSpan = c, this.onSourceSpan = h, this.hydrateSpan = p, this.tokens = new Pi().tokenize(e.slice(s)); }
    parse() { for (; this.tokens.length > 0 && this.index < this.tokens.length;) {
        let e = this.token();
        if (!e.isIdentifier()) {
            this.unexpectedToken(e);
            break;
        }
        if (this.isFollowedByOrLast(Pe))
            this.consumeTrigger(e, []), this.advance();
        else if (this.isFollowedByOrLast(Oe)) {
            this.advance();
            let t = this.errors.length, s = this.consumeParameters();
            if (this.errors.length !== t)
                break;
            this.consumeTrigger(e, s), this.advance();
        }
        else
            this.index < this.tokens.length - 1 && this.unexpectedToken(this.tokens[this.index + 1]);
        this.advance();
    } }
    advance() { this.index++; }
    isFollowedByOrLast(e) { return this.index === this.tokens.length - 1 ? !0 : this.tokens[this.index + 1].isCharacter(e); }
    token() { return this.tokens[Math.min(this.index, this.tokens.length - 1)]; }
    consumeTrigger(e, t) { let s = this.span.start.moveBy(this.start + e.index - this.tokens[0].index), r = new B(s, s.moveBy(e.strValue.length)), i = s.moveBy(this.token().end - e.index), a = e.index === 0, o = a ? this.onSourceSpan : null, l = a ? this.prefetchSpan : null, c = a ? this.hydrateSpan : null, h = new B(a ? this.span.start : s, i); try {
        switch (e.toString()) {
            case $e.IDLE:
                this.trackTrigger("idle", eC(t, r, h, l, o, c));
                break;
            case $e.TIMER:
                this.trackTrigger("timer", tC(t, r, h, this.prefetchSpan, this.onSourceSpan, this.hydrateSpan));
                break;
            case $e.INTERACTION:
                this.trackTrigger("interaction", rC(t, r, h, this.prefetchSpan, this.onSourceSpan, this.hydrateSpan, this.validator));
                break;
            case $e.IMMEDIATE:
                this.trackTrigger("immediate", nC(t, r, h, this.prefetchSpan, this.onSourceSpan, this.hydrateSpan));
                break;
            case $e.HOVER:
                this.trackTrigger("hover", sC(t, r, h, this.prefetchSpan, this.onSourceSpan, this.hydrateSpan, this.validator));
                break;
            case $e.VIEWPORT:
                this.trackTrigger("viewport", iC(this.start, this.isHydrationTrigger, this.bindingParser, t, r, h, this.prefetchSpan, this.onSourceSpan, this.hydrateSpan, this.validator));
                break;
            default: throw new Error(`Unrecognized trigger type "${e}"`);
        }
    }
    catch (p) {
        this.error(e, p.message);
    } }
    consumeParameters() { let e = []; if (!this.token().isCharacter(Oe))
        return this.unexpectedToken(this.token()), e; this.advance(); let t = [], s = []; for (; this.index < this.tokens.length;) {
        let r = this.token();
        if (r.isCharacter(ge) && t.length === 0) {
            s.length && e.push({ expression: this.tokenRangeText(s), start: s[0].index });
            break;
        }
        if (r.type === L.Character && Zh.has(r.numValue) && t.push(Zh.get(r.numValue)), t.length > 0 && r.isCharacter(t[t.length - 1]) && t.pop(), t.length === 0 && r.isCharacter(Pe) && s.length > 0) {
            e.push({ expression: this.tokenRangeText(s), start: s[0].index }), this.advance(), s = [];
            continue;
        }
        s.push(r), this.advance();
    } return (!this.token().isCharacter(ge) || t.length > 0) && this.error(this.token(), "Unexpected end of expression"), this.index < this.tokens.length - 1 && !this.tokens[this.index + 1].isCharacter(Pe) && this.unexpectedToken(this.tokens[this.index + 1]), e; }
    tokenRangeText(e) { return e.length === 0 ? "" : this.expression.slice(this.start + e[0].index, this.start + e[e.length - 1].end); }
    trackTrigger(e, t) { wu(e, this.triggers, this.errors, t); }
    error(e, t) { let s = this.span.start.moveBy(this.start + e.index), r = s.moveBy(e.end - e.index); this.errors.push(new I(new B(s, r), t)); }
    unexpectedToken(e) { this.error(e, `Unexpected token "${e}"`); }
};
function wu(n, e, t, s) { e[n] ? t.push(new I(s.sourceSpan, `Duplicate "${n}" trigger is not allowed`)) : e[n] = s; }
function eC(n, e, t, s, r, i) { if (n.length > 0)
    throw new Error(`"${$e.IDLE}" trigger cannot have parameters`); return new El(e, t, s, r, i); }
function tC(n, e, t, s, r, i) { if (n.length !== 1)
    throw new Error(`"${$e.TIMER}" trigger must have exactly one parameter`); let a = io(n[0].expression); if (a === null)
    throw new Error(`Could not parse time value of trigger "${$e.TIMER}"`); return new xl(a, e, t, s, r, i); }
function nC(n, e, t, s, r, i) { if (n.length > 0)
    throw new Error(`"${$e.IMMEDIATE}" trigger cannot have parameters`); return new Sl(e, t, s, r, i); }
function sC(n, e, t, s, r, i, a) { return a($e.HOVER, n), new ka(n[0]?.expression ?? null, e, t, s, r, i); }
function rC(n, e, t, s, r, i, a) { return a($e.INTERACTION, n), new _a(n[0]?.expression ?? null, e, t, s, r, i); }
function iC(n, e, t, s, r, i, a, o, l, c) { c($e.VIEWPORT, s); let h, p; if (s.length === 0)
    h = p = null;
else if (!s[0].expression.startsWith("{"))
    h = s[0].expression, p = null;
else {
    let m = t.parseBinding(s[0].expression, !1, i, i.start.offset + n + s[0].start);
    if (m.ast instanceof fs) {
        if (m.ast.keys.some(w => w.kind === "spread"))
            throw new Error("Spread operator are not allowed in this context");
        if (m.ast.keys.some(w => w.kind === "property" && w.key === "root"))
            throw new Error('The "root" option is not supported in the options parameter of the "viewport" trigger');
    }
    else
        throw new Error('Options parameter of the "viewport" trigger must be an object literal');
    let v = m.ast.keys.findIndex(w => w.kind === "property" && w.key === "trigger");
    if (v === -1)
        h = null, p = m.ast;
    else {
        let w = m.ast.values[v], C = (T, k) => k !== v;
        if (!(w instanceof $t) || !(w.receiver instanceof Ut))
            throw new Error('"trigger" option of the "viewport" trigger must be an identifier');
        h = w.name, p = new fs(m.ast.span, m.ast.sourceSpan, m.ast.keys.filter(C), m.ast.values.filter(C));
    }
} if (e && h !== null)
    throw new Error('"viewport" hydration trigger cannot have a "trigger"'); if (p) {
    let m = wc.findDynamicNode(p);
    if (m !== null)
        throw new Error(`Options of the "viewport" trigger must be an object literal containing only literal values, but "${m.constructor.name}" was found`);
} return new ii(h, p, r, i, a, o, l); }
function aC(n, e) { if (e.length > 1)
    throw new Error(`"${n}" trigger can only have zero or one parameters`); }
function oC(n, e) { if (n === $e.VIEWPORT) {
    if (e.length > 1)
        throw new Error(`Hydration trigger "${n}" cannot have more than one parameter`);
    return;
} if (e.length > 0)
    throw new Error(`Hydration trigger "${n}" cannot have parameters`); }
function Ri(n, e = 0) { let t = !1; for (let s = e; s < n.length; s++)
    if (Jy.test(n[s]))
        t = !0;
    else if (t)
        return s; return -1; }
function io(n) { let e = n.match(Zy); if (!e)
    return null; let [t, s] = e; return parseFloat(t) * (s === "s" ? 1e3 : 1); }
var wc = class n extends Gs {
    dynamicNode = null;
    static findDynamicNode(e) { let t = new n; return t.visit(e), t.dynamicNode; }
    visit(e) { !(e instanceof Ge) && !(e instanceof je) && !(e instanceof Qr) && !(e instanceof fs) ? this.dynamicNode = e : super.visit(e); }
}, lC = /^prefetch\s+when\s/, cC = /^prefetch\s+on\s/, uC = /^hydrate\s+when\s/, hC = /^hydrate\s+on\s/, pC = /^hydrate\s+never(\s*)$/, ld = /^minimum\s/, fC = /^after\s/, dC = /^when\s/, mC = /^on\s/;
function Ec(n) { return n === "placeholder" || n === "loading" || n === "error"; }
function gC(n, e, t, s) { let r = [], { placeholder: i, loading: a, error: o } = vC(e, r, t), { triggers: l, prefetchTriggers: c, hydrateTriggers: h } = xC(n, s, r), p = n.endSourceSpan, m = n.sourceSpan.end; if (e.length > 0) {
    let C = e[e.length - 1];
    p = C.endSourceSpan, m = C.sourceSpan.end;
} let v = new B(n.sourceSpan.start, m); return { node: new ds(P(t, n.children, n.children), l, c, h, i, a, o, n.nameSpan, v, n.sourceSpan, n.startSourceSpan, p, n.i18n), errors: r }; }
function vC(n, e, t) { let s = null, r = null, i = null; for (let a of n)
    try {
        if (!Ec(a.name)) {
            e.push(new I(a.startSourceSpan, `Unrecognized block "@${a.name}"`));
            break;
        }
        switch (a.name) {
            case "placeholder":
                s !== null ? e.push(new I(a.startSourceSpan, "@defer block can only have one @placeholder block")) : s = wC(a, t);
                break;
            case "loading":
                r !== null ? e.push(new I(a.startSourceSpan, "@defer block can only have one @loading block")) : r = EC(a, t);
                break;
            case "error":
                i !== null ? e.push(new I(a.startSourceSpan, "@defer block can only have one @error block")) : i = SC(a, t);
                break;
        }
    }
    catch (o) {
        e.push(new I(a.startSourceSpan, o.message));
    } return { placeholder: s, loading: r, error: i }; }
function wC(n, e) { let t = null; for (let s of n.parameters)
    if (ld.test(s.expression)) {
        if (t != null)
            throw new Error('@placeholder block can only have one "minimum" parameter');
        let r = io(s.expression.slice(Ri(s.expression)));
        if (r === null)
            throw new Error('Could not parse time value of parameter "minimum"');
        t = r;
    }
    else
        throw new Error(`Unrecognized parameter in @placeholder block: "${s.expression}"`); return new ai(P(e, n.children, n.children), t, n.nameSpan, n.sourceSpan, n.startSourceSpan, n.endSourceSpan, n.i18n); }
function EC(n, e) { let t = null, s = null; for (let r of n.parameters)
    if (fC.test(r.expression)) {
        if (t != null)
            throw new Error('@loading block can only have one "after" parameter');
        let i = io(r.expression.slice(Ri(r.expression)));
        if (i === null)
            throw new Error('Could not parse time value of parameter "after"');
        t = i;
    }
    else if (ld.test(r.expression)) {
        if (s != null)
            throw new Error('@loading block can only have one "minimum" parameter');
        let i = io(r.expression.slice(Ri(r.expression)));
        if (i === null)
            throw new Error('Could not parse time value of parameter "minimum"');
        s = i;
    }
    else
        throw new Error(`Unrecognized parameter in @loading block: "${r.expression}"`); return new oi(P(e, n.children, n.children), t, s, n.nameSpan, n.sourceSpan, n.startSourceSpan, n.endSourceSpan, n.i18n); }
function SC(n, e) { if (n.parameters.length > 0)
    throw new Error("@error block cannot have parameters"); return new li(P(e, n.children, n.children), n.nameSpan, n.sourceSpan, n.startSourceSpan, n.endSourceSpan, n.i18n); }
function xC(n, e, t, s) { let r = {}, i = {}, a = {}; for (let o of n.parameters)
    dC.test(o.expression) ? Uo(o, e, r, t) : mC.test(o.expression) ? Ho(o, e, r, t) : lC.test(o.expression) ? Uo(o, e, i, t) : cC.test(o.expression) ? Ho(o, e, i, t) : uC.test(o.expression) ? Uo(o, e, a, t) : hC.test(o.expression) ? Ho(o, e, a, t) : pC.test(o.expression) ? Ky(o, a, t) : t.push(new I(o.sourceSpan, "Unrecognized trigger")); return a.never && Object.keys(a).length > 1 && t.push(new I(n.startSourceSpan, "Cannot specify additional `hydrate` triggers if `hydrate never` is present")), { triggers: r, prefetchTriggers: i, hydrateTriggers: a }; }
var yC = /^(?:(bind-)|(let-)|(ref-|#)|(on-)|(bindon-)|(@))(.*)$/, Jh = 1, Kh = 2, ep = 3, tp = 4, np = 5, CC = 6, xr = 7, fn = { BANANA_BOX: { start: "[(", end: ")]" }, PROPERTY: { start: "[", end: "]" }, EVENT: { start: "(", end: ")" } }, Wo = "*", AC = new Set(["link", "style", "script", "ng-template", "ng-container", "ng-content"]), kC = new Set(["ngProjectAs", "ngNonBindable"]);
function _C(n, e, t) { let s = new Sc(e, t), r = P(s, n, n), i = e.errors.concat(s.errors), a = { nodes: r, errors: i, styleUrls: s.styleUrls, styles: s.styles, ngContentSelectors: s.ngContentSelectors }; return t.collectCommentNodes && (a.commentNodes = s.commentNodes), a; }
var Sc = class {
    bindingParser;
    options;
    errors = [];
    styles = [];
    styleUrls = [];
    ngContentSelectors = [];
    commentNodes = [];
    inI18nBlock = !1;
    processedNodes = new Set;
    constructor(e, t) { this.bindingParser = e, this.options = t; }
    visitElement(e) { let t = aa(e.i18n); t && (this.inI18nBlock && this.reportError("Cannot mark an element as translatable inside of a translatable section. Please remove the nested i18n marker.", e.sourceSpan), this.inI18nBlock = !0); let s = od(e); if (s.type === tt.SCRIPT)
        return null; if (s.type === tt.STYLE) {
        let k = bC(e);
        return k !== null && this.styles.push(k), null;
    }
    else if (s.type === tt.STYLESHEET && _y(s.hrefAttr))
        return this.styleUrls.push(s.hrefAttr), null; let r = Nm(e.name), { attributes: i, boundEvents: a, references: o, variables: l, templateVariables: c, elementHasInlineTemplate: h, parsedProperties: p, templateParsedProperties: m, i18nAttrsMeta: v } = this.prepareAttributes(e.attrs, r), w = this.extractDirectives(e), C; s.nonBindable ? C = P(sp, e.children).flat(1 / 0) : C = P(this, e.children, e.children); let T; if (s.type === tt.NG_CONTENT) {
        let k = s.selectAttr, R = e.attrs.map(se => this.visitAttribute(se));
        T = new Zs(k, R, C, e.isSelfClosing, e.sourceSpan, e.startSourceSpan, e.endSourceSpan, e.i18n), this.ngContentSelectors.push(k);
    }
    else if (r) {
        let k = this.categorizePropertyAttributes(e.name, p, v);
        T = new rt(e.name, i, k.bound, a, w, [], C, o, l, e.isSelfClosing, e.sourceSpan, e.startSourceSpan, e.endSourceSpan, e.i18n);
    }
    else {
        let k = this.categorizePropertyAttributes(e.name, p, v);
        if (e.name === "ng-container")
            for (let R of k.bound)
                R.type === Y.Attribute && this.reportError("Attribute bindings are not supported on ng-container. Use property bindings instead.", R.sourceSpan);
        T = new Ht(e.name, i, k.bound, a, w, C, o, e.isSelfClosing, e.sourceSpan, e.startSourceSpan, e.endSourceSpan, e.isVoid, e.i18n);
    } return h && (T = this.wrapInTemplate(T, m, c, v, r, t)), t && (this.inI18nBlock = !1), T; }
    visitAttribute(e) { return new Ys(e.name, e.value, e.sourceSpan, e.keySpan, e.valueSpan, e.i18n); }
    visitText(e) { return this.processedNodes.has(e) ? null : this._visitTextWithInterpolation(e.value, e.sourceSpan, e.tokens, e.i18n); }
    visitExpansion(e) { if (!e.i18n)
        return null; if (!aa(e.i18n))
        throw new Error(`Invalid type "${e.i18n.constructor}" for "i18n" property of ${e.sourceSpan.toString()}. Expected a "Message"`); let t = e.i18n, s = {}, r = {}; return Object.keys(t.placeholders).forEach(i => { let a = t.placeholders[i]; if (i.startsWith(qm)) {
        let o = i.trim(), l = this.bindingParser.parseInterpolationExpression(a.text, a.sourceSpan);
        s[o] = new Xs(l, a.sourceSpan);
    }
    else
        r[i] = this._visitTextWithInterpolation(a.text, a.sourceSpan, null); }), new Hp(s, r, e.sourceSpan, t); }
    visitExpansionCase(e) { return null; }
    visitComment(e) { return this.options.collectCommentNodes && this.commentNodes.push(new wo(e.value || "", e.sourceSpan)), null; }
    visitLetDeclaration(e, t) { let s = this.bindingParser.parseBinding(e.value, !1, e.valueSpan, e.valueSpan.start.offset); return s.errors.length === 0 && s.ast instanceof De && this.reportError("@let declaration value cannot be empty", e.valueSpan), new Jc(e.name, s, e.sourceSpan, e.nameSpan, e.valueSpan); }
    visitComponent(e) { let t = aa(e.i18n); if (t && (this.inI18nBlock && this.reportError("Cannot mark a component as translatable inside of a translatable section. Please remove the nested i18n marker.", e.sourceSpan), this.inI18nBlock = !0), e.tagName !== null && AC.has(e.tagName))
        return this.reportError(`Tag name "${e.tagName}" cannot be used as a component tag`, e.startSourceSpan), null; let { attributes: s, boundEvents: r, references: i, templateVariables: a, elementHasInlineTemplate: o, parsedProperties: l, templateParsedProperties: c, i18nAttrsMeta: h } = this.prepareAttributes(e.attrs, !1); this.validateSelectorlessReferences(i); let p = this.extractDirectives(e), m; e.attrs.find(C => C.name === "ngNonBindable") ? m = P(sp, e.children).flat(1 / 0) : m = P(this, e.children, e.children); let v = this.categorizePropertyAttributes(e.tagName, l, h), w = new Ir(e.componentName, e.tagName, e.fullName, s, v.bound, r, p, m, i, e.isSelfClosing, e.sourceSpan, e.startSourceSpan, e.endSourceSpan, e.i18n); return o && (w = this.wrapInTemplate(w, c, a, h, !1, t)), t && (this.inI18nBlock = !1), w; }
    visitDirective() { return null; }
    visitBlockParameter() { return null; }
    visitBlock(e, t) { let s = Array.isArray(t) ? t.indexOf(e) : -1; if (s === -1)
        throw new Error("Visitor invoked incorrectly. Expecting visitBlock to be invoked siblings array as its context"); if (this.processedNodes.has(e))
        return null; let r = null; switch (e.name) {
        case "defer":
            r = gC(e, this.findConnectedBlocks(s, t, Ec), this, this.bindingParser);
            break;
        case "switch":
            r = Wy(e, this, this.bindingParser);
            break;
        case "for":
            r = Hy(e, this.findConnectedBlocks(s, t, Xh), this, this.bindingParser);
            break;
        case "if":
            r = Uy(e, this.findConnectedBlocks(s, t, Yh), this, this.bindingParser);
            break;
        default:
            let i;
            Ec(e.name) ? (i = `@${e.name} block can only be used after an @defer block.`, this.processedNodes.add(e)) : Xh(e.name) ? (i = `@${e.name} block can only be used after an @for block.`, this.processedNodes.add(e)) : Yh(e.name) ? (i = `@${e.name} block can only be used after an @if or @else if block.`, this.processedNodes.add(e)) : i = `Unrecognized block @${e.name}.`, r = { node: new Ia(e.name, e.sourceSpan, e.nameSpan), errors: [new I(e.sourceSpan, i)] };
            break;
    } return this.errors.push(...r.errors), r.node; }
    findConnectedBlocks(e, t, s) { let r = []; for (let i = e + 1; i < t.length; i++) {
        let a = t[i];
        if (!(a instanceof Rn)) {
            if (a instanceof ln && a.value.trim().length === 0) {
                this.processedNodes.add(a);
                continue;
            }
            if (!(a instanceof ht) || !s(a.name))
                break;
            r.push(a), this.processedNodes.add(a);
        }
    } return r; }
    categorizePropertyAttributes(e, t, s) { let r = [], i = []; return t.forEach(a => { let o = s[a.name]; if (a.isLiteral)
        i.push(new Ys(a.name, a.expression.source || "", a.sourceSpan, a.keySpan, a.valueSpan, o));
    else {
        let l = a.name.toLowerCase().startsWith("attr.on"), c = this.bindingParser.createBoundElementProperty(e, a, !l, !1);
        r.push(gl.fromBoundElementProperty(c, o));
    } }), { bound: r, literal: i }; }
    prepareAttributes(e, t) { let s = [], r = [], i = [], a = [], o = [], l = {}, c = [], h = [], p = !1; for (let m of e) {
        let v = !1, w = rp(m.name), C = !1;
        if (m.i18n && (l[m.name] = m.i18n), w.startsWith(Wo)) {
            p && this.reportError("Can't have multiple template bindings on one element. Use only one attribute prefixed with *", m.sourceSpan), C = !0, p = !0;
            let T = m.value, k = w.substring(Wo.length), R = [], se = m.valueSpan ? m.valueSpan.fullStart.offset : m.sourceSpan.fullStart.offset + m.name.length;
            this.bindingParser.parseInlineTemplateBinding(k, T, m.sourceSpan, se, [], c, R, !0), h.push(...R.map(O => new Tn(O.name, O.value, O.sourceSpan, O.keySpan, O.valueSpan)));
        }
        else
            v = this.parseAttribute(t, m, [], s, r, i, a);
        !v && !C && o.push(this.visitAttribute(m));
    } return { attributes: o, boundEvents: r, references: a, variables: i, templateVariables: h, elementHasInlineTemplate: p, parsedProperties: s, templateParsedProperties: c, i18nAttrsMeta: l }; }
    parseAttribute(e, t, s, r, i, a, o) { let l = rp(t.name), c = t.value, h = t.sourceSpan, p = t.valueSpan ? t.valueSpan.fullStart.offset : h.fullStart.offset; function m(k, R, se) { let O = t.name.length - l.length, yt = k.start.moveBy(R.length + O), pr = yt.moveBy(se.length); return new B(yt, pr, yt, se); } let v = l.match(yC); if (v) {
        if (v[Jh] != null) {
            let k = v[xr], R = m(h, v[Jh], k);
            this.bindingParser.parsePropertyBinding(k, c, !1, !1, h, p, t.valueSpan, s, r, R);
        }
        else if (v[Kh])
            if (e) {
                let k = v[xr], R = m(h, v[Kh], k);
                this.parseVariable(k, c, h, R, t.valueSpan, a);
            }
            else
                this.reportError('"let-" is only supported on ng-template elements.', h);
        else if (v[ep]) {
            let k = v[xr], R = m(h, v[ep], k);
            this.parseReference(k, c, h, R, t.valueSpan, o);
        }
        else if (v[tp]) {
            let k = [], R = v[xr], se = m(h, v[tp], R);
            this.bindingParser.parseEvent(R, c, !1, h, t.valueSpan || h, s, k, se), jo(k, i);
        }
        else if (v[np]) {
            let k = v[xr], R = m(h, v[np], k);
            this.bindingParser.parsePropertyBinding(k, c, !1, !0, h, p, t.valueSpan, s, r, R), this.parseAssignmentEvent(k, c, h, t.valueSpan, s, i, R, p);
        }
        else if (v[CC]) {
            let k = m(h, "", l);
            this.bindingParser.parseLiteralAttr(l, c, h, p, t.valueSpan, s, r, k);
        }
        return !0;
    } let w = null; if (l.startsWith(fn.BANANA_BOX.start) ? w = fn.BANANA_BOX : l.startsWith(fn.PROPERTY.start) ? w = fn.PROPERTY : l.startsWith(fn.EVENT.start) && (w = fn.EVENT), w !== null && l.endsWith(w.end) && l.length > w.start.length + w.end.length) {
        let k = l.substring(w.start.length, l.length - w.end.length), R = m(h, w.start, k);
        if (w.start === fn.BANANA_BOX.start)
            this.bindingParser.parsePropertyBinding(k, c, !1, !0, h, p, t.valueSpan, s, r, R), this.parseAssignmentEvent(k, c, h, t.valueSpan, s, i, R, p);
        else if (w.start === fn.PROPERTY.start)
            this.bindingParser.parsePropertyBinding(k, c, !1, !1, h, p, t.valueSpan, s, r, R);
        else {
            let se = [];
            this.bindingParser.parseEvent(k, c, !1, h, t.valueSpan || h, s, se, R), jo(se, i);
        }
        return !0;
    } let C = m(h, "", l); return this.bindingParser.parsePropertyInterpolation(l, c, h, t.valueSpan, s, r, C, t.valueTokens ?? null); }
    extractDirectives(e) { let t = e instanceof ke ? e.tagName : e.name, s = [], r = new Set; for (let i of e.directives) {
        let a = !1;
        for (let v of i.attrs)
            v.name.startsWith(Wo) ? (a = !0, this.reportError(`Shorthand template syntax "${v.name}" is not supported inside a directive context`, v.sourceSpan)) : kC.has(v.name) && (a = !0, this.reportError(`Attribute "${v.name}" is not supported in a directive context`, v.sourceSpan));
        if (!a && r.has(i.name) && (a = !0, this.reportError(`Cannot apply directive "${i.name}" multiple times on the same element`, i.sourceSpan)), a)
            continue;
        let { attributes: o, parsedProperties: l, boundEvents: c, references: h, i18nAttrsMeta: p } = this.prepareAttributes(i.attrs, !1);
        this.validateSelectorlessReferences(h);
        let { bound: m } = this.categorizePropertyAttributes(t, l, p);
        for (let v of m)
            v.type !== Y.Property && v.type !== Y.TwoWay && (a = !0, this.reportError("Binding is not supported in a directive context", v.sourceSpan));
        a || (r.add(i.name), s.push(new Up(i.name, o, m, c, h, i.sourceSpan, i.startSourceSpan, i.endSourceSpan, void 0)));
    } return s; }
    filterAnimationAttributes(e) { return e.filter(t => !t.name.startsWith("animate.")); }
    filterAnimationInputs(e) { return e.filter(t => t.type !== Y.Animation); }
    wrapInTemplate(e, t, s, r, i, a) { let o = this.categorizePropertyAttributes("ng-template", t, r), l = []; o.literal.forEach(m => l.push(m)), o.bound.forEach(m => l.push(m)); let c = { attributes: [], inputs: [], outputs: [] }; (e instanceof Ht || e instanceof Ir) && (c.attributes.push(...this.filterAnimationAttributes(e.attributes)), c.inputs.push(...this.filterAnimationInputs(e.inputs)), c.outputs.push(...e.outputs)); let h = i && a ? void 0 : e.i18n, p; return e instanceof Ir ? p = e.tagName : e instanceof rt ? p = null : p = e.name, new rt(p, c.attributes, c.inputs, c.outputs, [], l, [e], [], s, !1, e.sourceSpan, e.startSourceSpan, e.endSourceSpan, h); }
    _visitTextWithInterpolation(e, t, s, r) { let i = Ff(e), a = this.bindingParser.parseInterpolation(i, t, s); return a ? new Xs(a, t, r) : new Qn(i, t); }
    parseVariable(e, t, s, r, i, a) { e.indexOf("-") > -1 ? this.reportError('"-" is not allowed in variable names', s) : e.length === 0 && this.reportError("Variable does not have a name", s), a.push(new Tn(e, t, s, r, i)); }
    parseReference(e, t, s, r, i, a) { e.indexOf("-") > -1 ? this.reportError('"-" is not allowed in reference names', s) : e.length === 0 ? this.reportError("Reference does not have a name", s) : a.some(o => o.name === e) && this.reportError(`Reference "#${e}" is defined more than once`, s), a.push(new hi(e, t, s, r, i)); }
    parseAssignmentEvent(e, t, s, r, i, a, o, l) { let c = []; this.bindingParser.parseEvent(`${e}Change`, t, !0, s, r || s, i, c, o), jo(c, a); }
    validateSelectorlessReferences(e) { if (e.length === 0)
        return; let t = new Set; for (let s of e)
        s.value.length > 0 ? this.reportError("Cannot specify a value for a local reference in this context", s.valueSpan || s.sourceSpan) : t.has(s.name) ? this.reportError("Duplicate reference names are not allowed", s.sourceSpan) : t.add(s.name); }
    reportError(e, t, s = wn.ERROR) { this.errors.push(new I(t, e, s)); }
}, xc = class {
    visitElement(e) { let t = od(e); if (t.type === tt.SCRIPT || t.type === tt.STYLE || t.type === tt.STYLESHEET)
        return null; let s = P(this, e.children, null); return new Ht(e.name, P(this, e.attrs), [], [], [], s, [], e.isSelfClosing, e.sourceSpan, e.startSourceSpan, e.endSourceSpan, e.isVoid); }
    visitComment(e) { return null; }
    visitAttribute(e) { return new Ys(e.name, e.value, e.sourceSpan, e.keySpan, e.valueSpan, e.i18n); }
    visitText(e) { return new Qn(e.value, e.sourceSpan); }
    visitExpansion(e) { return null; }
    visitExpansionCase(e) { return null; }
    visitBlock(e, t) { let s = [new Qn(e.startSourceSpan.toString(), e.startSourceSpan), ...P(this, e.children)]; return e.endSourceSpan !== null && s.push(new Qn(e.endSourceSpan.toString(), e.endSourceSpan)), s; }
    visitBlockParameter(e, t) { return null; }
    visitLetDeclaration(e, t) { return new Qn(`@let ${e.name} = ${e.value};`, e.sourceSpan); }
    visitComponent(e, t) { let s = P(this, e.children, null); return new Ht(e.fullName, P(this, e.attrs), [], [], [], s, [], e.isSelfClosing, e.sourceSpan, e.startSourceSpan, e.endSourceSpan, !1); }
    visitDirective(e, t) { return null; }
}, sp = new xc;
function rp(n) { return /^data-/i.test(n) ? n.substring(5) : n; }
function jo(n, e) { e.push(...n.map(t => vl.fromParsedEvent(t))); }
function bC(n) { return n.children.length !== 1 || !(n.children[0] instanceof ln) ? null : n.children[0].value; }
var TC = [" ", `
`, "\r", "	"];
function cd(n, e, t = {}) { let { preserveWhitespaces: s, enableI18nLegacyMessageIdFormat: r } = t, i = t.enableSelectorless ?? !1, a = ao(i), l = new ro().parse(n, e, pe(S({ leadingTriviaChars: TC }, t), { tokenizeExpansionForms: !0, tokenizeBlocks: t.enableBlockSyntax ?? !0, tokenizeLet: t.enableLetSyntax ?? !0, selectorlessEnabled: i })); if (!t.alwaysAttemptHtmlToR3AstConversion && l.errors && l.errors.length > 0) {
    let O = { preserveWhitespaces: s, errors: l.errors, nodes: [], styleUrls: [], styles: [], ngContentSelectors: [] };
    return t.collectCommentNodes && (O.commentNodes = []), O;
} let c = l.rootNodes, h = !(t.preserveSignificantWhitespace ?? !0), p = new Ka(!s, r, t.preserveSignificantWhitespace, h), m = p.visitAllWithErrors(c); if (!t.alwaysAttemptHtmlToR3AstConversion && m.errors && m.errors.length > 0) {
    let O = { preserveWhitespaces: s, errors: m.errors, nodes: [], styleUrls: [], styles: [], ngContentSelectors: [] };
    return t.collectCommentNodes && (O.commentNodes = []), O;
} c = m.rootNodes, s || (c = P(new Di(!0, void 0, !1), c), p.hasI18nMeta && (c = P(new Ka(!1, void 0, !0, h), c))); let { nodes: v, errors: w, styleUrls: C, styles: T, ngContentSelectors: k, commentNodes: R } = _C(c, a, { collectCommentNodes: !!t.collectCommentNodes }); w.push(...l.errors, ...m.errors); let se = { preserveWhitespaces: s, errors: w.length > 0 ? w : null, nodes: v, styleUrls: C, styles: T, ngContentSelectors: k }; return t.collectCommentNodes && (se.commentNodes = R), se; }
var IC = new rr;
function ao(n = !1) { return new fc(new Ja(new Pi, n), IC, []); }
var oo = "%COMP%", yc = `_nghost-${oo}`, Cc = `_ngcontent-${oo}`;
function ud(n, e, t) { let s = new oe, r = mo(n.selector); return s.set("type", n.type.value), r.length > 0 && s.set("selectors", qe(r)), n.queries.length > 0 && s.set("contentQueries", xy(n.queries, e, n.name)), n.viewQueries.length && s.set("viewQuery", Sy(n.viewQueries, e, n.name)), s.set("hostBindings", MC(n.host, n.typeSourceSpan, t, e, n.selector || "", n.name, s)), s.set("inputs", Dl(n.inputs, !0)), s.set("outputs", Dl(n.outputs)), n.exportAs !== null && s.set("exportAs", q(n.exportAs.map(i => d(i)))), n.isStandalone === !1 && s.set("standalone", d(!1)), n.isSignal && s.set("signals", d(!0)), s; }
function hd(n, e) { let t = [], s = e.providers, r = e.viewProviders; if (s || r) {
    let i = [s || new It([])];
    r && i.push(r), t.push(y(f.ProvidersFeature).callFn(i));
} if (e.hostDirectives?.length && t.push(y(f.HostDirectivesFeature).callFn([VC(e.hostDirectives)])), e.usesInheritance && t.push(y(f.InheritDefinitionFeature)), e.lifecycle.usesOnChanges && t.push(y(f.NgOnChangesFeature)), e.controlCreate !== null && t.push(y(f.ControlFeature).callFn([d(e.controlCreate.passThroughInput)])), "externalStyles" in e && e.externalStyles?.length) {
    let i = e.externalStyles.map(a => d(a));
    t.push(y(f.ExternalStylesFeature).callFn([q(i)]));
} t.length && n.set("features", q(t)); }
function NC(n, e, t) { let s = ud(n, e, t); hd(s, n); let r = y(f.defineDirective).callFn([s.toLiteralMap()], void 0, !0), i = dd(n); return { expression: r, type: i, statements: [] }; }
function DC(n, e, t) { let s = ud(n, e, t); hd(s, n); let r = n.selector && as.parse(n.selector), i = r && r[0]; if (i) {
    let w = i.getAttrs();
    w.length && s.set("attrs", e.getConstLiteral(q(w.map(C => C != null ? d(C) : d(void 0))), !0));
} let a = n.name, o = null; if (n.defer.mode === 1 && n.defer.dependenciesFn !== null) {
    let w = `${a}_DeferFn`;
    e.statements.push(new he(w, n.defer.dependenciesFn, void 0, ue.Final)), o = D(w);
} let l = n.isStandalone && !n.hasDirectiveDependencies ? We.DomOnly : We.Full, c = Q2(n.name, n.template.nodes, e, l, n.relativeContextFilePath, n.i18nUseExternalIds, n.defer, o, n.relativeTemplatePath, vy()); Qf(c, A.Tmpl); let h = z2(c, e); if (c.contentSelectors !== null && s.set("ngContentSelectors", c.contentSelectors), s.set("decls", d(c.root.decls)), s.set("vars", d(c.root.vars)), c.consts.length > 0 && (c.constsInitializers.length > 0 ? s.set("consts", ie([], [...c.constsInitializers, new me(q(c.consts))])) : s.set("consts", q(c.consts))), s.set("template", h), n.declarationListEmitMode !== 3 && n.declarations.length > 0)
    s.set("dependencies", PC(q(n.declarations.map(w => w.type)), n.declarationListEmitMode));
else if (n.declarationListEmitMode === 3) {
    let w = [n.type.value];
    n.rawImports && w.push(n.rawImports), s.set("dependencies", y(f.getComponentDepsFactory).callFn(w));
} n.encapsulation === null && (n.encapsulation = At.Emulated); let p = !!n.externalStyles?.length; if (n.styles && n.styles.length) {
    let C = (n.encapsulation == At.Emulated ? OC(n.styles, Cc, yc) : n.styles).reduce((T, k) => (k.trim().length > 0 && T.push(e.getConstLiteral(d(k))), T), []);
    C.length > 0 && (p = !0, s.set("styles", q(C)));
} !p && n.encapsulation === At.Emulated && (n.encapsulation = At.None), n.encapsulation !== At.Emulated && s.set("encapsulation", d(n.encapsulation)), n.animations !== null && s.set("data", Ce([{ key: "animation", value: n.animations, quoted: !1 }])), n.changeDetection !== null && (typeof n.changeDetection == "number" && n.changeDetection !== Fi.Default ? s.set("changeDetection", d(n.changeDetection)) : typeof n.changeDetection == "object" && s.set("changeDetection", n.changeDetection)); let m = y(f.defineComponent).callFn([s.toLiteralMap()], void 0, !0), v = pd(n); return { expression: m, type: v, statements: [] }; }
function pd(n) { let e = fd(n); return e.push(kc(n.template.ngContentSelectors)), e.push(xe(d(n.isStandalone))), e.push(md(n)), n.isSignal && e.push(xe(d(n.isSignal))), xe(y(f.ComponentDeclaration, e)); }
function PC(n, e) { switch (e) {
    case 0: return n;
    case 1: return ie([], n);
    case 2:
        let t = n.prop("map").callFn([y(f.resolveForwardRef)]);
        return ie([], t);
    case 3: throw new Error("Unsupported with an array of pre-resolved dependencies");
} }
function LC(n) { return xe(d(n)); }
function Ac(n) { let e = Object.keys(n).map(t => { let s = Array.isArray(n[t]) ? n[t][0] : n[t]; return { key: t, value: d(s), quoted: !0 }; }); return Ce(e); }
function kc(n) { return n.length > 0 ? xe(q(n.map(e => d(e)))) : bt; }
function fd(n) { let e = n.selector !== null ? n.selector.replace(/\n/g, "") : null; return [vo(n.type.type, n.typeArgumentCount), e !== null ? LC(e) : bt, n.exportAs !== null ? kc(n.exportAs) : bt, xe(BC(n)), xe(Ac(n.outputs)), kc(n.queries.map(t => t.propertyName))]; }
function BC(n) { return Ce(Object.keys(n.inputs).map(e => { let t = n.inputs[e], s = [{ key: "alias", value: d(t.bindingPropertyName), quoted: !0 }, { key: "required", value: d(t.required), quoted: !0 }]; return t.isSignal && s.push({ key: "isSignal", value: d(t.isSignal), quoted: !0 }), { key: e, value: Ce(s), quoted: !0 }; })); }
function dd(n) { let e = fd(n); return e.push(bt), e.push(xe(d(n.isStandalone))), e.push(md(n)), n.isSignal && e.push(xe(d(n.isSignal))), xe(y(f.DirectiveDeclaration, e)); }
function MC(n, e, t, s, r, i, a) { let o = t.createBoundHostProperties(n.properties, e), l = t.createDirectiveHostEventAsts(n.listeners, e); n.specialAttributes.styleAttr && (n.attributes.style = d(n.specialAttributes.styleAttr)), n.specialAttributes.classAttr && (n.attributes.class = d(n.specialAttributes.classAttr)); let c = Z2({ componentName: i, componentSelector: r, properties: o, events: l, attributes: n.attributes }, t, s); Qf(c, A.Host), a.set("hostAttrs", c.root.attributes); let h = c.root.vars; return h !== null && h > 0 && a.set("hostVars", d(h)), G2(c); }
function RC(n) { let e = {}, t = {}, s = {}, r = {}; for (let i of Object.keys(n)) {
    let a = n[i];
    if (i.startsWith("(") && i.endsWith(")")) {
        if (typeof a != "string")
            throw new Error("Event binding must be string");
        t[i.slice(1, -1)] = a;
    }
    else if (i.startsWith("[") && i.endsWith("]")) {
        if (typeof a != "string")
            throw new Error("Property binding must be string");
        s[i.slice(1, -1)] = a;
    }
    else
        switch (i) {
            case "class":
                if (typeof a != "string")
                    throw new Error("Class binding must be string");
                r.classAttr = a;
                break;
            case "style":
                if (typeof a != "string")
                    throw new Error("Style binding must be string");
                r.styleAttr = a;
                break;
            default: typeof a == "string" ? e[i] = d(a) : e[i] = a;
        }
} return { attributes: e, listeners: t, properties: s, specialAttributes: r }; }
function FC(n, e) { let t = ao(); return t.createDirectiveHostEventAsts(n.listeners, e), t.createBoundHostProperties(n.properties, e), $C(n, t, e), t.errors; }
function $C(n, e, t) {
    for (let s in n.properties) {
        let r = s.startsWith("attr."), i = r ? s.slice(5) : s;
        if (i.toLowerCase().startsWith("on")) {
            let a = r ? "attribute" : "property", o = `(${i.slice(2)})=...`, l = `Binding to event ${a} '${i}' is disallowed for security reasons, please use ${o}`;
            r || (l += `
If '${s}' is a directive input, make sure the directive is imported by the current module.`), e.errors.push(new I(t, l));
        }
    }
}
function OC(n, e, t) { let s = new Ma; return n.map(r => s.shimCssText(r, e, t)); }
function Dk(n, e) { let t = new Ma, s = e ? Cc.replace(oo, e) : Cc, r = e ? yc.replace(oo, e) : yc; return t.shimCssText(n, s, r); }
function md(n) { return n.hostDirectives?.length ? xe(q(n.hostDirectives.map(e => Ce([{ key: "directive", value: ar(e.directive.type), quoted: !1 }, { key: "inputs", value: Ac(e.inputs || {}), quoted: !1 }, { key: "outputs", value: Ac(e.outputs || {}), quoted: !1 }])))) : bt; }
function VC(n) { let e = [], t = !1; for (let s of n) {
    if (!s.inputs && !s.outputs)
        e.push(s.directive.type);
    else {
        let r = [{ key: "directive", value: s.directive.type, quoted: !1 }];
        if (s.inputs) {
            let i = lo(s.inputs);
            i && r.push({ key: "inputs", value: i, quoted: !1 });
        }
        if (s.outputs) {
            let i = lo(s.outputs);
            i && r.push({ key: "outputs", value: i, quoted: !1 });
        }
        e.push(Ce(r));
    }
    s.isForwardReference && (t = !0);
} return t ? new en([], [new me(q(e))]) : q(e); }
function lo(n) { let e = []; for (let t in n)
    n.hasOwnProperty(t) && e.push(d(t), d(n[t])); return e.length > 0 ? q(e) : null; }
function Pk(n) { let e = []; if (n.mode === 0)
    for (let t of n.dependencies)
        if (t.isDeferrable) {
            let s = ie([new J("m", re)], D("m").prop(t.isDefaultImport ? "default" : t.symbolName)), r = new cs(t.importPath).prop("then").callFn([s]);
            e.push(r);
        }
        else
            e.push(t.typeReference);
else
    for (let { symbolName: t, importPath: s, isDefaultImport: r } of n.dependencies) {
        let i = ie([new J("m", re)], D("m").prop(r ? "default" : t)), a = new cs(s).prop("then").callFn([i]);
        e.push(a);
    } return ie([], q(e)); }
var _c = class extends Gs {
    visit(e) { e instanceof Ge ? this.visit(e.ast) : e.visit(this); }
    visitElement(e) { this.visitAllTemplateNodes(e.attributes), this.visitAllTemplateNodes(e.inputs), this.visitAllTemplateNodes(e.outputs), this.visitAllTemplateNodes(e.directives), this.visitAllTemplateNodes(e.references), this.visitAllTemplateNodes(e.children); }
    visitTemplate(e) { this.visitAllTemplateNodes(e.attributes), this.visitAllTemplateNodes(e.inputs), this.visitAllTemplateNodes(e.outputs), this.visitAllTemplateNodes(e.directives), this.visitAllTemplateNodes(e.templateAttrs), this.visitAllTemplateNodes(e.variables), this.visitAllTemplateNodes(e.references), this.visitAllTemplateNodes(e.children); }
    visitContent(e) { this.visitAllTemplateNodes(e.children); }
    visitBoundAttribute(e) { this.visit(e.value); }
    visitBoundEvent(e) { this.visit(e.handler); }
    visitBoundText(e) { this.visit(e.value); }
    visitIcu(e) { Object.keys(e.vars).forEach(t => this.visit(e.vars[t])), Object.keys(e.placeholders).forEach(t => this.visit(e.placeholders[t])); }
    visitDeferredBlock(e) { e.visitAll(this); }
    visitDeferredTrigger(e) { e instanceof Aa ? this.visit(e.value) : e instanceof ii && e.options !== null && this.visit(e.options); }
    visitDeferredBlockPlaceholder(e) { this.visitAllTemplateNodes(e.children); }
    visitDeferredBlockError(e) { this.visitAllTemplateNodes(e.children); }
    visitDeferredBlockLoading(e) { this.visitAllTemplateNodes(e.children); }
    visitSwitchBlock(e) { this.visit(e.expression), this.visitAllTemplateNodes(e.groups); }
    visitSwitchBlockCase(e) { e.expression && this.visit(e.expression); }
    visitSwitchBlockCaseGroup(e) { this.visitAllTemplateNodes(e.cases), this.visitAllTemplateNodes(e.children); }
    visitSwitchExhaustiveCheck(e) { }
    visitForLoopBlock(e) { e.item.visit(this), this.visitAllTemplateNodes(e.contextVariables), this.visit(e.expression), this.visitAllTemplateNodes(e.children), e.empty?.visit(this); }
    visitForLoopBlockEmpty(e) { this.visitAllTemplateNodes(e.children); }
    visitIfBlock(e) { this.visitAllTemplateNodes(e.branches); }
    visitIfBlockBranch(e) { e.expression && this.visit(e.expression), e.expressionAlias?.visit(this), this.visitAllTemplateNodes(e.children); }
    visitLetDeclaration(e) { this.visit(e.value); }
    visitComponent(e) { this.visitAllTemplateNodes(e.attributes), this.visitAllTemplateNodes(e.inputs), this.visitAllTemplateNodes(e.outputs), this.visitAllTemplateNodes(e.directives), this.visitAllTemplateNodes(e.references), this.visitAllTemplateNodes(e.children); }
    visitDirective(e) { this.visitAllTemplateNodes(e.attributes), this.visitAllTemplateNodes(e.inputs), this.visitAllTemplateNodes(e.outputs), this.visitAllTemplateNodes(e.references); }
    visitVariable(e) { }
    visitReference(e) { }
    visitTextAttribute(e) { }
    visitText(e) { }
    visitUnknownBlock(e) { }
    visitAllTemplateNodes(e) { for (let t of e)
        this.visit(t); }
};
function ip(n, e) { let t = new Set(e); return n.filter(s => !t.has(s)); }
function Lk(n, e) { let t = new Fr; for (let c of e) {
    let h = { selector: c, exportAs: null, inputs: { hasBindingPropertyName() { return !1; } }, outputs: { hasBindingPropertyName() { return !1; } } };
    t.addSelectables(as.parse(c), [h]);
} let s = cd(n, ""), i = new co(t).bind({ template: s.nodes }), a = i.getEagerlyUsedDirectives().map(c => c.selector), o = i.getUsedDirectives().map(c => c.selector), l = i.getEagerlyUsedPipes(); return { directives: { regular: a, deferCandidates: ip(o, a) }, pipes: { regular: l, deferCandidates: ip(i.getUsedPipes(), l) } }; }
var co = class {
    directiveMatcher;
    constructor(e) { this.directiveMatcher = e; }
    bind(e) { if (!e.template && !e.host)
        throw new Error("Empty bound targets are not supported"); let t = new Map, s = [], r = new Set, i = new Map, a = new Map, o = new Map, l = new Map, c = new Map, h = new Map, p = new Set, m = new Set, v = []; if (e.template) {
        let w = uo.apply(e.template);
        qC(w, o), bc.apply(e.template, this.directiveMatcher, t, s, r, i, a), ho.applyWithScope(e.template, w, l, c, h, p, m, v);
    } return e.host && (t.set(e.host.node, e.host.directives), ho.applyWithScope(e.host.node, uo.apply(e.host.node), l, c, h, p, m, v)), new Tc(e, t, s, r, i, a, l, c, h, o, p, m, v); }
}, uo = class n {
    parentScope;
    rootNode;
    namedEntities = new Map;
    elementLikeInScope = new Set;
    childScopes = new Map;
    isDeferred;
    constructor(e, t) { this.parentScope = e, this.rootNode = t, this.isDeferred = e !== null && e.isDeferred ? !0 : t instanceof ds; }
    static newRootScope() { return new n(null, null); }
    static apply(e) { let t = n.newRootScope(); return t.ingest(e), t; }
    ingest(e) { e instanceof rt ? (e.variables.forEach(t => this.visitVariable(t)), e.children.forEach(t => t.visit(this))) : e instanceof es ? (e.expressionAlias !== null && this.visitVariable(e.expressionAlias), e.children.forEach(t => t.visit(this))) : e instanceof Qs ? (this.visitVariable(e.item), e.contextVariables.forEach(t => this.visitVariable(t)), e.children.forEach(t => t.visit(this))) : e instanceof ci || e instanceof ui || e instanceof ds || e instanceof li || e instanceof ai || e instanceof oi || e instanceof Zs ? e.children.forEach(t => t.visit(this)) : e instanceof pi || e.forEach(t => t.visit(this)); }
    visitElement(e) { this.visitElementLike(e); }
    visitTemplate(e) { e.directives.forEach(t => t.visit(this)), e.references.forEach(t => this.visitReference(t)), this.ingestScopedNode(e); }
    visitVariable(e) { this.maybeDeclare(e); }
    visitReference(e) { this.maybeDeclare(e); }
    visitDeferredBlock(e) { this.ingestScopedNode(e), e.placeholder?.visit(this), e.loading?.visit(this), e.error?.visit(this); }
    visitDeferredBlockPlaceholder(e) { this.ingestScopedNode(e); }
    visitDeferredBlockError(e) { this.ingestScopedNode(e); }
    visitDeferredBlockLoading(e) { this.ingestScopedNode(e); }
    visitSwitchBlock(e) { e.groups.forEach(t => t.visit(this)); }
    visitSwitchBlockCase(e) { }
    visitSwitchBlockCaseGroup(e) { this.ingestScopedNode(e); }
    visitSwitchExhaustiveCheck(e) { }
    visitForLoopBlock(e) { this.ingestScopedNode(e), e.empty?.visit(this); }
    visitForLoopBlockEmpty(e) { this.ingestScopedNode(e); }
    visitIfBlock(e) { e.branches.forEach(t => t.visit(this)); }
    visitIfBlockBranch(e) { this.ingestScopedNode(e); }
    visitContent(e) { this.ingestScopedNode(e); }
    visitLetDeclaration(e) { this.maybeDeclare(e); }
    visitComponent(e) { this.visitElementLike(e); }
    visitDirective(e) { e.references.forEach(t => this.visitReference(t)); }
    visitBoundAttribute(e) { }
    visitBoundEvent(e) { }
    visitBoundText(e) { }
    visitText(e) { }
    visitTextAttribute(e) { }
    visitIcu(e) { }
    visitDeferredTrigger(e) { }
    visitUnknownBlock(e) { }
    visitElementLike(e) { e.directives.forEach(t => t.visit(this)), e.references.forEach(t => this.visitReference(t)), e.children.forEach(t => t.visit(this)), this.elementLikeInScope.add(e); }
    maybeDeclare(e) { this.namedEntities.has(e.name) || this.namedEntities.set(e.name, e); }
    lookup(e) { return this.namedEntities.has(e) ? this.namedEntities.get(e) : this.parentScope !== null ? this.parentScope.lookup(e) : null; }
    getChildScope(e) { let t = this.childScopes.get(e); if (t === void 0)
        throw new Error(`Assertion error: child scope for ${e} not found`); return t; }
    ingestScopedNode(e) { let t = new n(this, e); t.ingest(e), this.childScopes.set(e, t); }
}, bc = class n {
    directiveMatcher;
    directives;
    eagerDirectives;
    missingDirectives;
    bindings;
    references;
    isInDeferBlock = !1;
    constructor(e, t, s, r, i, a) { this.directiveMatcher = e, this.directives = t, this.eagerDirectives = s, this.missingDirectives = r, this.bindings = i, this.references = a; }
    static apply(e, t, s, r, i, a, o) { new n(t, s, r, i, a, o).ingest(e); }
    ingest(e) { e.forEach(t => t.visit(this)); }
    visitElement(e) { this.visitElementOrTemplate(e); }
    visitTemplate(e) { this.visitElementOrTemplate(e); }
    visitDeferredBlock(e) { let t = this.isInDeferBlock; this.isInDeferBlock = !0, e.children.forEach(s => s.visit(this)), this.isInDeferBlock = t, e.placeholder?.visit(this), e.loading?.visit(this), e.error?.visit(this); }
    visitDeferredBlockPlaceholder(e) { e.children.forEach(t => t.visit(this)); }
    visitDeferredBlockError(e) { e.children.forEach(t => t.visit(this)); }
    visitDeferredBlockLoading(e) { e.children.forEach(t => t.visit(this)); }
    visitSwitchBlock(e) { e.groups.forEach(t => t.visit(this)); }
    visitSwitchBlockCase(e) { }
    visitSwitchBlockCaseGroup(e) { e.children.forEach(t => t.visit(this)); }
    visitSwitchExhaustiveCheck(e) { }
    visitForLoopBlock(e) { e.item.visit(this), e.contextVariables.forEach(t => t.visit(this)), e.children.forEach(t => t.visit(this)), e.empty?.visit(this); }
    visitForLoopBlockEmpty(e) { e.children.forEach(t => t.visit(this)); }
    visitIfBlock(e) { e.branches.forEach(t => t.visit(this)); }
    visitIfBlockBranch(e) { e.expressionAlias?.visit(this), e.children.forEach(t => t.visit(this)); }
    visitContent(e) { e.children.forEach(t => t.visit(this)); }
    visitComponent(e) { if (this.directiveMatcher instanceof oa) {
        let t = this.directiveMatcher.match(e.componentName);
        t.length > 0 ? this.trackSelectorlessMatchesAndDirectives(e, t) : this.missingDirectives.add(e.componentName);
    } e.directives.forEach(t => t.visit(this)), e.children.forEach(t => t.visit(this)); }
    visitDirective(e) { if (this.directiveMatcher instanceof oa) {
        let t = this.directiveMatcher.match(e.name);
        t.length > 0 ? this.trackSelectorlessMatchesAndDirectives(e, t) : this.missingDirectives.add(e.name);
    } }
    visitElementOrTemplate(e) { if (this.directiveMatcher instanceof Fr) {
        let t = [], s = Hm(e);
        this.directiveMatcher.match(s, (r, i) => t.push(...i)), this.trackSelectorBasedBindingsAndDirectives(e, t);
    }
    else
        e.references.forEach(t => { t.value.trim() === "" && this.references.set(t, e); }); e.directives.forEach(t => t.visit(this)), e.children.forEach(t => t.visit(this)); }
    trackMatchedDirectives(e, t) { t.length > 0 && (this.directives.set(e, t), this.isInDeferBlock || this.eagerDirectives.push(...t)); }
    trackSelectorlessMatchesAndDirectives(e, t) { if (t.length === 0)
        return; this.trackMatchedDirectives(e, t); let s = (r, i, a) => { r[a].hasBindingPropertyName(i.name) && this.bindings.set(i, r); }; for (let r of t)
        e.inputs.forEach(i => s(r, i, "inputs")), e.attributes.forEach(i => s(r, i, "inputs")), e.outputs.forEach(i => s(r, i, "outputs")); e.references.forEach(r => this.references.set(r, { directive: t[0], node: e })); }
    trackSelectorBasedBindingsAndDirectives(e, t) { this.trackMatchedDirectives(e, t), e.references.forEach(r => { let i = null; if (r.value.trim() === "")
        i = t.find(a => a.isComponent) || null;
    else if (i = t.find(a => a.exportAs !== null && a.exportAs.some(o => o === r.value)) || null, i === null)
        return; i !== null ? this.references.set(r, { directive: i, node: e }) : this.references.set(r, e); }); let s = (r, i) => { let a = t.find(l => l[i].hasBindingPropertyName(r.name)), o = a !== void 0 ? a : e; this.bindings.set(r, o); }; e.inputs.forEach(r => s(r, "inputs")), e.attributes.forEach(r => s(r, "inputs")), e instanceof rt && e.templateAttrs.forEach(r => s(r, "inputs")), e.outputs.forEach(r => s(r, "outputs")); }
    visitVariable(e) { }
    visitReference(e) { }
    visitTextAttribute(e) { }
    visitBoundAttribute(e) { }
    visitBoundEvent(e) { }
    visitBoundAttributeOrEvent(e) { }
    visitText(e) { }
    visitBoundText(e) { }
    visitIcu(e) { }
    visitDeferredTrigger(e) { }
    visitUnknownBlock(e) { }
    visitLetDeclaration(e) { }
}, ho = class n extends _c {
    bindings;
    symbols;
    usedPipes;
    eagerPipes;
    deferBlocks;
    nestingLevel;
    scope;
    rootNode;
    level;
    visitNode = e => e.visit(this);
    constructor(e, t, s, r, i, a, o, l, c) { super(), this.bindings = e, this.symbols = t, this.usedPipes = s, this.eagerPipes = r, this.deferBlocks = i, this.nestingLevel = a, this.scope = o, this.rootNode = l, this.level = c; }
    static applyWithScope(e, t, s, r, i, a, o, l) { let c = e instanceof rt ? e : null; new n(s, r, a, o, l, i, t, c, 0).ingest(e); }
    ingest(e) { if (e instanceof rt)
        e.variables.forEach(this.visitNode), e.children.forEach(this.visitNode), this.nestingLevel.set(e, this.level);
    else if (e instanceof es)
        e.expressionAlias !== null && this.visitNode(e.expressionAlias), e.children.forEach(this.visitNode), this.nestingLevel.set(e, this.level);
    else if (e instanceof Qs)
        this.visitNode(e.item), e.contextVariables.forEach(t => this.visitNode(t)), e.trackBy.visit(this), e.children.forEach(this.visitNode), this.nestingLevel.set(e, this.level);
    else if (e instanceof ds) {
        if (this.scope.rootNode !== e)
            throw new Error(`Assertion error: resolved incorrect scope for deferred block ${e}`);
        this.deferBlocks.push([e, this.scope]), e.children.forEach(t => t.visit(this)), this.nestingLevel.set(e, this.level);
    }
    else
        e instanceof ci || e instanceof ui || e instanceof li || e instanceof ai || e instanceof oi || e instanceof Zs ? (e.children.forEach(t => t.visit(this)), this.nestingLevel.set(e, this.level)) : e instanceof pi ? this.nestingLevel.set(e, 0) : e.forEach(this.visitNode); }
    visitTemplate(e) { e.inputs.forEach(this.visitNode), e.outputs.forEach(this.visitNode), e.directives.forEach(this.visitNode), e.templateAttrs.forEach(this.visitNode), e.references.forEach(this.visitNode), this.ingestScopedNode(e); }
    visitVariable(e) { this.rootNode !== null && this.symbols.set(e, this.rootNode); }
    visitReference(e) { this.rootNode !== null && this.symbols.set(e, this.rootNode); }
    visitDeferredBlock(e) { this.ingestScopedNode(e), e.triggers.when?.value.visit(this), e.prefetchTriggers.when?.value.visit(this), e.hydrateTriggers.when?.value.visit(this), e.hydrateTriggers.never?.visit(this), e.placeholder && this.visitNode(e.placeholder), e.loading && this.visitNode(e.loading), e.error && this.visitNode(e.error); }
    visitDeferredBlockPlaceholder(e) { this.ingestScopedNode(e); }
    visitDeferredBlockError(e) { this.ingestScopedNode(e); }
    visitDeferredBlockLoading(e) { this.ingestScopedNode(e); }
    visitSwitchBlockCase(e) { e.expression?.visit(this); }
    visitSwitchBlockCaseGroup(e) { e.cases.forEach(t => t.visit(this)), this.ingestScopedNode(e); }
    visitSwitchExhaustiveCheck(e) { }
    visitForLoopBlock(e) { e.expression.visit(this), this.ingestScopedNode(e), e.empty?.visit(this); }
    visitForLoopBlockEmpty(e) { this.ingestScopedNode(e); }
    visitIfBlockBranch(e) { e.expression?.visit(this), this.ingestScopedNode(e); }
    visitContent(e) { this.ingestScopedNode(e); }
    visitLetDeclaration(e) { super.visitLetDeclaration(e), this.rootNode !== null && this.symbols.set(e, this.rootNode); }
    visitPipe(e, t) { return this.usedPipes.add(e.name), this.scope.isDeferred || this.eagerPipes.add(e.name), super.visitPipe(e, t); }
    visitPropertyRead(e, t) { return this.maybeMap(e, e.name), super.visitPropertyRead(e, t); }
    visitSafePropertyRead(e, t) { return this.maybeMap(e, e.name), super.visitSafePropertyRead(e, t); }
    ingestScopedNode(e) { let t = this.scope.getChildScope(e); new n(this.bindings, this.symbols, this.usedPipes, this.eagerPipes, this.deferBlocks, this.nestingLevel, t, e, this.level + 1).ingest(e); }
    maybeMap(e, t) { if (!(e.receiver instanceof Ut))
        return; let s = this.scope.lookup(t); s !== null && this.bindings.set(e, s); }
}, Tc = class {
    target;
    directives;
    eagerDirectives;
    missingDirectives;
    bindings;
    references;
    exprTargets;
    symbols;
    nestingLevel;
    scopedNodeEntities;
    usedPipes;
    eagerPipes;
    deferredBlocks;
    deferredScopes;
    constructor(e, t, s, r, i, a, o, l, c, h, p, m, v) { this.target = e, this.directives = t, this.eagerDirectives = s, this.missingDirectives = r, this.bindings = i, this.references = a, this.exprTargets = o, this.symbols = l, this.nestingLevel = c, this.scopedNodeEntities = h, this.usedPipes = p, this.eagerPipes = m, this.deferredBlocks = v.map(w => w[0]), this.deferredScopes = new Map(v); }
    getEntitiesInScope(e) { return this.scopedNodeEntities.get(e) ?? new Set; }
    getDirectivesOfNode(e) { return this.directives.get(e) || null; }
    getReferenceTarget(e) { return this.references.get(e) || null; }
    getConsumerOfBinding(e) { return this.bindings.get(e) || null; }
    getExpressionTarget(e) { return this.exprTargets.get(e) || null; }
    getDefinitionNodeOfSymbol(e) { return this.symbols.get(e) || null; }
    getNestingLevel(e) { return this.nestingLevel.get(e) || 0; }
    getUsedDirectives() { let e = new Set; return this.directives.forEach(t => t.forEach(s => e.add(s))), Array.from(e.values()); }
    getEagerlyUsedDirectives() { let e = new Set(this.eagerDirectives); return Array.from(e.values()); }
    getUsedPipes() { return Array.from(this.usedPipes); }
    getEagerlyUsedPipes() { return Array.from(this.eagerPipes); }
    getDeferBlocks() { return this.deferredBlocks; }
    getDeferredTriggerTarget(e, t) { if (!(t instanceof _a) && !(t instanceof ii) && !(t instanceof ka))
        return null; let s = t.reference; if (s === null) {
        let i = null;
        if (e.placeholder !== null) {
            for (let a of e.placeholder.children)
                if (!(a instanceof wo)) {
                    if (i !== null)
                        return null;
                    a instanceof Ht && (i = a);
                }
        }
        return i;
    } let r = this.findEntityInScope(e, s); if (r instanceof hi && this.getDefinitionNodeOfSymbol(r) !== e) {
        let i = this.getReferenceTarget(r);
        if (i !== null)
            return this.referenceTargetToElement(i);
    } if (e.placeholder !== null) {
        let i = this.findEntityInScope(e.placeholder, s), a = i instanceof hi ? this.getReferenceTarget(i) : null;
        if (a !== null)
            return this.referenceTargetToElement(a);
    } return null; }
    isDeferred(e) { for (let t of this.deferredBlocks) {
        if (!this.deferredScopes.has(t))
            continue;
        let s = [this.deferredScopes.get(t)];
        for (; s.length > 0;) {
            let r = s.pop();
            if (r.elementLikeInScope.has(e))
                return !0;
            s.push(...r.childScopes.values());
        }
    } return !1; }
    referencedDirectiveExists(e) { return !this.missingDirectives.has(e); }
    findEntityInScope(e, t) { let s = this.getEntitiesInScope(e); for (let r of s)
        if (r.name === t)
            return r; return null; }
    referenceTargetToElement(e) { return e instanceof Ht ? e : e instanceof rt || e.node instanceof Ir || e.node instanceof Up || e.node instanceof pi ? null : this.referenceTargetToElement(e.node); }
};
function qC(n, e) { let t = new Map; function s(i) { if (t.has(i.rootNode))
    return t.get(i.rootNode); let a = i.namedEntities, o; return i.parentScope !== null ? o = new Map([...s(i.parentScope), ...a]) : o = new Map(a), t.set(i.rootNode, o), o; } let r = [n]; for (; r.length > 0;) {
    let i = r.pop();
    for (let a of i.childScopes.values())
        r.push(a);
    s(i);
} for (let [i, a] of t)
    e.set(i, new Set(a.values())); }
var Ic = class {
}, Nc = class {
    jitEvaluator;
    FactoryTarget = Lt;
    ResourceLoader = Ic;
    elementSchemaRegistry = new rr;
    constructor(e = new Ml) { this.jitEvaluator = e; }
    compilePipe(e, t, s) { let r = { name: s.name, type: Ee(s.type), typeArgumentCount: 0, pipeName: s.pipeName, pure: s.pure, isStandalone: s.isStandalone }, i = Wu(r); return this.jitExpression(i.expression, e, t, []); }
    compilePipeDeclaration(e, t, s) { let r = rA(s), i = Wu(r); return this.jitExpression(i.expression, e, t, []); }
    compileInjectable(e, t, s) { let { expression: r, statements: i } = Bu({ name: s.name, type: Ee(s.type), typeArgumentCount: s.typeArgumentCount, providedIn: hp(s.providedIn), useClass: Ts(s, "useClass"), useFactory: up(s, "useFactory"), useValue: Ts(s, "useValue"), useExisting: Ts(s, "useExisting"), deps: s.deps?.map(Ed) }, !0); return this.jitExpression(r, e, t, i); }
    compileInjectableDeclaration(e, t, s) { let { expression: r, statements: i } = Bu({ name: s.type.name, type: Ee(s.type), typeArgumentCount: 0, providedIn: hp(s.providedIn), useClass: Ts(s, "useClass"), useFactory: up(s, "useFactory"), useValue: Ts(s, "useValue"), useExisting: Ts(s, "useExisting"), deps: s.deps?.map(pp) }, !0); return this.jitExpression(r, e, t, i); }
    compileInjector(e, t, s) { let r = { type: Ee(s.type), providers: s.providers && s.providers.length > 0 ? new W(s.providers) : null, imports: s.imports.map(a => new W(a)) }, i = Hu(r); return this.jitExpression(i.expression, e, t, []); }
    compileInjectorDeclaration(e, t, s) { let r = iA(s), i = Hu(r); return this.jitExpression(i.expression, e, t, []); }
    compileNgModule(e, t, s) { let r = { kind: Jt.Global, type: Ee(s.type), bootstrap: s.bootstrap.map(Ee), declarations: s.declarations.map(Ee), publicDeclarationTypes: null, imports: s.imports.map(Ee), includeImportTypes: !0, exports: s.exports.map(Ee), selectorScopeMode: Ba.Inline, containsForwardDecls: !1, schemas: s.schemas ? s.schemas.map(Ee) : null, id: s.id ? new W(s.id) : null }, i = og(r); return this.jitExpression(i.expression, e, t, []); }
    compileNgModuleDeclaration(e, t, s) { let r = lg(s); return this.jitExpression(r, e, t, []); }
    compileDirective(e, t, s) { let r = lp(s); return this.compileDirectiveFromMeta(e, t, r); }
    compileDirectiveDeclaration(e, t, s) { let r = this.createParseSourceSpan("Directive", s.type.name, t), i = vd(s, r); return this.compileDirectiveFromMeta(e, t, i); }
    compileDirectiveFromMeta(e, t, s) { let r = new pa, i = ao(), a = NC(s, r, i); return this.jitExpression(a.expression, e, t, r.statements); }
    compileComponent(e, t, s) { let { template: r, defer: i } = wd(s.template, s.name, t, s.preserveWhitespaces, void 0), a = pe(S(S({}, s), lp(s)), { selector: s.selector || this.elementSchemaRegistry.getDefaultComponentElementName(), template: r, declarations: s.declarations.map(jC), declarationListEmitMode: 0, defer: i, styles: [...s.styles, ...r.styles], encapsulation: s.encapsulation, changeDetection: s.changeDetection ?? null, animations: s.animations != null ? new W(s.animations) : null, viewProviders: s.viewProviders != null ? new W(s.viewProviders) : null, relativeContextFilePath: "", i18nUseExternalIds: !0, relativeTemplatePath: null }), o = `ng:///${s.name}.js`; return this.compileComponentFromMeta(e, o, a); }
    compileComponentDeclaration(e, t, s) { let r = this.createParseSourceSpan("Component", s.type.name, t), i = WC(s, r, t); return this.compileComponentFromMeta(e, t, i); }
    compileComponentFromMeta(e, t, s) { let r = new pa, i = ao(), a = DC(s, r, i); return this.jitExpression(a.expression, e, t, r.statements); }
    compileFactory(e, t, s) { let r = zn({ name: s.name, type: Ee(s.type), typeArgumentCount: s.typeArgumentCount, deps: XC(s.deps), target: s.target }); return this.jitExpression(r.expression, e, t, r.statements); }
    compileFactoryDeclaration(e, t, s) { let r = zn({ name: s.type.name, type: Ee(s.type), typeArgumentCount: 0, deps: Array.isArray(s.deps) ? s.deps.map(pp) : s.deps, target: s.target }); return this.jitExpression(r.expression, e, t, r.statements); }
    createParseSourceSpan(e, t, s) { return tg(e, t, s); }
    jitExpression(e, t, s, r) { let i = [...r, new he("$def", e, void 0, ue.Exported)]; return this.jitEvaluator.evaluateStatements(s, i, new Fl(t), !0).$def; }
};
function ap(n) { return pe(S({}, n), { isSignal: n.isSignal, predicate: gd(n.predicate), read: n.read ? new W(n.read) : null, static: n.static, emitDistinctChangesOnly: n.emitDistinctChangesOnly }); }
function op(n) { return { propertyName: n.propertyName, first: n.first ?? !1, predicate: gd(n.predicate), descendants: n.descendants ?? !1, read: n.read ? new W(n.read) : null, static: n.static ?? !1, emitDistinctChangesOnly: n.emitDistinctChangesOnly ?? !0, isSignal: !!n.isSignal }; }
function gd(n) { return Array.isArray(n) ? n : Qc(new W(n), 1); }
function lp(n) { let e = sA(n.inputs || []), t = Go(n.outputs || []), s = n.propMetadata, r = {}, i = {}; for (let o in s)
    s.hasOwnProperty(o) && s[o].forEach(l => { KC(l) ? r[o] = { bindingPropertyName: l.alias || o, classPropertyName: o, required: l.required || !1, isSignal: !!l.isSignal, transformFunction: l.transform != null ? new W(l.transform) : null } : eA(l) && (i[o] = l.alias || o); }); let a = n.hostDirectives?.length ? n.hostDirectives.map(o => typeof o == "function" ? { directive: Ee(o), inputs: null, outputs: null, isForwardReference: !1 } : { directive: Ee(o.directive), isForwardReference: !1, inputs: o.inputs ? Go(o.inputs) : null, outputs: o.outputs ? Go(o.outputs) : null }) : null; return pe(S({}, n), { typeArgumentCount: 0, typeSourceSpan: n.typeSourceSpan, type: Ee(n.type), deps: null, host: S({}, QC(n.propMetadata, n.typeSourceSpan, n.host)), inputs: S(S({}, e), r), outputs: S(S({}, t), i), queries: n.queries.map(ap), providers: n.providers != null ? new W(n.providers) : null, viewQueries: n.viewQueries.map(ap), hostDirectives: a }); }
function vd(n, e) { let t = n.hostDirectives?.length ? n.hostDirectives.map(s => ({ directive: Ee(s.directive), isForwardReference: !1, inputs: s.inputs ? cp(s.inputs) : null, outputs: s.outputs ? cp(s.outputs) : null })) : null; return { name: n.type.name, type: Ee(n.type), typeSourceSpan: e, selector: n.selector ?? null, inputs: n.inputs ? tA(n.inputs) : {}, outputs: n.outputs ?? {}, host: UC(n.host), queries: (n.queries ?? []).map(op), viewQueries: (n.viewQueries ?? []).map(op), providers: n.providers !== void 0 ? new W(n.providers) : null, exportAs: n.exportAs ?? null, usesInheritance: n.usesInheritance ?? !1, controlCreate: n.controlCreate ?? null, lifecycle: { usesOnChanges: n.usesOnChanges ?? !1 }, deps: null, typeArgumentCount: 0, isStandalone: n.isStandalone ?? Op(n.version), isSignal: n.isSignal ?? !1, hostDirectives: t }; }
function UC(n = {}) { return { attributes: HC(n.attributes ?? {}), listeners: n.listeners ?? {}, properties: n.properties ?? {}, specialAttributes: { classAttr: n.classAttribute, styleAttr: n.styleAttribute } }; }
function cp(n) { let e = null; for (let t = 1; t < n.length; t += 2)
    e = e || {}, e[n[t - 1]] = n[t]; return e; }
function HC(n) { let e = {}; for (let t of Object.keys(n))
    e[t] = new W(n[t]); return e; }
function WC(n, e, t) { let { template: s, defer: r } = wd(n.template, n.type.name, t, n.preserveWhitespaces ?? !1, n.deferBlockDependencies), i = []; if (n.dependencies)
    for (let o of n.dependencies)
        switch (o.kind) {
            case "directive":
            case "component":
                i.push(zo(o));
                break;
            case "pipe":
                i.push(GC(o));
                break;
        }
else
    (n.components || n.directives || n.pipes) && (n.components && i.push(...n.components.map(o => zo(o, !0))), n.directives && i.push(...n.directives.map(o => zo(o))), n.pipes && i.push(...zC(n.pipes))); let a = i.some(({ kind: o }) => o === tn.Directive || o === tn.NgModule); return pe(S({}, vd(n, e)), { template: s, styles: n.styles ?? [], declarations: i, viewProviders: n.viewProviders !== void 0 ? new W(n.viewProviders) : null, animations: n.animations !== void 0 ? new W(n.animations) : null, defer: r, changeDetection: n.changeDetection ?? Fi.Default, encapsulation: n.encapsulation ?? At.Emulated, declarationListEmitMode: 2, relativeContextFilePath: "", i18nUseExternalIds: !0, relativeTemplatePath: null, hasDirectiveDependencies: a }); }
function jC(n) { return pe(S({}, n), { type: new W(n.type) }); }
function zo(n, e = null) { return { kind: tn.Directive, isComponent: e || n.kind === "component", selector: n.selector, type: new W(n.type), inputs: n.inputs ?? [], outputs: n.outputs ?? [], exportAs: n.exportAs ?? null }; }
function zC(n) { return n ? Object.keys(n).map(e => ({ kind: tn.Pipe, name: e, type: new W(n[e]) })) : []; }
function GC(n) { return { kind: tn.Pipe, name: n.name, type: new W(n.type) }; }
function wd(n, e, t, s, r) { let i = cd(n, t, { preserveWhitespaces: s }); if (i.errors !== null) {
    let l = i.errors.map(c => c.toString()).join(", ");
    throw new Error(`Errors during JIT compilation of template for ${e}: ${l}`);
} let o = new co(null).bind({ template: i.nodes }); return { template: i, defer: YC(o, r) }; }
function Ts(n, e) { if (n.hasOwnProperty(e))
    return Qc(new W(n[e]), 0); }
function up(n, e) { if (n.hasOwnProperty(e))
    return new W(n[e]); }
function hp(n) { let e = typeof n == "function" ? new W(n) : new ye(n ?? null); return Qc(e, 0); }
function XC(n) { return n == null ? null : n.map(Ed); }
function Ed(n) { let e = n.attribute != null, t = n.token === null ? null : new W(n.token), s = e ? new W(n.attribute) : t; return Sd(s, e, n.host, n.optional, n.self, n.skipSelf); }
function pp(n) { let e = n.attribute ?? !1, t = n.token === null ? null : new W(n.token); return Sd(t, e, n.host ?? !1, n.optional ?? !1, n.self ?? !1, n.skipSelf ?? !1); }
function Sd(n, e, t, s, r, i) { let a = e ? d("unknown") : null; return { token: n, attributeNameType: a, host: t, optional: s, self: r, skipSelf: i }; }
function YC(n, e) { let t = n.getDeferBlocks(), s = new Map; for (let r = 0; r < t.length; r++) {
    let i = e?.[r];
    s.set(t[r], i ? new W(i) : null);
} return { mode: 0, blocks: s }; }
function QC(n, e, t) {
    let s = RC(t || {});
    for (let i in n)
        n.hasOwnProperty(i) && n[i].forEach(a => { ZC(a) ? s.properties[a.hostPropertyName || i] = Cm("this", i) : JC(a) && (s.listeners[a.eventName || i] = `${i}(${(a.args || []).join(",")})`); });
    let r = FC(s, e);
    if (r.length)
        throw new Error(r.map(i => i.msg).join(`
`));
    return s;
}
function ZC(n) { return n.ngMetadataName === "HostBinding"; }
function JC(n) { return n.ngMetadataName === "HostListener"; }
function KC(n) { return n.ngMetadataName === "Input"; }
function eA(n) { return n.ngMetadataName === "Output"; }
function tA(n) { return Object.keys(n).reduce((e, t) => { let s = n[t]; return typeof s == "string" || Array.isArray(s) ? e[t] = nA(s) : e[t] = { bindingPropertyName: s.publicName, classPropertyName: t, transformFunction: s.transformFunction !== null ? new W(s.transformFunction) : null, required: s.isRequired, isSignal: s.isSignal }, e; }, {}); }
function nA(n) { return typeof n == "string" ? { bindingPropertyName: n, classPropertyName: n, transformFunction: null, required: !1, isSignal: !1 } : { bindingPropertyName: n[0], classPropertyName: n[1], transformFunction: n[2] ? new W(n[2]) : null, required: !1, isSignal: !1 }; }
function sA(n) { return n.reduce((e, t) => { if (typeof t == "string") {
    let [s, r] = xd(t);
    e[r] = { bindingPropertyName: s, classPropertyName: r, required: !1, isSignal: !1, transformFunction: null };
}
else
    e[t.name] = { bindingPropertyName: t.alias || t.name, classPropertyName: t.name, required: t.required || !1, isSignal: !1, transformFunction: t.transform != null ? new W(t.transform) : null }; return e; }, {}); }
function Go(n) { return n.reduce((e, t) => { let [s, r] = xd(t); return e[r] = s, e; }, {}); }
function xd(n) { let [e, t] = n.split(":", 2).map(s => s.trim()); return [t ?? e, e]; }
function rA(n) { return { name: n.type.name, type: Ee(n.type), typeArgumentCount: 0, pipeName: n.name, deps: null, pure: n.pure ?? !0, isStandalone: n.isStandalone ?? Op(n.version) }; }
function iA(n) { return { name: n.type.name, type: Ee(n.type), providers: n.providers !== void 0 && n.providers.length > 0 ? new W(n.providers) : null, imports: n.imports !== void 0 ? n.imports.map(e => new W(e)) : [] }; }
function Bk(n) { let e = n.ng || (n.ng = {}); e.\u0275compilerFacade = new Nc; }
var fp = class {
    defaultEncapsulation;
    preserveWhitespaces;
    strictInjectionParameters;
    constructor({ defaultEncapsulation: e = At.Emulated, preserveWhitespaces: t, strictInjectionParameters: s } = {}) { this.defaultEncapsulation = e, this.preserveWhitespaces = aA(fm(t)), this.strictInjectionParameters = s === !0; }
};
function aA(n, e = !1) { return n === null ? e : n; }
var yd = "i18n", yr = "i18n-", oA = /^i18n:?/, lA = "|", cA = "@@", dp = !1;
function uA(n, e, t, s) { return new po(e, t, s).extract(n); }
function hA(n, e, t, s) { return new po(t, s).merge(n, e); }
var Dc = class {
    messages;
    errors;
    constructor(e, t) { this.messages = e, this.errors = t; }
}, Dt = (function (n) { return n[n.Extract = 0] = "Extract", n[n.Merge = 1] = "Merge", n; })(Dt || {}), po = class {
    _implicitTags;
    _implicitAttrs;
    _preserveSignificantWhitespace;
    _depth;
    _inI18nNode;
    _inImplicitNode;
    _inI18nBlock;
    _blockMeaningAndDesc;
    _blockChildren;
    _blockStartDepth;
    _inIcu;
    _msgCountAtSectionStart;
    _errors;
    _mode;
    _messages;
    _translations;
    _createI18nMessage;
    constructor(e, t, s = !0) { this._implicitTags = e, this._implicitAttrs = t, this._preserveSignificantWhitespace = s; }
    extract(e) { return this._init(Dt.Extract), e.forEach(t => t.visit(this, null)), this._inI18nBlock && this._reportError(e[e.length - 1], "Unclosed block"), new Dc(this._messages, this._errors); }
    merge(e, t) { this._init(Dt.Merge), this._translations = t; let r = new Re("wrapper", [], [], e, !1, void 0, void 0, void 0, !1).visit(this, null); return this._inI18nBlock && this._reportError(e[e.length - 1], "Unclosed block"), new sr(r.children, this._errors); }
    visitExpansionCase(e, t) { let s = P(this, e.expression, t); if (this._mode === Dt.Merge)
        return new Ti(e.value, s, e.sourceSpan, e.valueSourceSpan, e.expSourceSpan); }
    visitExpansion(e, t) { this._mayBeAddBlockChildren(e); let s = this._inIcu; this._inIcu || (this._isInTranslatableSection && this._addMessage([e]), this._inIcu = !0); let r = P(this, e.cases, t); return this._mode === Dt.Merge && (e = new Sn(e.switchValue, e.type, r, e.sourceSpan, e.switchValueSourceSpan)), this._inIcu = s, e; }
    visitComment(e, t) { let s = pA(e); if (s && this._isInTranslatableSection) {
        this._reportError(e, "Could not start a block inside a translatable section");
        return;
    } let r = fA(e); if (r && !this._inI18nBlock) {
        this._reportError(e, "Trying to close an unopened block");
        return;
    } if (!this._inI18nNode && !this._inIcu) {
        if (this._inI18nBlock) {
            if (r)
                if (this._depth == this._blockStartDepth) {
                    this._closeTranslatableSection(e, this._blockChildren), this._inI18nBlock = !1;
                    let i = this._addMessage(this._blockChildren, this._blockMeaningAndDesc), a = this._translateMessage(e, i);
                    return P(this, a);
                }
                else {
                    this._reportError(e, "I18N blocks should not cross element boundaries");
                    return;
                }
        }
        else if (s) {
            if (!dp && console && console.warn) {
                dp = !0;
                let i = e.sourceSpan.details ? `, ${e.sourceSpan.details}` : "";
                console.warn(`I18n comments are deprecated, use an <ng-container> element instead (${e.sourceSpan.start}${i})`);
            }
            this._inI18nBlock = !0, this._blockStartDepth = this._depth, this._blockChildren = [], this._blockMeaningAndDesc = e.value.replace(oA, "").trim(), this._openTranslatableSection(e);
        }
    } }
    visitText(e, t) { return this._isInTranslatableSection && this._mayBeAddBlockChildren(e), e; }
    visitElement(e, t) { return this._visitElementLike(e, t); }
    visitAttribute(e, t) { throw new Error("unreachable code"); }
    visitBlock(e, t) { P(this, e.children, t); }
    visitBlockParameter(e, t) { }
    visitLetDeclaration(e, t) { }
    visitComponent(e, t) { return this._visitElementLike(e, t); }
    visitDirective(e, t) { throw new Error("unreachable code"); }
    _init(e) { this._mode = e, this._inI18nBlock = !1, this._inI18nNode = !1, this._depth = 0, this._inIcu = !1, this._msgCountAtSectionStart = void 0, this._errors = [], this._messages = [], this._inImplicitNode = !1, this._createI18nMessage = qf(!this._preserveSignificantWhitespace, this._preserveSignificantWhitespace); }
    _visitElementLike(e, t) { this._mayBeAddBlockChildren(e), this._depth++; let s = this._inI18nNode, r = this._inImplicitNode, i = [], a, o = e instanceof ke ? e.tagName : e.name, l = dA(e), c = l ? l.value : "", h = this._implicitTags.some(m => o === m) && !this._inIcu && !this._isInTranslatableSection, p = !r && h; if (this._inImplicitNode = r || h, !this._isInTranslatableSection && !this._inIcu) {
        if (l || p) {
            this._inI18nNode = !0;
            let m = this._addMessage(e.children, c);
            a = this._translateMessage(e, m);
        }
        if (this._mode == Dt.Extract) {
            let m = l || p;
            m && this._openTranslatableSection(e), P(this, e.children), m && this._closeTranslatableSection(e, e.children);
        }
    }
    else
        (l || p) && this._reportError(e, "Could not mark an element as translatable inside a translatable section"), this._mode == Dt.Extract && P(this, e.children); return this._mode === Dt.Merge && (a || e.children).forEach(v => { let w = v.visit(this, t); w && !this._isInTranslatableSection && (i = i.concat(w)); }), this._visitAttributesOf(e), this._depth--, this._inI18nNode = s, this._inImplicitNode = r, this._mode === Dt.Merge ? e instanceof Re ? new Re(e.name, this._translateAttributes(e), this._translateDirectives(e), i, e.isSelfClosing, e.sourceSpan, e.startSourceSpan, e.endSourceSpan, e.isVoid) : new ke(e.componentName, e.tagName, e.fullName, this._translateAttributes(e), this._translateDirectives(e), i, e.isSelfClosing, e.sourceSpan, e.startSourceSpan, e.endSourceSpan) : null; }
    _visitAttributesOf(e) { let t = {}, s = this._implicitAttrs[e instanceof ke ? e.tagName || "" : e.name] || []; e.attrs.filter(r => r instanceof xn && r.name.startsWith(yr)).forEach(r => { t[r.name.slice(yr.length)] = r.value; }), e.attrs.forEach(r => { r.name in t ? this._addMessage([r], t[r.name]) : s.some(i => r.name === i) && this._addMessage([r]); }); }
    _addMessage(e, t) { if (e.length == 0 || this._isEmptyAttributeValue(e) || this._isPlaceholderOnlyAttributeValue(e) || this._isPlaceholderOnlyMessage(e))
        return null; let { meaning: s, description: r, id: i } = mp(t), a = this._createI18nMessage(e, s, r, i); return this._messages.push(a), a; }
    _isEmptyAttributeValue(e) { return gp(e) ? e[0].value.trim() === "" : !1; }
    _isPlaceholderOnlyAttributeValue(e) { if (!gp(e))
        return !1; let t = e[0].valueTokens ?? [], s = t.filter(i => i.type === 17), r = t.filter(i => i.type === 16).map(i => i.parts[0].trim()).join(""); return s.length === 1 && r === ""; }
    _isPlaceholderOnlyMessage(e) { if (!mA(e))
        return !1; let t = e[0].tokens, s = t.filter(i => i.type === 8), r = t.filter(i => i.type === 5).map(i => i.parts[0].trim()).join(""); return s.length === 1 && r === ""; }
    _translateMessage(e, t) { if (t && this._mode === Dt.Merge) {
        let s = this._translations.get(t);
        if (s)
            return s;
        this._reportError(e, `Translation unavailable for message id="${this._translations.digest(t)}"`);
    } return []; }
    _translateAttributes(e) { let t = {}, s = []; return e.attrs.forEach(r => { r.name.startsWith(yr) && (t[r.name.slice(yr.length)] = mp(r.value)); }), e.attrs.forEach(r => { if (!(r.name === yd || r.name.startsWith(yr)))
        if (r.value && r.value != "" && t.hasOwnProperty(r.name)) {
            let { meaning: i, description: a, id: o } = t[r.name], l = this._createI18nMessage([r], i, a, o), c = this._translations.get(l);
            if (c)
                if (c.length == 0)
                    s.push(new xn(r.name, "", r.sourceSpan, void 0, void 0, void 0, void 0));
                else if (c[0] instanceof ln) {
                    let h = c[0].value;
                    s.push(new xn(r.name, h, r.sourceSpan, void 0, void 0, void 0, void 0));
                }
                else
                    this._reportError(e, `Unexpected translation for attribute "${r.name}" (id="${o || this._translations.digest(l)}")`);
            else
                this._reportError(e, `Translation unavailable for attribute "${r.name}" (id="${o || this._translations.digest(l)}")`);
        }
        else
            s.push(r); }), s; }
    _translateDirectives(e) { return e.directives.map(t => new Xa(t.name, this._translateAttributes(t), t.sourceSpan, t.startSourceSpan, t.endSourceSpan)); }
    _mayBeAddBlockChildren(e) { this._inI18nBlock && !this._inIcu && this._depth == this._blockStartDepth && this._blockChildren.push(e); }
    _openTranslatableSection(e) { this._isInTranslatableSection ? this._reportError(e, "Unexpected section start") : this._msgCountAtSectionStart = this._messages.length; }
    get _isInTranslatableSection() { return this._msgCountAtSectionStart !== void 0; }
    _closeTranslatableSection(e, t) { if (!this._isInTranslatableSection) {
        this._reportError(e, "Unexpected section end");
        return;
    } let s = this._msgCountAtSectionStart; if (t.reduce((i, a) => i + (a instanceof Rn ? 0 : 1), 0) == 1)
        for (let i = this._messages.length - 1; i >= s; i--) {
            let a = this._messages[i].nodes;
            if (!(a.length == 1 && a[0] instanceof Mt)) {
                this._messages.splice(i, 1);
                break;
            }
        } this._msgCountAtSectionStart = void 0; }
    _reportError(e, t) { this._errors.push(new I(e.sourceSpan, t)); }
};
function pA(n) { return !!(n instanceof Rn && n.value && n.value.startsWith("i18n")); }
function fA(n) { return !!(n instanceof Rn && n.value && n.value === "/i18n"); }
function dA(n) { return n.attrs.find(e => e instanceof xn && e.name === yd) || null; }
function mp(n) { if (!n)
    return { meaning: "", description: "", id: "" }; let e = n.indexOf(cA), t = n.indexOf(lA), [s, r] = e > -1 ? [n.slice(0, e), n.slice(e + 2)] : [n, ""], [i, a] = t > -1 ? [s.slice(0, t), s.slice(t + 1)] : ["", s]; return { meaning: i, description: a, id: r.trim() }; }
function mA(n) { return n.length === 1 && n[0] instanceof ln; }
function gp(n) { return n.length === 1 && n[0] instanceof xn; }
var Pc = class {
    closedByParent = !1;
    implicitNamespacePrefix = null;
    isVoid = !1;
    ignoreFirstLf = !1;
    canSelfClose = !0;
    preventNamespaceInheritance = !1;
    requireExtraParent(e) { return !1; }
    isClosedByChild(e) { return !1; }
    getContentType() { return Bt.PARSABLE_DATA; }
}, gA = new Pc;
function vA(n) { return gA; }
var Fn = class extends Bf {
    constructor() { super(vA); }
    parse(e, t, s = {}) { return super.parse(e, t, pe(S({}, s), { tokenizeBlocks: !1, tokenizeLet: !1, selectorlessEnabled: !1 })); }
}, wA = "1.2", EA = "urn:oasis:names:tc:xliff:document:1.2", SA = "en", Qt = "x", xA = "mrk", yA = "file", Cd = "source", CA = "seg-source", AA = "alt-trans", kA = "target", Lc = "trans-unit", _A = "context-group", vp = "context", Bc = class extends Js {
    write(e, t) { let s = new bA, r = []; e.forEach(l => { let c = []; l.sources.forEach(p => { let m = new $(_A, { purpose: "location" }); m.children.push(new X(10), new $(vp, { "context-type": "sourcefile" }, [new Z(p.filePath)]), new X(10), new $(vp, { "context-type": "linenumber" }, [new Z(`${p.startLine}`)]), new X(8)), c.push(new X(8), m); }); let h = new $(Lc, { id: l.id, datatype: "html" }); h.children.push(new X(8), new $(Cd, {}, s.serialize(l.nodes)), ...c), l.description && h.children.push(new X(8), new $("note", { priority: "1", from: "description" }, [new Z(l.description)])), l.meaning && h.children.push(new X(8), new $("note", { priority: "1", from: "meaning" }, [new Z(l.meaning)])), h.children.push(new X(6)), r.push(new X(6), h); }); let i = new $("body", {}, [...r, new X(4)]), a = new $("file", { "source-language": t || SA, datatype: "plaintext", original: "ng2.template" }, [new X(4), i, new X(2)]), o = new $("xliff", { version: wA, xmlns: EA }, [new X(2), a, new X]); return Kc([new fi({ version: "1.0", encoding: "UTF-8" }), new X, o, new X]); }
    load(e, t) {
        let s = new Mc, { locale: r, msgIdToHtml: i, errors: a } = s.parse(e, t), o = {}, l = new TA;
        if (Object.keys(i).forEach(c => { let { i18nNodes: h, errors: p } = l.convert(i[c], t); a.push(...p), o[c] = h; }), a.length)
            throw new Error(`xliff parse errors:
${a.join(`
`)}`);
        return { locale: r, i18nNodesByMsgId: o };
    }
    digest(e) { return kp(e); }
}, bA = class {
    visitText(e, t) { return [new Z(e.value)]; }
    visitContainer(e, t) { let s = []; return e.children.forEach(r => s.push(...r.visit(this))), s; }
    visitIcu(e, t) { let s = [new Z(`{${e.expressionPlaceholder}, ${e.type}, `)]; return Object.keys(e.cases).forEach(r => { s.push(new Z(`${r} {`), ...e.cases[r].visit(this), new Z("} ")); }), s.push(new Z("}")), s; }
    visitTagPlaceholder(e, t) { let s = IA(e.tag); if (e.isVoid)
        return [new $(Qt, { id: e.startName, ctype: s, "equiv-text": `<${e.tag}/>` })]; let r = new $(Qt, { id: e.startName, ctype: s, "equiv-text": `<${e.tag}>` }), i = new $(Qt, { id: e.closeName, ctype: s, "equiv-text": `</${e.tag}>` }); return [r, ...this.serialize(e.children), i]; }
    visitPlaceholder(e, t) { return [new $(Qt, { id: e.name, "equiv-text": `{{${e.value}}}` })]; }
    visitBlockPlaceholder(e, t) { let s = `x-${e.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`, r = new $(Qt, { id: e.startName, ctype: s, "equiv-text": `@${e.name}` }), i = new $(Qt, { id: e.closeName, ctype: s, "equiv-text": "}" }); return [r, ...this.serialize(e.children), i]; }
    visitIcuPlaceholder(e, t) { let s = `{${e.value.expression}, ${e.value.type}, ${Object.keys(e.value.cases).map(r => r + " {...}").join(" ")}}`; return [new $(Qt, { id: e.name, "equiv-text": s })]; }
    serialize(e) { return [].concat(...e.map(t => t.visit(this))); }
}, Mc = class {
    _unitMlString;
    _errors;
    _msgIdToHtml;
    _locale = null;
    parse(e, t) { this._unitMlString = null, this._msgIdToHtml = {}; let s = new Fn().parse(e, t); return this._errors = s.errors, P(this, s.rootNodes, null), { msgIdToHtml: this._msgIdToHtml, errors: this._errors, locale: this._locale }; }
    visitElement(e, t) { switch (e.name) {
        case Lc:
            this._unitMlString = null;
            let s = e.attrs.find(c => c.name === "id");
            if (!s)
                this._addError(e, `<${Lc}> misses the "id" attribute`);
            else {
                let c = s.value;
                this._msgIdToHtml.hasOwnProperty(c) ? this._addError(e, `Duplicated translations for msg ${c}`) : (P(this, e.children, null), typeof this._unitMlString == "string" ? this._msgIdToHtml[c] = this._unitMlString : this._addError(e, `Message ${c} misses a translation`));
            }
            break;
        case Cd:
        case CA:
        case AA: break;
        case kA:
            let r = e.startSourceSpan.end.offset, i = e.endSourceSpan.start.offset, o = e.startSourceSpan.start.file.content.slice(r, i);
            this._unitMlString = o;
            break;
        case yA:
            let l = e.attrs.find(c => c.name === "target-language");
            l && (this._locale = l.value), P(this, e.children, null);
            break;
        default: P(this, e.children, null);
    } }
    visitAttribute(e, t) { }
    visitText(e, t) { }
    visitComment(e, t) { }
    visitExpansion(e, t) { }
    visitExpansionCase(e, t) { }
    visitBlock(e, t) { }
    visitBlockParameter(e, t) { }
    visitLetDeclaration(e, t) { }
    visitComponent(e, t) { }
    visitDirective(e, t) { }
    _addError(e, t) { this._errors.push(new I(e.sourceSpan, t)); }
}, TA = class {
    _errors;
    convert(e, t) { let s = new Fn().parse(e, t, { tokenizeExpansionForms: !0 }); return this._errors = s.errors, { i18nNodes: this._errors.length > 0 || s.rootNodes.length == 0 ? [] : [].concat(...P(this, s.rootNodes)), errors: this._errors }; }
    visitText(e, t) { return new Mt(e.value, e.sourceSpan); }
    visitElement(e, t) { if (e.name === Qt) {
        let s = e.attrs.find(r => r.name === "id");
        return s ? new gt("", s.value, e.sourceSpan) : (this._addError(e, `<${Qt}> misses the "id" attribute`), null);
    } return e.name === xA ? [].concat(...P(this, e.children)) : (this._addError(e, "Unexpected tag"), null); }
    visitExpansion(e, t) { let s = {}; return P(this, e.cases).forEach(r => { s[r.value] = new it(r.nodes, e.sourceSpan); }), new In(e.switchValue, e.type, s, e.sourceSpan); }
    visitExpansionCase(e, t) { return { value: e.value, nodes: P(this, e.expression) }; }
    visitComment(e, t) { }
    visitAttribute(e, t) { }
    visitBlock(e, t) { }
    visitBlockParameter(e, t) { }
    visitLetDeclaration(e, t) { }
    visitComponent(e, t) { this._addError(e, "Unexpected node"); }
    visitDirective(e, t) { this._addError(e, "Unexpected node"); }
    _addError(e, t) { this._errors.push(new I(e.sourceSpan, t)); }
};
function IA(n) { switch (n.toLowerCase()) {
    case "br": return "lb";
    case "img": return "image";
    default: return `x-${n}`;
} }
var NA = "2.0", DA = "urn:oasis:names:tc:xliff:document:2.0", PA = "en", Jn = "ph", Rc = "pc", LA = "mrk", Ad = "xliff", kd = "source", BA = "target", Fc = "unit", $c = class extends Js {
    write(e, t) { let s = new Oc, r = []; e.forEach(o => { let l = new $(Fc, { id: o.id }), c = new $("notes"); (o.description || o.meaning) && (o.description && c.children.push(new X(8), new $("note", { category: "description" }, [new Z(o.description)])), o.meaning && c.children.push(new X(8), new $("note", { category: "meaning" }, [new Z(o.meaning)]))), o.sources.forEach(p => { c.children.push(new X(8), new $("note", { category: "location" }, [new Z(`${p.filePath}:${p.startLine}${p.endLine !== p.startLine ? "," + p.endLine : ""}`)])); }), c.children.push(new X(6)), l.children.push(new X(6), c); let h = new $("segment"); h.children.push(new X(8), new $(kd, {}, s.serialize(o.nodes)), new X(6)), l.children.push(new X(6), h, new X(4)), r.push(new X(4), l); }); let i = new $("file", { original: "ng.template", id: "ngi18n" }, [...r, new X(2)]), a = new $(Ad, { version: NA, xmlns: DA, srcLang: t || PA }, [new X(2), i, new X]); return Kc([new fi({ version: "1.0", encoding: "UTF-8" }), new X, a, new X]); }
    load(e, t) {
        let s = new Vc, { locale: r, msgIdToHtml: i, errors: a } = s.parse(e, t), o = {}, l = new MA;
        if (Object.keys(i).forEach(c => { let { i18nNodes: h, errors: p } = l.convert(i[c], t); a.push(...p), o[c] = h; }), a.length)
            throw new Error(`xliff2 parse errors:
${a.join(`
`)}`);
        return { locale: r, i18nNodesByMsgId: o };
    }
    digest(e) { return Gc(e); }
}, Oc = class {
    _nextPlaceholderId = 0;
    visitText(e, t) { return [new Z(e.value)]; }
    visitContainer(e, t) { let s = []; return e.children.forEach(r => s.push(...r.visit(this))), s; }
    visitIcu(e, t) { let s = [new Z(`{${e.expressionPlaceholder}, ${e.type}, `)]; return Object.keys(e.cases).forEach(r => { s.push(new Z(`${r} {`), ...e.cases[r].visit(this), new Z("} ")); }), s.push(new Z("}")), s; }
    visitTagPlaceholder(e, t) { let s = RA(e.tag); if (e.isVoid)
        return [new $(Jn, { id: (this._nextPlaceholderId++).toString(), equiv: e.startName, type: s, disp: `<${e.tag}/>` })]; let r = new $(Rc, { id: (this._nextPlaceholderId++).toString(), equivStart: e.startName, equivEnd: e.closeName, type: s, dispStart: `<${e.tag}>`, dispEnd: `</${e.tag}>` }), i = [].concat(...e.children.map(a => a.visit(this))); return i.length ? i.forEach(a => r.children.push(a)) : r.children.push(new Z("")), [r]; }
    visitPlaceholder(e, t) { let s = (this._nextPlaceholderId++).toString(); return [new $(Jn, { id: s, equiv: e.name, disp: `{{${e.value}}}` })]; }
    visitBlockPlaceholder(e, t) { let s = new $(Rc, { id: (this._nextPlaceholderId++).toString(), equivStart: e.startName, equivEnd: e.closeName, type: "other", dispStart: `@${e.name}`, dispEnd: "}" }), r = [].concat(...e.children.map(i => i.visit(this))); return r.length ? r.forEach(i => s.children.push(i)) : s.children.push(new Z("")), [s]; }
    visitIcuPlaceholder(e, t) { let s = Object.keys(e.value.cases).map(i => i + " {...}").join(" "), r = (this._nextPlaceholderId++).toString(); return [new $(Jn, { id: r, equiv: e.name, disp: `{${e.value.expression}, ${e.value.type}, ${s}}` })]; }
    serialize(e) { return this._nextPlaceholderId = 0, [].concat(...e.map(t => t.visit(this))); }
}, Vc = class {
    _unitMlString;
    _errors;
    _msgIdToHtml;
    _locale = null;
    parse(e, t) { this._unitMlString = null, this._msgIdToHtml = {}; let s = new Fn().parse(e, t); return this._errors = s.errors, P(this, s.rootNodes, null), { msgIdToHtml: this._msgIdToHtml, errors: this._errors, locale: this._locale }; }
    visitElement(e, t) { switch (e.name) {
        case Fc:
            this._unitMlString = null;
            let s = e.attrs.find(h => h.name === "id");
            if (!s)
                this._addError(e, `<${Fc}> misses the "id" attribute`);
            else {
                let h = s.value;
                this._msgIdToHtml.hasOwnProperty(h) ? this._addError(e, `Duplicated translations for msg ${h}`) : (P(this, e.children, null), typeof this._unitMlString == "string" ? this._msgIdToHtml[h] = this._unitMlString : this._addError(e, `Message ${h} misses a translation`));
            }
            break;
        case kd: break;
        case BA:
            let r = e.startSourceSpan.end.offset, i = e.endSourceSpan.start.offset, o = e.startSourceSpan.start.file.content.slice(r, i);
            this._unitMlString = o;
            break;
        case Ad:
            let l = e.attrs.find(h => h.name === "trgLang");
            l && (this._locale = l.value);
            let c = e.attrs.find(h => h.name === "version");
            if (c) {
                let h = c.value;
                h !== "2.0" ? this._addError(e, `The XLIFF file version ${h} is not compatible with XLIFF 2.0 serializer`) : P(this, e.children, null);
            }
            break;
        default: P(this, e.children, null);
    } }
    visitAttribute(e, t) { }
    visitText(e, t) { }
    visitComment(e, t) { }
    visitExpansion(e, t) { }
    visitExpansionCase(e, t) { }
    visitBlock(e, t) { }
    visitBlockParameter(e, t) { }
    visitLetDeclaration(e, t) { }
    visitComponent(e, t) { }
    visitDirective(e, t) { }
    _addError(e, t) { this._errors.push(new I(e.sourceSpan, t)); }
}, MA = class {
    _errors;
    convert(e, t) { let s = new Fn().parse(e, t, { tokenizeExpansionForms: !0 }); return this._errors = s.errors, { i18nNodes: this._errors.length > 0 || s.rootNodes.length == 0 ? [] : [].concat(...P(this, s.rootNodes)), errors: this._errors }; }
    visitText(e, t) { return new Mt(e.value, e.sourceSpan); }
    visitElement(e, t) { switch (e.name) {
        case Jn:
            let s = e.attrs.find(a => a.name === "equiv");
            if (s)
                return [new gt("", s.value, e.sourceSpan)];
            this._addError(e, `<${Jn}> misses the "equiv" attribute`);
            break;
        case Rc:
            let r = e.attrs.find(a => a.name === "equivStart"), i = e.attrs.find(a => a.name === "equivEnd");
            if (!r)
                this._addError(e, `<${Jn}> misses the "equivStart" attribute`);
            else if (!i)
                this._addError(e, `<${Jn}> misses the "equivEnd" attribute`);
            else {
                let a = r.value, o = i.value;
                return [].concat(new gt("", a, e.sourceSpan), ...e.children.map(c => c.visit(this, null)), new gt("", o, e.sourceSpan));
            }
            break;
        case LA: return [].concat(...P(this, e.children));
        default: this._addError(e, "Unexpected tag");
    } return null; }
    visitExpansion(e, t) { let s = {}; return P(this, e.cases).forEach(r => { s[r.value] = new it(r.nodes, e.sourceSpan); }), new In(e.switchValue, e.type, s, e.sourceSpan); }
    visitExpansionCase(e, t) { return { value: e.value, nodes: [].concat(...P(this, e.expression)) }; }
    visitComment(e, t) { }
    visitAttribute(e, t) { }
    visitBlock(e, t) { }
    visitBlockParameter(e, t) { }
    visitLetDeclaration(e, t) { }
    visitComponent(e, t) { this._addError(e, "Unexpected node"); }
    visitDirective(e, t) { this._addError(e, "Unexpected node"); }
    _addError(e, t) { this._errors.push(new I(e.sourceSpan, t)); }
};
function RA(n) { switch (n.toLowerCase()) {
    case "br":
    case "b":
    case "i":
    case "u": return "fmt";
    case "img": return "image";
    case "a": return "link";
    default: return "other";
} }
var wp = "translationbundle", Ep = "translation", Sp = "ph", qc = class extends Js {
    write(e, t) { throw new Error("Unsupported"); }
    load(e, t) {
        let s = new Uc, { locale: r, msgIdToHtml: i, errors: a } = s.parse(e, t), o = {}, l = new Hc;
        if (Object.keys(i).forEach(c => {
            FA(o, c, function () {
                let { i18nNodes: p, errors: m } = l.convert(i[c], t);
                if (m.length)
                    throw new Error(`xtb parse errors:
${m.join(`
`)}`);
                return p;
            });
        }), a.length)
            throw new Error(`xtb parse errors:
${a.join(`
`)}`);
        return { locale: r, i18nNodesByMsgId: o };
    }
    digest(e) { return Wp(e); }
    createNameMapper(e) { return new Na(e, eu); }
};
function FA(n, e, t) { Object.defineProperty(n, e, { configurable: !0, enumerable: !0, get: function () { let s = t(); return Object.defineProperty(n, e, { enumerable: !0, value: s }), s; }, set: s => { throw new Error("Could not overwrite an XTB translation"); } }); }
var Uc = class {
    _bundleDepth;
    _errors;
    _msgIdToHtml;
    _locale = null;
    parse(e, t) { this._bundleDepth = 0, this._msgIdToHtml = {}; let s = new Fn().parse(e, t); return this._errors = s.errors, P(this, s.rootNodes), { msgIdToHtml: this._msgIdToHtml, errors: this._errors, locale: this._locale }; }
    visitElement(e, t) { switch (e.name) {
        case wp:
            this._bundleDepth++, this._bundleDepth > 1 && this._addError(e, `<${wp}> elements can not be nested`);
            let s = e.attrs.find(i => i.name === "lang");
            s && (this._locale = s.value), P(this, e.children, null), this._bundleDepth--;
            break;
        case Ep:
            let r = e.attrs.find(i => i.name === "id");
            if (!r)
                this._addError(e, `<${Ep}> misses the "id" attribute`);
            else {
                let i = r.value;
                if (this._msgIdToHtml.hasOwnProperty(i))
                    this._addError(e, `Duplicated translations for msg ${i}`);
                else {
                    let a = e.startSourceSpan.end.offset, o = e.endSourceSpan.start.offset, c = e.startSourceSpan.start.file.content.slice(a, o);
                    this._msgIdToHtml[i] = c;
                }
            }
            break;
        default: this._addError(e, "Unexpected tag");
    } }
    visitAttribute(e, t) { }
    visitText(e, t) { }
    visitComment(e, t) { }
    visitExpansion(e, t) { }
    visitExpansionCase(e, t) { }
    visitBlock(e, t) { }
    visitBlockParameter(e, t) { }
    visitLetDeclaration(e, t) { }
    visitComponent(e, t) { this._addError(e, "Unexpected node"); }
    visitDirective(e, t) { this._addError(e, "Unexpected node"); }
    _addError(e, t) { this._errors.push(new I(e.sourceSpan, t)); }
}, Hc = class {
    _errors;
    convert(e, t) { let s = new Fn().parse(e, t, { tokenizeExpansionForms: !0 }); return this._errors = s.errors, { i18nNodes: this._errors.length > 0 || s.rootNodes.length == 0 ? [] : P(this, s.rootNodes), errors: this._errors }; }
    visitText(e, t) { return new Mt(e.value, e.sourceSpan); }
    visitExpansion(e, t) { let s = {}; return P(this, e.cases).forEach(r => { s[r.value] = new it(r.nodes, e.sourceSpan); }), new In(e.switchValue, e.type, s, e.sourceSpan); }
    visitExpansionCase(e, t) { return { value: e.value, nodes: P(this, e.expression) }; }
    visitElement(e, t) { if (e.name === Sp) {
        let s = e.attrs.find(r => r.name === "name");
        if (s)
            return new gt("", s.value, e.sourceSpan);
        this._addError(e, `<${Sp}> misses the "name" attribute`);
    }
    else
        this._addError(e, "Unexpected tag"); return null; }
    visitComment(e, t) { }
    visitAttribute(e, t) { }
    visitBlock(e, t) { }
    visitBlockParameter(e, t) { }
    visitLetDeclaration(e, t) { }
    visitComponent(e, t) { this._addError(e, "Unexpected node"); }
    visitDirective(e, t) { this._addError(e, "Unexpected node"); }
    _addError(e, t) { this._errors.push(new I(e.sourceSpan, t)); }
}, fo = class n {
    _i18nNodesByMsgId;
    digest;
    mapperFactory;
    _i18nToHtml;
    constructor(e = {}, t, s, r, i = Os.Warning, a) { this._i18nNodesByMsgId = e, this.digest = s, this.mapperFactory = r, this._i18nToHtml = new Wc(e, t, s, r, i, a); }
    static load(e, t, s, r, i) { let { locale: a, i18nNodesByMsgId: o } = s.load(e, t), l = h => s.digest(h), c = h => s.createNameMapper(h); return new n(o, a, l, c, r, i); }
    get(e) {
        let t = this._i18nToHtml.convert(e);
        if (t.errors.length)
            throw new Error(t.errors.join(`
`));
        return t.nodes;
    }
    has(e) { return this.digest(e) in this._i18nNodesByMsgId; }
}, Wc = class {
    _i18nNodesByMsgId;
    _locale;
    _digest;
    _mapperFactory;
    _missingTranslationStrategy;
    _console;
    _srcMsg;
    _errors = [];
    _contextStack = [];
    _mapper;
    constructor(e = {}, t, s, r, i, a) { this._i18nNodesByMsgId = e, this._locale = t, this._digest = s, this._mapperFactory = r, this._missingTranslationStrategy = i, this._console = a; }
    convert(e) { this._contextStack.length = 0, this._errors.length = 0; let t = this._convertToText(e), s = e.nodes[0].sourceSpan.start.file.url, r = new ro().parse(t, s, { tokenizeExpansionForms: !0 }); return { nodes: r.rootNodes, errors: [...this._errors, ...r.errors] }; }
    visitText(e, t) { return Eo(e.value); }
    visitContainer(e, t) { return e.children.map(s => s.visit(this)).join(""); }
    visitIcu(e, t) { let s = Object.keys(e.cases).map(i => `${i} {${e.cases[i].visit(this)}}`); return `{${this._srcMsg.placeholders.hasOwnProperty(e.expression) ? this._srcMsg.placeholders[e.expression].text : e.expression}, ${e.type}, ${s.join(" ")}}`; }
    visitPlaceholder(e, t) { let s = this._mapper(e.name); return this._srcMsg.placeholders.hasOwnProperty(s) ? this._srcMsg.placeholders[s].text : this._srcMsg.placeholderToMessage.hasOwnProperty(s) ? this._convertToText(this._srcMsg.placeholderToMessage[s]) : (this._addError(e, `Unknown placeholder "${e.name}"`), ""); }
    visitTagPlaceholder(e, t) { let s = `${e.tag}`, r = Object.keys(e.attrs).map(a => `${a}="${e.attrs[a]}"`).join(" "); if (e.isVoid)
        return `<${s} ${r}/>`; let i = e.children.map(a => a.visit(this)).join(""); return `<${s} ${r}>${i}</${s}>`; }
    visitIcuPlaceholder(e, t) { return this._convertToText(this._srcMsg.placeholderToMessage[e.name]); }
    visitBlockPlaceholder(e, t) { let s = e.parameters.length === 0 ? "" : ` (${e.parameters.join("; ")})`, r = e.children.map(i => i.visit(this)).join(""); return `@${e.name}${s} {${r}}`; }
    _convertToText(e) { let t = this._digest(e), s = this._mapperFactory ? this._mapperFactory(e) : null, r; if (this._contextStack.push({ msg: this._srcMsg, mapper: this._mapper }), this._srcMsg = e, this._i18nNodesByMsgId.hasOwnProperty(t))
        r = this._i18nNodesByMsgId[t], this._mapper = o => s ? s.toInternalName(o) : o;
    else {
        if (this._missingTranslationStrategy === Os.Error) {
            let o = this._locale ? ` for locale "${this._locale}"` : "";
            this._addError(e.nodes[0], `Missing translation for message "${t}"${o}`);
        }
        else if (this._console && this._missingTranslationStrategy === Os.Warning) {
            let o = this._locale ? ` for locale "${this._locale}"` : "";
            this._console.warn(`Missing translation for message "${t}"${o}`);
        }
        r = e.nodes, this._mapper = o => o;
    } let i = r.map(o => o.visit(this)).join(""), a = this._contextStack.pop(); return this._srcMsg = a.msg, this._mapper = a.mapper, i; }
    _addError(e, t) { this._errors.push(new I(e.sourceSpan, t)); }
}, xp = class {
    _htmlParser;
    getTagDefinition;
    _translationBundle;
    constructor(e, t, s, r = Os.Warning, i) { if (this._htmlParser = e, t) {
        let a = $A(s);
        this._translationBundle = fo.load(t, "i18n", a, r, i);
    }
    else
        this._translationBundle = new fo({}, null, kp, void 0, r, i); }
    parse(e, t, s = {}) { let r = this._htmlParser.parse(e, t, S({}, s)); return r.errors.length ? new sr(r.rootNodes, r.errors) : hA(r.rootNodes, this._translationBundle, [], {}); }
};
function $A(n) { switch (n = (n || "xlf").toLowerCase(), n) {
    case "xmb": return new Tl;
    case "xtb": return new qc;
    case "xliff2":
    case "xlf2": return new $c;
    default: return new Bc;
} }
var yp = class {
    _htmlParser;
    _implicitTags;
    _implicitAttrs;
    _locale;
    _preserveWhitespace;
    _messages = [];
    constructor(e, t, s, r = null, i = !0) { this._htmlParser = e, this._implicitTags = t, this._implicitAttrs = s, this._locale = r, this._preserveWhitespace = i; }
    updateFromTemplate(e, t) { let s = this._htmlParser.parse(e, t, { tokenizeExpansionForms: !0 }); if (s.errors.length)
        return s.errors; let r = this._preserveWhitespace ? s.rootNodes : Ct(new Di(!1), s.rootNodes), i = uA(r, this._implicitTags, this._implicitAttrs, this._preserveWhitespace); return i.errors.length ? i.errors : (this._messages.push(...i.messages), []); }
    getMessages() { return this._messages; }
    write(e, t) { let s = {}, r = new jc; this._messages.forEach(a => { let o = e.digest(a); s.hasOwnProperty(o) ? s[o].sources.push(...a.sources) : s[o] = a; }); let i = Object.keys(s).map(a => { let o = e.createNameMapper(s[a]), l = s[a], c = o ? r.convert(l.nodes, o) : l.nodes, h = new Be(c, {}, {}, l.meaning, l.description, a); return h.sources = l.sources, t && h.sources.forEach(p => p.filePath = t(p.filePath)), h; }); return e.write(i, this._locale); }
}, jc = class extends Al {
    convert(e, t) { return t ? e.map(s => s.visit(this, t)) : e; }
    visitTagPlaceholder(e, t) { let s = t.toPublicName(e.startName), r = e.closeName ? t.toPublicName(e.closeName) : e.closeName, i = e.children.map(a => a.visit(this, t)); return new jt(e.tag, e.attrs, s, r, i, e.isVoid, e.sourceSpan, e.startSourceSpan, e.endSourceSpan); }
    visitBlockPlaceholder(e, t) { let s = t.toPublicName(e.startName), r = e.closeName ? t.toPublicName(e.closeName) : e.closeName, i = e.children.map(a => a.visit(this, t)); return new zt(e.name, e.parameters, s, r, i, e.sourceSpan, e.startSourceSpan, e.endSourceSpan); }
    visitPlaceholder(e, t) { return new gt(e.value, t.toPublicName(e.name), e.sourceSpan); }
    visitIcuPlaceholder(e, t) { return new Nn(e.value, t.toPublicName(e.name), e.sourceSpan); }
}, Cp = class n {
    forwardMap;
    reverseMap;
    constructor(e) { this.forwardMap = e, this.reverseMap = OA(e); }
    static empty() { return new n(new Map); }
    static fromMappedObject(e) { let t = new Map; for (let s of Object.keys(e)) {
        let r = e[s], i;
        typeof r == "string" ? i = { classPropertyName: s, bindingPropertyName: r, isSignal: !1 } : i = r, t.set(s, i);
    } return new n(t); }
    static merge(e, t) { let s = new Map(e.forwardMap.entries()); for (let [r, i] of t.forwardMap)
        s.set(r, i); return new n(s); }
    get classPropertyNames() { return Array.from(this.forwardMap.keys()); }
    get propertyNames() { return Array.from(this.reverseMap.keys()); }
    hasBindingPropertyName(e) { return this.reverseMap.has(e); }
    getByBindingPropertyName(e) { return this.reverseMap.has(e) ? this.reverseMap.get(e) : null; }
    getByClassPropertyName(e) { return this.forwardMap.has(e) ? this.forwardMap.get(e) : null; }
    toDirectMappedObject() { let e = {}; for (let [t, s] of this.forwardMap)
        e[t] = s.bindingPropertyName; return e; }
    toJointMappedObject(e) { let t = {}; for (let [s, r] of this.forwardMap)
        t[s] = e(r); return t; }
    *[Symbol.iterator]() { for (let e of this.forwardMap.values())
        yield e; }
};
function OA(n) { let e = new Map; for (let [t, s] of n)
    e.has(s.bindingPropertyName) || e.set(s.bindingPropertyName, []), e.get(s.bindingPropertyName).push(s); return e; }
function VA(n) { let e = _d(n); return ie([], [jr(e).toStmt()]).callFn([]); }
function _d(n) { return y(f.setClassMetadata).callFn([n.type, n.decorators, n.ctorParameters ?? d(null), n.propDecorators ?? d(null)]); }
function $k(n, e) { return e === null || e.length === 0 ? VA(n) : bd(n, e.map(t => new J(t.symbolName, re)), Td(e)); }
function Ok(n, e, t) { return bd(n, t.map(s => new J(s, re)), e); }
function bd(n, e, t) { let s = _d(n), r = ie(e, [s.toStmt()]), i = y(f.setClassMetadataAsync).callFn([n.type, t, r]); return ie([], [jr(i).toStmt()]).callFn([]); }
function Td(n) { let e = n.map(({ symbolName: t, importPath: s, isDefaultImport: r }) => { let i = ie([new J("m", re)], D("m").prop(r ? "default" : t)); return new cs(s).prop("then").callFn([i]); }); return ie([], q(e)); }
var qA = "12.0.0", UA = "18.0.0";
function HA(n) { let e = new oe; return e.set("minVersion", d(qA)), e.set("version", d("21.2.18")), e.set("ngImport", y(f.core)), e.set("type", n.type), e.set("decorators", n.decorators), e.set("ctorParameters", n.ctorParameters), e.set("propDecorators", n.propDecorators), y(f.declareClassMetadata).callFn([e.toLiteralMap()]); }
function Vk(n, e) { if (e === null || e.length === 0)
    return HA(n); let t = new oe, s = new oe; return s.set("decorators", n.decorators), s.set("ctorParameters", n.ctorParameters ?? d(null)), s.set("propDecorators", n.propDecorators ?? d(null)), t.set("minVersion", d(UA)), t.set("version", d("21.2.18")), t.set("ngImport", y(f.core)), t.set("type", n.type), t.set("resolveDeferredDeps", Td(e)), t.set("resolveMetadata", ie(e.map(r => new J(r.symbolName, re)), s.toLiteralMap())), y(f.declareClassMetadataAsync).callFn([t.toLiteralMap()]); }
function Tr(n, e) { return n === null || n.length === 0 ? null : q(n.map(t => e(t))); }
function Xo(n, e) { let t = Object.keys(n).map(s => { let r = n[s]; return { key: s, value: e(r), quoted: !0 }; }); return t.length > 0 ? Ce(t) : null; }
function WA(n) { return n === "invalid" ? d("invalid") : n === null ? d(null) : q(n.map(Id)); }
function Id(n) { let e = new oe; return e.set("token", n.token), n.attributeNameType !== null && e.set("attribute", d(!0)), n.host && e.set("host", d(!0)), n.optional && e.set("optional", d(!0)), n.self && e.set("self", d(!0)), n.skipSelf && e.set("skipSelf", d(!0)), e.toLiteralMap(); }
function qk(n) { let e = Nd(n), t = y(f.declareDirective).callFn([e.toLiteralMap()]), s = dd(n); return { expression: t, type: s, statements: [] }; }
function Nd(n) { let e = new oe, t = jA(n); return e.set("minVersion", d(t)), e.set("version", d("21.2.18")), e.set("type", n.type.value), n.isStandalone !== void 0 && e.set("isStandalone", d(n.isStandalone)), n.isSignal && e.set("isSignal", d(n.isSignal)), n.selector !== null && e.set("selector", d(n.selector)), e.set("inputs", Dd(n) ? XA(n.inputs) : YA(n.inputs)), e.set("outputs", Dl(n.outputs)), e.set("host", zA(n.host)), e.set("providers", n.providers), n.queries.length > 0 && e.set("queries", q(n.queries.map(Ap))), n.viewQueries.length > 0 && e.set("viewQueries", q(n.viewQueries.map(Ap))), n.exportAs !== null && e.set("exportAs", qe(n.exportAs)), n.usesInheritance && e.set("usesInheritance", d(!0)), n.lifecycle.usesOnChanges && e.set("usesOnChanges", d(!0)), n.controlCreate && e.set("controlCreate", Ce([{ key: "passThroughInput", value: d(n.controlCreate.passThroughInput), quoted: !1 }])), n.hostDirectives?.length && e.set("hostDirectives", GA(n.hostDirectives)), e.set("ngImport", y(f.core)), e; }
function jA(n) { let e = "14.0.0"; return Object.values(n.inputs).some(s => s.transformFunction !== null) && (e = "16.1.0"), Dd(n) && (e = "17.1.0"), (n.queries.some(s => s.isSignal) || n.viewQueries.some(s => s.isSignal)) && (e = "17.2.0"), e; }
function Dd(n) { return Object.values(n.inputs).some(e => e.isSignal); }
function Ap(n) { let e = new oe; return e.set("propertyName", d(n.propertyName)), n.first && e.set("first", d(!0)), e.set("predicate", Array.isArray(n.predicate) ? qe(n.predicate) : Ps(n.predicate)), n.emitDistinctChangesOnly || e.set("emitDistinctChangesOnly", d(!1)), n.descendants && e.set("descendants", d(!0)), e.set("read", n.read), n.static && e.set("static", d(!0)), n.isSignal && e.set("isSignal", d(!0)), e.toLiteralMap(); }
function zA(n) { let e = new oe; return e.set("attributes", Xo(n.attributes, t => t)), e.set("listeners", Xo(n.listeners, d)), e.set("properties", Xo(n.properties, d)), n.specialAttributes.styleAttr && e.set("styleAttribute", d(n.specialAttributes.styleAttr)), n.specialAttributes.classAttr && e.set("classAttribute", d(n.specialAttributes.classAttr)), e.values.length > 0 ? e.toLiteralMap() : null; }
function GA(n) { let e = n.map(t => { let s = [{ key: "directive", value: t.isForwardReference ? Zc(t.directive.type) : t.directive.type, quoted: !1 }], r = t.inputs ? lo(t.inputs) : null, i = t.outputs ? lo(t.outputs) : null; return r && s.push({ key: "inputs", value: r, quoted: !1 }), i && s.push({ key: "outputs", value: i, quoted: !1 }), Ce(s); }); return q(e); }
function XA(n) { let e = Object.getOwnPropertyNames(n); return e.length === 0 ? null : Ce(e.map(t => { let s = n[t]; return { key: t, quoted: nu.test(t), value: Ce([{ key: "classPropertyName", quoted: !1, value: qe(s.classPropertyName) }, { key: "publicName", quoted: !1, value: qe(s.bindingPropertyName) }, { key: "isSignal", quoted: !1, value: qe(s.isSignal) }, { key: "isRequired", quoted: !1, value: qe(s.required) }, { key: "transformFunction", quoted: !1, value: s.transformFunction ?? kn }]) }; })); }
function YA(n) { let e = Object.getOwnPropertyNames(n); return e.length === 0 ? null : Ce(e.map(t => { let s = n[t], r = s.bindingPropertyName, i = r !== t, a; if (i || s.transformFunction !== null) {
    let o = [qe(r), qe(t)];
    s.transformFunction !== null && o.push(s.transformFunction), a = q(o);
}
else
    a = qe(r); return { key: t, quoted: nu.test(t), value: a }; })); }
function Uk(n, e, t) { let s = QA(n, e, t), r = y(f.declareComponent).callFn([s.toLiteralMap()]), i = pd(n); return { expression: r, type: i, statements: [] }; }
function QA(n, e, t) { let s = Nd(n), r = new zc; if (G(r, e.nodes), s.set("template", ZA(e, t)), t.isInline && s.set("isInline", d(!0)), r.hasBlocks && s.set("minVersion", d("17.0.0")), s.set("styles", Tr(n.styles, d)), s.set("dependencies", KA(n)), s.set("viewProviders", n.viewProviders), s.set("animations", n.animations), n.changeDetection !== null) {
    if (typeof n.changeDetection == "object")
        throw new Error("Impossible state! Change detection flag is not resolved!");
    s.set("changeDetection", y(f.ChangeDetectionStrategy).prop(Fi[n.changeDetection]));
} if (n.encapsulation !== At.Emulated && s.set("encapsulation", y(f.ViewEncapsulation).prop(At[n.encapsulation])), e.preserveWhitespaces === !0 && s.set("preserveWhitespaces", d(!0)), n.defer.mode === 0) {
    let i = [], a = !1;
    for (let o of n.defer.blocks.values())
        o === null ? i.push(d(null)) : (i.push(o), a = !0);
    a && s.set("deferBlockDependencies", q(i));
}
else
    throw new Error("Unsupported defer function emit mode in partial compilation"); return s; }
function ZA(n, e) { if (e.inlineTemplateLiteralExpression !== null)
    return e.inlineTemplateLiteralExpression; if (e.isInline)
    return d(e.content, null, null); let t = e.content, s = new vi(t, e.sourceUrl), r = new gs(s, 0, 0, 0), i = JA(s, t), a = new B(r, i); return d(t, null, a); }
function JA(n, e) {
    let t = e.length, s = 0, r = 0, i = 0;
    do
        s = e.indexOf(`
`, r), s !== -1 && (r = s + 1, i++);
    while (s !== -1);
    return new gs(n, t, i, t - r);
}
function KA(n) { let e = n.declarationListEmitMode !== 0 ? Zc : t => t; if (n.declarationListEmitMode === 3)
    throw new Error("Unsupported emit mode"); return Tr(n.declarations, t => { switch (t.kind) {
    case tn.Directive:
        let s = new oe;
        return s.set("kind", d(t.isComponent ? "component" : "directive")), s.set("type", e(t.type)), s.set("selector", d(t.selector)), s.set("inputs", Tr(t.inputs, d)), s.set("outputs", Tr(t.outputs, d)), s.set("exportAs", Tr(t.exportAs, d)), s.toLiteralMap();
    case tn.Pipe:
        let r = new oe;
        return r.set("kind", d("pipe")), r.set("type", e(t.type)), r.set("name", d(t.name)), r.toLiteralMap();
    case tn.NgModule:
        let i = new oe;
        return i.set("kind", d("ngmodule")), i.set("type", e(t.type)), i.toLiteralMap();
} }); }
var zc = class extends Dm {
    hasBlocks = !1;
    visitDeferredBlock() { this.hasBlocks = !0; }
    visitDeferredBlockPlaceholder() { this.hasBlocks = !0; }
    visitDeferredBlockLoading() { this.hasBlocks = !0; }
    visitDeferredBlockError() { this.hasBlocks = !0; }
    visitIfBlock() { this.hasBlocks = !0; }
    visitIfBlockBranch() { this.hasBlocks = !0; }
    visitForLoopBlock() { this.hasBlocks = !0; }
    visitForLoopBlockEmpty() { this.hasBlocks = !0; }
    visitSwitchBlock() { this.hasBlocks = !0; }
    visitSwitchBlockCase() { this.hasBlocks = !0; }
    visitSwitchBlockCaseGroup() { this.hasBlocks = !0; }
}, ek = "12.0.0";
function Hk(n) { let e = new oe; return e.set("minVersion", d(ek)), e.set("version", d("21.2.18")), e.set("ngImport", y(f.core)), e.set("type", n.type.value), e.set("deps", WA(n.deps)), e.set("target", y(f.FactoryTarget).prop(Lt[n.target])), { expression: y(f.declareFactory).callFn([e.toLiteralMap()]), statements: [], type: qp(n) }; }
var tk = "12.0.0";
function Wk(n) { let e = nk(n), t = y(f.declareInjectable).callFn([e.toLiteralMap()]), s = Yp(n); return { expression: t, type: s, statements: [] }; }
function nk(n) { let e = new oe; if (e.set("minVersion", d(tk)), e.set("version", d("21.2.18")), e.set("ngImport", y(f.core)), e.set("type", n.type.value), n.providedIn !== void 0) {
    let t = Ps(n.providedIn);
    t.value !== null && e.set("providedIn", t);
} return n.useClass !== void 0 && e.set("useClass", Ps(n.useClass)), n.useExisting !== void 0 && e.set("useExisting", Ps(n.useExisting)), n.useValue !== void 0 && e.set("useValue", Ps(n.useValue)), n.useFactory !== void 0 && e.set("useFactory", n.useFactory), n.deps !== void 0 && e.set("deps", q(n.deps.map(Id))), e; }
var sk = "12.0.0";
function jk(n) { let e = rk(n), t = y(f.declareInjector).callFn([e.toLiteralMap()]), s = uf(n); return { expression: t, type: s, statements: [] }; }
function rk(n) { let e = new oe; return e.set("minVersion", d(sk)), e.set("version", d("21.2.18")), e.set("ngImport", y(f.core)), e.set("type", n.type.value), e.set("providers", n.providers), n.imports.length > 0 && e.set("imports", q(n.imports)), e; }
var ik = "14.0.0";
function zk(n) { let e = ak(n), t = y(f.declareNgModule).callFn([e.toLiteralMap()]), s = hf(n); return { expression: t, type: s, statements: [] }; }
function ak(n) { let e = new oe; if (n.kind === Jt.Local)
    throw new Error("Invalid path! Local compilation mode should not get into the partial compilation path"); return e.set("minVersion", d(ik)), e.set("version", d("21.2.18")), e.set("ngImport", y(f.core)), e.set("type", n.type.value), n.bootstrap.length > 0 && e.set("bootstrap", kt(n.bootstrap, n.containsForwardDecls)), n.declarations.length > 0 && e.set("declarations", kt(n.declarations, n.containsForwardDecls)), n.imports.length > 0 && e.set("imports", kt(n.imports, n.containsForwardDecls)), n.exports.length > 0 && e.set("exports", kt(n.exports, n.containsForwardDecls)), n.schemas !== null && n.schemas.length > 0 && e.set("schemas", q(n.schemas.map(t => t.value))), n.id !== null && e.set("id", n.id), e; }
var ok = "14.0.0";
function Gk(n) { let e = lk(n), t = y(f.declarePipe).callFn([e.toLiteralMap()]), s = pf(n); return { expression: t, type: s, statements: [] }; }
function lk(n) { let e = new oe; return e.set("minVersion", d(ok)), e.set("version", d("21.2.18")), e.set("ngImport", y(f.core)), e.set("type", n.type.value), n.isStandalone !== void 0 && e.set("isStandalone", d(n.isStandalone)), e.set("name", d(n.pipeName ?? n.name)), n.pure === !1 && e.set("pure", d(n.pure)), e; }
function Xk(n) { let e = { className: n.className }; n.filePath && (e.filePath = n.filePath, e.lineNumber = n.lineNumber), n.forbidOrphanRendering && (e.forbidOrphanRendering = d(!0)); let t = y(f.setClassDebugInfo).callFn([n.type, Ga(e)]); return ie([], [jr(t).toStmt()]).callFn([]); }
function Yk(n) { let i = `${n.className}_HmrLoad`, a = n.namespaceDependencies.map(T => new sn({ moduleName: T.moduleName, name: null })), o = D("m").prop("default"), l = y(f.replaceMetadata).callFn([n.type, o, q(a), q(n.localDependencies.map(T => T.runtimeRepresentation)), D("import").prop("meta"), D("id")]), c = ie([new J("m", re)], o.and(l)), h = y(f.getReplaceMetadataURL).callFn([D("id"), D("t"), D("import").prop("meta").prop("url")]), p = new bn(i, [new J("t", re)], [new cs(h, null, "@vite-ignore").prop("then").callFn([c]).toStmt()], null, ue.Final), m = ie([new J("d", re)], D("d").prop("id").identical(D("id")).and(D(i).callFn([D("d").prop("timestamp")]))), v = D(i).callFn([D("Date").prop("now").callFn([])]), w = D("import").prop("meta").prop("hot"), C = w.clone().prop("on").callFn([d("angular:component-update"), m]); return ie([], [new he("id", d(encodeURIComponent(`${n.filePath}@${n.className}`)), null, ue.Final), p, jr(v).toStmt(), jr(w.and(C)).toStmt()]).callFn([]); }
function Qk(n, e, t) { let s = "\u0275\u0275namespaces", r = [t.className, s].map(a => new J(a, re)), i = []; for (let a of t.localDependencies)
    r.push(new J(a.name, re)); for (let a = 0; a < t.namespaceDependencies.length; a++)
    i.push(new he(t.namespaceDependencies[a].assignedName, D(s).key(d(a)), re, ue.Final)); i.push(...e); for (let a of n)
    if (a.initializer !== null) {
        i.push(D(t.className).prop(a.name).set(a.initializer).toStmt());
        for (let o of a.statements)
            i.push(o);
    } return new bn(`${t.className}_UpdateMetadata`, r, i, null, ue.Final); }
var ck = (function (n) { return n[n.Selector = 0] = "Selector", n[n.HostDirective = 1] = "HostDirective", n; })(ck || {}), Zk = new al("21.2.18");
export { te as AST, zr as ASTWithName, Ge as ASTWithSource, nt as AbsoluteSourceSpan, el as ArrayType, Sa as ArrowFunction, $n as ArrowFunctionExpr, hl as ArrowFunctionIdentifierParameter, xn as Attribute, Me as Binary, x as BinaryOperator, z as BinaryOperatorExpr, ga as BindingPipe, ra as BindingPipeType, Y as BindingType, ht as Block, Ya as BlockParameter, Ca as BoundElementProperty, _t as BuiltinType, Yt as BuiltinTypeName, Zo as CUSTOM_ELEMENTS_SCHEMA, zs as Call, js as Chain, Fi as ChangeDetectionStrategy, Cp as ClassPropertyMapping, _c as CombinedRecursiveAstVisitor, il as CommaExpr, Rn as Comment, fp as CompilerConfig, Nc as CompilerFacadeImpl, ke as Component, ma as Conditional, Tt as ConditionalExpr, pa as ConstantPool, as as CssSelector, re as DYNAMIC_TYPE, bn as DeclareFunctionStmt, he as DeclareVarStmt, Xa as Directive, rr as DomElementSchemaRegistry, cs as DynamicImportExpr, vr as EOF, Re as Element, rc as ElementSchemaRegistry, cl as EmitterVisitorContext, De as EmptyExpr, Sn as Expansion, Ti as ExpansionCase, Q as Expression, pl as ExpressionBinding, Ie as ExpressionStatement, st as ExpressionType, sn as ExternalExpr, sl as ExternalReference, Lt as FactoryTarget, en as FunctionExpr, ro as HtmlParser, H as HtmlTagDefinition, xp as I18NHtmlParser, Hr as IfStmt, Ut as ImplicitReceiver, Us as InstantiateExpr, Oi as Interpolation, He as InvokeFunctionExpr, Ur as JSDocComment, Ml as JitEvaluator, ps as KeyedRead, qr as LeadingComment, Qa as LetDeclaration, Pi as Lexer, Qr as LiteralArray, It as LiteralArrayExpr, ye as LiteralExpr, fs as LiteralMap, St as LiteralMapExpr, us as LiteralMapPropertyAssignment, qt as LiteralMapSpreadAssignment, je as LiteralPrimitive, Vr as LocalizedString, tl as MapType, ck as MatchSource, yp as MessageBundle, bt as NONE_TYPE, Jo as NO_ERRORS_SCHEMA, on as NodeWithI18n, ei as NonNullAssert, Ws as NotExpr, Et as ParenthesizedExpr, si as ParenthesizedExpression, I as ParseError, wn as ParseErrorLevel, gs as ParseLocation, vi as ParseSourceFile, B as ParseSourceSpan, hs as ParseSpan, sr as ParseTreeResult, ya as ParsedEvent, Ve as ParsedEventType, Ls as ParsedProperty, Pt as ParsedPropertyType, fl as ParsedVariable, Ja as Parser, Zr as PrefixNot, $t as PropertyRead, f as R3Identifiers, Jt as R3NgModuleMetadataKind, Ba as R3SelectorScopeMode, co as R3TargetBinder, tn as R3TemplateDependencyKind, Vt as ReadKeyExpr, Ye as ReadPropExpr, wt as ReadVarExpr, Gs as RecursiveAstVisitor, lh as RecursiveVisitor, xa as RegularExpressionLiteral, ls as RegularExpressionLiteralExpr, Ic as ResourceLoader, me as ReturnStatement, hE as SCHEMA, go as STRING_TYPE, wa as SafeCall, Yr as SafeKeyedRead, Xr as SafePropertyRead, Qo as SelectorContext, Yo as SelectorListContext, Fr as SelectorMatcher, oa as SelectorlessMatcher, Js as Serializer, ec as SplitInterpolation, va as SpreadElement, An as SpreadElementExpr, _n as Statement, ue as StmtModifier, Dr as StringToken, ss as StringTokenKind, Bt as TagContentType, ti as TaggedTemplateLiteral, qs as TaggedTemplateLiteralExpr, tc as TemplateBindingParseResult, ni as TemplateLiteral, Ea as TemplateLiteralElement, Or as TemplateLiteralElementExpr, Hs as TemplateLiteralExpr, ln as Text, Gr as ThisReceiver, Qe as TmplAstBlockNode, gl as TmplAstBoundAttribute, Aa as TmplAstBoundDeferredTrigger, vl as TmplAstBoundEvent, Xs as TmplAstBoundText, Ir as TmplAstComponent, Zs as TmplAstContent, ds as TmplAstDeferredBlock, li as TmplAstDeferredBlockError, oi as TmplAstDeferredBlockLoading, ai as TmplAstDeferredBlockPlaceholder, Wt as TmplAstDeferredTrigger, Up as TmplAstDirective, Ht as TmplAstElement, Qs as TmplAstForLoopBlock, ui as TmplAstForLoopBlockEmpty, pi as TmplAstHostElement, ka as TmplAstHoverDeferredTrigger, Hp as TmplAstIcu, El as TmplAstIdleDeferredTrigger, Ta as TmplAstIfBlock, es as TmplAstIfBlockBranch, Sl as TmplAstImmediateDeferredTrigger, _a as TmplAstInteractionDeferredTrigger, Jc as TmplAstLetDeclaration, wl as TmplAstNeverDeferredTrigger, Dm as TmplAstRecursiveVisitor, hi as TmplAstReference, ba as TmplAstSwitchBlock, yl as TmplAstSwitchBlockCase, ci as TmplAstSwitchBlockCaseGroup, Cl as TmplAstSwitchExhaustiveCheck, rt as TmplAstTemplate, Qn as TmplAstText, Ys as TmplAstTextAttribute, xl as TmplAstTimerDeferredTrigger, Ia as TmplAstUnknownBlock, Tn as TmplAstVariable, ii as TmplAstViewportDeferredTrigger, lt as Token, L as TokenType, ua as TransplantedType, fe as TreeError, yn as Type, Yc as TypeModifier, os as TypeofExpr, Jr as TypeofExpression, Fs as Unary, Vs as UnaryOperator, rn as UnaryOperatorExpr, Zk as VERSION, ri as VariableBinding, al as Version, At as ViewEncapsulation, $r as VoidExpr, Kr as VoidExpression, W as WrappedNodeExpr, Bc as Xliff, $c as Xliff2, Tl as Xmb, Fn as XmlParser, qc as Xtb, Vf as _ATTR_TO_PROP, Xk as compileClassDebugInfo, VA as compileClassMetadata, $k as compileComponentClassMetadata, Vk as compileComponentDeclareClassMetadata, DC as compileComponentFromMetadata, HA as compileDeclareClassMetadata, Uk as compileDeclareComponentFromMetadata, qk as compileDeclareDirectiveFromMetadata, Hk as compileDeclareFactoryFunction, Wk as compileDeclareInjectableFromMetadata, jk as compileDeclareInjectorFromMetadata, zk as compileDeclareNgModuleFromMetadata, Gk as compileDeclarePipeFromMetadata, Pk as compileDeferResolverFunction, NC as compileDirectiveFromMetadata, zn as compileFactoryFunction, Yk as compileHmrInitializer, Qk as compileHmrUpdateCallback, Bu as compileInjectable, Hu as compileInjector, og as compileNgModule, Ok as compileOpaqueAsyncClassMetadata, Wu as compilePipeFromMetadata, Tp as computeMsgId, uk as core, Hm as createCssSelectorFromNode, Yp as createInjectableType, Qc as createMayBeForwardRefExpression, jr as devOnlyGuardedExpression, Md as emitDistinctChangesOnlyDefaultValue, Dk as encapsulateStyle, fk as escapeRegExp, Lk as findMatchingDirectivesAndPipes, ic as getHtmlTagDefinition, ml as getNsPrefix, Cm as getSafePropertyAccessString, sg as identifierName, Pu as isNgContainer, dl as isNgContent, Nm as isNgTemplate, Lp as jsDocComment, em as leadingComment, d as literal, Ce as literalMap, ao as makeBindingParser, ia as mergeNsAndName, pk as outputAst, RC as parseHostBindings, cd as parseTemplate, aA as preserveWhitespacesDefault, Bk as publishFacade, tg as r3JitTypeSourceSpan, Gn as sanitizeIdentifier, Nk as setEnableTemplateSourceLocations, Le as splitNsName, G as tmplAstVisitAll, FC as verifyHostBindings, P as visitAll };
/*! Bundled license information:

@angular/compiler/fesm2022/compiler.mjs:
  (**
   * @license Angular v21.2.18
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)

@angular/compiler/fesm2022/compiler.mjs:
  (**
   *
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.dev/license
   *)
*/
