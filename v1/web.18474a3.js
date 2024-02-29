/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Hr(n, e) {
  const t = new Set(n.split(","));
  return e ? (r) => t.has(r.toLowerCase()) : (r) => t.has(r);
}
const Ee = Object.freeze({}), uo = Object.freeze([]), We = () => {
}, wd = () => !1, Va = (n) => n.charCodeAt(0) === 111 && n.charCodeAt(1) === 110 && // uppercase letter
(n.charCodeAt(2) > 122 || n.charCodeAt(2) < 97), Nu = (n) => n.startsWith("onUpdate:"), Be = Object.assign, qc = (n, e) => {
  const t = n.indexOf(e);
  t > -1 && n.splice(t, 1);
}, Td = Object.prototype.hasOwnProperty, me = (n, e) => Td.call(n, e), ne = Array.isArray, co = (n) => Uu(n) === "[object Map]", vd = (n) => Uu(n) === "[object Set]", ie = (n) => typeof n == "function", Re = (n) => typeof n == "string", Cu = (n) => typeof n == "symbol", Se = (n) => n !== null && typeof n == "object", Dc = (n) => (Se(n) || ie(n)) && ie(n.then) && ie(n.catch), Ed = Object.prototype.toString, Uu = (n) => Ed.call(n), Fc = (n) => Uu(n).slice(8, -1), Nd = (n) => Uu(n) === "[object Object]", _c = (n) => Re(n) && n !== "NaN" && n[0] !== "-" && "" + parseInt(n, 10) === n, Bo = /* @__PURE__ */ Hr(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), bd = /* @__PURE__ */ Hr(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), qu = (n) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (t) => e[t] || (e[t] = n(t));
}, Sd = /-(\w)/g, mo = qu((n) => n.replace(Sd, (e, t) => t ? t.toUpperCase() : "")), kd = /\B([A-Z])/g, Ls = qu(
  (n) => n.replace(kd, "-$1").toLowerCase()
), Du = qu((n) => n.charAt(0).toUpperCase() + n.slice(1)), Vs = qu((n) => n ? `on${Du(n)}` : ""), Cs = (n, e) => !Object.is(n, e), wo = (n, e) => {
  for (let t = 0; t < n.length; t++)
    n[t](e);
}, bu = (n, e, t) => {
  Object.defineProperty(n, e, {
    configurable: !0,
    enumerable: !1,
    value: t
  });
}, Id = (n) => {
  const e = parseFloat(n);
  return isNaN(e) ? n : e;
};
let Tl;
const Kc = () => Tl || (Tl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof {} < "u" ? {} : {});
function Fs(n) {
  if (ne(n)) {
    const e = {};
    for (let t = 0; t < n.length; t++) {
      const r = n[t], s = Re(r) ? Jd(r) : Fs(r);
      if (s)
        for (const o in s)
          e[o] = s[o];
    }
    return e;
  } else if (Re(n) || Se(n))
    return n;
}
const Od = /;(?![^(]*\))/g, Bd = /:([^]+)/, Ad = /\/\*[^]*?\*\//g;
function Jd(n) {
  const e = {};
  return n.replace(Ad, "").split(Od).forEach((t) => {
    if (t) {
      const r = t.split(Bd);
      r.length > 1 && (e[r[0].trim()] = r[1].trim());
    }
  }), e;
}
function Mc(n) {
  let e = "";
  if (Re(n))
    e = n;
  else if (ne(n))
    for (let t = 0; t < n.length; t++) {
      const r = Mc(n[t]);
      r && (e += r + " ");
    }
  else if (Se(n))
    for (const t in n)
      n[t] && (e += t + " ");
  return e.trim();
}
const Rd = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", xd = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Pd = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Ld = /* @__PURE__ */ Hr(Rd), Cd = /* @__PURE__ */ Hr(xd), Ud = /* @__PURE__ */ Hr(Pd), qd = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Dd = /* @__PURE__ */ Hr(qd);
function Pf(n) {
  return !!n || n === "";
}
/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Us(n, ...e) {
  console.warn(`[Vue warn] ${n}`, ...e);
}
let wt;
class Fd {
  constructor(e = !1) {
    this.detached = e, this._active = !0, this.effects = [], this.cleanups = [], this.parent = wt, !e && wt && (this.index = (wt.scopes || (wt.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(e) {
    if (this._active) {
      const t = wt;
      try {
        return wt = this, e();
      } finally {
        wt = t;
      }
    } else
      Us("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    wt = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    wt = this.parent;
  }
  stop(e) {
    if (this._active) {
      let t, r;
      for (t = 0, r = this.effects.length; t < r; t++)
        this.effects[t].stop();
      for (t = 0, r = this.cleanups.length; t < r; t++)
        this.cleanups[t]();
      if (this.scopes)
        for (t = 0, r = this.scopes.length; t < r; t++)
          this.scopes[t].stop(!0);
      if (!this.detached && this.parent && !e) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function _d(n, e = wt) {
  e && e.active && e.effects.push(n);
}
function Kd() {
  return wt;
}
let Hs;
class $c {
  constructor(e, t, r, s) {
    this.fn = e, this.trigger = t, this.scheduler = r, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, _d(this, s);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, _s();
      for (let e = 0; e < this._depsLength; e++) {
        const t = this.deps[e];
        if (t.computed && (Md(t.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), Ks();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(e) {
    this._dirtyLevel = e ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let e = Rs, t = Hs;
    try {
      return Rs = !0, Hs = this, this._runnings++, vl(this), this.fn();
    } finally {
      El(this), this._runnings--, Hs = t, Rs = e;
    }
  }
  stop() {
    var e;
    this.active && (vl(this), El(this), (e = this.onStop) == null || e.call(this), this.active = !1);
  }
}
function Md(n) {
  return n.value;
}
function vl(n) {
  n._trackId++, n._depsLength = 0;
}
function El(n) {
  if (n.deps.length > n._depsLength) {
    for (let e = n._depsLength; e < n.deps.length; e++)
      Lf(n.deps[e], n);
    n.deps.length = n._depsLength;
  }
}
function Lf(n, e) {
  const t = n.get(e);
  t !== void 0 && e._trackId !== t && (n.delete(e), n.size === 0 && n.cleanup());
}
let Rs = !0, dc = 0;
const Cf = [];
function _s() {
  Cf.push(Rs), Rs = !1;
}
function Ks() {
  const n = Cf.pop();
  Rs = n === void 0 ? !0 : n;
}
function Vc() {
  dc++;
}
function Gc() {
  for (dc--; !dc && hc.length; )
    hc.shift()();
}
function Uf(n, e, t) {
  var r;
  if (e.get(n) !== n._trackId) {
    e.set(n, n._trackId);
    const s = n.deps[n._depsLength];
    s !== e ? (s && Lf(s, n), n.deps[n._depsLength++] = e) : n._depsLength++, (r = n.onTrack) == null || r.call(n, Be({ effect: n }, t));
  }
}
const hc = [];
function qf(n, e, t) {
  var r;
  Vc();
  for (const s of n.keys()) {
    let o;
    s._dirtyLevel < e && (o ?? (o = n.get(s) === s._trackId)) && (s._shouldSchedule || (s._shouldSchedule = s._dirtyLevel === 0), s._dirtyLevel = e), s._shouldSchedule && (o ?? (o = n.get(s) === s._trackId)) && ((r = s.onTrigger) == null || r.call(s, Be({ effect: s }, t)), s.trigger(), (!s._runnings || s.allowRecurse) && s._dirtyLevel !== 2 && (s._shouldSchedule = !1, s.scheduler && hc.push(s.scheduler)));
  }
  Gc();
}
const Df = (n, e) => {
  const t = /* @__PURE__ */ new Map();
  return t.cleanup = n, t.computed = e, t;
}, pc = /* @__PURE__ */ new WeakMap(), Ws = Symbol("iterate"), gc = Symbol("Map key iterate");
function ze(n, e, t) {
  if (Rs && Hs) {
    let r = pc.get(n);
    r || pc.set(n, r = /* @__PURE__ */ new Map());
    let s = r.get(t);
    s || r.set(t, s = Df(() => r.delete(t))), Uf(
      Hs,
      s,
      {
        target: n,
        type: e,
        key: t
      }
    );
  }
}
function rn(n, e, t, r, s, o) {
  const u = pc.get(n);
  if (!u)
    return;
  let c = [];
  if (e === "clear")
    c = [...u.values()];
  else if (t === "length" && ne(n)) {
    const f = Number(r);
    u.forEach((h, d) => {
      (d === "length" || !Cu(d) && d >= f) && c.push(h);
    });
  } else
    switch (t !== void 0 && c.push(u.get(t)), e) {
      case "add":
        ne(n) ? _c(t) && c.push(u.get("length")) : (c.push(u.get(Ws)), co(n) && c.push(u.get(gc)));
        break;
      case "delete":
        ne(n) || (c.push(u.get(Ws)), co(n) && c.push(u.get(gc)));
        break;
      case "set":
        co(n) && c.push(u.get(Ws));
        break;
    }
  Vc();
  for (const f of c)
    f && qf(
      f,
      4,
      {
        target: n,
        type: e,
        key: t,
        newValue: r,
        oldValue: s,
        oldTarget: o
      }
    );
  Gc();
}
const $d = /* @__PURE__ */ Hr("__proto__,__v_isRef,__isVue"), Ff = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((n) => n !== "arguments" && n !== "caller").map((n) => Symbol[n]).filter(Cu)
), Nl = /* @__PURE__ */ Vd();
function Vd() {
  const n = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
    n[e] = function(...t) {
      const r = ae(this);
      for (let o = 0, u = this.length; o < u; o++)
        ze(r, "get", o + "");
      const s = r[e](...t);
      return s === -1 || s === !1 ? r[e](...t.map(ae)) : s;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
    n[e] = function(...t) {
      _s(), Vc();
      const r = ae(this)[e].apply(this, t);
      return Gc(), Ks(), r;
    };
  }), n;
}
function Gd(n) {
  const e = ae(this);
  return ze(e, "has", n), e.hasOwnProperty(n);
}
class _f {
  constructor(e = !1, t = !1) {
    this._isReadonly = e, this._isShallow = t;
  }
  get(e, t, r) {
    const s = this._isReadonly, o = this._isShallow;
    if (t === "__v_isReactive")
      return !s;
    if (t === "__v_isReadonly")
      return s;
    if (t === "__v_isShallow")
      return o;
    if (t === "__v_raw")
      return r === (s ? o ? Hf : jf : o ? Gf : Vf).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(r) ? e : void 0;
    const u = ne(e);
    if (!s) {
      if (u && me(Nl, t))
        return Reflect.get(Nl, t, r);
      if (t === "hasOwnProperty")
        return Gd;
    }
    const c = Reflect.get(e, t, r);
    return (Cu(t) ? Ff.has(t) : $d(t)) || (s || ze(e, "get", t), o) ? c : Ve(c) ? u && _c(t) ? c : c.value : Se(c) ? s ? Wf(c) : Ku(c) : c;
  }
}
class Kf extends _f {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, t, r, s) {
    let o = e[t];
    if (!this._isShallow) {
      const f = qs(o);
      if (!Xs(r) && !qs(r) && (o = ae(o), r = ae(r)), !ne(e) && Ve(o) && !Ve(r))
        return f ? !1 : (o.value = r, !0);
    }
    const u = ne(e) && _c(t) ? Number(t) < e.length : me(e, t), c = Reflect.set(e, t, r, s);
    return e === ae(s) && (u ? Cs(r, o) && rn(e, "set", t, r, o) : rn(e, "add", t, r)), c;
  }
  deleteProperty(e, t) {
    const r = me(e, t), s = e[t], o = Reflect.deleteProperty(e, t);
    return o && r && rn(e, "delete", t, void 0, s), o;
  }
  has(e, t) {
    const r = Reflect.has(e, t);
    return (!Cu(t) || !Ff.has(t)) && ze(e, "has", t), r;
  }
  ownKeys(e) {
    return ze(
      e,
      "iterate",
      ne(e) ? "length" : Ws
    ), Reflect.ownKeys(e);
  }
}
class Mf extends _f {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, t) {
    return Us(
      `Set operation on key "${String(t)}" failed: target is readonly.`,
      e
    ), !0;
  }
  deleteProperty(e, t) {
    return Us(
      `Delete operation on key "${String(t)}" failed: target is readonly.`,
      e
    ), !0;
  }
}
const jd = /* @__PURE__ */ new Kf(), Hd = /* @__PURE__ */ new Mf(), Wd = /* @__PURE__ */ new Kf(
  !0
), zd = /* @__PURE__ */ new Mf(!0), jc = (n) => n, Fu = (n) => Reflect.getPrototypeOf(n);
function eu(n, e, t = !1, r = !1) {
  n = n.__v_raw;
  const s = ae(n), o = ae(e);
  t || (Cs(e, o) && ze(s, "get", e), ze(s, "get", o));
  const { has: u } = Fu(s), c = r ? jc : t ? Hc : Lo;
  if (u.call(s, e))
    return c(n.get(e));
  if (u.call(s, o))
    return c(n.get(o));
  n !== s && n.get(e);
}
function tu(n, e = !1) {
  const t = this.__v_raw, r = ae(t), s = ae(n);
  return e || (Cs(n, s) && ze(r, "has", n), ze(r, "has", s)), n === s ? t.has(n) : t.has(n) || t.has(s);
}
function nu(n, e = !1) {
  return n = n.__v_raw, !e && ze(ae(n), "iterate", Ws), Reflect.get(n, "size", n);
}
function bl(n) {
  n = ae(n);
  const e = ae(this);
  return Fu(e).has.call(e, n) || (e.add(n), rn(e, "add", n, n)), this;
}
function Sl(n, e) {
  e = ae(e);
  const t = ae(this), { has: r, get: s } = Fu(t);
  let o = r.call(t, n);
  o ? $f(t, r, n) : (n = ae(n), o = r.call(t, n));
  const u = s.call(t, n);
  return t.set(n, e), o ? Cs(e, u) && rn(t, "set", n, e, u) : rn(t, "add", n, e), this;
}
function kl(n) {
  const e = ae(this), { has: t, get: r } = Fu(e);
  let s = t.call(e, n);
  s ? $f(e, t, n) : (n = ae(n), s = t.call(e, n));
  const o = r ? r.call(e, n) : void 0, u = e.delete(n);
  return s && rn(e, "delete", n, void 0, o), u;
}
function Il() {
  const n = ae(this), e = n.size !== 0, t = co(n) ? new Map(n) : new Set(n), r = n.clear();
  return e && rn(n, "clear", void 0, void 0, t), r;
}
function ru(n, e) {
  return function(r, s) {
    const o = this, u = o.__v_raw, c = ae(u), f = e ? jc : n ? Hc : Lo;
    return !n && ze(c, "iterate", Ws), u.forEach((h, d) => r.call(s, f(h), f(d), o));
  };
}
function iu(n, e, t) {
  return function(...r) {
    const s = this.__v_raw, o = ae(s), u = co(o), c = n === "entries" || n === Symbol.iterator && u, f = n === "keys" && u, h = s[n](...r), d = t ? jc : e ? Hc : Lo;
    return !e && ze(
      o,
      "iterate",
      f ? gc : Ws
    ), {
      // iterator protocol
      next() {
        const { value: p, done: T } = h.next();
        return T ? { value: p, done: T } : {
          value: c ? [d(p[0]), d(p[1])] : d(p),
          done: T
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function zr(n) {
  return function(...e) {
    {
      const t = e[0] ? `on key "${e[0]}" ` : "";
      Us(
        `${Du(n)} operation ${t}failed: target is readonly.`,
        ae(this)
      );
    }
    return n === "delete" ? !1 : n === "clear" ? void 0 : this;
  };
}
function Xd() {
  const n = {
    get(o) {
      return eu(this, o);
    },
    get size() {
      return nu(this);
    },
    has: tu,
    add: bl,
    set: Sl,
    delete: kl,
    clear: Il,
    forEach: ru(!1, !1)
  }, e = {
    get(o) {
      return eu(this, o, !1, !0);
    },
    get size() {
      return nu(this);
    },
    has: tu,
    add: bl,
    set: Sl,
    delete: kl,
    clear: Il,
    forEach: ru(!1, !0)
  }, t = {
    get(o) {
      return eu(this, o, !0);
    },
    get size() {
      return nu(this, !0);
    },
    has(o) {
      return tu.call(this, o, !0);
    },
    add: zr("add"),
    set: zr("set"),
    delete: zr("delete"),
    clear: zr("clear"),
    forEach: ru(!0, !1)
  }, r = {
    get(o) {
      return eu(this, o, !0, !0);
    },
    get size() {
      return nu(this, !0);
    },
    has(o) {
      return tu.call(this, o, !0);
    },
    add: zr("add"),
    set: zr("set"),
    delete: zr("delete"),
    clear: zr("clear"),
    forEach: ru(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
    n[o] = iu(
      o,
      !1,
      !1
    ), t[o] = iu(
      o,
      !0,
      !1
    ), e[o] = iu(
      o,
      !1,
      !0
    ), r[o] = iu(
      o,
      !0,
      !0
    );
  }), [
    n,
    t,
    e,
    r
  ];
}
const [
  Yd,
  Qd,
  Zd,
  eh
] = /* @__PURE__ */ Xd();
function _u(n, e) {
  const t = e ? n ? eh : Zd : n ? Qd : Yd;
  return (r, s, o) => s === "__v_isReactive" ? !n : s === "__v_isReadonly" ? n : s === "__v_raw" ? r : Reflect.get(
    me(t, s) && s in r ? t : r,
    s,
    o
  );
}
const th = {
  get: /* @__PURE__ */ _u(!1, !1)
}, nh = {
  get: /* @__PURE__ */ _u(!1, !0)
}, rh = {
  get: /* @__PURE__ */ _u(!0, !1)
}, ih = {
  get: /* @__PURE__ */ _u(!0, !0)
};
function $f(n, e, t) {
  const r = ae(t);
  if (r !== t && e.call(n, r)) {
    const s = Fc(n);
    Us(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Vf = /* @__PURE__ */ new WeakMap(), Gf = /* @__PURE__ */ new WeakMap(), jf = /* @__PURE__ */ new WeakMap(), Hf = /* @__PURE__ */ new WeakMap();
function sh(n) {
  switch (n) {
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
function oh(n) {
  return n.__v_skip || !Object.isExtensible(n) ? 0 : sh(Fc(n));
}
function Ku(n) {
  return qs(n) ? n : Mu(
    n,
    !1,
    jd,
    th,
    Vf
  );
}
function ah(n) {
  return Mu(
    n,
    !1,
    Wd,
    nh,
    Gf
  );
}
function Wf(n) {
  return Mu(
    n,
    !0,
    Hd,
    rh,
    jf
  );
}
function oo(n) {
  return Mu(
    n,
    !0,
    zd,
    ih,
    Hf
  );
}
function Mu(n, e, t, r, s) {
  if (!Se(n))
    return Us(`value cannot be made reactive: ${String(n)}`), n;
  if (n.__v_raw && !(e && n.__v_isReactive))
    return n;
  const o = s.get(n);
  if (o)
    return o;
  const u = oh(n);
  if (u === 0)
    return n;
  const c = new Proxy(
    n,
    u === 2 ? r : t
  );
  return s.set(n, c), c;
}
function zs(n) {
  return qs(n) ? zs(n.__v_raw) : !!(n && n.__v_isReactive);
}
function qs(n) {
  return !!(n && n.__v_isReadonly);
}
function Xs(n) {
  return !!(n && n.__v_isShallow);
}
function yc(n) {
  return zs(n) || qs(n);
}
function ae(n) {
  const e = n && n.__v_raw;
  return e ? ae(e) : n;
}
function zf(n) {
  return Object.isExtensible(n) && bu(n, "__v_skip", !0), n;
}
const Lo = (n) => Se(n) ? Ku(n) : n, Hc = (n) => Se(n) ? Wf(n) : n, uh = "Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.  Check the docs for more details: https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free";
class Xf {
  constructor(e, t, r, s) {
    this.getter = e, this._setter = t, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new $c(
      () => e(this._value),
      () => lu(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = r;
  }
  get value() {
    const e = ae(this);
    return (!e._cacheable || e.effect.dirty) && Cs(e._value, e._value = e.effect.run()) && lu(e, 4), Yf(e), e.effect._dirtyLevel >= 2 && (this._warnRecursive && Us(uh, `

getter: `, this.getter), lu(e, 2)), e._value;
  }
  set value(e) {
    this._setter(e);
  }
  // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(e) {
    this.effect.dirty = e;
  }
  // #endregion
}
function ch(n, e, t = !1) {
  let r, s;
  const o = ie(n);
  o ? (r = n, s = () => {
    Us("Write operation failed: computed value is readonly");
  }) : (r = n.get, s = n.set);
  const u = new Xf(r, s, o || !s, t);
  return e && !t && (u.effect.onTrack = e.onTrack, u.effect.onTrigger = e.onTrigger), u;
}
function Yf(n) {
  var e;
  Rs && Hs && (n = ae(n), Uf(
    Hs,
    (e = n.dep) != null ? e : n.dep = Df(
      () => n.dep = void 0,
      n instanceof Xf ? n : void 0
    ),
    {
      target: n,
      type: "get",
      key: "value"
    }
  ));
}
function lu(n, e = 4, t) {
  n = ae(n);
  const r = n.dep;
  r && qf(
    r,
    e,
    {
      target: n,
      type: "set",
      key: "value",
      newValue: t
    }
  );
}
function Ve(n) {
  return !!(n && n.__v_isRef === !0);
}
function It(n) {
  return lh(n, !1);
}
function lh(n, e) {
  return Ve(n) ? n : new fh(n, e);
}
class fh {
  constructor(e, t) {
    this.__v_isShallow = t, this.dep = void 0, this.__v_isRef = !0, this._rawValue = t ? e : ae(e), this._value = t ? e : Lo(e);
  }
  get value() {
    return Yf(this), this._value;
  }
  set value(e) {
    const t = this.__v_isShallow || Xs(e) || qs(e);
    e = t ? e : ae(e), Cs(e, this._rawValue) && (this._rawValue = e, this._value = t ? e : Lo(e), lu(this, 4, e));
  }
}
function ni(n) {
  return Ve(n) ? n.value : n;
}
const mh = {
  get: (n, e, t) => ni(Reflect.get(n, e, t)),
  set: (n, e, t, r) => {
    const s = n[e];
    return Ve(s) && !Ve(t) ? (s.value = t, !0) : Reflect.set(n, e, t, r);
  }
};
function Qf(n) {
  return zs(n) ? n : new Proxy(n, mh);
}
/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Ys = [];
function fu(n) {
  Ys.push(n);
}
function mu() {
  Ys.pop();
}
function q(n, ...e) {
  _s();
  const t = Ys.length ? Ys[Ys.length - 1].component : null, r = t && t.appContext.config.warnHandler, s = dh();
  if (r)
    Vr(
      r,
      t,
      11,
      [
        n + e.map((o) => {
          var u, c;
          return (c = (u = o.toString) == null ? void 0 : u.call(o)) != null ? c : JSON.stringify(o);
        }).join(""),
        t && t.proxy,
        s.map(
          ({ vnode: o }) => `at <${zu(t, o.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const o = [`[Vue warn]: ${n}`, ...e];
    s.length && o.push(`
`, ...hh(s)), console.warn(...o);
  }
  Ks();
}
function dh() {
  let n = Ys[Ys.length - 1];
  if (!n)
    return [];
  const e = [];
  for (; n; ) {
    const t = e[0];
    t && t.vnode === n ? t.recurseCount++ : e.push({
      vnode: n,
      recurseCount: 0
    });
    const r = n.component && n.component.parent;
    n = r && r.vnode;
  }
  return e;
}
function hh(n) {
  const e = [];
  return n.forEach((t, r) => {
    e.push(...r === 0 ? [] : [`
`], ...ph(t));
  }), e;
}
function ph({ vnode: n, recurseCount: e }) {
  const t = e > 0 ? `... (${e} recursive calls)` : "", r = n.component ? n.component.parent == null : !1, s = ` at <${zu(
    n.component,
    n.type,
    r
  )}`, o = ">" + t;
  return n.props ? [s, ...gh(n.props), o] : [s + o];
}
function gh(n) {
  const e = [], t = Object.keys(n);
  return t.slice(0, 3).forEach((r) => {
    e.push(...Zf(r, n[r]));
  }), t.length > 3 && e.push(" ..."), e;
}
function Zf(n, e, t) {
  return Re(e) ? (e = JSON.stringify(e), t ? e : [`${n}=${e}`]) : typeof e == "number" || typeof e == "boolean" || e == null ? t ? e : [`${n}=${e}`] : Ve(e) ? (e = Zf(n, ae(e.value), !0), t ? e : [`${n}=Ref<`, e, ">"]) : ie(e) ? [`${n}=fn${e.name ? `<${e.name}>` : ""}`] : (e = ae(e), t ? e : [`${n}=`, e]);
}
const Wc = {
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
  14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."
};
function Vr(n, e, t, r) {
  try {
    return r ? n(...r) : n();
  } catch (s) {
    Ga(s, e, t);
  }
}
function Ot(n, e, t, r) {
  if (ie(n)) {
    const o = Vr(n, e, t, r);
    return o && Dc(o) && o.catch((u) => {
      Ga(u, e, t);
    }), o;
  }
  const s = [];
  for (let o = 0; o < n.length; o++)
    s.push(Ot(n[o], e, t, r));
  return s;
}
function Ga(n, e, t, r = !0) {
  const s = e ? e.vnode : null;
  if (e) {
    let o = e.parent;
    const u = e.proxy, c = Wc[t];
    for (; o; ) {
      const h = o.ec;
      if (h) {
        for (let d = 0; d < h.length; d++)
          if (h[d](n, u, c) === !1)
            return;
      }
      o = o.parent;
    }
    const f = e.appContext.config.errorHandler;
    if (f) {
      Vr(
        f,
        null,
        10,
        [n, u, c]
      );
      return;
    }
  }
  yh(n, t, s, r);
}
function yh(n, e, t, r = !0) {
  {
    const s = Wc[e];
    if (t && fu(t), q(`Unhandled error${s ? ` during execution of ${s}` : ""}`), t && mu(), r)
      throw n;
    console.error(n);
  }
}
let Co = !1, wc = !1;
const He = [];
let Pt = 0;
const lo = [];
let fn = null, ri = 0;
const em = /* @__PURE__ */ Promise.resolve();
let zc = null;
const wh = 100;
function Tc(n) {
  const e = zc || em;
  return n ? e.then(this ? n.bind(this) : n) : e;
}
function Th(n) {
  let e = Pt + 1, t = He.length;
  for (; e < t; ) {
    const r = e + t >>> 1, s = He[r], o = Uo(s);
    o < n || o === n && s.pre ? e = r + 1 : t = r;
  }
  return e;
}
function $u(n) {
  (!He.length || !He.includes(
    n,
    Co && n.allowRecurse ? Pt + 1 : Pt
  )) && (n.id == null ? He.push(n) : He.splice(Th(n.id), 0, n), tm());
}
function tm() {
  !Co && !wc && (wc = !0, zc = em.then(im));
}
function vh(n) {
  const e = He.indexOf(n);
  e > Pt && He.splice(e, 1);
}
function nm(n) {
  ne(n) ? lo.push(...n) : (!fn || !fn.includes(
    n,
    n.allowRecurse ? ri + 1 : ri
  )) && lo.push(n), tm();
}
function Ol(n, e, t = Co ? Pt + 1 : 0) {
  for (e = e || /* @__PURE__ */ new Map(); t < He.length; t++) {
    const r = He[t];
    if (r && r.pre) {
      if (n && r.id !== n.uid || Xc(e, r))
        continue;
      He.splice(t, 1), t--, r();
    }
  }
}
function rm(n) {
  if (lo.length) {
    const e = [...new Set(lo)].sort(
      (t, r) => Uo(t) - Uo(r)
    );
    if (lo.length = 0, fn) {
      fn.push(...e);
      return;
    }
    for (fn = e, n = n || /* @__PURE__ */ new Map(), ri = 0; ri < fn.length; ri++)
      Xc(n, fn[ri]) || fn[ri]();
    fn = null, ri = 0;
  }
}
const Uo = (n) => n.id == null ? 1 / 0 : n.id, Eh = (n, e) => {
  const t = Uo(n) - Uo(e);
  if (t === 0) {
    if (n.pre && !e.pre)
      return -1;
    if (e.pre && !n.pre)
      return 1;
  }
  return t;
};
function im(n) {
  wc = !1, Co = !0, n = n || /* @__PURE__ */ new Map(), He.sort(Eh);
  const e = (t) => Xc(n, t);
  try {
    for (Pt = 0; Pt < He.length; Pt++) {
      const t = He[Pt];
      if (t && t.active !== !1) {
        if (e(t))
          continue;
        Vr(t, null, 14);
      }
    }
  } finally {
    Pt = 0, He.length = 0, rm(n), Co = !1, zc = null, (He.length || lo.length) && im(n);
  }
}
function Xc(n, e) {
  if (!n.has(e))
    n.set(e, 1);
  else {
    const t = n.get(e);
    if (t > wh) {
      const r = e.ownerInstance, s = r && Lm(r.type);
      return Ga(
        `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      n.set(e, t + 1);
  }
}
let xs = !1;
const io = /* @__PURE__ */ new Set();
Kc().__VUE_HMR_RUNTIME__ = {
  createRecord: Qu(sm),
  rerender: Qu(Sh),
  reload: Qu(kh)
};
const eo = /* @__PURE__ */ new Map();
function Nh(n) {
  const e = n.type.__hmrId;
  let t = eo.get(e);
  t || (sm(e, n.type), t = eo.get(e)), t.instances.add(n);
}
function bh(n) {
  eo.get(n.type.__hmrId).instances.delete(n);
}
function sm(n, e) {
  return eo.has(n) ? !1 : (eo.set(n, {
    initialDef: Ao(e),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Ao(n) {
  return Cm(n) ? n.__vccOpts : n;
}
function Sh(n, e) {
  const t = eo.get(n);
  t && (t.initialDef.render = e, [...t.instances].forEach((r) => {
    e && (r.render = e, Ao(r.type).render = e), r.renderCache = [], xs = !0, r.effect.dirty = !0, r.update(), xs = !1;
  }));
}
function kh(n, e) {
  const t = eo.get(n);
  if (!t)
    return;
  e = Ao(e), Bl(t.initialDef, e);
  const r = [...t.instances];
  for (const s of r) {
    const o = Ao(s.type);
    io.has(o) || (o !== t.initialDef && Bl(o, e), io.add(o)), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (io.add(o), s.ceReload(e.styles), io.delete(o)) : s.parent ? (s.parent.effect.dirty = !0, $u(s.parent.update)) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  nm(() => {
    for (const s of r)
      io.delete(
        Ao(s.type)
      );
  });
}
function Bl(n, e) {
  Be(n, e);
  for (const t in n)
    t !== "__file" && !(t in e) && delete n[t];
}
function Qu(n) {
  return (e, t) => {
    try {
      return n(e, t);
    } catch (r) {
      console.error(r), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Lt, No = [], vc = !1;
function ja(n, ...e) {
  Lt ? Lt.emit(n, ...e) : vc || No.push({ event: n, args: e });
}
function om(n, e) {
  var t, r;
  Lt = n, Lt ? (Lt.enabled = !0, No.forEach(({ event: s, args: o }) => Lt.emit(s, ...o)), No = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((r = (t = window.navigator) == null ? void 0 : t.userAgent) != null && r.includes("jsdom")) ? ((e.__VUE_DEVTOOLS_HOOK_REPLAY__ = e.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((o) => {
    om(o, e);
  }), setTimeout(() => {
    Lt || (e.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, vc = !0, No = []);
  }, 3e3)) : (vc = !0, No = []);
}
function Ih(n, e) {
  ja("app:init", n, e, {
    Fragment: Tt,
    Text: Ha,
    Comment: ct,
    Static: hu
  });
}
function Oh(n) {
  ja("app:unmount", n);
}
const Bh = /* @__PURE__ */ Yc(
  "component:added"
  /* COMPONENT_ADDED */
), am = /* @__PURE__ */ Yc(
  "component:updated"
  /* COMPONENT_UPDATED */
), Ah = /* @__PURE__ */ Yc(
  "component:removed"
  /* COMPONENT_REMOVED */
), Jh = (n) => {
  Lt && typeof Lt.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Lt.cleanupBuffer(n) && Ah(n);
};
function Yc(n) {
  return (e) => {
    ja(
      n,
      e.appContext.app,
      e.uid,
      e.parent ? e.parent.uid : void 0,
      e
    );
  };
}
const Rh = /* @__PURE__ */ um(
  "perf:start"
  /* PERFORMANCE_START */
), xh = /* @__PURE__ */ um(
  "perf:end"
  /* PERFORMANCE_END */
);
function um(n) {
  return (e, t, r) => {
    ja(n, e.appContext.app, e.uid, e, t, r);
  };
}
function Ph(n, e, t) {
  ja(
    "component:emit",
    n.appContext.app,
    n,
    e,
    t
  );
}
function Lh(n, e, ...t) {
  if (n.isUnmounted)
    return;
  const r = n.vnode.props || Ee;
  {
    const {
      emitsOptions: d,
      propsOptions: [p]
    } = n;
    if (d)
      if (!(e in d))
        (!p || !(Vs(e) in p)) && q(
          `Component emitted event "${e}" but it is neither declared in the emits option nor as an "${Vs(e)}" prop.`
        );
      else {
        const T = d[e];
        ie(T) && (T(...t) || q(
          `Invalid event arguments: event validation failed for event "${e}".`
        ));
      }
  }
  let s = t;
  const o = e.startsWith("update:"), u = o && e.slice(7);
  if (u && u in r) {
    const d = `${u === "modelValue" ? "model" : u}Modifiers`, { number: p, trim: T } = r[d] || Ee;
    T && (s = t.map((N) => Re(N) ? N.trim() : N)), p && (s = t.map(Id));
  }
  Ph(n, e, s);
  {
    const d = e.toLowerCase();
    d !== e && r[Vs(d)] && q(
      `Event "${d}" is emitted in component ${zu(
        n,
        n.type
      )} but the handler is registered for "${e}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Ls(
        e
      )}" instead of "${e}".`
    );
  }
  let c, f = r[c = Vs(e)] || // also try camelCase event handler (#2249)
  r[c = Vs(mo(e))];
  !f && o && (f = r[c = Vs(Ls(e))]), f && Ot(
    f,
    n,
    6,
    s
  );
  const h = r[c + "Once"];
  if (h) {
    if (!n.emitted)
      n.emitted = {};
    else if (n.emitted[c])
      return;
    n.emitted[c] = !0, Ot(
      h,
      n,
      6,
      s
    );
  }
}
function cm(n, e, t = !1) {
  const r = e.emitsCache, s = r.get(n);
  if (s !== void 0)
    return s;
  const o = n.emits;
  let u = {}, c = !1;
  if (!ie(n)) {
    const f = (h) => {
      const d = cm(h, e, !0);
      d && (c = !0, Be(u, d));
    };
    !t && e.mixins.length && e.mixins.forEach(f), n.extends && f(n.extends), n.mixins && n.mixins.forEach(f);
  }
  return !o && !c ? (Se(n) && r.set(n, null), null) : (ne(o) ? o.forEach((f) => u[f] = null) : Be(u, o), Se(n) && r.set(n, u), u);
}
function Vu(n, e) {
  return !n || !Va(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), me(n, e[0].toLowerCase() + e.slice(1)) || me(n, Ls(e)) || me(n, e));
}
let ot = null, lm = null;
function Su(n) {
  const e = ot;
  return ot = n, lm = n && n.type.__scopeId || null, e;
}
function Ch(n, e = ot, t) {
  if (!e || n._n)
    return n;
  const r = (...s) => {
    r._d && Ml(-1);
    const o = Su(e);
    let u;
    try {
      u = n(...s);
    } finally {
      Su(o), r._d && Ml(1);
    }
    return am(e), u;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
let Ec = !1;
function ku() {
  Ec = !0;
}
function Zu(n) {
  const {
    type: e,
    vnode: t,
    proxy: r,
    withProxy: s,
    props: o,
    propsOptions: [u],
    slots: c,
    attrs: f,
    emit: h,
    render: d,
    renderCache: p,
    data: T,
    setupState: N,
    ctx: k,
    inheritAttrs: K
  } = n;
  let j, X;
  const se = Su(n);
  Ec = !1;
  try {
    if (t.shapeFlag & 4) {
      const _ = s || r, G = N.__isScriptSetup ? new Proxy(_, {
        get(F, Q, le) {
          return q(
            `Property '${String(
              Q
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(F, Q, le);
        }
      }) : _;
      j = vt(
        d.call(
          G,
          _,
          p,
          o,
          N,
          T,
          k
        )
      ), X = f;
    } else {
      const _ = e;
      f === o && ku(), j = vt(
        _.length > 1 ? _(
          o,
          {
            get attrs() {
              return ku(), f;
            },
            slots: c,
            emit: h
          }
        ) : _(
          o,
          null
          /* we know it doesn't need it */
        )
      ), X = e.props ? f : Uh(f);
    }
  } catch (_) {
    Ro.length = 0, Ga(_, n, 1), j = sn(ct);
  }
  let M = j, z;
  if (j.patchFlag > 0 && j.patchFlag & 2048 && ([M, z] = fm(j)), X && K !== !1) {
    const _ = Object.keys(X), { shapeFlag: G } = M;
    if (_.length) {
      if (G & 7)
        u && _.some(Nu) && (X = qh(
          X,
          u
        )), M = Ds(M, X);
      else if (!Ec && M.type !== ct) {
        const F = Object.keys(f), Q = [], le = [];
        for (let Ie = 0, ke = F.length; Ie < ke; Ie++) {
          const xe = F[Ie];
          Va(xe) ? Nu(xe) || Q.push(xe[2].toLowerCase() + xe.slice(3)) : le.push(xe);
        }
        le.length && q(
          `Extraneous non-props attributes (${le.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), Q.length && q(
          `Extraneous non-emits event listeners (${Q.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return t.dirs && (Al(M) || q(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), M = Ds(M), M.dirs = M.dirs ? M.dirs.concat(t.dirs) : t.dirs), t.transition && (Al(M) || q(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), M.transition = t.transition), z ? z(M) : j = M, Su(se), j;
}
const fm = (n) => {
  const e = n.children, t = n.dynamicChildren, r = Qc(e, !1);
  if (r) {
    if (r.patchFlag > 0 && r.patchFlag & 2048)
      return fm(r);
  } else
    return [n, void 0];
  const s = e.indexOf(r), o = t ? t.indexOf(r) : -1, u = (c) => {
    e[s] = c, t && (o > -1 ? t[o] = c : c.patchFlag > 0 && (n.dynamicChildren = [...t, c]));
  };
  return [vt(r), u];
};
function Qc(n, e = !0) {
  let t;
  for (let r = 0; r < n.length; r++) {
    const s = n[r];
    if (il(s)) {
      if (s.type !== ct || s.children === "v-if") {
        if (t)
          return;
        if (t = s, e && t.patchFlag > 0 && t.patchFlag & 2048)
          return Qc(t.children);
      }
    } else
      return;
  }
  return t;
}
const Uh = (n) => {
  let e;
  for (const t in n)
    (t === "class" || t === "style" || Va(t)) && ((e || (e = {}))[t] = n[t]);
  return e;
}, qh = (n, e) => {
  const t = {};
  for (const r in n)
    (!Nu(r) || !(r.slice(9) in e)) && (t[r] = n[r]);
  return t;
}, Al = (n) => n.shapeFlag & 7 || n.type === ct;
function Dh(n, e, t) {
  const { props: r, children: s, component: o } = n, { props: u, children: c, patchFlag: f } = e, h = o.emitsOptions;
  if ((s || c) && xs || e.dirs || e.transition)
    return !0;
  if (t && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return r ? Jl(r, u, h) : !!u;
    if (f & 8) {
      const d = e.dynamicProps;
      for (let p = 0; p < d.length; p++) {
        const T = d[p];
        if (u[T] !== r[T] && !Vu(h, T))
          return !0;
      }
    }
  } else
    return (s || c) && (!c || !c.$stable) ? !0 : r === u ? !1 : r ? u ? Jl(r, u, h) : !0 : !!u;
  return !1;
}
function Jl(n, e, t) {
  const r = Object.keys(e);
  if (r.length !== Object.keys(n).length)
    return !0;
  for (let s = 0; s < r.length; s++) {
    const o = r[s];
    if (e[o] !== n[o] && !Vu(t, o))
      return !0;
  }
  return !1;
}
function Fh({ vnode: n, parent: e }, t) {
  for (; e; ) {
    const r = e.subTree;
    if (r.suspense && r.suspense.activeBranch === n && (r.el = n.el), r === n)
      (n = e.vnode).el = t, e = e.parent;
    else
      break;
  }
}
const _h = Symbol.for("v-ndc"), Kh = (n) => n.__isSuspense;
function Mh(n, e) {
  e && e.pendingBranch ? ne(n) ? e.effects.push(...n) : e.effects.push(n) : nm(n);
}
const $h = Symbol.for("v-scx"), Vh = () => {
  {
    const n = Bt($h);
    return n || q(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), n;
  }
};
function mm(n, e) {
  return Zc(n, null, e);
}
const su = {};
function ec(n, e, t) {
  return ie(e) || q(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Zc(n, e, t);
}
function Zc(n, e, {
  immediate: t,
  deep: r,
  flush: s,
  once: o,
  onTrack: u,
  onTrigger: c
} = Ee) {
  if (e && o) {
    const F = e;
    e = (...Q) => {
      F(...Q), G();
    };
  }
  r !== void 0 && typeof r == "number" && q(
    'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
  ), e || (t !== void 0 && q(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && q(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && q(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const f = (F) => {
    q(
      "Invalid watch source: ",
      F,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, h = De, d = (F) => r === !0 ? F : (
    // for deep: false, only traverse root-level properties
    ao(F, r === !1 ? 1 : void 0)
  );
  let p, T = !1, N = !1;
  if (Ve(n) ? (p = () => n.value, T = Xs(n)) : zs(n) ? (p = () => d(n), T = !0) : ne(n) ? (N = !0, T = n.some((F) => zs(F) || Xs(F)), p = () => n.map((F) => {
    if (Ve(F))
      return F.value;
    if (zs(F))
      return d(F);
    if (ie(F))
      return Vr(F, h, 2);
    f(F);
  })) : ie(n) ? e ? p = () => Vr(n, h, 2) : p = () => (k && k(), Ot(
    n,
    h,
    3,
    [K]
  )) : (p = We, f(n)), e && r) {
    const F = p;
    p = () => ao(F());
  }
  let k, K = (F) => {
    k = z.onStop = () => {
      Vr(F, h, 4), k = z.onStop = void 0;
    };
  }, j;
  if (Wu)
    if (K = We, e ? t && Ot(e, h, 3, [
      p(),
      N ? [] : void 0,
      K
    ]) : p(), s === "sync") {
      const F = Vh();
      j = F.__watcherHandles || (F.__watcherHandles = []);
    } else
      return We;
  let X = N ? new Array(n.length).fill(su) : su;
  const se = () => {
    if (!(!z.active || !z.dirty))
      if (e) {
        const F = z.run();
        (r || T || (N ? F.some((Q, le) => Cs(Q, X[le])) : Cs(F, X))) && (k && k(), Ot(e, h, 3, [
          F,
          // pass undefined as the old value when it's changed for the first time
          X === su ? void 0 : N && X[0] === su ? [] : X,
          K
        ]), X = F);
      } else
        z.run();
  };
  se.allowRecurse = !!e;
  let M;
  s === "sync" ? M = se : s === "post" ? M = () => tt(se, h && h.suspense) : (se.pre = !0, h && (se.id = h.uid), M = () => $u(se));
  const z = new $c(p, We, M), _ = Kd(), G = () => {
    z.stop(), _ && qc(_.effects, z);
  };
  return z.onTrack = u, z.onTrigger = c, e ? t ? se() : X = z.run() : s === "post" ? tt(
    z.run.bind(z),
    h && h.suspense
  ) : z.run(), j && j.push(G), G;
}
function Gh(n, e, t) {
  const r = this.proxy, s = Re(n) ? n.includes(".") ? dm(r, n) : () => r[n] : n.bind(r, r);
  let o;
  ie(e) ? o = e : (o = e.handler, t = e);
  const u = Wa(this), c = Zc(s, o.bind(r), t);
  return u(), c;
}
function dm(n, e) {
  const t = e.split(".");
  return () => {
    let r = n;
    for (let s = 0; s < t.length && r; s++)
      r = r[t[s]];
    return r;
  };
}
function ao(n, e, t = 0, r) {
  if (!Se(n) || n.__v_skip)
    return n;
  if (e && e > 0) {
    if (t >= e)
      return n;
    t++;
  }
  if (r = r || /* @__PURE__ */ new Set(), r.has(n))
    return n;
  if (r.add(n), Ve(n))
    ao(n.value, e, t, r);
  else if (ne(n))
    for (let s = 0; s < n.length; s++)
      ao(n[s], e, t, r);
  else if (vd(n) || co(n))
    n.forEach((s) => {
      ao(s, e, t, r);
    });
  else if (Nd(n))
    for (const s in n)
      ao(n[s], e, t, r);
  return n;
}
function hm(n) {
  bd(n) && q("Do not use built-in directive ids as custom directive id: " + n);
}
function Ms(n, e, t, r) {
  const s = n.dirs, o = e && e.dirs;
  for (let u = 0; u < s.length; u++) {
    const c = s[u];
    o && (c.oldValue = o[u].value);
    let f = c.dir[r];
    f && (_s(), Ot(f, t, 8, [
      n.el,
      c,
      n,
      e
    ]), Ks());
  }
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function go(n, e) {
  return ie(n) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => Be({ name: n.name }, e, { setup: n }))()
  ) : n;
}
const du = (n) => !!n.type.__asyncLoader, el = (n) => n.type.__isKeepAlive;
function jh(n, e) {
  pm(n, "a", e);
}
function Hh(n, e) {
  pm(n, "da", e);
}
function pm(n, e, t = De) {
  const r = n.__wdc || (n.__wdc = () => {
    let s = t;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return n();
  });
  if (Gu(e, r, t), t) {
    let s = t.parent;
    for (; s && s.parent; )
      el(s.parent.vnode) && Wh(r, e, t, s), s = s.parent;
  }
}
function Wh(n, e, t, r) {
  const s = Gu(
    e,
    n,
    r,
    !0
    /* prepend */
  );
  gm(() => {
    qc(r[e], s);
  }, t);
}
function Gu(n, e, t = De, r = !1) {
  if (t) {
    const s = t[n] || (t[n] = []), o = e.__weh || (e.__weh = (...u) => {
      if (t.isUnmounted)
        return;
      _s();
      const c = Wa(t), f = Ot(e, t, n, u);
      return c(), Ks(), f;
    });
    return r ? s.unshift(o) : s.push(o), o;
  } else {
    const s = Vs(Wc[n].replace(/ hook$/, ""));
    q(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Wr = (n) => (e, t = De) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Wu || n === "sp") && Gu(n, (...r) => e(...r), t)
), zh = Wr("bm"), ju = Wr("m"), Xh = Wr("bu"), Yh = Wr("u"), Qh = Wr("bum"), gm = Wr("um"), Zh = Wr("sp"), ep = Wr(
  "rtg"
), tp = Wr(
  "rtc"
);
function np(n, e = De) {
  Gu("ec", n, e);
}
const Nc = (n) => n ? xm(n) ? ol(n) || n.proxy : Nc(n.parent) : null, Qs = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Be(/* @__PURE__ */ Object.create(null), {
    $: (n) => n,
    $el: (n) => n.vnode.el,
    $data: (n) => n.data,
    $props: (n) => oo(n.props),
    $attrs: (n) => oo(n.attrs),
    $slots: (n) => oo(n.slots),
    $refs: (n) => oo(n.refs),
    $parent: (n) => Nc(n.parent),
    $root: (n) => Nc(n.root),
    $emit: (n) => n.emit,
    $options: (n) => nl(n),
    $forceUpdate: (n) => n.f || (n.f = () => {
      n.effect.dirty = !0, $u(n.update);
    }),
    $nextTick: (n) => n.n || (n.n = Tc.bind(n.proxy)),
    $watch: (n) => Gh.bind(n)
  })
), tl = (n) => n === "_" || n === "$", tc = (n, e) => n !== Ee && !n.__isScriptSetup && me(n, e), ym = {
  get({ _: n }, e) {
    const { ctx: t, setupState: r, data: s, props: o, accessCache: u, type: c, appContext: f } = n;
    if (e === "__isVue")
      return !0;
    let h;
    if (e[0] !== "$") {
      const N = u[e];
      if (N !== void 0)
        switch (N) {
          case 1:
            return r[e];
          case 2:
            return s[e];
          case 4:
            return t[e];
          case 3:
            return o[e];
        }
      else {
        if (tc(r, e))
          return u[e] = 1, r[e];
        if (s !== Ee && me(s, e))
          return u[e] = 2, s[e];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (h = n.propsOptions[0]) && me(h, e)
        )
          return u[e] = 3, o[e];
        if (t !== Ee && me(t, e))
          return u[e] = 4, t[e];
        bc && (u[e] = 0);
      }
    }
    const d = Qs[e];
    let p, T;
    if (d)
      return e === "$attrs" ? (ze(n, "get", e), ku()) : e === "$slots" && ze(n, "get", e), d(n);
    if (
      // css module (injected by vue-loader)
      (p = c.__cssModules) && (p = p[e])
    )
      return p;
    if (t !== Ee && me(t, e))
      return u[e] = 4, t[e];
    if (
      // {} properties
      T = f.config.globalProperties, me(T, e)
    )
      return T[e];
    ot && (!Re(e) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    e.indexOf("__v") !== 0) && (s !== Ee && tl(e[0]) && me(s, e) ? q(
      `Property ${JSON.stringify(
        e
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : n === ot && q(
      `Property ${JSON.stringify(e)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: n }, e, t) {
    const { data: r, setupState: s, ctx: o } = n;
    return tc(s, e) ? (s[e] = t, !0) : s.__isScriptSetup && me(s, e) ? (q(`Cannot mutate <script setup> binding "${e}" from Options API.`), !1) : r !== Ee && me(r, e) ? (r[e] = t, !0) : me(n.props, e) ? (q(`Attempting to mutate prop "${e}". Props are readonly.`), !1) : e[0] === "$" && e.slice(1) in n ? (q(
      `Attempting to mutate public property "${e}". Properties starting with $ are reserved and readonly.`
    ), !1) : (e in n.appContext.config.globalProperties ? Object.defineProperty(o, e, {
      enumerable: !0,
      configurable: !0,
      value: t
    }) : o[e] = t, !0);
  },
  has({
    _: { data: n, setupState: e, accessCache: t, ctx: r, appContext: s, propsOptions: o }
  }, u) {
    let c;
    return !!t[u] || n !== Ee && me(n, u) || tc(e, u) || (c = o[0]) && me(c, u) || me(r, u) || me(Qs, u) || me(s.config.globalProperties, u);
  },
  defineProperty(n, e, t) {
    return t.get != null ? n._.accessCache[e] = 0 : me(t, "value") && this.set(n, e, t.value, null), Reflect.defineProperty(n, e, t);
  }
};
ym.ownKeys = (n) => (q(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(n));
function rp(n) {
  const e = {};
  return Object.defineProperty(e, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => n
  }), Object.keys(Qs).forEach((t) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      get: () => Qs[t](n),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: We
    });
  }), e;
}
function ip(n) {
  const {
    ctx: e,
    propsOptions: [t]
  } = n;
  t && Object.keys(t).forEach((r) => {
    Object.defineProperty(e, r, {
      enumerable: !0,
      configurable: !0,
      get: () => n.props[r],
      set: We
    });
  });
}
function sp(n) {
  const { ctx: e, setupState: t } = n;
  Object.keys(ae(t)).forEach((r) => {
    if (!t.__isScriptSetup) {
      if (tl(r[0])) {
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
        get: () => t[r],
        set: We
      });
    }
  });
}
function Rl(n) {
  return ne(n) ? n.reduce(
    (e, t) => (e[t] = null, e),
    {}
  ) : n;
}
function op() {
  const n = /* @__PURE__ */ Object.create(null);
  return (e, t) => {
    n[t] ? q(`${e} property "${t}" is already defined in ${n[t]}.`) : n[t] = e;
  };
}
let bc = !0;
function ap(n) {
  const e = nl(n), t = n.proxy, r = n.ctx;
  bc = !1, e.beforeCreate && xl(e.beforeCreate, n, "bc");
  const {
    // state
    data: s,
    computed: o,
    methods: u,
    watch: c,
    provide: f,
    inject: h,
    // lifecycle
    created: d,
    beforeMount: p,
    mounted: T,
    beforeUpdate: N,
    updated: k,
    activated: K,
    deactivated: j,
    beforeDestroy: X,
    beforeUnmount: se,
    destroyed: M,
    unmounted: z,
    render: _,
    renderTracked: G,
    renderTriggered: F,
    errorCaptured: Q,
    serverPrefetch: le,
    // public API
    expose: Ie,
    inheritAttrs: ke,
    // assets
    components: xe,
    directives: et,
    filters: an
  } = e, Ge = op();
  {
    const [U] = n.propsOptions;
    if (U)
      for (const I in U)
        Ge("Props", I);
  }
  if (h && up(h, r, Ge), u)
    for (const U in u) {
      const I = u[U];
      ie(I) ? (Object.defineProperty(r, U, {
        value: I.bind(t),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }), Ge("Methods", U)) : q(
        `Method "${U}" has type "${typeof I}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (s) {
    ie(s) || q(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const U = s.call(t, t);
    if (Dc(U) && q(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !Se(U))
      q("data() should return an object.");
    else {
      n.data = Ku(U);
      for (const I in U)
        Ge("Data", I), tl(I[0]) || Object.defineProperty(r, I, {
          configurable: !0,
          enumerable: !0,
          get: () => U[I],
          set: We
        });
    }
  }
  if (bc = !0, o)
    for (const U in o) {
      const I = o[U], W = ie(I) ? I.bind(t, t) : ie(I.get) ? I.get.bind(t, t) : We;
      W === We && q(`Computed property "${U}" has no getter.`);
      const re = !ie(I) && ie(I.set) ? I.set.bind(t) : () => {
        q(
          `Write operation failed: computed property "${U}" is readonly.`
        );
      }, Y = tg({
        get: W,
        set: re
      });
      Object.defineProperty(r, U, {
        enumerable: !0,
        configurable: !0,
        get: () => Y.value,
        set: (Z) => Y.value = Z
      }), Ge("Computed", U);
    }
  if (c)
    for (const U in c)
      wm(c[U], r, t, U);
  if (f) {
    const U = ie(f) ? f.call(t) : f;
    Reflect.ownKeys(U).forEach((I) => {
      hp(I, U[I]);
    });
  }
  d && xl(d, n, "c");
  function qe(U, I) {
    ne(I) ? I.forEach((W) => U(W.bind(t))) : I && U(I.bind(t));
  }
  if (qe(zh, p), qe(ju, T), qe(Xh, N), qe(Yh, k), qe(jh, K), qe(Hh, j), qe(np, Q), qe(tp, G), qe(ep, F), qe(Qh, se), qe(gm, z), qe(Zh, le), ne(Ie))
    if (Ie.length) {
      const U = n.exposed || (n.exposed = {});
      Ie.forEach((I) => {
        Object.defineProperty(U, I, {
          get: () => t[I],
          set: (W) => t[I] = W
        });
      });
    } else
      n.exposed || (n.exposed = {});
  _ && n.render === We && (n.render = _), ke != null && (n.inheritAttrs = ke), xe && (n.components = xe), et && (n.directives = et);
}
function up(n, e, t = We) {
  ne(n) && (n = Sc(n));
  for (const r in n) {
    const s = n[r];
    let o;
    Se(s) ? "default" in s ? o = Bt(
      s.from || r,
      s.default,
      !0
    ) : o = Bt(s.from || r) : o = Bt(s), Ve(o) ? Object.defineProperty(e, r, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (u) => o.value = u
    }) : e[r] = o, t("Inject", r);
  }
}
function xl(n, e, t) {
  Ot(
    ne(n) ? n.map((r) => r.bind(e.proxy)) : n.bind(e.proxy),
    e,
    t
  );
}
function wm(n, e, t, r) {
  const s = r.includes(".") ? dm(t, r) : () => t[r];
  if (Re(n)) {
    const o = e[n];
    ie(o) ? ec(s, o) : q(`Invalid watch handler specified by key "${n}"`, o);
  } else if (ie(n))
    ec(s, n.bind(t));
  else if (Se(n))
    if (ne(n))
      n.forEach((o) => wm(o, e, t, r));
    else {
      const o = ie(n.handler) ? n.handler.bind(t) : e[n.handler];
      ie(o) ? ec(s, o, n) : q(`Invalid watch handler specified by key "${n.handler}"`, o);
    }
  else
    q(`Invalid watch option: "${r}"`, n);
}
function nl(n) {
  const e = n.type, { mixins: t, extends: r } = e, {
    mixins: s,
    optionsCache: o,
    config: { optionMergeStrategies: u }
  } = n.appContext, c = o.get(e);
  let f;
  return c ? f = c : !s.length && !t && !r ? f = e : (f = {}, s.length && s.forEach(
    (h) => Iu(f, h, u, !0)
  ), Iu(f, e, u)), Se(e) && o.set(e, f), f;
}
function Iu(n, e, t, r = !1) {
  const { mixins: s, extends: o } = e;
  o && Iu(n, o, t, !0), s && s.forEach(
    (u) => Iu(n, u, t, !0)
  );
  for (const u in e)
    if (r && u === "expose")
      q(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const c = cp[u] || t && t[u];
      n[u] = c ? c(n[u], e[u]) : e[u];
    }
  return n;
}
const cp = {
  data: Pl,
  props: Ll,
  emits: Ll,
  // objects
  methods: bo,
  computed: bo,
  // lifecycle
  beforeCreate: Ye,
  created: Ye,
  beforeMount: Ye,
  mounted: Ye,
  beforeUpdate: Ye,
  updated: Ye,
  beforeDestroy: Ye,
  beforeUnmount: Ye,
  destroyed: Ye,
  unmounted: Ye,
  activated: Ye,
  deactivated: Ye,
  errorCaptured: Ye,
  serverPrefetch: Ye,
  // assets
  components: bo,
  directives: bo,
  // watch
  watch: fp,
  // provide / inject
  provide: Pl,
  inject: lp
};
function Pl(n, e) {
  return e ? n ? function() {
    return Be(
      ie(n) ? n.call(this, this) : n,
      ie(e) ? e.call(this, this) : e
    );
  } : e : n;
}
function lp(n, e) {
  return bo(Sc(n), Sc(e));
}
function Sc(n) {
  if (ne(n)) {
    const e = {};
    for (let t = 0; t < n.length; t++)
      e[n[t]] = n[t];
    return e;
  }
  return n;
}
function Ye(n, e) {
  return n ? [...new Set([].concat(n, e))] : e;
}
function bo(n, e) {
  return n ? Be(/* @__PURE__ */ Object.create(null), n, e) : e;
}
function Ll(n, e) {
  return n ? ne(n) && ne(e) ? [.../* @__PURE__ */ new Set([...n, ...e])] : Be(
    /* @__PURE__ */ Object.create(null),
    Rl(n),
    Rl(e ?? {})
  ) : e;
}
function fp(n, e) {
  if (!n)
    return e;
  if (!e)
    return n;
  const t = Be(/* @__PURE__ */ Object.create(null), n);
  for (const r in e)
    t[r] = Ye(n[r], e[r]);
  return t;
}
function Tm() {
  return {
    app: null,
    config: {
      isNativeTag: wd,
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
let mp = 0;
function dp(n, e) {
  return function(r, s = null) {
    ie(r) || (r = Be({}, r)), s != null && !Se(s) && (q("root props passed to app.mount() must be an object."), s = null);
    const o = Tm(), u = /* @__PURE__ */ new WeakSet();
    let c = !1;
    const f = o.app = {
      _uid: mp++,
      _component: r,
      _props: s,
      _container: null,
      _context: o,
      _instance: null,
      version: Gl,
      get config() {
        return o.config;
      },
      set config(h) {
        q(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(h, ...d) {
        return u.has(h) ? q("Plugin has already been applied to target app.") : h && ie(h.install) ? (u.add(h), h.install(f, ...d)) : ie(h) ? (u.add(h), h(f, ...d)) : q(
          'A plugin must either be a function or an object with an "install" function.'
        ), f;
      },
      mixin(h) {
        return o.mixins.includes(h) ? q(
          "Mixin has already been applied to target app" + (h.name ? `: ${h.name}` : "")
        ) : o.mixins.push(h), f;
      },
      component(h, d) {
        return Jc(h, o.config), d ? (o.components[h] && q(`Component "${h}" has already been registered in target app.`), o.components[h] = d, f) : o.components[h];
      },
      directive(h, d) {
        return hm(h), d ? (o.directives[h] && q(`Directive "${h}" has already been registered in target app.`), o.directives[h] = d, f) : o.directives[h];
      },
      mount(h, d, p) {
        if (c)
          q(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          h.__vue_app__ && q(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const T = sn(r, s);
          return T.appContext = o, p === !0 ? p = "svg" : p === !1 && (p = void 0), o.reload = () => {
            n(
              Ds(T),
              h,
              p
            );
          }, d && e ? e(T, h) : n(T, h, p), c = !0, f._container = h, h.__vue_app__ = f, f._instance = T.component, Ih(f, Gl), ol(T.component) || T.component.proxy;
        }
      },
      unmount() {
        c ? (n(null, f._container), f._instance = null, Oh(f), delete f._container.__vue_app__) : q("Cannot unmount an app that is not mounted.");
      },
      provide(h, d) {
        return h in o.provides && q(
          `App already provides property with key "${String(h)}". It will be overwritten with the new value.`
        ), o.provides[h] = d, f;
      },
      runWithContext(h) {
        const d = Jo;
        Jo = f;
        try {
          return h();
        } finally {
          Jo = d;
        }
      }
    };
    return f;
  };
}
let Jo = null;
function hp(n, e) {
  if (!De)
    q("provide() can only be used inside setup().");
  else {
    let t = De.provides;
    const r = De.parent && De.parent.provides;
    r === t && (t = De.provides = Object.create(r)), t[n] = e;
  }
}
function Bt(n, e, t = !1) {
  const r = De || ot;
  if (r || Jo) {
    const s = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : Jo._context.provides;
    if (s && n in s)
      return s[n];
    if (arguments.length > 1)
      return t && ie(e) ? e.call(r && r.proxy) : e;
    q(`injection "${String(n)}" not found.`);
  } else
    q("inject() can only be used inside setup() or functional components.");
}
function pp(n, e, t, r = !1) {
  const s = {}, o = {};
  bu(o, Hu, 1), n.propsDefaults = /* @__PURE__ */ Object.create(null), vm(n, e, s, o);
  for (const u in n.propsOptions[0])
    u in s || (s[u] = void 0);
  Nm(e || {}, s, n), t ? n.props = r ? s : ah(s) : n.type.props ? n.props = s : n.props = o, n.attrs = o;
}
function gp(n) {
  for (; n; ) {
    if (n.type.__hmrId)
      return !0;
    n = n.parent;
  }
}
function yp(n, e, t, r) {
  const {
    props: s,
    attrs: o,
    vnode: { patchFlag: u }
  } = n, c = ae(s), [f] = n.propsOptions;
  let h = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !gp(n) && (r || u > 0) && !(u & 16)
  ) {
    if (u & 8) {
      const d = n.vnode.dynamicProps;
      for (let p = 0; p < d.length; p++) {
        let T = d[p];
        if (Vu(n.emitsOptions, T))
          continue;
        const N = e[T];
        if (f)
          if (me(o, T))
            N !== o[T] && (o[T] = N, h = !0);
          else {
            const k = mo(T);
            s[k] = kc(
              f,
              c,
              k,
              N,
              n,
              !1
            );
          }
        else
          N !== o[T] && (o[T] = N, h = !0);
      }
    }
  } else {
    vm(n, e, s, o) && (h = !0);
    let d;
    for (const p in c)
      (!e || // for camelCase
      !me(e, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = Ls(p)) === p || !me(e, d))) && (f ? t && // for camelCase
      (t[p] !== void 0 || // for kebab-case
      t[d] !== void 0) && (s[p] = kc(
        f,
        c,
        p,
        void 0,
        n,
        !0
      )) : delete s[p]);
    if (o !== c)
      for (const p in o)
        (!e || !me(e, p)) && (delete o[p], h = !0);
  }
  h && rn(n, "set", "$attrs"), Nm(e || {}, s, n);
}
function vm(n, e, t, r) {
  const [s, o] = n.propsOptions;
  let u = !1, c;
  if (e)
    for (let f in e) {
      if (Bo(f))
        continue;
      const h = e[f];
      let d;
      s && me(s, d = mo(f)) ? !o || !o.includes(d) ? t[d] = h : (c || (c = {}))[d] = h : Vu(n.emitsOptions, f) || (!(f in r) || h !== r[f]) && (r[f] = h, u = !0);
    }
  if (o) {
    const f = ae(t), h = c || Ee;
    for (let d = 0; d < o.length; d++) {
      const p = o[d];
      t[p] = kc(
        s,
        f,
        p,
        h[p],
        n,
        !me(h, p)
      );
    }
  }
  return u;
}
function kc(n, e, t, r, s, o) {
  const u = n[t];
  if (u != null) {
    const c = me(u, "default");
    if (c && r === void 0) {
      const f = u.default;
      if (u.type !== Function && !u.skipFactory && ie(f)) {
        const { propsDefaults: h } = s;
        if (t in h)
          r = h[t];
        else {
          const d = Wa(s);
          r = h[t] = f.call(
            null,
            e
          ), d();
        }
      } else
        r = f;
    }
    u[
      0
      /* shouldCast */
    ] && (o && !c ? r = !1 : u[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === Ls(t)) && (r = !0));
  }
  return r;
}
function Em(n, e, t = !1) {
  const r = e.propsCache, s = r.get(n);
  if (s)
    return s;
  const o = n.props, u = {}, c = [];
  let f = !1;
  if (!ie(n)) {
    const d = (p) => {
      f = !0;
      const [T, N] = Em(p, e, !0);
      Be(u, T), N && c.push(...N);
    };
    !t && e.mixins.length && e.mixins.forEach(d), n.extends && d(n.extends), n.mixins && n.mixins.forEach(d);
  }
  if (!o && !f)
    return Se(n) && r.set(n, uo), uo;
  if (ne(o))
    for (let d = 0; d < o.length; d++) {
      Re(o[d]) || q("props must be strings when using array syntax.", o[d]);
      const p = mo(o[d]);
      Cl(p) && (u[p] = Ee);
    }
  else if (o) {
    Se(o) || q("invalid props options", o);
    for (const d in o) {
      const p = mo(d);
      if (Cl(p)) {
        const T = o[d], N = u[p] = ne(T) || ie(T) ? { type: T } : Be({}, T);
        if (N) {
          const k = ql(Boolean, N.type), K = ql(String, N.type);
          N[
            0
            /* shouldCast */
          ] = k > -1, N[
            1
            /* shouldCastTrue */
          ] = K < 0 || k < K, (k > -1 || me(N, "default")) && c.push(p);
        }
      }
    }
  }
  const h = [u, c];
  return Se(n) && r.set(n, h), h;
}
function Cl(n) {
  return n[0] !== "$" && !Bo(n) ? !0 : (q(`Invalid prop name: "${n}" is a reserved property.`), !1);
}
function Ic(n) {
  return n === null ? "null" : typeof n == "function" ? n.name || "" : typeof n == "object" && n.constructor && n.constructor.name || "";
}
function Ul(n, e) {
  return Ic(n) === Ic(e);
}
function ql(n, e) {
  return ne(e) ? e.findIndex((t) => Ul(t, n)) : ie(e) && Ul(e, n) ? 0 : -1;
}
function Nm(n, e, t) {
  const r = ae(e), s = t.propsOptions[0];
  for (const o in s) {
    let u = s[o];
    u != null && wp(
      o,
      r[o],
      u,
      oo(r),
      !me(n, o) && !me(n, Ls(o))
    );
  }
}
function wp(n, e, t, r, s) {
  const { type: o, required: u, validator: c, skipCheck: f } = t;
  if (u && s) {
    q('Missing required prop: "' + n + '"');
    return;
  }
  if (!(e == null && !u)) {
    if (o != null && o !== !0 && !f) {
      let h = !1;
      const d = ne(o) ? o : [o], p = [];
      for (let T = 0; T < d.length && !h; T++) {
        const { valid: N, expectedType: k } = vp(e, d[T]);
        p.push(k || ""), h = N;
      }
      if (!h) {
        q(Ep(n, e, p));
        return;
      }
    }
    c && !c(e, r) && q('Invalid prop: custom validator check failed for prop "' + n + '".');
  }
}
const Tp = /* @__PURE__ */ Hr(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function vp(n, e) {
  let t;
  const r = Ic(e);
  if (Tp(r)) {
    const s = typeof n;
    t = s === r.toLowerCase(), !t && s === "object" && (t = n instanceof e);
  } else
    r === "Object" ? t = Se(n) : r === "Array" ? t = ne(n) : r === "null" ? t = n === null : t = n instanceof e;
  return {
    valid: t,
    expectedType: r
  };
}
function Ep(n, e, t) {
  if (t.length === 0)
    return `Prop type [] for prop "${n}" won't match anything. Did you mean to use type Array instead?`;
  let r = `Invalid prop: type check failed for prop "${n}". Expected ${t.map(Du).join(" | ")}`;
  const s = t[0], o = Fc(e), u = Dl(e, s), c = Dl(e, o);
  return t.length === 1 && Fl(s) && !Np(s, o) && (r += ` with value ${u}`), r += `, got ${o} `, Fl(o) && (r += `with value ${c}.`), r;
}
function Dl(n, e) {
  return e === "String" ? `"${n}"` : e === "Number" ? `${Number(n)}` : `${n}`;
}
function Fl(n) {
  return ["string", "number", "boolean"].some((t) => n.toLowerCase() === t);
}
function Np(...n) {
  return n.some((e) => e.toLowerCase() === "boolean");
}
const bm = (n) => n[0] === "_" || n === "$stable", rl = (n) => ne(n) ? n.map(vt) : [vt(n)], bp = (n, e, t) => {
  if (e._n)
    return e;
  const r = Ch((...s) => (De && (!t || t.root === De.root) && q(
    `Slot "${n}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), rl(e(...s))), t);
  return r._c = !1, r;
}, Sm = (n, e, t) => {
  const r = n._ctx;
  for (const s in n) {
    if (bm(s))
      continue;
    const o = n[s];
    if (ie(o))
      e[s] = bp(s, o, r);
    else if (o != null) {
      q(
        `Non-function value encountered for slot "${s}". Prefer function slots for better performance.`
      );
      const u = rl(o);
      e[s] = () => u;
    }
  }
}, km = (n, e) => {
  el(n.vnode) || q(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const t = rl(e);
  n.slots.default = () => t;
}, Sp = (n, e) => {
  if (n.vnode.shapeFlag & 32) {
    const t = e._;
    t ? (n.slots = ae(e), bu(e, "_", t)) : Sm(
      e,
      n.slots = {}
    );
  } else
    n.slots = {}, e && km(n, e);
  bu(n.slots, Hu, 1);
}, kp = (n, e, t) => {
  const { vnode: r, slots: s } = n;
  let o = !0, u = Ee;
  if (r.shapeFlag & 32) {
    const c = e._;
    c ? xs ? (Be(s, e), rn(n, "set", "$slots")) : t && c === 1 ? o = !1 : (Be(s, e), !t && c === 1 && delete s._) : (o = !e.$stable, Sm(e, s)), u = e;
  } else
    e && (km(n, e), u = { default: 1 });
  if (o)
    for (const c in s)
      !bm(c) && u[c] == null && delete s[c];
};
function Oc(n, e, t, r, s = !1) {
  if (ne(n)) {
    n.forEach(
      (T, N) => Oc(
        T,
        e && (ne(e) ? e[N] : e),
        t,
        r,
        s
      )
    );
    return;
  }
  if (du(r) && !s)
    return;
  const o = r.shapeFlag & 4 ? ol(r.component) || r.component.proxy : r.el, u = s ? null : o, { i: c, r: f } = n;
  if (!c) {
    q(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const h = e && e.r, d = c.refs === Ee ? c.refs = {} : c.refs, p = c.setupState;
  if (h != null && h !== f && (Re(h) ? (d[h] = null, me(p, h) && (p[h] = null)) : Ve(h) && (h.value = null)), ie(f))
    Vr(f, c, 12, [u, d]);
  else {
    const T = Re(f), N = Ve(f);
    if (T || N) {
      const k = () => {
        if (n.f) {
          const K = T ? me(p, f) ? p[f] : d[f] : f.value;
          s ? ne(K) && qc(K, o) : ne(K) ? K.includes(o) || K.push(o) : T ? (d[f] = [o], me(p, f) && (p[f] = d[f])) : (f.value = [o], n.k && (d[n.k] = f.value));
        } else
          T ? (d[f] = u, me(p, f) && (p[f] = u)) : N ? (f.value = u, n.k && (d[n.k] = u)) : q("Invalid template ref type:", f, `(${typeof f})`);
      };
      u ? (k.id = -1, tt(k, t)) : k();
    } else
      q("Invalid template ref type:", f, `(${typeof f})`);
  }
}
let To, oi;
function cn(n, e) {
  n.appContext.config.performance && Ou() && oi.mark(`vue-${e}-${n.uid}`), Rh(n, e, Ou() ? oi.now() : Date.now());
}
function ln(n, e) {
  if (n.appContext.config.performance && Ou()) {
    const t = `vue-${e}-${n.uid}`, r = t + ":end";
    oi.mark(r), oi.measure(
      `<${zu(n, n.type)}> ${e}`,
      t,
      r
    ), oi.clearMarks(t), oi.clearMarks(r);
  }
  xh(n, e, Ou() ? oi.now() : Date.now());
}
function Ou() {
  return To !== void 0 || (typeof window < "u" && window.performance ? (To = !0, oi = window.performance) : To = !1), To;
}
function Ip() {
  const n = [];
  if (n.length) {
    const e = n.length > 1;
    console.warn(
      `Feature flag${e ? "s" : ""} ${n.join(", ")} ${e ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const tt = Mh;
function Op(n) {
  return Bp(n);
}
function Bp(n, e) {
  Ip();
  const t = Kc();
  t.__VUE__ = !0, om(t.__VUE_DEVTOOLS_GLOBAL_HOOK__, t);
  const {
    insert: r,
    remove: s,
    patchProp: o,
    createElement: u,
    createText: c,
    createComment: f,
    setText: h,
    setElementText: d,
    parentNode: p,
    nextSibling: T,
    setScopeId: N = We,
    insertStaticContent: k
  } = n, K = (g, v, S, O = null, A = null, L = null, D = void 0, x = null, P = xs ? !1 : !!v.dynamicChildren) => {
    if (g === v)
      return;
    g && !vo(g, v) && (O = Ne(g), fe(g, A, L, !0), g = null), v.patchFlag === -2 && (P = !1, v.dynamicChildren = null);
    const { type: J, ref: $, shapeFlag: V } = v;
    switch (J) {
      case Ha:
        j(g, v, S, O);
        break;
      case ct:
        X(g, v, S, O);
        break;
      case hu:
        g == null ? se(v, S, O, D) : M(g, v, S, D);
        break;
      case Tt:
        et(
          g,
          v,
          S,
          O,
          A,
          L,
          D,
          x,
          P
        );
        break;
      default:
        V & 1 ? G(
          g,
          v,
          S,
          O,
          A,
          L,
          D,
          x,
          P
        ) : V & 6 ? an(
          g,
          v,
          S,
          O,
          A,
          L,
          D,
          x,
          P
        ) : V & 64 || V & 128 ? J.process(
          g,
          v,
          S,
          O,
          A,
          L,
          D,
          x,
          P,
          Me
        ) : q("Invalid VNode type:", J, `(${typeof J})`);
    }
    $ != null && A && Oc($, g && g.ref, L, v || g, !v);
  }, j = (g, v, S, O) => {
    if (g == null)
      r(
        v.el = c(v.children),
        S,
        O
      );
    else {
      const A = v.el = g.el;
      v.children !== g.children && h(A, v.children);
    }
  }, X = (g, v, S, O) => {
    g == null ? r(
      v.el = f(v.children || ""),
      S,
      O
    ) : v.el = g.el;
  }, se = (g, v, S, O) => {
    [g.el, g.anchor] = k(
      g.children,
      v,
      S,
      O,
      g.el,
      g.anchor
    );
  }, M = (g, v, S, O) => {
    if (v.children !== g.children) {
      const A = T(g.anchor);
      _(g), [v.el, v.anchor] = k(
        v.children,
        S,
        A,
        O
      );
    } else
      v.el = g.el, v.anchor = g.anchor;
  }, z = ({ el: g, anchor: v }, S, O) => {
    let A;
    for (; g && g !== v; )
      A = T(g), r(g, S, O), g = A;
    r(v, S, O);
  }, _ = ({ el: g, anchor: v }) => {
    let S;
    for (; g && g !== v; )
      S = T(g), s(g), g = S;
    s(v);
  }, G = (g, v, S, O, A, L, D, x, P) => {
    v.type === "svg" ? D = "svg" : v.type === "math" && (D = "mathml"), g == null ? F(
      v,
      S,
      O,
      A,
      L,
      D,
      x,
      P
    ) : Ie(
      g,
      v,
      A,
      L,
      D,
      x,
      P
    );
  }, F = (g, v, S, O, A, L, D, x) => {
    let P, J;
    const { props: $, shapeFlag: V, transition: H, dirs: a } = g;
    if (P = g.el = u(
      g.type,
      L,
      $ && $.is,
      $
    ), V & 8 ? d(P, g.children) : V & 16 && le(
      g.children,
      P,
      null,
      O,
      A,
      nc(g, L),
      D,
      x
    ), a && Ms(g, null, O, "created"), Q(P, g, g.scopeId, D, O), $) {
      for (const m in $)
        m !== "value" && !Bo(m) && o(
          P,
          m,
          null,
          $[m],
          L,
          g.children,
          O,
          A,
          ge
        );
      "value" in $ && o(P, "value", null, $.value, L), (J = $.onVnodeBeforeMount) && At(J, O, g);
    }
    Object.defineProperty(P, "__vnode", {
      value: g,
      enumerable: !1
    }), Object.defineProperty(P, "__vueParentComponent", {
      value: O,
      enumerable: !1
    }), a && Ms(g, null, O, "beforeMount");
    const l = Ap(A, H);
    l && H.beforeEnter(P), r(P, v, S), ((J = $ && $.onVnodeMounted) || l || a) && tt(() => {
      J && At(J, O, g), l && H.enter(P), a && Ms(g, null, O, "mounted");
    }, A);
  }, Q = (g, v, S, O, A) => {
    if (S && N(g, S), O)
      for (let L = 0; L < O.length; L++)
        N(g, O[L]);
    if (A) {
      let L = A.subTree;
      if (L.patchFlag > 0 && L.patchFlag & 2048 && (L = Qc(L.children) || L), v === L) {
        const D = A.vnode;
        Q(
          g,
          D,
          D.scopeId,
          D.slotScopeIds,
          A.parent
        );
      }
    }
  }, le = (g, v, S, O, A, L, D, x, P = 0) => {
    for (let J = P; J < g.length; J++) {
      const $ = g[J] = x ? ii(g[J]) : vt(g[J]);
      K(
        null,
        $,
        v,
        S,
        O,
        A,
        L,
        D,
        x
      );
    }
  }, Ie = (g, v, S, O, A, L, D) => {
    const x = v.el = g.el;
    let { patchFlag: P, dynamicChildren: J, dirs: $ } = v;
    P |= g.patchFlag & 16;
    const V = g.props || Ee, H = v.props || Ee;
    let a;
    if (S && $s(S, !1), (a = H.onVnodeBeforeUpdate) && At(a, S, v, g), $ && Ms(v, g, S, "beforeUpdate"), S && $s(S, !0), xs && (P = 0, D = !1, J = null), J ? (ke(
      g.dynamicChildren,
      J,
      x,
      S,
      O,
      nc(v, A),
      L
    ), Bu(g, v)) : D || W(
      g,
      v,
      x,
      null,
      S,
      O,
      nc(v, A),
      L,
      !1
    ), P > 0) {
      if (P & 16)
        xe(
          x,
          v,
          V,
          H,
          S,
          O,
          A
        );
      else if (P & 2 && V.class !== H.class && o(x, "class", null, H.class, A), P & 4 && o(x, "style", V.style, H.style, A), P & 8) {
        const l = v.dynamicProps;
        for (let m = 0; m < l.length; m++) {
          const y = l[m], E = V[y], b = H[y];
          (b !== E || y === "value") && o(
            x,
            y,
            E,
            b,
            A,
            g.children,
            S,
            O,
            ge
          );
        }
      }
      P & 1 && g.children !== v.children && d(x, v.children);
    } else
      !D && J == null && xe(
        x,
        v,
        V,
        H,
        S,
        O,
        A
      );
    ((a = H.onVnodeUpdated) || $) && tt(() => {
      a && At(a, S, v, g), $ && Ms(v, g, S, "updated");
    }, O);
  }, ke = (g, v, S, O, A, L, D) => {
    for (let x = 0; x < v.length; x++) {
      const P = g[x], J = v[x], $ = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        P.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (P.type === Tt || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !vo(P, J) || // - In the case of a component, it could contain anything.
        P.shapeFlag & 70) ? p(P.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          S
        )
      );
      K(
        P,
        J,
        $,
        null,
        O,
        A,
        L,
        D,
        !0
      );
    }
  }, xe = (g, v, S, O, A, L, D) => {
    if (S !== O) {
      if (S !== Ee)
        for (const x in S)
          !Bo(x) && !(x in O) && o(
            g,
            x,
            S[x],
            null,
            D,
            v.children,
            A,
            L,
            ge
          );
      for (const x in O) {
        if (Bo(x))
          continue;
        const P = O[x], J = S[x];
        P !== J && x !== "value" && o(
          g,
          x,
          J,
          P,
          D,
          v.children,
          A,
          L,
          ge
        );
      }
      "value" in O && o(g, "value", S.value, O.value, D);
    }
  }, et = (g, v, S, O, A, L, D, x, P) => {
    const J = v.el = g ? g.el : c(""), $ = v.anchor = g ? g.anchor : c("");
    let { patchFlag: V, dynamicChildren: H, slotScopeIds: a } = v;
    // #5523 dev root fragment may inherit directives
    (xs || V & 2048) && (V = 0, P = !1, H = null), a && (x = x ? x.concat(a) : a), g == null ? (r(J, S, O), r($, S, O), le(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      v.children || [],
      S,
      $,
      A,
      L,
      D,
      x,
      P
    )) : V > 0 && V & 64 && H && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    g.dynamicChildren ? (ke(
      g.dynamicChildren,
      H,
      S,
      A,
      L,
      D,
      x
    ), Bu(g, v)) : W(
      g,
      v,
      S,
      $,
      A,
      L,
      D,
      x,
      P
    );
  }, an = (g, v, S, O, A, L, D, x, P) => {
    v.slotScopeIds = x, g == null ? v.shapeFlag & 512 ? A.ctx.activate(
      v,
      S,
      O,
      D,
      P
    ) : Ge(
      v,
      S,
      O,
      A,
      L,
      D,
      P
    ) : qe(g, v, P);
  }, Ge = (g, v, S, O, A, L, D) => {
    const x = g.component = Vp(
      g,
      O,
      A
    );
    if (x.type.__hmrId && Nh(x), fu(g), cn(x, "mount"), el(g) && (x.ctx.renderer = Me), cn(x, "init"), Hp(x), ln(x, "init"), x.asyncDep) {
      if (A && A.registerDep(x, U), !g.el) {
        const P = x.subTree = sn(ct);
        X(null, P, v, S);
      }
    } else
      U(
        x,
        g,
        v,
        S,
        A,
        L,
        D
      );
    mu(), ln(x, "mount");
  }, qe = (g, v, S) => {
    const O = v.component = g.component;
    if (Dh(g, v, S))
      if (O.asyncDep && !O.asyncResolved) {
        fu(v), I(O, v, S), mu();
        return;
      } else
        O.next = v, vh(O.update), O.effect.dirty = !0, O.update();
    else
      v.el = g.el, O.vnode = v;
  }, U = (g, v, S, O, A, L, D) => {
    const x = () => {
      if (g.isMounted) {
        let { next: $, bu: V, u: H, parent: a, vnode: l } = g;
        {
          const C = Im(g);
          if (C) {
            $ && ($.el = l.el, I(g, $, D)), C.asyncDep.then(() => {
              g.isUnmounted || x();
            });
            return;
          }
        }
        let m = $, y;
        fu($ || g.vnode), $s(g, !1), $ ? ($.el = l.el, I(g, $, D)) : $ = l, V && wo(V), (y = $.props && $.props.onVnodeBeforeUpdate) && At(y, a, $, l), $s(g, !0), cn(g, "render");
        const E = Zu(g);
        ln(g, "render");
        const b = g.subTree;
        g.subTree = E, cn(g, "patch"), K(
          b,
          E,
          // parent may have changed if it's in a teleport
          p(b.el),
          // anchor may have changed if it's in a fragment
          Ne(b),
          g,
          A,
          L
        ), ln(g, "patch"), $.el = E.el, m === null && Fh(g, E.el), H && tt(H, A), (y = $.props && $.props.onVnodeUpdated) && tt(
          () => At(y, a, $, l),
          A
        ), am(g), mu();
      } else {
        let $;
        const { el: V, props: H } = v, { bm: a, m: l, parent: m } = g, y = du(v);
        if ($s(g, !1), a && wo(a), !y && ($ = H && H.onVnodeBeforeMount) && At($, m, v), $s(g, !0), V && Xe) {
          const E = () => {
            cn(g, "render"), g.subTree = Zu(g), ln(g, "render"), cn(g, "hydrate"), Xe(
              V,
              g.subTree,
              g,
              A,
              null
            ), ln(g, "hydrate");
          };
          y ? v.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !g.isUnmounted && E()
          ) : E();
        } else {
          cn(g, "render");
          const E = g.subTree = Zu(g);
          ln(g, "render"), cn(g, "patch"), K(
            null,
            E,
            S,
            O,
            g,
            A,
            L
          ), ln(g, "patch"), v.el = E.el;
        }
        if (l && tt(l, A), !y && ($ = H && H.onVnodeMounted)) {
          const E = v;
          tt(
            () => At($, m, E),
            A
          );
        }
        (v.shapeFlag & 256 || m && du(m.vnode) && m.vnode.shapeFlag & 256) && g.a && tt(g.a, A), g.isMounted = !0, Bh(g), v = S = O = null;
      }
    }, P = g.effect = new $c(
      x,
      We,
      () => $u(J),
      g.scope
      // track it in component's effect scope
    ), J = g.update = () => {
      P.dirty && P.run();
    };
    J.id = g.uid, $s(g, !0), P.onTrack = g.rtc ? ($) => wo(g.rtc, $) : void 0, P.onTrigger = g.rtg ? ($) => wo(g.rtg, $) : void 0, J.ownerInstance = g, J();
  }, I = (g, v, S) => {
    v.component = g;
    const O = g.vnode.props;
    g.vnode = v, g.next = null, yp(g, v.props, O, S), kp(g, v.children, S), _s(), Ol(g), Ks();
  }, W = (g, v, S, O, A, L, D, x, P = !1) => {
    const J = g && g.children, $ = g ? g.shapeFlag : 0, V = v.children, { patchFlag: H, shapeFlag: a } = v;
    if (H > 0) {
      if (H & 128) {
        Y(
          J,
          V,
          S,
          O,
          A,
          L,
          D,
          x,
          P
        );
        return;
      } else if (H & 256) {
        re(
          J,
          V,
          S,
          O,
          A,
          L,
          D,
          x,
          P
        );
        return;
      }
    }
    a & 8 ? ($ & 16 && ge(J, A, L), V !== J && d(S, V)) : $ & 16 ? a & 16 ? Y(
      J,
      V,
      S,
      O,
      A,
      L,
      D,
      x,
      P
    ) : ge(J, A, L, !0) : ($ & 8 && d(S, ""), a & 16 && le(
      V,
      S,
      O,
      A,
      L,
      D,
      x,
      P
    ));
  }, re = (g, v, S, O, A, L, D, x, P) => {
    g = g || uo, v = v || uo;
    const J = g.length, $ = v.length, V = Math.min(J, $);
    let H;
    for (H = 0; H < V; H++) {
      const a = v[H] = P ? ii(v[H]) : vt(v[H]);
      K(
        g[H],
        a,
        S,
        null,
        A,
        L,
        D,
        x,
        P
      );
    }
    J > $ ? ge(
      g,
      A,
      L,
      !0,
      !1,
      V
    ) : le(
      v,
      S,
      O,
      A,
      L,
      D,
      x,
      P,
      V
    );
  }, Y = (g, v, S, O, A, L, D, x, P) => {
    let J = 0;
    const $ = v.length;
    let V = g.length - 1, H = $ - 1;
    for (; J <= V && J <= H; ) {
      const a = g[J], l = v[J] = P ? ii(v[J]) : vt(v[J]);
      if (vo(a, l))
        K(
          a,
          l,
          S,
          null,
          A,
          L,
          D,
          x,
          P
        );
      else
        break;
      J++;
    }
    for (; J <= V && J <= H; ) {
      const a = g[V], l = v[H] = P ? ii(v[H]) : vt(v[H]);
      if (vo(a, l))
        K(
          a,
          l,
          S,
          null,
          A,
          L,
          D,
          x,
          P
        );
      else
        break;
      V--, H--;
    }
    if (J > V) {
      if (J <= H) {
        const a = H + 1, l = a < $ ? v[a].el : O;
        for (; J <= H; )
          K(
            null,
            v[J] = P ? ii(v[J]) : vt(v[J]),
            S,
            l,
            A,
            L,
            D,
            x,
            P
          ), J++;
      }
    } else if (J > H)
      for (; J <= V; )
        fe(g[J], A, L, !0), J++;
    else {
      const a = J, l = J, m = /* @__PURE__ */ new Map();
      for (J = l; J <= H; J++) {
        const oe = v[J] = P ? ii(v[J]) : vt(v[J]);
        oe.key != null && (m.has(oe.key) && q(
          "Duplicate keys found during update:",
          JSON.stringify(oe.key),
          "Make sure keys are unique."
        ), m.set(oe.key, J));
      }
      let y, E = 0;
      const b = H - l + 1;
      let C = !1, ye = 0;
      const Oe = new Array(b);
      for (J = 0; J < b; J++)
        Oe[J] = 0;
      for (J = a; J <= V; J++) {
        const oe = g[J];
        if (E >= b) {
          fe(oe, A, L, !0);
          continue;
        }
        let he;
        if (oe.key != null)
          he = m.get(oe.key);
        else
          for (y = l; y <= H; y++)
            if (Oe[y - l] === 0 && vo(oe, v[y])) {
              he = y;
              break;
            }
        he === void 0 ? fe(oe, A, L, !0) : (Oe[he - l] = J + 1, he >= ye ? ye = he : C = !0, K(
          oe,
          v[he],
          S,
          null,
          A,
          L,
          D,
          x,
          P
        ), E++);
      }
      const ve = C ? Jp(Oe) : uo;
      for (y = ve.length - 1, J = b - 1; J >= 0; J--) {
        const oe = l + J, he = v[oe], wl = oe + 1 < $ ? v[oe + 1].el : O;
        Oe[J] === 0 ? K(
          null,
          he,
          S,
          wl,
          A,
          L,
          D,
          x,
          P
        ) : C && (y < 0 || J !== ve[y] ? Z(he, S, wl, 2) : y--);
      }
    }
  }, Z = (g, v, S, O, A = null) => {
    const { el: L, type: D, transition: x, children: P, shapeFlag: J } = g;
    if (J & 6) {
      Z(g.component.subTree, v, S, O);
      return;
    }
    if (J & 128) {
      g.suspense.move(v, S, O);
      return;
    }
    if (J & 64) {
      D.move(g, v, S, Me);
      return;
    }
    if (D === Tt) {
      r(L, v, S);
      for (let V = 0; V < P.length; V++)
        Z(P[V], v, S, O);
      r(g.anchor, v, S);
      return;
    }
    if (D === hu) {
      z(g, v, S);
      return;
    }
    if (O !== 2 && J & 1 && x)
      if (O === 0)
        x.beforeEnter(L), r(L, v, S), tt(() => x.enter(L), A);
      else {
        const { leave: V, delayLeave: H, afterLeave: a } = x, l = () => r(L, v, S), m = () => {
          V(L, () => {
            l(), a && a();
          });
        };
        H ? H(L, l, m) : m();
      }
    else
      r(L, v, S);
  }, fe = (g, v, S, O = !1, A = !1) => {
    const {
      type: L,
      props: D,
      ref: x,
      children: P,
      dynamicChildren: J,
      shapeFlag: $,
      patchFlag: V,
      dirs: H
    } = g;
    if (x != null && Oc(x, null, S, g, !0), $ & 256) {
      v.ctx.deactivate(g);
      return;
    }
    const a = $ & 1 && H, l = !du(g);
    let m;
    if (l && (m = D && D.onVnodeBeforeUnmount) && At(m, v, g), $ & 6)
      Te(g.component, S, O);
    else {
      if ($ & 128) {
        g.suspense.unmount(S, O);
        return;
      }
      a && Ms(g, null, v, "beforeUnmount"), $ & 64 ? g.type.remove(
        g,
        v,
        S,
        A,
        Me,
        O
      ) : J && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (L !== Tt || V > 0 && V & 64) ? ge(
        J,
        v,
        S,
        !1,
        !0
      ) : (L === Tt && V & 384 || !A && $ & 16) && ge(P, v, S), O && pe(g);
    }
    (l && (m = D && D.onVnodeUnmounted) || a) && tt(() => {
      m && At(m, v, g), a && Ms(g, null, v, "unmounted");
    }, S);
  }, pe = (g) => {
    const { type: v, el: S, anchor: O, transition: A } = g;
    if (v === Tt) {
      g.patchFlag > 0 && g.patchFlag & 2048 && A && !A.persisted ? g.children.forEach((D) => {
        D.type === ct ? s(D.el) : pe(D);
      }) : de(S, O);
      return;
    }
    if (v === hu) {
      _(g);
      return;
    }
    const L = () => {
      s(S), A && !A.persisted && A.afterLeave && A.afterLeave();
    };
    if (g.shapeFlag & 1 && A && !A.persisted) {
      const { leave: D, delayLeave: x } = A, P = () => D(S, L);
      x ? x(g.el, L, P) : P();
    } else
      L();
  }, de = (g, v) => {
    let S;
    for (; g !== v; )
      S = T(g), s(g), g = S;
    s(v);
  }, Te = (g, v, S) => {
    g.type.__hmrId && bh(g);
    const { bum: O, scope: A, update: L, subTree: D, um: x } = g;
    O && wo(O), A.stop(), L && (L.active = !1, fe(D, g, v, S)), x && tt(x, v), tt(() => {
      g.isUnmounted = !0;
    }, v), v && v.pendingBranch && !v.isUnmounted && g.asyncDep && !g.asyncResolved && g.suspenseId === v.pendingId && (v.deps--, v.deps === 0 && v.resolve()), Jh(g);
  }, ge = (g, v, S, O = !1, A = !1, L = 0) => {
    for (let D = L; D < g.length; D++)
      fe(g[D], v, S, O, A);
  }, Ne = (g) => g.shapeFlag & 6 ? Ne(g.component.subTree) : g.shapeFlag & 128 ? g.suspense.next() : T(g.anchor || g.el);
  let Ke = !1;
  const Pe = (g, v, S) => {
    g == null ? v._vnode && fe(v._vnode, null, null, !0) : K(
      v._vnode || null,
      g,
      v,
      null,
      null,
      null,
      S
    ), Ke || (Ke = !0, Ol(), rm(), Ke = !1), v._vnode = g;
  }, Me = {
    p: K,
    um: fe,
    m: Z,
    r: pe,
    mt: Ge,
    mc: le,
    pc: W,
    pbc: ke,
    n: Ne,
    o: n
  };
  let je, Xe;
  return e && ([je, Xe] = e(
    Me
  )), {
    render: Pe,
    hydrate: je,
    createApp: dp(Pe, je)
  };
}
function nc({ type: n, props: e }, t) {
  return t === "svg" && n === "foreignObject" || t === "mathml" && n === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : t;
}
function $s({ effect: n, update: e }, t) {
  n.allowRecurse = e.allowRecurse = t;
}
function Ap(n, e) {
  return (!n || n && !n.pendingBranch) && e && !e.persisted;
}
function Bu(n, e, t = !1) {
  const r = n.children, s = e.children;
  if (ne(r) && ne(s))
    for (let o = 0; o < r.length; o++) {
      const u = r[o];
      let c = s[o];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = s[o] = ii(s[o]), c.el = u.el), t || Bu(u, c)), c.type === Ha && (c.el = u.el), c.type === ct && !c.el && (c.el = u.el);
    }
}
function Jp(n) {
  const e = n.slice(), t = [0];
  let r, s, o, u, c;
  const f = n.length;
  for (r = 0; r < f; r++) {
    const h = n[r];
    if (h !== 0) {
      if (s = t[t.length - 1], n[s] < h) {
        e[r] = s, t.push(r);
        continue;
      }
      for (o = 0, u = t.length - 1; o < u; )
        c = o + u >> 1, n[t[c]] < h ? o = c + 1 : u = c;
      h < n[t[o]] && (o > 0 && (e[r] = t[o - 1]), t[o] = r);
    }
  }
  for (o = t.length, u = t[o - 1]; o-- > 0; )
    t[o] = u, u = e[u];
  return t;
}
function Im(n) {
  const e = n.subTree.component;
  if (e)
    return e.asyncDep && !e.asyncResolved ? e : Im(e);
}
const Rp = (n) => n.__isTeleport, fo = (n) => n && (n.disabled || n.disabled === ""), _l = (n) => typeof SVGElement < "u" && n instanceof SVGElement, Kl = (n) => typeof MathMLElement == "function" && n instanceof MathMLElement, Bc = (n, e) => {
  const t = n && n.to;
  if (Re(t))
    if (e) {
      const r = e(t);
      return r || q(
        `Failed to locate Teleport target with selector "${t}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), r;
    } else
      return q(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return !t && !fo(n) && q(`Invalid Teleport target: ${t}`), t;
}, xp = {
  name: "Teleport",
  __isTeleport: !0,
  process(n, e, t, r, s, o, u, c, f, h) {
    const {
      mc: d,
      pc: p,
      pbc: T,
      o: { insert: N, querySelector: k, createText: K, createComment: j }
    } = h, X = fo(e.props);
    let { shapeFlag: se, children: M, dynamicChildren: z } = e;
    if (xs && (f = !1, z = null), n == null) {
      const _ = e.el = j("teleport start"), G = e.anchor = j("teleport end");
      N(_, t, r), N(G, t, r);
      const F = e.target = Bc(e.props, k), Q = e.targetAnchor = K("");
      F ? (N(Q, F), u === "svg" || _l(F) ? u = "svg" : (u === "mathml" || Kl(F)) && (u = "mathml")) : X || q("Invalid Teleport target on mount:", F, `(${typeof F})`);
      const le = (Ie, ke) => {
        se & 16 && d(
          M,
          Ie,
          ke,
          s,
          o,
          u,
          c,
          f
        );
      };
      X ? le(t, G) : F && le(F, Q);
    } else {
      e.el = n.el;
      const _ = e.anchor = n.anchor, G = e.target = n.target, F = e.targetAnchor = n.targetAnchor, Q = fo(n.props), le = Q ? t : G, Ie = Q ? _ : F;
      if (u === "svg" || _l(G) ? u = "svg" : (u === "mathml" || Kl(G)) && (u = "mathml"), z ? (T(
        n.dynamicChildren,
        z,
        le,
        s,
        o,
        u,
        c
      ), Bu(n, e, !0)) : f || p(
        n,
        e,
        le,
        Ie,
        s,
        o,
        u,
        c,
        !1
      ), X)
        Q ? e.props && n.props && e.props.to !== n.props.to && (e.props.to = n.props.to) : ou(
          e,
          t,
          _,
          h,
          1
        );
      else if ((e.props && e.props.to) !== (n.props && n.props.to)) {
        const ke = e.target = Bc(
          e.props,
          k
        );
        ke ? ou(
          e,
          ke,
          null,
          h,
          0
        ) : q(
          "Invalid Teleport target on update:",
          G,
          `(${typeof G})`
        );
      } else
        Q && ou(
          e,
          G,
          F,
          h,
          1
        );
    }
    Om(e);
  },
  remove(n, e, t, r, { um: s, o: { remove: o } }, u) {
    const { shapeFlag: c, children: f, anchor: h, targetAnchor: d, target: p, props: T } = n;
    if (p && o(d), u && o(h), c & 16) {
      const N = u || !fo(T);
      for (let k = 0; k < f.length; k++) {
        const K = f[k];
        s(
          K,
          e,
          t,
          N,
          !!K.dynamicChildren
        );
      }
    }
  },
  move: ou,
  hydrate: Pp
};
function ou(n, e, t, { o: { insert: r }, m: s }, o = 2) {
  o === 0 && r(n.targetAnchor, e, t);
  const { el: u, anchor: c, shapeFlag: f, children: h, props: d } = n, p = o === 2;
  if (p && r(u, e, t), (!p || fo(d)) && f & 16)
    for (let T = 0; T < h.length; T++)
      s(
        h[T],
        e,
        t,
        2
      );
  p && r(c, e, t);
}
function Pp(n, e, t, r, s, o, {
  o: { nextSibling: u, parentNode: c, querySelector: f }
}, h) {
  const d = e.target = Bc(
    e.props,
    f
  );
  if (d) {
    const p = d._lpa || d.firstChild;
    if (e.shapeFlag & 16)
      if (fo(e.props))
        e.anchor = h(
          u(n),
          e,
          c(n),
          t,
          r,
          s,
          o
        ), e.targetAnchor = p;
      else {
        e.anchor = u(n);
        let T = p;
        for (; T; )
          if (T = u(T), T && T.nodeType === 8 && T.data === "teleport anchor") {
            e.targetAnchor = T, d._lpa = e.targetAnchor && u(e.targetAnchor);
            break;
          }
        h(
          p,
          e,
          d,
          t,
          r,
          s,
          o
        );
      }
    Om(e);
  }
  return e.anchor && u(e.anchor);
}
const Lp = xp;
function Om(n) {
  const e = n.ctx;
  if (e && e.ut) {
    let t = n.children[0].el;
    for (; t && t !== n.targetAnchor; )
      t.nodeType === 1 && t.setAttribute("data-v-owner", e.uid), t = t.nextSibling;
    e.ut();
  }
}
const Tt = Symbol.for("v-fgt"), Ha = Symbol.for("v-txt"), ct = Symbol.for("v-cmt"), hu = Symbol.for("v-stc"), Ro = [];
let Nt = null;
function nt(n = !1) {
  Ro.push(Nt = n ? null : []);
}
function Cp() {
  Ro.pop(), Nt = Ro[Ro.length - 1] || null;
}
let qo = 1;
function Ml(n) {
  qo += n;
}
function Bm(n) {
  return n.dynamicChildren = qo > 0 ? Nt || uo : null, Cp(), qo > 0 && Nt && Nt.push(n), n;
}
function Ps(n, e, t, r, s, o) {
  return Bm(
    Jm(
      n,
      e,
      t,
      r,
      s,
      o,
      !0
    )
  );
}
function so(n, e, t, r, s) {
  return Bm(
    sn(
      n,
      e,
      t,
      r,
      s,
      !0
    )
  );
}
function il(n) {
  return n ? n.__v_isVNode === !0 : !1;
}
function vo(n, e) {
  return e.shapeFlag & 6 && io.has(e.type) ? (n.shapeFlag &= -257, e.shapeFlag &= -513, !1) : n.type === e.type && n.key === e.key;
}
const Up = (...n) => qp(
  ...n
), Hu = "__vInternal", Am = ({ key: n }) => n ?? null, pu = ({
  ref: n,
  ref_key: e,
  ref_for: t
}) => (typeof n == "number" && (n = "" + n), n != null ? Re(n) || Ve(n) || ie(n) ? { i: ot, r: n, k: e, f: !!t } : n : null);
function Jm(n, e = null, t = null, r = 0, s = null, o = n === Tt ? 0 : 1, u = !1, c = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: n,
    props: e,
    key: e && Am(e),
    ref: e && pu(e),
    scopeId: lm,
    slotScopeIds: null,
    children: t,
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
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: ot
  };
  return c ? (sl(f, t), o & 128 && n.normalize(f)) : t && (f.shapeFlag |= Re(t) ? 8 : 16), f.key !== f.key && q("VNode created with invalid key (NaN). VNode type:", f.type), qo > 0 && // avoid a block node from tracking itself
  !u && // has current parent block
  Nt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && Nt.push(f), f;
}
const sn = Up;
function qp(n, e = null, t = null, r = 0, s = null, o = !1) {
  if ((!n || n === _h) && (n || q(`Invalid vnode type when creating vnode: ${n}.`), n = ct), il(n)) {
    const c = Ds(
      n,
      e,
      !0
      /* mergeRef: true */
    );
    return t && sl(c, t), qo > 0 && !o && Nt && (c.shapeFlag & 6 ? Nt[Nt.indexOf(n)] = c : Nt.push(c)), c.patchFlag |= -2, c;
  }
  if (Cm(n) && (n = n.__vccOpts), e) {
    e = Dp(e);
    let { class: c, style: f } = e;
    c && !Re(c) && (e.class = Mc(c)), Se(f) && (yc(f) && !ne(f) && (f = Be({}, f)), e.style = Fs(f));
  }
  const u = Re(n) ? 1 : Kh(n) ? 128 : Rp(n) ? 64 : Se(n) ? 4 : ie(n) ? 2 : 0;
  return u & 4 && yc(n) && (n = ae(n), q(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    n
  )), Jm(
    n,
    e,
    t,
    r,
    s,
    u,
    o,
    !0
  );
}
function Dp(n) {
  return n ? yc(n) || Hu in n ? Be({}, n) : n : null;
}
function Ds(n, e, t = !1) {
  const { props: r, ref: s, patchFlag: o, children: u } = n, c = e ? Kp(r || {}, e) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: n.type,
    props: c,
    key: c && Am(c),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      t && s ? ne(s) ? s.concat(pu(e)) : [s, pu(e)] : pu(e)
    ) : s,
    scopeId: n.scopeId,
    slotScopeIds: n.slotScopeIds,
    children: o === -1 && ne(u) ? u.map(Rm) : u,
    target: n.target,
    targetAnchor: n.targetAnchor,
    staticCount: n.staticCount,
    shapeFlag: n.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: e && n.type !== Tt ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: n.dynamicProps,
    dynamicChildren: n.dynamicChildren,
    appContext: n.appContext,
    dirs: n.dirs,
    transition: n.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: n.component,
    suspense: n.suspense,
    ssContent: n.ssContent && Ds(n.ssContent),
    ssFallback: n.ssFallback && Ds(n.ssFallback),
    el: n.el,
    anchor: n.anchor,
    ctx: n.ctx,
    ce: n.ce
  };
}
function Rm(n) {
  const e = Ds(n);
  return ne(n.children) && (e.children = n.children.map(Rm)), e;
}
function Fp(n = " ", e = 0) {
  return sn(Ha, null, n, e);
}
function _p(n = "", e = !1) {
  return e ? (nt(), so(ct, null, n)) : sn(ct, null, n);
}
function vt(n) {
  return n == null || typeof n == "boolean" ? sn(ct) : ne(n) ? sn(
    Tt,
    null,
    // #3666, avoid reference pollution when reusing vnode
    n.slice()
  ) : typeof n == "object" ? ii(n) : sn(Ha, null, String(n));
}
function ii(n) {
  return n.el === null && n.patchFlag !== -1 || n.memo ? n : Ds(n);
}
function sl(n, e) {
  let t = 0;
  const { shapeFlag: r } = n;
  if (e == null)
    e = null;
  else if (ne(e))
    t = 16;
  else if (typeof e == "object")
    if (r & 65) {
      const s = e.default;
      s && (s._c && (s._d = !1), sl(n, s()), s._c && (s._d = !0));
      return;
    } else {
      t = 32;
      const s = e._;
      !s && !(Hu in e) ? e._ctx = ot : s === 3 && ot && (ot.slots._ === 1 ? e._ = 1 : (e._ = 2, n.patchFlag |= 1024));
    }
  else
    ie(e) ? (e = { default: e, _ctx: ot }, t = 32) : (e = String(e), r & 64 ? (t = 16, e = [Fp(e)]) : t = 8);
  n.children = e, n.shapeFlag |= t;
}
function Kp(...n) {
  const e = {};
  for (let t = 0; t < n.length; t++) {
    const r = n[t];
    for (const s in r)
      if (s === "class")
        e.class !== r.class && (e.class = Mc([e.class, r.class]));
      else if (s === "style")
        e.style = Fs([e.style, r.style]);
      else if (Va(s)) {
        const o = e[s], u = r[s];
        u && o !== u && !(ne(o) && o.includes(u)) && (e[s] = o ? [].concat(o, u) : u);
      } else
        s !== "" && (e[s] = r[s]);
  }
  return e;
}
function At(n, e, t, r = null) {
  Ot(n, e, 7, [
    t,
    r
  ]);
}
const Mp = Tm();
let $p = 0;
function Vp(n, e, t) {
  const r = n.type, s = (e ? e.appContext : n.appContext) || Mp, o = {
    uid: $p++,
    vnode: n,
    type: r,
    parent: e,
    appContext: s,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new Fd(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: e ? e.provides : Object.create(s.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Em(r, s),
    emitsOptions: cm(r, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Ee,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: Ee,
    data: Ee,
    props: Ee,
    attrs: Ee,
    slots: Ee,
    refs: Ee,
    setupState: Ee,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense: t,
    suspenseId: t ? t.pendingId : 0,
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
  return o.ctx = rp(o), o.root = e ? e.root : o, o.emit = Lh.bind(null, o), n.ce && n.ce(o), o;
}
let De = null;
const Gp = () => De || ot;
let Au, Ac;
{
  const n = Kc(), e = (t, r) => {
    let s;
    return (s = n[t]) || (s = n[t] = []), s.push(r), (o) => {
      s.length > 1 ? s.forEach((u) => u(o)) : s[0](o);
    };
  };
  Au = e(
    "__VUE_INSTANCE_SETTERS__",
    (t) => De = t
  ), Ac = e(
    "__VUE_SSR_SETTERS__",
    (t) => Wu = t
  );
}
const Wa = (n) => {
  const e = De;
  return Au(n), n.scope.on(), () => {
    n.scope.off(), Au(e);
  };
}, $l = () => {
  De && De.scope.off(), Au(null);
}, jp = /* @__PURE__ */ Hr("slot,component");
function Jc(n, { isNativeTag: e }) {
  (jp(n) || e(n)) && q(
    "Do not use built-in or reserved HTML elements as component id: " + n
  );
}
function xm(n) {
  return n.vnode.shapeFlag & 4;
}
let Wu = !1;
function Hp(n, e = !1) {
  e && Ac(e);
  const { props: t, children: r } = n.vnode, s = xm(n);
  pp(n, t, s, e), Sp(n, r);
  const o = s ? Wp(n, e) : void 0;
  return e && Ac(!1), o;
}
function Wp(n, e) {
  var t;
  const r = n.type;
  {
    if (r.name && Jc(r.name, n.appContext.config), r.components) {
      const o = Object.keys(r.components);
      for (let u = 0; u < o.length; u++)
        Jc(o[u], n.appContext.config);
    }
    if (r.directives) {
      const o = Object.keys(r.directives);
      for (let u = 0; u < o.length; u++)
        hm(o[u]);
    }
    r.compilerOptions && zp() && q(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  n.accessCache = /* @__PURE__ */ Object.create(null), n.proxy = zf(new Proxy(n.ctx, ym)), ip(n);
  const { setup: s } = r;
  if (s) {
    const o = n.setupContext = s.length > 1 ? Qp(n) : null, u = Wa(n);
    _s();
    const c = Vr(
      s,
      n,
      0,
      [
        oo(n.props),
        o
      ]
    );
    if (Ks(), u(), Dc(c)) {
      if (c.then($l, $l), e)
        return c.then((f) => {
          Vl(n, f, e);
        }).catch((f) => {
          Ga(f, n, 0);
        });
      if (n.asyncDep = c, !n.suspense) {
        const f = (t = r.name) != null ? t : "Anonymous";
        q(
          `Component <${f}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Vl(n, c, e);
  } else
    Pm(n, e);
}
function Vl(n, e, t) {
  ie(e) ? n.type.__ssrInlineRender ? n.ssrRender = e : n.render = e : Se(e) ? (il(e) && q(
    "setup() should not return VNodes directly - return a render function instead."
  ), n.devtoolsRawSetupState = e, n.setupState = Qf(e), sp(n)) : e !== void 0 && q(
    `setup() should return an object. Received: ${e === null ? "null" : typeof e}`
  ), Pm(n, t);
}
let Rc;
const zp = () => !Rc;
function Pm(n, e, t) {
  const r = n.type;
  if (!n.render) {
    if (!e && Rc && !r.render) {
      const s = r.template || nl(n).template;
      if (s) {
        cn(n, "compile");
        const { isCustomElement: o, compilerOptions: u } = n.appContext.config, { delimiters: c, compilerOptions: f } = r, h = Be(
          Be(
            {
              isCustomElement: o,
              delimiters: c
            },
            u
          ),
          f
        );
        r.render = Rc(s, h), ln(n, "compile");
      }
    }
    n.render = r.render || We;
  }
  {
    const s = Wa(n);
    _s();
    try {
      ap(n);
    } finally {
      Ks(), s();
    }
  }
  !r.render && n.render === We && !e && (r.template ? q(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : q("Component is missing template or render function."));
}
function Xp(n) {
  return n.attrsProxy || (n.attrsProxy = new Proxy(
    n.attrs,
    {
      get(e, t) {
        return ku(), ze(n, "get", "$attrs"), e[t];
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
function Yp(n) {
  return n.slotsProxy || (n.slotsProxy = new Proxy(n.slots, {
    get(e, t) {
      return ze(n, "get", "$slots"), e[t];
    }
  }));
}
function Qp(n) {
  return Object.freeze({
    get attrs() {
      return Xp(n);
    },
    get slots() {
      return Yp(n);
    },
    get emit() {
      return (t, ...r) => n.emit(t, ...r);
    },
    expose: (t) => {
      if (n.exposed && q("expose() should be called only once per setup()."), t != null) {
        let r = typeof t;
        r === "object" && (ne(t) ? r = "array" : Ve(t) && (r = "ref")), r !== "object" && q(
          `expose() should be passed a plain object, received ${r}.`
        );
      }
      n.exposed = t || {};
    }
  });
}
function ol(n) {
  if (n.exposed)
    return n.exposeProxy || (n.exposeProxy = new Proxy(Qf(zf(n.exposed)), {
      get(e, t) {
        if (t in e)
          return e[t];
        if (t in Qs)
          return Qs[t](n);
      },
      has(e, t) {
        return t in e || t in Qs;
      }
    }));
}
const Zp = /(?:^|[-_])(\w)/g, eg = (n) => n.replace(Zp, (e) => e.toUpperCase()).replace(/[-_]/g, "");
function Lm(n, e = !0) {
  return ie(n) ? n.displayName || n.name : n.name || e && n.__name;
}
function zu(n, e, t = !1) {
  let r = Lm(e);
  if (!r && e.__file) {
    const s = e.__file.match(/([^/\\]+)\.\w+$/);
    s && (r = s[1]);
  }
  if (!r && n && n.parent) {
    const s = (o) => {
      for (const u in o)
        if (o[u] === e)
          return u;
    };
    r = s(
      n.components || n.parent.type.components
    ) || s(n.appContext.components);
  }
  return r ? eg(r) : t ? "App" : "Anonymous";
}
function Cm(n) {
  return ie(n) && "__vccOpts" in n;
}
const tg = (n, e) => {
  const t = ch(n, e, Wu);
  {
    const r = Gp();
    r && r.appContext.config.warnRecursiveComputed && (t._warnRecursive = !0);
  }
  return t;
};
function ng() {
  if (typeof window > "u")
    return;
  const n = { style: "color:#3ba776" }, e = { style: "color:#1677ff" }, t = { style: "color:#f5222d" }, r = { style: "color:#eb2f96" }, s = {
    header(p) {
      return Se(p) ? p.__isVue ? ["div", n, "VueInstance"] : Ve(p) ? [
        "div",
        {},
        ["span", n, d(p)],
        "<",
        c(p.value),
        ">"
      ] : zs(p) ? [
        "div",
        {},
        ["span", n, Xs(p) ? "ShallowReactive" : "Reactive"],
        "<",
        c(p),
        `>${qs(p) ? " (readonly)" : ""}`
      ] : qs(p) ? [
        "div",
        {},
        ["span", n, Xs(p) ? "ShallowReadonly" : "Readonly"],
        "<",
        c(p),
        ">"
      ] : null : null;
    },
    hasBody(p) {
      return p && p.__isVue;
    },
    body(p) {
      if (p && p.__isVue)
        return [
          "div",
          {},
          ...o(p.$)
        ];
    }
  };
  function o(p) {
    const T = [];
    p.type.props && p.props && T.push(u("props", ae(p.props))), p.setupState !== Ee && T.push(u("setup", p.setupState)), p.data !== Ee && T.push(u("data", ae(p.data)));
    const N = f(p, "computed");
    N && T.push(u("computed", N));
    const k = f(p, "inject");
    return k && T.push(u("injected", k)), T.push([
      "div",
      {},
      [
        "span",
        {
          style: r.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: p }]
    ]), T;
  }
  function u(p, T) {
    return T = Be({}, T), Object.keys(T).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        p
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(T).map((N) => [
          "div",
          {},
          ["span", r, N + ": "],
          c(T[N], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(p, T = !0) {
    return typeof p == "number" ? ["span", e, p] : typeof p == "string" ? ["span", t, JSON.stringify(p)] : typeof p == "boolean" ? ["span", r, p] : Se(p) ? ["object", { object: T ? ae(p) : p }] : ["span", t, String(p)];
  }
  function f(p, T) {
    const N = p.type;
    if (ie(N))
      return;
    const k = {};
    for (const K in p.ctx)
      h(N, K, T) && (k[K] = p.ctx[K]);
    return k;
  }
  function h(p, T, N) {
    const k = p[N];
    if (ne(k) && k.includes(T) || Se(k) && T in k || p.extends && h(p.extends, T, N) || p.mixins && p.mixins.some((K) => h(K, T, N)))
      return !0;
  }
  function d(p) {
    return Xs(p) ? "ShallowRef" : p.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
const Gl = "3.4.21", Zs = q;
/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const rg = "http://www.w3.org/2000/svg", ig = "http://www.w3.org/1998/Math/MathML", si = typeof document < "u" ? document : null, jl = si && /* @__PURE__ */ si.createElement("template"), sg = {
  insert: (n, e, t) => {
    e.insertBefore(n, t || null);
  },
  remove: (n) => {
    const e = n.parentNode;
    e && e.removeChild(n);
  },
  createElement: (n, e, t, r) => {
    const s = e === "svg" ? si.createElementNS(rg, n) : e === "mathml" ? si.createElementNS(ig, n) : si.createElement(n, t ? { is: t } : void 0);
    return n === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s;
  },
  createText: (n) => si.createTextNode(n),
  createComment: (n) => si.createComment(n),
  setText: (n, e) => {
    n.nodeValue = e;
  },
  setElementText: (n, e) => {
    n.textContent = e;
  },
  parentNode: (n) => n.parentNode,
  nextSibling: (n) => n.nextSibling,
  querySelector: (n) => si.querySelector(n),
  setScopeId(n, e) {
    n.setAttribute(e, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(n, e, t, r, s, o) {
    const u = t ? t.previousSibling : e.lastChild;
    if (s && (s === o || s.nextSibling))
      for (; e.insertBefore(s.cloneNode(!0), t), !(s === o || !(s = s.nextSibling)); )
        ;
    else {
      jl.innerHTML = r === "svg" ? `<svg>${n}</svg>` : r === "mathml" ? `<math>${n}</math>` : n;
      const c = jl.content;
      if (r === "svg" || r === "mathml") {
        const f = c.firstChild;
        for (; f.firstChild; )
          c.appendChild(f.firstChild);
        c.removeChild(f);
      }
      e.insertBefore(c, t);
    }
    return [
      // first
      u ? u.nextSibling : e.firstChild,
      // last
      t ? t.previousSibling : e.lastChild
    ];
  }
}, og = Symbol("_vtc");
function ag(n, e, t) {
  const r = n[og];
  r && (e = (e ? [e, ...r] : [...r]).join(" ")), e == null ? n.removeAttribute("class") : t ? n.setAttribute("class", e) : n.className = e;
}
const Hl = Symbol("_vod"), ug = Symbol("_vsh"), cg = Symbol("CSS_VAR_TEXT"), lg = /(^|;)\s*display\s*:/;
function fg(n, e, t) {
  const r = n.style, s = Re(t);
  let o = !1;
  if (t && !s) {
    if (e)
      if (Re(e))
        for (const u of e.split(";")) {
          const c = u.slice(0, u.indexOf(":")).trim();
          t[c] == null && gu(r, c, "");
        }
      else
        for (const u in e)
          t[u] == null && gu(r, u, "");
    for (const u in t)
      u === "display" && (o = !0), gu(r, u, t[u]);
  } else if (s) {
    if (e !== t) {
      const u = r[cg];
      u && (t += ";" + u), r.cssText = t, o = lg.test(t);
    }
  } else
    e && n.removeAttribute("style");
  Hl in n && (n[Hl] = o ? r.display : "", n[ug] && (r.display = "none"));
}
const mg = /[^\\];\s*$/, Wl = /\s*!important$/;
function gu(n, e, t) {
  if (ne(t))
    t.forEach((r) => gu(n, e, r));
  else if (t == null && (t = ""), mg.test(t) && Zs(
    `Unexpected semicolon at the end of '${e}' style value: '${t}'`
  ), e.startsWith("--"))
    n.setProperty(e, t);
  else {
    const r = dg(n, e);
    Wl.test(t) ? n.setProperty(
      Ls(r),
      t.replace(Wl, ""),
      "important"
    ) : n[r] = t;
  }
}
const zl = ["Webkit", "Moz", "ms"], rc = {};
function dg(n, e) {
  const t = rc[e];
  if (t)
    return t;
  let r = mo(e);
  if (r !== "filter" && r in n)
    return rc[e] = r;
  r = Du(r);
  for (let s = 0; s < zl.length; s++) {
    const o = zl[s] + r;
    if (o in n)
      return rc[e] = o;
  }
  return e;
}
const Xl = "http://www.w3.org/1999/xlink";
function hg(n, e, t, r, s) {
  if (r && e.startsWith("xlink:"))
    t == null ? n.removeAttributeNS(Xl, e.slice(6, e.length)) : n.setAttributeNS(Xl, e, t);
  else {
    const o = Dd(e);
    t == null || o && !Pf(t) ? n.removeAttribute(e) : n.setAttribute(e, o ? "" : t);
  }
}
function pg(n, e, t, r, s, o, u) {
  if (e === "innerHTML" || e === "textContent") {
    r && u(r, s, o), n[e] = t ?? "";
    return;
  }
  const c = n.tagName;
  if (e === "value" && c !== "PROGRESS" && // custom elements may use _value internally
  !c.includes("-")) {
    const h = c === "OPTION" ? n.getAttribute("value") || "" : n.value, d = t ?? "";
    (h !== d || !("_value" in n)) && (n.value = d), t == null && n.removeAttribute(e), n._value = t;
    return;
  }
  let f = !1;
  if (t === "" || t == null) {
    const h = typeof n[e];
    h === "boolean" ? t = Pf(t) : t == null && h === "string" ? (t = "", f = !0) : h === "number" && (t = 0, f = !0);
  }
  try {
    n[e] = t;
  } catch (h) {
    f || Zs(
      `Failed setting prop "${e}" on <${c.toLowerCase()}>: value ${t} is invalid.`,
      h
    );
  }
  f && n.removeAttribute(e);
}
function gg(n, e, t, r) {
  n.addEventListener(e, t, r);
}
function yg(n, e, t, r) {
  n.removeEventListener(e, t, r);
}
const Yl = Symbol("_vei");
function wg(n, e, t, r, s = null) {
  const o = n[Yl] || (n[Yl] = {}), u = o[e];
  if (r && u)
    u.value = r;
  else {
    const [c, f] = Tg(e);
    if (r) {
      const h = o[e] = Ng(r, s);
      gg(n, c, h, f);
    } else
      u && (yg(n, c, u, f), o[e] = void 0);
  }
}
const Ql = /(?:Once|Passive|Capture)$/;
function Tg(n) {
  let e;
  if (Ql.test(n)) {
    e = {};
    let r;
    for (; r = n.match(Ql); )
      n = n.slice(0, n.length - r[0].length), e[r[0].toLowerCase()] = !0;
  }
  return [n[2] === ":" ? n.slice(3) : Ls(n.slice(2)), e];
}
let ic = 0;
const vg = /* @__PURE__ */ Promise.resolve(), Eg = () => ic || (vg.then(() => ic = 0), ic = Date.now());
function Ng(n, e) {
  const t = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= t.attached)
      return;
    Ot(
      bg(r, t.value),
      e,
      5,
      [r]
    );
  };
  return t.value = n, t.attached = Eg(), t;
}
function bg(n, e) {
  if (ne(e)) {
    const t = n.stopImmediatePropagation;
    return n.stopImmediatePropagation = () => {
      t.call(n), n._stopped = !0;
    }, e.map((r) => (s) => !s._stopped && r && r(s));
  } else
    return e;
}
const Zl = (n) => n.charCodeAt(0) === 111 && n.charCodeAt(1) === 110 && // lowercase letter
n.charCodeAt(2) > 96 && n.charCodeAt(2) < 123, Sg = (n, e, t, r, s, o, u, c, f) => {
  const h = s === "svg";
  e === "class" ? ag(n, r, h) : e === "style" ? fg(n, t, r) : Va(e) ? Nu(e) || wg(n, e, t, r, u) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : kg(n, e, r, h)) ? pg(
    n,
    e,
    r,
    o,
    u,
    c,
    f
  ) : (e === "true-value" ? n._trueValue = r : e === "false-value" && (n._falseValue = r), hg(n, e, r, h));
};
function kg(n, e, t, r) {
  if (r)
    return !!(e === "innerHTML" || e === "textContent" || e in n && Zl(e) && ie(t));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "form" || e === "list" && n.tagName === "INPUT" || e === "type" && n.tagName === "TEXTAREA")
    return !1;
  if (e === "width" || e === "height") {
    const s = n.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Zl(e) && Re(t) ? !1 : e in n;
}
const Ig = /* @__PURE__ */ Be({ patchProp: Sg }, sg);
let ef;
function Og() {
  return ef || (ef = Op(Ig));
}
const Um = (...n) => {
  const e = Og().createApp(...n);
  Ag(e), Jg(e);
  const { mount: t } = e;
  return e.mount = (r) => {
    const s = Rg(r);
    if (!s)
      return;
    const o = e._component;
    !ie(o) && !o.render && !o.template && (o.template = s.innerHTML), s.innerHTML = "";
    const u = t(s, !1, Bg(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), u;
  }, e;
};
function Bg(n) {
  if (n instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && n instanceof MathMLElement)
    return "mathml";
}
function Ag(n) {
  Object.defineProperty(n.config, "isNativeTag", {
    value: (e) => Ld(e) || Cd(e) || Ud(e),
    writable: !1
  });
}
function Jg(n) {
  {
    const e = n.config.isCustomElement;
    Object.defineProperty(n.config, "isCustomElement", {
      get() {
        return e;
      },
      set() {
        Zs(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const t = n.config.compilerOptions, r = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(n.config, "compilerOptions", {
      get() {
        return Zs(r), t;
      },
      set() {
        Zs(r);
      }
    });
  }
}
function Rg(n) {
  if (Re(n)) {
    const e = document.querySelector(n);
    return e || Zs(
      `Failed to mount app: mount target selector "${n}" returned null.`
    ), e;
  }
  return window.ShadowRoot && n instanceof window.ShadowRoot && n.mode === "closed" && Zs(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), n;
}
/**
* vue v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function xg() {
  ng();
}
xg();
const Pg = (n) => new Error(`Unknown element type: ${n}`), Lg = () => new Error("invalid size"), qm = () => new Error("destination is required"), Dm = () => new Error("amount is required"), Fm = () => new Error("currency is required"), Cg = () => new Error("invalid currency"), Do = () => new Error("unexpected error"), Ug = () => new Error("cannot derive nonce from both clientSecret and idempotencyKey"), qg = () => new Error("invalid value"), _m = () => new Error("invalid mode"), al = () => new Error("login is required"), Fo = () => new Error("login verifier is required"), ul = () => new Error("login domain is required"), Dg = () => new Error("invalid login domain"), Fg = () => new Error("login subdomains are not supported"), _g = () => new Error("login IP addresses are not supported"), Kg = () => new Error("login localhost is not supported"), Mg = () => new Error("login ports are not supported"), tf = () => new Error("login expected domain name but received a path");
function Qe(n, e) {
  if (!n)
    throw new Error(e);
}
const $g = 34028234663852886e22, Vg = -34028234663852886e22, Gg = 4294967295, jg = 2147483647, Hg = -2147483648;
function yu(n) {
  if (typeof n != "number")
    throw new Error("invalid int 32: " + typeof n);
  if (!Number.isInteger(n) || n > jg || n < Hg)
    throw new Error("invalid int 32: " + n);
}
function xc(n) {
  if (typeof n != "number")
    throw new Error("invalid uint 32: " + typeof n);
  if (!Number.isInteger(n) || n > Gg || n < 0)
    throw new Error("invalid uint 32: " + n);
}
function Km(n) {
  if (typeof n != "number")
    throw new Error("invalid float 32: " + typeof n);
  if (Number.isFinite(n) && (n > $g || n < Vg))
    throw new Error("invalid float 32: " + n);
}
const Mm = Symbol("@bufbuild/protobuf/enum-type");
function Wg(n) {
  const e = n[Mm];
  return Qe(e, "missing enum type on enum object"), e;
}
function $m(n, e, t, r) {
  n[Mm] = Vm(e, t.map((s) => ({
    no: s.no,
    name: s.name,
    localName: n[s.no]
  })));
}
function Vm(n, e, t) {
  const r = /* @__PURE__ */ Object.create(null), s = /* @__PURE__ */ Object.create(null), o = [];
  for (const u of e) {
    const c = Gm(u);
    o.push(c), r[u.name] = c, s[u.no] = c;
  }
  return {
    typeName: n,
    values: o,
    // We do not surface options at this time
    // options: opt?.options ?? Object.create(null),
    findName(u) {
      return r[u];
    },
    findNumber(u) {
      return s[u];
    }
  };
}
function zg(n, e, t) {
  const r = {};
  for (const s of e) {
    const o = Gm(s);
    r[o.localName] = o.no, r[o.no] = o.localName;
  }
  return $m(r, n, e), r;
}
function Gm(n) {
  return "localName" in n ? n : Object.assign(Object.assign({}, n), { localName: n.name });
}
let w = class {
  /**
   * Compare with a message of the same type.
   */
  equals(n) {
    return this.getType().runtime.util.equals(this.getType(), this, n);
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
  fromBinary(n, e) {
    const t = this.getType(), r = t.runtime.bin, s = r.makeReadOptions(e);
    return r.readMessage(this, s.readerFactory(n), n.byteLength, s), this;
  }
  /**
   * Parse a message from a JSON value.
   */
  fromJson(n, e) {
    const t = this.getType(), r = t.runtime.json, s = r.makeReadOptions(e);
    return r.readMessage(t, n, s, this), this;
  }
  /**
   * Parse a message from a JSON string.
   */
  fromJsonString(n, e) {
    let t;
    try {
      t = JSON.parse(n);
    } catch (r) {
      throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${r instanceof Error ? r.message : String(r)}`);
    }
    return this.fromJson(t, e);
  }
  /**
   * Serialize the message to binary data.
   */
  toBinary(n) {
    const e = this.getType(), t = e.runtime.bin, r = t.makeWriteOptions(n), s = r.writerFactory();
    return t.writeMessage(this, s, r), s.finish();
  }
  /**
   * Serialize the message to a JSON value, a JavaScript value that can be
   * passed to JSON.stringify().
   */
  toJson(n) {
    const e = this.getType(), t = e.runtime.json, r = t.makeWriteOptions(n);
    return t.writeMessage(this, r);
  }
  /**
   * Serialize the message to a JSON string.
   */
  toJsonString(n) {
    var e;
    const t = this.toJson(n);
    return JSON.stringify(t, null, (e = n == null ? void 0 : n.prettySpaces) !== null && e !== void 0 ? e : 0);
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
function Xg(n, e, t, r) {
  var s;
  const o = (s = r == null ? void 0 : r.localName) !== null && s !== void 0 ? s : e.substring(e.lastIndexOf(".") + 1), u = {
    [o]: function(c) {
      n.util.initFields(this), n.util.initPartial(c, this);
    }
  }[o];
  return Object.setPrototypeOf(u.prototype, new w()), Object.assign(u, {
    runtime: n,
    typeName: e,
    fields: n.util.newFieldList(t),
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
      return n.util.equals(u, c, f);
    }
  }), u;
}
var B;
(function(n) {
  n[n.DOUBLE = 1] = "DOUBLE", n[n.FLOAT = 2] = "FLOAT", n[n.INT64 = 3] = "INT64", n[n.UINT64 = 4] = "UINT64", n[n.INT32 = 5] = "INT32", n[n.FIXED64 = 6] = "FIXED64", n[n.FIXED32 = 7] = "FIXED32", n[n.BOOL = 8] = "BOOL", n[n.STRING = 9] = "STRING", n[n.BYTES = 12] = "BYTES", n[n.UINT32 = 13] = "UINT32", n[n.SFIXED32 = 15] = "SFIXED32", n[n.SFIXED64 = 16] = "SFIXED64", n[n.SINT32 = 17] = "SINT32", n[n.SINT64 = 18] = "SINT64";
})(B || (B = {}));
var to;
(function(n) {
  n[n.BIGINT = 0] = "BIGINT", n[n.STRING = 1] = "STRING";
})(to || (to = {}));
function Yg() {
  let n = 0, e = 0;
  for (let r = 0; r < 28; r += 7) {
    let s = this.buf[this.pos++];
    if (n |= (s & 127) << r, !(s & 128))
      return this.assertBounds(), [n, e];
  }
  let t = this.buf[this.pos++];
  if (n |= (t & 15) << 28, e = (t & 112) >> 4, !(t & 128))
    return this.assertBounds(), [n, e];
  for (let r = 3; r <= 31; r += 7) {
    let s = this.buf[this.pos++];
    if (e |= (s & 127) << r, !(s & 128))
      return this.assertBounds(), [n, e];
  }
  throw new Error("invalid varint");
}
function sc(n, e, t) {
  for (let o = 0; o < 28; o = o + 7) {
    const u = n >>> o, c = !(!(u >>> 7) && e == 0), f = (c ? u | 128 : u) & 255;
    if (t.push(f), !c)
      return;
  }
  const r = n >>> 28 & 15 | (e & 7) << 4, s = !!(e >> 3);
  if (t.push((s ? r | 128 : r) & 255), !!s) {
    for (let o = 3; o < 31; o = o + 7) {
      const u = e >>> o, c = !!(u >>> 7), f = (c ? u | 128 : u) & 255;
      if (t.push(f), !c)
        return;
    }
    t.push(e >>> 31 & 1);
  }
}
const wu = 4294967296;
function nf(n) {
  const e = n[0] === "-";
  e && (n = n.slice(1));
  const t = 1e6;
  let r = 0, s = 0;
  function o(u, c) {
    const f = Number(n.slice(u, c));
    s *= t, r = r * t + f, r >= wu && (s = s + (r / wu | 0), r = r % wu);
  }
  return o(-24, -18), o(-18, -12), o(-12, -6), o(-6), e ? Hm(r, s) : cl(r, s);
}
function Qg(n, e) {
  let t = cl(n, e);
  const r = t.hi & 2147483648;
  r && (t = Hm(t.lo, t.hi));
  const s = jm(t.lo, t.hi);
  return r ? "-" + s : s;
}
function jm(n, e) {
  if ({ lo: n, hi: e } = Zg(n, e), e <= 2097151)
    return String(wu * e + n);
  const t = n & 16777215, r = (n >>> 24 | e << 8) & 16777215, s = e >> 16 & 65535;
  let o = t + r * 6777216 + s * 6710656, u = r + s * 8147497, c = s * 2;
  const f = 1e7;
  return o >= f && (u += Math.floor(o / f), o %= f), u >= f && (c += Math.floor(u / f), u %= f), c.toString() + rf(u) + rf(o);
}
function Zg(n, e) {
  return { lo: n >>> 0, hi: e >>> 0 };
}
function cl(n, e) {
  return { lo: n | 0, hi: e | 0 };
}
function Hm(n, e) {
  return e = ~e, n ? n = ~n + 1 : e += 1, cl(n, e);
}
const rf = (n) => {
  const e = String(n);
  return "0000000".slice(e.length) + e;
};
function sf(n, e) {
  if (n >= 0) {
    for (; n > 127; )
      e.push(n & 127 | 128), n = n >>> 7;
    e.push(n);
  } else {
    for (let t = 0; t < 9; t++)
      e.push(n & 127 | 128), n = n >> 7;
    e.push(1);
  }
}
function ey() {
  let n = this.buf[this.pos++], e = n & 127;
  if (!(n & 128))
    return this.assertBounds(), e;
  if (n = this.buf[this.pos++], e |= (n & 127) << 7, !(n & 128))
    return this.assertBounds(), e;
  if (n = this.buf[this.pos++], e |= (n & 127) << 14, !(n & 128))
    return this.assertBounds(), e;
  if (n = this.buf[this.pos++], e |= (n & 127) << 21, !(n & 128))
    return this.assertBounds(), e;
  n = this.buf[this.pos++], e |= (n & 15) << 28;
  for (let t = 5; n & 128 && t < 10; t++)
    n = this.buf[this.pos++];
  if (n & 128)
    throw new Error("invalid varint");
  return this.assertBounds(), e >>> 0;
}
function ty() {
  const n = new DataView(new ArrayBuffer(8));
  if (typeof BigInt == "function" && typeof n.getBigInt64 == "function" && typeof n.getBigUint64 == "function" && typeof n.setBigInt64 == "function" && typeof n.setBigUint64 == "function" && (typeof process != "object" || typeof { NODE_ENV: '"production"', SDK_PATH: "https://sdk.getcode.com/v1/elements" } != "object" || { NODE_ENV: '"production"', SDK_PATH: "https://sdk.getcode.com/v1/elements" }.BUF_BIGINT_DISABLE !== "1")) {
    const r = BigInt("-9223372036854775808"), s = BigInt("9223372036854775807"), o = BigInt("0"), u = BigInt("18446744073709551615");
    return {
      zero: BigInt(0),
      supported: !0,
      parse(c) {
        const f = typeof c == "bigint" ? c : BigInt(c);
        if (f > s || f < r)
          throw new Error(`int64 invalid: ${c}`);
        return f;
      },
      uParse(c) {
        const f = typeof c == "bigint" ? c : BigInt(c);
        if (f > u || f < o)
          throw new Error(`uint64 invalid: ${c}`);
        return f;
      },
      enc(c) {
        return n.setBigInt64(0, this.parse(c), !0), {
          lo: n.getInt32(0, !0),
          hi: n.getInt32(4, !0)
        };
      },
      uEnc(c) {
        return n.setBigInt64(0, this.uParse(c), !0), {
          lo: n.getInt32(0, !0),
          hi: n.getInt32(4, !0)
        };
      },
      dec(c, f) {
        return n.setInt32(0, c, !0), n.setInt32(4, f, !0), n.getBigInt64(0, !0);
      },
      uDec(c, f) {
        return n.setInt32(0, c, !0), n.setInt32(4, f, !0), n.getBigUint64(0, !0);
      }
    };
  }
  const e = (r) => Qe(/^-?[0-9]+$/.test(r), `int64 invalid: ${r}`), t = (r) => Qe(/^[0-9]+$/.test(r), `uint64 invalid: ${r}`);
  return {
    zero: "0",
    supported: !1,
    parse(r) {
      return typeof r != "string" && (r = r.toString()), e(r), r;
    },
    uParse(r) {
      return typeof r != "string" && (r = r.toString()), t(r), r;
    },
    enc(r) {
      return typeof r != "string" && (r = r.toString()), e(r), nf(r);
    },
    uEnc(r) {
      return typeof r != "string" && (r = r.toString()), t(r), nf(r);
    },
    dec(r, s) {
      return Qg(r, s);
    },
    uDec(r, s) {
      return jm(r, s);
    }
  };
}
const ce = ty();
var be;
(function(n) {
  n[n.Varint = 0] = "Varint", n[n.Bit64 = 1] = "Bit64", n[n.LengthDelimited = 2] = "LengthDelimited", n[n.StartGroup = 3] = "StartGroup", n[n.EndGroup = 4] = "EndGroup", n[n.Bit32 = 5] = "Bit32";
})(be || (be = {}));
class ny {
  constructor(e) {
    this.stack = [], this.textEncoder = e ?? new TextEncoder(), this.chunks = [], this.buf = [];
  }
  /**
   * Return all bytes written and reset this writer.
   */
  finish() {
    this.chunks.push(new Uint8Array(this.buf));
    let e = 0;
    for (let s = 0; s < this.chunks.length; s++)
      e += this.chunks[s].length;
    let t = new Uint8Array(e), r = 0;
    for (let s = 0; s < this.chunks.length; s++)
      t.set(this.chunks[s], r), r += this.chunks[s].length;
    return this.chunks = [], t;
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
    let e = this.finish(), t = this.stack.pop();
    if (!t)
      throw new Error("invalid state, fork stack empty");
    return this.chunks = t.chunks, this.buf = t.buf, this.uint32(e.byteLength), this.raw(e);
  }
  /**
   * Writes a tag (field number and wire type).
   *
   * Equivalent to `uint32( (fieldNo << 3 | type) >>> 0 )`.
   *
   * Generated code should compute the tag ahead of time and call `uint32()`.
   */
  tag(e, t) {
    return this.uint32((e << 3 | t) >>> 0);
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
    for (xc(e); e > 127; )
      this.buf.push(e & 127 | 128), e = e >>> 7;
    return this.buf.push(e), this;
  }
  /**
   * Write a `int32` value, a signed 32 bit varint.
   */
  int32(e) {
    return yu(e), sf(e, this.buf), this;
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
    let t = this.textEncoder.encode(e);
    return this.uint32(t.byteLength), this.raw(t);
  }
  /**
   * Write a `float` value, 32-bit floating point number.
   */
  float(e) {
    Km(e);
    let t = new Uint8Array(4);
    return new DataView(t.buffer).setFloat32(0, e, !0), this.raw(t);
  }
  /**
   * Write a `double` value, a 64-bit floating point number.
   */
  double(e) {
    let t = new Uint8Array(8);
    return new DataView(t.buffer).setFloat64(0, e, !0), this.raw(t);
  }
  /**
   * Write a `fixed32` value, an unsigned, fixed-length 32-bit integer.
   */
  fixed32(e) {
    xc(e);
    let t = new Uint8Array(4);
    return new DataView(t.buffer).setUint32(0, e, !0), this.raw(t);
  }
  /**
   * Write a `sfixed32` value, a signed, fixed-length 32-bit integer.
   */
  sfixed32(e) {
    yu(e);
    let t = new Uint8Array(4);
    return new DataView(t.buffer).setInt32(0, e, !0), this.raw(t);
  }
  /**
   * Write a `sint32` value, a signed, zigzag-encoded 32-bit varint.
   */
  sint32(e) {
    return yu(e), e = (e << 1 ^ e >> 31) >>> 0, sf(e, this.buf), this;
  }
  /**
   * Write a `fixed64` value, a signed, fixed-length 64-bit integer.
   */
  sfixed64(e) {
    let t = new Uint8Array(8), r = new DataView(t.buffer), s = ce.enc(e);
    return r.setInt32(0, s.lo, !0), r.setInt32(4, s.hi, !0), this.raw(t);
  }
  /**
   * Write a `fixed64` value, an unsigned, fixed-length 64 bit integer.
   */
  fixed64(e) {
    let t = new Uint8Array(8), r = new DataView(t.buffer), s = ce.uEnc(e);
    return r.setInt32(0, s.lo, !0), r.setInt32(4, s.hi, !0), this.raw(t);
  }
  /**
   * Write a `int64` value, a signed 64-bit varint.
   */
  int64(e) {
    let t = ce.enc(e);
    return sc(t.lo, t.hi, this.buf), this;
  }
  /**
   * Write a `sint64` value, a signed, zig-zag-encoded 64-bit varint.
   */
  sint64(e) {
    let t = ce.enc(e), r = t.hi >> 31, s = t.lo << 1 ^ r, o = (t.hi << 1 | t.lo >>> 31) ^ r;
    return sc(s, o, this.buf), this;
  }
  /**
   * Write a `uint64` value, an unsigned 64-bit varint.
   */
  uint64(e) {
    let t = ce.uEnc(e);
    return sc(t.lo, t.hi, this.buf), this;
  }
}
class ry {
  constructor(e, t) {
    this.varint64 = Yg, this.uint32 = ey, this.buf = e, this.len = e.length, this.pos = 0, this.view = new DataView(e.buffer, e.byteOffset, e.byteLength), this.textDecoder = t ?? new TextDecoder();
  }
  /**
   * Reads a tag - field number and wire type.
   */
  tag() {
    let e = this.uint32(), t = e >>> 3, r = e & 7;
    if (t <= 0 || r < 0 || r > 5)
      throw new Error("illegal tag: field no " + t + " wire type " + r);
    return [t, r];
  }
  /**
   * Skip one element on the wire and return the skipped data.
   * Supports WireType.StartGroup since v2.0.0-alpha.23.
   */
  skip(e) {
    let t = this.pos;
    switch (e) {
      case be.Varint:
        for (; this.buf[this.pos++] & 128; )
          ;
        break;
      case be.Bit64:
        this.pos += 4;
      case be.Bit32:
        this.pos += 4;
        break;
      case be.LengthDelimited:
        let r = this.uint32();
        this.pos += r;
        break;
      case be.StartGroup:
        let s;
        for (; (s = this.tag()[1]) !== be.EndGroup; )
          this.skip(s);
        break;
      default:
        throw new Error("cant skip wire type " + e);
    }
    return this.assertBounds(), this.buf.subarray(t, this.pos);
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
    return ce.dec(...this.varint64());
  }
  /**
   * Read a `uint64` field, an unsigned 64-bit varint.
   */
  uint64() {
    return ce.uDec(...this.varint64());
  }
  /**
   * Read a `sint64` field, a signed, zig-zag-encoded 64-bit varint.
   */
  sint64() {
    let [e, t] = this.varint64(), r = -(e & 1);
    return e = (e >>> 1 | (t & 1) << 31) ^ r, t = t >>> 1 ^ r, ce.dec(e, t);
  }
  /**
   * Read a `bool` field, a variant.
   */
  bool() {
    let [e, t] = this.varint64();
    return e !== 0 || t !== 0;
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
    return ce.uDec(this.sfixed32(), this.sfixed32());
  }
  /**
   * Read a `fixed64` field, a signed, fixed-length 64-bit integer.
   */
  sfixed64() {
    return ce.dec(this.sfixed32(), this.sfixed32());
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
    let e = this.uint32(), t = this.pos;
    return this.pos += e, this.assertBounds(), this.buf.subarray(t, t + e);
  }
  /**
   * Read a `string` field, length-delimited data converted to UTF-8 text.
   */
  string() {
    return this.textDecoder.decode(this.bytes());
  }
}
function Xr(n, e, t) {
  if (e === t)
    return !0;
  if (n == B.BYTES) {
    if (!(e instanceof Uint8Array) || !(t instanceof Uint8Array) || e.length !== t.length)
      return !1;
    for (let r = 0; r < e.length; r++)
      if (e[r] !== t[r])
        return !1;
    return !0;
  }
  switch (n) {
    case B.UINT64:
    case B.FIXED64:
    case B.INT64:
    case B.SFIXED64:
    case B.SINT64:
      return e == t;
  }
  return !1;
}
function Ju(n, e) {
  switch (n) {
    case B.BOOL:
      return !1;
    case B.UINT64:
    case B.FIXED64:
    case B.INT64:
    case B.SFIXED64:
    case B.SINT64:
      return e == 0 ? ce.zero : "0";
    case B.DOUBLE:
    case B.FLOAT:
      return 0;
    case B.BYTES:
      return new Uint8Array(0);
    case B.STRING:
      return "";
    default:
      return 0;
  }
}
function Wm(n, e) {
  const t = e === void 0;
  let r = be.Varint, s = e === 0;
  switch (n) {
    case B.STRING:
      s = t || !e.length, r = be.LengthDelimited;
      break;
    case B.BOOL:
      s = e === !1;
      break;
    case B.DOUBLE:
      r = be.Bit64;
      break;
    case B.FLOAT:
      r = be.Bit32;
      break;
    case B.INT64:
      s = t || e == 0;
      break;
    case B.UINT64:
      s = t || e == 0;
      break;
    case B.FIXED64:
      s = t || e == 0, r = be.Bit64;
      break;
    case B.BYTES:
      s = t || !e.byteLength, r = be.LengthDelimited;
      break;
    case B.FIXED32:
      r = be.Bit32;
      break;
    case B.SFIXED32:
      r = be.Bit32;
      break;
    case B.SFIXED64:
      s = t || e == 0, r = be.Bit64;
      break;
    case B.SINT64:
      s = t || e == 0;
      break;
  }
  const o = B[n].toLowerCase();
  return [r, o, t || s];
}
function iy(n, e, t, r) {
  let s;
  return {
    typeName: e,
    extendee: t,
    get field() {
      if (!s) {
        const o = typeof r == "function" ? r() : r;
        o.name = e.split(".").pop(), o.jsonName = `[${e}]`, s = n.util.newFieldList([o]).list()[0];
      }
      return s;
    },
    runtime: n
  };
}
function zm(n) {
  const e = n.field.localName, t = /* @__PURE__ */ Object.create(null);
  return t[e] = sy(n), [t, () => t[e]];
}
function sy(n) {
  const e = n.field;
  if (e.repeated)
    return [];
  if (e.default !== void 0)
    return e.default;
  switch (e.kind) {
    case "enum":
      return e.T.values[0].no;
    case "scalar":
      return Ju(e.T, e.L);
    case "message":
      const t = e.T, r = new t();
      return t.fieldWrapper ? t.fieldWrapper.unwrapField(r) : r;
    case "map":
      throw "map fields are not allowed to be extensions";
  }
}
function oy(n, e) {
  if (!e.repeated && (e.kind == "enum" || e.kind == "scalar")) {
    for (let t = n.length - 1; t >= 0; --t)
      if (n[t].no == e.no)
        return [n[t]];
    return [];
  }
  return n.filter((t) => t.no === e.no);
}
function ay(n, e, t, r) {
  return {
    syntax: n,
    json: e,
    bin: t,
    util: r,
    makeMessageType(s, o, u) {
      return Xg(this, s, o, u);
    },
    makeEnum: zg,
    makeEnumType: Vm,
    getEnumType: Wg,
    makeExtension(s, o, u) {
      return iy(this, s, o, u);
    }
  };
}
function Xm(n, e) {
  return e instanceof w || !n.fieldWrapper ? e : n.fieldWrapper.wrapField(e);
}
B.DOUBLE, B.FLOAT, B.INT64, B.UINT64, B.INT32, B.UINT32, B.BOOL, B.STRING, B.BYTES;
const no = Symbol("@bufbuild/protobuf/unknown-fields"), of = {
  readUnknownFields: !0,
  readerFactory: (n) => new ry(n)
}, af = {
  writeUnknownFields: !0,
  writerFactory: () => new ny()
};
function uy(n) {
  return n ? Object.assign(Object.assign({}, of), n) : of;
}
function cy(n) {
  return n ? Object.assign(Object.assign({}, af), n) : af;
}
function ly() {
  return {
    makeReadOptions: uy,
    makeWriteOptions: cy,
    listUnknownFields(n) {
      var e;
      return (e = n[no]) !== null && e !== void 0 ? e : [];
    },
    discardUnknownFields(n) {
      delete n[no];
    },
    writeUnknownFields(n, e) {
      const t = n[no];
      if (t)
        for (const r of t)
          e.tag(r.no, r.wireType).raw(r.data);
    },
    onUnknownField(n, e, t, r) {
      const s = n;
      Array.isArray(s[no]) || (s[no] = []), s[no].push({ no: e, wireType: t, data: r });
    },
    readMessage(n, e, t, r, s) {
      const o = n.getType(), u = s ? e.len : e.pos + t;
      let c, f;
      for (; e.pos < u && ([c, f] = e.tag(), f != be.EndGroup); ) {
        const h = o.fields.find(c);
        if (!h) {
          const d = e.skip(f);
          r.readUnknownFields && this.onUnknownField(n, c, f, d);
          continue;
        }
        uf(n, e, h, f, r);
      }
      if (s && // eslint-disable-line @typescript-eslint/strict-boolean-expressions
      (f != be.EndGroup || c !== t))
        throw new Error("invalid end group tag");
    },
    readField: uf
  };
}
function uf(n, e, t, r, s) {
  let { repeated: o, localName: u } = t;
  switch (t.oneof && (n = n[t.oneof.localName], n.case != u && delete n.value, n.case = u, u = "value"), t.kind) {
    case "scalar":
    case "enum":
      const c = t.kind == "enum" ? B.INT32 : t.T;
      let f = Ru;
      if (t.kind == "scalar" && t.L > 0 && (f = my), o) {
        let T = n[u];
        if (r == be.LengthDelimited && c != B.STRING && c != B.BYTES) {
          let N = e.uint32() + e.pos;
          for (; e.pos < N; )
            T.push(f(e, c));
        } else
          T.push(f(e, c));
      } else
        n[u] = f(e, c);
      break;
    case "message":
      const h = t.T;
      o ? n[u].push(Tu(e, new h(), s, t)) : n[u] instanceof w ? Tu(e, n[u], s, t) : (n[u] = Tu(e, new h(), s, t), h.fieldWrapper && !t.oneof && !t.repeated && (n[u] = h.fieldWrapper.unwrapField(n[u])));
      break;
    case "map":
      let [d, p] = fy(t, e, s);
      n[u][d] = p;
      break;
  }
}
function Tu(n, e, t, r) {
  const s = e.getType().runtime.bin, o = r == null ? void 0 : r.delimited;
  return s.readMessage(
    e,
    n,
    o ? r == null ? void 0 : r.no : n.uint32(),
    // eslint-disable-line @typescript-eslint/strict-boolean-expressions
    t,
    o
  ), e;
}
function fy(n, e, t) {
  const r = e.uint32(), s = e.pos + r;
  let o, u;
  for (; e.pos < s; ) {
    let [c] = e.tag();
    switch (c) {
      case 1:
        o = Ru(e, n.K);
        break;
      case 2:
        switch (n.V.kind) {
          case "scalar":
            u = Ru(e, n.V.T);
            break;
          case "enum":
            u = e.int32();
            break;
          case "message":
            u = Tu(e, new n.V.T(), t, void 0);
            break;
        }
        break;
    }
  }
  if (o === void 0) {
    let c = Ju(n.K, to.BIGINT);
    o = n.K == B.BOOL ? c.toString() : c;
  }
  if (typeof o != "string" && typeof o != "number" && (o = o.toString()), u === void 0)
    switch (n.V.kind) {
      case "scalar":
        u = Ju(n.V.T, to.BIGINT);
        break;
      case "enum":
        u = 0;
        break;
      case "message":
        u = new n.V.T();
        break;
    }
  return [o, u];
}
function my(n, e) {
  const t = Ru(n, e);
  return typeof t == "bigint" ? t.toString() : t;
}
function Ru(n, e) {
  switch (e) {
    case B.STRING:
      return n.string();
    case B.BOOL:
      return n.bool();
    case B.DOUBLE:
      return n.double();
    case B.FLOAT:
      return n.float();
    case B.INT32:
      return n.int32();
    case B.INT64:
      return n.int64();
    case B.UINT64:
      return n.uint64();
    case B.FIXED64:
      return n.fixed64();
    case B.BYTES:
      return n.bytes();
    case B.FIXED32:
      return n.fixed32();
    case B.SFIXED32:
      return n.sfixed32();
    case B.SFIXED64:
      return n.sfixed64();
    case B.SINT64:
      return n.sint64();
    case B.UINT32:
      return n.uint32();
    case B.SINT32:
      return n.sint32();
  }
}
function dy(n, e, t, r, s) {
  n.tag(t.no, be.LengthDelimited), n.fork();
  let o = r;
  switch (t.K) {
    case B.INT32:
    case B.FIXED32:
    case B.UINT32:
    case B.SFIXED32:
    case B.SINT32:
      o = Number.parseInt(r);
      break;
    case B.BOOL:
      Qe(r == "true" || r == "false"), o = r == "true";
      break;
  }
  switch (xo(n, t.K, 1, o, !0), t.V.kind) {
    case "scalar":
      xo(n, t.V.T, 2, s, !0);
      break;
    case "enum":
      xo(n, B.INT32, 2, s, !0);
      break;
    case "message":
      n.tag(2, be.LengthDelimited).bytes(s.toBinary(e));
      break;
  }
  n.join();
}
function cf(n, e, t, r) {
  const s = Xm(t.T, r);
  t != null && t.delimited ? n.tag(t.no, be.StartGroup).raw(s.toBinary(e)).tag(t.no, be.EndGroup) : n.tag(t.no, be.LengthDelimited).bytes(s.toBinary(e));
}
function xo(n, e, t, r, s) {
  let [o, u, c] = Wm(e, r);
  (!c || s) && n.tag(t, o)[u](r);
}
function hy(n, e, t, r) {
  if (!r.length)
    return;
  n.tag(t, be.LengthDelimited).fork();
  let [, s] = Wm(e);
  for (let o = 0; o < r.length; o++)
    n[s](r[o]);
  n.join();
}
function py() {
  return Object.assign(Object.assign({}, ly()), {
    writeField: lf,
    writeMessage(n, e, t) {
      const r = n.getType();
      for (const s of r.fields.byNumber()) {
        let o, u = s.localName;
        if (s.oneof) {
          const c = n[s.oneof.localName];
          if (c.case !== u)
            continue;
          o = c.value;
        } else
          o = n[u];
        lf(s, o, e, t);
      }
      return t.writeUnknownFields && this.writeUnknownFields(n, e), e;
    }
  });
}
function lf(n, e, t, r) {
  const s = n.repeated;
  switch (n.kind) {
    case "scalar":
    case "enum":
      let o = n.kind == "enum" ? B.INT32 : n.T;
      if (s)
        if (n.packed)
          hy(t, o, n.no, e);
        else
          for (const u of e)
            xo(t, o, n.no, u, !0);
      else
        e !== void 0 && xo(t, o, n.no, e, !!n.oneof || n.opt);
      break;
    case "message":
      if (s)
        for (const u of e)
          cf(t, r, n, u);
      else
        e !== void 0 && cf(t, r, n, e);
      break;
    case "map":
      for (const [u, c] of Object.entries(e))
        dy(t, r, n, u, c);
      break;
  }
}
let mn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), Xu = [];
for (let n = 0; n < mn.length; n++)
  Xu[mn[n].charCodeAt(0)] = n;
Xu["-".charCodeAt(0)] = mn.indexOf("+");
Xu["_".charCodeAt(0)] = mn.indexOf("/");
const Ym = {
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
  dec(n) {
    let e = n.length * 3 / 4;
    n[n.length - 2] == "=" ? e -= 2 : n[n.length - 1] == "=" && (e -= 1);
    let t = new Uint8Array(e), r = 0, s = 0, o, u = 0;
    for (let c = 0; c < n.length; c++) {
      if (o = Xu[n.charCodeAt(c)], o === void 0)
        switch (n[c]) {
          case "=":
            s = 0;
          case `
`:
          case "\r":
          case "	":
          case " ":
            continue;
          default:
            throw Error("invalid base64 string.");
        }
      switch (s) {
        case 0:
          u = o, s = 1;
          break;
        case 1:
          t[r++] = u << 2 | (o & 48) >> 4, u = o, s = 2;
          break;
        case 2:
          t[r++] = (u & 15) << 4 | (o & 60) >> 2, u = o, s = 3;
          break;
        case 3:
          t[r++] = (u & 3) << 6 | o, s = 0;
          break;
      }
    }
    if (s == 1)
      throw Error("invalid base64 string.");
    return t.subarray(0, r);
  },
  /**
   * Encode a byte array to a base64 string.
   */
  enc(n) {
    let e = "", t = 0, r, s = 0;
    for (let o = 0; o < n.length; o++)
      switch (r = n[o], t) {
        case 0:
          e += mn[r >> 2], s = (r & 3) << 4, t = 1;
          break;
        case 1:
          e += mn[s | r >> 4], s = (r & 15) << 2, t = 2;
          break;
        case 2:
          e += mn[s | r >> 6], e += mn[r & 63], t = 0;
          break;
      }
    return t && (e += mn[s], e += "=", t == 1 && (e += "=")), e;
  }
};
function gy(n, e, t) {
  Zm(e, n);
  const r = e.runtime.bin.makeReadOptions(t), s = oy(n.getType().runtime.bin.listUnknownFields(n), e.field), [o, u] = zm(e);
  for (const c of s)
    e.runtime.bin.readField(o, r.readerFactory(c.data), e.field, c.wireType, r);
  return u();
}
function yy(n, e, t, r) {
  Zm(e, n);
  const s = e.runtime.bin.makeReadOptions(r), o = e.runtime.bin.makeWriteOptions(r);
  if (Qm(n, e)) {
    const h = n.getType().runtime.bin.listUnknownFields(n).filter((d) => d.no != e.field.no);
    n.getType().runtime.bin.discardUnknownFields(n);
    for (const d of h)
      n.getType().runtime.bin.onUnknownField(n, d.no, d.wireType, d.data);
  }
  const u = o.writerFactory();
  let c = e.field;
  !c.opt && !c.repeated && (c.kind == "enum" || c.kind == "scalar") && (c = Object.assign(Object.assign({}, e.field), { opt: !0 })), e.runtime.bin.writeField(c, t, u, o);
  const f = s.readerFactory(u.finish());
  for (; f.pos < f.len; ) {
    const [h, d] = f.tag(), p = f.skip(d);
    n.getType().runtime.bin.onUnknownField(n, h, d, p);
  }
}
function Qm(n, e) {
  const t = n.getType();
  return e.extendee.typeName === t.typeName && !!t.runtime.bin.listUnknownFields(n).find((r) => r.no == e.field.no);
}
function Zm(n, e) {
  Qe(n.extendee.typeName == e.getType().typeName, `extension ${n.typeName} can only be applied to message ${n.extendee.typeName}`);
}
const ff = {
  ignoreUnknownFields: !1
}, mf = {
  emitDefaultValues: !1,
  enumAsInteger: !1,
  useProtoFieldName: !1,
  prettySpaces: 0
};
function wy(n) {
  return n ? Object.assign(Object.assign({}, ff), n) : ff;
}
function Ty(n) {
  return n ? Object.assign(Object.assign({}, mf), n) : mf;
}
function vy(n, e) {
  const t = e(Ey, hf);
  return {
    makeReadOptions: wy,
    makeWriteOptions: Ty,
    readMessage(r, s, o, u) {
      if (s == null || Array.isArray(s) || typeof s != "object")
        throw new Error(`cannot decode message ${r.typeName} from JSON: ${xt(s)}`);
      u = u ?? new r();
      const c = /* @__PURE__ */ new Map(), f = o.typeRegistry;
      for (const [h, d] of Object.entries(s)) {
        const p = r.fields.findJsonName(h);
        if (p) {
          if (p.oneof) {
            if (d === null && p.kind == "scalar")
              continue;
            const T = c.get(p.oneof);
            if (T !== void 0)
              throw new Error(`cannot decode message ${r.typeName} from JSON: multiple keys for oneof "${p.oneof.name}" present: "${T}", "${h}"`);
            c.set(p.oneof, h);
          }
          df(u, d, p, o, r, n);
        } else {
          let T = !1;
          if (f != null && f.findExtension && h.startsWith("[") && h.endsWith("]")) {
            const N = f.findExtension(h.substring(1, h.length - 1));
            if (N && N.extendee.typeName == r.typeName) {
              T = !0;
              const [k, K] = zm(N);
              df(k, d, N.field, o, N, !0), yy(u, N, K(), o);
            }
          }
          if (!T && !o.ignoreUnknownFields)
            throw new Error(`cannot decode message ${r.typeName} from JSON: key "${h}" is unknown`);
        }
      }
      return u;
    },
    writeMessage(r, s) {
      const o = r.getType(), u = {};
      let c;
      try {
        for (const h of o.fields.byMember()) {
          let d;
          if (h.kind == "oneof") {
            const p = r[h.localName];
            if (p.value === void 0)
              continue;
            if (c = h.findField(p.case), !c)
              throw "oneof case not found: " + p.case;
            d = t(c, p.value, s);
          } else
            c = h, d = t(c, r[c.localName], s);
          d !== void 0 && (u[s.useProtoFieldName ? c.name : c.jsonName] = d);
        }
        const f = s.typeRegistry;
        if (f != null && f.findExtensionFor)
          for (const h of o.runtime.bin.listUnknownFields(r)) {
            const d = f.findExtensionFor(o.typeName, h.no);
            if (d && Qm(r, d)) {
              const p = gy(r, d, s), T = t(d.field, p, s);
              T !== void 0 && (u[d.field.jsonName] = T);
            }
          }
      } catch (f) {
        const h = c ? `cannot encode field ${o.typeName}.${c.name} to JSON` : `cannot encode message ${o.typeName} to JSON`, d = f instanceof Error ? f.message : String(f);
        throw new Error(h + (d.length > 0 ? `: ${d}` : ""));
      }
      return u;
    },
    readScalar: (r, s, o) => So(r, s, o, n),
    // eslint-disable-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-return
    writeScalar: hf,
    debug: xt
  };
}
function xt(n) {
  if (n === null)
    return "null";
  switch (typeof n) {
    case "object":
      return Array.isArray(n) ? "array" : "object";
    case "string":
      return n.length > 100 ? "string" : `"${n.split('"').join('\\"')}"`;
    default:
      return String(n);
  }
}
function df(n, e, t, r, s, o) {
  let u = t.localName;
  if (t.oneof) {
    if (e === null && t.kind == "scalar")
      return;
    n = n[t.oneof.localName] = { case: u }, u = "value";
  }
  if (t.repeated) {
    if (e === null)
      return;
    if (!Array.isArray(e))
      throw new Error(`cannot decode field ${s.typeName}.${t.name} from JSON: ${xt(e)}`);
    const c = n[u];
    for (const f of e) {
      if (f === null)
        throw new Error(`cannot decode field ${s.typeName}.${t.name} from JSON: ${xt(f)}`);
      let h;
      switch (t.kind) {
        case "message":
          h = t.T.fromJson(f, r);
          break;
        case "enum":
          if (h = oc(t.T, f, r.ignoreUnknownFields, !0), h === void 0)
            continue;
          break;
        case "scalar":
          try {
            h = So(t.T, f, t.L, !0);
          } catch (d) {
            let p = `cannot decode field ${s.typeName}.${t.name} from JSON: ${xt(f)}`;
            throw d instanceof Error && d.message.length > 0 && (p += `: ${d.message}`), new Error(p);
          }
          break;
      }
      c.push(h);
    }
  } else if (t.kind == "map") {
    if (e === null)
      return;
    if (typeof e != "object" || Array.isArray(e))
      throw new Error(`cannot decode field ${s.typeName}.${t.name} from JSON: ${xt(e)}`);
    const c = n[u];
    for (const [f, h] of Object.entries(e)) {
      if (h === null)
        throw new Error(`cannot decode field ${s.typeName}.${t.name} from JSON: map value null`);
      let d;
      switch (t.V.kind) {
        case "message":
          d = t.V.T.fromJson(h, r);
          break;
        case "enum":
          if (d = oc(t.V.T, h, r.ignoreUnknownFields, !0), d === void 0)
            continue;
          break;
        case "scalar":
          try {
            d = So(t.V.T, h, to.BIGINT, !0);
          } catch (p) {
            let T = `cannot decode map value for field ${s.typeName}.${t.name} from JSON: ${xt(e)}`;
            throw p instanceof Error && p.message.length > 0 && (T += `: ${p.message}`), new Error(T);
          }
          break;
      }
      try {
        c[So(t.K, t.K == B.BOOL ? f == "true" ? !0 : f == "false" ? !1 : f : f, to.BIGINT, !0).toString()] = d;
      } catch (p) {
        let T = `cannot decode map key for field ${s.typeName}.${t.name} from JSON: ${xt(e)}`;
        throw p instanceof Error && p.message.length > 0 && (T += `: ${p.message}`), new Error(T);
      }
    }
  } else
    switch (t.kind) {
      case "message":
        const c = t.T;
        if (e === null && c.typeName != "google.protobuf.Value") {
          if (t.oneof)
            throw new Error(`cannot decode field ${s.typeName}.${t.name} from JSON: null is invalid for oneof field`);
          return;
        }
        n[u] instanceof w ? n[u].fromJson(e, r) : (n[u] = c.fromJson(e, r), c.fieldWrapper && !t.oneof && (n[u] = c.fieldWrapper.unwrapField(n[u])));
        break;
      case "enum":
        const f = oc(t.T, e, r.ignoreUnknownFields, o);
        f !== void 0 && (n[u] = f);
        break;
      case "scalar":
        try {
          n[u] = So(t.T, e, t.L, o);
        } catch (h) {
          let d = `cannot decode field ${s.typeName}.${t.name} from JSON: ${xt(e)}`;
          throw h instanceof Error && h.message.length > 0 && (d += `: ${h.message}`), new Error(d);
        }
        break;
    }
}
function So(n, e, t, r) {
  switch (n) {
    case B.DOUBLE:
    case B.FLOAT:
      if (e === null)
        return r ? 0 : void 0;
      if (e === "NaN")
        return Number.NaN;
      if (e === "Infinity")
        return Number.POSITIVE_INFINITY;
      if (e === "-Infinity")
        return Number.NEGATIVE_INFINITY;
      if (e === "" || typeof e == "string" && e.trim().length !== e.length || typeof e != "string" && typeof e != "number")
        break;
      const s = Number(e);
      if (Number.isNaN(s) || !Number.isFinite(s))
        break;
      return n == B.FLOAT && Km(s), s;
    case B.INT32:
    case B.FIXED32:
    case B.SFIXED32:
    case B.SINT32:
    case B.UINT32:
      if (e === null)
        return r ? 0 : void 0;
      let o;
      if (typeof e == "number" ? o = e : typeof e == "string" && e.length > 0 && e.trim().length === e.length && (o = Number(e)), o === void 0)
        break;
      return n == B.UINT32 ? xc(o) : yu(o), o;
    case B.INT64:
    case B.SFIXED64:
    case B.SINT64:
      if (e === null)
        return r ? ce.zero : void 0;
      if (typeof e != "number" && typeof e != "string")
        break;
      const u = ce.parse(e);
      return t ? u.toString() : u;
    case B.FIXED64:
    case B.UINT64:
      if (e === null)
        return r ? ce.zero : void 0;
      if (typeof e != "number" && typeof e != "string")
        break;
      const c = ce.uParse(e);
      return t ? c.toString() : c;
    case B.BOOL:
      if (e === null)
        return r ? !1 : void 0;
      if (typeof e != "boolean")
        break;
      return e;
    case B.STRING:
      if (e === null)
        return r ? "" : void 0;
      if (typeof e != "string")
        break;
      try {
        encodeURIComponent(e);
      } catch {
        throw new Error("invalid UTF8");
      }
      return e;
    case B.BYTES:
      if (e === null)
        return r ? new Uint8Array(0) : void 0;
      if (e === "")
        return new Uint8Array(0);
      if (typeof e != "string")
        break;
      return Ym.dec(e);
  }
  throw new Error();
}
function oc(n, e, t, r) {
  if (e === null)
    return r ? n.values[0].no : void 0;
  switch (typeof e) {
    case "number":
      if (Number.isInteger(e))
        return e;
      break;
    case "string":
      const s = n.findName(e);
      if (s || t)
        return s == null ? void 0 : s.no;
      break;
  }
  throw new Error(`cannot decode enum ${n.typeName} from JSON: ${xt(e)}`);
}
function Ey(n, e, t, r) {
  var s;
  if (e === void 0)
    return e;
  if (!t && n.values[0].no === e)
    return;
  if (r)
    return e;
  if (n.typeName == "google.protobuf.NullValue")
    return null;
  const o = n.findNumber(e);
  return (s = o == null ? void 0 : o.name) !== null && s !== void 0 ? s : e;
}
function hf(n, e, t) {
  if (e !== void 0)
    switch (n) {
      case B.INT32:
      case B.SFIXED32:
      case B.SINT32:
      case B.FIXED32:
      case B.UINT32:
        return Qe(typeof e == "number"), e != 0 || t ? e : void 0;
      case B.FLOAT:
      case B.DOUBLE:
        return Qe(typeof e == "number"), Number.isNaN(e) ? "NaN" : e === Number.POSITIVE_INFINITY ? "Infinity" : e === Number.NEGATIVE_INFINITY ? "-Infinity" : e !== 0 || t ? e : void 0;
      case B.STRING:
        return Qe(typeof e == "string"), e.length > 0 || t ? e : void 0;
      case B.BOOL:
        return Qe(typeof e == "boolean"), e || t ? e : void 0;
      case B.UINT64:
      case B.FIXED64:
      case B.INT64:
      case B.SFIXED64:
      case B.SINT64:
        return Qe(typeof e == "bigint" || typeof e == "string" || typeof e == "number"), t || e != 0 ? e.toString(10) : void 0;
      case B.BYTES:
        return Qe(e instanceof Uint8Array), t || e.byteLength > 0 ? Ym.enc(e) : void 0;
    }
}
function Ny() {
  return vy(!0, (n, e) => function(t, r, s) {
    if (t.kind == "map") {
      const o = {};
      switch (t.V.kind) {
        case "scalar":
          for (const [c, f] of Object.entries(r)) {
            const h = e(t.V.T, f, !0);
            Qe(h !== void 0), o[c.toString()] = h;
          }
          break;
        case "message":
          for (const [c, f] of Object.entries(r))
            o[c.toString()] = f.toJson(s);
          break;
        case "enum":
          const u = t.V.T;
          for (const [c, f] of Object.entries(r)) {
            Qe(f === void 0 || typeof f == "number");
            const h = n(u, f, !0, s.enumAsInteger);
            Qe(h !== void 0), o[c.toString()] = h;
          }
          break;
      }
      return s.emitDefaultValues || Object.keys(o).length > 0 ? o : void 0;
    } else if (t.repeated) {
      const o = [];
      switch (t.kind) {
        case "scalar":
          for (let u = 0; u < r.length; u++)
            o.push(e(t.T, r[u], !0));
          break;
        case "enum":
          for (let u = 0; u < r.length; u++)
            o.push(n(t.T, r[u], !0, s.enumAsInteger));
          break;
        case "message":
          for (let u = 0; u < r.length; u++)
            o.push(r[u].toJson(s));
          break;
      }
      return s.emitDefaultValues || o.length > 0 ? o : void 0;
    } else {
      if (r === void 0)
        return;
      switch (t.kind) {
        case "scalar":
          return e(t.T, r, !!t.oneof || t.opt || s.emitDefaultValues);
        case "enum":
          return n(t.T, r, !!t.oneof || t.opt || s.emitDefaultValues, s.enumAsInteger);
        case "message":
          return Xm(t.T, r).toJson(s);
      }
    }
  });
}
function by() {
  return {
    setEnumType: $m,
    initPartial(n, e) {
      if (n === void 0)
        return;
      const t = e.getType();
      for (const r of t.fields.byMember()) {
        const s = r.localName, o = e, u = n;
        if (u[s] !== void 0)
          switch (r.kind) {
            case "oneof":
              const c = u[s].case;
              if (c === void 0)
                continue;
              const f = r.findField(c);
              let h = u[s].value;
              f && f.kind == "message" && !(h instanceof f.T) ? h = new f.T(h) : f && f.kind === "scalar" && f.T === B.BYTES && (h = Eo(h)), o[s] = { case: c, value: h };
              break;
            case "scalar":
            case "enum":
              let d = u[s];
              r.T === B.BYTES && (d = r.repeated ? d.map(Eo) : Eo(d)), o[s] = d;
              break;
            case "map":
              switch (r.V.kind) {
                case "scalar":
                case "enum":
                  if (r.V.T === B.BYTES)
                    for (const [N, k] of Object.entries(u[s]))
                      o[s][N] = Eo(k);
                  else
                    Object.assign(o[s], u[s]);
                  break;
                case "message":
                  const T = r.V.T;
                  for (const N of Object.keys(u[s])) {
                    let k = u[s][N];
                    T.fieldWrapper || (k = new T(k)), o[s][N] = k;
                  }
                  break;
              }
              break;
            case "message":
              const p = r.T;
              if (r.repeated)
                o[s] = u[s].map((T) => T instanceof p ? T : new p(T));
              else if (u[s] !== void 0) {
                const T = u[s];
                p.fieldWrapper ? (
                  /* We can't use BytesValue.typeName as that will create a circular import */
                  p.typeName === "google.protobuf.BytesValue" ? o[s] = Eo(T) : o[s] = T
                ) : o[s] = T instanceof p ? T : new p(T);
              }
              break;
          }
      }
    },
    equals(n, e, t) {
      return e === t ? !0 : !e || !t ? !1 : n.fields.byMember().every((r) => {
        const s = e[r.localName], o = t[r.localName];
        if (r.repeated) {
          if (s.length !== o.length)
            return !1;
          switch (r.kind) {
            case "message":
              return s.every((u, c) => r.T.equals(u, o[c]));
            case "scalar":
              return s.every((u, c) => Xr(r.T, u, o[c]));
            case "enum":
              return s.every((u, c) => Xr(B.INT32, u, o[c]));
          }
          throw new Error(`repeated cannot contain ${r.kind}`);
        }
        switch (r.kind) {
          case "message":
            return r.T.equals(s, o);
          case "enum":
            return Xr(B.INT32, s, o);
          case "scalar":
            return Xr(r.T, s, o);
          case "oneof":
            if (s.case !== o.case)
              return !1;
            const u = r.findField(s.case);
            if (u === void 0)
              return !0;
            switch (u.kind) {
              case "message":
                return u.T.equals(s.value, o.value);
              case "enum":
                return Xr(B.INT32, s.value, o.value);
              case "scalar":
                return Xr(u.T, s.value, o.value);
            }
            throw new Error(`oneof cannot contain ${u.kind}`);
          case "map":
            const c = Object.keys(s).concat(Object.keys(o));
            switch (r.V.kind) {
              case "message":
                const f = r.V.T;
                return c.every((d) => f.equals(s[d], o[d]));
              case "enum":
                return c.every((d) => Xr(B.INT32, s[d], o[d]));
              case "scalar":
                const h = r.V.T;
                return c.every((d) => Xr(h, s[d], o[d]));
            }
            break;
        }
      });
    },
    clone(n) {
      const e = n.getType(), t = new e(), r = t;
      for (const s of e.fields.byMember()) {
        const o = n[s.localName];
        let u;
        if (s.repeated)
          u = o.map(au);
        else if (s.kind == "map") {
          u = r[s.localName];
          for (const [c, f] of Object.entries(o))
            u[c] = au(f);
        } else
          s.kind == "oneof" ? u = s.findField(o.case) ? { case: o.case, value: au(o.value) } : { case: void 0 } : u = au(o);
        r[s.localName] = u;
      }
      return t;
    }
  };
}
function au(n) {
  if (n === void 0)
    return n;
  if (n instanceof w)
    return n.clone();
  if (n instanceof Uint8Array) {
    const e = new Uint8Array(n.byteLength);
    return e.set(n), e;
  }
  return n;
}
function Eo(n) {
  return n instanceof Uint8Array ? n : new Uint8Array(n);
}
class Sy {
  constructor(e, t) {
    this._fields = e, this._normalizer = t;
  }
  findJsonName(e) {
    if (!this.jsonNames) {
      const t = {};
      for (const r of this.list())
        t[r.jsonName] = t[r.name] = r;
      this.jsonNames = t;
    }
    return this.jsonNames[e];
  }
  find(e) {
    if (!this.numbers) {
      const t = {};
      for (const r of this.list())
        t[r.no] = r;
      this.numbers = t;
    }
    return this.numbers[e];
  }
  list() {
    return this.all || (this.all = this._normalizer(this._fields)), this.all;
  }
  byNumber() {
    return this.numbersAsc || (this.numbersAsc = this.list().concat().sort((e, t) => e.no - t.no)), this.numbersAsc;
  }
  byMember() {
    if (!this.members) {
      this.members = [];
      const e = this.members;
      let t;
      for (const r of this.list())
        r.oneof ? r.oneof !== t && (t = r.oneof, e.push(t)) : e.push(r);
    }
    return this.members;
  }
}
function ed(n, e) {
  const t = td(n);
  return e ? t : Jy(Ay(t));
}
function ky(n) {
  return ed(n, !1);
}
const Iy = td;
function td(n) {
  let e = !1;
  const t = [];
  for (let r = 0; r < n.length; r++) {
    let s = n.charAt(r);
    switch (s) {
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
        t.push(s), e = !1;
        break;
      default:
        e && (e = !1, s = s.toUpperCase()), t.push(s);
        break;
    }
  }
  return t.join("");
}
const Oy = /* @__PURE__ */ new Set([
  // names reserved by JavaScript
  "constructor",
  "toString",
  "toJSON",
  "valueOf"
]), By = /* @__PURE__ */ new Set([
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
]), nd = (n) => `${n}$`, Ay = (n) => By.has(n) ? nd(n) : n, Jy = (n) => Oy.has(n) ? nd(n) : n;
class Ry {
  constructor(e) {
    this.kind = "oneof", this.repeated = !1, this.packed = !1, this.opt = !1, this.default = void 0, this.fields = [], this.name = e, this.localName = ky(e);
  }
  addField(e) {
    Qe(e.oneof === this, `field ${e.name} not one of ${this.name}`), this.fields.push(e);
  }
  findField(e) {
    if (!this._lookup) {
      this._lookup = /* @__PURE__ */ Object.create(null);
      for (let t = 0; t < this.fields.length; t++)
        this._lookup[this.fields[t].localName] = this.fields[t];
    }
    return this._lookup[e];
  }
}
const i = ay("proto3", Ny(), py(), Object.assign(Object.assign({}, by()), {
  newFieldList(n) {
    return new Sy(n, xy);
  },
  initFields(n) {
    for (const e of n.getType().fields.byMember()) {
      if (e.opt)
        continue;
      const t = e.localName, r = n;
      if (e.repeated) {
        r[t] = [];
        continue;
      }
      switch (e.kind) {
        case "oneof":
          r[t] = { case: void 0 };
          break;
        case "enum":
          r[t] = 0;
          break;
        case "map":
          r[t] = {};
          break;
        case "scalar":
          r[t] = Ju(e.T, e.L);
          break;
      }
    }
  }
}));
function xy(n) {
  var e, t, r, s;
  const o = [];
  let u;
  for (const c of typeof n == "function" ? n() : n) {
    const f = c;
    if (f.localName = ed(c.name, c.oneof !== void 0), f.jsonName = (e = c.jsonName) !== null && e !== void 0 ? e : Iy(c.name), f.repeated = (t = c.repeated) !== null && t !== void 0 ? t : !1, c.kind == "scalar" && (f.L = (r = c.L) !== null && r !== void 0 ? r : to.BIGINT), c.oneof !== void 0) {
      const h = typeof c.oneof == "string" ? c.oneof : c.oneof.name;
      (!u || u.name != h) && (u = new Ry(h)), f.oneof = u, u.addField(f);
    }
    c.kind == "message" && (f.delimited = !1), f.packed = (s = c.packed) !== null && s !== void 0 ? s : c.kind == "enum" || c.kind == "scalar" && c.T != B.BYTES && c.T != B.STRING, o.push(f);
  }
  return o;
}
var te;
(function(n) {
  n[n.Unary = 0] = "Unary", n[n.ServerStreaming = 1] = "ServerStreaming", n[n.ClientStreaming = 2] = "ClientStreaming", n[n.BiDiStreaming = 3] = "BiDiStreaming";
})(te || (te = {}));
var pf;
(function(n) {
  n[n.NoSideEffects = 1] = "NoSideEffects", n[n.Idempotent = 2] = "Idempotent";
})(pf || (pf = {}));
class Ae extends w {
  constructor(e) {
    super(), this.seconds = ce.zero, this.nanos = 0, i.util.initPartial(e, this);
  }
  fromJson(e, t) {
    if (typeof e != "string")
      throw new Error(`cannot decode google.protobuf.Timestamp from JSON: ${i.json.debug(e)}`);
    const r = e.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
    if (!r)
      throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
    const s = Date.parse(r[1] + "-" + r[2] + "-" + r[3] + "T" + r[4] + ":" + r[5] + ":" + r[6] + (r[8] ? r[8] : "Z"));
    if (Number.isNaN(s))
      throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
    if (s < Date.parse("0001-01-01T00:00:00Z") || s > Date.parse("9999-12-31T23:59:59Z"))
      throw new Error("cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
    return this.seconds = ce.parse(s / 1e3), this.nanos = 0, r[7] && (this.nanos = parseInt("1" + r[7] + "0".repeat(9 - r[7].length)) - 1e9), this;
  }
  toJson(e) {
    const t = Number(this.seconds) * 1e3;
    if (t < Date.parse("0001-01-01T00:00:00Z") || t > Date.parse("9999-12-31T23:59:59Z"))
      throw new Error("cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
    if (this.nanos < 0)
      throw new Error("cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative");
    let r = "Z";
    if (this.nanos > 0) {
      const s = (this.nanos + 1e9).toString().substring(1);
      s.substring(3) === "000000" ? r = "." + s.substring(0, 3) + "Z" : s.substring(6) === "000" ? r = "." + s.substring(0, 6) + "Z" : r = "." + s + "Z";
    }
    return new Date(t).toISOString().replace(".000Z", r);
  }
  toDate() {
    return new Date(Number(this.seconds) * 1e3 + Math.ceil(this.nanos / 1e6));
  }
  static now() {
    return Ae.fromDate(/* @__PURE__ */ new Date());
  }
  static fromDate(e) {
    const t = e.getTime();
    return new Ae({
      seconds: ce.parse(Math.floor(t / 1e3)),
      nanos: t % 1e3 * 1e6
    });
  }
  static fromBinary(e, t) {
    return new Ae().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ae().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ae().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Ae, e, t);
  }
}
Ae.runtime = i;
Ae.typeName = "google.protobuf.Timestamp";
Ae.fields = i.util.newFieldList(() => [
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
class dn extends w {
  constructor(e) {
    super(), this.seconds = ce.zero, this.nanos = 0, i.util.initPartial(e, this);
  }
  fromJson(e, t) {
    if (typeof e != "string")
      throw new Error(`cannot decode google.protobuf.Duration from JSON: ${i.json.debug(e)}`);
    const r = e.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
    if (r === null)
      throw new Error(`cannot decode google.protobuf.Duration from JSON: ${i.json.debug(e)}`);
    const s = Number(r[1]);
    if (s > 315576e6 || s < -315576e6)
      throw new Error(`cannot decode google.protobuf.Duration from JSON: ${i.json.debug(e)}`);
    if (this.seconds = ce.parse(s), typeof r[2] == "string") {
      const o = r[2] + "0".repeat(9 - r[2].length);
      this.nanos = parseInt(o), (s < 0 || Object.is(s, -0)) && (this.nanos = -this.nanos);
    }
    return this;
  }
  toJson(e) {
    if (Number(this.seconds) > 315576e6 || Number(this.seconds) < -315576e6)
      throw new Error("cannot encode google.protobuf.Duration to JSON: value out of range");
    let t = this.seconds.toString();
    if (this.nanos !== 0) {
      let r = Math.abs(this.nanos).toString();
      r = "0".repeat(9 - r.length) + r, r.substring(3) === "000000" ? r = r.substring(0, 3) : r.substring(6) === "000" && (r = r.substring(0, 6)), t += "." + r, this.nanos < 0 && Number(this.seconds) == 0 && (t = "-" + t);
    }
    return t + "s";
  }
  static fromBinary(e, t) {
    return new dn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new dn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new dn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(dn, e, t);
  }
}
dn.runtime = i;
dn.typeName = "google.protobuf.Duration";
dn.fields = i.util.newFieldList(() => [
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
var lt;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.PRIMARY = 1] = "PRIMARY", n[n.TEMPORARY_INCOMING = 2] = "TEMPORARY_INCOMING", n[n.TEMPORARY_OUTGOING = 3] = "TEMPORARY_OUTGOING", n[n.BUCKET_1_KIN = 4] = "BUCKET_1_KIN", n[n.BUCKET_10_KIN = 5] = "BUCKET_10_KIN", n[n.BUCKET_100_KIN = 6] = "BUCKET_100_KIN", n[n.BUCKET_1_000_KIN = 7] = "BUCKET_1_000_KIN", n[n.BUCKET_10_000_KIN = 8] = "BUCKET_10_000_KIN", n[n.BUCKET_100_000_KIN = 9] = "BUCKET_100_000_KIN", n[n.BUCKET_1_000_000_KIN = 10] = "BUCKET_1_000_000_KIN", n[n.LEGACY_PRIMARY_2022 = 11] = "LEGACY_PRIMARY_2022", n[n.REMOTE_SEND_GIFT_CARD = 12] = "REMOTE_SEND_GIFT_CARD", n[n.RELATIONSHIP = 13] = "RELATIONSHIP", n[n.SWAP = 14] = "SWAP";
})(lt || (lt = {}));
i.util.setEnumType(lt, "code.common.v1.AccountType", [
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
  { no: 12, name: "REMOTE_SEND_GIFT_CARD" },
  { no: 13, name: "RELATIONSHIP" },
  { no: 14, name: "SWAP" }
]);
class R extends w {
  constructor(e) {
    super(), this.value = new Uint8Array(0), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new R().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new R().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new R().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(R, e, t);
  }
}
R.runtime = i;
R.typeName = "code.common.v1.SolanaAccountId";
R.fields = i.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class hn extends w {
  constructor(e) {
    super(), this.isSigner = !1, this.isWritable = !1, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new hn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new hn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new hn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(hn, e, t);
  }
}
hn.runtime = i;
hn.typeName = "code.common.v1.InstructionAccount";
hn.fields = i.util.newFieldList(() => [
  { no: 1, name: "account", kind: "message", T: R },
  { no: 2, name: "is_signer", kind: "scalar", T: 8 },
  { no: 3, name: "is_writable", kind: "scalar", T: 8 }
]);
class Ut extends w {
  constructor(e) {
    super(), this.value = new Uint8Array(0), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Ut().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ut().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ut().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Ut, e, t);
  }
}
Ut.runtime = i;
Ut.typeName = "code.common.v1.Transaction";
Ut.fields = i.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class qt extends w {
  constructor(e) {
    super(), this.value = new Uint8Array(0), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new qt().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new qt().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new qt().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(qt, e, t);
  }
}
qt.runtime = i;
qt.typeName = "code.common.v1.Blockhash";
qt.fields = i.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class ee extends w {
  constructor(e) {
    super(), this.value = new Uint8Array(0), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ee().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ee().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ee().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(ee, e, t);
  }
}
ee.runtime = i;
ee.typeName = "code.common.v1.Signature";
ee.fields = i.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class Ce extends w {
  constructor(e) {
    super(), this.value = new Uint8Array(0), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Ce().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ce().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ce().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Ce, e, t);
  }
}
Ce.runtime = i;
Ce.typeName = "code.common.v1.IntentId";
Ce.fields = i.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class dt extends w {
  constructor(e) {
    super(), this.value = new Uint8Array(0), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new dt().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new dt().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new dt().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(dt, e, t);
  }
}
dt.runtime = i;
dt.typeName = "code.common.v1.UserId";
dt.fields = i.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class Ze extends w {
  constructor(e) {
    super(), this.value = new Uint8Array(0), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Ze().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ze().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ze().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Ze, e, t);
  }
}
Ze.runtime = i;
Ze.typeName = "code.common.v1.DataContainerId";
Ze.fields = i.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class Dt extends w {
  constructor(e) {
    super(), this.value = "", i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Dt().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Dt().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Dt().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Dt, e, t);
  }
}
Dt.runtime = i;
Dt.typeName = "code.common.v1.DeviceToken";
Dt.fields = i.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 9 }
]);
class bt extends w {
  constructor(e) {
    super(), this.value = "", i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new bt().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new bt().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new bt().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(bt, e, t);
  }
}
bt.runtime = i;
bt.typeName = "code.common.v1.AppInstallId";
bt.fields = i.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 9 }
]);
class Ue extends w {
  constructor(e) {
    super(), this.value = "", i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Ue().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ue().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ue().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Ue, e, t);
  }
}
Ue.runtime = i;
Ue.typeName = "code.common.v1.PhoneNumber";
Ue.fields = i.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 9 }
]);
class at extends w {
  constructor(e) {
    super(), this.value = "", i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new at().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new at().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new at().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(at, e, t);
  }
}
at.runtime = i;
at.typeName = "code.common.v1.Domain";
at.fields = i.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 9 }
]);
class Ft extends w {
  constructor(e) {
    super(), this.type = { case: void 0 }, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Ft().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ft().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ft().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Ft, e, t);
  }
}
Ft.runtime = i;
Ft.typeName = "code.common.v1.Relationship";
Ft.fields = i.util.newFieldList(() => [
  { no: 1, name: "domain", kind: "message", T: at, oneof: "type" }
]);
let Gr = class ko extends w {
  constructor(e) {
    super(), this.value = new Uint8Array(0), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ko().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ko().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ko().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(ko, e, t);
  }
};
Gr.runtime = i;
Gr.typeName = "code.common.v1.Hash";
Gr.fields = i.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class pn extends w {
  constructor(e) {
    super(), this.value = "", i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new pn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new pn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new pn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(pn, e, t);
  }
}
pn.runtime = i;
pn.typeName = "code.common.v1.Locale";
pn.fields = i.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 9 }
]);
class gn extends w {
  constructor(e) {
    super(), this.value = new Uint8Array(0), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new gn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new gn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new gn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(gn, e, t);
  }
}
gn.runtime = i;
gn.typeName = "code.common.v1.UUID";
gn.fields = i.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class yn extends w {
  constructor(e) {
    super(), this.version = "", this.service = "", this.method = "", this.body = new Uint8Array(0), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new yn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new yn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new yn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(yn, e, t);
  }
}
yn.runtime = i;
yn.typeName = "code.common.v1.Request";
yn.fields = i.util.newFieldList(() => [
  { no: 1, name: "version", kind: "scalar", T: 9 },
  { no: 2, name: "service", kind: "scalar", T: 9 },
  { no: 3, name: "method", kind: "scalar", T: 9 },
  { no: 4, name: "body", kind: "scalar", T: 12 }
]);
class wn extends w {
  constructor(e) {
    super(), this.result = _o.OK, this.body = new Uint8Array(0), this.message = "", i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new wn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new wn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new wn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(wn, e, t);
  }
}
wn.runtime = i;
wn.typeName = "code.common.v1.Response";
wn.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(_o) },
  { no: 2, name: "body", kind: "scalar", T: 12 },
  { no: 3, name: "message", kind: "scalar", T: 9 }
]);
var _o;
(function(n) {
  n[n.OK = 0] = "OK", n[n.ERROR = 1] = "ERROR";
})(_o || (_o = {}));
i.util.setEnumType(_o, "code.common.v1.Response.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "ERROR" }
]);
var on;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.GIVE_FIRST_KIN = 1] = "GIVE_FIRST_KIN", n[n.GET_FIRST_KIN = 2] = "GET_FIRST_KIN";
})(on || (on = {}));
i.util.setEnumType(on, "code.transaction.v2.AirdropType", [
  { no: 0, name: "UNKNOWN" },
  { no: 1, name: "GIVE_FIRST_KIN" },
  { no: 2, name: "GET_FIRST_KIN" }
]);
class ui extends w {
  constructor(e) {
    super(), this.request = { case: void 0 }, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ui().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ui().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ui().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(ui, e, t);
  }
}
ui.runtime = i;
ui.typeName = "code.transaction.v2.SubmitIntentRequest";
ui.fields = i.util.newFieldList(() => [
  { no: 1, name: "submit_actions", kind: "message", T: Tn, oneof: "request" },
  { no: 2, name: "submit_signatures", kind: "message", T: vn, oneof: "request" }
]);
class Tn extends w {
  constructor(e) {
    super(), this.actions = [], i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Tn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Tn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Tn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Tn, e, t);
  }
}
Tn.runtime = i;
Tn.typeName = "code.transaction.v2.SubmitIntentRequest.SubmitActions";
Tn.fields = i.util.newFieldList(() => [
  { no: 1, name: "id", kind: "message", T: Ce },
  { no: 2, name: "owner", kind: "message", T: R },
  { no: 3, name: "metadata", kind: "message", T: St },
  { no: 4, name: "actions", kind: "message", T: qn, repeated: !0 },
  { no: 5, name: "signature", kind: "message", T: ee },
  { no: 6, name: "device_token", kind: "message", T: Dt }
]);
class vn extends w {
  constructor(e) {
    super(), this.signatures = [], i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new vn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new vn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new vn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(vn, e, t);
  }
}
vn.runtime = i;
vn.typeName = "code.transaction.v2.SubmitIntentRequest.SubmitSignatures";
vn.fields = i.util.newFieldList(() => [
  { no: 1, name: "signatures", kind: "message", T: ee, repeated: !0 }
]);
class ci extends w {
  constructor(e) {
    super(), this.response = { case: void 0 }, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ci().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ci().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ci().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(ci, e, t);
  }
}
ci.runtime = i;
ci.typeName = "code.transaction.v2.SubmitIntentResponse";
ci.fields = i.util.newFieldList(() => [
  { no: 1, name: "server_parameters", kind: "message", T: En, oneof: "response" },
  { no: 2, name: "success", kind: "message", T: Nn, oneof: "response" },
  { no: 3, name: "error", kind: "message", T: bn, oneof: "response" }
]);
class En extends w {
  constructor(e) {
    super(), this.serverParameters = [], i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new En().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new En().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new En().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(En, e, t);
  }
}
En.runtime = i;
En.typeName = "code.transaction.v2.SubmitIntentResponse.ServerParameters";
En.fields = i.util.newFieldList(() => [
  { no: 1, name: "server_parameters", kind: "message", T: Hn, repeated: !0 }
]);
class Nn extends w {
  constructor(e) {
    super(), this.code = Ko.OK, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Nn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Nn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Nn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Nn, e, t);
  }
}
Nn.runtime = i;
Nn.typeName = "code.transaction.v2.SubmitIntentResponse.Success";
Nn.fields = i.util.newFieldList(() => [
  { no: 1, name: "code", kind: "enum", T: i.getEnumType(Ko) }
]);
var Ko;
(function(n) {
  n[n.OK = 0] = "OK";
})(Ko || (Ko = {}));
i.util.setEnumType(Ko, "code.transaction.v2.SubmitIntentResponse.Success.Code", [
  { no: 0, name: "OK" }
]);
class bn extends w {
  constructor(e) {
    super(), this.code = Mo.DENIED, this.errorDetails = [], i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new bn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new bn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new bn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(bn, e, t);
  }
}
bn.runtime = i;
bn.typeName = "code.transaction.v2.SubmitIntentResponse.Error";
bn.fields = i.util.newFieldList(() => [
  { no: 1, name: "code", kind: "enum", T: i.getEnumType(Mo) },
  { no: 2, name: "error_details", kind: "message", T: _t, repeated: !0 }
]);
var Mo;
(function(n) {
  n[n.DENIED = 0] = "DENIED", n[n.INVALID_INTENT = 1] = "INVALID_INTENT", n[n.SIGNATURE_ERROR = 2] = "SIGNATURE_ERROR", n[n.STALE_STATE = 3] = "STALE_STATE";
})(Mo || (Mo = {}));
i.util.setEnumType(Mo, "code.transaction.v2.SubmitIntentResponse.Error.Code", [
  { no: 0, name: "DENIED" },
  { no: 1, name: "INVALID_INTENT" },
  { no: 2, name: "SIGNATURE_ERROR" },
  { no: 3, name: "STALE_STATE" }
]);
class li extends w {
  constructor(e) {
    super(), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new li().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new li().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new li().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(li, e, t);
  }
}
li.runtime = i;
li.typeName = "code.transaction.v2.GetIntentMetadataRequest";
li.fields = i.util.newFieldList(() => [
  { no: 1, name: "intent_id", kind: "message", T: Ce },
  { no: 2, name: "owner", kind: "message", T: R },
  { no: 3, name: "signature", kind: "message", T: ee }
]);
class fi extends w {
  constructor(e) {
    super(), this.result = $o.OK, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new fi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new fi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new fi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(fi, e, t);
  }
}
fi.runtime = i;
fi.typeName = "code.transaction.v2.GetIntentMetadataResponse";
fi.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType($o) },
  { no: 2, name: "metadata", kind: "message", T: St }
]);
var $o;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND";
})($o || ($o = {}));
i.util.setEnumType($o, "code.transaction.v2.GetIntentMetadataResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" }
]);
class mi extends w {
  constructor(e) {
    super(), this.actionId = 0, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new mi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new mi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new mi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(mi, e, t);
  }
}
mi.runtime = i;
mi.typeName = "code.transaction.v2.GetPrivacyUpgradeStatusRequest";
mi.fields = i.util.newFieldList(() => [
  { no: 1, name: "intent_id", kind: "message", T: Ce },
  { no: 2, name: "action_id", kind: "scalar", T: 13 }
]);
class di extends w {
  constructor(e) {
    super(), this.result = Vo.OK, this.status = Go.UNKNOWN, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new di().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new di().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new di().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(di, e, t);
  }
}
di.runtime = i;
di.typeName = "code.transaction.v2.GetPrivacyUpgradeStatusResponse";
di.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(Vo) },
  { no: 2, name: "status", kind: "enum", T: i.getEnumType(Go) }
]);
var Vo;
(function(n) {
  n[n.OK = 0] = "OK", n[n.INTENT_NOT_FOUND = 1] = "INTENT_NOT_FOUND", n[n.ACTION_NOT_FOUND = 2] = "ACTION_NOT_FOUND", n[n.INVALID_ACTION = 3] = "INVALID_ACTION";
})(Vo || (Vo = {}));
i.util.setEnumType(Vo, "code.transaction.v2.GetPrivacyUpgradeStatusResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INTENT_NOT_FOUND" },
  { no: 2, name: "ACTION_NOT_FOUND" },
  { no: 3, name: "INVALID_ACTION" }
]);
var Go;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.TEMPORARY_TRANSACTION_FINALIZED = 1] = "TEMPORARY_TRANSACTION_FINALIZED", n[n.WAITING_FOR_NEXT_BLOCK = 2] = "WAITING_FOR_NEXT_BLOCK", n[n.READY_FOR_UPGRADE = 3] = "READY_FOR_UPGRADE", n[n.ALREADY_UPGRADED = 4] = "ALREADY_UPGRADED";
})(Go || (Go = {}));
i.util.setEnumType(Go, "code.transaction.v2.GetPrivacyUpgradeStatusResponse.Status", [
  { no: 0, name: "UNKNOWN" },
  { no: 1, name: "TEMPORARY_TRANSACTION_FINALIZED" },
  { no: 2, name: "WAITING_FOR_NEXT_BLOCK" },
  { no: 3, name: "READY_FOR_UPGRADE" },
  { no: 4, name: "ALREADY_UPGRADED" }
]);
class hi extends w {
  constructor(e) {
    super(), this.limit = 0, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new hi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new hi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new hi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(hi, e, t);
  }
}
hi.runtime = i;
hi.typeName = "code.transaction.v2.GetPrioritizedIntentsForPrivacyUpgradeRequest";
hi.fields = i.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: R },
  { no: 2, name: "limit", kind: "scalar", T: 13 },
  { no: 3, name: "signature", kind: "message", T: ee }
]);
class pi extends w {
  constructor(e) {
    super(), this.result = jo.OK, this.items = [], i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new pi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new pi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new pi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(pi, e, t);
  }
}
pi.runtime = i;
pi.typeName = "code.transaction.v2.GetPrioritizedIntentsForPrivacyUpgradeResponse";
pi.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(jo) },
  { no: 2, name: "items", kind: "message", T: or, repeated: !0 }
]);
var jo;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND";
})(jo || (jo = {}));
i.util.setEnumType(jo, "code.transaction.v2.GetPrioritizedIntentsForPrivacyUpgradeResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" }
]);
class gi extends w {
  constructor(e) {
    super(), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new gi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new gi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new gi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(gi, e, t);
  }
}
gi.runtime = i;
gi.typeName = "code.transaction.v2.GetLimitsRequest";
gi.fields = i.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: R },
  { no: 2, name: "signature", kind: "message", T: ee },
  { no: 3, name: "consumed_since", kind: "message", T: Ae }
]);
class yi extends w {
  constructor(e) {
    super(), this.result = Ho.OK, this.sendLimitsByCurrency = {}, this.microPaymentLimitsByCurrency = {}, this.buyModuleLimitsByCurrency = {}, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new yi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new yi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new yi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(yi, e, t);
  }
}
yi.runtime = i;
yi.typeName = "code.transaction.v2.GetLimitsResponse";
yi.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(Ho) },
  { no: 2, name: "send_limits_by_currency", kind: "map", K: 9, V: { kind: "message", T: cr } },
  { no: 3, name: "deposit_limit", kind: "message", T: lr },
  { no: 4, name: "micro_payment_limits_by_currency", kind: "map", K: 9, V: { kind: "message", T: fr } },
  { no: 5, name: "buy_module_limits_by_currency", kind: "map", K: 9, V: { kind: "message", T: mr } }
]);
var Ho;
(function(n) {
  n[n.OK = 0] = "OK";
})(Ho || (Ho = {}));
i.util.setEnumType(Ho, "code.transaction.v2.GetLimitsResponse.Result", [
  { no: 0, name: "OK" }
]);
class wi extends w {
  constructor(e) {
    super(), this.pageSize = 0, this.direction = Wo.ASC, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new wi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new wi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new wi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(wi, e, t);
  }
}
wi.runtime = i;
wi.typeName = "code.transaction.v2.GetPaymentHistoryRequest";
wi.fields = i.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: R },
  { no: 2, name: "cursor", kind: "message", T: za },
  { no: 3, name: "page_size", kind: "scalar", T: 13 },
  { no: 4, name: "direction", kind: "enum", T: i.getEnumType(Wo) },
  { no: 5, name: "signature", kind: "message", T: ee }
]);
var Wo;
(function(n) {
  n[n.ASC = 0] = "ASC", n[n.DESC = 1] = "DESC";
})(Wo || (Wo = {}));
i.util.setEnumType(Wo, "code.transaction.v2.GetPaymentHistoryRequest.Direction", [
  { no: 0, name: "ASC" },
  { no: 1, name: "DESC" }
]);
class Ti extends w {
  constructor(e) {
    super(), this.result = zo.OK, this.items = [], i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Ti().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ti().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ti().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Ti, e, t);
  }
}
Ti.runtime = i;
Ti.typeName = "code.transaction.v2.GetPaymentHistoryResponse";
Ti.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(zo) },
  { no: 2, name: "items", kind: "message", T: ur, repeated: !0 }
]);
var zo;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND";
})(zo || (zo = {}));
i.util.setEnumType(zo, "code.transaction.v2.GetPaymentHistoryResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" }
]);
class vi extends w {
  constructor(e) {
    super(), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new vi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new vi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new vi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(vi, e, t);
  }
}
vi.runtime = i;
vi.typeName = "code.transaction.v2.CanWithdrawToAccountRequest";
vi.fields = i.util.newFieldList(() => [
  { no: 1, name: "account", kind: "message", T: R }
]);
class Ei extends w {
  constructor(e) {
    super(), this.accountType = Xo.Unknown, this.isValidPaymentDestination = !1, this.requiresInitialization = !1, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Ei().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ei().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ei().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Ei, e, t);
  }
}
Ei.runtime = i;
Ei.typeName = "code.transaction.v2.CanWithdrawToAccountResponse";
Ei.fields = i.util.newFieldList(() => [
  { no: 2, name: "account_type", kind: "enum", T: i.getEnumType(Xo) },
  { no: 1, name: "is_valid_payment_destination", kind: "scalar", T: 8 },
  { no: 3, name: "requires_initialization", kind: "scalar", T: 8 }
]);
var Xo;
(function(n) {
  n[n.Unknown = 0] = "Unknown", n[n.TokenAccount = 1] = "TokenAccount", n[n.OwnerAccount = 2] = "OwnerAccount";
})(Xo || (Xo = {}));
i.util.setEnumType(Xo, "code.transaction.v2.CanWithdrawToAccountResponse.AccountType", [
  { no: 0, name: "Unknown" },
  { no: 1, name: "TokenAccount" },
  { no: 2, name: "OwnerAccount" }
]);
class Ni extends w {
  constructor(e) {
    super(), this.airdropType = on.UNKNOWN, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Ni().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ni().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ni().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Ni, e, t);
  }
}
Ni.runtime = i;
Ni.typeName = "code.transaction.v2.AirdropRequest";
Ni.fields = i.util.newFieldList(() => [
  { no: 1, name: "airdrop_type", kind: "enum", T: i.getEnumType(on) },
  { no: 2, name: "owner", kind: "message", T: R },
  { no: 3, name: "signature", kind: "message", T: ee }
]);
class bi extends w {
  constructor(e) {
    super(), this.result = Yo.OK, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new bi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new bi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new bi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(bi, e, t);
  }
}
bi.runtime = i;
bi.typeName = "code.transaction.v2.AirdropResponse";
bi.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(Yo) },
  { no: 2, name: "exchange_data", kind: "message", T: Fe }
]);
var Yo;
(function(n) {
  n[n.OK = 0] = "OK", n[n.UNAVAILABLE = 1] = "UNAVAILABLE", n[n.ALREADY_CLAIMED = 2] = "ALREADY_CLAIMED";
})(Yo || (Yo = {}));
i.util.setEnumType(Yo, "code.transaction.v2.AirdropResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "UNAVAILABLE" },
  { no: 2, name: "ALREADY_CLAIMED" }
]);
class Si extends w {
  constructor(e) {
    super(), this.request = { case: void 0 }, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Si().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Si().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Si().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Si, e, t);
  }
}
Si.runtime = i;
Si.typeName = "code.transaction.v2.SwapRequest";
Si.fields = i.util.newFieldList(() => [
  { no: 1, name: "initiate", kind: "message", T: Sn, oneof: "request" },
  { no: 2, name: "submit_signature", kind: "message", T: kn, oneof: "request" }
]);
class Sn extends w {
  constructor(e) {
    super(), this.limit = ce.zero, this.waitForBlockchainStatus = !1, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Sn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Sn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Sn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Sn, e, t);
  }
}
Sn.runtime = i;
Sn.typeName = "code.transaction.v2.SwapRequest.Initiate";
Sn.fields = i.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: R },
  { no: 2, name: "swap_authority", kind: "message", T: R },
  { no: 3, name: "limit", kind: "scalar", T: 4 },
  { no: 4, name: "wait_for_blockchain_status", kind: "scalar", T: 8 },
  { no: 5, name: "signature", kind: "message", T: ee }
]);
class kn extends w {
  constructor(e) {
    super(), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new kn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new kn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new kn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(kn, e, t);
  }
}
kn.runtime = i;
kn.typeName = "code.transaction.v2.SwapRequest.SubmitSignature";
kn.fields = i.util.newFieldList(() => [
  { no: 1, name: "signature", kind: "message", T: ee }
]);
class ki extends w {
  constructor(e) {
    super(), this.response = { case: void 0 }, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ki().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ki().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ki().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(ki, e, t);
  }
}
ki.runtime = i;
ki.typeName = "code.transaction.v2.SwapResponse";
ki.fields = i.util.newFieldList(() => [
  { no: 1, name: "server_parameters", kind: "message", T: In, oneof: "response" },
  { no: 2, name: "success", kind: "message", T: On, oneof: "response" },
  { no: 3, name: "error", kind: "message", T: Bn, oneof: "response" }
]);
class In extends w {
  constructor(e) {
    super(), this.computeUnitLimit = 0, this.computeUnitPrice = ce.zero, this.swapIxnAccounts = [], this.swapIxnData = new Uint8Array(0), this.maxToSend = ce.zero, this.minToReceive = ce.zero, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new In().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new In().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new In().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(In, e, t);
  }
}
In.runtime = i;
In.typeName = "code.transaction.v2.SwapResponse.ServerParameters";
In.fields = i.util.newFieldList(() => [
  { no: 1, name: "payer", kind: "message", T: R },
  { no: 2, name: "recent_blockhash", kind: "message", T: qt },
  { no: 3, name: "compute_unit_limit", kind: "scalar", T: 13 },
  { no: 4, name: "compute_unit_price", kind: "scalar", T: 4 },
  { no: 5, name: "swap_program", kind: "message", T: R },
  { no: 6, name: "swap_ixn_accounts", kind: "message", T: hn, repeated: !0 },
  { no: 7, name: "swap_ixn_data", kind: "scalar", T: 12 },
  { no: 8, name: "max_to_send", kind: "scalar", T: 4 },
  { no: 9, name: "min_to_receive", kind: "scalar", T: 4 },
  { no: 10, name: "nonce", kind: "message", T: R }
]);
class On extends w {
  constructor(e) {
    super(), this.code = Qo.SWAP_SUBMITTED, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new On().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new On().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new On().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(On, e, t);
  }
}
On.runtime = i;
On.typeName = "code.transaction.v2.SwapResponse.Success";
On.fields = i.util.newFieldList(() => [
  { no: 1, name: "code", kind: "enum", T: i.getEnumType(Qo) }
]);
var Qo;
(function(n) {
  n[n.SWAP_SUBMITTED = 0] = "SWAP_SUBMITTED", n[n.SWAP_FINALIZED = 1] = "SWAP_FINALIZED";
})(Qo || (Qo = {}));
i.util.setEnumType(Qo, "code.transaction.v2.SwapResponse.Success.Code", [
  { no: 0, name: "SWAP_SUBMITTED" },
  { no: 1, name: "SWAP_FINALIZED" }
]);
class Bn extends w {
  constructor(e) {
    super(), this.code = Zo.DENIED, this.errorDetails = [], i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Bn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Bn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Bn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Bn, e, t);
  }
}
Bn.runtime = i;
Bn.typeName = "code.transaction.v2.SwapResponse.Error";
Bn.fields = i.util.newFieldList(() => [
  { no: 1, name: "code", kind: "enum", T: i.getEnumType(Zo) },
  { no: 2, name: "error_details", kind: "message", T: _t, repeated: !0 }
]);
var Zo;
(function(n) {
  n[n.DENIED = 0] = "DENIED", n[n.SIGNATURE_ERROR = 2] = "SIGNATURE_ERROR", n[n.INVALID_SWAP = 3] = "INVALID_SWAP", n[n.SWAP_FAILED = 4] = "SWAP_FAILED";
})(Zo || (Zo = {}));
i.util.setEnumType(Zo, "code.transaction.v2.SwapResponse.Error.Code", [
  { no: 0, name: "DENIED" },
  { no: 2, name: "SIGNATURE_ERROR" },
  { no: 3, name: "INVALID_SWAP" },
  { no: 4, name: "SWAP_FAILED" }
]);
class Ii extends w {
  constructor(e) {
    super(), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Ii().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ii().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ii().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Ii, e, t);
  }
}
Ii.runtime = i;
Ii.typeName = "code.transaction.v2.DeclareFiatOnrampPurchaseAttemptRequest";
Ii.fields = i.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: R },
  { no: 2, name: "purchase_amount", kind: "message", T: ht },
  { no: 3, name: "nonce", kind: "message", T: gn },
  { no: 4, name: "signature", kind: "message", T: ee }
]);
class Oi extends w {
  constructor(e) {
    super(), this.result = ea.OK, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Oi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Oi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Oi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Oi, e, t);
  }
}
Oi.runtime = i;
Oi.typeName = "code.transaction.v2.DeclareFiatOnrampPurchaseAttemptResponse";
Oi.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(ea) }
]);
var ea;
(function(n) {
  n[n.OK = 0] = "OK", n[n.INVALID_OWNER = 1] = "INVALID_OWNER", n[n.UNSUPPORTED_CURRENCY = 2] = "UNSUPPORTED_CURRENCY", n[n.AMOUNT_EXCEEDS_MAXIMUM = 3] = "AMOUNT_EXCEEDS_MAXIMUM";
})(ea || (ea = {}));
i.util.setEnumType(ea, "code.transaction.v2.DeclareFiatOnrampPurchaseAttemptResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INVALID_OWNER" },
  { no: 2, name: "UNSUPPORTED_CURRENCY" },
  { no: 3, name: "AMOUNT_EXCEEDS_MAXIMUM" }
]);
class St extends w {
  constructor(e) {
    super(), this.type = { case: void 0 }, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new St().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new St().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new St().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(St, e, t);
  }
}
St.runtime = i;
St.typeName = "code.transaction.v2.Metadata";
St.fields = i.util.newFieldList(() => [
  { no: 1, name: "open_accounts", kind: "message", T: An, oneof: "type" },
  { no: 2, name: "send_private_payment", kind: "message", T: Jn, oneof: "type" },
  { no: 3, name: "receive_payments_privately", kind: "message", T: xn, oneof: "type" },
  { no: 4, name: "upgrade_privacy", kind: "message", T: Ln, oneof: "type" },
  { no: 5, name: "migrate_to_privacy_2022", kind: "message", T: Cn, oneof: "type" },
  { no: 6, name: "send_public_payment", kind: "message", T: Rn, oneof: "type" },
  { no: 7, name: "receive_payments_publicly", kind: "message", T: Pn, oneof: "type" },
  { no: 8, name: "establish_relationship", kind: "message", T: Un, oneof: "type" }
]);
class An extends w {
  constructor(e) {
    super(), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new An().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new An().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new An().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(An, e, t);
  }
}
An.runtime = i;
An.typeName = "code.transaction.v2.OpenAccountsMetadata";
An.fields = i.util.newFieldList(() => []);
class Jn extends w {
  constructor(e) {
    super(), this.isWithdrawal = !1, this.isRemoteSend = !1, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Jn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Jn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Jn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Jn, e, t);
  }
}
Jn.runtime = i;
Jn.typeName = "code.transaction.v2.SendPrivatePaymentMetadata";
Jn.fields = i.util.newFieldList(() => [
  { no: 1, name: "destination", kind: "message", T: R },
  { no: 2, name: "exchange_data", kind: "message", T: Fe },
  { no: 3, name: "is_withdrawal", kind: "scalar", T: 8 },
  { no: 4, name: "is_remote_send", kind: "scalar", T: 8 }
]);
class Rn extends w {
  constructor(e) {
    super(), this.isWithdrawal = !1, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Rn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Rn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Rn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Rn, e, t);
  }
}
Rn.runtime = i;
Rn.typeName = "code.transaction.v2.SendPublicPaymentMetadata";
Rn.fields = i.util.newFieldList(() => [
  { no: 4, name: "source", kind: "message", T: R },
  { no: 1, name: "destination", kind: "message", T: R },
  { no: 2, name: "exchange_data", kind: "message", T: Fe },
  { no: 3, name: "is_withdrawal", kind: "scalar", T: 8 }
]);
class xn extends w {
  constructor(e) {
    super(), this.quarks = ce.zero, this.isDeposit = !1, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new xn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new xn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new xn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(xn, e, t);
  }
}
xn.runtime = i;
xn.typeName = "code.transaction.v2.ReceivePaymentsPrivatelyMetadata";
xn.fields = i.util.newFieldList(() => [
  { no: 1, name: "source", kind: "message", T: R },
  { no: 2, name: "quarks", kind: "scalar", T: 4 },
  { no: 3, name: "is_deposit", kind: "scalar", T: 8 }
]);
class Pn extends w {
  constructor(e) {
    super(), this.quarks = ce.zero, this.isRemoteSend = !1, this.isIssuerVoidingGiftCard = !1, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Pn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Pn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Pn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Pn, e, t);
  }
}
Pn.runtime = i;
Pn.typeName = "code.transaction.v2.ReceivePaymentsPubliclyMetadata";
Pn.fields = i.util.newFieldList(() => [
  { no: 1, name: "source", kind: "message", T: R },
  { no: 2, name: "quarks", kind: "scalar", T: 4 },
  { no: 3, name: "is_remote_send", kind: "scalar", T: 8 },
  { no: 4, name: "is_issuer_voiding_gift_card", kind: "scalar", T: 8 },
  { no: 5, name: "exchange_data", kind: "message", T: Fe }
]);
class Ln extends w {
  constructor(e) {
    super(), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Ln().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ln().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ln().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Ln, e, t);
  }
}
Ln.runtime = i;
Ln.typeName = "code.transaction.v2.UpgradePrivacyMetadata";
Ln.fields = i.util.newFieldList(() => []);
class Cn extends w {
  constructor(e) {
    super(), this.quarks = ce.zero, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Cn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Cn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Cn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Cn, e, t);
  }
}
Cn.runtime = i;
Cn.typeName = "code.transaction.v2.MigrateToPrivacy2022Metadata";
Cn.fields = i.util.newFieldList(() => [
  { no: 1, name: "quarks", kind: "scalar", T: 4 }
]);
class Un extends w {
  constructor(e) {
    super(), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Un().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Un().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Un().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Un, e, t);
  }
}
Un.runtime = i;
Un.typeName = "code.transaction.v2.EstablishRelationshipMetadata";
Un.fields = i.util.newFieldList(() => [
  { no: 1, name: "relationship", kind: "message", T: Ft }
]);
class qn extends w {
  constructor(e) {
    super(), this.id = 0, this.type = { case: void 0 }, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new qn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new qn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new qn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(qn, e, t);
  }
}
qn.runtime = i;
qn.typeName = "code.transaction.v2.Action";
qn.fields = i.util.newFieldList(() => [
  { no: 1, name: "id", kind: "scalar", T: 13 },
  { no: 2, name: "open_account", kind: "message", T: Dn, oneof: "type" },
  { no: 3, name: "close_empty_account", kind: "message", T: Fn, oneof: "type" },
  { no: 4, name: "close_dormant_account", kind: "message", T: _n, oneof: "type" },
  { no: 5, name: "no_privacy_transfer", kind: "message", T: Kn, oneof: "type" },
  { no: 6, name: "no_privacy_withdraw", kind: "message", T: Mn, oneof: "type" },
  { no: 7, name: "temporary_privacy_transfer", kind: "message", T: $n, oneof: "type" },
  { no: 8, name: "temporary_privacy_exchange", kind: "message", T: Vn, oneof: "type" },
  { no: 9, name: "permanent_privacy_upgrade", kind: "message", T: Gn, oneof: "type" },
  { no: 10, name: "fee_payment", kind: "message", T: jn, oneof: "type" }
]);
class Dn extends w {
  constructor(e) {
    super(), this.accountType = lt.UNKNOWN, this.index = ce.zero, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Dn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Dn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Dn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Dn, e, t);
  }
}
Dn.runtime = i;
Dn.typeName = "code.transaction.v2.OpenAccountAction";
Dn.fields = i.util.newFieldList(() => [
  { no: 1, name: "account_type", kind: "enum", T: i.getEnumType(lt) },
  { no: 2, name: "owner", kind: "message", T: R },
  { no: 3, name: "index", kind: "scalar", T: 4 },
  { no: 4, name: "authority", kind: "message", T: R },
  { no: 5, name: "token", kind: "message", T: R },
  { no: 6, name: "authority_signature", kind: "message", T: ee }
]);
class Fn extends w {
  constructor(e) {
    super(), this.accountType = lt.UNKNOWN, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Fn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Fn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Fn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Fn, e, t);
  }
}
Fn.runtime = i;
Fn.typeName = "code.transaction.v2.CloseEmptyAccountAction";
Fn.fields = i.util.newFieldList(() => [
  { no: 1, name: "account_type", kind: "enum", T: i.getEnumType(lt) },
  { no: 2, name: "authority", kind: "message", T: R },
  { no: 3, name: "token", kind: "message", T: R }
]);
class _n extends w {
  constructor(e) {
    super(), this.accountType = lt.UNKNOWN, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new _n().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new _n().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new _n().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(_n, e, t);
  }
}
_n.runtime = i;
_n.typeName = "code.transaction.v2.CloseDormantAccountAction";
_n.fields = i.util.newFieldList(() => [
  { no: 1, name: "account_type", kind: "enum", T: i.getEnumType(lt) },
  { no: 2, name: "authority", kind: "message", T: R },
  { no: 3, name: "token", kind: "message", T: R },
  { no: 4, name: "destination", kind: "message", T: R }
]);
class Kn extends w {
  constructor(e) {
    super(), this.amount = ce.zero, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Kn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Kn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Kn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Kn, e, t);
  }
}
Kn.runtime = i;
Kn.typeName = "code.transaction.v2.NoPrivacyTransferAction";
Kn.fields = i.util.newFieldList(() => [
  { no: 1, name: "authority", kind: "message", T: R },
  { no: 2, name: "source", kind: "message", T: R },
  { no: 3, name: "destination", kind: "message", T: R },
  { no: 4, name: "amount", kind: "scalar", T: 4 }
]);
class Mn extends w {
  constructor(e) {
    super(), this.amount = ce.zero, this.shouldClose = !1, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Mn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Mn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Mn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Mn, e, t);
  }
}
Mn.runtime = i;
Mn.typeName = "code.transaction.v2.NoPrivacyWithdrawAction";
Mn.fields = i.util.newFieldList(() => [
  { no: 1, name: "authority", kind: "message", T: R },
  { no: 2, name: "source", kind: "message", T: R },
  { no: 3, name: "destination", kind: "message", T: R },
  { no: 4, name: "amount", kind: "scalar", T: 4 },
  { no: 5, name: "should_close", kind: "scalar", T: 8 }
]);
class $n extends w {
  constructor(e) {
    super(), this.amount = ce.zero, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new $n().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new $n().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new $n().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals($n, e, t);
  }
}
$n.runtime = i;
$n.typeName = "code.transaction.v2.TemporaryPrivacyTransferAction";
$n.fields = i.util.newFieldList(() => [
  { no: 1, name: "authority", kind: "message", T: R },
  { no: 2, name: "source", kind: "message", T: R },
  { no: 3, name: "destination", kind: "message", T: R },
  { no: 4, name: "amount", kind: "scalar", T: 4 }
]);
class Vn extends w {
  constructor(e) {
    super(), this.amount = ce.zero, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Vn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Vn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Vn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Vn, e, t);
  }
}
Vn.runtime = i;
Vn.typeName = "code.transaction.v2.TemporaryPrivacyExchangeAction";
Vn.fields = i.util.newFieldList(() => [
  { no: 1, name: "authority", kind: "message", T: R },
  { no: 2, name: "source", kind: "message", T: R },
  { no: 3, name: "destination", kind: "message", T: R },
  { no: 4, name: "amount", kind: "scalar", T: 4 }
]);
class Gn extends w {
  constructor(e) {
    super(), this.actionId = 0, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Gn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Gn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Gn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Gn, e, t);
  }
}
Gn.runtime = i;
Gn.typeName = "code.transaction.v2.PermanentPrivacyUpgradeAction";
Gn.fields = i.util.newFieldList(() => [
  { no: 1, name: "action_id", kind: "scalar", T: 13 }
]);
class jn extends w {
  constructor(e) {
    super(), this.type = ta.CODE, this.amount = ce.zero, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new jn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new jn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new jn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(jn, e, t);
  }
}
jn.runtime = i;
jn.typeName = "code.transaction.v2.FeePaymentAction";
jn.fields = i.util.newFieldList(() => [
  { no: 4, name: "type", kind: "enum", T: i.getEnumType(ta) },
  { no: 1, name: "authority", kind: "message", T: R },
  { no: 2, name: "source", kind: "message", T: R },
  { no: 3, name: "amount", kind: "scalar", T: 4 },
  { no: 5, name: "destination", kind: "message", T: R }
]);
var ta;
(function(n) {
  n[n.CODE = 0] = "CODE", n[n.THIRD_PARTY = 1] = "THIRD_PARTY";
})(ta || (ta = {}));
i.util.setEnumType(ta, "code.transaction.v2.FeePaymentAction.FeeType", [
  { no: 0, name: "CODE" },
  { no: 1, name: "THIRD_PARTY" }
]);
class Hn extends w {
  constructor(e) {
    super(), this.actionId = 0, this.nonces = [], this.type = { case: void 0 }, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Hn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Hn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Hn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Hn, e, t);
  }
}
Hn.runtime = i;
Hn.typeName = "code.transaction.v2.ServerParameter";
Hn.fields = i.util.newFieldList(() => [
  { no: 1, name: "action_id", kind: "scalar", T: 13 },
  { no: 2, name: "nonces", kind: "message", T: Wn, repeated: !0 },
  { no: 3, name: "open_account", kind: "message", T: zn, oneof: "type" },
  { no: 4, name: "close_empty_account", kind: "message", T: Xn, oneof: "type" },
  { no: 5, name: "close_dormant_account", kind: "message", T: Yn, oneof: "type" },
  { no: 6, name: "no_privacy_transfer", kind: "message", T: Qn, oneof: "type" },
  { no: 7, name: "no_privacy_withdraw", kind: "message", T: Zn, oneof: "type" },
  { no: 8, name: "temporary_privacy_transfer", kind: "message", T: er, oneof: "type" },
  { no: 9, name: "temporary_privacy_exchange", kind: "message", T: tr, oneof: "type" },
  { no: 10, name: "permanent_privacy_upgrade", kind: "message", T: nr, oneof: "type" },
  { no: 11, name: "fee_payment", kind: "message", T: rr, oneof: "type" }
]);
class Wn extends w {
  constructor(e) {
    super(), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Wn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Wn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Wn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Wn, e, t);
  }
}
Wn.runtime = i;
Wn.typeName = "code.transaction.v2.NoncedTransactionMetadata";
Wn.fields = i.util.newFieldList(() => [
  { no: 1, name: "nonce", kind: "message", T: R },
  { no: 2, name: "blockhash", kind: "message", T: qt }
]);
class zn extends w {
  constructor(e) {
    super(), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new zn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new zn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new zn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(zn, e, t);
  }
}
zn.runtime = i;
zn.typeName = "code.transaction.v2.OpenAccountServerParameter";
zn.fields = i.util.newFieldList(() => []);
class Xn extends w {
  constructor(e) {
    super(), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Xn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Xn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Xn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Xn, e, t);
  }
}
Xn.runtime = i;
Xn.typeName = "code.transaction.v2.CloseEmptyAccountServerParameter";
Xn.fields = i.util.newFieldList(() => []);
class Yn extends w {
  constructor(e) {
    super(), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Yn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Yn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Yn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Yn, e, t);
  }
}
Yn.runtime = i;
Yn.typeName = "code.transaction.v2.CloseDormantAccountServerParameter";
Yn.fields = i.util.newFieldList(() => []);
class Qn extends w {
  constructor(e) {
    super(), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Qn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Qn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Qn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Qn, e, t);
  }
}
Qn.runtime = i;
Qn.typeName = "code.transaction.v2.NoPrivacyTransferServerParameter";
Qn.fields = i.util.newFieldList(() => []);
class Zn extends w {
  constructor(e) {
    super(), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Zn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Zn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Zn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Zn, e, t);
  }
}
Zn.runtime = i;
Zn.typeName = "code.transaction.v2.NoPrivacyWithdrawServerParameter";
Zn.fields = i.util.newFieldList(() => []);
class er extends w {
  constructor(e) {
    super(), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new er().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new er().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new er().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(er, e, t);
  }
}
er.runtime = i;
er.typeName = "code.transaction.v2.TemporaryPrivacyTransferServerParameter";
er.fields = i.util.newFieldList(() => [
  { no: 1, name: "treasury", kind: "message", T: R },
  { no: 2, name: "recent_root", kind: "message", T: Gr }
]);
class tr extends w {
  constructor(e) {
    super(), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new tr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new tr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new tr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(tr, e, t);
  }
}
tr.runtime = i;
tr.typeName = "code.transaction.v2.TemporaryPrivacyExchangeServerParameter";
tr.fields = i.util.newFieldList(() => [
  { no: 1, name: "treasury", kind: "message", T: R },
  { no: 2, name: "recent_root", kind: "message", T: Gr }
]);
class nr extends w {
  constructor(e) {
    super(), this.newCommitmentAmount = ce.zero, this.merkleProof = [], i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new nr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new nr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new nr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(nr, e, t);
  }
}
nr.runtime = i;
nr.typeName = "code.transaction.v2.PermanentPrivacyUpgradeServerParameter";
nr.fields = i.util.newFieldList(() => [
  { no: 1, name: "new_commitment", kind: "message", T: R },
  { no: 2, name: "new_commitment_transcript", kind: "message", T: Gr },
  { no: 3, name: "new_commitment_destination", kind: "message", T: R },
  { no: 4, name: "new_commitment_amount", kind: "scalar", T: 4 },
  { no: 5, name: "merkle_root", kind: "message", T: Gr },
  { no: 6, name: "merkle_proof", kind: "message", T: Gr, repeated: !0 }
]);
class rr extends w {
  constructor(e) {
    super(), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new rr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new rr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new rr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(rr, e, t);
  }
}
rr.runtime = i;
rr.typeName = "code.transaction.v2.FeePaymentServerParameter";
rr.fields = i.util.newFieldList(() => [
  { no: 1, name: "code_destination", kind: "message", T: R }
]);
class _t extends w {
  constructor(e) {
    super(), this.type = { case: void 0 }, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new _t().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new _t().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new _t().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(_t, e, t);
  }
}
_t.runtime = i;
_t.typeName = "code.transaction.v2.ErrorDetails";
_t.fields = i.util.newFieldList(() => [
  { no: 1, name: "reason_string", kind: "message", T: ir, oneof: "type" },
  { no: 2, name: "invalid_signature", kind: "message", T: sr, oneof: "type" }
]);
class ir extends w {
  constructor(e) {
    super(), this.reason = "", i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ir().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ir().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ir().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(ir, e, t);
  }
}
ir.runtime = i;
ir.typeName = "code.transaction.v2.ReasonStringErrorDetails";
ir.fields = i.util.newFieldList(() => [
  { no: 1, name: "reason", kind: "scalar", T: 9 }
]);
class sr extends w {
  constructor(e) {
    super(), this.actionId = 0, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new sr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new sr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new sr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(sr, e, t);
  }
}
sr.runtime = i;
sr.typeName = "code.transaction.v2.InvalidSignatureErrorDetails";
sr.fields = i.util.newFieldList(() => [
  { no: 1, name: "action_id", kind: "scalar", T: 13 },
  { no: 2, name: "expected_transaction", kind: "message", T: Ut },
  { no: 3, name: "provided_signature", kind: "message", T: ee }
]);
class or extends w {
  constructor(e) {
    super(), this.actions = [], i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new or().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new or().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new or().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(or, e, t);
  }
}
or.runtime = i;
or.typeName = "code.transaction.v2.UpgradeableIntent";
or.fields = i.util.newFieldList(() => [
  { no: 1, name: "id", kind: "message", T: Ce },
  { no: 2, name: "actions", kind: "message", T: ar, repeated: !0 }
]);
class ar extends w {
  constructor(e) {
    super(), this.actionId = 0, this.sourceAccountType = lt.UNKNOWN, this.sourceDerivationIndex = ce.zero, this.originalAmount = ce.zero, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ar().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ar().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ar().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(ar, e, t);
  }
}
ar.runtime = i;
ar.typeName = "code.transaction.v2.UpgradeableIntent.UpgradeablePrivateAction";
ar.fields = i.util.newFieldList(() => [
  { no: 1, name: "transaction_blob", kind: "message", T: Ut },
  { no: 2, name: "client_signature", kind: "message", T: ee },
  { no: 3, name: "action_id", kind: "scalar", T: 13 },
  { no: 4, name: "source_account_type", kind: "enum", T: i.getEnumType(lt) },
  { no: 5, name: "source_derivation_index", kind: "scalar", T: 4 },
  { no: 6, name: "original_destination", kind: "message", T: R },
  { no: 7, name: "original_amount", kind: "scalar", T: 4 },
  { no: 8, name: "treasury", kind: "message", T: R },
  { no: 9, name: "recent_root", kind: "message", T: Gr }
]);
class ur extends w {
  constructor(e) {
    super(), this.paymentType = na.UNKNOWN, this.isWithdraw = !1, this.isDeposit = !1, this.isRemoteSend = !1, this.isReturned = !1, this.isAirdrop = !1, this.airdropType = on.UNKNOWN, this.isMicroPayment = !1, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ur().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ur().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ur().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(ur, e, t);
  }
}
ur.runtime = i;
ur.typeName = "code.transaction.v2.PaymentHistoryItem";
ur.fields = i.util.newFieldList(() => [
  { no: 1, name: "cursor", kind: "message", T: za },
  { no: 2, name: "exchange_data", kind: "message", T: Fe },
  { no: 3, name: "payment_type", kind: "enum", T: i.getEnumType(na) },
  { no: 4, name: "is_withdraw", kind: "scalar", T: 8 },
  { no: 5, name: "is_deposit", kind: "scalar", T: 8 },
  { no: 6, name: "timestamp", kind: "message", T: Ae },
  { no: 7, name: "is_remote_send", kind: "scalar", T: 8 },
  { no: 8, name: "is_returned", kind: "scalar", T: 8 },
  { no: 9, name: "is_airdrop", kind: "scalar", T: 8 },
  { no: 10, name: "airdrop_type", kind: "enum", T: i.getEnumType(on) },
  { no: 11, name: "is_micro_payment", kind: "scalar", T: 8 },
  { no: 12, name: "intent_id", kind: "message", T: Ce }
]);
var na;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.SEND = 1] = "SEND", n[n.RECEIVE = 2] = "RECEIVE";
})(na || (na = {}));
i.util.setEnumType(na, "code.transaction.v2.PaymentHistoryItem.PaymentType", [
  { no: 0, name: "UNKNOWN" },
  { no: 1, name: "SEND" },
  { no: 2, name: "RECEIVE" }
]);
class Fe extends w {
  constructor(e) {
    super(), this.currency = "", this.exchangeRate = 0, this.nativeAmount = 0, this.quarks = ce.zero, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Fe().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Fe().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Fe().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Fe, e, t);
  }
}
Fe.runtime = i;
Fe.typeName = "code.transaction.v2.ExchangeData";
Fe.fields = i.util.newFieldList(() => [
  { no: 1, name: "currency", kind: "scalar", T: 9 },
  { no: 2, name: "exchange_rate", kind: "scalar", T: 1 },
  { no: 3, name: "native_amount", kind: "scalar", T: 1 },
  { no: 4, name: "quarks", kind: "scalar", T: 4 }
]);
class ht extends w {
  constructor(e) {
    super(), this.currency = "", this.nativeAmount = 0, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ht().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ht().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ht().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(ht, e, t);
  }
}
ht.runtime = i;
ht.typeName = "code.transaction.v2.ExchangeDataWithoutRate";
ht.fields = i.util.newFieldList(() => [
  { no: 1, name: "currency", kind: "scalar", T: 9 },
  { no: 2, name: "native_amount", kind: "scalar", T: 1 }
]);
class Kt extends w {
  constructor(e) {
    super(), this.feeBps = 0, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Kt().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Kt().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Kt().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Kt, e, t);
  }
}
Kt.runtime = i;
Kt.typeName = "code.transaction.v2.AdditionalFeePayment";
Kt.fields = i.util.newFieldList(() => [
  { no: 1, name: "destination", kind: "message", T: R },
  { no: 2, name: "fee_bps", kind: "scalar", T: 13 }
]);
class cr extends w {
  constructor(e) {
    super(), this.nextTransaction = 0, this.maxPerTransaction = 0, this.maxPerDay = 0, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new cr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new cr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new cr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(cr, e, t);
  }
}
cr.runtime = i;
cr.typeName = "code.transaction.v2.SendLimit";
cr.fields = i.util.newFieldList(() => [
  { no: 1, name: "next_transaction", kind: "scalar", T: 2 },
  { no: 2, name: "max_per_transaction", kind: "scalar", T: 2 },
  { no: 3, name: "max_per_day", kind: "scalar", T: 2 }
]);
class lr extends w {
  constructor(e) {
    super(), this.maxQuarks = ce.zero, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new lr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new lr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new lr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(lr, e, t);
  }
}
lr.runtime = i;
lr.typeName = "code.transaction.v2.DepositLimit";
lr.fields = i.util.newFieldList(() => [
  { no: 1, name: "max_quarks", kind: "scalar", T: 4 }
]);
class fr extends w {
  constructor(e) {
    super(), this.maxPerTransaction = 0, this.minPerTransaction = 0, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new fr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new fr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new fr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(fr, e, t);
  }
}
fr.runtime = i;
fr.typeName = "code.transaction.v2.MicroPaymentLimit";
fr.fields = i.util.newFieldList(() => [
  { no: 1, name: "max_per_transaction", kind: "scalar", T: 2 },
  { no: 2, name: "min_per_transaction", kind: "scalar", T: 2 }
]);
class mr extends w {
  constructor(e) {
    super(), this.minPerTransaction = 0, this.maxPerTransaction = 0, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new mr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new mr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new mr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(mr, e, t);
  }
}
mr.runtime = i;
mr.typeName = "code.transaction.v2.BuyModuleLimit";
mr.fields = i.util.newFieldList(() => [
  { no: 1, name: "min_per_transaction", kind: "scalar", T: 2 },
  { no: 2, name: "max_per_transaction", kind: "scalar", T: 2 }
]);
let za = class Io extends w {
  constructor(e) {
    super(), this.value = new Uint8Array(0), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Io().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Io().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Io().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Io, e, t);
  }
};
za.runtime = i;
za.typeName = "code.transaction.v2.Cursor";
za.fields = i.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class Bi extends w {
  constructor(e) {
    super(), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Bi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Bi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Bi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Bi, e, t);
  }
}
Bi.runtime = i;
Bi.typeName = "code.account.v1.IsCodeAccountRequest";
Bi.fields = i.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: R },
  { no: 2, name: "signature", kind: "message", T: ee }
]);
class Ai extends w {
  constructor(e) {
    super(), this.result = ra.OK, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Ai().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ai().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ai().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Ai, e, t);
  }
}
Ai.runtime = i;
Ai.typeName = "code.account.v1.IsCodeAccountResponse";
Ai.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(ra) }
]);
var ra;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND", n[n.UNLOCKED_TIMELOCK_ACCOUNT = 2] = "UNLOCKED_TIMELOCK_ACCOUNT";
})(ra || (ra = {}));
i.util.setEnumType(ra, "code.account.v1.IsCodeAccountResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" },
  { no: 2, name: "UNLOCKED_TIMELOCK_ACCOUNT" }
]);
class Ji extends w {
  constructor(e) {
    super(), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Ji().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ji().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ji().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Ji, e, t);
  }
}
Ji.runtime = i;
Ji.typeName = "code.account.v1.GetTokenAccountInfosRequest";
Ji.fields = i.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: R },
  { no: 2, name: "signature", kind: "message", T: ee }
]);
class Ri extends w {
  constructor(e) {
    super(), this.result = ia.OK, this.tokenAccountInfos = {}, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Ri().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ri().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ri().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Ri, e, t);
  }
}
Ri.runtime = i;
Ri.typeName = "code.account.v1.GetTokenAccountInfosResponse";
Ri.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(ia) },
  { no: 2, name: "token_account_infos", kind: "map", K: 9, V: { kind: "message", T: dr } }
]);
var ia;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND";
})(ia || (ia = {}));
i.util.setEnumType(ia, "code.account.v1.GetTokenAccountInfosResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" }
]);
class xi extends w {
  constructor(e) {
    super(), this.signatures = [], i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new xi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new xi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new xi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(xi, e, t);
  }
}
xi.runtime = i;
xi.typeName = "code.account.v1.LinkAdditionalAccountsRequest";
xi.fields = i.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: R },
  { no: 2, name: "swap_authority", kind: "message", T: R },
  { no: 3, name: "signatures", kind: "message", T: ee, repeated: !0 }
]);
class Pi extends w {
  constructor(e) {
    super(), this.result = sa.OK, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Pi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Pi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Pi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Pi, e, t);
  }
}
Pi.runtime = i;
Pi.typeName = "code.account.v1.LinkAdditionalAccountsResponse";
Pi.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(sa) }
]);
var sa;
(function(n) {
  n[n.OK = 0] = "OK", n[n.DENIED = 1] = "DENIED", n[n.INVALID_ACCOUNT = 2] = "INVALID_ACCOUNT";
})(sa || (sa = {}));
i.util.setEnumType(sa, "code.account.v1.LinkAdditionalAccountsResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "DENIED" },
  { no: 2, name: "INVALID_ACCOUNT" }
]);
class dr extends w {
  constructor(e) {
    super(), this.accountType = lt.UNKNOWN, this.index = ce.zero, this.balanceSource = oa.UNKNOWN, this.balance = ce.zero, this.managementState = aa.UNKNOWN, this.blockchainState = ua.UNKNOWN, this.mustRotate = !1, this.claimState = ca.UNKNOWN, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new dr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new dr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new dr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(dr, e, t);
  }
}
dr.runtime = i;
dr.typeName = "code.account.v1.TokenAccountInfo";
dr.fields = i.util.newFieldList(() => [
  { no: 1, name: "address", kind: "message", T: R },
  { no: 2, name: "owner", kind: "message", T: R },
  { no: 3, name: "authority", kind: "message", T: R },
  { no: 4, name: "account_type", kind: "enum", T: i.getEnumType(lt) },
  { no: 5, name: "index", kind: "scalar", T: 4 },
  { no: 6, name: "balance_source", kind: "enum", T: i.getEnumType(oa) },
  { no: 7, name: "balance", kind: "scalar", T: 4 },
  { no: 8, name: "management_state", kind: "enum", T: i.getEnumType(aa) },
  { no: 9, name: "blockchain_state", kind: "enum", T: i.getEnumType(ua) },
  { no: 10, name: "must_rotate", kind: "scalar", T: 8 },
  { no: 11, name: "claim_state", kind: "enum", T: i.getEnumType(ca) },
  { no: 12, name: "original_exchange_data", kind: "message", T: Fe },
  { no: 13, name: "mint", kind: "message", T: R },
  { no: 16, name: "relationship", kind: "message", T: Ft }
]);
var oa;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.BLOCKCHAIN = 1] = "BLOCKCHAIN", n[n.CACHE = 2] = "CACHE";
})(oa || (oa = {}));
i.util.setEnumType(oa, "code.account.v1.TokenAccountInfo.BalanceSource", [
  { no: 0, name: "BALANCE_SOURCE_UNKNOWN" },
  { no: 1, name: "BALANCE_SOURCE_BLOCKCHAIN" },
  { no: 2, name: "BALANCE_SOURCE_CACHE" }
]);
var aa;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.NONE = 1] = "NONE", n[n.LOCKING = 2] = "LOCKING", n[n.LOCKED = 3] = "LOCKED", n[n.UNLOCKING = 4] = "UNLOCKING", n[n.UNLOCKED = 5] = "UNLOCKED", n[n.CLOSING = 6] = "CLOSING", n[n.CLOSED = 7] = "CLOSED";
})(aa || (aa = {}));
i.util.setEnumType(aa, "code.account.v1.TokenAccountInfo.ManagementState", [
  { no: 0, name: "MANAGEMENT_STATE_UNKNOWN" },
  { no: 1, name: "MANAGEMENT_STATE_NONE" },
  { no: 2, name: "MANAGEMENT_STATE_LOCKING" },
  { no: 3, name: "MANAGEMENT_STATE_LOCKED" },
  { no: 4, name: "MANAGEMENT_STATE_UNLOCKING" },
  { no: 5, name: "MANAGEMENT_STATE_UNLOCKED" },
  { no: 6, name: "MANAGEMENT_STATE_CLOSING" },
  { no: 7, name: "MANAGEMENT_STATE_CLOSED" }
]);
var ua;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.DOES_NOT_EXIST = 1] = "DOES_NOT_EXIST", n[n.EXISTS = 2] = "EXISTS";
})(ua || (ua = {}));
i.util.setEnumType(ua, "code.account.v1.TokenAccountInfo.BlockchainState", [
  { no: 0, name: "BLOCKCHAIN_STATE_UNKNOWN" },
  { no: 1, name: "BLOCKCHAIN_STATE_DOES_NOT_EXIST" },
  { no: 2, name: "BLOCKCHAIN_STATE_EXISTS" }
]);
var ca;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.NOT_CLAIMED = 1] = "NOT_CLAIMED", n[n.CLAIMED = 2] = "CLAIMED", n[n.EXPIRED = 3] = "EXPIRED";
})(ca || (ca = {}));
i.util.setEnumType(ca, "code.account.v1.TokenAccountInfo.ClaimState", [
  { no: 0, name: "CLAIM_STATE_UNKNOWN" },
  { no: 1, name: "CLAIM_STATE_NOT_CLAIMED" },
  { no: 2, name: "CLAIM_STATE_CLAIMED" },
  { no: 3, name: "CLAIM_STATE_EXPIRED" }
]);
te.Unary, te.Unary, te.Unary;
class Li extends w {
  constructor(e) {
    super(), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Li().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Li().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Li().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Li, e, t);
  }
}
Li.runtime = i;
Li.typeName = "code.badge.v1.ResetBadgeCountRequest";
Li.fields = i.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: R },
  { no: 2, name: "signature", kind: "message", T: ee }
]);
class Ci extends w {
  constructor(e) {
    super(), this.result = la.OK, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Ci().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ci().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ci().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Ci, e, t);
  }
}
Ci.runtime = i;
Ci.typeName = "code.badge.v1.ResetBadgeCountResponse";
Ci.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(la) }
]);
var la;
(function(n) {
  n[n.OK = 0] = "OK";
})(la || (la = {}));
i.util.setEnumType(la, "code.badge.v1.ResetBadgeCountResponse.Result", [
  { no: 0, name: "OK" }
]);
te.Unary;
class Ui extends w {
  constructor(e) {
    super(), this.pageSize = 0, this.direction = fa.ASC, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Ui().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ui().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ui().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Ui, e, t);
  }
}
Ui.runtime = i;
Ui.typeName = "code.chat.v1.GetChatsRequest";
Ui.fields = i.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: R },
  { no: 2, name: "signature", kind: "message", T: ee },
  { no: 3, name: "page_size", kind: "scalar", T: 13 },
  { no: 4, name: "cursor", kind: "message", T: pt },
  { no: 5, name: "direction", kind: "enum", T: i.getEnumType(fa) }
]);
var fa;
(function(n) {
  n[n.ASC = 0] = "ASC", n[n.DESC = 1] = "DESC";
})(fa || (fa = {}));
i.util.setEnumType(fa, "code.chat.v1.GetChatsRequest.Direction", [
  { no: 0, name: "ASC" },
  { no: 1, name: "DESC" }
]);
class qi extends w {
  constructor(e) {
    super(), this.result = ma.OK, this.chats = [], i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new qi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new qi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new qi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(qi, e, t);
  }
}
qi.runtime = i;
qi.typeName = "code.chat.v1.GetChatsResponse";
qi.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(ma) },
  { no: 2, name: "chats", kind: "message", T: hr, repeated: !0 }
]);
var ma;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND";
})(ma || (ma = {}));
i.util.setEnumType(ma, "code.chat.v1.GetChatsResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" }
]);
class Di extends w {
  constructor(e) {
    super(), this.pageSize = 0, this.direction = da.ASC, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Di().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Di().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Di().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Di, e, t);
  }
}
Di.runtime = i;
Di.typeName = "code.chat.v1.GetMessagesRequest";
Di.fields = i.util.newFieldList(() => [
  { no: 1, name: "chat_id", kind: "message", T: ut },
  { no: 2, name: "owner", kind: "message", T: R },
  { no: 3, name: "signature", kind: "message", T: ee },
  { no: 4, name: "page_size", kind: "scalar", T: 13 },
  { no: 5, name: "cursor", kind: "message", T: pt },
  { no: 6, name: "direction", kind: "enum", T: i.getEnumType(da) }
]);
var da;
(function(n) {
  n[n.ASC = 0] = "ASC", n[n.DESC = 1] = "DESC";
})(da || (da = {}));
i.util.setEnumType(da, "code.chat.v1.GetMessagesRequest.Direction", [
  { no: 0, name: "ASC" },
  { no: 1, name: "DESC" }
]);
class Fi extends w {
  constructor(e) {
    super(), this.result = ha.OK, this.messages = [], i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Fi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Fi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Fi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Fi, e, t);
  }
}
Fi.runtime = i;
Fi.typeName = "code.chat.v1.GetMessagesResponse";
Fi.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(ha) },
  { no: 2, name: "messages", kind: "message", T: pr, repeated: !0 }
]);
var ha;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND";
})(ha || (ha = {}));
i.util.setEnumType(ha, "code.chat.v1.GetMessagesResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" }
]);
class _i extends w {
  constructor(e) {
    super(), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new _i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new _i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new _i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(_i, e, t);
  }
}
_i.runtime = i;
_i.typeName = "code.chat.v1.AdvancePointerRequest";
_i.fields = i.util.newFieldList(() => [
  { no: 1, name: "chat_id", kind: "message", T: ut },
  { no: 2, name: "pointer", kind: "message", T: $t },
  { no: 3, name: "owner", kind: "message", T: R },
  { no: 4, name: "signature", kind: "message", T: ee }
]);
class Ki extends w {
  constructor(e) {
    super(), this.result = pa.OK, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Ki().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ki().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ki().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Ki, e, t);
  }
}
Ki.runtime = i;
Ki.typeName = "code.chat.v1.AdvancePointerResponse";
Ki.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(pa) }
]);
var pa;
(function(n) {
  n[n.OK = 0] = "OK", n[n.CHAT_NOT_FOUND = 1] = "CHAT_NOT_FOUND", n[n.MESSAGE_NOT_FOUND = 2] = "MESSAGE_NOT_FOUND";
})(pa || (pa = {}));
i.util.setEnumType(pa, "code.chat.v1.AdvancePointerResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "CHAT_NOT_FOUND" },
  { no: 2, name: "MESSAGE_NOT_FOUND" }
]);
class Mi extends w {
  constructor(e) {
    super(), this.isMuted = !1, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Mi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Mi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Mi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Mi, e, t);
  }
}
Mi.runtime = i;
Mi.typeName = "code.chat.v1.SetMuteStateRequest";
Mi.fields = i.util.newFieldList(() => [
  { no: 1, name: "chat_id", kind: "message", T: ut },
  { no: 2, name: "is_muted", kind: "scalar", T: 8 },
  { no: 3, name: "owner", kind: "message", T: R },
  { no: 4, name: "signature", kind: "message", T: ee }
]);
class $i extends w {
  constructor(e) {
    super(), this.result = ga.OK, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new $i().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new $i().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new $i().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals($i, e, t);
  }
}
$i.runtime = i;
$i.typeName = "code.chat.v1.SetMuteStateResponse";
$i.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(ga) }
]);
var ga;
(function(n) {
  n[n.OK = 0] = "OK", n[n.CHAT_NOT_FOUND = 1] = "CHAT_NOT_FOUND", n[n.CANT_MUTE = 2] = "CANT_MUTE";
})(ga || (ga = {}));
i.util.setEnumType(ga, "code.chat.v1.SetMuteStateResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "CHAT_NOT_FOUND" },
  { no: 2, name: "CANT_MUTE" }
]);
class Vi extends w {
  constructor(e) {
    super(), this.isSubscribed = !1, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Vi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Vi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Vi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Vi, e, t);
  }
}
Vi.runtime = i;
Vi.typeName = "code.chat.v1.SetSubscriptionStateRequest";
Vi.fields = i.util.newFieldList(() => [
  { no: 1, name: "chat_id", kind: "message", T: ut },
  { no: 2, name: "is_subscribed", kind: "scalar", T: 8 },
  { no: 3, name: "owner", kind: "message", T: R },
  { no: 4, name: "signature", kind: "message", T: ee }
]);
class Gi extends w {
  constructor(e) {
    super(), this.result = ya.OK, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Gi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Gi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Gi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Gi, e, t);
  }
}
Gi.runtime = i;
Gi.typeName = "code.chat.v1.SetSubscriptionStateResponse";
Gi.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(ya) }
]);
var ya;
(function(n) {
  n[n.OK = 0] = "OK", n[n.CHAT_NOT_FOUND = 1] = "CHAT_NOT_FOUND", n[n.CANT_UNSUBSCRIBE = 2] = "CANT_UNSUBSCRIBE";
})(ya || (ya = {}));
i.util.setEnumType(ya, "code.chat.v1.SetSubscriptionStateResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "CHAT_NOT_FOUND" },
  { no: 2, name: "CANT_UNSUBSCRIBE" }
]);
class ut extends w {
  constructor(e) {
    super(), this.value = new Uint8Array(0), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ut().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ut().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ut().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(ut, e, t);
  }
}
ut.runtime = i;
ut.typeName = "code.chat.v1.ChatId";
ut.fields = i.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class Mt extends w {
  constructor(e) {
    super(), this.value = new Uint8Array(0), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Mt().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Mt().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Mt().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Mt, e, t);
  }
}
Mt.runtime = i;
Mt.typeName = "code.chat.v1.ChatMessageId";
Mt.fields = i.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class $t extends w {
  constructor(e) {
    super(), this.kind = wa.UNKNOWN, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new $t().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new $t().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new $t().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals($t, e, t);
  }
}
$t.runtime = i;
$t.typeName = "code.chat.v1.Pointer";
$t.fields = i.util.newFieldList(() => [
  { no: 1, name: "kind", kind: "enum", T: i.getEnumType(wa) },
  { no: 2, name: "value", kind: "message", T: Mt }
]);
var wa;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.READ = 1] = "READ";
})(wa || (wa = {}));
i.util.setEnumType(wa, "code.chat.v1.Pointer.Kind", [
  { no: 0, name: "UNKNOWN" },
  { no: 1, name: "READ" }
]);
class hr extends w {
  constructor(e) {
    super(), this.title = { case: void 0 }, this.numUnread = 0, this.isMuted = !1, this.isSubscribed = !1, this.canMute = !1, this.canUnsubscribe = !1, this.isVerified = !1, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new hr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new hr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new hr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(hr, e, t);
  }
}
hr.runtime = i;
hr.typeName = "code.chat.v1.ChatMetadata";
hr.fields = i.util.newFieldList(() => [
  { no: 1, name: "chat_id", kind: "message", T: ut },
  { no: 2, name: "localized", kind: "message", T: Vt, oneof: "title" },
  { no: 3, name: "domain", kind: "message", T: at, oneof: "title" },
  { no: 4, name: "read_pointer", kind: "message", T: $t },
  { no: 5, name: "num_unread", kind: "scalar", T: 13 },
  { no: 6, name: "is_muted", kind: "scalar", T: 8 },
  { no: 7, name: "is_subscribed", kind: "scalar", T: 8 },
  { no: 8, name: "can_mute", kind: "scalar", T: 8 },
  { no: 9, name: "can_unsubscribe", kind: "scalar", T: 8 },
  { no: 10, name: "cursor", kind: "message", T: pt },
  { no: 11, name: "is_verified", kind: "scalar", T: 8 }
]);
class pr extends w {
  constructor(e) {
    super(), this.content = [], i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new pr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new pr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new pr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(pr, e, t);
  }
}
pr.runtime = i;
pr.typeName = "code.chat.v1.ChatMessage";
pr.fields = i.util.newFieldList(() => [
  { no: 1, name: "message_id", kind: "message", T: Mt },
  { no: 2, name: "ts", kind: "message", T: Ae },
  { no: 3, name: "content", kind: "message", T: gr, repeated: !0 },
  { no: 4, name: "cursor", kind: "message", T: pt }
]);
class gr extends w {
  constructor(e) {
    super(), this.type = { case: void 0 }, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new gr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new gr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new gr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(gr, e, t);
  }
}
gr.runtime = i;
gr.typeName = "code.chat.v1.Content";
gr.fields = i.util.newFieldList(() => [
  { no: 1, name: "localized", kind: "message", T: Vt, oneof: "type" },
  { no: 2, name: "exchange_data", kind: "message", T: yr, oneof: "type" },
  { no: 3, name: "nacl_box", kind: "message", T: wr, oneof: "type" }
]);
class Vt extends w {
  constructor(e) {
    super(), this.keyOrText = "", i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Vt().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Vt().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Vt().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Vt, e, t);
  }
}
Vt.runtime = i;
Vt.typeName = "code.chat.v1.LocalizedContent";
Vt.fields = i.util.newFieldList(() => [
  { no: 1, name: "key_or_text", kind: "scalar", T: 9 }
]);
class yr extends w {
  constructor(e) {
    super(), this.verb = Ta.UNKNOWN, this.exchangeData = { case: void 0 }, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new yr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new yr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new yr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(yr, e, t);
  }
}
yr.runtime = i;
yr.typeName = "code.chat.v1.ExchangeDataContent";
yr.fields = i.util.newFieldList(() => [
  { no: 1, name: "verb", kind: "enum", T: i.getEnumType(Ta) },
  { no: 2, name: "exact", kind: "message", T: Fe, oneof: "exchange_data" },
  { no: 3, name: "partial", kind: "message", T: ht, oneof: "exchange_data" }
]);
var Ta;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.GAVE = 1] = "GAVE", n[n.RECEIVED = 2] = "RECEIVED", n[n.WITHDREW = 3] = "WITHDREW", n[n.DEPOSITED = 4] = "DEPOSITED", n[n.SENT = 5] = "SENT", n[n.RETURNED = 6] = "RETURNED", n[n.SPENT = 7] = "SPENT", n[n.PAID = 8] = "PAID", n[n.PURCHASED = 9] = "PURCHASED";
})(Ta || (Ta = {}));
i.util.setEnumType(Ta, "code.chat.v1.ExchangeDataContent.Verb", [
  { no: 0, name: "UNKNOWN" },
  { no: 1, name: "GAVE" },
  { no: 2, name: "RECEIVED" },
  { no: 3, name: "WITHDREW" },
  { no: 4, name: "DEPOSITED" },
  { no: 5, name: "SENT" },
  { no: 6, name: "RETURNED" },
  { no: 7, name: "SPENT" },
  { no: 8, name: "PAID" },
  { no: 9, name: "PURCHASED" }
]);
class wr extends w {
  constructor(e) {
    super(), this.nonce = new Uint8Array(0), this.encryptedPayload = new Uint8Array(0), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new wr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new wr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new wr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(wr, e, t);
  }
}
wr.runtime = i;
wr.typeName = "code.chat.v1.NaclBoxEncryptedContent";
wr.fields = i.util.newFieldList(() => [
  { no: 1, name: "peer_public_key", kind: "message", T: R },
  { no: 2, name: "nonce", kind: "scalar", T: 12 },
  { no: 3, name: "encrypted_payload", kind: "scalar", T: 12 }
]);
class pt extends w {
  constructor(e) {
    super(), this.value = new Uint8Array(0), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new pt().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new pt().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new pt().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(pt, e, t);
  }
}
pt.runtime = i;
pt.typeName = "code.chat.v1.Cursor";
pt.fields = i.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
te.Unary, te.Unary, te.Unary, te.Unary, te.Unary;
class ji extends w {
  constructor(e) {
    super(), this.contacts = [], i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ji().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ji().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ji().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(ji, e, t);
  }
}
ji.runtime = i;
ji.typeName = "code.contact.v1.AddContactsRequest";
ji.fields = i.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: R },
  { no: 2, name: "signature", kind: "message", T: ee },
  { no: 3, name: "container_id", kind: "message", T: Ze },
  { no: 4, name: "contacts", kind: "message", T: Ue, repeated: !0 }
]);
class Hi extends w {
  constructor(e) {
    super(), this.result = va.OK, this.contactStatus = {}, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Hi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Hi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Hi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Hi, e, t);
  }
}
Hi.runtime = i;
Hi.typeName = "code.contact.v1.AddContactsResponse";
Hi.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(va) },
  { no: 2, name: "contact_status", kind: "map", K: 9, V: { kind: "message", T: Gt } }
]);
var va;
(function(n) {
  n[n.OK = 0] = "OK";
})(va || (va = {}));
i.util.setEnumType(va, "code.contact.v1.AddContactsResponse.Result", [
  { no: 0, name: "OK" }
]);
class Wi extends w {
  constructor(e) {
    super(), this.contacts = [], i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Wi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Wi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Wi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Wi, e, t);
  }
}
Wi.runtime = i;
Wi.typeName = "code.contact.v1.RemoveContactsRequest";
Wi.fields = i.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: R },
  { no: 2, name: "signature", kind: "message", T: ee },
  { no: 3, name: "container_id", kind: "message", T: Ze },
  { no: 4, name: "contacts", kind: "message", T: Ue, repeated: !0 }
]);
class zi extends w {
  constructor(e) {
    super(), this.result = Ea.OK, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new zi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new zi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new zi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(zi, e, t);
  }
}
zi.runtime = i;
zi.typeName = "code.contact.v1.RemoveContactsResponse";
zi.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(Ea) }
]);
var Ea;
(function(n) {
  n[n.OK = 0] = "OK";
})(Ea || (Ea = {}));
i.util.setEnumType(Ea, "code.contact.v1.RemoveContactsResponse.Result", [
  { no: 0, name: "OK" }
]);
class Xi extends w {
  constructor(e) {
    super(), this.includeOnlyInAppContacts = !1, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Xi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Xi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Xi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Xi, e, t);
  }
}
Xi.runtime = i;
Xi.typeName = "code.contact.v1.GetContactsRequest";
Xi.fields = i.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: R },
  { no: 2, name: "signature", kind: "message", T: ee },
  { no: 3, name: "container_id", kind: "message", T: Ze },
  { no: 4, name: "page_token", kind: "message", T: Xa },
  { no: 5, name: "include_only_in_app_contacts", kind: "scalar", T: 8 }
]);
class Yi extends w {
  constructor(e) {
    super(), this.result = Na.OK, this.contacts = [], i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Yi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Yi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Yi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Yi, e, t);
  }
}
Yi.runtime = i;
Yi.typeName = "code.contact.v1.GetContactsResponse";
Yi.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(Na) },
  { no: 2, name: "contacts", kind: "message", T: Tr, repeated: !0 },
  { no: 3, name: "next_page_token", kind: "message", T: Xa }
]);
var Na;
(function(n) {
  n[n.OK = 0] = "OK";
})(Na || (Na = {}));
i.util.setEnumType(Na, "code.contact.v1.GetContactsResponse.Result", [
  { no: 0, name: "OK" }
]);
class Tr extends w {
  constructor(e) {
    super(), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Tr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Tr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Tr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Tr, e, t);
  }
}
Tr.runtime = i;
Tr.typeName = "code.contact.v1.Contact";
Tr.fields = i.util.newFieldList(() => [
  { no: 1, name: "phone_number", kind: "message", T: Ue },
  { no: 2, name: "status", kind: "message", T: Gt }
]);
class Gt extends w {
  constructor(e) {
    super(), this.isRegistered = !1, this.isInvited = !1, this.isInviteRevoked = !1, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Gt().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Gt().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Gt().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Gt, e, t);
  }
}
Gt.runtime = i;
Gt.typeName = "code.contact.v1.ContactStatus";
Gt.fields = i.util.newFieldList(() => [
  { no: 1, name: "is_registered", kind: "scalar", T: 8 },
  { no: 2, name: "is_invited", kind: "scalar", T: 8 },
  { no: 3, name: "is_invite_revoked", kind: "scalar", T: 8 }
]);
let Xa = class Oo extends w {
  constructor(e) {
    super(), this.value = new Uint8Array(0), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Oo().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Oo().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Oo().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Oo, e, t);
  }
};
Xa.runtime = i;
Xa.typeName = "code.contact.v1.PageToken";
Xa.fields = i.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
te.Unary, te.Unary, te.Unary;
class Qi extends w {
  constructor(e) {
    super(), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Qi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Qi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Qi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Qi, e, t);
  }
}
Qi.runtime = i;
Qi.typeName = "code.currency.v1.GetAllRatesRequest";
Qi.fields = i.util.newFieldList(() => [
  { no: 1, name: "timestamp", kind: "message", T: Ae }
]);
class Zi extends w {
  constructor(e) {
    super(), this.result = ba.OK, this.rates = {}, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Zi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Zi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Zi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Zi, e, t);
  }
}
Zi.runtime = i;
Zi.typeName = "code.currency.v1.GetAllRatesResponse";
Zi.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(ba) },
  { no: 2, name: "as_of", kind: "message", T: Ae },
  { no: 3, name: "rates", kind: "map", K: 9, V: { kind: "scalar", T: 1 } }
]);
var ba;
(function(n) {
  n[n.OK = 0] = "OK", n[n.MISSING_DATA = 1] = "MISSING_DATA";
})(ba || (ba = {}));
i.util.setEnumType(ba, "code.currency.v1.GetAllRatesResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "MISSING_DATA" }
]);
te.Unary;
class es extends w {
  constructor(e) {
    super(), this.owners = [], this.signatures = [], i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new es().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new es().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new es().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(es, e, t);
  }
}
es.runtime = i;
es.typeName = "code.device.v1.RegisterLoggedInAccountsRequest";
es.fields = i.util.newFieldList(() => [
  { no: 1, name: "app_install", kind: "message", T: bt },
  { no: 2, name: "owners", kind: "message", T: R, repeated: !0 },
  { no: 3, name: "signatures", kind: "message", T: ee, repeated: !0 }
]);
class ts extends w {
  constructor(e) {
    super(), this.result = Sa.OK, this.invalidOwners = [], i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ts().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ts().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ts().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(ts, e, t);
  }
}
ts.runtime = i;
ts.typeName = "code.device.v1.RegisterLoggedInAccountsResponse";
ts.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(Sa) },
  { no: 2, name: "invalid_owners", kind: "message", T: R, repeated: !0 }
]);
var Sa;
(function(n) {
  n[n.OK = 0] = "OK", n[n.INVALID_OWNER = 1] = "INVALID_OWNER";
})(Sa || (Sa = {}));
i.util.setEnumType(Sa, "code.device.v1.RegisterLoggedInAccountsResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INVALID_OWNER" }
]);
class ns extends w {
  constructor(e) {
    super(), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ns().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ns().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ns().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(ns, e, t);
  }
}
ns.runtime = i;
ns.typeName = "code.device.v1.GetLoggedInAccountsRequest";
ns.fields = i.util.newFieldList(() => [
  { no: 1, name: "app_install", kind: "message", T: bt }
]);
class rs extends w {
  constructor(e) {
    super(), this.result = ka.OK, this.owners = [], i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new rs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new rs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new rs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(rs, e, t);
  }
}
rs.runtime = i;
rs.typeName = "code.device.v1.GetLoggedInAccountsResponse";
rs.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(ka) },
  { no: 2, name: "owners", kind: "message", T: R, repeated: !0 }
]);
var ka;
(function(n) {
  n[n.OK = 0] = "OK";
})(ka || (ka = {}));
i.util.setEnumType(ka, "code.device.v1.GetLoggedInAccountsResponse.Result", [
  { no: 0, name: "OK" }
]);
te.Unary, te.Unary;
var Ia;
(function(n) {
  n[n.NOT_INVITED = 0] = "NOT_INVITED", n[n.INVITED = 1] = "INVITED", n[n.REGISTERED = 2] = "REGISTERED", n[n.REVOKED = 3] = "REVOKED";
})(Ia || (Ia = {}));
i.util.setEnumType(Ia, "code.invite.v2.InvitationStatus", [
  { no: 0, name: "NOT_INVITED" },
  { no: 1, name: "INVITED" },
  { no: 2, name: "REGISTERED" },
  { no: 3, name: "REVOKED" }
]);
class is extends w {
  constructor(e) {
    super(), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new is().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new is().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new is().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(is, e, t);
  }
}
is.runtime = i;
is.typeName = "code.invite.v2.GetInviteCountRequest";
is.fields = i.util.newFieldList(() => [
  { no: 1, name: "user_id", kind: "message", T: dt }
]);
class ss extends w {
  constructor(e) {
    super(), this.result = Oa.OK, this.inviteCount = 0, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ss().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ss().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ss().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(ss, e, t);
  }
}
ss.runtime = i;
ss.typeName = "code.invite.v2.GetInviteCountResponse";
ss.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(Oa) },
  { no: 2, name: "invite_count", kind: "scalar", T: 13 }
]);
var Oa;
(function(n) {
  n[n.OK = 0] = "OK";
})(Oa || (Oa = {}));
i.util.setEnumType(Oa, "code.invite.v2.GetInviteCountResponse.Result", [
  { no: 0, name: "OK" }
]);
class os extends w {
  constructor(e) {
    super(), this.source = { case: void 0 }, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new os().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new os().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new os().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(os, e, t);
  }
}
os.runtime = i;
os.typeName = "code.invite.v2.InvitePhoneNumberRequest";
os.fields = i.util.newFieldList(() => [
  { no: 1, name: "user", kind: "message", T: dt, oneof: "source" },
  { no: 3, name: "invite_code", kind: "message", T: vr, oneof: "source" },
  { no: 2, name: "receiver", kind: "message", T: Ue }
]);
class as extends w {
  constructor(e) {
    super(), this.result = Ba.OK, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new as().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new as().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new as().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(as, e, t);
  }
}
as.runtime = i;
as.typeName = "code.invite.v2.InvitePhoneNumberResponse";
as.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(Ba) }
]);
var Ba;
(function(n) {
  n[n.OK = 0] = "OK", n[n.INVITE_COUNT_EXCEEDED = 1] = "INVITE_COUNT_EXCEEDED", n[n.ALREADY_INVITED = 2] = "ALREADY_INVITED", n[n.USER_NOT_INVITED = 3] = "USER_NOT_INVITED", n[n.INVALID_RECEIVER_PHONE_NUMBER = 4] = "INVALID_RECEIVER_PHONE_NUMBER", n[n.INVITE_CODE_NOT_FOUND = 5] = "INVITE_CODE_NOT_FOUND", n[n.INVITE_CODE_REVOKED = 6] = "INVITE_CODE_REVOKED", n[n.INVITE_CODE_EXPIRED = 7] = "INVITE_CODE_EXPIRED";
})(Ba || (Ba = {}));
i.util.setEnumType(Ba, "code.invite.v2.InvitePhoneNumberResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INVITE_COUNT_EXCEEDED" },
  { no: 2, name: "ALREADY_INVITED" },
  { no: 3, name: "USER_NOT_INVITED" },
  { no: 4, name: "INVALID_RECEIVER_PHONE_NUMBER" },
  { no: 5, name: "INVITE_CODE_NOT_FOUND" },
  { no: 6, name: "INVITE_CODE_REVOKED" },
  { no: 7, name: "INVITE_CODE_EXPIRED" }
]);
class us extends w {
  constructor(e) {
    super(), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new us().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new us().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new us().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(us, e, t);
  }
}
us.runtime = i;
us.typeName = "code.invite.v2.GetInvitationStatusRequest";
us.fields = i.util.newFieldList(() => [
  { no: 1, name: "user_id", kind: "message", T: dt }
]);
class cs extends w {
  constructor(e) {
    super(), this.result = Aa.OK, this.status = Ia.NOT_INVITED, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new cs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new cs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new cs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(cs, e, t);
  }
}
cs.runtime = i;
cs.typeName = "code.invite.v2.GetInvitationStatusResponse";
cs.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(Aa) },
  { no: 2, name: "status", kind: "enum", T: i.getEnumType(Ia) }
]);
var Aa;
(function(n) {
  n[n.OK = 0] = "OK";
})(Aa || (Aa = {}));
i.util.setEnumType(Aa, "code.invite.v2.GetInvitationStatusResponse.Result", [
  { no: 0, name: "OK" }
]);
class vr extends w {
  constructor(e) {
    super(), this.value = "", i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new vr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new vr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new vr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(vr, e, t);
  }
}
vr.runtime = i;
vr.typeName = "code.invite.v2.InviteCode";
vr.fields = i.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 9 }
]);
class ls extends w {
  constructor(e) {
    super(), this.value = new Uint8Array(0), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ls().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ls().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ls().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(ls, e, t);
  }
}
ls.runtime = i;
ls.typeName = "code.invite.v2.PageToken";
ls.fields = i.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
te.Unary, te.Unary, te.Unary;
class jt extends w {
  constructor(e) {
    super(), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new jt().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new jt().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new jt().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(jt, e, t);
  }
}
jt.runtime = i;
jt.typeName = "code.messaging.v1.OpenMessageStreamRequest";
jt.fields = i.util.newFieldList(() => [
  { no: 1, name: "rendezvous_key", kind: "message", T: rt },
  { no: 2, name: "signature", kind: "message", T: ee }
]);
class Ht extends w {
  constructor(e) {
    super(), this.messages = [], i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Ht().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ht().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ht().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Ht, e, t);
  }
}
Ht.runtime = i;
Ht.typeName = "code.messaging.v1.OpenMessageStreamResponse";
Ht.fields = i.util.newFieldList(() => [
  { no: 1, name: "messages", kind: "message", T: it, repeated: !0 }
]);
class Er extends w {
  constructor(e) {
    super(), this.requestOrPong = { case: void 0 }, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Er().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Er().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Er().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Er, e, t);
  }
}
Er.runtime = i;
Er.typeName = "code.messaging.v1.OpenMessageStreamWithKeepAliveRequest";
Er.fields = i.util.newFieldList(() => [
  { no: 1, name: "request", kind: "message", T: jt, oneof: "requestOrPong" },
  { no: 2, name: "pong", kind: "message", T: Ur, oneof: "requestOrPong" }
]);
class Nr extends w {
  constructor(e) {
    super(), this.responseOrPing = { case: void 0 }, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Nr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Nr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Nr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Nr, e, t);
  }
}
Nr.runtime = i;
Nr.typeName = "code.messaging.v1.OpenMessageStreamWithKeepAliveResponse";
Nr.fields = i.util.newFieldList(() => [
  { no: 1, name: "response", kind: "message", T: Ht, oneof: "responseOrPing" },
  { no: 2, name: "ping", kind: "message", T: Cr, oneof: "responseOrPing" }
]);
class br extends w {
  constructor(e) {
    super(), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new br().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new br().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new br().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(br, e, t);
  }
}
br.runtime = i;
br.typeName = "code.messaging.v1.PollMessagesRequest";
br.fields = i.util.newFieldList(() => [
  { no: 1, name: "rendezvous_key", kind: "message", T: rt },
  { no: 2, name: "signature", kind: "message", T: ee }
]);
class Sr extends w {
  constructor(e) {
    super(), this.messages = [], i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Sr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Sr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Sr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Sr, e, t);
  }
}
Sr.runtime = i;
Sr.typeName = "code.messaging.v1.PollMessagesResponse";
Sr.fields = i.util.newFieldList(() => [
  { no: 1, name: "messages", kind: "message", T: it, repeated: !0 }
]);
class kr extends w {
  constructor(e) {
    super(), this.messageIds = [], i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new kr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new kr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new kr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(kr, e, t);
  }
}
kr.runtime = i;
kr.typeName = "code.messaging.v1.AckMessagesRequest";
kr.fields = i.util.newFieldList(() => [
  { no: 1, name: "rendezvous_key", kind: "message", T: rt },
  { no: 2, name: "message_ids", kind: "message", T: kt, repeated: !0 }
]);
class Ir extends w {
  constructor(e) {
    super(), this.result = Ja.OK, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Ir().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ir().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ir().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Ir, e, t);
  }
}
Ir.runtime = i;
Ir.typeName = "code.messaging.v1.AckMesssagesResponse";
Ir.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(Ja) }
]);
var Ja;
(function(n) {
  n[n.OK = 0] = "OK";
})(Ja || (Ja = {}));
i.util.setEnumType(Ja, "code.messaging.v1.AckMesssagesResponse.Result", [
  { no: 0, name: "OK" }
]);
class Wt extends w {
  constructor(e) {
    super(), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Wt().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Wt().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Wt().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Wt, e, t);
  }
}
Wt.runtime = i;
Wt.typeName = "code.messaging.v1.SendMessageRequest";
Wt.fields = i.util.newFieldList(() => [
  { no: 1, name: "message", kind: "message", T: it },
  { no: 2, name: "rendezvous_key", kind: "message", T: rt },
  { no: 3, name: "signature", kind: "message", T: ee }
]);
class Or extends w {
  constructor(e) {
    super(), this.result = ho.OK, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Or().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Or().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Or().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Or, e, t);
  }
}
Or.runtime = i;
Or.typeName = "code.messaging.v1.SendMessageResponse";
Or.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(ho) },
  { no: 2, name: "message_id", kind: "message", T: kt }
]);
var ho;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NO_ACTIVE_STREAM = 1] = "NO_ACTIVE_STREAM";
})(ho || (ho = {}));
i.util.setEnumType(ho, "code.messaging.v1.SendMessageResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NO_ACTIVE_STREAM" }
]);
class rt extends w {
  constructor(e) {
    super(), this.value = new Uint8Array(0), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new rt().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new rt().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new rt().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(rt, e, t);
  }
}
rt.runtime = i;
rt.typeName = "code.messaging.v1.RendezvousKey";
rt.fields = i.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class kt extends w {
  constructor(e) {
    super(), this.value = new Uint8Array(0), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new kt().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new kt().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new kt().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(kt, e, t);
  }
}
kt.runtime = i;
kt.typeName = "code.messaging.v1.MessageId";
kt.fields = i.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class Br extends w {
  constructor(e) {
    super(), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Br().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Br().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Br().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Br, e, t);
  }
}
Br.runtime = i;
Br.typeName = "code.messaging.v1.RequestToGrabBill";
Br.fields = i.util.newFieldList(() => [
  { no: 1, name: "requestor_account", kind: "message", T: R }
]);
class zt extends w {
  constructor(e) {
    super(), this.exchangeData = { case: void 0 }, this.additionalFees = [], i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new zt().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new zt().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new zt().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(zt, e, t);
  }
}
zt.runtime = i;
zt.typeName = "code.messaging.v1.RequestToReceiveBill";
zt.fields = i.util.newFieldList(() => [
  { no: 1, name: "requestor_account", kind: "message", T: R },
  { no: 2, name: "exact", kind: "message", T: Fe, oneof: "exchange_data" },
  { no: 3, name: "partial", kind: "message", T: ht, oneof: "exchange_data" },
  { no: 4, name: "domain", kind: "message", T: at },
  { no: 5, name: "verifier", kind: "message", T: R },
  { no: 6, name: "signature", kind: "message", T: ee },
  { no: 7, name: "rendezvous_key", kind: "message", T: rt },
  { no: 8, name: "additional_fees", kind: "message", T: Kt, repeated: !0 }
]);
class Ar extends w {
  constructor(e) {
    super(), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Ar().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ar().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ar().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Ar, e, t);
  }
}
Ar.runtime = i;
Ar.typeName = "code.messaging.v1.CodeScanned";
Ar.fields = i.util.newFieldList(() => [
  { no: 1, name: "timestamp", kind: "message", T: Ae }
]);
class Jr extends w {
  constructor(e) {
    super(), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Jr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Jr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Jr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Jr, e, t);
  }
}
Jr.runtime = i;
Jr.typeName = "code.messaging.v1.ClientRejectedPayment";
Jr.fields = i.util.newFieldList(() => [
  { no: 1, name: "intent_id", kind: "message", T: Ce }
]);
class Rr extends w {
  constructor(e) {
    super(), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Rr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Rr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Rr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Rr, e, t);
  }
}
Rr.runtime = i;
Rr.typeName = "code.messaging.v1.IntentSubmitted";
Rr.fields = i.util.newFieldList(() => [
  { no: 1, name: "intent_id", kind: "message", T: Ce },
  { no: 2, name: "metadata", kind: "message", T: St }
]);
class xr extends w {
  constructor(e) {
    super(), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new xr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new xr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new xr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(xr, e, t);
  }
}
xr.runtime = i;
xr.typeName = "code.messaging.v1.WebhookCalled";
xr.fields = i.util.newFieldList(() => [
  { no: 1, name: "timestamp", kind: "message", T: Ae }
]);
class Xt extends w {
  constructor(e) {
    super(), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Xt().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Xt().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Xt().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Xt, e, t);
  }
}
Xt.runtime = i;
Xt.typeName = "code.messaging.v1.RequestToLogin";
Xt.fields = i.util.newFieldList(() => [
  { no: 1, name: "domain", kind: "message", T: at },
  { no: 4, name: "verifier", kind: "message", T: R },
  { no: 5, name: "signature", kind: "message", T: ee },
  { no: 6, name: "rendezvous_key", kind: "message", T: rt }
]);
class Pr extends w {
  constructor(e) {
    super(), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Pr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Pr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Pr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Pr, e, t);
  }
}
Pr.runtime = i;
Pr.typeName = "code.messaging.v1.ClientRejectedLogin";
Pr.fields = i.util.newFieldList(() => [
  { no: 4, name: "timestamp", kind: "message", T: Ae }
]);
class Lr extends w {
  constructor(e) {
    super(), this.airdropType = on.UNKNOWN, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Lr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Lr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Lr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Lr, e, t);
  }
}
Lr.runtime = i;
Lr.typeName = "code.messaging.v1.AirdropReceived";
Lr.fields = i.util.newFieldList(() => [
  { no: 1, name: "airdrop_type", kind: "enum", T: i.getEnumType(on) },
  { no: 2, name: "exchange_data", kind: "message", T: Fe },
  { no: 3, name: "timestamp", kind: "message", T: Ae }
]);
class it extends w {
  constructor(e) {
    super(), this.kind = { case: void 0 }, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new it().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new it().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new it().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(it, e, t);
  }
}
it.runtime = i;
it.typeName = "code.messaging.v1.Message";
it.fields = i.util.newFieldList(() => [
  { no: 1, name: "id", kind: "message", T: kt },
  { no: 3, name: "send_message_request_signature", kind: "message", T: ee },
  { no: 2, name: "request_to_grab_bill", kind: "message", T: Br, oneof: "kind" },
  { no: 5, name: "request_to_receive_bill", kind: "message", T: zt, oneof: "kind" },
  { no: 6, name: "code_scanned", kind: "message", T: Ar, oneof: "kind" },
  { no: 7, name: "client_rejected_payment", kind: "message", T: Jr, oneof: "kind" },
  { no: 8, name: "intent_submitted", kind: "message", T: Rr, oneof: "kind" },
  { no: 9, name: "webhook_called", kind: "message", T: xr, oneof: "kind" },
  { no: 10, name: "request_to_login", kind: "message", T: Xt, oneof: "kind" },
  { no: 12, name: "client_rejected_login", kind: "message", T: Pr, oneof: "kind" },
  { no: 4, name: "airdrop_received", kind: "message", T: Lr, oneof: "kind" }
]);
class Cr extends w {
  constructor(e) {
    super(), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Cr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Cr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Cr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Cr, e, t);
  }
}
Cr.runtime = i;
Cr.typeName = "code.messaging.v1.ServerPing";
Cr.fields = i.util.newFieldList(() => [
  { no: 1, name: "timestamp", kind: "message", T: Ae },
  { no: 2, name: "ping_delay", kind: "message", T: dn }
]);
class Ur extends w {
  constructor(e) {
    super(), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Ur().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ur().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ur().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Ur, e, t);
  }
}
Ur.runtime = i;
Ur.typeName = "code.messaging.v1.ClientPong";
Ur.fields = i.util.newFieldList(() => [
  { no: 1, name: "timestamp", kind: "message", T: Ae }
]);
const Py = {
  typeName: "code.messaging.v1.Messaging",
  methods: {
    openMessageStream: {
      name: "OpenMessageStream",
      I: jt,
      O: Ht,
      kind: te.ServerStreaming
    },
    openMessageStreamWithKeepAlive: {
      name: "OpenMessageStreamWithKeepAlive",
      I: Er,
      O: Nr,
      kind: te.BiDiStreaming
    },
    pollMessages: {
      name: "PollMessages",
      I: br,
      O: Sr,
      kind: te.Unary
    },
    ackMessages: {
      name: "AckMessages",
      I: kr,
      O: Ir,
      kind: te.Unary
    },
    sendMessage: {
      name: "SendMessage",
      I: Wt,
      O: Or,
      kind: te.Unary
    }
  }
};
class Yt extends w {
  constructor(e) {
    super(), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Yt().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Yt().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Yt().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Yt, e, t);
  }
}
Yt.runtime = i;
Yt.typeName = "code.micropayment.v1.GetStatusRequest";
Yt.fields = i.util.newFieldList(() => [
  { no: 1, name: "intent_id", kind: "message", T: Ce }
]);
class qr extends w {
  constructor(e) {
    super(), this.exists = !1, this.codeScanned = !1, this.intentSubmitted = !1, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new qr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new qr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new qr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(qr, e, t);
  }
}
qr.runtime = i;
qr.typeName = "code.micropayment.v1.GetStatusResponse";
qr.fields = i.util.newFieldList(() => [
  { no: 1, name: "exists", kind: "scalar", T: 8 },
  { no: 2, name: "code_scanned", kind: "scalar", T: 8 },
  { no: 3, name: "intent_submitted", kind: "scalar", T: 8 }
]);
class Qt extends w {
  constructor(e) {
    super(), this.url = "", i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Qt().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Qt().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Qt().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Qt, e, t);
  }
}
Qt.runtime = i;
Qt.typeName = "code.micropayment.v1.RegisterWebhookRequest";
Qt.fields = i.util.newFieldList(() => [
  { no: 1, name: "intent_id", kind: "message", T: Ce },
  { no: 2, name: "url", kind: "scalar", T: 9 }
]);
class Dr extends w {
  constructor(e) {
    super(), this.result = Et.OK, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Dr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Dr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Dr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Dr, e, t);
  }
}
Dr.runtime = i;
Dr.typeName = "code.micropayment.v1.RegisterWebhookResponse";
Dr.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(Et) }
]);
var Et;
(function(n) {
  n[n.OK = 0] = "OK", n[n.ALREADY_REGISTERED = 1] = "ALREADY_REGISTERED", n[n.REQUEST_NOT_FOUND = 2] = "REQUEST_NOT_FOUND", n[n.INTENT_EXISTS = 3] = "INTENT_EXISTS", n[n.INVALID_URL = 4] = "INVALID_URL";
})(Et || (Et = {}));
i.util.setEnumType(Et, "code.micropayment.v1.RegisterWebhookResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "ALREADY_REGISTERED" },
  { no: 2, name: "REQUEST_NOT_FOUND" },
  { no: 3, name: "INTENT_EXISTS" },
  { no: 4, name: "INVALID_URL" }
]);
class Fr extends w {
  constructor(e) {
    super(), this.url = "", this.currency = "", this.nativeAmount = 0, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Fr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Fr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Fr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Fr, e, t);
  }
}
Fr.runtime = i;
Fr.typeName = "code.micropayment.v1.CodifyRequest";
Fr.fields = i.util.newFieldList(() => [
  { no: 1, name: "url", kind: "scalar", T: 9 },
  { no: 2, name: "currency", kind: "scalar", T: 9 },
  { no: 3, name: "native_amount", kind: "scalar", T: 1 },
  { no: 4, name: "owner_account", kind: "message", T: R },
  { no: 5, name: "primary_account", kind: "message", T: R },
  { no: 6, name: "signature", kind: "message", T: ee }
]);
class _r extends w {
  constructor(e) {
    super(), this.result = Ra.OK, this.codifiedUrl = "", i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new _r().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new _r().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new _r().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(_r, e, t);
  }
}
_r.runtime = i;
_r.typeName = "code.micropayment.v1.CodifyResponse";
_r.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(Ra) },
  { no: 2, name: "codified_url", kind: "scalar", T: 9 }
]);
var Ra;
(function(n) {
  n[n.OK = 0] = "OK", n[n.INVALID_URL = 1] = "INVALID_URL", n[n.INVALID_ACCOUNT = 2] = "INVALID_ACCOUNT", n[n.UNSUPPORTED_CURRENCY = 3] = "UNSUPPORTED_CURRENCY", n[n.NATIVE_AMOUNT_EXCEEDS_LIMIT = 4] = "NATIVE_AMOUNT_EXCEEDS_LIMIT";
})(Ra || (Ra = {}));
i.util.setEnumType(Ra, "code.micropayment.v1.CodifyResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INVALID_URL" },
  { no: 2, name: "INVALID_ACCOUNT" },
  { no: 3, name: "UNSUPPORTED_CURRENCY" },
  { no: 4, name: "NATIVE_AMOUNT_EXCEEDS_LIMIT" }
]);
class Kr extends w {
  constructor(e) {
    super(), this.path = "", i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Kr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Kr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Kr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Kr, e, t);
  }
}
Kr.runtime = i;
Kr.typeName = "code.micropayment.v1.GetPathMetadataRequest";
Kr.fields = i.util.newFieldList(() => [
  { no: 1, name: "path", kind: "scalar", T: 9 }
]);
class Mr extends w {
  constructor(e) {
    super(), this.result = xa.OK, this.currency = "", this.nativeAmount = 0, this.redirctUrl = "", i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Mr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Mr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Mr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Mr, e, t);
  }
}
Mr.runtime = i;
Mr.typeName = "code.micropayment.v1.GetPathMetadataResponse";
Mr.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(xa) },
  { no: 2, name: "destination", kind: "message", T: R },
  { no: 3, name: "currency", kind: "scalar", T: 9 },
  { no: 4, name: "native_amount", kind: "scalar", T: 1 },
  { no: 5, name: "redirct_url", kind: "scalar", T: 9 }
]);
var xa;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND";
})(xa || (xa = {}));
i.util.setEnumType(xa, "code.micropayment.v1.GetPathMetadataResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" }
]);
const rd = {
  typeName: "code.micropayment.v1.MicroPayment",
  methods: {
    getStatus: {
      name: "GetStatus",
      I: Yt,
      O: qr,
      kind: te.Unary
    },
    registerWebhook: {
      name: "RegisterWebhook",
      I: Qt,
      O: Dr,
      kind: te.Unary
    },
    codify: {
      name: "Codify",
      I: Fr,
      O: _r,
      kind: te.Unary
    },
    getPathMetadata: {
      name: "GetPathMetadata",
      I: Kr,
      O: Mr,
      kind: te.Unary
    }
  }
};
class fs extends w {
  constructor(e) {
    super(), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new fs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new fs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new fs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(fs, e, t);
  }
}
fs.runtime = i;
fs.typeName = "code.phone.v1.SendVerificationCodeRequest";
fs.fields = i.util.newFieldList(() => [
  { no: 1, name: "phone_number", kind: "message", T: Ue },
  { no: 2, name: "device_token", kind: "message", T: Dt }
]);
class ms extends w {
  constructor(e) {
    super(), this.result = Pa.OK, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ms().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ms().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ms().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(ms, e, t);
  }
}
ms.runtime = i;
ms.typeName = "code.phone.v1.SendVerificationCodeResponse";
ms.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(Pa) }
]);
var Pa;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_INVITED = 1] = "NOT_INVITED", n[n.RATE_LIMITED = 2] = "RATE_LIMITED", n[n.INVALID_PHONE_NUMBER = 3] = "INVALID_PHONE_NUMBER", n[n.UNSUPPORTED_PHONE_TYPE = 4] = "UNSUPPORTED_PHONE_TYPE";
})(Pa || (Pa = {}));
i.util.setEnumType(Pa, "code.phone.v1.SendVerificationCodeResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_INVITED" },
  { no: 2, name: "RATE_LIMITED" },
  { no: 3, name: "INVALID_PHONE_NUMBER" },
  { no: 4, name: "UNSUPPORTED_PHONE_TYPE" }
]);
class ds extends w {
  constructor(e) {
    super(), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ds().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ds().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ds().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(ds, e, t);
  }
}
ds.runtime = i;
ds.typeName = "code.phone.v1.CheckVerificationCodeRequest";
ds.fields = i.util.newFieldList(() => [
  { no: 1, name: "phone_number", kind: "message", T: Ue },
  { no: 2, name: "code", kind: "message", T: Zt }
]);
class hs extends w {
  constructor(e) {
    super(), this.result = La.OK, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new hs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new hs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new hs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(hs, e, t);
  }
}
hs.runtime = i;
hs.typeName = "code.phone.v1.CheckVerificationCodeResponse";
hs.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(La) },
  { no: 2, name: "linking_token", kind: "message", T: en }
]);
var La;
(function(n) {
  n[n.OK = 0] = "OK", n[n.INVALID_CODE = 1] = "INVALID_CODE", n[n.NO_VERIFICATION = 2] = "NO_VERIFICATION", n[n.RATE_LIMITED = 3] = "RATE_LIMITED";
})(La || (La = {}));
i.util.setEnumType(La, "code.phone.v1.CheckVerificationCodeResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INVALID_CODE" },
  { no: 2, name: "NO_VERIFICATION" },
  { no: 3, name: "RATE_LIMITED" }
]);
class ps extends w {
  constructor(e) {
    super(), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ps().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ps().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ps().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(ps, e, t);
  }
}
ps.runtime = i;
ps.typeName = "code.phone.v1.GetAssociatedPhoneNumberRequest";
ps.fields = i.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: R },
  { no: 2, name: "signature", kind: "message", T: ee }
]);
class gs extends w {
  constructor(e) {
    super(), this.result = Ca.OK, this.isLinked = !1, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new gs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new gs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new gs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(gs, e, t);
  }
}
gs.runtime = i;
gs.typeName = "code.phone.v1.GetAssociatedPhoneNumberResponse";
gs.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(Ca) },
  { no: 2, name: "phone_number", kind: "message", T: Ue },
  { no: 3, name: "is_linked", kind: "scalar", T: 8 }
]);
var Ca;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND", n[n.NOT_INVITED = 2] = "NOT_INVITED", n[n.UNLOCKED_TIMELOCK_ACCOUNT = 3] = "UNLOCKED_TIMELOCK_ACCOUNT";
})(Ca || (Ca = {}));
i.util.setEnumType(Ca, "code.phone.v1.GetAssociatedPhoneNumberResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" },
  { no: 2, name: "NOT_INVITED" },
  { no: 3, name: "UNLOCKED_TIMELOCK_ACCOUNT" }
]);
class Zt extends w {
  constructor(e) {
    super(), this.value = "", i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Zt().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Zt().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Zt().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Zt, e, t);
  }
}
Zt.runtime = i;
Zt.typeName = "code.phone.v1.VerificationCode";
Zt.fields = i.util.newFieldList(() => [
  { no: 2, name: "value", kind: "scalar", T: 9 }
]);
class en extends w {
  constructor(e) {
    super(), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new en().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new en().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new en().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(en, e, t);
  }
}
en.runtime = i;
en.typeName = "code.phone.v1.PhoneLinkingToken";
en.fields = i.util.newFieldList(() => [
  { no: 1, name: "phone_number", kind: "message", T: Ue },
  { no: 2, name: "code", kind: "message", T: Zt }
]);
te.Unary, te.Unary, te.Unary;
var Ua;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.FCM_ANDROID = 1] = "FCM_ANDROID", n[n.FCM_APNS = 2] = "FCM_APNS";
})(Ua || (Ua = {}));
i.util.setEnumType(Ua, "code.push.v1.TokenType", [
  { no: 0, name: "UNKNOWN" },
  { no: 1, name: "FCM_ANDROID" },
  { no: 2, name: "FCM_APNS" }
]);
class ys extends w {
  constructor(e) {
    super(), this.pushToken = "", this.tokenType = Ua.UNKNOWN, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ys().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ys().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ys().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(ys, e, t);
  }
}
ys.runtime = i;
ys.typeName = "code.push.v1.AddTokenRequest";
ys.fields = i.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: R },
  { no: 2, name: "signature", kind: "message", T: ee },
  { no: 3, name: "container_id", kind: "message", T: Ze },
  { no: 4, name: "push_token", kind: "scalar", T: 9 },
  { no: 5, name: "token_type", kind: "enum", T: i.getEnumType(Ua) },
  { no: 6, name: "app_install", kind: "message", T: bt }
]);
class ws extends w {
  constructor(e) {
    super(), this.result = qa.OK, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ws().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ws().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ws().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(ws, e, t);
  }
}
ws.runtime = i;
ws.typeName = "code.push.v1.AddTokenResponse";
ws.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(qa) }
]);
var qa;
(function(n) {
  n[n.OK = 0] = "OK", n[n.INVALID_PUSH_TOKEN = 1] = "INVALID_PUSH_TOKEN";
})(qa || (qa = {}));
i.util.setEnumType(qa, "code.push.v1.AddTokenResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INVALID_PUSH_TOKEN" }
]);
te.Unary;
te.BiDiStreaming, te.Unary, te.Unary, te.Unary, te.Unary, te.Unary, te.Unary, te.Unary, te.BiDiStreaming, te.Unary;
class Ts extends w {
  constructor(e) {
    super(), this.token = { case: void 0 }, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Ts().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ts().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ts().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Ts, e, t);
  }
}
Ts.runtime = i;
Ts.typeName = "code.user.v1.LinkAccountRequest";
Ts.fields = i.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: R },
  { no: 2, name: "signature", kind: "message", T: ee },
  { no: 3, name: "phone", kind: "message", T: en, oneof: "token" }
]);
class vs extends w {
  constructor(e) {
    super(), this.result = Da.OK, this.metadata = { case: void 0 }, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new vs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new vs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new vs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(vs, e, t);
  }
}
vs.runtime = i;
vs.typeName = "code.user.v1.LinkAccountResponse";
vs.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(Da) },
  { no: 2, name: "user", kind: "message", T: tn },
  { no: 3, name: "data_container_id", kind: "message", T: Ze },
  { no: 5, name: "phone", kind: "message", T: nn, oneof: "metadata" }
]);
var Da;
(function(n) {
  n[n.OK = 0] = "OK", n[n.INVALID_TOKEN = 1] = "INVALID_TOKEN", n[n.RATE_LIMITED = 2] = "RATE_LIMITED";
})(Da || (Da = {}));
i.util.setEnumType(Da, "code.user.v1.LinkAccountResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INVALID_TOKEN" },
  { no: 2, name: "RATE_LIMITED" }
]);
class Es extends w {
  constructor(e) {
    super(), this.identifyingFeature = { case: void 0 }, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Es().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Es().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Es().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Es, e, t);
  }
}
Es.runtime = i;
Es.typeName = "code.user.v1.UnlinkAccountRequest";
Es.fields = i.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: R },
  { no: 2, name: "signature", kind: "message", T: ee },
  { no: 4, name: "phone_number", kind: "message", T: Ue, oneof: "identifying_feature" }
]);
class Ns extends w {
  constructor(e) {
    super(), this.result = Fa.OK, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Ns().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ns().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ns().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Ns, e, t);
  }
}
Ns.runtime = i;
Ns.typeName = "code.user.v1.UnlinkAccountResponse";
Ns.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(Fa) }
]);
var Fa;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NEVER_ASSOCIATED = 1] = "NEVER_ASSOCIATED";
})(Fa || (Fa = {}));
i.util.setEnumType(Fa, "code.user.v1.UnlinkAccountResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NEVER_ASSOCIATED" }
]);
class bs extends w {
  constructor(e) {
    super(), this.identifyingFeature = { case: void 0 }, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new bs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new bs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new bs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(bs, e, t);
  }
}
bs.runtime = i;
bs.typeName = "code.user.v1.GetUserRequest";
bs.fields = i.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: R },
  { no: 2, name: "signature", kind: "message", T: ee },
  { no: 3, name: "phone_number", kind: "message", T: Ue, oneof: "identifying_feature" }
]);
class Ss extends w {
  constructor(e) {
    super(), this.result = _a.OK, this.metadata = { case: void 0 }, this.enableInternalFlags = !1, this.eligibleAirdrops = [], i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Ss().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ss().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ss().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Ss, e, t);
  }
}
Ss.runtime = i;
Ss.typeName = "code.user.v1.GetUserResponse";
Ss.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(_a) },
  { no: 2, name: "user", kind: "message", T: tn },
  { no: 3, name: "data_container_id", kind: "message", T: Ze },
  { no: 5, name: "phone", kind: "message", T: nn, oneof: "metadata" },
  { no: 6, name: "enable_internal_flags", kind: "scalar", T: 8 },
  { no: 7, name: "eligible_airdrops", kind: "enum", T: i.getEnumType(on), repeated: !0 }
]);
var _a;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND", n[n.NOT_INVITED = 2] = "NOT_INVITED", n[n.UNLOCKED_TIMELOCK_ACCOUNT = 3] = "UNLOCKED_TIMELOCK_ACCOUNT";
})(_a || (_a = {}));
i.util.setEnumType(_a, "code.user.v1.GetUserResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" },
  { no: 2, name: "NOT_INVITED" },
  { no: 3, name: "UNLOCKED_TIMELOCK_ACCOUNT" }
]);
class ks extends w {
  constructor(e) {
    super(), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ks().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ks().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ks().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(ks, e, t);
  }
}
ks.runtime = i;
ks.typeName = "code.user.v1.UpdatePreferencesRequest";
ks.fields = i.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: R },
  { no: 2, name: "container_id", kind: "message", T: Ze },
  { no: 3, name: "signature", kind: "message", T: ee },
  { no: 4, name: "locale", kind: "message", T: pn }
]);
class Is extends w {
  constructor(e) {
    super(), this.result = Ka.OK, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Is().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Is().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Is().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Is, e, t);
  }
}
Is.runtime = i;
Is.typeName = "code.user.v1.UpdatePreferencesResponse";
Is.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(Ka) }
]);
var Ka;
(function(n) {
  n[n.OK = 0] = "OK", n[n.INVALID_LOCALE = 1] = "INVALID_LOCALE";
})(Ka || (Ka = {}));
i.util.setEnumType(Ka, "code.user.v1.UpdatePreferencesResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INVALID_LOCALE" }
]);
class Os extends w {
  constructor(e) {
    super(), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Os().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Os().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Os().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Os, e, t);
  }
}
Os.runtime = i;
Os.typeName = "code.user.v1.LoginToThirdPartyAppRequest";
Os.fields = i.util.newFieldList(() => [
  { no: 1, name: "intent_id", kind: "message", T: Ce },
  { no: 2, name: "user_id", kind: "message", T: R },
  { no: 3, name: "signature", kind: "message", T: ee }
]);
class Bs extends w {
  constructor(e) {
    super(), this.result = Ma.OK, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Bs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Bs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Bs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Bs, e, t);
  }
}
Bs.runtime = i;
Bs.typeName = "code.user.v1.LoginToThirdPartyAppResponse";
Bs.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(Ma) }
]);
var Ma;
(function(n) {
  n[n.OK = 0] = "OK", n[n.REQUEST_NOT_FOUND = 1] = "REQUEST_NOT_FOUND", n[n.PAYMENT_REQUIRED = 2] = "PAYMENT_REQUIRED", n[n.LOGIN_NOT_SUPPORTED = 3] = "LOGIN_NOT_SUPPORTED", n[n.DIFFERENT_LOGIN_EXISTS = 4] = "DIFFERENT_LOGIN_EXISTS", n[n.INVALID_ACCOUNT = 5] = "INVALID_ACCOUNT";
})(Ma || (Ma = {}));
i.util.setEnumType(Ma, "code.user.v1.LoginToThirdPartyAppResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "REQUEST_NOT_FOUND" },
  { no: 2, name: "PAYMENT_REQUIRED" },
  { no: 3, name: "LOGIN_NOT_SUPPORTED" },
  { no: 4, name: "DIFFERENT_LOGIN_EXISTS" },
  { no: 5, name: "INVALID_ACCOUNT" }
]);
class As extends w {
  constructor(e) {
    super(), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new As().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new As().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new As().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(As, e, t);
  }
}
As.runtime = i;
As.typeName = "code.user.v1.GetLoginForThirdPartyAppRequest";
As.fields = i.util.newFieldList(() => [
  { no: 1, name: "intent_id", kind: "message", T: Ce },
  { no: 2, name: "verifier", kind: "message", T: R },
  { no: 3, name: "signature", kind: "message", T: ee }
]);
class Js extends w {
  constructor(e) {
    super(), this.result = $a.OK, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Js().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Js().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Js().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Js, e, t);
  }
}
Js.runtime = i;
Js.typeName = "code.user.v1.GetLoginForThirdPartyAppResponse";
Js.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType($a) },
  { no: 2, name: "user_id", kind: "message", T: R }
]);
var $a;
(function(n) {
  n[n.OK = 0] = "OK", n[n.REQUEST_NOT_FOUND = 1] = "REQUEST_NOT_FOUND", n[n.LOGIN_NOT_SUPPORTED = 2] = "LOGIN_NOT_SUPPORTED", n[n.NO_USER_LOGGED_IN = 3] = "NO_USER_LOGGED_IN";
})($a || ($a = {}));
i.util.setEnumType($a, "code.user.v1.GetLoginForThirdPartyAppResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "REQUEST_NOT_FOUND" },
  { no: 2, name: "LOGIN_NOT_SUPPORTED" },
  { no: 3, name: "NO_USER_LOGGED_IN" }
]);
class tn extends w {
  constructor(e) {
    super(), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new tn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new tn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new tn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(tn, e, t);
  }
}
tn.runtime = i;
tn.typeName = "code.user.v1.User";
tn.fields = i.util.newFieldList(() => [
  { no: 1, name: "id", kind: "message", T: dt },
  { no: 2, name: "view", kind: "message", T: $r }
]);
class $r extends w {
  constructor(e) {
    super(), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new $r().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new $r().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new $r().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals($r, e, t);
  }
}
$r.runtime = i;
$r.typeName = "code.user.v1.View";
$r.fields = i.util.newFieldList(() => [
  { no: 1, name: "phone_number", kind: "message", T: Ue }
]);
class nn extends w {
  constructor(e) {
    super(), this.isLinked = !1, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new nn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new nn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new nn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(nn, e, t);
  }
}
nn.runtime = i;
nn.typeName = "code.user.v1.PhoneMetadata";
nn.fields = i.util.newFieldList(() => [
  { no: 1, name: "is_linked", kind: "scalar", T: 8 }
]);
te.Unary, te.Unary, te.Unary, te.Unary, te.Unary, te.Unary;
const ac = () => new Error("invalid address");
function Ly(n) {
  return n instanceof Uint8Array || n != null && typeof n == "object" && n.constructor.name === "Uint8Array";
}
function Cy(n, ...e) {
  if (!Ly(n))
    throw new Error("Expected Uint8Array");
  if (e.length > 0 && !e.includes(n.length))
    throw new Error(`Expected Uint8Array of length ${e}, not of length=${n.length}`);
}
function gf(n, e = !0) {
  if (n.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (e && n.finished)
    throw new Error("Hash#digest() has already been called");
}
function Uy(n, e) {
  Cy(n);
  const t = e.outputLen;
  if (n.length < t)
    throw new Error(`digestInto() expects output buffer of length at least ${t}`);
}
const uc = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function qy(n) {
  return n instanceof Uint8Array || n != null && typeof n == "object" && n.constructor.name === "Uint8Array";
}
const cc = (n) => new DataView(n.buffer, n.byteOffset, n.byteLength), Jt = (n, e) => n << 32 - e | n >>> e, Dy = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!Dy)
  throw new Error("Non little-endian hardware is not supported");
function Fy(n) {
  if (typeof n != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof n}`);
  return new Uint8Array(new TextEncoder().encode(n));
}
function id(n) {
  if (typeof n == "string" && (n = Fy(n)), !qy(n))
    throw new Error(`expected Uint8Array, got ${typeof n}`);
  return n;
}
class _y {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
}
function sd(n) {
  const e = (r) => n().update(id(r)).digest(), t = n();
  return e.outputLen = t.outputLen, e.blockLen = t.blockLen, e.create = () => n(), e;
}
function Ky(n = 32) {
  if (uc && typeof uc.getRandomValues == "function")
    return uc.getRandomValues(new Uint8Array(n));
  throw new Error("crypto.getRandomValues must be defined");
}
function My(n, e, t, r) {
  if (typeof n.setBigUint64 == "function")
    return n.setBigUint64(e, t, r);
  const s = BigInt(32), o = BigInt(4294967295), u = Number(t >> s & o), c = Number(t & o), f = r ? 4 : 0, h = r ? 0 : 4;
  n.setUint32(e + f, u, r), n.setUint32(e + h, c, r);
}
class od extends _y {
  constructor(e, t, r, s) {
    super(), this.blockLen = e, this.outputLen = t, this.padOffset = r, this.isLE = s, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(e), this.view = cc(this.buffer);
  }
  update(e) {
    gf(this);
    const { view: t, buffer: r, blockLen: s } = this;
    e = id(e);
    const o = e.length;
    for (let u = 0; u < o; ) {
      const c = Math.min(s - this.pos, o - u);
      if (c === s) {
        const f = cc(e);
        for (; s <= o - u; u += s)
          this.process(f, u);
        continue;
      }
      r.set(e.subarray(u, u + c), this.pos), this.pos += c, u += c, this.pos === s && (this.process(t, 0), this.pos = 0);
    }
    return this.length += e.length, this.roundClean(), this;
  }
  digestInto(e) {
    gf(this), Uy(e, this), this.finished = !0;
    const { buffer: t, view: r, blockLen: s, isLE: o } = this;
    let { pos: u } = this;
    t[u++] = 128, this.buffer.subarray(u).fill(0), this.padOffset > s - u && (this.process(r, 0), u = 0);
    for (let p = u; p < s; p++)
      t[p] = 0;
    My(r, s - 8, BigInt(this.length * 8), o), this.process(r, 0);
    const c = cc(e), f = this.outputLen;
    if (f % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const h = f / 4, d = this.get();
    if (h > d.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let p = 0; p < h; p++)
      c.setUint32(4 * p, d[p], o);
  }
  digest() {
    const { buffer: e, outputLen: t } = this;
    this.digestInto(e);
    const r = e.slice(0, t);
    return this.destroy(), r;
  }
  _cloneInto(e) {
    e || (e = new this.constructor()), e.set(...this.get());
    const { blockLen: t, buffer: r, length: s, finished: o, destroyed: u, pos: c } = this;
    return e.length = s, e.pos = c, e.finished = o, e.destroyed = u, s % t && e.buffer.set(r), e;
  }
}
const uu = /* @__PURE__ */ BigInt(2 ** 32 - 1), Pc = /* @__PURE__ */ BigInt(32);
function ad(n, e = !1) {
  return e ? { h: Number(n & uu), l: Number(n >> Pc & uu) } : { h: Number(n >> Pc & uu) | 0, l: Number(n & uu) | 0 };
}
function $y(n, e = !1) {
  let t = new Uint32Array(n.length), r = new Uint32Array(n.length);
  for (let s = 0; s < n.length; s++) {
    const { h: o, l: u } = ad(n[s], e);
    [t[s], r[s]] = [o, u];
  }
  return [t, r];
}
const Vy = (n, e) => BigInt(n >>> 0) << Pc | BigInt(e >>> 0), Gy = (n, e, t) => n >>> t, jy = (n, e, t) => n << 32 - t | e >>> t, Hy = (n, e, t) => n >>> t | e << 32 - t, Wy = (n, e, t) => n << 32 - t | e >>> t, zy = (n, e, t) => n << 64 - t | e >>> t - 32, Xy = (n, e, t) => n >>> t - 32 | e << 64 - t, Yy = (n, e) => e, Qy = (n, e) => n, Zy = (n, e, t) => n << t | e >>> 32 - t, ew = (n, e, t) => e << t | n >>> 32 - t, tw = (n, e, t) => e << t - 32 | n >>> 64 - t, nw = (n, e, t) => n << t - 32 | e >>> 64 - t;
function rw(n, e, t, r) {
  const s = (e >>> 0) + (r >>> 0);
  return { h: n + t + (s / 2 ** 32 | 0) | 0, l: s | 0 };
}
const iw = (n, e, t) => (n >>> 0) + (e >>> 0) + (t >>> 0), sw = (n, e, t, r) => e + t + r + (n / 2 ** 32 | 0) | 0, ow = (n, e, t, r) => (n >>> 0) + (e >>> 0) + (t >>> 0) + (r >>> 0), aw = (n, e, t, r, s) => e + t + r + s + (n / 2 ** 32 | 0) | 0, uw = (n, e, t, r, s) => (n >>> 0) + (e >>> 0) + (t >>> 0) + (r >>> 0) + (s >>> 0), cw = (n, e, t, r, s, o) => e + t + r + s + o + (n / 2 ** 32 | 0) | 0, lw = {
  fromBig: ad,
  split: $y,
  toBig: Vy,
  shrSH: Gy,
  shrSL: jy,
  rotrSH: Hy,
  rotrSL: Wy,
  rotrBH: zy,
  rotrBL: Xy,
  rotr32H: Yy,
  rotr32L: Qy,
  rotlSH: Zy,
  rotlSL: ew,
  rotlBH: tw,
  rotlBL: nw,
  add: rw,
  add3L: iw,
  add3H: sw,
  add4L: ow,
  add4H: aw,
  add5H: cw,
  add5L: uw
}, ue = lw, [fw, mw] = /* @__PURE__ */ (() => ue.split([
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
].map((n) => BigInt(n))))(), Yr = /* @__PURE__ */ new Uint32Array(80), Qr = /* @__PURE__ */ new Uint32Array(80);
class dw extends od {
  constructor() {
    super(128, 64, 16, !1), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209;
  }
  // prettier-ignore
  get() {
    const { Ah: e, Al: t, Bh: r, Bl: s, Ch: o, Cl: u, Dh: c, Dl: f, Eh: h, El: d, Fh: p, Fl: T, Gh: N, Gl: k, Hh: K, Hl: j } = this;
    return [e, t, r, s, o, u, c, f, h, d, p, T, N, k, K, j];
  }
  // prettier-ignore
  set(e, t, r, s, o, u, c, f, h, d, p, T, N, k, K, j) {
    this.Ah = e | 0, this.Al = t | 0, this.Bh = r | 0, this.Bl = s | 0, this.Ch = o | 0, this.Cl = u | 0, this.Dh = c | 0, this.Dl = f | 0, this.Eh = h | 0, this.El = d | 0, this.Fh = p | 0, this.Fl = T | 0, this.Gh = N | 0, this.Gl = k | 0, this.Hh = K | 0, this.Hl = j | 0;
  }
  process(e, t) {
    for (let M = 0; M < 16; M++, t += 4)
      Yr[M] = e.getUint32(t), Qr[M] = e.getUint32(t += 4);
    for (let M = 16; M < 80; M++) {
      const z = Yr[M - 15] | 0, _ = Qr[M - 15] | 0, G = ue.rotrSH(z, _, 1) ^ ue.rotrSH(z, _, 8) ^ ue.shrSH(z, _, 7), F = ue.rotrSL(z, _, 1) ^ ue.rotrSL(z, _, 8) ^ ue.shrSL(z, _, 7), Q = Yr[M - 2] | 0, le = Qr[M - 2] | 0, Ie = ue.rotrSH(Q, le, 19) ^ ue.rotrBH(Q, le, 61) ^ ue.shrSH(Q, le, 6), ke = ue.rotrSL(Q, le, 19) ^ ue.rotrBL(Q, le, 61) ^ ue.shrSL(Q, le, 6), xe = ue.add4L(F, ke, Qr[M - 7], Qr[M - 16]), et = ue.add4H(xe, G, Ie, Yr[M - 7], Yr[M - 16]);
      Yr[M] = et | 0, Qr[M] = xe | 0;
    }
    let { Ah: r, Al: s, Bh: o, Bl: u, Ch: c, Cl: f, Dh: h, Dl: d, Eh: p, El: T, Fh: N, Fl: k, Gh: K, Gl: j, Hh: X, Hl: se } = this;
    for (let M = 0; M < 80; M++) {
      const z = ue.rotrSH(p, T, 14) ^ ue.rotrSH(p, T, 18) ^ ue.rotrBH(p, T, 41), _ = ue.rotrSL(p, T, 14) ^ ue.rotrSL(p, T, 18) ^ ue.rotrBL(p, T, 41), G = p & N ^ ~p & K, F = T & k ^ ~T & j, Q = ue.add5L(se, _, F, mw[M], Qr[M]), le = ue.add5H(Q, X, z, G, fw[M], Yr[M]), Ie = Q | 0, ke = ue.rotrSH(r, s, 28) ^ ue.rotrBH(r, s, 34) ^ ue.rotrBH(r, s, 39), xe = ue.rotrSL(r, s, 28) ^ ue.rotrBL(r, s, 34) ^ ue.rotrBL(r, s, 39), et = r & o ^ r & c ^ o & c, an = s & u ^ s & f ^ u & f;
      X = K | 0, se = j | 0, K = N | 0, j = k | 0, N = p | 0, k = T | 0, { h: p, l: T } = ue.add(h | 0, d | 0, le | 0, Ie | 0), h = c | 0, d = f | 0, c = o | 0, f = u | 0, o = r | 0, u = s | 0;
      const Ge = ue.add3L(Ie, xe, an);
      r = ue.add3H(Ge, le, ke, et), s = Ge | 0;
    }
    ({ h: r, l: s } = ue.add(this.Ah | 0, this.Al | 0, r | 0, s | 0)), { h: o, l: u } = ue.add(this.Bh | 0, this.Bl | 0, o | 0, u | 0), { h: c, l: f } = ue.add(this.Ch | 0, this.Cl | 0, c | 0, f | 0), { h, l: d } = ue.add(this.Dh | 0, this.Dl | 0, h | 0, d | 0), { h: p, l: T } = ue.add(this.Eh | 0, this.El | 0, p | 0, T | 0), { h: N, l: k } = ue.add(this.Fh | 0, this.Fl | 0, N | 0, k | 0), { h: K, l: j } = ue.add(this.Gh | 0, this.Gl | 0, K | 0, j | 0), { h: X, l: se } = ue.add(this.Hh | 0, this.Hl | 0, X | 0, se | 0), this.set(r, s, o, u, c, f, h, d, p, T, N, k, K, j, X, se);
  }
  roundClean() {
    Yr.fill(0), Qr.fill(0);
  }
  destroy() {
    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
const hw = /* @__PURE__ */ sd(() => new dw());
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
BigInt(0);
const pw = BigInt(1), gw = BigInt(2);
function Ya(n) {
  return n instanceof Uint8Array || n != null && typeof n == "object" && n.constructor.name === "Uint8Array";
}
const yw = /* @__PURE__ */ Array.from({ length: 256 }, (n, e) => e.toString(16).padStart(2, "0"));
function ll(n) {
  if (!Ya(n))
    throw new Error("Uint8Array expected");
  let e = "";
  for (let t = 0; t < n.length; t++)
    e += yw[n[t]];
  return e;
}
function ud(n) {
  if (typeof n != "string")
    throw new Error("hex string expected, got " + typeof n);
  return BigInt(n === "" ? "0" : `0x${n}`);
}
const un = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
function yf(n) {
  if (n >= un._0 && n <= un._9)
    return n - un._0;
  if (n >= un._A && n <= un._F)
    return n - (un._A - 10);
  if (n >= un._a && n <= un._f)
    return n - (un._a - 10);
}
function cd(n) {
  if (typeof n != "string")
    throw new Error("hex string expected, got " + typeof n);
  const e = n.length, t = e / 2;
  if (e % 2)
    throw new Error("padded hex string expected, got unpadded hex of length " + e);
  const r = new Uint8Array(t);
  for (let s = 0, o = 0; s < t; s++, o += 2) {
    const u = yf(n.charCodeAt(o)), c = yf(n.charCodeAt(o + 1));
    if (u === void 0 || c === void 0) {
      const f = n[o] + n[o + 1];
      throw new Error('hex string expected, got non-hex character "' + f + '" at index ' + o);
    }
    r[s] = u * 16 + c;
  }
  return r;
}
function ww(n) {
  return ud(ll(n));
}
function vu(n) {
  if (!Ya(n))
    throw new Error("Uint8Array expected");
  return ud(ll(Uint8Array.from(n).reverse()));
}
function ld(n, e) {
  return cd(n.toString(16).padStart(e * 2, "0"));
}
function Lc(n, e) {
  return ld(n, e).reverse();
}
function Zr(n, e, t) {
  let r;
  if (typeof e == "string")
    try {
      r = cd(e);
    } catch (o) {
      throw new Error(`${n} must be valid hex string, got "${e}". Cause: ${o}`);
    }
  else if (Ya(e))
    r = Uint8Array.from(e);
  else
    throw new Error(`${n} must be hex string or Uint8Array`);
  const s = r.length;
  if (typeof t == "number" && s !== t)
    throw new Error(`${n} expected ${t} bytes, got ${s}`);
  return r;
}
function wf(...n) {
  let e = 0;
  for (let s = 0; s < n.length; s++) {
    const o = n[s];
    if (!Ya(o))
      throw new Error("Uint8Array expected");
    e += o.length;
  }
  let t = new Uint8Array(e), r = 0;
  for (let s = 0; s < n.length; s++) {
    const o = n[s];
    t.set(o, r), r += o.length;
  }
  return t;
}
const Tw = (n) => (gw << BigInt(n - 1)) - pw, vw = {
  bigint: (n) => typeof n == "bigint",
  function: (n) => typeof n == "function",
  boolean: (n) => typeof n == "boolean",
  string: (n) => typeof n == "string",
  stringOrUint8Array: (n) => typeof n == "string" || Ya(n),
  isSafeInteger: (n) => Number.isSafeInteger(n),
  array: (n) => Array.isArray(n),
  field: (n, e) => e.Fp.isValid(n),
  hash: (n) => typeof n == "function" && Number.isSafeInteger(n.outputLen)
};
function fl(n, e, t = {}) {
  const r = (s, o, u) => {
    const c = vw[o];
    if (typeof c != "function")
      throw new Error(`Invalid validator "${o}", expected function`);
    const f = n[s];
    if (!(u && f === void 0) && !c(f, n))
      throw new Error(`Invalid param ${String(s)}=${f} (${typeof f}), expected ${o}`);
  };
  for (const [s, o] of Object.entries(e))
    r(s, o, !1);
  for (const [s, o] of Object.entries(t))
    r(s, o, !0);
  return n;
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const _e = BigInt(0), Je = BigInt(1), js = BigInt(2), Ew = BigInt(3), Cc = BigInt(4), Tf = BigInt(5), vf = BigInt(8);
BigInt(9);
BigInt(16);
function Le(n, e) {
  const t = n % e;
  return t >= _e ? t : e + t;
}
function Nw(n, e, t) {
  if (t <= _e || e < _e)
    throw new Error("Expected power/modulo > 0");
  if (t === Je)
    return _e;
  let r = Je;
  for (; e > _e; )
    e & Je && (r = r * n % t), n = n * n % t, e >>= Je;
  return r;
}
function Rt(n, e, t) {
  let r = n;
  for (; e-- > _e; )
    r *= r, r %= t;
  return r;
}
function Ef(n, e) {
  if (n === _e || e <= _e)
    throw new Error(`invert: expected positive integers, got n=${n} mod=${e}`);
  let t = Le(n, e), r = e, s = _e, o = Je;
  for (; t !== _e; ) {
    const u = r / t, c = r % t, f = s - o * u;
    r = t, t = c, s = o, o = f;
  }
  if (r !== Je)
    throw new Error("invert: does not exist");
  return Le(s, e);
}
function bw(n) {
  const e = (n - Je) / js;
  let t, r, s;
  for (t = n - Je, r = 0; t % js === _e; t /= js, r++)
    ;
  for (s = js; s < n && Nw(s, e, n) !== n - Je; s++)
    ;
  if (r === 1) {
    const u = (n + Je) / Cc;
    return function(c, f) {
      const h = c.pow(f, u);
      if (!c.eql(c.sqr(h), f))
        throw new Error("Cannot find square root");
      return h;
    };
  }
  const o = (t + Je) / js;
  return function(u, c) {
    if (u.pow(c, e) === u.neg(u.ONE))
      throw new Error("Cannot find square root");
    let f = r, h = u.pow(u.mul(u.ONE, s), t), d = u.pow(c, o), p = u.pow(c, t);
    for (; !u.eql(p, u.ONE); ) {
      if (u.eql(p, u.ZERO))
        return u.ZERO;
      let T = 1;
      for (let k = u.sqr(p); T < f && !u.eql(k, u.ONE); T++)
        k = u.sqr(k);
      const N = u.pow(h, Je << BigInt(f - T - 1));
      h = u.sqr(N), d = u.mul(d, N), p = u.mul(p, h), f = T;
    }
    return d;
  };
}
function Sw(n) {
  if (n % Cc === Ew) {
    const e = (n + Je) / Cc;
    return function(t, r) {
      const s = t.pow(r, e);
      if (!t.eql(t.sqr(s), r))
        throw new Error("Cannot find square root");
      return s;
    };
  }
  if (n % vf === Tf) {
    const e = (n - Tf) / vf;
    return function(t, r) {
      const s = t.mul(r, js), o = t.pow(s, e), u = t.mul(r, o), c = t.mul(t.mul(u, js), o), f = t.mul(u, t.sub(c, t.ONE));
      if (!t.eql(t.sqr(f), r))
        throw new Error("Cannot find square root");
      return f;
    };
  }
  return bw(n);
}
const kw = (n, e) => (Le(n, e) & Je) === Je, Iw = [
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
function Ow(n) {
  const e = {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "isSafeInteger",
    BITS: "isSafeInteger"
  }, t = Iw.reduce((r, s) => (r[s] = "function", r), e);
  return fl(n, t);
}
function Bw(n, e, t) {
  if (t < _e)
    throw new Error("Expected power > 0");
  if (t === _e)
    return n.ONE;
  if (t === Je)
    return e;
  let r = n.ONE, s = e;
  for (; t > _e; )
    t & Je && (r = n.mul(r, s)), s = n.sqr(s), t >>= Je;
  return r;
}
function Aw(n, e) {
  const t = new Array(e.length), r = e.reduce((o, u, c) => n.is0(u) ? o : (t[c] = o, n.mul(o, u)), n.ONE), s = n.inv(r);
  return e.reduceRight((o, u, c) => n.is0(u) ? o : (t[c] = n.mul(o, t[c]), n.mul(o, u)), s), t;
}
function fd(n, e) {
  const t = e !== void 0 ? e : n.toString(2).length, r = Math.ceil(t / 8);
  return { nBitLength: t, nByteLength: r };
}
function Jw(n, e, t = !1, r = {}) {
  if (n <= _e)
    throw new Error(`Expected Field ORDER > 0, got ${n}`);
  const { nBitLength: s, nByteLength: o } = fd(n, e);
  if (o > 2048)
    throw new Error("Field lengths over 2048 bytes are not supported");
  const u = Sw(n), c = Object.freeze({
    ORDER: n,
    BITS: s,
    BYTES: o,
    MASK: Tw(s),
    ZERO: _e,
    ONE: Je,
    create: (f) => Le(f, n),
    isValid: (f) => {
      if (typeof f != "bigint")
        throw new Error(`Invalid field element: expected bigint, got ${typeof f}`);
      return _e <= f && f < n;
    },
    is0: (f) => f === _e,
    isOdd: (f) => (f & Je) === Je,
    neg: (f) => Le(-f, n),
    eql: (f, h) => f === h,
    sqr: (f) => Le(f * f, n),
    add: (f, h) => Le(f + h, n),
    sub: (f, h) => Le(f - h, n),
    mul: (f, h) => Le(f * h, n),
    pow: (f, h) => Bw(c, f, h),
    div: (f, h) => Le(f * Ef(h, n), n),
    // Same as above, but doesn't normalize
    sqrN: (f) => f * f,
    addN: (f, h) => f + h,
    subN: (f, h) => f - h,
    mulN: (f, h) => f * h,
    inv: (f) => Ef(f, n),
    sqrt: r.sqrt || ((f) => u(c, f)),
    invertBatch: (f) => Aw(c, f),
    // TODO: do we really need constant cmov?
    // We don't have const-time bigints anyway, so probably will be not very useful
    cmov: (f, h, d) => d ? h : f,
    toBytes: (f) => t ? Lc(f, o) : ld(f, o),
    fromBytes: (f) => {
      if (f.length !== o)
        throw new Error(`Fp.fromBytes: expected ${o}, got ${f.length}`);
      return t ? vu(f) : ww(f);
    }
  });
  return Object.freeze(c);
}
function Rw(n, e) {
  if (!n.isOdd)
    throw new Error("Field doesn't have isOdd");
  const t = n.sqrt(e);
  return n.isOdd(t) ? n.neg(t) : t;
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const xw = BigInt(0), lc = BigInt(1);
function Pw(n, e) {
  const t = (s, o) => {
    const u = o.negate();
    return s ? u : o;
  }, r = (s) => {
    const o = Math.ceil(e / s) + 1, u = 2 ** (s - 1);
    return { windows: o, windowSize: u };
  };
  return {
    constTimeNegate: t,
    // non-const time multiplication ladder
    unsafeLadder(s, o) {
      let u = n.ZERO, c = s;
      for (; o > xw; )
        o & lc && (u = u.add(c)), c = c.double(), o >>= lc;
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
    precomputeWindow(s, o) {
      const { windows: u, windowSize: c } = r(o), f = [];
      let h = s, d = h;
      for (let p = 0; p < u; p++) {
        d = h, f.push(d);
        for (let T = 1; T < c; T++)
          d = d.add(h), f.push(d);
        h = d.double();
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
    wNAF(s, o, u) {
      const { windows: c, windowSize: f } = r(s);
      let h = n.ZERO, d = n.BASE;
      const p = BigInt(2 ** s - 1), T = 2 ** s, N = BigInt(s);
      for (let k = 0; k < c; k++) {
        const K = k * f;
        let j = Number(u & p);
        u >>= N, j > f && (j -= T, u += lc);
        const X = K, se = K + Math.abs(j) - 1, M = k % 2 !== 0, z = j < 0;
        j === 0 ? d = d.add(t(M, o[X])) : h = h.add(t(z, o[se]));
      }
      return { p: h, f: d };
    },
    wNAFCached(s, o, u, c) {
      const f = s._WINDOW_SIZE || 1;
      let h = o.get(s);
      return h || (h = this.precomputeWindow(s, f), f !== 1 && o.set(s, c(h))), this.wNAF(f, h, u);
    }
  };
}
function Lw(n) {
  return Ow(n.Fp), fl(n, {
    n: "bigint",
    h: "bigint",
    Gx: "field",
    Gy: "field"
  }, {
    nBitLength: "isSafeInteger",
    nByteLength: "isSafeInteger"
  }), Object.freeze({
    ...fd(n.n, n.nBitLength),
    ...n,
    p: n.Fp.ORDER
  });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const yt = BigInt(0), st = BigInt(1), cu = BigInt(2), Cw = BigInt(8), Uw = { zip215: !0 };
function qw(n) {
  const e = Lw(n);
  return fl(n, {
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
function Dw(n) {
  const e = qw(n), { Fp: t, n: r, prehash: s, hash: o, randomBytes: u, nByteLength: c, h: f } = e, h = cu << BigInt(c * 8) - st, d = t.create, p = e.uvRatio || ((U, I) => {
    try {
      return { isValid: !0, value: t.sqrt(U * t.inv(I)) };
    } catch {
      return { isValid: !1, value: yt };
    }
  }), T = e.adjustScalarBytes || ((U) => U), N = e.domain || ((U, I, W) => {
    if (I.length || W)
      throw new Error("Contexts/pre-hash are not supported");
    return U;
  }), k = (U) => typeof U == "bigint" && yt < U, K = (U, I) => k(U) && k(I) && U < I, j = (U) => U === yt || K(U, h);
  function X(U, I) {
    if (K(U, I))
      return U;
    throw new Error(`Expected valid scalar < ${I}, got ${typeof U} ${U}`);
  }
  function se(U) {
    return U === yt ? U : X(U, r);
  }
  const M = /* @__PURE__ */ new Map();
  function z(U) {
    if (!(U instanceof _))
      throw new Error("ExtendedPoint expected");
  }
  class _ {
    constructor(I, W, re, Y) {
      if (this.ex = I, this.ey = W, this.ez = re, this.et = Y, !j(I))
        throw new Error("x required");
      if (!j(W))
        throw new Error("y required");
      if (!j(re))
        throw new Error("z required");
      if (!j(Y))
        throw new Error("t required");
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    static fromAffine(I) {
      if (I instanceof _)
        throw new Error("extended point not allowed");
      const { x: W, y: re } = I || {};
      if (!j(W) || !j(re))
        throw new Error("invalid affine point");
      return new _(W, re, st, d(W * re));
    }
    static normalizeZ(I) {
      const W = t.invertBatch(I.map((re) => re.ez));
      return I.map((re, Y) => re.toAffine(W[Y])).map(_.fromAffine);
    }
    // "Private method", don't use it directly
    _setWindowSize(I) {
      this._WINDOW_SIZE = I, M.delete(this);
    }
    // Not required for fromHex(), which always creates valid points.
    // Could be useful for fromAffine().
    assertValidity() {
      const { a: I, d: W } = e;
      if (this.is0())
        throw new Error("bad point: ZERO");
      const { ex: re, ey: Y, ez: Z, et: fe } = this, pe = d(re * re), de = d(Y * Y), Te = d(Z * Z), ge = d(Te * Te), Ne = d(pe * I), Ke = d(Te * d(Ne + de)), Pe = d(ge + d(W * d(pe * de)));
      if (Ke !== Pe)
        throw new Error("bad point: equation left != right (1)");
      const Me = d(re * Y), je = d(Z * fe);
      if (Me !== je)
        throw new Error("bad point: equation left != right (2)");
    }
    // Compare one point to another.
    equals(I) {
      z(I);
      const { ex: W, ey: re, ez: Y } = this, { ex: Z, ey: fe, ez: pe } = I, de = d(W * pe), Te = d(Z * Y), ge = d(re * pe), Ne = d(fe * Y);
      return de === Te && ge === Ne;
    }
    is0() {
      return this.equals(_.ZERO);
    }
    negate() {
      return new _(d(-this.ex), this.ey, this.ez, d(-this.et));
    }
    // Fast algo for doubling Extended Point.
    // https://hyperelliptic.org/EFD/g1p/auto-twisted-extended.html#doubling-dbl-2008-hwcd
    // Cost: 4M + 4S + 1*a + 6add + 1*2.
    double() {
      const { a: I } = e, { ex: W, ey: re, ez: Y } = this, Z = d(W * W), fe = d(re * re), pe = d(cu * d(Y * Y)), de = d(I * Z), Te = W + re, ge = d(d(Te * Te) - Z - fe), Ne = de + fe, Ke = Ne - pe, Pe = de - fe, Me = d(ge * Ke), je = d(Ne * Pe), Xe = d(ge * Pe), g = d(Ke * Ne);
      return new _(Me, je, g, Xe);
    }
    // Fast algo for adding 2 Extended Points.
    // https://hyperelliptic.org/EFD/g1p/auto-twisted-extended.html#addition-add-2008-hwcd
    // Cost: 9M + 1*a + 1*d + 7add.
    add(I) {
      z(I);
      const { a: W, d: re } = e, { ex: Y, ey: Z, ez: fe, et: pe } = this, { ex: de, ey: Te, ez: ge, et: Ne } = I;
      if (W === BigInt(-1)) {
        const x = d((Z - Y) * (Te + de)), P = d((Z + Y) * (Te - de)), J = d(P - x);
        if (J === yt)
          return this.double();
        const $ = d(fe * cu * Ne), V = d(pe * cu * ge), H = V + $, a = P + x, l = V - $, m = d(H * J), y = d(a * l), E = d(H * l), b = d(J * a);
        return new _(m, y, b, E);
      }
      const Ke = d(Y * de), Pe = d(Z * Te), Me = d(pe * re * Ne), je = d(fe * ge), Xe = d((Y + Z) * (de + Te) - Ke - Pe), g = je - Me, v = je + Me, S = d(Pe - W * Ke), O = d(Xe * g), A = d(v * S), L = d(Xe * S), D = d(g * v);
      return new _(O, A, D, L);
    }
    subtract(I) {
      return this.add(I.negate());
    }
    wNAF(I) {
      return Q.wNAFCached(this, M, I, _.normalizeZ);
    }
    // Constant-time multiplication.
    multiply(I) {
      const { p: W, f: re } = this.wNAF(X(I, r));
      return _.normalizeZ([W, re])[0];
    }
    // Non-constant-time multiplication. Uses double-and-add algorithm.
    // It's faster, but should only be used when you don't care about
    // an exposed private key e.g. sig verification.
    // Does NOT allow scalars higher than CURVE.n.
    multiplyUnsafe(I) {
      let W = se(I);
      return W === yt ? F : this.equals(F) || W === st ? this : this.equals(G) ? this.wNAF(W).p : Q.unsafeLadder(this, W);
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
      return Q.unsafeLadder(this, r).is0();
    }
    // Converts Extended point to default (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    toAffine(I) {
      const { ex: W, ey: re, ez: Y } = this, Z = this.is0();
      I == null && (I = Z ? Cw : t.inv(Y));
      const fe = d(W * I), pe = d(re * I), de = d(Y * I);
      if (Z)
        return { x: yt, y: st };
      if (de !== st)
        throw new Error("invZ was invalid");
      return { x: fe, y: pe };
    }
    clearCofactor() {
      const { h: I } = e;
      return I === st ? this : this.multiplyUnsafe(I);
    }
    // Converts hash string or Uint8Array to Point.
    // Uses algo from RFC8032 5.1.3.
    static fromHex(I, W = !1) {
      const { d: re, a: Y } = e, Z = t.BYTES;
      I = Zr("pointHex", I, Z);
      const fe = I.slice(), pe = I[Z - 1];
      fe[Z - 1] = pe & -129;
      const de = vu(fe);
      de === yt || (W ? X(de, h) : X(de, t.ORDER));
      const Te = d(de * de), ge = d(Te - st), Ne = d(re * Te - Y);
      let { isValid: Ke, value: Pe } = p(ge, Ne);
      if (!Ke)
        throw new Error("Point.fromHex: invalid y coordinate");
      const Me = (Pe & st) === st, je = (pe & 128) !== 0;
      if (!W && Pe === yt && je)
        throw new Error("Point.fromHex: x=0 and x_0=1");
      return je !== Me && (Pe = d(-Pe)), _.fromAffine({ x: Pe, y: de });
    }
    static fromPrivateKey(I) {
      return ke(I).point;
    }
    toRawBytes() {
      const { x: I, y: W } = this.toAffine(), re = Lc(W, t.BYTES);
      return re[re.length - 1] |= I & st ? 128 : 0, re;
    }
    toHex() {
      return ll(this.toRawBytes());
    }
  }
  _.BASE = new _(e.Gx, e.Gy, st, d(e.Gx * e.Gy)), _.ZERO = new _(yt, st, st, yt);
  const { BASE: G, ZERO: F } = _, Q = Pw(_, c * 8);
  function le(U) {
    return Le(U, r);
  }
  function Ie(U) {
    return le(vu(U));
  }
  function ke(U) {
    const I = c;
    U = Zr("private key", U, I);
    const W = Zr("hashed private key", o(U), 2 * I), re = T(W.slice(0, I)), Y = W.slice(I, 2 * I), Z = Ie(re), fe = G.multiply(Z), pe = fe.toRawBytes();
    return { head: re, prefix: Y, scalar: Z, point: fe, pointBytes: pe };
  }
  function xe(U) {
    return ke(U).pointBytes;
  }
  function et(U = new Uint8Array(), ...I) {
    const W = wf(...I);
    return Ie(o(N(W, Zr("context", U), !!s)));
  }
  function an(U, I, W = {}) {
    U = Zr("message", U), s && (U = s(U));
    const { prefix: re, scalar: Y, pointBytes: Z } = ke(I), fe = et(W.context, re, U), pe = G.multiply(fe).toRawBytes(), de = et(W.context, pe, Z, U), Te = le(fe + de * Y);
    se(Te);
    const ge = wf(pe, Lc(Te, t.BYTES));
    return Zr("result", ge, c * 2);
  }
  const Ge = Uw;
  function qe(U, I, W, re = Ge) {
    const { context: Y, zip215: Z } = re, fe = t.BYTES;
    U = Zr("signature", U, 2 * fe), I = Zr("message", I), s && (I = s(I));
    const pe = vu(U.slice(fe, 2 * fe));
    let de, Te, ge;
    try {
      de = _.fromHex(W, Z), Te = _.fromHex(U.slice(0, fe), Z), ge = G.multiplyUnsafe(pe);
    } catch {
      return !1;
    }
    if (!Z && de.isSmallOrder())
      return !1;
    const Ne = et(Y, Te.toRawBytes(), de.toRawBytes(), I);
    return Te.add(de.multiplyUnsafe(Ne)).subtract(ge).clearCofactor().equals(_.ZERO);
  }
  return G._setWindowSize(8), {
    CURVE: e,
    getPublicKey: xe,
    sign: an,
    verify: qe,
    ExtendedPoint: _,
    utils: {
      getExtendedPublicKey: ke,
      // ed25519 private keys are uniform 32b. No need to check for modulo bias, like in secp256k1.
      randomPrivateKey: () => u(t.BYTES),
      /**
       * We're doing scalar multiplication (used in getPublicKey etc) with precomputed BASE_POINT
       * values. This slows down first getPublicKey() by milliseconds (see Speed section),
       * but allows to speed-up subsequent getPublicKey() calls up to 20x.
       * @param windowSize 2, 4, 8, 16
       */
      precompute(U = 8, I = _.BASE) {
        return I._setWindowSize(U), I.multiply(BigInt(3)), I;
      }
    }
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const ml = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949"), Nf = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
BigInt(0);
const Fw = BigInt(1), Uc = BigInt(2), _w = BigInt(5), bf = BigInt(10), Kw = BigInt(20), Mw = BigInt(40), Sf = BigInt(80);
function $w(n) {
  const e = ml, t = n * n % e * n % e, r = Rt(t, Uc, e) * t % e, s = Rt(r, Fw, e) * n % e, o = Rt(s, _w, e) * s % e, u = Rt(o, bf, e) * o % e, c = Rt(u, Kw, e) * u % e, f = Rt(c, Mw, e) * c % e, h = Rt(f, Sf, e) * f % e, d = Rt(h, Sf, e) * f % e, p = Rt(d, bf, e) * o % e;
  return { pow_p_5_8: Rt(p, Uc, e) * n % e, b2: t };
}
function Vw(n) {
  return n[0] &= 248, n[31] &= 127, n[31] |= 64, n;
}
function Gw(n, e) {
  const t = ml, r = Le(e * e * e, t), s = Le(r * r * e, t), o = $w(n * s).pow_p_5_8;
  let u = Le(n * r * o, t);
  const c = Le(e * u * u, t), f = u, h = Le(u * Nf, t), d = c === n, p = c === Le(-n, t), T = c === Le(-n * Nf, t);
  return d && (u = f), (p || T) && (u = h), kw(u, t) && (u = Le(-u, t)), { isValid: d || p, value: u };
}
const jr = Jw(ml, void 0, !0), dl = {
  // Param: a
  a: BigInt(-1),
  // Fp.create(-1) is proper; our way still works and is faster
  // d is equal to -121665/121666 over finite field.
  // Negative number is P - number, and division is invert(number, P)
  d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"),
  // Finite field 𝔽p over which we'll do calculations; 2n**255n - 19n
  Fp: jr,
  // Subgroup order: how many points curve has
  // 2n**252n + 27742317777372353535851937790883648493n;
  n: BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"),
  // Cofactor
  h: BigInt(8),
  // Base point (x, y) aka generator point
  Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"),
  Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960"),
  hash: hw,
  randomBytes: Ky,
  adjustScalarBytes: Vw,
  // dom2
  // Ratio of u to v. Allows us to combine inversion and square root. Uses algo from RFC8032 5.1.3.
  // Constant-time, u/√v
  uvRatio: Gw
}, Gs = /* @__PURE__ */ Dw(dl);
({
  ...dl
});
({
  ...dl
});
const jw = (jr.ORDER + BigInt(3)) / BigInt(8);
jr.pow(Uc, jw);
jr.sqrt(jr.neg(jr.ONE));
(jr.ORDER - BigInt(5)) / BigInt(8);
BigInt(486662);
Rw(jr, jr.neg(BigInt(486664)));
BigInt("25063068953384623474111414158702152701244531502492656460079210482610430750235");
BigInt("54469307008909316920995813868745141605393597292927456921205312896311721017578");
BigInt("1159843021668779879193775521855586647937357759715417654439879720876111806838");
BigInt("40440834346308536858101042469323190826248399146238708352240133220865137265952");
BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
function Hw(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function Ww(n) {
  if (n.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var e = new Uint8Array(256), t = 0; t < e.length; t++)
    e[t] = 255;
  for (var r = 0; r < n.length; r++) {
    var s = n.charAt(r), o = s.charCodeAt(0);
    if (e[o] !== 255)
      throw new TypeError(s + " is ambiguous");
    e[o] = r;
  }
  var u = n.length, c = n.charAt(0), f = Math.log(u) / Math.log(256), h = Math.log(256) / Math.log(u);
  function d(N) {
    if (N instanceof Uint8Array || (ArrayBuffer.isView(N) ? N = new Uint8Array(N.buffer, N.byteOffset, N.byteLength) : Array.isArray(N) && (N = Uint8Array.from(N))), !(N instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (N.length === 0)
      return "";
    for (var k = 0, K = 0, j = 0, X = N.length; j !== X && N[j] === 0; )
      j++, k++;
    for (var se = (X - j) * h + 1 >>> 0, M = new Uint8Array(se); j !== X; ) {
      for (var z = N[j], _ = 0, G = se - 1; (z !== 0 || _ < K) && G !== -1; G--, _++)
        z += 256 * M[G] >>> 0, M[G] = z % u >>> 0, z = z / u >>> 0;
      if (z !== 0)
        throw new Error("Non-zero carry");
      K = _, j++;
    }
    for (var F = se - K; F !== se && M[F] === 0; )
      F++;
    for (var Q = c.repeat(k); F < se; ++F)
      Q += n.charAt(M[F]);
    return Q;
  }
  function p(N) {
    if (typeof N != "string")
      throw new TypeError("Expected String");
    if (N.length === 0)
      return new Uint8Array();
    for (var k = 0, K = 0, j = 0; N[k] === c; )
      K++, k++;
    for (var X = (N.length - k) * f + 1 >>> 0, se = new Uint8Array(X); N[k]; ) {
      var M = e[N.charCodeAt(k)];
      if (M === 255)
        return;
      for (var z = 0, _ = X - 1; (M !== 0 || z < j) && _ !== -1; _--, z++)
        M += u * se[_] >>> 0, se[_] = M % 256 >>> 0, M = M / 256 >>> 0;
      if (M !== 0)
        throw new Error("Non-zero carry");
      j = z, k++;
    }
    for (var G = X - j; G !== X && se[G] === 0; )
      G++;
    for (var F = new Uint8Array(K + (X - G)), Q = K; G !== X; )
      F[Q++] = se[G++];
    return F;
  }
  function T(N) {
    var k = p(N);
    if (k)
      return k;
    throw new Error("Non-base" + u + " character");
  }
  return {
    encode: d,
    decodeUnsafe: p,
    decode: T
  };
}
var zw = Ww;
const Xw = zw, Yw = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
var Qw = Xw(Yw);
const xu = /* @__PURE__ */ Hw(Qw);
var hl = {}, Yu = {};
Yu.byteLength = t0;
Yu.toByteArray = r0;
Yu.fromByteArray = o0;
var Ct = [], ft = [], Zw = typeof Uint8Array < "u" ? Uint8Array : Array, fc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var ro = 0, e0 = fc.length; ro < e0; ++ro)
  Ct[ro] = fc[ro], ft[fc.charCodeAt(ro)] = ro;
ft["-".charCodeAt(0)] = 62;
ft["_".charCodeAt(0)] = 63;
function md(n) {
  var e = n.length;
  if (e % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var t = n.indexOf("=");
  t === -1 && (t = e);
  var r = t === e ? 0 : 4 - t % 4;
  return [t, r];
}
function t0(n) {
  var e = md(n), t = e[0], r = e[1];
  return (t + r) * 3 / 4 - r;
}
function n0(n, e, t) {
  return (e + t) * 3 / 4 - t;
}
function r0(n) {
  var e, t = md(n), r = t[0], s = t[1], o = new Zw(n0(n, r, s)), u = 0, c = s > 0 ? r - 4 : r, f;
  for (f = 0; f < c; f += 4)
    e = ft[n.charCodeAt(f)] << 18 | ft[n.charCodeAt(f + 1)] << 12 | ft[n.charCodeAt(f + 2)] << 6 | ft[n.charCodeAt(f + 3)], o[u++] = e >> 16 & 255, o[u++] = e >> 8 & 255, o[u++] = e & 255;
  return s === 2 && (e = ft[n.charCodeAt(f)] << 2 | ft[n.charCodeAt(f + 1)] >> 4, o[u++] = e & 255), s === 1 && (e = ft[n.charCodeAt(f)] << 10 | ft[n.charCodeAt(f + 1)] << 4 | ft[n.charCodeAt(f + 2)] >> 2, o[u++] = e >> 8 & 255, o[u++] = e & 255), o;
}
function i0(n) {
  return Ct[n >> 18 & 63] + Ct[n >> 12 & 63] + Ct[n >> 6 & 63] + Ct[n & 63];
}
function s0(n, e, t) {
  for (var r, s = [], o = e; o < t; o += 3)
    r = (n[o] << 16 & 16711680) + (n[o + 1] << 8 & 65280) + (n[o + 2] & 255), s.push(i0(r));
  return s.join("");
}
function o0(n) {
  for (var e, t = n.length, r = t % 3, s = [], o = 16383, u = 0, c = t - r; u < c; u += o)
    s.push(s0(n, u, u + o > c ? c : u + o));
  return r === 1 ? (e = n[t - 1], s.push(
    Ct[e >> 2] + Ct[e << 4 & 63] + "=="
  )) : r === 2 && (e = (n[t - 2] << 8) + n[t - 1], s.push(
    Ct[e >> 10] + Ct[e >> 4 & 63] + Ct[e << 2 & 63] + "="
  )), s.join("");
}
var pl = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
pl.read = function(n, e, t, r, s) {
  var o, u, c = s * 8 - r - 1, f = (1 << c) - 1, h = f >> 1, d = -7, p = t ? s - 1 : 0, T = t ? -1 : 1, N = n[e + p];
  for (p += T, o = N & (1 << -d) - 1, N >>= -d, d += c; d > 0; o = o * 256 + n[e + p], p += T, d -= 8)
    ;
  for (u = o & (1 << -d) - 1, o >>= -d, d += r; d > 0; u = u * 256 + n[e + p], p += T, d -= 8)
    ;
  if (o === 0)
    o = 1 - h;
  else {
    if (o === f)
      return u ? NaN : (N ? -1 : 1) * (1 / 0);
    u = u + Math.pow(2, r), o = o - h;
  }
  return (N ? -1 : 1) * u * Math.pow(2, o - r);
};
pl.write = function(n, e, t, r, s, o) {
  var u, c, f, h = o * 8 - s - 1, d = (1 << h) - 1, p = d >> 1, T = s === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, N = r ? 0 : o - 1, k = r ? 1 : -1, K = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
  for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (c = isNaN(e) ? 1 : 0, u = d) : (u = Math.floor(Math.log(e) / Math.LN2), e * (f = Math.pow(2, -u)) < 1 && (u--, f *= 2), u + p >= 1 ? e += T / f : e += T * Math.pow(2, 1 - p), e * f >= 2 && (u++, f /= 2), u + p >= d ? (c = 0, u = d) : u + p >= 1 ? (c = (e * f - 1) * Math.pow(2, s), u = u + p) : (c = e * Math.pow(2, p - 1) * Math.pow(2, s), u = 0)); s >= 8; n[t + N] = c & 255, N += k, c /= 256, s -= 8)
    ;
  for (u = u << s | c, h += s; h > 0; n[t + N] = u & 255, N += k, u /= 256, h -= 8)
    ;
  n[t + N - k] |= K * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(n) {
  const e = Yu, t = pl, r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  n.Buffer = c, n.SlowBuffer = se, n.INSPECT_MAX_BYTES = 50;
  const s = 2147483647;
  n.kMaxLength = s, c.TYPED_ARRAY_SUPPORT = o(), !c.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function o() {
    try {
      const a = new Uint8Array(1), l = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(l, Uint8Array.prototype), Object.setPrototypeOf(a, l), a.foo() === 42;
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
  function u(a) {
    if (a > s)
      throw new RangeError('The value "' + a + '" is invalid for option "size"');
    const l = new Uint8Array(a);
    return Object.setPrototypeOf(l, c.prototype), l;
  }
  function c(a, l, m) {
    if (typeof a == "number") {
      if (typeof l == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return p(a);
    }
    return f(a, l, m);
  }
  c.poolSize = 8192;
  function f(a, l, m) {
    if (typeof a == "string")
      return T(a, l);
    if (ArrayBuffer.isView(a))
      return k(a);
    if (a == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof a
      );
    if (P(a, ArrayBuffer) || a && P(a.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (P(a, SharedArrayBuffer) || a && P(a.buffer, SharedArrayBuffer)))
      return K(a, l, m);
    if (typeof a == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const y = a.valueOf && a.valueOf();
    if (y != null && y !== a)
      return c.from(y, l, m);
    const E = j(a);
    if (E)
      return E;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof a[Symbol.toPrimitive] == "function")
      return c.from(a[Symbol.toPrimitive]("string"), l, m);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof a
    );
  }
  c.from = function(a, l, m) {
    return f(a, l, m);
  }, Object.setPrototypeOf(c.prototype, Uint8Array.prototype), Object.setPrototypeOf(c, Uint8Array);
  function h(a) {
    if (typeof a != "number")
      throw new TypeError('"size" argument must be of type number');
    if (a < 0)
      throw new RangeError('The value "' + a + '" is invalid for option "size"');
  }
  function d(a, l, m) {
    return h(a), a <= 0 ? u(a) : l !== void 0 ? typeof m == "string" ? u(a).fill(l, m) : u(a).fill(l) : u(a);
  }
  c.alloc = function(a, l, m) {
    return d(a, l, m);
  };
  function p(a) {
    return h(a), u(a < 0 ? 0 : X(a) | 0);
  }
  c.allocUnsafe = function(a) {
    return p(a);
  }, c.allocUnsafeSlow = function(a) {
    return p(a);
  };
  function T(a, l) {
    if ((typeof l != "string" || l === "") && (l = "utf8"), !c.isEncoding(l))
      throw new TypeError("Unknown encoding: " + l);
    const m = M(a, l) | 0;
    let y = u(m);
    const E = y.write(a, l);
    return E !== m && (y = y.slice(0, E)), y;
  }
  function N(a) {
    const l = a.length < 0 ? 0 : X(a.length) | 0, m = u(l);
    for (let y = 0; y < l; y += 1)
      m[y] = a[y] & 255;
    return m;
  }
  function k(a) {
    if (P(a, Uint8Array)) {
      const l = new Uint8Array(a);
      return K(l.buffer, l.byteOffset, l.byteLength);
    }
    return N(a);
  }
  function K(a, l, m) {
    if (l < 0 || a.byteLength < l)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (a.byteLength < l + (m || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let y;
    return l === void 0 && m === void 0 ? y = new Uint8Array(a) : m === void 0 ? y = new Uint8Array(a, l) : y = new Uint8Array(a, l, m), Object.setPrototypeOf(y, c.prototype), y;
  }
  function j(a) {
    if (c.isBuffer(a)) {
      const l = X(a.length) | 0, m = u(l);
      return m.length === 0 || a.copy(m, 0, 0, l), m;
    }
    if (a.length !== void 0)
      return typeof a.length != "number" || J(a.length) ? u(0) : N(a);
    if (a.type === "Buffer" && Array.isArray(a.data))
      return N(a.data);
  }
  function X(a) {
    if (a >= s)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes");
    return a | 0;
  }
  function se(a) {
    return +a != a && (a = 0), c.alloc(+a);
  }
  c.isBuffer = function(a) {
    return a != null && a._isBuffer === !0 && a !== c.prototype;
  }, c.compare = function(a, l) {
    if (P(a, Uint8Array) && (a = c.from(a, a.offset, a.byteLength)), P(l, Uint8Array) && (l = c.from(l, l.offset, l.byteLength)), !c.isBuffer(a) || !c.isBuffer(l))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (a === l)
      return 0;
    let m = a.length, y = l.length;
    for (let E = 0, b = Math.min(m, y); E < b; ++E)
      if (a[E] !== l[E]) {
        m = a[E], y = l[E];
        break;
      }
    return m < y ? -1 : y < m ? 1 : 0;
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
    let m;
    if (l === void 0)
      for (l = 0, m = 0; m < a.length; ++m)
        l += a[m].length;
    const y = c.allocUnsafe(l);
    let E = 0;
    for (m = 0; m < a.length; ++m) {
      let b = a[m];
      if (P(b, Uint8Array))
        E + b.length > y.length ? (c.isBuffer(b) || (b = c.from(b)), b.copy(y, E)) : Uint8Array.prototype.set.call(
          y,
          b,
          E
        );
      else if (c.isBuffer(b))
        b.copy(y, E);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      E += b.length;
    }
    return y;
  };
  function M(a, l) {
    if (c.isBuffer(a))
      return a.length;
    if (ArrayBuffer.isView(a) || P(a, ArrayBuffer))
      return a.byteLength;
    if (typeof a != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof a
      );
    const m = a.length, y = arguments.length > 2 && arguments[2] === !0;
    if (!y && m === 0)
      return 0;
    let E = !1;
    for (; ; )
      switch (l) {
        case "ascii":
        case "latin1":
        case "binary":
          return m;
        case "utf8":
        case "utf-8":
          return O(a).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return m * 2;
        case "hex":
          return m >>> 1;
        case "base64":
          return D(a).length;
        default:
          if (E)
            return y ? -1 : O(a).length;
          l = ("" + l).toLowerCase(), E = !0;
      }
  }
  c.byteLength = M;
  function z(a, l, m) {
    let y = !1;
    if ((l === void 0 || l < 0) && (l = 0), l > this.length || ((m === void 0 || m > this.length) && (m = this.length), m <= 0) || (m >>>= 0, l >>>= 0, m <= l))
      return "";
    for (a || (a = "utf8"); ; )
      switch (a) {
        case "hex":
          return W(this, l, m);
        case "utf8":
        case "utf-8":
          return an(this, l, m);
        case "ascii":
          return U(this, l, m);
        case "latin1":
        case "binary":
          return I(this, l, m);
        case "base64":
          return et(this, l, m);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return re(this, l, m);
        default:
          if (y)
            throw new TypeError("Unknown encoding: " + a);
          a = (a + "").toLowerCase(), y = !0;
      }
  }
  c.prototype._isBuffer = !0;
  function _(a, l, m) {
    const y = a[l];
    a[l] = a[m], a[m] = y;
  }
  c.prototype.swap16 = function() {
    const a = this.length;
    if (a % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let l = 0; l < a; l += 2)
      _(this, l, l + 1);
    return this;
  }, c.prototype.swap32 = function() {
    const a = this.length;
    if (a % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let l = 0; l < a; l += 4)
      _(this, l, l + 3), _(this, l + 1, l + 2);
    return this;
  }, c.prototype.swap64 = function() {
    const a = this.length;
    if (a % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let l = 0; l < a; l += 8)
      _(this, l, l + 7), _(this, l + 1, l + 6), _(this, l + 2, l + 5), _(this, l + 3, l + 4);
    return this;
  }, c.prototype.toString = function() {
    const a = this.length;
    return a === 0 ? "" : arguments.length === 0 ? an(this, 0, a) : z.apply(this, arguments);
  }, c.prototype.toLocaleString = c.prototype.toString, c.prototype.equals = function(a) {
    if (!c.isBuffer(a))
      throw new TypeError("Argument must be a Buffer");
    return this === a ? !0 : c.compare(this, a) === 0;
  }, c.prototype.inspect = function() {
    let a = "";
    const l = n.INSPECT_MAX_BYTES;
    return a = this.toString("hex", 0, l).replace(/(.{2})/g, "$1 ").trim(), this.length > l && (a += " ... "), "<Buffer " + a + ">";
  }, r && (c.prototype[r] = c.prototype.inspect), c.prototype.compare = function(a, l, m, y, E) {
    if (P(a, Uint8Array) && (a = c.from(a, a.offset, a.byteLength)), !c.isBuffer(a))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof a
      );
    if (l === void 0 && (l = 0), m === void 0 && (m = a ? a.length : 0), y === void 0 && (y = 0), E === void 0 && (E = this.length), l < 0 || m > a.length || y < 0 || E > this.length)
      throw new RangeError("out of range index");
    if (y >= E && l >= m)
      return 0;
    if (y >= E)
      return -1;
    if (l >= m)
      return 1;
    if (l >>>= 0, m >>>= 0, y >>>= 0, E >>>= 0, this === a)
      return 0;
    let b = E - y, C = m - l;
    const ye = Math.min(b, C), Oe = this.slice(y, E), ve = a.slice(l, m);
    for (let oe = 0; oe < ye; ++oe)
      if (Oe[oe] !== ve[oe]) {
        b = Oe[oe], C = ve[oe];
        break;
      }
    return b < C ? -1 : C < b ? 1 : 0;
  };
  function G(a, l, m, y, E) {
    if (a.length === 0)
      return -1;
    if (typeof m == "string" ? (y = m, m = 0) : m > 2147483647 ? m = 2147483647 : m < -2147483648 && (m = -2147483648), m = +m, J(m) && (m = E ? 0 : a.length - 1), m < 0 && (m = a.length + m), m >= a.length) {
      if (E)
        return -1;
      m = a.length - 1;
    } else if (m < 0)
      if (E)
        m = 0;
      else
        return -1;
    if (typeof l == "string" && (l = c.from(l, y)), c.isBuffer(l))
      return l.length === 0 ? -1 : F(a, l, m, y, E);
    if (typeof l == "number")
      return l = l & 255, typeof Uint8Array.prototype.indexOf == "function" ? E ? Uint8Array.prototype.indexOf.call(a, l, m) : Uint8Array.prototype.lastIndexOf.call(a, l, m) : F(a, [l], m, y, E);
    throw new TypeError("val must be string, number or Buffer");
  }
  function F(a, l, m, y, E) {
    let b = 1, C = a.length, ye = l.length;
    if (y !== void 0 && (y = String(y).toLowerCase(), y === "ucs2" || y === "ucs-2" || y === "utf16le" || y === "utf-16le")) {
      if (a.length < 2 || l.length < 2)
        return -1;
      b = 2, C /= 2, ye /= 2, m /= 2;
    }
    function Oe(oe, he) {
      return b === 1 ? oe[he] : oe.readUInt16BE(he * b);
    }
    let ve;
    if (E) {
      let oe = -1;
      for (ve = m; ve < C; ve++)
        if (Oe(a, ve) === Oe(l, oe === -1 ? 0 : ve - oe)) {
          if (oe === -1 && (oe = ve), ve - oe + 1 === ye)
            return oe * b;
        } else
          oe !== -1 && (ve -= ve - oe), oe = -1;
    } else
      for (m + ye > C && (m = C - ye), ve = m; ve >= 0; ve--) {
        let oe = !0;
        for (let he = 0; he < ye; he++)
          if (Oe(a, ve + he) !== Oe(l, he)) {
            oe = !1;
            break;
          }
        if (oe)
          return ve;
      }
    return -1;
  }
  c.prototype.includes = function(a, l, m) {
    return this.indexOf(a, l, m) !== -1;
  }, c.prototype.indexOf = function(a, l, m) {
    return G(this, a, l, m, !0);
  }, c.prototype.lastIndexOf = function(a, l, m) {
    return G(this, a, l, m, !1);
  };
  function Q(a, l, m, y) {
    m = Number(m) || 0;
    const E = a.length - m;
    y ? (y = Number(y), y > E && (y = E)) : y = E;
    const b = l.length;
    y > b / 2 && (y = b / 2);
    let C;
    for (C = 0; C < y; ++C) {
      const ye = parseInt(l.substr(C * 2, 2), 16);
      if (J(ye))
        return C;
      a[m + C] = ye;
    }
    return C;
  }
  function le(a, l, m, y) {
    return x(O(l, a.length - m), a, m, y);
  }
  function Ie(a, l, m, y) {
    return x(A(l), a, m, y);
  }
  function ke(a, l, m, y) {
    return x(D(l), a, m, y);
  }
  function xe(a, l, m, y) {
    return x(L(l, a.length - m), a, m, y);
  }
  c.prototype.write = function(a, l, m, y) {
    if (l === void 0)
      y = "utf8", m = this.length, l = 0;
    else if (m === void 0 && typeof l == "string")
      y = l, m = this.length, l = 0;
    else if (isFinite(l))
      l = l >>> 0, isFinite(m) ? (m = m >>> 0, y === void 0 && (y = "utf8")) : (y = m, m = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const E = this.length - l;
    if ((m === void 0 || m > E) && (m = E), a.length > 0 && (m < 0 || l < 0) || l > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    y || (y = "utf8");
    let b = !1;
    for (; ; )
      switch (y) {
        case "hex":
          return Q(this, a, l, m);
        case "utf8":
        case "utf-8":
          return le(this, a, l, m);
        case "ascii":
        case "latin1":
        case "binary":
          return Ie(this, a, l, m);
        case "base64":
          return ke(this, a, l, m);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return xe(this, a, l, m);
        default:
          if (b)
            throw new TypeError("Unknown encoding: " + y);
          y = ("" + y).toLowerCase(), b = !0;
      }
  }, c.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function et(a, l, m) {
    return l === 0 && m === a.length ? e.fromByteArray(a) : e.fromByteArray(a.slice(l, m));
  }
  function an(a, l, m) {
    m = Math.min(a.length, m);
    const y = [];
    let E = l;
    for (; E < m; ) {
      const b = a[E];
      let C = null, ye = b > 239 ? 4 : b > 223 ? 3 : b > 191 ? 2 : 1;
      if (E + ye <= m) {
        let Oe, ve, oe, he;
        switch (ye) {
          case 1:
            b < 128 && (C = b);
            break;
          case 2:
            Oe = a[E + 1], (Oe & 192) === 128 && (he = (b & 31) << 6 | Oe & 63, he > 127 && (C = he));
            break;
          case 3:
            Oe = a[E + 1], ve = a[E + 2], (Oe & 192) === 128 && (ve & 192) === 128 && (he = (b & 15) << 12 | (Oe & 63) << 6 | ve & 63, he > 2047 && (he < 55296 || he > 57343) && (C = he));
            break;
          case 4:
            Oe = a[E + 1], ve = a[E + 2], oe = a[E + 3], (Oe & 192) === 128 && (ve & 192) === 128 && (oe & 192) === 128 && (he = (b & 15) << 18 | (Oe & 63) << 12 | (ve & 63) << 6 | oe & 63, he > 65535 && he < 1114112 && (C = he));
        }
      }
      C === null ? (C = 65533, ye = 1) : C > 65535 && (C -= 65536, y.push(C >>> 10 & 1023 | 55296), C = 56320 | C & 1023), y.push(C), E += ye;
    }
    return qe(y);
  }
  const Ge = 4096;
  function qe(a) {
    const l = a.length;
    if (l <= Ge)
      return String.fromCharCode.apply(String, a);
    let m = "", y = 0;
    for (; y < l; )
      m += String.fromCharCode.apply(
        String,
        a.slice(y, y += Ge)
      );
    return m;
  }
  function U(a, l, m) {
    let y = "";
    m = Math.min(a.length, m);
    for (let E = l; E < m; ++E)
      y += String.fromCharCode(a[E] & 127);
    return y;
  }
  function I(a, l, m) {
    let y = "";
    m = Math.min(a.length, m);
    for (let E = l; E < m; ++E)
      y += String.fromCharCode(a[E]);
    return y;
  }
  function W(a, l, m) {
    const y = a.length;
    (!l || l < 0) && (l = 0), (!m || m < 0 || m > y) && (m = y);
    let E = "";
    for (let b = l; b < m; ++b)
      E += $[a[b]];
    return E;
  }
  function re(a, l, m) {
    const y = a.slice(l, m);
    let E = "";
    for (let b = 0; b < y.length - 1; b += 2)
      E += String.fromCharCode(y[b] + y[b + 1] * 256);
    return E;
  }
  c.prototype.slice = function(a, l) {
    const m = this.length;
    a = ~~a, l = l === void 0 ? m : ~~l, a < 0 ? (a += m, a < 0 && (a = 0)) : a > m && (a = m), l < 0 ? (l += m, l < 0 && (l = 0)) : l > m && (l = m), l < a && (l = a);
    const y = this.subarray(a, l);
    return Object.setPrototypeOf(y, c.prototype), y;
  };
  function Y(a, l, m) {
    if (a % 1 !== 0 || a < 0)
      throw new RangeError("offset is not uint");
    if (a + l > m)
      throw new RangeError("Trying to access beyond buffer length");
  }
  c.prototype.readUintLE = c.prototype.readUIntLE = function(a, l, m) {
    a = a >>> 0, l = l >>> 0, m || Y(a, l, this.length);
    let y = this[a], E = 1, b = 0;
    for (; ++b < l && (E *= 256); )
      y += this[a + b] * E;
    return y;
  }, c.prototype.readUintBE = c.prototype.readUIntBE = function(a, l, m) {
    a = a >>> 0, l = l >>> 0, m || Y(a, l, this.length);
    let y = this[a + --l], E = 1;
    for (; l > 0 && (E *= 256); )
      y += this[a + --l] * E;
    return y;
  }, c.prototype.readUint8 = c.prototype.readUInt8 = function(a, l) {
    return a = a >>> 0, l || Y(a, 1, this.length), this[a];
  }, c.prototype.readUint16LE = c.prototype.readUInt16LE = function(a, l) {
    return a = a >>> 0, l || Y(a, 2, this.length), this[a] | this[a + 1] << 8;
  }, c.prototype.readUint16BE = c.prototype.readUInt16BE = function(a, l) {
    return a = a >>> 0, l || Y(a, 2, this.length), this[a] << 8 | this[a + 1];
  }, c.prototype.readUint32LE = c.prototype.readUInt32LE = function(a, l) {
    return a = a >>> 0, l || Y(a, 4, this.length), (this[a] | this[a + 1] << 8 | this[a + 2] << 16) + this[a + 3] * 16777216;
  }, c.prototype.readUint32BE = c.prototype.readUInt32BE = function(a, l) {
    return a = a >>> 0, l || Y(a, 4, this.length), this[a] * 16777216 + (this[a + 1] << 16 | this[a + 2] << 8 | this[a + 3]);
  }, c.prototype.readBigUInt64LE = V(function(a) {
    a = a >>> 0, Xe(a, "offset");
    const l = this[a], m = this[a + 7];
    (l === void 0 || m === void 0) && g(a, this.length - 8);
    const y = l + this[++a] * 2 ** 8 + this[++a] * 2 ** 16 + this[++a] * 2 ** 24, E = this[++a] + this[++a] * 2 ** 8 + this[++a] * 2 ** 16 + m * 2 ** 24;
    return BigInt(y) + (BigInt(E) << BigInt(32));
  }), c.prototype.readBigUInt64BE = V(function(a) {
    a = a >>> 0, Xe(a, "offset");
    const l = this[a], m = this[a + 7];
    (l === void 0 || m === void 0) && g(a, this.length - 8);
    const y = l * 2 ** 24 + this[++a] * 2 ** 16 + this[++a] * 2 ** 8 + this[++a], E = this[++a] * 2 ** 24 + this[++a] * 2 ** 16 + this[++a] * 2 ** 8 + m;
    return (BigInt(y) << BigInt(32)) + BigInt(E);
  }), c.prototype.readIntLE = function(a, l, m) {
    a = a >>> 0, l = l >>> 0, m || Y(a, l, this.length);
    let y = this[a], E = 1, b = 0;
    for (; ++b < l && (E *= 256); )
      y += this[a + b] * E;
    return E *= 128, y >= E && (y -= Math.pow(2, 8 * l)), y;
  }, c.prototype.readIntBE = function(a, l, m) {
    a = a >>> 0, l = l >>> 0, m || Y(a, l, this.length);
    let y = l, E = 1, b = this[a + --y];
    for (; y > 0 && (E *= 256); )
      b += this[a + --y] * E;
    return E *= 128, b >= E && (b -= Math.pow(2, 8 * l)), b;
  }, c.prototype.readInt8 = function(a, l) {
    return a = a >>> 0, l || Y(a, 1, this.length), this[a] & 128 ? (255 - this[a] + 1) * -1 : this[a];
  }, c.prototype.readInt16LE = function(a, l) {
    a = a >>> 0, l || Y(a, 2, this.length);
    const m = this[a] | this[a + 1] << 8;
    return m & 32768 ? m | 4294901760 : m;
  }, c.prototype.readInt16BE = function(a, l) {
    a = a >>> 0, l || Y(a, 2, this.length);
    const m = this[a + 1] | this[a] << 8;
    return m & 32768 ? m | 4294901760 : m;
  }, c.prototype.readInt32LE = function(a, l) {
    return a = a >>> 0, l || Y(a, 4, this.length), this[a] | this[a + 1] << 8 | this[a + 2] << 16 | this[a + 3] << 24;
  }, c.prototype.readInt32BE = function(a, l) {
    return a = a >>> 0, l || Y(a, 4, this.length), this[a] << 24 | this[a + 1] << 16 | this[a + 2] << 8 | this[a + 3];
  }, c.prototype.readBigInt64LE = V(function(a) {
    a = a >>> 0, Xe(a, "offset");
    const l = this[a], m = this[a + 7];
    (l === void 0 || m === void 0) && g(a, this.length - 8);
    const y = this[a + 4] + this[a + 5] * 2 ** 8 + this[a + 6] * 2 ** 16 + (m << 24);
    return (BigInt(y) << BigInt(32)) + BigInt(l + this[++a] * 2 ** 8 + this[++a] * 2 ** 16 + this[++a] * 2 ** 24);
  }), c.prototype.readBigInt64BE = V(function(a) {
    a = a >>> 0, Xe(a, "offset");
    const l = this[a], m = this[a + 7];
    (l === void 0 || m === void 0) && g(a, this.length - 8);
    const y = (l << 24) + // Overflow
    this[++a] * 2 ** 16 + this[++a] * 2 ** 8 + this[++a];
    return (BigInt(y) << BigInt(32)) + BigInt(this[++a] * 2 ** 24 + this[++a] * 2 ** 16 + this[++a] * 2 ** 8 + m);
  }), c.prototype.readFloatLE = function(a, l) {
    return a = a >>> 0, l || Y(a, 4, this.length), t.read(this, a, !0, 23, 4);
  }, c.prototype.readFloatBE = function(a, l) {
    return a = a >>> 0, l || Y(a, 4, this.length), t.read(this, a, !1, 23, 4);
  }, c.prototype.readDoubleLE = function(a, l) {
    return a = a >>> 0, l || Y(a, 8, this.length), t.read(this, a, !0, 52, 8);
  }, c.prototype.readDoubleBE = function(a, l) {
    return a = a >>> 0, l || Y(a, 8, this.length), t.read(this, a, !1, 52, 8);
  };
  function Z(a, l, m, y, E, b) {
    if (!c.isBuffer(a))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (l > E || l < b)
      throw new RangeError('"value" argument is out of bounds');
    if (m + y > a.length)
      throw new RangeError("Index out of range");
  }
  c.prototype.writeUintLE = c.prototype.writeUIntLE = function(a, l, m, y) {
    if (a = +a, l = l >>> 0, m = m >>> 0, !y) {
      const C = Math.pow(2, 8 * m) - 1;
      Z(this, a, l, m, C, 0);
    }
    let E = 1, b = 0;
    for (this[l] = a & 255; ++b < m && (E *= 256); )
      this[l + b] = a / E & 255;
    return l + m;
  }, c.prototype.writeUintBE = c.prototype.writeUIntBE = function(a, l, m, y) {
    if (a = +a, l = l >>> 0, m = m >>> 0, !y) {
      const C = Math.pow(2, 8 * m) - 1;
      Z(this, a, l, m, C, 0);
    }
    let E = m - 1, b = 1;
    for (this[l + E] = a & 255; --E >= 0 && (b *= 256); )
      this[l + E] = a / b & 255;
    return l + m;
  }, c.prototype.writeUint8 = c.prototype.writeUInt8 = function(a, l, m) {
    return a = +a, l = l >>> 0, m || Z(this, a, l, 1, 255, 0), this[l] = a & 255, l + 1;
  }, c.prototype.writeUint16LE = c.prototype.writeUInt16LE = function(a, l, m) {
    return a = +a, l = l >>> 0, m || Z(this, a, l, 2, 65535, 0), this[l] = a & 255, this[l + 1] = a >>> 8, l + 2;
  }, c.prototype.writeUint16BE = c.prototype.writeUInt16BE = function(a, l, m) {
    return a = +a, l = l >>> 0, m || Z(this, a, l, 2, 65535, 0), this[l] = a >>> 8, this[l + 1] = a & 255, l + 2;
  }, c.prototype.writeUint32LE = c.prototype.writeUInt32LE = function(a, l, m) {
    return a = +a, l = l >>> 0, m || Z(this, a, l, 4, 4294967295, 0), this[l + 3] = a >>> 24, this[l + 2] = a >>> 16, this[l + 1] = a >>> 8, this[l] = a & 255, l + 4;
  }, c.prototype.writeUint32BE = c.prototype.writeUInt32BE = function(a, l, m) {
    return a = +a, l = l >>> 0, m || Z(this, a, l, 4, 4294967295, 0), this[l] = a >>> 24, this[l + 1] = a >>> 16, this[l + 2] = a >>> 8, this[l + 3] = a & 255, l + 4;
  };
  function fe(a, l, m, y, E) {
    je(l, y, E, a, m, 7);
    let b = Number(l & BigInt(4294967295));
    a[m++] = b, b = b >> 8, a[m++] = b, b = b >> 8, a[m++] = b, b = b >> 8, a[m++] = b;
    let C = Number(l >> BigInt(32) & BigInt(4294967295));
    return a[m++] = C, C = C >> 8, a[m++] = C, C = C >> 8, a[m++] = C, C = C >> 8, a[m++] = C, m;
  }
  function pe(a, l, m, y, E) {
    je(l, y, E, a, m, 7);
    let b = Number(l & BigInt(4294967295));
    a[m + 7] = b, b = b >> 8, a[m + 6] = b, b = b >> 8, a[m + 5] = b, b = b >> 8, a[m + 4] = b;
    let C = Number(l >> BigInt(32) & BigInt(4294967295));
    return a[m + 3] = C, C = C >> 8, a[m + 2] = C, C = C >> 8, a[m + 1] = C, C = C >> 8, a[m] = C, m + 8;
  }
  c.prototype.writeBigUInt64LE = V(function(a, l = 0) {
    return fe(this, a, l, BigInt(0), BigInt("0xffffffffffffffff"));
  }), c.prototype.writeBigUInt64BE = V(function(a, l = 0) {
    return pe(this, a, l, BigInt(0), BigInt("0xffffffffffffffff"));
  }), c.prototype.writeIntLE = function(a, l, m, y) {
    if (a = +a, l = l >>> 0, !y) {
      const ye = Math.pow(2, 8 * m - 1);
      Z(this, a, l, m, ye - 1, -ye);
    }
    let E = 0, b = 1, C = 0;
    for (this[l] = a & 255; ++E < m && (b *= 256); )
      a < 0 && C === 0 && this[l + E - 1] !== 0 && (C = 1), this[l + E] = (a / b >> 0) - C & 255;
    return l + m;
  }, c.prototype.writeIntBE = function(a, l, m, y) {
    if (a = +a, l = l >>> 0, !y) {
      const ye = Math.pow(2, 8 * m - 1);
      Z(this, a, l, m, ye - 1, -ye);
    }
    let E = m - 1, b = 1, C = 0;
    for (this[l + E] = a & 255; --E >= 0 && (b *= 256); )
      a < 0 && C === 0 && this[l + E + 1] !== 0 && (C = 1), this[l + E] = (a / b >> 0) - C & 255;
    return l + m;
  }, c.prototype.writeInt8 = function(a, l, m) {
    return a = +a, l = l >>> 0, m || Z(this, a, l, 1, 127, -128), a < 0 && (a = 255 + a + 1), this[l] = a & 255, l + 1;
  }, c.prototype.writeInt16LE = function(a, l, m) {
    return a = +a, l = l >>> 0, m || Z(this, a, l, 2, 32767, -32768), this[l] = a & 255, this[l + 1] = a >>> 8, l + 2;
  }, c.prototype.writeInt16BE = function(a, l, m) {
    return a = +a, l = l >>> 0, m || Z(this, a, l, 2, 32767, -32768), this[l] = a >>> 8, this[l + 1] = a & 255, l + 2;
  }, c.prototype.writeInt32LE = function(a, l, m) {
    return a = +a, l = l >>> 0, m || Z(this, a, l, 4, 2147483647, -2147483648), this[l] = a & 255, this[l + 1] = a >>> 8, this[l + 2] = a >>> 16, this[l + 3] = a >>> 24, l + 4;
  }, c.prototype.writeInt32BE = function(a, l, m) {
    return a = +a, l = l >>> 0, m || Z(this, a, l, 4, 2147483647, -2147483648), a < 0 && (a = 4294967295 + a + 1), this[l] = a >>> 24, this[l + 1] = a >>> 16, this[l + 2] = a >>> 8, this[l + 3] = a & 255, l + 4;
  }, c.prototype.writeBigInt64LE = V(function(a, l = 0) {
    return fe(this, a, l, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), c.prototype.writeBigInt64BE = V(function(a, l = 0) {
    return pe(this, a, l, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function de(a, l, m, y, E, b) {
    if (m + y > a.length)
      throw new RangeError("Index out of range");
    if (m < 0)
      throw new RangeError("Index out of range");
  }
  function Te(a, l, m, y, E) {
    return l = +l, m = m >>> 0, E || de(a, l, m, 4), t.write(a, l, m, y, 23, 4), m + 4;
  }
  c.prototype.writeFloatLE = function(a, l, m) {
    return Te(this, a, l, !0, m);
  }, c.prototype.writeFloatBE = function(a, l, m) {
    return Te(this, a, l, !1, m);
  };
  function ge(a, l, m, y, E) {
    return l = +l, m = m >>> 0, E || de(a, l, m, 8), t.write(a, l, m, y, 52, 8), m + 8;
  }
  c.prototype.writeDoubleLE = function(a, l, m) {
    return ge(this, a, l, !0, m);
  }, c.prototype.writeDoubleBE = function(a, l, m) {
    return ge(this, a, l, !1, m);
  }, c.prototype.copy = function(a, l, m, y) {
    if (!c.isBuffer(a))
      throw new TypeError("argument should be a Buffer");
    if (m || (m = 0), !y && y !== 0 && (y = this.length), l >= a.length && (l = a.length), l || (l = 0), y > 0 && y < m && (y = m), y === m || a.length === 0 || this.length === 0)
      return 0;
    if (l < 0)
      throw new RangeError("targetStart out of bounds");
    if (m < 0 || m >= this.length)
      throw new RangeError("Index out of range");
    if (y < 0)
      throw new RangeError("sourceEnd out of bounds");
    y > this.length && (y = this.length), a.length - l < y - m && (y = a.length - l + m);
    const E = y - m;
    return this === a && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(l, m, y) : Uint8Array.prototype.set.call(
      a,
      this.subarray(m, y),
      l
    ), E;
  }, c.prototype.fill = function(a, l, m, y) {
    if (typeof a == "string") {
      if (typeof l == "string" ? (y = l, l = 0, m = this.length) : typeof m == "string" && (y = m, m = this.length), y !== void 0 && typeof y != "string")
        throw new TypeError("encoding must be a string");
      if (typeof y == "string" && !c.isEncoding(y))
        throw new TypeError("Unknown encoding: " + y);
      if (a.length === 1) {
        const b = a.charCodeAt(0);
        (y === "utf8" && b < 128 || y === "latin1") && (a = b);
      }
    } else
      typeof a == "number" ? a = a & 255 : typeof a == "boolean" && (a = Number(a));
    if (l < 0 || this.length < l || this.length < m)
      throw new RangeError("Out of range index");
    if (m <= l)
      return this;
    l = l >>> 0, m = m === void 0 ? this.length : m >>> 0, a || (a = 0);
    let E;
    if (typeof a == "number")
      for (E = l; E < m; ++E)
        this[E] = a;
    else {
      const b = c.isBuffer(a) ? a : c.from(a, y), C = b.length;
      if (C === 0)
        throw new TypeError('The value "' + a + '" is invalid for argument "value"');
      for (E = 0; E < m - l; ++E)
        this[E + l] = b[E % C];
    }
    return this;
  };
  const Ne = {};
  function Ke(a, l, m) {
    Ne[a] = class extends m {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: l.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${a}]`, this.stack, delete this.name;
      }
      get code() {
        return a;
      }
      set code(y) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: y,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${a}]: ${this.message}`;
      }
    };
  }
  Ke(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(a) {
      return a ? `${a} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), Ke(
    "ERR_INVALID_ARG_TYPE",
    function(a, l) {
      return `The "${a}" argument must be of type number. Received type ${typeof l}`;
    },
    TypeError
  ), Ke(
    "ERR_OUT_OF_RANGE",
    function(a, l, m) {
      let y = `The value of "${a}" is out of range.`, E = m;
      return Number.isInteger(m) && Math.abs(m) > 2 ** 32 ? E = Pe(String(m)) : typeof m == "bigint" && (E = String(m), (m > BigInt(2) ** BigInt(32) || m < -(BigInt(2) ** BigInt(32))) && (E = Pe(E)), E += "n"), y += ` It must be ${l}. Received ${E}`, y;
    },
    RangeError
  );
  function Pe(a) {
    let l = "", m = a.length;
    const y = a[0] === "-" ? 1 : 0;
    for (; m >= y + 4; m -= 3)
      l = `_${a.slice(m - 3, m)}${l}`;
    return `${a.slice(0, m)}${l}`;
  }
  function Me(a, l, m) {
    Xe(l, "offset"), (a[l] === void 0 || a[l + m] === void 0) && g(l, a.length - (m + 1));
  }
  function je(a, l, m, y, E, b) {
    if (a > m || a < l) {
      const C = typeof l == "bigint" ? "n" : "";
      let ye;
      throw b > 3 ? l === 0 || l === BigInt(0) ? ye = `>= 0${C} and < 2${C} ** ${(b + 1) * 8}${C}` : ye = `>= -(2${C} ** ${(b + 1) * 8 - 1}${C}) and < 2 ** ${(b + 1) * 8 - 1}${C}` : ye = `>= ${l}${C} and <= ${m}${C}`, new Ne.ERR_OUT_OF_RANGE("value", ye, a);
    }
    Me(y, E, b);
  }
  function Xe(a, l) {
    if (typeof a != "number")
      throw new Ne.ERR_INVALID_ARG_TYPE(l, "number", a);
  }
  function g(a, l, m) {
    throw Math.floor(a) !== a ? (Xe(a, m), new Ne.ERR_OUT_OF_RANGE(m || "offset", "an integer", a)) : l < 0 ? new Ne.ERR_BUFFER_OUT_OF_BOUNDS() : new Ne.ERR_OUT_OF_RANGE(
      m || "offset",
      `>= ${m ? 1 : 0} and <= ${l}`,
      a
    );
  }
  const v = /[^+/0-9A-Za-z-_]/g;
  function S(a) {
    if (a = a.split("=")[0], a = a.trim().replace(v, ""), a.length < 2)
      return "";
    for (; a.length % 4 !== 0; )
      a = a + "=";
    return a;
  }
  function O(a, l) {
    l = l || 1 / 0;
    let m;
    const y = a.length;
    let E = null;
    const b = [];
    for (let C = 0; C < y; ++C) {
      if (m = a.charCodeAt(C), m > 55295 && m < 57344) {
        if (!E) {
          if (m > 56319) {
            (l -= 3) > -1 && b.push(239, 191, 189);
            continue;
          } else if (C + 1 === y) {
            (l -= 3) > -1 && b.push(239, 191, 189);
            continue;
          }
          E = m;
          continue;
        }
        if (m < 56320) {
          (l -= 3) > -1 && b.push(239, 191, 189), E = m;
          continue;
        }
        m = (E - 55296 << 10 | m - 56320) + 65536;
      } else
        E && (l -= 3) > -1 && b.push(239, 191, 189);
      if (E = null, m < 128) {
        if ((l -= 1) < 0)
          break;
        b.push(m);
      } else if (m < 2048) {
        if ((l -= 2) < 0)
          break;
        b.push(
          m >> 6 | 192,
          m & 63 | 128
        );
      } else if (m < 65536) {
        if ((l -= 3) < 0)
          break;
        b.push(
          m >> 12 | 224,
          m >> 6 & 63 | 128,
          m & 63 | 128
        );
      } else if (m < 1114112) {
        if ((l -= 4) < 0)
          break;
        b.push(
          m >> 18 | 240,
          m >> 12 & 63 | 128,
          m >> 6 & 63 | 128,
          m & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return b;
  }
  function A(a) {
    const l = [];
    for (let m = 0; m < a.length; ++m)
      l.push(a.charCodeAt(m) & 255);
    return l;
  }
  function L(a, l) {
    let m, y, E;
    const b = [];
    for (let C = 0; C < a.length && !((l -= 2) < 0); ++C)
      m = a.charCodeAt(C), y = m >> 8, E = m % 256, b.push(E), b.push(y);
    return b;
  }
  function D(a) {
    return e.toByteArray(S(a));
  }
  function x(a, l, m, y) {
    let E;
    for (E = 0; E < y && !(E + m >= l.length || E >= a.length); ++E)
      l[E + m] = a[E];
    return E;
  }
  function P(a, l) {
    return a instanceof l || a != null && a.constructor != null && a.constructor.name != null && a.constructor.name === l.name;
  }
  function J(a) {
    return a !== a;
  }
  const $ = function() {
    const a = "0123456789abcdef", l = new Array(256);
    for (let m = 0; m < 16; ++m) {
      const y = m * 16;
      for (let E = 0; E < 16; ++E)
        l[y + E] = a[m] + a[E];
    }
    return l;
  }();
  function V(a) {
    return typeof BigInt > "u" ? H : a;
  }
  function H() {
    throw new Error("BigInt not supported");
  }
})(hl);
const kf = 32, a0 = /^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]+$/;
class gt {
  /**
   * Constructs a new PublicKey instance.
   *
   * @param publicKey - The raw public key as a Uint8Array.
   */
  constructor(e) {
    if (e.length !== kf)
      throw ac();
    this.value = e;
  }
  /**
   * Constructs a PublicKey instance from its Base58 representation.
   *
   * @param base58 - The Base58 encoded public key string.
   * @returns A new PublicKey instance.
   */
  static fromBase58(e) {
    if (!e.match(a0))
      throw ac();
    const t = xu.decode(e);
    if (t.length !== kf)
      throw ac();
    return new gt(t);
  }
  /**
   * Converts the public key to a Buffer.
   *
   * @returns The public key as a Buffer.
   */
  toBuffer() {
    return hl.Buffer.from([...this.value]);
  }
  /**
   * Encodes the public key into its Base58 representation.
   *
   * @returns The Base58 encoded public key string.
   */
  toBase58() {
    return xu.encode(this.value);
  }
  /**
   * Returns the Base58 encoded string representation of the public key.
   *
   * @returns The Base58 encoded public key string.
   */
  toString() {
    return this.toBase58();
  }
  /**
   * Verifies a signature against the public key.
   *
   * @param message - The message to verify.
   * @param signature - The signature to verify.
   * @returns `true` if the signature is valid, otherwise `false`.
   */
  verify(e, t) {
    return Gs.verify(t, new Uint8Array(e), this.value);
  }
}
class ai {
  /**
   * Constructs a new Keypair instance.
   *
   * @param privateKey - Private key of the key pair.
   * @param publicKey - Public key of the key pair.
   */
  constructor(e, t) {
    this.privateKey = e, this.publicKey = t;
  }
  /**
   * Generates a new random Keypair.
   *
   * @returns A new Keypair instance.
   */
  static generate() {
    const e = Gs.utils.randomPrivateKey(), t = Gs.getPublicKey(e);
    return new ai(e, t);
  }
  /**
   * Constructs a Keypair from a given secret key.
   *
   * @param secretKey - Secret key to derive the Keypair from.
   * @returns A new Keypair instance.
   */
  static fromSecretKey(e) {
    const t = e.subarray(0, 32), r = Gs.getPublicKey(t);
    return new ai(t, r);
  }
  /**
   * Constructs a Keypair from a given seed.
   *
   * @param seed - Seed to derive the Keypair from.
   * @returns A new Keypair instance.
   */
  static fromSeed(e) {
    return ai.fromSecretKey(e);
  }
  /**
   * Constructs a Keypair from a raw private key.
   *
   * @param rawPrivateKey - Raw private key to derive the Keypair from.
   * @returns A new Keypair instance.
   */
  static fromRawPrivateKey(e) {
    const t = Gs.getPublicKey(e);
    return new ai(e, t);
  }
  /**
   * Retrieves the public key as a PublicKey object.
   *
   * @returns The public key.
   */
  getPublicKey() {
    return new gt(this.publicKey);
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
    return Gs.sign(new Uint8Array(e), this.privateKey);
  }
  /**
   * Verifies a message signature against the public key.
   *
   * @param message - The message to verify.
   * @param signature - The signature to verify against.
   * @returns True if the signature is valid, false otherwise.
   */
  verify(e, t) {
    return Gs.verify(t, new Uint8Array(e), this.publicKey);
  }
  /**
   * Returns a string representation of the Keypair.
   */
  toString() {
    return `Keypair(publicKey=${this.getPublicKey().toBase58()})`;
  }
  /**
   * Encodes the Keypair into a base64 encoded string.
   */
  encode() {
    return Buffer.from(this.getSecretKey()).toString("base64");
  }
  /**
   * Decodes a base64 encoded string into a Keypair.
   */
  static decode(e) {
    const t = Buffer.from(e, "base64");
    return ai.fromRawPrivateKey(t);
  }
}
const Po = () => new Error("invalid currency"), Pu = [
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
function u0(n) {
  const e = Pu.indexOf(n);
  if (e === -1)
    throw Po();
  return e;
}
function c0(n) {
  if (n < 0 || n >= Pu.length)
    throw Po();
  return Pu[n];
}
function dd(n) {
  return Pu.indexOf(n) !== -1;
}
class we {
  /**
   * Constructs a new Kin instance.
   * @param whole - The whole part of the Kin amount.
   * @param quarks - The fractional part (quarks) of the Kin amount. Default is 0.
   */
  constructor(e, t = 0) {
    this.whole = BigInt(e), this.quarks = BigInt(t), this.normalize();
  }
  /**
   * Normalizes the Kin values ensuring the `quarks` value is within the valid range.
   * Any overflow is added to the `whole` value.
   */
  normalize() {
    const e = this.quarks / we.quarksPerKin;
    this.whole += e, this.quarks %= we.quarksPerKin;
  }
  /**
   * Converts the Kin amount to its equivalent in quarks.
   * @returns The total value in quarks.
   */
  toQuarks() {
    return this.whole * we.quarksPerKin + this.quarks;
  }
  /**
   * Converts the Kin amount to a decimal representation.
   * @returns The Kin value as a decimal number.
   */
  toDecimal() {
    return Number(this.whole) + Number(this.quarks) / Number(we.quarksPerKin);
  }
  /**
   * Creates a Kin instance from a given quarks value.
   * @param quarks - The value in quarks.
   * @returns A new Kin instance.
   */
  static fromQuarks(e) {
    const t = Number(e / we.quarksPerKin), r = Number(e % we.quarksPerKin);
    return new we(t, r);
  }
  /**
   * Creates a Kin instance from a decimal value.
   * @param decimal - The decimal value to convert.
   * @returns A new Kin instance.
   */
  static fromDecimal(e) {
    const t = BigInt(Math.round(e * Number(we.quarksPerKin)));
    return we.fromQuarks(t);
  }
  /**
   * Adds another Kin value to the current one.
   * @param other - The other Kin value to add.
   * @returns A new Kin instance with the summed value.
   */
  add(e) {
    const t = this.toQuarks() + e.toQuarks();
    return we.fromQuarks(t);
  }
  /**
   * Subtracts another Kin value from the current one.
   * @param other - The other Kin value to subtract.
   * @returns A new Kin instance with the difference.
   */
  subtract(e) {
    const t = this.toQuarks() - e.toQuarks();
    return we.fromQuarks(t);
  }
  /**
   * Multiplies the current Kin value by a factor.
   * @param factor - The multiplication factor.
   * @returns A new Kin instance with the multiplied value.
   */
  multiply(e) {
    const t = this.toQuarks() * BigInt(e);
    return we.fromQuarks(t);
  }
  /**
   * Divides the current Kin value by a divisor.
   * @param divisor - The divisor.
   * @returns A new Kin instance with the divided value.
   */
  divide(e) {
    const t = this.toQuarks() / BigInt(e);
    return we.fromQuarks(t);
  }
}
we.decimals = 5n;
we.quarksPerKin = 100000n;
we.mintAddress = "kinXdEcpDQeHPEuQnqmUgtYykqKGVFq6CeVX5iAHJq6";
we.mint = gt.fromBase58(we.mintAddress);
we.zero = new we(0, 0);
we.one = new we(1, 0);
we.max = new we(Number.MAX_SAFE_INTEGER, Number(we.quarksPerKin - 1n));
we.min = new we(Number.MIN_SAFE_INTEGER, 0);
var $e;
(function(n) {
  n[n.Cash = 0] = "Cash", n[n.GiftCard = 1] = "GiftCard", n[n.RequestPayment = 2] = "RequestPayment", n[n.RequestLogin = 3] = "RequestLogin", n[n.RequestPaymentWithFeesSupport = 4] = "RequestPaymentWithFeesSupport";
})($e || ($e = {}));
const l0 = () => new Error("invalid size"), f0 = () => new Error("invalid value");
class po {
  /**
   * Construct a new CodePayload.
   *
   * @param opt - The options for constructing the payload.
   */
  constructor(e) {
    if (this.kind = e.kind, this.amount = e.amount, this.nonce = e.nonce, e.currency && !dd(e.currency))
      throw Po();
    this.currency = e.currency;
  }
  isCash() {
    return this.kind === $e.Cash && this.amount != null;
  }
  isGiftCard() {
    return this.kind === $e.GiftCard && this.amount != null;
  }
  isRequestPayment() {
    return this.kind === $e.RequestPayment && this.currency != null && this.amount != null;
  }
  isRequestPaymentWithFeesSupport() {
    return this.kind === $e.RequestPaymentWithFeesSupport && this.currency != null && this.amount != null;
  }
  /**
   * Validates the payload, throwing an error if invalid.
   */
  validate() {
    if (this.kind === $e.RequestPayment && !this.currency)
      throw Po();
    if ((this.kind === $e.Cash || this.kind === $e.GiftCard || this.kind === $e.RequestPayment) && !this.amount)
      throw f0();
  }
  /**
   * Convert the payload to its binary representation.
   *
   * @returns A Uint8Array containing the binary representation of the payload.
   */
  toBinary() {
    const e = new Uint8Array(20);
    if (e[0] = this.kind, this.validate(), this.isRequestPayment() || this.isRequestPaymentWithFeesSupport()) {
      if (!this.currency)
        throw Po();
      const t = u0(this.currency);
      e[1] = t;
      for (let r = 0; r < 7; r++)
        e[r + 2] = Number(this.amount >> BigInt(8 * r) & BigInt(255));
    }
    if (this.isCash() || this.isGiftCard())
      for (let t = 0; t < 8; t++)
        e[t + 1] = Number(this.amount >> BigInt(8 * t) & BigInt(255));
    return e.set(this.nonce, 9), e;
  }
  /**
   * Create a CodePayload from its binary representation.
   *
   * @param data - The binary data.
   * @returns A new instance of CodePayload.
   */
  static fromData(e) {
    if (e.length !== po.MAX_LENGTH)
      throw l0();
    const t = e[0];
    let r, s, o;
    if (t === $e.RequestPayment || t === $e.RequestPaymentWithFeesSupport) {
      const u = e[1];
      o = c0(u), r = e.slice(2, 9).reduce((c, f, h) => c + (BigInt(f) << BigInt(8 * h)), BigInt(0));
    }
    return (t === $e.Cash || t === $e.GiftCard) && (r = e.slice(1, 9).reduce((u, c, f) => u + (BigInt(c) << BigInt(8 * f)), BigInt(0))), s = e.slice(9), new po({ kind: t, amount: r, currency: o, nonce: s });
  }
}
po.MAX_LENGTH = 20;
var If;
(function(n) {
  n[n.InvalidSize = 0] = "InvalidSize", n[n.EmptyData = 1] = "EmptyData", n[n.DataTooLong = 2] = "DataTooLong";
})(If || (If = {}));
const m0 = (n, e, t) => n & e ^ ~n & t, d0 = (n, e, t) => n & e ^ n & t ^ e & t, h0 = /* @__PURE__ */ new Uint32Array([
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
]), ei = /* @__PURE__ */ new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]), ti = /* @__PURE__ */ new Uint32Array(64);
class p0 extends od {
  constructor() {
    super(64, 32, 8, !1), this.A = ei[0] | 0, this.B = ei[1] | 0, this.C = ei[2] | 0, this.D = ei[3] | 0, this.E = ei[4] | 0, this.F = ei[5] | 0, this.G = ei[6] | 0, this.H = ei[7] | 0;
  }
  get() {
    const { A: e, B: t, C: r, D: s, E: o, F: u, G: c, H: f } = this;
    return [e, t, r, s, o, u, c, f];
  }
  // prettier-ignore
  set(e, t, r, s, o, u, c, f) {
    this.A = e | 0, this.B = t | 0, this.C = r | 0, this.D = s | 0, this.E = o | 0, this.F = u | 0, this.G = c | 0, this.H = f | 0;
  }
  process(e, t) {
    for (let p = 0; p < 16; p++, t += 4)
      ti[p] = e.getUint32(t, !1);
    for (let p = 16; p < 64; p++) {
      const T = ti[p - 15], N = ti[p - 2], k = Jt(T, 7) ^ Jt(T, 18) ^ T >>> 3, K = Jt(N, 17) ^ Jt(N, 19) ^ N >>> 10;
      ti[p] = K + ti[p - 7] + k + ti[p - 16] | 0;
    }
    let { A: r, B: s, C: o, D: u, E: c, F: f, G: h, H: d } = this;
    for (let p = 0; p < 64; p++) {
      const T = Jt(c, 6) ^ Jt(c, 11) ^ Jt(c, 25), N = d + T + m0(c, f, h) + h0[p] + ti[p] | 0, k = (Jt(r, 2) ^ Jt(r, 13) ^ Jt(r, 22)) + d0(r, s, o) | 0;
      d = h, h = f, f = c, c = u + N | 0, u = o, o = s, s = r, r = N + k | 0;
    }
    r = r + this.A | 0, s = s + this.B | 0, o = o + this.C | 0, u = u + this.D | 0, c = c + this.E | 0, f = f + this.F | 0, h = h + this.G | 0, d = d + this.H | 0, this.set(r, s, o, u, c, f, h, d);
  }
  roundClean() {
    ti.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
const hd = /* @__PURE__ */ sd(() => new p0());
class mt {
  /**
   * Constructor for an idempotency key.
   * @param {Uint8Array} data The value to initialize the idempotency key with. If not specified, a random Uint8Array of length IdempotencyKey.MAX_LENGTH is used.
   */
  constructor(e = new Uint8Array(mt.MAX_LENGTH)) {
    if (e.length != mt.MAX_LENGTH)
      throw Lg();
    this.value = e;
  }
  /**
   * Creates a new idempotency key from a client secret string.
   * @param {string} data The client secret to parse into an idempotency key.
   * @returns {IdempotencyKey} An IdempotencyKey object representing the decoded client secret.
   */
  static fromClientSecret(e) {
    return new mt(xu.decode(e));
  }
  /**
   * Creates a new idempotency key from a seed string.
   * @param {string} seed The seed to create the idempotency key with.
   * @returns {IdempotencyKey} An IdempotencyKey object representing the created idempotency key.
   */
  static fromSeed(e) {
    return new mt(hd(e).subarray(0, mt.MAX_LENGTH));
  }
  /**
   * Generates a random idempotency key.
   * @returns {IdempotencyKey} An IdempotencyKey object representing the generated key.
   */
  static generate() {
    const e = ai.generate().getPrivateValue().subarray(0, mt.MAX_LENGTH);
    return new mt(e);
  }
  /**
   * Converts the idempotency key to a base58 string.
   * @returns {string} A base58 encoded string representing the idempotency key.
   */
  toString() {
    return xu.encode(this.value);
  }
}
mt.MAX_LENGTH = 11;
function g0(n) {
  return ai.fromSeed(hd(n.toBinary()));
}
class pd {
  /**
   * Constructs a new PaymentRequestIntent instance.
   *
   * @param opt - The payment request options.
   */
  constructor(e) {
    this.options = {
      ...e
    }, this.init(), this.validate(), this.options.idempotencyKey ? this.nonce = mt.fromSeed(this.options.idempotencyKey) : this.options.clientSecret ? this.nonce = mt.fromClientSecret(this.options.clientSecret) : this.nonce = mt.generate(), this.rendezvousPayload = this.toPayload(), this.rendezvousKeypair = g0(this.rendezvousPayload);
  }
  /**
   * Constructs a SendMessageRequest message to be sent to the Code Sequencer.
   */
  async getSendMessageRequestProto() {
    const { signature: e, envelope: t } = this.sign();
    return new Wt({
      message: t,
      rendezvousKey: {
        value: this.rendezvousKeypair.getPublicKey().value
      },
      signature: {
        value: e
      }
    });
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
function y0(n) {
  if (n.mode === void 0)
    throw _m();
  if (n.idempotencyKey && n.clientSecret)
    throw Ug();
}
function w0(n) {
  if (n.destination === void 0)
    throw qm();
  if (n.amount === void 0)
    throw Dm();
  if (n.currency === void 0)
    throw Fm();
  if (!dd(n.currency))
    throw Cg();
  gt.fromBase58(n.destination);
}
function Of(n) {
  if (n.login === void 0)
    throw al();
  if (n.login.domain === void 0)
    throw ul();
  if (n.login.verifier === void 0)
    throw Fo();
  let e;
  try {
    e = new URL(n.login.domain);
  } catch {
  }
  if (e)
    throw tf();
  try {
    e = new URL(`http://${n.login.domain}`);
  } catch {
    throw Dg();
  }
  if (e.hostname.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/))
    throw _g();
  {
    if (e.hostname.split(".").length > 2)
      throw Fg();
    if (e.hostname === "localhost")
      throw Kg();
    if (e.port)
      throw Mg();
    if (e.pathname !== "/" || n.login.domain.includes("/"))
      throw tf();
  }
  gt.fromBase58(n.login.verifier);
}
function Bf(n) {
  if (n.signers) {
    for (const e of n.signers)
      if (!e.sign && typeof e.sign != "function")
        throw qg();
  }
}
function gl(n) {
  switch (y0(n), n.mode) {
    case "login":
      Of(n), n.signers && Bf(n);
      break;
    case "payment":
      w0(n), n.login && Of(n), n.signers && Bf(n);
      break;
    default:
      throw _m();
  }
}
class yl extends pd {
  /**
   * Constructs a new PaymentRequestIntent instance.
   *
   * @param opt - The payment request options.
   */
  constructor(e) {
    super({
      ...e,
      // Normalize currency to lowercase 
      // (just in case the end user is not using TypeScript)
      currency: e.currency && e.currency.toLowerCase(),
      mode: "payment"
    });
  }
  init() {
    this.options.amount !== void 0 && (this.options.amount = parseFloat(this.options.amount.toFixed(2)), this.convertedAmount = parseInt((this.options.amount * 100).toFixed()));
  }
  getRequestKind() {
    return this.options.fees ? $e.RequestPaymentWithFeesSupport : $e.RequestPayment;
  }
  toPayload() {
    const e = this.getRequestKind(), t = BigInt(this.convertedAmount), r = this.nonce.value;
    return new po({ kind: e, amount: t, nonce: r, currency: this.options.currency });
  }
  /**
   * Validates the payment request options.
   */
  validate() {
    if (gl(this.options), !this.options.destination)
      throw qm();
    if (!this.options.amount)
      throw Dm();
    if (!this.options.currency)
      throw Fm();
    if (!this.convertedAmount)
      throw Do();
  }
  /**
   * Converts the payment request intent to its protobuf representation.
   *
   * @returns The protobuf representation of the payment request intent.
   */
  toProto() {
    const e = gt.fromBase58(this.options.destination), { currency: t, amount: r } = this.options;
    let s;
    t === "kin" ? s = {
      case: "exact",
      value: new Fe({
        currency: "kin",
        exchangeRate: 1,
        quarks: we.fromDecimal(r).toQuarks(),
        nativeAmount: r
      })
    } : s = {
      case: "partial",
      value: new ht({
        currency: t,
        nativeAmount: r
      })
    };
    const o = new zt({
      requestorAccount: new R({
        value: e.toBuffer()
      }),
      exchangeData: s
    });
    return this.options.fees && (o.additionalFees = this.options.fees.map((u) => new Kt({
      destination: new R({
        value: gt.fromBase58(u.destination).toBuffer()
      }),
      feeBps: u.basisPoints
    }))), new it({
      kind: {
        case: "requestToReceiveBill",
        value: o
      }
    });
  }
  /**
   * Signs the payment request intent.
   *
   * @returns A signed intent containing the message, intent, and signature.
   */
  sign() {
    const e = this.toProto(), t = e.kind.value;
    if (!t)
      throw Do();
    const r = this.rendezvousKeypair.sign(e.toBinary()), s = this.rendezvousKeypair.getPublicKey().toBase58(), o = t.toBinary();
    return {
      envelope: e,
      signedBytes: o,
      intent: s,
      signature: r
    };
  }
}
class T0 extends yl {
  /**
   * Constructs a new PaymentRequestIntent instance.
   *
   * @param opt - The payment request options.
   */
  constructor(e) {
    super(e);
    const { signers: t } = e, { domain: r, verifier: s } = e.login;
    this.domain = r, this.verifier = gt.fromBase58(s), t && (this.signer = t.find((o) => o.getPublicKey().toBase58() === s));
  }
  /**
   * Validates the payment request options.
   */
  validate() {
    if (super.validate(), !this.options.login)
      throw al();
    if (!this.options.login.domain)
      throw ul();
    if (!this.options.login.verifier)
      throw Fo();
  }
  /**
   * Converts the payment request intent to its protobuf representation.
   * Specifically, this method adds the domain and verifier to the request to
   * receive bill message.
   *
   * @returns The protobuf representation of the payment request intent.
   */
  toProto() {
    const e = super.toProto().kind.value;
    if (!e)
      throw Do();
    return e.domain = new at({
      value: this.domain
    }), e.verifier = new R({
      value: this.verifier.toBuffer()
    }), e.rendezvousKey = new R({
      value: this.rendezvousKeypair.getPublicKey().toBuffer()
    }), new it({
      kind: {
        case: "requestToReceiveBill",
        value: e
      }
    });
  }
  /**
   * Signs the payment request intent.
   *
   * @returns A signed intent containing the message, intent, and signature.
   */
  sign() {
    if (!this.signer)
      throw Fo();
    const e = this.toProto(), t = e.kind.value;
    if (!t)
      throw Do();
    t.signature = new ee({
      value: this.signer.sign(t.toBinary())
    });
    const r = this.rendezvousKeypair.sign(e.toBinary()), s = this.rendezvousKeypair.getPublicKey().toBase58(), o = t.toBinary();
    return {
      envelope: e,
      signedBytes: o,
      intent: s,
      signature: r
    };
  }
}
class v0 extends pd {
  /**
   * Constructs a new PaymentRequestIntent instance.
   *
   * @param opt - The payment request options.
   */
  constructor(e) {
    super({
      ...e,
      mode: "login"
    });
    const { signers: t } = e, { domain: r, verifier: s } = e.login;
    this.domain = r, this.verifier = gt.fromBase58(s), t && (this.signer = t.find((o) => o.getPublicKey().toBase58() === s));
  }
  init() {
  }
  toPayload() {
    const e = $e.RequestLogin, t = this.nonce.value;
    return new po({ kind: e, nonce: t });
  }
  /**
   * Validates the payment request options.
   */
  validate() {
    if (gl(this.options), !this.options.login)
      throw al();
    if (!this.options.login.domain)
      throw ul();
    if (!this.options.login.verifier)
      throw Fo();
  }
  /**
   * Converts the payment request intent to its protobuf representation.
   *
   * @returns The protobuf representation of the payment request intent.
   */
  toProto() {
    const e = new Xt({
      domain: {
        value: this.domain
      },
      verifier: {
        value: this.verifier.toBuffer()
      },
      rendezvousKey: {
        value: this.rendezvousKeypair.getPublicKey().toBuffer()
      }
    });
    return new it({
      kind: {
        case: "requestToLogin",
        value: e
      }
    });
  }
  /**
   * Signs the payment request intent.
   *
   * @returns A signed intent containing the message, intent, and signature.
   */
  sign() {
    if (!this.signer)
      throw Fo();
    const e = this.toProto(), t = e.kind.value;
    if (!t)
      throw Do();
    t.signature = new ee({
      value: this.signer.sign(t.toBinary())
    });
    const r = this.rendezvousKeypair.sign(e.toBinary()), s = this.rendezvousKeypair.getPublicKey().toBase58(), o = t.toBinary();
    return {
      envelope: e,
      signedBytes: o,
      intent: s,
      signature: r
    };
  }
}
function E0(n) {
  return typeof btoa == "function" ? btoa(n) : hl.Buffer.from(n, "binary").toString("base64");
}
function Qa(n) {
  return encodeURIComponent(E0(JSON.stringify(n ?? {})));
}
const N0 = () => new Error("Config not initialized");
let Eu;
const b0 = (n) => {
  if (n.codeSdk === void 0)
    throw new Error("codeSdk path is required");
  Eu = It(n);
}, Za = () => {
  if (!Eu)
    throw N0;
  return {
    config: Eu,
    codeSdk: () => Eu.value.codeSdk
  };
};
class yo {
  /**
   * Constructs an EventChannel.
   * @param id - Identifier for the connection.
   * @param targetWindow - The iframe element to communicate with. If not provided, communicates with parent window.
   */
  constructor(e = yo.getId(), t) {
    this.listeners = {}, this.targetWindow = null, this.readyResolver = null, this.setTargetWindow = (r) => {
      this.readyPromise = new Promise((s) => {
        this.readyResolver = s;
      }), r != null && r.contentWindow ? (this.targetWindow = r.contentWindow, r.addEventListener("load", () => {
        this.readyResolver && this.readyResolver();
      })) : (this.targetWindow = window.parent, this.readyResolver && this.readyResolver());
    }, this.emit = async (r, s) => {
      var o;
      await this.ready(), this.targetWindow && this.targetWindow.postMessage({
        id: this.connectionId,
        type: "event",
        payload: { event: r, args: s }
      }, "*");
      const u = r;
      (o = this.listeners[u]) == null || o.forEach((c) => {
        try {
          c(s);
        } catch (f) {
          console.error(`Error in listener for event "${u}": ${f}`);
        }
      });
    }, this.on = (r, s) => {
      const o = (u) => {
        const c = u;
        window.addEventListener("message", (f) => {
          f.data.type === "event" && f.data.payload.event === c && f.data.id === this.connectionId && s(f.data.payload.args);
        }), this.listeners[c] = [...this.listeners[c] || [], s];
      };
      Array.isArray(r) ? r.forEach((u) => o(u)) : o(r);
    }, this.connectionId = e, this.setTargetWindow(t);
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
yo.getId = () => Math.random().toString(36).substring(2, 15);
const S0 = ["width", "height"], k0 = /* @__PURE__ */ go({
  __name: "IntentRequestButton",
  emits: ["resize", "invoke"],
  setup(n, { emit: e }) {
    const t = Za(), r = Bt("options"), s = (r == null ? void 0 : r.mode) ?? "payment", o = e, u = new yo(), c = `${t.codeSdk()}/${s}-request-button/#/${u.id}/p=${Qa(r)}`;
    console.log("url", c);
    const f = It(null), h = It(0), d = It(0);
    ju(() => {
      f.value && (u.on("resize", (T) => {
        const { width: N, height: k } = T;
        f.value && (h.value = N, d.value = k);
      }), u.on("invoke", () => {
        o("invoke", void 0);
      }));
    });
    function p() {
      const T = (N) => N + " !important";
      return {
        display: T("inline-block"),
        width: T("222px"),
        height: T("60px"),
        // We have to set this to make sure the iframe stays transparent.
        // Completely counter-intuitive.
        // https://bugs.chromium.org/p/chromium/issues/detail?id=1150352
        colorScheme: T("light")
      };
    }
    return (T, N) => (nt(), Ps("iframe", {
      ref_key: "el",
      ref: f,
      src: c,
      width: h.value,
      height: d.value,
      frameborder: "0",
      allowtransparency: "true",
      scrolling: "no",
      name: "payment-request-button",
      referrerpolicy: "no-referrer",
      style: Fs(p())
    }, null, 12, S0));
  }
}), gd = /* @__PURE__ */ go({
  __name: "IntentRequestModalDesktop",
  emits: [
    "codeScanned",
    "clientRejectedPayment",
    "clientRejectedLogin",
    "intentSubmitted",
    "channelCreated",
    "error",
    "streamTimeout",
    "streamClosed"
  ],
  setup(n, { emit: e }) {
    const t = Za(), r = Bt("options"), s = (r == null ? void 0 : r.mode) ?? "payment", o = e, u = new yo(), c = `${t.codeSdk()}/${s}-request-modal-desktop/#/${u.id}/p=${Qa(r)}`, f = It(null);
    console.log("url", c), u.on("codeScanned", () => {
      o("codeScanned");
    }), u.on("clientRejectedPayment", () => {
      o("clientRejectedPayment");
    }), u.on("clientRejectedLogin", () => {
      o("clientRejectedLogin");
    }), u.on("intentSubmitted", () => {
      o("intentSubmitted");
    }), u.on("error", (d) => {
      `${d}`.includes("NGHTTP2_INTERNAL_ERROR") ? (console.warn("CodeSDK: GRPC stream closed."), o("streamClosed")) : (console.error(`CodeSDK: ${d}`), o("error", d));
    }), u.on("streamTimeout", () => {
      console.warn("CodeSDK: Websocket Stream timeout."), o("streamTimeout");
    }), u.on("streamClosed", () => {
      console.warn("CodeSDK: Websocket Stream closed."), o("streamClosed");
    }), ju(() => {
      f.value && (u.setTargetWindow(f.value), o("channelCreated", u));
    }), mm(() => {
      var d, p;
      const { clientSecret: T, idempotencyKey: N, confirmParams: k } = r ?? {};
      T && u.emit("updatedClientSecret", { value: T }), N && u.emit("updatedIdempotencyKey", { value: N }), k && ((d = k.success) != null && d.url && u.emit("updatedSuccessUrl", { value: k.success.url }), (p = k.cancel) != null && p.url && u.emit("updatedCancelUrl", { value: k.cancel.url }));
    });
    function h() {
      const d = (p) => p + " !important";
      return {
        position: d("fixed"),
        inset: d("0"),
        zIndex: d("2147483647"),
        overflow: d("hidden"),
        width: d("100dvw"),
        height: d("100dvh"),
        // We have to set this to make sure the iframe stays transparent.
        // Completely counter-intuitive.
        // https://bugs.chromium.org/p/chromium/issues/detail?id=1150352
        colorScheme: d("light")
      };
    }
    return (d, p) => (nt(), Ps("iframe", {
      ref_key: "el",
      ref: f,
      src: c,
      frameborder: "0",
      allowTransparency: "true",
      scrolling: "no",
      name: "payment-request-card",
      referrerpolicy: "no-referrer",
      style: Fs(h())
    }, null, 4));
  }
}), I0 = /* @__PURE__ */ go({
  __name: "IntentRequestModalMobile",
  emits: [
    "codeScanned",
    "clientRejectedPayment",
    "clientRejectedLogin",
    "intentSubmitted",
    "channelCreated",
    "error",
    "streamTimeout",
    "streamClosed"
  ],
  setup(n, { emit: e }) {
    const t = Za(), r = Bt("options"), s = (r == null ? void 0 : r.mode) ?? "payment", o = e, u = new yo(), c = `${t.codeSdk()}/${s}-request-modal-mobile/#/${u.id}/p=${Qa(r)}`, f = It(null);
    u.on("codeScanned", () => {
      o("codeScanned");
    }), u.on("clientRejectedPayment", () => {
      o("clientRejectedPayment");
    }), u.on("clientRejectedLogin", () => {
      o("clientRejectedLogin");
    }), u.on("intentSubmitted", () => {
      o("intentSubmitted");
    }), u.on("navigate", (d) => {
      d.url && (window.location.href = d.url);
    }), u.on("error", (d) => {
      `${d}`.includes("NGHTTP2_INTERNAL_ERROR") ? (console.warn("CodeSDK: GRPC stream closed."), o("streamClosed")) : (console.error(`CodeSDK: ${d}`), o("error", d));
    }), u.on("streamTimeout", () => {
      console.warn("CodeSDK: Websocket Stream timeout."), o("streamTimeout");
    }), u.on("streamClosed", () => {
      console.warn("CodeSDK: Websocket Stream closed."), o("streamClosed");
    }), ju(() => {
      f.value && (u.setTargetWindow(f.value), o("channelCreated", u));
    }), mm(() => {
      var d, p;
      const { clientSecret: T, idempotencyKey: N, confirmParams: k } = r ?? {};
      T && u.emit("updatedClientSecret", { value: T }), N && u.emit("updatedIdempotencyKey", { value: N }), k && ((d = k.success) != null && d.url && u.emit("updatedSuccessUrl", { value: k.success.url }), (p = k.cancel) != null && p.url && u.emit("updatedCancelUrl", { value: k.cancel.url }));
    });
    function h() {
      const d = (p) => p + " !important";
      return {
        position: d("fixed"),
        inset: d("0"),
        zIndex: d("2147483647"),
        overflow: d("hidden"),
        width: d("100dvw"),
        height: d("100dvh"),
        // We have to set this to make sure the iframe stays transparent.
        // Completely counter-intuitive.
        // https://bugs.chromium.org/p/chromium/issues/detail?id=1150352
        colorScheme: d("light")
      };
    }
    return (d, p) => (nt(), Ps("iframe", {
      ref_key: "el",
      ref: f,
      src: c,
      frameborder: "0",
      allowTransparency: "true",
      scrolling: "no",
      name: "payment-request-card",
      referrerPolicy: "no-referrer",
      style: Fs(h())
    }, null, 4));
  }
}), O0 = (n) => new Error(`Network error ${n}`), B0 = (n) => new Error(`Request failed with status code ${n}`);
class A0 {
  /**
   * Initializes a new connection to the provided endpoint.
   *
   * @param endpoint - The URL of the endpoint to connect to.
   * @param fetch - Optional fetch function. Defaults to {} fetch.
   */
  constructor(e, t = globalThis.fetch) {
    this.endpoint = e, this.fetch = (...r) => t.apply(globalThis, r);
  }
  getDecoder(e) {
    return (t) => e.O.fromBinary(t);
  }
  getEncoder(e) {
    return (t) => t.toBinary();
  }
  getSender(e) {
    const t = `${this.endpoint}/api/`;
    return (r) => new Promise(async (s, o) => {
      try {
        const u = await fetch(t, {
          method: "POST",
          headers: {
            "Content-Type": "application/octet-stream"
          },
          body: r
        });
        if (u.ok) {
          const c = await u.arrayBuffer(), f = wn.fromBinary(new Uint8Array(c));
          s(f);
        } else
          o(B0(u.status));
      } catch (u) {
        o(O0(u));
      }
    });
  }
  useService(e) {
    const t = this.getDecoder(e), r = this.getEncoder(e), s = this.getSender(e);
    return {
      decode: t,
      encode: r,
      send: s
    };
  }
  getServiceName(e) {
    return e.typeName.split(".").pop();
  }
  async send(e, t, r) {
    const s = this.getServiceName(e), { encode: o, decode: u, send: c } = this.useService(e.methods[t]), f = o(r), h = new yn({
      service: s,
      method: t,
      body: f
    }), d = await c(h.toBinary());
    return u(d.body);
  }
}
const J0 = "https://cash.getcode.com/v1";
function Af(n = {}) {
  const e = n.endpoint ?? J0;
  return new A0(e, n.fetch);
}
async function R0(n, e) {
  const t = await n.getSendMessageRequestProto();
  return (await e.send(Py, "sendMessage", t)).result, ho.OK, {
    clientSecret: n.getClientSecret(),
    id: n.getIntentId()
  };
}
var Lu;
(function(n) {
  n.Pending = "pending", n.Confirmed = "confirmed";
})(Lu || (Lu = {}));
class x0 {
  constructor(e) {
    this.intentId = e.intent, this.validate();
  }
  validate() {
    if (!this.intentId)
      throw new Error("Intent ID is required");
  }
  toProto() {
    const e = gt.fromBase58(this.intentId);
    return new Yt({
      intentId: {
        value: e.toBuffer()
      }
    });
  }
  sign() {
  }
  async send(e) {
    const t = await e.send(rd, "getStatus", this.toProto());
    let r = Lu.Pending;
    t.intentSubmitted && (r = Lu.Confirmed);
    const { exists: s, codeScanned: o, intentSubmitted: u } = t;
    return {
      status: r,
      exists: s,
      codeScanned: o,
      intentSubmitted: u
    };
  }
}
class P0 {
  constructor(e) {
    this.intentId = e.intent, this.url = e.url, this.validate();
  }
  validate() {
    if (!this.intentId)
      throw new Error("Intent ID is required");
    if (!this.url)
      throw new Error("URL is required");
  }
  toProto() {
    const e = gt.fromBase58(this.intentId);
    return new Qt({
      intentId: {
        value: e.toBuffer()
      },
      url: this.url
    });
  }
  sign() {
  }
  async send(e) {
    const t = await e.send(rd, "registerWebhook", this.toProto()), r = L0(t.result);
    return t.result === Et.OK ? {
      success: !0,
      message: r
    } : {
      success: !1,
      message: r
    };
  }
}
function L0(n) {
  switch (n) {
    case Et.OK:
      return "ok";
    case Et.ALREADY_REGISTERED:
      return "already_registered";
    case Et.REQUEST_NOT_FOUND:
      return "request_not_found";
    case Et.INVALID_URL:
      return "invalid_url";
    case Et.INTENT_EXISTS:
      return "intent_exists";
    default:
      return "unknown";
  }
}
const C0 = {
  /**
   * Creates a new payment intent.
   *
   * @param opt - The options for creating a payment intent.
   * @returns An object containing the client secret and intent ID.
   * @throws Will throw an error if unable to create the intent.
   */
  create: async (n) => {
    const e = Af(n);
    let t;
    n.login ? t = new T0(n) : t = new yl(n);
    const r = await R0(t, e);
    if (n.webhook) {
      const s = await new P0({
        intent: r.id,
        url: n.webhook.url
      }).send(e);
      if (!s.success)
        throw new Error(`Unable to register webhook: ${s.message}`);
    }
    return r;
  },
  /**
   * Retrieves the status of a specified payment intent.
   *
   * @param opt - The options containing the intent ID to check status for.
   * @returns An object representing the intent's status.
   * @throws Will throw an error if unable to retrieve the intent's status.
   */
  getStatus: async (n) => {
    const e = Af(n);
    return await new x0(n).send(e);
  }
}, U0 = /* @__PURE__ */ go({
  __name: "PreloadIntentRequestModalDesktop",
  setup(n) {
    const e = Za(), t = Bt("options"), r = (t == null ? void 0 : t.mode) ?? "payment", s = `${e.codeSdk()}/${r}-request-modal-desktop/#/preload/p=${Qa(t)}`, o = It(null);
    function u() {
      const c = (f) => f + " !important";
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
    return (c, f) => (nt(), Ps("iframe", {
      ref_key: "el",
      ref: o,
      src: s,
      frameborder: "0",
      allowTransparency: "true",
      scrolling: "no",
      name: "preload-payment-request-card",
      referrerpolicy: "no-referrer",
      style: Fs(u())
    }, null, 4));
  }
}), q0 = /* @__PURE__ */ go({
  __name: "PreloadIntentRequestModalMobile",
  setup(n) {
    const e = Za(), t = Bt("options"), r = (t == null ? void 0 : t.mode) ?? "payment", s = `${e.codeSdk()}/${r}-request-modal-mobile/#/preload/p=${Qa(t)}`, o = It(null);
    function u() {
      const c = (f) => f + " !important";
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
    return (c, f) => (nt(), Ps("iframe", {
      ref_key: "el",
      ref: o,
      src: s,
      frameborder: "0",
      allowTransparency: "true",
      scrolling: "no",
      name: "preload-payment-request-card",
      referrerpolicy: "no-referrer",
      style: Fs(u())
    }, null, 4));
  }
});
function D0() {
  return navigator.userAgent.includes("DebugMobile");
}
function F0() {
  return [
    "iPhone Simulator",
    "iPhone"
  ].includes(navigator.platform);
}
function _0() {
  return /Android/i.test(navigator.userAgent);
}
function K0() {
  return F0() || _0() || D0();
}
function mc(n) {
  try {
    return new URL(n), !0;
  } catch {
    return !1;
  }
}
function M0(n, e) {
  try {
    return new URL(n, e).toString();
  } catch {
    return "";
  }
}
function $0(n, e) {
  let t = decodeURIComponent(n);
  for (const [r, s] of Object.entries(e))
    t = t.replace(`{{${r}}}`, s);
  return encodeURI(t);
}
function Jf(n, e, t) {
  let r = (n == null ? void 0 : n.url) ?? e;
  if (r && (!mc(r) && e && mc(e) && (r = M0(r, new URL(e).origin)), mc(r)))
    return t && (r = $0(r, t)), { url: r };
}
const V0 = { key: 0 }, G0 = { key: 1 }, Rf = 500, j0 = /* @__PURE__ */ go({
  __name: "ButtonFlow",
  setup(n) {
    var e, t, r, s;
    const o = (G) => new Promise((F) => setTimeout(F, G)), u = Bt("options"), c = Bt("emit", async () => !1), f = It(null), h = It(null), d = It(!1), p = K0(), T = ((t = (e = u == null ? void 0 : u.confirmParams) == null ? void 0 : e.success) == null ? void 0 : t.url) !== void 0, N = ((s = (r = u == null ? void 0 : u.confirmParams) == null ? void 0 : r.cancel) == null ? void 0 : s.url) !== void 0;
    function k() {
      if (u) {
        if (u.mode === "payment")
          return u.amount && u.currency && u.destination;
        if (u.mode === "login")
          return u.login && u.login.domain;
      }
      return !1;
    }
    function K(G) {
      f.value = G;
    }
    async function j() {
      var G, F;
      if (d.value = !0, await Tc(), !u)
        throw new Error("Missing options");
      if (!f.value)
        throw new Error("Missing channel");
      if (f.value.emit("beforeInvoke"), await c("invoke")) {
        d.value = !1;
        return;
      }
      u.mode === "payment" ? h.value = new yl(u).getIntentId() : h.value = new v0(u).getIntentId();
      const Q = {
        INTENT_ID: h.value
        // ...
      }, le = window.location.href;
      if (u.confirmParams = {
        success: Jf((G = u.confirmParams) == null ? void 0 : G.success, le, Q),
        cancel: Jf((F = u.confirmParams) == null ? void 0 : F.cancel, le, Q)
      }, await Tc(), !f.value)
        throw new Error("Missing channel");
      f.value.emit("afterInvoke");
    }
    async function X() {
      var G, F;
      d.value = !1, await o(Rf);
      const Q = (F = (G = u == null ? void 0 : u.confirmParams) == null ? void 0 : G.success) == null ? void 0 : F.url;
      await c("success", { url: Q, options: u, intent: h.value }) || T && (window.location.href = Q);
    }
    async function se() {
      var G, F;
      d.value = !1, await o(Rf);
      const Q = (F = (G = u == null ? void 0 : u.confirmParams) == null ? void 0 : G.cancel) == null ? void 0 : F.url;
      await c("cancel", { url: Q, options: u, intent: h.value }) || N && (window.location.href = Q);
    }
    async function M(G) {
      await c("error", { message: `${G}` });
    }
    async function z() {
      d.value = !1, await M("stream_timed_out");
    }
    async function _() {
      d.value = !1, await M("stream_closed");
    }
    return document.addEventListener("visibilitychange", async () => {
      if (document.visibilityState === "visible") {
        if (!h.value)
          return;
        const { status: G } = await C0.getStatus({ intent: h.value });
        G === "confirmed" && X();
      }
    }), (G, F) => k() ? (nt(), Ps(Tt, { key: 0 }, [
      sn(ni(k0), { onInvoke: j }),
      (nt(), so(Lp, { to: "body" }, [
        d.value ? (nt(), Ps("div", V0, [
          ni(p) ? (nt(), so(ni(I0), {
            key: 0,
            onChannelCreated: K,
            onIntentSubmitted: X,
            onClientRejectedPayment: se,
            onClientRejectedLogin: se,
            onError: M,
            onStreamTimeout: z,
            onStreamClosed: _
          })) : (nt(), so(ni(gd), {
            key: 1,
            onChannelCreated: K,
            onIntentSubmitted: X,
            onClientRejectedPayment: se,
            onClientRejectedLogin: se,
            onError: M,
            onStreamTimeout: z,
            onStreamClosed: _
          }))
        ])) : (nt(), Ps("div", G0, [
          ni(p) ? (nt(), so(ni(q0), { key: 0 })) : (nt(), so(ni(U0), { key: 1 }))
        ]))
      ]))
    ], 64)) : _p("", !0);
  }
}), xf = "payment", H0 = "en";
class yd {
  /**
   * Constructor initializes the element with given parameters and Vue application.
   * @param params - Partial element options.
   * @param app - Vue application instance.
   */
  constructor(e, t) {
    const r = { ...e };
    r.mode = r.mode ?? xf, r.locale = r.locale ?? H0, this.intent = Ku(r), this.listeners = [], this.app = t, this.validate();
  }
  /**
   * Validates the current element options.
   * @returns True if the options are valid.
   */
  validate() {
    return gl(this.intent);
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
    return this.intent.mode ?? xf;
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
  on(e, t) {
    this.listeners.push({ event: e, callback: t });
  }
  /**
   * Mounts the Vue component onto an HTML element.
   * @param el - The element or a selector string for mounting.
   * @returns The mounted element.
   */
  mount(e) {
    const t = typeof e == "string" ? document.querySelector(e) : e;
    if (t && t.hasAttribute("data-v-app"))
      return console.warn("A component is already mounted on this element: " + e), null;
    const r = async (s, o) => {
      const u = W0(o), c = this.listeners.filter((f) => f.event === s);
      return (await Promise.all(c.map((f) => f.callback(u)))).some((f) => f === !0);
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
function W0(n) {
  return typeof n != "object" ? n : JSON.parse(JSON.stringify(n));
}
class z0 extends yd {
  /**
   * Constructs a new CodeButton with specific options.
   * @param options - Partial element options.
   */
  constructor(e) {
    super(e, Um(j0));
  }
}
class X0 extends yd {
  /**
   * Constructs a new CodeCard with specific options.
   * @param options - Partial element options.
   */
  constructor(e) {
    super(e, Um(gd));
  }
}
const Y0 = {
  /**
   * Creates a new element based on the specified type.
   * @param type - The type of the element to create.
   * @param options - The options for the element.
   * @returns An object containing the newly created element.
   */
  create: (n, e) => {
    switch (n) {
      case "button":
        return { button: new z0(e) };
      case "card":
        return { card: new X0(e) };
      default:
        throw Pg(n);
    }
  }
}, Q0 = {
  codeSdk: "https://sdk.getcode.com/v1/elements"
};
b0(Q0);
const Z0 = { elements: Y0 };
export {
  Z0 as default
};
