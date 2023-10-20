function Si(t, e) {
  const n = /* @__PURE__ */ Object.create(null), r = t.split(",");
  for (let i = 0; i < r.length; i++)
    n[r[i]] = !0;
  return e ? (i) => !!n[i.toLowerCase()] : (i) => !!n[i];
}
const xe = Object.freeze({}), Zi = Object.freeze([]), et = () => {
}, Vu = () => !1, Ff = /^on[^a-z]/, wo = (t) => Ff.test(t), jo = (t) => t.startsWith("onUpdate:"), ke = Object.assign, lc = (t, e) => {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}, Af = Object.prototype.hasOwnProperty, ue = (t, e) => Af.call(t, e), Q = Array.isArray, Gi = (t) => ra(t) === "[object Map]", Uf = (t) => ra(t) === "[object Set]", te = (t) => typeof t == "function", Ue = (t) => typeof t == "string", fc = (t) => typeof t == "symbol", Ie = (t) => t !== null && typeof t == "object", dc = (t) => Ie(t) && te(t.then) && te(t.catch), Lf = Object.prototype.toString, ra = (t) => Lf.call(t), mc = (t) => ra(t).slice(8, -1), Cf = (t) => ra(t) === "[object Object]", hc = (t) => Ue(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, Lo = /* @__PURE__ */ Si(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Df = /* @__PURE__ */ Si(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), ia = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (n) => e[n] || (e[n] = t(n));
}, _f = /-(\w)/g, ts = ia((t) => t.replace(_f, (e, n) => n ? n.toUpperCase() : "")), qf = /\B([A-Z])/g, Bi = ia(
  (t) => t.replace(qf, "-$1").toLowerCase()
), sa = ia(
  (t) => t.charAt(0).toUpperCase() + t.slice(1)
), Ai = ia(
  (t) => t ? `on${sa(t)}` : ""
), Es = (t, e) => !Object.is(t, e), ss = (t, e) => {
  for (let n = 0; n < t.length; n++)
    t[n](e);
}, Ro = (t, e, n) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Kf = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
};
let Pc;
const zo = () => Pc || (Pc = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof {} < "u" ? {} : {});
function vi(t) {
  if (Q(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const r = t[n], i = Ue(r) ? Vf(r) : vi(r);
      if (i)
        for (const s in i)
          e[s] = i[s];
    }
    return e;
  } else {
    if (Ue(t))
      return t;
    if (Ie(t))
      return t;
  }
}
const Pf = /;(?![^(]*\))/g, $f = /:([^]+)/, Mf = /\/\*[^]*?\*\//g;
function Vf(t) {
  const e = {};
  return t.replace(Mf, "").split(Pf).forEach((n) => {
    if (n) {
      const r = n.split($f);
      r.length > 1 && (e[r[0].trim()] = r[1].trim());
    }
  }), e;
}
function pc(t) {
  let e = "";
  if (Ue(t))
    e = t;
  else if (Q(t))
    for (let n = 0; n < t.length; n++) {
      const r = pc(t[n]);
      r && (e += r + " ");
    }
  else if (Ie(t))
    for (const n in t)
      t[n] && (e += n + " ");
  return e.trim();
}
const Hf = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", jf = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Rf = /* @__PURE__ */ Si(Hf), zf = /* @__PURE__ */ Si(jf), Wf = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Yf = /* @__PURE__ */ Si(Wf);
function Hu(t) {
  return !!t || t === "";
}
function Da(t, ...e) {
  console.warn(`[Vue warn] ${t}`, ...e);
}
let mt;
class Xf {
  constructor(e = !1) {
    this.detached = e, this._active = !0, this.effects = [], this.cleanups = [], this.parent = mt, !e && mt && (this.index = (mt.scopes || (mt.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(e) {
    if (this._active) {
      const n = mt;
      try {
        return mt = this, e();
      } finally {
        mt = n;
      }
    } else
      Da("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    mt = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    mt = this.parent;
  }
  stop(e) {
    if (this._active) {
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++)
        this.effects[n].stop();
      for (n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, r = this.scopes.length; n < r; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !e) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Zf(t, e = mt) {
  e && e.active && e.effects.push(t);
}
function Gf() {
  return mt;
}
const gc = (t) => {
  const e = new Set(t);
  return e.w = 0, e.n = 0, e;
}, ju = (t) => (t.w & Ii) > 0, Ru = (t) => (t.n & Ii) > 0, Qf = ({ deps: t }) => {
  if (t.length)
    for (let e = 0; e < t.length; e++)
      t[e].w |= Ii;
}, ed = (t) => {
  const { deps: e } = t;
  if (e.length) {
    let n = 0;
    for (let r = 0; r < e.length; r++) {
      const i = e[r];
      ju(i) && !Ru(i) ? i.delete(t) : e[n++] = i, i.w &= ~Ii, i.n &= ~Ii;
    }
    e.length = n;
  }
}, _a = /* @__PURE__ */ new WeakMap();
let ls = 0, Ii = 1;
const qa = 30;
let Ye;
const Di = Symbol("iterate"), Ka = Symbol("Map key iterate");
class wc {
  constructor(e, n = null, r) {
    this.fn = e, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Zf(this, r);
  }
  run() {
    if (!this.active)
      return this.fn();
    let e = Ye, n = bi;
    for (; e; ) {
      if (e === this)
        return;
      e = e.parent;
    }
    try {
      return this.parent = Ye, Ye = this, bi = !0, Ii = 1 << ++ls, ls <= qa ? Qf(this) : $c(this), this.fn();
    } finally {
      ls <= qa && ed(this), Ii = 1 << --ls, Ye = this.parent, bi = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    Ye === this ? this.deferStop = !0 : this.active && ($c(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function $c(t) {
  const { deps: e } = t;
  if (e.length) {
    for (let n = 0; n < e.length; n++)
      e[n].delete(t);
    e.length = 0;
  }
}
let bi = !0;
const zu = [];
function Mi() {
  zu.push(bi), bi = !1;
}
function Vi() {
  const t = zu.pop();
  bi = t === void 0 ? !0 : t;
}
function Re(t, e, n) {
  if (bi && Ye) {
    let r = _a.get(t);
    r || _a.set(t, r = /* @__PURE__ */ new Map());
    let i = r.get(n);
    i || r.set(n, i = gc()), Wu(i, { effect: Ye, target: t, type: e, key: n });
  }
}
function Wu(t, e) {
  let n = !1;
  ls <= qa ? Ru(t) || (t.n |= Ii, n = !ju(t)) : n = !t.has(Ye), n && (t.add(Ye), Ye.deps.push(t), Ye.onTrack && Ye.onTrack(
    ke(
      {
        effect: Ye
      },
      e
    )
  ));
}
function $t(t, e, n, r, i, s) {
  const c = _a.get(t);
  if (!c)
    return;
  let u = [];
  if (e === "clear")
    u = [...c.values()];
  else if (n === "length" && Q(t)) {
    const m = Number(r);
    c.forEach((h, g) => {
      (g === "length" || g >= m) && u.push(h);
    });
  } else
    switch (n !== void 0 && u.push(c.get(n)), e) {
      case "add":
        Q(t) ? hc(n) && u.push(c.get("length")) : (u.push(c.get(Di)), Gi(t) && u.push(c.get(Ka)));
        break;
      case "delete":
        Q(t) || (u.push(c.get(Di)), Gi(t) && u.push(c.get(Ka)));
        break;
      case "set":
        Gi(t) && u.push(c.get(Di));
        break;
    }
  const f = { target: t, type: e, key: n, newValue: r, oldValue: i, oldTarget: s };
  if (u.length === 1)
    u[0] && Pa(u[0], f);
  else {
    const m = [];
    for (const h of u)
      h && m.push(...h);
    Pa(gc(m), f);
  }
}
function Pa(t, e) {
  const n = Q(t) ? t : [...t];
  for (const r of n)
    r.computed && Mc(r, e);
  for (const r of n)
    r.computed || Mc(r, e);
}
function Mc(t, e) {
  (t !== Ye || t.allowRecurse) && (t.onTrigger && t.onTrigger(ke({ effect: t }, e)), t.scheduler ? t.scheduler() : t.run());
}
const td = /* @__PURE__ */ Si("__proto__,__v_isRef,__isVue"), Yu = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(fc)
), nd = /* @__PURE__ */ oa(), rd = /* @__PURE__ */ oa(!1, !0), id = /* @__PURE__ */ oa(!0), sd = /* @__PURE__ */ oa(!0, !0), Vc = /* @__PURE__ */ od();
function od() {
  const t = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
    t[e] = function(...n) {
      const r = ie(this);
      for (let s = 0, c = this.length; s < c; s++)
        Re(r, "get", s + "");
      const i = r[e](...n);
      return i === -1 || i === !1 ? r[e](...n.map(ie)) : i;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
    t[e] = function(...n) {
      Mi();
      const r = ie(this)[e].apply(this, n);
      return Vi(), r;
    };
  }), t;
}
function ad(t) {
  const e = ie(this);
  return Re(e, "has", t), e.hasOwnProperty(t);
}
function oa(t = !1, e = !1) {
  return function(r, i, s) {
    if (i === "__v_isReactive")
      return !t;
    if (i === "__v_isReadonly")
      return t;
    if (i === "__v_isShallow")
      return e;
    if (i === "__v_raw" && s === (t ? e ? rl : nl : e ? tl : el).get(r))
      return r;
    const c = Q(r);
    if (!t) {
      if (c && ue(Vc, i))
        return Reflect.get(Vc, i, s);
      if (i === "hasOwnProperty")
        return ad;
    }
    const u = Reflect.get(r, i, s);
    return (fc(i) ? Yu.has(i) : td(i)) || (t || Re(r, "get", i), e) ? u : qe(u) ? c && hc(i) ? u : u.value : Ie(u) ? t ? il(u) : ua(u) : u;
  };
}
const cd = /* @__PURE__ */ Xu(), ud = /* @__PURE__ */ Xu(!0);
function Xu(t = !1) {
  return function(n, r, i, s) {
    let c = n[r];
    if (Oi(c) && qe(c) && !qe(i))
      return !1;
    if (!t && (!Wo(i) && !Oi(i) && (c = ie(c), i = ie(i)), !Q(n) && qe(c) && !qe(i)))
      return c.value = i, !0;
    const u = Q(n) && hc(r) ? Number(r) < n.length : ue(n, r), f = Reflect.set(n, r, i, s);
    return n === ie(s) && (u ? Es(i, c) && $t(n, "set", r, i, c) : $t(n, "add", r, i)), f;
  };
}
function ld(t, e) {
  const n = ue(t, e), r = t[e], i = Reflect.deleteProperty(t, e);
  return i && n && $t(t, "delete", e, void 0, r), i;
}
function fd(t, e) {
  const n = Reflect.has(t, e);
  return (!fc(e) || !Yu.has(e)) && Re(t, "has", e), n;
}
function dd(t) {
  return Re(t, "iterate", Q(t) ? "length" : Di), Reflect.ownKeys(t);
}
const Zu = {
  get: nd,
  set: cd,
  deleteProperty: ld,
  has: fd,
  ownKeys: dd
}, Gu = {
  get: id,
  set(t, e) {
    return Da(
      `Set operation on key "${String(e)}" failed: target is readonly.`,
      t
    ), !0;
  },
  deleteProperty(t, e) {
    return Da(
      `Delete operation on key "${String(e)}" failed: target is readonly.`,
      t
    ), !0;
  }
}, md = /* @__PURE__ */ ke(
  {},
  Zu,
  {
    get: rd,
    set: ud
  }
), hd = /* @__PURE__ */ ke(
  {},
  Gu,
  {
    get: sd
  }
), yc = (t) => t, aa = (t) => Reflect.getPrototypeOf(t);
function Bo(t, e, n = !1, r = !1) {
  t = t.__v_raw;
  const i = ie(t), s = ie(e);
  n || (e !== s && Re(i, "get", e), Re(i, "get", s));
  const { has: c } = aa(i), u = r ? yc : n ? Tc : bs;
  if (c.call(i, e))
    return u(t.get(e));
  if (c.call(i, s))
    return u(t.get(s));
  t !== i && t.get(e);
}
function Io(t, e = !1) {
  const n = this.__v_raw, r = ie(n), i = ie(t);
  return e || (t !== i && Re(r, "has", t), Re(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
}
function Oo(t, e = !1) {
  return t = t.__v_raw, !e && Re(ie(t), "iterate", Di), Reflect.get(t, "size", t);
}
function Hc(t) {
  t = ie(t);
  const e = ie(this);
  return aa(e).has.call(e, t) || (e.add(t), $t(e, "add", t, t)), this;
}
function jc(t, e) {
  e = ie(e);
  const n = ie(this), { has: r, get: i } = aa(n);
  let s = r.call(n, t);
  s ? Qu(n, r, t) : (t = ie(t), s = r.call(n, t));
  const c = i.call(n, t);
  return n.set(t, e), s ? Es(e, c) && $t(n, "set", t, e, c) : $t(n, "add", t, e), this;
}
function Rc(t) {
  const e = ie(this), { has: n, get: r } = aa(e);
  let i = n.call(e, t);
  i ? Qu(e, n, t) : (t = ie(t), i = n.call(e, t));
  const s = r ? r.call(e, t) : void 0, c = e.delete(t);
  return i && $t(e, "delete", t, void 0, s), c;
}
function zc() {
  const t = ie(this), e = t.size !== 0, n = Gi(t) ? new Map(t) : new Set(t), r = t.clear();
  return e && $t(t, "clear", void 0, void 0, n), r;
}
function ko(t, e) {
  return function(r, i) {
    const s = this, c = s.__v_raw, u = ie(c), f = e ? yc : t ? Tc : bs;
    return !t && Re(u, "iterate", Di), c.forEach((m, h) => r.call(i, f(m), f(h), s));
  };
}
function So(t, e, n) {
  return function(...r) {
    const i = this.__v_raw, s = ie(i), c = Gi(s), u = t === "entries" || t === Symbol.iterator && c, f = t === "keys" && c, m = i[t](...r), h = n ? yc : e ? Tc : bs;
    return !e && Re(
      s,
      "iterate",
      f ? Ka : Di
    ), {
      // iterator protocol
      next() {
        const { value: g, done: y } = m.next();
        return y ? { value: g, done: y } : {
          value: u ? [h(g[0]), h(g[1])] : h(g),
          done: y
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function ai(t) {
  return function(...e) {
    {
      const n = e[0] ? `on key "${e[0]}" ` : "";
      console.warn(
        `${sa(t)} operation ${n}failed: target is readonly.`,
        ie(this)
      );
    }
    return t === "delete" ? !1 : this;
  };
}
function pd() {
  const t = {
    get(s) {
      return Bo(this, s);
    },
    get size() {
      return Oo(this);
    },
    has: Io,
    add: Hc,
    set: jc,
    delete: Rc,
    clear: zc,
    forEach: ko(!1, !1)
  }, e = {
    get(s) {
      return Bo(this, s, !1, !0);
    },
    get size() {
      return Oo(this);
    },
    has: Io,
    add: Hc,
    set: jc,
    delete: Rc,
    clear: zc,
    forEach: ko(!1, !0)
  }, n = {
    get(s) {
      return Bo(this, s, !0);
    },
    get size() {
      return Oo(this, !0);
    },
    has(s) {
      return Io.call(this, s, !0);
    },
    add: ai("add"),
    set: ai("set"),
    delete: ai("delete"),
    clear: ai("clear"),
    forEach: ko(!0, !1)
  }, r = {
    get(s) {
      return Bo(this, s, !0, !0);
    },
    get size() {
      return Oo(this, !0);
    },
    has(s) {
      return Io.call(this, s, !0);
    },
    add: ai("add"),
    set: ai("set"),
    delete: ai("delete"),
    clear: ai("clear"),
    forEach: ko(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    t[s] = So(
      s,
      !1,
      !1
    ), n[s] = So(
      s,
      !0,
      !1
    ), e[s] = So(
      s,
      !1,
      !0
    ), r[s] = So(
      s,
      !0,
      !0
    );
  }), [
    t,
    n,
    e,
    r
  ];
}
const [
  gd,
  wd,
  yd,
  Td
] = /* @__PURE__ */ pd();
function ca(t, e) {
  const n = e ? t ? Td : yd : t ? wd : gd;
  return (r, i, s) => i === "__v_isReactive" ? !t : i === "__v_isReadonly" ? t : i === "__v_raw" ? r : Reflect.get(
    ue(n, i) && i in r ? n : r,
    i,
    s
  );
}
const Ed = {
  get: /* @__PURE__ */ ca(!1, !1)
}, bd = {
  get: /* @__PURE__ */ ca(!1, !0)
}, Nd = {
  get: /* @__PURE__ */ ca(!0, !1)
}, xd = {
  get: /* @__PURE__ */ ca(!0, !0)
};
function Qu(t, e, n) {
  const r = ie(n);
  if (r !== n && e.call(t, r)) {
    const i = mc(t);
    console.warn(
      `Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const el = /* @__PURE__ */ new WeakMap(), tl = /* @__PURE__ */ new WeakMap(), nl = /* @__PURE__ */ new WeakMap(), rl = /* @__PURE__ */ new WeakMap();
function Bd(t) {
  switch (t) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Id(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : Bd(mc(t));
}
function ua(t) {
  return Oi(t) ? t : la(
    t,
    !1,
    Zu,
    Ed,
    el
  );
}
function Od(t) {
  return la(
    t,
    !1,
    md,
    bd,
    tl
  );
}
function il(t) {
  return la(
    t,
    !0,
    Gu,
    Nd,
    nl
  );
}
function fs(t) {
  return la(
    t,
    !0,
    hd,
    xd,
    rl
  );
}
function la(t, e, n, r, i) {
  if (!Ie(t))
    return console.warn(`value cannot be made reactive: ${String(t)}`), t;
  if (t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const s = i.get(t);
  if (s)
    return s;
  const c = Id(t);
  if (c === 0)
    return t;
  const u = new Proxy(
    t,
    c === 2 ? r : n
  );
  return i.set(t, u), u;
}
function _i(t) {
  return Oi(t) ? _i(t.__v_raw) : !!(t && t.__v_isReactive);
}
function Oi(t) {
  return !!(t && t.__v_isReadonly);
}
function Wo(t) {
  return !!(t && t.__v_isShallow);
}
function $a(t) {
  return _i(t) || Oi(t);
}
function ie(t) {
  const e = t && t.__v_raw;
  return e ? ie(e) : t;
}
function sl(t) {
  return Ro(t, "__v_skip", !0), t;
}
const bs = (t) => Ie(t) ? ua(t) : t, Tc = (t) => Ie(t) ? il(t) : t;
function ol(t) {
  bi && Ye && (t = ie(t), Wu(t.dep || (t.dep = gc()), {
    target: t,
    type: "get",
    key: "value"
  }));
}
function al(t, e) {
  t = ie(t);
  const n = t.dep;
  n && Pa(n, {
    target: t,
    type: "set",
    key: "value",
    newValue: e
  });
}
function qe(t) {
  return !!(t && t.__v_isRef === !0);
}
function Tt(t) {
  return kd(t, !1);
}
function kd(t, e) {
  return qe(t) ? t : new Sd(t, e);
}
class Sd {
  constructor(e, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? e : ie(e), this._value = n ? e : bs(e);
  }
  get value() {
    return ol(this), this._value;
  }
  set value(e) {
    const n = this.__v_isShallow || Wo(e) || Oi(e);
    e = n ? e : ie(e), Es(e, this._rawValue) && (this._rawValue = e, this._value = n ? e : bs(e), al(this, e));
  }
}
function hi(t) {
  return qe(t) ? t.value : t;
}
const vd = {
  get: (t, e, n) => hi(Reflect.get(t, e, n)),
  set: (t, e, n, r) => {
    const i = t[e];
    return qe(i) && !qe(n) ? (i.value = n, !0) : Reflect.set(t, e, n, r);
  }
};
function cl(t) {
  return _i(t) ? t : new Proxy(t, vd);
}
class Jd {
  constructor(e, n, r, i) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new wc(e, () => {
      this._dirty || (this._dirty = !0, al(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !i, this.__v_isReadonly = r;
  }
  get value() {
    const e = ie(this);
    return ol(e), (e._dirty || !e._cacheable) && (e._dirty = !1, e._value = e.effect.run()), e._value;
  }
  set value(e) {
    this._setter(e);
  }
}
function Fd(t, e, n = !1) {
  let r, i;
  const s = te(t);
  s ? (r = t, i = () => {
    console.warn("Write operation failed: computed value is readonly");
  }) : (r = t.get, i = t.set);
  const c = new Jd(r, i, s || !i, n);
  return e && !n && (c.effect.onTrack = e.onTrack, c.effect.onTrigger = e.onTrigger), c;
}
const qi = [];
function Co(t) {
  qi.push(t);
}
function Do() {
  qi.pop();
}
function q(t, ...e) {
  Mi();
  const n = qi.length ? qi[qi.length - 1].component : null, r = n && n.appContext.config.warnHandler, i = Ad();
  if (r)
    ri(
      r,
      n,
      11,
      [
        t + e.join(""),
        n && n.proxy,
        i.map(
          ({ vnode: s }) => `at <${wa(n, s.type)}>`
        ).join(`
`),
        i
      ]
    );
  else {
    const s = [`[Vue warn]: ${t}`, ...e];
    i.length && s.push(`
`, ...Ud(i)), console.warn(...s);
  }
  Vi();
}
function Ad() {
  let t = qi[qi.length - 1];
  if (!t)
    return [];
  const e = [];
  for (; t; ) {
    const n = e[0];
    n && n.vnode === t ? n.recurseCount++ : e.push({
      vnode: t,
      recurseCount: 0
    });
    const r = t.component && t.component.parent;
    t = r && r.vnode;
  }
  return e;
}
function Ud(t) {
  const e = [];
  return t.forEach((n, r) => {
    e.push(...r === 0 ? [] : [`
`], ...Ld(n));
  }), e;
}
function Ld({ vnode: t, recurseCount: e }) {
  const n = e > 0 ? `... (${e} recursive calls)` : "", r = t.component ? t.component.parent == null : !1, i = ` at <${wa(
    t.component,
    t.type,
    r
  )}`, s = ">" + n;
  return t.props ? [i, ...Cd(t.props), s] : [i + s];
}
function Cd(t) {
  const e = [], n = Object.keys(t);
  return n.slice(0, 3).forEach((r) => {
    e.push(...ul(r, t[r]));
  }), n.length > 3 && e.push(" ..."), e;
}
function ul(t, e, n) {
  return Ue(e) ? (e = JSON.stringify(e), n ? e : [`${t}=${e}`]) : typeof e == "number" || typeof e == "boolean" || e == null ? n ? e : [`${t}=${e}`] : qe(e) ? (e = ul(t, ie(e.value), !0), n ? e : [`${t}=Ref<`, e, ">"]) : te(e) ? [`${t}=fn${e.name ? `<${e.name}>` : ""}`] : (e = ie(e), n ? e : [`${t}=`, e]);
}
const Ec = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function ri(t, e, n, r) {
  let i;
  try {
    i = r ? t(...r) : t();
  } catch (s) {
    fa(s, e, n);
  }
  return i;
}
function Et(t, e, n, r) {
  if (te(t)) {
    const s = ri(t, e, n, r);
    return s && dc(s) && s.catch((c) => {
      fa(c, e, n);
    }), s;
  }
  const i = [];
  for (let s = 0; s < t.length; s++)
    i.push(Et(t[s], e, n, r));
  return i;
}
function fa(t, e, n, r = !0) {
  const i = e ? e.vnode : null;
  if (e) {
    let s = e.parent;
    const c = e.proxy, u = Ec[n];
    for (; s; ) {
      const m = s.ec;
      if (m) {
        for (let h = 0; h < m.length; h++)
          if (m[h](t, c, u) === !1)
            return;
      }
      s = s.parent;
    }
    const f = e.appContext.config.errorHandler;
    if (f) {
      ri(
        f,
        null,
        10,
        [t, c, u]
      );
      return;
    }
  }
  Dd(t, n, i, r);
}
function Dd(t, e, n, r = !0) {
  {
    const i = Ec[e];
    if (n && Co(n), q(`Unhandled error${i ? ` during execution of ${i}` : ""}`), n && Do(), r)
      throw t;
    console.error(t);
  }
}
let Ns = !1, Ma = !1;
const je = [];
let Ot = 0;
const Qi = [];
let It = null, pi = 0;
const ll = /* @__PURE__ */ Promise.resolve();
let bc = null;
const _d = 100;
function Va(t) {
  const e = bc || ll;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function qd(t) {
  let e = Ot + 1, n = je.length;
  for (; e < n; ) {
    const r = e + n >>> 1;
    xs(je[r]) < t ? e = r + 1 : n = r;
  }
  return e;
}
function da(t) {
  (!je.length || !je.includes(
    t,
    Ns && t.allowRecurse ? Ot + 1 : Ot
  )) && (t.id == null ? je.push(t) : je.splice(qd(t.id), 0, t), fl());
}
function fl() {
  !Ns && !Ma && (Ma = !0, bc = ll.then(hl));
}
function Kd(t) {
  const e = je.indexOf(t);
  e > Ot && je.splice(e, 1);
}
function dl(t) {
  Q(t) ? Qi.push(...t) : (!It || !It.includes(
    t,
    t.allowRecurse ? pi + 1 : pi
  )) && Qi.push(t), fl();
}
function Wc(t, e = Ns ? Ot + 1 : 0) {
  for (t = t || /* @__PURE__ */ new Map(); e < je.length; e++) {
    const n = je[e];
    if (n && n.pre) {
      if (Nc(t, n))
        continue;
      je.splice(e, 1), e--, n();
    }
  }
}
function ml(t) {
  if (Qi.length) {
    const e = [...new Set(Qi)];
    if (Qi.length = 0, It) {
      It.push(...e);
      return;
    }
    for (It = e, t = t || /* @__PURE__ */ new Map(), It.sort((n, r) => xs(n) - xs(r)), pi = 0; pi < It.length; pi++)
      Nc(t, It[pi]) || It[pi]();
    It = null, pi = 0;
  }
}
const xs = (t) => t.id == null ? 1 / 0 : t.id, Pd = (t, e) => {
  const n = xs(t) - xs(e);
  if (n === 0) {
    if (t.pre && !e.pre)
      return -1;
    if (e.pre && !t.pre)
      return 1;
  }
  return n;
};
function hl(t) {
  Ma = !1, Ns = !0, t = t || /* @__PURE__ */ new Map(), je.sort(Pd);
  const e = (n) => Nc(t, n);
  try {
    for (Ot = 0; Ot < je.length; Ot++) {
      const n = je[Ot];
      if (n && n.active !== !1) {
        if (e(n))
          continue;
        ri(n, null, 14);
      }
    }
  } finally {
    Ot = 0, je.length = 0, ml(t), Ns = !1, bc = null, (je.length || Qi.length) && hl(t);
  }
}
function Nc(t, e) {
  if (!t.has(e))
    t.set(e, 1);
  else {
    const n = t.get(e);
    if (n > _d) {
      const r = e.ownerInstance, i = r && Vl(r.type);
      return q(
        `Maximum recursive updates exceeded${i ? ` in component <${i}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`
      ), !0;
    } else
      t.set(e, n + 1);
  }
}
let Ni = !1;
const Wi = /* @__PURE__ */ new Set();
zo().__VUE_HMR_RUNTIME__ = {
  createRecord: Na(pl),
  rerender: Na(Vd),
  reload: Na(Hd)
};
const $i = /* @__PURE__ */ new Map();
function $d(t) {
  const e = t.type.__hmrId;
  let n = $i.get(e);
  n || (pl(e, t.type), n = $i.get(e)), n.instances.add(t);
}
function Md(t) {
  $i.get(t.type.__hmrId).instances.delete(t);
}
function pl(t, e) {
  return $i.has(t) ? !1 : ($i.set(t, {
    initialDef: gs(e),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function gs(t) {
  return Hl(t) ? t.__vccOpts : t;
}
function Vd(t, e) {
  const n = $i.get(t);
  n && (n.initialDef.render = e, [...n.instances].forEach((r) => {
    e && (r.render = e, gs(r.type).render = e), r.renderCache = [], Ni = !0, r.update(), Ni = !1;
  }));
}
function Hd(t, e) {
  const n = $i.get(t);
  if (!n)
    return;
  e = gs(e), Yc(n.initialDef, e);
  const r = [...n.instances];
  for (const i of r) {
    const s = gs(i.type);
    Wi.has(s) || (s !== n.initialDef && Yc(s, e), Wi.add(s)), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (Wi.add(s), i.ceReload(e.styles), Wi.delete(s)) : i.parent ? da(i.parent.update) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  dl(() => {
    for (const i of r)
      Wi.delete(
        gs(i.type)
      );
  });
}
function Yc(t, e) {
  ke(t, e);
  for (const n in t)
    n !== "__file" && !(n in e) && delete t[n];
}
function Na(t) {
  return (e, n) => {
    try {
      return t(e, n);
    } catch (r) {
      console.error(r), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let kt, ds = [], Ha = !1;
function yo(t, ...e) {
  kt ? kt.emit(t, ...e) : Ha || ds.push({ event: t, args: e });
}
function gl(t, e) {
  var n, r;
  kt = t, kt ? (kt.enabled = !0, ds.forEach(({ event: i, args: s }) => kt.emit(i, ...s)), ds = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((r = (n = window.navigator) == null ? void 0 : n.userAgent) != null && r.includes("jsdom")) ? ((e.__VUE_DEVTOOLS_HOOK_REPLAY__ = e.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    gl(s, e);
  }), setTimeout(() => {
    kt || (e.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Ha = !0, ds = []);
  }, 3e3)) : (Ha = !0, ds = []);
}
function jd(t, e) {
  yo("app:init", t, e, {
    Fragment: ht,
    Text: To,
    Comment: it,
    Static: qo
  });
}
function Rd(t) {
  yo("app:unmount", t);
}
const zd = /* @__PURE__ */ xc(
  "component:added"
  /* COMPONENT_ADDED */
), wl = /* @__PURE__ */ xc(
  "component:updated"
  /* COMPONENT_UPDATED */
), Wd = /* @__PURE__ */ xc(
  "component:removed"
  /* COMPONENT_REMOVED */
), Yd = (t) => {
  kt && typeof kt.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !kt.cleanupBuffer(t) && Wd(t);
};
function xc(t) {
  return (e) => {
    yo(
      t,
      e.appContext.app,
      e.uid,
      e.parent ? e.parent.uid : void 0,
      e
    );
  };
}
const Xd = /* @__PURE__ */ yl(
  "perf:start"
  /* PERFORMANCE_START */
), Zd = /* @__PURE__ */ yl(
  "perf:end"
  /* PERFORMANCE_END */
);
function yl(t) {
  return (e, n, r) => {
    yo(t, e.appContext.app, e.uid, e, n, r);
  };
}
function Gd(t, e, n) {
  yo(
    "component:emit",
    t.appContext.app,
    t,
    e,
    n
  );
}
function Qd(t, e, ...n) {
  if (t.isUnmounted)
    return;
  const r = t.vnode.props || xe;
  {
    const {
      emitsOptions: h,
      propsOptions: [g]
    } = t;
    if (h)
      if (!(e in h))
        (!g || !(Ai(e) in g)) && q(
          `Component emitted event "${e}" but it is neither declared in the emits option nor as an "${Ai(e)}" prop.`
        );
      else {
        const y = h[e];
        te(y) && (y(...n) || q(
          `Invalid event arguments: event validation failed for event "${e}".`
        ));
      }
  }
  let i = n;
  const s = e.startsWith("update:"), c = s && e.slice(7);
  if (c && c in r) {
    const h = `${c === "modelValue" ? "model" : c}Modifiers`, { number: g, trim: y } = r[h] || xe;
    y && (i = n.map((b) => Ue(b) ? b.trim() : b)), g && (i = n.map(Kf));
  }
  Gd(t, e, i);
  {
    const h = e.toLowerCase();
    h !== e && r[Ai(h)] && q(
      `Event "${h}" is emitted in component ${wa(
        t,
        t.type
      )} but the handler is registered for "${e}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Bi(e)}" instead of "${e}".`
    );
  }
  let u, f = r[u = Ai(e)] || // also try camelCase event handler (#2249)
  r[u = Ai(ts(e))];
  !f && s && (f = r[u = Ai(Bi(e))]), f && Et(
    f,
    t,
    6,
    i
  );
  const m = r[u + "Once"];
  if (m) {
    if (!t.emitted)
      t.emitted = {};
    else if (t.emitted[u])
      return;
    t.emitted[u] = !0, Et(
      m,
      t,
      6,
      i
    );
  }
}
function Tl(t, e, n = !1) {
  const r = e.emitsCache, i = r.get(t);
  if (i !== void 0)
    return i;
  const s = t.emits;
  let c = {}, u = !1;
  if (!te(t)) {
    const f = (m) => {
      const h = Tl(m, e, !0);
      h && (u = !0, ke(c, h));
    };
    !n && e.mixins.length && e.mixins.forEach(f), t.extends && f(t.extends), t.mixins && t.mixins.forEach(f);
  }
  return !s && !u ? (Ie(t) && r.set(t, null), null) : (Q(s) ? s.forEach((f) => c[f] = null) : ke(c, s), Ie(t) && r.set(t, c), c);
}
function ma(t, e) {
  return !t || !wo(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), ue(t, e[0].toLowerCase() + e.slice(1)) || ue(t, Bi(e)) || ue(t, e));
}
let ct = null, El = null;
function Yo(t) {
  const e = ct;
  return ct = t, El = t && t.type.__scopeId || null, e;
}
function em(t, e = ct, n) {
  if (!e || t._n)
    return t;
  const r = (...i) => {
    r._d && cu(-1);
    const s = Yo(e);
    let c;
    try {
      c = t(...i);
    } finally {
      Yo(s), r._d && cu(1);
    }
    return wl(e), c;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
let ja = !1;
function Xo() {
  ja = !0;
}
function xa(t) {
  const {
    type: e,
    vnode: n,
    proxy: r,
    withProxy: i,
    props: s,
    propsOptions: [c],
    slots: u,
    attrs: f,
    emit: m,
    render: h,
    renderCache: g,
    data: y,
    setupState: b,
    ctx: S,
    inheritAttrs: U
  } = t;
  let $, R;
  const ae = Yo(t);
  ja = !1;
  try {
    if (n.shapeFlag & 4) {
      const F = i || r;
      $ = pt(
        h.call(
          F,
          F,
          g,
          s,
          b,
          y,
          S
        )
      ), R = f;
    } else {
      const F = e;
      f === s && Xo(), $ = pt(
        F.length > 1 ? F(
          s,
          {
            get attrs() {
              return Xo(), f;
            },
            slots: u,
            emit: m
          }
        ) : F(
          s,
          null
          /* we know it doesn't need it */
        )
      ), R = e.props ? f : nm(f);
    }
  } catch (F) {
    ws.length = 0, fa(F, t, 1), $ = Pt(it);
  }
  let L = $, Z;
  if ($.patchFlag > 0 && $.patchFlag & 2048 && ([L, Z] = tm($)), R && U !== !1) {
    const F = Object.keys(R), { shapeFlag: X } = L;
    if (F.length) {
      if (X & 7)
        c && F.some(jo) && (R = rm(
          R,
          c
        )), L = ki(L, R);
      else if (!ja && L.type !== it) {
        const ne = Object.keys(f), ce = [], we = [];
        for (let Se = 0, Oe = ne.length; Se < Oe; Se++) {
          const Le = ne[Se];
          wo(Le) ? jo(Le) || ce.push(Le[2].toLowerCase() + Le.slice(3)) : we.push(Le);
        }
        we.length && q(
          `Extraneous non-props attributes (${we.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), ce.length && q(
          `Extraneous non-emits event listeners (${ce.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (Xc(L) || q(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), L = ki(L), L.dirs = L.dirs ? L.dirs.concat(n.dirs) : n.dirs), n.transition && (Xc(L) || q(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), L.transition = n.transition), Z ? Z(L) : $ = L, Yo(ae), $;
}
const tm = (t) => {
  const e = t.children, n = t.dynamicChildren, r = bl(e);
  if (!r)
    return [t, void 0];
  const i = e.indexOf(r), s = n ? n.indexOf(r) : -1, c = (u) => {
    e[i] = u, n && (s > -1 ? n[s] = u : u.patchFlag > 0 && (t.dynamicChildren = [...n, u]));
  };
  return [pt(r), c];
};
function bl(t) {
  let e;
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (vc(r)) {
      if (r.type !== it || r.children === "v-if") {
        if (e)
          return;
        e = r;
      }
    } else
      return;
  }
  return e;
}
const nm = (t) => {
  let e;
  for (const n in t)
    (n === "class" || n === "style" || wo(n)) && ((e || (e = {}))[n] = t[n]);
  return e;
}, rm = (t, e) => {
  const n = {};
  for (const r in t)
    (!jo(r) || !(r.slice(9) in e)) && (n[r] = t[r]);
  return n;
}, Xc = (t) => t.shapeFlag & 7 || t.type === it;
function im(t, e, n) {
  const { props: r, children: i, component: s } = t, { props: c, children: u, patchFlag: f } = e, m = s.emitsOptions;
  if ((i || u) && Ni || e.dirs || e.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return r ? Zc(r, c, m) : !!c;
    if (f & 8) {
      const h = e.dynamicProps;
      for (let g = 0; g < h.length; g++) {
        const y = h[g];
        if (c[y] !== r[y] && !ma(m, y))
          return !0;
      }
    }
  } else
    return (i || u) && (!u || !u.$stable) ? !0 : r === c ? !1 : r ? c ? Zc(r, c, m) : !0 : !!c;
  return !1;
}
function Zc(t, e, n) {
  const r = Object.keys(e);
  if (r.length !== Object.keys(t).length)
    return !0;
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (e[s] !== t[s] && !ma(n, s))
      return !0;
  }
  return !1;
}
function sm({ vnode: t, parent: e }, n) {
  for (; e && e.subTree === t; )
    (t = e.vnode).el = n, e = e.parent;
}
const om = (t) => t.__isSuspense;
function am(t, e) {
  e && e.pendingBranch ? Q(t) ? e.effects.push(...t) : e.effects.push(t) : dl(t);
}
function Nl(t, e) {
  return Bc(t, null, e);
}
const vo = {};
function Ba(t, e, n) {
  return te(e) || q(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Bc(t, e, n);
}
function Bc(t, e, { immediate: n, deep: r, flush: i, onTrack: s, onTrigger: c } = xe) {
  var u;
  e || (n !== void 0 && q(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && q(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const f = (F) => {
    q(
      "Invalid watch source: ",
      F,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, m = Gf() === ((u = Me) == null ? void 0 : u.scope) ? Me : null;
  let h, g = !1, y = !1;
  if (qe(t) ? (h = () => t.value, g = Wo(t)) : _i(t) ? (h = () => t, r = !0) : Q(t) ? (y = !0, g = t.some((F) => _i(F) || Wo(F)), h = () => t.map((F) => {
    if (qe(F))
      return F.value;
    if (_i(F))
      return Xi(F);
    if (te(F))
      return ri(F, m, 2);
    f(F);
  })) : te(t) ? e ? h = () => ri(t, m, 2) : h = () => {
    if (!(m && m.isUnmounted))
      return b && b(), Et(
        t,
        m,
        3,
        [S]
      );
  } : (h = et, f(t)), e && r) {
    const F = h;
    h = () => Xi(F());
  }
  let b, S = (F) => {
    b = L.onStop = () => {
      ri(F, m, 4);
    };
  }, U;
  if (Is)
    if (S = et, e ? n && Et(e, m, 3, [
      h(),
      y ? [] : void 0,
      S
    ]) : h(), i === "sync") {
      const F = Th();
      U = F.__watcherHandles || (F.__watcherHandles = []);
    } else
      return et;
  let $ = y ? new Array(t.length).fill(vo) : vo;
  const R = () => {
    if (L.active)
      if (e) {
        const F = L.run();
        (r || g || (y ? F.some(
          (X, ne) => Es(X, $[ne])
        ) : Es(F, $))) && (b && b(), Et(e, m, 3, [
          F,
          // pass undefined as the old value when it's changed for the first time
          $ === vo ? void 0 : y && $[0] === vo ? [] : $,
          S
        ]), $ = F);
      } else
        L.run();
  };
  R.allowRecurse = !!e;
  let ae;
  i === "sync" ? ae = R : i === "post" ? ae = () => Ze(R, m && m.suspense) : (R.pre = !0, m && (R.id = m.uid), ae = () => da(R));
  const L = new wc(h, ae);
  L.onTrack = s, L.onTrigger = c, e ? n ? R() : $ = L.run() : i === "post" ? Ze(
    L.run.bind(L),
    m && m.suspense
  ) : L.run();
  const Z = () => {
    L.stop(), m && m.scope && lc(m.scope.effects, L);
  };
  return U && U.push(Z), Z;
}
function cm(t, e, n) {
  const r = this.proxy, i = Ue(t) ? t.includes(".") ? xl(r, t) : () => r[t] : t.bind(r, r);
  let s;
  te(e) ? s = e : (s = e.handler, n = e);
  const c = Me;
  ns(this);
  const u = Bc(i, s.bind(r), n);
  return c ? ns(c) : Pi(), u;
}
function xl(t, e) {
  const n = e.split(".");
  return () => {
    let r = t;
    for (let i = 0; i < n.length && r; i++)
      r = r[n[i]];
    return r;
  };
}
function Xi(t, e) {
  if (!Ie(t) || t.__v_skip || (e = e || /* @__PURE__ */ new Set(), e.has(t)))
    return t;
  if (e.add(t), qe(t))
    Xi(t.value, e);
  else if (Q(t))
    for (let n = 0; n < t.length; n++)
      Xi(t[n], e);
  else if (Uf(t) || Gi(t))
    t.forEach((n) => {
      Xi(n, e);
    });
  else if (Cf(t))
    for (const n in t)
      Xi(t[n], e);
  return t;
}
function Bl(t) {
  Df(t) && q("Do not use built-in directive ids as custom directive id: " + t);
}
function Ji(t, e, n, r) {
  const i = t.dirs, s = e && e.dirs;
  for (let c = 0; c < i.length; c++) {
    const u = i[c];
    s && (u.oldValue = s[c].value);
    let f = u.dir[r];
    f && (Mi(), Et(f, n, 8, [
      t.el,
      u,
      t,
      e
    ]), Vi());
  }
}
function rs(t, e) {
  return te(t) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => ke({ name: t.name }, e, { setup: t }))()
  ) : t;
}
const _o = (t) => !!t.type.__asyncLoader, Ic = (t) => t.type.__isKeepAlive;
function um(t, e) {
  Il(t, "a", e);
}
function lm(t, e) {
  Il(t, "da", e);
}
function Il(t, e, n = Me) {
  const r = t.__wdc || (t.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return t();
  });
  if (ha(e, r, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      Ic(i.parent.vnode) && fm(r, e, n, i), i = i.parent;
  }
}
function fm(t, e, n, r) {
  const i = ha(
    e,
    t,
    r,
    !0
    /* prepend */
  );
  Ol(() => {
    lc(r[e], i);
  }, n);
}
function ha(t, e, n = Me, r = !1) {
  if (n) {
    const i = n[t] || (n[t] = []), s = e.__weh || (e.__weh = (...c) => {
      if (n.isUnmounted)
        return;
      Mi(), ns(n);
      const u = Et(e, n, t, c);
      return Pi(), Vi(), u;
    });
    return r ? i.unshift(s) : i.push(s), s;
  } else {
    const i = Ai(Ec[t].replace(/ hook$/, ""));
    q(
      `${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const oi = (t) => (e, n = Me) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Is || t === "sp") && ha(t, (...r) => e(...r), n)
), dm = oi("bm"), pa = oi("m"), mm = oi("bu"), hm = oi("u"), pm = oi("bum"), Ol = oi("um"), gm = oi("sp"), wm = oi(
  "rtg"
), ym = oi(
  "rtc"
);
function Tm(t, e = Me) {
  ha("ec", t, e);
}
const Em = Symbol.for("v-ndc"), Ra = (t) => t ? $l(t) ? Ac(t) || t.proxy : Ra(t.parent) : null, Ki = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ke(/* @__PURE__ */ Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => fs(t.props),
    $attrs: (t) => fs(t.attrs),
    $slots: (t) => fs(t.slots),
    $refs: (t) => fs(t.refs),
    $parent: (t) => Ra(t.parent),
    $root: (t) => Ra(t.root),
    $emit: (t) => t.emit,
    $options: (t) => kc(t),
    $forceUpdate: (t) => t.f || (t.f = () => da(t.update)),
    $nextTick: (t) => t.n || (t.n = Va.bind(t.proxy)),
    $watch: (t) => cm.bind(t)
  })
), Oc = (t) => t === "_" || t === "$", Ia = (t, e) => t !== xe && !t.__isScriptSetup && ue(t, e), kl = {
  get({ _: t }, e) {
    const { ctx: n, setupState: r, data: i, props: s, accessCache: c, type: u, appContext: f } = t;
    if (e === "__isVue")
      return !0;
    let m;
    if (e[0] !== "$") {
      const b = c[e];
      if (b !== void 0)
        switch (b) {
          case 1:
            return r[e];
          case 2:
            return i[e];
          case 4:
            return n[e];
          case 3:
            return s[e];
        }
      else {
        if (Ia(r, e))
          return c[e] = 1, r[e];
        if (i !== xe && ue(i, e))
          return c[e] = 2, i[e];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (m = t.propsOptions[0]) && ue(m, e)
        )
          return c[e] = 3, s[e];
        if (n !== xe && ue(n, e))
          return c[e] = 4, n[e];
        za && (c[e] = 0);
      }
    }
    const h = Ki[e];
    let g, y;
    if (h)
      return e === "$attrs" ? (Re(t, "get", e), Xo()) : e === "$slots" && Re(t, "get", e), h(t);
    if (
      // css module (injected by vue-loader)
      (g = u.__cssModules) && (g = g[e])
    )
      return g;
    if (n !== xe && ue(n, e))
      return c[e] = 4, n[e];
    if (
      // {} properties
      y = f.config.globalProperties, ue(y, e)
    )
      return y[e];
    ct && (!Ue(e) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    e.indexOf("__v") !== 0) && (i !== xe && Oc(e[0]) && ue(i, e) ? q(
      `Property ${JSON.stringify(
        e
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : t === ct && q(
      `Property ${JSON.stringify(e)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: t }, e, n) {
    const { data: r, setupState: i, ctx: s } = t;
    return Ia(i, e) ? (i[e] = n, !0) : i.__isScriptSetup && ue(i, e) ? (q(`Cannot mutate <script setup> binding "${e}" from Options API.`), !1) : r !== xe && ue(r, e) ? (r[e] = n, !0) : ue(t.props, e) ? (q(`Attempting to mutate prop "${e}". Props are readonly.`), !1) : e[0] === "$" && e.slice(1) in t ? (q(
      `Attempting to mutate public property "${e}". Properties starting with $ are reserved and readonly.`
    ), !1) : (e in t.appContext.config.globalProperties ? Object.defineProperty(s, e, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[e] = n, !0);
  },
  has({
    _: { data: t, setupState: e, accessCache: n, ctx: r, appContext: i, propsOptions: s }
  }, c) {
    let u;
    return !!n[c] || t !== xe && ue(t, c) || Ia(e, c) || (u = s[0]) && ue(u, c) || ue(r, c) || ue(Ki, c) || ue(i.config.globalProperties, c);
  },
  defineProperty(t, e, n) {
    return n.get != null ? t._.accessCache[e] = 0 : ue(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n);
  }
};
kl.ownKeys = (t) => (q(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(t));
function bm(t) {
  const e = {};
  return Object.defineProperty(e, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => t
  }), Object.keys(Ki).forEach((n) => {
    Object.defineProperty(e, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Ki[n](t),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: et
    });
  }), e;
}
function Nm(t) {
  const {
    ctx: e,
    propsOptions: [n]
  } = t;
  n && Object.keys(n).forEach((r) => {
    Object.defineProperty(e, r, {
      enumerable: !0,
      configurable: !0,
      get: () => t.props[r],
      set: et
    });
  });
}
function xm(t) {
  const { ctx: e, setupState: n } = t;
  Object.keys(ie(n)).forEach((r) => {
    if (!n.__isScriptSetup) {
      if (Oc(r[0])) {
        q(
          `setup() return property ${JSON.stringify(
            r
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(e, r, {
        enumerable: !0,
        configurable: !0,
        get: () => n[r],
        set: et
      });
    }
  });
}
function Gc(t) {
  return Q(t) ? t.reduce(
    (e, n) => (e[n] = null, e),
    {}
  ) : t;
}
function Bm() {
  const t = /* @__PURE__ */ Object.create(null);
  return (e, n) => {
    t[n] ? q(`${e} property "${n}" is already defined in ${t[n]}.`) : t[n] = e;
  };
}
let za = !0;
function Im(t) {
  const e = kc(t), n = t.proxy, r = t.ctx;
  za = !1, e.beforeCreate && Qc(e.beforeCreate, t, "bc");
  const {
    // state
    data: i,
    computed: s,
    methods: c,
    watch: u,
    provide: f,
    inject: m,
    // lifecycle
    created: h,
    beforeMount: g,
    mounted: y,
    beforeUpdate: b,
    updated: S,
    activated: U,
    deactivated: $,
    beforeDestroy: R,
    beforeUnmount: ae,
    destroyed: L,
    unmounted: Z,
    render: F,
    renderTracked: X,
    renderTriggered: ne,
    errorCaptured: ce,
    serverPrefetch: we,
    // public API
    expose: Se,
    inheritAttrs: Oe,
    // assets
    components: Le,
    directives: Xe,
    filters: Vt
  } = e, He = Bm();
  {
    const [le] = t.propsOptions;
    if (le)
      for (const K in le)
        He("Props", K);
  }
  if (m && Om(m, r, He), c)
    for (const le in c) {
      const K = c[le];
      te(K) ? (Object.defineProperty(r, le, {
        value: K.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }), He("Methods", le)) : q(
        `Method "${le}" has type "${typeof K}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (i) {
    te(i) || q(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const le = i.call(n, n);
    if (dc(le) && q(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !Ie(le))
      q("data() should return an object.");
    else {
      t.data = ua(le);
      for (const K in le)
        He("Data", K), Oc(K[0]) || Object.defineProperty(r, K, {
          configurable: !0,
          enumerable: !0,
          get: () => le[K],
          set: et
        });
    }
  }
  if (za = !0, s)
    for (const le in s) {
      const K = s[le], _ = te(K) ? K.bind(n, n) : te(K.get) ? K.get.bind(n, n) : et;
      _ === et && q(`Computed property "${le}" has no getter.`);
      const W = !te(K) && te(K.set) ? K.set.bind(n) : () => {
        q(
          `Write operation failed: computed property "${le}" is readonly.`
        );
      }, j = wh({
        get: _,
        set: W
      });
      Object.defineProperty(r, le, {
        enumerable: !0,
        configurable: !0,
        get: () => j.value,
        set: (Y) => j.value = Y
      }), He("Computed", le);
    }
  if (u)
    for (const le in u)
      Sl(u[le], r, n, le);
  if (f) {
    const le = te(f) ? f.call(n) : f;
    Reflect.ownKeys(le).forEach((K) => {
      Am(K, le[K]);
    });
  }
  h && Qc(h, t, "c");
  function Pe(le, K) {
    Q(K) ? K.forEach((_) => le(_.bind(n))) : K && le(K.bind(n));
  }
  if (Pe(dm, g), Pe(pa, y), Pe(mm, b), Pe(hm, S), Pe(um, U), Pe(lm, $), Pe(Tm, ce), Pe(ym, X), Pe(wm, ne), Pe(pm, ae), Pe(Ol, Z), Pe(gm, we), Q(Se))
    if (Se.length) {
      const le = t.exposed || (t.exposed = {});
      Se.forEach((K) => {
        Object.defineProperty(le, K, {
          get: () => n[K],
          set: (_) => n[K] = _
        });
      });
    } else
      t.exposed || (t.exposed = {});
  F && t.render === et && (t.render = F), Oe != null && (t.inheritAttrs = Oe), Le && (t.components = Le), Xe && (t.directives = Xe);
}
function Om(t, e, n = et) {
  Q(t) && (t = Wa(t));
  for (const r in t) {
    const i = t[r];
    let s;
    Ie(i) ? "default" in i ? s = bt(
      i.from || r,
      i.default,
      !0
      /* treat default function as factory */
    ) : s = bt(i.from || r) : s = bt(i), qe(s) ? Object.defineProperty(e, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (c) => s.value = c
    }) : e[r] = s, n("Inject", r);
  }
}
function Qc(t, e, n) {
  Et(
    Q(t) ? t.map((r) => r.bind(e.proxy)) : t.bind(e.proxy),
    e,
    n
  );
}
function Sl(t, e, n, r) {
  const i = r.includes(".") ? xl(n, r) : () => n[r];
  if (Ue(t)) {
    const s = e[t];
    te(s) ? Ba(i, s) : q(`Invalid watch handler specified by key "${t}"`, s);
  } else if (te(t))
    Ba(i, t.bind(n));
  else if (Ie(t))
    if (Q(t))
      t.forEach((s) => Sl(s, e, n, r));
    else {
      const s = te(t.handler) ? t.handler.bind(n) : e[t.handler];
      te(s) ? Ba(i, s, t) : q(`Invalid watch handler specified by key "${t.handler}"`, s);
    }
  else
    q(`Invalid watch option: "${r}"`, t);
}
function kc(t) {
  const e = t.type, { mixins: n, extends: r } = e, {
    mixins: i,
    optionsCache: s,
    config: { optionMergeStrategies: c }
  } = t.appContext, u = s.get(e);
  let f;
  return u ? f = u : !i.length && !n && !r ? f = e : (f = {}, i.length && i.forEach(
    (m) => Zo(f, m, c, !0)
  ), Zo(f, e, c)), Ie(e) && s.set(e, f), f;
}
function Zo(t, e, n, r = !1) {
  const { mixins: i, extends: s } = e;
  s && Zo(t, s, n, !0), i && i.forEach(
    (c) => Zo(t, c, n, !0)
  );
  for (const c in e)
    if (r && c === "expose")
      q(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const u = km[c] || n && n[c];
      t[c] = u ? u(t[c], e[c]) : e[c];
    }
  return t;
}
const km = {
  data: eu,
  props: tu,
  emits: tu,
  // objects
  methods: ms,
  computed: ms,
  // lifecycle
  beforeCreate: We,
  created: We,
  beforeMount: We,
  mounted: We,
  beforeUpdate: We,
  updated: We,
  beforeDestroy: We,
  beforeUnmount: We,
  destroyed: We,
  unmounted: We,
  activated: We,
  deactivated: We,
  errorCaptured: We,
  serverPrefetch: We,
  // assets
  components: ms,
  directives: ms,
  // watch
  watch: vm,
  // provide / inject
  provide: eu,
  inject: Sm
};
function eu(t, e) {
  return e ? t ? function() {
    return ke(
      te(t) ? t.call(this, this) : t,
      te(e) ? e.call(this, this) : e
    );
  } : e : t;
}
function Sm(t, e) {
  return ms(Wa(t), Wa(e));
}
function Wa(t) {
  if (Q(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++)
      e[t[n]] = t[n];
    return e;
  }
  return t;
}
function We(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function ms(t, e) {
  return t ? ke(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function tu(t, e) {
  return t ? Q(t) && Q(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : ke(
    /* @__PURE__ */ Object.create(null),
    Gc(t),
    Gc(e ?? {})
  ) : e;
}
function vm(t, e) {
  if (!t)
    return e;
  if (!e)
    return t;
  const n = ke(/* @__PURE__ */ Object.create(null), t);
  for (const r in e)
    n[r] = We(t[r], e[r]);
  return n;
}
function vl() {
  return {
    app: null,
    config: {
      isNativeTag: Vu,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Jm = 0;
function Fm(t, e) {
  return function(r, i = null) {
    te(r) || (r = ke({}, r)), i != null && !Ie(i) && (q("root props passed to app.mount() must be an object."), i = null);
    const s = vl();
    Object.defineProperty(s.config, "unwrapInjectedRef", {
      get() {
        return !0;
      },
      set() {
        q(
          "app.config.unwrapInjectedRef has been deprecated. 3.3 now alawys unwraps injected refs in Options API."
        );
      }
    });
    const c = /* @__PURE__ */ new Set();
    let u = !1;
    const f = s.app = {
      _uid: Jm++,
      _component: r,
      _props: i,
      _container: null,
      _context: s,
      _instance: null,
      version: fu,
      get config() {
        return s.config;
      },
      set config(m) {
        q(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(m, ...h) {
        return c.has(m) ? q("Plugin has already been applied to target app.") : m && te(m.install) ? (c.add(m), m.install(f, ...h)) : te(m) ? (c.add(m), m(f, ...h)) : q(
          'A plugin must either be a function or an object with an "install" function.'
        ), f;
      },
      mixin(m) {
        return s.mixins.includes(m) ? q(
          "Mixin has already been applied to target app" + (m.name ? `: ${m.name}` : "")
        ) : s.mixins.push(m), f;
      },
      component(m, h) {
        return Qa(m, s.config), h ? (s.components[m] && q(`Component "${m}" has already been registered in target app.`), s.components[m] = h, f) : s.components[m];
      },
      directive(m, h) {
        return Bl(m), h ? (s.directives[m] && q(`Directive "${m}" has already been registered in target app.`), s.directives[m] = h, f) : s.directives[m];
      },
      mount(m, h, g) {
        if (u)
          q(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          m.__vue_app__ && q(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const y = Pt(
            r,
            i
          );
          return y.appContext = s, s.reload = () => {
            t(ki(y), m, g);
          }, h && e ? e(y, m) : t(y, m, g), u = !0, f._container = m, m.__vue_app__ = f, f._instance = y.component, jd(f, fu), Ac(y.component) || y.component.proxy;
        }
      },
      unmount() {
        u ? (t(null, f._container), f._instance = null, Rd(f), delete f._container.__vue_app__) : q("Cannot unmount an app that is not mounted.");
      },
      provide(m, h) {
        return m in s.provides && q(
          `App already provides property with key "${String(m)}". It will be overwritten with the new value.`
        ), s.provides[m] = h, f;
      },
      runWithContext(m) {
        Go = f;
        try {
          return m();
        } finally {
          Go = null;
        }
      }
    };
    return f;
  };
}
let Go = null;
function Am(t, e) {
  if (!Me)
    q("provide() can only be used inside setup().");
  else {
    let n = Me.provides;
    const r = Me.parent && Me.parent.provides;
    r === n && (n = Me.provides = Object.create(r)), n[t] = e;
  }
}
function bt(t, e, n = !1) {
  const r = Me || ct;
  if (r || Go) {
    const i = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : Go._context.provides;
    if (i && t in i)
      return i[t];
    if (arguments.length > 1)
      return n && te(e) ? e.call(r && r.proxy) : e;
    q(`injection "${String(t)}" not found.`);
  } else
    q("inject() can only be used inside setup() or functional components.");
}
function Um(t, e, n, r = !1) {
  const i = {}, s = {};
  Ro(s, ga, 1), t.propsDefaults = /* @__PURE__ */ Object.create(null), Jl(t, e, i, s);
  for (const c in t.propsOptions[0])
    c in i || (i[c] = void 0);
  Al(e || {}, i, t), n ? t.props = r ? i : Od(i) : t.type.props ? t.props = i : t.props = s, t.attrs = s;
}
function Lm(t) {
  for (; t; ) {
    if (t.type.__hmrId)
      return !0;
    t = t.parent;
  }
}
function Cm(t, e, n, r) {
  const {
    props: i,
    attrs: s,
    vnode: { patchFlag: c }
  } = t, u = ie(i), [f] = t.propsOptions;
  let m = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !Lm(t) && (r || c > 0) && !(c & 16)
  ) {
    if (c & 8) {
      const h = t.vnode.dynamicProps;
      for (let g = 0; g < h.length; g++) {
        let y = h[g];
        if (ma(t.emitsOptions, y))
          continue;
        const b = e[y];
        if (f)
          if (ue(s, y))
            b !== s[y] && (s[y] = b, m = !0);
          else {
            const S = ts(y);
            i[S] = Ya(
              f,
              u,
              S,
              b,
              t,
              !1
              /* isAbsent */
            );
          }
        else
          b !== s[y] && (s[y] = b, m = !0);
      }
    }
  } else {
    Jl(t, e, i, s) && (m = !0);
    let h;
    for (const g in u)
      (!e || // for camelCase
      !ue(e, g) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((h = Bi(g)) === g || !ue(e, h))) && (f ? n && // for camelCase
      (n[g] !== void 0 || // for kebab-case
      n[h] !== void 0) && (i[g] = Ya(
        f,
        u,
        g,
        void 0,
        t,
        !0
        /* isAbsent */
      )) : delete i[g]);
    if (s !== u)
      for (const g in s)
        (!e || !ue(e, g)) && (delete s[g], m = !0);
  }
  m && $t(t, "set", "$attrs"), Al(e || {}, i, t);
}
function Jl(t, e, n, r) {
  const [i, s] = t.propsOptions;
  let c = !1, u;
  if (e)
    for (let f in e) {
      if (Lo(f))
        continue;
      const m = e[f];
      let h;
      i && ue(i, h = ts(f)) ? !s || !s.includes(h) ? n[h] = m : (u || (u = {}))[h] = m : ma(t.emitsOptions, f) || (!(f in r) || m !== r[f]) && (r[f] = m, c = !0);
    }
  if (s) {
    const f = ie(n), m = u || xe;
    for (let h = 0; h < s.length; h++) {
      const g = s[h];
      n[g] = Ya(
        i,
        f,
        g,
        m[g],
        t,
        !ue(m, g)
      );
    }
  }
  return c;
}
function Ya(t, e, n, r, i, s) {
  const c = t[n];
  if (c != null) {
    const u = ue(c, "default");
    if (u && r === void 0) {
      const f = c.default;
      if (c.type !== Function && !c.skipFactory && te(f)) {
        const { propsDefaults: m } = i;
        n in m ? r = m[n] : (ns(i), r = m[n] = f.call(
          null,
          e
        ), Pi());
      } else
        r = f;
    }
    c[
      0
      /* shouldCast */
    ] && (s && !u ? r = !1 : c[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === Bi(n)) && (r = !0));
  }
  return r;
}
function Fl(t, e, n = !1) {
  const r = e.propsCache, i = r.get(t);
  if (i)
    return i;
  const s = t.props, c = {}, u = [];
  let f = !1;
  if (!te(t)) {
    const h = (g) => {
      f = !0;
      const [y, b] = Fl(g, e, !0);
      ke(c, y), b && u.push(...b);
    };
    !n && e.mixins.length && e.mixins.forEach(h), t.extends && h(t.extends), t.mixins && t.mixins.forEach(h);
  }
  if (!s && !f)
    return Ie(t) && r.set(t, Zi), Zi;
  if (Q(s))
    for (let h = 0; h < s.length; h++) {
      Ue(s[h]) || q("props must be strings when using array syntax.", s[h]);
      const g = ts(s[h]);
      nu(g) && (c[g] = xe);
    }
  else if (s) {
    Ie(s) || q("invalid props options", s);
    for (const h in s) {
      const g = ts(h);
      if (nu(g)) {
        const y = s[h], b = c[g] = Q(y) || te(y) ? { type: y } : ke({}, y);
        if (b) {
          const S = iu(Boolean, b.type), U = iu(String, b.type);
          b[
            0
            /* shouldCast */
          ] = S > -1, b[
            1
            /* shouldCastTrue */
          ] = U < 0 || S < U, (S > -1 || ue(b, "default")) && u.push(g);
        }
      }
    }
  }
  const m = [c, u];
  return Ie(t) && r.set(t, m), m;
}
function nu(t) {
  return t[0] !== "$" ? !0 : (q(`Invalid prop name: "${t}" is a reserved property.`), !1);
}
function Xa(t) {
  const e = t && t.toString().match(/^\s*(function|class) (\w+)/);
  return e ? e[2] : t === null ? "null" : "";
}
function ru(t, e) {
  return Xa(t) === Xa(e);
}
function iu(t, e) {
  return Q(e) ? e.findIndex((n) => ru(n, t)) : te(e) && ru(e, t) ? 0 : -1;
}
function Al(t, e, n) {
  const r = ie(e), i = n.propsOptions[0];
  for (const s in i) {
    let c = i[s];
    c != null && Dm(
      s,
      r[s],
      c,
      !ue(t, s) && !ue(t, Bi(s))
    );
  }
}
function Dm(t, e, n, r) {
  const { type: i, required: s, validator: c, skipCheck: u } = n;
  if (s && r) {
    q('Missing required prop: "' + t + '"');
    return;
  }
  if (!(e == null && !s)) {
    if (i != null && i !== !0 && !u) {
      let f = !1;
      const m = Q(i) ? i : [i], h = [];
      for (let g = 0; g < m.length && !f; g++) {
        const { valid: y, expectedType: b } = qm(e, m[g]);
        h.push(b || ""), f = y;
      }
      if (!f) {
        q(Km(t, e, h));
        return;
      }
    }
    c && !c(e) && q('Invalid prop: custom validator check failed for prop "' + t + '".');
  }
}
const _m = /* @__PURE__ */ Si(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function qm(t, e) {
  let n;
  const r = Xa(e);
  if (_m(r)) {
    const i = typeof t;
    n = i === r.toLowerCase(), !n && i === "object" && (n = t instanceof e);
  } else
    r === "Object" ? n = Ie(t) : r === "Array" ? n = Q(t) : r === "null" ? n = t === null : n = t instanceof e;
  return {
    valid: n,
    expectedType: r
  };
}
function Km(t, e, n) {
  let r = `Invalid prop: type check failed for prop "${t}". Expected ${n.map(sa).join(" | ")}`;
  const i = n[0], s = mc(e), c = su(e, i), u = su(e, s);
  return n.length === 1 && ou(i) && !Pm(i, s) && (r += ` with value ${c}`), r += `, got ${s} `, ou(s) && (r += `with value ${u}.`), r;
}
function su(t, e) {
  return e === "String" ? `"${t}"` : e === "Number" ? `${Number(t)}` : `${t}`;
}
function ou(t) {
  return ["string", "number", "boolean"].some((n) => t.toLowerCase() === n);
}
function Pm(...t) {
  return t.some((e) => e.toLowerCase() === "boolean");
}
const Ul = (t) => t[0] === "_" || t === "$stable", Sc = (t) => Q(t) ? t.map(pt) : [pt(t)], $m = (t, e, n) => {
  if (e._n)
    return e;
  const r = em((...i) => (Me && q(
    `Slot "${t}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Sc(e(...i))), n);
  return r._c = !1, r;
}, Ll = (t, e, n) => {
  const r = t._ctx;
  for (const i in t) {
    if (Ul(i))
      continue;
    const s = t[i];
    if (te(s))
      e[i] = $m(i, s, r);
    else if (s != null) {
      q(
        `Non-function value encountered for slot "${i}". Prefer function slots for better performance.`
      );
      const c = Sc(s);
      e[i] = () => c;
    }
  }
}, Cl = (t, e) => {
  Ic(t.vnode) || q(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Sc(e);
  t.slots.default = () => n;
}, Mm = (t, e) => {
  if (t.vnode.shapeFlag & 32) {
    const n = e._;
    n ? (t.slots = ie(e), Ro(e, "_", n)) : Ll(
      e,
      t.slots = {}
    );
  } else
    t.slots = {}, e && Cl(t, e);
  Ro(t.slots, ga, 1);
}, Vm = (t, e, n) => {
  const { vnode: r, slots: i } = t;
  let s = !0, c = xe;
  if (r.shapeFlag & 32) {
    const u = e._;
    u ? Ni ? (ke(i, e), $t(t, "set", "$slots")) : n && u === 1 ? s = !1 : (ke(i, e), !n && u === 1 && delete i._) : (s = !e.$stable, Ll(e, i)), c = e;
  } else
    e && (Cl(t, e), c = { default: 1 });
  if (s)
    for (const u in i)
      !Ul(u) && !(u in c) && delete i[u];
};
function Za(t, e, n, r, i = !1) {
  if (Q(t)) {
    t.forEach(
      (y, b) => Za(
        y,
        e && (Q(e) ? e[b] : e),
        n,
        r,
        i
      )
    );
    return;
  }
  if (_o(r) && !i)
    return;
  const s = r.shapeFlag & 4 ? Ac(r.component) || r.component.proxy : r.el, c = i ? null : s, { i: u, r: f } = t;
  if (!u) {
    q(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const m = e && e.r, h = u.refs === xe ? u.refs = {} : u.refs, g = u.setupState;
  if (m != null && m !== f && (Ue(m) ? (h[m] = null, ue(g, m) && (g[m] = null)) : qe(m) && (m.value = null)), te(f))
    ri(f, u, 12, [c, h]);
  else {
    const y = Ue(f), b = qe(f);
    if (y || b) {
      const S = () => {
        if (t.f) {
          const U = y ? ue(g, f) ? g[f] : h[f] : f.value;
          i ? Q(U) && lc(U, s) : Q(U) ? U.includes(s) || U.push(s) : y ? (h[f] = [s], ue(g, f) && (g[f] = h[f])) : (f.value = [s], t.k && (h[t.k] = f.value));
        } else
          y ? (h[f] = c, ue(g, f) && (g[f] = c)) : b ? (f.value = c, t.k && (h[t.k] = c)) : q("Invalid template ref type:", f, `(${typeof f})`);
      };
      c ? (S.id = -1, Ze(S, n)) : S();
    } else
      q("Invalid template ref type:", f, `(${typeof f})`);
  }
}
let os, wi;
function Ht(t, e) {
  t.appContext.config.performance && Qo() && wi.mark(`vue-${e}-${t.uid}`), Xd(t, e, Qo() ? wi.now() : Date.now());
}
function jt(t, e) {
  if (t.appContext.config.performance && Qo()) {
    const n = `vue-${e}-${t.uid}`, r = n + ":end";
    wi.mark(r), wi.measure(
      `<${wa(t, t.type)}> ${e}`,
      n,
      r
    ), wi.clearMarks(n), wi.clearMarks(r);
  }
  Zd(t, e, Qo() ? wi.now() : Date.now());
}
function Qo() {
  return os !== void 0 || (typeof window < "u" && window.performance ? (os = !0, wi = window.performance) : os = !1), os;
}
function Hm() {
  const t = [];
  if (t.length) {
    const e = t.length > 1;
    console.warn(
      `Feature flag${e ? "s" : ""} ${t.join(", ")} ${e ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Ze = am;
function jm(t) {
  return Rm(t);
}
function Rm(t, e) {
  Hm();
  const n = zo();
  n.__VUE__ = !0, gl(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: r,
    remove: i,
    patchProp: s,
    createElement: c,
    createText: u,
    createComment: f,
    setText: m,
    setElementText: h,
    parentNode: g,
    nextSibling: y,
    setScopeId: b = et,
    insertStaticContent: S
  } = t, U = (w, E, B, J = null, k = null, C = null, P = !1, A = null, D = Ni ? !1 : !!E.dynamicChildren) => {
    if (w === E)
      return;
    w && !as(w, E) && (J = Ee(w), re(w, k, C, !0), w = null), E.patchFlag === -2 && (D = !1, E.dynamicChildren = null);
    const { type: O, ref: H, shapeFlag: M } = E;
    switch (O) {
      case To:
        $(w, E, B, J);
        break;
      case it:
        R(w, E, B, J);
        break;
      case qo:
        w == null ? ae(E, B, J, P) : L(w, E, B, P);
        break;
      case ht:
        Xe(
          w,
          E,
          B,
          J,
          k,
          C,
          P,
          A,
          D
        );
        break;
      default:
        M & 1 ? X(
          w,
          E,
          B,
          J,
          k,
          C,
          P,
          A,
          D
        ) : M & 6 ? Vt(
          w,
          E,
          B,
          J,
          k,
          C,
          P,
          A,
          D
        ) : M & 64 || M & 128 ? O.process(
          w,
          E,
          B,
          J,
          k,
          C,
          P,
          A,
          D,
          Ce
        ) : q("Invalid VNode type:", O, `(${typeof O})`);
    }
    H != null && k && Za(H, w && w.ref, C, E || w, !E);
  }, $ = (w, E, B, J) => {
    if (w == null)
      r(
        E.el = u(E.children),
        B,
        J
      );
    else {
      const k = E.el = w.el;
      E.children !== w.children && m(k, E.children);
    }
  }, R = (w, E, B, J) => {
    w == null ? r(
      E.el = f(E.children || ""),
      B,
      J
    ) : E.el = w.el;
  }, ae = (w, E, B, J) => {
    [w.el, w.anchor] = S(
      w.children,
      E,
      B,
      J,
      w.el,
      w.anchor
    );
  }, L = (w, E, B, J) => {
    if (E.children !== w.children) {
      const k = y(w.anchor);
      F(w), [E.el, E.anchor] = S(
        E.children,
        B,
        k,
        J
      );
    } else
      E.el = w.el, E.anchor = w.anchor;
  }, Z = ({ el: w, anchor: E }, B, J) => {
    let k;
    for (; w && w !== E; )
      k = y(w), r(w, B, J), w = k;
    r(E, B, J);
  }, F = ({ el: w, anchor: E }) => {
    let B;
    for (; w && w !== E; )
      B = y(w), i(w), w = B;
    i(E);
  }, X = (w, E, B, J, k, C, P, A, D) => {
    P = P || E.type === "svg", w == null ? ne(
      E,
      B,
      J,
      k,
      C,
      P,
      A,
      D
    ) : Se(
      w,
      E,
      k,
      C,
      P,
      A,
      D
    );
  }, ne = (w, E, B, J, k, C, P, A) => {
    let D, O;
    const { type: H, props: M, shapeFlag: V, transition: G, dirs: d } = w;
    if (D = w.el = c(
      w.type,
      C,
      M && M.is,
      M
    ), V & 8 ? h(D, w.children) : V & 16 && we(
      w.children,
      D,
      null,
      J,
      k,
      C && H !== "foreignObject",
      P,
      A
    ), d && Ji(w, null, J, "created"), ce(D, w, w.scopeId, P, J), M) {
      for (const l in M)
        l !== "value" && !Lo(l) && s(
          D,
          l,
          null,
          M[l],
          C,
          w.children,
          J,
          k,
          fe
        );
      "value" in M && s(D, "value", null, M.value), (O = M.onVnodeBeforeMount) && Nt(O, J, w);
    }
    Object.defineProperty(D, "__vnode", {
      value: w,
      enumerable: !1
    }), Object.defineProperty(D, "__vueParentComponent", {
      value: J,
      enumerable: !1
    }), d && Ji(w, null, J, "beforeMount");
    const a = (!k || k && !k.pendingBranch) && G && !G.persisted;
    a && G.beforeEnter(D), r(D, E, B), ((O = M && M.onVnodeMounted) || a || d) && Ze(() => {
      O && Nt(O, J, w), a && G.enter(D), d && Ji(w, null, J, "mounted");
    }, k);
  }, ce = (w, E, B, J, k) => {
    if (B && b(w, B), J)
      for (let C = 0; C < J.length; C++)
        b(w, J[C]);
    if (k) {
      let C = k.subTree;
      if (C.patchFlag > 0 && C.patchFlag & 2048 && (C = bl(C.children) || C), E === C) {
        const P = k.vnode;
        ce(
          w,
          P,
          P.scopeId,
          P.slotScopeIds,
          k.parent
        );
      }
    }
  }, we = (w, E, B, J, k, C, P, A, D = 0) => {
    for (let O = D; O < w.length; O++) {
      const H = w[O] = A ? gi(w[O]) : pt(w[O]);
      U(
        null,
        H,
        E,
        B,
        J,
        k,
        C,
        P,
        A
      );
    }
  }, Se = (w, E, B, J, k, C, P) => {
    const A = E.el = w.el;
    let { patchFlag: D, dynamicChildren: O, dirs: H } = E;
    D |= w.patchFlag & 16;
    const M = w.props || xe, V = E.props || xe;
    let G;
    B && Fi(B, !1), (G = V.onVnodeBeforeUpdate) && Nt(G, B, E, w), H && Ji(E, w, B, "beforeUpdate"), B && Fi(B, !0), Ni && (D = 0, P = !1, O = null);
    const d = k && E.type !== "foreignObject";
    if (O ? (Oe(
      w.dynamicChildren,
      O,
      A,
      B,
      J,
      d,
      C
    ), ea(w, E)) : P || _(
      w,
      E,
      A,
      null,
      B,
      J,
      d,
      C,
      !1
    ), D > 0) {
      if (D & 16)
        Le(
          A,
          E,
          M,
          V,
          B,
          J,
          k
        );
      else if (D & 2 && M.class !== V.class && s(A, "class", null, V.class, k), D & 4 && s(A, "style", M.style, V.style, k), D & 8) {
        const a = E.dynamicProps;
        for (let l = 0; l < a.length; l++) {
          const p = a[l], T = M[p], N = V[p];
          (N !== T || p === "value") && s(
            A,
            p,
            T,
            N,
            k,
            w.children,
            B,
            J,
            fe
          );
        }
      }
      D & 1 && w.children !== E.children && h(A, E.children);
    } else
      !P && O == null && Le(
        A,
        E,
        M,
        V,
        B,
        J,
        k
      );
    ((G = V.onVnodeUpdated) || H) && Ze(() => {
      G && Nt(G, B, E, w), H && Ji(E, w, B, "updated");
    }, J);
  }, Oe = (w, E, B, J, k, C, P) => {
    for (let A = 0; A < E.length; A++) {
      const D = w[A], O = E[A], H = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        D.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (D.type === ht || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !as(D, O) || // - In the case of a component, it could contain anything.
        D.shapeFlag & 70) ? g(D.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          B
        )
      );
      U(
        D,
        O,
        H,
        null,
        J,
        k,
        C,
        P,
        !0
      );
    }
  }, Le = (w, E, B, J, k, C, P) => {
    if (B !== J) {
      if (B !== xe)
        for (const A in B)
          !Lo(A) && !(A in J) && s(
            w,
            A,
            B[A],
            null,
            P,
            E.children,
            k,
            C,
            fe
          );
      for (const A in J) {
        if (Lo(A))
          continue;
        const D = J[A], O = B[A];
        D !== O && A !== "value" && s(
          w,
          A,
          O,
          D,
          P,
          E.children,
          k,
          C,
          fe
        );
      }
      "value" in J && s(w, "value", B.value, J.value);
    }
  }, Xe = (w, E, B, J, k, C, P, A, D) => {
    const O = E.el = w ? w.el : u(""), H = E.anchor = w ? w.anchor : u("");
    let { patchFlag: M, dynamicChildren: V, slotScopeIds: G } = E;
    // #5523 dev root fragment may inherit directives
    (Ni || M & 2048) && (M = 0, D = !1, V = null), G && (A = A ? A.concat(G) : G), w == null ? (r(O, B, J), r(H, B, J), we(
      E.children,
      B,
      H,
      k,
      C,
      P,
      A,
      D
    )) : M > 0 && M & 64 && V && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    w.dynamicChildren ? (Oe(
      w.dynamicChildren,
      V,
      B,
      k,
      C,
      P,
      A
    ), ea(w, E)) : _(
      w,
      E,
      B,
      H,
      k,
      C,
      P,
      A,
      D
    );
  }, Vt = (w, E, B, J, k, C, P, A, D) => {
    E.slotScopeIds = A, w == null ? E.shapeFlag & 512 ? k.ctx.activate(
      E,
      B,
      J,
      P,
      D
    ) : He(
      E,
      B,
      J,
      k,
      C,
      P,
      D
    ) : Pe(w, E, D);
  }, He = (w, E, B, J, k, C, P) => {
    const A = w.component = ah(
      w,
      J,
      k
    );
    if (A.type.__hmrId && $d(A), Co(w), Ht(A, "mount"), Ic(w) && (A.ctx.renderer = Ce), Ht(A, "init"), uh(A), jt(A, "init"), A.asyncDep) {
      if (k && k.registerDep(A, le), !w.el) {
        const D = A.subTree = Pt(it);
        R(null, D, E, B);
      }
      return;
    }
    le(
      A,
      w,
      E,
      B,
      k,
      C,
      P
    ), Do(), jt(A, "mount");
  }, Pe = (w, E, B) => {
    const J = E.component = w.component;
    if (im(w, E, B))
      if (J.asyncDep && !J.asyncResolved) {
        Co(E), K(J, E, B), Do();
        return;
      } else
        J.next = E, Kd(J.update), J.update();
    else
      E.el = w.el, J.vnode = E;
  }, le = (w, E, B, J, k, C, P) => {
    const A = () => {
      if (w.isMounted) {
        let { next: H, bu: M, u: V, parent: G, vnode: d } = w, a = H, l;
        Co(H || w.vnode), Fi(w, !1), H ? (H.el = d.el, K(w, H, P)) : H = d, M && ss(M), (l = H.props && H.props.onVnodeBeforeUpdate) && Nt(l, G, H, d), Fi(w, !0), Ht(w, "render");
        const p = xa(w);
        jt(w, "render");
        const T = w.subTree;
        w.subTree = p, Ht(w, "patch"), U(
          T,
          p,
          // parent may have changed if it's in a teleport
          g(T.el),
          // anchor may have changed if it's in a fragment
          Ee(T),
          w,
          k,
          C
        ), jt(w, "patch"), H.el = p.el, a === null && sm(w, p.el), V && Ze(V, k), (l = H.props && H.props.onVnodeUpdated) && Ze(
          () => Nt(l, G, H, d),
          k
        ), wl(w), Do();
      } else {
        let H;
        const { el: M, props: V } = E, { bm: G, m: d, parent: a } = w, l = _o(E);
        if (Fi(w, !1), G && ss(G), !l && (H = V && V.onVnodeBeforeMount) && Nt(H, a, E), Fi(w, !0), M && ze) {
          const p = () => {
            Ht(w, "render"), w.subTree = xa(w), jt(w, "render"), Ht(w, "hydrate"), ze(
              M,
              w.subTree,
              w,
              k,
              null
            ), jt(w, "hydrate");
          };
          l ? E.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !w.isUnmounted && p()
          ) : p();
        } else {
          Ht(w, "render");
          const p = w.subTree = xa(w);
          jt(w, "render"), Ht(w, "patch"), U(
            null,
            p,
            B,
            J,
            w,
            k,
            C
          ), jt(w, "patch"), E.el = p.el;
        }
        if (d && Ze(d, k), !l && (H = V && V.onVnodeMounted)) {
          const p = E;
          Ze(
            () => Nt(H, a, p),
            k
          );
        }
        (E.shapeFlag & 256 || a && _o(a.vnode) && a.vnode.shapeFlag & 256) && w.a && Ze(w.a, k), w.isMounted = !0, zd(w), E = B = J = null;
      }
    }, D = w.effect = new wc(
      A,
      () => da(O),
      w.scope
      // track it in component's effect scope
    ), O = w.update = () => D.run();
    O.id = w.uid, Fi(w, !0), D.onTrack = w.rtc ? (H) => ss(w.rtc, H) : void 0, D.onTrigger = w.rtg ? (H) => ss(w.rtg, H) : void 0, O.ownerInstance = w, O();
  }, K = (w, E, B) => {
    E.component = w;
    const J = w.vnode.props;
    w.vnode = E, w.next = null, Cm(w, E.props, J, B), Vm(w, E.children, B), Mi(), Wc(), Vi();
  }, _ = (w, E, B, J, k, C, P, A, D = !1) => {
    const O = w && w.children, H = w ? w.shapeFlag : 0, M = E.children, { patchFlag: V, shapeFlag: G } = E;
    if (V > 0) {
      if (V & 128) {
        j(
          O,
          M,
          B,
          J,
          k,
          C,
          P,
          A,
          D
        );
        return;
      } else if (V & 256) {
        W(
          O,
          M,
          B,
          J,
          k,
          C,
          P,
          A,
          D
        );
        return;
      }
    }
    G & 8 ? (H & 16 && fe(O, k, C), M !== O && h(B, M)) : H & 16 ? G & 16 ? j(
      O,
      M,
      B,
      J,
      k,
      C,
      P,
      A,
      D
    ) : fe(O, k, C, !0) : (H & 8 && h(B, ""), G & 16 && we(
      M,
      B,
      J,
      k,
      C,
      P,
      A,
      D
    ));
  }, W = (w, E, B, J, k, C, P, A, D) => {
    w = w || Zi, E = E || Zi;
    const O = w.length, H = E.length, M = Math.min(O, H);
    let V;
    for (V = 0; V < M; V++) {
      const G = E[V] = D ? gi(E[V]) : pt(E[V]);
      U(
        w[V],
        G,
        B,
        null,
        k,
        C,
        P,
        A,
        D
      );
    }
    O > H ? fe(
      w,
      k,
      C,
      !0,
      !1,
      M
    ) : we(
      E,
      B,
      J,
      k,
      C,
      P,
      A,
      D,
      M
    );
  }, j = (w, E, B, J, k, C, P, A, D) => {
    let O = 0;
    const H = E.length;
    let M = w.length - 1, V = H - 1;
    for (; O <= M && O <= V; ) {
      const G = w[O], d = E[O] = D ? gi(E[O]) : pt(E[O]);
      if (as(G, d))
        U(
          G,
          d,
          B,
          null,
          k,
          C,
          P,
          A,
          D
        );
      else
        break;
      O++;
    }
    for (; O <= M && O <= V; ) {
      const G = w[M], d = E[V] = D ? gi(E[V]) : pt(E[V]);
      if (as(G, d))
        U(
          G,
          d,
          B,
          null,
          k,
          C,
          P,
          A,
          D
        );
      else
        break;
      M--, V--;
    }
    if (O > M) {
      if (O <= V) {
        const G = V + 1, d = G < H ? E[G].el : J;
        for (; O <= V; )
          U(
            null,
            E[O] = D ? gi(E[O]) : pt(E[O]),
            B,
            d,
            k,
            C,
            P,
            A,
            D
          ), O++;
      }
    } else if (O > V)
      for (; O <= M; )
        re(w[O], k, C, !0), O++;
    else {
      const G = O, d = O, a = /* @__PURE__ */ new Map();
      for (O = d; O <= V; O++) {
        const se = E[O] = D ? gi(E[O]) : pt(E[O]);
        se.key != null && (a.has(se.key) && q(
          "Duplicate keys found during update:",
          JSON.stringify(se.key),
          "Make sure keys are unique."
        ), a.set(se.key, O));
      }
      let l, p = 0;
      const T = V - d + 1;
      let N = !1, I = 0;
      const ee = new Array(T);
      for (O = 0; O < T; O++)
        ee[O] = 0;
      for (O = G; O <= M; O++) {
        const se = w[O];
        if (p >= T) {
          re(se, k, C, !0);
          continue;
        }
        let pe;
        if (se.key != null)
          pe = a.get(se.key);
        else
          for (l = d; l <= V; l++)
            if (ee[l - d] === 0 && as(se, E[l])) {
              pe = l;
              break;
            }
        pe === void 0 ? re(se, k, C, !0) : (ee[pe - d] = O + 1, pe >= I ? I = pe : N = !0, U(
          se,
          E[pe],
          B,
          null,
          k,
          C,
          P,
          A,
          D
        ), p++);
      }
      const Be = N ? zm(ee) : Zi;
      for (l = Be.length - 1, O = T - 1; O >= 0; O--) {
        const se = d + O, pe = E[se], Te = se + 1 < H ? E[se + 1].el : J;
        ee[O] === 0 ? U(
          null,
          pe,
          B,
          Te,
          k,
          C,
          P,
          A,
          D
        ) : N && (l < 0 || O !== Be[l] ? Y(pe, B, Te, 2) : l--);
      }
    }
  }, Y = (w, E, B, J, k = null) => {
    const { el: C, type: P, transition: A, children: D, shapeFlag: O } = w;
    if (O & 6) {
      Y(w.component.subTree, E, B, J);
      return;
    }
    if (O & 128) {
      w.suspense.move(E, B, J);
      return;
    }
    if (O & 64) {
      P.move(w, E, B, Ce);
      return;
    }
    if (P === ht) {
      r(C, E, B);
      for (let M = 0; M < D.length; M++)
        Y(D[M], E, B, J);
      r(w.anchor, E, B);
      return;
    }
    if (P === qo) {
      Z(w, E, B);
      return;
    }
    if (J !== 2 && O & 1 && A)
      if (J === 0)
        A.beforeEnter(C), r(C, E, B), Ze(() => A.enter(C), k);
      else {
        const { leave: M, delayLeave: V, afterLeave: G } = A, d = () => r(C, E, B), a = () => {
          M(C, () => {
            d(), G && G();
          });
        };
        V ? V(C, d, a) : a();
      }
    else
      r(C, E, B);
  }, re = (w, E, B, J = !1, k = !1) => {
    const {
      type: C,
      props: P,
      ref: A,
      children: D,
      dynamicChildren: O,
      shapeFlag: H,
      patchFlag: M,
      dirs: V
    } = w;
    if (A != null && Za(A, null, B, w, !0), H & 256) {
      E.ctx.deactivate(w);
      return;
    }
    const G = H & 1 && V, d = !_o(w);
    let a;
    if (d && (a = P && P.onVnodeBeforeUnmount) && Nt(a, E, w), H & 6)
      he(w.component, B, J);
    else {
      if (H & 128) {
        w.suspense.unmount(B, J);
        return;
      }
      G && Ji(w, null, E, "beforeUnmount"), H & 64 ? w.type.remove(
        w,
        E,
        B,
        k,
        Ce,
        J
      ) : O && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (C !== ht || M > 0 && M & 64) ? fe(
        O,
        E,
        B,
        !1,
        !0
      ) : (C === ht && M & 384 || !k && H & 16) && fe(D, E, B), J && me(w);
    }
    (d && (a = P && P.onVnodeUnmounted) || G) && Ze(() => {
      a && Nt(a, E, w), G && Ji(w, null, E, "unmounted");
    }, B);
  }, me = (w) => {
    const { type: E, el: B, anchor: J, transition: k } = w;
    if (E === ht) {
      w.patchFlag > 0 && w.patchFlag & 2048 && k && !k.persisted ? w.children.forEach((P) => {
        P.type === it ? i(P.el) : me(P);
      }) : Ne(B, J);
      return;
    }
    if (E === qo) {
      F(w);
      return;
    }
    const C = () => {
      i(B), k && !k.persisted && k.afterLeave && k.afterLeave();
    };
    if (w.shapeFlag & 1 && k && !k.persisted) {
      const { leave: P, delayLeave: A } = k, D = () => P(B, C);
      A ? A(w.el, C, D) : D();
    } else
      C();
  }, Ne = (w, E) => {
    let B;
    for (; w !== E; )
      B = y(w), i(w), w = B;
    i(E);
  }, he = (w, E, B) => {
    w.type.__hmrId && Md(w);
    const { bum: J, scope: k, update: C, subTree: P, um: A } = w;
    J && ss(J), k.stop(), C && (C.active = !1, re(P, w, E, B)), A && Ze(A, E), Ze(() => {
      w.isUnmounted = !0;
    }, E), E && E.pendingBranch && !E.isUnmounted && w.asyncDep && !w.asyncResolved && w.suspenseId === E.pendingId && (E.deps--, E.deps === 0 && E.resolve()), Yd(w);
  }, fe = (w, E, B, J = !1, k = !1, C = 0) => {
    for (let P = C; P < w.length; P++)
      re(w[P], E, B, J, k);
  }, Ee = (w) => w.shapeFlag & 6 ? Ee(w.component.subTree) : w.shapeFlag & 128 ? w.suspense.next() : y(w.anchor || w.el), Je = (w, E, B) => {
    w == null ? E._vnode && re(E._vnode, null, null, !0) : U(E._vnode || null, w, E, null, null, null, B), Wc(), ml(), E._vnode = w;
  }, Ce = {
    p: U,
    um: re,
    m: Y,
    r: me,
    mt: He,
    mc: we,
    pc: _,
    pbc: Oe,
    n: Ee,
    o: t
  };
  let De, ze;
  return e && ([De, ze] = e(
    Ce
  )), {
    render: Je,
    hydrate: De,
    createApp: Fm(Je, De)
  };
}
function Fi({ effect: t, update: e }, n) {
  t.allowRecurse = e.allowRecurse = n;
}
function ea(t, e, n = !1) {
  const r = t.children, i = e.children;
  if (Q(r) && Q(i))
    for (let s = 0; s < r.length; s++) {
      const c = r[s];
      let u = i[s];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = i[s] = gi(i[s]), u.el = c.el), n || ea(c, u)), u.type === To && (u.el = c.el), u.type === it && !u.el && (u.el = c.el);
    }
}
function zm(t) {
  const e = t.slice(), n = [0];
  let r, i, s, c, u;
  const f = t.length;
  for (r = 0; r < f; r++) {
    const m = t[r];
    if (m !== 0) {
      if (i = n[n.length - 1], t[i] < m) {
        e[r] = i, n.push(r);
        continue;
      }
      for (s = 0, c = n.length - 1; s < c; )
        u = s + c >> 1, t[n[u]] < m ? s = u + 1 : c = u;
      m < t[n[s]] && (s > 0 && (e[r] = n[s - 1]), n[s] = r);
    }
  }
  for (s = n.length, c = n[s - 1]; s-- > 0; )
    n[s] = c, c = e[c];
  return n;
}
const Wm = (t) => t.__isTeleport, es = (t) => t && (t.disabled || t.disabled === ""), au = (t) => typeof SVGElement < "u" && t instanceof SVGElement, Ga = (t, e) => {
  const n = t && t.to;
  if (Ue(n))
    if (e) {
      const r = e(n);
      return r || q(
        `Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), r;
    } else
      return q(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return !n && !es(t) && q(`Invalid Teleport target: ${n}`), n;
}, Ym = {
  __isTeleport: !0,
  process(t, e, n, r, i, s, c, u, f, m) {
    const {
      mc: h,
      pc: g,
      pbc: y,
      o: { insert: b, querySelector: S, createText: U, createComment: $ }
    } = m, R = es(e.props);
    let { shapeFlag: ae, children: L, dynamicChildren: Z } = e;
    if (Ni && (f = !1, Z = null), t == null) {
      const F = e.el = $("teleport start"), X = e.anchor = $("teleport end");
      b(F, n, r), b(X, n, r);
      const ne = e.target = Ga(e.props, S), ce = e.targetAnchor = U("");
      ne ? (b(ce, ne), c = c || au(ne)) : R || q("Invalid Teleport target on mount:", ne, `(${typeof ne})`);
      const we = (Se, Oe) => {
        ae & 16 && h(
          L,
          Se,
          Oe,
          i,
          s,
          c,
          u,
          f
        );
      };
      R ? we(n, X) : ne && we(ne, ce);
    } else {
      e.el = t.el;
      const F = e.anchor = t.anchor, X = e.target = t.target, ne = e.targetAnchor = t.targetAnchor, ce = es(t.props), we = ce ? n : X, Se = ce ? F : ne;
      if (c = c || au(X), Z ? (y(
        t.dynamicChildren,
        Z,
        we,
        i,
        s,
        c,
        u
      ), ea(t, e, !0)) : f || g(
        t,
        e,
        we,
        Se,
        i,
        s,
        c,
        u,
        !1
      ), R)
        ce || Jo(
          e,
          n,
          F,
          m,
          1
        );
      else if ((e.props && e.props.to) !== (t.props && t.props.to)) {
        const Oe = e.target = Ga(
          e.props,
          S
        );
        Oe ? Jo(
          e,
          Oe,
          null,
          m,
          0
        ) : q(
          "Invalid Teleport target on update:",
          X,
          `(${typeof X})`
        );
      } else
        ce && Jo(
          e,
          X,
          ne,
          m,
          1
        );
    }
    Dl(e);
  },
  remove(t, e, n, r, { um: i, o: { remove: s } }, c) {
    const { shapeFlag: u, children: f, anchor: m, targetAnchor: h, target: g, props: y } = t;
    if (g && s(h), (c || !es(y)) && (s(m), u & 16))
      for (let b = 0; b < f.length; b++) {
        const S = f[b];
        i(
          S,
          e,
          n,
          !0,
          !!S.dynamicChildren
        );
      }
  },
  move: Jo,
  hydrate: Xm
};
function Jo(t, e, n, { o: { insert: r }, m: i }, s = 2) {
  s === 0 && r(t.targetAnchor, e, n);
  const { el: c, anchor: u, shapeFlag: f, children: m, props: h } = t, g = s === 2;
  if (g && r(c, e, n), (!g || es(h)) && f & 16)
    for (let y = 0; y < m.length; y++)
      i(
        m[y],
        e,
        n,
        2
      );
  g && r(u, e, n);
}
function Xm(t, e, n, r, i, s, {
  o: { nextSibling: c, parentNode: u, querySelector: f }
}, m) {
  const h = e.target = Ga(
    e.props,
    f
  );
  if (h) {
    const g = h._lpa || h.firstChild;
    if (e.shapeFlag & 16)
      if (es(e.props))
        e.anchor = m(
          c(t),
          e,
          u(t),
          n,
          r,
          i,
          s
        ), e.targetAnchor = g;
      else {
        e.anchor = c(t);
        let y = g;
        for (; y; )
          if (y = c(y), y && y.nodeType === 8 && y.data === "teleport anchor") {
            e.targetAnchor = y, h._lpa = e.targetAnchor && c(e.targetAnchor);
            break;
          }
        m(
          g,
          e,
          h,
          n,
          r,
          i,
          s
        );
      }
    Dl(e);
  }
  return e.anchor && c(e.anchor);
}
const Zm = Ym;
function Dl(t) {
  const e = t.ctx;
  if (e && e.ut) {
    let n = t.children[0].el;
    for (; n !== t.targetAnchor; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", e.uid), n = n.nextSibling;
    e.ut();
  }
}
const ht = Symbol.for("v-fgt"), To = Symbol.for("v-txt"), it = Symbol.for("v-cmt"), qo = Symbol.for("v-stc"), ws = [];
let gt = null;
function Ge(t = !1) {
  ws.push(gt = t ? null : []);
}
function Gm() {
  ws.pop(), gt = ws[ws.length - 1] || null;
}
let Bs = 1;
function cu(t) {
  Bs += t;
}
function _l(t) {
  return t.dynamicChildren = Bs > 0 ? gt || Zi : null, Gm(), Bs > 0 && gt && gt.push(t), t;
}
function xi(t, e, n, r, i, s) {
  return _l(
    Kl(
      t,
      e,
      n,
      r,
      i,
      s,
      !0
      /* isBlock */
    )
  );
}
function Yi(t, e, n, r, i) {
  return _l(
    Pt(
      t,
      e,
      n,
      r,
      i,
      !0
      /* isBlock: prevent a block from tracking itself */
    )
  );
}
function vc(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function as(t, e) {
  return e.shapeFlag & 6 && Wi.has(e.type) ? (t.shapeFlag &= -257, e.shapeFlag &= -513, !1) : t.type === e.type && t.key === e.key;
}
const Qm = (...t) => eh(
  ...t
), ga = "__vInternal", ql = ({ key: t }) => t ?? null, Ko = ({
  ref: t,
  ref_key: e,
  ref_for: n
}) => (typeof t == "number" && (t = "" + t), t != null ? Ue(t) || qe(t) || te(t) ? { i: ct, r: t, k: e, f: !!n } : t : null);
function Kl(t, e = null, n = null, r = 0, i = null, s = t === ht ? 0 : 1, c = !1, u = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && ql(e),
    ref: e && Ko(e),
    scopeId: El,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: r,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: ct
  };
  return u ? (Jc(f, n), s & 128 && t.normalize(f)) : n && (f.shapeFlag |= Ue(n) ? 8 : 16), f.key !== f.key && q("VNode created with invalid key (NaN). VNode type:", f.type), Bs > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  gt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && gt.push(f), f;
}
const Pt = Qm;
function eh(t, e = null, n = null, r = 0, i = null, s = !1) {
  if ((!t || t === Em) && (t || q(`Invalid vnode type when creating vnode: ${t}.`), t = it), vc(t)) {
    const u = ki(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return n && Jc(u, n), Bs > 0 && !s && gt && (u.shapeFlag & 6 ? gt[gt.indexOf(t)] = u : gt.push(u)), u.patchFlag |= -2, u;
  }
  if (Hl(t) && (t = t.__vccOpts), e) {
    e = th(e);
    let { class: u, style: f } = e;
    u && !Ue(u) && (e.class = pc(u)), Ie(f) && ($a(f) && !Q(f) && (f = ke({}, f)), e.style = vi(f));
  }
  const c = Ue(t) ? 1 : om(t) ? 128 : Wm(t) ? 64 : Ie(t) ? 4 : te(t) ? 2 : 0;
  return c & 4 && $a(t) && (t = ie(t), q(
    "Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    t
  )), Kl(
    t,
    e,
    n,
    r,
    i,
    c,
    s,
    !0
  );
}
function th(t) {
  return t ? $a(t) || ga in t ? ke({}, t) : t : null;
}
function ki(t, e, n = !1) {
  const { props: r, ref: i, patchFlag: s, children: c } = t, u = e ? ih(r || {}, e) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: u,
    key: u && ql(u),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? Q(i) ? i.concat(Ko(e)) : [i, Ko(e)] : Ko(e)
    ) : i,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: s === -1 && Q(c) ? c.map(Pl) : c,
    target: t.target,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: e && t.type !== ht ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: t.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && ki(t.ssContent),
    ssFallback: t.ssFallback && ki(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
}
function Pl(t) {
  const e = ki(t);
  return Q(t.children) && (e.children = t.children.map(Pl)), e;
}
function nh(t = " ", e = 0) {
  return Pt(To, null, t, e);
}
function rh(t = "", e = !1) {
  return e ? (Ge(), Yi(it, null, t)) : Pt(it, null, t);
}
function pt(t) {
  return t == null || typeof t == "boolean" ? Pt(it) : Q(t) ? Pt(
    ht,
    null,
    // #3666, avoid reference pollution when reusing vnode
    t.slice()
  ) : typeof t == "object" ? gi(t) : Pt(To, null, String(t));
}
function gi(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : ki(t);
}
function Jc(t, e) {
  let n = 0;
  const { shapeFlag: r } = t;
  if (e == null)
    e = null;
  else if (Q(e))
    n = 16;
  else if (typeof e == "object")
    if (r & 65) {
      const i = e.default;
      i && (i._c && (i._d = !1), Jc(t, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = e._;
      !i && !(ga in e) ? e._ctx = ct : i === 3 && ct && (ct.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else
    te(e) ? (e = { default: e, _ctx: ct }, n = 32) : (e = String(e), r & 64 ? (n = 16, e = [nh(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function ih(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    for (const i in r)
      if (i === "class")
        e.class !== r.class && (e.class = pc([e.class, r.class]));
      else if (i === "style")
        e.style = vi([e.style, r.style]);
      else if (wo(i)) {
        const s = e[i], c = r[i];
        c && s !== c && !(Q(s) && s.includes(c)) && (e[i] = s ? [].concat(s, c) : c);
      } else
        i !== "" && (e[i] = r[i]);
  }
  return e;
}
function Nt(t, e, n, r = null) {
  Et(t, e, 7, [
    n,
    r
  ]);
}
const sh = vl();
let oh = 0;
function ah(t, e, n) {
  const r = t.type, i = (e ? e.appContext : t.appContext) || sh, s = {
    uid: oh++,
    vnode: t,
    type: r,
    parent: e,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new Xf(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: e ? e.provides : Object.create(i.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Fl(r, i),
    emitsOptions: Tl(r, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: xe,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: xe,
    data: xe,
    props: xe,
    attrs: xe,
    slots: xe,
    refs: xe,
    setupState: xe,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return s.ctx = bm(s), s.root = e ? e.root : s, s.emit = Qd.bind(null, s), t.ce && t.ce(s), s;
}
let Me = null, Fc, Hi, uu = "__VUE_INSTANCE_SETTERS__";
(Hi = zo()[uu]) || (Hi = zo()[uu] = []), Hi.push((t) => Me = t), Fc = (t) => {
  Hi.length > 1 ? Hi.forEach((e) => e(t)) : Hi[0](t);
};
const ns = (t) => {
  Fc(t), t.scope.on();
}, Pi = () => {
  Me && Me.scope.off(), Fc(null);
}, ch = /* @__PURE__ */ Si("slot,component");
function Qa(t, e) {
  const n = e.isNativeTag || Vu;
  (ch(t) || n(t)) && q(
    "Do not use built-in or reserved HTML elements as component id: " + t
  );
}
function $l(t) {
  return t.vnode.shapeFlag & 4;
}
let Is = !1;
function uh(t, e = !1) {
  Is = e;
  const { props: n, children: r } = t.vnode, i = $l(t);
  Um(t, n, i, e), Mm(t, r);
  const s = i ? lh(t, e) : void 0;
  return Is = !1, s;
}
function lh(t, e) {
  var n;
  const r = t.type;
  {
    if (r.name && Qa(r.name, t.appContext.config), r.components) {
      const s = Object.keys(r.components);
      for (let c = 0; c < s.length; c++)
        Qa(s[c], t.appContext.config);
    }
    if (r.directives) {
      const s = Object.keys(r.directives);
      for (let c = 0; c < s.length; c++)
        Bl(s[c]);
    }
    r.compilerOptions && fh() && q(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = sl(new Proxy(t.ctx, kl)), Nm(t);
  const { setup: i } = r;
  if (i) {
    const s = t.setupContext = i.length > 1 ? hh(t) : null;
    ns(t), Mi();
    const c = ri(
      i,
      t,
      0,
      [fs(t.props), s]
    );
    if (Vi(), Pi(), dc(c)) {
      if (c.then(Pi, Pi), e)
        return c.then((u) => {
          lu(t, u, e);
        }).catch((u) => {
          fa(u, t, 0);
        });
      if (t.asyncDep = c, !t.suspense) {
        const u = (n = r.name) != null ? n : "Anonymous";
        q(
          `Component <${u}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      lu(t, c, e);
  } else
    Ml(t, e);
}
function lu(t, e, n) {
  te(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : Ie(e) ? (vc(e) && q(
    "setup() should not return VNodes directly - return a render function instead."
  ), t.devtoolsRawSetupState = e, t.setupState = cl(e), xm(t)) : e !== void 0 && q(
    `setup() should return an object. Received: ${e === null ? "null" : typeof e}`
  ), Ml(t, n);
}
let ec;
const fh = () => !ec;
function Ml(t, e, n) {
  const r = t.type;
  if (!t.render) {
    if (!e && ec && !r.render) {
      const i = r.template || kc(t).template;
      if (i) {
        Ht(t, "compile");
        const { isCustomElement: s, compilerOptions: c } = t.appContext.config, { delimiters: u, compilerOptions: f } = r, m = ke(
          ke(
            {
              isCustomElement: s,
              delimiters: u
            },
            c
          ),
          f
        );
        r.render = ec(i, m), jt(t, "compile");
      }
    }
    t.render = r.render || et;
  }
  ns(t), Mi(), Im(t), Vi(), Pi(), !r.render && t.render === et && !e && (r.template ? q(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
    /* should not happen */
  ) : q("Component is missing template or render function."));
}
function dh(t) {
  return t.attrsProxy || (t.attrsProxy = new Proxy(
    t.attrs,
    {
      get(e, n) {
        return Xo(), Re(t, "get", "$attrs"), e[n];
      },
      set() {
        return q("setupContext.attrs is readonly."), !1;
      },
      deleteProperty() {
        return q("setupContext.attrs is readonly."), !1;
      }
    }
  ));
}
function mh(t) {
  return t.slotsProxy || (t.slotsProxy = new Proxy(t.slots, {
    get(e, n) {
      return Re(t, "get", "$slots"), e[n];
    }
  }));
}
function hh(t) {
  return Object.freeze({
    get attrs() {
      return dh(t);
    },
    get slots() {
      return mh(t);
    },
    get emit() {
      return (n, ...r) => t.emit(n, ...r);
    },
    expose: (n) => {
      if (t.exposed && q("expose() should be called only once per setup()."), n != null) {
        let r = typeof n;
        r === "object" && (Q(n) ? r = "array" : qe(n) && (r = "ref")), r !== "object" && q(
          `expose() should be passed a plain object, received ${r}.`
        );
      }
      t.exposed = n || {};
    }
  });
}
function Ac(t) {
  if (t.exposed)
    return t.exposeProxy || (t.exposeProxy = new Proxy(cl(sl(t.exposed)), {
      get(e, n) {
        if (n in e)
          return e[n];
        if (n in Ki)
          return Ki[n](t);
      },
      has(e, n) {
        return n in e || n in Ki;
      }
    }));
}
const ph = /(?:^|[-_])(\w)/g, gh = (t) => t.replace(ph, (e) => e.toUpperCase()).replace(/[-_]/g, "");
function Vl(t, e = !0) {
  return te(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function wa(t, e, n = !1) {
  let r = Vl(e);
  if (!r && e.__file) {
    const i = e.__file.match(/([^/\\]+)\.\w+$/);
    i && (r = i[1]);
  }
  if (!r && t && t.parent) {
    const i = (s) => {
      for (const c in s)
        if (s[c] === e)
          return c;
    };
    r = i(
      t.components || t.parent.type.components
    ) || i(t.appContext.components);
  }
  return r ? gh(r) : n ? "App" : "Anonymous";
}
function Hl(t) {
  return te(t) && "__vccOpts" in t;
}
const wh = (t, e) => Fd(t, e, Is), yh = Symbol.for("v-scx"), Th = () => {
  {
    const t = bt(yh);
    return t || q(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), t;
  }
};
function Oa(t) {
  return !!(t && t.__v_isShallow);
}
function Eh() {
  if (typeof window > "u")
    return;
  const t = { style: "color:#3ba776" }, e = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, r = { style: "color:#9d288c" }, i = {
    header(g) {
      return Ie(g) ? g.__isVue ? ["div", t, "VueInstance"] : qe(g) ? [
        "div",
        {},
        ["span", t, h(g)],
        "<",
        u(g.value),
        ">"
      ] : _i(g) ? [
        "div",
        {},
        ["span", t, Oa(g) ? "ShallowReactive" : "Reactive"],
        "<",
        u(g),
        `>${Oi(g) ? " (readonly)" : ""}`
      ] : Oi(g) ? [
        "div",
        {},
        ["span", t, Oa(g) ? "ShallowReadonly" : "Readonly"],
        "<",
        u(g),
        ">"
      ] : null : null;
    },
    hasBody(g) {
      return g && g.__isVue;
    },
    body(g) {
      if (g && g.__isVue)
        return [
          "div",
          {},
          ...s(g.$)
        ];
    }
  };
  function s(g) {
    const y = [];
    g.type.props && g.props && y.push(c("props", ie(g.props))), g.setupState !== xe && y.push(c("setup", g.setupState)), g.data !== xe && y.push(c("data", ie(g.data)));
    const b = f(g, "computed");
    b && y.push(c("computed", b));
    const S = f(g, "inject");
    return S && y.push(c("injected", S)), y.push([
      "div",
      {},
      [
        "span",
        {
          style: r.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: g }]
    ]), y;
  }
  function c(g, y) {
    return y = ke({}, y), Object.keys(y).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        g
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(y).map((b) => [
          "div",
          {},
          ["span", r, b + ": "],
          u(y[b], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function u(g, y = !0) {
    return typeof g == "number" ? ["span", e, g] : typeof g == "string" ? ["span", n, JSON.stringify(g)] : typeof g == "boolean" ? ["span", r, g] : Ie(g) ? ["object", { object: y ? ie(g) : g }] : ["span", n, String(g)];
  }
  function f(g, y) {
    const b = g.type;
    if (te(b))
      return;
    const S = {};
    for (const U in g.ctx)
      m(b, U, y) && (S[U] = g.ctx[U]);
    return S;
  }
  function m(g, y, b) {
    const S = g[b];
    if (Q(S) && S.includes(y) || Ie(S) && y in S || g.extends && m(g.extends, y, b) || g.mixins && g.mixins.some((U) => m(U, y, b)))
      return !0;
  }
  function h(g) {
    return Oa(g) ? "ShallowRef" : g.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(i) : window.devtoolsFormatters = [i];
}
const fu = "3.3.4", bh = "http://www.w3.org/2000/svg", Ui = typeof document < "u" ? document : null, du = Ui && /* @__PURE__ */ Ui.createElement("template"), Nh = {
  insert: (t, e, n) => {
    e.insertBefore(t, n || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, n, r) => {
    const i = e ? Ui.createElementNS(bh, t) : Ui.createElement(t, n ? { is: n } : void 0);
    return t === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
  },
  createText: (t) => Ui.createTextNode(t),
  createComment: (t) => Ui.createComment(t),
  setText: (t, e) => {
    t.nodeValue = e;
  },
  setElementText: (t, e) => {
    t.textContent = e;
  },
  parentNode: (t) => t.parentNode,
  nextSibling: (t) => t.nextSibling,
  querySelector: (t) => Ui.querySelector(t),
  setScopeId(t, e) {
    t.setAttribute(e, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(t, e, n, r, i, s) {
    const c = n ? n.previousSibling : e.lastChild;
    if (i && (i === s || i.nextSibling))
      for (; e.insertBefore(i.cloneNode(!0), n), !(i === s || !(i = i.nextSibling)); )
        ;
    else {
      du.innerHTML = r ? `<svg>${t}</svg>` : t;
      const u = du.content;
      if (r) {
        const f = u.firstChild;
        for (; f.firstChild; )
          u.appendChild(f.firstChild);
        u.removeChild(f);
      }
      e.insertBefore(u, n);
    }
    return [
      // first
      c ? c.nextSibling : e.firstChild,
      // last
      n ? n.previousSibling : e.lastChild
    ];
  }
};
function xh(t, e, n) {
  const r = t._vtc;
  r && (e = (e ? [e, ...r] : [...r]).join(" ")), e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e;
}
function Bh(t, e, n) {
  const r = t.style, i = Ue(n);
  if (n && !i) {
    if (e && !Ue(e))
      for (const s in e)
        n[s] == null && tc(r, s, "");
    for (const s in n)
      tc(r, s, n[s]);
  } else {
    const s = r.display;
    i ? e !== n && (r.cssText = n) : e && t.removeAttribute("style"), "_vod" in t && (r.display = s);
  }
}
const Ih = /[^\\];\s*$/, mu = /\s*!important$/;
function tc(t, e, n) {
  if (Q(n))
    n.forEach((r) => tc(t, e, r));
  else if (n == null && (n = ""), Ih.test(n) && q(
    `Unexpected semicolon at the end of '${e}' style value: '${n}'`
  ), e.startsWith("--"))
    t.setProperty(e, n);
  else {
    const r = Oh(t, e);
    mu.test(n) ? t.setProperty(
      Bi(r),
      n.replace(mu, ""),
      "important"
    ) : t[r] = n;
  }
}
const hu = ["Webkit", "Moz", "ms"], ka = {};
function Oh(t, e) {
  const n = ka[e];
  if (n)
    return n;
  let r = ts(e);
  if (r !== "filter" && r in t)
    return ka[e] = r;
  r = sa(r);
  for (let i = 0; i < hu.length; i++) {
    const s = hu[i] + r;
    if (s in t)
      return ka[e] = s;
  }
  return e;
}
const pu = "http://www.w3.org/1999/xlink";
function kh(t, e, n, r, i) {
  if (r && e.startsWith("xlink:"))
    n == null ? t.removeAttributeNS(pu, e.slice(6, e.length)) : t.setAttributeNS(pu, e, n);
  else {
    const s = Yf(e);
    n == null || s && !Hu(n) ? t.removeAttribute(e) : t.setAttribute(e, s ? "" : n);
  }
}
function Sh(t, e, n, r, i, s, c) {
  if (e === "innerHTML" || e === "textContent") {
    r && c(r, i, s), t[e] = n ?? "";
    return;
  }
  const u = t.tagName;
  if (e === "value" && u !== "PROGRESS" && // custom elements may use _value internally
  !u.includes("-")) {
    t._value = n;
    const m = u === "OPTION" ? t.getAttribute("value") : t.value, h = n ?? "";
    m !== h && (t.value = h), n == null && t.removeAttribute(e);
    return;
  }
  let f = !1;
  if (n === "" || n == null) {
    const m = typeof t[e];
    m === "boolean" ? n = Hu(n) : n == null && m === "string" ? (n = "", f = !0) : m === "number" && (n = 0, f = !0);
  }
  try {
    t[e] = n;
  } catch (m) {
    f || q(
      `Failed setting prop "${e}" on <${u.toLowerCase()}>: value ${n} is invalid.`,
      m
    );
  }
  f && t.removeAttribute(e);
}
function vh(t, e, n, r) {
  t.addEventListener(e, n, r);
}
function Jh(t, e, n, r) {
  t.removeEventListener(e, n, r);
}
function Fh(t, e, n, r, i = null) {
  const s = t._vei || (t._vei = {}), c = s[e];
  if (r && c)
    c.value = r;
  else {
    const [u, f] = Ah(e);
    if (r) {
      const m = s[e] = Ch(r, i);
      vh(t, u, m, f);
    } else
      c && (Jh(t, u, c, f), s[e] = void 0);
  }
}
const gu = /(?:Once|Passive|Capture)$/;
function Ah(t) {
  let e;
  if (gu.test(t)) {
    e = {};
    let r;
    for (; r = t.match(gu); )
      t = t.slice(0, t.length - r[0].length), e[r[0].toLowerCase()] = !0;
  }
  return [t[2] === ":" ? t.slice(3) : Bi(t.slice(2)), e];
}
let Sa = 0;
const Uh = /* @__PURE__ */ Promise.resolve(), Lh = () => Sa || (Uh.then(() => Sa = 0), Sa = Date.now());
function Ch(t, e) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Et(
      Dh(r, n.value),
      e,
      5,
      [r]
    );
  };
  return n.value = t, n.attached = Lh(), n;
}
function Dh(t, e) {
  if (Q(e)) {
    const n = t.stopImmediatePropagation;
    return t.stopImmediatePropagation = () => {
      n.call(t), t._stopped = !0;
    }, e.map((r) => (i) => !i._stopped && r && r(i));
  } else
    return e;
}
const wu = /^on[a-z]/, _h = (t, e, n, r, i = !1, s, c, u, f) => {
  e === "class" ? xh(t, r, i) : e === "style" ? Bh(t, n, r) : wo(e) ? jo(e) || Fh(t, e, n, r, c) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : qh(t, e, r, i)) ? Sh(
    t,
    e,
    r,
    s,
    c,
    u,
    f
  ) : (e === "true-value" ? t._trueValue = r : e === "false-value" && (t._falseValue = r), kh(t, e, r, i));
};
function qh(t, e, n, r) {
  return r ? !!(e === "innerHTML" || e === "textContent" || e in t && wu.test(e) && te(n)) : e === "spellcheck" || e === "draggable" || e === "translate" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA" || wu.test(e) && Ue(n) ? !1 : e in t;
}
const Kh = /* @__PURE__ */ ke({ patchProp: _h }, Nh);
let yu;
function Ph() {
  return yu || (yu = jm(Kh));
}
const jl = (...t) => {
  const e = Ph().createApp(...t);
  $h(e), Mh(e);
  const { mount: n } = e;
  return e.mount = (r) => {
    const i = Vh(r);
    if (!i)
      return;
    const s = e._component;
    !te(s) && !s.render && !s.template && (s.template = i.innerHTML), i.innerHTML = "";
    const c = n(i, !1, i instanceof SVGElement);
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), c;
  }, e;
};
function $h(t) {
  Object.defineProperty(t.config, "isNativeTag", {
    value: (e) => Rf(e) || zf(e),
    writable: !1
  });
}
function Mh(t) {
  {
    const e = t.config.isCustomElement;
    Object.defineProperty(t.config, "isCustomElement", {
      get() {
        return e;
      },
      set() {
        q(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = t.config.compilerOptions, r = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(t.config, "compilerOptions", {
      get() {
        return q(r), n;
      },
      set() {
        q(r);
      }
    });
  }
}
function Vh(t) {
  if (Ue(t)) {
    const e = document.querySelector(t);
    return e || q(
      `Failed to mount app: mount target selector "${t}" returned null.`
    ), e;
  }
  return window.ShadowRoot && t instanceof window.ShadowRoot && t.mode === "closed" && q(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), t;
}
function Hh() {
  Eh();
}
Hh();
const jh = () => new Error("Config not initialized");
let Po;
const Rh = (t) => {
  if (t.codeSdk === void 0)
    throw new Error("codeSdk path is required");
  Po = Tt(t);
}, Eo = () => {
  if (!Po)
    throw jh;
  return {
    config: Po,
    codeSdk: () => Po.value.codeSdk
  };
};
class is {
  /**
   * Constructs an EventChannel.
   * @param id - Identifier for the connection.
   * @param targetWindow - The iframe element to communicate with. If not provided, communicates with parent window.
   */
  constructor(e = is.getId(), n) {
    this.listeners = {}, this.targetWindow = null, this.readyResolver = null, this.setTargetWindow = (r) => {
      this.readyPromise = new Promise((i) => {
        this.readyResolver = i;
      }), r != null && r.contentWindow ? (this.targetWindow = r.contentWindow, r.addEventListener("load", () => {
        this.readyResolver && this.readyResolver();
      })) : (this.targetWindow = window.parent, this.readyResolver && this.readyResolver());
    }, this.emit = async (r, i) => {
      var c;
      await this.ready(), this.targetWindow && this.targetWindow.postMessage({
        id: this.connectionId,
        type: "event",
        payload: { event: r, args: i }
      }, "*");
      const s = r;
      (c = this.listeners[s]) == null || c.forEach((u) => {
        try {
          u(i);
        } catch (f) {
          console.error(`Error in listener for event "${s}": ${f}`);
        }
      });
    }, this.on = (r, i) => {
      window.addEventListener("message", (c) => {
        c.data.type === "event" && c.data.payload.event === r && c.data.id === this.connectionId && i(c.data.payload.args);
      });
      const s = r;
      this.listeners[s] = [...this.listeners[s] || [], i];
    }, this.connectionId = e, this.setTargetWindow(n);
  }
  /**
   * Awaits until the event channel is ready.
   */
  async ready() {
    await this.readyPromise;
  }
  /**
   * Gets the connection identifier for this event channel.
   */
  get id() {
    return this.connectionId;
  }
}
is.getId = () => Math.random().toString(36).substring(2, 15);
function Qe(t, e) {
  if (!t)
    throw new Error(e);
}
const zh = 34028234663852886e22, Wh = -34028234663852886e22, Yh = 4294967295, Xh = 2147483647, Zh = -2147483648;
function $o(t) {
  if (typeof t != "number")
    throw new Error("invalid int 32: " + typeof t);
  if (!Number.isInteger(t) || t > Xh || t < Zh)
    throw new Error("invalid int 32: " + t);
}
function nc(t) {
  if (typeof t != "number")
    throw new Error("invalid uint 32: " + typeof t);
  if (!Number.isInteger(t) || t > Yh || t < 0)
    throw new Error("invalid uint 32: " + t);
}
function Rl(t) {
  if (typeof t != "number")
    throw new Error("invalid float 32: " + typeof t);
  if (Number.isFinite(t) && (t > zh || t < Wh))
    throw new Error("invalid float 32: " + t);
}
const zl = Symbol("@bufbuild/protobuf/enum-type");
function Gh(t) {
  const e = t[zl];
  return Qe(e, "missing enum type on enum object"), e;
}
function Wl(t, e, n, r) {
  t[zl] = Yl(e, n.map((i) => ({
    no: i.no,
    name: i.name,
    localName: t[i.no]
  })));
}
function Yl(t, e, n) {
  const r = /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null), s = [];
  for (const c of e) {
    const u = Xl(c);
    s.push(u), r[c.name] = u, i[c.no] = u;
  }
  return {
    typeName: t,
    values: s,
    // We do not surface options at this time
    // options: opt?.options ?? Object.create(null),
    findName(c) {
      return r[c];
    },
    findNumber(c) {
      return i[c];
    }
  };
}
function Qh(t, e, n) {
  const r = {};
  for (const i of e) {
    const s = Xl(i);
    r[s.localName] = s.no, r[s.no] = s.localName;
  }
  return Wl(r, t, e), r;
}
function Xl(t) {
  return "localName" in t ? t : Object.assign(Object.assign({}, t), { localName: t.name });
}
let x = class {
  /**
   * Compare with a message of the same type.
   */
  equals(e) {
    return this.getType().runtime.util.equals(this.getType(), this, e);
  }
  /**
   * Create a deep copy.
   */
  clone() {
    return this.getType().runtime.util.clone(this);
  }
  /**
   * Parse from binary data, merging fields.
   *
   * Repeated fields are appended. Map entries are added, overwriting
   * existing keys.
   *
   * If a message field is already present, it will be merged with the
   * new data.
   */
  fromBinary(e, n) {
    const r = this.getType(), i = r.runtime.bin, s = i.makeReadOptions(n);
    return i.readMessage(this, s.readerFactory(e), e.byteLength, s), this;
  }
  /**
   * Parse a message from a JSON value.
   */
  fromJson(e, n) {
    const r = this.getType(), i = r.runtime.json, s = i.makeReadOptions(n);
    return i.readMessage(r, e, s, this), this;
  }
  /**
   * Parse a message from a JSON string.
   */
  fromJsonString(e, n) {
    let r;
    try {
      r = JSON.parse(e);
    } catch (i) {
      throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${i instanceof Error ? i.message : String(i)}`);
    }
    return this.fromJson(r, n);
  }
  /**
   * Serialize the message to binary data.
   */
  toBinary(e) {
    const n = this.getType(), r = n.runtime.bin, i = r.makeWriteOptions(e), s = i.writerFactory();
    return r.writeMessage(this, s, i), s.finish();
  }
  /**
   * Serialize the message to a JSON value, a JavaScript value that can be
   * passed to JSON.stringify().
   */
  toJson(e) {
    const n = this.getType(), r = n.runtime.json, i = r.makeWriteOptions(e);
    return r.writeMessage(this, i);
  }
  /**
   * Serialize the message to a JSON string.
   */
  toJsonString(e) {
    var n;
    const r = this.toJson(e);
    return JSON.stringify(r, null, (n = e == null ? void 0 : e.prettySpaces) !== null && n !== void 0 ? n : 0);
  }
  /**
   * Override for serialization behavior. This will be invoked when calling
   * JSON.stringify on this message (i.e. JSON.stringify(msg)).
   *
   * Note that this will not serialize google.protobuf.Any with a packed
   * message because the protobuf JSON format specifies that it needs to be
   * unpacked, and this is only possible with a type registry to look up the
   * message type.  As a result, attempting to serialize a message with this
   * type will throw an Error.
   *
   * This method is protected because you should not need to invoke it
   * directly -- instead use JSON.stringify or toJsonString for
   * stringified JSON.  Alternatively, if actual JSON is desired, you should
   * use toJson.
   */
  toJSON() {
    return this.toJson({
      emitDefaultValues: !0
    });
  }
  /**
   * Retrieve the MessageType of this message - a singleton that represents
   * the protobuf message declaration and provides metadata for reflection-
   * based operations.
   */
  getType() {
    return Object.getPrototypeOf(this).constructor;
  }
};
function ep(t, e, n, r) {
  var i;
  const s = (i = r == null ? void 0 : r.localName) !== null && i !== void 0 ? i : e.substring(e.lastIndexOf(".") + 1), c = {
    [s]: function(u) {
      t.util.initFields(this), t.util.initPartial(u, this);
    }
  }[s];
  return Object.setPrototypeOf(c.prototype, new x()), Object.assign(c, {
    runtime: t,
    typeName: e,
    fields: t.util.newFieldList(n),
    fromBinary(u, f) {
      return new c().fromBinary(u, f);
    },
    fromJson(u, f) {
      return new c().fromJson(u, f);
    },
    fromJsonString(u, f) {
      return new c().fromJsonString(u, f);
    },
    equals(u, f) {
      return t.util.equals(c, u, f);
    }
  }), c;
}
function tp(t, e, n, r) {
  return {
    syntax: t,
    json: e,
    bin: n,
    util: r,
    makeMessageType(i, s, c) {
      return ep(this, i, s, c);
    },
    makeEnum: Qh,
    makeEnumType: Yl,
    getEnumType: Gh
  };
}
var v;
(function(t) {
  t[t.DOUBLE = 1] = "DOUBLE", t[t.FLOAT = 2] = "FLOAT", t[t.INT64 = 3] = "INT64", t[t.UINT64 = 4] = "UINT64", t[t.INT32 = 5] = "INT32", t[t.FIXED64 = 6] = "FIXED64", t[t.FIXED32 = 7] = "FIXED32", t[t.BOOL = 8] = "BOOL", t[t.STRING = 9] = "STRING", t[t.BYTES = 12] = "BYTES", t[t.UINT32 = 13] = "UINT32", t[t.SFIXED32 = 15] = "SFIXED32", t[t.SFIXED64 = 16] = "SFIXED64", t[t.SINT32 = 17] = "SINT32", t[t.SINT64 = 18] = "SINT64";
})(v || (v = {}));
function np() {
  let t = 0, e = 0;
  for (let r = 0; r < 28; r += 7) {
    let i = this.buf[this.pos++];
    if (t |= (i & 127) << r, !(i & 128))
      return this.assertBounds(), [t, e];
  }
  let n = this.buf[this.pos++];
  if (t |= (n & 15) << 28, e = (n & 112) >> 4, !(n & 128))
    return this.assertBounds(), [t, e];
  for (let r = 3; r <= 31; r += 7) {
    let i = this.buf[this.pos++];
    if (e |= (i & 127) << r, !(i & 128))
      return this.assertBounds(), [t, e];
  }
  throw new Error("invalid varint");
}
function va(t, e, n) {
  for (let s = 0; s < 28; s = s + 7) {
    const c = t >>> s, u = !(!(c >>> 7) && e == 0), f = (u ? c | 128 : c) & 255;
    if (n.push(f), !u)
      return;
  }
  const r = t >>> 28 & 15 | (e & 7) << 4, i = !!(e >> 3);
  if (n.push((i ? r | 128 : r) & 255), !!i) {
    for (let s = 3; s < 31; s = s + 7) {
      const c = e >>> s, u = !!(c >>> 7), f = (u ? c | 128 : c) & 255;
      if (n.push(f), !u)
        return;
    }
    n.push(e >>> 31 & 1);
  }
}
const Mo = 4294967296;
function Tu(t) {
  const e = t[0] === "-";
  e && (t = t.slice(1));
  const n = 1e6;
  let r = 0, i = 0;
  function s(c, u) {
    const f = Number(t.slice(c, u));
    i *= n, r = r * n + f, r >= Mo && (i = i + (r / Mo | 0), r = r % Mo);
  }
  return s(-24, -18), s(-18, -12), s(-12, -6), s(-6), e ? Gl(r, i) : Uc(r, i);
}
function rp(t, e) {
  let n = Uc(t, e);
  const r = n.hi & 2147483648;
  r && (n = Gl(n.lo, n.hi));
  const i = Zl(n.lo, n.hi);
  return r ? "-" + i : i;
}
function Zl(t, e) {
  if ({ lo: t, hi: e } = ip(t, e), e <= 2097151)
    return String(Mo * e + t);
  const n = t & 16777215, r = (t >>> 24 | e << 8) & 16777215, i = e >> 16 & 65535;
  let s = n + r * 6777216 + i * 6710656, c = r + i * 8147497, u = i * 2;
  const f = 1e7;
  return s >= f && (c += Math.floor(s / f), s %= f), c >= f && (u += Math.floor(c / f), c %= f), u.toString() + Eu(c) + Eu(s);
}
function ip(t, e) {
  return { lo: t >>> 0, hi: e >>> 0 };
}
function Uc(t, e) {
  return { lo: t | 0, hi: e | 0 };
}
function Gl(t, e) {
  return e = ~e, t ? t = ~t + 1 : e += 1, Uc(t, e);
}
const Eu = (t) => {
  const e = String(t);
  return "0000000".slice(e.length) + e;
};
function bu(t, e) {
  if (t >= 0) {
    for (; t > 127; )
      e.push(t & 127 | 128), t = t >>> 7;
    e.push(t);
  } else {
    for (let n = 0; n < 9; n++)
      e.push(t & 127 | 128), t = t >> 7;
    e.push(1);
  }
}
function sp() {
  let t = this.buf[this.pos++], e = t & 127;
  if (!(t & 128))
    return this.assertBounds(), e;
  if (t = this.buf[this.pos++], e |= (t & 127) << 7, !(t & 128))
    return this.assertBounds(), e;
  if (t = this.buf[this.pos++], e |= (t & 127) << 14, !(t & 128))
    return this.assertBounds(), e;
  if (t = this.buf[this.pos++], e |= (t & 127) << 21, !(t & 128))
    return this.assertBounds(), e;
  t = this.buf[this.pos++], e |= (t & 15) << 28;
  for (let n = 5; t & 128 && n < 10; n++)
    t = this.buf[this.pos++];
  if (t & 128)
    throw new Error("invalid varint");
  return this.assertBounds(), e >>> 0;
}
function op() {
  const t = new DataView(new ArrayBuffer(8));
  if (typeof BigInt == "function" && typeof t.getBigInt64 == "function" && typeof t.getBigUint64 == "function" && typeof t.setBigInt64 == "function" && typeof t.setBigUint64 == "function" && (typeof process != "object" || typeof { NODE_ENV: '"production"', SDK_PATH: "https://sdk.getcode.com/v1/elements" } != "object" || { NODE_ENV: '"production"', SDK_PATH: "https://sdk.getcode.com/v1/elements" }.BUF_BIGINT_DISABLE !== "1")) {
    const i = BigInt("-9223372036854775808"), s = BigInt("9223372036854775807"), c = BigInt("0"), u = BigInt("18446744073709551615");
    return {
      zero: BigInt(0),
      supported: !0,
      parse(f) {
        const m = typeof f == "bigint" ? f : BigInt(f);
        if (m > s || m < i)
          throw new Error(`int64 invalid: ${f}`);
        return m;
      },
      uParse(f) {
        const m = typeof f == "bigint" ? f : BigInt(f);
        if (m > u || m < c)
          throw new Error(`uint64 invalid: ${f}`);
        return m;
      },
      enc(f) {
        return t.setBigInt64(0, this.parse(f), !0), {
          lo: t.getInt32(0, !0),
          hi: t.getInt32(4, !0)
        };
      },
      uEnc(f) {
        return t.setBigInt64(0, this.uParse(f), !0), {
          lo: t.getInt32(0, !0),
          hi: t.getInt32(4, !0)
        };
      },
      dec(f, m) {
        return t.setInt32(0, f, !0), t.setInt32(4, m, !0), t.getBigInt64(0, !0);
      },
      uDec(f, m) {
        return t.setInt32(0, f, !0), t.setInt32(4, m, !0), t.getBigUint64(0, !0);
      }
    };
  }
  const n = (i) => Qe(/^-?[0-9]+$/.test(i), `int64 invalid: ${i}`), r = (i) => Qe(/^[0-9]+$/.test(i), `uint64 invalid: ${i}`);
  return {
    zero: "0",
    supported: !1,
    parse(i) {
      return typeof i != "string" && (i = i.toString()), n(i), i;
    },
    uParse(i) {
      return typeof i != "string" && (i = i.toString()), r(i), i;
    },
    enc(i) {
      return typeof i != "string" && (i = i.toString()), n(i), Tu(i);
    },
    uEnc(i) {
      return typeof i != "string" && (i = i.toString()), r(i), Tu(i);
    },
    dec(i, s) {
      return rp(i, s);
    },
    uDec(i, s) {
      return Zl(i, s);
    }
  };
}
const de = op();
var Fe;
(function(t) {
  t[t.Varint = 0] = "Varint", t[t.Bit64 = 1] = "Bit64", t[t.LengthDelimited = 2] = "LengthDelimited", t[t.StartGroup = 3] = "StartGroup", t[t.EndGroup = 4] = "EndGroup", t[t.Bit32 = 5] = "Bit32";
})(Fe || (Fe = {}));
class ap {
  constructor(e) {
    this.stack = [], this.textEncoder = e ?? new TextEncoder(), this.chunks = [], this.buf = [];
  }
  /**
   * Return all bytes written and reset this writer.
   */
  finish() {
    this.chunks.push(new Uint8Array(this.buf));
    let e = 0;
    for (let i = 0; i < this.chunks.length; i++)
      e += this.chunks[i].length;
    let n = new Uint8Array(e), r = 0;
    for (let i = 0; i < this.chunks.length; i++)
      n.set(this.chunks[i], r), r += this.chunks[i].length;
    return this.chunks = [], n;
  }
  /**
   * Start a new fork for length-delimited data like a message
   * or a packed repeated field.
   *
   * Must be joined later with `join()`.
   */
  fork() {
    return this.stack.push({ chunks: this.chunks, buf: this.buf }), this.chunks = [], this.buf = [], this;
  }
  /**
   * Join the last fork. Write its length and bytes, then
   * return to the previous state.
   */
  join() {
    let e = this.finish(), n = this.stack.pop();
    if (!n)
      throw new Error("invalid state, fork stack empty");
    return this.chunks = n.chunks, this.buf = n.buf, this.uint32(e.byteLength), this.raw(e);
  }
  /**
   * Writes a tag (field number and wire type).
   *
   * Equivalent to `uint32( (fieldNo << 3 | type) >>> 0 )`.
   *
   * Generated code should compute the tag ahead of time and call `uint32()`.
   */
  tag(e, n) {
    return this.uint32((e << 3 | n) >>> 0);
  }
  /**
   * Write a chunk of raw bytes.
   */
  raw(e) {
    return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []), this.chunks.push(e), this;
  }
  /**
   * Write a `uint32` value, an unsigned 32 bit varint.
   */
  uint32(e) {
    for (nc(e); e > 127; )
      this.buf.push(e & 127 | 128), e = e >>> 7;
    return this.buf.push(e), this;
  }
  /**
   * Write a `int32` value, a signed 32 bit varint.
   */
  int32(e) {
    return $o(e), bu(e, this.buf), this;
  }
  /**
   * Write a `bool` value, a variant.
   */
  bool(e) {
    return this.buf.push(e ? 1 : 0), this;
  }
  /**
   * Write a `bytes` value, length-delimited arbitrary data.
   */
  bytes(e) {
    return this.uint32(e.byteLength), this.raw(e);
  }
  /**
   * Write a `string` value, length-delimited data converted to UTF-8 text.
   */
  string(e) {
    let n = this.textEncoder.encode(e);
    return this.uint32(n.byteLength), this.raw(n);
  }
  /**
   * Write a `float` value, 32-bit floating point number.
   */
  float(e) {
    Rl(e);
    let n = new Uint8Array(4);
    return new DataView(n.buffer).setFloat32(0, e, !0), this.raw(n);
  }
  /**
   * Write a `double` value, a 64-bit floating point number.
   */
  double(e) {
    let n = new Uint8Array(8);
    return new DataView(n.buffer).setFloat64(0, e, !0), this.raw(n);
  }
  /**
   * Write a `fixed32` value, an unsigned, fixed-length 32-bit integer.
   */
  fixed32(e) {
    nc(e);
    let n = new Uint8Array(4);
    return new DataView(n.buffer).setUint32(0, e, !0), this.raw(n);
  }
  /**
   * Write a `sfixed32` value, a signed, fixed-length 32-bit integer.
   */
  sfixed32(e) {
    $o(e);
    let n = new Uint8Array(4);
    return new DataView(n.buffer).setInt32(0, e, !0), this.raw(n);
  }
  /**
   * Write a `sint32` value, a signed, zigzag-encoded 32-bit varint.
   */
  sint32(e) {
    return $o(e), e = (e << 1 ^ e >> 31) >>> 0, bu(e, this.buf), this;
  }
  /**
   * Write a `fixed64` value, a signed, fixed-length 64-bit integer.
   */
  sfixed64(e) {
    let n = new Uint8Array(8), r = new DataView(n.buffer), i = de.enc(e);
    return r.setInt32(0, i.lo, !0), r.setInt32(4, i.hi, !0), this.raw(n);
  }
  /**
   * Write a `fixed64` value, an unsigned, fixed-length 64 bit integer.
   */
  fixed64(e) {
    let n = new Uint8Array(8), r = new DataView(n.buffer), i = de.uEnc(e);
    return r.setInt32(0, i.lo, !0), r.setInt32(4, i.hi, !0), this.raw(n);
  }
  /**
   * Write a `int64` value, a signed 64-bit varint.
   */
  int64(e) {
    let n = de.enc(e);
    return va(n.lo, n.hi, this.buf), this;
  }
  /**
   * Write a `sint64` value, a signed, zig-zag-encoded 64-bit varint.
   */
  sint64(e) {
    let n = de.enc(e), r = n.hi >> 31, i = n.lo << 1 ^ r, s = (n.hi << 1 | n.lo >>> 31) ^ r;
    return va(i, s, this.buf), this;
  }
  /**
   * Write a `uint64` value, an unsigned 64-bit varint.
   */
  uint64(e) {
    let n = de.uEnc(e);
    return va(n.lo, n.hi, this.buf), this;
  }
}
class cp {
  constructor(e, n) {
    this.varint64 = np, this.uint32 = sp, this.buf = e, this.len = e.length, this.pos = 0, this.view = new DataView(e.buffer, e.byteOffset, e.byteLength), this.textDecoder = n ?? new TextDecoder();
  }
  /**
   * Reads a tag - field number and wire type.
   */
  tag() {
    let e = this.uint32(), n = e >>> 3, r = e & 7;
    if (n <= 0 || r < 0 || r > 5)
      throw new Error("illegal tag: field no " + n + " wire type " + r);
    return [n, r];
  }
  /**
   * Skip one element on the wire and return the skipped data.
   * Supports WireType.StartGroup since v2.0.0-alpha.23.
   */
  skip(e) {
    let n = this.pos;
    switch (e) {
      case Fe.Varint:
        for (; this.buf[this.pos++] & 128; )
          ;
        break;
      case Fe.Bit64:
        this.pos += 4;
      case Fe.Bit32:
        this.pos += 4;
        break;
      case Fe.LengthDelimited:
        let r = this.uint32();
        this.pos += r;
        break;
      case Fe.StartGroup:
        let i;
        for (; (i = this.tag()[1]) !== Fe.EndGroup; )
          this.skip(i);
        break;
      default:
        throw new Error("cant skip wire type " + e);
    }
    return this.assertBounds(), this.buf.subarray(n, this.pos);
  }
  /**
   * Throws error if position in byte array is out of range.
   */
  assertBounds() {
    if (this.pos > this.len)
      throw new RangeError("premature EOF");
  }
  /**
   * Read a `int32` field, a signed 32 bit varint.
   */
  int32() {
    return this.uint32() | 0;
  }
  /**
   * Read a `sint32` field, a signed, zigzag-encoded 32-bit varint.
   */
  sint32() {
    let e = this.uint32();
    return e >>> 1 ^ -(e & 1);
  }
  /**
   * Read a `int64` field, a signed 64-bit varint.
   */
  int64() {
    return de.dec(...this.varint64());
  }
  /**
   * Read a `uint64` field, an unsigned 64-bit varint.
   */
  uint64() {
    return de.uDec(...this.varint64());
  }
  /**
   * Read a `sint64` field, a signed, zig-zag-encoded 64-bit varint.
   */
  sint64() {
    let [e, n] = this.varint64(), r = -(e & 1);
    return e = (e >>> 1 | (n & 1) << 31) ^ r, n = n >>> 1 ^ r, de.dec(e, n);
  }
  /**
   * Read a `bool` field, a variant.
   */
  bool() {
    let [e, n] = this.varint64();
    return e !== 0 || n !== 0;
  }
  /**
   * Read a `fixed32` field, an unsigned, fixed-length 32-bit integer.
   */
  fixed32() {
    return this.view.getUint32((this.pos += 4) - 4, !0);
  }
  /**
   * Read a `sfixed32` field, a signed, fixed-length 32-bit integer.
   */
  sfixed32() {
    return this.view.getInt32((this.pos += 4) - 4, !0);
  }
  /**
   * Read a `fixed64` field, an unsigned, fixed-length 64 bit integer.
   */
  fixed64() {
    return de.uDec(this.sfixed32(), this.sfixed32());
  }
  /**
   * Read a `fixed64` field, a signed, fixed-length 64-bit integer.
   */
  sfixed64() {
    return de.dec(this.sfixed32(), this.sfixed32());
  }
  /**
   * Read a `float` field, 32-bit floating point number.
   */
  float() {
    return this.view.getFloat32((this.pos += 4) - 4, !0);
  }
  /**
   * Read a `double` field, a 64-bit floating point number.
   */
  double() {
    return this.view.getFloat64((this.pos += 8) - 8, !0);
  }
  /**
   * Read a `bytes` field, length-delimited arbitrary data.
   */
  bytes() {
    let e = this.uint32(), n = this.pos;
    return this.pos += e, this.assertBounds(), this.buf.subarray(n, n + e);
  }
  /**
   * Read a `string` field, length-delimited data converted to UTF-8 text.
   */
  string() {
    return this.textDecoder.decode(this.bytes());
  }
}
function rc(t, e) {
  return e instanceof x || !t.fieldWrapper ? e : t.fieldWrapper.wrapField(e);
}
v.DOUBLE, v.FLOAT, v.INT64, v.UINT64, v.INT32, v.UINT32, v.BOOL, v.STRING, v.BYTES;
function ci(t, e, n) {
  if (e === n)
    return !0;
  if (t == v.BYTES) {
    if (!(e instanceof Uint8Array) || !(n instanceof Uint8Array) || e.length !== n.length)
      return !1;
    for (let r = 0; r < e.length; r++)
      if (e[r] !== n[r])
        return !1;
    return !0;
  }
  switch (t) {
    case v.UINT64:
    case v.FIXED64:
    case v.INT64:
    case v.SFIXED64:
    case v.SINT64:
      return e == n;
  }
  return !1;
}
function ic(t) {
  switch (t) {
    case v.BOOL:
      return !1;
    case v.UINT64:
    case v.FIXED64:
    case v.INT64:
    case v.SFIXED64:
    case v.SINT64:
      return de.zero;
    case v.DOUBLE:
    case v.FLOAT:
      return 0;
    case v.BYTES:
      return new Uint8Array(0);
    case v.STRING:
      return "";
    default:
      return 0;
  }
}
function Ql(t, e) {
  const n = e === void 0;
  let r = Fe.Varint, i = e === 0;
  switch (t) {
    case v.STRING:
      i = n || !e.length, r = Fe.LengthDelimited;
      break;
    case v.BOOL:
      i = e === !1;
      break;
    case v.DOUBLE:
      r = Fe.Bit64;
      break;
    case v.FLOAT:
      r = Fe.Bit32;
      break;
    case v.INT64:
      i = n || e == 0;
      break;
    case v.UINT64:
      i = n || e == 0;
      break;
    case v.FIXED64:
      i = n || e == 0, r = Fe.Bit64;
      break;
    case v.BYTES:
      i = n || !e.byteLength, r = Fe.LengthDelimited;
      break;
    case v.FIXED32:
      r = Fe.Bit32;
      break;
    case v.SFIXED32:
      r = Fe.Bit32;
      break;
    case v.SFIXED64:
      i = n || e == 0, r = Fe.Bit64;
      break;
    case v.SINT64:
      i = n || e == 0;
      break;
  }
  const s = v[t].toLowerCase();
  return [r, s, n || i];
}
const ji = Symbol("@bufbuild/protobuf/unknown-fields"), Nu = {
  readUnknownFields: !0,
  readerFactory: (t) => new cp(t)
}, xu = {
  writeUnknownFields: !0,
  writerFactory: () => new ap()
};
function up(t) {
  return t ? Object.assign(Object.assign({}, Nu), t) : Nu;
}
function lp(t) {
  return t ? Object.assign(Object.assign({}, xu), t) : xu;
}
function fp() {
  return {
    makeReadOptions: up,
    makeWriteOptions: lp,
    listUnknownFields(t) {
      var e;
      return (e = t[ji]) !== null && e !== void 0 ? e : [];
    },
    discardUnknownFields(t) {
      delete t[ji];
    },
    writeUnknownFields(t, e) {
      const r = t[ji];
      if (r)
        for (const i of r)
          e.tag(i.no, i.wireType).raw(i.data);
    },
    onUnknownField(t, e, n, r) {
      const i = t;
      Array.isArray(i[ji]) || (i[ji] = []), i[ji].push({ no: e, wireType: n, data: r });
    },
    readMessage(t, e, n, r) {
      const i = t.getType(), s = n === void 0 ? e.len : e.pos + n;
      for (; e.pos < s; ) {
        const [c, u] = e.tag(), f = i.fields.find(c);
        if (!f) {
          const y = e.skip(u);
          r.readUnknownFields && this.onUnknownField(t, c, u, y);
          continue;
        }
        let m = t, h = f.repeated, g = f.localName;
        switch (f.oneof && (m = m[f.oneof.localName], m.case != g && delete m.value, m.case = g, g = "value"), f.kind) {
          case "scalar":
          case "enum":
            const y = f.kind == "enum" ? v.INT32 : f.T;
            if (h) {
              let $ = m[g];
              if (u == Fe.LengthDelimited && y != v.STRING && y != v.BYTES) {
                let R = e.uint32() + e.pos;
                for (; e.pos < R; )
                  $.push(ys(e, y));
              } else
                $.push(ys(e, y));
            } else
              m[g] = ys(e, y);
            break;
          case "message":
            const b = f.T;
            h ? m[g].push(Vo(e, new b(), r)) : m[g] instanceof x ? Vo(e, m[g], r) : (m[g] = Vo(e, new b(), r), b.fieldWrapper && !f.oneof && !f.repeated && (m[g] = b.fieldWrapper.unwrapField(m[g])));
            break;
          case "map":
            let [S, U] = dp(f, e, r);
            m[g][S] = U;
            break;
        }
      }
    }
  };
}
function Vo(t, e, n) {
  return e.getType().runtime.bin.readMessage(e, t, t.uint32(), n), e;
}
function dp(t, e, n) {
  const r = e.uint32(), i = e.pos + r;
  let s, c;
  for (; e.pos < i; ) {
    let [u] = e.tag();
    switch (u) {
      case 1:
        s = ys(e, t.K);
        break;
      case 2:
        switch (t.V.kind) {
          case "scalar":
            c = ys(e, t.V.T);
            break;
          case "enum":
            c = e.int32();
            break;
          case "message":
            c = Vo(e, new t.V.T(), n);
            break;
        }
        break;
    }
  }
  if (s === void 0) {
    let u = ic(t.K);
    s = t.K == v.BOOL ? u.toString() : u;
  }
  if (typeof s != "string" && typeof s != "number" && (s = s.toString()), c === void 0)
    switch (t.V.kind) {
      case "scalar":
        c = ic(t.V.T);
        break;
      case "enum":
        c = 0;
        break;
      case "message":
        c = new t.V.T();
        break;
    }
  return [s, c];
}
function ys(t, e) {
  switch (e) {
    case v.STRING:
      return t.string();
    case v.BOOL:
      return t.bool();
    case v.DOUBLE:
      return t.double();
    case v.FLOAT:
      return t.float();
    case v.INT32:
      return t.int32();
    case v.INT64:
      return t.int64();
    case v.UINT64:
      return t.uint64();
    case v.FIXED64:
      return t.fixed64();
    case v.BYTES:
      return t.bytes();
    case v.FIXED32:
      return t.fixed32();
    case v.SFIXED32:
      return t.sfixed32();
    case v.SFIXED64:
      return t.sfixed64();
    case v.SINT64:
      return t.sint64();
    case v.UINT32:
      return t.uint32();
    case v.SINT32:
      return t.sint32();
  }
}
function mp(t, e, n, r, i) {
  t.tag(n.no, Fe.LengthDelimited), t.fork();
  let s = r;
  switch (n.K) {
    case v.INT32:
    case v.FIXED32:
    case v.UINT32:
    case v.SFIXED32:
    case v.SINT32:
      s = Number.parseInt(r);
      break;
    case v.BOOL:
      Qe(r == "true" || r == "false"), s = r == "true";
      break;
  }
  switch (Ts(t, n.K, 1, s, !0), n.V.kind) {
    case "scalar":
      Ts(t, n.V.T, 2, i, !0);
      break;
    case "enum":
      Ts(t, v.INT32, 2, i, !0);
      break;
    case "message":
      sc(t, e, n.V.T, 2, i);
      break;
  }
  t.join();
}
function sc(t, e, n, r, i) {
  if (i !== void 0) {
    const s = rc(n, i);
    t.tag(r, Fe.LengthDelimited).bytes(s.toBinary(e));
  }
}
function Ts(t, e, n, r, i) {
  let [s, c, u] = Ql(e, r);
  (!u || i) && t.tag(n, s)[c](r);
}
function hp(t, e, n, r) {
  if (!r.length)
    return;
  t.tag(n, Fe.LengthDelimited).fork();
  let [, i] = Ql(e);
  for (let s = 0; s < r.length; s++)
    t[i](r[s]);
  t.join();
}
function pp() {
  return Object.assign(Object.assign({}, fp()), { writeMessage(t, e, n) {
    const r = t.getType();
    for (const i of r.fields.byNumber()) {
      let s, c = i.repeated, u = i.localName;
      if (i.oneof) {
        const f = t[i.oneof.localName];
        if (f.case !== u)
          continue;
        s = f.value;
      } else
        s = t[u];
      switch (i.kind) {
        case "scalar":
        case "enum":
          let f = i.kind == "enum" ? v.INT32 : i.T;
          if (c)
            if (i.packed)
              hp(e, f, i.no, s);
            else
              for (const m of s)
                Ts(e, f, i.no, m, !0);
          else
            s !== void 0 && Ts(e, f, i.no, s, !!i.oneof || i.opt);
          break;
        case "message":
          if (c)
            for (const m of s)
              sc(e, n, i.T, i.no, m);
          else
            sc(e, n, i.T, i.no, s);
          break;
        case "map":
          for (const [m, h] of Object.entries(s))
            mp(e, n, i, m, h);
          break;
      }
    }
    return n.writeUnknownFields && this.writeUnknownFields(t, e), e;
  } });
}
let Rt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), ya = [];
for (let t = 0; t < Rt.length; t++)
  ya[Rt[t].charCodeAt(0)] = t;
ya["-".charCodeAt(0)] = Rt.indexOf("+");
ya["_".charCodeAt(0)] = Rt.indexOf("/");
const ef = {
  /**
   * Decodes a base64 string to a byte array.
   *
   * - ignores white-space, including line breaks and tabs
   * - allows inner padding (can decode concatenated base64 strings)
   * - does not require padding
   * - understands base64url encoding:
   *   "-" instead of "+",
   *   "_" instead of "/",
   *   no padding
   */
  dec(t) {
    let e = t.length * 3 / 4;
    t[t.length - 2] == "=" ? e -= 2 : t[t.length - 1] == "=" && (e -= 1);
    let n = new Uint8Array(e), r = 0, i = 0, s, c = 0;
    for (let u = 0; u < t.length; u++) {
      if (s = ya[t.charCodeAt(u)], s === void 0)
        switch (t[u]) {
          case "=":
            i = 0;
          case `
`:
          case "\r":
          case "	":
          case " ":
            continue;
          default:
            throw Error("invalid base64 string.");
        }
      switch (i) {
        case 0:
          c = s, i = 1;
          break;
        case 1:
          n[r++] = c << 2 | (s & 48) >> 4, c = s, i = 2;
          break;
        case 2:
          n[r++] = (c & 15) << 4 | (s & 60) >> 2, c = s, i = 3;
          break;
        case 3:
          n[r++] = (c & 3) << 6 | s, i = 0;
          break;
      }
    }
    if (i == 1)
      throw Error("invalid base64 string.");
    return n.subarray(0, r);
  },
  /**
   * Encode a byte array to a base64 string.
   */
  enc(t) {
    let e = "", n = 0, r, i = 0;
    for (let s = 0; s < t.length; s++)
      switch (r = t[s], n) {
        case 0:
          e += Rt[r >> 2], i = (r & 3) << 4, n = 1;
          break;
        case 1:
          e += Rt[i | r >> 4], i = (r & 15) << 2, n = 2;
          break;
        case 2:
          e += Rt[i | r >> 6], e += Rt[r & 63], n = 0;
          break;
      }
    return n && (e += Rt[i], e += "=", n == 1 && (e += "=")), e;
  }
}, Bu = {
  ignoreUnknownFields: !1
}, Iu = {
  emitDefaultValues: !1,
  enumAsInteger: !1,
  useProtoFieldName: !1,
  prettySpaces: 0
};
function gp(t) {
  return t ? Object.assign(Object.assign({}, Bu), t) : Bu;
}
function wp(t) {
  return t ? Object.assign(Object.assign({}, Iu), t) : Iu;
}
function yp(t) {
  const e = t(Tp, Ou);
  return {
    makeReadOptions: gp,
    makeWriteOptions: wp,
    readMessage(n, r, i, s) {
      if (r == null || Array.isArray(r) || typeof r != "object")
        throw new Error(`cannot decode message ${n.typeName} from JSON: ${this.debug(r)}`);
      s = s ?? new n();
      const c = {};
      for (const [u, f] of Object.entries(r)) {
        const m = n.fields.findJsonName(u);
        if (!m) {
          if (!i.ignoreUnknownFields)
            throw new Error(`cannot decode message ${n.typeName} from JSON: key "${u}" is unknown`);
          continue;
        }
        let h = m.localName, g = s;
        if (m.oneof) {
          if (f === null && m.kind == "scalar")
            continue;
          const y = c[m.oneof.localName];
          if (y)
            throw new Error(`cannot decode message ${n.typeName} from JSON: multiple keys for oneof "${m.oneof.name}" present: "${y}", "${u}"`);
          c[m.oneof.localName] = u, g = g[m.oneof.localName] = { case: h }, h = "value";
        }
        if (m.repeated) {
          if (f === null)
            continue;
          if (!Array.isArray(f))
            throw new Error(`cannot decode field ${n.typeName}.${m.name} from JSON: ${this.debug(f)}`);
          const y = g[h];
          for (const b of f) {
            if (b === null)
              throw new Error(`cannot decode field ${n.typeName}.${m.name} from JSON: ${this.debug(b)}`);
            let S;
            switch (m.kind) {
              case "message":
                S = m.T.fromJson(b, i);
                break;
              case "enum":
                if (S = Ja(m.T, b, i.ignoreUnknownFields), S === void 0)
                  continue;
                break;
              case "scalar":
                try {
                  S = cs(m.T, b);
                } catch (U) {
                  let $ = `cannot decode field ${n.typeName}.${m.name} from JSON: ${this.debug(b)}`;
                  throw U instanceof Error && U.message.length > 0 && ($ += `: ${U.message}`), new Error($);
                }
                break;
            }
            y.push(S);
          }
        } else if (m.kind == "map") {
          if (f === null)
            continue;
          if (Array.isArray(f) || typeof f != "object")
            throw new Error(`cannot decode field ${n.typeName}.${m.name} from JSON: ${this.debug(f)}`);
          const y = g[h];
          for (const [b, S] of Object.entries(f)) {
            if (S === null)
              throw new Error(`cannot decode field ${n.typeName}.${m.name} from JSON: map value null`);
            let U;
            switch (m.V.kind) {
              case "message":
                U = m.V.T.fromJson(S, i);
                break;
              case "enum":
                if (U = Ja(m.V.T, S, i.ignoreUnknownFields), U === void 0)
                  continue;
                break;
              case "scalar":
                try {
                  U = cs(m.V.T, S);
                } catch ($) {
                  let R = `cannot decode map value for field ${n.typeName}.${m.name} from JSON: ${this.debug(f)}`;
                  throw $ instanceof Error && $.message.length > 0 && (R += `: ${$.message}`), new Error(R);
                }
                break;
            }
            try {
              y[cs(m.K, m.K == v.BOOL ? b == "true" ? !0 : b == "false" ? !1 : b : b).toString()] = U;
            } catch ($) {
              let R = `cannot decode map key for field ${n.typeName}.${m.name} from JSON: ${this.debug(f)}`;
              throw $ instanceof Error && $.message.length > 0 && (R += `: ${$.message}`), new Error(R);
            }
          }
        } else
          switch (m.kind) {
            case "message":
              const y = m.T;
              if (f === null && y.typeName != "google.protobuf.Value") {
                if (m.oneof)
                  throw new Error(`cannot decode field ${n.typeName}.${m.name} from JSON: null is invalid for oneof field "${u}"`);
                continue;
              }
              g[h] instanceof x ? g[h].fromJson(f, i) : (g[h] = y.fromJson(f, i), y.fieldWrapper && !m.oneof && (g[h] = y.fieldWrapper.unwrapField(g[h])));
              break;
            case "enum":
              const b = Ja(m.T, f, i.ignoreUnknownFields);
              b !== void 0 && (g[h] = b);
              break;
            case "scalar":
              try {
                g[h] = cs(m.T, f);
              } catch (S) {
                let U = `cannot decode field ${n.typeName}.${m.name} from JSON: ${this.debug(f)}`;
                throw S instanceof Error && S.message.length > 0 && (U += `: ${S.message}`), new Error(U);
              }
              break;
          }
      }
      return s;
    },
    writeMessage(n, r) {
      const i = n.getType(), s = {};
      let c;
      try {
        for (const u of i.fields.byMember()) {
          let f;
          if (u.kind == "oneof") {
            const m = n[u.localName];
            if (m.value === void 0)
              continue;
            if (c = u.findField(m.case), !c)
              throw "oneof case not found: " + m.case;
            f = e(c, m.value, r);
          } else
            c = u, f = e(c, n[c.localName], r);
          f !== void 0 && (s[r.useProtoFieldName ? c.name : c.jsonName] = f);
        }
      } catch (u) {
        const f = c ? `cannot encode field ${i.typeName}.${c.name} to JSON` : `cannot encode message ${i.typeName} to JSON`, m = u instanceof Error ? u.message : String(u);
        throw new Error(f + (m.length > 0 ? `: ${m}` : ""));
      }
      return s;
    },
    readScalar: cs,
    writeScalar: Ou,
    debug: tf
  };
}
function tf(t) {
  if (t === null)
    return "null";
  switch (typeof t) {
    case "object":
      return Array.isArray(t) ? "array" : "object";
    case "string":
      return t.length > 100 ? "string" : `"${t.split('"').join('\\"')}"`;
    default:
      return String(t);
  }
}
function cs(t, e) {
  switch (t) {
    case v.DOUBLE:
    case v.FLOAT:
      if (e === null)
        return 0;
      if (e === "NaN")
        return Number.NaN;
      if (e === "Infinity")
        return Number.POSITIVE_INFINITY;
      if (e === "-Infinity")
        return Number.NEGATIVE_INFINITY;
      if (e === "" || typeof e == "string" && e.trim().length !== e.length || typeof e != "string" && typeof e != "number")
        break;
      const n = Number(e);
      if (Number.isNaN(n) || !Number.isFinite(n))
        break;
      return t == v.FLOAT && Rl(n), n;
    case v.INT32:
    case v.FIXED32:
    case v.SFIXED32:
    case v.SINT32:
    case v.UINT32:
      if (e === null)
        return 0;
      let r;
      if (typeof e == "number" ? r = e : typeof e == "string" && e.length > 0 && e.trim().length === e.length && (r = Number(e)), r === void 0)
        break;
      return t == v.UINT32 ? nc(r) : $o(r), r;
    case v.INT64:
    case v.SFIXED64:
    case v.SINT64:
      if (e === null)
        return de.zero;
      if (typeof e != "number" && typeof e != "string")
        break;
      return de.parse(e);
    case v.FIXED64:
    case v.UINT64:
      if (e === null)
        return de.zero;
      if (typeof e != "number" && typeof e != "string")
        break;
      return de.uParse(e);
    case v.BOOL:
      if (e === null)
        return !1;
      if (typeof e != "boolean")
        break;
      return e;
    case v.STRING:
      if (e === null)
        return "";
      if (typeof e != "string")
        break;
      try {
        encodeURIComponent(e);
      } catch {
        throw new Error("invalid UTF8");
      }
      return e;
    case v.BYTES:
      if (e === null || e === "")
        return new Uint8Array(0);
      if (typeof e != "string")
        break;
      return ef.dec(e);
  }
  throw new Error();
}
function Ja(t, e, n) {
  if (e === null)
    return 0;
  switch (typeof e) {
    case "number":
      if (Number.isInteger(e))
        return e;
      break;
    case "string":
      const r = t.findName(e);
      if (r || n)
        return r == null ? void 0 : r.no;
      break;
  }
  throw new Error(`cannot decode enum ${t.typeName} from JSON: ${tf(e)}`);
}
function Tp(t, e, n, r) {
  var i;
  if (e === void 0)
    return e;
  if (e === 0 && !n)
    return;
  if (r)
    return e;
  if (t.typeName == "google.protobuf.NullValue")
    return null;
  const s = t.findNumber(e);
  return (i = s == null ? void 0 : s.name) !== null && i !== void 0 ? i : e;
}
function Ou(t, e, n) {
  if (e !== void 0)
    switch (t) {
      case v.INT32:
      case v.SFIXED32:
      case v.SINT32:
      case v.FIXED32:
      case v.UINT32:
        return Qe(typeof e == "number"), e != 0 || n ? e : void 0;
      case v.FLOAT:
      case v.DOUBLE:
        return Qe(typeof e == "number"), Number.isNaN(e) ? "NaN" : e === Number.POSITIVE_INFINITY ? "Infinity" : e === Number.NEGATIVE_INFINITY ? "-Infinity" : e !== 0 || n ? e : void 0;
      case v.STRING:
        return Qe(typeof e == "string"), e.length > 0 || n ? e : void 0;
      case v.BOOL:
        return Qe(typeof e == "boolean"), e || n ? e : void 0;
      case v.UINT64:
      case v.FIXED64:
      case v.INT64:
      case v.SFIXED64:
      case v.SINT64:
        return Qe(typeof e == "bigint" || typeof e == "string" || typeof e == "number"), n || e != 0 ? e.toString(10) : void 0;
      case v.BYTES:
        return Qe(e instanceof Uint8Array), n || e.byteLength > 0 ? ef.enc(e) : void 0;
    }
}
function Ep() {
  return yp((t, e) => function(r, i, s) {
    if (r.kind == "map") {
      const c = {};
      switch (r.V.kind) {
        case "scalar":
          for (const [f, m] of Object.entries(i)) {
            const h = e(r.V.T, m, !0);
            Qe(h !== void 0), c[f.toString()] = h;
          }
          break;
        case "message":
          for (const [f, m] of Object.entries(i))
            c[f.toString()] = m.toJson(s);
          break;
        case "enum":
          const u = r.V.T;
          for (const [f, m] of Object.entries(i)) {
            Qe(m === void 0 || typeof m == "number");
            const h = t(u, m, !0, s.enumAsInteger);
            Qe(h !== void 0), c[f.toString()] = h;
          }
          break;
      }
      return s.emitDefaultValues || Object.keys(c).length > 0 ? c : void 0;
    } else if (r.repeated) {
      const c = [];
      switch (r.kind) {
        case "scalar":
          for (let u = 0; u < i.length; u++)
            c.push(e(r.T, i[u], !0));
          break;
        case "enum":
          for (let u = 0; u < i.length; u++)
            c.push(t(r.T, i[u], !0, s.enumAsInteger));
          break;
        case "message":
          for (let u = 0; u < i.length; u++)
            c.push(rc(r.T, i[u]).toJson(s));
          break;
      }
      return s.emitDefaultValues || c.length > 0 ? c : void 0;
    } else
      switch (r.kind) {
        case "scalar":
          return e(r.T, i, !!r.oneof || r.opt || s.emitDefaultValues);
        case "enum":
          return t(r.T, i, !!r.oneof || r.opt || s.emitDefaultValues, s.enumAsInteger);
        case "message":
          return i !== void 0 ? rc(r.T, i).toJson(s) : void 0;
      }
  });
}
function bp() {
  return {
    setEnumType: Wl,
    initPartial(t, e) {
      if (t === void 0)
        return;
      const n = e.getType();
      for (const r of n.fields.byMember()) {
        const i = r.localName, s = e, c = t;
        if (c[i] !== void 0)
          switch (r.kind) {
            case "oneof":
              const u = c[i].case;
              if (u === void 0)
                continue;
              const f = r.findField(u);
              let m = c[i].value;
              f && f.kind == "message" && !(m instanceof f.T) ? m = new f.T(m) : f && f.kind === "scalar" && f.T === v.BYTES && (m = us(m)), s[i] = { case: u, value: m };
              break;
            case "scalar":
            case "enum":
              let h = c[i];
              r.T === v.BYTES && (h = r.repeated ? h.map(us) : us(h)), s[i] = h;
              break;
            case "map":
              switch (r.V.kind) {
                case "scalar":
                case "enum":
                  if (r.V.T === v.BYTES)
                    for (const [b, S] of Object.entries(c[i]))
                      s[i][b] = us(S);
                  else
                    Object.assign(s[i], c[i]);
                  break;
                case "message":
                  const y = r.V.T;
                  for (const b of Object.keys(c[i])) {
                    let S = c[i][b];
                    y.fieldWrapper || (S = new y(S)), s[i][b] = S;
                  }
                  break;
              }
              break;
            case "message":
              const g = r.T;
              if (r.repeated)
                s[i] = c[i].map((y) => y instanceof g ? y : new g(y));
              else if (c[i] !== void 0) {
                const y = c[i];
                g.fieldWrapper ? /* We can't use BytesValue.typeName as that will create a circular import */ g.typeName === "google.protobuf.BytesValue" ? s[i] = us(y) : s[i] = y : s[i] = y instanceof g ? y : new g(y);
              }
              break;
          }
      }
    },
    equals(t, e, n) {
      return e === n ? !0 : !e || !n ? !1 : t.fields.byMember().every((r) => {
        const i = e[r.localName], s = n[r.localName];
        if (r.repeated) {
          if (i.length !== s.length)
            return !1;
          switch (r.kind) {
            case "message":
              return i.every((c, u) => r.T.equals(c, s[u]));
            case "scalar":
              return i.every((c, u) => ci(r.T, c, s[u]));
            case "enum":
              return i.every((c, u) => ci(v.INT32, c, s[u]));
          }
          throw new Error(`repeated cannot contain ${r.kind}`);
        }
        switch (r.kind) {
          case "message":
            return r.T.equals(i, s);
          case "enum":
            return ci(v.INT32, i, s);
          case "scalar":
            return ci(r.T, i, s);
          case "oneof":
            if (i.case !== s.case)
              return !1;
            const c = r.findField(i.case);
            if (c === void 0)
              return !0;
            switch (c.kind) {
              case "message":
                return c.T.equals(i.value, s.value);
              case "enum":
                return ci(v.INT32, i.value, s.value);
              case "scalar":
                return ci(c.T, i.value, s.value);
            }
            throw new Error(`oneof cannot contain ${c.kind}`);
          case "map":
            const u = Object.keys(i).concat(Object.keys(s));
            switch (r.V.kind) {
              case "message":
                const f = r.V.T;
                return u.every((h) => f.equals(i[h], s[h]));
              case "enum":
                return u.every((h) => ci(v.INT32, i[h], s[h]));
              case "scalar":
                const m = r.V.T;
                return u.every((h) => ci(m, i[h], s[h]));
            }
            break;
        }
      });
    },
    clone(t) {
      const e = t.getType(), n = new e(), r = n;
      for (const i of e.fields.byMember()) {
        const s = t[i.localName];
        let c;
        if (i.repeated)
          c = s.map(Fo);
        else if (i.kind == "map") {
          c = r[i.localName];
          for (const [u, f] of Object.entries(s))
            c[u] = Fo(f);
        } else
          i.kind == "oneof" ? c = i.findField(s.case) ? { case: s.case, value: Fo(s.value) } : { case: void 0 } : c = Fo(s);
        r[i.localName] = c;
      }
      return n;
    }
  };
}
function Fo(t) {
  if (t === void 0)
    return t;
  if (t instanceof x)
    return t.clone();
  if (t instanceof Uint8Array) {
    const e = new Uint8Array(t.byteLength);
    return e.set(t), e;
  }
  return t;
}
function us(t) {
  return t instanceof Uint8Array ? t : new Uint8Array(t);
}
class Np {
  constructor(e, n) {
    this._fields = e, this._normalizer = n;
  }
  findJsonName(e) {
    if (!this.jsonNames) {
      const n = {};
      for (const r of this.list())
        n[r.jsonName] = n[r.name] = r;
      this.jsonNames = n;
    }
    return this.jsonNames[e];
  }
  find(e) {
    if (!this.numbers) {
      const n = {};
      for (const r of this.list())
        n[r.no] = r;
      this.numbers = n;
    }
    return this.numbers[e];
  }
  list() {
    return this.all || (this.all = this._normalizer(this._fields)), this.all;
  }
  byNumber() {
    return this.numbersAsc || (this.numbersAsc = this.list().concat().sort((e, n) => e.no - n.no)), this.numbersAsc;
  }
  byMember() {
    if (!this.members) {
      this.members = [];
      const e = this.members;
      let n;
      for (const r of this.list())
        r.oneof ? r.oneof !== n && (n = r.oneof, e.push(n)) : e.push(r);
    }
    return this.members;
  }
}
function nf(t, e) {
  const n = rf(t);
  return e ? n : Sp(kp(n));
}
function xp(t) {
  return nf(t, !1);
}
const Bp = rf;
function rf(t) {
  let e = !1;
  const n = [];
  for (let r = 0; r < t.length; r++) {
    let i = t.charAt(r);
    switch (i) {
      case "_":
        e = !0;
        break;
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        n.push(i), e = !1;
        break;
      default:
        e && (e = !1, i = i.toUpperCase()), n.push(i);
        break;
    }
  }
  return n.join("");
}
const Ip = /* @__PURE__ */ new Set([
  // names reserved by JavaScript
  "constructor",
  "toString",
  "toJSON",
  "valueOf"
]), Op = /* @__PURE__ */ new Set([
  // names reserved by the runtime
  "getType",
  "clone",
  "equals",
  "fromBinary",
  "fromJson",
  "fromJsonString",
  "toBinary",
  "toJson",
  "toJsonString",
  // names reserved by the runtime for the future
  "toObject"
]), sf = (t) => `${t}$`, kp = (t) => Op.has(t) ? sf(t) : t, Sp = (t) => Ip.has(t) ? sf(t) : t;
class vp {
  constructor(e) {
    this.kind = "oneof", this.repeated = !1, this.packed = !1, this.opt = !1, this.default = void 0, this.fields = [], this.name = e, this.localName = xp(e);
  }
  addField(e) {
    Qe(e.oneof === this, `field ${e.name} not one of ${this.name}`), this.fields.push(e);
  }
  findField(e) {
    if (!this._lookup) {
      this._lookup = /* @__PURE__ */ Object.create(null);
      for (let n = 0; n < this.fields.length; n++)
        this._lookup[this.fields[n].localName] = this.fields[n];
    }
    return this._lookup[e];
  }
}
const o = tp("proto3", Ep(), pp(), Object.assign(Object.assign({}, bp()), {
  newFieldList(t) {
    return new Np(t, Jp);
  },
  initFields(t) {
    for (const e of t.getType().fields.byMember()) {
      if (e.opt)
        continue;
      const n = e.localName, r = t;
      if (e.repeated) {
        r[n] = [];
        continue;
      }
      switch (e.kind) {
        case "oneof":
          r[n] = { case: void 0 };
          break;
        case "enum":
          r[n] = 0;
          break;
        case "map":
          r[n] = {};
          break;
        case "scalar":
          r[n] = ic(e.T);
          break;
      }
    }
  }
}));
function Jp(t) {
  var e, n, r;
  const i = [];
  let s;
  for (const c of typeof t == "function" ? t() : t) {
    const u = c;
    if (u.localName = nf(c.name, c.oneof !== void 0), u.jsonName = (e = c.jsonName) !== null && e !== void 0 ? e : Bp(c.name), u.repeated = (n = c.repeated) !== null && n !== void 0 ? n : !1, u.packed = (r = c.packed) !== null && r !== void 0 ? r : c.kind == "enum" || c.kind == "scalar" && c.T != v.BYTES && c.T != v.STRING, c.oneof !== void 0) {
      const f = typeof c.oneof == "string" ? c.oneof : c.oneof.name;
      (!s || s.name != f) && (s = new vp(f)), u.oneof = s, s.addField(u);
    }
    i.push(u);
  }
  return i;
}
var ge;
(function(t) {
  t[t.Unary = 0] = "Unary", t[t.ServerStreaming = 1] = "ServerStreaming", t[t.ClientStreaming = 2] = "ClientStreaming", t[t.BiDiStreaming = 3] = "BiDiStreaming";
})(ge || (ge = {}));
var ku;
(function(t) {
  t[t.NoSideEffects = 1] = "NoSideEffects", t[t.Idempotent = 2] = "Idempotent";
})(ku || (ku = {}));
class ve extends x {
  constructor(e) {
    super(), this.seconds = de.zero, this.nanos = 0, o.util.initPartial(e, this);
  }
  fromJson(e, n) {
    if (typeof e != "string")
      throw new Error(`cannot decode google.protobuf.Timestamp from JSON: ${o.json.debug(e)}`);
    const r = e.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
    if (!r)
      throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
    const i = Date.parse(r[1] + "-" + r[2] + "-" + r[3] + "T" + r[4] + ":" + r[5] + ":" + r[6] + (r[8] ? r[8] : "Z"));
    if (Number.isNaN(i))
      throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
    if (i < Date.parse("0001-01-01T00:00:00Z") || i > Date.parse("9999-12-31T23:59:59Z"))
      throw new Error("cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
    return this.seconds = de.parse(i / 1e3), this.nanos = 0, r[7] && (this.nanos = parseInt("1" + r[7] + "0".repeat(9 - r[7].length)) - 1e9), this;
  }
  toJson(e) {
    const n = Number(this.seconds) * 1e3;
    if (n < Date.parse("0001-01-01T00:00:00Z") || n > Date.parse("9999-12-31T23:59:59Z"))
      throw new Error("cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
    if (this.nanos < 0)
      throw new Error("cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative");
    let r = "Z";
    if (this.nanos > 0) {
      const i = (this.nanos + 1e9).toString().substring(1);
      i.substring(3) === "000000" ? r = "." + i.substring(0, 3) + "Z" : i.substring(6) === "000" ? r = "." + i.substring(0, 6) + "Z" : r = "." + i + "Z";
    }
    return new Date(n).toISOString().replace(".000Z", r);
  }
  toDate() {
    return new Date(Number(this.seconds) * 1e3 + Math.ceil(this.nanos / 1e6));
  }
  static now() {
    return ve.fromDate(/* @__PURE__ */ new Date());
  }
  static fromDate(e) {
    const n = e.getTime();
    return new ve({
      seconds: de.parse(Math.floor(n / 1e3)),
      nanos: n % 1e3 * 1e6
    });
  }
  static fromBinary(e, n) {
    return new ve().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new ve().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new ve().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(ve, e, n);
  }
}
ve.runtime = o;
ve.typeName = "google.protobuf.Timestamp";
ve.fields = o.util.newFieldList(() => [
  {
    no: 1,
    name: "seconds",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  {
    no: 2,
    name: "nanos",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
class zt extends x {
  constructor(e) {
    super(), this.seconds = de.zero, this.nanos = 0, o.util.initPartial(e, this);
  }
  fromJson(e, n) {
    if (typeof e != "string")
      throw new Error(`cannot decode google.protobuf.Duration from JSON: ${o.json.debug(e)}`);
    const r = e.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
    if (r === null)
      throw new Error(`cannot decode google.protobuf.Duration from JSON: ${o.json.debug(e)}`);
    const i = Number(r[1]);
    if (i > 315576e6 || i < -315576e6)
      throw new Error(`cannot decode google.protobuf.Duration from JSON: ${o.json.debug(e)}`);
    if (this.seconds = de.parse(i), typeof r[2] == "string") {
      const s = r[2] + "0".repeat(9 - r[2].length);
      this.nanos = parseInt(s), (i < 0 || Object.is(i, -0)) && (this.nanos = -this.nanos);
    }
    return this;
  }
  toJson(e) {
    if (Number(this.seconds) > 315576e6 || Number(this.seconds) < -315576e6)
      throw new Error("cannot encode google.protobuf.Duration to JSON: value out of range");
    let n = this.seconds.toString();
    if (this.nanos !== 0) {
      let r = Math.abs(this.nanos).toString();
      r = "0".repeat(9 - r.length) + r, r.substring(3) === "000000" ? r = r.substring(0, 3) : r.substring(6) === "000" && (r = r.substring(0, 6)), n += "." + r, this.nanos < 0 && this.seconds === de.zero && (n = "-" + n);
    }
    return n + "s";
  }
  static fromBinary(e, n) {
    return new zt().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new zt().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new zt().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(zt, e, n);
  }
}
zt.runtime = o;
zt.typeName = "google.protobuf.Duration";
zt.fields = o.util.newFieldList(() => [
  {
    no: 1,
    name: "seconds",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  {
    no: 2,
    name: "nanos",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);
var st;
(function(t) {
  t[t.UNKNOWN = 0] = "UNKNOWN", t[t.PRIMARY = 1] = "PRIMARY", t[t.TEMPORARY_INCOMING = 2] = "TEMPORARY_INCOMING", t[t.TEMPORARY_OUTGOING = 3] = "TEMPORARY_OUTGOING", t[t.BUCKET_1_KIN = 4] = "BUCKET_1_KIN", t[t.BUCKET_10_KIN = 5] = "BUCKET_10_KIN", t[t.BUCKET_100_KIN = 6] = "BUCKET_100_KIN", t[t.BUCKET_1_000_KIN = 7] = "BUCKET_1_000_KIN", t[t.BUCKET_10_000_KIN = 8] = "BUCKET_10_000_KIN", t[t.BUCKET_100_000_KIN = 9] = "BUCKET_100_000_KIN", t[t.BUCKET_1_000_000_KIN = 10] = "BUCKET_1_000_000_KIN", t[t.LEGACY_PRIMARY_2022 = 11] = "LEGACY_PRIMARY_2022", t[t.REMOTE_SEND_GIFT_CARD = 12] = "REMOTE_SEND_GIFT_CARD";
})(st || (st = {}));
o.util.setEnumType(st, "code.common.v1.AccountType", [
  { no: 0, name: "UNKNOWN" },
  { no: 1, name: "PRIMARY" },
  { no: 2, name: "TEMPORARY_INCOMING" },
  { no: 3, name: "TEMPORARY_OUTGOING" },
  { no: 4, name: "BUCKET_1_KIN" },
  { no: 5, name: "BUCKET_10_KIN" },
  { no: 6, name: "BUCKET_100_KIN" },
  { no: 7, name: "BUCKET_1_000_KIN" },
  { no: 8, name: "BUCKET_10_000_KIN" },
  { no: 9, name: "BUCKET_100_000_KIN" },
  { no: 10, name: "BUCKET_1_000_000_KIN" },
  { no: 11, name: "LEGACY_PRIMARY_2022" },
  { no: 12, name: "REMOTE_SEND_GIFT_CARD" }
]);
class z extends x {
  constructor(e) {
    super(), this.value = new Uint8Array(0), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new z().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new z().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new z().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(z, e, n);
  }
}
z.runtime = o;
z.typeName = "code.common.v1.SolanaAccountId";
z.fields = o.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class vt extends x {
  constructor(e) {
    super(), this.value = new Uint8Array(0), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new vt().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new vt().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new vt().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(vt, e, n);
  }
}
vt.runtime = o;
vt.typeName = "code.common.v1.Transaction";
vt.fields = o.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class ye extends x {
  constructor(e) {
    super(), this.value = new Uint8Array(0), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new ye().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new ye().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new ye().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(ye, e, n);
  }
}
ye.runtime = o;
ye.typeName = "code.common.v1.Signature";
ye.fields = o.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class Wt extends x {
  constructor(e) {
    super(), this.value = new Uint8Array(0), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Wt().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Wt().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Wt().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Wt, e, n);
  }
}
Wt.runtime = o;
Wt.typeName = "code.common.v1.Blockhash";
Wt.fields = o.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
let ii = class hs extends x {
  constructor(e) {
    super(), this.value = new Uint8Array(0), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new hs().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new hs().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new hs().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(hs, e, n);
  }
};
ii.runtime = o;
ii.typeName = "code.common.v1.Hash";
ii.fields = o.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class tt extends x {
  constructor(e) {
    super(), this.value = new Uint8Array(0), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new tt().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new tt().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new tt().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(tt, e, n);
  }
}
tt.runtime = o;
tt.typeName = "code.common.v1.IntentId";
tt.fields = o.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class ut extends x {
  constructor(e) {
    super(), this.value = new Uint8Array(0), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new ut().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new ut().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new ut().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(ut, e, n);
  }
}
ut.runtime = o;
ut.typeName = "code.common.v1.UserId";
ut.fields = o.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class nt extends x {
  constructor(e) {
    super(), this.value = new Uint8Array(0), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new nt().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new nt().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new nt().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(nt, e, n);
  }
}
nt.runtime = o;
nt.typeName = "code.common.v1.DataContainerId";
nt.fields = o.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class Ke extends x {
  constructor(e) {
    super(), this.value = "", o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Ke().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Ke().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Ke().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Ke, e, n);
  }
}
Ke.runtime = o;
Ke.typeName = "code.common.v1.PhoneNumber";
Ke.fields = o.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 9 }
]);
class Yt extends x {
  constructor(e) {
    super(), this.language = "", this.country = "", o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Yt().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Yt().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Yt().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Yt, e, n);
  }
}
Yt.runtime = o;
Yt.typeName = "code.common.v1.Locale";
Yt.fields = o.util.newFieldList(() => [
  { no: 1, name: "language", kind: "scalar", T: 9 },
  { no: 2, name: "country", kind: "scalar", T: 9 }
]);
class yi extends x {
  constructor(e) {
    super(), this.version = "", this.service = "", this.method = "", this.body = new Uint8Array(0), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new yi().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new yi().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new yi().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(yi, e, n);
  }
}
yi.runtime = o;
yi.typeName = "code.common.v1.Request";
yi.fields = o.util.newFieldList(() => [
  { no: 1, name: "version", kind: "scalar", T: 9 },
  { no: 2, name: "service", kind: "scalar", T: 9 },
  { no: 3, name: "method", kind: "scalar", T: 9 },
  { no: 4, name: "body", kind: "scalar", T: 12 }
]);
class Ti extends x {
  constructor(e) {
    super(), this.result = Os.OK, this.body = new Uint8Array(0), this.message = "", o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Ti().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Ti().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Ti().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Ti, e, n);
  }
}
Ti.runtime = o;
Ti.typeName = "code.common.v1.Response";
Ti.fields = o.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(Os) },
  { no: 2, name: "body", kind: "scalar", T: 12 },
  { no: 3, name: "message", kind: "scalar", T: 9 }
]);
var Os;
(function(t) {
  t[t.OK = 0] = "OK", t[t.ERROR = 1] = "ERROR";
})(Os || (Os = {}));
o.util.setEnumType(Os, "code.common.v1.Response.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "ERROR" }
]);
var Mt;
(function(t) {
  t[t.UNKNOWN = 0] = "UNKNOWN", t[t.GIVE_FIRST_KIN = 1] = "GIVE_FIRST_KIN", t[t.GET_FIRST_KIN = 2] = "GET_FIRST_KIN";
})(Mt || (Mt = {}));
o.util.setEnumType(Mt, "code.transaction.v2.AirdropType", [
  { no: 0, name: "UNKNOWN" },
  { no: 1, name: "GIVE_FIRST_KIN" },
  { no: 2, name: "GET_FIRST_KIN" }
]);
class Xt extends x {
  constructor(e) {
    super(), this.request = { case: void 0 }, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Xt().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Xt().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Xt().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Xt, e, n);
  }
}
Xt.runtime = o;
Xt.typeName = "code.transaction.v2.SubmitIntentRequest";
Xt.fields = o.util.newFieldList(() => [
  { no: 1, name: "submit_actions", kind: "message", T: Zt, oneof: "request" },
  { no: 2, name: "submit_signatures", kind: "message", T: Gt, oneof: "request" }
]);
class Zt extends x {
  constructor(e) {
    super(), this.actions = [], o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Zt().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Zt().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Zt().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Zt, e, n);
  }
}
Zt.runtime = o;
Zt.typeName = "code.transaction.v2.SubmitIntentRequest.SubmitActions";
Zt.fields = o.util.newFieldList(() => [
  { no: 1, name: "id", kind: "message", T: tt },
  { no: 2, name: "owner", kind: "message", T: z },
  { no: 3, name: "metadata", kind: "message", T: wt },
  { no: 4, name: "actions", kind: "message", T: In, repeated: !0 },
  { no: 5, name: "signature", kind: "message", T: ye }
]);
class Gt extends x {
  constructor(e) {
    super(), this.signatures = [], o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Gt().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Gt().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Gt().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Gt, e, n);
  }
}
Gt.runtime = o;
Gt.typeName = "code.transaction.v2.SubmitIntentRequest.SubmitSignatures";
Gt.fields = o.util.newFieldList(() => [
  { no: 1, name: "signatures", kind: "message", T: ye, repeated: !0 }
]);
class Qt extends x {
  constructor(e) {
    super(), this.response = { case: void 0 }, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Qt().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Qt().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Qt().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Qt, e, n);
  }
}
Qt.runtime = o;
Qt.typeName = "code.transaction.v2.SubmitIntentResponse";
Qt.fields = o.util.newFieldList(() => [
  { no: 1, name: "server_parameters", kind: "message", T: en, oneof: "response" },
  { no: 2, name: "success", kind: "message", T: tn, oneof: "response" },
  { no: 3, name: "error", kind: "message", T: nn, oneof: "response" }
]);
class en extends x {
  constructor(e) {
    super(), this.serverParameters = [], o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new en().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new en().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new en().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(en, e, n);
  }
}
en.runtime = o;
en.typeName = "code.transaction.v2.SubmitIntentResponse.ServerParameters";
en.fields = o.util.newFieldList(() => [
  { no: 1, name: "server_parameters", kind: "message", T: Ln, repeated: !0 }
]);
class tn extends x {
  constructor(e) {
    super(), this.code = ks.OK, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new tn().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new tn().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new tn().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(tn, e, n);
  }
}
tn.runtime = o;
tn.typeName = "code.transaction.v2.SubmitIntentResponse.Success";
tn.fields = o.util.newFieldList(() => [
  { no: 1, name: "code", kind: "enum", T: o.getEnumType(ks) }
]);
var ks;
(function(t) {
  t[t.OK = 0] = "OK";
})(ks || (ks = {}));
o.util.setEnumType(ks, "code.transaction.v2.SubmitIntentResponse.Success.Code", [
  { no: 0, name: "OK" }
]);
class nn extends x {
  constructor(e) {
    super(), this.code = Ss.DENIED, this.errorDetails = [], o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new nn().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new nn().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new nn().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(nn, e, n);
  }
}
nn.runtime = o;
nn.typeName = "code.transaction.v2.SubmitIntentResponse.Error";
nn.fields = o.util.newFieldList(() => [
  { no: 1, name: "code", kind: "enum", T: o.getEnumType(Ss) },
  { no: 2, name: "error_details", kind: "message", T: Hn, repeated: !0 }
]);
var Ss;
(function(t) {
  t[t.DENIED = 0] = "DENIED", t[t.INVALID_INTENT = 1] = "INVALID_INTENT", t[t.SIGNATURE_ERROR = 2] = "SIGNATURE_ERROR", t[t.STALE_STATE = 3] = "STALE_STATE";
})(Ss || (Ss = {}));
o.util.setEnumType(Ss, "code.transaction.v2.SubmitIntentResponse.Error.Code", [
  { no: 0, name: "DENIED" },
  { no: 1, name: "INVALID_INTENT" },
  { no: 2, name: "SIGNATURE_ERROR" },
  { no: 3, name: "STALE_STATE" }
]);
class rn extends x {
  constructor(e) {
    super(), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new rn().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new rn().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new rn().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(rn, e, n);
  }
}
rn.runtime = o;
rn.typeName = "code.transaction.v2.GetIntentMetadataRequest";
rn.fields = o.util.newFieldList(() => [
  { no: 1, name: "intent_id", kind: "message", T: tt },
  { no: 2, name: "owner", kind: "message", T: z },
  { no: 3, name: "signature", kind: "message", T: ye }
]);
class sn extends x {
  constructor(e) {
    super(), this.result = vs.OK, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new sn().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new sn().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new sn().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(sn, e, n);
  }
}
sn.runtime = o;
sn.typeName = "code.transaction.v2.GetIntentMetadataResponse";
sn.fields = o.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(vs) },
  { no: 2, name: "metadata", kind: "message", T: wt }
]);
var vs;
(function(t) {
  t[t.OK = 0] = "OK", t[t.NOT_FOUND = 1] = "NOT_FOUND";
})(vs || (vs = {}));
o.util.setEnumType(vs, "code.transaction.v2.GetIntentMetadataResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" }
]);
class on extends x {
  constructor(e) {
    super(), this.actionId = 0, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new on().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new on().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new on().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(on, e, n);
  }
}
on.runtime = o;
on.typeName = "code.transaction.v2.GetPrivacyUpgradeStatusRequest";
on.fields = o.util.newFieldList(() => [
  { no: 1, name: "intent_id", kind: "message", T: tt },
  { no: 2, name: "action_id", kind: "scalar", T: 13 }
]);
class an extends x {
  constructor(e) {
    super(), this.result = Js.OK, this.status = Fs.UNKNOWN, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new an().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new an().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new an().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(an, e, n);
  }
}
an.runtime = o;
an.typeName = "code.transaction.v2.GetPrivacyUpgradeStatusResponse";
an.fields = o.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(Js) },
  { no: 2, name: "status", kind: "enum", T: o.getEnumType(Fs) }
]);
var Js;
(function(t) {
  t[t.OK = 0] = "OK", t[t.INTENT_NOT_FOUND = 1] = "INTENT_NOT_FOUND", t[t.ACTION_NOT_FOUND = 2] = "ACTION_NOT_FOUND", t[t.INVALID_ACTION = 3] = "INVALID_ACTION";
})(Js || (Js = {}));
o.util.setEnumType(Js, "code.transaction.v2.GetPrivacyUpgradeStatusResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INTENT_NOT_FOUND" },
  { no: 2, name: "ACTION_NOT_FOUND" },
  { no: 3, name: "INVALID_ACTION" }
]);
var Fs;
(function(t) {
  t[t.UNKNOWN = 0] = "UNKNOWN", t[t.TEMPORARY_TRANSACTION_FINALIZED = 1] = "TEMPORARY_TRANSACTION_FINALIZED", t[t.WAITING_FOR_NEXT_BLOCK = 2] = "WAITING_FOR_NEXT_BLOCK", t[t.READY_FOR_UPGRADE = 3] = "READY_FOR_UPGRADE", t[t.ALREADY_UPGRADED = 4] = "ALREADY_UPGRADED";
})(Fs || (Fs = {}));
o.util.setEnumType(Fs, "code.transaction.v2.GetPrivacyUpgradeStatusResponse.Status", [
  { no: 0, name: "UNKNOWN" },
  { no: 1, name: "TEMPORARY_TRANSACTION_FINALIZED" },
  { no: 2, name: "WAITING_FOR_NEXT_BLOCK" },
  { no: 3, name: "READY_FOR_UPGRADE" },
  { no: 4, name: "ALREADY_UPGRADED" }
]);
class cn extends x {
  constructor(e) {
    super(), this.limit = 0, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new cn().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new cn().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new cn().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(cn, e, n);
  }
}
cn.runtime = o;
cn.typeName = "code.transaction.v2.GetPrioritizedIntentsForPrivacyUpgradeRequest";
cn.fields = o.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: z },
  { no: 2, name: "limit", kind: "scalar", T: 13 },
  { no: 3, name: "signature", kind: "message", T: ye }
]);
class un extends x {
  constructor(e) {
    super(), this.result = As.OK, this.items = [], o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new un().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new un().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new un().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(un, e, n);
  }
}
un.runtime = o;
un.typeName = "code.transaction.v2.GetPrioritizedIntentsForPrivacyUpgradeResponse";
un.fields = o.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(As) },
  { no: 2, name: "items", kind: "message", T: zn, repeated: !0 }
]);
var As;
(function(t) {
  t[t.OK = 0] = "OK", t[t.NOT_FOUND = 1] = "NOT_FOUND";
})(As || (As = {}));
o.util.setEnumType(As, "code.transaction.v2.GetPrioritizedIntentsForPrivacyUpgradeResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" }
]);
class ln extends x {
  constructor(e) {
    super(), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new ln().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new ln().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new ln().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(ln, e, n);
  }
}
ln.runtime = o;
ln.typeName = "code.transaction.v2.GetLimitsRequest";
ln.fields = o.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: z },
  { no: 2, name: "signature", kind: "message", T: ye },
  { no: 3, name: "consumed_since", kind: "message", T: ve }
]);
class fn extends x {
  constructor(e) {
    super(), this.result = Us.OK, this.remainingSendLimitsByCurrency = {}, this.microPaymentLimitsByCurrency = {}, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new fn().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new fn().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new fn().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(fn, e, n);
  }
}
fn.runtime = o;
fn.typeName = "code.transaction.v2.GetLimitsResponse";
fn.fields = o.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(Us) },
  { no: 2, name: "remaining_send_limits_by_currency", kind: "map", K: 9, V: { kind: "message", T: Xn } },
  { no: 3, name: "deposit_limit", kind: "message", T: Zn },
  { no: 4, name: "micro_payment_limits_by_currency", kind: "map", K: 9, V: { kind: "message", T: Gn } }
]);
var Us;
(function(t) {
  t[t.OK = 0] = "OK";
})(Us || (Us = {}));
o.util.setEnumType(Us, "code.transaction.v2.GetLimitsResponse.Result", [
  { no: 0, name: "OK" }
]);
class dn extends x {
  constructor(e) {
    super(), this.pageSize = 0, this.direction = Ls.ASC, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new dn().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new dn().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new dn().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(dn, e, n);
  }
}
dn.runtime = o;
dn.typeName = "code.transaction.v2.GetPaymentHistoryRequest";
dn.fields = o.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: z },
  { no: 2, name: "cursor", kind: "message", T: Ft },
  { no: 3, name: "page_size", kind: "scalar", T: 13 },
  { no: 4, name: "direction", kind: "enum", T: o.getEnumType(Ls) },
  { no: 5, name: "signature", kind: "message", T: ye }
]);
var Ls;
(function(t) {
  t[t.ASC = 0] = "ASC", t[t.DESC = 1] = "DESC";
})(Ls || (Ls = {}));
o.util.setEnumType(Ls, "code.transaction.v2.GetPaymentHistoryRequest.Direction", [
  { no: 0, name: "ASC" },
  { no: 1, name: "DESC" }
]);
class mn extends x {
  constructor(e) {
    super(), this.result = Cs.OK, this.items = [], o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new mn().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new mn().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new mn().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(mn, e, n);
  }
}
mn.runtime = o;
mn.typeName = "code.transaction.v2.GetPaymentHistoryResponse";
mn.fields = o.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(Cs) },
  { no: 2, name: "items", kind: "message", T: Yn, repeated: !0 }
]);
var Cs;
(function(t) {
  t[t.OK = 0] = "OK", t[t.NOT_FOUND = 1] = "NOT_FOUND";
})(Cs || (Cs = {}));
o.util.setEnumType(Cs, "code.transaction.v2.GetPaymentHistoryResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" }
]);
class hn extends x {
  constructor(e) {
    super(), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new hn().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new hn().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new hn().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(hn, e, n);
  }
}
hn.runtime = o;
hn.typeName = "code.transaction.v2.CanWithdrawToAccountRequest";
hn.fields = o.util.newFieldList(() => [
  { no: 1, name: "account", kind: "message", T: z }
]);
class pn extends x {
  constructor(e) {
    super(), this.accountType = Ds.Unknown, this.isValidPaymentDestination = !1, this.requiresInitialization = !1, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new pn().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new pn().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new pn().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(pn, e, n);
  }
}
pn.runtime = o;
pn.typeName = "code.transaction.v2.CanWithdrawToAccountResponse";
pn.fields = o.util.newFieldList(() => [
  { no: 2, name: "account_type", kind: "enum", T: o.getEnumType(Ds) },
  { no: 1, name: "is_valid_payment_destination", kind: "scalar", T: 8 },
  { no: 3, name: "requires_initialization", kind: "scalar", T: 8 }
]);
var Ds;
(function(t) {
  t[t.Unknown = 0] = "Unknown", t[t.TokenAccount = 1] = "TokenAccount", t[t.OwnerAccount = 2] = "OwnerAccount";
})(Ds || (Ds = {}));
o.util.setEnumType(Ds, "code.transaction.v2.CanWithdrawToAccountResponse.AccountType", [
  { no: 0, name: "Unknown" },
  { no: 1, name: "TokenAccount" },
  { no: 2, name: "OwnerAccount" }
]);
class gn extends x {
  constructor(e) {
    super(), this.airdropType = Mt.UNKNOWN, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new gn().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new gn().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new gn().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(gn, e, n);
  }
}
gn.runtime = o;
gn.typeName = "code.transaction.v2.AirdropRequest";
gn.fields = o.util.newFieldList(() => [
  { no: 1, name: "airdrop_type", kind: "enum", T: o.getEnumType(Mt) },
  { no: 2, name: "owner", kind: "message", T: z },
  { no: 3, name: "signature", kind: "message", T: ye }
]);
class wn extends x {
  constructor(e) {
    super(), this.result = _s.OK, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new wn().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new wn().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new wn().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(wn, e, n);
  }
}
wn.runtime = o;
wn.typeName = "code.transaction.v2.AirdropResponse";
wn.fields = o.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(_s) },
  { no: 2, name: "exchange_data", kind: "message", T: Ve }
]);
var _s;
(function(t) {
  t[t.OK = 0] = "OK", t[t.UNAVAILABLE = 1] = "UNAVAILABLE", t[t.ALREADY_CLAIMED = 2] = "ALREADY_CLAIMED";
})(_s || (_s = {}));
o.util.setEnumType(_s, "code.transaction.v2.AirdropResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "UNAVAILABLE" },
  { no: 2, name: "ALREADY_CLAIMED" }
]);
class wt extends x {
  constructor(e) {
    super(), this.type = { case: void 0 }, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new wt().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new wt().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new wt().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(wt, e, n);
  }
}
wt.runtime = o;
wt.typeName = "code.transaction.v2.Metadata";
wt.fields = o.util.newFieldList(() => [
  { no: 1, name: "open_accounts", kind: "message", T: yn, oneof: "type" },
  { no: 2, name: "send_private_payment", kind: "message", T: Tn, oneof: "type" },
  { no: 3, name: "receive_payments_privately", kind: "message", T: bn, oneof: "type" },
  { no: 4, name: "upgrade_privacy", kind: "message", T: xn, oneof: "type" },
  { no: 5, name: "migrate_to_privacy_2022", kind: "message", T: Bn, oneof: "type" },
  { no: 6, name: "send_public_payment", kind: "message", T: En, oneof: "type" },
  { no: 7, name: "receive_payments_publicly", kind: "message", T: Nn, oneof: "type" }
]);
class yn extends x {
  constructor(e) {
    super(), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new yn().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new yn().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new yn().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(yn, e, n);
  }
}
yn.runtime = o;
yn.typeName = "code.transaction.v2.OpenAccountsMetadata";
yn.fields = o.util.newFieldList(() => []);
class Tn extends x {
  constructor(e) {
    super(), this.isWithdrawal = !1, this.isRemoteSend = !1, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Tn().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Tn().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Tn().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Tn, e, n);
  }
}
Tn.runtime = o;
Tn.typeName = "code.transaction.v2.SendPrivatePaymentMetadata";
Tn.fields = o.util.newFieldList(() => [
  { no: 1, name: "destination", kind: "message", T: z },
  { no: 2, name: "exchange_data", kind: "message", T: Ve },
  { no: 3, name: "is_withdrawal", kind: "scalar", T: 8 },
  { no: 4, name: "is_remote_send", kind: "scalar", T: 8 }
]);
class En extends x {
  constructor(e) {
    super(), this.isWithdrawal = !1, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new En().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new En().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new En().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(En, e, n);
  }
}
En.runtime = o;
En.typeName = "code.transaction.v2.SendPublicPaymentMetadata";
En.fields = o.util.newFieldList(() => [
  { no: 1, name: "destination", kind: "message", T: z },
  { no: 2, name: "exchange_data", kind: "message", T: Ve },
  { no: 3, name: "is_withdrawal", kind: "scalar", T: 8 }
]);
class bn extends x {
  constructor(e) {
    super(), this.quarks = de.zero, this.isDeposit = !1, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new bn().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new bn().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new bn().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(bn, e, n);
  }
}
bn.runtime = o;
bn.typeName = "code.transaction.v2.ReceivePaymentsPrivatelyMetadata";
bn.fields = o.util.newFieldList(() => [
  { no: 1, name: "source", kind: "message", T: z },
  { no: 2, name: "quarks", kind: "scalar", T: 4 },
  { no: 3, name: "is_deposit", kind: "scalar", T: 8 }
]);
class Nn extends x {
  constructor(e) {
    super(), this.quarks = de.zero, this.isRemoteSend = !1, this.isIssuerVoidingGiftCard = !1, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Nn().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Nn().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Nn().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Nn, e, n);
  }
}
Nn.runtime = o;
Nn.typeName = "code.transaction.v2.ReceivePaymentsPubliclyMetadata";
Nn.fields = o.util.newFieldList(() => [
  { no: 1, name: "source", kind: "message", T: z },
  { no: 2, name: "quarks", kind: "scalar", T: 4 },
  { no: 3, name: "is_remote_send", kind: "scalar", T: 8 },
  { no: 4, name: "is_issuer_voiding_gift_card", kind: "scalar", T: 8 },
  { no: 5, name: "exchange_data", kind: "message", T: Ve }
]);
class xn extends x {
  constructor(e) {
    super(), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new xn().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new xn().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new xn().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(xn, e, n);
  }
}
xn.runtime = o;
xn.typeName = "code.transaction.v2.UpgradePrivacyMetadata";
xn.fields = o.util.newFieldList(() => []);
class Bn extends x {
  constructor(e) {
    super(), this.quarks = de.zero, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Bn().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Bn().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Bn().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Bn, e, n);
  }
}
Bn.runtime = o;
Bn.typeName = "code.transaction.v2.MigrateToPrivacy2022Metadata";
Bn.fields = o.util.newFieldList(() => [
  { no: 1, name: "quarks", kind: "scalar", T: 4 }
]);
class In extends x {
  constructor(e) {
    super(), this.id = 0, this.type = { case: void 0 }, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new In().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new In().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new In().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(In, e, n);
  }
}
In.runtime = o;
In.typeName = "code.transaction.v2.Action";
In.fields = o.util.newFieldList(() => [
  { no: 1, name: "id", kind: "scalar", T: 13 },
  { no: 2, name: "open_account", kind: "message", T: On, oneof: "type" },
  { no: 3, name: "close_empty_account", kind: "message", T: kn, oneof: "type" },
  { no: 4, name: "close_dormant_account", kind: "message", T: Sn, oneof: "type" },
  { no: 5, name: "no_privacy_transfer", kind: "message", T: vn, oneof: "type" },
  { no: 6, name: "no_privacy_withdraw", kind: "message", T: Jn, oneof: "type" },
  { no: 7, name: "temporary_privacy_transfer", kind: "message", T: Fn, oneof: "type" },
  { no: 8, name: "temporary_privacy_exchange", kind: "message", T: An, oneof: "type" },
  { no: 9, name: "permanent_privacy_upgrade", kind: "message", T: Un, oneof: "type" }
]);
class On extends x {
  constructor(e) {
    super(), this.accountType = st.UNKNOWN, this.index = de.zero, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new On().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new On().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new On().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(On, e, n);
  }
}
On.runtime = o;
On.typeName = "code.transaction.v2.OpenAccountAction";
On.fields = o.util.newFieldList(() => [
  { no: 1, name: "account_type", kind: "enum", T: o.getEnumType(st) },
  { no: 2, name: "owner", kind: "message", T: z },
  { no: 3, name: "index", kind: "scalar", T: 4 },
  { no: 4, name: "authority", kind: "message", T: z },
  { no: 5, name: "token", kind: "message", T: z },
  { no: 6, name: "authority_signature", kind: "message", T: ye }
]);
class kn extends x {
  constructor(e) {
    super(), this.accountType = st.UNKNOWN, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new kn().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new kn().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new kn().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(kn, e, n);
  }
}
kn.runtime = o;
kn.typeName = "code.transaction.v2.CloseEmptyAccountAction";
kn.fields = o.util.newFieldList(() => [
  { no: 1, name: "account_type", kind: "enum", T: o.getEnumType(st) },
  { no: 2, name: "authority", kind: "message", T: z },
  { no: 3, name: "token", kind: "message", T: z }
]);
class Sn extends x {
  constructor(e) {
    super(), this.accountType = st.UNKNOWN, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Sn().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Sn().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Sn().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Sn, e, n);
  }
}
Sn.runtime = o;
Sn.typeName = "code.transaction.v2.CloseDormantAccountAction";
Sn.fields = o.util.newFieldList(() => [
  { no: 1, name: "account_type", kind: "enum", T: o.getEnumType(st) },
  { no: 2, name: "authority", kind: "message", T: z },
  { no: 3, name: "token", kind: "message", T: z },
  { no: 4, name: "destination", kind: "message", T: z }
]);
class vn extends x {
  constructor(e) {
    super(), this.amount = de.zero, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new vn().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new vn().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new vn().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(vn, e, n);
  }
}
vn.runtime = o;
vn.typeName = "code.transaction.v2.NoPrivacyTransferAction";
vn.fields = o.util.newFieldList(() => [
  { no: 1, name: "authority", kind: "message", T: z },
  { no: 2, name: "source", kind: "message", T: z },
  { no: 3, name: "destination", kind: "message", T: z },
  { no: 4, name: "amount", kind: "scalar", T: 4 }
]);
class Jn extends x {
  constructor(e) {
    super(), this.amount = de.zero, this.shouldClose = !1, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Jn().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Jn().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Jn().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Jn, e, n);
  }
}
Jn.runtime = o;
Jn.typeName = "code.transaction.v2.NoPrivacyWithdrawAction";
Jn.fields = o.util.newFieldList(() => [
  { no: 1, name: "authority", kind: "message", T: z },
  { no: 2, name: "source", kind: "message", T: z },
  { no: 3, name: "destination", kind: "message", T: z },
  { no: 4, name: "amount", kind: "scalar", T: 4 },
  { no: 5, name: "should_close", kind: "scalar", T: 8 }
]);
class Fn extends x {
  constructor(e) {
    super(), this.amount = de.zero, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Fn().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Fn().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Fn().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Fn, e, n);
  }
}
Fn.runtime = o;
Fn.typeName = "code.transaction.v2.TemporaryPrivacyTransferAction";
Fn.fields = o.util.newFieldList(() => [
  { no: 1, name: "authority", kind: "message", T: z },
  { no: 2, name: "source", kind: "message", T: z },
  { no: 3, name: "destination", kind: "message", T: z },
  { no: 4, name: "amount", kind: "scalar", T: 4 }
]);
class An extends x {
  constructor(e) {
    super(), this.amount = de.zero, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new An().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new An().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new An().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(An, e, n);
  }
}
An.runtime = o;
An.typeName = "code.transaction.v2.TemporaryPrivacyExchangeAction";
An.fields = o.util.newFieldList(() => [
  { no: 1, name: "authority", kind: "message", T: z },
  { no: 2, name: "source", kind: "message", T: z },
  { no: 3, name: "destination", kind: "message", T: z },
  { no: 4, name: "amount", kind: "scalar", T: 4 }
]);
class Un extends x {
  constructor(e) {
    super(), this.actionId = 0, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Un().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Un().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Un().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Un, e, n);
  }
}
Un.runtime = o;
Un.typeName = "code.transaction.v2.PermanentPrivacyUpgradeAction";
Un.fields = o.util.newFieldList(() => [
  { no: 1, name: "action_id", kind: "scalar", T: 13 }
]);
class Ln extends x {
  constructor(e) {
    super(), this.actionId = 0, this.nonces = [], this.type = { case: void 0 }, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Ln().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Ln().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Ln().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Ln, e, n);
  }
}
Ln.runtime = o;
Ln.typeName = "code.transaction.v2.ServerParameter";
Ln.fields = o.util.newFieldList(() => [
  { no: 1, name: "action_id", kind: "scalar", T: 13 },
  { no: 2, name: "nonces", kind: "message", T: Cn, repeated: !0 },
  { no: 3, name: "open_account", kind: "message", T: Dn, oneof: "type" },
  { no: 4, name: "close_empty_account", kind: "message", T: _n, oneof: "type" },
  { no: 5, name: "close_dormant_account", kind: "message", T: qn, oneof: "type" },
  { no: 6, name: "no_privacy_transfer", kind: "message", T: Kn, oneof: "type" },
  { no: 7, name: "no_privacy_withdraw", kind: "message", T: Pn, oneof: "type" },
  { no: 8, name: "temporary_privacy_transfer", kind: "message", T: $n, oneof: "type" },
  { no: 9, name: "temporary_privacy_exchange", kind: "message", T: Mn, oneof: "type" },
  { no: 10, name: "permanent_privacy_upgrade", kind: "message", T: Vn, oneof: "type" }
]);
class Cn extends x {
  constructor(e) {
    super(), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Cn().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Cn().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Cn().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Cn, e, n);
  }
}
Cn.runtime = o;
Cn.typeName = "code.transaction.v2.NoncedTransactionMetadata";
Cn.fields = o.util.newFieldList(() => [
  { no: 1, name: "nonce", kind: "message", T: z },
  { no: 2, name: "blockhash", kind: "message", T: Wt }
]);
class Dn extends x {
  constructor(e) {
    super(), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Dn().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Dn().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Dn().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Dn, e, n);
  }
}
Dn.runtime = o;
Dn.typeName = "code.transaction.v2.OpenAccountServerParameter";
Dn.fields = o.util.newFieldList(() => []);
class _n extends x {
  constructor(e) {
    super(), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new _n().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new _n().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new _n().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(_n, e, n);
  }
}
_n.runtime = o;
_n.typeName = "code.transaction.v2.CloseEmptyAccountServerParameter";
_n.fields = o.util.newFieldList(() => []);
class qn extends x {
  constructor(e) {
    super(), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new qn().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new qn().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new qn().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(qn, e, n);
  }
}
qn.runtime = o;
qn.typeName = "code.transaction.v2.CloseDormantAccountServerParameter";
qn.fields = o.util.newFieldList(() => []);
class Kn extends x {
  constructor(e) {
    super(), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Kn().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Kn().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Kn().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Kn, e, n);
  }
}
Kn.runtime = o;
Kn.typeName = "code.transaction.v2.NoPrivacyTransferServerParameter";
Kn.fields = o.util.newFieldList(() => []);
class Pn extends x {
  constructor(e) {
    super(), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Pn().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Pn().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Pn().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Pn, e, n);
  }
}
Pn.runtime = o;
Pn.typeName = "code.transaction.v2.NoPrivacyWithdrawServerParameter";
Pn.fields = o.util.newFieldList(() => []);
class $n extends x {
  constructor(e) {
    super(), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new $n().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new $n().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new $n().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals($n, e, n);
  }
}
$n.runtime = o;
$n.typeName = "code.transaction.v2.TemporaryPrivacyTransferServerParameter";
$n.fields = o.util.newFieldList(() => [
  { no: 1, name: "treasury", kind: "message", T: z },
  { no: 2, name: "recent_root", kind: "message", T: ii }
]);
class Mn extends x {
  constructor(e) {
    super(), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Mn().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Mn().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Mn().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Mn, e, n);
  }
}
Mn.runtime = o;
Mn.typeName = "code.transaction.v2.TemporaryPrivacyExchangeServerParameter";
Mn.fields = o.util.newFieldList(() => [
  { no: 1, name: "treasury", kind: "message", T: z },
  { no: 2, name: "recent_root", kind: "message", T: ii }
]);
class Vn extends x {
  constructor(e) {
    super(), this.newCommitmentAmount = de.zero, this.merkleProof = [], o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Vn().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Vn().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Vn().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Vn, e, n);
  }
}
Vn.runtime = o;
Vn.typeName = "code.transaction.v2.PermanentPrivacyUpgradeServerParameter";
Vn.fields = o.util.newFieldList(() => [
  { no: 1, name: "new_commitment", kind: "message", T: z },
  { no: 2, name: "new_commitment_transcript", kind: "message", T: ii },
  { no: 3, name: "new_commitment_destination", kind: "message", T: z },
  { no: 4, name: "new_commitment_amount", kind: "scalar", T: 4 },
  { no: 5, name: "merkle_root", kind: "message", T: ii },
  { no: 6, name: "merkle_proof", kind: "message", T: ii, repeated: !0 }
]);
class Hn extends x {
  constructor(e) {
    super(), this.type = { case: void 0 }, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Hn().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Hn().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Hn().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Hn, e, n);
  }
}
Hn.runtime = o;
Hn.typeName = "code.transaction.v2.ErrorDetails";
Hn.fields = o.util.newFieldList(() => [
  { no: 1, name: "reason_string", kind: "message", T: jn, oneof: "type" },
  { no: 2, name: "invalid_signature", kind: "message", T: Rn, oneof: "type" }
]);
class jn extends x {
  constructor(e) {
    super(), this.reason = "", o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new jn().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new jn().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new jn().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(jn, e, n);
  }
}
jn.runtime = o;
jn.typeName = "code.transaction.v2.ReasonStringErrorDetails";
jn.fields = o.util.newFieldList(() => [
  { no: 1, name: "reason", kind: "scalar", T: 9 }
]);
class Rn extends x {
  constructor(e) {
    super(), this.actionId = 0, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Rn().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Rn().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Rn().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Rn, e, n);
  }
}
Rn.runtime = o;
Rn.typeName = "code.transaction.v2.InvalidSignatureErrorDetails";
Rn.fields = o.util.newFieldList(() => [
  { no: 1, name: "action_id", kind: "scalar", T: 13 },
  { no: 2, name: "expected_transaction", kind: "message", T: vt },
  { no: 3, name: "provided_signature", kind: "message", T: ye }
]);
class zn extends x {
  constructor(e) {
    super(), this.actions = [], o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new zn().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new zn().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new zn().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(zn, e, n);
  }
}
zn.runtime = o;
zn.typeName = "code.transaction.v2.UpgradeableIntent";
zn.fields = o.util.newFieldList(() => [
  { no: 1, name: "id", kind: "message", T: tt },
  { no: 2, name: "actions", kind: "message", T: Wn, repeated: !0 }
]);
class Wn extends x {
  constructor(e) {
    super(), this.actionId = 0, this.sourceAccountType = st.UNKNOWN, this.sourceDerivationIndex = de.zero, this.originalAmount = de.zero, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Wn().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Wn().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Wn().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Wn, e, n);
  }
}
Wn.runtime = o;
Wn.typeName = "code.transaction.v2.UpgradeableIntent.UpgradeablePrivateAction";
Wn.fields = o.util.newFieldList(() => [
  { no: 1, name: "transaction_blob", kind: "message", T: vt },
  { no: 2, name: "client_signature", kind: "message", T: ye },
  { no: 3, name: "action_id", kind: "scalar", T: 13 },
  { no: 4, name: "source_account_type", kind: "enum", T: o.getEnumType(st) },
  { no: 5, name: "source_derivation_index", kind: "scalar", T: 4 },
  { no: 6, name: "original_destination", kind: "message", T: z },
  { no: 7, name: "original_amount", kind: "scalar", T: 4 },
  { no: 8, name: "treasury", kind: "message", T: z },
  { no: 9, name: "recent_root", kind: "message", T: ii }
]);
class Yn extends x {
  constructor(e) {
    super(), this.paymentType = qs.UNKNOWN, this.isWithdraw = !1, this.isDeposit = !1, this.isRemoteSend = !1, this.isReturned = !1, this.isAirdrop = !1, this.airdropType = Mt.UNKNOWN, this.isMicroPayment = !1, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Yn().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Yn().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Yn().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Yn, e, n);
  }
}
Yn.runtime = o;
Yn.typeName = "code.transaction.v2.PaymentHistoryItem";
Yn.fields = o.util.newFieldList(() => [
  { no: 1, name: "cursor", kind: "message", T: Ft },
  { no: 2, name: "exchange_data", kind: "message", T: Ve },
  { no: 3, name: "payment_type", kind: "enum", T: o.getEnumType(qs) },
  { no: 4, name: "is_withdraw", kind: "scalar", T: 8 },
  { no: 5, name: "is_deposit", kind: "scalar", T: 8 },
  { no: 6, name: "timestamp", kind: "message", T: ve },
  { no: 7, name: "is_remote_send", kind: "scalar", T: 8 },
  { no: 8, name: "is_returned", kind: "scalar", T: 8 },
  { no: 9, name: "is_airdrop", kind: "scalar", T: 8 },
  { no: 10, name: "airdrop_type", kind: "enum", T: o.getEnumType(Mt) },
  { no: 11, name: "is_micro_payment", kind: "scalar", T: 8 }
]);
var qs;
(function(t) {
  t[t.UNKNOWN = 0] = "UNKNOWN", t[t.SEND = 1] = "SEND", t[t.RECEIVE = 2] = "RECEIVE";
})(qs || (qs = {}));
o.util.setEnumType(qs, "code.transaction.v2.PaymentHistoryItem.PaymentType", [
  { no: 0, name: "UNKNOWN" },
  { no: 1, name: "SEND" },
  { no: 2, name: "RECEIVE" }
]);
class Ve extends x {
  constructor(e) {
    super(), this.currency = "", this.exchangeRate = 0, this.nativeAmount = 0, this.quarks = de.zero, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Ve().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Ve().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Ve().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Ve, e, n);
  }
}
Ve.runtime = o;
Ve.typeName = "code.transaction.v2.ExchangeData";
Ve.fields = o.util.newFieldList(() => [
  { no: 1, name: "currency", kind: "scalar", T: 9 },
  { no: 2, name: "exchange_rate", kind: "scalar", T: 1 },
  { no: 3, name: "native_amount", kind: "scalar", T: 1 },
  { no: 4, name: "quarks", kind: "scalar", T: 4 }
]);
class Jt extends x {
  constructor(e) {
    super(), this.currency = "", this.nativeAmount = 0, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Jt().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Jt().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Jt().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Jt, e, n);
  }
}
Jt.runtime = o;
Jt.typeName = "code.transaction.v2.ExchangeDataWithoutRate";
Jt.fields = o.util.newFieldList(() => [
  { no: 1, name: "currency", kind: "scalar", T: 9 },
  { no: 2, name: "native_amount", kind: "scalar", T: 1 }
]);
class Xn extends x {
  constructor(e) {
    super(), this.nextTransaction = 0, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Xn().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Xn().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Xn().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Xn, e, n);
  }
}
Xn.runtime = o;
Xn.typeName = "code.transaction.v2.RemainingSendLimit";
Xn.fields = o.util.newFieldList(() => [
  { no: 1, name: "next_transaction", kind: "scalar", T: 2 }
]);
class Zn extends x {
  constructor(e) {
    super(), this.maxQuarks = de.zero, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Zn().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Zn().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Zn().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Zn, e, n);
  }
}
Zn.runtime = o;
Zn.typeName = "code.transaction.v2.DepositLimit";
Zn.fields = o.util.newFieldList(() => [
  { no: 1, name: "max_quarks", kind: "scalar", T: 4 }
]);
class Gn extends x {
  constructor(e) {
    super(), this.perTransaction = 0, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Gn().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Gn().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Gn().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Gn, e, n);
  }
}
Gn.runtime = o;
Gn.typeName = "code.transaction.v2.MicroPaymentLimit";
Gn.fields = o.util.newFieldList(() => [
  { no: 1, name: "per_transaction", kind: "scalar", T: 2 }
]);
class Ft extends x {
  constructor(e) {
    super(), this.value = new Uint8Array(0), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Ft().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Ft().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Ft().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Ft, e, n);
  }
}
Ft.runtime = o;
Ft.typeName = "code.transaction.v2.Cursor";
Ft.fields = o.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class Qn extends x {
  constructor(e) {
    super(), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Qn().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Qn().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Qn().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Qn, e, n);
  }
}
Qn.runtime = o;
Qn.typeName = "code.account.v1.IsCodeAccountRequest";
Qn.fields = o.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: z },
  { no: 2, name: "signature", kind: "message", T: ye }
]);
class er extends x {
  constructor(e) {
    super(), this.result = Ks.OK, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new er().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new er().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new er().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(er, e, n);
  }
}
er.runtime = o;
er.typeName = "code.account.v1.IsCodeAccountResponse";
er.fields = o.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(Ks) }
]);
var Ks;
(function(t) {
  t[t.OK = 0] = "OK", t[t.NOT_FOUND = 1] = "NOT_FOUND", t[t.UNLOCKED_TIMELOCK_ACCOUNT = 2] = "UNLOCKED_TIMELOCK_ACCOUNT";
})(Ks || (Ks = {}));
o.util.setEnumType(Ks, "code.account.v1.IsCodeAccountResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" },
  { no: 2, name: "UNLOCKED_TIMELOCK_ACCOUNT" }
]);
class tr extends x {
  constructor(e) {
    super(), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new tr().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new tr().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new tr().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(tr, e, n);
  }
}
tr.runtime = o;
tr.typeName = "code.account.v1.GetTokenAccountInfosRequest";
tr.fields = o.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: z },
  { no: 2, name: "signature", kind: "message", T: ye }
]);
class nr extends x {
  constructor(e) {
    super(), this.result = Ps.OK, this.tokenAccountInfos = {}, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new nr().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new nr().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new nr().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(nr, e, n);
  }
}
nr.runtime = o;
nr.typeName = "code.account.v1.GetTokenAccountInfosResponse";
nr.fields = o.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(Ps) },
  { no: 2, name: "token_account_infos", kind: "map", K: 9, V: { kind: "message", T: rr } }
]);
var Ps;
(function(t) {
  t[t.OK = 0] = "OK", t[t.NOT_FOUND = 1] = "NOT_FOUND";
})(Ps || (Ps = {}));
o.util.setEnumType(Ps, "code.account.v1.GetTokenAccountInfosResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" }
]);
class rr extends x {
  constructor(e) {
    super(), this.accountType = st.UNKNOWN, this.index = de.zero, this.balanceSource = $s.UNKNOWN, this.balance = de.zero, this.managementState = Ms.UNKNOWN, this.blockchainState = Vs.UNKNOWN, this.mustRotate = !1, this.claimState = Hs.UNKNOWN, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new rr().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new rr().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new rr().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(rr, e, n);
  }
}
rr.runtime = o;
rr.typeName = "code.account.v1.TokenAccountInfo";
rr.fields = o.util.newFieldList(() => [
  { no: 1, name: "address", kind: "message", T: z },
  { no: 2, name: "owner", kind: "message", T: z },
  { no: 3, name: "authority", kind: "message", T: z },
  { no: 4, name: "account_type", kind: "enum", T: o.getEnumType(st) },
  { no: 5, name: "index", kind: "scalar", T: 4 },
  { no: 6, name: "balance_source", kind: "enum", T: o.getEnumType($s) },
  { no: 7, name: "balance", kind: "scalar", T: 4 },
  { no: 8, name: "management_state", kind: "enum", T: o.getEnumType(Ms) },
  { no: 9, name: "blockchain_state", kind: "enum", T: o.getEnumType(Vs) },
  { no: 10, name: "must_rotate", kind: "scalar", T: 8 },
  { no: 11, name: "claim_state", kind: "enum", T: o.getEnumType(Hs) },
  { no: 12, name: "original_exchange_data", kind: "message", T: Ve }
]);
var $s;
(function(t) {
  t[t.UNKNOWN = 0] = "UNKNOWN", t[t.BLOCKCHAIN = 1] = "BLOCKCHAIN", t[t.CACHE = 2] = "CACHE";
})($s || ($s = {}));
o.util.setEnumType($s, "code.account.v1.TokenAccountInfo.BalanceSource", [
  { no: 0, name: "BALANCE_SOURCE_UNKNOWN" },
  { no: 1, name: "BALANCE_SOURCE_BLOCKCHAIN" },
  { no: 2, name: "BALANCE_SOURCE_CACHE" }
]);
var Ms;
(function(t) {
  t[t.UNKNOWN = 0] = "UNKNOWN", t[t.NONE = 1] = "NONE", t[t.LOCKING = 2] = "LOCKING", t[t.LOCKED = 3] = "LOCKED", t[t.UNLOCKING = 4] = "UNLOCKING", t[t.UNLOCKED = 5] = "UNLOCKED", t[t.CLOSING = 6] = "CLOSING", t[t.CLOSED = 7] = "CLOSED";
})(Ms || (Ms = {}));
o.util.setEnumType(Ms, "code.account.v1.TokenAccountInfo.ManagementState", [
  { no: 0, name: "MANAGEMENT_STATE_UNKNOWN" },
  { no: 1, name: "MANAGEMENT_STATE_NONE" },
  { no: 2, name: "MANAGEMENT_STATE_LOCKING" },
  { no: 3, name: "MANAGEMENT_STATE_LOCKED" },
  { no: 4, name: "MANAGEMENT_STATE_UNLOCKING" },
  { no: 5, name: "MANAGEMENT_STATE_UNLOCKED" },
  { no: 6, name: "MANAGEMENT_STATE_CLOSING" },
  { no: 7, name: "MANAGEMENT_STATE_CLOSED" }
]);
var Vs;
(function(t) {
  t[t.UNKNOWN = 0] = "UNKNOWN", t[t.DOES_NOT_EXIST = 1] = "DOES_NOT_EXIST", t[t.EXISTS = 2] = "EXISTS";
})(Vs || (Vs = {}));
o.util.setEnumType(Vs, "code.account.v1.TokenAccountInfo.BlockchainState", [
  { no: 0, name: "BLOCKCHAIN_STATE_UNKNOWN" },
  { no: 1, name: "BLOCKCHAIN_STATE_DOES_NOT_EXIST" },
  { no: 2, name: "BLOCKCHAIN_STATE_EXISTS" }
]);
var Hs;
(function(t) {
  t[t.UNKNOWN = 0] = "UNKNOWN", t[t.NOT_CLAIMED = 1] = "NOT_CLAIMED", t[t.CLAIMED = 2] = "CLAIMED", t[t.EXPIRED = 3] = "EXPIRED";
})(Hs || (Hs = {}));
o.util.setEnumType(Hs, "code.account.v1.TokenAccountInfo.ClaimState", [
  { no: 0, name: "CLAIM_STATE_UNKNOWN" },
  { no: 1, name: "CLAIM_STATE_NOT_CLAIMED" },
  { no: 2, name: "CLAIM_STATE_CLAIMED" },
  { no: 3, name: "CLAIM_STATE_EXPIRED" }
]);
ge.Unary, ge.Unary;
class ir extends x {
  constructor(e) {
    super(), this.contacts = [], o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new ir().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new ir().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new ir().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(ir, e, n);
  }
}
ir.runtime = o;
ir.typeName = "code.contact.v1.AddContactsRequest";
ir.fields = o.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: z },
  { no: 2, name: "signature", kind: "message", T: ye },
  { no: 3, name: "container_id", kind: "message", T: nt },
  { no: 4, name: "contacts", kind: "message", T: Ke, repeated: !0 }
]);
class sr extends x {
  constructor(e) {
    super(), this.result = js.OK, this.contactStatus = {}, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new sr().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new sr().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new sr().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(sr, e, n);
  }
}
sr.runtime = o;
sr.typeName = "code.contact.v1.AddContactsResponse";
sr.fields = o.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(js) },
  { no: 2, name: "contact_status", kind: "map", K: 9, V: { kind: "message", T: At } }
]);
var js;
(function(t) {
  t[t.OK = 0] = "OK";
})(js || (js = {}));
o.util.setEnumType(js, "code.contact.v1.AddContactsResponse.Result", [
  { no: 0, name: "OK" }
]);
class or extends x {
  constructor(e) {
    super(), this.contacts = [], o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new or().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new or().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new or().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(or, e, n);
  }
}
or.runtime = o;
or.typeName = "code.contact.v1.RemoveContactsRequest";
or.fields = o.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: z },
  { no: 2, name: "signature", kind: "message", T: ye },
  { no: 3, name: "container_id", kind: "message", T: nt },
  { no: 4, name: "contacts", kind: "message", T: Ke, repeated: !0 }
]);
class ar extends x {
  constructor(e) {
    super(), this.result = Rs.OK, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new ar().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new ar().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new ar().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(ar, e, n);
  }
}
ar.runtime = o;
ar.typeName = "code.contact.v1.RemoveContactsResponse";
ar.fields = o.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(Rs) }
]);
var Rs;
(function(t) {
  t[t.OK = 0] = "OK";
})(Rs || (Rs = {}));
o.util.setEnumType(Rs, "code.contact.v1.RemoveContactsResponse.Result", [
  { no: 0, name: "OK" }
]);
class cr extends x {
  constructor(e) {
    super(), this.includeOnlyInAppContacts = !1, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new cr().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new cr().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new cr().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(cr, e, n);
  }
}
cr.runtime = o;
cr.typeName = "code.contact.v1.GetContactsRequest";
cr.fields = o.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: z },
  { no: 2, name: "signature", kind: "message", T: ye },
  { no: 3, name: "container_id", kind: "message", T: nt },
  { no: 4, name: "page_token", kind: "message", T: bo },
  { no: 5, name: "include_only_in_app_contacts", kind: "scalar", T: 8 }
]);
class ur extends x {
  constructor(e) {
    super(), this.result = zs.OK, this.contacts = [], o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new ur().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new ur().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new ur().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(ur, e, n);
  }
}
ur.runtime = o;
ur.typeName = "code.contact.v1.GetContactsResponse";
ur.fields = o.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(zs) },
  { no: 2, name: "contacts", kind: "message", T: lr, repeated: !0 },
  { no: 3, name: "next_page_token", kind: "message", T: bo }
]);
var zs;
(function(t) {
  t[t.OK = 0] = "OK";
})(zs || (zs = {}));
o.util.setEnumType(zs, "code.contact.v1.GetContactsResponse.Result", [
  { no: 0, name: "OK" }
]);
class lr extends x {
  constructor(e) {
    super(), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new lr().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new lr().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new lr().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(lr, e, n);
  }
}
lr.runtime = o;
lr.typeName = "code.contact.v1.Contact";
lr.fields = o.util.newFieldList(() => [
  { no: 1, name: "phone_number", kind: "message", T: Ke },
  { no: 2, name: "status", kind: "message", T: At }
]);
class At extends x {
  constructor(e) {
    super(), this.isRegistered = !1, this.isInvited = !1, this.isInviteRevoked = !1, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new At().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new At().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new At().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(At, e, n);
  }
}
At.runtime = o;
At.typeName = "code.contact.v1.ContactStatus";
At.fields = o.util.newFieldList(() => [
  { no: 1, name: "is_registered", kind: "scalar", T: 8 },
  { no: 2, name: "is_invited", kind: "scalar", T: 8 },
  { no: 3, name: "is_invite_revoked", kind: "scalar", T: 8 }
]);
let bo = class ps extends x {
  constructor(e) {
    super(), this.value = new Uint8Array(0), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new ps().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new ps().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new ps().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(ps, e, n);
  }
};
bo.runtime = o;
bo.typeName = "code.contact.v1.PageToken";
bo.fields = o.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
ge.Unary, ge.Unary, ge.Unary;
class fr extends x {
  constructor(e) {
    super(), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new fr().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new fr().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new fr().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(fr, e, n);
  }
}
fr.runtime = o;
fr.typeName = "code.currency.v1.GetAllRatesRequest";
fr.fields = o.util.newFieldList(() => [
  { no: 1, name: "timestamp", kind: "message", T: ve }
]);
class dr extends x {
  constructor(e) {
    super(), this.result = Ws.OK, this.rates = {}, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new dr().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new dr().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new dr().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(dr, e, n);
  }
}
dr.runtime = o;
dr.typeName = "code.currency.v1.GetAllRatesResponse";
dr.fields = o.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(Ws) },
  { no: 2, name: "as_of", kind: "message", T: ve },
  { no: 3, name: "rates", kind: "map", K: 9, V: { kind: "scalar", T: 1 } }
]);
var Ws;
(function(t) {
  t[t.OK = 0] = "OK", t[t.MISSING_DATA = 1] = "MISSING_DATA";
})(Ws || (Ws = {}));
o.util.setEnumType(Ws, "code.currency.v1.GetAllRatesResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "MISSING_DATA" }
]);
class mr extends x {
  constructor(e) {
    super(), this.forSymbol = "", this.interval = Ys.RAW, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new mr().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new mr().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new mr().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(mr, e, n);
  }
}
mr.runtime = o;
mr.typeName = "code.currency.v1.GetExchangeRateHistoryRequest";
mr.fields = o.util.newFieldList(() => [
  { no: 5, name: "for_symbol", kind: "scalar", T: 9 },
  { no: 2, name: "interval", kind: "enum", T: o.getEnumType(Ys) },
  { no: 3, name: "start", kind: "message", T: ve },
  { no: 4, name: "end", kind: "message", T: ve }
]);
var Ys;
(function(t) {
  t[t.RAW = 0] = "RAW", t[t.HOUR = 1] = "HOUR", t[t.DAY = 2] = "DAY", t[t.WEEK = 3] = "WEEK", t[t.MONTH = 4] = "MONTH";
})(Ys || (Ys = {}));
o.util.setEnumType(Ys, "code.currency.v1.GetExchangeRateHistoryRequest.Interval", [
  { no: 0, name: "INTERVAL_RAW" },
  { no: 1, name: "INTERVAL_HOUR" },
  { no: 2, name: "INTERVAL_DAY" },
  { no: 3, name: "INTERVAL_WEEK" },
  { no: 4, name: "INTERVAL_MONTH" }
]);
class hr extends x {
  constructor(e) {
    super(), this.result = Xs.OK, this.items = [], o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new hr().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new hr().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new hr().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(hr, e, n);
  }
}
hr.runtime = o;
hr.typeName = "code.currency.v1.GetExchangeRateHistoryResponse";
hr.fields = o.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(Xs) },
  { no: 2, name: "items", kind: "message", T: pr, repeated: !0 }
]);
var Xs;
(function(t) {
  t[t.OK = 0] = "OK", t[t.NOT_FOUND = 1] = "NOT_FOUND";
})(Xs || (Xs = {}));
o.util.setEnumType(Xs, "code.currency.v1.GetExchangeRateHistoryResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" }
]);
class pr extends x {
  constructor(e) {
    super(), this.rate = 0, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new pr().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new pr().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new pr().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(pr, e, n);
  }
}
pr.runtime = o;
pr.typeName = "code.currency.v1.ExchangeRate";
pr.fields = o.util.newFieldList(() => [
  { no: 2, name: "rate", kind: "scalar", T: 1 },
  { no: 1, name: "time", kind: "message", T: ve }
]);
ge.Unary, ge.Unary;
var Zs;
(function(t) {
  t[t.NOT_INVITED = 0] = "NOT_INVITED", t[t.INVITED = 1] = "INVITED", t[t.REGISTERED = 2] = "REGISTERED", t[t.REVOKED = 3] = "REVOKED";
})(Zs || (Zs = {}));
o.util.setEnumType(Zs, "code.invite.v2.InvitationStatus", [
  { no: 0, name: "NOT_INVITED" },
  { no: 1, name: "INVITED" },
  { no: 2, name: "REGISTERED" },
  { no: 3, name: "REVOKED" }
]);
class gr extends x {
  constructor(e) {
    super(), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new gr().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new gr().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new gr().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(gr, e, n);
  }
}
gr.runtime = o;
gr.typeName = "code.invite.v2.GetInviteCountRequest";
gr.fields = o.util.newFieldList(() => [
  { no: 1, name: "user_id", kind: "message", T: ut }
]);
class wr extends x {
  constructor(e) {
    super(), this.result = Gs.OK, this.inviteCount = 0, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new wr().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new wr().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new wr().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(wr, e, n);
  }
}
wr.runtime = o;
wr.typeName = "code.invite.v2.GetInviteCountResponse";
wr.fields = o.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(Gs) },
  { no: 2, name: "invite_count", kind: "scalar", T: 13 }
]);
var Gs;
(function(t) {
  t[t.OK = 0] = "OK";
})(Gs || (Gs = {}));
o.util.setEnumType(Gs, "code.invite.v2.GetInviteCountResponse.Result", [
  { no: 0, name: "OK" }
]);
class yr extends x {
  constructor(e) {
    super(), this.source = { case: void 0 }, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new yr().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new yr().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new yr().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(yr, e, n);
  }
}
yr.runtime = o;
yr.typeName = "code.invite.v2.InvitePhoneNumberRequest";
yr.fields = o.util.newFieldList(() => [
  { no: 1, name: "user", kind: "message", T: ut, oneof: "source" },
  { no: 3, name: "invite_code", kind: "message", T: Nr, oneof: "source" },
  { no: 2, name: "receiver", kind: "message", T: Ke }
]);
class Tr extends x {
  constructor(e) {
    super(), this.result = Qs.OK, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Tr().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Tr().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Tr().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Tr, e, n);
  }
}
Tr.runtime = o;
Tr.typeName = "code.invite.v2.InvitePhoneNumberResponse";
Tr.fields = o.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(Qs) }
]);
var Qs;
(function(t) {
  t[t.OK = 0] = "OK", t[t.INVITE_COUNT_EXCEEDED = 1] = "INVITE_COUNT_EXCEEDED", t[t.ALREADY_INVITED = 2] = "ALREADY_INVITED", t[t.USER_NOT_INVITED = 3] = "USER_NOT_INVITED", t[t.INVALID_RECEIVER_PHONE_NUMBER = 4] = "INVALID_RECEIVER_PHONE_NUMBER", t[t.INVITE_CODE_NOT_FOUND = 5] = "INVITE_CODE_NOT_FOUND", t[t.INVITE_CODE_REVOKED = 6] = "INVITE_CODE_REVOKED", t[t.INVITE_CODE_EXPIRED = 7] = "INVITE_CODE_EXPIRED";
})(Qs || (Qs = {}));
o.util.setEnumType(Qs, "code.invite.v2.InvitePhoneNumberResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INVITE_COUNT_EXCEEDED" },
  { no: 2, name: "ALREADY_INVITED" },
  { no: 3, name: "USER_NOT_INVITED" },
  { no: 4, name: "INVALID_RECEIVER_PHONE_NUMBER" },
  { no: 5, name: "INVITE_CODE_NOT_FOUND" },
  { no: 6, name: "INVITE_CODE_REVOKED" },
  { no: 7, name: "INVITE_CODE_EXPIRED" }
]);
class Er extends x {
  constructor(e) {
    super(), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Er().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Er().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Er().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Er, e, n);
  }
}
Er.runtime = o;
Er.typeName = "code.invite.v2.GetInvitationStatusRequest";
Er.fields = o.util.newFieldList(() => [
  { no: 1, name: "user_id", kind: "message", T: ut }
]);
class br extends x {
  constructor(e) {
    super(), this.result = eo.OK, this.status = Zs.NOT_INVITED, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new br().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new br().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new br().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(br, e, n);
  }
}
br.runtime = o;
br.typeName = "code.invite.v2.GetInvitationStatusResponse";
br.fields = o.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(eo) },
  { no: 2, name: "status", kind: "enum", T: o.getEnumType(Zs) }
]);
var eo;
(function(t) {
  t[t.OK = 0] = "OK";
})(eo || (eo = {}));
o.util.setEnumType(eo, "code.invite.v2.GetInvitationStatusResponse.Result", [
  { no: 0, name: "OK" }
]);
class Nr extends x {
  constructor(e) {
    super(), this.value = "", o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Nr().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Nr().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Nr().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Nr, e, n);
  }
}
Nr.runtime = o;
Nr.typeName = "code.invite.v2.InviteCode";
Nr.fields = o.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 9 }
]);
class Ei extends x {
  constructor(e) {
    super(), this.value = new Uint8Array(0), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Ei().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Ei().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Ei().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Ei, e, n);
  }
}
Ei.runtime = o;
Ei.typeName = "code.invite.v2.PageToken";
Ei.fields = o.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
ge.Unary, ge.Unary, ge.Unary;
class Ut extends x {
  constructor(e) {
    super(), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Ut().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Ut().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Ut().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Ut, e, n);
  }
}
Ut.runtime = o;
Ut.typeName = "code.messaging.v1.OpenMessageStreamRequest";
Ut.fields = o.util.newFieldList(() => [
  { no: 1, name: "rendezvous_key", kind: "message", T: ft },
  { no: 2, name: "signature", kind: "message", T: ye }
]);
class Lt extends x {
  constructor(e) {
    super(), this.messages = [], o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Lt().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Lt().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Lt().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Lt, e, n);
  }
}
Lt.runtime = o;
Lt.typeName = "code.messaging.v1.OpenMessageStreamResponse";
Lt.fields = o.util.newFieldList(() => [
  { no: 1, name: "messages", kind: "message", T: lt, repeated: !0 }
]);
class xr extends x {
  constructor(e) {
    super(), this.requestOrPong = { case: void 0 }, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new xr().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new xr().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new xr().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(xr, e, n);
  }
}
xr.runtime = o;
xr.typeName = "code.messaging.v1.OpenMessageStreamWithKeepAliveRequest";
xr.fields = o.util.newFieldList(() => [
  { no: 1, name: "request", kind: "message", T: Ut, oneof: "requestOrPong" },
  { no: 2, name: "pong", kind: "message", T: qr, oneof: "requestOrPong" }
]);
class Br extends x {
  constructor(e) {
    super(), this.responseOrPing = { case: void 0 }, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Br().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Br().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Br().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Br, e, n);
  }
}
Br.runtime = o;
Br.typeName = "code.messaging.v1.OpenMessageStreamWithKeepAliveResponse";
Br.fields = o.util.newFieldList(() => [
  { no: 1, name: "response", kind: "message", T: Lt, oneof: "responseOrPing" },
  { no: 2, name: "ping", kind: "message", T: _r, oneof: "responseOrPing" }
]);
class Ir extends x {
  constructor(e) {
    super(), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Ir().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Ir().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Ir().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Ir, e, n);
  }
}
Ir.runtime = o;
Ir.typeName = "code.messaging.v1.PollMessagesRequest";
Ir.fields = o.util.newFieldList(() => [
  { no: 1, name: "rendezvous_key", kind: "message", T: ft },
  { no: 2, name: "signature", kind: "message", T: ye }
]);
class Or extends x {
  constructor(e) {
    super(), this.messages = [], o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Or().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Or().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Or().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Or, e, n);
  }
}
Or.runtime = o;
Or.typeName = "code.messaging.v1.PollMessagesResponse";
Or.fields = o.util.newFieldList(() => [
  { no: 1, name: "messages", kind: "message", T: lt, repeated: !0 }
]);
class kr extends x {
  constructor(e) {
    super(), this.messageIds = [], o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new kr().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new kr().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new kr().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(kr, e, n);
  }
}
kr.runtime = o;
kr.typeName = "code.messaging.v1.AckMessagesRequest";
kr.fields = o.util.newFieldList(() => [
  { no: 1, name: "rendezvous_key", kind: "message", T: ft },
  { no: 2, name: "message_ids", kind: "message", T: yt, repeated: !0 }
]);
class Sr extends x {
  constructor(e) {
    super(), this.result = to.OK, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Sr().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Sr().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Sr().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Sr, e, n);
  }
}
Sr.runtime = o;
Sr.typeName = "code.messaging.v1.AckMesssagesResponse";
Sr.fields = o.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(to) }
]);
var to;
(function(t) {
  t[t.OK = 0] = "OK";
})(to || (to = {}));
o.util.setEnumType(to, "code.messaging.v1.AckMesssagesResponse.Result", [
  { no: 0, name: "OK" }
]);
class vr extends x {
  constructor(e) {
    super(), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new vr().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new vr().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new vr().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(vr, e, n);
  }
}
vr.runtime = o;
vr.typeName = "code.messaging.v1.SendMessageRequest";
vr.fields = o.util.newFieldList(() => [
  { no: 1, name: "message", kind: "message", T: lt },
  { no: 2, name: "rendezvous_key", kind: "message", T: ft },
  { no: 3, name: "signature", kind: "message", T: ye }
]);
class Jr extends x {
  constructor(e) {
    super(), this.result = no.OK, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Jr().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Jr().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Jr().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Jr, e, n);
  }
}
Jr.runtime = o;
Jr.typeName = "code.messaging.v1.SendMessageResponse";
Jr.fields = o.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(no) },
  { no: 2, name: "message_id", kind: "message", T: yt }
]);
var no;
(function(t) {
  t[t.OK = 0] = "OK", t[t.NO_ACTIVE_STREAM = 1] = "NO_ACTIVE_STREAM";
})(no || (no = {}));
o.util.setEnumType(no, "code.messaging.v1.SendMessageResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NO_ACTIVE_STREAM" }
]);
class yt extends x {
  constructor(e) {
    super(), this.value = new Uint8Array(0), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new yt().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new yt().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new yt().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(yt, e, n);
  }
}
yt.runtime = o;
yt.typeName = "code.messaging.v1.MessageId";
yt.fields = o.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class Fr extends x {
  constructor(e) {
    super(), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Fr().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Fr().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Fr().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Fr, e, n);
  }
}
Fr.runtime = o;
Fr.typeName = "code.messaging.v1.RequestToGrabBill";
Fr.fields = o.util.newFieldList(() => [
  { no: 1, name: "requestor_account", kind: "message", T: z }
]);
class Ct extends x {
  constructor(e) {
    super(), this.exchangeData = { case: void 0 }, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Ct().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Ct().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Ct().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Ct, e, n);
  }
}
Ct.runtime = o;
Ct.typeName = "code.messaging.v1.RequestToReceiveBill";
Ct.fields = o.util.newFieldList(() => [
  { no: 1, name: "requestor_account", kind: "message", T: z },
  { no: 2, name: "exact", kind: "message", T: Ve, oneof: "exchange_data" },
  { no: 3, name: "partial", kind: "message", T: Jt, oneof: "exchange_data" }
]);
class Ar extends x {
  constructor(e) {
    super(), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Ar().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Ar().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Ar().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Ar, e, n);
  }
}
Ar.runtime = o;
Ar.typeName = "code.messaging.v1.CodeScanned";
Ar.fields = o.util.newFieldList(() => [
  { no: 1, name: "timestamp", kind: "message", T: ve }
]);
class Ur extends x {
  constructor(e) {
    super(), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Ur().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Ur().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Ur().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Ur, e, n);
  }
}
Ur.runtime = o;
Ur.typeName = "code.messaging.v1.ClientRejectedPayment";
Ur.fields = o.util.newFieldList(() => [
  { no: 1, name: "intent_id", kind: "message", T: tt }
]);
class Lr extends x {
  constructor(e) {
    super(), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Lr().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Lr().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Lr().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Lr, e, n);
  }
}
Lr.runtime = o;
Lr.typeName = "code.messaging.v1.IntentSubmitted";
Lr.fields = o.util.newFieldList(() => [
  { no: 1, name: "intent_id", kind: "message", T: tt },
  { no: 2, name: "metadata", kind: "message", T: wt }
]);
class Cr extends x {
  constructor(e) {
    super(), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Cr().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Cr().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Cr().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Cr, e, n);
  }
}
Cr.runtime = o;
Cr.typeName = "code.messaging.v1.WebhookCalled";
Cr.fields = o.util.newFieldList(() => [
  { no: 1, name: "timestamp", kind: "message", T: ve }
]);
class Dr extends x {
  constructor(e) {
    super(), this.airdropType = Mt.UNKNOWN, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Dr().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Dr().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Dr().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Dr, e, n);
  }
}
Dr.runtime = o;
Dr.typeName = "code.messaging.v1.AirdropReceived";
Dr.fields = o.util.newFieldList(() => [
  { no: 1, name: "airdrop_type", kind: "enum", T: o.getEnumType(Mt) },
  { no: 2, name: "exchange_data", kind: "message", T: Ve },
  { no: 3, name: "timestamp", kind: "message", T: ve }
]);
class lt extends x {
  constructor(e) {
    super(), this.kind = { case: void 0 }, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new lt().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new lt().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new lt().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(lt, e, n);
  }
}
lt.runtime = o;
lt.typeName = "code.messaging.v1.Message";
lt.fields = o.util.newFieldList(() => [
  { no: 1, name: "id", kind: "message", T: yt },
  { no: 3, name: "send_message_request_signature", kind: "message", T: ye },
  { no: 2, name: "request_to_grab_bill", kind: "message", T: Fr, oneof: "kind" },
  { no: 5, name: "request_to_receive_bill", kind: "message", T: Ct, oneof: "kind" },
  { no: 6, name: "code_scanned", kind: "message", T: Ar, oneof: "kind" },
  { no: 7, name: "client_rejected_payment", kind: "message", T: Ur, oneof: "kind" },
  { no: 8, name: "intent_submitted", kind: "message", T: Lr, oneof: "kind" },
  { no: 9, name: "webhook_called", kind: "message", T: Cr, oneof: "kind" },
  { no: 4, name: "airdrop_received", kind: "message", T: Dr, oneof: "kind" }
]);
class ft extends x {
  constructor(e) {
    super(), this.value = new Uint8Array(0), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new ft().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new ft().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new ft().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(ft, e, n);
  }
}
ft.runtime = o;
ft.typeName = "code.messaging.v1.RendezvousKey";
ft.fields = o.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class _r extends x {
  constructor(e) {
    super(), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new _r().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new _r().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new _r().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(_r, e, n);
  }
}
_r.runtime = o;
_r.typeName = "code.messaging.v1.ServerPing";
_r.fields = o.util.newFieldList(() => [
  { no: 1, name: "timestamp", kind: "message", T: ve },
  { no: 2, name: "ping_delay", kind: "message", T: zt }
]);
class qr extends x {
  constructor(e) {
    super(), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new qr().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new qr().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new qr().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(qr, e, n);
  }
}
qr.runtime = o;
qr.typeName = "code.messaging.v1.ClientPong";
qr.fields = o.util.newFieldList(() => [
  { no: 1, name: "timestamp", kind: "message", T: ve }
]);
ge.ServerStreaming, ge.BiDiStreaming, ge.Unary, ge.Unary, ge.Unary;
class Kr extends x {
  constructor(e) {
    super(), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Kr().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Kr().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Kr().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Kr, e, n);
  }
}
Kr.runtime = o;
Kr.typeName = "code.phone.v1.SendVerificationCodeRequest";
Kr.fields = o.util.newFieldList(() => [
  { no: 1, name: "phone_number", kind: "message", T: Ke }
]);
class Pr extends x {
  constructor(e) {
    super(), this.result = ro.OK, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Pr().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Pr().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Pr().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Pr, e, n);
  }
}
Pr.runtime = o;
Pr.typeName = "code.phone.v1.SendVerificationCodeResponse";
Pr.fields = o.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(ro) }
]);
var ro;
(function(t) {
  t[t.OK = 0] = "OK", t[t.NOT_INVITED = 1] = "NOT_INVITED", t[t.RATE_LIMITED = 2] = "RATE_LIMITED", t[t.INVALID_PHONE_NUMBER = 3] = "INVALID_PHONE_NUMBER", t[t.UNSUPPORTED_PHONE_TYPE = 4] = "UNSUPPORTED_PHONE_TYPE";
})(ro || (ro = {}));
o.util.setEnumType(ro, "code.phone.v1.SendVerificationCodeResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_INVITED" },
  { no: 2, name: "RATE_LIMITED" },
  { no: 3, name: "INVALID_PHONE_NUMBER" },
  { no: 4, name: "UNSUPPORTED_PHONE_TYPE" }
]);
class $r extends x {
  constructor(e) {
    super(), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new $r().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new $r().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new $r().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals($r, e, n);
  }
}
$r.runtime = o;
$r.typeName = "code.phone.v1.CheckVerificationCodeRequest";
$r.fields = o.util.newFieldList(() => [
  { no: 1, name: "phone_number", kind: "message", T: Ke },
  { no: 2, name: "code", kind: "message", T: Dt }
]);
class Mr extends x {
  constructor(e) {
    super(), this.result = io.OK, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Mr().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Mr().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Mr().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Mr, e, n);
  }
}
Mr.runtime = o;
Mr.typeName = "code.phone.v1.CheckVerificationCodeResponse";
Mr.fields = o.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(io) },
  { no: 2, name: "linking_token", kind: "message", T: _t }
]);
var io;
(function(t) {
  t[t.OK = 0] = "OK", t[t.INVALID_CODE = 1] = "INVALID_CODE", t[t.NO_VERIFICATION = 2] = "NO_VERIFICATION", t[t.RATE_LIMITED = 3] = "RATE_LIMITED";
})(io || (io = {}));
o.util.setEnumType(io, "code.phone.v1.CheckVerificationCodeResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INVALID_CODE" },
  { no: 2, name: "NO_VERIFICATION" },
  { no: 3, name: "RATE_LIMITED" }
]);
class Vr extends x {
  constructor(e) {
    super(), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Vr().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Vr().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Vr().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Vr, e, n);
  }
}
Vr.runtime = o;
Vr.typeName = "code.phone.v1.GetAssociatedPhoneNumberRequest";
Vr.fields = o.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: z },
  { no: 2, name: "signature", kind: "message", T: ye }
]);
class Hr extends x {
  constructor(e) {
    super(), this.result = so.OK, this.isLinked = !1, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Hr().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Hr().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Hr().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Hr, e, n);
  }
}
Hr.runtime = o;
Hr.typeName = "code.phone.v1.GetAssociatedPhoneNumberResponse";
Hr.fields = o.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(so) },
  { no: 2, name: "phone_number", kind: "message", T: Ke },
  { no: 3, name: "is_linked", kind: "scalar", T: 8 }
]);
var so;
(function(t) {
  t[t.OK = 0] = "OK", t[t.NOT_FOUND = 1] = "NOT_FOUND", t[t.NOT_INVITED = 2] = "NOT_INVITED", t[t.UNLOCKED_TIMELOCK_ACCOUNT = 3] = "UNLOCKED_TIMELOCK_ACCOUNT";
})(so || (so = {}));
o.util.setEnumType(so, "code.phone.v1.GetAssociatedPhoneNumberResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" },
  { no: 2, name: "NOT_INVITED" },
  { no: 3, name: "UNLOCKED_TIMELOCK_ACCOUNT" }
]);
class Dt extends x {
  constructor(e) {
    super(), this.value = "", o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Dt().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Dt().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Dt().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Dt, e, n);
  }
}
Dt.runtime = o;
Dt.typeName = "code.phone.v1.VerificationCode";
Dt.fields = o.util.newFieldList(() => [
  { no: 2, name: "value", kind: "scalar", T: 9 }
]);
class _t extends x {
  constructor(e) {
    super(), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new _t().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new _t().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new _t().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(_t, e, n);
  }
}
_t.runtime = o;
_t.typeName = "code.phone.v1.PhoneLinkingToken";
_t.fields = o.util.newFieldList(() => [
  { no: 1, name: "phone_number", kind: "message", T: Ke },
  { no: 2, name: "code", kind: "message", T: Dt }
]);
ge.Unary, ge.Unary, ge.Unary;
var oo;
(function(t) {
  t[t.UNKNOWN = 0] = "UNKNOWN", t[t.FCM_ANDROID = 1] = "FCM_ANDROID", t[t.FCM_APNS = 2] = "FCM_APNS";
})(oo || (oo = {}));
o.util.setEnumType(oo, "code.push.v1.TokenType", [
  { no: 0, name: "UNKNOWN" },
  { no: 1, name: "FCM_ANDROID" },
  { no: 2, name: "FCM_APNS" }
]);
class jr extends x {
  constructor(e) {
    super(), this.pushToken = "", this.tokenType = oo.UNKNOWN, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new jr().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new jr().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new jr().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(jr, e, n);
  }
}
jr.runtime = o;
jr.typeName = "code.push.v1.AddTokenRequest";
jr.fields = o.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: z },
  { no: 2, name: "signature", kind: "message", T: ye },
  { no: 3, name: "container_id", kind: "message", T: nt },
  { no: 4, name: "push_token", kind: "scalar", T: 9 },
  { no: 5, name: "token_type", kind: "enum", T: o.getEnumType(oo) }
]);
class Rr extends x {
  constructor(e) {
    super(), this.result = ao.OK, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Rr().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Rr().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Rr().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Rr, e, n);
  }
}
Rr.runtime = o;
Rr.typeName = "code.push.v1.AddTokenResponse";
Rr.fields = o.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(ao) }
]);
var ao;
(function(t) {
  t[t.OK = 0] = "OK", t[t.INVALID_PUSH_TOKEN = 1] = "INVALID_PUSH_TOKEN";
})(ao || (ao = {}));
o.util.setEnumType(ao, "code.push.v1.AddTokenResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INVALID_PUSH_TOKEN" }
]);
ge.Unary;
class zr extends x {
  constructor(e) {
    super(), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new zr().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new zr().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new zr().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(zr, e, n);
  }
}
zr.runtime = o;
zr.typeName = "code.support.v1.GetFAQsRequest";
zr.fields = o.util.newFieldList(() => [
  { no: 1, name: "locale", kind: "message", T: Yt }
]);
class Wr extends x {
  constructor(e) {
    super(), this.result = co.OK, this.faqs = [], o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Wr().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Wr().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Wr().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Wr, e, n);
  }
}
Wr.runtime = o;
Wr.typeName = "code.support.v1.GetFAQsResponse";
Wr.fields = o.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(co) },
  { no: 2, name: "faqs", kind: "message", T: Yr, repeated: !0 }
]);
var co;
(function(t) {
  t[t.OK = 0] = "OK", t[t.LANG_UNAVAILABLE = 1] = "LANG_UNAVAILABLE";
})(co || (co = {}));
o.util.setEnumType(co, "code.support.v1.GetFAQsResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "LANG_UNAVAILABLE" }
]);
class Yr extends x {
  constructor(e) {
    super(), this.question = "", this.answer = "", o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Yr().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Yr().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Yr().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Yr, e, n);
  }
}
Yr.runtime = o;
Yr.typeName = "code.support.v1.FAQ";
Yr.fields = o.util.newFieldList(() => [
  { no: 1, name: "question", kind: "scalar", T: 9 },
  { no: 2, name: "answer", kind: "scalar", T: 9 }
]);
ge.Unary;
ge.BiDiStreaming, ge.Unary, ge.Unary, ge.Unary, ge.Unary, ge.Unary, ge.Unary, ge.Unary;
class Xr extends x {
  constructor(e) {
    super(), this.token = { case: void 0 }, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Xr().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Xr().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Xr().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Xr, e, n);
  }
}
Xr.runtime = o;
Xr.typeName = "code.user.v1.LinkAccountRequest";
Xr.fields = o.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: z },
  { no: 2, name: "signature", kind: "message", T: ye },
  { no: 3, name: "phone", kind: "message", T: _t, oneof: "token" }
]);
class Zr extends x {
  constructor(e) {
    super(), this.result = uo.OK, this.metadata = { case: void 0 }, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Zr().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Zr().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Zr().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Zr, e, n);
  }
}
Zr.runtime = o;
Zr.typeName = "code.user.v1.LinkAccountResponse";
Zr.fields = o.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(uo) },
  { no: 2, name: "user", kind: "message", T: qt },
  { no: 3, name: "data_container_id", kind: "message", T: nt },
  { no: 5, name: "phone", kind: "message", T: Kt, oneof: "metadata" }
]);
var uo;
(function(t) {
  t[t.OK = 0] = "OK", t[t.INVALID_TOKEN = 1] = "INVALID_TOKEN", t[t.RATE_LIMITED = 2] = "RATE_LIMITED";
})(uo || (uo = {}));
o.util.setEnumType(uo, "code.user.v1.LinkAccountResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INVALID_TOKEN" },
  { no: 2, name: "RATE_LIMITED" }
]);
class Gr extends x {
  constructor(e) {
    super(), this.identifyingFeature = { case: void 0 }, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Gr().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Gr().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Gr().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Gr, e, n);
  }
}
Gr.runtime = o;
Gr.typeName = "code.user.v1.UnlinkAccountRequest";
Gr.fields = o.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: z },
  { no: 2, name: "signature", kind: "message", T: ye },
  { no: 4, name: "phone_number", kind: "message", T: Ke, oneof: "identifying_feature" }
]);
class Qr extends x {
  constructor(e) {
    super(), this.result = lo.OK, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Qr().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Qr().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Qr().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Qr, e, n);
  }
}
Qr.runtime = o;
Qr.typeName = "code.user.v1.UnlinkAccountResponse";
Qr.fields = o.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(lo) }
]);
var lo;
(function(t) {
  t[t.OK = 0] = "OK", t[t.NEVER_ASSOCIATED = 1] = "NEVER_ASSOCIATED";
})(lo || (lo = {}));
o.util.setEnumType(lo, "code.user.v1.UnlinkAccountResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NEVER_ASSOCIATED" }
]);
class ei extends x {
  constructor(e) {
    super(), this.identifyingFeature = { case: void 0 }, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new ei().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new ei().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new ei().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(ei, e, n);
  }
}
ei.runtime = o;
ei.typeName = "code.user.v1.GetUserRequest";
ei.fields = o.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: z },
  { no: 2, name: "signature", kind: "message", T: ye },
  { no: 3, name: "phone_number", kind: "message", T: Ke, oneof: "identifying_feature" }
]);
class ti extends x {
  constructor(e) {
    super(), this.result = fo.OK, this.metadata = { case: void 0 }, this.enableBetaFlags = !1, this.eligibleAirdrops = [], o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new ti().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new ti().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new ti().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(ti, e, n);
  }
}
ti.runtime = o;
ti.typeName = "code.user.v1.GetUserResponse";
ti.fields = o.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(fo) },
  { no: 2, name: "user", kind: "message", T: qt },
  { no: 3, name: "data_container_id", kind: "message", T: nt },
  { no: 5, name: "phone", kind: "message", T: Kt, oneof: "metadata" },
  { no: 6, name: "enable_beta_flags", kind: "scalar", T: 8 },
  { no: 7, name: "eligible_airdrops", kind: "enum", T: o.getEnumType(Mt), repeated: !0 }
]);
var fo;
(function(t) {
  t[t.OK = 0] = "OK", t[t.NOT_FOUND = 1] = "NOT_FOUND", t[t.NOT_INVITED = 2] = "NOT_INVITED", t[t.UNLOCKED_TIMELOCK_ACCOUNT = 3] = "UNLOCKED_TIMELOCK_ACCOUNT";
})(fo || (fo = {}));
o.util.setEnumType(fo, "code.user.v1.GetUserResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" },
  { no: 2, name: "NOT_INVITED" },
  { no: 3, name: "UNLOCKED_TIMELOCK_ACCOUNT" }
]);
class qt extends x {
  constructor(e) {
    super(), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new qt().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new qt().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new qt().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(qt, e, n);
  }
}
qt.runtime = o;
qt.typeName = "code.user.v1.User";
qt.fields = o.util.newFieldList(() => [
  { no: 1, name: "id", kind: "message", T: ut },
  { no: 2, name: "view", kind: "message", T: ni }
]);
class ni extends x {
  constructor(e) {
    super(), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new ni().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new ni().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new ni().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(ni, e, n);
  }
}
ni.runtime = o;
ni.typeName = "code.user.v1.View";
ni.fields = o.util.newFieldList(() => [
  { no: 1, name: "phone_number", kind: "message", T: Ke }
]);
class Kt extends x {
  constructor(e) {
    super(), this.isLinked = !1, o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new Kt().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Kt().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Kt().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Kt, e, n);
  }
}
Kt.runtime = o;
Kt.typeName = "code.user.v1.PhoneMetadata";
Kt.fields = o.util.newFieldList(() => [
  { no: 1, name: "is_linked", kind: "scalar", T: 8 }
]);
ge.Unary, ge.Unary, ge.Unary;
function Fp(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Ap(t) {
  if (t.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var e = new Uint8Array(256), n = 0; n < e.length; n++)
    e[n] = 255;
  for (var r = 0; r < t.length; r++) {
    var i = t.charAt(r), s = i.charCodeAt(0);
    if (e[s] !== 255)
      throw new TypeError(i + " is ambiguous");
    e[s] = r;
  }
  var c = t.length, u = t.charAt(0), f = Math.log(c) / Math.log(256), m = Math.log(256) / Math.log(c);
  function h(b) {
    if (b instanceof Uint8Array || (ArrayBuffer.isView(b) ? b = new Uint8Array(b.buffer, b.byteOffset, b.byteLength) : Array.isArray(b) && (b = Uint8Array.from(b))), !(b instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (b.length === 0)
      return "";
    for (var S = 0, U = 0, $ = 0, R = b.length; $ !== R && b[$] === 0; )
      $++, S++;
    for (var ae = (R - $) * m + 1 >>> 0, L = new Uint8Array(ae); $ !== R; ) {
      for (var Z = b[$], F = 0, X = ae - 1; (Z !== 0 || F < U) && X !== -1; X--, F++)
        Z += 256 * L[X] >>> 0, L[X] = Z % c >>> 0, Z = Z / c >>> 0;
      if (Z !== 0)
        throw new Error("Non-zero carry");
      U = F, $++;
    }
    for (var ne = ae - U; ne !== ae && L[ne] === 0; )
      ne++;
    for (var ce = u.repeat(S); ne < ae; ++ne)
      ce += t.charAt(L[ne]);
    return ce;
  }
  function g(b) {
    if (typeof b != "string")
      throw new TypeError("Expected String");
    if (b.length === 0)
      return new Uint8Array();
    for (var S = 0, U = 0, $ = 0; b[S] === u; )
      U++, S++;
    for (var R = (b.length - S) * f + 1 >>> 0, ae = new Uint8Array(R); b[S]; ) {
      var L = e[b.charCodeAt(S)];
      if (L === 255)
        return;
      for (var Z = 0, F = R - 1; (L !== 0 || Z < $) && F !== -1; F--, Z++)
        L += c * ae[F] >>> 0, ae[F] = L % 256 >>> 0, L = L / 256 >>> 0;
      if (L !== 0)
        throw new Error("Non-zero carry");
      $ = Z, S++;
    }
    for (var X = R - $; X !== R && ae[X] === 0; )
      X++;
    for (var ne = new Uint8Array(U + (R - X)), ce = U; X !== R; )
      ne[ce++] = ae[X++];
    return ne;
  }
  function y(b) {
    var S = g(b);
    if (S)
      return S;
    throw new Error("Non-base" + c + " character");
  }
  return {
    encode: h,
    decodeUnsafe: g,
    decode: y
  };
}
var Up = Ap;
const Lp = Up, Cp = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
var Dp = Lp(Cp);
const mo = /* @__PURE__ */ Fp(Dp);
function _p(t, ...e) {
  if (!(t instanceof Uint8Array))
    throw new Error("Expected Uint8Array");
  if (e.length > 0 && !e.includes(t.length))
    throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`);
}
function Su(t, e = !0) {
  if (t.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (e && t.finished)
    throw new Error("Hash#digest() has already been called");
}
function qp(t, e) {
  _p(t);
  const n = e.outputLen;
  if (t.length < n)
    throw new Error(`digestInto() expects output buffer of length at least ${n}`);
}
const Fa = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const of = (t) => t instanceof Uint8Array, Aa = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength), xt = (t, e) => t << 32 - e | t >>> e, Kp = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!Kp)
  throw new Error("Non little-endian hardware is not supported");
function af(t) {
  if (typeof t != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof t}`);
  return new Uint8Array(new TextEncoder().encode(t));
}
function cf(t) {
  if (typeof t == "string" && (t = af(t)), !of(t))
    throw new Error(`expected Uint8Array, got ${typeof t}`);
  return t;
}
function Pp(...t) {
  const e = new Uint8Array(t.reduce((r, i) => r + i.length, 0));
  let n = 0;
  return t.forEach((r) => {
    if (!of(r))
      throw new Error("Uint8Array expected");
    e.set(r, n), n += r.length;
  }), e;
}
class $p {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
}
function uf(t) {
  const e = (r) => t().update(cf(r)).digest(), n = t();
  return e.outputLen = n.outputLen, e.blockLen = n.blockLen, e.create = () => t(), e;
}
function Mp(t = 32) {
  if (Fa && typeof Fa.getRandomValues == "function")
    return Fa.getRandomValues(new Uint8Array(t));
  throw new Error("crypto.getRandomValues must be defined");
}
function Vp(t, e, n, r) {
  if (typeof t.setBigUint64 == "function")
    return t.setBigUint64(e, n, r);
  const i = BigInt(32), s = BigInt(4294967295), c = Number(n >> i & s), u = Number(n & s), f = r ? 4 : 0, m = r ? 0 : 4;
  t.setUint32(e + f, c, r), t.setUint32(e + m, u, r);
}
class lf extends $p {
  constructor(e, n, r, i) {
    super(), this.blockLen = e, this.outputLen = n, this.padOffset = r, this.isLE = i, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(e), this.view = Aa(this.buffer);
  }
  update(e) {
    Su(this);
    const { view: n, buffer: r, blockLen: i } = this;
    e = cf(e);
    const s = e.length;
    for (let c = 0; c < s; ) {
      const u = Math.min(i - this.pos, s - c);
      if (u === i) {
        const f = Aa(e);
        for (; i <= s - c; c += i)
          this.process(f, c);
        continue;
      }
      r.set(e.subarray(c, c + u), this.pos), this.pos += u, c += u, this.pos === i && (this.process(n, 0), this.pos = 0);
    }
    return this.length += e.length, this.roundClean(), this;
  }
  digestInto(e) {
    Su(this), qp(e, this), this.finished = !0;
    const { buffer: n, view: r, blockLen: i, isLE: s } = this;
    let { pos: c } = this;
    n[c++] = 128, this.buffer.subarray(c).fill(0), this.padOffset > i - c && (this.process(r, 0), c = 0);
    for (let g = c; g < i; g++)
      n[g] = 0;
    Vp(r, i - 8, BigInt(this.length * 8), s), this.process(r, 0);
    const u = Aa(e), f = this.outputLen;
    if (f % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const m = f / 4, h = this.get();
    if (m > h.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let g = 0; g < m; g++)
      u.setUint32(4 * g, h[g], s);
  }
  digest() {
    const { buffer: e, outputLen: n } = this;
    this.digestInto(e);
    const r = e.slice(0, n);
    return this.destroy(), r;
  }
  _cloneInto(e) {
    e || (e = new this.constructor()), e.set(...this.get());
    const { blockLen: n, buffer: r, length: i, finished: s, destroyed: c, pos: u } = this;
    return e.length = i, e.pos = u, e.finished = s, e.destroyed = c, i % n && e.buffer.set(r), e;
  }
}
const Hp = (t, e, n) => t & e ^ ~t & n, jp = (t, e, n) => t & e ^ t & n ^ e & n, Rp = /* @__PURE__ */ new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]), ui = /* @__PURE__ */ new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]), li = /* @__PURE__ */ new Uint32Array(64);
class zp extends lf {
  constructor() {
    super(64, 32, 8, !1), this.A = ui[0] | 0, this.B = ui[1] | 0, this.C = ui[2] | 0, this.D = ui[3] | 0, this.E = ui[4] | 0, this.F = ui[5] | 0, this.G = ui[6] | 0, this.H = ui[7] | 0;
  }
  get() {
    const { A: e, B: n, C: r, D: i, E: s, F: c, G: u, H: f } = this;
    return [e, n, r, i, s, c, u, f];
  }
  // prettier-ignore
  set(e, n, r, i, s, c, u, f) {
    this.A = e | 0, this.B = n | 0, this.C = r | 0, this.D = i | 0, this.E = s | 0, this.F = c | 0, this.G = u | 0, this.H = f | 0;
  }
  process(e, n) {
    for (let g = 0; g < 16; g++, n += 4)
      li[g] = e.getUint32(n, !1);
    for (let g = 16; g < 64; g++) {
      const y = li[g - 15], b = li[g - 2], S = xt(y, 7) ^ xt(y, 18) ^ y >>> 3, U = xt(b, 17) ^ xt(b, 19) ^ b >>> 10;
      li[g] = U + li[g - 7] + S + li[g - 16] | 0;
    }
    let { A: r, B: i, C: s, D: c, E: u, F: f, G: m, H: h } = this;
    for (let g = 0; g < 64; g++) {
      const y = xt(u, 6) ^ xt(u, 11) ^ xt(u, 25), b = h + y + Hp(u, f, m) + Rp[g] + li[g] | 0, U = (xt(r, 2) ^ xt(r, 13) ^ xt(r, 22)) + jp(r, i, s) | 0;
      h = m, m = f, f = u, u = c + b | 0, c = s, s = i, i = r, r = b + U | 0;
    }
    r = r + this.A | 0, i = i + this.B | 0, s = s + this.C | 0, c = c + this.D | 0, u = u + this.E | 0, f = f + this.F | 0, m = m + this.G | 0, h = h + this.H | 0, this.set(r, i, s, c, u, f, m, h);
  }
  roundClean() {
    li.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
const ff = /* @__PURE__ */ uf(() => new zp());
var Ta = {}, Ea = {};
Ea.byteLength = Xp;
Ea.toByteArray = Gp;
Ea.fromByteArray = t0;
var St = [], ot = [], Wp = typeof Uint8Array < "u" ? Uint8Array : Array, Ua = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var Ri = 0, Yp = Ua.length; Ri < Yp; ++Ri)
  St[Ri] = Ua[Ri], ot[Ua.charCodeAt(Ri)] = Ri;
ot["-".charCodeAt(0)] = 62;
ot["_".charCodeAt(0)] = 63;
function df(t) {
  var e = t.length;
  if (e % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var n = t.indexOf("=");
  n === -1 && (n = e);
  var r = n === e ? 0 : 4 - n % 4;
  return [n, r];
}
function Xp(t) {
  var e = df(t), n = e[0], r = e[1];
  return (n + r) * 3 / 4 - r;
}
function Zp(t, e, n) {
  return (e + n) * 3 / 4 - n;
}
function Gp(t) {
  var e, n = df(t), r = n[0], i = n[1], s = new Wp(Zp(t, r, i)), c = 0, u = i > 0 ? r - 4 : r, f;
  for (f = 0; f < u; f += 4)
    e = ot[t.charCodeAt(f)] << 18 | ot[t.charCodeAt(f + 1)] << 12 | ot[t.charCodeAt(f + 2)] << 6 | ot[t.charCodeAt(f + 3)], s[c++] = e >> 16 & 255, s[c++] = e >> 8 & 255, s[c++] = e & 255;
  return i === 2 && (e = ot[t.charCodeAt(f)] << 2 | ot[t.charCodeAt(f + 1)] >> 4, s[c++] = e & 255), i === 1 && (e = ot[t.charCodeAt(f)] << 10 | ot[t.charCodeAt(f + 1)] << 4 | ot[t.charCodeAt(f + 2)] >> 2, s[c++] = e >> 8 & 255, s[c++] = e & 255), s;
}
function Qp(t) {
  return St[t >> 18 & 63] + St[t >> 12 & 63] + St[t >> 6 & 63] + St[t & 63];
}
function e0(t, e, n) {
  for (var r, i = [], s = e; s < n; s += 3)
    r = (t[s] << 16 & 16711680) + (t[s + 1] << 8 & 65280) + (t[s + 2] & 255), i.push(Qp(r));
  return i.join("");
}
function t0(t) {
  for (var e, n = t.length, r = n % 3, i = [], s = 16383, c = 0, u = n - r; c < u; c += s)
    i.push(e0(t, c, c + s > u ? u : c + s));
  return r === 1 ? (e = t[n - 1], i.push(
    St[e >> 2] + St[e << 4 & 63] + "=="
  )) : r === 2 && (e = (t[n - 2] << 8) + t[n - 1], i.push(
    St[e >> 10] + St[e >> 4 & 63] + St[e << 2 & 63] + "="
  )), i.join("");
}
var Lc = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
Lc.read = function(t, e, n, r, i) {
  var s, c, u = i * 8 - r - 1, f = (1 << u) - 1, m = f >> 1, h = -7, g = n ? i - 1 : 0, y = n ? -1 : 1, b = t[e + g];
  for (g += y, s = b & (1 << -h) - 1, b >>= -h, h += u; h > 0; s = s * 256 + t[e + g], g += y, h -= 8)
    ;
  for (c = s & (1 << -h) - 1, s >>= -h, h += r; h > 0; c = c * 256 + t[e + g], g += y, h -= 8)
    ;
  if (s === 0)
    s = 1 - m;
  else {
    if (s === f)
      return c ? NaN : (b ? -1 : 1) * (1 / 0);
    c = c + Math.pow(2, r), s = s - m;
  }
  return (b ? -1 : 1) * c * Math.pow(2, s - r);
};
Lc.write = function(t, e, n, r, i, s) {
  var c, u, f, m = s * 8 - i - 1, h = (1 << m) - 1, g = h >> 1, y = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, b = r ? 0 : s - 1, S = r ? 1 : -1, U = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
  for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (u = isNaN(e) ? 1 : 0, c = h) : (c = Math.floor(Math.log(e) / Math.LN2), e * (f = Math.pow(2, -c)) < 1 && (c--, f *= 2), c + g >= 1 ? e += y / f : e += y * Math.pow(2, 1 - g), e * f >= 2 && (c++, f /= 2), c + g >= h ? (u = 0, c = h) : c + g >= 1 ? (u = (e * f - 1) * Math.pow(2, i), c = c + g) : (u = e * Math.pow(2, g - 1) * Math.pow(2, i), c = 0)); i >= 8; t[n + b] = u & 255, b += S, u /= 256, i -= 8)
    ;
  for (c = c << i | u, m += i; m > 0; t[n + b] = c & 255, b += S, c /= 256, m -= 8)
    ;
  t[n + b - S] |= U * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(t) {
  const e = Ea, n = Lc, r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  t.Buffer = u, t.SlowBuffer = ae, t.INSPECT_MAX_BYTES = 50;
  const i = 2147483647;
  t.kMaxLength = i, u.TYPED_ARRAY_SUPPORT = s(), !u.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function s() {
    try {
      const d = new Uint8Array(1), a = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(a, Uint8Array.prototype), Object.setPrototypeOf(d, a), d.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(u.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (u.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(u.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (u.isBuffer(this))
        return this.byteOffset;
    }
  });
  function c(d) {
    if (d > i)
      throw new RangeError('The value "' + d + '" is invalid for option "size"');
    const a = new Uint8Array(d);
    return Object.setPrototypeOf(a, u.prototype), a;
  }
  function u(d, a, l) {
    if (typeof d == "number") {
      if (typeof a == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return g(d);
    }
    return f(d, a, l);
  }
  u.poolSize = 8192;
  function f(d, a, l) {
    if (typeof d == "string")
      return y(d, a);
    if (ArrayBuffer.isView(d))
      return S(d);
    if (d == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof d
      );
    if (O(d, ArrayBuffer) || d && O(d.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (O(d, SharedArrayBuffer) || d && O(d.buffer, SharedArrayBuffer)))
      return U(d, a, l);
    if (typeof d == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const p = d.valueOf && d.valueOf();
    if (p != null && p !== d)
      return u.from(p, a, l);
    const T = $(d);
    if (T)
      return T;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof d[Symbol.toPrimitive] == "function")
      return u.from(d[Symbol.toPrimitive]("string"), a, l);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof d
    );
  }
  u.from = function(d, a, l) {
    return f(d, a, l);
  }, Object.setPrototypeOf(u.prototype, Uint8Array.prototype), Object.setPrototypeOf(u, Uint8Array);
  function m(d) {
    if (typeof d != "number")
      throw new TypeError('"size" argument must be of type number');
    if (d < 0)
      throw new RangeError('The value "' + d + '" is invalid for option "size"');
  }
  function h(d, a, l) {
    return m(d), d <= 0 ? c(d) : a !== void 0 ? typeof l == "string" ? c(d).fill(a, l) : c(d).fill(a) : c(d);
  }
  u.alloc = function(d, a, l) {
    return h(d, a, l);
  };
  function g(d) {
    return m(d), c(d < 0 ? 0 : R(d) | 0);
  }
  u.allocUnsafe = function(d) {
    return g(d);
  }, u.allocUnsafeSlow = function(d) {
    return g(d);
  };
  function y(d, a) {
    if ((typeof a != "string" || a === "") && (a = "utf8"), !u.isEncoding(a))
      throw new TypeError("Unknown encoding: " + a);
    const l = L(d, a) | 0;
    let p = c(l);
    const T = p.write(d, a);
    return T !== l && (p = p.slice(0, T)), p;
  }
  function b(d) {
    const a = d.length < 0 ? 0 : R(d.length) | 0, l = c(a);
    for (let p = 0; p < a; p += 1)
      l[p] = d[p] & 255;
    return l;
  }
  function S(d) {
    if (O(d, Uint8Array)) {
      const a = new Uint8Array(d);
      return U(a.buffer, a.byteOffset, a.byteLength);
    }
    return b(d);
  }
  function U(d, a, l) {
    if (a < 0 || d.byteLength < a)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (d.byteLength < a + (l || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let p;
    return a === void 0 && l === void 0 ? p = new Uint8Array(d) : l === void 0 ? p = new Uint8Array(d, a) : p = new Uint8Array(d, a, l), Object.setPrototypeOf(p, u.prototype), p;
  }
  function $(d) {
    if (u.isBuffer(d)) {
      const a = R(d.length) | 0, l = c(a);
      return l.length === 0 || d.copy(l, 0, 0, a), l;
    }
    if (d.length !== void 0)
      return typeof d.length != "number" || H(d.length) ? c(0) : b(d);
    if (d.type === "Buffer" && Array.isArray(d.data))
      return b(d.data);
  }
  function R(d) {
    if (d >= i)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
    return d | 0;
  }
  function ae(d) {
    return +d != d && (d = 0), u.alloc(+d);
  }
  u.isBuffer = function(a) {
    return a != null && a._isBuffer === !0 && a !== u.prototype;
  }, u.compare = function(a, l) {
    if (O(a, Uint8Array) && (a = u.from(a, a.offset, a.byteLength)), O(l, Uint8Array) && (l = u.from(l, l.offset, l.byteLength)), !u.isBuffer(a) || !u.isBuffer(l))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (a === l)
      return 0;
    let p = a.length, T = l.length;
    for (let N = 0, I = Math.min(p, T); N < I; ++N)
      if (a[N] !== l[N]) {
        p = a[N], T = l[N];
        break;
      }
    return p < T ? -1 : T < p ? 1 : 0;
  }, u.isEncoding = function(a) {
    switch (String(a).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, u.concat = function(a, l) {
    if (!Array.isArray(a))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (a.length === 0)
      return u.alloc(0);
    let p;
    if (l === void 0)
      for (l = 0, p = 0; p < a.length; ++p)
        l += a[p].length;
    const T = u.allocUnsafe(l);
    let N = 0;
    for (p = 0; p < a.length; ++p) {
      let I = a[p];
      if (O(I, Uint8Array))
        N + I.length > T.length ? (u.isBuffer(I) || (I = u.from(I)), I.copy(T, N)) : Uint8Array.prototype.set.call(
          T,
          I,
          N
        );
      else if (u.isBuffer(I))
        I.copy(T, N);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      N += I.length;
    }
    return T;
  };
  function L(d, a) {
    if (u.isBuffer(d))
      return d.length;
    if (ArrayBuffer.isView(d) || O(d, ArrayBuffer))
      return d.byteLength;
    if (typeof d != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof d
      );
    const l = d.length, p = arguments.length > 2 && arguments[2] === !0;
    if (!p && l === 0)
      return 0;
    let T = !1;
    for (; ; )
      switch (a) {
        case "ascii":
        case "latin1":
        case "binary":
          return l;
        case "utf8":
        case "utf-8":
          return k(d).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return l * 2;
        case "hex":
          return l >>> 1;
        case "base64":
          return A(d).length;
        default:
          if (T)
            return p ? -1 : k(d).length;
          a = ("" + a).toLowerCase(), T = !0;
      }
  }
  u.byteLength = L;
  function Z(d, a, l) {
    let p = !1;
    if ((a === void 0 || a < 0) && (a = 0), a > this.length || ((l === void 0 || l > this.length) && (l = this.length), l <= 0) || (l >>>= 0, a >>>= 0, l <= a))
      return "";
    for (d || (d = "utf8"); ; )
      switch (d) {
        case "hex":
          return _(this, a, l);
        case "utf8":
        case "utf-8":
          return Vt(this, a, l);
        case "ascii":
          return le(this, a, l);
        case "latin1":
        case "binary":
          return K(this, a, l);
        case "base64":
          return Xe(this, a, l);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return W(this, a, l);
        default:
          if (p)
            throw new TypeError("Unknown encoding: " + d);
          d = (d + "").toLowerCase(), p = !0;
      }
  }
  u.prototype._isBuffer = !0;
  function F(d, a, l) {
    const p = d[a];
    d[a] = d[l], d[l] = p;
  }
  u.prototype.swap16 = function() {
    const a = this.length;
    if (a % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let l = 0; l < a; l += 2)
      F(this, l, l + 1);
    return this;
  }, u.prototype.swap32 = function() {
    const a = this.length;
    if (a % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let l = 0; l < a; l += 4)
      F(this, l, l + 3), F(this, l + 1, l + 2);
    return this;
  }, u.prototype.swap64 = function() {
    const a = this.length;
    if (a % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let l = 0; l < a; l += 8)
      F(this, l, l + 7), F(this, l + 1, l + 6), F(this, l + 2, l + 5), F(this, l + 3, l + 4);
    return this;
  }, u.prototype.toString = function() {
    const a = this.length;
    return a === 0 ? "" : arguments.length === 0 ? Vt(this, 0, a) : Z.apply(this, arguments);
  }, u.prototype.toLocaleString = u.prototype.toString, u.prototype.equals = function(a) {
    if (!u.isBuffer(a))
      throw new TypeError("Argument must be a Buffer");
    return this === a ? !0 : u.compare(this, a) === 0;
  }, u.prototype.inspect = function() {
    let a = "";
    const l = t.INSPECT_MAX_BYTES;
    return a = this.toString("hex", 0, l).replace(/(.{2})/g, "$1 ").trim(), this.length > l && (a += " ... "), "<Buffer " + a + ">";
  }, r && (u.prototype[r] = u.prototype.inspect), u.prototype.compare = function(a, l, p, T, N) {
    if (O(a, Uint8Array) && (a = u.from(a, a.offset, a.byteLength)), !u.isBuffer(a))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof a
      );
    if (l === void 0 && (l = 0), p === void 0 && (p = a ? a.length : 0), T === void 0 && (T = 0), N === void 0 && (N = this.length), l < 0 || p > a.length || T < 0 || N > this.length)
      throw new RangeError("out of range index");
    if (T >= N && l >= p)
      return 0;
    if (T >= N)
      return -1;
    if (l >= p)
      return 1;
    if (l >>>= 0, p >>>= 0, T >>>= 0, N >>>= 0, this === a)
      return 0;
    let I = N - T, ee = p - l;
    const Be = Math.min(I, ee), se = this.slice(T, N), pe = a.slice(l, p);
    for (let Te = 0; Te < Be; ++Te)
      if (se[Te] !== pe[Te]) {
        I = se[Te], ee = pe[Te];
        break;
      }
    return I < ee ? -1 : ee < I ? 1 : 0;
  };
  function X(d, a, l, p, T) {
    if (d.length === 0)
      return -1;
    if (typeof l == "string" ? (p = l, l = 0) : l > 2147483647 ? l = 2147483647 : l < -2147483648 && (l = -2147483648), l = +l, H(l) && (l = T ? 0 : d.length - 1), l < 0 && (l = d.length + l), l >= d.length) {
      if (T)
        return -1;
      l = d.length - 1;
    } else if (l < 0)
      if (T)
        l = 0;
      else
        return -1;
    if (typeof a == "string" && (a = u.from(a, p)), u.isBuffer(a))
      return a.length === 0 ? -1 : ne(d, a, l, p, T);
    if (typeof a == "number")
      return a = a & 255, typeof Uint8Array.prototype.indexOf == "function" ? T ? Uint8Array.prototype.indexOf.call(d, a, l) : Uint8Array.prototype.lastIndexOf.call(d, a, l) : ne(d, [a], l, p, T);
    throw new TypeError("val must be string, number or Buffer");
  }
  function ne(d, a, l, p, T) {
    let N = 1, I = d.length, ee = a.length;
    if (p !== void 0 && (p = String(p).toLowerCase(), p === "ucs2" || p === "ucs-2" || p === "utf16le" || p === "utf-16le")) {
      if (d.length < 2 || a.length < 2)
        return -1;
      N = 2, I /= 2, ee /= 2, l /= 2;
    }
    function Be(pe, Te) {
      return N === 1 ? pe[Te] : pe.readUInt16BE(Te * N);
    }
    let se;
    if (T) {
      let pe = -1;
      for (se = l; se < I; se++)
        if (Be(d, se) === Be(a, pe === -1 ? 0 : se - pe)) {
          if (pe === -1 && (pe = se), se - pe + 1 === ee)
            return pe * N;
        } else
          pe !== -1 && (se -= se - pe), pe = -1;
    } else
      for (l + ee > I && (l = I - ee), se = l; se >= 0; se--) {
        let pe = !0;
        for (let Te = 0; Te < ee; Te++)
          if (Be(d, se + Te) !== Be(a, Te)) {
            pe = !1;
            break;
          }
        if (pe)
          return se;
      }
    return -1;
  }
  u.prototype.includes = function(a, l, p) {
    return this.indexOf(a, l, p) !== -1;
  }, u.prototype.indexOf = function(a, l, p) {
    return X(this, a, l, p, !0);
  }, u.prototype.lastIndexOf = function(a, l, p) {
    return X(this, a, l, p, !1);
  };
  function ce(d, a, l, p) {
    l = Number(l) || 0;
    const T = d.length - l;
    p ? (p = Number(p), p > T && (p = T)) : p = T;
    const N = a.length;
    p > N / 2 && (p = N / 2);
    let I;
    for (I = 0; I < p; ++I) {
      const ee = parseInt(a.substr(I * 2, 2), 16);
      if (H(ee))
        return I;
      d[l + I] = ee;
    }
    return I;
  }
  function we(d, a, l, p) {
    return D(k(a, d.length - l), d, l, p);
  }
  function Se(d, a, l, p) {
    return D(C(a), d, l, p);
  }
  function Oe(d, a, l, p) {
    return D(A(a), d, l, p);
  }
  function Le(d, a, l, p) {
    return D(P(a, d.length - l), d, l, p);
  }
  u.prototype.write = function(a, l, p, T) {
    if (l === void 0)
      T = "utf8", p = this.length, l = 0;
    else if (p === void 0 && typeof l == "string")
      T = l, p = this.length, l = 0;
    else if (isFinite(l))
      l = l >>> 0, isFinite(p) ? (p = p >>> 0, T === void 0 && (T = "utf8")) : (T = p, p = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const N = this.length - l;
    if ((p === void 0 || p > N) && (p = N), a.length > 0 && (p < 0 || l < 0) || l > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    T || (T = "utf8");
    let I = !1;
    for (; ; )
      switch (T) {
        case "hex":
          return ce(this, a, l, p);
        case "utf8":
        case "utf-8":
          return we(this, a, l, p);
        case "ascii":
        case "latin1":
        case "binary":
          return Se(this, a, l, p);
        case "base64":
          return Oe(this, a, l, p);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Le(this, a, l, p);
        default:
          if (I)
            throw new TypeError("Unknown encoding: " + T);
          T = ("" + T).toLowerCase(), I = !0;
      }
  }, u.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function Xe(d, a, l) {
    return a === 0 && l === d.length ? e.fromByteArray(d) : e.fromByteArray(d.slice(a, l));
  }
  function Vt(d, a, l) {
    l = Math.min(d.length, l);
    const p = [];
    let T = a;
    for (; T < l; ) {
      const N = d[T];
      let I = null, ee = N > 239 ? 4 : N > 223 ? 3 : N > 191 ? 2 : 1;
      if (T + ee <= l) {
        let Be, se, pe, Te;
        switch (ee) {
          case 1:
            N < 128 && (I = N);
            break;
          case 2:
            Be = d[T + 1], (Be & 192) === 128 && (Te = (N & 31) << 6 | Be & 63, Te > 127 && (I = Te));
            break;
          case 3:
            Be = d[T + 1], se = d[T + 2], (Be & 192) === 128 && (se & 192) === 128 && (Te = (N & 15) << 12 | (Be & 63) << 6 | se & 63, Te > 2047 && (Te < 55296 || Te > 57343) && (I = Te));
            break;
          case 4:
            Be = d[T + 1], se = d[T + 2], pe = d[T + 3], (Be & 192) === 128 && (se & 192) === 128 && (pe & 192) === 128 && (Te = (N & 15) << 18 | (Be & 63) << 12 | (se & 63) << 6 | pe & 63, Te > 65535 && Te < 1114112 && (I = Te));
        }
      }
      I === null ? (I = 65533, ee = 1) : I > 65535 && (I -= 65536, p.push(I >>> 10 & 1023 | 55296), I = 56320 | I & 1023), p.push(I), T += ee;
    }
    return Pe(p);
  }
  const He = 4096;
  function Pe(d) {
    const a = d.length;
    if (a <= He)
      return String.fromCharCode.apply(String, d);
    let l = "", p = 0;
    for (; p < a; )
      l += String.fromCharCode.apply(
        String,
        d.slice(p, p += He)
      );
    return l;
  }
  function le(d, a, l) {
    let p = "";
    l = Math.min(d.length, l);
    for (let T = a; T < l; ++T)
      p += String.fromCharCode(d[T] & 127);
    return p;
  }
  function K(d, a, l) {
    let p = "";
    l = Math.min(d.length, l);
    for (let T = a; T < l; ++T)
      p += String.fromCharCode(d[T]);
    return p;
  }
  function _(d, a, l) {
    const p = d.length;
    (!a || a < 0) && (a = 0), (!l || l < 0 || l > p) && (l = p);
    let T = "";
    for (let N = a; N < l; ++N)
      T += M[d[N]];
    return T;
  }
  function W(d, a, l) {
    const p = d.slice(a, l);
    let T = "";
    for (let N = 0; N < p.length - 1; N += 2)
      T += String.fromCharCode(p[N] + p[N + 1] * 256);
    return T;
  }
  u.prototype.slice = function(a, l) {
    const p = this.length;
    a = ~~a, l = l === void 0 ? p : ~~l, a < 0 ? (a += p, a < 0 && (a = 0)) : a > p && (a = p), l < 0 ? (l += p, l < 0 && (l = 0)) : l > p && (l = p), l < a && (l = a);
    const T = this.subarray(a, l);
    return Object.setPrototypeOf(T, u.prototype), T;
  };
  function j(d, a, l) {
    if (d % 1 !== 0 || d < 0)
      throw new RangeError("offset is not uint");
    if (d + a > l)
      throw new RangeError("Trying to access beyond buffer length");
  }
  u.prototype.readUintLE = u.prototype.readUIntLE = function(a, l, p) {
    a = a >>> 0, l = l >>> 0, p || j(a, l, this.length);
    let T = this[a], N = 1, I = 0;
    for (; ++I < l && (N *= 256); )
      T += this[a + I] * N;
    return T;
  }, u.prototype.readUintBE = u.prototype.readUIntBE = function(a, l, p) {
    a = a >>> 0, l = l >>> 0, p || j(a, l, this.length);
    let T = this[a + --l], N = 1;
    for (; l > 0 && (N *= 256); )
      T += this[a + --l] * N;
    return T;
  }, u.prototype.readUint8 = u.prototype.readUInt8 = function(a, l) {
    return a = a >>> 0, l || j(a, 1, this.length), this[a];
  }, u.prototype.readUint16LE = u.prototype.readUInt16LE = function(a, l) {
    return a = a >>> 0, l || j(a, 2, this.length), this[a] | this[a + 1] << 8;
  }, u.prototype.readUint16BE = u.prototype.readUInt16BE = function(a, l) {
    return a = a >>> 0, l || j(a, 2, this.length), this[a] << 8 | this[a + 1];
  }, u.prototype.readUint32LE = u.prototype.readUInt32LE = function(a, l) {
    return a = a >>> 0, l || j(a, 4, this.length), (this[a] | this[a + 1] << 8 | this[a + 2] << 16) + this[a + 3] * 16777216;
  }, u.prototype.readUint32BE = u.prototype.readUInt32BE = function(a, l) {
    return a = a >>> 0, l || j(a, 4, this.length), this[a] * 16777216 + (this[a + 1] << 16 | this[a + 2] << 8 | this[a + 3]);
  }, u.prototype.readBigUInt64LE = V(function(a) {
    a = a >>> 0, w(a, "offset");
    const l = this[a], p = this[a + 7];
    (l === void 0 || p === void 0) && E(a, this.length - 8);
    const T = l + this[++a] * 2 ** 8 + this[++a] * 2 ** 16 + this[++a] * 2 ** 24, N = this[++a] + this[++a] * 2 ** 8 + this[++a] * 2 ** 16 + p * 2 ** 24;
    return BigInt(T) + (BigInt(N) << BigInt(32));
  }), u.prototype.readBigUInt64BE = V(function(a) {
    a = a >>> 0, w(a, "offset");
    const l = this[a], p = this[a + 7];
    (l === void 0 || p === void 0) && E(a, this.length - 8);
    const T = l * 2 ** 24 + this[++a] * 2 ** 16 + this[++a] * 2 ** 8 + this[++a], N = this[++a] * 2 ** 24 + this[++a] * 2 ** 16 + this[++a] * 2 ** 8 + p;
    return (BigInt(T) << BigInt(32)) + BigInt(N);
  }), u.prototype.readIntLE = function(a, l, p) {
    a = a >>> 0, l = l >>> 0, p || j(a, l, this.length);
    let T = this[a], N = 1, I = 0;
    for (; ++I < l && (N *= 256); )
      T += this[a + I] * N;
    return N *= 128, T >= N && (T -= Math.pow(2, 8 * l)), T;
  }, u.prototype.readIntBE = function(a, l, p) {
    a = a >>> 0, l = l >>> 0, p || j(a, l, this.length);
    let T = l, N = 1, I = this[a + --T];
    for (; T > 0 && (N *= 256); )
      I += this[a + --T] * N;
    return N *= 128, I >= N && (I -= Math.pow(2, 8 * l)), I;
  }, u.prototype.readInt8 = function(a, l) {
    return a = a >>> 0, l || j(a, 1, this.length), this[a] & 128 ? (255 - this[a] + 1) * -1 : this[a];
  }, u.prototype.readInt16LE = function(a, l) {
    a = a >>> 0, l || j(a, 2, this.length);
    const p = this[a] | this[a + 1] << 8;
    return p & 32768 ? p | 4294901760 : p;
  }, u.prototype.readInt16BE = function(a, l) {
    a = a >>> 0, l || j(a, 2, this.length);
    const p = this[a + 1] | this[a] << 8;
    return p & 32768 ? p | 4294901760 : p;
  }, u.prototype.readInt32LE = function(a, l) {
    return a = a >>> 0, l || j(a, 4, this.length), this[a] | this[a + 1] << 8 | this[a + 2] << 16 | this[a + 3] << 24;
  }, u.prototype.readInt32BE = function(a, l) {
    return a = a >>> 0, l || j(a, 4, this.length), this[a] << 24 | this[a + 1] << 16 | this[a + 2] << 8 | this[a + 3];
  }, u.prototype.readBigInt64LE = V(function(a) {
    a = a >>> 0, w(a, "offset");
    const l = this[a], p = this[a + 7];
    (l === void 0 || p === void 0) && E(a, this.length - 8);
    const T = this[a + 4] + this[a + 5] * 2 ** 8 + this[a + 6] * 2 ** 16 + (p << 24);
    return (BigInt(T) << BigInt(32)) + BigInt(l + this[++a] * 2 ** 8 + this[++a] * 2 ** 16 + this[++a] * 2 ** 24);
  }), u.prototype.readBigInt64BE = V(function(a) {
    a = a >>> 0, w(a, "offset");
    const l = this[a], p = this[a + 7];
    (l === void 0 || p === void 0) && E(a, this.length - 8);
    const T = (l << 24) + // Overflow
    this[++a] * 2 ** 16 + this[++a] * 2 ** 8 + this[++a];
    return (BigInt(T) << BigInt(32)) + BigInt(this[++a] * 2 ** 24 + this[++a] * 2 ** 16 + this[++a] * 2 ** 8 + p);
  }), u.prototype.readFloatLE = function(a, l) {
    return a = a >>> 0, l || j(a, 4, this.length), n.read(this, a, !0, 23, 4);
  }, u.prototype.readFloatBE = function(a, l) {
    return a = a >>> 0, l || j(a, 4, this.length), n.read(this, a, !1, 23, 4);
  }, u.prototype.readDoubleLE = function(a, l) {
    return a = a >>> 0, l || j(a, 8, this.length), n.read(this, a, !0, 52, 8);
  }, u.prototype.readDoubleBE = function(a, l) {
    return a = a >>> 0, l || j(a, 8, this.length), n.read(this, a, !1, 52, 8);
  };
  function Y(d, a, l, p, T, N) {
    if (!u.isBuffer(d))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (a > T || a < N)
      throw new RangeError('"value" argument is out of bounds');
    if (l + p > d.length)
      throw new RangeError("Index out of range");
  }
  u.prototype.writeUintLE = u.prototype.writeUIntLE = function(a, l, p, T) {
    if (a = +a, l = l >>> 0, p = p >>> 0, !T) {
      const ee = Math.pow(2, 8 * p) - 1;
      Y(this, a, l, p, ee, 0);
    }
    let N = 1, I = 0;
    for (this[l] = a & 255; ++I < p && (N *= 256); )
      this[l + I] = a / N & 255;
    return l + p;
  }, u.prototype.writeUintBE = u.prototype.writeUIntBE = function(a, l, p, T) {
    if (a = +a, l = l >>> 0, p = p >>> 0, !T) {
      const ee = Math.pow(2, 8 * p) - 1;
      Y(this, a, l, p, ee, 0);
    }
    let N = p - 1, I = 1;
    for (this[l + N] = a & 255; --N >= 0 && (I *= 256); )
      this[l + N] = a / I & 255;
    return l + p;
  }, u.prototype.writeUint8 = u.prototype.writeUInt8 = function(a, l, p) {
    return a = +a, l = l >>> 0, p || Y(this, a, l, 1, 255, 0), this[l] = a & 255, l + 1;
  }, u.prototype.writeUint16LE = u.prototype.writeUInt16LE = function(a, l, p) {
    return a = +a, l = l >>> 0, p || Y(this, a, l, 2, 65535, 0), this[l] = a & 255, this[l + 1] = a >>> 8, l + 2;
  }, u.prototype.writeUint16BE = u.prototype.writeUInt16BE = function(a, l, p) {
    return a = +a, l = l >>> 0, p || Y(this, a, l, 2, 65535, 0), this[l] = a >>> 8, this[l + 1] = a & 255, l + 2;
  }, u.prototype.writeUint32LE = u.prototype.writeUInt32LE = function(a, l, p) {
    return a = +a, l = l >>> 0, p || Y(this, a, l, 4, 4294967295, 0), this[l + 3] = a >>> 24, this[l + 2] = a >>> 16, this[l + 1] = a >>> 8, this[l] = a & 255, l + 4;
  }, u.prototype.writeUint32BE = u.prototype.writeUInt32BE = function(a, l, p) {
    return a = +a, l = l >>> 0, p || Y(this, a, l, 4, 4294967295, 0), this[l] = a >>> 24, this[l + 1] = a >>> 16, this[l + 2] = a >>> 8, this[l + 3] = a & 255, l + 4;
  };
  function re(d, a, l, p, T) {
    ze(a, p, T, d, l, 7);
    let N = Number(a & BigInt(4294967295));
    d[l++] = N, N = N >> 8, d[l++] = N, N = N >> 8, d[l++] = N, N = N >> 8, d[l++] = N;
    let I = Number(a >> BigInt(32) & BigInt(4294967295));
    return d[l++] = I, I = I >> 8, d[l++] = I, I = I >> 8, d[l++] = I, I = I >> 8, d[l++] = I, l;
  }
  function me(d, a, l, p, T) {
    ze(a, p, T, d, l, 7);
    let N = Number(a & BigInt(4294967295));
    d[l + 7] = N, N = N >> 8, d[l + 6] = N, N = N >> 8, d[l + 5] = N, N = N >> 8, d[l + 4] = N;
    let I = Number(a >> BigInt(32) & BigInt(4294967295));
    return d[l + 3] = I, I = I >> 8, d[l + 2] = I, I = I >> 8, d[l + 1] = I, I = I >> 8, d[l] = I, l + 8;
  }
  u.prototype.writeBigUInt64LE = V(function(a, l = 0) {
    return re(this, a, l, BigInt(0), BigInt("0xffffffffffffffff"));
  }), u.prototype.writeBigUInt64BE = V(function(a, l = 0) {
    return me(this, a, l, BigInt(0), BigInt("0xffffffffffffffff"));
  }), u.prototype.writeIntLE = function(a, l, p, T) {
    if (a = +a, l = l >>> 0, !T) {
      const Be = Math.pow(2, 8 * p - 1);
      Y(this, a, l, p, Be - 1, -Be);
    }
    let N = 0, I = 1, ee = 0;
    for (this[l] = a & 255; ++N < p && (I *= 256); )
      a < 0 && ee === 0 && this[l + N - 1] !== 0 && (ee = 1), this[l + N] = (a / I >> 0) - ee & 255;
    return l + p;
  }, u.prototype.writeIntBE = function(a, l, p, T) {
    if (a = +a, l = l >>> 0, !T) {
      const Be = Math.pow(2, 8 * p - 1);
      Y(this, a, l, p, Be - 1, -Be);
    }
    let N = p - 1, I = 1, ee = 0;
    for (this[l + N] = a & 255; --N >= 0 && (I *= 256); )
      a < 0 && ee === 0 && this[l + N + 1] !== 0 && (ee = 1), this[l + N] = (a / I >> 0) - ee & 255;
    return l + p;
  }, u.prototype.writeInt8 = function(a, l, p) {
    return a = +a, l = l >>> 0, p || Y(this, a, l, 1, 127, -128), a < 0 && (a = 255 + a + 1), this[l] = a & 255, l + 1;
  }, u.prototype.writeInt16LE = function(a, l, p) {
    return a = +a, l = l >>> 0, p || Y(this, a, l, 2, 32767, -32768), this[l] = a & 255, this[l + 1] = a >>> 8, l + 2;
  }, u.prototype.writeInt16BE = function(a, l, p) {
    return a = +a, l = l >>> 0, p || Y(this, a, l, 2, 32767, -32768), this[l] = a >>> 8, this[l + 1] = a & 255, l + 2;
  }, u.prototype.writeInt32LE = function(a, l, p) {
    return a = +a, l = l >>> 0, p || Y(this, a, l, 4, 2147483647, -2147483648), this[l] = a & 255, this[l + 1] = a >>> 8, this[l + 2] = a >>> 16, this[l + 3] = a >>> 24, l + 4;
  }, u.prototype.writeInt32BE = function(a, l, p) {
    return a = +a, l = l >>> 0, p || Y(this, a, l, 4, 2147483647, -2147483648), a < 0 && (a = 4294967295 + a + 1), this[l] = a >>> 24, this[l + 1] = a >>> 16, this[l + 2] = a >>> 8, this[l + 3] = a & 255, l + 4;
  }, u.prototype.writeBigInt64LE = V(function(a, l = 0) {
    return re(this, a, l, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), u.prototype.writeBigInt64BE = V(function(a, l = 0) {
    return me(this, a, l, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function Ne(d, a, l, p, T, N) {
    if (l + p > d.length)
      throw new RangeError("Index out of range");
    if (l < 0)
      throw new RangeError("Index out of range");
  }
  function he(d, a, l, p, T) {
    return a = +a, l = l >>> 0, T || Ne(d, a, l, 4), n.write(d, a, l, p, 23, 4), l + 4;
  }
  u.prototype.writeFloatLE = function(a, l, p) {
    return he(this, a, l, !0, p);
  }, u.prototype.writeFloatBE = function(a, l, p) {
    return he(this, a, l, !1, p);
  };
  function fe(d, a, l, p, T) {
    return a = +a, l = l >>> 0, T || Ne(d, a, l, 8), n.write(d, a, l, p, 52, 8), l + 8;
  }
  u.prototype.writeDoubleLE = function(a, l, p) {
    return fe(this, a, l, !0, p);
  }, u.prototype.writeDoubleBE = function(a, l, p) {
    return fe(this, a, l, !1, p);
  }, u.prototype.copy = function(a, l, p, T) {
    if (!u.isBuffer(a))
      throw new TypeError("argument should be a Buffer");
    if (p || (p = 0), !T && T !== 0 && (T = this.length), l >= a.length && (l = a.length), l || (l = 0), T > 0 && T < p && (T = p), T === p || a.length === 0 || this.length === 0)
      return 0;
    if (l < 0)
      throw new RangeError("targetStart out of bounds");
    if (p < 0 || p >= this.length)
      throw new RangeError("Index out of range");
    if (T < 0)
      throw new RangeError("sourceEnd out of bounds");
    T > this.length && (T = this.length), a.length - l < T - p && (T = a.length - l + p);
    const N = T - p;
    return this === a && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(l, p, T) : Uint8Array.prototype.set.call(
      a,
      this.subarray(p, T),
      l
    ), N;
  }, u.prototype.fill = function(a, l, p, T) {
    if (typeof a == "string") {
      if (typeof l == "string" ? (T = l, l = 0, p = this.length) : typeof p == "string" && (T = p, p = this.length), T !== void 0 && typeof T != "string")
        throw new TypeError("encoding must be a string");
      if (typeof T == "string" && !u.isEncoding(T))
        throw new TypeError("Unknown encoding: " + T);
      if (a.length === 1) {
        const I = a.charCodeAt(0);
        (T === "utf8" && I < 128 || T === "latin1") && (a = I);
      }
    } else
      typeof a == "number" ? a = a & 255 : typeof a == "boolean" && (a = Number(a));
    if (l < 0 || this.length < l || this.length < p)
      throw new RangeError("Out of range index");
    if (p <= l)
      return this;
    l = l >>> 0, p = p === void 0 ? this.length : p >>> 0, a || (a = 0);
    let N;
    if (typeof a == "number")
      for (N = l; N < p; ++N)
        this[N] = a;
    else {
      const I = u.isBuffer(a) ? a : u.from(a, T), ee = I.length;
      if (ee === 0)
        throw new TypeError('The value "' + a + '" is invalid for argument "value"');
      for (N = 0; N < p - l; ++N)
        this[N + l] = I[N % ee];
    }
    return this;
  };
  const Ee = {};
  function Je(d, a, l) {
    Ee[d] = class extends l {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: a.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${d}]`, this.stack, delete this.name;
      }
      get code() {
        return d;
      }
      set code(T) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: T,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${d}]: ${this.message}`;
      }
    };
  }
  Je(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(d) {
      return d ? `${d} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), Je(
    "ERR_INVALID_ARG_TYPE",
    function(d, a) {
      return `The "${d}" argument must be of type number. Received type ${typeof a}`;
    },
    TypeError
  ), Je(
    "ERR_OUT_OF_RANGE",
    function(d, a, l) {
      let p = `The value of "${d}" is out of range.`, T = l;
      return Number.isInteger(l) && Math.abs(l) > 2 ** 32 ? T = Ce(String(l)) : typeof l == "bigint" && (T = String(l), (l > BigInt(2) ** BigInt(32) || l < -(BigInt(2) ** BigInt(32))) && (T = Ce(T)), T += "n"), p += ` It must be ${a}. Received ${T}`, p;
    },
    RangeError
  );
  function Ce(d) {
    let a = "", l = d.length;
    const p = d[0] === "-" ? 1 : 0;
    for (; l >= p + 4; l -= 3)
      a = `_${d.slice(l - 3, l)}${a}`;
    return `${d.slice(0, l)}${a}`;
  }
  function De(d, a, l) {
    w(a, "offset"), (d[a] === void 0 || d[a + l] === void 0) && E(a, d.length - (l + 1));
  }
  function ze(d, a, l, p, T, N) {
    if (d > l || d < a) {
      const I = typeof a == "bigint" ? "n" : "";
      let ee;
      throw N > 3 ? a === 0 || a === BigInt(0) ? ee = `>= 0${I} and < 2${I} ** ${(N + 1) * 8}${I}` : ee = `>= -(2${I} ** ${(N + 1) * 8 - 1}${I}) and < 2 ** ${(N + 1) * 8 - 1}${I}` : ee = `>= ${a}${I} and <= ${l}${I}`, new Ee.ERR_OUT_OF_RANGE("value", ee, d);
    }
    De(p, T, N);
  }
  function w(d, a) {
    if (typeof d != "number")
      throw new Ee.ERR_INVALID_ARG_TYPE(a, "number", d);
  }
  function E(d, a, l) {
    throw Math.floor(d) !== d ? (w(d, l), new Ee.ERR_OUT_OF_RANGE(l || "offset", "an integer", d)) : a < 0 ? new Ee.ERR_BUFFER_OUT_OF_BOUNDS() : new Ee.ERR_OUT_OF_RANGE(
      l || "offset",
      `>= ${l ? 1 : 0} and <= ${a}`,
      d
    );
  }
  const B = /[^+/0-9A-Za-z-_]/g;
  function J(d) {
    if (d = d.split("=")[0], d = d.trim().replace(B, ""), d.length < 2)
      return "";
    for (; d.length % 4 !== 0; )
      d = d + "=";
    return d;
  }
  function k(d, a) {
    a = a || 1 / 0;
    let l;
    const p = d.length;
    let T = null;
    const N = [];
    for (let I = 0; I < p; ++I) {
      if (l = d.charCodeAt(I), l > 55295 && l < 57344) {
        if (!T) {
          if (l > 56319) {
            (a -= 3) > -1 && N.push(239, 191, 189);
            continue;
          } else if (I + 1 === p) {
            (a -= 3) > -1 && N.push(239, 191, 189);
            continue;
          }
          T = l;
          continue;
        }
        if (l < 56320) {
          (a -= 3) > -1 && N.push(239, 191, 189), T = l;
          continue;
        }
        l = (T - 55296 << 10 | l - 56320) + 65536;
      } else
        T && (a -= 3) > -1 && N.push(239, 191, 189);
      if (T = null, l < 128) {
        if ((a -= 1) < 0)
          break;
        N.push(l);
      } else if (l < 2048) {
        if ((a -= 2) < 0)
          break;
        N.push(
          l >> 6 | 192,
          l & 63 | 128
        );
      } else if (l < 65536) {
        if ((a -= 3) < 0)
          break;
        N.push(
          l >> 12 | 224,
          l >> 6 & 63 | 128,
          l & 63 | 128
        );
      } else if (l < 1114112) {
        if ((a -= 4) < 0)
          break;
        N.push(
          l >> 18 | 240,
          l >> 12 & 63 | 128,
          l >> 6 & 63 | 128,
          l & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return N;
  }
  function C(d) {
    const a = [];
    for (let l = 0; l < d.length; ++l)
      a.push(d.charCodeAt(l) & 255);
    return a;
  }
  function P(d, a) {
    let l, p, T;
    const N = [];
    for (let I = 0; I < d.length && !((a -= 2) < 0); ++I)
      l = d.charCodeAt(I), p = l >> 8, T = l % 256, N.push(T), N.push(p);
    return N;
  }
  function A(d) {
    return e.toByteArray(J(d));
  }
  function D(d, a, l, p) {
    let T;
    for (T = 0; T < p && !(T + l >= a.length || T >= d.length); ++T)
      a[T + l] = d[T];
    return T;
  }
  function O(d, a) {
    return d instanceof a || d != null && d.constructor != null && d.constructor.name != null && d.constructor.name === a.name;
  }
  function H(d) {
    return d !== d;
  }
  const M = function() {
    const d = "0123456789abcdef", a = new Array(256);
    for (let l = 0; l < 16; ++l) {
      const p = l * 16;
      for (let T = 0; T < 16; ++T)
        a[p + T] = d[l] + d[T];
    }
    return a;
  }();
  function V(d) {
    return typeof BigInt > "u" ? G : d;
  }
  function G() {
    throw new Error("BigInt not supported");
  }
})(Ta);
class No {
  /**
   * Constructs a new PublicKey instance.
   *
   * @param publicKey - The raw public key as a Uint8Array.
   */
  constructor(e) {
    this.publicKey = e;
  }
  /**
   * Constructs a PublicKey instance from its Base58 representation.
   *
   * @param base58 - The Base58 encoded public key string.
   * @returns A new PublicKey instance.
   */
  static fromBase58(e) {
    return new No(mo.decode(e));
  }
  /**
   * Converts the public key to a Buffer.
   *
   * @returns The public key as a Buffer.
   */
  toBuffer() {
    return Ta.Buffer.from([...this.publicKey]);
  }
  /**
   * Encodes the public key into its Base58 representation.
   *
   * @returns The Base58 encoded public key string.
   */
  toBase58() {
    return mo.encode(this.publicKey);
  }
  /**
   * Returns the Base58 encoded string representation of the public key.
   *
   * @returns The Base58 encoded public key string.
   */
  toString() {
    return this.toBase58();
  }
}
const Ao = /* @__PURE__ */ BigInt(2 ** 32 - 1), oc = /* @__PURE__ */ BigInt(32);
function mf(t, e = !1) {
  return e ? { h: Number(t & Ao), l: Number(t >> oc & Ao) } : { h: Number(t >> oc & Ao) | 0, l: Number(t & Ao) | 0 };
}
function n0(t, e = !1) {
  let n = new Uint32Array(t.length), r = new Uint32Array(t.length);
  for (let i = 0; i < t.length; i++) {
    const { h: s, l: c } = mf(t[i], e);
    [n[i], r[i]] = [s, c];
  }
  return [n, r];
}
const r0 = (t, e) => BigInt(t >>> 0) << oc | BigInt(e >>> 0), i0 = (t, e, n) => t >>> n, s0 = (t, e, n) => t << 32 - n | e >>> n, o0 = (t, e, n) => t >>> n | e << 32 - n, a0 = (t, e, n) => t << 32 - n | e >>> n, c0 = (t, e, n) => t << 64 - n | e >>> n - 32, u0 = (t, e, n) => t >>> n - 32 | e << 64 - n, l0 = (t, e) => e, f0 = (t, e) => t, d0 = (t, e, n) => t << n | e >>> 32 - n, m0 = (t, e, n) => e << n | t >>> 32 - n, h0 = (t, e, n) => e << n - 32 | t >>> 64 - n, p0 = (t, e, n) => t << n - 32 | e >>> 64 - n;
function g0(t, e, n, r) {
  const i = (e >>> 0) + (r >>> 0);
  return { h: t + n + (i / 2 ** 32 | 0) | 0, l: i | 0 };
}
const w0 = (t, e, n) => (t >>> 0) + (e >>> 0) + (n >>> 0), y0 = (t, e, n, r) => e + n + r + (t / 2 ** 32 | 0) | 0, T0 = (t, e, n, r) => (t >>> 0) + (e >>> 0) + (n >>> 0) + (r >>> 0), E0 = (t, e, n, r, i) => e + n + r + i + (t / 2 ** 32 | 0) | 0, b0 = (t, e, n, r, i) => (t >>> 0) + (e >>> 0) + (n >>> 0) + (r >>> 0) + (i >>> 0), N0 = (t, e, n, r, i, s) => e + n + r + i + s + (t / 2 ** 32 | 0) | 0, x0 = {
  fromBig: mf,
  split: n0,
  toBig: r0,
  shrSH: i0,
  shrSL: s0,
  rotrSH: o0,
  rotrSL: a0,
  rotrBH: c0,
  rotrBL: u0,
  rotr32H: l0,
  rotr32L: f0,
  rotlSH: d0,
  rotlSL: m0,
  rotlBH: h0,
  rotlBL: p0,
  add: g0,
  add3L: w0,
  add3H: y0,
  add4L: T0,
  add4H: E0,
  add5H: N0,
  add5L: b0
}, oe = x0, [B0, I0] = /* @__PURE__ */ (() => oe.split([
  "0x428a2f98d728ae22",
  "0x7137449123ef65cd",
  "0xb5c0fbcfec4d3b2f",
  "0xe9b5dba58189dbbc",
  "0x3956c25bf348b538",
  "0x59f111f1b605d019",
  "0x923f82a4af194f9b",
  "0xab1c5ed5da6d8118",
  "0xd807aa98a3030242",
  "0x12835b0145706fbe",
  "0x243185be4ee4b28c",
  "0x550c7dc3d5ffb4e2",
  "0x72be5d74f27b896f",
  "0x80deb1fe3b1696b1",
  "0x9bdc06a725c71235",
  "0xc19bf174cf692694",
  "0xe49b69c19ef14ad2",
  "0xefbe4786384f25e3",
  "0x0fc19dc68b8cd5b5",
  "0x240ca1cc77ac9c65",
  "0x2de92c6f592b0275",
  "0x4a7484aa6ea6e483",
  "0x5cb0a9dcbd41fbd4",
  "0x76f988da831153b5",
  "0x983e5152ee66dfab",
  "0xa831c66d2db43210",
  "0xb00327c898fb213f",
  "0xbf597fc7beef0ee4",
  "0xc6e00bf33da88fc2",
  "0xd5a79147930aa725",
  "0x06ca6351e003826f",
  "0x142929670a0e6e70",
  "0x27b70a8546d22ffc",
  "0x2e1b21385c26c926",
  "0x4d2c6dfc5ac42aed",
  "0x53380d139d95b3df",
  "0x650a73548baf63de",
  "0x766a0abb3c77b2a8",
  "0x81c2c92e47edaee6",
  "0x92722c851482353b",
  "0xa2bfe8a14cf10364",
  "0xa81a664bbc423001",
  "0xc24b8b70d0f89791",
  "0xc76c51a30654be30",
  "0xd192e819d6ef5218",
  "0xd69906245565a910",
  "0xf40e35855771202a",
  "0x106aa07032bbd1b8",
  "0x19a4c116b8d2d0c8",
  "0x1e376c085141ab53",
  "0x2748774cdf8eeb99",
  "0x34b0bcb5e19b48a8",
  "0x391c0cb3c5c95a63",
  "0x4ed8aa4ae3418acb",
  "0x5b9cca4f7763e373",
  "0x682e6ff3d6b2b8a3",
  "0x748f82ee5defb2fc",
  "0x78a5636f43172f60",
  "0x84c87814a1f0ab72",
  "0x8cc702081a6439ec",
  "0x90befffa23631e28",
  "0xa4506cebde82bde9",
  "0xbef9a3f7b2c67915",
  "0xc67178f2e372532b",
  "0xca273eceea26619c",
  "0xd186b8c721c0c207",
  "0xeada7dd6cde0eb1e",
  "0xf57d4f7fee6ed178",
  "0x06f067aa72176fba",
  "0x0a637dc5a2c898a6",
  "0x113f9804bef90dae",
  "0x1b710b35131c471b",
  "0x28db77f523047d84",
  "0x32caab7b40c72493",
  "0x3c9ebe0a15c9bebc",
  "0x431d67c49c100d4c",
  "0x4cc5d4becb3e42b6",
  "0x597f299cfc657e2a",
  "0x5fcb6fab3ad6faec",
  "0x6c44198c4a475817"
].map((t) => BigInt(t))))(), fi = /* @__PURE__ */ new Uint32Array(80), di = /* @__PURE__ */ new Uint32Array(80);
class O0 extends lf {
  constructor() {
    super(128, 64, 16, !1), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209;
  }
  // prettier-ignore
  get() {
    const { Ah: e, Al: n, Bh: r, Bl: i, Ch: s, Cl: c, Dh: u, Dl: f, Eh: m, El: h, Fh: g, Fl: y, Gh: b, Gl: S, Hh: U, Hl: $ } = this;
    return [e, n, r, i, s, c, u, f, m, h, g, y, b, S, U, $];
  }
  // prettier-ignore
  set(e, n, r, i, s, c, u, f, m, h, g, y, b, S, U, $) {
    this.Ah = e | 0, this.Al = n | 0, this.Bh = r | 0, this.Bl = i | 0, this.Ch = s | 0, this.Cl = c | 0, this.Dh = u | 0, this.Dl = f | 0, this.Eh = m | 0, this.El = h | 0, this.Fh = g | 0, this.Fl = y | 0, this.Gh = b | 0, this.Gl = S | 0, this.Hh = U | 0, this.Hl = $ | 0;
  }
  process(e, n) {
    for (let L = 0; L < 16; L++, n += 4)
      fi[L] = e.getUint32(n), di[L] = e.getUint32(n += 4);
    for (let L = 16; L < 80; L++) {
      const Z = fi[L - 15] | 0, F = di[L - 15] | 0, X = oe.rotrSH(Z, F, 1) ^ oe.rotrSH(Z, F, 8) ^ oe.shrSH(Z, F, 7), ne = oe.rotrSL(Z, F, 1) ^ oe.rotrSL(Z, F, 8) ^ oe.shrSL(Z, F, 7), ce = fi[L - 2] | 0, we = di[L - 2] | 0, Se = oe.rotrSH(ce, we, 19) ^ oe.rotrBH(ce, we, 61) ^ oe.shrSH(ce, we, 6), Oe = oe.rotrSL(ce, we, 19) ^ oe.rotrBL(ce, we, 61) ^ oe.shrSL(ce, we, 6), Le = oe.add4L(ne, Oe, di[L - 7], di[L - 16]), Xe = oe.add4H(Le, X, Se, fi[L - 7], fi[L - 16]);
      fi[L] = Xe | 0, di[L] = Le | 0;
    }
    let { Ah: r, Al: i, Bh: s, Bl: c, Ch: u, Cl: f, Dh: m, Dl: h, Eh: g, El: y, Fh: b, Fl: S, Gh: U, Gl: $, Hh: R, Hl: ae } = this;
    for (let L = 0; L < 80; L++) {
      const Z = oe.rotrSH(g, y, 14) ^ oe.rotrSH(g, y, 18) ^ oe.rotrBH(g, y, 41), F = oe.rotrSL(g, y, 14) ^ oe.rotrSL(g, y, 18) ^ oe.rotrBL(g, y, 41), X = g & b ^ ~g & U, ne = y & S ^ ~y & $, ce = oe.add5L(ae, F, ne, I0[L], di[L]), we = oe.add5H(ce, R, Z, X, B0[L], fi[L]), Se = ce | 0, Oe = oe.rotrSH(r, i, 28) ^ oe.rotrBH(r, i, 34) ^ oe.rotrBH(r, i, 39), Le = oe.rotrSL(r, i, 28) ^ oe.rotrBL(r, i, 34) ^ oe.rotrBL(r, i, 39), Xe = r & s ^ r & u ^ s & u, Vt = i & c ^ i & f ^ c & f;
      R = U | 0, ae = $ | 0, U = b | 0, $ = S | 0, b = g | 0, S = y | 0, { h: g, l: y } = oe.add(m | 0, h | 0, we | 0, Se | 0), m = u | 0, h = f | 0, u = s | 0, f = c | 0, s = r | 0, c = i | 0;
      const He = oe.add3L(Se, Le, Vt);
      r = oe.add3H(He, we, Oe, Xe), i = He | 0;
    }
    ({ h: r, l: i } = oe.add(this.Ah | 0, this.Al | 0, r | 0, i | 0)), { h: s, l: c } = oe.add(this.Bh | 0, this.Bl | 0, s | 0, c | 0), { h: u, l: f } = oe.add(this.Ch | 0, this.Cl | 0, u | 0, f | 0), { h: m, l: h } = oe.add(this.Dh | 0, this.Dl | 0, m | 0, h | 0), { h: g, l: y } = oe.add(this.Eh | 0, this.El | 0, g | 0, y | 0), { h: b, l: S } = oe.add(this.Fh | 0, this.Fl | 0, b | 0, S | 0), { h: U, l: $ } = oe.add(this.Gh | 0, this.Gl | 0, U | 0, $ | 0), { h: R, l: ae } = oe.add(this.Hh | 0, this.Hl | 0, R | 0, ae | 0), this.set(r, i, s, c, u, f, m, h, g, y, b, S, U, $, R, ae);
  }
  roundClean() {
    fi.fill(0), di.fill(0);
  }
  destroy() {
    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
const hf = /* @__PURE__ */ uf(() => new O0());
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
BigInt(0);
const k0 = BigInt(1), S0 = BigInt(2), ba = (t) => t instanceof Uint8Array, v0 = /* @__PURE__ */ Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0"));
function Cc(t) {
  if (!ba(t))
    throw new Error("Uint8Array expected");
  let e = "";
  for (let n = 0; n < t.length; n++)
    e += v0[t[n]];
  return e;
}
function pf(t) {
  if (typeof t != "string")
    throw new Error("hex string expected, got " + typeof t);
  return BigInt(t === "" ? "0" : `0x${t}`);
}
function gf(t) {
  if (typeof t != "string")
    throw new Error("hex string expected, got " + typeof t);
  const e = t.length;
  if (e % 2)
    throw new Error("padded hex string expected, got unpadded hex of length " + e);
  const n = new Uint8Array(e / 2);
  for (let r = 0; r < n.length; r++) {
    const i = r * 2, s = t.slice(i, i + 2), c = Number.parseInt(s, 16);
    if (Number.isNaN(c) || c < 0)
      throw new Error("Invalid byte sequence");
    n[r] = c;
  }
  return n;
}
function J0(t) {
  return pf(Cc(t));
}
function Ho(t) {
  if (!ba(t))
    throw new Error("Uint8Array expected");
  return pf(Cc(Uint8Array.from(t).reverse()));
}
function wf(t, e) {
  return gf(t.toString(16).padStart(e * 2, "0"));
}
function ac(t, e) {
  return wf(t, e).reverse();
}
function mi(t, e, n) {
  let r;
  if (typeof e == "string")
    try {
      r = gf(e);
    } catch (s) {
      throw new Error(`${t} must be valid hex string, got "${e}". Cause: ${s}`);
    }
  else if (ba(e))
    r = Uint8Array.from(e);
  else
    throw new Error(`${t} must be hex string or Uint8Array`);
  const i = r.length;
  if (typeof n == "number" && i !== n)
    throw new Error(`${t} expected ${n} bytes, got ${i}`);
  return r;
}
function vu(...t) {
  const e = new Uint8Array(t.reduce((r, i) => r + i.length, 0));
  let n = 0;
  return t.forEach((r) => {
    if (!ba(r))
      throw new Error("Uint8Array expected");
    e.set(r, n), n += r.length;
  }), e;
}
const F0 = (t) => (S0 << BigInt(t - 1)) - k0, A0 = {
  bigint: (t) => typeof t == "bigint",
  function: (t) => typeof t == "function",
  boolean: (t) => typeof t == "boolean",
  string: (t) => typeof t == "string",
  stringOrUint8Array: (t) => typeof t == "string" || t instanceof Uint8Array,
  isSafeInteger: (t) => Number.isSafeInteger(t),
  array: (t) => Array.isArray(t),
  field: (t, e) => e.Fp.isValid(t),
  hash: (t) => typeof t == "function" && Number.isSafeInteger(t.outputLen)
};
function Dc(t, e, n = {}) {
  const r = (i, s, c) => {
    const u = A0[s];
    if (typeof u != "function")
      throw new Error(`Invalid validator "${s}", expected function`);
    const f = t[i];
    if (!(c && f === void 0) && !u(f, t))
      throw new Error(`Invalid param ${String(i)}=${f} (${typeof f}), expected ${s}`);
  };
  for (const [i, s] of Object.entries(e))
    r(i, s, !1);
  for (const [i, s] of Object.entries(n))
    r(i, s, !0);
  return t;
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const $e = BigInt(0), Ae = BigInt(1), Li = BigInt(2), U0 = BigInt(3), cc = BigInt(4), Ju = BigInt(5), Fu = BigInt(8);
BigInt(9);
BigInt(16);
function _e(t, e) {
  const n = t % e;
  return n >= $e ? n : e + n;
}
function L0(t, e, n) {
  if (n <= $e || e < $e)
    throw new Error("Expected power/modulo > 0");
  if (n === Ae)
    return $e;
  let r = Ae;
  for (; e > $e; )
    e & Ae && (r = r * t % n), t = t * t % n, e >>= Ae;
  return r;
}
function Bt(t, e, n) {
  let r = t;
  for (; e-- > $e; )
    r *= r, r %= n;
  return r;
}
function Au(t, e) {
  if (t === $e || e <= $e)
    throw new Error(`invert: expected positive integers, got n=${t} mod=${e}`);
  let n = _e(t, e), r = e, i = $e, s = Ae;
  for (; n !== $e; ) {
    const u = r / n, f = r % n, m = i - s * u;
    r = n, n = f, i = s, s = m;
  }
  if (r !== Ae)
    throw new Error("invert: does not exist");
  return _e(i, e);
}
function C0(t) {
  const e = (t - Ae) / Li;
  let n, r, i;
  for (n = t - Ae, r = 0; n % Li === $e; n /= Li, r++)
    ;
  for (i = Li; i < t && L0(i, e, t) !== t - Ae; i++)
    ;
  if (r === 1) {
    const c = (t + Ae) / cc;
    return function(f, m) {
      const h = f.pow(m, c);
      if (!f.eql(f.sqr(h), m))
        throw new Error("Cannot find square root");
      return h;
    };
  }
  const s = (n + Ae) / Li;
  return function(u, f) {
    if (u.pow(f, e) === u.neg(u.ONE))
      throw new Error("Cannot find square root");
    let m = r, h = u.pow(u.mul(u.ONE, i), n), g = u.pow(f, s), y = u.pow(f, n);
    for (; !u.eql(y, u.ONE); ) {
      if (u.eql(y, u.ZERO))
        return u.ZERO;
      let b = 1;
      for (let U = u.sqr(y); b < m && !u.eql(U, u.ONE); b++)
        U = u.sqr(U);
      const S = u.pow(h, Ae << BigInt(m - b - 1));
      h = u.sqr(S), g = u.mul(g, S), y = u.mul(y, h), m = b;
    }
    return g;
  };
}
function D0(t) {
  if (t % cc === U0) {
    const e = (t + Ae) / cc;
    return function(r, i) {
      const s = r.pow(i, e);
      if (!r.eql(r.sqr(s), i))
        throw new Error("Cannot find square root");
      return s;
    };
  }
  if (t % Fu === Ju) {
    const e = (t - Ju) / Fu;
    return function(r, i) {
      const s = r.mul(i, Li), c = r.pow(s, e), u = r.mul(i, c), f = r.mul(r.mul(u, Li), c), m = r.mul(u, r.sub(f, r.ONE));
      if (!r.eql(r.sqr(m), i))
        throw new Error("Cannot find square root");
      return m;
    };
  }
  return C0(t);
}
const _0 = (t, e) => (_e(t, e) & Ae) === Ae, q0 = [
  "create",
  "isValid",
  "is0",
  "neg",
  "inv",
  "sqrt",
  "sqr",
  "eql",
  "add",
  "sub",
  "mul",
  "pow",
  "div",
  "addN",
  "subN",
  "mulN",
  "sqrN"
];
function K0(t) {
  const e = {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "isSafeInteger",
    BITS: "isSafeInteger"
  }, n = q0.reduce((r, i) => (r[i] = "function", r), e);
  return Dc(t, n);
}
function P0(t, e, n) {
  if (n < $e)
    throw new Error("Expected power > 0");
  if (n === $e)
    return t.ONE;
  if (n === Ae)
    return e;
  let r = t.ONE, i = e;
  for (; n > $e; )
    n & Ae && (r = t.mul(r, i)), i = t.sqr(i), n >>= Ae;
  return r;
}
function $0(t, e) {
  const n = new Array(e.length), r = e.reduce((s, c, u) => t.is0(c) ? s : (n[u] = s, t.mul(s, c)), t.ONE), i = t.inv(r);
  return e.reduceRight((s, c, u) => t.is0(c) ? s : (n[u] = t.mul(s, n[u]), t.mul(s, c)), i), n;
}
function yf(t, e) {
  const n = e !== void 0 ? e : t.toString(2).length, r = Math.ceil(n / 8);
  return { nBitLength: n, nByteLength: r };
}
function M0(t, e, n = !1, r = {}) {
  if (t <= $e)
    throw new Error(`Expected Field ORDER > 0, got ${t}`);
  const { nBitLength: i, nByteLength: s } = yf(t, e);
  if (s > 2048)
    throw new Error("Field lengths over 2048 bytes are not supported");
  const c = D0(t), u = Object.freeze({
    ORDER: t,
    BITS: i,
    BYTES: s,
    MASK: F0(i),
    ZERO: $e,
    ONE: Ae,
    create: (f) => _e(f, t),
    isValid: (f) => {
      if (typeof f != "bigint")
        throw new Error(`Invalid field element: expected bigint, got ${typeof f}`);
      return $e <= f && f < t;
    },
    is0: (f) => f === $e,
    isOdd: (f) => (f & Ae) === Ae,
    neg: (f) => _e(-f, t),
    eql: (f, m) => f === m,
    sqr: (f) => _e(f * f, t),
    add: (f, m) => _e(f + m, t),
    sub: (f, m) => _e(f - m, t),
    mul: (f, m) => _e(f * m, t),
    pow: (f, m) => P0(u, f, m),
    div: (f, m) => _e(f * Au(m, t), t),
    // Same as above, but doesn't normalize
    sqrN: (f) => f * f,
    addN: (f, m) => f + m,
    subN: (f, m) => f - m,
    mulN: (f, m) => f * m,
    inv: (f) => Au(f, t),
    sqrt: r.sqrt || ((f) => c(u, f)),
    invertBatch: (f) => $0(u, f),
    // TODO: do we really need constant cmov?
    // We don't have const-time bigints anyway, so probably will be not very useful
    cmov: (f, m, h) => h ? m : f,
    toBytes: (f) => n ? ac(f, s) : wf(f, s),
    fromBytes: (f) => {
      if (f.length !== s)
        throw new Error(`Fp.fromBytes: expected ${s}, got ${f.length}`);
      return n ? Ho(f) : J0(f);
    }
  });
  return Object.freeze(u);
}
function V0(t, e) {
  if (!t.isOdd)
    throw new Error("Field doesn't have isOdd");
  const n = t.sqrt(e);
  return t.isOdd(n) ? t.neg(n) : n;
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const H0 = BigInt(0), La = BigInt(1);
function j0(t, e) {
  const n = (i, s) => {
    const c = s.negate();
    return i ? c : s;
  }, r = (i) => {
    const s = Math.ceil(e / i) + 1, c = 2 ** (i - 1);
    return { windows: s, windowSize: c };
  };
  return {
    constTimeNegate: n,
    // non-const time multiplication ladder
    unsafeLadder(i, s) {
      let c = t.ZERO, u = i;
      for (; s > H0; )
        s & La && (c = c.add(u)), u = u.double(), s >>= La;
      return c;
    },
    /**
     * Creates a wNAF precomputation window. Used for caching.
     * Default window size is set by `utils.precompute()` and is equal to 8.
     * Number of precomputed points depends on the curve size:
     * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
     * - 𝑊 is the window size
     * - 𝑛 is the bitlength of the curve order.
     * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
     * @returns precomputed point tables flattened to a single array
     */
    precomputeWindow(i, s) {
      const { windows: c, windowSize: u } = r(s), f = [];
      let m = i, h = m;
      for (let g = 0; g < c; g++) {
        h = m, f.push(h);
        for (let y = 1; y < u; y++)
          h = h.add(m), f.push(h);
        m = h.double();
      }
      return f;
    },
    /**
     * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
     * @param W window size
     * @param precomputes precomputed tables
     * @param n scalar (we don't check here, but should be less than curve order)
     * @returns real and fake (for const-time) points
     */
    wNAF(i, s, c) {
      const { windows: u, windowSize: f } = r(i);
      let m = t.ZERO, h = t.BASE;
      const g = BigInt(2 ** i - 1), y = 2 ** i, b = BigInt(i);
      for (let S = 0; S < u; S++) {
        const U = S * f;
        let $ = Number(c & g);
        c >>= b, $ > f && ($ -= y, c += La);
        const R = U, ae = U + Math.abs($) - 1, L = S % 2 !== 0, Z = $ < 0;
        $ === 0 ? h = h.add(n(L, s[R])) : m = m.add(n(Z, s[ae]));
      }
      return { p: m, f: h };
    },
    wNAFCached(i, s, c, u) {
      const f = i._WINDOW_SIZE || 1;
      let m = s.get(i);
      return m || (m = this.precomputeWindow(i, f), f !== 1 && s.set(i, u(m))), this.wNAF(f, m, c);
    }
  };
}
function R0(t) {
  return K0(t.Fp), Dc(t, {
    n: "bigint",
    h: "bigint",
    Gx: "field",
    Gy: "field"
  }, {
    nBitLength: "isSafeInteger",
    nByteLength: "isSafeInteger"
  }), Object.freeze({
    ...yf(t.n, t.nBitLength),
    ...t,
    p: t.Fp.ORDER
  });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const dt = BigInt(0), rt = BigInt(1), Uo = BigInt(2), z0 = BigInt(8), W0 = { zip215: !0 };
function Y0(t) {
  const e = R0(t);
  return Dc(t, {
    hash: "function",
    a: "bigint",
    d: "bigint",
    randomBytes: "function"
  }, {
    adjustScalarBytes: "function",
    domain: "function",
    uvRatio: "function",
    mapToCurve: "function"
  }), Object.freeze({ ...e });
}
function _c(t) {
  const e = Y0(t), { Fp: n, n: r, prehash: i, hash: s, randomBytes: c, nByteLength: u, h: f } = e, m = Uo << BigInt(u * 8) - rt, h = n.create, g = e.uvRatio || ((K, _) => {
    try {
      return { isValid: !0, value: n.sqrt(K * n.inv(_)) };
    } catch {
      return { isValid: !1, value: dt };
    }
  }), y = e.adjustScalarBytes || ((K) => K), b = e.domain || ((K, _, W) => {
    if (_.length || W)
      throw new Error("Contexts/pre-hash are not supported");
    return K;
  }), S = (K) => typeof K == "bigint" && dt < K, U = (K, _) => S(K) && S(_) && K < _, $ = (K) => K === dt || U(K, m);
  function R(K, _) {
    if (U(K, _))
      return K;
    throw new Error(`Expected valid scalar < ${_}, got ${typeof K} ${K}`);
  }
  function ae(K) {
    return K === dt ? K : R(K, r);
  }
  const L = /* @__PURE__ */ new Map();
  function Z(K) {
    if (!(K instanceof F))
      throw new Error("ExtendedPoint expected");
  }
  class F {
    constructor(_, W, j, Y) {
      if (this.ex = _, this.ey = W, this.ez = j, this.et = Y, !$(_))
        throw new Error("x required");
      if (!$(W))
        throw new Error("y required");
      if (!$(j))
        throw new Error("z required");
      if (!$(Y))
        throw new Error("t required");
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    static fromAffine(_) {
      if (_ instanceof F)
        throw new Error("extended point not allowed");
      const { x: W, y: j } = _ || {};
      if (!$(W) || !$(j))
        throw new Error("invalid affine point");
      return new F(W, j, rt, h(W * j));
    }
    static normalizeZ(_) {
      const W = n.invertBatch(_.map((j) => j.ez));
      return _.map((j, Y) => j.toAffine(W[Y])).map(F.fromAffine);
    }
    // "Private method", don't use it directly
    _setWindowSize(_) {
      this._WINDOW_SIZE = _, L.delete(this);
    }
    // Not required for fromHex(), which always creates valid points.
    // Could be useful for fromAffine().
    assertValidity() {
      const { a: _, d: W } = e;
      if (this.is0())
        throw new Error("bad point: ZERO");
      const { ex: j, ey: Y, ez: re, et: me } = this, Ne = h(j * j), he = h(Y * Y), fe = h(re * re), Ee = h(fe * fe), Je = h(Ne * _), Ce = h(fe * h(Je + he)), De = h(Ee + h(W * h(Ne * he)));
      if (Ce !== De)
        throw new Error("bad point: equation left != right (1)");
      const ze = h(j * Y), w = h(re * me);
      if (ze !== w)
        throw new Error("bad point: equation left != right (2)");
    }
    // Compare one point to another.
    equals(_) {
      Z(_);
      const { ex: W, ey: j, ez: Y } = this, { ex: re, ey: me, ez: Ne } = _, he = h(W * Ne), fe = h(re * Y), Ee = h(j * Ne), Je = h(me * Y);
      return he === fe && Ee === Je;
    }
    is0() {
      return this.equals(F.ZERO);
    }
    negate() {
      return new F(h(-this.ex), this.ey, this.ez, h(-this.et));
    }
    // Fast algo for doubling Extended Point.
    // https://hyperelliptic.org/EFD/g1p/auto-twisted-extended.html#doubling-dbl-2008-hwcd
    // Cost: 4M + 4S + 1*a + 6add + 1*2.
    double() {
      const { a: _ } = e, { ex: W, ey: j, ez: Y } = this, re = h(W * W), me = h(j * j), Ne = h(Uo * h(Y * Y)), he = h(_ * re), fe = W + j, Ee = h(h(fe * fe) - re - me), Je = he + me, Ce = Je - Ne, De = he - me, ze = h(Ee * Ce), w = h(Je * De), E = h(Ee * De), B = h(Ce * Je);
      return new F(ze, w, B, E);
    }
    // Fast algo for adding 2 Extended Points.
    // https://hyperelliptic.org/EFD/g1p/auto-twisted-extended.html#addition-add-2008-hwcd
    // Cost: 9M + 1*a + 1*d + 7add.
    add(_) {
      Z(_);
      const { a: W, d: j } = e, { ex: Y, ey: re, ez: me, et: Ne } = this, { ex: he, ey: fe, ez: Ee, et: Je } = _;
      if (W === BigInt(-1)) {
        const O = h((re - Y) * (fe + he)), H = h((re + Y) * (fe - he)), M = h(H - O);
        if (M === dt)
          return this.double();
        const V = h(me * Uo * Je), G = h(Ne * Uo * Ee), d = G + V, a = H + O, l = G - V, p = h(d * M), T = h(a * l), N = h(d * l), I = h(M * a);
        return new F(p, T, I, N);
      }
      const Ce = h(Y * he), De = h(re * fe), ze = h(Ne * j * Je), w = h(me * Ee), E = h((Y + re) * (he + fe) - Ce - De), B = w - ze, J = w + ze, k = h(De - W * Ce), C = h(E * B), P = h(J * k), A = h(E * k), D = h(B * J);
      return new F(C, P, D, A);
    }
    subtract(_) {
      return this.add(_.negate());
    }
    wNAF(_) {
      return ce.wNAFCached(this, L, _, F.normalizeZ);
    }
    // Constant-time multiplication.
    multiply(_) {
      const { p: W, f: j } = this.wNAF(R(_, r));
      return F.normalizeZ([W, j])[0];
    }
    // Non-constant-time multiplication. Uses double-and-add algorithm.
    // It's faster, but should only be used when you don't care about
    // an exposed private key e.g. sig verification.
    // Does NOT allow scalars higher than CURVE.n.
    multiplyUnsafe(_) {
      let W = ae(_);
      return W === dt ? ne : this.equals(ne) || W === rt ? this : this.equals(X) ? this.wNAF(W).p : ce.unsafeLadder(this, W);
    }
    // Checks if point is of small order.
    // If you add something to small order point, you will have "dirty"
    // point with torsion component.
    // Multiplies point by cofactor and checks if the result is 0.
    isSmallOrder() {
      return this.multiplyUnsafe(f).is0();
    }
    // Multiplies point by curve order and checks if the result is 0.
    // Returns `false` is the point is dirty.
    isTorsionFree() {
      return ce.unsafeLadder(this, r).is0();
    }
    // Converts Extended point to default (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    toAffine(_) {
      const { ex: W, ey: j, ez: Y } = this, re = this.is0();
      _ == null && (_ = re ? z0 : n.inv(Y));
      const me = h(W * _), Ne = h(j * _), he = h(Y * _);
      if (re)
        return { x: dt, y: rt };
      if (he !== rt)
        throw new Error("invZ was invalid");
      return { x: me, y: Ne };
    }
    clearCofactor() {
      const { h: _ } = e;
      return _ === rt ? this : this.multiplyUnsafe(_);
    }
    // Converts hash string or Uint8Array to Point.
    // Uses algo from RFC8032 5.1.3.
    static fromHex(_, W = !1) {
      const { d: j, a: Y } = e, re = n.BYTES;
      _ = mi("pointHex", _, re);
      const me = _.slice(), Ne = _[re - 1];
      me[re - 1] = Ne & -129;
      const he = Ho(me);
      he === dt || (W ? R(he, m) : R(he, n.ORDER));
      const fe = h(he * he), Ee = h(fe - rt), Je = h(j * fe - Y);
      let { isValid: Ce, value: De } = g(Ee, Je);
      if (!Ce)
        throw new Error("Point.fromHex: invalid y coordinate");
      const ze = (De & rt) === rt, w = (Ne & 128) !== 0;
      if (!W && De === dt && w)
        throw new Error("Point.fromHex: x=0 and x_0=1");
      return w !== ze && (De = h(-De)), F.fromAffine({ x: De, y: he });
    }
    static fromPrivateKey(_) {
      return Oe(_).point;
    }
    toRawBytes() {
      const { x: _, y: W } = this.toAffine(), j = ac(W, n.BYTES);
      return j[j.length - 1] |= _ & rt ? 128 : 0, j;
    }
    toHex() {
      return Cc(this.toRawBytes());
    }
  }
  F.BASE = new F(e.Gx, e.Gy, rt, h(e.Gx * e.Gy)), F.ZERO = new F(dt, rt, rt, dt);
  const { BASE: X, ZERO: ne } = F, ce = j0(F, u * 8);
  function we(K) {
    return _e(K, r);
  }
  function Se(K) {
    return we(Ho(K));
  }
  function Oe(K) {
    const _ = u;
    K = mi("private key", K, _);
    const W = mi("hashed private key", s(K), 2 * _), j = y(W.slice(0, _)), Y = W.slice(_, 2 * _), re = Se(j), me = X.multiply(re), Ne = me.toRawBytes();
    return { head: j, prefix: Y, scalar: re, point: me, pointBytes: Ne };
  }
  function Le(K) {
    return Oe(K).pointBytes;
  }
  function Xe(K = new Uint8Array(), ..._) {
    const W = vu(..._);
    return Se(s(b(W, mi("context", K), !!i)));
  }
  function Vt(K, _, W = {}) {
    K = mi("message", K), i && (K = i(K));
    const { prefix: j, scalar: Y, pointBytes: re } = Oe(_), me = Xe(W.context, j, K), Ne = X.multiply(me).toRawBytes(), he = Xe(W.context, Ne, re, K), fe = we(me + he * Y);
    ae(fe);
    const Ee = vu(Ne, ac(fe, n.BYTES));
    return mi("result", Ee, u * 2);
  }
  const He = W0;
  function Pe(K, _, W, j = He) {
    const { context: Y, zip215: re } = j, me = n.BYTES;
    K = mi("signature", K, 2 * me), _ = mi("message", _), i && (_ = i(_));
    const Ne = Ho(K.slice(me, 2 * me));
    let he, fe, Ee;
    try {
      he = F.fromHex(W, re), fe = F.fromHex(K.slice(0, me), re), Ee = X.multiplyUnsafe(Ne);
    } catch {
      return !1;
    }
    if (!re && he.isSmallOrder())
      return !1;
    const Je = Xe(Y, fe.toRawBytes(), he.toRawBytes(), _);
    return fe.add(he.multiplyUnsafe(Je)).subtract(Ee).clearCofactor().equals(F.ZERO);
  }
  return X._setWindowSize(8), {
    CURVE: e,
    getPublicKey: Le,
    sign: Vt,
    verify: Pe,
    ExtendedPoint: F,
    utils: {
      getExtendedPublicKey: Oe,
      // ed25519 private keys are uniform 32b. No need to check for modulo bias, like in secp256k1.
      randomPrivateKey: () => c(n.BYTES),
      /**
       * We're doing scalar multiplication (used in getPublicKey etc) with precomputed BASE_POINT
       * values. This slows down first getPublicKey() by milliseconds (see Speed section),
       * but allows to speed-up subsequent getPublicKey() calls up to 20x.
       * @param windowSize 2, 4, 8, 16
       */
      precompute(K = 8, _ = F.BASE) {
        return _._setWindowSize(K), _.multiply(BigInt(3)), _;
      }
    }
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const qc = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949"), Uu = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
BigInt(0);
const X0 = BigInt(1), uc = BigInt(2), Z0 = BigInt(5), Lu = BigInt(10), G0 = BigInt(20), Q0 = BigInt(40), Cu = BigInt(80);
function eg(t) {
  const e = qc, r = t * t % e * t % e, i = Bt(r, uc, e) * r % e, s = Bt(i, X0, e) * t % e, c = Bt(s, Z0, e) * s % e, u = Bt(c, Lu, e) * c % e, f = Bt(u, G0, e) * u % e, m = Bt(f, Q0, e) * f % e, h = Bt(m, Cu, e) * m % e, g = Bt(h, Cu, e) * m % e, y = Bt(g, Lu, e) * c % e;
  return { pow_p_5_8: Bt(y, uc, e) * t % e, b2: r };
}
function tg(t) {
  return t[0] &= 248, t[31] &= 127, t[31] |= 64, t;
}
function ng(t, e) {
  const n = qc, r = _e(e * e * e, n), i = _e(r * r * e, n), s = eg(t * i).pow_p_5_8;
  let c = _e(t * r * s, n);
  const u = _e(e * c * c, n), f = c, m = _e(c * Uu, n), h = u === t, g = u === _e(-t, n), y = u === _e(-t * Uu, n);
  return h && (c = f), (g || y) && (c = m), _0(c, n) && (c = _e(-c, n)), { isValid: h || g, value: c };
}
const si = M0(qc, void 0, !0), Kc = {
  // Param: a
  a: BigInt(-1),
  // d is equal to -121665/121666 over finite field.
  // Negative number is P - number, and division is invert(number, P)
  d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"),
  // Finite field 𝔽p over which we'll do calculations; 2n**255n - 19n
  Fp: si,
  // Subgroup order: how many points curve has
  // 2n**252n + 27742317777372353535851937790883648493n;
  n: BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"),
  // Cofactor
  h: BigInt(8),
  // Base point (x, y) aka generator point
  Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"),
  Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960"),
  hash: hf,
  randomBytes: Mp,
  adjustScalarBytes: tg,
  // dom2
  // Ratio of u to v. Allows us to combine inversion and square root. Uses algo from RFC8032 5.1.3.
  // Constant-time, u/√v
  uvRatio: ng
}, zi = /* @__PURE__ */ _c(Kc);
function Tf(t, e, n) {
  if (e.length > 255)
    throw new Error("Context is too big");
  return Pp(af("SigEd25519 no Ed25519 collisions"), new Uint8Array([n ? 1 : 0, e.length]), e, t);
}
({
  ...Kc
});
({
  ...Kc
});
const rg = (si.ORDER + BigInt(3)) / BigInt(8);
si.pow(uc, rg);
si.sqrt(si.neg(si.ONE));
(si.ORDER - BigInt(5)) / BigInt(8);
BigInt(486662);
V0(si, si.neg(BigInt(486664)));
BigInt("25063068953384623474111414158702152701244531502492656460079210482610430750235");
BigInt("54469307008909316920995813868745141605393597292927456921205312896311721017578");
BigInt("1159843021668779879193775521855586647937357759715417654439879720876111806838");
BigInt("40440834346308536858101042469323190826248399146238708352240133220865137265952");
BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
class Ci {
  /**
   * Constructs a new Keypair instance.
   *
   * @param privateKey - Private key of the key pair.
   * @param publicKey - Public key of the key pair.
   */
  constructor(e, n) {
    this.privateKey = e, this.publicKey = n;
  }
  /**
   * Generates a new random Keypair.
   *
   * @returns A new Keypair instance.
   */
  static generate() {
    const e = zi.utils.randomPrivateKey(), n = zi.getPublicKey(e);
    return new Ci(e, n);
  }
  /**
   * Constructs a Keypair from a given secret key.
   *
   * @param secretKey - Secret key to derive the Keypair from.
   * @returns A new Keypair instance.
   */
  static fromSecretKey(e) {
    const n = e.subarray(0, 32), r = zi.getPublicKey(n);
    return new Ci(n, r);
  }
  /**
   * Constructs a Keypair from a given seed.
   *
   * @param seed - Seed to derive the Keypair from.
   * @returns A new Keypair instance.
   */
  static fromSeed(e) {
    return Ci.fromSecretKey(e);
  }
  /**
   * Constructs a Keypair from a raw private key.
   *
   * @param rawPrivateKey - Raw private key to derive the Keypair from.
   * @returns A new Keypair instance.
   */
  static fromRawPrivateKey(e) {
    const n = zi.getPublicKey(e);
    return new Ci(e, n);
  }
  /**
   * Retrieves the public key as a PublicKey object.
   *
   * @returns The public key.
   */
  getPublicKey() {
    return new No(this.publicKey);
  }
  /**
   * Retrieves the raw public key value.
   *
   * @returns The public key as a Uint8Array.
   */
  getPublicValue() {
    return this.publicKey;
  }
  /**
   * Retrieves the raw private key value.
   *
   * @returns The private key as a Uint8Array.
   */
  getPrivateValue() {
    return this.privateKey;
  }
  /**
   * Constructs the secret key from the private and public keys.
   *
   * @returns The secret key as a Uint8Array.
   */
  getSecretKey() {
    return Uint8Array.from([...this.privateKey, ...this.publicKey]);
  }
  /**
   * Signs a message using the private key.
   *
   * @param message - The message to sign.
   * @returns The signature as a Uint8Array.
   */
  sign(e) {
    return zi.sign(new Uint8Array(e), this.privateKey);
  }
  /**
   * Verifies a message signature against the public key.
   *
   * @param message - The message to verify.
   * @param signature - The signature to verify against.
   * @returns True if the signature is valid, false otherwise.
   */
  verify(e, n) {
    return zi.verify(n, new Uint8Array(e), this.publicKey);
  }
}
const Ef = () => new Error("invalid size"), bf = () => new Error("destination is required"), Nf = () => new Error("amount is required"), xf = () => new Error("currency is required"), ho = () => new Error("invalid currency"), ig = () => new Error("unexpected error"), sg = () => new Error("cannot derive nonce from both clientSecret and idempotencyKey"), Bf = () => new Error("invalid mode");
class at {
  /**
   * Constructor for an idempotency key.
   * @param {Uint8Array} data The value to initialize the idempotency key with. If not specified, a random Uint8Array of length IdempotencyKey.MAX_LENGTH is used.
   */
  constructor(e = new Uint8Array(at.MAX_LENGTH)) {
    if (e.length != at.MAX_LENGTH)
      throw Ef();
    this.value = e;
  }
  /**
   * Creates a new idempotency key from a client secret string.
   * @param {string} data The client secret to parse into an idempotency key.
   * @returns {IdempotencyKey} An IdempotencyKey object representing the decoded client secret.
   */
  static fromClientSecret(e) {
    return new at(mo.decode(e));
  }
  /**
   * Creates a new idempotency key from a seed string.
   * @param {string} seed The seed to create the idempotency key with.
   * @returns {IdempotencyKey} An IdempotencyKey object representing the created idempotency key.
   */
  static fromSeed(e) {
    return new at(ff(e).subarray(0, at.MAX_LENGTH));
  }
  /**
   * Generates a random idempotency key.
   * @returns {IdempotencyKey} An IdempotencyKey object representing the generated key.
   */
  static generate() {
    const e = Ci.generate().privateKey.subarray(0, at.MAX_LENGTH);
    return new at(e);
  }
  /**
   * Converts the idempotency key to a base58 string.
   * @returns {string} A base58 encoded string representing the idempotency key.
   */
  toString() {
    return mo.encode(this.value);
  }
}
at.MAX_LENGTH = 11;
const ta = [
  // Crypto
  "kin",
  // Fiat
  "aed",
  "afn",
  "all",
  "amd",
  "ang",
  "aoa",
  "ars",
  "aud",
  "awg",
  "azn",
  "bam",
  "bbd",
  "bdt",
  "bgn",
  "bhd",
  "bif",
  "bmd",
  "bnd",
  "bob",
  "brl",
  "bsd",
  "btn",
  "bwp",
  "byn",
  "bzd",
  "cad",
  "cdf",
  "chf",
  "clp",
  "cny",
  "cop",
  "crc",
  "cup",
  "cve",
  "czk",
  "djf",
  "dkk",
  "dop",
  "dzd",
  "egp",
  "ern",
  "etb",
  "eur",
  "fjd",
  "fkp",
  "gbp",
  "gel",
  "ghs",
  "gip",
  "gmd",
  "gnf",
  "gtq",
  "gyd",
  "hkd",
  "hnl",
  "hrk",
  "htg",
  "huf",
  "idr",
  "ils",
  "inr",
  "iqd",
  "irr",
  "isk",
  "jmd",
  "jod",
  "jpy",
  "kes",
  "kgs",
  "khr",
  "kmf",
  "kpw",
  "krw",
  "kwd",
  "kyd",
  "kzt",
  "lak",
  "lbp",
  "lkr",
  "lrd",
  "lyd",
  "mad",
  "mdl",
  "mga",
  "mkd",
  "mmk",
  "mnt",
  "mop",
  "mru",
  "mur",
  "mvr",
  "mwk",
  "mxn",
  "myr",
  "mzn",
  "nad",
  "ngn",
  "nio",
  "nok",
  "npr",
  "nzd",
  "omr",
  "pab",
  "pen",
  "pgk",
  "php",
  "pkr",
  "pln",
  "pyg",
  "qar",
  "ron",
  "rsd",
  "rub",
  "rwf",
  "sar",
  "sbd",
  "scr",
  "sdg",
  "sek",
  "sgd",
  "shp",
  "sll",
  "sos",
  "srd",
  "ssp",
  "stn",
  "syp",
  "szl",
  "thb",
  "tjs",
  "tmt",
  "tnd",
  "top",
  "try",
  "ttd",
  "twd",
  "tzs",
  "uah",
  "ugx",
  "usd",
  "uyu",
  "uzs",
  "ves",
  "vnd",
  "vuv",
  "wst",
  "xaf",
  "xcd",
  "xof",
  "xpf",
  "yer",
  "zar",
  "zmw"
];
function og(t) {
  const e = ta.indexOf(t);
  if (e === -1)
    throw ho();
  return e;
}
function ag(t) {
  if (t < 0 || t >= ta.length)
    throw ho();
  return ta[t];
}
function If(t) {
  return ta.indexOf(t) !== -1;
}
var po;
(function(t) {
  t[t.Cash = 0] = "Cash", t[t.GiftCard = 1] = "GiftCard", t[t.RequestPayment = 2] = "RequestPayment";
})(po || (po = {}));
class go {
  /**
   * Construct a new CodePayload.
   *
   * @param kind - The type of the code.
   * @param amount - The amount associated with the code.
   * @param nonce - A randomly-generated nonce.
   * @param currency - (Optional) Currency associated with the RequestPayment type.
   */
  constructor(e, n, r, i) {
    if (this.kind = e, this.amount = n, this.nonce = r, i && !If(i))
      throw ho();
    this.currency = i;
  }
  /**
   * Convert the payload to its binary representation.
   *
   * @returns A Uint8Array containing the binary representation of the payload.
   */
  toBinary() {
    const e = new Uint8Array(20);
    if (e[0] = this.kind, this.kind === po.RequestPayment) {
      if (!this.currency)
        throw ho();
      const n = og(this.currency);
      e[1] = n;
      for (let r = 0; r < 7; r++)
        e[r + 2] = Number(this.amount >> BigInt(8 * r) & BigInt(255));
    } else
      for (let n = 0; n < 8; n++)
        e[n + 1] = Number(this.amount >> BigInt(8 * n) & BigInt(255));
    return e.set(this.nonce, 9), e;
  }
  /**
   * Create a CodePayload from its binary representation.
   *
   * @param data - The binary data.
   * @returns A new instance of CodePayload.
   */
  static fromData(e) {
    if (e.length !== go.MAX_LENGTH)
      throw Ef();
    const n = e[0];
    let r, i, s;
    if (n === po.RequestPayment) {
      const c = e[1];
      s = ag(c), r = e.slice(2, 9).reduce((u, f, m) => u + (BigInt(f) << BigInt(8 * m)), BigInt(0));
    } else
      r = e.slice(1, 9).reduce((c, u, f) => c + (BigInt(u) << BigInt(8 * f)), BigInt(0));
    return i = e.slice(9), new go(n, r, i, s);
  }
}
go.MAX_LENGTH = 20;
function cg(t) {
  return Ci.fromSeed(ff(t.toBinary()));
}
function ug(t) {
  if (t.mode === void 0)
    throw Bf();
  if (t.idempotencyKey && t.clientSecret)
    throw sg();
}
function lg(t) {
  if (t.destination === void 0)
    throw bf();
  if (t.amount === void 0)
    throw Nf();
  if (t.currency === void 0)
    throw xf();
  if (!If(t.currency))
    throw ho();
}
function Of(t) {
  switch (ug(t), t.mode) {
    case "payment":
      lg(t);
      break;
    default:
      throw Bf();
  }
}
class kf {
  /**
   * Constructs a new PaymentRequestIntent instance.
   *
   * @param opt - The payment request options.
   */
  constructor(e) {
    this.options = {
      ...e,
      // Normalize currency to lowercase 
      // (just in case the end user is not using TypeScript)
      currency: e.currency && e.currency.toLowerCase()
    }, this.validate(), this.options.idempotencyKey ? this.nonce = at.fromSeed(this.options.idempotencyKey) : this.options.clientSecret ? this.nonce = at.fromClientSecret(this.options.clientSecret) : this.nonce = at.generate(), this.options.amount = parseFloat(this.options.amount.toFixed(2)), this.convertedAmount = parseInt((this.options.amount * 100).toFixed());
    const n = po.RequestPayment, r = BigInt(this.convertedAmount), i = this.nonce.value;
    this.rendezvousPayload = new go(n, r, i, this.options.currency), this.rendezvousKeypair = cg(this.rendezvousPayload);
  }
  /**
   * Validates the payment request options.
   */
  validate() {
    if (Of(this.options), !this.options.destination)
      throw bf();
    if (!this.options.amount)
      throw Nf();
    if (!this.options.currency)
      throw xf();
  }
  /**
   * Converts the payment request intent to its protobuf representation.
   *
   * @returns The protobuf representation of the payment request intent.
   */
  toProto() {
    const e = No.fromBase58(this.options.destination), { currency: n, amount: r } = this.options;
    let i;
    n === "kin" ? i = {
      case: "exact",
      value: new Ve({
        currency: "kin",
        exchangeRate: 1,
        quarks: BigInt(this.convertedAmount),
        nativeAmount: r
      })
    } : i = {
      case: "partial",
      value: new Jt({
        currency: n,
        nativeAmount: r
      })
    };
    const s = new Ct({
      requestorAccount: new z({
        value: e.toBuffer()
      }),
      exchangeData: i
    });
    return new lt({
      kind: {
        case: "requestToReceiveBill",
        value: s
      }
    });
  }
  /**
   * Signs the payment request intent.
   *
   * @returns A signed intent containing the message, intent, and signature.
   */
  sign() {
    const e = this.toProto(), n = e.kind.value;
    if (!n)
      throw ig();
    const r = this.rendezvousKeypair.sign(e.toBinary()), i = this.rendezvousKeypair.getPublicKey().toBase58();
    return {
      message: n.toBinary(),
      intent: i,
      signature: r
    };
  }
  /**
   * Retrieves the client secret.
   *
   * @returns The client secret as a string.
   */
  getClientSecret() {
    return this.nonce.toString();
  }
  /**
   * Retrieves the intent ID.
   *
   * @returns The intent ID as a Base58 encoded string.
   */
  getIntentId() {
    return this.rendezvousKeypair.getPublicKey().toBase58();
  }
}
function fg(t) {
  return typeof btoa == "function" ? btoa(t) : Ta.Buffer.from(t, "binary").toString("base64");
}
function xo(t) {
  return encodeURIComponent(fg(JSON.stringify(t ?? {})));
}
class be {
  /**
   * Constructs a new Kin instance.
   * @param whole - The whole part of the Kin amount.
   * @param quarks - The fractional part (quarks) of the Kin amount. Default is 0.
   */
  constructor(e, n = 0) {
    this.whole = BigInt(e), this.quarks = BigInt(n), this.normalize();
  }
  /**
   * Normalizes the Kin values ensuring the `quarks` value is within the valid range.
   * Any overflow is added to the `whole` value.
   */
  normalize() {
    const e = this.quarks / be.quarksPerKin;
    this.whole += e, this.quarks %= be.quarksPerKin;
  }
  /**
   * Converts the Kin amount to its equivalent in quarks.
   * @returns The total value in quarks.
   */
  toQuarks() {
    return this.whole * be.quarksPerKin + this.quarks;
  }
  /**
   * Converts the Kin amount to a decimal representation.
   * @returns The Kin value as a decimal number.
   */
  toDecimal() {
    return Number(this.whole) + Number(this.quarks) / Number(be.quarksPerKin);
  }
  /**
   * Creates a Kin instance from a given quarks value.
   * @param quarks - The value in quarks.
   * @returns A new Kin instance.
   */
  static fromQuarks(e) {
    const n = Number(e / be.quarksPerKin), r = Number(e % be.quarksPerKin);
    return new be(n, r);
  }
  /**
   * Creates a Kin instance from a decimal value.
   * @param decimal - The decimal value to convert.
   * @returns A new Kin instance.
   */
  static fromDecimal(e) {
    const n = BigInt(Math.round(e * Number(be.quarksPerKin)));
    return be.fromQuarks(n);
  }
  /**
   * Adds another Kin value to the current one.
   * @param other - The other Kin value to add.
   * @returns A new Kin instance with the summed value.
   */
  add(e) {
    const n = this.toQuarks() + e.toQuarks();
    return be.fromQuarks(n);
  }
  /**
   * Subtracts another Kin value from the current one.
   * @param other - The other Kin value to subtract.
   * @returns A new Kin instance with the difference.
   */
  subtract(e) {
    const n = this.toQuarks() - e.toQuarks();
    return be.fromQuarks(n);
  }
  /**
   * Multiplies the current Kin value by a factor.
   * @param factor - The multiplication factor.
   * @returns A new Kin instance with the multiplied value.
   */
  multiply(e) {
    const n = this.toQuarks() * BigInt(e);
    return be.fromQuarks(n);
  }
  /**
   * Divides the current Kin value by a divisor.
   * @param divisor - The divisor.
   * @returns A new Kin instance with the divided value.
   */
  divide(e) {
    const n = this.toQuarks() / BigInt(e);
    return be.fromQuarks(n);
  }
}
be.decimals = 5n;
be.quarksPerKin = 100000n;
be.mintAddress = "kinXdEcpDQeHPEuQnqmUgtYykqKGVFq6CeVX5iAHJq6";
be.mint = No.fromBase58(be.mintAddress);
be.zero = new be(0, 0);
be.one = new be(1, 0);
be.max = new be(Number.MAX_SAFE_INTEGER, Number(be.quarksPerKin - 1n));
be.min = new be(Number.MIN_SAFE_INTEGER, 0);
const dg = ["width", "height"], mg = /* @__PURE__ */ rs({
  __name: "PaymentRequestButton",
  emits: ["resize", "invoke"],
  setup(t, { emit: e }) {
    const n = Eo(), r = bt("options"), i = new is(), s = `${n.codeSdk()}/payment-request-button/#/${i.id}/p=${xo(r)}`, c = Tt(null), u = Tt(0), f = Tt(0);
    pa(() => {
      c.value && (i.on("resize", (h) => {
        const { width: g, height: y } = h;
        c.value && (u.value = g, f.value = y);
      }), i.on("invoke", () => {
        e("invoke", void 0);
      }));
    });
    function m() {
      const h = (g) => g + " !important";
      return {
        display: h("inline-block"),
        width: h("13.875rem"),
        height: h("3.75rem"),
        // We have to set this to make sure the iframe stays transparent.
        // Completely counter-intuitive.
        // https://bugs.chromium.org/p/chromium/issues/detail?id=1150352
        colorScheme: h("light")
      };
    }
    return (h, g) => (Ge(), xi("iframe", {
      ref_key: "el",
      ref: c,
      src: s,
      width: u.value,
      height: f.value,
      frameborder: "0",
      allowtransparency: "true",
      scrolling: "no",
      name: "payment-request-button",
      referrerpolicy: "no-referrer",
      style: vi(m())
    }, null, 12, dg));
  }
}), Sf = /* @__PURE__ */ rs({
  __name: "PaymentRequestModalDesktop",
  emits: [
    "codeScanned",
    "clientRejectedPayment",
    "intentSubmitted",
    "channelCreated"
  ],
  setup(t, { emit: e }) {
    const n = Eo(), r = bt("options"), i = new is(), s = `${n.codeSdk()}/payment-request-modal-desktop/#/${i.id}/p=${xo(r)}`, c = Tt(null);
    i.on("codeScanned", () => {
      e("codeScanned");
    }), i.on("clientRejectedPayment", () => {
      e("clientRejectedPayment");
    }), i.on("intentSubmitted", () => {
      e("intentSubmitted");
    }), pa(() => {
      c.value && (i.setTargetWindow(c.value), e("channelCreated", i));
    }), Nl(() => {
      var g, y;
      const { clientSecret: f, idempotencyKey: m, confirmParams: h } = r ?? {};
      f && i.emit("updatedClientSecret", { value: f }), m && i.emit("updatedIdempotencyKey", { value: m }), h && ((g = h.success) != null && g.url && i.emit("updatedSuccessUrl", { value: h.success.url }), (y = h.cancel) != null && y.url && i.emit("updatedCancelUrl", { value: h.cancel.url }));
    });
    function u() {
      const f = (m) => m + " !important";
      return {
        position: f("fixed"),
        inset: f("0"),
        zIndex: f("2147483647"),
        overflow: f("hidden"),
        width: f("100dvw"),
        height: f("100dvh"),
        // We have to set this to make sure the iframe stays transparent.
        // Completely counter-intuitive.
        // https://bugs.chromium.org/p/chromium/issues/detail?id=1150352
        colorScheme: f("light")
      };
    }
    return (f, m) => (Ge(), xi("iframe", {
      ref_key: "el",
      ref: c,
      src: s,
      frameborder: "0",
      allowTransparency: "true",
      scrolling: "no",
      name: "payment-request-card",
      referrerpolicy: "no-referrer",
      style: vi(u())
    }, null, 4));
  }
}), hg = /* @__PURE__ */ rs({
  __name: "PaymentRequestModalMobile",
  emits: [
    "codeScanned",
    "clientRejectedPayment",
    "intentSubmitted",
    "channelCreated"
  ],
  setup(t, { emit: e }) {
    const n = Eo(), r = bt("options"), i = new is(), s = `${n.codeSdk()}/payment-request-modal-mobile/#/${i.id}/p=${xo(r)}`, c = Tt(null);
    i.on("codeScanned", () => {
      e("codeScanned");
    }), i.on("clientRejectedPayment", () => {
      e("clientRejectedPayment");
    }), i.on("intentSubmitted", () => {
      e("intentSubmitted");
    }), i.on("navigate", (f) => {
      f.url && (window.location.href = f.url);
    }), pa(() => {
      c.value && (i.setTargetWindow(c.value), e("channelCreated", i));
    }), Nl(() => {
      var g, y;
      const { clientSecret: f, idempotencyKey: m, confirmParams: h } = r ?? {};
      f && i.emit("updatedClientSecret", { value: f }), m && i.emit("updatedIdempotencyKey", { value: m }), h && ((g = h.success) != null && g.url && i.emit("updatedSuccessUrl", { value: h.success.url }), (y = h.cancel) != null && y.url && i.emit("updatedCancelUrl", { value: h.cancel.url }));
    });
    function u() {
      const f = (m) => m + " !important";
      return {
        position: f("fixed"),
        inset: f("0"),
        zIndex: f("2147483647"),
        overflow: f("hidden"),
        width: f("100dvw"),
        height: f("100dvh"),
        // We have to set this to make sure the iframe stays transparent.
        // Completely counter-intuitive.
        // https://bugs.chromium.org/p/chromium/issues/detail?id=1150352
        colorScheme: f("light")
      };
    }
    return (f, m) => (Ge(), xi("iframe", {
      ref_key: "el",
      ref: c,
      src: s,
      frameborder: "0",
      allowTransparency: "true",
      scrolling: "no",
      name: "payment-request-card",
      referrerPolicy: "no-referrer",
      style: vi(u())
    }, null, 4));
  }
}), pg = /* @__PURE__ */ rs({
  __name: "PreloadPaymentRequestModalDesktop",
  setup(t) {
    const e = Eo(), n = bt("options"), r = `${e.codeSdk()}/payment-request-modal-desktop/#/preload/p=${xo(n)}`, i = Tt(null);
    function s() {
      const c = (u) => u + " !important";
      return {
        opacity: c("0"),
        visibility: c("hidden"),
        position: c("absolute"),
        top: c("-1px"),
        left: c("-1px"),
        zIndex: c("-1"),
        width: c("1px"),
        height: c("1px")
      };
    }
    return (c, u) => (Ge(), xi("iframe", {
      ref_key: "el",
      ref: i,
      src: r,
      frameborder: "0",
      allowTransparency: "true",
      scrolling: "no",
      name: "preload-payment-request-card",
      referrerpolicy: "no-referrer",
      style: vi(s())
    }, null, 4));
  }
}), gg = /* @__PURE__ */ rs({
  __name: "PreloadPaymentRequestModalMobile",
  setup(t) {
    const e = Eo(), n = bt("options"), r = `${e.codeSdk()}/payment-request-modal-mobile/#/preload/p=${xo(n)}`, i = Tt(null);
    function s() {
      const c = (u) => u + " !important";
      return {
        opacity: c("0"),
        visibility: c("hidden"),
        position: c("absolute"),
        top: c("-1px"),
        left: c("-1px"),
        zIndex: c("-1"),
        width: c("1px"),
        height: c("1px")
      };
    }
    return (c, u) => (Ge(), xi("iframe", {
      ref_key: "el",
      ref: i,
      src: r,
      frameborder: "0",
      allowTransparency: "true",
      scrolling: "no",
      name: "preload-payment-request-card",
      referrerpolicy: "no-referrer",
      style: vi(s())
    }, null, 4));
  }
});
function Ca(t) {
  try {
    return new URL(t), !0;
  } catch {
    return !1;
  }
}
function wg(t, e) {
  try {
    return new URL(t, e).toString();
  } catch {
    return "";
  }
}
function yg(t, e) {
  let n = decodeURIComponent(t);
  for (const [r, i] of Object.entries(e))
    n = n.replace(`{{${r}}}`, i);
  return encodeURI(n);
}
function Du(t, e, n) {
  let r = (t == null ? void 0 : t.url) ?? e;
  if (r && (!Ca(r) && e && Ca(e) && (r = wg(r, new URL(e).origin)), Ca(r)))
    return n && (r = yg(r, n)), { url: r };
}
const _u = () => new Error("unexpected error"), qu = (t, e) => new Error(`unexpected HTTP status: ${t}, ${e}`), Ku = (t) => new Error(`unexpected server error: ${t}`);
class Tg {
  /**
   * Initializes a new connection to the provided endpoint.
   *
   * @param endpoint - The URL of the endpoint to connect to.
   * @param fetch - Optional fetch function. Defaults to {} fetch.
   */
  constructor(e, n = globalThis.fetch) {
    this.endpoint = e, this.fetch = n;
  }
  /**
   * Performs an HTTP GET request to the specified method with provided parameters.
   *
   * @param method - The API method to call.
   * @param params - The parameters for the method.
   * @returns The response JSON object on success.
   * @throws Will throw an error if the HTTP status is not 200 or if the server returns an error.
   */
  async get(e, n) {
    const r = `${this.endpoint}/${e}?${new URLSearchParams(n)}`, i = await this.fetch(r, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });
    if (i.status !== 200) {
      const c = await i.text();
      throw qu(i.status, c);
    }
    const s = await i.json();
    if (s.error)
      throw Ku(s.error);
    if (s.success)
      return s;
    throw console.error(s), _u();
  }
  /**
   * Performs an HTTP POST request to the specified method with provided body data.
   *
   * @param method - The API method to call.
   * @param body - The data to be sent in the request body.
   * @returns `true` on success.
   * @throws Will throw an error if the HTTP status is not 200 or if the server returns an error.
   */
  async post(e, n) {
    const r = `${this.endpoint}/${e}`, i = await this.fetch(r, {
      method: "POST",
      body: JSON.stringify(n),
      headers: { "Content-Type": "application/json" }
    });
    if (i.status !== 200) {
      const c = await i.text();
      throw qu(i.status, c);
    }
    const s = await i.json();
    if (s.error)
      throw Ku(s.error);
    if (s.success)
      return !0;
    throw console.error(s), _u();
  }
}
const Eg = "https://api.getcode.com/v1", Pu = new Tg(Eg);
var na;
(function(t) {
  t.Pending = "pending", t.Confirmed = "confirmed";
})(na || (na = {}));
const bg = { status: na.Pending }, Ng = { status: na.Confirmed }, xg = {
  /**
   * Creates a new payment intent.
   *
   * @param obj - The options for creating a payment intent.
   * @returns An object containing the client secret and intent ID.
   * @throws Will throw an error if unable to create the intent.
   */
  create: async (t) => {
    var i;
    t.mode = "payment";
    const e = new kf(t), n = e.sign(), r = {
      intent: n.intent,
      message: Ta.Buffer.from(n.message).toString("base64url"),
      signature: mo.encode(n.signature),
      webhook: (i = e.options.webhook) == null ? void 0 : i.url
    };
    return await Pu.post("createIntent", r), {
      clientSecret: e.getClientSecret(),
      id: e.getIntentId()
    };
  },
  /**
   * Retrieves the status of a specified payment intent.
   *
   * @param obj - The options containing the intent ID to check status for.
   * @returns An object representing the intent's status.
   * @throws Will throw an error if unable to retrieve the intent's status.
   */
  getStatus: async (t) => (await Pu.get("getStatus", { intent: t.intent })).status === "SUBMITTED" ? Ng : bg
}, Bg = { key: 0 }, Ig = { key: 1 }, $u = 500, Og = /* @__PURE__ */ rs({
  __name: "ButtonFlow",
  setup(t) {
    var U, $, R, ae;
    const e = (L) => new Promise((Z) => setTimeout(Z, L)), n = bt("options"), r = bt("emit", async () => !1), i = Tt(null), s = Tt(null), c = Tt(!1), u = Cg(), f = (($ = (U = n == null ? void 0 : n.confirmParams) == null ? void 0 : U.success) == null ? void 0 : $.url) !== void 0, m = ((ae = (R = n == null ? void 0 : n.confirmParams) == null ? void 0 : R.cancel) == null ? void 0 : ae.url) !== void 0;
    function h() {
      return n && n.amount && n.currency && n.destination;
    }
    function g(L) {
      i.value = L;
    }
    async function y() {
      var X, ne;
      if (c.value = !0, await Va(), !n)
        throw new Error("Missing options");
      if (!i.value)
        throw new Error("Missing channel");
      if (i.value.emit("beforeInvoke"), await r("invoke")) {
        c.value = !1;
        return;
      }
      s.value = new kf(n).getIntentId();
      const Z = {
        INTENT_ID: s.value
        // ...
      }, F = window.location.href;
      if (n.confirmParams = {
        success: Du((X = n.confirmParams) == null ? void 0 : X.success, F, Z),
        cancel: Du((ne = n.confirmParams) == null ? void 0 : ne.cancel, F, Z)
      }, await Va(), !i.value)
        throw new Error("Missing channel");
      i.value.emit("afterInvoke");
    }
    async function b() {
      var F, X;
      c.value = !1, await e($u);
      const L = (X = (F = n == null ? void 0 : n.confirmParams) == null ? void 0 : F.success) == null ? void 0 : X.url;
      await r("success", { url: L, options: n, intent: s.value }) || f && (window.location.href = L);
    }
    async function S() {
      var F, X;
      c.value = !1, await e($u);
      const L = (X = (F = n == null ? void 0 : n.confirmParams) == null ? void 0 : F.cancel) == null ? void 0 : X.url;
      await r("cancel", { url: L, options: n, intent: s.value }) || m && (window.location.href = L);
    }
    return document.addEventListener("visibilitychange", async () => {
      if (document.visibilityState === "visible") {
        if (!s.value)
          return;
        const { status: L } = await xg.getStatus({ intent: s.value });
        L === "confirmed" && b();
      }
    }), (L, Z) => h() ? (Ge(), xi(ht, { key: 0 }, [
      Pt(hi(mg), { onInvoke: y }),
      (Ge(), Yi(Zm, { to: "body" }, [
        c.value ? (Ge(), xi("div", Bg, [
          hi(u) ? (Ge(), Yi(hi(hg), {
            key: 0,
            onChannelCreated: g,
            onIntentSubmitted: b,
            onClientRejectedPayment: S
          })) : (Ge(), Yi(hi(Sf), {
            key: 1,
            onChannelCreated: g,
            onIntentSubmitted: b,
            onClientRejectedPayment: S
          }))
        ])) : (Ge(), xi("div", Ig, [
          hi(u) ? (Ge(), Yi(hi(gg), { key: 0 })) : (Ge(), Yi(hi(pg), { key: 1 }))
        ]))
      ]))
    ], 64)) : rh("", !0);
  }
}), kg = (t) => new Error(`Unknown element type: ${t}`), Kg = (t) => new Error(`Required parameter: ${t}`), Pg = (t) => new Error(`Invalid parameter: ${t}`), Mu = "payment", Sg = "en";
class vf {
  /**
   * Constructor initializes the element with given parameters and Vue application.
   * @param params - Partial element options.
   * @param app - Vue application instance.
   */
  constructor(e, n) {
    const r = { ...e };
    r.mode = r.mode ?? Mu, r.locale = r.locale ?? Sg, this.intent = ua(r), this.listeners = [], this.app = n, this.validate();
  }
  /**
   * Validates the current element options.
   * @returns True if the options are valid.
   */
  validate() {
    return Of(this.intent);
  }
  /**
   * Retrieves the locale of the element.
   * @returns The locale string or undefined.
   */
  getLocale() {
    return this.intent.locale;
  }
  /**
   * Retrieves the mode of the element.
   * @returns The mode of the element.
   */
  getMode() {
    return this.intent.mode ?? Mu;
  }
  /**
   * Retrieves the appearance of the element.
   * @returns The appearance string or undefined.
   */
  getAppearance() {
    return this.intent.appearance;
  }
  /**
   * Retrieves the current options of the element.
   * @returns The element options.
   */
  getOptions() {
    return this.intent;
  }
  /**
   * Updates the element with new options.
   * @param options - New options to update the element with.
   */
  update(e) {
    Object.assign(this.intent, e), this.validate();
  }
  /**
   * Subscribes to an event with a callback.
   * @param event - The event to subscribe to.
   * @param callback - The function to call back when the event occurs.
   */
  on(e, n) {
    this.listeners.push({ event: e, callback: n });
  }
  /**
   * Mounts the Vue component onto an HTML element.
   * @param el - The element or a selector string for mounting.
   * @returns The mounted element.
   */
  mount(e) {
    const n = typeof e == "string" ? document.querySelector(e) : e;
    if (n && n.hasAttribute("data-v-app"))
      return console.warn("A component is already mounted on this element: " + e), null;
    const r = async (s, c) => {
      const u = vg(c), f = this.listeners.filter((h) => h.event === s);
      return (await Promise.all(f.map((h) => h.callback(u)))).some((h) => h === !0);
    };
    return this.app.provide("locale", this.getLocale()), this.app.provide("options", this.getOptions()), this.app.provide("emit", r), this.app.mount(e).$el;
  }
  /**
   * Unmounts the Vue component from the HTML element.
   */
  unmount() {
    return this.app.unmount();
  }
}
function vg(t) {
  return typeof t != "object" ? t : JSON.parse(JSON.stringify(t));
}
class Jg extends vf {
  /**
   * Constructs a new CodeButton with specific options.
   * @param options - Partial element options.
   */
  constructor(e) {
    super(e, jl(Og));
  }
}
class Fg extends vf {
  /**
   * Constructs a new CodeCard with specific options.
   * @param options - Partial element options.
   */
  constructor(e) {
    super(e, jl(Sf));
  }
}
const Ag = {
  /**
   * Creates a new element based on the specified type.
   * @param type - The type of the element to create.
   * @param options - The options for the element.
   * @returns An object containing the newly created element.
   */
  create: (t, e) => {
    switch (t) {
      case "button":
        return { button: new Jg(e) };
      case "card":
        return { card: new Fg(e) };
      default:
        throw kg(t);
    }
  }
};
function Jf() {
  return [
    "iPhone Simulator",
    "iPhone"
  ].includes(navigator.platform);
}
function Ug() {
  return Jf() || [
    "iPad Simulator",
    "iPod Simulator",
    "iPad",
    "iPod"
  ].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
function $g() {
  return Ug() || /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function Lg() {
  return /Android/i.test(navigator.userAgent);
}
function Cg() {
  return Jf() || Lg();
}
const Dg = {
  codeSdk: "https://sdk.getcode.com/v1/elements"
};
Rh(Dg);
const Mg = { elements: Ag };
export {
  Lg as Android,
  Pg as ErrInvalidParameter,
  Kg as ErrRequiredParameter,
  kg as ErrUnknownElementType,
  $g as Safari,
  Mg as default,
  Ag as elements,
  Du as getURLParam,
  Ug as iOS,
  Jf as iPhone,
  Cg as isMobileDevice,
  Ca as isValidURL,
  wg as makeFQDN,
  yg as replaceURLVariables
};
