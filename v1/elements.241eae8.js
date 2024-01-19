function tt(n, e) {
  if (!n)
    throw new Error(e);
}
const Rm = 34028234663852886e22, Xm = -34028234663852886e22, Zm = 4294967295, Gm = 2147483647, Qm = -2147483648;
function za(n) {
  if (typeof n != "number")
    throw new Error("invalid int 32: " + typeof n);
  if (!Number.isInteger(n) || n > Gm || n < Qm)
    throw new Error("invalid int 32: " + n);
}
function Ru(n) {
  if (typeof n != "number")
    throw new Error("invalid uint 32: " + typeof n);
  if (!Number.isInteger(n) || n > Zm || n < 0)
    throw new Error("invalid uint 32: " + n);
}
function uf(n) {
  if (typeof n != "number")
    throw new Error("invalid float 32: " + typeof n);
  if (Number.isFinite(n) && (n > Rm || n < Xm))
    throw new Error("invalid float 32: " + n);
}
const cf = Symbol("@bufbuild/protobuf/enum-type");
function ed(n) {
  const e = n[cf];
  return tt(e, "missing enum type on enum object"), e;
}
function lf(n, e, t, r) {
  n[cf] = ff(e, t.map((i) => ({
    no: i.no,
    name: i.name,
    localName: n[i.no]
  })));
}
function ff(n, e, t) {
  const r = /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null), o = [];
  for (const c of e) {
    const u = mf(c);
    o.push(u), r[c.name] = u, i[c.no] = u;
  }
  return {
    typeName: n,
    values: o,
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
function td(n, e, t) {
  const r = {};
  for (const i of e) {
    const o = mf(i);
    r[o.localName] = o.no, r[o.no] = o.localName;
  }
  return lf(r, n, e), r;
}
function mf(n) {
  return "localName" in n ? n : Object.assign(Object.assign({}, n), { localName: n.name });
}
let N = class {
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
  fromBinary(e, t) {
    const r = this.getType(), i = r.runtime.bin, o = i.makeReadOptions(t);
    return i.readMessage(this, o.readerFactory(e), e.byteLength, o), this;
  }
  /**
   * Parse a message from a JSON value.
   */
  fromJson(e, t) {
    const r = this.getType(), i = r.runtime.json, o = i.makeReadOptions(t);
    return i.readMessage(r, e, o, this), this;
  }
  /**
   * Parse a message from a JSON string.
   */
  fromJsonString(e, t) {
    let r;
    try {
      r = JSON.parse(e);
    } catch (i) {
      throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${i instanceof Error ? i.message : String(i)}`);
    }
    return this.fromJson(r, t);
  }
  /**
   * Serialize the message to binary data.
   */
  toBinary(e) {
    const t = this.getType(), r = t.runtime.bin, i = r.makeWriteOptions(e), o = i.writerFactory();
    return r.writeMessage(this, o, i), o.finish();
  }
  /**
   * Serialize the message to a JSON value, a JavaScript value that can be
   * passed to JSON.stringify().
   */
  toJson(e) {
    const t = this.getType(), r = t.runtime.json, i = r.makeWriteOptions(e);
    return r.writeMessage(this, i);
  }
  /**
   * Serialize the message to a JSON string.
   */
  toJsonString(e) {
    var t;
    const r = this.toJson(e);
    return JSON.stringify(r, null, (t = e == null ? void 0 : e.prettySpaces) !== null && t !== void 0 ? t : 0);
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
function nd(n, e, t, r) {
  var i;
  const o = (i = r == null ? void 0 : r.localName) !== null && i !== void 0 ? i : e.substring(e.lastIndexOf(".") + 1), c = {
    [o]: function(u) {
      n.util.initFields(this), n.util.initPartial(u, this);
    }
  }[o];
  return Object.setPrototypeOf(c.prototype, new N()), Object.assign(c, {
    runtime: n,
    typeName: e,
    fields: n.util.newFieldList(t),
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
      return n.util.equals(c, u, f);
    }
  }), c;
}
function rd(n, e, t, r) {
  return {
    syntax: n,
    json: e,
    bin: t,
    util: r,
    makeMessageType(i, o, c) {
      return nd(this, i, o, c);
    },
    makeEnum: td,
    makeEnumType: ff,
    getEnumType: ed
  };
}
var v;
(function(n) {
  n[n.DOUBLE = 1] = "DOUBLE", n[n.FLOAT = 2] = "FLOAT", n[n.INT64 = 3] = "INT64", n[n.UINT64 = 4] = "UINT64", n[n.INT32 = 5] = "INT32", n[n.FIXED64 = 6] = "FIXED64", n[n.FIXED32 = 7] = "FIXED32", n[n.BOOL = 8] = "BOOL", n[n.STRING = 9] = "STRING", n[n.BYTES = 12] = "BYTES", n[n.UINT32 = 13] = "UINT32", n[n.SFIXED32 = 15] = "SFIXED32", n[n.SFIXED64 = 16] = "SFIXED64", n[n.SINT32 = 17] = "SINT32", n[n.SINT64 = 18] = "SINT64";
})(v || (v = {}));
function id() {
  let n = 0, e = 0;
  for (let r = 0; r < 28; r += 7) {
    let i = this.buf[this.pos++];
    if (n |= (i & 127) << r, !(i & 128))
      return this.assertBounds(), [n, e];
  }
  let t = this.buf[this.pos++];
  if (n |= (t & 15) << 28, e = (t & 112) >> 4, !(t & 128))
    return this.assertBounds(), [n, e];
  for (let r = 3; r <= 31; r += 7) {
    let i = this.buf[this.pos++];
    if (e |= (i & 127) << r, !(i & 128))
      return this.assertBounds(), [n, e];
  }
  throw new Error("invalid varint");
}
function Lu(n, e, t) {
  for (let o = 0; o < 28; o = o + 7) {
    const c = n >>> o, u = !(!(c >>> 7) && e == 0), f = (u ? c | 128 : c) & 255;
    if (t.push(f), !u)
      return;
  }
  const r = n >>> 28 & 15 | (e & 7) << 4, i = !!(e >> 3);
  if (t.push((i ? r | 128 : r) & 255), !!i) {
    for (let o = 3; o < 31; o = o + 7) {
      const c = e >>> o, u = !!(c >>> 7), f = (u ? c | 128 : c) & 255;
      if (t.push(f), !u)
        return;
    }
    t.push(e >>> 31 & 1);
  }
}
const Wa = 4294967296;
function il(n) {
  const e = n[0] === "-";
  e && (n = n.slice(1));
  const t = 1e6;
  let r = 0, i = 0;
  function o(c, u) {
    const f = Number(n.slice(c, u));
    i *= t, r = r * t + f, r >= Wa && (i = i + (r / Wa | 0), r = r % Wa);
  }
  return o(-24, -18), o(-18, -12), o(-12, -6), o(-6), e ? hf(r, i) : xc(r, i);
}
function sd(n, e) {
  let t = xc(n, e);
  const r = t.hi & 2147483648;
  r && (t = hf(t.lo, t.hi));
  const i = df(t.lo, t.hi);
  return r ? "-" + i : i;
}
function df(n, e) {
  if ({ lo: n, hi: e } = od(n, e), e <= 2097151)
    return String(Wa * e + n);
  const t = n & 16777215, r = (n >>> 24 | e << 8) & 16777215, i = e >> 16 & 65535;
  let o = t + r * 6777216 + i * 6710656, c = r + i * 8147497, u = i * 2;
  const f = 1e7;
  return o >= f && (c += Math.floor(o / f), o %= f), c >= f && (u += Math.floor(c / f), c %= f), u.toString() + sl(c) + sl(o);
}
function od(n, e) {
  return { lo: n >>> 0, hi: e >>> 0 };
}
function xc(n, e) {
  return { lo: n | 0, hi: e | 0 };
}
function hf(n, e) {
  return e = ~e, n ? n = ~n + 1 : e += 1, xc(n, e);
}
const sl = (n) => {
  const e = String(n);
  return "0000000".slice(e.length) + e;
};
function ol(n, e) {
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
function ad() {
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
function ud() {
  const n = new DataView(new ArrayBuffer(8));
  if (typeof BigInt == "function" && typeof n.getBigInt64 == "function" && typeof n.getBigUint64 == "function" && typeof n.setBigInt64 == "function" && typeof n.setBigUint64 == "function" && (typeof process != "object" || typeof { NODE_ENV: '"production"', SDK_PATH: "https://sdk.getcode.com/v1/elements" } != "object" || { NODE_ENV: '"production"', SDK_PATH: "https://sdk.getcode.com/v1/elements" }.BUF_BIGINT_DISABLE !== "1")) {
    const i = BigInt("-9223372036854775808"), o = BigInt("9223372036854775807"), c = BigInt("0"), u = BigInt("18446744073709551615");
    return {
      zero: BigInt(0),
      supported: !0,
      parse(f) {
        const m = typeof f == "bigint" ? f : BigInt(f);
        if (m > o || m < i)
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
        return n.setBigInt64(0, this.parse(f), !0), {
          lo: n.getInt32(0, !0),
          hi: n.getInt32(4, !0)
        };
      },
      uEnc(f) {
        return n.setBigInt64(0, this.uParse(f), !0), {
          lo: n.getInt32(0, !0),
          hi: n.getInt32(4, !0)
        };
      },
      dec(f, m) {
        return n.setInt32(0, f, !0), n.setInt32(4, m, !0), n.getBigInt64(0, !0);
      },
      uDec(f, m) {
        return n.setInt32(0, f, !0), n.setInt32(4, m, !0), n.getBigUint64(0, !0);
      }
    };
  }
  const t = (i) => tt(/^-?[0-9]+$/.test(i), `int64 invalid: ${i}`), r = (i) => tt(/^[0-9]+$/.test(i), `uint64 invalid: ${i}`);
  return {
    zero: "0",
    supported: !1,
    parse(i) {
      return typeof i != "string" && (i = i.toString()), t(i), i;
    },
    uParse(i) {
      return typeof i != "string" && (i = i.toString()), r(i), i;
    },
    enc(i) {
      return typeof i != "string" && (i = i.toString()), t(i), il(i);
    },
    uEnc(i) {
      return typeof i != "string" && (i = i.toString()), r(i), il(i);
    },
    dec(i, o) {
      return sd(i, o);
    },
    uDec(i, o) {
      return df(i, o);
    }
  };
}
const oe = ud();
var Je;
(function(n) {
  n[n.Varint = 0] = "Varint", n[n.Bit64 = 1] = "Bit64", n[n.LengthDelimited = 2] = "LengthDelimited", n[n.StartGroup = 3] = "StartGroup", n[n.EndGroup = 4] = "EndGroup", n[n.Bit32 = 5] = "Bit32";
})(Je || (Je = {}));
class cd {
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
    let t = new Uint8Array(e), r = 0;
    for (let i = 0; i < this.chunks.length; i++)
      t.set(this.chunks[i], r), r += this.chunks[i].length;
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
    for (Ru(e); e > 127; )
      this.buf.push(e & 127 | 128), e = e >>> 7;
    return this.buf.push(e), this;
  }
  /**
   * Write a `int32` value, a signed 32 bit varint.
   */
  int32(e) {
    return za(e), ol(e, this.buf), this;
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
    uf(e);
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
    Ru(e);
    let t = new Uint8Array(4);
    return new DataView(t.buffer).setUint32(0, e, !0), this.raw(t);
  }
  /**
   * Write a `sfixed32` value, a signed, fixed-length 32-bit integer.
   */
  sfixed32(e) {
    za(e);
    let t = new Uint8Array(4);
    return new DataView(t.buffer).setInt32(0, e, !0), this.raw(t);
  }
  /**
   * Write a `sint32` value, a signed, zigzag-encoded 32-bit varint.
   */
  sint32(e) {
    return za(e), e = (e << 1 ^ e >> 31) >>> 0, ol(e, this.buf), this;
  }
  /**
   * Write a `fixed64` value, a signed, fixed-length 64-bit integer.
   */
  sfixed64(e) {
    let t = new Uint8Array(8), r = new DataView(t.buffer), i = oe.enc(e);
    return r.setInt32(0, i.lo, !0), r.setInt32(4, i.hi, !0), this.raw(t);
  }
  /**
   * Write a `fixed64` value, an unsigned, fixed-length 64 bit integer.
   */
  fixed64(e) {
    let t = new Uint8Array(8), r = new DataView(t.buffer), i = oe.uEnc(e);
    return r.setInt32(0, i.lo, !0), r.setInt32(4, i.hi, !0), this.raw(t);
  }
  /**
   * Write a `int64` value, a signed 64-bit varint.
   */
  int64(e) {
    let t = oe.enc(e);
    return Lu(t.lo, t.hi, this.buf), this;
  }
  /**
   * Write a `sint64` value, a signed, zig-zag-encoded 64-bit varint.
   */
  sint64(e) {
    let t = oe.enc(e), r = t.hi >> 31, i = t.lo << 1 ^ r, o = (t.hi << 1 | t.lo >>> 31) ^ r;
    return Lu(i, o, this.buf), this;
  }
  /**
   * Write a `uint64` value, an unsigned 64-bit varint.
   */
  uint64(e) {
    let t = oe.uEnc(e);
    return Lu(t.lo, t.hi, this.buf), this;
  }
}
class ld {
  constructor(e, t) {
    this.varint64 = id, this.uint32 = ad, this.buf = e, this.len = e.length, this.pos = 0, this.view = new DataView(e.buffer, e.byteOffset, e.byteLength), this.textDecoder = t ?? new TextDecoder();
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
      case Je.Varint:
        for (; this.buf[this.pos++] & 128; )
          ;
        break;
      case Je.Bit64:
        this.pos += 4;
      case Je.Bit32:
        this.pos += 4;
        break;
      case Je.LengthDelimited:
        let r = this.uint32();
        this.pos += r;
        break;
      case Je.StartGroup:
        let i;
        for (; (i = this.tag()[1]) !== Je.EndGroup; )
          this.skip(i);
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
    return oe.dec(...this.varint64());
  }
  /**
   * Read a `uint64` field, an unsigned 64-bit varint.
   */
  uint64() {
    return oe.uDec(...this.varint64());
  }
  /**
   * Read a `sint64` field, a signed, zig-zag-encoded 64-bit varint.
   */
  sint64() {
    let [e, t] = this.varint64(), r = -(e & 1);
    return e = (e >>> 1 | (t & 1) << 31) ^ r, t = t >>> 1 ^ r, oe.dec(e, t);
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
    return oe.uDec(this.sfixed32(), this.sfixed32());
  }
  /**
   * Read a `fixed64` field, a signed, fixed-length 64-bit integer.
   */
  sfixed64() {
    return oe.dec(this.sfixed32(), this.sfixed32());
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
function Xu(n, e) {
  return e instanceof N || !n.fieldWrapper ? e : n.fieldWrapper.wrapField(e);
}
v.DOUBLE, v.FLOAT, v.INT64, v.UINT64, v.INT32, v.UINT32, v.BOOL, v.STRING, v.BYTES;
function ss(n, e, t) {
  if (e === t)
    return !0;
  if (n == v.BYTES) {
    if (!(e instanceof Uint8Array) || !(t instanceof Uint8Array) || e.length !== t.length)
      return !1;
    for (let r = 0; r < e.length; r++)
      if (e[r] !== t[r])
        return !1;
    return !0;
  }
  switch (n) {
    case v.UINT64:
    case v.FIXED64:
    case v.INT64:
    case v.SFIXED64:
    case v.SINT64:
      return e == t;
  }
  return !1;
}
function Zu(n) {
  switch (n) {
    case v.BOOL:
      return !1;
    case v.UINT64:
    case v.FIXED64:
    case v.INT64:
    case v.SFIXED64:
    case v.SINT64:
      return oe.zero;
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
function pf(n, e) {
  const t = e === void 0;
  let r = Je.Varint, i = e === 0;
  switch (n) {
    case v.STRING:
      i = t || !e.length, r = Je.LengthDelimited;
      break;
    case v.BOOL:
      i = e === !1;
      break;
    case v.DOUBLE:
      r = Je.Bit64;
      break;
    case v.FLOAT:
      r = Je.Bit32;
      break;
    case v.INT64:
      i = t || e == 0;
      break;
    case v.UINT64:
      i = t || e == 0;
      break;
    case v.FIXED64:
      i = t || e == 0, r = Je.Bit64;
      break;
    case v.BYTES:
      i = t || !e.byteLength, r = Je.LengthDelimited;
      break;
    case v.FIXED32:
      r = Je.Bit32;
      break;
    case v.SFIXED32:
      r = Je.Bit32;
      break;
    case v.SFIXED64:
      i = t || e == 0, r = Je.Bit64;
      break;
    case v.SINT64:
      i = t || e == 0;
      break;
  }
  const o = v[n].toLowerCase();
  return [r, o, t || i];
}
const $s = Symbol("@bufbuild/protobuf/unknown-fields"), al = {
  readUnknownFields: !0,
  readerFactory: (n) => new ld(n)
}, ul = {
  writeUnknownFields: !0,
  writerFactory: () => new cd()
};
function fd(n) {
  return n ? Object.assign(Object.assign({}, al), n) : al;
}
function md(n) {
  return n ? Object.assign(Object.assign({}, ul), n) : ul;
}
function dd() {
  return {
    makeReadOptions: fd,
    makeWriteOptions: md,
    listUnknownFields(n) {
      var e;
      return (e = n[$s]) !== null && e !== void 0 ? e : [];
    },
    discardUnknownFields(n) {
      delete n[$s];
    },
    writeUnknownFields(n, e) {
      const r = n[$s];
      if (r)
        for (const i of r)
          e.tag(i.no, i.wireType).raw(i.data);
    },
    onUnknownField(n, e, t, r) {
      const i = n;
      Array.isArray(i[$s]) || (i[$s] = []), i[$s].push({ no: e, wireType: t, data: r });
    },
    readMessage(n, e, t, r) {
      const i = n.getType(), o = t === void 0 ? e.len : e.pos + t;
      for (; e.pos < o; ) {
        const [c, u] = e.tag(), f = i.fields.find(c);
        if (!f) {
          const y = e.skip(u);
          r.readUnknownFields && this.onUnknownField(n, c, u, y);
          continue;
        }
        let m = n, h = f.repeated, g = f.localName;
        switch (f.oneof && (m = m[f.oneof.localName], m.case != g && delete m.value, m.case = g, g = "value"), f.kind) {
          case "scalar":
          case "enum":
            const y = f.kind == "enum" ? v.INT32 : f.T;
            if (h) {
              let M = m[g];
              if (u == Je.LengthDelimited && y != v.STRING && y != v.BYTES) {
                let W = e.uint32() + e.pos;
                for (; e.pos < W; )
                  M.push(go(e, y));
              } else
                M.push(go(e, y));
            } else
              m[g] = go(e, y);
            break;
          case "message":
            const b = f.T;
            h ? m[g].push(Ya(e, new b(), r)) : m[g] instanceof N ? Ya(e, m[g], r) : (m[g] = Ya(e, new b(), r), b.fieldWrapper && !f.oneof && !f.repeated && (m[g] = b.fieldWrapper.unwrapField(m[g])));
            break;
          case "map":
            let [S, A] = hd(f, e, r);
            m[g][S] = A;
            break;
        }
      }
    }
  };
}
function Ya(n, e, t) {
  return e.getType().runtime.bin.readMessage(e, n, n.uint32(), t), e;
}
function hd(n, e, t) {
  const r = e.uint32(), i = e.pos + r;
  let o, c;
  for (; e.pos < i; ) {
    let [u] = e.tag();
    switch (u) {
      case 1:
        o = go(e, n.K);
        break;
      case 2:
        switch (n.V.kind) {
          case "scalar":
            c = go(e, n.V.T);
            break;
          case "enum":
            c = e.int32();
            break;
          case "message":
            c = Ya(e, new n.V.T(), t);
            break;
        }
        break;
    }
  }
  if (o === void 0) {
    let u = Zu(n.K);
    o = n.K == v.BOOL ? u.toString() : u;
  }
  if (typeof o != "string" && typeof o != "number" && (o = o.toString()), c === void 0)
    switch (n.V.kind) {
      case "scalar":
        c = Zu(n.V.T);
        break;
      case "enum":
        c = 0;
        break;
      case "message":
        c = new n.V.T();
        break;
    }
  return [o, c];
}
function go(n, e) {
  switch (e) {
    case v.STRING:
      return n.string();
    case v.BOOL:
      return n.bool();
    case v.DOUBLE:
      return n.double();
    case v.FLOAT:
      return n.float();
    case v.INT32:
      return n.int32();
    case v.INT64:
      return n.int64();
    case v.UINT64:
      return n.uint64();
    case v.FIXED64:
      return n.fixed64();
    case v.BYTES:
      return n.bytes();
    case v.FIXED32:
      return n.fixed32();
    case v.SFIXED32:
      return n.sfixed32();
    case v.SFIXED64:
      return n.sfixed64();
    case v.SINT64:
      return n.sint64();
    case v.UINT32:
      return n.uint32();
    case v.SINT32:
      return n.sint32();
  }
}
function pd(n, e, t, r, i) {
  n.tag(t.no, Je.LengthDelimited), n.fork();
  let o = r;
  switch (t.K) {
    case v.INT32:
    case v.FIXED32:
    case v.UINT32:
    case v.SFIXED32:
    case v.SINT32:
      o = Number.parseInt(r);
      break;
    case v.BOOL:
      tt(r == "true" || r == "false"), o = r == "true";
      break;
  }
  switch (wo(n, t.K, 1, o, !0), t.V.kind) {
    case "scalar":
      wo(n, t.V.T, 2, i, !0);
      break;
    case "enum":
      wo(n, v.INT32, 2, i, !0);
      break;
    case "message":
      Gu(n, e, t.V.T, 2, i);
      break;
  }
  n.join();
}
function Gu(n, e, t, r, i) {
  if (i !== void 0) {
    const o = Xu(t, i);
    n.tag(r, Je.LengthDelimited).bytes(o.toBinary(e));
  }
}
function wo(n, e, t, r, i) {
  let [o, c, u] = pf(e, r);
  (!u || i) && n.tag(t, o)[c](r);
}
function gd(n, e, t, r) {
  if (!r.length)
    return;
  n.tag(t, Je.LengthDelimited).fork();
  let [, i] = pf(e);
  for (let o = 0; o < r.length; o++)
    n[i](r[o]);
  n.join();
}
function wd() {
  return Object.assign(Object.assign({}, dd()), { writeMessage(n, e, t) {
    const r = n.getType();
    for (const i of r.fields.byNumber()) {
      let o, c = i.repeated, u = i.localName;
      if (i.oneof) {
        const f = n[i.oneof.localName];
        if (f.case !== u)
          continue;
        o = f.value;
      } else
        o = n[u];
      switch (i.kind) {
        case "scalar":
        case "enum":
          let f = i.kind == "enum" ? v.INT32 : i.T;
          if (c)
            if (i.packed)
              gd(e, f, i.no, o);
            else
              for (const m of o)
                wo(e, f, i.no, m, !0);
          else
            o !== void 0 && wo(e, f, i.no, o, !!i.oneof || i.opt);
          break;
        case "message":
          if (c)
            for (const m of o)
              Gu(e, t, i.T, i.no, m);
          else
            Gu(e, t, i.T, i.no, o);
          break;
        case "map":
          for (const [m, h] of Object.entries(o))
            pd(e, t, i, m, h);
          break;
      }
    }
    return t.writeUnknownFields && this.writeUnknownFields(n, e), e;
  } });
}
let un = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), gu = [];
for (let n = 0; n < un.length; n++)
  gu[un[n].charCodeAt(0)] = n;
gu["-".charCodeAt(0)] = un.indexOf("+");
gu["_".charCodeAt(0)] = un.indexOf("/");
const gf = {
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
    let t = new Uint8Array(e), r = 0, i = 0, o, c = 0;
    for (let u = 0; u < n.length; u++) {
      if (o = gu[n.charCodeAt(u)], o === void 0)
        switch (n[u]) {
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
          c = o, i = 1;
          break;
        case 1:
          t[r++] = c << 2 | (o & 48) >> 4, c = o, i = 2;
          break;
        case 2:
          t[r++] = (c & 15) << 4 | (o & 60) >> 2, c = o, i = 3;
          break;
        case 3:
          t[r++] = (c & 3) << 6 | o, i = 0;
          break;
      }
    }
    if (i == 1)
      throw Error("invalid base64 string.");
    return t.subarray(0, r);
  },
  /**
   * Encode a byte array to a base64 string.
   */
  enc(n) {
    let e = "", t = 0, r, i = 0;
    for (let o = 0; o < n.length; o++)
      switch (r = n[o], t) {
        case 0:
          e += un[r >> 2], i = (r & 3) << 4, t = 1;
          break;
        case 1:
          e += un[i | r >> 4], i = (r & 15) << 2, t = 2;
          break;
        case 2:
          e += un[i | r >> 6], e += un[r & 63], t = 0;
          break;
      }
    return t && (e += un[i], e += "=", t == 1 && (e += "=")), e;
  }
}, cl = {
  ignoreUnknownFields: !1
}, ll = {
  emitDefaultValues: !1,
  enumAsInteger: !1,
  useProtoFieldName: !1,
  prettySpaces: 0
};
function yd(n) {
  return n ? Object.assign(Object.assign({}, cl), n) : cl;
}
function Td(n) {
  return n ? Object.assign(Object.assign({}, ll), n) : ll;
}
function Ed(n) {
  const e = n(Nd, fl);
  return {
    makeReadOptions: yd,
    makeWriteOptions: Td,
    readMessage(t, r, i, o) {
      if (r == null || Array.isArray(r) || typeof r != "object")
        throw new Error(`cannot decode message ${t.typeName} from JSON: ${this.debug(r)}`);
      o = o ?? new t();
      const c = {};
      for (const [u, f] of Object.entries(r)) {
        const m = t.fields.findJsonName(u);
        if (!m) {
          if (!i.ignoreUnknownFields)
            throw new Error(`cannot decode message ${t.typeName} from JSON: key "${u}" is unknown`);
          continue;
        }
        let h = m.localName, g = o;
        if (m.oneof) {
          if (f === null && m.kind == "scalar")
            continue;
          const y = c[m.oneof.localName];
          if (y)
            throw new Error(`cannot decode message ${t.typeName} from JSON: multiple keys for oneof "${m.oneof.name}" present: "${y}", "${u}"`);
          c[m.oneof.localName] = u, g = g[m.oneof.localName] = { case: h }, h = "value";
        }
        if (m.repeated) {
          if (f === null)
            continue;
          if (!Array.isArray(f))
            throw new Error(`cannot decode field ${t.typeName}.${m.name} from JSON: ${this.debug(f)}`);
          const y = g[h];
          for (const b of f) {
            if (b === null)
              throw new Error(`cannot decode field ${t.typeName}.${m.name} from JSON: ${this.debug(b)}`);
            let S;
            switch (m.kind) {
              case "message":
                S = m.T.fromJson(b, i);
                break;
              case "enum":
                if (S = Du(m.T, b, i.ignoreUnknownFields), S === void 0)
                  continue;
                break;
              case "scalar":
                try {
                  S = ro(m.T, b);
                } catch (A) {
                  let M = `cannot decode field ${t.typeName}.${m.name} from JSON: ${this.debug(b)}`;
                  throw A instanceof Error && A.message.length > 0 && (M += `: ${A.message}`), new Error(M);
                }
                break;
            }
            y.push(S);
          }
        } else if (m.kind == "map") {
          if (f === null)
            continue;
          if (Array.isArray(f) || typeof f != "object")
            throw new Error(`cannot decode field ${t.typeName}.${m.name} from JSON: ${this.debug(f)}`);
          const y = g[h];
          for (const [b, S] of Object.entries(f)) {
            if (S === null)
              throw new Error(`cannot decode field ${t.typeName}.${m.name} from JSON: map value null`);
            let A;
            switch (m.V.kind) {
              case "message":
                A = m.V.T.fromJson(S, i);
                break;
              case "enum":
                if (A = Du(m.V.T, S, i.ignoreUnknownFields), A === void 0)
                  continue;
                break;
              case "scalar":
                try {
                  A = ro(m.V.T, S);
                } catch (M) {
                  let W = `cannot decode map value for field ${t.typeName}.${m.name} from JSON: ${this.debug(f)}`;
                  throw M instanceof Error && M.message.length > 0 && (W += `: ${M.message}`), new Error(W);
                }
                break;
            }
            try {
              y[ro(m.K, m.K == v.BOOL ? b == "true" ? !0 : b == "false" ? !1 : b : b).toString()] = A;
            } catch (M) {
              let W = `cannot decode map key for field ${t.typeName}.${m.name} from JSON: ${this.debug(f)}`;
              throw M instanceof Error && M.message.length > 0 && (W += `: ${M.message}`), new Error(W);
            }
          }
        } else
          switch (m.kind) {
            case "message":
              const y = m.T;
              if (f === null && y.typeName != "google.protobuf.Value") {
                if (m.oneof)
                  throw new Error(`cannot decode field ${t.typeName}.${m.name} from JSON: null is invalid for oneof field "${u}"`);
                continue;
              }
              g[h] instanceof N ? g[h].fromJson(f, i) : (g[h] = y.fromJson(f, i), y.fieldWrapper && !m.oneof && (g[h] = y.fieldWrapper.unwrapField(g[h])));
              break;
            case "enum":
              const b = Du(m.T, f, i.ignoreUnknownFields);
              b !== void 0 && (g[h] = b);
              break;
            case "scalar":
              try {
                g[h] = ro(m.T, f);
              } catch (S) {
                let A = `cannot decode field ${t.typeName}.${m.name} from JSON: ${this.debug(f)}`;
                throw S instanceof Error && S.message.length > 0 && (A += `: ${S.message}`), new Error(A);
              }
              break;
          }
      }
      return o;
    },
    writeMessage(t, r) {
      const i = t.getType(), o = {};
      let c;
      try {
        for (const u of i.fields.byMember()) {
          let f;
          if (u.kind == "oneof") {
            const m = t[u.localName];
            if (m.value === void 0)
              continue;
            if (c = u.findField(m.case), !c)
              throw "oneof case not found: " + m.case;
            f = e(c, m.value, r);
          } else
            c = u, f = e(c, t[c.localName], r);
          f !== void 0 && (o[r.useProtoFieldName ? c.name : c.jsonName] = f);
        }
      } catch (u) {
        const f = c ? `cannot encode field ${i.typeName}.${c.name} to JSON` : `cannot encode message ${i.typeName} to JSON`, m = u instanceof Error ? u.message : String(u);
        throw new Error(f + (m.length > 0 ? `: ${m}` : ""));
      }
      return o;
    },
    readScalar: ro,
    writeScalar: fl,
    debug: wf
  };
}
function wf(n) {
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
function ro(n, e) {
  switch (n) {
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
      const t = Number(e);
      if (Number.isNaN(t) || !Number.isFinite(t))
        break;
      return n == v.FLOAT && uf(t), t;
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
      return n == v.UINT32 ? Ru(r) : za(r), r;
    case v.INT64:
    case v.SFIXED64:
    case v.SINT64:
      if (e === null)
        return oe.zero;
      if (typeof e != "number" && typeof e != "string")
        break;
      return oe.parse(e);
    case v.FIXED64:
    case v.UINT64:
      if (e === null)
        return oe.zero;
      if (typeof e != "number" && typeof e != "string")
        break;
      return oe.uParse(e);
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
      return gf.dec(e);
  }
  throw new Error();
}
function Du(n, e, t) {
  if (e === null)
    return 0;
  switch (typeof e) {
    case "number":
      if (Number.isInteger(e))
        return e;
      break;
    case "string":
      const r = n.findName(e);
      if (r || t)
        return r == null ? void 0 : r.no;
      break;
  }
  throw new Error(`cannot decode enum ${n.typeName} from JSON: ${wf(e)}`);
}
function Nd(n, e, t, r) {
  var i;
  if (e === void 0)
    return e;
  if (e === 0 && !t)
    return;
  if (r)
    return e;
  if (n.typeName == "google.protobuf.NullValue")
    return null;
  const o = n.findNumber(e);
  return (i = o == null ? void 0 : o.name) !== null && i !== void 0 ? i : e;
}
function fl(n, e, t) {
  if (e !== void 0)
    switch (n) {
      case v.INT32:
      case v.SFIXED32:
      case v.SINT32:
      case v.FIXED32:
      case v.UINT32:
        return tt(typeof e == "number"), e != 0 || t ? e : void 0;
      case v.FLOAT:
      case v.DOUBLE:
        return tt(typeof e == "number"), Number.isNaN(e) ? "NaN" : e === Number.POSITIVE_INFINITY ? "Infinity" : e === Number.NEGATIVE_INFINITY ? "-Infinity" : e !== 0 || t ? e : void 0;
      case v.STRING:
        return tt(typeof e == "string"), e.length > 0 || t ? e : void 0;
      case v.BOOL:
        return tt(typeof e == "boolean"), e || t ? e : void 0;
      case v.UINT64:
      case v.FIXED64:
      case v.INT64:
      case v.SFIXED64:
      case v.SINT64:
        return tt(typeof e == "bigint" || typeof e == "string" || typeof e == "number"), t || e != 0 ? e.toString(10) : void 0;
      case v.BYTES:
        return tt(e instanceof Uint8Array), t || e.byteLength > 0 ? gf.enc(e) : void 0;
    }
}
function bd() {
  return Ed((n, e) => function(r, i, o) {
    if (r.kind == "map") {
      const c = {};
      switch (r.V.kind) {
        case "scalar":
          for (const [f, m] of Object.entries(i)) {
            const h = e(r.V.T, m, !0);
            tt(h !== void 0), c[f.toString()] = h;
          }
          break;
        case "message":
          for (const [f, m] of Object.entries(i))
            c[f.toString()] = m.toJson(o);
          break;
        case "enum":
          const u = r.V.T;
          for (const [f, m] of Object.entries(i)) {
            tt(m === void 0 || typeof m == "number");
            const h = n(u, m, !0, o.enumAsInteger);
            tt(h !== void 0), c[f.toString()] = h;
          }
          break;
      }
      return o.emitDefaultValues || Object.keys(c).length > 0 ? c : void 0;
    } else if (r.repeated) {
      const c = [];
      switch (r.kind) {
        case "scalar":
          for (let u = 0; u < i.length; u++)
            c.push(e(r.T, i[u], !0));
          break;
        case "enum":
          for (let u = 0; u < i.length; u++)
            c.push(n(r.T, i[u], !0, o.enumAsInteger));
          break;
        case "message":
          for (let u = 0; u < i.length; u++)
            c.push(Xu(r.T, i[u]).toJson(o));
          break;
      }
      return o.emitDefaultValues || c.length > 0 ? c : void 0;
    } else
      switch (r.kind) {
        case "scalar":
          return e(r.T, i, !!r.oneof || r.opt || o.emitDefaultValues);
        case "enum":
          return n(r.T, i, !!r.oneof || r.opt || o.emitDefaultValues, o.enumAsInteger);
        case "message":
          return i !== void 0 ? Xu(r.T, i).toJson(o) : void 0;
      }
  });
}
function xd() {
  return {
    setEnumType: lf,
    initPartial(n, e) {
      if (n === void 0)
        return;
      const t = e.getType();
      for (const r of t.fields.byMember()) {
        const i = r.localName, o = e, c = n;
        if (c[i] !== void 0)
          switch (r.kind) {
            case "oneof":
              const u = c[i].case;
              if (u === void 0)
                continue;
              const f = r.findField(u);
              let m = c[i].value;
              f && f.kind == "message" && !(m instanceof f.T) ? m = new f.T(m) : f && f.kind === "scalar" && f.T === v.BYTES && (m = io(m)), o[i] = { case: u, value: m };
              break;
            case "scalar":
            case "enum":
              let h = c[i];
              r.T === v.BYTES && (h = r.repeated ? h.map(io) : io(h)), o[i] = h;
              break;
            case "map":
              switch (r.V.kind) {
                case "scalar":
                case "enum":
                  if (r.V.T === v.BYTES)
                    for (const [b, S] of Object.entries(c[i]))
                      o[i][b] = io(S);
                  else
                    Object.assign(o[i], c[i]);
                  break;
                case "message":
                  const y = r.V.T;
                  for (const b of Object.keys(c[i])) {
                    let S = c[i][b];
                    y.fieldWrapper || (S = new y(S)), o[i][b] = S;
                  }
                  break;
              }
              break;
            case "message":
              const g = r.T;
              if (r.repeated)
                o[i] = c[i].map((y) => y instanceof g ? y : new g(y));
              else if (c[i] !== void 0) {
                const y = c[i];
                g.fieldWrapper ? /* We can't use BytesValue.typeName as that will create a circular import */ g.typeName === "google.protobuf.BytesValue" ? o[i] = io(y) : o[i] = y : o[i] = y instanceof g ? y : new g(y);
              }
              break;
          }
      }
    },
    equals(n, e, t) {
      return e === t ? !0 : !e || !t ? !1 : n.fields.byMember().every((r) => {
        const i = e[r.localName], o = t[r.localName];
        if (r.repeated) {
          if (i.length !== o.length)
            return !1;
          switch (r.kind) {
            case "message":
              return i.every((c, u) => r.T.equals(c, o[u]));
            case "scalar":
              return i.every((c, u) => ss(r.T, c, o[u]));
            case "enum":
              return i.every((c, u) => ss(v.INT32, c, o[u]));
          }
          throw new Error(`repeated cannot contain ${r.kind}`);
        }
        switch (r.kind) {
          case "message":
            return r.T.equals(i, o);
          case "enum":
            return ss(v.INT32, i, o);
          case "scalar":
            return ss(r.T, i, o);
          case "oneof":
            if (i.case !== o.case)
              return !1;
            const c = r.findField(i.case);
            if (c === void 0)
              return !0;
            switch (c.kind) {
              case "message":
                return c.T.equals(i.value, o.value);
              case "enum":
                return ss(v.INT32, i.value, o.value);
              case "scalar":
                return ss(c.T, i.value, o.value);
            }
            throw new Error(`oneof cannot contain ${c.kind}`);
          case "map":
            const u = Object.keys(i).concat(Object.keys(o));
            switch (r.V.kind) {
              case "message":
                const f = r.V.T;
                return u.every((h) => f.equals(i[h], o[h]));
              case "enum":
                return u.every((h) => ss(v.INT32, i[h], o[h]));
              case "scalar":
                const m = r.V.T;
                return u.every((h) => ss(m, i[h], o[h]));
            }
            break;
        }
      });
    },
    clone(n) {
      const e = n.getType(), t = new e(), r = t;
      for (const i of e.fields.byMember()) {
        const o = n[i.localName];
        let c;
        if (i.repeated)
          c = o.map(Ca);
        else if (i.kind == "map") {
          c = r[i.localName];
          for (const [u, f] of Object.entries(o))
            c[u] = Ca(f);
        } else
          i.kind == "oneof" ? c = i.findField(o.case) ? { case: o.case, value: Ca(o.value) } : { case: void 0 } : c = Ca(o);
        r[i.localName] = c;
      }
      return t;
    }
  };
}
function Ca(n) {
  if (n === void 0)
    return n;
  if (n instanceof N)
    return n.clone();
  if (n instanceof Uint8Array) {
    const e = new Uint8Array(n.byteLength);
    return e.set(n), e;
  }
  return n;
}
function io(n) {
  return n instanceof Uint8Array ? n : new Uint8Array(n);
}
class Bd {
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
function yf(n, e) {
  const t = Tf(n);
  return e ? t : Jd(vd(t));
}
function kd(n) {
  return yf(n, !1);
}
const Od = Tf;
function Tf(n) {
  let e = !1;
  const t = [];
  for (let r = 0; r < n.length; r++) {
    let i = n.charAt(r);
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
        t.push(i), e = !1;
        break;
      default:
        e && (e = !1, i = i.toUpperCase()), t.push(i);
        break;
    }
  }
  return t.join("");
}
const Id = /* @__PURE__ */ new Set([
  // names reserved by JavaScript
  "constructor",
  "toString",
  "toJSON",
  "valueOf"
]), Sd = /* @__PURE__ */ new Set([
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
]), Ef = (n) => `${n}$`, vd = (n) => Sd.has(n) ? Ef(n) : n, Jd = (n) => Id.has(n) ? Ef(n) : n;
class Fd {
  constructor(e) {
    this.kind = "oneof", this.repeated = !1, this.packed = !1, this.opt = !1, this.default = void 0, this.fields = [], this.name = e, this.localName = kd(e);
  }
  addField(e) {
    tt(e.oneof === this, `field ${e.name} not one of ${this.name}`), this.fields.push(e);
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
const s = rd("proto3", bd(), wd(), Object.assign(Object.assign({}, xd()), {
  newFieldList(n) {
    return new Bd(n, Ad);
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
          r[t] = Zu(e.T);
          break;
      }
    }
  }
}));
function Ad(n) {
  var e, t, r;
  const i = [];
  let o;
  for (const c of typeof n == "function" ? n() : n) {
    const u = c;
    if (u.localName = yf(c.name, c.oneof !== void 0), u.jsonName = (e = c.jsonName) !== null && e !== void 0 ? e : Od(c.name), u.repeated = (t = c.repeated) !== null && t !== void 0 ? t : !1, u.packed = (r = c.packed) !== null && r !== void 0 ? r : c.kind == "enum" || c.kind == "scalar" && c.T != v.BYTES && c.T != v.STRING, c.oneof !== void 0) {
      const f = typeof c.oneof == "string" ? c.oneof : c.oneof.name;
      (!o || o.name != f) && (o = new Fd(f)), u.oneof = o, o.addField(u);
    }
    i.push(u);
  }
  return i;
}
var ne;
(function(n) {
  n[n.Unary = 0] = "Unary", n[n.ServerStreaming = 1] = "ServerStreaming", n[n.ClientStreaming = 2] = "ClientStreaming", n[n.BiDiStreaming = 3] = "BiDiStreaming";
})(ne || (ne = {}));
var ml;
(function(n) {
  n[n.NoSideEffects = 1] = "NoSideEffects", n[n.Idempotent = 2] = "Idempotent";
})(ml || (ml = {}));
class Fe extends N {
  constructor(e) {
    super(), this.seconds = oe.zero, this.nanos = 0, s.util.initPartial(e, this);
  }
  fromJson(e, t) {
    if (typeof e != "string")
      throw new Error(`cannot decode google.protobuf.Timestamp from JSON: ${s.json.debug(e)}`);
    const r = e.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
    if (!r)
      throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
    const i = Date.parse(r[1] + "-" + r[2] + "-" + r[3] + "T" + r[4] + ":" + r[5] + ":" + r[6] + (r[8] ? r[8] : "Z"));
    if (Number.isNaN(i))
      throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
    if (i < Date.parse("0001-01-01T00:00:00Z") || i > Date.parse("9999-12-31T23:59:59Z"))
      throw new Error("cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
    return this.seconds = oe.parse(i / 1e3), this.nanos = 0, r[7] && (this.nanos = parseInt("1" + r[7] + "0".repeat(9 - r[7].length)) - 1e9), this;
  }
  toJson(e) {
    const t = Number(this.seconds) * 1e3;
    if (t < Date.parse("0001-01-01T00:00:00Z") || t > Date.parse("9999-12-31T23:59:59Z"))
      throw new Error("cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
    if (this.nanos < 0)
      throw new Error("cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative");
    let r = "Z";
    if (this.nanos > 0) {
      const i = (this.nanos + 1e9).toString().substring(1);
      i.substring(3) === "000000" ? r = "." + i.substring(0, 3) + "Z" : i.substring(6) === "000" ? r = "." + i.substring(0, 6) + "Z" : r = "." + i + "Z";
    }
    return new Date(t).toISOString().replace(".000Z", r);
  }
  toDate() {
    return new Date(Number(this.seconds) * 1e3 + Math.ceil(this.nanos / 1e6));
  }
  static now() {
    return Fe.fromDate(/* @__PURE__ */ new Date());
  }
  static fromDate(e) {
    const t = e.getTime();
    return new Fe({
      seconds: oe.parse(Math.floor(t / 1e3)),
      nanos: t % 1e3 * 1e6
    });
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
    return s.util.equals(Fe, e, t);
  }
}
Fe.runtime = s;
Fe.typeName = "google.protobuf.Timestamp";
Fe.fields = s.util.newFieldList(() => [
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
class ln extends N {
  constructor(e) {
    super(), this.seconds = oe.zero, this.nanos = 0, s.util.initPartial(e, this);
  }
  fromJson(e, t) {
    if (typeof e != "string")
      throw new Error(`cannot decode google.protobuf.Duration from JSON: ${s.json.debug(e)}`);
    const r = e.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
    if (r === null)
      throw new Error(`cannot decode google.protobuf.Duration from JSON: ${s.json.debug(e)}`);
    const i = Number(r[1]);
    if (i > 315576e6 || i < -315576e6)
      throw new Error(`cannot decode google.protobuf.Duration from JSON: ${s.json.debug(e)}`);
    if (this.seconds = oe.parse(i), typeof r[2] == "string") {
      const o = r[2] + "0".repeat(9 - r[2].length);
      this.nanos = parseInt(o), (i < 0 || Object.is(i, -0)) && (this.nanos = -this.nanos);
    }
    return this;
  }
  toJson(e) {
    if (Number(this.seconds) > 315576e6 || Number(this.seconds) < -315576e6)
      throw new Error("cannot encode google.protobuf.Duration to JSON: value out of range");
    let t = this.seconds.toString();
    if (this.nanos !== 0) {
      let r = Math.abs(this.nanos).toString();
      r = "0".repeat(9 - r.length) + r, r.substring(3) === "000000" ? r = r.substring(0, 3) : r.substring(6) === "000" && (r = r.substring(0, 6)), t += "." + r, this.nanos < 0 && this.seconds === oe.zero && (t = "-" + t);
    }
    return t + "s";
  }
  static fromBinary(e, t) {
    return new ln().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ln().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ln().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(ln, e, t);
  }
}
ln.runtime = s;
ln.typeName = "google.protobuf.Duration";
ln.fields = s.util.newFieldList(() => [
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
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.PRIMARY = 1] = "PRIMARY", n[n.TEMPORARY_INCOMING = 2] = "TEMPORARY_INCOMING", n[n.TEMPORARY_OUTGOING = 3] = "TEMPORARY_OUTGOING", n[n.BUCKET_1_KIN = 4] = "BUCKET_1_KIN", n[n.BUCKET_10_KIN = 5] = "BUCKET_10_KIN", n[n.BUCKET_100_KIN = 6] = "BUCKET_100_KIN", n[n.BUCKET_1_000_KIN = 7] = "BUCKET_1_000_KIN", n[n.BUCKET_10_000_KIN = 8] = "BUCKET_10_000_KIN", n[n.BUCKET_100_000_KIN = 9] = "BUCKET_100_000_KIN", n[n.BUCKET_1_000_000_KIN = 10] = "BUCKET_1_000_000_KIN", n[n.LEGACY_PRIMARY_2022 = 11] = "LEGACY_PRIMARY_2022", n[n.REMOTE_SEND_GIFT_CARD = 12] = "REMOTE_SEND_GIFT_CARD", n[n.RELATIONSHIP = 13] = "RELATIONSHIP", n[n.ASSOCIATED_TOKEN_ACCOUNT = 14] = "ASSOCIATED_TOKEN_ACCOUNT";
})(lt || (lt = {}));
s.util.setEnumType(lt, "code.common.v1.AccountType", [
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
  { no: 14, name: "ASSOCIATED_TOKEN_ACCOUNT" }
]);
class L extends N {
  constructor(e) {
    super(), this.value = new Uint8Array(0), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new L().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new L().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new L().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(L, e, t);
  }
}
L.runtime = s;
L.typeName = "code.common.v1.SolanaAccountId";
L.fields = s.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class fn extends N {
  constructor(e) {
    super(), this.isSigner = !1, this.isWritable = !1, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new fn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new fn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new fn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(fn, e, t);
  }
}
fn.runtime = s;
fn.typeName = "code.common.v1.InstructionAccount";
fn.fields = s.util.newFieldList(() => [
  { no: 1, name: "account", kind: "message", T: L },
  { no: 2, name: "is_signer", kind: "scalar", T: 8 },
  { no: 3, name: "is_writable", kind: "scalar", T: 8 }
]);
class Ct extends N {
  constructor(e) {
    super(), this.value = new Uint8Array(0), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Ct().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ct().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ct().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Ct, e, t);
  }
}
Ct.runtime = s;
Ct.typeName = "code.common.v1.Transaction";
Ct.fields = s.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class qt extends N {
  constructor(e) {
    super(), this.value = new Uint8Array(0), s.util.initPartial(e, this);
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
    return s.util.equals(qt, e, t);
  }
}
qt.runtime = s;
qt.typeName = "code.common.v1.Blockhash";
qt.fields = s.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class G extends N {
  constructor(e) {
    super(), this.value = new Uint8Array(0), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new G().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new G().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new G().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(G, e, t);
  }
}
G.runtime = s;
G.typeName = "code.common.v1.Signature";
G.fields = s.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class Ke extends N {
  constructor(e) {
    super(), this.value = new Uint8Array(0), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Ke().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Ke().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Ke().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Ke, e, t);
  }
}
Ke.runtime = s;
Ke.typeName = "code.common.v1.IntentId";
Ke.fields = s.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class dt extends N {
  constructor(e) {
    super(), this.value = new Uint8Array(0), s.util.initPartial(e, this);
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
    return s.util.equals(dt, e, t);
  }
}
dt.runtime = s;
dt.typeName = "code.common.v1.UserId";
dt.fields = s.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class nt extends N {
  constructor(e) {
    super(), this.value = new Uint8Array(0), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new nt().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new nt().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new nt().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(nt, e, t);
  }
}
nt.runtime = s;
nt.typeName = "code.common.v1.DataContainerId";
nt.fields = s.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class Kt extends N {
  constructor(e) {
    super(), this.value = "", s.util.initPartial(e, this);
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
    return s.util.equals(Kt, e, t);
  }
}
Kt.runtime = s;
Kt.typeName = "code.common.v1.DeviceToken";
Kt.fields = s.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 9 }
]);
class Et extends N {
  constructor(e) {
    super(), this.value = "", s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Et().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Et().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Et().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Et, e, t);
  }
}
Et.runtime = s;
Et.typeName = "code.common.v1.AppInstallId";
Et.fields = s.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 9 }
]);
class Pe extends N {
  constructor(e) {
    super(), this.value = "", s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Pe().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Pe().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Pe().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Pe, e, t);
  }
}
Pe.runtime = s;
Pe.typeName = "code.common.v1.PhoneNumber";
Pe.fields = s.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 9 }
]);
class at extends N {
  constructor(e) {
    super(), this.value = "", s.util.initPartial(e, this);
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
    return s.util.equals(at, e, t);
  }
}
at.runtime = s;
at.typeName = "code.common.v1.Domain";
at.fields = s.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 9 }
]);
class Pt extends N {
  constructor(e) {
    super(), this.type = { case: void 0 }, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Pt().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Pt().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Pt().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Pt, e, t);
  }
}
Pt.runtime = s;
Pt.typeName = "code.common.v1.Relationship";
Pt.fields = s.util.newFieldList(() => [
  { no: 1, name: "domain", kind: "message", T: at, oneof: "type" }
]);
let ts = class uo extends N {
  constructor(e) {
    super(), this.value = new Uint8Array(0), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new uo().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new uo().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new uo().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(uo, e, t);
  }
};
ts.runtime = s;
ts.typeName = "code.common.v1.Hash";
ts.fields = s.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class mn extends N {
  constructor(e) {
    super(), this.version = "", this.service = "", this.method = "", this.body = new Uint8Array(0), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new mn().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new mn().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new mn().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(mn, e, t);
  }
}
mn.runtime = s;
mn.typeName = "code.common.v1.Request";
mn.fields = s.util.newFieldList(() => [
  { no: 1, name: "version", kind: "scalar", T: 9 },
  { no: 2, name: "service", kind: "scalar", T: 9 },
  { no: 3, name: "method", kind: "scalar", T: 9 },
  { no: 4, name: "body", kind: "scalar", T: 12 }
]);
class dn extends N {
  constructor(e) {
    super(), this.result = Eo.OK, this.body = new Uint8Array(0), this.message = "", s.util.initPartial(e, this);
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
    return s.util.equals(dn, e, t);
  }
}
dn.runtime = s;
dn.typeName = "code.common.v1.Response";
dn.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(Eo) },
  { no: 2, name: "body", kind: "scalar", T: 12 },
  { no: 3, name: "message", kind: "scalar", T: 9 }
]);
var Eo;
(function(n) {
  n[n.OK = 0] = "OK", n[n.ERROR = 1] = "ERROR";
})(Eo || (Eo = {}));
s.util.setEnumType(Eo, "code.common.v1.Response.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "ERROR" }
]);
var nn;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.GIVE_FIRST_KIN = 1] = "GIVE_FIRST_KIN", n[n.GET_FIRST_KIN = 2] = "GET_FIRST_KIN";
})(nn || (nn = {}));
s.util.setEnumType(nn, "code.transaction.v2.AirdropType", [
  { no: 0, name: "UNKNOWN" },
  { no: 1, name: "GIVE_FIRST_KIN" },
  { no: 2, name: "GET_FIRST_KIN" }
]);
class hn extends N {
  constructor(e) {
    super(), this.request = { case: void 0 }, s.util.initPartial(e, this);
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
    return s.util.equals(hn, e, t);
  }
}
hn.runtime = s;
hn.typeName = "code.transaction.v2.SubmitIntentRequest";
hn.fields = s.util.newFieldList(() => [
  { no: 1, name: "submit_actions", kind: "message", T: pn, oneof: "request" },
  { no: 2, name: "submit_signatures", kind: "message", T: gn, oneof: "request" }
]);
class pn extends N {
  constructor(e) {
    super(), this.actions = [], s.util.initPartial(e, this);
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
    return s.util.equals(pn, e, t);
  }
}
pn.runtime = s;
pn.typeName = "code.transaction.v2.SubmitIntentRequest.SubmitActions";
pn.fields = s.util.newFieldList(() => [
  { no: 1, name: "id", kind: "message", T: Ke },
  { no: 2, name: "owner", kind: "message", T: L },
  { no: 3, name: "metadata", kind: "message", T: Nt },
  { no: 4, name: "actions", kind: "message", T: Xn, repeated: !0 },
  { no: 5, name: "signature", kind: "message", T: G },
  { no: 6, name: "device_token", kind: "message", T: Kt }
]);
class gn extends N {
  constructor(e) {
    super(), this.signatures = [], s.util.initPartial(e, this);
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
    return s.util.equals(gn, e, t);
  }
}
gn.runtime = s;
gn.typeName = "code.transaction.v2.SubmitIntentRequest.SubmitSignatures";
gn.fields = s.util.newFieldList(() => [
  { no: 1, name: "signatures", kind: "message", T: G, repeated: !0 }
]);
class wn extends N {
  constructor(e) {
    super(), this.response = { case: void 0 }, s.util.initPartial(e, this);
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
    return s.util.equals(wn, e, t);
  }
}
wn.runtime = s;
wn.typeName = "code.transaction.v2.SubmitIntentResponse";
wn.fields = s.util.newFieldList(() => [
  { no: 1, name: "server_parameters", kind: "message", T: yn, oneof: "response" },
  { no: 2, name: "success", kind: "message", T: Tn, oneof: "response" },
  { no: 3, name: "error", kind: "message", T: En, oneof: "response" }
]);
class yn extends N {
  constructor(e) {
    super(), this.serverParameters = [], s.util.initPartial(e, this);
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
    return s.util.equals(yn, e, t);
  }
}
yn.runtime = s;
yn.typeName = "code.transaction.v2.SubmitIntentResponse.ServerParameters";
yn.fields = s.util.newFieldList(() => [
  { no: 1, name: "server_parameters", kind: "message", T: or, repeated: !0 }
]);
class Tn extends N {
  constructor(e) {
    super(), this.code = No.OK, s.util.initPartial(e, this);
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
    return s.util.equals(Tn, e, t);
  }
}
Tn.runtime = s;
Tn.typeName = "code.transaction.v2.SubmitIntentResponse.Success";
Tn.fields = s.util.newFieldList(() => [
  { no: 1, name: "code", kind: "enum", T: s.getEnumType(No) }
]);
var No;
(function(n) {
  n[n.OK = 0] = "OK";
})(No || (No = {}));
s.util.setEnumType(No, "code.transaction.v2.SubmitIntentResponse.Success.Code", [
  { no: 0, name: "OK" }
]);
class En extends N {
  constructor(e) {
    super(), this.code = bo.DENIED, this.errorDetails = [], s.util.initPartial(e, this);
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
    return s.util.equals(En, e, t);
  }
}
En.runtime = s;
En.typeName = "code.transaction.v2.SubmitIntentResponse.Error";
En.fields = s.util.newFieldList(() => [
  { no: 1, name: "code", kind: "enum", T: s.getEnumType(bo) },
  { no: 2, name: "error_details", kind: "message", T: $t, repeated: !0 }
]);
var bo;
(function(n) {
  n[n.DENIED = 0] = "DENIED", n[n.INVALID_INTENT = 1] = "INVALID_INTENT", n[n.SIGNATURE_ERROR = 2] = "SIGNATURE_ERROR", n[n.STALE_STATE = 3] = "STALE_STATE";
})(bo || (bo = {}));
s.util.setEnumType(bo, "code.transaction.v2.SubmitIntentResponse.Error.Code", [
  { no: 0, name: "DENIED" },
  { no: 1, name: "INVALID_INTENT" },
  { no: 2, name: "SIGNATURE_ERROR" },
  { no: 3, name: "STALE_STATE" }
]);
class Nn extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
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
    return s.util.equals(Nn, e, t);
  }
}
Nn.runtime = s;
Nn.typeName = "code.transaction.v2.GetIntentMetadataRequest";
Nn.fields = s.util.newFieldList(() => [
  { no: 1, name: "intent_id", kind: "message", T: Ke },
  { no: 2, name: "owner", kind: "message", T: L },
  { no: 3, name: "signature", kind: "message", T: G }
]);
class bn extends N {
  constructor(e) {
    super(), this.result = xo.OK, s.util.initPartial(e, this);
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
    return s.util.equals(bn, e, t);
  }
}
bn.runtime = s;
bn.typeName = "code.transaction.v2.GetIntentMetadataResponse";
bn.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(xo) },
  { no: 2, name: "metadata", kind: "message", T: Nt }
]);
var xo;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND";
})(xo || (xo = {}));
s.util.setEnumType(xo, "code.transaction.v2.GetIntentMetadataResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" }
]);
class xn extends N {
  constructor(e) {
    super(), this.actionId = 0, s.util.initPartial(e, this);
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
    return s.util.equals(xn, e, t);
  }
}
xn.runtime = s;
xn.typeName = "code.transaction.v2.GetPrivacyUpgradeStatusRequest";
xn.fields = s.util.newFieldList(() => [
  { no: 1, name: "intent_id", kind: "message", T: Ke },
  { no: 2, name: "action_id", kind: "scalar", T: 13 }
]);
class Bn extends N {
  constructor(e) {
    super(), this.result = Bo.OK, this.status = ko.UNKNOWN, s.util.initPartial(e, this);
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
    return s.util.equals(Bn, e, t);
  }
}
Bn.runtime = s;
Bn.typeName = "code.transaction.v2.GetPrivacyUpgradeStatusResponse";
Bn.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(Bo) },
  { no: 2, name: "status", kind: "enum", T: s.getEnumType(ko) }
]);
var Bo;
(function(n) {
  n[n.OK = 0] = "OK", n[n.INTENT_NOT_FOUND = 1] = "INTENT_NOT_FOUND", n[n.ACTION_NOT_FOUND = 2] = "ACTION_NOT_FOUND", n[n.INVALID_ACTION = 3] = "INVALID_ACTION";
})(Bo || (Bo = {}));
s.util.setEnumType(Bo, "code.transaction.v2.GetPrivacyUpgradeStatusResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INTENT_NOT_FOUND" },
  { no: 2, name: "ACTION_NOT_FOUND" },
  { no: 3, name: "INVALID_ACTION" }
]);
var ko;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.TEMPORARY_TRANSACTION_FINALIZED = 1] = "TEMPORARY_TRANSACTION_FINALIZED", n[n.WAITING_FOR_NEXT_BLOCK = 2] = "WAITING_FOR_NEXT_BLOCK", n[n.READY_FOR_UPGRADE = 3] = "READY_FOR_UPGRADE", n[n.ALREADY_UPGRADED = 4] = "ALREADY_UPGRADED";
})(ko || (ko = {}));
s.util.setEnumType(ko, "code.transaction.v2.GetPrivacyUpgradeStatusResponse.Status", [
  { no: 0, name: "UNKNOWN" },
  { no: 1, name: "TEMPORARY_TRANSACTION_FINALIZED" },
  { no: 2, name: "WAITING_FOR_NEXT_BLOCK" },
  { no: 3, name: "READY_FOR_UPGRADE" },
  { no: 4, name: "ALREADY_UPGRADED" }
]);
class kn extends N {
  constructor(e) {
    super(), this.limit = 0, s.util.initPartial(e, this);
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
    return s.util.equals(kn, e, t);
  }
}
kn.runtime = s;
kn.typeName = "code.transaction.v2.GetPrioritizedIntentsForPrivacyUpgradeRequest";
kn.fields = s.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: L },
  { no: 2, name: "limit", kind: "scalar", T: 13 },
  { no: 3, name: "signature", kind: "message", T: G }
]);
class On extends N {
  constructor(e) {
    super(), this.result = Oo.OK, this.items = [], s.util.initPartial(e, this);
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
    return s.util.equals(On, e, t);
  }
}
On.runtime = s;
On.typeName = "code.transaction.v2.GetPrioritizedIntentsForPrivacyUpgradeResponse";
On.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(Oo) },
  { no: 2, name: "items", kind: "message", T: Tr, repeated: !0 }
]);
var Oo;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND";
})(Oo || (Oo = {}));
s.util.setEnumType(Oo, "code.transaction.v2.GetPrioritizedIntentsForPrivacyUpgradeResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" }
]);
class In extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
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
    return s.util.equals(In, e, t);
  }
}
In.runtime = s;
In.typeName = "code.transaction.v2.GetLimitsRequest";
In.fields = s.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: L },
  { no: 2, name: "signature", kind: "message", T: G },
  { no: 3, name: "consumed_since", kind: "message", T: Fe }
]);
class Sn extends N {
  constructor(e) {
    super(), this.result = Io.OK, this.remainingSendLimitsByCurrency = {}, this.microPaymentLimitsByCurrency = {}, s.util.initPartial(e, this);
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
    return s.util.equals(Sn, e, t);
  }
}
Sn.runtime = s;
Sn.typeName = "code.transaction.v2.GetLimitsResponse";
Sn.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(Io) },
  { no: 2, name: "remaining_send_limits_by_currency", kind: "map", K: 9, V: { kind: "message", T: br } },
  { no: 3, name: "deposit_limit", kind: "message", T: xr },
  { no: 4, name: "micro_payment_limits_by_currency", kind: "map", K: 9, V: { kind: "message", T: Br } }
]);
var Io;
(function(n) {
  n[n.OK = 0] = "OK";
})(Io || (Io = {}));
s.util.setEnumType(Io, "code.transaction.v2.GetLimitsResponse.Result", [
  { no: 0, name: "OK" }
]);
class vn extends N {
  constructor(e) {
    super(), this.pageSize = 0, this.direction = So.ASC, s.util.initPartial(e, this);
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
    return s.util.equals(vn, e, t);
  }
}
vn.runtime = s;
vn.typeName = "code.transaction.v2.GetPaymentHistoryRequest";
vn.fields = s.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: L },
  { no: 2, name: "cursor", kind: "message", T: va },
  { no: 3, name: "page_size", kind: "scalar", T: 13 },
  { no: 4, name: "direction", kind: "enum", T: s.getEnumType(So) },
  { no: 5, name: "signature", kind: "message", T: G }
]);
var So;
(function(n) {
  n[n.ASC = 0] = "ASC", n[n.DESC = 1] = "DESC";
})(So || (So = {}));
s.util.setEnumType(So, "code.transaction.v2.GetPaymentHistoryRequest.Direction", [
  { no: 0, name: "ASC" },
  { no: 1, name: "DESC" }
]);
class Jn extends N {
  constructor(e) {
    super(), this.result = vo.OK, this.items = [], s.util.initPartial(e, this);
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
    return s.util.equals(Jn, e, t);
  }
}
Jn.runtime = s;
Jn.typeName = "code.transaction.v2.GetPaymentHistoryResponse";
Jn.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(vo) },
  { no: 2, name: "items", kind: "message", T: Nr, repeated: !0 }
]);
var vo;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND";
})(vo || (vo = {}));
s.util.setEnumType(vo, "code.transaction.v2.GetPaymentHistoryResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" }
]);
class Fn extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
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
    return s.util.equals(Fn, e, t);
  }
}
Fn.runtime = s;
Fn.typeName = "code.transaction.v2.CanWithdrawToAccountRequest";
Fn.fields = s.util.newFieldList(() => [
  { no: 1, name: "account", kind: "message", T: L }
]);
class An extends N {
  constructor(e) {
    super(), this.accountType = Jo.Unknown, this.isValidPaymentDestination = !1, this.requiresInitialization = !1, s.util.initPartial(e, this);
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
    return s.util.equals(An, e, t);
  }
}
An.runtime = s;
An.typeName = "code.transaction.v2.CanWithdrawToAccountResponse";
An.fields = s.util.newFieldList(() => [
  { no: 2, name: "account_type", kind: "enum", T: s.getEnumType(Jo) },
  { no: 1, name: "is_valid_payment_destination", kind: "scalar", T: 8 },
  { no: 3, name: "requires_initialization", kind: "scalar", T: 8 }
]);
var Jo;
(function(n) {
  n[n.Unknown = 0] = "Unknown", n[n.TokenAccount = 1] = "TokenAccount", n[n.OwnerAccount = 2] = "OwnerAccount";
})(Jo || (Jo = {}));
s.util.setEnumType(Jo, "code.transaction.v2.CanWithdrawToAccountResponse.AccountType", [
  { no: 0, name: "Unknown" },
  { no: 1, name: "TokenAccount" },
  { no: 2, name: "OwnerAccount" }
]);
class Un extends N {
  constructor(e) {
    super(), this.airdropType = nn.UNKNOWN, s.util.initPartial(e, this);
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
    return s.util.equals(Un, e, t);
  }
}
Un.runtime = s;
Un.typeName = "code.transaction.v2.AirdropRequest";
Un.fields = s.util.newFieldList(() => [
  { no: 1, name: "airdrop_type", kind: "enum", T: s.getEnumType(nn) },
  { no: 2, name: "owner", kind: "message", T: L },
  { no: 3, name: "signature", kind: "message", T: G }
]);
class Ln extends N {
  constructor(e) {
    super(), this.result = Fo.OK, s.util.initPartial(e, this);
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
    return s.util.equals(Ln, e, t);
  }
}
Ln.runtime = s;
Ln.typeName = "code.transaction.v2.AirdropResponse";
Ln.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(Fo) },
  { no: 2, name: "exchange_data", kind: "message", T: Me }
]);
var Fo;
(function(n) {
  n[n.OK = 0] = "OK", n[n.UNAVAILABLE = 1] = "UNAVAILABLE", n[n.ALREADY_CLAIMED = 2] = "ALREADY_CLAIMED";
})(Fo || (Fo = {}));
s.util.setEnumType(Fo, "code.transaction.v2.AirdropResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "UNAVAILABLE" },
  { no: 2, name: "ALREADY_CLAIMED" }
]);
class Dn extends N {
  constructor(e) {
    super(), this.request = { case: void 0 }, s.util.initPartial(e, this);
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
    return s.util.equals(Dn, e, t);
  }
}
Dn.runtime = s;
Dn.typeName = "code.transaction.v2.SwapRequest";
Dn.fields = s.util.newFieldList(() => [
  { no: 1, name: "initiate", kind: "message", T: Cn, oneof: "request" },
  { no: 2, name: "submit_signature", kind: "message", T: qn, oneof: "request" }
]);
class Cn extends N {
  constructor(e) {
    super(), this.limit = oe.zero, this.waitForBlockchainStatus = !1, s.util.initPartial(e, this);
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
    return s.util.equals(Cn, e, t);
  }
}
Cn.runtime = s;
Cn.typeName = "code.transaction.v2.SwapRequest.Initiate";
Cn.fields = s.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: L },
  { no: 2, name: "swap_authority", kind: "message", T: L },
  { no: 3, name: "limit", kind: "scalar", T: 4 },
  { no: 4, name: "wait_for_blockchain_status", kind: "scalar", T: 8 },
  { no: 5, name: "signature", kind: "message", T: G }
]);
class qn extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
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
    return s.util.equals(qn, e, t);
  }
}
qn.runtime = s;
qn.typeName = "code.transaction.v2.SwapRequest.SubmitSignature";
qn.fields = s.util.newFieldList(() => [
  { no: 1, name: "signature", kind: "message", T: G }
]);
class Kn extends N {
  constructor(e) {
    super(), this.response = { case: void 0 }, s.util.initPartial(e, this);
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
    return s.util.equals(Kn, e, t);
  }
}
Kn.runtime = s;
Kn.typeName = "code.transaction.v2.SwapResponse";
Kn.fields = s.util.newFieldList(() => [
  { no: 1, name: "server_paramenters", kind: "message", T: Pn, oneof: "response" },
  { no: 2, name: "success", kind: "message", T: $n, oneof: "response" },
  { no: 3, name: "error", kind: "message", T: _n, oneof: "response" }
]);
class Pn extends N {
  constructor(e) {
    super(), this.computeUnitLimit = oe.zero, this.computeUnitPrice = oe.zero, this.swapIxnAccounts = [], this.swapIxnData = new Uint8Array(0), this.maxToSend = oe.zero, this.minToReceive = oe.zero, s.util.initPartial(e, this);
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
    return s.util.equals(Pn, e, t);
  }
}
Pn.runtime = s;
Pn.typeName = "code.transaction.v2.SwapResponse.ServerParameters";
Pn.fields = s.util.newFieldList(() => [
  { no: 1, name: "payer", kind: "message", T: L },
  { no: 2, name: "recent_blockhash", kind: "message", T: qt },
  { no: 3, name: "compute_unit_limit", kind: "scalar", T: 4 },
  { no: 4, name: "compute_unit_price", kind: "scalar", T: 4 },
  { no: 5, name: "swap_program", kind: "message", T: L },
  { no: 6, name: "swap_ixn_accounts", kind: "message", T: fn, repeated: !0 },
  { no: 7, name: "swap_ixn_data", kind: "scalar", T: 12 },
  { no: 8, name: "max_to_send", kind: "scalar", T: 4 },
  { no: 9, name: "min_to_receive", kind: "scalar", T: 4 },
  { no: 10, name: "nonce", kind: "message", T: L }
]);
class $n extends N {
  constructor(e) {
    super(), this.code = Ao.SWAP_SUBMITTED, s.util.initPartial(e, this);
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
    return s.util.equals($n, e, t);
  }
}
$n.runtime = s;
$n.typeName = "code.transaction.v2.SwapResponse.Success";
$n.fields = s.util.newFieldList(() => [
  { no: 1, name: "code", kind: "enum", T: s.getEnumType(Ao) }
]);
var Ao;
(function(n) {
  n[n.SWAP_SUBMITTED = 0] = "SWAP_SUBMITTED", n[n.SWAP_FINALIZED = 1] = "SWAP_FINALIZED";
})(Ao || (Ao = {}));
s.util.setEnumType(Ao, "code.transaction.v2.SwapResponse.Success.Code", [
  { no: 0, name: "SWAP_SUBMITTED" },
  { no: 1, name: "SWAP_FINALIZED" }
]);
class _n extends N {
  constructor(e) {
    super(), this.code = Uo.DENIED, this.errorDetails = [], s.util.initPartial(e, this);
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
    return s.util.equals(_n, e, t);
  }
}
_n.runtime = s;
_n.typeName = "code.transaction.v2.SwapResponse.Error";
_n.fields = s.util.newFieldList(() => [
  { no: 1, name: "code", kind: "enum", T: s.getEnumType(Uo) },
  { no: 2, name: "error_details", kind: "message", T: $t, repeated: !0 }
]);
var Uo;
(function(n) {
  n[n.DENIED = 0] = "DENIED", n[n.SIGNATURE_ERROR = 2] = "SIGNATURE_ERROR", n[n.INVALID_SWAP_AMOUNT = 3] = "INVALID_SWAP_AMOUNT", n[n.SWAP_FAILED = 4] = "SWAP_FAILED";
})(Uo || (Uo = {}));
s.util.setEnumType(Uo, "code.transaction.v2.SwapResponse.Error.Code", [
  { no: 0, name: "DENIED" },
  { no: 2, name: "SIGNATURE_ERROR" },
  { no: 3, name: "INVALID_SWAP_AMOUNT" },
  { no: 4, name: "SWAP_FAILED" }
]);
class Nt extends N {
  constructor(e) {
    super(), this.type = { case: void 0 }, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Nt().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Nt().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Nt().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Nt, e, t);
  }
}
Nt.runtime = s;
Nt.typeName = "code.transaction.v2.Metadata";
Nt.fields = s.util.newFieldList(() => [
  { no: 1, name: "open_accounts", kind: "message", T: Mn, oneof: "type" },
  { no: 2, name: "send_private_payment", kind: "message", T: Vn, oneof: "type" },
  { no: 3, name: "receive_payments_privately", kind: "message", T: jn, oneof: "type" },
  { no: 4, name: "upgrade_privacy", kind: "message", T: Wn, oneof: "type" },
  { no: 5, name: "migrate_to_privacy_2022", kind: "message", T: Yn, oneof: "type" },
  { no: 6, name: "send_public_payment", kind: "message", T: Hn, oneof: "type" },
  { no: 7, name: "receive_payments_publicly", kind: "message", T: zn, oneof: "type" },
  { no: 8, name: "establish_relationship", kind: "message", T: Rn, oneof: "type" }
]);
class Mn extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
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
    return s.util.equals(Mn, e, t);
  }
}
Mn.runtime = s;
Mn.typeName = "code.transaction.v2.OpenAccountsMetadata";
Mn.fields = s.util.newFieldList(() => []);
class Vn extends N {
  constructor(e) {
    super(), this.isWithdrawal = !1, this.isRemoteSend = !1, s.util.initPartial(e, this);
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
    return s.util.equals(Vn, e, t);
  }
}
Vn.runtime = s;
Vn.typeName = "code.transaction.v2.SendPrivatePaymentMetadata";
Vn.fields = s.util.newFieldList(() => [
  { no: 1, name: "destination", kind: "message", T: L },
  { no: 2, name: "exchange_data", kind: "message", T: Me },
  { no: 3, name: "is_withdrawal", kind: "scalar", T: 8 },
  { no: 4, name: "is_remote_send", kind: "scalar", T: 8 }
]);
class Hn extends N {
  constructor(e) {
    super(), this.isWithdrawal = !1, s.util.initPartial(e, this);
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
    return s.util.equals(Hn, e, t);
  }
}
Hn.runtime = s;
Hn.typeName = "code.transaction.v2.SendPublicPaymentMetadata";
Hn.fields = s.util.newFieldList(() => [
  { no: 4, name: "source", kind: "message", T: L },
  { no: 1, name: "destination", kind: "message", T: L },
  { no: 2, name: "exchange_data", kind: "message", T: Me },
  { no: 3, name: "is_withdrawal", kind: "scalar", T: 8 }
]);
class jn extends N {
  constructor(e) {
    super(), this.quarks = oe.zero, this.isDeposit = !1, s.util.initPartial(e, this);
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
    return s.util.equals(jn, e, t);
  }
}
jn.runtime = s;
jn.typeName = "code.transaction.v2.ReceivePaymentsPrivatelyMetadata";
jn.fields = s.util.newFieldList(() => [
  { no: 1, name: "source", kind: "message", T: L },
  { no: 2, name: "quarks", kind: "scalar", T: 4 },
  { no: 3, name: "is_deposit", kind: "scalar", T: 8 }
]);
class zn extends N {
  constructor(e) {
    super(), this.quarks = oe.zero, this.isRemoteSend = !1, this.isIssuerVoidingGiftCard = !1, s.util.initPartial(e, this);
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
    return s.util.equals(zn, e, t);
  }
}
zn.runtime = s;
zn.typeName = "code.transaction.v2.ReceivePaymentsPubliclyMetadata";
zn.fields = s.util.newFieldList(() => [
  { no: 1, name: "source", kind: "message", T: L },
  { no: 2, name: "quarks", kind: "scalar", T: 4 },
  { no: 3, name: "is_remote_send", kind: "scalar", T: 8 },
  { no: 4, name: "is_issuer_voiding_gift_card", kind: "scalar", T: 8 },
  { no: 5, name: "exchange_data", kind: "message", T: Me }
]);
class Wn extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
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
    return s.util.equals(Wn, e, t);
  }
}
Wn.runtime = s;
Wn.typeName = "code.transaction.v2.UpgradePrivacyMetadata";
Wn.fields = s.util.newFieldList(() => []);
class Yn extends N {
  constructor(e) {
    super(), this.quarks = oe.zero, s.util.initPartial(e, this);
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
    return s.util.equals(Yn, e, t);
  }
}
Yn.runtime = s;
Yn.typeName = "code.transaction.v2.MigrateToPrivacy2022Metadata";
Yn.fields = s.util.newFieldList(() => [
  { no: 1, name: "quarks", kind: "scalar", T: 4 }
]);
class Rn extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
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
    return s.util.equals(Rn, e, t);
  }
}
Rn.runtime = s;
Rn.typeName = "code.transaction.v2.EstablishRelationshipMetadata";
Rn.fields = s.util.newFieldList(() => [
  { no: 1, name: "relationship", kind: "message", T: Pt }
]);
class Xn extends N {
  constructor(e) {
    super(), this.id = 0, this.type = { case: void 0 }, s.util.initPartial(e, this);
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
    return s.util.equals(Xn, e, t);
  }
}
Xn.runtime = s;
Xn.typeName = "code.transaction.v2.Action";
Xn.fields = s.util.newFieldList(() => [
  { no: 1, name: "id", kind: "scalar", T: 13 },
  { no: 2, name: "open_account", kind: "message", T: Zn, oneof: "type" },
  { no: 3, name: "close_empty_account", kind: "message", T: Gn, oneof: "type" },
  { no: 4, name: "close_dormant_account", kind: "message", T: Qn, oneof: "type" },
  { no: 5, name: "no_privacy_transfer", kind: "message", T: er, oneof: "type" },
  { no: 6, name: "no_privacy_withdraw", kind: "message", T: tr, oneof: "type" },
  { no: 7, name: "temporary_privacy_transfer", kind: "message", T: nr, oneof: "type" },
  { no: 8, name: "temporary_privacy_exchange", kind: "message", T: rr, oneof: "type" },
  { no: 9, name: "permanent_privacy_upgrade", kind: "message", T: ir, oneof: "type" },
  { no: 10, name: "fee_payment", kind: "message", T: sr, oneof: "type" }
]);
class Zn extends N {
  constructor(e) {
    super(), this.accountType = lt.UNKNOWN, this.index = oe.zero, s.util.initPartial(e, this);
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
    return s.util.equals(Zn, e, t);
  }
}
Zn.runtime = s;
Zn.typeName = "code.transaction.v2.OpenAccountAction";
Zn.fields = s.util.newFieldList(() => [
  { no: 1, name: "account_type", kind: "enum", T: s.getEnumType(lt) },
  { no: 2, name: "owner", kind: "message", T: L },
  { no: 3, name: "index", kind: "scalar", T: 4 },
  { no: 4, name: "authority", kind: "message", T: L },
  { no: 5, name: "token", kind: "message", T: L },
  { no: 6, name: "authority_signature", kind: "message", T: G }
]);
class Gn extends N {
  constructor(e) {
    super(), this.accountType = lt.UNKNOWN, s.util.initPartial(e, this);
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
    return s.util.equals(Gn, e, t);
  }
}
Gn.runtime = s;
Gn.typeName = "code.transaction.v2.CloseEmptyAccountAction";
Gn.fields = s.util.newFieldList(() => [
  { no: 1, name: "account_type", kind: "enum", T: s.getEnumType(lt) },
  { no: 2, name: "authority", kind: "message", T: L },
  { no: 3, name: "token", kind: "message", T: L }
]);
class Qn extends N {
  constructor(e) {
    super(), this.accountType = lt.UNKNOWN, s.util.initPartial(e, this);
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
    return s.util.equals(Qn, e, t);
  }
}
Qn.runtime = s;
Qn.typeName = "code.transaction.v2.CloseDormantAccountAction";
Qn.fields = s.util.newFieldList(() => [
  { no: 1, name: "account_type", kind: "enum", T: s.getEnumType(lt) },
  { no: 2, name: "authority", kind: "message", T: L },
  { no: 3, name: "token", kind: "message", T: L },
  { no: 4, name: "destination", kind: "message", T: L }
]);
class er extends N {
  constructor(e) {
    super(), this.amount = oe.zero, s.util.initPartial(e, this);
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
    return s.util.equals(er, e, t);
  }
}
er.runtime = s;
er.typeName = "code.transaction.v2.NoPrivacyTransferAction";
er.fields = s.util.newFieldList(() => [
  { no: 1, name: "authority", kind: "message", T: L },
  { no: 2, name: "source", kind: "message", T: L },
  { no: 3, name: "destination", kind: "message", T: L },
  { no: 4, name: "amount", kind: "scalar", T: 4 }
]);
class tr extends N {
  constructor(e) {
    super(), this.amount = oe.zero, this.shouldClose = !1, s.util.initPartial(e, this);
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
    return s.util.equals(tr, e, t);
  }
}
tr.runtime = s;
tr.typeName = "code.transaction.v2.NoPrivacyWithdrawAction";
tr.fields = s.util.newFieldList(() => [
  { no: 1, name: "authority", kind: "message", T: L },
  { no: 2, name: "source", kind: "message", T: L },
  { no: 3, name: "destination", kind: "message", T: L },
  { no: 4, name: "amount", kind: "scalar", T: 4 },
  { no: 5, name: "should_close", kind: "scalar", T: 8 }
]);
class nr extends N {
  constructor(e) {
    super(), this.amount = oe.zero, s.util.initPartial(e, this);
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
    return s.util.equals(nr, e, t);
  }
}
nr.runtime = s;
nr.typeName = "code.transaction.v2.TemporaryPrivacyTransferAction";
nr.fields = s.util.newFieldList(() => [
  { no: 1, name: "authority", kind: "message", T: L },
  { no: 2, name: "source", kind: "message", T: L },
  { no: 3, name: "destination", kind: "message", T: L },
  { no: 4, name: "amount", kind: "scalar", T: 4 }
]);
class rr extends N {
  constructor(e) {
    super(), this.amount = oe.zero, s.util.initPartial(e, this);
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
    return s.util.equals(rr, e, t);
  }
}
rr.runtime = s;
rr.typeName = "code.transaction.v2.TemporaryPrivacyExchangeAction";
rr.fields = s.util.newFieldList(() => [
  { no: 1, name: "authority", kind: "message", T: L },
  { no: 2, name: "source", kind: "message", T: L },
  { no: 3, name: "destination", kind: "message", T: L },
  { no: 4, name: "amount", kind: "scalar", T: 4 }
]);
class ir extends N {
  constructor(e) {
    super(), this.actionId = 0, s.util.initPartial(e, this);
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
    return s.util.equals(ir, e, t);
  }
}
ir.runtime = s;
ir.typeName = "code.transaction.v2.PermanentPrivacyUpgradeAction";
ir.fields = s.util.newFieldList(() => [
  { no: 1, name: "action_id", kind: "scalar", T: 13 }
]);
class sr extends N {
  constructor(e) {
    super(), this.amount = oe.zero, s.util.initPartial(e, this);
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
    return s.util.equals(sr, e, t);
  }
}
sr.runtime = s;
sr.typeName = "code.transaction.v2.FeePaymentAction";
sr.fields = s.util.newFieldList(() => [
  { no: 1, name: "authority", kind: "message", T: L },
  { no: 2, name: "source", kind: "message", T: L },
  { no: 3, name: "amount", kind: "scalar", T: 4 }
]);
class or extends N {
  constructor(e) {
    super(), this.actionId = 0, this.nonces = [], this.type = { case: void 0 }, s.util.initPartial(e, this);
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
    return s.util.equals(or, e, t);
  }
}
or.runtime = s;
or.typeName = "code.transaction.v2.ServerParameter";
or.fields = s.util.newFieldList(() => [
  { no: 1, name: "action_id", kind: "scalar", T: 13 },
  { no: 2, name: "nonces", kind: "message", T: ar, repeated: !0 },
  { no: 3, name: "open_account", kind: "message", T: ur, oneof: "type" },
  { no: 4, name: "close_empty_account", kind: "message", T: cr, oneof: "type" },
  { no: 5, name: "close_dormant_account", kind: "message", T: lr, oneof: "type" },
  { no: 6, name: "no_privacy_transfer", kind: "message", T: fr, oneof: "type" },
  { no: 7, name: "no_privacy_withdraw", kind: "message", T: mr, oneof: "type" },
  { no: 8, name: "temporary_privacy_transfer", kind: "message", T: dr, oneof: "type" },
  { no: 9, name: "temporary_privacy_exchange", kind: "message", T: hr, oneof: "type" },
  { no: 10, name: "permanent_privacy_upgrade", kind: "message", T: pr, oneof: "type" },
  { no: 11, name: "fee_payment", kind: "message", T: gr, oneof: "type" }
]);
class ar extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
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
    return s.util.equals(ar, e, t);
  }
}
ar.runtime = s;
ar.typeName = "code.transaction.v2.NoncedTransactionMetadata";
ar.fields = s.util.newFieldList(() => [
  { no: 1, name: "nonce", kind: "message", T: L },
  { no: 2, name: "blockhash", kind: "message", T: qt }
]);
class ur extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
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
    return s.util.equals(ur, e, t);
  }
}
ur.runtime = s;
ur.typeName = "code.transaction.v2.OpenAccountServerParameter";
ur.fields = s.util.newFieldList(() => []);
class cr extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
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
    return s.util.equals(cr, e, t);
  }
}
cr.runtime = s;
cr.typeName = "code.transaction.v2.CloseEmptyAccountServerParameter";
cr.fields = s.util.newFieldList(() => []);
class lr extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
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
    return s.util.equals(lr, e, t);
  }
}
lr.runtime = s;
lr.typeName = "code.transaction.v2.CloseDormantAccountServerParameter";
lr.fields = s.util.newFieldList(() => []);
class fr extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
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
    return s.util.equals(fr, e, t);
  }
}
fr.runtime = s;
fr.typeName = "code.transaction.v2.NoPrivacyTransferServerParameter";
fr.fields = s.util.newFieldList(() => []);
class mr extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
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
    return s.util.equals(mr, e, t);
  }
}
mr.runtime = s;
mr.typeName = "code.transaction.v2.NoPrivacyWithdrawServerParameter";
mr.fields = s.util.newFieldList(() => []);
class dr extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
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
    return s.util.equals(dr, e, t);
  }
}
dr.runtime = s;
dr.typeName = "code.transaction.v2.TemporaryPrivacyTransferServerParameter";
dr.fields = s.util.newFieldList(() => [
  { no: 1, name: "treasury", kind: "message", T: L },
  { no: 2, name: "recent_root", kind: "message", T: ts }
]);
class hr extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
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
    return s.util.equals(hr, e, t);
  }
}
hr.runtime = s;
hr.typeName = "code.transaction.v2.TemporaryPrivacyExchangeServerParameter";
hr.fields = s.util.newFieldList(() => [
  { no: 1, name: "treasury", kind: "message", T: L },
  { no: 2, name: "recent_root", kind: "message", T: ts }
]);
class pr extends N {
  constructor(e) {
    super(), this.newCommitmentAmount = oe.zero, this.merkleProof = [], s.util.initPartial(e, this);
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
    return s.util.equals(pr, e, t);
  }
}
pr.runtime = s;
pr.typeName = "code.transaction.v2.PermanentPrivacyUpgradeServerParameter";
pr.fields = s.util.newFieldList(() => [
  { no: 1, name: "new_commitment", kind: "message", T: L },
  { no: 2, name: "new_commitment_transcript", kind: "message", T: ts },
  { no: 3, name: "new_commitment_destination", kind: "message", T: L },
  { no: 4, name: "new_commitment_amount", kind: "scalar", T: 4 },
  { no: 5, name: "merkle_root", kind: "message", T: ts },
  { no: 6, name: "merkle_proof", kind: "message", T: ts, repeated: !0 }
]);
class gr extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
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
    return s.util.equals(gr, e, t);
  }
}
gr.runtime = s;
gr.typeName = "code.transaction.v2.FeePaymentServerParameter";
gr.fields = s.util.newFieldList(() => [
  { no: 1, name: "destination", kind: "message", T: L }
]);
class $t extends N {
  constructor(e) {
    super(), this.type = { case: void 0 }, s.util.initPartial(e, this);
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
    return s.util.equals($t, e, t);
  }
}
$t.runtime = s;
$t.typeName = "code.transaction.v2.ErrorDetails";
$t.fields = s.util.newFieldList(() => [
  { no: 1, name: "reason_string", kind: "message", T: wr, oneof: "type" },
  { no: 2, name: "invalid_signature", kind: "message", T: yr, oneof: "type" }
]);
class wr extends N {
  constructor(e) {
    super(), this.reason = "", s.util.initPartial(e, this);
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
    return s.util.equals(wr, e, t);
  }
}
wr.runtime = s;
wr.typeName = "code.transaction.v2.ReasonStringErrorDetails";
wr.fields = s.util.newFieldList(() => [
  { no: 1, name: "reason", kind: "scalar", T: 9 }
]);
class yr extends N {
  constructor(e) {
    super(), this.actionId = 0, s.util.initPartial(e, this);
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
    return s.util.equals(yr, e, t);
  }
}
yr.runtime = s;
yr.typeName = "code.transaction.v2.InvalidSignatureErrorDetails";
yr.fields = s.util.newFieldList(() => [
  { no: 1, name: "action_id", kind: "scalar", T: 13 },
  { no: 2, name: "expected_transaction", kind: "message", T: Ct },
  { no: 3, name: "provided_signature", kind: "message", T: G }
]);
class Tr extends N {
  constructor(e) {
    super(), this.actions = [], s.util.initPartial(e, this);
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
    return s.util.equals(Tr, e, t);
  }
}
Tr.runtime = s;
Tr.typeName = "code.transaction.v2.UpgradeableIntent";
Tr.fields = s.util.newFieldList(() => [
  { no: 1, name: "id", kind: "message", T: Ke },
  { no: 2, name: "actions", kind: "message", T: Er, repeated: !0 }
]);
class Er extends N {
  constructor(e) {
    super(), this.actionId = 0, this.sourceAccountType = lt.UNKNOWN, this.sourceDerivationIndex = oe.zero, this.originalAmount = oe.zero, s.util.initPartial(e, this);
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
    return s.util.equals(Er, e, t);
  }
}
Er.runtime = s;
Er.typeName = "code.transaction.v2.UpgradeableIntent.UpgradeablePrivateAction";
Er.fields = s.util.newFieldList(() => [
  { no: 1, name: "transaction_blob", kind: "message", T: Ct },
  { no: 2, name: "client_signature", kind: "message", T: G },
  { no: 3, name: "action_id", kind: "scalar", T: 13 },
  { no: 4, name: "source_account_type", kind: "enum", T: s.getEnumType(lt) },
  { no: 5, name: "source_derivation_index", kind: "scalar", T: 4 },
  { no: 6, name: "original_destination", kind: "message", T: L },
  { no: 7, name: "original_amount", kind: "scalar", T: 4 },
  { no: 8, name: "treasury", kind: "message", T: L },
  { no: 9, name: "recent_root", kind: "message", T: ts }
]);
class Nr extends N {
  constructor(e) {
    super(), this.paymentType = Lo.UNKNOWN, this.isWithdraw = !1, this.isDeposit = !1, this.isRemoteSend = !1, this.isReturned = !1, this.isAirdrop = !1, this.airdropType = nn.UNKNOWN, this.isMicroPayment = !1, s.util.initPartial(e, this);
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
    return s.util.equals(Nr, e, t);
  }
}
Nr.runtime = s;
Nr.typeName = "code.transaction.v2.PaymentHistoryItem";
Nr.fields = s.util.newFieldList(() => [
  { no: 1, name: "cursor", kind: "message", T: va },
  { no: 2, name: "exchange_data", kind: "message", T: Me },
  { no: 3, name: "payment_type", kind: "enum", T: s.getEnumType(Lo) },
  { no: 4, name: "is_withdraw", kind: "scalar", T: 8 },
  { no: 5, name: "is_deposit", kind: "scalar", T: 8 },
  { no: 6, name: "timestamp", kind: "message", T: Fe },
  { no: 7, name: "is_remote_send", kind: "scalar", T: 8 },
  { no: 8, name: "is_returned", kind: "scalar", T: 8 },
  { no: 9, name: "is_airdrop", kind: "scalar", T: 8 },
  { no: 10, name: "airdrop_type", kind: "enum", T: s.getEnumType(nn) },
  { no: 11, name: "is_micro_payment", kind: "scalar", T: 8 },
  { no: 12, name: "intent_id", kind: "message", T: Ke }
]);
var Lo;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.SEND = 1] = "SEND", n[n.RECEIVE = 2] = "RECEIVE";
})(Lo || (Lo = {}));
s.util.setEnumType(Lo, "code.transaction.v2.PaymentHistoryItem.PaymentType", [
  { no: 0, name: "UNKNOWN" },
  { no: 1, name: "SEND" },
  { no: 2, name: "RECEIVE" }
]);
class Me extends N {
  constructor(e) {
    super(), this.currency = "", this.exchangeRate = 0, this.nativeAmount = 0, this.quarks = oe.zero, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Me().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Me().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Me().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Me, e, t);
  }
}
Me.runtime = s;
Me.typeName = "code.transaction.v2.ExchangeData";
Me.fields = s.util.newFieldList(() => [
  { no: 1, name: "currency", kind: "scalar", T: 9 },
  { no: 2, name: "exchange_rate", kind: "scalar", T: 1 },
  { no: 3, name: "native_amount", kind: "scalar", T: 1 },
  { no: 4, name: "quarks", kind: "scalar", T: 4 }
]);
class bt extends N {
  constructor(e) {
    super(), this.currency = "", this.nativeAmount = 0, s.util.initPartial(e, this);
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
    return s.util.equals(bt, e, t);
  }
}
bt.runtime = s;
bt.typeName = "code.transaction.v2.ExchangeDataWithoutRate";
bt.fields = s.util.newFieldList(() => [
  { no: 1, name: "currency", kind: "scalar", T: 9 },
  { no: 2, name: "native_amount", kind: "scalar", T: 1 }
]);
class br extends N {
  constructor(e) {
    super(), this.nextTransaction = 0, s.util.initPartial(e, this);
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
    return s.util.equals(br, e, t);
  }
}
br.runtime = s;
br.typeName = "code.transaction.v2.RemainingSendLimit";
br.fields = s.util.newFieldList(() => [
  { no: 1, name: "next_transaction", kind: "scalar", T: 2 }
]);
class xr extends N {
  constructor(e) {
    super(), this.maxQuarks = oe.zero, s.util.initPartial(e, this);
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
    return s.util.equals(xr, e, t);
  }
}
xr.runtime = s;
xr.typeName = "code.transaction.v2.DepositLimit";
xr.fields = s.util.newFieldList(() => [
  { no: 1, name: "max_quarks", kind: "scalar", T: 4 }
]);
class Br extends N {
  constructor(e) {
    super(), this.maxPerTransaction = 0, this.minPerTransaction = 0, s.util.initPartial(e, this);
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
    return s.util.equals(Br, e, t);
  }
}
Br.runtime = s;
Br.typeName = "code.transaction.v2.MicroPaymentLimit";
Br.fields = s.util.newFieldList(() => [
  { no: 1, name: "max_per_transaction", kind: "scalar", T: 2 },
  { no: 2, name: "min_per_transaction", kind: "scalar", T: 2 }
]);
let va = class co extends N {
  constructor(e) {
    super(), this.value = new Uint8Array(0), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new co().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new co().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new co().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(co, e, t);
  }
};
va.runtime = s;
va.typeName = "code.transaction.v2.Cursor";
va.fields = s.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class kr extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
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
    return s.util.equals(kr, e, t);
  }
}
kr.runtime = s;
kr.typeName = "code.account.v1.IsCodeAccountRequest";
kr.fields = s.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: L },
  { no: 2, name: "signature", kind: "message", T: G }
]);
class Or extends N {
  constructor(e) {
    super(), this.result = Do.OK, s.util.initPartial(e, this);
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
    return s.util.equals(Or, e, t);
  }
}
Or.runtime = s;
Or.typeName = "code.account.v1.IsCodeAccountResponse";
Or.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(Do) }
]);
var Do;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND", n[n.UNLOCKED_TIMELOCK_ACCOUNT = 2] = "UNLOCKED_TIMELOCK_ACCOUNT";
})(Do || (Do = {}));
s.util.setEnumType(Do, "code.account.v1.IsCodeAccountResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" },
  { no: 2, name: "UNLOCKED_TIMELOCK_ACCOUNT" }
]);
class Ir extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
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
    return s.util.equals(Ir, e, t);
  }
}
Ir.runtime = s;
Ir.typeName = "code.account.v1.GetTokenAccountInfosRequest";
Ir.fields = s.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: L },
  { no: 2, name: "signature", kind: "message", T: G }
]);
class Sr extends N {
  constructor(e) {
    super(), this.result = Co.OK, this.tokenAccountInfos = {}, s.util.initPartial(e, this);
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
    return s.util.equals(Sr, e, t);
  }
}
Sr.runtime = s;
Sr.typeName = "code.account.v1.GetTokenAccountInfosResponse";
Sr.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(Co) },
  { no: 2, name: "token_account_infos", kind: "map", K: 9, V: { kind: "message", T: vr } }
]);
var Co;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND";
})(Co || (Co = {}));
s.util.setEnumType(Co, "code.account.v1.GetTokenAccountInfosResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" }
]);
class vr extends N {
  constructor(e) {
    super(), this.accountType = lt.UNKNOWN, this.index = oe.zero, this.balanceSource = qo.UNKNOWN, this.balance = oe.zero, this.managementState = Ko.UNKNOWN, this.blockchainState = Po.UNKNOWN, this.mustRotate = !1, this.claimState = $o.UNKNOWN, this.mintDecimals = 0, this.mintDisplayName = "", s.util.initPartial(e, this);
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
    return s.util.equals(vr, e, t);
  }
}
vr.runtime = s;
vr.typeName = "code.account.v1.TokenAccountInfo";
vr.fields = s.util.newFieldList(() => [
  { no: 1, name: "address", kind: "message", T: L },
  { no: 2, name: "owner", kind: "message", T: L },
  { no: 3, name: "authority", kind: "message", T: L },
  { no: 4, name: "account_type", kind: "enum", T: s.getEnumType(lt) },
  { no: 5, name: "index", kind: "scalar", T: 4 },
  { no: 6, name: "balance_source", kind: "enum", T: s.getEnumType(qo) },
  { no: 7, name: "balance", kind: "scalar", T: 4 },
  { no: 8, name: "management_state", kind: "enum", T: s.getEnumType(Ko) },
  { no: 9, name: "blockchain_state", kind: "enum", T: s.getEnumType(Po) },
  { no: 10, name: "must_rotate", kind: "scalar", T: 8 },
  { no: 11, name: "claim_state", kind: "enum", T: s.getEnumType($o) },
  { no: 12, name: "original_exchange_data", kind: "message", T: Me },
  { no: 13, name: "mint", kind: "message", T: L },
  { no: 14, name: "mint_decimals", kind: "scalar", T: 13 },
  { no: 15, name: "mint_display_name", kind: "scalar", T: 9 },
  { no: 16, name: "relationship", kind: "message", T: Pt }
]);
var qo;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.BLOCKCHAIN = 1] = "BLOCKCHAIN", n[n.CACHE = 2] = "CACHE";
})(qo || (qo = {}));
s.util.setEnumType(qo, "code.account.v1.TokenAccountInfo.BalanceSource", [
  { no: 0, name: "BALANCE_SOURCE_UNKNOWN" },
  { no: 1, name: "BALANCE_SOURCE_BLOCKCHAIN" },
  { no: 2, name: "BALANCE_SOURCE_CACHE" }
]);
var Ko;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.NONE = 1] = "NONE", n[n.LOCKING = 2] = "LOCKING", n[n.LOCKED = 3] = "LOCKED", n[n.UNLOCKING = 4] = "UNLOCKING", n[n.UNLOCKED = 5] = "UNLOCKED", n[n.CLOSING = 6] = "CLOSING", n[n.CLOSED = 7] = "CLOSED";
})(Ko || (Ko = {}));
s.util.setEnumType(Ko, "code.account.v1.TokenAccountInfo.ManagementState", [
  { no: 0, name: "MANAGEMENT_STATE_UNKNOWN" },
  { no: 1, name: "MANAGEMENT_STATE_NONE" },
  { no: 2, name: "MANAGEMENT_STATE_LOCKING" },
  { no: 3, name: "MANAGEMENT_STATE_LOCKED" },
  { no: 4, name: "MANAGEMENT_STATE_UNLOCKING" },
  { no: 5, name: "MANAGEMENT_STATE_UNLOCKED" },
  { no: 6, name: "MANAGEMENT_STATE_CLOSING" },
  { no: 7, name: "MANAGEMENT_STATE_CLOSED" }
]);
var Po;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.DOES_NOT_EXIST = 1] = "DOES_NOT_EXIST", n[n.EXISTS = 2] = "EXISTS";
})(Po || (Po = {}));
s.util.setEnumType(Po, "code.account.v1.TokenAccountInfo.BlockchainState", [
  { no: 0, name: "BLOCKCHAIN_STATE_UNKNOWN" },
  { no: 1, name: "BLOCKCHAIN_STATE_DOES_NOT_EXIST" },
  { no: 2, name: "BLOCKCHAIN_STATE_EXISTS" }
]);
var $o;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.NOT_CLAIMED = 1] = "NOT_CLAIMED", n[n.CLAIMED = 2] = "CLAIMED", n[n.EXPIRED = 3] = "EXPIRED";
})($o || ($o = {}));
s.util.setEnumType($o, "code.account.v1.TokenAccountInfo.ClaimState", [
  { no: 0, name: "CLAIM_STATE_UNKNOWN" },
  { no: 1, name: "CLAIM_STATE_NOT_CLAIMED" },
  { no: 2, name: "CLAIM_STATE_CLAIMED" },
  { no: 3, name: "CLAIM_STATE_EXPIRED" }
]);
ne.Unary, ne.Unary;
class Jr extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
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
    return s.util.equals(Jr, e, t);
  }
}
Jr.runtime = s;
Jr.typeName = "code.badge.v1.ResetBadgeCountRequest";
Jr.fields = s.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: L },
  { no: 2, name: "signature", kind: "message", T: G }
]);
class Fr extends N {
  constructor(e) {
    super(), this.result = _o.OK, s.util.initPartial(e, this);
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
    return s.util.equals(Fr, e, t);
  }
}
Fr.runtime = s;
Fr.typeName = "code.badge.v1.ResetBadgeCountResponse";
Fr.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(_o) }
]);
var _o;
(function(n) {
  n[n.OK = 0] = "OK";
})(_o || (_o = {}));
s.util.setEnumType(_o, "code.badge.v1.ResetBadgeCountResponse.Result", [
  { no: 0, name: "OK" }
]);
ne.Unary;
class Ar extends N {
  constructor(e) {
    super(), this.pageSize = 0, this.direction = Mo.ASC, s.util.initPartial(e, this);
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
    return s.util.equals(Ar, e, t);
  }
}
Ar.runtime = s;
Ar.typeName = "code.chat.v1.GetChatsRequest";
Ar.fields = s.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: L },
  { no: 2, name: "signature", kind: "message", T: G },
  { no: 3, name: "page_size", kind: "scalar", T: 13 },
  { no: 4, name: "cursor", kind: "message", T: ht },
  { no: 5, name: "direction", kind: "enum", T: s.getEnumType(Mo) }
]);
var Mo;
(function(n) {
  n[n.ASC = 0] = "ASC", n[n.DESC = 1] = "DESC";
})(Mo || (Mo = {}));
s.util.setEnumType(Mo, "code.chat.v1.GetChatsRequest.Direction", [
  { no: 0, name: "ASC" },
  { no: 1, name: "DESC" }
]);
class Ur extends N {
  constructor(e) {
    super(), this.result = Vo.OK, this.chats = [], s.util.initPartial(e, this);
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
    return s.util.equals(Ur, e, t);
  }
}
Ur.runtime = s;
Ur.typeName = "code.chat.v1.GetChatsResponse";
Ur.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(Vo) },
  { no: 2, name: "chats", kind: "message", T: Mr, repeated: !0 }
]);
var Vo;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND";
})(Vo || (Vo = {}));
s.util.setEnumType(Vo, "code.chat.v1.GetChatsResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" }
]);
class Lr extends N {
  constructor(e) {
    super(), this.pageSize = 0, this.direction = Ho.ASC, s.util.initPartial(e, this);
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
    return s.util.equals(Lr, e, t);
  }
}
Lr.runtime = s;
Lr.typeName = "code.chat.v1.GetMessagesRequest";
Lr.fields = s.util.newFieldList(() => [
  { no: 1, name: "chat_id", kind: "message", T: ut },
  { no: 2, name: "owner", kind: "message", T: L },
  { no: 3, name: "signature", kind: "message", T: G },
  { no: 4, name: "page_size", kind: "scalar", T: 13 },
  { no: 5, name: "cursor", kind: "message", T: ht },
  { no: 6, name: "direction", kind: "enum", T: s.getEnumType(Ho) }
]);
var Ho;
(function(n) {
  n[n.ASC = 0] = "ASC", n[n.DESC = 1] = "DESC";
})(Ho || (Ho = {}));
s.util.setEnumType(Ho, "code.chat.v1.GetMessagesRequest.Direction", [
  { no: 0, name: "ASC" },
  { no: 1, name: "DESC" }
]);
class Dr extends N {
  constructor(e) {
    super(), this.result = jo.OK, this.messages = [], s.util.initPartial(e, this);
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
    return s.util.equals(Dr, e, t);
  }
}
Dr.runtime = s;
Dr.typeName = "code.chat.v1.GetMessagesResponse";
Dr.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(jo) },
  { no: 2, name: "messages", kind: "message", T: Vr, repeated: !0 }
]);
var jo;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND";
})(jo || (jo = {}));
s.util.setEnumType(jo, "code.chat.v1.GetMessagesResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" }
]);
class Cr extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
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
    return s.util.equals(Cr, e, t);
  }
}
Cr.runtime = s;
Cr.typeName = "code.chat.v1.AdvancePointerRequest";
Cr.fields = s.util.newFieldList(() => [
  { no: 1, name: "chat_id", kind: "message", T: ut },
  { no: 2, name: "pointer", kind: "message", T: Mt },
  { no: 3, name: "owner", kind: "message", T: L },
  { no: 4, name: "signature", kind: "message", T: G }
]);
class qr extends N {
  constructor(e) {
    super(), this.result = zo.OK, s.util.initPartial(e, this);
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
    return s.util.equals(qr, e, t);
  }
}
qr.runtime = s;
qr.typeName = "code.chat.v1.AdvancePointerResponse";
qr.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(zo) }
]);
var zo;
(function(n) {
  n[n.OK = 0] = "OK", n[n.CHAT_NOT_FOUND = 1] = "CHAT_NOT_FOUND", n[n.MESSAGE_NOT_FOUND = 2] = "MESSAGE_NOT_FOUND";
})(zo || (zo = {}));
s.util.setEnumType(zo, "code.chat.v1.AdvancePointerResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "CHAT_NOT_FOUND" },
  { no: 2, name: "MESSAGE_NOT_FOUND" }
]);
class Kr extends N {
  constructor(e) {
    super(), this.isMuted = !1, s.util.initPartial(e, this);
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
    return s.util.equals(Kr, e, t);
  }
}
Kr.runtime = s;
Kr.typeName = "code.chat.v1.SetMuteStateRequest";
Kr.fields = s.util.newFieldList(() => [
  { no: 1, name: "chat_id", kind: "message", T: ut },
  { no: 2, name: "is_muted", kind: "scalar", T: 8 },
  { no: 3, name: "owner", kind: "message", T: L },
  { no: 4, name: "signature", kind: "message", T: G }
]);
class Pr extends N {
  constructor(e) {
    super(), this.result = Wo.OK, s.util.initPartial(e, this);
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
    return s.util.equals(Pr, e, t);
  }
}
Pr.runtime = s;
Pr.typeName = "code.chat.v1.SetMuteStateResponse";
Pr.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(Wo) }
]);
var Wo;
(function(n) {
  n[n.OK = 0] = "OK", n[n.CHAT_NOT_FOUND = 1] = "CHAT_NOT_FOUND", n[n.CANT_MUTE = 2] = "CANT_MUTE";
})(Wo || (Wo = {}));
s.util.setEnumType(Wo, "code.chat.v1.SetMuteStateResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "CHAT_NOT_FOUND" },
  { no: 2, name: "CANT_MUTE" }
]);
class $r extends N {
  constructor(e) {
    super(), this.isSubscribed = !1, s.util.initPartial(e, this);
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
    return s.util.equals($r, e, t);
  }
}
$r.runtime = s;
$r.typeName = "code.chat.v1.SetSubscriptionStateRequest";
$r.fields = s.util.newFieldList(() => [
  { no: 1, name: "chat_id", kind: "message", T: ut },
  { no: 2, name: "is_subscribed", kind: "scalar", T: 8 },
  { no: 3, name: "owner", kind: "message", T: L },
  { no: 4, name: "signature", kind: "message", T: G }
]);
class _r extends N {
  constructor(e) {
    super(), this.result = Yo.OK, s.util.initPartial(e, this);
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
    return s.util.equals(_r, e, t);
  }
}
_r.runtime = s;
_r.typeName = "code.chat.v1.SetSubscriptionStateResponse";
_r.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(Yo) }
]);
var Yo;
(function(n) {
  n[n.OK = 0] = "OK", n[n.CHAT_NOT_FOUND = 1] = "CHAT_NOT_FOUND", n[n.CANT_UNSUBSCRIBE = 2] = "CANT_UNSUBSCRIBE";
})(Yo || (Yo = {}));
s.util.setEnumType(Yo, "code.chat.v1.SetSubscriptionStateResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "CHAT_NOT_FOUND" },
  { no: 2, name: "CANT_UNSUBSCRIBE" }
]);
class ut extends N {
  constructor(e) {
    super(), this.value = new Uint8Array(0), s.util.initPartial(e, this);
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
    return s.util.equals(ut, e, t);
  }
}
ut.runtime = s;
ut.typeName = "code.chat.v1.ChatId";
ut.fields = s.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class _t extends N {
  constructor(e) {
    super(), this.value = new Uint8Array(0), s.util.initPartial(e, this);
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
    return s.util.equals(_t, e, t);
  }
}
_t.runtime = s;
_t.typeName = "code.chat.v1.ChatMessageId";
_t.fields = s.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class Mt extends N {
  constructor(e) {
    super(), this.kind = Ro.UNKNOWN, s.util.initPartial(e, this);
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
    return s.util.equals(Mt, e, t);
  }
}
Mt.runtime = s;
Mt.typeName = "code.chat.v1.Pointer";
Mt.fields = s.util.newFieldList(() => [
  { no: 1, name: "kind", kind: "enum", T: s.getEnumType(Ro) },
  { no: 2, name: "value", kind: "message", T: _t }
]);
var Ro;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.READ = 1] = "READ";
})(Ro || (Ro = {}));
s.util.setEnumType(Ro, "code.chat.v1.Pointer.Kind", [
  { no: 0, name: "UNKNOWN" },
  { no: 1, name: "READ" }
]);
class Mr extends N {
  constructor(e) {
    super(), this.title = { case: void 0 }, this.numUnread = 0, this.isMuted = !1, this.isSubscribed = !1, this.canMute = !1, this.canUnsubscribe = !1, this.isVerified = !1, s.util.initPartial(e, this);
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
    return s.util.equals(Mr, e, t);
  }
}
Mr.runtime = s;
Mr.typeName = "code.chat.v1.ChatMetadata";
Mr.fields = s.util.newFieldList(() => [
  { no: 1, name: "chat_id", kind: "message", T: ut },
  { no: 2, name: "localized", kind: "message", T: Vt, oneof: "title" },
  { no: 3, name: "domain", kind: "message", T: at, oneof: "title" },
  { no: 4, name: "read_pointer", kind: "message", T: Mt },
  { no: 5, name: "num_unread", kind: "scalar", T: 13 },
  { no: 6, name: "is_muted", kind: "scalar", T: 8 },
  { no: 7, name: "is_subscribed", kind: "scalar", T: 8 },
  { no: 8, name: "can_mute", kind: "scalar", T: 8 },
  { no: 9, name: "can_unsubscribe", kind: "scalar", T: 8 },
  { no: 10, name: "cursor", kind: "message", T: ht },
  { no: 11, name: "is_verified", kind: "scalar", T: 8 }
]);
class Vr extends N {
  constructor(e) {
    super(), this.content = [], s.util.initPartial(e, this);
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
    return s.util.equals(Vr, e, t);
  }
}
Vr.runtime = s;
Vr.typeName = "code.chat.v1.ChatMessage";
Vr.fields = s.util.newFieldList(() => [
  { no: 1, name: "message_id", kind: "message", T: _t },
  { no: 2, name: "ts", kind: "message", T: Fe },
  { no: 3, name: "content", kind: "message", T: Hr, repeated: !0 },
  { no: 4, name: "cursor", kind: "message", T: ht }
]);
class Hr extends N {
  constructor(e) {
    super(), this.type = { case: void 0 }, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Hr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Hr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Hr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Hr, e, t);
  }
}
Hr.runtime = s;
Hr.typeName = "code.chat.v1.Content";
Hr.fields = s.util.newFieldList(() => [
  { no: 1, name: "localized", kind: "message", T: Vt, oneof: "type" },
  { no: 2, name: "exchange_data", kind: "message", T: jr, oneof: "type" },
  { no: 3, name: "nacl_box", kind: "message", T: zr, oneof: "type" }
]);
class Vt extends N {
  constructor(e) {
    super(), this.key = "", s.util.initPartial(e, this);
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
    return s.util.equals(Vt, e, t);
  }
}
Vt.runtime = s;
Vt.typeName = "code.chat.v1.LocalizedContent";
Vt.fields = s.util.newFieldList(() => [
  { no: 1, name: "key", kind: "scalar", T: 9 }
]);
class jr extends N {
  constructor(e) {
    super(), this.verb = Xo.UNKNOWN, this.exchangeData = { case: void 0 }, s.util.initPartial(e, this);
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
    return s.util.equals(jr, e, t);
  }
}
jr.runtime = s;
jr.typeName = "code.chat.v1.ExchangeDataContent";
jr.fields = s.util.newFieldList(() => [
  { no: 1, name: "verb", kind: "enum", T: s.getEnumType(Xo) },
  { no: 2, name: "exact", kind: "message", T: Me, oneof: "exchange_data" },
  { no: 3, name: "partial", kind: "message", T: bt, oneof: "exchange_data" }
]);
var Xo;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.GAVE = 1] = "GAVE", n[n.RECEIVED = 2] = "RECEIVED", n[n.WITHDREW = 3] = "WITHDREW", n[n.DEPOSITED = 4] = "DEPOSITED", n[n.SENT = 5] = "SENT", n[n.RETURNED = 6] = "RETURNED", n[n.SPENT = 7] = "SPENT", n[n.PAID = 8] = "PAID", n[n.PURCHASED = 9] = "PURCHASED";
})(Xo || (Xo = {}));
s.util.setEnumType(Xo, "code.chat.v1.ExchangeDataContent.Verb", [
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
class zr extends N {
  constructor(e) {
    super(), this.nonce = new Uint8Array(0), this.encryptedPayload = new Uint8Array(0), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new zr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new zr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new zr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(zr, e, t);
  }
}
zr.runtime = s;
zr.typeName = "code.chat.v1.NaclBoxEncryptedContent";
zr.fields = s.util.newFieldList(() => [
  { no: 1, name: "peer_public_key", kind: "message", T: L },
  { no: 2, name: "nonce", kind: "scalar", T: 12 },
  { no: 3, name: "encrypted_payload", kind: "scalar", T: 12 }
]);
class ht extends N {
  constructor(e) {
    super(), this.value = new Uint8Array(0), s.util.initPartial(e, this);
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
    return s.util.equals(ht, e, t);
  }
}
ht.runtime = s;
ht.typeName = "code.chat.v1.Cursor";
ht.fields = s.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
ne.Unary, ne.Unary, ne.Unary, ne.Unary, ne.Unary;
class Wr extends N {
  constructor(e) {
    super(), this.contacts = [], s.util.initPartial(e, this);
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
    return s.util.equals(Wr, e, t);
  }
}
Wr.runtime = s;
Wr.typeName = "code.contact.v1.AddContactsRequest";
Wr.fields = s.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: L },
  { no: 2, name: "signature", kind: "message", T: G },
  { no: 3, name: "container_id", kind: "message", T: nt },
  { no: 4, name: "contacts", kind: "message", T: Pe, repeated: !0 }
]);
class Yr extends N {
  constructor(e) {
    super(), this.result = Zo.OK, this.contactStatus = {}, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Yr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Yr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Yr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Yr, e, t);
  }
}
Yr.runtime = s;
Yr.typeName = "code.contact.v1.AddContactsResponse";
Yr.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(Zo) },
  { no: 2, name: "contact_status", kind: "map", K: 9, V: { kind: "message", T: Ht } }
]);
var Zo;
(function(n) {
  n[n.OK = 0] = "OK";
})(Zo || (Zo = {}));
s.util.setEnumType(Zo, "code.contact.v1.AddContactsResponse.Result", [
  { no: 0, name: "OK" }
]);
class Rr extends N {
  constructor(e) {
    super(), this.contacts = [], s.util.initPartial(e, this);
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
    return s.util.equals(Rr, e, t);
  }
}
Rr.runtime = s;
Rr.typeName = "code.contact.v1.RemoveContactsRequest";
Rr.fields = s.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: L },
  { no: 2, name: "signature", kind: "message", T: G },
  { no: 3, name: "container_id", kind: "message", T: nt },
  { no: 4, name: "contacts", kind: "message", T: Pe, repeated: !0 }
]);
class Xr extends N {
  constructor(e) {
    super(), this.result = Go.OK, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Xr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Xr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Xr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Xr, e, t);
  }
}
Xr.runtime = s;
Xr.typeName = "code.contact.v1.RemoveContactsResponse";
Xr.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(Go) }
]);
var Go;
(function(n) {
  n[n.OK = 0] = "OK";
})(Go || (Go = {}));
s.util.setEnumType(Go, "code.contact.v1.RemoveContactsResponse.Result", [
  { no: 0, name: "OK" }
]);
class Zr extends N {
  constructor(e) {
    super(), this.includeOnlyInAppContacts = !1, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Zr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Zr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Zr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Zr, e, t);
  }
}
Zr.runtime = s;
Zr.typeName = "code.contact.v1.GetContactsRequest";
Zr.fields = s.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: L },
  { no: 2, name: "signature", kind: "message", T: G },
  { no: 3, name: "container_id", kind: "message", T: nt },
  { no: 4, name: "page_token", kind: "message", T: Ja },
  { no: 5, name: "include_only_in_app_contacts", kind: "scalar", T: 8 }
]);
class Gr extends N {
  constructor(e) {
    super(), this.result = Qo.OK, this.contacts = [], s.util.initPartial(e, this);
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
    return s.util.equals(Gr, e, t);
  }
}
Gr.runtime = s;
Gr.typeName = "code.contact.v1.GetContactsResponse";
Gr.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(Qo) },
  { no: 2, name: "contacts", kind: "message", T: Qr, repeated: !0 },
  { no: 3, name: "next_page_token", kind: "message", T: Ja }
]);
var Qo;
(function(n) {
  n[n.OK = 0] = "OK";
})(Qo || (Qo = {}));
s.util.setEnumType(Qo, "code.contact.v1.GetContactsResponse.Result", [
  { no: 0, name: "OK" }
]);
class Qr extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Qr().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Qr().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Qr().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Qr, e, t);
  }
}
Qr.runtime = s;
Qr.typeName = "code.contact.v1.Contact";
Qr.fields = s.util.newFieldList(() => [
  { no: 1, name: "phone_number", kind: "message", T: Pe },
  { no: 2, name: "status", kind: "message", T: Ht }
]);
class Ht extends N {
  constructor(e) {
    super(), this.isRegistered = !1, this.isInvited = !1, this.isInviteRevoked = !1, s.util.initPartial(e, this);
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
    return s.util.equals(Ht, e, t);
  }
}
Ht.runtime = s;
Ht.typeName = "code.contact.v1.ContactStatus";
Ht.fields = s.util.newFieldList(() => [
  { no: 1, name: "is_registered", kind: "scalar", T: 8 },
  { no: 2, name: "is_invited", kind: "scalar", T: 8 },
  { no: 3, name: "is_invite_revoked", kind: "scalar", T: 8 }
]);
let Ja = class lo extends N {
  constructor(e) {
    super(), this.value = new Uint8Array(0), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new lo().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new lo().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new lo().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(lo, e, t);
  }
};
Ja.runtime = s;
Ja.typeName = "code.contact.v1.PageToken";
Ja.fields = s.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
ne.Unary, ne.Unary, ne.Unary;
class ei extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ei().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ei().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ei().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(ei, e, t);
  }
}
ei.runtime = s;
ei.typeName = "code.currency.v1.GetAllRatesRequest";
ei.fields = s.util.newFieldList(() => [
  { no: 1, name: "timestamp", kind: "message", T: Fe }
]);
class ti extends N {
  constructor(e) {
    super(), this.result = ea.OK, this.rates = {}, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ti().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ti().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ti().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(ti, e, t);
  }
}
ti.runtime = s;
ti.typeName = "code.currency.v1.GetAllRatesResponse";
ti.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(ea) },
  { no: 2, name: "as_of", kind: "message", T: Fe },
  { no: 3, name: "rates", kind: "map", K: 9, V: { kind: "scalar", T: 1 } }
]);
var ea;
(function(n) {
  n[n.OK = 0] = "OK", n[n.MISSING_DATA = 1] = "MISSING_DATA";
})(ea || (ea = {}));
s.util.setEnumType(ea, "code.currency.v1.GetAllRatesResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "MISSING_DATA" }
]);
ne.Unary;
class ni extends N {
  constructor(e) {
    super(), this.owners = [], this.signatures = [], s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ni().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ni().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ni().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(ni, e, t);
  }
}
ni.runtime = s;
ni.typeName = "code.device.v1.RegisterLoggedInAccountsRequest";
ni.fields = s.util.newFieldList(() => [
  { no: 1, name: "app_install", kind: "message", T: Et },
  { no: 2, name: "owners", kind: "message", T: L, repeated: !0 },
  { no: 3, name: "signatures", kind: "message", T: G, repeated: !0 }
]);
class ri extends N {
  constructor(e) {
    super(), this.result = ta.OK, this.invalidOwners = [], s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ri().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ri().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ri().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(ri, e, t);
  }
}
ri.runtime = s;
ri.typeName = "code.device.v1.RegisterLoggedInAccountsResponse";
ri.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(ta) },
  { no: 2, name: "invalid_owners", kind: "message", T: L, repeated: !0 }
]);
var ta;
(function(n) {
  n[n.OK = 0] = "OK", n[n.INVALID_OWNER = 1] = "INVALID_OWNER";
})(ta || (ta = {}));
s.util.setEnumType(ta, "code.device.v1.RegisterLoggedInAccountsResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INVALID_OWNER" }
]);
class ii extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ii().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ii().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ii().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(ii, e, t);
  }
}
ii.runtime = s;
ii.typeName = "code.device.v1.GetLoggedInAccountsRequest";
ii.fields = s.util.newFieldList(() => [
  { no: 1, name: "app_install", kind: "message", T: Et }
]);
class si extends N {
  constructor(e) {
    super(), this.result = na.OK, this.owners = [], s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new si().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new si().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new si().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(si, e, t);
  }
}
si.runtime = s;
si.typeName = "code.device.v1.GetLoggedInAccountsResponse";
si.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(na) },
  { no: 2, name: "owners", kind: "message", T: L, repeated: !0 }
]);
var na;
(function(n) {
  n[n.OK = 0] = "OK";
})(na || (na = {}));
s.util.setEnumType(na, "code.device.v1.GetLoggedInAccountsResponse.Result", [
  { no: 0, name: "OK" }
]);
ne.Unary, ne.Unary;
var ra;
(function(n) {
  n[n.NOT_INVITED = 0] = "NOT_INVITED", n[n.INVITED = 1] = "INVITED", n[n.REGISTERED = 2] = "REGISTERED", n[n.REVOKED = 3] = "REVOKED";
})(ra || (ra = {}));
s.util.setEnumType(ra, "code.invite.v2.InvitationStatus", [
  { no: 0, name: "NOT_INVITED" },
  { no: 1, name: "INVITED" },
  { no: 2, name: "REGISTERED" },
  { no: 3, name: "REVOKED" }
]);
class oi extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new oi().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new oi().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new oi().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(oi, e, t);
  }
}
oi.runtime = s;
oi.typeName = "code.invite.v2.GetInviteCountRequest";
oi.fields = s.util.newFieldList(() => [
  { no: 1, name: "user_id", kind: "message", T: dt }
]);
class ai extends N {
  constructor(e) {
    super(), this.result = ia.OK, this.inviteCount = 0, s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new ai().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new ai().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new ai().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(ai, e, t);
  }
}
ai.runtime = s;
ai.typeName = "code.invite.v2.GetInviteCountResponse";
ai.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(ia) },
  { no: 2, name: "invite_count", kind: "scalar", T: 13 }
]);
var ia;
(function(n) {
  n[n.OK = 0] = "OK";
})(ia || (ia = {}));
s.util.setEnumType(ia, "code.invite.v2.GetInviteCountResponse.Result", [
  { no: 0, name: "OK" }
]);
class ui extends N {
  constructor(e) {
    super(), this.source = { case: void 0 }, s.util.initPartial(e, this);
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
    return s.util.equals(ui, e, t);
  }
}
ui.runtime = s;
ui.typeName = "code.invite.v2.InvitePhoneNumberRequest";
ui.fields = s.util.newFieldList(() => [
  { no: 1, name: "user", kind: "message", T: dt, oneof: "source" },
  { no: 3, name: "invite_code", kind: "message", T: mi, oneof: "source" },
  { no: 2, name: "receiver", kind: "message", T: Pe }
]);
class ci extends N {
  constructor(e) {
    super(), this.result = sa.OK, s.util.initPartial(e, this);
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
    return s.util.equals(ci, e, t);
  }
}
ci.runtime = s;
ci.typeName = "code.invite.v2.InvitePhoneNumberResponse";
ci.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(sa) }
]);
var sa;
(function(n) {
  n[n.OK = 0] = "OK", n[n.INVITE_COUNT_EXCEEDED = 1] = "INVITE_COUNT_EXCEEDED", n[n.ALREADY_INVITED = 2] = "ALREADY_INVITED", n[n.USER_NOT_INVITED = 3] = "USER_NOT_INVITED", n[n.INVALID_RECEIVER_PHONE_NUMBER = 4] = "INVALID_RECEIVER_PHONE_NUMBER", n[n.INVITE_CODE_NOT_FOUND = 5] = "INVITE_CODE_NOT_FOUND", n[n.INVITE_CODE_REVOKED = 6] = "INVITE_CODE_REVOKED", n[n.INVITE_CODE_EXPIRED = 7] = "INVITE_CODE_EXPIRED";
})(sa || (sa = {}));
s.util.setEnumType(sa, "code.invite.v2.InvitePhoneNumberResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INVITE_COUNT_EXCEEDED" },
  { no: 2, name: "ALREADY_INVITED" },
  { no: 3, name: "USER_NOT_INVITED" },
  { no: 4, name: "INVALID_RECEIVER_PHONE_NUMBER" },
  { no: 5, name: "INVITE_CODE_NOT_FOUND" },
  { no: 6, name: "INVITE_CODE_REVOKED" },
  { no: 7, name: "INVITE_CODE_EXPIRED" }
]);
class li extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
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
    return s.util.equals(li, e, t);
  }
}
li.runtime = s;
li.typeName = "code.invite.v2.GetInvitationStatusRequest";
li.fields = s.util.newFieldList(() => [
  { no: 1, name: "user_id", kind: "message", T: dt }
]);
class fi extends N {
  constructor(e) {
    super(), this.result = oa.OK, this.status = ra.NOT_INVITED, s.util.initPartial(e, this);
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
    return s.util.equals(fi, e, t);
  }
}
fi.runtime = s;
fi.typeName = "code.invite.v2.GetInvitationStatusResponse";
fi.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(oa) },
  { no: 2, name: "status", kind: "enum", T: s.getEnumType(ra) }
]);
var oa;
(function(n) {
  n[n.OK = 0] = "OK";
})(oa || (oa = {}));
s.util.setEnumType(oa, "code.invite.v2.GetInvitationStatusResponse.Result", [
  { no: 0, name: "OK" }
]);
class mi extends N {
  constructor(e) {
    super(), this.value = "", s.util.initPartial(e, this);
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
    return s.util.equals(mi, e, t);
  }
}
mi.runtime = s;
mi.typeName = "code.invite.v2.InviteCode";
mi.fields = s.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 9 }
]);
class gs extends N {
  constructor(e) {
    super(), this.value = new Uint8Array(0), s.util.initPartial(e, this);
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
    return s.util.equals(gs, e, t);
  }
}
gs.runtime = s;
gs.typeName = "code.invite.v2.PageToken";
gs.fields = s.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
ne.Unary, ne.Unary, ne.Unary;
class jt extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
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
    return s.util.equals(jt, e, t);
  }
}
jt.runtime = s;
jt.typeName = "code.messaging.v1.OpenMessageStreamRequest";
jt.fields = s.util.newFieldList(() => [
  { no: 1, name: "rendezvous_key", kind: "message", T: rt },
  { no: 2, name: "signature", kind: "message", T: G }
]);
class zt extends N {
  constructor(e) {
    super(), this.messages = [], s.util.initPartial(e, this);
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
    return s.util.equals(zt, e, t);
  }
}
zt.runtime = s;
zt.typeName = "code.messaging.v1.OpenMessageStreamResponse";
zt.fields = s.util.newFieldList(() => [
  { no: 1, name: "messages", kind: "message", T: it, repeated: !0 }
]);
class di extends N {
  constructor(e) {
    super(), this.requestOrPong = { case: void 0 }, s.util.initPartial(e, this);
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
    return s.util.equals(di, e, t);
  }
}
di.runtime = s;
di.typeName = "code.messaging.v1.OpenMessageStreamWithKeepAliveRequest";
di.fields = s.util.newFieldList(() => [
  { no: 1, name: "request", kind: "message", T: jt, oneof: "requestOrPong" },
  { no: 2, name: "pong", kind: "message", T: Si, oneof: "requestOrPong" }
]);
class hi extends N {
  constructor(e) {
    super(), this.responseOrPing = { case: void 0 }, s.util.initPartial(e, this);
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
    return s.util.equals(hi, e, t);
  }
}
hi.runtime = s;
hi.typeName = "code.messaging.v1.OpenMessageStreamWithKeepAliveResponse";
hi.fields = s.util.newFieldList(() => [
  { no: 1, name: "response", kind: "message", T: zt, oneof: "responseOrPing" },
  { no: 2, name: "ping", kind: "message", T: Ii, oneof: "responseOrPing" }
]);
class pi extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
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
    return s.util.equals(pi, e, t);
  }
}
pi.runtime = s;
pi.typeName = "code.messaging.v1.PollMessagesRequest";
pi.fields = s.util.newFieldList(() => [
  { no: 1, name: "rendezvous_key", kind: "message", T: rt },
  { no: 2, name: "signature", kind: "message", T: G }
]);
class gi extends N {
  constructor(e) {
    super(), this.messages = [], s.util.initPartial(e, this);
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
    return s.util.equals(gi, e, t);
  }
}
gi.runtime = s;
gi.typeName = "code.messaging.v1.PollMessagesResponse";
gi.fields = s.util.newFieldList(() => [
  { no: 1, name: "messages", kind: "message", T: it, repeated: !0 }
]);
class wi extends N {
  constructor(e) {
    super(), this.messageIds = [], s.util.initPartial(e, this);
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
    return s.util.equals(wi, e, t);
  }
}
wi.runtime = s;
wi.typeName = "code.messaging.v1.AckMessagesRequest";
wi.fields = s.util.newFieldList(() => [
  { no: 1, name: "rendezvous_key", kind: "message", T: rt },
  { no: 2, name: "message_ids", kind: "message", T: xt, repeated: !0 }
]);
class yi extends N {
  constructor(e) {
    super(), this.result = aa.OK, s.util.initPartial(e, this);
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
    return s.util.equals(yi, e, t);
  }
}
yi.runtime = s;
yi.typeName = "code.messaging.v1.AckMesssagesResponse";
yi.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(aa) }
]);
var aa;
(function(n) {
  n[n.OK = 0] = "OK";
})(aa || (aa = {}));
s.util.setEnumType(aa, "code.messaging.v1.AckMesssagesResponse.Result", [
  { no: 0, name: "OK" }
]);
class Wt extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
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
    return s.util.equals(Wt, e, t);
  }
}
Wt.runtime = s;
Wt.typeName = "code.messaging.v1.SendMessageRequest";
Wt.fields = s.util.newFieldList(() => [
  { no: 1, name: "message", kind: "message", T: it },
  { no: 2, name: "rendezvous_key", kind: "message", T: rt },
  { no: 3, name: "signature", kind: "message", T: G }
]);
class Ti extends N {
  constructor(e) {
    super(), this.result = Zs.OK, s.util.initPartial(e, this);
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
    return s.util.equals(Ti, e, t);
  }
}
Ti.runtime = s;
Ti.typeName = "code.messaging.v1.SendMessageResponse";
Ti.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(Zs) },
  { no: 2, name: "message_id", kind: "message", T: xt }
]);
var Zs;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NO_ACTIVE_STREAM = 1] = "NO_ACTIVE_STREAM";
})(Zs || (Zs = {}));
s.util.setEnumType(Zs, "code.messaging.v1.SendMessageResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NO_ACTIVE_STREAM" }
]);
class rt extends N {
  constructor(e) {
    super(), this.value = new Uint8Array(0), s.util.initPartial(e, this);
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
    return s.util.equals(rt, e, t);
  }
}
rt.runtime = s;
rt.typeName = "code.messaging.v1.RendezvousKey";
rt.fields = s.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class xt extends N {
  constructor(e) {
    super(), this.value = new Uint8Array(0), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new xt().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new xt().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new xt().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(xt, e, t);
  }
}
xt.runtime = s;
xt.typeName = "code.messaging.v1.MessageId";
xt.fields = s.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class Ei extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
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
    return s.util.equals(Ei, e, t);
  }
}
Ei.runtime = s;
Ei.typeName = "code.messaging.v1.RequestToGrabBill";
Ei.fields = s.util.newFieldList(() => [
  { no: 1, name: "requestor_account", kind: "message", T: L }
]);
class Yt extends N {
  constructor(e) {
    super(), this.exchangeData = { case: void 0 }, s.util.initPartial(e, this);
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
    return s.util.equals(Yt, e, t);
  }
}
Yt.runtime = s;
Yt.typeName = "code.messaging.v1.RequestToReceiveBill";
Yt.fields = s.util.newFieldList(() => [
  { no: 1, name: "requestor_account", kind: "message", T: L },
  { no: 2, name: "exact", kind: "message", T: Me, oneof: "exchange_data" },
  { no: 3, name: "partial", kind: "message", T: bt, oneof: "exchange_data" },
  { no: 4, name: "domain", kind: "message", T: at },
  { no: 5, name: "verifier", kind: "message", T: L },
  { no: 6, name: "signature", kind: "message", T: G },
  { no: 7, name: "rendezvous_key", kind: "message", T: rt }
]);
class Ni extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
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
    return s.util.equals(Ni, e, t);
  }
}
Ni.runtime = s;
Ni.typeName = "code.messaging.v1.CodeScanned";
Ni.fields = s.util.newFieldList(() => [
  { no: 1, name: "timestamp", kind: "message", T: Fe }
]);
class bi extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
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
    return s.util.equals(bi, e, t);
  }
}
bi.runtime = s;
bi.typeName = "code.messaging.v1.ClientRejectedPayment";
bi.fields = s.util.newFieldList(() => [
  { no: 1, name: "intent_id", kind: "message", T: Ke }
]);
class xi extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
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
    return s.util.equals(xi, e, t);
  }
}
xi.runtime = s;
xi.typeName = "code.messaging.v1.IntentSubmitted";
xi.fields = s.util.newFieldList(() => [
  { no: 1, name: "intent_id", kind: "message", T: Ke },
  { no: 2, name: "metadata", kind: "message", T: Nt }
]);
class Bi extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
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
    return s.util.equals(Bi, e, t);
  }
}
Bi.runtime = s;
Bi.typeName = "code.messaging.v1.WebhookCalled";
Bi.fields = s.util.newFieldList(() => [
  { no: 1, name: "timestamp", kind: "message", T: Fe }
]);
class Rt extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
  }
  static fromBinary(e, t) {
    return new Rt().fromBinary(e, t);
  }
  static fromJson(e, t) {
    return new Rt().fromJson(e, t);
  }
  static fromJsonString(e, t) {
    return new Rt().fromJsonString(e, t);
  }
  static equals(e, t) {
    return s.util.equals(Rt, e, t);
  }
}
Rt.runtime = s;
Rt.typeName = "code.messaging.v1.RequestToLogin";
Rt.fields = s.util.newFieldList(() => [
  { no: 1, name: "domain", kind: "message", T: at },
  { no: 4, name: "verifier", kind: "message", T: L },
  { no: 5, name: "signature", kind: "message", T: G },
  { no: 6, name: "rendezvous_key", kind: "message", T: rt }
]);
class ki extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
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
    return s.util.equals(ki, e, t);
  }
}
ki.runtime = s;
ki.typeName = "code.messaging.v1.ClientRejectedLogin";
ki.fields = s.util.newFieldList(() => [
  { no: 4, name: "timestamp", kind: "message", T: Fe }
]);
class Oi extends N {
  constructor(e) {
    super(), this.airdropType = nn.UNKNOWN, s.util.initPartial(e, this);
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
    return s.util.equals(Oi, e, t);
  }
}
Oi.runtime = s;
Oi.typeName = "code.messaging.v1.AirdropReceived";
Oi.fields = s.util.newFieldList(() => [
  { no: 1, name: "airdrop_type", kind: "enum", T: s.getEnumType(nn) },
  { no: 2, name: "exchange_data", kind: "message", T: Me },
  { no: 3, name: "timestamp", kind: "message", T: Fe }
]);
class it extends N {
  constructor(e) {
    super(), this.kind = { case: void 0 }, s.util.initPartial(e, this);
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
    return s.util.equals(it, e, t);
  }
}
it.runtime = s;
it.typeName = "code.messaging.v1.Message";
it.fields = s.util.newFieldList(() => [
  { no: 1, name: "id", kind: "message", T: xt },
  { no: 3, name: "send_message_request_signature", kind: "message", T: G },
  { no: 2, name: "request_to_grab_bill", kind: "message", T: Ei, oneof: "kind" },
  { no: 5, name: "request_to_receive_bill", kind: "message", T: Yt, oneof: "kind" },
  { no: 6, name: "code_scanned", kind: "message", T: Ni, oneof: "kind" },
  { no: 7, name: "client_rejected_payment", kind: "message", T: bi, oneof: "kind" },
  { no: 8, name: "intent_submitted", kind: "message", T: xi, oneof: "kind" },
  { no: 9, name: "webhook_called", kind: "message", T: Bi, oneof: "kind" },
  { no: 10, name: "request_to_login", kind: "message", T: Rt, oneof: "kind" },
  { no: 12, name: "client_rejected_login", kind: "message", T: ki, oneof: "kind" },
  { no: 4, name: "airdrop_received", kind: "message", T: Oi, oneof: "kind" }
]);
class Ii extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
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
    return s.util.equals(Ii, e, t);
  }
}
Ii.runtime = s;
Ii.typeName = "code.messaging.v1.ServerPing";
Ii.fields = s.util.newFieldList(() => [
  { no: 1, name: "timestamp", kind: "message", T: Fe },
  { no: 2, name: "ping_delay", kind: "message", T: ln }
]);
class Si extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
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
    return s.util.equals(Si, e, t);
  }
}
Si.runtime = s;
Si.typeName = "code.messaging.v1.ClientPong";
Si.fields = s.util.newFieldList(() => [
  { no: 1, name: "timestamp", kind: "message", T: Fe }
]);
const Ud = {
  typeName: "code.messaging.v1.Messaging",
  methods: {
    openMessageStream: {
      name: "OpenMessageStream",
      I: jt,
      O: zt,
      kind: ne.ServerStreaming
    },
    openMessageStreamWithKeepAlive: {
      name: "OpenMessageStreamWithKeepAlive",
      I: di,
      O: hi,
      kind: ne.BiDiStreaming
    },
    pollMessages: {
      name: "PollMessages",
      I: pi,
      O: gi,
      kind: ne.Unary
    },
    ackMessages: {
      name: "AckMessages",
      I: wi,
      O: yi,
      kind: ne.Unary
    },
    sendMessage: {
      name: "SendMessage",
      I: Wt,
      O: Ti,
      kind: ne.Unary
    }
  }
};
class Xt extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
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
    return s.util.equals(Xt, e, t);
  }
}
Xt.runtime = s;
Xt.typeName = "code.micropayment.v1.GetStatusRequest";
Xt.fields = s.util.newFieldList(() => [
  { no: 1, name: "intent_id", kind: "message", T: Ke }
]);
class vi extends N {
  constructor(e) {
    super(), this.exists = !1, this.codeScanned = !1, this.intentSubmitted = !1, s.util.initPartial(e, this);
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
    return s.util.equals(vi, e, t);
  }
}
vi.runtime = s;
vi.typeName = "code.micropayment.v1.GetStatusResponse";
vi.fields = s.util.newFieldList(() => [
  { no: 1, name: "exists", kind: "scalar", T: 8 },
  { no: 2, name: "code_scanned", kind: "scalar", T: 8 },
  { no: 3, name: "intent_submitted", kind: "scalar", T: 8 }
]);
class Ji extends N {
  constructor(e) {
    super(), this.url = "", s.util.initPartial(e, this);
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
    return s.util.equals(Ji, e, t);
  }
}
Ji.runtime = s;
Ji.typeName = "code.micropayment.v1.RegisterWebhookRequest";
Ji.fields = s.util.newFieldList(() => [
  { no: 1, name: "intent_id", kind: "message", T: Ke },
  { no: 2, name: "url", kind: "scalar", T: 9 }
]);
class Fi extends N {
  constructor(e) {
    super(), this.result = ua.OK, s.util.initPartial(e, this);
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
    return s.util.equals(Fi, e, t);
  }
}
Fi.runtime = s;
Fi.typeName = "code.micropayment.v1.RegisterWebhookResponse";
Fi.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(ua) }
]);
var ua;
(function(n) {
  n[n.OK = 0] = "OK", n[n.ALREADY_REGISTERED = 1] = "ALREADY_REGISTERED", n[n.REQUEST_NOT_FOUND = 2] = "REQUEST_NOT_FOUND", n[n.INTENT_EXISTS = 3] = "INTENT_EXISTS", n[n.INVALID_URL = 4] = "INVALID_URL";
})(ua || (ua = {}));
s.util.setEnumType(ua, "code.micropayment.v1.RegisterWebhookResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "ALREADY_REGISTERED" },
  { no: 2, name: "REQUEST_NOT_FOUND" },
  { no: 3, name: "INTENT_EXISTS" },
  { no: 4, name: "INVALID_URL" }
]);
class Ai extends N {
  constructor(e) {
    super(), this.url = "", this.currency = "", this.nativeAmount = 0, s.util.initPartial(e, this);
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
    return s.util.equals(Ai, e, t);
  }
}
Ai.runtime = s;
Ai.typeName = "code.micropayment.v1.CodifyRequest";
Ai.fields = s.util.newFieldList(() => [
  { no: 1, name: "url", kind: "scalar", T: 9 },
  { no: 2, name: "currency", kind: "scalar", T: 9 },
  { no: 3, name: "native_amount", kind: "scalar", T: 1 },
  { no: 4, name: "owner_account", kind: "message", T: L },
  { no: 5, name: "primary_account", kind: "message", T: L },
  { no: 6, name: "signature", kind: "message", T: G }
]);
class Ui extends N {
  constructor(e) {
    super(), this.result = ca.OK, this.codifiedUrl = "", s.util.initPartial(e, this);
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
    return s.util.equals(Ui, e, t);
  }
}
Ui.runtime = s;
Ui.typeName = "code.micropayment.v1.CodifyResponse";
Ui.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(ca) },
  { no: 2, name: "codified_url", kind: "scalar", T: 9 }
]);
var ca;
(function(n) {
  n[n.OK = 0] = "OK", n[n.INVALID_URL = 1] = "INVALID_URL", n[n.INVALID_ACCOUNT = 2] = "INVALID_ACCOUNT", n[n.UNSUPPORTED_CURRENCY = 3] = "UNSUPPORTED_CURRENCY", n[n.NATIVE_AMOUNT_EXCEEDS_LIMIT = 4] = "NATIVE_AMOUNT_EXCEEDS_LIMIT";
})(ca || (ca = {}));
s.util.setEnumType(ca, "code.micropayment.v1.CodifyResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INVALID_URL" },
  { no: 2, name: "INVALID_ACCOUNT" },
  { no: 3, name: "UNSUPPORTED_CURRENCY" },
  { no: 4, name: "NATIVE_AMOUNT_EXCEEDS_LIMIT" }
]);
class Li extends N {
  constructor(e) {
    super(), this.path = "", s.util.initPartial(e, this);
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
    return s.util.equals(Li, e, t);
  }
}
Li.runtime = s;
Li.typeName = "code.micropayment.v1.GetPathMetadataRequest";
Li.fields = s.util.newFieldList(() => [
  { no: 1, name: "path", kind: "scalar", T: 9 }
]);
class Di extends N {
  constructor(e) {
    super(), this.result = la.OK, this.currency = "", this.nativeAmount = 0, this.redirctUrl = "", s.util.initPartial(e, this);
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
    return s.util.equals(Di, e, t);
  }
}
Di.runtime = s;
Di.typeName = "code.micropayment.v1.GetPathMetadataResponse";
Di.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(la) },
  { no: 2, name: "destination", kind: "message", T: L },
  { no: 3, name: "currency", kind: "scalar", T: 9 },
  { no: 4, name: "native_amount", kind: "scalar", T: 1 },
  { no: 5, name: "redirct_url", kind: "scalar", T: 9 }
]);
var la;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND";
})(la || (la = {}));
s.util.setEnumType(la, "code.micropayment.v1.GetPathMetadataResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" }
]);
const Ld = {
  typeName: "code.micropayment.v1.MicroPayment",
  methods: {
    getStatus: {
      name: "GetStatus",
      I: Xt,
      O: vi,
      kind: ne.Unary
    },
    registerWebhook: {
      name: "RegisterWebhook",
      I: Ji,
      O: Fi,
      kind: ne.Unary
    },
    codify: {
      name: "Codify",
      I: Ai,
      O: Ui,
      kind: ne.Unary
    },
    getPathMetadata: {
      name: "GetPathMetadata",
      I: Li,
      O: Di,
      kind: ne.Unary
    }
  }
};
class Ci extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
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
    return s.util.equals(Ci, e, t);
  }
}
Ci.runtime = s;
Ci.typeName = "code.phone.v1.SendVerificationCodeRequest";
Ci.fields = s.util.newFieldList(() => [
  { no: 1, name: "phone_number", kind: "message", T: Pe },
  { no: 2, name: "device_token", kind: "message", T: Kt }
]);
class qi extends N {
  constructor(e) {
    super(), this.result = fa.OK, s.util.initPartial(e, this);
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
    return s.util.equals(qi, e, t);
  }
}
qi.runtime = s;
qi.typeName = "code.phone.v1.SendVerificationCodeResponse";
qi.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(fa) }
]);
var fa;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_INVITED = 1] = "NOT_INVITED", n[n.RATE_LIMITED = 2] = "RATE_LIMITED", n[n.INVALID_PHONE_NUMBER = 3] = "INVALID_PHONE_NUMBER", n[n.UNSUPPORTED_PHONE_TYPE = 4] = "UNSUPPORTED_PHONE_TYPE";
})(fa || (fa = {}));
s.util.setEnumType(fa, "code.phone.v1.SendVerificationCodeResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_INVITED" },
  { no: 2, name: "RATE_LIMITED" },
  { no: 3, name: "INVALID_PHONE_NUMBER" },
  { no: 4, name: "UNSUPPORTED_PHONE_TYPE" }
]);
class Ki extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
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
    return s.util.equals(Ki, e, t);
  }
}
Ki.runtime = s;
Ki.typeName = "code.phone.v1.CheckVerificationCodeRequest";
Ki.fields = s.util.newFieldList(() => [
  { no: 1, name: "phone_number", kind: "message", T: Pe },
  { no: 2, name: "code", kind: "message", T: Zt }
]);
class Pi extends N {
  constructor(e) {
    super(), this.result = ma.OK, s.util.initPartial(e, this);
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
    return s.util.equals(Pi, e, t);
  }
}
Pi.runtime = s;
Pi.typeName = "code.phone.v1.CheckVerificationCodeResponse";
Pi.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(ma) },
  { no: 2, name: "linking_token", kind: "message", T: Gt }
]);
var ma;
(function(n) {
  n[n.OK = 0] = "OK", n[n.INVALID_CODE = 1] = "INVALID_CODE", n[n.NO_VERIFICATION = 2] = "NO_VERIFICATION", n[n.RATE_LIMITED = 3] = "RATE_LIMITED";
})(ma || (ma = {}));
s.util.setEnumType(ma, "code.phone.v1.CheckVerificationCodeResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INVALID_CODE" },
  { no: 2, name: "NO_VERIFICATION" },
  { no: 3, name: "RATE_LIMITED" }
]);
class $i extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
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
    return s.util.equals($i, e, t);
  }
}
$i.runtime = s;
$i.typeName = "code.phone.v1.GetAssociatedPhoneNumberRequest";
$i.fields = s.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: L },
  { no: 2, name: "signature", kind: "message", T: G }
]);
class _i extends N {
  constructor(e) {
    super(), this.result = da.OK, this.isLinked = !1, s.util.initPartial(e, this);
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
    return s.util.equals(_i, e, t);
  }
}
_i.runtime = s;
_i.typeName = "code.phone.v1.GetAssociatedPhoneNumberResponse";
_i.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(da) },
  { no: 2, name: "phone_number", kind: "message", T: Pe },
  { no: 3, name: "is_linked", kind: "scalar", T: 8 }
]);
var da;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND", n[n.NOT_INVITED = 2] = "NOT_INVITED", n[n.UNLOCKED_TIMELOCK_ACCOUNT = 3] = "UNLOCKED_TIMELOCK_ACCOUNT";
})(da || (da = {}));
s.util.setEnumType(da, "code.phone.v1.GetAssociatedPhoneNumberResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" },
  { no: 2, name: "NOT_INVITED" },
  { no: 3, name: "UNLOCKED_TIMELOCK_ACCOUNT" }
]);
class Zt extends N {
  constructor(e) {
    super(), this.value = "", s.util.initPartial(e, this);
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
    return s.util.equals(Zt, e, t);
  }
}
Zt.runtime = s;
Zt.typeName = "code.phone.v1.VerificationCode";
Zt.fields = s.util.newFieldList(() => [
  { no: 2, name: "value", kind: "scalar", T: 9 }
]);
class Gt extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
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
    return s.util.equals(Gt, e, t);
  }
}
Gt.runtime = s;
Gt.typeName = "code.phone.v1.PhoneLinkingToken";
Gt.fields = s.util.newFieldList(() => [
  { no: 1, name: "phone_number", kind: "message", T: Pe },
  { no: 2, name: "code", kind: "message", T: Zt }
]);
ne.Unary, ne.Unary, ne.Unary;
var ha;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.FCM_ANDROID = 1] = "FCM_ANDROID", n[n.FCM_APNS = 2] = "FCM_APNS";
})(ha || (ha = {}));
s.util.setEnumType(ha, "code.push.v1.TokenType", [
  { no: 0, name: "UNKNOWN" },
  { no: 1, name: "FCM_ANDROID" },
  { no: 2, name: "FCM_APNS" }
]);
class Mi extends N {
  constructor(e) {
    super(), this.pushToken = "", this.tokenType = ha.UNKNOWN, s.util.initPartial(e, this);
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
    return s.util.equals(Mi, e, t);
  }
}
Mi.runtime = s;
Mi.typeName = "code.push.v1.AddTokenRequest";
Mi.fields = s.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: L },
  { no: 2, name: "signature", kind: "message", T: G },
  { no: 3, name: "container_id", kind: "message", T: nt },
  { no: 4, name: "push_token", kind: "scalar", T: 9 },
  { no: 5, name: "token_type", kind: "enum", T: s.getEnumType(ha) },
  { no: 6, name: "app_install", kind: "message", T: Et }
]);
class Vi extends N {
  constructor(e) {
    super(), this.result = pa.OK, s.util.initPartial(e, this);
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
    return s.util.equals(Vi, e, t);
  }
}
Vi.runtime = s;
Vi.typeName = "code.push.v1.AddTokenResponse";
Vi.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(pa) }
]);
var pa;
(function(n) {
  n[n.OK = 0] = "OK", n[n.INVALID_PUSH_TOKEN = 1] = "INVALID_PUSH_TOKEN";
})(pa || (pa = {}));
s.util.setEnumType(pa, "code.push.v1.AddTokenResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INVALID_PUSH_TOKEN" }
]);
ne.Unary;
ne.BiDiStreaming, ne.Unary, ne.Unary, ne.Unary, ne.Unary, ne.Unary, ne.Unary, ne.Unary, ne.BiDiStreaming;
class Hi extends N {
  constructor(e) {
    super(), this.token = { case: void 0 }, s.util.initPartial(e, this);
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
    return s.util.equals(Hi, e, t);
  }
}
Hi.runtime = s;
Hi.typeName = "code.user.v1.LinkAccountRequest";
Hi.fields = s.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: L },
  { no: 2, name: "signature", kind: "message", T: G },
  { no: 3, name: "phone", kind: "message", T: Gt, oneof: "token" }
]);
class ji extends N {
  constructor(e) {
    super(), this.result = ga.OK, this.metadata = { case: void 0 }, s.util.initPartial(e, this);
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
    return s.util.equals(ji, e, t);
  }
}
ji.runtime = s;
ji.typeName = "code.user.v1.LinkAccountResponse";
ji.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(ga) },
  { no: 2, name: "user", kind: "message", T: Qt },
  { no: 3, name: "data_container_id", kind: "message", T: nt },
  { no: 5, name: "phone", kind: "message", T: en, oneof: "metadata" }
]);
var ga;
(function(n) {
  n[n.OK = 0] = "OK", n[n.INVALID_TOKEN = 1] = "INVALID_TOKEN", n[n.RATE_LIMITED = 2] = "RATE_LIMITED";
})(ga || (ga = {}));
s.util.setEnumType(ga, "code.user.v1.LinkAccountResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INVALID_TOKEN" },
  { no: 2, name: "RATE_LIMITED" }
]);
class zi extends N {
  constructor(e) {
    super(), this.identifyingFeature = { case: void 0 }, s.util.initPartial(e, this);
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
    return s.util.equals(zi, e, t);
  }
}
zi.runtime = s;
zi.typeName = "code.user.v1.UnlinkAccountRequest";
zi.fields = s.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: L },
  { no: 2, name: "signature", kind: "message", T: G },
  { no: 4, name: "phone_number", kind: "message", T: Pe, oneof: "identifying_feature" }
]);
class Wi extends N {
  constructor(e) {
    super(), this.result = wa.OK, s.util.initPartial(e, this);
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
    return s.util.equals(Wi, e, t);
  }
}
Wi.runtime = s;
Wi.typeName = "code.user.v1.UnlinkAccountResponse";
Wi.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(wa) }
]);
var wa;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NEVER_ASSOCIATED = 1] = "NEVER_ASSOCIATED";
})(wa || (wa = {}));
s.util.setEnumType(wa, "code.user.v1.UnlinkAccountResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NEVER_ASSOCIATED" }
]);
class Yi extends N {
  constructor(e) {
    super(), this.identifyingFeature = { case: void 0 }, s.util.initPartial(e, this);
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
    return s.util.equals(Yi, e, t);
  }
}
Yi.runtime = s;
Yi.typeName = "code.user.v1.GetUserRequest";
Yi.fields = s.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: L },
  { no: 2, name: "signature", kind: "message", T: G },
  { no: 3, name: "phone_number", kind: "message", T: Pe, oneof: "identifying_feature" }
]);
class Ri extends N {
  constructor(e) {
    super(), this.result = ya.OK, this.metadata = { case: void 0 }, this.enableInternalFlags = !1, this.eligibleAirdrops = [], s.util.initPartial(e, this);
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
    return s.util.equals(Ri, e, t);
  }
}
Ri.runtime = s;
Ri.typeName = "code.user.v1.GetUserResponse";
Ri.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(ya) },
  { no: 2, name: "user", kind: "message", T: Qt },
  { no: 3, name: "data_container_id", kind: "message", T: nt },
  { no: 5, name: "phone", kind: "message", T: en, oneof: "metadata" },
  { no: 6, name: "enable_internal_flags", kind: "scalar", T: 8 },
  { no: 7, name: "eligible_airdrops", kind: "enum", T: s.getEnumType(nn), repeated: !0 }
]);
var ya;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND", n[n.NOT_INVITED = 2] = "NOT_INVITED", n[n.UNLOCKED_TIMELOCK_ACCOUNT = 3] = "UNLOCKED_TIMELOCK_ACCOUNT";
})(ya || (ya = {}));
s.util.setEnumType(ya, "code.user.v1.GetUserResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" },
  { no: 2, name: "NOT_INVITED" },
  { no: 3, name: "UNLOCKED_TIMELOCK_ACCOUNT" }
]);
class Xi extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
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
    return s.util.equals(Xi, e, t);
  }
}
Xi.runtime = s;
Xi.typeName = "code.user.v1.LoginToThirdPartyAppRequest";
Xi.fields = s.util.newFieldList(() => [
  { no: 1, name: "intent_id", kind: "message", T: Ke },
  { no: 2, name: "user_id", kind: "message", T: L },
  { no: 3, name: "signature", kind: "message", T: G }
]);
class Zi extends N {
  constructor(e) {
    super(), this.result = Ta.OK, s.util.initPartial(e, this);
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
    return s.util.equals(Zi, e, t);
  }
}
Zi.runtime = s;
Zi.typeName = "code.user.v1.LoginToThirdPartyAppResponse";
Zi.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(Ta) }
]);
var Ta;
(function(n) {
  n[n.OK = 0] = "OK", n[n.REQUEST_NOT_FOUND = 1] = "REQUEST_NOT_FOUND", n[n.PAYMENT_REQUIRED = 2] = "PAYMENT_REQUIRED", n[n.LOGIN_NOT_SUPPORTED = 3] = "LOGIN_NOT_SUPPORTED", n[n.LOGIN_EXISTS = 4] = "LOGIN_EXISTS", n[n.INVALID_ACCOUNT = 5] = "INVALID_ACCOUNT";
})(Ta || (Ta = {}));
s.util.setEnumType(Ta, "code.user.v1.LoginToThirdPartyAppResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "REQUEST_NOT_FOUND" },
  { no: 2, name: "PAYMENT_REQUIRED" },
  { no: 3, name: "LOGIN_NOT_SUPPORTED" },
  { no: 4, name: "LOGIN_EXISTS" },
  { no: 5, name: "INVALID_ACCOUNT" }
]);
class Gi extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
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
    return s.util.equals(Gi, e, t);
  }
}
Gi.runtime = s;
Gi.typeName = "code.user.v1.GetLoginForThirdPartyAppRequest";
Gi.fields = s.util.newFieldList(() => [
  { no: 1, name: "intent_id", kind: "message", T: Ke },
  { no: 2, name: "verifier", kind: "message", T: L },
  { no: 3, name: "signature", kind: "message", T: G }
]);
class Qi extends N {
  constructor(e) {
    super(), this.result = Ea.OK, s.util.initPartial(e, this);
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
    return s.util.equals(Qi, e, t);
  }
}
Qi.runtime = s;
Qi.typeName = "code.user.v1.GetLoginForThirdPartyAppResponse";
Qi.fields = s.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: s.getEnumType(Ea) },
  { no: 2, name: "user_id", kind: "message", T: L }
]);
var Ea;
(function(n) {
  n[n.OK = 0] = "OK", n[n.REQUEST_NOT_FOUND = 1] = "REQUEST_NOT_FOUND", n[n.LOGIN_NOT_SUPPORTED = 2] = "LOGIN_NOT_SUPPORTED";
})(Ea || (Ea = {}));
s.util.setEnumType(Ea, "code.user.v1.GetLoginForThirdPartyAppResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "REQUEST_NOT_FOUND" },
  { no: 2, name: "LOGIN_NOT_SUPPORTED" }
]);
class Qt extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
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
    return s.util.equals(Qt, e, t);
  }
}
Qt.runtime = s;
Qt.typeName = "code.user.v1.User";
Qt.fields = s.util.newFieldList(() => [
  { no: 1, name: "id", kind: "message", T: dt },
  { no: 2, name: "view", kind: "message", T: es }
]);
class es extends N {
  constructor(e) {
    super(), s.util.initPartial(e, this);
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
    return s.util.equals(es, e, t);
  }
}
es.runtime = s;
es.typeName = "code.user.v1.View";
es.fields = s.util.newFieldList(() => [
  { no: 1, name: "phone_number", kind: "message", T: Pe }
]);
class en extends N {
  constructor(e) {
    super(), this.isLinked = !1, s.util.initPartial(e, this);
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
    return s.util.equals(en, e, t);
  }
}
en.runtime = s;
en.typeName = "code.user.v1.PhoneMetadata";
en.fields = s.util.newFieldList(() => [
  { no: 1, name: "is_linked", kind: "scalar", T: 8 }
]);
ne.Unary, ne.Unary, ne.Unary, ne.Unary, ne.Unary;
function Dd(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function Cd(n) {
  if (n.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var e = new Uint8Array(256), t = 0; t < e.length; t++)
    e[t] = 255;
  for (var r = 0; r < n.length; r++) {
    var i = n.charAt(r), o = i.charCodeAt(0);
    if (e[o] !== 255)
      throw new TypeError(i + " is ambiguous");
    e[o] = r;
  }
  var c = n.length, u = n.charAt(0), f = Math.log(c) / Math.log(256), m = Math.log(256) / Math.log(c);
  function h(b) {
    if (b instanceof Uint8Array || (ArrayBuffer.isView(b) ? b = new Uint8Array(b.buffer, b.byteOffset, b.byteLength) : Array.isArray(b) && (b = Uint8Array.from(b))), !(b instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (b.length === 0)
      return "";
    for (var S = 0, A = 0, M = 0, W = b.length; M !== W && b[M] === 0; )
      M++, S++;
    for (var me = (W - M) * m + 1 >>> 0, $ = new Uint8Array(me); M !== W; ) {
      for (var re = b[M], F = 0, Y = me - 1; (re !== 0 || F < A) && Y !== -1; Y--, F++)
        re += 256 * $[Y] >>> 0, $[Y] = re % c >>> 0, re = re / c >>> 0;
      if (re !== 0)
        throw new Error("Non-zero carry");
      A = F, M++;
    }
    for (var Q = me - A; Q !== me && $[Q] === 0; )
      Q++;
    for (var te = u.repeat(S); Q < me; ++Q)
      te += n.charAt($[Q]);
    return te;
  }
  function g(b) {
    if (typeof b != "string")
      throw new TypeError("Expected String");
    if (b.length === 0)
      return new Uint8Array();
    for (var S = 0, A = 0, M = 0; b[S] === u; )
      A++, S++;
    for (var W = (b.length - S) * f + 1 >>> 0, me = new Uint8Array(W); b[S]; ) {
      var $ = e[b.charCodeAt(S)];
      if ($ === 255)
        return;
      for (var re = 0, F = W - 1; ($ !== 0 || re < M) && F !== -1; F--, re++)
        $ += c * me[F] >>> 0, me[F] = $ % 256 >>> 0, $ = $ / 256 >>> 0;
      if ($ !== 0)
        throw new Error("Non-zero carry");
      M = re, S++;
    }
    for (var Y = W - M; Y !== W && me[Y] === 0; )
      Y++;
    for (var Q = new Uint8Array(A + (W - Y)), te = A; Y !== W; )
      Q[te++] = me[Y++];
    return Q;
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
var qd = Cd;
const Kd = qd, Pd = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
var $d = Kd(Pd);
const ru = /* @__PURE__ */ Dd($d);
var Bc = {}, wu = {};
wu.byteLength = Vd;
wu.toByteArray = jd;
wu.fromByteArray = Yd;
var Ut = [], ft = [], _d = typeof Uint8Array < "u" ? Uint8Array : Array, Cu = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var _s = 0, Md = Cu.length; _s < Md; ++_s)
  Ut[_s] = Cu[_s], ft[Cu.charCodeAt(_s)] = _s;
ft["-".charCodeAt(0)] = 62;
ft["_".charCodeAt(0)] = 63;
function Nf(n) {
  var e = n.length;
  if (e % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var t = n.indexOf("=");
  t === -1 && (t = e);
  var r = t === e ? 0 : 4 - t % 4;
  return [t, r];
}
function Vd(n) {
  var e = Nf(n), t = e[0], r = e[1];
  return (t + r) * 3 / 4 - r;
}
function Hd(n, e, t) {
  return (e + t) * 3 / 4 - t;
}
function jd(n) {
  var e, t = Nf(n), r = t[0], i = t[1], o = new _d(Hd(n, r, i)), c = 0, u = i > 0 ? r - 4 : r, f;
  for (f = 0; f < u; f += 4)
    e = ft[n.charCodeAt(f)] << 18 | ft[n.charCodeAt(f + 1)] << 12 | ft[n.charCodeAt(f + 2)] << 6 | ft[n.charCodeAt(f + 3)], o[c++] = e >> 16 & 255, o[c++] = e >> 8 & 255, o[c++] = e & 255;
  return i === 2 && (e = ft[n.charCodeAt(f)] << 2 | ft[n.charCodeAt(f + 1)] >> 4, o[c++] = e & 255), i === 1 && (e = ft[n.charCodeAt(f)] << 10 | ft[n.charCodeAt(f + 1)] << 4 | ft[n.charCodeAt(f + 2)] >> 2, o[c++] = e >> 8 & 255, o[c++] = e & 255), o;
}
function zd(n) {
  return Ut[n >> 18 & 63] + Ut[n >> 12 & 63] + Ut[n >> 6 & 63] + Ut[n & 63];
}
function Wd(n, e, t) {
  for (var r, i = [], o = e; o < t; o += 3)
    r = (n[o] << 16 & 16711680) + (n[o + 1] << 8 & 65280) + (n[o + 2] & 255), i.push(zd(r));
  return i.join("");
}
function Yd(n) {
  for (var e, t = n.length, r = t % 3, i = [], o = 16383, c = 0, u = t - r; c < u; c += o)
    i.push(Wd(n, c, c + o > u ? u : c + o));
  return r === 1 ? (e = n[t - 1], i.push(
    Ut[e >> 2] + Ut[e << 4 & 63] + "=="
  )) : r === 2 && (e = (n[t - 2] << 8) + n[t - 1], i.push(
    Ut[e >> 10] + Ut[e >> 4 & 63] + Ut[e << 2 & 63] + "="
  )), i.join("");
}
var kc = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
kc.read = function(n, e, t, r, i) {
  var o, c, u = i * 8 - r - 1, f = (1 << u) - 1, m = f >> 1, h = -7, g = t ? i - 1 : 0, y = t ? -1 : 1, b = n[e + g];
  for (g += y, o = b & (1 << -h) - 1, b >>= -h, h += u; h > 0; o = o * 256 + n[e + g], g += y, h -= 8)
    ;
  for (c = o & (1 << -h) - 1, o >>= -h, h += r; h > 0; c = c * 256 + n[e + g], g += y, h -= 8)
    ;
  if (o === 0)
    o = 1 - m;
  else {
    if (o === f)
      return c ? NaN : (b ? -1 : 1) * (1 / 0);
    c = c + Math.pow(2, r), o = o - m;
  }
  return (b ? -1 : 1) * c * Math.pow(2, o - r);
};
kc.write = function(n, e, t, r, i, o) {
  var c, u, f, m = o * 8 - i - 1, h = (1 << m) - 1, g = h >> 1, y = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, b = r ? 0 : o - 1, S = r ? 1 : -1, A = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
  for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (u = isNaN(e) ? 1 : 0, c = h) : (c = Math.floor(Math.log(e) / Math.LN2), e * (f = Math.pow(2, -c)) < 1 && (c--, f *= 2), c + g >= 1 ? e += y / f : e += y * Math.pow(2, 1 - g), e * f >= 2 && (c++, f /= 2), c + g >= h ? (u = 0, c = h) : c + g >= 1 ? (u = (e * f - 1) * Math.pow(2, i), c = c + g) : (u = e * Math.pow(2, g - 1) * Math.pow(2, i), c = 0)); i >= 8; n[t + b] = u & 255, b += S, u /= 256, i -= 8)
    ;
  for (c = c << i | u, m += i; m > 0; n[t + b] = c & 255, b += S, c /= 256, m -= 8)
    ;
  n[t + b - S] |= A * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(n) {
  const e = wu, t = kc, r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  n.Buffer = u, n.SlowBuffer = me, n.INSPECT_MAX_BYTES = 50;
  const i = 2147483647;
  n.kMaxLength = i, u.TYPED_ARRAY_SUPPORT = o(), !u.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function o() {
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
    const T = M(d);
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
    return m(d), c(d < 0 ? 0 : W(d) | 0);
  }
  u.allocUnsafe = function(d) {
    return g(d);
  }, u.allocUnsafeSlow = function(d) {
    return g(d);
  };
  function y(d, a) {
    if ((typeof a != "string" || a === "") && (a = "utf8"), !u.isEncoding(a))
      throw new TypeError("Unknown encoding: " + a);
    const l = $(d, a) | 0;
    let p = c(l);
    const T = p.write(d, a);
    return T !== l && (p = p.slice(0, T)), p;
  }
  function b(d) {
    const a = d.length < 0 ? 0 : W(d.length) | 0, l = c(a);
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
  function M(d) {
    if (u.isBuffer(d)) {
      const a = W(d.length) | 0, l = c(a);
      return l.length === 0 || d.copy(l, 0, 0, a), l;
    }
    if (d.length !== void 0)
      return typeof d.length != "number" || j(d.length) ? c(0) : b(d);
    if (d.type === "Buffer" && Array.isArray(d.data))
      return b(d.data);
  }
  function W(d) {
    if (d >= i)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
    return d | 0;
  }
  function me(d) {
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
    for (let x = 0, k = Math.min(p, T); x < k; ++x)
      if (a[x] !== l[x]) {
        p = a[x], T = l[x];
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
    let x = 0;
    for (p = 0; p < a.length; ++p) {
      let k = a[p];
      if (O(k, Uint8Array))
        x + k.length > T.length ? (u.isBuffer(k) || (k = u.from(k)), k.copy(T, x)) : Uint8Array.prototype.set.call(
          T,
          k,
          x
        );
      else if (u.isBuffer(k))
        k.copy(T, x);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      x += k.length;
    }
    return T;
  };
  function $(d, a) {
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
          return I(d).length;
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
            return p ? -1 : I(d).length;
          a = ("" + a).toLowerCase(), T = !0;
      }
  }
  u.byteLength = $;
  function re(d, a, l) {
    let p = !1;
    if ((a === void 0 || a < 0) && (a = 0), a > this.length || ((l === void 0 || l > this.length) && (l = this.length), l <= 0) || (l >>>= 0, a >>>= 0, l <= a))
      return "";
    for (d || (d = "utf8"); ; )
      switch (d) {
        case "hex":
          return q(this, a, l);
        case "utf8":
        case "utf-8":
          return sn(this, a, l);
        case "ascii":
          return he(this, a, l);
        case "latin1":
        case "binary":
          return P(this, a, l);
        case "base64":
          return Ze(this, a, l);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return R(this, a, l);
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
    return a === 0 ? "" : arguments.length === 0 ? sn(this, 0, a) : re.apply(this, arguments);
  }, u.prototype.toLocaleString = u.prototype.toString, u.prototype.equals = function(a) {
    if (!u.isBuffer(a))
      throw new TypeError("Argument must be a Buffer");
    return this === a ? !0 : u.compare(this, a) === 0;
  }, u.prototype.inspect = function() {
    let a = "";
    const l = n.INSPECT_MAX_BYTES;
    return a = this.toString("hex", 0, l).replace(/(.{2})/g, "$1 ").trim(), this.length > l && (a += " ... "), "<Buffer " + a + ">";
  }, r && (u.prototype[r] = u.prototype.inspect), u.prototype.compare = function(a, l, p, T, x) {
    if (O(a, Uint8Array) && (a = u.from(a, a.offset, a.byteLength)), !u.isBuffer(a))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof a
      );
    if (l === void 0 && (l = 0), p === void 0 && (p = a ? a.length : 0), T === void 0 && (T = 0), x === void 0 && (x = this.length), l < 0 || p > a.length || T < 0 || x > this.length)
      throw new RangeError("out of range index");
    if (T >= x && l >= p)
      return 0;
    if (T >= x)
      return -1;
    if (l >= p)
      return 1;
    if (l >>>= 0, p >>>= 0, T >>>= 0, x >>>= 0, this === a)
      return 0;
    let k = x - T, ie = p - l;
    const ke = Math.min(k, ie), le = this.slice(T, x), ye = a.slice(l, p);
    for (let Te = 0; Te < ke; ++Te)
      if (le[Te] !== ye[Te]) {
        k = le[Te], ie = ye[Te];
        break;
      }
    return k < ie ? -1 : ie < k ? 1 : 0;
  };
  function Y(d, a, l, p, T) {
    if (d.length === 0)
      return -1;
    if (typeof l == "string" ? (p = l, l = 0) : l > 2147483647 ? l = 2147483647 : l < -2147483648 && (l = -2147483648), l = +l, j(l) && (l = T ? 0 : d.length - 1), l < 0 && (l = d.length + l), l >= d.length) {
      if (T)
        return -1;
      l = d.length - 1;
    } else if (l < 0)
      if (T)
        l = 0;
      else
        return -1;
    if (typeof a == "string" && (a = u.from(a, p)), u.isBuffer(a))
      return a.length === 0 ? -1 : Q(d, a, l, p, T);
    if (typeof a == "number")
      return a = a & 255, typeof Uint8Array.prototype.indexOf == "function" ? T ? Uint8Array.prototype.indexOf.call(d, a, l) : Uint8Array.prototype.lastIndexOf.call(d, a, l) : Q(d, [a], l, p, T);
    throw new TypeError("val must be string, number or Buffer");
  }
  function Q(d, a, l, p, T) {
    let x = 1, k = d.length, ie = a.length;
    if (p !== void 0 && (p = String(p).toLowerCase(), p === "ucs2" || p === "ucs-2" || p === "utf16le" || p === "utf-16le")) {
      if (d.length < 2 || a.length < 2)
        return -1;
      x = 2, k /= 2, ie /= 2, l /= 2;
    }
    function ke(ye, Te) {
      return x === 1 ? ye[Te] : ye.readUInt16BE(Te * x);
    }
    let le;
    if (T) {
      let ye = -1;
      for (le = l; le < k; le++)
        if (ke(d, le) === ke(a, ye === -1 ? 0 : le - ye)) {
          if (ye === -1 && (ye = le), le - ye + 1 === ie)
            return ye * x;
        } else
          ye !== -1 && (le -= le - ye), ye = -1;
    } else
      for (l + ie > k && (l = k - ie), le = l; le >= 0; le--) {
        let ye = !0;
        for (let Te = 0; Te < ie; Te++)
          if (ke(d, le + Te) !== ke(a, Te)) {
            ye = !1;
            break;
          }
        if (ye)
          return le;
      }
    return -1;
  }
  u.prototype.includes = function(a, l, p) {
    return this.indexOf(a, l, p) !== -1;
  }, u.prototype.indexOf = function(a, l, p) {
    return Y(this, a, l, p, !0);
  }, u.prototype.lastIndexOf = function(a, l, p) {
    return Y(this, a, l, p, !1);
  };
  function te(d, a, l, p) {
    l = Number(l) || 0;
    const T = d.length - l;
    p ? (p = Number(p), p > T && (p = T)) : p = T;
    const x = a.length;
    p > x / 2 && (p = x / 2);
    let k;
    for (k = 0; k < p; ++k) {
      const ie = parseInt(a.substr(k * 2, 2), 16);
      if (j(ie))
        return k;
      d[l + k] = ie;
    }
    return k;
  }
  function ae(d, a, l, p) {
    return C(I(a, d.length - l), d, l, p);
  }
  function Be(d, a, l, p) {
    return C(D(a), d, l, p);
  }
  function Ie(d, a, l, p) {
    return C(U(a), d, l, p);
  }
  function Le(d, a, l, p) {
    return C(_(a, d.length - l), d, l, p);
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
    const x = this.length - l;
    if ((p === void 0 || p > x) && (p = x), a.length > 0 && (p < 0 || l < 0) || l > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    T || (T = "utf8");
    let k = !1;
    for (; ; )
      switch (T) {
        case "hex":
          return te(this, a, l, p);
        case "utf8":
        case "utf-8":
          return ae(this, a, l, p);
        case "ascii":
        case "latin1":
        case "binary":
          return Be(this, a, l, p);
        case "base64":
          return Ie(this, a, l, p);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Le(this, a, l, p);
        default:
          if (k)
            throw new TypeError("Unknown encoding: " + T);
          T = ("" + T).toLowerCase(), k = !0;
      }
  }, u.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function Ze(d, a, l) {
    return a === 0 && l === d.length ? e.fromByteArray(d) : e.fromByteArray(d.slice(a, l));
  }
  function sn(d, a, l) {
    l = Math.min(d.length, l);
    const p = [];
    let T = a;
    for (; T < l; ) {
      const x = d[T];
      let k = null, ie = x > 239 ? 4 : x > 223 ? 3 : x > 191 ? 2 : 1;
      if (T + ie <= l) {
        let ke, le, ye, Te;
        switch (ie) {
          case 1:
            x < 128 && (k = x);
            break;
          case 2:
            ke = d[T + 1], (ke & 192) === 128 && (Te = (x & 31) << 6 | ke & 63, Te > 127 && (k = Te));
            break;
          case 3:
            ke = d[T + 1], le = d[T + 2], (ke & 192) === 128 && (le & 192) === 128 && (Te = (x & 15) << 12 | (ke & 63) << 6 | le & 63, Te > 2047 && (Te < 55296 || Te > 57343) && (k = Te));
            break;
          case 4:
            ke = d[T + 1], le = d[T + 2], ye = d[T + 3], (ke & 192) === 128 && (le & 192) === 128 && (ye & 192) === 128 && (Te = (x & 15) << 18 | (ke & 63) << 12 | (le & 63) << 6 | ye & 63, Te > 65535 && Te < 1114112 && (k = Te));
        }
      }
      k === null ? (k = 65533, ie = 1) : k > 65535 && (k -= 65536, p.push(k >>> 10 & 1023 | 55296), k = 56320 | k & 1023), p.push(k), T += ie;
    }
    return _e(p);
  }
  const je = 4096;
  function _e(d) {
    const a = d.length;
    if (a <= je)
      return String.fromCharCode.apply(String, d);
    let l = "", p = 0;
    for (; p < a; )
      l += String.fromCharCode.apply(
        String,
        d.slice(p, p += je)
      );
    return l;
  }
  function he(d, a, l) {
    let p = "";
    l = Math.min(d.length, l);
    for (let T = a; T < l; ++T)
      p += String.fromCharCode(d[T] & 127);
    return p;
  }
  function P(d, a, l) {
    let p = "";
    l = Math.min(d.length, l);
    for (let T = a; T < l; ++T)
      p += String.fromCharCode(d[T]);
    return p;
  }
  function q(d, a, l) {
    const p = d.length;
    (!a || a < 0) && (a = 0), (!l || l < 0 || l > p) && (l = p);
    let T = "";
    for (let x = a; x < l; ++x)
      T += V[d[x]];
    return T;
  }
  function R(d, a, l) {
    const p = d.slice(a, l);
    let T = "";
    for (let x = 0; x < p.length - 1; x += 2)
      T += String.fromCharCode(p[x] + p[x + 1] * 256);
    return T;
  }
  u.prototype.slice = function(a, l) {
    const p = this.length;
    a = ~~a, l = l === void 0 ? p : ~~l, a < 0 ? (a += p, a < 0 && (a = 0)) : a > p && (a = p), l < 0 ? (l += p, l < 0 && (l = 0)) : l > p && (l = p), l < a && (l = a);
    const T = this.subarray(a, l);
    return Object.setPrototypeOf(T, u.prototype), T;
  };
  function z(d, a, l) {
    if (d % 1 !== 0 || d < 0)
      throw new RangeError("offset is not uint");
    if (d + a > l)
      throw new RangeError("Trying to access beyond buffer length");
  }
  u.prototype.readUintLE = u.prototype.readUIntLE = function(a, l, p) {
    a = a >>> 0, l = l >>> 0, p || z(a, l, this.length);
    let T = this[a], x = 1, k = 0;
    for (; ++k < l && (x *= 256); )
      T += this[a + k] * x;
    return T;
  }, u.prototype.readUintBE = u.prototype.readUIntBE = function(a, l, p) {
    a = a >>> 0, l = l >>> 0, p || z(a, l, this.length);
    let T = this[a + --l], x = 1;
    for (; l > 0 && (x *= 256); )
      T += this[a + --l] * x;
    return T;
  }, u.prototype.readUint8 = u.prototype.readUInt8 = function(a, l) {
    return a = a >>> 0, l || z(a, 1, this.length), this[a];
  }, u.prototype.readUint16LE = u.prototype.readUInt16LE = function(a, l) {
    return a = a >>> 0, l || z(a, 2, this.length), this[a] | this[a + 1] << 8;
  }, u.prototype.readUint16BE = u.prototype.readUInt16BE = function(a, l) {
    return a = a >>> 0, l || z(a, 2, this.length), this[a] << 8 | this[a + 1];
  }, u.prototype.readUint32LE = u.prototype.readUInt32LE = function(a, l) {
    return a = a >>> 0, l || z(a, 4, this.length), (this[a] | this[a + 1] << 8 | this[a + 2] << 16) + this[a + 3] * 16777216;
  }, u.prototype.readUint32BE = u.prototype.readUInt32BE = function(a, l) {
    return a = a >>> 0, l || z(a, 4, this.length), this[a] * 16777216 + (this[a + 1] << 16 | this[a + 2] << 8 | this[a + 3]);
  }, u.prototype.readBigUInt64LE = H(function(a) {
    a = a >>> 0, w(a, "offset");
    const l = this[a], p = this[a + 7];
    (l === void 0 || p === void 0) && E(a, this.length - 8);
    const T = l + this[++a] * 2 ** 8 + this[++a] * 2 ** 16 + this[++a] * 2 ** 24, x = this[++a] + this[++a] * 2 ** 8 + this[++a] * 2 ** 16 + p * 2 ** 24;
    return BigInt(T) + (BigInt(x) << BigInt(32));
  }), u.prototype.readBigUInt64BE = H(function(a) {
    a = a >>> 0, w(a, "offset");
    const l = this[a], p = this[a + 7];
    (l === void 0 || p === void 0) && E(a, this.length - 8);
    const T = l * 2 ** 24 + this[++a] * 2 ** 16 + this[++a] * 2 ** 8 + this[++a], x = this[++a] * 2 ** 24 + this[++a] * 2 ** 16 + this[++a] * 2 ** 8 + p;
    return (BigInt(T) << BigInt(32)) + BigInt(x);
  }), u.prototype.readIntLE = function(a, l, p) {
    a = a >>> 0, l = l >>> 0, p || z(a, l, this.length);
    let T = this[a], x = 1, k = 0;
    for (; ++k < l && (x *= 256); )
      T += this[a + k] * x;
    return x *= 128, T >= x && (T -= Math.pow(2, 8 * l)), T;
  }, u.prototype.readIntBE = function(a, l, p) {
    a = a >>> 0, l = l >>> 0, p || z(a, l, this.length);
    let T = l, x = 1, k = this[a + --T];
    for (; T > 0 && (x *= 256); )
      k += this[a + --T] * x;
    return x *= 128, k >= x && (k -= Math.pow(2, 8 * l)), k;
  }, u.prototype.readInt8 = function(a, l) {
    return a = a >>> 0, l || z(a, 1, this.length), this[a] & 128 ? (255 - this[a] + 1) * -1 : this[a];
  }, u.prototype.readInt16LE = function(a, l) {
    a = a >>> 0, l || z(a, 2, this.length);
    const p = this[a] | this[a + 1] << 8;
    return p & 32768 ? p | 4294901760 : p;
  }, u.prototype.readInt16BE = function(a, l) {
    a = a >>> 0, l || z(a, 2, this.length);
    const p = this[a + 1] | this[a] << 8;
    return p & 32768 ? p | 4294901760 : p;
  }, u.prototype.readInt32LE = function(a, l) {
    return a = a >>> 0, l || z(a, 4, this.length), this[a] | this[a + 1] << 8 | this[a + 2] << 16 | this[a + 3] << 24;
  }, u.prototype.readInt32BE = function(a, l) {
    return a = a >>> 0, l || z(a, 4, this.length), this[a] << 24 | this[a + 1] << 16 | this[a + 2] << 8 | this[a + 3];
  }, u.prototype.readBigInt64LE = H(function(a) {
    a = a >>> 0, w(a, "offset");
    const l = this[a], p = this[a + 7];
    (l === void 0 || p === void 0) && E(a, this.length - 8);
    const T = this[a + 4] + this[a + 5] * 2 ** 8 + this[a + 6] * 2 ** 16 + (p << 24);
    return (BigInt(T) << BigInt(32)) + BigInt(l + this[++a] * 2 ** 8 + this[++a] * 2 ** 16 + this[++a] * 2 ** 24);
  }), u.prototype.readBigInt64BE = H(function(a) {
    a = a >>> 0, w(a, "offset");
    const l = this[a], p = this[a + 7];
    (l === void 0 || p === void 0) && E(a, this.length - 8);
    const T = (l << 24) + // Overflow
    this[++a] * 2 ** 16 + this[++a] * 2 ** 8 + this[++a];
    return (BigInt(T) << BigInt(32)) + BigInt(this[++a] * 2 ** 24 + this[++a] * 2 ** 16 + this[++a] * 2 ** 8 + p);
  }), u.prototype.readFloatLE = function(a, l) {
    return a = a >>> 0, l || z(a, 4, this.length), t.read(this, a, !0, 23, 4);
  }, u.prototype.readFloatBE = function(a, l) {
    return a = a >>> 0, l || z(a, 4, this.length), t.read(this, a, !1, 23, 4);
  }, u.prototype.readDoubleLE = function(a, l) {
    return a = a >>> 0, l || z(a, 8, this.length), t.read(this, a, !0, 52, 8);
  }, u.prototype.readDoubleBE = function(a, l) {
    return a = a >>> 0, l || z(a, 8, this.length), t.read(this, a, !1, 52, 8);
  };
  function X(d, a, l, p, T, x) {
    if (!u.isBuffer(d))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (a > T || a < x)
      throw new RangeError('"value" argument is out of bounds');
    if (l + p > d.length)
      throw new RangeError("Index out of range");
  }
  u.prototype.writeUintLE = u.prototype.writeUIntLE = function(a, l, p, T) {
    if (a = +a, l = l >>> 0, p = p >>> 0, !T) {
      const ie = Math.pow(2, 8 * p) - 1;
      X(this, a, l, p, ie, 0);
    }
    let x = 1, k = 0;
    for (this[l] = a & 255; ++k < p && (x *= 256); )
      this[l + k] = a / x & 255;
    return l + p;
  }, u.prototype.writeUintBE = u.prototype.writeUIntBE = function(a, l, p, T) {
    if (a = +a, l = l >>> 0, p = p >>> 0, !T) {
      const ie = Math.pow(2, 8 * p) - 1;
      X(this, a, l, p, ie, 0);
    }
    let x = p - 1, k = 1;
    for (this[l + x] = a & 255; --x >= 0 && (k *= 256); )
      this[l + x] = a / k & 255;
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
  function ue(d, a, l, p, T) {
    Ye(a, p, T, d, l, 7);
    let x = Number(a & BigInt(4294967295));
    d[l++] = x, x = x >> 8, d[l++] = x, x = x >> 8, d[l++] = x, x = x >> 8, d[l++] = x;
    let k = Number(a >> BigInt(32) & BigInt(4294967295));
    return d[l++] = k, k = k >> 8, d[l++] = k, k = k >> 8, d[l++] = k, k = k >> 8, d[l++] = k, l;
  }
  function ge(d, a, l, p, T) {
    Ye(a, p, T, d, l, 7);
    let x = Number(a & BigInt(4294967295));
    d[l + 7] = x, x = x >> 8, d[l + 6] = x, x = x >> 8, d[l + 5] = x, x = x >> 8, d[l + 4] = x;
    let k = Number(a >> BigInt(32) & BigInt(4294967295));
    return d[l + 3] = k, k = k >> 8, d[l + 2] = k, k = k >> 8, d[l + 1] = k, k = k >> 8, d[l] = k, l + 8;
  }
  u.prototype.writeBigUInt64LE = H(function(a, l = 0) {
    return ue(this, a, l, BigInt(0), BigInt("0xffffffffffffffff"));
  }), u.prototype.writeBigUInt64BE = H(function(a, l = 0) {
    return ge(this, a, l, BigInt(0), BigInt("0xffffffffffffffff"));
  }), u.prototype.writeIntLE = function(a, l, p, T) {
    if (a = +a, l = l >>> 0, !T) {
      const ke = Math.pow(2, 8 * p - 1);
      X(this, a, l, p, ke - 1, -ke);
    }
    let x = 0, k = 1, ie = 0;
    for (this[l] = a & 255; ++x < p && (k *= 256); )
      a < 0 && ie === 0 && this[l + x - 1] !== 0 && (ie = 1), this[l + x] = (a / k >> 0) - ie & 255;
    return l + p;
  }, u.prototype.writeIntBE = function(a, l, p, T) {
    if (a = +a, l = l >>> 0, !T) {
      const ke = Math.pow(2, 8 * p - 1);
      X(this, a, l, p, ke - 1, -ke);
    }
    let x = p - 1, k = 1, ie = 0;
    for (this[l + x] = a & 255; --x >= 0 && (k *= 256); )
      a < 0 && ie === 0 && this[l + x + 1] !== 0 && (ie = 1), this[l + x] = (a / k >> 0) - ie & 255;
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
  }, u.prototype.writeBigInt64LE = H(function(a, l = 0) {
    return ue(this, a, l, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), u.prototype.writeBigInt64BE = H(function(a, l = 0) {
    return ge(this, a, l, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function be(d, a, l, p, T, x) {
    if (l + p > d.length)
      throw new RangeError("Index out of range");
    if (l < 0)
      throw new RangeError("Index out of range");
  }
  function we(d, a, l, p, T) {
    return a = +a, l = l >>> 0, T || be(d, a, l, 4), t.write(d, a, l, p, 23, 4), l + 4;
  }
  u.prototype.writeFloatLE = function(a, l, p) {
    return we(this, a, l, !0, p);
  }, u.prototype.writeFloatBE = function(a, l, p) {
    return we(this, a, l, !1, p);
  };
  function pe(d, a, l, p, T) {
    return a = +a, l = l >>> 0, T || be(d, a, l, 8), t.write(d, a, l, p, 52, 8), l + 8;
  }
  u.prototype.writeDoubleLE = function(a, l, p) {
    return pe(this, a, l, !0, p);
  }, u.prototype.writeDoubleBE = function(a, l, p) {
    return pe(this, a, l, !1, p);
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
    const x = T - p;
    return this === a && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(l, p, T) : Uint8Array.prototype.set.call(
      a,
      this.subarray(p, T),
      l
    ), x;
  }, u.prototype.fill = function(a, l, p, T) {
    if (typeof a == "string") {
      if (typeof l == "string" ? (T = l, l = 0, p = this.length) : typeof p == "string" && (T = p, p = this.length), T !== void 0 && typeof T != "string")
        throw new TypeError("encoding must be a string");
      if (typeof T == "string" && !u.isEncoding(T))
        throw new TypeError("Unknown encoding: " + T);
      if (a.length === 1) {
        const k = a.charCodeAt(0);
        (T === "utf8" && k < 128 || T === "latin1") && (a = k);
      }
    } else
      typeof a == "number" ? a = a & 255 : typeof a == "boolean" && (a = Number(a));
    if (l < 0 || this.length < l || this.length < p)
      throw new RangeError("Out of range index");
    if (p <= l)
      return this;
    l = l >>> 0, p = p === void 0 ? this.length : p >>> 0, a || (a = 0);
    let x;
    if (typeof a == "number")
      for (x = l; x < p; ++x)
        this[x] = a;
    else {
      const k = u.isBuffer(a) ? a : u.from(a, T), ie = k.length;
      if (ie === 0)
        throw new TypeError('The value "' + a + '" is invalid for argument "value"');
      for (x = 0; x < p - l; ++x)
        this[x + l] = k[x % ie];
    }
    return this;
  };
  const Ne = {};
  function ve(d, a, l) {
    Ne[d] = class extends l {
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
      return Number.isInteger(l) && Math.abs(l) > 2 ** 32 ? T = De(String(l)) : typeof l == "bigint" && (T = String(l), (l > BigInt(2) ** BigInt(32) || l < -(BigInt(2) ** BigInt(32))) && (T = De(T)), T += "n"), p += ` It must be ${a}. Received ${T}`, p;
    },
    RangeError
  );
  function De(d) {
    let a = "", l = d.length;
    const p = d[0] === "-" ? 1 : 0;
    for (; l >= p + 4; l -= 3)
      a = `_${d.slice(l - 3, l)}${a}`;
    return `${d.slice(0, l)}${a}`;
  }
  function Ce(d, a, l) {
    w(a, "offset"), (d[a] === void 0 || d[a + l] === void 0) && E(a, d.length - (l + 1));
  }
  function Ye(d, a, l, p, T, x) {
    if (d > l || d < a) {
      const k = typeof a == "bigint" ? "n" : "";
      let ie;
      throw x > 3 ? a === 0 || a === BigInt(0) ? ie = `>= 0${k} and < 2${k} ** ${(x + 1) * 8}${k}` : ie = `>= -(2${k} ** ${(x + 1) * 8 - 1}${k}) and < 2 ** ${(x + 1) * 8 - 1}${k}` : ie = `>= ${a}${k} and <= ${l}${k}`, new Ne.ERR_OUT_OF_RANGE("value", ie, d);
    }
    Ce(p, T, x);
  }
  function w(d, a) {
    if (typeof d != "number")
      throw new Ne.ERR_INVALID_ARG_TYPE(a, "number", d);
  }
  function E(d, a, l) {
    throw Math.floor(d) !== d ? (w(d, l), new Ne.ERR_OUT_OF_RANGE(l || "offset", "an integer", d)) : a < 0 ? new Ne.ERR_BUFFER_OUT_OF_BOUNDS() : new Ne.ERR_OUT_OF_RANGE(
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
  function I(d, a) {
    a = a || 1 / 0;
    let l;
    const p = d.length;
    let T = null;
    const x = [];
    for (let k = 0; k < p; ++k) {
      if (l = d.charCodeAt(k), l > 55295 && l < 57344) {
        if (!T) {
          if (l > 56319) {
            (a -= 3) > -1 && x.push(239, 191, 189);
            continue;
          } else if (k + 1 === p) {
            (a -= 3) > -1 && x.push(239, 191, 189);
            continue;
          }
          T = l;
          continue;
        }
        if (l < 56320) {
          (a -= 3) > -1 && x.push(239, 191, 189), T = l;
          continue;
        }
        l = (T - 55296 << 10 | l - 56320) + 65536;
      } else
        T && (a -= 3) > -1 && x.push(239, 191, 189);
      if (T = null, l < 128) {
        if ((a -= 1) < 0)
          break;
        x.push(l);
      } else if (l < 2048) {
        if ((a -= 2) < 0)
          break;
        x.push(
          l >> 6 | 192,
          l & 63 | 128
        );
      } else if (l < 65536) {
        if ((a -= 3) < 0)
          break;
        x.push(
          l >> 12 | 224,
          l >> 6 & 63 | 128,
          l & 63 | 128
        );
      } else if (l < 1114112) {
        if ((a -= 4) < 0)
          break;
        x.push(
          l >> 18 | 240,
          l >> 12 & 63 | 128,
          l >> 6 & 63 | 128,
          l & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return x;
  }
  function D(d) {
    const a = [];
    for (let l = 0; l < d.length; ++l)
      a.push(d.charCodeAt(l) & 255);
    return a;
  }
  function _(d, a) {
    let l, p, T;
    const x = [];
    for (let k = 0; k < d.length && !((a -= 2) < 0); ++k)
      l = d.charCodeAt(k), p = l >> 8, T = l % 256, x.push(T), x.push(p);
    return x;
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
  function j(d) {
    return d !== d;
  }
  const V = function() {
    const d = "0123456789abcdef", a = new Array(256);
    for (let l = 0; l < 16; ++l) {
      const p = l * 16;
      for (let T = 0; T < 16; ++T)
        a[p + T] = d[l] + d[T];
    }
    return a;
  }();
  function H(d) {
    return typeof BigInt > "u" ? Z : d;
  }
  function Z() {
    throw new Error("BigInt not supported");
  }
})(Bc);
function Rd(n, ...e) {
  if (!(n instanceof Uint8Array))
    throw new Error("Expected Uint8Array");
  if (e.length > 0 && !e.includes(n.length))
    throw new Error(`Expected Uint8Array of length ${e}, not of length=${n.length}`);
}
function dl(n, e = !0) {
  if (n.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (e && n.finished)
    throw new Error("Hash#digest() has already been called");
}
function Xd(n, e) {
  Rd(n);
  const t = e.outputLen;
  if (n.length < t)
    throw new Error(`digestInto() expects output buffer of length at least ${t}`);
}
const qu = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const bf = (n) => n instanceof Uint8Array, Ku = (n) => new DataView(n.buffer, n.byteOffset, n.byteLength), vt = (n, e) => n << 32 - e | n >>> e, Zd = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!Zd)
  throw new Error("Non little-endian hardware is not supported");
function xf(n) {
  if (typeof n != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof n}`);
  return new Uint8Array(new TextEncoder().encode(n));
}
function Bf(n) {
  if (typeof n == "string" && (n = xf(n)), !bf(n))
    throw new Error(`expected Uint8Array, got ${typeof n}`);
  return n;
}
function Gd(...n) {
  const e = new Uint8Array(n.reduce((r, i) => r + i.length, 0));
  let t = 0;
  return n.forEach((r) => {
    if (!bf(r))
      throw new Error("Uint8Array expected");
    e.set(r, t), t += r.length;
  }), e;
}
class Qd {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
}
function kf(n) {
  const e = (r) => n().update(Bf(r)).digest(), t = n();
  return e.outputLen = t.outputLen, e.blockLen = t.blockLen, e.create = () => n(), e;
}
function eh(n = 32) {
  if (qu && typeof qu.getRandomValues == "function")
    return qu.getRandomValues(new Uint8Array(n));
  throw new Error("crypto.getRandomValues must be defined");
}
function th(n, e, t, r) {
  if (typeof n.setBigUint64 == "function")
    return n.setBigUint64(e, t, r);
  const i = BigInt(32), o = BigInt(4294967295), c = Number(t >> i & o), u = Number(t & o), f = r ? 4 : 0, m = r ? 0 : 4;
  n.setUint32(e + f, c, r), n.setUint32(e + m, u, r);
}
class Of extends Qd {
  constructor(e, t, r, i) {
    super(), this.blockLen = e, this.outputLen = t, this.padOffset = r, this.isLE = i, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(e), this.view = Ku(this.buffer);
  }
  update(e) {
    dl(this);
    const { view: t, buffer: r, blockLen: i } = this;
    e = Bf(e);
    const o = e.length;
    for (let c = 0; c < o; ) {
      const u = Math.min(i - this.pos, o - c);
      if (u === i) {
        const f = Ku(e);
        for (; i <= o - c; c += i)
          this.process(f, c);
        continue;
      }
      r.set(e.subarray(c, c + u), this.pos), this.pos += u, c += u, this.pos === i && (this.process(t, 0), this.pos = 0);
    }
    return this.length += e.length, this.roundClean(), this;
  }
  digestInto(e) {
    dl(this), Xd(e, this), this.finished = !0;
    const { buffer: t, view: r, blockLen: i, isLE: o } = this;
    let { pos: c } = this;
    t[c++] = 128, this.buffer.subarray(c).fill(0), this.padOffset > i - c && (this.process(r, 0), c = 0);
    for (let g = c; g < i; g++)
      t[g] = 0;
    th(r, i - 8, BigInt(this.length * 8), o), this.process(r, 0);
    const u = Ku(e), f = this.outputLen;
    if (f % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const m = f / 4, h = this.get();
    if (m > h.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let g = 0; g < m; g++)
      u.setUint32(4 * g, h[g], o);
  }
  digest() {
    const { buffer: e, outputLen: t } = this;
    this.digestInto(e);
    const r = e.slice(0, t);
    return this.destroy(), r;
  }
  _cloneInto(e) {
    e || (e = new this.constructor()), e.set(...this.get());
    const { blockLen: t, buffer: r, length: i, finished: o, destroyed: c, pos: u } = this;
    return e.length = i, e.pos = u, e.finished = o, e.destroyed = c, i % t && e.buffer.set(r), e;
  }
}
const qa = /* @__PURE__ */ BigInt(2 ** 32 - 1), Qu = /* @__PURE__ */ BigInt(32);
function If(n, e = !1) {
  return e ? { h: Number(n & qa), l: Number(n >> Qu & qa) } : { h: Number(n >> Qu & qa) | 0, l: Number(n & qa) | 0 };
}
function nh(n, e = !1) {
  let t = new Uint32Array(n.length), r = new Uint32Array(n.length);
  for (let i = 0; i < n.length; i++) {
    const { h: o, l: c } = If(n[i], e);
    [t[i], r[i]] = [o, c];
  }
  return [t, r];
}
const rh = (n, e) => BigInt(n >>> 0) << Qu | BigInt(e >>> 0), ih = (n, e, t) => n >>> t, sh = (n, e, t) => n << 32 - t | e >>> t, oh = (n, e, t) => n >>> t | e << 32 - t, ah = (n, e, t) => n << 32 - t | e >>> t, uh = (n, e, t) => n << 64 - t | e >>> t - 32, ch = (n, e, t) => n >>> t - 32 | e << 64 - t, lh = (n, e) => e, fh = (n, e) => n, mh = (n, e, t) => n << t | e >>> 32 - t, dh = (n, e, t) => e << t | n >>> 32 - t, hh = (n, e, t) => e << t - 32 | n >>> 64 - t, ph = (n, e, t) => n << t - 32 | e >>> 64 - t;
function gh(n, e, t, r) {
  const i = (e >>> 0) + (r >>> 0);
  return { h: n + t + (i / 2 ** 32 | 0) | 0, l: i | 0 };
}
const wh = (n, e, t) => (n >>> 0) + (e >>> 0) + (t >>> 0), yh = (n, e, t, r) => e + t + r + (n / 2 ** 32 | 0) | 0, Th = (n, e, t, r) => (n >>> 0) + (e >>> 0) + (t >>> 0) + (r >>> 0), Eh = (n, e, t, r, i) => e + t + r + i + (n / 2 ** 32 | 0) | 0, Nh = (n, e, t, r, i) => (n >>> 0) + (e >>> 0) + (t >>> 0) + (r >>> 0) + (i >>> 0), bh = (n, e, t, r, i, o) => e + t + r + i + o + (n / 2 ** 32 | 0) | 0, xh = {
  fromBig: If,
  split: nh,
  toBig: rh,
  shrSH: ih,
  shrSL: sh,
  rotrSH: oh,
  rotrSL: ah,
  rotrBH: uh,
  rotrBL: ch,
  rotr32H: lh,
  rotr32L: fh,
  rotlSH: mh,
  rotlSL: dh,
  rotlBH: hh,
  rotlBL: ph,
  add: gh,
  add3L: wh,
  add3H: yh,
  add4L: Th,
  add4H: Eh,
  add5H: bh,
  add5L: Nh
}, fe = xh, [Bh, kh] = /* @__PURE__ */ (() => fe.split([
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
].map((n) => BigInt(n))))(), os = /* @__PURE__ */ new Uint32Array(80), as = /* @__PURE__ */ new Uint32Array(80);
class Oh extends Of {
  constructor() {
    super(128, 64, 16, !1), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209;
  }
  // prettier-ignore
  get() {
    const { Ah: e, Al: t, Bh: r, Bl: i, Ch: o, Cl: c, Dh: u, Dl: f, Eh: m, El: h, Fh: g, Fl: y, Gh: b, Gl: S, Hh: A, Hl: M } = this;
    return [e, t, r, i, o, c, u, f, m, h, g, y, b, S, A, M];
  }
  // prettier-ignore
  set(e, t, r, i, o, c, u, f, m, h, g, y, b, S, A, M) {
    this.Ah = e | 0, this.Al = t | 0, this.Bh = r | 0, this.Bl = i | 0, this.Ch = o | 0, this.Cl = c | 0, this.Dh = u | 0, this.Dl = f | 0, this.Eh = m | 0, this.El = h | 0, this.Fh = g | 0, this.Fl = y | 0, this.Gh = b | 0, this.Gl = S | 0, this.Hh = A | 0, this.Hl = M | 0;
  }
  process(e, t) {
    for (let $ = 0; $ < 16; $++, t += 4)
      os[$] = e.getUint32(t), as[$] = e.getUint32(t += 4);
    for (let $ = 16; $ < 80; $++) {
      const re = os[$ - 15] | 0, F = as[$ - 15] | 0, Y = fe.rotrSH(re, F, 1) ^ fe.rotrSH(re, F, 8) ^ fe.shrSH(re, F, 7), Q = fe.rotrSL(re, F, 1) ^ fe.rotrSL(re, F, 8) ^ fe.shrSL(re, F, 7), te = os[$ - 2] | 0, ae = as[$ - 2] | 0, Be = fe.rotrSH(te, ae, 19) ^ fe.rotrBH(te, ae, 61) ^ fe.shrSH(te, ae, 6), Ie = fe.rotrSL(te, ae, 19) ^ fe.rotrBL(te, ae, 61) ^ fe.shrSL(te, ae, 6), Le = fe.add4L(Q, Ie, as[$ - 7], as[$ - 16]), Ze = fe.add4H(Le, Y, Be, os[$ - 7], os[$ - 16]);
      os[$] = Ze | 0, as[$] = Le | 0;
    }
    let { Ah: r, Al: i, Bh: o, Bl: c, Ch: u, Cl: f, Dh: m, Dl: h, Eh: g, El: y, Fh: b, Fl: S, Gh: A, Gl: M, Hh: W, Hl: me } = this;
    for (let $ = 0; $ < 80; $++) {
      const re = fe.rotrSH(g, y, 14) ^ fe.rotrSH(g, y, 18) ^ fe.rotrBH(g, y, 41), F = fe.rotrSL(g, y, 14) ^ fe.rotrSL(g, y, 18) ^ fe.rotrBL(g, y, 41), Y = g & b ^ ~g & A, Q = y & S ^ ~y & M, te = fe.add5L(me, F, Q, kh[$], as[$]), ae = fe.add5H(te, W, re, Y, Bh[$], os[$]), Be = te | 0, Ie = fe.rotrSH(r, i, 28) ^ fe.rotrBH(r, i, 34) ^ fe.rotrBH(r, i, 39), Le = fe.rotrSL(r, i, 28) ^ fe.rotrBL(r, i, 34) ^ fe.rotrBL(r, i, 39), Ze = r & o ^ r & u ^ o & u, sn = i & c ^ i & f ^ c & f;
      W = A | 0, me = M | 0, A = b | 0, M = S | 0, b = g | 0, S = y | 0, { h: g, l: y } = fe.add(m | 0, h | 0, ae | 0, Be | 0), m = u | 0, h = f | 0, u = o | 0, f = c | 0, o = r | 0, c = i | 0;
      const je = fe.add3L(Be, Le, sn);
      r = fe.add3H(je, ae, Ie, Ze), i = je | 0;
    }
    ({ h: r, l: i } = fe.add(this.Ah | 0, this.Al | 0, r | 0, i | 0)), { h: o, l: c } = fe.add(this.Bh | 0, this.Bl | 0, o | 0, c | 0), { h: u, l: f } = fe.add(this.Ch | 0, this.Cl | 0, u | 0, f | 0), { h: m, l: h } = fe.add(this.Dh | 0, this.Dl | 0, m | 0, h | 0), { h: g, l: y } = fe.add(this.Eh | 0, this.El | 0, g | 0, y | 0), { h: b, l: S } = fe.add(this.Fh | 0, this.Fl | 0, b | 0, S | 0), { h: A, l: M } = fe.add(this.Gh | 0, this.Gl | 0, A | 0, M | 0), { h: W, l: me } = fe.add(this.Hh | 0, this.Hl | 0, W | 0, me | 0), this.set(r, i, o, c, u, f, m, h, g, y, b, S, A, M, W, me);
  }
  roundClean() {
    os.fill(0), as.fill(0);
  }
  destroy() {
    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
const Sf = /* @__PURE__ */ kf(() => new Oh());
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
BigInt(0);
const Ih = BigInt(1), Sh = BigInt(2), yu = (n) => n instanceof Uint8Array, vh = /* @__PURE__ */ Array.from({ length: 256 }, (n, e) => e.toString(16).padStart(2, "0"));
function Oc(n) {
  if (!yu(n))
    throw new Error("Uint8Array expected");
  let e = "";
  for (let t = 0; t < n.length; t++)
    e += vh[n[t]];
  return e;
}
function vf(n) {
  if (typeof n != "string")
    throw new Error("hex string expected, got " + typeof n);
  return BigInt(n === "" ? "0" : `0x${n}`);
}
function Jf(n) {
  if (typeof n != "string")
    throw new Error("hex string expected, got " + typeof n);
  const e = n.length;
  if (e % 2)
    throw new Error("padded hex string expected, got unpadded hex of length " + e);
  const t = new Uint8Array(e / 2);
  for (let r = 0; r < t.length; r++) {
    const i = r * 2, o = n.slice(i, i + 2), c = Number.parseInt(o, 16);
    if (Number.isNaN(c) || c < 0)
      throw new Error("Invalid byte sequence");
    t[r] = c;
  }
  return t;
}
function Jh(n) {
  return vf(Oc(n));
}
function Ra(n) {
  if (!yu(n))
    throw new Error("Uint8Array expected");
  return vf(Oc(Uint8Array.from(n).reverse()));
}
function Ff(n, e) {
  return Jf(n.toString(16).padStart(e * 2, "0"));
}
function ec(n, e) {
  return Ff(n, e).reverse();
}
function us(n, e, t) {
  let r;
  if (typeof e == "string")
    try {
      r = Jf(e);
    } catch (o) {
      throw new Error(`${n} must be valid hex string, got "${e}". Cause: ${o}`);
    }
  else if (yu(e))
    r = Uint8Array.from(e);
  else
    throw new Error(`${n} must be hex string or Uint8Array`);
  const i = r.length;
  if (typeof t == "number" && i !== t)
    throw new Error(`${n} expected ${t} bytes, got ${i}`);
  return r;
}
function hl(...n) {
  const e = new Uint8Array(n.reduce((r, i) => r + i.length, 0));
  let t = 0;
  return n.forEach((r) => {
    if (!yu(r))
      throw new Error("Uint8Array expected");
    e.set(r, t), t += r.length;
  }), e;
}
const Fh = (n) => (Sh << BigInt(n - 1)) - Ih, Ah = {
  bigint: (n) => typeof n == "bigint",
  function: (n) => typeof n == "function",
  boolean: (n) => typeof n == "boolean",
  string: (n) => typeof n == "string",
  stringOrUint8Array: (n) => typeof n == "string" || n instanceof Uint8Array,
  isSafeInteger: (n) => Number.isSafeInteger(n),
  array: (n) => Array.isArray(n),
  field: (n, e) => e.Fp.isValid(n),
  hash: (n) => typeof n == "function" && Number.isSafeInteger(n.outputLen)
};
function Ic(n, e, t = {}) {
  const r = (i, o, c) => {
    const u = Ah[o];
    if (typeof u != "function")
      throw new Error(`Invalid validator "${o}", expected function`);
    const f = n[i];
    if (!(c && f === void 0) && !u(f, n))
      throw new Error(`Invalid param ${String(i)}=${f} (${typeof f}), expected ${o}`);
  };
  for (const [i, o] of Object.entries(e))
    r(i, o, !1);
  for (const [i, o] of Object.entries(t))
    r(i, o, !0);
  return n;
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Ve = BigInt(0), Ae = BigInt(1), Js = BigInt(2), Uh = BigInt(3), tc = BigInt(4), pl = BigInt(5), gl = BigInt(8);
BigInt(9);
BigInt(16);
function qe(n, e) {
  const t = n % e;
  return t >= Ve ? t : e + t;
}
function Lh(n, e, t) {
  if (t <= Ve || e < Ve)
    throw new Error("Expected power/modulo > 0");
  if (t === Ae)
    return Ve;
  let r = Ae;
  for (; e > Ve; )
    e & Ae && (r = r * n % t), n = n * n % t, e >>= Ae;
  return r;
}
function Jt(n, e, t) {
  let r = n;
  for (; e-- > Ve; )
    r *= r, r %= t;
  return r;
}
function wl(n, e) {
  if (n === Ve || e <= Ve)
    throw new Error(`invert: expected positive integers, got n=${n} mod=${e}`);
  let t = qe(n, e), r = e, i = Ve, o = Ae;
  for (; t !== Ve; ) {
    const u = r / t, f = r % t, m = i - o * u;
    r = t, t = f, i = o, o = m;
  }
  if (r !== Ae)
    throw new Error("invert: does not exist");
  return qe(i, e);
}
function Dh(n) {
  const e = (n - Ae) / Js;
  let t, r, i;
  for (t = n - Ae, r = 0; t % Js === Ve; t /= Js, r++)
    ;
  for (i = Js; i < n && Lh(i, e, n) !== n - Ae; i++)
    ;
  if (r === 1) {
    const c = (n + Ae) / tc;
    return function(f, m) {
      const h = f.pow(m, c);
      if (!f.eql(f.sqr(h), m))
        throw new Error("Cannot find square root");
      return h;
    };
  }
  const o = (t + Ae) / Js;
  return function(u, f) {
    if (u.pow(f, e) === u.neg(u.ONE))
      throw new Error("Cannot find square root");
    let m = r, h = u.pow(u.mul(u.ONE, i), t), g = u.pow(f, o), y = u.pow(f, t);
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
function Ch(n) {
  if (n % tc === Uh) {
    const e = (n + Ae) / tc;
    return function(r, i) {
      const o = r.pow(i, e);
      if (!r.eql(r.sqr(o), i))
        throw new Error("Cannot find square root");
      return o;
    };
  }
  if (n % gl === pl) {
    const e = (n - pl) / gl;
    return function(r, i) {
      const o = r.mul(i, Js), c = r.pow(o, e), u = r.mul(i, c), f = r.mul(r.mul(u, Js), c), m = r.mul(u, r.sub(f, r.ONE));
      if (!r.eql(r.sqr(m), i))
        throw new Error("Cannot find square root");
      return m;
    };
  }
  return Dh(n);
}
const qh = (n, e) => (qe(n, e) & Ae) === Ae, Kh = [
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
function Ph(n) {
  const e = {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "isSafeInteger",
    BITS: "isSafeInteger"
  }, t = Kh.reduce((r, i) => (r[i] = "function", r), e);
  return Ic(n, t);
}
function $h(n, e, t) {
  if (t < Ve)
    throw new Error("Expected power > 0");
  if (t === Ve)
    return n.ONE;
  if (t === Ae)
    return e;
  let r = n.ONE, i = e;
  for (; t > Ve; )
    t & Ae && (r = n.mul(r, i)), i = n.sqr(i), t >>= Ae;
  return r;
}
function _h(n, e) {
  const t = new Array(e.length), r = e.reduce((o, c, u) => n.is0(c) ? o : (t[u] = o, n.mul(o, c)), n.ONE), i = n.inv(r);
  return e.reduceRight((o, c, u) => n.is0(c) ? o : (t[u] = n.mul(o, t[u]), n.mul(o, c)), i), t;
}
function Af(n, e) {
  const t = e !== void 0 ? e : n.toString(2).length, r = Math.ceil(t / 8);
  return { nBitLength: t, nByteLength: r };
}
function Mh(n, e, t = !1, r = {}) {
  if (n <= Ve)
    throw new Error(`Expected Field ORDER > 0, got ${n}`);
  const { nBitLength: i, nByteLength: o } = Af(n, e);
  if (o > 2048)
    throw new Error("Field lengths over 2048 bytes are not supported");
  const c = Ch(n), u = Object.freeze({
    ORDER: n,
    BITS: i,
    BYTES: o,
    MASK: Fh(i),
    ZERO: Ve,
    ONE: Ae,
    create: (f) => qe(f, n),
    isValid: (f) => {
      if (typeof f != "bigint")
        throw new Error(`Invalid field element: expected bigint, got ${typeof f}`);
      return Ve <= f && f < n;
    },
    is0: (f) => f === Ve,
    isOdd: (f) => (f & Ae) === Ae,
    neg: (f) => qe(-f, n),
    eql: (f, m) => f === m,
    sqr: (f) => qe(f * f, n),
    add: (f, m) => qe(f + m, n),
    sub: (f, m) => qe(f - m, n),
    mul: (f, m) => qe(f * m, n),
    pow: (f, m) => $h(u, f, m),
    div: (f, m) => qe(f * wl(m, n), n),
    // Same as above, but doesn't normalize
    sqrN: (f) => f * f,
    addN: (f, m) => f + m,
    subN: (f, m) => f - m,
    mulN: (f, m) => f * m,
    inv: (f) => wl(f, n),
    sqrt: r.sqrt || ((f) => c(u, f)),
    invertBatch: (f) => _h(u, f),
    // TODO: do we really need constant cmov?
    // We don't have const-time bigints anyway, so probably will be not very useful
    cmov: (f, m, h) => h ? m : f,
    toBytes: (f) => t ? ec(f, o) : Ff(f, o),
    fromBytes: (f) => {
      if (f.length !== o)
        throw new Error(`Fp.fromBytes: expected ${o}, got ${f.length}`);
      return t ? Ra(f) : Jh(f);
    }
  });
  return Object.freeze(u);
}
function Vh(n, e) {
  if (!n.isOdd)
    throw new Error("Field doesn't have isOdd");
  const t = n.sqrt(e);
  return n.isOdd(t) ? n.neg(t) : t;
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Hh = BigInt(0), Pu = BigInt(1);
function jh(n, e) {
  const t = (i, o) => {
    const c = o.negate();
    return i ? c : o;
  }, r = (i) => {
    const o = Math.ceil(e / i) + 1, c = 2 ** (i - 1);
    return { windows: o, windowSize: c };
  };
  return {
    constTimeNegate: t,
    // non-const time multiplication ladder
    unsafeLadder(i, o) {
      let c = n.ZERO, u = i;
      for (; o > Hh; )
        o & Pu && (c = c.add(u)), u = u.double(), o >>= Pu;
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
    precomputeWindow(i, o) {
      const { windows: c, windowSize: u } = r(o), f = [];
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
    wNAF(i, o, c) {
      const { windows: u, windowSize: f } = r(i);
      let m = n.ZERO, h = n.BASE;
      const g = BigInt(2 ** i - 1), y = 2 ** i, b = BigInt(i);
      for (let S = 0; S < u; S++) {
        const A = S * f;
        let M = Number(c & g);
        c >>= b, M > f && (M -= y, c += Pu);
        const W = A, me = A + Math.abs(M) - 1, $ = S % 2 !== 0, re = M < 0;
        M === 0 ? h = h.add(t($, o[W])) : m = m.add(t(re, o[me]));
      }
      return { p: m, f: h };
    },
    wNAFCached(i, o, c, u) {
      const f = i._WINDOW_SIZE || 1;
      let m = o.get(i);
      return m || (m = this.precomputeWindow(i, f), f !== 1 && o.set(i, u(m))), this.wNAF(f, m, c);
    }
  };
}
function zh(n) {
  return Ph(n.Fp), Ic(n, {
    n: "bigint",
    h: "bigint",
    Gx: "field",
    Gy: "field"
  }, {
    nBitLength: "isSafeInteger",
    nByteLength: "isSafeInteger"
  }), Object.freeze({
    ...Af(n.n, n.nBitLength),
    ...n,
    p: n.Fp.ORDER
  });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const gt = BigInt(0), ot = BigInt(1), Ka = BigInt(2), Wh = BigInt(8), Yh = { zip215: !0 };
function Rh(n) {
  const e = zh(n);
  return Ic(n, {
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
function Sc(n) {
  const e = Rh(n), { Fp: t, n: r, prehash: i, hash: o, randomBytes: c, nByteLength: u, h: f } = e, m = Ka << BigInt(u * 8) - ot, h = t.create, g = e.uvRatio || ((P, q) => {
    try {
      return { isValid: !0, value: t.sqrt(P * t.inv(q)) };
    } catch {
      return { isValid: !1, value: gt };
    }
  }), y = e.adjustScalarBytes || ((P) => P), b = e.domain || ((P, q, R) => {
    if (q.length || R)
      throw new Error("Contexts/pre-hash are not supported");
    return P;
  }), S = (P) => typeof P == "bigint" && gt < P, A = (P, q) => S(P) && S(q) && P < q, M = (P) => P === gt || A(P, m);
  function W(P, q) {
    if (A(P, q))
      return P;
    throw new Error(`Expected valid scalar < ${q}, got ${typeof P} ${P}`);
  }
  function me(P) {
    return P === gt ? P : W(P, r);
  }
  const $ = /* @__PURE__ */ new Map();
  function re(P) {
    if (!(P instanceof F))
      throw new Error("ExtendedPoint expected");
  }
  class F {
    constructor(q, R, z, X) {
      if (this.ex = q, this.ey = R, this.ez = z, this.et = X, !M(q))
        throw new Error("x required");
      if (!M(R))
        throw new Error("y required");
      if (!M(z))
        throw new Error("z required");
      if (!M(X))
        throw new Error("t required");
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    static fromAffine(q) {
      if (q instanceof F)
        throw new Error("extended point not allowed");
      const { x: R, y: z } = q || {};
      if (!M(R) || !M(z))
        throw new Error("invalid affine point");
      return new F(R, z, ot, h(R * z));
    }
    static normalizeZ(q) {
      const R = t.invertBatch(q.map((z) => z.ez));
      return q.map((z, X) => z.toAffine(R[X])).map(F.fromAffine);
    }
    // "Private method", don't use it directly
    _setWindowSize(q) {
      this._WINDOW_SIZE = q, $.delete(this);
    }
    // Not required for fromHex(), which always creates valid points.
    // Could be useful for fromAffine().
    assertValidity() {
      const { a: q, d: R } = e;
      if (this.is0())
        throw new Error("bad point: ZERO");
      const { ex: z, ey: X, ez: ue, et: ge } = this, be = h(z * z), we = h(X * X), pe = h(ue * ue), Ne = h(pe * pe), ve = h(be * q), De = h(pe * h(ve + we)), Ce = h(Ne + h(R * h(be * we)));
      if (De !== Ce)
        throw new Error("bad point: equation left != right (1)");
      const Ye = h(z * X), w = h(ue * ge);
      if (Ye !== w)
        throw new Error("bad point: equation left != right (2)");
    }
    // Compare one point to another.
    equals(q) {
      re(q);
      const { ex: R, ey: z, ez: X } = this, { ex: ue, ey: ge, ez: be } = q, we = h(R * be), pe = h(ue * X), Ne = h(z * be), ve = h(ge * X);
      return we === pe && Ne === ve;
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
      const { a: q } = e, { ex: R, ey: z, ez: X } = this, ue = h(R * R), ge = h(z * z), be = h(Ka * h(X * X)), we = h(q * ue), pe = R + z, Ne = h(h(pe * pe) - ue - ge), ve = we + ge, De = ve - be, Ce = we - ge, Ye = h(Ne * De), w = h(ve * Ce), E = h(Ne * Ce), B = h(De * ve);
      return new F(Ye, w, B, E);
    }
    // Fast algo for adding 2 Extended Points.
    // https://hyperelliptic.org/EFD/g1p/auto-twisted-extended.html#addition-add-2008-hwcd
    // Cost: 9M + 1*a + 1*d + 7add.
    add(q) {
      re(q);
      const { a: R, d: z } = e, { ex: X, ey: ue, ez: ge, et: be } = this, { ex: we, ey: pe, ez: Ne, et: ve } = q;
      if (R === BigInt(-1)) {
        const O = h((ue - X) * (pe + we)), j = h((ue + X) * (pe - we)), V = h(j - O);
        if (V === gt)
          return this.double();
        const H = h(ge * Ka * ve), Z = h(be * Ka * Ne), d = Z + H, a = j + O, l = Z - H, p = h(d * V), T = h(a * l), x = h(d * l), k = h(V * a);
        return new F(p, T, k, x);
      }
      const De = h(X * we), Ce = h(ue * pe), Ye = h(be * z * ve), w = h(ge * Ne), E = h((X + ue) * (we + pe) - De - Ce), B = w - Ye, J = w + Ye, I = h(Ce - R * De), D = h(E * B), _ = h(J * I), U = h(E * I), C = h(B * J);
      return new F(D, _, C, U);
    }
    subtract(q) {
      return this.add(q.negate());
    }
    wNAF(q) {
      return te.wNAFCached(this, $, q, F.normalizeZ);
    }
    // Constant-time multiplication.
    multiply(q) {
      const { p: R, f: z } = this.wNAF(W(q, r));
      return F.normalizeZ([R, z])[0];
    }
    // Non-constant-time multiplication. Uses double-and-add algorithm.
    // It's faster, but should only be used when you don't care about
    // an exposed private key e.g. sig verification.
    // Does NOT allow scalars higher than CURVE.n.
    multiplyUnsafe(q) {
      let R = me(q);
      return R === gt ? Q : this.equals(Q) || R === ot ? this : this.equals(Y) ? this.wNAF(R).p : te.unsafeLadder(this, R);
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
      return te.unsafeLadder(this, r).is0();
    }
    // Converts Extended point to default (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    toAffine(q) {
      const { ex: R, ey: z, ez: X } = this, ue = this.is0();
      q == null && (q = ue ? Wh : t.inv(X));
      const ge = h(R * q), be = h(z * q), we = h(X * q);
      if (ue)
        return { x: gt, y: ot };
      if (we !== ot)
        throw new Error("invZ was invalid");
      return { x: ge, y: be };
    }
    clearCofactor() {
      const { h: q } = e;
      return q === ot ? this : this.multiplyUnsafe(q);
    }
    // Converts hash string or Uint8Array to Point.
    // Uses algo from RFC8032 5.1.3.
    static fromHex(q, R = !1) {
      const { d: z, a: X } = e, ue = t.BYTES;
      q = us("pointHex", q, ue);
      const ge = q.slice(), be = q[ue - 1];
      ge[ue - 1] = be & -129;
      const we = Ra(ge);
      we === gt || (R ? W(we, m) : W(we, t.ORDER));
      const pe = h(we * we), Ne = h(pe - ot), ve = h(z * pe - X);
      let { isValid: De, value: Ce } = g(Ne, ve);
      if (!De)
        throw new Error("Point.fromHex: invalid y coordinate");
      const Ye = (Ce & ot) === ot, w = (be & 128) !== 0;
      if (!R && Ce === gt && w)
        throw new Error("Point.fromHex: x=0 and x_0=1");
      return w !== Ye && (Ce = h(-Ce)), F.fromAffine({ x: Ce, y: we });
    }
    static fromPrivateKey(q) {
      return Ie(q).point;
    }
    toRawBytes() {
      const { x: q, y: R } = this.toAffine(), z = ec(R, t.BYTES);
      return z[z.length - 1] |= q & ot ? 128 : 0, z;
    }
    toHex() {
      return Oc(this.toRawBytes());
    }
  }
  F.BASE = new F(e.Gx, e.Gy, ot, h(e.Gx * e.Gy)), F.ZERO = new F(gt, ot, ot, gt);
  const { BASE: Y, ZERO: Q } = F, te = jh(F, u * 8);
  function ae(P) {
    return qe(P, r);
  }
  function Be(P) {
    return ae(Ra(P));
  }
  function Ie(P) {
    const q = u;
    P = us("private key", P, q);
    const R = us("hashed private key", o(P), 2 * q), z = y(R.slice(0, q)), X = R.slice(q, 2 * q), ue = Be(z), ge = Y.multiply(ue), be = ge.toRawBytes();
    return { head: z, prefix: X, scalar: ue, point: ge, pointBytes: be };
  }
  function Le(P) {
    return Ie(P).pointBytes;
  }
  function Ze(P = new Uint8Array(), ...q) {
    const R = hl(...q);
    return Be(o(b(R, us("context", P), !!i)));
  }
  function sn(P, q, R = {}) {
    P = us("message", P), i && (P = i(P));
    const { prefix: z, scalar: X, pointBytes: ue } = Ie(q), ge = Ze(R.context, z, P), be = Y.multiply(ge).toRawBytes(), we = Ze(R.context, be, ue, P), pe = ae(ge + we * X);
    me(pe);
    const Ne = hl(be, ec(pe, t.BYTES));
    return us("result", Ne, u * 2);
  }
  const je = Yh;
  function _e(P, q, R, z = je) {
    const { context: X, zip215: ue } = z, ge = t.BYTES;
    P = us("signature", P, 2 * ge), q = us("message", q), i && (q = i(q));
    const be = Ra(P.slice(ge, 2 * ge));
    let we, pe, Ne;
    try {
      we = F.fromHex(R, ue), pe = F.fromHex(P.slice(0, ge), ue), Ne = Y.multiplyUnsafe(be);
    } catch {
      return !1;
    }
    if (!ue && we.isSmallOrder())
      return !1;
    const ve = Ze(X, pe.toRawBytes(), we.toRawBytes(), q);
    return pe.add(we.multiplyUnsafe(ve)).subtract(Ne).clearCofactor().equals(F.ZERO);
  }
  return Y._setWindowSize(8), {
    CURVE: e,
    getPublicKey: Le,
    sign: sn,
    verify: _e,
    ExtendedPoint: F,
    utils: {
      getExtendedPublicKey: Ie,
      // ed25519 private keys are uniform 32b. No need to check for modulo bias, like in secp256k1.
      randomPrivateKey: () => c(t.BYTES),
      /**
       * We're doing scalar multiplication (used in getPublicKey etc) with precomputed BASE_POINT
       * values. This slows down first getPublicKey() by milliseconds (see Speed section),
       * but allows to speed-up subsequent getPublicKey() calls up to 20x.
       * @param windowSize 2, 4, 8, 16
       */
      precompute(P = 8, q = F.BASE) {
        return q._setWindowSize(P), q.multiply(BigInt(3)), q;
      }
    }
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const vc = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949"), yl = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
BigInt(0);
const Xh = BigInt(1), nc = BigInt(2), Zh = BigInt(5), Tl = BigInt(10), Gh = BigInt(20), Qh = BigInt(40), El = BigInt(80);
function ep(n) {
  const e = vc, r = n * n % e * n % e, i = Jt(r, nc, e) * r % e, o = Jt(i, Xh, e) * n % e, c = Jt(o, Zh, e) * o % e, u = Jt(c, Tl, e) * c % e, f = Jt(u, Gh, e) * u % e, m = Jt(f, Qh, e) * f % e, h = Jt(m, El, e) * m % e, g = Jt(h, El, e) * m % e, y = Jt(g, Tl, e) * c % e;
  return { pow_p_5_8: Jt(y, nc, e) * n % e, b2: r };
}
function tp(n) {
  return n[0] &= 248, n[31] &= 127, n[31] |= 64, n;
}
function np(n, e) {
  const t = vc, r = qe(e * e * e, t), i = qe(r * r * e, t), o = ep(n * i).pow_p_5_8;
  let c = qe(n * r * o, t);
  const u = qe(e * c * c, t), f = c, m = qe(c * yl, t), h = u === n, g = u === qe(-n, t), y = u === qe(-n * yl, t);
  return h && (c = f), (g || y) && (c = m), qh(c, t) && (c = qe(-c, t)), { isValid: h || g, value: c };
}
const ns = Mh(vc, void 0, !0), Jc = {
  // Param: a
  a: BigInt(-1),
  // d is equal to -121665/121666 over finite field.
  // Negative number is P - number, and division is invert(number, P)
  d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"),
  // Finite field 𝔽p over which we'll do calculations; 2n**255n - 19n
  Fp: ns,
  // Subgroup order: how many points curve has
  // 2n**252n + 27742317777372353535851937790883648493n;
  n: BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"),
  // Cofactor
  h: BigInt(8),
  // Base point (x, y) aka generator point
  Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"),
  Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960"),
  hash: Sf,
  randomBytes: eh,
  adjustScalarBytes: tp,
  // dom2
  // Ratio of u to v. Allows us to combine inversion and square root. Uses algo from RFC8032 5.1.3.
  // Constant-time, u/√v
  uvRatio: np
}, Ss = /* @__PURE__ */ Sc(Jc);
function Uf(n, e, t) {
  if (e.length > 255)
    throw new Error("Context is too big");
  return Gd(xf("SigEd25519 no Ed25519 collisions"), new Uint8Array([t ? 1 : 0, e.length]), e, n);
}
({
  ...Jc
});
({
  ...Jc
});
const rp = (ns.ORDER + BigInt(3)) / BigInt(8);
ns.pow(nc, rp);
ns.sqrt(ns.neg(ns.ONE));
(ns.ORDER - BigInt(5)) / BigInt(8);
BigInt(486662);
Vh(ns, ns.neg(BigInt(486664)));
BigInt("25063068953384623474111414158702152701244531502492656460079210482610430750235");
BigInt("54469307008909316920995813868745141605393597292927456921205312896311721017578");
BigInt("1159843021668779879193775521855586647937357759715417654439879720876111806838");
BigInt("40440834346308536858101042469323190826248399146238708352240133220865137265952");
BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
const Lf = () => new Error("invalid size"), Df = () => new Error("destination is required"), Cf = () => new Error("amount is required"), qf = () => new Error("currency is required"), zs = () => new Error("invalid currency"), Na = () => new Error("unexpected error"), ip = () => new Error("cannot derive nonce from both clientSecret and idempotencyKey"), Kf = () => new Error("invalid value"), Pf = () => new Error("invalid mode"), $u = () => new Error("invalid address"), Fc = () => new Error("login is required"), Ac = () => new Error("login domain is required"), ba = () => new Error("login verifier is required"), Nl = 32, sp = /^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]+$/;
class St {
  /**
   * Constructs a new PublicKey instance.
   *
   * @param publicKey - The raw public key as a Uint8Array.
   */
  constructor(e) {
    if (e.length !== Nl)
      throw $u();
    this.value = e;
  }
  /**
   * Constructs a PublicKey instance from its Base58 representation.
   *
   * @param base58 - The Base58 encoded public key string.
   * @returns A new PublicKey instance.
   */
  static fromBase58(e) {
    if (!e.match(sp))
      throw $u();
    const t = ru.decode(e);
    if (t.length !== Nl)
      throw $u();
    return new St(t);
  }
  /**
   * Converts the public key to a Buffer.
   *
   * @returns The public key as a Buffer.
   */
  toBuffer() {
    return Bc.Buffer.from([...this.value]);
  }
  /**
   * Encodes the public key into its Base58 representation.
   *
   * @returns The Base58 encoded public key string.
   */
  toBase58() {
    return ru.encode(this.value);
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
    return Ss.verify(t, new Uint8Array(e), this.value);
  }
}
class cn {
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
    const e = Ss.utils.randomPrivateKey(), t = Ss.getPublicKey(e);
    return new cn(e, t);
  }
  /**
   * Constructs a Keypair from a given secret key.
   *
   * @param secretKey - Secret key to derive the Keypair from.
   * @returns A new Keypair instance.
   */
  static fromSecretKey(e) {
    const t = e.subarray(0, 32), r = Ss.getPublicKey(t);
    return new cn(t, r);
  }
  /**
   * Constructs a Keypair from a given seed.
   *
   * @param seed - Seed to derive the Keypair from.
   * @returns A new Keypair instance.
   */
  static fromSeed(e) {
    return cn.fromSecretKey(e);
  }
  /**
   * Constructs a Keypair from a raw private key.
   *
   * @param rawPrivateKey - Raw private key to derive the Keypair from.
   * @returns A new Keypair instance.
   */
  static fromRawPrivateKey(e) {
    const t = Ss.getPublicKey(e);
    return new cn(e, t);
  }
  /**
   * Retrieves the public key as a PublicKey object.
   *
   * @returns The public key.
   */
  getPublicKey() {
    return new St(this.publicKey);
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
    return Ss.sign(new Uint8Array(e), this.privateKey);
  }
  /**
   * Verifies a message signature against the public key.
   *
   * @param message - The message to verify.
   * @param signature - The signature to verify against.
   * @returns True if the signature is valid, false otherwise.
   */
  verify(e, t) {
    return Ss.verify(t, new Uint8Array(e), this.publicKey);
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
    return cn.fromRawPrivateKey(t);
  }
}
const iu = [
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
function op(n) {
  const e = iu.indexOf(n);
  if (e === -1)
    throw zs();
  return e;
}
function ap(n) {
  if (n < 0 || n >= iu.length)
    throw zs();
  return iu[n];
}
function $f(n) {
  return iu.indexOf(n) !== -1;
}
var Qe;
(function(n) {
  n[n.Cash = 0] = "Cash", n[n.GiftCard = 1] = "GiftCard", n[n.RequestPayment = 2] = "RequestPayment", n[n.RequestLogin = 3] = "RequestLogin";
})(Qe || (Qe = {}));
class Gs {
  /**
   * Construct a new CodePayload.
   *
   * @param opt - The options for constructing the payload.
   */
  constructor(e) {
    if (this.kind = e.kind, this.amount = e.amount, this.nonce = e.nonce, e.currency && !$f(e.currency))
      throw zs();
    this.currency = e.currency;
  }
  isCash() {
    return this.kind === Qe.Cash && this.amount != null;
  }
  isGiftCard() {
    return this.kind === Qe.GiftCard && this.amount != null;
  }
  isRequestPayment() {
    return this.kind === Qe.RequestPayment && this.currency != null && this.amount != null;
  }
  /**
   * Validates the payload, throwing an error if invalid.
   */
  validate() {
    if (this.kind === Qe.RequestPayment && !this.currency)
      throw zs();
    if ((this.kind === Qe.Cash || this.kind === Qe.GiftCard || this.kind === Qe.RequestPayment) && !this.amount)
      throw Kf();
  }
  /**
   * Convert the payload to its binary representation.
   *
   * @returns A Uint8Array containing the binary representation of the payload.
   */
  toBinary() {
    const e = new Uint8Array(20);
    if (e[0] = this.kind, this.validate(), this.isRequestPayment()) {
      if (!this.currency)
        throw zs();
      const t = op(this.currency);
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
    if (e.length !== Gs.MAX_LENGTH)
      throw Lf();
    const t = e[0];
    let r, i, o;
    if (t === Qe.RequestPayment) {
      const c = e[1];
      o = ap(c), r = e.slice(2, 9).reduce((u, f, m) => u + (BigInt(f) << BigInt(8 * m)), BigInt(0));
    }
    return (t === Qe.Cash || t === Qe.GiftCard) && (r = e.slice(1, 9).reduce((c, u, f) => c + (BigInt(u) << BigInt(8 * f)), BigInt(0))), i = e.slice(9), new Gs({ kind: t, amount: r, currency: o, nonce: i });
  }
}
Gs.MAX_LENGTH = 20;
function up(n) {
  if (n.mode === void 0)
    throw Pf();
  if (n.idempotencyKey && n.clientSecret)
    throw ip();
}
function cp(n) {
  if (n.destination === void 0)
    throw Df();
  if (n.amount === void 0)
    throw Cf();
  if (n.currency === void 0)
    throw qf();
  if (!$f(n.currency))
    throw zs();
  St.fromBase58(n.destination);
}
function bl(n) {
  if (n.login === void 0)
    throw Fc();
  if (n.login.domain === void 0)
    throw Ac();
  if (n.login.verifier === void 0)
    throw ba();
  St.fromBase58(n.login.verifier);
}
function xl(n) {
  if (n.signers) {
    for (const e of n.signers)
      if (!e.sign && typeof e.sign != "function")
        throw Kf();
  }
}
function Uc(n) {
  switch (up(n), n.mode) {
    case "login":
      bl(n), n.signers && xl(n);
      break;
    case "payment":
      cp(n), n.login && bl(n), n.signers && xl(n);
      break;
    default:
      throw Pf();
  }
}
class Ee {
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
    const t = Number(e / Ee.quarksPerKin), r = Number(e % Ee.quarksPerKin);
    return new Ee(t, r);
  }
  /**
   * Creates a Kin instance from a decimal value.
   * @param decimal - The decimal value to convert.
   * @returns A new Kin instance.
   */
  static fromDecimal(e) {
    const t = BigInt(Math.round(e * Number(Ee.quarksPerKin)));
    return Ee.fromQuarks(t);
  }
  /**
   * Adds another Kin value to the current one.
   * @param other - The other Kin value to add.
   * @returns A new Kin instance with the summed value.
   */
  add(e) {
    const t = this.toQuarks() + e.toQuarks();
    return Ee.fromQuarks(t);
  }
  /**
   * Subtracts another Kin value from the current one.
   * @param other - The other Kin value to subtract.
   * @returns A new Kin instance with the difference.
   */
  subtract(e) {
    const t = this.toQuarks() - e.toQuarks();
    return Ee.fromQuarks(t);
  }
  /**
   * Multiplies the current Kin value by a factor.
   * @param factor - The multiplication factor.
   * @returns A new Kin instance with the multiplied value.
   */
  multiply(e) {
    const t = this.toQuarks() * BigInt(e);
    return Ee.fromQuarks(t);
  }
  /**
   * Divides the current Kin value by a divisor.
   * @param divisor - The divisor.
   * @returns A new Kin instance with the divided value.
   */
  divide(e) {
    const t = this.toQuarks() / BigInt(e);
    return Ee.fromQuarks(t);
  }
}
Ee.decimals = 5n;
Ee.quarksPerKin = 100000n;
Ee.mintAddress = "kinXdEcpDQeHPEuQnqmUgtYykqKGVFq6CeVX5iAHJq6";
Ee.mint = St.fromBase58(Ee.mintAddress);
Ee.zero = new Ee(0, 0);
Ee.one = new Ee(1, 0);
Ee.max = new Ee(Number.MAX_SAFE_INTEGER, Number(Ee.quarksPerKin - 1n));
Ee.min = new Ee(Number.MIN_SAFE_INTEGER, 0);
const lp = (n, e, t) => n & e ^ ~n & t, fp = (n, e, t) => n & e ^ n & t ^ e & t, mp = /* @__PURE__ */ new Uint32Array([
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
]), cs = /* @__PURE__ */ new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]), ls = /* @__PURE__ */ new Uint32Array(64);
class dp extends Of {
  constructor() {
    super(64, 32, 8, !1), this.A = cs[0] | 0, this.B = cs[1] | 0, this.C = cs[2] | 0, this.D = cs[3] | 0, this.E = cs[4] | 0, this.F = cs[5] | 0, this.G = cs[6] | 0, this.H = cs[7] | 0;
  }
  get() {
    const { A: e, B: t, C: r, D: i, E: o, F: c, G: u, H: f } = this;
    return [e, t, r, i, o, c, u, f];
  }
  // prettier-ignore
  set(e, t, r, i, o, c, u, f) {
    this.A = e | 0, this.B = t | 0, this.C = r | 0, this.D = i | 0, this.E = o | 0, this.F = c | 0, this.G = u | 0, this.H = f | 0;
  }
  process(e, t) {
    for (let g = 0; g < 16; g++, t += 4)
      ls[g] = e.getUint32(t, !1);
    for (let g = 16; g < 64; g++) {
      const y = ls[g - 15], b = ls[g - 2], S = vt(y, 7) ^ vt(y, 18) ^ y >>> 3, A = vt(b, 17) ^ vt(b, 19) ^ b >>> 10;
      ls[g] = A + ls[g - 7] + S + ls[g - 16] | 0;
    }
    let { A: r, B: i, C: o, D: c, E: u, F: f, G: m, H: h } = this;
    for (let g = 0; g < 64; g++) {
      const y = vt(u, 6) ^ vt(u, 11) ^ vt(u, 25), b = h + y + lp(u, f, m) + mp[g] + ls[g] | 0, A = (vt(r, 2) ^ vt(r, 13) ^ vt(r, 22)) + fp(r, i, o) | 0;
      h = m, m = f, f = u, u = c + b | 0, c = o, o = i, i = r, r = b + A | 0;
    }
    r = r + this.A | 0, i = i + this.B | 0, o = o + this.C | 0, c = c + this.D | 0, u = u + this.E | 0, f = f + this.F | 0, m = m + this.G | 0, h = h + this.H | 0, this.set(r, i, o, c, u, f, m, h);
  }
  roundClean() {
    ls.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
const _f = /* @__PURE__ */ kf(() => new dp());
class mt {
  /**
   * Constructor for an idempotency key.
   * @param {Uint8Array} data The value to initialize the idempotency key with. If not specified, a random Uint8Array of length IdempotencyKey.MAX_LENGTH is used.
   */
  constructor(e = new Uint8Array(mt.MAX_LENGTH)) {
    if (e.length != mt.MAX_LENGTH)
      throw Lf();
    this.value = e;
  }
  /**
   * Creates a new idempotency key from a client secret string.
   * @param {string} data The client secret to parse into an idempotency key.
   * @returns {IdempotencyKey} An IdempotencyKey object representing the decoded client secret.
   */
  static fromClientSecret(e) {
    return new mt(ru.decode(e));
  }
  /**
   * Creates a new idempotency key from a seed string.
   * @param {string} seed The seed to create the idempotency key with.
   * @returns {IdempotencyKey} An IdempotencyKey object representing the created idempotency key.
   */
  static fromSeed(e) {
    return new mt(_f(e).subarray(0, mt.MAX_LENGTH));
  }
  /**
   * Generates a random idempotency key.
   * @returns {IdempotencyKey} An IdempotencyKey object representing the generated key.
   */
  static generate() {
    const e = cn.generate().getPrivateValue().subarray(0, mt.MAX_LENGTH);
    return new mt(e);
  }
  /**
   * Converts the idempotency key to a base58 string.
   * @returns {string} A base58 encoded string representing the idempotency key.
   */
  toString() {
    return ru.encode(this.value);
  }
}
mt.MAX_LENGTH = 11;
function hp(n) {
  return cn.fromSeed(_f(n.toBinary()));
}
class Mf {
  /**
   * Constructs a new PaymentRequestIntent instance.
   *
   * @param opt - The payment request options.
   */
  constructor(e) {
    this.options = {
      ...e
    }, this.init(), this.validate(), this.options.idempotencyKey ? this.nonce = mt.fromSeed(this.options.idempotencyKey) : this.options.clientSecret ? this.nonce = mt.fromClientSecret(this.options.clientSecret) : this.nonce = mt.generate(), this.rendezvousPayload = this.toPayload(), this.rendezvousKeypair = hp(this.rendezvousPayload);
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
class Lc extends Mf {
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
  toPayload() {
    const e = Qe.RequestPayment, t = BigInt(this.convertedAmount), r = this.nonce.value;
    return new Gs({ kind: e, amount: t, nonce: r, currency: this.options.currency });
  }
  /**
   * Validates the payment request options.
   */
  validate() {
    if (Uc(this.options), !this.options.destination)
      throw Df();
    if (!this.options.amount)
      throw Cf();
    if (!this.options.currency)
      throw qf();
    if (!this.convertedAmount)
      throw Na();
  }
  /**
   * Converts the payment request intent to its protobuf representation.
   *
   * @returns The protobuf representation of the payment request intent.
   */
  toProto() {
    const e = St.fromBase58(this.options.destination), { currency: t, amount: r } = this.options;
    let i;
    t === "kin" ? i = {
      case: "exact",
      value: new Me({
        currency: "kin",
        exchangeRate: 1,
        quarks: Ee.fromDecimal(r).toQuarks(),
        nativeAmount: r
      })
    } : i = {
      case: "partial",
      value: new bt({
        currency: t,
        nativeAmount: r
      })
    };
    const o = new Yt({
      requestorAccount: new L({
        value: e.toBuffer()
      }),
      exchangeData: i
    });
    return new it({
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
      throw Na();
    const r = this.rendezvousKeypair.sign(e.toBinary()), i = this.rendezvousKeypair.getPublicKey().toBase58(), o = t.toBinary();
    return {
      envelope: e,
      signedBytes: o,
      intent: i,
      signature: r
    };
  }
}
class pp extends Lc {
  /**
   * Constructs a new PaymentRequestIntent instance.
   *
   * @param opt - The payment request options.
   */
  constructor(e) {
    super(e);
    const { signers: t } = e, { domain: r, verifier: i } = e.login;
    this.domain = r, this.verifier = St.fromBase58(i), t && (this.signer = t.find((o) => o.getPublicKey().toBase58() === i));
  }
  /**
   * Validates the payment request options.
   */
  validate() {
    if (super.validate(), !this.options.login)
      throw Fc();
    if (!this.options.login.domain)
      throw Ac();
    if (!this.options.login.verifier)
      throw ba();
  }
  /**
   * Converts the payment request intent to its protobuf representation.
   * Specifically, this method adds the domain and verifier to the request to
   * receive bill message.
   *
   * @returns The protobuf representation of the payment request intent.
   */
  toProto() {
    const t = super.toProto().kind.value;
    if (!t)
      throw Na();
    return t.domain = new at({
      value: this.domain
    }), t.verifier = new L({
      value: this.verifier.toBuffer()
    }), t.rendezvousKey = new L({
      value: this.rendezvousKeypair.getPublicKey().toBuffer()
    }), new it({
      kind: {
        case: "requestToReceiveBill",
        value: t
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
      throw ba();
    const e = this.toProto(), t = e.kind.value;
    if (!t)
      throw Na();
    t.signature = new G({
      value: this.signer.sign(t.toBinary())
    });
    const r = this.rendezvousKeypair.sign(e.toBinary()), i = this.rendezvousKeypair.getPublicKey().toBase58(), o = t.toBinary();
    return {
      envelope: e,
      signedBytes: o,
      intent: i,
      signature: r
    };
  }
}
class gp extends Mf {
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
    const { signers: t } = e, { domain: r, verifier: i } = e.login;
    this.domain = r, this.verifier = St.fromBase58(i), t && (this.signer = t.find((o) => o.getPublicKey().toBase58() === i));
  }
  init() {
  }
  toPayload() {
    const e = Qe.RequestLogin, t = this.nonce.value;
    return new Gs({ kind: e, nonce: t });
  }
  /**
   * Validates the payment request options.
   */
  validate() {
    if (Uc(this.options), !this.options.login)
      throw Fc();
    if (!this.options.login.domain)
      throw Ac();
    if (!this.options.login.verifier)
      throw ba();
  }
  /**
   * Converts the payment request intent to its protobuf representation.
   *
   * @returns The protobuf representation of the payment request intent.
   */
  toProto() {
    const e = new Rt({
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
      throw ba();
    const e = this.toProto(), t = e.kind.value;
    if (!t)
      throw Na();
    t.signature = new G({
      value: this.signer.sign(t.toBinary())
    });
    const r = this.rendezvousKeypair.sign(e.toBinary()), i = this.rendezvousKeypair.getPublicKey().toBase58(), o = t.toBinary();
    return {
      envelope: e,
      signedBytes: o,
      intent: i,
      signature: r
    };
  }
}
function wp(n) {
  return typeof btoa == "function" ? btoa(n) : Bc.Buffer.from(n, "binary").toString("base64");
}
function Fa(n) {
  return encodeURIComponent(wp(JSON.stringify(n ?? {})));
}
function Bs(n, e) {
  const t = /* @__PURE__ */ Object.create(null), r = n.split(",");
  for (let i = 0; i < r.length; i++)
    t[r[i]] = !0;
  return e ? (i) => !!t[i.toLowerCase()] : (i) => !!t[i];
}
const xe = Object.freeze({}), Ws = Object.freeze([]), st = () => {
}, Vf = () => !1, yp = /^on[^a-z]/, Aa = (n) => yp.test(n), su = (n) => n.startsWith("onUpdate:"), Se = Object.assign, Dc = (n, e) => {
  const t = n.indexOf(e);
  t > -1 && n.splice(t, 1);
}, Tp = Object.prototype.hasOwnProperty, de = (n, e) => Tp.call(n, e), ee = Array.isArray, Ys = (n) => Tu(n) === "[object Map]", Ep = (n) => Tu(n) === "[object Set]", se = (n) => typeof n == "function", Ue = (n) => typeof n == "string", Cc = (n) => typeof n == "symbol", Oe = (n) => n !== null && typeof n == "object", qc = (n) => Oe(n) && se(n.then) && se(n.catch), Np = Object.prototype.toString, Tu = (n) => Np.call(n), Kc = (n) => Tu(n).slice(8, -1), bp = (n) => Tu(n) === "[object Object]", Pc = (n) => Ue(n) && n !== "NaN" && n[0] !== "-" && "" + parseInt(n, 10) === n, Xa = /* @__PURE__ */ Bs(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), xp = /* @__PURE__ */ Bs(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Eu = (n) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (t) => e[t] || (e[t] = n(t));
}, Bp = /-(\w)/g, Qs = Eu((n) => n.replace(Bp, (e, t) => t ? t.toUpperCase() : "")), kp = /\B([A-Z])/g, Es = Eu(
  (n) => n.replace(kp, "-$1").toLowerCase()
), Nu = Eu(
  (n) => n.charAt(0).toUpperCase() + n.slice(1)
), vs = Eu(
  (n) => n ? `on${Nu(n)}` : ""
), xa = (n, e) => !Object.is(n, e), so = (n, e) => {
  for (let t = 0; t < n.length; t++)
    n[t](e);
}, ou = (n, e, t) => {
  Object.defineProperty(n, e, {
    configurable: !0,
    enumerable: !1,
    value: t
  });
}, Op = (n) => {
  const e = parseFloat(n);
  return isNaN(e) ? n : e;
};
let Bl;
const au = () => Bl || (Bl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof {} < "u" ? {} : {});
function ks(n) {
  if (ee(n)) {
    const e = {};
    for (let t = 0; t < n.length; t++) {
      const r = n[t], i = Ue(r) ? Jp(r) : ks(r);
      if (i)
        for (const o in i)
          e[o] = i[o];
    }
    return e;
  } else {
    if (Ue(n))
      return n;
    if (Oe(n))
      return n;
  }
}
const Ip = /;(?![^(]*\))/g, Sp = /:([^]+)/, vp = /\/\*[^]*?\*\//g;
function Jp(n) {
  const e = {};
  return n.replace(vp, "").split(Ip).forEach((t) => {
    if (t) {
      const r = t.split(Sp);
      r.length > 1 && (e[r[0].trim()] = r[1].trim());
    }
  }), e;
}
function $c(n) {
  let e = "";
  if (Ue(n))
    e = n;
  else if (ee(n))
    for (let t = 0; t < n.length; t++) {
      const r = $c(n[t]);
      r && (e += r + " ");
    }
  else if (Oe(n))
    for (const t in n)
      n[t] && (e += t + " ");
  return e.trim();
}
const Fp = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Ap = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Up = /* @__PURE__ */ Bs(Fp), Lp = /* @__PURE__ */ Bs(Ap), Dp = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Cp = /* @__PURE__ */ Bs(Dp);
function Hf(n) {
  return !!n || n === "";
}
function rc(n, ...e) {
  console.warn(`[Vue warn] ${n}`, ...e);
}
let wt;
class qp {
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
      rc("cannot run an inactive effect scope.");
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
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Kp(n, e = wt) {
  e && e.active && e.effects.push(n);
}
function Pp() {
  return wt;
}
const _c = (n) => {
  const e = new Set(n);
  return e.w = 0, e.n = 0, e;
}, jf = (n) => (n.w & Ns) > 0, zf = (n) => (n.n & Ns) > 0, $p = ({ deps: n }) => {
  if (n.length)
    for (let e = 0; e < n.length; e++)
      n[e].w |= Ns;
}, _p = (n) => {
  const { deps: e } = n;
  if (e.length) {
    let t = 0;
    for (let r = 0; r < e.length; r++) {
      const i = e[r];
      jf(i) && !zf(i) ? i.delete(n) : e[t++] = i, i.w &= ~Ns, i.n &= ~Ns;
    }
    e.length = t;
  }
}, ic = /* @__PURE__ */ new WeakMap();
let fo = 0, Ns = 1;
const sc = 30;
let Xe;
const As = Symbol("iterate"), oc = Symbol("Map key iterate");
class Mc {
  constructor(e, t = null, r) {
    this.fn = e, this.scheduler = t, this.active = !0, this.deps = [], this.parent = void 0, Kp(this, r);
  }
  run() {
    if (!this.active)
      return this.fn();
    let e = Xe, t = ws;
    for (; e; ) {
      if (e === this)
        return;
      e = e.parent;
    }
    try {
      return this.parent = Xe, Xe = this, ws = !0, Ns = 1 << ++fo, fo <= sc ? $p(this) : kl(this), this.fn();
    } finally {
      fo <= sc && _p(this), Ns = 1 << --fo, Xe = this.parent, ws = t, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    Xe === this ? this.deferStop = !0 : this.active && (kl(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function kl(n) {
  const { deps: e } = n;
  if (e.length) {
    for (let t = 0; t < e.length; t++)
      e[t].delete(n);
    e.length = 0;
  }
}
let ws = !0;
const Wf = [];
function Ks() {
  Wf.push(ws), ws = !1;
}
function Ps() {
  const n = Wf.pop();
  ws = n === void 0 ? !0 : n;
}
function We(n, e, t) {
  if (ws && Xe) {
    let r = ic.get(n);
    r || ic.set(n, r = /* @__PURE__ */ new Map());
    let i = r.get(t);
    i || r.set(t, i = _c()), Yf(i, { effect: Xe, target: n, type: e, key: t });
  }
}
function Yf(n, e) {
  let t = !1;
  fo <= sc ? zf(n) || (n.n |= Ns, t = !jf(n)) : t = !n.has(Xe), t && (n.add(Xe), Xe.deps.push(n), Xe.onTrack && Xe.onTrack(
    Se(
      {
        effect: Xe
      },
      e
    )
  ));
}
function rn(n, e, t, r, i, o) {
  const c = ic.get(n);
  if (!c)
    return;
  let u = [];
  if (e === "clear")
    u = [...c.values()];
  else if (t === "length" && ee(n)) {
    const m = Number(r);
    c.forEach((h, g) => {
      (g === "length" || g >= m) && u.push(h);
    });
  } else
    switch (t !== void 0 && u.push(c.get(t)), e) {
      case "add":
        ee(n) ? Pc(t) && u.push(c.get("length")) : (u.push(c.get(As)), Ys(n) && u.push(c.get(oc)));
        break;
      case "delete":
        ee(n) || (u.push(c.get(As)), Ys(n) && u.push(c.get(oc)));
        break;
      case "set":
        Ys(n) && u.push(c.get(As));
        break;
    }
  const f = { target: n, type: e, key: t, newValue: r, oldValue: i, oldTarget: o };
  if (u.length === 1)
    u[0] && ac(u[0], f);
  else {
    const m = [];
    for (const h of u)
      h && m.push(...h);
    ac(_c(m), f);
  }
}
function ac(n, e) {
  const t = ee(n) ? n : [...n];
  for (const r of t)
    r.computed && Ol(r, e);
  for (const r of t)
    r.computed || Ol(r, e);
}
function Ol(n, e) {
  (n !== Xe || n.allowRecurse) && (n.onTrigger && n.onTrigger(Se({ effect: n }, e)), n.scheduler ? n.scheduler() : n.run());
}
const Mp = /* @__PURE__ */ Bs("__proto__,__v_isRef,__isVue"), Rf = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((n) => n !== "arguments" && n !== "caller").map((n) => Symbol[n]).filter(Cc)
), Vp = /* @__PURE__ */ bu(), Hp = /* @__PURE__ */ bu(!1, !0), jp = /* @__PURE__ */ bu(!0), zp = /* @__PURE__ */ bu(!0, !0), Il = /* @__PURE__ */ Wp();
function Wp() {
  const n = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
    n[e] = function(...t) {
      const r = ce(this);
      for (let o = 0, c = this.length; o < c; o++)
        We(r, "get", o + "");
      const i = r[e](...t);
      return i === -1 || i === !1 ? r[e](...t.map(ce)) : i;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
    n[e] = function(...t) {
      Ks();
      const r = ce(this)[e].apply(this, t);
      return Ps(), r;
    };
  }), n;
}
function Yp(n) {
  const e = ce(this);
  return We(e, "has", n), e.hasOwnProperty(n);
}
function bu(n = !1, e = !1) {
  return function(r, i, o) {
    if (i === "__v_isReactive")
      return !n;
    if (i === "__v_isReadonly")
      return n;
    if (i === "__v_isShallow")
      return e;
    if (i === "__v_raw" && o === (n ? e ? rm : nm : e ? tm : em).get(r))
      return r;
    const c = ee(r);
    if (!n) {
      if (c && de(Il, i))
        return Reflect.get(Il, i, o);
      if (i === "hasOwnProperty")
        return Yp;
    }
    const u = Reflect.get(r, i, o);
    return (Cc(i) ? Rf.has(i) : Mp(i)) || (n || We(r, "get", i), e) ? u : $e(u) ? c && Pc(i) ? u : u.value : Oe(u) ? n ? im(u) : ku(u) : u;
  };
}
const Rp = /* @__PURE__ */ Xf(), Xp = /* @__PURE__ */ Xf(!0);
function Xf(n = !1) {
  return function(t, r, i, o) {
    let c = t[r];
    if (bs(c) && $e(c) && !$e(i))
      return !1;
    if (!n && (!uu(i) && !bs(i) && (c = ce(c), i = ce(i)), !ee(t) && $e(c) && !$e(i)))
      return c.value = i, !0;
    const u = ee(t) && Pc(r) ? Number(r) < t.length : de(t, r), f = Reflect.set(t, r, i, o);
    return t === ce(o) && (u ? xa(i, c) && rn(t, "set", r, i, c) : rn(t, "add", r, i)), f;
  };
}
function Zp(n, e) {
  const t = de(n, e), r = n[e], i = Reflect.deleteProperty(n, e);
  return i && t && rn(n, "delete", e, void 0, r), i;
}
function Gp(n, e) {
  const t = Reflect.has(n, e);
  return (!Cc(e) || !Rf.has(e)) && We(n, "has", e), t;
}
function Qp(n) {
  return We(n, "iterate", ee(n) ? "length" : As), Reflect.ownKeys(n);
}
const Zf = {
  get: Vp,
  set: Rp,
  deleteProperty: Zp,
  has: Gp,
  ownKeys: Qp
}, Gf = {
  get: jp,
  set(n, e) {
    return rc(
      `Set operation on key "${String(e)}" failed: target is readonly.`,
      n
    ), !0;
  },
  deleteProperty(n, e) {
    return rc(
      `Delete operation on key "${String(e)}" failed: target is readonly.`,
      n
    ), !0;
  }
}, eg = /* @__PURE__ */ Se(
  {},
  Zf,
  {
    get: Hp,
    set: Xp
  }
), tg = /* @__PURE__ */ Se(
  {},
  Gf,
  {
    get: zp
  }
), Vc = (n) => n, xu = (n) => Reflect.getPrototypeOf(n);
function Pa(n, e, t = !1, r = !1) {
  n = n.__v_raw;
  const i = ce(n), o = ce(e);
  t || (e !== o && We(i, "get", e), We(i, "get", o));
  const { has: c } = xu(i), u = r ? Vc : t ? Hc : Ba;
  if (c.call(i, e))
    return u(n.get(e));
  if (c.call(i, o))
    return u(n.get(o));
  n !== i && n.get(e);
}
function $a(n, e = !1) {
  const t = this.__v_raw, r = ce(t), i = ce(n);
  return e || (n !== i && We(r, "has", n), We(r, "has", i)), n === i ? t.has(n) : t.has(n) || t.has(i);
}
function _a(n, e = !1) {
  return n = n.__v_raw, !e && We(ce(n), "iterate", As), Reflect.get(n, "size", n);
}
function Sl(n) {
  n = ce(n);
  const e = ce(this);
  return xu(e).has.call(e, n) || (e.add(n), rn(e, "add", n, n)), this;
}
function vl(n, e) {
  e = ce(e);
  const t = ce(this), { has: r, get: i } = xu(t);
  let o = r.call(t, n);
  o ? Qf(t, r, n) : (n = ce(n), o = r.call(t, n));
  const c = i.call(t, n);
  return t.set(n, e), o ? xa(e, c) && rn(t, "set", n, e, c) : rn(t, "add", n, e), this;
}
function Jl(n) {
  const e = ce(this), { has: t, get: r } = xu(e);
  let i = t.call(e, n);
  i ? Qf(e, t, n) : (n = ce(n), i = t.call(e, n));
  const o = r ? r.call(e, n) : void 0, c = e.delete(n);
  return i && rn(e, "delete", n, void 0, o), c;
}
function Fl() {
  const n = ce(this), e = n.size !== 0, t = Ys(n) ? new Map(n) : new Set(n), r = n.clear();
  return e && rn(n, "clear", void 0, void 0, t), r;
}
function Ma(n, e) {
  return function(r, i) {
    const o = this, c = o.__v_raw, u = ce(c), f = e ? Vc : n ? Hc : Ba;
    return !n && We(u, "iterate", As), c.forEach((m, h) => r.call(i, f(m), f(h), o));
  };
}
function Va(n, e, t) {
  return function(...r) {
    const i = this.__v_raw, o = ce(i), c = Ys(o), u = n === "entries" || n === Symbol.iterator && c, f = n === "keys" && c, m = i[n](...r), h = t ? Vc : e ? Hc : Ba;
    return !e && We(
      o,
      "iterate",
      f ? oc : As
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
function fs(n) {
  return function(...e) {
    {
      const t = e[0] ? `on key "${e[0]}" ` : "";
      console.warn(
        `${Nu(n)} operation ${t}failed: target is readonly.`,
        ce(this)
      );
    }
    return n === "delete" ? !1 : this;
  };
}
function ng() {
  const n = {
    get(o) {
      return Pa(this, o);
    },
    get size() {
      return _a(this);
    },
    has: $a,
    add: Sl,
    set: vl,
    delete: Jl,
    clear: Fl,
    forEach: Ma(!1, !1)
  }, e = {
    get(o) {
      return Pa(this, o, !1, !0);
    },
    get size() {
      return _a(this);
    },
    has: $a,
    add: Sl,
    set: vl,
    delete: Jl,
    clear: Fl,
    forEach: Ma(!1, !0)
  }, t = {
    get(o) {
      return Pa(this, o, !0);
    },
    get size() {
      return _a(this, !0);
    },
    has(o) {
      return $a.call(this, o, !0);
    },
    add: fs("add"),
    set: fs("set"),
    delete: fs("delete"),
    clear: fs("clear"),
    forEach: Ma(!0, !1)
  }, r = {
    get(o) {
      return Pa(this, o, !0, !0);
    },
    get size() {
      return _a(this, !0);
    },
    has(o) {
      return $a.call(this, o, !0);
    },
    add: fs("add"),
    set: fs("set"),
    delete: fs("delete"),
    clear: fs("clear"),
    forEach: Ma(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
    n[o] = Va(
      o,
      !1,
      !1
    ), t[o] = Va(
      o,
      !0,
      !1
    ), e[o] = Va(
      o,
      !1,
      !0
    ), r[o] = Va(
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
  rg,
  ig,
  sg,
  og
] = /* @__PURE__ */ ng();
function Bu(n, e) {
  const t = e ? n ? og : sg : n ? ig : rg;
  return (r, i, o) => i === "__v_isReactive" ? !n : i === "__v_isReadonly" ? n : i === "__v_raw" ? r : Reflect.get(
    de(t, i) && i in r ? t : r,
    i,
    o
  );
}
const ag = {
  get: /* @__PURE__ */ Bu(!1, !1)
}, ug = {
  get: /* @__PURE__ */ Bu(!1, !0)
}, cg = {
  get: /* @__PURE__ */ Bu(!0, !1)
}, lg = {
  get: /* @__PURE__ */ Bu(!0, !0)
};
function Qf(n, e, t) {
  const r = ce(t);
  if (r !== t && e.call(n, r)) {
    const i = Kc(n);
    console.warn(
      `Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const em = /* @__PURE__ */ new WeakMap(), tm = /* @__PURE__ */ new WeakMap(), nm = /* @__PURE__ */ new WeakMap(), rm = /* @__PURE__ */ new WeakMap();
function fg(n) {
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
function mg(n) {
  return n.__v_skip || !Object.isExtensible(n) ? 0 : fg(Kc(n));
}
function ku(n) {
  return bs(n) ? n : Ou(
    n,
    !1,
    Zf,
    ag,
    em
  );
}
function dg(n) {
  return Ou(
    n,
    !1,
    eg,
    ug,
    tm
  );
}
function im(n) {
  return Ou(
    n,
    !0,
    Gf,
    cg,
    nm
  );
}
function mo(n) {
  return Ou(
    n,
    !0,
    tg,
    lg,
    rm
  );
}
function Ou(n, e, t, r, i) {
  if (!Oe(n))
    return console.warn(`value cannot be made reactive: ${String(n)}`), n;
  if (n.__v_raw && !(e && n.__v_isReactive))
    return n;
  const o = i.get(n);
  if (o)
    return o;
  const c = mg(n);
  if (c === 0)
    return n;
  const u = new Proxy(
    n,
    c === 2 ? r : t
  );
  return i.set(n, u), u;
}
function Us(n) {
  return bs(n) ? Us(n.__v_raw) : !!(n && n.__v_isReactive);
}
function bs(n) {
  return !!(n && n.__v_isReadonly);
}
function uu(n) {
  return !!(n && n.__v_isShallow);
}
function uc(n) {
  return Us(n) || bs(n);
}
function ce(n) {
  const e = n && n.__v_raw;
  return e ? ce(e) : n;
}
function sm(n) {
  return ou(n, "__v_skip", !0), n;
}
const Ba = (n) => Oe(n) ? ku(n) : n, Hc = (n) => Oe(n) ? im(n) : n;
function om(n) {
  ws && Xe && (n = ce(n), Yf(n.dep || (n.dep = _c()), {
    target: n,
    type: "get",
    key: "value"
  }));
}
function am(n, e) {
  n = ce(n);
  const t = n.dep;
  t && ac(t, {
    target: n,
    type: "set",
    key: "value",
    newValue: e
  });
}
function $e(n) {
  return !!(n && n.__v_isRef === !0);
}
function kt(n) {
  return hg(n, !1);
}
function hg(n, e) {
  return $e(n) ? n : new pg(n, e);
}
class pg {
  constructor(e, t) {
    this.__v_isShallow = t, this.dep = void 0, this.__v_isRef = !0, this._rawValue = t ? e : ce(e), this._value = t ? e : Ba(e);
  }
  get value() {
    return om(this), this._value;
  }
  set value(e) {
    const t = this.__v_isShallow || uu(e) || bs(e);
    e = t ? e : ce(e), xa(e, this._rawValue) && (this._rawValue = e, this._value = t ? e : Ba(e), am(this, e));
  }
}
function ms(n) {
  return $e(n) ? n.value : n;
}
const gg = {
  get: (n, e, t) => ms(Reflect.get(n, e, t)),
  set: (n, e, t, r) => {
    const i = n[e];
    return $e(i) && !$e(t) ? (i.value = t, !0) : Reflect.set(n, e, t, r);
  }
};
function um(n) {
  return Us(n) ? n : new Proxy(n, gg);
}
class wg {
  constructor(e, t, r, i) {
    this._setter = t, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new Mc(e, () => {
      this._dirty || (this._dirty = !0, am(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !i, this.__v_isReadonly = r;
  }
  get value() {
    const e = ce(this);
    return om(e), (e._dirty || !e._cacheable) && (e._dirty = !1, e._value = e.effect.run()), e._value;
  }
  set value(e) {
    this._setter(e);
  }
}
function yg(n, e, t = !1) {
  let r, i;
  const o = se(n);
  o ? (r = n, i = () => {
    console.warn("Write operation failed: computed value is readonly");
  }) : (r = n.get, i = n.set);
  const c = new wg(r, i, o || !i, t);
  return e && !t && (c.effect.onTrack = e.onTrack, c.effect.onTrigger = e.onTrigger), c;
}
const Ls = [];
function Za(n) {
  Ls.push(n);
}
function Ga() {
  Ls.pop();
}
function K(n, ...e) {
  Ks();
  const t = Ls.length ? Ls[Ls.length - 1].component : null, r = t && t.appContext.config.warnHandler, i = Tg();
  if (r)
    rs(
      r,
      t,
      11,
      [
        n + e.join(""),
        t && t.proxy,
        i.map(
          ({ vnode: o }) => `at <${Uu(t, o.type)}>`
        ).join(`
`),
        i
      ]
    );
  else {
    const o = [`[Vue warn]: ${n}`, ...e];
    i.length && o.push(`
`, ...Eg(i)), console.warn(...o);
  }
  Ps();
}
function Tg() {
  let n = Ls[Ls.length - 1];
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
function Eg(n) {
  const e = [];
  return n.forEach((t, r) => {
    e.push(...r === 0 ? [] : [`
`], ...Ng(t));
  }), e;
}
function Ng({ vnode: n, recurseCount: e }) {
  const t = e > 0 ? `... (${e} recursive calls)` : "", r = n.component ? n.component.parent == null : !1, i = ` at <${Uu(
    n.component,
    n.type,
    r
  )}`, o = ">" + t;
  return n.props ? [i, ...bg(n.props), o] : [i + o];
}
function bg(n) {
  const e = [], t = Object.keys(n);
  return t.slice(0, 3).forEach((r) => {
    e.push(...cm(r, n[r]));
  }), t.length > 3 && e.push(" ..."), e;
}
function cm(n, e, t) {
  return Ue(e) ? (e = JSON.stringify(e), t ? e : [`${n}=${e}`]) : typeof e == "number" || typeof e == "boolean" || e == null ? t ? e : [`${n}=${e}`] : $e(e) ? (e = cm(n, ce(e.value), !0), t ? e : [`${n}=Ref<`, e, ">"]) : se(e) ? [`${n}=fn${e.name ? `<${e.name}>` : ""}`] : (e = ce(e), t ? e : [`${n}=`, e]);
}
const jc = {
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
function rs(n, e, t, r) {
  let i;
  try {
    i = r ? n(...r) : n();
  } catch (o) {
    Iu(o, e, t);
  }
  return i;
}
function Ot(n, e, t, r) {
  if (se(n)) {
    const o = rs(n, e, t, r);
    return o && qc(o) && o.catch((c) => {
      Iu(c, e, t);
    }), o;
  }
  const i = [];
  for (let o = 0; o < n.length; o++)
    i.push(Ot(n[o], e, t, r));
  return i;
}
function Iu(n, e, t, r = !0) {
  const i = e ? e.vnode : null;
  if (e) {
    let o = e.parent;
    const c = e.proxy, u = jc[t];
    for (; o; ) {
      const m = o.ec;
      if (m) {
        for (let h = 0; h < m.length; h++)
          if (m[h](n, c, u) === !1)
            return;
      }
      o = o.parent;
    }
    const f = e.appContext.config.errorHandler;
    if (f) {
      rs(
        f,
        null,
        10,
        [n, c, u]
      );
      return;
    }
  }
  xg(n, t, i, r);
}
function xg(n, e, t, r = !0) {
  {
    const i = jc[e];
    if (t && Za(t), K(`Unhandled error${i ? ` during execution of ${i}` : ""}`), t && Ga(), r)
      throw n;
    console.error(n);
  }
}
let ka = !1, cc = !1;
const ze = [];
let Lt = 0;
const Rs = [];
let At = null, ds = 0;
const lm = /* @__PURE__ */ Promise.resolve();
let zc = null;
const Bg = 100;
function lc(n) {
  const e = zc || lm;
  return n ? e.then(this ? n.bind(this) : n) : e;
}
function kg(n) {
  let e = Lt + 1, t = ze.length;
  for (; e < t; ) {
    const r = e + t >>> 1;
    Oa(ze[r]) < n ? e = r + 1 : t = r;
  }
  return e;
}
function Su(n) {
  (!ze.length || !ze.includes(
    n,
    ka && n.allowRecurse ? Lt + 1 : Lt
  )) && (n.id == null ? ze.push(n) : ze.splice(kg(n.id), 0, n), fm());
}
function fm() {
  !ka && !cc && (cc = !0, zc = lm.then(hm));
}
function Og(n) {
  const e = ze.indexOf(n);
  e > Lt && ze.splice(e, 1);
}
function mm(n) {
  ee(n) ? Rs.push(...n) : (!At || !At.includes(
    n,
    n.allowRecurse ? ds + 1 : ds
  )) && Rs.push(n), fm();
}
function Al(n, e = ka ? Lt + 1 : 0) {
  for (n = n || /* @__PURE__ */ new Map(); e < ze.length; e++) {
    const t = ze[e];
    if (t && t.pre) {
      if (Wc(n, t))
        continue;
      ze.splice(e, 1), e--, t();
    }
  }
}
function dm(n) {
  if (Rs.length) {
    const e = [...new Set(Rs)];
    if (Rs.length = 0, At) {
      At.push(...e);
      return;
    }
    for (At = e, n = n || /* @__PURE__ */ new Map(), At.sort((t, r) => Oa(t) - Oa(r)), ds = 0; ds < At.length; ds++)
      Wc(n, At[ds]) || At[ds]();
    At = null, ds = 0;
  }
}
const Oa = (n) => n.id == null ? 1 / 0 : n.id, Ig = (n, e) => {
  const t = Oa(n) - Oa(e);
  if (t === 0) {
    if (n.pre && !e.pre)
      return -1;
    if (e.pre && !n.pre)
      return 1;
  }
  return t;
};
function hm(n) {
  cc = !1, ka = !0, n = n || /* @__PURE__ */ new Map(), ze.sort(Ig);
  const e = (t) => Wc(n, t);
  try {
    for (Lt = 0; Lt < ze.length; Lt++) {
      const t = ze[Lt];
      if (t && t.active !== !1) {
        if (e(t))
          continue;
        rs(t, null, 14);
      }
    }
  } finally {
    Lt = 0, ze.length = 0, dm(n), ka = !1, zc = null, (ze.length || Rs.length) && hm(n);
  }
}
function Wc(n, e) {
  if (!n.has(e))
    n.set(e, 1);
  else {
    const t = n.get(e);
    if (t > Bg) {
      const r = e.ownerInstance, i = r && Vm(r.type);
      return K(
        `Maximum recursive updates exceeded${i ? ` in component <${i}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`
      ), !0;
    } else
      n.set(e, t + 1);
  }
}
let ys = !1;
const Vs = /* @__PURE__ */ new Set();
au().__VUE_HMR_RUNTIME__ = {
  createRecord: _u(pm),
  rerender: _u(Jg),
  reload: _u(Fg)
};
const qs = /* @__PURE__ */ new Map();
function Sg(n) {
  const e = n.type.__hmrId;
  let t = qs.get(e);
  t || (pm(e, n.type), t = qs.get(e)), t.instances.add(n);
}
function vg(n) {
  qs.get(n.type.__hmrId).instances.delete(n);
}
function pm(n, e) {
  return qs.has(n) ? !1 : (qs.set(n, {
    initialDef: yo(e),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function yo(n) {
  return Hm(n) ? n.__vccOpts : n;
}
function Jg(n, e) {
  const t = qs.get(n);
  t && (t.initialDef.render = e, [...t.instances].forEach((r) => {
    e && (r.render = e, yo(r.type).render = e), r.renderCache = [], ys = !0, r.update(), ys = !1;
  }));
}
function Fg(n, e) {
  const t = qs.get(n);
  if (!t)
    return;
  e = yo(e), Ul(t.initialDef, e);
  const r = [...t.instances];
  for (const i of r) {
    const o = yo(i.type);
    Vs.has(o) || (o !== t.initialDef && Ul(o, e), Vs.add(o)), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (Vs.add(o), i.ceReload(e.styles), Vs.delete(o)) : i.parent ? Su(i.parent.update) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  mm(() => {
    for (const i of r)
      Vs.delete(
        yo(i.type)
      );
  });
}
function Ul(n, e) {
  Se(n, e);
  for (const t in n)
    t !== "__file" && !(t in e) && delete n[t];
}
function _u(n) {
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
let Dt, ho = [], fc = !1;
function Ua(n, ...e) {
  Dt ? Dt.emit(n, ...e) : fc || ho.push({ event: n, args: e });
}
function gm(n, e) {
  var t, r;
  Dt = n, Dt ? (Dt.enabled = !0, ho.forEach(({ event: i, args: o }) => Dt.emit(i, ...o)), ho = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((r = (t = window.navigator) == null ? void 0 : t.userAgent) != null && r.includes("jsdom")) ? ((e.__VUE_DEVTOOLS_HOOK_REPLAY__ = e.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((o) => {
    gm(o, e);
  }), setTimeout(() => {
    Dt || (e.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, fc = !0, ho = []);
  }, 3e3)) : (fc = !0, ho = []);
}
function Ag(n, e) {
  Ua("app:init", n, e, {
    Fragment: yt,
    Text: La,
    Comment: ct,
    Static: eu
  });
}
function Ug(n) {
  Ua("app:unmount", n);
}
const Lg = /* @__PURE__ */ Yc(
  "component:added"
  /* COMPONENT_ADDED */
), wm = /* @__PURE__ */ Yc(
  "component:updated"
  /* COMPONENT_UPDATED */
), Dg = /* @__PURE__ */ Yc(
  "component:removed"
  /* COMPONENT_REMOVED */
), Cg = (n) => {
  Dt && typeof Dt.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Dt.cleanupBuffer(n) && Dg(n);
};
function Yc(n) {
  return (e) => {
    Ua(
      n,
      e.appContext.app,
      e.uid,
      e.parent ? e.parent.uid : void 0,
      e
    );
  };
}
const qg = /* @__PURE__ */ ym(
  "perf:start"
  /* PERFORMANCE_START */
), Kg = /* @__PURE__ */ ym(
  "perf:end"
  /* PERFORMANCE_END */
);
function ym(n) {
  return (e, t, r) => {
    Ua(n, e.appContext.app, e.uid, e, t, r);
  };
}
function Pg(n, e, t) {
  Ua(
    "component:emit",
    n.appContext.app,
    n,
    e,
    t
  );
}
function $g(n, e, ...t) {
  if (n.isUnmounted)
    return;
  const r = n.vnode.props || xe;
  {
    const {
      emitsOptions: h,
      propsOptions: [g]
    } = n;
    if (h)
      if (!(e in h))
        (!g || !(vs(e) in g)) && K(
          `Component emitted event "${e}" but it is neither declared in the emits option nor as an "${vs(e)}" prop.`
        );
      else {
        const y = h[e];
        se(y) && (y(...t) || K(
          `Invalid event arguments: event validation failed for event "${e}".`
        ));
      }
  }
  let i = t;
  const o = e.startsWith("update:"), c = o && e.slice(7);
  if (c && c in r) {
    const h = `${c === "modelValue" ? "model" : c}Modifiers`, { number: g, trim: y } = r[h] || xe;
    y && (i = t.map((b) => Ue(b) ? b.trim() : b)), g && (i = t.map(Op));
  }
  Pg(n, e, i);
  {
    const h = e.toLowerCase();
    h !== e && r[vs(h)] && K(
      `Event "${h}" is emitted in component ${Uu(
        n,
        n.type
      )} but the handler is registered for "${e}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Es(e)}" instead of "${e}".`
    );
  }
  let u, f = r[u = vs(e)] || // also try camelCase event handler (#2249)
  r[u = vs(Qs(e))];
  !f && o && (f = r[u = vs(Es(e))]), f && Ot(
    f,
    n,
    6,
    i
  );
  const m = r[u + "Once"];
  if (m) {
    if (!n.emitted)
      n.emitted = {};
    else if (n.emitted[u])
      return;
    n.emitted[u] = !0, Ot(
      m,
      n,
      6,
      i
    );
  }
}
function Tm(n, e, t = !1) {
  const r = e.emitsCache, i = r.get(n);
  if (i !== void 0)
    return i;
  const o = n.emits;
  let c = {}, u = !1;
  if (!se(n)) {
    const f = (m) => {
      const h = Tm(m, e, !0);
      h && (u = !0, Se(c, h));
    };
    !t && e.mixins.length && e.mixins.forEach(f), n.extends && f(n.extends), n.mixins && n.mixins.forEach(f);
  }
  return !o && !u ? (Oe(n) && r.set(n, null), null) : (ee(o) ? o.forEach((f) => c[f] = null) : Se(c, o), Oe(n) && r.set(n, c), c);
}
function vu(n, e) {
  return !n || !Aa(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), de(n, e[0].toLowerCase() + e.slice(1)) || de(n, Es(e)) || de(n, e));
}
let pt = null, Em = null;
function cu(n) {
  const e = pt;
  return pt = n, Em = n && n.type.__scopeId || null, e;
}
function _g(n, e = pt, t) {
  if (!e || n._n)
    return n;
  const r = (...i) => {
    r._d && zl(-1);
    const o = cu(e);
    let c;
    try {
      c = n(...i);
    } finally {
      cu(o), r._d && zl(1);
    }
    return wm(e), c;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
let mc = !1;
function lu() {
  mc = !0;
}
function Mu(n) {
  const {
    type: e,
    vnode: t,
    proxy: r,
    withProxy: i,
    props: o,
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
  } = n;
  let M, W;
  const me = cu(n);
  mc = !1;
  try {
    if (t.shapeFlag & 4) {
      const F = i || r;
      M = Tt(
        h.call(
          F,
          F,
          g,
          o,
          b,
          y,
          S
        )
      ), W = f;
    } else {
      const F = e;
      f === o && lu(), M = Tt(
        F.length > 1 ? F(
          o,
          {
            get attrs() {
              return lu(), f;
            },
            slots: u,
            emit: m
          }
        ) : F(
          o,
          null
          /* we know it doesn't need it */
        )
      ), W = e.props ? f : Vg(f);
    }
  } catch (F) {
    To.length = 0, Iu(F, n, 1), M = tn(ct);
  }
  let $ = M, re;
  if (M.patchFlag > 0 && M.patchFlag & 2048 && ([$, re] = Mg(M)), W && A !== !1) {
    const F = Object.keys(W), { shapeFlag: Y } = $;
    if (F.length) {
      if (Y & 7)
        c && F.some(su) && (W = Hg(
          W,
          c
        )), $ = xs($, W);
      else if (!mc && $.type !== ct) {
        const Q = Object.keys(f), te = [], ae = [];
        for (let Be = 0, Ie = Q.length; Be < Ie; Be++) {
          const Le = Q[Be];
          Aa(Le) ? su(Le) || te.push(Le[2].toLowerCase() + Le.slice(3)) : ae.push(Le);
        }
        ae.length && K(
          `Extraneous non-props attributes (${ae.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), te.length && K(
          `Extraneous non-emits event listeners (${te.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return t.dirs && (Ll($) || K(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), $ = xs($), $.dirs = $.dirs ? $.dirs.concat(t.dirs) : t.dirs), t.transition && (Ll($) || K(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), $.transition = t.transition), re ? re($) : M = $, cu(me), M;
}
const Mg = (n) => {
  const e = n.children, t = n.dynamicChildren, r = Nm(e);
  if (!r)
    return [n, void 0];
  const i = e.indexOf(r), o = t ? t.indexOf(r) : -1, c = (u) => {
    e[i] = u, t && (o > -1 ? t[o] = u : u.patchFlag > 0 && (n.dynamicChildren = [...t, u]));
  };
  return [Tt(r), c];
};
function Nm(n) {
  let e;
  for (let t = 0; t < n.length; t++) {
    const r = n[t];
    if (el(r)) {
      if (r.type !== ct || r.children === "v-if") {
        if (e)
          return;
        e = r;
      }
    } else
      return;
  }
  return e;
}
const Vg = (n) => {
  let e;
  for (const t in n)
    (t === "class" || t === "style" || Aa(t)) && ((e || (e = {}))[t] = n[t]);
  return e;
}, Hg = (n, e) => {
  const t = {};
  for (const r in n)
    (!su(r) || !(r.slice(9) in e)) && (t[r] = n[r]);
  return t;
}, Ll = (n) => n.shapeFlag & 7 || n.type === ct;
function jg(n, e, t) {
  const { props: r, children: i, component: o } = n, { props: c, children: u, patchFlag: f } = e, m = o.emitsOptions;
  if ((i || u) && ys || e.dirs || e.transition)
    return !0;
  if (t && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return r ? Dl(r, c, m) : !!c;
    if (f & 8) {
      const h = e.dynamicProps;
      for (let g = 0; g < h.length; g++) {
        const y = h[g];
        if (c[y] !== r[y] && !vu(m, y))
          return !0;
      }
    }
  } else
    return (i || u) && (!u || !u.$stable) ? !0 : r === c ? !1 : r ? c ? Dl(r, c, m) : !0 : !!c;
  return !1;
}
function Dl(n, e, t) {
  const r = Object.keys(e);
  if (r.length !== Object.keys(n).length)
    return !0;
  for (let i = 0; i < r.length; i++) {
    const o = r[i];
    if (e[o] !== n[o] && !vu(t, o))
      return !0;
  }
  return !1;
}
function zg({ vnode: n, parent: e }, t) {
  for (; e && e.subTree === n; )
    (n = e.vnode).el = t, e = e.parent;
}
const Wg = (n) => n.__isSuspense;
function Yg(n, e) {
  e && e.pendingBranch ? ee(n) ? e.effects.push(...n) : e.effects.push(n) : mm(n);
}
function bm(n, e) {
  return Rc(n, null, e);
}
const Ha = {};
function Vu(n, e, t) {
  return se(e) || K(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Rc(n, e, t);
}
function Rc(n, e, { immediate: t, deep: r, flush: i, onTrack: o, onTrigger: c } = xe) {
  var u;
  e || (t !== void 0 && K(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && K(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const f = (F) => {
    K(
      "Invalid watch source: ",
      F,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, m = Pp() === ((u = He) == null ? void 0 : u.scope) ? He : null;
  let h, g = !1, y = !1;
  if ($e(n) ? (h = () => n.value, g = uu(n)) : Us(n) ? (h = () => n, r = !0) : ee(n) ? (y = !0, g = n.some((F) => Us(F) || uu(F)), h = () => n.map((F) => {
    if ($e(F))
      return F.value;
    if (Us(F))
      return js(F);
    if (se(F))
      return rs(F, m, 2);
    f(F);
  })) : se(n) ? e ? h = () => rs(n, m, 2) : h = () => {
    if (!(m && m.isUnmounted))
      return b && b(), Ot(
        n,
        m,
        3,
        [S]
      );
  } : (h = st, f(n)), e && r) {
    const F = h;
    h = () => js(F());
  }
  let b, S = (F) => {
    b = $.onStop = () => {
      rs(F, m, 4);
    };
  }, A;
  if (Sa)
    if (S = st, e ? t && Ot(e, m, 3, [
      h(),
      y ? [] : void 0,
      S
    ]) : h(), i === "sync") {
      const F = ow();
      A = F.__watcherHandles || (F.__watcherHandles = []);
    } else
      return st;
  let M = y ? new Array(n.length).fill(Ha) : Ha;
  const W = () => {
    if ($.active)
      if (e) {
        const F = $.run();
        (r || g || (y ? F.some(
          (Y, Q) => xa(Y, M[Q])
        ) : xa(F, M))) && (b && b(), Ot(e, m, 3, [
          F,
          // pass undefined as the old value when it's changed for the first time
          M === Ha ? void 0 : y && M[0] === Ha ? [] : M,
          S
        ]), M = F);
      } else
        $.run();
  };
  W.allowRecurse = !!e;
  let me;
  i === "sync" ? me = W : i === "post" ? me = () => Ge(W, m && m.suspense) : (W.pre = !0, m && (W.id = m.uid), me = () => Su(W));
  const $ = new Mc(h, me);
  $.onTrack = o, $.onTrigger = c, e ? t ? W() : M = $.run() : i === "post" ? Ge(
    $.run.bind($),
    m && m.suspense
  ) : $.run();
  const re = () => {
    $.stop(), m && m.scope && Dc(m.scope.effects, $);
  };
  return A && A.push(re), re;
}
function Rg(n, e, t) {
  const r = this.proxy, i = Ue(n) ? n.includes(".") ? xm(r, n) : () => r[n] : n.bind(r, r);
  let o;
  se(e) ? o = e : (o = e.handler, t = e);
  const c = He;
  eo(this);
  const u = Rc(i, o.bind(r), t);
  return c ? eo(c) : Cs(), u;
}
function xm(n, e) {
  const t = e.split(".");
  return () => {
    let r = n;
    for (let i = 0; i < t.length && r; i++)
      r = r[t[i]];
    return r;
  };
}
function js(n, e) {
  if (!Oe(n) || n.__v_skip || (e = e || /* @__PURE__ */ new Set(), e.has(n)))
    return n;
  if (e.add(n), $e(n))
    js(n.value, e);
  else if (ee(n))
    for (let t = 0; t < n.length; t++)
      js(n[t], e);
  else if (Ep(n) || Ys(n))
    n.forEach((t) => {
      js(t, e);
    });
  else if (bp(n))
    for (const t in n)
      js(n[t], e);
  return n;
}
function Bm(n) {
  xp(n) && K("Do not use built-in directive ids as custom directive id: " + n);
}
function Os(n, e, t, r) {
  const i = n.dirs, o = e && e.dirs;
  for (let c = 0; c < i.length; c++) {
    const u = i[c];
    o && (u.oldValue = o[c].value);
    let f = u.dir[r];
    f && (Ks(), Ot(f, t, 8, [
      n.el,
      u,
      n,
      e
    ]), Ps());
  }
}
function to(n, e) {
  return se(n) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => Se({ name: n.name }, e, { setup: n }))()
  ) : n;
}
const Qa = (n) => !!n.type.__asyncLoader, Xc = (n) => n.type.__isKeepAlive;
function Xg(n, e) {
  km(n, "a", e);
}
function Zg(n, e) {
  km(n, "da", e);
}
function km(n, e, t = He) {
  const r = n.__wdc || (n.__wdc = () => {
    let i = t;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return n();
  });
  if (Ju(e, r, t), t) {
    let i = t.parent;
    for (; i && i.parent; )
      Xc(i.parent.vnode) && Gg(r, e, t, i), i = i.parent;
  }
}
function Gg(n, e, t, r) {
  const i = Ju(
    e,
    n,
    r,
    !0
    /* prepend */
  );
  Om(() => {
    Dc(r[e], i);
  }, t);
}
function Ju(n, e, t = He, r = !1) {
  if (t) {
    const i = t[n] || (t[n] = []), o = e.__weh || (e.__weh = (...c) => {
      if (t.isUnmounted)
        return;
      Ks(), eo(t);
      const u = Ot(e, t, n, c);
      return Cs(), Ps(), u;
    });
    return r ? i.unshift(o) : i.push(o), o;
  } else {
    const i = vs(jc[n].replace(/ hook$/, ""));
    K(
      `${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const is = (n) => (e, t = He) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Sa || n === "sp") && Ju(n, (...r) => e(...r), t)
), Qg = is("bm"), Fu = is("m"), e0 = is("bu"), t0 = is("u"), n0 = is("bum"), Om = is("um"), r0 = is("sp"), i0 = is(
  "rtg"
), s0 = is(
  "rtc"
);
function o0(n, e = He) {
  Ju("ec", n, e);
}
const a0 = Symbol.for("v-ndc"), dc = (n) => n ? _m(n) ? rl(n) || n.proxy : dc(n.parent) : null, Ds = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Se(/* @__PURE__ */ Object.create(null), {
    $: (n) => n,
    $el: (n) => n.vnode.el,
    $data: (n) => n.data,
    $props: (n) => mo(n.props),
    $attrs: (n) => mo(n.attrs),
    $slots: (n) => mo(n.slots),
    $refs: (n) => mo(n.refs),
    $parent: (n) => dc(n.parent),
    $root: (n) => dc(n.root),
    $emit: (n) => n.emit,
    $options: (n) => Gc(n),
    $forceUpdate: (n) => n.f || (n.f = () => Su(n.update)),
    $nextTick: (n) => n.n || (n.n = lc.bind(n.proxy)),
    $watch: (n) => Rg.bind(n)
  })
), Zc = (n) => n === "_" || n === "$", Hu = (n, e) => n !== xe && !n.__isScriptSetup && de(n, e), Im = {
  get({ _: n }, e) {
    const { ctx: t, setupState: r, data: i, props: o, accessCache: c, type: u, appContext: f } = n;
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
            return t[e];
          case 3:
            return o[e];
        }
      else {
        if (Hu(r, e))
          return c[e] = 1, r[e];
        if (i !== xe && de(i, e))
          return c[e] = 2, i[e];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (m = n.propsOptions[0]) && de(m, e)
        )
          return c[e] = 3, o[e];
        if (t !== xe && de(t, e))
          return c[e] = 4, t[e];
        hc && (c[e] = 0);
      }
    }
    const h = Ds[e];
    let g, y;
    if (h)
      return e === "$attrs" ? (We(n, "get", e), lu()) : e === "$slots" && We(n, "get", e), h(n);
    if (
      // css module (injected by vue-loader)
      (g = u.__cssModules) && (g = g[e])
    )
      return g;
    if (t !== xe && de(t, e))
      return c[e] = 4, t[e];
    if (
      // {} properties
      y = f.config.globalProperties, de(y, e)
    )
      return y[e];
    pt && (!Ue(e) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    e.indexOf("__v") !== 0) && (i !== xe && Zc(e[0]) && de(i, e) ? K(
      `Property ${JSON.stringify(
        e
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : n === pt && K(
      `Property ${JSON.stringify(e)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: n }, e, t) {
    const { data: r, setupState: i, ctx: o } = n;
    return Hu(i, e) ? (i[e] = t, !0) : i.__isScriptSetup && de(i, e) ? (K(`Cannot mutate <script setup> binding "${e}" from Options API.`), !1) : r !== xe && de(r, e) ? (r[e] = t, !0) : de(n.props, e) ? (K(`Attempting to mutate prop "${e}". Props are readonly.`), !1) : e[0] === "$" && e.slice(1) in n ? (K(
      `Attempting to mutate public property "${e}". Properties starting with $ are reserved and readonly.`
    ), !1) : (e in n.appContext.config.globalProperties ? Object.defineProperty(o, e, {
      enumerable: !0,
      configurable: !0,
      value: t
    }) : o[e] = t, !0);
  },
  has({
    _: { data: n, setupState: e, accessCache: t, ctx: r, appContext: i, propsOptions: o }
  }, c) {
    let u;
    return !!t[c] || n !== xe && de(n, c) || Hu(e, c) || (u = o[0]) && de(u, c) || de(r, c) || de(Ds, c) || de(i.config.globalProperties, c);
  },
  defineProperty(n, e, t) {
    return t.get != null ? n._.accessCache[e] = 0 : de(t, "value") && this.set(n, e, t.value, null), Reflect.defineProperty(n, e, t);
  }
};
Im.ownKeys = (n) => (K(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(n));
function u0(n) {
  const e = {};
  return Object.defineProperty(e, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => n
  }), Object.keys(Ds).forEach((t) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      get: () => Ds[t](n),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: st
    });
  }), e;
}
function c0(n) {
  const {
    ctx: e,
    propsOptions: [t]
  } = n;
  t && Object.keys(t).forEach((r) => {
    Object.defineProperty(e, r, {
      enumerable: !0,
      configurable: !0,
      get: () => n.props[r],
      set: st
    });
  });
}
function l0(n) {
  const { ctx: e, setupState: t } = n;
  Object.keys(ce(t)).forEach((r) => {
    if (!t.__isScriptSetup) {
      if (Zc(r[0])) {
        K(
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
        set: st
      });
    }
  });
}
function Cl(n) {
  return ee(n) ? n.reduce(
    (e, t) => (e[t] = null, e),
    {}
  ) : n;
}
function f0() {
  const n = /* @__PURE__ */ Object.create(null);
  return (e, t) => {
    n[t] ? K(`${e} property "${t}" is already defined in ${n[t]}.`) : n[t] = e;
  };
}
let hc = !0;
function m0(n) {
  const e = Gc(n), t = n.proxy, r = n.ctx;
  hc = !1, e.beforeCreate && ql(e.beforeCreate, n, "bc");
  const {
    // state
    data: i,
    computed: o,
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
    deactivated: M,
    beforeDestroy: W,
    beforeUnmount: me,
    destroyed: $,
    unmounted: re,
    render: F,
    renderTracked: Y,
    renderTriggered: Q,
    errorCaptured: te,
    serverPrefetch: ae,
    // public API
    expose: Be,
    inheritAttrs: Ie,
    // assets
    components: Le,
    directives: Ze,
    filters: sn
  } = e, je = f0();
  {
    const [he] = n.propsOptions;
    if (he)
      for (const P in he)
        je("Props", P);
  }
  if (m && d0(m, r, je), c)
    for (const he in c) {
      const P = c[he];
      se(P) ? (Object.defineProperty(r, he, {
        value: P.bind(t),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }), je("Methods", he)) : K(
        `Method "${he}" has type "${typeof P}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (i) {
    se(i) || K(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const he = i.call(t, t);
    if (qc(he) && K(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !Oe(he))
      K("data() should return an object.");
    else {
      n.data = ku(he);
      for (const P in he)
        je("Data", P), Zc(P[0]) || Object.defineProperty(r, P, {
          configurable: !0,
          enumerable: !0,
          get: () => he[P],
          set: st
        });
    }
  }
  if (hc = !0, o)
    for (const he in o) {
      const P = o[he], q = se(P) ? P.bind(t, t) : se(P.get) ? P.get.bind(t, t) : st;
      q === st && K(`Computed property "${he}" has no getter.`);
      const R = !se(P) && se(P.set) ? P.set.bind(t) : () => {
        K(
          `Write operation failed: computed property "${he}" is readonly.`
        );
      }, z = iw({
        get: q,
        set: R
      });
      Object.defineProperty(r, he, {
        enumerable: !0,
        configurable: !0,
        get: () => z.value,
        set: (X) => z.value = X
      }), je("Computed", he);
    }
  if (u)
    for (const he in u)
      Sm(u[he], r, t, he);
  if (f) {
    const he = se(f) ? f.call(t) : f;
    Reflect.ownKeys(he).forEach((P) => {
      T0(P, he[P]);
    });
  }
  h && ql(h, n, "c");
  function _e(he, P) {
    ee(P) ? P.forEach((q) => he(q.bind(t))) : P && he(P.bind(t));
  }
  if (_e(Qg, g), _e(Fu, y), _e(e0, b), _e(t0, S), _e(Xg, A), _e(Zg, M), _e(o0, te), _e(s0, Y), _e(i0, Q), _e(n0, me), _e(Om, re), _e(r0, ae), ee(Be))
    if (Be.length) {
      const he = n.exposed || (n.exposed = {});
      Be.forEach((P) => {
        Object.defineProperty(he, P, {
          get: () => t[P],
          set: (q) => t[P] = q
        });
      });
    } else
      n.exposed || (n.exposed = {});
  F && n.render === st && (n.render = F), Ie != null && (n.inheritAttrs = Ie), Le && (n.components = Le), Ze && (n.directives = Ze);
}
function d0(n, e, t = st) {
  ee(n) && (n = pc(n));
  for (const r in n) {
    const i = n[r];
    let o;
    Oe(i) ? "default" in i ? o = It(
      i.from || r,
      i.default,
      !0
      /* treat default function as factory */
    ) : o = It(i.from || r) : o = It(i), $e(o) ? Object.defineProperty(e, r, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (c) => o.value = c
    }) : e[r] = o, t("Inject", r);
  }
}
function ql(n, e, t) {
  Ot(
    ee(n) ? n.map((r) => r.bind(e.proxy)) : n.bind(e.proxy),
    e,
    t
  );
}
function Sm(n, e, t, r) {
  const i = r.includes(".") ? xm(t, r) : () => t[r];
  if (Ue(n)) {
    const o = e[n];
    se(o) ? Vu(i, o) : K(`Invalid watch handler specified by key "${n}"`, o);
  } else if (se(n))
    Vu(i, n.bind(t));
  else if (Oe(n))
    if (ee(n))
      n.forEach((o) => Sm(o, e, t, r));
    else {
      const o = se(n.handler) ? n.handler.bind(t) : e[n.handler];
      se(o) ? Vu(i, o, n) : K(`Invalid watch handler specified by key "${n.handler}"`, o);
    }
  else
    K(`Invalid watch option: "${r}"`, n);
}
function Gc(n) {
  const e = n.type, { mixins: t, extends: r } = e, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: c }
  } = n.appContext, u = o.get(e);
  let f;
  return u ? f = u : !i.length && !t && !r ? f = e : (f = {}, i.length && i.forEach(
    (m) => fu(f, m, c, !0)
  ), fu(f, e, c)), Oe(e) && o.set(e, f), f;
}
function fu(n, e, t, r = !1) {
  const { mixins: i, extends: o } = e;
  o && fu(n, o, t, !0), i && i.forEach(
    (c) => fu(n, c, t, !0)
  );
  for (const c in e)
    if (r && c === "expose")
      K(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const u = h0[c] || t && t[c];
      n[c] = u ? u(n[c], e[c]) : e[c];
    }
  return n;
}
const h0 = {
  data: Kl,
  props: Pl,
  emits: Pl,
  // objects
  methods: po,
  computed: po,
  // lifecycle
  beforeCreate: Re,
  created: Re,
  beforeMount: Re,
  mounted: Re,
  beforeUpdate: Re,
  updated: Re,
  beforeDestroy: Re,
  beforeUnmount: Re,
  destroyed: Re,
  unmounted: Re,
  activated: Re,
  deactivated: Re,
  errorCaptured: Re,
  serverPrefetch: Re,
  // assets
  components: po,
  directives: po,
  // watch
  watch: g0,
  // provide / inject
  provide: Kl,
  inject: p0
};
function Kl(n, e) {
  return e ? n ? function() {
    return Se(
      se(n) ? n.call(this, this) : n,
      se(e) ? e.call(this, this) : e
    );
  } : e : n;
}
function p0(n, e) {
  return po(pc(n), pc(e));
}
function pc(n) {
  if (ee(n)) {
    const e = {};
    for (let t = 0; t < n.length; t++)
      e[n[t]] = n[t];
    return e;
  }
  return n;
}
function Re(n, e) {
  return n ? [...new Set([].concat(n, e))] : e;
}
function po(n, e) {
  return n ? Se(/* @__PURE__ */ Object.create(null), n, e) : e;
}
function Pl(n, e) {
  return n ? ee(n) && ee(e) ? [.../* @__PURE__ */ new Set([...n, ...e])] : Se(
    /* @__PURE__ */ Object.create(null),
    Cl(n),
    Cl(e ?? {})
  ) : e;
}
function g0(n, e) {
  if (!n)
    return e;
  if (!e)
    return n;
  const t = Se(/* @__PURE__ */ Object.create(null), n);
  for (const r in e)
    t[r] = Re(n[r], e[r]);
  return t;
}
function vm() {
  return {
    app: null,
    config: {
      isNativeTag: Vf,
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
let w0 = 0;
function y0(n, e) {
  return function(r, i = null) {
    se(r) || (r = Se({}, r)), i != null && !Oe(i) && (K("root props passed to app.mount() must be an object."), i = null);
    const o = vm();
    Object.defineProperty(o.config, "unwrapInjectedRef", {
      get() {
        return !0;
      },
      set() {
        K(
          "app.config.unwrapInjectedRef has been deprecated. 3.3 now alawys unwraps injected refs in Options API."
        );
      }
    });
    const c = /* @__PURE__ */ new Set();
    let u = !1;
    const f = o.app = {
      _uid: w0++,
      _component: r,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: Rl,
      get config() {
        return o.config;
      },
      set config(m) {
        K(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(m, ...h) {
        return c.has(m) ? K("Plugin has already been applied to target app.") : m && se(m.install) ? (c.add(m), m.install(f, ...h)) : se(m) ? (c.add(m), m(f, ...h)) : K(
          'A plugin must either be a function or an object with an "install" function.'
        ), f;
      },
      mixin(m) {
        return o.mixins.includes(m) ? K(
          "Mixin has already been applied to target app" + (m.name ? `: ${m.name}` : "")
        ) : o.mixins.push(m), f;
      },
      component(m, h) {
        return Ec(m, o.config), h ? (o.components[m] && K(`Component "${m}" has already been registered in target app.`), o.components[m] = h, f) : o.components[m];
      },
      directive(m, h) {
        return Bm(m), h ? (o.directives[m] && K(`Directive "${m}" has already been registered in target app.`), o.directives[m] = h, f) : o.directives[m];
      },
      mount(m, h, g) {
        if (u)
          K(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          m.__vue_app__ && K(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const y = tn(
            r,
            i
          );
          return y.appContext = o, o.reload = () => {
            n(xs(y), m, g);
          }, h && e ? e(y, m) : n(y, m, g), u = !0, f._container = m, m.__vue_app__ = f, f._instance = y.component, Ag(f, Rl), rl(y.component) || y.component.proxy;
        }
      },
      unmount() {
        u ? (n(null, f._container), f._instance = null, Ug(f), delete f._container.__vue_app__) : K("Cannot unmount an app that is not mounted.");
      },
      provide(m, h) {
        return m in o.provides && K(
          `App already provides property with key "${String(m)}". It will be overwritten with the new value.`
        ), o.provides[m] = h, f;
      },
      runWithContext(m) {
        mu = f;
        try {
          return m();
        } finally {
          mu = null;
        }
      }
    };
    return f;
  };
}
let mu = null;
function T0(n, e) {
  if (!He)
    K("provide() can only be used inside setup().");
  else {
    let t = He.provides;
    const r = He.parent && He.parent.provides;
    r === t && (t = He.provides = Object.create(r)), t[n] = e;
  }
}
function It(n, e, t = !1) {
  const r = He || pt;
  if (r || mu) {
    const i = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : mu._context.provides;
    if (i && n in i)
      return i[n];
    if (arguments.length > 1)
      return t && se(e) ? e.call(r && r.proxy) : e;
    K(`injection "${String(n)}" not found.`);
  } else
    K("inject() can only be used inside setup() or functional components.");
}
function E0(n, e, t, r = !1) {
  const i = {}, o = {};
  ou(o, Au, 1), n.propsDefaults = /* @__PURE__ */ Object.create(null), Jm(n, e, i, o);
  for (const c in n.propsOptions[0])
    c in i || (i[c] = void 0);
  Am(e || {}, i, n), t ? n.props = r ? i : dg(i) : n.type.props ? n.props = i : n.props = o, n.attrs = o;
}
function N0(n) {
  for (; n; ) {
    if (n.type.__hmrId)
      return !0;
    n = n.parent;
  }
}
function b0(n, e, t, r) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: c }
  } = n, u = ce(i), [f] = n.propsOptions;
  let m = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !N0(n) && (r || c > 0) && !(c & 16)
  ) {
    if (c & 8) {
      const h = n.vnode.dynamicProps;
      for (let g = 0; g < h.length; g++) {
        let y = h[g];
        if (vu(n.emitsOptions, y))
          continue;
        const b = e[y];
        if (f)
          if (de(o, y))
            b !== o[y] && (o[y] = b, m = !0);
          else {
            const S = Qs(y);
            i[S] = gc(
              f,
              u,
              S,
              b,
              n,
              !1
              /* isAbsent */
            );
          }
        else
          b !== o[y] && (o[y] = b, m = !0);
      }
    }
  } else {
    Jm(n, e, i, o) && (m = !0);
    let h;
    for (const g in u)
      (!e || // for camelCase
      !de(e, g) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((h = Es(g)) === g || !de(e, h))) && (f ? t && // for camelCase
      (t[g] !== void 0 || // for kebab-case
      t[h] !== void 0) && (i[g] = gc(
        f,
        u,
        g,
        void 0,
        n,
        !0
        /* isAbsent */
      )) : delete i[g]);
    if (o !== u)
      for (const g in o)
        (!e || !de(e, g)) && (delete o[g], m = !0);
  }
  m && rn(n, "set", "$attrs"), Am(e || {}, i, n);
}
function Jm(n, e, t, r) {
  const [i, o] = n.propsOptions;
  let c = !1, u;
  if (e)
    for (let f in e) {
      if (Xa(f))
        continue;
      const m = e[f];
      let h;
      i && de(i, h = Qs(f)) ? !o || !o.includes(h) ? t[h] = m : (u || (u = {}))[h] = m : vu(n.emitsOptions, f) || (!(f in r) || m !== r[f]) && (r[f] = m, c = !0);
    }
  if (o) {
    const f = ce(t), m = u || xe;
    for (let h = 0; h < o.length; h++) {
      const g = o[h];
      t[g] = gc(
        i,
        f,
        g,
        m[g],
        n,
        !de(m, g)
      );
    }
  }
  return c;
}
function gc(n, e, t, r, i, o) {
  const c = n[t];
  if (c != null) {
    const u = de(c, "default");
    if (u && r === void 0) {
      const f = c.default;
      if (c.type !== Function && !c.skipFactory && se(f)) {
        const { propsDefaults: m } = i;
        t in m ? r = m[t] : (eo(i), r = m[t] = f.call(
          null,
          e
        ), Cs());
      } else
        r = f;
    }
    c[
      0
      /* shouldCast */
    ] && (o && !u ? r = !1 : c[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === Es(t)) && (r = !0));
  }
  return r;
}
function Fm(n, e, t = !1) {
  const r = e.propsCache, i = r.get(n);
  if (i)
    return i;
  const o = n.props, c = {}, u = [];
  let f = !1;
  if (!se(n)) {
    const h = (g) => {
      f = !0;
      const [y, b] = Fm(g, e, !0);
      Se(c, y), b && u.push(...b);
    };
    !t && e.mixins.length && e.mixins.forEach(h), n.extends && h(n.extends), n.mixins && n.mixins.forEach(h);
  }
  if (!o && !f)
    return Oe(n) && r.set(n, Ws), Ws;
  if (ee(o))
    for (let h = 0; h < o.length; h++) {
      Ue(o[h]) || K("props must be strings when using array syntax.", o[h]);
      const g = Qs(o[h]);
      $l(g) && (c[g] = xe);
    }
  else if (o) {
    Oe(o) || K("invalid props options", o);
    for (const h in o) {
      const g = Qs(h);
      if ($l(g)) {
        const y = o[h], b = c[g] = ee(y) || se(y) ? { type: y } : Se({}, y);
        if (b) {
          const S = Ml(Boolean, b.type), A = Ml(String, b.type);
          b[
            0
            /* shouldCast */
          ] = S > -1, b[
            1
            /* shouldCastTrue */
          ] = A < 0 || S < A, (S > -1 || de(b, "default")) && u.push(g);
        }
      }
    }
  }
  const m = [c, u];
  return Oe(n) && r.set(n, m), m;
}
function $l(n) {
  return n[0] !== "$" ? !0 : (K(`Invalid prop name: "${n}" is a reserved property.`), !1);
}
function wc(n) {
  const e = n && n.toString().match(/^\s*(function|class) (\w+)/);
  return e ? e[2] : n === null ? "null" : "";
}
function _l(n, e) {
  return wc(n) === wc(e);
}
function Ml(n, e) {
  return ee(e) ? e.findIndex((t) => _l(t, n)) : se(e) && _l(e, n) ? 0 : -1;
}
function Am(n, e, t) {
  const r = ce(e), i = t.propsOptions[0];
  for (const o in i) {
    let c = i[o];
    c != null && x0(
      o,
      r[o],
      c,
      !de(n, o) && !de(n, Es(o))
    );
  }
}
function x0(n, e, t, r) {
  const { type: i, required: o, validator: c, skipCheck: u } = t;
  if (o && r) {
    K('Missing required prop: "' + n + '"');
    return;
  }
  if (!(e == null && !o)) {
    if (i != null && i !== !0 && !u) {
      let f = !1;
      const m = ee(i) ? i : [i], h = [];
      for (let g = 0; g < m.length && !f; g++) {
        const { valid: y, expectedType: b } = k0(e, m[g]);
        h.push(b || ""), f = y;
      }
      if (!f) {
        K(O0(n, e, h));
        return;
      }
    }
    c && !c(e) && K('Invalid prop: custom validator check failed for prop "' + n + '".');
  }
}
const B0 = /* @__PURE__ */ Bs(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function k0(n, e) {
  let t;
  const r = wc(e);
  if (B0(r)) {
    const i = typeof n;
    t = i === r.toLowerCase(), !t && i === "object" && (t = n instanceof e);
  } else
    r === "Object" ? t = Oe(n) : r === "Array" ? t = ee(n) : r === "null" ? t = n === null : t = n instanceof e;
  return {
    valid: t,
    expectedType: r
  };
}
function O0(n, e, t) {
  let r = `Invalid prop: type check failed for prop "${n}". Expected ${t.map(Nu).join(" | ")}`;
  const i = t[0], o = Kc(e), c = Vl(e, i), u = Vl(e, o);
  return t.length === 1 && Hl(i) && !I0(i, o) && (r += ` with value ${c}`), r += `, got ${o} `, Hl(o) && (r += `with value ${u}.`), r;
}
function Vl(n, e) {
  return e === "String" ? `"${n}"` : e === "Number" ? `${Number(n)}` : `${n}`;
}
function Hl(n) {
  return ["string", "number", "boolean"].some((t) => n.toLowerCase() === t);
}
function I0(...n) {
  return n.some((e) => e.toLowerCase() === "boolean");
}
const Um = (n) => n[0] === "_" || n === "$stable", Qc = (n) => ee(n) ? n.map(Tt) : [Tt(n)], S0 = (n, e, t) => {
  if (e._n)
    return e;
  const r = _g((...i) => (He && K(
    `Slot "${n}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Qc(e(...i))), t);
  return r._c = !1, r;
}, Lm = (n, e, t) => {
  const r = n._ctx;
  for (const i in n) {
    if (Um(i))
      continue;
    const o = n[i];
    if (se(o))
      e[i] = S0(i, o, r);
    else if (o != null) {
      K(
        `Non-function value encountered for slot "${i}". Prefer function slots for better performance.`
      );
      const c = Qc(o);
      e[i] = () => c;
    }
  }
}, Dm = (n, e) => {
  Xc(n.vnode) || K(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const t = Qc(e);
  n.slots.default = () => t;
}, v0 = (n, e) => {
  if (n.vnode.shapeFlag & 32) {
    const t = e._;
    t ? (n.slots = ce(e), ou(e, "_", t)) : Lm(
      e,
      n.slots = {}
    );
  } else
    n.slots = {}, e && Dm(n, e);
  ou(n.slots, Au, 1);
}, J0 = (n, e, t) => {
  const { vnode: r, slots: i } = n;
  let o = !0, c = xe;
  if (r.shapeFlag & 32) {
    const u = e._;
    u ? ys ? (Se(i, e), rn(n, "set", "$slots")) : t && u === 1 ? o = !1 : (Se(i, e), !t && u === 1 && delete i._) : (o = !e.$stable, Lm(e, i)), c = e;
  } else
    e && (Dm(n, e), c = { default: 1 });
  if (o)
    for (const u in i)
      !Um(u) && !(u in c) && delete i[u];
};
function yc(n, e, t, r, i = !1) {
  if (ee(n)) {
    n.forEach(
      (y, b) => yc(
        y,
        e && (ee(e) ? e[b] : e),
        t,
        r,
        i
      )
    );
    return;
  }
  if (Qa(r) && !i)
    return;
  const o = r.shapeFlag & 4 ? rl(r.component) || r.component.proxy : r.el, c = i ? null : o, { i: u, r: f } = n;
  if (!u) {
    K(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const m = e && e.r, h = u.refs === xe ? u.refs = {} : u.refs, g = u.setupState;
  if (m != null && m !== f && (Ue(m) ? (h[m] = null, de(g, m) && (g[m] = null)) : $e(m) && (m.value = null)), se(f))
    rs(f, u, 12, [c, h]);
  else {
    const y = Ue(f), b = $e(f);
    if (y || b) {
      const S = () => {
        if (n.f) {
          const A = y ? de(g, f) ? g[f] : h[f] : f.value;
          i ? ee(A) && Dc(A, o) : ee(A) ? A.includes(o) || A.push(o) : y ? (h[f] = [o], de(g, f) && (g[f] = h[f])) : (f.value = [o], n.k && (h[n.k] = f.value));
        } else
          y ? (h[f] = c, de(g, f) && (g[f] = c)) : b ? (f.value = c, n.k && (h[n.k] = c)) : K("Invalid template ref type:", f, `(${typeof f})`);
      };
      c ? (S.id = -1, Ge(S, t)) : S();
    } else
      K("Invalid template ref type:", f, `(${typeof f})`);
  }
}
let oo, ps;
function on(n, e) {
  n.appContext.config.performance && du() && ps.mark(`vue-${e}-${n.uid}`), qg(n, e, du() ? ps.now() : Date.now());
}
function an(n, e) {
  if (n.appContext.config.performance && du()) {
    const t = `vue-${e}-${n.uid}`, r = t + ":end";
    ps.mark(r), ps.measure(
      `<${Uu(n, n.type)}> ${e}`,
      t,
      r
    ), ps.clearMarks(t), ps.clearMarks(r);
  }
  Kg(n, e, du() ? ps.now() : Date.now());
}
function du() {
  return oo !== void 0 || (typeof window < "u" && window.performance ? (oo = !0, ps = window.performance) : oo = !1), oo;
}
function F0() {
  const n = [];
  if (n.length) {
    const e = n.length > 1;
    console.warn(
      `Feature flag${e ? "s" : ""} ${n.join(", ")} ${e ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Ge = Yg;
function A0(n) {
  return U0(n);
}
function U0(n, e) {
  F0();
  const t = au();
  t.__VUE__ = !0, gm(t.__VUE_DEVTOOLS_GLOBAL_HOOK__, t);
  const {
    insert: r,
    remove: i,
    patchProp: o,
    createElement: c,
    createText: u,
    createComment: f,
    setText: m,
    setElementText: h,
    parentNode: g,
    nextSibling: y,
    setScopeId: b = st,
    insertStaticContent: S
  } = n, A = (w, E, B, J = null, I = null, D = null, _ = !1, U = null, C = ys ? !1 : !!E.dynamicChildren) => {
    if (w === E)
      return;
    w && !ao(w, E) && (J = Ne(w), ue(w, I, D, !0), w = null), E.patchFlag === -2 && (C = !1, E.dynamicChildren = null);
    const { type: O, ref: j, shapeFlag: V } = E;
    switch (O) {
      case La:
        M(w, E, B, J);
        break;
      case ct:
        W(w, E, B, J);
        break;
      case eu:
        w == null ? me(E, B, J, _) : $(w, E, B, _);
        break;
      case yt:
        Ze(
          w,
          E,
          B,
          J,
          I,
          D,
          _,
          U,
          C
        );
        break;
      default:
        V & 1 ? Y(
          w,
          E,
          B,
          J,
          I,
          D,
          _,
          U,
          C
        ) : V & 6 ? sn(
          w,
          E,
          B,
          J,
          I,
          D,
          _,
          U,
          C
        ) : V & 64 || V & 128 ? O.process(
          w,
          E,
          B,
          J,
          I,
          D,
          _,
          U,
          C,
          De
        ) : K("Invalid VNode type:", O, `(${typeof O})`);
    }
    j != null && I && yc(j, w && w.ref, D, E || w, !E);
  }, M = (w, E, B, J) => {
    if (w == null)
      r(
        E.el = u(E.children),
        B,
        J
      );
    else {
      const I = E.el = w.el;
      E.children !== w.children && m(I, E.children);
    }
  }, W = (w, E, B, J) => {
    w == null ? r(
      E.el = f(E.children || ""),
      B,
      J
    ) : E.el = w.el;
  }, me = (w, E, B, J) => {
    [w.el, w.anchor] = S(
      w.children,
      E,
      B,
      J,
      w.el,
      w.anchor
    );
  }, $ = (w, E, B, J) => {
    if (E.children !== w.children) {
      const I = y(w.anchor);
      F(w), [E.el, E.anchor] = S(
        E.children,
        B,
        I,
        J
      );
    } else
      E.el = w.el, E.anchor = w.anchor;
  }, re = ({ el: w, anchor: E }, B, J) => {
    let I;
    for (; w && w !== E; )
      I = y(w), r(w, B, J), w = I;
    r(E, B, J);
  }, F = ({ el: w, anchor: E }) => {
    let B;
    for (; w && w !== E; )
      B = y(w), i(w), w = B;
    i(E);
  }, Y = (w, E, B, J, I, D, _, U, C) => {
    _ = _ || E.type === "svg", w == null ? Q(
      E,
      B,
      J,
      I,
      D,
      _,
      U,
      C
    ) : Be(
      w,
      E,
      I,
      D,
      _,
      U,
      C
    );
  }, Q = (w, E, B, J, I, D, _, U) => {
    let C, O;
    const { type: j, props: V, shapeFlag: H, transition: Z, dirs: d } = w;
    if (C = w.el = c(
      w.type,
      D,
      V && V.is,
      V
    ), H & 8 ? h(C, w.children) : H & 16 && ae(
      w.children,
      C,
      null,
      J,
      I,
      D && j !== "foreignObject",
      _,
      U
    ), d && Os(w, null, J, "created"), te(C, w, w.scopeId, _, J), V) {
      for (const l in V)
        l !== "value" && !Xa(l) && o(
          C,
          l,
          null,
          V[l],
          D,
          w.children,
          J,
          I,
          pe
        );
      "value" in V && o(C, "value", null, V.value), (O = V.onVnodeBeforeMount) && Ft(O, J, w);
    }
    Object.defineProperty(C, "__vnode", {
      value: w,
      enumerable: !1
    }), Object.defineProperty(C, "__vueParentComponent", {
      value: J,
      enumerable: !1
    }), d && Os(w, null, J, "beforeMount");
    const a = (!I || I && !I.pendingBranch) && Z && !Z.persisted;
    a && Z.beforeEnter(C), r(C, E, B), ((O = V && V.onVnodeMounted) || a || d) && Ge(() => {
      O && Ft(O, J, w), a && Z.enter(C), d && Os(w, null, J, "mounted");
    }, I);
  }, te = (w, E, B, J, I) => {
    if (B && b(w, B), J)
      for (let D = 0; D < J.length; D++)
        b(w, J[D]);
    if (I) {
      let D = I.subTree;
      if (D.patchFlag > 0 && D.patchFlag & 2048 && (D = Nm(D.children) || D), E === D) {
        const _ = I.vnode;
        te(
          w,
          _,
          _.scopeId,
          _.slotScopeIds,
          I.parent
        );
      }
    }
  }, ae = (w, E, B, J, I, D, _, U, C = 0) => {
    for (let O = C; O < w.length; O++) {
      const j = w[O] = U ? hs(w[O]) : Tt(w[O]);
      A(
        null,
        j,
        E,
        B,
        J,
        I,
        D,
        _,
        U
      );
    }
  }, Be = (w, E, B, J, I, D, _) => {
    const U = E.el = w.el;
    let { patchFlag: C, dynamicChildren: O, dirs: j } = E;
    C |= w.patchFlag & 16;
    const V = w.props || xe, H = E.props || xe;
    let Z;
    B && Is(B, !1), (Z = H.onVnodeBeforeUpdate) && Ft(Z, B, E, w), j && Os(E, w, B, "beforeUpdate"), B && Is(B, !0), ys && (C = 0, _ = !1, O = null);
    const d = I && E.type !== "foreignObject";
    if (O ? (Ie(
      w.dynamicChildren,
      O,
      U,
      B,
      J,
      d,
      D
    ), hu(w, E)) : _ || q(
      w,
      E,
      U,
      null,
      B,
      J,
      d,
      D,
      !1
    ), C > 0) {
      if (C & 16)
        Le(
          U,
          E,
          V,
          H,
          B,
          J,
          I
        );
      else if (C & 2 && V.class !== H.class && o(U, "class", null, H.class, I), C & 4 && o(U, "style", V.style, H.style, I), C & 8) {
        const a = E.dynamicProps;
        for (let l = 0; l < a.length; l++) {
          const p = a[l], T = V[p], x = H[p];
          (x !== T || p === "value") && o(
            U,
            p,
            T,
            x,
            I,
            w.children,
            B,
            J,
            pe
          );
        }
      }
      C & 1 && w.children !== E.children && h(U, E.children);
    } else
      !_ && O == null && Le(
        U,
        E,
        V,
        H,
        B,
        J,
        I
      );
    ((Z = H.onVnodeUpdated) || j) && Ge(() => {
      Z && Ft(Z, B, E, w), j && Os(E, w, B, "updated");
    }, J);
  }, Ie = (w, E, B, J, I, D, _) => {
    for (let U = 0; U < E.length; U++) {
      const C = w[U], O = E[U], j = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        C.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (C.type === yt || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ao(C, O) || // - In the case of a component, it could contain anything.
        C.shapeFlag & 70) ? g(C.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          B
        )
      );
      A(
        C,
        O,
        j,
        null,
        J,
        I,
        D,
        _,
        !0
      );
    }
  }, Le = (w, E, B, J, I, D, _) => {
    if (B !== J) {
      if (B !== xe)
        for (const U in B)
          !Xa(U) && !(U in J) && o(
            w,
            U,
            B[U],
            null,
            _,
            E.children,
            I,
            D,
            pe
          );
      for (const U in J) {
        if (Xa(U))
          continue;
        const C = J[U], O = B[U];
        C !== O && U !== "value" && o(
          w,
          U,
          O,
          C,
          _,
          E.children,
          I,
          D,
          pe
        );
      }
      "value" in J && o(w, "value", B.value, J.value);
    }
  }, Ze = (w, E, B, J, I, D, _, U, C) => {
    const O = E.el = w ? w.el : u(""), j = E.anchor = w ? w.anchor : u("");
    let { patchFlag: V, dynamicChildren: H, slotScopeIds: Z } = E;
    // #5523 dev root fragment may inherit directives
    (ys || V & 2048) && (V = 0, C = !1, H = null), Z && (U = U ? U.concat(Z) : Z), w == null ? (r(O, B, J), r(j, B, J), ae(
      E.children,
      B,
      j,
      I,
      D,
      _,
      U,
      C
    )) : V > 0 && V & 64 && H && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    w.dynamicChildren ? (Ie(
      w.dynamicChildren,
      H,
      B,
      I,
      D,
      _,
      U
    ), hu(w, E)) : q(
      w,
      E,
      B,
      j,
      I,
      D,
      _,
      U,
      C
    );
  }, sn = (w, E, B, J, I, D, _, U, C) => {
    E.slotScopeIds = U, w == null ? E.shapeFlag & 512 ? I.ctx.activate(
      E,
      B,
      J,
      _,
      C
    ) : je(
      E,
      B,
      J,
      I,
      D,
      _,
      C
    ) : _e(w, E, C);
  }, je = (w, E, B, J, I, D, _) => {
    const U = w.component = Y0(
      w,
      J,
      I
    );
    if (U.type.__hmrId && Sg(U), Za(w), on(U, "mount"), Xc(w) && (U.ctx.renderer = De), on(U, "init"), X0(U), an(U, "init"), U.asyncDep) {
      if (I && I.registerDep(U, he), !w.el) {
        const C = U.subTree = tn(ct);
        W(null, C, E, B);
      }
      return;
    }
    he(
      U,
      w,
      E,
      B,
      I,
      D,
      _
    ), Ga(), an(U, "mount");
  }, _e = (w, E, B) => {
    const J = E.component = w.component;
    if (jg(w, E, B))
      if (J.asyncDep && !J.asyncResolved) {
        Za(E), P(J, E, B), Ga();
        return;
      } else
        J.next = E, Og(J.update), J.update();
    else
      E.el = w.el, J.vnode = E;
  }, he = (w, E, B, J, I, D, _) => {
    const U = () => {
      if (w.isMounted) {
        let { next: j, bu: V, u: H, parent: Z, vnode: d } = w, a = j, l;
        Za(j || w.vnode), Is(w, !1), j ? (j.el = d.el, P(w, j, _)) : j = d, V && so(V), (l = j.props && j.props.onVnodeBeforeUpdate) && Ft(l, Z, j, d), Is(w, !0), on(w, "render");
        const p = Mu(w);
        an(w, "render");
        const T = w.subTree;
        w.subTree = p, on(w, "patch"), A(
          T,
          p,
          // parent may have changed if it's in a teleport
          g(T.el),
          // anchor may have changed if it's in a fragment
          Ne(T),
          w,
          I,
          D
        ), an(w, "patch"), j.el = p.el, a === null && zg(w, p.el), H && Ge(H, I), (l = j.props && j.props.onVnodeUpdated) && Ge(
          () => Ft(l, Z, j, d),
          I
        ), wm(w), Ga();
      } else {
        let j;
        const { el: V, props: H } = E, { bm: Z, m: d, parent: a } = w, l = Qa(E);
        if (Is(w, !1), Z && so(Z), !l && (j = H && H.onVnodeBeforeMount) && Ft(j, a, E), Is(w, !0), V && Ye) {
          const p = () => {
            on(w, "render"), w.subTree = Mu(w), an(w, "render"), on(w, "hydrate"), Ye(
              V,
              w.subTree,
              w,
              I,
              null
            ), an(w, "hydrate");
          };
          l ? E.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !w.isUnmounted && p()
          ) : p();
        } else {
          on(w, "render");
          const p = w.subTree = Mu(w);
          an(w, "render"), on(w, "patch"), A(
            null,
            p,
            B,
            J,
            w,
            I,
            D
          ), an(w, "patch"), E.el = p.el;
        }
        if (d && Ge(d, I), !l && (j = H && H.onVnodeMounted)) {
          const p = E;
          Ge(
            () => Ft(j, a, p),
            I
          );
        }
        (E.shapeFlag & 256 || a && Qa(a.vnode) && a.vnode.shapeFlag & 256) && w.a && Ge(w.a, I), w.isMounted = !0, Lg(w), E = B = J = null;
      }
    }, C = w.effect = new Mc(
      U,
      () => Su(O),
      w.scope
      // track it in component's effect scope
    ), O = w.update = () => C.run();
    O.id = w.uid, Is(w, !0), C.onTrack = w.rtc ? (j) => so(w.rtc, j) : void 0, C.onTrigger = w.rtg ? (j) => so(w.rtg, j) : void 0, O.ownerInstance = w, O();
  }, P = (w, E, B) => {
    E.component = w;
    const J = w.vnode.props;
    w.vnode = E, w.next = null, b0(w, E.props, J, B), J0(w, E.children, B), Ks(), Al(), Ps();
  }, q = (w, E, B, J, I, D, _, U, C = !1) => {
    const O = w && w.children, j = w ? w.shapeFlag : 0, V = E.children, { patchFlag: H, shapeFlag: Z } = E;
    if (H > 0) {
      if (H & 128) {
        z(
          O,
          V,
          B,
          J,
          I,
          D,
          _,
          U,
          C
        );
        return;
      } else if (H & 256) {
        R(
          O,
          V,
          B,
          J,
          I,
          D,
          _,
          U,
          C
        );
        return;
      }
    }
    Z & 8 ? (j & 16 && pe(O, I, D), V !== O && h(B, V)) : j & 16 ? Z & 16 ? z(
      O,
      V,
      B,
      J,
      I,
      D,
      _,
      U,
      C
    ) : pe(O, I, D, !0) : (j & 8 && h(B, ""), Z & 16 && ae(
      V,
      B,
      J,
      I,
      D,
      _,
      U,
      C
    ));
  }, R = (w, E, B, J, I, D, _, U, C) => {
    w = w || Ws, E = E || Ws;
    const O = w.length, j = E.length, V = Math.min(O, j);
    let H;
    for (H = 0; H < V; H++) {
      const Z = E[H] = C ? hs(E[H]) : Tt(E[H]);
      A(
        w[H],
        Z,
        B,
        null,
        I,
        D,
        _,
        U,
        C
      );
    }
    O > j ? pe(
      w,
      I,
      D,
      !0,
      !1,
      V
    ) : ae(
      E,
      B,
      J,
      I,
      D,
      _,
      U,
      C,
      V
    );
  }, z = (w, E, B, J, I, D, _, U, C) => {
    let O = 0;
    const j = E.length;
    let V = w.length - 1, H = j - 1;
    for (; O <= V && O <= H; ) {
      const Z = w[O], d = E[O] = C ? hs(E[O]) : Tt(E[O]);
      if (ao(Z, d))
        A(
          Z,
          d,
          B,
          null,
          I,
          D,
          _,
          U,
          C
        );
      else
        break;
      O++;
    }
    for (; O <= V && O <= H; ) {
      const Z = w[V], d = E[H] = C ? hs(E[H]) : Tt(E[H]);
      if (ao(Z, d))
        A(
          Z,
          d,
          B,
          null,
          I,
          D,
          _,
          U,
          C
        );
      else
        break;
      V--, H--;
    }
    if (O > V) {
      if (O <= H) {
        const Z = H + 1, d = Z < j ? E[Z].el : J;
        for (; O <= H; )
          A(
            null,
            E[O] = C ? hs(E[O]) : Tt(E[O]),
            B,
            d,
            I,
            D,
            _,
            U,
            C
          ), O++;
      }
    } else if (O > H)
      for (; O <= V; )
        ue(w[O], I, D, !0), O++;
    else {
      const Z = O, d = O, a = /* @__PURE__ */ new Map();
      for (O = d; O <= H; O++) {
        const le = E[O] = C ? hs(E[O]) : Tt(E[O]);
        le.key != null && (a.has(le.key) && K(
          "Duplicate keys found during update:",
          JSON.stringify(le.key),
          "Make sure keys are unique."
        ), a.set(le.key, O));
      }
      let l, p = 0;
      const T = H - d + 1;
      let x = !1, k = 0;
      const ie = new Array(T);
      for (O = 0; O < T; O++)
        ie[O] = 0;
      for (O = Z; O <= V; O++) {
        const le = w[O];
        if (p >= T) {
          ue(le, I, D, !0);
          continue;
        }
        let ye;
        if (le.key != null)
          ye = a.get(le.key);
        else
          for (l = d; l <= H; l++)
            if (ie[l - d] === 0 && ao(le, E[l])) {
              ye = l;
              break;
            }
        ye === void 0 ? ue(le, I, D, !0) : (ie[ye - d] = O + 1, ye >= k ? k = ye : x = !0, A(
          le,
          E[ye],
          B,
          null,
          I,
          D,
          _,
          U,
          C
        ), p++);
      }
      const ke = x ? L0(ie) : Ws;
      for (l = ke.length - 1, O = T - 1; O >= 0; O--) {
        const le = d + O, ye = E[le], Te = le + 1 < j ? E[le + 1].el : J;
        ie[O] === 0 ? A(
          null,
          ye,
          B,
          Te,
          I,
          D,
          _,
          U,
          C
        ) : x && (l < 0 || O !== ke[l] ? X(ye, B, Te, 2) : l--);
      }
    }
  }, X = (w, E, B, J, I = null) => {
    const { el: D, type: _, transition: U, children: C, shapeFlag: O } = w;
    if (O & 6) {
      X(w.component.subTree, E, B, J);
      return;
    }
    if (O & 128) {
      w.suspense.move(E, B, J);
      return;
    }
    if (O & 64) {
      _.move(w, E, B, De);
      return;
    }
    if (_ === yt) {
      r(D, E, B);
      for (let V = 0; V < C.length; V++)
        X(C[V], E, B, J);
      r(w.anchor, E, B);
      return;
    }
    if (_ === eu) {
      re(w, E, B);
      return;
    }
    if (J !== 2 && O & 1 && U)
      if (J === 0)
        U.beforeEnter(D), r(D, E, B), Ge(() => U.enter(D), I);
      else {
        const { leave: V, delayLeave: H, afterLeave: Z } = U, d = () => r(D, E, B), a = () => {
          V(D, () => {
            d(), Z && Z();
          });
        };
        H ? H(D, d, a) : a();
      }
    else
      r(D, E, B);
  }, ue = (w, E, B, J = !1, I = !1) => {
    const {
      type: D,
      props: _,
      ref: U,
      children: C,
      dynamicChildren: O,
      shapeFlag: j,
      patchFlag: V,
      dirs: H
    } = w;
    if (U != null && yc(U, null, B, w, !0), j & 256) {
      E.ctx.deactivate(w);
      return;
    }
    const Z = j & 1 && H, d = !Qa(w);
    let a;
    if (d && (a = _ && _.onVnodeBeforeUnmount) && Ft(a, E, w), j & 6)
      we(w.component, B, J);
    else {
      if (j & 128) {
        w.suspense.unmount(B, J);
        return;
      }
      Z && Os(w, null, E, "beforeUnmount"), j & 64 ? w.type.remove(
        w,
        E,
        B,
        I,
        De,
        J
      ) : O && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (D !== yt || V > 0 && V & 64) ? pe(
        O,
        E,
        B,
        !1,
        !0
      ) : (D === yt && V & 384 || !I && j & 16) && pe(C, E, B), J && ge(w);
    }
    (d && (a = _ && _.onVnodeUnmounted) || Z) && Ge(() => {
      a && Ft(a, E, w), Z && Os(w, null, E, "unmounted");
    }, B);
  }, ge = (w) => {
    const { type: E, el: B, anchor: J, transition: I } = w;
    if (E === yt) {
      w.patchFlag > 0 && w.patchFlag & 2048 && I && !I.persisted ? w.children.forEach((_) => {
        _.type === ct ? i(_.el) : ge(_);
      }) : be(B, J);
      return;
    }
    if (E === eu) {
      F(w);
      return;
    }
    const D = () => {
      i(B), I && !I.persisted && I.afterLeave && I.afterLeave();
    };
    if (w.shapeFlag & 1 && I && !I.persisted) {
      const { leave: _, delayLeave: U } = I, C = () => _(B, D);
      U ? U(w.el, D, C) : C();
    } else
      D();
  }, be = (w, E) => {
    let B;
    for (; w !== E; )
      B = y(w), i(w), w = B;
    i(E);
  }, we = (w, E, B) => {
    w.type.__hmrId && vg(w);
    const { bum: J, scope: I, update: D, subTree: _, um: U } = w;
    J && so(J), I.stop(), D && (D.active = !1, ue(_, w, E, B)), U && Ge(U, E), Ge(() => {
      w.isUnmounted = !0;
    }, E), E && E.pendingBranch && !E.isUnmounted && w.asyncDep && !w.asyncResolved && w.suspenseId === E.pendingId && (E.deps--, E.deps === 0 && E.resolve()), Cg(w);
  }, pe = (w, E, B, J = !1, I = !1, D = 0) => {
    for (let _ = D; _ < w.length; _++)
      ue(w[_], E, B, J, I);
  }, Ne = (w) => w.shapeFlag & 6 ? Ne(w.component.subTree) : w.shapeFlag & 128 ? w.suspense.next() : y(w.anchor || w.el), ve = (w, E, B) => {
    w == null ? E._vnode && ue(E._vnode, null, null, !0) : A(E._vnode || null, w, E, null, null, null, B), Al(), dm(), E._vnode = w;
  }, De = {
    p: A,
    um: ue,
    m: X,
    r: ge,
    mt: je,
    mc: ae,
    pc: q,
    pbc: Ie,
    n: Ne,
    o: n
  };
  let Ce, Ye;
  return e && ([Ce, Ye] = e(
    De
  )), {
    render: ve,
    hydrate: Ce,
    createApp: y0(ve, Ce)
  };
}
function Is({ effect: n, update: e }, t) {
  n.allowRecurse = e.allowRecurse = t;
}
function hu(n, e, t = !1) {
  const r = n.children, i = e.children;
  if (ee(r) && ee(i))
    for (let o = 0; o < r.length; o++) {
      const c = r[o];
      let u = i[o];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = i[o] = hs(i[o]), u.el = c.el), t || hu(c, u)), u.type === La && (u.el = c.el), u.type === ct && !u.el && (u.el = c.el);
    }
}
function L0(n) {
  const e = n.slice(), t = [0];
  let r, i, o, c, u;
  const f = n.length;
  for (r = 0; r < f; r++) {
    const m = n[r];
    if (m !== 0) {
      if (i = t[t.length - 1], n[i] < m) {
        e[r] = i, t.push(r);
        continue;
      }
      for (o = 0, c = t.length - 1; o < c; )
        u = o + c >> 1, n[t[u]] < m ? o = u + 1 : c = u;
      m < n[t[o]] && (o > 0 && (e[r] = t[o - 1]), t[o] = r);
    }
  }
  for (o = t.length, c = t[o - 1]; o-- > 0; )
    t[o] = c, c = e[c];
  return t;
}
const D0 = (n) => n.__isTeleport, Xs = (n) => n && (n.disabled || n.disabled === ""), jl = (n) => typeof SVGElement < "u" && n instanceof SVGElement, Tc = (n, e) => {
  const t = n && n.to;
  if (Ue(t))
    if (e) {
      const r = e(t);
      return r || K(
        `Failed to locate Teleport target with selector "${t}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), r;
    } else
      return K(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return !t && !Xs(n) && K(`Invalid Teleport target: ${t}`), t;
}, C0 = {
  __isTeleport: !0,
  process(n, e, t, r, i, o, c, u, f, m) {
    const {
      mc: h,
      pc: g,
      pbc: y,
      o: { insert: b, querySelector: S, createText: A, createComment: M }
    } = m, W = Xs(e.props);
    let { shapeFlag: me, children: $, dynamicChildren: re } = e;
    if (ys && (f = !1, re = null), n == null) {
      const F = e.el = M("teleport start"), Y = e.anchor = M("teleport end");
      b(F, t, r), b(Y, t, r);
      const Q = e.target = Tc(e.props, S), te = e.targetAnchor = A("");
      Q ? (b(te, Q), c = c || jl(Q)) : W || K("Invalid Teleport target on mount:", Q, `(${typeof Q})`);
      const ae = (Be, Ie) => {
        me & 16 && h(
          $,
          Be,
          Ie,
          i,
          o,
          c,
          u,
          f
        );
      };
      W ? ae(t, Y) : Q && ae(Q, te);
    } else {
      e.el = n.el;
      const F = e.anchor = n.anchor, Y = e.target = n.target, Q = e.targetAnchor = n.targetAnchor, te = Xs(n.props), ae = te ? t : Y, Be = te ? F : Q;
      if (c = c || jl(Y), re ? (y(
        n.dynamicChildren,
        re,
        ae,
        i,
        o,
        c,
        u
      ), hu(n, e, !0)) : f || g(
        n,
        e,
        ae,
        Be,
        i,
        o,
        c,
        u,
        !1
      ), W)
        te || ja(
          e,
          t,
          F,
          m,
          1
        );
      else if ((e.props && e.props.to) !== (n.props && n.props.to)) {
        const Ie = e.target = Tc(
          e.props,
          S
        );
        Ie ? ja(
          e,
          Ie,
          null,
          m,
          0
        ) : K(
          "Invalid Teleport target on update:",
          Y,
          `(${typeof Y})`
        );
      } else
        te && ja(
          e,
          Y,
          Q,
          m,
          1
        );
    }
    Cm(e);
  },
  remove(n, e, t, r, { um: i, o: { remove: o } }, c) {
    const { shapeFlag: u, children: f, anchor: m, targetAnchor: h, target: g, props: y } = n;
    if (g && o(h), (c || !Xs(y)) && (o(m), u & 16))
      for (let b = 0; b < f.length; b++) {
        const S = f[b];
        i(
          S,
          e,
          t,
          !0,
          !!S.dynamicChildren
        );
      }
  },
  move: ja,
  hydrate: q0
};
function ja(n, e, t, { o: { insert: r }, m: i }, o = 2) {
  o === 0 && r(n.targetAnchor, e, t);
  const { el: c, anchor: u, shapeFlag: f, children: m, props: h } = n, g = o === 2;
  if (g && r(c, e, t), (!g || Xs(h)) && f & 16)
    for (let y = 0; y < m.length; y++)
      i(
        m[y],
        e,
        t,
        2
      );
  g && r(u, e, t);
}
function q0(n, e, t, r, i, o, {
  o: { nextSibling: c, parentNode: u, querySelector: f }
}, m) {
  const h = e.target = Tc(
    e.props,
    f
  );
  if (h) {
    const g = h._lpa || h.firstChild;
    if (e.shapeFlag & 16)
      if (Xs(e.props))
        e.anchor = m(
          c(n),
          e,
          u(n),
          t,
          r,
          i,
          o
        ), e.targetAnchor = g;
      else {
        e.anchor = c(n);
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
          t,
          r,
          i,
          o
        );
      }
    Cm(e);
  }
  return e.anchor && c(e.anchor);
}
const K0 = C0;
function Cm(n) {
  const e = n.ctx;
  if (e && e.ut) {
    let t = n.children[0].el;
    for (; t !== n.targetAnchor; )
      t.nodeType === 1 && t.setAttribute("data-v-owner", e.uid), t = t.nextSibling;
    e.ut();
  }
}
const yt = Symbol.for("v-fgt"), La = Symbol.for("v-txt"), ct = Symbol.for("v-cmt"), eu = Symbol.for("v-stc"), To = [];
let Bt = null;
function et(n = !1) {
  To.push(Bt = n ? null : []);
}
function P0() {
  To.pop(), Bt = To[To.length - 1] || null;
}
let Ia = 1;
function zl(n) {
  Ia += n;
}
function qm(n) {
  return n.dynamicChildren = Ia > 0 ? Bt || Ws : null, P0(), Ia > 0 && Bt && Bt.push(n), n;
}
function Ts(n, e, t, r, i, o) {
  return qm(
    Pm(
      n,
      e,
      t,
      r,
      i,
      o,
      !0
      /* isBlock */
    )
  );
}
function Hs(n, e, t, r, i) {
  return qm(
    tn(
      n,
      e,
      t,
      r,
      i,
      !0
      /* isBlock: prevent a block from tracking itself */
    )
  );
}
function el(n) {
  return n ? n.__v_isVNode === !0 : !1;
}
function ao(n, e) {
  return e.shapeFlag & 6 && Vs.has(e.type) ? (n.shapeFlag &= -257, e.shapeFlag &= -513, !1) : n.type === e.type && n.key === e.key;
}
const $0 = (...n) => _0(
  ...n
), Au = "__vInternal", Km = ({ key: n }) => n ?? null, tu = ({
  ref: n,
  ref_key: e,
  ref_for: t
}) => (typeof n == "number" && (n = "" + n), n != null ? Ue(n) || $e(n) || se(n) ? { i: pt, r: n, k: e, f: !!t } : n : null);
function Pm(n, e = null, t = null, r = 0, i = null, o = n === yt ? 0 : 1, c = !1, u = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: n,
    props: e,
    key: e && Km(e),
    ref: e && tu(e),
    scopeId: Em,
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
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: pt
  };
  return u ? (tl(f, t), o & 128 && n.normalize(f)) : t && (f.shapeFlag |= Ue(t) ? 8 : 16), f.key !== f.key && K("VNode created with invalid key (NaN). VNode type:", f.type), Ia > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  Bt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && Bt.push(f), f;
}
const tn = $0;
function _0(n, e = null, t = null, r = 0, i = null, o = !1) {
  if ((!n || n === a0) && (n || K(`Invalid vnode type when creating vnode: ${n}.`), n = ct), el(n)) {
    const u = xs(
      n,
      e,
      !0
      /* mergeRef: true */
    );
    return t && tl(u, t), Ia > 0 && !o && Bt && (u.shapeFlag & 6 ? Bt[Bt.indexOf(n)] = u : Bt.push(u)), u.patchFlag |= -2, u;
  }
  if (Hm(n) && (n = n.__vccOpts), e) {
    e = M0(e);
    let { class: u, style: f } = e;
    u && !Ue(u) && (e.class = $c(u)), Oe(f) && (uc(f) && !ee(f) && (f = Se({}, f)), e.style = ks(f));
  }
  const c = Ue(n) ? 1 : Wg(n) ? 128 : D0(n) ? 64 : Oe(n) ? 4 : se(n) ? 2 : 0;
  return c & 4 && uc(n) && (n = ce(n), K(
    "Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    n
  )), Pm(
    n,
    e,
    t,
    r,
    i,
    c,
    o,
    !0
  );
}
function M0(n) {
  return n ? uc(n) || Au in n ? Se({}, n) : n : null;
}
function xs(n, e, t = !1) {
  const { props: r, ref: i, patchFlag: o, children: c } = n, u = e ? j0(r || {}, e) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: n.type,
    props: u,
    key: u && Km(u),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      t && i ? ee(i) ? i.concat(tu(e)) : [i, tu(e)] : tu(e)
    ) : i,
    scopeId: n.scopeId,
    slotScopeIds: n.slotScopeIds,
    children: o === -1 && ee(c) ? c.map($m) : c,
    target: n.target,
    targetAnchor: n.targetAnchor,
    staticCount: n.staticCount,
    shapeFlag: n.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: e && n.type !== yt ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: n.ssContent && xs(n.ssContent),
    ssFallback: n.ssFallback && xs(n.ssFallback),
    el: n.el,
    anchor: n.anchor,
    ctx: n.ctx,
    ce: n.ce
  };
}
function $m(n) {
  const e = xs(n);
  return ee(n.children) && (e.children = n.children.map($m)), e;
}
function V0(n = " ", e = 0) {
  return tn(La, null, n, e);
}
function H0(n = "", e = !1) {
  return e ? (et(), Hs(ct, null, n)) : tn(ct, null, n);
}
function Tt(n) {
  return n == null || typeof n == "boolean" ? tn(ct) : ee(n) ? tn(
    yt,
    null,
    // #3666, avoid reference pollution when reusing vnode
    n.slice()
  ) : typeof n == "object" ? hs(n) : tn(La, null, String(n));
}
function hs(n) {
  return n.el === null && n.patchFlag !== -1 || n.memo ? n : xs(n);
}
function tl(n, e) {
  let t = 0;
  const { shapeFlag: r } = n;
  if (e == null)
    e = null;
  else if (ee(e))
    t = 16;
  else if (typeof e == "object")
    if (r & 65) {
      const i = e.default;
      i && (i._c && (i._d = !1), tl(n, i()), i._c && (i._d = !0));
      return;
    } else {
      t = 32;
      const i = e._;
      !i && !(Au in e) ? e._ctx = pt : i === 3 && pt && (pt.slots._ === 1 ? e._ = 1 : (e._ = 2, n.patchFlag |= 1024));
    }
  else
    se(e) ? (e = { default: e, _ctx: pt }, t = 32) : (e = String(e), r & 64 ? (t = 16, e = [V0(e)]) : t = 8);
  n.children = e, n.shapeFlag |= t;
}
function j0(...n) {
  const e = {};
  for (let t = 0; t < n.length; t++) {
    const r = n[t];
    for (const i in r)
      if (i === "class")
        e.class !== r.class && (e.class = $c([e.class, r.class]));
      else if (i === "style")
        e.style = ks([e.style, r.style]);
      else if (Aa(i)) {
        const o = e[i], c = r[i];
        c && o !== c && !(ee(o) && o.includes(c)) && (e[i] = o ? [].concat(o, c) : c);
      } else
        i !== "" && (e[i] = r[i]);
  }
  return e;
}
function Ft(n, e, t, r = null) {
  Ot(n, e, 7, [
    t,
    r
  ]);
}
const z0 = vm();
let W0 = 0;
function Y0(n, e, t) {
  const r = n.type, i = (e ? e.appContext : n.appContext) || z0, o = {
    uid: W0++,
    vnode: n,
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
    scope: new qp(
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
    propsOptions: Fm(r, i),
    emitsOptions: Tm(r, i),
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
  return o.ctx = u0(o), o.root = e ? e.root : o, o.emit = $g.bind(null, o), n.ce && n.ce(o), o;
}
let He = null, nl, Ms, Wl = "__VUE_INSTANCE_SETTERS__";
(Ms = au()[Wl]) || (Ms = au()[Wl] = []), Ms.push((n) => He = n), nl = (n) => {
  Ms.length > 1 ? Ms.forEach((e) => e(n)) : Ms[0](n);
};
const eo = (n) => {
  nl(n), n.scope.on();
}, Cs = () => {
  He && He.scope.off(), nl(null);
}, R0 = /* @__PURE__ */ Bs("slot,component");
function Ec(n, e) {
  const t = e.isNativeTag || Vf;
  (R0(n) || t(n)) && K(
    "Do not use built-in or reserved HTML elements as component id: " + n
  );
}
function _m(n) {
  return n.vnode.shapeFlag & 4;
}
let Sa = !1;
function X0(n, e = !1) {
  Sa = e;
  const { props: t, children: r } = n.vnode, i = _m(n);
  E0(n, t, i, e), v0(n, r);
  const o = i ? Z0(n, e) : void 0;
  return Sa = !1, o;
}
function Z0(n, e) {
  var t;
  const r = n.type;
  {
    if (r.name && Ec(r.name, n.appContext.config), r.components) {
      const o = Object.keys(r.components);
      for (let c = 0; c < o.length; c++)
        Ec(o[c], n.appContext.config);
    }
    if (r.directives) {
      const o = Object.keys(r.directives);
      for (let c = 0; c < o.length; c++)
        Bm(o[c]);
    }
    r.compilerOptions && G0() && K(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  n.accessCache = /* @__PURE__ */ Object.create(null), n.proxy = sm(new Proxy(n.ctx, Im)), c0(n);
  const { setup: i } = r;
  if (i) {
    const o = n.setupContext = i.length > 1 ? tw(n) : null;
    eo(n), Ks();
    const c = rs(
      i,
      n,
      0,
      [mo(n.props), o]
    );
    if (Ps(), Cs(), qc(c)) {
      if (c.then(Cs, Cs), e)
        return c.then((u) => {
          Yl(n, u, e);
        }).catch((u) => {
          Iu(u, n, 0);
        });
      if (n.asyncDep = c, !n.suspense) {
        const u = (t = r.name) != null ? t : "Anonymous";
        K(
          `Component <${u}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Yl(n, c, e);
  } else
    Mm(n, e);
}
function Yl(n, e, t) {
  se(e) ? n.type.__ssrInlineRender ? n.ssrRender = e : n.render = e : Oe(e) ? (el(e) && K(
    "setup() should not return VNodes directly - return a render function instead."
  ), n.devtoolsRawSetupState = e, n.setupState = um(e), l0(n)) : e !== void 0 && K(
    `setup() should return an object. Received: ${e === null ? "null" : typeof e}`
  ), Mm(n, t);
}
let Nc;
const G0 = () => !Nc;
function Mm(n, e, t) {
  const r = n.type;
  if (!n.render) {
    if (!e && Nc && !r.render) {
      const i = r.template || Gc(n).template;
      if (i) {
        on(n, "compile");
        const { isCustomElement: o, compilerOptions: c } = n.appContext.config, { delimiters: u, compilerOptions: f } = r, m = Se(
          Se(
            {
              isCustomElement: o,
              delimiters: u
            },
            c
          ),
          f
        );
        r.render = Nc(i, m), an(n, "compile");
      }
    }
    n.render = r.render || st;
  }
  eo(n), Ks(), m0(n), Ps(), Cs(), !r.render && n.render === st && !e && (r.template ? K(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
    /* should not happen */
  ) : K("Component is missing template or render function."));
}
function Q0(n) {
  return n.attrsProxy || (n.attrsProxy = new Proxy(
    n.attrs,
    {
      get(e, t) {
        return lu(), We(n, "get", "$attrs"), e[t];
      },
      set() {
        return K("setupContext.attrs is readonly."), !1;
      },
      deleteProperty() {
        return K("setupContext.attrs is readonly."), !1;
      }
    }
  ));
}
function ew(n) {
  return n.slotsProxy || (n.slotsProxy = new Proxy(n.slots, {
    get(e, t) {
      return We(n, "get", "$slots"), e[t];
    }
  }));
}
function tw(n) {
  return Object.freeze({
    get attrs() {
      return Q0(n);
    },
    get slots() {
      return ew(n);
    },
    get emit() {
      return (t, ...r) => n.emit(t, ...r);
    },
    expose: (t) => {
      if (n.exposed && K("expose() should be called only once per setup()."), t != null) {
        let r = typeof t;
        r === "object" && (ee(t) ? r = "array" : $e(t) && (r = "ref")), r !== "object" && K(
          `expose() should be passed a plain object, received ${r}.`
        );
      }
      n.exposed = t || {};
    }
  });
}
function rl(n) {
  if (n.exposed)
    return n.exposeProxy || (n.exposeProxy = new Proxy(um(sm(n.exposed)), {
      get(e, t) {
        if (t in e)
          return e[t];
        if (t in Ds)
          return Ds[t](n);
      },
      has(e, t) {
        return t in e || t in Ds;
      }
    }));
}
const nw = /(?:^|[-_])(\w)/g, rw = (n) => n.replace(nw, (e) => e.toUpperCase()).replace(/[-_]/g, "");
function Vm(n, e = !0) {
  return se(n) ? n.displayName || n.name : n.name || e && n.__name;
}
function Uu(n, e, t = !1) {
  let r = Vm(e);
  if (!r && e.__file) {
    const i = e.__file.match(/([^/\\]+)\.\w+$/);
    i && (r = i[1]);
  }
  if (!r && n && n.parent) {
    const i = (o) => {
      for (const c in o)
        if (o[c] === e)
          return c;
    };
    r = i(
      n.components || n.parent.type.components
    ) || i(n.appContext.components);
  }
  return r ? rw(r) : t ? "App" : "Anonymous";
}
function Hm(n) {
  return se(n) && "__vccOpts" in n;
}
const iw = (n, e) => yg(n, e, Sa), sw = Symbol.for("v-scx"), ow = () => {
  {
    const n = It(sw);
    return n || K(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), n;
  }
};
function ju(n) {
  return !!(n && n.__v_isShallow);
}
function aw() {
  if (typeof window > "u")
    return;
  const n = { style: "color:#3ba776" }, e = { style: "color:#0b1bc9" }, t = { style: "color:#b62e24" }, r = { style: "color:#9d288c" }, i = {
    header(g) {
      return Oe(g) ? g.__isVue ? ["div", n, "VueInstance"] : $e(g) ? [
        "div",
        {},
        ["span", n, h(g)],
        "<",
        u(g.value),
        ">"
      ] : Us(g) ? [
        "div",
        {},
        ["span", n, ju(g) ? "ShallowReactive" : "Reactive"],
        "<",
        u(g),
        `>${bs(g) ? " (readonly)" : ""}`
      ] : bs(g) ? [
        "div",
        {},
        ["span", n, ju(g) ? "ShallowReadonly" : "Readonly"],
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
          ...o(g.$)
        ];
    }
  };
  function o(g) {
    const y = [];
    g.type.props && g.props && y.push(c("props", ce(g.props))), g.setupState !== xe && y.push(c("setup", g.setupState)), g.data !== xe && y.push(c("data", ce(g.data)));
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
    return typeof g == "number" ? ["span", e, g] : typeof g == "string" ? ["span", t, JSON.stringify(g)] : typeof g == "boolean" ? ["span", r, g] : Oe(g) ? ["object", { object: y ? ce(g) : g }] : ["span", t, String(g)];
  }
  function f(g, y) {
    const b = g.type;
    if (se(b))
      return;
    const S = {};
    for (const A in g.ctx)
      m(b, A, y) && (S[A] = g.ctx[A]);
    return S;
  }
  function m(g, y, b) {
    const S = g[b];
    if (ee(S) && S.includes(y) || Oe(S) && y in S || g.extends && m(g.extends, y, b) || g.mixins && g.mixins.some((A) => m(A, y, b)))
      return !0;
  }
  function h(g) {
    return ju(g) ? "ShallowRef" : g.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(i) : window.devtoolsFormatters = [i];
}
const Rl = "3.3.4", uw = "http://www.w3.org/2000/svg", Fs = typeof document < "u" ? document : null, Xl = Fs && /* @__PURE__ */ Fs.createElement("template"), cw = {
  insert: (n, e, t) => {
    e.insertBefore(n, t || null);
  },
  remove: (n) => {
    const e = n.parentNode;
    e && e.removeChild(n);
  },
  createElement: (n, e, t, r) => {
    const i = e ? Fs.createElementNS(uw, n) : Fs.createElement(n, t ? { is: t } : void 0);
    return n === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
  },
  createText: (n) => Fs.createTextNode(n),
  createComment: (n) => Fs.createComment(n),
  setText: (n, e) => {
    n.nodeValue = e;
  },
  setElementText: (n, e) => {
    n.textContent = e;
  },
  parentNode: (n) => n.parentNode,
  nextSibling: (n) => n.nextSibling,
  querySelector: (n) => Fs.querySelector(n),
  setScopeId(n, e) {
    n.setAttribute(e, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(n, e, t, r, i, o) {
    const c = t ? t.previousSibling : e.lastChild;
    if (i && (i === o || i.nextSibling))
      for (; e.insertBefore(i.cloneNode(!0), t), !(i === o || !(i = i.nextSibling)); )
        ;
    else {
      Xl.innerHTML = r ? `<svg>${n}</svg>` : n;
      const u = Xl.content;
      if (r) {
        const f = u.firstChild;
        for (; f.firstChild; )
          u.appendChild(f.firstChild);
        u.removeChild(f);
      }
      e.insertBefore(u, t);
    }
    return [
      // first
      c ? c.nextSibling : e.firstChild,
      // last
      t ? t.previousSibling : e.lastChild
    ];
  }
};
function lw(n, e, t) {
  const r = n._vtc;
  r && (e = (e ? [e, ...r] : [...r]).join(" ")), e == null ? n.removeAttribute("class") : t ? n.setAttribute("class", e) : n.className = e;
}
function fw(n, e, t) {
  const r = n.style, i = Ue(t);
  if (t && !i) {
    if (e && !Ue(e))
      for (const o in e)
        t[o] == null && bc(r, o, "");
    for (const o in t)
      bc(r, o, t[o]);
  } else {
    const o = r.display;
    i ? e !== t && (r.cssText = t) : e && n.removeAttribute("style"), "_vod" in n && (r.display = o);
  }
}
const mw = /[^\\];\s*$/, Zl = /\s*!important$/;
function bc(n, e, t) {
  if (ee(t))
    t.forEach((r) => bc(n, e, r));
  else if (t == null && (t = ""), mw.test(t) && K(
    `Unexpected semicolon at the end of '${e}' style value: '${t}'`
  ), e.startsWith("--"))
    n.setProperty(e, t);
  else {
    const r = dw(n, e);
    Zl.test(t) ? n.setProperty(
      Es(r),
      t.replace(Zl, ""),
      "important"
    ) : n[r] = t;
  }
}
const Gl = ["Webkit", "Moz", "ms"], zu = {};
function dw(n, e) {
  const t = zu[e];
  if (t)
    return t;
  let r = Qs(e);
  if (r !== "filter" && r in n)
    return zu[e] = r;
  r = Nu(r);
  for (let i = 0; i < Gl.length; i++) {
    const o = Gl[i] + r;
    if (o in n)
      return zu[e] = o;
  }
  return e;
}
const Ql = "http://www.w3.org/1999/xlink";
function hw(n, e, t, r, i) {
  if (r && e.startsWith("xlink:"))
    t == null ? n.removeAttributeNS(Ql, e.slice(6, e.length)) : n.setAttributeNS(Ql, e, t);
  else {
    const o = Cp(e);
    t == null || o && !Hf(t) ? n.removeAttribute(e) : n.setAttribute(e, o ? "" : t);
  }
}
function pw(n, e, t, r, i, o, c) {
  if (e === "innerHTML" || e === "textContent") {
    r && c(r, i, o), n[e] = t ?? "";
    return;
  }
  const u = n.tagName;
  if (e === "value" && u !== "PROGRESS" && // custom elements may use _value internally
  !u.includes("-")) {
    n._value = t;
    const m = u === "OPTION" ? n.getAttribute("value") : n.value, h = t ?? "";
    m !== h && (n.value = h), t == null && n.removeAttribute(e);
    return;
  }
  let f = !1;
  if (t === "" || t == null) {
    const m = typeof n[e];
    m === "boolean" ? t = Hf(t) : t == null && m === "string" ? (t = "", f = !0) : m === "number" && (t = 0, f = !0);
  }
  try {
    n[e] = t;
  } catch (m) {
    f || K(
      `Failed setting prop "${e}" on <${u.toLowerCase()}>: value ${t} is invalid.`,
      m
    );
  }
  f && n.removeAttribute(e);
}
function gw(n, e, t, r) {
  n.addEventListener(e, t, r);
}
function ww(n, e, t, r) {
  n.removeEventListener(e, t, r);
}
function yw(n, e, t, r, i = null) {
  const o = n._vei || (n._vei = {}), c = o[e];
  if (r && c)
    c.value = r;
  else {
    const [u, f] = Tw(e);
    if (r) {
      const m = o[e] = bw(r, i);
      gw(n, u, m, f);
    } else
      c && (ww(n, u, c, f), o[e] = void 0);
  }
}
const ef = /(?:Once|Passive|Capture)$/;
function Tw(n) {
  let e;
  if (ef.test(n)) {
    e = {};
    let r;
    for (; r = n.match(ef); )
      n = n.slice(0, n.length - r[0].length), e[r[0].toLowerCase()] = !0;
  }
  return [n[2] === ":" ? n.slice(3) : Es(n.slice(2)), e];
}
let Wu = 0;
const Ew = /* @__PURE__ */ Promise.resolve(), Nw = () => Wu || (Ew.then(() => Wu = 0), Wu = Date.now());
function bw(n, e) {
  const t = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= t.attached)
      return;
    Ot(
      xw(r, t.value),
      e,
      5,
      [r]
    );
  };
  return t.value = n, t.attached = Nw(), t;
}
function xw(n, e) {
  if (ee(e)) {
    const t = n.stopImmediatePropagation;
    return n.stopImmediatePropagation = () => {
      t.call(n), n._stopped = !0;
    }, e.map((r) => (i) => !i._stopped && r && r(i));
  } else
    return e;
}
const tf = /^on[a-z]/, Bw = (n, e, t, r, i = !1, o, c, u, f) => {
  e === "class" ? lw(n, r, i) : e === "style" ? fw(n, t, r) : Aa(e) ? su(e) || yw(n, e, t, r, c) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : kw(n, e, r, i)) ? pw(
    n,
    e,
    r,
    o,
    c,
    u,
    f
  ) : (e === "true-value" ? n._trueValue = r : e === "false-value" && (n._falseValue = r), hw(n, e, r, i));
};
function kw(n, e, t, r) {
  return r ? !!(e === "innerHTML" || e === "textContent" || e in n && tf.test(e) && se(t)) : e === "spellcheck" || e === "draggable" || e === "translate" || e === "form" || e === "list" && n.tagName === "INPUT" || e === "type" && n.tagName === "TEXTAREA" || tf.test(e) && Ue(t) ? !1 : e in n;
}
const Ow = /* @__PURE__ */ Se({ patchProp: Bw }, cw);
let nf;
function Iw() {
  return nf || (nf = A0(Ow));
}
const jm = (...n) => {
  const e = Iw().createApp(...n);
  Sw(e), vw(e);
  const { mount: t } = e;
  return e.mount = (r) => {
    const i = Jw(r);
    if (!i)
      return;
    const o = e._component;
    !se(o) && !o.render && !o.template && (o.template = i.innerHTML), i.innerHTML = "";
    const c = t(i, !1, i instanceof SVGElement);
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), c;
  }, e;
};
function Sw(n) {
  Object.defineProperty(n.config, "isNativeTag", {
    value: (e) => Up(e) || Lp(e),
    writable: !1
  });
}
function vw(n) {
  {
    const e = n.config.isCustomElement;
    Object.defineProperty(n.config, "isCustomElement", {
      get() {
        return e;
      },
      set() {
        K(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const t = n.config.compilerOptions, r = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(n.config, "compilerOptions", {
      get() {
        return K(r), t;
      },
      set() {
        K(r);
      }
    });
  }
}
function Jw(n) {
  if (Ue(n)) {
    const e = document.querySelector(n);
    return e || K(
      `Failed to mount app: mount target selector "${n}" returned null.`
    ), e;
  }
  return window.ShadowRoot && n instanceof window.ShadowRoot && n.mode === "closed" && K(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), n;
}
function Fw() {
  aw();
}
Fw();
const Aw = () => new Error("Config not initialized");
let nu;
const Uw = (n) => {
  if (n.codeSdk === void 0)
    throw new Error("codeSdk path is required");
  nu = kt(n);
}, Da = () => {
  if (!nu)
    throw Aw;
  return {
    config: nu,
    codeSdk: () => nu.value.codeSdk
  };
};
class no {
  /**
   * Constructs an EventChannel.
   * @param id - Identifier for the connection.
   * @param targetWindow - The iframe element to communicate with. If not provided, communicates with parent window.
   */
  constructor(e = no.getId(), t) {
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
      const o = r;
      (c = this.listeners[o]) == null || c.forEach((u) => {
        try {
          u(i);
        } catch (f) {
          console.error(`Error in listener for event "${o}": ${f}`);
        }
      });
    }, this.on = (r, i) => {
      const o = (c) => {
        const u = c;
        window.addEventListener("message", (f) => {
          f.data.type === "event" && f.data.payload.event === u && f.data.id === this.connectionId && i(f.data.payload.args);
        }), this.listeners[u] = [...this.listeners[u] || [], i];
      };
      Array.isArray(r) ? r.forEach((c) => o(c)) : o(r);
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
no.getId = () => Math.random().toString(36).substring(2, 15);
const Lw = ["width", "height"], Dw = /* @__PURE__ */ to({
  __name: "IntentRequestButton",
  emits: ["resize", "invoke"],
  setup(n, { emit: e }) {
    const t = Da(), r = It("options"), i = (r == null ? void 0 : r.mode) ?? "payment", o = new no(), c = `${t.codeSdk()}/${i}-request-button/#/${o.id}/p=${Fa(r)}`;
    console.log("url", c);
    const u = kt(null), f = kt(0), m = kt(0);
    Fu(() => {
      u.value && (o.on("resize", (g) => {
        const { width: y, height: b } = g;
        u.value && (f.value = y, m.value = b);
      }), o.on("invoke", () => {
        e("invoke", void 0);
      }));
    });
    function h() {
      const g = (y) => y + " !important";
      return {
        display: g("inline-block"),
        width: g("222px"),
        height: g("60px"),
        // We have to set this to make sure the iframe stays transparent.
        // Completely counter-intuitive.
        // https://bugs.chromium.org/p/chromium/issues/detail?id=1150352
        colorScheme: g("light")
      };
    }
    return (g, y) => (et(), Ts("iframe", {
      ref_key: "el",
      ref: u,
      src: c,
      width: f.value,
      height: m.value,
      frameborder: "0",
      allowtransparency: "true",
      scrolling: "no",
      name: "payment-request-button",
      referrerpolicy: "no-referrer",
      style: ks(h())
    }, null, 12, Lw));
  }
}), zm = /* @__PURE__ */ to({
  __name: "IntentRequestModalDesktop",
  emits: [
    "codeScanned",
    "clientRejectedPayment",
    "intentSubmitted",
    "channelCreated",
    "error",
    "streamTimeout",
    "streamClosed"
  ],
  setup(n, { emit: e }) {
    const t = Da(), r = It("options"), i = (r == null ? void 0 : r.mode) ?? "payment", o = new no(), c = `${t.codeSdk()}/${i}-request-modal-desktop/#/${o.id}/p=${Fa(r)}`, u = kt(null);
    console.log("url", c), o.on("codeScanned", () => {
      e("codeScanned");
    }), o.on("clientRejectedPayment", () => {
      e("clientRejectedPayment");
    }), o.on("intentSubmitted", () => {
      e("intentSubmitted");
    }), o.on("error", (m) => {
      `${m}`.includes("NGHTTP2_INTERNAL_ERROR") ? (console.warn("CodeSDK: GRPC stream closed."), e("streamClosed")) : (console.error(`CodeSDK: ${m}`), e("error", m));
    }), o.on("streamTimeout", () => {
      console.warn("CodeSDK: Websocket Stream timeout."), e("streamTimeout");
    }), o.on("streamClosed", () => {
      console.warn("CodeSDK: Websocket Stream closed."), e("streamClosed");
    }), Fu(() => {
      u.value && (o.setTargetWindow(u.value), e("channelCreated", o));
    }), bm(() => {
      var y, b;
      const { clientSecret: m, idempotencyKey: h, confirmParams: g } = r ?? {};
      m && o.emit("updatedClientSecret", { value: m }), h && o.emit("updatedIdempotencyKey", { value: h }), g && ((y = g.success) != null && y.url && o.emit("updatedSuccessUrl", { value: g.success.url }), (b = g.cancel) != null && b.url && o.emit("updatedCancelUrl", { value: g.cancel.url }));
    });
    function f() {
      const m = (h) => h + " !important";
      return {
        position: m("fixed"),
        inset: m("0"),
        zIndex: m("2147483647"),
        overflow: m("hidden"),
        width: m("100dvw"),
        height: m("100dvh"),
        // We have to set this to make sure the iframe stays transparent.
        // Completely counter-intuitive.
        // https://bugs.chromium.org/p/chromium/issues/detail?id=1150352
        colorScheme: m("light")
      };
    }
    return (m, h) => (et(), Ts("iframe", {
      ref_key: "el",
      ref: u,
      src: c,
      frameborder: "0",
      allowTransparency: "true",
      scrolling: "no",
      name: "payment-request-card",
      referrerpolicy: "no-referrer",
      style: ks(f())
    }, null, 4));
  }
}), Cw = /* @__PURE__ */ to({
  __name: "IntentRequestModalMobile",
  emits: [
    "codeScanned",
    "clientRejectedPayment",
    "intentSubmitted",
    "channelCreated",
    "error",
    "streamTimeout",
    "streamClosed"
  ],
  setup(n, { emit: e }) {
    const t = Da(), r = It("options"), i = (r == null ? void 0 : r.mode) ?? "payment", o = new no(), c = `${t.codeSdk()}/${i}-request-modal-mobile/#/${o.id}/p=${Fa(r)}`, u = kt(null);
    o.on("codeScanned", () => {
      e("codeScanned");
    }), o.on("clientRejectedPayment", () => {
      e("clientRejectedPayment");
    }), o.on("intentSubmitted", () => {
      e("intentSubmitted");
    }), o.on("navigate", (m) => {
      m.url && (window.location.href = m.url);
    }), o.on("error", (m) => {
      `${m}`.includes("NGHTTP2_INTERNAL_ERROR") ? (console.warn("CodeSDK: GRPC stream closed."), e("streamClosed")) : (console.error(`CodeSDK: ${m}`), e("error", m));
    }), o.on("streamTimeout", () => {
      console.warn("CodeSDK: Websocket Stream timeout."), e("streamTimeout");
    }), o.on("streamClosed", () => {
      console.warn("CodeSDK: Websocket Stream closed."), e("streamClosed");
    }), Fu(() => {
      u.value && (o.setTargetWindow(u.value), e("channelCreated", o));
    }), bm(() => {
      var y, b;
      const { clientSecret: m, idempotencyKey: h, confirmParams: g } = r ?? {};
      m && o.emit("updatedClientSecret", { value: m }), h && o.emit("updatedIdempotencyKey", { value: h }), g && ((y = g.success) != null && y.url && o.emit("updatedSuccessUrl", { value: g.success.url }), (b = g.cancel) != null && b.url && o.emit("updatedCancelUrl", { value: g.cancel.url }));
    });
    function f() {
      const m = (h) => h + " !important";
      return {
        position: m("fixed"),
        inset: m("0"),
        zIndex: m("2147483647"),
        overflow: m("hidden"),
        width: m("100dvw"),
        height: m("100dvh"),
        // We have to set this to make sure the iframe stays transparent.
        // Completely counter-intuitive.
        // https://bugs.chromium.org/p/chromium/issues/detail?id=1150352
        colorScheme: m("light")
      };
    }
    return (m, h) => (et(), Ts("iframe", {
      ref_key: "el",
      ref: u,
      src: c,
      frameborder: "0",
      allowTransparency: "true",
      scrolling: "no",
      name: "payment-request-card",
      referrerPolicy: "no-referrer",
      style: ks(f())
    }, null, 4));
  }
}), qw = /* @__PURE__ */ to({
  __name: "PreloadIntentRequestModalDesktop",
  setup(n) {
    const e = Da(), t = It("options"), r = (t == null ? void 0 : t.mode) ?? "payment", i = `${e.codeSdk()}/${r}-request-modal-desktop/#/preload/p=${Fa(t)}`, o = kt(null);
    function c() {
      const u = (f) => f + " !important";
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
    return (u, f) => (et(), Ts("iframe", {
      ref_key: "el",
      ref: o,
      src: i,
      frameborder: "0",
      allowTransparency: "true",
      scrolling: "no",
      name: "preload-payment-request-card",
      referrerpolicy: "no-referrer",
      style: ks(c())
    }, null, 4));
  }
}), Kw = /* @__PURE__ */ to({
  __name: "PreloadIntentRequestModalMobile",
  setup(n) {
    const e = Da(), t = It("options"), r = (t == null ? void 0 : t.mode) ?? "payment", i = `${e.codeSdk()}/${r}-request-modal-mobile/#/preload/p=${Fa(t)}`, o = kt(null);
    function c() {
      const u = (f) => f + " !important";
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
    return (u, f) => (et(), Ts("iframe", {
      ref_key: "el",
      ref: o,
      src: i,
      frameborder: "0",
      allowTransparency: "true",
      scrolling: "no",
      name: "preload-payment-request-card",
      referrerpolicy: "no-referrer",
      style: ks(c())
    }, null, 4));
  }
});
function Yu(n) {
  try {
    return new URL(n), !0;
  } catch {
    return !1;
  }
}
function Pw(n, e) {
  try {
    return new URL(n, e).toString();
  } catch {
    return "";
  }
}
function $w(n, e) {
  let t = decodeURIComponent(n);
  for (const [r, i] of Object.entries(e))
    t = t.replace(`{{${r}}}`, i);
  return encodeURI(t);
}
function rf(n, e, t) {
  let r = (n == null ? void 0 : n.url) ?? e;
  if (r && (!Yu(r) && e && Yu(e) && (r = Pw(r, new URL(e).origin)), Yu(r)))
    return t && (r = $w(r, t)), { url: r };
}
const _w = (n) => new Error(`Network error ${n}`), Mw = (n) => new Error(`Request failed with status code ${n}`);
class Vw {
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
    return (r) => new Promise(async (i, o) => {
      try {
        const c = await fetch(t, {
          method: "POST",
          headers: {
            "Content-Type": "application/octet-stream"
          },
          body: r
        });
        if (c.ok) {
          const u = await c.arrayBuffer(), f = dn.fromBinary(new Uint8Array(u));
          i(f);
        } else
          o(Mw(c.status));
      } catch (c) {
        o(_w(c));
      }
    });
  }
  useService(e) {
    const t = this.getDecoder(e), r = this.getEncoder(e), i = this.getSender(e);
    return {
      decode: t,
      encode: r,
      send: i
    };
  }
  getServiceName(e) {
    return e.typeName.split(".").pop();
  }
  async send(e, t, r) {
    const i = this.getServiceName(e), { encode: o, decode: c, send: u } = this.useService(e.methods[t]), f = o(r), m = new mn({
      service: i,
      method: t,
      body: f
    }), h = await u(m.toBinary());
    return c(h.body);
  }
}
const Hw = "https://cash.getcode.com/v1";
function sf(n = {}) {
  const e = n.endpoint ?? Hw;
  return new Vw(e, n.fetch);
}
async function jw(n, e) {
  const t = await n.getSendMessageRequestProto();
  return (await e.send(Ud, "sendMessage", t)).result, Zs.OK, {
    clientSecret: n.getClientSecret(),
    id: n.getIntentId()
  };
}
var pu;
(function(n) {
  n.Pending = "pending", n.Confirmed = "confirmed";
})(pu || (pu = {}));
class zw {
  constructor(e) {
    this.intentId = e.intent, this.validate();
  }
  validate() {
    if (!this.intentId)
      throw new Error("Intent ID is required");
  }
  toProto() {
    const e = St.fromBase58(this.intentId);
    return new Xt({
      intentId: {
        value: e.toBuffer()
      }
    });
  }
  sign() {
  }
  async send(e) {
    const t = await e.send(Ld, "getStatus", this.toProto());
    let r = pu.Pending;
    t.intentSubmitted && (r = pu.Confirmed);
    const { exists: i, codeScanned: o, intentSubmitted: c } = t;
    return {
      status: r,
      exists: i,
      codeScanned: o,
      intentSubmitted: c
    };
  }
}
const Ww = {
  /**
   * Creates a new payment intent.
   *
   * @param opt - The options for creating a payment intent.
   * @returns An object containing the client secret and intent ID.
   * @throws Will throw an error if unable to create the intent.
   */
  create: async (n) => {
    const e = sf(n);
    let t;
    return n.login ? t = new pp(n) : t = new Lc(n), await jw(t, e);
  },
  /**
   * Retrieves the status of a specified payment intent.
   *
   * @param opt - The options containing the intent ID to check status for.
   * @returns An object representing the intent's status.
   * @throws Will throw an error if unable to retrieve the intent's status.
   */
  getStatus: async (n) => {
    const e = sf(n);
    return await new zw(n).send(e);
  }
}, Yw = { key: 0 }, Rw = { key: 1 }, of = 500, Xw = /* @__PURE__ */ to({
  __name: "ButtonFlow",
  setup(n) {
    var me, $, re, F;
    const e = (Y) => new Promise((Q) => setTimeout(Q, Y)), t = It("options"), r = It("emit", async () => !1), i = kt(null), o = kt(null), c = kt(!1), u = oy(), f = (($ = (me = t == null ? void 0 : t.confirmParams) == null ? void 0 : me.success) == null ? void 0 : $.url) !== void 0, m = ((F = (re = t == null ? void 0 : t.confirmParams) == null ? void 0 : re.cancel) == null ? void 0 : F.url) !== void 0;
    function h() {
      if (t) {
        if (t.mode === "payment")
          return t.amount && t.currency && t.destination;
        if (t.mode === "login")
          return t.login && t.login.domain;
      }
      return !1;
    }
    function g(Y) {
      i.value = Y;
    }
    async function y() {
      var ae, Be;
      if (c.value = !0, await lc(), !t)
        throw new Error("Missing options");
      if (!i.value)
        throw new Error("Missing channel");
      if (i.value.emit("beforeInvoke"), await r("invoke")) {
        c.value = !1;
        return;
      }
      t.mode === "payment" ? o.value = new Lc(t).getIntentId() : o.value = new gp(t).getIntentId();
      const Q = {
        INTENT_ID: o.value
        // ...
      }, te = window.location.href;
      if (t.confirmParams = {
        success: rf((ae = t.confirmParams) == null ? void 0 : ae.success, te, Q),
        cancel: rf((Be = t.confirmParams) == null ? void 0 : Be.cancel, te, Q)
      }, await lc(), !i.value)
        throw new Error("Missing channel");
      i.value.emit("afterInvoke");
    }
    async function b() {
      var te, ae;
      c.value = !1, await e(of);
      const Y = (ae = (te = t == null ? void 0 : t.confirmParams) == null ? void 0 : te.success) == null ? void 0 : ae.url;
      await r("success", { url: Y, options: t, intent: o.value }) || f && (window.location.href = Y);
    }
    async function S() {
      var te, ae;
      c.value = !1, await e(of);
      const Y = (ae = (te = t == null ? void 0 : t.confirmParams) == null ? void 0 : te.cancel) == null ? void 0 : ae.url;
      await r("cancel", { url: Y, options: t, intent: o.value }) || m && (window.location.href = Y);
    }
    async function A(Y) {
      await r("error", { message: `${Y}` });
    }
    async function M() {
      c.value = !1, await A("stream_timed_out");
    }
    async function W() {
      c.value = !1, await A("stream_closed");
    }
    return document.addEventListener("visibilitychange", async () => {
      if (document.visibilityState === "visible") {
        if (!o.value)
          return;
        const { status: Y } = await Ww.getStatus({ intent: o.value });
        Y === "confirmed" && b();
      }
    }), (Y, Q) => h() ? (et(), Ts(yt, { key: 0 }, [
      tn(ms(Dw), { onInvoke: y }),
      (et(), Hs(K0, { to: "body" }, [
        c.value ? (et(), Ts("div", Yw, [
          ms(u) ? (et(), Hs(ms(Cw), {
            key: 0,
            onChannelCreated: g,
            onIntentSubmitted: b,
            onClientRejectedPayment: S,
            onError: A,
            onStreamTimeout: M,
            onStreamClosed: W
          })) : (et(), Hs(ms(zm), {
            key: 1,
            onChannelCreated: g,
            onIntentSubmitted: b,
            onClientRejectedPayment: S,
            onError: A,
            onStreamTimeout: M,
            onStreamClosed: W
          }))
        ])) : (et(), Ts("div", Rw, [
          ms(u) ? (et(), Hs(ms(Kw), { key: 0 })) : (et(), Hs(ms(qw), { key: 1 }))
        ]))
      ]))
    ], 64)) : H0("", !0);
  }
}), Zw = (n) => new Error(`Unknown element type: ${n}`), ly = (n) => new Error(`Required parameter: ${n}`), fy = (n) => new Error(`Invalid parameter: ${n}`), af = "payment", Gw = "en";
class Wm {
  /**
   * Constructor initializes the element with given parameters and Vue application.
   * @param params - Partial element options.
   * @param app - Vue application instance.
   */
  constructor(e, t) {
    const r = { ...e };
    r.mode = r.mode ?? af, r.locale = r.locale ?? Gw, this.intent = ku(r), this.listeners = [], this.app = t, this.validate();
  }
  /**
   * Validates the current element options.
   * @returns True if the options are valid.
   */
  validate() {
    return Uc(this.intent);
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
    return this.intent.mode ?? af;
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
    const r = async (o, c) => {
      const u = Qw(c), f = this.listeners.filter((h) => h.event === o);
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
function Qw(n) {
  return typeof n != "object" ? n : JSON.parse(JSON.stringify(n));
}
class ey extends Wm {
  /**
   * Constructs a new CodeButton with specific options.
   * @param options - Partial element options.
   */
  constructor(e) {
    super(e, jm(Xw));
  }
}
class ty extends Wm {
  /**
   * Constructs a new CodeCard with specific options.
   * @param options - Partial element options.
   */
  constructor(e) {
    super(e, jm(zm));
  }
}
const ny = {
  /**
   * Creates a new element based on the specified type.
   * @param type - The type of the element to create.
   * @param options - The options for the element.
   * @returns An object containing the newly created element.
   */
  create: (n, e) => {
    switch (n) {
      case "button":
        return { button: new ey(e) };
      case "card":
        return { card: new ty(e) };
      default:
        throw Zw(n);
    }
  }
};
function ry() {
  return navigator.userAgent.includes("DebugMobile");
}
function Ym() {
  return [
    "iPhone Simulator",
    "iPhone"
  ].includes(navigator.platform);
}
function iy() {
  return Ym() || [
    "iPad Simulator",
    "iPod Simulator",
    "iPad",
    "iPod"
  ].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
function my() {
  return iy() || /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function sy() {
  return /Android/i.test(navigator.userAgent);
}
function oy() {
  return Ym() || sy() || ry();
}
const ay = {
  codeSdk: "https://sdk.getcode.com/v1/elements"
};
Uw(ay);
const dy = { elements: ny, Keypair: cn, PublicKey: St };
export {
  sy as Android,
  fy as ErrInvalidParameter,
  ly as ErrRequiredParameter,
  Zw as ErrUnknownElementType,
  my as Safari,
  dy as default,
  ny as elements,
  rf as getURLParam,
  iy as iOS,
  Ym as iPhone,
  oy as isMobileDevice,
  Yu as isValidURL,
  Pw as makeFQDN,
  $w as replaceURLVariables
};
