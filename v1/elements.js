function Si(t, e) {
  const n = /* @__PURE__ */ Object.create(null), r = t.split(",");
  for (let i = 0; i < r.length; i++)
    n[r[i]] = !0;
  return e ? (i) => !!n[i.toLowerCase()] : (i) => !!n[i];
}
const xe = Object.freeze({}), Zi = Object.freeze([]), et = () => {
}, qc = () => !1, If = /^on[^a-z]/, go = (t) => If.test(t), Ho = (t) => t.startsWith("onUpdate:"), ke = Object.assign, uu = (t, e) => {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}, Of = Object.prototype.hasOwnProperty, ce = (t, e) => Of.call(t, e), Q = Array.isArray, Gi = (t) => na(t) === "[object Map]", kf = (t) => na(t) === "[object Set]", te = (t) => typeof t == "function", Ue = (t) => typeof t == "string", cu = (t) => typeof t == "symbol", Ie = (t) => t !== null && typeof t == "object", lu = (t) => Ie(t) && te(t.then) && te(t.catch), Sf = Object.prototype.toString, na = (t) => Sf.call(t), fu = (t) => na(t).slice(8, -1), Jf = (t) => na(t) === "[object Object]", du = (t) => Ue(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, Uo = /* @__PURE__ */ Si(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), vf = /* @__PURE__ */ Si(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), ra = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (n) => e[n] || (e[n] = t(n));
}, Ff = /-(\w)/g, ts = ra((t) => t.replace(Ff, (e, n) => n ? n.toUpperCase() : "")), Af = /\B([A-Z])/g, Bi = ra(
  (t) => t.replace(Af, "-$1").toLowerCase()
), ia = ra(
  (t) => t.charAt(0).toUpperCase() + t.slice(1)
), Ai = ra(
  (t) => t ? `on${ia(t)}` : ""
), Es = (t, e) => !Object.is(t, e), ss = (t, e) => {
  for (let n = 0; n < t.length; n++)
    t[n](e);
}, jo = (t, e, n) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Uf = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
};
let Ku;
const Ro = () => Ku || (Ku = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof {} < "u" ? {} : {});
function Ji(t) {
  if (Q(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const r = t[n], i = Ue(r) ? _f(r) : Ji(r);
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
const Lf = /;(?![^(]*\))/g, Cf = /:([^]+)/, Df = /\/\*[^]*?\*\//g;
function _f(t) {
  const e = {};
  return t.replace(Df, "").split(Lf).forEach((n) => {
    if (n) {
      const r = n.split(Cf);
      r.length > 1 && (e[r[0].trim()] = r[1].trim());
    }
  }), e;
}
function mu(t) {
  let e = "";
  if (Ue(t))
    e = t;
  else if (Q(t))
    for (let n = 0; n < t.length; n++) {
      const r = mu(t[n]);
      r && (e += r + " ");
    }
  else if (Ie(t))
    for (const n in t)
      t[n] && (e += n + " ");
  return e.trim();
}
const qf = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Kf = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Pf = /* @__PURE__ */ Si(qf), $f = /* @__PURE__ */ Si(Kf), Mf = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Vf = /* @__PURE__ */ Si(Mf);
function Kc(t) {
  return !!t || t === "";
}
function La(t, ...e) {
  console.warn(`[Vue warn] ${t}`, ...e);
}
let mt;
class Hf {
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
      La("cannot run an inactive effect scope.");
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
function jf(t, e = mt) {
  e && e.active && e.effects.push(t);
}
function Rf() {
  return mt;
}
const hu = (t) => {
  const e = new Set(t);
  return e.w = 0, e.n = 0, e;
}, Pc = (t) => (t.w & Ii) > 0, $c = (t) => (t.n & Ii) > 0, zf = ({ deps: t }) => {
  if (t.length)
    for (let e = 0; e < t.length; e++)
      t[e].w |= Ii;
}, Wf = (t) => {
  const { deps: e } = t;
  if (e.length) {
    let n = 0;
    for (let r = 0; r < e.length; r++) {
      const i = e[r];
      Pc(i) && !$c(i) ? i.delete(t) : e[n++] = i, i.w &= ~Ii, i.n &= ~Ii;
    }
    e.length = n;
  }
}, Ca = /* @__PURE__ */ new WeakMap();
let ls = 0, Ii = 1;
const Da = 30;
let Ye;
const Di = Symbol("iterate"), _a = Symbol("Map key iterate");
class pu {
  constructor(e, n = null, r) {
    this.fn = e, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, jf(this, r);
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
      return this.parent = Ye, Ye = this, bi = !0, Ii = 1 << ++ls, ls <= Da ? zf(this) : Pu(this), this.fn();
    } finally {
      ls <= Da && Wf(this), Ii = 1 << --ls, Ye = this.parent, bi = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    Ye === this ? this.deferStop = !0 : this.active && (Pu(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Pu(t) {
  const { deps: e } = t;
  if (e.length) {
    for (let n = 0; n < e.length; n++)
      e[n].delete(t);
    e.length = 0;
  }
}
let bi = !0;
const Mc = [];
function Mi() {
  Mc.push(bi), bi = !1;
}
function Vi() {
  const t = Mc.pop();
  bi = t === void 0 ? !0 : t;
}
function Re(t, e, n) {
  if (bi && Ye) {
    let r = Ca.get(t);
    r || Ca.set(t, r = /* @__PURE__ */ new Map());
    let i = r.get(n);
    i || r.set(n, i = hu()), Vc(i, { effect: Ye, target: t, type: e, key: n });
  }
}
function Vc(t, e) {
  let n = !1;
  ls <= Da ? $c(t) || (t.n |= Ii, n = !Pc(t)) : n = !t.has(Ye), n && (t.add(Ye), Ye.deps.push(t), Ye.onTrack && Ye.onTrack(
    ke(
      {
        effect: Ye
      },
      e
    )
  ));
}
function $t(t, e, n, r, i, s) {
  const u = Ca.get(t);
  if (!u)
    return;
  let c = [];
  if (e === "clear")
    c = [...u.values()];
  else if (n === "length" && Q(t)) {
    const m = Number(r);
    u.forEach((h, g) => {
      (g === "length" || g >= m) && c.push(h);
    });
  } else
    switch (n !== void 0 && c.push(u.get(n)), e) {
      case "add":
        Q(t) ? du(n) && c.push(u.get("length")) : (c.push(u.get(Di)), Gi(t) && c.push(u.get(_a)));
        break;
      case "delete":
        Q(t) || (c.push(u.get(Di)), Gi(t) && c.push(u.get(_a)));
        break;
      case "set":
        Gi(t) && c.push(u.get(Di));
        break;
    }
  const f = { target: t, type: e, key: n, newValue: r, oldValue: i, oldTarget: s };
  if (c.length === 1)
    c[0] && qa(c[0], f);
  else {
    const m = [];
    for (const h of c)
      h && m.push(...h);
    qa(hu(m), f);
  }
}
function qa(t, e) {
  const n = Q(t) ? t : [...t];
  for (const r of n)
    r.computed && $u(r, e);
  for (const r of n)
    r.computed || $u(r, e);
}
function $u(t, e) {
  (t !== Ye || t.allowRecurse) && (t.onTrigger && t.onTrigger(ke({ effect: t }, e)), t.scheduler ? t.scheduler() : t.run());
}
const Yf = /* @__PURE__ */ Si("__proto__,__v_isRef,__isVue"), Hc = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(cu)
), Xf = /* @__PURE__ */ sa(), Zf = /* @__PURE__ */ sa(!1, !0), Gf = /* @__PURE__ */ sa(!0), Qf = /* @__PURE__ */ sa(!0, !0), Mu = /* @__PURE__ */ ed();
function ed() {
  const t = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
    t[e] = function(...n) {
      const r = ie(this);
      for (let s = 0, u = this.length; s < u; s++)
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
function td(t) {
  const e = ie(this);
  return Re(e, "has", t), e.hasOwnProperty(t);
}
function sa(t = !1, e = !1) {
  return function(r, i, s) {
    if (i === "__v_isReactive")
      return !t;
    if (i === "__v_isReadonly")
      return t;
    if (i === "__v_isShallow")
      return e;
    if (i === "__v_raw" && s === (t ? e ? Gc : Zc : e ? Xc : Yc).get(r))
      return r;
    const u = Q(r);
    if (!t) {
      if (u && ce(Mu, i))
        return Reflect.get(Mu, i, s);
      if (i === "hasOwnProperty")
        return td;
    }
    const c = Reflect.get(r, i, s);
    return (cu(i) ? Hc.has(i) : Yf(i)) || (t || Re(r, "get", i), e) ? c : qe(c) ? u && du(i) ? c : c.value : Ie(c) ? t ? Qc(c) : ua(c) : c;
  };
}
const nd = /* @__PURE__ */ jc(), rd = /* @__PURE__ */ jc(!0);
function jc(t = !1) {
  return function(n, r, i, s) {
    let u = n[r];
    if (Oi(u) && qe(u) && !qe(i))
      return !1;
    if (!t && (!zo(i) && !Oi(i) && (u = ie(u), i = ie(i)), !Q(n) && qe(u) && !qe(i)))
      return u.value = i, !0;
    const c = Q(n) && du(r) ? Number(r) < n.length : ce(n, r), f = Reflect.set(n, r, i, s);
    return n === ie(s) && (c ? Es(i, u) && $t(n, "set", r, i, u) : $t(n, "add", r, i)), f;
  };
}
function id(t, e) {
  const n = ce(t, e), r = t[e], i = Reflect.deleteProperty(t, e);
  return i && n && $t(t, "delete", e, void 0, r), i;
}
function sd(t, e) {
  const n = Reflect.has(t, e);
  return (!cu(e) || !Hc.has(e)) && Re(t, "has", e), n;
}
function od(t) {
  return Re(t, "iterate", Q(t) ? "length" : Di), Reflect.ownKeys(t);
}
const Rc = {
  get: Xf,
  set: nd,
  deleteProperty: id,
  has: sd,
  ownKeys: od
}, zc = {
  get: Gf,
  set(t, e) {
    return La(
      `Set operation on key "${String(e)}" failed: target is readonly.`,
      t
    ), !0;
  },
  deleteProperty(t, e) {
    return La(
      `Delete operation on key "${String(e)}" failed: target is readonly.`,
      t
    ), !0;
  }
}, ad = /* @__PURE__ */ ke(
  {},
  Rc,
  {
    get: Zf,
    set: rd
  }
), ud = /* @__PURE__ */ ke(
  {},
  zc,
  {
    get: Qf
  }
), gu = (t) => t, oa = (t) => Reflect.getPrototypeOf(t);
function xo(t, e, n = !1, r = !1) {
  t = t.__v_raw;
  const i = ie(t), s = ie(e);
  n || (e !== s && Re(i, "get", e), Re(i, "get", s));
  const { has: u } = oa(i), c = r ? gu : n ? wu : bs;
  if (u.call(i, e))
    return c(t.get(e));
  if (u.call(i, s))
    return c(t.get(s));
  t !== i && t.get(e);
}
function Bo(t, e = !1) {
  const n = this.__v_raw, r = ie(n), i = ie(t);
  return e || (t !== i && Re(r, "has", t), Re(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
}
function Io(t, e = !1) {
  return t = t.__v_raw, !e && Re(ie(t), "iterate", Di), Reflect.get(t, "size", t);
}
function Vu(t) {
  t = ie(t);
  const e = ie(this);
  return oa(e).has.call(e, t) || (e.add(t), $t(e, "add", t, t)), this;
}
function Hu(t, e) {
  e = ie(e);
  const n = ie(this), { has: r, get: i } = oa(n);
  let s = r.call(n, t);
  s ? Wc(n, r, t) : (t = ie(t), s = r.call(n, t));
  const u = i.call(n, t);
  return n.set(t, e), s ? Es(e, u) && $t(n, "set", t, e, u) : $t(n, "add", t, e), this;
}
function ju(t) {
  const e = ie(this), { has: n, get: r } = oa(e);
  let i = n.call(e, t);
  i ? Wc(e, n, t) : (t = ie(t), i = n.call(e, t));
  const s = r ? r.call(e, t) : void 0, u = e.delete(t);
  return i && $t(e, "delete", t, void 0, s), u;
}
function Ru() {
  const t = ie(this), e = t.size !== 0, n = Gi(t) ? new Map(t) : new Set(t), r = t.clear();
  return e && $t(t, "clear", void 0, void 0, n), r;
}
function Oo(t, e) {
  return function(r, i) {
    const s = this, u = s.__v_raw, c = ie(u), f = e ? gu : t ? wu : bs;
    return !t && Re(c, "iterate", Di), u.forEach((m, h) => r.call(i, f(m), f(h), s));
  };
}
function ko(t, e, n) {
  return function(...r) {
    const i = this.__v_raw, s = ie(i), u = Gi(s), c = t === "entries" || t === Symbol.iterator && u, f = t === "keys" && u, m = i[t](...r), h = n ? gu : e ? wu : bs;
    return !e && Re(
      s,
      "iterate",
      f ? _a : Di
    ), {
      // iterator protocol
      next() {
        const { value: g, done: y } = m.next();
        return y ? { value: g, done: y } : {
          value: c ? [h(g[0]), h(g[1])] : h(g),
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
        `${ia(t)} operation ${n}failed: target is readonly.`,
        ie(this)
      );
    }
    return t === "delete" ? !1 : this;
  };
}
function cd() {
  const t = {
    get(s) {
      return xo(this, s);
    },
    get size() {
      return Io(this);
    },
    has: Bo,
    add: Vu,
    set: Hu,
    delete: ju,
    clear: Ru,
    forEach: Oo(!1, !1)
  }, e = {
    get(s) {
      return xo(this, s, !1, !0);
    },
    get size() {
      return Io(this);
    },
    has: Bo,
    add: Vu,
    set: Hu,
    delete: ju,
    clear: Ru,
    forEach: Oo(!1, !0)
  }, n = {
    get(s) {
      return xo(this, s, !0);
    },
    get size() {
      return Io(this, !0);
    },
    has(s) {
      return Bo.call(this, s, !0);
    },
    add: ai("add"),
    set: ai("set"),
    delete: ai("delete"),
    clear: ai("clear"),
    forEach: Oo(!0, !1)
  }, r = {
    get(s) {
      return xo(this, s, !0, !0);
    },
    get size() {
      return Io(this, !0);
    },
    has(s) {
      return Bo.call(this, s, !0);
    },
    add: ai("add"),
    set: ai("set"),
    delete: ai("delete"),
    clear: ai("clear"),
    forEach: Oo(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    t[s] = ko(
      s,
      !1,
      !1
    ), n[s] = ko(
      s,
      !0,
      !1
    ), e[s] = ko(
      s,
      !1,
      !0
    ), r[s] = ko(
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
  ld,
  fd,
  dd,
  md
] = /* @__PURE__ */ cd();
function aa(t, e) {
  const n = e ? t ? md : dd : t ? fd : ld;
  return (r, i, s) => i === "__v_isReactive" ? !t : i === "__v_isReadonly" ? t : i === "__v_raw" ? r : Reflect.get(
    ce(n, i) && i in r ? n : r,
    i,
    s
  );
}
const hd = {
  get: /* @__PURE__ */ aa(!1, !1)
}, pd = {
  get: /* @__PURE__ */ aa(!1, !0)
}, gd = {
  get: /* @__PURE__ */ aa(!0, !1)
}, wd = {
  get: /* @__PURE__ */ aa(!0, !0)
};
function Wc(t, e, n) {
  const r = ie(n);
  if (r !== n && e.call(t, r)) {
    const i = fu(t);
    console.warn(
      `Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Yc = /* @__PURE__ */ new WeakMap(), Xc = /* @__PURE__ */ new WeakMap(), Zc = /* @__PURE__ */ new WeakMap(), Gc = /* @__PURE__ */ new WeakMap();
function yd(t) {
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
function Td(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : yd(fu(t));
}
function ua(t) {
  return Oi(t) ? t : ca(
    t,
    !1,
    Rc,
    hd,
    Yc
  );
}
function Ed(t) {
  return ca(
    t,
    !1,
    ad,
    pd,
    Xc
  );
}
function Qc(t) {
  return ca(
    t,
    !0,
    zc,
    gd,
    Zc
  );
}
function fs(t) {
  return ca(
    t,
    !0,
    ud,
    wd,
    Gc
  );
}
function ca(t, e, n, r, i) {
  if (!Ie(t))
    return console.warn(`value cannot be made reactive: ${String(t)}`), t;
  if (t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const s = i.get(t);
  if (s)
    return s;
  const u = Td(t);
  if (u === 0)
    return t;
  const c = new Proxy(
    t,
    u === 2 ? r : n
  );
  return i.set(t, c), c;
}
function _i(t) {
  return Oi(t) ? _i(t.__v_raw) : !!(t && t.__v_isReactive);
}
function Oi(t) {
  return !!(t && t.__v_isReadonly);
}
function zo(t) {
  return !!(t && t.__v_isShallow);
}
function Ka(t) {
  return _i(t) || Oi(t);
}
function ie(t) {
  const e = t && t.__v_raw;
  return e ? ie(e) : t;
}
function el(t) {
  return jo(t, "__v_skip", !0), t;
}
const bs = (t) => Ie(t) ? ua(t) : t, wu = (t) => Ie(t) ? Qc(t) : t;
function tl(t) {
  bi && Ye && (t = ie(t), Vc(t.dep || (t.dep = hu()), {
    target: t,
    type: "get",
    key: "value"
  }));
}
function nl(t, e) {
  t = ie(t);
  const n = t.dep;
  n && qa(n, {
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
  return bd(t, !1);
}
function bd(t, e) {
  return qe(t) ? t : new Nd(t, e);
}
class Nd {
  constructor(e, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? e : ie(e), this._value = n ? e : bs(e);
  }
  get value() {
    return tl(this), this._value;
  }
  set value(e) {
    const n = this.__v_isShallow || zo(e) || Oi(e);
    e = n ? e : ie(e), Es(e, this._rawValue) && (this._rawValue = e, this._value = n ? e : bs(e), nl(this, e));
  }
}
function hi(t) {
  return qe(t) ? t.value : t;
}
const xd = {
  get: (t, e, n) => hi(Reflect.get(t, e, n)),
  set: (t, e, n, r) => {
    const i = t[e];
    return qe(i) && !qe(n) ? (i.value = n, !0) : Reflect.set(t, e, n, r);
  }
};
function rl(t) {
  return _i(t) ? t : new Proxy(t, xd);
}
class Bd {
  constructor(e, n, r, i) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new pu(e, () => {
      this._dirty || (this._dirty = !0, nl(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !i, this.__v_isReadonly = r;
  }
  get value() {
    const e = ie(this);
    return tl(e), (e._dirty || !e._cacheable) && (e._dirty = !1, e._value = e.effect.run()), e._value;
  }
  set value(e) {
    this._setter(e);
  }
}
function Id(t, e, n = !1) {
  let r, i;
  const s = te(t);
  s ? (r = t, i = () => {
    console.warn("Write operation failed: computed value is readonly");
  }) : (r = t.get, i = t.set);
  const u = new Bd(r, i, s || !i, n);
  return e && !n && (u.effect.onTrack = e.onTrack, u.effect.onTrigger = e.onTrigger), u;
}
const qi = [];
function Lo(t) {
  qi.push(t);
}
function Co() {
  qi.pop();
}
function q(t, ...e) {
  Mi();
  const n = qi.length ? qi[qi.length - 1].component : null, r = n && n.appContext.config.warnHandler, i = Od();
  if (r)
    ri(
      r,
      n,
      11,
      [
        t + e.join(""),
        n && n.proxy,
        i.map(
          ({ vnode: s }) => `at <${ga(n, s.type)}>`
        ).join(`
`),
        i
      ]
    );
  else {
    const s = [`[Vue warn]: ${t}`, ...e];
    i.length && s.push(`
`, ...kd(i)), console.warn(...s);
  }
  Vi();
}
function Od() {
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
function kd(t) {
  const e = [];
  return t.forEach((n, r) => {
    e.push(...r === 0 ? [] : [`
`], ...Sd(n));
  }), e;
}
function Sd({ vnode: t, recurseCount: e }) {
  const n = e > 0 ? `... (${e} recursive calls)` : "", r = t.component ? t.component.parent == null : !1, i = ` at <${ga(
    t.component,
    t.type,
    r
  )}`, s = ">" + n;
  return t.props ? [i, ...Jd(t.props), s] : [i + s];
}
function Jd(t) {
  const e = [], n = Object.keys(t);
  return n.slice(0, 3).forEach((r) => {
    e.push(...il(r, t[r]));
  }), n.length > 3 && e.push(" ..."), e;
}
function il(t, e, n) {
  return Ue(e) ? (e = JSON.stringify(e), n ? e : [`${t}=${e}`]) : typeof e == "number" || typeof e == "boolean" || e == null ? n ? e : [`${t}=${e}`] : qe(e) ? (e = il(t, ie(e.value), !0), n ? e : [`${t}=Ref<`, e, ">"]) : te(e) ? [`${t}=fn${e.name ? `<${e.name}>` : ""}`] : (e = ie(e), n ? e : [`${t}=`, e]);
}
const yu = {
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
    la(s, e, n);
  }
  return i;
}
function Et(t, e, n, r) {
  if (te(t)) {
    const s = ri(t, e, n, r);
    return s && lu(s) && s.catch((u) => {
      la(u, e, n);
    }), s;
  }
  const i = [];
  for (let s = 0; s < t.length; s++)
    i.push(Et(t[s], e, n, r));
  return i;
}
function la(t, e, n, r = !0) {
  const i = e ? e.vnode : null;
  if (e) {
    let s = e.parent;
    const u = e.proxy, c = yu[n];
    for (; s; ) {
      const m = s.ec;
      if (m) {
        for (let h = 0; h < m.length; h++)
          if (m[h](t, u, c) === !1)
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
        [t, u, c]
      );
      return;
    }
  }
  vd(t, n, i, r);
}
function vd(t, e, n, r = !0) {
  {
    const i = yu[e];
    if (n && Lo(n), q(`Unhandled error${i ? ` during execution of ${i}` : ""}`), n && Co(), r)
      throw t;
    console.error(t);
  }
}
let Ns = !1, Pa = !1;
const je = [];
let Ot = 0;
const Qi = [];
let It = null, pi = 0;
const sl = /* @__PURE__ */ Promise.resolve();
let Tu = null;
const Fd = 100;
function $a(t) {
  const e = Tu || sl;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function Ad(t) {
  let e = Ot + 1, n = je.length;
  for (; e < n; ) {
    const r = e + n >>> 1;
    xs(je[r]) < t ? e = r + 1 : n = r;
  }
  return e;
}
function fa(t) {
  (!je.length || !je.includes(
    t,
    Ns && t.allowRecurse ? Ot + 1 : Ot
  )) && (t.id == null ? je.push(t) : je.splice(Ad(t.id), 0, t), ol());
}
function ol() {
  !Ns && !Pa && (Pa = !0, Tu = sl.then(cl));
}
function Ud(t) {
  const e = je.indexOf(t);
  e > Ot && je.splice(e, 1);
}
function al(t) {
  Q(t) ? Qi.push(...t) : (!It || !It.includes(
    t,
    t.allowRecurse ? pi + 1 : pi
  )) && Qi.push(t), ol();
}
function zu(t, e = Ns ? Ot + 1 : 0) {
  for (t = t || /* @__PURE__ */ new Map(); e < je.length; e++) {
    const n = je[e];
    if (n && n.pre) {
      if (Eu(t, n))
        continue;
      je.splice(e, 1), e--, n();
    }
  }
}
function ul(t) {
  if (Qi.length) {
    const e = [...new Set(Qi)];
    if (Qi.length = 0, It) {
      It.push(...e);
      return;
    }
    for (It = e, t = t || /* @__PURE__ */ new Map(), It.sort((n, r) => xs(n) - xs(r)), pi = 0; pi < It.length; pi++)
      Eu(t, It[pi]) || It[pi]();
    It = null, pi = 0;
  }
}
const xs = (t) => t.id == null ? 1 / 0 : t.id, Ld = (t, e) => {
  const n = xs(t) - xs(e);
  if (n === 0) {
    if (t.pre && !e.pre)
      return -1;
    if (e.pre && !t.pre)
      return 1;
  }
  return n;
};
function cl(t) {
  Pa = !1, Ns = !0, t = t || /* @__PURE__ */ new Map(), je.sort(Ld);
  const e = (n) => Eu(t, n);
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
    Ot = 0, je.length = 0, ul(t), Ns = !1, Tu = null, (je.length || Qi.length) && cl(t);
  }
}
function Eu(t, e) {
  if (!t.has(e))
    t.set(e, 1);
  else {
    const n = t.get(e);
    if (n > Fd) {
      const r = e.ownerInstance, i = r && ql(r.type);
      return q(
        `Maximum recursive updates exceeded${i ? ` in component <${i}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`
      ), !0;
    } else
      t.set(e, n + 1);
  }
}
let Ni = !1;
const Wi = /* @__PURE__ */ new Set();
Ro().__VUE_HMR_RUNTIME__ = {
  createRecord: Ea(ll),
  rerender: Ea(_d),
  reload: Ea(qd)
};
const $i = /* @__PURE__ */ new Map();
function Cd(t) {
  const e = t.type.__hmrId;
  let n = $i.get(e);
  n || (ll(e, t.type), n = $i.get(e)), n.instances.add(t);
}
function Dd(t) {
  $i.get(t.type.__hmrId).instances.delete(t);
}
function ll(t, e) {
  return $i.has(t) ? !1 : ($i.set(t, {
    initialDef: gs(e),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function gs(t) {
  return Kl(t) ? t.__vccOpts : t;
}
function _d(t, e) {
  const n = $i.get(t);
  n && (n.initialDef.render = e, [...n.instances].forEach((r) => {
    e && (r.render = e, gs(r.type).render = e), r.renderCache = [], Ni = !0, r.update(), Ni = !1;
  }));
}
function qd(t, e) {
  const n = $i.get(t);
  if (!n)
    return;
  e = gs(e), Wu(n.initialDef, e);
  const r = [...n.instances];
  for (const i of r) {
    const s = gs(i.type);
    Wi.has(s) || (s !== n.initialDef && Wu(s, e), Wi.add(s)), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (Wi.add(s), i.ceReload(e.styles), Wi.delete(s)) : i.parent ? fa(i.parent.update) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  al(() => {
    for (const i of r)
      Wi.delete(
        gs(i.type)
      );
  });
}
function Wu(t, e) {
  ke(t, e);
  for (const n in t)
    n !== "__file" && !(n in e) && delete t[n];
}
function Ea(t) {
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
let kt, ds = [], Ma = !1;
function wo(t, ...e) {
  kt ? kt.emit(t, ...e) : Ma || ds.push({ event: t, args: e });
}
function fl(t, e) {
  var n, r;
  kt = t, kt ? (kt.enabled = !0, ds.forEach(({ event: i, args: s }) => kt.emit(i, ...s)), ds = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((r = (n = window.navigator) == null ? void 0 : n.userAgent) != null && r.includes("jsdom")) ? ((e.__VUE_DEVTOOLS_HOOK_REPLAY__ = e.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    fl(s, e);
  }), setTimeout(() => {
    kt || (e.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Ma = !0, ds = []);
  }, 3e3)) : (Ma = !0, ds = []);
}
function Kd(t, e) {
  wo("app:init", t, e, {
    Fragment: ht,
    Text: yo,
    Comment: it,
    Static: _o
  });
}
function Pd(t) {
  wo("app:unmount", t);
}
const $d = /* @__PURE__ */ bu(
  "component:added"
  /* COMPONENT_ADDED */
), dl = /* @__PURE__ */ bu(
  "component:updated"
  /* COMPONENT_UPDATED */
), Md = /* @__PURE__ */ bu(
  "component:removed"
  /* COMPONENT_REMOVED */
), Vd = (t) => {
  kt && typeof kt.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !kt.cleanupBuffer(t) && Md(t);
};
function bu(t) {
  return (e) => {
    wo(
      t,
      e.appContext.app,
      e.uid,
      e.parent ? e.parent.uid : void 0,
      e
    );
  };
}
const Hd = /* @__PURE__ */ ml(
  "perf:start"
  /* PERFORMANCE_START */
), jd = /* @__PURE__ */ ml(
  "perf:end"
  /* PERFORMANCE_END */
);
function ml(t) {
  return (e, n, r) => {
    wo(t, e.appContext.app, e.uid, e, n, r);
  };
}
function Rd(t, e, n) {
  wo(
    "component:emit",
    t.appContext.app,
    t,
    e,
    n
  );
}
function zd(t, e, ...n) {
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
  const s = e.startsWith("update:"), u = s && e.slice(7);
  if (u && u in r) {
    const h = `${u === "modelValue" ? "model" : u}Modifiers`, { number: g, trim: y } = r[h] || xe;
    y && (i = n.map((b) => Ue(b) ? b.trim() : b)), g && (i = n.map(Uf));
  }
  Rd(t, e, i);
  {
    const h = e.toLowerCase();
    h !== e && r[Ai(h)] && q(
      `Event "${h}" is emitted in component ${ga(
        t,
        t.type
      )} but the handler is registered for "${e}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Bi(e)}" instead of "${e}".`
    );
  }
  let c, f = r[c = Ai(e)] || // also try camelCase event handler (#2249)
  r[c = Ai(ts(e))];
  !f && s && (f = r[c = Ai(Bi(e))]), f && Et(
    f,
    t,
    6,
    i
  );
  const m = r[c + "Once"];
  if (m) {
    if (!t.emitted)
      t.emitted = {};
    else if (t.emitted[c])
      return;
    t.emitted[c] = !0, Et(
      m,
      t,
      6,
      i
    );
  }
}
function hl(t, e, n = !1) {
  const r = e.emitsCache, i = r.get(t);
  if (i !== void 0)
    return i;
  const s = t.emits;
  let u = {}, c = !1;
  if (!te(t)) {
    const f = (m) => {
      const h = hl(m, e, !0);
      h && (c = !0, ke(u, h));
    };
    !n && e.mixins.length && e.mixins.forEach(f), t.extends && f(t.extends), t.mixins && t.mixins.forEach(f);
  }
  return !s && !c ? (Ie(t) && r.set(t, null), null) : (Q(s) ? s.forEach((f) => u[f] = null) : ke(u, s), Ie(t) && r.set(t, u), u);
}
function da(t, e) {
  return !t || !go(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), ce(t, e[0].toLowerCase() + e.slice(1)) || ce(t, Bi(e)) || ce(t, e));
}
let ut = null, pl = null;
function Wo(t) {
  const e = ut;
  return ut = t, pl = t && t.type.__scopeId || null, e;
}
function Wd(t, e = ut, n) {
  if (!e || t._n)
    return t;
  const r = (...i) => {
    r._d && ac(-1);
    const s = Wo(e);
    let u;
    try {
      u = t(...i);
    } finally {
      Wo(s), r._d && ac(1);
    }
    return dl(e), u;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
let Va = !1;
function Yo() {
  Va = !0;
}
function ba(t) {
  const {
    type: e,
    vnode: n,
    proxy: r,
    withProxy: i,
    props: s,
    propsOptions: [u],
    slots: c,
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
  const ae = Wo(t);
  Va = !1;
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
      f === s && Yo(), $ = pt(
        F.length > 1 ? F(
          s,
          {
            get attrs() {
              return Yo(), f;
            },
            slots: c,
            emit: m
          }
        ) : F(
          s,
          null
          /* we know it doesn't need it */
        )
      ), R = e.props ? f : Xd(f);
    }
  } catch (F) {
    ws.length = 0, la(F, t, 1), $ = Pt(it);
  }
  let L = $, Z;
  if ($.patchFlag > 0 && $.patchFlag & 2048 && ([L, Z] = Yd($)), R && U !== !1) {
    const F = Object.keys(R), { shapeFlag: X } = L;
    if (F.length) {
      if (X & 7)
        u && F.some(Ho) && (R = Zd(
          R,
          u
        )), L = ki(L, R);
      else if (!Va && L.type !== it) {
        const ne = Object.keys(f), ue = [], we = [];
        for (let Se = 0, Oe = ne.length; Se < Oe; Se++) {
          const Le = ne[Se];
          go(Le) ? Ho(Le) || ue.push(Le[2].toLowerCase() + Le.slice(3)) : we.push(Le);
        }
        we.length && q(
          `Extraneous non-props attributes (${we.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), ue.length && q(
          `Extraneous non-emits event listeners (${ue.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (Yu(L) || q(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), L = ki(L), L.dirs = L.dirs ? L.dirs.concat(n.dirs) : n.dirs), n.transition && (Yu(L) || q(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), L.transition = n.transition), Z ? Z(L) : $ = L, Wo(ae), $;
}
const Yd = (t) => {
  const e = t.children, n = t.dynamicChildren, r = gl(e);
  if (!r)
    return [t, void 0];
  const i = e.indexOf(r), s = n ? n.indexOf(r) : -1, u = (c) => {
    e[i] = c, n && (s > -1 ? n[s] = c : c.patchFlag > 0 && (t.dynamicChildren = [...n, c]));
  };
  return [pt(r), u];
};
function gl(t) {
  let e;
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (ku(r)) {
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
const Xd = (t) => {
  let e;
  for (const n in t)
    (n === "class" || n === "style" || go(n)) && ((e || (e = {}))[n] = t[n]);
  return e;
}, Zd = (t, e) => {
  const n = {};
  for (const r in t)
    (!Ho(r) || !(r.slice(9) in e)) && (n[r] = t[r]);
  return n;
}, Yu = (t) => t.shapeFlag & 7 || t.type === it;
function Gd(t, e, n) {
  const { props: r, children: i, component: s } = t, { props: u, children: c, patchFlag: f } = e, m = s.emitsOptions;
  if ((i || c) && Ni || e.dirs || e.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return r ? Xu(r, u, m) : !!u;
    if (f & 8) {
      const h = e.dynamicProps;
      for (let g = 0; g < h.length; g++) {
        const y = h[g];
        if (u[y] !== r[y] && !da(m, y))
          return !0;
      }
    }
  } else
    return (i || c) && (!c || !c.$stable) ? !0 : r === u ? !1 : r ? u ? Xu(r, u, m) : !0 : !!u;
  return !1;
}
function Xu(t, e, n) {
  const r = Object.keys(e);
  if (r.length !== Object.keys(t).length)
    return !0;
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (e[s] !== t[s] && !da(n, s))
      return !0;
  }
  return !1;
}
function Qd({ vnode: t, parent: e }, n) {
  for (; e && e.subTree === t; )
    (t = e.vnode).el = n, e = e.parent;
}
const em = (t) => t.__isSuspense;
function tm(t, e) {
  e && e.pendingBranch ? Q(t) ? e.effects.push(...t) : e.effects.push(t) : al(t);
}
function wl(t, e) {
  return Nu(t, null, e);
}
const So = {};
function Na(t, e, n) {
  return te(e) || q(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Nu(t, e, n);
}
function Nu(t, e, { immediate: n, deep: r, flush: i, onTrack: s, onTrigger: u } = xe) {
  var c;
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
  }, m = Rf() === ((c = Me) == null ? void 0 : c.scope) ? Me : null;
  let h, g = !1, y = !1;
  if (qe(t) ? (h = () => t.value, g = zo(t)) : _i(t) ? (h = () => t, r = !0) : Q(t) ? (y = !0, g = t.some((F) => _i(F) || zo(F)), h = () => t.map((F) => {
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
      const F = mh();
      U = F.__watcherHandles || (F.__watcherHandles = []);
    } else
      return et;
  let $ = y ? new Array(t.length).fill(So) : So;
  const R = () => {
    if (L.active)
      if (e) {
        const F = L.run();
        (r || g || (y ? F.some(
          (X, ne) => Es(X, $[ne])
        ) : Es(F, $))) && (b && b(), Et(e, m, 3, [
          F,
          // pass undefined as the old value when it's changed for the first time
          $ === So ? void 0 : y && $[0] === So ? [] : $,
          S
        ]), $ = F);
      } else
        L.run();
  };
  R.allowRecurse = !!e;
  let ae;
  i === "sync" ? ae = R : i === "post" ? ae = () => Ze(R, m && m.suspense) : (R.pre = !0, m && (R.id = m.uid), ae = () => fa(R));
  const L = new pu(h, ae);
  L.onTrack = s, L.onTrigger = u, e ? n ? R() : $ = L.run() : i === "post" ? Ze(
    L.run.bind(L),
    m && m.suspense
  ) : L.run();
  const Z = () => {
    L.stop(), m && m.scope && uu(m.scope.effects, L);
  };
  return U && U.push(Z), Z;
}
function nm(t, e, n) {
  const r = this.proxy, i = Ue(t) ? t.includes(".") ? yl(r, t) : () => r[t] : t.bind(r, r);
  let s;
  te(e) ? s = e : (s = e.handler, n = e);
  const u = Me;
  ns(this);
  const c = Nu(i, s.bind(r), n);
  return u ? ns(u) : Pi(), c;
}
function yl(t, e) {
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
  else if (kf(t) || Gi(t))
    t.forEach((n) => {
      Xi(n, e);
    });
  else if (Jf(t))
    for (const n in t)
      Xi(t[n], e);
  return t;
}
function Tl(t) {
  vf(t) && q("Do not use built-in directive ids as custom directive id: " + t);
}
function vi(t, e, n, r) {
  const i = t.dirs, s = e && e.dirs;
  for (let u = 0; u < i.length; u++) {
    const c = i[u];
    s && (c.oldValue = s[u].value);
    let f = c.dir[r];
    f && (Mi(), Et(f, n, 8, [
      t.el,
      c,
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
const Do = (t) => !!t.type.__asyncLoader, xu = (t) => t.type.__isKeepAlive;
function rm(t, e) {
  El(t, "a", e);
}
function im(t, e) {
  El(t, "da", e);
}
function El(t, e, n = Me) {
  const r = t.__wdc || (t.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return t();
  });
  if (ma(e, r, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      xu(i.parent.vnode) && sm(r, e, n, i), i = i.parent;
  }
}
function sm(t, e, n, r) {
  const i = ma(
    e,
    t,
    r,
    !0
    /* prepend */
  );
  bl(() => {
    uu(r[e], i);
  }, n);
}
function ma(t, e, n = Me, r = !1) {
  if (n) {
    const i = n[t] || (n[t] = []), s = e.__weh || (e.__weh = (...u) => {
      if (n.isUnmounted)
        return;
      Mi(), ns(n);
      const c = Et(e, n, t, u);
      return Pi(), Vi(), c;
    });
    return r ? i.unshift(s) : i.push(s), s;
  } else {
    const i = Ai(yu[t].replace(/ hook$/, ""));
    q(
      `${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const oi = (t) => (e, n = Me) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Is || t === "sp") && ma(t, (...r) => e(...r), n)
), om = oi("bm"), ha = oi("m"), am = oi("bu"), um = oi("u"), cm = oi("bum"), bl = oi("um"), lm = oi("sp"), fm = oi(
  "rtg"
), dm = oi(
  "rtc"
);
function mm(t, e = Me) {
  ma("ec", t, e);
}
const hm = Symbol.for("v-ndc"), Ha = (t) => t ? Dl(t) ? vu(t) || t.proxy : Ha(t.parent) : null, Ki = (
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
    $parent: (t) => Ha(t.parent),
    $root: (t) => Ha(t.root),
    $emit: (t) => t.emit,
    $options: (t) => Iu(t),
    $forceUpdate: (t) => t.f || (t.f = () => fa(t.update)),
    $nextTick: (t) => t.n || (t.n = $a.bind(t.proxy)),
    $watch: (t) => nm.bind(t)
  })
), Bu = (t) => t === "_" || t === "$", xa = (t, e) => t !== xe && !t.__isScriptSetup && ce(t, e), Nl = {
  get({ _: t }, e) {
    const { ctx: n, setupState: r, data: i, props: s, accessCache: u, type: c, appContext: f } = t;
    if (e === "__isVue")
      return !0;
    let m;
    if (e[0] !== "$") {
      const b = u[e];
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
        if (xa(r, e))
          return u[e] = 1, r[e];
        if (i !== xe && ce(i, e))
          return u[e] = 2, i[e];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (m = t.propsOptions[0]) && ce(m, e)
        )
          return u[e] = 3, s[e];
        if (n !== xe && ce(n, e))
          return u[e] = 4, n[e];
        ja && (u[e] = 0);
      }
    }
    const h = Ki[e];
    let g, y;
    if (h)
      return e === "$attrs" ? (Re(t, "get", e), Yo()) : e === "$slots" && Re(t, "get", e), h(t);
    if (
      // css module (injected by vue-loader)
      (g = c.__cssModules) && (g = g[e])
    )
      return g;
    if (n !== xe && ce(n, e))
      return u[e] = 4, n[e];
    if (
      // {} properties
      y = f.config.globalProperties, ce(y, e)
    )
      return y[e];
    ut && (!Ue(e) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    e.indexOf("__v") !== 0) && (i !== xe && Bu(e[0]) && ce(i, e) ? q(
      `Property ${JSON.stringify(
        e
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : t === ut && q(
      `Property ${JSON.stringify(e)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: t }, e, n) {
    const { data: r, setupState: i, ctx: s } = t;
    return xa(i, e) ? (i[e] = n, !0) : i.__isScriptSetup && ce(i, e) ? (q(`Cannot mutate <script setup> binding "${e}" from Options API.`), !1) : r !== xe && ce(r, e) ? (r[e] = n, !0) : ce(t.props, e) ? (q(`Attempting to mutate prop "${e}". Props are readonly.`), !1) : e[0] === "$" && e.slice(1) in t ? (q(
      `Attempting to mutate public property "${e}". Properties starting with $ are reserved and readonly.`
    ), !1) : (e in t.appContext.config.globalProperties ? Object.defineProperty(s, e, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[e] = n, !0);
  },
  has({
    _: { data: t, setupState: e, accessCache: n, ctx: r, appContext: i, propsOptions: s }
  }, u) {
    let c;
    return !!n[u] || t !== xe && ce(t, u) || xa(e, u) || (c = s[0]) && ce(c, u) || ce(r, u) || ce(Ki, u) || ce(i.config.globalProperties, u);
  },
  defineProperty(t, e, n) {
    return n.get != null ? t._.accessCache[e] = 0 : ce(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n);
  }
};
Nl.ownKeys = (t) => (q(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(t));
function pm(t) {
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
function gm(t) {
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
function wm(t) {
  const { ctx: e, setupState: n } = t;
  Object.keys(ie(n)).forEach((r) => {
    if (!n.__isScriptSetup) {
      if (Bu(r[0])) {
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
function Zu(t) {
  return Q(t) ? t.reduce(
    (e, n) => (e[n] = null, e),
    {}
  ) : t;
}
function ym() {
  const t = /* @__PURE__ */ Object.create(null);
  return (e, n) => {
    t[n] ? q(`${e} property "${n}" is already defined in ${t[n]}.`) : t[n] = e;
  };
}
let ja = !0;
function Tm(t) {
  const e = Iu(t), n = t.proxy, r = t.ctx;
  ja = !1, e.beforeCreate && Gu(e.beforeCreate, t, "bc");
  const {
    // state
    data: i,
    computed: s,
    methods: u,
    watch: c,
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
    errorCaptured: ue,
    serverPrefetch: we,
    // public API
    expose: Se,
    inheritAttrs: Oe,
    // assets
    components: Le,
    directives: Xe,
    filters: Vt
  } = e, He = ym();
  {
    const [le] = t.propsOptions;
    if (le)
      for (const K in le)
        He("Props", K);
  }
  if (m && Em(m, r, He), u)
    for (const le in u) {
      const K = u[le];
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
    if (lu(le) && q(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !Ie(le))
      q("data() should return an object.");
    else {
      t.data = ua(le);
      for (const K in le)
        He("Data", K), Bu(K[0]) || Object.defineProperty(r, K, {
          configurable: !0,
          enumerable: !0,
          get: () => le[K],
          set: et
        });
    }
  }
  if (ja = !0, s)
    for (const le in s) {
      const K = s[le], _ = te(K) ? K.bind(n, n) : te(K.get) ? K.get.bind(n, n) : et;
      _ === et && q(`Computed property "${le}" has no getter.`);
      const W = !te(K) && te(K.set) ? K.set.bind(n) : () => {
        q(
          `Write operation failed: computed property "${le}" is readonly.`
        );
      }, j = fh({
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
  if (c)
    for (const le in c)
      xl(c[le], r, n, le);
  if (f) {
    const le = te(f) ? f.call(n) : f;
    Reflect.ownKeys(le).forEach((K) => {
      Om(K, le[K]);
    });
  }
  h && Gu(h, t, "c");
  function Pe(le, K) {
    Q(K) ? K.forEach((_) => le(_.bind(n))) : K && le(K.bind(n));
  }
  if (Pe(om, g), Pe(ha, y), Pe(am, b), Pe(um, S), Pe(rm, U), Pe(im, $), Pe(mm, ue), Pe(dm, X), Pe(fm, ne), Pe(cm, ae), Pe(bl, Z), Pe(lm, we), Q(Se))
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
function Em(t, e, n = et) {
  Q(t) && (t = Ra(t));
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
      set: (u) => s.value = u
    }) : e[r] = s, n("Inject", r);
  }
}
function Gu(t, e, n) {
  Et(
    Q(t) ? t.map((r) => r.bind(e.proxy)) : t.bind(e.proxy),
    e,
    n
  );
}
function xl(t, e, n, r) {
  const i = r.includes(".") ? yl(n, r) : () => n[r];
  if (Ue(t)) {
    const s = e[t];
    te(s) ? Na(i, s) : q(`Invalid watch handler specified by key "${t}"`, s);
  } else if (te(t))
    Na(i, t.bind(n));
  else if (Ie(t))
    if (Q(t))
      t.forEach((s) => xl(s, e, n, r));
    else {
      const s = te(t.handler) ? t.handler.bind(n) : e[t.handler];
      te(s) ? Na(i, s, t) : q(`Invalid watch handler specified by key "${t.handler}"`, s);
    }
  else
    q(`Invalid watch option: "${r}"`, t);
}
function Iu(t) {
  const e = t.type, { mixins: n, extends: r } = e, {
    mixins: i,
    optionsCache: s,
    config: { optionMergeStrategies: u }
  } = t.appContext, c = s.get(e);
  let f;
  return c ? f = c : !i.length && !n && !r ? f = e : (f = {}, i.length && i.forEach(
    (m) => Xo(f, m, u, !0)
  ), Xo(f, e, u)), Ie(e) && s.set(e, f), f;
}
function Xo(t, e, n, r = !1) {
  const { mixins: i, extends: s } = e;
  s && Xo(t, s, n, !0), i && i.forEach(
    (u) => Xo(t, u, n, !0)
  );
  for (const u in e)
    if (r && u === "expose")
      q(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const c = bm[u] || n && n[u];
      t[u] = c ? c(t[u], e[u]) : e[u];
    }
  return t;
}
const bm = {
  data: Qu,
  props: ec,
  emits: ec,
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
  watch: xm,
  // provide / inject
  provide: Qu,
  inject: Nm
};
function Qu(t, e) {
  return e ? t ? function() {
    return ke(
      te(t) ? t.call(this, this) : t,
      te(e) ? e.call(this, this) : e
    );
  } : e : t;
}
function Nm(t, e) {
  return ms(Ra(t), Ra(e));
}
function Ra(t) {
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
function ec(t, e) {
  return t ? Q(t) && Q(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : ke(
    /* @__PURE__ */ Object.create(null),
    Zu(t),
    Zu(e ?? {})
  ) : e;
}
function xm(t, e) {
  if (!t)
    return e;
  if (!e)
    return t;
  const n = ke(/* @__PURE__ */ Object.create(null), t);
  for (const r in e)
    n[r] = We(t[r], e[r]);
  return n;
}
function Bl() {
  return {
    app: null,
    config: {
      isNativeTag: qc,
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
let Bm = 0;
function Im(t, e) {
  return function(r, i = null) {
    te(r) || (r = ke({}, r)), i != null && !Ie(i) && (q("root props passed to app.mount() must be an object."), i = null);
    const s = Bl();
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
    const u = /* @__PURE__ */ new Set();
    let c = !1;
    const f = s.app = {
      _uid: Bm++,
      _component: r,
      _props: i,
      _container: null,
      _context: s,
      _instance: null,
      version: lc,
      get config() {
        return s.config;
      },
      set config(m) {
        q(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(m, ...h) {
        return u.has(m) ? q("Plugin has already been applied to target app.") : m && te(m.install) ? (u.add(m), m.install(f, ...h)) : te(m) ? (u.add(m), m(f, ...h)) : q(
          'A plugin must either be a function or an object with an "install" function.'
        ), f;
      },
      mixin(m) {
        return s.mixins.includes(m) ? q(
          "Mixin has already been applied to target app" + (m.name ? `: ${m.name}` : "")
        ) : s.mixins.push(m), f;
      },
      component(m, h) {
        return Za(m, s.config), h ? (s.components[m] && q(`Component "${m}" has already been registered in target app.`), s.components[m] = h, f) : s.components[m];
      },
      directive(m, h) {
        return Tl(m), h ? (s.directives[m] && q(`Directive "${m}" has already been registered in target app.`), s.directives[m] = h, f) : s.directives[m];
      },
      mount(m, h, g) {
        if (c)
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
          }, h && e ? e(y, m) : t(y, m, g), c = !0, f._container = m, m.__vue_app__ = f, f._instance = y.component, Kd(f, lc), vu(y.component) || y.component.proxy;
        }
      },
      unmount() {
        c ? (t(null, f._container), f._instance = null, Pd(f), delete f._container.__vue_app__) : q("Cannot unmount an app that is not mounted.");
      },
      provide(m, h) {
        return m in s.provides && q(
          `App already provides property with key "${String(m)}". It will be overwritten with the new value.`
        ), s.provides[m] = h, f;
      },
      runWithContext(m) {
        Zo = f;
        try {
          return m();
        } finally {
          Zo = null;
        }
      }
    };
    return f;
  };
}
let Zo = null;
function Om(t, e) {
  if (!Me)
    q("provide() can only be used inside setup().");
  else {
    let n = Me.provides;
    const r = Me.parent && Me.parent.provides;
    r === n && (n = Me.provides = Object.create(r)), n[t] = e;
  }
}
function bt(t, e, n = !1) {
  const r = Me || ut;
  if (r || Zo) {
    const i = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : Zo._context.provides;
    if (i && t in i)
      return i[t];
    if (arguments.length > 1)
      return n && te(e) ? e.call(r && r.proxy) : e;
    q(`injection "${String(t)}" not found.`);
  } else
    q("inject() can only be used inside setup() or functional components.");
}
function km(t, e, n, r = !1) {
  const i = {}, s = {};
  jo(s, pa, 1), t.propsDefaults = /* @__PURE__ */ Object.create(null), Il(t, e, i, s);
  for (const u in t.propsOptions[0])
    u in i || (i[u] = void 0);
  kl(e || {}, i, t), n ? t.props = r ? i : Ed(i) : t.type.props ? t.props = i : t.props = s, t.attrs = s;
}
function Sm(t) {
  for (; t; ) {
    if (t.type.__hmrId)
      return !0;
    t = t.parent;
  }
}
function Jm(t, e, n, r) {
  const {
    props: i,
    attrs: s,
    vnode: { patchFlag: u }
  } = t, c = ie(i), [f] = t.propsOptions;
  let m = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !Sm(t) && (r || u > 0) && !(u & 16)
  ) {
    if (u & 8) {
      const h = t.vnode.dynamicProps;
      for (let g = 0; g < h.length; g++) {
        let y = h[g];
        if (da(t.emitsOptions, y))
          continue;
        const b = e[y];
        if (f)
          if (ce(s, y))
            b !== s[y] && (s[y] = b, m = !0);
          else {
            const S = ts(y);
            i[S] = za(
              f,
              c,
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
    Il(t, e, i, s) && (m = !0);
    let h;
    for (const g in c)
      (!e || // for camelCase
      !ce(e, g) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((h = Bi(g)) === g || !ce(e, h))) && (f ? n && // for camelCase
      (n[g] !== void 0 || // for kebab-case
      n[h] !== void 0) && (i[g] = za(
        f,
        c,
        g,
        void 0,
        t,
        !0
        /* isAbsent */
      )) : delete i[g]);
    if (s !== c)
      for (const g in s)
        (!e || !ce(e, g)) && (delete s[g], m = !0);
  }
  m && $t(t, "set", "$attrs"), kl(e || {}, i, t);
}
function Il(t, e, n, r) {
  const [i, s] = t.propsOptions;
  let u = !1, c;
  if (e)
    for (let f in e) {
      if (Uo(f))
        continue;
      const m = e[f];
      let h;
      i && ce(i, h = ts(f)) ? !s || !s.includes(h) ? n[h] = m : (c || (c = {}))[h] = m : da(t.emitsOptions, f) || (!(f in r) || m !== r[f]) && (r[f] = m, u = !0);
    }
  if (s) {
    const f = ie(n), m = c || xe;
    for (let h = 0; h < s.length; h++) {
      const g = s[h];
      n[g] = za(
        i,
        f,
        g,
        m[g],
        t,
        !ce(m, g)
      );
    }
  }
  return u;
}
function za(t, e, n, r, i, s) {
  const u = t[n];
  if (u != null) {
    const c = ce(u, "default");
    if (c && r === void 0) {
      const f = u.default;
      if (u.type !== Function && !u.skipFactory && te(f)) {
        const { propsDefaults: m } = i;
        n in m ? r = m[n] : (ns(i), r = m[n] = f.call(
          null,
          e
        ), Pi());
      } else
        r = f;
    }
    u[
      0
      /* shouldCast */
    ] && (s && !c ? r = !1 : u[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === Bi(n)) && (r = !0));
  }
  return r;
}
function Ol(t, e, n = !1) {
  const r = e.propsCache, i = r.get(t);
  if (i)
    return i;
  const s = t.props, u = {}, c = [];
  let f = !1;
  if (!te(t)) {
    const h = (g) => {
      f = !0;
      const [y, b] = Ol(g, e, !0);
      ke(u, y), b && c.push(...b);
    };
    !n && e.mixins.length && e.mixins.forEach(h), t.extends && h(t.extends), t.mixins && t.mixins.forEach(h);
  }
  if (!s && !f)
    return Ie(t) && r.set(t, Zi), Zi;
  if (Q(s))
    for (let h = 0; h < s.length; h++) {
      Ue(s[h]) || q("props must be strings when using array syntax.", s[h]);
      const g = ts(s[h]);
      tc(g) && (u[g] = xe);
    }
  else if (s) {
    Ie(s) || q("invalid props options", s);
    for (const h in s) {
      const g = ts(h);
      if (tc(g)) {
        const y = s[h], b = u[g] = Q(y) || te(y) ? { type: y } : ke({}, y);
        if (b) {
          const S = rc(Boolean, b.type), U = rc(String, b.type);
          b[
            0
            /* shouldCast */
          ] = S > -1, b[
            1
            /* shouldCastTrue */
          ] = U < 0 || S < U, (S > -1 || ce(b, "default")) && c.push(g);
        }
      }
    }
  }
  const m = [u, c];
  return Ie(t) && r.set(t, m), m;
}
function tc(t) {
  return t[0] !== "$" ? !0 : (q(`Invalid prop name: "${t}" is a reserved property.`), !1);
}
function Wa(t) {
  const e = t && t.toString().match(/^\s*(function|class) (\w+)/);
  return e ? e[2] : t === null ? "null" : "";
}
function nc(t, e) {
  return Wa(t) === Wa(e);
}
function rc(t, e) {
  return Q(e) ? e.findIndex((n) => nc(n, t)) : te(e) && nc(e, t) ? 0 : -1;
}
function kl(t, e, n) {
  const r = ie(e), i = n.propsOptions[0];
  for (const s in i) {
    let u = i[s];
    u != null && vm(
      s,
      r[s],
      u,
      !ce(t, s) && !ce(t, Bi(s))
    );
  }
}
function vm(t, e, n, r) {
  const { type: i, required: s, validator: u, skipCheck: c } = n;
  if (s && r) {
    q('Missing required prop: "' + t + '"');
    return;
  }
  if (!(e == null && !s)) {
    if (i != null && i !== !0 && !c) {
      let f = !1;
      const m = Q(i) ? i : [i], h = [];
      for (let g = 0; g < m.length && !f; g++) {
        const { valid: y, expectedType: b } = Am(e, m[g]);
        h.push(b || ""), f = y;
      }
      if (!f) {
        q(Um(t, e, h));
        return;
      }
    }
    u && !u(e) && q('Invalid prop: custom validator check failed for prop "' + t + '".');
  }
}
const Fm = /* @__PURE__ */ Si(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Am(t, e) {
  let n;
  const r = Wa(e);
  if (Fm(r)) {
    const i = typeof t;
    n = i === r.toLowerCase(), !n && i === "object" && (n = t instanceof e);
  } else
    r === "Object" ? n = Ie(t) : r === "Array" ? n = Q(t) : r === "null" ? n = t === null : n = t instanceof e;
  return {
    valid: n,
    expectedType: r
  };
}
function Um(t, e, n) {
  let r = `Invalid prop: type check failed for prop "${t}". Expected ${n.map(ia).join(" | ")}`;
  const i = n[0], s = fu(e), u = ic(e, i), c = ic(e, s);
  return n.length === 1 && sc(i) && !Lm(i, s) && (r += ` with value ${u}`), r += `, got ${s} `, sc(s) && (r += `with value ${c}.`), r;
}
function ic(t, e) {
  return e === "String" ? `"${t}"` : e === "Number" ? `${Number(t)}` : `${t}`;
}
function sc(t) {
  return ["string", "number", "boolean"].some((n) => t.toLowerCase() === n);
}
function Lm(...t) {
  return t.some((e) => e.toLowerCase() === "boolean");
}
const Sl = (t) => t[0] === "_" || t === "$stable", Ou = (t) => Q(t) ? t.map(pt) : [pt(t)], Cm = (t, e, n) => {
  if (e._n)
    return e;
  const r = Wd((...i) => (Me && q(
    `Slot "${t}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Ou(e(...i))), n);
  return r._c = !1, r;
}, Jl = (t, e, n) => {
  const r = t._ctx;
  for (const i in t) {
    if (Sl(i))
      continue;
    const s = t[i];
    if (te(s))
      e[i] = Cm(i, s, r);
    else if (s != null) {
      q(
        `Non-function value encountered for slot "${i}". Prefer function slots for better performance.`
      );
      const u = Ou(s);
      e[i] = () => u;
    }
  }
}, vl = (t, e) => {
  xu(t.vnode) || q(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Ou(e);
  t.slots.default = () => n;
}, Dm = (t, e) => {
  if (t.vnode.shapeFlag & 32) {
    const n = e._;
    n ? (t.slots = ie(e), jo(e, "_", n)) : Jl(
      e,
      t.slots = {}
    );
  } else
    t.slots = {}, e && vl(t, e);
  jo(t.slots, pa, 1);
}, _m = (t, e, n) => {
  const { vnode: r, slots: i } = t;
  let s = !0, u = xe;
  if (r.shapeFlag & 32) {
    const c = e._;
    c ? Ni ? (ke(i, e), $t(t, "set", "$slots")) : n && c === 1 ? s = !1 : (ke(i, e), !n && c === 1 && delete i._) : (s = !e.$stable, Jl(e, i)), u = e;
  } else
    e && (vl(t, e), u = { default: 1 });
  if (s)
    for (const c in i)
      !Sl(c) && !(c in u) && delete i[c];
};
function Ya(t, e, n, r, i = !1) {
  if (Q(t)) {
    t.forEach(
      (y, b) => Ya(
        y,
        e && (Q(e) ? e[b] : e),
        n,
        r,
        i
      )
    );
    return;
  }
  if (Do(r) && !i)
    return;
  const s = r.shapeFlag & 4 ? vu(r.component) || r.component.proxy : r.el, u = i ? null : s, { i: c, r: f } = t;
  if (!c) {
    q(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const m = e && e.r, h = c.refs === xe ? c.refs = {} : c.refs, g = c.setupState;
  if (m != null && m !== f && (Ue(m) ? (h[m] = null, ce(g, m) && (g[m] = null)) : qe(m) && (m.value = null)), te(f))
    ri(f, c, 12, [u, h]);
  else {
    const y = Ue(f), b = qe(f);
    if (y || b) {
      const S = () => {
        if (t.f) {
          const U = y ? ce(g, f) ? g[f] : h[f] : f.value;
          i ? Q(U) && uu(U, s) : Q(U) ? U.includes(s) || U.push(s) : y ? (h[f] = [s], ce(g, f) && (g[f] = h[f])) : (f.value = [s], t.k && (h[t.k] = f.value));
        } else
          y ? (h[f] = u, ce(g, f) && (g[f] = u)) : b ? (f.value = u, t.k && (h[t.k] = u)) : q("Invalid template ref type:", f, `(${typeof f})`);
      };
      u ? (S.id = -1, Ze(S, n)) : S();
    } else
      q("Invalid template ref type:", f, `(${typeof f})`);
  }
}
let os, wi;
function Ht(t, e) {
  t.appContext.config.performance && Go() && wi.mark(`vue-${e}-${t.uid}`), Hd(t, e, Go() ? wi.now() : Date.now());
}
function jt(t, e) {
  if (t.appContext.config.performance && Go()) {
    const n = `vue-${e}-${t.uid}`, r = n + ":end";
    wi.mark(r), wi.measure(
      `<${ga(t, t.type)}> ${e}`,
      n,
      r
    ), wi.clearMarks(n), wi.clearMarks(r);
  }
  jd(t, e, Go() ? wi.now() : Date.now());
}
function Go() {
  return os !== void 0 || (typeof window < "u" && window.performance ? (os = !0, wi = window.performance) : os = !1), os;
}
function qm() {
  const t = [];
  if (t.length) {
    const e = t.length > 1;
    console.warn(
      `Feature flag${e ? "s" : ""} ${t.join(", ")} ${e ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Ze = tm;
function Km(t) {
  return Pm(t);
}
function Pm(t, e) {
  qm();
  const n = Ro();
  n.__VUE__ = !0, fl(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: r,
    remove: i,
    patchProp: s,
    createElement: u,
    createText: c,
    createComment: f,
    setText: m,
    setElementText: h,
    parentNode: g,
    nextSibling: y,
    setScopeId: b = et,
    insertStaticContent: S
  } = t, U = (w, E, B, v = null, k = null, C = null, P = !1, A = null, D = Ni ? !1 : !!E.dynamicChildren) => {
    if (w === E)
      return;
    w && !as(w, E) && (v = be(w), re(w, k, C, !0), w = null), E.patchFlag === -2 && (D = !1, E.dynamicChildren = null);
    const { type: O, ref: H, shapeFlag: M } = E;
    switch (O) {
      case yo:
        $(w, E, B, v);
        break;
      case it:
        R(w, E, B, v);
        break;
      case _o:
        w == null ? ae(E, B, v, P) : L(w, E, B, P);
        break;
      case ht:
        Xe(
          w,
          E,
          B,
          v,
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
          v,
          k,
          C,
          P,
          A,
          D
        ) : M & 6 ? Vt(
          w,
          E,
          B,
          v,
          k,
          C,
          P,
          A,
          D
        ) : M & 64 || M & 128 ? O.process(
          w,
          E,
          B,
          v,
          k,
          C,
          P,
          A,
          D,
          Ce
        ) : q("Invalid VNode type:", O, `(${typeof O})`);
    }
    H != null && k && Ya(H, w && w.ref, C, E || w, !E);
  }, $ = (w, E, B, v) => {
    if (w == null)
      r(
        E.el = c(E.children),
        B,
        v
      );
    else {
      const k = E.el = w.el;
      E.children !== w.children && m(k, E.children);
    }
  }, R = (w, E, B, v) => {
    w == null ? r(
      E.el = f(E.children || ""),
      B,
      v
    ) : E.el = w.el;
  }, ae = (w, E, B, v) => {
    [w.el, w.anchor] = S(
      w.children,
      E,
      B,
      v,
      w.el,
      w.anchor
    );
  }, L = (w, E, B, v) => {
    if (E.children !== w.children) {
      const k = y(w.anchor);
      F(w), [E.el, E.anchor] = S(
        E.children,
        B,
        k,
        v
      );
    } else
      E.el = w.el, E.anchor = w.anchor;
  }, Z = ({ el: w, anchor: E }, B, v) => {
    let k;
    for (; w && w !== E; )
      k = y(w), r(w, B, v), w = k;
    r(E, B, v);
  }, F = ({ el: w, anchor: E }) => {
    let B;
    for (; w && w !== E; )
      B = y(w), i(w), w = B;
    i(E);
  }, X = (w, E, B, v, k, C, P, A, D) => {
    P = P || E.type === "svg", w == null ? ne(
      E,
      B,
      v,
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
  }, ne = (w, E, B, v, k, C, P, A) => {
    let D, O;
    const { type: H, props: M, shapeFlag: V, transition: G, dirs: d } = w;
    if (D = w.el = u(
      w.type,
      C,
      M && M.is,
      M
    ), V & 8 ? h(D, w.children) : V & 16 && we(
      w.children,
      D,
      null,
      v,
      k,
      C && H !== "foreignObject",
      P,
      A
    ), d && vi(w, null, v, "created"), ue(D, w, w.scopeId, P, v), M) {
      for (const l in M)
        l !== "value" && !Uo(l) && s(
          D,
          l,
          null,
          M[l],
          C,
          w.children,
          v,
          k,
          fe
        );
      "value" in M && s(D, "value", null, M.value), (O = M.onVnodeBeforeMount) && Nt(O, v, w);
    }
    Object.defineProperty(D, "__vnode", {
      value: w,
      enumerable: !1
    }), Object.defineProperty(D, "__vueParentComponent", {
      value: v,
      enumerable: !1
    }), d && vi(w, null, v, "beforeMount");
    const a = (!k || k && !k.pendingBranch) && G && !G.persisted;
    a && G.beforeEnter(D), r(D, E, B), ((O = M && M.onVnodeMounted) || a || d) && Ze(() => {
      O && Nt(O, v, w), a && G.enter(D), d && vi(w, null, v, "mounted");
    }, k);
  }, ue = (w, E, B, v, k) => {
    if (B && b(w, B), v)
      for (let C = 0; C < v.length; C++)
        b(w, v[C]);
    if (k) {
      let C = k.subTree;
      if (C.patchFlag > 0 && C.patchFlag & 2048 && (C = gl(C.children) || C), E === C) {
        const P = k.vnode;
        ue(
          w,
          P,
          P.scopeId,
          P.slotScopeIds,
          k.parent
        );
      }
    }
  }, we = (w, E, B, v, k, C, P, A, D = 0) => {
    for (let O = D; O < w.length; O++) {
      const H = w[O] = A ? gi(w[O]) : pt(w[O]);
      U(
        null,
        H,
        E,
        B,
        v,
        k,
        C,
        P,
        A
      );
    }
  }, Se = (w, E, B, v, k, C, P) => {
    const A = E.el = w.el;
    let { patchFlag: D, dynamicChildren: O, dirs: H } = E;
    D |= w.patchFlag & 16;
    const M = w.props || xe, V = E.props || xe;
    let G;
    B && Fi(B, !1), (G = V.onVnodeBeforeUpdate) && Nt(G, B, E, w), H && vi(E, w, B, "beforeUpdate"), B && Fi(B, !0), Ni && (D = 0, P = !1, O = null);
    const d = k && E.type !== "foreignObject";
    if (O ? (Oe(
      w.dynamicChildren,
      O,
      A,
      B,
      v,
      d,
      C
    ), Qo(w, E)) : P || _(
      w,
      E,
      A,
      null,
      B,
      v,
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
          v,
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
            v,
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
        v,
        k
      );
    ((G = V.onVnodeUpdated) || H) && Ze(() => {
      G && Nt(G, B, E, w), H && vi(E, w, B, "updated");
    }, v);
  }, Oe = (w, E, B, v, k, C, P) => {
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
        v,
        k,
        C,
        P,
        !0
      );
    }
  }, Le = (w, E, B, v, k, C, P) => {
    if (B !== v) {
      if (B !== xe)
        for (const A in B)
          !Uo(A) && !(A in v) && s(
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
      for (const A in v) {
        if (Uo(A))
          continue;
        const D = v[A], O = B[A];
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
      "value" in v && s(w, "value", B.value, v.value);
    }
  }, Xe = (w, E, B, v, k, C, P, A, D) => {
    const O = E.el = w ? w.el : c(""), H = E.anchor = w ? w.anchor : c("");
    let { patchFlag: M, dynamicChildren: V, slotScopeIds: G } = E;
    // #5523 dev root fragment may inherit directives
    (Ni || M & 2048) && (M = 0, D = !1, V = null), G && (A = A ? A.concat(G) : G), w == null ? (r(O, B, v), r(H, B, v), we(
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
    ), Qo(w, E)) : _(
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
  }, Vt = (w, E, B, v, k, C, P, A, D) => {
    E.slotScopeIds = A, w == null ? E.shapeFlag & 512 ? k.ctx.activate(
      E,
      B,
      v,
      P,
      D
    ) : He(
      E,
      B,
      v,
      k,
      C,
      P,
      D
    ) : Pe(w, E, D);
  }, He = (w, E, B, v, k, C, P) => {
    const A = w.component = th(
      w,
      v,
      k
    );
    if (A.type.__hmrId && Cd(A), Lo(w), Ht(A, "mount"), xu(w) && (A.ctx.renderer = Ce), Ht(A, "init"), rh(A), jt(A, "init"), A.asyncDep) {
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
    ), Co(), jt(A, "mount");
  }, Pe = (w, E, B) => {
    const v = E.component = w.component;
    if (Gd(w, E, B))
      if (v.asyncDep && !v.asyncResolved) {
        Lo(E), K(v, E, B), Co();
        return;
      } else
        v.next = E, Ud(v.update), v.update();
    else
      E.el = w.el, v.vnode = E;
  }, le = (w, E, B, v, k, C, P) => {
    const A = () => {
      if (w.isMounted) {
        let { next: H, bu: M, u: V, parent: G, vnode: d } = w, a = H, l;
        Lo(H || w.vnode), Fi(w, !1), H ? (H.el = d.el, K(w, H, P)) : H = d, M && ss(M), (l = H.props && H.props.onVnodeBeforeUpdate) && Nt(l, G, H, d), Fi(w, !0), Ht(w, "render");
        const p = ba(w);
        jt(w, "render");
        const T = w.subTree;
        w.subTree = p, Ht(w, "patch"), U(
          T,
          p,
          // parent may have changed if it's in a teleport
          g(T.el),
          // anchor may have changed if it's in a fragment
          be(T),
          w,
          k,
          C
        ), jt(w, "patch"), H.el = p.el, a === null && Qd(w, p.el), V && Ze(V, k), (l = H.props && H.props.onVnodeUpdated) && Ze(
          () => Nt(l, G, H, d),
          k
        ), dl(w), Co();
      } else {
        let H;
        const { el: M, props: V } = E, { bm: G, m: d, parent: a } = w, l = Do(E);
        if (Fi(w, !1), G && ss(G), !l && (H = V && V.onVnodeBeforeMount) && Nt(H, a, E), Fi(w, !0), M && ze) {
          const p = () => {
            Ht(w, "render"), w.subTree = ba(w), jt(w, "render"), Ht(w, "hydrate"), ze(
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
          const p = w.subTree = ba(w);
          jt(w, "render"), Ht(w, "patch"), U(
            null,
            p,
            B,
            v,
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
        (E.shapeFlag & 256 || a && Do(a.vnode) && a.vnode.shapeFlag & 256) && w.a && Ze(w.a, k), w.isMounted = !0, $d(w), E = B = v = null;
      }
    }, D = w.effect = new pu(
      A,
      () => fa(O),
      w.scope
      // track it in component's effect scope
    ), O = w.update = () => D.run();
    O.id = w.uid, Fi(w, !0), D.onTrack = w.rtc ? (H) => ss(w.rtc, H) : void 0, D.onTrigger = w.rtg ? (H) => ss(w.rtg, H) : void 0, O.ownerInstance = w, O();
  }, K = (w, E, B) => {
    E.component = w;
    const v = w.vnode.props;
    w.vnode = E, w.next = null, Jm(w, E.props, v, B), _m(w, E.children, B), Mi(), zu(), Vi();
  }, _ = (w, E, B, v, k, C, P, A, D = !1) => {
    const O = w && w.children, H = w ? w.shapeFlag : 0, M = E.children, { patchFlag: V, shapeFlag: G } = E;
    if (V > 0) {
      if (V & 128) {
        j(
          O,
          M,
          B,
          v,
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
          v,
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
      v,
      k,
      C,
      P,
      A,
      D
    ) : fe(O, k, C, !0) : (H & 8 && h(B, ""), G & 16 && we(
      M,
      B,
      v,
      k,
      C,
      P,
      A,
      D
    ));
  }, W = (w, E, B, v, k, C, P, A, D) => {
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
      v,
      k,
      C,
      P,
      A,
      D,
      M
    );
  }, j = (w, E, B, v, k, C, P, A, D) => {
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
        const G = V + 1, d = G < H ? E[G].el : v;
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
      const Be = N ? $m(ee) : Zi;
      for (l = Be.length - 1, O = T - 1; O >= 0; O--) {
        const se = d + O, pe = E[se], Te = se + 1 < H ? E[se + 1].el : v;
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
  }, Y = (w, E, B, v, k = null) => {
    const { el: C, type: P, transition: A, children: D, shapeFlag: O } = w;
    if (O & 6) {
      Y(w.component.subTree, E, B, v);
      return;
    }
    if (O & 128) {
      w.suspense.move(E, B, v);
      return;
    }
    if (O & 64) {
      P.move(w, E, B, Ce);
      return;
    }
    if (P === ht) {
      r(C, E, B);
      for (let M = 0; M < D.length; M++)
        Y(D[M], E, B, v);
      r(w.anchor, E, B);
      return;
    }
    if (P === _o) {
      Z(w, E, B);
      return;
    }
    if (v !== 2 && O & 1 && A)
      if (v === 0)
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
  }, re = (w, E, B, v = !1, k = !1) => {
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
    if (A != null && Ya(A, null, B, w, !0), H & 256) {
      E.ctx.deactivate(w);
      return;
    }
    const G = H & 1 && V, d = !Do(w);
    let a;
    if (d && (a = P && P.onVnodeBeforeUnmount) && Nt(a, E, w), H & 6)
      he(w.component, B, v);
    else {
      if (H & 128) {
        w.suspense.unmount(B, v);
        return;
      }
      G && vi(w, null, E, "beforeUnmount"), H & 64 ? w.type.remove(
        w,
        E,
        B,
        k,
        Ce,
        v
      ) : O && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (C !== ht || M > 0 && M & 64) ? fe(
        O,
        E,
        B,
        !1,
        !0
      ) : (C === ht && M & 384 || !k && H & 16) && fe(D, E, B), v && me(w);
    }
    (d && (a = P && P.onVnodeUnmounted) || G) && Ze(() => {
      a && Nt(a, E, w), G && vi(w, null, E, "unmounted");
    }, B);
  }, me = (w) => {
    const { type: E, el: B, anchor: v, transition: k } = w;
    if (E === ht) {
      w.patchFlag > 0 && w.patchFlag & 2048 && k && !k.persisted ? w.children.forEach((P) => {
        P.type === it ? i(P.el) : me(P);
      }) : Ne(B, v);
      return;
    }
    if (E === _o) {
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
    w.type.__hmrId && Dd(w);
    const { bum: v, scope: k, update: C, subTree: P, um: A } = w;
    v && ss(v), k.stop(), C && (C.active = !1, re(P, w, E, B)), A && Ze(A, E), Ze(() => {
      w.isUnmounted = !0;
    }, E), E && E.pendingBranch && !E.isUnmounted && w.asyncDep && !w.asyncResolved && w.suspenseId === E.pendingId && (E.deps--, E.deps === 0 && E.resolve()), Vd(w);
  }, fe = (w, E, B, v = !1, k = !1, C = 0) => {
    for (let P = C; P < w.length; P++)
      re(w[P], E, B, v, k);
  }, be = (w) => w.shapeFlag & 6 ? be(w.component.subTree) : w.shapeFlag & 128 ? w.suspense.next() : y(w.anchor || w.el), ve = (w, E, B) => {
    w == null ? E._vnode && re(E._vnode, null, null, !0) : U(E._vnode || null, w, E, null, null, null, B), zu(), ul(), E._vnode = w;
  }, Ce = {
    p: U,
    um: re,
    m: Y,
    r: me,
    mt: He,
    mc: we,
    pc: _,
    pbc: Oe,
    n: be,
    o: t
  };
  let De, ze;
  return e && ([De, ze] = e(
    Ce
  )), {
    render: ve,
    hydrate: De,
    createApp: Im(ve, De)
  };
}
function Fi({ effect: t, update: e }, n) {
  t.allowRecurse = e.allowRecurse = n;
}
function Qo(t, e, n = !1) {
  const r = t.children, i = e.children;
  if (Q(r) && Q(i))
    for (let s = 0; s < r.length; s++) {
      const u = r[s];
      let c = i[s];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = i[s] = gi(i[s]), c.el = u.el), n || Qo(u, c)), c.type === yo && (c.el = u.el), c.type === it && !c.el && (c.el = u.el);
    }
}
function $m(t) {
  const e = t.slice(), n = [0];
  let r, i, s, u, c;
  const f = t.length;
  for (r = 0; r < f; r++) {
    const m = t[r];
    if (m !== 0) {
      if (i = n[n.length - 1], t[i] < m) {
        e[r] = i, n.push(r);
        continue;
      }
      for (s = 0, u = n.length - 1; s < u; )
        c = s + u >> 1, t[n[c]] < m ? s = c + 1 : u = c;
      m < t[n[s]] && (s > 0 && (e[r] = n[s - 1]), n[s] = r);
    }
  }
  for (s = n.length, u = n[s - 1]; s-- > 0; )
    n[s] = u, u = e[u];
  return n;
}
const Mm = (t) => t.__isTeleport, es = (t) => t && (t.disabled || t.disabled === ""), oc = (t) => typeof SVGElement < "u" && t instanceof SVGElement, Xa = (t, e) => {
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
}, Vm = {
  __isTeleport: !0,
  process(t, e, n, r, i, s, u, c, f, m) {
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
      const ne = e.target = Xa(e.props, S), ue = e.targetAnchor = U("");
      ne ? (b(ue, ne), u = u || oc(ne)) : R || q("Invalid Teleport target on mount:", ne, `(${typeof ne})`);
      const we = (Se, Oe) => {
        ae & 16 && h(
          L,
          Se,
          Oe,
          i,
          s,
          u,
          c,
          f
        );
      };
      R ? we(n, X) : ne && we(ne, ue);
    } else {
      e.el = t.el;
      const F = e.anchor = t.anchor, X = e.target = t.target, ne = e.targetAnchor = t.targetAnchor, ue = es(t.props), we = ue ? n : X, Se = ue ? F : ne;
      if (u = u || oc(X), Z ? (y(
        t.dynamicChildren,
        Z,
        we,
        i,
        s,
        u,
        c
      ), Qo(t, e, !0)) : f || g(
        t,
        e,
        we,
        Se,
        i,
        s,
        u,
        c,
        !1
      ), R)
        ue || Jo(
          e,
          n,
          F,
          m,
          1
        );
      else if ((e.props && e.props.to) !== (t.props && t.props.to)) {
        const Oe = e.target = Xa(
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
        ue && Jo(
          e,
          X,
          ne,
          m,
          1
        );
    }
    Fl(e);
  },
  remove(t, e, n, r, { um: i, o: { remove: s } }, u) {
    const { shapeFlag: c, children: f, anchor: m, targetAnchor: h, target: g, props: y } = t;
    if (g && s(h), (u || !es(y)) && (s(m), c & 16))
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
  hydrate: Hm
};
function Jo(t, e, n, { o: { insert: r }, m: i }, s = 2) {
  s === 0 && r(t.targetAnchor, e, n);
  const { el: u, anchor: c, shapeFlag: f, children: m, props: h } = t, g = s === 2;
  if (g && r(u, e, n), (!g || es(h)) && f & 16)
    for (let y = 0; y < m.length; y++)
      i(
        m[y],
        e,
        n,
        2
      );
  g && r(c, e, n);
}
function Hm(t, e, n, r, i, s, {
  o: { nextSibling: u, parentNode: c, querySelector: f }
}, m) {
  const h = e.target = Xa(
    e.props,
    f
  );
  if (h) {
    const g = h._lpa || h.firstChild;
    if (e.shapeFlag & 16)
      if (es(e.props))
        e.anchor = m(
          u(t),
          e,
          c(t),
          n,
          r,
          i,
          s
        ), e.targetAnchor = g;
      else {
        e.anchor = u(t);
        let y = g;
        for (; y; )
          if (y = u(y), y && y.nodeType === 8 && y.data === "teleport anchor") {
            e.targetAnchor = y, h._lpa = e.targetAnchor && u(e.targetAnchor);
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
    Fl(e);
  }
  return e.anchor && u(e.anchor);
}
const jm = Vm;
function Fl(t) {
  const e = t.ctx;
  if (e && e.ut) {
    let n = t.children[0].el;
    for (; n !== t.targetAnchor; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", e.uid), n = n.nextSibling;
    e.ut();
  }
}
const ht = Symbol.for("v-fgt"), yo = Symbol.for("v-txt"), it = Symbol.for("v-cmt"), _o = Symbol.for("v-stc"), ws = [];
let gt = null;
function Ge(t = !1) {
  ws.push(gt = t ? null : []);
}
function Rm() {
  ws.pop(), gt = ws[ws.length - 1] || null;
}
let Bs = 1;
function ac(t) {
  Bs += t;
}
function Al(t) {
  return t.dynamicChildren = Bs > 0 ? gt || Zi : null, Rm(), Bs > 0 && gt && gt.push(t), t;
}
function xi(t, e, n, r, i, s) {
  return Al(
    Ll(
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
  return Al(
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
function ku(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function as(t, e) {
  return e.shapeFlag & 6 && Wi.has(e.type) ? (t.shapeFlag &= -257, e.shapeFlag &= -513, !1) : t.type === e.type && t.key === e.key;
}
const zm = (...t) => Wm(
  ...t
), pa = "__vInternal", Ul = ({ key: t }) => t ?? null, qo = ({
  ref: t,
  ref_key: e,
  ref_for: n
}) => (typeof t == "number" && (t = "" + t), t != null ? Ue(t) || qe(t) || te(t) ? { i: ut, r: t, k: e, f: !!n } : t : null);
function Ll(t, e = null, n = null, r = 0, i = null, s = t === ht ? 0 : 1, u = !1, c = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && Ul(e),
    ref: e && qo(e),
    scopeId: pl,
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
    ctx: ut
  };
  return c ? (Su(f, n), s & 128 && t.normalize(f)) : n && (f.shapeFlag |= Ue(n) ? 8 : 16), f.key !== f.key && q("VNode created with invalid key (NaN). VNode type:", f.type), Bs > 0 && // avoid a block node from tracking itself
  !u && // has current parent block
  gt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && gt.push(f), f;
}
const Pt = zm;
function Wm(t, e = null, n = null, r = 0, i = null, s = !1) {
  if ((!t || t === hm) && (t || q(`Invalid vnode type when creating vnode: ${t}.`), t = it), ku(t)) {
    const c = ki(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return n && Su(c, n), Bs > 0 && !s && gt && (c.shapeFlag & 6 ? gt[gt.indexOf(t)] = c : gt.push(c)), c.patchFlag |= -2, c;
  }
  if (Kl(t) && (t = t.__vccOpts), e) {
    e = Ym(e);
    let { class: c, style: f } = e;
    c && !Ue(c) && (e.class = mu(c)), Ie(f) && (Ka(f) && !Q(f) && (f = ke({}, f)), e.style = Ji(f));
  }
  const u = Ue(t) ? 1 : em(t) ? 128 : Mm(t) ? 64 : Ie(t) ? 4 : te(t) ? 2 : 0;
  return u & 4 && Ka(t) && (t = ie(t), q(
    "Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    t
  )), Ll(
    t,
    e,
    n,
    r,
    i,
    u,
    s,
    !0
  );
}
function Ym(t) {
  return t ? Ka(t) || pa in t ? ke({}, t) : t : null;
}
function ki(t, e, n = !1) {
  const { props: r, ref: i, patchFlag: s, children: u } = t, c = e ? Gm(r || {}, e) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: c,
    key: c && Ul(c),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? Q(i) ? i.concat(qo(e)) : [i, qo(e)] : qo(e)
    ) : i,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: s === -1 && Q(u) ? u.map(Cl) : u,
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
function Cl(t) {
  const e = ki(t);
  return Q(t.children) && (e.children = t.children.map(Cl)), e;
}
function Xm(t = " ", e = 0) {
  return Pt(yo, null, t, e);
}
function Zm(t = "", e = !1) {
  return e ? (Ge(), Yi(it, null, t)) : Pt(it, null, t);
}
function pt(t) {
  return t == null || typeof t == "boolean" ? Pt(it) : Q(t) ? Pt(
    ht,
    null,
    // #3666, avoid reference pollution when reusing vnode
    t.slice()
  ) : typeof t == "object" ? gi(t) : Pt(yo, null, String(t));
}
function gi(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : ki(t);
}
function Su(t, e) {
  let n = 0;
  const { shapeFlag: r } = t;
  if (e == null)
    e = null;
  else if (Q(e))
    n = 16;
  else if (typeof e == "object")
    if (r & 65) {
      const i = e.default;
      i && (i._c && (i._d = !1), Su(t, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = e._;
      !i && !(pa in e) ? e._ctx = ut : i === 3 && ut && (ut.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else
    te(e) ? (e = { default: e, _ctx: ut }, n = 32) : (e = String(e), r & 64 ? (n = 16, e = [Xm(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function Gm(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    for (const i in r)
      if (i === "class")
        e.class !== r.class && (e.class = mu([e.class, r.class]));
      else if (i === "style")
        e.style = Ji([e.style, r.style]);
      else if (go(i)) {
        const s = e[i], u = r[i];
        u && s !== u && !(Q(s) && s.includes(u)) && (e[i] = s ? [].concat(s, u) : u);
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
const Qm = Bl();
let eh = 0;
function th(t, e, n) {
  const r = t.type, i = (e ? e.appContext : t.appContext) || Qm, s = {
    uid: eh++,
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
    scope: new Hf(
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
    propsOptions: Ol(r, i),
    emitsOptions: hl(r, i),
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
  return s.ctx = pm(s), s.root = e ? e.root : s, s.emit = zd.bind(null, s), t.ce && t.ce(s), s;
}
let Me = null, Ju, Hi, uc = "__VUE_INSTANCE_SETTERS__";
(Hi = Ro()[uc]) || (Hi = Ro()[uc] = []), Hi.push((t) => Me = t), Ju = (t) => {
  Hi.length > 1 ? Hi.forEach((e) => e(t)) : Hi[0](t);
};
const ns = (t) => {
  Ju(t), t.scope.on();
}, Pi = () => {
  Me && Me.scope.off(), Ju(null);
}, nh = /* @__PURE__ */ Si("slot,component");
function Za(t, e) {
  const n = e.isNativeTag || qc;
  (nh(t) || n(t)) && q(
    "Do not use built-in or reserved HTML elements as component id: " + t
  );
}
function Dl(t) {
  return t.vnode.shapeFlag & 4;
}
let Is = !1;
function rh(t, e = !1) {
  Is = e;
  const { props: n, children: r } = t.vnode, i = Dl(t);
  km(t, n, i, e), Dm(t, r);
  const s = i ? ih(t, e) : void 0;
  return Is = !1, s;
}
function ih(t, e) {
  var n;
  const r = t.type;
  {
    if (r.name && Za(r.name, t.appContext.config), r.components) {
      const s = Object.keys(r.components);
      for (let u = 0; u < s.length; u++)
        Za(s[u], t.appContext.config);
    }
    if (r.directives) {
      const s = Object.keys(r.directives);
      for (let u = 0; u < s.length; u++)
        Tl(s[u]);
    }
    r.compilerOptions && sh() && q(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = el(new Proxy(t.ctx, Nl)), gm(t);
  const { setup: i } = r;
  if (i) {
    const s = t.setupContext = i.length > 1 ? uh(t) : null;
    ns(t), Mi();
    const u = ri(
      i,
      t,
      0,
      [fs(t.props), s]
    );
    if (Vi(), Pi(), lu(u)) {
      if (u.then(Pi, Pi), e)
        return u.then((c) => {
          cc(t, c, e);
        }).catch((c) => {
          la(c, t, 0);
        });
      if (t.asyncDep = u, !t.suspense) {
        const c = (n = r.name) != null ? n : "Anonymous";
        q(
          `Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      cc(t, u, e);
  } else
    _l(t, e);
}
function cc(t, e, n) {
  te(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : Ie(e) ? (ku(e) && q(
    "setup() should not return VNodes directly - return a render function instead."
  ), t.devtoolsRawSetupState = e, t.setupState = rl(e), wm(t)) : e !== void 0 && q(
    `setup() should return an object. Received: ${e === null ? "null" : typeof e}`
  ), _l(t, n);
}
let Ga;
const sh = () => !Ga;
function _l(t, e, n) {
  const r = t.type;
  if (!t.render) {
    if (!e && Ga && !r.render) {
      const i = r.template || Iu(t).template;
      if (i) {
        Ht(t, "compile");
        const { isCustomElement: s, compilerOptions: u } = t.appContext.config, { delimiters: c, compilerOptions: f } = r, m = ke(
          ke(
            {
              isCustomElement: s,
              delimiters: c
            },
            u
          ),
          f
        );
        r.render = Ga(i, m), jt(t, "compile");
      }
    }
    t.render = r.render || et;
  }
  ns(t), Mi(), Tm(t), Vi(), Pi(), !r.render && t.render === et && !e && (r.template ? q(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
    /* should not happen */
  ) : q("Component is missing template or render function."));
}
function oh(t) {
  return t.attrsProxy || (t.attrsProxy = new Proxy(
    t.attrs,
    {
      get(e, n) {
        return Yo(), Re(t, "get", "$attrs"), e[n];
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
function ah(t) {
  return t.slotsProxy || (t.slotsProxy = new Proxy(t.slots, {
    get(e, n) {
      return Re(t, "get", "$slots"), e[n];
    }
  }));
}
function uh(t) {
  return Object.freeze({
    get attrs() {
      return oh(t);
    },
    get slots() {
      return ah(t);
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
function vu(t) {
  if (t.exposed)
    return t.exposeProxy || (t.exposeProxy = new Proxy(rl(el(t.exposed)), {
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
const ch = /(?:^|[-_])(\w)/g, lh = (t) => t.replace(ch, (e) => e.toUpperCase()).replace(/[-_]/g, "");
function ql(t, e = !0) {
  return te(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function ga(t, e, n = !1) {
  let r = ql(e);
  if (!r && e.__file) {
    const i = e.__file.match(/([^/\\]+)\.\w+$/);
    i && (r = i[1]);
  }
  if (!r && t && t.parent) {
    const i = (s) => {
      for (const u in s)
        if (s[u] === e)
          return u;
    };
    r = i(
      t.components || t.parent.type.components
    ) || i(t.appContext.components);
  }
  return r ? lh(r) : n ? "App" : "Anonymous";
}
function Kl(t) {
  return te(t) && "__vccOpts" in t;
}
const fh = (t, e) => Id(t, e, Is), dh = Symbol.for("v-scx"), mh = () => {
  {
    const t = bt(dh);
    return t || q(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), t;
  }
};
function Ba(t) {
  return !!(t && t.__v_isShallow);
}
function hh() {
  if (typeof window > "u")
    return;
  const t = { style: "color:#3ba776" }, e = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, r = { style: "color:#9d288c" }, i = {
    header(g) {
      return Ie(g) ? g.__isVue ? ["div", t, "VueInstance"] : qe(g) ? [
        "div",
        {},
        ["span", t, h(g)],
        "<",
        c(g.value),
        ">"
      ] : _i(g) ? [
        "div",
        {},
        ["span", t, Ba(g) ? "ShallowReactive" : "Reactive"],
        "<",
        c(g),
        `>${Oi(g) ? " (readonly)" : ""}`
      ] : Oi(g) ? [
        "div",
        {},
        ["span", t, Ba(g) ? "ShallowReadonly" : "Readonly"],
        "<",
        c(g),
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
    g.type.props && g.props && y.push(u("props", ie(g.props))), g.setupState !== xe && y.push(u("setup", g.setupState)), g.data !== xe && y.push(u("data", ie(g.data)));
    const b = f(g, "computed");
    b && y.push(u("computed", b));
    const S = f(g, "inject");
    return S && y.push(u("injected", S)), y.push([
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
  function u(g, y) {
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
          c(y[b], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(g, y = !0) {
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
    return Ba(g) ? "ShallowRef" : g.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(i) : window.devtoolsFormatters = [i];
}
const lc = "3.3.4", ph = "http://www.w3.org/2000/svg", Ui = typeof document < "u" ? document : null, fc = Ui && /* @__PURE__ */ Ui.createElement("template"), gh = {
  insert: (t, e, n) => {
    e.insertBefore(t, n || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, n, r) => {
    const i = e ? Ui.createElementNS(ph, t) : Ui.createElement(t, n ? { is: n } : void 0);
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
    const u = n ? n.previousSibling : e.lastChild;
    if (i && (i === s || i.nextSibling))
      for (; e.insertBefore(i.cloneNode(!0), n), !(i === s || !(i = i.nextSibling)); )
        ;
    else {
      fc.innerHTML = r ? `<svg>${t}</svg>` : t;
      const c = fc.content;
      if (r) {
        const f = c.firstChild;
        for (; f.firstChild; )
          c.appendChild(f.firstChild);
        c.removeChild(f);
      }
      e.insertBefore(c, n);
    }
    return [
      // first
      u ? u.nextSibling : e.firstChild,
      // last
      n ? n.previousSibling : e.lastChild
    ];
  }
};
function wh(t, e, n) {
  const r = t._vtc;
  r && (e = (e ? [e, ...r] : [...r]).join(" ")), e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e;
}
function yh(t, e, n) {
  const r = t.style, i = Ue(n);
  if (n && !i) {
    if (e && !Ue(e))
      for (const s in e)
        n[s] == null && Qa(r, s, "");
    for (const s in n)
      Qa(r, s, n[s]);
  } else {
    const s = r.display;
    i ? e !== n && (r.cssText = n) : e && t.removeAttribute("style"), "_vod" in t && (r.display = s);
  }
}
const Th = /[^\\];\s*$/, dc = /\s*!important$/;
function Qa(t, e, n) {
  if (Q(n))
    n.forEach((r) => Qa(t, e, r));
  else if (n == null && (n = ""), Th.test(n) && q(
    `Unexpected semicolon at the end of '${e}' style value: '${n}'`
  ), e.startsWith("--"))
    t.setProperty(e, n);
  else {
    const r = Eh(t, e);
    dc.test(n) ? t.setProperty(
      Bi(r),
      n.replace(dc, ""),
      "important"
    ) : t[r] = n;
  }
}
const mc = ["Webkit", "Moz", "ms"], Ia = {};
function Eh(t, e) {
  const n = Ia[e];
  if (n)
    return n;
  let r = ts(e);
  if (r !== "filter" && r in t)
    return Ia[e] = r;
  r = ia(r);
  for (let i = 0; i < mc.length; i++) {
    const s = mc[i] + r;
    if (s in t)
      return Ia[e] = s;
  }
  return e;
}
const hc = "http://www.w3.org/1999/xlink";
function bh(t, e, n, r, i) {
  if (r && e.startsWith("xlink:"))
    n == null ? t.removeAttributeNS(hc, e.slice(6, e.length)) : t.setAttributeNS(hc, e, n);
  else {
    const s = Vf(e);
    n == null || s && !Kc(n) ? t.removeAttribute(e) : t.setAttribute(e, s ? "" : n);
  }
}
function Nh(t, e, n, r, i, s, u) {
  if (e === "innerHTML" || e === "textContent") {
    r && u(r, i, s), t[e] = n ?? "";
    return;
  }
  const c = t.tagName;
  if (e === "value" && c !== "PROGRESS" && // custom elements may use _value internally
  !c.includes("-")) {
    t._value = n;
    const m = c === "OPTION" ? t.getAttribute("value") : t.value, h = n ?? "";
    m !== h && (t.value = h), n == null && t.removeAttribute(e);
    return;
  }
  let f = !1;
  if (n === "" || n == null) {
    const m = typeof t[e];
    m === "boolean" ? n = Kc(n) : n == null && m === "string" ? (n = "", f = !0) : m === "number" && (n = 0, f = !0);
  }
  try {
    t[e] = n;
  } catch (m) {
    f || q(
      `Failed setting prop "${e}" on <${c.toLowerCase()}>: value ${n} is invalid.`,
      m
    );
  }
  f && t.removeAttribute(e);
}
function xh(t, e, n, r) {
  t.addEventListener(e, n, r);
}
function Bh(t, e, n, r) {
  t.removeEventListener(e, n, r);
}
function Ih(t, e, n, r, i = null) {
  const s = t._vei || (t._vei = {}), u = s[e];
  if (r && u)
    u.value = r;
  else {
    const [c, f] = Oh(e);
    if (r) {
      const m = s[e] = Jh(r, i);
      xh(t, c, m, f);
    } else
      u && (Bh(t, c, u, f), s[e] = void 0);
  }
}
const pc = /(?:Once|Passive|Capture)$/;
function Oh(t) {
  let e;
  if (pc.test(t)) {
    e = {};
    let r;
    for (; r = t.match(pc); )
      t = t.slice(0, t.length - r[0].length), e[r[0].toLowerCase()] = !0;
  }
  return [t[2] === ":" ? t.slice(3) : Bi(t.slice(2)), e];
}
let Oa = 0;
const kh = /* @__PURE__ */ Promise.resolve(), Sh = () => Oa || (kh.then(() => Oa = 0), Oa = Date.now());
function Jh(t, e) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Et(
      vh(r, n.value),
      e,
      5,
      [r]
    );
  };
  return n.value = t, n.attached = Sh(), n;
}
function vh(t, e) {
  if (Q(e)) {
    const n = t.stopImmediatePropagation;
    return t.stopImmediatePropagation = () => {
      n.call(t), t._stopped = !0;
    }, e.map((r) => (i) => !i._stopped && r && r(i));
  } else
    return e;
}
const gc = /^on[a-z]/, Fh = (t, e, n, r, i = !1, s, u, c, f) => {
  e === "class" ? wh(t, r, i) : e === "style" ? yh(t, n, r) : go(e) ? Ho(e) || Ih(t, e, n, r, u) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : Ah(t, e, r, i)) ? Nh(
    t,
    e,
    r,
    s,
    u,
    c,
    f
  ) : (e === "true-value" ? t._trueValue = r : e === "false-value" && (t._falseValue = r), bh(t, e, r, i));
};
function Ah(t, e, n, r) {
  return r ? !!(e === "innerHTML" || e === "textContent" || e in t && gc.test(e) && te(n)) : e === "spellcheck" || e === "draggable" || e === "translate" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA" || gc.test(e) && Ue(n) ? !1 : e in t;
}
const Uh = /* @__PURE__ */ ke({ patchProp: Fh }, gh);
let wc;
function Lh() {
  return wc || (wc = Km(Uh));
}
const Pl = (...t) => {
  const e = Lh().createApp(...t);
  Ch(e), Dh(e);
  const { mount: n } = e;
  return e.mount = (r) => {
    const i = _h(r);
    if (!i)
      return;
    const s = e._component;
    !te(s) && !s.render && !s.template && (s.template = i.innerHTML), i.innerHTML = "";
    const u = n(i, !1, i instanceof SVGElement);
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), u;
  }, e;
};
function Ch(t) {
  Object.defineProperty(t.config, "isNativeTag", {
    value: (e) => Pf(e) || $f(e),
    writable: !1
  });
}
function Dh(t) {
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
function _h(t) {
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
function qh() {
  hh();
}
qh();
const Kh = () => new Error("Config not initialized");
let Ko;
const Ph = (t) => {
  if (t.codeSdk === void 0)
    throw new Error("codeSdk path is required");
  Ko = Tt(t);
}, To = () => {
  if (!Ko)
    throw Kh;
  return {
    config: Ko,
    codeSdk: () => Ko.value.codeSdk
  };
};
class is {
  constructor(e = is.getId(), n) {
    this.listeners = {}, this.targetWindow = null, this.readyResolver = null, this.setTargetWindow = (r) => {
      this.readyPromise = new Promise((i) => {
        this.readyResolver = i;
      }), r != null && r.contentWindow ? (this.targetWindow = r.contentWindow, r.addEventListener("load", () => {
        this.readyResolver && this.readyResolver();
      })) : (this.targetWindow = window.parent, this.readyResolver && this.readyResolver());
    }, this.emit = async (r, i) => {
      var u;
      await this.ready(), this.targetWindow && this.targetWindow.postMessage({
        id: this.connectionId,
        type: "event",
        payload: { event: r, args: i }
      }, "*");
      const s = r;
      (u = this.listeners[s]) == null || u.forEach((c) => {
        try {
          c(i);
        } catch (f) {
          console.error(`Error in listener for event "${s}": ${f}`);
        }
      });
    }, this.on = (r, i) => {
      window.addEventListener("message", (u) => {
        u.data.type === "event" && u.data.payload.event === r && u.data.id === this.connectionId && i(u.data.payload.args);
      });
      const s = r;
      this.listeners[s] = [...this.listeners[s] || [], i];
    }, this.connectionId = e, this.setTargetWindow(n);
  }
  async ready() {
    await this.readyPromise;
  }
  get id() {
    return this.connectionId;
  }
}
is.getId = () => Math.random().toString(36).substring(2, 15);
function Qe(t, e) {
  if (!t)
    throw new Error(e);
}
const $h = 34028234663852886e22, Mh = -34028234663852886e22, Vh = 4294967295, Hh = 2147483647, jh = -2147483648;
function Po(t) {
  if (typeof t != "number")
    throw new Error("invalid int 32: " + typeof t);
  if (!Number.isInteger(t) || t > Hh || t < jh)
    throw new Error("invalid int 32: " + t);
}
function eu(t) {
  if (typeof t != "number")
    throw new Error("invalid uint 32: " + typeof t);
  if (!Number.isInteger(t) || t > Vh || t < 0)
    throw new Error("invalid uint 32: " + t);
}
function $l(t) {
  if (typeof t != "number")
    throw new Error("invalid float 32: " + typeof t);
  if (Number.isFinite(t) && (t > $h || t < Mh))
    throw new Error("invalid float 32: " + t);
}
const Ml = Symbol("@bufbuild/protobuf/enum-type");
function Rh(t) {
  const e = t[Ml];
  return Qe(e, "missing enum type on enum object"), e;
}
function Vl(t, e, n, r) {
  t[Ml] = Hl(e, n.map((i) => ({
    no: i.no,
    name: i.name,
    localName: t[i.no]
  })));
}
function Hl(t, e, n) {
  const r = /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null), s = [];
  for (const u of e) {
    const c = jl(u);
    s.push(c), r[u.name] = c, i[u.no] = c;
  }
  return {
    typeName: t,
    values: s,
    // We do not surface options at this time
    // options: opt?.options ?? Object.create(null),
    findName(u) {
      return r[u];
    },
    findNumber(u) {
      return i[u];
    }
  };
}
function zh(t, e, n) {
  const r = {};
  for (const i of e) {
    const s = jl(i);
    r[s.localName] = s.no, r[s.no] = s.localName;
  }
  return Vl(r, t, e), r;
}
function jl(t) {
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
function Wh(t, e, n, r) {
  var i;
  const s = (i = r == null ? void 0 : r.localName) !== null && i !== void 0 ? i : e.substring(e.lastIndexOf(".") + 1), u = {
    [s]: function(c) {
      t.util.initFields(this), t.util.initPartial(c, this);
    }
  }[s];
  return Object.setPrototypeOf(u.prototype, new x()), Object.assign(u, {
    runtime: t,
    typeName: e,
    fields: t.util.newFieldList(n),
    fromBinary(c, f) {
      return new u().fromBinary(c, f);
    },
    fromJson(c, f) {
      return new u().fromJson(c, f);
    },
    fromJsonString(c, f) {
      return new u().fromJsonString(c, f);
    },
    equals(c, f) {
      return t.util.equals(u, c, f);
    }
  }), u;
}
function Yh(t, e, n, r) {
  return {
    syntax: t,
    json: e,
    bin: n,
    util: r,
    makeMessageType(i, s, u) {
      return Wh(this, i, s, u);
    },
    makeEnum: zh,
    makeEnumType: Hl,
    getEnumType: Rh
  };
}
var J;
(function(t) {
  t[t.DOUBLE = 1] = "DOUBLE", t[t.FLOAT = 2] = "FLOAT", t[t.INT64 = 3] = "INT64", t[t.UINT64 = 4] = "UINT64", t[t.INT32 = 5] = "INT32", t[t.FIXED64 = 6] = "FIXED64", t[t.FIXED32 = 7] = "FIXED32", t[t.BOOL = 8] = "BOOL", t[t.STRING = 9] = "STRING", t[t.BYTES = 12] = "BYTES", t[t.UINT32 = 13] = "UINT32", t[t.SFIXED32 = 15] = "SFIXED32", t[t.SFIXED64 = 16] = "SFIXED64", t[t.SINT32 = 17] = "SINT32", t[t.SINT64 = 18] = "SINT64";
})(J || (J = {}));
function Xh() {
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
function ka(t, e, n) {
  for (let s = 0; s < 28; s = s + 7) {
    const u = t >>> s, c = !(!(u >>> 7) && e == 0), f = (c ? u | 128 : u) & 255;
    if (n.push(f), !c)
      return;
  }
  const r = t >>> 28 & 15 | (e & 7) << 4, i = !!(e >> 3);
  if (n.push((i ? r | 128 : r) & 255), !!i) {
    for (let s = 3; s < 31; s = s + 7) {
      const u = e >>> s, c = !!(u >>> 7), f = (c ? u | 128 : u) & 255;
      if (n.push(f), !c)
        return;
    }
    n.push(e >>> 31 & 1);
  }
}
const $o = 4294967296;
function yc(t) {
  const e = t[0] === "-";
  e && (t = t.slice(1));
  const n = 1e6;
  let r = 0, i = 0;
  function s(u, c) {
    const f = Number(t.slice(u, c));
    i *= n, r = r * n + f, r >= $o && (i = i + (r / $o | 0), r = r % $o);
  }
  return s(-24, -18), s(-18, -12), s(-12, -6), s(-6), e ? zl(r, i) : Fu(r, i);
}
function Zh(t, e) {
  let n = Fu(t, e);
  const r = n.hi & 2147483648;
  r && (n = zl(n.lo, n.hi));
  const i = Rl(n.lo, n.hi);
  return r ? "-" + i : i;
}
function Rl(t, e) {
  if ({ lo: t, hi: e } = Gh(t, e), e <= 2097151)
    return String($o * e + t);
  const n = t & 16777215, r = (t >>> 24 | e << 8) & 16777215, i = e >> 16 & 65535;
  let s = n + r * 6777216 + i * 6710656, u = r + i * 8147497, c = i * 2;
  const f = 1e7;
  return s >= f && (u += Math.floor(s / f), s %= f), u >= f && (c += Math.floor(u / f), u %= f), c.toString() + Tc(u) + Tc(s);
}
function Gh(t, e) {
  return { lo: t >>> 0, hi: e >>> 0 };
}
function Fu(t, e) {
  return { lo: t | 0, hi: e | 0 };
}
function zl(t, e) {
  return e = ~e, t ? t = ~t + 1 : e += 1, Fu(t, e);
}
const Tc = (t) => {
  const e = String(t);
  return "0000000".slice(e.length) + e;
};
function Ec(t, e) {
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
function Qh() {
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
function ep() {
  const t = new DataView(new ArrayBuffer(8));
  if (typeof BigInt == "function" && typeof t.getBigInt64 == "function" && typeof t.getBigUint64 == "function" && typeof t.setBigInt64 == "function" && typeof t.setBigUint64 == "function" && (typeof process != "object" || typeof { NODE_ENV: '"production"', SDK_PATH: "https://sdk.getcode.com/v1/elements" } != "object" || { NODE_ENV: '"production"', SDK_PATH: "https://sdk.getcode.com/v1/elements" }.BUF_BIGINT_DISABLE !== "1")) {
    const i = BigInt("-9223372036854775808"), s = BigInt("9223372036854775807"), u = BigInt("0"), c = BigInt("18446744073709551615");
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
        if (m > c || m < u)
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
      return typeof i != "string" && (i = i.toString()), n(i), yc(i);
    },
    uEnc(i) {
      return typeof i != "string" && (i = i.toString()), r(i), yc(i);
    },
    dec(i, s) {
      return Zh(i, s);
    },
    uDec(i, s) {
      return Rl(i, s);
    }
  };
}
const de = ep();
var Fe;
(function(t) {
  t[t.Varint = 0] = "Varint", t[t.Bit64 = 1] = "Bit64", t[t.LengthDelimited = 2] = "LengthDelimited", t[t.StartGroup = 3] = "StartGroup", t[t.EndGroup = 4] = "EndGroup", t[t.Bit32 = 5] = "Bit32";
})(Fe || (Fe = {}));
class tp {
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
    for (eu(e); e > 127; )
      this.buf.push(e & 127 | 128), e = e >>> 7;
    return this.buf.push(e), this;
  }
  /**
   * Write a `int32` value, a signed 32 bit varint.
   */
  int32(e) {
    return Po(e), Ec(e, this.buf), this;
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
    $l(e);
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
    eu(e);
    let n = new Uint8Array(4);
    return new DataView(n.buffer).setUint32(0, e, !0), this.raw(n);
  }
  /**
   * Write a `sfixed32` value, a signed, fixed-length 32-bit integer.
   */
  sfixed32(e) {
    Po(e);
    let n = new Uint8Array(4);
    return new DataView(n.buffer).setInt32(0, e, !0), this.raw(n);
  }
  /**
   * Write a `sint32` value, a signed, zigzag-encoded 32-bit varint.
   */
  sint32(e) {
    return Po(e), e = (e << 1 ^ e >> 31) >>> 0, Ec(e, this.buf), this;
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
    return ka(n.lo, n.hi, this.buf), this;
  }
  /**
   * Write a `sint64` value, a signed, zig-zag-encoded 64-bit varint.
   */
  sint64(e) {
    let n = de.enc(e), r = n.hi >> 31, i = n.lo << 1 ^ r, s = (n.hi << 1 | n.lo >>> 31) ^ r;
    return ka(i, s, this.buf), this;
  }
  /**
   * Write a `uint64` value, an unsigned 64-bit varint.
   */
  uint64(e) {
    let n = de.uEnc(e);
    return ka(n.lo, n.hi, this.buf), this;
  }
}
class np {
  constructor(e, n) {
    this.varint64 = Xh, this.uint32 = Qh, this.buf = e, this.len = e.length, this.pos = 0, this.view = new DataView(e.buffer, e.byteOffset, e.byteLength), this.textDecoder = n ?? new TextDecoder();
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
function tu(t, e) {
  return e instanceof x || !t.fieldWrapper ? e : t.fieldWrapper.wrapField(e);
}
J.DOUBLE, J.FLOAT, J.INT64, J.UINT64, J.INT32, J.UINT32, J.BOOL, J.STRING, J.BYTES;
function ui(t, e, n) {
  if (e === n)
    return !0;
  if (t == J.BYTES) {
    if (!(e instanceof Uint8Array) || !(n instanceof Uint8Array) || e.length !== n.length)
      return !1;
    for (let r = 0; r < e.length; r++)
      if (e[r] !== n[r])
        return !1;
    return !0;
  }
  switch (t) {
    case J.UINT64:
    case J.FIXED64:
    case J.INT64:
    case J.SFIXED64:
    case J.SINT64:
      return e == n;
  }
  return !1;
}
function nu(t) {
  switch (t) {
    case J.BOOL:
      return !1;
    case J.UINT64:
    case J.FIXED64:
    case J.INT64:
    case J.SFIXED64:
    case J.SINT64:
      return de.zero;
    case J.DOUBLE:
    case J.FLOAT:
      return 0;
    case J.BYTES:
      return new Uint8Array(0);
    case J.STRING:
      return "";
    default:
      return 0;
  }
}
function Wl(t, e) {
  const n = e === void 0;
  let r = Fe.Varint, i = e === 0;
  switch (t) {
    case J.STRING:
      i = n || !e.length, r = Fe.LengthDelimited;
      break;
    case J.BOOL:
      i = e === !1;
      break;
    case J.DOUBLE:
      r = Fe.Bit64;
      break;
    case J.FLOAT:
      r = Fe.Bit32;
      break;
    case J.INT64:
      i = n || e == 0;
      break;
    case J.UINT64:
      i = n || e == 0;
      break;
    case J.FIXED64:
      i = n || e == 0, r = Fe.Bit64;
      break;
    case J.BYTES:
      i = n || !e.byteLength, r = Fe.LengthDelimited;
      break;
    case J.FIXED32:
      r = Fe.Bit32;
      break;
    case J.SFIXED32:
      r = Fe.Bit32;
      break;
    case J.SFIXED64:
      i = n || e == 0, r = Fe.Bit64;
      break;
    case J.SINT64:
      i = n || e == 0;
      break;
  }
  const s = J[t].toLowerCase();
  return [r, s, n || i];
}
const ji = Symbol("@bufbuild/protobuf/unknown-fields"), bc = {
  readUnknownFields: !0,
  readerFactory: (t) => new np(t)
}, Nc = {
  writeUnknownFields: !0,
  writerFactory: () => new tp()
};
function rp(t) {
  return t ? Object.assign(Object.assign({}, bc), t) : bc;
}
function ip(t) {
  return t ? Object.assign(Object.assign({}, Nc), t) : Nc;
}
function sp() {
  return {
    makeReadOptions: rp,
    makeWriteOptions: ip,
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
        const [u, c] = e.tag(), f = i.fields.find(u);
        if (!f) {
          const y = e.skip(c);
          r.readUnknownFields && this.onUnknownField(t, u, c, y);
          continue;
        }
        let m = t, h = f.repeated, g = f.localName;
        switch (f.oneof && (m = m[f.oneof.localName], m.case != g && delete m.value, m.case = g, g = "value"), f.kind) {
          case "scalar":
          case "enum":
            const y = f.kind == "enum" ? J.INT32 : f.T;
            if (h) {
              let $ = m[g];
              if (c == Fe.LengthDelimited && y != J.STRING && y != J.BYTES) {
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
            h ? m[g].push(Mo(e, new b(), r)) : m[g] instanceof x ? Mo(e, m[g], r) : (m[g] = Mo(e, new b(), r), b.fieldWrapper && !f.oneof && !f.repeated && (m[g] = b.fieldWrapper.unwrapField(m[g])));
            break;
          case "map":
            let [S, U] = op(f, e, r);
            m[g][S] = U;
            break;
        }
      }
    }
  };
}
function Mo(t, e, n) {
  return e.getType().runtime.bin.readMessage(e, t, t.uint32(), n), e;
}
function op(t, e, n) {
  const r = e.uint32(), i = e.pos + r;
  let s, u;
  for (; e.pos < i; ) {
    let [c] = e.tag();
    switch (c) {
      case 1:
        s = ys(e, t.K);
        break;
      case 2:
        switch (t.V.kind) {
          case "scalar":
            u = ys(e, t.V.T);
            break;
          case "enum":
            u = e.int32();
            break;
          case "message":
            u = Mo(e, new t.V.T(), n);
            break;
        }
        break;
    }
  }
  if (s === void 0) {
    let c = nu(t.K);
    s = t.K == J.BOOL ? c.toString() : c;
  }
  if (typeof s != "string" && typeof s != "number" && (s = s.toString()), u === void 0)
    switch (t.V.kind) {
      case "scalar":
        u = nu(t.V.T);
        break;
      case "enum":
        u = 0;
        break;
      case "message":
        u = new t.V.T();
        break;
    }
  return [s, u];
}
function ys(t, e) {
  switch (e) {
    case J.STRING:
      return t.string();
    case J.BOOL:
      return t.bool();
    case J.DOUBLE:
      return t.double();
    case J.FLOAT:
      return t.float();
    case J.INT32:
      return t.int32();
    case J.INT64:
      return t.int64();
    case J.UINT64:
      return t.uint64();
    case J.FIXED64:
      return t.fixed64();
    case J.BYTES:
      return t.bytes();
    case J.FIXED32:
      return t.fixed32();
    case J.SFIXED32:
      return t.sfixed32();
    case J.SFIXED64:
      return t.sfixed64();
    case J.SINT64:
      return t.sint64();
    case J.UINT32:
      return t.uint32();
    case J.SINT32:
      return t.sint32();
  }
}
function ap(t, e, n, r, i) {
  t.tag(n.no, Fe.LengthDelimited), t.fork();
  let s = r;
  switch (n.K) {
    case J.INT32:
    case J.FIXED32:
    case J.UINT32:
    case J.SFIXED32:
    case J.SINT32:
      s = Number.parseInt(r);
      break;
    case J.BOOL:
      Qe(r == "true" || r == "false"), s = r == "true";
      break;
  }
  switch (Ts(t, n.K, 1, s, !0), n.V.kind) {
    case "scalar":
      Ts(t, n.V.T, 2, i, !0);
      break;
    case "enum":
      Ts(t, J.INT32, 2, i, !0);
      break;
    case "message":
      ru(t, e, n.V.T, 2, i);
      break;
  }
  t.join();
}
function ru(t, e, n, r, i) {
  if (i !== void 0) {
    const s = tu(n, i);
    t.tag(r, Fe.LengthDelimited).bytes(s.toBinary(e));
  }
}
function Ts(t, e, n, r, i) {
  let [s, u, c] = Wl(e, r);
  (!c || i) && t.tag(n, s)[u](r);
}
function up(t, e, n, r) {
  if (!r.length)
    return;
  t.tag(n, Fe.LengthDelimited).fork();
  let [, i] = Wl(e);
  for (let s = 0; s < r.length; s++)
    t[i](r[s]);
  t.join();
}
function cp() {
  return Object.assign(Object.assign({}, sp()), { writeMessage(t, e, n) {
    const r = t.getType();
    for (const i of r.fields.byNumber()) {
      let s, u = i.repeated, c = i.localName;
      if (i.oneof) {
        const f = t[i.oneof.localName];
        if (f.case !== c)
          continue;
        s = f.value;
      } else
        s = t[c];
      switch (i.kind) {
        case "scalar":
        case "enum":
          let f = i.kind == "enum" ? J.INT32 : i.T;
          if (u)
            if (i.packed)
              up(e, f, i.no, s);
            else
              for (const m of s)
                Ts(e, f, i.no, m, !0);
          else
            s !== void 0 && Ts(e, f, i.no, s, !!i.oneof || i.opt);
          break;
        case "message":
          if (u)
            for (const m of s)
              ru(e, n, i.T, i.no, m);
          else
            ru(e, n, i.T, i.no, s);
          break;
        case "map":
          for (const [m, h] of Object.entries(s))
            ap(e, n, i, m, h);
          break;
      }
    }
    return n.writeUnknownFields && this.writeUnknownFields(t, e), e;
  } });
}
let Rt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), wa = [];
for (let t = 0; t < Rt.length; t++)
  wa[Rt[t].charCodeAt(0)] = t;
wa["-".charCodeAt(0)] = Rt.indexOf("+");
wa["_".charCodeAt(0)] = Rt.indexOf("/");
const Yl = {
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
    let n = new Uint8Array(e), r = 0, i = 0, s, u = 0;
    for (let c = 0; c < t.length; c++) {
      if (s = wa[t.charCodeAt(c)], s === void 0)
        switch (t[c]) {
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
          u = s, i = 1;
          break;
        case 1:
          n[r++] = u << 2 | (s & 48) >> 4, u = s, i = 2;
          break;
        case 2:
          n[r++] = (u & 15) << 4 | (s & 60) >> 2, u = s, i = 3;
          break;
        case 3:
          n[r++] = (u & 3) << 6 | s, i = 0;
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
}, xc = {
  ignoreUnknownFields: !1
}, Bc = {
  emitDefaultValues: !1,
  enumAsInteger: !1,
  useProtoFieldName: !1,
  prettySpaces: 0
};
function lp(t) {
  return t ? Object.assign(Object.assign({}, xc), t) : xc;
}
function fp(t) {
  return t ? Object.assign(Object.assign({}, Bc), t) : Bc;
}
function dp(t) {
  const e = t(mp, Ic);
  return {
    makeReadOptions: lp,
    makeWriteOptions: fp,
    readMessage(n, r, i, s) {
      if (r == null || Array.isArray(r) || typeof r != "object")
        throw new Error(`cannot decode message ${n.typeName} from JSON: ${this.debug(r)}`);
      s = s ?? new n();
      const u = {};
      for (const [c, f] of Object.entries(r)) {
        const m = n.fields.findJsonName(c);
        if (!m) {
          if (!i.ignoreUnknownFields)
            throw new Error(`cannot decode message ${n.typeName} from JSON: key "${c}" is unknown`);
          continue;
        }
        let h = m.localName, g = s;
        if (m.oneof) {
          if (f === null && m.kind == "scalar")
            continue;
          const y = u[m.oneof.localName];
          if (y)
            throw new Error(`cannot decode message ${n.typeName} from JSON: multiple keys for oneof "${m.oneof.name}" present: "${y}", "${c}"`);
          u[m.oneof.localName] = c, g = g[m.oneof.localName] = { case: h }, h = "value";
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
                if (S = Sa(m.T, b, i.ignoreUnknownFields), S === void 0)
                  continue;
                break;
              case "scalar":
                try {
                  S = us(m.T, b);
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
                if (U = Sa(m.V.T, S, i.ignoreUnknownFields), U === void 0)
                  continue;
                break;
              case "scalar":
                try {
                  U = us(m.V.T, S);
                } catch ($) {
                  let R = `cannot decode map value for field ${n.typeName}.${m.name} from JSON: ${this.debug(f)}`;
                  throw $ instanceof Error && $.message.length > 0 && (R += `: ${$.message}`), new Error(R);
                }
                break;
            }
            try {
              y[us(m.K, m.K == J.BOOL ? b == "true" ? !0 : b == "false" ? !1 : b : b).toString()] = U;
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
                  throw new Error(`cannot decode field ${n.typeName}.${m.name} from JSON: null is invalid for oneof field "${c}"`);
                continue;
              }
              g[h] instanceof x ? g[h].fromJson(f, i) : (g[h] = y.fromJson(f, i), y.fieldWrapper && !m.oneof && (g[h] = y.fieldWrapper.unwrapField(g[h])));
              break;
            case "enum":
              const b = Sa(m.T, f, i.ignoreUnknownFields);
              b !== void 0 && (g[h] = b);
              break;
            case "scalar":
              try {
                g[h] = us(m.T, f);
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
      let u;
      try {
        for (const c of i.fields.byMember()) {
          let f;
          if (c.kind == "oneof") {
            const m = n[c.localName];
            if (m.value === void 0)
              continue;
            if (u = c.findField(m.case), !u)
              throw "oneof case not found: " + m.case;
            f = e(u, m.value, r);
          } else
            u = c, f = e(u, n[u.localName], r);
          f !== void 0 && (s[r.useProtoFieldName ? u.name : u.jsonName] = f);
        }
      } catch (c) {
        const f = u ? `cannot encode field ${i.typeName}.${u.name} to JSON` : `cannot encode message ${i.typeName} to JSON`, m = c instanceof Error ? c.message : String(c);
        throw new Error(f + (m.length > 0 ? `: ${m}` : ""));
      }
      return s;
    },
    readScalar: us,
    writeScalar: Ic,
    debug: Xl
  };
}
function Xl(t) {
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
function us(t, e) {
  switch (t) {
    case J.DOUBLE:
    case J.FLOAT:
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
      return t == J.FLOAT && $l(n), n;
    case J.INT32:
    case J.FIXED32:
    case J.SFIXED32:
    case J.SINT32:
    case J.UINT32:
      if (e === null)
        return 0;
      let r;
      if (typeof e == "number" ? r = e : typeof e == "string" && e.length > 0 && e.trim().length === e.length && (r = Number(e)), r === void 0)
        break;
      return t == J.UINT32 ? eu(r) : Po(r), r;
    case J.INT64:
    case J.SFIXED64:
    case J.SINT64:
      if (e === null)
        return de.zero;
      if (typeof e != "number" && typeof e != "string")
        break;
      return de.parse(e);
    case J.FIXED64:
    case J.UINT64:
      if (e === null)
        return de.zero;
      if (typeof e != "number" && typeof e != "string")
        break;
      return de.uParse(e);
    case J.BOOL:
      if (e === null)
        return !1;
      if (typeof e != "boolean")
        break;
      return e;
    case J.STRING:
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
    case J.BYTES:
      if (e === null || e === "")
        return new Uint8Array(0);
      if (typeof e != "string")
        break;
      return Yl.dec(e);
  }
  throw new Error();
}
function Sa(t, e, n) {
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
  throw new Error(`cannot decode enum ${t.typeName} from JSON: ${Xl(e)}`);
}
function mp(t, e, n, r) {
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
function Ic(t, e, n) {
  if (e !== void 0)
    switch (t) {
      case J.INT32:
      case J.SFIXED32:
      case J.SINT32:
      case J.FIXED32:
      case J.UINT32:
        return Qe(typeof e == "number"), e != 0 || n ? e : void 0;
      case J.FLOAT:
      case J.DOUBLE:
        return Qe(typeof e == "number"), Number.isNaN(e) ? "NaN" : e === Number.POSITIVE_INFINITY ? "Infinity" : e === Number.NEGATIVE_INFINITY ? "-Infinity" : e !== 0 || n ? e : void 0;
      case J.STRING:
        return Qe(typeof e == "string"), e.length > 0 || n ? e : void 0;
      case J.BOOL:
        return Qe(typeof e == "boolean"), e || n ? e : void 0;
      case J.UINT64:
      case J.FIXED64:
      case J.INT64:
      case J.SFIXED64:
      case J.SINT64:
        return Qe(typeof e == "bigint" || typeof e == "string" || typeof e == "number"), n || e != 0 ? e.toString(10) : void 0;
      case J.BYTES:
        return Qe(e instanceof Uint8Array), n || e.byteLength > 0 ? Yl.enc(e) : void 0;
    }
}
function hp() {
  return dp((t, e) => function(r, i, s) {
    if (r.kind == "map") {
      const u = {};
      switch (r.V.kind) {
        case "scalar":
          for (const [f, m] of Object.entries(i)) {
            const h = e(r.V.T, m, !0);
            Qe(h !== void 0), u[f.toString()] = h;
          }
          break;
        case "message":
          for (const [f, m] of Object.entries(i))
            u[f.toString()] = m.toJson(s);
          break;
        case "enum":
          const c = r.V.T;
          for (const [f, m] of Object.entries(i)) {
            Qe(m === void 0 || typeof m == "number");
            const h = t(c, m, !0, s.enumAsInteger);
            Qe(h !== void 0), u[f.toString()] = h;
          }
          break;
      }
      return s.emitDefaultValues || Object.keys(u).length > 0 ? u : void 0;
    } else if (r.repeated) {
      const u = [];
      switch (r.kind) {
        case "scalar":
          for (let c = 0; c < i.length; c++)
            u.push(e(r.T, i[c], !0));
          break;
        case "enum":
          for (let c = 0; c < i.length; c++)
            u.push(t(r.T, i[c], !0, s.enumAsInteger));
          break;
        case "message":
          for (let c = 0; c < i.length; c++)
            u.push(tu(r.T, i[c]).toJson(s));
          break;
      }
      return s.emitDefaultValues || u.length > 0 ? u : void 0;
    } else
      switch (r.kind) {
        case "scalar":
          return e(r.T, i, !!r.oneof || r.opt || s.emitDefaultValues);
        case "enum":
          return t(r.T, i, !!r.oneof || r.opt || s.emitDefaultValues, s.enumAsInteger);
        case "message":
          return i !== void 0 ? tu(r.T, i).toJson(s) : void 0;
      }
  });
}
function pp() {
  return {
    setEnumType: Vl,
    initPartial(t, e) {
      if (t === void 0)
        return;
      const n = e.getType();
      for (const r of n.fields.byMember()) {
        const i = r.localName, s = e, u = t;
        if (u[i] !== void 0)
          switch (r.kind) {
            case "oneof":
              const c = u[i].case;
              if (c === void 0)
                continue;
              const f = r.findField(c);
              let m = u[i].value;
              f && f.kind == "message" && !(m instanceof f.T) ? m = new f.T(m) : f && f.kind === "scalar" && f.T === J.BYTES && (m = cs(m)), s[i] = { case: c, value: m };
              break;
            case "scalar":
            case "enum":
              let h = u[i];
              r.T === J.BYTES && (h = r.repeated ? h.map(cs) : cs(h)), s[i] = h;
              break;
            case "map":
              switch (r.V.kind) {
                case "scalar":
                case "enum":
                  if (r.V.T === J.BYTES)
                    for (const [b, S] of Object.entries(u[i]))
                      s[i][b] = cs(S);
                  else
                    Object.assign(s[i], u[i]);
                  break;
                case "message":
                  const y = r.V.T;
                  for (const b of Object.keys(u[i])) {
                    let S = u[i][b];
                    y.fieldWrapper || (S = new y(S)), s[i][b] = S;
                  }
                  break;
              }
              break;
            case "message":
              const g = r.T;
              if (r.repeated)
                s[i] = u[i].map((y) => y instanceof g ? y : new g(y));
              else if (u[i] !== void 0) {
                const y = u[i];
                g.fieldWrapper ? /* We can't use BytesValue.typeName as that will create a circular import */ g.typeName === "google.protobuf.BytesValue" ? s[i] = cs(y) : s[i] = y : s[i] = y instanceof g ? y : new g(y);
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
              return i.every((u, c) => r.T.equals(u, s[c]));
            case "scalar":
              return i.every((u, c) => ui(r.T, u, s[c]));
            case "enum":
              return i.every((u, c) => ui(J.INT32, u, s[c]));
          }
          throw new Error(`repeated cannot contain ${r.kind}`);
        }
        switch (r.kind) {
          case "message":
            return r.T.equals(i, s);
          case "enum":
            return ui(J.INT32, i, s);
          case "scalar":
            return ui(r.T, i, s);
          case "oneof":
            if (i.case !== s.case)
              return !1;
            const u = r.findField(i.case);
            if (u === void 0)
              return !0;
            switch (u.kind) {
              case "message":
                return u.T.equals(i.value, s.value);
              case "enum":
                return ui(J.INT32, i.value, s.value);
              case "scalar":
                return ui(u.T, i.value, s.value);
            }
            throw new Error(`oneof cannot contain ${u.kind}`);
          case "map":
            const c = Object.keys(i).concat(Object.keys(s));
            switch (r.V.kind) {
              case "message":
                const f = r.V.T;
                return c.every((h) => f.equals(i[h], s[h]));
              case "enum":
                return c.every((h) => ui(J.INT32, i[h], s[h]));
              case "scalar":
                const m = r.V.T;
                return c.every((h) => ui(m, i[h], s[h]));
            }
            break;
        }
      });
    },
    clone(t) {
      const e = t.getType(), n = new e(), r = n;
      for (const i of e.fields.byMember()) {
        const s = t[i.localName];
        let u;
        if (i.repeated)
          u = s.map(vo);
        else if (i.kind == "map") {
          u = r[i.localName];
          for (const [c, f] of Object.entries(s))
            u[c] = vo(f);
        } else
          i.kind == "oneof" ? u = i.findField(s.case) ? { case: s.case, value: vo(s.value) } : { case: void 0 } : u = vo(s);
        r[i.localName] = u;
      }
      return n;
    }
  };
}
function vo(t) {
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
function cs(t) {
  return t instanceof Uint8Array ? t : new Uint8Array(t);
}
class gp {
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
function Zl(t, e) {
  const n = Gl(t);
  return e ? n : Np(bp(n));
}
function wp(t) {
  return Zl(t, !1);
}
const yp = Gl;
function Gl(t) {
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
const Tp = /* @__PURE__ */ new Set([
  // names reserved by JavaScript
  "constructor",
  "toString",
  "toJSON",
  "valueOf"
]), Ep = /* @__PURE__ */ new Set([
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
]), Ql = (t) => `${t}$`, bp = (t) => Ep.has(t) ? Ql(t) : t, Np = (t) => Tp.has(t) ? Ql(t) : t;
class xp {
  constructor(e) {
    this.kind = "oneof", this.repeated = !1, this.packed = !1, this.opt = !1, this.default = void 0, this.fields = [], this.name = e, this.localName = wp(e);
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
const o = Yh("proto3", hp(), cp(), Object.assign(Object.assign({}, pp()), {
  newFieldList(t) {
    return new gp(t, Bp);
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
          r[n] = nu(e.T);
          break;
      }
    }
  }
}));
function Bp(t) {
  var e, n, r;
  const i = [];
  let s;
  for (const u of typeof t == "function" ? t() : t) {
    const c = u;
    if (c.localName = Zl(u.name, u.oneof !== void 0), c.jsonName = (e = u.jsonName) !== null && e !== void 0 ? e : yp(u.name), c.repeated = (n = u.repeated) !== null && n !== void 0 ? n : !1, c.packed = (r = u.packed) !== null && r !== void 0 ? r : u.kind == "enum" || u.kind == "scalar" && u.T != J.BYTES && u.T != J.STRING, u.oneof !== void 0) {
      const f = typeof u.oneof == "string" ? u.oneof : u.oneof.name;
      (!s || s.name != f) && (s = new xp(f)), c.oneof = s, s.addField(c);
    }
    i.push(c);
  }
  return i;
}
var ge;
(function(t) {
  t[t.Unary = 0] = "Unary", t[t.ServerStreaming = 1] = "ServerStreaming", t[t.ClientStreaming = 2] = "ClientStreaming", t[t.BiDiStreaming = 3] = "BiDiStreaming";
})(ge || (ge = {}));
var Oc;
(function(t) {
  t[t.NoSideEffects = 1] = "NoSideEffects", t[t.Idempotent = 2] = "Idempotent";
})(Oc || (Oc = {}));
class Je extends x {
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
    return Je.fromDate(/* @__PURE__ */ new Date());
  }
  static fromDate(e) {
    const n = e.getTime();
    return new Je({
      seconds: de.parse(Math.floor(n / 1e3)),
      nanos: n % 1e3 * 1e6
    });
  }
  static fromBinary(e, n) {
    return new Je().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new Je().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new Je().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(Je, e, n);
  }
}
Je.runtime = o;
Je.typeName = "google.protobuf.Timestamp";
Je.fields = o.util.newFieldList(() => [
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
class Jt extends x {
  constructor(e) {
    super(), this.value = new Uint8Array(0), o.util.initPartial(e, this);
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
Jt.typeName = "code.common.v1.Transaction";
Jt.fields = o.util.newFieldList(() => [
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
class ct extends x {
  constructor(e) {
    super(), this.value = new Uint8Array(0), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new ct().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new ct().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new ct().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(ct, e, n);
  }
}
ct.runtime = o;
ct.typeName = "code.common.v1.UserId";
ct.fields = o.util.newFieldList(() => [
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
    super(), this.result = Js.OK, o.util.initPartial(e, this);
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
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(Js) },
  { no: 2, name: "metadata", kind: "message", T: wt }
]);
var Js;
(function(t) {
  t[t.OK = 0] = "OK", t[t.NOT_FOUND = 1] = "NOT_FOUND";
})(Js || (Js = {}));
o.util.setEnumType(Js, "code.transaction.v2.GetIntentMetadataResponse.Result", [
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
    super(), this.result = vs.OK, this.status = Fs.UNKNOWN, o.util.initPartial(e, this);
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
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(vs) },
  { no: 2, name: "status", kind: "enum", T: o.getEnumType(Fs) }
]);
var vs;
(function(t) {
  t[t.OK = 0] = "OK", t[t.INTENT_NOT_FOUND = 1] = "INTENT_NOT_FOUND", t[t.ACTION_NOT_FOUND = 2] = "ACTION_NOT_FOUND", t[t.INVALID_ACTION = 3] = "INVALID_ACTION";
})(vs || (vs = {}));
o.util.setEnumType(vs, "code.transaction.v2.GetPrivacyUpgradeStatusResponse.Result", [
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
class un extends x {
  constructor(e) {
    super(), this.limit = 0, o.util.initPartial(e, this);
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
un.typeName = "code.transaction.v2.GetPrioritizedIntentsForPrivacyUpgradeRequest";
un.fields = o.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: z },
  { no: 2, name: "limit", kind: "scalar", T: 13 },
  { no: 3, name: "signature", kind: "message", T: ye }
]);
class cn extends x {
  constructor(e) {
    super(), this.result = As.OK, this.items = [], o.util.initPartial(e, this);
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
cn.typeName = "code.transaction.v2.GetPrioritizedIntentsForPrivacyUpgradeResponse";
cn.fields = o.util.newFieldList(() => [
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
  { no: 3, name: "consumed_since", kind: "message", T: Je }
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
  { no: 5, name: "no_privacy_transfer", kind: "message", T: Jn, oneof: "type" },
  { no: 6, name: "no_privacy_withdraw", kind: "message", T: vn, oneof: "type" },
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
class Jn extends x {
  constructor(e) {
    super(), this.amount = de.zero, o.util.initPartial(e, this);
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
Jn.typeName = "code.transaction.v2.NoPrivacyTransferAction";
Jn.fields = o.util.newFieldList(() => [
  { no: 1, name: "authority", kind: "message", T: z },
  { no: 2, name: "source", kind: "message", T: z },
  { no: 3, name: "destination", kind: "message", T: z },
  { no: 4, name: "amount", kind: "scalar", T: 4 }
]);
class vn extends x {
  constructor(e) {
    super(), this.amount = de.zero, this.shouldClose = !1, o.util.initPartial(e, this);
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
vn.typeName = "code.transaction.v2.NoPrivacyWithdrawAction";
vn.fields = o.util.newFieldList(() => [
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
  { no: 2, name: "expected_transaction", kind: "message", T: Jt },
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
  { no: 1, name: "transaction_blob", kind: "message", T: Jt },
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
  { no: 6, name: "timestamp", kind: "message", T: Je },
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
class vt extends x {
  constructor(e) {
    super(), this.currency = "", this.nativeAmount = 0, o.util.initPartial(e, this);
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
vt.typeName = "code.transaction.v2.ExchangeDataWithoutRate";
vt.fields = o.util.newFieldList(() => [
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
class ur extends x {
  constructor(e) {
    super(), this.includeOnlyInAppContacts = !1, o.util.initPartial(e, this);
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
ur.typeName = "code.contact.v1.GetContactsRequest";
ur.fields = o.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: z },
  { no: 2, name: "signature", kind: "message", T: ye },
  { no: 3, name: "container_id", kind: "message", T: nt },
  { no: 4, name: "page_token", kind: "message", T: Eo },
  { no: 5, name: "include_only_in_app_contacts", kind: "scalar", T: 8 }
]);
class cr extends x {
  constructor(e) {
    super(), this.result = zs.OK, this.contacts = [], o.util.initPartial(e, this);
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
cr.typeName = "code.contact.v1.GetContactsResponse";
cr.fields = o.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(zs) },
  { no: 2, name: "contacts", kind: "message", T: lr, repeated: !0 },
  { no: 3, name: "next_page_token", kind: "message", T: Eo }
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
let Eo = class ps extends x {
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
Eo.runtime = o;
Eo.typeName = "code.contact.v1.PageToken";
Eo.fields = o.util.newFieldList(() => [
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
  { no: 1, name: "timestamp", kind: "message", T: Je }
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
  { no: 2, name: "as_of", kind: "message", T: Je },
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
  { no: 3, name: "start", kind: "message", T: Je },
  { no: 4, name: "end", kind: "message", T: Je }
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
  { no: 1, name: "time", kind: "message", T: Je }
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
  { no: 1, name: "user_id", kind: "message", T: ct }
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
  { no: 1, name: "user", kind: "message", T: ct, oneof: "source" },
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
  { no: 1, name: "user_id", kind: "message", T: ct }
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
class Jr extends x {
  constructor(e) {
    super(), o.util.initPartial(e, this);
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
Jr.typeName = "code.messaging.v1.SendMessageRequest";
Jr.fields = o.util.newFieldList(() => [
  { no: 1, name: "message", kind: "message", T: lt },
  { no: 2, name: "rendezvous_key", kind: "message", T: ft },
  { no: 3, name: "signature", kind: "message", T: ye }
]);
class vr extends x {
  constructor(e) {
    super(), this.result = no.OK, o.util.initPartial(e, this);
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
vr.typeName = "code.messaging.v1.SendMessageResponse";
vr.fields = o.util.newFieldList(() => [
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
  { no: 3, name: "partial", kind: "message", T: vt, oneof: "exchange_data" }
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
  { no: 1, name: "timestamp", kind: "message", T: Je }
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
  { no: 1, name: "timestamp", kind: "message", T: Je }
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
  { no: 3, name: "timestamp", kind: "message", T: Je }
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
  { no: 1, name: "timestamp", kind: "message", T: Je },
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
  { no: 1, name: "timestamp", kind: "message", T: Je }
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
    super(), this.result = uo.OK, this.faqs = [], o.util.initPartial(e, this);
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
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(uo) },
  { no: 2, name: "faqs", kind: "message", T: Yr, repeated: !0 }
]);
var uo;
(function(t) {
  t[t.OK = 0] = "OK", t[t.LANG_UNAVAILABLE = 1] = "LANG_UNAVAILABLE";
})(uo || (uo = {}));
o.util.setEnumType(uo, "code.support.v1.GetFAQsResponse.Result", [
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
    super(), this.result = co.OK, this.metadata = { case: void 0 }, o.util.initPartial(e, this);
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
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(co) },
  { no: 2, name: "user", kind: "message", T: qt },
  { no: 3, name: "data_container_id", kind: "message", T: nt },
  { no: 5, name: "phone", kind: "message", T: Kt, oneof: "metadata" }
]);
var co;
(function(t) {
  t[t.OK = 0] = "OK", t[t.INVALID_TOKEN = 1] = "INVALID_TOKEN", t[t.RATE_LIMITED = 2] = "RATE_LIMITED";
})(co || (co = {}));
o.util.setEnumType(co, "code.user.v1.LinkAccountResponse.Result", [
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
  { no: 1, name: "id", kind: "message", T: ct },
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
function Ip(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Op(t) {
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
  var u = t.length, c = t.charAt(0), f = Math.log(u) / Math.log(256), m = Math.log(256) / Math.log(u);
  function h(b) {
    if (b instanceof Uint8Array || (ArrayBuffer.isView(b) ? b = new Uint8Array(b.buffer, b.byteOffset, b.byteLength) : Array.isArray(b) && (b = Uint8Array.from(b))), !(b instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (b.length === 0)
      return "";
    for (var S = 0, U = 0, $ = 0, R = b.length; $ !== R && b[$] === 0; )
      $++, S++;
    for (var ae = (R - $) * m + 1 >>> 0, L = new Uint8Array(ae); $ !== R; ) {
      for (var Z = b[$], F = 0, X = ae - 1; (Z !== 0 || F < U) && X !== -1; X--, F++)
        Z += 256 * L[X] >>> 0, L[X] = Z % u >>> 0, Z = Z / u >>> 0;
      if (Z !== 0)
        throw new Error("Non-zero carry");
      U = F, $++;
    }
    for (var ne = ae - U; ne !== ae && L[ne] === 0; )
      ne++;
    for (var ue = c.repeat(S); ne < ae; ++ne)
      ue += t.charAt(L[ne]);
    return ue;
  }
  function g(b) {
    if (typeof b != "string")
      throw new TypeError("Expected String");
    if (b.length === 0)
      return new Uint8Array();
    for (var S = 0, U = 0, $ = 0; b[S] === c; )
      U++, S++;
    for (var R = (b.length - S) * f + 1 >>> 0, ae = new Uint8Array(R); b[S]; ) {
      var L = e[b.charCodeAt(S)];
      if (L === 255)
        return;
      for (var Z = 0, F = R - 1; (L !== 0 || Z < $) && F !== -1; F--, Z++)
        L += u * ae[F] >>> 0, ae[F] = L % 256 >>> 0, L = L / 256 >>> 0;
      if (L !== 0)
        throw new Error("Non-zero carry");
      $ = Z, S++;
    }
    for (var X = R - $; X !== R && ae[X] === 0; )
      X++;
    for (var ne = new Uint8Array(U + (R - X)), ue = U; X !== R; )
      ne[ue++] = ae[X++];
    return ne;
  }
  function y(b) {
    var S = g(b);
    if (S)
      return S;
    throw new Error("Non-base" + u + " character");
  }
  return {
    encode: h,
    decodeUnsafe: g,
    decode: y
  };
}
var kp = Op;
const Sp = kp, Jp = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
var vp = Sp(Jp);
const ea = /* @__PURE__ */ Ip(vp);
function Fp(t, ...e) {
  if (!(t instanceof Uint8Array))
    throw new Error("Expected Uint8Array");
  if (e.length > 0 && !e.includes(t.length))
    throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`);
}
function kc(t, e = !0) {
  if (t.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (e && t.finished)
    throw new Error("Hash#digest() has already been called");
}
function Ap(t, e) {
  Fp(t);
  const n = e.outputLen;
  if (t.length < n)
    throw new Error(`digestInto() expects output buffer of length at least ${n}`);
}
const Ja = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const ef = (t) => t instanceof Uint8Array, va = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength), xt = (t, e) => t << 32 - e | t >>> e, Up = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!Up)
  throw new Error("Non little-endian hardware is not supported");
function tf(t) {
  if (typeof t != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof t}`);
  return new Uint8Array(new TextEncoder().encode(t));
}
function nf(t) {
  if (typeof t == "string" && (t = tf(t)), !ef(t))
    throw new Error(`expected Uint8Array, got ${typeof t}`);
  return t;
}
function Lp(...t) {
  const e = new Uint8Array(t.reduce((r, i) => r + i.length, 0));
  let n = 0;
  return t.forEach((r) => {
    if (!ef(r))
      throw new Error("Uint8Array expected");
    e.set(r, n), n += r.length;
  }), e;
}
class Cp {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
}
function rf(t) {
  const e = (r) => t().update(nf(r)).digest(), n = t();
  return e.outputLen = n.outputLen, e.blockLen = n.blockLen, e.create = () => t(), e;
}
function Dp(t = 32) {
  if (Ja && typeof Ja.getRandomValues == "function")
    return Ja.getRandomValues(new Uint8Array(t));
  throw new Error("crypto.getRandomValues must be defined");
}
function _p(t, e, n, r) {
  if (typeof t.setBigUint64 == "function")
    return t.setBigUint64(e, n, r);
  const i = BigInt(32), s = BigInt(4294967295), u = Number(n >> i & s), c = Number(n & s), f = r ? 4 : 0, m = r ? 0 : 4;
  t.setUint32(e + f, u, r), t.setUint32(e + m, c, r);
}
class sf extends Cp {
  constructor(e, n, r, i) {
    super(), this.blockLen = e, this.outputLen = n, this.padOffset = r, this.isLE = i, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(e), this.view = va(this.buffer);
  }
  update(e) {
    kc(this);
    const { view: n, buffer: r, blockLen: i } = this;
    e = nf(e);
    const s = e.length;
    for (let u = 0; u < s; ) {
      const c = Math.min(i - this.pos, s - u);
      if (c === i) {
        const f = va(e);
        for (; i <= s - u; u += i)
          this.process(f, u);
        continue;
      }
      r.set(e.subarray(u, u + c), this.pos), this.pos += c, u += c, this.pos === i && (this.process(n, 0), this.pos = 0);
    }
    return this.length += e.length, this.roundClean(), this;
  }
  digestInto(e) {
    kc(this), Ap(e, this), this.finished = !0;
    const { buffer: n, view: r, blockLen: i, isLE: s } = this;
    let { pos: u } = this;
    n[u++] = 128, this.buffer.subarray(u).fill(0), this.padOffset > i - u && (this.process(r, 0), u = 0);
    for (let g = u; g < i; g++)
      n[g] = 0;
    _p(r, i - 8, BigInt(this.length * 8), s), this.process(r, 0);
    const c = va(e), f = this.outputLen;
    if (f % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const m = f / 4, h = this.get();
    if (m > h.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let g = 0; g < m; g++)
      c.setUint32(4 * g, h[g], s);
  }
  digest() {
    const { buffer: e, outputLen: n } = this;
    this.digestInto(e);
    const r = e.slice(0, n);
    return this.destroy(), r;
  }
  _cloneInto(e) {
    e || (e = new this.constructor()), e.set(...this.get());
    const { blockLen: n, buffer: r, length: i, finished: s, destroyed: u, pos: c } = this;
    return e.length = i, e.pos = c, e.finished = s, e.destroyed = u, i % n && e.buffer.set(r), e;
  }
}
const qp = (t, e, n) => t & e ^ ~t & n, Kp = (t, e, n) => t & e ^ t & n ^ e & n, Pp = /* @__PURE__ */ new Uint32Array([
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
]), ci = /* @__PURE__ */ new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]), li = /* @__PURE__ */ new Uint32Array(64);
class $p extends sf {
  constructor() {
    super(64, 32, 8, !1), this.A = ci[0] | 0, this.B = ci[1] | 0, this.C = ci[2] | 0, this.D = ci[3] | 0, this.E = ci[4] | 0, this.F = ci[5] | 0, this.G = ci[6] | 0, this.H = ci[7] | 0;
  }
  get() {
    const { A: e, B: n, C: r, D: i, E: s, F: u, G: c, H: f } = this;
    return [e, n, r, i, s, u, c, f];
  }
  // prettier-ignore
  set(e, n, r, i, s, u, c, f) {
    this.A = e | 0, this.B = n | 0, this.C = r | 0, this.D = i | 0, this.E = s | 0, this.F = u | 0, this.G = c | 0, this.H = f | 0;
  }
  process(e, n) {
    for (let g = 0; g < 16; g++, n += 4)
      li[g] = e.getUint32(n, !1);
    for (let g = 16; g < 64; g++) {
      const y = li[g - 15], b = li[g - 2], S = xt(y, 7) ^ xt(y, 18) ^ y >>> 3, U = xt(b, 17) ^ xt(b, 19) ^ b >>> 10;
      li[g] = U + li[g - 7] + S + li[g - 16] | 0;
    }
    let { A: r, B: i, C: s, D: u, E: c, F: f, G: m, H: h } = this;
    for (let g = 0; g < 64; g++) {
      const y = xt(c, 6) ^ xt(c, 11) ^ xt(c, 25), b = h + y + qp(c, f, m) + Pp[g] + li[g] | 0, U = (xt(r, 2) ^ xt(r, 13) ^ xt(r, 22)) + Kp(r, i, s) | 0;
      h = m, m = f, f = c, c = u + b | 0, u = s, s = i, i = r, r = b + U | 0;
    }
    r = r + this.A | 0, i = i + this.B | 0, s = s + this.C | 0, u = u + this.D | 0, c = c + this.E | 0, f = f + this.F | 0, m = m + this.G | 0, h = h + this.H | 0, this.set(r, i, s, u, c, f, m, h);
  }
  roundClean() {
    li.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
const of = /* @__PURE__ */ rf(() => new $p());
var Au = {}, ya = {};
ya.byteLength = Hp;
ya.toByteArray = Rp;
ya.fromByteArray = Yp;
var St = [], ot = [], Mp = typeof Uint8Array < "u" ? Uint8Array : Array, Fa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var Ri = 0, Vp = Fa.length; Ri < Vp; ++Ri)
  St[Ri] = Fa[Ri], ot[Fa.charCodeAt(Ri)] = Ri;
ot["-".charCodeAt(0)] = 62;
ot["_".charCodeAt(0)] = 63;
function af(t) {
  var e = t.length;
  if (e % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var n = t.indexOf("=");
  n === -1 && (n = e);
  var r = n === e ? 0 : 4 - n % 4;
  return [n, r];
}
function Hp(t) {
  var e = af(t), n = e[0], r = e[1];
  return (n + r) * 3 / 4 - r;
}
function jp(t, e, n) {
  return (e + n) * 3 / 4 - n;
}
function Rp(t) {
  var e, n = af(t), r = n[0], i = n[1], s = new Mp(jp(t, r, i)), u = 0, c = i > 0 ? r - 4 : r, f;
  for (f = 0; f < c; f += 4)
    e = ot[t.charCodeAt(f)] << 18 | ot[t.charCodeAt(f + 1)] << 12 | ot[t.charCodeAt(f + 2)] << 6 | ot[t.charCodeAt(f + 3)], s[u++] = e >> 16 & 255, s[u++] = e >> 8 & 255, s[u++] = e & 255;
  return i === 2 && (e = ot[t.charCodeAt(f)] << 2 | ot[t.charCodeAt(f + 1)] >> 4, s[u++] = e & 255), i === 1 && (e = ot[t.charCodeAt(f)] << 10 | ot[t.charCodeAt(f + 1)] << 4 | ot[t.charCodeAt(f + 2)] >> 2, s[u++] = e >> 8 & 255, s[u++] = e & 255), s;
}
function zp(t) {
  return St[t >> 18 & 63] + St[t >> 12 & 63] + St[t >> 6 & 63] + St[t & 63];
}
function Wp(t, e, n) {
  for (var r, i = [], s = e; s < n; s += 3)
    r = (t[s] << 16 & 16711680) + (t[s + 1] << 8 & 65280) + (t[s + 2] & 255), i.push(zp(r));
  return i.join("");
}
function Yp(t) {
  for (var e, n = t.length, r = n % 3, i = [], s = 16383, u = 0, c = n - r; u < c; u += s)
    i.push(Wp(t, u, u + s > c ? c : u + s));
  return r === 1 ? (e = t[n - 1], i.push(
    St[e >> 2] + St[e << 4 & 63] + "=="
  )) : r === 2 && (e = (t[n - 2] << 8) + t[n - 1], i.push(
    St[e >> 10] + St[e >> 4 & 63] + St[e << 2 & 63] + "="
  )), i.join("");
}
var Uu = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
Uu.read = function(t, e, n, r, i) {
  var s, u, c = i * 8 - r - 1, f = (1 << c) - 1, m = f >> 1, h = -7, g = n ? i - 1 : 0, y = n ? -1 : 1, b = t[e + g];
  for (g += y, s = b & (1 << -h) - 1, b >>= -h, h += c; h > 0; s = s * 256 + t[e + g], g += y, h -= 8)
    ;
  for (u = s & (1 << -h) - 1, s >>= -h, h += r; h > 0; u = u * 256 + t[e + g], g += y, h -= 8)
    ;
  if (s === 0)
    s = 1 - m;
  else {
    if (s === f)
      return u ? NaN : (b ? -1 : 1) * (1 / 0);
    u = u + Math.pow(2, r), s = s - m;
  }
  return (b ? -1 : 1) * u * Math.pow(2, s - r);
};
Uu.write = function(t, e, n, r, i, s) {
  var u, c, f, m = s * 8 - i - 1, h = (1 << m) - 1, g = h >> 1, y = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, b = r ? 0 : s - 1, S = r ? 1 : -1, U = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
  for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (c = isNaN(e) ? 1 : 0, u = h) : (u = Math.floor(Math.log(e) / Math.LN2), e * (f = Math.pow(2, -u)) < 1 && (u--, f *= 2), u + g >= 1 ? e += y / f : e += y * Math.pow(2, 1 - g), e * f >= 2 && (u++, f /= 2), u + g >= h ? (c = 0, u = h) : u + g >= 1 ? (c = (e * f - 1) * Math.pow(2, i), u = u + g) : (c = e * Math.pow(2, g - 1) * Math.pow(2, i), u = 0)); i >= 8; t[n + b] = c & 255, b += S, c /= 256, i -= 8)
    ;
  for (u = u << i | c, m += i; m > 0; t[n + b] = u & 255, b += S, u /= 256, m -= 8)
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
  const e = ya, n = Uu, r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  t.Buffer = c, t.SlowBuffer = ae, t.INSPECT_MAX_BYTES = 50;
  const i = 2147483647;
  t.kMaxLength = i, c.TYPED_ARRAY_SUPPORT = s(), !c.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
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
  Object.defineProperty(c.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (c.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(c.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (c.isBuffer(this))
        return this.byteOffset;
    }
  });
  function u(d) {
    if (d > i)
      throw new RangeError('The value "' + d + '" is invalid for option "size"');
    const a = new Uint8Array(d);
    return Object.setPrototypeOf(a, c.prototype), a;
  }
  function c(d, a, l) {
    if (typeof d == "number") {
      if (typeof a == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return g(d);
    }
    return f(d, a, l);
  }
  c.poolSize = 8192;
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
      return c.from(p, a, l);
    const T = $(d);
    if (T)
      return T;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof d[Symbol.toPrimitive] == "function")
      return c.from(d[Symbol.toPrimitive]("string"), a, l);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof d
    );
  }
  c.from = function(d, a, l) {
    return f(d, a, l);
  }, Object.setPrototypeOf(c.prototype, Uint8Array.prototype), Object.setPrototypeOf(c, Uint8Array);
  function m(d) {
    if (typeof d != "number")
      throw new TypeError('"size" argument must be of type number');
    if (d < 0)
      throw new RangeError('The value "' + d + '" is invalid for option "size"');
  }
  function h(d, a, l) {
    return m(d), d <= 0 ? u(d) : a !== void 0 ? typeof l == "string" ? u(d).fill(a, l) : u(d).fill(a) : u(d);
  }
  c.alloc = function(d, a, l) {
    return h(d, a, l);
  };
  function g(d) {
    return m(d), u(d < 0 ? 0 : R(d) | 0);
  }
  c.allocUnsafe = function(d) {
    return g(d);
  }, c.allocUnsafeSlow = function(d) {
    return g(d);
  };
  function y(d, a) {
    if ((typeof a != "string" || a === "") && (a = "utf8"), !c.isEncoding(a))
      throw new TypeError("Unknown encoding: " + a);
    const l = L(d, a) | 0;
    let p = u(l);
    const T = p.write(d, a);
    return T !== l && (p = p.slice(0, T)), p;
  }
  function b(d) {
    const a = d.length < 0 ? 0 : R(d.length) | 0, l = u(a);
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
    return a === void 0 && l === void 0 ? p = new Uint8Array(d) : l === void 0 ? p = new Uint8Array(d, a) : p = new Uint8Array(d, a, l), Object.setPrototypeOf(p, c.prototype), p;
  }
  function $(d) {
    if (c.isBuffer(d)) {
      const a = R(d.length) | 0, l = u(a);
      return l.length === 0 || d.copy(l, 0, 0, a), l;
    }
    if (d.length !== void 0)
      return typeof d.length != "number" || H(d.length) ? u(0) : b(d);
    if (d.type === "Buffer" && Array.isArray(d.data))
      return b(d.data);
  }
  function R(d) {
    if (d >= i)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
    return d | 0;
  }
  function ae(d) {
    return +d != d && (d = 0), c.alloc(+d);
  }
  c.isBuffer = function(a) {
    return a != null && a._isBuffer === !0 && a !== c.prototype;
  }, c.compare = function(a, l) {
    if (O(a, Uint8Array) && (a = c.from(a, a.offset, a.byteLength)), O(l, Uint8Array) && (l = c.from(l, l.offset, l.byteLength)), !c.isBuffer(a) || !c.isBuffer(l))
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
  }, c.isEncoding = function(a) {
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
  }, c.concat = function(a, l) {
    if (!Array.isArray(a))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (a.length === 0)
      return c.alloc(0);
    let p;
    if (l === void 0)
      for (l = 0, p = 0; p < a.length; ++p)
        l += a[p].length;
    const T = c.allocUnsafe(l);
    let N = 0;
    for (p = 0; p < a.length; ++p) {
      let I = a[p];
      if (O(I, Uint8Array))
        N + I.length > T.length ? (c.isBuffer(I) || (I = c.from(I)), I.copy(T, N)) : Uint8Array.prototype.set.call(
          T,
          I,
          N
        );
      else if (c.isBuffer(I))
        I.copy(T, N);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      N += I.length;
    }
    return T;
  };
  function L(d, a) {
    if (c.isBuffer(d))
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
  c.byteLength = L;
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
  c.prototype._isBuffer = !0;
  function F(d, a, l) {
    const p = d[a];
    d[a] = d[l], d[l] = p;
  }
  c.prototype.swap16 = function() {
    const a = this.length;
    if (a % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let l = 0; l < a; l += 2)
      F(this, l, l + 1);
    return this;
  }, c.prototype.swap32 = function() {
    const a = this.length;
    if (a % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let l = 0; l < a; l += 4)
      F(this, l, l + 3), F(this, l + 1, l + 2);
    return this;
  }, c.prototype.swap64 = function() {
    const a = this.length;
    if (a % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let l = 0; l < a; l += 8)
      F(this, l, l + 7), F(this, l + 1, l + 6), F(this, l + 2, l + 5), F(this, l + 3, l + 4);
    return this;
  }, c.prototype.toString = function() {
    const a = this.length;
    return a === 0 ? "" : arguments.length === 0 ? Vt(this, 0, a) : Z.apply(this, arguments);
  }, c.prototype.toLocaleString = c.prototype.toString, c.prototype.equals = function(a) {
    if (!c.isBuffer(a))
      throw new TypeError("Argument must be a Buffer");
    return this === a ? !0 : c.compare(this, a) === 0;
  }, c.prototype.inspect = function() {
    let a = "";
    const l = t.INSPECT_MAX_BYTES;
    return a = this.toString("hex", 0, l).replace(/(.{2})/g, "$1 ").trim(), this.length > l && (a += " ... "), "<Buffer " + a + ">";
  }, r && (c.prototype[r] = c.prototype.inspect), c.prototype.compare = function(a, l, p, T, N) {
    if (O(a, Uint8Array) && (a = c.from(a, a.offset, a.byteLength)), !c.isBuffer(a))
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
    if (typeof a == "string" && (a = c.from(a, p)), c.isBuffer(a))
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
  c.prototype.includes = function(a, l, p) {
    return this.indexOf(a, l, p) !== -1;
  }, c.prototype.indexOf = function(a, l, p) {
    return X(this, a, l, p, !0);
  }, c.prototype.lastIndexOf = function(a, l, p) {
    return X(this, a, l, p, !1);
  };
  function ue(d, a, l, p) {
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
  c.prototype.write = function(a, l, p, T) {
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
          return ue(this, a, l, p);
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
  }, c.prototype.toJSON = function() {
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
  c.prototype.slice = function(a, l) {
    const p = this.length;
    a = ~~a, l = l === void 0 ? p : ~~l, a < 0 ? (a += p, a < 0 && (a = 0)) : a > p && (a = p), l < 0 ? (l += p, l < 0 && (l = 0)) : l > p && (l = p), l < a && (l = a);
    const T = this.subarray(a, l);
    return Object.setPrototypeOf(T, c.prototype), T;
  };
  function j(d, a, l) {
    if (d % 1 !== 0 || d < 0)
      throw new RangeError("offset is not uint");
    if (d + a > l)
      throw new RangeError("Trying to access beyond buffer length");
  }
  c.prototype.readUintLE = c.prototype.readUIntLE = function(a, l, p) {
    a = a >>> 0, l = l >>> 0, p || j(a, l, this.length);
    let T = this[a], N = 1, I = 0;
    for (; ++I < l && (N *= 256); )
      T += this[a + I] * N;
    return T;
  }, c.prototype.readUintBE = c.prototype.readUIntBE = function(a, l, p) {
    a = a >>> 0, l = l >>> 0, p || j(a, l, this.length);
    let T = this[a + --l], N = 1;
    for (; l > 0 && (N *= 256); )
      T += this[a + --l] * N;
    return T;
  }, c.prototype.readUint8 = c.prototype.readUInt8 = function(a, l) {
    return a = a >>> 0, l || j(a, 1, this.length), this[a];
  }, c.prototype.readUint16LE = c.prototype.readUInt16LE = function(a, l) {
    return a = a >>> 0, l || j(a, 2, this.length), this[a] | this[a + 1] << 8;
  }, c.prototype.readUint16BE = c.prototype.readUInt16BE = function(a, l) {
    return a = a >>> 0, l || j(a, 2, this.length), this[a] << 8 | this[a + 1];
  }, c.prototype.readUint32LE = c.prototype.readUInt32LE = function(a, l) {
    return a = a >>> 0, l || j(a, 4, this.length), (this[a] | this[a + 1] << 8 | this[a + 2] << 16) + this[a + 3] * 16777216;
  }, c.prototype.readUint32BE = c.prototype.readUInt32BE = function(a, l) {
    return a = a >>> 0, l || j(a, 4, this.length), this[a] * 16777216 + (this[a + 1] << 16 | this[a + 2] << 8 | this[a + 3]);
  }, c.prototype.readBigUInt64LE = V(function(a) {
    a = a >>> 0, w(a, "offset");
    const l = this[a], p = this[a + 7];
    (l === void 0 || p === void 0) && E(a, this.length - 8);
    const T = l + this[++a] * 2 ** 8 + this[++a] * 2 ** 16 + this[++a] * 2 ** 24, N = this[++a] + this[++a] * 2 ** 8 + this[++a] * 2 ** 16 + p * 2 ** 24;
    return BigInt(T) + (BigInt(N) << BigInt(32));
  }), c.prototype.readBigUInt64BE = V(function(a) {
    a = a >>> 0, w(a, "offset");
    const l = this[a], p = this[a + 7];
    (l === void 0 || p === void 0) && E(a, this.length - 8);
    const T = l * 2 ** 24 + this[++a] * 2 ** 16 + this[++a] * 2 ** 8 + this[++a], N = this[++a] * 2 ** 24 + this[++a] * 2 ** 16 + this[++a] * 2 ** 8 + p;
    return (BigInt(T) << BigInt(32)) + BigInt(N);
  }), c.prototype.readIntLE = function(a, l, p) {
    a = a >>> 0, l = l >>> 0, p || j(a, l, this.length);
    let T = this[a], N = 1, I = 0;
    for (; ++I < l && (N *= 256); )
      T += this[a + I] * N;
    return N *= 128, T >= N && (T -= Math.pow(2, 8 * l)), T;
  }, c.prototype.readIntBE = function(a, l, p) {
    a = a >>> 0, l = l >>> 0, p || j(a, l, this.length);
    let T = l, N = 1, I = this[a + --T];
    for (; T > 0 && (N *= 256); )
      I += this[a + --T] * N;
    return N *= 128, I >= N && (I -= Math.pow(2, 8 * l)), I;
  }, c.prototype.readInt8 = function(a, l) {
    return a = a >>> 0, l || j(a, 1, this.length), this[a] & 128 ? (255 - this[a] + 1) * -1 : this[a];
  }, c.prototype.readInt16LE = function(a, l) {
    a = a >>> 0, l || j(a, 2, this.length);
    const p = this[a] | this[a + 1] << 8;
    return p & 32768 ? p | 4294901760 : p;
  }, c.prototype.readInt16BE = function(a, l) {
    a = a >>> 0, l || j(a, 2, this.length);
    const p = this[a + 1] | this[a] << 8;
    return p & 32768 ? p | 4294901760 : p;
  }, c.prototype.readInt32LE = function(a, l) {
    return a = a >>> 0, l || j(a, 4, this.length), this[a] | this[a + 1] << 8 | this[a + 2] << 16 | this[a + 3] << 24;
  }, c.prototype.readInt32BE = function(a, l) {
    return a = a >>> 0, l || j(a, 4, this.length), this[a] << 24 | this[a + 1] << 16 | this[a + 2] << 8 | this[a + 3];
  }, c.prototype.readBigInt64LE = V(function(a) {
    a = a >>> 0, w(a, "offset");
    const l = this[a], p = this[a + 7];
    (l === void 0 || p === void 0) && E(a, this.length - 8);
    const T = this[a + 4] + this[a + 5] * 2 ** 8 + this[a + 6] * 2 ** 16 + (p << 24);
    return (BigInt(T) << BigInt(32)) + BigInt(l + this[++a] * 2 ** 8 + this[++a] * 2 ** 16 + this[++a] * 2 ** 24);
  }), c.prototype.readBigInt64BE = V(function(a) {
    a = a >>> 0, w(a, "offset");
    const l = this[a], p = this[a + 7];
    (l === void 0 || p === void 0) && E(a, this.length - 8);
    const T = (l << 24) + // Overflow
    this[++a] * 2 ** 16 + this[++a] * 2 ** 8 + this[++a];
    return (BigInt(T) << BigInt(32)) + BigInt(this[++a] * 2 ** 24 + this[++a] * 2 ** 16 + this[++a] * 2 ** 8 + p);
  }), c.prototype.readFloatLE = function(a, l) {
    return a = a >>> 0, l || j(a, 4, this.length), n.read(this, a, !0, 23, 4);
  }, c.prototype.readFloatBE = function(a, l) {
    return a = a >>> 0, l || j(a, 4, this.length), n.read(this, a, !1, 23, 4);
  }, c.prototype.readDoubleLE = function(a, l) {
    return a = a >>> 0, l || j(a, 8, this.length), n.read(this, a, !0, 52, 8);
  }, c.prototype.readDoubleBE = function(a, l) {
    return a = a >>> 0, l || j(a, 8, this.length), n.read(this, a, !1, 52, 8);
  };
  function Y(d, a, l, p, T, N) {
    if (!c.isBuffer(d))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (a > T || a < N)
      throw new RangeError('"value" argument is out of bounds');
    if (l + p > d.length)
      throw new RangeError("Index out of range");
  }
  c.prototype.writeUintLE = c.prototype.writeUIntLE = function(a, l, p, T) {
    if (a = +a, l = l >>> 0, p = p >>> 0, !T) {
      const ee = Math.pow(2, 8 * p) - 1;
      Y(this, a, l, p, ee, 0);
    }
    let N = 1, I = 0;
    for (this[l] = a & 255; ++I < p && (N *= 256); )
      this[l + I] = a / N & 255;
    return l + p;
  }, c.prototype.writeUintBE = c.prototype.writeUIntBE = function(a, l, p, T) {
    if (a = +a, l = l >>> 0, p = p >>> 0, !T) {
      const ee = Math.pow(2, 8 * p) - 1;
      Y(this, a, l, p, ee, 0);
    }
    let N = p - 1, I = 1;
    for (this[l + N] = a & 255; --N >= 0 && (I *= 256); )
      this[l + N] = a / I & 255;
    return l + p;
  }, c.prototype.writeUint8 = c.prototype.writeUInt8 = function(a, l, p) {
    return a = +a, l = l >>> 0, p || Y(this, a, l, 1, 255, 0), this[l] = a & 255, l + 1;
  }, c.prototype.writeUint16LE = c.prototype.writeUInt16LE = function(a, l, p) {
    return a = +a, l = l >>> 0, p || Y(this, a, l, 2, 65535, 0), this[l] = a & 255, this[l + 1] = a >>> 8, l + 2;
  }, c.prototype.writeUint16BE = c.prototype.writeUInt16BE = function(a, l, p) {
    return a = +a, l = l >>> 0, p || Y(this, a, l, 2, 65535, 0), this[l] = a >>> 8, this[l + 1] = a & 255, l + 2;
  }, c.prototype.writeUint32LE = c.prototype.writeUInt32LE = function(a, l, p) {
    return a = +a, l = l >>> 0, p || Y(this, a, l, 4, 4294967295, 0), this[l + 3] = a >>> 24, this[l + 2] = a >>> 16, this[l + 1] = a >>> 8, this[l] = a & 255, l + 4;
  }, c.prototype.writeUint32BE = c.prototype.writeUInt32BE = function(a, l, p) {
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
  c.prototype.writeBigUInt64LE = V(function(a, l = 0) {
    return re(this, a, l, BigInt(0), BigInt("0xffffffffffffffff"));
  }), c.prototype.writeBigUInt64BE = V(function(a, l = 0) {
    return me(this, a, l, BigInt(0), BigInt("0xffffffffffffffff"));
  }), c.prototype.writeIntLE = function(a, l, p, T) {
    if (a = +a, l = l >>> 0, !T) {
      const Be = Math.pow(2, 8 * p - 1);
      Y(this, a, l, p, Be - 1, -Be);
    }
    let N = 0, I = 1, ee = 0;
    for (this[l] = a & 255; ++N < p && (I *= 256); )
      a < 0 && ee === 0 && this[l + N - 1] !== 0 && (ee = 1), this[l + N] = (a / I >> 0) - ee & 255;
    return l + p;
  }, c.prototype.writeIntBE = function(a, l, p, T) {
    if (a = +a, l = l >>> 0, !T) {
      const Be = Math.pow(2, 8 * p - 1);
      Y(this, a, l, p, Be - 1, -Be);
    }
    let N = p - 1, I = 1, ee = 0;
    for (this[l + N] = a & 255; --N >= 0 && (I *= 256); )
      a < 0 && ee === 0 && this[l + N + 1] !== 0 && (ee = 1), this[l + N] = (a / I >> 0) - ee & 255;
    return l + p;
  }, c.prototype.writeInt8 = function(a, l, p) {
    return a = +a, l = l >>> 0, p || Y(this, a, l, 1, 127, -128), a < 0 && (a = 255 + a + 1), this[l] = a & 255, l + 1;
  }, c.prototype.writeInt16LE = function(a, l, p) {
    return a = +a, l = l >>> 0, p || Y(this, a, l, 2, 32767, -32768), this[l] = a & 255, this[l + 1] = a >>> 8, l + 2;
  }, c.prototype.writeInt16BE = function(a, l, p) {
    return a = +a, l = l >>> 0, p || Y(this, a, l, 2, 32767, -32768), this[l] = a >>> 8, this[l + 1] = a & 255, l + 2;
  }, c.prototype.writeInt32LE = function(a, l, p) {
    return a = +a, l = l >>> 0, p || Y(this, a, l, 4, 2147483647, -2147483648), this[l] = a & 255, this[l + 1] = a >>> 8, this[l + 2] = a >>> 16, this[l + 3] = a >>> 24, l + 4;
  }, c.prototype.writeInt32BE = function(a, l, p) {
    return a = +a, l = l >>> 0, p || Y(this, a, l, 4, 2147483647, -2147483648), a < 0 && (a = 4294967295 + a + 1), this[l] = a >>> 24, this[l + 1] = a >>> 16, this[l + 2] = a >>> 8, this[l + 3] = a & 255, l + 4;
  }, c.prototype.writeBigInt64LE = V(function(a, l = 0) {
    return re(this, a, l, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), c.prototype.writeBigInt64BE = V(function(a, l = 0) {
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
  c.prototype.writeFloatLE = function(a, l, p) {
    return he(this, a, l, !0, p);
  }, c.prototype.writeFloatBE = function(a, l, p) {
    return he(this, a, l, !1, p);
  };
  function fe(d, a, l, p, T) {
    return a = +a, l = l >>> 0, T || Ne(d, a, l, 8), n.write(d, a, l, p, 52, 8), l + 8;
  }
  c.prototype.writeDoubleLE = function(a, l, p) {
    return fe(this, a, l, !0, p);
  }, c.prototype.writeDoubleBE = function(a, l, p) {
    return fe(this, a, l, !1, p);
  }, c.prototype.copy = function(a, l, p, T) {
    if (!c.isBuffer(a))
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
  }, c.prototype.fill = function(a, l, p, T) {
    if (typeof a == "string") {
      if (typeof l == "string" ? (T = l, l = 0, p = this.length) : typeof p == "string" && (T = p, p = this.length), T !== void 0 && typeof T != "string")
        throw new TypeError("encoding must be a string");
      if (typeof T == "string" && !c.isEncoding(T))
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
      const I = c.isBuffer(a) ? a : c.from(a, T), ee = I.length;
      if (ee === 0)
        throw new TypeError('The value "' + a + '" is invalid for argument "value"');
      for (N = 0; N < p - l; ++N)
        this[N + l] = I[N % ee];
    }
    return this;
  };
  const be = {};
  function ve(d, a, l) {
    be[d] = class extends l {
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
  ve(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(d) {
      return d ? `${d} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), ve(
    "ERR_INVALID_ARG_TYPE",
    function(d, a) {
      return `The "${d}" argument must be of type number. Received type ${typeof a}`;
    },
    TypeError
  ), ve(
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
      throw N > 3 ? a === 0 || a === BigInt(0) ? ee = `>= 0${I} and < 2${I} ** ${(N + 1) * 8}${I}` : ee = `>= -(2${I} ** ${(N + 1) * 8 - 1}${I}) and < 2 ** ${(N + 1) * 8 - 1}${I}` : ee = `>= ${a}${I} and <= ${l}${I}`, new be.ERR_OUT_OF_RANGE("value", ee, d);
    }
    De(p, T, N);
  }
  function w(d, a) {
    if (typeof d != "number")
      throw new be.ERR_INVALID_ARG_TYPE(a, "number", d);
  }
  function E(d, a, l) {
    throw Math.floor(d) !== d ? (w(d, l), new be.ERR_OUT_OF_RANGE(l || "offset", "an integer", d)) : a < 0 ? new be.ERR_BUFFER_OUT_OF_BOUNDS() : new be.ERR_OUT_OF_RANGE(
      l || "offset",
      `>= ${l ? 1 : 0} and <= ${a}`,
      d
    );
  }
  const B = /[^+/0-9A-Za-z-_]/g;
  function v(d) {
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
    return e.toByteArray(v(d));
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
})(Au);
class bo {
  constructor(e) {
    this.publicKey = e;
  }
  static fromBase58(e) {
    return new bo(ea.decode(e));
  }
  toBuffer() {
    return Au.Buffer.from([...this.publicKey]);
  }
  toBase58() {
    return ea.encode(this.publicKey);
  }
  toString() {
    return this.toBase58();
  }
}
const Fo = /* @__PURE__ */ BigInt(2 ** 32 - 1), iu = /* @__PURE__ */ BigInt(32);
function uf(t, e = !1) {
  return e ? { h: Number(t & Fo), l: Number(t >> iu & Fo) } : { h: Number(t >> iu & Fo) | 0, l: Number(t & Fo) | 0 };
}
function Xp(t, e = !1) {
  let n = new Uint32Array(t.length), r = new Uint32Array(t.length);
  for (let i = 0; i < t.length; i++) {
    const { h: s, l: u } = uf(t[i], e);
    [n[i], r[i]] = [s, u];
  }
  return [n, r];
}
const Zp = (t, e) => BigInt(t >>> 0) << iu | BigInt(e >>> 0), Gp = (t, e, n) => t >>> n, Qp = (t, e, n) => t << 32 - n | e >>> n, e0 = (t, e, n) => t >>> n | e << 32 - n, t0 = (t, e, n) => t << 32 - n | e >>> n, n0 = (t, e, n) => t << 64 - n | e >>> n - 32, r0 = (t, e, n) => t >>> n - 32 | e << 64 - n, i0 = (t, e) => e, s0 = (t, e) => t, o0 = (t, e, n) => t << n | e >>> 32 - n, a0 = (t, e, n) => e << n | t >>> 32 - n, u0 = (t, e, n) => e << n - 32 | t >>> 64 - n, c0 = (t, e, n) => t << n - 32 | e >>> 64 - n;
function l0(t, e, n, r) {
  const i = (e >>> 0) + (r >>> 0);
  return { h: t + n + (i / 2 ** 32 | 0) | 0, l: i | 0 };
}
const f0 = (t, e, n) => (t >>> 0) + (e >>> 0) + (n >>> 0), d0 = (t, e, n, r) => e + n + r + (t / 2 ** 32 | 0) | 0, m0 = (t, e, n, r) => (t >>> 0) + (e >>> 0) + (n >>> 0) + (r >>> 0), h0 = (t, e, n, r, i) => e + n + r + i + (t / 2 ** 32 | 0) | 0, p0 = (t, e, n, r, i) => (t >>> 0) + (e >>> 0) + (n >>> 0) + (r >>> 0) + (i >>> 0), g0 = (t, e, n, r, i, s) => e + n + r + i + s + (t / 2 ** 32 | 0) | 0, w0 = {
  fromBig: uf,
  split: Xp,
  toBig: Zp,
  shrSH: Gp,
  shrSL: Qp,
  rotrSH: e0,
  rotrSL: t0,
  rotrBH: n0,
  rotrBL: r0,
  rotr32H: i0,
  rotr32L: s0,
  rotlSH: o0,
  rotlSL: a0,
  rotlBH: u0,
  rotlBL: c0,
  add: l0,
  add3L: f0,
  add3H: d0,
  add4L: m0,
  add4H: h0,
  add5H: g0,
  add5L: p0
}, oe = w0, [y0, T0] = /* @__PURE__ */ (() => oe.split([
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
class E0 extends sf {
  constructor() {
    super(128, 64, 16, !1), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209;
  }
  // prettier-ignore
  get() {
    const { Ah: e, Al: n, Bh: r, Bl: i, Ch: s, Cl: u, Dh: c, Dl: f, Eh: m, El: h, Fh: g, Fl: y, Gh: b, Gl: S, Hh: U, Hl: $ } = this;
    return [e, n, r, i, s, u, c, f, m, h, g, y, b, S, U, $];
  }
  // prettier-ignore
  set(e, n, r, i, s, u, c, f, m, h, g, y, b, S, U, $) {
    this.Ah = e | 0, this.Al = n | 0, this.Bh = r | 0, this.Bl = i | 0, this.Ch = s | 0, this.Cl = u | 0, this.Dh = c | 0, this.Dl = f | 0, this.Eh = m | 0, this.El = h | 0, this.Fh = g | 0, this.Fl = y | 0, this.Gh = b | 0, this.Gl = S | 0, this.Hh = U | 0, this.Hl = $ | 0;
  }
  process(e, n) {
    for (let L = 0; L < 16; L++, n += 4)
      fi[L] = e.getUint32(n), di[L] = e.getUint32(n += 4);
    for (let L = 16; L < 80; L++) {
      const Z = fi[L - 15] | 0, F = di[L - 15] | 0, X = oe.rotrSH(Z, F, 1) ^ oe.rotrSH(Z, F, 8) ^ oe.shrSH(Z, F, 7), ne = oe.rotrSL(Z, F, 1) ^ oe.rotrSL(Z, F, 8) ^ oe.shrSL(Z, F, 7), ue = fi[L - 2] | 0, we = di[L - 2] | 0, Se = oe.rotrSH(ue, we, 19) ^ oe.rotrBH(ue, we, 61) ^ oe.shrSH(ue, we, 6), Oe = oe.rotrSL(ue, we, 19) ^ oe.rotrBL(ue, we, 61) ^ oe.shrSL(ue, we, 6), Le = oe.add4L(ne, Oe, di[L - 7], di[L - 16]), Xe = oe.add4H(Le, X, Se, fi[L - 7], fi[L - 16]);
      fi[L] = Xe | 0, di[L] = Le | 0;
    }
    let { Ah: r, Al: i, Bh: s, Bl: u, Ch: c, Cl: f, Dh: m, Dl: h, Eh: g, El: y, Fh: b, Fl: S, Gh: U, Gl: $, Hh: R, Hl: ae } = this;
    for (let L = 0; L < 80; L++) {
      const Z = oe.rotrSH(g, y, 14) ^ oe.rotrSH(g, y, 18) ^ oe.rotrBH(g, y, 41), F = oe.rotrSL(g, y, 14) ^ oe.rotrSL(g, y, 18) ^ oe.rotrBL(g, y, 41), X = g & b ^ ~g & U, ne = y & S ^ ~y & $, ue = oe.add5L(ae, F, ne, T0[L], di[L]), we = oe.add5H(ue, R, Z, X, y0[L], fi[L]), Se = ue | 0, Oe = oe.rotrSH(r, i, 28) ^ oe.rotrBH(r, i, 34) ^ oe.rotrBH(r, i, 39), Le = oe.rotrSL(r, i, 28) ^ oe.rotrBL(r, i, 34) ^ oe.rotrBL(r, i, 39), Xe = r & s ^ r & c ^ s & c, Vt = i & u ^ i & f ^ u & f;
      R = U | 0, ae = $ | 0, U = b | 0, $ = S | 0, b = g | 0, S = y | 0, { h: g, l: y } = oe.add(m | 0, h | 0, we | 0, Se | 0), m = c | 0, h = f | 0, c = s | 0, f = u | 0, s = r | 0, u = i | 0;
      const He = oe.add3L(Se, Le, Vt);
      r = oe.add3H(He, we, Oe, Xe), i = He | 0;
    }
    ({ h: r, l: i } = oe.add(this.Ah | 0, this.Al | 0, r | 0, i | 0)), { h: s, l: u } = oe.add(this.Bh | 0, this.Bl | 0, s | 0, u | 0), { h: c, l: f } = oe.add(this.Ch | 0, this.Cl | 0, c | 0, f | 0), { h: m, l: h } = oe.add(this.Dh | 0, this.Dl | 0, m | 0, h | 0), { h: g, l: y } = oe.add(this.Eh | 0, this.El | 0, g | 0, y | 0), { h: b, l: S } = oe.add(this.Fh | 0, this.Fl | 0, b | 0, S | 0), { h: U, l: $ } = oe.add(this.Gh | 0, this.Gl | 0, U | 0, $ | 0), { h: R, l: ae } = oe.add(this.Hh | 0, this.Hl | 0, R | 0, ae | 0), this.set(r, i, s, u, c, f, m, h, g, y, b, S, U, $, R, ae);
  }
  roundClean() {
    fi.fill(0), di.fill(0);
  }
  destroy() {
    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
const cf = /* @__PURE__ */ rf(() => new E0());
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
BigInt(0);
const b0 = BigInt(1), N0 = BigInt(2), Ta = (t) => t instanceof Uint8Array, x0 = /* @__PURE__ */ Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0"));
function Lu(t) {
  if (!Ta(t))
    throw new Error("Uint8Array expected");
  let e = "";
  for (let n = 0; n < t.length; n++)
    e += x0[t[n]];
  return e;
}
function lf(t) {
  if (typeof t != "string")
    throw new Error("hex string expected, got " + typeof t);
  return BigInt(t === "" ? "0" : `0x${t}`);
}
function ff(t) {
  if (typeof t != "string")
    throw new Error("hex string expected, got " + typeof t);
  const e = t.length;
  if (e % 2)
    throw new Error("padded hex string expected, got unpadded hex of length " + e);
  const n = new Uint8Array(e / 2);
  for (let r = 0; r < n.length; r++) {
    const i = r * 2, s = t.slice(i, i + 2), u = Number.parseInt(s, 16);
    if (Number.isNaN(u) || u < 0)
      throw new Error("Invalid byte sequence");
    n[r] = u;
  }
  return n;
}
function B0(t) {
  return lf(Lu(t));
}
function Vo(t) {
  if (!Ta(t))
    throw new Error("Uint8Array expected");
  return lf(Lu(Uint8Array.from(t).reverse()));
}
function df(t, e) {
  return ff(t.toString(16).padStart(e * 2, "0"));
}
function su(t, e) {
  return df(t, e).reverse();
}
function mi(t, e, n) {
  let r;
  if (typeof e == "string")
    try {
      r = ff(e);
    } catch (s) {
      throw new Error(`${t} must be valid hex string, got "${e}". Cause: ${s}`);
    }
  else if (Ta(e))
    r = Uint8Array.from(e);
  else
    throw new Error(`${t} must be hex string or Uint8Array`);
  const i = r.length;
  if (typeof n == "number" && i !== n)
    throw new Error(`${t} expected ${n} bytes, got ${i}`);
  return r;
}
function Sc(...t) {
  const e = new Uint8Array(t.reduce((r, i) => r + i.length, 0));
  let n = 0;
  return t.forEach((r) => {
    if (!Ta(r))
      throw new Error("Uint8Array expected");
    e.set(r, n), n += r.length;
  }), e;
}
const I0 = (t) => (N0 << BigInt(t - 1)) - b0, O0 = {
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
function Cu(t, e, n = {}) {
  const r = (i, s, u) => {
    const c = O0[s];
    if (typeof c != "function")
      throw new Error(`Invalid validator "${s}", expected function`);
    const f = t[i];
    if (!(u && f === void 0) && !c(f, t))
      throw new Error(`Invalid param ${String(i)}=${f} (${typeof f}), expected ${s}`);
  };
  for (const [i, s] of Object.entries(e))
    r(i, s, !1);
  for (const [i, s] of Object.entries(n))
    r(i, s, !0);
  return t;
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const $e = BigInt(0), Ae = BigInt(1), Li = BigInt(2), k0 = BigInt(3), ou = BigInt(4), Jc = BigInt(5), vc = BigInt(8);
BigInt(9);
BigInt(16);
function _e(t, e) {
  const n = t % e;
  return n >= $e ? n : e + n;
}
function S0(t, e, n) {
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
function Fc(t, e) {
  if (t === $e || e <= $e)
    throw new Error(`invert: expected positive integers, got n=${t} mod=${e}`);
  let n = _e(t, e), r = e, i = $e, s = Ae;
  for (; n !== $e; ) {
    const c = r / n, f = r % n, m = i - s * c;
    r = n, n = f, i = s, s = m;
  }
  if (r !== Ae)
    throw new Error("invert: does not exist");
  return _e(i, e);
}
function J0(t) {
  const e = (t - Ae) / Li;
  let n, r, i;
  for (n = t - Ae, r = 0; n % Li === $e; n /= Li, r++)
    ;
  for (i = Li; i < t && S0(i, e, t) !== t - Ae; i++)
    ;
  if (r === 1) {
    const u = (t + Ae) / ou;
    return function(f, m) {
      const h = f.pow(m, u);
      if (!f.eql(f.sqr(h), m))
        throw new Error("Cannot find square root");
      return h;
    };
  }
  const s = (n + Ae) / Li;
  return function(c, f) {
    if (c.pow(f, e) === c.neg(c.ONE))
      throw new Error("Cannot find square root");
    let m = r, h = c.pow(c.mul(c.ONE, i), n), g = c.pow(f, s), y = c.pow(f, n);
    for (; !c.eql(y, c.ONE); ) {
      if (c.eql(y, c.ZERO))
        return c.ZERO;
      let b = 1;
      for (let U = c.sqr(y); b < m && !c.eql(U, c.ONE); b++)
        U = c.sqr(U);
      const S = c.pow(h, Ae << BigInt(m - b - 1));
      h = c.sqr(S), g = c.mul(g, S), y = c.mul(y, h), m = b;
    }
    return g;
  };
}
function v0(t) {
  if (t % ou === k0) {
    const e = (t + Ae) / ou;
    return function(r, i) {
      const s = r.pow(i, e);
      if (!r.eql(r.sqr(s), i))
        throw new Error("Cannot find square root");
      return s;
    };
  }
  if (t % vc === Jc) {
    const e = (t - Jc) / vc;
    return function(r, i) {
      const s = r.mul(i, Li), u = r.pow(s, e), c = r.mul(i, u), f = r.mul(r.mul(c, Li), u), m = r.mul(c, r.sub(f, r.ONE));
      if (!r.eql(r.sqr(m), i))
        throw new Error("Cannot find square root");
      return m;
    };
  }
  return J0(t);
}
const F0 = (t, e) => (_e(t, e) & Ae) === Ae, A0 = [
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
function U0(t) {
  const e = {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "isSafeInteger",
    BITS: "isSafeInteger"
  }, n = A0.reduce((r, i) => (r[i] = "function", r), e);
  return Cu(t, n);
}
function L0(t, e, n) {
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
function C0(t, e) {
  const n = new Array(e.length), r = e.reduce((s, u, c) => t.is0(u) ? s : (n[c] = s, t.mul(s, u)), t.ONE), i = t.inv(r);
  return e.reduceRight((s, u, c) => t.is0(u) ? s : (n[c] = t.mul(s, n[c]), t.mul(s, u)), i), n;
}
function mf(t, e) {
  const n = e !== void 0 ? e : t.toString(2).length, r = Math.ceil(n / 8);
  return { nBitLength: n, nByteLength: r };
}
function D0(t, e, n = !1, r = {}) {
  if (t <= $e)
    throw new Error(`Expected Field ORDER > 0, got ${t}`);
  const { nBitLength: i, nByteLength: s } = mf(t, e);
  if (s > 2048)
    throw new Error("Field lengths over 2048 bytes are not supported");
  const u = v0(t), c = Object.freeze({
    ORDER: t,
    BITS: i,
    BYTES: s,
    MASK: I0(i),
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
    pow: (f, m) => L0(c, f, m),
    div: (f, m) => _e(f * Fc(m, t), t),
    // Same as above, but doesn't normalize
    sqrN: (f) => f * f,
    addN: (f, m) => f + m,
    subN: (f, m) => f - m,
    mulN: (f, m) => f * m,
    inv: (f) => Fc(f, t),
    sqrt: r.sqrt || ((f) => u(c, f)),
    invertBatch: (f) => C0(c, f),
    // TODO: do we really need constant cmov?
    // We don't have const-time bigints anyway, so probably will be not very useful
    cmov: (f, m, h) => h ? m : f,
    toBytes: (f) => n ? su(f, s) : df(f, s),
    fromBytes: (f) => {
      if (f.length !== s)
        throw new Error(`Fp.fromBytes: expected ${s}, got ${f.length}`);
      return n ? Vo(f) : B0(f);
    }
  });
  return Object.freeze(c);
}
function _0(t, e) {
  if (!t.isOdd)
    throw new Error("Field doesn't have isOdd");
  const n = t.sqrt(e);
  return t.isOdd(n) ? t.neg(n) : n;
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const q0 = BigInt(0), Aa = BigInt(1);
function K0(t, e) {
  const n = (i, s) => {
    const u = s.negate();
    return i ? u : s;
  }, r = (i) => {
    const s = Math.ceil(e / i) + 1, u = 2 ** (i - 1);
    return { windows: s, windowSize: u };
  };
  return {
    constTimeNegate: n,
    // non-const time multiplication ladder
    unsafeLadder(i, s) {
      let u = t.ZERO, c = i;
      for (; s > q0; )
        s & Aa && (u = u.add(c)), c = c.double(), s >>= Aa;
      return u;
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
      const { windows: u, windowSize: c } = r(s), f = [];
      let m = i, h = m;
      for (let g = 0; g < u; g++) {
        h = m, f.push(h);
        for (let y = 1; y < c; y++)
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
    wNAF(i, s, u) {
      const { windows: c, windowSize: f } = r(i);
      let m = t.ZERO, h = t.BASE;
      const g = BigInt(2 ** i - 1), y = 2 ** i, b = BigInt(i);
      for (let S = 0; S < c; S++) {
        const U = S * f;
        let $ = Number(u & g);
        u >>= b, $ > f && ($ -= y, u += Aa);
        const R = U, ae = U + Math.abs($) - 1, L = S % 2 !== 0, Z = $ < 0;
        $ === 0 ? h = h.add(n(L, s[R])) : m = m.add(n(Z, s[ae]));
      }
      return { p: m, f: h };
    },
    wNAFCached(i, s, u, c) {
      const f = i._WINDOW_SIZE || 1;
      let m = s.get(i);
      return m || (m = this.precomputeWindow(i, f), f !== 1 && s.set(i, c(m))), this.wNAF(f, m, u);
    }
  };
}
function P0(t) {
  return U0(t.Fp), Cu(t, {
    n: "bigint",
    h: "bigint",
    Gx: "field",
    Gy: "field"
  }, {
    nBitLength: "isSafeInteger",
    nByteLength: "isSafeInteger"
  }), Object.freeze({
    ...mf(t.n, t.nBitLength),
    ...t,
    p: t.Fp.ORDER
  });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const dt = BigInt(0), rt = BigInt(1), Ao = BigInt(2), $0 = BigInt(8), M0 = { zip215: !0 };
function V0(t) {
  const e = P0(t);
  return Cu(t, {
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
function Du(t) {
  const e = V0(t), { Fp: n, n: r, prehash: i, hash: s, randomBytes: u, nByteLength: c, h: f } = e, m = Ao << BigInt(c * 8) - rt, h = n.create, g = e.uvRatio || ((K, _) => {
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
      const { ex: j, ey: Y, ez: re, et: me } = this, Ne = h(j * j), he = h(Y * Y), fe = h(re * re), be = h(fe * fe), ve = h(Ne * _), Ce = h(fe * h(ve + he)), De = h(be + h(W * h(Ne * he)));
      if (Ce !== De)
        throw new Error("bad point: equation left != right (1)");
      const ze = h(j * Y), w = h(re * me);
      if (ze !== w)
        throw new Error("bad point: equation left != right (2)");
    }
    // Compare one point to another.
    equals(_) {
      Z(_);
      const { ex: W, ey: j, ez: Y } = this, { ex: re, ey: me, ez: Ne } = _, he = h(W * Ne), fe = h(re * Y), be = h(j * Ne), ve = h(me * Y);
      return he === fe && be === ve;
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
      const { a: _ } = e, { ex: W, ey: j, ez: Y } = this, re = h(W * W), me = h(j * j), Ne = h(Ao * h(Y * Y)), he = h(_ * re), fe = W + j, be = h(h(fe * fe) - re - me), ve = he + me, Ce = ve - Ne, De = he - me, ze = h(be * Ce), w = h(ve * De), E = h(be * De), B = h(Ce * ve);
      return new F(ze, w, B, E);
    }
    // Fast algo for adding 2 Extended Points.
    // https://hyperelliptic.org/EFD/g1p/auto-twisted-extended.html#addition-add-2008-hwcd
    // Cost: 9M + 1*a + 1*d + 7add.
    add(_) {
      Z(_);
      const { a: W, d: j } = e, { ex: Y, ey: re, ez: me, et: Ne } = this, { ex: he, ey: fe, ez: be, et: ve } = _;
      if (W === BigInt(-1)) {
        const O = h((re - Y) * (fe + he)), H = h((re + Y) * (fe - he)), M = h(H - O);
        if (M === dt)
          return this.double();
        const V = h(me * Ao * ve), G = h(Ne * Ao * be), d = G + V, a = H + O, l = G - V, p = h(d * M), T = h(a * l), N = h(d * l), I = h(M * a);
        return new F(p, T, I, N);
      }
      const Ce = h(Y * he), De = h(re * fe), ze = h(Ne * j * ve), w = h(me * be), E = h((Y + re) * (he + fe) - Ce - De), B = w - ze, v = w + ze, k = h(De - W * Ce), C = h(E * B), P = h(v * k), A = h(E * k), D = h(B * v);
      return new F(C, P, D, A);
    }
    subtract(_) {
      return this.add(_.negate());
    }
    wNAF(_) {
      return ue.wNAFCached(this, L, _, F.normalizeZ);
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
      return W === dt ? ne : this.equals(ne) || W === rt ? this : this.equals(X) ? this.wNAF(W).p : ue.unsafeLadder(this, W);
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
      return ue.unsafeLadder(this, r).is0();
    }
    // Converts Extended point to default (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    toAffine(_) {
      const { ex: W, ey: j, ez: Y } = this, re = this.is0();
      _ == null && (_ = re ? $0 : n.inv(Y));
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
      const he = Vo(me);
      he === dt || (W ? R(he, m) : R(he, n.ORDER));
      const fe = h(he * he), be = h(fe - rt), ve = h(j * fe - Y);
      let { isValid: Ce, value: De } = g(be, ve);
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
      const { x: _, y: W } = this.toAffine(), j = su(W, n.BYTES);
      return j[j.length - 1] |= _ & rt ? 128 : 0, j;
    }
    toHex() {
      return Lu(this.toRawBytes());
    }
  }
  F.BASE = new F(e.Gx, e.Gy, rt, h(e.Gx * e.Gy)), F.ZERO = new F(dt, rt, rt, dt);
  const { BASE: X, ZERO: ne } = F, ue = K0(F, c * 8);
  function we(K) {
    return _e(K, r);
  }
  function Se(K) {
    return we(Vo(K));
  }
  function Oe(K) {
    const _ = c;
    K = mi("private key", K, _);
    const W = mi("hashed private key", s(K), 2 * _), j = y(W.slice(0, _)), Y = W.slice(_, 2 * _), re = Se(j), me = X.multiply(re), Ne = me.toRawBytes();
    return { head: j, prefix: Y, scalar: re, point: me, pointBytes: Ne };
  }
  function Le(K) {
    return Oe(K).pointBytes;
  }
  function Xe(K = new Uint8Array(), ..._) {
    const W = Sc(..._);
    return Se(s(b(W, mi("context", K), !!i)));
  }
  function Vt(K, _, W = {}) {
    K = mi("message", K), i && (K = i(K));
    const { prefix: j, scalar: Y, pointBytes: re } = Oe(_), me = Xe(W.context, j, K), Ne = X.multiply(me).toRawBytes(), he = Xe(W.context, Ne, re, K), fe = we(me + he * Y);
    ae(fe);
    const be = Sc(Ne, su(fe, n.BYTES));
    return mi("result", be, c * 2);
  }
  const He = M0;
  function Pe(K, _, W, j = He) {
    const { context: Y, zip215: re } = j, me = n.BYTES;
    K = mi("signature", K, 2 * me), _ = mi("message", _), i && (_ = i(_));
    const Ne = Vo(K.slice(me, 2 * me));
    let he, fe, be;
    try {
      he = F.fromHex(W, re), fe = F.fromHex(K.slice(0, me), re), be = X.multiplyUnsafe(Ne);
    } catch {
      return !1;
    }
    if (!re && he.isSmallOrder())
      return !1;
    const ve = Xe(Y, fe.toRawBytes(), he.toRawBytes(), _);
    return fe.add(he.multiplyUnsafe(ve)).subtract(be).clearCofactor().equals(F.ZERO);
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
      randomPrivateKey: () => u(n.BYTES),
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
const _u = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949"), Ac = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
BigInt(0);
const H0 = BigInt(1), au = BigInt(2), j0 = BigInt(5), Uc = BigInt(10), R0 = BigInt(20), z0 = BigInt(40), Lc = BigInt(80);
function W0(t) {
  const e = _u, r = t * t % e * t % e, i = Bt(r, au, e) * r % e, s = Bt(i, H0, e) * t % e, u = Bt(s, j0, e) * s % e, c = Bt(u, Uc, e) * u % e, f = Bt(c, R0, e) * c % e, m = Bt(f, z0, e) * f % e, h = Bt(m, Lc, e) * m % e, g = Bt(h, Lc, e) * m % e, y = Bt(g, Uc, e) * u % e;
  return { pow_p_5_8: Bt(y, au, e) * t % e, b2: r };
}
function Y0(t) {
  return t[0] &= 248, t[31] &= 127, t[31] |= 64, t;
}
function X0(t, e) {
  const n = _u, r = _e(e * e * e, n), i = _e(r * r * e, n), s = W0(t * i).pow_p_5_8;
  let u = _e(t * r * s, n);
  const c = _e(e * u * u, n), f = u, m = _e(u * Ac, n), h = c === t, g = c === _e(-t, n), y = c === _e(-t * Ac, n);
  return h && (u = f), (g || y) && (u = m), F0(u, n) && (u = _e(-u, n)), { isValid: h || g, value: u };
}
const si = D0(_u, void 0, !0), qu = {
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
  hash: cf,
  randomBytes: Dp,
  adjustScalarBytes: Y0,
  // dom2
  // Ratio of u to v. Allows us to combine inversion and square root. Uses algo from RFC8032 5.1.3.
  // Constant-time, u/√v
  uvRatio: X0
}, zi = /* @__PURE__ */ Du(qu);
function hf(t, e, n) {
  if (e.length > 255)
    throw new Error("Context is too big");
  return Lp(tf("SigEd25519 no Ed25519 collisions"), new Uint8Array([n ? 1 : 0, e.length]), e, t);
}
({
  ...qu
});
({
  ...qu
});
const Z0 = (si.ORDER + BigInt(3)) / BigInt(8);
si.pow(au, Z0);
si.sqrt(si.neg(si.ONE));
(si.ORDER - BigInt(5)) / BigInt(8);
BigInt(486662);
_0(si, si.neg(BigInt(486664)));
BigInt("25063068953384623474111414158702152701244531502492656460079210482610430750235");
BigInt("54469307008909316920995813868745141605393597292927456921205312896311721017578");
BigInt("1159843021668779879193775521855586647937357759715417654439879720876111806838");
BigInt("40440834346308536858101042469323190826248399146238708352240133220865137265952");
BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
class Ci {
  constructor(e, n) {
    this.privateKey = e, this.publicKey = n;
  }
  static generate() {
    const e = zi.utils.randomPrivateKey(), n = zi.getPublicKey(e);
    return new Ci(e, n);
  }
  static fromSecretKey(e) {
    const n = e.subarray(0, 32), r = zi.getPublicKey(n);
    return new Ci(n, r);
  }
  static fromSeed(e) {
    return Ci.fromSecretKey(e);
  }
  static fromRawPrivateKey(e) {
    const n = zi.getPublicKey(e);
    return new Ci(e, n);
  }
  getPublicKey() {
    return new bo(this.publicKey);
  }
  getPublicValue() {
    return this.publicKey;
  }
  getPrivateValue() {
    return this.privateKey;
  }
  getSecretKey() {
    return Uint8Array.from([...this.privateKey, ...this.publicKey]);
  }
  sign(e) {
    return zi.sign(new Uint8Array(e), this.privateKey);
  }
  verify(e, n) {
    return zi.verify(n, new Uint8Array(e), this.publicKey);
  }
}
const pf = () => new Error("invalid size"), gf = () => new Error("destination is required"), wf = () => new Error("amount is required"), yf = () => new Error("currency is required"), mo = () => new Error("invalid currency"), G0 = () => new Error("unexpected error"), Q0 = () => new Error("cannot derive nonce from both clientSecret and idempotencyKey"), Tf = () => new Error("invalid mode");
class at {
  constructor(e = new Uint8Array(at.MAX_LENGTH)) {
    if (e.length != at.MAX_LENGTH)
      throw pf();
    this.value = e;
  }
  static fromClientSecret(e) {
    return new at(ea.decode(e));
  }
  static fromSeed(e) {
    return new at(of(e).subarray(0, at.MAX_LENGTH));
  }
  static generate() {
    const e = Ci.generate().privateKey.subarray(0, at.MAX_LENGTH);
    return new at(e);
  }
  toString() {
    return ea.encode(this.value);
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
function eg(t) {
  const e = ta.indexOf(t);
  if (e === -1)
    throw mo();
  return e;
}
function tg(t) {
  if (t < 0 || t >= ta.length)
    throw mo();
  return ta[t];
}
function Ef(t) {
  return ta.indexOf(t) !== -1;
}
var ho;
(function(t) {
  t[t.Cash = 0] = "Cash", t[t.GiftCard = 1] = "GiftCard", t[t.RequestPayment = 2] = "RequestPayment";
})(ho || (ho = {}));
class po {
  constructor(e, n, r, i) {
    if (this.kind = e, this.amount = n, this.nonce = r, i && !Ef(i))
      throw mo();
    this.currency = i;
  }
  toBinary() {
    const e = new Uint8Array(20);
    if (e[0] = this.kind, this.kind === ho.RequestPayment) {
      if (!this.currency)
        throw mo();
      const n = eg(this.currency);
      e[1] = n;
      for (let r = 0; r < 7; r++)
        e[r + 2] = Number(this.amount >> BigInt(8 * r) & BigInt(255));
    } else
      for (let n = 0; n < 8; n++)
        e[n + 1] = Number(this.amount >> BigInt(8 * n) & BigInt(255));
    return e.set(this.nonce, 9), e;
  }
  static fromData(e) {
    if (e.length !== po.MAX_LENGTH)
      throw pf();
    const n = e[0];
    let r, i, s;
    if (n === ho.RequestPayment) {
      const u = e[1];
      s = tg(u), r = e.slice(2, 9).reduce((c, f, m) => c + (BigInt(f) << BigInt(8 * m)), BigInt(0));
    } else
      r = e.slice(1, 9).reduce((u, c, f) => u + (BigInt(c) << BigInt(8 * f)), BigInt(0));
    return i = e.slice(9), new po(n, r, i, s);
  }
}
po.MAX_LENGTH = 20;
function ng(t) {
  return Ci.fromSeed(of(t.toBinary()));
}
function rg(t) {
  if (t.mode === void 0)
    throw Tf();
  if (t.idempotencyKey && t.clientSecret)
    throw Q0();
}
function ig(t) {
  if (t.destination === void 0)
    throw gf();
  if (t.amount === void 0)
    throw wf();
  if (t.currency === void 0)
    throw yf();
  if (!Ef(t.currency))
    throw mo();
}
function bf(t) {
  switch (rg(t), t.mode) {
    case "payment":
      ig(t);
      break;
    default:
      throw Tf();
  }
}
class sg {
  constructor(e) {
    this.options = {
      ...e,
      // Normalize currency to lowercase 
      // (just in case the end user is not using TypeScript)
      currency: e.currency && e.currency.toLowerCase()
    }, this.validate(), this.options.idempotencyKey ? this.nonce = at.fromSeed(this.options.idempotencyKey) : this.options.clientSecret ? this.nonce = at.fromClientSecret(this.options.clientSecret) : this.nonce = at.generate(), this.options.amount = parseFloat(this.options.amount.toFixed(2)), this.convertedAmount = parseInt((this.options.amount * 100).toFixed());
    const n = ho.RequestPayment, r = BigInt(this.convertedAmount), i = this.nonce.value;
    this.rendezvousPayload = new po(n, r, i, this.options.currency), this.rendezvousKeypair = ng(this.rendezvousPayload);
  }
  validate() {
    if (bf(this.options), !this.options.destination)
      throw gf();
    if (!this.options.amount)
      throw wf();
    if (!this.options.currency)
      throw yf();
  }
  toProto() {
    const e = bo.fromBase58(this.options.destination), { currency: n, amount: r } = this.options;
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
      value: new vt({
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
  sign() {
    const e = this.toProto(), n = e.kind.value;
    if (!n)
      throw G0();
    const r = this.rendezvousKeypair.sign(e.toBinary()), i = this.rendezvousKeypair.getPublicKey().toBase58();
    return {
      message: n.toBinary(),
      intent: i,
      signature: r
    };
  }
  getClientSecret() {
    return this.nonce.toString();
  }
  getIntentId() {
    return this.rendezvousKeypair.getPublicKey().toBase58();
  }
}
function og(t) {
  return typeof btoa == "function" ? btoa(t) : Au.Buffer.from(t, "binary").toString("base64");
}
function No(t) {
  return encodeURIComponent(og(JSON.stringify(t ?? {})));
}
class Ee {
  constructor(e, n = 0) {
    this.whole = BigInt(e), this.quarks = BigInt(n), this.normalize();
  }
  normalize() {
    const e = this.quarks / Ee.quarksPerKin;
    this.whole += e, this.quarks %= Ee.quarksPerKin;
  }
  toQuarks() {
    return this.whole * Ee.quarksPerKin + this.quarks;
  }
  toDecimal() {
    return Number(this.whole) + Number(this.quarks) / Number(Ee.quarksPerKin);
  }
  static fromQuarks(e) {
    const n = Number(e / Ee.quarksPerKin), r = Number(e % Ee.quarksPerKin);
    return new Ee(n, r);
  }
  static fromDecimal(e) {
    const n = BigInt(Math.round(e * Number(Ee.quarksPerKin)));
    return Ee.fromQuarks(n);
  }
  add(e) {
    const n = this.toQuarks() + e.toQuarks();
    return Ee.fromQuarks(n);
  }
  subtract(e) {
    const n = this.toQuarks() - e.toQuarks();
    return Ee.fromQuarks(n);
  }
  multiply(e) {
    const n = this.toQuarks() * BigInt(e);
    return Ee.fromQuarks(n);
  }
  divide(e) {
    const n = this.toQuarks() / BigInt(e);
    return Ee.fromQuarks(n);
  }
}
Ee.decimals = 5n;
Ee.quarksPerKin = 10n ** Ee.decimals;
Ee.mintAddress = "kinXdEcpDQeHPEuQnqmUgtYykqKGVFq6CeVX5iAHJq6";
Ee.mint = bo.fromBase58(Ee.mintAddress);
Ee.zero = new Ee(0, 0);
Ee.one = new Ee(1, 0);
Ee.max = new Ee(Number.MAX_SAFE_INTEGER, Number(Ee.quarksPerKin - 1n));
Ee.min = new Ee(Number.MIN_SAFE_INTEGER, 0);
const ag = ["width", "height"], ug = /* @__PURE__ */ rs({
  __name: "PaymentRequestButton",
  emits: ["resize", "invoke"],
  setup(t, { emit: e }) {
    const n = To(), r = bt("options"), i = new is(), s = `${n.codeSdk()}/payment-request-button/#/${i.id}/p=${No(r)}`, u = Tt(null), c = Tt(0), f = Tt(0);
    ha(() => {
      u.value && (i.on("resize", (h) => {
        const { width: g, height: y } = h;
        u.value && (c.value = g, f.value = y);
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
      ref: u,
      src: s,
      width: c.value,
      height: f.value,
      frameborder: "0",
      allowtransparency: "true",
      scrolling: "no",
      name: "payment-request-button",
      referrerpolicy: "no-referrer",
      style: Ji(m())
    }, null, 12, ag));
  }
}), Nf = /* @__PURE__ */ rs({
  __name: "PaymentRequestModalDesktop",
  emits: [
    "codeScanned",
    "clientRejectedPayment",
    "intentSubmitted",
    "channelCreated"
  ],
  setup(t, { emit: e }) {
    const n = To(), r = bt("options"), i = new is(), s = `${n.codeSdk()}/payment-request-modal-desktop/#/${i.id}/p=${No(r)}`, u = Tt(null);
    i.on("codeScanned", () => {
      e("codeScanned");
    }), i.on("clientRejectedPayment", () => {
      e("clientRejectedPayment");
    }), i.on("intentSubmitted", () => {
      e("intentSubmitted");
    }), ha(() => {
      u.value && (i.setTargetWindow(u.value), e("channelCreated", i));
    }), wl(() => {
      var g, y;
      const { clientSecret: f, idempotencyKey: m, confirmParams: h } = r ?? {};
      f && i.emit("updatedClientSecret", { value: f }), m && i.emit("updatedIdempotencyKey", { value: m }), h && ((g = h.success) != null && g.url && i.emit("updatedSuccessUrl", { value: h.success.url }), (y = h.cancel) != null && y.url && i.emit("updatedCancelUrl", { value: h.cancel.url }));
    });
    function c() {
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
      ref: u,
      src: s,
      frameborder: "0",
      allowTransparency: "true",
      scrolling: "no",
      name: "payment-request-card",
      referrerpolicy: "no-referrer",
      style: Ji(c())
    }, null, 4));
  }
}), cg = /* @__PURE__ */ rs({
  __name: "PaymentRequestModalMobile",
  emits: [
    "codeScanned",
    "clientRejectedPayment",
    "intentSubmitted",
    "channelCreated"
  ],
  setup(t, { emit: e }) {
    const n = To(), r = bt("options"), i = new is(), s = `${n.codeSdk()}/payment-request-modal-mobile/#/${i.id}/p=${No(r)}`, u = Tt(null);
    i.on("codeScanned", () => {
      e("codeScanned");
    }), i.on("clientRejectedPayment", () => {
      e("clientRejectedPayment");
    }), i.on("intentSubmitted", () => {
      e("intentSubmitted");
    }), i.on("navigate", (f) => {
      f.url && (window.location.href = f.url);
    }), ha(() => {
      u.value && (i.setTargetWindow(u.value), e("channelCreated", i));
    }), wl(() => {
      var g, y;
      const { clientSecret: f, idempotencyKey: m, confirmParams: h } = r ?? {};
      f && i.emit("updatedClientSecret", { value: f }), m && i.emit("updatedIdempotencyKey", { value: m }), h && ((g = h.success) != null && g.url && i.emit("updatedSuccessUrl", { value: h.success.url }), (y = h.cancel) != null && y.url && i.emit("updatedCancelUrl", { value: h.cancel.url }));
    });
    function c() {
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
      ref: u,
      src: s,
      frameborder: "0",
      allowTransparency: "true",
      scrolling: "no",
      name: "payment-request-card",
      referrerPolicy: "no-referrer",
      style: Ji(c())
    }, null, 4));
  }
}), lg = /* @__PURE__ */ rs({
  __name: "PreloadPaymentRequestModalDesktop",
  setup(t) {
    const e = To(), n = bt("options"), r = `${e.codeSdk()}/payment-request-modal-desktop/#/preload/p=${No(n)}`, i = Tt(null);
    function s() {
      const u = (c) => c + " !important";
      return {
        opacity: u("0"),
        visibility: u("hidden"),
        position: u("absolute"),
        top: u("-1px"),
        left: u("-1px"),
        zIndex: u("-1"),
        width: u("1px"),
        height: u("1px")
      };
    }
    return (u, c) => (Ge(), xi("iframe", {
      ref_key: "el",
      ref: i,
      src: r,
      frameborder: "0",
      allowTransparency: "true",
      scrolling: "no",
      name: "preload-payment-request-card",
      referrerpolicy: "no-referrer",
      style: Ji(s())
    }, null, 4));
  }
}), fg = /* @__PURE__ */ rs({
  __name: "PreloadPaymentRequestModalMobile",
  setup(t) {
    const e = To(), n = bt("options"), r = `${e.codeSdk()}/payment-request-modal-mobile/#/preload/p=${No(n)}`, i = Tt(null);
    function s() {
      const u = (c) => c + " !important";
      return {
        opacity: u("0"),
        visibility: u("hidden"),
        position: u("absolute"),
        top: u("-1px"),
        left: u("-1px"),
        zIndex: u("-1"),
        width: u("1px"),
        height: u("1px")
      };
    }
    return (u, c) => (Ge(), xi("iframe", {
      ref_key: "el",
      ref: i,
      src: r,
      frameborder: "0",
      allowTransparency: "true",
      scrolling: "no",
      name: "preload-payment-request-card",
      referrerpolicy: "no-referrer",
      style: Ji(s())
    }, null, 4));
  }
});
function Ua(t) {
  try {
    return new URL(t), !0;
  } catch {
    return !1;
  }
}
function dg(t, e) {
  try {
    return new URL(t, e).toString();
  } catch {
    return "";
  }
}
function mg(t, e) {
  let n = decodeURIComponent(t);
  for (const [r, i] of Object.entries(e))
    n = n.replace(`{{${r}}}`, i);
  return encodeURI(n);
}
function Cc(t, e, n) {
  let r = (t == null ? void 0 : t.url) ?? e;
  if (r && (!Ua(r) && e && Ua(e) && (r = dg(r, new URL(e).origin)), Ua(r)))
    return n && (r = mg(r, n)), { url: r };
}
const hg = { key: 0 }, pg = { key: 1 }, Dc = 500, gg = /* @__PURE__ */ rs({
  __name: "ButtonFlow",
  setup(t) {
    var U, $, R, ae;
    const e = (L) => new Promise((Z) => setTimeout(Z, L)), n = bt("options"), r = bt("emit", async () => !1), i = Tt(null), s = Tt(null), u = (($ = (U = n == null ? void 0 : n.confirmParams) == null ? void 0 : U.success) == null ? void 0 : $.url) !== void 0, c = ((ae = (R = n == null ? void 0 : n.confirmParams) == null ? void 0 : R.cancel) == null ? void 0 : ae.url) !== void 0;
    function f() {
      return n && n.amount && n.currency && n.destination;
    }
    function m(L) {
      i.value = L;
    }
    async function h() {
      var X, ne;
      if (b.value = !0, await $a(), !n)
        throw new Error("Missing options");
      if (!i.value)
        throw new Error("Missing channel");
      if (i.value.emit("beforeInvoke"), await r("invoke")) {
        b.value = !1;
        return;
      }
      s.value = new sg(n).getIntentId();
      const Z = {
        INTENT_ID: s.value
        // ...
      }, F = window.location.href;
      if (n.confirmParams = {
        success: Cc((X = n.confirmParams) == null ? void 0 : X.success, F, Z),
        cancel: Cc((ne = n.confirmParams) == null ? void 0 : ne.cancel, F, Z)
      }, await $a(), !i.value)
        throw new Error("Missing channel");
      i.value.emit("afterInvoke");
    }
    async function g() {
      var F, X;
      b.value = !1, await e(Dc);
      const L = (X = (F = n == null ? void 0 : n.confirmParams) == null ? void 0 : F.success) == null ? void 0 : X.url;
      await r("success", { url: L, options: n, intent: s.value }) || u && (window.location.href = L);
    }
    async function y() {
      var F, X;
      b.value = !1, await e(Dc);
      const L = (X = (F = n == null ? void 0 : n.confirmParams) == null ? void 0 : F.cancel) == null ? void 0 : X.url;
      await r("cancel", { url: L, options: n, intent: s.value }) || c && (window.location.href = L);
    }
    const b = Tt(!1), S = Ig();
    return (L, Z) => f() ? (Ge(), xi(ht, { key: 0 }, [
      Pt(hi(ug), { onInvoke: h }),
      (Ge(), Yi(jm, { to: "body" }, [
        b.value ? (Ge(), xi("div", hg, [
          hi(S) ? (Ge(), Yi(hi(cg), {
            key: 0,
            onChannelCreated: m,
            onIntentSubmitted: g,
            onClientRejectedPayment: y
          })) : (Ge(), Yi(hi(Nf), {
            key: 1,
            onChannelCreated: m,
            onIntentSubmitted: g,
            onClientRejectedPayment: y
          }))
        ])) : (Ge(), xi("div", pg, [
          hi(S) ? (Ge(), Yi(hi(fg), { key: 0 })) : (Ge(), Yi(hi(lg), { key: 1 }))
        ]))
      ]))
    ], 64)) : Zm("", !0);
  }
}), wg = (t) => new Error(`Unknown element type: ${t}`), Jg = (t) => new Error(`Required parameter: ${t}`), vg = (t) => new Error(`Invalid parameter: ${t}`), _c = "payment", yg = "en";
class xf {
  constructor(e, n) {
    const r = { ...e };
    r.mode = r.mode ?? _c, r.locale = r.locale ?? yg, this.intent = ua(r), this.listeners = [], this.app = n, this.validate();
  }
  validate() {
    return bf(this.intent);
  }
  getLocale() {
    return this.intent.locale;
  }
  getMode() {
    return this.intent.mode ?? _c;
  }
  getAppearance() {
    return this.intent.appearance;
  }
  getOptions() {
    return this.intent;
  }
  update(e) {
    Object.assign(this.intent, e), this.validate();
  }
  on(e, n) {
    this.listeners.push({ event: e, callback: n });
  }
  mount(e) {
    const n = typeof e == "string" ? document.querySelector(e) : e;
    if (n && n.hasAttribute("data-v-app"))
      return console.warn("A component is already mounted on this element: " + e), null;
    const r = async (s, u) => {
      const c = Tg(u), f = this.listeners.filter((h) => h.event === s);
      return (await Promise.all(f.map((h) => h.callback(c)))).some((h) => h === !0);
    };
    return this.app.provide("locale", this.getLocale()), this.app.provide("options", this.getOptions()), this.app.provide("emit", r), this.app.mount(e).$el;
  }
  unmount() {
    return this.app.unmount();
  }
}
function Tg(t) {
  return typeof t != "object" ? t : JSON.parse(JSON.stringify(t));
}
class Eg extends xf {
  constructor(e) {
    super(e, Pl(gg));
  }
}
class bg extends xf {
  constructor(e) {
    super(e, Pl(Nf));
  }
}
const Ng = {
  create: (t, e) => {
    switch (t) {
      case "button":
        return { button: new Eg(e) };
      case "card":
        return { card: new bg(e) };
      default:
        throw wg(t);
    }
  }
};
function Bf() {
  return [
    "iPhone Simulator",
    "iPhone"
  ].includes(navigator.platform);
}
function xg() {
  return Bf() || [
    "iPad Simulator",
    "iPod Simulator",
    "iPad",
    "iPod"
  ].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
function Fg() {
  return xg() || /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function Bg() {
  return /Android/i.test(navigator.userAgent);
}
function Ig() {
  return Bf() || Bg();
}
const Og = {
  codeSdk: "https://sdk.getcode.com/v1/elements"
};
Ph(Og);
const Ag = { elements: Ng };
export {
  Bg as Android,
  vg as ErrInvalidParameter,
  Jg as ErrRequiredParameter,
  wg as ErrUnknownElementType,
  Fg as Safari,
  Ag as default,
  Ng as elements,
  Cc as getURLParam,
  xg as iOS,
  Bf as iPhone,
  Ig as isMobileDevice,
  Ua as isValidURL,
  dg as makeFQDN,
  mg as replaceURLVariables
};
