import { c as oe, f as Hr, g as Xr, h as M } from "@nf-internal/chunk-C4FLJMU7";
var ke = Hr((Ge, we) => { (function (x) { if (typeof Ge == "object" && typeof we < "u")
    we.exports = x();
else if (typeof define == "function" && define.amd)
    define([], x);
else {
    var y;
    typeof window < "u" ? y = window : typeof global < "u" ? y = global : typeof self < "u" ? y = self : y = this, y.localforage = x();
} })(function () { var x, y, O; return (function V(W, H, E) { function P(B, $) { if (!H[B]) {
    if (!W[B]) {
        var d = typeof oe == "function" && oe;
        if (!$ && d)
            return d(B, !0);
        if (S)
            return S(B, !0);
        var h = new Error("Cannot find module '" + B + "'");
        throw h.code = "MODULE_NOT_FOUND", h;
    }
    var D = H[B] = { exports: {} };
    W[B][0].call(D.exports, function (A) { var K = W[B][1][A]; return P(K || A); }, D, D.exports, V, W, H, E);
} return H[B].exports; } for (var S = typeof oe == "function" && oe, L = 0; L < E.length; L++)
    P(E[L]); return P; })({ 1: [function (V, W, H) { (function (E) {
            "use strict";
            var P = E.MutationObserver || E.WebKitMutationObserver, S;
            if (P) {
                var L = 0, B = new P(A), $ = E.document.createTextNode("");
                B.observe($, { characterData: !0 }), S = function () { $.data = L = ++L % 2; };
            }
            else if (!E.setImmediate && typeof E.MessageChannel < "u") {
                var d = new E.MessageChannel;
                d.port1.onmessage = A, S = function () { d.port2.postMessage(0); };
            }
            else
                "document" in E && "onreadystatechange" in E.document.createElement("script") ? S = function () { var N = E.document.createElement("script"); N.onreadystatechange = function () { A(), N.onreadystatechange = null, N.parentNode.removeChild(N), N = null; }, E.document.documentElement.appendChild(N); } : S = function () { setTimeout(A, 0); };
            var h, D = [];
            function A() { h = !0; for (var N, G, T = D.length; T;) {
                for (G = D, D = [], N = -1; ++N < T;)
                    G[N]();
                T = D.length;
            } h = !1; }
            W.exports = K;
            function K(N) { D.push(N) === 1 && !h && S(); }
        }).call(this, typeof global < "u" ? global : typeof self < "u" ? self : typeof window < "u" ? window : {}); }, {}], 2: [function (V, W, H) {
            "use strict";
            var E = V(1);
            function P() { }
            var S = {}, L = ["REJECTED"], B = ["FULFILLED"], $ = ["PENDING"];
            W.exports = d;
            function d(l) { if (typeof l != "function")
                throw new TypeError("resolver must be a function"); this.state = $, this.queue = [], this.outcome = void 0, l !== P && K(this, l); }
            d.prototype.catch = function (l) { return this.then(null, l); }, d.prototype.then = function (l, p) { if (typeof l != "function" && this.state === B || typeof p != "function" && this.state === L)
                return this; var g = new this.constructor(P); if (this.state !== $) {
                var w = this.state === B ? l : p;
                D(g, w, this.outcome);
            }
            else
                this.queue.push(new h(g, l, p)); return g; };
            function h(l, p, g) { this.promise = l, typeof p == "function" && (this.onFulfilled = p, this.callFulfilled = this.otherCallFulfilled), typeof g == "function" && (this.onRejected = g, this.callRejected = this.otherCallRejected); }
            h.prototype.callFulfilled = function (l) { S.resolve(this.promise, l); }, h.prototype.otherCallFulfilled = function (l) { D(this.promise, this.onFulfilled, l); }, h.prototype.callRejected = function (l) { S.reject(this.promise, l); }, h.prototype.otherCallRejected = function (l) { D(this.promise, this.onRejected, l); };
            function D(l, p, g) { E(function () { var w; try {
                w = p(g);
            }
            catch (C) {
                return S.reject(l, C);
            } w === l ? S.reject(l, new TypeError("Cannot resolve promise with itself")) : S.resolve(l, w); }); }
            S.resolve = function (l, p) { var g = N(A, p); if (g.status === "error")
                return S.reject(l, g.value); var w = g.value; if (w)
                K(l, w);
            else {
                l.state = B, l.outcome = p;
                for (var C = -1, F = l.queue.length; ++C < F;)
                    l.queue[C].callFulfilled(p);
            } return l; }, S.reject = function (l, p) { l.state = L, l.outcome = p; for (var g = -1, w = l.queue.length; ++g < w;)
                l.queue[g].callRejected(p); return l; };
            function A(l) { var p = l && l.then; if (l && (typeof l == "object" || typeof l == "function") && typeof p == "function")
                return function () { p.apply(l, arguments); }; }
            function K(l, p) { var g = !1; function w(Y) { g || (g = !0, S.reject(l, Y)); } function C(Y) { g || (g = !0, S.resolve(l, Y)); } function F() { p(C, w); } var U = N(F); U.status === "error" && w(U.value); }
            function N(l, p) { var g = {}; try {
                g.value = l(p), g.status = "success";
            }
            catch (w) {
                g.status = "error", g.value = w;
            } return g; }
            d.resolve = G;
            function G(l) { return l instanceof this ? l : S.resolve(new this(P), l); }
            d.reject = T;
            function T(l) { var p = new this(P); return S.reject(p, l); }
            d.all = le;
            function le(l) { var p = this; if (Object.prototype.toString.call(l) !== "[object Array]")
                return this.reject(new TypeError("must be an array")); var g = l.length, w = !1; if (!g)
                return this.resolve([]); for (var C = new Array(g), F = 0, U = -1, Y = new this(P); ++U < g;)
                k(l[U], U); return Y; function k(re, ae) { p.resolve(re).then(de, function (q) { w || (w = !0, S.reject(Y, q)); }); function de(q) { C[ae] = q, ++F === g && !w && (w = !0, S.resolve(Y, C)); } } }
            d.race = J;
            function J(l) { var p = this; if (Object.prototype.toString.call(l) !== "[object Array]")
                return this.reject(new TypeError("must be an array")); var g = l.length, w = !1; if (!g)
                return this.resolve([]); for (var C = -1, F = new this(P); ++C < g;)
                U(l[C]); return F; function U(Y) { p.resolve(Y).then(function (k) { w || (w = !0, S.resolve(F, k)); }, function (k) { w || (w = !0, S.reject(F, k)); }); } }
        }, { 1: 1 }], 3: [function (V, W, H) { (function (E) {
            "use strict";
            typeof E.Promise != "function" && (E.Promise = V(2));
        }).call(this, typeof global < "u" ? global : typeof self < "u" ? self : typeof window < "u" ? window : {}); }, { 2: 2 }], 4: [function (V, W, H) {
            "use strict";
            var E = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) { return typeof e; } : function (e) { return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e; };
            function P(e, t) { if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function"); }
            function S() { try {
                if (typeof indexedDB < "u")
                    return indexedDB;
                if (typeof webkitIndexedDB < "u")
                    return webkitIndexedDB;
                if (typeof mozIndexedDB < "u")
                    return mozIndexedDB;
                if (typeof OIndexedDB < "u")
                    return OIndexedDB;
                if (typeof msIndexedDB < "u")
                    return msIndexedDB;
            }
            catch {
                return;
            } }
            var L = S();
            function B() { try {
                if (!L || !L.open)
                    return !1;
                var e = typeof openDatabase < "u" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform), t = typeof fetch == "function" && fetch.toString().indexOf("[native code") !== -1;
                return (!e || t) && typeof indexedDB < "u" && typeof IDBKeyRange < "u";
            }
            catch {
                return !1;
            } }
            function $(e, t) { e = e || [], t = t || {}; try {
                return new Blob(e, t);
            }
            catch (n) {
                if (n.name !== "TypeError")
                    throw n;
                for (var r = typeof BlobBuilder < "u" ? BlobBuilder : typeof MSBlobBuilder < "u" ? MSBlobBuilder : typeof MozBlobBuilder < "u" ? MozBlobBuilder : WebKitBlobBuilder, o = new r, i = 0; i < e.length; i += 1)
                    o.append(e[i]);
                return o.getBlob(t.type);
            } }
            typeof Promise > "u" && V(3);
            var d = Promise;
            function h(e, t) { t && e.then(function (r) { t(null, r); }, function (r) { t(r); }); }
            function D(e, t, r) { typeof t == "function" && e.then(t), typeof r == "function" && e.catch(r); }
            function A(e) { return typeof e != "string" && (console.warn(e + " used as a key, but it is not a string."), e = String(e)), e; }
            function K() { if (arguments.length && typeof arguments[arguments.length - 1] == "function")
                return arguments[arguments.length - 1]; }
            var N = "local-forage-detect-blob-support", G = void 0, T = {}, le = Object.prototype.toString, J = "readonly", l = "readwrite";
            function p(e) { for (var t = e.length, r = new ArrayBuffer(t), o = new Uint8Array(r), i = 0; i < t; i++)
                o[i] = e.charCodeAt(i); return r; }
            function g(e) { return new d(function (t) { var r = e.transaction(N, l), o = $([""]); r.objectStore(N).put(o, "key"), r.onabort = function (i) { i.preventDefault(), i.stopPropagation(), t(!1); }, r.oncomplete = function () { var i = navigator.userAgent.match(/Chrome\/(\d+)/), n = navigator.userAgent.match(/Edge\//); t(n || !i || parseInt(i[1], 10) >= 43); }; }).catch(function () { return !1; }); }
            function w(e) { return typeof G == "boolean" ? d.resolve(G) : g(e).then(function (t) { return G = t, G; }); }
            function C(e) { var t = T[e.name], r = {}; r.promise = new d(function (o, i) { r.resolve = o, r.reject = i; }), t.deferredOperations.push(r), t.dbReady ? t.dbReady = t.dbReady.then(function () { return r.promise; }) : t.dbReady = r.promise; }
            function F(e) { var t = T[e.name], r = t.deferredOperations.pop(); if (r)
                return r.resolve(), r.promise; }
            function U(e, t) { var r = T[e.name], o = r.deferredOperations.pop(); if (o)
                return o.reject(t), o.promise; }
            function Y(e, t) { return new d(function (r, o) { if (T[e.name] = T[e.name] || De(), e.db)
                if (t)
                    C(e), e.db.close();
                else
                    return r(e.db); var i = [e.name]; t && i.push(e.version); var n = L.open.apply(L, i); t && (n.onupgradeneeded = function (a) { var f = n.result; try {
                f.createObjectStore(e.storeName), a.oldVersion <= 1 && f.createObjectStore(N);
            }
            catch (u) {
                if (u.name === "ConstraintError")
                    console.warn('The database "' + e.name + '" has been upgraded from version ' + a.oldVersion + " to version " + a.newVersion + ', but the storage "' + e.storeName + '" already exists.');
                else
                    throw u;
            } }), n.onerror = function (a) { a.preventDefault(), o(n.error); }, n.onsuccess = function () { var a = n.result; a.onversionchange = function (f) { f.target.close(); }, r(a), F(e); }; }); }
            function k(e) { return Y(e, !1); }
            function re(e) { return Y(e, !0); }
            function ae(e, t) { if (!e.db)
                return !0; var r = !e.db.objectStoreNames.contains(e.storeName), o = e.version < e.db.version, i = e.version > e.db.version; if (o && (e.version !== t && console.warn('The database "' + e.name + `" can't be downgraded from version ` + e.db.version + " to version " + e.version + "."), e.version = e.db.version), i || r) {
                if (r) {
                    var n = e.db.version + 1;
                    n > e.version && (e.version = n);
                }
                return !0;
            } return !1; }
            function de(e) { return new d(function (t, r) { var o = new FileReader; o.onerror = r, o.onloadend = function (i) { var n = btoa(i.target.result || ""); t({ __local_forage_encoded_blob: !0, data: n, type: e.type }); }, o.readAsBinaryString(e); }); }
            function q(e) { var t = p(atob(e.data)); return $([t], { type: e.type }); }
            function Ie(e) { return e && e.__local_forage_encoded_blob; }
            function Xe(e) { var t = this, r = t._initReady().then(function () { var o = T[t._dbInfo.name]; if (o && o.dbReady)
                return o.dbReady; }); return D(r, e, e), r; }
            function je(e) { C(e); for (var t = T[e.name], r = t.forages, o = 0; o < r.length; o++) {
                var i = r[o];
                i._dbInfo.db && (i._dbInfo.db.close(), i._dbInfo.db = null);
            } return e.db = null, k(e).then(function (n) { return e.db = n, ae(e) ? re(e) : n; }).then(function (n) { e.db = t.db = n; for (var a = 0; a < r.length; a++)
                r[a]._dbInfo.db = n; }).catch(function (n) { throw U(e, n), n; }); }
            function Q(e, t, r, o) { o === void 0 && (o = 1); try {
                var i = e.db.transaction(e.storeName, t);
                r(null, i);
            }
            catch (n) {
                if (o > 0 && (!e.db || n.name === "InvalidStateError" || n.name === "NotFoundError"))
                    return d.resolve().then(function () { if (!e.db || n.name === "NotFoundError" && !e.db.objectStoreNames.contains(e.storeName) && e.version <= e.db.version)
                        return e.db && (e.version = e.db.version + 1), re(e); }).then(function () { return je(e).then(function () { Q(e, t, r, o - 1); }); }).catch(r);
                r(n);
            } }
            function De() { return { forages: [], db: null, dbReady: null, deferredOperations: [] }; }
            function Je(e) { var t = this, r = { db: null }; if (e)
                for (var o in e)
                    r[o] = e[o]; var i = T[r.name]; i || (i = De(), T[r.name] = i), i.forages.push(t), t._initReady || (t._initReady = t.ready, t.ready = Xe); var n = []; function a() { return d.resolve(); } for (var f = 0; f < i.forages.length; f++) {
                var u = i.forages[f];
                u !== t && n.push(u._initReady().catch(a));
            } var s = i.forages.slice(0); return d.all(n).then(function () { return r.db = i.db, k(r); }).then(function (c) { return r.db = c, ae(r, t._defaultConfig.version) ? re(r) : c; }).then(function (c) { r.db = i.db = c, t._dbInfo = r; for (var v = 0; v < s.length; v++) {
                var m = s[v];
                m !== t && (m._dbInfo.db = r.db, m._dbInfo.version = r.version);
            } }); }
            function Ze(e, t) { var r = this; e = A(e); var o = new d(function (i, n) { r.ready().then(function () { Q(r._dbInfo, J, function (a, f) { if (a)
                return n(a); try {
                var u = f.objectStore(r._dbInfo.storeName), s = u.get(e);
                s.onsuccess = function () { var c = s.result; c === void 0 && (c = null), Ie(c) && (c = q(c)), i(c); }, s.onerror = function () { n(s.error); };
            }
            catch (c) {
                n(c);
            } }); }).catch(n); }); return h(o, t), o; }
            function qe(e, t) { var r = this, o = new d(function (i, n) { r.ready().then(function () { Q(r._dbInfo, J, function (a, f) { if (a)
                return n(a); try {
                var u = f.objectStore(r._dbInfo.storeName), s = u.openCursor(), c = 1;
                s.onsuccess = function () { var v = s.result; if (v) {
                    var m = v.value;
                    Ie(m) && (m = q(m));
                    var b = e(m, v.key, c++);
                    b !== void 0 ? i(b) : v.continue();
                }
                else
                    i(); }, s.onerror = function () { n(s.error); };
            }
            catch (v) {
                n(v);
            } }); }).catch(n); }); return h(o, t), o; }
            function er(e, t, r) { var o = this; e = A(e); var i = new d(function (n, a) { var f; o.ready().then(function () { return f = o._dbInfo, le.call(t) === "[object Blob]" ? w(f.db).then(function (u) { return u ? t : de(t); }) : t; }).then(function (u) { Q(o._dbInfo, l, function (s, c) { if (s)
                return a(s); try {
                var v = c.objectStore(o._dbInfo.storeName);
                u === null && (u = void 0);
                var m = v.put(u, e);
                c.oncomplete = function () { u === void 0 && (u = null), n(u); }, c.onabort = c.onerror = function () { var b = m.error ? m.error : m.transaction.error; a(b); };
            }
            catch (b) {
                a(b);
            } }); }).catch(a); }); return h(i, r), i; }
            function rr(e, t) { var r = this; e = A(e); var o = new d(function (i, n) { r.ready().then(function () { Q(r._dbInfo, l, function (a, f) { if (a)
                return n(a); try {
                var u = f.objectStore(r._dbInfo.storeName), s = u.delete(e);
                f.oncomplete = function () { i(); }, f.onerror = function () { n(s.error); }, f.onabort = function () { var c = s.error ? s.error : s.transaction.error; n(c); };
            }
            catch (c) {
                n(c);
            } }); }).catch(n); }); return h(o, t), o; }
            function tr(e) { var t = this, r = new d(function (o, i) { t.ready().then(function () { Q(t._dbInfo, l, function (n, a) { if (n)
                return i(n); try {
                var f = a.objectStore(t._dbInfo.storeName), u = f.clear();
                a.oncomplete = function () { o(); }, a.onabort = a.onerror = function () { var s = u.error ? u.error : u.transaction.error; i(s); };
            }
            catch (s) {
                i(s);
            } }); }).catch(i); }); return h(r, e), r; }
            function nr(e) { var t = this, r = new d(function (o, i) { t.ready().then(function () { Q(t._dbInfo, J, function (n, a) { if (n)
                return i(n); try {
                var f = a.objectStore(t._dbInfo.storeName), u = f.count();
                u.onsuccess = function () { o(u.result); }, u.onerror = function () { i(u.error); };
            }
            catch (s) {
                i(s);
            } }); }).catch(i); }); return h(r, e), r; }
            function or(e, t) { var r = this, o = new d(function (i, n) { if (e < 0) {
                i(null);
                return;
            } r.ready().then(function () { Q(r._dbInfo, J, function (a, f) { if (a)
                return n(a); try {
                var u = f.objectStore(r._dbInfo.storeName), s = !1, c = u.openKeyCursor();
                c.onsuccess = function () { var v = c.result; if (!v) {
                    i(null);
                    return;
                } e === 0 || s ? i(v.key) : (s = !0, v.advance(e)); }, c.onerror = function () { n(c.error); };
            }
            catch (v) {
                n(v);
            } }); }).catch(n); }); return h(o, t), o; }
            function ir(e) { var t = this, r = new d(function (o, i) { t.ready().then(function () { Q(t._dbInfo, J, function (n, a) { if (n)
                return i(n); try {
                var f = a.objectStore(t._dbInfo.storeName), u = f.openKeyCursor(), s = [];
                u.onsuccess = function () { var c = u.result; if (!c) {
                    o(s);
                    return;
                } s.push(c.key), c.continue(); }, u.onerror = function () { i(u.error); };
            }
            catch (c) {
                i(c);
            } }); }).catch(i); }); return h(r, e), r; }
            function ar(e, t) { t = K.apply(this, arguments); var r = this.config(); e = typeof e != "function" && e || {}, e.name || (e.name = e.name || r.name, e.storeName = e.storeName || r.storeName); var o = this, i; if (!e.name)
                i = d.reject("Invalid arguments");
            else {
                var n = e.name === r.name && o._dbInfo.db, a = n ? d.resolve(o._dbInfo.db) : k(e).then(function (f) { var u = T[e.name], s = u.forages; u.db = f; for (var c = 0; c < s.length; c++)
                    s[c]._dbInfo.db = f; return f; });
                e.storeName ? i = a.then(function (f) { if (f.objectStoreNames.contains(e.storeName)) {
                    var u = f.version + 1;
                    C(e);
                    var s = T[e.name], c = s.forages;
                    f.close();
                    for (var v = 0; v < c.length; v++) {
                        var m = c[v];
                        m._dbInfo.db = null, m._dbInfo.version = u;
                    }
                    var b = new d(function (_, R) { var I = L.open(e.name, u); I.onerror = function (z) { var ne = I.result; ne.close(), R(z); }, I.onupgradeneeded = function () { var z = I.result; z.deleteObjectStore(e.storeName); }, I.onsuccess = function () { var z = I.result; z.close(), _(z); }; });
                    return b.then(function (_) { s.db = _; for (var R = 0; R < c.length; R++) {
                        var I = c[R];
                        I._dbInfo.db = _, F(I._dbInfo);
                    } }).catch(function (_) { throw (U(e, _) || d.resolve()).catch(function () { }), _; });
                } }) : i = a.then(function (f) { C(e); var u = T[e.name], s = u.forages; f.close(); for (var c = 0; c < s.length; c++) {
                    var v = s[c];
                    v._dbInfo.db = null;
                } var m = new d(function (b, _) { var R = L.deleteDatabase(e.name); R.onerror = function () { var I = R.result; I && I.close(), _(R.error); }, R.onblocked = function () { console.warn('dropInstance blocked for database "' + e.name + '" until all open connections are closed'); }, R.onsuccess = function () { var I = R.result; I && I.close(), b(I); }; }); return m.then(function (b) { u.db = b; for (var _ = 0; _ < s.length; _++) {
                    var R = s[_];
                    F(R._dbInfo);
                } }).catch(function (b) { throw (U(e, b) || d.resolve()).catch(function () { }), b; }); });
            } return h(i, t), i; }
            var fr = { _driver: "asyncStorage", _initStorage: Je, _support: B(), iterate: qe, getItem: Ze, setItem: er, removeItem: rr, clear: tr, length: nr, key: or, keys: ir, dropInstance: ar };
            function ur() { return typeof openDatabase == "function"; }
            var X = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", sr = "~~local_forage_type~", Re = /^~~local_forage_type~([^~]+)~/, fe = "__lfsc__:", ve = fe.length, he = "arbf", ye = "blob", Ae = "si08", Ne = "ui08", Te = "uic8", xe = "si16", Be = "si32", Ce = "ur16", Oe = "ui32", Le = "fl32", Pe = "fl64", Fe = ve + he.length, Me = Object.prototype.toString;
            function Ue(e) { var t = e.length * .75, r = e.length, o, i = 0, n, a, f, u; e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--); var s = new ArrayBuffer(t), c = new Uint8Array(s); for (o = 0; o < r; o += 4)
                n = X.indexOf(e[o]), a = X.indexOf(e[o + 1]), f = X.indexOf(e[o + 2]), u = X.indexOf(e[o + 3]), c[i++] = n << 2 | a >> 4, c[i++] = (a & 15) << 4 | f >> 2, c[i++] = (f & 3) << 6 | u & 63; return s; }
            function me(e) { var t = new Uint8Array(e), r = "", o; for (o = 0; o < t.length; o += 3)
                r += X[t[o] >> 2], r += X[(t[o] & 3) << 4 | t[o + 1] >> 4], r += X[(t[o + 1] & 15) << 2 | t[o + 2] >> 6], r += X[t[o + 2] & 63]; return t.length % 3 === 2 ? r = r.substring(0, r.length - 1) + "=" : t.length % 3 === 1 && (r = r.substring(0, r.length - 2) + "=="), r; }
            function cr(e, t) { var r = ""; if (e && (r = Me.call(e)), e && (r === "[object ArrayBuffer]" || e.buffer && Me.call(e.buffer) === "[object ArrayBuffer]")) {
                var o, i = fe;
                e instanceof ArrayBuffer ? (o = e, i += he) : (o = e.buffer, r === "[object Int8Array]" ? i += Ae : r === "[object Uint8Array]" ? i += Ne : r === "[object Uint8ClampedArray]" ? i += Te : r === "[object Int16Array]" ? i += xe : r === "[object Uint16Array]" ? i += Ce : r === "[object Int32Array]" ? i += Be : r === "[object Uint32Array]" ? i += Oe : r === "[object Float32Array]" ? i += Le : r === "[object Float64Array]" ? i += Pe : t(new Error("Failed to get type for BinaryArray"))), t(i + me(o));
            }
            else if (r === "[object Blob]") {
                var n = new FileReader;
                n.onload = function () { var a = sr + e.type + "~" + me(this.result); t(fe + ye + a); }, n.readAsArrayBuffer(e);
            }
            else
                try {
                    t(JSON.stringify(e));
                }
                catch (a) {
                    console.error("Couldn't convert value into a JSON string: ", e), t(null, a);
                } }
            function lr(e) { if (e.substring(0, ve) !== fe)
                return JSON.parse(e); var t = e.substring(Fe), r = e.substring(ve, Fe), o; if (r === ye && Re.test(t)) {
                var i = t.match(Re);
                o = i[1], t = t.substring(i[0].length);
            } var n = Ue(t); switch (r) {
                case he: return n;
                case ye: return $([n], { type: o });
                case Ae: return new Int8Array(n);
                case Ne: return new Uint8Array(n);
                case Te: return new Uint8ClampedArray(n);
                case xe: return new Int16Array(n);
                case Ce: return new Uint16Array(n);
                case Be: return new Int32Array(n);
                case Oe: return new Uint32Array(n);
                case Le: return new Float32Array(n);
                case Pe: return new Float64Array(n);
                default: throw new Error("Unkown type: " + r);
            } }
            var ge = { serialize: cr, deserialize: lr, stringToBuffer: Ue, bufferToString: me };
            function Ye(e, t, r, o) { e.executeSql("CREATE TABLE IF NOT EXISTS " + t.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], r, o); }
            function dr(e) { var t = this, r = { db: null }; if (e)
                for (var o in e)
                    r[o] = typeof e[o] != "string" ? e[o].toString() : e[o]; var i = new d(function (n, a) { try {
                r.db = openDatabase(r.name, String(r.version), r.description, r.size);
            }
            catch (f) {
                return a(f);
            } r.db.transaction(function (f) { Ye(f, r, function () { t._dbInfo = r, n(); }, function (u, s) { a(s); }); }, a); }); return r.serializer = ge, i; }
            function j(e, t, r, o, i, n) { e.executeSql(r, o, i, function (a, f) { f.code === f.SYNTAX_ERR ? a.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [t.storeName], function (u, s) { s.rows.length ? n(u, f) : Ye(u, t, function () { u.executeSql(r, o, i, n); }, n); }, n) : n(a, f); }, n); }
            function vr(e, t) { var r = this; e = A(e); var o = new d(function (i, n) { r.ready().then(function () { var a = r._dbInfo; a.db.transaction(function (f) { j(f, a, "SELECT * FROM " + a.storeName + " WHERE key = ? LIMIT 1", [e], function (u, s) { var c = s.rows.length ? s.rows.item(0).value : null; c && (c = a.serializer.deserialize(c)), i(c); }, function (u, s) { n(s); }); }); }).catch(n); }); return h(o, t), o; }
            function hr(e, t) { var r = this, o = new d(function (i, n) { r.ready().then(function () { var a = r._dbInfo; a.db.transaction(function (f) { j(f, a, "SELECT * FROM " + a.storeName, [], function (u, s) { for (var c = s.rows, v = c.length, m = 0; m < v; m++) {
                var b = c.item(m), _ = b.value;
                if (_ && (_ = a.serializer.deserialize(_)), _ = e(_, b.key, m + 1), _ !== void 0) {
                    i(_);
                    return;
                }
            } i(); }, function (u, s) { n(s); }); }); }).catch(n); }); return h(o, t), o; }
            function ze(e, t, r, o) { var i = this; e = A(e); var n = new d(function (a, f) { i.ready().then(function () { t === void 0 && (t = null); var u = t, s = i._dbInfo; s.serializer.serialize(t, function (c, v) { v ? f(v) : s.db.transaction(function (m) { j(m, s, "INSERT OR REPLACE INTO " + s.storeName + " (key, value) VALUES (?, ?)", [e, c], function () { a(u); }, function (b, _) { f(_); }); }, function (m) { if (m.code === m.QUOTA_ERR) {
                if (o > 0) {
                    a(ze.apply(i, [e, u, r, o - 1]));
                    return;
                }
                f(m);
            } }); }); }).catch(f); }); return h(n, r), n; }
            function yr(e, t, r) { return ze.apply(this, [e, t, r, 1]); }
            function mr(e, t) { var r = this; e = A(e); var o = new d(function (i, n) { r.ready().then(function () { var a = r._dbInfo; a.db.transaction(function (f) { j(f, a, "DELETE FROM " + a.storeName + " WHERE key = ?", [e], function () { i(); }, function (u, s) { n(s); }); }); }).catch(n); }); return h(o, t), o; }
            function gr(e) { var t = this, r = new d(function (o, i) { t.ready().then(function () { var n = t._dbInfo; n.db.transaction(function (a) { j(a, n, "DELETE FROM " + n.storeName, [], function () { o(); }, function (f, u) { i(u); }); }); }).catch(i); }); return h(r, e), r; }
            function pr(e) { var t = this, r = new d(function (o, i) { t.ready().then(function () { var n = t._dbInfo; n.db.transaction(function (a) { j(a, n, "SELECT COUNT(key) as c FROM " + n.storeName, [], function (f, u) { var s = u.rows.item(0).c; o(s); }, function (f, u) { i(u); }); }); }).catch(i); }); return h(r, e), r; }
            function br(e, t) { var r = this, o = new d(function (i, n) { r.ready().then(function () { var a = r._dbInfo; a.db.transaction(function (f) { j(f, a, "SELECT key FROM " + a.storeName + " WHERE id = ? LIMIT 1", [e + 1], function (u, s) { var c = s.rows.length ? s.rows.item(0).key : null; i(c); }, function (u, s) { n(s); }); }); }).catch(n); }); return h(o, t), o; }
            function _r(e) { var t = this, r = new d(function (o, i) { t.ready().then(function () { var n = t._dbInfo; n.db.transaction(function (a) { j(a, n, "SELECT key FROM " + n.storeName, [], function (f, u) { for (var s = [], c = 0; c < u.rows.length; c++)
                s.push(u.rows.item(c).key); o(s); }, function (f, u) { i(u); }); }); }).catch(i); }); return h(r, e), r; }
            function Sr(e) { return new d(function (t, r) { e.transaction(function (o) { o.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function (i, n) { for (var a = [], f = 0; f < n.rows.length; f++)
                a.push(n.rows.item(f).name); t({ db: e, storeNames: a }); }, function (i, n) { r(n); }); }, function (o) { r(o); }); }); }
            function wr(e, t) { t = K.apply(this, arguments); var r = this.config(); e = typeof e != "function" && e || {}, e.name || (e.name = e.name || r.name, e.storeName = e.storeName || r.storeName); var o = this, i; return e.name ? i = new d(function (n) { var a; e.name === r.name ? a = o._dbInfo.db : a = openDatabase(e.name, "", "", 0), e.storeName ? n({ db: a, storeNames: [e.storeName] }) : n(Sr(a)); }).then(function (n) { return new d(function (a, f) { n.db.transaction(function (u) { function s(b) { return new d(function (_, R) { u.executeSql("DROP TABLE IF EXISTS " + b, [], function () { _(); }, function (I, z) { R(z); }); }); } for (var c = [], v = 0, m = n.storeNames.length; v < m; v++)
                c.push(s(n.storeNames[v])); d.all(c).then(function () { a(); }).catch(function (b) { f(b); }); }, function (u) { f(u); }); }); }) : i = d.reject("Invalid arguments"), h(i, t), i; }
            var Er = { _driver: "webSQLStorage", _initStorage: dr, _support: ur(), iterate: hr, getItem: vr, setItem: yr, removeItem: mr, clear: gr, length: pr, key: br, keys: _r, dropInstance: wr };
            function Ir() { try {
                return typeof localStorage < "u" && "setItem" in localStorage && !!localStorage.setItem;
            }
            catch {
                return !1;
            } }
            function We(e, t) { var r = e.name + "/"; return e.storeName !== t.storeName && (r += e.storeName + "/"), r; }
            function Dr() { var e = "_localforage_support_test"; try {
                return localStorage.setItem(e, !0), localStorage.removeItem(e), !1;
            }
            catch {
                return !0;
            } }
            function Rr() { return !Dr() || localStorage.length > 0; }
            function Ar(e) { var t = this, r = {}; if (e)
                for (var o in e)
                    r[o] = e[o]; return r.keyPrefix = We(e, t._defaultConfig), Rr() ? (t._dbInfo = r, r.serializer = ge, d.resolve()) : d.reject(); }
            function Nr(e) { var t = this, r = t.ready().then(function () { for (var o = t._dbInfo.keyPrefix, i = localStorage.length - 1; i >= 0; i--) {
                var n = localStorage.key(i);
                n.indexOf(o) === 0 && localStorage.removeItem(n);
            } }); return h(r, e), r; }
            function Tr(e, t) { var r = this; e = A(e); var o = r.ready().then(function () { var i = r._dbInfo, n = localStorage.getItem(i.keyPrefix + e); return n && (n = i.serializer.deserialize(n)), n; }); return h(o, t), o; }
            function xr(e, t) { var r = this, o = r.ready().then(function () { for (var i = r._dbInfo, n = i.keyPrefix, a = n.length, f = localStorage.length, u = 1, s = 0; s < f; s++) {
                var c = localStorage.key(s);
                if (c.indexOf(n) === 0) {
                    var v = localStorage.getItem(c);
                    if (v && (v = i.serializer.deserialize(v)), v = e(v, c.substring(a), u++), v !== void 0)
                        return v;
                }
            } }); return h(o, t), o; }
            function Br(e, t) { var r = this, o = r.ready().then(function () { var i = r._dbInfo, n; try {
                n = localStorage.key(e);
            }
            catch {
                n = null;
            } return n && (n = n.substring(i.keyPrefix.length)), n; }); return h(o, t), o; }
            function Cr(e) { var t = this, r = t.ready().then(function () { for (var o = t._dbInfo, i = localStorage.length, n = [], a = 0; a < i; a++) {
                var f = localStorage.key(a);
                f.indexOf(o.keyPrefix) === 0 && n.push(f.substring(o.keyPrefix.length));
            } return n; }); return h(r, e), r; }
            function Or(e) { var t = this, r = t.keys().then(function (o) { return o.length; }); return h(r, e), r; }
            function Lr(e, t) { var r = this; e = A(e); var o = r.ready().then(function () { var i = r._dbInfo; localStorage.removeItem(i.keyPrefix + e); }); return h(o, t), o; }
            function Pr(e, t, r) { var o = this; e = A(e); var i = o.ready().then(function () { t === void 0 && (t = null); var n = t; return new d(function (a, f) { var u = o._dbInfo; u.serializer.serialize(t, function (s, c) { if (c)
                f(c);
            else
                try {
                    localStorage.setItem(u.keyPrefix + e, s), a(n);
                }
                catch (v) {
                    (v.name === "QuotaExceededError" || v.name === "NS_ERROR_DOM_QUOTA_REACHED") && f(v), f(v);
                } }); }); }); return h(i, r), i; }
            function Fr(e, t) { if (t = K.apply(this, arguments), e = typeof e != "function" && e || {}, !e.name) {
                var r = this.config();
                e.name = e.name || r.name, e.storeName = e.storeName || r.storeName;
            } var o = this, i; return e.name ? i = new d(function (n) { e.storeName ? n(We(e, o._defaultConfig)) : n(e.name + "/"); }).then(function (n) { for (var a = localStorage.length - 1; a >= 0; a--) {
                var f = localStorage.key(a);
                f.indexOf(n) === 0 && localStorage.removeItem(f);
            } }) : i = d.reject("Invalid arguments"), h(i, t), i; }
            var Mr = { _driver: "localStorageWrapper", _initStorage: Ar, _support: Ir(), iterate: xr, getItem: Tr, setItem: Pr, removeItem: Lr, clear: Nr, length: Or, key: Br, keys: Cr, dropInstance: Fr }, Ur = function (t, r) { return t === r || typeof t == "number" && typeof r == "number" && isNaN(t) && isNaN(r); }, Yr = function (t, r) { for (var o = t.length, i = 0; i < o;) {
                if (Ur(t[i], r))
                    return !0;
                i++;
            } return !1; }, $e = Array.isArray || function (e) { return Object.prototype.toString.call(e) === "[object Array]"; }, te = {}, Ke = {}, ee = { INDEXEDDB: fr, WEBSQL: Er, LOCALSTORAGE: Mr }, zr = [ee.INDEXEDDB._driver, ee.WEBSQL._driver, ee.LOCALSTORAGE._driver], ue = ["dropInstance"], pe = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(ue), Wr = { description: "", driver: zr.slice(), name: "localforage", size: 4980736, storeName: "keyvaluepairs", version: 1 };
            function $r(e, t) { e[t] = function () { var r = arguments; return e.ready().then(function () { return e[t].apply(e, r); }); }; }
            function be() { for (var e = 1; e < arguments.length; e++) {
                var t = arguments[e];
                if (t)
                    for (var r in t)
                        t.hasOwnProperty(r) && ($e(t[r]) ? arguments[0][r] = t[r].slice() : arguments[0][r] = t[r]);
            } return arguments[0]; }
            var Kr = (function () { function e(t) { P(this, e); for (var r in ee)
                if (ee.hasOwnProperty(r)) {
                    var o = ee[r], i = o._driver;
                    this[r] = i, te[i] || this.defineDriver(o);
                } this._defaultConfig = be({}, Wr), this._config = be({}, this._defaultConfig, t), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function () { }); } return e.prototype.config = function (r) { if ((typeof r > "u" ? "undefined" : E(r)) === "object") {
                if (this._ready)
                    return new Error("Can't call config() after localforage has been used.");
                for (var o in r) {
                    if (o === "storeName" && (r[o] = r[o].replace(/\W/g, "_")), o === "version" && typeof r[o] != "number")
                        return new Error("Database version must be a number.");
                    this._config[o] = r[o];
                }
                return "driver" in r && r.driver ? this.setDriver(this._config.driver) : !0;
            }
            else
                return typeof r == "string" ? this._config[r] : this._config; }, e.prototype.defineDriver = function (r, o, i) { var n = new d(function (a, f) { try {
                var u = r._driver, s = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
                if (!r._driver) {
                    f(s);
                    return;
                }
                for (var c = pe.concat("_initStorage"), v = 0, m = c.length; v < m; v++) {
                    var b = c[v], _ = !Yr(ue, b);
                    if ((_ || r[b]) && typeof r[b] != "function") {
                        f(s);
                        return;
                    }
                }
                var R = function () { for (var ne = function (kr) { return function () { var Qr = new Error("Method " + kr + " is not implemented by the current driver"), Ve = d.reject(Qr); return h(Ve, arguments[arguments.length - 1]), Ve; }; }, _e = 0, Gr = ue.length; _e < Gr; _e++) {
                    var Se = ue[_e];
                    r[Se] || (r[Se] = ne(Se));
                } };
                R();
                var I = function (ne) { te[u] && console.info("Redefining LocalForage driver: " + u), te[u] = r, Ke[u] = ne, a(); };
                "_support" in r ? r._support && typeof r._support == "function" ? r._support().then(I, f) : I(!!r._support) : I(!0);
            }
            catch (z) {
                f(z);
            } }); return D(n, o, i), n; }, e.prototype.driver = function () { return this._driver || null; }, e.prototype.getDriver = function (r, o, i) { var n = te[r] ? d.resolve(te[r]) : d.reject(new Error("Driver not found.")); return D(n, o, i), n; }, e.prototype.getSerializer = function (r) { var o = d.resolve(ge); return D(o, r), o; }, e.prototype.ready = function (r) { var o = this, i = o._driverSet.then(function () { return o._ready === null && (o._ready = o._initDriver()), o._ready; }); return D(i, r, r), i; }, e.prototype.setDriver = function (r, o, i) { var n = this; $e(r) || (r = [r]); var a = this._getSupportedDrivers(r); function f() { n._config.driver = n.driver(); } function u(v) { return n._extend(v), f(), n._ready = n._initStorage(n._config), n._ready; } function s(v) { return function () { var m = 0; function b() { for (; m < v.length;) {
                var _ = v[m];
                return m++, n._dbInfo = null, n._ready = null, n.getDriver(_).then(u).catch(b);
            } f(); var R = new Error("No available storage method found."); return n._driverSet = d.reject(R), n._driverSet; } return b(); }; } var c = this._driverSet !== null ? this._driverSet.catch(function () { return d.resolve(); }) : d.resolve(); return this._driverSet = c.then(function () { var v = a[0]; return n._dbInfo = null, n._ready = null, n.getDriver(v).then(function (m) { n._driver = m._driver, f(), n._wrapLibraryMethodsWithReady(), n._initDriver = s(a); }); }).catch(function () { f(); var v = new Error("No available storage method found."); return n._driverSet = d.reject(v), n._driverSet; }), D(this._driverSet, o, i), this._driverSet; }, e.prototype.supports = function (r) { return !!Ke[r]; }, e.prototype._extend = function (r) { be(this, r); }, e.prototype._getSupportedDrivers = function (r) { for (var o = [], i = 0, n = r.length; i < n; i++) {
                var a = r[i];
                this.supports(a) && o.push(a);
            } return o; }, e.prototype._wrapLibraryMethodsWithReady = function () { for (var r = 0, o = pe.length; r < o; r++)
                $r(this, pe[r]); }, e.prototype.createInstance = function (r) { return new e(r); }, e; })(), Vr = new Kr;
            W.exports = Vr;
        }, { 3: 3 }] }, {}, [4])(4); }); });
