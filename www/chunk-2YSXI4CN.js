import { b as a } from "@nf-internal/chunk-2YPJAHFP";
var i, d = () => { if (typeof window > "u")
    return new Map; if (!i) {
    let t = window;
    t.Ionicons = t.Ionicons || {}, i = t.Ionicons.map = t.Ionicons.map || new Map;
} return i; }, b = t => { Object.keys(t).forEach(e => { l(e, t[e]); let n = e.replace(/([a-z0-9]|(?=[A-Z]))([A-Z0-9])/g, "$1-$2").toLowerCase(); e !== n && l(n, t[e]); }); }, l = (t, e) => { let n = d(), r = n.get(t); r === void 0 ? n.set(t, e) : r !== e && console.warn(`[Ionicons Warning]: Multiple icons were mapped to name "${t}". Ensure that multiple icons are not mapped to the same icon name.`); }, I = t => { let e = u(t.src); return e || (e = p(t.name, t.icon, t.mode, t.ios, t.md), e ? g(e, t) : t.icon && (e = u(t.icon), e || (e = u(t.icon[t.mode]), e)) ? e : null); }, g = (t, e) => { let n = d().get(t); if (n)
    return n; try {
    return a(`svg/${t}.svg`);
}
catch (r) {
    console.log("e", r), console.warn(`[Ionicons Warning]: Could not load icon with name "${t}". Ensure that the icon is registered using addIcons or that the icon SVG data is passed directly to the icon component.`, e);
} }, p = (t, e, n, r, s) => (n = (n && o(n)) === "ios" ? "ios" : "md", r && n === "ios" ? t = o(r) : s && n === "md" ? t = o(s) : (!t && e && !f(e) && (t = e), c(t) && (t = o(t))), !c(t) || t.trim() === "" || t.replace(/[a-z]|-|\d/gi, "") !== "" ? null : t), u = t => c(t) && (t = t.trim(), f(t)) ? t : null, f = t => t.length > 0 && /(\/|\.)/.test(t), c = t => typeof t == "string", o = t => t.toLowerCase(), A = (t, e = []) => { let n = {}; return e.forEach(r => { t.hasAttribute(r) && (t.getAttribute(r) !== null && (n[r] = t.getAttribute(r)), t.removeAttribute(r)); }), n; }, C = t => t && t.dir !== "" ? t.dir.toLowerCase() === "rtl" : document?.dir.toLowerCase() === "rtl";
export { b as a, I as b, p as c, c as d, A as e, C as f };
