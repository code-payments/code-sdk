/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Yr(n, e) {
  const t = new Set(n.split(","));
  return e ? (r) => t.has(r.toLowerCase()) : (r) => t.has(r);
}
const ve = Object.freeze({}), go = Object.freeze([]), ze = () => {
}, Fd = () => !1, Qa = (n) => n.charCodeAt(0) === 111 && n.charCodeAt(1) === 110 && // uppercase letter
(n.charCodeAt(2) > 122 || n.charCodeAt(2) < 97), xu = (n) => n.startsWith("onUpdate:"), Ae = Object.assign, zc = (n, e) => {
  const t = n.indexOf(e);
  t > -1 && n.splice(t, 1);
}, _d = Object.prototype.hasOwnProperty, fe = (n, e) => _d.call(n, e), ne = Array.isArray, yo = (n) => zu(n) === "[object Map]", Kd = (n) => zu(n) === "[object Set]", ie = (n) => typeof n == "function", xe = (n) => typeof n == "string", Hu = (n) => typeof n == "symbol", Se = (n) => n !== null && typeof n == "object", Xc = (n) => (Se(n) || ie(n)) && ie(n.then) && ie(n.catch), Md = Object.prototype.toString, zu = (n) => Md.call(n), Yc = (n) => zu(n).slice(8, -1), $d = (n) => zu(n) === "[object Object]", Zc = (n) => xe(n) && n !== "NaN" && n[0] !== "-" && "" + parseInt(n, 10) === n, Lo = /* @__PURE__ */ Yr(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Vd = /* @__PURE__ */ Yr(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Xu = (n) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (t) => e[t] || (e[t] = n(t));
}, Gd = /-(\w)/g, Eo = Xu((n) => n.replace(Gd, (e, t) => t ? t.toUpperCase() : "")), jd = /\B([A-Z])/g, Ks = Xu(
  (n) => n.replace(jd, "-$1").toLowerCase()
), Yu = Xu((n) => n.charAt(0).toUpperCase() + n.slice(1)), Ys = Xu((n) => n ? `on${Yu(n)}` : ""), Ms = (n, e) => !Object.is(n, e), So = (n, e) => {
  for (let t = 0; t < n.length; t++)
    n[t](e);
}, Pu = (n, e, t) => {
  Object.defineProperty(n, e, {
    configurable: !0,
    enumerable: !1,
    value: t
  });
}, Wd = (n) => {
  const e = parseFloat(n);
  return isNaN(e) ? n : e;
};
let Rl;
const Qc = () => Rl || (Rl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof {} < "u" ? {} : {});
function js(n) {
  if (ne(n)) {
    const e = {};
    for (let t = 0; t < n.length; t++) {
      const r = n[t], s = xe(r) ? Yd(r) : js(r);
      if (s)
        for (const o in s)
          e[o] = s[o];
    }
    return e;
  } else if (xe(n) || Se(n))
    return n;
}
const Hd = /;(?![^(]*\))/g, zd = /:([^]+)/, Xd = /\/\*[^]*?\*\//g;
function Yd(n) {
  const e = {};
  return n.replace(Xd, "").split(Hd).forEach((t) => {
    if (t) {
      const r = t.split(zd);
      r.length > 1 && (e[r[0].trim()] = r[1].trim());
    }
  }), e;
}
function el(n) {
  let e = "";
  if (xe(n))
    e = n;
  else if (ne(n))
    for (let t = 0; t < n.length; t++) {
      const r = el(n[t]);
      r && (e += r + " ");
    }
  else if (Se(n))
    for (const t in n)
      n[t] && (e += t + " ");
  return e.trim();
}
const Zd = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Qd = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", eh = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", th = /* @__PURE__ */ Yr(Zd), nh = /* @__PURE__ */ Yr(Qd), rh = /* @__PURE__ */ Yr(eh), ih = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", sh = /* @__PURE__ */ Yr(ih);
function Gf(n) {
  return !!n || n === "";
}
/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function $s(n, ...e) {
  console.warn(`[Vue warn] ${n}`, ...e);
}
let Tt;
class oh {
  constructor(e = !1) {
    this.detached = e, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Tt, !e && Tt && (this.index = (Tt.scopes || (Tt.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(e) {
    if (this._active) {
      const t = Tt;
      try {
        return Tt = this, e();
      } finally {
        Tt = t;
      }
    } else
      $s("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Tt = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Tt = this.parent;
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
function ah(n, e = Tt) {
  e && e.active && e.effects.push(n);
}
function uh() {
  return Tt;
}
let eo;
class tl {
  constructor(e, t, r, s) {
    this.fn = e, this.trigger = t, this.scheduler = r, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, ah(this, s);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, Ws();
      for (let e = 0; e < this._depsLength; e++) {
        const t = this.deps[e];
        if (t.computed && (ch(t.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), Hs();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(e) {
    this._dirtyLevel = e ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let e = qs, t = eo;
    try {
      return qs = !0, eo = this, this._runnings++, xl(this), this.fn();
    } finally {
      Pl(this), this._runnings--, eo = t, qs = e;
    }
  }
  stop() {
    var e;
    this.active && (xl(this), Pl(this), (e = this.onStop) == null || e.call(this), this.active = !1);
  }
}
function ch(n) {
  return n.value;
}
function xl(n) {
  n._trackId++, n._depsLength = 0;
}
function Pl(n) {
  if (n.deps.length > n._depsLength) {
    for (let e = n._depsLength; e < n.deps.length; e++)
      jf(n.deps[e], n);
    n.deps.length = n._depsLength;
  }
}
function jf(n, e) {
  const t = n.get(e);
  t !== void 0 && e._trackId !== t && (n.delete(e), n.size === 0 && n.cleanup());
}
let qs = !0, kc = 0;
const Wf = [];
function Ws() {
  Wf.push(qs), qs = !1;
}
function Hs() {
  const n = Wf.pop();
  qs = n === void 0 ? !0 : n;
}
function nl() {
  kc++;
}
function rl() {
  for (kc--; !kc && Oc.length; )
    Oc.shift()();
}
function Hf(n, e, t) {
  var r;
  if (e.get(n) !== n._trackId) {
    e.set(n, n._trackId);
    const s = n.deps[n._depsLength];
    s !== e ? (s && jf(s, n), n.deps[n._depsLength++] = e) : n._depsLength++, (r = n.onTrack) == null || r.call(n, Ae({ effect: n }, t));
  }
}
const Oc = [];
function zf(n, e, t) {
  var r;
  nl();
  for (const s of n.keys()) {
    let o;
    s._dirtyLevel < e && (o ?? (o = n.get(s) === s._trackId)) && (s._shouldSchedule || (s._shouldSchedule = s._dirtyLevel === 0), s._dirtyLevel = e), s._shouldSchedule && (o ?? (o = n.get(s) === s._trackId)) && ((r = s.onTrigger) == null || r.call(s, Ae({ effect: s }, t)), s.trigger(), (!s._runnings || s.allowRecurse) && s._dirtyLevel !== 2 && (s._shouldSchedule = !1, s.scheduler && Oc.push(s.scheduler)));
  }
  rl();
}
const Xf = (n, e) => {
  const t = /* @__PURE__ */ new Map();
  return t.cleanup = n, t.computed = e, t;
}, Bc = /* @__PURE__ */ new WeakMap(), to = Symbol("iterate"), Ac = Symbol("Map key iterate");
function Xe(n, e, t) {
  if (qs && eo) {
    let r = Bc.get(n);
    r || Bc.set(n, r = /* @__PURE__ */ new Map());
    let s = r.get(t);
    s || r.set(t, s = Xf(() => r.delete(t))), Hf(
      eo,
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
  const u = Bc.get(n);
  if (!u)
    return;
  let c = [];
  if (e === "clear")
    c = [...u.values()];
  else if (t === "length" && ne(n)) {
    const f = Number(r);
    u.forEach((d, h) => {
      (h === "length" || !Hu(h) && h >= f) && c.push(d);
    });
  } else
    switch (t !== void 0 && c.push(u.get(t)), e) {
      case "add":
        ne(n) ? Zc(t) && c.push(u.get("length")) : (c.push(u.get(to)), yo(n) && c.push(u.get(Ac)));
        break;
      case "delete":
        ne(n) || (c.push(u.get(to)), yo(n) && c.push(u.get(Ac)));
        break;
      case "set":
        yo(n) && c.push(u.get(to));
        break;
    }
  nl();
  for (const f of c)
    f && zf(
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
  rl();
}
const lh = /* @__PURE__ */ Yr("__proto__,__v_isRef,__isVue"), Yf = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((n) => n !== "arguments" && n !== "caller").map((n) => Symbol[n]).filter(Hu)
), Ll = /* @__PURE__ */ fh();
function fh() {
  const n = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
    n[e] = function(...t) {
      const r = ae(this);
      for (let o = 0, u = this.length; o < u; o++)
        Xe(r, "get", o + "");
      const s = r[e](...t);
      return s === -1 || s === !1 ? r[e](...t.map(ae)) : s;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
    n[e] = function(...t) {
      Ws(), nl();
      const r = ae(this)[e].apply(this, t);
      return rl(), Hs(), r;
    };
  }), n;
}
function mh(n) {
  const e = ae(this);
  return Xe(e, "has", n), e.hasOwnProperty(n);
}
class Zf {
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
      return r === (s ? o ? sm : im : o ? rm : nm).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(r) ? e : void 0;
    const u = ne(e);
    if (!s) {
      if (u && fe(Ll, t))
        return Reflect.get(Ll, t, r);
      if (t === "hasOwnProperty")
        return mh;
    }
    const c = Reflect.get(e, t, r);
    return (Hu(t) ? Yf.has(t) : lh(t)) || (s || Xe(e, "get", t), o) ? c : Ge(c) ? u && Zc(t) ? c : c.value : Se(c) ? s ? om(c) : No(c) : c;
  }
}
class Qf extends Zf {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, t, r, s) {
    let o = e[t];
    if (!this._isShallow) {
      const f = Vs(o);
      if (!ro(r) && !Vs(r) && (o = ae(o), r = ae(r)), !ne(e) && Ge(o) && !Ge(r))
        return f ? !1 : (o.value = r, !0);
    }
    const u = ne(e) && Zc(t) ? Number(t) < e.length : fe(e, t), c = Reflect.set(e, t, r, s);
    return e === ae(s) && (u ? Ms(r, o) && rn(e, "set", t, r, o) : rn(e, "add", t, r)), c;
  }
  deleteProperty(e, t) {
    const r = fe(e, t), s = e[t], o = Reflect.deleteProperty(e, t);
    return o && r && rn(e, "delete", t, void 0, s), o;
  }
  has(e, t) {
    const r = Reflect.has(e, t);
    return (!Hu(t) || !Yf.has(t)) && Xe(e, "has", t), r;
  }
  ownKeys(e) {
    return Xe(
      e,
      "iterate",
      ne(e) ? "length" : to
    ), Reflect.ownKeys(e);
  }
}
class em extends Zf {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, t) {
    return $s(
      `Set operation on key "${String(t)}" failed: target is readonly.`,
      e
    ), !0;
  }
  deleteProperty(e, t) {
    return $s(
      `Delete operation on key "${String(t)}" failed: target is readonly.`,
      e
    ), !0;
  }
}
const dh = /* @__PURE__ */ new Qf(), hh = /* @__PURE__ */ new em(), ph = /* @__PURE__ */ new Qf(
  !0
), gh = /* @__PURE__ */ new em(!0), il = (n) => n, Zu = (n) => Reflect.getPrototypeOf(n);
function lu(n, e, t = !1, r = !1) {
  n = n.__v_raw;
  const s = ae(n), o = ae(e);
  t || (Ms(e, o) && Xe(s, "get", e), Xe(s, "get", o));
  const { has: u } = Zu(s), c = r ? il : t ? sl : _o;
  if (u.call(s, e))
    return c(n.get(e));
  if (u.call(s, o))
    return c(n.get(o));
  n !== s && n.get(e);
}
function fu(n, e = !1) {
  const t = this.__v_raw, r = ae(t), s = ae(n);
  return e || (Ms(n, s) && Xe(r, "has", n), Xe(r, "has", s)), n === s ? t.has(n) : t.has(n) || t.has(s);
}
function mu(n, e = !1) {
  return n = n.__v_raw, !e && Xe(ae(n), "iterate", to), Reflect.get(n, "size", n);
}
function Cl(n) {
  n = ae(n);
  const e = ae(this);
  return Zu(e).has.call(e, n) || (e.add(n), rn(e, "add", n, n)), this;
}
function Ul(n, e) {
  e = ae(e);
  const t = ae(this), { has: r, get: s } = Zu(t);
  let o = r.call(t, n);
  o ? tm(t, r, n) : (n = ae(n), o = r.call(t, n));
  const u = s.call(t, n);
  return t.set(n, e), o ? Ms(e, u) && rn(t, "set", n, e, u) : rn(t, "add", n, e), this;
}
function ql(n) {
  const e = ae(this), { has: t, get: r } = Zu(e);
  let s = t.call(e, n);
  s ? tm(e, t, n) : (n = ae(n), s = t.call(e, n));
  const o = r ? r.call(e, n) : void 0, u = e.delete(n);
  return s && rn(e, "delete", n, void 0, o), u;
}
function Dl() {
  const n = ae(this), e = n.size !== 0, t = yo(n) ? new Map(n) : new Set(n), r = n.clear();
  return e && rn(n, "clear", void 0, void 0, t), r;
}
function du(n, e) {
  return function(r, s) {
    const o = this, u = o.__v_raw, c = ae(u), f = e ? il : n ? sl : _o;
    return !n && Xe(c, "iterate", to), u.forEach((d, h) => r.call(s, f(d), f(h), o));
  };
}
function hu(n, e, t) {
  return function(...r) {
    const s = this.__v_raw, o = ae(s), u = yo(o), c = n === "entries" || n === Symbol.iterator && u, f = n === "keys" && u, d = s[n](...r), h = t ? il : e ? sl : _o;
    return !e && Xe(
      o,
      "iterate",
      f ? Ac : to
    ), {
      // iterator protocol
      next() {
        const { value: p, done: y } = d.next();
        return y ? { value: p, done: y } : {
          value: c ? [h(p[0]), h(p[1])] : h(p),
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
function Qr(n) {
  return function(...e) {
    {
      const t = e[0] ? `on key "${e[0]}" ` : "";
      $s(
        `${Yu(n)} operation ${t}failed: target is readonly.`,
        ae(this)
      );
    }
    return n === "delete" ? !1 : n === "clear" ? void 0 : this;
  };
}
function yh() {
  const n = {
    get(o) {
      return lu(this, o);
    },
    get size() {
      return mu(this);
    },
    has: fu,
    add: Cl,
    set: Ul,
    delete: ql,
    clear: Dl,
    forEach: du(!1, !1)
  }, e = {
    get(o) {
      return lu(this, o, !1, !0);
    },
    get size() {
      return mu(this);
    },
    has: fu,
    add: Cl,
    set: Ul,
    delete: ql,
    clear: Dl,
    forEach: du(!1, !0)
  }, t = {
    get(o) {
      return lu(this, o, !0);
    },
    get size() {
      return mu(this, !0);
    },
    has(o) {
      return fu.call(this, o, !0);
    },
    add: Qr("add"),
    set: Qr("set"),
    delete: Qr("delete"),
    clear: Qr("clear"),
    forEach: du(!0, !1)
  }, r = {
    get(o) {
      return lu(this, o, !0, !0);
    },
    get size() {
      return mu(this, !0);
    },
    has(o) {
      return fu.call(this, o, !0);
    },
    add: Qr("add"),
    set: Qr("set"),
    delete: Qr("delete"),
    clear: Qr("clear"),
    forEach: du(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
    n[o] = hu(
      o,
      !1,
      !1
    ), t[o] = hu(
      o,
      !0,
      !1
    ), e[o] = hu(
      o,
      !1,
      !0
    ), r[o] = hu(
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
  wh,
  Th,
  Eh,
  vh
] = /* @__PURE__ */ yh();
function Qu(n, e) {
  const t = e ? n ? vh : Eh : n ? Th : wh;
  return (r, s, o) => s === "__v_isReactive" ? !n : s === "__v_isReadonly" ? n : s === "__v_raw" ? r : Reflect.get(
    fe(t, s) && s in r ? t : r,
    s,
    o
  );
}
const Nh = {
  get: /* @__PURE__ */ Qu(!1, !1)
}, bh = {
  get: /* @__PURE__ */ Qu(!1, !0)
}, Sh = {
  get: /* @__PURE__ */ Qu(!0, !1)
}, Ih = {
  get: /* @__PURE__ */ Qu(!0, !0)
};
function tm(n, e, t) {
  const r = ae(t);
  if (r !== t && e.call(n, r)) {
    const s = Yc(n);
    $s(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const nm = /* @__PURE__ */ new WeakMap(), rm = /* @__PURE__ */ new WeakMap(), im = /* @__PURE__ */ new WeakMap(), sm = /* @__PURE__ */ new WeakMap();
function kh(n) {
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
function Oh(n) {
  return n.__v_skip || !Object.isExtensible(n) ? 0 : kh(Yc(n));
}
function No(n) {
  return Vs(n) ? n : ec(
    n,
    !1,
    dh,
    Nh,
    nm
  );
}
function Bh(n) {
  return ec(
    n,
    !1,
    ph,
    bh,
    rm
  );
}
function om(n) {
  return ec(
    n,
    !0,
    hh,
    Sh,
    im
  );
}
function ho(n) {
  return ec(
    n,
    !0,
    gh,
    Ih,
    sm
  );
}
function ec(n, e, t, r, s) {
  if (!Se(n))
    return $s(`value cannot be made reactive: ${String(n)}`), n;
  if (n.__v_raw && !(e && n.__v_isReactive))
    return n;
  const o = s.get(n);
  if (o)
    return o;
  const u = Oh(n);
  if (u === 0)
    return n;
  const c = new Proxy(
    n,
    u === 2 ? r : t
  );
  return s.set(n, c), c;
}
function no(n) {
  return Vs(n) ? no(n.__v_raw) : !!(n && n.__v_isReactive);
}
function Vs(n) {
  return !!(n && n.__v_isReadonly);
}
function ro(n) {
  return !!(n && n.__v_isShallow);
}
function Jc(n) {
  return no(n) || Vs(n);
}
function ae(n) {
  const e = n && n.__v_raw;
  return e ? ae(e) : n;
}
function am(n) {
  return Object.isExtensible(n) && Pu(n, "__v_skip", !0), n;
}
const _o = (n) => Se(n) ? No(n) : n, sl = (n) => Se(n) ? om(n) : n, Ah = "Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.  Check the docs for more details: https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free";
class um {
  constructor(e, t, r, s) {
    this.getter = e, this._setter = t, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new tl(
      () => e(this._value),
      () => Eu(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = r;
  }
  get value() {
    const e = ae(this);
    return (!e._cacheable || e.effect.dirty) && Ms(e._value, e._value = e.effect.run()) && Eu(e, 4), cm(e), e.effect._dirtyLevel >= 2 && (this._warnRecursive && $s(Ah, `

getter: `, this.getter), Eu(e, 2)), e._value;
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
function Jh(n, e, t = !1) {
  let r, s;
  const o = ie(n);
  o ? (r = n, s = () => {
    $s("Write operation failed: computed value is readonly");
  }) : (r = n.get, s = n.set);
  const u = new um(r, s, o || !s, t);
  return e && !t && (u.effect.onTrack = e.onTrack, u.effect.onTrigger = e.onTrigger), u;
}
function cm(n) {
  var e;
  qs && eo && (n = ae(n), Hf(
    eo,
    (e = n.dep) != null ? e : n.dep = Xf(
      () => n.dep = void 0,
      n instanceof um ? n : void 0
    ),
    {
      target: n,
      type: "get",
      key: "value"
    }
  ));
}
function Eu(n, e = 4, t) {
  n = ae(n);
  const r = n.dep;
  r && zf(
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
function Ge(n) {
  return !!(n && n.__v_isRef === !0);
}
function sn(n) {
  return Rh(n, !1);
}
function Rh(n, e) {
  return Ge(n) ? n : new xh(n, e);
}
class xh {
  constructor(e, t) {
    this.__v_isShallow = t, this.dep = void 0, this.__v_isRef = !0, this._rawValue = t ? e : ae(e), this._value = t ? e : _o(e);
  }
  get value() {
    return cm(this), this._value;
  }
  set value(e) {
    const t = this.__v_isShallow || ro(e) || Vs(e);
    e = t ? e : ae(e), Ms(e, this._rawValue) && (this._rawValue = e, this._value = t ? e : _o(e), Eu(this, 4, e));
  }
}
function ci(n) {
  return Ge(n) ? n.value : n;
}
const Ph = {
  get: (n, e, t) => ci(Reflect.get(n, e, t)),
  set: (n, e, t, r) => {
    const s = n[e];
    return Ge(s) && !Ge(t) ? (s.value = t, !0) : Reflect.set(n, e, t, r);
  }
};
function lm(n) {
  return no(n) ? n : new Proxy(n, Ph);
}
/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const io = [];
function vu(n) {
  io.push(n);
}
function Nu() {
  io.pop();
}
function _(n, ...e) {
  Ws();
  const t = io.length ? io[io.length - 1].component : null, r = t && t.appContext.config.warnHandler, s = Lh();
  if (r)
    Hr(
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
          ({ vnode: o }) => `at <${oc(t, o.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const o = [`[Vue warn]: ${n}`, ...e];
    s.length && o.push(`
`, ...Ch(s)), console.warn(...o);
  }
  Hs();
}
function Lh() {
  let n = io[io.length - 1];
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
function Ch(n) {
  const e = [];
  return n.forEach((t, r) => {
    e.push(...r === 0 ? [] : [`
`], ...Uh(t));
  }), e;
}
function Uh({ vnode: n, recurseCount: e }) {
  const t = e > 0 ? `... (${e} recursive calls)` : "", r = n.component ? n.component.parent == null : !1, s = ` at <${oc(
    n.component,
    n.type,
    r
  )}`, o = ">" + t;
  return n.props ? [s, ...qh(n.props), o] : [s + o];
}
function qh(n) {
  const e = [], t = Object.keys(n);
  return t.slice(0, 3).forEach((r) => {
    e.push(...fm(r, n[r]));
  }), t.length > 3 && e.push(" ..."), e;
}
function fm(n, e, t) {
  return xe(e) ? (e = JSON.stringify(e), t ? e : [`${n}=${e}`]) : typeof e == "number" || typeof e == "boolean" || e == null ? t ? e : [`${n}=${e}`] : Ge(e) ? (e = fm(n, ae(e.value), !0), t ? e : [`${n}=Ref<`, e, ">"]) : ie(e) ? [`${n}=fn${e.name ? `<${e.name}>` : ""}`] : (e = ae(e), t ? e : [`${n}=`, e]);
}
const ol = {
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
function Hr(n, e, t, r) {
  try {
    return r ? n(...r) : n();
  } catch (s) {
    eu(s, e, t);
  }
}
function Ot(n, e, t, r) {
  if (ie(n)) {
    const o = Hr(n, e, t, r);
    return o && Xc(o) && o.catch((u) => {
      eu(u, e, t);
    }), o;
  }
  const s = [];
  for (let o = 0; o < n.length; o++)
    s.push(Ot(n[o], e, t, r));
  return s;
}
function eu(n, e, t, r = !0) {
  const s = e ? e.vnode : null;
  if (e) {
    let o = e.parent;
    const u = e.proxy, c = ol[t];
    for (; o; ) {
      const d = o.ec;
      if (d) {
        for (let h = 0; h < d.length; h++)
          if (d[h](n, u, c) === !1)
            return;
      }
      o = o.parent;
    }
    const f = e.appContext.config.errorHandler;
    if (f) {
      Hr(
        f,
        null,
        10,
        [n, u, c]
      );
      return;
    }
  }
  Dh(n, t, s, r);
}
function Dh(n, e, t, r = !0) {
  {
    const s = ol[e];
    if (t && vu(t), _(`Unhandled error${s ? ` during execution of ${s}` : ""}`), t && Nu(), r)
      throw n;
    console.error(n);
  }
}
let Ko = !1, Rc = !1;
const He = [];
let Pt = 0;
const wo = [];
let mn = null, oi = 0;
const mm = /* @__PURE__ */ Promise.resolve();
let al = null;
const Fh = 100;
function Lu(n) {
  const e = al || mm;
  return n ? e.then(this ? n.bind(this) : n) : e;
}
function _h(n) {
  let e = Pt + 1, t = He.length;
  for (; e < t; ) {
    const r = e + t >>> 1, s = He[r], o = Mo(s);
    o < n || o === n && s.pre ? e = r + 1 : t = r;
  }
  return e;
}
function tc(n) {
  (!He.length || !He.includes(
    n,
    Ko && n.allowRecurse ? Pt + 1 : Pt
  )) && (n.id == null ? He.push(n) : He.splice(_h(n.id), 0, n), dm());
}
function dm() {
  !Ko && !Rc && (Rc = !0, al = mm.then(gm));
}
function Kh(n) {
  const e = He.indexOf(n);
  e > Pt && He.splice(e, 1);
}
function hm(n) {
  ne(n) ? wo.push(...n) : (!mn || !mn.includes(
    n,
    n.allowRecurse ? oi + 1 : oi
  )) && wo.push(n), dm();
}
function Fl(n, e, t = Ko ? Pt + 1 : 0) {
  for (e = e || /* @__PURE__ */ new Map(); t < He.length; t++) {
    const r = He[t];
    if (r && r.pre) {
      if (n && r.id !== n.uid || ul(e, r))
        continue;
      He.splice(t, 1), t--, r();
    }
  }
}
function pm(n) {
  if (wo.length) {
    const e = [...new Set(wo)].sort(
      (t, r) => Mo(t) - Mo(r)
    );
    if (wo.length = 0, mn) {
      mn.push(...e);
      return;
    }
    for (mn = e, n = n || /* @__PURE__ */ new Map(), oi = 0; oi < mn.length; oi++)
      ul(n, mn[oi]) || mn[oi]();
    mn = null, oi = 0;
  }
}
const Mo = (n) => n.id == null ? 1 / 0 : n.id, Mh = (n, e) => {
  const t = Mo(n) - Mo(e);
  if (t === 0) {
    if (n.pre && !e.pre)
      return -1;
    if (e.pre && !n.pre)
      return 1;
  }
  return t;
};
function gm(n) {
  Rc = !1, Ko = !0, n = n || /* @__PURE__ */ new Map(), He.sort(Mh);
  const e = (t) => ul(n, t);
  try {
    for (Pt = 0; Pt < He.length; Pt++) {
      const t = He[Pt];
      if (t && t.active !== !1) {
        if (e(t))
          continue;
        Hr(t, null, 14);
      }
    }
  } finally {
    Pt = 0, He.length = 0, pm(n), Ko = !1, al = null, (He.length || wo.length) && gm(n);
  }
}
function ul(n, e) {
  if (!n.has(e))
    n.set(e, 1);
  else {
    const t = n.get(e);
    if (t > Fh) {
      const r = e.ownerInstance, s = r && Hm(r.type);
      return eu(
        `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      n.set(e, t + 1);
  }
}
let Ds = !1;
const mo = /* @__PURE__ */ new Set();
Qc().__VUE_HMR_RUNTIME__ = {
  createRecord: fc(ym),
  rerender: fc(Gh),
  reload: fc(jh)
};
const ao = /* @__PURE__ */ new Map();
function $h(n) {
  const e = n.type.__hmrId;
  let t = ao.get(e);
  t || (ym(e, n.type), t = ao.get(e)), t.instances.add(n);
}
function Vh(n) {
  ao.get(n.type.__hmrId).instances.delete(n);
}
function ym(n, e) {
  return ao.has(n) ? !1 : (ao.set(n, {
    initialDef: Co(e),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Co(n) {
  return zm(n) ? n.__vccOpts : n;
}
function Gh(n, e) {
  const t = ao.get(n);
  t && (t.initialDef.render = e, [...t.instances].forEach((r) => {
    e && (r.render = e, Co(r.type).render = e), r.renderCache = [], Ds = !0, r.effect.dirty = !0, r.update(), Ds = !1;
  }));
}
function jh(n, e) {
  const t = ao.get(n);
  if (!t)
    return;
  e = Co(e), _l(t.initialDef, e);
  const r = [...t.instances];
  for (const s of r) {
    const o = Co(s.type);
    mo.has(o) || (o !== t.initialDef && _l(o, e), mo.add(o)), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (mo.add(o), s.ceReload(e.styles), mo.delete(o)) : s.parent ? (s.parent.effect.dirty = !0, tc(s.parent.update)) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  hm(() => {
    for (const s of r)
      mo.delete(
        Co(s.type)
      );
  });
}
function _l(n, e) {
  Ae(n, e);
  for (const t in n)
    t !== "__file" && !(t in e) && delete n[t];
}
function fc(n) {
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
let Lt, Bo = [], xc = !1;
function tu(n, ...e) {
  Lt ? Lt.emit(n, ...e) : xc || Bo.push({ event: n, args: e });
}
function wm(n, e) {
  var t, r;
  Lt = n, Lt ? (Lt.enabled = !0, Bo.forEach(({ event: s, args: o }) => Lt.emit(s, ...o)), Bo = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((r = (t = window.navigator) == null ? void 0 : t.userAgent) != null && r.includes("jsdom")) ? ((e.__VUE_DEVTOOLS_HOOK_REPLAY__ = e.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((o) => {
    wm(o, e);
  }), setTimeout(() => {
    Lt || (e.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, xc = !0, Bo = []);
  }, 3e3)) : (xc = !0, Bo = []);
}
function Wh(n, e) {
  tu("app:init", n, e, {
    Fragment: Et,
    Text: ru,
    Comment: lt,
    Static: Su
  });
}
function Hh(n) {
  tu("app:unmount", n);
}
const zh = /* @__PURE__ */ cl(
  "component:added"
  /* COMPONENT_ADDED */
), Tm = /* @__PURE__ */ cl(
  "component:updated"
  /* COMPONENT_UPDATED */
), Xh = /* @__PURE__ */ cl(
  "component:removed"
  /* COMPONENT_REMOVED */
), Yh = (n) => {
  Lt && typeof Lt.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Lt.cleanupBuffer(n) && Xh(n);
};
function cl(n) {
  return (e) => {
    tu(
      n,
      e.appContext.app,
      e.uid,
      e.parent ? e.parent.uid : void 0,
      e
    );
  };
}
const Zh = /* @__PURE__ */ Em(
  "perf:start"
  /* PERFORMANCE_START */
), Qh = /* @__PURE__ */ Em(
  "perf:end"
  /* PERFORMANCE_END */
);
function Em(n) {
  return (e, t, r) => {
    tu(n, e.appContext.app, e.uid, e, t, r);
  };
}
function ep(n, e, t) {
  tu(
    "component:emit",
    n.appContext.app,
    n,
    e,
    t
  );
}
function tp(n, e, ...t) {
  if (n.isUnmounted)
    return;
  const r = n.vnode.props || ve;
  {
    const {
      emitsOptions: h,
      propsOptions: [p]
    } = n;
    if (h)
      if (!(e in h))
        (!p || !(Ys(e) in p)) && _(
          `Component emitted event "${e}" but it is neither declared in the emits option nor as an "${Ys(e)}" prop.`
        );
      else {
        const y = h[e];
        ie(y) && (y(...t) || _(
          `Invalid event arguments: event validation failed for event "${e}".`
        ));
      }
  }
  let s = t;
  const o = e.startsWith("update:"), u = o && e.slice(7);
  if (u && u in r) {
    const h = `${u === "modelValue" ? "model" : u}Modifiers`, { number: p, trim: y } = r[h] || ve;
    y && (s = t.map((N) => xe(N) ? N.trim() : N)), p && (s = t.map(Wd));
  }
  ep(n, e, s);
  {
    const h = e.toLowerCase();
    h !== e && r[Ys(h)] && _(
      `Event "${h}" is emitted in component ${oc(
        n,
        n.type
      )} but the handler is registered for "${e}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Ks(
        e
      )}" instead of "${e}".`
    );
  }
  let c, f = r[c = Ys(e)] || // also try camelCase event handler (#2249)
  r[c = Ys(Eo(e))];
  !f && o && (f = r[c = Ys(Ks(e))]), f && Ot(
    f,
    n,
    6,
    s
  );
  const d = r[c + "Once"];
  if (d) {
    if (!n.emitted)
      n.emitted = {};
    else if (n.emitted[c])
      return;
    n.emitted[c] = !0, Ot(
      d,
      n,
      6,
      s
    );
  }
}
function vm(n, e, t = !1) {
  const r = e.emitsCache, s = r.get(n);
  if (s !== void 0)
    return s;
  const o = n.emits;
  let u = {}, c = !1;
  if (!ie(n)) {
    const f = (d) => {
      const h = vm(d, e, !0);
      h && (c = !0, Ae(u, h));
    };
    !t && e.mixins.length && e.mixins.forEach(f), n.extends && f(n.extends), n.mixins && n.mixins.forEach(f);
  }
  return !o && !c ? (Se(n) && r.set(n, null), null) : (ne(o) ? o.forEach((f) => u[f] = null) : Ae(u, o), Se(n) && r.set(n, u), u);
}
function nc(n, e) {
  return !n || !Qa(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), fe(n, e[0].toLowerCase() + e.slice(1)) || fe(n, Ks(e)) || fe(n, e));
}
let ot = null, Nm = null;
function Cu(n) {
  const e = ot;
  return ot = n, Nm = n && n.type.__scopeId || null, e;
}
function np(n, e = ot, t) {
  if (!e || n._n)
    return n;
  const r = (...s) => {
    r._d && ef(-1);
    const o = Cu(e);
    let u;
    try {
      u = n(...s);
    } finally {
      Cu(o), r._d && ef(1);
    }
    return Tm(e), u;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
let Pc = !1;
function Uu() {
  Pc = !0;
}
function mc(n) {
  const {
    type: e,
    vnode: t,
    proxy: r,
    withProxy: s,
    props: o,
    propsOptions: [u],
    slots: c,
    attrs: f,
    emit: d,
    render: h,
    renderCache: p,
    data: y,
    setupState: N,
    ctx: I,
    inheritAttrs: q
  } = n;
  let M, X;
  const H = Cu(n);
  Pc = !1;
  try {
    if (t.shapeFlag & 4) {
      const D = s || r, te = N.__isScriptSetup ? new Proxy(D, {
        get(G, se, me) {
          return _(
            `Property '${String(
              se
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(G, se, me);
        }
      }) : D;
      M = vt(
        h.call(
          te,
          D,
          p,
          o,
          N,
          y,
          I
        )
      ), X = f;
    } else {
      const D = e;
      f === o && Uu(), M = vt(
        D.length > 1 ? D(
          o,
          {
            get attrs() {
              return Uu(), f;
            },
            slots: c,
            emit: d
          }
        ) : D(
          o,
          null
          /* we know it doesn't need it */
        )
      ), X = e.props ? f : rp(f);
    }
  } catch (D) {
    qo.length = 0, eu(D, n, 1), M = on(lt);
  }
  let L = M, V;
  if (M.patchFlag > 0 && M.patchFlag & 2048 && ([L, V] = bm(M)), X && q !== !1) {
    const D = Object.keys(X), { shapeFlag: te } = L;
    if (D.length) {
      if (te & 7)
        u && D.some(xu) && (X = ip(
          X,
          u
        )), L = Gs(L, X);
      else if (!Pc && L.type !== lt) {
        const G = Object.keys(f), se = [], me = [];
        for (let ke = 0, Ie = G.length; ke < Ie; ke++) {
          const Pe = G[ke];
          Qa(Pe) ? xu(Pe) || se.push(Pe[2].toLowerCase() + Pe.slice(3)) : me.push(Pe);
        }
        me.length && _(
          `Extraneous non-props attributes (${me.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), se.length && _(
          `Extraneous non-emits event listeners (${se.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return t.dirs && (Kl(L) || _(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), L = Gs(L), L.dirs = L.dirs ? L.dirs.concat(t.dirs) : t.dirs), t.transition && (Kl(L) || _(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), L.transition = t.transition), V ? V(L) : M = L, Cu(H), M;
}
const bm = (n) => {
  const e = n.children, t = n.dynamicChildren, r = ll(e, !1);
  if (r) {
    if (r.patchFlag > 0 && r.patchFlag & 2048)
      return bm(r);
  } else
    return [n, void 0];
  const s = e.indexOf(r), o = t ? t.indexOf(r) : -1, u = (c) => {
    e[s] = c, t && (o > -1 ? t[o] = c : c.patchFlag > 0 && (n.dynamicChildren = [...t, c]));
  };
  return [vt(r), u];
};
function ll(n, e = !0) {
  let t;
  for (let r = 0; r < n.length; r++) {
    const s = n[r];
    if (gl(s)) {
      if (s.type !== lt || s.children === "v-if") {
        if (t)
          return;
        if (t = s, e && t.patchFlag > 0 && t.patchFlag & 2048)
          return ll(t.children);
      }
    } else
      return;
  }
  return t;
}
const rp = (n) => {
  let e;
  for (const t in n)
    (t === "class" || t === "style" || Qa(t)) && ((e || (e = {}))[t] = n[t]);
  return e;
}, ip = (n, e) => {
  const t = {};
  for (const r in n)
    (!xu(r) || !(r.slice(9) in e)) && (t[r] = n[r]);
  return t;
}, Kl = (n) => n.shapeFlag & 7 || n.type === lt;
function sp(n, e, t) {
  const { props: r, children: s, component: o } = n, { props: u, children: c, patchFlag: f } = e, d = o.emitsOptions;
  if ((s || c) && Ds || e.dirs || e.transition)
    return !0;
  if (t && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return r ? Ml(r, u, d) : !!u;
    if (f & 8) {
      const h = e.dynamicProps;
      for (let p = 0; p < h.length; p++) {
        const y = h[p];
        if (u[y] !== r[y] && !nc(d, y))
          return !0;
      }
    }
  } else
    return (s || c) && (!c || !c.$stable) ? !0 : r === u ? !1 : r ? u ? Ml(r, u, d) : !0 : !!u;
  return !1;
}
function Ml(n, e, t) {
  const r = Object.keys(e);
  if (r.length !== Object.keys(n).length)
    return !0;
  for (let s = 0; s < r.length; s++) {
    const o = r[s];
    if (e[o] !== n[o] && !nc(t, o))
      return !0;
  }
  return !1;
}
function op({ vnode: n, parent: e }, t) {
  for (; e; ) {
    const r = e.subTree;
    if (r.suspense && r.suspense.activeBranch === n && (r.el = n.el), r === n)
      (n = e.vnode).el = t, e = e.parent;
    else
      break;
  }
}
const ap = Symbol.for("v-ndc"), up = (n) => n.__isSuspense;
function cp(n, e) {
  e && e.pendingBranch ? ne(n) ? e.effects.push(...n) : e.effects.push(n) : hm(n);
}
const lp = Symbol.for("v-scx"), fp = () => {
  {
    const n = ct(lp);
    return n || _(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), n;
  }
};
function Sm(n, e) {
  return fl(n, null, e);
}
const pu = {};
function dc(n, e, t) {
  return ie(e) || _(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), fl(n, e, t);
}
function fl(n, e, {
  immediate: t,
  deep: r,
  flush: s,
  once: o,
  onTrack: u,
  onTrigger: c
} = ve) {
  if (e && o) {
    const G = e;
    e = (...se) => {
      G(...se), te();
    };
  }
  r !== void 0 && typeof r == "number" && _(
    'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
  ), e || (t !== void 0 && _(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && _(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && _(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const f = (G) => {
    _(
      "Invalid watch source: ",
      G,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = Fe, h = (G) => r === !0 ? G : (
    // for deep: false, only traverse root-level properties
    po(G, r === !1 ? 1 : void 0)
  );
  let p, y = !1, N = !1;
  if (Ge(n) ? (p = () => n.value, y = ro(n)) : no(n) ? (p = () => h(n), y = !0) : ne(n) ? (N = !0, y = n.some((G) => no(G) || ro(G)), p = () => n.map((G) => {
    if (Ge(G))
      return G.value;
    if (no(G))
      return h(G);
    if (ie(G))
      return Hr(G, d, 2);
    f(G);
  })) : ie(n) ? e ? p = () => Hr(n, d, 2) : p = () => (I && I(), Ot(
    n,
    d,
    3,
    [q]
  )) : (p = ze, f(n)), e && r) {
    const G = p;
    p = () => po(G());
  }
  let I, q = (G) => {
    I = V.onStop = () => {
      Hr(G, d, 4), I = V.onStop = void 0;
    };
  }, M;
  if (sc)
    if (q = ze, e ? t && Ot(e, d, 3, [
      p(),
      N ? [] : void 0,
      q
    ]) : p(), s === "sync") {
      const G = fp();
      M = G.__watcherHandles || (G.__watcherHandles = []);
    } else
      return ze;
  let X = N ? new Array(n.length).fill(pu) : pu;
  const H = () => {
    if (!(!V.active || !V.dirty))
      if (e) {
        const G = V.run();
        (r || y || (N ? G.some((se, me) => Ms(se, X[me])) : Ms(G, X))) && (I && I(), Ot(e, d, 3, [
          G,
          // pass undefined as the old value when it's changed for the first time
          X === pu ? void 0 : N && X[0] === pu ? [] : X,
          q
        ]), X = G);
      } else
        V.run();
  };
  H.allowRecurse = !!e;
  let L;
  s === "sync" ? L = H : s === "post" ? L = () => nt(H, d && d.suspense) : (H.pre = !0, d && (H.id = d.uid), L = () => tc(H));
  const V = new tl(p, ze, L), D = uh(), te = () => {
    V.stop(), D && zc(D.effects, V);
  };
  return V.onTrack = u, V.onTrigger = c, e ? t ? H() : X = V.run() : s === "post" ? nt(
    V.run.bind(V),
    d && d.suspense
  ) : V.run(), M && M.push(te), te;
}
function mp(n, e, t) {
  const r = this.proxy, s = xe(n) ? n.includes(".") ? Im(r, n) : () => r[n] : n.bind(r, r);
  let o;
  ie(e) ? o = e : (o = e.handler, t = e);
  const u = iu(this), c = fl(s, o.bind(r), t);
  return u(), c;
}
function Im(n, e) {
  const t = e.split(".");
  return () => {
    let r = n;
    for (let s = 0; s < t.length && r; s++)
      r = r[t[s]];
    return r;
  };
}
function po(n, e, t = 0, r) {
  if (!Se(n) || n.__v_skip)
    return n;
  if (e && e > 0) {
    if (t >= e)
      return n;
    t++;
  }
  if (r = r || /* @__PURE__ */ new Set(), r.has(n))
    return n;
  if (r.add(n), Ge(n))
    po(n.value, e, t, r);
  else if (ne(n))
    for (let s = 0; s < n.length; s++)
      po(n[s], e, t, r);
  else if (Kd(n) || yo(n))
    n.forEach((s) => {
      po(s, e, t, r);
    });
  else if ($d(n))
    for (const s in n)
      po(n[s], e, t, r);
  return n;
}
function km(n) {
  Vd(n) && _("Do not use built-in directive ids as custom directive id: " + n);
}
function zs(n, e, t, r) {
  const s = n.dirs, o = e && e.dirs;
  for (let u = 0; u < s.length; u++) {
    const c = s[u];
    o && (c.oldValue = o[u].value);
    let f = c.dir[r];
    f && (Ws(), Ot(f, t, 8, [
      n.el,
      c,
      n,
      e
    ]), Hs());
  }
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function co(n, e) {
  return ie(n) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => Ae({ name: n.name }, e, { setup: n }))()
  ) : n;
}
const bu = (n) => !!n.type.__asyncLoader, ml = (n) => n.type.__isKeepAlive;
function dp(n, e) {
  Om(n, "a", e);
}
function hp(n, e) {
  Om(n, "da", e);
}
function Om(n, e, t = Fe) {
  const r = n.__wdc || (n.__wdc = () => {
    let s = t;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return n();
  });
  if (rc(e, r, t), t) {
    let s = t.parent;
    for (; s && s.parent; )
      ml(s.parent.vnode) && pp(r, e, t, s), s = s.parent;
  }
}
function pp(n, e, t, r) {
  const s = rc(
    e,
    n,
    r,
    !0
    /* prepend */
  );
  Bm(() => {
    zc(r[e], s);
  }, t);
}
function rc(n, e, t = Fe, r = !1) {
  if (t) {
    const s = t[n] || (t[n] = []), o = e.__weh || (e.__weh = (...u) => {
      if (t.isUnmounted)
        return;
      Ws();
      const c = iu(t), f = Ot(e, t, n, u);
      return c(), Hs(), f;
    });
    return r ? s.unshift(o) : s.push(o), o;
  } else {
    const s = Ys(ol[n].replace(/ hook$/, ""));
    _(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Zr = (n) => (e, t = Fe) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!sc || n === "sp") && rc(n, (...r) => e(...r), t)
), gp = Zr("bm"), nu = Zr("m"), yp = Zr("bu"), wp = Zr("u"), Tp = Zr("bum"), Bm = Zr("um"), Ep = Zr("sp"), vp = Zr(
  "rtg"
), Np = Zr(
  "rtc"
);
function bp(n, e = Fe) {
  rc("ec", n, e);
}
const Lc = (n) => n ? jm(n) ? wl(n) || n.proxy : Lc(n.parent) : null, so = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ae(/* @__PURE__ */ Object.create(null), {
    $: (n) => n,
    $el: (n) => n.vnode.el,
    $data: (n) => n.data,
    $props: (n) => ho(n.props),
    $attrs: (n) => ho(n.attrs),
    $slots: (n) => ho(n.slots),
    $refs: (n) => ho(n.refs),
    $parent: (n) => Lc(n.parent),
    $root: (n) => Lc(n.root),
    $emit: (n) => n.emit,
    $options: (n) => hl(n),
    $forceUpdate: (n) => n.f || (n.f = () => {
      n.effect.dirty = !0, tc(n.update);
    }),
    $nextTick: (n) => n.n || (n.n = Lu.bind(n.proxy)),
    $watch: (n) => mp.bind(n)
  })
), dl = (n) => n === "_" || n === "$", hc = (n, e) => n !== ve && !n.__isScriptSetup && fe(n, e), Am = {
  get({ _: n }, e) {
    const { ctx: t, setupState: r, data: s, props: o, accessCache: u, type: c, appContext: f } = n;
    if (e === "__isVue")
      return !0;
    let d;
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
        if (hc(r, e))
          return u[e] = 1, r[e];
        if (s !== ve && fe(s, e))
          return u[e] = 2, s[e];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = n.propsOptions[0]) && fe(d, e)
        )
          return u[e] = 3, o[e];
        if (t !== ve && fe(t, e))
          return u[e] = 4, t[e];
        Cc && (u[e] = 0);
      }
    }
    const h = so[e];
    let p, y;
    if (h)
      return e === "$attrs" ? (Xe(n, "get", e), Uu()) : e === "$slots" && Xe(n, "get", e), h(n);
    if (
      // css module (injected by vue-loader)
      (p = c.__cssModules) && (p = p[e])
    )
      return p;
    if (t !== ve && fe(t, e))
      return u[e] = 4, t[e];
    if (
      // {} properties
      y = f.config.globalProperties, fe(y, e)
    )
      return y[e];
    ot && (!xe(e) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    e.indexOf("__v") !== 0) && (s !== ve && dl(e[0]) && fe(s, e) ? _(
      `Property ${JSON.stringify(
        e
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : n === ot && _(
      `Property ${JSON.stringify(e)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: n }, e, t) {
    const { data: r, setupState: s, ctx: o } = n;
    return hc(s, e) ? (s[e] = t, !0) : s.__isScriptSetup && fe(s, e) ? (_(`Cannot mutate <script setup> binding "${e}" from Options API.`), !1) : r !== ve && fe(r, e) ? (r[e] = t, !0) : fe(n.props, e) ? (_(`Attempting to mutate prop "${e}". Props are readonly.`), !1) : e[0] === "$" && e.slice(1) in n ? (_(
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
    return !!t[u] || n !== ve && fe(n, u) || hc(e, u) || (c = o[0]) && fe(c, u) || fe(r, u) || fe(so, u) || fe(s.config.globalProperties, u);
  },
  defineProperty(n, e, t) {
    return t.get != null ? n._.accessCache[e] = 0 : fe(t, "value") && this.set(n, e, t.value, null), Reflect.defineProperty(n, e, t);
  }
};
Am.ownKeys = (n) => (_(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(n));
function Sp(n) {
  const e = {};
  return Object.defineProperty(e, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => n
  }), Object.keys(so).forEach((t) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      get: () => so[t](n),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: ze
    });
  }), e;
}
function Ip(n) {
  const {
    ctx: e,
    propsOptions: [t]
  } = n;
  t && Object.keys(t).forEach((r) => {
    Object.defineProperty(e, r, {
      enumerable: !0,
      configurable: !0,
      get: () => n.props[r],
      set: ze
    });
  });
}
function kp(n) {
  const { ctx: e, setupState: t } = n;
  Object.keys(ae(t)).forEach((r) => {
    if (!t.__isScriptSetup) {
      if (dl(r[0])) {
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
        get: () => t[r],
        set: ze
      });
    }
  });
}
function $l(n) {
  return ne(n) ? n.reduce(
    (e, t) => (e[t] = null, e),
    {}
  ) : n;
}
function Op() {
  const n = /* @__PURE__ */ Object.create(null);
  return (e, t) => {
    n[t] ? _(`${e} property "${t}" is already defined in ${n[t]}.`) : n[t] = e;
  };
}
let Cc = !0;
function Bp(n) {
  const e = hl(n), t = n.proxy, r = n.ctx;
  Cc = !1, e.beforeCreate && Vl(e.beforeCreate, n, "bc");
  const {
    // state
    data: s,
    computed: o,
    methods: u,
    watch: c,
    provide: f,
    inject: d,
    // lifecycle
    created: h,
    beforeMount: p,
    mounted: y,
    beforeUpdate: N,
    updated: I,
    activated: q,
    deactivated: M,
    beforeDestroy: X,
    beforeUnmount: H,
    destroyed: L,
    unmounted: V,
    render: D,
    renderTracked: te,
    renderTriggered: G,
    errorCaptured: se,
    serverPrefetch: me,
    // public API
    expose: ke,
    inheritAttrs: Ie,
    // assets
    components: Pe,
    directives: tt,
    filters: un
  } = e, je = Op();
  {
    const [F] = n.propsOptions;
    if (F)
      for (const k in F)
        je("Props", k);
  }
  if (d && Ap(d, r, je), u)
    for (const F in u) {
      const k = u[F];
      ie(k) ? (Object.defineProperty(r, F, {
        value: k.bind(t),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }), je("Methods", F)) : _(
        `Method "${F}" has type "${typeof k}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (s) {
    ie(s) || _(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const F = s.call(t, t);
    if (Xc(F) && _(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !Se(F))
      _("data() should return an object.");
    else {
      n.data = No(F);
      for (const k in F)
        je("Data", k), dl(k[0]) || Object.defineProperty(r, k, {
          configurable: !0,
          enumerable: !0,
          get: () => F[k],
          set: ze
        });
    }
  }
  if (Cc = !0, o)
    for (const F in o) {
      const k = o[F], z = ie(k) ? k.bind(t, t) : ie(k.get) ? k.get.bind(t, t) : ze;
      z === ze && _(`Computed property "${F}" has no getter.`);
      const re = !ie(k) && ie(k.set) ? k.set.bind(t) : () => {
        _(
          `Write operation failed: computed property "${F}" is readonly.`
        );
      }, Y = Eg({
        get: z,
        set: re
      });
      Object.defineProperty(r, F, {
        enumerable: !0,
        configurable: !0,
        get: () => Y.value,
        set: (Z) => Y.value = Z
      }), je("Computed", F);
    }
  if (c)
    for (const F in c)
      Jm(c[F], r, t, F);
  if (f) {
    const F = ie(f) ? f.call(t) : f;
    Reflect.ownKeys(F).forEach((k) => {
      Cp(k, F[k]);
    });
  }
  h && Vl(h, n, "c");
  function De(F, k) {
    ne(k) ? k.forEach((z) => F(z.bind(t))) : k && F(k.bind(t));
  }
  if (De(gp, p), De(nu, y), De(yp, N), De(wp, I), De(dp, q), De(hp, M), De(bp, se), De(Np, te), De(vp, G), De(Tp, H), De(Bm, V), De(Ep, me), ne(ke))
    if (ke.length) {
      const F = n.exposed || (n.exposed = {});
      ke.forEach((k) => {
        Object.defineProperty(F, k, {
          get: () => t[k],
          set: (z) => t[k] = z
        });
      });
    } else
      n.exposed || (n.exposed = {});
  D && n.render === ze && (n.render = D), Ie != null && (n.inheritAttrs = Ie), Pe && (n.components = Pe), tt && (n.directives = tt);
}
function Ap(n, e, t = ze) {
  ne(n) && (n = Uc(n));
  for (const r in n) {
    const s = n[r];
    let o;
    Se(s) ? "default" in s ? o = ct(
      s.from || r,
      s.default,
      !0
    ) : o = ct(s.from || r) : o = ct(s), Ge(o) ? Object.defineProperty(e, r, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (u) => o.value = u
    }) : e[r] = o, t("Inject", r);
  }
}
function Vl(n, e, t) {
  Ot(
    ne(n) ? n.map((r) => r.bind(e.proxy)) : n.bind(e.proxy),
    e,
    t
  );
}
function Jm(n, e, t, r) {
  const s = r.includes(".") ? Im(t, r) : () => t[r];
  if (xe(n)) {
    const o = e[n];
    ie(o) ? dc(s, o) : _(`Invalid watch handler specified by key "${n}"`, o);
  } else if (ie(n))
    dc(s, n.bind(t));
  else if (Se(n))
    if (ne(n))
      n.forEach((o) => Jm(o, e, t, r));
    else {
      const o = ie(n.handler) ? n.handler.bind(t) : e[n.handler];
      ie(o) ? dc(s, o, n) : _(`Invalid watch handler specified by key "${n.handler}"`, o);
    }
  else
    _(`Invalid watch option: "${r}"`, n);
}
function hl(n) {
  const e = n.type, { mixins: t, extends: r } = e, {
    mixins: s,
    optionsCache: o,
    config: { optionMergeStrategies: u }
  } = n.appContext, c = o.get(e);
  let f;
  return c ? f = c : !s.length && !t && !r ? f = e : (f = {}, s.length && s.forEach(
    (d) => qu(f, d, u, !0)
  ), qu(f, e, u)), Se(e) && o.set(e, f), f;
}
function qu(n, e, t, r = !1) {
  const { mixins: s, extends: o } = e;
  o && qu(n, o, t, !0), s && s.forEach(
    (u) => qu(n, u, t, !0)
  );
  for (const u in e)
    if (r && u === "expose")
      _(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const c = Jp[u] || t && t[u];
      n[u] = c ? c(n[u], e[u]) : e[u];
    }
  return n;
}
const Jp = {
  data: Gl,
  props: jl,
  emits: jl,
  // objects
  methods: Ao,
  computed: Ao,
  // lifecycle
  beforeCreate: Ze,
  created: Ze,
  beforeMount: Ze,
  mounted: Ze,
  beforeUpdate: Ze,
  updated: Ze,
  beforeDestroy: Ze,
  beforeUnmount: Ze,
  destroyed: Ze,
  unmounted: Ze,
  activated: Ze,
  deactivated: Ze,
  errorCaptured: Ze,
  serverPrefetch: Ze,
  // assets
  components: Ao,
  directives: Ao,
  // watch
  watch: xp,
  // provide / inject
  provide: Gl,
  inject: Rp
};
function Gl(n, e) {
  return e ? n ? function() {
    return Ae(
      ie(n) ? n.call(this, this) : n,
      ie(e) ? e.call(this, this) : e
    );
  } : e : n;
}
function Rp(n, e) {
  return Ao(Uc(n), Uc(e));
}
function Uc(n) {
  if (ne(n)) {
    const e = {};
    for (let t = 0; t < n.length; t++)
      e[n[t]] = n[t];
    return e;
  }
  return n;
}
function Ze(n, e) {
  return n ? [...new Set([].concat(n, e))] : e;
}
function Ao(n, e) {
  return n ? Ae(/* @__PURE__ */ Object.create(null), n, e) : e;
}
function jl(n, e) {
  return n ? ne(n) && ne(e) ? [.../* @__PURE__ */ new Set([...n, ...e])] : Ae(
    /* @__PURE__ */ Object.create(null),
    $l(n),
    $l(e ?? {})
  ) : e;
}
function xp(n, e) {
  if (!n)
    return e;
  if (!e)
    return n;
  const t = Ae(/* @__PURE__ */ Object.create(null), n);
  for (const r in e)
    t[r] = Ze(n[r], e[r]);
  return t;
}
function Rm() {
  return {
    app: null,
    config: {
      isNativeTag: Fd,
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
let Pp = 0;
function Lp(n, e) {
  return function(r, s = null) {
    ie(r) || (r = Ae({}, r)), s != null && !Se(s) && (_("root props passed to app.mount() must be an object."), s = null);
    const o = Rm(), u = /* @__PURE__ */ new WeakSet();
    let c = !1;
    const f = o.app = {
      _uid: Pp++,
      _component: r,
      _props: s,
      _container: null,
      _context: o,
      _instance: null,
      version: rf,
      get config() {
        return o.config;
      },
      set config(d) {
        _(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...h) {
        return u.has(d) ? _("Plugin has already been applied to target app.") : d && ie(d.install) ? (u.add(d), d.install(f, ...h)) : ie(d) ? (u.add(d), d(f, ...h)) : _(
          'A plugin must either be a function or an object with an "install" function.'
        ), f;
      },
      mixin(d) {
        return o.mixins.includes(d) ? _(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : o.mixins.push(d), f;
      },
      component(d, h) {
        return Mc(d, o.config), h ? (o.components[d] && _(`Component "${d}" has already been registered in target app.`), o.components[d] = h, f) : o.components[d];
      },
      directive(d, h) {
        return km(d), h ? (o.directives[d] && _(`Directive "${d}" has already been registered in target app.`), o.directives[d] = h, f) : o.directives[d];
      },
      mount(d, h, p) {
        if (c)
          _(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          d.__vue_app__ && _(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const y = on(r, s);
          return y.appContext = o, p === !0 ? p = "svg" : p === !1 && (p = void 0), o.reload = () => {
            n(
              Gs(y),
              d,
              p
            );
          }, h && e ? e(y, d) : n(y, d, p), c = !0, f._container = d, d.__vue_app__ = f, f._instance = y.component, Wh(f, rf), wl(y.component) || y.component.proxy;
        }
      },
      unmount() {
        c ? (n(null, f._container), f._instance = null, Hh(f), delete f._container.__vue_app__) : _("Cannot unmount an app that is not mounted.");
      },
      provide(d, h) {
        return d in o.provides && _(
          `App already provides property with key "${String(d)}". It will be overwritten with the new value.`
        ), o.provides[d] = h, f;
      },
      runWithContext(d) {
        const h = Uo;
        Uo = f;
        try {
          return d();
        } finally {
          Uo = h;
        }
      }
    };
    return f;
  };
}
let Uo = null;
function Cp(n, e) {
  if (!Fe)
    _("provide() can only be used inside setup().");
  else {
    let t = Fe.provides;
    const r = Fe.parent && Fe.parent.provides;
    r === t && (t = Fe.provides = Object.create(r)), t[n] = e;
  }
}
function ct(n, e, t = !1) {
  const r = Fe || ot;
  if (r || Uo) {
    const s = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : Uo._context.provides;
    if (s && n in s)
      return s[n];
    if (arguments.length > 1)
      return t && ie(e) ? e.call(r && r.proxy) : e;
    _(`injection "${String(n)}" not found.`);
  } else
    _("inject() can only be used inside setup() or functional components.");
}
function Up(n, e, t, r = !1) {
  const s = {}, o = {};
  Pu(o, ic, 1), n.propsDefaults = /* @__PURE__ */ Object.create(null), xm(n, e, s, o);
  for (const u in n.propsOptions[0])
    u in s || (s[u] = void 0);
  Lm(e || {}, s, n), t ? n.props = r ? s : Bh(s) : n.type.props ? n.props = s : n.props = o, n.attrs = o;
}
function qp(n) {
  for (; n; ) {
    if (n.type.__hmrId)
      return !0;
    n = n.parent;
  }
}
function Dp(n, e, t, r) {
  const {
    props: s,
    attrs: o,
    vnode: { patchFlag: u }
  } = n, c = ae(s), [f] = n.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !qp(n) && (r || u > 0) && !(u & 16)
  ) {
    if (u & 8) {
      const h = n.vnode.dynamicProps;
      for (let p = 0; p < h.length; p++) {
        let y = h[p];
        if (nc(n.emitsOptions, y))
          continue;
        const N = e[y];
        if (f)
          if (fe(o, y))
            N !== o[y] && (o[y] = N, d = !0);
          else {
            const I = Eo(y);
            s[I] = qc(
              f,
              c,
              I,
              N,
              n,
              !1
            );
          }
        else
          N !== o[y] && (o[y] = N, d = !0);
      }
    }
  } else {
    xm(n, e, s, o) && (d = !0);
    let h;
    for (const p in c)
      (!e || // for camelCase
      !fe(e, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((h = Ks(p)) === p || !fe(e, h))) && (f ? t && // for camelCase
      (t[p] !== void 0 || // for kebab-case
      t[h] !== void 0) && (s[p] = qc(
        f,
        c,
        p,
        void 0,
        n,
        !0
      )) : delete s[p]);
    if (o !== c)
      for (const p in o)
        (!e || !fe(e, p)) && (delete o[p], d = !0);
  }
  d && rn(n, "set", "$attrs"), Lm(e || {}, s, n);
}
function xm(n, e, t, r) {
  const [s, o] = n.propsOptions;
  let u = !1, c;
  if (e)
    for (let f in e) {
      if (Lo(f))
        continue;
      const d = e[f];
      let h;
      s && fe(s, h = Eo(f)) ? !o || !o.includes(h) ? t[h] = d : (c || (c = {}))[h] = d : nc(n.emitsOptions, f) || (!(f in r) || d !== r[f]) && (r[f] = d, u = !0);
    }
  if (o) {
    const f = ae(t), d = c || ve;
    for (let h = 0; h < o.length; h++) {
      const p = o[h];
      t[p] = qc(
        s,
        f,
        p,
        d[p],
        n,
        !fe(d, p)
      );
    }
  }
  return u;
}
function qc(n, e, t, r, s, o) {
  const u = n[t];
  if (u != null) {
    const c = fe(u, "default");
    if (c && r === void 0) {
      const f = u.default;
      if (u.type !== Function && !u.skipFactory && ie(f)) {
        const { propsDefaults: d } = s;
        if (t in d)
          r = d[t];
        else {
          const h = iu(s);
          r = d[t] = f.call(
            null,
            e
          ), h();
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
    ] && (r === "" || r === Ks(t)) && (r = !0));
  }
  return r;
}
function Pm(n, e, t = !1) {
  const r = e.propsCache, s = r.get(n);
  if (s)
    return s;
  const o = n.props, u = {}, c = [];
  let f = !1;
  if (!ie(n)) {
    const h = (p) => {
      f = !0;
      const [y, N] = Pm(p, e, !0);
      Ae(u, y), N && c.push(...N);
    };
    !t && e.mixins.length && e.mixins.forEach(h), n.extends && h(n.extends), n.mixins && n.mixins.forEach(h);
  }
  if (!o && !f)
    return Se(n) && r.set(n, go), go;
  if (ne(o))
    for (let h = 0; h < o.length; h++) {
      xe(o[h]) || _("props must be strings when using array syntax.", o[h]);
      const p = Eo(o[h]);
      Wl(p) && (u[p] = ve);
    }
  else if (o) {
    Se(o) || _("invalid props options", o);
    for (const h in o) {
      const p = Eo(h);
      if (Wl(p)) {
        const y = o[h], N = u[p] = ne(y) || ie(y) ? { type: y } : Ae({}, y);
        if (N) {
          const I = zl(Boolean, N.type), q = zl(String, N.type);
          N[
            0
            /* shouldCast */
          ] = I > -1, N[
            1
            /* shouldCastTrue */
          ] = q < 0 || I < q, (I > -1 || fe(N, "default")) && c.push(p);
        }
      }
    }
  }
  const d = [u, c];
  return Se(n) && r.set(n, d), d;
}
function Wl(n) {
  return n[0] !== "$" && !Lo(n) ? !0 : (_(`Invalid prop name: "${n}" is a reserved property.`), !1);
}
function Dc(n) {
  return n === null ? "null" : typeof n == "function" ? n.name || "" : typeof n == "object" && n.constructor && n.constructor.name || "";
}
function Hl(n, e) {
  return Dc(n) === Dc(e);
}
function zl(n, e) {
  return ne(e) ? e.findIndex((t) => Hl(t, n)) : ie(e) && Hl(e, n) ? 0 : -1;
}
function Lm(n, e, t) {
  const r = ae(e), s = t.propsOptions[0];
  for (const o in s) {
    let u = s[o];
    u != null && Fp(
      o,
      r[o],
      u,
      ho(r),
      !fe(n, o) && !fe(n, Ks(o))
    );
  }
}
function Fp(n, e, t, r, s) {
  const { type: o, required: u, validator: c, skipCheck: f } = t;
  if (u && s) {
    _('Missing required prop: "' + n + '"');
    return;
  }
  if (!(e == null && !u)) {
    if (o != null && o !== !0 && !f) {
      let d = !1;
      const h = ne(o) ? o : [o], p = [];
      for (let y = 0; y < h.length && !d; y++) {
        const { valid: N, expectedType: I } = Kp(e, h[y]);
        p.push(I || ""), d = N;
      }
      if (!d) {
        _(Mp(n, e, p));
        return;
      }
    }
    c && !c(e, r) && _('Invalid prop: custom validator check failed for prop "' + n + '".');
  }
}
const _p = /* @__PURE__ */ Yr(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Kp(n, e) {
  let t;
  const r = Dc(e);
  if (_p(r)) {
    const s = typeof n;
    t = s === r.toLowerCase(), !t && s === "object" && (t = n instanceof e);
  } else
    r === "Object" ? t = Se(n) : r === "Array" ? t = ne(n) : r === "null" ? t = n === null : t = n instanceof e;
  return {
    valid: t,
    expectedType: r
  };
}
function Mp(n, e, t) {
  if (t.length === 0)
    return `Prop type [] for prop "${n}" won't match anything. Did you mean to use type Array instead?`;
  let r = `Invalid prop: type check failed for prop "${n}". Expected ${t.map(Yu).join(" | ")}`;
  const s = t[0], o = Yc(e), u = Xl(e, s), c = Xl(e, o);
  return t.length === 1 && Yl(s) && !$p(s, o) && (r += ` with value ${u}`), r += `, got ${o} `, Yl(o) && (r += `with value ${c}.`), r;
}
function Xl(n, e) {
  return e === "String" ? `"${n}"` : e === "Number" ? `${Number(n)}` : `${n}`;
}
function Yl(n) {
  return ["string", "number", "boolean"].some((t) => n.toLowerCase() === t);
}
function $p(...n) {
  return n.some((e) => e.toLowerCase() === "boolean");
}
const Cm = (n) => n[0] === "_" || n === "$stable", pl = (n) => ne(n) ? n.map(vt) : [vt(n)], Vp = (n, e, t) => {
  if (e._n)
    return e;
  const r = np((...s) => (Fe && (!t || t.root === Fe.root) && _(
    `Slot "${n}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), pl(e(...s))), t);
  return r._c = !1, r;
}, Um = (n, e, t) => {
  const r = n._ctx;
  for (const s in n) {
    if (Cm(s))
      continue;
    const o = n[s];
    if (ie(o))
      e[s] = Vp(s, o, r);
    else if (o != null) {
      _(
        `Non-function value encountered for slot "${s}". Prefer function slots for better performance.`
      );
      const u = pl(o);
      e[s] = () => u;
    }
  }
}, qm = (n, e) => {
  ml(n.vnode) || _(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const t = pl(e);
  n.slots.default = () => t;
}, Gp = (n, e) => {
  if (n.vnode.shapeFlag & 32) {
    const t = e._;
    t ? (n.slots = ae(e), Pu(e, "_", t)) : Um(
      e,
      n.slots = {}
    );
  } else
    n.slots = {}, e && qm(n, e);
  Pu(n.slots, ic, 1);
}, jp = (n, e, t) => {
  const { vnode: r, slots: s } = n;
  let o = !0, u = ve;
  if (r.shapeFlag & 32) {
    const c = e._;
    c ? Ds ? (Ae(s, e), rn(n, "set", "$slots")) : t && c === 1 ? o = !1 : (Ae(s, e), !t && c === 1 && delete s._) : (o = !e.$stable, Um(e, s)), u = e;
  } else
    e && (qm(n, e), u = { default: 1 });
  if (o)
    for (const c in s)
      !Cm(c) && u[c] == null && delete s[c];
};
function Fc(n, e, t, r, s = !1) {
  if (ne(n)) {
    n.forEach(
      (y, N) => Fc(
        y,
        e && (ne(e) ? e[N] : e),
        t,
        r,
        s
      )
    );
    return;
  }
  if (bu(r) && !s)
    return;
  const o = r.shapeFlag & 4 ? wl(r.component) || r.component.proxy : r.el, u = s ? null : o, { i: c, r: f } = n;
  if (!c) {
    _(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const d = e && e.r, h = c.refs === ve ? c.refs = {} : c.refs, p = c.setupState;
  if (d != null && d !== f && (xe(d) ? (h[d] = null, fe(p, d) && (p[d] = null)) : Ge(d) && (d.value = null)), ie(f))
    Hr(f, c, 12, [u, h]);
  else {
    const y = xe(f), N = Ge(f);
    if (y || N) {
      const I = () => {
        if (n.f) {
          const q = y ? fe(p, f) ? p[f] : h[f] : f.value;
          s ? ne(q) && zc(q, o) : ne(q) ? q.includes(o) || q.push(o) : y ? (h[f] = [o], fe(p, f) && (p[f] = h[f])) : (f.value = [o], n.k && (h[n.k] = f.value));
        } else
          y ? (h[f] = u, fe(p, f) && (p[f] = u)) : N ? (f.value = u, n.k && (h[n.k] = u)) : _("Invalid template ref type:", f, `(${typeof f})`);
      };
      u ? (I.id = -1, nt(I, t)) : I();
    } else
      _("Invalid template ref type:", f, `(${typeof f})`);
  }
}
let Io, li;
function ln(n, e) {
  n.appContext.config.performance && Du() && li.mark(`vue-${e}-${n.uid}`), Zh(n, e, Du() ? li.now() : Date.now());
}
function fn(n, e) {
  if (n.appContext.config.performance && Du()) {
    const t = `vue-${e}-${n.uid}`, r = t + ":end";
    li.mark(r), li.measure(
      `<${oc(n, n.type)}> ${e}`,
      t,
      r
    ), li.clearMarks(t), li.clearMarks(r);
  }
  Qh(n, e, Du() ? li.now() : Date.now());
}
function Du() {
  return Io !== void 0 || (typeof window < "u" && window.performance ? (Io = !0, li = window.performance) : Io = !1), Io;
}
function Wp() {
  const n = [];
  if (n.length) {
    const e = n.length > 1;
    console.warn(
      `Feature flag${e ? "s" : ""} ${n.join(", ")} ${e ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const nt = cp;
function Hp(n) {
  return zp(n);
}
function zp(n, e) {
  Wp();
  const t = Qc();
  t.__VUE__ = !0, wm(t.__VUE_DEVTOOLS_GLOBAL_HOOK__, t);
  const {
    insert: r,
    remove: s,
    patchProp: o,
    createElement: u,
    createText: c,
    createComment: f,
    setText: d,
    setElementText: h,
    parentNode: p,
    nextSibling: y,
    setScopeId: N = ze,
    insertStaticContent: I
  } = n, q = (g, E, S, O = null, A = null, C = null, K = void 0, x = null, P = Ds ? !1 : !!E.dynamicChildren) => {
    if (g === E)
      return;
    g && !ko(g, E) && (O = Ne(g), le(g, A, C, !0), g = null), E.patchFlag === -2 && (P = !1, E.dynamicChildren = null);
    const { type: J, ref: $, shapeFlag: j } = E;
    switch (J) {
      case ru:
        M(g, E, S, O);
        break;
      case lt:
        X(g, E, S, O);
        break;
      case Su:
        g == null ? H(E, S, O, K) : L(g, E, S, K);
        break;
      case Et:
        tt(
          g,
          E,
          S,
          O,
          A,
          C,
          K,
          x,
          P
        );
        break;
      default:
        j & 1 ? te(
          g,
          E,
          S,
          O,
          A,
          C,
          K,
          x,
          P
        ) : j & 6 ? un(
          g,
          E,
          S,
          O,
          A,
          C,
          K,
          x,
          P
        ) : j & 64 || j & 128 ? J.process(
          g,
          E,
          S,
          O,
          A,
          C,
          K,
          x,
          P,
          $e
        ) : _("Invalid VNode type:", J, `(${typeof J})`);
    }
    $ != null && A && Fc($, g && g.ref, C, E || g, !E);
  }, M = (g, E, S, O) => {
    if (g == null)
      r(
        E.el = c(E.children),
        S,
        O
      );
    else {
      const A = E.el = g.el;
      E.children !== g.children && d(A, E.children);
    }
  }, X = (g, E, S, O) => {
    g == null ? r(
      E.el = f(E.children || ""),
      S,
      O
    ) : E.el = g.el;
  }, H = (g, E, S, O) => {
    [g.el, g.anchor] = I(
      g.children,
      E,
      S,
      O,
      g.el,
      g.anchor
    );
  }, L = (g, E, S, O) => {
    if (E.children !== g.children) {
      const A = y(g.anchor);
      D(g), [E.el, E.anchor] = I(
        E.children,
        S,
        A,
        O
      );
    } else
      E.el = g.el, E.anchor = g.anchor;
  }, V = ({ el: g, anchor: E }, S, O) => {
    let A;
    for (; g && g !== E; )
      A = y(g), r(g, S, O), g = A;
    r(E, S, O);
  }, D = ({ el: g, anchor: E }) => {
    let S;
    for (; g && g !== E; )
      S = y(g), s(g), g = S;
    s(E);
  }, te = (g, E, S, O, A, C, K, x, P) => {
    E.type === "svg" ? K = "svg" : E.type === "math" && (K = "mathml"), g == null ? G(
      E,
      S,
      O,
      A,
      C,
      K,
      x,
      P
    ) : ke(
      g,
      E,
      A,
      C,
      K,
      x,
      P
    );
  }, G = (g, E, S, O, A, C, K, x) => {
    let P, J;
    const { props: $, shapeFlag: j, transition: W, dirs: a } = g;
    if (P = g.el = u(
      g.type,
      C,
      $ && $.is,
      $
    ), j & 8 ? h(P, g.children) : j & 16 && me(
      g.children,
      P,
      null,
      O,
      A,
      pc(g, C),
      K,
      x
    ), a && zs(g, null, O, "created"), se(P, g, g.scopeId, K, O), $) {
      for (const m in $)
        m !== "value" && !Lo(m) && o(
          P,
          m,
          null,
          $[m],
          C,
          g.children,
          O,
          A,
          ge
        );
      "value" in $ && o(P, "value", null, $.value, C), (J = $.onVnodeBeforeMount) && Bt(J, O, g);
    }
    Object.defineProperty(P, "__vnode", {
      value: g,
      enumerable: !1
    }), Object.defineProperty(P, "__vueParentComponent", {
      value: O,
      enumerable: !1
    }), a && zs(g, null, O, "beforeMount");
    const l = Xp(A, W);
    l && W.beforeEnter(P), r(P, E, S), ((J = $ && $.onVnodeMounted) || l || a) && nt(() => {
      J && Bt(J, O, g), l && W.enter(P), a && zs(g, null, O, "mounted");
    }, A);
  }, se = (g, E, S, O, A) => {
    if (S && N(g, S), O)
      for (let C = 0; C < O.length; C++)
        N(g, O[C]);
    if (A) {
      let C = A.subTree;
      if (C.patchFlag > 0 && C.patchFlag & 2048 && (C = ll(C.children) || C), E === C) {
        const K = A.vnode;
        se(
          g,
          K,
          K.scopeId,
          K.slotScopeIds,
          A.parent
        );
      }
    }
  }, me = (g, E, S, O, A, C, K, x, P = 0) => {
    for (let J = P; J < g.length; J++) {
      const $ = g[J] = x ? ai(g[J]) : vt(g[J]);
      q(
        null,
        $,
        E,
        S,
        O,
        A,
        C,
        K,
        x
      );
    }
  }, ke = (g, E, S, O, A, C, K) => {
    const x = E.el = g.el;
    let { patchFlag: P, dynamicChildren: J, dirs: $ } = E;
    P |= g.patchFlag & 16;
    const j = g.props || ve, W = E.props || ve;
    let a;
    if (S && Xs(S, !1), (a = W.onVnodeBeforeUpdate) && Bt(a, S, E, g), $ && zs(E, g, S, "beforeUpdate"), S && Xs(S, !0), Ds && (P = 0, K = !1, J = null), J ? (Ie(
      g.dynamicChildren,
      J,
      x,
      S,
      O,
      pc(E, A),
      C
    ), Fu(g, E)) : K || z(
      g,
      E,
      x,
      null,
      S,
      O,
      pc(E, A),
      C,
      !1
    ), P > 0) {
      if (P & 16)
        Pe(
          x,
          E,
          j,
          W,
          S,
          O,
          A
        );
      else if (P & 2 && j.class !== W.class && o(x, "class", null, W.class, A), P & 4 && o(x, "style", j.style, W.style, A), P & 8) {
        const l = E.dynamicProps;
        for (let m = 0; m < l.length; m++) {
          const w = l[m], v = j[w], b = W[w];
          (b !== v || w === "value") && o(
            x,
            w,
            v,
            b,
            A,
            g.children,
            S,
            O,
            ge
          );
        }
      }
      P & 1 && g.children !== E.children && h(x, E.children);
    } else
      !K && J == null && Pe(
        x,
        E,
        j,
        W,
        S,
        O,
        A
      );
    ((a = W.onVnodeUpdated) || $) && nt(() => {
      a && Bt(a, S, E, g), $ && zs(E, g, S, "updated");
    }, O);
  }, Ie = (g, E, S, O, A, C, K) => {
    for (let x = 0; x < E.length; x++) {
      const P = g[x], J = E[x], $ = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        P.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (P.type === Et || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ko(P, J) || // - In the case of a component, it could contain anything.
        P.shapeFlag & 70) ? p(P.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          S
        )
      );
      q(
        P,
        J,
        $,
        null,
        O,
        A,
        C,
        K,
        !0
      );
    }
  }, Pe = (g, E, S, O, A, C, K) => {
    if (S !== O) {
      if (S !== ve)
        for (const x in S)
          !Lo(x) && !(x in O) && o(
            g,
            x,
            S[x],
            null,
            K,
            E.children,
            A,
            C,
            ge
          );
      for (const x in O) {
        if (Lo(x))
          continue;
        const P = O[x], J = S[x];
        P !== J && x !== "value" && o(
          g,
          x,
          J,
          P,
          K,
          E.children,
          A,
          C,
          ge
        );
      }
      "value" in O && o(g, "value", S.value, O.value, K);
    }
  }, tt = (g, E, S, O, A, C, K, x, P) => {
    const J = E.el = g ? g.el : c(""), $ = E.anchor = g ? g.anchor : c("");
    let { patchFlag: j, dynamicChildren: W, slotScopeIds: a } = E;
    // #5523 dev root fragment may inherit directives
    (Ds || j & 2048) && (j = 0, P = !1, W = null), a && (x = x ? x.concat(a) : a), g == null ? (r(J, S, O), r($, S, O), me(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      E.children || [],
      S,
      $,
      A,
      C,
      K,
      x,
      P
    )) : j > 0 && j & 64 && W && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    g.dynamicChildren ? (Ie(
      g.dynamicChildren,
      W,
      S,
      A,
      C,
      K,
      x
    ), Fu(g, E)) : z(
      g,
      E,
      S,
      $,
      A,
      C,
      K,
      x,
      P
    );
  }, un = (g, E, S, O, A, C, K, x, P) => {
    E.slotScopeIds = x, g == null ? E.shapeFlag & 512 ? A.ctx.activate(
      E,
      S,
      O,
      K,
      P
    ) : je(
      E,
      S,
      O,
      A,
      C,
      K,
      P
    ) : De(g, E, P);
  }, je = (g, E, S, O, A, C, K) => {
    const x = g.component = cg(
      g,
      O,
      A
    );
    if (x.type.__hmrId && $h(x), vu(g), ln(x, "mount"), ml(g) && (x.ctx.renderer = $e), ln(x, "init"), mg(x), fn(x, "init"), x.asyncDep) {
      if (A && A.registerDep(x, F), !g.el) {
        const P = x.subTree = on(lt);
        X(null, P, E, S);
      }
    } else
      F(
        x,
        g,
        E,
        S,
        A,
        C,
        K
      );
    Nu(), fn(x, "mount");
  }, De = (g, E, S) => {
    const O = E.component = g.component;
    if (sp(g, E, S))
      if (O.asyncDep && !O.asyncResolved) {
        vu(E), k(O, E, S), Nu();
        return;
      } else
        O.next = E, Kh(O.update), O.effect.dirty = !0, O.update();
    else
      E.el = g.el, O.vnode = E;
  }, F = (g, E, S, O, A, C, K) => {
    const x = () => {
      if (g.isMounted) {
        let { next: $, bu: j, u: W, parent: a, vnode: l } = g;
        {
          const U = Dm(g);
          if (U) {
            $ && ($.el = l.el, k(g, $, K)), U.asyncDep.then(() => {
              g.isUnmounted || x();
            });
            return;
          }
        }
        let m = $, w;
        vu($ || g.vnode), Xs(g, !1), $ ? ($.el = l.el, k(g, $, K)) : $ = l, j && So(j), (w = $.props && $.props.onVnodeBeforeUpdate) && Bt(w, a, $, l), Xs(g, !0), ln(g, "render");
        const v = mc(g);
        fn(g, "render");
        const b = g.subTree;
        g.subTree = v, ln(g, "patch"), q(
          b,
          v,
          // parent may have changed if it's in a teleport
          p(b.el),
          // anchor may have changed if it's in a fragment
          Ne(b),
          g,
          A,
          C
        ), fn(g, "patch"), $.el = v.el, m === null && op(g, v.el), W && nt(W, A), (w = $.props && $.props.onVnodeUpdated) && nt(
          () => Bt(w, a, $, l),
          A
        ), Tm(g), Nu();
      } else {
        let $;
        const { el: j, props: W } = E, { bm: a, m: l, parent: m } = g, w = bu(E);
        if (Xs(g, !1), a && So(a), !w && ($ = W && W.onVnodeBeforeMount) && Bt($, m, E), Xs(g, !0), j && Ye) {
          const v = () => {
            ln(g, "render"), g.subTree = mc(g), fn(g, "render"), ln(g, "hydrate"), Ye(
              j,
              g.subTree,
              g,
              A,
              null
            ), fn(g, "hydrate");
          };
          w ? E.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !g.isUnmounted && v()
          ) : v();
        } else {
          ln(g, "render");
          const v = g.subTree = mc(g);
          fn(g, "render"), ln(g, "patch"), q(
            null,
            v,
            S,
            O,
            g,
            A,
            C
          ), fn(g, "patch"), E.el = v.el;
        }
        if (l && nt(l, A), !w && ($ = W && W.onVnodeMounted)) {
          const v = E;
          nt(
            () => Bt($, m, v),
            A
          );
        }
        (E.shapeFlag & 256 || m && bu(m.vnode) && m.vnode.shapeFlag & 256) && g.a && nt(g.a, A), g.isMounted = !0, zh(g), E = S = O = null;
      }
    }, P = g.effect = new tl(
      x,
      ze,
      () => tc(J),
      g.scope
      // track it in component's effect scope
    ), J = g.update = () => {
      P.dirty && P.run();
    };
    J.id = g.uid, Xs(g, !0), P.onTrack = g.rtc ? ($) => So(g.rtc, $) : void 0, P.onTrigger = g.rtg ? ($) => So(g.rtg, $) : void 0, J.ownerInstance = g, J();
  }, k = (g, E, S) => {
    E.component = g;
    const O = g.vnode.props;
    g.vnode = E, g.next = null, Dp(g, E.props, O, S), jp(g, E.children, S), Ws(), Fl(g), Hs();
  }, z = (g, E, S, O, A, C, K, x, P = !1) => {
    const J = g && g.children, $ = g ? g.shapeFlag : 0, j = E.children, { patchFlag: W, shapeFlag: a } = E;
    if (W > 0) {
      if (W & 128) {
        Y(
          J,
          j,
          S,
          O,
          A,
          C,
          K,
          x,
          P
        );
        return;
      } else if (W & 256) {
        re(
          J,
          j,
          S,
          O,
          A,
          C,
          K,
          x,
          P
        );
        return;
      }
    }
    a & 8 ? ($ & 16 && ge(J, A, C), j !== J && h(S, j)) : $ & 16 ? a & 16 ? Y(
      J,
      j,
      S,
      O,
      A,
      C,
      K,
      x,
      P
    ) : ge(J, A, C, !0) : ($ & 8 && h(S, ""), a & 16 && me(
      j,
      S,
      O,
      A,
      C,
      K,
      x,
      P
    ));
  }, re = (g, E, S, O, A, C, K, x, P) => {
    g = g || go, E = E || go;
    const J = g.length, $ = E.length, j = Math.min(J, $);
    let W;
    for (W = 0; W < j; W++) {
      const a = E[W] = P ? ai(E[W]) : vt(E[W]);
      q(
        g[W],
        a,
        S,
        null,
        A,
        C,
        K,
        x,
        P
      );
    }
    J > $ ? ge(
      g,
      A,
      C,
      !0,
      !1,
      j
    ) : me(
      E,
      S,
      O,
      A,
      C,
      K,
      x,
      P,
      j
    );
  }, Y = (g, E, S, O, A, C, K, x, P) => {
    let J = 0;
    const $ = E.length;
    let j = g.length - 1, W = $ - 1;
    for (; J <= j && J <= W; ) {
      const a = g[J], l = E[J] = P ? ai(E[J]) : vt(E[J]);
      if (ko(a, l))
        q(
          a,
          l,
          S,
          null,
          A,
          C,
          K,
          x,
          P
        );
      else
        break;
      J++;
    }
    for (; J <= j && J <= W; ) {
      const a = g[j], l = E[W] = P ? ai(E[W]) : vt(E[W]);
      if (ko(a, l))
        q(
          a,
          l,
          S,
          null,
          A,
          C,
          K,
          x,
          P
        );
      else
        break;
      j--, W--;
    }
    if (J > j) {
      if (J <= W) {
        const a = W + 1, l = a < $ ? E[a].el : O;
        for (; J <= W; )
          q(
            null,
            E[J] = P ? ai(E[J]) : vt(E[J]),
            S,
            l,
            A,
            C,
            K,
            x,
            P
          ), J++;
      }
    } else if (J > W)
      for (; J <= j; )
        le(g[J], A, C, !0), J++;
    else {
      const a = J, l = J, m = /* @__PURE__ */ new Map();
      for (J = l; J <= W; J++) {
        const oe = E[J] = P ? ai(E[J]) : vt(E[J]);
        oe.key != null && (m.has(oe.key) && _(
          "Duplicate keys found during update:",
          JSON.stringify(oe.key),
          "Make sure keys are unique."
        ), m.set(oe.key, J));
      }
      let w, v = 0;
      const b = W - l + 1;
      let U = !1, ye = 0;
      const Oe = new Array(b);
      for (J = 0; J < b; J++)
        Oe[J] = 0;
      for (J = a; J <= j; J++) {
        const oe = g[J];
        if (v >= b) {
          le(oe, A, C, !0);
          continue;
        }
        let he;
        if (oe.key != null)
          he = m.get(oe.key);
        else
          for (w = l; w <= W; w++)
            if (Oe[w - l] === 0 && ko(oe, E[w])) {
              he = w;
              break;
            }
        he === void 0 ? le(oe, A, C, !0) : (Oe[he - l] = J + 1, he >= ye ? ye = he : U = !0, q(
          oe,
          E[he],
          S,
          null,
          A,
          C,
          K,
          x,
          P
        ), v++);
      }
      const Ee = U ? Yp(Oe) : go;
      for (w = Ee.length - 1, J = b - 1; J >= 0; J--) {
        const oe = l + J, he = E[oe], Jl = oe + 1 < $ ? E[oe + 1].el : O;
        Oe[J] === 0 ? q(
          null,
          he,
          S,
          Jl,
          A,
          C,
          K,
          x,
          P
        ) : U && (w < 0 || J !== Ee[w] ? Z(he, S, Jl, 2) : w--);
      }
    }
  }, Z = (g, E, S, O, A = null) => {
    const { el: C, type: K, transition: x, children: P, shapeFlag: J } = g;
    if (J & 6) {
      Z(g.component.subTree, E, S, O);
      return;
    }
    if (J & 128) {
      g.suspense.move(E, S, O);
      return;
    }
    if (J & 64) {
      K.move(g, E, S, $e);
      return;
    }
    if (K === Et) {
      r(C, E, S);
      for (let j = 0; j < P.length; j++)
        Z(P[j], E, S, O);
      r(g.anchor, E, S);
      return;
    }
    if (K === Su) {
      V(g, E, S);
      return;
    }
    if (O !== 2 && J & 1 && x)
      if (O === 0)
        x.beforeEnter(C), r(C, E, S), nt(() => x.enter(C), A);
      else {
        const { leave: j, delayLeave: W, afterLeave: a } = x, l = () => r(C, E, S), m = () => {
          j(C, () => {
            l(), a && a();
          });
        };
        W ? W(C, l, m) : m();
      }
    else
      r(C, E, S);
  }, le = (g, E, S, O = !1, A = !1) => {
    const {
      type: C,
      props: K,
      ref: x,
      children: P,
      dynamicChildren: J,
      shapeFlag: $,
      patchFlag: j,
      dirs: W
    } = g;
    if (x != null && Fc(x, null, S, g, !0), $ & 256) {
      E.ctx.deactivate(g);
      return;
    }
    const a = $ & 1 && W, l = !bu(g);
    let m;
    if (l && (m = K && K.onVnodeBeforeUnmount) && Bt(m, E, g), $ & 6)
      Te(g.component, S, O);
    else {
      if ($ & 128) {
        g.suspense.unmount(S, O);
        return;
      }
      a && zs(g, null, E, "beforeUnmount"), $ & 64 ? g.type.remove(
        g,
        E,
        S,
        A,
        $e,
        O
      ) : J && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (C !== Et || j > 0 && j & 64) ? ge(
        J,
        E,
        S,
        !1,
        !0
      ) : (C === Et && j & 384 || !A && $ & 16) && ge(P, E, S), O && pe(g);
    }
    (l && (m = K && K.onVnodeUnmounted) || a) && nt(() => {
      m && Bt(m, E, g), a && zs(g, null, E, "unmounted");
    }, S);
  }, pe = (g) => {
    const { type: E, el: S, anchor: O, transition: A } = g;
    if (E === Et) {
      g.patchFlag > 0 && g.patchFlag & 2048 && A && !A.persisted ? g.children.forEach((K) => {
        K.type === lt ? s(K.el) : pe(K);
      }) : de(S, O);
      return;
    }
    if (E === Su) {
      D(g);
      return;
    }
    const C = () => {
      s(S), A && !A.persisted && A.afterLeave && A.afterLeave();
    };
    if (g.shapeFlag & 1 && A && !A.persisted) {
      const { leave: K, delayLeave: x } = A, P = () => K(S, C);
      x ? x(g.el, C, P) : P();
    } else
      C();
  }, de = (g, E) => {
    let S;
    for (; g !== E; )
      S = y(g), s(g), g = S;
    s(E);
  }, Te = (g, E, S) => {
    g.type.__hmrId && Vh(g);
    const { bum: O, scope: A, update: C, subTree: K, um: x } = g;
    O && So(O), A.stop(), C && (C.active = !1, le(K, g, E, S)), x && nt(x, E), nt(() => {
      g.isUnmounted = !0;
    }, E), E && E.pendingBranch && !E.isUnmounted && g.asyncDep && !g.asyncResolved && g.suspenseId === E.pendingId && (E.deps--, E.deps === 0 && E.resolve()), Yh(g);
  }, ge = (g, E, S, O = !1, A = !1, C = 0) => {
    for (let K = C; K < g.length; K++)
      le(g[K], E, S, O, A);
  }, Ne = (g) => g.shapeFlag & 6 ? Ne(g.component.subTree) : g.shapeFlag & 128 ? g.suspense.next() : y(g.anchor || g.el);
  let Me = !1;
  const Le = (g, E, S) => {
    g == null ? E._vnode && le(E._vnode, null, null, !0) : q(
      E._vnode || null,
      g,
      E,
      null,
      null,
      null,
      S
    ), Me || (Me = !0, Fl(), pm(), Me = !1), E._vnode = g;
  }, $e = {
    p: q,
    um: le,
    m: Z,
    r: pe,
    mt: je,
    mc: me,
    pc: z,
    pbc: Ie,
    n: Ne,
    o: n
  };
  let We, Ye;
  return e && ([We, Ye] = e(
    $e
  )), {
    render: Le,
    hydrate: We,
    createApp: Lp(Le, We)
  };
}
function pc({ type: n, props: e }, t) {
  return t === "svg" && n === "foreignObject" || t === "mathml" && n === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : t;
}
function Xs({ effect: n, update: e }, t) {
  n.allowRecurse = e.allowRecurse = t;
}
function Xp(n, e) {
  return (!n || n && !n.pendingBranch) && e && !e.persisted;
}
function Fu(n, e, t = !1) {
  const r = n.children, s = e.children;
  if (ne(r) && ne(s))
    for (let o = 0; o < r.length; o++) {
      const u = r[o];
      let c = s[o];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = s[o] = ai(s[o]), c.el = u.el), t || Fu(u, c)), c.type === ru && (c.el = u.el), c.type === lt && !c.el && (c.el = u.el);
    }
}
function Yp(n) {
  const e = n.slice(), t = [0];
  let r, s, o, u, c;
  const f = n.length;
  for (r = 0; r < f; r++) {
    const d = n[r];
    if (d !== 0) {
      if (s = t[t.length - 1], n[s] < d) {
        e[r] = s, t.push(r);
        continue;
      }
      for (o = 0, u = t.length - 1; o < u; )
        c = o + u >> 1, n[t[c]] < d ? o = c + 1 : u = c;
      d < n[t[o]] && (o > 0 && (e[r] = t[o - 1]), t[o] = r);
    }
  }
  for (o = t.length, u = t[o - 1]; o-- > 0; )
    t[o] = u, u = e[u];
  return t;
}
function Dm(n) {
  const e = n.subTree.component;
  if (e)
    return e.asyncDep && !e.asyncResolved ? e : Dm(e);
}
const Zp = (n) => n.__isTeleport, To = (n) => n && (n.disabled || n.disabled === ""), Zl = (n) => typeof SVGElement < "u" && n instanceof SVGElement, Ql = (n) => typeof MathMLElement == "function" && n instanceof MathMLElement, _c = (n, e) => {
  const t = n && n.to;
  if (xe(t))
    if (e) {
      const r = e(t);
      return r || _(
        `Failed to locate Teleport target with selector "${t}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), r;
    } else
      return _(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return !t && !To(n) && _(`Invalid Teleport target: ${t}`), t;
}, Qp = {
  name: "Teleport",
  __isTeleport: !0,
  process(n, e, t, r, s, o, u, c, f, d) {
    const {
      mc: h,
      pc: p,
      pbc: y,
      o: { insert: N, querySelector: I, createText: q, createComment: M }
    } = d, X = To(e.props);
    let { shapeFlag: H, children: L, dynamicChildren: V } = e;
    if (Ds && (f = !1, V = null), n == null) {
      const D = e.el = M("teleport start"), te = e.anchor = M("teleport end");
      N(D, t, r), N(te, t, r);
      const G = e.target = _c(e.props, I), se = e.targetAnchor = q("");
      G ? (N(se, G), u === "svg" || Zl(G) ? u = "svg" : (u === "mathml" || Ql(G)) && (u = "mathml")) : X || _("Invalid Teleport target on mount:", G, `(${typeof G})`);
      const me = (ke, Ie) => {
        H & 16 && h(
          L,
          ke,
          Ie,
          s,
          o,
          u,
          c,
          f
        );
      };
      X ? me(t, te) : G && me(G, se);
    } else {
      e.el = n.el;
      const D = e.anchor = n.anchor, te = e.target = n.target, G = e.targetAnchor = n.targetAnchor, se = To(n.props), me = se ? t : te, ke = se ? D : G;
      if (u === "svg" || Zl(te) ? u = "svg" : (u === "mathml" || Ql(te)) && (u = "mathml"), V ? (y(
        n.dynamicChildren,
        V,
        me,
        s,
        o,
        u,
        c
      ), Fu(n, e, !0)) : f || p(
        n,
        e,
        me,
        ke,
        s,
        o,
        u,
        c,
        !1
      ), X)
        se ? e.props && n.props && e.props.to !== n.props.to && (e.props.to = n.props.to) : gu(
          e,
          t,
          D,
          d,
          1
        );
      else if ((e.props && e.props.to) !== (n.props && n.props.to)) {
        const Ie = e.target = _c(
          e.props,
          I
        );
        Ie ? gu(
          e,
          Ie,
          null,
          d,
          0
        ) : _(
          "Invalid Teleport target on update:",
          te,
          `(${typeof te})`
        );
      } else
        se && gu(
          e,
          te,
          G,
          d,
          1
        );
    }
    _m(e);
  },
  remove(n, e, t, r, { um: s, o: { remove: o } }, u) {
    const { shapeFlag: c, children: f, anchor: d, targetAnchor: h, target: p, props: y } = n;
    if (p && o(h), u && o(d), c & 16) {
      const N = u || !To(y);
      for (let I = 0; I < f.length; I++) {
        const q = f[I];
        s(
          q,
          e,
          t,
          N,
          !!q.dynamicChildren
        );
      }
    }
  },
  move: gu,
  hydrate: eg
};
function gu(n, e, t, { o: { insert: r }, m: s }, o = 2) {
  o === 0 && r(n.targetAnchor, e, t);
  const { el: u, anchor: c, shapeFlag: f, children: d, props: h } = n, p = o === 2;
  if (p && r(u, e, t), (!p || To(h)) && f & 16)
    for (let y = 0; y < d.length; y++)
      s(
        d[y],
        e,
        t,
        2
      );
  p && r(c, e, t);
}
function eg(n, e, t, r, s, o, {
  o: { nextSibling: u, parentNode: c, querySelector: f }
}, d) {
  const h = e.target = _c(
    e.props,
    f
  );
  if (h) {
    const p = h._lpa || h.firstChild;
    if (e.shapeFlag & 16)
      if (To(e.props))
        e.anchor = d(
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
        let y = p;
        for (; y; )
          if (y = u(y), y && y.nodeType === 8 && y.data === "teleport anchor") {
            e.targetAnchor = y, h._lpa = e.targetAnchor && u(e.targetAnchor);
            break;
          }
        d(
          p,
          e,
          h,
          t,
          r,
          s,
          o
        );
      }
    _m(e);
  }
  return e.anchor && u(e.anchor);
}
const Fm = Qp;
function _m(n) {
  const e = n.ctx;
  if (e && e.ut) {
    let t = n.children[0].el;
    for (; t && t !== n.targetAnchor; )
      t.nodeType === 1 && t.setAttribute("data-v-owner", e.uid), t = t.nextSibling;
    e.ut();
  }
}
const Et = Symbol.for("v-fgt"), ru = Symbol.for("v-txt"), lt = Symbol.for("v-cmt"), Su = Symbol.for("v-stc"), qo = [];
let bt = null;
function Ve(n = !1) {
  qo.push(bt = n ? null : []);
}
function tg() {
  qo.pop(), bt = qo[qo.length - 1] || null;
}
let $o = 1;
function ef(n) {
  $o += n;
}
function Km(n) {
  return n.dynamicChildren = $o > 0 ? bt || go : null, tg(), $o > 0 && bt && bt.push(n), n;
}
function Fs(n, e, t, r, s, o) {
  return Km(
    $m(
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
function dn(n, e, t, r, s) {
  return Km(
    on(
      n,
      e,
      t,
      r,
      s,
      !0
    )
  );
}
function gl(n) {
  return n ? n.__v_isVNode === !0 : !1;
}
function ko(n, e) {
  return e.shapeFlag & 6 && mo.has(e.type) ? (n.shapeFlag &= -257, e.shapeFlag &= -513, !1) : n.type === e.type && n.key === e.key;
}
const ng = (...n) => rg(
  ...n
), ic = "__vInternal", Mm = ({ key: n }) => n ?? null, Iu = ({
  ref: n,
  ref_key: e,
  ref_for: t
}) => (typeof n == "number" && (n = "" + n), n != null ? xe(n) || Ge(n) || ie(n) ? { i: ot, r: n, k: e, f: !!t } : n : null);
function $m(n, e = null, t = null, r = 0, s = null, o = n === Et ? 0 : 1, u = !1, c = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: n,
    props: e,
    key: e && Mm(e),
    ref: e && Iu(e),
    scopeId: Nm,
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
  return c ? (yl(f, t), o & 128 && n.normalize(f)) : t && (f.shapeFlag |= xe(t) ? 8 : 16), f.key !== f.key && _("VNode created with invalid key (NaN). VNode type:", f.type), $o > 0 && // avoid a block node from tracking itself
  !u && // has current parent block
  bt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && bt.push(f), f;
}
const on = ng;
function rg(n, e = null, t = null, r = 0, s = null, o = !1) {
  if ((!n || n === ap) && (n || _(`Invalid vnode type when creating vnode: ${n}.`), n = lt), gl(n)) {
    const c = Gs(
      n,
      e,
      !0
      /* mergeRef: true */
    );
    return t && yl(c, t), $o > 0 && !o && bt && (c.shapeFlag & 6 ? bt[bt.indexOf(n)] = c : bt.push(c)), c.patchFlag |= -2, c;
  }
  if (zm(n) && (n = n.__vccOpts), e) {
    e = ig(e);
    let { class: c, style: f } = e;
    c && !xe(c) && (e.class = el(c)), Se(f) && (Jc(f) && !ne(f) && (f = Ae({}, f)), e.style = js(f));
  }
  const u = xe(n) ? 1 : up(n) ? 128 : Zp(n) ? 64 : Se(n) ? 4 : ie(n) ? 2 : 0;
  return u & 4 && Jc(n) && (n = ae(n), _(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    n
  )), $m(
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
function ig(n) {
  return n ? Jc(n) || ic in n ? Ae({}, n) : n : null;
}
function Gs(n, e, t = !1) {
  const { props: r, ref: s, patchFlag: o, children: u } = n, c = e ? og(r || {}, e) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: n.type,
    props: c,
    key: c && Mm(c),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      t && s ? ne(s) ? s.concat(Iu(e)) : [s, Iu(e)] : Iu(e)
    ) : s,
    scopeId: n.scopeId,
    slotScopeIds: n.slotScopeIds,
    children: o === -1 && ne(u) ? u.map(Vm) : u,
    target: n.target,
    targetAnchor: n.targetAnchor,
    staticCount: n.staticCount,
    shapeFlag: n.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: e && n.type !== Et ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: n.ssContent && Gs(n.ssContent),
    ssFallback: n.ssFallback && Gs(n.ssFallback),
    el: n.el,
    anchor: n.anchor,
    ctx: n.ctx,
    ce: n.ce
  };
}
function Vm(n) {
  const e = Gs(n);
  return ne(n.children) && (e.children = n.children.map(Vm)), e;
}
function sg(n = " ", e = 0) {
  return on(ru, null, n, e);
}
function Gm(n = "", e = !1) {
  return e ? (Ve(), dn(lt, null, n)) : on(lt, null, n);
}
function vt(n) {
  return n == null || typeof n == "boolean" ? on(lt) : ne(n) ? on(
    Et,
    null,
    // #3666, avoid reference pollution when reusing vnode
    n.slice()
  ) : typeof n == "object" ? ai(n) : on(ru, null, String(n));
}
function ai(n) {
  return n.el === null && n.patchFlag !== -1 || n.memo ? n : Gs(n);
}
function yl(n, e) {
  let t = 0;
  const { shapeFlag: r } = n;
  if (e == null)
    e = null;
  else if (ne(e))
    t = 16;
  else if (typeof e == "object")
    if (r & 65) {
      const s = e.default;
      s && (s._c && (s._d = !1), yl(n, s()), s._c && (s._d = !0));
      return;
    } else {
      t = 32;
      const s = e._;
      !s && !(ic in e) ? e._ctx = ot : s === 3 && ot && (ot.slots._ === 1 ? e._ = 1 : (e._ = 2, n.patchFlag |= 1024));
    }
  else
    ie(e) ? (e = { default: e, _ctx: ot }, t = 32) : (e = String(e), r & 64 ? (t = 16, e = [sg(e)]) : t = 8);
  n.children = e, n.shapeFlag |= t;
}
function og(...n) {
  const e = {};
  for (let t = 0; t < n.length; t++) {
    const r = n[t];
    for (const s in r)
      if (s === "class")
        e.class !== r.class && (e.class = el([e.class, r.class]));
      else if (s === "style")
        e.style = js([e.style, r.style]);
      else if (Qa(s)) {
        const o = e[s], u = r[s];
        u && o !== u && !(ne(o) && o.includes(u)) && (e[s] = o ? [].concat(o, u) : u);
      } else
        s !== "" && (e[s] = r[s]);
  }
  return e;
}
function Bt(n, e, t, r = null) {
  Ot(n, e, 7, [
    t,
    r
  ]);
}
const ag = Rm();
let ug = 0;
function cg(n, e, t) {
  const r = n.type, s = (e ? e.appContext : n.appContext) || ag, o = {
    uid: ug++,
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
    scope: new oh(
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
    propsOptions: Pm(r, s),
    emitsOptions: vm(r, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ve,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: ve,
    data: ve,
    props: ve,
    attrs: ve,
    slots: ve,
    refs: ve,
    setupState: ve,
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
  return o.ctx = Sp(o), o.root = e ? e.root : o, o.emit = tp.bind(null, o), n.ce && n.ce(o), o;
}
let Fe = null;
const lg = () => Fe || ot;
let _u, Kc;
{
  const n = Qc(), e = (t, r) => {
    let s;
    return (s = n[t]) || (s = n[t] = []), s.push(r), (o) => {
      s.length > 1 ? s.forEach((u) => u(o)) : s[0](o);
    };
  };
  _u = e(
    "__VUE_INSTANCE_SETTERS__",
    (t) => Fe = t
  ), Kc = e(
    "__VUE_SSR_SETTERS__",
    (t) => sc = t
  );
}
const iu = (n) => {
  const e = Fe;
  return _u(n), n.scope.on(), () => {
    n.scope.off(), _u(e);
  };
}, tf = () => {
  Fe && Fe.scope.off(), _u(null);
}, fg = /* @__PURE__ */ Yr("slot,component");
function Mc(n, { isNativeTag: e }) {
  (fg(n) || e(n)) && _(
    "Do not use built-in or reserved HTML elements as component id: " + n
  );
}
function jm(n) {
  return n.vnode.shapeFlag & 4;
}
let sc = !1;
function mg(n, e = !1) {
  e && Kc(e);
  const { props: t, children: r } = n.vnode, s = jm(n);
  Up(n, t, s, e), Gp(n, r);
  const o = s ? dg(n, e) : void 0;
  return e && Kc(!1), o;
}
function dg(n, e) {
  var t;
  const r = n.type;
  {
    if (r.name && Mc(r.name, n.appContext.config), r.components) {
      const o = Object.keys(r.components);
      for (let u = 0; u < o.length; u++)
        Mc(o[u], n.appContext.config);
    }
    if (r.directives) {
      const o = Object.keys(r.directives);
      for (let u = 0; u < o.length; u++)
        km(o[u]);
    }
    r.compilerOptions && hg() && _(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  n.accessCache = /* @__PURE__ */ Object.create(null), n.proxy = am(new Proxy(n.ctx, Am)), Ip(n);
  const { setup: s } = r;
  if (s) {
    const o = n.setupContext = s.length > 1 ? yg(n) : null, u = iu(n);
    Ws();
    const c = Hr(
      s,
      n,
      0,
      [
        ho(n.props),
        o
      ]
    );
    if (Hs(), u(), Xc(c)) {
      if (c.then(tf, tf), e)
        return c.then((f) => {
          nf(n, f, e);
        }).catch((f) => {
          eu(f, n, 0);
        });
      if (n.asyncDep = c, !n.suspense) {
        const f = (t = r.name) != null ? t : "Anonymous";
        _(
          `Component <${f}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      nf(n, c, e);
  } else
    Wm(n, e);
}
function nf(n, e, t) {
  ie(e) ? n.type.__ssrInlineRender ? n.ssrRender = e : n.render = e : Se(e) ? (gl(e) && _(
    "setup() should not return VNodes directly - return a render function instead."
  ), n.devtoolsRawSetupState = e, n.setupState = lm(e), kp(n)) : e !== void 0 && _(
    `setup() should return an object. Received: ${e === null ? "null" : typeof e}`
  ), Wm(n, t);
}
let $c;
const hg = () => !$c;
function Wm(n, e, t) {
  const r = n.type;
  if (!n.render) {
    if (!e && $c && !r.render) {
      const s = r.template || hl(n).template;
      if (s) {
        ln(n, "compile");
        const { isCustomElement: o, compilerOptions: u } = n.appContext.config, { delimiters: c, compilerOptions: f } = r, d = Ae(
          Ae(
            {
              isCustomElement: o,
              delimiters: c
            },
            u
          ),
          f
        );
        r.render = $c(s, d), fn(n, "compile");
      }
    }
    n.render = r.render || ze;
  }
  {
    const s = iu(n);
    Ws();
    try {
      Bp(n);
    } finally {
      Hs(), s();
    }
  }
  !r.render && n.render === ze && !e && (r.template ? _(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : _("Component is missing template or render function."));
}
function pg(n) {
  return n.attrsProxy || (n.attrsProxy = new Proxy(
    n.attrs,
    {
      get(e, t) {
        return Uu(), Xe(n, "get", "$attrs"), e[t];
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
function gg(n) {
  return n.slotsProxy || (n.slotsProxy = new Proxy(n.slots, {
    get(e, t) {
      return Xe(n, "get", "$slots"), e[t];
    }
  }));
}
function yg(n) {
  return Object.freeze({
    get attrs() {
      return pg(n);
    },
    get slots() {
      return gg(n);
    },
    get emit() {
      return (t, ...r) => n.emit(t, ...r);
    },
    expose: (t) => {
      if (n.exposed && _("expose() should be called only once per setup()."), t != null) {
        let r = typeof t;
        r === "object" && (ne(t) ? r = "array" : Ge(t) && (r = "ref")), r !== "object" && _(
          `expose() should be passed a plain object, received ${r}.`
        );
      }
      n.exposed = t || {};
    }
  });
}
function wl(n) {
  if (n.exposed)
    return n.exposeProxy || (n.exposeProxy = new Proxy(lm(am(n.exposed)), {
      get(e, t) {
        if (t in e)
          return e[t];
        if (t in so)
          return so[t](n);
      },
      has(e, t) {
        return t in e || t in so;
      }
    }));
}
const wg = /(?:^|[-_])(\w)/g, Tg = (n) => n.replace(wg, (e) => e.toUpperCase()).replace(/[-_]/g, "");
function Hm(n, e = !0) {
  return ie(n) ? n.displayName || n.name : n.name || e && n.__name;
}
function oc(n, e, t = !1) {
  let r = Hm(e);
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
  return r ? Tg(r) : t ? "App" : "Anonymous";
}
function zm(n) {
  return ie(n) && "__vccOpts" in n;
}
const Eg = (n, e) => {
  const t = Jh(n, e, sc);
  {
    const r = lg();
    r && r.appContext.config.warnRecursiveComputed && (t._warnRecursive = !0);
  }
  return t;
};
function vg() {
  if (typeof window > "u")
    return;
  const n = { style: "color:#3ba776" }, e = { style: "color:#1677ff" }, t = { style: "color:#f5222d" }, r = { style: "color:#eb2f96" }, s = {
    header(p) {
      return Se(p) ? p.__isVue ? ["div", n, "VueInstance"] : Ge(p) ? [
        "div",
        {},
        ["span", n, h(p)],
        "<",
        c(p.value),
        ">"
      ] : no(p) ? [
        "div",
        {},
        ["span", n, ro(p) ? "ShallowReactive" : "Reactive"],
        "<",
        c(p),
        `>${Vs(p) ? " (readonly)" : ""}`
      ] : Vs(p) ? [
        "div",
        {},
        ["span", n, ro(p) ? "ShallowReadonly" : "Readonly"],
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
    const y = [];
    p.type.props && p.props && y.push(u("props", ae(p.props))), p.setupState !== ve && y.push(u("setup", p.setupState)), p.data !== ve && y.push(u("data", ae(p.data)));
    const N = f(p, "computed");
    N && y.push(u("computed", N));
    const I = f(p, "inject");
    return I && y.push(u("injected", I)), y.push([
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
    ]), y;
  }
  function u(p, y) {
    return y = Ae({}, y), Object.keys(y).length ? [
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
        ...Object.keys(y).map((N) => [
          "div",
          {},
          ["span", r, N + ": "],
          c(y[N], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(p, y = !0) {
    return typeof p == "number" ? ["span", e, p] : typeof p == "string" ? ["span", t, JSON.stringify(p)] : typeof p == "boolean" ? ["span", r, p] : Se(p) ? ["object", { object: y ? ae(p) : p }] : ["span", t, String(p)];
  }
  function f(p, y) {
    const N = p.type;
    if (ie(N))
      return;
    const I = {};
    for (const q in p.ctx)
      d(N, q, y) && (I[q] = p.ctx[q]);
    return I;
  }
  function d(p, y, N) {
    const I = p[N];
    if (ne(I) && I.includes(y) || Se(I) && y in I || p.extends && d(p.extends, y, N) || p.mixins && p.mixins.some((q) => d(q, y, N)))
      return !0;
  }
  function h(p) {
    return ro(p) ? "ShallowRef" : p.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
const rf = "3.4.21", oo = _;
/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Ng = "http://www.w3.org/2000/svg", bg = "http://www.w3.org/1998/Math/MathML", ui = typeof document < "u" ? document : null, sf = ui && /* @__PURE__ */ ui.createElement("template"), Sg = {
  insert: (n, e, t) => {
    e.insertBefore(n, t || null);
  },
  remove: (n) => {
    const e = n.parentNode;
    e && e.removeChild(n);
  },
  createElement: (n, e, t, r) => {
    const s = e === "svg" ? ui.createElementNS(Ng, n) : e === "mathml" ? ui.createElementNS(bg, n) : ui.createElement(n, t ? { is: t } : void 0);
    return n === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s;
  },
  createText: (n) => ui.createTextNode(n),
  createComment: (n) => ui.createComment(n),
  setText: (n, e) => {
    n.nodeValue = e;
  },
  setElementText: (n, e) => {
    n.textContent = e;
  },
  parentNode: (n) => n.parentNode,
  nextSibling: (n) => n.nextSibling,
  querySelector: (n) => ui.querySelector(n),
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
      sf.innerHTML = r === "svg" ? `<svg>${n}</svg>` : r === "mathml" ? `<math>${n}</math>` : n;
      const c = sf.content;
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
}, Ig = Symbol("_vtc");
function kg(n, e, t) {
  const r = n[Ig];
  r && (e = (e ? [e, ...r] : [...r]).join(" ")), e == null ? n.removeAttribute("class") : t ? n.setAttribute("class", e) : n.className = e;
}
const of = Symbol("_vod"), Og = Symbol("_vsh"), Bg = Symbol("CSS_VAR_TEXT"), Ag = /(^|;)\s*display\s*:/;
function Jg(n, e, t) {
  const r = n.style, s = xe(t);
  let o = !1;
  if (t && !s) {
    if (e)
      if (xe(e))
        for (const u of e.split(";")) {
          const c = u.slice(0, u.indexOf(":")).trim();
          t[c] == null && ku(r, c, "");
        }
      else
        for (const u in e)
          t[u] == null && ku(r, u, "");
    for (const u in t)
      u === "display" && (o = !0), ku(r, u, t[u]);
  } else if (s) {
    if (e !== t) {
      const u = r[Bg];
      u && (t += ";" + u), r.cssText = t, o = Ag.test(t);
    }
  } else
    e && n.removeAttribute("style");
  of in n && (n[of] = o ? r.display : "", n[Og] && (r.display = "none"));
}
const Rg = /[^\\];\s*$/, af = /\s*!important$/;
function ku(n, e, t) {
  if (ne(t))
    t.forEach((r) => ku(n, e, r));
  else if (t == null && (t = ""), Rg.test(t) && oo(
    `Unexpected semicolon at the end of '${e}' style value: '${t}'`
  ), e.startsWith("--"))
    n.setProperty(e, t);
  else {
    const r = xg(n, e);
    af.test(t) ? n.setProperty(
      Ks(r),
      t.replace(af, ""),
      "important"
    ) : n[r] = t;
  }
}
const uf = ["Webkit", "Moz", "ms"], gc = {};
function xg(n, e) {
  const t = gc[e];
  if (t)
    return t;
  let r = Eo(e);
  if (r !== "filter" && r in n)
    return gc[e] = r;
  r = Yu(r);
  for (let s = 0; s < uf.length; s++) {
    const o = uf[s] + r;
    if (o in n)
      return gc[e] = o;
  }
  return e;
}
const cf = "http://www.w3.org/1999/xlink";
function Pg(n, e, t, r, s) {
  if (r && e.startsWith("xlink:"))
    t == null ? n.removeAttributeNS(cf, e.slice(6, e.length)) : n.setAttributeNS(cf, e, t);
  else {
    const o = sh(e);
    t == null || o && !Gf(t) ? n.removeAttribute(e) : n.setAttribute(e, o ? "" : t);
  }
}
function Lg(n, e, t, r, s, o, u) {
  if (e === "innerHTML" || e === "textContent") {
    r && u(r, s, o), n[e] = t ?? "";
    return;
  }
  const c = n.tagName;
  if (e === "value" && c !== "PROGRESS" && // custom elements may use _value internally
  !c.includes("-")) {
    const d = c === "OPTION" ? n.getAttribute("value") || "" : n.value, h = t ?? "";
    (d !== h || !("_value" in n)) && (n.value = h), t == null && n.removeAttribute(e), n._value = t;
    return;
  }
  let f = !1;
  if (t === "" || t == null) {
    const d = typeof n[e];
    d === "boolean" ? t = Gf(t) : t == null && d === "string" ? (t = "", f = !0) : d === "number" && (t = 0, f = !0);
  }
  try {
    n[e] = t;
  } catch (d) {
    f || oo(
      `Failed setting prop "${e}" on <${c.toLowerCase()}>: value ${t} is invalid.`,
      d
    );
  }
  f && n.removeAttribute(e);
}
function Cg(n, e, t, r) {
  n.addEventListener(e, t, r);
}
function Ug(n, e, t, r) {
  n.removeEventListener(e, t, r);
}
const lf = Symbol("_vei");
function qg(n, e, t, r, s = null) {
  const o = n[lf] || (n[lf] = {}), u = o[e];
  if (r && u)
    u.value = r;
  else {
    const [c, f] = Dg(e);
    if (r) {
      const d = o[e] = Kg(r, s);
      Cg(n, c, d, f);
    } else
      u && (Ug(n, c, u, f), o[e] = void 0);
  }
}
const ff = /(?:Once|Passive|Capture)$/;
function Dg(n) {
  let e;
  if (ff.test(n)) {
    e = {};
    let r;
    for (; r = n.match(ff); )
      n = n.slice(0, n.length - r[0].length), e[r[0].toLowerCase()] = !0;
  }
  return [n[2] === ":" ? n.slice(3) : Ks(n.slice(2)), e];
}
let yc = 0;
const Fg = /* @__PURE__ */ Promise.resolve(), _g = () => yc || (Fg.then(() => yc = 0), yc = Date.now());
function Kg(n, e) {
  const t = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= t.attached)
      return;
    Ot(
      Mg(r, t.value),
      e,
      5,
      [r]
    );
  };
  return t.value = n, t.attached = _g(), t;
}
function Mg(n, e) {
  if (ne(e)) {
    const t = n.stopImmediatePropagation;
    return n.stopImmediatePropagation = () => {
      t.call(n), n._stopped = !0;
    }, e.map((r) => (s) => !s._stopped && r && r(s));
  } else
    return e;
}
const mf = (n) => n.charCodeAt(0) === 111 && n.charCodeAt(1) === 110 && // lowercase letter
n.charCodeAt(2) > 96 && n.charCodeAt(2) < 123, $g = (n, e, t, r, s, o, u, c, f) => {
  const d = s === "svg";
  e === "class" ? kg(n, r, d) : e === "style" ? Jg(n, t, r) : Qa(e) ? xu(e) || qg(n, e, t, r, u) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : Vg(n, e, r, d)) ? Lg(
    n,
    e,
    r,
    o,
    u,
    c,
    f
  ) : (e === "true-value" ? n._trueValue = r : e === "false-value" && (n._falseValue = r), Pg(n, e, r, d));
};
function Vg(n, e, t, r) {
  if (r)
    return !!(e === "innerHTML" || e === "textContent" || e in n && mf(e) && ie(t));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "form" || e === "list" && n.tagName === "INPUT" || e === "type" && n.tagName === "TEXTAREA")
    return !1;
  if (e === "width" || e === "height") {
    const s = n.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return mf(e) && xe(t) ? !1 : e in n;
}
const Gg = /* @__PURE__ */ Ae({ patchProp: $g }, Sg);
let df;
function jg() {
  return df || (df = Hp(Gg));
}
const Xm = (...n) => {
  const e = jg().createApp(...n);
  Hg(e), zg(e);
  const { mount: t } = e;
  return e.mount = (r) => {
    const s = Xg(r);
    if (!s)
      return;
    const o = e._component;
    !ie(o) && !o.render && !o.template && (o.template = s.innerHTML), s.innerHTML = "";
    const u = t(s, !1, Wg(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), u;
  }, e;
};
function Wg(n) {
  if (n instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && n instanceof MathMLElement)
    return "mathml";
}
function Hg(n) {
  Object.defineProperty(n.config, "isNativeTag", {
    value: (e) => th(e) || nh(e) || rh(e),
    writable: !1
  });
}
function zg(n) {
  {
    const e = n.config.isCustomElement;
    Object.defineProperty(n.config, "isCustomElement", {
      get() {
        return e;
      },
      set() {
        oo(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const t = n.config.compilerOptions, r = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(n.config, "compilerOptions", {
      get() {
        return oo(r), t;
      },
      set() {
        oo(r);
      }
    });
  }
}
function Xg(n) {
  if (xe(n)) {
    const e = document.querySelector(n);
    return e || oo(
      `Failed to mount app: mount target selector "${n}" returned null.`
    ), e;
  }
  return window.ShadowRoot && n instanceof window.ShadowRoot && n.mode === "closed" && oo(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), n;
}
/**
* vue v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Yg() {
  vg();
}
Yg();
const Zg = (n) => new Error(`Unknown element type: ${n}`), Qg = () => new Error("invalid size"), Ym = () => new Error("destination is required"), Zm = () => new Error("amount is required"), Qm = () => new Error("currency is required"), ey = () => new Error("invalid currency"), Vo = () => new Error("unexpected error"), ty = () => new Error("cannot derive nonce from both clientSecret and idempotencyKey"), ny = () => new Error("invalid value"), ed = () => new Error("invalid mode"), Tl = () => new Error("login is required"), Go = () => new Error("login verifier is required"), El = () => new Error("login domain is required"), ry = () => new Error("invalid login domain"), iy = () => new Error("login subdomains are not supported"), sy = () => new Error("login IP addresses are not supported"), oy = () => new Error("login localhost is not supported"), ay = () => new Error("login ports are not supported"), hf = () => new Error("login expected domain name but received a path"), td = () => new Error("platform is required"), nd = () => new Error("expected platform name"), rd = () => new Error("expected username");
function Qe(n, e) {
  if (!n)
    throw new Error(e);
}
const uy = 34028234663852886e22, cy = -34028234663852886e22, ly = 4294967295, fy = 2147483647, my = -2147483648;
function Ou(n) {
  if (typeof n != "number")
    throw new Error("invalid int 32: " + typeof n);
  if (!Number.isInteger(n) || n > fy || n < my)
    throw new Error("invalid int 32: " + n);
}
function Vc(n) {
  if (typeof n != "number")
    throw new Error("invalid uint 32: " + typeof n);
  if (!Number.isInteger(n) || n > ly || n < 0)
    throw new Error("invalid uint 32: " + n);
}
function id(n) {
  if (typeof n != "number")
    throw new Error("invalid float 32: " + typeof n);
  if (Number.isFinite(n) && (n > uy || n < cy))
    throw new Error("invalid float 32: " + n);
}
const sd = Symbol("@bufbuild/protobuf/enum-type");
function dy(n) {
  const e = n[sd];
  return Qe(e, "missing enum type on enum object"), e;
}
function od(n, e, t, r) {
  n[sd] = ad(e, t.map((s) => ({
    no: s.no,
    name: s.name,
    localName: n[s.no]
  })));
}
function ad(n, e, t) {
  const r = /* @__PURE__ */ Object.create(null), s = /* @__PURE__ */ Object.create(null), o = [];
  for (const u of e) {
    const c = ud(u);
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
function hy(n, e, t) {
  const r = {};
  for (const s of e) {
    const o = ud(s);
    r[o.localName] = o.no, r[o.no] = o.localName;
  }
  return od(r, n, e), r;
}
function ud(n) {
  return "localName" in n ? n : Object.assign(Object.assign({}, n), { localName: n.name });
}
let T = class {
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
function py(n, e, t, r) {
  var s;
  const o = (s = r == null ? void 0 : r.localName) !== null && s !== void 0 ? s : e.substring(e.lastIndexOf(".") + 1), u = {
    [o]: function(c) {
      n.util.initFields(this), n.util.initPartial(c, this);
    }
  }[o];
  return Object.setPrototypeOf(u.prototype, new T()), Object.assign(u, {
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
var uo;
(function(n) {
  n[n.BIGINT = 0] = "BIGINT", n[n.STRING = 1] = "STRING";
})(uo || (uo = {}));
function gy() {
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
function wc(n, e, t) {
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
const Bu = 4294967296;
function pf(n) {
  const e = n[0] === "-";
  e && (n = n.slice(1));
  const t = 1e6;
  let r = 0, s = 0;
  function o(u, c) {
    const f = Number(n.slice(u, c));
    s *= t, r = r * t + f, r >= Bu && (s = s + (r / Bu | 0), r = r % Bu);
  }
  return o(-24, -18), o(-18, -12), o(-12, -6), o(-6), e ? ld(r, s) : vl(r, s);
}
function yy(n, e) {
  let t = vl(n, e);
  const r = t.hi & 2147483648;
  r && (t = ld(t.lo, t.hi));
  const s = cd(t.lo, t.hi);
  return r ? "-" + s : s;
}
function cd(n, e) {
  if ({ lo: n, hi: e } = wy(n, e), e <= 2097151)
    return String(Bu * e + n);
  const t = n & 16777215, r = (n >>> 24 | e << 8) & 16777215, s = e >> 16 & 65535;
  let o = t + r * 6777216 + s * 6710656, u = r + s * 8147497, c = s * 2;
  const f = 1e7;
  return o >= f && (u += Math.floor(o / f), o %= f), u >= f && (c += Math.floor(u / f), u %= f), c.toString() + gf(u) + gf(o);
}
function wy(n, e) {
  return { lo: n >>> 0, hi: e >>> 0 };
}
function vl(n, e) {
  return { lo: n | 0, hi: e | 0 };
}
function ld(n, e) {
  return e = ~e, n ? n = ~n + 1 : e += 1, vl(n, e);
}
const gf = (n) => {
  const e = String(n);
  return "0000000".slice(e.length) + e;
};
function yf(n, e) {
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
function Ty() {
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
function Ey() {
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
      return typeof r != "string" && (r = r.toString()), e(r), pf(r);
    },
    uEnc(r) {
      return typeof r != "string" && (r = r.toString()), t(r), pf(r);
    },
    dec(r, s) {
      return yy(r, s);
    },
    uDec(r, s) {
      return cd(r, s);
    }
  };
}
const ce = Ey();
var be;
(function(n) {
  n[n.Varint = 0] = "Varint", n[n.Bit64 = 1] = "Bit64", n[n.LengthDelimited = 2] = "LengthDelimited", n[n.StartGroup = 3] = "StartGroup", n[n.EndGroup = 4] = "EndGroup", n[n.Bit32 = 5] = "Bit32";
})(be || (be = {}));
class vy {
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
    for (Vc(e); e > 127; )
      this.buf.push(e & 127 | 128), e = e >>> 7;
    return this.buf.push(e), this;
  }
  /**
   * Write a `int32` value, a signed 32 bit varint.
   */
  int32(e) {
    return Ou(e), yf(e, this.buf), this;
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
    id(e);
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
    Vc(e);
    let t = new Uint8Array(4);
    return new DataView(t.buffer).setUint32(0, e, !0), this.raw(t);
  }
  /**
   * Write a `sfixed32` value, a signed, fixed-length 32-bit integer.
   */
  sfixed32(e) {
    Ou(e);
    let t = new Uint8Array(4);
    return new DataView(t.buffer).setInt32(0, e, !0), this.raw(t);
  }
  /**
   * Write a `sint32` value, a signed, zigzag-encoded 32-bit varint.
   */
  sint32(e) {
    return Ou(e), e = (e << 1 ^ e >> 31) >>> 0, yf(e, this.buf), this;
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
    return wc(t.lo, t.hi, this.buf), this;
  }
  /**
   * Write a `sint64` value, a signed, zig-zag-encoded 64-bit varint.
   */
  sint64(e) {
    let t = ce.enc(e), r = t.hi >> 31, s = t.lo << 1 ^ r, o = (t.hi << 1 | t.lo >>> 31) ^ r;
    return wc(s, o, this.buf), this;
  }
  /**
   * Write a `uint64` value, an unsigned 64-bit varint.
   */
  uint64(e) {
    let t = ce.uEnc(e);
    return wc(t.lo, t.hi, this.buf), this;
  }
}
class Ny {
  constructor(e, t) {
    this.varint64 = gy, this.uint32 = Ty, this.buf = e, this.len = e.length, this.pos = 0, this.view = new DataView(e.buffer, e.byteOffset, e.byteLength), this.textDecoder = t ?? new TextDecoder();
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
function ei(n, e, t) {
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
function Ku(n, e) {
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
function fd(n, e) {
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
function by(n, e, t, r) {
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
function md(n) {
  const e = n.field.localName, t = /* @__PURE__ */ Object.create(null);
  return t[e] = Sy(n), [t, () => t[e]];
}
function Sy(n) {
  const e = n.field;
  if (e.repeated)
    return [];
  if (e.default !== void 0)
    return e.default;
  switch (e.kind) {
    case "enum":
      return e.T.values[0].no;
    case "scalar":
      return Ku(e.T, e.L);
    case "message":
      const t = e.T, r = new t();
      return t.fieldWrapper ? t.fieldWrapper.unwrapField(r) : r;
    case "map":
      throw "map fields are not allowed to be extensions";
  }
}
function Iy(n, e) {
  if (!e.repeated && (e.kind == "enum" || e.kind == "scalar")) {
    for (let t = n.length - 1; t >= 0; --t)
      if (n[t].no == e.no)
        return [n[t]];
    return [];
  }
  return n.filter((t) => t.no === e.no);
}
function ky(n, e, t, r) {
  return {
    syntax: n,
    json: e,
    bin: t,
    util: r,
    makeMessageType(s, o, u) {
      return py(this, s, o, u);
    },
    makeEnum: hy,
    makeEnumType: ad,
    getEnumType: dy,
    makeExtension(s, o, u) {
      return by(this, s, o, u);
    }
  };
}
function dd(n, e) {
  return e instanceof T || !n.fieldWrapper ? e : n.fieldWrapper.wrapField(e);
}
B.DOUBLE, B.FLOAT, B.INT64, B.UINT64, B.INT32, B.UINT32, B.BOOL, B.STRING, B.BYTES;
const lo = Symbol("@bufbuild/protobuf/unknown-fields"), wf = {
  readUnknownFields: !0,
  readerFactory: (n) => new Ny(n)
}, Tf = {
  writeUnknownFields: !0,
  writerFactory: () => new vy()
};
function Oy(n) {
  return n ? Object.assign(Object.assign({}, wf), n) : wf;
}
function By(n) {
  return n ? Object.assign(Object.assign({}, Tf), n) : Tf;
}
function Ay() {
  return {
    makeReadOptions: Oy,
    makeWriteOptions: By,
    listUnknownFields(n) {
      var e;
      return (e = n[lo]) !== null && e !== void 0 ? e : [];
    },
    discardUnknownFields(n) {
      delete n[lo];
    },
    writeUnknownFields(n, e) {
      const t = n[lo];
      if (t)
        for (const r of t)
          e.tag(r.no, r.wireType).raw(r.data);
    },
    onUnknownField(n, e, t, r) {
      const s = n;
      Array.isArray(s[lo]) || (s[lo] = []), s[lo].push({ no: e, wireType: t, data: r });
    },
    readMessage(n, e, t, r, s) {
      const o = n.getType(), u = s ? e.len : e.pos + t;
      let c, f;
      for (; e.pos < u && ([c, f] = e.tag(), f != be.EndGroup); ) {
        const d = o.fields.find(c);
        if (!d) {
          const h = e.skip(f);
          r.readUnknownFields && this.onUnknownField(n, c, f, h);
          continue;
        }
        Ef(n, e, d, f, r);
      }
      if (s && // eslint-disable-line @typescript-eslint/strict-boolean-expressions
      (f != be.EndGroup || c !== t))
        throw new Error("invalid end group tag");
    },
    readField: Ef
  };
}
function Ef(n, e, t, r, s) {
  let { repeated: o, localName: u } = t;
  switch (t.oneof && (n = n[t.oneof.localName], n.case != u && delete n.value, n.case = u, u = "value"), t.kind) {
    case "scalar":
    case "enum":
      const c = t.kind == "enum" ? B.INT32 : t.T;
      let f = Mu;
      if (t.kind == "scalar" && t.L > 0 && (f = Ry), o) {
        let y = n[u];
        if (r == be.LengthDelimited && c != B.STRING && c != B.BYTES) {
          let N = e.uint32() + e.pos;
          for (; e.pos < N; )
            y.push(f(e, c));
        } else
          y.push(f(e, c));
      } else
        n[u] = f(e, c);
      break;
    case "message":
      const d = t.T;
      o ? n[u].push(Au(e, new d(), s, t)) : n[u] instanceof T ? Au(e, n[u], s, t) : (n[u] = Au(e, new d(), s, t), d.fieldWrapper && !t.oneof && !t.repeated && (n[u] = d.fieldWrapper.unwrapField(n[u])));
      break;
    case "map":
      let [h, p] = Jy(t, e, s);
      n[u][h] = p;
      break;
  }
}
function Au(n, e, t, r) {
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
function Jy(n, e, t) {
  const r = e.uint32(), s = e.pos + r;
  let o, u;
  for (; e.pos < s; ) {
    let [c] = e.tag();
    switch (c) {
      case 1:
        o = Mu(e, n.K);
        break;
      case 2:
        switch (n.V.kind) {
          case "scalar":
            u = Mu(e, n.V.T);
            break;
          case "enum":
            u = e.int32();
            break;
          case "message":
            u = Au(e, new n.V.T(), t, void 0);
            break;
        }
        break;
    }
  }
  if (o === void 0) {
    let c = Ku(n.K, uo.BIGINT);
    o = n.K == B.BOOL ? c.toString() : c;
  }
  if (typeof o != "string" && typeof o != "number" && (o = o.toString()), u === void 0)
    switch (n.V.kind) {
      case "scalar":
        u = Ku(n.V.T, uo.BIGINT);
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
function Ry(n, e) {
  const t = Mu(n, e);
  return typeof t == "bigint" ? t.toString() : t;
}
function Mu(n, e) {
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
function xy(n, e, t, r, s) {
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
  switch (Do(n, t.K, 1, o, !0), t.V.kind) {
    case "scalar":
      Do(n, t.V.T, 2, s, !0);
      break;
    case "enum":
      Do(n, B.INT32, 2, s, !0);
      break;
    case "message":
      n.tag(2, be.LengthDelimited).bytes(s.toBinary(e));
      break;
  }
  n.join();
}
function vf(n, e, t, r) {
  const s = dd(t.T, r);
  t != null && t.delimited ? n.tag(t.no, be.StartGroup).raw(s.toBinary(e)).tag(t.no, be.EndGroup) : n.tag(t.no, be.LengthDelimited).bytes(s.toBinary(e));
}
function Do(n, e, t, r, s) {
  let [o, u, c] = fd(e, r);
  (!c || s) && n.tag(t, o)[u](r);
}
function Py(n, e, t, r) {
  if (!r.length)
    return;
  n.tag(t, be.LengthDelimited).fork();
  let [, s] = fd(e);
  for (let o = 0; o < r.length; o++)
    n[s](r[o]);
  n.join();
}
function Ly() {
  return Object.assign(Object.assign({}, Ay()), {
    writeField: Nf,
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
        Nf(s, o, e, t);
      }
      return t.writeUnknownFields && this.writeUnknownFields(n, e), e;
    }
  });
}
function Nf(n, e, t, r) {
  const s = n.repeated;
  switch (n.kind) {
    case "scalar":
    case "enum":
      let o = n.kind == "enum" ? B.INT32 : n.T;
      if (s)
        if (n.packed)
          Py(t, o, n.no, e);
        else
          for (const u of e)
            Do(t, o, n.no, u, !0);
      else
        e !== void 0 && Do(t, o, n.no, e, !!n.oneof || n.opt);
      break;
    case "message":
      if (s)
        for (const u of e)
          vf(t, r, n, u);
      else
        e !== void 0 && vf(t, r, n, e);
      break;
    case "map":
      for (const [u, c] of Object.entries(e))
        xy(t, r, n, u, c);
      break;
  }
}
let hn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), ac = [];
for (let n = 0; n < hn.length; n++)
  ac[hn[n].charCodeAt(0)] = n;
ac["-".charCodeAt(0)] = hn.indexOf("+");
ac["_".charCodeAt(0)] = hn.indexOf("/");
const hd = {
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
      if (o = ac[n.charCodeAt(c)], o === void 0)
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
          e += hn[r >> 2], s = (r & 3) << 4, t = 1;
          break;
        case 1:
          e += hn[s | r >> 4], s = (r & 15) << 2, t = 2;
          break;
        case 2:
          e += hn[s | r >> 6], e += hn[r & 63], t = 0;
          break;
      }
    return t && (e += hn[s], e += "=", t == 1 && (e += "=")), e;
  }
};
function Cy(n, e, t) {
  gd(e, n);
  const r = e.runtime.bin.makeReadOptions(t), s = Iy(n.getType().runtime.bin.listUnknownFields(n), e.field), [o, u] = md(e);
  for (const c of s)
    e.runtime.bin.readField(o, r.readerFactory(c.data), e.field, c.wireType, r);
  return u();
}
function Uy(n, e, t, r) {
  gd(e, n);
  const s = e.runtime.bin.makeReadOptions(r), o = e.runtime.bin.makeWriteOptions(r);
  if (pd(n, e)) {
    const d = n.getType().runtime.bin.listUnknownFields(n).filter((h) => h.no != e.field.no);
    n.getType().runtime.bin.discardUnknownFields(n);
    for (const h of d)
      n.getType().runtime.bin.onUnknownField(n, h.no, h.wireType, h.data);
  }
  const u = o.writerFactory();
  let c = e.field;
  !c.opt && !c.repeated && (c.kind == "enum" || c.kind == "scalar") && (c = Object.assign(Object.assign({}, e.field), { opt: !0 })), e.runtime.bin.writeField(c, t, u, o);
  const f = s.readerFactory(u.finish());
  for (; f.pos < f.len; ) {
    const [d, h] = f.tag(), p = f.skip(h);
    n.getType().runtime.bin.onUnknownField(n, d, h, p);
  }
}
function pd(n, e) {
  const t = n.getType();
  return e.extendee.typeName === t.typeName && !!t.runtime.bin.listUnknownFields(n).find((r) => r.no == e.field.no);
}
function gd(n, e) {
  Qe(n.extendee.typeName == e.getType().typeName, `extension ${n.typeName} can only be applied to message ${n.extendee.typeName}`);
}
const bf = {
  ignoreUnknownFields: !1
}, Sf = {
  emitDefaultValues: !1,
  enumAsInteger: !1,
  useProtoFieldName: !1,
  prettySpaces: 0
};
function qy(n) {
  return n ? Object.assign(Object.assign({}, bf), n) : bf;
}
function Dy(n) {
  return n ? Object.assign(Object.assign({}, Sf), n) : Sf;
}
function Fy(n, e) {
  const t = e(_y, kf);
  return {
    makeReadOptions: qy,
    makeWriteOptions: Dy,
    readMessage(r, s, o, u) {
      if (s == null || Array.isArray(s) || typeof s != "object")
        throw new Error(`cannot decode message ${r.typeName} from JSON: ${xt(s)}`);
      u = u ?? new r();
      const c = /* @__PURE__ */ new Map(), f = o.typeRegistry;
      for (const [d, h] of Object.entries(s)) {
        const p = r.fields.findJsonName(d);
        if (p) {
          if (p.oneof) {
            if (h === null && p.kind == "scalar")
              continue;
            const y = c.get(p.oneof);
            if (y !== void 0)
              throw new Error(`cannot decode message ${r.typeName} from JSON: multiple keys for oneof "${p.oneof.name}" present: "${y}", "${d}"`);
            c.set(p.oneof, d);
          }
          If(u, h, p, o, r, n);
        } else {
          let y = !1;
          if (f != null && f.findExtension && d.startsWith("[") && d.endsWith("]")) {
            const N = f.findExtension(d.substring(1, d.length - 1));
            if (N && N.extendee.typeName == r.typeName) {
              y = !0;
              const [I, q] = md(N);
              If(I, h, N.field, o, N, !0), Uy(u, N, q(), o);
            }
          }
          if (!y && !o.ignoreUnknownFields)
            throw new Error(`cannot decode message ${r.typeName} from JSON: key "${d}" is unknown`);
        }
      }
      return u;
    },
    writeMessage(r, s) {
      const o = r.getType(), u = {};
      let c;
      try {
        for (const d of o.fields.byMember()) {
          let h;
          if (d.kind == "oneof") {
            const p = r[d.localName];
            if (p.value === void 0)
              continue;
            if (c = d.findField(p.case), !c)
              throw "oneof case not found: " + p.case;
            h = t(c, p.value, s);
          } else
            c = d, h = t(c, r[c.localName], s);
          h !== void 0 && (u[s.useProtoFieldName ? c.name : c.jsonName] = h);
        }
        const f = s.typeRegistry;
        if (f != null && f.findExtensionFor)
          for (const d of o.runtime.bin.listUnknownFields(r)) {
            const h = f.findExtensionFor(o.typeName, d.no);
            if (h && pd(r, h)) {
              const p = Cy(r, h, s), y = t(h.field, p, s);
              y !== void 0 && (u[h.field.jsonName] = y);
            }
          }
      } catch (f) {
        const d = c ? `cannot encode field ${o.typeName}.${c.name} to JSON` : `cannot encode message ${o.typeName} to JSON`, h = f instanceof Error ? f.message : String(f);
        throw new Error(d + (h.length > 0 ? `: ${h}` : ""));
      }
      return u;
    },
    readScalar: (r, s, o) => Jo(r, s, o, n),
    // eslint-disable-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-return
    writeScalar: kf,
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
function If(n, e, t, r, s, o) {
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
      let d;
      switch (t.kind) {
        case "message":
          d = t.T.fromJson(f, r);
          break;
        case "enum":
          if (d = Tc(t.T, f, r.ignoreUnknownFields, !0), d === void 0)
            continue;
          break;
        case "scalar":
          try {
            d = Jo(t.T, f, t.L, !0);
          } catch (h) {
            let p = `cannot decode field ${s.typeName}.${t.name} from JSON: ${xt(f)}`;
            throw h instanceof Error && h.message.length > 0 && (p += `: ${h.message}`), new Error(p);
          }
          break;
      }
      c.push(d);
    }
  } else if (t.kind == "map") {
    if (e === null)
      return;
    if (typeof e != "object" || Array.isArray(e))
      throw new Error(`cannot decode field ${s.typeName}.${t.name} from JSON: ${xt(e)}`);
    const c = n[u];
    for (const [f, d] of Object.entries(e)) {
      if (d === null)
        throw new Error(`cannot decode field ${s.typeName}.${t.name} from JSON: map value null`);
      let h;
      switch (t.V.kind) {
        case "message":
          h = t.V.T.fromJson(d, r);
          break;
        case "enum":
          if (h = Tc(t.V.T, d, r.ignoreUnknownFields, !0), h === void 0)
            continue;
          break;
        case "scalar":
          try {
            h = Jo(t.V.T, d, uo.BIGINT, !0);
          } catch (p) {
            let y = `cannot decode map value for field ${s.typeName}.${t.name} from JSON: ${xt(e)}`;
            throw p instanceof Error && p.message.length > 0 && (y += `: ${p.message}`), new Error(y);
          }
          break;
      }
      try {
        c[Jo(t.K, t.K == B.BOOL ? f == "true" ? !0 : f == "false" ? !1 : f : f, uo.BIGINT, !0).toString()] = h;
      } catch (p) {
        let y = `cannot decode map key for field ${s.typeName}.${t.name} from JSON: ${xt(e)}`;
        throw p instanceof Error && p.message.length > 0 && (y += `: ${p.message}`), new Error(y);
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
        n[u] instanceof T ? n[u].fromJson(e, r) : (n[u] = c.fromJson(e, r), c.fieldWrapper && !t.oneof && (n[u] = c.fieldWrapper.unwrapField(n[u])));
        break;
      case "enum":
        const f = Tc(t.T, e, r.ignoreUnknownFields, o);
        f !== void 0 && (n[u] = f);
        break;
      case "scalar":
        try {
          n[u] = Jo(t.T, e, t.L, o);
        } catch (d) {
          let h = `cannot decode field ${s.typeName}.${t.name} from JSON: ${xt(e)}`;
          throw d instanceof Error && d.message.length > 0 && (h += `: ${d.message}`), new Error(h);
        }
        break;
    }
}
function Jo(n, e, t, r) {
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
      return n == B.FLOAT && id(s), s;
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
      return n == B.UINT32 ? Vc(o) : Ou(o), o;
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
      return hd.dec(e);
  }
  throw new Error();
}
function Tc(n, e, t, r) {
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
function _y(n, e, t, r) {
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
function kf(n, e, t) {
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
        return Qe(e instanceof Uint8Array), t || e.byteLength > 0 ? hd.enc(e) : void 0;
    }
}
function Ky() {
  return Fy(!0, (n, e) => function(t, r, s) {
    if (t.kind == "map") {
      const o = {};
      switch (t.V.kind) {
        case "scalar":
          for (const [c, f] of Object.entries(r)) {
            const d = e(t.V.T, f, !0);
            Qe(d !== void 0), o[c.toString()] = d;
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
            const d = n(u, f, !0, s.enumAsInteger);
            Qe(d !== void 0), o[c.toString()] = d;
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
          return dd(t.T, r).toJson(s);
      }
    }
  });
}
function My() {
  return {
    setEnumType: od,
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
              let d = u[s].value;
              f && f.kind == "message" && !(d instanceof f.T) ? d = new f.T(d) : f && f.kind === "scalar" && f.T === B.BYTES && (d = Oo(d)), o[s] = { case: c, value: d };
              break;
            case "scalar":
            case "enum":
              let h = u[s];
              r.T === B.BYTES && (h = r.repeated ? h.map(Oo) : Oo(h)), o[s] = h;
              break;
            case "map":
              switch (r.V.kind) {
                case "scalar":
                case "enum":
                  if (r.V.T === B.BYTES)
                    for (const [N, I] of Object.entries(u[s]))
                      o[s][N] = Oo(I);
                  else
                    Object.assign(o[s], u[s]);
                  break;
                case "message":
                  const y = r.V.T;
                  for (const N of Object.keys(u[s])) {
                    let I = u[s][N];
                    y.fieldWrapper || (I = new y(I)), o[s][N] = I;
                  }
                  break;
              }
              break;
            case "message":
              const p = r.T;
              if (r.repeated)
                o[s] = u[s].map((y) => y instanceof p ? y : new p(y));
              else if (u[s] !== void 0) {
                const y = u[s];
                p.fieldWrapper ? (
                  /* We can't use BytesValue.typeName as that will create a circular import */
                  p.typeName === "google.protobuf.BytesValue" ? o[s] = Oo(y) : o[s] = y
                ) : o[s] = y instanceof p ? y : new p(y);
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
              return s.every((u, c) => ei(r.T, u, o[c]));
            case "enum":
              return s.every((u, c) => ei(B.INT32, u, o[c]));
          }
          throw new Error(`repeated cannot contain ${r.kind}`);
        }
        switch (r.kind) {
          case "message":
            return r.T.equals(s, o);
          case "enum":
            return ei(B.INT32, s, o);
          case "scalar":
            return ei(r.T, s, o);
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
                return ei(B.INT32, s.value, o.value);
              case "scalar":
                return ei(u.T, s.value, o.value);
            }
            throw new Error(`oneof cannot contain ${u.kind}`);
          case "map":
            const c = Object.keys(s).concat(Object.keys(o));
            switch (r.V.kind) {
              case "message":
                const f = r.V.T;
                return c.every((h) => f.equals(s[h], o[h]));
              case "enum":
                return c.every((h) => ei(B.INT32, s[h], o[h]));
              case "scalar":
                const d = r.V.T;
                return c.every((h) => ei(d, s[h], o[h]));
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
          u = o.map(yu);
        else if (s.kind == "map") {
          u = r[s.localName];
          for (const [c, f] of Object.entries(o))
            u[c] = yu(f);
        } else
          s.kind == "oneof" ? u = s.findField(o.case) ? { case: o.case, value: yu(o.value) } : { case: void 0 } : u = yu(o);
        r[s.localName] = u;
      }
      return t;
    }
  };
}
function yu(n) {
  if (n === void 0)
    return n;
  if (n instanceof T)
    return n.clone();
  if (n instanceof Uint8Array) {
    const e = new Uint8Array(n.byteLength);
    return e.set(n), e;
  }
  return n;
}
function Oo(n) {
  return n instanceof Uint8Array ? n : new Uint8Array(n);
}
class $y {
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
function yd(n, e) {
  const t = wd(n);
  return e ? t : zy(Hy(t));
}
function Vy(n) {
  return yd(n, !1);
}
const Gy = wd;
function wd(n) {
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
const jy = /* @__PURE__ */ new Set([
  // names reserved by JavaScript
  "constructor",
  "toString",
  "toJSON",
  "valueOf"
]), Wy = /* @__PURE__ */ new Set([
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
]), Td = (n) => `${n}$`, Hy = (n) => Wy.has(n) ? Td(n) : n, zy = (n) => jy.has(n) ? Td(n) : n;
class Xy {
  constructor(e) {
    this.kind = "oneof", this.repeated = !1, this.packed = !1, this.opt = !1, this.default = void 0, this.fields = [], this.name = e, this.localName = Vy(e);
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
const i = ky("proto3", Ky(), Ly(), Object.assign(Object.assign({}, My()), {
  newFieldList(n) {
    return new $y(n, Yy);
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
          r[t] = Ku(e.T, e.L);
          break;
      }
    }
  }
}));
function Yy(n) {
  var e, t, r, s;
  const o = [];
  let u;
  for (const c of typeof n == "function" ? n() : n) {
    const f = c;
    if (f.localName = yd(c.name, c.oneof !== void 0), f.jsonName = (e = c.jsonName) !== null && e !== void 0 ? e : Gy(c.name), f.repeated = (t = c.repeated) !== null && t !== void 0 ? t : !1, c.kind == "scalar" && (f.L = (r = c.L) !== null && r !== void 0 ? r : uo.BIGINT), c.oneof !== void 0) {
      const d = typeof c.oneof == "string" ? c.oneof : c.oneof.name;
      (!u || u.name != d) && (u = new Xy(d)), f.oneof = u, u.addField(f);
    }
    c.kind == "message" && (f.delimited = !1), f.packed = (s = c.packed) !== null && s !== void 0 ? s : c.kind == "enum" || c.kind == "scalar" && c.T != B.BYTES && c.T != B.STRING, o.push(f);
  }
  return o;
}
var ee;
(function(n) {
  n[n.Unary = 0] = "Unary", n[n.ServerStreaming = 1] = "ServerStreaming", n[n.ClientStreaming = 2] = "ClientStreaming", n[n.BiDiStreaming = 3] = "BiDiStreaming";
})(ee || (ee = {}));
var Of;
(function(n) {
  n[n.NoSideEffects = 1] = "NoSideEffects", n[n.Idempotent = 2] = "Idempotent";
})(Of || (Of = {}));
class Je extends T {
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
    return Je.fromDate(/* @__PURE__ */ new Date());
  }
  static fromDate(e) {
    const t = e.getTime();
    return new Je({
      seconds: ce.parse(Math.floor(t / 1e3)),
      nanos: t % 1e3 * 1e6
    });
  }
  static fromBinary(e, t) {
    return new Je().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Je().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Je().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Je, e, t);
  }
}
Je.runtime = i;
Je.typeName = "google.protobuf.Timestamp";
Je.fields = i.util.newFieldList(() => [
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
class pn extends T {
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
pn.typeName = "google.protobuf.Duration";
pn.fields = i.util.newFieldList(() => [
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
var ft;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.PRIMARY = 1] = "PRIMARY", n[n.TEMPORARY_INCOMING = 2] = "TEMPORARY_INCOMING", n[n.TEMPORARY_OUTGOING = 3] = "TEMPORARY_OUTGOING", n[n.BUCKET_1_KIN = 4] = "BUCKET_1_KIN", n[n.BUCKET_10_KIN = 5] = "BUCKET_10_KIN", n[n.BUCKET_100_KIN = 6] = "BUCKET_100_KIN", n[n.BUCKET_1_000_KIN = 7] = "BUCKET_1_000_KIN", n[n.BUCKET_10_000_KIN = 8] = "BUCKET_10_000_KIN", n[n.BUCKET_100_000_KIN = 9] = "BUCKET_100_000_KIN", n[n.BUCKET_1_000_000_KIN = 10] = "BUCKET_1_000_000_KIN", n[n.LEGACY_PRIMARY_2022 = 11] = "LEGACY_PRIMARY_2022", n[n.REMOTE_SEND_GIFT_CARD = 12] = "REMOTE_SEND_GIFT_CARD", n[n.RELATIONSHIP = 13] = "RELATIONSHIP", n[n.SWAP = 14] = "SWAP";
})(ft || (ft = {}));
i.util.setEnumType(ft, "code.common.v1.AccountType", [
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
class R extends T {
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
class gn extends T {
  constructor(e) {
    super(), this.isSigner = !1, this.isWritable = !1, i.util.initPartial(e, this);
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
gn.typeName = "code.common.v1.InstructionAccount";
gn.fields = i.util.newFieldList(() => [
  { no: 1, name: "account", kind: "message", T: R },
  { no: 2, name: "is_signer", kind: "scalar", T: 8 },
  { no: 3, name: "is_writable", kind: "scalar", T: 8 }
]);
class Ut extends T {
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
class qt extends T {
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
class Q extends T {
  constructor(e) {
    super(), this.value = new Uint8Array(0), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Q().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Q().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Q().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Q, e, t);
  }
}
Q.runtime = i;
Q.typeName = "code.common.v1.Signature";
Q.fields = i.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class Ue extends T {
  constructor(e) {
    super(), this.value = new Uint8Array(0), i.util.initPartial(e, this);
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
Ue.typeName = "code.common.v1.IntentId";
Ue.fields = i.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class ht extends T {
  constructor(e) {
    super(), this.value = new Uint8Array(0), i.util.initPartial(e, this);
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
ht.typeName = "code.common.v1.UserId";
ht.fields = i.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class et extends T {
  constructor(e) {
    super(), this.value = new Uint8Array(0), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new et().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new et().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new et().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(et, e, t);
  }
}
et.runtime = i;
et.typeName = "code.common.v1.DataContainerId";
et.fields = i.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class Dt extends T {
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
class St extends T {
  constructor(e) {
    super(), this.value = "", i.util.initPartial(e, this);
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
St.typeName = "code.common.v1.AppInstallId";
St.fields = i.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 9 }
]);
class qe extends T {
  constructor(e) {
    super(), this.value = "", i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new qe().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new qe().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new qe().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(qe, e, t);
  }
}
qe.runtime = i;
qe.typeName = "code.common.v1.PhoneNumber";
qe.fields = i.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 9 }
]);
class at extends T {
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
class Ft extends T {
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
let zr = class Ro extends T {
  constructor(e) {
    super(), this.value = new Uint8Array(0), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Ro().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ro().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ro().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Ro, e, t);
  }
};
zr.runtime = i;
zr.typeName = "code.common.v1.Hash";
zr.fields = i.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class yn extends T {
  constructor(e) {
    super(), this.value = "", i.util.initPartial(e, this);
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
yn.typeName = "code.common.v1.Locale";
yn.fields = i.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 9 }
]);
class wn extends T {
  constructor(e) {
    super(), this.value = new Uint8Array(0), i.util.initPartial(e, this);
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
wn.typeName = "code.common.v1.UUID";
wn.fields = i.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class Tn extends T {
  constructor(e) {
    super(), this.version = "", this.service = "", this.method = "", this.body = new Uint8Array(0), i.util.initPartial(e, this);
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
Tn.typeName = "code.common.v1.Request";
Tn.fields = i.util.newFieldList(() => [
  { no: 1, name: "version", kind: "scalar", T: 9 },
  { no: 2, name: "service", kind: "scalar", T: 9 },
  { no: 3, name: "method", kind: "scalar", T: 9 },
  { no: 4, name: "body", kind: "scalar", T: 12 }
]);
class En extends T {
  constructor(e) {
    super(), this.result = jo.OK, this.body = new Uint8Array(0), this.message = "", i.util.initPartial(e, this);
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
En.typeName = "code.common.v1.Response";
En.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(jo) },
  { no: 2, name: "body", kind: "scalar", T: 12 },
  { no: 3, name: "message", kind: "scalar", T: 9 }
]);
var jo;
(function(n) {
  n[n.OK = 0] = "OK", n[n.ERROR = 1] = "ERROR";
})(jo || (jo = {}));
i.util.setEnumType(jo, "code.common.v1.Response.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "ERROR" }
]);
var an;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.GIVE_FIRST_KIN = 1] = "GIVE_FIRST_KIN", n[n.GET_FIRST_KIN = 2] = "GET_FIRST_KIN";
})(an || (an = {}));
i.util.setEnumType(an, "code.transaction.v2.AirdropType", [
  { no: 0, name: "UNKNOWN" },
  { no: 1, name: "GIVE_FIRST_KIN" },
  { no: 2, name: "GET_FIRST_KIN" }
]);
class mi extends T {
  constructor(e) {
    super(), this.request = { case: void 0 }, i.util.initPartial(e, this);
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
mi.typeName = "code.transaction.v2.SubmitIntentRequest";
mi.fields = i.util.newFieldList(() => [
  { no: 1, name: "submit_actions", kind: "message", T: vn, oneof: "request" },
  { no: 2, name: "submit_signatures", kind: "message", T: Nn, oneof: "request" }
]);
class vn extends T {
  constructor(e) {
    super(), this.actions = [], i.util.initPartial(e, this);
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
vn.typeName = "code.transaction.v2.SubmitIntentRequest.SubmitActions";
vn.fields = i.util.newFieldList(() => [
  { no: 1, name: "id", kind: "message", T: Ue },
  { no: 2, name: "owner", kind: "message", T: R },
  { no: 3, name: "metadata", kind: "message", T: It },
  { no: 4, name: "actions", kind: "message", T: Fn, repeated: !0 },
  { no: 5, name: "signature", kind: "message", T: Q },
  { no: 6, name: "device_token", kind: "message", T: Dt }
]);
class Nn extends T {
  constructor(e) {
    super(), this.signatures = [], i.util.initPartial(e, this);
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
Nn.typeName = "code.transaction.v2.SubmitIntentRequest.SubmitSignatures";
Nn.fields = i.util.newFieldList(() => [
  { no: 1, name: "signatures", kind: "message", T: Q, repeated: !0 }
]);
class di extends T {
  constructor(e) {
    super(), this.response = { case: void 0 }, i.util.initPartial(e, this);
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
di.typeName = "code.transaction.v2.SubmitIntentResponse";
di.fields = i.util.newFieldList(() => [
  { no: 1, name: "server_parameters", kind: "message", T: bn, oneof: "response" },
  { no: 2, name: "success", kind: "message", T: Sn, oneof: "response" },
  { no: 3, name: "error", kind: "message", T: In, oneof: "response" }
]);
class bn extends T {
  constructor(e) {
    super(), this.serverParameters = [], i.util.initPartial(e, this);
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
bn.typeName = "code.transaction.v2.SubmitIntentResponse.ServerParameters";
bn.fields = i.util.newFieldList(() => [
  { no: 1, name: "server_parameters", kind: "message", T: zn, repeated: !0 }
]);
class Sn extends T {
  constructor(e) {
    super(), this.code = Wo.OK, i.util.initPartial(e, this);
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
Sn.typeName = "code.transaction.v2.SubmitIntentResponse.Success";
Sn.fields = i.util.newFieldList(() => [
  { no: 1, name: "code", kind: "enum", T: i.getEnumType(Wo) }
]);
var Wo;
(function(n) {
  n[n.OK = 0] = "OK";
})(Wo || (Wo = {}));
i.util.setEnumType(Wo, "code.transaction.v2.SubmitIntentResponse.Success.Code", [
  { no: 0, name: "OK" }
]);
class In extends T {
  constructor(e) {
    super(), this.code = Ho.DENIED, this.errorDetails = [], i.util.initPartial(e, this);
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
In.typeName = "code.transaction.v2.SubmitIntentResponse.Error";
In.fields = i.util.newFieldList(() => [
  { no: 1, name: "code", kind: "enum", T: i.getEnumType(Ho) },
  { no: 2, name: "error_details", kind: "message", T: _t, repeated: !0 }
]);
var Ho;
(function(n) {
  n[n.DENIED = 0] = "DENIED", n[n.INVALID_INTENT = 1] = "INVALID_INTENT", n[n.SIGNATURE_ERROR = 2] = "SIGNATURE_ERROR", n[n.STALE_STATE = 3] = "STALE_STATE";
})(Ho || (Ho = {}));
i.util.setEnumType(Ho, "code.transaction.v2.SubmitIntentResponse.Error.Code", [
  { no: 0, name: "DENIED" },
  { no: 1, name: "INVALID_INTENT" },
  { no: 2, name: "SIGNATURE_ERROR" },
  { no: 3, name: "STALE_STATE" }
]);
class hi extends T {
  constructor(e) {
    super(), i.util.initPartial(e, this);
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
hi.typeName = "code.transaction.v2.GetIntentMetadataRequest";
hi.fields = i.util.newFieldList(() => [
  { no: 1, name: "intent_id", kind: "message", T: Ue },
  { no: 2, name: "owner", kind: "message", T: R },
  { no: 3, name: "signature", kind: "message", T: Q }
]);
class pi extends T {
  constructor(e) {
    super(), this.result = zo.OK, i.util.initPartial(e, this);
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
pi.typeName = "code.transaction.v2.GetIntentMetadataResponse";
pi.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(zo) },
  { no: 2, name: "metadata", kind: "message", T: It }
]);
var zo;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND";
})(zo || (zo = {}));
i.util.setEnumType(zo, "code.transaction.v2.GetIntentMetadataResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" }
]);
class gi extends T {
  constructor(e) {
    super(), this.actionId = 0, i.util.initPartial(e, this);
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
gi.typeName = "code.transaction.v2.GetPrivacyUpgradeStatusRequest";
gi.fields = i.util.newFieldList(() => [
  { no: 1, name: "intent_id", kind: "message", T: Ue },
  { no: 2, name: "action_id", kind: "scalar", T: 13 }
]);
class yi extends T {
  constructor(e) {
    super(), this.result = Xo.OK, this.status = Yo.UNKNOWN, i.util.initPartial(e, this);
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
yi.typeName = "code.transaction.v2.GetPrivacyUpgradeStatusResponse";
yi.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(Xo) },
  { no: 2, name: "status", kind: "enum", T: i.getEnumType(Yo) }
]);
var Xo;
(function(n) {
  n[n.OK = 0] = "OK", n[n.INTENT_NOT_FOUND = 1] = "INTENT_NOT_FOUND", n[n.ACTION_NOT_FOUND = 2] = "ACTION_NOT_FOUND", n[n.INVALID_ACTION = 3] = "INVALID_ACTION";
})(Xo || (Xo = {}));
i.util.setEnumType(Xo, "code.transaction.v2.GetPrivacyUpgradeStatusResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INTENT_NOT_FOUND" },
  { no: 2, name: "ACTION_NOT_FOUND" },
  { no: 3, name: "INVALID_ACTION" }
]);
var Yo;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.TEMPORARY_TRANSACTION_FINALIZED = 1] = "TEMPORARY_TRANSACTION_FINALIZED", n[n.WAITING_FOR_NEXT_BLOCK = 2] = "WAITING_FOR_NEXT_BLOCK", n[n.READY_FOR_UPGRADE = 3] = "READY_FOR_UPGRADE", n[n.ALREADY_UPGRADED = 4] = "ALREADY_UPGRADED";
})(Yo || (Yo = {}));
i.util.setEnumType(Yo, "code.transaction.v2.GetPrivacyUpgradeStatusResponse.Status", [
  { no: 0, name: "UNKNOWN" },
  { no: 1, name: "TEMPORARY_TRANSACTION_FINALIZED" },
  { no: 2, name: "WAITING_FOR_NEXT_BLOCK" },
  { no: 3, name: "READY_FOR_UPGRADE" },
  { no: 4, name: "ALREADY_UPGRADED" }
]);
class wi extends T {
  constructor(e) {
    super(), this.limit = 0, i.util.initPartial(e, this);
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
wi.typeName = "code.transaction.v2.GetPrioritizedIntentsForPrivacyUpgradeRequest";
wi.fields = i.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: R },
  { no: 2, name: "limit", kind: "scalar", T: 13 },
  { no: 3, name: "signature", kind: "message", T: Q }
]);
class Ti extends T {
  constructor(e) {
    super(), this.result = Zo.OK, this.items = [], i.util.initPartial(e, this);
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
Ti.typeName = "code.transaction.v2.GetPrioritizedIntentsForPrivacyUpgradeResponse";
Ti.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(Zo) },
  { no: 2, name: "items", kind: "message", T: ur, repeated: !0 }
]);
var Zo;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND";
})(Zo || (Zo = {}));
i.util.setEnumType(Zo, "code.transaction.v2.GetPrioritizedIntentsForPrivacyUpgradeResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" }
]);
class Ei extends T {
  constructor(e) {
    super(), i.util.initPartial(e, this);
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
Ei.typeName = "code.transaction.v2.GetLimitsRequest";
Ei.fields = i.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: R },
  { no: 2, name: "signature", kind: "message", T: Q },
  { no: 3, name: "consumed_since", kind: "message", T: Je }
]);
class vi extends T {
  constructor(e) {
    super(), this.result = Qo.OK, this.sendLimitsByCurrency = {}, this.microPaymentLimitsByCurrency = {}, this.buyModuleLimitsByCurrency = {}, i.util.initPartial(e, this);
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
vi.typeName = "code.transaction.v2.GetLimitsResponse";
vi.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(Qo) },
  { no: 2, name: "send_limits_by_currency", kind: "map", K: 9, V: { kind: "message", T: fr } },
  { no: 3, name: "deposit_limit", kind: "message", T: mr },
  { no: 4, name: "micro_payment_limits_by_currency", kind: "map", K: 9, V: { kind: "message", T: dr } },
  { no: 5, name: "buy_module_limits_by_currency", kind: "map", K: 9, V: { kind: "message", T: hr } }
]);
var Qo;
(function(n) {
  n[n.OK = 0] = "OK";
})(Qo || (Qo = {}));
i.util.setEnumType(Qo, "code.transaction.v2.GetLimitsResponse.Result", [
  { no: 0, name: "OK" }
]);
class Ni extends T {
  constructor(e) {
    super(), this.pageSize = 0, this.direction = ea.ASC, i.util.initPartial(e, this);
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
Ni.typeName = "code.transaction.v2.GetPaymentHistoryRequest";
Ni.fields = i.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: R },
  { no: 2, name: "cursor", kind: "message", T: su },
  { no: 3, name: "page_size", kind: "scalar", T: 13 },
  { no: 4, name: "direction", kind: "enum", T: i.getEnumType(ea) },
  { no: 5, name: "signature", kind: "message", T: Q }
]);
var ea;
(function(n) {
  n[n.ASC = 0] = "ASC", n[n.DESC = 1] = "DESC";
})(ea || (ea = {}));
i.util.setEnumType(ea, "code.transaction.v2.GetPaymentHistoryRequest.Direction", [
  { no: 0, name: "ASC" },
  { no: 1, name: "DESC" }
]);
class bi extends T {
  constructor(e) {
    super(), this.result = ta.OK, this.items = [], i.util.initPartial(e, this);
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
bi.typeName = "code.transaction.v2.GetPaymentHistoryResponse";
bi.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(ta) },
  { no: 2, name: "items", kind: "message", T: lr, repeated: !0 }
]);
var ta;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND";
})(ta || (ta = {}));
i.util.setEnumType(ta, "code.transaction.v2.GetPaymentHistoryResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" }
]);
class Si extends T {
  constructor(e) {
    super(), i.util.initPartial(e, this);
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
Si.typeName = "code.transaction.v2.CanWithdrawToAccountRequest";
Si.fields = i.util.newFieldList(() => [
  { no: 1, name: "account", kind: "message", T: R }
]);
class Ii extends T {
  constructor(e) {
    super(), this.accountType = na.Unknown, this.isValidPaymentDestination = !1, this.requiresInitialization = !1, i.util.initPartial(e, this);
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
Ii.typeName = "code.transaction.v2.CanWithdrawToAccountResponse";
Ii.fields = i.util.newFieldList(() => [
  { no: 2, name: "account_type", kind: "enum", T: i.getEnumType(na) },
  { no: 1, name: "is_valid_payment_destination", kind: "scalar", T: 8 },
  { no: 3, name: "requires_initialization", kind: "scalar", T: 8 }
]);
var na;
(function(n) {
  n[n.Unknown = 0] = "Unknown", n[n.TokenAccount = 1] = "TokenAccount", n[n.OwnerAccount = 2] = "OwnerAccount";
})(na || (na = {}));
i.util.setEnumType(na, "code.transaction.v2.CanWithdrawToAccountResponse.AccountType", [
  { no: 0, name: "Unknown" },
  { no: 1, name: "TokenAccount" },
  { no: 2, name: "OwnerAccount" }
]);
class ki extends T {
  constructor(e) {
    super(), this.airdropType = an.UNKNOWN, i.util.initPartial(e, this);
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
ki.typeName = "code.transaction.v2.AirdropRequest";
ki.fields = i.util.newFieldList(() => [
  { no: 1, name: "airdrop_type", kind: "enum", T: i.getEnumType(an) },
  { no: 2, name: "owner", kind: "message", T: R },
  { no: 3, name: "signature", kind: "message", T: Q }
]);
class Oi extends T {
  constructor(e) {
    super(), this.result = ra.OK, i.util.initPartial(e, this);
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
Oi.typeName = "code.transaction.v2.AirdropResponse";
Oi.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(ra) },
  { no: 2, name: "exchange_data", kind: "message", T: _e }
]);
var ra;
(function(n) {
  n[n.OK = 0] = "OK", n[n.UNAVAILABLE = 1] = "UNAVAILABLE", n[n.ALREADY_CLAIMED = 2] = "ALREADY_CLAIMED";
})(ra || (ra = {}));
i.util.setEnumType(ra, "code.transaction.v2.AirdropResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "UNAVAILABLE" },
  { no: 2, name: "ALREADY_CLAIMED" }
]);
class Bi extends T {
  constructor(e) {
    super(), this.request = { case: void 0 }, i.util.initPartial(e, this);
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
Bi.typeName = "code.transaction.v2.SwapRequest";
Bi.fields = i.util.newFieldList(() => [
  { no: 1, name: "initiate", kind: "message", T: kn, oneof: "request" },
  { no: 2, name: "submit_signature", kind: "message", T: On, oneof: "request" }
]);
class kn extends T {
  constructor(e) {
    super(), this.limit = ce.zero, this.waitForBlockchainStatus = !1, i.util.initPartial(e, this);
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
kn.typeName = "code.transaction.v2.SwapRequest.Initiate";
kn.fields = i.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: R },
  { no: 2, name: "swap_authority", kind: "message", T: R },
  { no: 3, name: "limit", kind: "scalar", T: 4 },
  { no: 4, name: "wait_for_blockchain_status", kind: "scalar", T: 8 },
  { no: 5, name: "signature", kind: "message", T: Q }
]);
class On extends T {
  constructor(e) {
    super(), i.util.initPartial(e, this);
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
On.typeName = "code.transaction.v2.SwapRequest.SubmitSignature";
On.fields = i.util.newFieldList(() => [
  { no: 1, name: "signature", kind: "message", T: Q }
]);
class Ai extends T {
  constructor(e) {
    super(), this.response = { case: void 0 }, i.util.initPartial(e, this);
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
Ai.typeName = "code.transaction.v2.SwapResponse";
Ai.fields = i.util.newFieldList(() => [
  { no: 1, name: "server_parameters", kind: "message", T: Bn, oneof: "response" },
  { no: 2, name: "success", kind: "message", T: An, oneof: "response" },
  { no: 3, name: "error", kind: "message", T: Jn, oneof: "response" }
]);
class Bn extends T {
  constructor(e) {
    super(), this.computeUnitLimit = 0, this.computeUnitPrice = ce.zero, this.swapIxnAccounts = [], this.swapIxnData = new Uint8Array(0), this.maxToSend = ce.zero, this.minToReceive = ce.zero, i.util.initPartial(e, this);
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
Bn.typeName = "code.transaction.v2.SwapResponse.ServerParameters";
Bn.fields = i.util.newFieldList(() => [
  { no: 1, name: "payer", kind: "message", T: R },
  { no: 2, name: "recent_blockhash", kind: "message", T: qt },
  { no: 3, name: "compute_unit_limit", kind: "scalar", T: 13 },
  { no: 4, name: "compute_unit_price", kind: "scalar", T: 4 },
  { no: 5, name: "swap_program", kind: "message", T: R },
  { no: 6, name: "swap_ixn_accounts", kind: "message", T: gn, repeated: !0 },
  { no: 7, name: "swap_ixn_data", kind: "scalar", T: 12 },
  { no: 8, name: "max_to_send", kind: "scalar", T: 4 },
  { no: 9, name: "min_to_receive", kind: "scalar", T: 4 },
  { no: 10, name: "nonce", kind: "message", T: R }
]);
class An extends T {
  constructor(e) {
    super(), this.code = ia.SWAP_SUBMITTED, i.util.initPartial(e, this);
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
An.typeName = "code.transaction.v2.SwapResponse.Success";
An.fields = i.util.newFieldList(() => [
  { no: 1, name: "code", kind: "enum", T: i.getEnumType(ia) }
]);
var ia;
(function(n) {
  n[n.SWAP_SUBMITTED = 0] = "SWAP_SUBMITTED", n[n.SWAP_FINALIZED = 1] = "SWAP_FINALIZED";
})(ia || (ia = {}));
i.util.setEnumType(ia, "code.transaction.v2.SwapResponse.Success.Code", [
  { no: 0, name: "SWAP_SUBMITTED" },
  { no: 1, name: "SWAP_FINALIZED" }
]);
class Jn extends T {
  constructor(e) {
    super(), this.code = sa.DENIED, this.errorDetails = [], i.util.initPartial(e, this);
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
Jn.typeName = "code.transaction.v2.SwapResponse.Error";
Jn.fields = i.util.newFieldList(() => [
  { no: 1, name: "code", kind: "enum", T: i.getEnumType(sa) },
  { no: 2, name: "error_details", kind: "message", T: _t, repeated: !0 }
]);
var sa;
(function(n) {
  n[n.DENIED = 0] = "DENIED", n[n.SIGNATURE_ERROR = 2] = "SIGNATURE_ERROR", n[n.INVALID_SWAP = 3] = "INVALID_SWAP", n[n.SWAP_FAILED = 4] = "SWAP_FAILED";
})(sa || (sa = {}));
i.util.setEnumType(sa, "code.transaction.v2.SwapResponse.Error.Code", [
  { no: 0, name: "DENIED" },
  { no: 2, name: "SIGNATURE_ERROR" },
  { no: 3, name: "INVALID_SWAP" },
  { no: 4, name: "SWAP_FAILED" }
]);
class Ji extends T {
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
Ji.typeName = "code.transaction.v2.DeclareFiatOnrampPurchaseAttemptRequest";
Ji.fields = i.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: R },
  { no: 2, name: "purchase_amount", kind: "message", T: pt },
  { no: 3, name: "nonce", kind: "message", T: wn },
  { no: 4, name: "signature", kind: "message", T: Q }
]);
class Ri extends T {
  constructor(e) {
    super(), this.result = oa.OK, i.util.initPartial(e, this);
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
Ri.typeName = "code.transaction.v2.DeclareFiatOnrampPurchaseAttemptResponse";
Ri.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(oa) }
]);
var oa;
(function(n) {
  n[n.OK = 0] = "OK", n[n.INVALID_OWNER = 1] = "INVALID_OWNER", n[n.UNSUPPORTED_CURRENCY = 2] = "UNSUPPORTED_CURRENCY", n[n.AMOUNT_EXCEEDS_MAXIMUM = 3] = "AMOUNT_EXCEEDS_MAXIMUM";
})(oa || (oa = {}));
i.util.setEnumType(oa, "code.transaction.v2.DeclareFiatOnrampPurchaseAttemptResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INVALID_OWNER" },
  { no: 2, name: "UNSUPPORTED_CURRENCY" },
  { no: 3, name: "AMOUNT_EXCEEDS_MAXIMUM" }
]);
class It extends T {
  constructor(e) {
    super(), this.type = { case: void 0 }, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new It().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new It().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new It().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(It, e, t);
  }
}
It.runtime = i;
It.typeName = "code.transaction.v2.Metadata";
It.fields = i.util.newFieldList(() => [
  { no: 1, name: "open_accounts", kind: "message", T: Rn, oneof: "type" },
  { no: 2, name: "send_private_payment", kind: "message", T: xn, oneof: "type" },
  { no: 3, name: "receive_payments_privately", kind: "message", T: Ln, oneof: "type" },
  { no: 4, name: "upgrade_privacy", kind: "message", T: Un, oneof: "type" },
  { no: 5, name: "migrate_to_privacy_2022", kind: "message", T: qn, oneof: "type" },
  { no: 6, name: "send_public_payment", kind: "message", T: Pn, oneof: "type" },
  { no: 7, name: "receive_payments_publicly", kind: "message", T: Cn, oneof: "type" },
  { no: 8, name: "establish_relationship", kind: "message", T: Dn, oneof: "type" }
]);
class Rn extends T {
  constructor(e) {
    super(), i.util.initPartial(e, this);
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
Rn.typeName = "code.transaction.v2.OpenAccountsMetadata";
Rn.fields = i.util.newFieldList(() => []);
class xn extends T {
  constructor(e) {
    super(), this.isWithdrawal = !1, this.isRemoteSend = !1, this.isTip = !1, i.util.initPartial(e, this);
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
xn.typeName = "code.transaction.v2.SendPrivatePaymentMetadata";
xn.fields = i.util.newFieldList(() => [
  { no: 1, name: "destination", kind: "message", T: R },
  { no: 2, name: "exchange_data", kind: "message", T: _e },
  { no: 3, name: "is_withdrawal", kind: "scalar", T: 8 },
  { no: 4, name: "is_remote_send", kind: "scalar", T: 8 },
  { no: 5, name: "is_tip", kind: "scalar", T: 8 },
  { no: 6, name: "tipped_user", kind: "message", T: pr }
]);
class Pn extends T {
  constructor(e) {
    super(), this.isWithdrawal = !1, i.util.initPartial(e, this);
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
Pn.typeName = "code.transaction.v2.SendPublicPaymentMetadata";
Pn.fields = i.util.newFieldList(() => [
  { no: 4, name: "source", kind: "message", T: R },
  { no: 1, name: "destination", kind: "message", T: R },
  { no: 2, name: "exchange_data", kind: "message", T: _e },
  { no: 3, name: "is_withdrawal", kind: "scalar", T: 8 }
]);
class Ln extends T {
  constructor(e) {
    super(), this.quarks = ce.zero, this.isDeposit = !1, i.util.initPartial(e, this);
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
Ln.typeName = "code.transaction.v2.ReceivePaymentsPrivatelyMetadata";
Ln.fields = i.util.newFieldList(() => [
  { no: 1, name: "source", kind: "message", T: R },
  { no: 2, name: "quarks", kind: "scalar", T: 4 },
  { no: 3, name: "is_deposit", kind: "scalar", T: 8 }
]);
class Cn extends T {
  constructor(e) {
    super(), this.quarks = ce.zero, this.isRemoteSend = !1, this.isIssuerVoidingGiftCard = !1, i.util.initPartial(e, this);
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
Cn.typeName = "code.transaction.v2.ReceivePaymentsPubliclyMetadata";
Cn.fields = i.util.newFieldList(() => [
  { no: 1, name: "source", kind: "message", T: R },
  { no: 2, name: "quarks", kind: "scalar", T: 4 },
  { no: 3, name: "is_remote_send", kind: "scalar", T: 8 },
  { no: 4, name: "is_issuer_voiding_gift_card", kind: "scalar", T: 8 },
  { no: 5, name: "exchange_data", kind: "message", T: _e }
]);
class Un extends T {
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
Un.typeName = "code.transaction.v2.UpgradePrivacyMetadata";
Un.fields = i.util.newFieldList(() => []);
class qn extends T {
  constructor(e) {
    super(), this.quarks = ce.zero, i.util.initPartial(e, this);
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
qn.typeName = "code.transaction.v2.MigrateToPrivacy2022Metadata";
qn.fields = i.util.newFieldList(() => [
  { no: 1, name: "quarks", kind: "scalar", T: 4 }
]);
class Dn extends T {
  constructor(e) {
    super(), i.util.initPartial(e, this);
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
Dn.typeName = "code.transaction.v2.EstablishRelationshipMetadata";
Dn.fields = i.util.newFieldList(() => [
  { no: 1, name: "relationship", kind: "message", T: Ft }
]);
class Fn extends T {
  constructor(e) {
    super(), this.id = 0, this.type = { case: void 0 }, i.util.initPartial(e, this);
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
Fn.typeName = "code.transaction.v2.Action";
Fn.fields = i.util.newFieldList(() => [
  { no: 1, name: "id", kind: "scalar", T: 13 },
  { no: 2, name: "open_account", kind: "message", T: _n, oneof: "type" },
  { no: 3, name: "close_empty_account", kind: "message", T: Kn, oneof: "type" },
  { no: 4, name: "close_dormant_account", kind: "message", T: Mn, oneof: "type" },
  { no: 5, name: "no_privacy_transfer", kind: "message", T: $n, oneof: "type" },
  { no: 6, name: "no_privacy_withdraw", kind: "message", T: Vn, oneof: "type" },
  { no: 7, name: "temporary_privacy_transfer", kind: "message", T: Gn, oneof: "type" },
  { no: 8, name: "temporary_privacy_exchange", kind: "message", T: jn, oneof: "type" },
  { no: 9, name: "permanent_privacy_upgrade", kind: "message", T: Wn, oneof: "type" },
  { no: 10, name: "fee_payment", kind: "message", T: Hn, oneof: "type" }
]);
class _n extends T {
  constructor(e) {
    super(), this.accountType = ft.UNKNOWN, this.index = ce.zero, i.util.initPartial(e, this);
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
_n.typeName = "code.transaction.v2.OpenAccountAction";
_n.fields = i.util.newFieldList(() => [
  { no: 1, name: "account_type", kind: "enum", T: i.getEnumType(ft) },
  { no: 2, name: "owner", kind: "message", T: R },
  { no: 3, name: "index", kind: "scalar", T: 4 },
  { no: 4, name: "authority", kind: "message", T: R },
  { no: 5, name: "token", kind: "message", T: R },
  { no: 6, name: "authority_signature", kind: "message", T: Q }
]);
class Kn extends T {
  constructor(e) {
    super(), this.accountType = ft.UNKNOWN, i.util.initPartial(e, this);
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
Kn.typeName = "code.transaction.v2.CloseEmptyAccountAction";
Kn.fields = i.util.newFieldList(() => [
  { no: 1, name: "account_type", kind: "enum", T: i.getEnumType(ft) },
  { no: 2, name: "authority", kind: "message", T: R },
  { no: 3, name: "token", kind: "message", T: R }
]);
class Mn extends T {
  constructor(e) {
    super(), this.accountType = ft.UNKNOWN, i.util.initPartial(e, this);
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
Mn.typeName = "code.transaction.v2.CloseDormantAccountAction";
Mn.fields = i.util.newFieldList(() => [
  { no: 1, name: "account_type", kind: "enum", T: i.getEnumType(ft) },
  { no: 2, name: "authority", kind: "message", T: R },
  { no: 3, name: "token", kind: "message", T: R },
  { no: 4, name: "destination", kind: "message", T: R }
]);
class $n extends T {
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
$n.typeName = "code.transaction.v2.NoPrivacyTransferAction";
$n.fields = i.util.newFieldList(() => [
  { no: 1, name: "authority", kind: "message", T: R },
  { no: 2, name: "source", kind: "message", T: R },
  { no: 3, name: "destination", kind: "message", T: R },
  { no: 4, name: "amount", kind: "scalar", T: 4 }
]);
class Vn extends T {
  constructor(e) {
    super(), this.amount = ce.zero, this.shouldClose = !1, i.util.initPartial(e, this);
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
Vn.typeName = "code.transaction.v2.NoPrivacyWithdrawAction";
Vn.fields = i.util.newFieldList(() => [
  { no: 1, name: "authority", kind: "message", T: R },
  { no: 2, name: "source", kind: "message", T: R },
  { no: 3, name: "destination", kind: "message", T: R },
  { no: 4, name: "amount", kind: "scalar", T: 4 },
  { no: 5, name: "should_close", kind: "scalar", T: 8 }
]);
class Gn extends T {
  constructor(e) {
    super(), this.amount = ce.zero, i.util.initPartial(e, this);
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
Gn.typeName = "code.transaction.v2.TemporaryPrivacyTransferAction";
Gn.fields = i.util.newFieldList(() => [
  { no: 1, name: "authority", kind: "message", T: R },
  { no: 2, name: "source", kind: "message", T: R },
  { no: 3, name: "destination", kind: "message", T: R },
  { no: 4, name: "amount", kind: "scalar", T: 4 }
]);
class jn extends T {
  constructor(e) {
    super(), this.amount = ce.zero, i.util.initPartial(e, this);
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
jn.typeName = "code.transaction.v2.TemporaryPrivacyExchangeAction";
jn.fields = i.util.newFieldList(() => [
  { no: 1, name: "authority", kind: "message", T: R },
  { no: 2, name: "source", kind: "message", T: R },
  { no: 3, name: "destination", kind: "message", T: R },
  { no: 4, name: "amount", kind: "scalar", T: 4 }
]);
class Wn extends T {
  constructor(e) {
    super(), this.actionId = 0, i.util.initPartial(e, this);
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
Wn.typeName = "code.transaction.v2.PermanentPrivacyUpgradeAction";
Wn.fields = i.util.newFieldList(() => [
  { no: 1, name: "action_id", kind: "scalar", T: 13 }
]);
class Hn extends T {
  constructor(e) {
    super(), this.type = aa.CODE, this.amount = ce.zero, i.util.initPartial(e, this);
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
Hn.typeName = "code.transaction.v2.FeePaymentAction";
Hn.fields = i.util.newFieldList(() => [
  { no: 4, name: "type", kind: "enum", T: i.getEnumType(aa) },
  { no: 1, name: "authority", kind: "message", T: R },
  { no: 2, name: "source", kind: "message", T: R },
  { no: 3, name: "amount", kind: "scalar", T: 4 },
  { no: 5, name: "destination", kind: "message", T: R }
]);
var aa;
(function(n) {
  n[n.CODE = 0] = "CODE", n[n.THIRD_PARTY = 1] = "THIRD_PARTY";
})(aa || (aa = {}));
i.util.setEnumType(aa, "code.transaction.v2.FeePaymentAction.FeeType", [
  { no: 0, name: "CODE" },
  { no: 1, name: "THIRD_PARTY" }
]);
class zn extends T {
  constructor(e) {
    super(), this.actionId = 0, this.nonces = [], this.type = { case: void 0 }, i.util.initPartial(e, this);
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
zn.typeName = "code.transaction.v2.ServerParameter";
zn.fields = i.util.newFieldList(() => [
  { no: 1, name: "action_id", kind: "scalar", T: 13 },
  { no: 2, name: "nonces", kind: "message", T: Xn, repeated: !0 },
  { no: 3, name: "open_account", kind: "message", T: Yn, oneof: "type" },
  { no: 4, name: "close_empty_account", kind: "message", T: Zn, oneof: "type" },
  { no: 5, name: "close_dormant_account", kind: "message", T: Qn, oneof: "type" },
  { no: 6, name: "no_privacy_transfer", kind: "message", T: er, oneof: "type" },
  { no: 7, name: "no_privacy_withdraw", kind: "message", T: tr, oneof: "type" },
  { no: 8, name: "temporary_privacy_transfer", kind: "message", T: nr, oneof: "type" },
  { no: 9, name: "temporary_privacy_exchange", kind: "message", T: rr, oneof: "type" },
  { no: 10, name: "permanent_privacy_upgrade", kind: "message", T: ir, oneof: "type" },
  { no: 11, name: "fee_payment", kind: "message", T: sr, oneof: "type" }
]);
class Xn extends T {
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
Xn.typeName = "code.transaction.v2.NoncedTransactionMetadata";
Xn.fields = i.util.newFieldList(() => [
  { no: 1, name: "nonce", kind: "message", T: R },
  { no: 2, name: "blockhash", kind: "message", T: qt }
]);
class Yn extends T {
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
Yn.typeName = "code.transaction.v2.OpenAccountServerParameter";
Yn.fields = i.util.newFieldList(() => []);
class Zn extends T {
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
Zn.typeName = "code.transaction.v2.CloseEmptyAccountServerParameter";
Zn.fields = i.util.newFieldList(() => []);
class Qn extends T {
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
Qn.typeName = "code.transaction.v2.CloseDormantAccountServerParameter";
Qn.fields = i.util.newFieldList(() => []);
class er extends T {
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
er.typeName = "code.transaction.v2.NoPrivacyTransferServerParameter";
er.fields = i.util.newFieldList(() => []);
class tr extends T {
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
tr.typeName = "code.transaction.v2.NoPrivacyWithdrawServerParameter";
tr.fields = i.util.newFieldList(() => []);
class nr extends T {
  constructor(e) {
    super(), i.util.initPartial(e, this);
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
nr.typeName = "code.transaction.v2.TemporaryPrivacyTransferServerParameter";
nr.fields = i.util.newFieldList(() => [
  { no: 1, name: "treasury", kind: "message", T: R },
  { no: 2, name: "recent_root", kind: "message", T: zr }
]);
class rr extends T {
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
rr.typeName = "code.transaction.v2.TemporaryPrivacyExchangeServerParameter";
rr.fields = i.util.newFieldList(() => [
  { no: 1, name: "treasury", kind: "message", T: R },
  { no: 2, name: "recent_root", kind: "message", T: zr }
]);
class ir extends T {
  constructor(e) {
    super(), this.newCommitmentAmount = ce.zero, this.merkleProof = [], i.util.initPartial(e, this);
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
ir.typeName = "code.transaction.v2.PermanentPrivacyUpgradeServerParameter";
ir.fields = i.util.newFieldList(() => [
  { no: 1, name: "new_commitment", kind: "message", T: R },
  { no: 2, name: "new_commitment_transcript", kind: "message", T: zr },
  { no: 3, name: "new_commitment_destination", kind: "message", T: R },
  { no: 4, name: "new_commitment_amount", kind: "scalar", T: 4 },
  { no: 5, name: "merkle_root", kind: "message", T: zr },
  { no: 6, name: "merkle_proof", kind: "message", T: zr, repeated: !0 }
]);
class sr extends T {
  constructor(e) {
    super(), i.util.initPartial(e, this);
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
sr.typeName = "code.transaction.v2.FeePaymentServerParameter";
sr.fields = i.util.newFieldList(() => [
  { no: 1, name: "code_destination", kind: "message", T: R }
]);
class _t extends T {
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
  { no: 1, name: "reason_string", kind: "message", T: or, oneof: "type" },
  { no: 2, name: "invalid_signature", kind: "message", T: ar, oneof: "type" }
]);
class or extends T {
  constructor(e) {
    super(), this.reason = "", i.util.initPartial(e, this);
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
or.typeName = "code.transaction.v2.ReasonStringErrorDetails";
or.fields = i.util.newFieldList(() => [
  { no: 1, name: "reason", kind: "scalar", T: 9 }
]);
class ar extends T {
  constructor(e) {
    super(), this.actionId = 0, i.util.initPartial(e, this);
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
ar.typeName = "code.transaction.v2.InvalidSignatureErrorDetails";
ar.fields = i.util.newFieldList(() => [
  { no: 1, name: "action_id", kind: "scalar", T: 13 },
  { no: 2, name: "expected_transaction", kind: "message", T: Ut },
  { no: 3, name: "provided_signature", kind: "message", T: Q }
]);
class ur extends T {
  constructor(e) {
    super(), this.actions = [], i.util.initPartial(e, this);
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
ur.typeName = "code.transaction.v2.UpgradeableIntent";
ur.fields = i.util.newFieldList(() => [
  { no: 1, name: "id", kind: "message", T: Ue },
  { no: 2, name: "actions", kind: "message", T: cr, repeated: !0 }
]);
class cr extends T {
  constructor(e) {
    super(), this.actionId = 0, this.sourceAccountType = ft.UNKNOWN, this.sourceDerivationIndex = ce.zero, this.originalAmount = ce.zero, i.util.initPartial(e, this);
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
cr.typeName = "code.transaction.v2.UpgradeableIntent.UpgradeablePrivateAction";
cr.fields = i.util.newFieldList(() => [
  { no: 1, name: "transaction_blob", kind: "message", T: Ut },
  { no: 2, name: "client_signature", kind: "message", T: Q },
  { no: 3, name: "action_id", kind: "scalar", T: 13 },
  { no: 4, name: "source_account_type", kind: "enum", T: i.getEnumType(ft) },
  { no: 5, name: "source_derivation_index", kind: "scalar", T: 4 },
  { no: 6, name: "original_destination", kind: "message", T: R },
  { no: 7, name: "original_amount", kind: "scalar", T: 4 },
  { no: 8, name: "treasury", kind: "message", T: R },
  { no: 9, name: "recent_root", kind: "message", T: zr }
]);
class lr extends T {
  constructor(e) {
    super(), this.paymentType = ua.UNKNOWN, this.isWithdraw = !1, this.isDeposit = !1, this.isRemoteSend = !1, this.isReturned = !1, this.isAirdrop = !1, this.airdropType = an.UNKNOWN, this.isMicroPayment = !1, i.util.initPartial(e, this);
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
lr.typeName = "code.transaction.v2.PaymentHistoryItem";
lr.fields = i.util.newFieldList(() => [
  { no: 1, name: "cursor", kind: "message", T: su },
  { no: 2, name: "exchange_data", kind: "message", T: _e },
  { no: 3, name: "payment_type", kind: "enum", T: i.getEnumType(ua) },
  { no: 4, name: "is_withdraw", kind: "scalar", T: 8 },
  { no: 5, name: "is_deposit", kind: "scalar", T: 8 },
  { no: 6, name: "timestamp", kind: "message", T: Je },
  { no: 7, name: "is_remote_send", kind: "scalar", T: 8 },
  { no: 8, name: "is_returned", kind: "scalar", T: 8 },
  { no: 9, name: "is_airdrop", kind: "scalar", T: 8 },
  { no: 10, name: "airdrop_type", kind: "enum", T: i.getEnumType(an) },
  { no: 11, name: "is_micro_payment", kind: "scalar", T: 8 },
  { no: 12, name: "intent_id", kind: "message", T: Ue }
]);
var ua;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.SEND = 1] = "SEND", n[n.RECEIVE = 2] = "RECEIVE";
})(ua || (ua = {}));
i.util.setEnumType(ua, "code.transaction.v2.PaymentHistoryItem.PaymentType", [
  { no: 0, name: "UNKNOWN" },
  { no: 1, name: "SEND" },
  { no: 2, name: "RECEIVE" }
]);
class _e extends T {
  constructor(e) {
    super(), this.currency = "", this.exchangeRate = 0, this.nativeAmount = 0, this.quarks = ce.zero, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new _e().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new _e().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new _e().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(_e, e, t);
  }
}
_e.runtime = i;
_e.typeName = "code.transaction.v2.ExchangeData";
_e.fields = i.util.newFieldList(() => [
  { no: 1, name: "currency", kind: "scalar", T: 9 },
  { no: 2, name: "exchange_rate", kind: "scalar", T: 1 },
  { no: 3, name: "native_amount", kind: "scalar", T: 1 },
  { no: 4, name: "quarks", kind: "scalar", T: 4 }
]);
class pt extends T {
  constructor(e) {
    super(), this.currency = "", this.nativeAmount = 0, i.util.initPartial(e, this);
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
pt.typeName = "code.transaction.v2.ExchangeDataWithoutRate";
pt.fields = i.util.newFieldList(() => [
  { no: 1, name: "currency", kind: "scalar", T: 9 },
  { no: 2, name: "native_amount", kind: "scalar", T: 1 }
]);
class Kt extends T {
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
class fr extends T {
  constructor(e) {
    super(), this.nextTransaction = 0, this.maxPerTransaction = 0, this.maxPerDay = 0, i.util.initPartial(e, this);
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
fr.typeName = "code.transaction.v2.SendLimit";
fr.fields = i.util.newFieldList(() => [
  { no: 1, name: "next_transaction", kind: "scalar", T: 2 },
  { no: 2, name: "max_per_transaction", kind: "scalar", T: 2 },
  { no: 3, name: "max_per_day", kind: "scalar", T: 2 }
]);
class mr extends T {
  constructor(e) {
    super(), this.maxQuarks = ce.zero, i.util.initPartial(e, this);
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
mr.typeName = "code.transaction.v2.DepositLimit";
mr.fields = i.util.newFieldList(() => [
  { no: 1, name: "max_quarks", kind: "scalar", T: 4 }
]);
class dr extends T {
  constructor(e) {
    super(), this.maxPerTransaction = 0, this.minPerTransaction = 0, i.util.initPartial(e, this);
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
dr.typeName = "code.transaction.v2.MicroPaymentLimit";
dr.fields = i.util.newFieldList(() => [
  { no: 1, name: "max_per_transaction", kind: "scalar", T: 2 },
  { no: 2, name: "min_per_transaction", kind: "scalar", T: 2 }
]);
class hr extends T {
  constructor(e) {
    super(), this.minPerTransaction = 0, this.maxPerTransaction = 0, i.util.initPartial(e, this);
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
hr.typeName = "code.transaction.v2.BuyModuleLimit";
hr.fields = i.util.newFieldList(() => [
  { no: 1, name: "min_per_transaction", kind: "scalar", T: 2 },
  { no: 2, name: "max_per_transaction", kind: "scalar", T: 2 }
]);
class pr extends T {
  constructor(e) {
    super(), this.platform = ca.UNKNOWN, this.username = "", i.util.initPartial(e, this);
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
pr.typeName = "code.transaction.v2.TippedUser";
pr.fields = i.util.newFieldList(() => [
  { no: 1, name: "platform", kind: "enum", T: i.getEnumType(ca) },
  { no: 2, name: "username", kind: "scalar", T: 9 }
]);
var ca;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.TWITTER = 1] = "TWITTER";
})(ca || (ca = {}));
i.util.setEnumType(ca, "code.transaction.v2.TippedUser.Platform", [
  { no: 0, name: "UNKNOWN" },
  { no: 1, name: "TWITTER" }
]);
let su = class xo extends T {
  constructor(e) {
    super(), this.value = new Uint8Array(0), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new xo().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new xo().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new xo().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(xo, e, t);
  }
};
su.runtime = i;
su.typeName = "code.transaction.v2.Cursor";
su.fields = i.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class xi extends T {
  constructor(e) {
    super(), i.util.initPartial(e, this);
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
xi.typeName = "code.account.v1.IsCodeAccountRequest";
xi.fields = i.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: R },
  { no: 2, name: "signature", kind: "message", T: Q }
]);
class Pi extends T {
  constructor(e) {
    super(), this.result = la.OK, i.util.initPartial(e, this);
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
Pi.typeName = "code.account.v1.IsCodeAccountResponse";
Pi.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(la) }
]);
var la;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND", n[n.UNLOCKED_TIMELOCK_ACCOUNT = 2] = "UNLOCKED_TIMELOCK_ACCOUNT";
})(la || (la = {}));
i.util.setEnumType(la, "code.account.v1.IsCodeAccountResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" },
  { no: 2, name: "UNLOCKED_TIMELOCK_ACCOUNT" }
]);
class Li extends T {
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
Li.typeName = "code.account.v1.GetTokenAccountInfosRequest";
Li.fields = i.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: R },
  { no: 2, name: "signature", kind: "message", T: Q }
]);
class Ci extends T {
  constructor(e) {
    super(), this.result = fa.OK, this.tokenAccountInfos = {}, i.util.initPartial(e, this);
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
Ci.typeName = "code.account.v1.GetTokenAccountInfosResponse";
Ci.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(fa) },
  { no: 2, name: "token_account_infos", kind: "map", K: 9, V: { kind: "message", T: gr } }
]);
var fa;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND";
})(fa || (fa = {}));
i.util.setEnumType(fa, "code.account.v1.GetTokenAccountInfosResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" }
]);
class Ui extends T {
  constructor(e) {
    super(), this.signatures = [], i.util.initPartial(e, this);
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
Ui.typeName = "code.account.v1.LinkAdditionalAccountsRequest";
Ui.fields = i.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: R },
  { no: 2, name: "swap_authority", kind: "message", T: R },
  { no: 3, name: "signatures", kind: "message", T: Q, repeated: !0 }
]);
class qi extends T {
  constructor(e) {
    super(), this.result = ma.OK, i.util.initPartial(e, this);
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
qi.typeName = "code.account.v1.LinkAdditionalAccountsResponse";
qi.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(ma) }
]);
var ma;
(function(n) {
  n[n.OK = 0] = "OK", n[n.DENIED = 1] = "DENIED", n[n.INVALID_ACCOUNT = 2] = "INVALID_ACCOUNT";
})(ma || (ma = {}));
i.util.setEnumType(ma, "code.account.v1.LinkAdditionalAccountsResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "DENIED" },
  { no: 2, name: "INVALID_ACCOUNT" }
]);
class gr extends T {
  constructor(e) {
    super(), this.accountType = ft.UNKNOWN, this.index = ce.zero, this.balanceSource = da.UNKNOWN, this.balance = ce.zero, this.managementState = ha.UNKNOWN, this.blockchainState = pa.UNKNOWN, this.mustRotate = !1, this.claimState = ga.UNKNOWN, i.util.initPartial(e, this);
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
gr.typeName = "code.account.v1.TokenAccountInfo";
gr.fields = i.util.newFieldList(() => [
  { no: 1, name: "address", kind: "message", T: R },
  { no: 2, name: "owner", kind: "message", T: R },
  { no: 3, name: "authority", kind: "message", T: R },
  { no: 4, name: "account_type", kind: "enum", T: i.getEnumType(ft) },
  { no: 5, name: "index", kind: "scalar", T: 4 },
  { no: 6, name: "balance_source", kind: "enum", T: i.getEnumType(da) },
  { no: 7, name: "balance", kind: "scalar", T: 4 },
  { no: 8, name: "management_state", kind: "enum", T: i.getEnumType(ha) },
  { no: 9, name: "blockchain_state", kind: "enum", T: i.getEnumType(pa) },
  { no: 10, name: "must_rotate", kind: "scalar", T: 8 },
  { no: 11, name: "claim_state", kind: "enum", T: i.getEnumType(ga) },
  { no: 12, name: "original_exchange_data", kind: "message", T: _e },
  { no: 13, name: "mint", kind: "message", T: R },
  { no: 16, name: "relationship", kind: "message", T: Ft }
]);
var da;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.BLOCKCHAIN = 1] = "BLOCKCHAIN", n[n.CACHE = 2] = "CACHE";
})(da || (da = {}));
i.util.setEnumType(da, "code.account.v1.TokenAccountInfo.BalanceSource", [
  { no: 0, name: "BALANCE_SOURCE_UNKNOWN" },
  { no: 1, name: "BALANCE_SOURCE_BLOCKCHAIN" },
  { no: 2, name: "BALANCE_SOURCE_CACHE" }
]);
var ha;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.NONE = 1] = "NONE", n[n.LOCKING = 2] = "LOCKING", n[n.LOCKED = 3] = "LOCKED", n[n.UNLOCKING = 4] = "UNLOCKING", n[n.UNLOCKED = 5] = "UNLOCKED", n[n.CLOSING = 6] = "CLOSING", n[n.CLOSED = 7] = "CLOSED";
})(ha || (ha = {}));
i.util.setEnumType(ha, "code.account.v1.TokenAccountInfo.ManagementState", [
  { no: 0, name: "MANAGEMENT_STATE_UNKNOWN" },
  { no: 1, name: "MANAGEMENT_STATE_NONE" },
  { no: 2, name: "MANAGEMENT_STATE_LOCKING" },
  { no: 3, name: "MANAGEMENT_STATE_LOCKED" },
  { no: 4, name: "MANAGEMENT_STATE_UNLOCKING" },
  { no: 5, name: "MANAGEMENT_STATE_UNLOCKED" },
  { no: 6, name: "MANAGEMENT_STATE_CLOSING" },
  { no: 7, name: "MANAGEMENT_STATE_CLOSED" }
]);
var pa;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.DOES_NOT_EXIST = 1] = "DOES_NOT_EXIST", n[n.EXISTS = 2] = "EXISTS";
})(pa || (pa = {}));
i.util.setEnumType(pa, "code.account.v1.TokenAccountInfo.BlockchainState", [
  { no: 0, name: "BLOCKCHAIN_STATE_UNKNOWN" },
  { no: 1, name: "BLOCKCHAIN_STATE_DOES_NOT_EXIST" },
  { no: 2, name: "BLOCKCHAIN_STATE_EXISTS" }
]);
var ga;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.NOT_CLAIMED = 1] = "NOT_CLAIMED", n[n.CLAIMED = 2] = "CLAIMED", n[n.EXPIRED = 3] = "EXPIRED";
})(ga || (ga = {}));
i.util.setEnumType(ga, "code.account.v1.TokenAccountInfo.ClaimState", [
  { no: 0, name: "CLAIM_STATE_UNKNOWN" },
  { no: 1, name: "CLAIM_STATE_NOT_CLAIMED" },
  { no: 2, name: "CLAIM_STATE_CLAIMED" },
  { no: 3, name: "CLAIM_STATE_EXPIRED" }
]);
ee.Unary, ee.Unary, ee.Unary;
class Di extends T {
  constructor(e) {
    super(), i.util.initPartial(e, this);
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
Di.typeName = "code.badge.v1.ResetBadgeCountRequest";
Di.fields = i.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: R },
  { no: 2, name: "signature", kind: "message", T: Q }
]);
class Fi extends T {
  constructor(e) {
    super(), this.result = ya.OK, i.util.initPartial(e, this);
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
Fi.typeName = "code.badge.v1.ResetBadgeCountResponse";
Fi.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(ya) }
]);
var ya;
(function(n) {
  n[n.OK = 0] = "OK";
})(ya || (ya = {}));
i.util.setEnumType(ya, "code.badge.v1.ResetBadgeCountResponse.Result", [
  { no: 0, name: "OK" }
]);
ee.Unary;
class _i extends T {
  constructor(e) {
    super(), this.pageSize = 0, this.direction = wa.ASC, i.util.initPartial(e, this);
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
_i.typeName = "code.chat.v1.GetChatsRequest";
_i.fields = i.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: R },
  { no: 2, name: "signature", kind: "message", T: Q },
  { no: 3, name: "page_size", kind: "scalar", T: 13 },
  { no: 4, name: "cursor", kind: "message", T: gt },
  { no: 5, name: "direction", kind: "enum", T: i.getEnumType(wa) }
]);
var wa;
(function(n) {
  n[n.ASC = 0] = "ASC", n[n.DESC = 1] = "DESC";
})(wa || (wa = {}));
i.util.setEnumType(wa, "code.chat.v1.GetChatsRequest.Direction", [
  { no: 0, name: "ASC" },
  { no: 1, name: "DESC" }
]);
class Ki extends T {
  constructor(e) {
    super(), this.result = Ta.OK, this.chats = [], i.util.initPartial(e, this);
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
Ki.typeName = "code.chat.v1.GetChatsResponse";
Ki.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(Ta) },
  { no: 2, name: "chats", kind: "message", T: yr, repeated: !0 }
]);
var Ta;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND";
})(Ta || (Ta = {}));
i.util.setEnumType(Ta, "code.chat.v1.GetChatsResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" }
]);
class Mi extends T {
  constructor(e) {
    super(), this.pageSize = 0, this.direction = Ea.ASC, i.util.initPartial(e, this);
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
Mi.typeName = "code.chat.v1.GetMessagesRequest";
Mi.fields = i.util.newFieldList(() => [
  { no: 1, name: "chat_id", kind: "message", T: ut },
  { no: 2, name: "owner", kind: "message", T: R },
  { no: 3, name: "signature", kind: "message", T: Q },
  { no: 4, name: "page_size", kind: "scalar", T: 13 },
  { no: 5, name: "cursor", kind: "message", T: gt },
  { no: 6, name: "direction", kind: "enum", T: i.getEnumType(Ea) }
]);
var Ea;
(function(n) {
  n[n.ASC = 0] = "ASC", n[n.DESC = 1] = "DESC";
})(Ea || (Ea = {}));
i.util.setEnumType(Ea, "code.chat.v1.GetMessagesRequest.Direction", [
  { no: 0, name: "ASC" },
  { no: 1, name: "DESC" }
]);
class $i extends T {
  constructor(e) {
    super(), this.result = va.OK, this.messages = [], i.util.initPartial(e, this);
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
$i.typeName = "code.chat.v1.GetMessagesResponse";
$i.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(va) },
  { no: 2, name: "messages", kind: "message", T: wr, repeated: !0 }
]);
var va;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND";
})(va || (va = {}));
i.util.setEnumType(va, "code.chat.v1.GetMessagesResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" }
]);
class Vi extends T {
  constructor(e) {
    super(), i.util.initPartial(e, this);
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
Vi.typeName = "code.chat.v1.AdvancePointerRequest";
Vi.fields = i.util.newFieldList(() => [
  { no: 1, name: "chat_id", kind: "message", T: ut },
  { no: 2, name: "pointer", kind: "message", T: $t },
  { no: 3, name: "owner", kind: "message", T: R },
  { no: 4, name: "signature", kind: "message", T: Q }
]);
class Gi extends T {
  constructor(e) {
    super(), this.result = Na.OK, i.util.initPartial(e, this);
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
Gi.typeName = "code.chat.v1.AdvancePointerResponse";
Gi.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(Na) }
]);
var Na;
(function(n) {
  n[n.OK = 0] = "OK", n[n.CHAT_NOT_FOUND = 1] = "CHAT_NOT_FOUND", n[n.MESSAGE_NOT_FOUND = 2] = "MESSAGE_NOT_FOUND";
})(Na || (Na = {}));
i.util.setEnumType(Na, "code.chat.v1.AdvancePointerResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "CHAT_NOT_FOUND" },
  { no: 2, name: "MESSAGE_NOT_FOUND" }
]);
class ji extends T {
  constructor(e) {
    super(), this.isMuted = !1, i.util.initPartial(e, this);
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
ji.typeName = "code.chat.v1.SetMuteStateRequest";
ji.fields = i.util.newFieldList(() => [
  { no: 1, name: "chat_id", kind: "message", T: ut },
  { no: 2, name: "is_muted", kind: "scalar", T: 8 },
  { no: 3, name: "owner", kind: "message", T: R },
  { no: 4, name: "signature", kind: "message", T: Q }
]);
class Wi extends T {
  constructor(e) {
    super(), this.result = ba.OK, i.util.initPartial(e, this);
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
Wi.typeName = "code.chat.v1.SetMuteStateResponse";
Wi.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(ba) }
]);
var ba;
(function(n) {
  n[n.OK = 0] = "OK", n[n.CHAT_NOT_FOUND = 1] = "CHAT_NOT_FOUND", n[n.CANT_MUTE = 2] = "CANT_MUTE";
})(ba || (ba = {}));
i.util.setEnumType(ba, "code.chat.v1.SetMuteStateResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "CHAT_NOT_FOUND" },
  { no: 2, name: "CANT_MUTE" }
]);
class Hi extends T {
  constructor(e) {
    super(), this.isSubscribed = !1, i.util.initPartial(e, this);
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
Hi.typeName = "code.chat.v1.SetSubscriptionStateRequest";
Hi.fields = i.util.newFieldList(() => [
  { no: 1, name: "chat_id", kind: "message", T: ut },
  { no: 2, name: "is_subscribed", kind: "scalar", T: 8 },
  { no: 3, name: "owner", kind: "message", T: R },
  { no: 4, name: "signature", kind: "message", T: Q }
]);
class zi extends T {
  constructor(e) {
    super(), this.result = Sa.OK, i.util.initPartial(e, this);
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
zi.typeName = "code.chat.v1.SetSubscriptionStateResponse";
zi.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(Sa) }
]);
var Sa;
(function(n) {
  n[n.OK = 0] = "OK", n[n.CHAT_NOT_FOUND = 1] = "CHAT_NOT_FOUND", n[n.CANT_UNSUBSCRIBE = 2] = "CANT_UNSUBSCRIBE";
})(Sa || (Sa = {}));
i.util.setEnumType(Sa, "code.chat.v1.SetSubscriptionStateResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "CHAT_NOT_FOUND" },
  { no: 2, name: "CANT_UNSUBSCRIBE" }
]);
class ut extends T {
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
class Mt extends T {
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
class $t extends T {
  constructor(e) {
    super(), this.kind = Ia.UNKNOWN, i.util.initPartial(e, this);
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
  { no: 1, name: "kind", kind: "enum", T: i.getEnumType(Ia) },
  { no: 2, name: "value", kind: "message", T: Mt }
]);
var Ia;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.READ = 1] = "READ";
})(Ia || (Ia = {}));
i.util.setEnumType(Ia, "code.chat.v1.Pointer.Kind", [
  { no: 0, name: "UNKNOWN" },
  { no: 1, name: "READ" }
]);
class yr extends T {
  constructor(e) {
    super(), this.title = { case: void 0 }, this.numUnread = 0, this.isMuted = !1, this.isSubscribed = !1, this.canMute = !1, this.canUnsubscribe = !1, this.isVerified = !1, i.util.initPartial(e, this);
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
yr.typeName = "code.chat.v1.ChatMetadata";
yr.fields = i.util.newFieldList(() => [
  { no: 1, name: "chat_id", kind: "message", T: ut },
  { no: 2, name: "localized", kind: "message", T: Vt, oneof: "title" },
  { no: 3, name: "domain", kind: "message", T: at, oneof: "title" },
  { no: 4, name: "read_pointer", kind: "message", T: $t },
  { no: 5, name: "num_unread", kind: "scalar", T: 13 },
  { no: 6, name: "is_muted", kind: "scalar", T: 8 },
  { no: 7, name: "is_subscribed", kind: "scalar", T: 8 },
  { no: 8, name: "can_mute", kind: "scalar", T: 8 },
  { no: 9, name: "can_unsubscribe", kind: "scalar", T: 8 },
  { no: 10, name: "cursor", kind: "message", T: gt },
  { no: 11, name: "is_verified", kind: "scalar", T: 8 }
]);
class wr extends T {
  constructor(e) {
    super(), this.content = [], i.util.initPartial(e, this);
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
wr.typeName = "code.chat.v1.ChatMessage";
wr.fields = i.util.newFieldList(() => [
  { no: 1, name: "message_id", kind: "message", T: Mt },
  { no: 2, name: "ts", kind: "message", T: Je },
  { no: 3, name: "content", kind: "message", T: Tr, repeated: !0 },
  { no: 4, name: "cursor", kind: "message", T: gt }
]);
class Tr extends T {
  constructor(e) {
    super(), this.type = { case: void 0 }, i.util.initPartial(e, this);
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
Tr.typeName = "code.chat.v1.Content";
Tr.fields = i.util.newFieldList(() => [
  { no: 1, name: "localized", kind: "message", T: Vt, oneof: "type" },
  { no: 2, name: "exchange_data", kind: "message", T: Er, oneof: "type" },
  { no: 3, name: "nacl_box", kind: "message", T: vr, oneof: "type" }
]);
class Vt extends T {
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
class Er extends T {
  constructor(e) {
    super(), this.verb = ka.UNKNOWN, this.exchangeData = { case: void 0 }, i.util.initPartial(e, this);
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
Er.typeName = "code.chat.v1.ExchangeDataContent";
Er.fields = i.util.newFieldList(() => [
  { no: 1, name: "verb", kind: "enum", T: i.getEnumType(ka) },
  { no: 2, name: "exact", kind: "message", T: _e, oneof: "exchange_data" },
  { no: 3, name: "partial", kind: "message", T: pt, oneof: "exchange_data" }
]);
var ka;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.GAVE = 1] = "GAVE", n[n.RECEIVED = 2] = "RECEIVED", n[n.WITHDREW = 3] = "WITHDREW", n[n.DEPOSITED = 4] = "DEPOSITED", n[n.SENT = 5] = "SENT", n[n.RETURNED = 6] = "RETURNED", n[n.SPENT = 7] = "SPENT", n[n.PAID = 8] = "PAID", n[n.PURCHASED = 9] = "PURCHASED", n[n.RECEIVED_TIP = 10] = "RECEIVED_TIP", n[n.SENT_TIP = 11] = "SENT_TIP";
})(ka || (ka = {}));
i.util.setEnumType(ka, "code.chat.v1.ExchangeDataContent.Verb", [
  { no: 0, name: "UNKNOWN" },
  { no: 1, name: "GAVE" },
  { no: 2, name: "RECEIVED" },
  { no: 3, name: "WITHDREW" },
  { no: 4, name: "DEPOSITED" },
  { no: 5, name: "SENT" },
  { no: 6, name: "RETURNED" },
  { no: 7, name: "SPENT" },
  { no: 8, name: "PAID" },
  { no: 9, name: "PURCHASED" },
  { no: 10, name: "RECEIVED_TIP" },
  { no: 11, name: "SENT_TIP" }
]);
class vr extends T {
  constructor(e) {
    super(), this.nonce = new Uint8Array(0), this.encryptedPayload = new Uint8Array(0), i.util.initPartial(e, this);
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
vr.typeName = "code.chat.v1.NaclBoxEncryptedContent";
vr.fields = i.util.newFieldList(() => [
  { no: 1, name: "peer_public_key", kind: "message", T: R },
  { no: 2, name: "nonce", kind: "scalar", T: 12 },
  { no: 3, name: "encrypted_payload", kind: "scalar", T: 12 }
]);
class gt extends T {
  constructor(e) {
    super(), this.value = new Uint8Array(0), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new gt().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new gt().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new gt().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(gt, e, t);
  }
}
gt.runtime = i;
gt.typeName = "code.chat.v1.Cursor";
gt.fields = i.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
ee.Unary, ee.Unary, ee.Unary, ee.Unary, ee.Unary;
class Xi extends T {
  constructor(e) {
    super(), this.contacts = [], i.util.initPartial(e, this);
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
Xi.typeName = "code.contact.v1.AddContactsRequest";
Xi.fields = i.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: R },
  { no: 2, name: "signature", kind: "message", T: Q },
  { no: 3, name: "container_id", kind: "message", T: et },
  { no: 4, name: "contacts", kind: "message", T: qe, repeated: !0 }
]);
class Yi extends T {
  constructor(e) {
    super(), this.result = Oa.OK, this.contactStatus = {}, i.util.initPartial(e, this);
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
Yi.typeName = "code.contact.v1.AddContactsResponse";
Yi.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(Oa) },
  { no: 2, name: "contact_status", kind: "map", K: 9, V: { kind: "message", T: Gt } }
]);
var Oa;
(function(n) {
  n[n.OK = 0] = "OK";
})(Oa || (Oa = {}));
i.util.setEnumType(Oa, "code.contact.v1.AddContactsResponse.Result", [
  { no: 0, name: "OK" }
]);
class Zi extends T {
  constructor(e) {
    super(), this.contacts = [], i.util.initPartial(e, this);
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
Zi.typeName = "code.contact.v1.RemoveContactsRequest";
Zi.fields = i.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: R },
  { no: 2, name: "signature", kind: "message", T: Q },
  { no: 3, name: "container_id", kind: "message", T: et },
  { no: 4, name: "contacts", kind: "message", T: qe, repeated: !0 }
]);
class Qi extends T {
  constructor(e) {
    super(), this.result = Ba.OK, i.util.initPartial(e, this);
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
Qi.typeName = "code.contact.v1.RemoveContactsResponse";
Qi.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(Ba) }
]);
var Ba;
(function(n) {
  n[n.OK = 0] = "OK";
})(Ba || (Ba = {}));
i.util.setEnumType(Ba, "code.contact.v1.RemoveContactsResponse.Result", [
  { no: 0, name: "OK" }
]);
class es extends T {
  constructor(e) {
    super(), this.includeOnlyInAppContacts = !1, i.util.initPartial(e, this);
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
es.typeName = "code.contact.v1.GetContactsRequest";
es.fields = i.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: R },
  { no: 2, name: "signature", kind: "message", T: Q },
  { no: 3, name: "container_id", kind: "message", T: et },
  { no: 4, name: "page_token", kind: "message", T: ou },
  { no: 5, name: "include_only_in_app_contacts", kind: "scalar", T: 8 }
]);
class ts extends T {
  constructor(e) {
    super(), this.result = Aa.OK, this.contacts = [], i.util.initPartial(e, this);
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
ts.typeName = "code.contact.v1.GetContactsResponse";
ts.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(Aa) },
  { no: 2, name: "contacts", kind: "message", T: Nr, repeated: !0 },
  { no: 3, name: "next_page_token", kind: "message", T: ou }
]);
var Aa;
(function(n) {
  n[n.OK = 0] = "OK";
})(Aa || (Aa = {}));
i.util.setEnumType(Aa, "code.contact.v1.GetContactsResponse.Result", [
  { no: 0, name: "OK" }
]);
class Nr extends T {
  constructor(e) {
    super(), i.util.initPartial(e, this);
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
Nr.typeName = "code.contact.v1.Contact";
Nr.fields = i.util.newFieldList(() => [
  { no: 1, name: "phone_number", kind: "message", T: qe },
  { no: 2, name: "status", kind: "message", T: Gt }
]);
class Gt extends T {
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
let ou = class Po extends T {
  constructor(e) {
    super(), this.value = new Uint8Array(0), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Po().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Po().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Po().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Po, e, t);
  }
};
ou.runtime = i;
ou.typeName = "code.contact.v1.PageToken";
ou.fields = i.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
ee.Unary, ee.Unary, ee.Unary;
class ns extends T {
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
ns.typeName = "code.currency.v1.GetAllRatesRequest";
ns.fields = i.util.newFieldList(() => [
  { no: 1, name: "timestamp", kind: "message", T: Je }
]);
class rs extends T {
  constructor(e) {
    super(), this.result = Ja.OK, this.rates = {}, i.util.initPartial(e, this);
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
rs.typeName = "code.currency.v1.GetAllRatesResponse";
rs.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(Ja) },
  { no: 2, name: "as_of", kind: "message", T: Je },
  { no: 3, name: "rates", kind: "map", K: 9, V: { kind: "scalar", T: 1 } }
]);
var Ja;
(function(n) {
  n[n.OK = 0] = "OK", n[n.MISSING_DATA = 1] = "MISSING_DATA";
})(Ja || (Ja = {}));
i.util.setEnumType(Ja, "code.currency.v1.GetAllRatesResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "MISSING_DATA" }
]);
ee.Unary;
class is extends T {
  constructor(e) {
    super(), this.owners = [], this.signatures = [], i.util.initPartial(e, this);
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
is.typeName = "code.device.v1.RegisterLoggedInAccountsRequest";
is.fields = i.util.newFieldList(() => [
  { no: 1, name: "app_install", kind: "message", T: St },
  { no: 2, name: "owners", kind: "message", T: R, repeated: !0 },
  { no: 3, name: "signatures", kind: "message", T: Q, repeated: !0 }
]);
class ss extends T {
  constructor(e) {
    super(), this.result = Ra.OK, this.invalidOwners = [], i.util.initPartial(e, this);
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
ss.typeName = "code.device.v1.RegisterLoggedInAccountsResponse";
ss.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(Ra) },
  { no: 2, name: "invalid_owners", kind: "message", T: R, repeated: !0 }
]);
var Ra;
(function(n) {
  n[n.OK = 0] = "OK", n[n.INVALID_OWNER = 1] = "INVALID_OWNER";
})(Ra || (Ra = {}));
i.util.setEnumType(Ra, "code.device.v1.RegisterLoggedInAccountsResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INVALID_OWNER" }
]);
class os extends T {
  constructor(e) {
    super(), i.util.initPartial(e, this);
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
os.typeName = "code.device.v1.GetLoggedInAccountsRequest";
os.fields = i.util.newFieldList(() => [
  { no: 1, name: "app_install", kind: "message", T: St }
]);
class as extends T {
  constructor(e) {
    super(), this.result = xa.OK, this.owners = [], i.util.initPartial(e, this);
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
as.typeName = "code.device.v1.GetLoggedInAccountsResponse";
as.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(xa) },
  { no: 2, name: "owners", kind: "message", T: R, repeated: !0 }
]);
var xa;
(function(n) {
  n[n.OK = 0] = "OK";
})(xa || (xa = {}));
i.util.setEnumType(xa, "code.device.v1.GetLoggedInAccountsResponse.Result", [
  { no: 0, name: "OK" }
]);
ee.Unary, ee.Unary;
var Pa;
(function(n) {
  n[n.NOT_INVITED = 0] = "NOT_INVITED", n[n.INVITED = 1] = "INVITED", n[n.REGISTERED = 2] = "REGISTERED", n[n.REVOKED = 3] = "REVOKED";
})(Pa || (Pa = {}));
i.util.setEnumType(Pa, "code.invite.v2.InvitationStatus", [
  { no: 0, name: "NOT_INVITED" },
  { no: 1, name: "INVITED" },
  { no: 2, name: "REGISTERED" },
  { no: 3, name: "REVOKED" }
]);
class us extends T {
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
us.typeName = "code.invite.v2.GetInviteCountRequest";
us.fields = i.util.newFieldList(() => [
  { no: 1, name: "user_id", kind: "message", T: ht }
]);
class cs extends T {
  constructor(e) {
    super(), this.result = La.OK, this.inviteCount = 0, i.util.initPartial(e, this);
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
cs.typeName = "code.invite.v2.GetInviteCountResponse";
cs.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(La) },
  { no: 2, name: "invite_count", kind: "scalar", T: 13 }
]);
var La;
(function(n) {
  n[n.OK = 0] = "OK";
})(La || (La = {}));
i.util.setEnumType(La, "code.invite.v2.GetInviteCountResponse.Result", [
  { no: 0, name: "OK" }
]);
class ls extends T {
  constructor(e) {
    super(), this.source = { case: void 0 }, i.util.initPartial(e, this);
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
ls.typeName = "code.invite.v2.InvitePhoneNumberRequest";
ls.fields = i.util.newFieldList(() => [
  { no: 1, name: "user", kind: "message", T: ht, oneof: "source" },
  { no: 3, name: "invite_code", kind: "message", T: br, oneof: "source" },
  { no: 2, name: "receiver", kind: "message", T: qe }
]);
class fs extends T {
  constructor(e) {
    super(), this.result = Ca.OK, i.util.initPartial(e, this);
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
fs.typeName = "code.invite.v2.InvitePhoneNumberResponse";
fs.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(Ca) }
]);
var Ca;
(function(n) {
  n[n.OK = 0] = "OK", n[n.INVITE_COUNT_EXCEEDED = 1] = "INVITE_COUNT_EXCEEDED", n[n.ALREADY_INVITED = 2] = "ALREADY_INVITED", n[n.USER_NOT_INVITED = 3] = "USER_NOT_INVITED", n[n.INVALID_RECEIVER_PHONE_NUMBER = 4] = "INVALID_RECEIVER_PHONE_NUMBER", n[n.INVITE_CODE_NOT_FOUND = 5] = "INVITE_CODE_NOT_FOUND", n[n.INVITE_CODE_REVOKED = 6] = "INVITE_CODE_REVOKED", n[n.INVITE_CODE_EXPIRED = 7] = "INVITE_CODE_EXPIRED";
})(Ca || (Ca = {}));
i.util.setEnumType(Ca, "code.invite.v2.InvitePhoneNumberResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INVITE_COUNT_EXCEEDED" },
  { no: 2, name: "ALREADY_INVITED" },
  { no: 3, name: "USER_NOT_INVITED" },
  { no: 4, name: "INVALID_RECEIVER_PHONE_NUMBER" },
  { no: 5, name: "INVITE_CODE_NOT_FOUND" },
  { no: 6, name: "INVITE_CODE_REVOKED" },
  { no: 7, name: "INVITE_CODE_EXPIRED" }
]);
class ms extends T {
  constructor(e) {
    super(), i.util.initPartial(e, this);
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
ms.typeName = "code.invite.v2.GetInvitationStatusRequest";
ms.fields = i.util.newFieldList(() => [
  { no: 1, name: "user_id", kind: "message", T: ht }
]);
class ds extends T {
  constructor(e) {
    super(), this.result = Ua.OK, this.status = Pa.NOT_INVITED, i.util.initPartial(e, this);
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
ds.typeName = "code.invite.v2.GetInvitationStatusResponse";
ds.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(Ua) },
  { no: 2, name: "status", kind: "enum", T: i.getEnumType(Pa) }
]);
var Ua;
(function(n) {
  n[n.OK = 0] = "OK";
})(Ua || (Ua = {}));
i.util.setEnumType(Ua, "code.invite.v2.GetInvitationStatusResponse.Result", [
  { no: 0, name: "OK" }
]);
class br extends T {
  constructor(e) {
    super(), this.value = "", i.util.initPartial(e, this);
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
br.typeName = "code.invite.v2.InviteCode";
br.fields = i.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 9 }
]);
class hs extends T {
  constructor(e) {
    super(), this.value = new Uint8Array(0), i.util.initPartial(e, this);
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
hs.typeName = "code.invite.v2.PageToken";
hs.fields = i.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
ee.Unary, ee.Unary, ee.Unary;
class jt extends T {
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
  { no: 2, name: "signature", kind: "message", T: Q }
]);
class Wt extends T {
  constructor(e) {
    super(), this.messages = [], i.util.initPartial(e, this);
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
Wt.typeName = "code.messaging.v1.OpenMessageStreamResponse";
Wt.fields = i.util.newFieldList(() => [
  { no: 1, name: "messages", kind: "message", T: it, repeated: !0 }
]);
class Sr extends T {
  constructor(e) {
    super(), this.requestOrPong = { case: void 0 }, i.util.initPartial(e, this);
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
Sr.typeName = "code.messaging.v1.OpenMessageStreamWithKeepAliveRequest";
Sr.fields = i.util.newFieldList(() => [
  { no: 1, name: "request", kind: "message", T: jt, oneof: "requestOrPong" },
  { no: 2, name: "pong", kind: "message", T: Fr, oneof: "requestOrPong" }
]);
class Ir extends T {
  constructor(e) {
    super(), this.responseOrPing = { case: void 0 }, i.util.initPartial(e, this);
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
Ir.typeName = "code.messaging.v1.OpenMessageStreamWithKeepAliveResponse";
Ir.fields = i.util.newFieldList(() => [
  { no: 1, name: "response", kind: "message", T: Wt, oneof: "responseOrPing" },
  { no: 2, name: "ping", kind: "message", T: Dr, oneof: "responseOrPing" }
]);
class kr extends T {
  constructor(e) {
    super(), i.util.initPartial(e, this);
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
kr.typeName = "code.messaging.v1.PollMessagesRequest";
kr.fields = i.util.newFieldList(() => [
  { no: 1, name: "rendezvous_key", kind: "message", T: rt },
  { no: 2, name: "signature", kind: "message", T: Q }
]);
class Or extends T {
  constructor(e) {
    super(), this.messages = [], i.util.initPartial(e, this);
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
Or.typeName = "code.messaging.v1.PollMessagesResponse";
Or.fields = i.util.newFieldList(() => [
  { no: 1, name: "messages", kind: "message", T: it, repeated: !0 }
]);
class Br extends T {
  constructor(e) {
    super(), this.messageIds = [], i.util.initPartial(e, this);
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
Br.typeName = "code.messaging.v1.AckMessagesRequest";
Br.fields = i.util.newFieldList(() => [
  { no: 1, name: "rendezvous_key", kind: "message", T: rt },
  { no: 2, name: "message_ids", kind: "message", T: kt, repeated: !0 }
]);
class Ar extends T {
  constructor(e) {
    super(), this.result = qa.OK, i.util.initPartial(e, this);
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
Ar.typeName = "code.messaging.v1.AckMesssagesResponse";
Ar.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(qa) }
]);
var qa;
(function(n) {
  n[n.OK = 0] = "OK";
})(qa || (qa = {}));
i.util.setEnumType(qa, "code.messaging.v1.AckMesssagesResponse.Result", [
  { no: 0, name: "OK" }
]);
class Ht extends T {
  constructor(e) {
    super(), i.util.initPartial(e, this);
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
Ht.typeName = "code.messaging.v1.SendMessageRequest";
Ht.fields = i.util.newFieldList(() => [
  { no: 1, name: "message", kind: "message", T: it },
  { no: 2, name: "rendezvous_key", kind: "message", T: rt },
  { no: 3, name: "signature", kind: "message", T: Q }
]);
class Jr extends T {
  constructor(e) {
    super(), this.result = vo.OK, i.util.initPartial(e, this);
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
Jr.typeName = "code.messaging.v1.SendMessageResponse";
Jr.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(vo) },
  { no: 2, name: "message_id", kind: "message", T: kt }
]);
var vo;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NO_ACTIVE_STREAM = 1] = "NO_ACTIVE_STREAM";
})(vo || (vo = {}));
i.util.setEnumType(vo, "code.messaging.v1.SendMessageResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NO_ACTIVE_STREAM" }
]);
class rt extends T {
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
class kt extends T {
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
class Rr extends T {
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
Rr.typeName = "code.messaging.v1.RequestToGrabBill";
Rr.fields = i.util.newFieldList(() => [
  { no: 1, name: "requestor_account", kind: "message", T: R }
]);
class zt extends T {
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
  { no: 2, name: "exact", kind: "message", T: _e, oneof: "exchange_data" },
  { no: 3, name: "partial", kind: "message", T: pt, oneof: "exchange_data" },
  { no: 4, name: "domain", kind: "message", T: at },
  { no: 5, name: "verifier", kind: "message", T: R },
  { no: 6, name: "signature", kind: "message", T: Q },
  { no: 7, name: "rendezvous_key", kind: "message", T: rt },
  { no: 8, name: "additional_fees", kind: "message", T: Kt, repeated: !0 }
]);
class xr extends T {
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
xr.typeName = "code.messaging.v1.CodeScanned";
xr.fields = i.util.newFieldList(() => [
  { no: 1, name: "timestamp", kind: "message", T: Je }
]);
class Pr extends T {
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
Pr.typeName = "code.messaging.v1.ClientRejectedPayment";
Pr.fields = i.util.newFieldList(() => [
  { no: 1, name: "intent_id", kind: "message", T: Ue }
]);
class Lr extends T {
  constructor(e) {
    super(), i.util.initPartial(e, this);
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
Lr.typeName = "code.messaging.v1.IntentSubmitted";
Lr.fields = i.util.newFieldList(() => [
  { no: 1, name: "intent_id", kind: "message", T: Ue },
  { no: 2, name: "metadata", kind: "message", T: It }
]);
class Cr extends T {
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
Cr.typeName = "code.messaging.v1.WebhookCalled";
Cr.fields = i.util.newFieldList(() => [
  { no: 1, name: "timestamp", kind: "message", T: Je }
]);
class Xt extends T {
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
  { no: 5, name: "signature", kind: "message", T: Q },
  { no: 6, name: "rendezvous_key", kind: "message", T: rt }
]);
class Ur extends T {
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
Ur.typeName = "code.messaging.v1.ClientRejectedLogin";
Ur.fields = i.util.newFieldList(() => [
  { no: 4, name: "timestamp", kind: "message", T: Je }
]);
class qr extends T {
  constructor(e) {
    super(), this.airdropType = an.UNKNOWN, i.util.initPartial(e, this);
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
qr.typeName = "code.messaging.v1.AirdropReceived";
qr.fields = i.util.newFieldList(() => [
  { no: 1, name: "airdrop_type", kind: "enum", T: i.getEnumType(an) },
  { no: 2, name: "exchange_data", kind: "message", T: _e },
  { no: 3, name: "timestamp", kind: "message", T: Je }
]);
class it extends T {
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
  { no: 3, name: "send_message_request_signature", kind: "message", T: Q },
  { no: 2, name: "request_to_grab_bill", kind: "message", T: Rr, oneof: "kind" },
  { no: 5, name: "request_to_receive_bill", kind: "message", T: zt, oneof: "kind" },
  { no: 6, name: "code_scanned", kind: "message", T: xr, oneof: "kind" },
  { no: 7, name: "client_rejected_payment", kind: "message", T: Pr, oneof: "kind" },
  { no: 8, name: "intent_submitted", kind: "message", T: Lr, oneof: "kind" },
  { no: 9, name: "webhook_called", kind: "message", T: Cr, oneof: "kind" },
  { no: 10, name: "request_to_login", kind: "message", T: Xt, oneof: "kind" },
  { no: 12, name: "client_rejected_login", kind: "message", T: Ur, oneof: "kind" },
  { no: 4, name: "airdrop_received", kind: "message", T: qr, oneof: "kind" }
]);
class Dr extends T {
  constructor(e) {
    super(), i.util.initPartial(e, this);
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
Dr.typeName = "code.messaging.v1.ServerPing";
Dr.fields = i.util.newFieldList(() => [
  { no: 1, name: "timestamp", kind: "message", T: Je },
  { no: 2, name: "ping_delay", kind: "message", T: pn }
]);
class Fr extends T {
  constructor(e) {
    super(), i.util.initPartial(e, this);
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
Fr.typeName = "code.messaging.v1.ClientPong";
Fr.fields = i.util.newFieldList(() => [
  { no: 1, name: "timestamp", kind: "message", T: Je }
]);
const Zy = {
  typeName: "code.messaging.v1.Messaging",
  methods: {
    openMessageStream: {
      name: "OpenMessageStream",
      I: jt,
      O: Wt,
      kind: ee.ServerStreaming
    },
    openMessageStreamWithKeepAlive: {
      name: "OpenMessageStreamWithKeepAlive",
      I: Sr,
      O: Ir,
      kind: ee.BiDiStreaming
    },
    pollMessages: {
      name: "PollMessages",
      I: kr,
      O: Or,
      kind: ee.Unary
    },
    ackMessages: {
      name: "AckMessages",
      I: Br,
      O: Ar,
      kind: ee.Unary
    },
    sendMessage: {
      name: "SendMessage",
      I: Ht,
      O: Jr,
      kind: ee.Unary
    }
  }
};
class Yt extends T {
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
  { no: 1, name: "intent_id", kind: "message", T: Ue }
]);
class _r extends T {
  constructor(e) {
    super(), this.exists = !1, this.codeScanned = !1, this.intentSubmitted = !1, i.util.initPartial(e, this);
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
_r.typeName = "code.micropayment.v1.GetStatusResponse";
_r.fields = i.util.newFieldList(() => [
  { no: 1, name: "exists", kind: "scalar", T: 8 },
  { no: 2, name: "code_scanned", kind: "scalar", T: 8 },
  { no: 3, name: "intent_submitted", kind: "scalar", T: 8 }
]);
class Zt extends T {
  constructor(e) {
    super(), this.url = "", i.util.initPartial(e, this);
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
Zt.typeName = "code.micropayment.v1.RegisterWebhookRequest";
Zt.fields = i.util.newFieldList(() => [
  { no: 1, name: "intent_id", kind: "message", T: Ue },
  { no: 2, name: "url", kind: "scalar", T: 9 }
]);
class Kr extends T {
  constructor(e) {
    super(), this.result = Nt.OK, i.util.initPartial(e, this);
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
Kr.typeName = "code.micropayment.v1.RegisterWebhookResponse";
Kr.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(Nt) }
]);
var Nt;
(function(n) {
  n[n.OK = 0] = "OK", n[n.ALREADY_REGISTERED = 1] = "ALREADY_REGISTERED", n[n.REQUEST_NOT_FOUND = 2] = "REQUEST_NOT_FOUND", n[n.INTENT_EXISTS = 3] = "INTENT_EXISTS", n[n.INVALID_URL = 4] = "INVALID_URL";
})(Nt || (Nt = {}));
i.util.setEnumType(Nt, "code.micropayment.v1.RegisterWebhookResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "ALREADY_REGISTERED" },
  { no: 2, name: "REQUEST_NOT_FOUND" },
  { no: 3, name: "INTENT_EXISTS" },
  { no: 4, name: "INVALID_URL" }
]);
class Mr extends T {
  constructor(e) {
    super(), this.url = "", this.currency = "", this.nativeAmount = 0, i.util.initPartial(e, this);
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
Mr.typeName = "code.micropayment.v1.CodifyRequest";
Mr.fields = i.util.newFieldList(() => [
  { no: 1, name: "url", kind: "scalar", T: 9 },
  { no: 2, name: "currency", kind: "scalar", T: 9 },
  { no: 3, name: "native_amount", kind: "scalar", T: 1 },
  { no: 4, name: "owner_account", kind: "message", T: R },
  { no: 5, name: "primary_account", kind: "message", T: R },
  { no: 6, name: "signature", kind: "message", T: Q }
]);
class $r extends T {
  constructor(e) {
    super(), this.result = Da.OK, this.codifiedUrl = "", i.util.initPartial(e, this);
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
$r.typeName = "code.micropayment.v1.CodifyResponse";
$r.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(Da) },
  { no: 2, name: "codified_url", kind: "scalar", T: 9 }
]);
var Da;
(function(n) {
  n[n.OK = 0] = "OK", n[n.INVALID_URL = 1] = "INVALID_URL", n[n.INVALID_ACCOUNT = 2] = "INVALID_ACCOUNT", n[n.UNSUPPORTED_CURRENCY = 3] = "UNSUPPORTED_CURRENCY", n[n.NATIVE_AMOUNT_EXCEEDS_LIMIT = 4] = "NATIVE_AMOUNT_EXCEEDS_LIMIT";
})(Da || (Da = {}));
i.util.setEnumType(Da, "code.micropayment.v1.CodifyResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INVALID_URL" },
  { no: 2, name: "INVALID_ACCOUNT" },
  { no: 3, name: "UNSUPPORTED_CURRENCY" },
  { no: 4, name: "NATIVE_AMOUNT_EXCEEDS_LIMIT" }
]);
class Vr extends T {
  constructor(e) {
    super(), this.path = "", i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Vr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Vr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Vr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Vr, e, t);
  }
}
Vr.runtime = i;
Vr.typeName = "code.micropayment.v1.GetPathMetadataRequest";
Vr.fields = i.util.newFieldList(() => [
  { no: 1, name: "path", kind: "scalar", T: 9 }
]);
class Gr extends T {
  constructor(e) {
    super(), this.result = Fa.OK, this.currency = "", this.nativeAmount = 0, this.redirctUrl = "", i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Gr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Gr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Gr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Gr, e, t);
  }
}
Gr.runtime = i;
Gr.typeName = "code.micropayment.v1.GetPathMetadataResponse";
Gr.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(Fa) },
  { no: 2, name: "destination", kind: "message", T: R },
  { no: 3, name: "currency", kind: "scalar", T: 9 },
  { no: 4, name: "native_amount", kind: "scalar", T: 1 },
  { no: 5, name: "redirct_url", kind: "scalar", T: 9 }
]);
var Fa;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND";
})(Fa || (Fa = {}));
i.util.setEnumType(Fa, "code.micropayment.v1.GetPathMetadataResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" }
]);
const Ed = {
  typeName: "code.micropayment.v1.MicroPayment",
  methods: {
    getStatus: {
      name: "GetStatus",
      I: Yt,
      O: _r,
      kind: ee.Unary
    },
    registerWebhook: {
      name: "RegisterWebhook",
      I: Zt,
      O: Kr,
      kind: ee.Unary
    },
    codify: {
      name: "Codify",
      I: Mr,
      O: $r,
      kind: ee.Unary
    },
    getPathMetadata: {
      name: "GetPathMetadata",
      I: Vr,
      O: Gr,
      kind: ee.Unary
    }
  }
};
class ps extends T {
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
ps.typeName = "code.phone.v1.SendVerificationCodeRequest";
ps.fields = i.util.newFieldList(() => [
  { no: 1, name: "phone_number", kind: "message", T: qe },
  { no: 2, name: "device_token", kind: "message", T: Dt }
]);
class gs extends T {
  constructor(e) {
    super(), this.result = _a.OK, i.util.initPartial(e, this);
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
gs.typeName = "code.phone.v1.SendVerificationCodeResponse";
gs.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(_a) }
]);
var _a;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_INVITED = 1] = "NOT_INVITED", n[n.RATE_LIMITED = 2] = "RATE_LIMITED", n[n.INVALID_PHONE_NUMBER = 3] = "INVALID_PHONE_NUMBER", n[n.UNSUPPORTED_PHONE_TYPE = 4] = "UNSUPPORTED_PHONE_TYPE";
})(_a || (_a = {}));
i.util.setEnumType(_a, "code.phone.v1.SendVerificationCodeResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_INVITED" },
  { no: 2, name: "RATE_LIMITED" },
  { no: 3, name: "INVALID_PHONE_NUMBER" },
  { no: 4, name: "UNSUPPORTED_PHONE_TYPE" }
]);
class ys extends T {
  constructor(e) {
    super(), i.util.initPartial(e, this);
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
ys.typeName = "code.phone.v1.CheckVerificationCodeRequest";
ys.fields = i.util.newFieldList(() => [
  { no: 1, name: "phone_number", kind: "message", T: qe },
  { no: 2, name: "code", kind: "message", T: Qt }
]);
class ws extends T {
  constructor(e) {
    super(), this.result = Ka.OK, i.util.initPartial(e, this);
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
ws.typeName = "code.phone.v1.CheckVerificationCodeResponse";
ws.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(Ka) },
  { no: 2, name: "linking_token", kind: "message", T: en }
]);
var Ka;
(function(n) {
  n[n.OK = 0] = "OK", n[n.INVALID_CODE = 1] = "INVALID_CODE", n[n.NO_VERIFICATION = 2] = "NO_VERIFICATION", n[n.RATE_LIMITED = 3] = "RATE_LIMITED";
})(Ka || (Ka = {}));
i.util.setEnumType(Ka, "code.phone.v1.CheckVerificationCodeResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INVALID_CODE" },
  { no: 2, name: "NO_VERIFICATION" },
  { no: 3, name: "RATE_LIMITED" }
]);
class Ts extends T {
  constructor(e) {
    super(), i.util.initPartial(e, this);
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
Ts.typeName = "code.phone.v1.GetAssociatedPhoneNumberRequest";
Ts.fields = i.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: R },
  { no: 2, name: "signature", kind: "message", T: Q }
]);
class Es extends T {
  constructor(e) {
    super(), this.result = Ma.OK, this.isLinked = !1, i.util.initPartial(e, this);
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
Es.typeName = "code.phone.v1.GetAssociatedPhoneNumberResponse";
Es.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(Ma) },
  { no: 2, name: "phone_number", kind: "message", T: qe },
  { no: 3, name: "is_linked", kind: "scalar", T: 8 }
]);
var Ma;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND", n[n.NOT_INVITED = 2] = "NOT_INVITED", n[n.UNLOCKED_TIMELOCK_ACCOUNT = 3] = "UNLOCKED_TIMELOCK_ACCOUNT";
})(Ma || (Ma = {}));
i.util.setEnumType(Ma, "code.phone.v1.GetAssociatedPhoneNumberResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" },
  { no: 2, name: "NOT_INVITED" },
  { no: 3, name: "UNLOCKED_TIMELOCK_ACCOUNT" }
]);
class Qt extends T {
  constructor(e) {
    super(), this.value = "", i.util.initPartial(e, this);
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
Qt.typeName = "code.phone.v1.VerificationCode";
Qt.fields = i.util.newFieldList(() => [
  { no: 2, name: "value", kind: "scalar", T: 9 }
]);
class en extends T {
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
  { no: 1, name: "phone_number", kind: "message", T: qe },
  { no: 2, name: "code", kind: "message", T: Qt }
]);
ee.Unary, ee.Unary, ee.Unary;
var $a;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.FCM_ANDROID = 1] = "FCM_ANDROID", n[n.FCM_APNS = 2] = "FCM_APNS";
})($a || ($a = {}));
i.util.setEnumType($a, "code.push.v1.TokenType", [
  { no: 0, name: "UNKNOWN" },
  { no: 1, name: "FCM_ANDROID" },
  { no: 2, name: "FCM_APNS" }
]);
class vs extends T {
  constructor(e) {
    super(), this.pushToken = "", this.tokenType = $a.UNKNOWN, i.util.initPartial(e, this);
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
vs.typeName = "code.push.v1.AddTokenRequest";
vs.fields = i.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: R },
  { no: 2, name: "signature", kind: "message", T: Q },
  { no: 3, name: "container_id", kind: "message", T: et },
  { no: 4, name: "push_token", kind: "scalar", T: 9 },
  { no: 5, name: "token_type", kind: "enum", T: i.getEnumType($a) },
  { no: 6, name: "app_install", kind: "message", T: St }
]);
class Ns extends T {
  constructor(e) {
    super(), this.result = Va.OK, i.util.initPartial(e, this);
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
Ns.typeName = "code.push.v1.AddTokenResponse";
Ns.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(Va) }
]);
var Va;
(function(n) {
  n[n.OK = 0] = "OK", n[n.INVALID_PUSH_TOKEN = 1] = "INVALID_PUSH_TOKEN";
})(Va || (Va = {}));
i.util.setEnumType(Va, "code.push.v1.AddTokenResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INVALID_PUSH_TOKEN" }
]);
ee.Unary;
ee.BiDiStreaming, ee.Unary, ee.Unary, ee.Unary, ee.Unary, ee.Unary, ee.Unary, ee.Unary, ee.BiDiStreaming, ee.Unary;
class bs extends T {
  constructor(e) {
    super(), this.token = { case: void 0 }, i.util.initPartial(e, this);
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
bs.typeName = "code.user.v1.LinkAccountRequest";
bs.fields = i.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: R },
  { no: 2, name: "signature", kind: "message", T: Q },
  { no: 3, name: "phone", kind: "message", T: en, oneof: "token" }
]);
class Ss extends T {
  constructor(e) {
    super(), this.result = Ga.OK, this.metadata = { case: void 0 }, i.util.initPartial(e, this);
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
Ss.typeName = "code.user.v1.LinkAccountResponse";
Ss.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(Ga) },
  { no: 2, name: "user", kind: "message", T: tn },
  { no: 3, name: "data_container_id", kind: "message", T: et },
  { no: 5, name: "phone", kind: "message", T: nn, oneof: "metadata" }
]);
var Ga;
(function(n) {
  n[n.OK = 0] = "OK", n[n.INVALID_TOKEN = 1] = "INVALID_TOKEN", n[n.RATE_LIMITED = 2] = "RATE_LIMITED";
})(Ga || (Ga = {}));
i.util.setEnumType(Ga, "code.user.v1.LinkAccountResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INVALID_TOKEN" },
  { no: 2, name: "RATE_LIMITED" }
]);
class Is extends T {
  constructor(e) {
    super(), this.identifyingFeature = { case: void 0 }, i.util.initPartial(e, this);
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
Is.typeName = "code.user.v1.UnlinkAccountRequest";
Is.fields = i.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: R },
  { no: 2, name: "signature", kind: "message", T: Q },
  { no: 4, name: "phone_number", kind: "message", T: qe, oneof: "identifying_feature" }
]);
class ks extends T {
  constructor(e) {
    super(), this.result = ja.OK, i.util.initPartial(e, this);
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
ks.typeName = "code.user.v1.UnlinkAccountResponse";
ks.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(ja) }
]);
var ja;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NEVER_ASSOCIATED = 1] = "NEVER_ASSOCIATED";
})(ja || (ja = {}));
i.util.setEnumType(ja, "code.user.v1.UnlinkAccountResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NEVER_ASSOCIATED" }
]);
class Os extends T {
  constructor(e) {
    super(), this.identifyingFeature = { case: void 0 }, i.util.initPartial(e, this);
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
Os.typeName = "code.user.v1.GetUserRequest";
Os.fields = i.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: R },
  { no: 2, name: "signature", kind: "message", T: Q },
  { no: 3, name: "phone_number", kind: "message", T: qe, oneof: "identifying_feature" }
]);
class Bs extends T {
  constructor(e) {
    super(), this.result = Wa.OK, this.metadata = { case: void 0 }, this.enableInternalFlags = !1, this.eligibleAirdrops = [], i.util.initPartial(e, this);
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
Bs.typeName = "code.user.v1.GetUserResponse";
Bs.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(Wa) },
  { no: 2, name: "user", kind: "message", T: tn },
  { no: 3, name: "data_container_id", kind: "message", T: et },
  { no: 5, name: "phone", kind: "message", T: nn, oneof: "metadata" },
  { no: 6, name: "enable_internal_flags", kind: "scalar", T: 8 },
  { no: 7, name: "eligible_airdrops", kind: "enum", T: i.getEnumType(an), repeated: !0 }
]);
var Wa;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND", n[n.NOT_INVITED = 2] = "NOT_INVITED", n[n.UNLOCKED_TIMELOCK_ACCOUNT = 3] = "UNLOCKED_TIMELOCK_ACCOUNT";
})(Wa || (Wa = {}));
i.util.setEnumType(Wa, "code.user.v1.GetUserResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" },
  { no: 2, name: "NOT_INVITED" },
  { no: 3, name: "UNLOCKED_TIMELOCK_ACCOUNT" }
]);
class As extends T {
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
As.typeName = "code.user.v1.UpdatePreferencesRequest";
As.fields = i.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: R },
  { no: 2, name: "container_id", kind: "message", T: et },
  { no: 3, name: "signature", kind: "message", T: Q },
  { no: 4, name: "locale", kind: "message", T: yn }
]);
class Js extends T {
  constructor(e) {
    super(), this.result = Ha.OK, i.util.initPartial(e, this);
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
Js.typeName = "code.user.v1.UpdatePreferencesResponse";
Js.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(Ha) }
]);
var Ha;
(function(n) {
  n[n.OK = 0] = "OK", n[n.INVALID_LOCALE = 1] = "INVALID_LOCALE";
})(Ha || (Ha = {}));
i.util.setEnumType(Ha, "code.user.v1.UpdatePreferencesResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INVALID_LOCALE" }
]);
class Rs extends T {
  constructor(e) {
    super(), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Rs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Rs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Rs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Rs, e, t);
  }
}
Rs.runtime = i;
Rs.typeName = "code.user.v1.LoginToThirdPartyAppRequest";
Rs.fields = i.util.newFieldList(() => [
  { no: 1, name: "intent_id", kind: "message", T: Ue },
  { no: 2, name: "user_id", kind: "message", T: R },
  { no: 3, name: "signature", kind: "message", T: Q }
]);
class xs extends T {
  constructor(e) {
    super(), this.result = za.OK, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new xs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new xs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new xs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(xs, e, t);
  }
}
xs.runtime = i;
xs.typeName = "code.user.v1.LoginToThirdPartyAppResponse";
xs.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(za) }
]);
var za;
(function(n) {
  n[n.OK = 0] = "OK", n[n.REQUEST_NOT_FOUND = 1] = "REQUEST_NOT_FOUND", n[n.PAYMENT_REQUIRED = 2] = "PAYMENT_REQUIRED", n[n.LOGIN_NOT_SUPPORTED = 3] = "LOGIN_NOT_SUPPORTED", n[n.DIFFERENT_LOGIN_EXISTS = 4] = "DIFFERENT_LOGIN_EXISTS", n[n.INVALID_ACCOUNT = 5] = "INVALID_ACCOUNT";
})(za || (za = {}));
i.util.setEnumType(za, "code.user.v1.LoginToThirdPartyAppResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "REQUEST_NOT_FOUND" },
  { no: 2, name: "PAYMENT_REQUIRED" },
  { no: 3, name: "LOGIN_NOT_SUPPORTED" },
  { no: 4, name: "DIFFERENT_LOGIN_EXISTS" },
  { no: 5, name: "INVALID_ACCOUNT" }
]);
class Ps extends T {
  constructor(e) {
    super(), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Ps().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ps().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ps().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Ps, e, t);
  }
}
Ps.runtime = i;
Ps.typeName = "code.user.v1.GetLoginForThirdPartyAppRequest";
Ps.fields = i.util.newFieldList(() => [
  { no: 1, name: "intent_id", kind: "message", T: Ue },
  { no: 2, name: "verifier", kind: "message", T: R },
  { no: 3, name: "signature", kind: "message", T: Q }
]);
class Ls extends T {
  constructor(e) {
    super(), this.result = Xa.OK, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Ls().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ls().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ls().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Ls, e, t);
  }
}
Ls.runtime = i;
Ls.typeName = "code.user.v1.GetLoginForThirdPartyAppResponse";
Ls.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(Xa) },
  { no: 2, name: "user_id", kind: "message", T: R }
]);
var Xa;
(function(n) {
  n[n.OK = 0] = "OK", n[n.REQUEST_NOT_FOUND = 1] = "REQUEST_NOT_FOUND", n[n.LOGIN_NOT_SUPPORTED = 2] = "LOGIN_NOT_SUPPORTED", n[n.NO_USER_LOGGED_IN = 3] = "NO_USER_LOGGED_IN";
})(Xa || (Xa = {}));
i.util.setEnumType(Xa, "code.user.v1.GetLoginForThirdPartyAppResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "REQUEST_NOT_FOUND" },
  { no: 2, name: "LOGIN_NOT_SUPPORTED" },
  { no: 3, name: "NO_USER_LOGGED_IN" }
]);
class Cs extends T {
  constructor(e) {
    super(), this.query = { case: void 0 }, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Cs().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Cs().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Cs().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Cs, e, t);
  }
}
Cs.runtime = i;
Cs.typeName = "code.user.v1.GetTwitterUserRequest";
Cs.fields = i.util.newFieldList(() => [
  { no: 1, name: "username", kind: "scalar", T: 9, oneof: "query" },
  { no: 2, name: "tip_address", kind: "message", T: R, oneof: "query" }
]);
class Us extends T {
  constructor(e) {
    super(), this.result = Ya.OK, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Us().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Us().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Us().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Us, e, t);
  }
}
Us.runtime = i;
Us.typeName = "code.user.v1.GetTwitterUserResponse";
Us.fields = i.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: i.getEnumType(Ya) },
  { no: 2, name: "twitter_user", kind: "message", T: Wr }
]);
var Ya;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND";
})(Ya || (Ya = {}));
i.util.setEnumType(Ya, "code.user.v1.GetTwitterUserResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" }
]);
class tn extends T {
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
  { no: 1, name: "id", kind: "message", T: ht },
  { no: 2, name: "view", kind: "message", T: jr }
]);
class jr extends T {
  constructor(e) {
    super(), i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new jr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new jr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new jr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(jr, e, t);
  }
}
jr.runtime = i;
jr.typeName = "code.user.v1.View";
jr.fields = i.util.newFieldList(() => [
  { no: 1, name: "phone_number", kind: "message", T: qe }
]);
class nn extends T {
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
class Wr extends T {
  constructor(e) {
    super(), this.username = "", this.name = "", this.profilePicUrl = "", this.verifiedType = Za.NONE, this.followerCount = 0, i.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Wr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Wr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Wr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return i.util.equals(Wr, e, t);
  }
}
Wr.runtime = i;
Wr.typeName = "code.user.v1.TwitterUser";
Wr.fields = i.util.newFieldList(() => [
  { no: 1, name: "tip_address", kind: "message", T: R },
  { no: 2, name: "username", kind: "scalar", T: 9 },
  { no: 3, name: "name", kind: "scalar", T: 9 },
  { no: 4, name: "profile_pic_url", kind: "scalar", T: 9 },
  { no: 5, name: "verified_type", kind: "enum", T: i.getEnumType(Za) },
  { no: 6, name: "follower_count", kind: "scalar", T: 13 }
]);
var Za;
(function(n) {
  n[n.NONE = 0] = "NONE", n[n.BLUE = 1] = "BLUE", n[n.BUSINESS = 2] = "BUSINESS", n[n.GOVERNMENT = 3] = "GOVERNMENT";
})(Za || (Za = {}));
i.util.setEnumType(Za, "code.user.v1.TwitterUser.VerifiedType", [
  { no: 0, name: "NONE" },
  { no: 1, name: "BLUE" },
  { no: 2, name: "BUSINESS" },
  { no: 3, name: "GOVERNMENT" }
]);
ee.Unary, ee.Unary, ee.Unary, ee.Unary, ee.Unary, ee.Unary, ee.Unary;
const Ec = () => new Error("invalid address");
function Qy(n) {
  return n instanceof Uint8Array || n != null && typeof n == "object" && n.constructor.name === "Uint8Array";
}
function ew(n, ...e) {
  if (!Qy(n))
    throw new Error("Expected Uint8Array");
  if (e.length > 0 && !e.includes(n.length))
    throw new Error(`Expected Uint8Array of length ${e}, not of length=${n.length}`);
}
function Bf(n, e = !0) {
  if (n.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (e && n.finished)
    throw new Error("Hash#digest() has already been called");
}
function tw(n, e) {
  ew(n);
  const t = e.outputLen;
  if (n.length < t)
    throw new Error(`digestInto() expects output buffer of length at least ${t}`);
}
const vc = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function nw(n) {
  return n instanceof Uint8Array || n != null && typeof n == "object" && n.constructor.name === "Uint8Array";
}
const Nc = (n) => new DataView(n.buffer, n.byteOffset, n.byteLength), At = (n, e) => n << 32 - e | n >>> e, rw = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!rw)
  throw new Error("Non little-endian hardware is not supported");
function iw(n) {
  if (typeof n != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof n}`);
  return new Uint8Array(new TextEncoder().encode(n));
}
function vd(n) {
  if (typeof n == "string" && (n = iw(n)), !nw(n))
    throw new Error(`expected Uint8Array, got ${typeof n}`);
  return n;
}
class sw {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
}
function Nd(n) {
  const e = (r) => n().update(vd(r)).digest(), t = n();
  return e.outputLen = t.outputLen, e.blockLen = t.blockLen, e.create = () => n(), e;
}
function ow(n = 32) {
  if (vc && typeof vc.getRandomValues == "function")
    return vc.getRandomValues(new Uint8Array(n));
  throw new Error("crypto.getRandomValues must be defined");
}
function aw(n, e, t, r) {
  if (typeof n.setBigUint64 == "function")
    return n.setBigUint64(e, t, r);
  const s = BigInt(32), o = BigInt(4294967295), u = Number(t >> s & o), c = Number(t & o), f = r ? 4 : 0, d = r ? 0 : 4;
  n.setUint32(e + f, u, r), n.setUint32(e + d, c, r);
}
class bd extends sw {
  constructor(e, t, r, s) {
    super(), this.blockLen = e, this.outputLen = t, this.padOffset = r, this.isLE = s, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(e), this.view = Nc(this.buffer);
  }
  update(e) {
    Bf(this);
    const { view: t, buffer: r, blockLen: s } = this;
    e = vd(e);
    const o = e.length;
    for (let u = 0; u < o; ) {
      const c = Math.min(s - this.pos, o - u);
      if (c === s) {
        const f = Nc(e);
        for (; s <= o - u; u += s)
          this.process(f, u);
        continue;
      }
      r.set(e.subarray(u, u + c), this.pos), this.pos += c, u += c, this.pos === s && (this.process(t, 0), this.pos = 0);
    }
    return this.length += e.length, this.roundClean(), this;
  }
  digestInto(e) {
    Bf(this), tw(e, this), this.finished = !0;
    const { buffer: t, view: r, blockLen: s, isLE: o } = this;
    let { pos: u } = this;
    t[u++] = 128, this.buffer.subarray(u).fill(0), this.padOffset > s - u && (this.process(r, 0), u = 0);
    for (let p = u; p < s; p++)
      t[p] = 0;
    aw(r, s - 8, BigInt(this.length * 8), o), this.process(r, 0);
    const c = Nc(e), f = this.outputLen;
    if (f % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const d = f / 4, h = this.get();
    if (d > h.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let p = 0; p < d; p++)
      c.setUint32(4 * p, h[p], o);
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
const wu = /* @__PURE__ */ BigInt(2 ** 32 - 1), Gc = /* @__PURE__ */ BigInt(32);
function Sd(n, e = !1) {
  return e ? { h: Number(n & wu), l: Number(n >> Gc & wu) } : { h: Number(n >> Gc & wu) | 0, l: Number(n & wu) | 0 };
}
function uw(n, e = !1) {
  let t = new Uint32Array(n.length), r = new Uint32Array(n.length);
  for (let s = 0; s < n.length; s++) {
    const { h: o, l: u } = Sd(n[s], e);
    [t[s], r[s]] = [o, u];
  }
  return [t, r];
}
const cw = (n, e) => BigInt(n >>> 0) << Gc | BigInt(e >>> 0), lw = (n, e, t) => n >>> t, fw = (n, e, t) => n << 32 - t | e >>> t, mw = (n, e, t) => n >>> t | e << 32 - t, dw = (n, e, t) => n << 32 - t | e >>> t, hw = (n, e, t) => n << 64 - t | e >>> t - 32, pw = (n, e, t) => n >>> t - 32 | e << 64 - t, gw = (n, e) => e, yw = (n, e) => n, ww = (n, e, t) => n << t | e >>> 32 - t, Tw = (n, e, t) => e << t | n >>> 32 - t, Ew = (n, e, t) => e << t - 32 | n >>> 64 - t, vw = (n, e, t) => n << t - 32 | e >>> 64 - t;
function Nw(n, e, t, r) {
  const s = (e >>> 0) + (r >>> 0);
  return { h: n + t + (s / 2 ** 32 | 0) | 0, l: s | 0 };
}
const bw = (n, e, t) => (n >>> 0) + (e >>> 0) + (t >>> 0), Sw = (n, e, t, r) => e + t + r + (n / 2 ** 32 | 0) | 0, Iw = (n, e, t, r) => (n >>> 0) + (e >>> 0) + (t >>> 0) + (r >>> 0), kw = (n, e, t, r, s) => e + t + r + s + (n / 2 ** 32 | 0) | 0, Ow = (n, e, t, r, s) => (n >>> 0) + (e >>> 0) + (t >>> 0) + (r >>> 0) + (s >>> 0), Bw = (n, e, t, r, s, o) => e + t + r + s + o + (n / 2 ** 32 | 0) | 0, Aw = {
  fromBig: Sd,
  split: uw,
  toBig: cw,
  shrSH: lw,
  shrSL: fw,
  rotrSH: mw,
  rotrSL: dw,
  rotrBH: hw,
  rotrBL: pw,
  rotr32H: gw,
  rotr32L: yw,
  rotlSH: ww,
  rotlSL: Tw,
  rotlBH: Ew,
  rotlBL: vw,
  add: Nw,
  add3L: bw,
  add3H: Sw,
  add4L: Iw,
  add4H: kw,
  add5H: Bw,
  add5L: Ow
}, ue = Aw, [Jw, Rw] = /* @__PURE__ */ (() => ue.split([
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
].map((n) => BigInt(n))))(), ti = /* @__PURE__ */ new Uint32Array(80), ni = /* @__PURE__ */ new Uint32Array(80);
class xw extends bd {
  constructor() {
    super(128, 64, 16, !1), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209;
  }
  // prettier-ignore
  get() {
    const { Ah: e, Al: t, Bh: r, Bl: s, Ch: o, Cl: u, Dh: c, Dl: f, Eh: d, El: h, Fh: p, Fl: y, Gh: N, Gl: I, Hh: q, Hl: M } = this;
    return [e, t, r, s, o, u, c, f, d, h, p, y, N, I, q, M];
  }
  // prettier-ignore
  set(e, t, r, s, o, u, c, f, d, h, p, y, N, I, q, M) {
    this.Ah = e | 0, this.Al = t | 0, this.Bh = r | 0, this.Bl = s | 0, this.Ch = o | 0, this.Cl = u | 0, this.Dh = c | 0, this.Dl = f | 0, this.Eh = d | 0, this.El = h | 0, this.Fh = p | 0, this.Fl = y | 0, this.Gh = N | 0, this.Gl = I | 0, this.Hh = q | 0, this.Hl = M | 0;
  }
  process(e, t) {
    for (let L = 0; L < 16; L++, t += 4)
      ti[L] = e.getUint32(t), ni[L] = e.getUint32(t += 4);
    for (let L = 16; L < 80; L++) {
      const V = ti[L - 15] | 0, D = ni[L - 15] | 0, te = ue.rotrSH(V, D, 1) ^ ue.rotrSH(V, D, 8) ^ ue.shrSH(V, D, 7), G = ue.rotrSL(V, D, 1) ^ ue.rotrSL(V, D, 8) ^ ue.shrSL(V, D, 7), se = ti[L - 2] | 0, me = ni[L - 2] | 0, ke = ue.rotrSH(se, me, 19) ^ ue.rotrBH(se, me, 61) ^ ue.shrSH(se, me, 6), Ie = ue.rotrSL(se, me, 19) ^ ue.rotrBL(se, me, 61) ^ ue.shrSL(se, me, 6), Pe = ue.add4L(G, Ie, ni[L - 7], ni[L - 16]), tt = ue.add4H(Pe, te, ke, ti[L - 7], ti[L - 16]);
      ti[L] = tt | 0, ni[L] = Pe | 0;
    }
    let { Ah: r, Al: s, Bh: o, Bl: u, Ch: c, Cl: f, Dh: d, Dl: h, Eh: p, El: y, Fh: N, Fl: I, Gh: q, Gl: M, Hh: X, Hl: H } = this;
    for (let L = 0; L < 80; L++) {
      const V = ue.rotrSH(p, y, 14) ^ ue.rotrSH(p, y, 18) ^ ue.rotrBH(p, y, 41), D = ue.rotrSL(p, y, 14) ^ ue.rotrSL(p, y, 18) ^ ue.rotrBL(p, y, 41), te = p & N ^ ~p & q, G = y & I ^ ~y & M, se = ue.add5L(H, D, G, Rw[L], ni[L]), me = ue.add5H(se, X, V, te, Jw[L], ti[L]), ke = se | 0, Ie = ue.rotrSH(r, s, 28) ^ ue.rotrBH(r, s, 34) ^ ue.rotrBH(r, s, 39), Pe = ue.rotrSL(r, s, 28) ^ ue.rotrBL(r, s, 34) ^ ue.rotrBL(r, s, 39), tt = r & o ^ r & c ^ o & c, un = s & u ^ s & f ^ u & f;
      X = q | 0, H = M | 0, q = N | 0, M = I | 0, N = p | 0, I = y | 0, { h: p, l: y } = ue.add(d | 0, h | 0, me | 0, ke | 0), d = c | 0, h = f | 0, c = o | 0, f = u | 0, o = r | 0, u = s | 0;
      const je = ue.add3L(ke, Pe, un);
      r = ue.add3H(je, me, Ie, tt), s = je | 0;
    }
    ({ h: r, l: s } = ue.add(this.Ah | 0, this.Al | 0, r | 0, s | 0)), { h: o, l: u } = ue.add(this.Bh | 0, this.Bl | 0, o | 0, u | 0), { h: c, l: f } = ue.add(this.Ch | 0, this.Cl | 0, c | 0, f | 0), { h: d, l: h } = ue.add(this.Dh | 0, this.Dl | 0, d | 0, h | 0), { h: p, l: y } = ue.add(this.Eh | 0, this.El | 0, p | 0, y | 0), { h: N, l: I } = ue.add(this.Fh | 0, this.Fl | 0, N | 0, I | 0), { h: q, l: M } = ue.add(this.Gh | 0, this.Gl | 0, q | 0, M | 0), { h: X, l: H } = ue.add(this.Hh | 0, this.Hl | 0, X | 0, H | 0), this.set(r, s, o, u, c, f, d, h, p, y, N, I, q, M, X, H);
  }
  roundClean() {
    ti.fill(0), ni.fill(0);
  }
  destroy() {
    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
const Pw = /* @__PURE__ */ Nd(() => new xw());
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
BigInt(0);
const Lw = BigInt(1), Cw = BigInt(2);
function au(n) {
  return n instanceof Uint8Array || n != null && typeof n == "object" && n.constructor.name === "Uint8Array";
}
const Uw = /* @__PURE__ */ Array.from({ length: 256 }, (n, e) => e.toString(16).padStart(2, "0"));
function Nl(n) {
  if (!au(n))
    throw new Error("Uint8Array expected");
  let e = "";
  for (let t = 0; t < n.length; t++)
    e += Uw[n[t]];
  return e;
}
function Id(n) {
  if (typeof n != "string")
    throw new Error("hex string expected, got " + typeof n);
  return BigInt(n === "" ? "0" : `0x${n}`);
}
const cn = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
function Af(n) {
  if (n >= cn._0 && n <= cn._9)
    return n - cn._0;
  if (n >= cn._A && n <= cn._F)
    return n - (cn._A - 10);
  if (n >= cn._a && n <= cn._f)
    return n - (cn._a - 10);
}
function kd(n) {
  if (typeof n != "string")
    throw new Error("hex string expected, got " + typeof n);
  const e = n.length, t = e / 2;
  if (e % 2)
    throw new Error("padded hex string expected, got unpadded hex of length " + e);
  const r = new Uint8Array(t);
  for (let s = 0, o = 0; s < t; s++, o += 2) {
    const u = Af(n.charCodeAt(o)), c = Af(n.charCodeAt(o + 1));
    if (u === void 0 || c === void 0) {
      const f = n[o] + n[o + 1];
      throw new Error('hex string expected, got non-hex character "' + f + '" at index ' + o);
    }
    r[s] = u * 16 + c;
  }
  return r;
}
function qw(n) {
  return Id(Nl(n));
}
function Ju(n) {
  if (!au(n))
    throw new Error("Uint8Array expected");
  return Id(Nl(Uint8Array.from(n).reverse()));
}
function Od(n, e) {
  return kd(n.toString(16).padStart(e * 2, "0"));
}
function jc(n, e) {
  return Od(n, e).reverse();
}
function ri(n, e, t) {
  let r;
  if (typeof e == "string")
    try {
      r = kd(e);
    } catch (o) {
      throw new Error(`${n} must be valid hex string, got "${e}". Cause: ${o}`);
    }
  else if (au(e))
    r = Uint8Array.from(e);
  else
    throw new Error(`${n} must be hex string or Uint8Array`);
  const s = r.length;
  if (typeof t == "number" && s !== t)
    throw new Error(`${n} expected ${t} bytes, got ${s}`);
  return r;
}
function Jf(...n) {
  let e = 0;
  for (let s = 0; s < n.length; s++) {
    const o = n[s];
    if (!au(o))
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
const Dw = (n) => (Cw << BigInt(n - 1)) - Lw, Fw = {
  bigint: (n) => typeof n == "bigint",
  function: (n) => typeof n == "function",
  boolean: (n) => typeof n == "boolean",
  string: (n) => typeof n == "string",
  stringOrUint8Array: (n) => typeof n == "string" || au(n),
  isSafeInteger: (n) => Number.isSafeInteger(n),
  array: (n) => Array.isArray(n),
  field: (n, e) => e.Fp.isValid(n),
  hash: (n) => typeof n == "function" && Number.isSafeInteger(n.outputLen)
};
function bl(n, e, t = {}) {
  const r = (s, o, u) => {
    const c = Fw[o];
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
const Ke = BigInt(0), Re = BigInt(1), Qs = BigInt(2), _w = BigInt(3), Wc = BigInt(4), Rf = BigInt(5), xf = BigInt(8);
BigInt(9);
BigInt(16);
function Ce(n, e) {
  const t = n % e;
  return t >= Ke ? t : e + t;
}
function Kw(n, e, t) {
  if (t <= Ke || e < Ke)
    throw new Error("Expected power/modulo > 0");
  if (t === Re)
    return Ke;
  let r = Re;
  for (; e > Ke; )
    e & Re && (r = r * n % t), n = n * n % t, e >>= Re;
  return r;
}
function Jt(n, e, t) {
  let r = n;
  for (; e-- > Ke; )
    r *= r, r %= t;
  return r;
}
function Pf(n, e) {
  if (n === Ke || e <= Ke)
    throw new Error(`invert: expected positive integers, got n=${n} mod=${e}`);
  let t = Ce(n, e), r = e, s = Ke, o = Re;
  for (; t !== Ke; ) {
    const u = r / t, c = r % t, f = s - o * u;
    r = t, t = c, s = o, o = f;
  }
  if (r !== Re)
    throw new Error("invert: does not exist");
  return Ce(s, e);
}
function Mw(n) {
  const e = (n - Re) / Qs;
  let t, r, s;
  for (t = n - Re, r = 0; t % Qs === Ke; t /= Qs, r++)
    ;
  for (s = Qs; s < n && Kw(s, e, n) !== n - Re; s++)
    ;
  if (r === 1) {
    const u = (n + Re) / Wc;
    return function(c, f) {
      const d = c.pow(f, u);
      if (!c.eql(c.sqr(d), f))
        throw new Error("Cannot find square root");
      return d;
    };
  }
  const o = (t + Re) / Qs;
  return function(u, c) {
    if (u.pow(c, e) === u.neg(u.ONE))
      throw new Error("Cannot find square root");
    let f = r, d = u.pow(u.mul(u.ONE, s), t), h = u.pow(c, o), p = u.pow(c, t);
    for (; !u.eql(p, u.ONE); ) {
      if (u.eql(p, u.ZERO))
        return u.ZERO;
      let y = 1;
      for (let I = u.sqr(p); y < f && !u.eql(I, u.ONE); y++)
        I = u.sqr(I);
      const N = u.pow(d, Re << BigInt(f - y - 1));
      d = u.sqr(N), h = u.mul(h, N), p = u.mul(p, d), f = y;
    }
    return h;
  };
}
function $w(n) {
  if (n % Wc === _w) {
    const e = (n + Re) / Wc;
    return function(t, r) {
      const s = t.pow(r, e);
      if (!t.eql(t.sqr(s), r))
        throw new Error("Cannot find square root");
      return s;
    };
  }
  if (n % xf === Rf) {
    const e = (n - Rf) / xf;
    return function(t, r) {
      const s = t.mul(r, Qs), o = t.pow(s, e), u = t.mul(r, o), c = t.mul(t.mul(u, Qs), o), f = t.mul(u, t.sub(c, t.ONE));
      if (!t.eql(t.sqr(f), r))
        throw new Error("Cannot find square root");
      return f;
    };
  }
  return Mw(n);
}
const Vw = (n, e) => (Ce(n, e) & Re) === Re, Gw = [
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
function jw(n) {
  const e = {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "isSafeInteger",
    BITS: "isSafeInteger"
  }, t = Gw.reduce((r, s) => (r[s] = "function", r), e);
  return bl(n, t);
}
function Ww(n, e, t) {
  if (t < Ke)
    throw new Error("Expected power > 0");
  if (t === Ke)
    return n.ONE;
  if (t === Re)
    return e;
  let r = n.ONE, s = e;
  for (; t > Ke; )
    t & Re && (r = n.mul(r, s)), s = n.sqr(s), t >>= Re;
  return r;
}
function Hw(n, e) {
  const t = new Array(e.length), r = e.reduce((o, u, c) => n.is0(u) ? o : (t[c] = o, n.mul(o, u)), n.ONE), s = n.inv(r);
  return e.reduceRight((o, u, c) => n.is0(u) ? o : (t[c] = n.mul(o, t[c]), n.mul(o, u)), s), t;
}
function Bd(n, e) {
  const t = e !== void 0 ? e : n.toString(2).length, r = Math.ceil(t / 8);
  return { nBitLength: t, nByteLength: r };
}
function zw(n, e, t = !1, r = {}) {
  if (n <= Ke)
    throw new Error(`Expected Field ORDER > 0, got ${n}`);
  const { nBitLength: s, nByteLength: o } = Bd(n, e);
  if (o > 2048)
    throw new Error("Field lengths over 2048 bytes are not supported");
  const u = $w(n), c = Object.freeze({
    ORDER: n,
    BITS: s,
    BYTES: o,
    MASK: Dw(s),
    ZERO: Ke,
    ONE: Re,
    create: (f) => Ce(f, n),
    isValid: (f) => {
      if (typeof f != "bigint")
        throw new Error(`Invalid field element: expected bigint, got ${typeof f}`);
      return Ke <= f && f < n;
    },
    is0: (f) => f === Ke,
    isOdd: (f) => (f & Re) === Re,
    neg: (f) => Ce(-f, n),
    eql: (f, d) => f === d,
    sqr: (f) => Ce(f * f, n),
    add: (f, d) => Ce(f + d, n),
    sub: (f, d) => Ce(f - d, n),
    mul: (f, d) => Ce(f * d, n),
    pow: (f, d) => Ww(c, f, d),
    div: (f, d) => Ce(f * Pf(d, n), n),
    // Same as above, but doesn't normalize
    sqrN: (f) => f * f,
    addN: (f, d) => f + d,
    subN: (f, d) => f - d,
    mulN: (f, d) => f * d,
    inv: (f) => Pf(f, n),
    sqrt: r.sqrt || ((f) => u(c, f)),
    invertBatch: (f) => Hw(c, f),
    // TODO: do we really need constant cmov?
    // We don't have const-time bigints anyway, so probably will be not very useful
    cmov: (f, d, h) => h ? d : f,
    toBytes: (f) => t ? jc(f, o) : Od(f, o),
    fromBytes: (f) => {
      if (f.length !== o)
        throw new Error(`Fp.fromBytes: expected ${o}, got ${f.length}`);
      return t ? Ju(f) : qw(f);
    }
  });
  return Object.freeze(c);
}
function Xw(n, e) {
  if (!n.isOdd)
    throw new Error("Field doesn't have isOdd");
  const t = n.sqrt(e);
  return n.isOdd(t) ? n.neg(t) : t;
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Yw = BigInt(0), bc = BigInt(1);
function Zw(n, e) {
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
      for (; o > Yw; )
        o & bc && (u = u.add(c)), c = c.double(), o >>= bc;
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
      let d = s, h = d;
      for (let p = 0; p < u; p++) {
        h = d, f.push(h);
        for (let y = 1; y < c; y++)
          h = h.add(d), f.push(h);
        d = h.double();
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
      let d = n.ZERO, h = n.BASE;
      const p = BigInt(2 ** s - 1), y = 2 ** s, N = BigInt(s);
      for (let I = 0; I < c; I++) {
        const q = I * f;
        let M = Number(u & p);
        u >>= N, M > f && (M -= y, u += bc);
        const X = q, H = q + Math.abs(M) - 1, L = I % 2 !== 0, V = M < 0;
        M === 0 ? h = h.add(t(L, o[X])) : d = d.add(t(V, o[H]));
      }
      return { p: d, f: h };
    },
    wNAFCached(s, o, u, c) {
      const f = s._WINDOW_SIZE || 1;
      let d = o.get(s);
      return d || (d = this.precomputeWindow(s, f), f !== 1 && o.set(s, c(d))), this.wNAF(f, d, u);
    }
  };
}
function Qw(n) {
  return jw(n.Fp), bl(n, {
    n: "bigint",
    h: "bigint",
    Gx: "field",
    Gy: "field"
  }, {
    nBitLength: "isSafeInteger",
    nByteLength: "isSafeInteger"
  }), Object.freeze({
    ...Bd(n.n, n.nBitLength),
    ...n,
    p: n.Fp.ORDER
  });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const wt = BigInt(0), st = BigInt(1), Tu = BigInt(2), e0 = BigInt(8), t0 = { zip215: !0 };
function n0(n) {
  const e = Qw(n);
  return bl(n, {
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
function r0(n) {
  const e = n0(n), { Fp: t, n: r, prehash: s, hash: o, randomBytes: u, nByteLength: c, h: f } = e, d = Tu << BigInt(c * 8) - st, h = t.create, p = e.uvRatio || ((F, k) => {
    try {
      return { isValid: !0, value: t.sqrt(F * t.inv(k)) };
    } catch {
      return { isValid: !1, value: wt };
    }
  }), y = e.adjustScalarBytes || ((F) => F), N = e.domain || ((F, k, z) => {
    if (k.length || z)
      throw new Error("Contexts/pre-hash are not supported");
    return F;
  }), I = (F) => typeof F == "bigint" && wt < F, q = (F, k) => I(F) && I(k) && F < k, M = (F) => F === wt || q(F, d);
  function X(F, k) {
    if (q(F, k))
      return F;
    throw new Error(`Expected valid scalar < ${k}, got ${typeof F} ${F}`);
  }
  function H(F) {
    return F === wt ? F : X(F, r);
  }
  const L = /* @__PURE__ */ new Map();
  function V(F) {
    if (!(F instanceof D))
      throw new Error("ExtendedPoint expected");
  }
  class D {
    constructor(k, z, re, Y) {
      if (this.ex = k, this.ey = z, this.ez = re, this.et = Y, !M(k))
        throw new Error("x required");
      if (!M(z))
        throw new Error("y required");
      if (!M(re))
        throw new Error("z required");
      if (!M(Y))
        throw new Error("t required");
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    static fromAffine(k) {
      if (k instanceof D)
        throw new Error("extended point not allowed");
      const { x: z, y: re } = k || {};
      if (!M(z) || !M(re))
        throw new Error("invalid affine point");
      return new D(z, re, st, h(z * re));
    }
    static normalizeZ(k) {
      const z = t.invertBatch(k.map((re) => re.ez));
      return k.map((re, Y) => re.toAffine(z[Y])).map(D.fromAffine);
    }
    // "Private method", don't use it directly
    _setWindowSize(k) {
      this._WINDOW_SIZE = k, L.delete(this);
    }
    // Not required for fromHex(), which always creates valid points.
    // Could be useful for fromAffine().
    assertValidity() {
      const { a: k, d: z } = e;
      if (this.is0())
        throw new Error("bad point: ZERO");
      const { ex: re, ey: Y, ez: Z, et: le } = this, pe = h(re * re), de = h(Y * Y), Te = h(Z * Z), ge = h(Te * Te), Ne = h(pe * k), Me = h(Te * h(Ne + de)), Le = h(ge + h(z * h(pe * de)));
      if (Me !== Le)
        throw new Error("bad point: equation left != right (1)");
      const $e = h(re * Y), We = h(Z * le);
      if ($e !== We)
        throw new Error("bad point: equation left != right (2)");
    }
    // Compare one point to another.
    equals(k) {
      V(k);
      const { ex: z, ey: re, ez: Y } = this, { ex: Z, ey: le, ez: pe } = k, de = h(z * pe), Te = h(Z * Y), ge = h(re * pe), Ne = h(le * Y);
      return de === Te && ge === Ne;
    }
    is0() {
      return this.equals(D.ZERO);
    }
    negate() {
      return new D(h(-this.ex), this.ey, this.ez, h(-this.et));
    }
    // Fast algo for doubling Extended Point.
    // https://hyperelliptic.org/EFD/g1p/auto-twisted-extended.html#doubling-dbl-2008-hwcd
    // Cost: 4M + 4S + 1*a + 6add + 1*2.
    double() {
      const { a: k } = e, { ex: z, ey: re, ez: Y } = this, Z = h(z * z), le = h(re * re), pe = h(Tu * h(Y * Y)), de = h(k * Z), Te = z + re, ge = h(h(Te * Te) - Z - le), Ne = de + le, Me = Ne - pe, Le = de - le, $e = h(ge * Me), We = h(Ne * Le), Ye = h(ge * Le), g = h(Me * Ne);
      return new D($e, We, g, Ye);
    }
    // Fast algo for adding 2 Extended Points.
    // https://hyperelliptic.org/EFD/g1p/auto-twisted-extended.html#addition-add-2008-hwcd
    // Cost: 9M + 1*a + 1*d + 7add.
    add(k) {
      V(k);
      const { a: z, d: re } = e, { ex: Y, ey: Z, ez: le, et: pe } = this, { ex: de, ey: Te, ez: ge, et: Ne } = k;
      if (z === BigInt(-1)) {
        const x = h((Z - Y) * (Te + de)), P = h((Z + Y) * (Te - de)), J = h(P - x);
        if (J === wt)
          return this.double();
        const $ = h(le * Tu * Ne), j = h(pe * Tu * ge), W = j + $, a = P + x, l = j - $, m = h(W * J), w = h(a * l), v = h(W * l), b = h(J * a);
        return new D(m, w, b, v);
      }
      const Me = h(Y * de), Le = h(Z * Te), $e = h(pe * re * Ne), We = h(le * ge), Ye = h((Y + Z) * (de + Te) - Me - Le), g = We - $e, E = We + $e, S = h(Le - z * Me), O = h(Ye * g), A = h(E * S), C = h(Ye * S), K = h(g * E);
      return new D(O, A, K, C);
    }
    subtract(k) {
      return this.add(k.negate());
    }
    wNAF(k) {
      return se.wNAFCached(this, L, k, D.normalizeZ);
    }
    // Constant-time multiplication.
    multiply(k) {
      const { p: z, f: re } = this.wNAF(X(k, r));
      return D.normalizeZ([z, re])[0];
    }
    // Non-constant-time multiplication. Uses double-and-add algorithm.
    // It's faster, but should only be used when you don't care about
    // an exposed private key e.g. sig verification.
    // Does NOT allow scalars higher than CURVE.n.
    multiplyUnsafe(k) {
      let z = H(k);
      return z === wt ? G : this.equals(G) || z === st ? this : this.equals(te) ? this.wNAF(z).p : se.unsafeLadder(this, z);
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
      return se.unsafeLadder(this, r).is0();
    }
    // Converts Extended point to default (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    toAffine(k) {
      const { ex: z, ey: re, ez: Y } = this, Z = this.is0();
      k == null && (k = Z ? e0 : t.inv(Y));
      const le = h(z * k), pe = h(re * k), de = h(Y * k);
      if (Z)
        return { x: wt, y: st };
      if (de !== st)
        throw new Error("invZ was invalid");
      return { x: le, y: pe };
    }
    clearCofactor() {
      const { h: k } = e;
      return k === st ? this : this.multiplyUnsafe(k);
    }
    // Converts hash string or Uint8Array to Point.
    // Uses algo from RFC8032 5.1.3.
    static fromHex(k, z = !1) {
      const { d: re, a: Y } = e, Z = t.BYTES;
      k = ri("pointHex", k, Z);
      const le = k.slice(), pe = k[Z - 1];
      le[Z - 1] = pe & -129;
      const de = Ju(le);
      de === wt || (z ? X(de, d) : X(de, t.ORDER));
      const Te = h(de * de), ge = h(Te - st), Ne = h(re * Te - Y);
      let { isValid: Me, value: Le } = p(ge, Ne);
      if (!Me)
        throw new Error("Point.fromHex: invalid y coordinate");
      const $e = (Le & st) === st, We = (pe & 128) !== 0;
      if (!z && Le === wt && We)
        throw new Error("Point.fromHex: x=0 and x_0=1");
      return We !== $e && (Le = h(-Le)), D.fromAffine({ x: Le, y: de });
    }
    static fromPrivateKey(k) {
      return Ie(k).point;
    }
    toRawBytes() {
      const { x: k, y: z } = this.toAffine(), re = jc(z, t.BYTES);
      return re[re.length - 1] |= k & st ? 128 : 0, re;
    }
    toHex() {
      return Nl(this.toRawBytes());
    }
  }
  D.BASE = new D(e.Gx, e.Gy, st, h(e.Gx * e.Gy)), D.ZERO = new D(wt, st, st, wt);
  const { BASE: te, ZERO: G } = D, se = Zw(D, c * 8);
  function me(F) {
    return Ce(F, r);
  }
  function ke(F) {
    return me(Ju(F));
  }
  function Ie(F) {
    const k = c;
    F = ri("private key", F, k);
    const z = ri("hashed private key", o(F), 2 * k), re = y(z.slice(0, k)), Y = z.slice(k, 2 * k), Z = ke(re), le = te.multiply(Z), pe = le.toRawBytes();
    return { head: re, prefix: Y, scalar: Z, point: le, pointBytes: pe };
  }
  function Pe(F) {
    return Ie(F).pointBytes;
  }
  function tt(F = new Uint8Array(), ...k) {
    const z = Jf(...k);
    return ke(o(N(z, ri("context", F), !!s)));
  }
  function un(F, k, z = {}) {
    F = ri("message", F), s && (F = s(F));
    const { prefix: re, scalar: Y, pointBytes: Z } = Ie(k), le = tt(z.context, re, F), pe = te.multiply(le).toRawBytes(), de = tt(z.context, pe, Z, F), Te = me(le + de * Y);
    H(Te);
    const ge = Jf(pe, jc(Te, t.BYTES));
    return ri("result", ge, c * 2);
  }
  const je = t0;
  function De(F, k, z, re = je) {
    const { context: Y, zip215: Z } = re, le = t.BYTES;
    F = ri("signature", F, 2 * le), k = ri("message", k), s && (k = s(k));
    const pe = Ju(F.slice(le, 2 * le));
    let de, Te, ge;
    try {
      de = D.fromHex(z, Z), Te = D.fromHex(F.slice(0, le), Z), ge = te.multiplyUnsafe(pe);
    } catch {
      return !1;
    }
    if (!Z && de.isSmallOrder())
      return !1;
    const Ne = tt(Y, Te.toRawBytes(), de.toRawBytes(), k);
    return Te.add(de.multiplyUnsafe(Ne)).subtract(ge).clearCofactor().equals(D.ZERO);
  }
  return te._setWindowSize(8), {
    CURVE: e,
    getPublicKey: Pe,
    sign: un,
    verify: De,
    ExtendedPoint: D,
    utils: {
      getExtendedPublicKey: Ie,
      // ed25519 private keys are uniform 32b. No need to check for modulo bias, like in secp256k1.
      randomPrivateKey: () => u(t.BYTES),
      /**
       * We're doing scalar multiplication (used in getPublicKey etc) with precomputed BASE_POINT
       * values. This slows down first getPublicKey() by milliseconds (see Speed section),
       * but allows to speed-up subsequent getPublicKey() calls up to 20x.
       * @param windowSize 2, 4, 8, 16
       */
      precompute(F = 8, k = D.BASE) {
        return k._setWindowSize(F), k.multiply(BigInt(3)), k;
      }
    }
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Sl = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949"), Lf = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
BigInt(0);
const i0 = BigInt(1), Hc = BigInt(2), s0 = BigInt(5), Cf = BigInt(10), o0 = BigInt(20), a0 = BigInt(40), Uf = BigInt(80);
function u0(n) {
  const e = Sl, t = n * n % e * n % e, r = Jt(t, Hc, e) * t % e, s = Jt(r, i0, e) * n % e, o = Jt(s, s0, e) * s % e, u = Jt(o, Cf, e) * o % e, c = Jt(u, o0, e) * u % e, f = Jt(c, a0, e) * c % e, d = Jt(f, Uf, e) * f % e, h = Jt(d, Uf, e) * f % e, p = Jt(h, Cf, e) * o % e;
  return { pow_p_5_8: Jt(p, Hc, e) * n % e, b2: t };
}
function c0(n) {
  return n[0] &= 248, n[31] &= 127, n[31] |= 64, n;
}
function l0(n, e) {
  const t = Sl, r = Ce(e * e * e, t), s = Ce(r * r * e, t), o = u0(n * s).pow_p_5_8;
  let u = Ce(n * r * o, t);
  const c = Ce(e * u * u, t), f = u, d = Ce(u * Lf, t), h = c === n, p = c === Ce(-n, t), y = c === Ce(-n * Lf, t);
  return h && (u = f), (p || y) && (u = d), Vw(u, t) && (u = Ce(-u, t)), { isValid: h || p, value: u };
}
const Xr = zw(Sl, void 0, !0), Il = {
  // Param: a
  a: BigInt(-1),
  // Fp.create(-1) is proper; our way still works and is faster
  // d is equal to -121665/121666 over finite field.
  // Negative number is P - number, and division is invert(number, P)
  d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"),
  // Finite field 𝔽p over which we'll do calculations; 2n**255n - 19n
  Fp: Xr,
  // Subgroup order: how many points curve has
  // 2n**252n + 27742317777372353535851937790883648493n;
  n: BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"),
  // Cofactor
  h: BigInt(8),
  // Base point (x, y) aka generator point
  Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"),
  Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960"),
  hash: Pw,
  randomBytes: ow,
  adjustScalarBytes: c0,
  // dom2
  // Ratio of u to v. Allows us to combine inversion and square root. Uses algo from RFC8032 5.1.3.
  // Constant-time, u/√v
  uvRatio: l0
}, Zs = /* @__PURE__ */ r0(Il);
({
  ...Il
});
({
  ...Il
});
const f0 = (Xr.ORDER + BigInt(3)) / BigInt(8);
Xr.pow(Hc, f0);
Xr.sqrt(Xr.neg(Xr.ONE));
(Xr.ORDER - BigInt(5)) / BigInt(8);
BigInt(486662);
Xw(Xr, Xr.neg(BigInt(486664)));
BigInt("25063068953384623474111414158702152701244531502492656460079210482610430750235");
BigInt("54469307008909316920995813868745141605393597292927456921205312896311721017578");
BigInt("1159843021668779879193775521855586647937357759715417654439879720876111806838");
BigInt("40440834346308536858101042469323190826248399146238708352240133220865137265952");
BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
function m0(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function d0(n) {
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
  var u = n.length, c = n.charAt(0), f = Math.log(u) / Math.log(256), d = Math.log(256) / Math.log(u);
  function h(N) {
    if (N instanceof Uint8Array || (ArrayBuffer.isView(N) ? N = new Uint8Array(N.buffer, N.byteOffset, N.byteLength) : Array.isArray(N) && (N = Uint8Array.from(N))), !(N instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (N.length === 0)
      return "";
    for (var I = 0, q = 0, M = 0, X = N.length; M !== X && N[M] === 0; )
      M++, I++;
    for (var H = (X - M) * d + 1 >>> 0, L = new Uint8Array(H); M !== X; ) {
      for (var V = N[M], D = 0, te = H - 1; (V !== 0 || D < q) && te !== -1; te--, D++)
        V += 256 * L[te] >>> 0, L[te] = V % u >>> 0, V = V / u >>> 0;
      if (V !== 0)
        throw new Error("Non-zero carry");
      q = D, M++;
    }
    for (var G = H - q; G !== H && L[G] === 0; )
      G++;
    for (var se = c.repeat(I); G < H; ++G)
      se += n.charAt(L[G]);
    return se;
  }
  function p(N) {
    if (typeof N != "string")
      throw new TypeError("Expected String");
    if (N.length === 0)
      return new Uint8Array();
    for (var I = 0, q = 0, M = 0; N[I] === c; )
      q++, I++;
    for (var X = (N.length - I) * f + 1 >>> 0, H = new Uint8Array(X); N[I]; ) {
      var L = e[N.charCodeAt(I)];
      if (L === 255)
        return;
      for (var V = 0, D = X - 1; (L !== 0 || V < M) && D !== -1; D--, V++)
        L += u * H[D] >>> 0, H[D] = L % 256 >>> 0, L = L / 256 >>> 0;
      if (L !== 0)
        throw new Error("Non-zero carry");
      M = V, I++;
    }
    for (var te = X - M; te !== X && H[te] === 0; )
      te++;
    for (var G = new Uint8Array(q + (X - te)), se = q; te !== X; )
      G[se++] = H[te++];
    return G;
  }
  function y(N) {
    var I = p(N);
    if (I)
      return I;
    throw new Error("Non-base" + u + " character");
  }
  return {
    encode: h,
    decodeUnsafe: p,
    decode: y
  };
}
var h0 = d0;
const p0 = h0, g0 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
var y0 = p0(g0);
const $u = /* @__PURE__ */ m0(y0);
var kl = {}, uc = {};
uc.byteLength = E0;
uc.toByteArray = N0;
uc.fromByteArray = I0;
var Ct = [], mt = [], w0 = typeof Uint8Array < "u" ? Uint8Array : Array, Sc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var fo = 0, T0 = Sc.length; fo < T0; ++fo)
  Ct[fo] = Sc[fo], mt[Sc.charCodeAt(fo)] = fo;
mt["-".charCodeAt(0)] = 62;
mt["_".charCodeAt(0)] = 63;
function Ad(n) {
  var e = n.length;
  if (e % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var t = n.indexOf("=");
  t === -1 && (t = e);
  var r = t === e ? 0 : 4 - t % 4;
  return [t, r];
}
function E0(n) {
  var e = Ad(n), t = e[0], r = e[1];
  return (t + r) * 3 / 4 - r;
}
function v0(n, e, t) {
  return (e + t) * 3 / 4 - t;
}
function N0(n) {
  var e, t = Ad(n), r = t[0], s = t[1], o = new w0(v0(n, r, s)), u = 0, c = s > 0 ? r - 4 : r, f;
  for (f = 0; f < c; f += 4)
    e = mt[n.charCodeAt(f)] << 18 | mt[n.charCodeAt(f + 1)] << 12 | mt[n.charCodeAt(f + 2)] << 6 | mt[n.charCodeAt(f + 3)], o[u++] = e >> 16 & 255, o[u++] = e >> 8 & 255, o[u++] = e & 255;
  return s === 2 && (e = mt[n.charCodeAt(f)] << 2 | mt[n.charCodeAt(f + 1)] >> 4, o[u++] = e & 255), s === 1 && (e = mt[n.charCodeAt(f)] << 10 | mt[n.charCodeAt(f + 1)] << 4 | mt[n.charCodeAt(f + 2)] >> 2, o[u++] = e >> 8 & 255, o[u++] = e & 255), o;
}
function b0(n) {
  return Ct[n >> 18 & 63] + Ct[n >> 12 & 63] + Ct[n >> 6 & 63] + Ct[n & 63];
}
function S0(n, e, t) {
  for (var r, s = [], o = e; o < t; o += 3)
    r = (n[o] << 16 & 16711680) + (n[o + 1] << 8 & 65280) + (n[o + 2] & 255), s.push(b0(r));
  return s.join("");
}
function I0(n) {
  for (var e, t = n.length, r = t % 3, s = [], o = 16383, u = 0, c = t - r; u < c; u += o)
    s.push(S0(n, u, u + o > c ? c : u + o));
  return r === 1 ? (e = n[t - 1], s.push(
    Ct[e >> 2] + Ct[e << 4 & 63] + "=="
  )) : r === 2 && (e = (n[t - 2] << 8) + n[t - 1], s.push(
    Ct[e >> 10] + Ct[e >> 4 & 63] + Ct[e << 2 & 63] + "="
  )), s.join("");
}
var Ol = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
Ol.read = function(n, e, t, r, s) {
  var o, u, c = s * 8 - r - 1, f = (1 << c) - 1, d = f >> 1, h = -7, p = t ? s - 1 : 0, y = t ? -1 : 1, N = n[e + p];
  for (p += y, o = N & (1 << -h) - 1, N >>= -h, h += c; h > 0; o = o * 256 + n[e + p], p += y, h -= 8)
    ;
  for (u = o & (1 << -h) - 1, o >>= -h, h += r; h > 0; u = u * 256 + n[e + p], p += y, h -= 8)
    ;
  if (o === 0)
    o = 1 - d;
  else {
    if (o === f)
      return u ? NaN : (N ? -1 : 1) * (1 / 0);
    u = u + Math.pow(2, r), o = o - d;
  }
  return (N ? -1 : 1) * u * Math.pow(2, o - r);
};
Ol.write = function(n, e, t, r, s, o) {
  var u, c, f, d = o * 8 - s - 1, h = (1 << d) - 1, p = h >> 1, y = s === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, N = r ? 0 : o - 1, I = r ? 1 : -1, q = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
  for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (c = isNaN(e) ? 1 : 0, u = h) : (u = Math.floor(Math.log(e) / Math.LN2), e * (f = Math.pow(2, -u)) < 1 && (u--, f *= 2), u + p >= 1 ? e += y / f : e += y * Math.pow(2, 1 - p), e * f >= 2 && (u++, f /= 2), u + p >= h ? (c = 0, u = h) : u + p >= 1 ? (c = (e * f - 1) * Math.pow(2, s), u = u + p) : (c = e * Math.pow(2, p - 1) * Math.pow(2, s), u = 0)); s >= 8; n[t + N] = c & 255, N += I, c /= 256, s -= 8)
    ;
  for (u = u << s | c, d += s; d > 0; n[t + N] = u & 255, N += I, u /= 256, d -= 8)
    ;
  n[t + N - I] |= q * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(n) {
  const e = uc, t = Ol, r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  n.Buffer = c, n.SlowBuffer = H, n.INSPECT_MAX_BYTES = 50;
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
      return y(a, l);
    if (ArrayBuffer.isView(a))
      return I(a);
    if (a == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof a
      );
    if (P(a, ArrayBuffer) || a && P(a.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (P(a, SharedArrayBuffer) || a && P(a.buffer, SharedArrayBuffer)))
      return q(a, l, m);
    if (typeof a == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const w = a.valueOf && a.valueOf();
    if (w != null && w !== a)
      return c.from(w, l, m);
    const v = M(a);
    if (v)
      return v;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof a[Symbol.toPrimitive] == "function")
      return c.from(a[Symbol.toPrimitive]("string"), l, m);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof a
    );
  }
  c.from = function(a, l, m) {
    return f(a, l, m);
  }, Object.setPrototypeOf(c.prototype, Uint8Array.prototype), Object.setPrototypeOf(c, Uint8Array);
  function d(a) {
    if (typeof a != "number")
      throw new TypeError('"size" argument must be of type number');
    if (a < 0)
      throw new RangeError('The value "' + a + '" is invalid for option "size"');
  }
  function h(a, l, m) {
    return d(a), a <= 0 ? u(a) : l !== void 0 ? typeof m == "string" ? u(a).fill(l, m) : u(a).fill(l) : u(a);
  }
  c.alloc = function(a, l, m) {
    return h(a, l, m);
  };
  function p(a) {
    return d(a), u(a < 0 ? 0 : X(a) | 0);
  }
  c.allocUnsafe = function(a) {
    return p(a);
  }, c.allocUnsafeSlow = function(a) {
    return p(a);
  };
  function y(a, l) {
    if ((typeof l != "string" || l === "") && (l = "utf8"), !c.isEncoding(l))
      throw new TypeError("Unknown encoding: " + l);
    const m = L(a, l) | 0;
    let w = u(m);
    const v = w.write(a, l);
    return v !== m && (w = w.slice(0, v)), w;
  }
  function N(a) {
    const l = a.length < 0 ? 0 : X(a.length) | 0, m = u(l);
    for (let w = 0; w < l; w += 1)
      m[w] = a[w] & 255;
    return m;
  }
  function I(a) {
    if (P(a, Uint8Array)) {
      const l = new Uint8Array(a);
      return q(l.buffer, l.byteOffset, l.byteLength);
    }
    return N(a);
  }
  function q(a, l, m) {
    if (l < 0 || a.byteLength < l)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (a.byteLength < l + (m || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let w;
    return l === void 0 && m === void 0 ? w = new Uint8Array(a) : m === void 0 ? w = new Uint8Array(a, l) : w = new Uint8Array(a, l, m), Object.setPrototypeOf(w, c.prototype), w;
  }
  function M(a) {
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
  function H(a) {
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
    let m = a.length, w = l.length;
    for (let v = 0, b = Math.min(m, w); v < b; ++v)
      if (a[v] !== l[v]) {
        m = a[v], w = l[v];
        break;
      }
    return m < w ? -1 : w < m ? 1 : 0;
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
    const w = c.allocUnsafe(l);
    let v = 0;
    for (m = 0; m < a.length; ++m) {
      let b = a[m];
      if (P(b, Uint8Array))
        v + b.length > w.length ? (c.isBuffer(b) || (b = c.from(b)), b.copy(w, v)) : Uint8Array.prototype.set.call(
          w,
          b,
          v
        );
      else if (c.isBuffer(b))
        b.copy(w, v);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      v += b.length;
    }
    return w;
  };
  function L(a, l) {
    if (c.isBuffer(a))
      return a.length;
    if (ArrayBuffer.isView(a) || P(a, ArrayBuffer))
      return a.byteLength;
    if (typeof a != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof a
      );
    const m = a.length, w = arguments.length > 2 && arguments[2] === !0;
    if (!w && m === 0)
      return 0;
    let v = !1;
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
          return K(a).length;
        default:
          if (v)
            return w ? -1 : O(a).length;
          l = ("" + l).toLowerCase(), v = !0;
      }
  }
  c.byteLength = L;
  function V(a, l, m) {
    let w = !1;
    if ((l === void 0 || l < 0) && (l = 0), l > this.length || ((m === void 0 || m > this.length) && (m = this.length), m <= 0) || (m >>>= 0, l >>>= 0, m <= l))
      return "";
    for (a || (a = "utf8"); ; )
      switch (a) {
        case "hex":
          return z(this, l, m);
        case "utf8":
        case "utf-8":
          return un(this, l, m);
        case "ascii":
          return F(this, l, m);
        case "latin1":
        case "binary":
          return k(this, l, m);
        case "base64":
          return tt(this, l, m);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return re(this, l, m);
        default:
          if (w)
            throw new TypeError("Unknown encoding: " + a);
          a = (a + "").toLowerCase(), w = !0;
      }
  }
  c.prototype._isBuffer = !0;
  function D(a, l, m) {
    const w = a[l];
    a[l] = a[m], a[m] = w;
  }
  c.prototype.swap16 = function() {
    const a = this.length;
    if (a % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let l = 0; l < a; l += 2)
      D(this, l, l + 1);
    return this;
  }, c.prototype.swap32 = function() {
    const a = this.length;
    if (a % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let l = 0; l < a; l += 4)
      D(this, l, l + 3), D(this, l + 1, l + 2);
    return this;
  }, c.prototype.swap64 = function() {
    const a = this.length;
    if (a % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let l = 0; l < a; l += 8)
      D(this, l, l + 7), D(this, l + 1, l + 6), D(this, l + 2, l + 5), D(this, l + 3, l + 4);
    return this;
  }, c.prototype.toString = function() {
    const a = this.length;
    return a === 0 ? "" : arguments.length === 0 ? un(this, 0, a) : V.apply(this, arguments);
  }, c.prototype.toLocaleString = c.prototype.toString, c.prototype.equals = function(a) {
    if (!c.isBuffer(a))
      throw new TypeError("Argument must be a Buffer");
    return this === a ? !0 : c.compare(this, a) === 0;
  }, c.prototype.inspect = function() {
    let a = "";
    const l = n.INSPECT_MAX_BYTES;
    return a = this.toString("hex", 0, l).replace(/(.{2})/g, "$1 ").trim(), this.length > l && (a += " ... "), "<Buffer " + a + ">";
  }, r && (c.prototype[r] = c.prototype.inspect), c.prototype.compare = function(a, l, m, w, v) {
    if (P(a, Uint8Array) && (a = c.from(a, a.offset, a.byteLength)), !c.isBuffer(a))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof a
      );
    if (l === void 0 && (l = 0), m === void 0 && (m = a ? a.length : 0), w === void 0 && (w = 0), v === void 0 && (v = this.length), l < 0 || m > a.length || w < 0 || v > this.length)
      throw new RangeError("out of range index");
    if (w >= v && l >= m)
      return 0;
    if (w >= v)
      return -1;
    if (l >= m)
      return 1;
    if (l >>>= 0, m >>>= 0, w >>>= 0, v >>>= 0, this === a)
      return 0;
    let b = v - w, U = m - l;
    const ye = Math.min(b, U), Oe = this.slice(w, v), Ee = a.slice(l, m);
    for (let oe = 0; oe < ye; ++oe)
      if (Oe[oe] !== Ee[oe]) {
        b = Oe[oe], U = Ee[oe];
        break;
      }
    return b < U ? -1 : U < b ? 1 : 0;
  };
  function te(a, l, m, w, v) {
    if (a.length === 0)
      return -1;
    if (typeof m == "string" ? (w = m, m = 0) : m > 2147483647 ? m = 2147483647 : m < -2147483648 && (m = -2147483648), m = +m, J(m) && (m = v ? 0 : a.length - 1), m < 0 && (m = a.length + m), m >= a.length) {
      if (v)
        return -1;
      m = a.length - 1;
    } else if (m < 0)
      if (v)
        m = 0;
      else
        return -1;
    if (typeof l == "string" && (l = c.from(l, w)), c.isBuffer(l))
      return l.length === 0 ? -1 : G(a, l, m, w, v);
    if (typeof l == "number")
      return l = l & 255, typeof Uint8Array.prototype.indexOf == "function" ? v ? Uint8Array.prototype.indexOf.call(a, l, m) : Uint8Array.prototype.lastIndexOf.call(a, l, m) : G(a, [l], m, w, v);
    throw new TypeError("val must be string, number or Buffer");
  }
  function G(a, l, m, w, v) {
    let b = 1, U = a.length, ye = l.length;
    if (w !== void 0 && (w = String(w).toLowerCase(), w === "ucs2" || w === "ucs-2" || w === "utf16le" || w === "utf-16le")) {
      if (a.length < 2 || l.length < 2)
        return -1;
      b = 2, U /= 2, ye /= 2, m /= 2;
    }
    function Oe(oe, he) {
      return b === 1 ? oe[he] : oe.readUInt16BE(he * b);
    }
    let Ee;
    if (v) {
      let oe = -1;
      for (Ee = m; Ee < U; Ee++)
        if (Oe(a, Ee) === Oe(l, oe === -1 ? 0 : Ee - oe)) {
          if (oe === -1 && (oe = Ee), Ee - oe + 1 === ye)
            return oe * b;
        } else
          oe !== -1 && (Ee -= Ee - oe), oe = -1;
    } else
      for (m + ye > U && (m = U - ye), Ee = m; Ee >= 0; Ee--) {
        let oe = !0;
        for (let he = 0; he < ye; he++)
          if (Oe(a, Ee + he) !== Oe(l, he)) {
            oe = !1;
            break;
          }
        if (oe)
          return Ee;
      }
    return -1;
  }
  c.prototype.includes = function(a, l, m) {
    return this.indexOf(a, l, m) !== -1;
  }, c.prototype.indexOf = function(a, l, m) {
    return te(this, a, l, m, !0);
  }, c.prototype.lastIndexOf = function(a, l, m) {
    return te(this, a, l, m, !1);
  };
  function se(a, l, m, w) {
    m = Number(m) || 0;
    const v = a.length - m;
    w ? (w = Number(w), w > v && (w = v)) : w = v;
    const b = l.length;
    w > b / 2 && (w = b / 2);
    let U;
    for (U = 0; U < w; ++U) {
      const ye = parseInt(l.substr(U * 2, 2), 16);
      if (J(ye))
        return U;
      a[m + U] = ye;
    }
    return U;
  }
  function me(a, l, m, w) {
    return x(O(l, a.length - m), a, m, w);
  }
  function ke(a, l, m, w) {
    return x(A(l), a, m, w);
  }
  function Ie(a, l, m, w) {
    return x(K(l), a, m, w);
  }
  function Pe(a, l, m, w) {
    return x(C(l, a.length - m), a, m, w);
  }
  c.prototype.write = function(a, l, m, w) {
    if (l === void 0)
      w = "utf8", m = this.length, l = 0;
    else if (m === void 0 && typeof l == "string")
      w = l, m = this.length, l = 0;
    else if (isFinite(l))
      l = l >>> 0, isFinite(m) ? (m = m >>> 0, w === void 0 && (w = "utf8")) : (w = m, m = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const v = this.length - l;
    if ((m === void 0 || m > v) && (m = v), a.length > 0 && (m < 0 || l < 0) || l > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    w || (w = "utf8");
    let b = !1;
    for (; ; )
      switch (w) {
        case "hex":
          return se(this, a, l, m);
        case "utf8":
        case "utf-8":
          return me(this, a, l, m);
        case "ascii":
        case "latin1":
        case "binary":
          return ke(this, a, l, m);
        case "base64":
          return Ie(this, a, l, m);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Pe(this, a, l, m);
        default:
          if (b)
            throw new TypeError("Unknown encoding: " + w);
          w = ("" + w).toLowerCase(), b = !0;
      }
  }, c.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function tt(a, l, m) {
    return l === 0 && m === a.length ? e.fromByteArray(a) : e.fromByteArray(a.slice(l, m));
  }
  function un(a, l, m) {
    m = Math.min(a.length, m);
    const w = [];
    let v = l;
    for (; v < m; ) {
      const b = a[v];
      let U = null, ye = b > 239 ? 4 : b > 223 ? 3 : b > 191 ? 2 : 1;
      if (v + ye <= m) {
        let Oe, Ee, oe, he;
        switch (ye) {
          case 1:
            b < 128 && (U = b);
            break;
          case 2:
            Oe = a[v + 1], (Oe & 192) === 128 && (he = (b & 31) << 6 | Oe & 63, he > 127 && (U = he));
            break;
          case 3:
            Oe = a[v + 1], Ee = a[v + 2], (Oe & 192) === 128 && (Ee & 192) === 128 && (he = (b & 15) << 12 | (Oe & 63) << 6 | Ee & 63, he > 2047 && (he < 55296 || he > 57343) && (U = he));
            break;
          case 4:
            Oe = a[v + 1], Ee = a[v + 2], oe = a[v + 3], (Oe & 192) === 128 && (Ee & 192) === 128 && (oe & 192) === 128 && (he = (b & 15) << 18 | (Oe & 63) << 12 | (Ee & 63) << 6 | oe & 63, he > 65535 && he < 1114112 && (U = he));
        }
      }
      U === null ? (U = 65533, ye = 1) : U > 65535 && (U -= 65536, w.push(U >>> 10 & 1023 | 55296), U = 56320 | U & 1023), w.push(U), v += ye;
    }
    return De(w);
  }
  const je = 4096;
  function De(a) {
    const l = a.length;
    if (l <= je)
      return String.fromCharCode.apply(String, a);
    let m = "", w = 0;
    for (; w < l; )
      m += String.fromCharCode.apply(
        String,
        a.slice(w, w += je)
      );
    return m;
  }
  function F(a, l, m) {
    let w = "";
    m = Math.min(a.length, m);
    for (let v = l; v < m; ++v)
      w += String.fromCharCode(a[v] & 127);
    return w;
  }
  function k(a, l, m) {
    let w = "";
    m = Math.min(a.length, m);
    for (let v = l; v < m; ++v)
      w += String.fromCharCode(a[v]);
    return w;
  }
  function z(a, l, m) {
    const w = a.length;
    (!l || l < 0) && (l = 0), (!m || m < 0 || m > w) && (m = w);
    let v = "";
    for (let b = l; b < m; ++b)
      v += $[a[b]];
    return v;
  }
  function re(a, l, m) {
    const w = a.slice(l, m);
    let v = "";
    for (let b = 0; b < w.length - 1; b += 2)
      v += String.fromCharCode(w[b] + w[b + 1] * 256);
    return v;
  }
  c.prototype.slice = function(a, l) {
    const m = this.length;
    a = ~~a, l = l === void 0 ? m : ~~l, a < 0 ? (a += m, a < 0 && (a = 0)) : a > m && (a = m), l < 0 ? (l += m, l < 0 && (l = 0)) : l > m && (l = m), l < a && (l = a);
    const w = this.subarray(a, l);
    return Object.setPrototypeOf(w, c.prototype), w;
  };
  function Y(a, l, m) {
    if (a % 1 !== 0 || a < 0)
      throw new RangeError("offset is not uint");
    if (a + l > m)
      throw new RangeError("Trying to access beyond buffer length");
  }
  c.prototype.readUintLE = c.prototype.readUIntLE = function(a, l, m) {
    a = a >>> 0, l = l >>> 0, m || Y(a, l, this.length);
    let w = this[a], v = 1, b = 0;
    for (; ++b < l && (v *= 256); )
      w += this[a + b] * v;
    return w;
  }, c.prototype.readUintBE = c.prototype.readUIntBE = function(a, l, m) {
    a = a >>> 0, l = l >>> 0, m || Y(a, l, this.length);
    let w = this[a + --l], v = 1;
    for (; l > 0 && (v *= 256); )
      w += this[a + --l] * v;
    return w;
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
  }, c.prototype.readBigUInt64LE = j(function(a) {
    a = a >>> 0, Ye(a, "offset");
    const l = this[a], m = this[a + 7];
    (l === void 0 || m === void 0) && g(a, this.length - 8);
    const w = l + this[++a] * 2 ** 8 + this[++a] * 2 ** 16 + this[++a] * 2 ** 24, v = this[++a] + this[++a] * 2 ** 8 + this[++a] * 2 ** 16 + m * 2 ** 24;
    return BigInt(w) + (BigInt(v) << BigInt(32));
  }), c.prototype.readBigUInt64BE = j(function(a) {
    a = a >>> 0, Ye(a, "offset");
    const l = this[a], m = this[a + 7];
    (l === void 0 || m === void 0) && g(a, this.length - 8);
    const w = l * 2 ** 24 + this[++a] * 2 ** 16 + this[++a] * 2 ** 8 + this[++a], v = this[++a] * 2 ** 24 + this[++a] * 2 ** 16 + this[++a] * 2 ** 8 + m;
    return (BigInt(w) << BigInt(32)) + BigInt(v);
  }), c.prototype.readIntLE = function(a, l, m) {
    a = a >>> 0, l = l >>> 0, m || Y(a, l, this.length);
    let w = this[a], v = 1, b = 0;
    for (; ++b < l && (v *= 256); )
      w += this[a + b] * v;
    return v *= 128, w >= v && (w -= Math.pow(2, 8 * l)), w;
  }, c.prototype.readIntBE = function(a, l, m) {
    a = a >>> 0, l = l >>> 0, m || Y(a, l, this.length);
    let w = l, v = 1, b = this[a + --w];
    for (; w > 0 && (v *= 256); )
      b += this[a + --w] * v;
    return v *= 128, b >= v && (b -= Math.pow(2, 8 * l)), b;
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
  }, c.prototype.readBigInt64LE = j(function(a) {
    a = a >>> 0, Ye(a, "offset");
    const l = this[a], m = this[a + 7];
    (l === void 0 || m === void 0) && g(a, this.length - 8);
    const w = this[a + 4] + this[a + 5] * 2 ** 8 + this[a + 6] * 2 ** 16 + (m << 24);
    return (BigInt(w) << BigInt(32)) + BigInt(l + this[++a] * 2 ** 8 + this[++a] * 2 ** 16 + this[++a] * 2 ** 24);
  }), c.prototype.readBigInt64BE = j(function(a) {
    a = a >>> 0, Ye(a, "offset");
    const l = this[a], m = this[a + 7];
    (l === void 0 || m === void 0) && g(a, this.length - 8);
    const w = (l << 24) + // Overflow
    this[++a] * 2 ** 16 + this[++a] * 2 ** 8 + this[++a];
    return (BigInt(w) << BigInt(32)) + BigInt(this[++a] * 2 ** 24 + this[++a] * 2 ** 16 + this[++a] * 2 ** 8 + m);
  }), c.prototype.readFloatLE = function(a, l) {
    return a = a >>> 0, l || Y(a, 4, this.length), t.read(this, a, !0, 23, 4);
  }, c.prototype.readFloatBE = function(a, l) {
    return a = a >>> 0, l || Y(a, 4, this.length), t.read(this, a, !1, 23, 4);
  }, c.prototype.readDoubleLE = function(a, l) {
    return a = a >>> 0, l || Y(a, 8, this.length), t.read(this, a, !0, 52, 8);
  }, c.prototype.readDoubleBE = function(a, l) {
    return a = a >>> 0, l || Y(a, 8, this.length), t.read(this, a, !1, 52, 8);
  };
  function Z(a, l, m, w, v, b) {
    if (!c.isBuffer(a))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (l > v || l < b)
      throw new RangeError('"value" argument is out of bounds');
    if (m + w > a.length)
      throw new RangeError("Index out of range");
  }
  c.prototype.writeUintLE = c.prototype.writeUIntLE = function(a, l, m, w) {
    if (a = +a, l = l >>> 0, m = m >>> 0, !w) {
      const U = Math.pow(2, 8 * m) - 1;
      Z(this, a, l, m, U, 0);
    }
    let v = 1, b = 0;
    for (this[l] = a & 255; ++b < m && (v *= 256); )
      this[l + b] = a / v & 255;
    return l + m;
  }, c.prototype.writeUintBE = c.prototype.writeUIntBE = function(a, l, m, w) {
    if (a = +a, l = l >>> 0, m = m >>> 0, !w) {
      const U = Math.pow(2, 8 * m) - 1;
      Z(this, a, l, m, U, 0);
    }
    let v = m - 1, b = 1;
    for (this[l + v] = a & 255; --v >= 0 && (b *= 256); )
      this[l + v] = a / b & 255;
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
  function le(a, l, m, w, v) {
    We(l, w, v, a, m, 7);
    let b = Number(l & BigInt(4294967295));
    a[m++] = b, b = b >> 8, a[m++] = b, b = b >> 8, a[m++] = b, b = b >> 8, a[m++] = b;
    let U = Number(l >> BigInt(32) & BigInt(4294967295));
    return a[m++] = U, U = U >> 8, a[m++] = U, U = U >> 8, a[m++] = U, U = U >> 8, a[m++] = U, m;
  }
  function pe(a, l, m, w, v) {
    We(l, w, v, a, m, 7);
    let b = Number(l & BigInt(4294967295));
    a[m + 7] = b, b = b >> 8, a[m + 6] = b, b = b >> 8, a[m + 5] = b, b = b >> 8, a[m + 4] = b;
    let U = Number(l >> BigInt(32) & BigInt(4294967295));
    return a[m + 3] = U, U = U >> 8, a[m + 2] = U, U = U >> 8, a[m + 1] = U, U = U >> 8, a[m] = U, m + 8;
  }
  c.prototype.writeBigUInt64LE = j(function(a, l = 0) {
    return le(this, a, l, BigInt(0), BigInt("0xffffffffffffffff"));
  }), c.prototype.writeBigUInt64BE = j(function(a, l = 0) {
    return pe(this, a, l, BigInt(0), BigInt("0xffffffffffffffff"));
  }), c.prototype.writeIntLE = function(a, l, m, w) {
    if (a = +a, l = l >>> 0, !w) {
      const ye = Math.pow(2, 8 * m - 1);
      Z(this, a, l, m, ye - 1, -ye);
    }
    let v = 0, b = 1, U = 0;
    for (this[l] = a & 255; ++v < m && (b *= 256); )
      a < 0 && U === 0 && this[l + v - 1] !== 0 && (U = 1), this[l + v] = (a / b >> 0) - U & 255;
    return l + m;
  }, c.prototype.writeIntBE = function(a, l, m, w) {
    if (a = +a, l = l >>> 0, !w) {
      const ye = Math.pow(2, 8 * m - 1);
      Z(this, a, l, m, ye - 1, -ye);
    }
    let v = m - 1, b = 1, U = 0;
    for (this[l + v] = a & 255; --v >= 0 && (b *= 256); )
      a < 0 && U === 0 && this[l + v + 1] !== 0 && (U = 1), this[l + v] = (a / b >> 0) - U & 255;
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
  }, c.prototype.writeBigInt64LE = j(function(a, l = 0) {
    return le(this, a, l, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), c.prototype.writeBigInt64BE = j(function(a, l = 0) {
    return pe(this, a, l, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function de(a, l, m, w, v, b) {
    if (m + w > a.length)
      throw new RangeError("Index out of range");
    if (m < 0)
      throw new RangeError("Index out of range");
  }
  function Te(a, l, m, w, v) {
    return l = +l, m = m >>> 0, v || de(a, l, m, 4), t.write(a, l, m, w, 23, 4), m + 4;
  }
  c.prototype.writeFloatLE = function(a, l, m) {
    return Te(this, a, l, !0, m);
  }, c.prototype.writeFloatBE = function(a, l, m) {
    return Te(this, a, l, !1, m);
  };
  function ge(a, l, m, w, v) {
    return l = +l, m = m >>> 0, v || de(a, l, m, 8), t.write(a, l, m, w, 52, 8), m + 8;
  }
  c.prototype.writeDoubleLE = function(a, l, m) {
    return ge(this, a, l, !0, m);
  }, c.prototype.writeDoubleBE = function(a, l, m) {
    return ge(this, a, l, !1, m);
  }, c.prototype.copy = function(a, l, m, w) {
    if (!c.isBuffer(a))
      throw new TypeError("argument should be a Buffer");
    if (m || (m = 0), !w && w !== 0 && (w = this.length), l >= a.length && (l = a.length), l || (l = 0), w > 0 && w < m && (w = m), w === m || a.length === 0 || this.length === 0)
      return 0;
    if (l < 0)
      throw new RangeError("targetStart out of bounds");
    if (m < 0 || m >= this.length)
      throw new RangeError("Index out of range");
    if (w < 0)
      throw new RangeError("sourceEnd out of bounds");
    w > this.length && (w = this.length), a.length - l < w - m && (w = a.length - l + m);
    const v = w - m;
    return this === a && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(l, m, w) : Uint8Array.prototype.set.call(
      a,
      this.subarray(m, w),
      l
    ), v;
  }, c.prototype.fill = function(a, l, m, w) {
    if (typeof a == "string") {
      if (typeof l == "string" ? (w = l, l = 0, m = this.length) : typeof m == "string" && (w = m, m = this.length), w !== void 0 && typeof w != "string")
        throw new TypeError("encoding must be a string");
      if (typeof w == "string" && !c.isEncoding(w))
        throw new TypeError("Unknown encoding: " + w);
      if (a.length === 1) {
        const b = a.charCodeAt(0);
        (w === "utf8" && b < 128 || w === "latin1") && (a = b);
      }
    } else
      typeof a == "number" ? a = a & 255 : typeof a == "boolean" && (a = Number(a));
    if (l < 0 || this.length < l || this.length < m)
      throw new RangeError("Out of range index");
    if (m <= l)
      return this;
    l = l >>> 0, m = m === void 0 ? this.length : m >>> 0, a || (a = 0);
    let v;
    if (typeof a == "number")
      for (v = l; v < m; ++v)
        this[v] = a;
    else {
      const b = c.isBuffer(a) ? a : c.from(a, w), U = b.length;
      if (U === 0)
        throw new TypeError('The value "' + a + '" is invalid for argument "value"');
      for (v = 0; v < m - l; ++v)
        this[v + l] = b[v % U];
    }
    return this;
  };
  const Ne = {};
  function Me(a, l, m) {
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
      set code(w) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: w,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${a}]: ${this.message}`;
      }
    };
  }
  Me(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(a) {
      return a ? `${a} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), Me(
    "ERR_INVALID_ARG_TYPE",
    function(a, l) {
      return `The "${a}" argument must be of type number. Received type ${typeof l}`;
    },
    TypeError
  ), Me(
    "ERR_OUT_OF_RANGE",
    function(a, l, m) {
      let w = `The value of "${a}" is out of range.`, v = m;
      return Number.isInteger(m) && Math.abs(m) > 2 ** 32 ? v = Le(String(m)) : typeof m == "bigint" && (v = String(m), (m > BigInt(2) ** BigInt(32) || m < -(BigInt(2) ** BigInt(32))) && (v = Le(v)), v += "n"), w += ` It must be ${l}. Received ${v}`, w;
    },
    RangeError
  );
  function Le(a) {
    let l = "", m = a.length;
    const w = a[0] === "-" ? 1 : 0;
    for (; m >= w + 4; m -= 3)
      l = `_${a.slice(m - 3, m)}${l}`;
    return `${a.slice(0, m)}${l}`;
  }
  function $e(a, l, m) {
    Ye(l, "offset"), (a[l] === void 0 || a[l + m] === void 0) && g(l, a.length - (m + 1));
  }
  function We(a, l, m, w, v, b) {
    if (a > m || a < l) {
      const U = typeof l == "bigint" ? "n" : "";
      let ye;
      throw b > 3 ? l === 0 || l === BigInt(0) ? ye = `>= 0${U} and < 2${U} ** ${(b + 1) * 8}${U}` : ye = `>= -(2${U} ** ${(b + 1) * 8 - 1}${U}) and < 2 ** ${(b + 1) * 8 - 1}${U}` : ye = `>= ${l}${U} and <= ${m}${U}`, new Ne.ERR_OUT_OF_RANGE("value", ye, a);
    }
    $e(w, v, b);
  }
  function Ye(a, l) {
    if (typeof a != "number")
      throw new Ne.ERR_INVALID_ARG_TYPE(l, "number", a);
  }
  function g(a, l, m) {
    throw Math.floor(a) !== a ? (Ye(a, m), new Ne.ERR_OUT_OF_RANGE(m || "offset", "an integer", a)) : l < 0 ? new Ne.ERR_BUFFER_OUT_OF_BOUNDS() : new Ne.ERR_OUT_OF_RANGE(
      m || "offset",
      `>= ${m ? 1 : 0} and <= ${l}`,
      a
    );
  }
  const E = /[^+/0-9A-Za-z-_]/g;
  function S(a) {
    if (a = a.split("=")[0], a = a.trim().replace(E, ""), a.length < 2)
      return "";
    for (; a.length % 4 !== 0; )
      a = a + "=";
    return a;
  }
  function O(a, l) {
    l = l || 1 / 0;
    let m;
    const w = a.length;
    let v = null;
    const b = [];
    for (let U = 0; U < w; ++U) {
      if (m = a.charCodeAt(U), m > 55295 && m < 57344) {
        if (!v) {
          if (m > 56319) {
            (l -= 3) > -1 && b.push(239, 191, 189);
            continue;
          } else if (U + 1 === w) {
            (l -= 3) > -1 && b.push(239, 191, 189);
            continue;
          }
          v = m;
          continue;
        }
        if (m < 56320) {
          (l -= 3) > -1 && b.push(239, 191, 189), v = m;
          continue;
        }
        m = (v - 55296 << 10 | m - 56320) + 65536;
      } else
        v && (l -= 3) > -1 && b.push(239, 191, 189);
      if (v = null, m < 128) {
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
  function C(a, l) {
    let m, w, v;
    const b = [];
    for (let U = 0; U < a.length && !((l -= 2) < 0); ++U)
      m = a.charCodeAt(U), w = m >> 8, v = m % 256, b.push(v), b.push(w);
    return b;
  }
  function K(a) {
    return e.toByteArray(S(a));
  }
  function x(a, l, m, w) {
    let v;
    for (v = 0; v < w && !(v + m >= l.length || v >= a.length); ++v)
      l[v + m] = a[v];
    return v;
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
      const w = m * 16;
      for (let v = 0; v < 16; ++v)
        l[w + v] = a[m] + a[v];
    }
    return l;
  }();
  function j(a) {
    return typeof BigInt > "u" ? W : a;
  }
  function W() {
    throw new Error("BigInt not supported");
  }
})(kl);
const qf = 32, k0 = /^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]+$/;
class yt {
  /**
   * Constructs a new PublicKey instance.
   *
   * @param publicKey - The raw public key as a Uint8Array.
   */
  constructor(e) {
    if (e.length !== qf)
      throw Ec();
    this.value = e;
  }
  /**
   * Constructs a PublicKey instance from its Base58 representation.
   *
   * @param base58 - The Base58 encoded public key string.
   * @returns A new PublicKey instance.
   */
  static fromBase58(e) {
    if (!e.match(k0))
      throw Ec();
    const t = $u.decode(e);
    if (t.length !== qf)
      throw Ec();
    return new yt(t);
  }
  /**
   * Converts the public key to a Buffer.
   *
   * @returns The public key as a Buffer.
   */
  toBuffer() {
    return kl.Buffer.from([...this.value]);
  }
  /**
   * Encodes the public key into its Base58 representation.
   *
   * @returns The Base58 encoded public key string.
   */
  toBase58() {
    return $u.encode(this.value);
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
    return Zs.verify(t, new Uint8Array(e), this.value);
  }
}
class fi {
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
    const e = Zs.utils.randomPrivateKey(), t = Zs.getPublicKey(e);
    return new fi(e, t);
  }
  /**
   * Constructs a Keypair from a given secret key.
   *
   * @param secretKey - Secret key to derive the Keypair from.
   * @returns A new Keypair instance.
   */
  static fromSecretKey(e) {
    const t = e.subarray(0, 32), r = Zs.getPublicKey(t);
    return new fi(t, r);
  }
  /**
   * Constructs a Keypair from a given seed.
   *
   * @param seed - Seed to derive the Keypair from.
   * @returns A new Keypair instance.
   */
  static fromSeed(e) {
    return fi.fromSecretKey(e);
  }
  /**
   * Constructs a Keypair from a raw private key.
   *
   * @param rawPrivateKey - Raw private key to derive the Keypair from.
   * @returns A new Keypair instance.
   */
  static fromRawPrivateKey(e) {
    const t = Zs.getPublicKey(e);
    return new fi(e, t);
  }
  /**
   * Retrieves the public key as a PublicKey object.
   *
   * @returns The public key.
   */
  getPublicKey() {
    return new yt(this.publicKey);
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
    return Zs.sign(new Uint8Array(e), this.privateKey);
  }
  /**
   * Verifies a message signature against the public key.
   *
   * @param message - The message to verify.
   * @param signature - The signature to verify against.
   * @returns True if the signature is valid, false otherwise.
   */
  verify(e, t) {
    return Zs.verify(t, new Uint8Array(e), this.publicKey);
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
    return fi.fromRawPrivateKey(t);
  }
}
const Fo = () => new Error("invalid currency"), Vu = [
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
function O0(n) {
  const e = Vu.indexOf(n);
  if (e === -1)
    throw Fo();
  return e;
}
function B0(n) {
  if (n < 0 || n >= Vu.length)
    throw Fo();
  return Vu[n];
}
function Jd(n) {
  return Vu.indexOf(n) !== -1;
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
we.mint = yt.fromBase58(we.mintAddress);
we.zero = new we(0, 0);
we.one = new we(1, 0);
we.max = new we(Number.MAX_SAFE_INTEGER, Number(we.quarksPerKin - 1n));
we.min = new we(Number.MIN_SAFE_INTEGER, 0);
var Be;
(function(n) {
  n[n.Cash = 0] = "Cash", n[n.GiftCard = 1] = "GiftCard", n[n.RequestPayment = 2] = "RequestPayment", n[n.RequestLogin = 3] = "RequestLogin", n[n.RequestPaymentWithFeesSupport = 4] = "RequestPaymentWithFeesSupport", n[n.Tip = 5] = "Tip";
})(Be || (Be = {}));
const A0 = (n, e, t) => n & e ^ ~n & t, J0 = (n, e, t) => n & e ^ n & t ^ e & t, R0 = /* @__PURE__ */ new Uint32Array([
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
]), ii = /* @__PURE__ */ new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]), si = /* @__PURE__ */ new Uint32Array(64);
class x0 extends bd {
  constructor() {
    super(64, 32, 8, !1), this.A = ii[0] | 0, this.B = ii[1] | 0, this.C = ii[2] | 0, this.D = ii[3] | 0, this.E = ii[4] | 0, this.F = ii[5] | 0, this.G = ii[6] | 0, this.H = ii[7] | 0;
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
      si[p] = e.getUint32(t, !1);
    for (let p = 16; p < 64; p++) {
      const y = si[p - 15], N = si[p - 2], I = At(y, 7) ^ At(y, 18) ^ y >>> 3, q = At(N, 17) ^ At(N, 19) ^ N >>> 10;
      si[p] = q + si[p - 7] + I + si[p - 16] | 0;
    }
    let { A: r, B: s, C: o, D: u, E: c, F: f, G: d, H: h } = this;
    for (let p = 0; p < 64; p++) {
      const y = At(c, 6) ^ At(c, 11) ^ At(c, 25), N = h + y + A0(c, f, d) + R0[p] + si[p] | 0, I = (At(r, 2) ^ At(r, 13) ^ At(r, 22)) + J0(r, s, o) | 0;
      h = d, d = f, f = c, c = u + N | 0, u = o, o = s, s = r, r = N + I | 0;
    }
    r = r + this.A | 0, s = s + this.B | 0, o = o + this.C | 0, u = u + this.D | 0, c = c + this.E | 0, f = f + this.F | 0, d = d + this.G | 0, h = h + this.H | 0, this.set(r, s, o, u, c, f, d, h);
  }
  roundClean() {
    si.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
const Bl = /* @__PURE__ */ Nd(() => new x0()), Rt = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  // The following characters are based on the
  // Buffer.from('').toString('base64') standard
  "+",
  "/"
];
(() => {
  const n = new Uint8Array(256);
  for (let e = 0; e < 256; ++e)
    n[e] = 255;
  return Rt.forEach((e, t) => {
    n[e.charCodeAt(0)] = t;
  }), n["=".charCodeAt(0)] = 0, n;
})();
function P0(n) {
  let e = "", t, r = n.length;
  for (t = 2; t < r; t += 3)
    e += Rt[n[t - 2] >> 2], e += Rt[(n[t - 2] & 3) << 4 | n[t - 1] >> 4], e += Rt[(n[t - 1] & 15) << 2 | n[t] >> 6], e += Rt[n[t] & 63];
  return t === r + 1 && (e += Rt[n[t - 2] >> 2], e += Rt[(n[t - 2] & 3) << 4], e += "=="), t === r && (e += Rt[n[t - 2] >> 2], e += Rt[(n[t - 2] & 3) << 4 | n[t - 1] >> 4], e += Rt[(n[t - 1] & 15) << 2], e += "="), e;
}
const L0 = () => new Error("invalid size"), C0 = () => new Error("invalid value"), U0 = () => new Error("invalid username"), q0 = () => new Error("invalid nonce");
class _s {
  /**
   * Construct a new CodePayload.
   *
   * @param opt - The options for constructing the payload.
   */
  constructor(e) {
    if (this.kind = e.kind, this.nonce = e.nonce, this.amount = e.amount, this.username = e.username, e.currency && !Jd(e.currency))
      throw Fo();
    this.currency = e.currency;
  }
  isCash() {
    return this.kind === Be.Cash && this.amount != null;
  }
  isGiftCard() {
    return this.kind === Be.GiftCard && this.amount != null;
  }
  isRequestPayment() {
    return this.kind === Be.RequestPayment && this.currency != null && this.amount != null;
  }
  isRequestPaymentWithFeesSupport() {
    return this.kind === Be.RequestPaymentWithFeesSupport && this.currency != null && this.amount != null;
  }
  isTip() {
    return this.kind === Be.Tip && this.username != null;
  }
  /**
   * Validates the payload, throwing an error if invalid.
   */
  validate() {
    if (this.kind === Be.RequestPayment && !this.currency)
      throw Fo();
    if ((this.kind === Be.Cash || this.kind === Be.GiftCard || this.kind === Be.RequestPayment) && !this.amount)
      throw C0();
    if (this.kind === Be.Tip && (!this.username || this.username.length > 15))
      throw U0();
    if (this.kind !== Be.Tip && (!this.nonce || this.nonce.length !== 11))
      throw q0();
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
        throw Fo();
      const t = O0(this.currency);
      e[1] = t;
      for (let r = 0; r < 7; r++)
        e[r + 2] = Number(this.amount >> BigInt(8 * r) & BigInt(255));
    }
    if (this.isCash() || this.isGiftCard())
      for (let t = 0; t < 8; t++)
        e[t + 1] = Number(this.amount >> BigInt(8 * t) & BigInt(255));
    if (this.isTip()) {
      const t = new TextEncoder().encode(this.username), r = 15, s = t.slice(0, r);
      e.set(s, 5);
      const o = r - s.length;
      let u = "";
      if (o > 0 && (u = "."), o > 1) {
        const c = Bl(t), f = P0(c);
        u = `${u}${f.slice(0, o - 1)}`;
      }
      if (u.length > 0) {
        const c = new TextEncoder().encode(u);
        e.set(c, 5 + s.length);
      }
      return e;
    }
    return this.nonce && e.set(this.nonce, 9), e;
  }
  /**
   * Create a CodePayload from its binary representation.
   *
   * @param data - The binary data.
   * @returns A new instance of CodePayload.
   */
  static fromData(e) {
    if (e.length !== _s.MAX_LENGTH)
      throw L0();
    const t = e[0];
    let r, s, o, u;
    if (t === Be.RequestPayment || t === Be.RequestPaymentWithFeesSupport) {
      const c = e[1];
      o = B0(c), s = e.slice(2, 9).reduce((f, d, h) => f + (BigInt(d) << BigInt(8 * h)), BigInt(0));
    }
    return (t === Be.Cash || t === Be.GiftCard) && (s = e.slice(1, 9).reduce((c, f, d) => c + (BigInt(f) << BigInt(8 * d)), BigInt(0))), t === Be.Tip ? (u = new TextDecoder().decode(e.slice(5, 20)).split(".")[0], new _s({ kind: t, username: u, nonce: new Uint8Array(11) })) : (r = e.slice(9), new _s({
      kind: t,
      nonce: r,
      amount: s,
      currency: o,
      username: u
    }));
  }
}
_s.MAX_LENGTH = 20;
var Df;
(function(n) {
  n[n.InvalidSize = 0] = "InvalidSize", n[n.EmptyData = 1] = "EmptyData", n[n.DataTooLong = 2] = "DataTooLong";
})(Df || (Df = {}));
class dt {
  /**
   * Constructor for an idempotency key.
   * @param {Uint8Array} data The value to initialize the idempotency key with. If not specified, a random Uint8Array of length IdempotencyKey.MAX_LENGTH is used.
   */
  constructor(e = new Uint8Array(dt.MAX_LENGTH)) {
    if (e.length != dt.MAX_LENGTH)
      throw Qg();
    this.value = e;
  }
  /**
   * Creates a new idempotency key from a client secret string.
   * @param {string} data The client secret to parse into an idempotency key.
   * @returns {IdempotencyKey} An IdempotencyKey object representing the decoded client secret.
   */
  static fromClientSecret(e) {
    return new dt($u.decode(e));
  }
  /**
   * Creates a new idempotency key from a seed string.
   * @param {string} seed The seed to create the idempotency key with.
   * @returns {IdempotencyKey} An IdempotencyKey object representing the created idempotency key.
   */
  static fromSeed(e) {
    return new dt(Bl(e).subarray(0, dt.MAX_LENGTH));
  }
  /**
   * Generates a random idempotency key.
   * @returns {IdempotencyKey} An IdempotencyKey object representing the generated key.
   */
  static generate() {
    const e = fi.generate().getPrivateValue().subarray(0, dt.MAX_LENGTH);
    return new dt(e);
  }
  /**
   * Converts the idempotency key to a base58 string.
   * @returns {string} A base58 encoded string representing the idempotency key.
   */
  toString() {
    return $u.encode(this.value);
  }
}
dt.MAX_LENGTH = 11;
function D0(n) {
  return fi.fromSeed(Bl(n.toBinary()));
}
class Al {
  /**
   * Constructs a new PaymentRequestIntent instance.
   *
   * @param opt - The payment request options.
   */
  constructor(e) {
    this.options = {
      ...e
    }, this.init(e), this.validate(), this.options.idempotencyKey ? this.nonce = dt.fromSeed(this.options.idempotencyKey) : this.options.clientSecret ? this.nonce = dt.fromClientSecret(this.options.clientSecret) : this.nonce = dt.generate(), this.rendezvousPayload = this.toPayload(), this.rendezvousKeypair = D0(this.rendezvousPayload);
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
async function Rd(n) {
  const { signature: e, envelope: t } = n.sign();
  return new Ht({
    message: t,
    rendezvousKey: {
      value: n.rendezvousKeypair.getPublicKey().value
    },
    signature: {
      value: e
    }
  });
}
function F0(n) {
  if (n.mode === void 0)
    throw ed();
  if (n.idempotencyKey && n.clientSecret)
    throw ty();
}
function _0(n) {
  if (n.destination === void 0)
    throw Ym();
  if (n.amount === void 0)
    throw Zm();
  if (n.currency === void 0)
    throw Qm();
  if (!Jd(n.currency))
    throw ey();
  yt.fromBase58(n.destination);
}
function Ff(n) {
  if (n.login === void 0)
    throw Tl();
  if (n.login.domain === void 0)
    throw El();
  if (n.login.verifier === void 0)
    throw Go();
  let e;
  try {
    e = new URL(n.login.domain);
  } catch {
  }
  if (e)
    throw hf();
  try {
    e = new URL(`http://${n.login.domain}`);
  } catch {
    throw ry();
  }
  if (e.hostname.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/))
    throw sy();
  {
    if (e.hostname.split(".").length > 2)
      throw iy();
    if (e.hostname === "localhost")
      throw oy();
    if (e.port)
      throw ay();
    if (e.pathname !== "/" || n.login.domain.includes("/"))
      throw hf();
  }
  yt.fromBase58(n.login.verifier);
}
function K0(n) {
  if (n.platform === void 0)
    throw td();
  if (n.platform.name === void 0)
    throw nd();
  if (n.platform.username === void 0)
    throw rd();
}
function _f(n) {
  if (n.signers) {
    for (const e of n.signers)
      if (!e.sign && typeof e.sign != "function")
        throw ny();
  }
}
function cc(n) {
  switch (F0(n), n.mode) {
    case "login":
      Ff(n), n.signers && _f(n);
      break;
    case "payment":
      _0(n), n.login && Ff(n), n.signers && _f(n);
      break;
    case "tip":
      K0(n);
      break;
    default:
      throw ed();
  }
}
class lc extends Al {
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
  hasMessage() {
    return !0;
  }
  init() {
    this.options.amount !== void 0 && (this.options.amount = parseFloat(this.options.amount.toFixed(2)), this.convertedAmount = parseInt((this.options.amount * 100).toFixed()));
  }
  getRequestKind() {
    return this.options.fees ? Be.RequestPaymentWithFeesSupport : Be.RequestPayment;
  }
  toPayload() {
    const e = this.getRequestKind(), t = BigInt(this.convertedAmount), r = this.nonce.value;
    return new _s({ kind: e, amount: t, nonce: r, currency: this.options.currency });
  }
  /**
   * Validates the payment request options.
   */
  validate() {
    if (cc(this.options), !this.options.destination)
      throw Ym();
    if (!this.options.amount)
      throw Zm();
    if (!this.options.currency)
      throw Qm();
    if (!this.convertedAmount)
      throw Vo();
  }
  /**
   * Converts the payment request intent to its protobuf representation.
   *
   * @returns The protobuf representation of the payment request intent.
   */
  toProto() {
    const e = yt.fromBase58(this.options.destination), { currency: t, amount: r } = this.options;
    let s;
    t === "kin" ? s = {
      case: "exact",
      value: new _e({
        currency: "kin",
        exchangeRate: 1,
        quarks: we.fromDecimal(r).toQuarks(),
        nativeAmount: r
      })
    } : s = {
      case: "partial",
      value: new pt({
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
        value: yt.fromBase58(u.destination).toBuffer()
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
      throw Vo();
    const r = this.rendezvousKeypair.sign(e.toBinary()), s = this.rendezvousKeypair.getPublicKey().toBase58(), o = t.toBinary();
    return {
      envelope: e,
      signedBytes: o,
      intent: s,
      signature: r
    };
  }
  getSendMessageRequestProto() {
    return Rd(this);
  }
}
class M0 extends lc {
  /**
   * Constructs a new PaymentRequestIntent instance.
   *
   * @param opt - The payment request options.
   */
  constructor(e) {
    super(e);
    const { signers: t } = e, { domain: r, verifier: s } = e.login;
    this.domain = r, this.verifier = yt.fromBase58(s), t && (this.signer = t.find((o) => o.getPublicKey().toBase58() === s));
  }
  /**
   * Validates the payment request options.
   */
  validate() {
    if (super.validate(), !this.options.login)
      throw Tl();
    if (!this.options.login.domain)
      throw El();
    if (!this.options.login.verifier)
      throw Go();
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
      throw Vo();
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
      throw Go();
    const e = this.toProto(), t = e.kind.value;
    if (!t)
      throw Vo();
    t.signature = new Q({
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
class xd extends Al {
  /**
   * Constructs a new LoginRequestIntent instance.
   *
   * @param opt - The login request options.
   */
  constructor(e) {
    super({
      ...e,
      mode: "login"
    });
    const { signers: t } = e, { domain: r, verifier: s } = e.login;
    this.domain = r, this.verifier = yt.fromBase58(s), t && (this.signer = t.find((o) => o.getPublicKey().toBase58() === s));
  }
  hasMessage() {
    return !0;
  }
  init() {
  }
  toPayload() {
    const e = Be.RequestLogin, t = this.nonce.value;
    return new _s({ kind: e, nonce: t });
  }
  /**
   * Validates the payment request options.
   */
  validate() {
    if (cc(this.options), !this.options.login)
      throw Tl();
    if (!this.options.login.domain)
      throw El();
    if (!this.options.login.verifier)
      throw Go();
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
      throw Go();
    const e = this.toProto(), t = e.kind.value;
    if (!t)
      throw Vo();
    t.signature = new Q({
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
  getSendMessageRequestProto() {
    return Rd(this);
  }
}
class Pd extends Al {
  /**
   * Constructs a new TipRequestIntent instance.
   *
   * @param opt - The tip request options.
   */
  constructor(e) {
    super({
      ...e,
      mode: "tip"
    }), this.username = "", this.platform = "";
  }
  hasMessage() {
    return !1;
  }
  init(e) {
    const { username: t, name: r } = e.platform;
    this.username = t, this.platform = r;
  }
  toPayload() {
    const e = Be.Tip, t = this.username;
    return new _s({ kind: e, username: t });
  }
  /**
   * Validates the payment request options.
   */
  validate() {
    if (cc(this.options), !this.options.platform)
      throw td();
    if (!this.options.platform.name)
      throw nd();
    if (!this.options.platform.username)
      throw rd();
  }
}
function $0(n) {
  return typeof btoa == "function" ? btoa(n) : kl.Buffer.from(n, "binary").toString("base64");
}
function uu(n) {
  return encodeURIComponent($0(JSON.stringify(n ?? {})));
}
function V0(n) {
  return typeof n != "object" ? n : JSON.parse(JSON.stringify(n));
}
const G0 = () => new Error("Config not initialized");
let Ru;
const j0 = (n) => {
  if (n.codeSdk === void 0)
    throw new Error("codeSdk path is required");
  Ru = sn(n);
}, cu = () => {
  if (!Ru)
    throw G0;
  return {
    config: Ru,
    codeSdk: () => Ru.value.codeSdk
  };
};
class bo {
  /**
   * Constructs an EventChannel.
   * @param id - Identifier for the connection.
   * @param targetWindow - The iframe element to communicate with. If not provided, communicates with parent window.
   */
  constructor(e = bo.getId(), t) {
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
bo.getId = () => Math.random().toString(36).substring(2, 15);
const W0 = ["width", "height"], H0 = /* @__PURE__ */ co({
  __name: "IntentRequestButton",
  emits: ["resize", "invoke"],
  setup(n, { emit: e }) {
    const t = cu(), r = ct("options"), s = (r == null ? void 0 : r.mode) ?? "payment", o = e, u = new bo(), c = `${t.codeSdk()}/${s}-request-button/#/${u.id}/p=${uu(r)}`;
    console.log("url", c);
    const f = sn(null), d = sn(0), h = sn(0);
    nu(() => {
      f.value && (u.on("resize", (y) => {
        const { width: N, height: I } = y;
        f.value && (d.value = N, h.value = I);
      }), u.on("invoke", () => {
        o("invoke", void 0);
      }));
    });
    function p() {
      const y = (N) => N + " !important";
      return {
        display: y("inline-block"),
        width: y("222px"),
        height: y("60px"),
        // We have to set this to make sure the iframe stays transparent.
        // Completely counter-intuitive.
        // https://bugs.chromium.org/p/chromium/issues/detail?id=1150352
        colorScheme: y("light")
      };
    }
    return (y, N) => (Ve(), Fs("iframe", {
      ref_key: "el",
      ref: f,
      src: c,
      width: d.value,
      height: h.value,
      frameborder: "0",
      allowtransparency: "true",
      scrolling: "no",
      name: "payment-request-button",
      referrerpolicy: "no-referrer",
      style: js(p())
    }, null, 12, W0));
  }
}), Ld = /* @__PURE__ */ co({
  __name: "IntentRequestModalDesktop",
  props: {
    asPage: { type: Boolean }
  },
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
    const t = cu(), r = ct("options"), s = n, o = e, u = new bo(), c = (r == null ? void 0 : r.mode) ?? "payment", f = s.asPage ? "page" : "modal", d = `${t.codeSdk()}/${c}-request-${f}-desktop/#/${u.id}/p=${uu(r)}`, h = sn(null);
    console.log("url", d), u.on("codeScanned", () => {
      o("codeScanned");
    }), u.on("clientRejectedPayment", () => {
      o("clientRejectedPayment");
    }), u.on("clientRejectedLogin", () => {
      o("clientRejectedLogin");
    }), u.on("intentSubmitted", () => {
      o("intentSubmitted");
    }), u.on("error", (y) => {
      `${y}`.includes("NGHTTP2_INTERNAL_ERROR") ? (console.warn("CodeSDK: GRPC stream closed."), o("streamClosed")) : (console.error(`CodeSDK: ${y}`), o("error", y));
    }), u.on("streamTimeout", () => {
      console.warn("CodeSDK: Websocket Stream timeout."), o("streamTimeout");
    }), u.on("streamClosed", () => {
      console.warn("CodeSDK: Websocket Stream closed."), o("streamClosed");
    }), nu(() => {
      h.value && (u.setTargetWindow(h.value), o("channelCreated", u));
    }), Sm(() => {
      var y, N;
      const { clientSecret: I, idempotencyKey: q, confirmParams: M } = r ?? {};
      I && u.emit("updatedClientSecret", { value: I }), q && u.emit("updatedIdempotencyKey", { value: q }), M && ((y = M.success) != null && y.url && u.emit("updatedSuccessUrl", { value: M.success.url }), (N = M.cancel) != null && N.url && u.emit("updatedCancelUrl", { value: M.cancel.url }));
    });
    function p() {
      const y = (N) => N + " !important";
      return {
        inset: y("0"),
        top: y("0"),
        left: y("0"),
        right: y("0"),
        bottom: y("0"),
        position: y("fixed"),
        zIndex: y("2147483647"),
        overflow: y("hidden"),
        width: y("100dvw"),
        height: y("100dvh"),
        // We have to set this to make sure the iframe stays transparent.
        // Completely counter-intuitive.
        // https://bugs.chromium.org/p/chromium/issues/detail?id=1150352
        colorScheme: y("light")
      };
    }
    return (y, N) => (Ve(), Fs("iframe", {
      ref_key: "el",
      ref: h,
      src: d,
      frameborder: "0",
      allowTransparency: "true",
      scrolling: "no",
      name: "payment-request-card",
      referrerpolicy: "no-referrer",
      style: js(p())
    }, null, 4));
  }
}), Cd = /* @__PURE__ */ co({
  __name: "IntentRequestModalMobile",
  props: {
    asPage: { type: Boolean }
  },
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
    const t = cu(), r = ct("options"), s = (r == null ? void 0 : r.mode) ?? "payment", o = n, u = e, c = new bo(), f = o.asPage ? "page" : "modal", d = `${t.codeSdk()}/${s}-request-${f}-mobile/#/${c.id}/p=${uu(r)}`, h = sn(null);
    c.on("codeScanned", () => {
      u("codeScanned");
    }), c.on("clientRejectedPayment", () => {
      u("clientRejectedPayment");
    }), c.on("clientRejectedLogin", () => {
      u("clientRejectedLogin");
    }), c.on("intentSubmitted", () => {
      u("intentSubmitted");
    }), c.on("navigate", (y) => {
      y.url && (window.location.href = y.url);
    }), c.on("error", (y) => {
      `${y}`.includes("NGHTTP2_INTERNAL_ERROR") ? (console.warn("CodeSDK: GRPC stream closed."), u("streamClosed")) : (console.error(`CodeSDK: ${y}`), u("error", y));
    }), c.on("streamTimeout", () => {
      console.warn("CodeSDK: Websocket Stream timeout."), u("streamTimeout");
    }), c.on("streamClosed", () => {
      console.warn("CodeSDK: Websocket Stream closed."), u("streamClosed");
    }), nu(() => {
      h.value && (c.setTargetWindow(h.value), u("channelCreated", c));
    }), Sm(() => {
      var y, N;
      const { clientSecret: I, idempotencyKey: q, confirmParams: M } = r ?? {};
      I && c.emit("updatedClientSecret", { value: I }), q && c.emit("updatedIdempotencyKey", { value: q }), M && ((y = M.success) != null && y.url && c.emit("updatedSuccessUrl", { value: M.success.url }), (N = M.cancel) != null && N.url && c.emit("updatedCancelUrl", { value: M.cancel.url }));
    });
    function p() {
      const y = (N) => N + " !important";
      return {
        inset: y("0"),
        top: y("0"),
        left: y("0"),
        right: y("0"),
        bottom: y("0"),
        position: y("fixed"),
        zIndex: y("2147483647"),
        overflow: y("hidden"),
        width: y("100dvw"),
        height: y("100dvh"),
        // We have to set this to make sure the iframe stays transparent.
        // Completely counter-intuitive.
        // https://bugs.chromium.org/p/chromium/issues/detail?id=1150352
        colorScheme: y("light")
      };
    }
    return (y, N) => (Ve(), Fs("iframe", {
      ref_key: "el",
      ref: h,
      src: d,
      frameborder: "0",
      allowTransparency: "true",
      scrolling: "no",
      name: "payment-request-card",
      referrerPolicy: "no-referrer",
      style: js(p())
    }, null, 4));
  }
}), z0 = (n) => new Error(`Network error ${n}`), X0 = (n) => new Error(`Request failed with status code ${n}`);
class Y0 {
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
          const c = await u.arrayBuffer(), f = En.fromBinary(new Uint8Array(c));
          s(f);
        } else
          o(X0(u.status));
      } catch (u) {
        o(z0(u));
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
    const s = this.getServiceName(e), { encode: o, decode: u, send: c } = this.useService(e.methods[t]), f = o(r), d = new Tn({
      service: s,
      method: t,
      body: f
    }), h = await c(d.toBinary());
    return u(h.body);
  }
}
const Z0 = "https://cash.getcode.com/v1";
function Kf(n = {}) {
  const e = n.endpoint ?? Z0;
  return new Y0(e, n.fetch);
}
async function Q0(n, e) {
  if (n.hasMessage()) {
    const t = await n.getSendMessageRequestProto();
    (await e.send(Zy, "sendMessage", t)).result, vo.OK;
  }
  return {
    clientSecret: n.getClientSecret(),
    id: n.getIntentId()
  };
}
var Gu;
(function(n) {
  n.Pending = "pending", n.Confirmed = "confirmed";
})(Gu || (Gu = {}));
class eT {
  constructor(e) {
    this.intentId = e.intent, this.validate();
  }
  validate() {
    if (!this.intentId)
      throw new Error("Intent ID is required");
  }
  toProto() {
    const e = yt.fromBase58(this.intentId);
    return new Yt({
      intentId: {
        value: e.toBuffer()
      }
    });
  }
  sign() {
  }
  async send(e) {
    const t = await e.send(Ed, "getStatus", this.toProto());
    let r = Gu.Pending;
    t.intentSubmitted && (r = Gu.Confirmed);
    const { exists: s, codeScanned: o, intentSubmitted: u } = t;
    return {
      status: r,
      exists: s,
      codeScanned: o,
      intentSubmitted: u
    };
  }
}
class tT {
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
    const e = yt.fromBase58(this.intentId);
    return new Zt({
      intentId: {
        value: e.toBuffer()
      },
      url: this.url
    });
  }
  sign() {
  }
  async send(e) {
    const t = await e.send(Ed, "registerWebhook", this.toProto()), r = nT(t.result);
    return t.result === Nt.OK ? {
      success: !0,
      message: r
    } : {
      success: !1,
      message: r
    };
  }
}
function nT(n) {
  switch (n) {
    case Nt.OK:
      return "ok";
    case Nt.ALREADY_REGISTERED:
      return "already_registered";
    case Nt.REQUEST_NOT_FOUND:
      return "request_not_found";
    case Nt.INVALID_URL:
      return "invalid_url";
    case Nt.INTENT_EXISTS:
      return "intent_exists";
    default:
      return "unknown";
  }
}
const Ud = {
  /**
   * Creates a new payment intent.
   *
   * @param opt - The options for creating a payment intent.
   * @returns An object containing the client secret and intent ID.
   * @throws Will throw an error if unable to create the intent.
   */
  create: async (n) => {
    const e = Kf(n);
    let t;
    n.login ? t = new M0(n) : t = new lc(n);
    const r = await Q0(t, e);
    if (n.webhook) {
      const s = await new tT({
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
    const e = Kf(n);
    return await new eT(n).send(e);
  }
}, rT = /* @__PURE__ */ co({
  __name: "PreloadIntentRequestModalDesktop",
  props: {
    asPage: { type: Boolean }
  },
  setup(n) {
    const e = n, t = cu(), r = ct("options"), s = (r == null ? void 0 : r.mode) ?? "payment", o = e.asPage ? "page" : "modal", u = `${t.codeSdk()}/${s}-request-${o}-desktop/#/preload/p=${uu(r)}`, c = sn(null);
    function f() {
      const d = (h) => h + " !important";
      return {
        opacity: d("0"),
        visibility: d("hidden"),
        position: d("absolute"),
        top: d("-1px"),
        left: d("-1px"),
        zIndex: d("-1"),
        width: d("1px"),
        height: d("1px")
      };
    }
    return (d, h) => (Ve(), Fs("iframe", {
      ref_key: "el",
      ref: c,
      src: u,
      frameborder: "0",
      allowTransparency: "true",
      scrolling: "no",
      name: "preload-payment-request-card",
      referrerpolicy: "no-referrer",
      style: js(f())
    }, null, 4));
  }
}), iT = /* @__PURE__ */ co({
  __name: "PreloadIntentRequestModalMobile",
  props: {
    asPage: { type: Boolean }
  },
  setup(n) {
    const e = n, t = cu(), r = ct("options"), s = (r == null ? void 0 : r.mode) ?? "payment", o = e.asPage ? "page" : "modal", u = `${t.codeSdk()}/${s}-request-${o}-mobile/#/preload/p=${uu(r)}`, c = sn(null);
    function f() {
      const d = (h) => h + " !important";
      return {
        opacity: d("0"),
        visibility: d("hidden"),
        position: d("absolute"),
        top: d("-1px"),
        left: d("-1px"),
        zIndex: d("-1"),
        width: d("1px"),
        height: d("1px")
      };
    }
    return (d, h) => (Ve(), Fs("iframe", {
      ref_key: "el",
      ref: c,
      src: u,
      frameborder: "0",
      allowTransparency: "true",
      scrolling: "no",
      name: "preload-payment-request-card",
      referrerpolicy: "no-referrer",
      style: js(f())
    }, null, 4));
  }
});
function sT() {
  return navigator.userAgent.includes("DebugMobile");
}
function oT() {
  return [
    "iPhone Simulator",
    "iPhone"
  ].includes(navigator.platform);
}
function aT() {
  return /Android/i.test(navigator.userAgent);
}
function qd() {
  return oT() || aT() || sT();
}
function Ic(n) {
  try {
    return new URL(n), !0;
  } catch {
    return !1;
  }
}
function uT(n, e) {
  try {
    return new URL(n, e).toString();
  } catch {
    return "";
  }
}
function cT(n, e) {
  let t = decodeURIComponent(n);
  for (const [r, s] of Object.entries(e))
    t = t.replace(`{{${r}}}`, s);
  return encodeURI(t);
}
function ju(n, e, t) {
  let r = (n == null ? void 0 : n.url) ?? e;
  if (r && (!Ic(r) && e && Ic(e) && (r = uT(r, new URL(e).origin)), Ic(r)))
    return t && (r = cT(r, t)), { url: r };
}
const Wu = (n) => new Promise((e) => setTimeout(e, n)), lT = { key: 0 }, fT = { key: 1 }, Mf = 500, mT = /* @__PURE__ */ co({
  __name: "ButtonFlow",
  setup(n) {
    var e, t, r, s;
    const o = ct("options"), u = ct("emit", async () => !1), c = sn(null), f = No({
      intent: null,
      open: !1,
      mobile: qd()
    }), d = ((t = (e = o == null ? void 0 : o.confirmParams) == null ? void 0 : e.success) == null ? void 0 : t.url) !== void 0, h = ((s = (r = o == null ? void 0 : o.confirmParams) == null ? void 0 : r.cancel) == null ? void 0 : s.url) !== void 0;
    function p() {
      if (o)
        switch (o.mode) {
          case "login":
            return o.login && o.login.domain;
          case "payment":
            return o.amount && o.currency && o.destination;
          case "tip":
            return o.platform && o.platform.name && o.platform.username;
          default:
            return !1;
        }
      return !1;
    }
    function y(L) {
      c.value = L;
    }
    async function N() {
      var L, V;
      if (f.open = !0, await Lu(), !o)
        throw new Error("Missing options");
      if (!c.value)
        throw new Error("Missing channel");
      if (c.value.emit("beforeInvoke"), await u("invoke")) {
        f.open = !1;
        return;
      }
      switch (o.mode) {
        case "login":
          f.intent = new xd(o).getIntentId();
          break;
        case "payment":
          f.intent = new lc(o).getIntentId();
          break;
        case "tip":
          f.intent = new Pd(o).getIntentId();
          break;
        default:
          throw new Error("Invalid mode");
      }
      const D = {
        INTENT_ID: f.intent
        // ...
      }, te = window.location.href;
      if (o.confirmParams = {
        success: ju((L = o.confirmParams) == null ? void 0 : L.success, te, D),
        cancel: ju((V = o.confirmParams) == null ? void 0 : V.cancel, te, D)
      }, await Lu(), !c.value)
        throw new Error("Missing channel");
      c.value.emit("afterInvoke");
    }
    async function I() {
      var L, V;
      f.open = !1, await Wu(Mf);
      const D = (V = (L = o == null ? void 0 : o.confirmParams) == null ? void 0 : L.success) == null ? void 0 : V.url;
      await u("success", { url: D, options: o, intent: f.intent }) || d && (window.location.href = D);
    }
    async function q() {
      var L, V;
      f.open = !1, await Wu(Mf);
      const D = (V = (L = o == null ? void 0 : o.confirmParams) == null ? void 0 : L.cancel) == null ? void 0 : V.url;
      await u("cancel", { url: D, options: o, intent: f.intent }) || h && (window.location.href = D);
    }
    async function M(L) {
      await u("error", { message: `${L}` });
    }
    async function X() {
      f.open = !1, await M("stream_timed_out");
    }
    async function H() {
      f.open = !1, await M("stream_closed");
    }
    return document.addEventListener("visibilitychange", async () => {
      if (document.visibilityState === "visible") {
        if (!f.intent)
          return;
        const { status: L } = await Ud.getStatus({ intent: f.intent });
        L === "confirmed" && I();
      }
    }), (L, V) => p() ? (Ve(), Fs(Et, { key: 0 }, [
      on(ci(H0), { onInvoke: N }),
      (Ve(), dn(Fm, { to: "body" }, [
        f.open ? (Ve(), Fs("div", lT, [
          f.mobile ? (Ve(), dn(ci(Cd), {
            key: 0,
            onChannelCreated: y,
            onIntentSubmitted: I,
            onClientRejectedPayment: q,
            onClientRejectedLogin: q,
            onError: M,
            onStreamTimeout: X,
            onStreamClosed: H
          })) : (Ve(), dn(ci(Ld), {
            key: 1,
            onChannelCreated: y,
            onIntentSubmitted: I,
            onClientRejectedPayment: q,
            onClientRejectedLogin: q,
            onError: M,
            onStreamTimeout: X,
            onStreamClosed: H
          }))
        ])) : (Ve(), Fs("div", fT, [
          f.mobile ? (Ve(), dn(ci(iT), { key: 0 })) : (Ve(), dn(ci(rT), { key: 1 }))
        ]))
      ]))
    ], 64)) : Gm("", !0);
  }
}), $f = 500, dT = /* @__PURE__ */ co({
  __name: "PageFlow",
  setup(n) {
    var e, t, r, s;
    const o = ct("options"), u = ct("emit", async () => !1), c = sn(null), f = No({
      intent: null,
      mobile: qd()
    }), d = ((t = (e = o == null ? void 0 : o.confirmParams) == null ? void 0 : e.success) == null ? void 0 : t.url) !== void 0, h = ((s = (r = o == null ? void 0 : o.confirmParams) == null ? void 0 : r.cancel) == null ? void 0 : s.url) !== void 0;
    function p() {
      if (o)
        switch (o.mode) {
          case "login":
            return o.login && o.login.domain;
          case "payment":
            return o.amount && o.currency && o.destination;
          case "tip":
            return o.platform && o.platform.name && o.platform.username;
          default:
            return !1;
        }
      return !1;
    }
    function y(H) {
      c.value = H;
    }
    async function N() {
      var H, L;
      await Wu($f);
      const V = (L = (H = o == null ? void 0 : o.confirmParams) == null ? void 0 : H.success) == null ? void 0 : L.url;
      await u("success", { url: V, options: o, intent: f.intent }) || d && (window.location.href = V);
    }
    async function I() {
      var H, L;
      await Wu($f);
      const V = (L = (H = o == null ? void 0 : o.confirmParams) == null ? void 0 : H.cancel) == null ? void 0 : L.url;
      await u("cancel", { url: V, options: o, intent: f.intent }) || h && (window.location.href = V);
    }
    async function q(H) {
      await u("error", { message: `${H}` });
    }
    async function M() {
      await q("stream_timed_out");
    }
    async function X() {
      await q("stream_closed");
    }
    return nu(async () => {
      var H, L;
      if (!o)
        throw new Error("Missing options");
      if (!c.value)
        throw new Error("Missing channel");
      if (c.value.emit("beforeInvoke"), await u("invoke"))
        return;
      switch (o.mode) {
        case "login":
          f.intent = new xd(o).getIntentId();
          break;
        case "payment":
          f.intent = new lc(o).getIntentId();
          break;
        case "tip":
          f.intent = new Pd(o).getIntentId();
          break;
        default:
          throw new Error("Invalid mode");
      }
      const V = {
        INTENT_ID: f.intent
        // ...
      }, D = window.location.href;
      if (o.confirmParams = {
        success: ju((H = o.confirmParams) == null ? void 0 : H.success, D, V),
        cancel: ju((L = o.confirmParams) == null ? void 0 : L.cancel, D, V)
      }, await Lu(), !c.value)
        throw new Error("Missing channel");
      c.value.emit("afterInvoke");
    }), document.addEventListener("visibilitychange", async () => {
      if (document.visibilityState === "visible") {
        if (!f.intent)
          return;
        const { status: H } = await Ud.getStatus({ intent: f.intent });
        H === "confirmed" && N();
      }
    }), (H, L) => p() ? (Ve(), dn(Fm, {
      key: 0,
      to: "body"
    }, [
      f.mobile ? (Ve(), dn(ci(Cd), {
        key: 0,
        "as-page": !0,
        onChannelCreated: y,
        onIntentSubmitted: N,
        onClientRejectedPayment: I,
        onClientRejectedLogin: I,
        onError: q,
        onStreamTimeout: M,
        onStreamClosed: X
      })) : (Ve(), dn(ci(Ld), {
        key: 1,
        "as-page": !0,
        onChannelCreated: y,
        onIntentSubmitted: N,
        onClientRejectedPayment: I,
        onClientRejectedLogin: I,
        onError: q,
        onStreamTimeout: M,
        onStreamClosed: X
      }))
    ])) : Gm("", !0);
  }
}), Vf = "payment", hT = "en";
class Dd {
  /**
   * Constructor initializes the element with given parameters and Vue application.
   * @param params - Partial element options.
   * @param app - Vue application instance.
   */
  constructor(e, t) {
    const r = { ...e };
    r.mode = r.mode ?? Vf, r.locale = r.locale ?? hT, this.intent = No(r), this.listeners = [], this.app = t, this.validate();
  }
  /**
   * Validates the current element options.
   * @returns True if the options are valid.
   */
  validate() {
    return cc(this.intent);
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
    return this.intent.mode ?? Vf;
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
      const u = V0(o), c = this.listeners.filter((f) => f.event === s);
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
class pT extends Dd {
  /**
   * Constructs a new CodeButton with specific options.
   * @param options - Partial element options.
   */
  constructor(e) {
    super(e, Xm(mT));
  }
}
class gT extends Dd {
  /**
   * Constructs a new CodePage with specific options.
   * @param options - Partial element options.
   */
  constructor(e) {
    super(e, Xm(dT));
  }
}
const yT = {
  /**
   * Creates a new element based on the specified type.
   * @param type - The type of the element to create.
   * @param options - The options for the element.
   * @returns An object containing the newly created element.
   */
  create: (n, e) => {
    switch (n) {
      case "button":
        return { button: new pT(e) };
      case "page":
        return { page: new gT(e) };
      case "card":
        throw new Error("Card elements are not yet supported.");
      default:
        throw Zg(n);
    }
  }
}, wT = {
  codeSdk: "https://sdk.getcode.com/v1/elements"
};
j0(wT);
const TT = { elements: yT };
export {
  TT as default
};