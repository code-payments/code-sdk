function Si(t, e) {
  const n = /* @__PURE__ */ Object.create(null), r = t.split(",");
  for (let i = 0; i < r.length; i++)
    n[r[i]] = !0;
  return e ? (i) => !!n[i.toLowerCase()] : (i) => !!n[i];
}
const xe = Object.freeze({}), Zi = Object.freeze([]), et = () => {
}, ju = () => !1, Uf = /^on[^a-z]/, yo = (t) => Uf.test(t), jo = (t) => t.startsWith("onUpdate:"), Se = Object.assign, fc = (t, e) => {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}, Lf = Object.prototype.hasOwnProperty, le = (t, e) => Lf.call(t, e), Q = Array.isArray, Gi = (t) => ra(t) === "[object Map]", Cf = (t) => ra(t) === "[object Set]", re = (t) => typeof t == "function", Ue = (t) => typeof t == "string", dc = (t) => typeof t == "symbol", Oe = (t) => t !== null && typeof t == "object", mc = (t) => Oe(t) && re(t.then) && re(t.catch), Df = Object.prototype.toString, ra = (t) => Df.call(t), hc = (t) => ra(t).slice(8, -1), _f = (t) => ra(t) === "[object Object]", pc = (t) => Ue(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, Lo = /* @__PURE__ */ Si(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), qf = /* @__PURE__ */ Si(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), ia = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (n) => e[n] || (e[n] = t(n));
}, Kf = /-(\w)/g, ts = ia((t) => t.replace(Kf, (e, n) => n ? n.toUpperCase() : "")), Pf = /\B([A-Z])/g, Bi = ia(
  (t) => t.replace(Pf, "-$1").toLowerCase()
), sa = ia(
  (t) => t.charAt(0).toUpperCase() + t.slice(1)
), Ai = ia(
  (t) => t ? `on${sa(t)}` : ""
), bs = (t, e) => !Object.is(t, e), os = (t, e) => {
  for (let n = 0; n < t.length; n++)
    t[n](e);
}, Ro = (t, e, n) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, $f = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
};
let $c;
const Wo = () => $c || ($c = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof {} < "u" ? {} : {});
function vi(t) {
  if (Q(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const r = t[n], i = Ue(r) ? jf(r) : vi(r);
      if (i)
        for (const s in i)
          e[s] = i[s];
    }
    return e;
  } else {
    if (Ue(t))
      return t;
    if (Oe(t))
      return t;
  }
}
const Mf = /;(?![^(]*\))/g, Vf = /:([^]+)/, Hf = /\/\*[^]*?\*\//g;
function jf(t) {
  const e = {};
  return t.replace(Hf, "").split(Mf).forEach((n) => {
    if (n) {
      const r = n.split(Vf);
      r.length > 1 && (e[r[0].trim()] = r[1].trim());
    }
  }), e;
}
function gc(t) {
  let e = "";
  if (Ue(t))
    e = t;
  else if (Q(t))
    for (let n = 0; n < t.length; n++) {
      const r = gc(t[n]);
      r && (e += r + " ");
    }
  else if (Oe(t))
    for (const n in t)
      t[n] && (e += n + " ");
  return e.trim();
}
const Rf = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Wf = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", zf = /* @__PURE__ */ Si(Rf), Yf = /* @__PURE__ */ Si(Wf), Xf = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Zf = /* @__PURE__ */ Si(Xf);
function Ru(t) {
  return !!t || t === "";
}
function _a(t, ...e) {
  console.warn(`[Vue warn] ${t}`, ...e);
}
let mt;
class Gf {
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
      _a("cannot run an inactive effect scope.");
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
function Qf(t, e = mt) {
  e && e.active && e.effects.push(t);
}
function ed() {
  return mt;
}
const wc = (t) => {
  const e = new Set(t);
  return e.w = 0, e.n = 0, e;
}, Wu = (t) => (t.w & Ii) > 0, zu = (t) => (t.n & Ii) > 0, td = ({ deps: t }) => {
  if (t.length)
    for (let e = 0; e < t.length; e++)
      t[e].w |= Ii;
}, nd = (t) => {
  const { deps: e } = t;
  if (e.length) {
    let n = 0;
    for (let r = 0; r < e.length; r++) {
      const i = e[r];
      Wu(i) && !zu(i) ? i.delete(t) : e[n++] = i, i.w &= ~Ii, i.n &= ~Ii;
    }
    e.length = n;
  }
}, qa = /* @__PURE__ */ new WeakMap();
let fs = 0, Ii = 1;
const Ka = 30;
let Ye;
const Di = Symbol("iterate"), Pa = Symbol("Map key iterate");
class yc {
  constructor(e, n = null, r) {
    this.fn = e, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Qf(this, r);
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
      return this.parent = Ye, Ye = this, bi = !0, Ii = 1 << ++fs, fs <= Ka ? td(this) : Mc(this), this.fn();
    } finally {
      fs <= Ka && nd(this), Ii = 1 << --fs, Ye = this.parent, bi = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    Ye === this ? this.deferStop = !0 : this.active && (Mc(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Mc(t) {
  const { deps: e } = t;
  if (e.length) {
    for (let n = 0; n < e.length; n++)
      e[n].delete(t);
    e.length = 0;
  }
}
let bi = !0;
const Yu = [];
function Mi() {
  Yu.push(bi), bi = !1;
}
function Vi() {
  const t = Yu.pop();
  bi = t === void 0 ? !0 : t;
}
function Re(t, e, n) {
  if (bi && Ye) {
    let r = qa.get(t);
    r || qa.set(t, r = /* @__PURE__ */ new Map());
    let i = r.get(n);
    i || r.set(n, i = wc()), Xu(i, { effect: Ye, target: t, type: e, key: n });
  }
}
function Xu(t, e) {
  let n = !1;
  fs <= Ka ? zu(t) || (t.n |= Ii, n = !Wu(t)) : n = !t.has(Ye), n && (t.add(Ye), Ye.deps.push(t), Ye.onTrack && Ye.onTrack(
    Se(
      {
        effect: Ye
      },
      e
    )
  ));
}
function $t(t, e, n, r, i, s) {
  const c = qa.get(t);
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
        Q(t) ? pc(n) && u.push(c.get("length")) : (u.push(c.get(Di)), Gi(t) && u.push(c.get(Pa)));
        break;
      case "delete":
        Q(t) || (u.push(c.get(Di)), Gi(t) && u.push(c.get(Pa)));
        break;
      case "set":
        Gi(t) && u.push(c.get(Di));
        break;
    }
  const f = { target: t, type: e, key: n, newValue: r, oldValue: i, oldTarget: s };
  if (u.length === 1)
    u[0] && $a(u[0], f);
  else {
    const m = [];
    for (const h of u)
      h && m.push(...h);
    $a(wc(m), f);
  }
}
function $a(t, e) {
  const n = Q(t) ? t : [...t];
  for (const r of n)
    r.computed && Vc(r, e);
  for (const r of n)
    r.computed || Vc(r, e);
}
function Vc(t, e) {
  (t !== Ye || t.allowRecurse) && (t.onTrigger && t.onTrigger(Se({ effect: t }, e)), t.scheduler ? t.scheduler() : t.run());
}
const rd = /* @__PURE__ */ Si("__proto__,__v_isRef,__isVue"), Zu = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(dc)
), id = /* @__PURE__ */ oa(), sd = /* @__PURE__ */ oa(!1, !0), od = /* @__PURE__ */ oa(!0), ad = /* @__PURE__ */ oa(!0, !0), Hc = /* @__PURE__ */ cd();
function cd() {
  const t = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
    t[e] = function(...n) {
      const r = oe(this);
      for (let s = 0, c = this.length; s < c; s++)
        Re(r, "get", s + "");
      const i = r[e](...n);
      return i === -1 || i === !1 ? r[e](...n.map(oe)) : i;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
    t[e] = function(...n) {
      Mi();
      const r = oe(this)[e].apply(this, n);
      return Vi(), r;
    };
  }), t;
}
function ud(t) {
  const e = oe(this);
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
    if (i === "__v_raw" && s === (t ? e ? sl : il : e ? rl : nl).get(r))
      return r;
    const c = Q(r);
    if (!t) {
      if (c && le(Hc, i))
        return Reflect.get(Hc, i, s);
      if (i === "hasOwnProperty")
        return ud;
    }
    const u = Reflect.get(r, i, s);
    return (dc(i) ? Zu.has(i) : rd(i)) || (t || Re(r, "get", i), e) ? u : qe(u) ? c && pc(i) ? u : u.value : Oe(u) ? t ? ol(u) : ua(u) : u;
  };
}
const ld = /* @__PURE__ */ Gu(), fd = /* @__PURE__ */ Gu(!0);
function Gu(t = !1) {
  return function(n, r, i, s) {
    let c = n[r];
    if (Oi(c) && qe(c) && !qe(i))
      return !1;
    if (!t && (!zo(i) && !Oi(i) && (c = oe(c), i = oe(i)), !Q(n) && qe(c) && !qe(i)))
      return c.value = i, !0;
    const u = Q(n) && pc(r) ? Number(r) < n.length : le(n, r), f = Reflect.set(n, r, i, s);
    return n === oe(s) && (u ? bs(i, c) && $t(n, "set", r, i, c) : $t(n, "add", r, i)), f;
  };
}
function dd(t, e) {
  const n = le(t, e), r = t[e], i = Reflect.deleteProperty(t, e);
  return i && n && $t(t, "delete", e, void 0, r), i;
}
function md(t, e) {
  const n = Reflect.has(t, e);
  return (!dc(e) || !Zu.has(e)) && Re(t, "has", e), n;
}
function hd(t) {
  return Re(t, "iterate", Q(t) ? "length" : Di), Reflect.ownKeys(t);
}
const Qu = {
  get: id,
  set: ld,
  deleteProperty: dd,
  has: md,
  ownKeys: hd
}, el = {
  get: od,
  set(t, e) {
    return _a(
      `Set operation on key "${String(e)}" failed: target is readonly.`,
      t
    ), !0;
  },
  deleteProperty(t, e) {
    return _a(
      `Delete operation on key "${String(e)}" failed: target is readonly.`,
      t
    ), !0;
  }
}, pd = /* @__PURE__ */ Se(
  {},
  Qu,
  {
    get: sd,
    set: fd
  }
), gd = /* @__PURE__ */ Se(
  {},
  el,
  {
    get: ad
  }
), Tc = (t) => t, aa = (t) => Reflect.getPrototypeOf(t);
function Bo(t, e, n = !1, r = !1) {
  t = t.__v_raw;
  const i = oe(t), s = oe(e);
  n || (e !== s && Re(i, "get", e), Re(i, "get", s));
  const { has: c } = aa(i), u = r ? Tc : n ? Ec : Ns;
  if (c.call(i, e))
    return u(t.get(e));
  if (c.call(i, s))
    return u(t.get(s));
  t !== i && t.get(e);
}
function Io(t, e = !1) {
  const n = this.__v_raw, r = oe(n), i = oe(t);
  return e || (t !== i && Re(r, "has", t), Re(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
}
function Oo(t, e = !1) {
  return t = t.__v_raw, !e && Re(oe(t), "iterate", Di), Reflect.get(t, "size", t);
}
function jc(t) {
  t = oe(t);
  const e = oe(this);
  return aa(e).has.call(e, t) || (e.add(t), $t(e, "add", t, t)), this;
}
function Rc(t, e) {
  e = oe(e);
  const n = oe(this), { has: r, get: i } = aa(n);
  let s = r.call(n, t);
  s ? tl(n, r, t) : (t = oe(t), s = r.call(n, t));
  const c = i.call(n, t);
  return n.set(t, e), s ? bs(e, c) && $t(n, "set", t, e, c) : $t(n, "add", t, e), this;
}
function Wc(t) {
  const e = oe(this), { has: n, get: r } = aa(e);
  let i = n.call(e, t);
  i ? tl(e, n, t) : (t = oe(t), i = n.call(e, t));
  const s = r ? r.call(e, t) : void 0, c = e.delete(t);
  return i && $t(e, "delete", t, void 0, s), c;
}
function zc() {
  const t = oe(this), e = t.size !== 0, n = Gi(t) ? new Map(t) : new Set(t), r = t.clear();
  return e && $t(t, "clear", void 0, void 0, n), r;
}
function ko(t, e) {
  return function(r, i) {
    const s = this, c = s.__v_raw, u = oe(c), f = e ? Tc : t ? Ec : Ns;
    return !t && Re(u, "iterate", Di), c.forEach((m, h) => r.call(i, f(m), f(h), s));
  };
}
function So(t, e, n) {
  return function(...r) {
    const i = this.__v_raw, s = oe(i), c = Gi(s), u = t === "entries" || t === Symbol.iterator && c, f = t === "keys" && c, m = i[t](...r), h = n ? Tc : e ? Ec : Ns;
    return !e && Re(
      s,
      "iterate",
      f ? Pa : Di
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
        oe(this)
      );
    }
    return t === "delete" ? !1 : this;
  };
}
function wd() {
  const t = {
    get(s) {
      return Bo(this, s);
    },
    get size() {
      return Oo(this);
    },
    has: Io,
    add: jc,
    set: Rc,
    delete: Wc,
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
    add: jc,
    set: Rc,
    delete: Wc,
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
  yd,
  Td,
  Ed,
  bd
] = /* @__PURE__ */ wd();
function ca(t, e) {
  const n = e ? t ? bd : Ed : t ? Td : yd;
  return (r, i, s) => i === "__v_isReactive" ? !t : i === "__v_isReadonly" ? t : i === "__v_raw" ? r : Reflect.get(
    le(n, i) && i in r ? n : r,
    i,
    s
  );
}
const Nd = {
  get: /* @__PURE__ */ ca(!1, !1)
}, xd = {
  get: /* @__PURE__ */ ca(!1, !0)
}, Bd = {
  get: /* @__PURE__ */ ca(!0, !1)
}, Id = {
  get: /* @__PURE__ */ ca(!0, !0)
};
function tl(t, e, n) {
  const r = oe(n);
  if (r !== n && e.call(t, r)) {
    const i = hc(t);
    console.warn(
      `Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const nl = /* @__PURE__ */ new WeakMap(), rl = /* @__PURE__ */ new WeakMap(), il = /* @__PURE__ */ new WeakMap(), sl = /* @__PURE__ */ new WeakMap();
function Od(t) {
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
function kd(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : Od(hc(t));
}
function ua(t) {
  return Oi(t) ? t : la(
    t,
    !1,
    Qu,
    Nd,
    nl
  );
}
function Sd(t) {
  return la(
    t,
    !1,
    pd,
    xd,
    rl
  );
}
function ol(t) {
  return la(
    t,
    !0,
    el,
    Bd,
    il
  );
}
function ds(t) {
  return la(
    t,
    !0,
    gd,
    Id,
    sl
  );
}
function la(t, e, n, r, i) {
  if (!Oe(t))
    return console.warn(`value cannot be made reactive: ${String(t)}`), t;
  if (t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const s = i.get(t);
  if (s)
    return s;
  const c = kd(t);
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
function zo(t) {
  return !!(t && t.__v_isShallow);
}
function Ma(t) {
  return _i(t) || Oi(t);
}
function oe(t) {
  const e = t && t.__v_raw;
  return e ? oe(e) : t;
}
function al(t) {
  return Ro(t, "__v_skip", !0), t;
}
const Ns = (t) => Oe(t) ? ua(t) : t, Ec = (t) => Oe(t) ? ol(t) : t;
function cl(t) {
  bi && Ye && (t = oe(t), Xu(t.dep || (t.dep = wc()), {
    target: t,
    type: "get",
    key: "value"
  }));
}
function ul(t, e) {
  t = oe(t);
  const n = t.dep;
  n && $a(n, {
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
  return vd(t, !1);
}
function vd(t, e) {
  return qe(t) ? t : new Jd(t, e);
}
class Jd {
  constructor(e, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? e : oe(e), this._value = n ? e : Ns(e);
  }
  get value() {
    return cl(this), this._value;
  }
  set value(e) {
    const n = this.__v_isShallow || zo(e) || Oi(e);
    e = n ? e : oe(e), bs(e, this._rawValue) && (this._rawValue = e, this._value = n ? e : Ns(e), ul(this, e));
  }
}
function hi(t) {
  return qe(t) ? t.value : t;
}
const Fd = {
  get: (t, e, n) => hi(Reflect.get(t, e, n)),
  set: (t, e, n, r) => {
    const i = t[e];
    return qe(i) && !qe(n) ? (i.value = n, !0) : Reflect.set(t, e, n, r);
  }
};
function ll(t) {
  return _i(t) ? t : new Proxy(t, Fd);
}
class Ad {
  constructor(e, n, r, i) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new yc(e, () => {
      this._dirty || (this._dirty = !0, ul(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !i, this.__v_isReadonly = r;
  }
  get value() {
    const e = oe(this);
    return cl(e), (e._dirty || !e._cacheable) && (e._dirty = !1, e._value = e.effect.run()), e._value;
  }
  set value(e) {
    this._setter(e);
  }
}
function Ud(t, e, n = !1) {
  let r, i;
  const s = re(t);
  s ? (r = t, i = () => {
    console.warn("Write operation failed: computed value is readonly");
  }) : (r = t.get, i = t.set);
  const c = new Ad(r, i, s || !i, n);
  return e && !n && (c.effect.onTrack = e.onTrack, c.effect.onTrigger = e.onTrigger), c;
}
const qi = [];
function Co(t) {
  qi.push(t);
}
function Do() {
  qi.pop();
}
function _(t, ...e) {
  Mi();
  const n = qi.length ? qi[qi.length - 1].component : null, r = n && n.appContext.config.warnHandler, i = Ld();
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
`, ...Cd(i)), console.warn(...s);
  }
  Vi();
}
function Ld() {
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
function Cd(t) {
  const e = [];
  return t.forEach((n, r) => {
    e.push(...r === 0 ? [] : [`
`], ...Dd(n));
  }), e;
}
function Dd({ vnode: t, recurseCount: e }) {
  const n = e > 0 ? `... (${e} recursive calls)` : "", r = t.component ? t.component.parent == null : !1, i = ` at <${wa(
    t.component,
    t.type,
    r
  )}`, s = ">" + n;
  return t.props ? [i, ..._d(t.props), s] : [i + s];
}
function _d(t) {
  const e = [], n = Object.keys(t);
  return n.slice(0, 3).forEach((r) => {
    e.push(...fl(r, t[r]));
  }), n.length > 3 && e.push(" ..."), e;
}
function fl(t, e, n) {
  return Ue(e) ? (e = JSON.stringify(e), n ? e : [`${t}=${e}`]) : typeof e == "number" || typeof e == "boolean" || e == null ? n ? e : [`${t}=${e}`] : qe(e) ? (e = fl(t, oe(e.value), !0), n ? e : [`${t}=Ref<`, e, ">"]) : re(e) ? [`${t}=fn${e.name ? `<${e.name}>` : ""}`] : (e = oe(e), n ? e : [`${t}=`, e]);
}
const bc = {
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
  if (re(t)) {
    const s = ri(t, e, n, r);
    return s && mc(s) && s.catch((c) => {
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
    const c = e.proxy, u = bc[n];
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
  qd(t, n, i, r);
}
function qd(t, e, n, r = !0) {
  {
    const i = bc[e];
    if (n && Co(n), _(`Unhandled error${i ? ` during execution of ${i}` : ""}`), n && Do(), r)
      throw t;
    console.error(t);
  }
}
let xs = !1, Va = !1;
const je = [];
let Ot = 0;
const Qi = [];
let It = null, pi = 0;
const dl = /* @__PURE__ */ Promise.resolve();
let Nc = null;
const Kd = 100;
function Ha(t) {
  const e = Nc || dl;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function Pd(t) {
  let e = Ot + 1, n = je.length;
  for (; e < n; ) {
    const r = e + n >>> 1;
    Bs(je[r]) < t ? e = r + 1 : n = r;
  }
  return e;
}
function da(t) {
  (!je.length || !je.includes(
    t,
    xs && t.allowRecurse ? Ot + 1 : Ot
  )) && (t.id == null ? je.push(t) : je.splice(Pd(t.id), 0, t), ml());
}
function ml() {
  !xs && !Va && (Va = !0, Nc = dl.then(gl));
}
function $d(t) {
  const e = je.indexOf(t);
  e > Ot && je.splice(e, 1);
}
function hl(t) {
  Q(t) ? Qi.push(...t) : (!It || !It.includes(
    t,
    t.allowRecurse ? pi + 1 : pi
  )) && Qi.push(t), ml();
}
function Yc(t, e = xs ? Ot + 1 : 0) {
  for (t = t || /* @__PURE__ */ new Map(); e < je.length; e++) {
    const n = je[e];
    if (n && n.pre) {
      if (xc(t, n))
        continue;
      je.splice(e, 1), e--, n();
    }
  }
}
function pl(t) {
  if (Qi.length) {
    const e = [...new Set(Qi)];
    if (Qi.length = 0, It) {
      It.push(...e);
      return;
    }
    for (It = e, t = t || /* @__PURE__ */ new Map(), It.sort((n, r) => Bs(n) - Bs(r)), pi = 0; pi < It.length; pi++)
      xc(t, It[pi]) || It[pi]();
    It = null, pi = 0;
  }
}
const Bs = (t) => t.id == null ? 1 / 0 : t.id, Md = (t, e) => {
  const n = Bs(t) - Bs(e);
  if (n === 0) {
    if (t.pre && !e.pre)
      return -1;
    if (e.pre && !t.pre)
      return 1;
  }
  return n;
};
function gl(t) {
  Va = !1, xs = !0, t = t || /* @__PURE__ */ new Map(), je.sort(Md);
  const e = (n) => xc(t, n);
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
    Ot = 0, je.length = 0, pl(t), xs = !1, Nc = null, (je.length || Qi.length) && gl(t);
  }
}
function xc(t, e) {
  if (!t.has(e))
    t.set(e, 1);
  else {
    const n = t.get(e);
    if (n > Kd) {
      const r = e.ownerInstance, i = r && jl(r.type);
      return _(
        `Maximum recursive updates exceeded${i ? ` in component <${i}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`
      ), !0;
    } else
      t.set(e, n + 1);
  }
}
let Ni = !1;
const zi = /* @__PURE__ */ new Set();
Wo().__VUE_HMR_RUNTIME__ = {
  createRecord: Na(wl),
  rerender: Na(jd),
  reload: Na(Rd)
};
const $i = /* @__PURE__ */ new Map();
function Vd(t) {
  const e = t.type.__hmrId;
  let n = $i.get(e);
  n || (wl(e, t.type), n = $i.get(e)), n.instances.add(t);
}
function Hd(t) {
  $i.get(t.type.__hmrId).instances.delete(t);
}
function wl(t, e) {
  return $i.has(t) ? !1 : ($i.set(t, {
    initialDef: ws(e),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function ws(t) {
  return Rl(t) ? t.__vccOpts : t;
}
function jd(t, e) {
  const n = $i.get(t);
  n && (n.initialDef.render = e, [...n.instances].forEach((r) => {
    e && (r.render = e, ws(r.type).render = e), r.renderCache = [], Ni = !0, r.update(), Ni = !1;
  }));
}
function Rd(t, e) {
  const n = $i.get(t);
  if (!n)
    return;
  e = ws(e), Xc(n.initialDef, e);
  const r = [...n.instances];
  for (const i of r) {
    const s = ws(i.type);
    zi.has(s) || (s !== n.initialDef && Xc(s, e), zi.add(s)), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (zi.add(s), i.ceReload(e.styles), zi.delete(s)) : i.parent ? da(i.parent.update) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  hl(() => {
    for (const i of r)
      zi.delete(
        ws(i.type)
      );
  });
}
function Xc(t, e) {
  Se(t, e);
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
let kt, ms = [], ja = !1;
function To(t, ...e) {
  kt ? kt.emit(t, ...e) : ja || ms.push({ event: t, args: e });
}
function yl(t, e) {
  var n, r;
  kt = t, kt ? (kt.enabled = !0, ms.forEach(({ event: i, args: s }) => kt.emit(i, ...s)), ms = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((r = (n = window.navigator) == null ? void 0 : n.userAgent) != null && r.includes("jsdom")) ? ((e.__VUE_DEVTOOLS_HOOK_REPLAY__ = e.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    yl(s, e);
  }), setTimeout(() => {
    kt || (e.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, ja = !0, ms = []);
  }, 3e3)) : (ja = !0, ms = []);
}
function Wd(t, e) {
  To("app:init", t, e, {
    Fragment: ht,
    Text: Eo,
    Comment: it,
    Static: qo
  });
}
function zd(t) {
  To("app:unmount", t);
}
const Yd = /* @__PURE__ */ Bc(
  "component:added"
  /* COMPONENT_ADDED */
), Tl = /* @__PURE__ */ Bc(
  "component:updated"
  /* COMPONENT_UPDATED */
), Xd = /* @__PURE__ */ Bc(
  "component:removed"
  /* COMPONENT_REMOVED */
), Zd = (t) => {
  kt && typeof kt.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !kt.cleanupBuffer(t) && Xd(t);
};
function Bc(t) {
  return (e) => {
    To(
      t,
      e.appContext.app,
      e.uid,
      e.parent ? e.parent.uid : void 0,
      e
    );
  };
}
const Gd = /* @__PURE__ */ El(
  "perf:start"
  /* PERFORMANCE_START */
), Qd = /* @__PURE__ */ El(
  "perf:end"
  /* PERFORMANCE_END */
);
function El(t) {
  return (e, n, r) => {
    To(t, e.appContext.app, e.uid, e, n, r);
  };
}
function em(t, e, n) {
  To(
    "component:emit",
    t.appContext.app,
    t,
    e,
    n
  );
}
function tm(t, e, ...n) {
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
        (!g || !(Ai(e) in g)) && _(
          `Component emitted event "${e}" but it is neither declared in the emits option nor as an "${Ai(e)}" prop.`
        );
      else {
        const y = h[e];
        re(y) && (y(...n) || _(
          `Invalid event arguments: event validation failed for event "${e}".`
        ));
      }
  }
  let i = n;
  const s = e.startsWith("update:"), c = s && e.slice(7);
  if (c && c in r) {
    const h = `${c === "modelValue" ? "model" : c}Modifiers`, { number: g, trim: y } = r[h] || xe;
    y && (i = n.map((b) => Ue(b) ? b.trim() : b)), g && (i = n.map($f));
  }
  em(t, e, i);
  {
    const h = e.toLowerCase();
    h !== e && r[Ai(h)] && _(
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
function bl(t, e, n = !1) {
  const r = e.emitsCache, i = r.get(t);
  if (i !== void 0)
    return i;
  const s = t.emits;
  let c = {}, u = !1;
  if (!re(t)) {
    const f = (m) => {
      const h = bl(m, e, !0);
      h && (u = !0, Se(c, h));
    };
    !n && e.mixins.length && e.mixins.forEach(f), t.extends && f(t.extends), t.mixins && t.mixins.forEach(f);
  }
  return !s && !u ? (Oe(t) && r.set(t, null), null) : (Q(s) ? s.forEach((f) => c[f] = null) : Se(c, s), Oe(t) && r.set(t, c), c);
}
function ma(t, e) {
  return !t || !yo(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), le(t, e[0].toLowerCase() + e.slice(1)) || le(t, Bi(e)) || le(t, e));
}
let ct = null, Nl = null;
function Yo(t) {
  const e = ct;
  return ct = t, Nl = t && t.type.__scopeId || null, e;
}
function nm(t, e = ct, n) {
  if (!e || t._n)
    return t;
  const r = (...i) => {
    r._d && uu(-1);
    const s = Yo(e);
    let c;
    try {
      c = t(...i);
    } finally {
      Yo(s), r._d && uu(1);
    }
    return Tl(e), c;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
let Ra = !1;
function Xo() {
  Ra = !0;
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
    inheritAttrs: A
  } = t;
  let $, R;
  const ue = Yo(t);
  Ra = !1;
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
      ), R = e.props ? f : im(f);
    }
  } catch (F) {
    ys.length = 0, fa(F, t, 1), $ = Pt(it);
  }
  let K = $, te;
  if ($.patchFlag > 0 && $.patchFlag & 2048 && ([K, te] = rm($)), R && A !== !1) {
    const F = Object.keys(R), { shapeFlag: z } = K;
    if (F.length) {
      if (z & 7)
        c && F.some(jo) && (R = sm(
          R,
          c
        )), K = ki(K, R);
      else if (!Ra && K.type !== it) {
        const G = Object.keys(f), ee = [], ie = [];
        for (let Be = 0, ke = G.length; Be < ke; Be++) {
          const Le = G[Be];
          yo(Le) ? jo(Le) || ee.push(Le[2].toLowerCase() + Le.slice(3)) : ie.push(Le);
        }
        ie.length && _(
          `Extraneous non-props attributes (${ie.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), ee.length && _(
          `Extraneous non-emits event listeners (${ee.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (Zc(K) || _(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), K = ki(K), K.dirs = K.dirs ? K.dirs.concat(n.dirs) : n.dirs), n.transition && (Zc(K) || _(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), K.transition = n.transition), te ? te(K) : $ = K, Yo(ue), $;
}
const rm = (t) => {
  const e = t.children, n = t.dynamicChildren, r = xl(e);
  if (!r)
    return [t, void 0];
  const i = e.indexOf(r), s = n ? n.indexOf(r) : -1, c = (u) => {
    e[i] = u, n && (s > -1 ? n[s] = u : u.patchFlag > 0 && (t.dynamicChildren = [...n, u]));
  };
  return [pt(r), c];
};
function xl(t) {
  let e;
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (Jc(r)) {
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
const im = (t) => {
  let e;
  for (const n in t)
    (n === "class" || n === "style" || yo(n)) && ((e || (e = {}))[n] = t[n]);
  return e;
}, sm = (t, e) => {
  const n = {};
  for (const r in t)
    (!jo(r) || !(r.slice(9) in e)) && (n[r] = t[r]);
  return n;
}, Zc = (t) => t.shapeFlag & 7 || t.type === it;
function om(t, e, n) {
  const { props: r, children: i, component: s } = t, { props: c, children: u, patchFlag: f } = e, m = s.emitsOptions;
  if ((i || u) && Ni || e.dirs || e.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return r ? Gc(r, c, m) : !!c;
    if (f & 8) {
      const h = e.dynamicProps;
      for (let g = 0; g < h.length; g++) {
        const y = h[g];
        if (c[y] !== r[y] && !ma(m, y))
          return !0;
      }
    }
  } else
    return (i || u) && (!u || !u.$stable) ? !0 : r === c ? !1 : r ? c ? Gc(r, c, m) : !0 : !!c;
  return !1;
}
function Gc(t, e, n) {
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
function am({ vnode: t, parent: e }, n) {
  for (; e && e.subTree === t; )
    (t = e.vnode).el = n, e = e.parent;
}
const cm = (t) => t.__isSuspense;
function um(t, e) {
  e && e.pendingBranch ? Q(t) ? e.effects.push(...t) : e.effects.push(t) : hl(t);
}
function Bl(t, e) {
  return Ic(t, null, e);
}
const vo = {};
function Ba(t, e, n) {
  return re(e) || _(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Ic(t, e, n);
}
function Ic(t, e, { immediate: n, deep: r, flush: i, onTrack: s, onTrigger: c } = xe) {
  var u;
  e || (n !== void 0 && _(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && _(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const f = (F) => {
    _(
      "Invalid watch source: ",
      F,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, m = ed() === ((u = Me) == null ? void 0 : u.scope) ? Me : null;
  let h, g = !1, y = !1;
  if (qe(t) ? (h = () => t.value, g = zo(t)) : _i(t) ? (h = () => t, r = !0) : Q(t) ? (y = !0, g = t.some((F) => _i(F) || zo(F)), h = () => t.map((F) => {
    if (qe(F))
      return F.value;
    if (_i(F))
      return Xi(F);
    if (re(F))
      return ri(F, m, 2);
    f(F);
  })) : re(t) ? e ? h = () => ri(t, m, 2) : h = () => {
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
    b = K.onStop = () => {
      ri(F, m, 4);
    };
  }, A;
  if (Os)
    if (S = et, e ? n && Et(e, m, 3, [
      h(),
      y ? [] : void 0,
      S
    ]) : h(), i === "sync") {
      const F = bh();
      A = F.__watcherHandles || (F.__watcherHandles = []);
    } else
      return et;
  let $ = y ? new Array(t.length).fill(vo) : vo;
  const R = () => {
    if (K.active)
      if (e) {
        const F = K.run();
        (r || g || (y ? F.some(
          (z, G) => bs(z, $[G])
        ) : bs(F, $))) && (b && b(), Et(e, m, 3, [
          F,
          // pass undefined as the old value when it's changed for the first time
          $ === vo ? void 0 : y && $[0] === vo ? [] : $,
          S
        ]), $ = F);
      } else
        K.run();
  };
  R.allowRecurse = !!e;
  let ue;
  i === "sync" ? ue = R : i === "post" ? ue = () => Ze(R, m && m.suspense) : (R.pre = !0, m && (R.id = m.uid), ue = () => da(R));
  const K = new yc(h, ue);
  K.onTrack = s, K.onTrigger = c, e ? n ? R() : $ = K.run() : i === "post" ? Ze(
    K.run.bind(K),
    m && m.suspense
  ) : K.run();
  const te = () => {
    K.stop(), m && m.scope && fc(m.scope.effects, K);
  };
  return A && A.push(te), te;
}
function lm(t, e, n) {
  const r = this.proxy, i = Ue(t) ? t.includes(".") ? Il(r, t) : () => r[t] : t.bind(r, r);
  let s;
  re(e) ? s = e : (s = e.handler, n = e);
  const c = Me;
  ns(this);
  const u = Ic(i, s.bind(r), n);
  return c ? ns(c) : Pi(), u;
}
function Il(t, e) {
  const n = e.split(".");
  return () => {
    let r = t;
    for (let i = 0; i < n.length && r; i++)
      r = r[n[i]];
    return r;
  };
}
function Xi(t, e) {
  if (!Oe(t) || t.__v_skip || (e = e || /* @__PURE__ */ new Set(), e.has(t)))
    return t;
  if (e.add(t), qe(t))
    Xi(t.value, e);
  else if (Q(t))
    for (let n = 0; n < t.length; n++)
      Xi(t[n], e);
  else if (Cf(t) || Gi(t))
    t.forEach((n) => {
      Xi(n, e);
    });
  else if (_f(t))
    for (const n in t)
      Xi(t[n], e);
  return t;
}
function Ol(t) {
  qf(t) && _("Do not use built-in directive ids as custom directive id: " + t);
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
  return re(t) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => Se({ name: t.name }, e, { setup: t }))()
  ) : t;
}
const _o = (t) => !!t.type.__asyncLoader, Oc = (t) => t.type.__isKeepAlive;
function fm(t, e) {
  kl(t, "a", e);
}
function dm(t, e) {
  kl(t, "da", e);
}
function kl(t, e, n = Me) {
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
      Oc(i.parent.vnode) && mm(r, e, n, i), i = i.parent;
  }
}
function mm(t, e, n, r) {
  const i = ha(
    e,
    t,
    r,
    !0
    /* prepend */
  );
  Sl(() => {
    fc(r[e], i);
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
    const i = Ai(bc[t].replace(/ hook$/, ""));
    _(
      `${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const oi = (t) => (e, n = Me) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Os || t === "sp") && ha(t, (...r) => e(...r), n)
), hm = oi("bm"), pa = oi("m"), pm = oi("bu"), gm = oi("u"), wm = oi("bum"), Sl = oi("um"), ym = oi("sp"), Tm = oi(
  "rtg"
), Em = oi(
  "rtc"
);
function bm(t, e = Me) {
  ha("ec", t, e);
}
const Nm = Symbol.for("v-ndc"), Wa = (t) => t ? Vl(t) ? Uc(t) || t.proxy : Wa(t.parent) : null, Ki = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Se(/* @__PURE__ */ Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => ds(t.props),
    $attrs: (t) => ds(t.attrs),
    $slots: (t) => ds(t.slots),
    $refs: (t) => ds(t.refs),
    $parent: (t) => Wa(t.parent),
    $root: (t) => Wa(t.root),
    $emit: (t) => t.emit,
    $options: (t) => Sc(t),
    $forceUpdate: (t) => t.f || (t.f = () => da(t.update)),
    $nextTick: (t) => t.n || (t.n = Ha.bind(t.proxy)),
    $watch: (t) => lm.bind(t)
  })
), kc = (t) => t === "_" || t === "$", Ia = (t, e) => t !== xe && !t.__isScriptSetup && le(t, e), vl = {
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
        if (i !== xe && le(i, e))
          return c[e] = 2, i[e];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (m = t.propsOptions[0]) && le(m, e)
        )
          return c[e] = 3, s[e];
        if (n !== xe && le(n, e))
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
    if (n !== xe && le(n, e))
      return c[e] = 4, n[e];
    if (
      // {} properties
      y = f.config.globalProperties, le(y, e)
    )
      return y[e];
    ct && (!Ue(e) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    e.indexOf("__v") !== 0) && (i !== xe && kc(e[0]) && le(i, e) ? _(
      `Property ${JSON.stringify(
        e
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : t === ct && _(
      `Property ${JSON.stringify(e)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: t }, e, n) {
    const { data: r, setupState: i, ctx: s } = t;
    return Ia(i, e) ? (i[e] = n, !0) : i.__isScriptSetup && le(i, e) ? (_(`Cannot mutate <script setup> binding "${e}" from Options API.`), !1) : r !== xe && le(r, e) ? (r[e] = n, !0) : le(t.props, e) ? (_(`Attempting to mutate prop "${e}". Props are readonly.`), !1) : e[0] === "$" && e.slice(1) in t ? (_(
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
    return !!n[c] || t !== xe && le(t, c) || Ia(e, c) || (u = s[0]) && le(u, c) || le(r, c) || le(Ki, c) || le(i.config.globalProperties, c);
  },
  defineProperty(t, e, n) {
    return n.get != null ? t._.accessCache[e] = 0 : le(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n);
  }
};
vl.ownKeys = (t) => (_(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(t));
function xm(t) {
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
function Bm(t) {
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
function Im(t) {
  const { ctx: e, setupState: n } = t;
  Object.keys(oe(n)).forEach((r) => {
    if (!n.__isScriptSetup) {
      if (kc(r[0])) {
        _(
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
function Qc(t) {
  return Q(t) ? t.reduce(
    (e, n) => (e[n] = null, e),
    {}
  ) : t;
}
function Om() {
  const t = /* @__PURE__ */ Object.create(null);
  return (e, n) => {
    t[n] ? _(`${e} property "${n}" is already defined in ${t[n]}.`) : t[n] = e;
  };
}
let za = !0;
function km(t) {
  const e = Sc(t), n = t.proxy, r = t.ctx;
  za = !1, e.beforeCreate && eu(e.beforeCreate, t, "bc");
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
    activated: A,
    deactivated: $,
    beforeDestroy: R,
    beforeUnmount: ue,
    destroyed: K,
    unmounted: te,
    render: F,
    renderTracked: z,
    renderTriggered: G,
    errorCaptured: ee,
    serverPrefetch: ie,
    // public API
    expose: Be,
    inheritAttrs: ke,
    // assets
    components: Le,
    directives: Xe,
    filters: Vt
  } = e, He = Om();
  {
    const [fe] = t.propsOptions;
    if (fe)
      for (const q in fe)
        He("Props", q);
  }
  if (m && Sm(m, r, He), c)
    for (const fe in c) {
      const q = c[fe];
      re(q) ? (Object.defineProperty(r, fe, {
        value: q.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }), He("Methods", fe)) : _(
        `Method "${fe}" has type "${typeof q}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (i) {
    re(i) || _(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const fe = i.call(n, n);
    if (mc(fe) && _(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !Oe(fe))
      _("data() should return an object.");
    else {
      t.data = ua(fe);
      for (const q in fe)
        He("Data", q), kc(q[0]) || Object.defineProperty(r, q, {
          configurable: !0,
          enumerable: !0,
          get: () => fe[q],
          set: et
        });
    }
  }
  if (za = !0, s)
    for (const fe in s) {
      const q = s[fe], D = re(q) ? q.bind(n, n) : re(q.get) ? q.get.bind(n, n) : et;
      D === et && _(`Computed property "${fe}" has no getter.`);
      const Y = !re(q) && re(q.set) ? q.set.bind(n) : () => {
        _(
          `Write operation failed: computed property "${fe}" is readonly.`
        );
      }, j = Th({
        get: D,
        set: Y
      });
      Object.defineProperty(r, fe, {
        enumerable: !0,
        configurable: !0,
        get: () => j.value,
        set: (X) => j.value = X
      }), He("Computed", fe);
    }
  if (u)
    for (const fe in u)
      Jl(u[fe], r, n, fe);
  if (f) {
    const fe = re(f) ? f.call(n) : f;
    Reflect.ownKeys(fe).forEach((q) => {
      Lm(q, fe[q]);
    });
  }
  h && eu(h, t, "c");
  function Pe(fe, q) {
    Q(q) ? q.forEach((D) => fe(D.bind(n))) : q && fe(q.bind(n));
  }
  if (Pe(hm, g), Pe(pa, y), Pe(pm, b), Pe(gm, S), Pe(fm, A), Pe(dm, $), Pe(bm, ee), Pe(Em, z), Pe(Tm, G), Pe(wm, ue), Pe(Sl, te), Pe(ym, ie), Q(Be))
    if (Be.length) {
      const fe = t.exposed || (t.exposed = {});
      Be.forEach((q) => {
        Object.defineProperty(fe, q, {
          get: () => n[q],
          set: (D) => n[q] = D
        });
      });
    } else
      t.exposed || (t.exposed = {});
  F && t.render === et && (t.render = F), ke != null && (t.inheritAttrs = ke), Le && (t.components = Le), Xe && (t.directives = Xe);
}
function Sm(t, e, n = et) {
  Q(t) && (t = Ya(t));
  for (const r in t) {
    const i = t[r];
    let s;
    Oe(i) ? "default" in i ? s = bt(
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
function eu(t, e, n) {
  Et(
    Q(t) ? t.map((r) => r.bind(e.proxy)) : t.bind(e.proxy),
    e,
    n
  );
}
function Jl(t, e, n, r) {
  const i = r.includes(".") ? Il(n, r) : () => n[r];
  if (Ue(t)) {
    const s = e[t];
    re(s) ? Ba(i, s) : _(`Invalid watch handler specified by key "${t}"`, s);
  } else if (re(t))
    Ba(i, t.bind(n));
  else if (Oe(t))
    if (Q(t))
      t.forEach((s) => Jl(s, e, n, r));
    else {
      const s = re(t.handler) ? t.handler.bind(n) : e[t.handler];
      re(s) ? Ba(i, s, t) : _(`Invalid watch handler specified by key "${t.handler}"`, s);
    }
  else
    _(`Invalid watch option: "${r}"`, t);
}
function Sc(t) {
  const e = t.type, { mixins: n, extends: r } = e, {
    mixins: i,
    optionsCache: s,
    config: { optionMergeStrategies: c }
  } = t.appContext, u = s.get(e);
  let f;
  return u ? f = u : !i.length && !n && !r ? f = e : (f = {}, i.length && i.forEach(
    (m) => Zo(f, m, c, !0)
  ), Zo(f, e, c)), Oe(e) && s.set(e, f), f;
}
function Zo(t, e, n, r = !1) {
  const { mixins: i, extends: s } = e;
  s && Zo(t, s, n, !0), i && i.forEach(
    (c) => Zo(t, c, n, !0)
  );
  for (const c in e)
    if (r && c === "expose")
      _(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const u = vm[c] || n && n[c];
      t[c] = u ? u(t[c], e[c]) : e[c];
    }
  return t;
}
const vm = {
  data: tu,
  props: nu,
  emits: nu,
  // objects
  methods: hs,
  computed: hs,
  // lifecycle
  beforeCreate: ze,
  created: ze,
  beforeMount: ze,
  mounted: ze,
  beforeUpdate: ze,
  updated: ze,
  beforeDestroy: ze,
  beforeUnmount: ze,
  destroyed: ze,
  unmounted: ze,
  activated: ze,
  deactivated: ze,
  errorCaptured: ze,
  serverPrefetch: ze,
  // assets
  components: hs,
  directives: hs,
  // watch
  watch: Fm,
  // provide / inject
  provide: tu,
  inject: Jm
};
function tu(t, e) {
  return e ? t ? function() {
    return Se(
      re(t) ? t.call(this, this) : t,
      re(e) ? e.call(this, this) : e
    );
  } : e : t;
}
function Jm(t, e) {
  return hs(Ya(t), Ya(e));
}
function Ya(t) {
  if (Q(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++)
      e[t[n]] = t[n];
    return e;
  }
  return t;
}
function ze(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function hs(t, e) {
  return t ? Se(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function nu(t, e) {
  return t ? Q(t) && Q(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : Se(
    /* @__PURE__ */ Object.create(null),
    Qc(t),
    Qc(e ?? {})
  ) : e;
}
function Fm(t, e) {
  if (!t)
    return e;
  if (!e)
    return t;
  const n = Se(/* @__PURE__ */ Object.create(null), t);
  for (const r in e)
    n[r] = ze(t[r], e[r]);
  return n;
}
function Fl() {
  return {
    app: null,
    config: {
      isNativeTag: ju,
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
let Am = 0;
function Um(t, e) {
  return function(r, i = null) {
    re(r) || (r = Se({}, r)), i != null && !Oe(i) && (_("root props passed to app.mount() must be an object."), i = null);
    const s = Fl();
    Object.defineProperty(s.config, "unwrapInjectedRef", {
      get() {
        return !0;
      },
      set() {
        _(
          "app.config.unwrapInjectedRef has been deprecated. 3.3 now alawys unwraps injected refs in Options API."
        );
      }
    });
    const c = /* @__PURE__ */ new Set();
    let u = !1;
    const f = s.app = {
      _uid: Am++,
      _component: r,
      _props: i,
      _container: null,
      _context: s,
      _instance: null,
      version: du,
      get config() {
        return s.config;
      },
      set config(m) {
        _(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(m, ...h) {
        return c.has(m) ? _("Plugin has already been applied to target app.") : m && re(m.install) ? (c.add(m), m.install(f, ...h)) : re(m) ? (c.add(m), m(f, ...h)) : _(
          'A plugin must either be a function or an object with an "install" function.'
        ), f;
      },
      mixin(m) {
        return s.mixins.includes(m) ? _(
          "Mixin has already been applied to target app" + (m.name ? `: ${m.name}` : "")
        ) : s.mixins.push(m), f;
      },
      component(m, h) {
        return ec(m, s.config), h ? (s.components[m] && _(`Component "${m}" has already been registered in target app.`), s.components[m] = h, f) : s.components[m];
      },
      directive(m, h) {
        return Ol(m), h ? (s.directives[m] && _(`Directive "${m}" has already been registered in target app.`), s.directives[m] = h, f) : s.directives[m];
      },
      mount(m, h, g) {
        if (u)
          _(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          m.__vue_app__ && _(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const y = Pt(
            r,
            i
          );
          return y.appContext = s, s.reload = () => {
            t(ki(y), m, g);
          }, h && e ? e(y, m) : t(y, m, g), u = !0, f._container = m, m.__vue_app__ = f, f._instance = y.component, Wd(f, du), Uc(y.component) || y.component.proxy;
        }
      },
      unmount() {
        u ? (t(null, f._container), f._instance = null, zd(f), delete f._container.__vue_app__) : _("Cannot unmount an app that is not mounted.");
      },
      provide(m, h) {
        return m in s.provides && _(
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
function Lm(t, e) {
  if (!Me)
    _("provide() can only be used inside setup().");
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
      return n && re(e) ? e.call(r && r.proxy) : e;
    _(`injection "${String(t)}" not found.`);
  } else
    _("inject() can only be used inside setup() or functional components.");
}
function Cm(t, e, n, r = !1) {
  const i = {}, s = {};
  Ro(s, ga, 1), t.propsDefaults = /* @__PURE__ */ Object.create(null), Al(t, e, i, s);
  for (const c in t.propsOptions[0])
    c in i || (i[c] = void 0);
  Ll(e || {}, i, t), n ? t.props = r ? i : Sd(i) : t.type.props ? t.props = i : t.props = s, t.attrs = s;
}
function Dm(t) {
  for (; t; ) {
    if (t.type.__hmrId)
      return !0;
    t = t.parent;
  }
}
function _m(t, e, n, r) {
  const {
    props: i,
    attrs: s,
    vnode: { patchFlag: c }
  } = t, u = oe(i), [f] = t.propsOptions;
  let m = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !Dm(t) && (r || c > 0) && !(c & 16)
  ) {
    if (c & 8) {
      const h = t.vnode.dynamicProps;
      for (let g = 0; g < h.length; g++) {
        let y = h[g];
        if (ma(t.emitsOptions, y))
          continue;
        const b = e[y];
        if (f)
          if (le(s, y))
            b !== s[y] && (s[y] = b, m = !0);
          else {
            const S = ts(y);
            i[S] = Xa(
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
    Al(t, e, i, s) && (m = !0);
    let h;
    for (const g in u)
      (!e || // for camelCase
      !le(e, g) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((h = Bi(g)) === g || !le(e, h))) && (f ? n && // for camelCase
      (n[g] !== void 0 || // for kebab-case
      n[h] !== void 0) && (i[g] = Xa(
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
        (!e || !le(e, g)) && (delete s[g], m = !0);
  }
  m && $t(t, "set", "$attrs"), Ll(e || {}, i, t);
}
function Al(t, e, n, r) {
  const [i, s] = t.propsOptions;
  let c = !1, u;
  if (e)
    for (let f in e) {
      if (Lo(f))
        continue;
      const m = e[f];
      let h;
      i && le(i, h = ts(f)) ? !s || !s.includes(h) ? n[h] = m : (u || (u = {}))[h] = m : ma(t.emitsOptions, f) || (!(f in r) || m !== r[f]) && (r[f] = m, c = !0);
    }
  if (s) {
    const f = oe(n), m = u || xe;
    for (let h = 0; h < s.length; h++) {
      const g = s[h];
      n[g] = Xa(
        i,
        f,
        g,
        m[g],
        t,
        !le(m, g)
      );
    }
  }
  return c;
}
function Xa(t, e, n, r, i, s) {
  const c = t[n];
  if (c != null) {
    const u = le(c, "default");
    if (u && r === void 0) {
      const f = c.default;
      if (c.type !== Function && !c.skipFactory && re(f)) {
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
function Ul(t, e, n = !1) {
  const r = e.propsCache, i = r.get(t);
  if (i)
    return i;
  const s = t.props, c = {}, u = [];
  let f = !1;
  if (!re(t)) {
    const h = (g) => {
      f = !0;
      const [y, b] = Ul(g, e, !0);
      Se(c, y), b && u.push(...b);
    };
    !n && e.mixins.length && e.mixins.forEach(h), t.extends && h(t.extends), t.mixins && t.mixins.forEach(h);
  }
  if (!s && !f)
    return Oe(t) && r.set(t, Zi), Zi;
  if (Q(s))
    for (let h = 0; h < s.length; h++) {
      Ue(s[h]) || _("props must be strings when using array syntax.", s[h]);
      const g = ts(s[h]);
      ru(g) && (c[g] = xe);
    }
  else if (s) {
    Oe(s) || _("invalid props options", s);
    for (const h in s) {
      const g = ts(h);
      if (ru(g)) {
        const y = s[h], b = c[g] = Q(y) || re(y) ? { type: y } : Se({}, y);
        if (b) {
          const S = su(Boolean, b.type), A = su(String, b.type);
          b[
            0
            /* shouldCast */
          ] = S > -1, b[
            1
            /* shouldCastTrue */
          ] = A < 0 || S < A, (S > -1 || le(b, "default")) && u.push(g);
        }
      }
    }
  }
  const m = [c, u];
  return Oe(t) && r.set(t, m), m;
}
function ru(t) {
  return t[0] !== "$" ? !0 : (_(`Invalid prop name: "${t}" is a reserved property.`), !1);
}
function Za(t) {
  const e = t && t.toString().match(/^\s*(function|class) (\w+)/);
  return e ? e[2] : t === null ? "null" : "";
}
function iu(t, e) {
  return Za(t) === Za(e);
}
function su(t, e) {
  return Q(e) ? e.findIndex((n) => iu(n, t)) : re(e) && iu(e, t) ? 0 : -1;
}
function Ll(t, e, n) {
  const r = oe(e), i = n.propsOptions[0];
  for (const s in i) {
    let c = i[s];
    c != null && qm(
      s,
      r[s],
      c,
      !le(t, s) && !le(t, Bi(s))
    );
  }
}
function qm(t, e, n, r) {
  const { type: i, required: s, validator: c, skipCheck: u } = n;
  if (s && r) {
    _('Missing required prop: "' + t + '"');
    return;
  }
  if (!(e == null && !s)) {
    if (i != null && i !== !0 && !u) {
      let f = !1;
      const m = Q(i) ? i : [i], h = [];
      for (let g = 0; g < m.length && !f; g++) {
        const { valid: y, expectedType: b } = Pm(e, m[g]);
        h.push(b || ""), f = y;
      }
      if (!f) {
        _($m(t, e, h));
        return;
      }
    }
    c && !c(e) && _('Invalid prop: custom validator check failed for prop "' + t + '".');
  }
}
const Km = /* @__PURE__ */ Si(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Pm(t, e) {
  let n;
  const r = Za(e);
  if (Km(r)) {
    const i = typeof t;
    n = i === r.toLowerCase(), !n && i === "object" && (n = t instanceof e);
  } else
    r === "Object" ? n = Oe(t) : r === "Array" ? n = Q(t) : r === "null" ? n = t === null : n = t instanceof e;
  return {
    valid: n,
    expectedType: r
  };
}
function $m(t, e, n) {
  let r = `Invalid prop: type check failed for prop "${t}". Expected ${n.map(sa).join(" | ")}`;
  const i = n[0], s = hc(e), c = ou(e, i), u = ou(e, s);
  return n.length === 1 && au(i) && !Mm(i, s) && (r += ` with value ${c}`), r += `, got ${s} `, au(s) && (r += `with value ${u}.`), r;
}
function ou(t, e) {
  return e === "String" ? `"${t}"` : e === "Number" ? `${Number(t)}` : `${t}`;
}
function au(t) {
  return ["string", "number", "boolean"].some((n) => t.toLowerCase() === n);
}
function Mm(...t) {
  return t.some((e) => e.toLowerCase() === "boolean");
}
const Cl = (t) => t[0] === "_" || t === "$stable", vc = (t) => Q(t) ? t.map(pt) : [pt(t)], Vm = (t, e, n) => {
  if (e._n)
    return e;
  const r = nm((...i) => (Me && _(
    `Slot "${t}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), vc(e(...i))), n);
  return r._c = !1, r;
}, Dl = (t, e, n) => {
  const r = t._ctx;
  for (const i in t) {
    if (Cl(i))
      continue;
    const s = t[i];
    if (re(s))
      e[i] = Vm(i, s, r);
    else if (s != null) {
      _(
        `Non-function value encountered for slot "${i}". Prefer function slots for better performance.`
      );
      const c = vc(s);
      e[i] = () => c;
    }
  }
}, _l = (t, e) => {
  Oc(t.vnode) || _(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = vc(e);
  t.slots.default = () => n;
}, Hm = (t, e) => {
  if (t.vnode.shapeFlag & 32) {
    const n = e._;
    n ? (t.slots = oe(e), Ro(e, "_", n)) : Dl(
      e,
      t.slots = {}
    );
  } else
    t.slots = {}, e && _l(t, e);
  Ro(t.slots, ga, 1);
}, jm = (t, e, n) => {
  const { vnode: r, slots: i } = t;
  let s = !0, c = xe;
  if (r.shapeFlag & 32) {
    const u = e._;
    u ? Ni ? (Se(i, e), $t(t, "set", "$slots")) : n && u === 1 ? s = !1 : (Se(i, e), !n && u === 1 && delete i._) : (s = !e.$stable, Dl(e, i)), c = e;
  } else
    e && (_l(t, e), c = { default: 1 });
  if (s)
    for (const u in i)
      !Cl(u) && !(u in c) && delete i[u];
};
function Ga(t, e, n, r, i = !1) {
  if (Q(t)) {
    t.forEach(
      (y, b) => Ga(
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
  const s = r.shapeFlag & 4 ? Uc(r.component) || r.component.proxy : r.el, c = i ? null : s, { i: u, r: f } = t;
  if (!u) {
    _(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const m = e && e.r, h = u.refs === xe ? u.refs = {} : u.refs, g = u.setupState;
  if (m != null && m !== f && (Ue(m) ? (h[m] = null, le(g, m) && (g[m] = null)) : qe(m) && (m.value = null)), re(f))
    ri(f, u, 12, [c, h]);
  else {
    const y = Ue(f), b = qe(f);
    if (y || b) {
      const S = () => {
        if (t.f) {
          const A = y ? le(g, f) ? g[f] : h[f] : f.value;
          i ? Q(A) && fc(A, s) : Q(A) ? A.includes(s) || A.push(s) : y ? (h[f] = [s], le(g, f) && (g[f] = h[f])) : (f.value = [s], t.k && (h[t.k] = f.value));
        } else
          y ? (h[f] = c, le(g, f) && (g[f] = c)) : b ? (f.value = c, t.k && (h[t.k] = c)) : _("Invalid template ref type:", f, `(${typeof f})`);
      };
      c ? (S.id = -1, Ze(S, n)) : S();
    } else
      _("Invalid template ref type:", f, `(${typeof f})`);
  }
}
let as, wi;
function Ht(t, e) {
  t.appContext.config.performance && Qo() && wi.mark(`vue-${e}-${t.uid}`), Gd(t, e, Qo() ? wi.now() : Date.now());
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
  Qd(t, e, Qo() ? wi.now() : Date.now());
}
function Qo() {
  return as !== void 0 || (typeof window < "u" && window.performance ? (as = !0, wi = window.performance) : as = !1), as;
}
function Rm() {
  const t = [];
  if (t.length) {
    const e = t.length > 1;
    console.warn(
      `Feature flag${e ? "s" : ""} ${t.join(", ")} ${e ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Ze = um;
function Wm(t) {
  return zm(t);
}
function zm(t, e) {
  Rm();
  const n = Wo();
  n.__VUE__ = !0, yl(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
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
  } = t, A = (w, E, B, J = null, k = null, L = null, P = !1, U = null, C = Ni ? !1 : !!E.dynamicChildren) => {
    if (w === E)
      return;
    w && !cs(w, E) && (J = be(w), se(w, k, L, !0), w = null), E.patchFlag === -2 && (C = !1, E.dynamicChildren = null);
    const { type: O, ref: H, shapeFlag: M } = E;
    switch (O) {
      case Eo:
        $(w, E, B, J);
        break;
      case it:
        R(w, E, B, J);
        break;
      case qo:
        w == null ? ue(E, B, J, P) : K(w, E, B, P);
        break;
      case ht:
        Xe(
          w,
          E,
          B,
          J,
          k,
          L,
          P,
          U,
          C
        );
        break;
      default:
        M & 1 ? z(
          w,
          E,
          B,
          J,
          k,
          L,
          P,
          U,
          C
        ) : M & 6 ? Vt(
          w,
          E,
          B,
          J,
          k,
          L,
          P,
          U,
          C
        ) : M & 64 || M & 128 ? O.process(
          w,
          E,
          B,
          J,
          k,
          L,
          P,
          U,
          C,
          Ce
        ) : _("Invalid VNode type:", O, `(${typeof O})`);
    }
    H != null && k && Ga(H, w && w.ref, L, E || w, !E);
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
  }, ue = (w, E, B, J) => {
    [w.el, w.anchor] = S(
      w.children,
      E,
      B,
      J,
      w.el,
      w.anchor
    );
  }, K = (w, E, B, J) => {
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
  }, te = ({ el: w, anchor: E }, B, J) => {
    let k;
    for (; w && w !== E; )
      k = y(w), r(w, B, J), w = k;
    r(E, B, J);
  }, F = ({ el: w, anchor: E }) => {
    let B;
    for (; w && w !== E; )
      B = y(w), i(w), w = B;
    i(E);
  }, z = (w, E, B, J, k, L, P, U, C) => {
    P = P || E.type === "svg", w == null ? G(
      E,
      B,
      J,
      k,
      L,
      P,
      U,
      C
    ) : Be(
      w,
      E,
      k,
      L,
      P,
      U,
      C
    );
  }, G = (w, E, B, J, k, L, P, U) => {
    let C, O;
    const { type: H, props: M, shapeFlag: V, transition: Z, dirs: d } = w;
    if (C = w.el = c(
      w.type,
      L,
      M && M.is,
      M
    ), V & 8 ? h(C, w.children) : V & 16 && ie(
      w.children,
      C,
      null,
      J,
      k,
      L && H !== "foreignObject",
      P,
      U
    ), d && Ji(w, null, J, "created"), ee(C, w, w.scopeId, P, J), M) {
      for (const l in M)
        l !== "value" && !Lo(l) && s(
          C,
          l,
          null,
          M[l],
          L,
          w.children,
          J,
          k,
          de
        );
      "value" in M && s(C, "value", null, M.value), (O = M.onVnodeBeforeMount) && Nt(O, J, w);
    }
    Object.defineProperty(C, "__vnode", {
      value: w,
      enumerable: !1
    }), Object.defineProperty(C, "__vueParentComponent", {
      value: J,
      enumerable: !1
    }), d && Ji(w, null, J, "beforeMount");
    const a = (!k || k && !k.pendingBranch) && Z && !Z.persisted;
    a && Z.beforeEnter(C), r(C, E, B), ((O = M && M.onVnodeMounted) || a || d) && Ze(() => {
      O && Nt(O, J, w), a && Z.enter(C), d && Ji(w, null, J, "mounted");
    }, k);
  }, ee = (w, E, B, J, k) => {
    if (B && b(w, B), J)
      for (let L = 0; L < J.length; L++)
        b(w, J[L]);
    if (k) {
      let L = k.subTree;
      if (L.patchFlag > 0 && L.patchFlag & 2048 && (L = xl(L.children) || L), E === L) {
        const P = k.vnode;
        ee(
          w,
          P,
          P.scopeId,
          P.slotScopeIds,
          k.parent
        );
      }
    }
  }, ie = (w, E, B, J, k, L, P, U, C = 0) => {
    for (let O = C; O < w.length; O++) {
      const H = w[O] = U ? gi(w[O]) : pt(w[O]);
      A(
        null,
        H,
        E,
        B,
        J,
        k,
        L,
        P,
        U
      );
    }
  }, Be = (w, E, B, J, k, L, P) => {
    const U = E.el = w.el;
    let { patchFlag: C, dynamicChildren: O, dirs: H } = E;
    C |= w.patchFlag & 16;
    const M = w.props || xe, V = E.props || xe;
    let Z;
    B && Fi(B, !1), (Z = V.onVnodeBeforeUpdate) && Nt(Z, B, E, w), H && Ji(E, w, B, "beforeUpdate"), B && Fi(B, !0), Ni && (C = 0, P = !1, O = null);
    const d = k && E.type !== "foreignObject";
    if (O ? (ke(
      w.dynamicChildren,
      O,
      U,
      B,
      J,
      d,
      L
    ), ea(w, E)) : P || D(
      w,
      E,
      U,
      null,
      B,
      J,
      d,
      L,
      !1
    ), C > 0) {
      if (C & 16)
        Le(
          U,
          E,
          M,
          V,
          B,
          J,
          k
        );
      else if (C & 2 && M.class !== V.class && s(U, "class", null, V.class, k), C & 4 && s(U, "style", M.style, V.style, k), C & 8) {
        const a = E.dynamicProps;
        for (let l = 0; l < a.length; l++) {
          const p = a[l], T = M[p], N = V[p];
          (N !== T || p === "value") && s(
            U,
            p,
            T,
            N,
            k,
            w.children,
            B,
            J,
            de
          );
        }
      }
      C & 1 && w.children !== E.children && h(U, E.children);
    } else
      !P && O == null && Le(
        U,
        E,
        M,
        V,
        B,
        J,
        k
      );
    ((Z = V.onVnodeUpdated) || H) && Ze(() => {
      Z && Nt(Z, B, E, w), H && Ji(E, w, B, "updated");
    }, J);
  }, ke = (w, E, B, J, k, L, P) => {
    for (let U = 0; U < E.length; U++) {
      const C = w[U], O = E[U], H = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        C.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (C.type === ht || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !cs(C, O) || // - In the case of a component, it could contain anything.
        C.shapeFlag & 70) ? g(C.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          B
        )
      );
      A(
        C,
        O,
        H,
        null,
        J,
        k,
        L,
        P,
        !0
      );
    }
  }, Le = (w, E, B, J, k, L, P) => {
    if (B !== J) {
      if (B !== xe)
        for (const U in B)
          !Lo(U) && !(U in J) && s(
            w,
            U,
            B[U],
            null,
            P,
            E.children,
            k,
            L,
            de
          );
      for (const U in J) {
        if (Lo(U))
          continue;
        const C = J[U], O = B[U];
        C !== O && U !== "value" && s(
          w,
          U,
          O,
          C,
          P,
          E.children,
          k,
          L,
          de
        );
      }
      "value" in J && s(w, "value", B.value, J.value);
    }
  }, Xe = (w, E, B, J, k, L, P, U, C) => {
    const O = E.el = w ? w.el : u(""), H = E.anchor = w ? w.anchor : u("");
    let { patchFlag: M, dynamicChildren: V, slotScopeIds: Z } = E;
    // #5523 dev root fragment may inherit directives
    (Ni || M & 2048) && (M = 0, C = !1, V = null), Z && (U = U ? U.concat(Z) : Z), w == null ? (r(O, B, J), r(H, B, J), ie(
      E.children,
      B,
      H,
      k,
      L,
      P,
      U,
      C
    )) : M > 0 && M & 64 && V && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    w.dynamicChildren ? (ke(
      w.dynamicChildren,
      V,
      B,
      k,
      L,
      P,
      U
    ), ea(w, E)) : D(
      w,
      E,
      B,
      H,
      k,
      L,
      P,
      U,
      C
    );
  }, Vt = (w, E, B, J, k, L, P, U, C) => {
    E.slotScopeIds = U, w == null ? E.shapeFlag & 512 ? k.ctx.activate(
      E,
      B,
      J,
      P,
      C
    ) : He(
      E,
      B,
      J,
      k,
      L,
      P,
      C
    ) : Pe(w, E, C);
  }, He = (w, E, B, J, k, L, P) => {
    const U = w.component = uh(
      w,
      J,
      k
    );
    if (U.type.__hmrId && Vd(U), Co(w), Ht(U, "mount"), Oc(w) && (U.ctx.renderer = Ce), Ht(U, "init"), fh(U), jt(U, "init"), U.asyncDep) {
      if (k && k.registerDep(U, fe), !w.el) {
        const C = U.subTree = Pt(it);
        R(null, C, E, B);
      }
      return;
    }
    fe(
      U,
      w,
      E,
      B,
      k,
      L,
      P
    ), Do(), jt(U, "mount");
  }, Pe = (w, E, B) => {
    const J = E.component = w.component;
    if (om(w, E, B))
      if (J.asyncDep && !J.asyncResolved) {
        Co(E), q(J, E, B), Do();
        return;
      } else
        J.next = E, $d(J.update), J.update();
    else
      E.el = w.el, J.vnode = E;
  }, fe = (w, E, B, J, k, L, P) => {
    const U = () => {
      if (w.isMounted) {
        let { next: H, bu: M, u: V, parent: Z, vnode: d } = w, a = H, l;
        Co(H || w.vnode), Fi(w, !1), H ? (H.el = d.el, q(w, H, P)) : H = d, M && os(M), (l = H.props && H.props.onVnodeBeforeUpdate) && Nt(l, Z, H, d), Fi(w, !0), Ht(w, "render");
        const p = xa(w);
        jt(w, "render");
        const T = w.subTree;
        w.subTree = p, Ht(w, "patch"), A(
          T,
          p,
          // parent may have changed if it's in a teleport
          g(T.el),
          // anchor may have changed if it's in a fragment
          be(T),
          w,
          k,
          L
        ), jt(w, "patch"), H.el = p.el, a === null && am(w, p.el), V && Ze(V, k), (l = H.props && H.props.onVnodeUpdated) && Ze(
          () => Nt(l, Z, H, d),
          k
        ), Tl(w), Do();
      } else {
        let H;
        const { el: M, props: V } = E, { bm: Z, m: d, parent: a } = w, l = _o(E);
        if (Fi(w, !1), Z && os(Z), !l && (H = V && V.onVnodeBeforeMount) && Nt(H, a, E), Fi(w, !0), M && We) {
          const p = () => {
            Ht(w, "render"), w.subTree = xa(w), jt(w, "render"), Ht(w, "hydrate"), We(
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
          jt(w, "render"), Ht(w, "patch"), A(
            null,
            p,
            B,
            J,
            w,
            k,
            L
          ), jt(w, "patch"), E.el = p.el;
        }
        if (d && Ze(d, k), !l && (H = V && V.onVnodeMounted)) {
          const p = E;
          Ze(
            () => Nt(H, a, p),
            k
          );
        }
        (E.shapeFlag & 256 || a && _o(a.vnode) && a.vnode.shapeFlag & 256) && w.a && Ze(w.a, k), w.isMounted = !0, Yd(w), E = B = J = null;
      }
    }, C = w.effect = new yc(
      U,
      () => da(O),
      w.scope
      // track it in component's effect scope
    ), O = w.update = () => C.run();
    O.id = w.uid, Fi(w, !0), C.onTrack = w.rtc ? (H) => os(w.rtc, H) : void 0, C.onTrigger = w.rtg ? (H) => os(w.rtg, H) : void 0, O.ownerInstance = w, O();
  }, q = (w, E, B) => {
    E.component = w;
    const J = w.vnode.props;
    w.vnode = E, w.next = null, _m(w, E.props, J, B), jm(w, E.children, B), Mi(), Yc(), Vi();
  }, D = (w, E, B, J, k, L, P, U, C = !1) => {
    const O = w && w.children, H = w ? w.shapeFlag : 0, M = E.children, { patchFlag: V, shapeFlag: Z } = E;
    if (V > 0) {
      if (V & 128) {
        j(
          O,
          M,
          B,
          J,
          k,
          L,
          P,
          U,
          C
        );
        return;
      } else if (V & 256) {
        Y(
          O,
          M,
          B,
          J,
          k,
          L,
          P,
          U,
          C
        );
        return;
      }
    }
    Z & 8 ? (H & 16 && de(O, k, L), M !== O && h(B, M)) : H & 16 ? Z & 16 ? j(
      O,
      M,
      B,
      J,
      k,
      L,
      P,
      U,
      C
    ) : de(O, k, L, !0) : (H & 8 && h(B, ""), Z & 16 && ie(
      M,
      B,
      J,
      k,
      L,
      P,
      U,
      C
    ));
  }, Y = (w, E, B, J, k, L, P, U, C) => {
    w = w || Zi, E = E || Zi;
    const O = w.length, H = E.length, M = Math.min(O, H);
    let V;
    for (V = 0; V < M; V++) {
      const Z = E[V] = C ? gi(E[V]) : pt(E[V]);
      A(
        w[V],
        Z,
        B,
        null,
        k,
        L,
        P,
        U,
        C
      );
    }
    O > H ? de(
      w,
      k,
      L,
      !0,
      !1,
      M
    ) : ie(
      E,
      B,
      J,
      k,
      L,
      P,
      U,
      C,
      M
    );
  }, j = (w, E, B, J, k, L, P, U, C) => {
    let O = 0;
    const H = E.length;
    let M = w.length - 1, V = H - 1;
    for (; O <= M && O <= V; ) {
      const Z = w[O], d = E[O] = C ? gi(E[O]) : pt(E[O]);
      if (cs(Z, d))
        A(
          Z,
          d,
          B,
          null,
          k,
          L,
          P,
          U,
          C
        );
      else
        break;
      O++;
    }
    for (; O <= M && O <= V; ) {
      const Z = w[M], d = E[V] = C ? gi(E[V]) : pt(E[V]);
      if (cs(Z, d))
        A(
          Z,
          d,
          B,
          null,
          k,
          L,
          P,
          U,
          C
        );
      else
        break;
      M--, V--;
    }
    if (O > M) {
      if (O <= V) {
        const Z = V + 1, d = Z < H ? E[Z].el : J;
        for (; O <= V; )
          A(
            null,
            E[O] = C ? gi(E[O]) : pt(E[O]),
            B,
            d,
            k,
            L,
            P,
            U,
            C
          ), O++;
      }
    } else if (O > V)
      for (; O <= M; )
        se(w[O], k, L, !0), O++;
    else {
      const Z = O, d = O, a = /* @__PURE__ */ new Map();
      for (O = d; O <= V; O++) {
        const ae = E[O] = C ? gi(E[O]) : pt(E[O]);
        ae.key != null && (a.has(ae.key) && _(
          "Duplicate keys found during update:",
          JSON.stringify(ae.key),
          "Make sure keys are unique."
        ), a.set(ae.key, O));
      }
      let l, p = 0;
      const T = V - d + 1;
      let N = !1, I = 0;
      const ne = new Array(T);
      for (O = 0; O < T; O++)
        ne[O] = 0;
      for (O = Z; O <= M; O++) {
        const ae = w[O];
        if (p >= T) {
          se(ae, k, L, !0);
          continue;
        }
        let ge;
        if (ae.key != null)
          ge = a.get(ae.key);
        else
          for (l = d; l <= V; l++)
            if (ne[l - d] === 0 && cs(ae, E[l])) {
              ge = l;
              break;
            }
        ge === void 0 ? se(ae, k, L, !0) : (ne[ge - d] = O + 1, ge >= I ? I = ge : N = !0, A(
          ae,
          E[ge],
          B,
          null,
          k,
          L,
          P,
          U,
          C
        ), p++);
      }
      const Ie = N ? Ym(ne) : Zi;
      for (l = Ie.length - 1, O = T - 1; O >= 0; O--) {
        const ae = d + O, ge = E[ae], Te = ae + 1 < H ? E[ae + 1].el : J;
        ne[O] === 0 ? A(
          null,
          ge,
          B,
          Te,
          k,
          L,
          P,
          U,
          C
        ) : N && (l < 0 || O !== Ie[l] ? X(ge, B, Te, 2) : l--);
      }
    }
  }, X = (w, E, B, J, k = null) => {
    const { el: L, type: P, transition: U, children: C, shapeFlag: O } = w;
    if (O & 6) {
      X(w.component.subTree, E, B, J);
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
      r(L, E, B);
      for (let M = 0; M < C.length; M++)
        X(C[M], E, B, J);
      r(w.anchor, E, B);
      return;
    }
    if (P === qo) {
      te(w, E, B);
      return;
    }
    if (J !== 2 && O & 1 && U)
      if (J === 0)
        U.beforeEnter(L), r(L, E, B), Ze(() => U.enter(L), k);
      else {
        const { leave: M, delayLeave: V, afterLeave: Z } = U, d = () => r(L, E, B), a = () => {
          M(L, () => {
            d(), Z && Z();
          });
        };
        V ? V(L, d, a) : a();
      }
    else
      r(L, E, B);
  }, se = (w, E, B, J = !1, k = !1) => {
    const {
      type: L,
      props: P,
      ref: U,
      children: C,
      dynamicChildren: O,
      shapeFlag: H,
      patchFlag: M,
      dirs: V
    } = w;
    if (U != null && Ga(U, null, B, w, !0), H & 256) {
      E.ctx.deactivate(w);
      return;
    }
    const Z = H & 1 && V, d = !_o(w);
    let a;
    if (d && (a = P && P.onVnodeBeforeUnmount) && Nt(a, E, w), H & 6)
      pe(w.component, B, J);
    else {
      if (H & 128) {
        w.suspense.unmount(B, J);
        return;
      }
      Z && Ji(w, null, E, "beforeUnmount"), H & 64 ? w.type.remove(
        w,
        E,
        B,
        k,
        Ce,
        J
      ) : O && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (L !== ht || M > 0 && M & 64) ? de(
        O,
        E,
        B,
        !1,
        !0
      ) : (L === ht && M & 384 || !k && H & 16) && de(C, E, B), J && he(w);
    }
    (d && (a = P && P.onVnodeUnmounted) || Z) && Ze(() => {
      a && Nt(a, E, w), Z && Ji(w, null, E, "unmounted");
    }, B);
  }, he = (w) => {
    const { type: E, el: B, anchor: J, transition: k } = w;
    if (E === ht) {
      w.patchFlag > 0 && w.patchFlag & 2048 && k && !k.persisted ? w.children.forEach((P) => {
        P.type === it ? i(P.el) : he(P);
      }) : Ne(B, J);
      return;
    }
    if (E === qo) {
      F(w);
      return;
    }
    const L = () => {
      i(B), k && !k.persisted && k.afterLeave && k.afterLeave();
    };
    if (w.shapeFlag & 1 && k && !k.persisted) {
      const { leave: P, delayLeave: U } = k, C = () => P(B, L);
      U ? U(w.el, L, C) : C();
    } else
      L();
  }, Ne = (w, E) => {
    let B;
    for (; w !== E; )
      B = y(w), i(w), w = B;
    i(E);
  }, pe = (w, E, B) => {
    w.type.__hmrId && Hd(w);
    const { bum: J, scope: k, update: L, subTree: P, um: U } = w;
    J && os(J), k.stop(), L && (L.active = !1, se(P, w, E, B)), U && Ze(U, E), Ze(() => {
      w.isUnmounted = !0;
    }, E), E && E.pendingBranch && !E.isUnmounted && w.asyncDep && !w.asyncResolved && w.suspenseId === E.pendingId && (E.deps--, E.deps === 0 && E.resolve()), Zd(w);
  }, de = (w, E, B, J = !1, k = !1, L = 0) => {
    for (let P = L; P < w.length; P++)
      se(w[P], E, B, J, k);
  }, be = (w) => w.shapeFlag & 6 ? be(w.component.subTree) : w.shapeFlag & 128 ? w.suspense.next() : y(w.anchor || w.el), Je = (w, E, B) => {
    w == null ? E._vnode && se(E._vnode, null, null, !0) : A(E._vnode || null, w, E, null, null, null, B), Yc(), pl(), E._vnode = w;
  }, Ce = {
    p: A,
    um: se,
    m: X,
    r: he,
    mt: He,
    mc: ie,
    pc: D,
    pbc: ke,
    n: be,
    o: t
  };
  let De, We;
  return e && ([De, We] = e(
    Ce
  )), {
    render: Je,
    hydrate: De,
    createApp: Um(Je, De)
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
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = i[s] = gi(i[s]), u.el = c.el), n || ea(c, u)), u.type === Eo && (u.el = c.el), u.type === it && !u.el && (u.el = c.el);
    }
}
function Ym(t) {
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
const Xm = (t) => t.__isTeleport, es = (t) => t && (t.disabled || t.disabled === ""), cu = (t) => typeof SVGElement < "u" && t instanceof SVGElement, Qa = (t, e) => {
  const n = t && t.to;
  if (Ue(n))
    if (e) {
      const r = e(n);
      return r || _(
        `Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), r;
    } else
      return _(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return !n && !es(t) && _(`Invalid Teleport target: ${n}`), n;
}, Zm = {
  __isTeleport: !0,
  process(t, e, n, r, i, s, c, u, f, m) {
    const {
      mc: h,
      pc: g,
      pbc: y,
      o: { insert: b, querySelector: S, createText: A, createComment: $ }
    } = m, R = es(e.props);
    let { shapeFlag: ue, children: K, dynamicChildren: te } = e;
    if (Ni && (f = !1, te = null), t == null) {
      const F = e.el = $("teleport start"), z = e.anchor = $("teleport end");
      b(F, n, r), b(z, n, r);
      const G = e.target = Qa(e.props, S), ee = e.targetAnchor = A("");
      G ? (b(ee, G), c = c || cu(G)) : R || _("Invalid Teleport target on mount:", G, `(${typeof G})`);
      const ie = (Be, ke) => {
        ue & 16 && h(
          K,
          Be,
          ke,
          i,
          s,
          c,
          u,
          f
        );
      };
      R ? ie(n, z) : G && ie(G, ee);
    } else {
      e.el = t.el;
      const F = e.anchor = t.anchor, z = e.target = t.target, G = e.targetAnchor = t.targetAnchor, ee = es(t.props), ie = ee ? n : z, Be = ee ? F : G;
      if (c = c || cu(z), te ? (y(
        t.dynamicChildren,
        te,
        ie,
        i,
        s,
        c,
        u
      ), ea(t, e, !0)) : f || g(
        t,
        e,
        ie,
        Be,
        i,
        s,
        c,
        u,
        !1
      ), R)
        ee || Jo(
          e,
          n,
          F,
          m,
          1
        );
      else if ((e.props && e.props.to) !== (t.props && t.props.to)) {
        const ke = e.target = Qa(
          e.props,
          S
        );
        ke ? Jo(
          e,
          ke,
          null,
          m,
          0
        ) : _(
          "Invalid Teleport target on update:",
          z,
          `(${typeof z})`
        );
      } else
        ee && Jo(
          e,
          z,
          G,
          m,
          1
        );
    }
    ql(e);
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
  hydrate: Gm
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
function Gm(t, e, n, r, i, s, {
  o: { nextSibling: c, parentNode: u, querySelector: f }
}, m) {
  const h = e.target = Qa(
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
    ql(e);
  }
  return e.anchor && c(e.anchor);
}
const Qm = Zm;
function ql(t) {
  const e = t.ctx;
  if (e && e.ut) {
    let n = t.children[0].el;
    for (; n !== t.targetAnchor; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", e.uid), n = n.nextSibling;
    e.ut();
  }
}
const ht = Symbol.for("v-fgt"), Eo = Symbol.for("v-txt"), it = Symbol.for("v-cmt"), qo = Symbol.for("v-stc"), ys = [];
let gt = null;
function Ge(t = !1) {
  ys.push(gt = t ? null : []);
}
function eh() {
  ys.pop(), gt = ys[ys.length - 1] || null;
}
let Is = 1;
function uu(t) {
  Is += t;
}
function Kl(t) {
  return t.dynamicChildren = Is > 0 ? gt || Zi : null, eh(), Is > 0 && gt && gt.push(t), t;
}
function xi(t, e, n, r, i, s) {
  return Kl(
    $l(
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
  return Kl(
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
function Jc(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function cs(t, e) {
  return e.shapeFlag & 6 && zi.has(e.type) ? (t.shapeFlag &= -257, e.shapeFlag &= -513, !1) : t.type === e.type && t.key === e.key;
}
const th = (...t) => nh(
  ...t
), ga = "__vInternal", Pl = ({ key: t }) => t ?? null, Ko = ({
  ref: t,
  ref_key: e,
  ref_for: n
}) => (typeof t == "number" && (t = "" + t), t != null ? Ue(t) || qe(t) || re(t) ? { i: ct, r: t, k: e, f: !!n } : t : null);
function $l(t, e = null, n = null, r = 0, i = null, s = t === ht ? 0 : 1, c = !1, u = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && Pl(e),
    ref: e && Ko(e),
    scopeId: Nl,
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
  return u ? (Fc(f, n), s & 128 && t.normalize(f)) : n && (f.shapeFlag |= Ue(n) ? 8 : 16), f.key !== f.key && _("VNode created with invalid key (NaN). VNode type:", f.type), Is > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  gt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && gt.push(f), f;
}
const Pt = th;
function nh(t, e = null, n = null, r = 0, i = null, s = !1) {
  if ((!t || t === Nm) && (t || _(`Invalid vnode type when creating vnode: ${t}.`), t = it), Jc(t)) {
    const u = ki(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return n && Fc(u, n), Is > 0 && !s && gt && (u.shapeFlag & 6 ? gt[gt.indexOf(t)] = u : gt.push(u)), u.patchFlag |= -2, u;
  }
  if (Rl(t) && (t = t.__vccOpts), e) {
    e = rh(e);
    let { class: u, style: f } = e;
    u && !Ue(u) && (e.class = gc(u)), Oe(f) && (Ma(f) && !Q(f) && (f = Se({}, f)), e.style = vi(f));
  }
  const c = Ue(t) ? 1 : cm(t) ? 128 : Xm(t) ? 64 : Oe(t) ? 4 : re(t) ? 2 : 0;
  return c & 4 && Ma(t) && (t = oe(t), _(
    "Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    t
  )), $l(
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
function rh(t) {
  return t ? Ma(t) || ga in t ? Se({}, t) : t : null;
}
function ki(t, e, n = !1) {
  const { props: r, ref: i, patchFlag: s, children: c } = t, u = e ? oh(r || {}, e) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: u,
    key: u && Pl(u),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? Q(i) ? i.concat(Ko(e)) : [i, Ko(e)] : Ko(e)
    ) : i,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: s === -1 && Q(c) ? c.map(Ml) : c,
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
function Ml(t) {
  const e = ki(t);
  return Q(t.children) && (e.children = t.children.map(Ml)), e;
}
function ih(t = " ", e = 0) {
  return Pt(Eo, null, t, e);
}
function sh(t = "", e = !1) {
  return e ? (Ge(), Yi(it, null, t)) : Pt(it, null, t);
}
function pt(t) {
  return t == null || typeof t == "boolean" ? Pt(it) : Q(t) ? Pt(
    ht,
    null,
    // #3666, avoid reference pollution when reusing vnode
    t.slice()
  ) : typeof t == "object" ? gi(t) : Pt(Eo, null, String(t));
}
function gi(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : ki(t);
}
function Fc(t, e) {
  let n = 0;
  const { shapeFlag: r } = t;
  if (e == null)
    e = null;
  else if (Q(e))
    n = 16;
  else if (typeof e == "object")
    if (r & 65) {
      const i = e.default;
      i && (i._c && (i._d = !1), Fc(t, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = e._;
      !i && !(ga in e) ? e._ctx = ct : i === 3 && ct && (ct.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else
    re(e) ? (e = { default: e, _ctx: ct }, n = 32) : (e = String(e), r & 64 ? (n = 16, e = [ih(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function oh(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    for (const i in r)
      if (i === "class")
        e.class !== r.class && (e.class = gc([e.class, r.class]));
      else if (i === "style")
        e.style = vi([e.style, r.style]);
      else if (yo(i)) {
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
const ah = Fl();
let ch = 0;
function uh(t, e, n) {
  const r = t.type, i = (e ? e.appContext : t.appContext) || ah, s = {
    uid: ch++,
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
    scope: new Gf(
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
    propsOptions: Ul(r, i),
    emitsOptions: bl(r, i),
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
  return s.ctx = xm(s), s.root = e ? e.root : s, s.emit = tm.bind(null, s), t.ce && t.ce(s), s;
}
let Me = null, Ac, Hi, lu = "__VUE_INSTANCE_SETTERS__";
(Hi = Wo()[lu]) || (Hi = Wo()[lu] = []), Hi.push((t) => Me = t), Ac = (t) => {
  Hi.length > 1 ? Hi.forEach((e) => e(t)) : Hi[0](t);
};
const ns = (t) => {
  Ac(t), t.scope.on();
}, Pi = () => {
  Me && Me.scope.off(), Ac(null);
}, lh = /* @__PURE__ */ Si("slot,component");
function ec(t, e) {
  const n = e.isNativeTag || ju;
  (lh(t) || n(t)) && _(
    "Do not use built-in or reserved HTML elements as component id: " + t
  );
}
function Vl(t) {
  return t.vnode.shapeFlag & 4;
}
let Os = !1;
function fh(t, e = !1) {
  Os = e;
  const { props: n, children: r } = t.vnode, i = Vl(t);
  Cm(t, n, i, e), Hm(t, r);
  const s = i ? dh(t, e) : void 0;
  return Os = !1, s;
}
function dh(t, e) {
  var n;
  const r = t.type;
  {
    if (r.name && ec(r.name, t.appContext.config), r.components) {
      const s = Object.keys(r.components);
      for (let c = 0; c < s.length; c++)
        ec(s[c], t.appContext.config);
    }
    if (r.directives) {
      const s = Object.keys(r.directives);
      for (let c = 0; c < s.length; c++)
        Ol(s[c]);
    }
    r.compilerOptions && mh() && _(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = al(new Proxy(t.ctx, vl)), Bm(t);
  const { setup: i } = r;
  if (i) {
    const s = t.setupContext = i.length > 1 ? gh(t) : null;
    ns(t), Mi();
    const c = ri(
      i,
      t,
      0,
      [ds(t.props), s]
    );
    if (Vi(), Pi(), mc(c)) {
      if (c.then(Pi, Pi), e)
        return c.then((u) => {
          fu(t, u, e);
        }).catch((u) => {
          fa(u, t, 0);
        });
      if (t.asyncDep = c, !t.suspense) {
        const u = (n = r.name) != null ? n : "Anonymous";
        _(
          `Component <${u}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      fu(t, c, e);
  } else
    Hl(t, e);
}
function fu(t, e, n) {
  re(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : Oe(e) ? (Jc(e) && _(
    "setup() should not return VNodes directly - return a render function instead."
  ), t.devtoolsRawSetupState = e, t.setupState = ll(e), Im(t)) : e !== void 0 && _(
    `setup() should return an object. Received: ${e === null ? "null" : typeof e}`
  ), Hl(t, n);
}
let tc;
const mh = () => !tc;
function Hl(t, e, n) {
  const r = t.type;
  if (!t.render) {
    if (!e && tc && !r.render) {
      const i = r.template || Sc(t).template;
      if (i) {
        Ht(t, "compile");
        const { isCustomElement: s, compilerOptions: c } = t.appContext.config, { delimiters: u, compilerOptions: f } = r, m = Se(
          Se(
            {
              isCustomElement: s,
              delimiters: u
            },
            c
          ),
          f
        );
        r.render = tc(i, m), jt(t, "compile");
      }
    }
    t.render = r.render || et;
  }
  ns(t), Mi(), km(t), Vi(), Pi(), !r.render && t.render === et && !e && (r.template ? _(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
    /* should not happen */
  ) : _("Component is missing template or render function."));
}
function hh(t) {
  return t.attrsProxy || (t.attrsProxy = new Proxy(
    t.attrs,
    {
      get(e, n) {
        return Xo(), Re(t, "get", "$attrs"), e[n];
      },
      set() {
        return _("setupContext.attrs is readonly."), !1;
      },
      deleteProperty() {
        return _("setupContext.attrs is readonly."), !1;
      }
    }
  ));
}
function ph(t) {
  return t.slotsProxy || (t.slotsProxy = new Proxy(t.slots, {
    get(e, n) {
      return Re(t, "get", "$slots"), e[n];
    }
  }));
}
function gh(t) {
  return Object.freeze({
    get attrs() {
      return hh(t);
    },
    get slots() {
      return ph(t);
    },
    get emit() {
      return (n, ...r) => t.emit(n, ...r);
    },
    expose: (n) => {
      if (t.exposed && _("expose() should be called only once per setup()."), n != null) {
        let r = typeof n;
        r === "object" && (Q(n) ? r = "array" : qe(n) && (r = "ref")), r !== "object" && _(
          `expose() should be passed a plain object, received ${r}.`
        );
      }
      t.exposed = n || {};
    }
  });
}
function Uc(t) {
  if (t.exposed)
    return t.exposeProxy || (t.exposeProxy = new Proxy(ll(al(t.exposed)), {
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
const wh = /(?:^|[-_])(\w)/g, yh = (t) => t.replace(wh, (e) => e.toUpperCase()).replace(/[-_]/g, "");
function jl(t, e = !0) {
  return re(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function wa(t, e, n = !1) {
  let r = jl(e);
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
  return r ? yh(r) : n ? "App" : "Anonymous";
}
function Rl(t) {
  return re(t) && "__vccOpts" in t;
}
const Th = (t, e) => Ud(t, e, Os), Eh = Symbol.for("v-scx"), bh = () => {
  {
    const t = bt(Eh);
    return t || _(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), t;
  }
};
function Oa(t) {
  return !!(t && t.__v_isShallow);
}
function Nh() {
  if (typeof window > "u")
    return;
  const t = { style: "color:#3ba776" }, e = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, r = { style: "color:#9d288c" }, i = {
    header(g) {
      return Oe(g) ? g.__isVue ? ["div", t, "VueInstance"] : qe(g) ? [
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
    g.type.props && g.props && y.push(c("props", oe(g.props))), g.setupState !== xe && y.push(c("setup", g.setupState)), g.data !== xe && y.push(c("data", oe(g.data)));
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
    return y = Se({}, y), Object.keys(y).length ? [
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
    return typeof g == "number" ? ["span", e, g] : typeof g == "string" ? ["span", n, JSON.stringify(g)] : typeof g == "boolean" ? ["span", r, g] : Oe(g) ? ["object", { object: y ? oe(g) : g }] : ["span", n, String(g)];
  }
  function f(g, y) {
    const b = g.type;
    if (re(b))
      return;
    const S = {};
    for (const A in g.ctx)
      m(b, A, y) && (S[A] = g.ctx[A]);
    return S;
  }
  function m(g, y, b) {
    const S = g[b];
    if (Q(S) && S.includes(y) || Oe(S) && y in S || g.extends && m(g.extends, y, b) || g.mixins && g.mixins.some((A) => m(A, y, b)))
      return !0;
  }
  function h(g) {
    return Oa(g) ? "ShallowRef" : g.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(i) : window.devtoolsFormatters = [i];
}
const du = "3.3.4", xh = "http://www.w3.org/2000/svg", Ui = typeof document < "u" ? document : null, mu = Ui && /* @__PURE__ */ Ui.createElement("template"), Bh = {
  insert: (t, e, n) => {
    e.insertBefore(t, n || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, n, r) => {
    const i = e ? Ui.createElementNS(xh, t) : Ui.createElement(t, n ? { is: n } : void 0);
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
      mu.innerHTML = r ? `<svg>${t}</svg>` : t;
      const u = mu.content;
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
function Ih(t, e, n) {
  const r = t._vtc;
  r && (e = (e ? [e, ...r] : [...r]).join(" ")), e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e;
}
function Oh(t, e, n) {
  const r = t.style, i = Ue(n);
  if (n && !i) {
    if (e && !Ue(e))
      for (const s in e)
        n[s] == null && nc(r, s, "");
    for (const s in n)
      nc(r, s, n[s]);
  } else {
    const s = r.display;
    i ? e !== n && (r.cssText = n) : e && t.removeAttribute("style"), "_vod" in t && (r.display = s);
  }
}
const kh = /[^\\];\s*$/, hu = /\s*!important$/;
function nc(t, e, n) {
  if (Q(n))
    n.forEach((r) => nc(t, e, r));
  else if (n == null && (n = ""), kh.test(n) && _(
    `Unexpected semicolon at the end of '${e}' style value: '${n}'`
  ), e.startsWith("--"))
    t.setProperty(e, n);
  else {
    const r = Sh(t, e);
    hu.test(n) ? t.setProperty(
      Bi(r),
      n.replace(hu, ""),
      "important"
    ) : t[r] = n;
  }
}
const pu = ["Webkit", "Moz", "ms"], ka = {};
function Sh(t, e) {
  const n = ka[e];
  if (n)
    return n;
  let r = ts(e);
  if (r !== "filter" && r in t)
    return ka[e] = r;
  r = sa(r);
  for (let i = 0; i < pu.length; i++) {
    const s = pu[i] + r;
    if (s in t)
      return ka[e] = s;
  }
  return e;
}
const gu = "http://www.w3.org/1999/xlink";
function vh(t, e, n, r, i) {
  if (r && e.startsWith("xlink:"))
    n == null ? t.removeAttributeNS(gu, e.slice(6, e.length)) : t.setAttributeNS(gu, e, n);
  else {
    const s = Zf(e);
    n == null || s && !Ru(n) ? t.removeAttribute(e) : t.setAttribute(e, s ? "" : n);
  }
}
function Jh(t, e, n, r, i, s, c) {
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
    m === "boolean" ? n = Ru(n) : n == null && m === "string" ? (n = "", f = !0) : m === "number" && (n = 0, f = !0);
  }
  try {
    t[e] = n;
  } catch (m) {
    f || _(
      `Failed setting prop "${e}" on <${u.toLowerCase()}>: value ${n} is invalid.`,
      m
    );
  }
  f && t.removeAttribute(e);
}
function Fh(t, e, n, r) {
  t.addEventListener(e, n, r);
}
function Ah(t, e, n, r) {
  t.removeEventListener(e, n, r);
}
function Uh(t, e, n, r, i = null) {
  const s = t._vei || (t._vei = {}), c = s[e];
  if (r && c)
    c.value = r;
  else {
    const [u, f] = Lh(e);
    if (r) {
      const m = s[e] = _h(r, i);
      Fh(t, u, m, f);
    } else
      c && (Ah(t, u, c, f), s[e] = void 0);
  }
}
const wu = /(?:Once|Passive|Capture)$/;
function Lh(t) {
  let e;
  if (wu.test(t)) {
    e = {};
    let r;
    for (; r = t.match(wu); )
      t = t.slice(0, t.length - r[0].length), e[r[0].toLowerCase()] = !0;
  }
  return [t[2] === ":" ? t.slice(3) : Bi(t.slice(2)), e];
}
let Sa = 0;
const Ch = /* @__PURE__ */ Promise.resolve(), Dh = () => Sa || (Ch.then(() => Sa = 0), Sa = Date.now());
function _h(t, e) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Et(
      qh(r, n.value),
      e,
      5,
      [r]
    );
  };
  return n.value = t, n.attached = Dh(), n;
}
function qh(t, e) {
  if (Q(e)) {
    const n = t.stopImmediatePropagation;
    return t.stopImmediatePropagation = () => {
      n.call(t), t._stopped = !0;
    }, e.map((r) => (i) => !i._stopped && r && r(i));
  } else
    return e;
}
const yu = /^on[a-z]/, Kh = (t, e, n, r, i = !1, s, c, u, f) => {
  e === "class" ? Ih(t, r, i) : e === "style" ? Oh(t, n, r) : yo(e) ? jo(e) || Uh(t, e, n, r, c) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : Ph(t, e, r, i)) ? Jh(
    t,
    e,
    r,
    s,
    c,
    u,
    f
  ) : (e === "true-value" ? t._trueValue = r : e === "false-value" && (t._falseValue = r), vh(t, e, r, i));
};
function Ph(t, e, n, r) {
  return r ? !!(e === "innerHTML" || e === "textContent" || e in t && yu.test(e) && re(n)) : e === "spellcheck" || e === "draggable" || e === "translate" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA" || yu.test(e) && Ue(n) ? !1 : e in t;
}
const $h = /* @__PURE__ */ Se({ patchProp: Kh }, Bh);
let Tu;
function Mh() {
  return Tu || (Tu = Wm($h));
}
const Wl = (...t) => {
  const e = Mh().createApp(...t);
  Vh(e), Hh(e);
  const { mount: n } = e;
  return e.mount = (r) => {
    const i = jh(r);
    if (!i)
      return;
    const s = e._component;
    !re(s) && !s.render && !s.template && (s.template = i.innerHTML), i.innerHTML = "";
    const c = n(i, !1, i instanceof SVGElement);
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), c;
  }, e;
};
function Vh(t) {
  Object.defineProperty(t.config, "isNativeTag", {
    value: (e) => zf(e) || Yf(e),
    writable: !1
  });
}
function Hh(t) {
  {
    const e = t.config.isCustomElement;
    Object.defineProperty(t.config, "isCustomElement", {
      get() {
        return e;
      },
      set() {
        _(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = t.config.compilerOptions, r = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(t.config, "compilerOptions", {
      get() {
        return _(r), n;
      },
      set() {
        _(r);
      }
    });
  }
}
function jh(t) {
  if (Ue(t)) {
    const e = document.querySelector(t);
    return e || _(
      `Failed to mount app: mount target selector "${t}" returned null.`
    ), e;
  }
  return window.ShadowRoot && t instanceof window.ShadowRoot && t.mode === "closed" && _(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), t;
}
function Rh() {
  Nh();
}
Rh();
const Wh = () => new Error("Config not initialized");
let Po;
const zh = (t) => {
  if (t.codeSdk === void 0)
    throw new Error("codeSdk path is required");
  Po = Tt(t);
}, bo = () => {
  if (!Po)
    throw Wh;
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
const Yh = 34028234663852886e22, Xh = -34028234663852886e22, Zh = 4294967295, Gh = 2147483647, Qh = -2147483648;
function $o(t) {
  if (typeof t != "number")
    throw new Error("invalid int 32: " + typeof t);
  if (!Number.isInteger(t) || t > Gh || t < Qh)
    throw new Error("invalid int 32: " + t);
}
function rc(t) {
  if (typeof t != "number")
    throw new Error("invalid uint 32: " + typeof t);
  if (!Number.isInteger(t) || t > Zh || t < 0)
    throw new Error("invalid uint 32: " + t);
}
function zl(t) {
  if (typeof t != "number")
    throw new Error("invalid float 32: " + typeof t);
  if (Number.isFinite(t) && (t > Yh || t < Xh))
    throw new Error("invalid float 32: " + t);
}
const Yl = Symbol("@bufbuild/protobuf/enum-type");
function ep(t) {
  const e = t[Yl];
  return Qe(e, "missing enum type on enum object"), e;
}
function Xl(t, e, n, r) {
  t[Yl] = Zl(e, n.map((i) => ({
    no: i.no,
    name: i.name,
    localName: t[i.no]
  })));
}
function Zl(t, e, n) {
  const r = /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null), s = [];
  for (const c of e) {
    const u = Gl(c);
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
function tp(t, e, n) {
  const r = {};
  for (const i of e) {
    const s = Gl(i);
    r[s.localName] = s.no, r[s.no] = s.localName;
  }
  return Xl(r, t, e), r;
}
function Gl(t) {
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
function np(t, e, n, r) {
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
function rp(t, e, n, r) {
  return {
    syntax: t,
    json: e,
    bin: n,
    util: r,
    makeMessageType(i, s, c) {
      return np(this, i, s, c);
    },
    makeEnum: tp,
    makeEnumType: Zl,
    getEnumType: ep
  };
}
var v;
(function(t) {
  t[t.DOUBLE = 1] = "DOUBLE", t[t.FLOAT = 2] = "FLOAT", t[t.INT64 = 3] = "INT64", t[t.UINT64 = 4] = "UINT64", t[t.INT32 = 5] = "INT32", t[t.FIXED64 = 6] = "FIXED64", t[t.FIXED32 = 7] = "FIXED32", t[t.BOOL = 8] = "BOOL", t[t.STRING = 9] = "STRING", t[t.BYTES = 12] = "BYTES", t[t.UINT32 = 13] = "UINT32", t[t.SFIXED32 = 15] = "SFIXED32", t[t.SFIXED64 = 16] = "SFIXED64", t[t.SINT32 = 17] = "SINT32", t[t.SINT64 = 18] = "SINT64";
})(v || (v = {}));
function ip() {
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
function Eu(t) {
  const e = t[0] === "-";
  e && (t = t.slice(1));
  const n = 1e6;
  let r = 0, i = 0;
  function s(c, u) {
    const f = Number(t.slice(c, u));
    i *= n, r = r * n + f, r >= Mo && (i = i + (r / Mo | 0), r = r % Mo);
  }
  return s(-24, -18), s(-18, -12), s(-12, -6), s(-6), e ? ef(r, i) : Lc(r, i);
}
function sp(t, e) {
  let n = Lc(t, e);
  const r = n.hi & 2147483648;
  r && (n = ef(n.lo, n.hi));
  const i = Ql(n.lo, n.hi);
  return r ? "-" + i : i;
}
function Ql(t, e) {
  if ({ lo: t, hi: e } = op(t, e), e <= 2097151)
    return String(Mo * e + t);
  const n = t & 16777215, r = (t >>> 24 | e << 8) & 16777215, i = e >> 16 & 65535;
  let s = n + r * 6777216 + i * 6710656, c = r + i * 8147497, u = i * 2;
  const f = 1e7;
  return s >= f && (c += Math.floor(s / f), s %= f), c >= f && (u += Math.floor(c / f), c %= f), u.toString() + bu(c) + bu(s);
}
function op(t, e) {
  return { lo: t >>> 0, hi: e >>> 0 };
}
function Lc(t, e) {
  return { lo: t | 0, hi: e | 0 };
}
function ef(t, e) {
  return e = ~e, t ? t = ~t + 1 : e += 1, Lc(t, e);
}
const bu = (t) => {
  const e = String(t);
  return "0000000".slice(e.length) + e;
};
function Nu(t, e) {
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
function ap() {
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
function cp() {
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
      return typeof i != "string" && (i = i.toString()), n(i), Eu(i);
    },
    uEnc(i) {
      return typeof i != "string" && (i = i.toString()), r(i), Eu(i);
    },
    dec(i, s) {
      return sp(i, s);
    },
    uDec(i, s) {
      return Ql(i, s);
    }
  };
}
const me = cp();
var Fe;
(function(t) {
  t[t.Varint = 0] = "Varint", t[t.Bit64 = 1] = "Bit64", t[t.LengthDelimited = 2] = "LengthDelimited", t[t.StartGroup = 3] = "StartGroup", t[t.EndGroup = 4] = "EndGroup", t[t.Bit32 = 5] = "Bit32";
})(Fe || (Fe = {}));
class up {
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
    for (rc(e); e > 127; )
      this.buf.push(e & 127 | 128), e = e >>> 7;
    return this.buf.push(e), this;
  }
  /**
   * Write a `int32` value, a signed 32 bit varint.
   */
  int32(e) {
    return $o(e), Nu(e, this.buf), this;
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
    zl(e);
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
    rc(e);
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
    return $o(e), e = (e << 1 ^ e >> 31) >>> 0, Nu(e, this.buf), this;
  }
  /**
   * Write a `fixed64` value, a signed, fixed-length 64-bit integer.
   */
  sfixed64(e) {
    let n = new Uint8Array(8), r = new DataView(n.buffer), i = me.enc(e);
    return r.setInt32(0, i.lo, !0), r.setInt32(4, i.hi, !0), this.raw(n);
  }
  /**
   * Write a `fixed64` value, an unsigned, fixed-length 64 bit integer.
   */
  fixed64(e) {
    let n = new Uint8Array(8), r = new DataView(n.buffer), i = me.uEnc(e);
    return r.setInt32(0, i.lo, !0), r.setInt32(4, i.hi, !0), this.raw(n);
  }
  /**
   * Write a `int64` value, a signed 64-bit varint.
   */
  int64(e) {
    let n = me.enc(e);
    return va(n.lo, n.hi, this.buf), this;
  }
  /**
   * Write a `sint64` value, a signed, zig-zag-encoded 64-bit varint.
   */
  sint64(e) {
    let n = me.enc(e), r = n.hi >> 31, i = n.lo << 1 ^ r, s = (n.hi << 1 | n.lo >>> 31) ^ r;
    return va(i, s, this.buf), this;
  }
  /**
   * Write a `uint64` value, an unsigned 64-bit varint.
   */
  uint64(e) {
    let n = me.uEnc(e);
    return va(n.lo, n.hi, this.buf), this;
  }
}
class lp {
  constructor(e, n) {
    this.varint64 = ip, this.uint32 = ap, this.buf = e, this.len = e.length, this.pos = 0, this.view = new DataView(e.buffer, e.byteOffset, e.byteLength), this.textDecoder = n ?? new TextDecoder();
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
    return me.dec(...this.varint64());
  }
  /**
   * Read a `uint64` field, an unsigned 64-bit varint.
   */
  uint64() {
    return me.uDec(...this.varint64());
  }
  /**
   * Read a `sint64` field, a signed, zig-zag-encoded 64-bit varint.
   */
  sint64() {
    let [e, n] = this.varint64(), r = -(e & 1);
    return e = (e >>> 1 | (n & 1) << 31) ^ r, n = n >>> 1 ^ r, me.dec(e, n);
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
    return me.uDec(this.sfixed32(), this.sfixed32());
  }
  /**
   * Read a `fixed64` field, a signed, fixed-length 64-bit integer.
   */
  sfixed64() {
    return me.dec(this.sfixed32(), this.sfixed32());
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
function ic(t, e) {
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
function sc(t) {
  switch (t) {
    case v.BOOL:
      return !1;
    case v.UINT64:
    case v.FIXED64:
    case v.INT64:
    case v.SFIXED64:
    case v.SINT64:
      return me.zero;
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
function tf(t, e) {
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
const ji = Symbol("@bufbuild/protobuf/unknown-fields"), xu = {
  readUnknownFields: !0,
  readerFactory: (t) => new lp(t)
}, Bu = {
  writeUnknownFields: !0,
  writerFactory: () => new up()
};
function fp(t) {
  return t ? Object.assign(Object.assign({}, xu), t) : xu;
}
function dp(t) {
  return t ? Object.assign(Object.assign({}, Bu), t) : Bu;
}
function mp() {
  return {
    makeReadOptions: fp,
    makeWriteOptions: dp,
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
                  $.push(Ts(e, y));
              } else
                $.push(Ts(e, y));
            } else
              m[g] = Ts(e, y);
            break;
          case "message":
            const b = f.T;
            h ? m[g].push(Vo(e, new b(), r)) : m[g] instanceof x ? Vo(e, m[g], r) : (m[g] = Vo(e, new b(), r), b.fieldWrapper && !f.oneof && !f.repeated && (m[g] = b.fieldWrapper.unwrapField(m[g])));
            break;
          case "map":
            let [S, A] = hp(f, e, r);
            m[g][S] = A;
            break;
        }
      }
    }
  };
}
function Vo(t, e, n) {
  return e.getType().runtime.bin.readMessage(e, t, t.uint32(), n), e;
}
function hp(t, e, n) {
  const r = e.uint32(), i = e.pos + r;
  let s, c;
  for (; e.pos < i; ) {
    let [u] = e.tag();
    switch (u) {
      case 1:
        s = Ts(e, t.K);
        break;
      case 2:
        switch (t.V.kind) {
          case "scalar":
            c = Ts(e, t.V.T);
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
    let u = sc(t.K);
    s = t.K == v.BOOL ? u.toString() : u;
  }
  if (typeof s != "string" && typeof s != "number" && (s = s.toString()), c === void 0)
    switch (t.V.kind) {
      case "scalar":
        c = sc(t.V.T);
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
function Ts(t, e) {
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
function pp(t, e, n, r, i) {
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
  switch (Es(t, n.K, 1, s, !0), n.V.kind) {
    case "scalar":
      Es(t, n.V.T, 2, i, !0);
      break;
    case "enum":
      Es(t, v.INT32, 2, i, !0);
      break;
    case "message":
      oc(t, e, n.V.T, 2, i);
      break;
  }
  t.join();
}
function oc(t, e, n, r, i) {
  if (i !== void 0) {
    const s = ic(n, i);
    t.tag(r, Fe.LengthDelimited).bytes(s.toBinary(e));
  }
}
function Es(t, e, n, r, i) {
  let [s, c, u] = tf(e, r);
  (!u || i) && t.tag(n, s)[c](r);
}
function gp(t, e, n, r) {
  if (!r.length)
    return;
  t.tag(n, Fe.LengthDelimited).fork();
  let [, i] = tf(e);
  for (let s = 0; s < r.length; s++)
    t[i](r[s]);
  t.join();
}
function wp() {
  return Object.assign(Object.assign({}, mp()), { writeMessage(t, e, n) {
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
              gp(e, f, i.no, s);
            else
              for (const m of s)
                Es(e, f, i.no, m, !0);
          else
            s !== void 0 && Es(e, f, i.no, s, !!i.oneof || i.opt);
          break;
        case "message":
          if (c)
            for (const m of s)
              oc(e, n, i.T, i.no, m);
          else
            oc(e, n, i.T, i.no, s);
          break;
        case "map":
          for (const [m, h] of Object.entries(s))
            pp(e, n, i, m, h);
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
const nf = {
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
}, Iu = {
  ignoreUnknownFields: !1
}, Ou = {
  emitDefaultValues: !1,
  enumAsInteger: !1,
  useProtoFieldName: !1,
  prettySpaces: 0
};
function yp(t) {
  return t ? Object.assign(Object.assign({}, Iu), t) : Iu;
}
function Tp(t) {
  return t ? Object.assign(Object.assign({}, Ou), t) : Ou;
}
function Ep(t) {
  const e = t(bp, ku);
  return {
    makeReadOptions: yp,
    makeWriteOptions: Tp,
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
                  S = us(m.T, b);
                } catch (A) {
                  let $ = `cannot decode field ${n.typeName}.${m.name} from JSON: ${this.debug(b)}`;
                  throw A instanceof Error && A.message.length > 0 && ($ += `: ${A.message}`), new Error($);
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
            let A;
            switch (m.V.kind) {
              case "message":
                A = m.V.T.fromJson(S, i);
                break;
              case "enum":
                if (A = Ja(m.V.T, S, i.ignoreUnknownFields), A === void 0)
                  continue;
                break;
              case "scalar":
                try {
                  A = us(m.V.T, S);
                } catch ($) {
                  let R = `cannot decode map value for field ${n.typeName}.${m.name} from JSON: ${this.debug(f)}`;
                  throw $ instanceof Error && $.message.length > 0 && (R += `: ${$.message}`), new Error(R);
                }
                break;
            }
            try {
              y[us(m.K, m.K == v.BOOL ? b == "true" ? !0 : b == "false" ? !1 : b : b).toString()] = A;
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
                g[h] = us(m.T, f);
              } catch (S) {
                let A = `cannot decode field ${n.typeName}.${m.name} from JSON: ${this.debug(f)}`;
                throw S instanceof Error && S.message.length > 0 && (A += `: ${S.message}`), new Error(A);
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
    readScalar: us,
    writeScalar: ku,
    debug: rf
  };
}
function rf(t) {
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
      return t == v.FLOAT && zl(n), n;
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
      return t == v.UINT32 ? rc(r) : $o(r), r;
    case v.INT64:
    case v.SFIXED64:
    case v.SINT64:
      if (e === null)
        return me.zero;
      if (typeof e != "number" && typeof e != "string")
        break;
      return me.parse(e);
    case v.FIXED64:
    case v.UINT64:
      if (e === null)
        return me.zero;
      if (typeof e != "number" && typeof e != "string")
        break;
      return me.uParse(e);
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
      return nf.dec(e);
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
  throw new Error(`cannot decode enum ${t.typeName} from JSON: ${rf(e)}`);
}
function bp(t, e, n, r) {
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
function ku(t, e, n) {
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
        return Qe(e instanceof Uint8Array), n || e.byteLength > 0 ? nf.enc(e) : void 0;
    }
}
function Np() {
  return Ep((t, e) => function(r, i, s) {
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
            c.push(ic(r.T, i[u]).toJson(s));
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
          return i !== void 0 ? ic(r.T, i).toJson(s) : void 0;
      }
  });
}
function xp() {
  return {
    setEnumType: Xl,
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
              f && f.kind == "message" && !(m instanceof f.T) ? m = new f.T(m) : f && f.kind === "scalar" && f.T === v.BYTES && (m = ls(m)), s[i] = { case: u, value: m };
              break;
            case "scalar":
            case "enum":
              let h = c[i];
              r.T === v.BYTES && (h = r.repeated ? h.map(ls) : ls(h)), s[i] = h;
              break;
            case "map":
              switch (r.V.kind) {
                case "scalar":
                case "enum":
                  if (r.V.T === v.BYTES)
                    for (const [b, S] of Object.entries(c[i]))
                      s[i][b] = ls(S);
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
                g.fieldWrapper ? /* We can't use BytesValue.typeName as that will create a circular import */ g.typeName === "google.protobuf.BytesValue" ? s[i] = ls(y) : s[i] = y : s[i] = y instanceof g ? y : new g(y);
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
function ls(t) {
  return t instanceof Uint8Array ? t : new Uint8Array(t);
}
class Bp {
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
function sf(t, e) {
  const n = of(t);
  return e ? n : Jp(vp(n));
}
function Ip(t) {
  return sf(t, !1);
}
const Op = of;
function of(t) {
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
const kp = /* @__PURE__ */ new Set([
  // names reserved by JavaScript
  "constructor",
  "toString",
  "toJSON",
  "valueOf"
]), Sp = /* @__PURE__ */ new Set([
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
]), af = (t) => `${t}$`, vp = (t) => Sp.has(t) ? af(t) : t, Jp = (t) => kp.has(t) ? af(t) : t;
class Fp {
  constructor(e) {
    this.kind = "oneof", this.repeated = !1, this.packed = !1, this.opt = !1, this.default = void 0, this.fields = [], this.name = e, this.localName = Ip(e);
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
const o = rp("proto3", Np(), wp(), Object.assign(Object.assign({}, xp()), {
  newFieldList(t) {
    return new Bp(t, Ap);
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
          r[n] = sc(e.T);
          break;
      }
    }
  }
}));
function Ap(t) {
  var e, n, r;
  const i = [];
  let s;
  for (const c of typeof t == "function" ? t() : t) {
    const u = c;
    if (u.localName = sf(c.name, c.oneof !== void 0), u.jsonName = (e = c.jsonName) !== null && e !== void 0 ? e : Op(c.name), u.repeated = (n = c.repeated) !== null && n !== void 0 ? n : !1, u.packed = (r = c.packed) !== null && r !== void 0 ? r : c.kind == "enum" || c.kind == "scalar" && c.T != v.BYTES && c.T != v.STRING, c.oneof !== void 0) {
      const f = typeof c.oneof == "string" ? c.oneof : c.oneof.name;
      (!s || s.name != f) && (s = new Fp(f)), u.oneof = s, s.addField(u);
    }
    i.push(u);
  }
  return i;
}
var we;
(function(t) {
  t[t.Unary = 0] = "Unary", t[t.ServerStreaming = 1] = "ServerStreaming", t[t.ClientStreaming = 2] = "ClientStreaming", t[t.BiDiStreaming = 3] = "BiDiStreaming";
})(we || (we = {}));
var Su;
(function(t) {
  t[t.NoSideEffects = 1] = "NoSideEffects", t[t.Idempotent = 2] = "Idempotent";
})(Su || (Su = {}));
class ve extends x {
  constructor(e) {
    super(), this.seconds = me.zero, this.nanos = 0, o.util.initPartial(e, this);
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
    return this.seconds = me.parse(i / 1e3), this.nanos = 0, r[7] && (this.nanos = parseInt("1" + r[7] + "0".repeat(9 - r[7].length)) - 1e9), this;
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
      seconds: me.parse(Math.floor(n / 1e3)),
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
class Wt extends x {
  constructor(e) {
    super(), this.seconds = me.zero, this.nanos = 0, o.util.initPartial(e, this);
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
    if (this.seconds = me.parse(i), typeof r[2] == "string") {
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
      r = "0".repeat(9 - r.length) + r, r.substring(3) === "000000" ? r = r.substring(0, 3) : r.substring(6) === "000" && (r = r.substring(0, 6)), n += "." + r, this.nanos < 0 && this.seconds === me.zero && (n = "-" + n);
    }
    return n + "s";
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
Wt.typeName = "google.protobuf.Duration";
Wt.fields = o.util.newFieldList(() => [
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
class W extends x {
  constructor(e) {
    super(), this.value = new Uint8Array(0), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new W().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new W().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new W().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(W, e, n);
  }
}
W.runtime = o;
W.typeName = "code.common.v1.SolanaAccountId";
W.fields = o.util.newFieldList(() => [
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
class zt extends x {
  constructor(e) {
    super(), this.value = new Uint8Array(0), o.util.initPartial(e, this);
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
zt.typeName = "code.common.v1.Blockhash";
zt.fields = o.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
let ii = class ps extends x {
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
    super(), this.result = ks.OK, this.body = new Uint8Array(0), this.message = "", o.util.initPartial(e, this);
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
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(ks) },
  { no: 2, name: "body", kind: "scalar", T: 12 },
  { no: 3, name: "message", kind: "scalar", T: 9 }
]);
var ks;
(function(t) {
  t[t.OK = 0] = "OK", t[t.ERROR = 1] = "ERROR";
})(ks || (ks = {}));
o.util.setEnumType(ks, "code.common.v1.Response.Result", [
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
  { no: 2, name: "owner", kind: "message", T: W },
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
    super(), this.code = Ss.OK, o.util.initPartial(e, this);
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
  { no: 1, name: "code", kind: "enum", T: o.getEnumType(Ss) }
]);
var Ss;
(function(t) {
  t[t.OK = 0] = "OK";
})(Ss || (Ss = {}));
o.util.setEnumType(Ss, "code.transaction.v2.SubmitIntentResponse.Success.Code", [
  { no: 0, name: "OK" }
]);
class nn extends x {
  constructor(e) {
    super(), this.code = vs.DENIED, this.errorDetails = [], o.util.initPartial(e, this);
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
  { no: 1, name: "code", kind: "enum", T: o.getEnumType(vs) },
  { no: 2, name: "error_details", kind: "message", T: Hn, repeated: !0 }
]);
var vs;
(function(t) {
  t[t.DENIED = 0] = "DENIED", t[t.INVALID_INTENT = 1] = "INVALID_INTENT", t[t.SIGNATURE_ERROR = 2] = "SIGNATURE_ERROR", t[t.STALE_STATE = 3] = "STALE_STATE";
})(vs || (vs = {}));
o.util.setEnumType(vs, "code.transaction.v2.SubmitIntentResponse.Error.Code", [
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
  { no: 2, name: "owner", kind: "message", T: W },
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
    super(), this.result = Fs.OK, this.status = As.UNKNOWN, o.util.initPartial(e, this);
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
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(Fs) },
  { no: 2, name: "status", kind: "enum", T: o.getEnumType(As) }
]);
var Fs;
(function(t) {
  t[t.OK = 0] = "OK", t[t.INTENT_NOT_FOUND = 1] = "INTENT_NOT_FOUND", t[t.ACTION_NOT_FOUND = 2] = "ACTION_NOT_FOUND", t[t.INVALID_ACTION = 3] = "INVALID_ACTION";
})(Fs || (Fs = {}));
o.util.setEnumType(Fs, "code.transaction.v2.GetPrivacyUpgradeStatusResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INTENT_NOT_FOUND" },
  { no: 2, name: "ACTION_NOT_FOUND" },
  { no: 3, name: "INVALID_ACTION" }
]);
var As;
(function(t) {
  t[t.UNKNOWN = 0] = "UNKNOWN", t[t.TEMPORARY_TRANSACTION_FINALIZED = 1] = "TEMPORARY_TRANSACTION_FINALIZED", t[t.WAITING_FOR_NEXT_BLOCK = 2] = "WAITING_FOR_NEXT_BLOCK", t[t.READY_FOR_UPGRADE = 3] = "READY_FOR_UPGRADE", t[t.ALREADY_UPGRADED = 4] = "ALREADY_UPGRADED";
})(As || (As = {}));
o.util.setEnumType(As, "code.transaction.v2.GetPrivacyUpgradeStatusResponse.Status", [
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
  { no: 1, name: "owner", kind: "message", T: W },
  { no: 2, name: "limit", kind: "scalar", T: 13 },
  { no: 3, name: "signature", kind: "message", T: ye }
]);
class un extends x {
  constructor(e) {
    super(), this.result = Us.OK, this.items = [], o.util.initPartial(e, this);
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
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(Us) },
  { no: 2, name: "items", kind: "message", T: Wn, repeated: !0 }
]);
var Us;
(function(t) {
  t[t.OK = 0] = "OK", t[t.NOT_FOUND = 1] = "NOT_FOUND";
})(Us || (Us = {}));
o.util.setEnumType(Us, "code.transaction.v2.GetPrioritizedIntentsForPrivacyUpgradeResponse.Result", [
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
  { no: 1, name: "owner", kind: "message", T: W },
  { no: 2, name: "signature", kind: "message", T: ye },
  { no: 3, name: "consumed_since", kind: "message", T: ve }
]);
class fn extends x {
  constructor(e) {
    super(), this.result = Ls.OK, this.remainingSendLimitsByCurrency = {}, this.microPaymentLimitsByCurrency = {}, o.util.initPartial(e, this);
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
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(Ls) },
  { no: 2, name: "remaining_send_limits_by_currency", kind: "map", K: 9, V: { kind: "message", T: Xn } },
  { no: 3, name: "deposit_limit", kind: "message", T: Zn },
  { no: 4, name: "micro_payment_limits_by_currency", kind: "map", K: 9, V: { kind: "message", T: Gn } }
]);
var Ls;
(function(t) {
  t[t.OK = 0] = "OK";
})(Ls || (Ls = {}));
o.util.setEnumType(Ls, "code.transaction.v2.GetLimitsResponse.Result", [
  { no: 0, name: "OK" }
]);
class dn extends x {
  constructor(e) {
    super(), this.pageSize = 0, this.direction = Cs.ASC, o.util.initPartial(e, this);
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
  { no: 1, name: "owner", kind: "message", T: W },
  { no: 2, name: "cursor", kind: "message", T: Ft },
  { no: 3, name: "page_size", kind: "scalar", T: 13 },
  { no: 4, name: "direction", kind: "enum", T: o.getEnumType(Cs) },
  { no: 5, name: "signature", kind: "message", T: ye }
]);
var Cs;
(function(t) {
  t[t.ASC = 0] = "ASC", t[t.DESC = 1] = "DESC";
})(Cs || (Cs = {}));
o.util.setEnumType(Cs, "code.transaction.v2.GetPaymentHistoryRequest.Direction", [
  { no: 0, name: "ASC" },
  { no: 1, name: "DESC" }
]);
class mn extends x {
  constructor(e) {
    super(), this.result = Ds.OK, this.items = [], o.util.initPartial(e, this);
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
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(Ds) },
  { no: 2, name: "items", kind: "message", T: Yn, repeated: !0 }
]);
var Ds;
(function(t) {
  t[t.OK = 0] = "OK", t[t.NOT_FOUND = 1] = "NOT_FOUND";
})(Ds || (Ds = {}));
o.util.setEnumType(Ds, "code.transaction.v2.GetPaymentHistoryResponse.Result", [
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
  { no: 1, name: "account", kind: "message", T: W }
]);
class pn extends x {
  constructor(e) {
    super(), this.accountType = _s.Unknown, this.isValidPaymentDestination = !1, this.requiresInitialization = !1, o.util.initPartial(e, this);
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
  { no: 2, name: "account_type", kind: "enum", T: o.getEnumType(_s) },
  { no: 1, name: "is_valid_payment_destination", kind: "scalar", T: 8 },
  { no: 3, name: "requires_initialization", kind: "scalar", T: 8 }
]);
var _s;
(function(t) {
  t[t.Unknown = 0] = "Unknown", t[t.TokenAccount = 1] = "TokenAccount", t[t.OwnerAccount = 2] = "OwnerAccount";
})(_s || (_s = {}));
o.util.setEnumType(_s, "code.transaction.v2.CanWithdrawToAccountResponse.AccountType", [
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
  { no: 2, name: "owner", kind: "message", T: W },
  { no: 3, name: "signature", kind: "message", T: ye }
]);
class wn extends x {
  constructor(e) {
    super(), this.result = qs.OK, o.util.initPartial(e, this);
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
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(qs) },
  { no: 2, name: "exchange_data", kind: "message", T: Ve }
]);
var qs;
(function(t) {
  t[t.OK = 0] = "OK", t[t.UNAVAILABLE = 1] = "UNAVAILABLE", t[t.ALREADY_CLAIMED = 2] = "ALREADY_CLAIMED";
})(qs || (qs = {}));
o.util.setEnumType(qs, "code.transaction.v2.AirdropResponse.Result", [
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
  { no: 1, name: "destination", kind: "message", T: W },
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
  { no: 1, name: "destination", kind: "message", T: W },
  { no: 2, name: "exchange_data", kind: "message", T: Ve },
  { no: 3, name: "is_withdrawal", kind: "scalar", T: 8 }
]);
class bn extends x {
  constructor(e) {
    super(), this.quarks = me.zero, this.isDeposit = !1, o.util.initPartial(e, this);
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
  { no: 1, name: "source", kind: "message", T: W },
  { no: 2, name: "quarks", kind: "scalar", T: 4 },
  { no: 3, name: "is_deposit", kind: "scalar", T: 8 }
]);
class Nn extends x {
  constructor(e) {
    super(), this.quarks = me.zero, this.isRemoteSend = !1, this.isIssuerVoidingGiftCard = !1, o.util.initPartial(e, this);
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
  { no: 1, name: "source", kind: "message", T: W },
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
    super(), this.quarks = me.zero, o.util.initPartial(e, this);
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
    super(), this.accountType = st.UNKNOWN, this.index = me.zero, o.util.initPartial(e, this);
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
  { no: 2, name: "owner", kind: "message", T: W },
  { no: 3, name: "index", kind: "scalar", T: 4 },
  { no: 4, name: "authority", kind: "message", T: W },
  { no: 5, name: "token", kind: "message", T: W },
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
  { no: 2, name: "authority", kind: "message", T: W },
  { no: 3, name: "token", kind: "message", T: W }
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
  { no: 2, name: "authority", kind: "message", T: W },
  { no: 3, name: "token", kind: "message", T: W },
  { no: 4, name: "destination", kind: "message", T: W }
]);
class vn extends x {
  constructor(e) {
    super(), this.amount = me.zero, o.util.initPartial(e, this);
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
  { no: 1, name: "authority", kind: "message", T: W },
  { no: 2, name: "source", kind: "message", T: W },
  { no: 3, name: "destination", kind: "message", T: W },
  { no: 4, name: "amount", kind: "scalar", T: 4 }
]);
class Jn extends x {
  constructor(e) {
    super(), this.amount = me.zero, this.shouldClose = !1, o.util.initPartial(e, this);
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
  { no: 1, name: "authority", kind: "message", T: W },
  { no: 2, name: "source", kind: "message", T: W },
  { no: 3, name: "destination", kind: "message", T: W },
  { no: 4, name: "amount", kind: "scalar", T: 4 },
  { no: 5, name: "should_close", kind: "scalar", T: 8 }
]);
class Fn extends x {
  constructor(e) {
    super(), this.amount = me.zero, o.util.initPartial(e, this);
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
  { no: 1, name: "authority", kind: "message", T: W },
  { no: 2, name: "source", kind: "message", T: W },
  { no: 3, name: "destination", kind: "message", T: W },
  { no: 4, name: "amount", kind: "scalar", T: 4 }
]);
class An extends x {
  constructor(e) {
    super(), this.amount = me.zero, o.util.initPartial(e, this);
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
  { no: 1, name: "authority", kind: "message", T: W },
  { no: 2, name: "source", kind: "message", T: W },
  { no: 3, name: "destination", kind: "message", T: W },
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
  { no: 1, name: "nonce", kind: "message", T: W },
  { no: 2, name: "blockhash", kind: "message", T: zt }
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
  { no: 1, name: "treasury", kind: "message", T: W },
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
  { no: 1, name: "treasury", kind: "message", T: W },
  { no: 2, name: "recent_root", kind: "message", T: ii }
]);
class Vn extends x {
  constructor(e) {
    super(), this.newCommitmentAmount = me.zero, this.merkleProof = [], o.util.initPartial(e, this);
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
  { no: 1, name: "new_commitment", kind: "message", T: W },
  { no: 2, name: "new_commitment_transcript", kind: "message", T: ii },
  { no: 3, name: "new_commitment_destination", kind: "message", T: W },
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
class Wn extends x {
  constructor(e) {
    super(), this.actions = [], o.util.initPartial(e, this);
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
Wn.typeName = "code.transaction.v2.UpgradeableIntent";
Wn.fields = o.util.newFieldList(() => [
  { no: 1, name: "id", kind: "message", T: tt },
  { no: 2, name: "actions", kind: "message", T: zn, repeated: !0 }
]);
class zn extends x {
  constructor(e) {
    super(), this.actionId = 0, this.sourceAccountType = st.UNKNOWN, this.sourceDerivationIndex = me.zero, this.originalAmount = me.zero, o.util.initPartial(e, this);
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
zn.typeName = "code.transaction.v2.UpgradeableIntent.UpgradeablePrivateAction";
zn.fields = o.util.newFieldList(() => [
  { no: 1, name: "transaction_blob", kind: "message", T: vt },
  { no: 2, name: "client_signature", kind: "message", T: ye },
  { no: 3, name: "action_id", kind: "scalar", T: 13 },
  { no: 4, name: "source_account_type", kind: "enum", T: o.getEnumType(st) },
  { no: 5, name: "source_derivation_index", kind: "scalar", T: 4 },
  { no: 6, name: "original_destination", kind: "message", T: W },
  { no: 7, name: "original_amount", kind: "scalar", T: 4 },
  { no: 8, name: "treasury", kind: "message", T: W },
  { no: 9, name: "recent_root", kind: "message", T: ii }
]);
class Yn extends x {
  constructor(e) {
    super(), this.paymentType = Ks.UNKNOWN, this.isWithdraw = !1, this.isDeposit = !1, this.isRemoteSend = !1, this.isReturned = !1, this.isAirdrop = !1, this.airdropType = Mt.UNKNOWN, this.isMicroPayment = !1, o.util.initPartial(e, this);
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
  { no: 3, name: "payment_type", kind: "enum", T: o.getEnumType(Ks) },
  { no: 4, name: "is_withdraw", kind: "scalar", T: 8 },
  { no: 5, name: "is_deposit", kind: "scalar", T: 8 },
  { no: 6, name: "timestamp", kind: "message", T: ve },
  { no: 7, name: "is_remote_send", kind: "scalar", T: 8 },
  { no: 8, name: "is_returned", kind: "scalar", T: 8 },
  { no: 9, name: "is_airdrop", kind: "scalar", T: 8 },
  { no: 10, name: "airdrop_type", kind: "enum", T: o.getEnumType(Mt) },
  { no: 11, name: "is_micro_payment", kind: "scalar", T: 8 }
]);
var Ks;
(function(t) {
  t[t.UNKNOWN = 0] = "UNKNOWN", t[t.SEND = 1] = "SEND", t[t.RECEIVE = 2] = "RECEIVE";
})(Ks || (Ks = {}));
o.util.setEnumType(Ks, "code.transaction.v2.PaymentHistoryItem.PaymentType", [
  { no: 0, name: "UNKNOWN" },
  { no: 1, name: "SEND" },
  { no: 2, name: "RECEIVE" }
]);
class Ve extends x {
  constructor(e) {
    super(), this.currency = "", this.exchangeRate = 0, this.nativeAmount = 0, this.quarks = me.zero, o.util.initPartial(e, this);
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
    super(), this.maxQuarks = me.zero, o.util.initPartial(e, this);
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
  { no: 1, name: "owner", kind: "message", T: W },
  { no: 2, name: "signature", kind: "message", T: ye }
]);
class er extends x {
  constructor(e) {
    super(), this.result = Ps.OK, o.util.initPartial(e, this);
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
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(Ps) }
]);
var Ps;
(function(t) {
  t[t.OK = 0] = "OK", t[t.NOT_FOUND = 1] = "NOT_FOUND", t[t.UNLOCKED_TIMELOCK_ACCOUNT = 2] = "UNLOCKED_TIMELOCK_ACCOUNT";
})(Ps || (Ps = {}));
o.util.setEnumType(Ps, "code.account.v1.IsCodeAccountResponse.Result", [
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
  { no: 1, name: "owner", kind: "message", T: W },
  { no: 2, name: "signature", kind: "message", T: ye }
]);
class nr extends x {
  constructor(e) {
    super(), this.result = $s.OK, this.tokenAccountInfos = {}, o.util.initPartial(e, this);
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
  { no: 1, name: "result", kind: "enum", T: o.getEnumType($s) },
  { no: 2, name: "token_account_infos", kind: "map", K: 9, V: { kind: "message", T: rr } }
]);
var $s;
(function(t) {
  t[t.OK = 0] = "OK", t[t.NOT_FOUND = 1] = "NOT_FOUND";
})($s || ($s = {}));
o.util.setEnumType($s, "code.account.v1.GetTokenAccountInfosResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" }
]);
class rr extends x {
  constructor(e) {
    super(), this.accountType = st.UNKNOWN, this.index = me.zero, this.balanceSource = Ms.UNKNOWN, this.balance = me.zero, this.managementState = Vs.UNKNOWN, this.blockchainState = Hs.UNKNOWN, this.mustRotate = !1, this.claimState = js.UNKNOWN, o.util.initPartial(e, this);
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
  { no: 1, name: "address", kind: "message", T: W },
  { no: 2, name: "owner", kind: "message", T: W },
  { no: 3, name: "authority", kind: "message", T: W },
  { no: 4, name: "account_type", kind: "enum", T: o.getEnumType(st) },
  { no: 5, name: "index", kind: "scalar", T: 4 },
  { no: 6, name: "balance_source", kind: "enum", T: o.getEnumType(Ms) },
  { no: 7, name: "balance", kind: "scalar", T: 4 },
  { no: 8, name: "management_state", kind: "enum", T: o.getEnumType(Vs) },
  { no: 9, name: "blockchain_state", kind: "enum", T: o.getEnumType(Hs) },
  { no: 10, name: "must_rotate", kind: "scalar", T: 8 },
  { no: 11, name: "claim_state", kind: "enum", T: o.getEnumType(js) },
  { no: 12, name: "original_exchange_data", kind: "message", T: Ve }
]);
var Ms;
(function(t) {
  t[t.UNKNOWN = 0] = "UNKNOWN", t[t.BLOCKCHAIN = 1] = "BLOCKCHAIN", t[t.CACHE = 2] = "CACHE";
})(Ms || (Ms = {}));
o.util.setEnumType(Ms, "code.account.v1.TokenAccountInfo.BalanceSource", [
  { no: 0, name: "BALANCE_SOURCE_UNKNOWN" },
  { no: 1, name: "BALANCE_SOURCE_BLOCKCHAIN" },
  { no: 2, name: "BALANCE_SOURCE_CACHE" }
]);
var Vs;
(function(t) {
  t[t.UNKNOWN = 0] = "UNKNOWN", t[t.NONE = 1] = "NONE", t[t.LOCKING = 2] = "LOCKING", t[t.LOCKED = 3] = "LOCKED", t[t.UNLOCKING = 4] = "UNLOCKING", t[t.UNLOCKED = 5] = "UNLOCKED", t[t.CLOSING = 6] = "CLOSING", t[t.CLOSED = 7] = "CLOSED";
})(Vs || (Vs = {}));
o.util.setEnumType(Vs, "code.account.v1.TokenAccountInfo.ManagementState", [
  { no: 0, name: "MANAGEMENT_STATE_UNKNOWN" },
  { no: 1, name: "MANAGEMENT_STATE_NONE" },
  { no: 2, name: "MANAGEMENT_STATE_LOCKING" },
  { no: 3, name: "MANAGEMENT_STATE_LOCKED" },
  { no: 4, name: "MANAGEMENT_STATE_UNLOCKING" },
  { no: 5, name: "MANAGEMENT_STATE_UNLOCKED" },
  { no: 6, name: "MANAGEMENT_STATE_CLOSING" },
  { no: 7, name: "MANAGEMENT_STATE_CLOSED" }
]);
var Hs;
(function(t) {
  t[t.UNKNOWN = 0] = "UNKNOWN", t[t.DOES_NOT_EXIST = 1] = "DOES_NOT_EXIST", t[t.EXISTS = 2] = "EXISTS";
})(Hs || (Hs = {}));
o.util.setEnumType(Hs, "code.account.v1.TokenAccountInfo.BlockchainState", [
  { no: 0, name: "BLOCKCHAIN_STATE_UNKNOWN" },
  { no: 1, name: "BLOCKCHAIN_STATE_DOES_NOT_EXIST" },
  { no: 2, name: "BLOCKCHAIN_STATE_EXISTS" }
]);
var js;
(function(t) {
  t[t.UNKNOWN = 0] = "UNKNOWN", t[t.NOT_CLAIMED = 1] = "NOT_CLAIMED", t[t.CLAIMED = 2] = "CLAIMED", t[t.EXPIRED = 3] = "EXPIRED";
})(js || (js = {}));
o.util.setEnumType(js, "code.account.v1.TokenAccountInfo.ClaimState", [
  { no: 0, name: "CLAIM_STATE_UNKNOWN" },
  { no: 1, name: "CLAIM_STATE_NOT_CLAIMED" },
  { no: 2, name: "CLAIM_STATE_CLAIMED" },
  { no: 3, name: "CLAIM_STATE_EXPIRED" }
]);
we.Unary, we.Unary;
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
  { no: 1, name: "owner_account_id", kind: "message", T: W },
  { no: 2, name: "signature", kind: "message", T: ye },
  { no: 3, name: "container_id", kind: "message", T: nt },
  { no: 4, name: "contacts", kind: "message", T: Ke, repeated: !0 }
]);
class sr extends x {
  constructor(e) {
    super(), this.result = Rs.OK, this.contactStatus = {}, o.util.initPartial(e, this);
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
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(Rs) },
  { no: 2, name: "contact_status", kind: "map", K: 9, V: { kind: "message", T: At } }
]);
var Rs;
(function(t) {
  t[t.OK = 0] = "OK";
})(Rs || (Rs = {}));
o.util.setEnumType(Rs, "code.contact.v1.AddContactsResponse.Result", [
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
  { no: 1, name: "owner_account_id", kind: "message", T: W },
  { no: 2, name: "signature", kind: "message", T: ye },
  { no: 3, name: "container_id", kind: "message", T: nt },
  { no: 4, name: "contacts", kind: "message", T: Ke, repeated: !0 }
]);
class ar extends x {
  constructor(e) {
    super(), this.result = Ws.OK, o.util.initPartial(e, this);
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
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(Ws) }
]);
var Ws;
(function(t) {
  t[t.OK = 0] = "OK";
})(Ws || (Ws = {}));
o.util.setEnumType(Ws, "code.contact.v1.RemoveContactsResponse.Result", [
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
  { no: 1, name: "owner_account_id", kind: "message", T: W },
  { no: 2, name: "signature", kind: "message", T: ye },
  { no: 3, name: "container_id", kind: "message", T: nt },
  { no: 4, name: "page_token", kind: "message", T: No },
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
  { no: 3, name: "next_page_token", kind: "message", T: No }
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
let No = class gs extends x {
  constructor(e) {
    super(), this.value = new Uint8Array(0), o.util.initPartial(e, this);
  }
  static fromBinary(e, n) {
    return new gs().fromBinary(e, n);
  }
  static fromJson(e, n) {
    return new gs().fromJson(e, n);
  }
  static fromJsonString(e, n) {
    return new gs().fromJsonString(e, n);
  }
  static equals(e, n) {
    return o.util.equals(gs, e, n);
  }
};
No.runtime = o;
No.typeName = "code.contact.v1.PageToken";
No.fields = o.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
we.Unary, we.Unary, we.Unary;
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
    super(), this.result = Ys.OK, this.rates = {}, o.util.initPartial(e, this);
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
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(Ys) },
  { no: 2, name: "as_of", kind: "message", T: ve },
  { no: 3, name: "rates", kind: "map", K: 9, V: { kind: "scalar", T: 1 } }
]);
var Ys;
(function(t) {
  t[t.OK = 0] = "OK", t[t.MISSING_DATA = 1] = "MISSING_DATA";
})(Ys || (Ys = {}));
o.util.setEnumType(Ys, "code.currency.v1.GetAllRatesResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "MISSING_DATA" }
]);
class mr extends x {
  constructor(e) {
    super(), this.forSymbol = "", this.interval = Xs.RAW, o.util.initPartial(e, this);
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
  { no: 2, name: "interval", kind: "enum", T: o.getEnumType(Xs) },
  { no: 3, name: "start", kind: "message", T: ve },
  { no: 4, name: "end", kind: "message", T: ve }
]);
var Xs;
(function(t) {
  t[t.RAW = 0] = "RAW", t[t.HOUR = 1] = "HOUR", t[t.DAY = 2] = "DAY", t[t.WEEK = 3] = "WEEK", t[t.MONTH = 4] = "MONTH";
})(Xs || (Xs = {}));
o.util.setEnumType(Xs, "code.currency.v1.GetExchangeRateHistoryRequest.Interval", [
  { no: 0, name: "INTERVAL_RAW" },
  { no: 1, name: "INTERVAL_HOUR" },
  { no: 2, name: "INTERVAL_DAY" },
  { no: 3, name: "INTERVAL_WEEK" },
  { no: 4, name: "INTERVAL_MONTH" }
]);
class hr extends x {
  constructor(e) {
    super(), this.result = Zs.OK, this.items = [], o.util.initPartial(e, this);
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
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(Zs) },
  { no: 2, name: "items", kind: "message", T: pr, repeated: !0 }
]);
var Zs;
(function(t) {
  t[t.OK = 0] = "OK", t[t.NOT_FOUND = 1] = "NOT_FOUND";
})(Zs || (Zs = {}));
o.util.setEnumType(Zs, "code.currency.v1.GetExchangeRateHistoryResponse.Result", [
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
we.Unary, we.Unary;
var Gs;
(function(t) {
  t[t.NOT_INVITED = 0] = "NOT_INVITED", t[t.INVITED = 1] = "INVITED", t[t.REGISTERED = 2] = "REGISTERED", t[t.REVOKED = 3] = "REVOKED";
})(Gs || (Gs = {}));
o.util.setEnumType(Gs, "code.invite.v2.InvitationStatus", [
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
    super(), this.result = Qs.OK, this.inviteCount = 0, o.util.initPartial(e, this);
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
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(Qs) },
  { no: 2, name: "invite_count", kind: "scalar", T: 13 }
]);
var Qs;
(function(t) {
  t[t.OK = 0] = "OK";
})(Qs || (Qs = {}));
o.util.setEnumType(Qs, "code.invite.v2.GetInviteCountResponse.Result", [
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
    super(), this.result = eo.OK, o.util.initPartial(e, this);
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
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(eo) }
]);
var eo;
(function(t) {
  t[t.OK = 0] = "OK", t[t.INVITE_COUNT_EXCEEDED = 1] = "INVITE_COUNT_EXCEEDED", t[t.ALREADY_INVITED = 2] = "ALREADY_INVITED", t[t.USER_NOT_INVITED = 3] = "USER_NOT_INVITED", t[t.INVALID_RECEIVER_PHONE_NUMBER = 4] = "INVALID_RECEIVER_PHONE_NUMBER", t[t.INVITE_CODE_NOT_FOUND = 5] = "INVITE_CODE_NOT_FOUND", t[t.INVITE_CODE_REVOKED = 6] = "INVITE_CODE_REVOKED", t[t.INVITE_CODE_EXPIRED = 7] = "INVITE_CODE_EXPIRED";
})(eo || (eo = {}));
o.util.setEnumType(eo, "code.invite.v2.InvitePhoneNumberResponse.Result", [
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
    super(), this.result = to.OK, this.status = Gs.NOT_INVITED, o.util.initPartial(e, this);
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
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(to) },
  { no: 2, name: "status", kind: "enum", T: o.getEnumType(Gs) }
]);
var to;
(function(t) {
  t[t.OK = 0] = "OK";
})(to || (to = {}));
o.util.setEnumType(to, "code.invite.v2.GetInvitationStatusResponse.Result", [
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
we.Unary, we.Unary, we.Unary;
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
    super(), this.result = no.OK, o.util.initPartial(e, this);
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
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(no) }
]);
var no;
(function(t) {
  t[t.OK = 0] = "OK";
})(no || (no = {}));
o.util.setEnumType(no, "code.messaging.v1.AckMesssagesResponse.Result", [
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
    super(), this.result = ro.OK, o.util.initPartial(e, this);
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
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(ro) },
  { no: 2, name: "message_id", kind: "message", T: yt }
]);
var ro;
(function(t) {
  t[t.OK = 0] = "OK", t[t.NO_ACTIVE_STREAM = 1] = "NO_ACTIVE_STREAM";
})(ro || (ro = {}));
o.util.setEnumType(ro, "code.messaging.v1.SendMessageResponse.Result", [
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
  { no: 1, name: "requestor_account", kind: "message", T: W }
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
  { no: 1, name: "requestor_account", kind: "message", T: W },
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
  { no: 2, name: "ping_delay", kind: "message", T: Wt }
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
we.ServerStreaming, we.BiDiStreaming, we.Unary, we.Unary, we.Unary;
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
    super(), this.result = io.OK, o.util.initPartial(e, this);
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
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(io) }
]);
var io;
(function(t) {
  t[t.OK = 0] = "OK", t[t.NOT_INVITED = 1] = "NOT_INVITED", t[t.RATE_LIMITED = 2] = "RATE_LIMITED", t[t.INVALID_PHONE_NUMBER = 3] = "INVALID_PHONE_NUMBER", t[t.UNSUPPORTED_PHONE_TYPE = 4] = "UNSUPPORTED_PHONE_TYPE";
})(io || (io = {}));
o.util.setEnumType(io, "code.phone.v1.SendVerificationCodeResponse.Result", [
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
    super(), this.result = so.OK, o.util.initPartial(e, this);
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
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(so) },
  { no: 2, name: "linking_token", kind: "message", T: _t }
]);
var so;
(function(t) {
  t[t.OK = 0] = "OK", t[t.INVALID_CODE = 1] = "INVALID_CODE", t[t.NO_VERIFICATION = 2] = "NO_VERIFICATION", t[t.RATE_LIMITED = 3] = "RATE_LIMITED";
})(so || (so = {}));
o.util.setEnumType(so, "code.phone.v1.CheckVerificationCodeResponse.Result", [
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
  { no: 1, name: "owner_account_id", kind: "message", T: W },
  { no: 2, name: "signature", kind: "message", T: ye }
]);
class Hr extends x {
  constructor(e) {
    super(), this.result = oo.OK, this.isLinked = !1, o.util.initPartial(e, this);
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
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(oo) },
  { no: 2, name: "phone_number", kind: "message", T: Ke },
  { no: 3, name: "is_linked", kind: "scalar", T: 8 }
]);
var oo;
(function(t) {
  t[t.OK = 0] = "OK", t[t.NOT_FOUND = 1] = "NOT_FOUND", t[t.NOT_INVITED = 2] = "NOT_INVITED", t[t.UNLOCKED_TIMELOCK_ACCOUNT = 3] = "UNLOCKED_TIMELOCK_ACCOUNT";
})(oo || (oo = {}));
o.util.setEnumType(oo, "code.phone.v1.GetAssociatedPhoneNumberResponse.Result", [
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
we.Unary, we.Unary, we.Unary;
var ao;
(function(t) {
  t[t.UNKNOWN = 0] = "UNKNOWN", t[t.FCM_ANDROID = 1] = "FCM_ANDROID", t[t.FCM_APNS = 2] = "FCM_APNS";
})(ao || (ao = {}));
o.util.setEnumType(ao, "code.push.v1.TokenType", [
  { no: 0, name: "UNKNOWN" },
  { no: 1, name: "FCM_ANDROID" },
  { no: 2, name: "FCM_APNS" }
]);
class jr extends x {
  constructor(e) {
    super(), this.pushToken = "", this.tokenType = ao.UNKNOWN, o.util.initPartial(e, this);
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
  { no: 1, name: "owner_account_id", kind: "message", T: W },
  { no: 2, name: "signature", kind: "message", T: ye },
  { no: 3, name: "container_id", kind: "message", T: nt },
  { no: 4, name: "push_token", kind: "scalar", T: 9 },
  { no: 5, name: "token_type", kind: "enum", T: o.getEnumType(ao) }
]);
class Rr extends x {
  constructor(e) {
    super(), this.result = co.OK, o.util.initPartial(e, this);
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
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(co) }
]);
var co;
(function(t) {
  t[t.OK = 0] = "OK", t[t.INVALID_PUSH_TOKEN = 1] = "INVALID_PUSH_TOKEN";
})(co || (co = {}));
o.util.setEnumType(co, "code.push.v1.AddTokenResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INVALID_PUSH_TOKEN" }
]);
we.Unary;
class Wr extends x {
  constructor(e) {
    super(), o.util.initPartial(e, this);
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
Wr.typeName = "code.support.v1.GetFAQsRequest";
Wr.fields = o.util.newFieldList(() => [
  { no: 1, name: "locale", kind: "message", T: Yt }
]);
class zr extends x {
  constructor(e) {
    super(), this.result = uo.OK, this.faqs = [], o.util.initPartial(e, this);
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
zr.typeName = "code.support.v1.GetFAQsResponse";
zr.fields = o.util.newFieldList(() => [
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
we.Unary;
we.BiDiStreaming, we.Unary, we.Unary, we.Unary, we.Unary, we.Unary, we.Unary, we.Unary;
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
  { no: 1, name: "owner_account_id", kind: "message", T: W },
  { no: 2, name: "signature", kind: "message", T: ye },
  { no: 3, name: "phone", kind: "message", T: _t, oneof: "token" }
]);
class Zr extends x {
  constructor(e) {
    super(), this.result = lo.OK, this.metadata = { case: void 0 }, o.util.initPartial(e, this);
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
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(lo) },
  { no: 2, name: "user", kind: "message", T: qt },
  { no: 3, name: "data_container_id", kind: "message", T: nt },
  { no: 5, name: "phone", kind: "message", T: Kt, oneof: "metadata" }
]);
var lo;
(function(t) {
  t[t.OK = 0] = "OK", t[t.INVALID_TOKEN = 1] = "INVALID_TOKEN", t[t.RATE_LIMITED = 2] = "RATE_LIMITED";
})(lo || (lo = {}));
o.util.setEnumType(lo, "code.user.v1.LinkAccountResponse.Result", [
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
  { no: 1, name: "owner_account_id", kind: "message", T: W },
  { no: 2, name: "signature", kind: "message", T: ye },
  { no: 4, name: "phone_number", kind: "message", T: Ke, oneof: "identifying_feature" }
]);
class Qr extends x {
  constructor(e) {
    super(), this.result = fo.OK, o.util.initPartial(e, this);
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
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(fo) }
]);
var fo;
(function(t) {
  t[t.OK = 0] = "OK", t[t.NEVER_ASSOCIATED = 1] = "NEVER_ASSOCIATED";
})(fo || (fo = {}));
o.util.setEnumType(fo, "code.user.v1.UnlinkAccountResponse.Result", [
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
  { no: 1, name: "owner_account_id", kind: "message", T: W },
  { no: 2, name: "signature", kind: "message", T: ye },
  { no: 3, name: "phone_number", kind: "message", T: Ke, oneof: "identifying_feature" }
]);
class ti extends x {
  constructor(e) {
    super(), this.result = mo.OK, this.metadata = { case: void 0 }, this.enableBetaFlags = !1, this.eligibleAirdrops = [], o.util.initPartial(e, this);
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
  { no: 1, name: "result", kind: "enum", T: o.getEnumType(mo) },
  { no: 2, name: "user", kind: "message", T: qt },
  { no: 3, name: "data_container_id", kind: "message", T: nt },
  { no: 5, name: "phone", kind: "message", T: Kt, oneof: "metadata" },
  { no: 6, name: "enable_beta_flags", kind: "scalar", T: 8 },
  { no: 7, name: "eligible_airdrops", kind: "enum", T: o.getEnumType(Mt), repeated: !0 }
]);
var mo;
(function(t) {
  t[t.OK = 0] = "OK", t[t.NOT_FOUND = 1] = "NOT_FOUND", t[t.NOT_INVITED = 2] = "NOT_INVITED", t[t.UNLOCKED_TIMELOCK_ACCOUNT = 3] = "UNLOCKED_TIMELOCK_ACCOUNT";
})(mo || (mo = {}));
o.util.setEnumType(mo, "code.user.v1.GetUserResponse.Result", [
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
we.Unary, we.Unary, we.Unary;
function Up(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Lp(t) {
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
    for (var S = 0, A = 0, $ = 0, R = b.length; $ !== R && b[$] === 0; )
      $++, S++;
    for (var ue = (R - $) * m + 1 >>> 0, K = new Uint8Array(ue); $ !== R; ) {
      for (var te = b[$], F = 0, z = ue - 1; (te !== 0 || F < A) && z !== -1; z--, F++)
        te += 256 * K[z] >>> 0, K[z] = te % c >>> 0, te = te / c >>> 0;
      if (te !== 0)
        throw new Error("Non-zero carry");
      A = F, $++;
    }
    for (var G = ue - A; G !== ue && K[G] === 0; )
      G++;
    for (var ee = u.repeat(S); G < ue; ++G)
      ee += t.charAt(K[G]);
    return ee;
  }
  function g(b) {
    if (typeof b != "string")
      throw new TypeError("Expected String");
    if (b.length === 0)
      return new Uint8Array();
    for (var S = 0, A = 0, $ = 0; b[S] === u; )
      A++, S++;
    for (var R = (b.length - S) * f + 1 >>> 0, ue = new Uint8Array(R); b[S]; ) {
      var K = e[b.charCodeAt(S)];
      if (K === 255)
        return;
      for (var te = 0, F = R - 1; (K !== 0 || te < $) && F !== -1; F--, te++)
        K += c * ue[F] >>> 0, ue[F] = K % 256 >>> 0, K = K / 256 >>> 0;
      if (K !== 0)
        throw new Error("Non-zero carry");
      $ = te, S++;
    }
    for (var z = R - $; z !== R && ue[z] === 0; )
      z++;
    for (var G = new Uint8Array(A + (R - z)), ee = A; z !== R; )
      G[ee++] = ue[z++];
    return G;
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
var Cp = Lp;
const Dp = Cp, _p = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
var qp = Dp(_p);
const ho = /* @__PURE__ */ Up(qp);
function Kp(t, ...e) {
  if (!(t instanceof Uint8Array))
    throw new Error("Expected Uint8Array");
  if (e.length > 0 && !e.includes(t.length))
    throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`);
}
function vu(t, e = !0) {
  if (t.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (e && t.finished)
    throw new Error("Hash#digest() has already been called");
}
function Pp(t, e) {
  Kp(t);
  const n = e.outputLen;
  if (t.length < n)
    throw new Error(`digestInto() expects output buffer of length at least ${n}`);
}
const Fa = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const cf = (t) => t instanceof Uint8Array, Aa = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength), xt = (t, e) => t << 32 - e | t >>> e, $p = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!$p)
  throw new Error("Non little-endian hardware is not supported");
function uf(t) {
  if (typeof t != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof t}`);
  return new Uint8Array(new TextEncoder().encode(t));
}
function lf(t) {
  if (typeof t == "string" && (t = uf(t)), !cf(t))
    throw new Error(`expected Uint8Array, got ${typeof t}`);
  return t;
}
function Mp(...t) {
  const e = new Uint8Array(t.reduce((r, i) => r + i.length, 0));
  let n = 0;
  return t.forEach((r) => {
    if (!cf(r))
      throw new Error("Uint8Array expected");
    e.set(r, n), n += r.length;
  }), e;
}
class Vp {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
}
function ff(t) {
  const e = (r) => t().update(lf(r)).digest(), n = t();
  return e.outputLen = n.outputLen, e.blockLen = n.blockLen, e.create = () => t(), e;
}
function Hp(t = 32) {
  if (Fa && typeof Fa.getRandomValues == "function")
    return Fa.getRandomValues(new Uint8Array(t));
  throw new Error("crypto.getRandomValues must be defined");
}
function jp(t, e, n, r) {
  if (typeof t.setBigUint64 == "function")
    return t.setBigUint64(e, n, r);
  const i = BigInt(32), s = BigInt(4294967295), c = Number(n >> i & s), u = Number(n & s), f = r ? 4 : 0, m = r ? 0 : 4;
  t.setUint32(e + f, c, r), t.setUint32(e + m, u, r);
}
class df extends Vp {
  constructor(e, n, r, i) {
    super(), this.blockLen = e, this.outputLen = n, this.padOffset = r, this.isLE = i, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(e), this.view = Aa(this.buffer);
  }
  update(e) {
    vu(this);
    const { view: n, buffer: r, blockLen: i } = this;
    e = lf(e);
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
    vu(this), Pp(e, this), this.finished = !0;
    const { buffer: n, view: r, blockLen: i, isLE: s } = this;
    let { pos: c } = this;
    n[c++] = 128, this.buffer.subarray(c).fill(0), this.padOffset > i - c && (this.process(r, 0), c = 0);
    for (let g = c; g < i; g++)
      n[g] = 0;
    jp(r, i - 8, BigInt(this.length * 8), s), this.process(r, 0);
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
const Rp = (t, e, n) => t & e ^ ~t & n, Wp = (t, e, n) => t & e ^ t & n ^ e & n, zp = /* @__PURE__ */ new Uint32Array([
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
class Yp extends df {
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
      const y = li[g - 15], b = li[g - 2], S = xt(y, 7) ^ xt(y, 18) ^ y >>> 3, A = xt(b, 17) ^ xt(b, 19) ^ b >>> 10;
      li[g] = A + li[g - 7] + S + li[g - 16] | 0;
    }
    let { A: r, B: i, C: s, D: c, E: u, F: f, G: m, H: h } = this;
    for (let g = 0; g < 64; g++) {
      const y = xt(u, 6) ^ xt(u, 11) ^ xt(u, 25), b = h + y + Rp(u, f, m) + zp[g] + li[g] | 0, A = (xt(r, 2) ^ xt(r, 13) ^ xt(r, 22)) + Wp(r, i, s) | 0;
      h = m, m = f, f = u, u = c + b | 0, c = s, s = i, i = r, r = b + A | 0;
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
const mf = /* @__PURE__ */ ff(() => new Yp());
var Ta = {}, Ea = {};
Ea.byteLength = Gp;
Ea.toByteArray = e0;
Ea.fromByteArray = r0;
var St = [], ot = [], Xp = typeof Uint8Array < "u" ? Uint8Array : Array, Ua = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var Ri = 0, Zp = Ua.length; Ri < Zp; ++Ri)
  St[Ri] = Ua[Ri], ot[Ua.charCodeAt(Ri)] = Ri;
ot["-".charCodeAt(0)] = 62;
ot["_".charCodeAt(0)] = 63;
function hf(t) {
  var e = t.length;
  if (e % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var n = t.indexOf("=");
  n === -1 && (n = e);
  var r = n === e ? 0 : 4 - n % 4;
  return [n, r];
}
function Gp(t) {
  var e = hf(t), n = e[0], r = e[1];
  return (n + r) * 3 / 4 - r;
}
function Qp(t, e, n) {
  return (e + n) * 3 / 4 - n;
}
function e0(t) {
  var e, n = hf(t), r = n[0], i = n[1], s = new Xp(Qp(t, r, i)), c = 0, u = i > 0 ? r - 4 : r, f;
  for (f = 0; f < u; f += 4)
    e = ot[t.charCodeAt(f)] << 18 | ot[t.charCodeAt(f + 1)] << 12 | ot[t.charCodeAt(f + 2)] << 6 | ot[t.charCodeAt(f + 3)], s[c++] = e >> 16 & 255, s[c++] = e >> 8 & 255, s[c++] = e & 255;
  return i === 2 && (e = ot[t.charCodeAt(f)] << 2 | ot[t.charCodeAt(f + 1)] >> 4, s[c++] = e & 255), i === 1 && (e = ot[t.charCodeAt(f)] << 10 | ot[t.charCodeAt(f + 1)] << 4 | ot[t.charCodeAt(f + 2)] >> 2, s[c++] = e >> 8 & 255, s[c++] = e & 255), s;
}
function t0(t) {
  return St[t >> 18 & 63] + St[t >> 12 & 63] + St[t >> 6 & 63] + St[t & 63];
}
function n0(t, e, n) {
  for (var r, i = [], s = e; s < n; s += 3)
    r = (t[s] << 16 & 16711680) + (t[s + 1] << 8 & 65280) + (t[s + 2] & 255), i.push(t0(r));
  return i.join("");
}
function r0(t) {
  for (var e, n = t.length, r = n % 3, i = [], s = 16383, c = 0, u = n - r; c < u; c += s)
    i.push(n0(t, c, c + s > u ? u : c + s));
  return r === 1 ? (e = t[n - 1], i.push(
    St[e >> 2] + St[e << 4 & 63] + "=="
  )) : r === 2 && (e = (t[n - 2] << 8) + t[n - 1], i.push(
    St[e >> 10] + St[e >> 4 & 63] + St[e << 2 & 63] + "="
  )), i.join("");
}
var Cc = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
Cc.read = function(t, e, n, r, i) {
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
Cc.write = function(t, e, n, r, i, s) {
  var c, u, f, m = s * 8 - i - 1, h = (1 << m) - 1, g = h >> 1, y = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, b = r ? 0 : s - 1, S = r ? 1 : -1, A = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
  for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (u = isNaN(e) ? 1 : 0, c = h) : (c = Math.floor(Math.log(e) / Math.LN2), e * (f = Math.pow(2, -c)) < 1 && (c--, f *= 2), c + g >= 1 ? e += y / f : e += y * Math.pow(2, 1 - g), e * f >= 2 && (c++, f /= 2), c + g >= h ? (u = 0, c = h) : c + g >= 1 ? (u = (e * f - 1) * Math.pow(2, i), c = c + g) : (u = e * Math.pow(2, g - 1) * Math.pow(2, i), c = 0)); i >= 8; t[n + b] = u & 255, b += S, u /= 256, i -= 8)
    ;
  for (c = c << i | u, m += i; m > 0; t[n + b] = c & 255, b += S, c /= 256, m -= 8)
    ;
  t[n + b - S] |= A * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(t) {
  const e = Ea, n = Cc, r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  t.Buffer = u, t.SlowBuffer = ue, t.INSPECT_MAX_BYTES = 50;
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
      return A(d, a, l);
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
    const l = K(d, a) | 0;
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
      return A(a.buffer, a.byteOffset, a.byteLength);
    }
    return b(d);
  }
  function A(d, a, l) {
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
  function ue(d) {
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
  function K(d, a) {
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
          return U(d).length;
        default:
          if (T)
            return p ? -1 : k(d).length;
          a = ("" + a).toLowerCase(), T = !0;
      }
  }
  u.byteLength = K;
  function te(d, a, l) {
    let p = !1;
    if ((a === void 0 || a < 0) && (a = 0), a > this.length || ((l === void 0 || l > this.length) && (l = this.length), l <= 0) || (l >>>= 0, a >>>= 0, l <= a))
      return "";
    for (d || (d = "utf8"); ; )
      switch (d) {
        case "hex":
          return D(this, a, l);
        case "utf8":
        case "utf-8":
          return Vt(this, a, l);
        case "ascii":
          return fe(this, a, l);
        case "latin1":
        case "binary":
          return q(this, a, l);
        case "base64":
          return Xe(this, a, l);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Y(this, a, l);
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
    return a === 0 ? "" : arguments.length === 0 ? Vt(this, 0, a) : te.apply(this, arguments);
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
    let I = N - T, ne = p - l;
    const Ie = Math.min(I, ne), ae = this.slice(T, N), ge = a.slice(l, p);
    for (let Te = 0; Te < Ie; ++Te)
      if (ae[Te] !== ge[Te]) {
        I = ae[Te], ne = ge[Te];
        break;
      }
    return I < ne ? -1 : ne < I ? 1 : 0;
  };
  function z(d, a, l, p, T) {
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
      return a.length === 0 ? -1 : G(d, a, l, p, T);
    if (typeof a == "number")
      return a = a & 255, typeof Uint8Array.prototype.indexOf == "function" ? T ? Uint8Array.prototype.indexOf.call(d, a, l) : Uint8Array.prototype.lastIndexOf.call(d, a, l) : G(d, [a], l, p, T);
    throw new TypeError("val must be string, number or Buffer");
  }
  function G(d, a, l, p, T) {
    let N = 1, I = d.length, ne = a.length;
    if (p !== void 0 && (p = String(p).toLowerCase(), p === "ucs2" || p === "ucs-2" || p === "utf16le" || p === "utf-16le")) {
      if (d.length < 2 || a.length < 2)
        return -1;
      N = 2, I /= 2, ne /= 2, l /= 2;
    }
    function Ie(ge, Te) {
      return N === 1 ? ge[Te] : ge.readUInt16BE(Te * N);
    }
    let ae;
    if (T) {
      let ge = -1;
      for (ae = l; ae < I; ae++)
        if (Ie(d, ae) === Ie(a, ge === -1 ? 0 : ae - ge)) {
          if (ge === -1 && (ge = ae), ae - ge + 1 === ne)
            return ge * N;
        } else
          ge !== -1 && (ae -= ae - ge), ge = -1;
    } else
      for (l + ne > I && (l = I - ne), ae = l; ae >= 0; ae--) {
        let ge = !0;
        for (let Te = 0; Te < ne; Te++)
          if (Ie(d, ae + Te) !== Ie(a, Te)) {
            ge = !1;
            break;
          }
        if (ge)
          return ae;
      }
    return -1;
  }
  u.prototype.includes = function(a, l, p) {
    return this.indexOf(a, l, p) !== -1;
  }, u.prototype.indexOf = function(a, l, p) {
    return z(this, a, l, p, !0);
  }, u.prototype.lastIndexOf = function(a, l, p) {
    return z(this, a, l, p, !1);
  };
  function ee(d, a, l, p) {
    l = Number(l) || 0;
    const T = d.length - l;
    p ? (p = Number(p), p > T && (p = T)) : p = T;
    const N = a.length;
    p > N / 2 && (p = N / 2);
    let I;
    for (I = 0; I < p; ++I) {
      const ne = parseInt(a.substr(I * 2, 2), 16);
      if (H(ne))
        return I;
      d[l + I] = ne;
    }
    return I;
  }
  function ie(d, a, l, p) {
    return C(k(a, d.length - l), d, l, p);
  }
  function Be(d, a, l, p) {
    return C(L(a), d, l, p);
  }
  function ke(d, a, l, p) {
    return C(U(a), d, l, p);
  }
  function Le(d, a, l, p) {
    return C(P(a, d.length - l), d, l, p);
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
          return ee(this, a, l, p);
        case "utf8":
        case "utf-8":
          return ie(this, a, l, p);
        case "ascii":
        case "latin1":
        case "binary":
          return Be(this, a, l, p);
        case "base64":
          return ke(this, a, l, p);
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
      let I = null, ne = N > 239 ? 4 : N > 223 ? 3 : N > 191 ? 2 : 1;
      if (T + ne <= l) {
        let Ie, ae, ge, Te;
        switch (ne) {
          case 1:
            N < 128 && (I = N);
            break;
          case 2:
            Ie = d[T + 1], (Ie & 192) === 128 && (Te = (N & 31) << 6 | Ie & 63, Te > 127 && (I = Te));
            break;
          case 3:
            Ie = d[T + 1], ae = d[T + 2], (Ie & 192) === 128 && (ae & 192) === 128 && (Te = (N & 15) << 12 | (Ie & 63) << 6 | ae & 63, Te > 2047 && (Te < 55296 || Te > 57343) && (I = Te));
            break;
          case 4:
            Ie = d[T + 1], ae = d[T + 2], ge = d[T + 3], (Ie & 192) === 128 && (ae & 192) === 128 && (ge & 192) === 128 && (Te = (N & 15) << 18 | (Ie & 63) << 12 | (ae & 63) << 6 | ge & 63, Te > 65535 && Te < 1114112 && (I = Te));
        }
      }
      I === null ? (I = 65533, ne = 1) : I > 65535 && (I -= 65536, p.push(I >>> 10 & 1023 | 55296), I = 56320 | I & 1023), p.push(I), T += ne;
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
  function fe(d, a, l) {
    let p = "";
    l = Math.min(d.length, l);
    for (let T = a; T < l; ++T)
      p += String.fromCharCode(d[T] & 127);
    return p;
  }
  function q(d, a, l) {
    let p = "";
    l = Math.min(d.length, l);
    for (let T = a; T < l; ++T)
      p += String.fromCharCode(d[T]);
    return p;
  }
  function D(d, a, l) {
    const p = d.length;
    (!a || a < 0) && (a = 0), (!l || l < 0 || l > p) && (l = p);
    let T = "";
    for (let N = a; N < l; ++N)
      T += M[d[N]];
    return T;
  }
  function Y(d, a, l) {
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
  function X(d, a, l, p, T, N) {
    if (!u.isBuffer(d))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (a > T || a < N)
      throw new RangeError('"value" argument is out of bounds');
    if (l + p > d.length)
      throw new RangeError("Index out of range");
  }
  u.prototype.writeUintLE = u.prototype.writeUIntLE = function(a, l, p, T) {
    if (a = +a, l = l >>> 0, p = p >>> 0, !T) {
      const ne = Math.pow(2, 8 * p) - 1;
      X(this, a, l, p, ne, 0);
    }
    let N = 1, I = 0;
    for (this[l] = a & 255; ++I < p && (N *= 256); )
      this[l + I] = a / N & 255;
    return l + p;
  }, u.prototype.writeUintBE = u.prototype.writeUIntBE = function(a, l, p, T) {
    if (a = +a, l = l >>> 0, p = p >>> 0, !T) {
      const ne = Math.pow(2, 8 * p) - 1;
      X(this, a, l, p, ne, 0);
    }
    let N = p - 1, I = 1;
    for (this[l + N] = a & 255; --N >= 0 && (I *= 256); )
      this[l + N] = a / I & 255;
    return l + p;
  }, u.prototype.writeUint8 = u.prototype.writeUInt8 = function(a, l, p) {
    return a = +a, l = l >>> 0, p || X(this, a, l, 1, 255, 0), this[l] = a & 255, l + 1;
  }, u.prototype.writeUint16LE = u.prototype.writeUInt16LE = function(a, l, p) {
    return a = +a, l = l >>> 0, p || X(this, a, l, 2, 65535, 0), this[l] = a & 255, this[l + 1] = a >>> 8, l + 2;
  }, u.prototype.writeUint16BE = u.prototype.writeUInt16BE = function(a, l, p) {
    return a = +a, l = l >>> 0, p || X(this, a, l, 2, 65535, 0), this[l] = a >>> 8, this[l + 1] = a & 255, l + 2;
  }, u.prototype.writeUint32LE = u.prototype.writeUInt32LE = function(a, l, p) {
    return a = +a, l = l >>> 0, p || X(this, a, l, 4, 4294967295, 0), this[l + 3] = a >>> 24, this[l + 2] = a >>> 16, this[l + 1] = a >>> 8, this[l] = a & 255, l + 4;
  }, u.prototype.writeUint32BE = u.prototype.writeUInt32BE = function(a, l, p) {
    return a = +a, l = l >>> 0, p || X(this, a, l, 4, 4294967295, 0), this[l] = a >>> 24, this[l + 1] = a >>> 16, this[l + 2] = a >>> 8, this[l + 3] = a & 255, l + 4;
  };
  function se(d, a, l, p, T) {
    We(a, p, T, d, l, 7);
    let N = Number(a & BigInt(4294967295));
    d[l++] = N, N = N >> 8, d[l++] = N, N = N >> 8, d[l++] = N, N = N >> 8, d[l++] = N;
    let I = Number(a >> BigInt(32) & BigInt(4294967295));
    return d[l++] = I, I = I >> 8, d[l++] = I, I = I >> 8, d[l++] = I, I = I >> 8, d[l++] = I, l;
  }
  function he(d, a, l, p, T) {
    We(a, p, T, d, l, 7);
    let N = Number(a & BigInt(4294967295));
    d[l + 7] = N, N = N >> 8, d[l + 6] = N, N = N >> 8, d[l + 5] = N, N = N >> 8, d[l + 4] = N;
    let I = Number(a >> BigInt(32) & BigInt(4294967295));
    return d[l + 3] = I, I = I >> 8, d[l + 2] = I, I = I >> 8, d[l + 1] = I, I = I >> 8, d[l] = I, l + 8;
  }
  u.prototype.writeBigUInt64LE = V(function(a, l = 0) {
    return se(this, a, l, BigInt(0), BigInt("0xffffffffffffffff"));
  }), u.prototype.writeBigUInt64BE = V(function(a, l = 0) {
    return he(this, a, l, BigInt(0), BigInt("0xffffffffffffffff"));
  }), u.prototype.writeIntLE = function(a, l, p, T) {
    if (a = +a, l = l >>> 0, !T) {
      const Ie = Math.pow(2, 8 * p - 1);
      X(this, a, l, p, Ie - 1, -Ie);
    }
    let N = 0, I = 1, ne = 0;
    for (this[l] = a & 255; ++N < p && (I *= 256); )
      a < 0 && ne === 0 && this[l + N - 1] !== 0 && (ne = 1), this[l + N] = (a / I >> 0) - ne & 255;
    return l + p;
  }, u.prototype.writeIntBE = function(a, l, p, T) {
    if (a = +a, l = l >>> 0, !T) {
      const Ie = Math.pow(2, 8 * p - 1);
      X(this, a, l, p, Ie - 1, -Ie);
    }
    let N = p - 1, I = 1, ne = 0;
    for (this[l + N] = a & 255; --N >= 0 && (I *= 256); )
      a < 0 && ne === 0 && this[l + N + 1] !== 0 && (ne = 1), this[l + N] = (a / I >> 0) - ne & 255;
    return l + p;
  }, u.prototype.writeInt8 = function(a, l, p) {
    return a = +a, l = l >>> 0, p || X(this, a, l, 1, 127, -128), a < 0 && (a = 255 + a + 1), this[l] = a & 255, l + 1;
  }, u.prototype.writeInt16LE = function(a, l, p) {
    return a = +a, l = l >>> 0, p || X(this, a, l, 2, 32767, -32768), this[l] = a & 255, this[l + 1] = a >>> 8, l + 2;
  }, u.prototype.writeInt16BE = function(a, l, p) {
    return a = +a, l = l >>> 0, p || X(this, a, l, 2, 32767, -32768), this[l] = a >>> 8, this[l + 1] = a & 255, l + 2;
  }, u.prototype.writeInt32LE = function(a, l, p) {
    return a = +a, l = l >>> 0, p || X(this, a, l, 4, 2147483647, -2147483648), this[l] = a & 255, this[l + 1] = a >>> 8, this[l + 2] = a >>> 16, this[l + 3] = a >>> 24, l + 4;
  }, u.prototype.writeInt32BE = function(a, l, p) {
    return a = +a, l = l >>> 0, p || X(this, a, l, 4, 2147483647, -2147483648), a < 0 && (a = 4294967295 + a + 1), this[l] = a >>> 24, this[l + 1] = a >>> 16, this[l + 2] = a >>> 8, this[l + 3] = a & 255, l + 4;
  }, u.prototype.writeBigInt64LE = V(function(a, l = 0) {
    return se(this, a, l, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), u.prototype.writeBigInt64BE = V(function(a, l = 0) {
    return he(this, a, l, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function Ne(d, a, l, p, T, N) {
    if (l + p > d.length)
      throw new RangeError("Index out of range");
    if (l < 0)
      throw new RangeError("Index out of range");
  }
  function pe(d, a, l, p, T) {
    return a = +a, l = l >>> 0, T || Ne(d, a, l, 4), n.write(d, a, l, p, 23, 4), l + 4;
  }
  u.prototype.writeFloatLE = function(a, l, p) {
    return pe(this, a, l, !0, p);
  }, u.prototype.writeFloatBE = function(a, l, p) {
    return pe(this, a, l, !1, p);
  };
  function de(d, a, l, p, T) {
    return a = +a, l = l >>> 0, T || Ne(d, a, l, 8), n.write(d, a, l, p, 52, 8), l + 8;
  }
  u.prototype.writeDoubleLE = function(a, l, p) {
    return de(this, a, l, !0, p);
  }, u.prototype.writeDoubleBE = function(a, l, p) {
    return de(this, a, l, !1, p);
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
      const I = u.isBuffer(a) ? a : u.from(a, T), ne = I.length;
      if (ne === 0)
        throw new TypeError('The value "' + a + '" is invalid for argument "value"');
      for (N = 0; N < p - l; ++N)
        this[N + l] = I[N % ne];
    }
    return this;
  };
  const be = {};
  function Je(d, a, l) {
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
  function We(d, a, l, p, T, N) {
    if (d > l || d < a) {
      const I = typeof a == "bigint" ? "n" : "";
      let ne;
      throw N > 3 ? a === 0 || a === BigInt(0) ? ne = `>= 0${I} and < 2${I} ** ${(N + 1) * 8}${I}` : ne = `>= -(2${I} ** ${(N + 1) * 8 - 1}${I}) and < 2 ** ${(N + 1) * 8 - 1}${I}` : ne = `>= ${a}${I} and <= ${l}${I}`, new be.ERR_OUT_OF_RANGE("value", ne, d);
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
  function L(d) {
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
  function U(d) {
    return e.toByteArray(J(d));
  }
  function C(d, a, l, p) {
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
    return typeof BigInt > "u" ? Z : d;
  }
  function Z() {
    throw new Error("BigInt not supported");
  }
})(Ta);
const pf = () => new Error("invalid size"), gf = () => new Error("destination is required"), wf = () => new Error("amount is required"), yf = () => new Error("currency is required"), po = () => new Error("invalid currency"), i0 = () => new Error("unexpected error"), s0 = () => new Error("cannot derive nonce from both clientSecret and idempotencyKey"), Tf = () => new Error("invalid mode"), La = () => new Error("invalid address"), Ju = 32, o0 = /^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]+$/;
class ss {
  /**
   * Constructs a new PublicKey instance.
   *
   * @param publicKey - The raw public key as a Uint8Array.
   */
  constructor(e) {
    if (e.length !== Ju)
      throw La();
    this.publicKey = e;
  }
  /**
   * Constructs a PublicKey instance from its Base58 representation.
   *
   * @param base58 - The Base58 encoded public key string.
   * @returns A new PublicKey instance.
   */
  static fromBase58(e) {
    if (!e.match(o0))
      throw La();
    const n = ho.decode(e);
    if (n.length !== Ju)
      throw La();
    return new ss(n);
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
    return ho.encode(this.publicKey);
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
const Ao = /* @__PURE__ */ BigInt(2 ** 32 - 1), ac = /* @__PURE__ */ BigInt(32);
function Ef(t, e = !1) {
  return e ? { h: Number(t & Ao), l: Number(t >> ac & Ao) } : { h: Number(t >> ac & Ao) | 0, l: Number(t & Ao) | 0 };
}
function a0(t, e = !1) {
  let n = new Uint32Array(t.length), r = new Uint32Array(t.length);
  for (let i = 0; i < t.length; i++) {
    const { h: s, l: c } = Ef(t[i], e);
    [n[i], r[i]] = [s, c];
  }
  return [n, r];
}
const c0 = (t, e) => BigInt(t >>> 0) << ac | BigInt(e >>> 0), u0 = (t, e, n) => t >>> n, l0 = (t, e, n) => t << 32 - n | e >>> n, f0 = (t, e, n) => t >>> n | e << 32 - n, d0 = (t, e, n) => t << 32 - n | e >>> n, m0 = (t, e, n) => t << 64 - n | e >>> n - 32, h0 = (t, e, n) => t >>> n - 32 | e << 64 - n, p0 = (t, e) => e, g0 = (t, e) => t, w0 = (t, e, n) => t << n | e >>> 32 - n, y0 = (t, e, n) => e << n | t >>> 32 - n, T0 = (t, e, n) => e << n - 32 | t >>> 64 - n, E0 = (t, e, n) => t << n - 32 | e >>> 64 - n;
function b0(t, e, n, r) {
  const i = (e >>> 0) + (r >>> 0);
  return { h: t + n + (i / 2 ** 32 | 0) | 0, l: i | 0 };
}
const N0 = (t, e, n) => (t >>> 0) + (e >>> 0) + (n >>> 0), x0 = (t, e, n, r) => e + n + r + (t / 2 ** 32 | 0) | 0, B0 = (t, e, n, r) => (t >>> 0) + (e >>> 0) + (n >>> 0) + (r >>> 0), I0 = (t, e, n, r, i) => e + n + r + i + (t / 2 ** 32 | 0) | 0, O0 = (t, e, n, r, i) => (t >>> 0) + (e >>> 0) + (n >>> 0) + (r >>> 0) + (i >>> 0), k0 = (t, e, n, r, i, s) => e + n + r + i + s + (t / 2 ** 32 | 0) | 0, S0 = {
  fromBig: Ef,
  split: a0,
  toBig: c0,
  shrSH: u0,
  shrSL: l0,
  rotrSH: f0,
  rotrSL: d0,
  rotrBH: m0,
  rotrBL: h0,
  rotr32H: p0,
  rotr32L: g0,
  rotlSH: w0,
  rotlSL: y0,
  rotlBH: T0,
  rotlBL: E0,
  add: b0,
  add3L: N0,
  add3H: x0,
  add4L: B0,
  add4H: I0,
  add5H: k0,
  add5L: O0
}, ce = S0, [v0, J0] = /* @__PURE__ */ (() => ce.split([
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
class F0 extends df {
  constructor() {
    super(128, 64, 16, !1), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209;
  }
  // prettier-ignore
  get() {
    const { Ah: e, Al: n, Bh: r, Bl: i, Ch: s, Cl: c, Dh: u, Dl: f, Eh: m, El: h, Fh: g, Fl: y, Gh: b, Gl: S, Hh: A, Hl: $ } = this;
    return [e, n, r, i, s, c, u, f, m, h, g, y, b, S, A, $];
  }
  // prettier-ignore
  set(e, n, r, i, s, c, u, f, m, h, g, y, b, S, A, $) {
    this.Ah = e | 0, this.Al = n | 0, this.Bh = r | 0, this.Bl = i | 0, this.Ch = s | 0, this.Cl = c | 0, this.Dh = u | 0, this.Dl = f | 0, this.Eh = m | 0, this.El = h | 0, this.Fh = g | 0, this.Fl = y | 0, this.Gh = b | 0, this.Gl = S | 0, this.Hh = A | 0, this.Hl = $ | 0;
  }
  process(e, n) {
    for (let K = 0; K < 16; K++, n += 4)
      fi[K] = e.getUint32(n), di[K] = e.getUint32(n += 4);
    for (let K = 16; K < 80; K++) {
      const te = fi[K - 15] | 0, F = di[K - 15] | 0, z = ce.rotrSH(te, F, 1) ^ ce.rotrSH(te, F, 8) ^ ce.shrSH(te, F, 7), G = ce.rotrSL(te, F, 1) ^ ce.rotrSL(te, F, 8) ^ ce.shrSL(te, F, 7), ee = fi[K - 2] | 0, ie = di[K - 2] | 0, Be = ce.rotrSH(ee, ie, 19) ^ ce.rotrBH(ee, ie, 61) ^ ce.shrSH(ee, ie, 6), ke = ce.rotrSL(ee, ie, 19) ^ ce.rotrBL(ee, ie, 61) ^ ce.shrSL(ee, ie, 6), Le = ce.add4L(G, ke, di[K - 7], di[K - 16]), Xe = ce.add4H(Le, z, Be, fi[K - 7], fi[K - 16]);
      fi[K] = Xe | 0, di[K] = Le | 0;
    }
    let { Ah: r, Al: i, Bh: s, Bl: c, Ch: u, Cl: f, Dh: m, Dl: h, Eh: g, El: y, Fh: b, Fl: S, Gh: A, Gl: $, Hh: R, Hl: ue } = this;
    for (let K = 0; K < 80; K++) {
      const te = ce.rotrSH(g, y, 14) ^ ce.rotrSH(g, y, 18) ^ ce.rotrBH(g, y, 41), F = ce.rotrSL(g, y, 14) ^ ce.rotrSL(g, y, 18) ^ ce.rotrBL(g, y, 41), z = g & b ^ ~g & A, G = y & S ^ ~y & $, ee = ce.add5L(ue, F, G, J0[K], di[K]), ie = ce.add5H(ee, R, te, z, v0[K], fi[K]), Be = ee | 0, ke = ce.rotrSH(r, i, 28) ^ ce.rotrBH(r, i, 34) ^ ce.rotrBH(r, i, 39), Le = ce.rotrSL(r, i, 28) ^ ce.rotrBL(r, i, 34) ^ ce.rotrBL(r, i, 39), Xe = r & s ^ r & u ^ s & u, Vt = i & c ^ i & f ^ c & f;
      R = A | 0, ue = $ | 0, A = b | 0, $ = S | 0, b = g | 0, S = y | 0, { h: g, l: y } = ce.add(m | 0, h | 0, ie | 0, Be | 0), m = u | 0, h = f | 0, u = s | 0, f = c | 0, s = r | 0, c = i | 0;
      const He = ce.add3L(Be, Le, Vt);
      r = ce.add3H(He, ie, ke, Xe), i = He | 0;
    }
    ({ h: r, l: i } = ce.add(this.Ah | 0, this.Al | 0, r | 0, i | 0)), { h: s, l: c } = ce.add(this.Bh | 0, this.Bl | 0, s | 0, c | 0), { h: u, l: f } = ce.add(this.Ch | 0, this.Cl | 0, u | 0, f | 0), { h: m, l: h } = ce.add(this.Dh | 0, this.Dl | 0, m | 0, h | 0), { h: g, l: y } = ce.add(this.Eh | 0, this.El | 0, g | 0, y | 0), { h: b, l: S } = ce.add(this.Fh | 0, this.Fl | 0, b | 0, S | 0), { h: A, l: $ } = ce.add(this.Gh | 0, this.Gl | 0, A | 0, $ | 0), { h: R, l: ue } = ce.add(this.Hh | 0, this.Hl | 0, R | 0, ue | 0), this.set(r, i, s, c, u, f, m, h, g, y, b, S, A, $, R, ue);
  }
  roundClean() {
    fi.fill(0), di.fill(0);
  }
  destroy() {
    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
const bf = /* @__PURE__ */ ff(() => new F0());
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
BigInt(0);
const A0 = BigInt(1), U0 = BigInt(2), ba = (t) => t instanceof Uint8Array, L0 = /* @__PURE__ */ Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0"));
function Dc(t) {
  if (!ba(t))
    throw new Error("Uint8Array expected");
  let e = "";
  for (let n = 0; n < t.length; n++)
    e += L0[t[n]];
  return e;
}
function Nf(t) {
  if (typeof t != "string")
    throw new Error("hex string expected, got " + typeof t);
  return BigInt(t === "" ? "0" : `0x${t}`);
}
function xf(t) {
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
function C0(t) {
  return Nf(Dc(t));
}
function Ho(t) {
  if (!ba(t))
    throw new Error("Uint8Array expected");
  return Nf(Dc(Uint8Array.from(t).reverse()));
}
function Bf(t, e) {
  return xf(t.toString(16).padStart(e * 2, "0"));
}
function cc(t, e) {
  return Bf(t, e).reverse();
}
function mi(t, e, n) {
  let r;
  if (typeof e == "string")
    try {
      r = xf(e);
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
function Fu(...t) {
  const e = new Uint8Array(t.reduce((r, i) => r + i.length, 0));
  let n = 0;
  return t.forEach((r) => {
    if (!ba(r))
      throw new Error("Uint8Array expected");
    e.set(r, n), n += r.length;
  }), e;
}
const D0 = (t) => (U0 << BigInt(t - 1)) - A0, _0 = {
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
function _c(t, e, n = {}) {
  const r = (i, s, c) => {
    const u = _0[s];
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
const $e = BigInt(0), Ae = BigInt(1), Li = BigInt(2), q0 = BigInt(3), uc = BigInt(4), Au = BigInt(5), Uu = BigInt(8);
BigInt(9);
BigInt(16);
function _e(t, e) {
  const n = t % e;
  return n >= $e ? n : e + n;
}
function K0(t, e, n) {
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
function Lu(t, e) {
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
function P0(t) {
  const e = (t - Ae) / Li;
  let n, r, i;
  for (n = t - Ae, r = 0; n % Li === $e; n /= Li, r++)
    ;
  for (i = Li; i < t && K0(i, e, t) !== t - Ae; i++)
    ;
  if (r === 1) {
    const c = (t + Ae) / uc;
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
      for (let A = u.sqr(y); b < m && !u.eql(A, u.ONE); b++)
        A = u.sqr(A);
      const S = u.pow(h, Ae << BigInt(m - b - 1));
      h = u.sqr(S), g = u.mul(g, S), y = u.mul(y, h), m = b;
    }
    return g;
  };
}
function $0(t) {
  if (t % uc === q0) {
    const e = (t + Ae) / uc;
    return function(r, i) {
      const s = r.pow(i, e);
      if (!r.eql(r.sqr(s), i))
        throw new Error("Cannot find square root");
      return s;
    };
  }
  if (t % Uu === Au) {
    const e = (t - Au) / Uu;
    return function(r, i) {
      const s = r.mul(i, Li), c = r.pow(s, e), u = r.mul(i, c), f = r.mul(r.mul(u, Li), c), m = r.mul(u, r.sub(f, r.ONE));
      if (!r.eql(r.sqr(m), i))
        throw new Error("Cannot find square root");
      return m;
    };
  }
  return P0(t);
}
const M0 = (t, e) => (_e(t, e) & Ae) === Ae, V0 = [
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
function H0(t) {
  const e = {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "isSafeInteger",
    BITS: "isSafeInteger"
  }, n = V0.reduce((r, i) => (r[i] = "function", r), e);
  return _c(t, n);
}
function j0(t, e, n) {
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
function R0(t, e) {
  const n = new Array(e.length), r = e.reduce((s, c, u) => t.is0(c) ? s : (n[u] = s, t.mul(s, c)), t.ONE), i = t.inv(r);
  return e.reduceRight((s, c, u) => t.is0(c) ? s : (n[u] = t.mul(s, n[u]), t.mul(s, c)), i), n;
}
function If(t, e) {
  const n = e !== void 0 ? e : t.toString(2).length, r = Math.ceil(n / 8);
  return { nBitLength: n, nByteLength: r };
}
function W0(t, e, n = !1, r = {}) {
  if (t <= $e)
    throw new Error(`Expected Field ORDER > 0, got ${t}`);
  const { nBitLength: i, nByteLength: s } = If(t, e);
  if (s > 2048)
    throw new Error("Field lengths over 2048 bytes are not supported");
  const c = $0(t), u = Object.freeze({
    ORDER: t,
    BITS: i,
    BYTES: s,
    MASK: D0(i),
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
    pow: (f, m) => j0(u, f, m),
    div: (f, m) => _e(f * Lu(m, t), t),
    // Same as above, but doesn't normalize
    sqrN: (f) => f * f,
    addN: (f, m) => f + m,
    subN: (f, m) => f - m,
    mulN: (f, m) => f * m,
    inv: (f) => Lu(f, t),
    sqrt: r.sqrt || ((f) => c(u, f)),
    invertBatch: (f) => R0(u, f),
    // TODO: do we really need constant cmov?
    // We don't have const-time bigints anyway, so probably will be not very useful
    cmov: (f, m, h) => h ? m : f,
    toBytes: (f) => n ? cc(f, s) : Bf(f, s),
    fromBytes: (f) => {
      if (f.length !== s)
        throw new Error(`Fp.fromBytes: expected ${s}, got ${f.length}`);
      return n ? Ho(f) : C0(f);
    }
  });
  return Object.freeze(u);
}
function z0(t, e) {
  if (!t.isOdd)
    throw new Error("Field doesn't have isOdd");
  const n = t.sqrt(e);
  return t.isOdd(n) ? t.neg(n) : n;
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Y0 = BigInt(0), Ca = BigInt(1);
function X0(t, e) {
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
      for (; s > Y0; )
        s & Ca && (c = c.add(u)), u = u.double(), s >>= Ca;
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
        const A = S * f;
        let $ = Number(c & g);
        c >>= b, $ > f && ($ -= y, c += Ca);
        const R = A, ue = A + Math.abs($) - 1, K = S % 2 !== 0, te = $ < 0;
        $ === 0 ? h = h.add(n(K, s[R])) : m = m.add(n(te, s[ue]));
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
function Z0(t) {
  return H0(t.Fp), _c(t, {
    n: "bigint",
    h: "bigint",
    Gx: "field",
    Gy: "field"
  }, {
    nBitLength: "isSafeInteger",
    nByteLength: "isSafeInteger"
  }), Object.freeze({
    ...If(t.n, t.nBitLength),
    ...t,
    p: t.Fp.ORDER
  });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const dt = BigInt(0), rt = BigInt(1), Uo = BigInt(2), G0 = BigInt(8), Q0 = { zip215: !0 };
function eg(t) {
  const e = Z0(t);
  return _c(t, {
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
function qc(t) {
  const e = eg(t), { Fp: n, n: r, prehash: i, hash: s, randomBytes: c, nByteLength: u, h: f } = e, m = Uo << BigInt(u * 8) - rt, h = n.create, g = e.uvRatio || ((q, D) => {
    try {
      return { isValid: !0, value: n.sqrt(q * n.inv(D)) };
    } catch {
      return { isValid: !1, value: dt };
    }
  }), y = e.adjustScalarBytes || ((q) => q), b = e.domain || ((q, D, Y) => {
    if (D.length || Y)
      throw new Error("Contexts/pre-hash are not supported");
    return q;
  }), S = (q) => typeof q == "bigint" && dt < q, A = (q, D) => S(q) && S(D) && q < D, $ = (q) => q === dt || A(q, m);
  function R(q, D) {
    if (A(q, D))
      return q;
    throw new Error(`Expected valid scalar < ${D}, got ${typeof q} ${q}`);
  }
  function ue(q) {
    return q === dt ? q : R(q, r);
  }
  const K = /* @__PURE__ */ new Map();
  function te(q) {
    if (!(q instanceof F))
      throw new Error("ExtendedPoint expected");
  }
  class F {
    constructor(D, Y, j, X) {
      if (this.ex = D, this.ey = Y, this.ez = j, this.et = X, !$(D))
        throw new Error("x required");
      if (!$(Y))
        throw new Error("y required");
      if (!$(j))
        throw new Error("z required");
      if (!$(X))
        throw new Error("t required");
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    static fromAffine(D) {
      if (D instanceof F)
        throw new Error("extended point not allowed");
      const { x: Y, y: j } = D || {};
      if (!$(Y) || !$(j))
        throw new Error("invalid affine point");
      return new F(Y, j, rt, h(Y * j));
    }
    static normalizeZ(D) {
      const Y = n.invertBatch(D.map((j) => j.ez));
      return D.map((j, X) => j.toAffine(Y[X])).map(F.fromAffine);
    }
    // "Private method", don't use it directly
    _setWindowSize(D) {
      this._WINDOW_SIZE = D, K.delete(this);
    }
    // Not required for fromHex(), which always creates valid points.
    // Could be useful for fromAffine().
    assertValidity() {
      const { a: D, d: Y } = e;
      if (this.is0())
        throw new Error("bad point: ZERO");
      const { ex: j, ey: X, ez: se, et: he } = this, Ne = h(j * j), pe = h(X * X), de = h(se * se), be = h(de * de), Je = h(Ne * D), Ce = h(de * h(Je + pe)), De = h(be + h(Y * h(Ne * pe)));
      if (Ce !== De)
        throw new Error("bad point: equation left != right (1)");
      const We = h(j * X), w = h(se * he);
      if (We !== w)
        throw new Error("bad point: equation left != right (2)");
    }
    // Compare one point to another.
    equals(D) {
      te(D);
      const { ex: Y, ey: j, ez: X } = this, { ex: se, ey: he, ez: Ne } = D, pe = h(Y * Ne), de = h(se * X), be = h(j * Ne), Je = h(he * X);
      return pe === de && be === Je;
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
      const { a: D } = e, { ex: Y, ey: j, ez: X } = this, se = h(Y * Y), he = h(j * j), Ne = h(Uo * h(X * X)), pe = h(D * se), de = Y + j, be = h(h(de * de) - se - he), Je = pe + he, Ce = Je - Ne, De = pe - he, We = h(be * Ce), w = h(Je * De), E = h(be * De), B = h(Ce * Je);
      return new F(We, w, B, E);
    }
    // Fast algo for adding 2 Extended Points.
    // https://hyperelliptic.org/EFD/g1p/auto-twisted-extended.html#addition-add-2008-hwcd
    // Cost: 9M + 1*a + 1*d + 7add.
    add(D) {
      te(D);
      const { a: Y, d: j } = e, { ex: X, ey: se, ez: he, et: Ne } = this, { ex: pe, ey: de, ez: be, et: Je } = D;
      if (Y === BigInt(-1)) {
        const O = h((se - X) * (de + pe)), H = h((se + X) * (de - pe)), M = h(H - O);
        if (M === dt)
          return this.double();
        const V = h(he * Uo * Je), Z = h(Ne * Uo * be), d = Z + V, a = H + O, l = Z - V, p = h(d * M), T = h(a * l), N = h(d * l), I = h(M * a);
        return new F(p, T, I, N);
      }
      const Ce = h(X * pe), De = h(se * de), We = h(Ne * j * Je), w = h(he * be), E = h((X + se) * (pe + de) - Ce - De), B = w - We, J = w + We, k = h(De - Y * Ce), L = h(E * B), P = h(J * k), U = h(E * k), C = h(B * J);
      return new F(L, P, C, U);
    }
    subtract(D) {
      return this.add(D.negate());
    }
    wNAF(D) {
      return ee.wNAFCached(this, K, D, F.normalizeZ);
    }
    // Constant-time multiplication.
    multiply(D) {
      const { p: Y, f: j } = this.wNAF(R(D, r));
      return F.normalizeZ([Y, j])[0];
    }
    // Non-constant-time multiplication. Uses double-and-add algorithm.
    // It's faster, but should only be used when you don't care about
    // an exposed private key e.g. sig verification.
    // Does NOT allow scalars higher than CURVE.n.
    multiplyUnsafe(D) {
      let Y = ue(D);
      return Y === dt ? G : this.equals(G) || Y === rt ? this : this.equals(z) ? this.wNAF(Y).p : ee.unsafeLadder(this, Y);
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
      return ee.unsafeLadder(this, r).is0();
    }
    // Converts Extended point to default (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    toAffine(D) {
      const { ex: Y, ey: j, ez: X } = this, se = this.is0();
      D == null && (D = se ? G0 : n.inv(X));
      const he = h(Y * D), Ne = h(j * D), pe = h(X * D);
      if (se)
        return { x: dt, y: rt };
      if (pe !== rt)
        throw new Error("invZ was invalid");
      return { x: he, y: Ne };
    }
    clearCofactor() {
      const { h: D } = e;
      return D === rt ? this : this.multiplyUnsafe(D);
    }
    // Converts hash string or Uint8Array to Point.
    // Uses algo from RFC8032 5.1.3.
    static fromHex(D, Y = !1) {
      const { d: j, a: X } = e, se = n.BYTES;
      D = mi("pointHex", D, se);
      const he = D.slice(), Ne = D[se - 1];
      he[se - 1] = Ne & -129;
      const pe = Ho(he);
      pe === dt || (Y ? R(pe, m) : R(pe, n.ORDER));
      const de = h(pe * pe), be = h(de - rt), Je = h(j * de - X);
      let { isValid: Ce, value: De } = g(be, Je);
      if (!Ce)
        throw new Error("Point.fromHex: invalid y coordinate");
      const We = (De & rt) === rt, w = (Ne & 128) !== 0;
      if (!Y && De === dt && w)
        throw new Error("Point.fromHex: x=0 and x_0=1");
      return w !== We && (De = h(-De)), F.fromAffine({ x: De, y: pe });
    }
    static fromPrivateKey(D) {
      return ke(D).point;
    }
    toRawBytes() {
      const { x: D, y: Y } = this.toAffine(), j = cc(Y, n.BYTES);
      return j[j.length - 1] |= D & rt ? 128 : 0, j;
    }
    toHex() {
      return Dc(this.toRawBytes());
    }
  }
  F.BASE = new F(e.Gx, e.Gy, rt, h(e.Gx * e.Gy)), F.ZERO = new F(dt, rt, rt, dt);
  const { BASE: z, ZERO: G } = F, ee = X0(F, u * 8);
  function ie(q) {
    return _e(q, r);
  }
  function Be(q) {
    return ie(Ho(q));
  }
  function ke(q) {
    const D = u;
    q = mi("private key", q, D);
    const Y = mi("hashed private key", s(q), 2 * D), j = y(Y.slice(0, D)), X = Y.slice(D, 2 * D), se = Be(j), he = z.multiply(se), Ne = he.toRawBytes();
    return { head: j, prefix: X, scalar: se, point: he, pointBytes: Ne };
  }
  function Le(q) {
    return ke(q).pointBytes;
  }
  function Xe(q = new Uint8Array(), ...D) {
    const Y = Fu(...D);
    return Be(s(b(Y, mi("context", q), !!i)));
  }
  function Vt(q, D, Y = {}) {
    q = mi("message", q), i && (q = i(q));
    const { prefix: j, scalar: X, pointBytes: se } = ke(D), he = Xe(Y.context, j, q), Ne = z.multiply(he).toRawBytes(), pe = Xe(Y.context, Ne, se, q), de = ie(he + pe * X);
    ue(de);
    const be = Fu(Ne, cc(de, n.BYTES));
    return mi("result", be, u * 2);
  }
  const He = Q0;
  function Pe(q, D, Y, j = He) {
    const { context: X, zip215: se } = j, he = n.BYTES;
    q = mi("signature", q, 2 * he), D = mi("message", D), i && (D = i(D));
    const Ne = Ho(q.slice(he, 2 * he));
    let pe, de, be;
    try {
      pe = F.fromHex(Y, se), de = F.fromHex(q.slice(0, he), se), be = z.multiplyUnsafe(Ne);
    } catch {
      return !1;
    }
    if (!se && pe.isSmallOrder())
      return !1;
    const Je = Xe(X, de.toRawBytes(), pe.toRawBytes(), D);
    return de.add(pe.multiplyUnsafe(Je)).subtract(be).clearCofactor().equals(F.ZERO);
  }
  return z._setWindowSize(8), {
    CURVE: e,
    getPublicKey: Le,
    sign: Vt,
    verify: Pe,
    ExtendedPoint: F,
    utils: {
      getExtendedPublicKey: ke,
      // ed25519 private keys are uniform 32b. No need to check for modulo bias, like in secp256k1.
      randomPrivateKey: () => c(n.BYTES),
      /**
       * We're doing scalar multiplication (used in getPublicKey etc) with precomputed BASE_POINT
       * values. This slows down first getPublicKey() by milliseconds (see Speed section),
       * but allows to speed-up subsequent getPublicKey() calls up to 20x.
       * @param windowSize 2, 4, 8, 16
       */
      precompute(q = 8, D = F.BASE) {
        return D._setWindowSize(q), D.multiply(BigInt(3)), D;
      }
    }
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Kc = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949"), Cu = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
BigInt(0);
const tg = BigInt(1), lc = BigInt(2), ng = BigInt(5), Du = BigInt(10), rg = BigInt(20), ig = BigInt(40), _u = BigInt(80);
function sg(t) {
  const e = Kc, r = t * t % e * t % e, i = Bt(r, lc, e) * r % e, s = Bt(i, tg, e) * t % e, c = Bt(s, ng, e) * s % e, u = Bt(c, Du, e) * c % e, f = Bt(u, rg, e) * u % e, m = Bt(f, ig, e) * f % e, h = Bt(m, _u, e) * m % e, g = Bt(h, _u, e) * m % e, y = Bt(g, Du, e) * c % e;
  return { pow_p_5_8: Bt(y, lc, e) * t % e, b2: r };
}
function og(t) {
  return t[0] &= 248, t[31] &= 127, t[31] |= 64, t;
}
function ag(t, e) {
  const n = Kc, r = _e(e * e * e, n), i = _e(r * r * e, n), s = sg(t * i).pow_p_5_8;
  let c = _e(t * r * s, n);
  const u = _e(e * c * c, n), f = c, m = _e(c * Cu, n), h = u === t, g = u === _e(-t, n), y = u === _e(-t * Cu, n);
  return h && (c = f), (g || y) && (c = m), M0(c, n) && (c = _e(-c, n)), { isValid: h || g, value: c };
}
const si = W0(Kc, void 0, !0), Pc = {
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
  hash: bf,
  randomBytes: Hp,
  adjustScalarBytes: og,
  // dom2
  // Ratio of u to v. Allows us to combine inversion and square root. Uses algo from RFC8032 5.1.3.
  // Constant-time, u/√v
  uvRatio: ag
}, Wi = /* @__PURE__ */ qc(Pc);
function Of(t, e, n) {
  if (e.length > 255)
    throw new Error("Context is too big");
  return Mp(uf("SigEd25519 no Ed25519 collisions"), new Uint8Array([n ? 1 : 0, e.length]), e, t);
}
({
  ...Pc
});
({
  ...Pc
});
const cg = (si.ORDER + BigInt(3)) / BigInt(8);
si.pow(lc, cg);
si.sqrt(si.neg(si.ONE));
(si.ORDER - BigInt(5)) / BigInt(8);
BigInt(486662);
z0(si, si.neg(BigInt(486664)));
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
    const e = Wi.utils.randomPrivateKey(), n = Wi.getPublicKey(e);
    return new Ci(e, n);
  }
  /**
   * Constructs a Keypair from a given secret key.
   *
   * @param secretKey - Secret key to derive the Keypair from.
   * @returns A new Keypair instance.
   */
  static fromSecretKey(e) {
    const n = e.subarray(0, 32), r = Wi.getPublicKey(n);
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
    const n = Wi.getPublicKey(e);
    return new Ci(e, n);
  }
  /**
   * Retrieves the public key as a PublicKey object.
   *
   * @returns The public key.
   */
  getPublicKey() {
    return new ss(this.publicKey);
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
    return Wi.sign(new Uint8Array(e), this.privateKey);
  }
  /**
   * Verifies a message signature against the public key.
   *
   * @param message - The message to verify.
   * @param signature - The signature to verify against.
   * @returns True if the signature is valid, false otherwise.
   */
  verify(e, n) {
    return Wi.verify(n, new Uint8Array(e), this.publicKey);
  }
}
class at {
  /**
   * Constructor for an idempotency key.
   * @param {Uint8Array} data The value to initialize the idempotency key with. If not specified, a random Uint8Array of length IdempotencyKey.MAX_LENGTH is used.
   */
  constructor(e = new Uint8Array(at.MAX_LENGTH)) {
    if (e.length != at.MAX_LENGTH)
      throw pf();
    this.value = e;
  }
  /**
   * Creates a new idempotency key from a client secret string.
   * @param {string} data The client secret to parse into an idempotency key.
   * @returns {IdempotencyKey} An IdempotencyKey object representing the decoded client secret.
   */
  static fromClientSecret(e) {
    return new at(ho.decode(e));
  }
  /**
   * Creates a new idempotency key from a seed string.
   * @param {string} seed The seed to create the idempotency key with.
   * @returns {IdempotencyKey} An IdempotencyKey object representing the created idempotency key.
   */
  static fromSeed(e) {
    return new at(mf(e).subarray(0, at.MAX_LENGTH));
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
    return ho.encode(this.value);
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
function ug(t) {
  const e = ta.indexOf(t);
  if (e === -1)
    throw po();
  return e;
}
function lg(t) {
  if (t < 0 || t >= ta.length)
    throw po();
  return ta[t];
}
function kf(t) {
  return ta.indexOf(t) !== -1;
}
var go;
(function(t) {
  t[t.Cash = 0] = "Cash", t[t.GiftCard = 1] = "GiftCard", t[t.RequestPayment = 2] = "RequestPayment";
})(go || (go = {}));
class wo {
  /**
   * Construct a new CodePayload.
   *
   * @param kind - The type of the code.
   * @param amount - The amount associated with the code.
   * @param nonce - A randomly-generated nonce.
   * @param currency - (Optional) Currency associated with the RequestPayment type.
   */
  constructor(e, n, r, i) {
    if (this.kind = e, this.amount = n, this.nonce = r, i && !kf(i))
      throw po();
    this.currency = i;
  }
  /**
   * Convert the payload to its binary representation.
   *
   * @returns A Uint8Array containing the binary representation of the payload.
   */
  toBinary() {
    const e = new Uint8Array(20);
    if (e[0] = this.kind, this.kind === go.RequestPayment) {
      if (!this.currency)
        throw po();
      const n = ug(this.currency);
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
    if (e.length !== wo.MAX_LENGTH)
      throw pf();
    const n = e[0];
    let r, i, s;
    if (n === go.RequestPayment) {
      const c = e[1];
      s = lg(c), r = e.slice(2, 9).reduce((u, f, m) => u + (BigInt(f) << BigInt(8 * m)), BigInt(0));
    } else
      r = e.slice(1, 9).reduce((c, u, f) => c + (BigInt(u) << BigInt(8 * f)), BigInt(0));
    return i = e.slice(9), new wo(n, r, i, s);
  }
}
wo.MAX_LENGTH = 20;
function fg(t) {
  return Ci.fromSeed(mf(t.toBinary()));
}
function dg(t) {
  if (t.mode === void 0)
    throw Tf();
  if (t.idempotencyKey && t.clientSecret)
    throw s0();
}
function mg(t) {
  if (t.destination === void 0)
    throw gf();
  if (t.amount === void 0)
    throw wf();
  if (t.currency === void 0)
    throw yf();
  if (!kf(t.currency))
    throw po();
  ss.fromBase58(t.destination);
}
function Sf(t) {
  switch (dg(t), t.mode) {
    case "payment":
      mg(t);
      break;
    default:
      throw Tf();
  }
}
class Ee {
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
    const e = this.quarks / Ee.quarksPerKin;
    this.whole += e, this.quarks %= Ee.quarksPerKin;
  }
  /**
   * Converts the Kin amount to its equivalent in quarks.
   * @returns The total value in quarks.
   */
  toQuarks() {
    return this.whole * Ee.quarksPerKin + this.quarks;
  }
  /**
   * Converts the Kin amount to a decimal representation.
   * @returns The Kin value as a decimal number.
   */
  toDecimal() {
    return Number(this.whole) + Number(this.quarks) / Number(Ee.quarksPerKin);
  }
  /**
   * Creates a Kin instance from a given quarks value.
   * @param quarks - The value in quarks.
   * @returns A new Kin instance.
   */
  static fromQuarks(e) {
    const n = Number(e / Ee.quarksPerKin), r = Number(e % Ee.quarksPerKin);
    return new Ee(n, r);
  }
  /**
   * Creates a Kin instance from a decimal value.
   * @param decimal - The decimal value to convert.
   * @returns A new Kin instance.
   */
  static fromDecimal(e) {
    const n = BigInt(Math.round(e * Number(Ee.quarksPerKin)));
    return Ee.fromQuarks(n);
  }
  /**
   * Adds another Kin value to the current one.
   * @param other - The other Kin value to add.
   * @returns A new Kin instance with the summed value.
   */
  add(e) {
    const n = this.toQuarks() + e.toQuarks();
    return Ee.fromQuarks(n);
  }
  /**
   * Subtracts another Kin value from the current one.
   * @param other - The other Kin value to subtract.
   * @returns A new Kin instance with the difference.
   */
  subtract(e) {
    const n = this.toQuarks() - e.toQuarks();
    return Ee.fromQuarks(n);
  }
  /**
   * Multiplies the current Kin value by a factor.
   * @param factor - The multiplication factor.
   * @returns A new Kin instance with the multiplied value.
   */
  multiply(e) {
    const n = this.toQuarks() * BigInt(e);
    return Ee.fromQuarks(n);
  }
  /**
   * Divides the current Kin value by a divisor.
   * @param divisor - The divisor.
   * @returns A new Kin instance with the divided value.
   */
  divide(e) {
    const n = this.toQuarks() / BigInt(e);
    return Ee.fromQuarks(n);
  }
}
Ee.decimals = 5n;
Ee.quarksPerKin = 100000n;
Ee.mintAddress = "kinXdEcpDQeHPEuQnqmUgtYykqKGVFq6CeVX5iAHJq6";
Ee.mint = ss.fromBase58(Ee.mintAddress);
Ee.zero = new Ee(0, 0);
Ee.one = new Ee(1, 0);
Ee.max = new Ee(Number.MAX_SAFE_INTEGER, Number(Ee.quarksPerKin - 1n));
Ee.min = new Ee(Number.MIN_SAFE_INTEGER, 0);
class vf {
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
    const n = go.RequestPayment, r = BigInt(this.convertedAmount), i = this.nonce.value;
    this.rendezvousPayload = new wo(n, r, i, this.options.currency), this.rendezvousKeypair = fg(this.rendezvousPayload);
  }
  /**
   * Validates the payment request options.
   */
  validate() {
    if (Sf(this.options), !this.options.destination)
      throw gf();
    if (!this.options.amount)
      throw wf();
    if (!this.options.currency)
      throw yf();
  }
  /**
   * Converts the payment request intent to its protobuf representation.
   *
   * @returns The protobuf representation of the payment request intent.
   */
  toProto() {
    const e = ss.fromBase58(this.options.destination), { currency: n, amount: r } = this.options;
    let i;
    n === "kin" ? i = {
      case: "exact",
      value: new Ve({
        currency: "kin",
        exchangeRate: 1,
        quarks: Ee.fromDecimal(r).toQuarks(),
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
      requestorAccount: new W({
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
      throw i0();
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
function hg(t) {
  return typeof btoa == "function" ? btoa(t) : Ta.Buffer.from(t, "binary").toString("base64");
}
function xo(t) {
  return encodeURIComponent(hg(JSON.stringify(t ?? {})));
}
const pg = ["width", "height"], gg = /* @__PURE__ */ rs({
  __name: "PaymentRequestButton",
  emits: ["resize", "invoke"],
  setup(t, { emit: e }) {
    const n = bo(), r = bt("options"), i = new is(), s = `${n.codeSdk()}/payment-request-button/#/${i.id}/p=${xo(r)}`, c = Tt(null), u = Tt(0), f = Tt(0);
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
        width: h("222px"),
        height: h("60px"),
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
    }, null, 12, pg));
  }
}), Jf = /* @__PURE__ */ rs({
  __name: "PaymentRequestModalDesktop",
  emits: [
    "codeScanned",
    "clientRejectedPayment",
    "intentSubmitted",
    "channelCreated",
    "error",
    "streamTimeout",
    "streamClosed"
  ],
  setup(t, { emit: e }) {
    const n = bo(), r = bt("options"), i = new is(), s = `${n.codeSdk()}/payment-request-modal-desktop/#/${i.id}/p=${xo(r)}`, c = Tt(null);
    i.on("codeScanned", () => {
      e("codeScanned");
    }), i.on("clientRejectedPayment", () => {
      e("clientRejectedPayment");
    }), i.on("intentSubmitted", () => {
      e("intentSubmitted");
    }), i.on("error", (f) => {
      `${f}`.includes("NGHTTP2_INTERNAL_ERROR") ? (console.warn("CodeSDK: GRPC stream closed."), e("streamClosed")) : (console.error(`CodeSDK: ${f}`), e("error", f));
    }), i.on("streamTimeout", () => {
      console.warn("CodeSDK: Websocket Stream timeout."), e("streamTimeout");
    }), i.on("streamClosed", () => {
      console.warn("CodeSDK: Websocket Stream closed."), e("streamClosed");
    }), pa(() => {
      c.value && (i.setTargetWindow(c.value), e("channelCreated", i));
    }), Bl(() => {
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
}), wg = /* @__PURE__ */ rs({
  __name: "PaymentRequestModalMobile",
  emits: [
    "codeScanned",
    "clientRejectedPayment",
    "intentSubmitted",
    "channelCreated",
    "error",
    "streamTimeout",
    "streamClosed"
  ],
  setup(t, { emit: e }) {
    const n = bo(), r = bt("options"), i = new is(), s = `${n.codeSdk()}/payment-request-modal-mobile/#/${i.id}/p=${xo(r)}`, c = Tt(null);
    i.on("codeScanned", () => {
      e("codeScanned");
    }), i.on("clientRejectedPayment", () => {
      e("clientRejectedPayment");
    }), i.on("intentSubmitted", () => {
      e("intentSubmitted");
    }), i.on("navigate", (f) => {
      f.url && (window.location.href = f.url);
    }), i.on("error", (f) => {
      `${f}`.includes("NGHTTP2_INTERNAL_ERROR") ? (console.warn("CodeSDK: GRPC stream closed."), e("streamClosed")) : (console.error(`CodeSDK: ${f}`), e("error", f));
    }), i.on("streamTimeout", () => {
      console.warn("CodeSDK: Websocket Stream timeout."), e("streamTimeout");
    }), i.on("streamClosed", () => {
      console.warn("CodeSDK: Websocket Stream closed."), e("streamClosed");
    }), pa(() => {
      c.value && (i.setTargetWindow(c.value), e("channelCreated", i));
    }), Bl(() => {
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
}), yg = /* @__PURE__ */ rs({
  __name: "PreloadPaymentRequestModalDesktop",
  setup(t) {
    const e = bo(), n = bt("options"), r = `${e.codeSdk()}/payment-request-modal-desktop/#/preload/p=${xo(n)}`, i = Tt(null);
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
}), Tg = /* @__PURE__ */ rs({
  __name: "PreloadPaymentRequestModalMobile",
  setup(t) {
    const e = bo(), n = bt("options"), r = `${e.codeSdk()}/payment-request-modal-mobile/#/preload/p=${xo(n)}`, i = Tt(null);
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
function Da(t) {
  try {
    return new URL(t), !0;
  } catch {
    return !1;
  }
}
function Eg(t, e) {
  try {
    return new URL(t, e).toString();
  } catch {
    return "";
  }
}
function bg(t, e) {
  let n = decodeURIComponent(t);
  for (const [r, i] of Object.entries(e))
    n = n.replace(`{{${r}}}`, i);
  return encodeURI(n);
}
function qu(t, e, n) {
  let r = (t == null ? void 0 : t.url) ?? e;
  if (r && (!Da(r) && e && Da(e) && (r = Eg(r, new URL(e).origin)), Da(r)))
    return n && (r = bg(r, n)), { url: r };
}
const Ku = () => new Error("unexpected error"), Pu = (t, e) => new Error(`unexpected HTTP status: ${t}, ${e}`), $u = (t) => new Error(`unexpected server error: ${t}`);
class Ng {
  /**
   * Initializes a new connection to the provided endpoint.
   *
   * @param endpoint - The URL of the endpoint to connect to.
   * @param fetch - Optional fetch function. Defaults to {} fetch.
   */
  constructor(e, n = globalThis.fetch) {
    this.endpoint = e, this.fetch = (...r) => n.apply(globalThis, r);
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
      throw Pu(i.status, c);
    }
    const s = await i.json();
    if (s.error)
      throw $u(s.error);
    if (s.success)
      return s;
    throw console.error(s), Ku();
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
      throw Pu(i.status, c);
    }
    const s = await i.json();
    if (s.error)
      throw $u(s.error);
    if (s.success)
      return !0;
    throw console.error(s), Ku();
  }
}
const xg = "https://api.getcode.com/v1", Mu = new Ng(xg);
var na;
(function(t) {
  t.Pending = "pending", t.Confirmed = "confirmed";
})(na || (na = {}));
const Bg = { status: na.Pending }, Ig = { status: na.Confirmed }, Og = {
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
    const e = new vf(t), n = e.sign(), r = {
      intent: n.intent,
      message: Ta.Buffer.from(n.message).toString("base64url"),
      signature: ho.encode(n.signature),
      webhook: (i = e.options.webhook) == null ? void 0 : i.url
    };
    return await Mu.post("createIntent", r), {
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
  getStatus: async (t) => (await Mu.get("getStatus", { intent: t.intent })).status === "SUBMITTED" ? Ig : Bg
}, kg = { key: 0 }, Sg = { key: 1 }, Vu = 500, vg = /* @__PURE__ */ rs({
  __name: "ButtonFlow",
  setup(t) {
    var ue, K, te, F;
    const e = (z) => new Promise((G) => setTimeout(G, z)), n = bt("options"), r = bt("emit", async () => !1), i = Tt(null), s = Tt(null), c = Tt(!1), u = qg(), f = ((K = (ue = n == null ? void 0 : n.confirmParams) == null ? void 0 : ue.success) == null ? void 0 : K.url) !== void 0, m = ((F = (te = n == null ? void 0 : n.confirmParams) == null ? void 0 : te.cancel) == null ? void 0 : F.url) !== void 0;
    function h() {
      return n && n.amount && n.currency && n.destination;
    }
    function g(z) {
      i.value = z;
    }
    async function y() {
      var ie, Be;
      if (c.value = !0, await Ha(), !n)
        throw new Error("Missing options");
      if (!i.value)
        throw new Error("Missing channel");
      if (i.value.emit("beforeInvoke"), await r("invoke")) {
        c.value = !1;
        return;
      }
      s.value = new vf(n).getIntentId();
      const G = {
        INTENT_ID: s.value
        // ...
      }, ee = window.location.href;
      if (n.confirmParams = {
        success: qu((ie = n.confirmParams) == null ? void 0 : ie.success, ee, G),
        cancel: qu((Be = n.confirmParams) == null ? void 0 : Be.cancel, ee, G)
      }, await Ha(), !i.value)
        throw new Error("Missing channel");
      i.value.emit("afterInvoke");
    }
    async function b() {
      var ee, ie;
      c.value = !1, await e(Vu);
      const z = (ie = (ee = n == null ? void 0 : n.confirmParams) == null ? void 0 : ee.success) == null ? void 0 : ie.url;
      await r("success", { url: z, options: n, intent: s.value }) || f && (window.location.href = z);
    }
    async function S() {
      var ee, ie;
      c.value = !1, await e(Vu);
      const z = (ie = (ee = n == null ? void 0 : n.confirmParams) == null ? void 0 : ee.cancel) == null ? void 0 : ie.url;
      await r("cancel", { url: z, options: n, intent: s.value }) || m && (window.location.href = z);
    }
    async function A(z) {
      await r("error", { message: `${z}` });
    }
    async function $() {
      c.value = !1, await A("stream_timed_out");
    }
    async function R() {
      c.value = !1, await A("stream_closed");
    }
    return document.addEventListener("visibilitychange", async () => {
      if (document.visibilityState === "visible") {
        if (!s.value)
          return;
        const { status: z } = await Og.getStatus({ intent: s.value });
        z === "confirmed" && b();
      }
    }), (z, G) => h() ? (Ge(), xi(ht, { key: 0 }, [
      Pt(hi(gg), { onInvoke: y }),
      (Ge(), Yi(Qm, { to: "body" }, [
        c.value ? (Ge(), xi("div", kg, [
          hi(u) ? (Ge(), Yi(hi(wg), {
            key: 0,
            onChannelCreated: g,
            onIntentSubmitted: b,
            onClientRejectedPayment: S,
            onError: A,
            onStreamTimeout: $,
            onStreamClosed: R
          })) : (Ge(), Yi(hi(Jf), {
            key: 1,
            onChannelCreated: g,
            onIntentSubmitted: b,
            onClientRejectedPayment: S,
            onError: A,
            onStreamTimeout: $,
            onStreamClosed: R
          }))
        ])) : (Ge(), xi("div", Sg, [
          hi(u) ? (Ge(), Yi(hi(Tg), { key: 0 })) : (Ge(), Yi(hi(yg), { key: 1 }))
        ]))
      ]))
    ], 64)) : sh("", !0);
  }
}), Jg = (t) => new Error(`Unknown element type: ${t}`), Mg = (t) => new Error(`Required parameter: ${t}`), Vg = (t) => new Error(`Invalid parameter: ${t}`), Hu = "payment", Fg = "en";
class Ff {
  /**
   * Constructor initializes the element with given parameters and Vue application.
   * @param params - Partial element options.
   * @param app - Vue application instance.
   */
  constructor(e, n) {
    const r = { ...e };
    r.mode = r.mode ?? Hu, r.locale = r.locale ?? Fg, this.intent = ua(r), this.listeners = [], this.app = n, this.validate();
  }
  /**
   * Validates the current element options.
   * @returns True if the options are valid.
   */
  validate() {
    return Sf(this.intent);
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
    return this.intent.mode ?? Hu;
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
      const u = Ag(c), f = this.listeners.filter((h) => h.event === s);
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
function Ag(t) {
  return typeof t != "object" ? t : JSON.parse(JSON.stringify(t));
}
class Ug extends Ff {
  /**
   * Constructs a new CodeButton with specific options.
   * @param options - Partial element options.
   */
  constructor(e) {
    super(e, Wl(vg));
  }
}
class Lg extends Ff {
  /**
   * Constructs a new CodeCard with specific options.
   * @param options - Partial element options.
   */
  constructor(e) {
    super(e, Wl(Jf));
  }
}
const Cg = {
  /**
   * Creates a new element based on the specified type.
   * @param type - The type of the element to create.
   * @param options - The options for the element.
   * @returns An object containing the newly created element.
   */
  create: (t, e) => {
    switch (t) {
      case "button":
        return { button: new Ug(e) };
      case "card":
        return { card: new Lg(e) };
      default:
        throw Jg(t);
    }
  }
};
function Af() {
  return [
    "iPhone Simulator",
    "iPhone"
  ].includes(navigator.platform);
}
function Dg() {
  return Af() || [
    "iPad Simulator",
    "iPod Simulator",
    "iPad",
    "iPod"
  ].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
function Hg() {
  return Dg() || /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function _g() {
  return /Android/i.test(navigator.userAgent);
}
function qg() {
  return Af() || _g();
}
const Kg = {
  codeSdk: "https://sdk.getcode.com/v1/elements"
};
zh(Kg);
const jg = { elements: Cg };
export {
  _g as Android,
  Vg as ErrInvalidParameter,
  Mg as ErrRequiredParameter,
  Jg as ErrUnknownElementType,
  Hg as Safari,
  jg as default,
  Cg as elements,
  qu as getURLParam,
  Dg as iOS,
  Af as iPhone,
  qg as isMobileDevice,
  Da as isValidURL,
  Eg as makeFQDN,
  bg as replaceURLVariables
};
