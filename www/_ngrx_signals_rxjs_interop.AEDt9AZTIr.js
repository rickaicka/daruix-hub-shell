import "@nf-internal/chunk-C4FLJMU7";
import { inject as d, Injector as f, DestroyRef as u, effect as h, untracked as x } from "@angular/core";
import { Subject as y, noop as v, isObservable as I } from "rxjs";
function C(t, b) { let i = b?.injector ?? d(f), r = new y, e = t(r).subscribe(); i.get(u).onDestroy(() => e.unsubscribe()); let a = (n, l) => { if (m(n))
    return r.next(n), { destroy: v }; let g = p(), c = l?.injector ?? g ?? i; if (typeof n == "function") {
    let o = h(() => { let j = n(); x(() => r.next(j)); }, { injector: c });
    return e.add({ unsubscribe: () => o.destroy() }), o;
} let s = n.subscribe(o => r.next(o)); return e.add(s), c !== i && c.get(u).onDestroy(() => s.unsubscribe()), { destroy: () => s.unsubscribe() }; }; return a.destroy = e.unsubscribe.bind(e), a; }
function m(t) { return typeof t != "function" && !I(t); }
function p() { try {
    return d(f);
}
catch {
    return;
} }
export { C as rxMethod };
