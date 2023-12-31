/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t;
const i = window, s = i.trustedTypes, e = s ? s.createPolicy("lit-html", {createHTML: (t2) => t2}) : void 0, o = `lit$${(Math.random() + "").slice(9)}$`, n = "?" + o, l = `<${n}>`, h = document, r = (t2 = "") => h.createComment(t2), d = (t2) => t2 === null || typeof t2 != "object" && typeof t2 != "function", u = Array.isArray, c = (t2) => u(t2) || typeof (t2 == null ? void 0 : t2[Symbol.iterator]) == "function", v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, a = /-->/g, f = />/g, _ = RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), m = /'/g, p = /"/g, $ = /^(?:script|style|textarea|title)$/i, g = (t2) => (i2, ...s2) => ({_$litType$: t2, strings: i2, values: s2}), y = g(1), x = Symbol.for("lit-noChange"), b = Symbol.for("lit-nothing"), T = new WeakMap(), A = h.createTreeWalker(h, 129, null, false), E = (t2, i2) => {
  const s2 = t2.length - 1, n2 = [];
  let h2, r2 = i2 === 2 ? "<svg>" : "", d2 = v;
  for (let i3 = 0; i3 < s2; i3++) {
    const s3 = t2[i3];
    let e2, u3, c2 = -1, g2 = 0;
    for (; g2 < s3.length && (d2.lastIndex = g2, u3 = d2.exec(s3), u3 !== null); )
      g2 = d2.lastIndex, d2 === v ? u3[1] === "!--" ? d2 = a : u3[1] !== void 0 ? d2 = f : u3[2] !== void 0 ? ($.test(u3[2]) && (h2 = RegExp("</" + u3[2], "g")), d2 = _) : u3[3] !== void 0 && (d2 = _) : d2 === _ ? u3[0] === ">" ? (d2 = h2 != null ? h2 : v, c2 = -1) : u3[1] === void 0 ? c2 = -2 : (c2 = d2.lastIndex - u3[2].length, e2 = u3[1], d2 = u3[3] === void 0 ? _ : u3[3] === '"' ? p : m) : d2 === p || d2 === m ? d2 = _ : d2 === a || d2 === f ? d2 = v : (d2 = _, h2 = void 0);
    const y2 = d2 === _ && t2[i3 + 1].startsWith("/>") ? " " : "";
    r2 += d2 === v ? s3 + l : c2 >= 0 ? (n2.push(e2), s3.slice(0, c2) + "$lit$" + s3.slice(c2) + o + y2) : s3 + o + (c2 === -2 ? (n2.push(void 0), i3) : y2);
  }
  const u2 = r2 + (t2[s2] || "<?>") + (i2 === 2 ? "</svg>" : "");
  if (!Array.isArray(t2) || !t2.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return [e !== void 0 ? e.createHTML(u2) : u2, n2];
};
class C {
  constructor({strings: t2, _$litType$: i2}, e2) {
    let l2;
    this.parts = [];
    let h2 = 0, d2 = 0;
    const u2 = t2.length - 1, c2 = this.parts, [v2, a2] = E(t2, i2);
    if (this.el = C.createElement(v2, e2), A.currentNode = this.el.content, i2 === 2) {
      const t3 = this.el.content, i3 = t3.firstChild;
      i3.remove(), t3.append(...i3.childNodes);
    }
    for (; (l2 = A.nextNode()) !== null && c2.length < u2; ) {
      if (l2.nodeType === 1) {
        if (l2.hasAttributes()) {
          const t3 = [];
          for (const i3 of l2.getAttributeNames())
            if (i3.endsWith("$lit$") || i3.startsWith(o)) {
              const s2 = a2[d2++];
              if (t3.push(i3), s2 !== void 0) {
                const t4 = l2.getAttribute(s2.toLowerCase() + "$lit$").split(o), i4 = /([.?@])?(.*)/.exec(s2);
                c2.push({type: 1, index: h2, name: i4[2], strings: t4, ctor: i4[1] === "." ? M : i4[1] === "?" ? k : i4[1] === "@" ? H : S});
              } else
                c2.push({type: 6, index: h2});
            }
          for (const i3 of t3)
            l2.removeAttribute(i3);
        }
        if ($.test(l2.tagName)) {
          const t3 = l2.textContent.split(o), i3 = t3.length - 1;
          if (i3 > 0) {
            l2.textContent = s ? s.emptyScript : "";
            for (let s2 = 0; s2 < i3; s2++)
              l2.append(t3[s2], r()), A.nextNode(), c2.push({type: 2, index: ++h2});
            l2.append(t3[i3], r());
          }
        }
      } else if (l2.nodeType === 8)
        if (l2.data === n)
          c2.push({type: 2, index: h2});
        else {
          let t3 = -1;
          for (; (t3 = l2.data.indexOf(o, t3 + 1)) !== -1; )
            c2.push({type: 7, index: h2}), t3 += o.length - 1;
        }
      h2++;
    }
  }
  static createElement(t2, i2) {
    const s2 = h.createElement("template");
    return s2.innerHTML = t2, s2;
  }
}
function P(t2, i2, s2 = t2, e2) {
  var o2, n2, l2, h2;
  if (i2 === x)
    return i2;
  let r2 = e2 !== void 0 ? (o2 = s2._$Co) === null || o2 === void 0 ? void 0 : o2[e2] : s2._$Cl;
  const u2 = d(i2) ? void 0 : i2._$litDirective$;
  return (r2 == null ? void 0 : r2.constructor) !== u2 && ((n2 = r2 == null ? void 0 : r2._$AO) === null || n2 === void 0 || n2.call(r2, false), u2 === void 0 ? r2 = void 0 : (r2 = new u2(t2), r2._$AT(t2, s2, e2)), e2 !== void 0 ? ((l2 = (h2 = s2)._$Co) !== null && l2 !== void 0 ? l2 : h2._$Co = [])[e2] = r2 : s2._$Cl = r2), r2 !== void 0 && (i2 = P(t2, r2._$AS(t2, i2.values), r2, e2)), i2;
}
class V {
  constructor(t2, i2) {
    this.u = [], this._$AN = void 0, this._$AD = t2, this._$AM = i2;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  v(t2) {
    var i2;
    const {el: {content: s2}, parts: e2} = this._$AD, o2 = ((i2 = t2 == null ? void 0 : t2.creationScope) !== null && i2 !== void 0 ? i2 : h).importNode(s2, true);
    A.currentNode = o2;
    let n2 = A.nextNode(), l2 = 0, r2 = 0, d2 = e2[0];
    for (; d2 !== void 0; ) {
      if (l2 === d2.index) {
        let i3;
        d2.type === 2 ? i3 = new N(n2, n2.nextSibling, this, t2) : d2.type === 1 ? i3 = new d2.ctor(n2, d2.name, d2.strings, this, t2) : d2.type === 6 && (i3 = new I(n2, this, t2)), this.u.push(i3), d2 = e2[++r2];
      }
      l2 !== (d2 == null ? void 0 : d2.index) && (n2 = A.nextNode(), l2++);
    }
    return o2;
  }
  p(t2) {
    let i2 = 0;
    for (const s2 of this.u)
      s2 !== void 0 && (s2.strings !== void 0 ? (s2._$AI(t2, s2, i2), i2 += s2.strings.length - 2) : s2._$AI(t2[i2])), i2++;
  }
}
class N {
  constructor(t2, i2, s2, e2) {
    var o2;
    this.type = 2, this._$AH = b, this._$AN = void 0, this._$AA = t2, this._$AB = i2, this._$AM = s2, this.options = e2, this._$Cm = (o2 = e2 == null ? void 0 : e2.isConnected) === null || o2 === void 0 || o2;
  }
  get _$AU() {
    var t2, i2;
    return (i2 = (t2 = this._$AM) === null || t2 === void 0 ? void 0 : t2._$AU) !== null && i2 !== void 0 ? i2 : this._$Cm;
  }
  get parentNode() {
    let t2 = this._$AA.parentNode;
    const i2 = this._$AM;
    return i2 !== void 0 && t2.nodeType === 11 && (t2 = i2.parentNode), t2;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t2, i2 = this) {
    t2 = P(this, t2, i2), d(t2) ? t2 === b || t2 == null || t2 === "" ? (this._$AH !== b && this._$AR(), this._$AH = b) : t2 !== this._$AH && t2 !== x && this.g(t2) : t2._$litType$ !== void 0 ? this.$(t2) : t2.nodeType !== void 0 ? this.T(t2) : c(t2) ? this.k(t2) : this.g(t2);
  }
  O(t2, i2 = this._$AB) {
    return this._$AA.parentNode.insertBefore(t2, i2);
  }
  T(t2) {
    this._$AH !== t2 && (this._$AR(), this._$AH = this.O(t2));
  }
  g(t2) {
    this._$AH !== b && d(this._$AH) ? this._$AA.nextSibling.data = t2 : this.T(h.createTextNode(t2)), this._$AH = t2;
  }
  $(t2) {
    var i2;
    const {values: s2, _$litType$: e2} = t2, o2 = typeof e2 == "number" ? this._$AC(t2) : (e2.el === void 0 && (e2.el = C.createElement(e2.h, this.options)), e2);
    if (((i2 = this._$AH) === null || i2 === void 0 ? void 0 : i2._$AD) === o2)
      this._$AH.p(s2);
    else {
      const t3 = new V(o2, this), i3 = t3.v(this.options);
      t3.p(s2), this.T(i3), this._$AH = t3;
    }
  }
  _$AC(t2) {
    let i2 = T.get(t2.strings);
    return i2 === void 0 && T.set(t2.strings, i2 = new C(t2)), i2;
  }
  k(t2) {
    u(this._$AH) || (this._$AH = [], this._$AR());
    const i2 = this._$AH;
    let s2, e2 = 0;
    for (const o2 of t2)
      e2 === i2.length ? i2.push(s2 = new N(this.O(r()), this.O(r()), this, this.options)) : s2 = i2[e2], s2._$AI(o2), e2++;
    e2 < i2.length && (this._$AR(s2 && s2._$AB.nextSibling, e2), i2.length = e2);
  }
  _$AR(t2 = this._$AA.nextSibling, i2) {
    var s2;
    for ((s2 = this._$AP) === null || s2 === void 0 || s2.call(this, false, true, i2); t2 && t2 !== this._$AB; ) {
      const i3 = t2.nextSibling;
      t2.remove(), t2 = i3;
    }
  }
  setConnected(t2) {
    var i2;
    this._$AM === void 0 && (this._$Cm = t2, (i2 = this._$AP) === null || i2 === void 0 || i2.call(this, t2));
  }
}
class S {
  constructor(t2, i2, s2, e2, o2) {
    this.type = 1, this._$AH = b, this._$AN = void 0, this.element = t2, this.name = i2, this._$AM = e2, this.options = o2, s2.length > 2 || s2[0] !== "" || s2[1] !== "" ? (this._$AH = Array(s2.length - 1).fill(new String()), this.strings = s2) : this._$AH = b;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t2, i2 = this, s2, e2) {
    const o2 = this.strings;
    let n2 = false;
    if (o2 === void 0)
      t2 = P(this, t2, i2, 0), n2 = !d(t2) || t2 !== this._$AH && t2 !== x, n2 && (this._$AH = t2);
    else {
      const e3 = t2;
      let l2, h2;
      for (t2 = o2[0], l2 = 0; l2 < o2.length - 1; l2++)
        h2 = P(this, e3[s2 + l2], i2, l2), h2 === x && (h2 = this._$AH[l2]), n2 || (n2 = !d(h2) || h2 !== this._$AH[l2]), h2 === b ? t2 = b : t2 !== b && (t2 += (h2 != null ? h2 : "") + o2[l2 + 1]), this._$AH[l2] = h2;
    }
    n2 && !e2 && this.j(t2);
  }
  j(t2) {
    t2 === b ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t2 != null ? t2 : "");
  }
}
class M extends S {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t2) {
    this.element[this.name] = t2 === b ? void 0 : t2;
  }
}
const R = s ? s.emptyScript : "";
class k extends S {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t2) {
    t2 && t2 !== b ? this.element.setAttribute(this.name, R) : this.element.removeAttribute(this.name);
  }
}
class H extends S {
  constructor(t2, i2, s2, e2, o2) {
    super(t2, i2, s2, e2, o2), this.type = 5;
  }
  _$AI(t2, i2 = this) {
    var s2;
    if ((t2 = (s2 = P(this, t2, i2, 0)) !== null && s2 !== void 0 ? s2 : b) === x)
      return;
    const e2 = this._$AH, o2 = t2 === b && e2 !== b || t2.capture !== e2.capture || t2.once !== e2.once || t2.passive !== e2.passive, n2 = t2 !== b && (e2 === b || o2);
    o2 && this.element.removeEventListener(this.name, this, e2), n2 && this.element.addEventListener(this.name, this, t2), this._$AH = t2;
  }
  handleEvent(t2) {
    var i2, s2;
    typeof this._$AH == "function" ? this._$AH.call((s2 = (i2 = this.options) === null || i2 === void 0 ? void 0 : i2.host) !== null && s2 !== void 0 ? s2 : this.element, t2) : this._$AH.handleEvent(t2);
  }
}
class I {
  constructor(t2, i2, s2) {
    this.element = t2, this.type = 6, this._$AN = void 0, this._$AM = i2, this.options = s2;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t2) {
    P(this, t2);
  }
}
const z = i.litHtmlPolyfillSupport;
z == null || z(C, N), ((t = i.litHtmlVersions) !== null && t !== void 0 ? t : i.litHtmlVersions = []).push("2.5.0");
const Z = (t2, i2, s2) => {
  var e2, o2;
  const n2 = (e2 = s2 == null ? void 0 : s2.renderBefore) !== null && e2 !== void 0 ? e2 : i2;
  let l2 = n2._$litPart$;
  if (l2 === void 0) {
    const t3 = (o2 = s2 == null ? void 0 : s2.renderBefore) !== null && o2 !== void 0 ? o2 : null;
    n2._$litPart$ = l2 = new N(i2.insertBefore(r(), t3), t3, void 0, s2 != null ? s2 : {});
  }
  return l2._$AI(t2), l2;
};
export {Z, b, x, y};
