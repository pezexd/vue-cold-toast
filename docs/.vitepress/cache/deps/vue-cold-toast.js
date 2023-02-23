import {
  Fragment,
  Transition,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  effectScope,
  getCurrentScope,
  h,
  inject,
  normalizeStyle,
  onBeforeUpdate,
  onMounted,
  onScopeDispose,
  onUpdated,
  openBlock,
  popScopeId,
  provide,
  pushScopeId,
  readonly,
  ref,
  renderList,
  toDisplayString,
  toRefs,
  unref,
  useCssVars,
  withCtx
} from "./chunk-LZPJ5JBW.js";

// node_modules/.pnpm/vue-cold-toast@0.0.14/node_modules/vue-cold-toast/dist/vue-cold-toast.es.js
var bt;
var qt = typeof window < "u";
var ve = () => {
};
qt && ((bt = window == null ? void 0 : window.navigator) != null && bt.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function ye(t) {
  return typeof t == "function" ? t() : unref(t);
}
function _e(t) {
  return getCurrentScope() ? (onScopeDispose(t), true) : false;
}
function be(t) {
  let e = false, n;
  const i = effectScope(true);
  return () => (e || (n = i.run(t), e = true), n);
}
function we(t = 0, e = {}) {
  const n = ref(t), {
    max: i = 1 / 0,
    min: s = -1 / 0
  } = e, a = (l = 1) => n.value = Math.min(i, n.value + l), r = (l = 1) => n.value = Math.max(s, n.value - l), o = () => n.value, d = (l) => n.value = Math.max(s, Math.min(i, l));
  return { count: n, inc: a, dec: r, get: o, set: d, reset: (l = t) => (t = l, d(l)) };
}
function Te(t, e, n = {}) {
  const {
    immediate: i = true
  } = n, s = ref(false);
  let a = null;
  function r() {
    a && (clearTimeout(a), a = null);
  }
  function o() {
    s.value = false, r();
  }
  function d(...c) {
    r(), s.value = true, a = setTimeout(() => {
      s.value = false, a = null, t(...c);
    }, ye(e));
  }
  return i && (s.value = true, qt && d()), _e(o), {
    isPending: readonly(s),
    start: d,
    stop: o
  };
}
var xe = Object.defineProperty;
var wt = Object.getOwnPropertySymbols;
var Oe = Object.prototype.hasOwnProperty;
var Ee = Object.prototype.propertyIsEnumerable;
var Tt = (t, e, n) => e in t ? xe(t, e, { enumerable: true, configurable: true, writable: true, value: n }) : t[e] = n;
var Se = (t, e) => {
  for (var n in e || (e = {}))
    Oe.call(e, n) && Tt(t, n, e[n]);
  if (wt)
    for (var n of wt(e))
      Ee.call(e, n) && Tt(t, n, e[n]);
  return t;
};
function Ae(t = 1e3, e = {}) {
  const {
    controls: n = false,
    callback: i
  } = e, s = Te(i ?? ve, t, e), a = computed(() => !s.isPending.value);
  return n ? Se({
    ready: a
  }, s) : a;
}
var F = ((t) => (t[t.addToast = 0] = "addToast", t[t.dismissToast = 1] = "dismissToast", t[t.removeToast = 2] = "removeToast", t))(F || {});
var Ie = 6;
var Nt = be(() => ({
  toasts: ref([])
}));
var Me = (t, e) => {
  switch (e.type) {
    case F.addToast:
      return {
        toasts: [e.toast, ...t].slice(0, Ie)
      };
    case F.dismissToast:
      const { toastId: n } = e;
      return {
        toasts: t.map((i) => i.id === n || n === void 0 ? { ...i, visible: false } : i)
      };
    case F.removeToast:
      return e.toastId === void 0 ? {
        toasts: []
      } : {
        toasts: t.filter((i) => i.id !== e.toastId)
      };
  }
};
var Kt = (t) => {
  const { toasts: e } = Nt(), { toasts: n } = Me(e.value, t);
  e.value = n;
};
var Pe = computed(() => {
  let t;
  if (t === void 0 && typeof window < "u") {
    const e = matchMedia("(prefers-reduced-motion: reduce)");
    t = !e || e.matches;
  }
  return t;
});
function Wt(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function De(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
var Gt = (t, e, n) => Math.min(Math.max(n, t), e);
var E = {
  duration: 0.3,
  delay: 0,
  endDelay: 0,
  repeat: 0,
  easing: "ease"
};
var Z = (t) => typeof t == "number";
var z = (t) => Array.isArray(t) && !Z(t[0]);
var je = (t, e, n) => {
  const i = e - t;
  return ((n - t) % i + i) % i + t;
};
function $e(t, e) {
  return z(t) ? t[je(0, t.length, e)] : t;
}
var Ht = (t, e, n) => -n * t + n * e + t;
var Xt = () => {
};
var $ = (t) => t;
var vt = (t, e, n) => e - t === 0 ? 1 : (n - t) / (e - t);
function Zt(t, e) {
  const n = t[t.length - 1];
  for (let i = 1; i <= e; i++) {
    const s = vt(0, e, i);
    t.push(Ht(n, 1, s));
  }
}
function ke(t) {
  const e = [0];
  return Zt(e, t - 1), e;
}
function Ce(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ke(t.length), n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : $;
  const i = t.length, s = i - e.length;
  return s > 0 && Zt(e, s), (a) => {
    let r = 0;
    for (; r < i - 2 && !(a < e[r + 1]); r++)
      ;
    let o = Gt(0, 1, vt(e[r], e[r + 1], a));
    return o = $e(n, r)(o), Ht(t[r], t[r + 1], o);
  };
}
var Qt = (t) => Array.isArray(t) && Z(t[0]);
var ft = (t) => typeof t == "object" && Boolean(t.createAnimation);
var Q = (t) => typeof t == "function";
var Le = (t) => typeof t == "string";
var ot = {
  ms: (t) => t * 1e3,
  s: (t) => t / 1e3
};
var Yt = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t;
var Ve = 1e-7;
var Be = 12;
function Re(t, e, n, i, s) {
  let a, r, o = 0;
  do
    r = e + (n - e) / 2, a = Yt(r, i, s) - t, a > 0 ? n = r : e = r;
  while (Math.abs(a) > Ve && ++o < Be);
  return r;
}
function H(t, e, n, i) {
  if (t === e && n === i)
    return $;
  const s = (a) => Re(a, 0, 1, t, n);
  return (a) => a === 0 || a === 1 ? a : Yt(s(a), e, i);
}
var Ue = function(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "end";
  return (n) => {
    n = e === "end" ? Math.min(n, 0.999) : Math.max(n, 1e-3);
    const i = n * t, s = e === "end" ? Math.floor(i) : Math.ceil(i);
    return Gt(0, 1, s / t);
  };
};
var xt = {
  ease: H(0.25, 0.1, 0.25, 1),
  "ease-in": H(0.42, 0, 1, 1),
  "ease-in-out": H(0.42, 0, 0.58, 1),
  "ease-out": H(0, 0, 0.58, 1)
};
var Fe = /\((.*?)\)/;
function Ot(t) {
  if (Q(t))
    return t;
  if (Qt(t))
    return H(...t);
  if (xt[t])
    return xt[t];
  if (t.startsWith("steps")) {
    const e = Fe.exec(t);
    if (e) {
      const n = e[1].split(",");
      return Ue(parseFloat(n[0]), n[1].trim());
    }
  }
  return $;
}
var ze = class {
  constructor(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [0, 1], {
      easing: i,
      duration: s = E.duration,
      delay: a = E.delay,
      endDelay: r = E.endDelay,
      repeat: o = E.repeat,
      offset: d,
      direction: c = "normal"
    } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (this.startTime = null, this.rate = 1, this.t = 0, this.cancelTimestamp = null, this.easing = $, this.duration = 0, this.totalDuration = 0, this.repeat = 0, this.playState = "idle", this.finished = new Promise((_, m) => {
      this.resolve = _, this.reject = m;
    }), i = i || E.easing, ft(i)) {
      const _ = i.createAnimation(n);
      i = _.easing, n = _.keyframes || n, s = _.duration || s;
    }
    this.repeat = o, this.easing = z(i) ? $ : Ot(i), this.updateDuration(s);
    const l = Ce(n, d, z(i) ? i.map(Ot) : $);
    this.tick = (_) => {
      var m;
      a = a;
      let b = 0;
      this.pauseTime !== void 0 ? b = this.pauseTime : b = (_ - this.startTime) * this.rate, this.t = b, b /= 1e3, b = Math.max(b - a, 0), this.playState === "finished" && this.pauseTime === void 0 && (b = this.totalDuration);
      const T = b / this.duration;
      let f = Math.floor(T), g = T % 1;
      !g && T >= 1 && (g = 1), g === 1 && f--;
      const x = f % 2;
      (c === "reverse" || c === "alternate" && x || c === "alternate-reverse" && !x) && (g = 1 - g);
      const M = b >= this.totalDuration ? 1 : Math.min(g, 1), P = l(this.easing(M));
      e(P), this.pauseTime === void 0 && (this.playState === "finished" || b >= this.totalDuration + r) ? (this.playState = "finished", (m = this.resolve) === null || m === void 0 || m.call(this, P)) : this.playState !== "idle" && (this.frameRequestId = requestAnimationFrame(this.tick));
    }, this.play();
  }
  play() {
    const e = performance.now();
    this.playState = "running", this.pauseTime !== void 0 ? this.startTime = e - this.pauseTime : this.startTime || (this.startTime = e), this.cancelTimestamp = this.startTime, this.pauseTime = void 0, this.frameRequestId = requestAnimationFrame(this.tick);
  }
  pause() {
    this.playState = "paused", this.pauseTime = this.t;
  }
  finish() {
    this.playState = "finished", this.tick(0);
  }
  stop() {
    var e;
    this.playState = "idle", this.frameRequestId !== void 0 && cancelAnimationFrame(this.frameRequestId), (e = this.reject) === null || e === void 0 || e.call(this, false);
  }
  cancel() {
    this.stop(), this.tick(this.cancelTimestamp);
  }
  reverse() {
    this.rate *= -1;
  }
  commitStyles() {
  }
  updateDuration(e) {
    this.duration = e, this.totalDuration = e * (this.repeat + 1);
  }
  get currentTime() {
    return this.t;
  }
  set currentTime(e) {
    this.pauseTime !== void 0 || this.rate === 0 ? this.pauseTime = e : this.startTime = performance.now() - e / this.rate;
  }
  get playbackRate() {
    return this.rate;
  }
  set playbackRate(e) {
    this.rate = e;
  }
};
var qe = class {
  setAnimation(e) {
    this.animation = e, e == null || e.finished.then(() => this.clearAnimation()).catch(() => {
    });
  }
  clearAnimation() {
    this.animation = this.generator = void 0;
  }
};
var ct = /* @__PURE__ */ new WeakMap();
function Jt(t) {
  return ct.has(t) || ct.set(t, {
    transforms: [],
    values: /* @__PURE__ */ new Map()
  }), ct.get(t);
}
function Ne(t, e) {
  return t.has(e) || t.set(e, new qe()), t.get(e);
}
var Ke = ["", "X", "Y", "Z"];
var We = ["translate", "scale", "rotate", "skew"];
var N = {
  x: "translateX",
  y: "translateY",
  z: "translateZ"
};
var Et = {
  syntax: "<angle>",
  initialValue: "0deg",
  toDefaultUnit: (t) => t + "deg"
};
var Ge = {
  translate: {
    syntax: "<length-percentage>",
    initialValue: "0px",
    toDefaultUnit: (t) => t + "px"
  },
  rotate: Et,
  scale: {
    syntax: "<number>",
    initialValue: 1,
    toDefaultUnit: $
  },
  skew: Et
};
var K = /* @__PURE__ */ new Map();
var rt = (t) => `--motion-${t}`;
var et = ["x", "y", "z"];
We.forEach((t) => {
  Ke.forEach((e) => {
    et.push(t + e), K.set(rt(t + e), Ge[t]);
  });
});
var He = (t, e) => et.indexOf(t) - et.indexOf(e);
var Xe = new Set(et);
var yt = (t) => Xe.has(t);
var Ze = (t, e) => {
  N[e] && (e = N[e]);
  const {
    transforms: n
  } = Jt(t);
  Wt(n, e), t.style.transform = te(n);
};
var te = (t) => t.sort(He).reduce(Qe, "").trim();
var Qe = (t, e) => `${t} ${e}(var(${rt(e)}))`;
var pt = (t) => t.startsWith("--");
var St = /* @__PURE__ */ new Set();
function Ye(t) {
  if (!St.has(t)) {
    St.add(t);
    try {
      const {
        syntax: e,
        initialValue: n
      } = K.has(t) ? K.get(t) : {};
      CSS.registerProperty({
        name: t,
        inherits: false,
        syntax: e,
        initialValue: n
      });
    } catch {
    }
  }
}
var lt = (t, e) => document.createElement("div").animate(t, e);
var At = {
  cssRegisterProperty: () => typeof CSS < "u" && Object.hasOwnProperty.call(CSS, "registerProperty"),
  waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
  partialKeyframes: () => {
    try {
      lt({
        opacity: [1]
      });
    } catch {
      return false;
    }
    return true;
  },
  finished: () => Boolean(lt({
    opacity: [0, 1]
  }, {
    duration: 1e-3
  }).finished),
  linearEasing: () => {
    try {
      lt({
        opacity: 0
      }, {
        easing: "linear(0, 1)"
      });
    } catch {
      return false;
    }
    return true;
  }
};
var ut = {};
var R = {};
for (const t in At)
  R[t] = () => (ut[t] === void 0 && (ut[t] = At[t]()), ut[t]);
var Je = 0.015;
var tn = (t, e) => {
  let n = "";
  const i = Math.round(e / Je);
  for (let s = 0; s < i; s++)
    n += t(vt(0, i - 1, s)) + ", ";
  return n.substring(0, n.length - 2);
};
var It = (t, e) => Q(t) ? R.linearEasing() ? `linear(${tn(t, e)})` : E.easing : Qt(t) ? en(t) : t;
var en = (t) => {
  let [e, n, i, s] = t;
  return `cubic-bezier(${e}, ${n}, ${i}, ${s})`;
};
function nn(t, e) {
  for (let n = 0; n < t.length; n++)
    t[n] === null && (t[n] = n ? t[n - 1] : e());
  return t;
}
var sn = (t) => Array.isArray(t) ? t : [t];
function mt(t) {
  return N[t] && (t = N[t]), yt(t) ? rt(t) : t;
}
var U = {
  get: (t, e) => {
    e = mt(e);
    let n = pt(e) ? t.style.getPropertyValue(e) : getComputedStyle(t)[e];
    if (!n && n !== 0) {
      const i = K.get(e);
      i && (n = i.initialValue);
    }
    return n;
  },
  set: (t, e, n) => {
    e = mt(e), pt(e) ? t.style.setProperty(e, n) : t.style[e] = n;
  }
};
function an(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  if (!(!t || t.playState === "finished"))
    try {
      t.stop ? t.stop() : (e && t.commitStyles(), t.cancel());
    } catch {
    }
}
function rn(t, e) {
  var n;
  let i = (e == null ? void 0 : e.toDefaultUnit) || $;
  const s = t[t.length - 1];
  if (Le(s)) {
    const a = ((n = s.match(/(-?[\d.]+)([a-z%]*)/)) === null || n === void 0 ? void 0 : n[2]) || "";
    a && (i = (r) => r + a);
  }
  return i;
}
function on() {
  return window.__MOTION_DEV_TOOLS_RECORD;
}
function cn(t, e, n) {
  let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, s = arguments.length > 4 ? arguments[4] : void 0;
  const a = on(), r = i.record !== false && a;
  let o, {
    duration: d = E.duration,
    delay: c = E.delay,
    endDelay: l = E.endDelay,
    repeat: _ = E.repeat,
    easing: m = E.easing,
    persist: b = false,
    direction: T,
    offset: f,
    allowWebkitAcceleration: g = false
  } = i;
  const x = Jt(t), M = yt(e);
  let P = R.waapi();
  M && Ze(t, e);
  const w = mt(e), L = Ne(x.values, w), O = K.get(w);
  return an(L.animation, !(ft(m) && L.generator) && i.record !== false), () => {
    const h2 = () => {
      var v, W;
      return (W = (v = U.get(t, w)) !== null && v !== void 0 ? v : O == null ? void 0 : O.initialValue) !== null && W !== void 0 ? W : 0;
    };
    let p = nn(sn(n), h2);
    const D = rn(p, O);
    if (ft(m)) {
      const v = m.createAnimation(p, e !== "opacity", h2, w, L);
      m = v.easing, p = v.keyframes || p, d = v.duration || d;
    }
    if (pt(w) && (R.cssRegisterProperty() ? Ye(w) : P = false), M && !R.linearEasing() && (Q(m) || z(m) && m.some(Q)) && (P = false), P) {
      O && (p = p.map((V) => Z(V) ? O.toDefaultUnit(V) : V)), p.length === 1 && (!R.partialKeyframes() || r) && p.unshift(h2());
      const v = {
        delay: ot.ms(c),
        duration: ot.ms(d),
        endDelay: ot.ms(l),
        easing: z(m) ? void 0 : It(m, d),
        direction: T,
        iterations: _ + 1,
        fill: "both"
      };
      o = t.animate({
        [w]: p,
        offset: f,
        easing: z(m) ? m.map((V) => It(V, d)) : void 0
      }, v), o.finished || (o.finished = new Promise((V, ie) => {
        o.onfinish = V, o.oncancel = ie;
      }));
      const W = p[p.length - 1];
      o.finished.then(() => {
        b || (U.set(t, w, W), o.cancel());
      }).catch(Xt), g || (o.playbackRate = 1.000001);
    } else if (s && M)
      p = p.map((v) => typeof v == "string" ? parseFloat(v) : v), p.length === 1 && p.unshift(parseFloat(h2())), o = new s((v) => {
        U.set(t, w, D ? D(v) : v);
      }, p, Object.assign(Object.assign({}, i), {
        duration: d,
        easing: m
      }));
    else {
      const v = p[p.length - 1];
      U.set(t, w, O && Z(v) ? O.toDefaultUnit(v) : v);
    }
    return r && a(t, e, p, {
      duration: d,
      delay: c,
      easing: m,
      repeat: _,
      offset: f
    }, "motion-one"), L.setAnimation(o), o;
  };
}
var ln = (t, e) => (
  /**
   * TODO: Make test for this
   * Always return a new object otherwise delay is overwritten by results of stagger
   * and this results in no stagger
   */
  t[e] ? Object.assign(Object.assign({}, t), t[e]) : Object.assign({}, t)
);
function un(t, e) {
  var n;
  return typeof t == "string" ? e ? ((n = e[t]) !== null && n !== void 0 || (e[t] = document.querySelectorAll(t)), t = e[t]) : t = document.querySelectorAll(t) : t instanceof Element && (t = [t]), Array.from(t || []);
}
function ee(t, e) {
  var n = {};
  for (var i in t)
    Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, i = Object.getOwnPropertySymbols(t); s < i.length; s++)
      e.indexOf(i[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[s]) && (n[i[s]] = t[i[s]]);
  return n;
}
var dn = {
  any: 0,
  all: 1
};
function fn(t, e) {
  let {
    root: n,
    margin: i,
    amount: s = "any"
  } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof IntersectionObserver > "u")
    return () => {
    };
  const a = un(t), r = /* @__PURE__ */ new WeakMap(), o = (c) => {
    c.forEach((l) => {
      const _ = r.get(l.target);
      if (l.isIntersecting !== Boolean(_))
        if (l.isIntersecting) {
          const m = e(l);
          Q(m) ? r.set(l.target, m) : d.unobserve(l.target);
        } else
          _ && (_(l), r.delete(l.target));
    });
  }, d = new IntersectionObserver(o, {
    root: n,
    rootMargin: i,
    threshold: typeof s == "number" ? s : dn[s]
  });
  return a.forEach((c) => d.observe(c)), () => d.disconnect();
}
function pn(t, e) {
  return typeof t != typeof e ? true : Array.isArray(t) && Array.isArray(e) ? !mn(t, e) : t !== e;
}
function mn(t, e) {
  const n = e.length;
  if (n !== t.length)
    return false;
  for (let i = 0; i < n; i++)
    if (e[i] !== t[i])
      return false;
  return true;
}
function hn(t) {
  return typeof t == "object";
}
function Mt(t, e) {
  if (hn(t))
    return t;
  if (t && e)
    return e[t];
}
var k;
function gn() {
  if (!k)
    return;
  const t = k.sort(yn).map(_n);
  t.forEach(Pt), t.forEach(Pt), k = void 0;
}
function dt(t) {
  k ? Wt(k, t) : (k = [t], requestAnimationFrame(gn));
}
function vn(t) {
  k && De(k, t);
}
var yn = (t, e) => t.getDepth() - e.getDepth();
var _n = (t) => t.animateUpdates();
var Pt = (t) => t.next();
var Dt = (t, e) => new CustomEvent(t, {
  detail: {
    target: e
  }
});
function ht(t, e, n) {
  t.dispatchEvent(new CustomEvent(e, {
    detail: {
      originalEvent: n
    }
  }));
}
function jt(t, e, n) {
  t.dispatchEvent(new CustomEvent(e, {
    detail: {
      originalEntry: n
    }
  }));
}
var bn = {
  isActive: (t) => Boolean(t.inView),
  subscribe: (t, e, n) => {
    let {
      enable: i,
      disable: s
    } = e, {
      inViewOptions: a = {}
    } = n;
    const {
      once: r
    } = a, o = ee(a, ["once"]);
    return fn(t, (d) => {
      if (i(), jt(t, "viewenter", d), !r)
        return (c) => {
          s(), jt(t, "viewleave", c);
        };
    }, o);
  }
};
var $t = (t, e, n) => (i) => {
  i.pointerType && i.pointerType !== "mouse" || (n(), ht(t, e, i));
};
var wn = {
  isActive: (t) => Boolean(t.hover),
  subscribe: (t, e) => {
    let {
      enable: n,
      disable: i
    } = e;
    const s = $t(t, "hoverstart", n), a = $t(t, "hoverend", i);
    return t.addEventListener("pointerenter", s), t.addEventListener("pointerleave", a), () => {
      t.removeEventListener("pointerenter", s), t.removeEventListener("pointerleave", a);
    };
  }
};
var Tn = {
  isActive: (t) => Boolean(t.press),
  subscribe: (t, e) => {
    let {
      enable: n,
      disable: i
    } = e;
    const s = (r) => {
      i(), ht(t, "pressend", r), window.removeEventListener("pointerup", s);
    }, a = (r) => {
      n(), ht(t, "pressstart", r), window.addEventListener("pointerup", s);
    };
    return t.addEventListener("pointerdown", a), () => {
      t.removeEventListener("pointerdown", a), window.removeEventListener("pointerup", s);
    };
  }
};
var tt = {
  inView: bn,
  hover: wn,
  press: Tn
};
var kt = ["initial", "animate", ...Object.keys(tt), "exit"];
var nt = /* @__PURE__ */ new WeakMap();
function xn() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 ? arguments[1] : void 0, n, i = e ? e.getDepth() + 1 : 0;
  const s = {
    initial: true,
    animate: true
  }, a = {}, r = {};
  for (const f of kt)
    r[f] = typeof t[f] == "string" ? t[f] : e == null ? void 0 : e.getContext()[f];
  const o = t.initial === false ? "animate" : "initial";
  let d = Mt(t[o] || r[o], t.variants) || {}, c = ee(d, ["transition"]);
  const l = Object.assign({}, c);
  function* _() {
    var f, g;
    const x = c;
    c = {};
    const M = {};
    for (const h2 of kt) {
      if (!s[h2])
        continue;
      const p = Mt(t[h2]);
      if (p)
        for (const D in p)
          D !== "transition" && (c[D] = p[D], M[D] = ln((g = (f = p.transition) !== null && f !== void 0 ? f : t.transition) !== null && g !== void 0 ? g : {}, D));
    }
    const P = /* @__PURE__ */ new Set([...Object.keys(c), ...Object.keys(x)]), w = [];
    P.forEach((h2) => {
      var p;
      c[h2] === void 0 && (c[h2] = l[h2]), pn(x[h2], c[h2]) && ((p = l[h2]) !== null && p !== void 0 || (l[h2] = U.get(n, h2)), w.push(cn(n, h2, c[h2], M[h2], ze)));
    }), yield;
    const L = w.map((h2) => h2()).filter(Boolean);
    if (!L.length)
      return;
    const O = c;
    n.dispatchEvent(Dt("motionstart", O)), Promise.all(L.map((h2) => h2.finished)).then(() => {
      n.dispatchEvent(Dt("motioncomplete", O));
    }).catch(Xt);
  }
  const m = (f, g) => () => {
    s[f] = g, dt(T);
  }, b = () => {
    for (const f in tt) {
      const g = tt[f].isActive(t), x = a[f];
      g && !x ? a[f] = tt[f].subscribe(n, {
        enable: m(f, true),
        disable: m(f, false)
      }, t) : !g && x && (x(), delete a[f]);
    }
  }, T = {
    update: (f) => {
      n && (t = f, b(), dt(T));
    },
    setActive: (f, g) => {
      n && (s[f] = g, dt(T));
    },
    animateUpdates: _,
    getDepth: () => i,
    getTarget: () => c,
    getOptions: () => t,
    getContext: () => r,
    mount: (f) => (n = f, nt.set(n, T), b(), () => {
      nt.delete(n), vn(T);
      for (const g in a)
        a[g]();
    }),
    isMounted: () => Boolean(n)
  };
  return T;
}
function Ct(t) {
  const e = {}, n = [];
  for (let i in t) {
    const s = t[i];
    yt(i) && (N[i] && (i = N[i]), n.push(i), i = rt(i));
    let a = Array.isArray(s) ? s[0] : s;
    const r = K.get(i);
    r && (a = Z(s) ? r.toDefaultUnit(s) : s), e[i] = a;
  }
  return n.length && (e.transform = te(n)), e;
}
var Lt = "motion-state";
var ne = "motion-presence";
var j = {
  type: Object
};
var C = defineComponent({
  name: "Motion",
  inheritAttrs: true,
  props: {
    tag: {
      type: String,
      default: "div"
    },
    initial: {
      type: [Object, Boolean]
    },
    animate: j,
    inView: j,
    hover: j,
    press: j,
    exit: j,
    inViewOptions: j,
    transition: j,
    style: j
  },
  setup(t) {
    const e = ref(null), n = inject(Lt, void 0), i = inject(ne, void 0), s = xn(Object.assign(Object.assign({}, t), {
      initial: (i == null ? void 0 : i.initial) === false ? i.initial : t.initial === true ? void 0 : t.initial
    }), n);
    provide(Lt, s), onMounted(() => {
      const r = s.mount(e.value);
      return s.update(Object.assign(Object.assign({}, t), {
        initial: t.initial === true ? void 0 : t.initial
      })), r;
    });
    let a = false;
    return onUpdated(() => {
      if (!a && e.value) {
        a = true;
        const r = Ct(s.getTarget());
        for (const o in r)
          U.set(e.value, o, r[o]);
      }
      s.update(Object.assign(Object.assign({}, t), {
        initial: t.initial === true ? void 0 : t.initial
      }));
    }), {
      state: s,
      root: e,
      initialStyles: Ct(s.getTarget())
    };
  },
  render() {
    var t, e;
    return h(this.tag, {
      ref: "root",
      style: this.state.isMounted() ? this.style : Object.assign(Object.assign({}, this.style), this.initialStyles)
    }, (e = (t = this.$slots).default) === null || e === void 0 ? void 0 : e.call(t));
  }
});
var gt = /* @__PURE__ */ new WeakMap();
function Vt(t) {
  const e = gt.get(t);
  e && t.removeEventListener("motioncomplete", e), gt.delete(t);
}
var On = defineComponent({
  name: "Presence",
  props: {
    name: {
      type: String
    },
    initial: {
      type: Boolean,
      default: true
    },
    exitBeforeEnter: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    enter(t) {
      const e = nt.get(t);
      e && (Vt(t), e.setActive("exit", false));
    },
    exit(t, e) {
      const n = nt.get(t);
      if (!n)
        return e();
      n.setActive("exit", true), Vt(t), gt.set(t, e), t.addEventListener("motioncomplete", e);
    }
  },
  setup(t) {
    let {
      initial: e
    } = t;
    const n = {
      initial: e
    };
    provide(ne, n), onBeforeUpdate(() => {
      n.initial = void 0;
    });
  },
  render() {
    return h(Transition, {
      name: this.name,
      onEnter: this.enter,
      onLeave: this.exit,
      css: false,
      mode: this.exitBeforeEnter ? "out-in" : void 0
    }, this.$slots.default);
  }
});
var En = (() => {
  const { inc: t } = we(0);
  return () => t().toString();
})();
var Sn = (t, e = "blank", n) => ({
  id: (n == null ? void 0 : n.id) || En(),
  type: e,
  message: t,
  visible: true,
  duration: 3e3,
  ...n
});
var G = (t) => (e, n) => {
  const i = Sn(e, t, n);
  return Kt({ type: F.addToast, toast: i }), i.id;
};
var An = (t) => {
  Kt({ type: F.dismissToast, toastId: t });
};
function In() {
  const t = (e, n) => G("blank")(e, n);
  return t.success = G("success"), t.error = G("error"), t.loading = G("loading"), t.custom = G("custom"), t.dismiss = An, t.promise = (e, n) => (t.loading(n.loading), e.then((i) => (t.success(n.success), i)).catch((i) => {
    t.error(n.error);
  }), e), {
    toast: t
  };
}
var Mn = { class: "circle" };
var Pn = defineComponent({
  __name: "Checkmark",
  setup(t) {
    return (e, n) => (openBlock(), createBlock(unref(C), {
      initial: { opacity: 0, transform: "scale(0) rotate(0deg)" },
      animate: { opacity: 1, transform: ["scale(0) rotate(0deg)", "scale(1) "] },
      transition: { duration: 0.3, easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)", forwards: true, animationDelay: "100ms" }
    }, {
      default: withCtx(() => [
        createBaseVNode("div", Mn, [
          createVNode(unref(C), {
            initial: { opacity: 0, width: "0px", heigth: "0px" },
            animate: { opacity: 1, width: ["0px", "6px"], heigth: ["0px", "0px", "10px"] },
            transition: { duration: 0.25, easing: "ease-in", forwards: true, animationDelay: "200ms" },
            class: "checkmark"
          }, null, 8, ["transition"])
        ])
      ]),
      _: 1
    }, 8, ["initial", "animate", "transition"]));
  }
});
var J = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [i, s] of e)
    n[i] = s;
  return n;
};
var Dn = J(Pn, [["__scopeId", "data-v-2c7fa5af"]]);
var jn = { class: "error" };
var $n = defineComponent({
  __name: "Error",
  setup(t) {
    return (e, n) => (openBlock(), createBlock(unref(C), {
      initial: { opacity: 0, transform: "scale(0)" },
      animate: { opacity: 1, transform: ["scale(0)", "scale(1)"] },
      transition: { duration: 0.3, easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)", forwards: true }
    }, {
      default: withCtx(() => [
        createBaseVNode("div", jn, [
          createVNode(unref(C), {
            initial: { opacity: 0, transform: "scale(0) rotate(0)" },
            animate: { opacity: 1, transform: ["scale(0) rotate(0)", "scale(1) rotate(45deg)"] },
            transition: { duration: 0.25, easing: "ease-in", forwards: true },
            class: "first-line"
          }, null, 8, ["initial", "animate", "transition"]),
          createVNode(unref(C), {
            initial: { opacity: 0, transform: "scale(0) rotate(0)" },
            animate: { opacity: 1, transform: ["scale(0) rotate(0)", "scale(1) rotate(-45deg)"] },
            transition: { duration: 0.35, easing: "ease-out", forwards: true },
            class: "second-line"
          }, null, 8, ["initial", "animate", "transition"])
        ])
      ]),
      _: 1
    }, 8, ["initial", "animate", "transition"]));
  }
});
var kn = J($n, [["__scopeId", "data-v-87f8a887"]]);
var Cn = (t) => (pushScopeId("data-v-bfe1ca32"), t = t(), popScopeId(), t);
var Ln = Cn(() => createBaseVNode("div", { class: "loader" }, null, -1));
var Vn = defineComponent({
  __name: "Loader",
  setup(t) {
    return (e, n) => (openBlock(), createBlock(unref(C), {
      initial: { rotate: 0 },
      animate: { rotate: 360 },
      transition: { duration: 1, easing: "linear", repeat: 1 / 0 }
    }, {
      default: withCtx(() => [
        Ln
      ]),
      _: 1
    }));
  }
});
var Bn = J(Vn, [["__scopeId", "data-v-bfe1ca32"]]);
var Rn = defineComponent({
  __name: "ToastIcon",
  props: {
    toast: null
  },
  setup(t) {
    const e = t, { type: n, icon: i } = toRefs(e.toast);
    return (s, a) => (openBlock(), createElementBlock("div", null, [
      unref(i) !== void 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        typeof unref(i) == "string" ? (openBlock(), createBlock(unref(C), {
          key: 0,
          initial: { opacity: 0.4, transform: "scale(0.6)" },
          animate: { opacity: 1, transform: ["scale(0.6)", "scale(1)"] },
          transition: { duration: 0.3, easing: "cubic-bezier(0.175, 0.885, 0.32, 1.275)", forwards: true, animationDelay: 0.12 }
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(i)), 1)
          ]),
          _: 1
        }, 8, ["initial", "animate", "transition"])) : createCommentVNode("", true)
      ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        unref(n) === "blank" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          unref(n) === "loading" ? (openBlock(), createBlock(Bn, { key: 0 })) : unref(n) === "error" ? (openBlock(), createBlock(kn, { key: 1 })) : (openBlock(), createBlock(Dn, { key: 2 }))
        ], 64))
      ], 64))
    ]));
  }
});
var Un = ["innerHTML"];
var Fn = defineComponent({
  __name: "ToastMessage",
  props: {
    toast: null
  },
  setup(t) {
    const e = t, { message: n, parseHTML: i } = toRefs(e.toast);
    return (s, a) => unref(i) ? (openBlock(), createElementBlock("span", {
      key: 0,
      innerHTML: unref(n)
    }, null, 8, Un)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
      createTextVNode(toDisplayString(unref(n)), 1)
    ], 64));
  }
});
var zn = ["id"];
var qn = defineComponent({
  __name: "ToastBar",
  props: {
    toast: null,
    position: null
  },
  setup(t) {
    const e = t, { toast: n } = In(), { toast: i, position: s } = toRefs(e), a = computed(() => {
      const d = Pe, l = s.value.includes("top") ? "-200%" : "200%";
      return d.value ? {
        initial: { opacity: 0.5 },
        enter: { opacity: 1 },
        exit: { opacity: 0 }
      } : {
        initial: { opacity: 0.5, transform: `translate3d(0, ${l}, 0) scale(0.6)` },
        enter: { opacity: 1, transform: [`translate3d(0, ${l}, 0) scale(0.6)`, "translate3d(0, 0, 0) scale(1)"] },
        exit: { opacity: 0, transform: `translate3d(0, ${l}, 0) scale(0.6)`, transition: { duration: 0.25, easing: "cubic-bezier(.06, .71, .55, 1)", forwards: true } }
      };
    }), { stop: r, start: o } = Ae(i.value.duration, {
      callback: () => {
        n.dismiss(i.value.id);
      },
      immediate: true,
      controls: true
    });
    return (d, c) => (openBlock(), createBlock(unref(On), null, {
      default: withCtx(() => [
        unref(i).visible ? (openBlock(), createBlock(unref(C), {
          key: unref(i).id,
          initial: unref(a).initial,
          animate: unref(a).enter,
          exit: unref(a).exit
        }, {
          default: withCtx(() => [
            createBaseVNode("div", {
              class: "toast-bar",
              id: unref(i).id,
              onMouseenter: c[0] || (c[0] = //@ts-ignore
              (...l) => unref(r) && unref(r)(...l)),
              onMouseleave: c[1] || (c[1] = //@ts-ignore
              (...l) => unref(o) && unref(o)(...l))
            }, [
              createVNode(Rn, { toast: unref(i) }, null, 8, ["toast"]),
              createVNode(Fn, { toast: unref(i) }, null, 8, ["toast"])
            ], 40, zn)
          ]),
          _: 1
        }, 8, ["initial", "animate", "exit"])) : createCommentVNode("", true)
      ]),
      _: 1
    }));
  }
});
var Nn = J(qn, [["__scopeId", "data-v-7f0883bc"]]);
var Kn = { class: "container" };
var Wn = defineComponent({
  __name: "Toaster",
  props: {
    position: { default: "top-center" },
    jelly: { default: "8px" }
  },
  setup(t) {
    const e = t;
    useCssVars((o) => ({
      "2effefce": s,
      "548b52c3": t.jelly
    }));
    const { position: n } = toRefs(e), { toasts: i } = Nt(), s = "16px", a = computed(() => {
      const o = n.value.includes("top"), d = o ? { top: 0 } : { bottom: 0 }, c = n.value.includes("center") ? { alignItems: "center" } : n.value.includes("right") ? { alignItems: "flex-end" } : { alignItems: "flex-start" };
      return {
        flexDirection: o ? "column" : "column-reverse",
        ...c,
        ...d
      };
    }), r = (o) => o.position || n.value;
    return (o, d) => (openBlock(), createElementBlock("div", Kn, [
      createBaseVNode("div", {
        class: "wrapper",
        style: normalizeStyle({ ...unref(a) })
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(i), (c) => (openBlock(), createBlock(Nn, {
          key: c.id,
          toast: c,
          position: r(c)
        }, null, 8, ["toast", "position"]))), 128))
      ], 4)
    ]));
  }
});
var Hn = J(Wn, [["__scopeId", "data-v-b78f4ab7"]]);
export {
  Hn as default,
  In as useToaster
};
//# sourceMappingURL=vue-cold-toast.js.map
