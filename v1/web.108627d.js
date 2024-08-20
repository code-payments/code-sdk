function Ne(n, t) {
  if (!n)
    throw new Error(t);
}
const mT = 34028234663852886e22, dT = -34028234663852886e22, hT = 4294967295, pT = 2147483647, gT = -2147483648;
function bd(n) {
  if (typeof n != "number")
    throw new Error("invalid int 32: " + typeof n);
  if (!Number.isInteger(n) || n > pT || n < gT)
    throw new Error("invalid int 32: " + n);
}
function _h(n) {
  if (typeof n != "number")
    throw new Error("invalid uint 32: " + typeof n);
  if (!Number.isInteger(n) || n > hT || n < 0)
    throw new Error("invalid uint 32: " + n);
}
function zy(n) {
  if (typeof n != "number")
    throw new Error("invalid float 32: " + typeof n);
  if (Number.isFinite(n) && (n > mT || n < dT))
    throw new Error("invalid float 32: " + n);
}
const jy = Symbol("@bufbuild/protobuf/enum-type");
function yT(n) {
  const t = n[jy];
  return Ne(t, "missing enum type on enum object"), t;
}
function Wy(n, t, e, r) {
  n[jy] = Gy(t, e.map((i) => ({
    no: i.no,
    name: i.name,
    localName: n[i.no]
  })));
}
function Gy(n, t, e) {
  const r = /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null), a = [];
  for (const l of t) {
    const c = Xy(l);
    a.push(c), r[l.name] = c, i[l.no] = c;
  }
  return {
    typeName: n,
    values: a,
    // We do not surface options at this time
    // options: opt?.options ?? Object.create(null),
    findName(l) {
      return r[l];
    },
    findNumber(l) {
      return i[l];
    }
  };
}
function wT(n, t, e) {
  const r = {};
  for (const i of t) {
    const a = Xy(i);
    r[a.localName] = a.no, r[a.no] = a.localName;
  }
  return Wy(r, n, t), r;
}
function Xy(n) {
  return "localName" in n ? n : Object.assign(Object.assign({}, n), { localName: n.name });
}
let S = class {
  /**
   * Compare with a message of the same type.
   */
  equals(t) {
    return this.getType().runtime.util.equals(this.getType(), this, t);
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
  fromBinary(t, e) {
    const r = this.getType(), i = r.runtime.bin, a = i.makeReadOptions(e);
    return i.readMessage(this, a.readerFactory(t), t.byteLength, a), this;
  }
  /**
   * Parse a message from a JSON value.
   */
  fromJson(t, e) {
    const r = this.getType(), i = r.runtime.json, a = i.makeReadOptions(e);
    return i.readMessage(r, t, a, this), this;
  }
  /**
   * Parse a message from a JSON string.
   */
  fromJsonString(t, e) {
    let r;
    try {
      r = JSON.parse(t);
    } catch (i) {
      throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${i instanceof Error ? i.message : String(i)}`);
    }
    return this.fromJson(r, e);
  }
  /**
   * Serialize the message to binary data.
   */
  toBinary(t) {
    const e = this.getType(), r = e.runtime.bin, i = r.makeWriteOptions(t), a = i.writerFactory();
    return r.writeMessage(this, a, i), a.finish();
  }
  /**
   * Serialize the message to a JSON value, a JavaScript value that can be
   * passed to JSON.stringify().
   */
  toJson(t) {
    const e = this.getType(), r = e.runtime.json, i = r.makeWriteOptions(t);
    return r.writeMessage(this, i);
  }
  /**
   * Serialize the message to a JSON string.
   */
  toJsonString(t) {
    var e;
    const r = this.toJson(t);
    return JSON.stringify(r, null, (e = t == null ? void 0 : t.prettySpaces) !== null && e !== void 0 ? e : 0);
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
function TT(n, t, e, r) {
  var i;
  const a = (i = r == null ? void 0 : r.localName) !== null && i !== void 0 ? i : t.substring(t.lastIndexOf(".") + 1), l = {
    [a]: function(c) {
      n.util.initFields(this), n.util.initPartial(c, this);
    }
  }[a];
  return Object.setPrototypeOf(l.prototype, new S()), Object.assign(l, {
    runtime: n,
    typeName: t,
    fields: n.util.newFieldList(e),
    fromBinary(c, d) {
      return new l().fromBinary(c, d);
    },
    fromJson(c, d) {
      return new l().fromJson(c, d);
    },
    fromJsonString(c, d) {
      return new l().fromJsonString(c, d);
    },
    equals(c, d) {
      return n.util.equals(l, c, d);
    }
  }), l;
}
function NT(n, t, e, r) {
  return {
    syntax: n,
    json: t,
    bin: e,
    util: r,
    makeMessageType(i, a, l) {
      return TT(this, i, a, l);
    },
    makeEnum: wT,
    makeEnumType: Gy,
    getEnumType: yT
  };
}
var K;
(function(n) {
  n[n.DOUBLE = 1] = "DOUBLE", n[n.FLOAT = 2] = "FLOAT", n[n.INT64 = 3] = "INT64", n[n.UINT64 = 4] = "UINT64", n[n.INT32 = 5] = "INT32", n[n.FIXED64 = 6] = "FIXED64", n[n.FIXED32 = 7] = "FIXED32", n[n.BOOL = 8] = "BOOL", n[n.STRING = 9] = "STRING", n[n.BYTES = 12] = "BYTES", n[n.UINT32 = 13] = "UINT32", n[n.SFIXED32 = 15] = "SFIXED32", n[n.SFIXED64 = 16] = "SFIXED64", n[n.SINT32 = 17] = "SINT32", n[n.SINT64 = 18] = "SINT64";
})(K || (K = {}));
function ET() {
  let n = 0, t = 0;
  for (let r = 0; r < 28; r += 7) {
    let i = this.buf[this.pos++];
    if (n |= (i & 127) << r, !(i & 128))
      return this.assertBounds(), [n, t];
  }
  let e = this.buf[this.pos++];
  if (n |= (e & 15) << 28, t = (e & 112) >> 4, !(e & 128))
    return this.assertBounds(), [n, t];
  for (let r = 3; r <= 31; r += 7) {
    let i = this.buf[this.pos++];
    if (t |= (i & 127) << r, !(i & 128))
      return this.assertBounds(), [n, t];
  }
  throw new Error("invalid varint");
}
function kh(n, t, e) {
  for (let a = 0; a < 28; a = a + 7) {
    const l = n >>> a, c = !(!(l >>> 7) && t == 0), d = (c ? l | 128 : l) & 255;
    if (e.push(d), !c)
      return;
  }
  const r = n >>> 28 & 15 | (t & 7) << 4, i = !!(t >> 3);
  if (e.push((i ? r | 128 : r) & 255), !!i) {
    for (let a = 3; a < 31; a = a + 7) {
      const l = t >>> a, c = !!(l >>> 7), d = (c ? l | 128 : l) & 255;
      if (e.push(d), !c)
        return;
    }
    e.push(t >>> 31 & 1);
  }
}
const kd = 4294967296;
function bg(n) {
  const t = n[0] === "-";
  t && (n = n.slice(1));
  const e = 1e6;
  let r = 0, i = 0;
  function a(l, c) {
    const d = Number(n.slice(l, c));
    i *= e, r = r * e + d, r >= kd && (i = i + (r / kd | 0), r = r % kd);
  }
  return a(-24, -18), a(-18, -12), a(-12, -6), a(-6), t ? Zy(r, i) : Op(r, i);
}
function bT(n, t) {
  let e = Op(n, t);
  const r = e.hi & 2147483648;
  r && (e = Zy(e.lo, e.hi));
  const i = Yy(e.lo, e.hi);
  return r ? "-" + i : i;
}
function Yy(n, t) {
  if ({ lo: n, hi: t } = kT(n, t), t <= 2097151)
    return String(kd * t + n);
  const e = n & 16777215, r = (n >>> 24 | t << 8) & 16777215, i = t >> 16 & 65535;
  let a = e + r * 6777216 + i * 6710656, l = r + i * 8147497, c = i * 2;
  const d = 1e7;
  return a >= d && (l += Math.floor(a / d), a %= d), l >= d && (c += Math.floor(l / d), l %= d), c.toString() + kg(l) + kg(a);
}
function kT(n, t) {
  return { lo: n >>> 0, hi: t >>> 0 };
}
function Op(n, t) {
  return { lo: n | 0, hi: t | 0 };
}
function Zy(n, t) {
  return t = ~t, n ? n = ~n + 1 : t += 1, Op(n, t);
}
const kg = (n) => {
  const t = String(n);
  return "0000000".slice(t.length) + t;
};
function Bg(n, t) {
  if (n >= 0) {
    for (; n > 127; )
      t.push(n & 127 | 128), n = n >>> 7;
    t.push(n);
  } else {
    for (let e = 0; e < 9; e++)
      t.push(n & 127 | 128), n = n >> 7;
    t.push(1);
  }
}
function BT() {
  let n = this.buf[this.pos++], t = n & 127;
  if (!(n & 128))
    return this.assertBounds(), t;
  if (n = this.buf[this.pos++], t |= (n & 127) << 7, !(n & 128))
    return this.assertBounds(), t;
  if (n = this.buf[this.pos++], t |= (n & 127) << 14, !(n & 128))
    return this.assertBounds(), t;
  if (n = this.buf[this.pos++], t |= (n & 127) << 21, !(n & 128))
    return this.assertBounds(), t;
  n = this.buf[this.pos++], t |= (n & 15) << 28;
  for (let e = 5; n & 128 && e < 10; e++)
    n = this.buf[this.pos++];
  if (n & 128)
    throw new Error("invalid varint");
  return this.assertBounds(), t >>> 0;
}
function ST() {
  const n = new DataView(new ArrayBuffer(8));
  if (typeof BigInt == "function" && typeof n.getBigInt64 == "function" && typeof n.getBigUint64 == "function" && typeof n.setBigInt64 == "function" && typeof n.setBigUint64 == "function" && (typeof process != "object" || typeof { NODE_ENV: '"production"', SDK_PATH: "https://sdk.getcode.com/v1/elements" } != "object" || { NODE_ENV: '"production"', SDK_PATH: "https://sdk.getcode.com/v1/elements" }.BUF_BIGINT_DISABLE !== "1")) {
    const i = BigInt("-9223372036854775808"), a = BigInt("9223372036854775807"), l = BigInt("0"), c = BigInt("18446744073709551615");
    return {
      zero: BigInt(0),
      supported: !0,
      parse(d) {
        const h = typeof d == "bigint" ? d : BigInt(d);
        if (h > a || h < i)
          throw new Error(`int64 invalid: ${d}`);
        return h;
      },
      uParse(d) {
        const h = typeof d == "bigint" ? d : BigInt(d);
        if (h > c || h < l)
          throw new Error(`uint64 invalid: ${d}`);
        return h;
      },
      enc(d) {
        return n.setBigInt64(0, this.parse(d), !0), {
          lo: n.getInt32(0, !0),
          hi: n.getInt32(4, !0)
        };
      },
      uEnc(d) {
        return n.setBigInt64(0, this.uParse(d), !0), {
          lo: n.getInt32(0, !0),
          hi: n.getInt32(4, !0)
        };
      },
      dec(d, h) {
        return n.setInt32(0, d, !0), n.setInt32(4, h, !0), n.getBigInt64(0, !0);
      },
      uDec(d, h) {
        return n.setInt32(0, d, !0), n.setInt32(4, h, !0), n.getBigUint64(0, !0);
      }
    };
  }
  const e = (i) => Ne(/^-?[0-9]+$/.test(i), `int64 invalid: ${i}`), r = (i) => Ne(/^[0-9]+$/.test(i), `uint64 invalid: ${i}`);
  return {
    zero: "0",
    supported: !1,
    parse(i) {
      return typeof i != "string" && (i = i.toString()), e(i), i;
    },
    uParse(i) {
      return typeof i != "string" && (i = i.toString()), r(i), i;
    },
    enc(i) {
      return typeof i != "string" && (i = i.toString()), e(i), bg(i);
    },
    uEnc(i) {
      return typeof i != "string" && (i = i.toString()), r(i), bg(i);
    },
    dec(i, a) {
      return bT(i, a);
    },
    uDec(i, a) {
      return Yy(i, a);
    }
  };
}
const St = ST();
var zt;
(function(n) {
  n[n.Varint = 0] = "Varint", n[n.Bit64 = 1] = "Bit64", n[n.LengthDelimited = 2] = "LengthDelimited", n[n.StartGroup = 3] = "StartGroup", n[n.EndGroup = 4] = "EndGroup", n[n.Bit32 = 5] = "Bit32";
})(zt || (zt = {}));
class IT {
  constructor(t) {
    this.stack = [], this.textEncoder = t ?? new TextEncoder(), this.chunks = [], this.buf = [];
  }
  /**
   * Return all bytes written and reset this writer.
   */
  finish() {
    this.chunks.push(new Uint8Array(this.buf));
    let t = 0;
    for (let i = 0; i < this.chunks.length; i++)
      t += this.chunks[i].length;
    let e = new Uint8Array(t), r = 0;
    for (let i = 0; i < this.chunks.length; i++)
      e.set(this.chunks[i], r), r += this.chunks[i].length;
    return this.chunks = [], e;
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
    let t = this.finish(), e = this.stack.pop();
    if (!e)
      throw new Error("invalid state, fork stack empty");
    return this.chunks = e.chunks, this.buf = e.buf, this.uint32(t.byteLength), this.raw(t);
  }
  /**
   * Writes a tag (field number and wire type).
   *
   * Equivalent to `uint32( (fieldNo << 3 | type) >>> 0 )`.
   *
   * Generated code should compute the tag ahead of time and call `uint32()`.
   */
  tag(t, e) {
    return this.uint32((t << 3 | e) >>> 0);
  }
  /**
   * Write a chunk of raw bytes.
   */
  raw(t) {
    return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []), this.chunks.push(t), this;
  }
  /**
   * Write a `uint32` value, an unsigned 32 bit varint.
   */
  uint32(t) {
    for (_h(t); t > 127; )
      this.buf.push(t & 127 | 128), t = t >>> 7;
    return this.buf.push(t), this;
  }
  /**
   * Write a `int32` value, a signed 32 bit varint.
   */
  int32(t) {
    return bd(t), Bg(t, this.buf), this;
  }
  /**
   * Write a `bool` value, a variant.
   */
  bool(t) {
    return this.buf.push(t ? 1 : 0), this;
  }
  /**
   * Write a `bytes` value, length-delimited arbitrary data.
   */
  bytes(t) {
    return this.uint32(t.byteLength), this.raw(t);
  }
  /**
   * Write a `string` value, length-delimited data converted to UTF-8 text.
   */
  string(t) {
    let e = this.textEncoder.encode(t);
    return this.uint32(e.byteLength), this.raw(e);
  }
  /**
   * Write a `float` value, 32-bit floating point number.
   */
  float(t) {
    zy(t);
    let e = new Uint8Array(4);
    return new DataView(e.buffer).setFloat32(0, t, !0), this.raw(e);
  }
  /**
   * Write a `double` value, a 64-bit floating point number.
   */
  double(t) {
    let e = new Uint8Array(8);
    return new DataView(e.buffer).setFloat64(0, t, !0), this.raw(e);
  }
  /**
   * Write a `fixed32` value, an unsigned, fixed-length 32-bit integer.
   */
  fixed32(t) {
    _h(t);
    let e = new Uint8Array(4);
    return new DataView(e.buffer).setUint32(0, t, !0), this.raw(e);
  }
  /**
   * Write a `sfixed32` value, a signed, fixed-length 32-bit integer.
   */
  sfixed32(t) {
    bd(t);
    let e = new Uint8Array(4);
    return new DataView(e.buffer).setInt32(0, t, !0), this.raw(e);
  }
  /**
   * Write a `sint32` value, a signed, zigzag-encoded 32-bit varint.
   */
  sint32(t) {
    return bd(t), t = (t << 1 ^ t >> 31) >>> 0, Bg(t, this.buf), this;
  }
  /**
   * Write a `fixed64` value, a signed, fixed-length 64-bit integer.
   */
  sfixed64(t) {
    let e = new Uint8Array(8), r = new DataView(e.buffer), i = St.enc(t);
    return r.setInt32(0, i.lo, !0), r.setInt32(4, i.hi, !0), this.raw(e);
  }
  /**
   * Write a `fixed64` value, an unsigned, fixed-length 64 bit integer.
   */
  fixed64(t) {
    let e = new Uint8Array(8), r = new DataView(e.buffer), i = St.uEnc(t);
    return r.setInt32(0, i.lo, !0), r.setInt32(4, i.hi, !0), this.raw(e);
  }
  /**
   * Write a `int64` value, a signed 64-bit varint.
   */
  int64(t) {
    let e = St.enc(t);
    return kh(e.lo, e.hi, this.buf), this;
  }
  /**
   * Write a `sint64` value, a signed, zig-zag-encoded 64-bit varint.
   */
  sint64(t) {
    let e = St.enc(t), r = e.hi >> 31, i = e.lo << 1 ^ r, a = (e.hi << 1 | e.lo >>> 31) ^ r;
    return kh(i, a, this.buf), this;
  }
  /**
   * Write a `uint64` value, an unsigned 64-bit varint.
   */
  uint64(t) {
    let e = St.uEnc(t);
    return kh(e.lo, e.hi, this.buf), this;
  }
}
class OT {
  constructor(t, e) {
    this.varint64 = ET, this.uint32 = BT, this.buf = t, this.len = t.length, this.pos = 0, this.view = new DataView(t.buffer, t.byteOffset, t.byteLength), this.textDecoder = e ?? new TextDecoder();
  }
  /**
   * Reads a tag - field number and wire type.
   */
  tag() {
    let t = this.uint32(), e = t >>> 3, r = t & 7;
    if (e <= 0 || r < 0 || r > 5)
      throw new Error("illegal tag: field no " + e + " wire type " + r);
    return [e, r];
  }
  /**
   * Skip one element on the wire and return the skipped data.
   * Supports WireType.StartGroup since v2.0.0-alpha.23.
   */
  skip(t) {
    let e = this.pos;
    switch (t) {
      case zt.Varint:
        for (; this.buf[this.pos++] & 128; )
          ;
        break;
      case zt.Bit64:
        this.pos += 4;
      case zt.Bit32:
        this.pos += 4;
        break;
      case zt.LengthDelimited:
        let r = this.uint32();
        this.pos += r;
        break;
      case zt.StartGroup:
        let i;
        for (; (i = this.tag()[1]) !== zt.EndGroup; )
          this.skip(i);
        break;
      default:
        throw new Error("cant skip wire type " + t);
    }
    return this.assertBounds(), this.buf.subarray(e, this.pos);
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
    let t = this.uint32();
    return t >>> 1 ^ -(t & 1);
  }
  /**
   * Read a `int64` field, a signed 64-bit varint.
   */
  int64() {
    return St.dec(...this.varint64());
  }
  /**
   * Read a `uint64` field, an unsigned 64-bit varint.
   */
  uint64() {
    return St.uDec(...this.varint64());
  }
  /**
   * Read a `sint64` field, a signed, zig-zag-encoded 64-bit varint.
   */
  sint64() {
    let [t, e] = this.varint64(), r = -(t & 1);
    return t = (t >>> 1 | (e & 1) << 31) ^ r, e = e >>> 1 ^ r, St.dec(t, e);
  }
  /**
   * Read a `bool` field, a variant.
   */
  bool() {
    let [t, e] = this.varint64();
    return t !== 0 || e !== 0;
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
    return St.uDec(this.sfixed32(), this.sfixed32());
  }
  /**
   * Read a `fixed64` field, a signed, fixed-length 64-bit integer.
   */
  sfixed64() {
    return St.dec(this.sfixed32(), this.sfixed32());
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
    let t = this.uint32(), e = this.pos;
    return this.pos += t, this.assertBounds(), this.buf.subarray(e, e + t);
  }
  /**
   * Read a `string` field, length-delimited data converted to UTF-8 text.
   */
  string() {
    return this.textDecoder.decode(this.bytes());
  }
}
function Hh(n, t) {
  return t instanceof S || !n.fieldWrapper ? t : n.fieldWrapper.wrapField(t);
}
K.DOUBLE, K.FLOAT, K.INT64, K.UINT64, K.INT32, K.UINT32, K.BOOL, K.STRING, K.BYTES;
function $a(n, t, e) {
  if (t === e)
    return !0;
  if (n == K.BYTES) {
    if (!(t instanceof Uint8Array) || !(e instanceof Uint8Array) || t.length !== e.length)
      return !1;
    for (let r = 0; r < t.length; r++)
      if (t[r] !== e[r])
        return !1;
    return !0;
  }
  switch (n) {
    case K.UINT64:
    case K.FIXED64:
    case K.INT64:
    case K.SFIXED64:
    case K.SINT64:
      return t == e;
  }
  return !1;
}
function zh(n) {
  switch (n) {
    case K.BOOL:
      return !1;
    case K.UINT64:
    case K.FIXED64:
    case K.INT64:
    case K.SFIXED64:
    case K.SINT64:
      return St.zero;
    case K.DOUBLE:
    case K.FLOAT:
      return 0;
    case K.BYTES:
      return new Uint8Array(0);
    case K.STRING:
      return "";
    default:
      return 0;
  }
}
function Qy(n, t) {
  const e = t === void 0;
  let r = zt.Varint, i = t === 0;
  switch (n) {
    case K.STRING:
      i = e || !t.length, r = zt.LengthDelimited;
      break;
    case K.BOOL:
      i = t === !1;
      break;
    case K.DOUBLE:
      r = zt.Bit64;
      break;
    case K.FLOAT:
      r = zt.Bit32;
      break;
    case K.INT64:
      i = e || t == 0;
      break;
    case K.UINT64:
      i = e || t == 0;
      break;
    case K.FIXED64:
      i = e || t == 0, r = zt.Bit64;
      break;
    case K.BYTES:
      i = e || !t.byteLength, r = zt.LengthDelimited;
      break;
    case K.FIXED32:
      r = zt.Bit32;
      break;
    case K.SFIXED32:
      r = zt.Bit32;
      break;
    case K.SFIXED64:
      i = e || t == 0, r = zt.Bit64;
      break;
    case K.SINT64:
      i = e || t == 0;
      break;
  }
  const a = K[n].toLowerCase();
  return [r, a, e || i];
}
const Qc = Symbol("@bufbuild/protobuf/unknown-fields"), Sg = {
  readUnknownFields: !0,
  readerFactory: (n) => new OT(n)
}, Ig = {
  writeUnknownFields: !0,
  writerFactory: () => new IT()
};
function vT(n) {
  return n ? Object.assign(Object.assign({}, Sg), n) : Sg;
}
function JT(n) {
  return n ? Object.assign(Object.assign({}, Ig), n) : Ig;
}
function xT() {
  return {
    makeReadOptions: vT,
    makeWriteOptions: JT,
    listUnknownFields(n) {
      var t;
      return (t = n[Qc]) !== null && t !== void 0 ? t : [];
    },
    discardUnknownFields(n) {
      delete n[Qc];
    },
    writeUnknownFields(n, t) {
      const r = n[Qc];
      if (r)
        for (const i of r)
          t.tag(i.no, i.wireType).raw(i.data);
    },
    onUnknownField(n, t, e, r) {
      const i = n;
      Array.isArray(i[Qc]) || (i[Qc] = []), i[Qc].push({ no: t, wireType: e, data: r });
    },
    readMessage(n, t, e, r) {
      const i = n.getType(), a = e === void 0 ? t.len : t.pos + e;
      for (; t.pos < a; ) {
        const [l, c] = t.tag(), d = i.fields.find(l);
        if (!d) {
          const T = t.skip(c);
          r.readUnknownFields && this.onUnknownField(n, l, c, T);
          continue;
        }
        let h = n, g = d.repeated, y = d.localName;
        switch (d.oneof && (h = h[d.oneof.localName], h.case != y && delete h.value, h.case = y, y = "value"), d.kind) {
          case "scalar":
          case "enum":
            const T = d.kind == "enum" ? K.INT32 : d.T;
            if (g) {
              let L = h[y];
              if (c == zt.LengthDelimited && T != K.STRING && T != K.BYTES) {
                let $ = t.uint32() + t.pos;
                for (; t.pos < $; )
                  L.push(Pl(t, T));
              } else
                L.push(Pl(t, T));
            } else
              h[y] = Pl(t, T);
            break;
          case "message":
            const b = d.T;
            g ? h[y].push(Bd(t, new b(), r)) : h[y] instanceof S ? Bd(t, h[y], r) : (h[y] = Bd(t, new b(), r), b.fieldWrapper && !d.oneof && !d.repeated && (h[y] = b.fieldWrapper.unwrapField(h[y])));
            break;
          case "map":
            let [O, x] = AT(d, t, r);
            h[y][O] = x;
            break;
        }
      }
    }
  };
}
function Bd(n, t, e) {
  return t.getType().runtime.bin.readMessage(t, n, n.uint32(), e), t;
}
function AT(n, t, e) {
  const r = t.uint32(), i = t.pos + r;
  let a, l;
  for (; t.pos < i; ) {
    let [c] = t.tag();
    switch (c) {
      case 1:
        a = Pl(t, n.K);
        break;
      case 2:
        switch (n.V.kind) {
          case "scalar":
            l = Pl(t, n.V.T);
            break;
          case "enum":
            l = t.int32();
            break;
          case "message":
            l = Bd(t, new n.V.T(), e);
            break;
        }
        break;
    }
  }
  if (a === void 0) {
    let c = zh(n.K);
    a = n.K == K.BOOL ? c.toString() : c;
  }
  if (typeof a != "string" && typeof a != "number" && (a = a.toString()), l === void 0)
    switch (n.V.kind) {
      case "scalar":
        l = zh(n.V.T);
        break;
      case "enum":
        l = 0;
        break;
      case "message":
        l = new n.V.T();
        break;
    }
  return [a, l];
}
function Pl(n, t) {
  switch (t) {
    case K.STRING:
      return n.string();
    case K.BOOL:
      return n.bool();
    case K.DOUBLE:
      return n.double();
    case K.FLOAT:
      return n.float();
    case K.INT32:
      return n.int32();
    case K.INT64:
      return n.int64();
    case K.UINT64:
      return n.uint64();
    case K.FIXED64:
      return n.fixed64();
    case K.BYTES:
      return n.bytes();
    case K.FIXED32:
      return n.fixed32();
    case K.SFIXED32:
      return n.sfixed32();
    case K.SFIXED64:
      return n.sfixed64();
    case K.SINT64:
      return n.sint64();
    case K.UINT32:
      return n.uint32();
    case K.SINT32:
      return n.sint32();
  }
}
function UT(n, t, e, r, i) {
  n.tag(e.no, zt.LengthDelimited), n.fork();
  let a = r;
  switch (e.K) {
    case K.INT32:
    case K.FIXED32:
    case K.UINT32:
    case K.SFIXED32:
    case K.SINT32:
      a = Number.parseInt(r);
      break;
    case K.BOOL:
      Ne(r == "true" || r == "false"), a = r == "true";
      break;
  }
  switch (Cl(n, e.K, 1, a, !0), e.V.kind) {
    case "scalar":
      Cl(n, e.V.T, 2, i, !0);
      break;
    case "enum":
      Cl(n, K.INT32, 2, i, !0);
      break;
    case "message":
      jh(n, t, e.V.T, 2, i);
      break;
  }
  n.join();
}
function jh(n, t, e, r, i) {
  if (i !== void 0) {
    const a = Hh(e, i);
    n.tag(r, zt.LengthDelimited).bytes(a.toBinary(t));
  }
}
function Cl(n, t, e, r, i) {
  let [a, l, c] = Qy(t, r);
  (!c || i) && n.tag(e, a)[l](r);
}
function LT(n, t, e, r) {
  if (!r.length)
    return;
  n.tag(e, zt.LengthDelimited).fork();
  let [, i] = Qy(t);
  for (let a = 0; a < r.length; a++)
    n[i](r[a]);
  n.join();
}
function FT() {
  return Object.assign(Object.assign({}, xT()), { writeMessage(n, t, e) {
    const r = n.getType();
    for (const i of r.fields.byNumber()) {
      let a, l = i.repeated, c = i.localName;
      if (i.oneof) {
        const d = n[i.oneof.localName];
        if (d.case !== c)
          continue;
        a = d.value;
      } else
        a = n[c];
      switch (i.kind) {
        case "scalar":
        case "enum":
          let d = i.kind == "enum" ? K.INT32 : i.T;
          if (l)
            if (i.packed)
              LT(t, d, i.no, a);
            else
              for (const h of a)
                Cl(t, d, i.no, h, !0);
          else
            a !== void 0 && Cl(t, d, i.no, a, !!i.oneof || i.opt);
          break;
        case "message":
          if (l)
            for (const h of a)
              jh(t, e, i.T, i.no, h);
          else
            jh(t, e, i.T, i.no, a);
          break;
        case "map":
          for (const [h, g] of Object.entries(a))
            UT(t, e, i, h, g);
          break;
      }
    }
    return e.writeUnknownFields && this.writeUnknownFields(n, t), t;
  } });
}
let hr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), Qd = [];
for (let n = 0; n < hr.length; n++)
  Qd[hr[n].charCodeAt(0)] = n;
Qd["-".charCodeAt(0)] = hr.indexOf("+");
Qd["_".charCodeAt(0)] = hr.indexOf("/");
const t0 = {
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
    let t = n.length * 3 / 4;
    n[n.length - 2] == "=" ? t -= 2 : n[n.length - 1] == "=" && (t -= 1);
    let e = new Uint8Array(t), r = 0, i = 0, a, l = 0;
    for (let c = 0; c < n.length; c++) {
      if (a = Qd[n.charCodeAt(c)], a === void 0)
        switch (n[c]) {
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
          l = a, i = 1;
          break;
        case 1:
          e[r++] = l << 2 | (a & 48) >> 4, l = a, i = 2;
          break;
        case 2:
          e[r++] = (l & 15) << 4 | (a & 60) >> 2, l = a, i = 3;
          break;
        case 3:
          e[r++] = (l & 3) << 6 | a, i = 0;
          break;
      }
    }
    if (i == 1)
      throw Error("invalid base64 string.");
    return e.subarray(0, r);
  },
  /**
   * Encode a byte array to a base64 string.
   */
  enc(n) {
    let t = "", e = 0, r, i = 0;
    for (let a = 0; a < n.length; a++)
      switch (r = n[a], e) {
        case 0:
          t += hr[r >> 2], i = (r & 3) << 4, e = 1;
          break;
        case 1:
          t += hr[i | r >> 4], i = (r & 15) << 2, e = 2;
          break;
        case 2:
          t += hr[i | r >> 6], t += hr[r & 63], e = 0;
          break;
      }
    return e && (t += hr[i], t += "=", e == 1 && (t += "=")), t;
  }
}, Og = {
  ignoreUnknownFields: !1
}, vg = {
  emitDefaultValues: !1,
  enumAsInteger: !1,
  useProtoFieldName: !1,
  prettySpaces: 0
};
function qT(n) {
  return n ? Object.assign(Object.assign({}, Og), n) : Og;
}
function DT(n) {
  return n ? Object.assign(Object.assign({}, vg), n) : vg;
}
function PT(n) {
  const t = n(CT, Jg);
  return {
    makeReadOptions: qT,
    makeWriteOptions: DT,
    readMessage(e, r, i, a) {
      if (r == null || Array.isArray(r) || typeof r != "object")
        throw new Error(`cannot decode message ${e.typeName} from JSON: ${this.debug(r)}`);
      a = a ?? new e();
      const l = {};
      for (const [c, d] of Object.entries(r)) {
        const h = e.fields.findJsonName(c);
        if (!h) {
          if (!i.ignoreUnknownFields)
            throw new Error(`cannot decode message ${e.typeName} from JSON: key "${c}" is unknown`);
          continue;
        }
        let g = h.localName, y = a;
        if (h.oneof) {
          if (d === null && h.kind == "scalar")
            continue;
          const T = l[h.oneof.localName];
          if (T)
            throw new Error(`cannot decode message ${e.typeName} from JSON: multiple keys for oneof "${h.oneof.name}" present: "${T}", "${c}"`);
          l[h.oneof.localName] = c, y = y[h.oneof.localName] = { case: g }, g = "value";
        }
        if (h.repeated) {
          if (d === null)
            continue;
          if (!Array.isArray(d))
            throw new Error(`cannot decode field ${e.typeName}.${h.name} from JSON: ${this.debug(d)}`);
          const T = y[g];
          for (const b of d) {
            if (b === null)
              throw new Error(`cannot decode field ${e.typeName}.${h.name} from JSON: ${this.debug(b)}`);
            let O;
            switch (h.kind) {
              case "message":
                O = h.T.fromJson(b, i);
                break;
              case "enum":
                if (O = Bh(h.T, b, i.ignoreUnknownFields), O === void 0)
                  continue;
                break;
              case "scalar":
                try {
                  O = Nl(h.T, b);
                } catch (x) {
                  let L = `cannot decode field ${e.typeName}.${h.name} from JSON: ${this.debug(b)}`;
                  throw x instanceof Error && x.message.length > 0 && (L += `: ${x.message}`), new Error(L);
                }
                break;
            }
            T.push(O);
          }
        } else if (h.kind == "map") {
          if (d === null)
            continue;
          if (Array.isArray(d) || typeof d != "object")
            throw new Error(`cannot decode field ${e.typeName}.${h.name} from JSON: ${this.debug(d)}`);
          const T = y[g];
          for (const [b, O] of Object.entries(d)) {
            if (O === null)
              throw new Error(`cannot decode field ${e.typeName}.${h.name} from JSON: map value null`);
            let x;
            switch (h.V.kind) {
              case "message":
                x = h.V.T.fromJson(O, i);
                break;
              case "enum":
                if (x = Bh(h.V.T, O, i.ignoreUnknownFields), x === void 0)
                  continue;
                break;
              case "scalar":
                try {
                  x = Nl(h.V.T, O);
                } catch (L) {
                  let $ = `cannot decode map value for field ${e.typeName}.${h.name} from JSON: ${this.debug(d)}`;
                  throw L instanceof Error && L.message.length > 0 && ($ += `: ${L.message}`), new Error($);
                }
                break;
            }
            try {
              T[Nl(h.K, h.K == K.BOOL ? b == "true" ? !0 : b == "false" ? !1 : b : b).toString()] = x;
            } catch (L) {
              let $ = `cannot decode map key for field ${e.typeName}.${h.name} from JSON: ${this.debug(d)}`;
              throw L instanceof Error && L.message.length > 0 && ($ += `: ${L.message}`), new Error($);
            }
          }
        } else
          switch (h.kind) {
            case "message":
              const T = h.T;
              if (d === null && T.typeName != "google.protobuf.Value") {
                if (h.oneof)
                  throw new Error(`cannot decode field ${e.typeName}.${h.name} from JSON: null is invalid for oneof field "${c}"`);
                continue;
              }
              y[g] instanceof S ? y[g].fromJson(d, i) : (y[g] = T.fromJson(d, i), T.fieldWrapper && !h.oneof && (y[g] = T.fieldWrapper.unwrapField(y[g])));
              break;
            case "enum":
              const b = Bh(h.T, d, i.ignoreUnknownFields);
              b !== void 0 && (y[g] = b);
              break;
            case "scalar":
              try {
                y[g] = Nl(h.T, d);
              } catch (O) {
                let x = `cannot decode field ${e.typeName}.${h.name} from JSON: ${this.debug(d)}`;
                throw O instanceof Error && O.message.length > 0 && (x += `: ${O.message}`), new Error(x);
              }
              break;
          }
      }
      return a;
    },
    writeMessage(e, r) {
      const i = e.getType(), a = {};
      let l;
      try {
        for (const c of i.fields.byMember()) {
          let d;
          if (c.kind == "oneof") {
            const h = e[c.localName];
            if (h.value === void 0)
              continue;
            if (l = c.findField(h.case), !l)
              throw "oneof case not found: " + h.case;
            d = t(l, h.value, r);
          } else
            l = c, d = t(l, e[l.localName], r);
          d !== void 0 && (a[r.useProtoFieldName ? l.name : l.jsonName] = d);
        }
      } catch (c) {
        const d = l ? `cannot encode field ${i.typeName}.${l.name} to JSON` : `cannot encode message ${i.typeName} to JSON`, h = c instanceof Error ? c.message : String(c);
        throw new Error(d + (h.length > 0 ? `: ${h}` : ""));
      }
      return a;
    },
    readScalar: Nl,
    writeScalar: Jg,
    debug: e0
  };
}
function e0(n) {
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
function Nl(n, t) {
  switch (n) {
    case K.DOUBLE:
    case K.FLOAT:
      if (t === null)
        return 0;
      if (t === "NaN")
        return Number.NaN;
      if (t === "Infinity")
        return Number.POSITIVE_INFINITY;
      if (t === "-Infinity")
        return Number.NEGATIVE_INFINITY;
      if (t === "" || typeof t == "string" && t.trim().length !== t.length || typeof t != "string" && typeof t != "number")
        break;
      const e = Number(t);
      if (Number.isNaN(e) || !Number.isFinite(e))
        break;
      return n == K.FLOAT && zy(e), e;
    case K.INT32:
    case K.FIXED32:
    case K.SFIXED32:
    case K.SINT32:
    case K.UINT32:
      if (t === null)
        return 0;
      let r;
      if (typeof t == "number" ? r = t : typeof t == "string" && t.length > 0 && t.trim().length === t.length && (r = Number(t)), r === void 0)
        break;
      return n == K.UINT32 ? _h(r) : bd(r), r;
    case K.INT64:
    case K.SFIXED64:
    case K.SINT64:
      if (t === null)
        return St.zero;
      if (typeof t != "number" && typeof t != "string")
        break;
      return St.parse(t);
    case K.FIXED64:
    case K.UINT64:
      if (t === null)
        return St.zero;
      if (typeof t != "number" && typeof t != "string")
        break;
      return St.uParse(t);
    case K.BOOL:
      if (t === null)
        return !1;
      if (typeof t != "boolean")
        break;
      return t;
    case K.STRING:
      if (t === null)
        return "";
      if (typeof t != "string")
        break;
      try {
        encodeURIComponent(t);
      } catch {
        throw new Error("invalid UTF8");
      }
      return t;
    case K.BYTES:
      if (t === null || t === "")
        return new Uint8Array(0);
      if (typeof t != "string")
        break;
      return t0.dec(t);
  }
  throw new Error();
}
function Bh(n, t, e) {
  if (t === null)
    return 0;
  switch (typeof t) {
    case "number":
      if (Number.isInteger(t))
        return t;
      break;
    case "string":
      const r = n.findName(t);
      if (r || e)
        return r == null ? void 0 : r.no;
      break;
  }
  throw new Error(`cannot decode enum ${n.typeName} from JSON: ${e0(t)}`);
}
function CT(n, t, e, r) {
  var i;
  if (t === void 0)
    return t;
  if (t === 0 && !e)
    return;
  if (r)
    return t;
  if (n.typeName == "google.protobuf.NullValue")
    return null;
  const a = n.findNumber(t);
  return (i = a == null ? void 0 : a.name) !== null && i !== void 0 ? i : t;
}
function Jg(n, t, e) {
  if (t !== void 0)
    switch (n) {
      case K.INT32:
      case K.SFIXED32:
      case K.SINT32:
      case K.FIXED32:
      case K.UINT32:
        return Ne(typeof t == "number"), t != 0 || e ? t : void 0;
      case K.FLOAT:
      case K.DOUBLE:
        return Ne(typeof t == "number"), Number.isNaN(t) ? "NaN" : t === Number.POSITIVE_INFINITY ? "Infinity" : t === Number.NEGATIVE_INFINITY ? "-Infinity" : t !== 0 || e ? t : void 0;
      case K.STRING:
        return Ne(typeof t == "string"), t.length > 0 || e ? t : void 0;
      case K.BOOL:
        return Ne(typeof t == "boolean"), t || e ? t : void 0;
      case K.UINT64:
      case K.FIXED64:
      case K.INT64:
      case K.SFIXED64:
      case K.SINT64:
        return Ne(typeof t == "bigint" || typeof t == "string" || typeof t == "number"), e || t != 0 ? t.toString(10) : void 0;
      case K.BYTES:
        return Ne(t instanceof Uint8Array), e || t.byteLength > 0 ? t0.enc(t) : void 0;
    }
}
function KT() {
  return PT((n, t) => function(r, i, a) {
    if (r.kind == "map") {
      const l = {};
      switch (r.V.kind) {
        case "scalar":
          for (const [d, h] of Object.entries(i)) {
            const g = t(r.V.T, h, !0);
            Ne(g !== void 0), l[d.toString()] = g;
          }
          break;
        case "message":
          for (const [d, h] of Object.entries(i))
            l[d.toString()] = h.toJson(a);
          break;
        case "enum":
          const c = r.V.T;
          for (const [d, h] of Object.entries(i)) {
            Ne(h === void 0 || typeof h == "number");
            const g = n(c, h, !0, a.enumAsInteger);
            Ne(g !== void 0), l[d.toString()] = g;
          }
          break;
      }
      return a.emitDefaultValues || Object.keys(l).length > 0 ? l : void 0;
    } else if (r.repeated) {
      const l = [];
      switch (r.kind) {
        case "scalar":
          for (let c = 0; c < i.length; c++)
            l.push(t(r.T, i[c], !0));
          break;
        case "enum":
          for (let c = 0; c < i.length; c++)
            l.push(n(r.T, i[c], !0, a.enumAsInteger));
          break;
        case "message":
          for (let c = 0; c < i.length; c++)
            l.push(Hh(r.T, i[c]).toJson(a));
          break;
      }
      return a.emitDefaultValues || l.length > 0 ? l : void 0;
    } else
      switch (r.kind) {
        case "scalar":
          return t(r.T, i, !!r.oneof || r.opt || a.emitDefaultValues);
        case "enum":
          return n(r.T, i, !!r.oneof || r.opt || a.emitDefaultValues, a.enumAsInteger);
        case "message":
          return i !== void 0 ? Hh(r.T, i).toJson(a) : void 0;
      }
  });
}
function RT() {
  return {
    setEnumType: Wy,
    initPartial(n, t) {
      if (n === void 0)
        return;
      const e = t.getType();
      for (const r of e.fields.byMember()) {
        const i = r.localName, a = t, l = n;
        if (l[i] !== void 0)
          switch (r.kind) {
            case "oneof":
              const c = l[i].case;
              if (c === void 0)
                continue;
              const d = r.findField(c);
              let h = l[i].value;
              d && d.kind == "message" && !(h instanceof d.T) ? h = new d.T(h) : d && d.kind === "scalar" && d.T === K.BYTES && (h = El(h)), a[i] = { case: c, value: h };
              break;
            case "scalar":
            case "enum":
              let g = l[i];
              r.T === K.BYTES && (g = r.repeated ? g.map(El) : El(g)), a[i] = g;
              break;
            case "map":
              switch (r.V.kind) {
                case "scalar":
                case "enum":
                  if (r.V.T === K.BYTES)
                    for (const [b, O] of Object.entries(l[i]))
                      a[i][b] = El(O);
                  else
                    Object.assign(a[i], l[i]);
                  break;
                case "message":
                  const T = r.V.T;
                  for (const b of Object.keys(l[i])) {
                    let O = l[i][b];
                    T.fieldWrapper || (O = new T(O)), a[i][b] = O;
                  }
                  break;
              }
              break;
            case "message":
              const y = r.T;
              if (r.repeated)
                a[i] = l[i].map((T) => T instanceof y ? T : new y(T));
              else if (l[i] !== void 0) {
                const T = l[i];
                y.fieldWrapper ? /* We can't use BytesValue.typeName as that will create a circular import */ y.typeName === "google.protobuf.BytesValue" ? a[i] = El(T) : a[i] = T : a[i] = T instanceof y ? T : new y(T);
              }
              break;
          }
      }
    },
    equals(n, t, e) {
      return t === e ? !0 : !t || !e ? !1 : n.fields.byMember().every((r) => {
        const i = t[r.localName], a = e[r.localName];
        if (r.repeated) {
          if (i.length !== a.length)
            return !1;
          switch (r.kind) {
            case "message":
              return i.every((l, c) => r.T.equals(l, a[c]));
            case "scalar":
              return i.every((l, c) => $a(r.T, l, a[c]));
            case "enum":
              return i.every((l, c) => $a(K.INT32, l, a[c]));
          }
          throw new Error(`repeated cannot contain ${r.kind}`);
        }
        switch (r.kind) {
          case "message":
            return r.T.equals(i, a);
          case "enum":
            return $a(K.INT32, i, a);
          case "scalar":
            return $a(r.T, i, a);
          case "oneof":
            if (i.case !== a.case)
              return !1;
            const l = r.findField(i.case);
            if (l === void 0)
              return !0;
            switch (l.kind) {
              case "message":
                return l.T.equals(i.value, a.value);
              case "enum":
                return $a(K.INT32, i.value, a.value);
              case "scalar":
                return $a(l.T, i.value, a.value);
            }
            throw new Error(`oneof cannot contain ${l.kind}`);
          case "map":
            const c = Object.keys(i).concat(Object.keys(a));
            switch (r.V.kind) {
              case "message":
                const d = r.V.T;
                return c.every((g) => d.equals(i[g], a[g]));
              case "enum":
                return c.every((g) => $a(K.INT32, i[g], a[g]));
              case "scalar":
                const h = r.V.T;
                return c.every((g) => $a(h, i[g], a[g]));
            }
            break;
        }
      });
    },
    clone(n) {
      const t = n.getType(), e = new t(), r = e;
      for (const i of t.fields.byMember()) {
        const a = n[i.localName];
        let l;
        if (i.repeated)
          l = a.map(cd);
        else if (i.kind == "map") {
          l = r[i.localName];
          for (const [c, d] of Object.entries(a))
            l[c] = cd(d);
        } else
          i.kind == "oneof" ? l = i.findField(a.case) ? { case: a.case, value: cd(a.value) } : { case: void 0 } : l = cd(a);
        r[i.localName] = l;
      }
      return e;
    }
  };
}
function cd(n) {
  if (n === void 0)
    return n;
  if (n instanceof S)
    return n.clone();
  if (n instanceof Uint8Array) {
    const t = new Uint8Array(n.byteLength);
    return t.set(n), t;
  }
  return n;
}
function El(n) {
  return n instanceof Uint8Array ? n : new Uint8Array(n);
}
class MT {
  constructor(t, e) {
    this._fields = t, this._normalizer = e;
  }
  findJsonName(t) {
    if (!this.jsonNames) {
      const e = {};
      for (const r of this.list())
        e[r.jsonName] = e[r.name] = r;
      this.jsonNames = e;
    }
    return this.jsonNames[t];
  }
  find(t) {
    if (!this.numbers) {
      const e = {};
      for (const r of this.list())
        e[r.no] = r;
      this.numbers = e;
    }
    return this.numbers[t];
  }
  list() {
    return this.all || (this.all = this._normalizer(this._fields)), this.all;
  }
  byNumber() {
    return this.numbersAsc || (this.numbersAsc = this.list().concat().sort((t, e) => t.no - e.no)), this.numbersAsc;
  }
  byMember() {
    if (!this.members) {
      this.members = [];
      const t = this.members;
      let e;
      for (const r of this.list())
        r.oneof ? r.oneof !== e && (e = r.oneof, t.push(e)) : t.push(r);
    }
    return this.members;
  }
}
function n0(n, t) {
  const e = r0(n);
  return t ? e : jT(zT(e));
}
function $T(n) {
  return n0(n, !1);
}
const VT = r0;
function r0(n) {
  let t = !1;
  const e = [];
  for (let r = 0; r < n.length; r++) {
    let i = n.charAt(r);
    switch (i) {
      case "_":
        t = !0;
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
        e.push(i), t = !1;
        break;
      default:
        t && (t = !1, i = i.toUpperCase()), e.push(i);
        break;
    }
  }
  return e.join("");
}
const _T = /* @__PURE__ */ new Set([
  // names reserved by JavaScript
  "constructor",
  "toString",
  "toJSON",
  "valueOf"
]), HT = /* @__PURE__ */ new Set([
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
]), i0 = (n) => `${n}$`, zT = (n) => HT.has(n) ? i0(n) : n, jT = (n) => _T.has(n) ? i0(n) : n;
class WT {
  constructor(t) {
    this.kind = "oneof", this.repeated = !1, this.packed = !1, this.opt = !1, this.default = void 0, this.fields = [], this.name = t, this.localName = $T(t);
  }
  addField(t) {
    Ne(t.oneof === this, `field ${t.name} not one of ${this.name}`), this.fields.push(t);
  }
  findField(t) {
    if (!this._lookup) {
      this._lookup = /* @__PURE__ */ Object.create(null);
      for (let e = 0; e < this.fields.length; e++)
        this._lookup[this.fields[e].localName] = this.fields[e];
    }
    return this._lookup[t];
  }
}
const f = NT("proto3", KT(), FT(), Object.assign(Object.assign({}, RT()), {
  newFieldList(n) {
    return new MT(n, GT);
  },
  initFields(n) {
    for (const t of n.getType().fields.byMember()) {
      if (t.opt)
        continue;
      const e = t.localName, r = n;
      if (t.repeated) {
        r[e] = [];
        continue;
      }
      switch (t.kind) {
        case "oneof":
          r[e] = { case: void 0 };
          break;
        case "enum":
          r[e] = 0;
          break;
        case "map":
          r[e] = {};
          break;
        case "scalar":
          r[e] = zh(t.T);
          break;
      }
    }
  }
}));
function GT(n) {
  var t, e, r;
  const i = [];
  let a;
  for (const l of typeof n == "function" ? n() : n) {
    const c = l;
    if (c.localName = n0(l.name, l.oneof !== void 0), c.jsonName = (t = l.jsonName) !== null && t !== void 0 ? t : VT(l.name), c.repeated = (e = l.repeated) !== null && e !== void 0 ? e : !1, c.packed = (r = l.packed) !== null && r !== void 0 ? r : l.kind == "enum" || l.kind == "scalar" && l.T != K.BYTES && l.T != K.STRING, l.oneof !== void 0) {
      const d = typeof l.oneof == "string" ? l.oneof : l.oneof.name;
      (!a || a.name != d) && (a = new WT(d)), c.oneof = a, a.addField(c);
    }
    i.push(c);
  }
  return i;
}
var Et;
(function(n) {
  n[n.Unary = 0] = "Unary", n[n.ServerStreaming = 1] = "ServerStreaming", n[n.ClientStreaming = 2] = "ClientStreaming", n[n.BiDiStreaming = 3] = "BiDiStreaming";
})(Et || (Et = {}));
var xg;
(function(n) {
  n[n.NoSideEffects = 1] = "NoSideEffects", n[n.Idempotent = 2] = "Idempotent";
})(xg || (xg = {}));
class Wt extends S {
  constructor(t) {
    super(), this.seconds = St.zero, this.nanos = 0, f.util.initPartial(t, this);
  }
  fromJson(t, e) {
    if (typeof t != "string")
      throw new Error(`cannot decode google.protobuf.Timestamp from JSON: ${f.json.debug(t)}`);
    const r = t.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
    if (!r)
      throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
    const i = Date.parse(r[1] + "-" + r[2] + "-" + r[3] + "T" + r[4] + ":" + r[5] + ":" + r[6] + (r[8] ? r[8] : "Z"));
    if (Number.isNaN(i))
      throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
    if (i < Date.parse("0001-01-01T00:00:00Z") || i > Date.parse("9999-12-31T23:59:59Z"))
      throw new Error("cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
    return this.seconds = St.parse(i / 1e3), this.nanos = 0, r[7] && (this.nanos = parseInt("1" + r[7] + "0".repeat(9 - r[7].length)) - 1e9), this;
  }
  toJson(t) {
    const e = Number(this.seconds) * 1e3;
    if (e < Date.parse("0001-01-01T00:00:00Z") || e > Date.parse("9999-12-31T23:59:59Z"))
      throw new Error("cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
    if (this.nanos < 0)
      throw new Error("cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative");
    let r = "Z";
    if (this.nanos > 0) {
      const i = (this.nanos + 1e9).toString().substring(1);
      i.substring(3) === "000000" ? r = "." + i.substring(0, 3) + "Z" : i.substring(6) === "000" ? r = "." + i.substring(0, 6) + "Z" : r = "." + i + "Z";
    }
    return new Date(e).toISOString().replace(".000Z", r);
  }
  toDate() {
    return new Date(Number(this.seconds) * 1e3 + Math.ceil(this.nanos / 1e6));
  }
  static now() {
    return Wt.fromDate(/* @__PURE__ */ new Date());
  }
  static fromDate(t) {
    const e = t.getTime();
    return new Wt({
      seconds: St.parse(Math.floor(e / 1e3)),
      nanos: e % 1e3 * 1e6
    });
  }
  static fromBinary(t, e) {
    return new Wt().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Wt().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Wt().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Wt, t, e);
  }
}
Wt.runtime = f;
Wt.typeName = "google.protobuf.Timestamp";
Wt.fields = f.util.newFieldList(() => [
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
class yr extends S {
  constructor(t) {
    super(), this.seconds = St.zero, this.nanos = 0, f.util.initPartial(t, this);
  }
  fromJson(t, e) {
    if (typeof t != "string")
      throw new Error(`cannot decode google.protobuf.Duration from JSON: ${f.json.debug(t)}`);
    const r = t.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
    if (r === null)
      throw new Error(`cannot decode google.protobuf.Duration from JSON: ${f.json.debug(t)}`);
    const i = Number(r[1]);
    if (i > 315576e6 || i < -315576e6)
      throw new Error(`cannot decode google.protobuf.Duration from JSON: ${f.json.debug(t)}`);
    if (this.seconds = St.parse(i), typeof r[2] == "string") {
      const a = r[2] + "0".repeat(9 - r[2].length);
      this.nanos = parseInt(a), (i < 0 || Object.is(i, -0)) && (this.nanos = -this.nanos);
    }
    return this;
  }
  toJson(t) {
    if (Number(this.seconds) > 315576e6 || Number(this.seconds) < -315576e6)
      throw new Error("cannot encode google.protobuf.Duration to JSON: value out of range");
    let e = this.seconds.toString();
    if (this.nanos !== 0) {
      let r = Math.abs(this.nanos).toString();
      r = "0".repeat(9 - r.length) + r, r.substring(3) === "000000" ? r = r.substring(0, 3) : r.substring(6) === "000" && (r = r.substring(0, 6)), e += "." + r, this.nanos < 0 && this.seconds === St.zero && (e = "-" + e);
    }
    return e + "s";
  }
  static fromBinary(t, e) {
    return new yr().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new yr().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new yr().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(yr, t, e);
  }
}
yr.runtime = f;
yr.typeName = "google.protobuf.Duration";
yr.fields = f.util.newFieldList(() => [
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
var Pe;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.PRIMARY = 1] = "PRIMARY", n[n.TEMPORARY_INCOMING = 2] = "TEMPORARY_INCOMING", n[n.TEMPORARY_OUTGOING = 3] = "TEMPORARY_OUTGOING", n[n.BUCKET_1_KIN = 4] = "BUCKET_1_KIN", n[n.BUCKET_10_KIN = 5] = "BUCKET_10_KIN", n[n.BUCKET_100_KIN = 6] = "BUCKET_100_KIN", n[n.BUCKET_1_000_KIN = 7] = "BUCKET_1_000_KIN", n[n.BUCKET_10_000_KIN = 8] = "BUCKET_10_000_KIN", n[n.BUCKET_100_000_KIN = 9] = "BUCKET_100_000_KIN", n[n.BUCKET_1_000_000_KIN = 10] = "BUCKET_1_000_000_KIN", n[n.LEGACY_PRIMARY_2022 = 11] = "LEGACY_PRIMARY_2022", n[n.REMOTE_SEND_GIFT_CARD = 12] = "REMOTE_SEND_GIFT_CARD", n[n.RELATIONSHIP = 13] = "RELATIONSHIP", n[n.ASSOCIATED_TOKEN_ACCOUNT = 14] = "ASSOCIATED_TOKEN_ACCOUNT";
})(Pe || (Pe = {}));
f.util.setEnumType(Pe, "code.common.v1.AccountType", [
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
class j extends S {
  constructor(t) {
    super(), this.value = new Uint8Array(0), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new j().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new j().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new j().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(j, t, e);
  }
}
j.runtime = f;
j.typeName = "code.common.v1.SolanaAccountId";
j.fields = f.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class wr extends S {
  constructor(t) {
    super(), this.isSigner = !1, this.isWritable = !1, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new wr().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new wr().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new wr().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(wr, t, e);
  }
}
wr.runtime = f;
wr.typeName = "code.common.v1.InstructionAccount";
wr.fields = f.util.newFieldList(() => [
  { no: 1, name: "account", kind: "message", T: j },
  { no: 2, name: "is_signer", kind: "scalar", T: 8 },
  { no: 3, name: "is_writable", kind: "scalar", T: 8 }
]);
class kn extends S {
  constructor(t) {
    super(), this.value = new Uint8Array(0), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new kn().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new kn().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new kn().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(kn, t, e);
  }
}
kn.runtime = f;
kn.typeName = "code.common.v1.Transaction";
kn.fields = f.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class Bn extends S {
  constructor(t) {
    super(), this.value = new Uint8Array(0), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Bn().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Bn().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Bn().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Bn, t, e);
  }
}
Bn.runtime = f;
Bn.typeName = "code.common.v1.Blockhash";
Bn.fields = f.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class wt extends S {
  constructor(t) {
    super(), this.value = new Uint8Array(0), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new wt().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new wt().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new wt().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(wt, t, e);
  }
}
wt.runtime = f;
wt.typeName = "code.common.v1.Signature";
wt.fields = f.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class ee extends S {
  constructor(t) {
    super(), this.value = new Uint8Array(0), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new ee().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new ee().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new ee().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(ee, t, e);
  }
}
ee.runtime = f;
ee.typeName = "code.common.v1.IntentId";
ee.fields = f.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class $e extends S {
  constructor(t) {
    super(), this.value = new Uint8Array(0), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new $e().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new $e().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new $e().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals($e, t, e);
  }
}
$e.runtime = f;
$e.typeName = "code.common.v1.UserId";
$e.fields = f.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class be extends S {
  constructor(t) {
    super(), this.value = new Uint8Array(0), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new be().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new be().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new be().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(be, t, e);
  }
}
be.runtime = f;
be.typeName = "code.common.v1.DataContainerId";
be.fields = f.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class Sn extends S {
  constructor(t) {
    super(), this.value = "", f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Sn().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Sn().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Sn().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Sn, t, e);
  }
}
Sn.runtime = f;
Sn.typeName = "code.common.v1.DeviceToken";
Sn.fields = f.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 9 }
]);
class Qe extends S {
  constructor(t) {
    super(), this.value = "", f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Qe().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Qe().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Qe().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Qe, t, e);
  }
}
Qe.runtime = f;
Qe.typeName = "code.common.v1.AppInstallId";
Qe.fields = f.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 9 }
]);
class ne extends S {
  constructor(t) {
    super(), this.value = "", f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new ne().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new ne().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new ne().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(ne, t, e);
  }
}
ne.runtime = f;
ne.typeName = "code.common.v1.PhoneNumber";
ne.fields = f.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 9 }
]);
class Ue extends S {
  constructor(t) {
    super(), this.value = "", f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Ue().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Ue().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Ue().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Ue, t, e);
  }
}
Ue.runtime = f;
Ue.typeName = "code.common.v1.Domain";
Ue.fields = f.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 9 }
]);
class In extends S {
  constructor(t) {
    super(), this.type = { case: void 0 }, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new In().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new In().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new In().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(In, t, e);
  }
}
In.runtime = f;
In.typeName = "code.common.v1.Relationship";
In.fields = f.util.newFieldList(() => [
  { no: 1, name: "domain", kind: "message", T: Ue, oneof: "type" }
]);
let Da = class Ol extends S {
  constructor(t) {
    super(), this.value = new Uint8Array(0), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Ol().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Ol().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Ol().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Ol, t, e);
  }
};
Da.runtime = f;
Da.typeName = "code.common.v1.Hash";
Da.fields = f.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class ou extends S {
  constructor(t) {
    super(), this.version = "", this.service = "", this.method = "", this.body = new Uint8Array(0), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new ou().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new ou().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new ou().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(ou, t, e);
  }
}
ou.runtime = f;
ou.typeName = "code.common.v1.Request";
ou.fields = f.util.newFieldList(() => [
  { no: 1, name: "version", kind: "scalar", T: 9 },
  { no: 2, name: "service", kind: "scalar", T: 9 },
  { no: 3, name: "method", kind: "scalar", T: 9 },
  { no: 4, name: "body", kind: "scalar", T: 12 }
]);
class au extends S {
  constructor(t) {
    super(), this.result = Vl.OK, this.body = new Uint8Array(0), this.message = "", f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new au().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new au().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new au().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(au, t, e);
  }
}
au.runtime = f;
au.typeName = "code.common.v1.Response";
au.fields = f.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: f.getEnumType(Vl) },
  { no: 2, name: "body", kind: "scalar", T: 12 },
  { no: 3, name: "message", kind: "scalar", T: 9 }
]);
var Vl;
(function(n) {
  n[n.OK = 0] = "OK", n[n.ERROR = 1] = "ERROR";
})(Vl || (Vl = {}));
f.util.setEnumType(Vl, "code.common.v1.Response.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "ERROR" }
]);
var ur;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.GIVE_FIRST_KIN = 1] = "GIVE_FIRST_KIN", n[n.GET_FIRST_KIN = 2] = "GET_FIRST_KIN";
})(ur || (ur = {}));
f.util.setEnumType(ur, "code.transaction.v2.AirdropType", [
  { no: 0, name: "UNKNOWN" },
  { no: 1, name: "GIVE_FIRST_KIN" },
  { no: 2, name: "GET_FIRST_KIN" }
]);
class Tr extends S {
  constructor(t) {
    super(), this.request = { case: void 0 }, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Tr().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Tr().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Tr().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Tr, t, e);
  }
}
Tr.runtime = f;
Tr.typeName = "code.transaction.v2.SubmitIntentRequest";
Tr.fields = f.util.newFieldList(() => [
  { no: 1, name: "submit_actions", kind: "message", T: Nr, oneof: "request" },
  { no: 2, name: "submit_signatures", kind: "message", T: Er, oneof: "request" }
]);
class Nr extends S {
  constructor(t) {
    super(), this.actions = [], f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Nr().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Nr().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Nr().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Nr, t, e);
  }
}
Nr.runtime = f;
Nr.typeName = "code.transaction.v2.SubmitIntentRequest.SubmitActions";
Nr.fields = f.util.newFieldList(() => [
  { no: 1, name: "id", kind: "message", T: ee },
  { no: 2, name: "owner", kind: "message", T: j },
  { no: 3, name: "metadata", kind: "message", T: tn },
  { no: 4, name: "actions", kind: "message", T: ei, repeated: !0 },
  { no: 5, name: "signature", kind: "message", T: wt },
  { no: 6, name: "device_token", kind: "message", T: Sn }
]);
class Er extends S {
  constructor(t) {
    super(), this.signatures = [], f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Er().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Er().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Er().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Er, t, e);
  }
}
Er.runtime = f;
Er.typeName = "code.transaction.v2.SubmitIntentRequest.SubmitSignatures";
Er.fields = f.util.newFieldList(() => [
  { no: 1, name: "signatures", kind: "message", T: wt, repeated: !0 }
]);
class br extends S {
  constructor(t) {
    super(), this.response = { case: void 0 }, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new br().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new br().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new br().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(br, t, e);
  }
}
br.runtime = f;
br.typeName = "code.transaction.v2.SubmitIntentResponse";
br.fields = f.util.newFieldList(() => [
  { no: 1, name: "server_parameters", kind: "message", T: kr, oneof: "response" },
  { no: 2, name: "success", kind: "message", T: Br, oneof: "response" },
  { no: 3, name: "error", kind: "message", T: Sr, oneof: "response" }
]);
class kr extends S {
  constructor(t) {
    super(), this.serverParameters = [], f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new kr().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new kr().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new kr().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(kr, t, e);
  }
}
kr.runtime = f;
kr.typeName = "code.transaction.v2.SubmitIntentResponse.ServerParameters";
kr.fields = f.util.newFieldList(() => [
  { no: 1, name: "server_parameters", kind: "message", T: fi, repeated: !0 }
]);
class Br extends S {
  constructor(t) {
    super(), this.code = _l.OK, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Br().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Br().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Br().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Br, t, e);
  }
}
Br.runtime = f;
Br.typeName = "code.transaction.v2.SubmitIntentResponse.Success";
Br.fields = f.util.newFieldList(() => [
  { no: 1, name: "code", kind: "enum", T: f.getEnumType(_l) }
]);
var _l;
(function(n) {
  n[n.OK = 0] = "OK";
})(_l || (_l = {}));
f.util.setEnumType(_l, "code.transaction.v2.SubmitIntentResponse.Success.Code", [
  { no: 0, name: "OK" }
]);
class Sr extends S {
  constructor(t) {
    super(), this.code = Hl.DENIED, this.errorDetails = [], f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Sr().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Sr().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Sr().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Sr, t, e);
  }
}
Sr.runtime = f;
Sr.typeName = "code.transaction.v2.SubmitIntentResponse.Error";
Sr.fields = f.util.newFieldList(() => [
  { no: 1, name: "code", kind: "enum", T: f.getEnumType(Hl) },
  { no: 2, name: "error_details", kind: "message", T: On, repeated: !0 }
]);
var Hl;
(function(n) {
  n[n.DENIED = 0] = "DENIED", n[n.INVALID_INTENT = 1] = "INVALID_INTENT", n[n.SIGNATURE_ERROR = 2] = "SIGNATURE_ERROR", n[n.STALE_STATE = 3] = "STALE_STATE";
})(Hl || (Hl = {}));
f.util.setEnumType(Hl, "code.transaction.v2.SubmitIntentResponse.Error.Code", [
  { no: 0, name: "DENIED" },
  { no: 1, name: "INVALID_INTENT" },
  { no: 2, name: "SIGNATURE_ERROR" },
  { no: 3, name: "STALE_STATE" }
]);
class Ir extends S {
  constructor(t) {
    super(), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Ir().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Ir().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Ir().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Ir, t, e);
  }
}
Ir.runtime = f;
Ir.typeName = "code.transaction.v2.GetIntentMetadataRequest";
Ir.fields = f.util.newFieldList(() => [
  { no: 1, name: "intent_id", kind: "message", T: ee },
  { no: 2, name: "owner", kind: "message", T: j },
  { no: 3, name: "signature", kind: "message", T: wt }
]);
class Or extends S {
  constructor(t) {
    super(), this.result = zl.OK, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Or().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Or().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Or().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Or, t, e);
  }
}
Or.runtime = f;
Or.typeName = "code.transaction.v2.GetIntentMetadataResponse";
Or.fields = f.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: f.getEnumType(zl) },
  { no: 2, name: "metadata", kind: "message", T: tn }
]);
var zl;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND";
})(zl || (zl = {}));
f.util.setEnumType(zl, "code.transaction.v2.GetIntentMetadataResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" }
]);
class vr extends S {
  constructor(t) {
    super(), this.actionId = 0, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new vr().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new vr().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new vr().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(vr, t, e);
  }
}
vr.runtime = f;
vr.typeName = "code.transaction.v2.GetPrivacyUpgradeStatusRequest";
vr.fields = f.util.newFieldList(() => [
  { no: 1, name: "intent_id", kind: "message", T: ee },
  { no: 2, name: "action_id", kind: "scalar", T: 13 }
]);
class Jr extends S {
  constructor(t) {
    super(), this.result = jl.OK, this.status = Wl.UNKNOWN, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Jr().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Jr().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Jr().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Jr, t, e);
  }
}
Jr.runtime = f;
Jr.typeName = "code.transaction.v2.GetPrivacyUpgradeStatusResponse";
Jr.fields = f.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: f.getEnumType(jl) },
  { no: 2, name: "status", kind: "enum", T: f.getEnumType(Wl) }
]);
var jl;
(function(n) {
  n[n.OK = 0] = "OK", n[n.INTENT_NOT_FOUND = 1] = "INTENT_NOT_FOUND", n[n.ACTION_NOT_FOUND = 2] = "ACTION_NOT_FOUND", n[n.INVALID_ACTION = 3] = "INVALID_ACTION";
})(jl || (jl = {}));
f.util.setEnumType(jl, "code.transaction.v2.GetPrivacyUpgradeStatusResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INTENT_NOT_FOUND" },
  { no: 2, name: "ACTION_NOT_FOUND" },
  { no: 3, name: "INVALID_ACTION" }
]);
var Wl;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.TEMPORARY_TRANSACTION_FINALIZED = 1] = "TEMPORARY_TRANSACTION_FINALIZED", n[n.WAITING_FOR_NEXT_BLOCK = 2] = "WAITING_FOR_NEXT_BLOCK", n[n.READY_FOR_UPGRADE = 3] = "READY_FOR_UPGRADE", n[n.ALREADY_UPGRADED = 4] = "ALREADY_UPGRADED";
})(Wl || (Wl = {}));
f.util.setEnumType(Wl, "code.transaction.v2.GetPrivacyUpgradeStatusResponse.Status", [
  { no: 0, name: "UNKNOWN" },
  { no: 1, name: "TEMPORARY_TRANSACTION_FINALIZED" },
  { no: 2, name: "WAITING_FOR_NEXT_BLOCK" },
  { no: 3, name: "READY_FOR_UPGRADE" },
  { no: 4, name: "ALREADY_UPGRADED" }
]);
class xr extends S {
  constructor(t) {
    super(), this.limit = 0, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new xr().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new xr().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new xr().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(xr, t, e);
  }
}
xr.runtime = f;
xr.typeName = "code.transaction.v2.GetPrioritizedIntentsForPrivacyUpgradeRequest";
xr.fields = f.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: j },
  { no: 2, name: "limit", kind: "scalar", T: 13 },
  { no: 3, name: "signature", kind: "message", T: wt }
]);
class Ar extends S {
  constructor(t) {
    super(), this.result = Gl.OK, this.items = [], f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Ar().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Ar().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Ar().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Ar, t, e);
  }
}
Ar.runtime = f;
Ar.typeName = "code.transaction.v2.GetPrioritizedIntentsForPrivacyUpgradeResponse";
Ar.fields = f.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: f.getEnumType(Gl) },
  { no: 2, name: "items", kind: "message", T: Bi, repeated: !0 }
]);
var Gl;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND";
})(Gl || (Gl = {}));
f.util.setEnumType(Gl, "code.transaction.v2.GetPrioritizedIntentsForPrivacyUpgradeResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" }
]);
class Ur extends S {
  constructor(t) {
    super(), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Ur().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Ur().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Ur().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Ur, t, e);
  }
}
Ur.runtime = f;
Ur.typeName = "code.transaction.v2.GetLimitsRequest";
Ur.fields = f.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: j },
  { no: 2, name: "signature", kind: "message", T: wt },
  { no: 3, name: "consumed_since", kind: "message", T: Wt }
]);
class Lr extends S {
  constructor(t) {
    super(), this.result = Xl.OK, this.remainingSendLimitsByCurrency = {}, this.microPaymentLimitsByCurrency = {}, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Lr().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Lr().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Lr().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Lr, t, e);
  }
}
Lr.runtime = f;
Lr.typeName = "code.transaction.v2.GetLimitsResponse";
Lr.fields = f.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: f.getEnumType(Xl) },
  { no: 2, name: "remaining_send_limits_by_currency", kind: "map", K: 9, V: { kind: "message", T: Oi } },
  { no: 3, name: "deposit_limit", kind: "message", T: vi },
  { no: 4, name: "micro_payment_limits_by_currency", kind: "map", K: 9, V: { kind: "message", T: Ji } }
]);
var Xl;
(function(n) {
  n[n.OK = 0] = "OK";
})(Xl || (Xl = {}));
f.util.setEnumType(Xl, "code.transaction.v2.GetLimitsResponse.Result", [
  { no: 0, name: "OK" }
]);
class Fr extends S {
  constructor(t) {
    super(), this.pageSize = 0, this.direction = Yl.ASC, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Fr().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Fr().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Fr().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Fr, t, e);
  }
}
Fr.runtime = f;
Fr.typeName = "code.transaction.v2.GetPaymentHistoryRequest";
Fr.fields = f.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: j },
  { no: 2, name: "cursor", kind: "message", T: td },
  { no: 3, name: "page_size", kind: "scalar", T: 13 },
  { no: 4, name: "direction", kind: "enum", T: f.getEnumType(Yl) },
  { no: 5, name: "signature", kind: "message", T: wt }
]);
var Yl;
(function(n) {
  n[n.ASC = 0] = "ASC", n[n.DESC = 1] = "DESC";
})(Yl || (Yl = {}));
f.util.setEnumType(Yl, "code.transaction.v2.GetPaymentHistoryRequest.Direction", [
  { no: 0, name: "ASC" },
  { no: 1, name: "DESC" }
]);
class qr extends S {
  constructor(t) {
    super(), this.result = Zl.OK, this.items = [], f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new qr().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new qr().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new qr().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(qr, t, e);
  }
}
qr.runtime = f;
qr.typeName = "code.transaction.v2.GetPaymentHistoryResponse";
qr.fields = f.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: f.getEnumType(Zl) },
  { no: 2, name: "items", kind: "message", T: Ii, repeated: !0 }
]);
var Zl;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND";
})(Zl || (Zl = {}));
f.util.setEnumType(Zl, "code.transaction.v2.GetPaymentHistoryResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" }
]);
class Dr extends S {
  constructor(t) {
    super(), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Dr().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Dr().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Dr().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Dr, t, e);
  }
}
Dr.runtime = f;
Dr.typeName = "code.transaction.v2.CanWithdrawToAccountRequest";
Dr.fields = f.util.newFieldList(() => [
  { no: 1, name: "account", kind: "message", T: j }
]);
class Pr extends S {
  constructor(t) {
    super(), this.accountType = Ql.Unknown, this.isValidPaymentDestination = !1, this.requiresInitialization = !1, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Pr().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Pr().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Pr().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Pr, t, e);
  }
}
Pr.runtime = f;
Pr.typeName = "code.transaction.v2.CanWithdrawToAccountResponse";
Pr.fields = f.util.newFieldList(() => [
  { no: 2, name: "account_type", kind: "enum", T: f.getEnumType(Ql) },
  { no: 1, name: "is_valid_payment_destination", kind: "scalar", T: 8 },
  { no: 3, name: "requires_initialization", kind: "scalar", T: 8 }
]);
var Ql;
(function(n) {
  n[n.Unknown = 0] = "Unknown", n[n.TokenAccount = 1] = "TokenAccount", n[n.OwnerAccount = 2] = "OwnerAccount";
})(Ql || (Ql = {}));
f.util.setEnumType(Ql, "code.transaction.v2.CanWithdrawToAccountResponse.AccountType", [
  { no: 0, name: "Unknown" },
  { no: 1, name: "TokenAccount" },
  { no: 2, name: "OwnerAccount" }
]);
class Cr extends S {
  constructor(t) {
    super(), this.airdropType = ur.UNKNOWN, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Cr().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Cr().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Cr().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Cr, t, e);
  }
}
Cr.runtime = f;
Cr.typeName = "code.transaction.v2.AirdropRequest";
Cr.fields = f.util.newFieldList(() => [
  { no: 1, name: "airdrop_type", kind: "enum", T: f.getEnumType(ur) },
  { no: 2, name: "owner", kind: "message", T: j },
  { no: 3, name: "signature", kind: "message", T: wt }
]);
class Kr extends S {
  constructor(t) {
    super(), this.result = tf.OK, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Kr().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Kr().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Kr().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Kr, t, e);
  }
}
Kr.runtime = f;
Kr.typeName = "code.transaction.v2.AirdropResponse";
Kr.fields = f.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: f.getEnumType(tf) },
  { no: 2, name: "exchange_data", kind: "message", T: oe }
]);
var tf;
(function(n) {
  n[n.OK = 0] = "OK", n[n.UNAVAILABLE = 1] = "UNAVAILABLE", n[n.ALREADY_CLAIMED = 2] = "ALREADY_CLAIMED";
})(tf || (tf = {}));
f.util.setEnumType(tf, "code.transaction.v2.AirdropResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "UNAVAILABLE" },
  { no: 2, name: "ALREADY_CLAIMED" }
]);
class Rr extends S {
  constructor(t) {
    super(), this.request = { case: void 0 }, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Rr().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Rr().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Rr().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Rr, t, e);
  }
}
Rr.runtime = f;
Rr.typeName = "code.transaction.v2.SwapRequest";
Rr.fields = f.util.newFieldList(() => [
  { no: 1, name: "initiate", kind: "message", T: Mr, oneof: "request" },
  { no: 2, name: "submit_signature", kind: "message", T: $r, oneof: "request" }
]);
class Mr extends S {
  constructor(t) {
    super(), this.limit = St.zero, this.waitForBlockchainStatus = !1, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Mr().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Mr().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Mr().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Mr, t, e);
  }
}
Mr.runtime = f;
Mr.typeName = "code.transaction.v2.SwapRequest.Initiate";
Mr.fields = f.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: j },
  { no: 2, name: "swap_authority", kind: "message", T: j },
  { no: 3, name: "limit", kind: "scalar", T: 4 },
  { no: 4, name: "wait_for_blockchain_status", kind: "scalar", T: 8 },
  { no: 5, name: "signature", kind: "message", T: wt }
]);
class $r extends S {
  constructor(t) {
    super(), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new $r().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new $r().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new $r().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals($r, t, e);
  }
}
$r.runtime = f;
$r.typeName = "code.transaction.v2.SwapRequest.SubmitSignature";
$r.fields = f.util.newFieldList(() => [
  { no: 1, name: "signature", kind: "message", T: wt }
]);
class Vr extends S {
  constructor(t) {
    super(), this.response = { case: void 0 }, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Vr().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Vr().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Vr().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Vr, t, e);
  }
}
Vr.runtime = f;
Vr.typeName = "code.transaction.v2.SwapResponse";
Vr.fields = f.util.newFieldList(() => [
  { no: 1, name: "server_paramenters", kind: "message", T: _r, oneof: "response" },
  { no: 2, name: "success", kind: "message", T: Hr, oneof: "response" },
  { no: 3, name: "error", kind: "message", T: zr, oneof: "response" }
]);
class _r extends S {
  constructor(t) {
    super(), this.computeUnitLimit = St.zero, this.computeUnitPrice = St.zero, this.swapIxnAccounts = [], this.swapIxnData = new Uint8Array(0), this.maxToSend = St.zero, this.minToReceive = St.zero, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new _r().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new _r().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new _r().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(_r, t, e);
  }
}
_r.runtime = f;
_r.typeName = "code.transaction.v2.SwapResponse.ServerParameters";
_r.fields = f.util.newFieldList(() => [
  { no: 1, name: "payer", kind: "message", T: j },
  { no: 2, name: "recent_blockhash", kind: "message", T: Bn },
  { no: 3, name: "compute_unit_limit", kind: "scalar", T: 4 },
  { no: 4, name: "compute_unit_price", kind: "scalar", T: 4 },
  { no: 5, name: "swap_program", kind: "message", T: j },
  { no: 6, name: "swap_ixn_accounts", kind: "message", T: wr, repeated: !0 },
  { no: 7, name: "swap_ixn_data", kind: "scalar", T: 12 },
  { no: 8, name: "max_to_send", kind: "scalar", T: 4 },
  { no: 9, name: "min_to_receive", kind: "scalar", T: 4 },
  { no: 10, name: "nonce", kind: "message", T: j }
]);
class Hr extends S {
  constructor(t) {
    super(), this.code = ef.SWAP_SUBMITTED, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Hr().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Hr().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Hr().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Hr, t, e);
  }
}
Hr.runtime = f;
Hr.typeName = "code.transaction.v2.SwapResponse.Success";
Hr.fields = f.util.newFieldList(() => [
  { no: 1, name: "code", kind: "enum", T: f.getEnumType(ef) }
]);
var ef;
(function(n) {
  n[n.SWAP_SUBMITTED = 0] = "SWAP_SUBMITTED", n[n.SWAP_FINALIZED = 1] = "SWAP_FINALIZED";
})(ef || (ef = {}));
f.util.setEnumType(ef, "code.transaction.v2.SwapResponse.Success.Code", [
  { no: 0, name: "SWAP_SUBMITTED" },
  { no: 1, name: "SWAP_FINALIZED" }
]);
class zr extends S {
  constructor(t) {
    super(), this.code = nf.DENIED, this.errorDetails = [], f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new zr().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new zr().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new zr().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(zr, t, e);
  }
}
zr.runtime = f;
zr.typeName = "code.transaction.v2.SwapResponse.Error";
zr.fields = f.util.newFieldList(() => [
  { no: 1, name: "code", kind: "enum", T: f.getEnumType(nf) },
  { no: 2, name: "error_details", kind: "message", T: On, repeated: !0 }
]);
var nf;
(function(n) {
  n[n.DENIED = 0] = "DENIED", n[n.SIGNATURE_ERROR = 2] = "SIGNATURE_ERROR", n[n.INVALID_SWAP_AMOUNT = 3] = "INVALID_SWAP_AMOUNT", n[n.SWAP_FAILED = 4] = "SWAP_FAILED";
})(nf || (nf = {}));
f.util.setEnumType(nf, "code.transaction.v2.SwapResponse.Error.Code", [
  { no: 0, name: "DENIED" },
  { no: 2, name: "SIGNATURE_ERROR" },
  { no: 3, name: "INVALID_SWAP_AMOUNT" },
  { no: 4, name: "SWAP_FAILED" }
]);
class tn extends S {
  constructor(t) {
    super(), this.type = { case: void 0 }, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new tn().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new tn().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new tn().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(tn, t, e);
  }
}
tn.runtime = f;
tn.typeName = "code.transaction.v2.Metadata";
tn.fields = f.util.newFieldList(() => [
  { no: 1, name: "open_accounts", kind: "message", T: jr, oneof: "type" },
  { no: 2, name: "send_private_payment", kind: "message", T: Wr, oneof: "type" },
  { no: 3, name: "receive_payments_privately", kind: "message", T: Xr, oneof: "type" },
  { no: 4, name: "upgrade_privacy", kind: "message", T: Zr, oneof: "type" },
  { no: 5, name: "migrate_to_privacy_2022", kind: "message", T: Qr, oneof: "type" },
  { no: 6, name: "send_public_payment", kind: "message", T: Gr, oneof: "type" },
  { no: 7, name: "receive_payments_publicly", kind: "message", T: Yr, oneof: "type" },
  { no: 8, name: "establish_relationship", kind: "message", T: ti, oneof: "type" }
]);
class jr extends S {
  constructor(t) {
    super(), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new jr().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new jr().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new jr().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(jr, t, e);
  }
}
jr.runtime = f;
jr.typeName = "code.transaction.v2.OpenAccountsMetadata";
jr.fields = f.util.newFieldList(() => []);
class Wr extends S {
  constructor(t) {
    super(), this.isWithdrawal = !1, this.isRemoteSend = !1, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Wr().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Wr().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Wr().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Wr, t, e);
  }
}
Wr.runtime = f;
Wr.typeName = "code.transaction.v2.SendPrivatePaymentMetadata";
Wr.fields = f.util.newFieldList(() => [
  { no: 1, name: "destination", kind: "message", T: j },
  { no: 2, name: "exchange_data", kind: "message", T: oe },
  { no: 3, name: "is_withdrawal", kind: "scalar", T: 8 },
  { no: 4, name: "is_remote_send", kind: "scalar", T: 8 }
]);
class Gr extends S {
  constructor(t) {
    super(), this.isWithdrawal = !1, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Gr().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Gr().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Gr().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Gr, t, e);
  }
}
Gr.runtime = f;
Gr.typeName = "code.transaction.v2.SendPublicPaymentMetadata";
Gr.fields = f.util.newFieldList(() => [
  { no: 4, name: "source", kind: "message", T: j },
  { no: 1, name: "destination", kind: "message", T: j },
  { no: 2, name: "exchange_data", kind: "message", T: oe },
  { no: 3, name: "is_withdrawal", kind: "scalar", T: 8 }
]);
class Xr extends S {
  constructor(t) {
    super(), this.quarks = St.zero, this.isDeposit = !1, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Xr().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Xr().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Xr().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Xr, t, e);
  }
}
Xr.runtime = f;
Xr.typeName = "code.transaction.v2.ReceivePaymentsPrivatelyMetadata";
Xr.fields = f.util.newFieldList(() => [
  { no: 1, name: "source", kind: "message", T: j },
  { no: 2, name: "quarks", kind: "scalar", T: 4 },
  { no: 3, name: "is_deposit", kind: "scalar", T: 8 }
]);
class Yr extends S {
  constructor(t) {
    super(), this.quarks = St.zero, this.isRemoteSend = !1, this.isIssuerVoidingGiftCard = !1, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Yr().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Yr().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Yr().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Yr, t, e);
  }
}
Yr.runtime = f;
Yr.typeName = "code.transaction.v2.ReceivePaymentsPubliclyMetadata";
Yr.fields = f.util.newFieldList(() => [
  { no: 1, name: "source", kind: "message", T: j },
  { no: 2, name: "quarks", kind: "scalar", T: 4 },
  { no: 3, name: "is_remote_send", kind: "scalar", T: 8 },
  { no: 4, name: "is_issuer_voiding_gift_card", kind: "scalar", T: 8 },
  { no: 5, name: "exchange_data", kind: "message", T: oe }
]);
class Zr extends S {
  constructor(t) {
    super(), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Zr().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Zr().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Zr().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Zr, t, e);
  }
}
Zr.runtime = f;
Zr.typeName = "code.transaction.v2.UpgradePrivacyMetadata";
Zr.fields = f.util.newFieldList(() => []);
class Qr extends S {
  constructor(t) {
    super(), this.quarks = St.zero, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Qr().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Qr().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Qr().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Qr, t, e);
  }
}
Qr.runtime = f;
Qr.typeName = "code.transaction.v2.MigrateToPrivacy2022Metadata";
Qr.fields = f.util.newFieldList(() => [
  { no: 1, name: "quarks", kind: "scalar", T: 4 }
]);
class ti extends S {
  constructor(t) {
    super(), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new ti().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new ti().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new ti().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(ti, t, e);
  }
}
ti.runtime = f;
ti.typeName = "code.transaction.v2.EstablishRelationshipMetadata";
ti.fields = f.util.newFieldList(() => [
  { no: 1, name: "relationship", kind: "message", T: In }
]);
class ei extends S {
  constructor(t) {
    super(), this.id = 0, this.type = { case: void 0 }, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new ei().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new ei().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new ei().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(ei, t, e);
  }
}
ei.runtime = f;
ei.typeName = "code.transaction.v2.Action";
ei.fields = f.util.newFieldList(() => [
  { no: 1, name: "id", kind: "scalar", T: 13 },
  { no: 2, name: "open_account", kind: "message", T: ni, oneof: "type" },
  { no: 3, name: "close_empty_account", kind: "message", T: ri, oneof: "type" },
  { no: 4, name: "close_dormant_account", kind: "message", T: ii, oneof: "type" },
  { no: 5, name: "no_privacy_transfer", kind: "message", T: si, oneof: "type" },
  { no: 6, name: "no_privacy_withdraw", kind: "message", T: oi, oneof: "type" },
  { no: 7, name: "temporary_privacy_transfer", kind: "message", T: ai, oneof: "type" },
  { no: 8, name: "temporary_privacy_exchange", kind: "message", T: ui, oneof: "type" },
  { no: 9, name: "permanent_privacy_upgrade", kind: "message", T: ci, oneof: "type" },
  { no: 10, name: "fee_payment", kind: "message", T: li, oneof: "type" }
]);
class ni extends S {
  constructor(t) {
    super(), this.accountType = Pe.UNKNOWN, this.index = St.zero, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new ni().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new ni().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new ni().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(ni, t, e);
  }
}
ni.runtime = f;
ni.typeName = "code.transaction.v2.OpenAccountAction";
ni.fields = f.util.newFieldList(() => [
  { no: 1, name: "account_type", kind: "enum", T: f.getEnumType(Pe) },
  { no: 2, name: "owner", kind: "message", T: j },
  { no: 3, name: "index", kind: "scalar", T: 4 },
  { no: 4, name: "authority", kind: "message", T: j },
  { no: 5, name: "token", kind: "message", T: j },
  { no: 6, name: "authority_signature", kind: "message", T: wt }
]);
class ri extends S {
  constructor(t) {
    super(), this.accountType = Pe.UNKNOWN, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new ri().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new ri().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new ri().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(ri, t, e);
  }
}
ri.runtime = f;
ri.typeName = "code.transaction.v2.CloseEmptyAccountAction";
ri.fields = f.util.newFieldList(() => [
  { no: 1, name: "account_type", kind: "enum", T: f.getEnumType(Pe) },
  { no: 2, name: "authority", kind: "message", T: j },
  { no: 3, name: "token", kind: "message", T: j }
]);
class ii extends S {
  constructor(t) {
    super(), this.accountType = Pe.UNKNOWN, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new ii().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new ii().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new ii().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(ii, t, e);
  }
}
ii.runtime = f;
ii.typeName = "code.transaction.v2.CloseDormantAccountAction";
ii.fields = f.util.newFieldList(() => [
  { no: 1, name: "account_type", kind: "enum", T: f.getEnumType(Pe) },
  { no: 2, name: "authority", kind: "message", T: j },
  { no: 3, name: "token", kind: "message", T: j },
  { no: 4, name: "destination", kind: "message", T: j }
]);
class si extends S {
  constructor(t) {
    super(), this.amount = St.zero, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new si().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new si().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new si().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(si, t, e);
  }
}
si.runtime = f;
si.typeName = "code.transaction.v2.NoPrivacyTransferAction";
si.fields = f.util.newFieldList(() => [
  { no: 1, name: "authority", kind: "message", T: j },
  { no: 2, name: "source", kind: "message", T: j },
  { no: 3, name: "destination", kind: "message", T: j },
  { no: 4, name: "amount", kind: "scalar", T: 4 }
]);
class oi extends S {
  constructor(t) {
    super(), this.amount = St.zero, this.shouldClose = !1, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new oi().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new oi().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new oi().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(oi, t, e);
  }
}
oi.runtime = f;
oi.typeName = "code.transaction.v2.NoPrivacyWithdrawAction";
oi.fields = f.util.newFieldList(() => [
  { no: 1, name: "authority", kind: "message", T: j },
  { no: 2, name: "source", kind: "message", T: j },
  { no: 3, name: "destination", kind: "message", T: j },
  { no: 4, name: "amount", kind: "scalar", T: 4 },
  { no: 5, name: "should_close", kind: "scalar", T: 8 }
]);
class ai extends S {
  constructor(t) {
    super(), this.amount = St.zero, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new ai().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new ai().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new ai().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(ai, t, e);
  }
}
ai.runtime = f;
ai.typeName = "code.transaction.v2.TemporaryPrivacyTransferAction";
ai.fields = f.util.newFieldList(() => [
  { no: 1, name: "authority", kind: "message", T: j },
  { no: 2, name: "source", kind: "message", T: j },
  { no: 3, name: "destination", kind: "message", T: j },
  { no: 4, name: "amount", kind: "scalar", T: 4 }
]);
class ui extends S {
  constructor(t) {
    super(), this.amount = St.zero, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new ui().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new ui().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new ui().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(ui, t, e);
  }
}
ui.runtime = f;
ui.typeName = "code.transaction.v2.TemporaryPrivacyExchangeAction";
ui.fields = f.util.newFieldList(() => [
  { no: 1, name: "authority", kind: "message", T: j },
  { no: 2, name: "source", kind: "message", T: j },
  { no: 3, name: "destination", kind: "message", T: j },
  { no: 4, name: "amount", kind: "scalar", T: 4 }
]);
class ci extends S {
  constructor(t) {
    super(), this.actionId = 0, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new ci().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new ci().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new ci().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(ci, t, e);
  }
}
ci.runtime = f;
ci.typeName = "code.transaction.v2.PermanentPrivacyUpgradeAction";
ci.fields = f.util.newFieldList(() => [
  { no: 1, name: "action_id", kind: "scalar", T: 13 }
]);
class li extends S {
  constructor(t) {
    super(), this.amount = St.zero, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new li().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new li().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new li().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(li, t, e);
  }
}
li.runtime = f;
li.typeName = "code.transaction.v2.FeePaymentAction";
li.fields = f.util.newFieldList(() => [
  { no: 1, name: "authority", kind: "message", T: j },
  { no: 2, name: "source", kind: "message", T: j },
  { no: 3, name: "amount", kind: "scalar", T: 4 }
]);
class fi extends S {
  constructor(t) {
    super(), this.actionId = 0, this.nonces = [], this.type = { case: void 0 }, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new fi().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new fi().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new fi().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(fi, t, e);
  }
}
fi.runtime = f;
fi.typeName = "code.transaction.v2.ServerParameter";
fi.fields = f.util.newFieldList(() => [
  { no: 1, name: "action_id", kind: "scalar", T: 13 },
  { no: 2, name: "nonces", kind: "message", T: mi, repeated: !0 },
  { no: 3, name: "open_account", kind: "message", T: di, oneof: "type" },
  { no: 4, name: "close_empty_account", kind: "message", T: hi, oneof: "type" },
  { no: 5, name: "close_dormant_account", kind: "message", T: pi, oneof: "type" },
  { no: 6, name: "no_privacy_transfer", kind: "message", T: gi, oneof: "type" },
  { no: 7, name: "no_privacy_withdraw", kind: "message", T: yi, oneof: "type" },
  { no: 8, name: "temporary_privacy_transfer", kind: "message", T: wi, oneof: "type" },
  { no: 9, name: "temporary_privacy_exchange", kind: "message", T: Ti, oneof: "type" },
  { no: 10, name: "permanent_privacy_upgrade", kind: "message", T: Ni, oneof: "type" },
  { no: 11, name: "fee_payment", kind: "message", T: Ei, oneof: "type" }
]);
class mi extends S {
  constructor(t) {
    super(), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new mi().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new mi().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new mi().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(mi, t, e);
  }
}
mi.runtime = f;
mi.typeName = "code.transaction.v2.NoncedTransactionMetadata";
mi.fields = f.util.newFieldList(() => [
  { no: 1, name: "nonce", kind: "message", T: j },
  { no: 2, name: "blockhash", kind: "message", T: Bn }
]);
class di extends S {
  constructor(t) {
    super(), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new di().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new di().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new di().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(di, t, e);
  }
}
di.runtime = f;
di.typeName = "code.transaction.v2.OpenAccountServerParameter";
di.fields = f.util.newFieldList(() => []);
class hi extends S {
  constructor(t) {
    super(), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new hi().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new hi().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new hi().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(hi, t, e);
  }
}
hi.runtime = f;
hi.typeName = "code.transaction.v2.CloseEmptyAccountServerParameter";
hi.fields = f.util.newFieldList(() => []);
class pi extends S {
  constructor(t) {
    super(), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new pi().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new pi().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new pi().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(pi, t, e);
  }
}
pi.runtime = f;
pi.typeName = "code.transaction.v2.CloseDormantAccountServerParameter";
pi.fields = f.util.newFieldList(() => []);
class gi extends S {
  constructor(t) {
    super(), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new gi().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new gi().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new gi().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(gi, t, e);
  }
}
gi.runtime = f;
gi.typeName = "code.transaction.v2.NoPrivacyTransferServerParameter";
gi.fields = f.util.newFieldList(() => []);
class yi extends S {
  constructor(t) {
    super(), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new yi().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new yi().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new yi().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(yi, t, e);
  }
}
yi.runtime = f;
yi.typeName = "code.transaction.v2.NoPrivacyWithdrawServerParameter";
yi.fields = f.util.newFieldList(() => []);
class wi extends S {
  constructor(t) {
    super(), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new wi().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new wi().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new wi().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(wi, t, e);
  }
}
wi.runtime = f;
wi.typeName = "code.transaction.v2.TemporaryPrivacyTransferServerParameter";
wi.fields = f.util.newFieldList(() => [
  { no: 1, name: "treasury", kind: "message", T: j },
  { no: 2, name: "recent_root", kind: "message", T: Da }
]);
class Ti extends S {
  constructor(t) {
    super(), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Ti().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Ti().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Ti().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Ti, t, e);
  }
}
Ti.runtime = f;
Ti.typeName = "code.transaction.v2.TemporaryPrivacyExchangeServerParameter";
Ti.fields = f.util.newFieldList(() => [
  { no: 1, name: "treasury", kind: "message", T: j },
  { no: 2, name: "recent_root", kind: "message", T: Da }
]);
class Ni extends S {
  constructor(t) {
    super(), this.newCommitmentAmount = St.zero, this.merkleProof = [], f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Ni().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Ni().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Ni().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Ni, t, e);
  }
}
Ni.runtime = f;
Ni.typeName = "code.transaction.v2.PermanentPrivacyUpgradeServerParameter";
Ni.fields = f.util.newFieldList(() => [
  { no: 1, name: "new_commitment", kind: "message", T: j },
  { no: 2, name: "new_commitment_transcript", kind: "message", T: Da },
  { no: 3, name: "new_commitment_destination", kind: "message", T: j },
  { no: 4, name: "new_commitment_amount", kind: "scalar", T: 4 },
  { no: 5, name: "merkle_root", kind: "message", T: Da },
  { no: 6, name: "merkle_proof", kind: "message", T: Da, repeated: !0 }
]);
class Ei extends S {
  constructor(t) {
    super(), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Ei().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Ei().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Ei().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Ei, t, e);
  }
}
Ei.runtime = f;
Ei.typeName = "code.transaction.v2.FeePaymentServerParameter";
Ei.fields = f.util.newFieldList(() => [
  { no: 1, name: "destination", kind: "message", T: j }
]);
class On extends S {
  constructor(t) {
    super(), this.type = { case: void 0 }, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new On().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new On().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new On().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(On, t, e);
  }
}
On.runtime = f;
On.typeName = "code.transaction.v2.ErrorDetails";
On.fields = f.util.newFieldList(() => [
  { no: 1, name: "reason_string", kind: "message", T: bi, oneof: "type" },
  { no: 2, name: "invalid_signature", kind: "message", T: ki, oneof: "type" }
]);
class bi extends S {
  constructor(t) {
    super(), this.reason = "", f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new bi().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new bi().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new bi().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(bi, t, e);
  }
}
bi.runtime = f;
bi.typeName = "code.transaction.v2.ReasonStringErrorDetails";
bi.fields = f.util.newFieldList(() => [
  { no: 1, name: "reason", kind: "scalar", T: 9 }
]);
class ki extends S {
  constructor(t) {
    super(), this.actionId = 0, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new ki().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new ki().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new ki().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(ki, t, e);
  }
}
ki.runtime = f;
ki.typeName = "code.transaction.v2.InvalidSignatureErrorDetails";
ki.fields = f.util.newFieldList(() => [
  { no: 1, name: "action_id", kind: "scalar", T: 13 },
  { no: 2, name: "expected_transaction", kind: "message", T: kn },
  { no: 3, name: "provided_signature", kind: "message", T: wt }
]);
class Bi extends S {
  constructor(t) {
    super(), this.actions = [], f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Bi().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Bi().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Bi().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Bi, t, e);
  }
}
Bi.runtime = f;
Bi.typeName = "code.transaction.v2.UpgradeableIntent";
Bi.fields = f.util.newFieldList(() => [
  { no: 1, name: "id", kind: "message", T: ee },
  { no: 2, name: "actions", kind: "message", T: Si, repeated: !0 }
]);
class Si extends S {
  constructor(t) {
    super(), this.actionId = 0, this.sourceAccountType = Pe.UNKNOWN, this.sourceDerivationIndex = St.zero, this.originalAmount = St.zero, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Si().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Si().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Si().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Si, t, e);
  }
}
Si.runtime = f;
Si.typeName = "code.transaction.v2.UpgradeableIntent.UpgradeablePrivateAction";
Si.fields = f.util.newFieldList(() => [
  { no: 1, name: "transaction_blob", kind: "message", T: kn },
  { no: 2, name: "client_signature", kind: "message", T: wt },
  { no: 3, name: "action_id", kind: "scalar", T: 13 },
  { no: 4, name: "source_account_type", kind: "enum", T: f.getEnumType(Pe) },
  { no: 5, name: "source_derivation_index", kind: "scalar", T: 4 },
  { no: 6, name: "original_destination", kind: "message", T: j },
  { no: 7, name: "original_amount", kind: "scalar", T: 4 },
  { no: 8, name: "treasury", kind: "message", T: j },
  { no: 9, name: "recent_root", kind: "message", T: Da }
]);
class Ii extends S {
  constructor(t) {
    super(), this.paymentType = rf.UNKNOWN, this.isWithdraw = !1, this.isDeposit = !1, this.isRemoteSend = !1, this.isReturned = !1, this.isAirdrop = !1, this.airdropType = ur.UNKNOWN, this.isMicroPayment = !1, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Ii().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Ii().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Ii().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Ii, t, e);
  }
}
Ii.runtime = f;
Ii.typeName = "code.transaction.v2.PaymentHistoryItem";
Ii.fields = f.util.newFieldList(() => [
  { no: 1, name: "cursor", kind: "message", T: td },
  { no: 2, name: "exchange_data", kind: "message", T: oe },
  { no: 3, name: "payment_type", kind: "enum", T: f.getEnumType(rf) },
  { no: 4, name: "is_withdraw", kind: "scalar", T: 8 },
  { no: 5, name: "is_deposit", kind: "scalar", T: 8 },
  { no: 6, name: "timestamp", kind: "message", T: Wt },
  { no: 7, name: "is_remote_send", kind: "scalar", T: 8 },
  { no: 8, name: "is_returned", kind: "scalar", T: 8 },
  { no: 9, name: "is_airdrop", kind: "scalar", T: 8 },
  { no: 10, name: "airdrop_type", kind: "enum", T: f.getEnumType(ur) },
  { no: 11, name: "is_micro_payment", kind: "scalar", T: 8 },
  { no: 12, name: "intent_id", kind: "message", T: ee }
]);
var rf;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.SEND = 1] = "SEND", n[n.RECEIVE = 2] = "RECEIVE";
})(rf || (rf = {}));
f.util.setEnumType(rf, "code.transaction.v2.PaymentHistoryItem.PaymentType", [
  { no: 0, name: "UNKNOWN" },
  { no: 1, name: "SEND" },
  { no: 2, name: "RECEIVE" }
]);
class oe extends S {
  constructor(t) {
    super(), this.currency = "", this.exchangeRate = 0, this.nativeAmount = 0, this.quarks = St.zero, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new oe().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new oe().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new oe().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(oe, t, e);
  }
}
oe.runtime = f;
oe.typeName = "code.transaction.v2.ExchangeData";
oe.fields = f.util.newFieldList(() => [
  { no: 1, name: "currency", kind: "scalar", T: 9 },
  { no: 2, name: "exchange_rate", kind: "scalar", T: 1 },
  { no: 3, name: "native_amount", kind: "scalar", T: 1 },
  { no: 4, name: "quarks", kind: "scalar", T: 4 }
]);
class en extends S {
  constructor(t) {
    super(), this.currency = "", this.nativeAmount = 0, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new en().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new en().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new en().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(en, t, e);
  }
}
en.runtime = f;
en.typeName = "code.transaction.v2.ExchangeDataWithoutRate";
en.fields = f.util.newFieldList(() => [
  { no: 1, name: "currency", kind: "scalar", T: 9 },
  { no: 2, name: "native_amount", kind: "scalar", T: 1 }
]);
class Oi extends S {
  constructor(t) {
    super(), this.nextTransaction = 0, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Oi().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Oi().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Oi().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Oi, t, e);
  }
}
Oi.runtime = f;
Oi.typeName = "code.transaction.v2.RemainingSendLimit";
Oi.fields = f.util.newFieldList(() => [
  { no: 1, name: "next_transaction", kind: "scalar", T: 2 }
]);
class vi extends S {
  constructor(t) {
    super(), this.maxQuarks = St.zero, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new vi().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new vi().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new vi().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(vi, t, e);
  }
}
vi.runtime = f;
vi.typeName = "code.transaction.v2.DepositLimit";
vi.fields = f.util.newFieldList(() => [
  { no: 1, name: "max_quarks", kind: "scalar", T: 4 }
]);
class Ji extends S {
  constructor(t) {
    super(), this.maxPerTransaction = 0, this.minPerTransaction = 0, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Ji().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Ji().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Ji().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Ji, t, e);
  }
}
Ji.runtime = f;
Ji.typeName = "code.transaction.v2.MicroPaymentLimit";
Ji.fields = f.util.newFieldList(() => [
  { no: 1, name: "max_per_transaction", kind: "scalar", T: 2 },
  { no: 2, name: "min_per_transaction", kind: "scalar", T: 2 }
]);
let td = class vl extends S {
  constructor(t) {
    super(), this.value = new Uint8Array(0), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new vl().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new vl().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new vl().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(vl, t, e);
  }
};
td.runtime = f;
td.typeName = "code.transaction.v2.Cursor";
td.fields = f.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class xi extends S {
  constructor(t) {
    super(), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new xi().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new xi().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new xi().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(xi, t, e);
  }
}
xi.runtime = f;
xi.typeName = "code.account.v1.IsCodeAccountRequest";
xi.fields = f.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: j },
  { no: 2, name: "signature", kind: "message", T: wt }
]);
class Ai extends S {
  constructor(t) {
    super(), this.result = sf.OK, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Ai().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Ai().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Ai().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Ai, t, e);
  }
}
Ai.runtime = f;
Ai.typeName = "code.account.v1.IsCodeAccountResponse";
Ai.fields = f.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: f.getEnumType(sf) }
]);
var sf;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND", n[n.UNLOCKED_TIMELOCK_ACCOUNT = 2] = "UNLOCKED_TIMELOCK_ACCOUNT";
})(sf || (sf = {}));
f.util.setEnumType(sf, "code.account.v1.IsCodeAccountResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" },
  { no: 2, name: "UNLOCKED_TIMELOCK_ACCOUNT" }
]);
class Ui extends S {
  constructor(t) {
    super(), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Ui().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Ui().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Ui().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Ui, t, e);
  }
}
Ui.runtime = f;
Ui.typeName = "code.account.v1.GetTokenAccountInfosRequest";
Ui.fields = f.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: j },
  { no: 2, name: "signature", kind: "message", T: wt }
]);
class Li extends S {
  constructor(t) {
    super(), this.result = of.OK, this.tokenAccountInfos = {}, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Li().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Li().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Li().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Li, t, e);
  }
}
Li.runtime = f;
Li.typeName = "code.account.v1.GetTokenAccountInfosResponse";
Li.fields = f.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: f.getEnumType(of) },
  { no: 2, name: "token_account_infos", kind: "map", K: 9, V: { kind: "message", T: Fi } }
]);
var of;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND";
})(of || (of = {}));
f.util.setEnumType(of, "code.account.v1.GetTokenAccountInfosResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" }
]);
class Fi extends S {
  constructor(t) {
    super(), this.accountType = Pe.UNKNOWN, this.index = St.zero, this.balanceSource = af.UNKNOWN, this.balance = St.zero, this.managementState = uf.UNKNOWN, this.blockchainState = cf.UNKNOWN, this.mustRotate = !1, this.claimState = lf.UNKNOWN, this.mintDecimals = 0, this.mintDisplayName = "", f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Fi().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Fi().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Fi().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Fi, t, e);
  }
}
Fi.runtime = f;
Fi.typeName = "code.account.v1.TokenAccountInfo";
Fi.fields = f.util.newFieldList(() => [
  { no: 1, name: "address", kind: "message", T: j },
  { no: 2, name: "owner", kind: "message", T: j },
  { no: 3, name: "authority", kind: "message", T: j },
  { no: 4, name: "account_type", kind: "enum", T: f.getEnumType(Pe) },
  { no: 5, name: "index", kind: "scalar", T: 4 },
  { no: 6, name: "balance_source", kind: "enum", T: f.getEnumType(af) },
  { no: 7, name: "balance", kind: "scalar", T: 4 },
  { no: 8, name: "management_state", kind: "enum", T: f.getEnumType(uf) },
  { no: 9, name: "blockchain_state", kind: "enum", T: f.getEnumType(cf) },
  { no: 10, name: "must_rotate", kind: "scalar", T: 8 },
  { no: 11, name: "claim_state", kind: "enum", T: f.getEnumType(lf) },
  { no: 12, name: "original_exchange_data", kind: "message", T: oe },
  { no: 13, name: "mint", kind: "message", T: j },
  { no: 14, name: "mint_decimals", kind: "scalar", T: 13 },
  { no: 15, name: "mint_display_name", kind: "scalar", T: 9 },
  { no: 16, name: "relationship", kind: "message", T: In }
]);
var af;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.BLOCKCHAIN = 1] = "BLOCKCHAIN", n[n.CACHE = 2] = "CACHE";
})(af || (af = {}));
f.util.setEnumType(af, "code.account.v1.TokenAccountInfo.BalanceSource", [
  { no: 0, name: "BALANCE_SOURCE_UNKNOWN" },
  { no: 1, name: "BALANCE_SOURCE_BLOCKCHAIN" },
  { no: 2, name: "BALANCE_SOURCE_CACHE" }
]);
var uf;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.NONE = 1] = "NONE", n[n.LOCKING = 2] = "LOCKING", n[n.LOCKED = 3] = "LOCKED", n[n.UNLOCKING = 4] = "UNLOCKING", n[n.UNLOCKED = 5] = "UNLOCKED", n[n.CLOSING = 6] = "CLOSING", n[n.CLOSED = 7] = "CLOSED";
})(uf || (uf = {}));
f.util.setEnumType(uf, "code.account.v1.TokenAccountInfo.ManagementState", [
  { no: 0, name: "MANAGEMENT_STATE_UNKNOWN" },
  { no: 1, name: "MANAGEMENT_STATE_NONE" },
  { no: 2, name: "MANAGEMENT_STATE_LOCKING" },
  { no: 3, name: "MANAGEMENT_STATE_LOCKED" },
  { no: 4, name: "MANAGEMENT_STATE_UNLOCKING" },
  { no: 5, name: "MANAGEMENT_STATE_UNLOCKED" },
  { no: 6, name: "MANAGEMENT_STATE_CLOSING" },
  { no: 7, name: "MANAGEMENT_STATE_CLOSED" }
]);
var cf;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.DOES_NOT_EXIST = 1] = "DOES_NOT_EXIST", n[n.EXISTS = 2] = "EXISTS";
})(cf || (cf = {}));
f.util.setEnumType(cf, "code.account.v1.TokenAccountInfo.BlockchainState", [
  { no: 0, name: "BLOCKCHAIN_STATE_UNKNOWN" },
  { no: 1, name: "BLOCKCHAIN_STATE_DOES_NOT_EXIST" },
  { no: 2, name: "BLOCKCHAIN_STATE_EXISTS" }
]);
var lf;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.NOT_CLAIMED = 1] = "NOT_CLAIMED", n[n.CLAIMED = 2] = "CLAIMED", n[n.EXPIRED = 3] = "EXPIRED";
})(lf || (lf = {}));
f.util.setEnumType(lf, "code.account.v1.TokenAccountInfo.ClaimState", [
  { no: 0, name: "CLAIM_STATE_UNKNOWN" },
  { no: 1, name: "CLAIM_STATE_NOT_CLAIMED" },
  { no: 2, name: "CLAIM_STATE_CLAIMED" },
  { no: 3, name: "CLAIM_STATE_EXPIRED" }
]);
Et.Unary, Et.Unary;
class qi extends S {
  constructor(t) {
    super(), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new qi().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new qi().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new qi().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(qi, t, e);
  }
}
qi.runtime = f;
qi.typeName = "code.badge.v1.ResetBadgeCountRequest";
qi.fields = f.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: j },
  { no: 2, name: "signature", kind: "message", T: wt }
]);
class Di extends S {
  constructor(t) {
    super(), this.result = ff.OK, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Di().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Di().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Di().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Di, t, e);
  }
}
Di.runtime = f;
Di.typeName = "code.badge.v1.ResetBadgeCountResponse";
Di.fields = f.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: f.getEnumType(ff) }
]);
var ff;
(function(n) {
  n[n.OK = 0] = "OK";
})(ff || (ff = {}));
f.util.setEnumType(ff, "code.badge.v1.ResetBadgeCountResponse.Result", [
  { no: 0, name: "OK" }
]);
Et.Unary;
class Pi extends S {
  constructor(t) {
    super(), this.pageSize = 0, this.direction = mf.ASC, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Pi().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Pi().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Pi().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Pi, t, e);
  }
}
Pi.runtime = f;
Pi.typeName = "code.chat.v1.GetChatsRequest";
Pi.fields = f.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: j },
  { no: 2, name: "signature", kind: "message", T: wt },
  { no: 3, name: "page_size", kind: "scalar", T: 13 },
  { no: 4, name: "cursor", kind: "message", T: Ve },
  { no: 5, name: "direction", kind: "enum", T: f.getEnumType(mf) }
]);
var mf;
(function(n) {
  n[n.ASC = 0] = "ASC", n[n.DESC = 1] = "DESC";
})(mf || (mf = {}));
f.util.setEnumType(mf, "code.chat.v1.GetChatsRequest.Direction", [
  { no: 0, name: "ASC" },
  { no: 1, name: "DESC" }
]);
class Ci extends S {
  constructor(t) {
    super(), this.result = df.OK, this.chats = [], f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Ci().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Ci().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Ci().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Ci, t, e);
  }
}
Ci.runtime = f;
Ci.typeName = "code.chat.v1.GetChatsResponse";
Ci.fields = f.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: f.getEnumType(df) },
  { no: 2, name: "chats", kind: "message", T: ji, repeated: !0 }
]);
var df;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND";
})(df || (df = {}));
f.util.setEnumType(df, "code.chat.v1.GetChatsResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" }
]);
class Ki extends S {
  constructor(t) {
    super(), this.pageSize = 0, this.direction = hf.ASC, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Ki().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Ki().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Ki().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Ki, t, e);
  }
}
Ki.runtime = f;
Ki.typeName = "code.chat.v1.GetMessagesRequest";
Ki.fields = f.util.newFieldList(() => [
  { no: 1, name: "chat_id", kind: "message", T: Le },
  { no: 2, name: "owner", kind: "message", T: j },
  { no: 3, name: "signature", kind: "message", T: wt },
  { no: 4, name: "page_size", kind: "scalar", T: 13 },
  { no: 5, name: "cursor", kind: "message", T: Ve },
  { no: 6, name: "direction", kind: "enum", T: f.getEnumType(hf) }
]);
var hf;
(function(n) {
  n[n.ASC = 0] = "ASC", n[n.DESC = 1] = "DESC";
})(hf || (hf = {}));
f.util.setEnumType(hf, "code.chat.v1.GetMessagesRequest.Direction", [
  { no: 0, name: "ASC" },
  { no: 1, name: "DESC" }
]);
class Ri extends S {
  constructor(t) {
    super(), this.result = pf.OK, this.messages = [], f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Ri().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Ri().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Ri().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Ri, t, e);
  }
}
Ri.runtime = f;
Ri.typeName = "code.chat.v1.GetMessagesResponse";
Ri.fields = f.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: f.getEnumType(pf) },
  { no: 2, name: "messages", kind: "message", T: Wi, repeated: !0 }
]);
var pf;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND";
})(pf || (pf = {}));
f.util.setEnumType(pf, "code.chat.v1.GetMessagesResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" }
]);
class Mi extends S {
  constructor(t) {
    super(), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Mi().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Mi().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Mi().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Mi, t, e);
  }
}
Mi.runtime = f;
Mi.typeName = "code.chat.v1.AdvancePointerRequest";
Mi.fields = f.util.newFieldList(() => [
  { no: 1, name: "chat_id", kind: "message", T: Le },
  { no: 2, name: "pointer", kind: "message", T: Jn },
  { no: 3, name: "owner", kind: "message", T: j },
  { no: 4, name: "signature", kind: "message", T: wt }
]);
class $i extends S {
  constructor(t) {
    super(), this.result = gf.OK, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new $i().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new $i().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new $i().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals($i, t, e);
  }
}
$i.runtime = f;
$i.typeName = "code.chat.v1.AdvancePointerResponse";
$i.fields = f.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: f.getEnumType(gf) }
]);
var gf;
(function(n) {
  n[n.OK = 0] = "OK", n[n.CHAT_NOT_FOUND = 1] = "CHAT_NOT_FOUND", n[n.MESSAGE_NOT_FOUND = 2] = "MESSAGE_NOT_FOUND";
})(gf || (gf = {}));
f.util.setEnumType(gf, "code.chat.v1.AdvancePointerResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "CHAT_NOT_FOUND" },
  { no: 2, name: "MESSAGE_NOT_FOUND" }
]);
class Vi extends S {
  constructor(t) {
    super(), this.isMuted = !1, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Vi().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Vi().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Vi().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Vi, t, e);
  }
}
Vi.runtime = f;
Vi.typeName = "code.chat.v1.SetMuteStateRequest";
Vi.fields = f.util.newFieldList(() => [
  { no: 1, name: "chat_id", kind: "message", T: Le },
  { no: 2, name: "is_muted", kind: "scalar", T: 8 },
  { no: 3, name: "owner", kind: "message", T: j },
  { no: 4, name: "signature", kind: "message", T: wt }
]);
class _i extends S {
  constructor(t) {
    super(), this.result = yf.OK, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new _i().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new _i().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new _i().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(_i, t, e);
  }
}
_i.runtime = f;
_i.typeName = "code.chat.v1.SetMuteStateResponse";
_i.fields = f.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: f.getEnumType(yf) }
]);
var yf;
(function(n) {
  n[n.OK = 0] = "OK", n[n.CHAT_NOT_FOUND = 1] = "CHAT_NOT_FOUND", n[n.CANT_MUTE = 2] = "CANT_MUTE";
})(yf || (yf = {}));
f.util.setEnumType(yf, "code.chat.v1.SetMuteStateResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "CHAT_NOT_FOUND" },
  { no: 2, name: "CANT_MUTE" }
]);
class Hi extends S {
  constructor(t) {
    super(), this.isSubscribed = !1, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Hi().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Hi().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Hi().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Hi, t, e);
  }
}
Hi.runtime = f;
Hi.typeName = "code.chat.v1.SetSubscriptionStateRequest";
Hi.fields = f.util.newFieldList(() => [
  { no: 1, name: "chat_id", kind: "message", T: Le },
  { no: 2, name: "is_subscribed", kind: "scalar", T: 8 },
  { no: 3, name: "owner", kind: "message", T: j },
  { no: 4, name: "signature", kind: "message", T: wt }
]);
class zi extends S {
  constructor(t) {
    super(), this.result = wf.OK, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new zi().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new zi().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new zi().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(zi, t, e);
  }
}
zi.runtime = f;
zi.typeName = "code.chat.v1.SetSubscriptionStateResponse";
zi.fields = f.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: f.getEnumType(wf) }
]);
var wf;
(function(n) {
  n[n.OK = 0] = "OK", n[n.CHAT_NOT_FOUND = 1] = "CHAT_NOT_FOUND", n[n.CANT_UNSUBSCRIBE = 2] = "CANT_UNSUBSCRIBE";
})(wf || (wf = {}));
f.util.setEnumType(wf, "code.chat.v1.SetSubscriptionStateResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "CHAT_NOT_FOUND" },
  { no: 2, name: "CANT_UNSUBSCRIBE" }
]);
class Le extends S {
  constructor(t) {
    super(), this.value = new Uint8Array(0), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Le().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Le().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Le().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Le, t, e);
  }
}
Le.runtime = f;
Le.typeName = "code.chat.v1.ChatId";
Le.fields = f.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class vn extends S {
  constructor(t) {
    super(), this.value = new Uint8Array(0), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new vn().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new vn().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new vn().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(vn, t, e);
  }
}
vn.runtime = f;
vn.typeName = "code.chat.v1.ChatMessageId";
vn.fields = f.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class Jn extends S {
  constructor(t) {
    super(), this.kind = Tf.UNKNOWN, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Jn().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Jn().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Jn().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Jn, t, e);
  }
}
Jn.runtime = f;
Jn.typeName = "code.chat.v1.Pointer";
Jn.fields = f.util.newFieldList(() => [
  { no: 1, name: "kind", kind: "enum", T: f.getEnumType(Tf) },
  { no: 2, name: "value", kind: "message", T: vn }
]);
var Tf;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.READ = 1] = "READ";
})(Tf || (Tf = {}));
f.util.setEnumType(Tf, "code.chat.v1.Pointer.Kind", [
  { no: 0, name: "UNKNOWN" },
  { no: 1, name: "READ" }
]);
class ji extends S {
  constructor(t) {
    super(), this.title = { case: void 0 }, this.numUnread = 0, this.isMuted = !1, this.isSubscribed = !1, this.canMute = !1, this.canUnsubscribe = !1, this.isVerified = !1, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new ji().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new ji().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new ji().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(ji, t, e);
  }
}
ji.runtime = f;
ji.typeName = "code.chat.v1.ChatMetadata";
ji.fields = f.util.newFieldList(() => [
  { no: 1, name: "chat_id", kind: "message", T: Le },
  { no: 2, name: "localized", kind: "message", T: xn, oneof: "title" },
  { no: 3, name: "domain", kind: "message", T: Ue, oneof: "title" },
  { no: 4, name: "read_pointer", kind: "message", T: Jn },
  { no: 5, name: "num_unread", kind: "scalar", T: 13 },
  { no: 6, name: "is_muted", kind: "scalar", T: 8 },
  { no: 7, name: "is_subscribed", kind: "scalar", T: 8 },
  { no: 8, name: "can_mute", kind: "scalar", T: 8 },
  { no: 9, name: "can_unsubscribe", kind: "scalar", T: 8 },
  { no: 10, name: "cursor", kind: "message", T: Ve },
  { no: 11, name: "is_verified", kind: "scalar", T: 8 }
]);
class Wi extends S {
  constructor(t) {
    super(), this.content = [], f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Wi().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Wi().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Wi().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Wi, t, e);
  }
}
Wi.runtime = f;
Wi.typeName = "code.chat.v1.ChatMessage";
Wi.fields = f.util.newFieldList(() => [
  { no: 1, name: "message_id", kind: "message", T: vn },
  { no: 2, name: "ts", kind: "message", T: Wt },
  { no: 3, name: "content", kind: "message", T: Gi, repeated: !0 },
  { no: 4, name: "cursor", kind: "message", T: Ve }
]);
class Gi extends S {
  constructor(t) {
    super(), this.type = { case: void 0 }, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Gi().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Gi().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Gi().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Gi, t, e);
  }
}
Gi.runtime = f;
Gi.typeName = "code.chat.v1.Content";
Gi.fields = f.util.newFieldList(() => [
  { no: 1, name: "localized", kind: "message", T: xn, oneof: "type" },
  { no: 2, name: "exchange_data", kind: "message", T: Xi, oneof: "type" },
  { no: 3, name: "nacl_box", kind: "message", T: Yi, oneof: "type" }
]);
class xn extends S {
  constructor(t) {
    super(), this.key = "", f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new xn().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new xn().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new xn().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(xn, t, e);
  }
}
xn.runtime = f;
xn.typeName = "code.chat.v1.LocalizedContent";
xn.fields = f.util.newFieldList(() => [
  { no: 1, name: "key", kind: "scalar", T: 9 }
]);
class Xi extends S {
  constructor(t) {
    super(), this.verb = Nf.UNKNOWN, this.exchangeData = { case: void 0 }, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Xi().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Xi().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Xi().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Xi, t, e);
  }
}
Xi.runtime = f;
Xi.typeName = "code.chat.v1.ExchangeDataContent";
Xi.fields = f.util.newFieldList(() => [
  { no: 1, name: "verb", kind: "enum", T: f.getEnumType(Nf) },
  { no: 2, name: "exact", kind: "message", T: oe, oneof: "exchange_data" },
  { no: 3, name: "partial", kind: "message", T: en, oneof: "exchange_data" }
]);
var Nf;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.GAVE = 1] = "GAVE", n[n.RECEIVED = 2] = "RECEIVED", n[n.WITHDREW = 3] = "WITHDREW", n[n.DEPOSITED = 4] = "DEPOSITED", n[n.SENT = 5] = "SENT", n[n.RETURNED = 6] = "RETURNED", n[n.SPENT = 7] = "SPENT", n[n.PAID = 8] = "PAID", n[n.PURCHASED = 9] = "PURCHASED";
})(Nf || (Nf = {}));
f.util.setEnumType(Nf, "code.chat.v1.ExchangeDataContent.Verb", [
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
class Yi extends S {
  constructor(t) {
    super(), this.nonce = new Uint8Array(0), this.encryptedPayload = new Uint8Array(0), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Yi().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Yi().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Yi().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Yi, t, e);
  }
}
Yi.runtime = f;
Yi.typeName = "code.chat.v1.NaclBoxEncryptedContent";
Yi.fields = f.util.newFieldList(() => [
  { no: 1, name: "peer_public_key", kind: "message", T: j },
  { no: 2, name: "nonce", kind: "scalar", T: 12 },
  { no: 3, name: "encrypted_payload", kind: "scalar", T: 12 }
]);
class Ve extends S {
  constructor(t) {
    super(), this.value = new Uint8Array(0), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Ve().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Ve().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Ve().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Ve, t, e);
  }
}
Ve.runtime = f;
Ve.typeName = "code.chat.v1.Cursor";
Ve.fields = f.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
Et.Unary, Et.Unary, Et.Unary, Et.Unary, Et.Unary;
class Zi extends S {
  constructor(t) {
    super(), this.contacts = [], f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Zi().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Zi().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Zi().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Zi, t, e);
  }
}
Zi.runtime = f;
Zi.typeName = "code.contact.v1.AddContactsRequest";
Zi.fields = f.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: j },
  { no: 2, name: "signature", kind: "message", T: wt },
  { no: 3, name: "container_id", kind: "message", T: be },
  { no: 4, name: "contacts", kind: "message", T: ne, repeated: !0 }
]);
class Qi extends S {
  constructor(t) {
    super(), this.result = Ef.OK, this.contactStatus = {}, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Qi().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Qi().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Qi().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Qi, t, e);
  }
}
Qi.runtime = f;
Qi.typeName = "code.contact.v1.AddContactsResponse";
Qi.fields = f.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: f.getEnumType(Ef) },
  { no: 2, name: "contact_status", kind: "map", K: 9, V: { kind: "message", T: An } }
]);
var Ef;
(function(n) {
  n[n.OK = 0] = "OK";
})(Ef || (Ef = {}));
f.util.setEnumType(Ef, "code.contact.v1.AddContactsResponse.Result", [
  { no: 0, name: "OK" }
]);
class ts extends S {
  constructor(t) {
    super(), this.contacts = [], f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new ts().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new ts().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new ts().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(ts, t, e);
  }
}
ts.runtime = f;
ts.typeName = "code.contact.v1.RemoveContactsRequest";
ts.fields = f.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: j },
  { no: 2, name: "signature", kind: "message", T: wt },
  { no: 3, name: "container_id", kind: "message", T: be },
  { no: 4, name: "contacts", kind: "message", T: ne, repeated: !0 }
]);
class es extends S {
  constructor(t) {
    super(), this.result = bf.OK, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new es().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new es().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new es().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(es, t, e);
  }
}
es.runtime = f;
es.typeName = "code.contact.v1.RemoveContactsResponse";
es.fields = f.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: f.getEnumType(bf) }
]);
var bf;
(function(n) {
  n[n.OK = 0] = "OK";
})(bf || (bf = {}));
f.util.setEnumType(bf, "code.contact.v1.RemoveContactsResponse.Result", [
  { no: 0, name: "OK" }
]);
class ns extends S {
  constructor(t) {
    super(), this.includeOnlyInAppContacts = !1, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new ns().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new ns().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new ns().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(ns, t, e);
  }
}
ns.runtime = f;
ns.typeName = "code.contact.v1.GetContactsRequest";
ns.fields = f.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: j },
  { no: 2, name: "signature", kind: "message", T: wt },
  { no: 3, name: "container_id", kind: "message", T: be },
  { no: 4, name: "page_token", kind: "message", T: ed },
  { no: 5, name: "include_only_in_app_contacts", kind: "scalar", T: 8 }
]);
class rs extends S {
  constructor(t) {
    super(), this.result = kf.OK, this.contacts = [], f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new rs().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new rs().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new rs().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(rs, t, e);
  }
}
rs.runtime = f;
rs.typeName = "code.contact.v1.GetContactsResponse";
rs.fields = f.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: f.getEnumType(kf) },
  { no: 2, name: "contacts", kind: "message", T: is, repeated: !0 },
  { no: 3, name: "next_page_token", kind: "message", T: ed }
]);
var kf;
(function(n) {
  n[n.OK = 0] = "OK";
})(kf || (kf = {}));
f.util.setEnumType(kf, "code.contact.v1.GetContactsResponse.Result", [
  { no: 0, name: "OK" }
]);
class is extends S {
  constructor(t) {
    super(), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new is().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new is().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new is().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(is, t, e);
  }
}
is.runtime = f;
is.typeName = "code.contact.v1.Contact";
is.fields = f.util.newFieldList(() => [
  { no: 1, name: "phone_number", kind: "message", T: ne },
  { no: 2, name: "status", kind: "message", T: An }
]);
class An extends S {
  constructor(t) {
    super(), this.isRegistered = !1, this.isInvited = !1, this.isInviteRevoked = !1, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new An().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new An().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new An().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(An, t, e);
  }
}
An.runtime = f;
An.typeName = "code.contact.v1.ContactStatus";
An.fields = f.util.newFieldList(() => [
  { no: 1, name: "is_registered", kind: "scalar", T: 8 },
  { no: 2, name: "is_invited", kind: "scalar", T: 8 },
  { no: 3, name: "is_invite_revoked", kind: "scalar", T: 8 }
]);
let ed = class Jl extends S {
  constructor(t) {
    super(), this.value = new Uint8Array(0), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Jl().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Jl().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Jl().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Jl, t, e);
  }
};
ed.runtime = f;
ed.typeName = "code.contact.v1.PageToken";
ed.fields = f.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
Et.Unary, Et.Unary, Et.Unary;
class ss extends S {
  constructor(t) {
    super(), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new ss().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new ss().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new ss().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(ss, t, e);
  }
}
ss.runtime = f;
ss.typeName = "code.currency.v1.GetAllRatesRequest";
ss.fields = f.util.newFieldList(() => [
  { no: 1, name: "timestamp", kind: "message", T: Wt }
]);
class os extends S {
  constructor(t) {
    super(), this.result = Bf.OK, this.rates = {}, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new os().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new os().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new os().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(os, t, e);
  }
}
os.runtime = f;
os.typeName = "code.currency.v1.GetAllRatesResponse";
os.fields = f.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: f.getEnumType(Bf) },
  { no: 2, name: "as_of", kind: "message", T: Wt },
  { no: 3, name: "rates", kind: "map", K: 9, V: { kind: "scalar", T: 1 } }
]);
var Bf;
(function(n) {
  n[n.OK = 0] = "OK", n[n.MISSING_DATA = 1] = "MISSING_DATA";
})(Bf || (Bf = {}));
f.util.setEnumType(Bf, "code.currency.v1.GetAllRatesResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "MISSING_DATA" }
]);
Et.Unary;
class as extends S {
  constructor(t) {
    super(), this.owners = [], this.signatures = [], f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new as().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new as().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new as().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(as, t, e);
  }
}
as.runtime = f;
as.typeName = "code.device.v1.RegisterLoggedInAccountsRequest";
as.fields = f.util.newFieldList(() => [
  { no: 1, name: "app_install", kind: "message", T: Qe },
  { no: 2, name: "owners", kind: "message", T: j, repeated: !0 },
  { no: 3, name: "signatures", kind: "message", T: wt, repeated: !0 }
]);
class us extends S {
  constructor(t) {
    super(), this.result = Sf.OK, this.invalidOwners = [], f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new us().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new us().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new us().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(us, t, e);
  }
}
us.runtime = f;
us.typeName = "code.device.v1.RegisterLoggedInAccountsResponse";
us.fields = f.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: f.getEnumType(Sf) },
  { no: 2, name: "invalid_owners", kind: "message", T: j, repeated: !0 }
]);
var Sf;
(function(n) {
  n[n.OK = 0] = "OK", n[n.INVALID_OWNER = 1] = "INVALID_OWNER";
})(Sf || (Sf = {}));
f.util.setEnumType(Sf, "code.device.v1.RegisterLoggedInAccountsResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INVALID_OWNER" }
]);
class cs extends S {
  constructor(t) {
    super(), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new cs().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new cs().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new cs().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(cs, t, e);
  }
}
cs.runtime = f;
cs.typeName = "code.device.v1.GetLoggedInAccountsRequest";
cs.fields = f.util.newFieldList(() => [
  { no: 1, name: "app_install", kind: "message", T: Qe }
]);
class ls extends S {
  constructor(t) {
    super(), this.result = If.OK, this.owners = [], f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new ls().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new ls().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new ls().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(ls, t, e);
  }
}
ls.runtime = f;
ls.typeName = "code.device.v1.GetLoggedInAccountsResponse";
ls.fields = f.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: f.getEnumType(If) },
  { no: 2, name: "owners", kind: "message", T: j, repeated: !0 }
]);
var If;
(function(n) {
  n[n.OK = 0] = "OK";
})(If || (If = {}));
f.util.setEnumType(If, "code.device.v1.GetLoggedInAccountsResponse.Result", [
  { no: 0, name: "OK" }
]);
Et.Unary, Et.Unary;
var Of;
(function(n) {
  n[n.NOT_INVITED = 0] = "NOT_INVITED", n[n.INVITED = 1] = "INVITED", n[n.REGISTERED = 2] = "REGISTERED", n[n.REVOKED = 3] = "REVOKED";
})(Of || (Of = {}));
f.util.setEnumType(Of, "code.invite.v2.InvitationStatus", [
  { no: 0, name: "NOT_INVITED" },
  { no: 1, name: "INVITED" },
  { no: 2, name: "REGISTERED" },
  { no: 3, name: "REVOKED" }
]);
class fs extends S {
  constructor(t) {
    super(), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new fs().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new fs().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new fs().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(fs, t, e);
  }
}
fs.runtime = f;
fs.typeName = "code.invite.v2.GetInviteCountRequest";
fs.fields = f.util.newFieldList(() => [
  { no: 1, name: "user_id", kind: "message", T: $e }
]);
class ms extends S {
  constructor(t) {
    super(), this.result = vf.OK, this.inviteCount = 0, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new ms().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new ms().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new ms().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(ms, t, e);
  }
}
ms.runtime = f;
ms.typeName = "code.invite.v2.GetInviteCountResponse";
ms.fields = f.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: f.getEnumType(vf) },
  { no: 2, name: "invite_count", kind: "scalar", T: 13 }
]);
var vf;
(function(n) {
  n[n.OK = 0] = "OK";
})(vf || (vf = {}));
f.util.setEnumType(vf, "code.invite.v2.GetInviteCountResponse.Result", [
  { no: 0, name: "OK" }
]);
class ds extends S {
  constructor(t) {
    super(), this.source = { case: void 0 }, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new ds().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new ds().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new ds().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(ds, t, e);
  }
}
ds.runtime = f;
ds.typeName = "code.invite.v2.InvitePhoneNumberRequest";
ds.fields = f.util.newFieldList(() => [
  { no: 1, name: "user", kind: "message", T: $e, oneof: "source" },
  { no: 3, name: "invite_code", kind: "message", T: ys, oneof: "source" },
  { no: 2, name: "receiver", kind: "message", T: ne }
]);
class hs extends S {
  constructor(t) {
    super(), this.result = Jf.OK, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new hs().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new hs().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new hs().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(hs, t, e);
  }
}
hs.runtime = f;
hs.typeName = "code.invite.v2.InvitePhoneNumberResponse";
hs.fields = f.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: f.getEnumType(Jf) }
]);
var Jf;
(function(n) {
  n[n.OK = 0] = "OK", n[n.INVITE_COUNT_EXCEEDED = 1] = "INVITE_COUNT_EXCEEDED", n[n.ALREADY_INVITED = 2] = "ALREADY_INVITED", n[n.USER_NOT_INVITED = 3] = "USER_NOT_INVITED", n[n.INVALID_RECEIVER_PHONE_NUMBER = 4] = "INVALID_RECEIVER_PHONE_NUMBER", n[n.INVITE_CODE_NOT_FOUND = 5] = "INVITE_CODE_NOT_FOUND", n[n.INVITE_CODE_REVOKED = 6] = "INVITE_CODE_REVOKED", n[n.INVITE_CODE_EXPIRED = 7] = "INVITE_CODE_EXPIRED";
})(Jf || (Jf = {}));
f.util.setEnumType(Jf, "code.invite.v2.InvitePhoneNumberResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INVITE_COUNT_EXCEEDED" },
  { no: 2, name: "ALREADY_INVITED" },
  { no: 3, name: "USER_NOT_INVITED" },
  { no: 4, name: "INVALID_RECEIVER_PHONE_NUMBER" },
  { no: 5, name: "INVITE_CODE_NOT_FOUND" },
  { no: 6, name: "INVITE_CODE_REVOKED" },
  { no: 7, name: "INVITE_CODE_EXPIRED" }
]);
class ps extends S {
  constructor(t) {
    super(), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new ps().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new ps().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new ps().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(ps, t, e);
  }
}
ps.runtime = f;
ps.typeName = "code.invite.v2.GetInvitationStatusRequest";
ps.fields = f.util.newFieldList(() => [
  { no: 1, name: "user_id", kind: "message", T: $e }
]);
class gs extends S {
  constructor(t) {
    super(), this.result = xf.OK, this.status = Of.NOT_INVITED, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new gs().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new gs().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new gs().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(gs, t, e);
  }
}
gs.runtime = f;
gs.typeName = "code.invite.v2.GetInvitationStatusResponse";
gs.fields = f.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: f.getEnumType(xf) },
  { no: 2, name: "status", kind: "enum", T: f.getEnumType(Of) }
]);
var xf;
(function(n) {
  n[n.OK = 0] = "OK";
})(xf || (xf = {}));
f.util.setEnumType(xf, "code.invite.v2.GetInvitationStatusResponse.Result", [
  { no: 0, name: "OK" }
]);
class ys extends S {
  constructor(t) {
    super(), this.value = "", f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new ys().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new ys().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new ys().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(ys, t, e);
  }
}
ys.runtime = f;
ys.typeName = "code.invite.v2.InviteCode";
ys.fields = f.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 9 }
]);
class uu extends S {
  constructor(t) {
    super(), this.value = new Uint8Array(0), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new uu().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new uu().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new uu().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(uu, t, e);
  }
}
uu.runtime = f;
uu.typeName = "code.invite.v2.PageToken";
uu.fields = f.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
Et.Unary, Et.Unary, Et.Unary;
class Un extends S {
  constructor(t) {
    super(), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Un().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Un().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Un().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Un, t, e);
  }
}
Un.runtime = f;
Un.typeName = "code.messaging.v1.OpenMessageStreamRequest";
Un.fields = f.util.newFieldList(() => [
  { no: 1, name: "rendezvous_key", kind: "message", T: ke },
  { no: 2, name: "signature", kind: "message", T: wt }
]);
class Ln extends S {
  constructor(t) {
    super(), this.messages = [], f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Ln().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Ln().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Ln().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Ln, t, e);
  }
}
Ln.runtime = f;
Ln.typeName = "code.messaging.v1.OpenMessageStreamResponse";
Ln.fields = f.util.newFieldList(() => [
  { no: 1, name: "messages", kind: "message", T: Be, repeated: !0 }
]);
class ws extends S {
  constructor(t) {
    super(), this.requestOrPong = { case: void 0 }, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new ws().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new ws().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new ws().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(ws, t, e);
  }
}
ws.runtime = f;
ws.typeName = "code.messaging.v1.OpenMessageStreamWithKeepAliveRequest";
ws.fields = f.util.newFieldList(() => [
  { no: 1, name: "request", kind: "message", T: Un, oneof: "requestOrPong" },
  { no: 2, name: "pong", kind: "message", T: Ls, oneof: "requestOrPong" }
]);
class Ts extends S {
  constructor(t) {
    super(), this.responseOrPing = { case: void 0 }, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Ts().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Ts().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Ts().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Ts, t, e);
  }
}
Ts.runtime = f;
Ts.typeName = "code.messaging.v1.OpenMessageStreamWithKeepAliveResponse";
Ts.fields = f.util.newFieldList(() => [
  { no: 1, name: "response", kind: "message", T: Ln, oneof: "responseOrPing" },
  { no: 2, name: "ping", kind: "message", T: Us, oneof: "responseOrPing" }
]);
class Ns extends S {
  constructor(t) {
    super(), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Ns().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Ns().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Ns().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Ns, t, e);
  }
}
Ns.runtime = f;
Ns.typeName = "code.messaging.v1.PollMessagesRequest";
Ns.fields = f.util.newFieldList(() => [
  { no: 1, name: "rendezvous_key", kind: "message", T: ke },
  { no: 2, name: "signature", kind: "message", T: wt }
]);
class Es extends S {
  constructor(t) {
    super(), this.messages = [], f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Es().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Es().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Es().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Es, t, e);
  }
}
Es.runtime = f;
Es.typeName = "code.messaging.v1.PollMessagesResponse";
Es.fields = f.util.newFieldList(() => [
  { no: 1, name: "messages", kind: "message", T: Be, repeated: !0 }
]);
class bs extends S {
  constructor(t) {
    super(), this.messageIds = [], f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new bs().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new bs().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new bs().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(bs, t, e);
  }
}
bs.runtime = f;
bs.typeName = "code.messaging.v1.AckMessagesRequest";
bs.fields = f.util.newFieldList(() => [
  { no: 1, name: "rendezvous_key", kind: "message", T: ke },
  { no: 2, name: "message_ids", kind: "message", T: nn, repeated: !0 }
]);
class ks extends S {
  constructor(t) {
    super(), this.result = Af.OK, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new ks().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new ks().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new ks().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(ks, t, e);
  }
}
ks.runtime = f;
ks.typeName = "code.messaging.v1.AckMesssagesResponse";
ks.fields = f.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: f.getEnumType(Af) }
]);
var Af;
(function(n) {
  n[n.OK = 0] = "OK";
})(Af || (Af = {}));
f.util.setEnumType(Af, "code.messaging.v1.AckMesssagesResponse.Result", [
  { no: 0, name: "OK" }
]);
class Fn extends S {
  constructor(t) {
    super(), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Fn().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Fn().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Fn().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Fn, t, e);
  }
}
Fn.runtime = f;
Fn.typeName = "code.messaging.v1.SendMessageRequest";
Fn.fields = f.util.newFieldList(() => [
  { no: 1, name: "message", kind: "message", T: Be },
  { no: 2, name: "rendezvous_key", kind: "message", T: ke },
  { no: 3, name: "signature", kind: "message", T: wt }
]);
class Bs extends S {
  constructor(t) {
    super(), this.result = Uf.OK, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Bs().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Bs().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Bs().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Bs, t, e);
  }
}
Bs.runtime = f;
Bs.typeName = "code.messaging.v1.SendMessageResponse";
Bs.fields = f.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: f.getEnumType(Uf) },
  { no: 2, name: "message_id", kind: "message", T: nn }
]);
var Uf;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NO_ACTIVE_STREAM = 1] = "NO_ACTIVE_STREAM";
})(Uf || (Uf = {}));
f.util.setEnumType(Uf, "code.messaging.v1.SendMessageResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NO_ACTIVE_STREAM" }
]);
class ke extends S {
  constructor(t) {
    super(), this.value = new Uint8Array(0), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new ke().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new ke().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new ke().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(ke, t, e);
  }
}
ke.runtime = f;
ke.typeName = "code.messaging.v1.RendezvousKey";
ke.fields = f.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class nn extends S {
  constructor(t) {
    super(), this.value = new Uint8Array(0), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new nn().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new nn().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new nn().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(nn, t, e);
  }
}
nn.runtime = f;
nn.typeName = "code.messaging.v1.MessageId";
nn.fields = f.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class Ss extends S {
  constructor(t) {
    super(), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Ss().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Ss().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Ss().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Ss, t, e);
  }
}
Ss.runtime = f;
Ss.typeName = "code.messaging.v1.RequestToGrabBill";
Ss.fields = f.util.newFieldList(() => [
  { no: 1, name: "requestor_account", kind: "message", T: j }
]);
class qn extends S {
  constructor(t) {
    super(), this.exchangeData = { case: void 0 }, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new qn().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new qn().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new qn().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(qn, t, e);
  }
}
qn.runtime = f;
qn.typeName = "code.messaging.v1.RequestToReceiveBill";
qn.fields = f.util.newFieldList(() => [
  { no: 1, name: "requestor_account", kind: "message", T: j },
  { no: 2, name: "exact", kind: "message", T: oe, oneof: "exchange_data" },
  { no: 3, name: "partial", kind: "message", T: en, oneof: "exchange_data" },
  { no: 4, name: "domain", kind: "message", T: Ue },
  { no: 5, name: "verifier", kind: "message", T: j },
  { no: 6, name: "signature", kind: "message", T: wt },
  { no: 7, name: "rendezvous_key", kind: "message", T: ke }
]);
class Is extends S {
  constructor(t) {
    super(), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Is().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Is().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Is().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Is, t, e);
  }
}
Is.runtime = f;
Is.typeName = "code.messaging.v1.CodeScanned";
Is.fields = f.util.newFieldList(() => [
  { no: 1, name: "timestamp", kind: "message", T: Wt }
]);
class Os extends S {
  constructor(t) {
    super(), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Os().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Os().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Os().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Os, t, e);
  }
}
Os.runtime = f;
Os.typeName = "code.messaging.v1.ClientRejectedPayment";
Os.fields = f.util.newFieldList(() => [
  { no: 1, name: "intent_id", kind: "message", T: ee }
]);
class vs extends S {
  constructor(t) {
    super(), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new vs().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new vs().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new vs().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(vs, t, e);
  }
}
vs.runtime = f;
vs.typeName = "code.messaging.v1.IntentSubmitted";
vs.fields = f.util.newFieldList(() => [
  { no: 1, name: "intent_id", kind: "message", T: ee },
  { no: 2, name: "metadata", kind: "message", T: tn }
]);
class Js extends S {
  constructor(t) {
    super(), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Js().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Js().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Js().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Js, t, e);
  }
}
Js.runtime = f;
Js.typeName = "code.messaging.v1.WebhookCalled";
Js.fields = f.util.newFieldList(() => [
  { no: 1, name: "timestamp", kind: "message", T: Wt }
]);
class Dn extends S {
  constructor(t) {
    super(), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Dn().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Dn().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Dn().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Dn, t, e);
  }
}
Dn.runtime = f;
Dn.typeName = "code.messaging.v1.RequestToLogin";
Dn.fields = f.util.newFieldList(() => [
  { no: 1, name: "domain", kind: "message", T: Ue },
  { no: 4, name: "verifier", kind: "message", T: j },
  { no: 5, name: "signature", kind: "message", T: wt },
  { no: 6, name: "rendezvous_key", kind: "message", T: ke }
]);
class xs extends S {
  constructor(t) {
    super(), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new xs().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new xs().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new xs().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(xs, t, e);
  }
}
xs.runtime = f;
xs.typeName = "code.messaging.v1.ClientRejectedLogin";
xs.fields = f.util.newFieldList(() => [
  { no: 4, name: "timestamp", kind: "message", T: Wt }
]);
class As extends S {
  constructor(t) {
    super(), this.airdropType = ur.UNKNOWN, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new As().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new As().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new As().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(As, t, e);
  }
}
As.runtime = f;
As.typeName = "code.messaging.v1.AirdropReceived";
As.fields = f.util.newFieldList(() => [
  { no: 1, name: "airdrop_type", kind: "enum", T: f.getEnumType(ur) },
  { no: 2, name: "exchange_data", kind: "message", T: oe },
  { no: 3, name: "timestamp", kind: "message", T: Wt }
]);
class Be extends S {
  constructor(t) {
    super(), this.kind = { case: void 0 }, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Be().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Be().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Be().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Be, t, e);
  }
}
Be.runtime = f;
Be.typeName = "code.messaging.v1.Message";
Be.fields = f.util.newFieldList(() => [
  { no: 1, name: "id", kind: "message", T: nn },
  { no: 3, name: "send_message_request_signature", kind: "message", T: wt },
  { no: 2, name: "request_to_grab_bill", kind: "message", T: Ss, oneof: "kind" },
  { no: 5, name: "request_to_receive_bill", kind: "message", T: qn, oneof: "kind" },
  { no: 6, name: "code_scanned", kind: "message", T: Is, oneof: "kind" },
  { no: 7, name: "client_rejected_payment", kind: "message", T: Os, oneof: "kind" },
  { no: 8, name: "intent_submitted", kind: "message", T: vs, oneof: "kind" },
  { no: 9, name: "webhook_called", kind: "message", T: Js, oneof: "kind" },
  { no: 10, name: "request_to_login", kind: "message", T: Dn, oneof: "kind" },
  { no: 12, name: "client_rejected_login", kind: "message", T: xs, oneof: "kind" },
  { no: 4, name: "airdrop_received", kind: "message", T: As, oneof: "kind" }
]);
class Us extends S {
  constructor(t) {
    super(), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Us().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Us().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Us().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Us, t, e);
  }
}
Us.runtime = f;
Us.typeName = "code.messaging.v1.ServerPing";
Us.fields = f.util.newFieldList(() => [
  { no: 1, name: "timestamp", kind: "message", T: Wt },
  { no: 2, name: "ping_delay", kind: "message", T: yr }
]);
class Ls extends S {
  constructor(t) {
    super(), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Ls().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Ls().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Ls().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Ls, t, e);
  }
}
Ls.runtime = f;
Ls.typeName = "code.messaging.v1.ClientPong";
Ls.fields = f.util.newFieldList(() => [
  { no: 1, name: "timestamp", kind: "message", T: Wt }
]);
Et.ServerStreaming, Et.BiDiStreaming, Et.Unary, Et.Unary, Et.Unary;
class Fs extends S {
  constructor(t) {
    super(), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Fs().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Fs().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Fs().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Fs, t, e);
  }
}
Fs.runtime = f;
Fs.typeName = "code.micropayment.v1.GetStatusRequest";
Fs.fields = f.util.newFieldList(() => [
  { no: 1, name: "intent_id", kind: "message", T: ee }
]);
class qs extends S {
  constructor(t) {
    super(), this.exists = !1, this.codeScanned = !1, this.intentSubmitted = !1, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new qs().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new qs().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new qs().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(qs, t, e);
  }
}
qs.runtime = f;
qs.typeName = "code.micropayment.v1.GetStatusResponse";
qs.fields = f.util.newFieldList(() => [
  { no: 1, name: "exists", kind: "scalar", T: 8 },
  { no: 2, name: "code_scanned", kind: "scalar", T: 8 },
  { no: 3, name: "intent_submitted", kind: "scalar", T: 8 }
]);
class Ds extends S {
  constructor(t) {
    super(), this.url = "", f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Ds().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Ds().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Ds().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Ds, t, e);
  }
}
Ds.runtime = f;
Ds.typeName = "code.micropayment.v1.RegisterWebhookRequest";
Ds.fields = f.util.newFieldList(() => [
  { no: 1, name: "intent_id", kind: "message", T: ee },
  { no: 2, name: "url", kind: "scalar", T: 9 }
]);
class Ps extends S {
  constructor(t) {
    super(), this.result = Lf.OK, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Ps().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Ps().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Ps().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Ps, t, e);
  }
}
Ps.runtime = f;
Ps.typeName = "code.micropayment.v1.RegisterWebhookResponse";
Ps.fields = f.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: f.getEnumType(Lf) }
]);
var Lf;
(function(n) {
  n[n.OK = 0] = "OK", n[n.ALREADY_REGISTERED = 1] = "ALREADY_REGISTERED", n[n.REQUEST_NOT_FOUND = 2] = "REQUEST_NOT_FOUND", n[n.INTENT_EXISTS = 3] = "INTENT_EXISTS", n[n.INVALID_URL = 4] = "INVALID_URL";
})(Lf || (Lf = {}));
f.util.setEnumType(Lf, "code.micropayment.v1.RegisterWebhookResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "ALREADY_REGISTERED" },
  { no: 2, name: "REQUEST_NOT_FOUND" },
  { no: 3, name: "INTENT_EXISTS" },
  { no: 4, name: "INVALID_URL" }
]);
class Cs extends S {
  constructor(t) {
    super(), this.url = "", this.currency = "", this.nativeAmount = 0, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Cs().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Cs().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Cs().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Cs, t, e);
  }
}
Cs.runtime = f;
Cs.typeName = "code.micropayment.v1.CodifyRequest";
Cs.fields = f.util.newFieldList(() => [
  { no: 1, name: "url", kind: "scalar", T: 9 },
  { no: 2, name: "currency", kind: "scalar", T: 9 },
  { no: 3, name: "native_amount", kind: "scalar", T: 1 },
  { no: 4, name: "owner_account", kind: "message", T: j },
  { no: 5, name: "primary_account", kind: "message", T: j },
  { no: 6, name: "signature", kind: "message", T: wt }
]);
class Ks extends S {
  constructor(t) {
    super(), this.result = Ff.OK, this.codifiedUrl = "", f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Ks().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Ks().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Ks().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Ks, t, e);
  }
}
Ks.runtime = f;
Ks.typeName = "code.micropayment.v1.CodifyResponse";
Ks.fields = f.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: f.getEnumType(Ff) },
  { no: 2, name: "codified_url", kind: "scalar", T: 9 }
]);
var Ff;
(function(n) {
  n[n.OK = 0] = "OK", n[n.INVALID_URL = 1] = "INVALID_URL", n[n.INVALID_ACCOUNT = 2] = "INVALID_ACCOUNT", n[n.UNSUPPORTED_CURRENCY = 3] = "UNSUPPORTED_CURRENCY", n[n.NATIVE_AMOUNT_EXCEEDS_LIMIT = 4] = "NATIVE_AMOUNT_EXCEEDS_LIMIT";
})(Ff || (Ff = {}));
f.util.setEnumType(Ff, "code.micropayment.v1.CodifyResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INVALID_URL" },
  { no: 2, name: "INVALID_ACCOUNT" },
  { no: 3, name: "UNSUPPORTED_CURRENCY" },
  { no: 4, name: "NATIVE_AMOUNT_EXCEEDS_LIMIT" }
]);
class Rs extends S {
  constructor(t) {
    super(), this.path = "", f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Rs().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Rs().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Rs().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Rs, t, e);
  }
}
Rs.runtime = f;
Rs.typeName = "code.micropayment.v1.GetPathMetadataRequest";
Rs.fields = f.util.newFieldList(() => [
  { no: 1, name: "path", kind: "scalar", T: 9 }
]);
class Ms extends S {
  constructor(t) {
    super(), this.result = qf.OK, this.currency = "", this.nativeAmount = 0, this.redirctUrl = "", f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Ms().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Ms().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Ms().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Ms, t, e);
  }
}
Ms.runtime = f;
Ms.typeName = "code.micropayment.v1.GetPathMetadataResponse";
Ms.fields = f.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: f.getEnumType(qf) },
  { no: 2, name: "destination", kind: "message", T: j },
  { no: 3, name: "currency", kind: "scalar", T: 9 },
  { no: 4, name: "native_amount", kind: "scalar", T: 1 },
  { no: 5, name: "redirct_url", kind: "scalar", T: 9 }
]);
var qf;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND";
})(qf || (qf = {}));
f.util.setEnumType(qf, "code.micropayment.v1.GetPathMetadataResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" }
]);
Et.Unary, Et.Unary, Et.Unary, Et.Unary;
class $s extends S {
  constructor(t) {
    super(), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new $s().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new $s().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new $s().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals($s, t, e);
  }
}
$s.runtime = f;
$s.typeName = "code.phone.v1.SendVerificationCodeRequest";
$s.fields = f.util.newFieldList(() => [
  { no: 1, name: "phone_number", kind: "message", T: ne },
  { no: 2, name: "device_token", kind: "message", T: Sn }
]);
class Vs extends S {
  constructor(t) {
    super(), this.result = Df.OK, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Vs().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Vs().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Vs().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Vs, t, e);
  }
}
Vs.runtime = f;
Vs.typeName = "code.phone.v1.SendVerificationCodeResponse";
Vs.fields = f.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: f.getEnumType(Df) }
]);
var Df;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_INVITED = 1] = "NOT_INVITED", n[n.RATE_LIMITED = 2] = "RATE_LIMITED", n[n.INVALID_PHONE_NUMBER = 3] = "INVALID_PHONE_NUMBER", n[n.UNSUPPORTED_PHONE_TYPE = 4] = "UNSUPPORTED_PHONE_TYPE";
})(Df || (Df = {}));
f.util.setEnumType(Df, "code.phone.v1.SendVerificationCodeResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_INVITED" },
  { no: 2, name: "RATE_LIMITED" },
  { no: 3, name: "INVALID_PHONE_NUMBER" },
  { no: 4, name: "UNSUPPORTED_PHONE_TYPE" }
]);
class _s extends S {
  constructor(t) {
    super(), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new _s().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new _s().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new _s().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(_s, t, e);
  }
}
_s.runtime = f;
_s.typeName = "code.phone.v1.CheckVerificationCodeRequest";
_s.fields = f.util.newFieldList(() => [
  { no: 1, name: "phone_number", kind: "message", T: ne },
  { no: 2, name: "code", kind: "message", T: Pn }
]);
class Hs extends S {
  constructor(t) {
    super(), this.result = Pf.OK, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Hs().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Hs().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Hs().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Hs, t, e);
  }
}
Hs.runtime = f;
Hs.typeName = "code.phone.v1.CheckVerificationCodeResponse";
Hs.fields = f.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: f.getEnumType(Pf) },
  { no: 2, name: "linking_token", kind: "message", T: Cn }
]);
var Pf;
(function(n) {
  n[n.OK = 0] = "OK", n[n.INVALID_CODE = 1] = "INVALID_CODE", n[n.NO_VERIFICATION = 2] = "NO_VERIFICATION", n[n.RATE_LIMITED = 3] = "RATE_LIMITED";
})(Pf || (Pf = {}));
f.util.setEnumType(Pf, "code.phone.v1.CheckVerificationCodeResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INVALID_CODE" },
  { no: 2, name: "NO_VERIFICATION" },
  { no: 3, name: "RATE_LIMITED" }
]);
class zs extends S {
  constructor(t) {
    super(), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new zs().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new zs().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new zs().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(zs, t, e);
  }
}
zs.runtime = f;
zs.typeName = "code.phone.v1.GetAssociatedPhoneNumberRequest";
zs.fields = f.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: j },
  { no: 2, name: "signature", kind: "message", T: wt }
]);
class js extends S {
  constructor(t) {
    super(), this.result = Cf.OK, this.isLinked = !1, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new js().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new js().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new js().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(js, t, e);
  }
}
js.runtime = f;
js.typeName = "code.phone.v1.GetAssociatedPhoneNumberResponse";
js.fields = f.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: f.getEnumType(Cf) },
  { no: 2, name: "phone_number", kind: "message", T: ne },
  { no: 3, name: "is_linked", kind: "scalar", T: 8 }
]);
var Cf;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND", n[n.NOT_INVITED = 2] = "NOT_INVITED", n[n.UNLOCKED_TIMELOCK_ACCOUNT = 3] = "UNLOCKED_TIMELOCK_ACCOUNT";
})(Cf || (Cf = {}));
f.util.setEnumType(Cf, "code.phone.v1.GetAssociatedPhoneNumberResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" },
  { no: 2, name: "NOT_INVITED" },
  { no: 3, name: "UNLOCKED_TIMELOCK_ACCOUNT" }
]);
class Pn extends S {
  constructor(t) {
    super(), this.value = "", f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Pn().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Pn().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Pn().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Pn, t, e);
  }
}
Pn.runtime = f;
Pn.typeName = "code.phone.v1.VerificationCode";
Pn.fields = f.util.newFieldList(() => [
  { no: 2, name: "value", kind: "scalar", T: 9 }
]);
class Cn extends S {
  constructor(t) {
    super(), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Cn().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Cn().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Cn().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Cn, t, e);
  }
}
Cn.runtime = f;
Cn.typeName = "code.phone.v1.PhoneLinkingToken";
Cn.fields = f.util.newFieldList(() => [
  { no: 1, name: "phone_number", kind: "message", T: ne },
  { no: 2, name: "code", kind: "message", T: Pn }
]);
Et.Unary, Et.Unary, Et.Unary;
var Kf;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.FCM_ANDROID = 1] = "FCM_ANDROID", n[n.FCM_APNS = 2] = "FCM_APNS";
})(Kf || (Kf = {}));
f.util.setEnumType(Kf, "code.push.v1.TokenType", [
  { no: 0, name: "UNKNOWN" },
  { no: 1, name: "FCM_ANDROID" },
  { no: 2, name: "FCM_APNS" }
]);
class Ws extends S {
  constructor(t) {
    super(), this.pushToken = "", this.tokenType = Kf.UNKNOWN, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Ws().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Ws().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Ws().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Ws, t, e);
  }
}
Ws.runtime = f;
Ws.typeName = "code.push.v1.AddTokenRequest";
Ws.fields = f.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: j },
  { no: 2, name: "signature", kind: "message", T: wt },
  { no: 3, name: "container_id", kind: "message", T: be },
  { no: 4, name: "push_token", kind: "scalar", T: 9 },
  { no: 5, name: "token_type", kind: "enum", T: f.getEnumType(Kf) },
  { no: 6, name: "app_install", kind: "message", T: Qe }
]);
class Gs extends S {
  constructor(t) {
    super(), this.result = Rf.OK, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Gs().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Gs().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Gs().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Gs, t, e);
  }
}
Gs.runtime = f;
Gs.typeName = "code.push.v1.AddTokenResponse";
Gs.fields = f.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: f.getEnumType(Rf) }
]);
var Rf;
(function(n) {
  n[n.OK = 0] = "OK", n[n.INVALID_PUSH_TOKEN = 1] = "INVALID_PUSH_TOKEN";
})(Rf || (Rf = {}));
f.util.setEnumType(Rf, "code.push.v1.AddTokenResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INVALID_PUSH_TOKEN" }
]);
Et.Unary;
Et.BiDiStreaming, Et.Unary, Et.Unary, Et.Unary, Et.Unary, Et.Unary, Et.Unary, Et.Unary, Et.BiDiStreaming;
class Xs extends S {
  constructor(t) {
    super(), this.token = { case: void 0 }, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Xs().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Xs().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Xs().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Xs, t, e);
  }
}
Xs.runtime = f;
Xs.typeName = "code.user.v1.LinkAccountRequest";
Xs.fields = f.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: j },
  { no: 2, name: "signature", kind: "message", T: wt },
  { no: 3, name: "phone", kind: "message", T: Cn, oneof: "token" }
]);
class Ys extends S {
  constructor(t) {
    super(), this.result = Mf.OK, this.metadata = { case: void 0 }, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Ys().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Ys().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Ys().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Ys, t, e);
  }
}
Ys.runtime = f;
Ys.typeName = "code.user.v1.LinkAccountResponse";
Ys.fields = f.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: f.getEnumType(Mf) },
  { no: 2, name: "user", kind: "message", T: Kn },
  { no: 3, name: "data_container_id", kind: "message", T: be },
  { no: 5, name: "phone", kind: "message", T: Rn, oneof: "metadata" }
]);
var Mf;
(function(n) {
  n[n.OK = 0] = "OK", n[n.INVALID_TOKEN = 1] = "INVALID_TOKEN", n[n.RATE_LIMITED = 2] = "RATE_LIMITED";
})(Mf || (Mf = {}));
f.util.setEnumType(Mf, "code.user.v1.LinkAccountResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INVALID_TOKEN" },
  { no: 2, name: "RATE_LIMITED" }
]);
class Zs extends S {
  constructor(t) {
    super(), this.identifyingFeature = { case: void 0 }, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Zs().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Zs().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Zs().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Zs, t, e);
  }
}
Zs.runtime = f;
Zs.typeName = "code.user.v1.UnlinkAccountRequest";
Zs.fields = f.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: j },
  { no: 2, name: "signature", kind: "message", T: wt },
  { no: 4, name: "phone_number", kind: "message", T: ne, oneof: "identifying_feature" }
]);
class Qs extends S {
  constructor(t) {
    super(), this.result = $f.OK, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Qs().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Qs().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Qs().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Qs, t, e);
  }
}
Qs.runtime = f;
Qs.typeName = "code.user.v1.UnlinkAccountResponse";
Qs.fields = f.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: f.getEnumType($f) }
]);
var $f;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NEVER_ASSOCIATED = 1] = "NEVER_ASSOCIATED";
})($f || ($f = {}));
f.util.setEnumType($f, "code.user.v1.UnlinkAccountResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NEVER_ASSOCIATED" }
]);
class to extends S {
  constructor(t) {
    super(), this.identifyingFeature = { case: void 0 }, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new to().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new to().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new to().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(to, t, e);
  }
}
to.runtime = f;
to.typeName = "code.user.v1.GetUserRequest";
to.fields = f.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: j },
  { no: 2, name: "signature", kind: "message", T: wt },
  { no: 3, name: "phone_number", kind: "message", T: ne, oneof: "identifying_feature" }
]);
class eo extends S {
  constructor(t) {
    super(), this.result = Vf.OK, this.metadata = { case: void 0 }, this.enableInternalFlags = !1, this.eligibleAirdrops = [], f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new eo().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new eo().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new eo().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(eo, t, e);
  }
}
eo.runtime = f;
eo.typeName = "code.user.v1.GetUserResponse";
eo.fields = f.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: f.getEnumType(Vf) },
  { no: 2, name: "user", kind: "message", T: Kn },
  { no: 3, name: "data_container_id", kind: "message", T: be },
  { no: 5, name: "phone", kind: "message", T: Rn, oneof: "metadata" },
  { no: 6, name: "enable_internal_flags", kind: "scalar", T: 8 },
  { no: 7, name: "eligible_airdrops", kind: "enum", T: f.getEnumType(ur), repeated: !0 }
]);
var Vf;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND", n[n.NOT_INVITED = 2] = "NOT_INVITED", n[n.UNLOCKED_TIMELOCK_ACCOUNT = 3] = "UNLOCKED_TIMELOCK_ACCOUNT";
})(Vf || (Vf = {}));
f.util.setEnumType(Vf, "code.user.v1.GetUserResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" },
  { no: 2, name: "NOT_INVITED" },
  { no: 3, name: "UNLOCKED_TIMELOCK_ACCOUNT" }
]);
class no extends S {
  constructor(t) {
    super(), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new no().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new no().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new no().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(no, t, e);
  }
}
no.runtime = f;
no.typeName = "code.user.v1.LoginToThirdPartyAppRequest";
no.fields = f.util.newFieldList(() => [
  { no: 1, name: "intent_id", kind: "message", T: ee },
  { no: 2, name: "user_id", kind: "message", T: j },
  { no: 3, name: "signature", kind: "message", T: wt }
]);
class ro extends S {
  constructor(t) {
    super(), this.result = _f.OK, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new ro().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new ro().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new ro().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(ro, t, e);
  }
}
ro.runtime = f;
ro.typeName = "code.user.v1.LoginToThirdPartyAppResponse";
ro.fields = f.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: f.getEnumType(_f) }
]);
var _f;
(function(n) {
  n[n.OK = 0] = "OK", n[n.REQUEST_NOT_FOUND = 1] = "REQUEST_NOT_FOUND", n[n.PAYMENT_REQUIRED = 2] = "PAYMENT_REQUIRED", n[n.LOGIN_NOT_SUPPORTED = 3] = "LOGIN_NOT_SUPPORTED", n[n.LOGIN_EXISTS = 4] = "LOGIN_EXISTS", n[n.INVALID_ACCOUNT = 5] = "INVALID_ACCOUNT";
})(_f || (_f = {}));
f.util.setEnumType(_f, "code.user.v1.LoginToThirdPartyAppResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "REQUEST_NOT_FOUND" },
  { no: 2, name: "PAYMENT_REQUIRED" },
  { no: 3, name: "LOGIN_NOT_SUPPORTED" },
  { no: 4, name: "LOGIN_EXISTS" },
  { no: 5, name: "INVALID_ACCOUNT" }
]);
class io extends S {
  constructor(t) {
    super(), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new io().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new io().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new io().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(io, t, e);
  }
}
io.runtime = f;
io.typeName = "code.user.v1.GetLoginForThirdPartyAppRequest";
io.fields = f.util.newFieldList(() => [
  { no: 1, name: "intent_id", kind: "message", T: ee },
  { no: 2, name: "verifier", kind: "message", T: j },
  { no: 3, name: "signature", kind: "message", T: wt }
]);
class so extends S {
  constructor(t) {
    super(), this.result = Hf.OK, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new so().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new so().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new so().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(so, t, e);
  }
}
so.runtime = f;
so.typeName = "code.user.v1.GetLoginForThirdPartyAppResponse";
so.fields = f.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: f.getEnumType(Hf) },
  { no: 2, name: "user_id", kind: "message", T: j }
]);
var Hf;
(function(n) {
  n[n.OK = 0] = "OK", n[n.REQUEST_NOT_FOUND = 1] = "REQUEST_NOT_FOUND", n[n.LOGIN_NOT_SUPPORTED = 2] = "LOGIN_NOT_SUPPORTED";
})(Hf || (Hf = {}));
f.util.setEnumType(Hf, "code.user.v1.GetLoginForThirdPartyAppResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "REQUEST_NOT_FOUND" },
  { no: 2, name: "LOGIN_NOT_SUPPORTED" }
]);
class Kn extends S {
  constructor(t) {
    super(), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Kn().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Kn().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Kn().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Kn, t, e);
  }
}
Kn.runtime = f;
Kn.typeName = "code.user.v1.User";
Kn.fields = f.util.newFieldList(() => [
  { no: 1, name: "id", kind: "message", T: $e },
  { no: 2, name: "view", kind: "message", T: oo }
]);
class oo extends S {
  constructor(t) {
    super(), f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new oo().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new oo().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new oo().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(oo, t, e);
  }
}
oo.runtime = f;
oo.typeName = "code.user.v1.View";
oo.fields = f.util.newFieldList(() => [
  { no: 1, name: "phone_number", kind: "message", T: ne }
]);
class Rn extends S {
  constructor(t) {
    super(), this.isLinked = !1, f.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Rn().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Rn().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Rn().fromJsonString(t, e);
  }
  static equals(t, e) {
    return f.util.equals(Rn, t, e);
  }
}
Rn.runtime = f;
Rn.typeName = "code.user.v1.PhoneMetadata";
Rn.fields = f.util.newFieldList(() => [
  { no: 1, name: "is_linked", kind: "scalar", T: 8 }
]);
Et.Unary, Et.Unary, Et.Unary, Et.Unary, Et.Unary;
function XT(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function YT(n) {
  if (n.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), e = 0; e < t.length; e++)
    t[e] = 255;
  for (var r = 0; r < n.length; r++) {
    var i = n.charAt(r), a = i.charCodeAt(0);
    if (t[a] !== 255)
      throw new TypeError(i + " is ambiguous");
    t[a] = r;
  }
  var l = n.length, c = n.charAt(0), d = Math.log(l) / Math.log(256), h = Math.log(256) / Math.log(l);
  function g(b) {
    if (b instanceof Uint8Array || (ArrayBuffer.isView(b) ? b = new Uint8Array(b.buffer, b.byteOffset, b.byteLength) : Array.isArray(b) && (b = Uint8Array.from(b))), !(b instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (b.length === 0)
      return "";
    for (var O = 0, x = 0, L = 0, $ = b.length; L !== $ && b[L] === 0; )
      L++, O++;
    for (var at = ($ - L) * h + 1 >>> 0, F = new Uint8Array(at); L !== $; ) {
      for (var nt = b[L], J = 0, Y = at - 1; (nt !== 0 || J < x) && Y !== -1; Y--, J++)
        nt += 256 * F[Y] >>> 0, F[Y] = nt % l >>> 0, nt = nt / l >>> 0;
      if (nt !== 0)
        throw new Error("Non-zero carry");
      x = J, L++;
    }
    for (var rt = at - x; rt !== at && F[rt] === 0; )
      rt++;
    for (var ot = c.repeat(O); rt < at; ++rt)
      ot += n.charAt(F[rt]);
    return ot;
  }
  function y(b) {
    if (typeof b != "string")
      throw new TypeError("Expected String");
    if (b.length === 0)
      return new Uint8Array();
    for (var O = 0, x = 0, L = 0; b[O] === c; )
      x++, O++;
    for (var $ = (b.length - O) * d + 1 >>> 0, at = new Uint8Array($); b[O]; ) {
      var F = t[b.charCodeAt(O)];
      if (F === 255)
        return;
      for (var nt = 0, J = $ - 1; (F !== 0 || nt < L) && J !== -1; J--, nt++)
        F += l * at[J] >>> 0, at[J] = F % 256 >>> 0, F = F / 256 >>> 0;
      if (F !== 0)
        throw new Error("Non-zero carry");
      L = nt, O++;
    }
    for (var Y = $ - L; Y !== $ && at[Y] === 0; )
      Y++;
    for (var rt = new Uint8Array(x + ($ - Y)), ot = x; Y !== $; )
      rt[ot++] = at[Y++];
    return rt;
  }
  function T(b) {
    var O = y(b);
    if (O)
      return O;
    throw new Error("Non-base" + l + " character");
  }
  return {
    encode: g,
    decodeUnsafe: y,
    decode: T
  };
}
var ZT = YT;
const QT = ZT, t1 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
var e1 = QT(t1);
const Cd = /* @__PURE__ */ XT(e1);
var th = {}, eh = {};
eh.byteLength = i1;
eh.toByteArray = o1;
eh.fromByteArray = c1;
var Tn = [], Ke = [], n1 = typeof Uint8Array < "u" ? Uint8Array : Array, Sh = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var tl = 0, r1 = Sh.length; tl < r1; ++tl)
  Tn[tl] = Sh[tl], Ke[Sh.charCodeAt(tl)] = tl;
Ke["-".charCodeAt(0)] = 62;
Ke["_".charCodeAt(0)] = 63;
function s0(n) {
  var t = n.length;
  if (t % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var e = n.indexOf("=");
  e === -1 && (e = t);
  var r = e === t ? 0 : 4 - e % 4;
  return [e, r];
}
function i1(n) {
  var t = s0(n), e = t[0], r = t[1];
  return (e + r) * 3 / 4 - r;
}
function s1(n, t, e) {
  return (t + e) * 3 / 4 - e;
}
function o1(n) {
  var t, e = s0(n), r = e[0], i = e[1], a = new n1(s1(n, r, i)), l = 0, c = i > 0 ? r - 4 : r, d;
  for (d = 0; d < c; d += 4)
    t = Ke[n.charCodeAt(d)] << 18 | Ke[n.charCodeAt(d + 1)] << 12 | Ke[n.charCodeAt(d + 2)] << 6 | Ke[n.charCodeAt(d + 3)], a[l++] = t >> 16 & 255, a[l++] = t >> 8 & 255, a[l++] = t & 255;
  return i === 2 && (t = Ke[n.charCodeAt(d)] << 2 | Ke[n.charCodeAt(d + 1)] >> 4, a[l++] = t & 255), i === 1 && (t = Ke[n.charCodeAt(d)] << 10 | Ke[n.charCodeAt(d + 1)] << 4 | Ke[n.charCodeAt(d + 2)] >> 2, a[l++] = t >> 8 & 255, a[l++] = t & 255), a;
}
function a1(n) {
  return Tn[n >> 18 & 63] + Tn[n >> 12 & 63] + Tn[n >> 6 & 63] + Tn[n & 63];
}
function u1(n, t, e) {
  for (var r, i = [], a = t; a < e; a += 3)
    r = (n[a] << 16 & 16711680) + (n[a + 1] << 8 & 65280) + (n[a + 2] & 255), i.push(a1(r));
  return i.join("");
}
function c1(n) {
  for (var t, e = n.length, r = e % 3, i = [], a = 16383, l = 0, c = e - r; l < c; l += a)
    i.push(u1(n, l, l + a > c ? c : l + a));
  return r === 1 ? (t = n[e - 1], i.push(
    Tn[t >> 2] + Tn[t << 4 & 63] + "=="
  )) : r === 2 && (t = (n[e - 2] << 8) + n[e - 1], i.push(
    Tn[t >> 10] + Tn[t >> 4 & 63] + Tn[t << 2 & 63] + "="
  )), i.join("");
}
var vp = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
vp.read = function(n, t, e, r, i) {
  var a, l, c = i * 8 - r - 1, d = (1 << c) - 1, h = d >> 1, g = -7, y = e ? i - 1 : 0, T = e ? -1 : 1, b = n[t + y];
  for (y += T, a = b & (1 << -g) - 1, b >>= -g, g += c; g > 0; a = a * 256 + n[t + y], y += T, g -= 8)
    ;
  for (l = a & (1 << -g) - 1, a >>= -g, g += r; g > 0; l = l * 256 + n[t + y], y += T, g -= 8)
    ;
  if (a === 0)
    a = 1 - h;
  else {
    if (a === d)
      return l ? NaN : (b ? -1 : 1) * (1 / 0);
    l = l + Math.pow(2, r), a = a - h;
  }
  return (b ? -1 : 1) * l * Math.pow(2, a - r);
};
vp.write = function(n, t, e, r, i, a) {
  var l, c, d, h = a * 8 - i - 1, g = (1 << h) - 1, y = g >> 1, T = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, b = r ? 0 : a - 1, O = r ? 1 : -1, x = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
  for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (c = isNaN(t) ? 1 : 0, l = g) : (l = Math.floor(Math.log(t) / Math.LN2), t * (d = Math.pow(2, -l)) < 1 && (l--, d *= 2), l + y >= 1 ? t += T / d : t += T * Math.pow(2, 1 - y), t * d >= 2 && (l++, d /= 2), l + y >= g ? (c = 0, l = g) : l + y >= 1 ? (c = (t * d - 1) * Math.pow(2, i), l = l + y) : (c = t * Math.pow(2, y - 1) * Math.pow(2, i), l = 0)); i >= 8; n[e + b] = c & 255, b += O, c /= 256, i -= 8)
    ;
  for (l = l << i | c, h += i; h > 0; n[e + b] = l & 255, b += O, l /= 256, h -= 8)
    ;
  n[e + b - O] |= x * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(n) {
  const t = eh, e = vp, r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  n.Buffer = c, n.SlowBuffer = at, n.INSPECT_MAX_BYTES = 50;
  const i = 2147483647;
  n.kMaxLength = i, c.TYPED_ARRAY_SUPPORT = a(), !c.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function a() {
    try {
      const o = new Uint8Array(1), s = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(s, Uint8Array.prototype), Object.setPrototypeOf(o, s), o.foo() === 42;
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
  function l(o) {
    if (o > i)
      throw new RangeError('The value "' + o + '" is invalid for option "size"');
    const s = new Uint8Array(o);
    return Object.setPrototypeOf(s, c.prototype), s;
  }
  function c(o, s, u) {
    if (typeof o == "number") {
      if (typeof s == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return y(o);
    }
    return d(o, s, u);
  }
  c.poolSize = 8192;
  function d(o, s, u) {
    if (typeof o == "string")
      return T(o, s);
    if (ArrayBuffer.isView(o))
      return O(o);
    if (o == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof o
      );
    if (q(o, ArrayBuffer) || o && q(o.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (q(o, SharedArrayBuffer) || o && q(o.buffer, SharedArrayBuffer)))
      return x(o, s, u);
    if (typeof o == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const p = o.valueOf && o.valueOf();
    if (p != null && p !== o)
      return c.from(p, s, u);
    const w = L(o);
    if (w)
      return w;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof o[Symbol.toPrimitive] == "function")
      return c.from(o[Symbol.toPrimitive]("string"), s, u);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof o
    );
  }
  c.from = function(o, s, u) {
    return d(o, s, u);
  }, Object.setPrototypeOf(c.prototype, Uint8Array.prototype), Object.setPrototypeOf(c, Uint8Array);
  function h(o) {
    if (typeof o != "number")
      throw new TypeError('"size" argument must be of type number');
    if (o < 0)
      throw new RangeError('The value "' + o + '" is invalid for option "size"');
  }
  function g(o, s, u) {
    return h(o), o <= 0 ? l(o) : s !== void 0 ? typeof u == "string" ? l(o).fill(s, u) : l(o).fill(s) : l(o);
  }
  c.alloc = function(o, s, u) {
    return g(o, s, u);
  };
  function y(o) {
    return h(o), l(o < 0 ? 0 : $(o) | 0);
  }
  c.allocUnsafe = function(o) {
    return y(o);
  }, c.allocUnsafeSlow = function(o) {
    return y(o);
  };
  function T(o, s) {
    if ((typeof s != "string" || s === "") && (s = "utf8"), !c.isEncoding(s))
      throw new TypeError("Unknown encoding: " + s);
    const u = F(o, s) | 0;
    let p = l(u);
    const w = p.write(o, s);
    return w !== u && (p = p.slice(0, w)), p;
  }
  function b(o) {
    const s = o.length < 0 ? 0 : $(o.length) | 0, u = l(s);
    for (let p = 0; p < s; p += 1)
      u[p] = o[p] & 255;
    return u;
  }
  function O(o) {
    if (q(o, Uint8Array)) {
      const s = new Uint8Array(o);
      return x(s.buffer, s.byteOffset, s.byteLength);
    }
    return b(o);
  }
  function x(o, s, u) {
    if (s < 0 || o.byteLength < s)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (o.byteLength < s + (u || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let p;
    return s === void 0 && u === void 0 ? p = new Uint8Array(o) : u === void 0 ? p = new Uint8Array(o, s) : p = new Uint8Array(o, s, u), Object.setPrototypeOf(p, c.prototype), p;
  }
  function L(o) {
    if (c.isBuffer(o)) {
      const s = $(o.length) | 0, u = l(s);
      return u.length === 0 || o.copy(u, 0, 0, s), u;
    }
    if (o.length !== void 0)
      return typeof o.length != "number" || tt(o.length) ? l(0) : b(o);
    if (o.type === "Buffer" && Array.isArray(o.data))
      return b(o.data);
  }
  function $(o) {
    if (o >= i)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
    return o | 0;
  }
  function at(o) {
    return +o != o && (o = 0), c.alloc(+o);
  }
  c.isBuffer = function(s) {
    return s != null && s._isBuffer === !0 && s !== c.prototype;
  }, c.compare = function(s, u) {
    if (q(s, Uint8Array) && (s = c.from(s, s.offset, s.byteLength)), q(u, Uint8Array) && (u = c.from(u, u.offset, u.byteLength)), !c.isBuffer(s) || !c.isBuffer(u))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (s === u)
      return 0;
    let p = s.length, w = u.length;
    for (let E = 0, B = Math.min(p, w); E < B; ++E)
      if (s[E] !== u[E]) {
        p = s[E], w = u[E];
        break;
      }
    return p < w ? -1 : w < p ? 1 : 0;
  }, c.isEncoding = function(s) {
    switch (String(s).toLowerCase()) {
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
  }, c.concat = function(s, u) {
    if (!Array.isArray(s))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (s.length === 0)
      return c.alloc(0);
    let p;
    if (u === void 0)
      for (u = 0, p = 0; p < s.length; ++p)
        u += s[p].length;
    const w = c.allocUnsafe(u);
    let E = 0;
    for (p = 0; p < s.length; ++p) {
      let B = s[p];
      if (q(B, Uint8Array))
        E + B.length > w.length ? (c.isBuffer(B) || (B = c.from(B)), B.copy(w, E)) : Uint8Array.prototype.set.call(
          w,
          B,
          E
        );
      else if (c.isBuffer(B))
        B.copy(w, E);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      E += B.length;
    }
    return w;
  };
  function F(o, s) {
    if (c.isBuffer(o))
      return o.length;
    if (ArrayBuffer.isView(o) || q(o, ArrayBuffer))
      return o.byteLength;
    if (typeof o != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof o
      );
    const u = o.length, p = arguments.length > 2 && arguments[2] === !0;
    if (!p && u === 0)
      return 0;
    let w = !1;
    for (; ; )
      switch (s) {
        case "ascii":
        case "latin1":
        case "binary":
          return u;
        case "utf8":
        case "utf-8":
          return D(o).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return u * 2;
        case "hex":
          return u >>> 1;
        case "base64":
          return M(o).length;
        default:
          if (w)
            return p ? -1 : D(o).length;
          s = ("" + s).toLowerCase(), w = !0;
      }
  }
  c.byteLength = F;
  function nt(o, s, u) {
    let p = !1;
    if ((s === void 0 || s < 0) && (s = 0), s > this.length || ((u === void 0 || u > this.length) && (u = this.length), u <= 0) || (u >>>= 0, s >>>= 0, u <= s))
      return "";
    for (o || (o = "utf8"); ; )
      switch (o) {
        case "hex":
          return A(this, s, u);
        case "utf8":
        case "utf-8":
          return fe(this, s, u);
        case "ascii":
          return G(this, s, u);
        case "latin1":
        case "binary":
          return v(this, s, u);
        case "base64":
          return $t(this, s, u);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return z(this, s, u);
        default:
          if (p)
            throw new TypeError("Unknown encoding: " + o);
          o = (o + "").toLowerCase(), p = !0;
      }
  }
  c.prototype._isBuffer = !0;
  function J(o, s, u) {
    const p = o[s];
    o[s] = o[u], o[u] = p;
  }
  c.prototype.swap16 = function() {
    const s = this.length;
    if (s % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let u = 0; u < s; u += 2)
      J(this, u, u + 1);
    return this;
  }, c.prototype.swap32 = function() {
    const s = this.length;
    if (s % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let u = 0; u < s; u += 4)
      J(this, u, u + 3), J(this, u + 1, u + 2);
    return this;
  }, c.prototype.swap64 = function() {
    const s = this.length;
    if (s % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let u = 0; u < s; u += 8)
      J(this, u, u + 7), J(this, u + 1, u + 6), J(this, u + 2, u + 5), J(this, u + 3, u + 4);
    return this;
  }, c.prototype.toString = function() {
    const s = this.length;
    return s === 0 ? "" : arguments.length === 0 ? fe(this, 0, s) : nt.apply(this, arguments);
  }, c.prototype.toLocaleString = c.prototype.toString, c.prototype.equals = function(s) {
    if (!c.isBuffer(s))
      throw new TypeError("Argument must be a Buffer");
    return this === s ? !0 : c.compare(this, s) === 0;
  }, c.prototype.inspect = function() {
    let s = "";
    const u = n.INSPECT_MAX_BYTES;
    return s = this.toString("hex", 0, u).replace(/(.{2})/g, "$1 ").trim(), this.length > u && (s += " ... "), "<Buffer " + s + ">";
  }, r && (c.prototype[r] = c.prototype.inspect), c.prototype.compare = function(s, u, p, w, E) {
    if (q(s, Uint8Array) && (s = c.from(s, s.offset, s.byteLength)), !c.isBuffer(s))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof s
      );
    if (u === void 0 && (u = 0), p === void 0 && (p = s ? s.length : 0), w === void 0 && (w = 0), E === void 0 && (E = this.length), u < 0 || p > s.length || w < 0 || E > this.length)
      throw new RangeError("out of range index");
    if (w >= E && u >= p)
      return 0;
    if (w >= E)
      return -1;
    if (u >= p)
      return 1;
    if (u >>>= 0, p >>>= 0, w >>>= 0, E >>>= 0, this === s)
      return 0;
    let B = E - w, st = p - u;
    const Bt = Math.min(B, st), ut = this.slice(w, E), lt = s.slice(u, p);
    for (let pt = 0; pt < Bt; ++pt)
      if (ut[pt] !== lt[pt]) {
        B = ut[pt], st = lt[pt];
        break;
      }
    return B < st ? -1 : st < B ? 1 : 0;
  };
  function Y(o, s, u, p, w) {
    if (o.length === 0)
      return -1;
    if (typeof u == "string" ? (p = u, u = 0) : u > 2147483647 ? u = 2147483647 : u < -2147483648 && (u = -2147483648), u = +u, tt(u) && (u = w ? 0 : o.length - 1), u < 0 && (u = o.length + u), u >= o.length) {
      if (w)
        return -1;
      u = o.length - 1;
    } else if (u < 0)
      if (w)
        u = 0;
      else
        return -1;
    if (typeof s == "string" && (s = c.from(s, p)), c.isBuffer(s))
      return s.length === 0 ? -1 : rt(o, s, u, p, w);
    if (typeof s == "number")
      return s = s & 255, typeof Uint8Array.prototype.indexOf == "function" ? w ? Uint8Array.prototype.indexOf.call(o, s, u) : Uint8Array.prototype.lastIndexOf.call(o, s, u) : rt(o, [s], u, p, w);
    throw new TypeError("val must be string, number or Buffer");
  }
  function rt(o, s, u, p, w) {
    let E = 1, B = o.length, st = s.length;
    if (p !== void 0 && (p = String(p).toLowerCase(), p === "ucs2" || p === "ucs-2" || p === "utf16le" || p === "utf-16le")) {
      if (o.length < 2 || s.length < 2)
        return -1;
      E = 2, B /= 2, st /= 2, u /= 2;
    }
    function Bt(lt, pt) {
      return E === 1 ? lt[pt] : lt.readUInt16BE(pt * E);
    }
    let ut;
    if (w) {
      let lt = -1;
      for (ut = u; ut < B; ut++)
        if (Bt(o, ut) === Bt(s, lt === -1 ? 0 : ut - lt)) {
          if (lt === -1 && (lt = ut), ut - lt + 1 === st)
            return lt * E;
        } else
          lt !== -1 && (ut -= ut - lt), lt = -1;
    } else
      for (u + st > B && (u = B - st), ut = u; ut >= 0; ut--) {
        let lt = !0;
        for (let pt = 0; pt < st; pt++)
          if (Bt(o, ut + pt) !== Bt(s, pt)) {
            lt = !1;
            break;
          }
        if (lt)
          return ut;
      }
    return -1;
  }
  c.prototype.includes = function(s, u, p) {
    return this.indexOf(s, u, p) !== -1;
  }, c.prototype.indexOf = function(s, u, p) {
    return Y(this, s, u, p, !0);
  }, c.prototype.lastIndexOf = function(s, u, p) {
    return Y(this, s, u, p, !1);
  };
  function ot(o, s, u, p) {
    u = Number(u) || 0;
    const w = o.length - u;
    p ? (p = Number(p), p > w && (p = w)) : p = w;
    const E = s.length;
    p > E / 2 && (p = E / 2);
    let B;
    for (B = 0; B < p; ++B) {
      const st = parseInt(s.substr(B * 2, 2), 16);
      if (tt(st))
        return B;
      o[u + B] = st;
    }
    return B;
  }
  function gt(o, s, u, p) {
    return V(D(s, o.length - u), o, u, p);
  }
  function Ft(o, s, u, p) {
    return V(H(s), o, u, p);
  }
  function Ut(o, s, u, p) {
    return V(M(s), o, u, p);
  }
  function Pt(o, s, u, p) {
    return V(Z(s, o.length - u), o, u, p);
  }
  c.prototype.write = function(s, u, p, w) {
    if (u === void 0)
      w = "utf8", p = this.length, u = 0;
    else if (p === void 0 && typeof u == "string")
      w = u, p = this.length, u = 0;
    else if (isFinite(u))
      u = u >>> 0, isFinite(p) ? (p = p >>> 0, w === void 0 && (w = "utf8")) : (w = p, p = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const E = this.length - u;
    if ((p === void 0 || p > E) && (p = E), s.length > 0 && (p < 0 || u < 0) || u > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    w || (w = "utf8");
    let B = !1;
    for (; ; )
      switch (w) {
        case "hex":
          return ot(this, s, u, p);
        case "utf8":
        case "utf-8":
          return gt(this, s, u, p);
        case "ascii":
        case "latin1":
        case "binary":
          return Ft(this, s, u, p);
        case "base64":
          return Ut(this, s, u, p);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Pt(this, s, u, p);
        default:
          if (B)
            throw new TypeError("Unknown encoding: " + w);
          w = ("" + w).toLowerCase(), B = !0;
      }
  }, c.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function $t(o, s, u) {
    return s === 0 && u === o.length ? t.fromByteArray(o) : t.fromByteArray(o.slice(s, u));
  }
  function fe(o, s, u) {
    u = Math.min(o.length, u);
    const p = [];
    let w = s;
    for (; w < u; ) {
      const E = o[w];
      let B = null, st = E > 239 ? 4 : E > 223 ? 3 : E > 191 ? 2 : 1;
      if (w + st <= u) {
        let Bt, ut, lt, pt;
        switch (st) {
          case 1:
            E < 128 && (B = E);
            break;
          case 2:
            Bt = o[w + 1], (Bt & 192) === 128 && (pt = (E & 31) << 6 | Bt & 63, pt > 127 && (B = pt));
            break;
          case 3:
            Bt = o[w + 1], ut = o[w + 2], (Bt & 192) === 128 && (ut & 192) === 128 && (pt = (E & 15) << 12 | (Bt & 63) << 6 | ut & 63, pt > 2047 && (pt < 55296 || pt > 57343) && (B = pt));
            break;
          case 4:
            Bt = o[w + 1], ut = o[w + 2], lt = o[w + 3], (Bt & 192) === 128 && (ut & 192) === 128 && (lt & 192) === 128 && (pt = (E & 15) << 18 | (Bt & 63) << 12 | (ut & 63) << 6 | lt & 63, pt > 65535 && pt < 1114112 && (B = pt));
        }
      }
      B === null ? (B = 65533, st = 1) : B > 65535 && (B -= 65536, p.push(B >>> 10 & 1023 | 55296), B = 56320 | B & 1023), p.push(B), w += st;
    }
    return Ht(p);
  }
  const Vt = 4096;
  function Ht(o) {
    const s = o.length;
    if (s <= Vt)
      return String.fromCharCode.apply(String, o);
    let u = "", p = 0;
    for (; p < s; )
      u += String.fromCharCode.apply(
        String,
        o.slice(p, p += Vt)
      );
    return u;
  }
  function G(o, s, u) {
    let p = "";
    u = Math.min(o.length, u);
    for (let w = s; w < u; ++w)
      p += String.fromCharCode(o[w] & 127);
    return p;
  }
  function v(o, s, u) {
    let p = "";
    u = Math.min(o.length, u);
    for (let w = s; w < u; ++w)
      p += String.fromCharCode(o[w]);
    return p;
  }
  function A(o, s, u) {
    const p = o.length;
    (!s || s < 0) && (s = 0), (!u || u < 0 || u > p) && (u = p);
    let w = "";
    for (let E = s; E < u; ++E)
      w += et[o[E]];
    return w;
  }
  function z(o, s, u) {
    const p = o.slice(s, u);
    let w = "";
    for (let E = 0; E < p.length - 1; E += 2)
      w += String.fromCharCode(p[E] + p[E + 1] * 256);
    return w;
  }
  c.prototype.slice = function(s, u) {
    const p = this.length;
    s = ~~s, u = u === void 0 ? p : ~~u, s < 0 ? (s += p, s < 0 && (s = 0)) : s > p && (s = p), u < 0 ? (u += p, u < 0 && (u = 0)) : u > p && (u = p), u < s && (u = s);
    const w = this.subarray(s, u);
    return Object.setPrototypeOf(w, c.prototype), w;
  };
  function P(o, s, u) {
    if (o % 1 !== 0 || o < 0)
      throw new RangeError("offset is not uint");
    if (o + s > u)
      throw new RangeError("Trying to access beyond buffer length");
  }
  c.prototype.readUintLE = c.prototype.readUIntLE = function(s, u, p) {
    s = s >>> 0, u = u >>> 0, p || P(s, u, this.length);
    let w = this[s], E = 1, B = 0;
    for (; ++B < u && (E *= 256); )
      w += this[s + B] * E;
    return w;
  }, c.prototype.readUintBE = c.prototype.readUIntBE = function(s, u, p) {
    s = s >>> 0, u = u >>> 0, p || P(s, u, this.length);
    let w = this[s + --u], E = 1;
    for (; u > 0 && (E *= 256); )
      w += this[s + --u] * E;
    return w;
  }, c.prototype.readUint8 = c.prototype.readUInt8 = function(s, u) {
    return s = s >>> 0, u || P(s, 1, this.length), this[s];
  }, c.prototype.readUint16LE = c.prototype.readUInt16LE = function(s, u) {
    return s = s >>> 0, u || P(s, 2, this.length), this[s] | this[s + 1] << 8;
  }, c.prototype.readUint16BE = c.prototype.readUInt16BE = function(s, u) {
    return s = s >>> 0, u || P(s, 2, this.length), this[s] << 8 | this[s + 1];
  }, c.prototype.readUint32LE = c.prototype.readUInt32LE = function(s, u) {
    return s = s >>> 0, u || P(s, 4, this.length), (this[s] | this[s + 1] << 8 | this[s + 2] << 16) + this[s + 3] * 16777216;
  }, c.prototype.readUint32BE = c.prototype.readUInt32BE = function(s, u) {
    return s = s >>> 0, u || P(s, 4, this.length), this[s] * 16777216 + (this[s + 1] << 16 | this[s + 2] << 8 | this[s + 3]);
  }, c.prototype.readBigUInt64LE = Q(function(s) {
    s = s >>> 0, N(s, "offset");
    const u = this[s], p = this[s + 7];
    (u === void 0 || p === void 0) && k(s, this.length - 8);
    const w = u + this[++s] * 2 ** 8 + this[++s] * 2 ** 16 + this[++s] * 2 ** 24, E = this[++s] + this[++s] * 2 ** 8 + this[++s] * 2 ** 16 + p * 2 ** 24;
    return BigInt(w) + (BigInt(E) << BigInt(32));
  }), c.prototype.readBigUInt64BE = Q(function(s) {
    s = s >>> 0, N(s, "offset");
    const u = this[s], p = this[s + 7];
    (u === void 0 || p === void 0) && k(s, this.length - 8);
    const w = u * 2 ** 24 + this[++s] * 2 ** 16 + this[++s] * 2 ** 8 + this[++s], E = this[++s] * 2 ** 24 + this[++s] * 2 ** 16 + this[++s] * 2 ** 8 + p;
    return (BigInt(w) << BigInt(32)) + BigInt(E);
  }), c.prototype.readIntLE = function(s, u, p) {
    s = s >>> 0, u = u >>> 0, p || P(s, u, this.length);
    let w = this[s], E = 1, B = 0;
    for (; ++B < u && (E *= 256); )
      w += this[s + B] * E;
    return E *= 128, w >= E && (w -= Math.pow(2, 8 * u)), w;
  }, c.prototype.readIntBE = function(s, u, p) {
    s = s >>> 0, u = u >>> 0, p || P(s, u, this.length);
    let w = u, E = 1, B = this[s + --w];
    for (; w > 0 && (E *= 256); )
      B += this[s + --w] * E;
    return E *= 128, B >= E && (B -= Math.pow(2, 8 * u)), B;
  }, c.prototype.readInt8 = function(s, u) {
    return s = s >>> 0, u || P(s, 1, this.length), this[s] & 128 ? (255 - this[s] + 1) * -1 : this[s];
  }, c.prototype.readInt16LE = function(s, u) {
    s = s >>> 0, u || P(s, 2, this.length);
    const p = this[s] | this[s + 1] << 8;
    return p & 32768 ? p | 4294901760 : p;
  }, c.prototype.readInt16BE = function(s, u) {
    s = s >>> 0, u || P(s, 2, this.length);
    const p = this[s + 1] | this[s] << 8;
    return p & 32768 ? p | 4294901760 : p;
  }, c.prototype.readInt32LE = function(s, u) {
    return s = s >>> 0, u || P(s, 4, this.length), this[s] | this[s + 1] << 8 | this[s + 2] << 16 | this[s + 3] << 24;
  }, c.prototype.readInt32BE = function(s, u) {
    return s = s >>> 0, u || P(s, 4, this.length), this[s] << 24 | this[s + 1] << 16 | this[s + 2] << 8 | this[s + 3];
  }, c.prototype.readBigInt64LE = Q(function(s) {
    s = s >>> 0, N(s, "offset");
    const u = this[s], p = this[s + 7];
    (u === void 0 || p === void 0) && k(s, this.length - 8);
    const w = this[s + 4] + this[s + 5] * 2 ** 8 + this[s + 6] * 2 ** 16 + (p << 24);
    return (BigInt(w) << BigInt(32)) + BigInt(u + this[++s] * 2 ** 8 + this[++s] * 2 ** 16 + this[++s] * 2 ** 24);
  }), c.prototype.readBigInt64BE = Q(function(s) {
    s = s >>> 0, N(s, "offset");
    const u = this[s], p = this[s + 7];
    (u === void 0 || p === void 0) && k(s, this.length - 8);
    const w = (u << 24) + // Overflow
    this[++s] * 2 ** 16 + this[++s] * 2 ** 8 + this[++s];
    return (BigInt(w) << BigInt(32)) + BigInt(this[++s] * 2 ** 24 + this[++s] * 2 ** 16 + this[++s] * 2 ** 8 + p);
  }), c.prototype.readFloatLE = function(s, u) {
    return s = s >>> 0, u || P(s, 4, this.length), e.read(this, s, !0, 23, 4);
  }, c.prototype.readFloatBE = function(s, u) {
    return s = s >>> 0, u || P(s, 4, this.length), e.read(this, s, !1, 23, 4);
  }, c.prototype.readDoubleLE = function(s, u) {
    return s = s >>> 0, u || P(s, 8, this.length), e.read(this, s, !0, 52, 8);
  }, c.prototype.readDoubleBE = function(s, u) {
    return s = s >>> 0, u || P(s, 8, this.length), e.read(this, s, !1, 52, 8);
  };
  function _(o, s, u, p, w, E) {
    if (!c.isBuffer(o))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (s > w || s < E)
      throw new RangeError('"value" argument is out of bounds');
    if (u + p > o.length)
      throw new RangeError("Index out of range");
  }
  c.prototype.writeUintLE = c.prototype.writeUIntLE = function(s, u, p, w) {
    if (s = +s, u = u >>> 0, p = p >>> 0, !w) {
      const st = Math.pow(2, 8 * p) - 1;
      _(this, s, u, p, st, 0);
    }
    let E = 1, B = 0;
    for (this[u] = s & 255; ++B < p && (E *= 256); )
      this[u + B] = s / E & 255;
    return u + p;
  }, c.prototype.writeUintBE = c.prototype.writeUIntBE = function(s, u, p, w) {
    if (s = +s, u = u >>> 0, p = p >>> 0, !w) {
      const st = Math.pow(2, 8 * p) - 1;
      _(this, s, u, p, st, 0);
    }
    let E = p - 1, B = 1;
    for (this[u + E] = s & 255; --E >= 0 && (B *= 256); )
      this[u + E] = s / B & 255;
    return u + p;
  }, c.prototype.writeUint8 = c.prototype.writeUInt8 = function(s, u, p) {
    return s = +s, u = u >>> 0, p || _(this, s, u, 1, 255, 0), this[u] = s & 255, u + 1;
  }, c.prototype.writeUint16LE = c.prototype.writeUInt16LE = function(s, u, p) {
    return s = +s, u = u >>> 0, p || _(this, s, u, 2, 65535, 0), this[u] = s & 255, this[u + 1] = s >>> 8, u + 2;
  }, c.prototype.writeUint16BE = c.prototype.writeUInt16BE = function(s, u, p) {
    return s = +s, u = u >>> 0, p || _(this, s, u, 2, 65535, 0), this[u] = s >>> 8, this[u + 1] = s & 255, u + 2;
  }, c.prototype.writeUint32LE = c.prototype.writeUInt32LE = function(s, u, p) {
    return s = +s, u = u >>> 0, p || _(this, s, u, 4, 4294967295, 0), this[u + 3] = s >>> 24, this[u + 2] = s >>> 16, this[u + 1] = s >>> 8, this[u] = s & 255, u + 4;
  }, c.prototype.writeUint32BE = c.prototype.writeUInt32BE = function(s, u, p) {
    return s = +s, u = u >>> 0, p || _(this, s, u, 4, 4294967295, 0), this[u] = s >>> 24, this[u + 1] = s >>> 16, this[u + 2] = s >>> 8, this[u + 3] = s & 255, u + 4;
  };
  function it(o, s, u, p, w) {
    Kt(s, p, w, o, u, 7);
    let E = Number(s & BigInt(4294967295));
    o[u++] = E, E = E >> 8, o[u++] = E, E = E >> 8, o[u++] = E, E = E >> 8, o[u++] = E;
    let B = Number(s >> BigInt(32) & BigInt(4294967295));
    return o[u++] = B, B = B >> 8, o[u++] = B, B = B >> 8, o[u++] = B, B = B >> 8, o[u++] = B, u;
  }
  function ft(o, s, u, p, w) {
    Kt(s, p, w, o, u, 7);
    let E = Number(s & BigInt(4294967295));
    o[u + 7] = E, E = E >> 8, o[u + 6] = E, E = E >> 8, o[u + 5] = E, E = E >> 8, o[u + 4] = E;
    let B = Number(s >> BigInt(32) & BigInt(4294967295));
    return o[u + 3] = B, B = B >> 8, o[u + 2] = B, B = B >> 8, o[u + 1] = B, B = B >> 8, o[u] = B, u + 8;
  }
  c.prototype.writeBigUInt64LE = Q(function(s, u = 0) {
    return it(this, s, u, BigInt(0), BigInt("0xffffffffffffffff"));
  }), c.prototype.writeBigUInt64BE = Q(function(s, u = 0) {
    return ft(this, s, u, BigInt(0), BigInt("0xffffffffffffffff"));
  }), c.prototype.writeIntLE = function(s, u, p, w) {
    if (s = +s, u = u >>> 0, !w) {
      const Bt = Math.pow(2, 8 * p - 1);
      _(this, s, u, p, Bt - 1, -Bt);
    }
    let E = 0, B = 1, st = 0;
    for (this[u] = s & 255; ++E < p && (B *= 256); )
      s < 0 && st === 0 && this[u + E - 1] !== 0 && (st = 1), this[u + E] = (s / B >> 0) - st & 255;
    return u + p;
  }, c.prototype.writeIntBE = function(s, u, p, w) {
    if (s = +s, u = u >>> 0, !w) {
      const Bt = Math.pow(2, 8 * p - 1);
      _(this, s, u, p, Bt - 1, -Bt);
    }
    let E = p - 1, B = 1, st = 0;
    for (this[u + E] = s & 255; --E >= 0 && (B *= 256); )
      s < 0 && st === 0 && this[u + E + 1] !== 0 && (st = 1), this[u + E] = (s / B >> 0) - st & 255;
    return u + p;
  }, c.prototype.writeInt8 = function(s, u, p) {
    return s = +s, u = u >>> 0, p || _(this, s, u, 1, 127, -128), s < 0 && (s = 255 + s + 1), this[u] = s & 255, u + 1;
  }, c.prototype.writeInt16LE = function(s, u, p) {
    return s = +s, u = u >>> 0, p || _(this, s, u, 2, 32767, -32768), this[u] = s & 255, this[u + 1] = s >>> 8, u + 2;
  }, c.prototype.writeInt16BE = function(s, u, p) {
    return s = +s, u = u >>> 0, p || _(this, s, u, 2, 32767, -32768), this[u] = s >>> 8, this[u + 1] = s & 255, u + 2;
  }, c.prototype.writeInt32LE = function(s, u, p) {
    return s = +s, u = u >>> 0, p || _(this, s, u, 4, 2147483647, -2147483648), this[u] = s & 255, this[u + 1] = s >>> 8, this[u + 2] = s >>> 16, this[u + 3] = s >>> 24, u + 4;
  }, c.prototype.writeInt32BE = function(s, u, p) {
    return s = +s, u = u >>> 0, p || _(this, s, u, 4, 2147483647, -2147483648), s < 0 && (s = 4294967295 + s + 1), this[u] = s >>> 24, this[u + 1] = s >>> 16, this[u + 2] = s >>> 8, this[u + 3] = s & 255, u + 4;
  }, c.prototype.writeBigInt64LE = Q(function(s, u = 0) {
    return it(this, s, u, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), c.prototype.writeBigInt64BE = Q(function(s, u = 0) {
    return ft(this, s, u, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function mt(o, s, u, p, w, E) {
    if (u + p > o.length)
      throw new RangeError("Index out of range");
    if (u < 0)
      throw new RangeError("Index out of range");
  }
  function ct(o, s, u, p, w) {
    return s = +s, u = u >>> 0, w || mt(o, s, u, 4), e.write(o, s, u, p, 23, 4), u + 4;
  }
  c.prototype.writeFloatLE = function(s, u, p) {
    return ct(this, s, u, !0, p);
  }, c.prototype.writeFloatBE = function(s, u, p) {
    return ct(this, s, u, !1, p);
  };
  function dt(o, s, u, p, w) {
    return s = +s, u = u >>> 0, w || mt(o, s, u, 8), e.write(o, s, u, p, 52, 8), u + 8;
  }
  c.prototype.writeDoubleLE = function(s, u, p) {
    return dt(this, s, u, !0, p);
  }, c.prototype.writeDoubleBE = function(s, u, p) {
    return dt(this, s, u, !1, p);
  }, c.prototype.copy = function(s, u, p, w) {
    if (!c.isBuffer(s))
      throw new TypeError("argument should be a Buffer");
    if (p || (p = 0), !w && w !== 0 && (w = this.length), u >= s.length && (u = s.length), u || (u = 0), w > 0 && w < p && (w = p), w === p || s.length === 0 || this.length === 0)
      return 0;
    if (u < 0)
      throw new RangeError("targetStart out of bounds");
    if (p < 0 || p >= this.length)
      throw new RangeError("Index out of range");
    if (w < 0)
      throw new RangeError("sourceEnd out of bounds");
    w > this.length && (w = this.length), s.length - u < w - p && (w = s.length - u + p);
    const E = w - p;
    return this === s && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(u, p, w) : Uint8Array.prototype.set.call(
      s,
      this.subarray(p, w),
      u
    ), E;
  }, c.prototype.fill = function(s, u, p, w) {
    if (typeof s == "string") {
      if (typeof u == "string" ? (w = u, u = 0, p = this.length) : typeof p == "string" && (w = p, p = this.length), w !== void 0 && typeof w != "string")
        throw new TypeError("encoding must be a string");
      if (typeof w == "string" && !c.isEncoding(w))
        throw new TypeError("Unknown encoding: " + w);
      if (s.length === 1) {
        const B = s.charCodeAt(0);
        (w === "utf8" && B < 128 || w === "latin1") && (s = B);
      }
    } else
      typeof s == "number" ? s = s & 255 : typeof s == "boolean" && (s = Number(s));
    if (u < 0 || this.length < u || this.length < p)
      throw new RangeError("Out of range index");
    if (p <= u)
      return this;
    u = u >>> 0, p = p === void 0 ? this.length : p >>> 0, s || (s = 0);
    let E;
    if (typeof s == "number")
      for (E = u; E < p; ++E)
        this[E] = s;
    else {
      const B = c.isBuffer(s) ? s : c.from(s, w), st = B.length;
      if (st === 0)
        throw new TypeError('The value "' + s + '" is invalid for argument "value"');
      for (E = 0; E < p - u; ++E)
        this[E + u] = B[E % st];
    }
    return this;
  };
  const yt = {};
  function Lt(o, s, u) {
    yt[o] = class extends u {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: s.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${o}]`, this.stack, delete this.name;
      }
      get code() {
        return o;
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
        return `${this.name} [${o}]: ${this.message}`;
      }
    };
  }
  Lt(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(o) {
      return o ? `${o} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), Lt(
    "ERR_INVALID_ARG_TYPE",
    function(o, s) {
      return `The "${o}" argument must be of type number. Received type ${typeof s}`;
    },
    TypeError
  ), Lt(
    "ERR_OUT_OF_RANGE",
    function(o, s, u) {
      let p = `The value of "${o}" is out of range.`, w = u;
      return Number.isInteger(u) && Math.abs(u) > 2 ** 32 ? w = xt(String(u)) : typeof u == "bigint" && (w = String(u), (u > BigInt(2) ** BigInt(32) || u < -(BigInt(2) ** BigInt(32))) && (w = xt(w)), w += "n"), p += ` It must be ${s}. Received ${w}`, p;
    },
    RangeError
  );
  function xt(o) {
    let s = "", u = o.length;
    const p = o[0] === "-" ? 1 : 0;
    for (; u >= p + 4; u -= 3)
      s = `_${o.slice(u - 3, u)}${s}`;
    return `${o.slice(0, u)}${s}`;
  }
  function qt(o, s, u) {
    N(s, "offset"), (o[s] === void 0 || o[s + u] === void 0) && k(s, o.length - (u + 1));
  }
  function Kt(o, s, u, p, w, E) {
    if (o > u || o < s) {
      const B = typeof s == "bigint" ? "n" : "";
      let st;
      throw E > 3 ? s === 0 || s === BigInt(0) ? st = `>= 0${B} and < 2${B} ** ${(E + 1) * 8}${B}` : st = `>= -(2${B} ** ${(E + 1) * 8 - 1}${B}) and < 2 ** ${(E + 1) * 8 - 1}${B}` : st = `>= ${s}${B} and <= ${u}${B}`, new yt.ERR_OUT_OF_RANGE("value", st, o);
    }
    qt(p, w, E);
  }
  function N(o, s) {
    if (typeof o != "number")
      throw new yt.ERR_INVALID_ARG_TYPE(s, "number", o);
  }
  function k(o, s, u) {
    throw Math.floor(o) !== o ? (N(o, u), new yt.ERR_OUT_OF_RANGE(u || "offset", "an integer", o)) : s < 0 ? new yt.ERR_BUFFER_OUT_OF_BOUNDS() : new yt.ERR_OUT_OF_RANGE(
      u || "offset",
      `>= ${u ? 1 : 0} and <= ${s}`,
      o
    );
  }
  const U = /[^+/0-9A-Za-z-_]/g;
  function C(o) {
    if (o = o.split("=")[0], o = o.trim().replace(U, ""), o.length < 2)
      return "";
    for (; o.length % 4 !== 0; )
      o = o + "=";
    return o;
  }
  function D(o, s) {
    s = s || 1 / 0;
    let u;
    const p = o.length;
    let w = null;
    const E = [];
    for (let B = 0; B < p; ++B) {
      if (u = o.charCodeAt(B), u > 55295 && u < 57344) {
        if (!w) {
          if (u > 56319) {
            (s -= 3) > -1 && E.push(239, 191, 189);
            continue;
          } else if (B + 1 === p) {
            (s -= 3) > -1 && E.push(239, 191, 189);
            continue;
          }
          w = u;
          continue;
        }
        if (u < 56320) {
          (s -= 3) > -1 && E.push(239, 191, 189), w = u;
          continue;
        }
        u = (w - 55296 << 10 | u - 56320) + 65536;
      } else
        w && (s -= 3) > -1 && E.push(239, 191, 189);
      if (w = null, u < 128) {
        if ((s -= 1) < 0)
          break;
        E.push(u);
      } else if (u < 2048) {
        if ((s -= 2) < 0)
          break;
        E.push(
          u >> 6 | 192,
          u & 63 | 128
        );
      } else if (u < 65536) {
        if ((s -= 3) < 0)
          break;
        E.push(
          u >> 12 | 224,
          u >> 6 & 63 | 128,
          u & 63 | 128
        );
      } else if (u < 1114112) {
        if ((s -= 4) < 0)
          break;
        E.push(
          u >> 18 | 240,
          u >> 12 & 63 | 128,
          u >> 6 & 63 | 128,
          u & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return E;
  }
  function H(o) {
    const s = [];
    for (let u = 0; u < o.length; ++u)
      s.push(o.charCodeAt(u) & 255);
    return s;
  }
  function Z(o, s) {
    let u, p, w;
    const E = [];
    for (let B = 0; B < o.length && !((s -= 2) < 0); ++B)
      u = o.charCodeAt(B), p = u >> 8, w = u % 256, E.push(w), E.push(p);
    return E;
  }
  function M(o) {
    return t.toByteArray(C(o));
  }
  function V(o, s, u, p) {
    let w;
    for (w = 0; w < p && !(w + u >= s.length || w >= o.length); ++w)
      s[w + u] = o[w];
    return w;
  }
  function q(o, s) {
    return o instanceof s || o != null && o.constructor != null && o.constructor.name != null && o.constructor.name === s.name;
  }
  function tt(o) {
    return o !== o;
  }
  const et = function() {
    const o = "0123456789abcdef", s = new Array(256);
    for (let u = 0; u < 16; ++u) {
      const p = u * 16;
      for (let w = 0; w < 16; ++w)
        s[p + w] = o[u] + o[w];
    }
    return s;
  }();
  function Q(o) {
    return typeof BigInt > "u" ? ht : o;
  }
  function ht() {
    throw new Error("BigInt not supported");
  }
})(th);
function l1(n, ...t) {
  if (!(n instanceof Uint8Array))
    throw new Error("Expected Uint8Array");
  if (t.length > 0 && !t.includes(n.length))
    throw new Error(`Expected Uint8Array of length ${t}, not of length=${n.length}`);
}
function Ag(n, t = !0) {
  if (n.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (t && n.finished)
    throw new Error("Hash#digest() has already been called");
}
function f1(n, t) {
  l1(n);
  const e = t.outputLen;
  if (n.length < e)
    throw new Error(`digestInto() expects output buffer of length at least ${e}`);
}
const Ih = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const o0 = (n) => n instanceof Uint8Array, Oh = (n) => new DataView(n.buffer, n.byteOffset, n.byteLength), dn = (n, t) => n << 32 - t | n >>> t, m1 = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!m1)
  throw new Error("Non little-endian hardware is not supported");
function a0(n) {
  if (typeof n != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof n}`);
  return new Uint8Array(new TextEncoder().encode(n));
}
function u0(n) {
  if (typeof n == "string" && (n = a0(n)), !o0(n))
    throw new Error(`expected Uint8Array, got ${typeof n}`);
  return n;
}
function d1(...n) {
  const t = new Uint8Array(n.reduce((r, i) => r + i.length, 0));
  let e = 0;
  return n.forEach((r) => {
    if (!o0(r))
      throw new Error("Uint8Array expected");
    t.set(r, e), e += r.length;
  }), t;
}
class h1 {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
}
function c0(n) {
  const t = (r) => n().update(u0(r)).digest(), e = n();
  return t.outputLen = e.outputLen, t.blockLen = e.blockLen, t.create = () => n(), t;
}
function p1(n = 32) {
  if (Ih && typeof Ih.getRandomValues == "function")
    return Ih.getRandomValues(new Uint8Array(n));
  throw new Error("crypto.getRandomValues must be defined");
}
function g1(n, t, e, r) {
  if (typeof n.setBigUint64 == "function")
    return n.setBigUint64(t, e, r);
  const i = BigInt(32), a = BigInt(4294967295), l = Number(e >> i & a), c = Number(e & a), d = r ? 4 : 0, h = r ? 0 : 4;
  n.setUint32(t + d, l, r), n.setUint32(t + h, c, r);
}
class l0 extends h1 {
  constructor(t, e, r, i) {
    super(), this.blockLen = t, this.outputLen = e, this.padOffset = r, this.isLE = i, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(t), this.view = Oh(this.buffer);
  }
  update(t) {
    Ag(this);
    const { view: e, buffer: r, blockLen: i } = this;
    t = u0(t);
    const a = t.length;
    for (let l = 0; l < a; ) {
      const c = Math.min(i - this.pos, a - l);
      if (c === i) {
        const d = Oh(t);
        for (; i <= a - l; l += i)
          this.process(d, l);
        continue;
      }
      r.set(t.subarray(l, l + c), this.pos), this.pos += c, l += c, this.pos === i && (this.process(e, 0), this.pos = 0);
    }
    return this.length += t.length, this.roundClean(), this;
  }
  digestInto(t) {
    Ag(this), f1(t, this), this.finished = !0;
    const { buffer: e, view: r, blockLen: i, isLE: a } = this;
    let { pos: l } = this;
    e[l++] = 128, this.buffer.subarray(l).fill(0), this.padOffset > i - l && (this.process(r, 0), l = 0);
    for (let y = l; y < i; y++)
      e[y] = 0;
    g1(r, i - 8, BigInt(this.length * 8), a), this.process(r, 0);
    const c = Oh(t), d = this.outputLen;
    if (d % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const h = d / 4, g = this.get();
    if (h > g.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let y = 0; y < h; y++)
      c.setUint32(4 * y, g[y], a);
  }
  digest() {
    const { buffer: t, outputLen: e } = this;
    this.digestInto(t);
    const r = t.slice(0, e);
    return this.destroy(), r;
  }
  _cloneInto(t) {
    t || (t = new this.constructor()), t.set(...this.get());
    const { blockLen: e, buffer: r, length: i, finished: a, destroyed: l, pos: c } = this;
    return t.length = i, t.pos = c, t.finished = a, t.destroyed = l, i % e && t.buffer.set(r), t;
  }
}
const ld = /* @__PURE__ */ BigInt(2 ** 32 - 1), Wh = /* @__PURE__ */ BigInt(32);
function f0(n, t = !1) {
  return t ? { h: Number(n & ld), l: Number(n >> Wh & ld) } : { h: Number(n >> Wh & ld) | 0, l: Number(n & ld) | 0 };
}
function y1(n, t = !1) {
  let e = new Uint32Array(n.length), r = new Uint32Array(n.length);
  for (let i = 0; i < n.length; i++) {
    const { h: a, l } = f0(n[i], t);
    [e[i], r[i]] = [a, l];
  }
  return [e, r];
}
const w1 = (n, t) => BigInt(n >>> 0) << Wh | BigInt(t >>> 0), T1 = (n, t, e) => n >>> e, N1 = (n, t, e) => n << 32 - e | t >>> e, E1 = (n, t, e) => n >>> e | t << 32 - e, b1 = (n, t, e) => n << 32 - e | t >>> e, k1 = (n, t, e) => n << 64 - e | t >>> e - 32, B1 = (n, t, e) => n >>> e - 32 | t << 64 - e, S1 = (n, t) => t, I1 = (n, t) => n, O1 = (n, t, e) => n << e | t >>> 32 - e, v1 = (n, t, e) => t << e | n >>> 32 - e, J1 = (n, t, e) => t << e - 32 | n >>> 64 - e, x1 = (n, t, e) => n << e - 32 | t >>> 64 - e;
function A1(n, t, e, r) {
  const i = (t >>> 0) + (r >>> 0);
  return { h: n + e + (i / 2 ** 32 | 0) | 0, l: i | 0 };
}
const U1 = (n, t, e) => (n >>> 0) + (t >>> 0) + (e >>> 0), L1 = (n, t, e, r) => t + e + r + (n / 2 ** 32 | 0) | 0, F1 = (n, t, e, r) => (n >>> 0) + (t >>> 0) + (e >>> 0) + (r >>> 0), q1 = (n, t, e, r, i) => t + e + r + i + (n / 2 ** 32 | 0) | 0, D1 = (n, t, e, r, i) => (n >>> 0) + (t >>> 0) + (e >>> 0) + (r >>> 0) + (i >>> 0), P1 = (n, t, e, r, i, a) => t + e + r + i + a + (n / 2 ** 32 | 0) | 0, C1 = {
  fromBig: f0,
  split: y1,
  toBig: w1,
  shrSH: T1,
  shrSL: N1,
  rotrSH: E1,
  rotrSL: b1,
  rotrBH: k1,
  rotrBL: B1,
  rotr32H: S1,
  rotr32L: I1,
  rotlSH: O1,
  rotlSL: v1,
  rotlBH: J1,
  rotlBL: x1,
  add: A1,
  add3L: U1,
  add3H: L1,
  add4L: F1,
  add4H: q1,
  add5H: P1,
  add5L: D1
}, vt = C1, [K1, R1] = /* @__PURE__ */ (() => vt.split([
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
].map((n) => BigInt(n))))(), Va = /* @__PURE__ */ new Uint32Array(80), _a = /* @__PURE__ */ new Uint32Array(80);
class M1 extends l0 {
  constructor() {
    super(128, 64, 16, !1), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209;
  }
  // prettier-ignore
  get() {
    const { Ah: t, Al: e, Bh: r, Bl: i, Ch: a, Cl: l, Dh: c, Dl: d, Eh: h, El: g, Fh: y, Fl: T, Gh: b, Gl: O, Hh: x, Hl: L } = this;
    return [t, e, r, i, a, l, c, d, h, g, y, T, b, O, x, L];
  }
  // prettier-ignore
  set(t, e, r, i, a, l, c, d, h, g, y, T, b, O, x, L) {
    this.Ah = t | 0, this.Al = e | 0, this.Bh = r | 0, this.Bl = i | 0, this.Ch = a | 0, this.Cl = l | 0, this.Dh = c | 0, this.Dl = d | 0, this.Eh = h | 0, this.El = g | 0, this.Fh = y | 0, this.Fl = T | 0, this.Gh = b | 0, this.Gl = O | 0, this.Hh = x | 0, this.Hl = L | 0;
  }
  process(t, e) {
    for (let F = 0; F < 16; F++, e += 4)
      Va[F] = t.getUint32(e), _a[F] = t.getUint32(e += 4);
    for (let F = 16; F < 80; F++) {
      const nt = Va[F - 15] | 0, J = _a[F - 15] | 0, Y = vt.rotrSH(nt, J, 1) ^ vt.rotrSH(nt, J, 8) ^ vt.shrSH(nt, J, 7), rt = vt.rotrSL(nt, J, 1) ^ vt.rotrSL(nt, J, 8) ^ vt.shrSL(nt, J, 7), ot = Va[F - 2] | 0, gt = _a[F - 2] | 0, Ft = vt.rotrSH(ot, gt, 19) ^ vt.rotrBH(ot, gt, 61) ^ vt.shrSH(ot, gt, 6), Ut = vt.rotrSL(ot, gt, 19) ^ vt.rotrBL(ot, gt, 61) ^ vt.shrSL(ot, gt, 6), Pt = vt.add4L(rt, Ut, _a[F - 7], _a[F - 16]), $t = vt.add4H(Pt, Y, Ft, Va[F - 7], Va[F - 16]);
      Va[F] = $t | 0, _a[F] = Pt | 0;
    }
    let { Ah: r, Al: i, Bh: a, Bl: l, Ch: c, Cl: d, Dh: h, Dl: g, Eh: y, El: T, Fh: b, Fl: O, Gh: x, Gl: L, Hh: $, Hl: at } = this;
    for (let F = 0; F < 80; F++) {
      const nt = vt.rotrSH(y, T, 14) ^ vt.rotrSH(y, T, 18) ^ vt.rotrBH(y, T, 41), J = vt.rotrSL(y, T, 14) ^ vt.rotrSL(y, T, 18) ^ vt.rotrBL(y, T, 41), Y = y & b ^ ~y & x, rt = T & O ^ ~T & L, ot = vt.add5L(at, J, rt, R1[F], _a[F]), gt = vt.add5H(ot, $, nt, Y, K1[F], Va[F]), Ft = ot | 0, Ut = vt.rotrSH(r, i, 28) ^ vt.rotrBH(r, i, 34) ^ vt.rotrBH(r, i, 39), Pt = vt.rotrSL(r, i, 28) ^ vt.rotrBL(r, i, 34) ^ vt.rotrBL(r, i, 39), $t = r & a ^ r & c ^ a & c, fe = i & l ^ i & d ^ l & d;
      $ = x | 0, at = L | 0, x = b | 0, L = O | 0, b = y | 0, O = T | 0, { h: y, l: T } = vt.add(h | 0, g | 0, gt | 0, Ft | 0), h = c | 0, g = d | 0, c = a | 0, d = l | 0, a = r | 0, l = i | 0;
      const Vt = vt.add3L(Ft, Pt, fe);
      r = vt.add3H(Vt, gt, Ut, $t), i = Vt | 0;
    }
    ({ h: r, l: i } = vt.add(this.Ah | 0, this.Al | 0, r | 0, i | 0)), { h: a, l } = vt.add(this.Bh | 0, this.Bl | 0, a | 0, l | 0), { h: c, l: d } = vt.add(this.Ch | 0, this.Cl | 0, c | 0, d | 0), { h, l: g } = vt.add(this.Dh | 0, this.Dl | 0, h | 0, g | 0), { h: y, l: T } = vt.add(this.Eh | 0, this.El | 0, y | 0, T | 0), { h: b, l: O } = vt.add(this.Fh | 0, this.Fl | 0, b | 0, O | 0), { h: x, l: L } = vt.add(this.Gh | 0, this.Gl | 0, x | 0, L | 0), { h: $, l: at } = vt.add(this.Hh | 0, this.Hl | 0, $ | 0, at | 0), this.set(r, i, a, l, c, d, h, g, y, T, b, O, x, L, $, at);
  }
  roundClean() {
    Va.fill(0), _a.fill(0);
  }
  destroy() {
    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
const m0 = /* @__PURE__ */ c0(() => new M1());
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
BigInt(0);
const $1 = BigInt(1), V1 = BigInt(2), nh = (n) => n instanceof Uint8Array, _1 = /* @__PURE__ */ Array.from({ length: 256 }, (n, t) => t.toString(16).padStart(2, "0"));
function Jp(n) {
  if (!nh(n))
    throw new Error("Uint8Array expected");
  let t = "";
  for (let e = 0; e < n.length; e++)
    t += _1[n[e]];
  return t;
}
function d0(n) {
  if (typeof n != "string")
    throw new Error("hex string expected, got " + typeof n);
  return BigInt(n === "" ? "0" : `0x${n}`);
}
function h0(n) {
  if (typeof n != "string")
    throw new Error("hex string expected, got " + typeof n);
  const t = n.length;
  if (t % 2)
    throw new Error("padded hex string expected, got unpadded hex of length " + t);
  const e = new Uint8Array(t / 2);
  for (let r = 0; r < e.length; r++) {
    const i = r * 2, a = n.slice(i, i + 2), l = Number.parseInt(a, 16);
    if (Number.isNaN(l) || l < 0)
      throw new Error("Invalid byte sequence");
    e[r] = l;
  }
  return e;
}
function H1(n) {
  return d0(Jp(n));
}
function Sd(n) {
  if (!nh(n))
    throw new Error("Uint8Array expected");
  return d0(Jp(Uint8Array.from(n).reverse()));
}
function p0(n, t) {
  return h0(n.toString(16).padStart(t * 2, "0"));
}
function Gh(n, t) {
  return p0(n, t).reverse();
}
function Ha(n, t, e) {
  let r;
  if (typeof t == "string")
    try {
      r = h0(t);
    } catch (a) {
      throw new Error(`${n} must be valid hex string, got "${t}". Cause: ${a}`);
    }
  else if (nh(t))
    r = Uint8Array.from(t);
  else
    throw new Error(`${n} must be hex string or Uint8Array`);
  const i = r.length;
  if (typeof e == "number" && i !== e)
    throw new Error(`${n} expected ${e} bytes, got ${i}`);
  return r;
}
function Ug(...n) {
  const t = new Uint8Array(n.reduce((r, i) => r + i.length, 0));
  let e = 0;
  return n.forEach((r) => {
    if (!nh(r))
      throw new Error("Uint8Array expected");
    t.set(r, e), e += r.length;
  }), t;
}
const z1 = (n) => (V1 << BigInt(n - 1)) - $1, j1 = {
  bigint: (n) => typeof n == "bigint",
  function: (n) => typeof n == "function",
  boolean: (n) => typeof n == "boolean",
  string: (n) => typeof n == "string",
  stringOrUint8Array: (n) => typeof n == "string" || n instanceof Uint8Array,
  isSafeInteger: (n) => Number.isSafeInteger(n),
  array: (n) => Array.isArray(n),
  field: (n, t) => t.Fp.isValid(n),
  hash: (n) => typeof n == "function" && Number.isSafeInteger(n.outputLen)
};
function xp(n, t, e = {}) {
  const r = (i, a, l) => {
    const c = j1[a];
    if (typeof c != "function")
      throw new Error(`Invalid validator "${a}", expected function`);
    const d = n[i];
    if (!(l && d === void 0) && !c(d, n))
      throw new Error(`Invalid param ${String(i)}=${d} (${typeof d}), expected ${a}`);
  };
  for (const [i, a] of Object.entries(t))
    r(i, a, !1);
  for (const [i, a] of Object.entries(e))
    r(i, a, !0);
  return n;
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const ae = BigInt(0), Gt = BigInt(1), Rc = BigInt(2), W1 = BigInt(3), Xh = BigInt(4), Lg = BigInt(5), Fg = BigInt(8);
BigInt(9);
BigInt(16);
function Qt(n, t) {
  const e = n % t;
  return e >= ae ? e : t + e;
}
function G1(n, t, e) {
  if (e <= ae || t < ae)
    throw new Error("Expected power/modulo > 0");
  if (e === Gt)
    return ae;
  let r = Gt;
  for (; t > ae; )
    t & Gt && (r = r * n % e), n = n * n % e, t >>= Gt;
  return r;
}
function hn(n, t, e) {
  let r = n;
  for (; t-- > ae; )
    r *= r, r %= e;
  return r;
}
function qg(n, t) {
  if (n === ae || t <= ae)
    throw new Error(`invert: expected positive integers, got n=${n} mod=${t}`);
  let e = Qt(n, t), r = t, i = ae, a = Gt;
  for (; e !== ae; ) {
    const c = r / e, d = r % e, h = i - a * c;
    r = e, e = d, i = a, a = h;
  }
  if (r !== Gt)
    throw new Error("invert: does not exist");
  return Qt(i, t);
}
function X1(n) {
  const t = (n - Gt) / Rc;
  let e, r, i;
  for (e = n - Gt, r = 0; e % Rc === ae; e /= Rc, r++)
    ;
  for (i = Rc; i < n && G1(i, t, n) !== n - Gt; i++)
    ;
  if (r === 1) {
    const l = (n + Gt) / Xh;
    return function(d, h) {
      const g = d.pow(h, l);
      if (!d.eql(d.sqr(g), h))
        throw new Error("Cannot find square root");
      return g;
    };
  }
  const a = (e + Gt) / Rc;
  return function(c, d) {
    if (c.pow(d, t) === c.neg(c.ONE))
      throw new Error("Cannot find square root");
    let h = r, g = c.pow(c.mul(c.ONE, i), e), y = c.pow(d, a), T = c.pow(d, e);
    for (; !c.eql(T, c.ONE); ) {
      if (c.eql(T, c.ZERO))
        return c.ZERO;
      let b = 1;
      for (let x = c.sqr(T); b < h && !c.eql(x, c.ONE); b++)
        x = c.sqr(x);
      const O = c.pow(g, Gt << BigInt(h - b - 1));
      g = c.sqr(O), y = c.mul(y, O), T = c.mul(T, g), h = b;
    }
    return y;
  };
}
function Y1(n) {
  if (n % Xh === W1) {
    const t = (n + Gt) / Xh;
    return function(r, i) {
      const a = r.pow(i, t);
      if (!r.eql(r.sqr(a), i))
        throw new Error("Cannot find square root");
      return a;
    };
  }
  if (n % Fg === Lg) {
    const t = (n - Lg) / Fg;
    return function(r, i) {
      const a = r.mul(i, Rc), l = r.pow(a, t), c = r.mul(i, l), d = r.mul(r.mul(c, Rc), l), h = r.mul(c, r.sub(d, r.ONE));
      if (!r.eql(r.sqr(h), i))
        throw new Error("Cannot find square root");
      return h;
    };
  }
  return X1(n);
}
const Z1 = (n, t) => (Qt(n, t) & Gt) === Gt, Q1 = [
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
function tN(n) {
  const t = {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "isSafeInteger",
    BITS: "isSafeInteger"
  }, e = Q1.reduce((r, i) => (r[i] = "function", r), t);
  return xp(n, e);
}
function eN(n, t, e) {
  if (e < ae)
    throw new Error("Expected power > 0");
  if (e === ae)
    return n.ONE;
  if (e === Gt)
    return t;
  let r = n.ONE, i = t;
  for (; e > ae; )
    e & Gt && (r = n.mul(r, i)), i = n.sqr(i), e >>= Gt;
  return r;
}
function nN(n, t) {
  const e = new Array(t.length), r = t.reduce((a, l, c) => n.is0(l) ? a : (e[c] = a, n.mul(a, l)), n.ONE), i = n.inv(r);
  return t.reduceRight((a, l, c) => n.is0(l) ? a : (e[c] = n.mul(a, e[c]), n.mul(a, l)), i), e;
}
function g0(n, t) {
  const e = t !== void 0 ? t : n.toString(2).length, r = Math.ceil(e / 8);
  return { nBitLength: e, nByteLength: r };
}
function rN(n, t, e = !1, r = {}) {
  if (n <= ae)
    throw new Error(`Expected Field ORDER > 0, got ${n}`);
  const { nBitLength: i, nByteLength: a } = g0(n, t);
  if (a > 2048)
    throw new Error("Field lengths over 2048 bytes are not supported");
  const l = Y1(n), c = Object.freeze({
    ORDER: n,
    BITS: i,
    BYTES: a,
    MASK: z1(i),
    ZERO: ae,
    ONE: Gt,
    create: (d) => Qt(d, n),
    isValid: (d) => {
      if (typeof d != "bigint")
        throw new Error(`Invalid field element: expected bigint, got ${typeof d}`);
      return ae <= d && d < n;
    },
    is0: (d) => d === ae,
    isOdd: (d) => (d & Gt) === Gt,
    neg: (d) => Qt(-d, n),
    eql: (d, h) => d === h,
    sqr: (d) => Qt(d * d, n),
    add: (d, h) => Qt(d + h, n),
    sub: (d, h) => Qt(d - h, n),
    mul: (d, h) => Qt(d * h, n),
    pow: (d, h) => eN(c, d, h),
    div: (d, h) => Qt(d * qg(h, n), n),
    // Same as above, but doesn't normalize
    sqrN: (d) => d * d,
    addN: (d, h) => d + h,
    subN: (d, h) => d - h,
    mulN: (d, h) => d * h,
    inv: (d) => qg(d, n),
    sqrt: r.sqrt || ((d) => l(c, d)),
    invertBatch: (d) => nN(c, d),
    // TODO: do we really need constant cmov?
    // We don't have const-time bigints anyway, so probably will be not very useful
    cmov: (d, h, g) => g ? h : d,
    toBytes: (d) => e ? Gh(d, a) : p0(d, a),
    fromBytes: (d) => {
      if (d.length !== a)
        throw new Error(`Fp.fromBytes: expected ${a}, got ${d.length}`);
      return e ? Sd(d) : H1(d);
    }
  });
  return Object.freeze(c);
}
function iN(n, t) {
  if (!n.isOdd)
    throw new Error("Field doesn't have isOdd");
  const e = n.sqrt(t);
  return n.isOdd(e) ? n.neg(e) : e;
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const sN = BigInt(0), vh = BigInt(1);
function oN(n, t) {
  const e = (i, a) => {
    const l = a.negate();
    return i ? l : a;
  }, r = (i) => {
    const a = Math.ceil(t / i) + 1, l = 2 ** (i - 1);
    return { windows: a, windowSize: l };
  };
  return {
    constTimeNegate: e,
    // non-const time multiplication ladder
    unsafeLadder(i, a) {
      let l = n.ZERO, c = i;
      for (; a > sN; )
        a & vh && (l = l.add(c)), c = c.double(), a >>= vh;
      return l;
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
    precomputeWindow(i, a) {
      const { windows: l, windowSize: c } = r(a), d = [];
      let h = i, g = h;
      for (let y = 0; y < l; y++) {
        g = h, d.push(g);
        for (let T = 1; T < c; T++)
          g = g.add(h), d.push(g);
        h = g.double();
      }
      return d;
    },
    /**
     * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
     * @param W window size
     * @param precomputes precomputed tables
     * @param n scalar (we don't check here, but should be less than curve order)
     * @returns real and fake (for const-time) points
     */
    wNAF(i, a, l) {
      const { windows: c, windowSize: d } = r(i);
      let h = n.ZERO, g = n.BASE;
      const y = BigInt(2 ** i - 1), T = 2 ** i, b = BigInt(i);
      for (let O = 0; O < c; O++) {
        const x = O * d;
        let L = Number(l & y);
        l >>= b, L > d && (L -= T, l += vh);
        const $ = x, at = x + Math.abs(L) - 1, F = O % 2 !== 0, nt = L < 0;
        L === 0 ? g = g.add(e(F, a[$])) : h = h.add(e(nt, a[at]));
      }
      return { p: h, f: g };
    },
    wNAFCached(i, a, l, c) {
      const d = i._WINDOW_SIZE || 1;
      let h = a.get(i);
      return h || (h = this.precomputeWindow(i, d), d !== 1 && a.set(i, c(h))), this.wNAF(d, h, l);
    }
  };
}
function aN(n) {
  return tN(n.Fp), xp(n, {
    n: "bigint",
    h: "bigint",
    Gx: "field",
    Gy: "field"
  }, {
    nBitLength: "isSafeInteger",
    nByteLength: "isSafeInteger"
  }), Object.freeze({
    ...g0(n.n, n.nBitLength),
    ...n,
    p: n.Fp.ORDER
  });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const je = BigInt(0), Je = BigInt(1), fd = BigInt(2), uN = BigInt(8), cN = { zip215: !0 };
function lN(n) {
  const t = aN(n);
  return xp(n, {
    hash: "function",
    a: "bigint",
    d: "bigint",
    randomBytes: "function"
  }, {
    adjustScalarBytes: "function",
    domain: "function",
    uvRatio: "function",
    mapToCurve: "function"
  }), Object.freeze({ ...t });
}
function Ap(n) {
  const t = lN(n), { Fp: e, n: r, prehash: i, hash: a, randomBytes: l, nByteLength: c, h: d } = t, h = fd << BigInt(c * 8) - Je, g = e.create, y = t.uvRatio || ((v, A) => {
    try {
      return { isValid: !0, value: e.sqrt(v * e.inv(A)) };
    } catch {
      return { isValid: !1, value: je };
    }
  }), T = t.adjustScalarBytes || ((v) => v), b = t.domain || ((v, A, z) => {
    if (A.length || z)
      throw new Error("Contexts/pre-hash are not supported");
    return v;
  }), O = (v) => typeof v == "bigint" && je < v, x = (v, A) => O(v) && O(A) && v < A, L = (v) => v === je || x(v, h);
  function $(v, A) {
    if (x(v, A))
      return v;
    throw new Error(`Expected valid scalar < ${A}, got ${typeof v} ${v}`);
  }
  function at(v) {
    return v === je ? v : $(v, r);
  }
  const F = /* @__PURE__ */ new Map();
  function nt(v) {
    if (!(v instanceof J))
      throw new Error("ExtendedPoint expected");
  }
  class J {
    constructor(A, z, P, _) {
      if (this.ex = A, this.ey = z, this.ez = P, this.et = _, !L(A))
        throw new Error("x required");
      if (!L(z))
        throw new Error("y required");
      if (!L(P))
        throw new Error("z required");
      if (!L(_))
        throw new Error("t required");
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    static fromAffine(A) {
      if (A instanceof J)
        throw new Error("extended point not allowed");
      const { x: z, y: P } = A || {};
      if (!L(z) || !L(P))
        throw new Error("invalid affine point");
      return new J(z, P, Je, g(z * P));
    }
    static normalizeZ(A) {
      const z = e.invertBatch(A.map((P) => P.ez));
      return A.map((P, _) => P.toAffine(z[_])).map(J.fromAffine);
    }
    // "Private method", don't use it directly
    _setWindowSize(A) {
      this._WINDOW_SIZE = A, F.delete(this);
    }
    // Not required for fromHex(), which always creates valid points.
    // Could be useful for fromAffine().
    assertValidity() {
      const { a: A, d: z } = t;
      if (this.is0())
        throw new Error("bad point: ZERO");
      const { ex: P, ey: _, ez: it, et: ft } = this, mt = g(P * P), ct = g(_ * _), dt = g(it * it), yt = g(dt * dt), Lt = g(mt * A), xt = g(dt * g(Lt + ct)), qt = g(yt + g(z * g(mt * ct)));
      if (xt !== qt)
        throw new Error("bad point: equation left != right (1)");
      const Kt = g(P * _), N = g(it * ft);
      if (Kt !== N)
        throw new Error("bad point: equation left != right (2)");
    }
    // Compare one point to another.
    equals(A) {
      nt(A);
      const { ex: z, ey: P, ez: _ } = this, { ex: it, ey: ft, ez: mt } = A, ct = g(z * mt), dt = g(it * _), yt = g(P * mt), Lt = g(ft * _);
      return ct === dt && yt === Lt;
    }
    is0() {
      return this.equals(J.ZERO);
    }
    negate() {
      return new J(g(-this.ex), this.ey, this.ez, g(-this.et));
    }
    // Fast algo for doubling Extended Point.
    // https://hyperelliptic.org/EFD/g1p/auto-twisted-extended.html#doubling-dbl-2008-hwcd
    // Cost: 4M + 4S + 1*a + 6add + 1*2.
    double() {
      const { a: A } = t, { ex: z, ey: P, ez: _ } = this, it = g(z * z), ft = g(P * P), mt = g(fd * g(_ * _)), ct = g(A * it), dt = z + P, yt = g(g(dt * dt) - it - ft), Lt = ct + ft, xt = Lt - mt, qt = ct - ft, Kt = g(yt * xt), N = g(Lt * qt), k = g(yt * qt), U = g(xt * Lt);
      return new J(Kt, N, U, k);
    }
    // Fast algo for adding 2 Extended Points.
    // https://hyperelliptic.org/EFD/g1p/auto-twisted-extended.html#addition-add-2008-hwcd
    // Cost: 9M + 1*a + 1*d + 7add.
    add(A) {
      nt(A);
      const { a: z, d: P } = t, { ex: _, ey: it, ez: ft, et: mt } = this, { ex: ct, ey: dt, ez: yt, et: Lt } = A;
      if (z === BigInt(-1)) {
        const q = g((it - _) * (dt + ct)), tt = g((it + _) * (dt - ct)), et = g(tt - q);
        if (et === je)
          return this.double();
        const Q = g(ft * fd * Lt), ht = g(mt * fd * yt), o = ht + Q, s = tt + q, u = ht - Q, p = g(o * et), w = g(s * u), E = g(o * u), B = g(et * s);
        return new J(p, w, B, E);
      }
      const xt = g(_ * ct), qt = g(it * dt), Kt = g(mt * P * Lt), N = g(ft * yt), k = g((_ + it) * (ct + dt) - xt - qt), U = N - Kt, C = N + Kt, D = g(qt - z * xt), H = g(k * U), Z = g(C * D), M = g(k * D), V = g(U * C);
      return new J(H, Z, V, M);
    }
    subtract(A) {
      return this.add(A.negate());
    }
    wNAF(A) {
      return ot.wNAFCached(this, F, A, J.normalizeZ);
    }
    // Constant-time multiplication.
    multiply(A) {
      const { p: z, f: P } = this.wNAF($(A, r));
      return J.normalizeZ([z, P])[0];
    }
    // Non-constant-time multiplication. Uses double-and-add algorithm.
    // It's faster, but should only be used when you don't care about
    // an exposed private key e.g. sig verification.
    // Does NOT allow scalars higher than CURVE.n.
    multiplyUnsafe(A) {
      let z = at(A);
      return z === je ? rt : this.equals(rt) || z === Je ? this : this.equals(Y) ? this.wNAF(z).p : ot.unsafeLadder(this, z);
    }
    // Checks if point is of small order.
    // If you add something to small order point, you will have "dirty"
    // point with torsion component.
    // Multiplies point by cofactor and checks if the result is 0.
    isSmallOrder() {
      return this.multiplyUnsafe(d).is0();
    }
    // Multiplies point by curve order and checks if the result is 0.
    // Returns `false` is the point is dirty.
    isTorsionFree() {
      return ot.unsafeLadder(this, r).is0();
    }
    // Converts Extended point to default (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    toAffine(A) {
      const { ex: z, ey: P, ez: _ } = this, it = this.is0();
      A == null && (A = it ? uN : e.inv(_));
      const ft = g(z * A), mt = g(P * A), ct = g(_ * A);
      if (it)
        return { x: je, y: Je };
      if (ct !== Je)
        throw new Error("invZ was invalid");
      return { x: ft, y: mt };
    }
    clearCofactor() {
      const { h: A } = t;
      return A === Je ? this : this.multiplyUnsafe(A);
    }
    // Converts hash string or Uint8Array to Point.
    // Uses algo from RFC8032 5.1.3.
    static fromHex(A, z = !1) {
      const { d: P, a: _ } = t, it = e.BYTES;
      A = Ha("pointHex", A, it);
      const ft = A.slice(), mt = A[it - 1];
      ft[it - 1] = mt & -129;
      const ct = Sd(ft);
      ct === je || (z ? $(ct, h) : $(ct, e.ORDER));
      const dt = g(ct * ct), yt = g(dt - Je), Lt = g(P * dt - _);
      let { isValid: xt, value: qt } = y(yt, Lt);
      if (!xt)
        throw new Error("Point.fromHex: invalid y coordinate");
      const Kt = (qt & Je) === Je, N = (mt & 128) !== 0;
      if (!z && qt === je && N)
        throw new Error("Point.fromHex: x=0 and x_0=1");
      return N !== Kt && (qt = g(-qt)), J.fromAffine({ x: qt, y: ct });
    }
    static fromPrivateKey(A) {
      return Ut(A).point;
    }
    toRawBytes() {
      const { x: A, y: z } = this.toAffine(), P = Gh(z, e.BYTES);
      return P[P.length - 1] |= A & Je ? 128 : 0, P;
    }
    toHex() {
      return Jp(this.toRawBytes());
    }
  }
  J.BASE = new J(t.Gx, t.Gy, Je, g(t.Gx * t.Gy)), J.ZERO = new J(je, Je, Je, je);
  const { BASE: Y, ZERO: rt } = J, ot = oN(J, c * 8);
  function gt(v) {
    return Qt(v, r);
  }
  function Ft(v) {
    return gt(Sd(v));
  }
  function Ut(v) {
    const A = c;
    v = Ha("private key", v, A);
    const z = Ha("hashed private key", a(v), 2 * A), P = T(z.slice(0, A)), _ = z.slice(A, 2 * A), it = Ft(P), ft = Y.multiply(it), mt = ft.toRawBytes();
    return { head: P, prefix: _, scalar: it, point: ft, pointBytes: mt };
  }
  function Pt(v) {
    return Ut(v).pointBytes;
  }
  function $t(v = new Uint8Array(), ...A) {
    const z = Ug(...A);
    return Ft(a(b(z, Ha("context", v), !!i)));
  }
  function fe(v, A, z = {}) {
    v = Ha("message", v), i && (v = i(v));
    const { prefix: P, scalar: _, pointBytes: it } = Ut(A), ft = $t(z.context, P, v), mt = Y.multiply(ft).toRawBytes(), ct = $t(z.context, mt, it, v), dt = gt(ft + ct * _);
    at(dt);
    const yt = Ug(mt, Gh(dt, e.BYTES));
    return Ha("result", yt, c * 2);
  }
  const Vt = cN;
  function Ht(v, A, z, P = Vt) {
    const { context: _, zip215: it } = P, ft = e.BYTES;
    v = Ha("signature", v, 2 * ft), A = Ha("message", A), i && (A = i(A));
    const mt = Sd(v.slice(ft, 2 * ft));
    let ct, dt, yt;
    try {
      ct = J.fromHex(z, it), dt = J.fromHex(v.slice(0, ft), it), yt = Y.multiplyUnsafe(mt);
    } catch {
      return !1;
    }
    if (!it && ct.isSmallOrder())
      return !1;
    const Lt = $t(_, dt.toRawBytes(), ct.toRawBytes(), A);
    return dt.add(ct.multiplyUnsafe(Lt)).subtract(yt).clearCofactor().equals(J.ZERO);
  }
  return Y._setWindowSize(8), {
    CURVE: t,
    getPublicKey: Pt,
    sign: fe,
    verify: Ht,
    ExtendedPoint: J,
    utils: {
      getExtendedPublicKey: Ut,
      // ed25519 private keys are uniform 32b. No need to check for modulo bias, like in secp256k1.
      randomPrivateKey: () => l(e.BYTES),
      /**
       * We're doing scalar multiplication (used in getPublicKey etc) with precomputed BASE_POINT
       * values. This slows down first getPublicKey() by milliseconds (see Speed section),
       * but allows to speed-up subsequent getPublicKey() calls up to 20x.
       * @param windowSize 2, 4, 8, 16
       */
      precompute(v = 8, A = J.BASE) {
        return A._setWindowSize(v), A.multiply(BigInt(3)), A;
      }
    }
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Up = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949"), Dg = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
BigInt(0);
const fN = BigInt(1), Yh = BigInt(2), mN = BigInt(5), Pg = BigInt(10), dN = BigInt(20), hN = BigInt(40), Cg = BigInt(80);
function pN(n) {
  const t = Up, r = n * n % t * n % t, i = hn(r, Yh, t) * r % t, a = hn(i, fN, t) * n % t, l = hn(a, mN, t) * a % t, c = hn(l, Pg, t) * l % t, d = hn(c, dN, t) * c % t, h = hn(d, hN, t) * d % t, g = hn(h, Cg, t) * h % t, y = hn(g, Cg, t) * h % t, T = hn(y, Pg, t) * l % t;
  return { pow_p_5_8: hn(T, Yh, t) * n % t, b2: r };
}
function gN(n) {
  return n[0] &= 248, n[31] &= 127, n[31] |= 64, n;
}
function yN(n, t) {
  const e = Up, r = Qt(t * t * t, e), i = Qt(r * r * t, e), a = pN(n * i).pow_p_5_8;
  let l = Qt(n * r * a, e);
  const c = Qt(t * l * l, e), d = l, h = Qt(l * Dg, e), g = c === n, y = c === Qt(-n, e), T = c === Qt(-n * Dg, e);
  return g && (l = d), (y || T) && (l = h), Z1(l, e) && (l = Qt(-l, e)), { isValid: g || y, value: l };
}
const Pa = rN(Up, void 0, !0), Lp = {
  // Param: a
  a: BigInt(-1),
  // d is equal to -121665/121666 over finite field.
  // Negative number is P - number, and division is invert(number, P)
  d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"),
  // Finite field 𝔽p over which we'll do calculations; 2n**255n - 19n
  Fp: Pa,
  // Subgroup order: how many points curve has
  // 2n**252n + 27742317777372353535851937790883648493n;
  n: BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"),
  // Cofactor
  h: BigInt(8),
  // Base point (x, y) aka generator point
  Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"),
  Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960"),
  hash: m0,
  randomBytes: p1,
  adjustScalarBytes: gN,
  // dom2
  // Ratio of u to v. Allows us to combine inversion and square root. Uses algo from RFC8032 5.1.3.
  // Constant-time, u/√v
  uvRatio: yN
}, Pc = /* @__PURE__ */ Ap(Lp);
function y0(n, t, e) {
  if (t.length > 255)
    throw new Error("Context is too big");
  return d1(a0("SigEd25519 no Ed25519 collisions"), new Uint8Array([e ? 1 : 0, t.length]), t, n);
}
({
  ...Lp
});
({
  ...Lp
});
const wN = (Pa.ORDER + BigInt(3)) / BigInt(8);
Pa.pow(Yh, wN);
Pa.sqrt(Pa.neg(Pa.ONE));
(Pa.ORDER - BigInt(5)) / BigInt(8);
BigInt(486662);
iN(Pa, Pa.neg(BigInt(486664)));
BigInt("25063068953384623474111414158702152701244531502492656460079210482610430750235");
BigInt("54469307008909316920995813868745141605393597292927456921205312896311721017578");
BigInt("1159843021668779879193775521855586647937357759715417654439879720876111806838");
BigInt("40440834346308536858101042469323190826248399146238708352240133220865137265952");
BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
const TN = () => new Error("not implemented"), Fp = () => new Error("invalid size"), qp = () => new Error("destination is required"), Dp = () => new Error("amount is required"), Pp = () => new Error("currency is required"), Vc = () => new Error("invalid currency"), ml = () => new Error("unexpected error"), w0 = () => new Error("cannot derive nonce from both clientSecret and idempotencyKey"), Cp = () => new Error("invalid value"), Kp = () => new Error("invalid mode"), Id = () => new Error("invalid address"), rh = () => new Error("login is required"), dl = () => new Error("login verifier is required"), ih = () => new Error("login domain is required"), T0 = () => new Error("invalid login domain"), N0 = () => new Error("login subdomains are not supported"), E0 = () => new Error("login IP addresses are not supported"), b0 = () => new Error("login localhost is not supported"), k0 = () => new Error("login ports are not supported"), Zh = () => new Error("login expected domain name but received a path"), Kg = 32, NN = /^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]+$/;
class fr {
  /**
   * Constructs a new PublicKey instance.
   *
   * @param publicKey - The raw public key as a Uint8Array.
   */
  constructor(t) {
    if (t.length !== Kg)
      throw Id();
    this.value = t;
  }
  /**
   * Constructs a PublicKey instance from its Base58 representation.
   *
   * @param base58 - The Base58 encoded public key string.
   * @returns A new PublicKey instance.
   */
  static fromBase58(t) {
    if (!t.match(NN))
      throw Id();
    const e = Cd.decode(t);
    if (e.length !== Kg)
      throw Id();
    return new fr(e);
  }
  /**
   * Converts the public key to a Buffer.
   *
   * @returns The public key as a Buffer.
   */
  toBuffer() {
    return th.Buffer.from([...this.value]);
  }
  /**
   * Encodes the public key into its Base58 representation.
   *
   * @returns The Base58 encoded public key string.
   */
  toBase58() {
    return Cd.encode(this.value);
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
  verify(t, e) {
    return Pc.verify(e, new Uint8Array(t), this.value);
  }
}
class pr {
  /**
   * Constructs a new Keypair instance.
   *
   * @param privateKey - Private key of the key pair.
   * @param publicKey - Public key of the key pair.
   */
  constructor(t, e) {
    this.privateKey = t, this.publicKey = e;
  }
  /**
   * Generates a new random Keypair.
   *
   * @returns A new Keypair instance.
   */
  static generate() {
    const t = Pc.utils.randomPrivateKey(), e = Pc.getPublicKey(t);
    return new pr(t, e);
  }
  /**
   * Constructs a Keypair from a given secret key.
   *
   * @param secretKey - Secret key to derive the Keypair from.
   * @returns A new Keypair instance.
   */
  static fromSecretKey(t) {
    const e = t.subarray(0, 32), r = Pc.getPublicKey(e);
    return new pr(e, r);
  }
  /**
   * Constructs a Keypair from a given seed.
   *
   * @param seed - Seed to derive the Keypair from.
   * @returns A new Keypair instance.
   */
  static fromSeed(t) {
    return pr.fromSecretKey(t);
  }
  /**
   * Constructs a Keypair from a raw private key.
   *
   * @param rawPrivateKey - Raw private key to derive the Keypair from.
   * @returns A new Keypair instance.
   */
  static fromRawPrivateKey(t) {
    const e = Pc.getPublicKey(t);
    return new pr(t, e);
  }
  /**
   * Retrieves the public key as a PublicKey object.
   *
   * @returns The public key.
   */
  getPublicKey() {
    return new fr(this.publicKey);
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
  sign(t) {
    return Pc.sign(new Uint8Array(t), this.privateKey);
  }
  /**
   * Verifies a message signature against the public key.
   *
   * @param message - The message to verify.
   * @param signature - The signature to verify against.
   * @returns True if the signature is valid, false otherwise.
   */
  verify(t, e) {
    return Pc.verify(e, new Uint8Array(t), this.publicKey);
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
  static decode(t) {
    const e = Buffer.from(t, "base64");
    return pr.fromRawPrivateKey(e);
  }
}
const Kd = [
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
function B0(n) {
  const t = Kd.indexOf(n);
  if (t === -1)
    throw Vc();
  return t;
}
function S0(n) {
  if (n < 0 || n >= Kd.length)
    throw Vc();
  return Kd[n];
}
function Rp(n) {
  return Kd.indexOf(n) !== -1;
}
function EN(n) {
  switch (n) {
    case "usd":
      return "us";
    case "eur":
      return "eu";
    case "chf":
      return "ch";
    case "nzd":
      return "nz";
    case "xcd":
      return "ag";
    case "zar":
      return "za";
    case "dkk":
      return "dk";
    case "gbp":
      return "gb";
    case "ang":
      return "cw";
    case "xpf":
      return "pf";
    case "mad":
      return "ma";
    case "xaf":
      return "il";
    case "aud":
      return "au";
    case "nok":
      return "no";
    case "ils":
      return "il";
    case "xof":
      return "il";
    case "bdt":
      return "bd";
    case "gtq":
      return "gt";
    case "gyd":
      return "gy";
    case "afn":
      return "af";
    case "kyd":
      return "ky";
    case "bbd":
      return "bb";
    case "kes":
      return "ke";
    case "mvr":
      return "mv";
    case "egp":
      return "eg";
    case "crc":
      return "cr";
    case "hrk":
      return "hr";
    case "sgd":
      return "sg";
    case "brl":
      return "br";
    case "kgs":
      return "kg";
    case "ssp":
      return "ss";
    case "btn":
      return "bt";
    case "pkr":
      return "pk";
    case "mmk":
      return "mm";
    case "mru":
      return "mr";
    case "uzs":
      return "uz";
    case "stn":
      return "st";
    case "lyd":
      return "ly";
    case "mzn":
      return "mz";
    case "sll":
      return "sl";
    case "tjs":
      return "tj";
    case "hkd":
      return "hk";
    case "shp":
      return "sh";
    case "mxn":
      return "mx";
    case "wst":
      return "ws";
    case "bob":
      return "bo";
    case "idr":
      return "id";
    case "cdf":
      return "cd";
    case "bsd":
      return "bs";
    case "bmd":
      return "bm";
    case "huf":
      return "hu";
    case "azn":
      return "az";
    case "pab":
      return "pa";
    case "kzt":
      return "kz";
    case "cop":
      return "co";
    case "rub":
      return "ru";
    case "qar":
      return "qa";
    case "cup":
      return "cu";
    case "amd":
      return "am";
    case "top":
      return "to";
    case "sar":
      return "sa";
    case "kpw":
      return "kp";
    case "nio":
      return "ni";
    case "aoa":
      return "ao";
    case "isk":
      return "is";
    case "mnt":
      return "mn";
    case "mga":
      return "mg";
    case "thb":
      return "th";
    case "byn":
      return "by";
    case "bwp":
      return "bw";
    case "rsd":
      return "rs";
    case "clp":
      return "cl";
    case "gmd":
      return "gm";
    case "aed":
      return "ae";
    case "tzs":
      return "tz";
    case "all":
      return "al";
    case "khr":
      return "kh";
    case "irr":
      return "ir";
    case "etb":
      return "et";
    case "php":
      return "ph";
    case "mdl":
      return "md";
    case "sbd":
      return "sb";
    case "sdg":
      return "sd";
    case "vuv":
      return "vu";
    case "mkd":
      return "mk";
    case "htg":
      return "ht";
    case "srd":
      return "sr";
    case "bzd":
      return "bz";
    case "bif":
      return "bi";
    case "myr":
      return "my";
    case "pen":
      return "pe";
    case "bhd":
      return "bh";
    case "ron":
      return "ro";
    case "uah":
      return "ua";
    case "pyg":
      return "py";
    case "ttd":
      return "tt";
    case "cad":
      return "ca";
    case "scr":
      return "sc";
    case "try":
      return "tr";
    case "ves":
      return "ve";
    case "fkp":
      return "fk";
    case "hnl":
      return "hn";
    case "gnf":
      return "gn";
    case "ngn":
      return "ng";
    case "mwk":
      return "mw";
    case "ern":
      return "er";
    case "szl":
      return "sz";
    case "bgn":
      return "bg";
    case "mop":
      return "mo";
    case "sek":
      return "se";
    case "bnd":
      return "bn";
    case "fjd":
      return "fj";
    case "kwd":
      return "kw";
    case "czk":
      return "cz";
    case "twd":
      return "tw";
    case "dop":
      return "do";
    case "djf":
      return "dj";
    case "jpy":
      return "jp";
    case "omr":
      return "om";
    case "lrd":
      return "lr";
    case "kmf":
      return "km";
    case "mur":
      return "mu";
    case "jmd":
      return "jm";
    case "tnd":
      return "tn";
    case "lbp":
      return "lb";
    case "tmt":
      return "tm";
    case "jod":
      return "jo";
    case "lkr":
      return "lk";
    case "ugx":
      return "ug";
    case "sos":
      return "so";
    case "nad":
      return "na";
    case "pln":
      return "pl";
    case "awg":
      return "aw";
    case "rwf":
      return "rw";
    case "lak":
      return "la";
    case "dzd":
      return "dz";
    case "yer":
      return "ye";
    case "syp":
      return "sy";
    case "uyu":
      return "uy";
    case "cny":
      return "cn";
    case "krw":
      return "kr";
    case "ars":
      return "ar";
    case "ghs":
      return "gh";
    case "npr":
      return "np";
    case "inr":
      return "in";
    case "iqd":
      return "iq";
    case "bam":
      return "ba";
    case "cve":
      return "cv";
    case "gel":
      return "ge";
    case "zmw":
      return "zm";
    case "gip":
      return "gi";
    case "vnd":
      return "vn";
    case "pgk":
      return "pg";
  }
}
var pe;
(function(n) {
  n[n.Cash = 0] = "Cash", n[n.GiftCard = 1] = "GiftCard", n[n.RequestPayment = 2] = "RequestPayment", n[n.RequestLogin = 3] = "RequestLogin";
})(pe || (pe = {}));
class Gc {
  /**
   * Construct a new CodePayload.
   *
   * @param opt - The options for constructing the payload.
   */
  constructor(t) {
    if (this.kind = t.kind, this.amount = t.amount, this.nonce = t.nonce, t.currency && !Rp(t.currency))
      throw Vc();
    this.currency = t.currency;
  }
  isCash() {
    return this.kind === pe.Cash && this.amount != null;
  }
  isGiftCard() {
    return this.kind === pe.GiftCard && this.amount != null;
  }
  isRequestPayment() {
    return this.kind === pe.RequestPayment && this.currency != null && this.amount != null;
  }
  /**
   * Validates the payload, throwing an error if invalid.
   */
  validate() {
    if (this.kind === pe.RequestPayment && !this.currency)
      throw Vc();
    if ((this.kind === pe.Cash || this.kind === pe.GiftCard || this.kind === pe.RequestPayment) && !this.amount)
      throw Cp();
  }
  /**
   * Convert the payload to its binary representation.
   *
   * @returns A Uint8Array containing the binary representation of the payload.
   */
  toBinary() {
    const t = new Uint8Array(20);
    if (t[0] = this.kind, this.validate(), this.isRequestPayment()) {
      if (!this.currency)
        throw Vc();
      const e = B0(this.currency);
      t[1] = e;
      for (let r = 0; r < 7; r++)
        t[r + 2] = Number(this.amount >> BigInt(8 * r) & BigInt(255));
    }
    if (this.isCash() || this.isGiftCard())
      for (let e = 0; e < 8; e++)
        t[e + 1] = Number(this.amount >> BigInt(8 * e) & BigInt(255));
    return t.set(this.nonce, 9), t;
  }
  /**
   * Create a CodePayload from its binary representation.
   *
   * @param data - The binary data.
   * @returns A new instance of CodePayload.
   */
  static fromData(t) {
    if (t.length !== Gc.MAX_LENGTH)
      throw Fp();
    const e = t[0];
    let r, i, a;
    if (e === pe.RequestPayment) {
      const l = t[1];
      a = S0(l), r = t.slice(2, 9).reduce((c, d, h) => c + (BigInt(d) << BigInt(8 * h)), BigInt(0));
    }
    return (e === pe.Cash || e === pe.GiftCard) && (r = t.slice(1, 9).reduce((l, c, d) => l + (BigInt(c) << BigInt(8 * d)), BigInt(0))), i = t.slice(9), new Gc({ kind: e, amount: r, currency: a, nonce: i });
  }
}
Gc.MAX_LENGTH = 20;
function bN(n) {
  if (n.mode === void 0)
    throw Kp();
  if (n.idempotencyKey && n.clientSecret)
    throw w0();
}
function kN(n) {
  if (n.destination === void 0)
    throw qp();
  if (n.amount === void 0)
    throw Dp();
  if (n.currency === void 0)
    throw Pp();
  if (!Rp(n.currency))
    throw Vc();
  fr.fromBase58(n.destination);
}
function Rg(n) {
  if (n.login === void 0)
    throw rh();
  if (n.login.domain === void 0)
    throw ih();
  if (n.login.verifier === void 0)
    throw dl();
  let t;
  try {
    t = new URL(n.login.domain);
  } catch {
  }
  if (t)
    throw Zh();
  try {
    t = new URL(`http://${n.login.domain}`);
  } catch {
    throw T0();
  }
  if (t.hostname.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/))
    throw E0();
  if (t.hostname.split(".").length > 2)
    throw N0();
  if (t.hostname === "localhost")
    throw b0();
  if (t.port)
    throw k0();
  if (t.pathname !== "/" || n.login.domain.includes("/"))
    throw Zh();
  fr.fromBase58(n.login.verifier);
}
function Mg(n) {
  if (n.signers) {
    for (const t of n.signers)
      if (!t.sign && typeof t.sign != "function")
        throw Cp();
  }
}
function Mp(n) {
  switch (bN(n), n.mode) {
    case "login":
      Rg(n), n.signers && Mg(n);
      break;
    case "payment":
      kN(n), n.login && Rg(n), n.signers && Mg(n);
      break;
    default:
      throw Kp();
  }
}
class Dt {
  /**
   * Constructs a new Kin instance.
   * @param whole - The whole part of the Kin amount.
   * @param quarks - The fractional part (quarks) of the Kin amount. Default is 0.
   */
  constructor(t, e = 0) {
    this.whole = BigInt(t), this.quarks = BigInt(e), this.normalize();
  }
  /**
   * Normalizes the Kin values ensuring the `quarks` value is within the valid range.
   * Any overflow is added to the `whole` value.
   */
  normalize() {
    const t = this.quarks / Dt.quarksPerKin;
    this.whole += t, this.quarks %= Dt.quarksPerKin;
  }
  /**
   * Converts the Kin amount to its equivalent in quarks.
   * @returns The total value in quarks.
   */
  toQuarks() {
    return this.whole * Dt.quarksPerKin + this.quarks;
  }
  /**
   * Converts the Kin amount to a decimal representation.
   * @returns The Kin value as a decimal number.
   */
  toDecimal() {
    return Number(this.whole) + Number(this.quarks) / Number(Dt.quarksPerKin);
  }
  /**
   * Creates a Kin instance from a given quarks value.
   * @param quarks - The value in quarks.
   * @returns A new Kin instance.
   */
  static fromQuarks(t) {
    const e = Number(t / Dt.quarksPerKin), r = Number(t % Dt.quarksPerKin);
    return new Dt(e, r);
  }
  /**
   * Creates a Kin instance from a decimal value.
   * @param decimal - The decimal value to convert.
   * @returns A new Kin instance.
   */
  static fromDecimal(t) {
    const e = BigInt(Math.round(t * Number(Dt.quarksPerKin)));
    return Dt.fromQuarks(e);
  }
  /**
   * Adds another Kin value to the current one.
   * @param other - The other Kin value to add.
   * @returns A new Kin instance with the summed value.
   */
  add(t) {
    const e = this.toQuarks() + t.toQuarks();
    return Dt.fromQuarks(e);
  }
  /**
   * Subtracts another Kin value from the current one.
   * @param other - The other Kin value to subtract.
   * @returns A new Kin instance with the difference.
   */
  subtract(t) {
    const e = this.toQuarks() - t.toQuarks();
    return Dt.fromQuarks(e);
  }
  /**
   * Multiplies the current Kin value by a factor.
   * @param factor - The multiplication factor.
   * @returns A new Kin instance with the multiplied value.
   */
  multiply(t) {
    const e = this.toQuarks() * BigInt(t);
    return Dt.fromQuarks(e);
  }
  /**
   * Divides the current Kin value by a divisor.
   * @param divisor - The divisor.
   * @returns A new Kin instance with the divided value.
   */
  divide(t) {
    const e = this.toQuarks() / BigInt(t);
    return Dt.fromQuarks(e);
  }
}
Dt.decimals = 5n;
Dt.quarksPerKin = 100000n;
Dt.mintAddress = "kinXdEcpDQeHPEuQnqmUgtYykqKGVFq6CeVX5iAHJq6";
Dt.mint = fr.fromBase58(Dt.mintAddress);
Dt.zero = new Dt(0, 0);
Dt.one = new Dt(1, 0);
Dt.max = new Dt(Number.MAX_SAFE_INTEGER, Number(Dt.quarksPerKin - 1n));
Dt.min = new Dt(Number.MIN_SAFE_INTEGER, 0);
const BN = (n, t, e) => n & t ^ ~n & e, SN = (n, t, e) => n & t ^ n & e ^ t & e, IN = /* @__PURE__ */ new Uint32Array([
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
]), za = /* @__PURE__ */ new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]), ja = /* @__PURE__ */ new Uint32Array(64);
class ON extends l0 {
  constructor() {
    super(64, 32, 8, !1), this.A = za[0] | 0, this.B = za[1] | 0, this.C = za[2] | 0, this.D = za[3] | 0, this.E = za[4] | 0, this.F = za[5] | 0, this.G = za[6] | 0, this.H = za[7] | 0;
  }
  get() {
    const { A: t, B: e, C: r, D: i, E: a, F: l, G: c, H: d } = this;
    return [t, e, r, i, a, l, c, d];
  }
  // prettier-ignore
  set(t, e, r, i, a, l, c, d) {
    this.A = t | 0, this.B = e | 0, this.C = r | 0, this.D = i | 0, this.E = a | 0, this.F = l | 0, this.G = c | 0, this.H = d | 0;
  }
  process(t, e) {
    for (let y = 0; y < 16; y++, e += 4)
      ja[y] = t.getUint32(e, !1);
    for (let y = 16; y < 64; y++) {
      const T = ja[y - 15], b = ja[y - 2], O = dn(T, 7) ^ dn(T, 18) ^ T >>> 3, x = dn(b, 17) ^ dn(b, 19) ^ b >>> 10;
      ja[y] = x + ja[y - 7] + O + ja[y - 16] | 0;
    }
    let { A: r, B: i, C: a, D: l, E: c, F: d, G: h, H: g } = this;
    for (let y = 0; y < 64; y++) {
      const T = dn(c, 6) ^ dn(c, 11) ^ dn(c, 25), b = g + T + BN(c, d, h) + IN[y] + ja[y] | 0, x = (dn(r, 2) ^ dn(r, 13) ^ dn(r, 22)) + SN(r, i, a) | 0;
      g = h, h = d, d = c, c = l + b | 0, l = a, a = i, i = r, r = b + x | 0;
    }
    r = r + this.A | 0, i = i + this.B | 0, a = a + this.C | 0, l = l + this.D | 0, c = c + this.E | 0, d = d + this.F | 0, h = h + this.G | 0, g = g + this.H | 0, this.set(r, i, a, l, c, d, h, g);
  }
  roundClean() {
    ja.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
const I0 = /* @__PURE__ */ c0(() => new ON());
class Ae {
  /**
   * Constructor for an idempotency key.
   * @param {Uint8Array} data The value to initialize the idempotency key with. If not specified, a random Uint8Array of length IdempotencyKey.MAX_LENGTH is used.
   */
  constructor(t = new Uint8Array(Ae.MAX_LENGTH)) {
    if (t.length != Ae.MAX_LENGTH)
      throw Fp();
    this.value = t;
  }
  /**
   * Creates a new idempotency key from a client secret string.
   * @param {string} data The client secret to parse into an idempotency key.
   * @returns {IdempotencyKey} An IdempotencyKey object representing the decoded client secret.
   */
  static fromClientSecret(t) {
    return new Ae(Cd.decode(t));
  }
  /**
   * Creates a new idempotency key from a seed string.
   * @param {string} seed The seed to create the idempotency key with.
   * @returns {IdempotencyKey} An IdempotencyKey object representing the created idempotency key.
   */
  static fromSeed(t) {
    return new Ae(I0(t).subarray(0, Ae.MAX_LENGTH));
  }
  /**
   * Generates a random idempotency key.
   * @returns {IdempotencyKey} An IdempotencyKey object representing the generated key.
   */
  static generate() {
    const t = pr.generate().getPrivateValue().subarray(0, Ae.MAX_LENGTH);
    return new Ae(t);
  }
  /**
   * Converts the idempotency key to a base58 string.
   * @returns {string} A base58 encoded string representing the idempotency key.
   */
  toString() {
    return Cd.encode(this.value);
  }
}
Ae.MAX_LENGTH = 11;
function vN(n) {
  return pr.fromSeed(I0(n.toBinary()));
}
class O0 {
  /**
   * Constructs a new PaymentRequestIntent instance.
   *
   * @param opt - The payment request options.
   */
  constructor(t) {
    this.options = {
      ...t
    }, this.init(), this.validate(), this.options.idempotencyKey ? this.nonce = Ae.fromSeed(this.options.idempotencyKey) : this.options.clientSecret ? this.nonce = Ae.fromClientSecret(this.options.clientSecret) : this.nonce = Ae.generate(), this.rendezvousPayload = this.toPayload(), this.rendezvousKeypair = vN(this.rendezvousPayload);
  }
  /**
   * Constructs a SendMessageRequest message to be sent to the Code Sequencer.
   */
  async getSendMessageRequestProto() {
    const { signature: t, envelope: e } = this.sign();
    return new Fn({
      message: e,
      rendezvousKey: {
        value: this.rendezvousKeypair.getPublicKey().value
      },
      signature: {
        value: t
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
class v0 extends O0 {
  /**
   * Constructs a new PaymentRequestIntent instance.
   *
   * @param opt - The payment request options.
   */
  constructor(t) {
    super({
      ...t,
      // Normalize currency to lowercase 
      // (just in case the end user is not using TypeScript)
      currency: t.currency && t.currency.toLowerCase(),
      mode: "payment"
    });
  }
  init() {
    this.options.amount !== void 0 && (this.options.amount = parseFloat(this.options.amount.toFixed(2)), this.convertedAmount = parseInt((this.options.amount * 100).toFixed()));
  }
  toPayload() {
    const t = pe.RequestPayment, e = BigInt(this.convertedAmount), r = this.nonce.value;
    return new Gc({ kind: t, amount: e, nonce: r, currency: this.options.currency });
  }
  /**
   * Validates the payment request options.
   */
  validate() {
    if (Mp(this.options), !this.options.destination)
      throw qp();
    if (!this.options.amount)
      throw Dp();
    if (!this.options.currency)
      throw Pp();
    if (!this.convertedAmount)
      throw ml();
  }
  /**
   * Converts the payment request intent to its protobuf representation.
   *
   * @returns The protobuf representation of the payment request intent.
   */
  toProto() {
    const t = fr.fromBase58(this.options.destination), { currency: e, amount: r } = this.options;
    let i;
    e === "kin" ? i = {
      case: "exact",
      value: new oe({
        currency: "kin",
        exchangeRate: 1,
        quarks: Dt.fromDecimal(r).toQuarks(),
        nativeAmount: r
      })
    } : i = {
      case: "partial",
      value: new en({
        currency: e,
        nativeAmount: r
      })
    };
    const a = new qn({
      requestorAccount: new j({
        value: t.toBuffer()
      }),
      exchangeData: i
    });
    return new Be({
      kind: {
        case: "requestToReceiveBill",
        value: a
      }
    });
  }
  /**
   * Signs the payment request intent.
   *
   * @returns A signed intent containing the message, intent, and signature.
   */
  sign() {
    const t = this.toProto(), e = t.kind.value;
    if (!e)
      throw ml();
    const r = this.rendezvousKeypair.sign(t.toBinary()), i = this.rendezvousKeypair.getPublicKey().toBase58(), a = e.toBinary();
    return {
      envelope: t,
      signedBytes: a,
      intent: i,
      signature: r
    };
  }
}
class JN extends v0 {
  /**
   * Constructs a new PaymentRequestIntent instance.
   *
   * @param opt - The payment request options.
   */
  constructor(t) {
    super(t);
    const { signers: e } = t, { domain: r, verifier: i } = t.login;
    this.domain = r, this.verifier = fr.fromBase58(i), e && (this.signer = e.find((a) => a.getPublicKey().toBase58() === i));
  }
  /**
   * Validates the payment request options.
   */
  validate() {
    if (super.validate(), !this.options.login)
      throw rh();
    if (!this.options.login.domain)
      throw ih();
    if (!this.options.login.verifier)
      throw dl();
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
      throw ml();
    return e.domain = new Ue({
      value: this.domain
    }), e.verifier = new j({
      value: this.verifier.toBuffer()
    }), e.rendezvousKey = new j({
      value: this.rendezvousKeypair.getPublicKey().toBuffer()
    }), new Be({
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
      throw dl();
    const t = this.toProto(), e = t.kind.value;
    if (!e)
      throw ml();
    e.signature = new wt({
      value: this.signer.sign(e.toBinary())
    });
    const r = this.rendezvousKeypair.sign(t.toBinary()), i = this.rendezvousKeypair.getPublicKey().toBase58(), a = e.toBinary();
    return {
      envelope: t,
      signedBytes: a,
      intent: i,
      signature: r
    };
  }
}
class xN extends O0 {
  /**
   * Constructs a new PaymentRequestIntent instance.
   *
   * @param opt - The payment request options.
   */
  constructor(t) {
    super({
      ...t,
      mode: "login"
    });
    const { signers: e } = t, { domain: r, verifier: i } = t.login;
    this.domain = r, this.verifier = fr.fromBase58(i), e && (this.signer = e.find((a) => a.getPublicKey().toBase58() === i));
  }
  init() {
  }
  toPayload() {
    const t = pe.RequestLogin, e = this.nonce.value;
    return new Gc({ kind: t, nonce: e });
  }
  /**
   * Validates the payment request options.
   */
  validate() {
    if (Mp(this.options), !this.options.login)
      throw rh();
    if (!this.options.login.domain)
      throw ih();
    if (!this.options.login.verifier)
      throw dl();
  }
  /**
   * Converts the payment request intent to its protobuf representation.
   *
   * @returns The protobuf representation of the payment request intent.
   */
  toProto() {
    const t = new Dn({
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
    return new Be({
      kind: {
        case: "requestToLogin",
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
      throw dl();
    const t = this.toProto(), e = t.kind.value;
    if (!e)
      throw ml();
    e.signature = new wt({
      value: this.signer.sign(e.toBinary())
    });
    const r = this.rendezvousKeypair.sign(t.toBinary()), i = this.rendezvousKeypair.getPublicKey().toBase58(), a = e.toBinary();
    return {
      envelope: t,
      signedBytes: a,
      intent: i,
      signature: r
    };
  }
}
function AN(n) {
  return typeof btoa == "function" ? btoa(n) : th.Buffer.from(n, "binary").toString("base64");
}
function UN(n) {
  return typeof atob == "function" ? atob(n) : th.Buffer.from(n, "base64").toString("binary");
}
function LN(n) {
  return encodeURIComponent(AN(JSON.stringify(n ?? {})));
}
function FN(n) {
  return JSON.parse(UN(decodeURIComponent(n)));
}
const qN = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get CodeKind() {
    return pe;
  },
  CodePayload: Gc,
  ErrAmbiguousNonce: w0,
  ErrAmountRequired: Dp,
  ErrCurrencyRequired: Pp,
  ErrDestinationRequired: qp,
  ErrInvalidAddress: Id,
  ErrInvalidCurrency: Vc,
  ErrInvalidLoginDomain: T0,
  ErrInvalidMode: Kp,
  ErrInvalidSize: Fp,
  ErrInvalidValue: Cp,
  ErrLoginDomainRequired: ih,
  ErrLoginExpectedDomainName: Zh,
  ErrLoginIPNotSupported: E0,
  ErrLoginLocalhostNotSupported: b0,
  ErrLoginPortsNotSupported: k0,
  ErrLoginRequired: rh,
  ErrLoginSubdomainsNotSupported: N0,
  ErrLoginVerifierRequired: dl,
  ErrNotImplemented: TN,
  ErrUnexpectedError: ml,
  IdempotencyKey: Ae,
  Keypair: pr,
  Kin: Dt,
  LoginRequestIntent: xN,
  PaymentRequestIntent: v0,
  PaymentRequestWithLoginIntent: JN,
  PublicKey: fr,
  currencyCodeToIndex: B0,
  currencyCodeToRegion: EN,
  decode: FN,
  encode: LN,
  indexToCurrencyCode: S0,
  isValidCurrency: Rp,
  validateElementOptions: Mp
}, Symbol.toStringTag, { value: "Module" }));
function Lc(n, t) {
  const e = /* @__PURE__ */ Object.create(null), r = n.split(",");
  for (let i = 0; i < r.length; i++)
    e[r[i]] = !0;
  return t ? (i) => !!e[i.toLowerCase()] : (i) => !!e[i];
}
const Rt = Object.freeze({}), al = Object.freeze([]), Se = () => {
}, J0 = () => !1, DN = /^on[^a-z]/, nd = (n) => DN.test(n), Rd = (n) => n.startsWith("onUpdate:"), _t = Object.assign, $p = (n, t) => {
  const e = n.indexOf(t);
  e > -1 && n.splice(e, 1);
}, PN = Object.prototype.hasOwnProperty, At = (n, t) => PN.call(n, t), Nt = Array.isArray, ul = (n) => sh(n) === "[object Map]", CN = (n) => sh(n) === "[object Set]", kt = (n) => typeof n == "function", Zt = (n) => typeof n == "string", Vp = (n) => typeof n == "symbol", Mt = (n) => n !== null && typeof n == "object", _p = (n) => Mt(n) && kt(n.then) && kt(n.catch), KN = Object.prototype.toString, sh = (n) => KN.call(n), Hp = (n) => sh(n).slice(8, -1), RN = (n) => sh(n) === "[object Object]", zp = (n) => Zt(n) && n !== "NaN" && n[0] !== "-" && "" + parseInt(n, 10) === n, Od = /* @__PURE__ */ Lc(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), MN = /* @__PURE__ */ Lc(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), oh = (n) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (e) => t[e] || (t[e] = n(e));
}, $N = /-(\w)/g, hl = oh((n) => n.replace($N, (t, e) => e ? e.toUpperCase() : "")), VN = /\B([A-Z])/g, Jc = oh(
  (n) => n.replace(VN, "-$1").toLowerCase()
), ah = oh(
  (n) => n.charAt(0).toUpperCase() + n.slice(1)
), Cc = oh(
  (n) => n ? `on${ah(n)}` : ""
), zf = (n, t) => !Object.is(n, t), bl = (n, t) => {
  for (let e = 0; e < n.length; e++)
    n[e](t);
}, Md = (n, t, e) => {
  Object.defineProperty(n, t, {
    configurable: !0,
    enumerable: !1,
    value: e
  });
}, _N = (n) => {
  const t = parseFloat(n);
  return isNaN(t) ? n : t;
};
let $g;
const $d = () => $g || ($g = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof {} < "u" ? {} : {});
function Fc(n) {
  if (Nt(n)) {
    const t = {};
    for (let e = 0; e < n.length; e++) {
      const r = n[e], i = Zt(r) ? WN(r) : Fc(r);
      if (i)
        for (const a in i)
          t[a] = i[a];
    }
    return t;
  } else {
    if (Zt(n))
      return n;
    if (Mt(n))
      return n;
  }
}
const HN = /;(?![^(]*\))/g, zN = /:([^]+)/, jN = /\/\*[^]*?\*\//g;
function WN(n) {
  const t = {};
  return n.replace(jN, "").split(HN).forEach((e) => {
    if (e) {
      const r = e.split(zN);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function jp(n) {
  let t = "";
  if (Zt(n))
    t = n;
  else if (Nt(n))
    for (let e = 0; e < n.length; e++) {
      const r = jp(n[e]);
      r && (t += r + " ");
    }
  else if (Mt(n))
    for (const e in n)
      n[e] && (t += e + " ");
  return t.trim();
}
const GN = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", XN = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", YN = /* @__PURE__ */ Lc(GN), ZN = /* @__PURE__ */ Lc(XN), QN = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", tE = /* @__PURE__ */ Lc(QN);
function x0(n) {
  return !!n || n === "";
}
function Qh(n, ...t) {
  console.warn(`[Vue warn] ${n}`, ...t);
}
let Ge;
class eE {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Ge, !t && Ge && (this.index = (Ge.scopes || (Ge.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const e = Ge;
      try {
        return Ge = this, t();
      } finally {
        Ge = e;
      }
    } else
      Qh("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Ge = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Ge = this.parent;
  }
  stop(t) {
    if (this._active) {
      let e, r;
      for (e = 0, r = this.effects.length; e < r; e++)
        this.effects[e].stop();
      for (e = 0, r = this.cleanups.length; e < r; e++)
        this.cleanups[e]();
      if (this.scopes)
        for (e = 0, r = this.scopes.length; e < r; e++)
          this.scopes[e].stop(!0);
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function nE(n, t = Ge) {
  t && t.active && t.effects.push(n);
}
function rE() {
  return Ge;
}
const Wp = (n) => {
  const t = new Set(n);
  return t.w = 0, t.n = 0, t;
}, A0 = (n) => (n.w & xc) > 0, U0 = (n) => (n.n & xc) > 0, iE = ({ deps: n }) => {
  if (n.length)
    for (let t = 0; t < n.length; t++)
      n[t].w |= xc;
}, sE = (n) => {
  const { deps: t } = n;
  if (t.length) {
    let e = 0;
    for (let r = 0; r < t.length; r++) {
      const i = t[r];
      A0(i) && !U0(i) ? i.delete(n) : t[e++] = i, i.w &= ~xc, i.n &= ~xc;
    }
    t.length = e;
  }
}, tp = /* @__PURE__ */ new WeakMap();
let xl = 0, xc = 1;
const ep = 30;
let ge;
const _c = Symbol("iterate"), np = Symbol("Map key iterate");
class Gp {
  constructor(t, e = null, r) {
    this.fn = t, this.scheduler = e, this.active = !0, this.deps = [], this.parent = void 0, nE(this, r);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = ge, e = Ic;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = ge, ge = this, Ic = !0, xc = 1 << ++xl, xl <= ep ? iE(this) : Vg(this), this.fn();
    } finally {
      xl <= ep && sE(this), xc = 1 << --xl, ge = this.parent, Ic = e, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    ge === this ? this.deferStop = !0 : this.active && (Vg(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Vg(n) {
  const { deps: t } = n;
  if (t.length) {
    for (let e = 0; e < t.length; e++)
      t[e].delete(n);
    t.length = 0;
  }
}
let Ic = !0;
const L0 = [];
function Yc() {
  L0.push(Ic), Ic = !1;
}
function Zc() {
  const n = L0.pop();
  Ic = n === void 0 ? !0 : n;
}
function de(n, t, e) {
  if (Ic && ge) {
    let r = tp.get(n);
    r || tp.set(n, r = /* @__PURE__ */ new Map());
    let i = r.get(e);
    i || r.set(e, i = Wp()), F0(i, { effect: ge, target: n, type: t, key: e });
  }
}
function F0(n, t) {
  let e = !1;
  xl <= ep ? U0(n) || (n.n |= xc, e = !A0(n)) : e = !n.has(ge), e && (n.add(ge), ge.deps.push(n), ge.onTrack && ge.onTrack(
    _t(
      {
        effect: ge
      },
      t
    )
  ));
}
function cr(n, t, e, r, i, a) {
  const l = tp.get(n);
  if (!l)
    return;
  let c = [];
  if (t === "clear")
    c = [...l.values()];
  else if (e === "length" && Nt(n)) {
    const h = Number(r);
    l.forEach((g, y) => {
      (y === "length" || y >= h) && c.push(g);
    });
  } else
    switch (e !== void 0 && c.push(l.get(e)), t) {
      case "add":
        Nt(n) ? zp(e) && c.push(l.get("length")) : (c.push(l.get(_c)), ul(n) && c.push(l.get(np)));
        break;
      case "delete":
        Nt(n) || (c.push(l.get(_c)), ul(n) && c.push(l.get(np)));
        break;
      case "set":
        ul(n) && c.push(l.get(_c));
        break;
    }
  const d = { target: n, type: t, key: e, newValue: r, oldValue: i, oldTarget: a };
  if (c.length === 1)
    c[0] && rp(c[0], d);
  else {
    const h = [];
    for (const g of c)
      g && h.push(...g);
    rp(Wp(h), d);
  }
}
function rp(n, t) {
  const e = Nt(n) ? n : [...n];
  for (const r of e)
    r.computed && _g(r, t);
  for (const r of e)
    r.computed || _g(r, t);
}
function _g(n, t) {
  (n !== ge || n.allowRecurse) && (n.onTrigger && n.onTrigger(_t({ effect: n }, t)), n.scheduler ? n.scheduler() : n.run());
}
const oE = /* @__PURE__ */ Lc("__proto__,__v_isRef,__isVue"), q0 = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((n) => n !== "arguments" && n !== "caller").map((n) => Symbol[n]).filter(Vp)
), aE = /* @__PURE__ */ uh(), uE = /* @__PURE__ */ uh(!1, !0), cE = /* @__PURE__ */ uh(!0), lE = /* @__PURE__ */ uh(!0, !0), Hg = /* @__PURE__ */ fE();
function fE() {
  const n = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    n[t] = function(...e) {
      const r = Ot(this);
      for (let a = 0, l = this.length; a < l; a++)
        de(r, "get", a + "");
      const i = r[t](...e);
      return i === -1 || i === !1 ? r[t](...e.map(Ot)) : i;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    n[t] = function(...e) {
      Yc();
      const r = Ot(this)[t].apply(this, e);
      return Zc(), r;
    };
  }), n;
}
function mE(n) {
  const t = Ot(this);
  return de(t, "has", n), t.hasOwnProperty(n);
}
function uh(n = !1, t = !1) {
  return function(r, i, a) {
    if (i === "__v_isReactive")
      return !n;
    if (i === "__v_isReadonly")
      return n;
    if (i === "__v_isShallow")
      return t;
    if (i === "__v_raw" && a === (n ? t ? V0 : $0 : t ? M0 : R0).get(r))
      return r;
    const l = Nt(r);
    if (!n) {
      if (l && At(Hg, i))
        return Reflect.get(Hg, i, a);
      if (i === "hasOwnProperty")
        return mE;
    }
    const c = Reflect.get(r, i, a);
    return (Vp(i) ? q0.has(i) : oE(i)) || (n || de(r, "get", i), t) ? c : re(c) ? l && zp(i) ? c : c.value : Mt(c) ? n ? _0(c) : fh(c) : c;
  };
}
const dE = /* @__PURE__ */ D0(), hE = /* @__PURE__ */ D0(!0);
function D0(n = !1) {
  return function(e, r, i, a) {
    let l = e[r];
    if (Ac(l) && re(l) && !re(i))
      return !1;
    if (!n && (!Vd(i) && !Ac(i) && (l = Ot(l), i = Ot(i)), !Nt(e) && re(l) && !re(i)))
      return l.value = i, !0;
    const c = Nt(e) && zp(r) ? Number(r) < e.length : At(e, r), d = Reflect.set(e, r, i, a);
    return e === Ot(a) && (c ? zf(i, l) && cr(e, "set", r, i, l) : cr(e, "add", r, i)), d;
  };
}
function pE(n, t) {
  const e = At(n, t), r = n[t], i = Reflect.deleteProperty(n, t);
  return i && e && cr(n, "delete", t, void 0, r), i;
}
function gE(n, t) {
  const e = Reflect.has(n, t);
  return (!Vp(t) || !q0.has(t)) && de(n, "has", t), e;
}
function yE(n) {
  return de(n, "iterate", Nt(n) ? "length" : _c), Reflect.ownKeys(n);
}
const P0 = {
  get: aE,
  set: dE,
  deleteProperty: pE,
  has: gE,
  ownKeys: yE
}, C0 = {
  get: cE,
  set(n, t) {
    return Qh(
      `Set operation on key "${String(t)}" failed: target is readonly.`,
      n
    ), !0;
  },
  deleteProperty(n, t) {
    return Qh(
      `Delete operation on key "${String(t)}" failed: target is readonly.`,
      n
    ), !0;
  }
}, wE = /* @__PURE__ */ _t(
  {},
  P0,
  {
    get: uE,
    set: hE
  }
), TE = /* @__PURE__ */ _t(
  {},
  C0,
  {
    get: lE
  }
), Xp = (n) => n, ch = (n) => Reflect.getPrototypeOf(n);
function md(n, t, e = !1, r = !1) {
  n = n.__v_raw;
  const i = Ot(n), a = Ot(t);
  e || (t !== a && de(i, "get", t), de(i, "get", a));
  const { has: l } = ch(i), c = r ? Xp : e ? Yp : jf;
  if (l.call(i, t))
    return c(n.get(t));
  if (l.call(i, a))
    return c(n.get(a));
  n !== i && n.get(t);
}
function dd(n, t = !1) {
  const e = this.__v_raw, r = Ot(e), i = Ot(n);
  return t || (n !== i && de(r, "has", n), de(r, "has", i)), n === i ? e.has(n) : e.has(n) || e.has(i);
}
function hd(n, t = !1) {
  return n = n.__v_raw, !t && de(Ot(n), "iterate", _c), Reflect.get(n, "size", n);
}
function zg(n) {
  n = Ot(n);
  const t = Ot(this);
  return ch(t).has.call(t, n) || (t.add(n), cr(t, "add", n, n)), this;
}
function jg(n, t) {
  t = Ot(t);
  const e = Ot(this), { has: r, get: i } = ch(e);
  let a = r.call(e, n);
  a ? K0(e, r, n) : (n = Ot(n), a = r.call(e, n));
  const l = i.call(e, n);
  return e.set(n, t), a ? zf(t, l) && cr(e, "set", n, t, l) : cr(e, "add", n, t), this;
}
function Wg(n) {
  const t = Ot(this), { has: e, get: r } = ch(t);
  let i = e.call(t, n);
  i ? K0(t, e, n) : (n = Ot(n), i = e.call(t, n));
  const a = r ? r.call(t, n) : void 0, l = t.delete(n);
  return i && cr(t, "delete", n, void 0, a), l;
}
function Gg() {
  const n = Ot(this), t = n.size !== 0, e = ul(n) ? new Map(n) : new Set(n), r = n.clear();
  return t && cr(n, "clear", void 0, void 0, e), r;
}
function pd(n, t) {
  return function(r, i) {
    const a = this, l = a.__v_raw, c = Ot(l), d = t ? Xp : n ? Yp : jf;
    return !n && de(c, "iterate", _c), l.forEach((h, g) => r.call(i, d(h), d(g), a));
  };
}
function gd(n, t, e) {
  return function(...r) {
    const i = this.__v_raw, a = Ot(i), l = ul(a), c = n === "entries" || n === Symbol.iterator && l, d = n === "keys" && l, h = i[n](...r), g = e ? Xp : t ? Yp : jf;
    return !t && de(
      a,
      "iterate",
      d ? np : _c
    ), {
      // iterator protocol
      next() {
        const { value: y, done: T } = h.next();
        return T ? { value: y, done: T } : {
          value: c ? [g(y[0]), g(y[1])] : g(y),
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
function Wa(n) {
  return function(...t) {
    {
      const e = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(
        `${ah(n)} operation ${e}failed: target is readonly.`,
        Ot(this)
      );
    }
    return n === "delete" ? !1 : this;
  };
}
function NE() {
  const n = {
    get(a) {
      return md(this, a);
    },
    get size() {
      return hd(this);
    },
    has: dd,
    add: zg,
    set: jg,
    delete: Wg,
    clear: Gg,
    forEach: pd(!1, !1)
  }, t = {
    get(a) {
      return md(this, a, !1, !0);
    },
    get size() {
      return hd(this);
    },
    has: dd,
    add: zg,
    set: jg,
    delete: Wg,
    clear: Gg,
    forEach: pd(!1, !0)
  }, e = {
    get(a) {
      return md(this, a, !0);
    },
    get size() {
      return hd(this, !0);
    },
    has(a) {
      return dd.call(this, a, !0);
    },
    add: Wa("add"),
    set: Wa("set"),
    delete: Wa("delete"),
    clear: Wa("clear"),
    forEach: pd(!0, !1)
  }, r = {
    get(a) {
      return md(this, a, !0, !0);
    },
    get size() {
      return hd(this, !0);
    },
    has(a) {
      return dd.call(this, a, !0);
    },
    add: Wa("add"),
    set: Wa("set"),
    delete: Wa("delete"),
    clear: Wa("clear"),
    forEach: pd(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((a) => {
    n[a] = gd(
      a,
      !1,
      !1
    ), e[a] = gd(
      a,
      !0,
      !1
    ), t[a] = gd(
      a,
      !1,
      !0
    ), r[a] = gd(
      a,
      !0,
      !0
    );
  }), [
    n,
    e,
    t,
    r
  ];
}
const [
  EE,
  bE,
  kE,
  BE
] = /* @__PURE__ */ NE();
function lh(n, t) {
  const e = t ? n ? BE : kE : n ? bE : EE;
  return (r, i, a) => i === "__v_isReactive" ? !n : i === "__v_isReadonly" ? n : i === "__v_raw" ? r : Reflect.get(
    At(e, i) && i in r ? e : r,
    i,
    a
  );
}
const SE = {
  get: /* @__PURE__ */ lh(!1, !1)
}, IE = {
  get: /* @__PURE__ */ lh(!1, !0)
}, OE = {
  get: /* @__PURE__ */ lh(!0, !1)
}, vE = {
  get: /* @__PURE__ */ lh(!0, !0)
};
function K0(n, t, e) {
  const r = Ot(e);
  if (r !== e && t.call(n, r)) {
    const i = Hp(n);
    console.warn(
      `Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const R0 = /* @__PURE__ */ new WeakMap(), M0 = /* @__PURE__ */ new WeakMap(), $0 = /* @__PURE__ */ new WeakMap(), V0 = /* @__PURE__ */ new WeakMap();
function JE(n) {
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
function xE(n) {
  return n.__v_skip || !Object.isExtensible(n) ? 0 : JE(Hp(n));
}
function fh(n) {
  return Ac(n) ? n : mh(
    n,
    !1,
    P0,
    SE,
    R0
  );
}
function AE(n) {
  return mh(
    n,
    !1,
    wE,
    IE,
    M0
  );
}
function _0(n) {
  return mh(
    n,
    !0,
    C0,
    OE,
    $0
  );
}
function Al(n) {
  return mh(
    n,
    !0,
    TE,
    vE,
    V0
  );
}
function mh(n, t, e, r, i) {
  if (!Mt(n))
    return console.warn(`value cannot be made reactive: ${String(n)}`), n;
  if (n.__v_raw && !(t && n.__v_isReactive))
    return n;
  const a = i.get(n);
  if (a)
    return a;
  const l = xE(n);
  if (l === 0)
    return n;
  const c = new Proxy(
    n,
    l === 2 ? r : e
  );
  return i.set(n, c), c;
}
function Hc(n) {
  return Ac(n) ? Hc(n.__v_raw) : !!(n && n.__v_isReactive);
}
function Ac(n) {
  return !!(n && n.__v_isReadonly);
}
function Vd(n) {
  return !!(n && n.__v_isShallow);
}
function ip(n) {
  return Hc(n) || Ac(n);
}
function Ot(n) {
  const t = n && n.__v_raw;
  return t ? Ot(t) : n;
}
function H0(n) {
  return Md(n, "__v_skip", !0), n;
}
const jf = (n) => Mt(n) ? fh(n) : n, Yp = (n) => Mt(n) ? _0(n) : n;
function z0(n) {
  Ic && ge && (n = Ot(n), F0(n.dep || (n.dep = Wp()), {
    target: n,
    type: "get",
    key: "value"
  }));
}
function j0(n, t) {
  n = Ot(n);
  const e = n.dep;
  e && rp(e, {
    target: n,
    type: "set",
    key: "value",
    newValue: t
  });
}
function re(n) {
  return !!(n && n.__v_isRef === !0);
}
function cn(n) {
  return UE(n, !1);
}
function UE(n, t) {
  return re(n) ? n : new LE(n, t);
}
class LE {
  constructor(t, e) {
    this.__v_isShallow = e, this.dep = void 0, this.__v_isRef = !0, this._rawValue = e ? t : Ot(t), this._value = e ? t : jf(t);
  }
  get value() {
    return z0(this), this._value;
  }
  set value(t) {
    const e = this.__v_isShallow || Vd(t) || Ac(t);
    t = e ? t : Ot(t), zf(t, this._rawValue) && (this._rawValue = t, this._value = e ? t : jf(t), j0(this, t));
  }
}
function eu(n) {
  return re(n) ? n.value : n;
}
const FE = {
  get: (n, t, e) => eu(Reflect.get(n, t, e)),
  set: (n, t, e, r) => {
    const i = n[t];
    return re(i) && !re(e) ? (i.value = e, !0) : Reflect.set(n, t, e, r);
  }
};
function W0(n) {
  return Hc(n) ? n : new Proxy(n, FE);
}
class qE {
  constructor(t, e, r, i) {
    this._setter = e, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new Gp(t, () => {
      this._dirty || (this._dirty = !0, j0(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !i, this.__v_isReadonly = r;
  }
  get value() {
    const t = Ot(this);
    return z0(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
function DE(n, t, e = !1) {
  let r, i;
  const a = kt(n);
  a ? (r = n, i = () => {
    console.warn("Write operation failed: computed value is readonly");
  }) : (r = n.get, i = n.set);
  const l = new qE(r, i, a || !i, e);
  return t && !e && (l.effect.onTrack = t.onTrack, l.effect.onTrigger = t.onTrigger), l;
}
const zc = [];
function vd(n) {
  zc.push(n);
}
function Jd() {
  zc.pop();
}
function X(n, ...t) {
  Yc();
  const e = zc.length ? zc[zc.length - 1].component : null, r = e && e.appContext.config.warnHandler, i = PE();
  if (r)
    Ca(
      r,
      e,
      11,
      [
        n + t.join(""),
        e && e.proxy,
        i.map(
          ({ vnode: a }) => `at <${Th(e, a.type)}>`
        ).join(`
`),
        i
      ]
    );
  else {
    const a = [`[Vue warn]: ${n}`, ...t];
    i.length && a.push(`
`, ...CE(i)), console.warn(...a);
  }
  Zc();
}
function PE() {
  let n = zc[zc.length - 1];
  if (!n)
    return [];
  const t = [];
  for (; n; ) {
    const e = t[0];
    e && e.vnode === n ? e.recurseCount++ : t.push({
      vnode: n,
      recurseCount: 0
    });
    const r = n.component && n.component.parent;
    n = r && r.vnode;
  }
  return t;
}
function CE(n) {
  const t = [];
  return n.forEach((e, r) => {
    t.push(...r === 0 ? [] : [`
`], ...KE(e));
  }), t;
}
function KE({ vnode: n, recurseCount: t }) {
  const e = t > 0 ? `... (${t} recursive calls)` : "", r = n.component ? n.component.parent == null : !1, i = ` at <${Th(
    n.component,
    n.type,
    r
  )}`, a = ">" + e;
  return n.props ? [i, ...RE(n.props), a] : [i + a];
}
function RE(n) {
  const t = [], e = Object.keys(n);
  return e.slice(0, 3).forEach((r) => {
    t.push(...G0(r, n[r]));
  }), e.length > 3 && t.push(" ..."), t;
}
function G0(n, t, e) {
  return Zt(t) ? (t = JSON.stringify(t), e ? t : [`${n}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? e ? t : [`${n}=${t}`] : re(t) ? (t = G0(n, Ot(t.value), !0), e ? t : [`${n}=Ref<`, t, ">"]) : kt(t) ? [`${n}=fn${t.name ? `<${t.name}>` : ""}`] : (t = Ot(t), e ? t : [`${n}=`, t]);
}
const Zp = {
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
function Ca(n, t, e, r) {
  let i;
  try {
    i = r ? n(...r) : n();
  } catch (a) {
    dh(a, t, e);
  }
  return i;
}
function ln(n, t, e, r) {
  if (kt(n)) {
    const a = Ca(n, t, e, r);
    return a && _p(a) && a.catch((l) => {
      dh(l, t, e);
    }), a;
  }
  const i = [];
  for (let a = 0; a < n.length; a++)
    i.push(ln(n[a], t, e, r));
  return i;
}
function dh(n, t, e, r = !0) {
  const i = t ? t.vnode : null;
  if (t) {
    let a = t.parent;
    const l = t.proxy, c = Zp[e];
    for (; a; ) {
      const h = a.ec;
      if (h) {
        for (let g = 0; g < h.length; g++)
          if (h[g](n, l, c) === !1)
            return;
      }
      a = a.parent;
    }
    const d = t.appContext.config.errorHandler;
    if (d) {
      Ca(
        d,
        null,
        10,
        [n, l, c]
      );
      return;
    }
  }
  ME(n, e, i, r);
}
function ME(n, t, e, r = !0) {
  {
    const i = Zp[t];
    if (e && vd(e), X(`Unhandled error${i ? ` during execution of ${i}` : ""}`), e && Jd(), r)
      throw n;
    console.error(n);
  }
}
let Wf = !1, sp = !1;
const me = [];
let Nn = 0;
const cl = [];
let wn = null, nu = 0;
const X0 = /* @__PURE__ */ Promise.resolve();
let Qp = null;
const $E = 100;
function op(n) {
  const t = Qp || X0;
  return n ? t.then(this ? n.bind(this) : n) : t;
}
function VE(n) {
  let t = Nn + 1, e = me.length;
  for (; t < e; ) {
    const r = t + e >>> 1;
    Gf(me[r]) < n ? t = r + 1 : e = r;
  }
  return t;
}
function hh(n) {
  (!me.length || !me.includes(
    n,
    Wf && n.allowRecurse ? Nn + 1 : Nn
  )) && (n.id == null ? me.push(n) : me.splice(VE(n.id), 0, n), Y0());
}
function Y0() {
  !Wf && !sp && (sp = !0, Qp = X0.then(tw));
}
function _E(n) {
  const t = me.indexOf(n);
  t > Nn && me.splice(t, 1);
}
function Z0(n) {
  Nt(n) ? cl.push(...n) : (!wn || !wn.includes(
    n,
    n.allowRecurse ? nu + 1 : nu
  )) && cl.push(n), Y0();
}
function Xg(n, t = Wf ? Nn + 1 : 0) {
  for (n = n || /* @__PURE__ */ new Map(); t < me.length; t++) {
    const e = me[t];
    if (e && e.pre) {
      if (tg(n, e))
        continue;
      me.splice(t, 1), t--, e();
    }
  }
}
function Q0(n) {
  if (cl.length) {
    const t = [...new Set(cl)];
    if (cl.length = 0, wn) {
      wn.push(...t);
      return;
    }
    for (wn = t, n = n || /* @__PURE__ */ new Map(), wn.sort((e, r) => Gf(e) - Gf(r)), nu = 0; nu < wn.length; nu++)
      tg(n, wn[nu]) || wn[nu]();
    wn = null, nu = 0;
  }
}
const Gf = (n) => n.id == null ? 1 / 0 : n.id, HE = (n, t) => {
  const e = Gf(n) - Gf(t);
  if (e === 0) {
    if (n.pre && !t.pre)
      return -1;
    if (t.pre && !n.pre)
      return 1;
  }
  return e;
};
function tw(n) {
  sp = !1, Wf = !0, n = n || /* @__PURE__ */ new Map(), me.sort(HE);
  const t = (e) => tg(n, e);
  try {
    for (Nn = 0; Nn < me.length; Nn++) {
      const e = me[Nn];
      if (e && e.active !== !1) {
        if (t(e))
          continue;
        Ca(e, null, 14);
      }
    }
  } finally {
    Nn = 0, me.length = 0, Q0(n), Wf = !1, Qp = null, (me.length || cl.length) && tw(n);
  }
}
function tg(n, t) {
  if (!n.has(t))
    n.set(t, 1);
  else {
    const e = n.get(t);
    if (e > $E) {
      const r = t.ownerInstance, i = r && Jw(r.type);
      return X(
        `Maximum recursive updates exceeded${i ? ` in component <${i}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`
      ), !0;
    } else
      n.set(t, e + 1);
  }
}
let Oc = !1;
const il = /* @__PURE__ */ new Set();
$d().__VUE_HMR_RUNTIME__ = {
  createRecord: Jh(ew),
  rerender: Jh(WE),
  reload: Jh(GE)
};
const Xc = /* @__PURE__ */ new Map();
function zE(n) {
  const t = n.type.__hmrId;
  let e = Xc.get(t);
  e || (ew(t, n.type), e = Xc.get(t)), e.instances.add(n);
}
function jE(n) {
  Xc.get(n.type.__hmrId).instances.delete(n);
}
function ew(n, t) {
  return Xc.has(n) ? !1 : (Xc.set(n, {
    initialDef: Kl(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Kl(n) {
  return xw(n) ? n.__vccOpts : n;
}
function WE(n, t) {
  const e = Xc.get(n);
  e && (e.initialDef.render = t, [...e.instances].forEach((r) => {
    t && (r.render = t, Kl(r.type).render = t), r.renderCache = [], Oc = !0, r.update(), Oc = !1;
  }));
}
function GE(n, t) {
  const e = Xc.get(n);
  if (!e)
    return;
  t = Kl(t), Yg(e.initialDef, t);
  const r = [...e.instances];
  for (const i of r) {
    const a = Kl(i.type);
    il.has(a) || (a !== e.initialDef && Yg(a, t), il.add(a)), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (il.add(a), i.ceReload(t.styles), il.delete(a)) : i.parent ? hh(i.parent.update) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  Z0(() => {
    for (const i of r)
      il.delete(
        Kl(i.type)
      );
  });
}
function Yg(n, t) {
  _t(n, t);
  for (const e in n)
    e !== "__file" && !(e in t) && delete n[e];
}
function Jh(n) {
  return (t, e) => {
    try {
      return n(t, e);
    } catch (r) {
      console.error(r), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let En, Ul = [], ap = !1;
function rd(n, ...t) {
  En ? En.emit(n, ...t) : ap || Ul.push({ event: n, args: t });
}
function nw(n, t) {
  var e, r;
  En = n, En ? (En.enabled = !0, Ul.forEach(({ event: i, args: a }) => En.emit(i, ...a)), Ul = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((r = (e = window.navigator) == null ? void 0 : e.userAgent) != null && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((a) => {
    nw(a, t);
  }), setTimeout(() => {
    En || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, ap = !0, Ul = []);
  }, 3e3)) : (ap = !0, Ul = []);
}
function XE(n, t) {
  rd("app:init", n, t, {
    Fragment: Xe,
    Text: id,
    Comment: De,
    Static: Ad
  });
}
function YE(n) {
  rd("app:unmount", n);
}
const ZE = /* @__PURE__ */ eg(
  "component:added"
  /* COMPONENT_ADDED */
), rw = /* @__PURE__ */ eg(
  "component:updated"
  /* COMPONENT_UPDATED */
), QE = /* @__PURE__ */ eg(
  "component:removed"
  /* COMPONENT_REMOVED */
), t2 = (n) => {
  En && typeof En.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !En.cleanupBuffer(n) && QE(n);
};
function eg(n) {
  return (t) => {
    rd(
      n,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const e2 = /* @__PURE__ */ iw(
  "perf:start"
  /* PERFORMANCE_START */
), n2 = /* @__PURE__ */ iw(
  "perf:end"
  /* PERFORMANCE_END */
);
function iw(n) {
  return (t, e, r) => {
    rd(n, t.appContext.app, t.uid, t, e, r);
  };
}
function r2(n, t, e) {
  rd(
    "component:emit",
    n.appContext.app,
    n,
    t,
    e
  );
}
function i2(n, t, ...e) {
  if (n.isUnmounted)
    return;
  const r = n.vnode.props || Rt;
  {
    const {
      emitsOptions: g,
      propsOptions: [y]
    } = n;
    if (g)
      if (!(t in g))
        (!y || !(Cc(t) in y)) && X(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Cc(t)}" prop.`
        );
      else {
        const T = g[t];
        kt(T) && (T(...e) || X(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let i = e;
  const a = t.startsWith("update:"), l = a && t.slice(7);
  if (l && l in r) {
    const g = `${l === "modelValue" ? "model" : l}Modifiers`, { number: y, trim: T } = r[g] || Rt;
    T && (i = e.map((b) => Zt(b) ? b.trim() : b)), y && (i = e.map(_N));
  }
  r2(n, t, i);
  {
    const g = t.toLowerCase();
    g !== t && r[Cc(g)] && X(
      `Event "${g}" is emitted in component ${Th(
        n,
        n.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Jc(t)}" instead of "${t}".`
    );
  }
  let c, d = r[c = Cc(t)] || // also try camelCase event handler (#2249)
  r[c = Cc(hl(t))];
  !d && a && (d = r[c = Cc(Jc(t))]), d && ln(
    d,
    n,
    6,
    i
  );
  const h = r[c + "Once"];
  if (h) {
    if (!n.emitted)
      n.emitted = {};
    else if (n.emitted[c])
      return;
    n.emitted[c] = !0, ln(
      h,
      n,
      6,
      i
    );
  }
}
function sw(n, t, e = !1) {
  const r = t.emitsCache, i = r.get(n);
  if (i !== void 0)
    return i;
  const a = n.emits;
  let l = {}, c = !1;
  if (!kt(n)) {
    const d = (h) => {
      const g = sw(h, t, !0);
      g && (c = !0, _t(l, g));
    };
    !e && t.mixins.length && t.mixins.forEach(d), n.extends && d(n.extends), n.mixins && n.mixins.forEach(d);
  }
  return !a && !c ? (Mt(n) && r.set(n, null), null) : (Nt(a) ? a.forEach((d) => l[d] = null) : _t(l, a), Mt(n) && r.set(n, l), l);
}
function ph(n, t) {
  return !n || !nd(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), At(n, t[0].toLowerCase() + t.slice(1)) || At(n, Jc(t)) || At(n, t));
}
let _e = null, ow = null;
function _d(n) {
  const t = _e;
  return _e = n, ow = n && n.type.__scopeId || null, t;
}
function s2(n, t = _e, e) {
  if (!t || n._n)
    return n;
  const r = (...i) => {
    r._d && ly(-1);
    const a = _d(t);
    let l;
    try {
      l = n(...i);
    } finally {
      _d(a), r._d && ly(1);
    }
    return rw(t), l;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
let up = !1;
function Hd() {
  up = !0;
}
function xh(n) {
  const {
    type: t,
    vnode: e,
    proxy: r,
    withProxy: i,
    props: a,
    propsOptions: [l],
    slots: c,
    attrs: d,
    emit: h,
    render: g,
    renderCache: y,
    data: T,
    setupState: b,
    ctx: O,
    inheritAttrs: x
  } = n;
  let L, $;
  const at = _d(n);
  up = !1;
  try {
    if (e.shapeFlag & 4) {
      const J = i || r;
      L = Ye(
        g.call(
          J,
          J,
          y,
          a,
          b,
          T,
          O
        )
      ), $ = d;
    } else {
      const J = t;
      d === a && Hd(), L = Ye(
        J.length > 1 ? J(
          a,
          {
            get attrs() {
              return Hd(), d;
            },
            slots: c,
            emit: h
          }
        ) : J(
          a,
          null
          /* we know it doesn't need it */
        )
      ), $ = t.props ? d : a2(d);
    }
  } catch (J) {
    Rl.length = 0, dh(J, n, 1), L = ar(De);
  }
  let F = L, nt;
  if (L.patchFlag > 0 && L.patchFlag & 2048 && ([F, nt] = o2(L)), $ && x !== !1) {
    const J = Object.keys($), { shapeFlag: Y } = F;
    if (J.length) {
      if (Y & 7)
        l && J.some(Rd) && ($ = u2(
          $,
          l
        )), F = Uc(F, $);
      else if (!up && F.type !== De) {
        const rt = Object.keys(d), ot = [], gt = [];
        for (let Ft = 0, Ut = rt.length; Ft < Ut; Ft++) {
          const Pt = rt[Ft];
          nd(Pt) ? Rd(Pt) || ot.push(Pt[2].toLowerCase() + Pt.slice(3)) : gt.push(Pt);
        }
        gt.length && X(
          `Extraneous non-props attributes (${gt.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), ot.length && X(
          `Extraneous non-emits event listeners (${ot.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return e.dirs && (Zg(F) || X(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), F = Uc(F), F.dirs = F.dirs ? F.dirs.concat(e.dirs) : e.dirs), e.transition && (Zg(F) || X(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), F.transition = e.transition), nt ? nt(F) : L = F, _d(at), L;
}
const o2 = (n) => {
  const t = n.children, e = n.dynamicChildren, r = aw(t);
  if (!r)
    return [n, void 0];
  const i = t.indexOf(r), a = e ? e.indexOf(r) : -1, l = (c) => {
    t[i] = c, e && (a > -1 ? e[a] = c : c.patchFlag > 0 && (n.dynamicChildren = [...e, c]));
  };
  return [Ye(r), l];
};
function aw(n) {
  let t;
  for (let e = 0; e < n.length; e++) {
    const r = n[e];
    if (ag(r)) {
      if (r.type !== De || r.children === "v-if") {
        if (t)
          return;
        t = r;
      }
    } else
      return;
  }
  return t;
}
const a2 = (n) => {
  let t;
  for (const e in n)
    (e === "class" || e === "style" || nd(e)) && ((t || (t = {}))[e] = n[e]);
  return t;
}, u2 = (n, t) => {
  const e = {};
  for (const r in n)
    (!Rd(r) || !(r.slice(9) in t)) && (e[r] = n[r]);
  return e;
}, Zg = (n) => n.shapeFlag & 7 || n.type === De;
function c2(n, t, e) {
  const { props: r, children: i, component: a } = n, { props: l, children: c, patchFlag: d } = t, h = a.emitsOptions;
  if ((i || c) && Oc || t.dirs || t.transition)
    return !0;
  if (e && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return r ? Qg(r, l, h) : !!l;
    if (d & 8) {
      const g = t.dynamicProps;
      for (let y = 0; y < g.length; y++) {
        const T = g[y];
        if (l[T] !== r[T] && !ph(h, T))
          return !0;
      }
    }
  } else
    return (i || c) && (!c || !c.$stable) ? !0 : r === l ? !1 : r ? l ? Qg(r, l, h) : !0 : !!l;
  return !1;
}
function Qg(n, t, e) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(n).length)
    return !0;
  for (let i = 0; i < r.length; i++) {
    const a = r[i];
    if (t[a] !== n[a] && !ph(e, a))
      return !0;
  }
  return !1;
}
function l2({ vnode: n, parent: t }, e) {
  for (; t && t.subTree === n; )
    (n = t.vnode).el = e, t = t.parent;
}
const f2 = (n) => n.__isSuspense;
function m2(n, t) {
  t && t.pendingBranch ? Nt(n) ? t.effects.push(...n) : t.effects.push(n) : Z0(n);
}
function uw(n, t) {
  return ng(n, null, t);
}
const yd = {};
function Ah(n, t, e) {
  return kt(t) || X(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), ng(n, t, e);
}
function ng(n, t, { immediate: e, deep: r, flush: i, onTrack: a, onTrigger: l } = Rt) {
  var c;
  t || (e !== void 0 && X(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && X(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const d = (J) => {
    X(
      "Invalid watch source: ",
      J,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, h = rE() === ((c = le) == null ? void 0 : c.scope) ? le : null;
  let g, y = !1, T = !1;
  if (re(n) ? (g = () => n.value, y = Vd(n)) : Hc(n) ? (g = () => n, r = !0) : Nt(n) ? (T = !0, y = n.some((J) => Hc(J) || Vd(J)), g = () => n.map((J) => {
    if (re(J))
      return J.value;
    if (Hc(J))
      return ol(J);
    if (kt(J))
      return Ca(J, h, 2);
    d(J);
  })) : kt(n) ? t ? g = () => Ca(n, h, 2) : g = () => {
    if (!(h && h.isUnmounted))
      return b && b(), ln(
        n,
        h,
        3,
        [O]
      );
  } : (g = Se, d(n)), t && r) {
    const J = g;
    g = () => ol(J());
  }
  let b, O = (J) => {
    b = F.onStop = () => {
      Ca(J, h, 4);
    };
  }, x;
  if (Yf)
    if (O = Se, t ? e && ln(t, h, 3, [
      g(),
      T ? [] : void 0,
      O
    ]) : g(), i === "sync") {
      const J = Bb();
      x = J.__watcherHandles || (J.__watcherHandles = []);
    } else
      return Se;
  let L = T ? new Array(n.length).fill(yd) : yd;
  const $ = () => {
    if (F.active)
      if (t) {
        const J = F.run();
        (r || y || (T ? J.some(
          (Y, rt) => zf(Y, L[rt])
        ) : zf(J, L))) && (b && b(), ln(t, h, 3, [
          J,
          // pass undefined as the old value when it's changed for the first time
          L === yd ? void 0 : T && L[0] === yd ? [] : L,
          O
        ]), L = J);
      } else
        F.run();
  };
  $.allowRecurse = !!t;
  let at;
  i === "sync" ? at = $ : i === "post" ? at = () => ye($, h && h.suspense) : ($.pre = !0, h && ($.id = h.uid), at = () => hh($));
  const F = new Gp(g, at);
  F.onTrack = a, F.onTrigger = l, t ? e ? $() : L = F.run() : i === "post" ? ye(
    F.run.bind(F),
    h && h.suspense
  ) : F.run();
  const nt = () => {
    F.stop(), h && h.scope && $p(h.scope.effects, F);
  };
  return x && x.push(nt), nt;
}
function d2(n, t, e) {
  const r = this.proxy, i = Zt(n) ? n.includes(".") ? cw(r, n) : () => r[n] : n.bind(r, r);
  let a;
  kt(t) ? a = t : (a = t.handler, e = t);
  const l = le;
  pl(this);
  const c = ng(i, a.bind(r), e);
  return l ? pl(l) : Wc(), c;
}
function cw(n, t) {
  const e = t.split(".");
  return () => {
    let r = n;
    for (let i = 0; i < e.length && r; i++)
      r = r[e[i]];
    return r;
  };
}
function ol(n, t) {
  if (!Mt(n) || n.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(n)))
    return n;
  if (t.add(n), re(n))
    ol(n.value, t);
  else if (Nt(n))
    for (let e = 0; e < n.length; e++)
      ol(n[e], t);
  else if (CN(n) || ul(n))
    n.forEach((e) => {
      ol(e, t);
    });
  else if (RN(n))
    for (const e in n)
      ol(n[e], t);
  return n;
}
function lw(n) {
  MN(n) && X("Do not use built-in directive ids as custom directive id: " + n);
}
function qc(n, t, e, r) {
  const i = n.dirs, a = t && t.dirs;
  for (let l = 0; l < i.length; l++) {
    const c = i[l];
    a && (c.oldValue = a[l].value);
    let d = c.dir[r];
    d && (Yc(), ln(d, e, 8, [
      n.el,
      c,
      n,
      t
    ]), Zc());
  }
}
function wl(n, t) {
  return kt(n) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => _t({ name: n.name }, t, { setup: n }))()
  ) : n;
}
const xd = (n) => !!n.type.__asyncLoader, rg = (n) => n.type.__isKeepAlive;
function h2(n, t) {
  fw(n, "a", t);
}
function p2(n, t) {
  fw(n, "da", t);
}
function fw(n, t, e = le) {
  const r = n.__wdc || (n.__wdc = () => {
    let i = e;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return n();
  });
  if (gh(t, r, e), e) {
    let i = e.parent;
    for (; i && i.parent; )
      rg(i.parent.vnode) && g2(r, t, e, i), i = i.parent;
  }
}
function g2(n, t, e, r) {
  const i = gh(
    t,
    n,
    r,
    !0
    /* prepend */
  );
  mw(() => {
    $p(r[t], i);
  }, e);
}
function gh(n, t, e = le, r = !1) {
  if (e) {
    const i = e[n] || (e[n] = []), a = t.__weh || (t.__weh = (...l) => {
      if (e.isUnmounted)
        return;
      Yc(), pl(e);
      const c = ln(t, e, n, l);
      return Wc(), Zc(), c;
    });
    return r ? i.unshift(a) : i.push(a), a;
  } else {
    const i = Cc(Zp[n].replace(/ hook$/, ""));
    X(
      `${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Ma = (n) => (t, e = le) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Yf || n === "sp") && gh(n, (...r) => t(...r), e)
), y2 = Ma("bm"), yh = Ma("m"), w2 = Ma("bu"), T2 = Ma("u"), N2 = Ma("bum"), mw = Ma("um"), E2 = Ma("sp"), b2 = Ma(
  "rtg"
), k2 = Ma(
  "rtc"
);
function B2(n, t = le) {
  gh("ec", n, t);
}
const S2 = Symbol.for("v-ndc"), cp = (n) => n ? Ow(n) ? lg(n) || n.proxy : cp(n.parent) : null, jc = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ _t(/* @__PURE__ */ Object.create(null), {
    $: (n) => n,
    $el: (n) => n.vnode.el,
    $data: (n) => n.data,
    $props: (n) => Al(n.props),
    $attrs: (n) => Al(n.attrs),
    $slots: (n) => Al(n.slots),
    $refs: (n) => Al(n.refs),
    $parent: (n) => cp(n.parent),
    $root: (n) => cp(n.root),
    $emit: (n) => n.emit,
    $options: (n) => sg(n),
    $forceUpdate: (n) => n.f || (n.f = () => hh(n.update)),
    $nextTick: (n) => n.n || (n.n = op.bind(n.proxy)),
    $watch: (n) => d2.bind(n)
  })
), ig = (n) => n === "_" || n === "$", Uh = (n, t) => n !== Rt && !n.__isScriptSetup && At(n, t), dw = {
  get({ _: n }, t) {
    const { ctx: e, setupState: r, data: i, props: a, accessCache: l, type: c, appContext: d } = n;
    if (t === "__isVue")
      return !0;
    let h;
    if (t[0] !== "$") {
      const b = l[t];
      if (b !== void 0)
        switch (b) {
          case 1:
            return r[t];
          case 2:
            return i[t];
          case 4:
            return e[t];
          case 3:
            return a[t];
        }
      else {
        if (Uh(r, t))
          return l[t] = 1, r[t];
        if (i !== Rt && At(i, t))
          return l[t] = 2, i[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (h = n.propsOptions[0]) && At(h, t)
        )
          return l[t] = 3, a[t];
        if (e !== Rt && At(e, t))
          return l[t] = 4, e[t];
        lp && (l[t] = 0);
      }
    }
    const g = jc[t];
    let y, T;
    if (g)
      return t === "$attrs" ? (de(n, "get", t), Hd()) : t === "$slots" && de(n, "get", t), g(n);
    if (
      // css module (injected by vue-loader)
      (y = c.__cssModules) && (y = y[t])
    )
      return y;
    if (e !== Rt && At(e, t))
      return l[t] = 4, e[t];
    if (
      // {} properties
      T = d.config.globalProperties, At(T, t)
    )
      return T[t];
    _e && (!Zt(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (i !== Rt && ig(t[0]) && At(i, t) ? X(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : n === _e && X(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: n }, t, e) {
    const { data: r, setupState: i, ctx: a } = n;
    return Uh(i, t) ? (i[t] = e, !0) : i.__isScriptSetup && At(i, t) ? (X(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : r !== Rt && At(r, t) ? (r[t] = e, !0) : At(n.props, t) ? (X(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in n ? (X(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (t in n.appContext.config.globalProperties ? Object.defineProperty(a, t, {
      enumerable: !0,
      configurable: !0,
      value: e
    }) : a[t] = e, !0);
  },
  has({
    _: { data: n, setupState: t, accessCache: e, ctx: r, appContext: i, propsOptions: a }
  }, l) {
    let c;
    return !!e[l] || n !== Rt && At(n, l) || Uh(t, l) || (c = a[0]) && At(c, l) || At(r, l) || At(jc, l) || At(i.config.globalProperties, l);
  },
  defineProperty(n, t, e) {
    return e.get != null ? n._.accessCache[t] = 0 : At(e, "value") && this.set(n, t, e.value, null), Reflect.defineProperty(n, t, e);
  }
};
dw.ownKeys = (n) => (X(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(n));
function I2(n) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => n
  }), Object.keys(jc).forEach((e) => {
    Object.defineProperty(t, e, {
      configurable: !0,
      enumerable: !1,
      get: () => jc[e](n),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Se
    });
  }), t;
}
function O2(n) {
  const {
    ctx: t,
    propsOptions: [e]
  } = n;
  e && Object.keys(e).forEach((r) => {
    Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => n.props[r],
      set: Se
    });
  });
}
function v2(n) {
  const { ctx: t, setupState: e } = n;
  Object.keys(Ot(e)).forEach((r) => {
    if (!e.__isScriptSetup) {
      if (ig(r[0])) {
        X(
          `setup() return property ${JSON.stringify(
            r
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, r, {
        enumerable: !0,
        configurable: !0,
        get: () => e[r],
        set: Se
      });
    }
  });
}
function ty(n) {
  return Nt(n) ? n.reduce(
    (t, e) => (t[e] = null, t),
    {}
  ) : n;
}
function J2() {
  const n = /* @__PURE__ */ Object.create(null);
  return (t, e) => {
    n[e] ? X(`${t} property "${e}" is already defined in ${n[e]}.`) : n[e] = t;
  };
}
let lp = !0;
function x2(n) {
  const t = sg(n), e = n.proxy, r = n.ctx;
  lp = !1, t.beforeCreate && ey(t.beforeCreate, n, "bc");
  const {
    // state
    data: i,
    computed: a,
    methods: l,
    watch: c,
    provide: d,
    inject: h,
    // lifecycle
    created: g,
    beforeMount: y,
    mounted: T,
    beforeUpdate: b,
    updated: O,
    activated: x,
    deactivated: L,
    beforeDestroy: $,
    beforeUnmount: at,
    destroyed: F,
    unmounted: nt,
    render: J,
    renderTracked: Y,
    renderTriggered: rt,
    errorCaptured: ot,
    serverPrefetch: gt,
    // public API
    expose: Ft,
    inheritAttrs: Ut,
    // assets
    components: Pt,
    directives: $t,
    filters: fe
  } = t, Vt = J2();
  {
    const [G] = n.propsOptions;
    if (G)
      for (const v in G)
        Vt("Props", v);
  }
  if (h && A2(h, r, Vt), l)
    for (const G in l) {
      const v = l[G];
      kt(v) ? (Object.defineProperty(r, G, {
        value: v.bind(e),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }), Vt("Methods", G)) : X(
        `Method "${G}" has type "${typeof v}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (i) {
    kt(i) || X(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const G = i.call(e, e);
    if (_p(G) && X(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !Mt(G))
      X("data() should return an object.");
    else {
      n.data = fh(G);
      for (const v in G)
        Vt("Data", v), ig(v[0]) || Object.defineProperty(r, v, {
          configurable: !0,
          enumerable: !0,
          get: () => G[v],
          set: Se
        });
    }
  }
  if (lp = !0, a)
    for (const G in a) {
      const v = a[G], A = kt(v) ? v.bind(e, e) : kt(v.get) ? v.get.bind(e, e) : Se;
      A === Se && X(`Computed property "${G}" has no getter.`);
      const z = !kt(v) && kt(v.set) ? v.set.bind(e) : () => {
        X(
          `Write operation failed: computed property "${G}" is readonly.`
        );
      }, P = bb({
        get: A,
        set: z
      });
      Object.defineProperty(r, G, {
        enumerable: !0,
        configurable: !0,
        get: () => P.value,
        set: (_) => P.value = _
      }), Vt("Computed", G);
    }
  if (c)
    for (const G in c)
      hw(c[G], r, e, G);
  if (d) {
    const G = kt(d) ? d.call(e) : d;
    Reflect.ownKeys(G).forEach((v) => {
      P2(v, G[v]);
    });
  }
  g && ey(g, n, "c");
  function Ht(G, v) {
    Nt(v) ? v.forEach((A) => G(A.bind(e))) : v && G(v.bind(e));
  }
  if (Ht(y2, y), Ht(yh, T), Ht(w2, b), Ht(T2, O), Ht(h2, x), Ht(p2, L), Ht(B2, ot), Ht(k2, Y), Ht(b2, rt), Ht(N2, at), Ht(mw, nt), Ht(E2, gt), Nt(Ft))
    if (Ft.length) {
      const G = n.exposed || (n.exposed = {});
      Ft.forEach((v) => {
        Object.defineProperty(G, v, {
          get: () => e[v],
          set: (A) => e[v] = A
        });
      });
    } else
      n.exposed || (n.exposed = {});
  J && n.render === Se && (n.render = J), Ut != null && (n.inheritAttrs = Ut), Pt && (n.components = Pt), $t && (n.directives = $t);
}
function A2(n, t, e = Se) {
  Nt(n) && (n = fp(n));
  for (const r in n) {
    const i = n[r];
    let a;
    Mt(i) ? "default" in i ? a = fn(
      i.from || r,
      i.default,
      !0
      /* treat default function as factory */
    ) : a = fn(i.from || r) : a = fn(i), re(a) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => a.value,
      set: (l) => a.value = l
    }) : t[r] = a, e("Inject", r);
  }
}
function ey(n, t, e) {
  ln(
    Nt(n) ? n.map((r) => r.bind(t.proxy)) : n.bind(t.proxy),
    t,
    e
  );
}
function hw(n, t, e, r) {
  const i = r.includes(".") ? cw(e, r) : () => e[r];
  if (Zt(n)) {
    const a = t[n];
    kt(a) ? Ah(i, a) : X(`Invalid watch handler specified by key "${n}"`, a);
  } else if (kt(n))
    Ah(i, n.bind(e));
  else if (Mt(n))
    if (Nt(n))
      n.forEach((a) => hw(a, t, e, r));
    else {
      const a = kt(n.handler) ? n.handler.bind(e) : t[n.handler];
      kt(a) ? Ah(i, a, n) : X(`Invalid watch handler specified by key "${n.handler}"`, a);
    }
  else
    X(`Invalid watch option: "${r}"`, n);
}
function sg(n) {
  const t = n.type, { mixins: e, extends: r } = t, {
    mixins: i,
    optionsCache: a,
    config: { optionMergeStrategies: l }
  } = n.appContext, c = a.get(t);
  let d;
  return c ? d = c : !i.length && !e && !r ? d = t : (d = {}, i.length && i.forEach(
    (h) => zd(d, h, l, !0)
  ), zd(d, t, l)), Mt(t) && a.set(t, d), d;
}
function zd(n, t, e, r = !1) {
  const { mixins: i, extends: a } = t;
  a && zd(n, a, e, !0), i && i.forEach(
    (l) => zd(n, l, e, !0)
  );
  for (const l in t)
    if (r && l === "expose")
      X(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const c = U2[l] || e && e[l];
      n[l] = c ? c(n[l], t[l]) : t[l];
    }
  return n;
}
const U2 = {
  data: ny,
  props: ry,
  emits: ry,
  // objects
  methods: Ll,
  computed: Ll,
  // lifecycle
  beforeCreate: he,
  created: he,
  beforeMount: he,
  mounted: he,
  beforeUpdate: he,
  updated: he,
  beforeDestroy: he,
  beforeUnmount: he,
  destroyed: he,
  unmounted: he,
  activated: he,
  deactivated: he,
  errorCaptured: he,
  serverPrefetch: he,
  // assets
  components: Ll,
  directives: Ll,
  // watch
  watch: F2,
  // provide / inject
  provide: ny,
  inject: L2
};
function ny(n, t) {
  return t ? n ? function() {
    return _t(
      kt(n) ? n.call(this, this) : n,
      kt(t) ? t.call(this, this) : t
    );
  } : t : n;
}
function L2(n, t) {
  return Ll(fp(n), fp(t));
}
function fp(n) {
  if (Nt(n)) {
    const t = {};
    for (let e = 0; e < n.length; e++)
      t[n[e]] = n[e];
    return t;
  }
  return n;
}
function he(n, t) {
  return n ? [...new Set([].concat(n, t))] : t;
}
function Ll(n, t) {
  return n ? _t(/* @__PURE__ */ Object.create(null), n, t) : t;
}
function ry(n, t) {
  return n ? Nt(n) && Nt(t) ? [.../* @__PURE__ */ new Set([...n, ...t])] : _t(
    /* @__PURE__ */ Object.create(null),
    ty(n),
    ty(t ?? {})
  ) : t;
}
function F2(n, t) {
  if (!n)
    return t;
  if (!t)
    return n;
  const e = _t(/* @__PURE__ */ Object.create(null), n);
  for (const r in t)
    e[r] = he(n[r], t[r]);
  return e;
}
function pw() {
  return {
    app: null,
    config: {
      isNativeTag: J0,
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
let q2 = 0;
function D2(n, t) {
  return function(r, i = null) {
    kt(r) || (r = _t({}, r)), i != null && !Mt(i) && (X("root props passed to app.mount() must be an object."), i = null);
    const a = pw();
    Object.defineProperty(a.config, "unwrapInjectedRef", {
      get() {
        return !0;
      },
      set() {
        X(
          "app.config.unwrapInjectedRef has been deprecated. 3.3 now alawys unwraps injected refs in Options API."
        );
      }
    });
    const l = /* @__PURE__ */ new Set();
    let c = !1;
    const d = a.app = {
      _uid: q2++,
      _component: r,
      _props: i,
      _container: null,
      _context: a,
      _instance: null,
      version: dy,
      get config() {
        return a.config;
      },
      set config(h) {
        X(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(h, ...g) {
        return l.has(h) ? X("Plugin has already been applied to target app.") : h && kt(h.install) ? (l.add(h), h.install(d, ...g)) : kt(h) ? (l.add(h), h(d, ...g)) : X(
          'A plugin must either be a function or an object with an "install" function.'
        ), d;
      },
      mixin(h) {
        return a.mixins.includes(h) ? X(
          "Mixin has already been applied to target app" + (h.name ? `: ${h.name}` : "")
        ) : a.mixins.push(h), d;
      },
      component(h, g) {
        return gp(h, a.config), g ? (a.components[h] && X(`Component "${h}" has already been registered in target app.`), a.components[h] = g, d) : a.components[h];
      },
      directive(h, g) {
        return lw(h), g ? (a.directives[h] && X(`Directive "${h}" has already been registered in target app.`), a.directives[h] = g, d) : a.directives[h];
      },
      mount(h, g, y) {
        if (c)
          X(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          h.__vue_app__ && X(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const T = ar(
            r,
            i
          );
          return T.appContext = a, a.reload = () => {
            n(Uc(T), h, y);
          }, g && t ? t(T, h) : n(T, h, y), c = !0, d._container = h, h.__vue_app__ = d, d._instance = T.component, XE(d, dy), lg(T.component) || T.component.proxy;
        }
      },
      unmount() {
        c ? (n(null, d._container), d._instance = null, YE(d), delete d._container.__vue_app__) : X("Cannot unmount an app that is not mounted.");
      },
      provide(h, g) {
        return h in a.provides && X(
          `App already provides property with key "${String(h)}". It will be overwritten with the new value.`
        ), a.provides[h] = g, d;
      },
      runWithContext(h) {
        jd = d;
        try {
          return h();
        } finally {
          jd = null;
        }
      }
    };
    return d;
  };
}
let jd = null;
function P2(n, t) {
  if (!le)
    X("provide() can only be used inside setup().");
  else {
    let e = le.provides;
    const r = le.parent && le.parent.provides;
    r === e && (e = le.provides = Object.create(r)), e[n] = t;
  }
}
function fn(n, t, e = !1) {
  const r = le || _e;
  if (r || jd) {
    const i = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : jd._context.provides;
    if (i && n in i)
      return i[n];
    if (arguments.length > 1)
      return e && kt(t) ? t.call(r && r.proxy) : t;
    X(`injection "${String(n)}" not found.`);
  } else
    X("inject() can only be used inside setup() or functional components.");
}
function C2(n, t, e, r = !1) {
  const i = {}, a = {};
  Md(a, wh, 1), n.propsDefaults = /* @__PURE__ */ Object.create(null), gw(n, t, i, a);
  for (const l in n.propsOptions[0])
    l in i || (i[l] = void 0);
  ww(t || {}, i, n), e ? n.props = r ? i : AE(i) : n.type.props ? n.props = i : n.props = a, n.attrs = a;
}
function K2(n) {
  for (; n; ) {
    if (n.type.__hmrId)
      return !0;
    n = n.parent;
  }
}
function R2(n, t, e, r) {
  const {
    props: i,
    attrs: a,
    vnode: { patchFlag: l }
  } = n, c = Ot(i), [d] = n.propsOptions;
  let h = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !K2(n) && (r || l > 0) && !(l & 16)
  ) {
    if (l & 8) {
      const g = n.vnode.dynamicProps;
      for (let y = 0; y < g.length; y++) {
        let T = g[y];
        if (ph(n.emitsOptions, T))
          continue;
        const b = t[T];
        if (d)
          if (At(a, T))
            b !== a[T] && (a[T] = b, h = !0);
          else {
            const O = hl(T);
            i[O] = mp(
              d,
              c,
              O,
              b,
              n,
              !1
              /* isAbsent */
            );
          }
        else
          b !== a[T] && (a[T] = b, h = !0);
      }
    }
  } else {
    gw(n, t, i, a) && (h = !0);
    let g;
    for (const y in c)
      (!t || // for camelCase
      !At(t, y) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((g = Jc(y)) === y || !At(t, g))) && (d ? e && // for camelCase
      (e[y] !== void 0 || // for kebab-case
      e[g] !== void 0) && (i[y] = mp(
        d,
        c,
        y,
        void 0,
        n,
        !0
        /* isAbsent */
      )) : delete i[y]);
    if (a !== c)
      for (const y in a)
        (!t || !At(t, y)) && (delete a[y], h = !0);
  }
  h && cr(n, "set", "$attrs"), ww(t || {}, i, n);
}
function gw(n, t, e, r) {
  const [i, a] = n.propsOptions;
  let l = !1, c;
  if (t)
    for (let d in t) {
      if (Od(d))
        continue;
      const h = t[d];
      let g;
      i && At(i, g = hl(d)) ? !a || !a.includes(g) ? e[g] = h : (c || (c = {}))[g] = h : ph(n.emitsOptions, d) || (!(d in r) || h !== r[d]) && (r[d] = h, l = !0);
    }
  if (a) {
    const d = Ot(e), h = c || Rt;
    for (let g = 0; g < a.length; g++) {
      const y = a[g];
      e[y] = mp(
        i,
        d,
        y,
        h[y],
        n,
        !At(h, y)
      );
    }
  }
  return l;
}
function mp(n, t, e, r, i, a) {
  const l = n[e];
  if (l != null) {
    const c = At(l, "default");
    if (c && r === void 0) {
      const d = l.default;
      if (l.type !== Function && !l.skipFactory && kt(d)) {
        const { propsDefaults: h } = i;
        e in h ? r = h[e] : (pl(i), r = h[e] = d.call(
          null,
          t
        ), Wc());
      } else
        r = d;
    }
    l[
      0
      /* shouldCast */
    ] && (a && !c ? r = !1 : l[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === Jc(e)) && (r = !0));
  }
  return r;
}
function yw(n, t, e = !1) {
  const r = t.propsCache, i = r.get(n);
  if (i)
    return i;
  const a = n.props, l = {}, c = [];
  let d = !1;
  if (!kt(n)) {
    const g = (y) => {
      d = !0;
      const [T, b] = yw(y, t, !0);
      _t(l, T), b && c.push(...b);
    };
    !e && t.mixins.length && t.mixins.forEach(g), n.extends && g(n.extends), n.mixins && n.mixins.forEach(g);
  }
  if (!a && !d)
    return Mt(n) && r.set(n, al), al;
  if (Nt(a))
    for (let g = 0; g < a.length; g++) {
      Zt(a[g]) || X("props must be strings when using array syntax.", a[g]);
      const y = hl(a[g]);
      iy(y) && (l[y] = Rt);
    }
  else if (a) {
    Mt(a) || X("invalid props options", a);
    for (const g in a) {
      const y = hl(g);
      if (iy(y)) {
        const T = a[g], b = l[y] = Nt(T) || kt(T) ? { type: T } : _t({}, T);
        if (b) {
          const O = oy(Boolean, b.type), x = oy(String, b.type);
          b[
            0
            /* shouldCast */
          ] = O > -1, b[
            1
            /* shouldCastTrue */
          ] = x < 0 || O < x, (O > -1 || At(b, "default")) && c.push(y);
        }
      }
    }
  }
  const h = [l, c];
  return Mt(n) && r.set(n, h), h;
}
function iy(n) {
  return n[0] !== "$" ? !0 : (X(`Invalid prop name: "${n}" is a reserved property.`), !1);
}
function dp(n) {
  const t = n && n.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : n === null ? "null" : "";
}
function sy(n, t) {
  return dp(n) === dp(t);
}
function oy(n, t) {
  return Nt(t) ? t.findIndex((e) => sy(e, n)) : kt(t) && sy(t, n) ? 0 : -1;
}
function ww(n, t, e) {
  const r = Ot(t), i = e.propsOptions[0];
  for (const a in i) {
    let l = i[a];
    l != null && M2(
      a,
      r[a],
      l,
      !At(n, a) && !At(n, Jc(a))
    );
  }
}
function M2(n, t, e, r) {
  const { type: i, required: a, validator: l, skipCheck: c } = e;
  if (a && r) {
    X('Missing required prop: "' + n + '"');
    return;
  }
  if (!(t == null && !a)) {
    if (i != null && i !== !0 && !c) {
      let d = !1;
      const h = Nt(i) ? i : [i], g = [];
      for (let y = 0; y < h.length && !d; y++) {
        const { valid: T, expectedType: b } = V2(t, h[y]);
        g.push(b || ""), d = T;
      }
      if (!d) {
        X(_2(n, t, g));
        return;
      }
    }
    l && !l(t) && X('Invalid prop: custom validator check failed for prop "' + n + '".');
  }
}
const $2 = /* @__PURE__ */ Lc(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function V2(n, t) {
  let e;
  const r = dp(t);
  if ($2(r)) {
    const i = typeof n;
    e = i === r.toLowerCase(), !e && i === "object" && (e = n instanceof t);
  } else
    r === "Object" ? e = Mt(n) : r === "Array" ? e = Nt(n) : r === "null" ? e = n === null : e = n instanceof t;
  return {
    valid: e,
    expectedType: r
  };
}
function _2(n, t, e) {
  let r = `Invalid prop: type check failed for prop "${n}". Expected ${e.map(ah).join(" | ")}`;
  const i = e[0], a = Hp(t), l = ay(t, i), c = ay(t, a);
  return e.length === 1 && uy(i) && !H2(i, a) && (r += ` with value ${l}`), r += `, got ${a} `, uy(a) && (r += `with value ${c}.`), r;
}
function ay(n, t) {
  return t === "String" ? `"${n}"` : t === "Number" ? `${Number(n)}` : `${n}`;
}
function uy(n) {
  return ["string", "number", "boolean"].some((e) => n.toLowerCase() === e);
}
function H2(...n) {
  return n.some((t) => t.toLowerCase() === "boolean");
}
const Tw = (n) => n[0] === "_" || n === "$stable", og = (n) => Nt(n) ? n.map(Ye) : [Ye(n)], z2 = (n, t, e) => {
  if (t._n)
    return t;
  const r = s2((...i) => (le && X(
    `Slot "${n}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), og(t(...i))), e);
  return r._c = !1, r;
}, Nw = (n, t, e) => {
  const r = n._ctx;
  for (const i in n) {
    if (Tw(i))
      continue;
    const a = n[i];
    if (kt(a))
      t[i] = z2(i, a, r);
    else if (a != null) {
      X(
        `Non-function value encountered for slot "${i}". Prefer function slots for better performance.`
      );
      const l = og(a);
      t[i] = () => l;
    }
  }
}, Ew = (n, t) => {
  rg(n.vnode) || X(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const e = og(t);
  n.slots.default = () => e;
}, j2 = (n, t) => {
  if (n.vnode.shapeFlag & 32) {
    const e = t._;
    e ? (n.slots = Ot(t), Md(t, "_", e)) : Nw(
      t,
      n.slots = {}
    );
  } else
    n.slots = {}, t && Ew(n, t);
  Md(n.slots, wh, 1);
}, W2 = (n, t, e) => {
  const { vnode: r, slots: i } = n;
  let a = !0, l = Rt;
  if (r.shapeFlag & 32) {
    const c = t._;
    c ? Oc ? (_t(i, t), cr(n, "set", "$slots")) : e && c === 1 ? a = !1 : (_t(i, t), !e && c === 1 && delete i._) : (a = !t.$stable, Nw(t, i)), l = t;
  } else
    t && (Ew(n, t), l = { default: 1 });
  if (a)
    for (const c in i)
      !Tw(c) && !(c in l) && delete i[c];
};
function hp(n, t, e, r, i = !1) {
  if (Nt(n)) {
    n.forEach(
      (T, b) => hp(
        T,
        t && (Nt(t) ? t[b] : t),
        e,
        r,
        i
      )
    );
    return;
  }
  if (xd(r) && !i)
    return;
  const a = r.shapeFlag & 4 ? lg(r.component) || r.component.proxy : r.el, l = i ? null : a, { i: c, r: d } = n;
  if (!c) {
    X(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const h = t && t.r, g = c.refs === Rt ? c.refs = {} : c.refs, y = c.setupState;
  if (h != null && h !== d && (Zt(h) ? (g[h] = null, At(y, h) && (y[h] = null)) : re(h) && (h.value = null)), kt(d))
    Ca(d, c, 12, [l, g]);
  else {
    const T = Zt(d), b = re(d);
    if (T || b) {
      const O = () => {
        if (n.f) {
          const x = T ? At(y, d) ? y[d] : g[d] : d.value;
          i ? Nt(x) && $p(x, a) : Nt(x) ? x.includes(a) || x.push(a) : T ? (g[d] = [a], At(y, d) && (y[d] = g[d])) : (d.value = [a], n.k && (g[n.k] = d.value));
        } else
          T ? (g[d] = l, At(y, d) && (y[d] = l)) : b ? (d.value = l, n.k && (g[n.k] = l)) : X("Invalid template ref type:", d, `(${typeof d})`);
      };
      l ? (O.id = -1, ye(O, e)) : O();
    } else
      X("Invalid template ref type:", d, `(${typeof d})`);
  }
}
let kl, iu;
function mr(n, t) {
  n.appContext.config.performance && Wd() && iu.mark(`vue-${t}-${n.uid}`), e2(n, t, Wd() ? iu.now() : Date.now());
}
function dr(n, t) {
  if (n.appContext.config.performance && Wd()) {
    const e = `vue-${t}-${n.uid}`, r = e + ":end";
    iu.mark(r), iu.measure(
      `<${Th(n, n.type)}> ${t}`,
      e,
      r
    ), iu.clearMarks(e), iu.clearMarks(r);
  }
  n2(n, t, Wd() ? iu.now() : Date.now());
}
function Wd() {
  return kl !== void 0 || (typeof window < "u" && window.performance ? (kl = !0, iu = window.performance) : kl = !1), kl;
}
function G2() {
  const n = [];
  if (n.length) {
    const t = n.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${n.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const ye = m2;
function X2(n) {
  return Y2(n);
}
function Y2(n, t) {
  G2();
  const e = $d();
  e.__VUE__ = !0, nw(e.__VUE_DEVTOOLS_GLOBAL_HOOK__, e);
  const {
    insert: r,
    remove: i,
    patchProp: a,
    createElement: l,
    createText: c,
    createComment: d,
    setText: h,
    setElementText: g,
    parentNode: y,
    nextSibling: T,
    setScopeId: b = Se,
    insertStaticContent: O
  } = n, x = (N, k, U, C = null, D = null, H = null, Z = !1, M = null, V = Oc ? !1 : !!k.dynamicChildren) => {
    if (N === k)
      return;
    N && !Bl(N, k) && (C = yt(N), it(N, D, H, !0), N = null), k.patchFlag === -2 && (V = !1, k.dynamicChildren = null);
    const { type: q, ref: tt, shapeFlag: et } = k;
    switch (q) {
      case id:
        L(N, k, U, C);
        break;
      case De:
        $(N, k, U, C);
        break;
      case Ad:
        N == null ? at(k, U, C, Z) : F(N, k, U, Z);
        break;
      case Xe:
        $t(
          N,
          k,
          U,
          C,
          D,
          H,
          Z,
          M,
          V
        );
        break;
      default:
        et & 1 ? Y(
          N,
          k,
          U,
          C,
          D,
          H,
          Z,
          M,
          V
        ) : et & 6 ? fe(
          N,
          k,
          U,
          C,
          D,
          H,
          Z,
          M,
          V
        ) : et & 64 || et & 128 ? q.process(
          N,
          k,
          U,
          C,
          D,
          H,
          Z,
          M,
          V,
          xt
        ) : X("Invalid VNode type:", q, `(${typeof q})`);
    }
    tt != null && D && hp(tt, N && N.ref, H, k || N, !k);
  }, L = (N, k, U, C) => {
    if (N == null)
      r(
        k.el = c(k.children),
        U,
        C
      );
    else {
      const D = k.el = N.el;
      k.children !== N.children && h(D, k.children);
    }
  }, $ = (N, k, U, C) => {
    N == null ? r(
      k.el = d(k.children || ""),
      U,
      C
    ) : k.el = N.el;
  }, at = (N, k, U, C) => {
    [N.el, N.anchor] = O(
      N.children,
      k,
      U,
      C,
      N.el,
      N.anchor
    );
  }, F = (N, k, U, C) => {
    if (k.children !== N.children) {
      const D = T(N.anchor);
      J(N), [k.el, k.anchor] = O(
        k.children,
        U,
        D,
        C
      );
    } else
      k.el = N.el, k.anchor = N.anchor;
  }, nt = ({ el: N, anchor: k }, U, C) => {
    let D;
    for (; N && N !== k; )
      D = T(N), r(N, U, C), N = D;
    r(k, U, C);
  }, J = ({ el: N, anchor: k }) => {
    let U;
    for (; N && N !== k; )
      U = T(N), i(N), N = U;
    i(k);
  }, Y = (N, k, U, C, D, H, Z, M, V) => {
    Z = Z || k.type === "svg", N == null ? rt(
      k,
      U,
      C,
      D,
      H,
      Z,
      M,
      V
    ) : Ft(
      N,
      k,
      D,
      H,
      Z,
      M,
      V
    );
  }, rt = (N, k, U, C, D, H, Z, M) => {
    let V, q;
    const { type: tt, props: et, shapeFlag: Q, transition: ht, dirs: o } = N;
    if (V = N.el = l(
      N.type,
      H,
      et && et.is,
      et
    ), Q & 8 ? g(V, N.children) : Q & 16 && gt(
      N.children,
      V,
      null,
      C,
      D,
      H && tt !== "foreignObject",
      Z,
      M
    ), o && qc(N, null, C, "created"), ot(V, N, N.scopeId, Z, C), et) {
      for (const u in et)
        u !== "value" && !Od(u) && a(
          V,
          u,
          null,
          et[u],
          H,
          N.children,
          C,
          D,
          dt
        );
      "value" in et && a(V, "value", null, et.value), (q = et.onVnodeBeforeMount) && pn(q, C, N);
    }
    Object.defineProperty(V, "__vnode", {
      value: N,
      enumerable: !1
    }), Object.defineProperty(V, "__vueParentComponent", {
      value: C,
      enumerable: !1
    }), o && qc(N, null, C, "beforeMount");
    const s = (!D || D && !D.pendingBranch) && ht && !ht.persisted;
    s && ht.beforeEnter(V), r(V, k, U), ((q = et && et.onVnodeMounted) || s || o) && ye(() => {
      q && pn(q, C, N), s && ht.enter(V), o && qc(N, null, C, "mounted");
    }, D);
  }, ot = (N, k, U, C, D) => {
    if (U && b(N, U), C)
      for (let H = 0; H < C.length; H++)
        b(N, C[H]);
    if (D) {
      let H = D.subTree;
      if (H.patchFlag > 0 && H.patchFlag & 2048 && (H = aw(H.children) || H), k === H) {
        const Z = D.vnode;
        ot(
          N,
          Z,
          Z.scopeId,
          Z.slotScopeIds,
          D.parent
        );
      }
    }
  }, gt = (N, k, U, C, D, H, Z, M, V = 0) => {
    for (let q = V; q < N.length; q++) {
      const tt = N[q] = M ? ru(N[q]) : Ye(N[q]);
      x(
        null,
        tt,
        k,
        U,
        C,
        D,
        H,
        Z,
        M
      );
    }
  }, Ft = (N, k, U, C, D, H, Z) => {
    const M = k.el = N.el;
    let { patchFlag: V, dynamicChildren: q, dirs: tt } = k;
    V |= N.patchFlag & 16;
    const et = N.props || Rt, Q = k.props || Rt;
    let ht;
    U && Dc(U, !1), (ht = Q.onVnodeBeforeUpdate) && pn(ht, U, k, N), tt && qc(k, N, U, "beforeUpdate"), U && Dc(U, !0), Oc && (V = 0, Z = !1, q = null);
    const o = D && k.type !== "foreignObject";
    if (q ? (Ut(
      N.dynamicChildren,
      q,
      M,
      U,
      C,
      o,
      H
    ), Gd(N, k)) : Z || A(
      N,
      k,
      M,
      null,
      U,
      C,
      o,
      H,
      !1
    ), V > 0) {
      if (V & 16)
        Pt(
          M,
          k,
          et,
          Q,
          U,
          C,
          D
        );
      else if (V & 2 && et.class !== Q.class && a(M, "class", null, Q.class, D), V & 4 && a(M, "style", et.style, Q.style, D), V & 8) {
        const s = k.dynamicProps;
        for (let u = 0; u < s.length; u++) {
          const p = s[u], w = et[p], E = Q[p];
          (E !== w || p === "value") && a(
            M,
            p,
            w,
            E,
            D,
            N.children,
            U,
            C,
            dt
          );
        }
      }
      V & 1 && N.children !== k.children && g(M, k.children);
    } else
      !Z && q == null && Pt(
        M,
        k,
        et,
        Q,
        U,
        C,
        D
      );
    ((ht = Q.onVnodeUpdated) || tt) && ye(() => {
      ht && pn(ht, U, k, N), tt && qc(k, N, U, "updated");
    }, C);
  }, Ut = (N, k, U, C, D, H, Z) => {
    for (let M = 0; M < k.length; M++) {
      const V = N[M], q = k[M], tt = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        V.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (V.type === Xe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Bl(V, q) || // - In the case of a component, it could contain anything.
        V.shapeFlag & 70) ? y(V.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          U
        )
      );
      x(
        V,
        q,
        tt,
        null,
        C,
        D,
        H,
        Z,
        !0
      );
    }
  }, Pt = (N, k, U, C, D, H, Z) => {
    if (U !== C) {
      if (U !== Rt)
        for (const M in U)
          !Od(M) && !(M in C) && a(
            N,
            M,
            U[M],
            null,
            Z,
            k.children,
            D,
            H,
            dt
          );
      for (const M in C) {
        if (Od(M))
          continue;
        const V = C[M], q = U[M];
        V !== q && M !== "value" && a(
          N,
          M,
          q,
          V,
          Z,
          k.children,
          D,
          H,
          dt
        );
      }
      "value" in C && a(N, "value", U.value, C.value);
    }
  }, $t = (N, k, U, C, D, H, Z, M, V) => {
    const q = k.el = N ? N.el : c(""), tt = k.anchor = N ? N.anchor : c("");
    let { patchFlag: et, dynamicChildren: Q, slotScopeIds: ht } = k;
    // #5523 dev root fragment may inherit directives
    (Oc || et & 2048) && (et = 0, V = !1, Q = null), ht && (M = M ? M.concat(ht) : ht), N == null ? (r(q, U, C), r(tt, U, C), gt(
      k.children,
      U,
      tt,
      D,
      H,
      Z,
      M,
      V
    )) : et > 0 && et & 64 && Q && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    N.dynamicChildren ? (Ut(
      N.dynamicChildren,
      Q,
      U,
      D,
      H,
      Z,
      M
    ), Gd(N, k)) : A(
      N,
      k,
      U,
      tt,
      D,
      H,
      Z,
      M,
      V
    );
  }, fe = (N, k, U, C, D, H, Z, M, V) => {
    k.slotScopeIds = M, N == null ? k.shapeFlag & 512 ? D.ctx.activate(
      k,
      U,
      C,
      Z,
      V
    ) : Vt(
      k,
      U,
      C,
      D,
      H,
      Z,
      V
    ) : Ht(N, k, V);
  }, Vt = (N, k, U, C, D, H, Z) => {
    const M = N.component = mb(
      N,
      C,
      D
    );
    if (M.type.__hmrId && zE(M), vd(N), mr(M, "mount"), rg(N) && (M.ctx.renderer = xt), mr(M, "init"), hb(M), dr(M, "init"), M.asyncDep) {
      if (D && D.registerDep(M, G), !N.el) {
        const V = M.subTree = ar(De);
        $(null, V, k, U);
      }
      return;
    }
    G(
      M,
      N,
      k,
      U,
      D,
      H,
      Z
    ), Jd(), dr(M, "mount");
  }, Ht = (N, k, U) => {
    const C = k.component = N.component;
    if (c2(N, k, U))
      if (C.asyncDep && !C.asyncResolved) {
        vd(k), v(C, k, U), Jd();
        return;
      } else
        C.next = k, _E(C.update), C.update();
    else
      k.el = N.el, C.vnode = k;
  }, G = (N, k, U, C, D, H, Z) => {
    const M = () => {
      if (N.isMounted) {
        let { next: tt, bu: et, u: Q, parent: ht, vnode: o } = N, s = tt, u;
        vd(tt || N.vnode), Dc(N, !1), tt ? (tt.el = o.el, v(N, tt, Z)) : tt = o, et && bl(et), (u = tt.props && tt.props.onVnodeBeforeUpdate) && pn(u, ht, tt, o), Dc(N, !0), mr(N, "render");
        const p = xh(N);
        dr(N, "render");
        const w = N.subTree;
        N.subTree = p, mr(N, "patch"), x(
          w,
          p,
          // parent may have changed if it's in a teleport
          y(w.el),
          // anchor may have changed if it's in a fragment
          yt(w),
          N,
          D,
          H
        ), dr(N, "patch"), tt.el = p.el, s === null && l2(N, p.el), Q && ye(Q, D), (u = tt.props && tt.props.onVnodeUpdated) && ye(
          () => pn(u, ht, tt, o),
          D
        ), rw(N), Jd();
      } else {
        let tt;
        const { el: et, props: Q } = k, { bm: ht, m: o, parent: s } = N, u = xd(k);
        if (Dc(N, !1), ht && bl(ht), !u && (tt = Q && Q.onVnodeBeforeMount) && pn(tt, s, k), Dc(N, !0), et && Kt) {
          const p = () => {
            mr(N, "render"), N.subTree = xh(N), dr(N, "render"), mr(N, "hydrate"), Kt(
              et,
              N.subTree,
              N,
              D,
              null
            ), dr(N, "hydrate");
          };
          u ? k.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !N.isUnmounted && p()
          ) : p();
        } else {
          mr(N, "render");
          const p = N.subTree = xh(N);
          dr(N, "render"), mr(N, "patch"), x(
            null,
            p,
            U,
            C,
            N,
            D,
            H
          ), dr(N, "patch"), k.el = p.el;
        }
        if (o && ye(o, D), !u && (tt = Q && Q.onVnodeMounted)) {
          const p = k;
          ye(
            () => pn(tt, s, p),
            D
          );
        }
        (k.shapeFlag & 256 || s && xd(s.vnode) && s.vnode.shapeFlag & 256) && N.a && ye(N.a, D), N.isMounted = !0, ZE(N), k = U = C = null;
      }
    }, V = N.effect = new Gp(
      M,
      () => hh(q),
      N.scope
      // track it in component's effect scope
    ), q = N.update = () => V.run();
    q.id = N.uid, Dc(N, !0), V.onTrack = N.rtc ? (tt) => bl(N.rtc, tt) : void 0, V.onTrigger = N.rtg ? (tt) => bl(N.rtg, tt) : void 0, q.ownerInstance = N, q();
  }, v = (N, k, U) => {
    k.component = N;
    const C = N.vnode.props;
    N.vnode = k, N.next = null, R2(N, k.props, C, U), W2(N, k.children, U), Yc(), Xg(), Zc();
  }, A = (N, k, U, C, D, H, Z, M, V = !1) => {
    const q = N && N.children, tt = N ? N.shapeFlag : 0, et = k.children, { patchFlag: Q, shapeFlag: ht } = k;
    if (Q > 0) {
      if (Q & 128) {
        P(
          q,
          et,
          U,
          C,
          D,
          H,
          Z,
          M,
          V
        );
        return;
      } else if (Q & 256) {
        z(
          q,
          et,
          U,
          C,
          D,
          H,
          Z,
          M,
          V
        );
        return;
      }
    }
    ht & 8 ? (tt & 16 && dt(q, D, H), et !== q && g(U, et)) : tt & 16 ? ht & 16 ? P(
      q,
      et,
      U,
      C,
      D,
      H,
      Z,
      M,
      V
    ) : dt(q, D, H, !0) : (tt & 8 && g(U, ""), ht & 16 && gt(
      et,
      U,
      C,
      D,
      H,
      Z,
      M,
      V
    ));
  }, z = (N, k, U, C, D, H, Z, M, V) => {
    N = N || al, k = k || al;
    const q = N.length, tt = k.length, et = Math.min(q, tt);
    let Q;
    for (Q = 0; Q < et; Q++) {
      const ht = k[Q] = V ? ru(k[Q]) : Ye(k[Q]);
      x(
        N[Q],
        ht,
        U,
        null,
        D,
        H,
        Z,
        M,
        V
      );
    }
    q > tt ? dt(
      N,
      D,
      H,
      !0,
      !1,
      et
    ) : gt(
      k,
      U,
      C,
      D,
      H,
      Z,
      M,
      V,
      et
    );
  }, P = (N, k, U, C, D, H, Z, M, V) => {
    let q = 0;
    const tt = k.length;
    let et = N.length - 1, Q = tt - 1;
    for (; q <= et && q <= Q; ) {
      const ht = N[q], o = k[q] = V ? ru(k[q]) : Ye(k[q]);
      if (Bl(ht, o))
        x(
          ht,
          o,
          U,
          null,
          D,
          H,
          Z,
          M,
          V
        );
      else
        break;
      q++;
    }
    for (; q <= et && q <= Q; ) {
      const ht = N[et], o = k[Q] = V ? ru(k[Q]) : Ye(k[Q]);
      if (Bl(ht, o))
        x(
          ht,
          o,
          U,
          null,
          D,
          H,
          Z,
          M,
          V
        );
      else
        break;
      et--, Q--;
    }
    if (q > et) {
      if (q <= Q) {
        const ht = Q + 1, o = ht < tt ? k[ht].el : C;
        for (; q <= Q; )
          x(
            null,
            k[q] = V ? ru(k[q]) : Ye(k[q]),
            U,
            o,
            D,
            H,
            Z,
            M,
            V
          ), q++;
      }
    } else if (q > Q)
      for (; q <= et; )
        it(N[q], D, H, !0), q++;
    else {
      const ht = q, o = q, s = /* @__PURE__ */ new Map();
      for (q = o; q <= Q; q++) {
        const ut = k[q] = V ? ru(k[q]) : Ye(k[q]);
        ut.key != null && (s.has(ut.key) && X(
          "Duplicate keys found during update:",
          JSON.stringify(ut.key),
          "Make sure keys are unique."
        ), s.set(ut.key, q));
      }
      let u, p = 0;
      const w = Q - o + 1;
      let E = !1, B = 0;
      const st = new Array(w);
      for (q = 0; q < w; q++)
        st[q] = 0;
      for (q = ht; q <= et; q++) {
        const ut = N[q];
        if (p >= w) {
          it(ut, D, H, !0);
          continue;
        }
        let lt;
        if (ut.key != null)
          lt = s.get(ut.key);
        else
          for (u = o; u <= Q; u++)
            if (st[u - o] === 0 && Bl(ut, k[u])) {
              lt = u;
              break;
            }
        lt === void 0 ? it(ut, D, H, !0) : (st[lt - o] = q + 1, lt >= B ? B = lt : E = !0, x(
          ut,
          k[lt],
          U,
          null,
          D,
          H,
          Z,
          M,
          V
        ), p++);
      }
      const Bt = E ? Z2(st) : al;
      for (u = Bt.length - 1, q = w - 1; q >= 0; q--) {
        const ut = o + q, lt = k[ut], pt = ut + 1 < tt ? k[ut + 1].el : C;
        st[q] === 0 ? x(
          null,
          lt,
          U,
          pt,
          D,
          H,
          Z,
          M,
          V
        ) : E && (u < 0 || q !== Bt[u] ? _(lt, U, pt, 2) : u--);
      }
    }
  }, _ = (N, k, U, C, D = null) => {
    const { el: H, type: Z, transition: M, children: V, shapeFlag: q } = N;
    if (q & 6) {
      _(N.component.subTree, k, U, C);
      return;
    }
    if (q & 128) {
      N.suspense.move(k, U, C);
      return;
    }
    if (q & 64) {
      Z.move(N, k, U, xt);
      return;
    }
    if (Z === Xe) {
      r(H, k, U);
      for (let et = 0; et < V.length; et++)
        _(V[et], k, U, C);
      r(N.anchor, k, U);
      return;
    }
    if (Z === Ad) {
      nt(N, k, U);
      return;
    }
    if (C !== 2 && q & 1 && M)
      if (C === 0)
        M.beforeEnter(H), r(H, k, U), ye(() => M.enter(H), D);
      else {
        const { leave: et, delayLeave: Q, afterLeave: ht } = M, o = () => r(H, k, U), s = () => {
          et(H, () => {
            o(), ht && ht();
          });
        };
        Q ? Q(H, o, s) : s();
      }
    else
      r(H, k, U);
  }, it = (N, k, U, C = !1, D = !1) => {
    const {
      type: H,
      props: Z,
      ref: M,
      children: V,
      dynamicChildren: q,
      shapeFlag: tt,
      patchFlag: et,
      dirs: Q
    } = N;
    if (M != null && hp(M, null, U, N, !0), tt & 256) {
      k.ctx.deactivate(N);
      return;
    }
    const ht = tt & 1 && Q, o = !xd(N);
    let s;
    if (o && (s = Z && Z.onVnodeBeforeUnmount) && pn(s, k, N), tt & 6)
      ct(N.component, U, C);
    else {
      if (tt & 128) {
        N.suspense.unmount(U, C);
        return;
      }
      ht && qc(N, null, k, "beforeUnmount"), tt & 64 ? N.type.remove(
        N,
        k,
        U,
        D,
        xt,
        C
      ) : q && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (H !== Xe || et > 0 && et & 64) ? dt(
        q,
        k,
        U,
        !1,
        !0
      ) : (H === Xe && et & 384 || !D && tt & 16) && dt(V, k, U), C && ft(N);
    }
    (o && (s = Z && Z.onVnodeUnmounted) || ht) && ye(() => {
      s && pn(s, k, N), ht && qc(N, null, k, "unmounted");
    }, U);
  }, ft = (N) => {
    const { type: k, el: U, anchor: C, transition: D } = N;
    if (k === Xe) {
      N.patchFlag > 0 && N.patchFlag & 2048 && D && !D.persisted ? N.children.forEach((Z) => {
        Z.type === De ? i(Z.el) : ft(Z);
      }) : mt(U, C);
      return;
    }
    if (k === Ad) {
      J(N);
      return;
    }
    const H = () => {
      i(U), D && !D.persisted && D.afterLeave && D.afterLeave();
    };
    if (N.shapeFlag & 1 && D && !D.persisted) {
      const { leave: Z, delayLeave: M } = D, V = () => Z(U, H);
      M ? M(N.el, H, V) : V();
    } else
      H();
  }, mt = (N, k) => {
    let U;
    for (; N !== k; )
      U = T(N), i(N), N = U;
    i(k);
  }, ct = (N, k, U) => {
    N.type.__hmrId && jE(N);
    const { bum: C, scope: D, update: H, subTree: Z, um: M } = N;
    C && bl(C), D.stop(), H && (H.active = !1, it(Z, N, k, U)), M && ye(M, k), ye(() => {
      N.isUnmounted = !0;
    }, k), k && k.pendingBranch && !k.isUnmounted && N.asyncDep && !N.asyncResolved && N.suspenseId === k.pendingId && (k.deps--, k.deps === 0 && k.resolve()), t2(N);
  }, dt = (N, k, U, C = !1, D = !1, H = 0) => {
    for (let Z = H; Z < N.length; Z++)
      it(N[Z], k, U, C, D);
  }, yt = (N) => N.shapeFlag & 6 ? yt(N.component.subTree) : N.shapeFlag & 128 ? N.suspense.next() : T(N.anchor || N.el), Lt = (N, k, U) => {
    N == null ? k._vnode && it(k._vnode, null, null, !0) : x(k._vnode || null, N, k, null, null, null, U), Xg(), Q0(), k._vnode = N;
  }, xt = {
    p: x,
    um: it,
    m: _,
    r: ft,
    mt: Vt,
    mc: gt,
    pc: A,
    pbc: Ut,
    n: yt,
    o: n
  };
  let qt, Kt;
  return t && ([qt, Kt] = t(
    xt
  )), {
    render: Lt,
    hydrate: qt,
    createApp: D2(Lt, qt)
  };
}
function Dc({ effect: n, update: t }, e) {
  n.allowRecurse = t.allowRecurse = e;
}
function Gd(n, t, e = !1) {
  const r = n.children, i = t.children;
  if (Nt(r) && Nt(i))
    for (let a = 0; a < r.length; a++) {
      const l = r[a];
      let c = i[a];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = i[a] = ru(i[a]), c.el = l.el), e || Gd(l, c)), c.type === id && (c.el = l.el), c.type === De && !c.el && (c.el = l.el);
    }
}
function Z2(n) {
  const t = n.slice(), e = [0];
  let r, i, a, l, c;
  const d = n.length;
  for (r = 0; r < d; r++) {
    const h = n[r];
    if (h !== 0) {
      if (i = e[e.length - 1], n[i] < h) {
        t[r] = i, e.push(r);
        continue;
      }
      for (a = 0, l = e.length - 1; a < l; )
        c = a + l >> 1, n[e[c]] < h ? a = c + 1 : l = c;
      h < n[e[a]] && (a > 0 && (t[r] = e[a - 1]), e[a] = r);
    }
  }
  for (a = e.length, l = e[a - 1]; a-- > 0; )
    e[a] = l, l = t[l];
  return e;
}
const Q2 = (n) => n.__isTeleport, ll = (n) => n && (n.disabled || n.disabled === ""), cy = (n) => typeof SVGElement < "u" && n instanceof SVGElement, pp = (n, t) => {
  const e = n && n.to;
  if (Zt(e))
    if (t) {
      const r = t(e);
      return r || X(
        `Failed to locate Teleport target with selector "${e}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), r;
    } else
      return X(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return !e && !ll(n) && X(`Invalid Teleport target: ${e}`), e;
}, tb = {
  __isTeleport: !0,
  process(n, t, e, r, i, a, l, c, d, h) {
    const {
      mc: g,
      pc: y,
      pbc: T,
      o: { insert: b, querySelector: O, createText: x, createComment: L }
    } = h, $ = ll(t.props);
    let { shapeFlag: at, children: F, dynamicChildren: nt } = t;
    if (Oc && (d = !1, nt = null), n == null) {
      const J = t.el = L("teleport start"), Y = t.anchor = L("teleport end");
      b(J, e, r), b(Y, e, r);
      const rt = t.target = pp(t.props, O), ot = t.targetAnchor = x("");
      rt ? (b(ot, rt), l = l || cy(rt)) : $ || X("Invalid Teleport target on mount:", rt, `(${typeof rt})`);
      const gt = (Ft, Ut) => {
        at & 16 && g(
          F,
          Ft,
          Ut,
          i,
          a,
          l,
          c,
          d
        );
      };
      $ ? gt(e, Y) : rt && gt(rt, ot);
    } else {
      t.el = n.el;
      const J = t.anchor = n.anchor, Y = t.target = n.target, rt = t.targetAnchor = n.targetAnchor, ot = ll(n.props), gt = ot ? e : Y, Ft = ot ? J : rt;
      if (l = l || cy(Y), nt ? (T(
        n.dynamicChildren,
        nt,
        gt,
        i,
        a,
        l,
        c
      ), Gd(n, t, !0)) : d || y(
        n,
        t,
        gt,
        Ft,
        i,
        a,
        l,
        c,
        !1
      ), $)
        ot || wd(
          t,
          e,
          J,
          h,
          1
        );
      else if ((t.props && t.props.to) !== (n.props && n.props.to)) {
        const Ut = t.target = pp(
          t.props,
          O
        );
        Ut ? wd(
          t,
          Ut,
          null,
          h,
          0
        ) : X(
          "Invalid Teleport target on update:",
          Y,
          `(${typeof Y})`
        );
      } else
        ot && wd(
          t,
          Y,
          rt,
          h,
          1
        );
    }
    bw(t);
  },
  remove(n, t, e, r, { um: i, o: { remove: a } }, l) {
    const { shapeFlag: c, children: d, anchor: h, targetAnchor: g, target: y, props: T } = n;
    if (y && a(g), (l || !ll(T)) && (a(h), c & 16))
      for (let b = 0; b < d.length; b++) {
        const O = d[b];
        i(
          O,
          t,
          e,
          !0,
          !!O.dynamicChildren
        );
      }
  },
  move: wd,
  hydrate: eb
};
function wd(n, t, e, { o: { insert: r }, m: i }, a = 2) {
  a === 0 && r(n.targetAnchor, t, e);
  const { el: l, anchor: c, shapeFlag: d, children: h, props: g } = n, y = a === 2;
  if (y && r(l, t, e), (!y || ll(g)) && d & 16)
    for (let T = 0; T < h.length; T++)
      i(
        h[T],
        t,
        e,
        2
      );
  y && r(c, t, e);
}
function eb(n, t, e, r, i, a, {
  o: { nextSibling: l, parentNode: c, querySelector: d }
}, h) {
  const g = t.target = pp(
    t.props,
    d
  );
  if (g) {
    const y = g._lpa || g.firstChild;
    if (t.shapeFlag & 16)
      if (ll(t.props))
        t.anchor = h(
          l(n),
          t,
          c(n),
          e,
          r,
          i,
          a
        ), t.targetAnchor = y;
      else {
        t.anchor = l(n);
        let T = y;
        for (; T; )
          if (T = l(T), T && T.nodeType === 8 && T.data === "teleport anchor") {
            t.targetAnchor = T, g._lpa = t.targetAnchor && l(t.targetAnchor);
            break;
          }
        h(
          y,
          t,
          g,
          e,
          r,
          i,
          a
        );
      }
    bw(t);
  }
  return t.anchor && l(t.anchor);
}
const nb = tb;
function bw(n) {
  const t = n.ctx;
  if (t && t.ut) {
    let e = n.children[0].el;
    for (; e !== n.targetAnchor; )
      e.nodeType === 1 && e.setAttribute("data-v-owner", t.uid), e = e.nextSibling;
    t.ut();
  }
}
const Xe = Symbol.for("v-fgt"), id = Symbol.for("v-txt"), De = Symbol.for("v-cmt"), Ad = Symbol.for("v-stc"), Rl = [];
let rn = null;
function Te(n = !1) {
  Rl.push(rn = n ? null : []);
}
function rb() {
  Rl.pop(), rn = Rl[Rl.length - 1] || null;
}
let Xf = 1;
function ly(n) {
  Xf += n;
}
function kw(n) {
  return n.dynamicChildren = Xf > 0 ? rn || al : null, rb(), Xf > 0 && rn && rn.push(n), n;
}
function vc(n, t, e, r, i, a) {
  return kw(
    Sw(
      n,
      t,
      e,
      r,
      i,
      a,
      !0
      /* isBlock */
    )
  );
}
function sl(n, t, e, r, i) {
  return kw(
    ar(
      n,
      t,
      e,
      r,
      i,
      !0
      /* isBlock: prevent a block from tracking itself */
    )
  );
}
function ag(n) {
  return n ? n.__v_isVNode === !0 : !1;
}
function Bl(n, t) {
  return t.shapeFlag & 6 && il.has(t.type) ? (n.shapeFlag &= -257, t.shapeFlag &= -513, !1) : n.type === t.type && n.key === t.key;
}
const ib = (...n) => sb(
  ...n
), wh = "__vInternal", Bw = ({ key: n }) => n ?? null, Ud = ({
  ref: n,
  ref_key: t,
  ref_for: e
}) => (typeof n == "number" && (n = "" + n), n != null ? Zt(n) || re(n) || kt(n) ? { i: _e, r: n, k: t, f: !!e } : n : null);
function Sw(n, t = null, e = null, r = 0, i = null, a = n === Xe ? 0 : 1, l = !1, c = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: n,
    props: t,
    key: t && Bw(t),
    ref: t && Ud(t),
    scopeId: ow,
    slotScopeIds: null,
    children: e,
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
    shapeFlag: a,
    patchFlag: r,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: _e
  };
  return c ? (ug(d, e), a & 128 && n.normalize(d)) : e && (d.shapeFlag |= Zt(e) ? 8 : 16), d.key !== d.key && X("VNode created with invalid key (NaN). VNode type:", d.type), Xf > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  rn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || a & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && rn.push(d), d;
}
const ar = ib;
function sb(n, t = null, e = null, r = 0, i = null, a = !1) {
  if ((!n || n === S2) && (n || X(`Invalid vnode type when creating vnode: ${n}.`), n = De), ag(n)) {
    const c = Uc(
      n,
      t,
      !0
      /* mergeRef: true */
    );
    return e && ug(c, e), Xf > 0 && !a && rn && (c.shapeFlag & 6 ? rn[rn.indexOf(n)] = c : rn.push(c)), c.patchFlag |= -2, c;
  }
  if (xw(n) && (n = n.__vccOpts), t) {
    t = ob(t);
    let { class: c, style: d } = t;
    c && !Zt(c) && (t.class = jp(c)), Mt(d) && (ip(d) && !Nt(d) && (d = _t({}, d)), t.style = Fc(d));
  }
  const l = Zt(n) ? 1 : f2(n) ? 128 : Q2(n) ? 64 : Mt(n) ? 4 : kt(n) ? 2 : 0;
  return l & 4 && ip(n) && (n = Ot(n), X(
    "Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    n
  )), Sw(
    n,
    t,
    e,
    r,
    i,
    l,
    a,
    !0
  );
}
function ob(n) {
  return n ? ip(n) || wh in n ? _t({}, n) : n : null;
}
function Uc(n, t, e = !1) {
  const { props: r, ref: i, patchFlag: a, children: l } = n, c = t ? cb(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: n.type,
    props: c,
    key: c && Bw(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      e && i ? Nt(i) ? i.concat(Ud(t)) : [i, Ud(t)] : Ud(t)
    ) : i,
    scopeId: n.scopeId,
    slotScopeIds: n.slotScopeIds,
    children: a === -1 && Nt(l) ? l.map(Iw) : l,
    target: n.target,
    targetAnchor: n.targetAnchor,
    staticCount: n.staticCount,
    shapeFlag: n.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && n.type !== Xe ? a === -1 ? 16 : a | 16 : a,
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
    ssContent: n.ssContent && Uc(n.ssContent),
    ssFallback: n.ssFallback && Uc(n.ssFallback),
    el: n.el,
    anchor: n.anchor,
    ctx: n.ctx,
    ce: n.ce
  };
}
function Iw(n) {
  const t = Uc(n);
  return Nt(n.children) && (t.children = n.children.map(Iw)), t;
}
function ab(n = " ", t = 0) {
  return ar(id, null, n, t);
}
function ub(n = "", t = !1) {
  return t ? (Te(), sl(De, null, n)) : ar(De, null, n);
}
function Ye(n) {
  return n == null || typeof n == "boolean" ? ar(De) : Nt(n) ? ar(
    Xe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    n.slice()
  ) : typeof n == "object" ? ru(n) : ar(id, null, String(n));
}
function ru(n) {
  return n.el === null && n.patchFlag !== -1 || n.memo ? n : Uc(n);
}
function ug(n, t) {
  let e = 0;
  const { shapeFlag: r } = n;
  if (t == null)
    t = null;
  else if (Nt(t))
    e = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), ug(n, i()), i._c && (i._d = !0));
      return;
    } else {
      e = 32;
      const i = t._;
      !i && !(wh in t) ? t._ctx = _e : i === 3 && _e && (_e.slots._ === 1 ? t._ = 1 : (t._ = 2, n.patchFlag |= 1024));
    }
  else
    kt(t) ? (t = { default: t, _ctx: _e }, e = 32) : (t = String(t), r & 64 ? (e = 16, t = [ab(t)]) : e = 8);
  n.children = t, n.shapeFlag |= e;
}
function cb(...n) {
  const t = {};
  for (let e = 0; e < n.length; e++) {
    const r = n[e];
    for (const i in r)
      if (i === "class")
        t.class !== r.class && (t.class = jp([t.class, r.class]));
      else if (i === "style")
        t.style = Fc([t.style, r.style]);
      else if (nd(i)) {
        const a = t[i], l = r[i];
        l && a !== l && !(Nt(a) && a.includes(l)) && (t[i] = a ? [].concat(a, l) : l);
      } else
        i !== "" && (t[i] = r[i]);
  }
  return t;
}
function pn(n, t, e, r = null) {
  ln(n, t, 7, [
    e,
    r
  ]);
}
const lb = pw();
let fb = 0;
function mb(n, t, e) {
  const r = n.type, i = (t ? t.appContext : n.appContext) || lb, a = {
    uid: fb++,
    vnode: n,
    type: r,
    parent: t,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new eE(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: yw(r, i),
    emitsOptions: sw(r, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Rt,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: Rt,
    data: Rt,
    props: Rt,
    attrs: Rt,
    slots: Rt,
    refs: Rt,
    setupState: Rt,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense: e,
    suspenseId: e ? e.pendingId : 0,
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
  return a.ctx = I2(a), a.root = t ? t.root : a, a.emit = i2.bind(null, a), n.ce && n.ce(a), a;
}
let le = null, cg, el, fy = "__VUE_INSTANCE_SETTERS__";
(el = $d()[fy]) || (el = $d()[fy] = []), el.push((n) => le = n), cg = (n) => {
  el.length > 1 ? el.forEach((t) => t(n)) : el[0](n);
};
const pl = (n) => {
  cg(n), n.scope.on();
}, Wc = () => {
  le && le.scope.off(), cg(null);
}, db = /* @__PURE__ */ Lc("slot,component");
function gp(n, t) {
  const e = t.isNativeTag || J0;
  (db(n) || e(n)) && X(
    "Do not use built-in or reserved HTML elements as component id: " + n
  );
}
function Ow(n) {
  return n.vnode.shapeFlag & 4;
}
let Yf = !1;
function hb(n, t = !1) {
  Yf = t;
  const { props: e, children: r } = n.vnode, i = Ow(n);
  C2(n, e, i, t), j2(n, r);
  const a = i ? pb(n, t) : void 0;
  return Yf = !1, a;
}
function pb(n, t) {
  var e;
  const r = n.type;
  {
    if (r.name && gp(r.name, n.appContext.config), r.components) {
      const a = Object.keys(r.components);
      for (let l = 0; l < a.length; l++)
        gp(a[l], n.appContext.config);
    }
    if (r.directives) {
      const a = Object.keys(r.directives);
      for (let l = 0; l < a.length; l++)
        lw(a[l]);
    }
    r.compilerOptions && gb() && X(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  n.accessCache = /* @__PURE__ */ Object.create(null), n.proxy = H0(new Proxy(n.ctx, dw)), O2(n);
  const { setup: i } = r;
  if (i) {
    const a = n.setupContext = i.length > 1 ? Tb(n) : null;
    pl(n), Yc();
    const l = Ca(
      i,
      n,
      0,
      [Al(n.props), a]
    );
    if (Zc(), Wc(), _p(l)) {
      if (l.then(Wc, Wc), t)
        return l.then((c) => {
          my(n, c, t);
        }).catch((c) => {
          dh(c, n, 0);
        });
      if (n.asyncDep = l, !n.suspense) {
        const c = (e = r.name) != null ? e : "Anonymous";
        X(
          `Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      my(n, l, t);
  } else
    vw(n, t);
}
function my(n, t, e) {
  kt(t) ? n.type.__ssrInlineRender ? n.ssrRender = t : n.render = t : Mt(t) ? (ag(t) && X(
    "setup() should not return VNodes directly - return a render function instead."
  ), n.devtoolsRawSetupState = t, n.setupState = W0(t), v2(n)) : t !== void 0 && X(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), vw(n, e);
}
let yp;
const gb = () => !yp;
function vw(n, t, e) {
  const r = n.type;
  if (!n.render) {
    if (!t && yp && !r.render) {
      const i = r.template || sg(n).template;
      if (i) {
        mr(n, "compile");
        const { isCustomElement: a, compilerOptions: l } = n.appContext.config, { delimiters: c, compilerOptions: d } = r, h = _t(
          _t(
            {
              isCustomElement: a,
              delimiters: c
            },
            l
          ),
          d
        );
        r.render = yp(i, h), dr(n, "compile");
      }
    }
    n.render = r.render || Se;
  }
  pl(n), Yc(), x2(n), Zc(), Wc(), !r.render && n.render === Se && !t && (r.template ? X(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
    /* should not happen */
  ) : X("Component is missing template or render function."));
}
function yb(n) {
  return n.attrsProxy || (n.attrsProxy = new Proxy(
    n.attrs,
    {
      get(t, e) {
        return Hd(), de(n, "get", "$attrs"), t[e];
      },
      set() {
        return X("setupContext.attrs is readonly."), !1;
      },
      deleteProperty() {
        return X("setupContext.attrs is readonly."), !1;
      }
    }
  ));
}
function wb(n) {
  return n.slotsProxy || (n.slotsProxy = new Proxy(n.slots, {
    get(t, e) {
      return de(n, "get", "$slots"), t[e];
    }
  }));
}
function Tb(n) {
  return Object.freeze({
    get attrs() {
      return yb(n);
    },
    get slots() {
      return wb(n);
    },
    get emit() {
      return (e, ...r) => n.emit(e, ...r);
    },
    expose: (e) => {
      if (n.exposed && X("expose() should be called only once per setup()."), e != null) {
        let r = typeof e;
        r === "object" && (Nt(e) ? r = "array" : re(e) && (r = "ref")), r !== "object" && X(
          `expose() should be passed a plain object, received ${r}.`
        );
      }
      n.exposed = e || {};
    }
  });
}
function lg(n) {
  if (n.exposed)
    return n.exposeProxy || (n.exposeProxy = new Proxy(W0(H0(n.exposed)), {
      get(t, e) {
        if (e in t)
          return t[e];
        if (e in jc)
          return jc[e](n);
      },
      has(t, e) {
        return e in t || e in jc;
      }
    }));
}
const Nb = /(?:^|[-_])(\w)/g, Eb = (n) => n.replace(Nb, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Jw(n, t = !0) {
  return kt(n) ? n.displayName || n.name : n.name || t && n.__name;
}
function Th(n, t, e = !1) {
  let r = Jw(t);
  if (!r && t.__file) {
    const i = t.__file.match(/([^/\\]+)\.\w+$/);
    i && (r = i[1]);
  }
  if (!r && n && n.parent) {
    const i = (a) => {
      for (const l in a)
        if (a[l] === t)
          return l;
    };
    r = i(
      n.components || n.parent.type.components
    ) || i(n.appContext.components);
  }
  return r ? Eb(r) : e ? "App" : "Anonymous";
}
function xw(n) {
  return kt(n) && "__vccOpts" in n;
}
const bb = (n, t) => DE(n, t, Yf), kb = Symbol.for("v-scx"), Bb = () => {
  {
    const n = fn(kb);
    return n || X(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), n;
  }
};
function Lh(n) {
  return !!(n && n.__v_isShallow);
}
function Sb() {
  if (typeof window > "u")
    return;
  const n = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, e = { style: "color:#b62e24" }, r = { style: "color:#9d288c" }, i = {
    header(y) {
      return Mt(y) ? y.__isVue ? ["div", n, "VueInstance"] : re(y) ? [
        "div",
        {},
        ["span", n, g(y)],
        "<",
        c(y.value),
        ">"
      ] : Hc(y) ? [
        "div",
        {},
        ["span", n, Lh(y) ? "ShallowReactive" : "Reactive"],
        "<",
        c(y),
        `>${Ac(y) ? " (readonly)" : ""}`
      ] : Ac(y) ? [
        "div",
        {},
        ["span", n, Lh(y) ? "ShallowReadonly" : "Readonly"],
        "<",
        c(y),
        ">"
      ] : null : null;
    },
    hasBody(y) {
      return y && y.__isVue;
    },
    body(y) {
      if (y && y.__isVue)
        return [
          "div",
          {},
          ...a(y.$)
        ];
    }
  };
  function a(y) {
    const T = [];
    y.type.props && y.props && T.push(l("props", Ot(y.props))), y.setupState !== Rt && T.push(l("setup", y.setupState)), y.data !== Rt && T.push(l("data", Ot(y.data)));
    const b = d(y, "computed");
    b && T.push(l("computed", b));
    const O = d(y, "inject");
    return O && T.push(l("injected", O)), T.push([
      "div",
      {},
      [
        "span",
        {
          style: r.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: y }]
    ]), T;
  }
  function l(y, T) {
    return T = _t({}, T), Object.keys(T).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        y
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(T).map((b) => [
          "div",
          {},
          ["span", r, b + ": "],
          c(T[b], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(y, T = !0) {
    return typeof y == "number" ? ["span", t, y] : typeof y == "string" ? ["span", e, JSON.stringify(y)] : typeof y == "boolean" ? ["span", r, y] : Mt(y) ? ["object", { object: T ? Ot(y) : y }] : ["span", e, String(y)];
  }
  function d(y, T) {
    const b = y.type;
    if (kt(b))
      return;
    const O = {};
    for (const x in y.ctx)
      h(b, x, T) && (O[x] = y.ctx[x]);
    return O;
  }
  function h(y, T, b) {
    const O = y[b];
    if (Nt(O) && O.includes(T) || Mt(O) && T in O || y.extends && h(y.extends, T, b) || y.mixins && y.mixins.some((x) => h(x, T, b)))
      return !0;
  }
  function g(y) {
    return Lh(y) ? "ShallowRef" : y.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(i) : window.devtoolsFormatters = [i];
}
const dy = "3.3.4", Ib = "http://www.w3.org/2000/svg", Mc = typeof document < "u" ? document : null, hy = Mc && /* @__PURE__ */ Mc.createElement("template"), Ob = {
  insert: (n, t, e) => {
    t.insertBefore(n, e || null);
  },
  remove: (n) => {
    const t = n.parentNode;
    t && t.removeChild(n);
  },
  createElement: (n, t, e, r) => {
    const i = t ? Mc.createElementNS(Ib, n) : Mc.createElement(n, e ? { is: e } : void 0);
    return n === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
  },
  createText: (n) => Mc.createTextNode(n),
  createComment: (n) => Mc.createComment(n),
  setText: (n, t) => {
    n.nodeValue = t;
  },
  setElementText: (n, t) => {
    n.textContent = t;
  },
  parentNode: (n) => n.parentNode,
  nextSibling: (n) => n.nextSibling,
  querySelector: (n) => Mc.querySelector(n),
  setScopeId(n, t) {
    n.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(n, t, e, r, i, a) {
    const l = e ? e.previousSibling : t.lastChild;
    if (i && (i === a || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), e), !(i === a || !(i = i.nextSibling)); )
        ;
    else {
      hy.innerHTML = r ? `<svg>${n}</svg>` : n;
      const c = hy.content;
      if (r) {
        const d = c.firstChild;
        for (; d.firstChild; )
          c.appendChild(d.firstChild);
        c.removeChild(d);
      }
      t.insertBefore(c, e);
    }
    return [
      // first
      l ? l.nextSibling : t.firstChild,
      // last
      e ? e.previousSibling : t.lastChild
    ];
  }
};
function vb(n, t, e) {
  const r = n._vtc;
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? n.removeAttribute("class") : e ? n.setAttribute("class", t) : n.className = t;
}
function Jb(n, t, e) {
  const r = n.style, i = Zt(e);
  if (e && !i) {
    if (t && !Zt(t))
      for (const a in t)
        e[a] == null && wp(r, a, "");
    for (const a in e)
      wp(r, a, e[a]);
  } else {
    const a = r.display;
    i ? t !== e && (r.cssText = e) : t && n.removeAttribute("style"), "_vod" in n && (r.display = a);
  }
}
const xb = /[^\\];\s*$/, py = /\s*!important$/;
function wp(n, t, e) {
  if (Nt(e))
    e.forEach((r) => wp(n, t, r));
  else if (e == null && (e = ""), xb.test(e) && X(
    `Unexpected semicolon at the end of '${t}' style value: '${e}'`
  ), t.startsWith("--"))
    n.setProperty(t, e);
  else {
    const r = Ab(n, t);
    py.test(e) ? n.setProperty(
      Jc(r),
      e.replace(py, ""),
      "important"
    ) : n[r] = e;
  }
}
const gy = ["Webkit", "Moz", "ms"], Fh = {};
function Ab(n, t) {
  const e = Fh[t];
  if (e)
    return e;
  let r = hl(t);
  if (r !== "filter" && r in n)
    return Fh[t] = r;
  r = ah(r);
  for (let i = 0; i < gy.length; i++) {
    const a = gy[i] + r;
    if (a in n)
      return Fh[t] = a;
  }
  return t;
}
const yy = "http://www.w3.org/1999/xlink";
function Ub(n, t, e, r, i) {
  if (r && t.startsWith("xlink:"))
    e == null ? n.removeAttributeNS(yy, t.slice(6, t.length)) : n.setAttributeNS(yy, t, e);
  else {
    const a = tE(t);
    e == null || a && !x0(e) ? n.removeAttribute(t) : n.setAttribute(t, a ? "" : e);
  }
}
function Lb(n, t, e, r, i, a, l) {
  if (t === "innerHTML" || t === "textContent") {
    r && l(r, i, a), n[t] = e ?? "";
    return;
  }
  const c = n.tagName;
  if (t === "value" && c !== "PROGRESS" && // custom elements may use _value internally
  !c.includes("-")) {
    n._value = e;
    const h = c === "OPTION" ? n.getAttribute("value") : n.value, g = e ?? "";
    h !== g && (n.value = g), e == null && n.removeAttribute(t);
    return;
  }
  let d = !1;
  if (e === "" || e == null) {
    const h = typeof n[t];
    h === "boolean" ? e = x0(e) : e == null && h === "string" ? (e = "", d = !0) : h === "number" && (e = 0, d = !0);
  }
  try {
    n[t] = e;
  } catch (h) {
    d || X(
      `Failed setting prop "${t}" on <${c.toLowerCase()}>: value ${e} is invalid.`,
      h
    );
  }
  d && n.removeAttribute(t);
}
function Fb(n, t, e, r) {
  n.addEventListener(t, e, r);
}
function qb(n, t, e, r) {
  n.removeEventListener(t, e, r);
}
function Db(n, t, e, r, i = null) {
  const a = n._vei || (n._vei = {}), l = a[t];
  if (r && l)
    l.value = r;
  else {
    const [c, d] = Pb(t);
    if (r) {
      const h = a[t] = Rb(r, i);
      Fb(n, c, h, d);
    } else
      l && (qb(n, c, l, d), a[t] = void 0);
  }
}
const wy = /(?:Once|Passive|Capture)$/;
function Pb(n) {
  let t;
  if (wy.test(n)) {
    t = {};
    let r;
    for (; r = n.match(wy); )
      n = n.slice(0, n.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [n[2] === ":" ? n.slice(3) : Jc(n.slice(2)), t];
}
let qh = 0;
const Cb = /* @__PURE__ */ Promise.resolve(), Kb = () => qh || (Cb.then(() => qh = 0), qh = Date.now());
function Rb(n, t) {
  const e = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= e.attached)
      return;
    ln(
      Mb(r, e.value),
      t,
      5,
      [r]
    );
  };
  return e.value = n, e.attached = Kb(), e;
}
function Mb(n, t) {
  if (Nt(t)) {
    const e = n.stopImmediatePropagation;
    return n.stopImmediatePropagation = () => {
      e.call(n), n._stopped = !0;
    }, t.map((r) => (i) => !i._stopped && r && r(i));
  } else
    return t;
}
const Ty = /^on[a-z]/, $b = (n, t, e, r, i = !1, a, l, c, d) => {
  t === "class" ? vb(n, r, i) : t === "style" ? Jb(n, e, r) : nd(t) ? Rd(t) || Db(n, t, e, r, l) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Vb(n, t, r, i)) ? Lb(
    n,
    t,
    r,
    a,
    l,
    c,
    d
  ) : (t === "true-value" ? n._trueValue = r : t === "false-value" && (n._falseValue = r), Ub(n, t, r, i));
};
function Vb(n, t, e, r) {
  return r ? !!(t === "innerHTML" || t === "textContent" || t in n && Ty.test(t) && kt(e)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && n.tagName === "INPUT" || t === "type" && n.tagName === "TEXTAREA" || Ty.test(t) && Zt(e) ? !1 : t in n;
}
const _b = /* @__PURE__ */ _t({ patchProp: $b }, Ob);
let Ny;
function Hb() {
  return Ny || (Ny = X2(_b));
}
const Aw = (...n) => {
  const t = Hb().createApp(...n);
  zb(t), jb(t);
  const { mount: e } = t;
  return t.mount = (r) => {
    const i = Wb(r);
    if (!i)
      return;
    const a = t._component;
    !kt(a) && !a.render && !a.template && (a.template = i.innerHTML), i.innerHTML = "";
    const l = e(i, !1, i instanceof SVGElement);
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), l;
  }, t;
};
function zb(n) {
  Object.defineProperty(n.config, "isNativeTag", {
    value: (t) => YN(t) || ZN(t),
    writable: !1
  });
}
function jb(n) {
  {
    const t = n.config.isCustomElement;
    Object.defineProperty(n.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        X(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const e = n.config.compilerOptions, r = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(n.config, "compilerOptions", {
      get() {
        return X(r), e;
      },
      set() {
        X(r);
      }
    });
  }
}
function Wb(n) {
  if (Zt(n)) {
    const t = document.querySelector(n);
    return t || X(
      `Failed to mount app: mount target selector "${n}" returned null.`
    ), t;
  }
  return window.ShadowRoot && n instanceof window.ShadowRoot && n.mode === "closed" && X(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), n;
}
function Gb() {
  Sb();
}
Gb();
const Xb = (n) => new Error(`Unknown element type: ${n}`);
function Ee(n, t) {
  if (!n)
    throw new Error(t);
}
const Yb = 34028234663852886e22, Zb = -34028234663852886e22, Qb = 4294967295, tk = 2147483647, ek = -2147483648;
function Ld(n) {
  if (typeof n != "number")
    throw new Error("invalid int 32: " + typeof n);
  if (!Number.isInteger(n) || n > tk || n < ek)
    throw new Error("invalid int 32: " + n);
}
function Tp(n) {
  if (typeof n != "number")
    throw new Error("invalid uint 32: " + typeof n);
  if (!Number.isInteger(n) || n > Qb || n < 0)
    throw new Error("invalid uint 32: " + n);
}
function Uw(n) {
  if (typeof n != "number")
    throw new Error("invalid float 32: " + typeof n);
  if (Number.isFinite(n) && (n > Yb || n < Zb))
    throw new Error("invalid float 32: " + n);
}
const Lw = Symbol("@bufbuild/protobuf/enum-type");
function nk(n) {
  const t = n[Lw];
  return Ee(t, "missing enum type on enum object"), t;
}
function Fw(n, t, e, r) {
  n[Lw] = qw(t, e.map((i) => ({
    no: i.no,
    name: i.name,
    localName: n[i.no]
  })));
}
function qw(n, t, e) {
  const r = /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null), a = [];
  for (const l of t) {
    const c = Dw(l);
    a.push(c), r[l.name] = c, i[l.no] = c;
  }
  return {
    typeName: n,
    values: a,
    // We do not surface options at this time
    // options: opt?.options ?? Object.create(null),
    findName(l) {
      return r[l];
    },
    findNumber(l) {
      return i[l];
    }
  };
}
function rk(n, t, e) {
  const r = {};
  for (const i of t) {
    const a = Dw(i);
    r[a.localName] = a.no, r[a.no] = a.localName;
  }
  return Fw(r, n, t), r;
}
function Dw(n) {
  return "localName" in n ? n : Object.assign(Object.assign({}, n), { localName: n.name });
}
let I = class {
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
  fromBinary(n, t) {
    const e = this.getType(), r = e.runtime.bin, i = r.makeReadOptions(t);
    return r.readMessage(this, i.readerFactory(n), n.byteLength, i), this;
  }
  /**
   * Parse a message from a JSON value.
   */
  fromJson(n, t) {
    const e = this.getType(), r = e.runtime.json, i = r.makeReadOptions(t);
    return r.readMessage(e, n, i, this), this;
  }
  /**
   * Parse a message from a JSON string.
   */
  fromJsonString(n, t) {
    let e;
    try {
      e = JSON.parse(n);
    } catch (r) {
      throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${r instanceof Error ? r.message : String(r)}`);
    }
    return this.fromJson(e, t);
  }
  /**
   * Serialize the message to binary data.
   */
  toBinary(n) {
    const t = this.getType(), e = t.runtime.bin, r = e.makeWriteOptions(n), i = r.writerFactory();
    return e.writeMessage(this, i, r), i.finish();
  }
  /**
   * Serialize the message to a JSON value, a JavaScript value that can be
   * passed to JSON.stringify().
   */
  toJson(n) {
    const t = this.getType(), e = t.runtime.json, r = e.makeWriteOptions(n);
    return e.writeMessage(this, r);
  }
  /**
   * Serialize the message to a JSON string.
   */
  toJsonString(n) {
    var t;
    const e = this.toJson(n);
    return JSON.stringify(e, null, (t = n == null ? void 0 : n.prettySpaces) !== null && t !== void 0 ? t : 0);
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
function ik(n, t, e, r) {
  var i;
  const a = (i = r == null ? void 0 : r.localName) !== null && i !== void 0 ? i : t.substring(t.lastIndexOf(".") + 1), l = {
    [a]: function(c) {
      n.util.initFields(this), n.util.initPartial(c, this);
    }
  }[a];
  return Object.setPrototypeOf(l.prototype, new I()), Object.assign(l, {
    runtime: n,
    typeName: t,
    fields: n.util.newFieldList(e),
    fromBinary(c, d) {
      return new l().fromBinary(c, d);
    },
    fromJson(c, d) {
      return new l().fromJson(c, d);
    },
    fromJsonString(c, d) {
      return new l().fromJsonString(c, d);
    },
    equals(c, d) {
      return n.util.equals(l, c, d);
    }
  }), l;
}
function sk(n, t, e, r) {
  return {
    syntax: n,
    json: t,
    bin: e,
    util: r,
    makeMessageType(i, a, l) {
      return ik(this, i, a, l);
    },
    makeEnum: rk,
    makeEnumType: qw,
    getEnumType: nk
  };
}
var R;
(function(n) {
  n[n.DOUBLE = 1] = "DOUBLE", n[n.FLOAT = 2] = "FLOAT", n[n.INT64 = 3] = "INT64", n[n.UINT64 = 4] = "UINT64", n[n.INT32 = 5] = "INT32", n[n.FIXED64 = 6] = "FIXED64", n[n.FIXED32 = 7] = "FIXED32", n[n.BOOL = 8] = "BOOL", n[n.STRING = 9] = "STRING", n[n.BYTES = 12] = "BYTES", n[n.UINT32 = 13] = "UINT32", n[n.SFIXED32 = 15] = "SFIXED32", n[n.SFIXED64 = 16] = "SFIXED64", n[n.SINT32 = 17] = "SINT32", n[n.SINT64 = 18] = "SINT64";
})(R || (R = {}));
function ok() {
  let n = 0, t = 0;
  for (let r = 0; r < 28; r += 7) {
    let i = this.buf[this.pos++];
    if (n |= (i & 127) << r, !(i & 128))
      return this.assertBounds(), [n, t];
  }
  let e = this.buf[this.pos++];
  if (n |= (e & 15) << 28, t = (e & 112) >> 4, !(e & 128))
    return this.assertBounds(), [n, t];
  for (let r = 3; r <= 31; r += 7) {
    let i = this.buf[this.pos++];
    if (t |= (i & 127) << r, !(i & 128))
      return this.assertBounds(), [n, t];
  }
  throw new Error("invalid varint");
}
function Dh(n, t, e) {
  for (let a = 0; a < 28; a = a + 7) {
    const l = n >>> a, c = !(!(l >>> 7) && t == 0), d = (c ? l | 128 : l) & 255;
    if (e.push(d), !c)
      return;
  }
  const r = n >>> 28 & 15 | (t & 7) << 4, i = !!(t >> 3);
  if (e.push((i ? r | 128 : r) & 255), !!i) {
    for (let a = 3; a < 31; a = a + 7) {
      const l = t >>> a, c = !!(l >>> 7), d = (c ? l | 128 : l) & 255;
      if (e.push(d), !c)
        return;
    }
    e.push(t >>> 31 & 1);
  }
}
const Fd = 4294967296;
function Ey(n) {
  const t = n[0] === "-";
  t && (n = n.slice(1));
  const e = 1e6;
  let r = 0, i = 0;
  function a(l, c) {
    const d = Number(n.slice(l, c));
    i *= e, r = r * e + d, r >= Fd && (i = i + (r / Fd | 0), r = r % Fd);
  }
  return a(-24, -18), a(-18, -12), a(-12, -6), a(-6), t ? Cw(r, i) : fg(r, i);
}
function ak(n, t) {
  let e = fg(n, t);
  const r = e.hi & 2147483648;
  r && (e = Cw(e.lo, e.hi));
  const i = Pw(e.lo, e.hi);
  return r ? "-" + i : i;
}
function Pw(n, t) {
  if ({ lo: n, hi: t } = uk(n, t), t <= 2097151)
    return String(Fd * t + n);
  const e = n & 16777215, r = (n >>> 24 | t << 8) & 16777215, i = t >> 16 & 65535;
  let a = e + r * 6777216 + i * 6710656, l = r + i * 8147497, c = i * 2;
  const d = 1e7;
  return a >= d && (l += Math.floor(a / d), a %= d), l >= d && (c += Math.floor(l / d), l %= d), c.toString() + by(l) + by(a);
}
function uk(n, t) {
  return { lo: n >>> 0, hi: t >>> 0 };
}
function fg(n, t) {
  return { lo: n | 0, hi: t | 0 };
}
function Cw(n, t) {
  return t = ~t, n ? n = ~n + 1 : t += 1, fg(n, t);
}
const by = (n) => {
  const t = String(n);
  return "0000000".slice(t.length) + t;
};
function ky(n, t) {
  if (n >= 0) {
    for (; n > 127; )
      t.push(n & 127 | 128), n = n >>> 7;
    t.push(n);
  } else {
    for (let e = 0; e < 9; e++)
      t.push(n & 127 | 128), n = n >> 7;
    t.push(1);
  }
}
function ck() {
  let n = this.buf[this.pos++], t = n & 127;
  if (!(n & 128))
    return this.assertBounds(), t;
  if (n = this.buf[this.pos++], t |= (n & 127) << 7, !(n & 128))
    return this.assertBounds(), t;
  if (n = this.buf[this.pos++], t |= (n & 127) << 14, !(n & 128))
    return this.assertBounds(), t;
  if (n = this.buf[this.pos++], t |= (n & 127) << 21, !(n & 128))
    return this.assertBounds(), t;
  n = this.buf[this.pos++], t |= (n & 15) << 28;
  for (let e = 5; n & 128 && e < 10; e++)
    n = this.buf[this.pos++];
  if (n & 128)
    throw new Error("invalid varint");
  return this.assertBounds(), t >>> 0;
}
function lk() {
  const n = new DataView(new ArrayBuffer(8));
  if (typeof BigInt == "function" && typeof n.getBigInt64 == "function" && typeof n.getBigUint64 == "function" && typeof n.setBigInt64 == "function" && typeof n.setBigUint64 == "function" && (typeof process != "object" || typeof { NODE_ENV: '"production"', SDK_PATH: "https://sdk.getcode.com/v1/elements" } != "object" || { NODE_ENV: '"production"', SDK_PATH: "https://sdk.getcode.com/v1/elements" }.BUF_BIGINT_DISABLE !== "1")) {
    const r = BigInt("-9223372036854775808"), i = BigInt("9223372036854775807"), a = BigInt("0"), l = BigInt("18446744073709551615");
    return {
      zero: BigInt(0),
      supported: !0,
      parse(c) {
        const d = typeof c == "bigint" ? c : BigInt(c);
        if (d > i || d < r)
          throw new Error(`int64 invalid: ${c}`);
        return d;
      },
      uParse(c) {
        const d = typeof c == "bigint" ? c : BigInt(c);
        if (d > l || d < a)
          throw new Error(`uint64 invalid: ${c}`);
        return d;
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
      dec(c, d) {
        return n.setInt32(0, c, !0), n.setInt32(4, d, !0), n.getBigInt64(0, !0);
      },
      uDec(c, d) {
        return n.setInt32(0, c, !0), n.setInt32(4, d, !0), n.getBigUint64(0, !0);
      }
    };
  }
  const t = (r) => Ee(/^-?[0-9]+$/.test(r), `int64 invalid: ${r}`), e = (r) => Ee(/^[0-9]+$/.test(r), `uint64 invalid: ${r}`);
  return {
    zero: "0",
    supported: !1,
    parse(r) {
      return typeof r != "string" && (r = r.toString()), t(r), r;
    },
    uParse(r) {
      return typeof r != "string" && (r = r.toString()), e(r), r;
    },
    enc(r) {
      return typeof r != "string" && (r = r.toString()), t(r), Ey(r);
    },
    uEnc(r) {
      return typeof r != "string" && (r = r.toString()), e(r), Ey(r);
    },
    dec(r, i) {
      return ak(r, i);
    },
    uDec(r, i) {
      return Pw(r, i);
    }
  };
}
const It = lk();
var jt;
(function(n) {
  n[n.Varint = 0] = "Varint", n[n.Bit64 = 1] = "Bit64", n[n.LengthDelimited = 2] = "LengthDelimited", n[n.StartGroup = 3] = "StartGroup", n[n.EndGroup = 4] = "EndGroup", n[n.Bit32 = 5] = "Bit32";
})(jt || (jt = {}));
class fk {
  constructor(t) {
    this.stack = [], this.textEncoder = t ?? new TextEncoder(), this.chunks = [], this.buf = [];
  }
  /**
   * Return all bytes written and reset this writer.
   */
  finish() {
    this.chunks.push(new Uint8Array(this.buf));
    let t = 0;
    for (let i = 0; i < this.chunks.length; i++)
      t += this.chunks[i].length;
    let e = new Uint8Array(t), r = 0;
    for (let i = 0; i < this.chunks.length; i++)
      e.set(this.chunks[i], r), r += this.chunks[i].length;
    return this.chunks = [], e;
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
    let t = this.finish(), e = this.stack.pop();
    if (!e)
      throw new Error("invalid state, fork stack empty");
    return this.chunks = e.chunks, this.buf = e.buf, this.uint32(t.byteLength), this.raw(t);
  }
  /**
   * Writes a tag (field number and wire type).
   *
   * Equivalent to `uint32( (fieldNo << 3 | type) >>> 0 )`.
   *
   * Generated code should compute the tag ahead of time and call `uint32()`.
   */
  tag(t, e) {
    return this.uint32((t << 3 | e) >>> 0);
  }
  /**
   * Write a chunk of raw bytes.
   */
  raw(t) {
    return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []), this.chunks.push(t), this;
  }
  /**
   * Write a `uint32` value, an unsigned 32 bit varint.
   */
  uint32(t) {
    for (Tp(t); t > 127; )
      this.buf.push(t & 127 | 128), t = t >>> 7;
    return this.buf.push(t), this;
  }
  /**
   * Write a `int32` value, a signed 32 bit varint.
   */
  int32(t) {
    return Ld(t), ky(t, this.buf), this;
  }
  /**
   * Write a `bool` value, a variant.
   */
  bool(t) {
    return this.buf.push(t ? 1 : 0), this;
  }
  /**
   * Write a `bytes` value, length-delimited arbitrary data.
   */
  bytes(t) {
    return this.uint32(t.byteLength), this.raw(t);
  }
  /**
   * Write a `string` value, length-delimited data converted to UTF-8 text.
   */
  string(t) {
    let e = this.textEncoder.encode(t);
    return this.uint32(e.byteLength), this.raw(e);
  }
  /**
   * Write a `float` value, 32-bit floating point number.
   */
  float(t) {
    Uw(t);
    let e = new Uint8Array(4);
    return new DataView(e.buffer).setFloat32(0, t, !0), this.raw(e);
  }
  /**
   * Write a `double` value, a 64-bit floating point number.
   */
  double(t) {
    let e = new Uint8Array(8);
    return new DataView(e.buffer).setFloat64(0, t, !0), this.raw(e);
  }
  /**
   * Write a `fixed32` value, an unsigned, fixed-length 32-bit integer.
   */
  fixed32(t) {
    Tp(t);
    let e = new Uint8Array(4);
    return new DataView(e.buffer).setUint32(0, t, !0), this.raw(e);
  }
  /**
   * Write a `sfixed32` value, a signed, fixed-length 32-bit integer.
   */
  sfixed32(t) {
    Ld(t);
    let e = new Uint8Array(4);
    return new DataView(e.buffer).setInt32(0, t, !0), this.raw(e);
  }
  /**
   * Write a `sint32` value, a signed, zigzag-encoded 32-bit varint.
   */
  sint32(t) {
    return Ld(t), t = (t << 1 ^ t >> 31) >>> 0, ky(t, this.buf), this;
  }
  /**
   * Write a `fixed64` value, a signed, fixed-length 64-bit integer.
   */
  sfixed64(t) {
    let e = new Uint8Array(8), r = new DataView(e.buffer), i = It.enc(t);
    return r.setInt32(0, i.lo, !0), r.setInt32(4, i.hi, !0), this.raw(e);
  }
  /**
   * Write a `fixed64` value, an unsigned, fixed-length 64 bit integer.
   */
  fixed64(t) {
    let e = new Uint8Array(8), r = new DataView(e.buffer), i = It.uEnc(t);
    return r.setInt32(0, i.lo, !0), r.setInt32(4, i.hi, !0), this.raw(e);
  }
  /**
   * Write a `int64` value, a signed 64-bit varint.
   */
  int64(t) {
    let e = It.enc(t);
    return Dh(e.lo, e.hi, this.buf), this;
  }
  /**
   * Write a `sint64` value, a signed, zig-zag-encoded 64-bit varint.
   */
  sint64(t) {
    let e = It.enc(t), r = e.hi >> 31, i = e.lo << 1 ^ r, a = (e.hi << 1 | e.lo >>> 31) ^ r;
    return Dh(i, a, this.buf), this;
  }
  /**
   * Write a `uint64` value, an unsigned 64-bit varint.
   */
  uint64(t) {
    let e = It.uEnc(t);
    return Dh(e.lo, e.hi, this.buf), this;
  }
}
class mk {
  constructor(t, e) {
    this.varint64 = ok, this.uint32 = ck, this.buf = t, this.len = t.length, this.pos = 0, this.view = new DataView(t.buffer, t.byteOffset, t.byteLength), this.textDecoder = e ?? new TextDecoder();
  }
  /**
   * Reads a tag - field number and wire type.
   */
  tag() {
    let t = this.uint32(), e = t >>> 3, r = t & 7;
    if (e <= 0 || r < 0 || r > 5)
      throw new Error("illegal tag: field no " + e + " wire type " + r);
    return [e, r];
  }
  /**
   * Skip one element on the wire and return the skipped data.
   * Supports WireType.StartGroup since v2.0.0-alpha.23.
   */
  skip(t) {
    let e = this.pos;
    switch (t) {
      case jt.Varint:
        for (; this.buf[this.pos++] & 128; )
          ;
        break;
      case jt.Bit64:
        this.pos += 4;
      case jt.Bit32:
        this.pos += 4;
        break;
      case jt.LengthDelimited:
        let r = this.uint32();
        this.pos += r;
        break;
      case jt.StartGroup:
        let i;
        for (; (i = this.tag()[1]) !== jt.EndGroup; )
          this.skip(i);
        break;
      default:
        throw new Error("cant skip wire type " + t);
    }
    return this.assertBounds(), this.buf.subarray(e, this.pos);
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
    let t = this.uint32();
    return t >>> 1 ^ -(t & 1);
  }
  /**
   * Read a `int64` field, a signed 64-bit varint.
   */
  int64() {
    return It.dec(...this.varint64());
  }
  /**
   * Read a `uint64` field, an unsigned 64-bit varint.
   */
  uint64() {
    return It.uDec(...this.varint64());
  }
  /**
   * Read a `sint64` field, a signed, zig-zag-encoded 64-bit varint.
   */
  sint64() {
    let [t, e] = this.varint64(), r = -(t & 1);
    return t = (t >>> 1 | (e & 1) << 31) ^ r, e = e >>> 1 ^ r, It.dec(t, e);
  }
  /**
   * Read a `bool` field, a variant.
   */
  bool() {
    let [t, e] = this.varint64();
    return t !== 0 || e !== 0;
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
    return It.uDec(this.sfixed32(), this.sfixed32());
  }
  /**
   * Read a `fixed64` field, a signed, fixed-length 64-bit integer.
   */
  sfixed64() {
    return It.dec(this.sfixed32(), this.sfixed32());
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
    let t = this.uint32(), e = this.pos;
    return this.pos += t, this.assertBounds(), this.buf.subarray(e, e + t);
  }
  /**
   * Read a `string` field, length-delimited data converted to UTF-8 text.
   */
  string() {
    return this.textDecoder.decode(this.bytes());
  }
}
function Np(n, t) {
  return t instanceof I || !n.fieldWrapper ? t : n.fieldWrapper.wrapField(t);
}
R.DOUBLE, R.FLOAT, R.INT64, R.UINT64, R.INT32, R.UINT32, R.BOOL, R.STRING, R.BYTES;
function Ga(n, t, e) {
  if (t === e)
    return !0;
  if (n == R.BYTES) {
    if (!(t instanceof Uint8Array) || !(e instanceof Uint8Array) || t.length !== e.length)
      return !1;
    for (let r = 0; r < t.length; r++)
      if (t[r] !== e[r])
        return !1;
    return !0;
  }
  switch (n) {
    case R.UINT64:
    case R.FIXED64:
    case R.INT64:
    case R.SFIXED64:
    case R.SINT64:
      return t == e;
  }
  return !1;
}
function Ep(n) {
  switch (n) {
    case R.BOOL:
      return !1;
    case R.UINT64:
    case R.FIXED64:
    case R.INT64:
    case R.SFIXED64:
    case R.SINT64:
      return It.zero;
    case R.DOUBLE:
    case R.FLOAT:
      return 0;
    case R.BYTES:
      return new Uint8Array(0);
    case R.STRING:
      return "";
    default:
      return 0;
  }
}
function Kw(n, t) {
  const e = t === void 0;
  let r = jt.Varint, i = t === 0;
  switch (n) {
    case R.STRING:
      i = e || !t.length, r = jt.LengthDelimited;
      break;
    case R.BOOL:
      i = t === !1;
      break;
    case R.DOUBLE:
      r = jt.Bit64;
      break;
    case R.FLOAT:
      r = jt.Bit32;
      break;
    case R.INT64:
      i = e || t == 0;
      break;
    case R.UINT64:
      i = e || t == 0;
      break;
    case R.FIXED64:
      i = e || t == 0, r = jt.Bit64;
      break;
    case R.BYTES:
      i = e || !t.byteLength, r = jt.LengthDelimited;
      break;
    case R.FIXED32:
      r = jt.Bit32;
      break;
    case R.SFIXED32:
      r = jt.Bit32;
      break;
    case R.SFIXED64:
      i = e || t == 0, r = jt.Bit64;
      break;
    case R.SINT64:
      i = e || t == 0;
      break;
  }
  const a = R[n].toLowerCase();
  return [r, a, e || i];
}
const nl = Symbol("@bufbuild/protobuf/unknown-fields"), By = {
  readUnknownFields: !0,
  readerFactory: (n) => new mk(n)
}, Sy = {
  writeUnknownFields: !0,
  writerFactory: () => new fk()
};
function dk(n) {
  return n ? Object.assign(Object.assign({}, By), n) : By;
}
function hk(n) {
  return n ? Object.assign(Object.assign({}, Sy), n) : Sy;
}
function pk() {
  return {
    makeReadOptions: dk,
    makeWriteOptions: hk,
    listUnknownFields(n) {
      var t;
      return (t = n[nl]) !== null && t !== void 0 ? t : [];
    },
    discardUnknownFields(n) {
      delete n[nl];
    },
    writeUnknownFields(n, t) {
      const e = n[nl];
      if (e)
        for (const r of e)
          t.tag(r.no, r.wireType).raw(r.data);
    },
    onUnknownField(n, t, e, r) {
      const i = n;
      Array.isArray(i[nl]) || (i[nl] = []), i[nl].push({ no: t, wireType: e, data: r });
    },
    readMessage(n, t, e, r) {
      const i = n.getType(), a = e === void 0 ? t.len : t.pos + e;
      for (; t.pos < a; ) {
        const [l, c] = t.tag(), d = i.fields.find(l);
        if (!d) {
          const T = t.skip(c);
          r.readUnknownFields && this.onUnknownField(n, l, c, T);
          continue;
        }
        let h = n, g = d.repeated, y = d.localName;
        switch (d.oneof && (h = h[d.oneof.localName], h.case != y && delete h.value, h.case = y, y = "value"), d.kind) {
          case "scalar":
          case "enum":
            const T = d.kind == "enum" ? R.INT32 : d.T;
            if (g) {
              let L = h[y];
              if (c == jt.LengthDelimited && T != R.STRING && T != R.BYTES) {
                let $ = t.uint32() + t.pos;
                for (; t.pos < $; )
                  L.push(Ml(t, T));
              } else
                L.push(Ml(t, T));
            } else
              h[y] = Ml(t, T);
            break;
          case "message":
            const b = d.T;
            g ? h[y].push(qd(t, new b(), r)) : h[y] instanceof I ? qd(t, h[y], r) : (h[y] = qd(t, new b(), r), b.fieldWrapper && !d.oneof && !d.repeated && (h[y] = b.fieldWrapper.unwrapField(h[y])));
            break;
          case "map":
            let [O, x] = gk(d, t, r);
            h[y][O] = x;
            break;
        }
      }
    }
  };
}
function qd(n, t, e) {
  return t.getType().runtime.bin.readMessage(t, n, n.uint32(), e), t;
}
function gk(n, t, e) {
  const r = t.uint32(), i = t.pos + r;
  let a, l;
  for (; t.pos < i; ) {
    let [c] = t.tag();
    switch (c) {
      case 1:
        a = Ml(t, n.K);
        break;
      case 2:
        switch (n.V.kind) {
          case "scalar":
            l = Ml(t, n.V.T);
            break;
          case "enum":
            l = t.int32();
            break;
          case "message":
            l = qd(t, new n.V.T(), e);
            break;
        }
        break;
    }
  }
  if (a === void 0) {
    let c = Ep(n.K);
    a = n.K == R.BOOL ? c.toString() : c;
  }
  if (typeof a != "string" && typeof a != "number" && (a = a.toString()), l === void 0)
    switch (n.V.kind) {
      case "scalar":
        l = Ep(n.V.T);
        break;
      case "enum":
        l = 0;
        break;
      case "message":
        l = new n.V.T();
        break;
    }
  return [a, l];
}
function Ml(n, t) {
  switch (t) {
    case R.STRING:
      return n.string();
    case R.BOOL:
      return n.bool();
    case R.DOUBLE:
      return n.double();
    case R.FLOAT:
      return n.float();
    case R.INT32:
      return n.int32();
    case R.INT64:
      return n.int64();
    case R.UINT64:
      return n.uint64();
    case R.FIXED64:
      return n.fixed64();
    case R.BYTES:
      return n.bytes();
    case R.FIXED32:
      return n.fixed32();
    case R.SFIXED32:
      return n.sfixed32();
    case R.SFIXED64:
      return n.sfixed64();
    case R.SINT64:
      return n.sint64();
    case R.UINT32:
      return n.uint32();
    case R.SINT32:
      return n.sint32();
  }
}
function yk(n, t, e, r, i) {
  n.tag(e.no, jt.LengthDelimited), n.fork();
  let a = r;
  switch (e.K) {
    case R.INT32:
    case R.FIXED32:
    case R.UINT32:
    case R.SFIXED32:
    case R.SINT32:
      a = Number.parseInt(r);
      break;
    case R.BOOL:
      Ee(r == "true" || r == "false"), a = r == "true";
      break;
  }
  switch ($l(n, e.K, 1, a, !0), e.V.kind) {
    case "scalar":
      $l(n, e.V.T, 2, i, !0);
      break;
    case "enum":
      $l(n, R.INT32, 2, i, !0);
      break;
    case "message":
      bp(n, t, e.V.T, 2, i);
      break;
  }
  n.join();
}
function bp(n, t, e, r, i) {
  if (i !== void 0) {
    const a = Np(e, i);
    n.tag(r, jt.LengthDelimited).bytes(a.toBinary(t));
  }
}
function $l(n, t, e, r, i) {
  let [a, l, c] = Kw(t, r);
  (!c || i) && n.tag(e, a)[l](r);
}
function wk(n, t, e, r) {
  if (!r.length)
    return;
  n.tag(e, jt.LengthDelimited).fork();
  let [, i] = Kw(t);
  for (let a = 0; a < r.length; a++)
    n[i](r[a]);
  n.join();
}
function Tk() {
  return Object.assign(Object.assign({}, pk()), { writeMessage(n, t, e) {
    const r = n.getType();
    for (const i of r.fields.byNumber()) {
      let a, l = i.repeated, c = i.localName;
      if (i.oneof) {
        const d = n[i.oneof.localName];
        if (d.case !== c)
          continue;
        a = d.value;
      } else
        a = n[c];
      switch (i.kind) {
        case "scalar":
        case "enum":
          let d = i.kind == "enum" ? R.INT32 : i.T;
          if (l)
            if (i.packed)
              wk(t, d, i.no, a);
            else
              for (const h of a)
                $l(t, d, i.no, h, !0);
          else
            a !== void 0 && $l(t, d, i.no, a, !!i.oneof || i.opt);
          break;
        case "message":
          if (l)
            for (const h of a)
              bp(t, e, i.T, i.no, h);
          else
            bp(t, e, i.T, i.no, a);
          break;
        case "map":
          for (const [h, g] of Object.entries(a))
            yk(t, e, i, h, g);
          break;
      }
    }
    return e.writeUnknownFields && this.writeUnknownFields(n, t), t;
  } });
}
let gr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), Nh = [];
for (let n = 0; n < gr.length; n++)
  Nh[gr[n].charCodeAt(0)] = n;
Nh["-".charCodeAt(0)] = gr.indexOf("+");
Nh["_".charCodeAt(0)] = gr.indexOf("/");
const Rw = {
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
    let t = n.length * 3 / 4;
    n[n.length - 2] == "=" ? t -= 2 : n[n.length - 1] == "=" && (t -= 1);
    let e = new Uint8Array(t), r = 0, i = 0, a, l = 0;
    for (let c = 0; c < n.length; c++) {
      if (a = Nh[n.charCodeAt(c)], a === void 0)
        switch (n[c]) {
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
          l = a, i = 1;
          break;
        case 1:
          e[r++] = l << 2 | (a & 48) >> 4, l = a, i = 2;
          break;
        case 2:
          e[r++] = (l & 15) << 4 | (a & 60) >> 2, l = a, i = 3;
          break;
        case 3:
          e[r++] = (l & 3) << 6 | a, i = 0;
          break;
      }
    }
    if (i == 1)
      throw Error("invalid base64 string.");
    return e.subarray(0, r);
  },
  /**
   * Encode a byte array to a base64 string.
   */
  enc(n) {
    let t = "", e = 0, r, i = 0;
    for (let a = 0; a < n.length; a++)
      switch (r = n[a], e) {
        case 0:
          t += gr[r >> 2], i = (r & 3) << 4, e = 1;
          break;
        case 1:
          t += gr[i | r >> 4], i = (r & 15) << 2, e = 2;
          break;
        case 2:
          t += gr[i | r >> 6], t += gr[r & 63], e = 0;
          break;
      }
    return e && (t += gr[i], t += "=", e == 1 && (t += "=")), t;
  }
}, Iy = {
  ignoreUnknownFields: !1
}, Oy = {
  emitDefaultValues: !1,
  enumAsInteger: !1,
  useProtoFieldName: !1,
  prettySpaces: 0
};
function Nk(n) {
  return n ? Object.assign(Object.assign({}, Iy), n) : Iy;
}
function Ek(n) {
  return n ? Object.assign(Object.assign({}, Oy), n) : Oy;
}
function bk(n) {
  const t = n(kk, vy);
  return {
    makeReadOptions: Nk,
    makeWriteOptions: Ek,
    readMessage(e, r, i, a) {
      if (r == null || Array.isArray(r) || typeof r != "object")
        throw new Error(`cannot decode message ${e.typeName} from JSON: ${this.debug(r)}`);
      a = a ?? new e();
      const l = {};
      for (const [c, d] of Object.entries(r)) {
        const h = e.fields.findJsonName(c);
        if (!h) {
          if (!i.ignoreUnknownFields)
            throw new Error(`cannot decode message ${e.typeName} from JSON: key "${c}" is unknown`);
          continue;
        }
        let g = h.localName, y = a;
        if (h.oneof) {
          if (d === null && h.kind == "scalar")
            continue;
          const T = l[h.oneof.localName];
          if (T)
            throw new Error(`cannot decode message ${e.typeName} from JSON: multiple keys for oneof "${h.oneof.name}" present: "${T}", "${c}"`);
          l[h.oneof.localName] = c, y = y[h.oneof.localName] = { case: g }, g = "value";
        }
        if (h.repeated) {
          if (d === null)
            continue;
          if (!Array.isArray(d))
            throw new Error(`cannot decode field ${e.typeName}.${h.name} from JSON: ${this.debug(d)}`);
          const T = y[g];
          for (const b of d) {
            if (b === null)
              throw new Error(`cannot decode field ${e.typeName}.${h.name} from JSON: ${this.debug(b)}`);
            let O;
            switch (h.kind) {
              case "message":
                O = h.T.fromJson(b, i);
                break;
              case "enum":
                if (O = Ph(h.T, b, i.ignoreUnknownFields), O === void 0)
                  continue;
                break;
              case "scalar":
                try {
                  O = Sl(h.T, b);
                } catch (x) {
                  let L = `cannot decode field ${e.typeName}.${h.name} from JSON: ${this.debug(b)}`;
                  throw x instanceof Error && x.message.length > 0 && (L += `: ${x.message}`), new Error(L);
                }
                break;
            }
            T.push(O);
          }
        } else if (h.kind == "map") {
          if (d === null)
            continue;
          if (Array.isArray(d) || typeof d != "object")
            throw new Error(`cannot decode field ${e.typeName}.${h.name} from JSON: ${this.debug(d)}`);
          const T = y[g];
          for (const [b, O] of Object.entries(d)) {
            if (O === null)
              throw new Error(`cannot decode field ${e.typeName}.${h.name} from JSON: map value null`);
            let x;
            switch (h.V.kind) {
              case "message":
                x = h.V.T.fromJson(O, i);
                break;
              case "enum":
                if (x = Ph(h.V.T, O, i.ignoreUnknownFields), x === void 0)
                  continue;
                break;
              case "scalar":
                try {
                  x = Sl(h.V.T, O);
                } catch (L) {
                  let $ = `cannot decode map value for field ${e.typeName}.${h.name} from JSON: ${this.debug(d)}`;
                  throw L instanceof Error && L.message.length > 0 && ($ += `: ${L.message}`), new Error($);
                }
                break;
            }
            try {
              T[Sl(h.K, h.K == R.BOOL ? b == "true" ? !0 : b == "false" ? !1 : b : b).toString()] = x;
            } catch (L) {
              let $ = `cannot decode map key for field ${e.typeName}.${h.name} from JSON: ${this.debug(d)}`;
              throw L instanceof Error && L.message.length > 0 && ($ += `: ${L.message}`), new Error($);
            }
          }
        } else
          switch (h.kind) {
            case "message":
              const T = h.T;
              if (d === null && T.typeName != "google.protobuf.Value") {
                if (h.oneof)
                  throw new Error(`cannot decode field ${e.typeName}.${h.name} from JSON: null is invalid for oneof field "${c}"`);
                continue;
              }
              y[g] instanceof I ? y[g].fromJson(d, i) : (y[g] = T.fromJson(d, i), T.fieldWrapper && !h.oneof && (y[g] = T.fieldWrapper.unwrapField(y[g])));
              break;
            case "enum":
              const b = Ph(h.T, d, i.ignoreUnknownFields);
              b !== void 0 && (y[g] = b);
              break;
            case "scalar":
              try {
                y[g] = Sl(h.T, d);
              } catch (O) {
                let x = `cannot decode field ${e.typeName}.${h.name} from JSON: ${this.debug(d)}`;
                throw O instanceof Error && O.message.length > 0 && (x += `: ${O.message}`), new Error(x);
              }
              break;
          }
      }
      return a;
    },
    writeMessage(e, r) {
      const i = e.getType(), a = {};
      let l;
      try {
        for (const c of i.fields.byMember()) {
          let d;
          if (c.kind == "oneof") {
            const h = e[c.localName];
            if (h.value === void 0)
              continue;
            if (l = c.findField(h.case), !l)
              throw "oneof case not found: " + h.case;
            d = t(l, h.value, r);
          } else
            l = c, d = t(l, e[l.localName], r);
          d !== void 0 && (a[r.useProtoFieldName ? l.name : l.jsonName] = d);
        }
      } catch (c) {
        const d = l ? `cannot encode field ${i.typeName}.${l.name} to JSON` : `cannot encode message ${i.typeName} to JSON`, h = c instanceof Error ? c.message : String(c);
        throw new Error(d + (h.length > 0 ? `: ${h}` : ""));
      }
      return a;
    },
    readScalar: Sl,
    writeScalar: vy,
    debug: Mw
  };
}
function Mw(n) {
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
function Sl(n, t) {
  switch (n) {
    case R.DOUBLE:
    case R.FLOAT:
      if (t === null)
        return 0;
      if (t === "NaN")
        return Number.NaN;
      if (t === "Infinity")
        return Number.POSITIVE_INFINITY;
      if (t === "-Infinity")
        return Number.NEGATIVE_INFINITY;
      if (t === "" || typeof t == "string" && t.trim().length !== t.length || typeof t != "string" && typeof t != "number")
        break;
      const e = Number(t);
      if (Number.isNaN(e) || !Number.isFinite(e))
        break;
      return n == R.FLOAT && Uw(e), e;
    case R.INT32:
    case R.FIXED32:
    case R.SFIXED32:
    case R.SINT32:
    case R.UINT32:
      if (t === null)
        return 0;
      let r;
      if (typeof t == "number" ? r = t : typeof t == "string" && t.length > 0 && t.trim().length === t.length && (r = Number(t)), r === void 0)
        break;
      return n == R.UINT32 ? Tp(r) : Ld(r), r;
    case R.INT64:
    case R.SFIXED64:
    case R.SINT64:
      if (t === null)
        return It.zero;
      if (typeof t != "number" && typeof t != "string")
        break;
      return It.parse(t);
    case R.FIXED64:
    case R.UINT64:
      if (t === null)
        return It.zero;
      if (typeof t != "number" && typeof t != "string")
        break;
      return It.uParse(t);
    case R.BOOL:
      if (t === null)
        return !1;
      if (typeof t != "boolean")
        break;
      return t;
    case R.STRING:
      if (t === null)
        return "";
      if (typeof t != "string")
        break;
      try {
        encodeURIComponent(t);
      } catch {
        throw new Error("invalid UTF8");
      }
      return t;
    case R.BYTES:
      if (t === null || t === "")
        return new Uint8Array(0);
      if (typeof t != "string")
        break;
      return Rw.dec(t);
  }
  throw new Error();
}
function Ph(n, t, e) {
  if (t === null)
    return 0;
  switch (typeof t) {
    case "number":
      if (Number.isInteger(t))
        return t;
      break;
    case "string":
      const r = n.findName(t);
      if (r || e)
        return r == null ? void 0 : r.no;
      break;
  }
  throw new Error(`cannot decode enum ${n.typeName} from JSON: ${Mw(t)}`);
}
function kk(n, t, e, r) {
  var i;
  if (t === void 0)
    return t;
  if (t === 0 && !e)
    return;
  if (r)
    return t;
  if (n.typeName == "google.protobuf.NullValue")
    return null;
  const a = n.findNumber(t);
  return (i = a == null ? void 0 : a.name) !== null && i !== void 0 ? i : t;
}
function vy(n, t, e) {
  if (t !== void 0)
    switch (n) {
      case R.INT32:
      case R.SFIXED32:
      case R.SINT32:
      case R.FIXED32:
      case R.UINT32:
        return Ee(typeof t == "number"), t != 0 || e ? t : void 0;
      case R.FLOAT:
      case R.DOUBLE:
        return Ee(typeof t == "number"), Number.isNaN(t) ? "NaN" : t === Number.POSITIVE_INFINITY ? "Infinity" : t === Number.NEGATIVE_INFINITY ? "-Infinity" : t !== 0 || e ? t : void 0;
      case R.STRING:
        return Ee(typeof t == "string"), t.length > 0 || e ? t : void 0;
      case R.BOOL:
        return Ee(typeof t == "boolean"), t || e ? t : void 0;
      case R.UINT64:
      case R.FIXED64:
      case R.INT64:
      case R.SFIXED64:
      case R.SINT64:
        return Ee(typeof t == "bigint" || typeof t == "string" || typeof t == "number"), e || t != 0 ? t.toString(10) : void 0;
      case R.BYTES:
        return Ee(t instanceof Uint8Array), e || t.byteLength > 0 ? Rw.enc(t) : void 0;
    }
}
function Bk() {
  return bk((n, t) => function(e, r, i) {
    if (e.kind == "map") {
      const a = {};
      switch (e.V.kind) {
        case "scalar":
          for (const [c, d] of Object.entries(r)) {
            const h = t(e.V.T, d, !0);
            Ee(h !== void 0), a[c.toString()] = h;
          }
          break;
        case "message":
          for (const [c, d] of Object.entries(r))
            a[c.toString()] = d.toJson(i);
          break;
        case "enum":
          const l = e.V.T;
          for (const [c, d] of Object.entries(r)) {
            Ee(d === void 0 || typeof d == "number");
            const h = n(l, d, !0, i.enumAsInteger);
            Ee(h !== void 0), a[c.toString()] = h;
          }
          break;
      }
      return i.emitDefaultValues || Object.keys(a).length > 0 ? a : void 0;
    } else if (e.repeated) {
      const a = [];
      switch (e.kind) {
        case "scalar":
          for (let l = 0; l < r.length; l++)
            a.push(t(e.T, r[l], !0));
          break;
        case "enum":
          for (let l = 0; l < r.length; l++)
            a.push(n(e.T, r[l], !0, i.enumAsInteger));
          break;
        case "message":
          for (let l = 0; l < r.length; l++)
            a.push(Np(e.T, r[l]).toJson(i));
          break;
      }
      return i.emitDefaultValues || a.length > 0 ? a : void 0;
    } else
      switch (e.kind) {
        case "scalar":
          return t(e.T, r, !!e.oneof || e.opt || i.emitDefaultValues);
        case "enum":
          return n(e.T, r, !!e.oneof || e.opt || i.emitDefaultValues, i.enumAsInteger);
        case "message":
          return r !== void 0 ? Np(e.T, r).toJson(i) : void 0;
      }
  });
}
function Sk() {
  return {
    setEnumType: Fw,
    initPartial(n, t) {
      if (n === void 0)
        return;
      const e = t.getType();
      for (const r of e.fields.byMember()) {
        const i = r.localName, a = t, l = n;
        if (l[i] !== void 0)
          switch (r.kind) {
            case "oneof":
              const c = l[i].case;
              if (c === void 0)
                continue;
              const d = r.findField(c);
              let h = l[i].value;
              d && d.kind == "message" && !(h instanceof d.T) ? h = new d.T(h) : d && d.kind === "scalar" && d.T === R.BYTES && (h = Il(h)), a[i] = { case: c, value: h };
              break;
            case "scalar":
            case "enum":
              let g = l[i];
              r.T === R.BYTES && (g = r.repeated ? g.map(Il) : Il(g)), a[i] = g;
              break;
            case "map":
              switch (r.V.kind) {
                case "scalar":
                case "enum":
                  if (r.V.T === R.BYTES)
                    for (const [b, O] of Object.entries(l[i]))
                      a[i][b] = Il(O);
                  else
                    Object.assign(a[i], l[i]);
                  break;
                case "message":
                  const T = r.V.T;
                  for (const b of Object.keys(l[i])) {
                    let O = l[i][b];
                    T.fieldWrapper || (O = new T(O)), a[i][b] = O;
                  }
                  break;
              }
              break;
            case "message":
              const y = r.T;
              if (r.repeated)
                a[i] = l[i].map((T) => T instanceof y ? T : new y(T));
              else if (l[i] !== void 0) {
                const T = l[i];
                y.fieldWrapper ? (
                  /* We can't use BytesValue.typeName as that will create a circular import */
                  y.typeName === "google.protobuf.BytesValue" ? a[i] = Il(T) : a[i] = T
                ) : a[i] = T instanceof y ? T : new y(T);
              }
              break;
          }
      }
    },
    equals(n, t, e) {
      return t === e ? !0 : !t || !e ? !1 : n.fields.byMember().every((r) => {
        const i = t[r.localName], a = e[r.localName];
        if (r.repeated) {
          if (i.length !== a.length)
            return !1;
          switch (r.kind) {
            case "message":
              return i.every((l, c) => r.T.equals(l, a[c]));
            case "scalar":
              return i.every((l, c) => Ga(r.T, l, a[c]));
            case "enum":
              return i.every((l, c) => Ga(R.INT32, l, a[c]));
          }
          throw new Error(`repeated cannot contain ${r.kind}`);
        }
        switch (r.kind) {
          case "message":
            return r.T.equals(i, a);
          case "enum":
            return Ga(R.INT32, i, a);
          case "scalar":
            return Ga(r.T, i, a);
          case "oneof":
            if (i.case !== a.case)
              return !1;
            const l = r.findField(i.case);
            if (l === void 0)
              return !0;
            switch (l.kind) {
              case "message":
                return l.T.equals(i.value, a.value);
              case "enum":
                return Ga(R.INT32, i.value, a.value);
              case "scalar":
                return Ga(l.T, i.value, a.value);
            }
            throw new Error(`oneof cannot contain ${l.kind}`);
          case "map":
            const c = Object.keys(i).concat(Object.keys(a));
            switch (r.V.kind) {
              case "message":
                const d = r.V.T;
                return c.every((g) => d.equals(i[g], a[g]));
              case "enum":
                return c.every((g) => Ga(R.INT32, i[g], a[g]));
              case "scalar":
                const h = r.V.T;
                return c.every((g) => Ga(h, i[g], a[g]));
            }
            break;
        }
      });
    },
    clone(n) {
      const t = n.getType(), e = new t(), r = e;
      for (const i of t.fields.byMember()) {
        const a = n[i.localName];
        let l;
        if (i.repeated)
          l = a.map(Td);
        else if (i.kind == "map") {
          l = r[i.localName];
          for (const [c, d] of Object.entries(a))
            l[c] = Td(d);
        } else
          i.kind == "oneof" ? l = i.findField(a.case) ? { case: a.case, value: Td(a.value) } : { case: void 0 } : l = Td(a);
        r[i.localName] = l;
      }
      return e;
    }
  };
}
function Td(n) {
  if (n === void 0)
    return n;
  if (n instanceof I)
    return n.clone();
  if (n instanceof Uint8Array) {
    const t = new Uint8Array(n.byteLength);
    return t.set(n), t;
  }
  return n;
}
function Il(n) {
  return n instanceof Uint8Array ? n : new Uint8Array(n);
}
class Ik {
  constructor(t, e) {
    this._fields = t, this._normalizer = e;
  }
  findJsonName(t) {
    if (!this.jsonNames) {
      const e = {};
      for (const r of this.list())
        e[r.jsonName] = e[r.name] = r;
      this.jsonNames = e;
    }
    return this.jsonNames[t];
  }
  find(t) {
    if (!this.numbers) {
      const e = {};
      for (const r of this.list())
        e[r.no] = r;
      this.numbers = e;
    }
    return this.numbers[t];
  }
  list() {
    return this.all || (this.all = this._normalizer(this._fields)), this.all;
  }
  byNumber() {
    return this.numbersAsc || (this.numbersAsc = this.list().concat().sort((t, e) => t.no - e.no)), this.numbersAsc;
  }
  byMember() {
    if (!this.members) {
      this.members = [];
      const t = this.members;
      let e;
      for (const r of this.list())
        r.oneof ? r.oneof !== e && (e = r.oneof, t.push(e)) : t.push(r);
    }
    return this.members;
  }
}
function $w(n, t) {
  const e = Vw(n);
  return t ? e : Uk(Ak(e));
}
function Ok(n) {
  return $w(n, !1);
}
const vk = Vw;
function Vw(n) {
  let t = !1;
  const e = [];
  for (let r = 0; r < n.length; r++) {
    let i = n.charAt(r);
    switch (i) {
      case "_":
        t = !0;
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
        e.push(i), t = !1;
        break;
      default:
        t && (t = !1, i = i.toUpperCase()), e.push(i);
        break;
    }
  }
  return e.join("");
}
const Jk = /* @__PURE__ */ new Set([
  // names reserved by JavaScript
  "constructor",
  "toString",
  "toJSON",
  "valueOf"
]), xk = /* @__PURE__ */ new Set([
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
]), _w = (n) => `${n}$`, Ak = (n) => xk.has(n) ? _w(n) : n, Uk = (n) => Jk.has(n) ? _w(n) : n;
class Lk {
  constructor(t) {
    this.kind = "oneof", this.repeated = !1, this.packed = !1, this.opt = !1, this.default = void 0, this.fields = [], this.name = t, this.localName = Ok(t);
  }
  addField(t) {
    Ee(t.oneof === this, `field ${t.name} not one of ${this.name}`), this.fields.push(t);
  }
  findField(t) {
    if (!this._lookup) {
      this._lookup = /* @__PURE__ */ Object.create(null);
      for (let e = 0; e < this.fields.length; e++)
        this._lookup[this.fields[e].localName] = this.fields[e];
    }
    return this._lookup[t];
  }
}
const m = sk("proto3", Bk(), Tk(), Object.assign(Object.assign({}, Sk()), {
  newFieldList(n) {
    return new Ik(n, Fk);
  },
  initFields(n) {
    for (const t of n.getType().fields.byMember()) {
      if (t.opt)
        continue;
      const e = t.localName, r = n;
      if (t.repeated) {
        r[e] = [];
        continue;
      }
      switch (t.kind) {
        case "oneof":
          r[e] = { case: void 0 };
          break;
        case "enum":
          r[e] = 0;
          break;
        case "map":
          r[e] = {};
          break;
        case "scalar":
          r[e] = Ep(t.T);
          break;
      }
    }
  }
}));
function Fk(n) {
  var t, e, r;
  const i = [];
  let a;
  for (const l of typeof n == "function" ? n() : n) {
    const c = l;
    if (c.localName = $w(l.name, l.oneof !== void 0), c.jsonName = (t = l.jsonName) !== null && t !== void 0 ? t : vk(l.name), c.repeated = (e = l.repeated) !== null && e !== void 0 ? e : !1, c.packed = (r = l.packed) !== null && r !== void 0 ? r : l.kind == "enum" || l.kind == "scalar" && l.T != R.BYTES && l.T != R.STRING, l.oneof !== void 0) {
      const d = typeof l.oneof == "string" ? l.oneof : l.oneof.name;
      (!a || a.name != d) && (a = new Lk(d)), c.oneof = a, a.addField(c);
    }
    i.push(c);
  }
  return i;
}
var bt;
(function(n) {
  n[n.Unary = 0] = "Unary", n[n.ServerStreaming = 1] = "ServerStreaming", n[n.ClientStreaming = 2] = "ClientStreaming", n[n.BiDiStreaming = 3] = "BiDiStreaming";
})(bt || (bt = {}));
var Jy;
(function(n) {
  n[n.NoSideEffects = 1] = "NoSideEffects", n[n.Idempotent = 2] = "Idempotent";
})(Jy || (Jy = {}));
class Xt extends I {
  constructor(t) {
    super(), this.seconds = It.zero, this.nanos = 0, m.util.initPartial(t, this);
  }
  fromJson(t, e) {
    if (typeof t != "string")
      throw new Error(`cannot decode google.protobuf.Timestamp from JSON: ${m.json.debug(t)}`);
    const r = t.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
    if (!r)
      throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
    const i = Date.parse(r[1] + "-" + r[2] + "-" + r[3] + "T" + r[4] + ":" + r[5] + ":" + r[6] + (r[8] ? r[8] : "Z"));
    if (Number.isNaN(i))
      throw new Error("cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string");
    if (i < Date.parse("0001-01-01T00:00:00Z") || i > Date.parse("9999-12-31T23:59:59Z"))
      throw new Error("cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
    return this.seconds = It.parse(i / 1e3), this.nanos = 0, r[7] && (this.nanos = parseInt("1" + r[7] + "0".repeat(9 - r[7].length)) - 1e9), this;
  }
  toJson(t) {
    const e = Number(this.seconds) * 1e3;
    if (e < Date.parse("0001-01-01T00:00:00Z") || e > Date.parse("9999-12-31T23:59:59Z"))
      throw new Error("cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive");
    if (this.nanos < 0)
      throw new Error("cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative");
    let r = "Z";
    if (this.nanos > 0) {
      const i = (this.nanos + 1e9).toString().substring(1);
      i.substring(3) === "000000" ? r = "." + i.substring(0, 3) + "Z" : i.substring(6) === "000" ? r = "." + i.substring(0, 6) + "Z" : r = "." + i + "Z";
    }
    return new Date(e).toISOString().replace(".000Z", r);
  }
  toDate() {
    return new Date(Number(this.seconds) * 1e3 + Math.ceil(this.nanos / 1e6));
  }
  static now() {
    return Xt.fromDate(/* @__PURE__ */ new Date());
  }
  static fromDate(t) {
    const e = t.getTime();
    return new Xt({
      seconds: It.parse(Math.floor(e / 1e3)),
      nanos: e % 1e3 * 1e6
    });
  }
  static fromBinary(t, e) {
    return new Xt().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Xt().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Xt().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Xt, t, e);
  }
}
Xt.runtime = m;
Xt.typeName = "google.protobuf.Timestamp";
Xt.fields = m.util.newFieldList(() => [
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
class ao extends I {
  constructor(t) {
    super(), this.seconds = It.zero, this.nanos = 0, m.util.initPartial(t, this);
  }
  fromJson(t, e) {
    if (typeof t != "string")
      throw new Error(`cannot decode google.protobuf.Duration from JSON: ${m.json.debug(t)}`);
    const r = t.match(/^(-?[0-9]+)(?:\.([0-9]+))?s/);
    if (r === null)
      throw new Error(`cannot decode google.protobuf.Duration from JSON: ${m.json.debug(t)}`);
    const i = Number(r[1]);
    if (i > 315576e6 || i < -315576e6)
      throw new Error(`cannot decode google.protobuf.Duration from JSON: ${m.json.debug(t)}`);
    if (this.seconds = It.parse(i), typeof r[2] == "string") {
      const a = r[2] + "0".repeat(9 - r[2].length);
      this.nanos = parseInt(a), (i < 0 || Object.is(i, -0)) && (this.nanos = -this.nanos);
    }
    return this;
  }
  toJson(t) {
    if (Number(this.seconds) > 315576e6 || Number(this.seconds) < -315576e6)
      throw new Error("cannot encode google.protobuf.Duration to JSON: value out of range");
    let e = this.seconds.toString();
    if (this.nanos !== 0) {
      let r = Math.abs(this.nanos).toString();
      r = "0".repeat(9 - r.length) + r, r.substring(3) === "000000" ? r = r.substring(0, 3) : r.substring(6) === "000" && (r = r.substring(0, 6)), e += "." + r, this.nanos < 0 && this.seconds === It.zero && (e = "-" + e);
    }
    return e + "s";
  }
  static fromBinary(t, e) {
    return new ao().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new ao().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new ao().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(ao, t, e);
  }
}
ao.runtime = m;
ao.typeName = "google.protobuf.Duration";
ao.fields = m.util.newFieldList(() => [
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
var Ce;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.PRIMARY = 1] = "PRIMARY", n[n.TEMPORARY_INCOMING = 2] = "TEMPORARY_INCOMING", n[n.TEMPORARY_OUTGOING = 3] = "TEMPORARY_OUTGOING", n[n.BUCKET_1_KIN = 4] = "BUCKET_1_KIN", n[n.BUCKET_10_KIN = 5] = "BUCKET_10_KIN", n[n.BUCKET_100_KIN = 6] = "BUCKET_100_KIN", n[n.BUCKET_1_000_KIN = 7] = "BUCKET_1_000_KIN", n[n.BUCKET_10_000_KIN = 8] = "BUCKET_10_000_KIN", n[n.BUCKET_100_000_KIN = 9] = "BUCKET_100_000_KIN", n[n.BUCKET_1_000_000_KIN = 10] = "BUCKET_1_000_000_KIN", n[n.LEGACY_PRIMARY_2022 = 11] = "LEGACY_PRIMARY_2022", n[n.REMOTE_SEND_GIFT_CARD = 12] = "REMOTE_SEND_GIFT_CARD", n[n.RELATIONSHIP = 13] = "RELATIONSHIP", n[n.ASSOCIATED_TOKEN_ACCOUNT = 14] = "ASSOCIATED_TOKEN_ACCOUNT";
})(Ce || (Ce = {}));
m.util.setEnumType(Ce, "code.common.v1.AccountType", [
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
class W extends I {
  constructor(t) {
    super(), this.value = new Uint8Array(0), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new W().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new W().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new W().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(W, t, e);
  }
}
W.runtime = m;
W.typeName = "code.common.v1.SolanaAccountId";
W.fields = m.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class uo extends I {
  constructor(t) {
    super(), this.isSigner = !1, this.isWritable = !1, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new uo().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new uo().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new uo().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(uo, t, e);
  }
}
uo.runtime = m;
uo.typeName = "code.common.v1.InstructionAccount";
uo.fields = m.util.newFieldList(() => [
  { no: 1, name: "account", kind: "message", T: W },
  { no: 2, name: "is_signer", kind: "scalar", T: 8 },
  { no: 3, name: "is_writable", kind: "scalar", T: 8 }
]);
class Mn extends I {
  constructor(t) {
    super(), this.value = new Uint8Array(0), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Mn().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Mn().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Mn().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Mn, t, e);
  }
}
Mn.runtime = m;
Mn.typeName = "code.common.v1.Transaction";
Mn.fields = m.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class $n extends I {
  constructor(t) {
    super(), this.value = new Uint8Array(0), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new $n().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new $n().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new $n().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals($n, t, e);
  }
}
$n.runtime = m;
$n.typeName = "code.common.v1.Blockhash";
$n.fields = m.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class Tt extends I {
  constructor(t) {
    super(), this.value = new Uint8Array(0), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Tt().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Tt().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Tt().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Tt, t, e);
  }
}
Tt.runtime = m;
Tt.typeName = "code.common.v1.Signature";
Tt.fields = m.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class ie extends I {
  constructor(t) {
    super(), this.value = new Uint8Array(0), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new ie().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new ie().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new ie().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(ie, t, e);
  }
}
ie.runtime = m;
ie.typeName = "code.common.v1.IntentId";
ie.fields = m.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class He extends I {
  constructor(t) {
    super(), this.value = new Uint8Array(0), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new He().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new He().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new He().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(He, t, e);
  }
}
He.runtime = m;
He.typeName = "code.common.v1.UserId";
He.fields = m.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class Ie extends I {
  constructor(t) {
    super(), this.value = new Uint8Array(0), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Ie().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Ie().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Ie().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Ie, t, e);
  }
}
Ie.runtime = m;
Ie.typeName = "code.common.v1.DataContainerId";
Ie.fields = m.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class Vn extends I {
  constructor(t) {
    super(), this.value = "", m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Vn().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Vn().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Vn().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Vn, t, e);
  }
}
Vn.runtime = m;
Vn.typeName = "code.common.v1.DeviceToken";
Vn.fields = m.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 9 }
]);
class sn extends I {
  constructor(t) {
    super(), this.value = "", m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new sn().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new sn().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new sn().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(sn, t, e);
  }
}
sn.runtime = m;
sn.typeName = "code.common.v1.AppInstallId";
sn.fields = m.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 9 }
]);
class se extends I {
  constructor(t) {
    super(), this.value = "", m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new se().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new se().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new se().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(se, t, e);
  }
}
se.runtime = m;
se.typeName = "code.common.v1.PhoneNumber";
se.fields = m.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 9 }
]);
class Fe extends I {
  constructor(t) {
    super(), this.value = "", m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Fe().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Fe().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Fe().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Fe, t, e);
  }
}
Fe.runtime = m;
Fe.typeName = "code.common.v1.Domain";
Fe.fields = m.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 9 }
]);
class _n extends I {
  constructor(t) {
    super(), this.type = { case: void 0 }, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new _n().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new _n().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new _n().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(_n, t, e);
  }
}
_n.runtime = m;
_n.typeName = "code.common.v1.Relationship";
_n.fields = m.util.newFieldList(() => [
  { no: 1, name: "domain", kind: "message", T: Fe, oneof: "type" }
]);
let Ka = class Fl extends I {
  constructor(t) {
    super(), this.value = new Uint8Array(0), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Fl().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Fl().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Fl().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Fl, t, e);
  }
};
Ka.runtime = m;
Ka.typeName = "code.common.v1.Hash";
Ka.fields = m.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class co extends I {
  constructor(t) {
    super(), this.version = "", this.service = "", this.method = "", this.body = new Uint8Array(0), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new co().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new co().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new co().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(co, t, e);
  }
}
co.runtime = m;
co.typeName = "code.common.v1.Request";
co.fields = m.util.newFieldList(() => [
  { no: 1, name: "version", kind: "scalar", T: 9 },
  { no: 2, name: "service", kind: "scalar", T: 9 },
  { no: 3, name: "method", kind: "scalar", T: 9 },
  { no: 4, name: "body", kind: "scalar", T: 12 }
]);
class lo extends I {
  constructor(t) {
    super(), this.result = Zf.OK, this.body = new Uint8Array(0), this.message = "", m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new lo().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new lo().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new lo().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(lo, t, e);
  }
}
lo.runtime = m;
lo.typeName = "code.common.v1.Response";
lo.fields = m.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: m.getEnumType(Zf) },
  { no: 2, name: "body", kind: "scalar", T: 12 },
  { no: 3, name: "message", kind: "scalar", T: 9 }
]);
var Zf;
(function(n) {
  n[n.OK = 0] = "OK", n[n.ERROR = 1] = "ERROR";
})(Zf || (Zf = {}));
m.util.setEnumType(Zf, "code.common.v1.Response.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "ERROR" }
]);
var lr;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.GIVE_FIRST_KIN = 1] = "GIVE_FIRST_KIN", n[n.GET_FIRST_KIN = 2] = "GET_FIRST_KIN";
})(lr || (lr = {}));
m.util.setEnumType(lr, "code.transaction.v2.AirdropType", [
  { no: 0, name: "UNKNOWN" },
  { no: 1, name: "GIVE_FIRST_KIN" },
  { no: 2, name: "GET_FIRST_KIN" }
]);
class cu extends I {
  constructor(t) {
    super(), this.request = { case: void 0 }, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new cu().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new cu().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new cu().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(cu, t, e);
  }
}
cu.runtime = m;
cu.typeName = "code.transaction.v2.SubmitIntentRequest";
cu.fields = m.util.newFieldList(() => [
  { no: 1, name: "submit_actions", kind: "message", T: fo, oneof: "request" },
  { no: 2, name: "submit_signatures", kind: "message", T: mo, oneof: "request" }
]);
class fo extends I {
  constructor(t) {
    super(), this.actions = [], m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new fo().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new fo().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new fo().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(fo, t, e);
  }
}
fo.runtime = m;
fo.typeName = "code.transaction.v2.SubmitIntentRequest.SubmitActions";
fo.fields = m.util.newFieldList(() => [
  { no: 1, name: "id", kind: "message", T: ie },
  { no: 2, name: "owner", kind: "message", T: W },
  { no: 3, name: "metadata", kind: "message", T: on },
  { no: 4, name: "actions", kind: "message", T: xo, repeated: !0 },
  { no: 5, name: "signature", kind: "message", T: Tt },
  { no: 6, name: "device_token", kind: "message", T: Vn }
]);
class mo extends I {
  constructor(t) {
    super(), this.signatures = [], m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new mo().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new mo().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new mo().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(mo, t, e);
  }
}
mo.runtime = m;
mo.typeName = "code.transaction.v2.SubmitIntentRequest.SubmitSignatures";
mo.fields = m.util.newFieldList(() => [
  { no: 1, name: "signatures", kind: "message", T: Tt, repeated: !0 }
]);
class lu extends I {
  constructor(t) {
    super(), this.response = { case: void 0 }, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new lu().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new lu().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new lu().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(lu, t, e);
  }
}
lu.runtime = m;
lu.typeName = "code.transaction.v2.SubmitIntentResponse";
lu.fields = m.util.newFieldList(() => [
  { no: 1, name: "server_parameters", kind: "message", T: ho, oneof: "response" },
  { no: 2, name: "success", kind: "message", T: po, oneof: "response" },
  { no: 3, name: "error", kind: "message", T: go, oneof: "response" }
]);
class ho extends I {
  constructor(t) {
    super(), this.serverParameters = [], m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new ho().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new ho().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new ho().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(ho, t, e);
  }
}
ho.runtime = m;
ho.typeName = "code.transaction.v2.SubmitIntentResponse.ServerParameters";
ho.fields = m.util.newFieldList(() => [
  { no: 1, name: "server_parameters", kind: "message", T: Ro, repeated: !0 }
]);
class po extends I {
  constructor(t) {
    super(), this.code = Qf.OK, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new po().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new po().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new po().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(po, t, e);
  }
}
po.runtime = m;
po.typeName = "code.transaction.v2.SubmitIntentResponse.Success";
po.fields = m.util.newFieldList(() => [
  { no: 1, name: "code", kind: "enum", T: m.getEnumType(Qf) }
]);
var Qf;
(function(n) {
  n[n.OK = 0] = "OK";
})(Qf || (Qf = {}));
m.util.setEnumType(Qf, "code.transaction.v2.SubmitIntentResponse.Success.Code", [
  { no: 0, name: "OK" }
]);
class go extends I {
  constructor(t) {
    super(), this.code = tm.DENIED, this.errorDetails = [], m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new go().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new go().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new go().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(go, t, e);
  }
}
go.runtime = m;
go.typeName = "code.transaction.v2.SubmitIntentResponse.Error";
go.fields = m.util.newFieldList(() => [
  { no: 1, name: "code", kind: "enum", T: m.getEnumType(tm) },
  { no: 2, name: "error_details", kind: "message", T: Hn, repeated: !0 }
]);
var tm;
(function(n) {
  n[n.DENIED = 0] = "DENIED", n[n.INVALID_INTENT = 1] = "INVALID_INTENT", n[n.SIGNATURE_ERROR = 2] = "SIGNATURE_ERROR", n[n.STALE_STATE = 3] = "STALE_STATE";
})(tm || (tm = {}));
m.util.setEnumType(tm, "code.transaction.v2.SubmitIntentResponse.Error.Code", [
  { no: 0, name: "DENIED" },
  { no: 1, name: "INVALID_INTENT" },
  { no: 2, name: "SIGNATURE_ERROR" },
  { no: 3, name: "STALE_STATE" }
]);
class fu extends I {
  constructor(t) {
    super(), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new fu().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new fu().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new fu().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(fu, t, e);
  }
}
fu.runtime = m;
fu.typeName = "code.transaction.v2.GetIntentMetadataRequest";
fu.fields = m.util.newFieldList(() => [
  { no: 1, name: "intent_id", kind: "message", T: ie },
  { no: 2, name: "owner", kind: "message", T: W },
  { no: 3, name: "signature", kind: "message", T: Tt }
]);
class mu extends I {
  constructor(t) {
    super(), this.result = em.OK, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new mu().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new mu().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new mu().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(mu, t, e);
  }
}
mu.runtime = m;
mu.typeName = "code.transaction.v2.GetIntentMetadataResponse";
mu.fields = m.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: m.getEnumType(em) },
  { no: 2, name: "metadata", kind: "message", T: on }
]);
var em;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND";
})(em || (em = {}));
m.util.setEnumType(em, "code.transaction.v2.GetIntentMetadataResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" }
]);
class du extends I {
  constructor(t) {
    super(), this.actionId = 0, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new du().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new du().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new du().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(du, t, e);
  }
}
du.runtime = m;
du.typeName = "code.transaction.v2.GetPrivacyUpgradeStatusRequest";
du.fields = m.util.newFieldList(() => [
  { no: 1, name: "intent_id", kind: "message", T: ie },
  { no: 2, name: "action_id", kind: "scalar", T: 13 }
]);
class hu extends I {
  constructor(t) {
    super(), this.result = nm.OK, this.status = rm.UNKNOWN, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new hu().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new hu().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new hu().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(hu, t, e);
  }
}
hu.runtime = m;
hu.typeName = "code.transaction.v2.GetPrivacyUpgradeStatusResponse";
hu.fields = m.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: m.getEnumType(nm) },
  { no: 2, name: "status", kind: "enum", T: m.getEnumType(rm) }
]);
var nm;
(function(n) {
  n[n.OK = 0] = "OK", n[n.INTENT_NOT_FOUND = 1] = "INTENT_NOT_FOUND", n[n.ACTION_NOT_FOUND = 2] = "ACTION_NOT_FOUND", n[n.INVALID_ACTION = 3] = "INVALID_ACTION";
})(nm || (nm = {}));
m.util.setEnumType(nm, "code.transaction.v2.GetPrivacyUpgradeStatusResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INTENT_NOT_FOUND" },
  { no: 2, name: "ACTION_NOT_FOUND" },
  { no: 3, name: "INVALID_ACTION" }
]);
var rm;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.TEMPORARY_TRANSACTION_FINALIZED = 1] = "TEMPORARY_TRANSACTION_FINALIZED", n[n.WAITING_FOR_NEXT_BLOCK = 2] = "WAITING_FOR_NEXT_BLOCK", n[n.READY_FOR_UPGRADE = 3] = "READY_FOR_UPGRADE", n[n.ALREADY_UPGRADED = 4] = "ALREADY_UPGRADED";
})(rm || (rm = {}));
m.util.setEnumType(rm, "code.transaction.v2.GetPrivacyUpgradeStatusResponse.Status", [
  { no: 0, name: "UNKNOWN" },
  { no: 1, name: "TEMPORARY_TRANSACTION_FINALIZED" },
  { no: 2, name: "WAITING_FOR_NEXT_BLOCK" },
  { no: 3, name: "READY_FOR_UPGRADE" },
  { no: 4, name: "ALREADY_UPGRADED" }
]);
class pu extends I {
  constructor(t) {
    super(), this.limit = 0, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new pu().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new pu().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new pu().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(pu, t, e);
  }
}
pu.runtime = m;
pu.typeName = "code.transaction.v2.GetPrioritizedIntentsForPrivacyUpgradeRequest";
pu.fields = m.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: W },
  { no: 2, name: "limit", kind: "scalar", T: 13 },
  { no: 3, name: "signature", kind: "message", T: Tt }
]);
class gu extends I {
  constructor(t) {
    super(), this.result = im.OK, this.items = [], m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new gu().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new gu().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new gu().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(gu, t, e);
  }
}
gu.runtime = m;
gu.typeName = "code.transaction.v2.GetPrioritizedIntentsForPrivacyUpgradeResponse";
gu.fields = m.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: m.getEnumType(im) },
  { no: 2, name: "items", kind: "message", T: Qo, repeated: !0 }
]);
var im;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND";
})(im || (im = {}));
m.util.setEnumType(im, "code.transaction.v2.GetPrioritizedIntentsForPrivacyUpgradeResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" }
]);
class yu extends I {
  constructor(t) {
    super(), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new yu().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new yu().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new yu().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(yu, t, e);
  }
}
yu.runtime = m;
yu.typeName = "code.transaction.v2.GetLimitsRequest";
yu.fields = m.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: W },
  { no: 2, name: "signature", kind: "message", T: Tt },
  { no: 3, name: "consumed_since", kind: "message", T: Xt }
]);
class wu extends I {
  constructor(t) {
    super(), this.result = sm.OK, this.remainingSendLimitsByCurrency = {}, this.microPaymentLimitsByCurrency = {}, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new wu().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new wu().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new wu().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(wu, t, e);
  }
}
wu.runtime = m;
wu.typeName = "code.transaction.v2.GetLimitsResponse";
wu.fields = m.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: m.getEnumType(sm) },
  { no: 2, name: "remaining_send_limits_by_currency", kind: "map", K: 9, V: { kind: "message", T: na } },
  { no: 3, name: "deposit_limit", kind: "message", T: ra },
  { no: 4, name: "micro_payment_limits_by_currency", kind: "map", K: 9, V: { kind: "message", T: ia } }
]);
var sm;
(function(n) {
  n[n.OK = 0] = "OK";
})(sm || (sm = {}));
m.util.setEnumType(sm, "code.transaction.v2.GetLimitsResponse.Result", [
  { no: 0, name: "OK" }
]);
class Tu extends I {
  constructor(t) {
    super(), this.pageSize = 0, this.direction = om.ASC, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Tu().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Tu().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Tu().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Tu, t, e);
  }
}
Tu.runtime = m;
Tu.typeName = "code.transaction.v2.GetPaymentHistoryRequest";
Tu.fields = m.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: W },
  { no: 2, name: "cursor", kind: "message", T: sd },
  { no: 3, name: "page_size", kind: "scalar", T: 13 },
  { no: 4, name: "direction", kind: "enum", T: m.getEnumType(om) },
  { no: 5, name: "signature", kind: "message", T: Tt }
]);
var om;
(function(n) {
  n[n.ASC = 0] = "ASC", n[n.DESC = 1] = "DESC";
})(om || (om = {}));
m.util.setEnumType(om, "code.transaction.v2.GetPaymentHistoryRequest.Direction", [
  { no: 0, name: "ASC" },
  { no: 1, name: "DESC" }
]);
class Nu extends I {
  constructor(t) {
    super(), this.result = am.OK, this.items = [], m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Nu().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Nu().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Nu().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Nu, t, e);
  }
}
Nu.runtime = m;
Nu.typeName = "code.transaction.v2.GetPaymentHistoryResponse";
Nu.fields = m.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: m.getEnumType(am) },
  { no: 2, name: "items", kind: "message", T: ea, repeated: !0 }
]);
var am;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND";
})(am || (am = {}));
m.util.setEnumType(am, "code.transaction.v2.GetPaymentHistoryResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" }
]);
class Eu extends I {
  constructor(t) {
    super(), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Eu().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Eu().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Eu().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Eu, t, e);
  }
}
Eu.runtime = m;
Eu.typeName = "code.transaction.v2.CanWithdrawToAccountRequest";
Eu.fields = m.util.newFieldList(() => [
  { no: 1, name: "account", kind: "message", T: W }
]);
class bu extends I {
  constructor(t) {
    super(), this.accountType = um.Unknown, this.isValidPaymentDestination = !1, this.requiresInitialization = !1, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new bu().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new bu().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new bu().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(bu, t, e);
  }
}
bu.runtime = m;
bu.typeName = "code.transaction.v2.CanWithdrawToAccountResponse";
bu.fields = m.util.newFieldList(() => [
  { no: 2, name: "account_type", kind: "enum", T: m.getEnumType(um) },
  { no: 1, name: "is_valid_payment_destination", kind: "scalar", T: 8 },
  { no: 3, name: "requires_initialization", kind: "scalar", T: 8 }
]);
var um;
(function(n) {
  n[n.Unknown = 0] = "Unknown", n[n.TokenAccount = 1] = "TokenAccount", n[n.OwnerAccount = 2] = "OwnerAccount";
})(um || (um = {}));
m.util.setEnumType(um, "code.transaction.v2.CanWithdrawToAccountResponse.AccountType", [
  { no: 0, name: "Unknown" },
  { no: 1, name: "TokenAccount" },
  { no: 2, name: "OwnerAccount" }
]);
class ku extends I {
  constructor(t) {
    super(), this.airdropType = lr.UNKNOWN, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new ku().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new ku().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new ku().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(ku, t, e);
  }
}
ku.runtime = m;
ku.typeName = "code.transaction.v2.AirdropRequest";
ku.fields = m.util.newFieldList(() => [
  { no: 1, name: "airdrop_type", kind: "enum", T: m.getEnumType(lr) },
  { no: 2, name: "owner", kind: "message", T: W },
  { no: 3, name: "signature", kind: "message", T: Tt }
]);
class Bu extends I {
  constructor(t) {
    super(), this.result = cm.OK, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Bu().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Bu().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Bu().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Bu, t, e);
  }
}
Bu.runtime = m;
Bu.typeName = "code.transaction.v2.AirdropResponse";
Bu.fields = m.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: m.getEnumType(cm) },
  { no: 2, name: "exchange_data", kind: "message", T: ue }
]);
var cm;
(function(n) {
  n[n.OK = 0] = "OK", n[n.UNAVAILABLE = 1] = "UNAVAILABLE", n[n.ALREADY_CLAIMED = 2] = "ALREADY_CLAIMED";
})(cm || (cm = {}));
m.util.setEnumType(cm, "code.transaction.v2.AirdropResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "UNAVAILABLE" },
  { no: 2, name: "ALREADY_CLAIMED" }
]);
class Su extends I {
  constructor(t) {
    super(), this.request = { case: void 0 }, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Su().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Su().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Su().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Su, t, e);
  }
}
Su.runtime = m;
Su.typeName = "code.transaction.v2.SwapRequest";
Su.fields = m.util.newFieldList(() => [
  { no: 1, name: "initiate", kind: "message", T: yo, oneof: "request" },
  { no: 2, name: "submit_signature", kind: "message", T: wo, oneof: "request" }
]);
class yo extends I {
  constructor(t) {
    super(), this.limit = It.zero, this.waitForBlockchainStatus = !1, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new yo().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new yo().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new yo().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(yo, t, e);
  }
}
yo.runtime = m;
yo.typeName = "code.transaction.v2.SwapRequest.Initiate";
yo.fields = m.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: W },
  { no: 2, name: "swap_authority", kind: "message", T: W },
  { no: 3, name: "limit", kind: "scalar", T: 4 },
  { no: 4, name: "wait_for_blockchain_status", kind: "scalar", T: 8 },
  { no: 5, name: "signature", kind: "message", T: Tt }
]);
class wo extends I {
  constructor(t) {
    super(), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new wo().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new wo().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new wo().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(wo, t, e);
  }
}
wo.runtime = m;
wo.typeName = "code.transaction.v2.SwapRequest.SubmitSignature";
wo.fields = m.util.newFieldList(() => [
  { no: 1, name: "signature", kind: "message", T: Tt }
]);
class Iu extends I {
  constructor(t) {
    super(), this.response = { case: void 0 }, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Iu().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Iu().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Iu().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Iu, t, e);
  }
}
Iu.runtime = m;
Iu.typeName = "code.transaction.v2.SwapResponse";
Iu.fields = m.util.newFieldList(() => [
  { no: 1, name: "server_paramenters", kind: "message", T: To, oneof: "response" },
  { no: 2, name: "success", kind: "message", T: No, oneof: "response" },
  { no: 3, name: "error", kind: "message", T: Eo, oneof: "response" }
]);
class To extends I {
  constructor(t) {
    super(), this.computeUnitLimit = It.zero, this.computeUnitPrice = It.zero, this.swapIxnAccounts = [], this.swapIxnData = new Uint8Array(0), this.maxToSend = It.zero, this.minToReceive = It.zero, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new To().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new To().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new To().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(To, t, e);
  }
}
To.runtime = m;
To.typeName = "code.transaction.v2.SwapResponse.ServerParameters";
To.fields = m.util.newFieldList(() => [
  { no: 1, name: "payer", kind: "message", T: W },
  { no: 2, name: "recent_blockhash", kind: "message", T: $n },
  { no: 3, name: "compute_unit_limit", kind: "scalar", T: 4 },
  { no: 4, name: "compute_unit_price", kind: "scalar", T: 4 },
  { no: 5, name: "swap_program", kind: "message", T: W },
  { no: 6, name: "swap_ixn_accounts", kind: "message", T: uo, repeated: !0 },
  { no: 7, name: "swap_ixn_data", kind: "scalar", T: 12 },
  { no: 8, name: "max_to_send", kind: "scalar", T: 4 },
  { no: 9, name: "min_to_receive", kind: "scalar", T: 4 },
  { no: 10, name: "nonce", kind: "message", T: W }
]);
class No extends I {
  constructor(t) {
    super(), this.code = lm.SWAP_SUBMITTED, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new No().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new No().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new No().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(No, t, e);
  }
}
No.runtime = m;
No.typeName = "code.transaction.v2.SwapResponse.Success";
No.fields = m.util.newFieldList(() => [
  { no: 1, name: "code", kind: "enum", T: m.getEnumType(lm) }
]);
var lm;
(function(n) {
  n[n.SWAP_SUBMITTED = 0] = "SWAP_SUBMITTED", n[n.SWAP_FINALIZED = 1] = "SWAP_FINALIZED";
})(lm || (lm = {}));
m.util.setEnumType(lm, "code.transaction.v2.SwapResponse.Success.Code", [
  { no: 0, name: "SWAP_SUBMITTED" },
  { no: 1, name: "SWAP_FINALIZED" }
]);
class Eo extends I {
  constructor(t) {
    super(), this.code = fm.DENIED, this.errorDetails = [], m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Eo().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Eo().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Eo().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Eo, t, e);
  }
}
Eo.runtime = m;
Eo.typeName = "code.transaction.v2.SwapResponse.Error";
Eo.fields = m.util.newFieldList(() => [
  { no: 1, name: "code", kind: "enum", T: m.getEnumType(fm) },
  { no: 2, name: "error_details", kind: "message", T: Hn, repeated: !0 }
]);
var fm;
(function(n) {
  n[n.DENIED = 0] = "DENIED", n[n.SIGNATURE_ERROR = 2] = "SIGNATURE_ERROR", n[n.INVALID_SWAP_AMOUNT = 3] = "INVALID_SWAP_AMOUNT", n[n.SWAP_FAILED = 4] = "SWAP_FAILED";
})(fm || (fm = {}));
m.util.setEnumType(fm, "code.transaction.v2.SwapResponse.Error.Code", [
  { no: 0, name: "DENIED" },
  { no: 2, name: "SIGNATURE_ERROR" },
  { no: 3, name: "INVALID_SWAP_AMOUNT" },
  { no: 4, name: "SWAP_FAILED" }
]);
class on extends I {
  constructor(t) {
    super(), this.type = { case: void 0 }, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new on().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new on().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new on().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(on, t, e);
  }
}
on.runtime = m;
on.typeName = "code.transaction.v2.Metadata";
on.fields = m.util.newFieldList(() => [
  { no: 1, name: "open_accounts", kind: "message", T: bo, oneof: "type" },
  { no: 2, name: "send_private_payment", kind: "message", T: ko, oneof: "type" },
  { no: 3, name: "receive_payments_privately", kind: "message", T: So, oneof: "type" },
  { no: 4, name: "upgrade_privacy", kind: "message", T: Oo, oneof: "type" },
  { no: 5, name: "migrate_to_privacy_2022", kind: "message", T: vo, oneof: "type" },
  { no: 6, name: "send_public_payment", kind: "message", T: Bo, oneof: "type" },
  { no: 7, name: "receive_payments_publicly", kind: "message", T: Io, oneof: "type" },
  { no: 8, name: "establish_relationship", kind: "message", T: Jo, oneof: "type" }
]);
class bo extends I {
  constructor(t) {
    super(), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new bo().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new bo().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new bo().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(bo, t, e);
  }
}
bo.runtime = m;
bo.typeName = "code.transaction.v2.OpenAccountsMetadata";
bo.fields = m.util.newFieldList(() => []);
class ko extends I {
  constructor(t) {
    super(), this.isWithdrawal = !1, this.isRemoteSend = !1, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new ko().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new ko().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new ko().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(ko, t, e);
  }
}
ko.runtime = m;
ko.typeName = "code.transaction.v2.SendPrivatePaymentMetadata";
ko.fields = m.util.newFieldList(() => [
  { no: 1, name: "destination", kind: "message", T: W },
  { no: 2, name: "exchange_data", kind: "message", T: ue },
  { no: 3, name: "is_withdrawal", kind: "scalar", T: 8 },
  { no: 4, name: "is_remote_send", kind: "scalar", T: 8 }
]);
class Bo extends I {
  constructor(t) {
    super(), this.isWithdrawal = !1, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Bo().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Bo().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Bo().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Bo, t, e);
  }
}
Bo.runtime = m;
Bo.typeName = "code.transaction.v2.SendPublicPaymentMetadata";
Bo.fields = m.util.newFieldList(() => [
  { no: 4, name: "source", kind: "message", T: W },
  { no: 1, name: "destination", kind: "message", T: W },
  { no: 2, name: "exchange_data", kind: "message", T: ue },
  { no: 3, name: "is_withdrawal", kind: "scalar", T: 8 }
]);
class So extends I {
  constructor(t) {
    super(), this.quarks = It.zero, this.isDeposit = !1, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new So().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new So().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new So().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(So, t, e);
  }
}
So.runtime = m;
So.typeName = "code.transaction.v2.ReceivePaymentsPrivatelyMetadata";
So.fields = m.util.newFieldList(() => [
  { no: 1, name: "source", kind: "message", T: W },
  { no: 2, name: "quarks", kind: "scalar", T: 4 },
  { no: 3, name: "is_deposit", kind: "scalar", T: 8 }
]);
class Io extends I {
  constructor(t) {
    super(), this.quarks = It.zero, this.isRemoteSend = !1, this.isIssuerVoidingGiftCard = !1, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Io().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Io().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Io().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Io, t, e);
  }
}
Io.runtime = m;
Io.typeName = "code.transaction.v2.ReceivePaymentsPubliclyMetadata";
Io.fields = m.util.newFieldList(() => [
  { no: 1, name: "source", kind: "message", T: W },
  { no: 2, name: "quarks", kind: "scalar", T: 4 },
  { no: 3, name: "is_remote_send", kind: "scalar", T: 8 },
  { no: 4, name: "is_issuer_voiding_gift_card", kind: "scalar", T: 8 },
  { no: 5, name: "exchange_data", kind: "message", T: ue }
]);
class Oo extends I {
  constructor(t) {
    super(), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Oo().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Oo().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Oo().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Oo, t, e);
  }
}
Oo.runtime = m;
Oo.typeName = "code.transaction.v2.UpgradePrivacyMetadata";
Oo.fields = m.util.newFieldList(() => []);
class vo extends I {
  constructor(t) {
    super(), this.quarks = It.zero, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new vo().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new vo().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new vo().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(vo, t, e);
  }
}
vo.runtime = m;
vo.typeName = "code.transaction.v2.MigrateToPrivacy2022Metadata";
vo.fields = m.util.newFieldList(() => [
  { no: 1, name: "quarks", kind: "scalar", T: 4 }
]);
class Jo extends I {
  constructor(t) {
    super(), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Jo().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Jo().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Jo().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Jo, t, e);
  }
}
Jo.runtime = m;
Jo.typeName = "code.transaction.v2.EstablishRelationshipMetadata";
Jo.fields = m.util.newFieldList(() => [
  { no: 1, name: "relationship", kind: "message", T: _n }
]);
class xo extends I {
  constructor(t) {
    super(), this.id = 0, this.type = { case: void 0 }, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new xo().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new xo().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new xo().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(xo, t, e);
  }
}
xo.runtime = m;
xo.typeName = "code.transaction.v2.Action";
xo.fields = m.util.newFieldList(() => [
  { no: 1, name: "id", kind: "scalar", T: 13 },
  { no: 2, name: "open_account", kind: "message", T: Ao, oneof: "type" },
  { no: 3, name: "close_empty_account", kind: "message", T: Uo, oneof: "type" },
  { no: 4, name: "close_dormant_account", kind: "message", T: Lo, oneof: "type" },
  { no: 5, name: "no_privacy_transfer", kind: "message", T: Fo, oneof: "type" },
  { no: 6, name: "no_privacy_withdraw", kind: "message", T: qo, oneof: "type" },
  { no: 7, name: "temporary_privacy_transfer", kind: "message", T: Do, oneof: "type" },
  { no: 8, name: "temporary_privacy_exchange", kind: "message", T: Po, oneof: "type" },
  { no: 9, name: "permanent_privacy_upgrade", kind: "message", T: Co, oneof: "type" },
  { no: 10, name: "fee_payment", kind: "message", T: Ko, oneof: "type" }
]);
class Ao extends I {
  constructor(t) {
    super(), this.accountType = Ce.UNKNOWN, this.index = It.zero, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Ao().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Ao().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Ao().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Ao, t, e);
  }
}
Ao.runtime = m;
Ao.typeName = "code.transaction.v2.OpenAccountAction";
Ao.fields = m.util.newFieldList(() => [
  { no: 1, name: "account_type", kind: "enum", T: m.getEnumType(Ce) },
  { no: 2, name: "owner", kind: "message", T: W },
  { no: 3, name: "index", kind: "scalar", T: 4 },
  { no: 4, name: "authority", kind: "message", T: W },
  { no: 5, name: "token", kind: "message", T: W },
  { no: 6, name: "authority_signature", kind: "message", T: Tt }
]);
class Uo extends I {
  constructor(t) {
    super(), this.accountType = Ce.UNKNOWN, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Uo().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Uo().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Uo().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Uo, t, e);
  }
}
Uo.runtime = m;
Uo.typeName = "code.transaction.v2.CloseEmptyAccountAction";
Uo.fields = m.util.newFieldList(() => [
  { no: 1, name: "account_type", kind: "enum", T: m.getEnumType(Ce) },
  { no: 2, name: "authority", kind: "message", T: W },
  { no: 3, name: "token", kind: "message", T: W }
]);
class Lo extends I {
  constructor(t) {
    super(), this.accountType = Ce.UNKNOWN, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Lo().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Lo().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Lo().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Lo, t, e);
  }
}
Lo.runtime = m;
Lo.typeName = "code.transaction.v2.CloseDormantAccountAction";
Lo.fields = m.util.newFieldList(() => [
  { no: 1, name: "account_type", kind: "enum", T: m.getEnumType(Ce) },
  { no: 2, name: "authority", kind: "message", T: W },
  { no: 3, name: "token", kind: "message", T: W },
  { no: 4, name: "destination", kind: "message", T: W }
]);
class Fo extends I {
  constructor(t) {
    super(), this.amount = It.zero, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Fo().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Fo().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Fo().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Fo, t, e);
  }
}
Fo.runtime = m;
Fo.typeName = "code.transaction.v2.NoPrivacyTransferAction";
Fo.fields = m.util.newFieldList(() => [
  { no: 1, name: "authority", kind: "message", T: W },
  { no: 2, name: "source", kind: "message", T: W },
  { no: 3, name: "destination", kind: "message", T: W },
  { no: 4, name: "amount", kind: "scalar", T: 4 }
]);
class qo extends I {
  constructor(t) {
    super(), this.amount = It.zero, this.shouldClose = !1, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new qo().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new qo().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new qo().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(qo, t, e);
  }
}
qo.runtime = m;
qo.typeName = "code.transaction.v2.NoPrivacyWithdrawAction";
qo.fields = m.util.newFieldList(() => [
  { no: 1, name: "authority", kind: "message", T: W },
  { no: 2, name: "source", kind: "message", T: W },
  { no: 3, name: "destination", kind: "message", T: W },
  { no: 4, name: "amount", kind: "scalar", T: 4 },
  { no: 5, name: "should_close", kind: "scalar", T: 8 }
]);
class Do extends I {
  constructor(t) {
    super(), this.amount = It.zero, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Do().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Do().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Do().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Do, t, e);
  }
}
Do.runtime = m;
Do.typeName = "code.transaction.v2.TemporaryPrivacyTransferAction";
Do.fields = m.util.newFieldList(() => [
  { no: 1, name: "authority", kind: "message", T: W },
  { no: 2, name: "source", kind: "message", T: W },
  { no: 3, name: "destination", kind: "message", T: W },
  { no: 4, name: "amount", kind: "scalar", T: 4 }
]);
class Po extends I {
  constructor(t) {
    super(), this.amount = It.zero, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Po().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Po().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Po().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Po, t, e);
  }
}
Po.runtime = m;
Po.typeName = "code.transaction.v2.TemporaryPrivacyExchangeAction";
Po.fields = m.util.newFieldList(() => [
  { no: 1, name: "authority", kind: "message", T: W },
  { no: 2, name: "source", kind: "message", T: W },
  { no: 3, name: "destination", kind: "message", T: W },
  { no: 4, name: "amount", kind: "scalar", T: 4 }
]);
class Co extends I {
  constructor(t) {
    super(), this.actionId = 0, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Co().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Co().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Co().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Co, t, e);
  }
}
Co.runtime = m;
Co.typeName = "code.transaction.v2.PermanentPrivacyUpgradeAction";
Co.fields = m.util.newFieldList(() => [
  { no: 1, name: "action_id", kind: "scalar", T: 13 }
]);
class Ko extends I {
  constructor(t) {
    super(), this.amount = It.zero, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Ko().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Ko().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Ko().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Ko, t, e);
  }
}
Ko.runtime = m;
Ko.typeName = "code.transaction.v2.FeePaymentAction";
Ko.fields = m.util.newFieldList(() => [
  { no: 1, name: "authority", kind: "message", T: W },
  { no: 2, name: "source", kind: "message", T: W },
  { no: 3, name: "amount", kind: "scalar", T: 4 }
]);
class Ro extends I {
  constructor(t) {
    super(), this.actionId = 0, this.nonces = [], this.type = { case: void 0 }, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Ro().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Ro().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Ro().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Ro, t, e);
  }
}
Ro.runtime = m;
Ro.typeName = "code.transaction.v2.ServerParameter";
Ro.fields = m.util.newFieldList(() => [
  { no: 1, name: "action_id", kind: "scalar", T: 13 },
  { no: 2, name: "nonces", kind: "message", T: Mo, repeated: !0 },
  { no: 3, name: "open_account", kind: "message", T: $o, oneof: "type" },
  { no: 4, name: "close_empty_account", kind: "message", T: Vo, oneof: "type" },
  { no: 5, name: "close_dormant_account", kind: "message", T: _o, oneof: "type" },
  { no: 6, name: "no_privacy_transfer", kind: "message", T: Ho, oneof: "type" },
  { no: 7, name: "no_privacy_withdraw", kind: "message", T: zo, oneof: "type" },
  { no: 8, name: "temporary_privacy_transfer", kind: "message", T: jo, oneof: "type" },
  { no: 9, name: "temporary_privacy_exchange", kind: "message", T: Wo, oneof: "type" },
  { no: 10, name: "permanent_privacy_upgrade", kind: "message", T: Go, oneof: "type" },
  { no: 11, name: "fee_payment", kind: "message", T: Xo, oneof: "type" }
]);
class Mo extends I {
  constructor(t) {
    super(), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Mo().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Mo().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Mo().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Mo, t, e);
  }
}
Mo.runtime = m;
Mo.typeName = "code.transaction.v2.NoncedTransactionMetadata";
Mo.fields = m.util.newFieldList(() => [
  { no: 1, name: "nonce", kind: "message", T: W },
  { no: 2, name: "blockhash", kind: "message", T: $n }
]);
class $o extends I {
  constructor(t) {
    super(), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new $o().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new $o().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new $o().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals($o, t, e);
  }
}
$o.runtime = m;
$o.typeName = "code.transaction.v2.OpenAccountServerParameter";
$o.fields = m.util.newFieldList(() => []);
class Vo extends I {
  constructor(t) {
    super(), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Vo().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Vo().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Vo().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Vo, t, e);
  }
}
Vo.runtime = m;
Vo.typeName = "code.transaction.v2.CloseEmptyAccountServerParameter";
Vo.fields = m.util.newFieldList(() => []);
class _o extends I {
  constructor(t) {
    super(), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new _o().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new _o().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new _o().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(_o, t, e);
  }
}
_o.runtime = m;
_o.typeName = "code.transaction.v2.CloseDormantAccountServerParameter";
_o.fields = m.util.newFieldList(() => []);
class Ho extends I {
  constructor(t) {
    super(), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Ho().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Ho().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Ho().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Ho, t, e);
  }
}
Ho.runtime = m;
Ho.typeName = "code.transaction.v2.NoPrivacyTransferServerParameter";
Ho.fields = m.util.newFieldList(() => []);
class zo extends I {
  constructor(t) {
    super(), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new zo().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new zo().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new zo().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(zo, t, e);
  }
}
zo.runtime = m;
zo.typeName = "code.transaction.v2.NoPrivacyWithdrawServerParameter";
zo.fields = m.util.newFieldList(() => []);
class jo extends I {
  constructor(t) {
    super(), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new jo().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new jo().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new jo().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(jo, t, e);
  }
}
jo.runtime = m;
jo.typeName = "code.transaction.v2.TemporaryPrivacyTransferServerParameter";
jo.fields = m.util.newFieldList(() => [
  { no: 1, name: "treasury", kind: "message", T: W },
  { no: 2, name: "recent_root", kind: "message", T: Ka }
]);
class Wo extends I {
  constructor(t) {
    super(), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Wo().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Wo().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Wo().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Wo, t, e);
  }
}
Wo.runtime = m;
Wo.typeName = "code.transaction.v2.TemporaryPrivacyExchangeServerParameter";
Wo.fields = m.util.newFieldList(() => [
  { no: 1, name: "treasury", kind: "message", T: W },
  { no: 2, name: "recent_root", kind: "message", T: Ka }
]);
class Go extends I {
  constructor(t) {
    super(), this.newCommitmentAmount = It.zero, this.merkleProof = [], m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Go().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Go().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Go().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Go, t, e);
  }
}
Go.runtime = m;
Go.typeName = "code.transaction.v2.PermanentPrivacyUpgradeServerParameter";
Go.fields = m.util.newFieldList(() => [
  { no: 1, name: "new_commitment", kind: "message", T: W },
  { no: 2, name: "new_commitment_transcript", kind: "message", T: Ka },
  { no: 3, name: "new_commitment_destination", kind: "message", T: W },
  { no: 4, name: "new_commitment_amount", kind: "scalar", T: 4 },
  { no: 5, name: "merkle_root", kind: "message", T: Ka },
  { no: 6, name: "merkle_proof", kind: "message", T: Ka, repeated: !0 }
]);
class Xo extends I {
  constructor(t) {
    super(), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Xo().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Xo().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Xo().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Xo, t, e);
  }
}
Xo.runtime = m;
Xo.typeName = "code.transaction.v2.FeePaymentServerParameter";
Xo.fields = m.util.newFieldList(() => [
  { no: 1, name: "destination", kind: "message", T: W }
]);
class Hn extends I {
  constructor(t) {
    super(), this.type = { case: void 0 }, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Hn().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Hn().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Hn().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Hn, t, e);
  }
}
Hn.runtime = m;
Hn.typeName = "code.transaction.v2.ErrorDetails";
Hn.fields = m.util.newFieldList(() => [
  { no: 1, name: "reason_string", kind: "message", T: Yo, oneof: "type" },
  { no: 2, name: "invalid_signature", kind: "message", T: Zo, oneof: "type" }
]);
class Yo extends I {
  constructor(t) {
    super(), this.reason = "", m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Yo().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Yo().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Yo().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Yo, t, e);
  }
}
Yo.runtime = m;
Yo.typeName = "code.transaction.v2.ReasonStringErrorDetails";
Yo.fields = m.util.newFieldList(() => [
  { no: 1, name: "reason", kind: "scalar", T: 9 }
]);
class Zo extends I {
  constructor(t) {
    super(), this.actionId = 0, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Zo().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Zo().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Zo().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Zo, t, e);
  }
}
Zo.runtime = m;
Zo.typeName = "code.transaction.v2.InvalidSignatureErrorDetails";
Zo.fields = m.util.newFieldList(() => [
  { no: 1, name: "action_id", kind: "scalar", T: 13 },
  { no: 2, name: "expected_transaction", kind: "message", T: Mn },
  { no: 3, name: "provided_signature", kind: "message", T: Tt }
]);
class Qo extends I {
  constructor(t) {
    super(), this.actions = [], m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Qo().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Qo().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Qo().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Qo, t, e);
  }
}
Qo.runtime = m;
Qo.typeName = "code.transaction.v2.UpgradeableIntent";
Qo.fields = m.util.newFieldList(() => [
  { no: 1, name: "id", kind: "message", T: ie },
  { no: 2, name: "actions", kind: "message", T: ta, repeated: !0 }
]);
class ta extends I {
  constructor(t) {
    super(), this.actionId = 0, this.sourceAccountType = Ce.UNKNOWN, this.sourceDerivationIndex = It.zero, this.originalAmount = It.zero, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new ta().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new ta().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new ta().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(ta, t, e);
  }
}
ta.runtime = m;
ta.typeName = "code.transaction.v2.UpgradeableIntent.UpgradeablePrivateAction";
ta.fields = m.util.newFieldList(() => [
  { no: 1, name: "transaction_blob", kind: "message", T: Mn },
  { no: 2, name: "client_signature", kind: "message", T: Tt },
  { no: 3, name: "action_id", kind: "scalar", T: 13 },
  { no: 4, name: "source_account_type", kind: "enum", T: m.getEnumType(Ce) },
  { no: 5, name: "source_derivation_index", kind: "scalar", T: 4 },
  { no: 6, name: "original_destination", kind: "message", T: W },
  { no: 7, name: "original_amount", kind: "scalar", T: 4 },
  { no: 8, name: "treasury", kind: "message", T: W },
  { no: 9, name: "recent_root", kind: "message", T: Ka }
]);
class ea extends I {
  constructor(t) {
    super(), this.paymentType = mm.UNKNOWN, this.isWithdraw = !1, this.isDeposit = !1, this.isRemoteSend = !1, this.isReturned = !1, this.isAirdrop = !1, this.airdropType = lr.UNKNOWN, this.isMicroPayment = !1, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new ea().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new ea().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new ea().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(ea, t, e);
  }
}
ea.runtime = m;
ea.typeName = "code.transaction.v2.PaymentHistoryItem";
ea.fields = m.util.newFieldList(() => [
  { no: 1, name: "cursor", kind: "message", T: sd },
  { no: 2, name: "exchange_data", kind: "message", T: ue },
  { no: 3, name: "payment_type", kind: "enum", T: m.getEnumType(mm) },
  { no: 4, name: "is_withdraw", kind: "scalar", T: 8 },
  { no: 5, name: "is_deposit", kind: "scalar", T: 8 },
  { no: 6, name: "timestamp", kind: "message", T: Xt },
  { no: 7, name: "is_remote_send", kind: "scalar", T: 8 },
  { no: 8, name: "is_returned", kind: "scalar", T: 8 },
  { no: 9, name: "is_airdrop", kind: "scalar", T: 8 },
  { no: 10, name: "airdrop_type", kind: "enum", T: m.getEnumType(lr) },
  { no: 11, name: "is_micro_payment", kind: "scalar", T: 8 },
  { no: 12, name: "intent_id", kind: "message", T: ie }
]);
var mm;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.SEND = 1] = "SEND", n[n.RECEIVE = 2] = "RECEIVE";
})(mm || (mm = {}));
m.util.setEnumType(mm, "code.transaction.v2.PaymentHistoryItem.PaymentType", [
  { no: 0, name: "UNKNOWN" },
  { no: 1, name: "SEND" },
  { no: 2, name: "RECEIVE" }
]);
class ue extends I {
  constructor(t) {
    super(), this.currency = "", this.exchangeRate = 0, this.nativeAmount = 0, this.quarks = It.zero, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new ue().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new ue().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new ue().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(ue, t, e);
  }
}
ue.runtime = m;
ue.typeName = "code.transaction.v2.ExchangeData";
ue.fields = m.util.newFieldList(() => [
  { no: 1, name: "currency", kind: "scalar", T: 9 },
  { no: 2, name: "exchange_rate", kind: "scalar", T: 1 },
  { no: 3, name: "native_amount", kind: "scalar", T: 1 },
  { no: 4, name: "quarks", kind: "scalar", T: 4 }
]);
class an extends I {
  constructor(t) {
    super(), this.currency = "", this.nativeAmount = 0, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new an().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new an().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new an().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(an, t, e);
  }
}
an.runtime = m;
an.typeName = "code.transaction.v2.ExchangeDataWithoutRate";
an.fields = m.util.newFieldList(() => [
  { no: 1, name: "currency", kind: "scalar", T: 9 },
  { no: 2, name: "native_amount", kind: "scalar", T: 1 }
]);
class na extends I {
  constructor(t) {
    super(), this.nextTransaction = 0, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new na().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new na().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new na().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(na, t, e);
  }
}
na.runtime = m;
na.typeName = "code.transaction.v2.RemainingSendLimit";
na.fields = m.util.newFieldList(() => [
  { no: 1, name: "next_transaction", kind: "scalar", T: 2 }
]);
class ra extends I {
  constructor(t) {
    super(), this.maxQuarks = It.zero, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new ra().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new ra().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new ra().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(ra, t, e);
  }
}
ra.runtime = m;
ra.typeName = "code.transaction.v2.DepositLimit";
ra.fields = m.util.newFieldList(() => [
  { no: 1, name: "max_quarks", kind: "scalar", T: 4 }
]);
class ia extends I {
  constructor(t) {
    super(), this.maxPerTransaction = 0, this.minPerTransaction = 0, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new ia().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new ia().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new ia().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(ia, t, e);
  }
}
ia.runtime = m;
ia.typeName = "code.transaction.v2.MicroPaymentLimit";
ia.fields = m.util.newFieldList(() => [
  { no: 1, name: "max_per_transaction", kind: "scalar", T: 2 },
  { no: 2, name: "min_per_transaction", kind: "scalar", T: 2 }
]);
let sd = class ql extends I {
  constructor(t) {
    super(), this.value = new Uint8Array(0), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new ql().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new ql().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new ql().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(ql, t, e);
  }
};
sd.runtime = m;
sd.typeName = "code.transaction.v2.Cursor";
sd.fields = m.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class Ou extends I {
  constructor(t) {
    super(), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Ou().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Ou().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Ou().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Ou, t, e);
  }
}
Ou.runtime = m;
Ou.typeName = "code.account.v1.IsCodeAccountRequest";
Ou.fields = m.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: W },
  { no: 2, name: "signature", kind: "message", T: Tt }
]);
class vu extends I {
  constructor(t) {
    super(), this.result = dm.OK, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new vu().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new vu().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new vu().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(vu, t, e);
  }
}
vu.runtime = m;
vu.typeName = "code.account.v1.IsCodeAccountResponse";
vu.fields = m.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: m.getEnumType(dm) }
]);
var dm;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND", n[n.UNLOCKED_TIMELOCK_ACCOUNT = 2] = "UNLOCKED_TIMELOCK_ACCOUNT";
})(dm || (dm = {}));
m.util.setEnumType(dm, "code.account.v1.IsCodeAccountResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" },
  { no: 2, name: "UNLOCKED_TIMELOCK_ACCOUNT" }
]);
class Ju extends I {
  constructor(t) {
    super(), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Ju().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Ju().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Ju().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Ju, t, e);
  }
}
Ju.runtime = m;
Ju.typeName = "code.account.v1.GetTokenAccountInfosRequest";
Ju.fields = m.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: W },
  { no: 2, name: "signature", kind: "message", T: Tt }
]);
class xu extends I {
  constructor(t) {
    super(), this.result = hm.OK, this.tokenAccountInfos = {}, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new xu().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new xu().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new xu().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(xu, t, e);
  }
}
xu.runtime = m;
xu.typeName = "code.account.v1.GetTokenAccountInfosResponse";
xu.fields = m.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: m.getEnumType(hm) },
  { no: 2, name: "token_account_infos", kind: "map", K: 9, V: { kind: "message", T: sa } }
]);
var hm;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND";
})(hm || (hm = {}));
m.util.setEnumType(hm, "code.account.v1.GetTokenAccountInfosResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" }
]);
class sa extends I {
  constructor(t) {
    super(), this.accountType = Ce.UNKNOWN, this.index = It.zero, this.balanceSource = pm.UNKNOWN, this.balance = It.zero, this.managementState = gm.UNKNOWN, this.blockchainState = ym.UNKNOWN, this.mustRotate = !1, this.claimState = wm.UNKNOWN, this.mintDecimals = 0, this.mintDisplayName = "", m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new sa().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new sa().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new sa().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(sa, t, e);
  }
}
sa.runtime = m;
sa.typeName = "code.account.v1.TokenAccountInfo";
sa.fields = m.util.newFieldList(() => [
  { no: 1, name: "address", kind: "message", T: W },
  { no: 2, name: "owner", kind: "message", T: W },
  { no: 3, name: "authority", kind: "message", T: W },
  { no: 4, name: "account_type", kind: "enum", T: m.getEnumType(Ce) },
  { no: 5, name: "index", kind: "scalar", T: 4 },
  { no: 6, name: "balance_source", kind: "enum", T: m.getEnumType(pm) },
  { no: 7, name: "balance", kind: "scalar", T: 4 },
  { no: 8, name: "management_state", kind: "enum", T: m.getEnumType(gm) },
  { no: 9, name: "blockchain_state", kind: "enum", T: m.getEnumType(ym) },
  { no: 10, name: "must_rotate", kind: "scalar", T: 8 },
  { no: 11, name: "claim_state", kind: "enum", T: m.getEnumType(wm) },
  { no: 12, name: "original_exchange_data", kind: "message", T: ue },
  { no: 13, name: "mint", kind: "message", T: W },
  { no: 14, name: "mint_decimals", kind: "scalar", T: 13 },
  { no: 15, name: "mint_display_name", kind: "scalar", T: 9 },
  { no: 16, name: "relationship", kind: "message", T: _n }
]);
var pm;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.BLOCKCHAIN = 1] = "BLOCKCHAIN", n[n.CACHE = 2] = "CACHE";
})(pm || (pm = {}));
m.util.setEnumType(pm, "code.account.v1.TokenAccountInfo.BalanceSource", [
  { no: 0, name: "BALANCE_SOURCE_UNKNOWN" },
  { no: 1, name: "BALANCE_SOURCE_BLOCKCHAIN" },
  { no: 2, name: "BALANCE_SOURCE_CACHE" }
]);
var gm;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.NONE = 1] = "NONE", n[n.LOCKING = 2] = "LOCKING", n[n.LOCKED = 3] = "LOCKED", n[n.UNLOCKING = 4] = "UNLOCKING", n[n.UNLOCKED = 5] = "UNLOCKED", n[n.CLOSING = 6] = "CLOSING", n[n.CLOSED = 7] = "CLOSED";
})(gm || (gm = {}));
m.util.setEnumType(gm, "code.account.v1.TokenAccountInfo.ManagementState", [
  { no: 0, name: "MANAGEMENT_STATE_UNKNOWN" },
  { no: 1, name: "MANAGEMENT_STATE_NONE" },
  { no: 2, name: "MANAGEMENT_STATE_LOCKING" },
  { no: 3, name: "MANAGEMENT_STATE_LOCKED" },
  { no: 4, name: "MANAGEMENT_STATE_UNLOCKING" },
  { no: 5, name: "MANAGEMENT_STATE_UNLOCKED" },
  { no: 6, name: "MANAGEMENT_STATE_CLOSING" },
  { no: 7, name: "MANAGEMENT_STATE_CLOSED" }
]);
var ym;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.DOES_NOT_EXIST = 1] = "DOES_NOT_EXIST", n[n.EXISTS = 2] = "EXISTS";
})(ym || (ym = {}));
m.util.setEnumType(ym, "code.account.v1.TokenAccountInfo.BlockchainState", [
  { no: 0, name: "BLOCKCHAIN_STATE_UNKNOWN" },
  { no: 1, name: "BLOCKCHAIN_STATE_DOES_NOT_EXIST" },
  { no: 2, name: "BLOCKCHAIN_STATE_EXISTS" }
]);
var wm;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.NOT_CLAIMED = 1] = "NOT_CLAIMED", n[n.CLAIMED = 2] = "CLAIMED", n[n.EXPIRED = 3] = "EXPIRED";
})(wm || (wm = {}));
m.util.setEnumType(wm, "code.account.v1.TokenAccountInfo.ClaimState", [
  { no: 0, name: "CLAIM_STATE_UNKNOWN" },
  { no: 1, name: "CLAIM_STATE_NOT_CLAIMED" },
  { no: 2, name: "CLAIM_STATE_CLAIMED" },
  { no: 3, name: "CLAIM_STATE_EXPIRED" }
]);
bt.Unary, bt.Unary;
class Au extends I {
  constructor(t) {
    super(), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Au().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Au().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Au().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Au, t, e);
  }
}
Au.runtime = m;
Au.typeName = "code.badge.v1.ResetBadgeCountRequest";
Au.fields = m.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: W },
  { no: 2, name: "signature", kind: "message", T: Tt }
]);
class Uu extends I {
  constructor(t) {
    super(), this.result = Tm.OK, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Uu().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Uu().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Uu().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Uu, t, e);
  }
}
Uu.runtime = m;
Uu.typeName = "code.badge.v1.ResetBadgeCountResponse";
Uu.fields = m.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: m.getEnumType(Tm) }
]);
var Tm;
(function(n) {
  n[n.OK = 0] = "OK";
})(Tm || (Tm = {}));
m.util.setEnumType(Tm, "code.badge.v1.ResetBadgeCountResponse.Result", [
  { no: 0, name: "OK" }
]);
bt.Unary;
class Lu extends I {
  constructor(t) {
    super(), this.pageSize = 0, this.direction = Nm.ASC, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Lu().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Lu().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Lu().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Lu, t, e);
  }
}
Lu.runtime = m;
Lu.typeName = "code.chat.v1.GetChatsRequest";
Lu.fields = m.util.newFieldList(() => [
  { no: 1, name: "owner", kind: "message", T: W },
  { no: 2, name: "signature", kind: "message", T: Tt },
  { no: 3, name: "page_size", kind: "scalar", T: 13 },
  { no: 4, name: "cursor", kind: "message", T: ze },
  { no: 5, name: "direction", kind: "enum", T: m.getEnumType(Nm) }
]);
var Nm;
(function(n) {
  n[n.ASC = 0] = "ASC", n[n.DESC = 1] = "DESC";
})(Nm || (Nm = {}));
m.util.setEnumType(Nm, "code.chat.v1.GetChatsRequest.Direction", [
  { no: 0, name: "ASC" },
  { no: 1, name: "DESC" }
]);
class Fu extends I {
  constructor(t) {
    super(), this.result = Em.OK, this.chats = [], m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Fu().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Fu().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Fu().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Fu, t, e);
  }
}
Fu.runtime = m;
Fu.typeName = "code.chat.v1.GetChatsResponse";
Fu.fields = m.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: m.getEnumType(Em) },
  { no: 2, name: "chats", kind: "message", T: oa, repeated: !0 }
]);
var Em;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND";
})(Em || (Em = {}));
m.util.setEnumType(Em, "code.chat.v1.GetChatsResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" }
]);
class qu extends I {
  constructor(t) {
    super(), this.pageSize = 0, this.direction = bm.ASC, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new qu().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new qu().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new qu().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(qu, t, e);
  }
}
qu.runtime = m;
qu.typeName = "code.chat.v1.GetMessagesRequest";
qu.fields = m.util.newFieldList(() => [
  { no: 1, name: "chat_id", kind: "message", T: qe },
  { no: 2, name: "owner", kind: "message", T: W },
  { no: 3, name: "signature", kind: "message", T: Tt },
  { no: 4, name: "page_size", kind: "scalar", T: 13 },
  { no: 5, name: "cursor", kind: "message", T: ze },
  { no: 6, name: "direction", kind: "enum", T: m.getEnumType(bm) }
]);
var bm;
(function(n) {
  n[n.ASC = 0] = "ASC", n[n.DESC = 1] = "DESC";
})(bm || (bm = {}));
m.util.setEnumType(bm, "code.chat.v1.GetMessagesRequest.Direction", [
  { no: 0, name: "ASC" },
  { no: 1, name: "DESC" }
]);
class Du extends I {
  constructor(t) {
    super(), this.result = km.OK, this.messages = [], m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Du().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Du().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Du().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Du, t, e);
  }
}
Du.runtime = m;
Du.typeName = "code.chat.v1.GetMessagesResponse";
Du.fields = m.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: m.getEnumType(km) },
  { no: 2, name: "messages", kind: "message", T: aa, repeated: !0 }
]);
var km;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND";
})(km || (km = {}));
m.util.setEnumType(km, "code.chat.v1.GetMessagesResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" }
]);
class Pu extends I {
  constructor(t) {
    super(), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Pu().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Pu().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Pu().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Pu, t, e);
  }
}
Pu.runtime = m;
Pu.typeName = "code.chat.v1.AdvancePointerRequest";
Pu.fields = m.util.newFieldList(() => [
  { no: 1, name: "chat_id", kind: "message", T: qe },
  { no: 2, name: "pointer", kind: "message", T: jn },
  { no: 3, name: "owner", kind: "message", T: W },
  { no: 4, name: "signature", kind: "message", T: Tt }
]);
class Cu extends I {
  constructor(t) {
    super(), this.result = Bm.OK, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Cu().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Cu().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Cu().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Cu, t, e);
  }
}
Cu.runtime = m;
Cu.typeName = "code.chat.v1.AdvancePointerResponse";
Cu.fields = m.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: m.getEnumType(Bm) }
]);
var Bm;
(function(n) {
  n[n.OK = 0] = "OK", n[n.CHAT_NOT_FOUND = 1] = "CHAT_NOT_FOUND", n[n.MESSAGE_NOT_FOUND = 2] = "MESSAGE_NOT_FOUND";
})(Bm || (Bm = {}));
m.util.setEnumType(Bm, "code.chat.v1.AdvancePointerResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "CHAT_NOT_FOUND" },
  { no: 2, name: "MESSAGE_NOT_FOUND" }
]);
class Ku extends I {
  constructor(t) {
    super(), this.isMuted = !1, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Ku().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Ku().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Ku().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Ku, t, e);
  }
}
Ku.runtime = m;
Ku.typeName = "code.chat.v1.SetMuteStateRequest";
Ku.fields = m.util.newFieldList(() => [
  { no: 1, name: "chat_id", kind: "message", T: qe },
  { no: 2, name: "is_muted", kind: "scalar", T: 8 },
  { no: 3, name: "owner", kind: "message", T: W },
  { no: 4, name: "signature", kind: "message", T: Tt }
]);
class Ru extends I {
  constructor(t) {
    super(), this.result = Sm.OK, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Ru().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Ru().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Ru().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Ru, t, e);
  }
}
Ru.runtime = m;
Ru.typeName = "code.chat.v1.SetMuteStateResponse";
Ru.fields = m.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: m.getEnumType(Sm) }
]);
var Sm;
(function(n) {
  n[n.OK = 0] = "OK", n[n.CHAT_NOT_FOUND = 1] = "CHAT_NOT_FOUND", n[n.CANT_MUTE = 2] = "CANT_MUTE";
})(Sm || (Sm = {}));
m.util.setEnumType(Sm, "code.chat.v1.SetMuteStateResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "CHAT_NOT_FOUND" },
  { no: 2, name: "CANT_MUTE" }
]);
class Mu extends I {
  constructor(t) {
    super(), this.isSubscribed = !1, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Mu().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Mu().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Mu().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Mu, t, e);
  }
}
Mu.runtime = m;
Mu.typeName = "code.chat.v1.SetSubscriptionStateRequest";
Mu.fields = m.util.newFieldList(() => [
  { no: 1, name: "chat_id", kind: "message", T: qe },
  { no: 2, name: "is_subscribed", kind: "scalar", T: 8 },
  { no: 3, name: "owner", kind: "message", T: W },
  { no: 4, name: "signature", kind: "message", T: Tt }
]);
class $u extends I {
  constructor(t) {
    super(), this.result = Im.OK, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new $u().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new $u().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new $u().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals($u, t, e);
  }
}
$u.runtime = m;
$u.typeName = "code.chat.v1.SetSubscriptionStateResponse";
$u.fields = m.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: m.getEnumType(Im) }
]);
var Im;
(function(n) {
  n[n.OK = 0] = "OK", n[n.CHAT_NOT_FOUND = 1] = "CHAT_NOT_FOUND", n[n.CANT_UNSUBSCRIBE = 2] = "CANT_UNSUBSCRIBE";
})(Im || (Im = {}));
m.util.setEnumType(Im, "code.chat.v1.SetSubscriptionStateResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "CHAT_NOT_FOUND" },
  { no: 2, name: "CANT_UNSUBSCRIBE" }
]);
class qe extends I {
  constructor(t) {
    super(), this.value = new Uint8Array(0), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new qe().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new qe().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new qe().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(qe, t, e);
  }
}
qe.runtime = m;
qe.typeName = "code.chat.v1.ChatId";
qe.fields = m.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class zn extends I {
  constructor(t) {
    super(), this.value = new Uint8Array(0), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new zn().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new zn().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new zn().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(zn, t, e);
  }
}
zn.runtime = m;
zn.typeName = "code.chat.v1.ChatMessageId";
zn.fields = m.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class jn extends I {
  constructor(t) {
    super(), this.kind = Om.UNKNOWN, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new jn().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new jn().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new jn().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(jn, t, e);
  }
}
jn.runtime = m;
jn.typeName = "code.chat.v1.Pointer";
jn.fields = m.util.newFieldList(() => [
  { no: 1, name: "kind", kind: "enum", T: m.getEnumType(Om) },
  { no: 2, name: "value", kind: "message", T: zn }
]);
var Om;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.READ = 1] = "READ";
})(Om || (Om = {}));
m.util.setEnumType(Om, "code.chat.v1.Pointer.Kind", [
  { no: 0, name: "UNKNOWN" },
  { no: 1, name: "READ" }
]);
class oa extends I {
  constructor(t) {
    super(), this.title = { case: void 0 }, this.numUnread = 0, this.isMuted = !1, this.isSubscribed = !1, this.canMute = !1, this.canUnsubscribe = !1, this.isVerified = !1, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new oa().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new oa().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new oa().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(oa, t, e);
  }
}
oa.runtime = m;
oa.typeName = "code.chat.v1.ChatMetadata";
oa.fields = m.util.newFieldList(() => [
  { no: 1, name: "chat_id", kind: "message", T: qe },
  { no: 2, name: "localized", kind: "message", T: Wn, oneof: "title" },
  { no: 3, name: "domain", kind: "message", T: Fe, oneof: "title" },
  { no: 4, name: "read_pointer", kind: "message", T: jn },
  { no: 5, name: "num_unread", kind: "scalar", T: 13 },
  { no: 6, name: "is_muted", kind: "scalar", T: 8 },
  { no: 7, name: "is_subscribed", kind: "scalar", T: 8 },
  { no: 8, name: "can_mute", kind: "scalar", T: 8 },
  { no: 9, name: "can_unsubscribe", kind: "scalar", T: 8 },
  { no: 10, name: "cursor", kind: "message", T: ze },
  { no: 11, name: "is_verified", kind: "scalar", T: 8 }
]);
class aa extends I {
  constructor(t) {
    super(), this.content = [], m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new aa().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new aa().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new aa().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(aa, t, e);
  }
}
aa.runtime = m;
aa.typeName = "code.chat.v1.ChatMessage";
aa.fields = m.util.newFieldList(() => [
  { no: 1, name: "message_id", kind: "message", T: zn },
  { no: 2, name: "ts", kind: "message", T: Xt },
  { no: 3, name: "content", kind: "message", T: ua, repeated: !0 },
  { no: 4, name: "cursor", kind: "message", T: ze }
]);
class ua extends I {
  constructor(t) {
    super(), this.type = { case: void 0 }, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new ua().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new ua().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new ua().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(ua, t, e);
  }
}
ua.runtime = m;
ua.typeName = "code.chat.v1.Content";
ua.fields = m.util.newFieldList(() => [
  { no: 1, name: "localized", kind: "message", T: Wn, oneof: "type" },
  { no: 2, name: "exchange_data", kind: "message", T: ca, oneof: "type" },
  { no: 3, name: "nacl_box", kind: "message", T: la, oneof: "type" }
]);
class Wn extends I {
  constructor(t) {
    super(), this.key = "", m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Wn().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Wn().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Wn().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Wn, t, e);
  }
}
Wn.runtime = m;
Wn.typeName = "code.chat.v1.LocalizedContent";
Wn.fields = m.util.newFieldList(() => [
  { no: 1, name: "key", kind: "scalar", T: 9 }
]);
class ca extends I {
  constructor(t) {
    super(), this.verb = vm.UNKNOWN, this.exchangeData = { case: void 0 }, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new ca().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new ca().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new ca().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(ca, t, e);
  }
}
ca.runtime = m;
ca.typeName = "code.chat.v1.ExchangeDataContent";
ca.fields = m.util.newFieldList(() => [
  { no: 1, name: "verb", kind: "enum", T: m.getEnumType(vm) },
  { no: 2, name: "exact", kind: "message", T: ue, oneof: "exchange_data" },
  { no: 3, name: "partial", kind: "message", T: an, oneof: "exchange_data" }
]);
var vm;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.GAVE = 1] = "GAVE", n[n.RECEIVED = 2] = "RECEIVED", n[n.WITHDREW = 3] = "WITHDREW", n[n.DEPOSITED = 4] = "DEPOSITED", n[n.SENT = 5] = "SENT", n[n.RETURNED = 6] = "RETURNED", n[n.SPENT = 7] = "SPENT", n[n.PAID = 8] = "PAID", n[n.PURCHASED = 9] = "PURCHASED";
})(vm || (vm = {}));
m.util.setEnumType(vm, "code.chat.v1.ExchangeDataContent.Verb", [
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
class la extends I {
  constructor(t) {
    super(), this.nonce = new Uint8Array(0), this.encryptedPayload = new Uint8Array(0), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new la().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new la().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new la().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(la, t, e);
  }
}
la.runtime = m;
la.typeName = "code.chat.v1.NaclBoxEncryptedContent";
la.fields = m.util.newFieldList(() => [
  { no: 1, name: "peer_public_key", kind: "message", T: W },
  { no: 2, name: "nonce", kind: "scalar", T: 12 },
  { no: 3, name: "encrypted_payload", kind: "scalar", T: 12 }
]);
class ze extends I {
  constructor(t) {
    super(), this.value = new Uint8Array(0), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new ze().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new ze().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new ze().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(ze, t, e);
  }
}
ze.runtime = m;
ze.typeName = "code.chat.v1.Cursor";
ze.fields = m.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
bt.Unary, bt.Unary, bt.Unary, bt.Unary, bt.Unary;
class Vu extends I {
  constructor(t) {
    super(), this.contacts = [], m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Vu().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Vu().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Vu().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Vu, t, e);
  }
}
Vu.runtime = m;
Vu.typeName = "code.contact.v1.AddContactsRequest";
Vu.fields = m.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: W },
  { no: 2, name: "signature", kind: "message", T: Tt },
  { no: 3, name: "container_id", kind: "message", T: Ie },
  { no: 4, name: "contacts", kind: "message", T: se, repeated: !0 }
]);
class _u extends I {
  constructor(t) {
    super(), this.result = Jm.OK, this.contactStatus = {}, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new _u().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new _u().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new _u().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(_u, t, e);
  }
}
_u.runtime = m;
_u.typeName = "code.contact.v1.AddContactsResponse";
_u.fields = m.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: m.getEnumType(Jm) },
  { no: 2, name: "contact_status", kind: "map", K: 9, V: { kind: "message", T: Gn } }
]);
var Jm;
(function(n) {
  n[n.OK = 0] = "OK";
})(Jm || (Jm = {}));
m.util.setEnumType(Jm, "code.contact.v1.AddContactsResponse.Result", [
  { no: 0, name: "OK" }
]);
class Hu extends I {
  constructor(t) {
    super(), this.contacts = [], m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Hu().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Hu().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Hu().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Hu, t, e);
  }
}
Hu.runtime = m;
Hu.typeName = "code.contact.v1.RemoveContactsRequest";
Hu.fields = m.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: W },
  { no: 2, name: "signature", kind: "message", T: Tt },
  { no: 3, name: "container_id", kind: "message", T: Ie },
  { no: 4, name: "contacts", kind: "message", T: se, repeated: !0 }
]);
class zu extends I {
  constructor(t) {
    super(), this.result = xm.OK, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new zu().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new zu().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new zu().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(zu, t, e);
  }
}
zu.runtime = m;
zu.typeName = "code.contact.v1.RemoveContactsResponse";
zu.fields = m.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: m.getEnumType(xm) }
]);
var xm;
(function(n) {
  n[n.OK = 0] = "OK";
})(xm || (xm = {}));
m.util.setEnumType(xm, "code.contact.v1.RemoveContactsResponse.Result", [
  { no: 0, name: "OK" }
]);
class ju extends I {
  constructor(t) {
    super(), this.includeOnlyInAppContacts = !1, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new ju().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new ju().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new ju().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(ju, t, e);
  }
}
ju.runtime = m;
ju.typeName = "code.contact.v1.GetContactsRequest";
ju.fields = m.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: W },
  { no: 2, name: "signature", kind: "message", T: Tt },
  { no: 3, name: "container_id", kind: "message", T: Ie },
  { no: 4, name: "page_token", kind: "message", T: od },
  { no: 5, name: "include_only_in_app_contacts", kind: "scalar", T: 8 }
]);
class Wu extends I {
  constructor(t) {
    super(), this.result = Am.OK, this.contacts = [], m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Wu().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Wu().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Wu().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Wu, t, e);
  }
}
Wu.runtime = m;
Wu.typeName = "code.contact.v1.GetContactsResponse";
Wu.fields = m.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: m.getEnumType(Am) },
  { no: 2, name: "contacts", kind: "message", T: fa, repeated: !0 },
  { no: 3, name: "next_page_token", kind: "message", T: od }
]);
var Am;
(function(n) {
  n[n.OK = 0] = "OK";
})(Am || (Am = {}));
m.util.setEnumType(Am, "code.contact.v1.GetContactsResponse.Result", [
  { no: 0, name: "OK" }
]);
class fa extends I {
  constructor(t) {
    super(), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new fa().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new fa().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new fa().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(fa, t, e);
  }
}
fa.runtime = m;
fa.typeName = "code.contact.v1.Contact";
fa.fields = m.util.newFieldList(() => [
  { no: 1, name: "phone_number", kind: "message", T: se },
  { no: 2, name: "status", kind: "message", T: Gn }
]);
class Gn extends I {
  constructor(t) {
    super(), this.isRegistered = !1, this.isInvited = !1, this.isInviteRevoked = !1, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Gn().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Gn().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Gn().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Gn, t, e);
  }
}
Gn.runtime = m;
Gn.typeName = "code.contact.v1.ContactStatus";
Gn.fields = m.util.newFieldList(() => [
  { no: 1, name: "is_registered", kind: "scalar", T: 8 },
  { no: 2, name: "is_invited", kind: "scalar", T: 8 },
  { no: 3, name: "is_invite_revoked", kind: "scalar", T: 8 }
]);
let od = class Dl extends I {
  constructor(t) {
    super(), this.value = new Uint8Array(0), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Dl().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Dl().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Dl().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Dl, t, e);
  }
};
od.runtime = m;
od.typeName = "code.contact.v1.PageToken";
od.fields = m.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
bt.Unary, bt.Unary, bt.Unary;
class Gu extends I {
  constructor(t) {
    super(), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Gu().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Gu().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Gu().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Gu, t, e);
  }
}
Gu.runtime = m;
Gu.typeName = "code.currency.v1.GetAllRatesRequest";
Gu.fields = m.util.newFieldList(() => [
  { no: 1, name: "timestamp", kind: "message", T: Xt }
]);
class Xu extends I {
  constructor(t) {
    super(), this.result = Um.OK, this.rates = {}, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Xu().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Xu().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Xu().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Xu, t, e);
  }
}
Xu.runtime = m;
Xu.typeName = "code.currency.v1.GetAllRatesResponse";
Xu.fields = m.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: m.getEnumType(Um) },
  { no: 2, name: "as_of", kind: "message", T: Xt },
  { no: 3, name: "rates", kind: "map", K: 9, V: { kind: "scalar", T: 1 } }
]);
var Um;
(function(n) {
  n[n.OK = 0] = "OK", n[n.MISSING_DATA = 1] = "MISSING_DATA";
})(Um || (Um = {}));
m.util.setEnumType(Um, "code.currency.v1.GetAllRatesResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "MISSING_DATA" }
]);
bt.Unary;
class Yu extends I {
  constructor(t) {
    super(), this.owners = [], this.signatures = [], m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Yu().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Yu().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Yu().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Yu, t, e);
  }
}
Yu.runtime = m;
Yu.typeName = "code.device.v1.RegisterLoggedInAccountsRequest";
Yu.fields = m.util.newFieldList(() => [
  { no: 1, name: "app_install", kind: "message", T: sn },
  { no: 2, name: "owners", kind: "message", T: W, repeated: !0 },
  { no: 3, name: "signatures", kind: "message", T: Tt, repeated: !0 }
]);
class Zu extends I {
  constructor(t) {
    super(), this.result = Lm.OK, this.invalidOwners = [], m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Zu().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Zu().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Zu().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Zu, t, e);
  }
}
Zu.runtime = m;
Zu.typeName = "code.device.v1.RegisterLoggedInAccountsResponse";
Zu.fields = m.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: m.getEnumType(Lm) },
  { no: 2, name: "invalid_owners", kind: "message", T: W, repeated: !0 }
]);
var Lm;
(function(n) {
  n[n.OK = 0] = "OK", n[n.INVALID_OWNER = 1] = "INVALID_OWNER";
})(Lm || (Lm = {}));
m.util.setEnumType(Lm, "code.device.v1.RegisterLoggedInAccountsResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INVALID_OWNER" }
]);
class Qu extends I {
  constructor(t) {
    super(), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Qu().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Qu().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Qu().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Qu, t, e);
  }
}
Qu.runtime = m;
Qu.typeName = "code.device.v1.GetLoggedInAccountsRequest";
Qu.fields = m.util.newFieldList(() => [
  { no: 1, name: "app_install", kind: "message", T: sn }
]);
class tc extends I {
  constructor(t) {
    super(), this.result = Fm.OK, this.owners = [], m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new tc().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new tc().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new tc().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(tc, t, e);
  }
}
tc.runtime = m;
tc.typeName = "code.device.v1.GetLoggedInAccountsResponse";
tc.fields = m.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: m.getEnumType(Fm) },
  { no: 2, name: "owners", kind: "message", T: W, repeated: !0 }
]);
var Fm;
(function(n) {
  n[n.OK = 0] = "OK";
})(Fm || (Fm = {}));
m.util.setEnumType(Fm, "code.device.v1.GetLoggedInAccountsResponse.Result", [
  { no: 0, name: "OK" }
]);
bt.Unary, bt.Unary;
var qm;
(function(n) {
  n[n.NOT_INVITED = 0] = "NOT_INVITED", n[n.INVITED = 1] = "INVITED", n[n.REGISTERED = 2] = "REGISTERED", n[n.REVOKED = 3] = "REVOKED";
})(qm || (qm = {}));
m.util.setEnumType(qm, "code.invite.v2.InvitationStatus", [
  { no: 0, name: "NOT_INVITED" },
  { no: 1, name: "INVITED" },
  { no: 2, name: "REGISTERED" },
  { no: 3, name: "REVOKED" }
]);
class ec extends I {
  constructor(t) {
    super(), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new ec().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new ec().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new ec().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(ec, t, e);
  }
}
ec.runtime = m;
ec.typeName = "code.invite.v2.GetInviteCountRequest";
ec.fields = m.util.newFieldList(() => [
  { no: 1, name: "user_id", kind: "message", T: He }
]);
class nc extends I {
  constructor(t) {
    super(), this.result = Dm.OK, this.inviteCount = 0, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new nc().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new nc().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new nc().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(nc, t, e);
  }
}
nc.runtime = m;
nc.typeName = "code.invite.v2.GetInviteCountResponse";
nc.fields = m.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: m.getEnumType(Dm) },
  { no: 2, name: "invite_count", kind: "scalar", T: 13 }
]);
var Dm;
(function(n) {
  n[n.OK = 0] = "OK";
})(Dm || (Dm = {}));
m.util.setEnumType(Dm, "code.invite.v2.GetInviteCountResponse.Result", [
  { no: 0, name: "OK" }
]);
class rc extends I {
  constructor(t) {
    super(), this.source = { case: void 0 }, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new rc().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new rc().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new rc().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(rc, t, e);
  }
}
rc.runtime = m;
rc.typeName = "code.invite.v2.InvitePhoneNumberRequest";
rc.fields = m.util.newFieldList(() => [
  { no: 1, name: "user", kind: "message", T: He, oneof: "source" },
  { no: 3, name: "invite_code", kind: "message", T: ma, oneof: "source" },
  { no: 2, name: "receiver", kind: "message", T: se }
]);
class ic extends I {
  constructor(t) {
    super(), this.result = Pm.OK, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new ic().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new ic().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new ic().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(ic, t, e);
  }
}
ic.runtime = m;
ic.typeName = "code.invite.v2.InvitePhoneNumberResponse";
ic.fields = m.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: m.getEnumType(Pm) }
]);
var Pm;
(function(n) {
  n[n.OK = 0] = "OK", n[n.INVITE_COUNT_EXCEEDED = 1] = "INVITE_COUNT_EXCEEDED", n[n.ALREADY_INVITED = 2] = "ALREADY_INVITED", n[n.USER_NOT_INVITED = 3] = "USER_NOT_INVITED", n[n.INVALID_RECEIVER_PHONE_NUMBER = 4] = "INVALID_RECEIVER_PHONE_NUMBER", n[n.INVITE_CODE_NOT_FOUND = 5] = "INVITE_CODE_NOT_FOUND", n[n.INVITE_CODE_REVOKED = 6] = "INVITE_CODE_REVOKED", n[n.INVITE_CODE_EXPIRED = 7] = "INVITE_CODE_EXPIRED";
})(Pm || (Pm = {}));
m.util.setEnumType(Pm, "code.invite.v2.InvitePhoneNumberResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INVITE_COUNT_EXCEEDED" },
  { no: 2, name: "ALREADY_INVITED" },
  { no: 3, name: "USER_NOT_INVITED" },
  { no: 4, name: "INVALID_RECEIVER_PHONE_NUMBER" },
  { no: 5, name: "INVITE_CODE_NOT_FOUND" },
  { no: 6, name: "INVITE_CODE_REVOKED" },
  { no: 7, name: "INVITE_CODE_EXPIRED" }
]);
class sc extends I {
  constructor(t) {
    super(), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new sc().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new sc().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new sc().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(sc, t, e);
  }
}
sc.runtime = m;
sc.typeName = "code.invite.v2.GetInvitationStatusRequest";
sc.fields = m.util.newFieldList(() => [
  { no: 1, name: "user_id", kind: "message", T: He }
]);
class oc extends I {
  constructor(t) {
    super(), this.result = Cm.OK, this.status = qm.NOT_INVITED, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new oc().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new oc().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new oc().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(oc, t, e);
  }
}
oc.runtime = m;
oc.typeName = "code.invite.v2.GetInvitationStatusResponse";
oc.fields = m.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: m.getEnumType(Cm) },
  { no: 2, name: "status", kind: "enum", T: m.getEnumType(qm) }
]);
var Cm;
(function(n) {
  n[n.OK = 0] = "OK";
})(Cm || (Cm = {}));
m.util.setEnumType(Cm, "code.invite.v2.GetInvitationStatusResponse.Result", [
  { no: 0, name: "OK" }
]);
class ma extends I {
  constructor(t) {
    super(), this.value = "", m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new ma().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new ma().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new ma().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(ma, t, e);
  }
}
ma.runtime = m;
ma.typeName = "code.invite.v2.InviteCode";
ma.fields = m.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 9 }
]);
class ac extends I {
  constructor(t) {
    super(), this.value = new Uint8Array(0), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new ac().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new ac().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new ac().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(ac, t, e);
  }
}
ac.runtime = m;
ac.typeName = "code.invite.v2.PageToken";
ac.fields = m.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
bt.Unary, bt.Unary, bt.Unary;
class Xn extends I {
  constructor(t) {
    super(), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Xn().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Xn().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Xn().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Xn, t, e);
  }
}
Xn.runtime = m;
Xn.typeName = "code.messaging.v1.OpenMessageStreamRequest";
Xn.fields = m.util.newFieldList(() => [
  { no: 1, name: "rendezvous_key", kind: "message", T: Oe },
  { no: 2, name: "signature", kind: "message", T: Tt }
]);
class Yn extends I {
  constructor(t) {
    super(), this.messages = [], m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Yn().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Yn().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Yn().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Yn, t, e);
  }
}
Yn.runtime = m;
Yn.typeName = "code.messaging.v1.OpenMessageStreamResponse";
Yn.fields = m.util.newFieldList(() => [
  { no: 1, name: "messages", kind: "message", T: ve, repeated: !0 }
]);
class da extends I {
  constructor(t) {
    super(), this.requestOrPong = { case: void 0 }, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new da().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new da().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new da().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(da, t, e);
  }
}
da.runtime = m;
da.typeName = "code.messaging.v1.OpenMessageStreamWithKeepAliveRequest";
da.fields = m.util.newFieldList(() => [
  { no: 1, name: "request", kind: "message", T: Xn, oneof: "requestOrPong" },
  { no: 2, name: "pong", kind: "message", T: va, oneof: "requestOrPong" }
]);
class ha extends I {
  constructor(t) {
    super(), this.responseOrPing = { case: void 0 }, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new ha().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new ha().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new ha().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(ha, t, e);
  }
}
ha.runtime = m;
ha.typeName = "code.messaging.v1.OpenMessageStreamWithKeepAliveResponse";
ha.fields = m.util.newFieldList(() => [
  { no: 1, name: "response", kind: "message", T: Yn, oneof: "responseOrPing" },
  { no: 2, name: "ping", kind: "message", T: Oa, oneof: "responseOrPing" }
]);
class pa extends I {
  constructor(t) {
    super(), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new pa().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new pa().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new pa().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(pa, t, e);
  }
}
pa.runtime = m;
pa.typeName = "code.messaging.v1.PollMessagesRequest";
pa.fields = m.util.newFieldList(() => [
  { no: 1, name: "rendezvous_key", kind: "message", T: Oe },
  { no: 2, name: "signature", kind: "message", T: Tt }
]);
class ga extends I {
  constructor(t) {
    super(), this.messages = [], m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new ga().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new ga().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new ga().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(ga, t, e);
  }
}
ga.runtime = m;
ga.typeName = "code.messaging.v1.PollMessagesResponse";
ga.fields = m.util.newFieldList(() => [
  { no: 1, name: "messages", kind: "message", T: ve, repeated: !0 }
]);
class ya extends I {
  constructor(t) {
    super(), this.messageIds = [], m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new ya().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new ya().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new ya().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(ya, t, e);
  }
}
ya.runtime = m;
ya.typeName = "code.messaging.v1.AckMessagesRequest";
ya.fields = m.util.newFieldList(() => [
  { no: 1, name: "rendezvous_key", kind: "message", T: Oe },
  { no: 2, name: "message_ids", kind: "message", T: un, repeated: !0 }
]);
class wa extends I {
  constructor(t) {
    super(), this.result = Km.OK, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new wa().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new wa().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new wa().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(wa, t, e);
  }
}
wa.runtime = m;
wa.typeName = "code.messaging.v1.AckMesssagesResponse";
wa.fields = m.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: m.getEnumType(Km) }
]);
var Km;
(function(n) {
  n[n.OK = 0] = "OK";
})(Km || (Km = {}));
m.util.setEnumType(Km, "code.messaging.v1.AckMesssagesResponse.Result", [
  { no: 0, name: "OK" }
]);
class Zn extends I {
  constructor(t) {
    super(), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Zn().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Zn().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Zn().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Zn, t, e);
  }
}
Zn.runtime = m;
Zn.typeName = "code.messaging.v1.SendMessageRequest";
Zn.fields = m.util.newFieldList(() => [
  { no: 1, name: "message", kind: "message", T: ve },
  { no: 2, name: "rendezvous_key", kind: "message", T: Oe },
  { no: 3, name: "signature", kind: "message", T: Tt }
]);
class Ta extends I {
  constructor(t) {
    super(), this.result = gl.OK, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Ta().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Ta().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Ta().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Ta, t, e);
  }
}
Ta.runtime = m;
Ta.typeName = "code.messaging.v1.SendMessageResponse";
Ta.fields = m.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: m.getEnumType(gl) },
  { no: 2, name: "message_id", kind: "message", T: un }
]);
var gl;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NO_ACTIVE_STREAM = 1] = "NO_ACTIVE_STREAM";
})(gl || (gl = {}));
m.util.setEnumType(gl, "code.messaging.v1.SendMessageResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NO_ACTIVE_STREAM" }
]);
class Oe extends I {
  constructor(t) {
    super(), this.value = new Uint8Array(0), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Oe().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Oe().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Oe().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Oe, t, e);
  }
}
Oe.runtime = m;
Oe.typeName = "code.messaging.v1.RendezvousKey";
Oe.fields = m.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class un extends I {
  constructor(t) {
    super(), this.value = new Uint8Array(0), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new un().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new un().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new un().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(un, t, e);
  }
}
un.runtime = m;
un.typeName = "code.messaging.v1.MessageId";
un.fields = m.util.newFieldList(() => [
  { no: 1, name: "value", kind: "scalar", T: 12 }
]);
class Na extends I {
  constructor(t) {
    super(), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Na().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Na().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Na().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Na, t, e);
  }
}
Na.runtime = m;
Na.typeName = "code.messaging.v1.RequestToGrabBill";
Na.fields = m.util.newFieldList(() => [
  { no: 1, name: "requestor_account", kind: "message", T: W }
]);
class Qn extends I {
  constructor(t) {
    super(), this.exchangeData = { case: void 0 }, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Qn().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Qn().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Qn().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Qn, t, e);
  }
}
Qn.runtime = m;
Qn.typeName = "code.messaging.v1.RequestToReceiveBill";
Qn.fields = m.util.newFieldList(() => [
  { no: 1, name: "requestor_account", kind: "message", T: W },
  { no: 2, name: "exact", kind: "message", T: ue, oneof: "exchange_data" },
  { no: 3, name: "partial", kind: "message", T: an, oneof: "exchange_data" },
  { no: 4, name: "domain", kind: "message", T: Fe },
  { no: 5, name: "verifier", kind: "message", T: W },
  { no: 6, name: "signature", kind: "message", T: Tt },
  { no: 7, name: "rendezvous_key", kind: "message", T: Oe }
]);
class Ea extends I {
  constructor(t) {
    super(), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Ea().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Ea().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Ea().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Ea, t, e);
  }
}
Ea.runtime = m;
Ea.typeName = "code.messaging.v1.CodeScanned";
Ea.fields = m.util.newFieldList(() => [
  { no: 1, name: "timestamp", kind: "message", T: Xt }
]);
class ba extends I {
  constructor(t) {
    super(), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new ba().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new ba().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new ba().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(ba, t, e);
  }
}
ba.runtime = m;
ba.typeName = "code.messaging.v1.ClientRejectedPayment";
ba.fields = m.util.newFieldList(() => [
  { no: 1, name: "intent_id", kind: "message", T: ie }
]);
class ka extends I {
  constructor(t) {
    super(), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new ka().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new ka().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new ka().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(ka, t, e);
  }
}
ka.runtime = m;
ka.typeName = "code.messaging.v1.IntentSubmitted";
ka.fields = m.util.newFieldList(() => [
  { no: 1, name: "intent_id", kind: "message", T: ie },
  { no: 2, name: "metadata", kind: "message", T: on }
]);
class Ba extends I {
  constructor(t) {
    super(), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Ba().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Ba().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Ba().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Ba, t, e);
  }
}
Ba.runtime = m;
Ba.typeName = "code.messaging.v1.WebhookCalled";
Ba.fields = m.util.newFieldList(() => [
  { no: 1, name: "timestamp", kind: "message", T: Xt }
]);
class tr extends I {
  constructor(t) {
    super(), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new tr().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new tr().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new tr().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(tr, t, e);
  }
}
tr.runtime = m;
tr.typeName = "code.messaging.v1.RequestToLogin";
tr.fields = m.util.newFieldList(() => [
  { no: 1, name: "domain", kind: "message", T: Fe },
  { no: 4, name: "verifier", kind: "message", T: W },
  { no: 5, name: "signature", kind: "message", T: Tt },
  { no: 6, name: "rendezvous_key", kind: "message", T: Oe }
]);
class Sa extends I {
  constructor(t) {
    super(), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Sa().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Sa().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Sa().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Sa, t, e);
  }
}
Sa.runtime = m;
Sa.typeName = "code.messaging.v1.ClientRejectedLogin";
Sa.fields = m.util.newFieldList(() => [
  { no: 4, name: "timestamp", kind: "message", T: Xt }
]);
class Ia extends I {
  constructor(t) {
    super(), this.airdropType = lr.UNKNOWN, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Ia().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Ia().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Ia().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Ia, t, e);
  }
}
Ia.runtime = m;
Ia.typeName = "code.messaging.v1.AirdropReceived";
Ia.fields = m.util.newFieldList(() => [
  { no: 1, name: "airdrop_type", kind: "enum", T: m.getEnumType(lr) },
  { no: 2, name: "exchange_data", kind: "message", T: ue },
  { no: 3, name: "timestamp", kind: "message", T: Xt }
]);
class ve extends I {
  constructor(t) {
    super(), this.kind = { case: void 0 }, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new ve().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new ve().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new ve().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(ve, t, e);
  }
}
ve.runtime = m;
ve.typeName = "code.messaging.v1.Message";
ve.fields = m.util.newFieldList(() => [
  { no: 1, name: "id", kind: "message", T: un },
  { no: 3, name: "send_message_request_signature", kind: "message", T: Tt },
  { no: 2, name: "request_to_grab_bill", kind: "message", T: Na, oneof: "kind" },
  { no: 5, name: "request_to_receive_bill", kind: "message", T: Qn, oneof: "kind" },
  { no: 6, name: "code_scanned", kind: "message", T: Ea, oneof: "kind" },
  { no: 7, name: "client_rejected_payment", kind: "message", T: ba, oneof: "kind" },
  { no: 8, name: "intent_submitted", kind: "message", T: ka, oneof: "kind" },
  { no: 9, name: "webhook_called", kind: "message", T: Ba, oneof: "kind" },
  { no: 10, name: "request_to_login", kind: "message", T: tr, oneof: "kind" },
  { no: 12, name: "client_rejected_login", kind: "message", T: Sa, oneof: "kind" },
  { no: 4, name: "airdrop_received", kind: "message", T: Ia, oneof: "kind" }
]);
class Oa extends I {
  constructor(t) {
    super(), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Oa().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Oa().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Oa().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Oa, t, e);
  }
}
Oa.runtime = m;
Oa.typeName = "code.messaging.v1.ServerPing";
Oa.fields = m.util.newFieldList(() => [
  { no: 1, name: "timestamp", kind: "message", T: Xt },
  { no: 2, name: "ping_delay", kind: "message", T: ao }
]);
class va extends I {
  constructor(t) {
    super(), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new va().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new va().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new va().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(va, t, e);
  }
}
va.runtime = m;
va.typeName = "code.messaging.v1.ClientPong";
va.fields = m.util.newFieldList(() => [
  { no: 1, name: "timestamp", kind: "message", T: Xt }
]);
const qk = {
  typeName: "code.messaging.v1.Messaging",
  methods: {
    openMessageStream: {
      name: "OpenMessageStream",
      I: Xn,
      O: Yn,
      kind: bt.ServerStreaming
    },
    openMessageStreamWithKeepAlive: {
      name: "OpenMessageStreamWithKeepAlive",
      I: da,
      O: ha,
      kind: bt.BiDiStreaming
    },
    pollMessages: {
      name: "PollMessages",
      I: pa,
      O: ga,
      kind: bt.Unary
    },
    ackMessages: {
      name: "AckMessages",
      I: ya,
      O: wa,
      kind: bt.Unary
    },
    sendMessage: {
      name: "SendMessage",
      I: Zn,
      O: Ta,
      kind: bt.Unary
    }
  }
};
class er extends I {
  constructor(t) {
    super(), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new er().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new er().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new er().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(er, t, e);
  }
}
er.runtime = m;
er.typeName = "code.micropayment.v1.GetStatusRequest";
er.fields = m.util.newFieldList(() => [
  { no: 1, name: "intent_id", kind: "message", T: ie }
]);
class Ja extends I {
  constructor(t) {
    super(), this.exists = !1, this.codeScanned = !1, this.intentSubmitted = !1, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Ja().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Ja().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Ja().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Ja, t, e);
  }
}
Ja.runtime = m;
Ja.typeName = "code.micropayment.v1.GetStatusResponse";
Ja.fields = m.util.newFieldList(() => [
  { no: 1, name: "exists", kind: "scalar", T: 8 },
  { no: 2, name: "code_scanned", kind: "scalar", T: 8 },
  { no: 3, name: "intent_submitted", kind: "scalar", T: 8 }
]);
class nr extends I {
  constructor(t) {
    super(), this.url = "", m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new nr().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new nr().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new nr().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(nr, t, e);
  }
}
nr.runtime = m;
nr.typeName = "code.micropayment.v1.RegisterWebhookRequest";
nr.fields = m.util.newFieldList(() => [
  { no: 1, name: "intent_id", kind: "message", T: ie },
  { no: 2, name: "url", kind: "scalar", T: 9 }
]);
class xa extends I {
  constructor(t) {
    super(), this.result = Ze.OK, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new xa().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new xa().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new xa().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(xa, t, e);
  }
}
xa.runtime = m;
xa.typeName = "code.micropayment.v1.RegisterWebhookResponse";
xa.fields = m.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: m.getEnumType(Ze) }
]);
var Ze;
(function(n) {
  n[n.OK = 0] = "OK", n[n.ALREADY_REGISTERED = 1] = "ALREADY_REGISTERED", n[n.REQUEST_NOT_FOUND = 2] = "REQUEST_NOT_FOUND", n[n.INTENT_EXISTS = 3] = "INTENT_EXISTS", n[n.INVALID_URL = 4] = "INVALID_URL";
})(Ze || (Ze = {}));
m.util.setEnumType(Ze, "code.micropayment.v1.RegisterWebhookResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "ALREADY_REGISTERED" },
  { no: 2, name: "REQUEST_NOT_FOUND" },
  { no: 3, name: "INTENT_EXISTS" },
  { no: 4, name: "INVALID_URL" }
]);
class Aa extends I {
  constructor(t) {
    super(), this.url = "", this.currency = "", this.nativeAmount = 0, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Aa().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Aa().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Aa().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Aa, t, e);
  }
}
Aa.runtime = m;
Aa.typeName = "code.micropayment.v1.CodifyRequest";
Aa.fields = m.util.newFieldList(() => [
  { no: 1, name: "url", kind: "scalar", T: 9 },
  { no: 2, name: "currency", kind: "scalar", T: 9 },
  { no: 3, name: "native_amount", kind: "scalar", T: 1 },
  { no: 4, name: "owner_account", kind: "message", T: W },
  { no: 5, name: "primary_account", kind: "message", T: W },
  { no: 6, name: "signature", kind: "message", T: Tt }
]);
class Ua extends I {
  constructor(t) {
    super(), this.result = Rm.OK, this.codifiedUrl = "", m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Ua().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Ua().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Ua().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Ua, t, e);
  }
}
Ua.runtime = m;
Ua.typeName = "code.micropayment.v1.CodifyResponse";
Ua.fields = m.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: m.getEnumType(Rm) },
  { no: 2, name: "codified_url", kind: "scalar", T: 9 }
]);
var Rm;
(function(n) {
  n[n.OK = 0] = "OK", n[n.INVALID_URL = 1] = "INVALID_URL", n[n.INVALID_ACCOUNT = 2] = "INVALID_ACCOUNT", n[n.UNSUPPORTED_CURRENCY = 3] = "UNSUPPORTED_CURRENCY", n[n.NATIVE_AMOUNT_EXCEEDS_LIMIT = 4] = "NATIVE_AMOUNT_EXCEEDS_LIMIT";
})(Rm || (Rm = {}));
m.util.setEnumType(Rm, "code.micropayment.v1.CodifyResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INVALID_URL" },
  { no: 2, name: "INVALID_ACCOUNT" },
  { no: 3, name: "UNSUPPORTED_CURRENCY" },
  { no: 4, name: "NATIVE_AMOUNT_EXCEEDS_LIMIT" }
]);
class La extends I {
  constructor(t) {
    super(), this.path = "", m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new La().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new La().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new La().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(La, t, e);
  }
}
La.runtime = m;
La.typeName = "code.micropayment.v1.GetPathMetadataRequest";
La.fields = m.util.newFieldList(() => [
  { no: 1, name: "path", kind: "scalar", T: 9 }
]);
class Fa extends I {
  constructor(t) {
    super(), this.result = Mm.OK, this.currency = "", this.nativeAmount = 0, this.redirctUrl = "", m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Fa().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Fa().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Fa().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Fa, t, e);
  }
}
Fa.runtime = m;
Fa.typeName = "code.micropayment.v1.GetPathMetadataResponse";
Fa.fields = m.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: m.getEnumType(Mm) },
  { no: 2, name: "destination", kind: "message", T: W },
  { no: 3, name: "currency", kind: "scalar", T: 9 },
  { no: 4, name: "native_amount", kind: "scalar", T: 1 },
  { no: 5, name: "redirct_url", kind: "scalar", T: 9 }
]);
var Mm;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND";
})(Mm || (Mm = {}));
m.util.setEnumType(Mm, "code.micropayment.v1.GetPathMetadataResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" }
]);
const Hw = {
  typeName: "code.micropayment.v1.MicroPayment",
  methods: {
    getStatus: {
      name: "GetStatus",
      I: er,
      O: Ja,
      kind: bt.Unary
    },
    registerWebhook: {
      name: "RegisterWebhook",
      I: nr,
      O: xa,
      kind: bt.Unary
    },
    codify: {
      name: "Codify",
      I: Aa,
      O: Ua,
      kind: bt.Unary
    },
    getPathMetadata: {
      name: "GetPathMetadata",
      I: La,
      O: Fa,
      kind: bt.Unary
    }
  }
};
class uc extends I {
  constructor(t) {
    super(), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new uc().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new uc().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new uc().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(uc, t, e);
  }
}
uc.runtime = m;
uc.typeName = "code.phone.v1.SendVerificationCodeRequest";
uc.fields = m.util.newFieldList(() => [
  { no: 1, name: "phone_number", kind: "message", T: se },
  { no: 2, name: "device_token", kind: "message", T: Vn }
]);
class cc extends I {
  constructor(t) {
    super(), this.result = $m.OK, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new cc().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new cc().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new cc().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(cc, t, e);
  }
}
cc.runtime = m;
cc.typeName = "code.phone.v1.SendVerificationCodeResponse";
cc.fields = m.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: m.getEnumType($m) }
]);
var $m;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_INVITED = 1] = "NOT_INVITED", n[n.RATE_LIMITED = 2] = "RATE_LIMITED", n[n.INVALID_PHONE_NUMBER = 3] = "INVALID_PHONE_NUMBER", n[n.UNSUPPORTED_PHONE_TYPE = 4] = "UNSUPPORTED_PHONE_TYPE";
})($m || ($m = {}));
m.util.setEnumType($m, "code.phone.v1.SendVerificationCodeResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_INVITED" },
  { no: 2, name: "RATE_LIMITED" },
  { no: 3, name: "INVALID_PHONE_NUMBER" },
  { no: 4, name: "UNSUPPORTED_PHONE_TYPE" }
]);
class lc extends I {
  constructor(t) {
    super(), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new lc().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new lc().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new lc().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(lc, t, e);
  }
}
lc.runtime = m;
lc.typeName = "code.phone.v1.CheckVerificationCodeRequest";
lc.fields = m.util.newFieldList(() => [
  { no: 1, name: "phone_number", kind: "message", T: se },
  { no: 2, name: "code", kind: "message", T: rr }
]);
class fc extends I {
  constructor(t) {
    super(), this.result = Vm.OK, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new fc().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new fc().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new fc().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(fc, t, e);
  }
}
fc.runtime = m;
fc.typeName = "code.phone.v1.CheckVerificationCodeResponse";
fc.fields = m.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: m.getEnumType(Vm) },
  { no: 2, name: "linking_token", kind: "message", T: ir }
]);
var Vm;
(function(n) {
  n[n.OK = 0] = "OK", n[n.INVALID_CODE = 1] = "INVALID_CODE", n[n.NO_VERIFICATION = 2] = "NO_VERIFICATION", n[n.RATE_LIMITED = 3] = "RATE_LIMITED";
})(Vm || (Vm = {}));
m.util.setEnumType(Vm, "code.phone.v1.CheckVerificationCodeResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INVALID_CODE" },
  { no: 2, name: "NO_VERIFICATION" },
  { no: 3, name: "RATE_LIMITED" }
]);
class mc extends I {
  constructor(t) {
    super(), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new mc().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new mc().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new mc().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(mc, t, e);
  }
}
mc.runtime = m;
mc.typeName = "code.phone.v1.GetAssociatedPhoneNumberRequest";
mc.fields = m.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: W },
  { no: 2, name: "signature", kind: "message", T: Tt }
]);
class dc extends I {
  constructor(t) {
    super(), this.result = _m.OK, this.isLinked = !1, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new dc().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new dc().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new dc().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(dc, t, e);
  }
}
dc.runtime = m;
dc.typeName = "code.phone.v1.GetAssociatedPhoneNumberResponse";
dc.fields = m.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: m.getEnumType(_m) },
  { no: 2, name: "phone_number", kind: "message", T: se },
  { no: 3, name: "is_linked", kind: "scalar", T: 8 }
]);
var _m;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND", n[n.NOT_INVITED = 2] = "NOT_INVITED", n[n.UNLOCKED_TIMELOCK_ACCOUNT = 3] = "UNLOCKED_TIMELOCK_ACCOUNT";
})(_m || (_m = {}));
m.util.setEnumType(_m, "code.phone.v1.GetAssociatedPhoneNumberResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" },
  { no: 2, name: "NOT_INVITED" },
  { no: 3, name: "UNLOCKED_TIMELOCK_ACCOUNT" }
]);
class rr extends I {
  constructor(t) {
    super(), this.value = "", m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new rr().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new rr().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new rr().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(rr, t, e);
  }
}
rr.runtime = m;
rr.typeName = "code.phone.v1.VerificationCode";
rr.fields = m.util.newFieldList(() => [
  { no: 2, name: "value", kind: "scalar", T: 9 }
]);
class ir extends I {
  constructor(t) {
    super(), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new ir().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new ir().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new ir().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(ir, t, e);
  }
}
ir.runtime = m;
ir.typeName = "code.phone.v1.PhoneLinkingToken";
ir.fields = m.util.newFieldList(() => [
  { no: 1, name: "phone_number", kind: "message", T: se },
  { no: 2, name: "code", kind: "message", T: rr }
]);
bt.Unary, bt.Unary, bt.Unary;
var Hm;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.FCM_ANDROID = 1] = "FCM_ANDROID", n[n.FCM_APNS = 2] = "FCM_APNS";
})(Hm || (Hm = {}));
m.util.setEnumType(Hm, "code.push.v1.TokenType", [
  { no: 0, name: "UNKNOWN" },
  { no: 1, name: "FCM_ANDROID" },
  { no: 2, name: "FCM_APNS" }
]);
class hc extends I {
  constructor(t) {
    super(), this.pushToken = "", this.tokenType = Hm.UNKNOWN, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new hc().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new hc().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new hc().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(hc, t, e);
  }
}
hc.runtime = m;
hc.typeName = "code.push.v1.AddTokenRequest";
hc.fields = m.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: W },
  { no: 2, name: "signature", kind: "message", T: Tt },
  { no: 3, name: "container_id", kind: "message", T: Ie },
  { no: 4, name: "push_token", kind: "scalar", T: 9 },
  { no: 5, name: "token_type", kind: "enum", T: m.getEnumType(Hm) },
  { no: 6, name: "app_install", kind: "message", T: sn }
]);
class pc extends I {
  constructor(t) {
    super(), this.result = zm.OK, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new pc().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new pc().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new pc().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(pc, t, e);
  }
}
pc.runtime = m;
pc.typeName = "code.push.v1.AddTokenResponse";
pc.fields = m.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: m.getEnumType(zm) }
]);
var zm;
(function(n) {
  n[n.OK = 0] = "OK", n[n.INVALID_PUSH_TOKEN = 1] = "INVALID_PUSH_TOKEN";
})(zm || (zm = {}));
m.util.setEnumType(zm, "code.push.v1.AddTokenResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INVALID_PUSH_TOKEN" }
]);
bt.Unary;
bt.BiDiStreaming, bt.Unary, bt.Unary, bt.Unary, bt.Unary, bt.Unary, bt.Unary, bt.Unary, bt.BiDiStreaming;
class gc extends I {
  constructor(t) {
    super(), this.token = { case: void 0 }, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new gc().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new gc().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new gc().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(gc, t, e);
  }
}
gc.runtime = m;
gc.typeName = "code.user.v1.LinkAccountRequest";
gc.fields = m.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: W },
  { no: 2, name: "signature", kind: "message", T: Tt },
  { no: 3, name: "phone", kind: "message", T: ir, oneof: "token" }
]);
class yc extends I {
  constructor(t) {
    super(), this.result = jm.OK, this.metadata = { case: void 0 }, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new yc().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new yc().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new yc().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(yc, t, e);
  }
}
yc.runtime = m;
yc.typeName = "code.user.v1.LinkAccountResponse";
yc.fields = m.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: m.getEnumType(jm) },
  { no: 2, name: "user", kind: "message", T: sr },
  { no: 3, name: "data_container_id", kind: "message", T: Ie },
  { no: 5, name: "phone", kind: "message", T: or, oneof: "metadata" }
]);
var jm;
(function(n) {
  n[n.OK = 0] = "OK", n[n.INVALID_TOKEN = 1] = "INVALID_TOKEN", n[n.RATE_LIMITED = 2] = "RATE_LIMITED";
})(jm || (jm = {}));
m.util.setEnumType(jm, "code.user.v1.LinkAccountResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "INVALID_TOKEN" },
  { no: 2, name: "RATE_LIMITED" }
]);
class wc extends I {
  constructor(t) {
    super(), this.identifyingFeature = { case: void 0 }, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new wc().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new wc().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new wc().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(wc, t, e);
  }
}
wc.runtime = m;
wc.typeName = "code.user.v1.UnlinkAccountRequest";
wc.fields = m.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: W },
  { no: 2, name: "signature", kind: "message", T: Tt },
  { no: 4, name: "phone_number", kind: "message", T: se, oneof: "identifying_feature" }
]);
class Tc extends I {
  constructor(t) {
    super(), this.result = Wm.OK, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Tc().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Tc().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Tc().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Tc, t, e);
  }
}
Tc.runtime = m;
Tc.typeName = "code.user.v1.UnlinkAccountResponse";
Tc.fields = m.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: m.getEnumType(Wm) }
]);
var Wm;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NEVER_ASSOCIATED = 1] = "NEVER_ASSOCIATED";
})(Wm || (Wm = {}));
m.util.setEnumType(Wm, "code.user.v1.UnlinkAccountResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NEVER_ASSOCIATED" }
]);
class Nc extends I {
  constructor(t) {
    super(), this.identifyingFeature = { case: void 0 }, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Nc().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Nc().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Nc().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Nc, t, e);
  }
}
Nc.runtime = m;
Nc.typeName = "code.user.v1.GetUserRequest";
Nc.fields = m.util.newFieldList(() => [
  { no: 1, name: "owner_account_id", kind: "message", T: W },
  { no: 2, name: "signature", kind: "message", T: Tt },
  { no: 3, name: "phone_number", kind: "message", T: se, oneof: "identifying_feature" }
]);
class Ec extends I {
  constructor(t) {
    super(), this.result = Gm.OK, this.metadata = { case: void 0 }, this.enableInternalFlags = !1, this.eligibleAirdrops = [], m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Ec().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Ec().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Ec().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Ec, t, e);
  }
}
Ec.runtime = m;
Ec.typeName = "code.user.v1.GetUserResponse";
Ec.fields = m.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: m.getEnumType(Gm) },
  { no: 2, name: "user", kind: "message", T: sr },
  { no: 3, name: "data_container_id", kind: "message", T: Ie },
  { no: 5, name: "phone", kind: "message", T: or, oneof: "metadata" },
  { no: 6, name: "enable_internal_flags", kind: "scalar", T: 8 },
  { no: 7, name: "eligible_airdrops", kind: "enum", T: m.getEnumType(lr), repeated: !0 }
]);
var Gm;
(function(n) {
  n[n.OK = 0] = "OK", n[n.NOT_FOUND = 1] = "NOT_FOUND", n[n.NOT_INVITED = 2] = "NOT_INVITED", n[n.UNLOCKED_TIMELOCK_ACCOUNT = 3] = "UNLOCKED_TIMELOCK_ACCOUNT";
})(Gm || (Gm = {}));
m.util.setEnumType(Gm, "code.user.v1.GetUserResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "NOT_FOUND" },
  { no: 2, name: "NOT_INVITED" },
  { no: 3, name: "UNLOCKED_TIMELOCK_ACCOUNT" }
]);
class bc extends I {
  constructor(t) {
    super(), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new bc().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new bc().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new bc().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(bc, t, e);
  }
}
bc.runtime = m;
bc.typeName = "code.user.v1.LoginToThirdPartyAppRequest";
bc.fields = m.util.newFieldList(() => [
  { no: 1, name: "intent_id", kind: "message", T: ie },
  { no: 2, name: "user_id", kind: "message", T: W },
  { no: 3, name: "signature", kind: "message", T: Tt }
]);
class kc extends I {
  constructor(t) {
    super(), this.result = Xm.OK, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new kc().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new kc().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new kc().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(kc, t, e);
  }
}
kc.runtime = m;
kc.typeName = "code.user.v1.LoginToThirdPartyAppResponse";
kc.fields = m.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: m.getEnumType(Xm) }
]);
var Xm;
(function(n) {
  n[n.OK = 0] = "OK", n[n.REQUEST_NOT_FOUND = 1] = "REQUEST_NOT_FOUND", n[n.PAYMENT_REQUIRED = 2] = "PAYMENT_REQUIRED", n[n.LOGIN_NOT_SUPPORTED = 3] = "LOGIN_NOT_SUPPORTED", n[n.LOGIN_EXISTS = 4] = "LOGIN_EXISTS", n[n.INVALID_ACCOUNT = 5] = "INVALID_ACCOUNT";
})(Xm || (Xm = {}));
m.util.setEnumType(Xm, "code.user.v1.LoginToThirdPartyAppResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "REQUEST_NOT_FOUND" },
  { no: 2, name: "PAYMENT_REQUIRED" },
  { no: 3, name: "LOGIN_NOT_SUPPORTED" },
  { no: 4, name: "LOGIN_EXISTS" },
  { no: 5, name: "INVALID_ACCOUNT" }
]);
class Bc extends I {
  constructor(t) {
    super(), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Bc().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Bc().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Bc().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Bc, t, e);
  }
}
Bc.runtime = m;
Bc.typeName = "code.user.v1.GetLoginForThirdPartyAppRequest";
Bc.fields = m.util.newFieldList(() => [
  { no: 1, name: "intent_id", kind: "message", T: ie },
  { no: 2, name: "verifier", kind: "message", T: W },
  { no: 3, name: "signature", kind: "message", T: Tt }
]);
class Sc extends I {
  constructor(t) {
    super(), this.result = Ym.OK, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new Sc().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new Sc().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new Sc().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(Sc, t, e);
  }
}
Sc.runtime = m;
Sc.typeName = "code.user.v1.GetLoginForThirdPartyAppResponse";
Sc.fields = m.util.newFieldList(() => [
  { no: 1, name: "result", kind: "enum", T: m.getEnumType(Ym) },
  { no: 2, name: "user_id", kind: "message", T: W }
]);
var Ym;
(function(n) {
  n[n.OK = 0] = "OK", n[n.REQUEST_NOT_FOUND = 1] = "REQUEST_NOT_FOUND", n[n.LOGIN_NOT_SUPPORTED = 2] = "LOGIN_NOT_SUPPORTED";
})(Ym || (Ym = {}));
m.util.setEnumType(Ym, "code.user.v1.GetLoginForThirdPartyAppResponse.Result", [
  { no: 0, name: "OK" },
  { no: 1, name: "REQUEST_NOT_FOUND" },
  { no: 2, name: "LOGIN_NOT_SUPPORTED" }
]);
class sr extends I {
  constructor(t) {
    super(), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new sr().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new sr().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new sr().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(sr, t, e);
  }
}
sr.runtime = m;
sr.typeName = "code.user.v1.User";
sr.fields = m.util.newFieldList(() => [
  { no: 1, name: "id", kind: "message", T: He },
  { no: 2, name: "view", kind: "message", T: qa }
]);
class qa extends I {
  constructor(t) {
    super(), m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new qa().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new qa().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new qa().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(qa, t, e);
  }
}
qa.runtime = m;
qa.typeName = "code.user.v1.View";
qa.fields = m.util.newFieldList(() => [
  { no: 1, name: "phone_number", kind: "message", T: se }
]);
class or extends I {
  constructor(t) {
    super(), this.isLinked = !1, m.util.initPartial(t, this);
  }
  static fromBinary(t, e) {
    return new or().fromBinary(t, e);
  }
  static fromJson(t, e) {
    return new or().fromJson(t, e);
  }
  static fromJsonString(t, e) {
    return new or().fromJsonString(t, e);
  }
  static equals(t, e) {
    return m.util.equals(or, t, e);
  }
}
or.runtime = m;
or.typeName = "code.user.v1.PhoneMetadata";
or.fields = m.util.newFieldList(() => [
  { no: 1, name: "is_linked", kind: "scalar", T: 8 }
]);
bt.Unary, bt.Unary, bt.Unary, bt.Unary, bt.Unary;
function Dk(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function Pk(n) {
  if (n.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), e = 0; e < t.length; e++)
    t[e] = 255;
  for (var r = 0; r < n.length; r++) {
    var i = n.charAt(r), a = i.charCodeAt(0);
    if (t[a] !== 255)
      throw new TypeError(i + " is ambiguous");
    t[a] = r;
  }
  var l = n.length, c = n.charAt(0), d = Math.log(l) / Math.log(256), h = Math.log(256) / Math.log(l);
  function g(b) {
    if (b instanceof Uint8Array || (ArrayBuffer.isView(b) ? b = new Uint8Array(b.buffer, b.byteOffset, b.byteLength) : Array.isArray(b) && (b = Uint8Array.from(b))), !(b instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (b.length === 0)
      return "";
    for (var O = 0, x = 0, L = 0, $ = b.length; L !== $ && b[L] === 0; )
      L++, O++;
    for (var at = ($ - L) * h + 1 >>> 0, F = new Uint8Array(at); L !== $; ) {
      for (var nt = b[L], J = 0, Y = at - 1; (nt !== 0 || J < x) && Y !== -1; Y--, J++)
        nt += 256 * F[Y] >>> 0, F[Y] = nt % l >>> 0, nt = nt / l >>> 0;
      if (nt !== 0)
        throw new Error("Non-zero carry");
      x = J, L++;
    }
    for (var rt = at - x; rt !== at && F[rt] === 0; )
      rt++;
    for (var ot = c.repeat(O); rt < at; ++rt)
      ot += n.charAt(F[rt]);
    return ot;
  }
  function y(b) {
    if (typeof b != "string")
      throw new TypeError("Expected String");
    if (b.length === 0)
      return new Uint8Array();
    for (var O = 0, x = 0, L = 0; b[O] === c; )
      x++, O++;
    for (var $ = (b.length - O) * d + 1 >>> 0, at = new Uint8Array($); b[O]; ) {
      var F = t[b.charCodeAt(O)];
      if (F === 255)
        return;
      for (var nt = 0, J = $ - 1; (F !== 0 || nt < L) && J !== -1; J--, nt++)
        F += l * at[J] >>> 0, at[J] = F % 256 >>> 0, F = F / 256 >>> 0;
      if (F !== 0)
        throw new Error("Non-zero carry");
      L = nt, O++;
    }
    for (var Y = $ - L; Y !== $ && at[Y] === 0; )
      Y++;
    for (var rt = new Uint8Array(x + ($ - Y)), ot = x; Y !== $; )
      rt[ot++] = at[Y++];
    return rt;
  }
  function T(b) {
    var O = y(b);
    if (O)
      return O;
    throw new Error("Non-base" + l + " character");
  }
  return {
    encode: g,
    decodeUnsafe: y,
    decode: T
  };
}
var Ck = Pk;
const Kk = Ck, Rk = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
var Mk = Kk(Rk);
const Xd = /* @__PURE__ */ Dk(Mk);
var mg = {}, Eh = {};
Eh.byteLength = _k;
Eh.toByteArray = zk;
Eh.fromByteArray = Gk;
var bn = [], Re = [], $k = typeof Uint8Array < "u" ? Uint8Array : Array, Ch = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var rl = 0, Vk = Ch.length; rl < Vk; ++rl)
  bn[rl] = Ch[rl], Re[Ch.charCodeAt(rl)] = rl;
Re["-".charCodeAt(0)] = 62;
Re["_".charCodeAt(0)] = 63;
function zw(n) {
  var t = n.length;
  if (t % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var e = n.indexOf("=");
  e === -1 && (e = t);
  var r = e === t ? 0 : 4 - e % 4;
  return [e, r];
}
function _k(n) {
  var t = zw(n), e = t[0], r = t[1];
  return (e + r) * 3 / 4 - r;
}
function Hk(n, t, e) {
  return (t + e) * 3 / 4 - e;
}
function zk(n) {
  var t, e = zw(n), r = e[0], i = e[1], a = new $k(Hk(n, r, i)), l = 0, c = i > 0 ? r - 4 : r, d;
  for (d = 0; d < c; d += 4)
    t = Re[n.charCodeAt(d)] << 18 | Re[n.charCodeAt(d + 1)] << 12 | Re[n.charCodeAt(d + 2)] << 6 | Re[n.charCodeAt(d + 3)], a[l++] = t >> 16 & 255, a[l++] = t >> 8 & 255, a[l++] = t & 255;
  return i === 2 && (t = Re[n.charCodeAt(d)] << 2 | Re[n.charCodeAt(d + 1)] >> 4, a[l++] = t & 255), i === 1 && (t = Re[n.charCodeAt(d)] << 10 | Re[n.charCodeAt(d + 1)] << 4 | Re[n.charCodeAt(d + 2)] >> 2, a[l++] = t >> 8 & 255, a[l++] = t & 255), a;
}
function jk(n) {
  return bn[n >> 18 & 63] + bn[n >> 12 & 63] + bn[n >> 6 & 63] + bn[n & 63];
}
function Wk(n, t, e) {
  for (var r, i = [], a = t; a < e; a += 3)
    r = (n[a] << 16 & 16711680) + (n[a + 1] << 8 & 65280) + (n[a + 2] & 255), i.push(jk(r));
  return i.join("");
}
function Gk(n) {
  for (var t, e = n.length, r = e % 3, i = [], a = 16383, l = 0, c = e - r; l < c; l += a)
    i.push(Wk(n, l, l + a > c ? c : l + a));
  return r === 1 ? (t = n[e - 1], i.push(
    bn[t >> 2] + bn[t << 4 & 63] + "=="
  )) : r === 2 && (t = (n[e - 2] << 8) + n[e - 1], i.push(
    bn[t >> 10] + bn[t >> 4 & 63] + bn[t << 2 & 63] + "="
  )), i.join("");
}
var dg = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
dg.read = function(n, t, e, r, i) {
  var a, l, c = i * 8 - r - 1, d = (1 << c) - 1, h = d >> 1, g = -7, y = e ? i - 1 : 0, T = e ? -1 : 1, b = n[t + y];
  for (y += T, a = b & (1 << -g) - 1, b >>= -g, g += c; g > 0; a = a * 256 + n[t + y], y += T, g -= 8)
    ;
  for (l = a & (1 << -g) - 1, a >>= -g, g += r; g > 0; l = l * 256 + n[t + y], y += T, g -= 8)
    ;
  if (a === 0)
    a = 1 - h;
  else {
    if (a === d)
      return l ? NaN : (b ? -1 : 1) * (1 / 0);
    l = l + Math.pow(2, r), a = a - h;
  }
  return (b ? -1 : 1) * l * Math.pow(2, a - r);
};
dg.write = function(n, t, e, r, i, a) {
  var l, c, d, h = a * 8 - i - 1, g = (1 << h) - 1, y = g >> 1, T = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, b = r ? 0 : a - 1, O = r ? 1 : -1, x = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
  for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (c = isNaN(t) ? 1 : 0, l = g) : (l = Math.floor(Math.log(t) / Math.LN2), t * (d = Math.pow(2, -l)) < 1 && (l--, d *= 2), l + y >= 1 ? t += T / d : t += T * Math.pow(2, 1 - y), t * d >= 2 && (l++, d /= 2), l + y >= g ? (c = 0, l = g) : l + y >= 1 ? (c = (t * d - 1) * Math.pow(2, i), l = l + y) : (c = t * Math.pow(2, y - 1) * Math.pow(2, i), l = 0)); i >= 8; n[e + b] = c & 255, b += O, c /= 256, i -= 8)
    ;
  for (l = l << i | c, h += i; h > 0; n[e + b] = l & 255, b += O, l /= 256, h -= 8)
    ;
  n[e + b - O] |= x * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(n) {
  const t = Eh, e = dg, r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  n.Buffer = c, n.SlowBuffer = at, n.INSPECT_MAX_BYTES = 50;
  const i = 2147483647;
  n.kMaxLength = i, c.TYPED_ARRAY_SUPPORT = a(), !c.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function a() {
    try {
      const o = new Uint8Array(1), s = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(s, Uint8Array.prototype), Object.setPrototypeOf(o, s), o.foo() === 42;
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
  function l(o) {
    if (o > i)
      throw new RangeError('The value "' + o + '" is invalid for option "size"');
    const s = new Uint8Array(o);
    return Object.setPrototypeOf(s, c.prototype), s;
  }
  function c(o, s, u) {
    if (typeof o == "number") {
      if (typeof s == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return y(o);
    }
    return d(o, s, u);
  }
  c.poolSize = 8192;
  function d(o, s, u) {
    if (typeof o == "string")
      return T(o, s);
    if (ArrayBuffer.isView(o))
      return O(o);
    if (o == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof o
      );
    if (q(o, ArrayBuffer) || o && q(o.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (q(o, SharedArrayBuffer) || o && q(o.buffer, SharedArrayBuffer)))
      return x(o, s, u);
    if (typeof o == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const p = o.valueOf && o.valueOf();
    if (p != null && p !== o)
      return c.from(p, s, u);
    const w = L(o);
    if (w)
      return w;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof o[Symbol.toPrimitive] == "function")
      return c.from(o[Symbol.toPrimitive]("string"), s, u);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof o
    );
  }
  c.from = function(o, s, u) {
    return d(o, s, u);
  }, Object.setPrototypeOf(c.prototype, Uint8Array.prototype), Object.setPrototypeOf(c, Uint8Array);
  function h(o) {
    if (typeof o != "number")
      throw new TypeError('"size" argument must be of type number');
    if (o < 0)
      throw new RangeError('The value "' + o + '" is invalid for option "size"');
  }
  function g(o, s, u) {
    return h(o), o <= 0 ? l(o) : s !== void 0 ? typeof u == "string" ? l(o).fill(s, u) : l(o).fill(s) : l(o);
  }
  c.alloc = function(o, s, u) {
    return g(o, s, u);
  };
  function y(o) {
    return h(o), l(o < 0 ? 0 : $(o) | 0);
  }
  c.allocUnsafe = function(o) {
    return y(o);
  }, c.allocUnsafeSlow = function(o) {
    return y(o);
  };
  function T(o, s) {
    if ((typeof s != "string" || s === "") && (s = "utf8"), !c.isEncoding(s))
      throw new TypeError("Unknown encoding: " + s);
    const u = F(o, s) | 0;
    let p = l(u);
    const w = p.write(o, s);
    return w !== u && (p = p.slice(0, w)), p;
  }
  function b(o) {
    const s = o.length < 0 ? 0 : $(o.length) | 0, u = l(s);
    for (let p = 0; p < s; p += 1)
      u[p] = o[p] & 255;
    return u;
  }
  function O(o) {
    if (q(o, Uint8Array)) {
      const s = new Uint8Array(o);
      return x(s.buffer, s.byteOffset, s.byteLength);
    }
    return b(o);
  }
  function x(o, s, u) {
    if (s < 0 || o.byteLength < s)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (o.byteLength < s + (u || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let p;
    return s === void 0 && u === void 0 ? p = new Uint8Array(o) : u === void 0 ? p = new Uint8Array(o, s) : p = new Uint8Array(o, s, u), Object.setPrototypeOf(p, c.prototype), p;
  }
  function L(o) {
    if (c.isBuffer(o)) {
      const s = $(o.length) | 0, u = l(s);
      return u.length === 0 || o.copy(u, 0, 0, s), u;
    }
    if (o.length !== void 0)
      return typeof o.length != "number" || tt(o.length) ? l(0) : b(o);
    if (o.type === "Buffer" && Array.isArray(o.data))
      return b(o.data);
  }
  function $(o) {
    if (o >= i)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
    return o | 0;
  }
  function at(o) {
    return +o != o && (o = 0), c.alloc(+o);
  }
  c.isBuffer = function(o) {
    return o != null && o._isBuffer === !0 && o !== c.prototype;
  }, c.compare = function(o, s) {
    if (q(o, Uint8Array) && (o = c.from(o, o.offset, o.byteLength)), q(s, Uint8Array) && (s = c.from(s, s.offset, s.byteLength)), !c.isBuffer(o) || !c.isBuffer(s))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (o === s)
      return 0;
    let u = o.length, p = s.length;
    for (let w = 0, E = Math.min(u, p); w < E; ++w)
      if (o[w] !== s[w]) {
        u = o[w], p = s[w];
        break;
      }
    return u < p ? -1 : p < u ? 1 : 0;
  }, c.isEncoding = function(o) {
    switch (String(o).toLowerCase()) {
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
  }, c.concat = function(o, s) {
    if (!Array.isArray(o))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (o.length === 0)
      return c.alloc(0);
    let u;
    if (s === void 0)
      for (s = 0, u = 0; u < o.length; ++u)
        s += o[u].length;
    const p = c.allocUnsafe(s);
    let w = 0;
    for (u = 0; u < o.length; ++u) {
      let E = o[u];
      if (q(E, Uint8Array))
        w + E.length > p.length ? (c.isBuffer(E) || (E = c.from(E)), E.copy(p, w)) : Uint8Array.prototype.set.call(
          p,
          E,
          w
        );
      else if (c.isBuffer(E))
        E.copy(p, w);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      w += E.length;
    }
    return p;
  };
  function F(o, s) {
    if (c.isBuffer(o))
      return o.length;
    if (ArrayBuffer.isView(o) || q(o, ArrayBuffer))
      return o.byteLength;
    if (typeof o != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof o
      );
    const u = o.length, p = arguments.length > 2 && arguments[2] === !0;
    if (!p && u === 0)
      return 0;
    let w = !1;
    for (; ; )
      switch (s) {
        case "ascii":
        case "latin1":
        case "binary":
          return u;
        case "utf8":
        case "utf-8":
          return D(o).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return u * 2;
        case "hex":
          return u >>> 1;
        case "base64":
          return M(o).length;
        default:
          if (w)
            return p ? -1 : D(o).length;
          s = ("" + s).toLowerCase(), w = !0;
      }
  }
  c.byteLength = F;
  function nt(o, s, u) {
    let p = !1;
    if ((s === void 0 || s < 0) && (s = 0), s > this.length || ((u === void 0 || u > this.length) && (u = this.length), u <= 0) || (u >>>= 0, s >>>= 0, u <= s))
      return "";
    for (o || (o = "utf8"); ; )
      switch (o) {
        case "hex":
          return A(this, s, u);
        case "utf8":
        case "utf-8":
          return fe(this, s, u);
        case "ascii":
          return G(this, s, u);
        case "latin1":
        case "binary":
          return v(this, s, u);
        case "base64":
          return $t(this, s, u);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return z(this, s, u);
        default:
          if (p)
            throw new TypeError("Unknown encoding: " + o);
          o = (o + "").toLowerCase(), p = !0;
      }
  }
  c.prototype._isBuffer = !0;
  function J(o, s, u) {
    const p = o[s];
    o[s] = o[u], o[u] = p;
  }
  c.prototype.swap16 = function() {
    const o = this.length;
    if (o % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let s = 0; s < o; s += 2)
      J(this, s, s + 1);
    return this;
  }, c.prototype.swap32 = function() {
    const o = this.length;
    if (o % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let s = 0; s < o; s += 4)
      J(this, s, s + 3), J(this, s + 1, s + 2);
    return this;
  }, c.prototype.swap64 = function() {
    const o = this.length;
    if (o % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let s = 0; s < o; s += 8)
      J(this, s, s + 7), J(this, s + 1, s + 6), J(this, s + 2, s + 5), J(this, s + 3, s + 4);
    return this;
  }, c.prototype.toString = function() {
    const o = this.length;
    return o === 0 ? "" : arguments.length === 0 ? fe(this, 0, o) : nt.apply(this, arguments);
  }, c.prototype.toLocaleString = c.prototype.toString, c.prototype.equals = function(o) {
    if (!c.isBuffer(o))
      throw new TypeError("Argument must be a Buffer");
    return this === o ? !0 : c.compare(this, o) === 0;
  }, c.prototype.inspect = function() {
    let o = "";
    const s = n.INSPECT_MAX_BYTES;
    return o = this.toString("hex", 0, s).replace(/(.{2})/g, "$1 ").trim(), this.length > s && (o += " ... "), "<Buffer " + o + ">";
  }, r && (c.prototype[r] = c.prototype.inspect), c.prototype.compare = function(o, s, u, p, w) {
    if (q(o, Uint8Array) && (o = c.from(o, o.offset, o.byteLength)), !c.isBuffer(o))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof o
      );
    if (s === void 0 && (s = 0), u === void 0 && (u = o ? o.length : 0), p === void 0 && (p = 0), w === void 0 && (w = this.length), s < 0 || u > o.length || p < 0 || w > this.length)
      throw new RangeError("out of range index");
    if (p >= w && s >= u)
      return 0;
    if (p >= w)
      return -1;
    if (s >= u)
      return 1;
    if (s >>>= 0, u >>>= 0, p >>>= 0, w >>>= 0, this === o)
      return 0;
    let E = w - p, B = u - s;
    const st = Math.min(E, B), Bt = this.slice(p, w), ut = o.slice(s, u);
    for (let lt = 0; lt < st; ++lt)
      if (Bt[lt] !== ut[lt]) {
        E = Bt[lt], B = ut[lt];
        break;
      }
    return E < B ? -1 : B < E ? 1 : 0;
  };
  function Y(o, s, u, p, w) {
    if (o.length === 0)
      return -1;
    if (typeof u == "string" ? (p = u, u = 0) : u > 2147483647 ? u = 2147483647 : u < -2147483648 && (u = -2147483648), u = +u, tt(u) && (u = w ? 0 : o.length - 1), u < 0 && (u = o.length + u), u >= o.length) {
      if (w)
        return -1;
      u = o.length - 1;
    } else if (u < 0)
      if (w)
        u = 0;
      else
        return -1;
    if (typeof s == "string" && (s = c.from(s, p)), c.isBuffer(s))
      return s.length === 0 ? -1 : rt(o, s, u, p, w);
    if (typeof s == "number")
      return s = s & 255, typeof Uint8Array.prototype.indexOf == "function" ? w ? Uint8Array.prototype.indexOf.call(o, s, u) : Uint8Array.prototype.lastIndexOf.call(o, s, u) : rt(o, [s], u, p, w);
    throw new TypeError("val must be string, number or Buffer");
  }
  function rt(o, s, u, p, w) {
    let E = 1, B = o.length, st = s.length;
    if (p !== void 0 && (p = String(p).toLowerCase(), p === "ucs2" || p === "ucs-2" || p === "utf16le" || p === "utf-16le")) {
      if (o.length < 2 || s.length < 2)
        return -1;
      E = 2, B /= 2, st /= 2, u /= 2;
    }
    function Bt(lt, pt) {
      return E === 1 ? lt[pt] : lt.readUInt16BE(pt * E);
    }
    let ut;
    if (w) {
      let lt = -1;
      for (ut = u; ut < B; ut++)
        if (Bt(o, ut) === Bt(s, lt === -1 ? 0 : ut - lt)) {
          if (lt === -1 && (lt = ut), ut - lt + 1 === st)
            return lt * E;
        } else
          lt !== -1 && (ut -= ut - lt), lt = -1;
    } else
      for (u + st > B && (u = B - st), ut = u; ut >= 0; ut--) {
        let lt = !0;
        for (let pt = 0; pt < st; pt++)
          if (Bt(o, ut + pt) !== Bt(s, pt)) {
            lt = !1;
            break;
          }
        if (lt)
          return ut;
      }
    return -1;
  }
  c.prototype.includes = function(o, s, u) {
    return this.indexOf(o, s, u) !== -1;
  }, c.prototype.indexOf = function(o, s, u) {
    return Y(this, o, s, u, !0);
  }, c.prototype.lastIndexOf = function(o, s, u) {
    return Y(this, o, s, u, !1);
  };
  function ot(o, s, u, p) {
    u = Number(u) || 0;
    const w = o.length - u;
    p ? (p = Number(p), p > w && (p = w)) : p = w;
    const E = s.length;
    p > E / 2 && (p = E / 2);
    let B;
    for (B = 0; B < p; ++B) {
      const st = parseInt(s.substr(B * 2, 2), 16);
      if (tt(st))
        return B;
      o[u + B] = st;
    }
    return B;
  }
  function gt(o, s, u, p) {
    return V(D(s, o.length - u), o, u, p);
  }
  function Ft(o, s, u, p) {
    return V(H(s), o, u, p);
  }
  function Ut(o, s, u, p) {
    return V(M(s), o, u, p);
  }
  function Pt(o, s, u, p) {
    return V(Z(s, o.length - u), o, u, p);
  }
  c.prototype.write = function(o, s, u, p) {
    if (s === void 0)
      p = "utf8", u = this.length, s = 0;
    else if (u === void 0 && typeof s == "string")
      p = s, u = this.length, s = 0;
    else if (isFinite(s))
      s = s >>> 0, isFinite(u) ? (u = u >>> 0, p === void 0 && (p = "utf8")) : (p = u, u = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const w = this.length - s;
    if ((u === void 0 || u > w) && (u = w), o.length > 0 && (u < 0 || s < 0) || s > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    p || (p = "utf8");
    let E = !1;
    for (; ; )
      switch (p) {
        case "hex":
          return ot(this, o, s, u);
        case "utf8":
        case "utf-8":
          return gt(this, o, s, u);
        case "ascii":
        case "latin1":
        case "binary":
          return Ft(this, o, s, u);
        case "base64":
          return Ut(this, o, s, u);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Pt(this, o, s, u);
        default:
          if (E)
            throw new TypeError("Unknown encoding: " + p);
          p = ("" + p).toLowerCase(), E = !0;
      }
  }, c.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function $t(o, s, u) {
    return s === 0 && u === o.length ? t.fromByteArray(o) : t.fromByteArray(o.slice(s, u));
  }
  function fe(o, s, u) {
    u = Math.min(o.length, u);
    const p = [];
    let w = s;
    for (; w < u; ) {
      const E = o[w];
      let B = null, st = E > 239 ? 4 : E > 223 ? 3 : E > 191 ? 2 : 1;
      if (w + st <= u) {
        let Bt, ut, lt, pt;
        switch (st) {
          case 1:
            E < 128 && (B = E);
            break;
          case 2:
            Bt = o[w + 1], (Bt & 192) === 128 && (pt = (E & 31) << 6 | Bt & 63, pt > 127 && (B = pt));
            break;
          case 3:
            Bt = o[w + 1], ut = o[w + 2], (Bt & 192) === 128 && (ut & 192) === 128 && (pt = (E & 15) << 12 | (Bt & 63) << 6 | ut & 63, pt > 2047 && (pt < 55296 || pt > 57343) && (B = pt));
            break;
          case 4:
            Bt = o[w + 1], ut = o[w + 2], lt = o[w + 3], (Bt & 192) === 128 && (ut & 192) === 128 && (lt & 192) === 128 && (pt = (E & 15) << 18 | (Bt & 63) << 12 | (ut & 63) << 6 | lt & 63, pt > 65535 && pt < 1114112 && (B = pt));
        }
      }
      B === null ? (B = 65533, st = 1) : B > 65535 && (B -= 65536, p.push(B >>> 10 & 1023 | 55296), B = 56320 | B & 1023), p.push(B), w += st;
    }
    return Ht(p);
  }
  const Vt = 4096;
  function Ht(o) {
    const s = o.length;
    if (s <= Vt)
      return String.fromCharCode.apply(String, o);
    let u = "", p = 0;
    for (; p < s; )
      u += String.fromCharCode.apply(
        String,
        o.slice(p, p += Vt)
      );
    return u;
  }
  function G(o, s, u) {
    let p = "";
    u = Math.min(o.length, u);
    for (let w = s; w < u; ++w)
      p += String.fromCharCode(o[w] & 127);
    return p;
  }
  function v(o, s, u) {
    let p = "";
    u = Math.min(o.length, u);
    for (let w = s; w < u; ++w)
      p += String.fromCharCode(o[w]);
    return p;
  }
  function A(o, s, u) {
    const p = o.length;
    (!s || s < 0) && (s = 0), (!u || u < 0 || u > p) && (u = p);
    let w = "";
    for (let E = s; E < u; ++E)
      w += et[o[E]];
    return w;
  }
  function z(o, s, u) {
    const p = o.slice(s, u);
    let w = "";
    for (let E = 0; E < p.length - 1; E += 2)
      w += String.fromCharCode(p[E] + p[E + 1] * 256);
    return w;
  }
  c.prototype.slice = function(o, s) {
    const u = this.length;
    o = ~~o, s = s === void 0 ? u : ~~s, o < 0 ? (o += u, o < 0 && (o = 0)) : o > u && (o = u), s < 0 ? (s += u, s < 0 && (s = 0)) : s > u && (s = u), s < o && (s = o);
    const p = this.subarray(o, s);
    return Object.setPrototypeOf(p, c.prototype), p;
  };
  function P(o, s, u) {
    if (o % 1 !== 0 || o < 0)
      throw new RangeError("offset is not uint");
    if (o + s > u)
      throw new RangeError("Trying to access beyond buffer length");
  }
  c.prototype.readUintLE = c.prototype.readUIntLE = function(o, s, u) {
    o = o >>> 0, s = s >>> 0, u || P(o, s, this.length);
    let p = this[o], w = 1, E = 0;
    for (; ++E < s && (w *= 256); )
      p += this[o + E] * w;
    return p;
  }, c.prototype.readUintBE = c.prototype.readUIntBE = function(o, s, u) {
    o = o >>> 0, s = s >>> 0, u || P(o, s, this.length);
    let p = this[o + --s], w = 1;
    for (; s > 0 && (w *= 256); )
      p += this[o + --s] * w;
    return p;
  }, c.prototype.readUint8 = c.prototype.readUInt8 = function(o, s) {
    return o = o >>> 0, s || P(o, 1, this.length), this[o];
  }, c.prototype.readUint16LE = c.prototype.readUInt16LE = function(o, s) {
    return o = o >>> 0, s || P(o, 2, this.length), this[o] | this[o + 1] << 8;
  }, c.prototype.readUint16BE = c.prototype.readUInt16BE = function(o, s) {
    return o = o >>> 0, s || P(o, 2, this.length), this[o] << 8 | this[o + 1];
  }, c.prototype.readUint32LE = c.prototype.readUInt32LE = function(o, s) {
    return o = o >>> 0, s || P(o, 4, this.length), (this[o] | this[o + 1] << 8 | this[o + 2] << 16) + this[o + 3] * 16777216;
  }, c.prototype.readUint32BE = c.prototype.readUInt32BE = function(o, s) {
    return o = o >>> 0, s || P(o, 4, this.length), this[o] * 16777216 + (this[o + 1] << 16 | this[o + 2] << 8 | this[o + 3]);
  }, c.prototype.readBigUInt64LE = Q(function(o) {
    o = o >>> 0, N(o, "offset");
    const s = this[o], u = this[o + 7];
    (s === void 0 || u === void 0) && k(o, this.length - 8);
    const p = s + this[++o] * 2 ** 8 + this[++o] * 2 ** 16 + this[++o] * 2 ** 24, w = this[++o] + this[++o] * 2 ** 8 + this[++o] * 2 ** 16 + u * 2 ** 24;
    return BigInt(p) + (BigInt(w) << BigInt(32));
  }), c.prototype.readBigUInt64BE = Q(function(o) {
    o = o >>> 0, N(o, "offset");
    const s = this[o], u = this[o + 7];
    (s === void 0 || u === void 0) && k(o, this.length - 8);
    const p = s * 2 ** 24 + this[++o] * 2 ** 16 + this[++o] * 2 ** 8 + this[++o], w = this[++o] * 2 ** 24 + this[++o] * 2 ** 16 + this[++o] * 2 ** 8 + u;
    return (BigInt(p) << BigInt(32)) + BigInt(w);
  }), c.prototype.readIntLE = function(o, s, u) {
    o = o >>> 0, s = s >>> 0, u || P(o, s, this.length);
    let p = this[o], w = 1, E = 0;
    for (; ++E < s && (w *= 256); )
      p += this[o + E] * w;
    return w *= 128, p >= w && (p -= Math.pow(2, 8 * s)), p;
  }, c.prototype.readIntBE = function(o, s, u) {
    o = o >>> 0, s = s >>> 0, u || P(o, s, this.length);
    let p = s, w = 1, E = this[o + --p];
    for (; p > 0 && (w *= 256); )
      E += this[o + --p] * w;
    return w *= 128, E >= w && (E -= Math.pow(2, 8 * s)), E;
  }, c.prototype.readInt8 = function(o, s) {
    return o = o >>> 0, s || P(o, 1, this.length), this[o] & 128 ? (255 - this[o] + 1) * -1 : this[o];
  }, c.prototype.readInt16LE = function(o, s) {
    o = o >>> 0, s || P(o, 2, this.length);
    const u = this[o] | this[o + 1] << 8;
    return u & 32768 ? u | 4294901760 : u;
  }, c.prototype.readInt16BE = function(o, s) {
    o = o >>> 0, s || P(o, 2, this.length);
    const u = this[o + 1] | this[o] << 8;
    return u & 32768 ? u | 4294901760 : u;
  }, c.prototype.readInt32LE = function(o, s) {
    return o = o >>> 0, s || P(o, 4, this.length), this[o] | this[o + 1] << 8 | this[o + 2] << 16 | this[o + 3] << 24;
  }, c.prototype.readInt32BE = function(o, s) {
    return o = o >>> 0, s || P(o, 4, this.length), this[o] << 24 | this[o + 1] << 16 | this[o + 2] << 8 | this[o + 3];
  }, c.prototype.readBigInt64LE = Q(function(o) {
    o = o >>> 0, N(o, "offset");
    const s = this[o], u = this[o + 7];
    (s === void 0 || u === void 0) && k(o, this.length - 8);
    const p = this[o + 4] + this[o + 5] * 2 ** 8 + this[o + 6] * 2 ** 16 + (u << 24);
    return (BigInt(p) << BigInt(32)) + BigInt(s + this[++o] * 2 ** 8 + this[++o] * 2 ** 16 + this[++o] * 2 ** 24);
  }), c.prototype.readBigInt64BE = Q(function(o) {
    o = o >>> 0, N(o, "offset");
    const s = this[o], u = this[o + 7];
    (s === void 0 || u === void 0) && k(o, this.length - 8);
    const p = (s << 24) + // Overflow
    this[++o] * 2 ** 16 + this[++o] * 2 ** 8 + this[++o];
    return (BigInt(p) << BigInt(32)) + BigInt(this[++o] * 2 ** 24 + this[++o] * 2 ** 16 + this[++o] * 2 ** 8 + u);
  }), c.prototype.readFloatLE = function(o, s) {
    return o = o >>> 0, s || P(o, 4, this.length), e.read(this, o, !0, 23, 4);
  }, c.prototype.readFloatBE = function(o, s) {
    return o = o >>> 0, s || P(o, 4, this.length), e.read(this, o, !1, 23, 4);
  }, c.prototype.readDoubleLE = function(o, s) {
    return o = o >>> 0, s || P(o, 8, this.length), e.read(this, o, !0, 52, 8);
  }, c.prototype.readDoubleBE = function(o, s) {
    return o = o >>> 0, s || P(o, 8, this.length), e.read(this, o, !1, 52, 8);
  };
  function _(o, s, u, p, w, E) {
    if (!c.isBuffer(o))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (s > w || s < E)
      throw new RangeError('"value" argument is out of bounds');
    if (u + p > o.length)
      throw new RangeError("Index out of range");
  }
  c.prototype.writeUintLE = c.prototype.writeUIntLE = function(o, s, u, p) {
    if (o = +o, s = s >>> 0, u = u >>> 0, !p) {
      const B = Math.pow(2, 8 * u) - 1;
      _(this, o, s, u, B, 0);
    }
    let w = 1, E = 0;
    for (this[s] = o & 255; ++E < u && (w *= 256); )
      this[s + E] = o / w & 255;
    return s + u;
  }, c.prototype.writeUintBE = c.prototype.writeUIntBE = function(o, s, u, p) {
    if (o = +o, s = s >>> 0, u = u >>> 0, !p) {
      const B = Math.pow(2, 8 * u) - 1;
      _(this, o, s, u, B, 0);
    }
    let w = u - 1, E = 1;
    for (this[s + w] = o & 255; --w >= 0 && (E *= 256); )
      this[s + w] = o / E & 255;
    return s + u;
  }, c.prototype.writeUint8 = c.prototype.writeUInt8 = function(o, s, u) {
    return o = +o, s = s >>> 0, u || _(this, o, s, 1, 255, 0), this[s] = o & 255, s + 1;
  }, c.prototype.writeUint16LE = c.prototype.writeUInt16LE = function(o, s, u) {
    return o = +o, s = s >>> 0, u || _(this, o, s, 2, 65535, 0), this[s] = o & 255, this[s + 1] = o >>> 8, s + 2;
  }, c.prototype.writeUint16BE = c.prototype.writeUInt16BE = function(o, s, u) {
    return o = +o, s = s >>> 0, u || _(this, o, s, 2, 65535, 0), this[s] = o >>> 8, this[s + 1] = o & 255, s + 2;
  }, c.prototype.writeUint32LE = c.prototype.writeUInt32LE = function(o, s, u) {
    return o = +o, s = s >>> 0, u || _(this, o, s, 4, 4294967295, 0), this[s + 3] = o >>> 24, this[s + 2] = o >>> 16, this[s + 1] = o >>> 8, this[s] = o & 255, s + 4;
  }, c.prototype.writeUint32BE = c.prototype.writeUInt32BE = function(o, s, u) {
    return o = +o, s = s >>> 0, u || _(this, o, s, 4, 4294967295, 0), this[s] = o >>> 24, this[s + 1] = o >>> 16, this[s + 2] = o >>> 8, this[s + 3] = o & 255, s + 4;
  };
  function it(o, s, u, p, w) {
    Kt(s, p, w, o, u, 7);
    let E = Number(s & BigInt(4294967295));
    o[u++] = E, E = E >> 8, o[u++] = E, E = E >> 8, o[u++] = E, E = E >> 8, o[u++] = E;
    let B = Number(s >> BigInt(32) & BigInt(4294967295));
    return o[u++] = B, B = B >> 8, o[u++] = B, B = B >> 8, o[u++] = B, B = B >> 8, o[u++] = B, u;
  }
  function ft(o, s, u, p, w) {
    Kt(s, p, w, o, u, 7);
    let E = Number(s & BigInt(4294967295));
    o[u + 7] = E, E = E >> 8, o[u + 6] = E, E = E >> 8, o[u + 5] = E, E = E >> 8, o[u + 4] = E;
    let B = Number(s >> BigInt(32) & BigInt(4294967295));
    return o[u + 3] = B, B = B >> 8, o[u + 2] = B, B = B >> 8, o[u + 1] = B, B = B >> 8, o[u] = B, u + 8;
  }
  c.prototype.writeBigUInt64LE = Q(function(o, s = 0) {
    return it(this, o, s, BigInt(0), BigInt("0xffffffffffffffff"));
  }), c.prototype.writeBigUInt64BE = Q(function(o, s = 0) {
    return ft(this, o, s, BigInt(0), BigInt("0xffffffffffffffff"));
  }), c.prototype.writeIntLE = function(o, s, u, p) {
    if (o = +o, s = s >>> 0, !p) {
      const st = Math.pow(2, 8 * u - 1);
      _(this, o, s, u, st - 1, -st);
    }
    let w = 0, E = 1, B = 0;
    for (this[s] = o & 255; ++w < u && (E *= 256); )
      o < 0 && B === 0 && this[s + w - 1] !== 0 && (B = 1), this[s + w] = (o / E >> 0) - B & 255;
    return s + u;
  }, c.prototype.writeIntBE = function(o, s, u, p) {
    if (o = +o, s = s >>> 0, !p) {
      const st = Math.pow(2, 8 * u - 1);
      _(this, o, s, u, st - 1, -st);
    }
    let w = u - 1, E = 1, B = 0;
    for (this[s + w] = o & 255; --w >= 0 && (E *= 256); )
      o < 0 && B === 0 && this[s + w + 1] !== 0 && (B = 1), this[s + w] = (o / E >> 0) - B & 255;
    return s + u;
  }, c.prototype.writeInt8 = function(o, s, u) {
    return o = +o, s = s >>> 0, u || _(this, o, s, 1, 127, -128), o < 0 && (o = 255 + o + 1), this[s] = o & 255, s + 1;
  }, c.prototype.writeInt16LE = function(o, s, u) {
    return o = +o, s = s >>> 0, u || _(this, o, s, 2, 32767, -32768), this[s] = o & 255, this[s + 1] = o >>> 8, s + 2;
  }, c.prototype.writeInt16BE = function(o, s, u) {
    return o = +o, s = s >>> 0, u || _(this, o, s, 2, 32767, -32768), this[s] = o >>> 8, this[s + 1] = o & 255, s + 2;
  }, c.prototype.writeInt32LE = function(o, s, u) {
    return o = +o, s = s >>> 0, u || _(this, o, s, 4, 2147483647, -2147483648), this[s] = o & 255, this[s + 1] = o >>> 8, this[s + 2] = o >>> 16, this[s + 3] = o >>> 24, s + 4;
  }, c.prototype.writeInt32BE = function(o, s, u) {
    return o = +o, s = s >>> 0, u || _(this, o, s, 4, 2147483647, -2147483648), o < 0 && (o = 4294967295 + o + 1), this[s] = o >>> 24, this[s + 1] = o >>> 16, this[s + 2] = o >>> 8, this[s + 3] = o & 255, s + 4;
  }, c.prototype.writeBigInt64LE = Q(function(o, s = 0) {
    return it(this, o, s, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), c.prototype.writeBigInt64BE = Q(function(o, s = 0) {
    return ft(this, o, s, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function mt(o, s, u, p, w, E) {
    if (u + p > o.length)
      throw new RangeError("Index out of range");
    if (u < 0)
      throw new RangeError("Index out of range");
  }
  function ct(o, s, u, p, w) {
    return s = +s, u = u >>> 0, w || mt(o, s, u, 4), e.write(o, s, u, p, 23, 4), u + 4;
  }
  c.prototype.writeFloatLE = function(o, s, u) {
    return ct(this, o, s, !0, u);
  }, c.prototype.writeFloatBE = function(o, s, u) {
    return ct(this, o, s, !1, u);
  };
  function dt(o, s, u, p, w) {
    return s = +s, u = u >>> 0, w || mt(o, s, u, 8), e.write(o, s, u, p, 52, 8), u + 8;
  }
  c.prototype.writeDoubleLE = function(o, s, u) {
    return dt(this, o, s, !0, u);
  }, c.prototype.writeDoubleBE = function(o, s, u) {
    return dt(this, o, s, !1, u);
  }, c.prototype.copy = function(o, s, u, p) {
    if (!c.isBuffer(o))
      throw new TypeError("argument should be a Buffer");
    if (u || (u = 0), !p && p !== 0 && (p = this.length), s >= o.length && (s = o.length), s || (s = 0), p > 0 && p < u && (p = u), p === u || o.length === 0 || this.length === 0)
      return 0;
    if (s < 0)
      throw new RangeError("targetStart out of bounds");
    if (u < 0 || u >= this.length)
      throw new RangeError("Index out of range");
    if (p < 0)
      throw new RangeError("sourceEnd out of bounds");
    p > this.length && (p = this.length), o.length - s < p - u && (p = o.length - s + u);
    const w = p - u;
    return this === o && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(s, u, p) : Uint8Array.prototype.set.call(
      o,
      this.subarray(u, p),
      s
    ), w;
  }, c.prototype.fill = function(o, s, u, p) {
    if (typeof o == "string") {
      if (typeof s == "string" ? (p = s, s = 0, u = this.length) : typeof u == "string" && (p = u, u = this.length), p !== void 0 && typeof p != "string")
        throw new TypeError("encoding must be a string");
      if (typeof p == "string" && !c.isEncoding(p))
        throw new TypeError("Unknown encoding: " + p);
      if (o.length === 1) {
        const E = o.charCodeAt(0);
        (p === "utf8" && E < 128 || p === "latin1") && (o = E);
      }
    } else
      typeof o == "number" ? o = o & 255 : typeof o == "boolean" && (o = Number(o));
    if (s < 0 || this.length < s || this.length < u)
      throw new RangeError("Out of range index");
    if (u <= s)
      return this;
    s = s >>> 0, u = u === void 0 ? this.length : u >>> 0, o || (o = 0);
    let w;
    if (typeof o == "number")
      for (w = s; w < u; ++w)
        this[w] = o;
    else {
      const E = c.isBuffer(o) ? o : c.from(o, p), B = E.length;
      if (B === 0)
        throw new TypeError('The value "' + o + '" is invalid for argument "value"');
      for (w = 0; w < u - s; ++w)
        this[w + s] = E[w % B];
    }
    return this;
  };
  const yt = {};
  function Lt(o, s, u) {
    yt[o] = class extends u {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: s.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${o}]`, this.stack, delete this.name;
      }
      get code() {
        return o;
      }
      set code(p) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: p,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${o}]: ${this.message}`;
      }
    };
  }
  Lt(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(o) {
      return o ? `${o} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), Lt(
    "ERR_INVALID_ARG_TYPE",
    function(o, s) {
      return `The "${o}" argument must be of type number. Received type ${typeof s}`;
    },
    TypeError
  ), Lt(
    "ERR_OUT_OF_RANGE",
    function(o, s, u) {
      let p = `The value of "${o}" is out of range.`, w = u;
      return Number.isInteger(u) && Math.abs(u) > 2 ** 32 ? w = xt(String(u)) : typeof u == "bigint" && (w = String(u), (u > BigInt(2) ** BigInt(32) || u < -(BigInt(2) ** BigInt(32))) && (w = xt(w)), w += "n"), p += ` It must be ${s}. Received ${w}`, p;
    },
    RangeError
  );
  function xt(o) {
    let s = "", u = o.length;
    const p = o[0] === "-" ? 1 : 0;
    for (; u >= p + 4; u -= 3)
      s = `_${o.slice(u - 3, u)}${s}`;
    return `${o.slice(0, u)}${s}`;
  }
  function qt(o, s, u) {
    N(s, "offset"), (o[s] === void 0 || o[s + u] === void 0) && k(s, o.length - (u + 1));
  }
  function Kt(o, s, u, p, w, E) {
    if (o > u || o < s) {
      const B = typeof s == "bigint" ? "n" : "";
      let st;
      throw E > 3 ? s === 0 || s === BigInt(0) ? st = `>= 0${B} and < 2${B} ** ${(E + 1) * 8}${B}` : st = `>= -(2${B} ** ${(E + 1) * 8 - 1}${B}) and < 2 ** ${(E + 1) * 8 - 1}${B}` : st = `>= ${s}${B} and <= ${u}${B}`, new yt.ERR_OUT_OF_RANGE("value", st, o);
    }
    qt(p, w, E);
  }
  function N(o, s) {
    if (typeof o != "number")
      throw new yt.ERR_INVALID_ARG_TYPE(s, "number", o);
  }
  function k(o, s, u) {
    throw Math.floor(o) !== o ? (N(o, u), new yt.ERR_OUT_OF_RANGE(u || "offset", "an integer", o)) : s < 0 ? new yt.ERR_BUFFER_OUT_OF_BOUNDS() : new yt.ERR_OUT_OF_RANGE(
      u || "offset",
      `>= ${u ? 1 : 0} and <= ${s}`,
      o
    );
  }
  const U = /[^+/0-9A-Za-z-_]/g;
  function C(o) {
    if (o = o.split("=")[0], o = o.trim().replace(U, ""), o.length < 2)
      return "";
    for (; o.length % 4 !== 0; )
      o = o + "=";
    return o;
  }
  function D(o, s) {
    s = s || 1 / 0;
    let u;
    const p = o.length;
    let w = null;
    const E = [];
    for (let B = 0; B < p; ++B) {
      if (u = o.charCodeAt(B), u > 55295 && u < 57344) {
        if (!w) {
          if (u > 56319) {
            (s -= 3) > -1 && E.push(239, 191, 189);
            continue;
          } else if (B + 1 === p) {
            (s -= 3) > -1 && E.push(239, 191, 189);
            continue;
          }
          w = u;
          continue;
        }
        if (u < 56320) {
          (s -= 3) > -1 && E.push(239, 191, 189), w = u;
          continue;
        }
        u = (w - 55296 << 10 | u - 56320) + 65536;
      } else
        w && (s -= 3) > -1 && E.push(239, 191, 189);
      if (w = null, u < 128) {
        if ((s -= 1) < 0)
          break;
        E.push(u);
      } else if (u < 2048) {
        if ((s -= 2) < 0)
          break;
        E.push(
          u >> 6 | 192,
          u & 63 | 128
        );
      } else if (u < 65536) {
        if ((s -= 3) < 0)
          break;
        E.push(
          u >> 12 | 224,
          u >> 6 & 63 | 128,
          u & 63 | 128
        );
      } else if (u < 1114112) {
        if ((s -= 4) < 0)
          break;
        E.push(
          u >> 18 | 240,
          u >> 12 & 63 | 128,
          u >> 6 & 63 | 128,
          u & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return E;
  }
  function H(o) {
    const s = [];
    for (let u = 0; u < o.length; ++u)
      s.push(o.charCodeAt(u) & 255);
    return s;
  }
  function Z(o, s) {
    let u, p, w;
    const E = [];
    for (let B = 0; B < o.length && !((s -= 2) < 0); ++B)
      u = o.charCodeAt(B), p = u >> 8, w = u % 256, E.push(w), E.push(p);
    return E;
  }
  function M(o) {
    return t.toByteArray(C(o));
  }
  function V(o, s, u, p) {
    let w;
    for (w = 0; w < p && !(w + u >= s.length || w >= o.length); ++w)
      s[w + u] = o[w];
    return w;
  }
  function q(o, s) {
    return o instanceof s || o != null && o.constructor != null && o.constructor.name != null && o.constructor.name === s.name;
  }
  function tt(o) {
    return o !== o;
  }
  const et = function() {
    const o = "0123456789abcdef", s = new Array(256);
    for (let u = 0; u < 16; ++u) {
      const p = u * 16;
      for (let w = 0; w < 16; ++w)
        s[p + w] = o[u] + o[w];
    }
    return s;
  }();
  function Q(o) {
    return typeof BigInt > "u" ? ht : o;
  }
  function ht() {
    throw new Error("BigInt not supported");
  }
})(mg);
function Xk(n, ...t) {
  if (!(n instanceof Uint8Array))
    throw new Error("Expected Uint8Array");
  if (t.length > 0 && !t.includes(n.length))
    throw new Error(`Expected Uint8Array of length ${t}, not of length=${n.length}`);
}
function xy(n, t = !0) {
  if (n.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (t && n.finished)
    throw new Error("Hash#digest() has already been called");
}
function Yk(n, t) {
  Xk(n);
  const e = t.outputLen;
  if (n.length < e)
    throw new Error(`digestInto() expects output buffer of length at least ${e}`);
}
const Kh = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Zk = (n) => n instanceof Uint8Array, Rh = (n) => new DataView(n.buffer, n.byteOffset, n.byteLength), gn = (n, t) => n << 32 - t | n >>> t, Qk = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!Qk)
  throw new Error("Non little-endian hardware is not supported");
function tB(n) {
  if (typeof n != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof n}`);
  return new Uint8Array(new TextEncoder().encode(n));
}
function jw(n) {
  if (typeof n == "string" && (n = tB(n)), !Zk(n))
    throw new Error(`expected Uint8Array, got ${typeof n}`);
  return n;
}
class eB {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
}
function Ww(n) {
  const t = (r) => n().update(jw(r)).digest(), e = n();
  return t.outputLen = e.outputLen, t.blockLen = e.blockLen, t.create = () => n(), t;
}
function nB(n = 32) {
  if (Kh && typeof Kh.getRandomValues == "function")
    return Kh.getRandomValues(new Uint8Array(n));
  throw new Error("crypto.getRandomValues must be defined");
}
function rB(n, t, e, r) {
  if (typeof n.setBigUint64 == "function")
    return n.setBigUint64(t, e, r);
  const i = BigInt(32), a = BigInt(4294967295), l = Number(e >> i & a), c = Number(e & a), d = r ? 4 : 0, h = r ? 0 : 4;
  n.setUint32(t + d, l, r), n.setUint32(t + h, c, r);
}
class Gw extends eB {
  constructor(t, e, r, i) {
    super(), this.blockLen = t, this.outputLen = e, this.padOffset = r, this.isLE = i, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(t), this.view = Rh(this.buffer);
  }
  update(t) {
    xy(this);
    const { view: e, buffer: r, blockLen: i } = this;
    t = jw(t);
    const a = t.length;
    for (let l = 0; l < a; ) {
      const c = Math.min(i - this.pos, a - l);
      if (c === i) {
        const d = Rh(t);
        for (; i <= a - l; l += i)
          this.process(d, l);
        continue;
      }
      r.set(t.subarray(l, l + c), this.pos), this.pos += c, l += c, this.pos === i && (this.process(e, 0), this.pos = 0);
    }
    return this.length += t.length, this.roundClean(), this;
  }
  digestInto(t) {
    xy(this), Yk(t, this), this.finished = !0;
    const { buffer: e, view: r, blockLen: i, isLE: a } = this;
    let { pos: l } = this;
    e[l++] = 128, this.buffer.subarray(l).fill(0), this.padOffset > i - l && (this.process(r, 0), l = 0);
    for (let y = l; y < i; y++)
      e[y] = 0;
    rB(r, i - 8, BigInt(this.length * 8), a), this.process(r, 0);
    const c = Rh(t), d = this.outputLen;
    if (d % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const h = d / 4, g = this.get();
    if (h > g.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let y = 0; y < h; y++)
      c.setUint32(4 * y, g[y], a);
  }
  digest() {
    const { buffer: t, outputLen: e } = this;
    this.digestInto(t);
    const r = t.slice(0, e);
    return this.destroy(), r;
  }
  _cloneInto(t) {
    t || (t = new this.constructor()), t.set(...this.get());
    const { blockLen: e, buffer: r, length: i, finished: a, destroyed: l, pos: c } = this;
    return t.length = i, t.pos = c, t.finished = a, t.destroyed = l, i % e && t.buffer.set(r), t;
  }
}
const Nd = /* @__PURE__ */ BigInt(2 ** 32 - 1), kp = /* @__PURE__ */ BigInt(32);
function Xw(n, t = !1) {
  return t ? { h: Number(n & Nd), l: Number(n >> kp & Nd) } : { h: Number(n >> kp & Nd) | 0, l: Number(n & Nd) | 0 };
}
function iB(n, t = !1) {
  let e = new Uint32Array(n.length), r = new Uint32Array(n.length);
  for (let i = 0; i < n.length; i++) {
    const { h: a, l } = Xw(n[i], t);
    [e[i], r[i]] = [a, l];
  }
  return [e, r];
}
const sB = (n, t) => BigInt(n >>> 0) << kp | BigInt(t >>> 0), oB = (n, t, e) => n >>> e, aB = (n, t, e) => n << 32 - e | t >>> e, uB = (n, t, e) => n >>> e | t << 32 - e, cB = (n, t, e) => n << 32 - e | t >>> e, lB = (n, t, e) => n << 64 - e | t >>> e - 32, fB = (n, t, e) => n >>> e - 32 | t << 64 - e, mB = (n, t) => t, dB = (n, t) => n, hB = (n, t, e) => n << e | t >>> 32 - e, pB = (n, t, e) => t << e | n >>> 32 - e, gB = (n, t, e) => t << e - 32 | n >>> 64 - e, yB = (n, t, e) => n << e - 32 | t >>> 64 - e;
function wB(n, t, e, r) {
  const i = (t >>> 0) + (r >>> 0);
  return { h: n + e + (i / 2 ** 32 | 0) | 0, l: i | 0 };
}
const TB = (n, t, e) => (n >>> 0) + (t >>> 0) + (e >>> 0), NB = (n, t, e, r) => t + e + r + (n / 2 ** 32 | 0) | 0, EB = (n, t, e, r) => (n >>> 0) + (t >>> 0) + (e >>> 0) + (r >>> 0), bB = (n, t, e, r, i) => t + e + r + i + (n / 2 ** 32 | 0) | 0, kB = (n, t, e, r, i) => (n >>> 0) + (t >>> 0) + (e >>> 0) + (r >>> 0) + (i >>> 0), BB = (n, t, e, r, i, a) => t + e + r + i + a + (n / 2 ** 32 | 0) | 0, SB = {
  fromBig: Xw,
  split: iB,
  toBig: sB,
  shrSH: oB,
  shrSL: aB,
  rotrSH: uB,
  rotrSL: cB,
  rotrBH: lB,
  rotrBL: fB,
  rotr32H: mB,
  rotr32L: dB,
  rotlSH: hB,
  rotlSL: pB,
  rotlBH: gB,
  rotlBL: yB,
  add: wB,
  add3L: TB,
  add3H: NB,
  add4L: EB,
  add4H: bB,
  add5H: BB,
  add5L: kB
}, Jt = SB, [IB, OB] = /* @__PURE__ */ (() => Jt.split([
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
].map((n) => BigInt(n))))(), Xa = /* @__PURE__ */ new Uint32Array(80), Ya = /* @__PURE__ */ new Uint32Array(80);
class vB extends Gw {
  constructor() {
    super(128, 64, 16, !1), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209;
  }
  // prettier-ignore
  get() {
    const { Ah: t, Al: e, Bh: r, Bl: i, Ch: a, Cl: l, Dh: c, Dl: d, Eh: h, El: g, Fh: y, Fl: T, Gh: b, Gl: O, Hh: x, Hl: L } = this;
    return [t, e, r, i, a, l, c, d, h, g, y, T, b, O, x, L];
  }
  // prettier-ignore
  set(t, e, r, i, a, l, c, d, h, g, y, T, b, O, x, L) {
    this.Ah = t | 0, this.Al = e | 0, this.Bh = r | 0, this.Bl = i | 0, this.Ch = a | 0, this.Cl = l | 0, this.Dh = c | 0, this.Dl = d | 0, this.Eh = h | 0, this.El = g | 0, this.Fh = y | 0, this.Fl = T | 0, this.Gh = b | 0, this.Gl = O | 0, this.Hh = x | 0, this.Hl = L | 0;
  }
  process(t, e) {
    for (let F = 0; F < 16; F++, e += 4)
      Xa[F] = t.getUint32(e), Ya[F] = t.getUint32(e += 4);
    for (let F = 16; F < 80; F++) {
      const nt = Xa[F - 15] | 0, J = Ya[F - 15] | 0, Y = Jt.rotrSH(nt, J, 1) ^ Jt.rotrSH(nt, J, 8) ^ Jt.shrSH(nt, J, 7), rt = Jt.rotrSL(nt, J, 1) ^ Jt.rotrSL(nt, J, 8) ^ Jt.shrSL(nt, J, 7), ot = Xa[F - 2] | 0, gt = Ya[F - 2] | 0, Ft = Jt.rotrSH(ot, gt, 19) ^ Jt.rotrBH(ot, gt, 61) ^ Jt.shrSH(ot, gt, 6), Ut = Jt.rotrSL(ot, gt, 19) ^ Jt.rotrBL(ot, gt, 61) ^ Jt.shrSL(ot, gt, 6), Pt = Jt.add4L(rt, Ut, Ya[F - 7], Ya[F - 16]), $t = Jt.add4H(Pt, Y, Ft, Xa[F - 7], Xa[F - 16]);
      Xa[F] = $t | 0, Ya[F] = Pt | 0;
    }
    let { Ah: r, Al: i, Bh: a, Bl: l, Ch: c, Cl: d, Dh: h, Dl: g, Eh: y, El: T, Fh: b, Fl: O, Gh: x, Gl: L, Hh: $, Hl: at } = this;
    for (let F = 0; F < 80; F++) {
      const nt = Jt.rotrSH(y, T, 14) ^ Jt.rotrSH(y, T, 18) ^ Jt.rotrBH(y, T, 41), J = Jt.rotrSL(y, T, 14) ^ Jt.rotrSL(y, T, 18) ^ Jt.rotrBL(y, T, 41), Y = y & b ^ ~y & x, rt = T & O ^ ~T & L, ot = Jt.add5L(at, J, rt, OB[F], Ya[F]), gt = Jt.add5H(ot, $, nt, Y, IB[F], Xa[F]), Ft = ot | 0, Ut = Jt.rotrSH(r, i, 28) ^ Jt.rotrBH(r, i, 34) ^ Jt.rotrBH(r, i, 39), Pt = Jt.rotrSL(r, i, 28) ^ Jt.rotrBL(r, i, 34) ^ Jt.rotrBL(r, i, 39), $t = r & a ^ r & c ^ a & c, fe = i & l ^ i & d ^ l & d;
      $ = x | 0, at = L | 0, x = b | 0, L = O | 0, b = y | 0, O = T | 0, { h: y, l: T } = Jt.add(h | 0, g | 0, gt | 0, Ft | 0), h = c | 0, g = d | 0, c = a | 0, d = l | 0, a = r | 0, l = i | 0;
      const Vt = Jt.add3L(Ft, Pt, fe);
      r = Jt.add3H(Vt, gt, Ut, $t), i = Vt | 0;
    }
    ({ h: r, l: i } = Jt.add(this.Ah | 0, this.Al | 0, r | 0, i | 0)), { h: a, l } = Jt.add(this.Bh | 0, this.Bl | 0, a | 0, l | 0), { h: c, l: d } = Jt.add(this.Ch | 0, this.Cl | 0, c | 0, d | 0), { h, l: g } = Jt.add(this.Dh | 0, this.Dl | 0, h | 0, g | 0), { h: y, l: T } = Jt.add(this.Eh | 0, this.El | 0, y | 0, T | 0), { h: b, l: O } = Jt.add(this.Fh | 0, this.Fl | 0, b | 0, O | 0), { h: x, l: L } = Jt.add(this.Gh | 0, this.Gl | 0, x | 0, L | 0), { h: $, l: at } = Jt.add(this.Hh | 0, this.Hl | 0, $ | 0, at | 0), this.set(r, i, a, l, c, d, h, g, y, T, b, O, x, L, $, at);
  }
  roundClean() {
    Xa.fill(0), Ya.fill(0);
  }
  destroy() {
    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
const JB = /* @__PURE__ */ Ww(() => new vB());
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
BigInt(0);
const xB = BigInt(1), AB = BigInt(2), bh = (n) => n instanceof Uint8Array, UB = /* @__PURE__ */ Array.from({ length: 256 }, (n, t) => t.toString(16).padStart(2, "0"));
function hg(n) {
  if (!bh(n))
    throw new Error("Uint8Array expected");
  let t = "";
  for (let e = 0; e < n.length; e++)
    t += UB[n[e]];
  return t;
}
function Yw(n) {
  if (typeof n != "string")
    throw new Error("hex string expected, got " + typeof n);
  return BigInt(n === "" ? "0" : `0x${n}`);
}
function Zw(n) {
  if (typeof n != "string")
    throw new Error("hex string expected, got " + typeof n);
  const t = n.length;
  if (t % 2)
    throw new Error("padded hex string expected, got unpadded hex of length " + t);
  const e = new Uint8Array(t / 2);
  for (let r = 0; r < e.length; r++) {
    const i = r * 2, a = n.slice(i, i + 2), l = Number.parseInt(a, 16);
    if (Number.isNaN(l) || l < 0)
      throw new Error("Invalid byte sequence");
    e[r] = l;
  }
  return e;
}
function LB(n) {
  return Yw(hg(n));
}
function Dd(n) {
  if (!bh(n))
    throw new Error("Uint8Array expected");
  return Yw(hg(Uint8Array.from(n).reverse()));
}
function Qw(n, t) {
  return Zw(n.toString(16).padStart(t * 2, "0"));
}
function Bp(n, t) {
  return Qw(n, t).reverse();
}
function Za(n, t, e) {
  let r;
  if (typeof t == "string")
    try {
      r = Zw(t);
    } catch (a) {
      throw new Error(`${n} must be valid hex string, got "${t}". Cause: ${a}`);
    }
  else if (bh(t))
    r = Uint8Array.from(t);
  else
    throw new Error(`${n} must be hex string or Uint8Array`);
  const i = r.length;
  if (typeof e == "number" && i !== e)
    throw new Error(`${n} expected ${e} bytes, got ${i}`);
  return r;
}
function Ay(...n) {
  const t = new Uint8Array(n.reduce((r, i) => r + i.length, 0));
  let e = 0;
  return n.forEach((r) => {
    if (!bh(r))
      throw new Error("Uint8Array expected");
    t.set(r, e), e += r.length;
  }), t;
}
const FB = (n) => (AB << BigInt(n - 1)) - xB, qB = {
  bigint: (n) => typeof n == "bigint",
  function: (n) => typeof n == "function",
  boolean: (n) => typeof n == "boolean",
  string: (n) => typeof n == "string",
  stringOrUint8Array: (n) => typeof n == "string" || n instanceof Uint8Array,
  isSafeInteger: (n) => Number.isSafeInteger(n),
  array: (n) => Array.isArray(n),
  field: (n, t) => t.Fp.isValid(n),
  hash: (n) => typeof n == "function" && Number.isSafeInteger(n.outputLen)
};
function pg(n, t, e = {}) {
  const r = (i, a, l) => {
    const c = qB[a];
    if (typeof c != "function")
      throw new Error(`Invalid validator "${a}", expected function`);
    const d = n[i];
    if (!(l && d === void 0) && !c(d, n))
      throw new Error(`Invalid param ${String(i)}=${d} (${typeof d}), expected ${a}`);
  };
  for (const [i, a] of Object.entries(t))
    r(i, a, !1);
  for (const [i, a] of Object.entries(e))
    r(i, a, !0);
  return n;
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const ce = BigInt(0), Yt = BigInt(1), $c = BigInt(2), DB = BigInt(3), Sp = BigInt(4), Uy = BigInt(5), Ly = BigInt(8);
BigInt(9);
BigInt(16);
function te(n, t) {
  const e = n % t;
  return e >= ce ? e : t + e;
}
function PB(n, t, e) {
  if (e <= ce || t < ce)
    throw new Error("Expected power/modulo > 0");
  if (e === Yt)
    return ce;
  let r = Yt;
  for (; t > ce; )
    t & Yt && (r = r * n % e), n = n * n % e, t >>= Yt;
  return r;
}
function yn(n, t, e) {
  let r = n;
  for (; t-- > ce; )
    r *= r, r %= e;
  return r;
}
function Fy(n, t) {
  if (n === ce || t <= ce)
    throw new Error(`invert: expected positive integers, got n=${n} mod=${t}`);
  let e = te(n, t), r = t, i = ce, a = Yt;
  for (; e !== ce; ) {
    const l = r / e, c = r % e, d = i - a * l;
    r = e, e = c, i = a, a = d;
  }
  if (r !== Yt)
    throw new Error("invert: does not exist");
  return te(i, t);
}
function CB(n) {
  const t = (n - Yt) / $c;
  let e, r, i;
  for (e = n - Yt, r = 0; e % $c === ce; e /= $c, r++)
    ;
  for (i = $c; i < n && PB(i, t, n) !== n - Yt; i++)
    ;
  if (r === 1) {
    const l = (n + Yt) / Sp;
    return function(c, d) {
      const h = c.pow(d, l);
      if (!c.eql(c.sqr(h), d))
        throw new Error("Cannot find square root");
      return h;
    };
  }
  const a = (e + Yt) / $c;
  return function(l, c) {
    if (l.pow(c, t) === l.neg(l.ONE))
      throw new Error("Cannot find square root");
    let d = r, h = l.pow(l.mul(l.ONE, i), e), g = l.pow(c, a), y = l.pow(c, e);
    for (; !l.eql(y, l.ONE); ) {
      if (l.eql(y, l.ZERO))
        return l.ZERO;
      let T = 1;
      for (let O = l.sqr(y); T < d && !l.eql(O, l.ONE); T++)
        O = l.sqr(O);
      const b = l.pow(h, Yt << BigInt(d - T - 1));
      h = l.sqr(b), g = l.mul(g, b), y = l.mul(y, h), d = T;
    }
    return g;
  };
}
function KB(n) {
  if (n % Sp === DB) {
    const t = (n + Yt) / Sp;
    return function(e, r) {
      const i = e.pow(r, t);
      if (!e.eql(e.sqr(i), r))
        throw new Error("Cannot find square root");
      return i;
    };
  }
  if (n % Ly === Uy) {
    const t = (n - Uy) / Ly;
    return function(e, r) {
      const i = e.mul(r, $c), a = e.pow(i, t), l = e.mul(r, a), c = e.mul(e.mul(l, $c), a), d = e.mul(l, e.sub(c, e.ONE));
      if (!e.eql(e.sqr(d), r))
        throw new Error("Cannot find square root");
      return d;
    };
  }
  return CB(n);
}
const RB = (n, t) => (te(n, t) & Yt) === Yt, MB = [
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
function $B(n) {
  const t = {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "isSafeInteger",
    BITS: "isSafeInteger"
  }, e = MB.reduce((r, i) => (r[i] = "function", r), t);
  return pg(n, e);
}
function VB(n, t, e) {
  if (e < ce)
    throw new Error("Expected power > 0");
  if (e === ce)
    return n.ONE;
  if (e === Yt)
    return t;
  let r = n.ONE, i = t;
  for (; e > ce; )
    e & Yt && (r = n.mul(r, i)), i = n.sqr(i), e >>= Yt;
  return r;
}
function _B(n, t) {
  const e = new Array(t.length), r = t.reduce((a, l, c) => n.is0(l) ? a : (e[c] = a, n.mul(a, l)), n.ONE), i = n.inv(r);
  return t.reduceRight((a, l, c) => n.is0(l) ? a : (e[c] = n.mul(a, e[c]), n.mul(a, l)), i), e;
}
function tT(n, t) {
  const e = t !== void 0 ? t : n.toString(2).length, r = Math.ceil(e / 8);
  return { nBitLength: e, nByteLength: r };
}
function HB(n, t, e = !1, r = {}) {
  if (n <= ce)
    throw new Error(`Expected Field ORDER > 0, got ${n}`);
  const { nBitLength: i, nByteLength: a } = tT(n, t);
  if (a > 2048)
    throw new Error("Field lengths over 2048 bytes are not supported");
  const l = KB(n), c = Object.freeze({
    ORDER: n,
    BITS: i,
    BYTES: a,
    MASK: FB(i),
    ZERO: ce,
    ONE: Yt,
    create: (d) => te(d, n),
    isValid: (d) => {
      if (typeof d != "bigint")
        throw new Error(`Invalid field element: expected bigint, got ${typeof d}`);
      return ce <= d && d < n;
    },
    is0: (d) => d === ce,
    isOdd: (d) => (d & Yt) === Yt,
    neg: (d) => te(-d, n),
    eql: (d, h) => d === h,
    sqr: (d) => te(d * d, n),
    add: (d, h) => te(d + h, n),
    sub: (d, h) => te(d - h, n),
    mul: (d, h) => te(d * h, n),
    pow: (d, h) => VB(c, d, h),
    div: (d, h) => te(d * Fy(h, n), n),
    // Same as above, but doesn't normalize
    sqrN: (d) => d * d,
    addN: (d, h) => d + h,
    subN: (d, h) => d - h,
    mulN: (d, h) => d * h,
    inv: (d) => Fy(d, n),
    sqrt: r.sqrt || ((d) => l(c, d)),
    invertBatch: (d) => _B(c, d),
    // TODO: do we really need constant cmov?
    // We don't have const-time bigints anyway, so probably will be not very useful
    cmov: (d, h, g) => g ? h : d,
    toBytes: (d) => e ? Bp(d, a) : Qw(d, a),
    fromBytes: (d) => {
      if (d.length !== a)
        throw new Error(`Fp.fromBytes: expected ${a}, got ${d.length}`);
      return e ? Dd(d) : LB(d);
    }
  });
  return Object.freeze(c);
}
function zB(n, t) {
  if (!n.isOdd)
    throw new Error("Field doesn't have isOdd");
  const e = n.sqrt(t);
  return n.isOdd(e) ? n.neg(e) : e;
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const jB = BigInt(0), Mh = BigInt(1);
function WB(n, t) {
  const e = (i, a) => {
    const l = a.negate();
    return i ? l : a;
  }, r = (i) => {
    const a = Math.ceil(t / i) + 1, l = 2 ** (i - 1);
    return { windows: a, windowSize: l };
  };
  return {
    constTimeNegate: e,
    // non-const time multiplication ladder
    unsafeLadder(i, a) {
      let l = n.ZERO, c = i;
      for (; a > jB; )
        a & Mh && (l = l.add(c)), c = c.double(), a >>= Mh;
      return l;
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
    precomputeWindow(i, a) {
      const { windows: l, windowSize: c } = r(a), d = [];
      let h = i, g = h;
      for (let y = 0; y < l; y++) {
        g = h, d.push(g);
        for (let T = 1; T < c; T++)
          g = g.add(h), d.push(g);
        h = g.double();
      }
      return d;
    },
    /**
     * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
     * @param W window size
     * @param precomputes precomputed tables
     * @param n scalar (we don't check here, but should be less than curve order)
     * @returns real and fake (for const-time) points
     */
    wNAF(i, a, l) {
      const { windows: c, windowSize: d } = r(i);
      let h = n.ZERO, g = n.BASE;
      const y = BigInt(2 ** i - 1), T = 2 ** i, b = BigInt(i);
      for (let O = 0; O < c; O++) {
        const x = O * d;
        let L = Number(l & y);
        l >>= b, L > d && (L -= T, l += Mh);
        const $ = x, at = x + Math.abs(L) - 1, F = O % 2 !== 0, nt = L < 0;
        L === 0 ? g = g.add(e(F, a[$])) : h = h.add(e(nt, a[at]));
      }
      return { p: h, f: g };
    },
    wNAFCached(i, a, l, c) {
      const d = i._WINDOW_SIZE || 1;
      let h = a.get(i);
      return h || (h = this.precomputeWindow(i, d), d !== 1 && a.set(i, c(h))), this.wNAF(d, h, l);
    }
  };
}
function GB(n) {
  return $B(n.Fp), pg(n, {
    n: "bigint",
    h: "bigint",
    Gx: "field",
    Gy: "field"
  }, {
    nBitLength: "isSafeInteger",
    nByteLength: "isSafeInteger"
  }), Object.freeze({
    ...tT(n.n, n.nBitLength),
    ...n,
    p: n.Fp.ORDER
  });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const We = BigInt(0), xe = BigInt(1), Ed = BigInt(2), XB = BigInt(8), YB = { zip215: !0 };
function ZB(n) {
  const t = GB(n);
  return pg(n, {
    hash: "function",
    a: "bigint",
    d: "bigint",
    randomBytes: "function"
  }, {
    adjustScalarBytes: "function",
    domain: "function",
    uvRatio: "function",
    mapToCurve: "function"
  }), Object.freeze({ ...t });
}
function QB(n) {
  const t = ZB(n), { Fp: e, n: r, prehash: i, hash: a, randomBytes: l, nByteLength: c, h: d } = t, h = Ed << BigInt(c * 8) - xe, g = e.create, y = t.uvRatio || ((G, v) => {
    try {
      return { isValid: !0, value: e.sqrt(G * e.inv(v)) };
    } catch {
      return { isValid: !1, value: We };
    }
  }), T = t.adjustScalarBytes || ((G) => G), b = t.domain || ((G, v, A) => {
    if (v.length || A)
      throw new Error("Contexts/pre-hash are not supported");
    return G;
  }), O = (G) => typeof G == "bigint" && We < G, x = (G, v) => O(G) && O(v) && G < v, L = (G) => G === We || x(G, h);
  function $(G, v) {
    if (x(G, v))
      return G;
    throw new Error(`Expected valid scalar < ${v}, got ${typeof G} ${G}`);
  }
  function at(G) {
    return G === We ? G : $(G, r);
  }
  const F = /* @__PURE__ */ new Map();
  function nt(G) {
    if (!(G instanceof J))
      throw new Error("ExtendedPoint expected");
  }
  class J {
    constructor(v, A, z, P) {
      if (this.ex = v, this.ey = A, this.ez = z, this.et = P, !L(v))
        throw new Error("x required");
      if (!L(A))
        throw new Error("y required");
      if (!L(z))
        throw new Error("z required");
      if (!L(P))
        throw new Error("t required");
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    static fromAffine(v) {
      if (v instanceof J)
        throw new Error("extended point not allowed");
      const { x: A, y: z } = v || {};
      if (!L(A) || !L(z))
        throw new Error("invalid affine point");
      return new J(A, z, xe, g(A * z));
    }
    static normalizeZ(v) {
      const A = e.invertBatch(v.map((z) => z.ez));
      return v.map((z, P) => z.toAffine(A[P])).map(J.fromAffine);
    }
    // "Private method", don't use it directly
    _setWindowSize(v) {
      this._WINDOW_SIZE = v, F.delete(this);
    }
    // Not required for fromHex(), which always creates valid points.
    // Could be useful for fromAffine().
    assertValidity() {
      const { a: v, d: A } = t;
      if (this.is0())
        throw new Error("bad point: ZERO");
      const { ex: z, ey: P, ez: _, et: it } = this, ft = g(z * z), mt = g(P * P), ct = g(_ * _), dt = g(ct * ct), yt = g(ft * v), Lt = g(ct * g(yt + mt)), xt = g(dt + g(A * g(ft * mt)));
      if (Lt !== xt)
        throw new Error("bad point: equation left != right (1)");
      const qt = g(z * P), Kt = g(_ * it);
      if (qt !== Kt)
        throw new Error("bad point: equation left != right (2)");
    }
    // Compare one point to another.
    equals(v) {
      nt(v);
      const { ex: A, ey: z, ez: P } = this, { ex: _, ey: it, ez: ft } = v, mt = g(A * ft), ct = g(_ * P), dt = g(z * ft), yt = g(it * P);
      return mt === ct && dt === yt;
    }
    is0() {
      return this.equals(J.ZERO);
    }
    negate() {
      return new J(g(-this.ex), this.ey, this.ez, g(-this.et));
    }
    // Fast algo for doubling Extended Point.
    // https://hyperelliptic.org/EFD/g1p/auto-twisted-extended.html#doubling-dbl-2008-hwcd
    // Cost: 4M + 4S + 1*a + 6add + 1*2.
    double() {
      const { a: v } = t, { ex: A, ey: z, ez: P } = this, _ = g(A * A), it = g(z * z), ft = g(Ed * g(P * P)), mt = g(v * _), ct = A + z, dt = g(g(ct * ct) - _ - it), yt = mt + it, Lt = yt - ft, xt = mt - it, qt = g(dt * Lt), Kt = g(yt * xt), N = g(dt * xt), k = g(Lt * yt);
      return new J(qt, Kt, k, N);
    }
    // Fast algo for adding 2 Extended Points.
    // https://hyperelliptic.org/EFD/g1p/auto-twisted-extended.html#addition-add-2008-hwcd
    // Cost: 9M + 1*a + 1*d + 7add.
    add(v) {
      nt(v);
      const { a: A, d: z } = t, { ex: P, ey: _, ez: it, et: ft } = this, { ex: mt, ey: ct, ez: dt, et: yt } = v;
      if (A === BigInt(-1)) {
        const V = g((_ - P) * (ct + mt)), q = g((_ + P) * (ct - mt)), tt = g(q - V);
        if (tt === We)
          return this.double();
        const et = g(it * Ed * yt), Q = g(ft * Ed * dt), ht = Q + et, o = q + V, s = Q - et, u = g(ht * tt), p = g(o * s), w = g(ht * s), E = g(tt * o);
        return new J(u, p, E, w);
      }
      const Lt = g(P * mt), xt = g(_ * ct), qt = g(ft * z * yt), Kt = g(it * dt), N = g((P + _) * (mt + ct) - Lt - xt), k = Kt - qt, U = Kt + qt, C = g(xt - A * Lt), D = g(N * k), H = g(U * C), Z = g(N * C), M = g(k * U);
      return new J(D, H, M, Z);
    }
    subtract(v) {
      return this.add(v.negate());
    }
    wNAF(v) {
      return ot.wNAFCached(this, F, v, J.normalizeZ);
    }
    // Constant-time multiplication.
    multiply(v) {
      const { p: A, f: z } = this.wNAF($(v, r));
      return J.normalizeZ([A, z])[0];
    }
    // Non-constant-time multiplication. Uses double-and-add algorithm.
    // It's faster, but should only be used when you don't care about
    // an exposed private key e.g. sig verification.
    // Does NOT allow scalars higher than CURVE.n.
    multiplyUnsafe(v) {
      let A = at(v);
      return A === We ? rt : this.equals(rt) || A === xe ? this : this.equals(Y) ? this.wNAF(A).p : ot.unsafeLadder(this, A);
    }
    // Checks if point is of small order.
    // If you add something to small order point, you will have "dirty"
    // point with torsion component.
    // Multiplies point by cofactor and checks if the result is 0.
    isSmallOrder() {
      return this.multiplyUnsafe(d).is0();
    }
    // Multiplies point by curve order and checks if the result is 0.
    // Returns `false` is the point is dirty.
    isTorsionFree() {
      return ot.unsafeLadder(this, r).is0();
    }
    // Converts Extended point to default (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    toAffine(v) {
      const { ex: A, ey: z, ez: P } = this, _ = this.is0();
      v == null && (v = _ ? XB : e.inv(P));
      const it = g(A * v), ft = g(z * v), mt = g(P * v);
      if (_)
        return { x: We, y: xe };
      if (mt !== xe)
        throw new Error("invZ was invalid");
      return { x: it, y: ft };
    }
    clearCofactor() {
      const { h: v } = t;
      return v === xe ? this : this.multiplyUnsafe(v);
    }
    // Converts hash string or Uint8Array to Point.
    // Uses algo from RFC8032 5.1.3.
    static fromHex(v, A = !1) {
      const { d: z, a: P } = t, _ = e.BYTES;
      v = Za("pointHex", v, _);
      const it = v.slice(), ft = v[_ - 1];
      it[_ - 1] = ft & -129;
      const mt = Dd(it);
      mt === We || (A ? $(mt, h) : $(mt, e.ORDER));
      const ct = g(mt * mt), dt = g(ct - xe), yt = g(z * ct - P);
      let { isValid: Lt, value: xt } = y(dt, yt);
      if (!Lt)
        throw new Error("Point.fromHex: invalid y coordinate");
      const qt = (xt & xe) === xe, Kt = (ft & 128) !== 0;
      if (!A && xt === We && Kt)
        throw new Error("Point.fromHex: x=0 and x_0=1");
      return Kt !== qt && (xt = g(-xt)), J.fromAffine({ x: xt, y: mt });
    }
    static fromPrivateKey(v) {
      return Ut(v).point;
    }
    toRawBytes() {
      const { x: v, y: A } = this.toAffine(), z = Bp(A, e.BYTES);
      return z[z.length - 1] |= v & xe ? 128 : 0, z;
    }
    toHex() {
      return hg(this.toRawBytes());
    }
  }
  J.BASE = new J(t.Gx, t.Gy, xe, g(t.Gx * t.Gy)), J.ZERO = new J(We, xe, xe, We);
  const { BASE: Y, ZERO: rt } = J, ot = WB(J, c * 8);
  function gt(G) {
    return te(G, r);
  }
  function Ft(G) {
    return gt(Dd(G));
  }
  function Ut(G) {
    const v = c;
    G = Za("private key", G, v);
    const A = Za("hashed private key", a(G), 2 * v), z = T(A.slice(0, v)), P = A.slice(v, 2 * v), _ = Ft(z), it = Y.multiply(_), ft = it.toRawBytes();
    return { head: z, prefix: P, scalar: _, point: it, pointBytes: ft };
  }
  function Pt(G) {
    return Ut(G).pointBytes;
  }
  function $t(G = new Uint8Array(), ...v) {
    const A = Ay(...v);
    return Ft(a(b(A, Za("context", G), !!i)));
  }
  function fe(G, v, A = {}) {
    G = Za("message", G), i && (G = i(G));
    const { prefix: z, scalar: P, pointBytes: _ } = Ut(v), it = $t(A.context, z, G), ft = Y.multiply(it).toRawBytes(), mt = $t(A.context, ft, _, G), ct = gt(it + mt * P);
    at(ct);
    const dt = Ay(ft, Bp(ct, e.BYTES));
    return Za("result", dt, c * 2);
  }
  const Vt = YB;
  function Ht(G, v, A, z = Vt) {
    const { context: P, zip215: _ } = z, it = e.BYTES;
    G = Za("signature", G, 2 * it), v = Za("message", v), i && (v = i(v));
    const ft = Dd(G.slice(it, 2 * it));
    let mt, ct, dt;
    try {
      mt = J.fromHex(A, _), ct = J.fromHex(G.slice(0, it), _), dt = Y.multiplyUnsafe(ft);
    } catch {
      return !1;
    }
    if (!_ && mt.isSmallOrder())
      return !1;
    const yt = $t(P, ct.toRawBytes(), mt.toRawBytes(), v);
    return ct.add(mt.multiplyUnsafe(yt)).subtract(dt).clearCofactor().equals(J.ZERO);
  }
  return Y._setWindowSize(8), {
    CURVE: t,
    getPublicKey: Pt,
    sign: fe,
    verify: Ht,
    ExtendedPoint: J,
    utils: {
      getExtendedPublicKey: Ut,
      // ed25519 private keys are uniform 32b. No need to check for modulo bias, like in secp256k1.
      randomPrivateKey: () => l(e.BYTES),
      /**
       * We're doing scalar multiplication (used in getPublicKey etc) with precomputed BASE_POINT
       * values. This slows down first getPublicKey() by milliseconds (see Speed section),
       * but allows to speed-up subsequent getPublicKey() calls up to 20x.
       * @param windowSize 2, 4, 8, 16
       */
      precompute(G = 8, v = J.BASE) {
        return v._setWindowSize(G), v.multiply(BigInt(3)), v;
      }
    }
  };
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const gg = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949"), qy = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
BigInt(0);
const tS = BigInt(1), Ip = BigInt(2), eS = BigInt(5), Dy = BigInt(10), nS = BigInt(20), rS = BigInt(40), Py = BigInt(80);
function iS(n) {
  const t = gg, e = n * n % t * n % t, r = yn(e, Ip, t) * e % t, i = yn(r, tS, t) * n % t, a = yn(i, eS, t) * i % t, l = yn(a, Dy, t) * a % t, c = yn(l, nS, t) * l % t, d = yn(c, rS, t) * c % t, h = yn(d, Py, t) * d % t, g = yn(h, Py, t) * d % t, y = yn(g, Dy, t) * a % t;
  return { pow_p_5_8: yn(y, Ip, t) * n % t, b2: e };
}
function sS(n) {
  return n[0] &= 248, n[31] &= 127, n[31] |= 64, n;
}
function oS(n, t) {
  const e = gg, r = te(t * t * t, e), i = te(r * r * t, e), a = iS(n * i).pow_p_5_8;
  let l = te(n * r * a, e);
  const c = te(t * l * l, e), d = l, h = te(l * qy, e), g = c === n, y = c === te(-n, e), T = c === te(-n * qy, e);
  return g && (l = d), (y || T) && (l = h), RB(l, e) && (l = te(-l, e)), { isValid: g || y, value: l };
}
const Ra = HB(gg, void 0, !0), yg = {
  // Param: a
  a: BigInt(-1),
  // d is equal to -121665/121666 over finite field.
  // Negative number is P - number, and division is invert(number, P)
  d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"),
  // Finite field 𝔽p over which we'll do calculations; 2n**255n - 19n
  Fp: Ra,
  // Subgroup order: how many points curve has
  // 2n**252n + 27742317777372353535851937790883648493n;
  n: BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"),
  // Cofactor
  h: BigInt(8),
  // Base point (x, y) aka generator point
  Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"),
  Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960"),
  hash: JB,
  randomBytes: nB,
  adjustScalarBytes: sS,
  // dom2
  // Ratio of u to v. Allows us to combine inversion and square root. Uses algo from RFC8032 5.1.3.
  // Constant-time, u/√v
  uvRatio: oS
}, Kc = /* @__PURE__ */ QB(yg);
({
  ...yg
});
({
  ...yg
});
const aS = (Ra.ORDER + BigInt(3)) / BigInt(8);
Ra.pow(Ip, aS);
Ra.sqrt(Ra.neg(Ra.ONE));
(Ra.ORDER - BigInt(5)) / BigInt(8);
BigInt(486662);
zB(Ra, Ra.neg(BigInt(486664)));
BigInt("25063068953384623474111414158702152701244531502492656460079210482610430750235");
BigInt("54469307008909316920995813868745141605393597292927456921205312896311721017578");
BigInt("1159843021668779879193775521855586647937357759715417654439879720876111806838");
BigInt("40440834346308536858101042469323190826248399146238708352240133220865137265952");
BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
const eT = () => new Error("invalid size"), nT = () => new Error("destination is required"), rT = () => new Error("amount is required"), iT = () => new Error("currency is required"), fl = () => new Error("invalid currency"), Zm = () => new Error("unexpected error"), uS = () => new Error("cannot derive nonce from both clientSecret and idempotencyKey"), sT = () => new Error("invalid value"), oT = () => new Error("invalid mode"), $h = () => new Error("invalid address"), wg = () => new Error("login is required"), Qm = () => new Error("login verifier is required"), Tg = () => new Error("login domain is required"), cS = () => new Error("invalid login domain"), lS = () => new Error("login subdomains are not supported"), fS = () => new Error("login IP addresses are not supported"), mS = () => new Error("login localhost is not supported"), dS = () => new Error("login ports are not supported"), Cy = () => new Error("login expected domain name but received a path"), Ky = 32, hS = /^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]+$/;
class mn {
  /**
   * Constructs a new PublicKey instance.
   *
   * @param publicKey - The raw public key as a Uint8Array.
   */
  constructor(t) {
    if (t.length !== Ky)
      throw $h();
    this.value = t;
  }
  /**
   * Constructs a PublicKey instance from its Base58 representation.
   *
   * @param base58 - The Base58 encoded public key string.
   * @returns A new PublicKey instance.
   */
  static fromBase58(t) {
    if (!t.match(hS))
      throw $h();
    const e = Xd.decode(t);
    if (e.length !== Ky)
      throw $h();
    return new mn(e);
  }
  /**
   * Converts the public key to a Buffer.
   *
   * @returns The public key as a Buffer.
   */
  toBuffer() {
    return mg.Buffer.from([...this.value]);
  }
  /**
   * Encodes the public key into its Base58 representation.
   *
   * @returns The Base58 encoded public key string.
   */
  toBase58() {
    return Xd.encode(this.value);
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
  verify(t, e) {
    return Kc.verify(e, new Uint8Array(t), this.value);
  }
}
class su {
  /**
   * Constructs a new Keypair instance.
   *
   * @param privateKey - Private key of the key pair.
   * @param publicKey - Public key of the key pair.
   */
  constructor(t, e) {
    this.privateKey = t, this.publicKey = e;
  }
  /**
   * Generates a new random Keypair.
   *
   * @returns A new Keypair instance.
   */
  static generate() {
    const t = Kc.utils.randomPrivateKey(), e = Kc.getPublicKey(t);
    return new su(t, e);
  }
  /**
   * Constructs a Keypair from a given secret key.
   *
   * @param secretKey - Secret key to derive the Keypair from.
   * @returns A new Keypair instance.
   */
  static fromSecretKey(t) {
    const e = t.subarray(0, 32), r = Kc.getPublicKey(e);
    return new su(e, r);
  }
  /**
   * Constructs a Keypair from a given seed.
   *
   * @param seed - Seed to derive the Keypair from.
   * @returns A new Keypair instance.
   */
  static fromSeed(t) {
    return su.fromSecretKey(t);
  }
  /**
   * Constructs a Keypair from a raw private key.
   *
   * @param rawPrivateKey - Raw private key to derive the Keypair from.
   * @returns A new Keypair instance.
   */
  static fromRawPrivateKey(t) {
    const e = Kc.getPublicKey(t);
    return new su(t, e);
  }
  /**
   * Retrieves the public key as a PublicKey object.
   *
   * @returns The public key.
   */
  getPublicKey() {
    return new mn(this.publicKey);
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
  sign(t) {
    return Kc.sign(new Uint8Array(t), this.privateKey);
  }
  /**
   * Verifies a message signature against the public key.
   *
   * @param message - The message to verify.
   * @param signature - The signature to verify against.
   * @returns True if the signature is valid, false otherwise.
   */
  verify(t, e) {
    return Kc.verify(e, new Uint8Array(t), this.publicKey);
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
  static decode(t) {
    const e = Buffer.from(t, "base64");
    return su.fromRawPrivateKey(e);
  }
}
const Yd = [
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
function pS(n) {
  const t = Yd.indexOf(n);
  if (t === -1)
    throw fl();
  return t;
}
function gS(n) {
  if (n < 0 || n >= Yd.length)
    throw fl();
  return Yd[n];
}
function aT(n) {
  return Yd.indexOf(n) !== -1;
}
var we;
(function(n) {
  n[n.Cash = 0] = "Cash", n[n.GiftCard = 1] = "GiftCard", n[n.RequestPayment = 2] = "RequestPayment", n[n.RequestLogin = 3] = "RequestLogin";
})(we || (we = {}));
class yl {
  /**
   * Construct a new CodePayload.
   *
   * @param opt - The options for constructing the payload.
   */
  constructor(t) {
    if (this.kind = t.kind, this.amount = t.amount, this.nonce = t.nonce, t.currency && !aT(t.currency))
      throw fl();
    this.currency = t.currency;
  }
  isCash() {
    return this.kind === we.Cash && this.amount != null;
  }
  isGiftCard() {
    return this.kind === we.GiftCard && this.amount != null;
  }
  isRequestPayment() {
    return this.kind === we.RequestPayment && this.currency != null && this.amount != null;
  }
  /**
   * Validates the payload, throwing an error if invalid.
   */
  validate() {
    if (this.kind === we.RequestPayment && !this.currency)
      throw fl();
    if ((this.kind === we.Cash || this.kind === we.GiftCard || this.kind === we.RequestPayment) && !this.amount)
      throw sT();
  }
  /**
   * Convert the payload to its binary representation.
   *
   * @returns A Uint8Array containing the binary representation of the payload.
   */
  toBinary() {
    const t = new Uint8Array(20);
    if (t[0] = this.kind, this.validate(), this.isRequestPayment()) {
      if (!this.currency)
        throw fl();
      const e = pS(this.currency);
      t[1] = e;
      for (let r = 0; r < 7; r++)
        t[r + 2] = Number(this.amount >> BigInt(8 * r) & BigInt(255));
    }
    if (this.isCash() || this.isGiftCard())
      for (let e = 0; e < 8; e++)
        t[e + 1] = Number(this.amount >> BigInt(8 * e) & BigInt(255));
    return t.set(this.nonce, 9), t;
  }
  /**
   * Create a CodePayload from its binary representation.
   *
   * @param data - The binary data.
   * @returns A new instance of CodePayload.
   */
  static fromData(t) {
    if (t.length !== yl.MAX_LENGTH)
      throw eT();
    const e = t[0];
    let r, i, a;
    if (e === we.RequestPayment) {
      const l = t[1];
      a = gS(l), r = t.slice(2, 9).reduce((c, d, h) => c + (BigInt(d) << BigInt(8 * h)), BigInt(0));
    }
    return (e === we.Cash || e === we.GiftCard) && (r = t.slice(1, 9).reduce((l, c, d) => l + (BigInt(c) << BigInt(8 * d)), BigInt(0))), i = t.slice(9), new yl({ kind: e, amount: r, currency: a, nonce: i });
  }
}
yl.MAX_LENGTH = 20;
function yS(n) {
  if (n.mode === void 0)
    throw oT();
  if (n.idempotencyKey && n.clientSecret)
    throw uS();
}
function wS(n) {
  if (n.destination === void 0)
    throw nT();
  if (n.amount === void 0)
    throw rT();
  if (n.currency === void 0)
    throw iT();
  if (!aT(n.currency))
    throw fl();
  mn.fromBase58(n.destination);
}
function Ry(n) {
  if (n.login === void 0)
    throw wg();
  if (n.login.domain === void 0)
    throw Tg();
  if (n.login.verifier === void 0)
    throw Qm();
  let t;
  try {
    t = new URL(n.login.domain);
  } catch {
  }
  if (t)
    throw Cy();
  try {
    t = new URL(`http://${n.login.domain}`);
  } catch {
    throw cS();
  }
  if (t.hostname.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/))
    throw fS();
  if (t.hostname.split(".").length > 2)
    throw lS();
  if (t.hostname === "localhost")
    throw mS();
  if (t.port)
    throw dS();
  if (t.pathname !== "/" || n.login.domain.includes("/"))
    throw Cy();
  mn.fromBase58(n.login.verifier);
}
function My(n) {
  if (n.signers) {
    for (const t of n.signers)
      if (!t.sign && typeof t.sign != "function")
        throw sT();
  }
}
function Ng(n) {
  switch (yS(n), n.mode) {
    case "login":
      Ry(n), n.signers && My(n);
      break;
    case "payment":
      wS(n), n.login && Ry(n), n.signers && My(n);
      break;
    default:
      throw oT();
  }
}
class Ct {
  /**
   * Constructs a new Kin instance.
   * @param whole - The whole part of the Kin amount.
   * @param quarks - The fractional part (quarks) of the Kin amount. Default is 0.
   */
  constructor(t, e = 0) {
    this.whole = BigInt(t), this.quarks = BigInt(e), this.normalize();
  }
  /**
   * Normalizes the Kin values ensuring the `quarks` value is within the valid range.
   * Any overflow is added to the `whole` value.
   */
  normalize() {
    const t = this.quarks / Ct.quarksPerKin;
    this.whole += t, this.quarks %= Ct.quarksPerKin;
  }
  /**
   * Converts the Kin amount to its equivalent in quarks.
   * @returns The total value in quarks.
   */
  toQuarks() {
    return this.whole * Ct.quarksPerKin + this.quarks;
  }
  /**
   * Converts the Kin amount to a decimal representation.
   * @returns The Kin value as a decimal number.
   */
  toDecimal() {
    return Number(this.whole) + Number(this.quarks) / Number(Ct.quarksPerKin);
  }
  /**
   * Creates a Kin instance from a given quarks value.
   * @param quarks - The value in quarks.
   * @returns A new Kin instance.
   */
  static fromQuarks(t) {
    const e = Number(t / Ct.quarksPerKin), r = Number(t % Ct.quarksPerKin);
    return new Ct(e, r);
  }
  /**
   * Creates a Kin instance from a decimal value.
   * @param decimal - The decimal value to convert.
   * @returns A new Kin instance.
   */
  static fromDecimal(t) {
    const e = BigInt(Math.round(t * Number(Ct.quarksPerKin)));
    return Ct.fromQuarks(e);
  }
  /**
   * Adds another Kin value to the current one.
   * @param other - The other Kin value to add.
   * @returns A new Kin instance with the summed value.
   */
  add(t) {
    const e = this.toQuarks() + t.toQuarks();
    return Ct.fromQuarks(e);
  }
  /**
   * Subtracts another Kin value from the current one.
   * @param other - The other Kin value to subtract.
   * @returns A new Kin instance with the difference.
   */
  subtract(t) {
    const e = this.toQuarks() - t.toQuarks();
    return Ct.fromQuarks(e);
  }
  /**
   * Multiplies the current Kin value by a factor.
   * @param factor - The multiplication factor.
   * @returns A new Kin instance with the multiplied value.
   */
  multiply(t) {
    const e = this.toQuarks() * BigInt(t);
    return Ct.fromQuarks(e);
  }
  /**
   * Divides the current Kin value by a divisor.
   * @param divisor - The divisor.
   * @returns A new Kin instance with the divided value.
   */
  divide(t) {
    const e = this.toQuarks() / BigInt(t);
    return Ct.fromQuarks(e);
  }
}
Ct.decimals = 5n;
Ct.quarksPerKin = 100000n;
Ct.mintAddress = "kinXdEcpDQeHPEuQnqmUgtYykqKGVFq6CeVX5iAHJq6";
Ct.mint = mn.fromBase58(Ct.mintAddress);
Ct.zero = new Ct(0, 0);
Ct.one = new Ct(1, 0);
Ct.max = new Ct(Number.MAX_SAFE_INTEGER, Number(Ct.quarksPerKin - 1n));
Ct.min = new Ct(Number.MIN_SAFE_INTEGER, 0);
const TS = (n, t, e) => n & t ^ ~n & e, NS = (n, t, e) => n & t ^ n & e ^ t & e, ES = /* @__PURE__ */ new Uint32Array([
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
]), Qa = /* @__PURE__ */ new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]), tu = /* @__PURE__ */ new Uint32Array(64);
class bS extends Gw {
  constructor() {
    super(64, 32, 8, !1), this.A = Qa[0] | 0, this.B = Qa[1] | 0, this.C = Qa[2] | 0, this.D = Qa[3] | 0, this.E = Qa[4] | 0, this.F = Qa[5] | 0, this.G = Qa[6] | 0, this.H = Qa[7] | 0;
  }
  get() {
    const { A: t, B: e, C: r, D: i, E: a, F: l, G: c, H: d } = this;
    return [t, e, r, i, a, l, c, d];
  }
  // prettier-ignore
  set(t, e, r, i, a, l, c, d) {
    this.A = t | 0, this.B = e | 0, this.C = r | 0, this.D = i | 0, this.E = a | 0, this.F = l | 0, this.G = c | 0, this.H = d | 0;
  }
  process(t, e) {
    for (let y = 0; y < 16; y++, e += 4)
      tu[y] = t.getUint32(e, !1);
    for (let y = 16; y < 64; y++) {
      const T = tu[y - 15], b = tu[y - 2], O = gn(T, 7) ^ gn(T, 18) ^ T >>> 3, x = gn(b, 17) ^ gn(b, 19) ^ b >>> 10;
      tu[y] = x + tu[y - 7] + O + tu[y - 16] | 0;
    }
    let { A: r, B: i, C: a, D: l, E: c, F: d, G: h, H: g } = this;
    for (let y = 0; y < 64; y++) {
      const T = gn(c, 6) ^ gn(c, 11) ^ gn(c, 25), b = g + T + TS(c, d, h) + ES[y] + tu[y] | 0, O = (gn(r, 2) ^ gn(r, 13) ^ gn(r, 22)) + NS(r, i, a) | 0;
      g = h, h = d, d = c, c = l + b | 0, l = a, a = i, i = r, r = b + O | 0;
    }
    r = r + this.A | 0, i = i + this.B | 0, a = a + this.C | 0, l = l + this.D | 0, c = c + this.E | 0, d = d + this.F | 0, h = h + this.G | 0, g = g + this.H | 0, this.set(r, i, a, l, c, d, h, g);
  }
  roundClean() {
    tu.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
const uT = /* @__PURE__ */ Ww(() => new bS());
class Me {
  /**
   * Constructor for an idempotency key.
   * @param {Uint8Array} data The value to initialize the idempotency key with. If not specified, a random Uint8Array of length IdempotencyKey.MAX_LENGTH is used.
   */
  constructor(t = new Uint8Array(Me.MAX_LENGTH)) {
    if (t.length != Me.MAX_LENGTH)
      throw eT();
    this.value = t;
  }
  /**
   * Creates a new idempotency key from a client secret string.
   * @param {string} data The client secret to parse into an idempotency key.
   * @returns {IdempotencyKey} An IdempotencyKey object representing the decoded client secret.
   */
  static fromClientSecret(t) {
    return new Me(Xd.decode(t));
  }
  /**
   * Creates a new idempotency key from a seed string.
   * @param {string} seed The seed to create the idempotency key with.
   * @returns {IdempotencyKey} An IdempotencyKey object representing the created idempotency key.
   */
  static fromSeed(t) {
    return new Me(uT(t).subarray(0, Me.MAX_LENGTH));
  }
  /**
   * Generates a random idempotency key.
   * @returns {IdempotencyKey} An IdempotencyKey object representing the generated key.
   */
  static generate() {
    const t = su.generate().getPrivateValue().subarray(0, Me.MAX_LENGTH);
    return new Me(t);
  }
  /**
   * Converts the idempotency key to a base58 string.
   * @returns {string} A base58 encoded string representing the idempotency key.
   */
  toString() {
    return Xd.encode(this.value);
  }
}
Me.MAX_LENGTH = 11;
function kS(n) {
  return su.fromSeed(uT(n.toBinary()));
}
class cT {
  /**
   * Constructs a new PaymentRequestIntent instance.
   *
   * @param opt - The payment request options.
   */
  constructor(t) {
    this.options = {
      ...t
    }, this.init(), this.validate(), this.options.idempotencyKey ? this.nonce = Me.fromSeed(this.options.idempotencyKey) : this.options.clientSecret ? this.nonce = Me.fromClientSecret(this.options.clientSecret) : this.nonce = Me.generate(), this.rendezvousPayload = this.toPayload(), this.rendezvousKeypair = kS(this.rendezvousPayload);
  }
  /**
   * Constructs a SendMessageRequest message to be sent to the Code Sequencer.
   */
  async getSendMessageRequestProto() {
    const { signature: t, envelope: e } = this.sign();
    return new Zn({
      message: e,
      rendezvousKey: {
        value: this.rendezvousKeypair.getPublicKey().value
      },
      signature: {
        value: t
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
class Eg extends cT {
  /**
   * Constructs a new PaymentRequestIntent instance.
   *
   * @param opt - The payment request options.
   */
  constructor(t) {
    super({
      ...t,
      // Normalize currency to lowercase 
      // (just in case the end user is not using TypeScript)
      currency: t.currency && t.currency.toLowerCase(),
      mode: "payment"
    });
  }
  init() {
    this.options.amount !== void 0 && (this.options.amount = parseFloat(this.options.amount.toFixed(2)), this.convertedAmount = parseInt((this.options.amount * 100).toFixed()));
  }
  toPayload() {
    const t = we.RequestPayment, e = BigInt(this.convertedAmount), r = this.nonce.value;
    return new yl({ kind: t, amount: e, nonce: r, currency: this.options.currency });
  }
  /**
   * Validates the payment request options.
   */
  validate() {
    if (Ng(this.options), !this.options.destination)
      throw nT();
    if (!this.options.amount)
      throw rT();
    if (!this.options.currency)
      throw iT();
    if (!this.convertedAmount)
      throw Zm();
  }
  /**
   * Converts the payment request intent to its protobuf representation.
   *
   * @returns The protobuf representation of the payment request intent.
   */
  toProto() {
    const t = mn.fromBase58(this.options.destination), { currency: e, amount: r } = this.options;
    let i;
    e === "kin" ? i = {
      case: "exact",
      value: new ue({
        currency: "kin",
        exchangeRate: 1,
        quarks: Ct.fromDecimal(r).toQuarks(),
        nativeAmount: r
      })
    } : i = {
      case: "partial",
      value: new an({
        currency: e,
        nativeAmount: r
      })
    };
    const a = new Qn({
      requestorAccount: new W({
        value: t.toBuffer()
      }),
      exchangeData: i
    });
    return new ve({
      kind: {
        case: "requestToReceiveBill",
        value: a
      }
    });
  }
  /**
   * Signs the payment request intent.
   *
   * @returns A signed intent containing the message, intent, and signature.
   */
  sign() {
    const t = this.toProto(), e = t.kind.value;
    if (!e)
      throw Zm();
    const r = this.rendezvousKeypair.sign(t.toBinary()), i = this.rendezvousKeypair.getPublicKey().toBase58(), a = e.toBinary();
    return {
      envelope: t,
      signedBytes: a,
      intent: i,
      signature: r
    };
  }
}
class BS extends Eg {
  /**
   * Constructs a new PaymentRequestIntent instance.
   *
   * @param opt - The payment request options.
   */
  constructor(t) {
    super(t);
    const { signers: e } = t, { domain: r, verifier: i } = t.login;
    this.domain = r, this.verifier = mn.fromBase58(i), e && (this.signer = e.find((a) => a.getPublicKey().toBase58() === i));
  }
  /**
   * Validates the payment request options.
   */
  validate() {
    if (super.validate(), !this.options.login)
      throw wg();
    if (!this.options.login.domain)
      throw Tg();
    if (!this.options.login.verifier)
      throw Qm();
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
      throw Zm();
    return t.domain = new Fe({
      value: this.domain
    }), t.verifier = new W({
      value: this.verifier.toBuffer()
    }), t.rendezvousKey = new W({
      value: this.rendezvousKeypair.getPublicKey().toBuffer()
    }), new ve({
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
      throw Qm();
    const t = this.toProto(), e = t.kind.value;
    if (!e)
      throw Zm();
    e.signature = new Tt({
      value: this.signer.sign(e.toBinary())
    });
    const r = this.rendezvousKeypair.sign(t.toBinary()), i = this.rendezvousKeypair.getPublicKey().toBase58(), a = e.toBinary();
    return {
      envelope: t,
      signedBytes: a,
      intent: i,
      signature: r
    };
  }
}
class SS extends cT {
  /**
   * Constructs a new PaymentRequestIntent instance.
   *
   * @param opt - The payment request options.
   */
  constructor(t) {
    super({
      ...t,
      mode: "login"
    });
    const { signers: e } = t, { domain: r, verifier: i } = t.login;
    this.domain = r, this.verifier = mn.fromBase58(i), e && (this.signer = e.find((a) => a.getPublicKey().toBase58() === i));
  }
  init() {
  }
  toPayload() {
    const t = we.RequestLogin, e = this.nonce.value;
    return new yl({ kind: t, nonce: e });
  }
  /**
   * Validates the payment request options.
   */
  validate() {
    if (Ng(this.options), !this.options.login)
      throw wg();
    if (!this.options.login.domain)
      throw Tg();
    if (!this.options.login.verifier)
      throw Qm();
  }
  /**
   * Converts the payment request intent to its protobuf representation.
   *
   * @returns The protobuf representation of the payment request intent.
   */
  toProto() {
    const t = new tr({
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
    return new ve({
      kind: {
        case: "requestToLogin",
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
      throw Qm();
    const t = this.toProto(), e = t.kind.value;
    if (!e)
      throw Zm();
    e.signature = new Tt({
      value: this.signer.sign(e.toBinary())
    });
    const r = this.rendezvousKeypair.sign(t.toBinary()), i = this.rendezvousKeypair.getPublicKey().toBase58(), a = e.toBinary();
    return {
      envelope: t,
      signedBytes: a,
      intent: i,
      signature: r
    };
  }
}
function IS(n) {
  return typeof btoa == "function" ? btoa(n) : mg.Buffer.from(n, "binary").toString("base64");
}
function ad(n) {
  return encodeURIComponent(IS(JSON.stringify(n ?? {})));
}
const OS = () => new Error("Config not initialized");
let Pd;
const vS = (n) => {
  if (n.codeSdk === void 0)
    throw new Error("codeSdk path is required");
  Pd = cn(n);
}, ud = () => {
  if (!Pd)
    throw OS;
  return {
    config: Pd,
    codeSdk: () => Pd.value.codeSdk
  };
};
class Tl {
  /**
   * Constructs an EventChannel.
   * @param id - Identifier for the connection.
   * @param targetWindow - The iframe element to communicate with. If not provided, communicates with parent window.
   */
  constructor(t = Tl.getId(), e) {
    this.listeners = {}, this.targetWindow = null, this.readyResolver = null, this.setTargetWindow = (r) => {
      this.readyPromise = new Promise((i) => {
        this.readyResolver = i;
      }), r != null && r.contentWindow ? (this.targetWindow = r.contentWindow, r.addEventListener("load", () => {
        this.readyResolver && this.readyResolver();
      })) : (this.targetWindow = window.parent, this.readyResolver && this.readyResolver());
    }, this.emit = async (r, i) => {
      var a;
      await this.ready(), this.targetWindow && this.targetWindow.postMessage({
        id: this.connectionId,
        type: "event",
        payload: { event: r, args: i }
      }, "*");
      const l = r;
      (a = this.listeners[l]) == null || a.forEach((c) => {
        try {
          c(i);
        } catch (d) {
          console.error(`Error in listener for event "${l}": ${d}`);
        }
      });
    }, this.on = (r, i) => {
      const a = (l) => {
        const c = l;
        window.addEventListener("message", (d) => {
          d.data.type === "event" && d.data.payload.event === c && d.data.id === this.connectionId && i(d.data.payload.args);
        }), this.listeners[c] = [...this.listeners[c] || [], i];
      };
      Array.isArray(r) ? r.forEach((l) => a(l)) : a(r);
    }, this.connectionId = t, this.setTargetWindow(e);
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
Tl.getId = () => Math.random().toString(36).substring(2, 15);
const JS = ["width", "height"], xS = /* @__PURE__ */ wl({
  __name: "IntentRequestButton",
  emits: ["resize", "invoke"],
  setup(n, { emit: t }) {
    const e = ud(), r = fn("options"), i = (r == null ? void 0 : r.mode) ?? "payment", a = new Tl(), l = `${e.codeSdk()}/${i}-request-button/#/${a.id}/p=${ad(r)}`;
    console.log("url", l);
    const c = cn(null), d = cn(0), h = cn(0);
    yh(() => {
      c.value && (a.on("resize", (y) => {
        const { width: T, height: b } = y;
        c.value && (d.value = T, h.value = b);
      }), a.on("invoke", () => {
        t("invoke", void 0);
      }));
    });
    function g() {
      const y = (T) => T + " !important";
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
    return (y, T) => (Te(), vc("iframe", {
      ref_key: "el",
      ref: c,
      src: l,
      width: d.value,
      height: h.value,
      frameborder: "0",
      allowtransparency: "true",
      scrolling: "no",
      name: "payment-request-button",
      referrerpolicy: "no-referrer",
      style: Fc(g())
    }, null, 12, JS));
  }
}), lT = /* @__PURE__ */ wl({
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
  setup(n, { emit: t }) {
    const e = ud(), r = fn("options"), i = (r == null ? void 0 : r.mode) ?? "payment", a = new Tl(), l = `${e.codeSdk()}/${i}-request-modal-desktop/#/${a.id}/p=${ad(r)}`, c = cn(null);
    console.log("url", l), a.on("codeScanned", () => {
      t("codeScanned");
    }), a.on("clientRejectedPayment", () => {
      t("clientRejectedPayment");
    }), a.on("clientRejectedLogin", () => {
      t("clientRejectedLogin");
    }), a.on("intentSubmitted", () => {
      t("intentSubmitted");
    }), a.on("error", (h) => {
      `${h}`.includes("NGHTTP2_INTERNAL_ERROR") ? (console.warn("CodeSDK: GRPC stream closed."), t("streamClosed")) : (console.error(`CodeSDK: ${h}`), t("error", h));
    }), a.on("streamTimeout", () => {
      console.warn("CodeSDK: Websocket Stream timeout."), t("streamTimeout");
    }), a.on("streamClosed", () => {
      console.warn("CodeSDK: Websocket Stream closed."), t("streamClosed");
    }), yh(() => {
      c.value && (a.setTargetWindow(c.value), t("channelCreated", a));
    }), uw(() => {
      var h, g;
      const { clientSecret: y, idempotencyKey: T, confirmParams: b } = r ?? {};
      y && a.emit("updatedClientSecret", { value: y }), T && a.emit("updatedIdempotencyKey", { value: T }), b && ((h = b.success) != null && h.url && a.emit("updatedSuccessUrl", { value: b.success.url }), (g = b.cancel) != null && g.url && a.emit("updatedCancelUrl", { value: b.cancel.url }));
    });
    function d() {
      const h = (g) => g + " !important";
      return {
        position: h("fixed"),
        inset: h("0"),
        zIndex: h("2147483647"),
        overflow: h("hidden"),
        width: h("100dvw"),
        height: h("100dvh"),
        // We have to set this to make sure the iframe stays transparent.
        // Completely counter-intuitive.
        // https://bugs.chromium.org/p/chromium/issues/detail?id=1150352
        colorScheme: h("light")
      };
    }
    return (h, g) => (Te(), vc("iframe", {
      ref_key: "el",
      ref: c,
      src: l,
      frameborder: "0",
      allowTransparency: "true",
      scrolling: "no",
      name: "payment-request-card",
      referrerpolicy: "no-referrer",
      style: Fc(d())
    }, null, 4));
  }
}), AS = /* @__PURE__ */ wl({
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
  setup(n, { emit: t }) {
    const e = ud(), r = fn("options"), i = (r == null ? void 0 : r.mode) ?? "payment", a = new Tl(), l = `${e.codeSdk()}/${i}-request-modal-mobile/#/${a.id}/p=${ad(r)}`, c = cn(null);
    a.on("codeScanned", () => {
      t("codeScanned");
    }), a.on("clientRejectedPayment", () => {
      t("clientRejectedPayment");
    }), a.on("clientRejectedLogin", () => {
      t("clientRejectedLogin");
    }), a.on("intentSubmitted", () => {
      t("intentSubmitted");
    }), a.on("navigate", (h) => {
      h.url && (window.location.href = h.url);
    }), a.on("error", (h) => {
      `${h}`.includes("NGHTTP2_INTERNAL_ERROR") ? (console.warn("CodeSDK: GRPC stream closed."), t("streamClosed")) : (console.error(`CodeSDK: ${h}`), t("error", h));
    }), a.on("streamTimeout", () => {
      console.warn("CodeSDK: Websocket Stream timeout."), t("streamTimeout");
    }), a.on("streamClosed", () => {
      console.warn("CodeSDK: Websocket Stream closed."), t("streamClosed");
    }), yh(() => {
      c.value && (a.setTargetWindow(c.value), t("channelCreated", a));
    }), uw(() => {
      var h, g;
      const { clientSecret: y, idempotencyKey: T, confirmParams: b } = r ?? {};
      y && a.emit("updatedClientSecret", { value: y }), T && a.emit("updatedIdempotencyKey", { value: T }), b && ((h = b.success) != null && h.url && a.emit("updatedSuccessUrl", { value: b.success.url }), (g = b.cancel) != null && g.url && a.emit("updatedCancelUrl", { value: b.cancel.url }));
    });
    function d() {
      const h = (g) => g + " !important";
      return {
        position: h("fixed"),
        inset: h("0"),
        zIndex: h("2147483647"),
        overflow: h("hidden"),
        width: h("100dvw"),
        height: h("100dvh"),
        // We have to set this to make sure the iframe stays transparent.
        // Completely counter-intuitive.
        // https://bugs.chromium.org/p/chromium/issues/detail?id=1150352
        colorScheme: h("light")
      };
    }
    return (h, g) => (Te(), vc("iframe", {
      ref_key: "el",
      ref: c,
      src: l,
      frameborder: "0",
      allowTransparency: "true",
      scrolling: "no",
      name: "payment-request-card",
      referrerPolicy: "no-referrer",
      style: Fc(d())
    }, null, 4));
  }
}), US = (n) => new Error(`Network error ${n}`), LS = (n) => new Error(`Request failed with status code ${n}`);
class FS {
  /**
   * Initializes a new connection to the provided endpoint.
   *
   * @param endpoint - The URL of the endpoint to connect to.
   * @param fetch - Optional fetch function. Defaults to {} fetch.
   */
  constructor(t, e = globalThis.fetch) {
    this.endpoint = t, this.fetch = (...r) => e.apply(globalThis, r);
  }
  getDecoder(t) {
    return (e) => t.O.fromBinary(e);
  }
  getEncoder(t) {
    return (e) => e.toBinary();
  }
  getSender(t) {
    const e = `${this.endpoint}/api/`;
    return (r) => new Promise(async (i, a) => {
      try {
        const l = await fetch(e, {
          method: "POST",
          headers: {
            "Content-Type": "application/octet-stream"
          },
          body: r
        });
        if (l.ok) {
          const c = await l.arrayBuffer(), d = lo.fromBinary(new Uint8Array(c));
          i(d);
        } else
          a(LS(l.status));
      } catch (l) {
        a(US(l));
      }
    });
  }
  useService(t) {
    const e = this.getDecoder(t), r = this.getEncoder(t), i = this.getSender(t);
    return {
      decode: e,
      encode: r,
      send: i
    };
  }
  getServiceName(t) {
    return t.typeName.split(".").pop();
  }
  async send(t, e, r) {
    const i = this.getServiceName(t), { encode: a, decode: l, send: c } = this.useService(t.methods[e]), d = a(r), h = new co({
      service: i,
      method: e,
      body: d
    }), g = await c(h.toBinary());
    return l(g.body);
  }
}
const qS = "https://cash.getcode.com/v1";
function $y(n = {}) {
  const t = n.endpoint ?? qS;
  return new FS(t, n.fetch);
}
async function DS(n, t) {
  const e = await n.getSendMessageRequestProto();
  return (await t.send(qk, "sendMessage", e)).result, gl.OK, {
    clientSecret: n.getClientSecret(),
    id: n.getIntentId()
  };
}
var Zd;
(function(n) {
  n.Pending = "pending", n.Confirmed = "confirmed";
})(Zd || (Zd = {}));
class PS {
  constructor(t) {
    this.intentId = t.intent, this.validate();
  }
  validate() {
    if (!this.intentId)
      throw new Error("Intent ID is required");
  }
  toProto() {
    const t = mn.fromBase58(this.intentId);
    return new er({
      intentId: {
        value: t.toBuffer()
      }
    });
  }
  sign() {
  }
  async send(t) {
    const e = await t.send(Hw, "getStatus", this.toProto());
    let r = Zd.Pending;
    e.intentSubmitted && (r = Zd.Confirmed);
    const { exists: i, codeScanned: a, intentSubmitted: l } = e;
    return {
      status: r,
      exists: i,
      codeScanned: a,
      intentSubmitted: l
    };
  }
}
class CS {
  constructor(t) {
    this.intentId = t.intent, this.url = t.url, this.validate();
  }
  validate() {
    if (!this.intentId)
      throw new Error("Intent ID is required");
    if (!this.url)
      throw new Error("URL is required");
  }
  toProto() {
    const t = mn.fromBase58(this.intentId);
    return new nr({
      intentId: {
        value: t.toBuffer()
      },
      url: this.url
    });
  }
  sign() {
  }
  async send(t) {
    const e = await t.send(Hw, "registerWebhook", this.toProto()), r = KS(e.result);
    return e.result === Ze.OK ? {
      success: !0,
      message: r
    } : {
      success: !1,
      message: r
    };
  }
}
function KS(n) {
  switch (n) {
    case Ze.OK:
      return "ok";
    case Ze.ALREADY_REGISTERED:
      return "already_registered";
    case Ze.REQUEST_NOT_FOUND:
      return "request_not_found";
    case Ze.INVALID_URL:
      return "invalid_url";
    case Ze.INTENT_EXISTS:
      return "intent_exists";
    default:
      return "unknown";
  }
}
const RS = {
  /**
   * Creates a new payment intent.
   *
   * @param opt - The options for creating a payment intent.
   * @returns An object containing the client secret and intent ID.
   * @throws Will throw an error if unable to create the intent.
   */
  create: async (n) => {
    const t = $y(n);
    let e;
    n.login ? e = new BS(n) : e = new Eg(n);
    const r = await DS(e, t);
    if (n.webhook) {
      const i = await new CS({
        intent: r.id,
        url: n.webhook.url
      }).send(t);
      if (!i.success)
        throw new Error(`Unable to register webhook: ${i.message}`);
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
    const t = $y(n);
    return await new PS(n).send(t);
  }
}, MS = /* @__PURE__ */ wl({
  __name: "PreloadIntentRequestModalDesktop",
  setup(n) {
    const t = ud(), e = fn("options"), r = (e == null ? void 0 : e.mode) ?? "payment", i = `${t.codeSdk()}/${r}-request-modal-desktop/#/preload/p=${ad(e)}`, a = cn(null);
    function l() {
      const c = (d) => d + " !important";
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
    return (c, d) => (Te(), vc("iframe", {
      ref_key: "el",
      ref: a,
      src: i,
      frameborder: "0",
      allowTransparency: "true",
      scrolling: "no",
      name: "preload-payment-request-card",
      referrerpolicy: "no-referrer",
      style: Fc(l())
    }, null, 4));
  }
}), $S = /* @__PURE__ */ wl({
  __name: "PreloadIntentRequestModalMobile",
  setup(n) {
    const t = ud(), e = fn("options"), r = (e == null ? void 0 : e.mode) ?? "payment", i = `${t.codeSdk()}/${r}-request-modal-mobile/#/preload/p=${ad(e)}`, a = cn(null);
    function l() {
      const c = (d) => d + " !important";
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
    return (c, d) => (Te(), vc("iframe", {
      ref_key: "el",
      ref: a,
      src: i,
      frameborder: "0",
      allowTransparency: "true",
      scrolling: "no",
      name: "preload-payment-request-card",
      referrerpolicy: "no-referrer",
      style: Fc(l())
    }, null, 4));
  }
});
function VS() {
  return navigator.userAgent.includes("DebugMobile");
}
function _S() {
  return [
    "iPhone Simulator",
    "iPhone"
  ].includes(navigator.platform);
}
function HS() {
  return /Android/i.test(navigator.userAgent);
}
function zS() {
  return _S() || HS() || VS();
}
function Vh(n) {
  try {
    return new URL(n), !0;
  } catch {
    return !1;
  }
}
function jS(n, t) {
  try {
    return new URL(n, t).toString();
  } catch {
    return "";
  }
}
function WS(n, t) {
  let e = decodeURIComponent(n);
  for (const [r, i] of Object.entries(t))
    e = e.replace(`{{${r}}}`, i);
  return encodeURI(e);
}
function Vy(n, t, e) {
  let r = (n == null ? void 0 : n.url) ?? t;
  if (r && (!Vh(r) && t && Vh(t) && (r = jS(r, new URL(t).origin)), Vh(r)))
    return e && (r = WS(r, e)), { url: r };
}
const GS = { key: 0 }, XS = { key: 1 }, _y = 500, YS = /* @__PURE__ */ wl({
  __name: "ButtonFlow",
  setup(n) {
    var t, e, r, i;
    const a = (Y) => new Promise((rt) => setTimeout(rt, Y)), l = fn("options"), c = fn("emit", async () => !1), d = cn(null), h = cn(null), g = cn(!1), y = zS(), T = ((e = (t = l == null ? void 0 : l.confirmParams) == null ? void 0 : t.success) == null ? void 0 : e.url) !== void 0, b = ((i = (r = l == null ? void 0 : l.confirmParams) == null ? void 0 : r.cancel) == null ? void 0 : i.url) !== void 0;
    function O() {
      if (l) {
        if (l.mode === "payment")
          return l.amount && l.currency && l.destination;
        if (l.mode === "login")
          return l.login && l.login.domain;
      }
      return !1;
    }
    function x(Y) {
      d.value = Y;
    }
    async function L() {
      var Y, rt;
      if (g.value = !0, await op(), !l)
        throw new Error("Missing options");
      if (!d.value)
        throw new Error("Missing channel");
      if (d.value.emit("beforeInvoke"), await c("invoke")) {
        g.value = !1;
        return;
      }
      l.mode === "payment" ? h.value = new Eg(l).getIntentId() : h.value = new SS(l).getIntentId();
      const ot = {
        INTENT_ID: h.value
        // ...
      }, gt = window.location.href;
      if (l.confirmParams = {
        success: Vy((Y = l.confirmParams) == null ? void 0 : Y.success, gt, ot),
        cancel: Vy((rt = l.confirmParams) == null ? void 0 : rt.cancel, gt, ot)
      }, await op(), !d.value)
        throw new Error("Missing channel");
      d.value.emit("afterInvoke");
    }
    async function $() {
      var Y, rt;
      g.value = !1, await a(_y);
      const ot = (rt = (Y = l == null ? void 0 : l.confirmParams) == null ? void 0 : Y.success) == null ? void 0 : rt.url;
      await c("success", { url: ot, options: l, intent: h.value }) || T && (window.location.href = ot);
    }
    async function at() {
      var Y, rt;
      g.value = !1, await a(_y);
      const ot = (rt = (Y = l == null ? void 0 : l.confirmParams) == null ? void 0 : Y.cancel) == null ? void 0 : rt.url;
      await c("cancel", { url: ot, options: l, intent: h.value }) || b && (window.location.href = ot);
    }
    async function F(Y) {
      await c("error", { message: `${Y}` });
    }
    async function nt() {
      g.value = !1, await F("stream_timed_out");
    }
    async function J() {
      g.value = !1, await F("stream_closed");
    }
    return document.addEventListener("visibilitychange", async () => {
      if (document.visibilityState === "visible") {
        if (!h.value)
          return;
        const { status: Y } = await RS.getStatus({ intent: h.value });
        Y === "confirmed" && $();
      }
    }), (Y, rt) => O() ? (Te(), vc(Xe, { key: 0 }, [
      ar(eu(xS), { onInvoke: L }),
      (Te(), sl(nb, { to: "body" }, [
        g.value ? (Te(), vc("div", GS, [
          eu(y) ? (Te(), sl(eu(AS), {
            key: 0,
            onChannelCreated: x,
            onIntentSubmitted: $,
            onClientRejectedPayment: at,
            onClientRejectedLogin: at,
            onError: F,
            onStreamTimeout: nt,
            onStreamClosed: J
          })) : (Te(), sl(eu(lT), {
            key: 1,
            onChannelCreated: x,
            onIntentSubmitted: $,
            onClientRejectedPayment: at,
            onClientRejectedLogin: at,
            onError: F,
            onStreamTimeout: nt,
            onStreamClosed: J
          }))
        ])) : (Te(), vc("div", XS, [
          eu(y) ? (Te(), sl(eu($S), { key: 0 })) : (Te(), sl(eu(MS), { key: 1 }))
        ]))
      ]))
    ], 64)) : ub("", !0);
  }
}), Hy = "payment", ZS = "en";
class fT {
  /**
   * Constructor initializes the element with given parameters and Vue application.
   * @param params - Partial element options.
   * @param app - Vue application instance.
   */
  constructor(t, e) {
    const r = { ...t };
    r.mode = r.mode ?? Hy, r.locale = r.locale ?? ZS, this.intent = fh(r), this.listeners = [], this.app = e, this.validate();
  }
  /**
   * Validates the current element options.
   * @returns True if the options are valid.
   */
  validate() {
    return Ng(this.intent);
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
    return this.intent.mode ?? Hy;
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
  update(t) {
    Object.assign(this.intent, t), this.validate();
  }
  /**
   * Subscribes to an event with a callback.
   * @param event - The event to subscribe to.
   * @param callback - The function to call back when the event occurs.
   */
  on(t, e) {
    this.listeners.push({ event: t, callback: e });
  }
  /**
   * Mounts the Vue component onto an HTML element.
   * @param el - The element or a selector string for mounting.
   * @returns The mounted element.
   */
  mount(t) {
    const e = typeof t == "string" ? document.querySelector(t) : t;
    if (e && e.hasAttribute("data-v-app"))
      return console.warn("A component is already mounted on this element: " + t), null;
    const r = async (i, a) => {
      const l = QS(a), c = this.listeners.filter((d) => d.event === i);
      return (await Promise.all(c.map((d) => d.callback(l)))).some((d) => d === !0);
    };
    return this.app.provide("locale", this.getLocale()), this.app.provide("options", this.getOptions()), this.app.provide("emit", r), this.app.mount(t).$el;
  }
  /**
   * Unmounts the Vue component from the HTML element.
   */
  unmount() {
    return this.app.unmount();
  }
}
function QS(n) {
  return typeof n != "object" ? n : JSON.parse(JSON.stringify(n));
}
class tI extends fT {
  /**
   * Constructs a new CodeButton with specific options.
   * @param options - Partial element options.
   */
  constructor(t) {
    super(t, Aw(YS));
  }
}
class eI extends fT {
  /**
   * Constructs a new CodeCard with specific options.
   * @param options - Partial element options.
   */
  constructor(t) {
    super(t, Aw(lT));
  }
}
const nI = {
  /**
   * Creates a new element based on the specified type.
   * @param type - The type of the element to create.
   * @param options - The options for the element.
   * @returns An object containing the newly created element.
   */
  create: (n, t) => {
    switch (n) {
      case "button":
        return { button: new tI(t) };
      case "card":
        return { card: new eI(t) };
      default:
        throw Xb(n);
    }
  }
}, rI = {
  codeSdk: "https://sdk.getcode.com/v1/elements"
};
vS(rI);
const oI = { library: qN, elements: nI };
export {
  oI as default
};