import { isPlatformServer as jr } from "@angular/common";
import * as ce from "@angular/core";
import { InjectionToken as Jr, PLATFORM_ID as Zr } from "@angular/core";
var ie = Xr(ke());
var se = { SecureStorage: "ionicSecureStorage", IndexedDB: ie.default.INDEXEDDB, LocalStorage: ie.default.LOCALSTORAGE }, Qe = { name: "_ionicstorage", storeName: "_ionickv", dbKey: "_ionickey", driverOrder: [se.SecureStorage, se.IndexedDB, se.LocalStorage] }, Z = class {
    constructor(y = Qe) { this._db = null, this._secureStorageDriver = null; let O = Object.assign({}, Qe, y || {}); this._config = O; }
    create() { return M(this, null, function* () { let y = ie.default.createInstance(this._config); return this._db = y, yield y.setDriver(this._config.driverOrder || []), this; }); }
    defineDriver(y) { return M(this, null, function* () { return y._driver === se.SecureStorage && (this._secureStorageDriver = y), ie.default.defineDriver(y); }); }
    get driver() { var y; return ((y = this._db) === null || y === void 0 ? void 0 : y.driver()) || null; }
    assertDb() { if (!this._db)
        throw new Error("Database not created. Must call create() first"); return this._db; }
    get(y) { return this.assertDb().getItem(y); }
    set(y, O) { return this.assertDb().setItem(y, O); }
    remove(y) { return this.assertDb().removeItem(y); }
    clear() { return this.assertDb().clear(); }
    length() { return this.assertDb().length(); }
    keys() { return this.assertDb().keys(); }
    forEach(y) { return this.assertDb().iterate(y); }
    setEncryptionKey(y) { var O; if (this._secureStorageDriver)
        (O = this._secureStorageDriver) === null || O === void 0 || O.setEncryptionKey(y);
    else
        throw new Error("@ionic-enterprise/secure-storage not installed. Encryption support not available"); }
};
var He = new Jr("STORAGE_CONFIG_TOKEN"), Ee = class extends Z {
    constructor() { super(); }
    create() { return M(this, null, function* () { return this; }); }
    defineDriver() { return M(this, null, function* () { }); }
    get driver() { return "noop"; }
    get(y) { return M(this, null, function* () { return null; }); }
    set(y, O) { return M(this, null, function* () { }); }
    remove(y) { return M(this, null, function* () { }); }
    clear() { return M(this, null, function* () { }); }
    length() { return M(this, null, function* () { return 0; }); }
    keys() { return M(this, null, function* () { return []; }); }
    forEach(y) { return M(this, null, function* () { }); }
    setEncryptionKey(y) { }
};
function qr(x, y) { return jr(x) ? new Ee : new Z(y); }
var ut = (() => { class x {
    static forRoot(O = null) { return { ngModule: x, providers: [{ provide: He, useValue: O }, { provide: Z, useFactory: qr, deps: [Zr, He] }] }; }
} return x.\u0275fac = function (O) { return new (O || x); }, x.\u0275mod = ce.\u0275\u0275defineNgModule({ type: x }), x.\u0275inj = ce.\u0275\u0275defineInjector({}), x; })();
export { ut as IonicStorageModule, Z as Storage, He as StorageConfigToken, qr as provideStorage };
/*! Bundled license information:

localforage/dist/localforage.js:
  (*!
      localForage -- Offline Storage, Improved
      Version 1.10.0
      https://localforage.github.io/localForage
      (c) 2013-2017 Mozilla, Apache License 2.0
  *)
*/
