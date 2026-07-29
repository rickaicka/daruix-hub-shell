import "@nf-internal/chunk-C4FLJMU7";
import * as h from "@angular/core";
import { InjectionToken as a, inject as t, signal as i, computed as n } from "@angular/core";
import { HttpErrorResponse as I } from "@angular/common/http";
import { catchError as _, throwError as E } from "rxjs";
import { Router as g } from "@angular/router";
var S = new a("HUB_ACCESS_TOKEN_KEY", { providedIn: "root", factory: () => "daruix_hub_access_token" }), d = new a("HUB_REFRESH_TOKEN_KEY", { providedIn: "root", factory: () => "daruix_hub_refresh_token" }), m = new a("HUB_USER_KEY", { providedIn: "root", factory: () => "daruix_hub_user" }), v = new a("HUB_SESSION_KEY", { providedIn: "root", factory: () => "daruix_hub_session" }), f = (() => { class s {
    accessTokenKey = t(S);
    refreshTokenKey = t(d);
    userKey = t(m);
    sessionKey = t(v);
    usuarioSignal = i(this.loadUserFromStorage());
    accessTokenSignal = i(localStorage.getItem(this.accessTokenKey));
    refreshTokenSignal = i(localStorage.getItem(this.refreshTokenKey));
    sessaoSignal = i(this.loadSessionFromStorage());
    usuario = this.usuarioSignal.asReadonly();
    accessToken = this.accessTokenSignal.asReadonly();
    refreshToken = this.refreshTokenSignal.asReadonly();
    sessao = this.sessaoSignal.asReadonly();
    isSessionExpired = n(() => { let e = this.sessao(); return e?.expira_em ? new Date(e.expira_em).getTime() <= Date.now() : !1; });
    isLoggedIn = n(() => !!this.accessToken() && !!this.usuario() && !this.isSessionExpired());
    userName = n(() => this.usuario()?.nome ?? this.usuario()?.username ?? "");
    userPermissions = n(() => this.usuario()?.permissoes ?? []);
    userModules = n(() => this.usuario()?.modulos ?? []);
    hasPermission(e) { return this.userPermissions().includes(e); }
    hasModule(e) { return this.userModules().some(r => r.slug === e); }
    setSession(e) { localStorage.setItem(this.userKey, JSON.stringify(e.usuario)), localStorage.setItem(this.accessTokenKey, e.accessToken), localStorage.setItem(this.refreshTokenKey, e.refreshToken), localStorage.setItem(this.sessionKey, JSON.stringify(e.sessao)), this.usuarioSignal.set(e.usuario), this.accessTokenSignal.set(e.accessToken), this.refreshTokenSignal.set(e.refreshToken), this.sessaoSignal.set(e.sessao); }
    setLoginResponse(e) { this.setSession({ usuario: e.usuario, accessToken: e.access_token, refreshToken: e.refresh_token, sessao: e.sessao }); }
    setRefreshResponse(e) { localStorage.setItem(this.accessTokenKey, e.access_token), localStorage.setItem(this.refreshTokenKey, e.refresh_token), localStorage.setItem(this.sessionKey, JSON.stringify(e.sessao)), this.accessTokenSignal.set(e.access_token), this.refreshTokenSignal.set(e.refresh_token), this.sessaoSignal.set(e.sessao); }
    setUsuario(e) { localStorage.setItem(this.userKey, JSON.stringify(e)), this.usuarioSignal.set(e); }
    setAccessToken(e) { localStorage.setItem(this.accessTokenKey, e), this.accessTokenSignal.set(e); }
    clearSession() { localStorage.removeItem(this.userKey), localStorage.removeItem(this.accessTokenKey), localStorage.removeItem(this.refreshTokenKey), localStorage.removeItem(this.sessionKey), this.usuarioSignal.set(null), this.accessTokenSignal.set(null), this.refreshTokenSignal.set(null), this.sessaoSignal.set(null); }
    reloadFromStorage() { this.usuarioSignal.set(this.loadUserFromStorage()), this.accessTokenSignal.set(localStorage.getItem(this.accessTokenKey)), this.refreshTokenSignal.set(localStorage.getItem(this.refreshTokenKey)), this.sessaoSignal.set(this.loadSessionFromStorage()), this.isSessionExpired() && this.clearSession(); }
    loadUserFromStorage() { let e = localStorage.getItem(this.userKey); if (!e)
        return null; try {
        return JSON.parse(e);
    }
    catch {
        return localStorage.removeItem(this.userKey), null;
    } }
    loadSessionFromStorage() { let e = localStorage.getItem(this.sessionKey); if (!e)
        return null; try {
        return JSON.parse(e);
    }
    catch {
        return localStorage.removeItem(this.sessionKey), null;
    } }
    static \u0275fac = function (r) { return new (r || s); };
    static \u0275prov = h.\u0275\u0275defineInjectable({ token: s, factory: s.\u0275fac, providedIn: "root" });
} return s; })(), l = !1, O = (s, o) => { let e = t(S), r = t(d), y = t(m), u = localStorage.getItem(e), K = p(s) && u ? s.clone({ setHeaders: { Authorization: `Bearer ${u}` } }) : s; return o(K).pipe(_(c => (N(c, s.url) && (b({ accessTokenKey: e, refreshTokenKey: r, userKey: y }), U()), E(() => c)))); };
function p(s) { let o = k(s.url); return !T(o) && !R(o); }
function N(s, o) { if (!(s instanceof I) || s.status !== 401)
    return !1; let e = k(o); return !T(e); }
function b(s) { localStorage.removeItem(s.accessTokenKey), localStorage.removeItem(s.refreshTokenKey), localStorage.removeItem(s.userKey), sessionStorage.removeItem(s.accessTokenKey), sessionStorage.removeItem(s.refreshTokenKey), sessionStorage.removeItem(s.userKey); }
function U() { l || (l = !0, window.location.replace("/login")); }
function T(s) { return s.endsWith("/api/auth/login") || s.endsWith("/api/auth/login/"); }
function R(s) { return s.endsWith("/api/auth/refresh") || s.endsWith("/api/auth/refresh/"); }
function k(s) { try {
    return new URL(s, window.location.origin).pathname;
}
catch {
    return s.split("?")[0];
} }
var x = () => { let s = t(f), o = t(g); return s.reloadFromStorage(), s.isLoggedIn() ? !0 : o.createUrlTree(["/login"]); }, A = s => { let o = t(f), e = t(g); o.reloadFromStorage(); let r = s.data?.permission; return !r || o.hasPermission(r) ? !0 : e.createUrlTree(["/unauthorized"]); };
export { S as HUB_ACCESS_TOKEN_KEY, d as HUB_REFRESH_TOKEN_KEY, v as HUB_SESSION_KEY, m as HUB_USER_KEY, f as HubSessionService, x as hubAuthGuard, O as hubAuthInterceptor, A as hubPermissionGuard };
