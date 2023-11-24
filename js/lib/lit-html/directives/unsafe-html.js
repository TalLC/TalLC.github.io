import {b, x} from "../../common/lit-html-779e0a28.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t = {ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6}, e = (t2) => (...e2) => ({_$litDirective$: t2, values: e2});
class i {
  constructor(t2) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t2, e2, i2) {
    this._$Ct = t2, this._$AM = e2, this._$Ci = i2;
  }
  _$AS(t2, e2) {
    return this.update(t2, e2);
  }
  update(t2, e2) {
    return this.render(...e2);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class e$1 extends i {
  constructor(i2) {
    if (super(i2), this.it = b, i2.type !== t.CHILD)
      throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(r) {
    if (r === b || r == null)
      return this._t = void 0, this.it = r;
    if (r === x)
      return r;
    if (typeof r != "string")
      throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (r === this.it)
      return this._t;
    this.it = r;
    const s = [r];
    return s.raw = s, this._t = {_$litType$: this.constructor.resultType, strings: s, values: []};
  }
}
e$1.directiveName = "unsafeHTML", e$1.resultType = 1;
const o = e(e$1);
export {o as unsafeHTML};
