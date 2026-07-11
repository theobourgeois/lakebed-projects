// ../../.npm/_npx/3eb8d3eaaf4ef1b4/node_modules/preact/dist/preact.module.js
var n;
var l;
var u;
var t;
var i;
var r;
var o;
var e;
var f;
var c;
var a;
var s;
var h;
var p;
var v;
var y;
var d = {};
var w = [];
var _ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var g = Array.isArray;
function m(n2, l3) {
  for (var u4 in l3) n2[u4] = l3[u4];
  return n2;
}
function b(n2) {
  n2 && n2.parentNode && n2.parentNode.removeChild(n2);
}
function k(l3, u4, t3) {
  var i3, r3, o3, e3 = {};
  for (o3 in u4) "key" == o3 ? i3 = u4[o3] : "ref" == o3 ? r3 = u4[o3] : e3[o3] = u4[o3];
  if (arguments.length > 2 && (e3.children = arguments.length > 3 ? n.call(arguments, 2) : t3), "function" == typeof l3 && null != l3.defaultProps) for (o3 in l3.defaultProps) void 0 === e3[o3] && (e3[o3] = l3.defaultProps[o3]);
  return x(l3, e3, i3, r3, null);
}
function x(n2, t3, i3, r3, o3) {
  var e3 = { type: n2, props: t3, key: i3, ref: r3, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == o3 ? ++u : o3, __i: -1, __u: 0 };
  return null == o3 && null != l.vnode && l.vnode(e3), e3;
}
function S(n2) {
  return n2.children;
}
function C(n2, l3) {
  this.props = n2, this.context = l3;
}
function $(n2, l3) {
  if (null == l3) return n2.__ ? $(n2.__, n2.__i + 1) : null;
  for (var u4; l3 < n2.__k.length; l3++) if (null != (u4 = n2.__k[l3]) && null != u4.__e) return u4.__e;
  return "function" == typeof n2.type ? $(n2) : null;
}
function I(n2) {
  if (n2.__P && n2.__d) {
    var u4 = n2.__v, t3 = u4.__e, i3 = [], r3 = [], o3 = m({}, u4);
    o3.__v = u4.__v + 1, l.vnode && l.vnode(o3), q(n2.__P, o3, u4, n2.__n, n2.__P.namespaceURI, 32 & u4.__u ? [t3] : null, i3, null == t3 ? $(u4) : t3, !!(32 & u4.__u), r3), o3.__v = u4.__v, o3.__.__k[o3.__i] = o3, D(i3, o3, r3), u4.__e = u4.__ = null, o3.__e != t3 && P(o3);
  }
}
function P(n2) {
  if (null != (n2 = n2.__) && null != n2.__c) return n2.__e = n2.__c.base = null, n2.__k.some(function(l3) {
    if (null != l3 && null != l3.__e) return n2.__e = n2.__c.base = l3.__e;
  }), P(n2);
}
function A(n2) {
  (!n2.__d && (n2.__d = true) && i.push(n2) && !H.__r++ || r != l.debounceRendering) && ((r = l.debounceRendering) || o)(H);
}
function H() {
  try {
    for (var n2, l3 = 1; i.length; ) i.length > l3 && i.sort(e), n2 = i.shift(), l3 = i.length, I(n2);
  } finally {
    i.length = H.__r = 0;
  }
}
function L(n2, l3, u4, t3, i3, r3, o3, e3, f4, c3, a3) {
  var s3, h3, p3, v3, y3, _2, g2, m3 = t3 && t3.__k || w, b2 = l3.length;
  for (f4 = T(u4, l3, m3, f4, b2), s3 = 0; s3 < b2; s3++) null != (p3 = u4.__k[s3]) && (h3 = -1 != p3.__i && m3[p3.__i] || d, p3.__i = s3, _2 = q(n2, p3, h3, i3, r3, o3, e3, f4, c3, a3), v3 = p3.__e, p3.ref && h3.ref != p3.ref && (h3.ref && J(h3.ref, null, p3), a3.push(p3.ref, p3.__c || v3, p3)), null == y3 && null != v3 && (y3 = v3), (g2 = !!(4 & p3.__u)) || h3.__k === p3.__k ? (f4 = j(p3, f4, n2, g2), g2 && h3.__e && (h3.__e = null)) : "function" == typeof p3.type && void 0 !== _2 ? f4 = _2 : v3 && (f4 = v3.nextSibling), p3.__u &= -7);
  return u4.__e = y3, f4;
}
function T(n2, l3, u4, t3, i3) {
  var r3, o3, e3, f4, c3, a3 = u4.length, s3 = a3, h3 = 0;
  for (n2.__k = new Array(i3), r3 = 0; r3 < i3; r3++) null != (o3 = l3[r3]) && "boolean" != typeof o3 && "function" != typeof o3 ? ("string" == typeof o3 || "number" == typeof o3 || "bigint" == typeof o3 || o3.constructor == String ? o3 = n2.__k[r3] = x(null, o3, null, null, null) : g(o3) ? o3 = n2.__k[r3] = x(S, { children: o3 }, null, null, null) : void 0 === o3.constructor && o3.__b > 0 ? o3 = n2.__k[r3] = x(o3.type, o3.props, o3.key, o3.ref ? o3.ref : null, o3.__v) : n2.__k[r3] = o3, f4 = r3 + h3, o3.__ = n2, o3.__b = n2.__b + 1, e3 = null, -1 != (c3 = o3.__i = O(o3, u4, f4, s3)) && (s3--, (e3 = u4[c3]) && (e3.__u |= 2)), null == e3 || null == e3.__v ? (-1 == c3 && (i3 > a3 ? h3-- : i3 < a3 && h3++), "function" != typeof o3.type && (o3.__u |= 4)) : c3 != f4 && (c3 == f4 - 1 ? h3-- : c3 == f4 + 1 ? h3++ : (c3 > f4 ? h3-- : h3++, o3.__u |= 4))) : n2.__k[r3] = null;
  if (s3) for (r3 = 0; r3 < a3; r3++) null != (e3 = u4[r3]) && 0 == (2 & e3.__u) && (e3.__e == t3 && (t3 = $(e3)), K(e3, e3));
  return t3;
}
function j(n2, l3, u4, t3) {
  var i3, r3;
  if ("function" == typeof n2.type) {
    for (i3 = n2.__k, r3 = 0; i3 && r3 < i3.length; r3++) i3[r3] && (i3[r3].__ = n2, l3 = j(i3[r3], l3, u4, t3));
    return l3;
  }
  n2.__e != l3 && (t3 && (l3 && n2.type && !l3.parentNode && (l3 = $(n2)), u4.insertBefore(n2.__e, l3 || null)), l3 = n2.__e);
  do {
    l3 = l3 && l3.nextSibling;
  } while (null != l3 && 8 == l3.nodeType);
  return l3;
}
function O(n2, l3, u4, t3) {
  var i3, r3, o3, e3 = n2.key, f4 = n2.type, c3 = l3[u4], a3 = null != c3 && 0 == (2 & c3.__u);
  if (null === c3 && null == e3 || a3 && e3 == c3.key && f4 == c3.type) return u4;
  if (t3 > (a3 ? 1 : 0)) {
    for (i3 = u4 - 1, r3 = u4 + 1; i3 >= 0 || r3 < l3.length; ) if (null != (c3 = l3[o3 = i3 >= 0 ? i3-- : r3++]) && 0 == (2 & c3.__u) && e3 == c3.key && f4 == c3.type) return o3;
  }
  return -1;
}
function z(n2, l3, u4) {
  "-" == l3[0] ? n2.setProperty(l3, null == u4 ? "" : u4) : n2[l3] = null == u4 ? "" : "number" != typeof u4 || _.test(l3) ? u4 : u4 + "px";
}
function N(n2, l3, u4, t3, i3) {
  var r3, o3;
  n: if ("style" == l3) if ("string" == typeof u4) n2.style.cssText = u4;
  else {
    if ("string" == typeof t3 && (n2.style.cssText = t3 = ""), t3) for (l3 in t3) u4 && l3 in u4 || z(n2.style, l3, "");
    if (u4) for (l3 in u4) t3 && u4[l3] == t3[l3] || z(n2.style, l3, u4[l3]);
  }
  else if ("o" == l3[0] && "n" == l3[1]) r3 = l3 != (l3 = l3.replace(s, "$1")), o3 = l3.toLowerCase(), l3 = o3 in n2 || "onFocusOut" == l3 || "onFocusIn" == l3 ? o3.slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + r3] = u4, u4 ? t3 ? u4[a] = t3[a] : (u4[a] = h, n2.addEventListener(l3, r3 ? v : p, r3)) : n2.removeEventListener(l3, r3 ? v : p, r3);
  else {
    if ("http://www.w3.org/2000/svg" == i3) l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if ("width" != l3 && "height" != l3 && "href" != l3 && "list" != l3 && "form" != l3 && "tabIndex" != l3 && "download" != l3 && "rowSpan" != l3 && "colSpan" != l3 && "role" != l3 && "popover" != l3 && l3 in n2) try {
      n2[l3] = null == u4 ? "" : u4;
      break n;
    } catch (n3) {
    }
    "function" == typeof u4 || (null == u4 || false === u4 && "-" != l3[4] ? n2.removeAttribute(l3) : n2.setAttribute(l3, "popover" == l3 && 1 == u4 ? "" : u4));
  }
}
function V(n2) {
  return function(u4) {
    if (this.l) {
      var t3 = this.l[u4.type + n2];
      if (null == u4[c]) u4[c] = h++;
      else if (u4[c] < t3[a]) return;
      return t3(l.event ? l.event(u4) : u4);
    }
  };
}
function q(n2, u4, t3, i3, r3, o3, e3, f4, c3, a3) {
  var s3, h3, p3, v3, y3, d3, _2, k3, x2, M, $2, I2, P2, A3, H2, T3, j3 = u4.type;
  if (void 0 !== u4.constructor) return null;
  128 & t3.__u && (c3 = !!(32 & t3.__u), o3 = [f4 = u4.__e = t3.__e]), (s3 = l.__b) && s3(u4);
  n: if ("function" == typeof j3) {
    h3 = e3.length;
    try {
      if (x2 = u4.props, M = j3.prototype && j3.prototype.render, $2 = (s3 = j3.contextType) && i3[s3.__c], I2 = s3 ? $2 ? $2.props.value : s3.__ : i3, t3.__c ? k3 = (p3 = u4.__c = t3.__c).__ = p3.__E : (M ? u4.__c = p3 = new j3(x2, I2) : (u4.__c = p3 = new C(x2, I2), p3.constructor = j3, p3.render = Q), $2 && $2.sub(p3), p3.state || (p3.state = {}), p3.__n = i3, v3 = p3.__d = true, p3.__h = [], p3._sb = []), M && null == p3.__s && (p3.__s = p3.state), M && null != j3.getDerivedStateFromProps && (p3.__s == p3.state && (p3.__s = m({}, p3.__s)), m(p3.__s, j3.getDerivedStateFromProps(x2, p3.__s))), y3 = p3.props, d3 = p3.state, p3.__v = u4, v3) M && null == j3.getDerivedStateFromProps && null != p3.componentWillMount && p3.componentWillMount(), M && null != p3.componentDidMount && p3.__h.push(p3.componentDidMount);
      else {
        if (M && null == j3.getDerivedStateFromProps && x2 !== y3 && null != p3.componentWillReceiveProps && p3.componentWillReceiveProps(x2, I2), u4.__v == t3.__v || !p3.__e && null != p3.shouldComponentUpdate && false === p3.shouldComponentUpdate(x2, p3.__s, I2)) {
          u4.__v != t3.__v && (p3.props = x2, p3.state = p3.__s, p3.__d = false), u4.__e = t3.__e, u4.__k = t3.__k, u4.__k.some(function(n3) {
            n3 && (n3.__ = u4);
          }), w.push.apply(p3.__h, p3._sb), p3._sb = [], p3.__h.length && e3.push(p3);
          break n;
        }
        null != p3.componentWillUpdate && p3.componentWillUpdate(x2, p3.__s, I2), M && null != p3.componentDidUpdate && p3.__h.push(function() {
          p3.componentDidUpdate(y3, d3, _2);
        });
      }
      if (p3.context = I2, p3.props = x2, p3.__P = n2, p3.__e = false, P2 = l.__r, A3 = 0, M) p3.state = p3.__s, p3.__d = false, P2 && P2(u4), s3 = p3.render(p3.props, p3.state, p3.context), w.push.apply(p3.__h, p3._sb), p3._sb = [];
      else do {
        p3.__d = false, P2 && P2(u4), s3 = p3.render(p3.props, p3.state, p3.context), p3.state = p3.__s;
      } while (p3.__d && ++A3 < 25);
      p3.state = p3.__s, null != p3.getChildContext && (i3 = m(m({}, i3), p3.getChildContext())), M && !v3 && null != p3.getSnapshotBeforeUpdate && (_2 = p3.getSnapshotBeforeUpdate(y3, d3)), H2 = null != s3 && s3.type === S && null == s3.key ? E(s3.props.children) : s3, f4 = L(n2, g(H2) ? H2 : [H2], u4, t3, i3, r3, o3, e3, f4, c3, a3), p3.base = u4.__e, u4.__u &= -161, p3.__h.length && e3.push(p3), k3 && (p3.__E = p3.__ = null);
    } catch (n3) {
      if (e3.length = h3, u4.__v = null, c3 || null != o3) {
        if (n3.then) {
          for (u4.__u |= c3 ? 160 : 128; f4 && 8 == f4.nodeType && f4.nextSibling; ) f4 = f4.nextSibling;
          null != o3 && (o3[o3.indexOf(f4)] = null), u4.__e = f4;
        } else if (null != o3) for (T3 = o3.length; T3--; ) b(o3[T3]);
      } else u4.__e = t3.__e;
      null == u4.__k && (u4.__k = t3.__k || []), n3.then || B(u4), l.__e(n3, u4, t3);
    }
  } else null == o3 && u4.__v == t3.__v ? (u4.__k = t3.__k, u4.__e = t3.__e) : f4 = u4.__e = G(t3.__e, u4, t3, i3, r3, o3, e3, c3, a3);
  return (s3 = l.diffed) && s3(u4), 128 & u4.__u ? void 0 : f4;
}
function B(n2) {
  n2 && (n2.__c && (n2.__c.__e = true), n2.__k && n2.__k.some(B));
}
function D(n2, u4, t3) {
  for (var i3 = 0; i3 < t3.length; i3++) J(t3[i3], t3[++i3], t3[++i3]);
  l.__c && l.__c(u4, n2), n2.some(function(u5) {
    try {
      n2 = u5.__h, u5.__h = [], n2.some(function(n3) {
        n3.call(u5);
      });
    } catch (n3) {
      l.__e(n3, u5.__v);
    }
  });
}
function E(n2) {
  return "object" != typeof n2 || null == n2 || n2.__b > 0 ? n2 : g(n2) ? n2.map(E) : void 0 !== n2.constructor ? null : m({}, n2);
}
function G(u4, t3, i3, r3, o3, e3, f4, c3, a3) {
  var s3, h3, p3, v3, y3, w3, _2, m3 = i3.props || d, k3 = t3.props, x2 = t3.type;
  if ("svg" == x2 ? o3 = "http://www.w3.org/2000/svg" : "math" == x2 ? o3 = "http://www.w3.org/1998/Math/MathML" : o3 || (o3 = "http://www.w3.org/1999/xhtml"), null != e3) {
    for (s3 = 0; s3 < e3.length; s3++) if ((y3 = e3[s3]) && "setAttribute" in y3 == !!x2 && (x2 ? y3.localName == x2 : 3 == y3.nodeType)) {
      u4 = y3, e3[s3] = null;
      break;
    }
  }
  if (null == u4) {
    if (null == x2) return document.createTextNode(k3);
    u4 = document.createElementNS(o3, x2, k3.is && k3), c3 && (l.__m && l.__m(t3, e3), c3 = false), e3 = null;
  }
  if (null == x2) m3 === k3 || c3 && u4.data == k3 || (u4.data = k3);
  else {
    if (e3 = "textarea" == x2 && null != k3.defaultValue ? null : e3 && n.call(u4.childNodes), !c3 && null != e3) for (m3 = {}, s3 = 0; s3 < u4.attributes.length; s3++) m3[(y3 = u4.attributes[s3]).name] = y3.value;
    for (s3 in m3) y3 = m3[s3], "dangerouslySetInnerHTML" == s3 ? p3 = y3 : "children" == s3 || s3 in k3 || "value" == s3 && "defaultValue" in k3 || "checked" == s3 && "defaultChecked" in k3 || N(u4, s3, null, y3, o3);
    for (s3 in k3) y3 = k3[s3], "children" == s3 ? v3 = y3 : "dangerouslySetInnerHTML" == s3 ? h3 = y3 : "value" == s3 ? w3 = y3 : "checked" == s3 ? _2 = y3 : c3 && "function" != typeof y3 || m3[s3] === y3 || N(u4, s3, y3, m3[s3], o3);
    if (h3) c3 || p3 && (h3.__html == p3.__html || h3.__html == u4.innerHTML) || (u4.innerHTML = h3.__html), t3.__k = [];
    else if (p3 && (u4.innerHTML = ""), L("template" == t3.type ? u4.content : u4, g(v3) ? v3 : [v3], t3, i3, r3, "foreignObject" == x2 ? "http://www.w3.org/1999/xhtml" : o3, e3, f4, e3 ? e3[0] : i3.__k && $(i3, 0), c3, a3), null != e3) for (s3 = e3.length; s3--; ) b(e3[s3]);
    c3 && "textarea" != x2 || (s3 = "value", "progress" == x2 && null == w3 ? u4.removeAttribute("value") : null != w3 && (w3 !== u4[s3] || "progress" == x2 && !w3 || "option" == x2 && w3 != m3[s3]) && N(u4, s3, w3, m3[s3], o3), s3 = "checked", null != _2 && _2 != u4[s3] && N(u4, s3, _2, m3[s3], o3));
  }
  return u4;
}
function J(n2, u4, t3) {
  try {
    if ("function" == typeof n2) {
      var i3 = "function" == typeof n2.__u;
      i3 && n2.__u(), i3 && null == u4 || (n2.__u = n2(u4));
    } else n2.current = u4;
  } catch (n3) {
    l.__e(n3, t3);
  }
}
function K(n2, u4, t3) {
  var i3, r3;
  if (l.unmount && l.unmount(n2), (i3 = n2.ref) && (i3.current && i3.current != n2.__e || J(i3, null, u4)), null != (i3 = n2.__c)) {
    if (i3.componentWillUnmount) try {
      i3.componentWillUnmount();
    } catch (n3) {
      l.__e(n3, u4);
    }
    i3.base = i3.__P = i3.__n = null;
  }
  if (i3 = n2.__k) for (r3 = 0; r3 < i3.length; r3++) i3[r3] && K(i3[r3], u4, t3 || "function" != typeof n2.type);
  t3 || b(n2.__e), n2.__c = n2.__ = n2.__e = void 0;
}
function Q(n2, l3, u4) {
  return this.constructor(n2, u4);
}
function R(u4, t3, i3) {
  var r3, o3, e3, f4;
  t3 == document && (t3 = document.documentElement), l.__ && l.__(u4, t3), o3 = (r3 = "function" == typeof i3) ? null : i3 && i3.__k || t3.__k, e3 = [], f4 = [], q(t3, u4 = (!r3 && i3 || t3).__k = k(S, null, [u4]), o3 || d, d, t3.namespaceURI, !r3 && i3 ? [i3] : o3 ? null : t3.firstChild ? n.call(t3.childNodes) : null, e3, !r3 && i3 ? i3 : o3 ? o3.__e : t3.firstChild, r3, f4), D(e3, u4, f4), u4.props.children = null;
}
n = w.slice, l = { __e: function(n2, l3, u4, t3) {
  for (var i3, r3, o3; l3 = l3.__; ) if ((i3 = l3.__c) && !i3.__) try {
    if ((r3 = i3.constructor) && null != r3.getDerivedStateFromError && (i3.setState(r3.getDerivedStateFromError(n2)), o3 = i3.__d), null != i3.componentDidCatch && (i3.componentDidCatch(n2, t3 || {}), o3 = i3.__d), o3) return i3.__E = i3;
  } catch (l4) {
    n2 = l4;
  }
  throw n2;
} }, u = 0, t = function(n2) {
  return null != n2 && void 0 === n2.constructor;
}, C.prototype.setState = function(n2, l3) {
  var u4;
  u4 = null != this.__s && this.__s != this.state ? this.__s : this.__s = m({}, this.state), "function" == typeof n2 && (n2 = n2(m({}, u4), this.props)), n2 && m(u4, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), A(this));
}, C.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), A(this));
}, C.prototype.render = S, i = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n2, l3) {
  return n2.__v.__b - l3.__v.__b;
}, H.__r = 0, f = Math.random().toString(8), c = "__d" + f, a = "__a" + f, s = /(PointerCapture)$|Capture$/i, h = 0, p = V(false), v = V(true), y = 0;

// ../../.npm/_npx/3eb8d3eaaf4ef1b4/node_modules/preact/hooks/dist/hooks.module.js
var t2;
var r2;
var u2;
var i2;
var o2 = 0;
var f2 = [];
var c2 = l;
var e2 = c2.__b;
var a2 = c2.__r;
var v2 = c2.diffed;
var l2 = c2.__c;
var m2 = c2.unmount;
var p2 = c2.__;
function s2(n2, t3) {
  c2.__h && c2.__h(r2, n2, o2 || t3), o2 = 0;
  var u4 = r2.__H || (r2.__H = { __: [], __h: [] });
  return n2 >= u4.__.length && u4.__.push({}), u4.__[n2];
}
function d2(n2) {
  return o2 = 1, y2(D2, n2);
}
function y2(n2, u4, i3) {
  var o3 = s2(t2++, 2);
  if (o3.t = n2, !o3.__c && (o3.__ = [i3 ? i3(u4) : D2(void 0, u4), function(n3) {
    var t3 = o3.__N ? o3.__N[0] : o3.__[0], r3 = o3.t(t3, n3);
    t3 !== r3 && (o3.__N = [r3, o3.__[1]], o3.__c.setState({}));
  }], o3.__c = r2, !r2.__f)) {
    var f4 = function(n3, t3, r3) {
      if (!o3.__c.__H) return true;
      var u5 = false, i4 = o3.__c.props !== n3;
      if (o3.__c.__H.__.some(function(n4) {
        if (n4.__N) {
          u5 = true;
          var t4 = n4.__[0];
          n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i4 = true);
        }
      }), c3) {
        var f5 = c3.call(this, n3, t3, r3);
        return u5 ? f5 || i4 : f5;
      }
      return !u5 || i4;
    };
    r2.__f = true;
    var c3 = r2.shouldComponentUpdate, e3 = r2.componentWillUpdate;
    r2.componentWillUpdate = function(n3, t3, r3) {
      if (this.__e) {
        var u5 = c3;
        c3 = void 0, f4(n3, t3, r3), c3 = u5;
      }
      e3 && e3.call(this, n3, t3, r3);
    }, r2.shouldComponentUpdate = f4;
  }
  return o3.__N || o3.__;
}
function h2(n2, u4) {
  var i3 = s2(t2++, 3);
  !c2.__s && C2(i3.__H, u4) && (i3.__ = n2, i3.u = u4, r2.__H.__h.push(i3));
}
function A2(n2) {
  return o2 = 5, T2(function() {
    return { current: n2 };
  }, []);
}
function T2(n2, r3) {
  var u4 = s2(t2++, 7);
  return C2(u4.__H, r3) && (u4.__ = n2(), u4.__H = r3, u4.__h = n2), u4.__;
}
function j2() {
  for (var n2; n2 = f2.shift(); ) {
    var t3 = n2.__H;
    if (n2.__P && t3) try {
      t3.__h.some(z2), t3.__h.some(B2), t3.__h = [];
    } catch (r3) {
      t3.__h = [], c2.__e(r3, n2.__v);
    }
  }
}
c2.__b = function(n2) {
  r2 = null, e2 && e2(n2);
}, c2.__ = function(n2, t3) {
  n2 && t3.__k && t3.__k.__m && (n2.__m = t3.__k.__m), p2 && p2(n2, t3);
}, c2.__r = function(n2) {
  a2 && a2(n2), t2 = 0;
  var i3 = (r2 = n2.__c).__H;
  i3 && (u2 === r2 ? (i3.__h = [], r2.__h = [], i3.__.some(function(n3) {
    n3.__N && (n3.__ = n3.__N), n3.u = n3.__N = void 0;
  })) : (i3.__h.some(z2), i3.__h.some(B2), i3.__h = [], t2 = 0)), u2 = r2;
}, c2.diffed = function(n2) {
  v2 && v2(n2);
  var t3 = n2.__c;
  t3 && t3.__H && (t3.__H.__h.length && (1 !== f2.push(t3) && i2 === c2.requestAnimationFrame || ((i2 = c2.requestAnimationFrame) || w2)(j2)), t3.__H.__.some(function(n3) {
    n3.u && (n3.__H = n3.u, n3.u = void 0);
  })), u2 = r2 = null;
}, c2.__c = function(n2, t3) {
  t3.some(function(n3) {
    try {
      n3.__h.some(z2), n3.__h = n3.__h.filter(function(n4) {
        return !n4.__ || B2(n4);
      });
    } catch (r3) {
      t3.some(function(n4) {
        n4.__h && (n4.__h = []);
      }), t3 = [], c2.__e(r3, n3.__v);
    }
  }), l2 && l2(n2, t3);
}, c2.unmount = function(n2) {
  m2 && m2(n2);
  var t3, r3 = n2.__c;
  r3 && r3.__H && (r3.__H.__.some(function(n3) {
    try {
      z2(n3);
    } catch (n4) {
      t3 = n4;
    }
  }), r3.__H = void 0, t3 && c2.__e(t3, r3.__v));
};
var k2 = "function" == typeof requestAnimationFrame;
function w2(n2) {
  var t3, r3 = function() {
    clearTimeout(u4), k2 && cancelAnimationFrame(t3), setTimeout(n2);
  }, u4 = setTimeout(r3, 35);
  k2 && (t3 = requestAnimationFrame(r3));
}
function z2(n2) {
  var t3 = r2, u4 = n2.__c;
  "function" == typeof u4 && (n2.__c = void 0, u4()), r2 = t3;
}
function B2(n2) {
  var t3 = r2;
  n2.__c = n2.__(), r2 = t3;
}
function C2(n2, t3) {
  return !n2 || n2.length !== t3.length || t3.some(function(t4, r3) {
    return t4 !== n2[r3];
  });
}
function D2(n2, t3) {
  return "function" == typeof t3 ? t3(n2) : t3;
}

// lakebed-source:client/morpher.ts
var CLEAN = {
  shaderMode: 0,
  shaderMix: 0,
  shaderDetail: 0.5,
  warp: 0,
  swirl: 0,
  ripple: 0,
  zoom: 0,
  kaleido: 0,
  mirror: 0,
  chroma: 0,
  hue: 0,
  saturation: 0.5,
  contrast: 0.5,
  solarize: 0,
  edges: 0,
  feedback: 0,
  trails: 0.5,
  glitch: 0,
  grain: 0,
  scanlines: 0,
  strobe: 0,
  shapes: 0,
  motion: 0.45,
  speed: 0.8,
  audio: 0,
  mouseForce: 0.65,
  mouseSize: 0.45,
  mouseMode: 0
};
var DEFAULT_TRIP = {
  ...CLEAN,
  shaderMode: 1,
  shaderMix: 0.68,
  shaderDetail: 0.58,
  warp: 0.48,
  swirl: 0.42,
  ripple: 0.32,
  kaleido: 0.18,
  chroma: 0.38,
  hue: 0.16,
  saturation: 0.78,
  contrast: 0.62,
  edges: 0.22,
  feedback: 0.34,
  trails: 0.56,
  grain: 0.08,
  shapes: 0.18,
  motion: 0.7,
  speed: 0.85,
  audio: 0.2,
  mouseForce: 0.72
};
var VERT = `
attribute vec2 a_pos;
varying vec2 v_uv;

void main() {
  v_uv = a_pos * 0.5 + 0.5;
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`;
var COPY_FRAG = `
precision mediump float;
uniform sampler2D u_frame;
varying vec2 v_uv;

void main() {
  gl_FragColor = texture2D(u_frame, v_uv);
}
`;
var FRAG = `
precision highp float;

uniform sampler2D u_video;
uniform sampler2D u_previous;
uniform vec2 u_res;
uniform vec2 u_video_res;
uniform float u_time;
uniform float u_audio_level;
uniform vec2 u_pointer;
uniform vec2 u_pointer_velocity;
uniform float u_pointer_down;
uniform float u_pointer_active;

uniform float u_shader_mode;
uniform float u_shader_mix;
uniform float u_shader_detail;

uniform float u_warp;
uniform float u_swirl;
uniform float u_ripple;
uniform float u_zoom;
uniform float u_kaleido;
uniform float u_mirror;
uniform float u_chroma;
uniform float u_hue;
uniform float u_saturation;
uniform float u_contrast;
uniform float u_solarize;
uniform float u_edges;
uniform float u_feedback;
uniform float u_trails;
uniform float u_glitch;
uniform float u_grain;
uniform float u_scanlines;
uniform float u_strobe;
uniform float u_shapes;
uniform float u_motion;
uniform float u_speed;
uniform float u_audio;
uniform float u_mouse_force;
uniform float u_mouse_size;
uniform float u_mouse_mode;

varying vec2 v_uv;

#define PI 3.14159265359
#define TAU 6.28318530718

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float value = 0.0;
  value += noise(p) * 0.5;
  p = p * 2.03 + 13.17;
  value += noise(p) * 0.25;
  p = p * 2.01 + 7.31;
  value += noise(p) * 0.125;
  return value;
}

vec3 rgb2hsv(vec3 c) {
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
  float d = q.x - min(q.w, q.y);
  float e = 1.0e-10;
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

vec2 rotate2d(vec2 p, float angle) {
  float c = cos(angle);
  float s = sin(angle);
  return mat2(c, -s, s, c) * p;
}

// Returns the closest animated cell center and distance to its border.
// Keeping this tiny and deterministic makes the more exotic worlds viable on WebGL 1.
void voronoiCell(vec2 p, float t, out vec2 center, out float border) {
  vec2 base = floor(p);
  vec2 local = fract(p);
  float nearest = 10.0;
  float second = 10.0;
  center = vec2(0.0);
  for (int y = -1; y <= 1; y++) {
    for (int x = -1; x <= 1; x++) {
      vec2 cell = vec2(float(x), float(y));
      vec2 id = base + cell;
      vec2 point = cell + 0.5 + 0.36 * sin(vec2(
        hash(id + 3.1) * TAU + t,
        hash(id + 9.7) * TAU + t * 0.83
      ));
      float d = length(point - local);
      if (d < nearest) {
        second = nearest;
        nearest = d;
        center = id + point;
      } else if (d < second) {
        second = d;
      }
    }
  }
  border = max(0.0, second - nearest);
}

vec2 shaderWorldWarp(vec2 uv, float t, float energy) {
  float mode = floor(u_shader_mode + 0.5);
  float mixAmount = u_shader_mix;
  float aspect = u_res.x / max(u_res.y, 1.0);
  vec2 p = (uv - 0.5) * vec2(aspect, 1.0);
  vec2 warped = p;
  float detail = mix(3.0, 14.0, u_shader_detail);

  if (mode < 0.5) {
    return uv;
  } else if (mode < 1.5) { // Mercury cells
    vec2 center;
    float border;
    voronoiCell(p * detail, t * 0.16, center, border);
    vec2 q = p * detail - center;
    warped = (center + q * (0.55 + length(q) * 1.35)) / detail;
    warped += normalize(q + 0.001) * smoothstep(0.16, 0.0, border) * 0.025;
  } else if (mode < 2.5) { // Wormhole
    float r = max(length(p), 0.025);
    float a = atan(p.y, p.x);
    a += 1.8 / (1.0 + r * 9.0) + t * 0.18;
    r = fract(r * (2.2 + u_shader_detail * 3.0) - t * 0.16) / (2.2 + u_shader_detail * 3.0);
    warped = vec2(cos(a), sin(a)) * r * 1.8;
  } else if (mode < 3.5) { // Pixel melt
    float blocks = mix(18.0, 90.0, u_shader_detail);
    vec2 cell = floor(uv * vec2(blocks, blocks * 0.56));
    float drop = hash(vec2(cell.x, floor(t * 2.0))) * 0.28;
    float gate = step(0.52, hash(vec2(cell.x * 0.13, floor(t * 1.7))));
    warped.y += drop * gate * (0.35 + energy);
    warped.x = (floor((warped.x / aspect + 0.5) * blocks) + 0.5) / blocks;
    warped.x = (warped.x - 0.5) * aspect;
  } else if (mode < 6.5 && mode > 5.5) { // Datamosh
    float band = floor(uv.y * mix(14.0, 72.0, u_shader_detail));
    float clock = floor(t * 4.0);
    float burst = step(0.52, hash(vec2(band, clock)));
    warped.x += (hash(vec2(band + 8.0, clock)) - 0.5) * 0.55 * burst;
    warped.y += (hash(vec2(clock, band * 0.1)) - 0.5) * 0.035;
  } else if (mode < 7.5 && mode > 6.5) { // Recursive dream
    vec2 q = p;
    q = abs(q) - vec2(0.24, 0.12);
    q = rotate2d(q, 0.45 + sin(t * 0.2) * 0.18);
    q = abs(q) - vec2(0.13, 0.08);
    warped = q * mix(1.7, 3.8, u_shader_detail);
  } else if (mode < 9.5 && mode > 8.5) { // Slit scanner
    float columns = mix(12.0, 80.0, u_shader_detail);
    float column = floor(uv.x * columns) / columns;
    warped.y += sin(column * 57.0 + t * 1.7) * 0.24;
    warped.x += sin(uv.y * 4.0 + t) * 0.035;
  } else if (mode < 10.5 && mode > 9.5) { // Singularity lens
    vec2 orbit = vec2(sin(t * 0.23), cos(t * 0.19)) * 0.16 * u_motion;
    vec2 q = p - orbit;
    float r = max(length(q), 0.035);
    float lens = 0.075 / r;
    q = rotate2d(q, lens * 2.4 + t * 0.08);
    warped = orbit + q * (1.0 - lens * 0.62);
  } else if (mode < 14.5 && mode > 13.5) { // Cubist shatter
    float tiles = mix(3.0, 11.0, u_shader_detail);
    vec2 cell = floor((p + 1.5) * tiles);
    vec2 q = fract((p + 1.5) * tiles) - 0.5;
    float flip = step(0.5, hash(cell));
    q = rotate2d(q, (hash(cell + 4.2) - 0.5) * 1.8 + t * 0.04 * (flip * 2.0 - 1.0));
    if (flip > 0.5) q.x = -q.x;
    warped = (cell + q + 0.5) / tiles - 1.5;
  } else if (mode < 15.5 && mode > 14.5) { // Echo bloom
    float r = length(p);
    warped *= 1.0 + sin(r * mix(18.0, 52.0, u_shader_detail) - t * 3.0) * 0.11;
    warped = rotate2d(warped, sin(r * 9.0 - t) * 0.16);
  } else if (mode > 16.5 && mode < 17.5) { // Liquid topography
    float terrain = fbm(p * detail + vec2(t * 0.12, -t * 0.08));
    warped += vec2(
      sin((terrain + p.y) * 24.0),
      cos((terrain + p.x) * 21.0)
    ) * 0.055;
  }

  vec2 result = mix(p, warped, mixAmount);
  return result / vec2(aspect, 1.0) + 0.5;
}

vec2 coverVideoUv(vec2 uv) {
  float screenAspect = u_res.x / max(u_res.y, 1.0);
  float videoAspect = u_video_res.x / max(u_video_res.y, 1.0);
  vec2 result = uv;
  if (screenAspect > videoAspect) {
    result.y = (uv.y - 0.5) * (videoAspect / screenAspect) + 0.5;
  } else {
    result.x = (uv.x - 0.5) * (screenAspect / videoAspect) + 0.5;
  }
  return vec2(result.x, 1.0 - result.y);
}

vec3 videoAt(vec2 uv) {
  return texture2D(u_video, clamp(coverVideoUv(uv), 0.001, 0.999)).rgb;
}

vec2 kaleidoscope(vec2 uv, float amount) {
  float aspect = u_res.x / max(u_res.y, 1.0);
  vec2 p = (uv - 0.5) * vec2(aspect, 1.0);
  float radius = length(p);
  float angle = atan(p.y, p.x);
  float segments = floor(mix(3.0, 18.0, amount));
  float segment = TAU / segments;
  angle = abs(mod(angle + segment * 0.5, segment) - segment * 0.5);
  p = vec2(cos(angle), sin(angle)) * radius;
  return p / vec2(aspect, 1.0) + 0.5;
}

vec2 pointerWarp(vec2 uv, float t, float energy) {
  float aspect = u_res.x / max(u_res.y, 1.0);
  vec2 delta = (uv - u_pointer) * vec2(aspect, 1.0);
  float dist = length(delta);
  float radius = mix(0.075, 0.72, u_mouse_size);
  float influence = exp(-dist * dist / max(radius * radius, 0.0001));
  float pressed = mix(0.72, 1.75, u_pointer_down);
  float force = u_mouse_force * influence * pressed * u_pointer_active;

  if (u_mouse_mode < 0.5) {
    delta = rotate2d(delta, force * (1.2 + energy * 1.8));
  } else if (u_mouse_mode < 1.5) {
    delta *= 1.0 - force * 0.48;
  } else if (u_mouse_mode < 2.5) {
    delta.x += sin(delta.y * 42.0 - t * 5.0) * force * 0.075;
    delta.y += u_pointer_velocity.y * force * 0.18;
  } else {
    float melt = noise(vec2(delta.x * 9.0, t * 0.7)) - 0.25;
    delta.y += melt * force * 0.28 + u_pointer_velocity.y * force * 0.2;
  }

  return u_pointer + delta / vec2(aspect, 1.0);
}

vec2 spatialWarp(vec2 uv, float t, float energy) {
  float aspect = u_res.x / max(u_res.y, 1.0);
  vec2 p = (uv - 0.5) * vec2(aspect, 1.0);
  float radius = length(p);

  float autoPhase = t * u_motion;
  float swirl = u_swirl * (1.15 + 1.8 * sin(autoPhase * 0.37 + radius * 4.0));
  swirl += energy * u_swirl * 1.5;
  p = rotate2d(p, swirl * (1.0 - smoothstep(0.05, 1.05, radius)));

  float barrel = 1.0 + u_warp * 0.55 * (radius * radius - 0.25);
  p *= barrel;

  float waves = sin(radius * mix(12.0, 58.0, u_ripple) - autoPhase * 4.2);
  p += normalize(p + 0.0001) * waves * u_ripple * (0.025 + energy * 0.035);
  p.x += sin(p.y * 12.0 + autoPhase * 1.7) * u_warp * 0.045;
  p.y += cos(p.x * 11.0 - autoPhase * 1.3) * u_warp * 0.04;

  vec2 fluid = vec2(
    fbm(p * 2.8 + autoPhase * 0.19),
    fbm(p.yx * 3.1 - autoPhase * 0.16)
  ) - 0.5;
  p += fluid * u_warp * 0.13;
  p *= mix(1.0, 0.42, u_zoom);

  return p / vec2(aspect, 1.0) + 0.5;
}

vec3 sceneAt(vec2 uv, vec2 feedbackOffset) {
  vec3 live = videoAt(uv);
  vec3 previous = texture2D(u_previous, clamp(uv + feedbackOffset, 0.001, 0.999)).rgb;
  float persistence = u_feedback * mix(0.16, 0.94, u_trails);
  previous *= mix(0.9, 1.015, u_trails);
  return mix(live, previous, clamp(persistence, 0.0, 0.965));
}

float edgeAt(vec2 uv) {
  vec2 px = 1.5 / u_res;
  float l = dot(videoAt(uv - vec2(px.x, 0.0)), vec3(0.299, 0.587, 0.114));
  float r = dot(videoAt(uv + vec2(px.x, 0.0)), vec3(0.299, 0.587, 0.114));
  float b = dot(videoAt(uv - vec2(0.0, px.y)), vec3(0.299, 0.587, 0.114));
  float top = dot(videoAt(uv + vec2(0.0, px.y)), vec3(0.299, 0.587, 0.114));
  return clamp(length(vec2(r - l, top - b)) * 4.5, 0.0, 1.0);
}

float synthShapes(vec2 uv, float t) {
  float aspect = u_res.x / max(u_res.y, 1.0);
  vec2 p = (uv - 0.5) * vec2(aspect, 1.0);
  float result = 0.0;
  for (int i = 0; i < 5; i++) {
    float fi = float(i);
    vec2 center = vec2(
      sin(t * (0.21 + fi * 0.04) + fi * 2.7),
      cos(t * (0.18 + fi * 0.03) + fi * 1.9)
    ) * vec2(0.48, 0.34);
    vec2 q = p - center;
    float angle = atan(q.y, q.x);
    float radius = 0.08 + 0.035 * sin(angle * (3.0 + fi) + t + fi);
    float ring = abs(length(q) - radius);
    result = max(result, smoothstep(0.022, 0.002, ring));
  }
  float grid = abs(sin((p.x + p.y) * 16.0 + t) * sin((p.x - p.y) * 16.0 - t));
  result = max(result, smoothstep(0.08, 0.0, grid) * 0.6);
  return result;
}

vec3 thermalPalette(float x) {
  x = clamp(x, 0.0, 1.0);
  vec3 cold = vec3(0.015, 0.0, 0.12);
  vec3 violet = vec3(0.35, 0.0, 0.72);
  vec3 fire = vec3(1.0, 0.08, 0.0);
  vec3 gold = vec3(1.0, 0.82, 0.04);
  vec3 whiteHot = vec3(1.0, 1.0, 0.88);
  vec3 a = mix(cold, violet, smoothstep(0.0, 0.3, x));
  vec3 b = mix(a, fire, smoothstep(0.22, 0.55, x));
  vec3 c = mix(b, gold, smoothstep(0.48, 0.78, x));
  return mix(c, whiteHot, smoothstep(0.76, 1.0, x));
}

// --- Reactor 3D -------------------------------------------------------------
// A compact signed-distance-field scene. Unlike the other signal worlds this
// traces actual camera rays through a lit 3D space, then projects the source
// onto the geometry so video, images and audio canvases become its skin.
mat2 reactorRot(float a) {
  float c = cos(a);
  float s = sin(a);
  return mat2(c, -s, s, c);
}

float reactorTorus(vec3 p, vec2 radii) {
  return length(vec2(length(p.xz) - radii.x, p.y)) - radii.y;
}

vec2 reactorMap(vec3 p, float t, float energy) {
  vec3 core = p;
  core.xz = reactorRot(t * 0.34) * core.xz;
  core.xy = reactorRot(t * 0.23) * core.xy;
  float facets = mix(3.0, 8.0, u_shader_detail);
  float body = length(core) - 0.68;
  body += sin(core.x * facets) * sin(core.y * facets) * sin(core.z * facets)
    * (0.075 + energy * 0.045);

  vec3 ringA = p;
  ringA.xy = reactorRot(0.72 + t * 0.31) * ringA.xy;
  float ring = reactorTorus(ringA, vec2(1.02, 0.045 + energy * 0.025));

  vec3 ringB = p;
  ringB.yz = reactorRot(-0.9 + t * 0.21) * ringB.yz;
  ring = min(ring, reactorTorus(ringB, vec2(1.18, 0.026)));

  vec3 ringC = p;
  ringC.xz = reactorRot(t * -0.27) * ringC.xz;
  ringC.xy = reactorRot(1.25) * ringC.xy;
  ring = min(ring, reactorTorus(ringC, vec2(1.34, 0.018)));

  float floorPlane = p.y + 1.18;
  vec2 hit = body < ring ? vec2(body, 1.0) : vec2(ring, 2.0);
  if (floorPlane < hit.x) hit = vec2(floorPlane, 3.0);
  return hit;
}

vec3 reactorNormal(vec3 p, float t, float energy) {
  vec2 e = vec2(0.0025, 0.0);
  float d = reactorMap(p, t, energy).x;
  return normalize(vec3(
    reactorMap(p + e.xyy, t, energy).x - d,
    reactorMap(p + e.yxy, t, energy).x - d,
    reactorMap(p + e.yyx, t, energy).x - d
  ));
}

vec3 reactorBackground(vec3 rd, float t, float energy) {
  float horizon = pow(max(0.0, 1.0 - abs(rd.y + 0.02) * 5.0), 7.0);
  float starSeed = hash(floor(vec2(atan(rd.z, rd.x), rd.y) * vec2(210.0, 340.0)));
  float stars = step(0.992, starSeed) * pow(max(rd.y + 0.4, 0.0), 1.5);
  vec3 dusk = mix(vec3(0.003, 0.004, 0.012), vec3(0.035, 0.008, 0.07), max(rd.y, 0.0));
  dusk += hsv2rgb(vec3(fract(u_hue + 0.64), 0.82, 1.0)) * horizon * (0.12 + energy * 0.18);
  dusk += stars * (0.45 + 0.55 * sin(starSeed * 90.0 + t * 2.0));
  return dusk;
}

vec3 renderReactor(vec2 uv, float t, float energy) {
  float aspect = u_res.x / max(u_res.y, 1.0);
  vec2 screen = (uv * 2.0 - 1.0) * vec2(aspect, 1.0);

  float motion = u_motion;
  float pointerYaw = (u_pointer.x - 0.5) * u_pointer_active * 1.1;
  float pointerPitch = (u_pointer.y - 0.5) * u_pointer_active * 0.55;
  float orbit = t * (0.12 + motion * 0.16) + pointerYaw;
  vec3 ro = vec3(sin(orbit) * 3.45, 0.28 + sin(t * 0.19) * 0.22 - pointerPitch, cos(orbit) * 3.45);
  vec3 target = vec3(0.0, -0.04, 0.0);
  vec3 forward = normalize(target - ro);
  vec3 right = normalize(cross(forward, vec3(0.0, 1.0, 0.0)));
  vec3 up = cross(right, forward);
  vec3 rd = normalize(forward * 1.75 + right * screen.x + up * screen.y);

  float travel = 0.0;
  float material = 0.0;
  bool hit = false;
  for (int i = 0; i < 64; i++) {
    vec3 pos = ro + rd * travel;
    vec2 scene = reactorMap(pos, t, energy);
    if (scene.x < 0.0025) {
      material = scene.y;
      hit = true;
      break;
    }
    travel += scene.x * 0.72;
    if (travel > 8.0) break;
  }

  vec3 col = reactorBackground(rd, t, energy);
  if (hit) {
    vec3 pos = ro + rd * travel;
    vec3 normal = reactorNormal(pos, t, energy);
    vec3 viewDir = -rd;
    vec3 lightDir = normalize(vec3(-0.6, 0.9, 0.45));
    float diffuse = max(dot(normal, lightDir), 0.0);
    float rim = pow(1.0 - max(dot(normal, viewDir), 0.0), 2.4);
    float specular = pow(max(dot(reflect(-lightDir, normal), viewDir), 0.0), 42.0);
    vec3 neon = hsv2rgb(vec3(fract(u_hue + 0.72 + energy * 0.08), 0.9, 1.0));
    vec3 hot = hsv2rgb(vec3(fract(u_hue + 0.06), 0.8, 1.0));

    if (material < 1.5) {
      vec3 sphere = normalize(pos);
      vec2 mediaUv = vec2(atan(sphere.z, sphere.x) / TAU + 0.5, asin(clamp(sphere.y, -1.0, 1.0)) / PI + 0.5);
      mediaUv.x += t * 0.025;
      vec3 media = videoAt(fract(mediaUv));
      float pulse = 0.55 + 0.45 * sin(length(pos) * 38.0 - t * 4.0 - energy * 7.0);
      col = media * (0.24 + diffuse * 0.9);
      col += mix(neon, hot, pulse) * (rim * 1.35 + specular * 1.7 + pulse * energy * 0.22);
    } else if (material < 2.5) {
      float current = 0.65 + 0.35 * sin(atan(pos.z, pos.x) * 12.0 - t * 7.0 + pos.y * 18.0);
      col = mix(neon, hot, current) * (1.4 + energy * 1.3);
      col += vec3(1.0) * specular * 2.0;
    } else {
      vec2 cell = abs(fract(pos.xz * mix(2.2, 5.5, u_shader_detail)) - 0.5);
      float grid = 1.0 - smoothstep(0.015, 0.055, min(cell.x, cell.y));
      vec3 reflected = reactorBackground(reflect(rd, normal), t, energy);
      col = reflected * 0.35 + vec3(0.008, 0.01, 0.018) * (0.3 + diffuse);
      col += neon * grid * (0.45 + energy * 0.9) * exp(-length(pos.xz) * 0.14);
      col += specular * 0.8;
    }

    float fog = 1.0 - exp(-travel * travel * 0.018);
    col = mix(col, reactorBackground(rd, t, energy), fog);
  }

  // Cheap bloom around the core silhouette keeps it readable against dark media.
  float coreGlow = 0.018 / max(0.018, length(screen) - 0.3);
  col += hsv2rgb(vec3(fract(u_hue + 0.7), 0.82, 1.0)) * coreGlow * (0.12 + energy * 0.12);
  return col;
}

vec3 shaderWorldColor(vec3 col, vec2 uv, float t, float energy) {
  float mode = floor(u_shader_mode + 0.5);
  float amount = u_shader_mix;
  float lum = dot(col, vec3(0.299, 0.587, 0.114));
  vec3 look = col;
  float aspect = u_res.x / max(u_res.y, 1.0);
  vec2 p = (uv - 0.5) * vec2(aspect, 1.0);

  if (mode < 0.5) {
    return col;
  } else if (mode < 1.5) { // Mercury cells
    vec2 center;
    float border;
    float cells = mix(3.0, 14.0, u_shader_detail);
    voronoiCell(p * cells, t * 0.16, center, border);
    float seam = smoothstep(0.13, 0.015, border);
    float shine = pow(1.0 - clamp(lum, 0.0, 1.0), 2.0);
    look = mix(col * vec3(0.58, 0.7, 0.82), vec3(1.0, 0.78, 0.95), seam);
    look += shine * vec3(0.18, 0.32, 0.46);
  } else if (mode < 2.5) { // Wormhole
    float ring = 0.5 + 0.5 * sin(length(p) * 74.0 - t * 5.0);
    look = mix(col, col.brg, ring * 0.7);
    look += hsv2rgb(vec3(fract(length(p) * 2.4 - t * 0.08), 0.9, 1.0)) * ring * 0.16;
  } else if (mode < 3.5) { // Pixel melt
    float steps = mix(12.0, 3.0, amount);
    look = floor(col * steps) / steps;
    look = mix(look, look.gbr, step(0.64, hash(floor(gl_FragCoord.xy / 7.0) + floor(t * 2.0))) * 0.45);
  } else if (mode < 4.5) { // Thermal ghost
    float heat = clamp(lum * 1.15 + fbm(p * 5.0 + t * 0.12) * 0.22 + energy * 0.3, 0.0, 1.0);
    look = thermalPalette(heat);
    look += thermalPalette(clamp(edgeAt(uv) + 0.25, 0.0, 1.0)) * edgeAt(uv) * 0.42;
  } else if (mode < 5.5) { // Halftone riot
    float scale = mix(3.0, 11.0, u_shader_detail);
    vec2 dotUv = fract(gl_FragCoord.xy / scale) - 0.5;
    float dotMask = smoothstep(0.48, 0.08, length(dotUv) / max(0.18, 1.0 - lum));
    vec3 ink = hsv2rgb(vec3(fract(lum * 0.72 + t * 0.015), 0.86, 0.95));
    look = mix(vec3(0.025), ink, dotMask);
    float cross = step(0.93, sin((gl_FragCoord.x + gl_FragCoord.y) * 0.22) * 0.5 + 0.5);
    look += cross * col * 0.35;
  } else if (mode < 6.5) { // Datamosh
    float block = hash(floor(uv * vec2(32.0, 18.0)) + floor(t * 3.0));
    look = mix(col, col.rbg, step(0.58, block) * 0.8);
    look = floor(look * mix(20.0, 5.0, amount)) / mix(20.0, 5.0, amount);
    look.r += step(0.82, block) * 0.3;
  } else if (mode < 7.5) { // Recursive dream
    float diamond = abs(fract((p.x + p.y) * 4.0) - 0.5) + abs(fract((p.x - p.y) * 4.0) - 0.5);
    look = mix(col, 1.0 - col.bgr, smoothstep(0.34, 0.75, diamond));
    look *= 0.82 + 0.28 * sin(diamond * 18.0 - t);
  } else if (mode < 8.5) { // Oil slick
    float bands = floor((lum + fbm(p * 7.0 + t * 0.1) * 0.38) * mix(5.0, 17.0, u_shader_detail));
    float hue = fract(bands * 0.137 + lum * 0.3 + t * 0.025);
    look = hsv2rgb(vec3(hue, 0.86, 0.24 + lum * 0.92));
    look += pow(edgeAt(uv), 0.7) * vec3(0.4, 0.65, 1.0);
  } else if (mode < 9.5) { // Slit scanner
    float stripe = 0.5 + 0.5 * sin(uv.x * mix(70.0, 280.0, u_shader_detail) + t * 4.0);
    look = mix(col.grb, col.brg, stripe);
    look *= 0.72 + stripe * 0.5;
  } else if (mode < 10.5) { // Singularity lens
    float r = length(p - vec2(sin(t * 0.23), cos(t * 0.19)) * 0.16 * u_motion);
    float voidDisk = smoothstep(0.115, 0.165, r);
    float accretion = exp(-abs(r - 0.205) * 48.0);
    vec3 fire = hsv2rgb(vec3(fract(t * 0.025 + r), 0.92, 1.0));
    look = col * voidDisk + fire * accretion * (1.2 + energy);
  } else if (mode < 11.5) { // Stained glass
    vec2 center;
    float border;
    float cells = mix(4.0, 18.0, u_shader_detail);
    voronoiCell(p * cells, t * 0.04, center, border);
    float lead = smoothstep(0.095, 0.025, border);
    vec3 glass = hsv2rgb(vec3(fract(lum * 0.8 + hash(floor(center)) * 0.45 + u_hue), 0.82, 0.35 + lum * 0.78));
    look = mix(glass, vec3(0.005), lead * 0.94);
  } else if (mode < 12.5) { // Spectral X-ray
    float edge = edgeAt(uv);
    float bone = pow(1.0 - lum, 1.65);
    look = vec3(0.0, bone * 0.42, bone * 0.68) + hsv2rgb(vec3(fract(edge + t * 0.04), 0.78, 1.0)) * edge * 2.2;
  } else if (mode < 13.5) { // CRT void
    float triad = mod(gl_FragCoord.x, 3.0);
    vec3 mask = triad < 1.0 ? vec3(1.0, 0.22, 0.18) : (triad < 2.0 ? vec3(0.18, 1.0, 0.24) : vec3(0.2, 0.3, 1.0));
    float raster = 0.72 + 0.28 * sin(gl_FragCoord.y * PI);
    look = pow(max(col, 0.0), vec3(0.78)) * mask * 1.75 * raster;
  } else if (mode < 14.5) { // Cubist shatter
    float facets = floor(lum * 5.0) / 5.0;
    look = hsv2rgb(vec3(fract(facets * 0.72 + hash(floor(p * 8.0)) * 0.28), 0.76, 0.28 + facets));
    look += edgeAt(uv) * vec3(1.0, 0.45, 0.18);
  } else if (mode < 15.5) { // Echo bloom
    vec2 radial = normalize(p + 0.0001) / vec2(aspect, 1.0);
    vec3 echoA = sceneAt(uv + radial * 0.018, radial * 0.008);
    vec3 echoB = sceneAt(uv + radial * 0.042, radial * 0.016);
    look = max(col, echoA * vec3(1.0, 0.35, 0.8));
    look = max(look, echoB * vec3(0.15, 0.7, 1.0));
  } else if (mode < 16.5) { // Laser etch
    float edge = edgeAt(uv);
    float etched = smoothstep(0.12, 0.52, edge + abs(lum - 0.5) * 0.18);
    vec3 laser = hsv2rgb(vec3(fract(u_hue + t * 0.05 + uv.y * 0.25), 1.0, 1.0));
    look = laser * etched * (1.2 + edge) + col * 0.08;
  } else if (mode < 17.5) { // Liquid topography
    float terrain = lum + fbm(p * mix(4.0, 12.0, u_shader_detail) + t * 0.1) * 0.42;
    float contour = smoothstep(0.42, 0.5, abs(fract(terrain * 9.0) - 0.5));
    look = hsv2rgb(vec3(fract(terrain * 0.48 + t * 0.02), 0.78, 0.18 + lum));
    look += (1.0 - contour) * vec3(0.55, 0.92, 1.0) * 0.5;
  } else { // Reactor 3D
    look = renderReactor(uv, t, energy);
  }

  return mix(col, look, amount);
}

void main() {
  float t = u_time * u_speed;
  float energy = clamp(u_audio_level * u_audio, 0.0, 1.0);
  vec2 uv = v_uv;

  uv = shaderWorldWarp(uv, t, energy);

  if (u_kaleido > 0.015) {
    uv = mix(uv, kaleidoscope(uv, u_kaleido), smoothstep(0.0, 0.7, u_kaleido));
  }

  if (u_mirror > 0.01) {
    vec2 folded = abs(uv * 2.0 - 1.0);
    if (u_mirror < 0.5) folded.y = uv.y;
    uv = mix(uv, folded, smoothstep(0.0, 0.72, u_mirror));
  }

  uv = pointerWarp(uv, t, energy);
  uv = spatialWarp(uv, t, energy);

  if (u_glitch > 0.01) {
    float slice = floor(uv.y * mix(8.0, 70.0, u_glitch));
    float burst = step(0.72 - u_glitch * 0.4, hash(vec2(slice, floor(t * 7.0))));
    uv.x += (hash(vec2(slice, floor(t * 13.0))) - 0.5) * u_glitch * 0.17 * burst;
  }

  vec2 feedbackDrift = (vec2(fbm(uv * 3.0 + t * 0.1), fbm(uv.yx * 3.0 - t * 0.1)) - 0.5)
    * u_feedback * u_warp * 0.018;
  feedbackDrift += u_pointer_velocity * u_feedback * u_pointer_down * 0.025;

  vec2 chromaDir = normalize((uv - mix(vec2(0.5), u_pointer, u_pointer_active)) * vec2(u_res.x / u_res.y, 1.0) + 0.0001);
  float split = u_chroma * (0.004 + u_chroma * 0.026) * (1.0 + energy);
  if (u_mouse_mode > 1.5 && u_mouse_mode < 2.5) {
    split *= 1.0 + u_mouse_force * u_pointer_active * 3.0;
  }

  vec3 center = sceneAt(uv, feedbackDrift);
  vec3 col = vec3(
    sceneAt(uv + chromaDir * split, feedbackDrift).r,
    center.g,
    sceneAt(uv - chromaDir * split * 1.2, feedbackDrift).b
  );

  vec3 hsv = rgb2hsv(max(col, 0.0));
  hsv.x = fract(hsv.x + u_hue + sin(uv.x * 7.0 + t * u_motion) * u_hue * 0.12);
  hsv.y = clamp(hsv.y * mix(0.15, 2.15, u_saturation), 0.0, 1.0);
  col = hsv2rgb(hsv);
  col = (col - 0.5) * mix(0.55, 2.25, u_contrast) + 0.5;

  vec3 solar = 1.0 - abs(col * 2.0 - 1.0);
  col = mix(col, solar, u_solarize);

  float edge = edgeAt(uv) * u_edges;
  vec3 edgeColor = hsv2rgb(vec3(fract(u_hue + t * 0.035 + edge), 0.95, 1.0));
  col += edgeColor * edge * (0.55 + u_edges * 1.4);

  float shape = synthShapes(uv, t * u_motion) * u_shapes;
  vec3 shapeColor = hsv2rgb(vec3(fract(u_hue + 0.17 + t * 0.025), 0.9, 1.0));
  col = mix(col, max(col, shapeColor), shape * 0.82);

  col = shaderWorldColor(col, uv, t, energy);

  if (u_glitch > 0.35) {
    float levels = mix(32.0, 4.0, (u_glitch - 0.35) / 0.65);
    col = mix(col, floor(col * levels) / levels, (u_glitch - 0.35) * 0.72);
  }

  float grain = hash(v_uv * u_res + fract(t) * 913.7) - 0.5;
  col += grain * u_grain * 0.28;
  float scan = 0.5 + 0.5 * sin(v_uv.y * u_res.y * mix(0.45, 1.5, u_scanlines));
  col *= 1.0 - u_scanlines * (0.05 + 0.2 * scan);

  // Soft luminance pulse \u2014 never hard on/off (that reads as broken flicker).
  float flash = 0.5 + 0.5 * sin(t * mix(3.5, 11.0, u_strobe) + energy * PI);
  col *= mix(1.0, mix(0.78, 1.22, flash), u_strobe * 0.5);
  col *= 1.0 + energy * 0.16;

  float vignette = smoothstep(0.92, 0.22, length(v_uv - 0.5));
  col *= mix(1.0, vignette, 0.14);
  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`;
function compile(gl, type, source) {
  const shader = gl.createShader(type);
  if (!shader) throw new Error("Failed to create shader");
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const info = gl.getShaderInfoLog(shader) || "Unknown shader error";
    gl.deleteShader(shader);
    throw new Error(info);
  }
  return shader;
}
function makeProgram(gl, vertex, fragmentSource) {
  const fragment = compile(gl, gl.FRAGMENT_SHADER, fragmentSource);
  const program = gl.createProgram();
  if (!program) throw new Error("Failed to create WebGL program");
  gl.attachShader(program, vertex);
  gl.attachShader(program, fragment);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    throw new Error(gl.getProgramInfoLog(program) || "WebGL program failed to link");
  }
  return { program, fragment };
}
function sourceSize(source) {
  if (source instanceof HTMLVideoElement) {
    return {
      width: Math.max(source.videoWidth, 1),
      height: Math.max(source.videoHeight, 1),
      // Skip seeking/blank frames so the last good texture stays on screen.
      ready: source.readyState >= 2 && source.videoWidth > 0 && !source.seeking
    };
  }
  if (source instanceof HTMLImageElement) {
    return {
      width: Math.max(source.naturalWidth, 1),
      height: Math.max(source.naturalHeight, 1),
      ready: source.complete && source.naturalWidth > 0
    };
  }
  return {
    width: Math.max(source.width, 1),
    height: Math.max(source.height, 1),
    ready: source.width > 0 && source.height > 0
  };
}
function createMorpher(canvas, initialSource, initial = DEFAULT_TRIP) {
  const gl = canvas.getContext("webgl", {
    alpha: false,
    antialias: false,
    preserveDrawingBuffer: true
  });
  if (!gl) throw new Error("This browser does not support WebGL");
  const vertex = compile(gl, gl.VERTEX_SHADER, VERT);
  const effect = makeProgram(gl, vertex, FRAG);
  const copy = makeProgram(gl, vertex, COPY_FRAG);
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
    gl.STATIC_DRAW
  );
  const videoTexture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, videoTexture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texImage2D(
    gl.TEXTURE_2D,
    0,
    gl.RGBA,
    1,
    1,
    0,
    gl.RGBA,
    gl.UNSIGNED_BYTE,
    new Uint8Array([0, 0, 0, 255])
  );
  const feedbackTextures = [];
  const framebuffers = [];
  for (let i3 = 0; i3 < 2; i3 += 1) {
    const texture = gl.createTexture();
    const framebuffer = gl.createFramebuffer();
    if (!texture || !framebuffer) throw new Error("Failed to create feedback buffers");
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
    gl.framebufferTexture2D(
      gl.FRAMEBUFFER,
      gl.COLOR_ATTACHMENT0,
      gl.TEXTURE_2D,
      texture,
      0
    );
    feedbackTextures.push(texture);
    framebuffers.push(framebuffer);
  }
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  const uniforms = /* @__PURE__ */ new Map();
  const uniform = (name) => {
    if (!uniforms.has(name)) uniforms.set(name, gl.getUniformLocation(effect.program, name));
    return uniforms.get(name) ?? null;
  };
  let params = { ...initial };
  let source = initialSource;
  let pointer = {
    x: 0.5,
    y: 0.5,
    velocityX: 0,
    velocityY: 0,
    down: false,
    active: false
  };
  let smoothPointer = { ...pointer };
  let audioLevel = 0;
  let smoothAudio = 0;
  let raf = 0;
  let alive = true;
  let readIndex = 0;
  let start = performance.now();
  let pixelRatioCap = 1.75;
  let lastCssWidth = 1;
  let lastCssHeight = 1;
  function bindGeometry(program) {
    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    const position = gl.getAttribLocation(program, "a_pos");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
  }
  function clearFeedback() {
    for (const framebuffer of framebuffers) {
      gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
    }
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  }
  function allocateFeedback(width, height, wipe = true) {
    for (const texture of feedbackTextures) {
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        gl.RGBA,
        width,
        height,
        0,
        gl.RGBA,
        gl.UNSIGNED_BYTE,
        null
      );
    }
    if (wipe) clearFeedback();
  }
  function renderFrame() {
    if (!alive) return;
    const width = canvas.width;
    const height = canvas.height;
    const writeIndex = 1 - readIndex;
    const frame = sourceSize(source);
    if (frame.ready) {
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, videoTexture);
      try {
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
      } catch {
      }
    }
    smoothPointer.x += (pointer.x - smoothPointer.x) * 0.24;
    smoothPointer.y += (pointer.y - smoothPointer.y) * 0.24;
    smoothPointer.velocityX += (pointer.velocityX - smoothPointer.velocityX) * 0.18;
    smoothPointer.velocityY += (pointer.velocityY - smoothPointer.velocityY) * 0.18;
    pointer.velocityX *= 0.82;
    pointer.velocityY *= 0.82;
    smoothAudio += (audioLevel - smoothAudio) * (audioLevel > smoothAudio ? 0.22 : 0.06);
    gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffers[writeIndex]);
    gl.viewport(0, 0, width, height);
    bindGeometry(effect.program);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, videoTexture);
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, feedbackTextures[readIndex]);
    gl.uniform1i(uniform("u_video"), 0);
    gl.uniform1i(uniform("u_previous"), 1);
    gl.uniform2f(uniform("u_res"), width, height);
    gl.uniform2f(uniform("u_video_res"), frame.width, frame.height);
    gl.uniform1f(uniform("u_time"), (performance.now() - start) / 1e3);
    gl.uniform1f(uniform("u_audio_level"), smoothAudio);
    gl.uniform2f(uniform("u_pointer"), smoothPointer.x, smoothPointer.y);
    gl.uniform2f(
      uniform("u_pointer_velocity"),
      smoothPointer.velocityX,
      smoothPointer.velocityY
    );
    gl.uniform1f(uniform("u_pointer_down"), pointer.down ? 1 : 0);
    gl.uniform1f(uniform("u_pointer_active"), pointer.active ? 1 : 0);
    for (const [key, value] of Object.entries(params)) {
      gl.uniform1f(uniform(`u_${key.replace(/[A-Z]/g, (char) => `_${char.toLowerCase()}`)}`), value);
    }
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, width, height);
    bindGeometry(copy.program);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, feedbackTextures[writeIndex]);
    gl.uniform1i(gl.getUniformLocation(copy.program, "u_frame"), 0);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    readIndex = writeIndex;
  }
  function draw() {
    if (!alive) return;
    renderFrame();
    raf = requestAnimationFrame(draw);
  }
  allocateFeedback(1, 1);
  draw();
  return {
    setParams(next) {
      params = { ...next };
    },
    setPointer(next) {
      pointer = { ...next };
    },
    setSource(next) {
      source = next;
    },
    setAudioLevel(level) {
      audioLevel = Math.max(0, Math.min(1, level));
    },
    setPixelRatioCap(cap) {
      pixelRatioCap = Math.max(1, Math.min(3, cap));
      this.resize(lastCssWidth, lastCssHeight);
    },
    clearFeedback,
    resize(width, height) {
      lastCssWidth = width;
      lastCssHeight = height;
      const dpr = Math.min(window.devicePixelRatio || 1, pixelRatioCap);
      const nextWidth = Math.max(1, Math.round(width * dpr));
      const nextHeight = Math.max(1, Math.round(height * dpr));
      if (Math.abs(canvas.width - nextWidth) < 2 && Math.abs(canvas.height - nextHeight) < 2) {
        return;
      }
      canvas.width = nextWidth;
      canvas.height = nextHeight;
      allocateFeedback(nextWidth, nextHeight, true);
      renderFrame();
    },
    destroy() {
      alive = false;
      cancelAnimationFrame(raf);
      for (const framebuffer of framebuffers) gl.deleteFramebuffer(framebuffer);
      for (const texture of feedbackTextures) gl.deleteTexture(texture);
      gl.deleteTexture(videoTexture);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(effect.program);
      gl.deleteProgram(copy.program);
      gl.deleteShader(effect.fragment);
      gl.deleteShader(copy.fragment);
      gl.deleteShader(vertex);
    }
  };
}

// lakebed-source:client/media.ts
var AUDIO_VISUALS = [
  { id: "bars", name: "Wave bars" },
  { id: "radial", name: "Radial pulse" },
  { id: "tunnel", name: "Signal tunnel" },
  { id: "lattice", name: "Bass lattice" },
  { id: "ribbons", name: "Ribbon field" },
  { id: "bloom", name: "Orb bloom" },
  { id: "shards", name: "Hard shards" },
  { id: "plasma", name: "Acid plasma" }
];
var AUDIO_EXT = /\.(mp3|wav|ogg|m4a|aac|flac|opus|wma)$/i;
var IMAGE_EXT = /\.(png|jpe?g|gif|webp|bmp|svg|avif|ico)$/i;
var VIDEO_EXT = /\.(mp4|webm|mov|m4v|avi|mkv|ogv)$/i;
function classifyFile(file) {
  const type = file.type.toLowerCase();
  if (type.startsWith("video/")) return "video";
  if (type.startsWith("audio/")) return "audio";
  if (type.startsWith("image/")) return "image";
  if (AUDIO_EXT.test(file.name)) return "audio";
  if (IMAGE_EXT.test(file.name)) return "image";
  if (VIDEO_EXT.test(file.name)) return "video";
  return "data";
}
function sourceLabel(kind) {
  switch (kind) {
    case "video":
      return "Video";
    case "audio":
      return "Music";
    case "image":
      return "Image";
    case "data":
      return "Data";
    case "live":
      return "Live mic";
    default: {
      const _exhaustive = kind;
      return _exhaustive;
    }
  }
}
function audioVisualLabel(id) {
  return AUDIO_VISUALS.find((item) => item.id === id)?.name ?? id;
}
function isTimedSource(kind) {
  return kind === "video" || kind === "audio";
}
function hasPlaybackControls(kind) {
  return kind === "video" || kind === "audio";
}
function randomAudioVisual(exclude) {
  const pool = exclude ? AUDIO_VISUALS.filter((item) => item.id !== exclude) : AUDIO_VISUALS;
  const pick = pool[Math.floor(Math.random() * pool.length)];
  return pick?.id ?? "bars";
}
var ambientBins = new Uint8Array(128);
var mixedBins = new Uint8Array(128);
function ensureWorkBins(length) {
  if (ambientBins.length !== length) ambientBins = new Uint8Array(length);
  if (mixedBins.length !== length) mixedBins = new Uint8Array(length);
}
function fillAmbientSpectrum(target, time) {
  let total = 0;
  const n2 = target.length;
  for (let i3 = 0; i3 < n2; i3 += 1) {
    const t3 = i3 / Math.max(n2 - 1, 1);
    const wave = 0.4 + 0.28 * Math.sin(time * 0.95 + t3 * 8.4) + 0.18 * Math.sin(time * 1.65 + t3 * 19.5) + 0.14 * Math.sin(time * 0.33 + t3 * 3.2 + Math.sin(time * 0.21) * 2.2);
    const bass = Math.exp(-t3 * 3.4) * (0.5 + 0.5 * Math.sin(time * 1.25));
    const value = Math.round(
      Math.min(255, Math.max(0, (wave * 0.72 + bass * 0.58) * 225))
    );
    target[i3] = value;
    total += value;
  }
  return Math.min(1, total / n2 / 155);
}
function withAmbientFloor(spectrum, level, time) {
  ensureWorkBins(spectrum.length);
  const ambientLevel = fillAmbientSpectrum(ambientBins, time);
  const silence = Math.max(0, Math.min(1, (0.16 - level) / 0.16));
  if (silence < 0.02) {
    return { spectrum, level: Math.max(level, 0.2) };
  }
  for (let i3 = 0; i3 < spectrum.length; i3 += 1) {
    mixedBins[i3] = Math.max(
      spectrum[i3],
      Math.round(ambientBins[i3] * (0.45 + silence * 0.55))
    );
  }
  return {
    spectrum: mixedBins,
    level: Math.max(level, ambientLevel * (0.35 + silence * 0.45), 0.26)
  };
}
function fade(ctx, width, height, amount) {
  ctx.fillStyle = `rgba(6, 6, 10, ${amount})`;
  ctx.fillRect(0, 0, width, height);
}
function sampleAt(spectrum, t3) {
  const index = Math.min(
    spectrum.length - 1,
    Math.max(0, Math.floor(t3 * (spectrum.length - 1)))
  );
  return spectrum[index] / 255;
}
function band(spectrum, from, to) {
  const start = Math.floor(from * spectrum.length);
  const end = Math.max(start + 1, Math.floor(to * spectrum.length));
  let total = 0;
  for (let i3 = start; i3 < end; i3 += 1) total += spectrum[i3];
  return total / (end - start) / 255;
}
function paintBars(ctx, width, height, spectrum, level, time) {
  fade(ctx, width, height, 0.08 + (1 - level) * 0.06);
  const bins = Math.min(96, spectrum.length);
  const barWidth = width / bins;
  const mid = height * 0.55;
  for (let i3 = 0; i3 < bins; i3 += 1) {
    const sample = spectrum[i3] / 255;
    const boost = sample * (0.55 + level * 0.9);
    const x2 = i3 * barWidth;
    const h3 = boost * height * 0.72;
    const hue = i3 / bins * 280 + time * 28 + level * 40;
    ctx.fillStyle = `hsl(${hue % 360} ${55 + sample * 45}% ${38 + sample * 42}%)`;
    ctx.fillRect(x2, mid - h3 * 0.55, Math.max(1, barWidth * 0.82), h3);
  }
}
function paintRadial(ctx, width, height, spectrum, level, time) {
  fade(ctx, width, height, 0.1 + (1 - level) * 0.05);
  const cx = width * 0.5;
  const cy = height * 0.5;
  const bins = Math.min(72, spectrum.length);
  const maxR = Math.min(width, height) * 0.42;
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(time * 0.35);
  for (let i3 = 0; i3 < bins; i3 += 1) {
    const sample = spectrum[i3] / 255;
    const angle = i3 / bins * Math.PI * 2;
    const inner = maxR * (0.18 + level * 0.08);
    const outer = inner + sample * maxR * (0.55 + level * 0.55);
    ctx.beginPath();
    ctx.moveTo(Math.cos(angle) * inner, Math.sin(angle) * inner);
    ctx.lineTo(Math.cos(angle) * outer, Math.sin(angle) * outer);
    ctx.strokeStyle = `hsla(${i3 / bins * 300 + time * 40} 85% ${45 + sample * 40}% / ${0.35 + sample * 0.65})`;
    ctx.lineWidth = 2 + sample * 5;
    ctx.stroke();
  }
  ctx.restore();
  ctx.beginPath();
  ctx.arc(cx, cy, maxR * (0.12 + level * 0.2), 0, Math.PI * 2);
  ctx.fillStyle = `hsla(${time * 50 % 360} 90% 60% / ${0.12 + level * 0.35})`;
  ctx.fill();
}
function paintTunnel(ctx, width, height, spectrum, level, time) {
  fade(ctx, width, height, 0.12);
  const cx = width * 0.5;
  const cy = height * 0.5;
  const rings = 18;
  for (let i3 = rings; i3 >= 0; i3 -= 1) {
    const t3 = i3 / rings;
    const energy = sampleAt(spectrum, 1 - t3) * (0.5 + level);
    const radius = Math.min(width, height) * (0.05 + t3 * 0.55 + Math.sin(time * 2.2 + i3 * 0.4) * 0.02 + energy * 0.08);
    ctx.beginPath();
    ctx.ellipse(
      cx + Math.sin(time * 0.8 + i3 * 0.2) * energy * 18,
      cy + Math.cos(time * 0.7 + i3 * 0.15) * energy * 12,
      radius * (width / height),
      radius,
      time * 0.15,
      0,
      Math.PI * 2
    );
    ctx.strokeStyle = `hsla(${220 + t3 * 120 + time * 30 + energy * 80} 80% ${35 + energy * 45}% / ${0.15 + energy * 0.7})`;
    ctx.lineWidth = 1.5 + energy * 6;
    ctx.stroke();
  }
}
function paintLattice(ctx, width, height, spectrum, level, time) {
  fade(ctx, width, height, 0.14);
  const cols = 16;
  const rows = 9;
  const cellW = width / cols;
  const cellH = height / rows;
  const bass = band(spectrum, 0, 0.18);
  const mid = band(spectrum, 0.18, 0.55);
  const high = band(spectrum, 0.55, 1);
  for (let y3 = 0; y3 < rows; y3 += 1) {
    for (let x2 = 0; x2 < cols; x2 += 1) {
      const n2 = (x2 + y3 * cols) / (cols * rows);
      const pulse = sampleAt(spectrum, n2) * 0.65 + bass * (1 - Math.abs(x2 / cols - 0.5)) + mid * Math.sin(time + x2 * 0.4 + y3 * 0.3) * 0.25 + high * 0.15;
      const size = Math.max(0.08, pulse) * (0.55 + level * 0.7);
      const hue = 80 + n2 * 220 + time * 25 + bass * 60;
      ctx.fillStyle = `hsla(${hue % 360} 85% ${30 + pulse * 45}% / ${0.2 + pulse * 0.8})`;
      const w3 = cellW * size;
      const h3 = cellH * size;
      ctx.fillRect(
        x2 * cellW + (cellW - w3) * 0.5,
        y3 * cellH + (cellH - h3) * 0.5,
        w3,
        h3
      );
    }
  }
}
function paintRibbons(ctx, width, height, spectrum, level, time) {
  fade(ctx, width, height, 0.08 + (1 - level) * 0.05);
  const ribbons = 7;
  for (let r3 = 0; r3 < ribbons; r3 += 1) {
    const baseY = (r3 + 1) / (ribbons + 1) * height;
    ctx.beginPath();
    for (let x2 = 0; x2 <= width; x2 += 6) {
      const t3 = x2 / width;
      const sample = sampleAt(spectrum, (t3 + r3 * 0.07) % 1);
      const y3 = baseY + Math.sin(t3 * Math.PI * 4 + time * (1.2 + r3 * 0.15) + r3) * (18 + level * 40) + (sample - 0.5) * height * 0.28;
      if (x2 === 0) ctx.moveTo(x2, y3);
      else ctx.lineTo(x2, y3);
    }
    ctx.strokeStyle = `hsla(${(r3 * 42 + time * 35 + level * 50) % 360} 90% 60% / ${0.35 + level * 0.45})`;
    ctx.lineWidth = 2 + level * 5 + band(spectrum, r3 / ribbons, (r3 + 1) / ribbons) * 8;
    ctx.stroke();
  }
}
function paintBloom(ctx, width, height, spectrum, level, time) {
  fade(ctx, width, height, 0.1);
  const count = 28;
  for (let i3 = 0; i3 < count; i3 += 1) {
    const t3 = i3 / count;
    const sample = sampleAt(spectrum, t3);
    const orbit = 0.15 + sample * 0.35 + level * 0.12;
    const cx = width * (0.5 + Math.cos(time * (0.4 + t3) + i3 * 1.7) * orbit * (0.7 + sample));
    const cy = height * (0.5 + Math.sin(time * (0.35 + t3 * 0.8) + i3 * 1.3) * orbit * (0.55 + sample));
    const radius = (8 + sample * 48 + level * 24) * (0.6 + i3 % 3 * 0.2);
    const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
    const hue = (t3 * 280 + time * 40 + sample * 90) % 360;
    gradient.addColorStop(0, `hsla(${hue} 95% 70% / ${0.35 + sample * 0.55})`);
    gradient.addColorStop(0.55, `hsla(${(hue + 40) % 360} 80% 50% / ${0.12 + sample * 0.25})`);
    gradient.addColorStop(1, "hsla(0 0% 0% / 0)");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.fill();
  }
}
function paintShards(ctx, width, height, spectrum, level, time) {
  fade(ctx, width, height, 0.16);
  const shards = 24;
  for (let i3 = 0; i3 < shards; i3 += 1) {
    const t3 = i3 / shards;
    const sample = sampleAt(spectrum, t3);
    const energy = sample * (0.4 + level);
    const x2 = width * ((Math.sin(i3 * 12.9898 + time) * 0.5 + 0.5) * 0.9 + 0.05);
    const y3 = height * ((Math.cos(i3 * 78.233 + time * 0.7) * 0.5 + 0.5) * 0.9 + 0.05);
    const len = 20 + energy * 120;
    const angle = time * (0.8 + t3) + i3 * 0.9 + sample * 3;
    ctx.save();
    ctx.translate(x2, y3);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.moveTo(0, -len * 0.15);
    ctx.lineTo(len, 0);
    ctx.lineTo(0, len * 0.15);
    ctx.closePath();
    ctx.fillStyle = `hsla(${(i3 * 17 + time * 60) % 360} 90% ${40 + energy * 40}% / ${0.25 + energy * 0.7})`;
    ctx.fill();
    ctx.restore();
  }
}
function paintPlasma(ctx, width, height, spectrum, level, time) {
  fade(ctx, width, height, 0.07);
  const step = 8;
  const bass = band(spectrum, 0, 0.2);
  const mid = band(spectrum, 0.2, 0.6);
  const high = band(spectrum, 0.6, 1);
  for (let y3 = 0; y3 < height; y3 += step) {
    for (let x2 = 0; x2 < width; x2 += step) {
      const u4 = x2 / width;
      const v3 = y3 / height;
      const wave = Math.sin(u4 * 8 + time * 1.4 + bass * 4) * Math.cos(v3 * 7 - time * 1.1 + mid * 3) * 0.5 + 0.5;
      const spark = sampleAt(spectrum, (u4 + v3) * 0.5) * high;
      const value = Math.min(1, wave * (0.45 + level * 0.4) + spark * 0.55 + bass * 0.2);
      if (value < 0.18) continue;
      const hue = 160 + value * 140 + time * 20 + bass * 50;
      ctx.fillStyle = `hsla(${hue % 360} 85% ${25 + value * 50}% / ${0.15 + value * 0.7})`;
      ctx.fillRect(x2, y3, step + 1, step + 1);
    }
  }
}
function paintVisual(ctx, width, height, spectrum, level, time, visual) {
  switch (visual) {
    case "bars":
      paintBars(ctx, width, height, spectrum, level, time);
      break;
    case "radial":
      paintRadial(ctx, width, height, spectrum, level, time);
      break;
    case "tunnel":
      paintTunnel(ctx, width, height, spectrum, level, time);
      break;
    case "lattice":
      paintLattice(ctx, width, height, spectrum, level, time);
      break;
    case "ribbons":
      paintRibbons(ctx, width, height, spectrum, level, time);
      break;
    case "bloom":
      paintBloom(ctx, width, height, spectrum, level, time);
      break;
    case "shards":
      paintShards(ctx, width, height, spectrum, level, time);
      break;
    case "plasma":
      paintPlasma(ctx, width, height, spectrum, level, time);
      break;
    default: {
      const _exhaustive = visual;
      return _exhaustive;
    }
  }
}
function paintAudioVisual(canvas, spectrum, level, time, visual) {
  const width = canvas.width;
  const height = canvas.height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const signal = withAmbientFloor(spectrum, level, time);
  paintVisual(ctx, width, height, signal.spectrum, signal.level, time, visual);
}
function paintIdleVisual(canvas, visual, time) {
  ensureSpectrumCanvas(canvas);
  ensureWorkBins(128);
  const level = fillAmbientSpectrum(ambientBins, time);
  const ctx = canvas.getContext("2d");
  if (!ctx) return level;
  paintVisual(ctx, canvas.width, canvas.height, ambientBins, level, time, visual);
  return level;
}
function paintDataBytes(canvas, bytes) {
  const width = 256;
  const height = 256;
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const image = ctx.createImageData(width, height);
  const total = width * height;
  for (let i3 = 0; i3 < total; i3 += 1) {
    const a3 = bytes[i3 % bytes.length] ?? 0;
    const b2 = bytes[i3 * 3 % bytes.length] ?? 0;
    const c3 = bytes[(i3 * 7 + 13) % bytes.length] ?? 0;
    const o3 = i3 * 4;
    image.data[o3] = a3;
    image.data[o3 + 1] = b2;
    image.data[o3 + 2] = (a3 ^ c3) & 255;
    image.data[o3 + 3] = 255;
  }
  ctx.putImageData(image, 0, 0);
  const wash = ctx.createLinearGradient(0, 0, width, height);
  wash.addColorStop(0, "rgba(210,255,64,0.12)");
  wash.addColorStop(0.5, "rgba(157,114,255,0.1)");
  wash.addColorStop(1, "rgba(255,79,163,0.12)");
  ctx.fillStyle = wash;
  ctx.fillRect(0, 0, width, height);
}
function ensureSpectrumCanvas(canvas) {
  if (canvas.width !== 640 || canvas.height !== 360) {
    canvas.width = 640;
    canvas.height = 360;
  }
}
function levelFromSpectrum(spectrum) {
  const bins = Math.min(48, spectrum.length);
  let total = 0;
  for (let i3 = 0; i3 < bins; i3 += 1)
    total += spectrum[i3] * (1.35 - i3 / bins * 0.55);
  return Math.min(1, total / bins / 190);
}

// ../../.npm/_npx/3eb8d3eaaf4ef1b4/node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var f3 = 0;
function u3(e3, t3, n2, o3, i3, u4) {
  t3 || (t3 = {});
  var a3, c3, p3 = t3;
  if ("ref" in p3) for (c3 in p3 = {}, t3) "ref" == c3 ? a3 = t3[c3] : p3[c3] = t3[c3];
  var l3 = { type: e3, props: p3, key: n2, ref: a3, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f3, __i: -1, __u: 0, __source: i3, __self: u4 };
  if ("function" == typeof e3 && (a3 = e3.defaultProps)) for (c3 in a3) void 0 === p3[c3] && (p3[c3] = a3[c3]);
  return l.vnode && l.vnode(l3), l3;
}

// lakebed-source:client/index.tsx
var STUDIO_VIEW_KEY = "vaudio:showStudio";
function readShowStudio() {
  try {
    return localStorage.getItem(STUDIO_VIEW_KEY) === "1";
  } catch {
    return false;
  }
}
var FAVICON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" fill="#08080a"/>
  <path d="M5 8.5 23.5 5.5 26.5 23.5 8 26.5Z" fill="none" stroke="#6e6c68" stroke-width="1.2"/>
  <path d="M4 7.5 24.5 4.5 27.5 24.5 7 27.5Z" fill="none" stroke="#e8e6e0" stroke-width="1.7"/>
  <path d="M10 22.5 21.5 9.5" stroke="#e8e6e0" stroke-width="2.4" stroke-linecap="square"/>
  <path d="M11.2 22.5 22.7 9.5" stroke="#a87880" stroke-width="1.1" stroke-linecap="square" opacity=".85"/>
  <rect x="20.5" y="20.5" width="3.2" height="3.2" fill="#e8e6e0"/>
  <rect x="6.5" y="6.5" width="2.2" height="2.2" fill="#6e6c68"/>
</svg>`;
var GROUPS = [
  {
    id: "world",
    label: "World",
    description: "Swap the rendering engine, then tune how hard it takes over.",
    sliders: [
      {
        key: "shaderMix",
        label: "World intensity",
        hint: "Blend the engine with your source"
      },
      {
        key: "shaderDetail",
        label: "World detail",
        hint: "Scale, density and complexity"
      }
    ]
  },
  {
    id: "space",
    label: "Space",
    description: "Bend, fold and tunnel through the frame.",
    sliders: [
      {
        key: "warp",
        label: "Fluid warp",
        hint: "Organic displacement field"
      },
      { key: "swirl", label: "Swirl", hint: "Rotational gravity" },
      { key: "ripple", label: "Ripples", hint: "Radial wave pressure" },
      { key: "zoom", label: "Tunnel", hint: "Push into the image" },
      {
        key: "kaleido",
        label: "Kaleidoscope",
        hint: "3 to 18 mirrored segments"
      },
      {
        key: "mirror",
        label: "Mirror fold",
        hint: "Horizontal into quad symmetry"
      }
    ]
  },
  {
    id: "color",
    label: "Color",
    description: "Rebuild the spectrum into something radioactive.",
    sliders: [
      {
        key: "chroma",
        label: "Prism split",
        hint: "Separate RGB channels"
      },
      { key: "hue", label: "Hue orbit", hint: "Rotate the color wheel" },
      {
        key: "saturation",
        label: "Saturation",
        hint: "From drained to nuclear"
      },
      {
        key: "contrast",
        label: "Contrast",
        hint: "Crush and expand tone"
      },
      {
        key: "solarize",
        label: "Solarize",
        hint: "Invert around the midtones"
      },
      {
        key: "edges",
        label: "Neon edges",
        hint: "Spectral edge extraction"
      }
    ]
  },
  {
    id: "signal",
    label: "Signal",
    description: "Recursive echoes, damaged data and analog filth.",
    sliders: [
      {
        key: "feedback",
        label: "Feedback",
        hint: "Feed the last frame into this one"
      },
      {
        key: "trails",
        label: "Trail length",
        hint: "Persistence of recursive echoes"
      },
      {
        key: "glitch",
        label: "Data rot",
        hint: "Slices, jumps and posterization"
      },
      { key: "grain", label: "Grain", hint: "High-frequency noise" },
      {
        key: "scanlines",
        label: "Scanlines",
        hint: "CRT raster texture"
      },
      {
        key: "strobe",
        label: "Strobe",
        hint: "Soft luminance pulse"
      }
    ]
  },
  {
    id: "motion",
    label: "Motion",
    description: "Give the machine its own pulse and nervous system.",
    sliders: [
      {
        key: "motion",
        label: "Auto motion",
        hint: "How much the scene evolves itself"
      },
      {
        key: "speed",
        label: "Time speed",
        hint: "Slow drift to total panic",
        min: 0,
        max: 2
      },
      {
        key: "audio",
        label: "Audio react",
        hint: "Let bass and volume hit the shader"
      },
      {
        key: "shapes",
        label: "Synth geometry",
        hint: "Generative orbiting glyphs"
      }
    ]
  },
  {
    id: "cursor",
    label: "Cursor",
    description: "The stage is an instrument. Drag across it and hold to push harder.",
    sliders: [
      {
        key: "mouseForce",
        label: "Cursor force",
        hint: "Strength of your gesture"
      },
      {
        key: "mouseSize",
        label: "Field size",
        hint: "Radius around the cursor"
      }
    ]
  }
];
var CURSOR_MODES = [
  { value: 0, name: "Vortex", glyph: "\u21BB" },
  { value: 1, name: "Gravity", glyph: "\u25CE" },
  { value: 2, name: "Prism", glyph: "\u25B3" },
  { value: 3, name: "Melt", glyph: "\u2193" }
];
var SHADER_WORLDS = [
  { value: 0, name: "Raw signal", glyph: "\u25CB" },
  { value: 1, name: "Mercury cells", glyph: "\u25C9" },
  { value: 2, name: "Wormhole", glyph: "\u21AF" },
  { value: 3, name: "Pixel melt", glyph: "\u25A5" },
  { value: 4, name: "Thermal ghost", glyph: "\u2668" },
  { value: 5, name: "Halftone riot", glyph: "\u283F" },
  { value: 6, name: "Datamosh", glyph: "\u2301" },
  { value: 7, name: "Recursive dream", glyph: "\u25C7" },
  { value: 8, name: "Oil slick", glyph: "\u224B" },
  { value: 9, name: "Slit scanner", glyph: "\u25A4" },
  { value: 10, name: "Singularity", glyph: "\u25CF" },
  { value: 11, name: "Stained glass", glyph: "\u2B21" },
  { value: 12, name: "Spectral X-ray", glyph: "\u2727" },
  { value: 13, name: "CRT void", glyph: "\u25A6" },
  { value: 14, name: "Cubist shatter", glyph: "\u25E9" },
  { value: 15, name: "Echo bloom", glyph: "\u25CE" },
  { value: 16, name: "Laser etch", glyph: "\u2307" },
  { value: 17, name: "Topographic acid", glyph: "\u2240" },
  { value: 18, name: "Reactor 3D", glyph: "\u2B22" }
];
function makePreset(overrides) {
  return { ...CLEAN, ...overrides };
}
function createRandomTrip() {
  const next = { ...CLEAN };
  for (const key of Object.keys(next)) {
    if (key === "mouseMode") next[key] = Math.floor(Math.random() * 4);
    else if (key === "shaderMode")
      next[key] = 1 + Math.floor(Math.random() * (SHADER_WORLDS.length - 1));
    else if (key === "speed") next[key] = 0.35 + Math.random() * 1.35;
    else if (key === "contrast" || key === "saturation")
      next[key] = 0.5 + Math.random() * 0.5;
    else if (key === "shaderMix") next[key] = 0.5 + Math.random() * 0.5;
    else if (key === "shapes") next[key] = 0.28 + Math.random() * 0.52;
    else if (key === "motion") next[key] = 0.4 + Math.random() * 0.55;
    else if (key === "shaderDetail") next[key] = 0.35 + Math.random() * 0.55;
    else next[key] = Math.pow(Math.random(), 1.25);
  }
  next.feedback = Math.min(next.feedback, 0.72);
  next.scanlines = Math.min(next.scanlines, 0.45);
  next.strobe *= 0.35;
  next.audio = Math.min(next.audio, 0.55);
  return next;
}
var PRESETS = [
  { name: "Pure signal", code: "00", params: CLEAN },
  { name: "Liquid chrome", code: "01", params: DEFAULT_TRIP },
  {
    name: "Event horizon",
    code: "02",
    params: makePreset({
      warp: 0.78,
      swirl: 0.96,
      ripple: 0.56,
      zoom: 0.38,
      chroma: 0.52,
      hue: 0.64,
      saturation: 0.9,
      contrast: 0.72,
      solarize: 0.24,
      feedback: 0.76,
      trails: 0.91,
      motion: 0.82,
      speed: 0.72,
      audio: 0.55,
      mouseForce: 0.94,
      mouseSize: 0.62,
      mouseMode: 1
    })
  },
  {
    name: "Neon cathedral",
    code: "03",
    params: makePreset({
      warp: 0.22,
      swirl: 0.18,
      ripple: 0.28,
      kaleido: 0.88,
      mirror: 0.42,
      chroma: 0.48,
      hue: 0.78,
      saturation: 1,
      contrast: 0.66,
      solarize: 0.18,
      edges: 0.86,
      feedback: 0.28,
      trails: 0.64,
      shapes: 0.58,
      motion: 0.62,
      speed: 0.56,
      audio: 0.38,
      mouseForce: 0.76,
      mouseSize: 0.38
    })
  },
  {
    name: "Data s\xE9ance",
    code: "04",
    params: makePreset({
      warp: 0.34,
      ripple: 0.2,
      chroma: 0.82,
      hue: 0.48,
      saturation: 0.86,
      contrast: 0.74,
      solarize: 0.36,
      edges: 0.42,
      feedback: 0.52,
      trails: 0.78,
      glitch: 0.92,
      grain: 0.48,
      scanlines: 0.72,
      strobe: 0.12,
      motion: 0.74,
      speed: 1.3,
      audio: 0.64,
      mouseForce: 0.82,
      mouseSize: 0.31,
      mouseMode: 2
    })
  },
  {
    name: "Candy fracture",
    code: "05",
    params: makePreset({
      warp: 0.62,
      swirl: 0.48,
      ripple: 0.66,
      kaleido: 0.72,
      mirror: 0.26,
      chroma: 0.7,
      hue: 0.9,
      saturation: 1,
      contrast: 0.58,
      solarize: 0.78,
      edges: 0.52,
      feedback: 0.46,
      trails: 0.62,
      shapes: 0.72,
      motion: 0.9,
      speed: 1.12,
      audio: 0.5,
      mouseForce: 0.88,
      mouseSize: 0.5,
      mouseMode: 0
    })
  },
  {
    name: "Ghost memory",
    code: "06",
    params: makePreset({
      warp: 0.3,
      swirl: 0.16,
      ripple: 0.2,
      zoom: 0.12,
      chroma: 0.26,
      hue: 0.56,
      saturation: 0.42,
      contrast: 0.7,
      solarize: 0.12,
      edges: 0.18,
      feedback: 0.93,
      trails: 0.98,
      grain: 0.22,
      scanlines: 0.28,
      motion: 0.36,
      speed: 0.32,
      mouseForce: 0.7,
      mouseSize: 0.78,
      mouseMode: 3
    })
  },
  {
    name: "Mercury hive",
    code: "07",
    params: makePreset({ shaderMode: 1, shaderMix: 0.96, shaderDetail: 0.76, warp: 0.2, chroma: 0.34, hue: 0.58, saturation: 0.72, contrast: 0.72, edges: 0.2, motion: 0.52, speed: 0.62, audio: 0.48 })
  },
  {
    name: "Wormhole baptism",
    code: "08",
    params: makePreset({ shaderMode: 2, shaderMix: 0.92, shaderDetail: 0.78, swirl: 0.34, zoom: 0.42, chroma: 0.76, hue: 0.72, saturation: 1, contrast: 0.68, feedback: 0.38, trails: 0.7, motion: 0.72, speed: 0.84, audio: 0.62 })
  },
  {
    name: "Falling pixels",
    code: "09",
    params: makePreset({ shaderMode: 3, shaderMix: 0.94, shaderDetail: 0.64, chroma: 0.42, hue: 0.08, saturation: 0.94, contrast: 0.72, glitch: 0.26, feedback: 0.3, trails: 0.68, motion: 0.82, speed: 1.04, audio: 0.44 })
  },
  {
    name: "Predator fever",
    code: "10",
    params: makePreset({ shaderMode: 4, shaderMix: 1, shaderDetail: 0.7, warp: 0.22, ripple: 0.18, contrast: 0.68, edges: 0.34, grain: 0.12, motion: 0.48, speed: 0.56, audio: 0.92 })
  },
  {
    name: "Comic violence",
    code: "11",
    params: makePreset({ shaderMode: 5, shaderMix: 0.98, shaderDetail: 0.52, kaleido: 0.12, hue: 0.9, saturation: 1, contrast: 0.84, solarize: 0.18, shapes: 0.24, motion: 0.44, speed: 0.5, audio: 0.34 })
  },
  {
    name: "Codec possession",
    code: "12",
    params: makePreset({ shaderMode: 6, shaderMix: 0.98, shaderDetail: 0.82, chroma: 0.88, hue: 0.46, saturation: 0.9, contrast: 0.82, feedback: 0.78, trails: 0.92, glitch: 0.82, scanlines: 0.28, motion: 0.9, speed: 1.46, audio: 0.72 })
  },
  {
    name: "Infinite dollhouse",
    code: "13",
    params: makePreset({ shaderMode: 7, shaderMix: 0.92, shaderDetail: 0.74, mirror: 0.24, chroma: 0.28, hue: 0.2, saturation: 0.84, contrast: 0.64, solarize: 0.3, feedback: 0.48, trails: 0.8, motion: 0.48, speed: 0.46 })
  },
  {
    name: "Gasoline angel",
    code: "14",
    params: makePreset({ shaderMode: 8, shaderMix: 0.98, shaderDetail: 0.88, warp: 0.42, swirl: 0.2, hue: 0.68, saturation: 1, contrast: 0.7, solarize: 0.22, edges: 0.38, motion: 0.58, speed: 0.54, audio: 0.52 })
  },
  {
    name: "Time slicer",
    code: "15",
    params: makePreset({ shaderMode: 9, shaderMix: 0.94, shaderDetail: 0.7, chroma: 0.5, hue: 0.84, saturation: 0.9, contrast: 0.74, feedback: 0.44, trails: 0.82, scanlines: 0.2, motion: 0.76, speed: 1.08, audio: 0.46 })
  },
  {
    name: "Dead star",
    code: "16",
    params: makePreset({ shaderMode: 10, shaderMix: 1, shaderDetail: 0.72, swirl: 0.58, zoom: 0.3, chroma: 0.38, hue: 0.03, saturation: 0.92, contrast: 0.82, feedback: 0.4, trails: 0.72, motion: 0.64, speed: 0.58, audio: 0.82, mouseMode: 1 })
  },
  {
    name: "Rose window",
    code: "17",
    params: makePreset({ shaderMode: 11, shaderMix: 0.98, shaderDetail: 0.7, kaleido: 0.38, mirror: 0.16, hue: 0.92, saturation: 1, contrast: 0.66, edges: 0.18, shapes: 0.18, motion: 0.4, speed: 0.36, audio: 0.4 })
  },
  {
    name: "Ghost anatomy",
    code: "18",
    params: makePreset({ shaderMode: 12, shaderMix: 1, shaderDetail: 0.6, warp: 0.14, ripple: 0.18, chroma: 0.18, hue: 0.54, saturation: 0.5, contrast: 0.88, edges: 0.72, feedback: 0.22, grain: 0.18, motion: 0.42, speed: 0.48, audio: 0.5 })
  },
  {
    name: "Arcade afterlife",
    code: "19",
    params: makePreset({ shaderMode: 13, shaderMix: 0.98, shaderDetail: 0.78, warp: 0.12, chroma: 0.5, hue: 0.34, saturation: 0.9, contrast: 0.78, feedback: 0.36, trails: 0.74, grain: 0.16, scanlines: 0.74, motion: 0.52, speed: 0.62 })
  },
  {
    name: "Picasso panic",
    code: "20",
    params: makePreset({ shaderMode: 14, shaderMix: 0.96, shaderDetail: 0.66, mirror: 0.14, chroma: 0.3, hue: 0.12, saturation: 1, contrast: 0.7, edges: 0.46, shapes: 0.26, motion: 0.68, speed: 0.7, audio: 0.42 })
  },
  {
    name: "Cherub feedback",
    code: "21",
    params: makePreset({ shaderMode: 15, shaderMix: 0.92, shaderDetail: 0.72, ripple: 0.38, chroma: 0.58, hue: 0.86, saturation: 0.94, contrast: 0.62, feedback: 0.64, trails: 0.9, motion: 0.7, speed: 0.68, audio: 0.72 })
  },
  {
    name: "Laser autopsy",
    code: "22",
    params: makePreset({ shaderMode: 16, shaderMix: 1, shaderDetail: 0.82, kaleido: 0.28, chroma: 0.36, hue: 0.76, saturation: 1, contrast: 0.9, edges: 0.88, feedback: 0.28, trails: 0.68, shapes: 0.3, motion: 0.66, speed: 0.76, audio: 0.68 })
  },
  {
    name: "Acid cartography",
    code: "23",
    params: makePreset({ shaderMode: 17, shaderMix: 0.98, shaderDetail: 0.8, warp: 0.66, swirl: 0.12, ripple: 0.22, hue: 0.44, saturation: 1, contrast: 0.74, solarize: 0.16, edges: 0.2, motion: 0.72, speed: 0.62, audio: 0.66, mouseMode: 3 })
  },
  {
    name: "Reactor breach",
    code: "24",
    params: makePreset({ shaderMode: 18, shaderMix: 1, shaderDetail: 0.72, warp: 0.08, swirl: 0.12, ripple: 0.08, chroma: 0.18, hue: 0.82, saturation: 0.9, contrast: 0.68, feedback: 0.22, trails: 0.74, grain: 0.06, motion: 0.78, speed: 0.62, audio: 0.82, mouseForce: 0.78, mouseSize: 0.56, mouseMode: 0 })
  }
];
function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";
  return `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`;
}
function sliderValue(value, spec) {
  if (spec.max === 2) return `${value.toFixed(2)}\xD7`;
  return String(Math.round(value * 100)).padStart(3, "0");
}
function PlayPauseGlyph({ playing }) {
  if (playing) {
    return /* @__PURE__ */ u3(
      "span",
      {
        "aria-hidden": "true",
        className: "inline-flex h-[11px] w-[10px] items-stretch justify-between",
        children: [
          /* @__PURE__ */ u3("span", { className: "w-[3px] bg-current" }),
          /* @__PURE__ */ u3("span", { className: "w-[3px] bg-current" })
        ]
      }
    );
  }
  return /* @__PURE__ */ u3(
    "span",
    {
      "aria-hidden": "true",
      className: "ml-0.5 inline-block h-0 w-0 border-y-[6px] border-l-[10px] border-y-transparent border-l-current"
    }
  );
}
function VolumeGlyph({ volume }) {
  if (volume <= 1e-3) {
    return /* @__PURE__ */ u3(
      "svg",
      {
        width: "14",
        height: "14",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "square",
        "aria-hidden": "true",
        children: [
          /* @__PURE__ */ u3("path", { d: "M4 9v6h4l5 4V5L8 9H4z" }),
          /* @__PURE__ */ u3("path", { d: "M16 9l5 5M21 9l-5 5" })
        ]
      }
    );
  }
  return /* @__PURE__ */ u3(
    "svg",
    {
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "square",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ u3("path", { d: "M4 9v6h4l5 4V5L8 9H4z" }),
        volume > 0.45 ? /* @__PURE__ */ u3("path", { d: "M16 8.5a5 5 0 0 1 0 7" }) : /* @__PURE__ */ u3("path", { d: "M15.5 10.5a2.5 2.5 0 0 1 0 3" })
      ]
    }
  );
}
function App() {
  const videoRef = A2(null);
  const audioRef = A2(null);
  const imageRef = A2(null);
  const paintCanvasRef = A2(null);
  const canvasRef = A2(null);
  const stageRef = A2(null);
  const cursorRef = A2(null);
  const fileRef = A2(null);
  const morpherRef = A2(null);
  const recorderRef = A2(null);
  const chunksRef = A2([]);
  const objectUrlRef = A2(null);
  const audioContextRef = A2(null);
  const analyserRef = A2(null);
  const videoSourceRef = A2(null);
  const audioSourceRef = A2(null);
  const streamSourceRef = A2(null);
  const micStreamRef = A2(null);
  const audioRafRef = A2(0);
  const spectrumRef = A2(new Uint8Array(128));
  const sourceKindRef = A2(null);
  const audioVisualRef = A2("radial");
  const lastPointerRef = A2({ x: 0.5, y: 0.5, at: 0 });
  const gestureRef = A2(null);
  const lastVolumeRef = A2(0.8);
  const pointerRef = A2({
    x: 0.5,
    y: 0.5,
    velocityX: 0,
    velocityY: 0,
    down: false,
    active: false
  });
  const [params, setParams] = d2(createRandomTrip);
  const [activeGroup, setActiveGroup] = d2("world");
  const [activePreset, setActivePreset] = d2("");
  const [showStudio, setShowStudio] = d2(readShowStudio);
  const [sourceKind, setSourceKind] = d2(null);
  const [audioVisual, setAudioVisual] = d2(randomAudioVisual);
  const [playing, setPlaying] = d2(false);
  const [recording, setRecording] = d2(false);
  const [volume, setVolume] = d2(0.8);
  const [fileName, setFileName] = d2("");
  const [error, setError] = d2("");
  const [time, setTime] = d2(0);
  const [duration, setDuration] = d2(0);
  const [fullscreen, setFullscreen] = d2(false);
  const [micActive, setMicActive] = d2(false);
  const hasSource = sourceKind !== null;
  const timed = sourceKind ? isTimedSource(sourceKind) : false;
  const canPlay = sourceKind ? hasPlaybackControls(sourceKind) : false;
  const isAudioVisual = sourceKind === "audio" || sourceKind === "live";
  sourceKindRef.current = sourceKind;
  audioVisualRef.current = audioVisual;
  const group = GROUPS.find((item) => item.id === activeGroup) ?? GROUPS[0];
  h2(() => {
    document.title = "vaudio";
    const href = `data:image/svg+xml,${encodeURIComponent(FAVICON_SVG)}`;
    const links = [];
    for (const rel of ["icon", "apple-touch-icon"]) {
      const existing = document.querySelector(
        `link[rel="${rel}"]`
      );
      const link = existing ?? document.createElement("link");
      link.rel = rel;
      link.type = "image/svg+xml";
      link.href = href;
      if (!existing) document.head.appendChild(link);
      links.push(link);
    }
    return () => {
      for (const link of links) link.remove();
    };
  }, []);
  h2(() => {
    const style = document.createElement("style");
    style.textContent = `
      @import url("https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Space+Grotesk:wght@400;500;600;700&display=swap");

      :root {
        --void: #08080a;
        --panel: #101014;
        --panel-2: #15151a;
        --line: rgba(255, 255, 255, 0.12);
        --line-hot: rgba(232, 230, 224, 0.35);
        --acid: #e8e6e0;
        --violet: #8a8690;
        --hot: #a87880;
        --paper: #e8e6e0;
        --mute: #85858f;
        --track: #303038;
      }

      html, body, #app { margin: 0; min-height: 100%; background: var(--void); }
      * { box-sizing: border-box; }
      button, input { font: inherit; }
      button { -webkit-tap-highlight-color: transparent; }

      @keyframes scan { from { transform: translateY(-100%); } to { transform: translateY(100vh); } }
      @keyframes blink { 0%, 45% { opacity: 1; } 50%, 100% { opacity: 0.18; } }
      @keyframes enter { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

      .page-enter { animation: enter 600ms cubic-bezier(.2,.8,.2,1) both; }
      .live-dot { animation: blink 1.5s steps(2, end) infinite; }

      .knob-range {
        --fill: 50%;
        width: 100%;
        height: 18px;
        margin: 0;
        appearance: none;
        -webkit-appearance: none;
        background: transparent;
        cursor: ew-resize;
      }
      .knob-range::-webkit-slider-runnable-track {
        height: 3px;
        background: linear-gradient(90deg, var(--acid) 0 var(--fill), var(--track) var(--fill) 100%);
      }
      .knob-range::-webkit-slider-thumb {
        appearance: none;
        -webkit-appearance: none;
        width: 9px;
        height: 17px;
        margin-top: -7px;
        border: 1px solid var(--acid);
        border-radius: 0;
        background: var(--void);
      }
      .knob-range::-moz-range-track { height: 3px; background: var(--track); }
      .knob-range::-moz-range-progress { height: 3px; background: var(--acid); }
      .knob-range::-moz-range-thumb {
        width: 8px; height: 16px; border: 1px solid var(--acid); border-radius: 0; background: var(--void);
      }

      .timeline {
        width: 100%; height: 16px; margin: 0; appearance: none; -webkit-appearance: none;
        background: transparent; cursor: pointer;
      }
      .timeline::-webkit-slider-runnable-track { height: 2px; background: rgba(255,255,255,.22); }
      .timeline::-webkit-slider-thumb {
        appearance: none; -webkit-appearance: none; width: 7px; height: 12px; margin-top: -5px;
        border: 0; border-radius: 0; background: var(--paper);
      }

      .volume-flyout {
        position: absolute;
        bottom: calc(100% + 2px);
        left: 50%;
        transform: translateX(-50%);
        padding: 10px 8px 14px;
        border: 1px solid var(--line);
        background: rgba(10, 10, 14, 0.94);
        opacity: 0;
        pointer-events: none;
        transition: opacity 140ms ease;
        z-index: 20;
      }
      .volume-control:hover .volume-flyout,
      .volume-control:focus-within .volume-flyout {
        opacity: 1;
        pointer-events: auto;
      }
      .vol-vertical {
        --fill: 80%;
        width: 18px;
        height: 88px;
        margin: 0;
        appearance: none;
        -webkit-appearance: none;
        writing-mode: vertical-lr;
        direction: rtl;
        background: transparent;
        cursor: ns-resize;
      }
      .vol-vertical::-webkit-slider-runnable-track {
        width: 3px;
        background: linear-gradient(to top, var(--acid) 0 var(--fill), var(--track) var(--fill) 100%);
      }
      .vol-vertical::-webkit-slider-thumb {
        appearance: none;
        -webkit-appearance: none;
        width: 17px;
        height: 9px;
        margin-left: -7px;
        border: 1px solid var(--acid);
        border-radius: 0;
        background: var(--void);
      }
      .vol-vertical::-moz-range-track { width: 3px; background: var(--track); }
      .vol-vertical::-moz-range-progress { width: 3px; background: var(--acid); }
      .vol-vertical::-moz-range-thumb {
        width: 16px; height: 8px; border: 1px solid var(--acid); border-radius: 0; background: var(--void);
      }

      .stage-grid {
        background-image:
          linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px);
        background-size: 38px 38px;
      }
      .stage-grid:fullscreen,
      .stage-grid:-webkit-full-screen {
        width: 100%;
        height: 100%;
        min-height: 100%;
        background-color: #000;
        background-image: none;
      }
      .stage-chrome {
        opacity: 0;
        pointer-events: none;
        transition: opacity 160ms ease;
      }
      .stage-grid:hover .stage-chrome,
      .stage-grid:fullscreen .stage-chrome,
      .stage-grid:-webkit-full-screen .stage-chrome,
      .stage-chrome:focus-within {
        opacity: 1;
        pointer-events: auto;
      }
      @media (hover: none) {
        .stage-chrome { opacity: 1; pointer-events: auto; }
      }

      /* Keep decoded frames alive \u2014 0\xD70 media can drop/blank intermittently. */
      .sr-media {
        position: fixed;
        left: 0;
        top: 0;
        width: 2px;
        height: 2px;
        opacity: 0;
        pointer-events: none;
        overflow: hidden;
      }
    `;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);
  h2(() => {
    const paint = paintCanvasRef.current;
    const canvas = canvasRef.current;
    const stage = stageRef.current;
    if (!paint || !canvas || !stage) return;
    try {
      ensureSpectrumCanvas(paint);
      const morpher = createMorpher(canvas, paint, params);
      morpherRef.current = morpher;
      let resizeRaf = 0;
      const resize = () => {
        cancelAnimationFrame(resizeRaf);
        resizeRaf = requestAnimationFrame(() => {
          const rect = stage.getBoundingClientRect();
          morpher.resize(rect.width, rect.height);
        });
      };
      resize();
      const observer = new ResizeObserver(resize);
      observer.observe(stage);
      return () => {
        cancelAnimationFrame(resizeRaf);
        observer.disconnect();
        morpher.destroy();
        morpherRef.current = null;
      };
    } catch (cause) {
      setError(
        cause instanceof Error ? cause.message : "WebGL failed to start"
      );
    }
  }, []);
  h2(() => {
    morpherRef.current?.setParams(params);
  }, [params]);
  h2(() => {
    if (hasSource) return;
    const paint = paintCanvasRef.current;
    if (!paint) return;
    let raf = 0;
    const tick = () => {
      const level = paintIdleVisual(
        paint,
        audioVisualRef.current,
        performance.now() / 1e3
      );
      morpherRef.current?.setSource(paint);
      morpherRef.current?.setAudioLevel(level * 0.4);
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => cancelAnimationFrame(raf);
  }, [hasSource]);
  h2(() => {
    const video = videoRef.current;
    const audio = audioRef.current;
    if (video) {
      video.volume = volume;
      video.muted = volume === 0;
    }
    if (audio) {
      audio.volume = volume;
      audio.muted = volume === 0;
    }
  }, [volume]);
  h2(() => {
    try {
      localStorage.setItem(STUDIO_VIEW_KEY, showStudio ? "1" : "0");
    } catch {
    }
  }, [showStudio]);
  h2(() => {
    const syncFullscreen = () => {
      const stage = stageRef.current;
      setFullscreen(!!stage && document.fullscreenElement === stage);
    };
    document.addEventListener("fullscreenchange", syncFullscreen);
    return () => document.removeEventListener("fullscreenchange", syncFullscreen);
  }, []);
  h2(() => {
    const onKeyDown = (event) => {
      if (!(event.metaKey || event.ctrlKey)) return;
      if (event.key.toLowerCase() !== "i") return;
      if (event.target instanceof HTMLElement) {
        const tag = event.target.tagName;
        if (tag === "INPUT" || tag === "TEXTAREA" || event.target.isContentEditable)
          return;
      }
      event.preventDefault();
      setShowStudio((previous) => !previous);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);
  h2(() => {
    return () => {
      if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
      if (recorderRef.current?.state === "recording")
        recorderRef.current.stop();
      cancelAnimationFrame(audioRafRef.current);
      releaseMicTracks();
      void audioContextRef.current?.close();
    };
  }, []);
  function setParam(key, value) {
    setActivePreset("");
    setParams((previous) => ({ ...previous, [key]: value }));
  }
  function applyPreset(name, next) {
    setParams({ ...next });
    setActivePreset(name);
    morpherRef.current?.clearFeedback();
  }
  function randomize() {
    setAudioVisual(randomAudioVisual(audioVisualRef.current));
    setParams(createRandomTrip());
    setActivePreset("");
    morpherRef.current?.clearFeedback();
  }
  function mutate() {
    setParams((previous) => {
      const next = { ...previous };
      for (const key of Object.keys(next)) {
        if (key === "mouseMode" || key === "shaderMode") continue;
        const max = key === "speed" ? 2 : 1;
        next[key] = Math.max(
          0,
          Math.min(max, next[key] + (Math.random() - 0.5) * 0.26)
        );
      }
      return next;
    });
    setActivePreset("");
  }
  function releaseMicTracks() {
    for (const track of micStreamRef.current?.getTracks() ?? [])
      track.stop();
    micStreamRef.current = null;
  }
  function stopMic() {
    releaseMicTracks();
    setMicActive(false);
  }
  function stopAudioLoop() {
    cancelAnimationFrame(audioRafRef.current);
    audioRafRef.current = 0;
  }
  function disconnectGraph() {
    stopAudioLoop();
    videoSourceRef.current?.disconnect();
    audioSourceRef.current?.disconnect();
    streamSourceRef.current?.disconnect();
    analyserRef.current?.disconnect();
    streamSourceRef.current = null;
  }
  async function getAudioContext() {
    if (!audioContextRef.current) {
      const AudioContextClass = window.AudioContext;
      if (!AudioContextClass) return null;
      audioContextRef.current = new AudioContextClass();
    }
    await audioContextRef.current.resume();
    return audioContextRef.current;
  }
  function clearMediaElements() {
    const video = videoRef.current;
    const audio = audioRef.current;
    const image = imageRef.current;
    if (video) {
      video.pause();
      video.removeAttribute("src");
      video.load();
    }
    if (audio) {
      audio.pause();
      audio.removeAttribute("src");
      audio.load();
    }
    if (image) {
      image.removeAttribute("src");
    }
  }
  function sampleAudioLoop() {
    const analyser = analyserRef.current;
    const paint = paintCanvasRef.current;
    if (!analyser) return;
    if (spectrumRef.current.length !== analyser.frequencyBinCount) {
      spectrumRef.current = new Uint8Array(analyser.frequencyBinCount);
    }
    const bins = spectrumRef.current;
    analyser.getByteFrequencyData(bins);
    const level = levelFromSpectrum(bins);
    morpherRef.current?.setAudioLevel(level);
    const kind = sourceKindRef.current;
    if ((kind === "audio" || kind === "live") && paint) {
      ensureSpectrumCanvas(paint);
      paintAudioVisual(
        paint,
        bins,
        level,
        performance.now() / 1e3,
        audioVisualRef.current
      );
    }
    audioRafRef.current = requestAnimationFrame(sampleAudioLoop);
  }
  async function routeSource(source, monitor) {
    const context = await getAudioContext();
    if (!context) return;
    disconnectGraph();
    let analyser = analyserRef.current;
    if (!analyser || analyser.context !== context) {
      analyser = context.createAnalyser();
      analyser.fftSize = 256;
      analyser.smoothingTimeConstant = 0.7;
      analyserRef.current = analyser;
    }
    source.connect(analyser);
    if (monitor) analyser.connect(context.destination);
    sampleAudioLoop();
  }
  async function ensureElementAudio(element, kind) {
    try {
      const context = await getAudioContext();
      if (!context) return;
      const slot = kind === "video" ? videoSourceRef : audioSourceRef;
      if (!slot.current) {
        slot.current = context.createMediaElementSource(element);
      }
      await routeSource(slot.current, true);
    } catch {
    }
  }
  async function startLiveMic(mode = "overlay") {
    setError("");
    const kind = sourceKindRef.current;
    const keepVisual = mode === "overlay" && (kind === "image" || kind === "data");
    try {
      stopMic();
      disconnectGraph();
      if (!keepVisual) {
        clearMediaElements();
        if (objectUrlRef.current) {
          URL.revokeObjectURL(objectUrlRef.current);
          objectUrlRef.current = null;
        }
        const paint = paintCanvasRef.current;
        if (paint) {
          ensureSpectrumCanvas(paint);
          morpherRef.current?.setSource(paint);
        }
        morpherRef.current?.clearFeedback();
        setSourceKind("live");
        setFileName("Microphone");
        setAudioVisual(randomAudioVisual());
        setPlaying(true);
        setTime(0);
        setDuration(0);
      }
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false
      });
      micStreamRef.current = stream;
      setMicActive(true);
      setParams(
        (previous) => previous.audio < 0.35 ? { ...previous, audio: 0.72 } : previous
      );
      const context = await getAudioContext();
      if (!context) return;
      const source = context.createMediaStreamSource(stream);
      await routeSource(source, false);
      streamSourceRef.current = source;
    } catch {
      setError("Microphone access was blocked or unavailable.");
      stopMic();
      if (!keepVisual) {
        setSourceKind(null);
        setPlaying(false);
      }
    }
  }
  function stopLiveMic() {
    stopMic();
    disconnectGraph();
    morpherRef.current?.setAudioLevel(0);
    if (sourceKindRef.current === "live") {
      clearMediaElements();
      if (objectUrlRef.current) {
        URL.revokeObjectURL(objectUrlRef.current);
        objectUrlRef.current = null;
      }
      morpherRef.current?.clearFeedback();
      setSourceKind(null);
      setFileName("");
      setPlaying(false);
      setTime(0);
      setDuration(0);
    }
  }
  function toggleMic() {
    if (micActive) {
      stopLiveMic();
      return;
    }
    void startLiveMic("overlay");
  }
  function clearStage() {
    if (micActive) {
      void startLiveMic("blank");
      return;
    }
    stopMic();
    disconnectGraph();
    clearMediaElements();
    if (objectUrlRef.current) {
      URL.revokeObjectURL(objectUrlRef.current);
      objectUrlRef.current = null;
    }
    morpherRef.current?.clearFeedback();
    morpherRef.current?.setAudioLevel(0);
    setSourceKind(null);
    setFileName("");
    setPlaying(false);
    setTime(0);
    setDuration(0);
  }
  async function onFile(file) {
    if (!file) return;
    const kind = classifyFile(file);
    const recordingNow = recorderRef.current?.state === "recording";
    const previousKind = sourceKindRef.current;
    const softStillSwap = recordingNow && (kind === "image" || kind === "data");
    const preserveMic = softStillSwap && !!micStreamRef.current;
    const preserveAvAudio = softStillSwap && !micStreamRef.current && (previousKind === "video" || previousKind === "audio");
    setError("");
    if (!preserveMic) stopMic();
    if (preserveMic) {
      stopAudioLoop();
      videoSourceRef.current?.disconnect();
      audioSourceRef.current?.disconnect();
      if (analyserRef.current) sampleAudioLoop();
    } else if (!softStillSwap) {
      disconnectGraph();
    }
    if (!preserveAvAudio) {
      clearMediaElements();
      if (objectUrlRef.current) {
        URL.revokeObjectURL(objectUrlRef.current);
        objectUrlRef.current = null;
      }
    }
    const url = URL.createObjectURL(file);
    if (!preserveAvAudio) objectUrlRef.current = url;
    setFileName(file.name);
    setSourceKind(kind);
    if (!preserveAvAudio) {
      setPlaying(false);
      setTime(0);
      setDuration(0);
    }
    morpherRef.current?.clearFeedback();
    if (kind === "video") {
      const video = videoRef.current;
      if (!video) return;
      morpherRef.current?.setSource(video);
      video.src = url;
      video.volume = volume;
      video.muted = volume === 0;
      video.load();
      void ensureElementAudio(video, "video").finally(() => {
        void video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
      });
      return;
    }
    if (kind === "audio") {
      const audio = audioRef.current;
      const paint2 = paintCanvasRef.current;
      if (!audio || !paint2) return;
      ensureSpectrumCanvas(paint2);
      morpherRef.current?.setSource(paint2);
      audio.src = url;
      audio.volume = volume;
      audio.muted = volume === 0;
      audio.load();
      setAudioVisual(randomAudioVisual());
      setParams(
        (previous) => previous.audio < 0.25 ? { ...previous, audio: 0.65 } : previous
      );
      void ensureElementAudio(audio, "audio").finally(() => {
        void audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
      });
      return;
    }
    if (kind === "image") {
      const image = imageRef.current;
      if (!image) return;
      image.onload = () => {
        morpherRef.current?.setSource(image);
        morpherRef.current?.clearFeedback();
        setPlaying(true);
        if (preserveAvAudio) URL.revokeObjectURL(url);
      };
      image.onerror = () => {
        setError("Could not decode that image.");
        if (preserveAvAudio) URL.revokeObjectURL(url);
        if (recordingNow && previousKind) setSourceKind(previousKind);
        else if (!recordingNow) setSourceKind(null);
      };
      image.src = url;
      return;
    }
    const paint = paintCanvasRef.current;
    if (!paint) return;
    try {
      const buffer = await file.slice(0, 1024 * 1024).arrayBuffer();
      paintDataBytes(paint, new Uint8Array(buffer));
      morpherRef.current?.setSource(paint);
      morpherRef.current?.clearFeedback();
      setPlaying(true);
      if (!preserveMic) morpherRef.current?.setAudioLevel(0.15);
      if (preserveAvAudio) URL.revokeObjectURL(url);
    } catch {
      setError("Could not read that file.");
      if (preserveAvAudio) {
        URL.revokeObjectURL(url);
      } else if (objectUrlRef.current === url) {
        URL.revokeObjectURL(url);
        objectUrlRef.current = null;
      }
      if (recordingNow && previousKind) setSourceKind(previousKind);
      else setSourceKind(null);
    }
  }
  function togglePlay() {
    if (!canPlay) return;
    if (sourceKind === "video") {
      const video = videoRef.current;
      if (!video) return;
      void ensureElementAudio(video, "video");
      if (video.paused) void video.play();
      else video.pause();
      return;
    }
    if (sourceKind === "audio") {
      const audio = audioRef.current;
      if (!audio) return;
      void ensureElementAudio(audio, "audio");
      if (audio.paused) void audio.play();
      else audio.pause();
    }
  }
  function seekMedia(value) {
    if (sourceKind === "video" && videoRef.current) {
      videoRef.current.currentTime = value;
    } else if (sourceKind === "audio" && audioRef.current) {
      audioRef.current.currentTime = value;
    }
  }
  function setMediaVolume(next) {
    const clamped = Math.max(0, Math.min(1, next));
    if (clamped > 1e-3) lastVolumeRef.current = clamped;
    setVolume(clamped);
  }
  function toggleMute() {
    if (volume > 1e-3) {
      lastVolumeRef.current = volume;
      setVolume(0);
      return;
    }
    setVolume(lastVolumeRef.current > 1e-3 ? lastVolumeRef.current : 0.8);
  }
  function resetVisualizer() {
    applyPreset("Pure signal", CLEAN);
  }
  async function toggleFullscreen() {
    const stage = stageRef.current;
    if (!stage) return;
    try {
      if (document.fullscreenElement === stage) {
        await document.exitFullscreen();
      } else if (document.fullscreenElement) {
        await document.exitFullscreen();
        await stage.requestFullscreen();
      } else {
        await stage.requestFullscreen();
      }
    } catch {
      setError("Fullscreen is not available here.");
    }
  }
  function updatePointer(event, down = pointerRef.current.down) {
    const stage = stageRef.current;
    if (!stage) return;
    const rect = stage.getBoundingClientRect();
    const x2 = Math.max(
      0,
      Math.min(1, (event.clientX - rect.left) / rect.width)
    );
    const topY = Math.max(
      0,
      Math.min(1, (event.clientY - rect.top) / rect.height)
    );
    const y3 = 1 - topY;
    const now = performance.now();
    const elapsed = Math.max(8, now - lastPointerRef.current.at);
    const velocityX = (x2 - lastPointerRef.current.x) * (16 / elapsed);
    const velocityY = (y3 - lastPointerRef.current.y) * (16 / elapsed);
    lastPointerRef.current = { x: x2, y: y3, at: now };
    if (gestureRef.current && down) {
      const dx = event.clientX - gestureRef.current.x;
      const dy = event.clientY - gestureRef.current.y;
      if (dx * dx + dy * dy > 64) gestureRef.current.moved = true;
    }
    pointerRef.current = { x: x2, y: y3, velocityX, velocityY, down, active: true };
    morpherRef.current?.setPointer(pointerRef.current);
    if (cursorRef.current) {
      cursorRef.current.style.opacity = "1";
      cursorRef.current.style.left = `${event.clientX - rect.left}px`;
      cursorRef.current.style.top = `${event.clientY - rect.top}px`;
      const size = 70 + params.mouseSize * 250;
      cursorRef.current.style.width = `${size}px`;
      cursorRef.current.style.height = `${size}px`;
    }
  }
  function endPointerGesture(event) {
    const gesture = gestureRef.current;
    gestureRef.current = null;
    updatePointer(event, false);
    if (!gesture || gesture.moved) return;
    if (performance.now() - gesture.at > 450) return;
    if (!canPlay) return;
    togglePlay();
  }
  function deactivatePointer() {
    pointerRef.current = {
      ...pointerRef.current,
      down: false,
      active: false
    };
    morpherRef.current?.setPointer(pointerRef.current);
    if (cursorRef.current) cursorRef.current.style.opacity = "0";
  }
  function pickRecordingFormat(hasAudio) {
    const withAudio = hasAudio ? [
      "video/webm;codecs=vp9,opus",
      "video/webm;codecs=vp9",
      "video/webm;codecs=vp8,opus",
      "video/mp4;codecs=avc1.640028,mp4a.40.2",
      "video/mp4;codecs=avc1.4D4028,mp4a.40.2",
      "video/mp4;codecs=avc1.4D002A,mp4a.40.2",
      "video/mp4;codecs=h264,aac",
      "video/mp4",
      "video/webm"
    ] : [
      "video/webm;codecs=vp9",
      "video/webm;codecs=vp8",
      "video/mp4;codecs=avc1.640028",
      "video/mp4;codecs=avc1.4D4028",
      "video/mp4;codecs=avc1.4D002A",
      "video/mp4;codecs=h264",
      "video/mp4",
      "video/webm"
    ];
    for (const mimeType of withAudio) {
      if (MediaRecorder.isTypeSupported(mimeType)) {
        return {
          mimeType,
          extension: mimeType.startsWith("video/mp4") ? "mp4" : "webm"
        };
      }
    }
    return { mimeType: "", extension: "webm" };
  }
  function collectAudioTracks() {
    if (micStreamRef.current) {
      return micStreamRef.current.getAudioTracks();
    }
    if (sourceKind === "video") {
      const video = videoRef.current;
      return video?.captureStream?.().getAudioTracks() ?? [];
    }
    if (sourceKind === "audio") {
      const audio = audioRef.current;
      return audio?.captureStream?.().getAudioTracks() ?? [];
    }
    return [];
  }
  function boostRecordingResolution(active) {
    const morpher = morpherRef.current;
    const stage = stageRef.current;
    if (!morpher || !stage) return;
    morpher.setPixelRatioCap(active ? 2.75 : 1.75);
    const rect = stage.getBoundingClientRect();
    morpher.resize(rect.width, rect.height);
  }
  function startRecording() {
    const canvas = canvasRef.current;
    if (!canvas || !hasSource || recording) return;
    boostRecordingResolution(true);
    const stream = canvas.captureStream(60);
    for (const track of collectAudioTracks()) stream.addTrack(track);
    const format = pickRecordingFormat(stream.getAudioTracks().length > 0);
    const hasAudio = stream.getAudioTracks().length > 0;
    try {
      const options = {
        videoBitsPerSecond: 2e7,
        audioBitsPerSecond: hasAudio ? 256e3 : void 0
      };
      if (format.mimeType) options.mimeType = format.mimeType;
      const recorder = format.mimeType ? new MediaRecorder(stream, options) : new MediaRecorder(stream, {
        videoBitsPerSecond: 2e7,
        audioBitsPerSecond: hasAudio ? 256e3 : void 0
      });
      const extension = (recorder.mimeType || format.mimeType).includes(
        "mp4"
      ) ? "mp4" : format.extension;
      chunksRef.current = [];
      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) chunksRef.current.push(event.data);
      };
      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, {
          type: recorder.mimeType || (extension === "mp4" ? "video/mp4" : "video/webm")
        });
        const url = URL.createObjectURL(blob);
        const anchor = document.createElement("a");
        anchor.href = url;
        anchor.download = `${fileName.replace(/\.[^.]+$/, "") || "morph"}-live-mix.${extension}`;
        anchor.click();
        setTimeout(() => URL.revokeObjectURL(url), 1e3);
        for (const track of stream.getTracks()) {
          if (track.kind === "video") track.stop();
        }
        boostRecordingResolution(false);
        setRecording(false);
        recorderRef.current = null;
      };
      recorder.start(1e3);
      recorderRef.current = recorder;
      setRecording(true);
      if (sourceKind === "video" && videoRef.current?.paused)
        void videoRef.current.play();
      if (sourceKind === "audio" && audioRef.current?.paused)
        void audioRef.current.play();
    } catch {
      boostRecordingResolution(false);
      setError("This browser cannot record the live canvas.");
    }
  }
  return /* @__PURE__ */ u3(
    "main",
    {
      className: "min-h-screen bg-[var(--void)] text-[var(--paper)]",
      style: { fontFamily: '"DM Mono", ui-monospace, monospace' },
      children: [
        /* @__PURE__ */ u3(
          "div",
          {
            className: "pointer-events-none fixed inset-0 opacity-40",
            style: {
              background: "radial-gradient(circle at 14% -10%, rgba(232,230,224,.08), transparent 32%), radial-gradient(circle at 92% 20%, rgba(168,120,128,.06), transparent 28%)"
            }
          }
        ),
        /* @__PURE__ */ u3(
          "input",
          {
            ref: fileRef,
            accept: "*/*",
            className: "hidden",
            type: "file",
            onChange: (event) => void onFile(event.currentTarget.files?.[0] ?? void 0)
          }
        ),
        /* @__PURE__ */ u3(
          "audio",
          {
            ref: audioRef,
            className: "sr-media",
            loop: true,
            onTimeUpdate: (event) => setTime(event.currentTarget.currentTime),
            onLoadedMetadata: (event) => setDuration(event.currentTarget.duration),
            onPlay: () => setPlaying(true),
            onPause: () => setPlaying(false)
          }
        ),
        /* @__PURE__ */ u3("img", { ref: imageRef, alt: "", className: "sr-media" }),
        /* @__PURE__ */ u3("canvas", { ref: paintCanvasRef, className: "sr-media" }),
        /* @__PURE__ */ u3(
          "div",
          {
            className: `page-enter relative mx-auto px-3 py-3 md:px-6 md:py-5 ${showStudio ? "max-w-[1540px]" : "max-w-[1200px]"}`,
            children: [
              showStudio ? /* @__PURE__ */ u3("header", { className: "mb-4 flex items-end justify-between border-b border-[var(--line)] pb-4", children: [
                /* @__PURE__ */ u3("div", { className: "flex items-end gap-4", children: /* @__PURE__ */ u3(
                  "h1",
                  {
                    className: "m-0 text-[2.4rem] font-bold leading-[.78] tracking-[-.09em] text-[var(--acid)] md:text-[4.1rem]",
                    style: {
                      fontFamily: '"Space Grotesk", sans-serif'
                    },
                    children: "vaudio"
                  }
                ) }),
                /* @__PURE__ */ u3("div", { className: "flex items-center gap-3 text-[9px] uppercase tracking-[.2em] text-[var(--mute)]", children: [
                  /* @__PURE__ */ u3(
                    "span",
                    {
                      className: `h-1.5 w-1.5 rounded-full ${recording ? "live-dot bg-[#c45b6a]" : "bg-[var(--acid)]"}`
                    }
                  ),
                  /* @__PURE__ */ u3(
                    "button",
                    {
                      type: "button",
                      "aria-pressed": true,
                      "aria-label": "Hide studio",
                      title: "Hide studio",
                      className: "ml-1 text-[var(--paper)]/70 transition hover:text-[var(--acid)]",
                      onClick: () => setShowStudio(false),
                      children: "Studio"
                    }
                  )
                ] })
              ] }) : /* @__PURE__ */ u3("header", { className: "mb-3 flex items-center justify-between", children: [
                /* @__PURE__ */ u3(
                  "h1",
                  {
                    className: "m-0 text-[1.6rem] font-bold leading-none tracking-[-.08em] text-[var(--acid)] md:text-[2rem]",
                    style: {
                      fontFamily: '"Space Grotesk", sans-serif'
                    },
                    children: "vaudio"
                  }
                ),
                /* @__PURE__ */ u3(
                  "button",
                  {
                    type: "button",
                    "aria-pressed": false,
                    "aria-label": "Open studio",
                    title: "Open studio",
                    className: "flex items-center gap-2 text-[9px] uppercase tracking-[.2em] text-[var(--mute)] transition hover:text-[var(--paper)]",
                    onClick: () => setShowStudio(true),
                    children: [
                      /* @__PURE__ */ u3(
                        "span",
                        {
                          className: `h-1.5 w-1.5 rounded-full ${recording ? "live-dot bg-[#c45b6a]" : "bg-[var(--acid)]"}`
                        }
                      ),
                      "Studio"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ u3(
                "section",
                {
                  className: `grid ${showStudio ? "bg-[var(--panel)] lg:grid-cols-[minmax(0,1fr)_240px]" : "bg-transparent"}`,
                  children: [
                    /* @__PURE__ */ u3(
                      "div",
                      {
                        ref: stageRef,
                        className: `stage-grid relative touch-none cursor-crosshair overflow-hidden bg-black ${showStudio ? "min-h-[48vh] md:min-h-[60vh]" : "min-h-[62vh] md:min-h-[74vh]"}`,
                        onDragOver: (event) => event.preventDefault(),
                        onDrop: (event) => {
                          event.preventDefault();
                          void onFile(event.dataTransfer?.files?.[0]);
                        },
                        onPointerMove: (event) => updatePointer(event),
                        onPointerDown: (event) => {
                          event.currentTarget.setPointerCapture(
                            event.pointerId
                          );
                          gestureRef.current = {
                            x: event.clientX,
                            y: event.clientY,
                            at: performance.now(),
                            moved: false
                          };
                          updatePointer(
                            event,
                            true
                          );
                        },
                        onPointerUp: (event) => endPointerGesture(event),
                        onPointerCancel: () => {
                          gestureRef.current = null;
                          deactivatePointer();
                        },
                        onPointerLeave: deactivatePointer,
                        children: [
                          /* @__PURE__ */ u3(
                            "video",
                            {
                              ref: videoRef,
                              className: "sr-media",
                              loop: true,
                              playsInline: true,
                              onTimeUpdate: (event) => setTime(event.currentTarget.currentTime),
                              onLoadedMetadata: (event) => setDuration(event.currentTarget.duration),
                              onPlay: () => setPlaying(true),
                              onPause: () => setPlaying(false)
                            }
                          ),
                          /* @__PURE__ */ u3(
                            "canvas",
                            {
                              ref: canvasRef,
                              className: "absolute inset-0 h-full w-full"
                            }
                          ),
                          /* @__PURE__ */ u3(
                            "div",
                            {
                              ref: cursorRef,
                              className: "pointer-events-none absolute left-0 top-0 z-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50 opacity-0 transition-[opacity,width,height] duration-150",
                              style: {
                                boxShadow: "inset 0 0 24px rgba(255,255,255,.08), 0 0 12px rgba(0,0,0,.25)"
                              },
                              children: /* @__PURE__ */ u3("span", { className: "absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 bg-white" })
                            }
                          ),
                          !hasSource ? /* @__PURE__ */ u3(
                            "div",
                            {
                              className: "absolute inset-0 z-10 flex cursor-pointer flex-col items-center justify-center bg-[rgba(8,8,10,.48)] text-center text-[var(--paper)] transition hover:bg-[rgba(8,8,10,.58)]",
                              role: "button",
                              tabIndex: 0,
                              onClick: () => fileRef.current?.click(),
                              onKeyDown: (event) => {
                                if (event.key === "Enter" || event.key === " ") {
                                  event.preventDefault();
                                  fileRef.current?.click();
                                }
                              },
                              onPointerDown: (event) => event.stopPropagation(),
                              onPointerUp: (event) => event.stopPropagation(),
                              children: [
                                /* @__PURE__ */ u3("span", { className: "mb-5 grid h-16 w-16 place-items-center rounded-full border border-[var(--acid)]/50 text-2xl text-[var(--acid)]", children: "\uFF0B" }),
                                /* @__PURE__ */ u3(
                                  "span",
                                  {
                                    className: "text-2xl font-semibold tracking-[-.04em] md:text-4xl",
                                    style: {
                                      fontFamily: '"Space Grotesk", sans-serif'
                                    },
                                    children: "Import anything"
                                  }
                                ),
                                /* @__PURE__ */ u3("span", { className: "mt-2 text-[10px] uppercase tracking-[.2em] text-[var(--mute)]", children: "Video \xB7 music \xB7 image \xB7 any file" })
                              ]
                            }
                          ) : null,
                          showStudio ? /* @__PURE__ */ u3(
                            "div",
                            {
                              className: `pointer-events-none absolute left-3 flex gap-2 text-[8px] uppercase tracking-[.18em] ${hasSource ? "top-14" : "top-3"}`,
                              children: [
                                /* @__PURE__ */ u3("span", { className: "border border-white/20 bg-black/50 px-2 py-1", children: "60 fps canvas" }),
                                /* @__PURE__ */ u3("span", { className: "border border-white/20 bg-black/50 px-2 py-1 text-[var(--acid)]", children: [
                                  CURSOR_MODES.find(
                                    (mode) => mode.value === params.mouseMode
                                  )?.name,
                                  " ",
                                  "field"
                                ] }),
                                sourceKind ? /* @__PURE__ */ u3(
                                  "span",
                                  {
                                    className: `border bg-black/50 px-2 py-1 ${sourceKind === "live" || micActive ? "border-[#c45b6a]/50 text-[#b86a74]" : "border-white/20 text-white/70"}`,
                                    children: isAudioVisual ? audioVisualLabel(audioVisual) : micActive ? `${sourceLabel(sourceKind)} + mic` : sourceLabel(sourceKind)
                                  }
                                ) : null
                              ]
                            }
                          ) : null,
                          hasSource ? /* @__PURE__ */ u3("div", { className: "stage-chrome absolute left-3 top-3 z-30 flex gap-2", children: [
                            /* @__PURE__ */ u3(
                              "button",
                              {
                                type: "button",
                                "aria-label": "Clear stage",
                                title: "Clear stage",
                                className: "grid h-9 w-9 place-items-center border border-white/25 bg-black/55 text-white backdrop-blur-sm transition hover:border-[#c45b6a] hover:text-[#c45b6a]",
                                onClick: (event) => {
                                  event.stopPropagation();
                                  clearStage();
                                },
                                onPointerDown: (event) => event.stopPropagation(),
                                onPointerUp: (event) => event.stopPropagation(),
                                children: /* @__PURE__ */ u3(
                                  "svg",
                                  {
                                    width: "14",
                                    height: "14",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "square",
                                    "aria-hidden": "true",
                                    children: /* @__PURE__ */ u3("path", { d: "M6 6l12 12M18 6L6 18" })
                                  }
                                )
                              }
                            ),
                            /* @__PURE__ */ u3(
                              "button",
                              {
                                type: "button",
                                "aria-label": "Upload file",
                                title: "Upload file",
                                className: "grid h-9 w-9 place-items-center border border-white/25 bg-black/55 text-white backdrop-blur-sm transition hover:border-white/70 hover:text-white",
                                onClick: (event) => {
                                  event.stopPropagation();
                                  fileRef.current?.click();
                                },
                                onPointerDown: (event) => event.stopPropagation(),
                                onPointerUp: (event) => event.stopPropagation(),
                                children: /* @__PURE__ */ u3(
                                  "svg",
                                  {
                                    width: "14",
                                    height: "14",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "square",
                                    "aria-hidden": "true",
                                    children: [
                                      /* @__PURE__ */ u3("path", { d: "M12 16V4" }),
                                      /* @__PURE__ */ u3("path", { d: "M7 9l5-5 5 5" }),
                                      /* @__PURE__ */ u3("path", { d: "M4 20h16" })
                                    ]
                                  }
                                )
                              }
                            )
                          ] }) : null,
                          hasSource ? /* @__PURE__ */ u3("div", { className: "stage-chrome absolute right-3 top-3 z-30 flex gap-2", children: [
                            /* @__PURE__ */ u3(
                              "button",
                              {
                                type: "button",
                                "aria-label": "Reset visualizer",
                                title: "Reset visualizer",
                                className: "grid h-9 w-9 place-items-center border border-white/25 bg-black/55 text-white backdrop-blur-sm transition hover:border-white/70 hover:text-white",
                                onClick: (event) => {
                                  event.stopPropagation();
                                  resetVisualizer();
                                },
                                onPointerDown: (event) => event.stopPropagation(),
                                onPointerUp: (event) => event.stopPropagation(),
                                children: /* @__PURE__ */ u3(
                                  "svg",
                                  {
                                    width: "15",
                                    height: "15",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "square",
                                    "aria-hidden": "true",
                                    children: [
                                      /* @__PURE__ */ u3("path", { d: "M3 12a9 9 0 1 0 3-6.7" }),
                                      /* @__PURE__ */ u3("path", { d: "M3 4v5h5" })
                                    ]
                                  }
                                )
                              }
                            ),
                            /* @__PURE__ */ u3(
                              "button",
                              {
                                type: "button",
                                "aria-label": fullscreen ? "Exit fullscreen" : "Enter fullscreen",
                                title: fullscreen ? "Exit fullscreen" : "Fullscreen",
                                className: "grid h-9 w-9 place-items-center border border-white/25 bg-black/55 text-white backdrop-blur-sm transition hover:border-white/70 hover:text-white",
                                onClick: (event) => {
                                  event.stopPropagation();
                                  void toggleFullscreen();
                                },
                                onPointerDown: (event) => event.stopPropagation(),
                                onPointerUp: (event) => event.stopPropagation(),
                                children: fullscreen ? /* @__PURE__ */ u3(
                                  "svg",
                                  {
                                    width: "14",
                                    height: "14",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "square",
                                    "aria-hidden": "true",
                                    children: [
                                      /* @__PURE__ */ u3("path", { d: "M9 3v6H3" }),
                                      /* @__PURE__ */ u3("path", { d: "M15 21v-6h6" }),
                                      /* @__PURE__ */ u3("path", { d: "M21 9h-6V3" }),
                                      /* @__PURE__ */ u3("path", { d: "M3 15h6v6" })
                                    ]
                                  }
                                ) : /* @__PURE__ */ u3(
                                  "svg",
                                  {
                                    width: "14",
                                    height: "14",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "square",
                                    "aria-hidden": "true",
                                    children: [
                                      /* @__PURE__ */ u3("path", { d: "M3 9V3h6" }),
                                      /* @__PURE__ */ u3("path", { d: "M21 9V3h-6" }),
                                      /* @__PURE__ */ u3("path", { d: "M21 15v6h-6" }),
                                      /* @__PURE__ */ u3("path", { d: "M3 15v6h6" })
                                    ]
                                  }
                                )
                              }
                            )
                          ] }) : null
                        ]
                      }
                    ),
                    showStudio ? /* @__PURE__ */ u3("aside", { className: "max-h-[60vh] overflow-y-auto border-t border-[var(--line)] lg:border-l lg:border-t-0", children: [
                      /* @__PURE__ */ u3("div", { className: "border-b border-[var(--line)] px-4 py-3 text-[9px] uppercase tracking-[.22em] text-[var(--mute)]", children: "Scene memory" }),
                      /* @__PURE__ */ u3("div", { className: "grid grid-cols-2 lg:block", children: PRESETS.map((preset) => /* @__PURE__ */ u3(
                        "button",
                        {
                          type: "button",
                          className: `group flex w-full items-center gap-3 border-b border-r border-[var(--line)] px-3 py-3 text-left text-[10px] uppercase tracking-[.08em] transition lg:border-r-0 ${activePreset === preset.name ? "bg-[var(--acid)] text-[var(--void)]" : "text-[var(--mute)] hover:bg-white/[.04] hover:text-[var(--paper)]"}`,
                          onClick: () => applyPreset(
                            preset.name,
                            preset.params
                          ),
                          children: [
                            /* @__PURE__ */ u3(
                              "span",
                              {
                                className: `text-[8px] ${activePreset === preset.name ? "text-black/50" : "text-white/25"}`,
                                children: preset.code
                              }
                            ),
                            /* @__PURE__ */ u3("span", { children: preset.name }),
                            /* @__PURE__ */ u3("span", { className: "ml-auto opacity-0 transition group-hover:opacity-100", children: "\u2192" })
                          ]
                        },
                        preset.name
                      )) }),
                      /* @__PURE__ */ u3("div", { className: "grid grid-cols-2 gap-px bg-[var(--line)] p-px", children: [
                        /* @__PURE__ */ u3(
                          "button",
                          {
                            type: "button",
                            className: "bg-[var(--panel)] px-2 py-3 text-[9px] uppercase tracking-[.12em] text-[var(--acid)] hover:bg-[var(--panel-2)]",
                            onClick: mutate,
                            children: "\xB1 Mutate"
                          }
                        ),
                        /* @__PURE__ */ u3(
                          "button",
                          {
                            type: "button",
                            className: "bg-[var(--panel)] px-2 py-3 text-[9px] uppercase tracking-[.12em] text-[var(--hot)] hover:bg-[var(--panel-2)]",
                            onClick: randomize,
                            children: "\u2726 Chaos"
                          }
                        )
                      ] })
                    ] }) : null
                  ]
                }
              ),
              !showStudio ? /* @__PURE__ */ u3(S, { children: [
                timed ? /* @__PURE__ */ u3("section", { className: "mt-3 border border-[var(--line)] bg-[var(--panel)]", children: /* @__PURE__ */ u3("div", { className: "flex items-center gap-3 px-3 py-2.5", children: [
                  /* @__PURE__ */ u3(
                    "button",
                    {
                      type: "button",
                      className: "grid h-9 w-9 shrink-0 place-items-center border border-[var(--line)] text-sm hover:border-[var(--acid)]",
                      onClick: togglePlay,
                      "aria-label": playing ? "Pause" : "Play",
                      children: /* @__PURE__ */ u3(PlayPauseGlyph, { playing })
                    }
                  ),
                  /* @__PURE__ */ u3("span", { className: "w-10 shrink-0 text-[9px] tabular-nums text-[var(--mute)]", children: formatTime(time) }),
                  /* @__PURE__ */ u3(
                    "input",
                    {
                      className: "timeline",
                      type: "range",
                      min: 0,
                      max: Math.max(duration, 0.01),
                      step: 0.01,
                      value: Math.min(
                        time,
                        Math.max(duration, 0.01)
                      ),
                      "aria-label": "Media position",
                      onInput: (event) => seekMedia(
                        Number(
                          event.currentTarget.value
                        )
                      )
                    }
                  ),
                  /* @__PURE__ */ u3("span", { className: "w-10 shrink-0 text-right text-[9px] tabular-nums text-[var(--mute)]", children: formatTime(duration) }),
                  /* @__PURE__ */ u3("div", { className: "volume-control relative shrink-0", children: [
                    /* @__PURE__ */ u3(
                      "button",
                      {
                        type: "button",
                        className: "grid h-9 w-9 place-items-center border border-[var(--line)] text-[var(--paper)] hover:border-[var(--acid)] hover:text-[var(--acid)]",
                        onClick: toggleMute,
                        "aria-label": volume > 1e-3 ? "Mute" : "Unmute",
                        children: /* @__PURE__ */ u3(VolumeGlyph, { volume })
                      }
                    ),
                    /* @__PURE__ */ u3("div", { className: "volume-flyout", children: /* @__PURE__ */ u3(
                      "input",
                      {
                        className: "vol-vertical",
                        style: {
                          "--fill": `${volume * 100}%`
                        },
                        type: "range",
                        min: 0,
                        max: 1,
                        step: 0.01,
                        value: volume,
                        "aria-label": "Volume",
                        onInput: (event) => setMediaVolume(
                          Number(
                            event.currentTarget.value
                          )
                        )
                      }
                    ) })
                  ] })
                ] }) }) : null,
                /* @__PURE__ */ u3("div", { className: "mt-3 grid grid-cols-2 gap-px border border-[var(--line)] bg-[var(--line)] sm:grid-cols-4", children: [
                  /* @__PURE__ */ u3(
                    "button",
                    {
                      type: "button",
                      className: "bg-[var(--panel)] px-4 py-4 text-[11px] uppercase tracking-[.16em] text-[var(--acid)] transition hover:bg-[var(--panel-2)]",
                      onClick: mutate,
                      children: "\xB1 Mutate"
                    }
                  ),
                  /* @__PURE__ */ u3(
                    "button",
                    {
                      type: "button",
                      className: "bg-[var(--panel)] px-4 py-4 text-[11px] uppercase tracking-[.16em] text-[var(--hot)] transition hover:bg-[var(--panel-2)]",
                      onClick: randomize,
                      children: "\u2726 Chaos"
                    }
                  ),
                  /* @__PURE__ */ u3(
                    "button",
                    {
                      type: "button",
                      className: `px-4 py-4 text-[11px] uppercase tracking-[.16em] transition ${micActive ? "bg-[#c45b6a] text-white" : "bg-[var(--panel)] text-[var(--mute)] hover:bg-[var(--panel-2)] hover:text-[var(--acid)]"}`,
                      onClick: () => void toggleMic(),
                      children: "\u25CF Mic"
                    }
                  ),
                  recording ? /* @__PURE__ */ u3(
                    "button",
                    {
                      type: "button",
                      className: "bg-[#c45b6a] px-4 py-4 text-[11px] uppercase tracking-[.16em] text-white",
                      onClick: () => recorderRef.current?.stop(),
                      children: /* @__PURE__ */ u3("span", { className: "inline-flex items-center justify-center gap-2", children: [
                        /* @__PURE__ */ u3("span", { className: "live-dot h-1.5 w-1.5 rounded-full bg-white" }),
                        "Stop + save"
                      ] })
                    }
                  ) : /* @__PURE__ */ u3(
                    "button",
                    {
                      type: "button",
                      disabled: !hasSource,
                      className: "bg-[var(--panel)] px-4 py-4 text-[11px] uppercase tracking-[.16em] text-[#b86a74] transition hover:bg-[#c45b6a] hover:text-white disabled:opacity-25",
                      onClick: startRecording,
                      children: "\u25CF Record"
                    }
                  )
                ] })
              ] }) : null,
              showStudio ? /* @__PURE__ */ u3(S, { children: [
                /* @__PURE__ */ u3("section", { className: "border-x border-b border-[var(--line)] bg-[var(--panel)]", children: [
                  /* @__PURE__ */ u3("div", { className: "grid items-center gap-3 px-3 py-2 md:grid-cols-[auto_minmax(180px,1fr)_auto] md:px-4", children: [
                    /* @__PURE__ */ u3("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ u3(
                        "button",
                        {
                          type: "button",
                          disabled: !canPlay,
                          className: "grid h-8 w-8 place-items-center border border-[var(--line)] text-xs hover:border-[var(--acid)] disabled:opacity-25",
                          onClick: togglePlay,
                          "aria-label": playing ? "Pause" : "Play",
                          children: /* @__PURE__ */ u3(PlayPauseGlyph, { playing })
                        }
                      ),
                      /* @__PURE__ */ u3(
                        "button",
                        {
                          type: "button",
                          className: "h-8 border border-[var(--line)] px-3 text-[9px] uppercase tracking-[.14em] text-[var(--mute)] hover:border-[var(--paper)] hover:text-[var(--paper)]",
                          onClick: () => fileRef.current?.click(),
                          children: hasSource ? "Replace" : "Import"
                        }
                      ),
                      /* @__PURE__ */ u3(
                        "button",
                        {
                          type: "button",
                          className: `h-8 border px-3 text-[9px] uppercase tracking-[.14em] transition ${micActive ? "border-[#c45b6a] bg-[#c45b6a]/15 text-[#b86a74]" : "border-[var(--line)] text-[var(--mute)] hover:border-[var(--acid)] hover:text-[var(--acid)]"}`,
                          onClick: () => void toggleMic(),
                          children: micActive ? "\u25CF Live" : "Mic"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ u3("div", { className: "flex min-w-0 items-center gap-3", children: timed ? /* @__PURE__ */ u3(S, { children: [
                      /* @__PURE__ */ u3("span", { className: "w-10 shrink-0 text-[9px] tabular-nums text-[var(--mute)]", children: formatTime(time) }),
                      /* @__PURE__ */ u3(
                        "input",
                        {
                          className: "timeline",
                          type: "range",
                          min: 0,
                          max: Math.max(duration, 0.01),
                          step: 0.01,
                          value: Math.min(
                            time,
                            Math.max(duration, 0.01)
                          ),
                          disabled: !canPlay,
                          "aria-label": "Media position",
                          onInput: (event) => seekMedia(
                            Number(
                              event.currentTarget.value
                            )
                          )
                        }
                      ),
                      /* @__PURE__ */ u3("span", { className: "w-10 shrink-0 text-right text-[9px] tabular-nums text-[var(--mute)]", children: formatTime(duration) })
                    ] }) : /* @__PURE__ */ u3("span", { className: "text-[9px] uppercase tracking-[.16em] text-[var(--mute)]", children: sourceKind ? `${sourceLabel(sourceKind)} source \xB7 no timeline` : "No source" }) }),
                    /* @__PURE__ */ u3("div", { className: "flex items-center justify-end gap-2", children: [
                      /* @__PURE__ */ u3("label", { className: "hidden items-center gap-2 xl:flex", children: [
                        /* @__PURE__ */ u3("span", { className: "text-[8px] uppercase tracking-[.15em] text-[var(--mute)]", children: "Vol" }),
                        /* @__PURE__ */ u3(
                          "input",
                          {
                            className: "knob-range w-20",
                            style: {
                              "--fill": `${volume * 100}%`
                            },
                            type: "range",
                            min: 0,
                            max: 1,
                            step: 0.01,
                            value: volume,
                            disabled: sourceKind === "live" || sourceKind === "image" || sourceKind === "data",
                            onInput: (event) => setVolume(
                              Number(
                                event.currentTarget.value
                              )
                            )
                          }
                        )
                      ] }),
                      !recording ? /* @__PURE__ */ u3(
                        "button",
                        {
                          type: "button",
                          disabled: !hasSource,
                          className: "h-8 border border-[#c45b6a]/60 px-3 text-[9px] uppercase tracking-[.14em] text-[#b86a74] hover:bg-[#c45b6a] hover:text-white disabled:opacity-25",
                          onClick: startRecording,
                          children: "\u25CF Record mix"
                        }
                      ) : /* @__PURE__ */ u3(
                        "button",
                        {
                          type: "button",
                          className: "h-8 bg-[#c45b6a] px-3 text-[9px] uppercase tracking-[.14em] text-white",
                          onClick: () => recorderRef.current?.stop(),
                          children: /* @__PURE__ */ u3("span", { className: "inline-flex items-center gap-2", children: [
                            /* @__PURE__ */ u3("span", { className: "live-dot h-1.5 w-1.5 rounded-full bg-white" }),
                            "Stop + save"
                          ] })
                        }
                      )
                    ] })
                  ] }),
                  fileName ? /* @__PURE__ */ u3("div", { className: "truncate border-t border-[var(--line)] px-4 py-1.5 text-[8px] uppercase tracking-[.12em] text-white/30", children: sourceKind ? isAudioVisual ? `${sourceLabel(sourceKind)} \xB7 ${audioVisualLabel(audioVisual)} / ${fileName}` : micActive ? `${sourceLabel(sourceKind)} + mic / ${fileName}` : `${sourceLabel(sourceKind)} / ${fileName}` : fileName }) : null
                ] }),
                /* @__PURE__ */ u3("section", { className: "mt-4 border border-[var(--line)] bg-[var(--panel)]", children: [
                  /* @__PURE__ */ u3("nav", { className: "grid grid-cols-3 border-b border-[var(--line)] md:grid-cols-6", children: GROUPS.map((item, index) => /* @__PURE__ */ u3(
                    "button",
                    {
                      type: "button",
                      className: `border-r border-[var(--line)] px-1 py-3 text-[9px] uppercase tracking-[.14em] transition last:border-r-0 md:px-4 ${activeGroup === item.id ? "bg-[var(--paper)] text-[var(--void)]" : "text-[var(--mute)] hover:text-[var(--paper)]"}`,
                      onClick: () => setActiveGroup(item.id),
                      children: [
                        /* @__PURE__ */ u3("span", { className: "mr-2 hidden opacity-35 md:inline", children: [
                          "0",
                          index + 1
                        ] }),
                        item.label
                      ]
                    },
                    item.id
                  )) }),
                  /* @__PURE__ */ u3("div", { className: "grid lg:grid-cols-[220px_1fr]", children: [
                    /* @__PURE__ */ u3("div", { className: "border-b border-[var(--line)] p-4 lg:border-b-0 lg:border-r", children: [
                      /* @__PURE__ */ u3("div", { className: "text-[9px] uppercase tracking-[.18em] text-[var(--paper)]", children: group.label }),
                      /* @__PURE__ */ u3("p", { className: "mt-2 text-[9px] leading-relaxed text-[var(--mute)]", children: group.description })
                    ] }),
                    /* @__PURE__ */ u3("div", { className: "grid gap-x-8 gap-y-5 p-4 sm:grid-cols-2 xl:grid-cols-3 xl:p-5", children: [
                      activeGroup === "world" ? /* @__PURE__ */ u3("div", { className: "sm:col-span-2 xl:col-span-3", children: [
                        /* @__PURE__ */ u3("div", { className: "mb-2 flex items-center justify-between", children: [
                          /* @__PURE__ */ u3("span", { className: "text-[9px] uppercase tracking-[.14em] text-[var(--paper)]", children: "Rendering engine" }),
                          /* @__PURE__ */ u3("span", { className: "text-[8px] uppercase tracking-[.1em] text-[var(--mute)]", children: [
                            SHADER_WORLDS.length,
                            " worlds"
                          ] })
                        ] }),
                        /* @__PURE__ */ u3("div", { className: "grid grid-cols-2 gap-1 sm:grid-cols-3 xl:grid-cols-6", children: SHADER_WORLDS.map((mode) => /* @__PURE__ */ u3(
                          "button",
                          {
                            type: "button",
                            className: `flex min-h-14 items-center gap-2 border px-2 py-2 text-left text-[8px] uppercase tracking-[.08em] transition ${params.shaderMode === mode.value ? "border-[var(--acid)] bg-white/[.06] text-[var(--acid)]" : "border-[var(--line)] text-[var(--mute)] hover:text-[var(--paper)]"}`,
                            onClick: () => {
                              setParams((previous) => ({
                                ...previous,
                                shaderMode: mode.value,
                                shaderMix: mode.value === 0 ? 0 : Math.max(previous.shaderMix, 0.72)
                              }));
                              setActivePreset("");
                              morpherRef.current?.clearFeedback();
                            },
                            children: [
                              /* @__PURE__ */ u3("span", { className: "w-5 shrink-0 text-center text-base text-[var(--acid)]", children: mode.glyph }),
                              /* @__PURE__ */ u3("span", { children: mode.name })
                            ]
                          },
                          mode.name
                        )) })
                      ] }) : null,
                      activeGroup === "cursor" ? /* @__PURE__ */ u3("div", { className: "sm:col-span-2 xl:col-span-3", children: [
                        /* @__PURE__ */ u3("div", { className: "mb-2 flex items-center justify-between", children: [
                          /* @__PURE__ */ u3("span", { className: "text-[9px] uppercase tracking-[.14em] text-[var(--paper)]", children: "Gesture algorithm" }),
                          /* @__PURE__ */ u3("span", { className: "text-[8px] uppercase tracking-[.1em] text-[var(--mute)]", children: "Move / drag / hold" })
                        ] }),
                        /* @__PURE__ */ u3("div", { className: "grid grid-cols-4 gap-1", children: CURSOR_MODES.map((mode) => /* @__PURE__ */ u3(
                          "button",
                          {
                            type: "button",
                            className: `flex items-center justify-center gap-2 border px-2 py-3 text-[9px] uppercase tracking-[.1em] transition ${params.mouseMode === mode.value ? "border-[var(--acid)] bg-white/[.06] text-[var(--acid)]" : "border-[var(--line)] text-[var(--mute)] hover:text-[var(--paper)]"}`,
                            onClick: () => {
                              setParams(
                                (previous) => ({
                                  ...previous,
                                  mouseMode: mode.value
                                })
                              );
                              setActivePreset("");
                            },
                            children: [
                              /* @__PURE__ */ u3("span", { className: "text-base", children: mode.glyph }),
                              /* @__PURE__ */ u3("span", { className: "hidden sm:inline", children: mode.name })
                            ]
                          },
                          mode.name
                        )) })
                      ] }) : null,
                      group.sliders.map((spec) => {
                        const min = spec.min ?? 0;
                        const max = spec.max ?? 1;
                        const fill = (params[spec.key] - min) / (max - min) * 100;
                        return /* @__PURE__ */ u3(
                          "label",
                          {
                            className: "block min-w-0",
                            children: [
                              /* @__PURE__ */ u3("div", { className: "mb-2 flex items-start justify-between gap-3", children: [
                                /* @__PURE__ */ u3("span", { children: [
                                  /* @__PURE__ */ u3("span", { className: "block text-[9px] uppercase tracking-[.13em] text-[var(--paper)]", children: spec.label }),
                                  /* @__PURE__ */ u3("span", { className: "mt-1 block truncate text-[8px] text-[var(--mute)]", children: spec.hint })
                                ] }),
                                /* @__PURE__ */ u3("span", { className: "font-medium tabular-nums text-[10px] text-[var(--acid)]", children: sliderValue(
                                  params[spec.key],
                                  spec
                                ) })
                              ] }),
                              /* @__PURE__ */ u3(
                                "input",
                                {
                                  className: "knob-range",
                                  style: {
                                    "--fill": `${fill}%`
                                  },
                                  type: "range",
                                  min,
                                  max,
                                  step: 0.01,
                                  value: params[spec.key],
                                  onInput: (event) => setParam(
                                    spec.key,
                                    Number(
                                      event.currentTarget.value
                                    )
                                  )
                                }
                              )
                            ]
                          },
                          spec.key
                        );
                      })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ u3("footer", { className: "flex flex-wrap items-center justify-between gap-3 px-1 py-4 text-[8px] uppercase tracking-[.15em] text-[var(--mute)]", children: [
                  /* @__PURE__ */ u3("span", { children: "Everything renders live in your browser" }),
                  /* @__PURE__ */ u3(
                    "button",
                    {
                      type: "button",
                      className: "hover:text-[var(--acid)]",
                      onClick: () => applyPreset("Pure signal", CLEAN),
                      children: "Reset all parameters \u21BA"
                    }
                  )
                ] })
              ] }) : null,
              error ? /* @__PURE__ */ u3("div", { className: "fixed bottom-4 left-1/2 z-50 -translate-x-1/2 border border-[#c45b6a] bg-[var(--void)] px-4 py-3 text-[10px] uppercase tracking-[.12em] text-[#b86a74]", children: error }) : null
            ]
          }
        )
      ]
    }
  );
}

// lakebed-source:__lakebed/client-entry.tsx
R(k(App, {}), document.getElementById("app"));
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vLm5wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvY29uc3RhbnRzLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy5ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL3V0aWwuanMiLCAiLi4vLi4vLi4vLi4vLi4vLm5wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvb3B0aW9ucy5qcyIsICIuLi8uLi8uLi8uLi8uLi8ubnBtL19ucHgvM2ViOGQzZWFhZjRlZjFiNC9ub2RlX21vZHVsZXMvcHJlYWN0L3NyYy9jcmVhdGUtZWxlbWVudC5qcyIsICIuLi8uLi8uLi8uLi8uLi8ubnBtL19ucHgvM2ViOGQzZWFhZjRlZjFiNC9ub2RlX21vZHVsZXMvcHJlYWN0L3NyYy9jb21wb25lbnQuanMiLCAiLi4vLi4vLi4vLi4vLi4vLm5wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvZGlmZi9wcm9wcy5qcyIsICIuLi8uLi8uLi8uLi8uLi8ubnBtL19ucHgvM2ViOGQzZWFhZjRlZjFiNC9ub2RlX21vZHVsZXMvcHJlYWN0L3NyYy9jcmVhdGUtY29udGV4dC5qcyIsICIuLi8uLi8uLi8uLi8uLi8ubnBtL19ucHgvM2ViOGQzZWFhZjRlZjFiNC9ub2RlX21vZHVsZXMvcHJlYWN0L3NyYy9kaWZmL2NoaWxkcmVuLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy5ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2RpZmYvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vLi4vLm5wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvcmVuZGVyLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy5ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2Nsb25lLWVsZW1lbnQuanMiLCAiLi4vLi4vLi4vLi4vLi4vLm5wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvZGlmZi9jYXRjaC1lcnJvci5qcyIsICIuLi8uLi8uLi8uLi8uLi8ubnBtL19ucHgvM2ViOGQzZWFhZjRlZjFiNC9ub2RlX21vZHVsZXMvcHJlYWN0L2hvb2tzL3NyYy9pbmRleC5qcyIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvbW9ycGhlci50cyIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvbWVkaWEudHMiLCAiLi4vLi4vLi4vLi4vLi4vLm5wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9qc3gtcnVudGltZS9zcmMvdXRpbHMuanMiLCAiLi4vLi4vLi4vLi4vLi4vLm5wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvY29uc3RhbnRzLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy5ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3QvanN4LXJ1bnRpbWUvc3JjL2luZGV4LmpzIiwgImxha2ViZWQtc291cmNlOmNsaWVudC9pbmRleC50c3giLCAibGFrZWJlZC1zb3VyY2U6X19sYWtlYmVkL2NsaWVudC1lbnRyeS50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKiBOb3JtYWwgaHlkcmF0aW9uIHRoYXQgYXR0YWNoZXMgdG8gYSBET00gdHJlZSBidXQgZG9lcyBub3QgZGlmZiBpdC4gKi9cbmV4cG9ydCBjb25zdCBNT0RFX0hZRFJBVEUgPSAxIDw8IDU7XG4vKiogU2lnbmlmaWVzIHRoaXMgVk5vZGUgc3VzcGVuZGVkIG9uIHRoZSBwcmV2aW91cyByZW5kZXIgKi9cbmV4cG9ydCBjb25zdCBNT0RFX1NVU1BFTkRFRCA9IDEgPDwgNztcbi8qKiBJbmRpY2F0ZXMgdGhhdCB0aGlzIG5vZGUgbmVlZHMgdG8gYmUgaW5zZXJ0ZWQgd2hpbGUgcGF0Y2hpbmcgY2hpbGRyZW4gKi9cbmV4cG9ydCBjb25zdCBJTlNFUlRfVk5PREUgPSAxIDw8IDI7XG4vKiogSW5kaWNhdGVzIGEgVk5vZGUgaGFzIGJlZW4gbWF0Y2hlZCB3aXRoIGFub3RoZXIgVk5vZGUgaW4gdGhlIGRpZmYgKi9cbmV4cG9ydCBjb25zdCBNQVRDSEVEID0gMSA8PCAxO1xuXG4vKiogUmVzZXQgYWxsIG1vZGUgZmxhZ3MgKi9cbmV4cG9ydCBjb25zdCBSRVNFVF9NT0RFID0gfihNT0RFX0hZRFJBVEUgfCBNT0RFX1NVU1BFTkRFRCk7XG5cbmV4cG9ydCBjb25zdCBTVkdfTkFNRVNQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcbmV4cG9ydCBjb25zdCBYSFRNTF9OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCc7XG5leHBvcnQgY29uc3QgTUFUSF9OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTCc7XG5cbmV4cG9ydCBjb25zdCBOVUxMID0gbnVsbDtcbmV4cG9ydCBjb25zdCBVTkRFRklORUQgPSB1bmRlZmluZWQ7XG5leHBvcnQgY29uc3QgRU1QVFlfT0JKID0gLyoqIEB0eXBlIHthbnl9ICovICh7fSk7XG5leHBvcnQgY29uc3QgRU1QVFlfQVJSID0gW107XG5leHBvcnQgY29uc3QgSVNfTk9OX0RJTUVOU0lPTkFMID1cblx0L2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxncmlkfG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmR8aXRlcmEvaTtcbiIsICJpbXBvcnQgeyBFTVBUWV9BUlIgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuLyoqXG4gKiBBc3NpZ24gcHJvcGVydGllcyBmcm9tIGBwcm9wc2AgdG8gYG9iamBcbiAqIEB0ZW1wbGF0ZSBPLCBQIFRoZSBvYmogYW5kIHByb3BzIHR5cGVzXG4gKiBAcGFyYW0ge099IG9iaiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyB0b1xuICogQHBhcmFtIHtQfSBwcm9wcyBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcmV0dXJucyB7TyAmIFB9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24ob2JqLCBwcm9wcykge1xuXHQvLyBAdHMtZXhwZWN0LWVycm9yIFdlIGNoYW5nZSB0aGUgdHlwZSBvZiBgb2JqYCB0byBiZSBgTyAmIFBgXG5cdGZvciAobGV0IGkgaW4gcHJvcHMpIG9ialtpXSA9IHByb3BzW2ldO1xuXHRyZXR1cm4gLyoqIEB0eXBlIHtPICYgUH0gKi8gKG9iaik7XG59XG5cbi8qKlxuICogUmVtb3ZlIGEgY2hpbGQgbm9kZSBmcm9tIGl0cyBwYXJlbnQgaWYgYXR0YWNoZWQuIFRoaXMgaXMgYSB3b3JrYXJvdW5kIGZvclxuICogSUUxMSB3aGljaCBkb2Vzbid0IHN1cHBvcnQgYEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSgpYC4gVXNpbmcgdGhpcyBmdW5jdGlvblxuICogaXMgc21hbGxlciB0aGFuIGluY2x1ZGluZyBhIGRlZGljYXRlZCBwb2x5ZmlsbC5cbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2luZGV4JykuQ29udGFpbmVyTm9kZX0gbm9kZSBUaGUgbm9kZSB0byByZW1vdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZU5vZGUobm9kZSkge1xuXHRpZiAobm9kZSAmJiBub2RlLnBhcmVudE5vZGUpIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbn1cblxuZXhwb3J0IGNvbnN0IHNsaWNlID0gRU1QVFlfQVJSLnNsaWNlO1xuIiwgImltcG9ydCB7IF9jYXRjaEVycm9yIH0gZnJvbSAnLi9kaWZmL2NhdGNoLWVycm9yJztcblxuLyoqXG4gKiBUaGUgYG9wdGlvbmAgb2JqZWN0IGNhbiBwb3RlbnRpYWxseSBjb250YWluIGNhbGxiYWNrIGZ1bmN0aW9uc1xuICogdGhhdCBhcmUgY2FsbGVkIGR1cmluZyB2YXJpb3VzIHN0YWdlcyBvZiBvdXIgcmVuZGVyZXIuIFRoaXMgaXMgdGhlXG4gKiBmb3VuZGF0aW9uIG9uIHdoaWNoIGFsbCBvdXIgYWRkb25zIGxpa2UgYHByZWFjdC9kZWJ1Z2AsIGBwcmVhY3QvY29tcGF0YCxcbiAqIGFuZCBgcHJlYWN0L2hvb2tzYCBhcmUgYmFzZWQgb24uIFNlZSB0aGUgYE9wdGlvbnNgIHR5cGUgaW4gYGludGVybmFsLmQudHNgXG4gKiBmb3IgYSBmdWxsIGxpc3Qgb2YgYXZhaWxhYmxlIG9wdGlvbiBob29rcyAobW9zdCBlZGl0b3JzL0lERXMgYWxsb3cgeW91IHRvXG4gKiBjdHJsK2NsaWNrIG9yIGNtZCtjbGljayBvbiBtYWMgdGhlIHR5cGUgZGVmaW5pdGlvbiBiZWxvdykuXG4gKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuT3B0aW9uc31cbiAqL1xuY29uc3Qgb3B0aW9ucyA9IHtcblx0X2NhdGNoRXJyb3Jcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG9wdGlvbnM7XG4iLCAiaW1wb3J0IHsgc2xpY2UgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi9vcHRpb25zJztcbmltcG9ydCB7IE5VTEwsIFVOREVGSU5FRCB9IGZyb20gJy4vY29uc3RhbnRzJztcblxubGV0IHZub2RlSWQgPSAwO1xuXG4vKipcbiAqIENyZWF0ZSBhbiB2aXJ0dWFsIG5vZGUgKHVzZWQgZm9yIEpTWClcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGVbXCJ0eXBlXCJdfSB0eXBlIFRoZSBub2RlIG5hbWUgb3IgQ29tcG9uZW50IGNvbnN0cnVjdG9yIGZvciB0aGlzXG4gKiB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7b2JqZWN0IHwgbnVsbCB8IHVuZGVmaW5lZH0gW3Byb3BzXSBUaGUgcHJvcGVydGllcyBvZiB0aGUgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge0FycmF5PGltcG9ydCgnLicpLkNvbXBvbmVudENoaWxkcmVuPn0gW2NoaWxkcmVuXSBUaGUgY2hpbGRyZW4gb2YgdGhlXG4gKiB2aXJ0dWFsIG5vZGVcbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG5cdGxldCBub3JtYWxpemVkUHJvcHMgPSB7fSxcblx0XHRrZXksXG5cdFx0cmVmLFxuXHRcdGk7XG5cdGZvciAoaSBpbiBwcm9wcykge1xuXHRcdGlmIChpID09ICdrZXknKSBrZXkgPSBwcm9wc1tpXTtcblx0XHRlbHNlIGlmIChpID09ICdyZWYnKSByZWYgPSBwcm9wc1tpXTtcblx0XHRlbHNlIG5vcm1hbGl6ZWRQcm9wc1tpXSA9IHByb3BzW2ldO1xuXHR9XG5cblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKSB7XG5cdFx0bm9ybWFsaXplZFByb3BzLmNoaWxkcmVuID1cblx0XHRcdGFyZ3VtZW50cy5sZW5ndGggPiAzID8gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpIDogY2hpbGRyZW47XG5cdH1cblxuXHQvLyBJZiBhIENvbXBvbmVudCBWTm9kZSwgY2hlY2sgZm9yIGFuZCBhcHBseSBkZWZhdWx0UHJvcHNcblx0Ly8gTm90ZTogdHlwZSBtYXkgYmUgdW5kZWZpbmVkIGluIGRldmVsb3BtZW50LCBtdXN0IG5ldmVyIGVycm9yIGhlcmUuXG5cdGlmICh0eXBlb2YgdHlwZSA9PSAnZnVuY3Rpb24nICYmIHR5cGUuZGVmYXVsdFByb3BzICE9IE5VTEwpIHtcblx0XHRmb3IgKGkgaW4gdHlwZS5kZWZhdWx0UHJvcHMpIHtcblx0XHRcdGlmIChub3JtYWxpemVkUHJvcHNbaV0gPT09IFVOREVGSU5FRCkge1xuXHRcdFx0XHRub3JtYWxpemVkUHJvcHNbaV0gPSB0eXBlLmRlZmF1bHRQcm9wc1tpXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gY3JlYXRlVk5vZGUodHlwZSwgbm9ybWFsaXplZFByb3BzLCBrZXksIHJlZiwgTlVMTCk7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgVk5vZGUgKHVzZWQgaW50ZXJuYWxseSBieSBQcmVhY3QpXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlW1widHlwZVwiXX0gdHlwZSBUaGUgbm9kZSBuYW1lIG9yIENvbXBvbmVudFxuICogQ29uc3RydWN0b3IgZm9yIHRoaXMgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge29iamVjdCB8IHN0cmluZyB8IG51bWJlciB8IG51bGx9IHByb3BzIFRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgdmlydHVhbCBub2RlLlxuICogSWYgdGhpcyB2aXJ0dWFsIG5vZGUgcmVwcmVzZW50cyBhIHRleHQgbm9kZSwgdGhpcyBpcyB0aGUgdGV4dCBvZiB0aGUgbm9kZSAoc3RyaW5nIG9yIG51bWJlcikuXG4gKiBAcGFyYW0ge3N0cmluZyB8IG51bWJlciB8IG51bGx9IGtleSBUaGUga2V5IGZvciB0aGlzIHZpcnR1YWwgbm9kZSwgdXNlZCB3aGVuXG4gKiBkaWZmaW5nIGl0IGFnYWluc3QgaXRzIGNoaWxkcmVuXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlW1wicmVmXCJdfSByZWYgVGhlIHJlZiBwcm9wZXJ0eSB0aGF0IHdpbGxcbiAqIHJlY2VpdmUgYSByZWZlcmVuY2UgdG8gaXRzIGNyZWF0ZWQgY2hpbGRcbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVZOb2RlKHR5cGUsIHByb3BzLCBrZXksIHJlZiwgb3JpZ2luYWwpIHtcblx0Ly8gVjggc2VlbXMgdG8gYmUgYmV0dGVyIGF0IGRldGVjdGluZyB0eXBlIHNoYXBlcyBpZiB0aGUgb2JqZWN0IGlzIGFsbG9jYXRlZCBmcm9tIHRoZSBzYW1lIGNhbGwgc2l0ZVxuXHQvLyBEbyBub3QgaW5saW5lIGludG8gY3JlYXRlRWxlbWVudCBhbmQgY29lcmNlVG9WTm9kZSFcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX0gKi9cblx0Y29uc3Qgdm5vZGUgPSB7XG5cdFx0dHlwZSxcblx0XHRwcm9wcyxcblx0XHRrZXksXG5cdFx0cmVmLFxuXHRcdF9jaGlsZHJlbjogTlVMTCxcblx0XHRfcGFyZW50OiBOVUxMLFxuXHRcdF9kZXB0aDogMCxcblx0XHRfZG9tOiBOVUxMLFxuXHRcdF9jb21wb25lbnQ6IE5VTEwsXG5cdFx0Y29uc3RydWN0b3I6IFVOREVGSU5FRCxcblx0XHRfb3JpZ2luYWw6IG9yaWdpbmFsID09IE5VTEwgPyArK3Zub2RlSWQgOiBvcmlnaW5hbCxcblx0XHRfaW5kZXg6IC0xLFxuXHRcdF9mbGFnczogMFxuXHR9O1xuXG5cdC8vIE9ubHkgaW52b2tlIHRoZSB2bm9kZSBob29rIGlmIHRoaXMgd2FzICpub3QqIGEgZGlyZWN0IGNvcHk6XG5cdGlmIChvcmlnaW5hbCA9PSBOVUxMICYmIG9wdGlvbnMudm5vZGUgIT0gTlVMTCkgb3B0aW9ucy52bm9kZSh2bm9kZSk7XG5cblx0cmV0dXJuIHZub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmVmKCkge1xuXHRyZXR1cm4geyBjdXJyZW50OiBOVUxMIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGcmFnbWVudChwcm9wcykge1xuXHRyZXR1cm4gcHJvcHMuY2hpbGRyZW47XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYSB0aGUgYXJndW1lbnQgaXMgYSB2YWxpZCBQcmVhY3QgVk5vZGUuXG4gKiBAcGFyYW0geyp9IHZub2RlXG4gKiBAcmV0dXJucyB7dm5vZGUgaXMgVk5vZGV9XG4gKi9cbmV4cG9ydCBjb25zdCBpc1ZhbGlkRWxlbWVudCA9IHZub2RlID0+XG5cdHZub2RlICE9IE5VTEwgJiYgdm5vZGUuY29uc3RydWN0b3IgPT09IFVOREVGSU5FRDtcbiIsICJpbXBvcnQgeyBhc3NpZ24gfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHsgZGlmZiwgY29tbWl0Um9vdCB9IGZyb20gJy4vZGlmZi9pbmRleCc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuL29wdGlvbnMnO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICcuL2NyZWF0ZS1lbGVtZW50JztcbmltcG9ydCB7IE1PREVfSFlEUkFURSwgTlVMTCB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBCYXNlIENvbXBvbmVudCBjbGFzcy4gUHJvdmlkZXMgYHNldFN0YXRlKClgIGFuZCBgZm9yY2VVcGRhdGUoKWAsIHdoaWNoXG4gKiB0cmlnZ2VyIHJlbmRlcmluZ1xuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIFRoZSBpbml0aWFsIGNvbXBvbmVudCBwcm9wc1xuICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgVGhlIGluaXRpYWwgY29udGV4dCBmcm9tIHBhcmVudCBjb21wb25lbnRzJ1xuICogZ2V0Q2hpbGRDb250ZXh0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBCYXNlQ29tcG9uZW50KHByb3BzLCBjb250ZXh0KSB7XG5cdHRoaXMucHJvcHMgPSBwcm9wcztcblx0dGhpcy5jb250ZXh0ID0gY29udGV4dDtcbn1cblxuLyoqXG4gKiBVcGRhdGUgY29tcG9uZW50IHN0YXRlIGFuZCBzY2hlZHVsZSBhIHJlLXJlbmRlci5cbiAqIEB0aGlzIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9XG4gKiBAcGFyYW0ge29iamVjdCB8ICgoczogb2JqZWN0LCBwOiBvYmplY3QpID0+IG9iamVjdCl9IHVwZGF0ZSBBIGhhc2ggb2Ygc3RhdGVcbiAqIHByb3BlcnRpZXMgdG8gdXBkYXRlIHdpdGggbmV3IHZhbHVlcyBvciBhIGZ1bmN0aW9uIHRoYXQgZ2l2ZW4gdGhlIGN1cnJlbnRcbiAqIHN0YXRlIGFuZCBwcm9wcyByZXR1cm5zIGEgbmV3IHBhcnRpYWwgc3RhdGVcbiAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gW2NhbGxiYWNrXSBBIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbmNlIGNvbXBvbmVudCBzdGF0ZSBpc1xuICogdXBkYXRlZFxuICovXG5CYXNlQ29tcG9uZW50LnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uICh1cGRhdGUsIGNhbGxiYWNrKSB7XG5cdC8vIG9ubHkgY2xvbmUgc3RhdGUgd2hlbiBjb3B5aW5nIHRvIG5leHRTdGF0ZSB0aGUgZmlyc3QgdGltZS5cblx0bGV0IHM7XG5cdGlmICh0aGlzLl9uZXh0U3RhdGUgIT0gTlVMTCAmJiB0aGlzLl9uZXh0U3RhdGUgIT0gdGhpcy5zdGF0ZSkge1xuXHRcdHMgPSB0aGlzLl9uZXh0U3RhdGU7XG5cdH0gZWxzZSB7XG5cdFx0cyA9IHRoaXMuX25leHRTdGF0ZSA9IGFzc2lnbih7fSwgdGhpcy5zdGF0ZSk7XG5cdH1cblxuXHRpZiAodHlwZW9mIHVwZGF0ZSA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0Ly8gU29tZSBsaWJyYXJpZXMgbGlrZSBgaW1tZXJgIG1hcmsgdGhlIGN1cnJlbnQgc3RhdGUgYXMgcmVhZG9ubHksXG5cdFx0Ly8gcHJldmVudGluZyB1cyBmcm9tIG11dGF0aW5nIGl0LCBzbyB3ZSBuZWVkIHRvIGNsb25lIGl0LiBTZWUgIzI3MTZcblx0XHR1cGRhdGUgPSB1cGRhdGUoYXNzaWduKHt9LCBzKSwgdGhpcy5wcm9wcyk7XG5cdH1cblxuXHRpZiAodXBkYXRlKSB7XG5cdFx0YXNzaWduKHMsIHVwZGF0ZSk7XG5cdH1cblxuXHQvLyBTa2lwIHVwZGF0ZSBpZiB1cGRhdGVyIGZ1bmN0aW9uIHJldHVybmVkIG51bGxcblx0aWYgKHVwZGF0ZSA9PSBOVUxMKSByZXR1cm47XG5cblx0aWYgKHRoaXMuX3Zub2RlKSB7XG5cdFx0aWYgKGNhbGxiYWNrKSB7XG5cdFx0XHR0aGlzLl9zdGF0ZUNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcblx0XHR9XG5cdFx0ZW5xdWV1ZVJlbmRlcih0aGlzKTtcblx0fVxufTtcblxuLyoqXG4gKiBJbW1lZGlhdGVseSBwZXJmb3JtIGEgc3luY2hyb25vdXMgcmUtcmVuZGVyIG9mIHRoZSBjb21wb25lbnRcbiAqIEB0aGlzIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9XG4gKiBAcGFyYW0geygpID0+IHZvaWR9IFtjYWxsYmFja10gQSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzXG4gKiByZS1yZW5kZXJlZFxuICovXG5CYXNlQ29tcG9uZW50LnByb3RvdHlwZS5mb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRpZiAodGhpcy5fdm5vZGUpIHtcblx0XHQvLyBTZXQgcmVuZGVyIG1vZGUgc28gdGhhdCB3ZSBjYW4gZGlmZmVyZW50aWF0ZSB3aGVyZSB0aGUgcmVuZGVyIHJlcXVlc3Rcblx0XHQvLyBpcyBjb21pbmcgZnJvbS4gV2UgbmVlZCB0aGlzIGJlY2F1c2UgZm9yY2VVcGRhdGUgc2hvdWxkIG5ldmVyIGNhbGxcblx0XHQvLyBzaG91bGRDb21wb25lbnRVcGRhdGVcblx0XHR0aGlzLl9mb3JjZSA9IHRydWU7XG5cdFx0aWYgKGNhbGxiYWNrKSB0aGlzLl9yZW5kZXJDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG5cdFx0ZW5xdWV1ZVJlbmRlcih0aGlzKTtcblx0fVxufTtcblxuLyoqXG4gKiBBY2NlcHRzIGBwcm9wc2AgYW5kIGBzdGF0ZWAsIGFuZCByZXR1cm5zIGEgbmV3IFZpcnR1YWwgRE9NIHRyZWUgdG8gYnVpbGQuXG4gKiBWaXJ0dWFsIERPTSBpcyBnZW5lcmFsbHkgY29uc3RydWN0ZWQgdmlhIFtKU1hdKGh0dHBzOi8vamFzb25mb3JtYXQuY29tL3d0Zi1pcy1qc3gpLlxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIFByb3BzIChlZzogSlNYIGF0dHJpYnV0ZXMpIHJlY2VpdmVkIGZyb20gcGFyZW50XG4gKiBlbGVtZW50L2NvbXBvbmVudFxuICogQHBhcmFtIHtvYmplY3R9IHN0YXRlIFRoZSBjb21wb25lbnQncyBjdXJyZW50IHN0YXRlXG4gKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCBDb250ZXh0IG9iamVjdCwgYXMgcmV0dXJuZWQgYnkgdGhlIG5lYXJlc3RcbiAqIGFuY2VzdG9yJ3MgYGdldENoaWxkQ29udGV4dCgpYFxuICogQHJldHVybnMge0NvbXBvbmVudENoaWxkcmVuIHwgdm9pZH1cbiAqL1xuQmFzZUNvbXBvbmVudC5wcm90b3R5cGUucmVuZGVyID0gRnJhZ21lbnQ7XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX0gdm5vZGVcbiAqIEBwYXJhbSB7bnVtYmVyIHwgbnVsbH0gW2NoaWxkSW5kZXhdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREb21TaWJsaW5nKHZub2RlLCBjaGlsZEluZGV4KSB7XG5cdGlmIChjaGlsZEluZGV4ID09IE5VTEwpIHtcblx0XHQvLyBVc2UgY2hpbGRJbmRleD09bnVsbCBhcyBhIHNpZ25hbCB0byByZXN1bWUgdGhlIHNlYXJjaCBmcm9tIHRoZSB2bm9kZSdzIHNpYmxpbmdcblx0XHRyZXR1cm4gdm5vZGUuX3BhcmVudFxuXHRcdFx0PyBnZXREb21TaWJsaW5nKHZub2RlLl9wYXJlbnQsIHZub2RlLl9pbmRleCArIDEpXG5cdFx0XHQ6IE5VTEw7XG5cdH1cblxuXHRsZXQgc2libGluZztcblx0Zm9yICg7IGNoaWxkSW5kZXggPCB2bm9kZS5fY2hpbGRyZW4ubGVuZ3RoOyBjaGlsZEluZGV4KyspIHtcblx0XHRzaWJsaW5nID0gdm5vZGUuX2NoaWxkcmVuW2NoaWxkSW5kZXhdO1xuXG5cdFx0aWYgKHNpYmxpbmcgIT0gTlVMTCAmJiBzaWJsaW5nLl9kb20gIT0gTlVMTCkge1xuXHRcdFx0Ly8gU2luY2UgdXBkYXRlUGFyZW50RG9tUG9pbnRlcnMga2VlcHMgX2RvbSBwb2ludGVyIGNvcnJlY3QsXG5cdFx0XHQvLyB3ZSBjYW4gcmVseSBvbiBfZG9tIHRvIHRlbGwgdXMgaWYgdGhpcyBzdWJ0cmVlIGNvbnRhaW5zIGFcblx0XHRcdC8vIHJlbmRlcmVkIERPTSBub2RlLCBhbmQgd2hhdCB0aGUgZmlyc3QgcmVuZGVyZWQgRE9NIG5vZGUgaXNcblx0XHRcdHJldHVybiBzaWJsaW5nLl9kb207XG5cdFx0fVxuXHR9XG5cblx0Ly8gSWYgd2UgZ2V0IGhlcmUsIHdlIGhhdmUgbm90IGZvdW5kIGEgRE9NIG5vZGUgaW4gdGhpcyB2bm9kZSdzIGNoaWxkcmVuLlxuXHQvLyBXZSBtdXN0IHJlc3VtZSBmcm9tIHRoaXMgdm5vZGUncyBzaWJsaW5nIChpbiBpdCdzIHBhcmVudCBfY2hpbGRyZW4gYXJyYXkpXG5cdC8vIE9ubHkgY2xpbWIgdXAgYW5kIHNlYXJjaCB0aGUgcGFyZW50IGlmIHdlIGFyZW4ndCBzZWFyY2hpbmcgdGhyb3VnaCBhIERPTVxuXHQvLyBWTm9kZSAobWVhbmluZyB3ZSByZWFjaGVkIHRoZSBET00gcGFyZW50IG9mIHRoZSBvcmlnaW5hbCB2bm9kZSB0aGF0IGJlZ2FuXG5cdC8vIHRoZSBzZWFyY2gpXG5cdHJldHVybiB0eXBlb2Ygdm5vZGUudHlwZSA9PSAnZnVuY3Rpb24nID8gZ2V0RG9tU2libGluZyh2bm9kZSkgOiBOVUxMO1xufVxuXG4vKipcbiAqIFRyaWdnZXIgaW4tcGxhY2UgcmUtcmVuZGVyaW5nIG9mIGEgY29tcG9uZW50LlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9IGNvbXBvbmVudCBUaGUgY29tcG9uZW50IHRvIHJlcmVuZGVyXG4gKi9cbmZ1bmN0aW9uIHJlbmRlckNvbXBvbmVudChjb21wb25lbnQpIHtcblx0aWYgKGNvbXBvbmVudC5fcGFyZW50RG9tICYmIGNvbXBvbmVudC5fZGlydHkpIHtcblx0XHRsZXQgb2xkVk5vZGUgPSBjb21wb25lbnQuX3Zub2RlLFxuXHRcdFx0b2xkRG9tID0gb2xkVk5vZGUuX2RvbSxcblx0XHRcdGNvbW1pdFF1ZXVlID0gW10sXG5cdFx0XHRyZWZRdWV1ZSA9IFtdLFxuXHRcdFx0bmV3Vk5vZGUgPSBhc3NpZ24oe30sIG9sZFZOb2RlKTtcblx0XHRuZXdWTm9kZS5fb3JpZ2luYWwgPSBvbGRWTm9kZS5fb3JpZ2luYWwgKyAxO1xuXHRcdGlmIChvcHRpb25zLnZub2RlKSBvcHRpb25zLnZub2RlKG5ld1ZOb2RlKTtcblxuXHRcdGRpZmYoXG5cdFx0XHRjb21wb25lbnQuX3BhcmVudERvbSxcblx0XHRcdG5ld1ZOb2RlLFxuXHRcdFx0b2xkVk5vZGUsXG5cdFx0XHRjb21wb25lbnQuX2dsb2JhbENvbnRleHQsXG5cdFx0XHRjb21wb25lbnQuX3BhcmVudERvbS5uYW1lc3BhY2VVUkksXG5cdFx0XHRvbGRWTm9kZS5fZmxhZ3MgJiBNT0RFX0hZRFJBVEUgPyBbb2xkRG9tXSA6IE5VTEwsXG5cdFx0XHRjb21taXRRdWV1ZSxcblx0XHRcdG9sZERvbSA9PSBOVUxMID8gZ2V0RG9tU2libGluZyhvbGRWTm9kZSkgOiBvbGREb20sXG5cdFx0XHQhIShvbGRWTm9kZS5fZmxhZ3MgJiBNT0RFX0hZRFJBVEUpLFxuXHRcdFx0cmVmUXVldWVcblx0XHQpO1xuXG5cdFx0bmV3Vk5vZGUuX29yaWdpbmFsID0gb2xkVk5vZGUuX29yaWdpbmFsO1xuXHRcdG5ld1ZOb2RlLl9wYXJlbnQuX2NoaWxkcmVuW25ld1ZOb2RlLl9pbmRleF0gPSBuZXdWTm9kZTtcblx0XHRjb21taXRSb290KGNvbW1pdFF1ZXVlLCBuZXdWTm9kZSwgcmVmUXVldWUpO1xuXHRcdG9sZFZOb2RlLl9kb20gPSBvbGRWTm9kZS5fcGFyZW50ID0gbnVsbDtcblxuXHRcdGlmIChuZXdWTm9kZS5fZG9tICE9IG9sZERvbSkge1xuXHRcdFx0dXBkYXRlUGFyZW50RG9tUG9pbnRlcnMobmV3Vk5vZGUpO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9IHZub2RlXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZVBhcmVudERvbVBvaW50ZXJzKHZub2RlKSB7XG5cdGlmICgodm5vZGUgPSB2bm9kZS5fcGFyZW50KSAhPSBOVUxMICYmIHZub2RlLl9jb21wb25lbnQgIT0gTlVMTCkge1xuXHRcdHZub2RlLl9kb20gPSB2bm9kZS5fY29tcG9uZW50LmJhc2UgPSBOVUxMO1xuXHRcdHZub2RlLl9jaGlsZHJlbi5zb21lKGNoaWxkID0+IHtcblx0XHRcdGlmIChjaGlsZCAhPSBOVUxMICYmIGNoaWxkLl9kb20gIT0gTlVMTCkge1xuXHRcdFx0XHRyZXR1cm4gKHZub2RlLl9kb20gPSB2bm9kZS5fY29tcG9uZW50LmJhc2UgPSBjaGlsZC5fZG9tKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiB1cGRhdGVQYXJlbnREb21Qb2ludGVycyh2bm9kZSk7XG5cdH1cbn1cblxuLyoqXG4gKiBUaGUgcmVuZGVyIHF1ZXVlXG4gKiBAdHlwZSB7QXJyYXk8aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50Pn1cbiAqL1xubGV0IHJlcmVuZGVyUXVldWUgPSBbXTtcblxuLypcbiAqIFRoZSB2YWx1ZSBvZiBgQ29tcG9uZW50LmRlYm91bmNlYCBtdXN0IGFzeW5jaHJvbm91c2x5IGludm9rZSB0aGUgcGFzc2VkIGluIGNhbGxiYWNrLiBJdCBpc1xuICogaW1wb3J0YW50IHRoYXQgY29udHJpYnV0b3JzIHRvIFByZWFjdCBjYW4gY29uc2lzdGVudGx5IHJlYXNvbiBhYm91dCB3aGF0IGNhbGxzIHRvIGBzZXRTdGF0ZWAsIGV0Yy5cbiAqIGRvLCBhbmQgd2hlbiB0aGVpciBlZmZlY3RzIHdpbGwgYmUgYXBwbGllZC4gU2VlIHRoZSBsaW5rcyBiZWxvdyBmb3Igc29tZSBmdXJ0aGVyIHJlYWRpbmcgb24gZGVzaWduaW5nXG4gKiBhc3luY2hyb25vdXMgQVBJcy5cbiAqICogW0Rlc2lnbmluZyBBUElzIGZvciBBc3luY2hyb255XShodHRwczovL2Jsb2cuaXpzLm1lLzIwMTMvMDgvZGVzaWduaW5nLWFwaXMtZm9yLWFzeW5jaHJvbnkpXG4gKiAqIFtDYWxsYmFja3Mgc3luY2hyb25vdXMgYW5kIGFzeW5jaHJvbm91c10oaHR0cHM6Ly9ibG9nLm9tZXRlci5jb20vMjAxMS8wNy8yNC9jYWxsYmFja3Mtc3luY2hyb25vdXMtYW5kLWFzeW5jaHJvbm91cy8pXG4gKi9cblxubGV0IHByZXZEZWJvdW5jZTtcblxuY29uc3QgZGVmZXIgPVxuXHR0eXBlb2YgUHJvbWlzZSA9PSAnZnVuY3Rpb24nXG5cdFx0PyBQcm9taXNlLnByb3RvdHlwZS50aGVuLmJpbmQoUHJvbWlzZS5yZXNvbHZlKCkpXG5cdFx0OiBzZXRUaW1lb3V0O1xuXG4vKipcbiAqIEVucXVldWUgYSByZXJlbmRlciBvZiBhIGNvbXBvbmVudFxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9IGMgVGhlIGNvbXBvbmVudCB0byByZXJlbmRlclxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5xdWV1ZVJlbmRlcihjKSB7XG5cdGlmIChcblx0XHQoIWMuX2RpcnR5ICYmXG5cdFx0XHQoYy5fZGlydHkgPSB0cnVlKSAmJlxuXHRcdFx0cmVyZW5kZXJRdWV1ZS5wdXNoKGMpICYmXG5cdFx0XHQhcHJvY2Vzcy5fcmVyZW5kZXJDb3VudCsrKSB8fFxuXHRcdHByZXZEZWJvdW5jZSAhPSBvcHRpb25zLmRlYm91bmNlUmVuZGVyaW5nXG5cdCkge1xuXHRcdHByZXZEZWJvdW5jZSA9IG9wdGlvbnMuZGVib3VuY2VSZW5kZXJpbmc7XG5cdFx0KHByZXZEZWJvdW5jZSB8fCBkZWZlcikocHJvY2Vzcyk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gYVxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9IGJcbiAqL1xuY29uc3QgZGVwdGhTb3J0ID0gKGEsIGIpID0+IGEuX3Zub2RlLl9kZXB0aCAtIGIuX3Zub2RlLl9kZXB0aDtcblxuLyoqIEZsdXNoIHRoZSByZW5kZXIgcXVldWUgYnkgcmVyZW5kZXJpbmcgYWxsIHF1ZXVlZCBjb21wb25lbnRzICovXG5mdW5jdGlvbiBwcm9jZXNzKCkge1xuXHR0cnkge1xuXHRcdGxldCBjLFxuXHRcdFx0bCA9IDE7XG5cblx0XHQvLyBEb24ndCB1cGRhdGUgYHJlbmRlckNvdW50YCB5ZXQuIEtlZXAgaXRzIHZhbHVlIG5vbi16ZXJvIHRvIHByZXZlbnQgdW5uZWNlc3Nhcnlcblx0XHQvLyBwcm9jZXNzKCkgY2FsbHMgZnJvbSBnZXR0aW5nIHNjaGVkdWxlZCB3aGlsZSBgcXVldWVgIGlzIHN0aWxsIGJlaW5nIGNvbnN1bWVkLlxuXHRcdHdoaWxlIChyZXJlbmRlclF1ZXVlLmxlbmd0aCkge1xuXHRcdFx0Ly8gS2VlcCB0aGUgcmVyZW5kZXIgcXVldWUgc29ydGVkIGJ5IChkZXB0aCwgaW5zZXJ0aW9uIG9yZGVyKS4gVGhlIHF1ZXVlXG5cdFx0XHQvLyB3aWxsIGluaXRpYWxseSBiZSBzb3J0ZWQgb24gdGhlIGZpcnN0IGl0ZXJhdGlvbiBvbmx5IGlmIGl0IGhhcyBtb3JlIHRoYW4gMSBpdGVtLlxuXHRcdFx0Ly9cblx0XHRcdC8vIE5ldyBpdGVtcyBjYW4gYmUgYWRkZWQgdG8gdGhlIHF1ZXVlIGUuZy4gd2hlbiByZXJlbmRlcmluZyBhIHByb3ZpZGVyLCBzbyB3ZSB3YW50IHRvXG5cdFx0XHQvLyBrZWVwIHRoZSBvcmRlciBmcm9tIHRvcCB0byBib3R0b20gd2l0aCB0aG9zZSBuZXcgaXRlbXMgc28gd2UgY2FuIGhhbmRsZSB0aGVtIGluIGFcblx0XHRcdC8vIHNpbmdsZSBwYXNzXG5cdFx0XHRpZiAocmVyZW5kZXJRdWV1ZS5sZW5ndGggPiBsKSB7XG5cdFx0XHRcdHJlcmVuZGVyUXVldWUuc29ydChkZXB0aFNvcnQpO1xuXHRcdFx0fVxuXG5cdFx0XHRjID0gcmVyZW5kZXJRdWV1ZS5zaGlmdCgpO1xuXHRcdFx0bCA9IHJlcmVuZGVyUXVldWUubGVuZ3RoO1xuXG5cdFx0XHRyZW5kZXJDb21wb25lbnQoYyk7XG5cdFx0fVxuXHR9IGZpbmFsbHkge1xuXHRcdHJlcmVuZGVyUXVldWUubGVuZ3RoID0gcHJvY2Vzcy5fcmVyZW5kZXJDb3VudCA9IDA7XG5cdH1cbn1cblxucHJvY2Vzcy5fcmVyZW5kZXJDb3VudCA9IDA7XG4iLCAiaW1wb3J0IHsgSVNfTk9OX0RJTUVOU0lPTkFMLCBOVUxMLCBTVkdfTkFNRVNQQUNFIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4uL29wdGlvbnMnO1xuXG4vLyBQZXItaW5zdGFuY2UgdW5pcXVlIGtleSBmb3IgZXZlbnQgY2xvY2sgc3RhbXBzLiBFYWNoIFByZWFjdCBjb3B5IG9uIHRoZSBwYWdlXG4vLyBnZXRzIGl0cyBvd24gcmFuZG9tIHN1ZmZpeCBzbyB0aGF0IGBfZGlzcGF0Y2hlZGAgLyBgX2F0dGFjaGVkYCBwcm9wZXJ0aWVzIG9uXG4vLyBzaGFyZWQgZXZlbnQgb2JqZWN0cyBhbmQgaGFuZGxlciBmdW5jdGlvbnMgY2Fubm90IGNvbGxpZGUgYWNyb3NzIGluc3RhbmNlcy5cbi8vIH4xIGluIDYwTSBjb2xsaXNpb24gb2RkcyAtIGlmIHlvdSBoYXZlIHRoYXQgbWFueSBwcmFlY3QgdmVyc2lvbnMgb24gdGhlIHBhZ2UsXG4vLyB5b3UgZGVzZXJ2ZSBzb21lIHdlaXJkIGJ1Z3MuXG4vLyBJbiAxMSB3ZSBjYW4gcmVwbGFjZSB0aGlzIHdpdGggYVxuLy8gU3ltYm9sXG5sZXQgX2lkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZyg4KSxcblx0RVZFTlRfRElTUEFUQ0hFRCA9ICdfX2QnICsgX2lkLFxuXHRFVkVOVF9BVFRBQ0hFRCA9ICdfX2EnICsgX2lkO1xuXG5mdW5jdGlvbiBzZXRTdHlsZShzdHlsZSwga2V5LCB2YWx1ZSkge1xuXHRpZiAoa2V5WzBdID09ICctJykge1xuXHRcdHN0eWxlLnNldFByb3BlcnR5KGtleSwgdmFsdWUgPT0gTlVMTCA/ICcnIDogdmFsdWUpO1xuXHR9IGVsc2UgaWYgKHZhbHVlID09IE5VTEwpIHtcblx0XHRzdHlsZVtrZXldID0gJyc7XG5cdH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlICE9ICdudW1iZXInIHx8IElTX05PTl9ESU1FTlNJT05BTC50ZXN0KGtleSkpIHtcblx0XHRzdHlsZVtrZXldID0gdmFsdWU7XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGVba2V5XSA9IHZhbHVlICsgJ3B4Jztcblx0fVxufVxuXG5jb25zdCBDQVBUVVJFX1JFR0VYID0gLyhQb2ludGVyQ2FwdHVyZSkkfENhcHR1cmUkL2k7XG5cbi8vIEEgbG9naWNhbCBjbG9jayB0byBzb2x2ZSBpc3N1ZXMgbGlrZSBodHRwczovL2dpdGh1Yi5jb20vcHJlYWN0anMvcHJlYWN0L2lzc3Vlcy8zOTI3LlxuLy8gV2hlbiB0aGUgRE9NIHBlcmZvcm1zIGFuIGV2ZW50IGl0IGxlYXZlcyBtaWNyby10aWNrcyBpbiBiZXR3ZWVuIGJ1YmJsaW5nIHVwIHdoaWNoIG1lYW5zIHRoYXRcbi8vIGFuIGV2ZW50IGNhbiB0cmlnZ2VyIG9uIGEgbmV3bHkgcmVhdGVkIERPTS1ub2RlIHdoaWxlIHRoZSBldmVudCBidWJibGVzIHVwLlxuLy9cbi8vIE9yaWdpbmFsbHkgaW5zcGlyZWQgYnkgVnVlXG4vLyAoaHR0cHM6Ly9naXRodWIuY29tL3Z1ZWpzL2NvcmUvYmxvYi9jYWViOGE2ODgxMWExYjBmNzkvcGFja2FnZXMvcnVudGltZS1kb20vc3JjL21vZHVsZXMvZXZlbnRzLnRzI0w5MC1MMTAxKSxcbi8vIGJ1dCBtb2RpZmllZCB0byB1c2UgYSBsb2dpY2FsIGNsb2NrIGluc3RlYWQgb2YgRGF0ZS5ub3coKSBpbiBjYXNlIGV2ZW50IGhhbmRsZXJzIGdldCBhdHRhY2hlZFxuLy8gYW5kIGV2ZW50cyBnZXQgZGlzcGF0Y2hlZCBkdXJpbmcgdGhlIHNhbWUgbWlsbGlzZWNvbmQuXG4vL1xuLy8gVGhlIGNsb2NrIGlzIGluY3JlbWVudGVkIGFmdGVyIGVhY2ggbmV3IGV2ZW50IGRpc3BhdGNoLiBUaGlzIGFsbG93cyAxIDAwMCAwMDAgbmV3IGV2ZW50c1xuLy8gcGVyIHNlY29uZCBmb3Igb3ZlciAyODAgeWVhcnMgYmVmb3JlIHRoZSB2YWx1ZSByZWFjaGVzIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSICgyKio1MyAtIDEpLlxubGV0IGV2ZW50Q2xvY2sgPSAwO1xuXG4vKipcbiAqIFNldCBhIHByb3BlcnR5IHZhbHVlIG9uIGEgRE9NIG5vZGVcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IGRvbSBUaGUgRE9NIG5vZGUgdG8gbW9kaWZ5XG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgcHJvcGVydHkgdG8gc2V0XG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQgdGhlIHByb3BlcnR5IHRvXG4gKiBAcGFyYW0geyp9IG9sZFZhbHVlIFRoZSBvbGQgdmFsdWUgdGhlIHByb3BlcnR5IGhhZFxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVzcGFjZSBXaGV0aGVyIG9yIG5vdCB0aGlzIERPTSBub2RlIGlzIGFuIFNWRyBub2RlIG9yIG5vdFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0UHJvcGVydHkoZG9tLCBuYW1lLCB2YWx1ZSwgb2xkVmFsdWUsIG5hbWVzcGFjZSkge1xuXHRsZXQgdXNlQ2FwdHVyZTtcblxuXHRvOiBpZiAobmFtZSA9PSAnc3R5bGUnKSB7XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuXHRcdFx0ZG9tLnN0eWxlLmNzc1RleHQgPSB2YWx1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHR5cGVvZiBvbGRWYWx1ZSA9PSAnc3RyaW5nJykge1xuXHRcdFx0XHRkb20uc3R5bGUuY3NzVGV4dCA9IG9sZFZhbHVlID0gJyc7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChvbGRWYWx1ZSkge1xuXHRcdFx0XHRmb3IgKG5hbWUgaW4gb2xkVmFsdWUpIHtcblx0XHRcdFx0XHRpZiAoISh2YWx1ZSAmJiBuYW1lIGluIHZhbHVlKSkge1xuXHRcdFx0XHRcdFx0c2V0U3R5bGUoZG9tLnN0eWxlLCBuYW1lLCAnJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0XHRmb3IgKG5hbWUgaW4gdmFsdWUpIHtcblx0XHRcdFx0XHRpZiAoIW9sZFZhbHVlIHx8IHZhbHVlW25hbWVdICE9IG9sZFZhbHVlW25hbWVdKSB7XG5cdFx0XHRcdFx0XHRzZXRTdHlsZShkb20uc3R5bGUsIG5hbWUsIHZhbHVlW25hbWVdKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Ly8gQmVuY2htYXJrIGZvciBjb21wYXJpc29uOiBodHRwczovL2VzYmVuY2guY29tL2JlbmNoLzU3NGM5NTRiZGI5NjViOWEwMDk2NWFjNlxuXHRlbHNlIGlmIChuYW1lWzBdID09ICdvJyAmJiBuYW1lWzFdID09ICduJykge1xuXHRcdHVzZUNhcHR1cmUgPSBuYW1lICE9IChuYW1lID0gbmFtZS5yZXBsYWNlKENBUFRVUkVfUkVHRVgsICckMScpKTtcblx0XHRjb25zdCBsb3dlckNhc2VOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0Ly8gSW5mZXIgY29ycmVjdCBjYXNpbmcgZm9yIERPTSBidWlsdC1pbiBldmVudHM6XG5cdFx0aWYgKGxvd2VyQ2FzZU5hbWUgaW4gZG9tIHx8IG5hbWUgPT0gJ29uRm9jdXNPdXQnIHx8IG5hbWUgPT0gJ29uRm9jdXNJbicpXG5cdFx0XHRuYW1lID0gbG93ZXJDYXNlTmFtZS5zbGljZSgyKTtcblx0XHRlbHNlIG5hbWUgPSBuYW1lLnNsaWNlKDIpO1xuXG5cdFx0aWYgKCFkb20uX2xpc3RlbmVycykgZG9tLl9saXN0ZW5lcnMgPSB7fTtcblx0XHRkb20uX2xpc3RlbmVyc1tuYW1lICsgdXNlQ2FwdHVyZV0gPSB2YWx1ZTtcblxuXHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0aWYgKCFvbGRWYWx1ZSkge1xuXHRcdFx0XHR2YWx1ZVtFVkVOVF9BVFRBQ0hFRF0gPSBldmVudENsb2NrO1xuXHRcdFx0XHRkb20uYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XHRuYW1lLFxuXHRcdFx0XHRcdHVzZUNhcHR1cmUgPyBldmVudFByb3h5Q2FwdHVyZSA6IGV2ZW50UHJveHksXG5cdFx0XHRcdFx0dXNlQ2FwdHVyZVxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFsdWVbRVZFTlRfQVRUQUNIRURdID0gb2xkVmFsdWVbRVZFTlRfQVRUQUNIRURdO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0bmFtZSxcblx0XHRcdFx0dXNlQ2FwdHVyZSA/IGV2ZW50UHJveHlDYXB0dXJlIDogZXZlbnRQcm94eSxcblx0XHRcdFx0dXNlQ2FwdHVyZVxuXHRcdFx0KTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0aWYgKG5hbWVzcGFjZSA9PSBTVkdfTkFNRVNQQUNFKSB7XG5cdFx0XHQvLyBOb3JtYWxpemUgaW5jb3JyZWN0IHByb3AgdXNhZ2UgZm9yIFNWRzpcblx0XHRcdC8vIC0geGxpbms6aHJlZiAvIHhsaW5rSHJlZiAtLT4gaHJlZiAoeGxpbms6aHJlZiB3YXMgcmVtb3ZlZCBmcm9tIFNWRyBhbmQgaXNuJ3QgbmVlZGVkKVxuXHRcdFx0Ly8gLSBjbGFzc05hbWUgLS0+IGNsYXNzXG5cdFx0XHRuYW1lID0gbmFtZS5yZXBsYWNlKC94bGluayhIfDpoKS8sICdoJykucmVwbGFjZSgvc05hbWUkLywgJ3MnKTtcblx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0bmFtZSAhPSAnd2lkdGgnICYmXG5cdFx0XHRuYW1lICE9ICdoZWlnaHQnICYmXG5cdFx0XHRuYW1lICE9ICdocmVmJyAmJlxuXHRcdFx0bmFtZSAhPSAnbGlzdCcgJiZcblx0XHRcdG5hbWUgIT0gJ2Zvcm0nICYmXG5cdFx0XHQvLyBEZWZhdWx0IHZhbHVlIGluIGJyb3dzZXJzIGlzIGAtMWAgYW5kIGFuIGVtcHR5IHN0cmluZyBpc1xuXHRcdFx0Ly8gY2FzdCB0byBgMGAgaW5zdGVhZFxuXHRcdFx0bmFtZSAhPSAndGFiSW5kZXgnICYmXG5cdFx0XHRuYW1lICE9ICdkb3dubG9hZCcgJiZcblx0XHRcdG5hbWUgIT0gJ3Jvd1NwYW4nICYmXG5cdFx0XHRuYW1lICE9ICdjb2xTcGFuJyAmJlxuXHRcdFx0bmFtZSAhPSAncm9sZScgJiZcblx0XHRcdG5hbWUgIT0gJ3BvcG92ZXInICYmXG5cdFx0XHRuYW1lIGluIGRvbVxuXHRcdCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0ZG9tW25hbWVdID0gdmFsdWUgPT0gTlVMTCA/ICcnIDogdmFsdWU7XG5cdFx0XHRcdC8vIGxhYmVsbGVkIGJyZWFrIGlzIDFiIHNtYWxsZXIgaGVyZSB0aGFuIGEgcmV0dXJuIHN0YXRlbWVudCAoc29ycnkpXG5cdFx0XHRcdGJyZWFrIG87XG5cdFx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdH1cblxuXHRcdC8vIGFyaWEtIGFuZCBkYXRhLSBhdHRyaWJ1dGVzIGhhdmUgbm8gYm9vbGVhbiByZXByZXNlbnRhdGlvbi5cblx0XHQvLyBBIGBmYWxzZWAgdmFsdWUgaXMgZGlmZmVyZW50IGZyb20gdGhlIGF0dHJpYnV0ZSBub3QgYmVpbmdcblx0XHQvLyBwcmVzZW50LCBzbyB3ZSBjYW4ndCByZW1vdmUgaXQuIEZvciBub24tYm9vbGVhbiBhcmlhXG5cdFx0Ly8gYXR0cmlidXRlcyB3ZSBjb3VsZCB0cmVhdCBmYWxzZSBhcyBhIHJlbW92YWwsIGJ1dCB0aGVcblx0XHQvLyBhbW91bnQgb2YgZXhjZXB0aW9ucyB3b3VsZCBjb3N0IHRvbyBtYW55IGJ5dGVzLiBPbiB0b3Agb2Zcblx0XHQvLyB0aGF0IG90aGVyIGZyYW1ld29ya3MgZ2VuZXJhbGx5IHN0cmluZ2lmeSBgZmFsc2VgLlxuXG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHQvLyBuZXZlciBzZXJpYWxpemUgZnVuY3Rpb25zIGFzIGF0dHJpYnV0ZSB2YWx1ZXNcblx0XHR9IGVsc2UgaWYgKHZhbHVlICE9IE5VTEwgJiYgKHZhbHVlICE9PSBmYWxzZSB8fCBuYW1lWzRdID09ICctJykpIHtcblx0XHRcdGRvbS5zZXRBdHRyaWJ1dGUobmFtZSwgbmFtZSA9PSAncG9wb3ZlcicgJiYgdmFsdWUgPT0gdHJ1ZSA/ICcnIDogdmFsdWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb20ucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIENyZWF0ZSBhbiBldmVudCBwcm94eSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gdXNlQ2FwdHVyZSBJcyB0aGUgZXZlbnQgaGFuZGxlciBmb3IgdGhlIGNhcHR1cmUgcGhhc2UuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjcmVhdGVFdmVudFByb3h5KHVzZUNhcHR1cmUpIHtcblx0LyoqXG5cdCAqIFByb3h5IGFuIGV2ZW50IHRvIGhvb2tlZCBldmVudCBoYW5kbGVyc1xuXHQgKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5QcmVhY3RFdmVudH0gZSBUaGUgZXZlbnQgb2JqZWN0IGZyb20gdGhlIGJyb3dzZXJcblx0ICogQHByaXZhdGVcblx0ICovXG5cdHJldHVybiBmdW5jdGlvbiAoZSkge1xuXHRcdGlmICh0aGlzLl9saXN0ZW5lcnMpIHtcblx0XHRcdGNvbnN0IGV2ZW50SGFuZGxlciA9IHRoaXMuX2xpc3RlbmVyc1tlLnR5cGUgKyB1c2VDYXB0dXJlXTtcblx0XHRcdGlmIChlW0VWRU5UX0RJU1BBVENIRURdID09IE5VTEwpIHtcblx0XHRcdFx0ZVtFVkVOVF9ESVNQQVRDSEVEXSA9IGV2ZW50Q2xvY2srKztcblxuXHRcdFx0XHQvLyBXaGVuIGBlW0VWRU5UX0RJU1BBVENIRURdYCBpcyBzbWFsbGVyIHRoYW4gdGhlIHRpbWUgd2hlbiB0aGUgdGFyZ2V0ZWQgZXZlbnRcblx0XHRcdFx0Ly8gaGFuZGxlciB3YXMgYXR0YWNoZWQgd2Uga25vdyB3ZSBoYXZlIGJ1YmJsZWQgdXAgdG8gYW4gZWxlbWVudCB0aGF0IHdhcyBhZGRlZFxuXHRcdFx0XHQvLyBkdXJpbmcgcGF0Y2hpbmcgdGhlIERPTS5cblx0XHRcdH0gZWxzZSBpZiAoZVtFVkVOVF9ESVNQQVRDSEVEXSA8IGV2ZW50SGFuZGxlcltFVkVOVF9BVFRBQ0hFRF0pIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGV2ZW50SGFuZGxlcihvcHRpb25zLmV2ZW50ID8gb3B0aW9ucy5ldmVudChlKSA6IGUpO1xuXHRcdH1cblx0fTtcbn1cblxuY29uc3QgZXZlbnRQcm94eSA9IGNyZWF0ZUV2ZW50UHJveHkoZmFsc2UpO1xuY29uc3QgZXZlbnRQcm94eUNhcHR1cmUgPSBjcmVhdGVFdmVudFByb3h5KHRydWUpO1xuIiwgImltcG9ydCB7IGVucXVldWVSZW5kZXIgfSBmcm9tICcuL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBOVUxMIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgbGV0IGkgPSAwO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29udGV4dChkZWZhdWx0VmFsdWUpIHtcblx0ZnVuY3Rpb24gQ29udGV4dChwcm9wcykge1xuXHRcdGlmICghdGhpcy5nZXRDaGlsZENvbnRleHQpIHtcblx0XHRcdC8qKiBAdHlwZSB7U2V0PGltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudD4gfCBudWxsfSAqL1xuXHRcdFx0bGV0IHN1YnMgPSBuZXcgU2V0KCk7XG5cdFx0XHRsZXQgY3R4ID0ge307XG5cdFx0XHRjdHhbQ29udGV4dC5faWRdID0gdGhpcztcblxuXHRcdFx0dGhpcy5nZXRDaGlsZENvbnRleHQgPSAoKSA9PiBjdHg7XG5cblx0XHRcdHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XG5cdFx0XHRcdHN1YnMgPSBOVUxMO1xuXHRcdFx0fTtcblxuXHRcdFx0dGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbiAoX3Byb3BzKSB7XG5cdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgZXZlblxuXHRcdFx0XHRpZiAodGhpcy5wcm9wcy52YWx1ZSAhPSBfcHJvcHMudmFsdWUpIHtcblx0XHRcdFx0XHRzdWJzLmZvckVhY2goYyA9PiB7XG5cdFx0XHRcdFx0XHRjLl9mb3JjZSA9IHRydWU7XG5cdFx0XHRcdFx0XHRlbnF1ZXVlUmVuZGVyKGMpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHR0aGlzLnN1YiA9IGMgPT4ge1xuXHRcdFx0XHRzdWJzLmFkZChjKTtcblx0XHRcdFx0bGV0IG9sZCA9IGMuY29tcG9uZW50V2lsbFVubW91bnQ7XG5cdFx0XHRcdGMuY29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHN1YnMpIHtcblx0XHRcdFx0XHRcdHN1YnMuZGVsZXRlKGMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAob2xkKSBvbGQuY2FsbChjKTtcblx0XHRcdFx0fTtcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHByb3BzLmNoaWxkcmVuO1xuXHR9XG5cblx0Q29udGV4dC5faWQgPSAnX19jQycgKyBpKys7XG5cdENvbnRleHQuX2RlZmF1bHRWYWx1ZSA9IGRlZmF1bHRWYWx1ZTtcblxuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkZ1bmN0aW9uQ29tcG9uZW50fSAqL1xuXHRDb250ZXh0LkNvbnN1bWVyID0gKHByb3BzLCBjb250ZXh0VmFsdWUpID0+IHtcblx0XHRyZXR1cm4gcHJvcHMuY2hpbGRyZW4oY29udGV4dFZhbHVlKTtcblx0fTtcblxuXHQvLyB3ZSBjb3VsZCBhbHNvIGdldCByaWQgb2YgX2NvbnRleHRSZWYgZW50aXJlbHlcblx0Q29udGV4dC5Qcm92aWRlciA9XG5cdFx0Q29udGV4dC5fY29udGV4dFJlZiA9XG5cdFx0Q29udGV4dC5Db25zdW1lci5jb250ZXh0VHlwZSA9XG5cdFx0XHRDb250ZXh0O1xuXG5cdHJldHVybiBDb250ZXh0O1xufVxuIiwgImltcG9ydCB7IGRpZmYsIHVubW91bnQsIGFwcGx5UmVmIH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgeyBjcmVhdGVWTm9kZSwgRnJhZ21lbnQgfSBmcm9tICcuLi9jcmVhdGUtZWxlbWVudCc7XG5pbXBvcnQge1xuXHRFTVBUWV9PQkosXG5cdEVNUFRZX0FSUixcblx0SU5TRVJUX1ZOT0RFLFxuXHRNQVRDSEVELFxuXHRVTkRFRklORUQsXG5cdE5VTExcbn0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCB7IGdldERvbVNpYmxpbmcgfSBmcm9tICcuLi9jb21wb25lbnQnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2ludGVybmFsJykuQ29tcG9uZW50Q2hpbGRyZW59IENvbXBvbmVudENoaWxkcmVuXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gQ29tcG9uZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IFByZWFjdEVsZW1lbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IFZOb2RlXG4gKi9cblxuLyoqXG4gKiBEaWZmIHRoZSBjaGlsZHJlbiBvZiBhIHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtQcmVhY3RFbGVtZW50fSBwYXJlbnREb20gVGhlIERPTSBlbGVtZW50IHdob3NlIGNoaWxkcmVuIGFyZSBiZWluZ1xuICogZGlmZmVkXG4gKiBAcGFyYW0ge0NvbXBvbmVudENoaWxkcmVuW119IHJlbmRlclJlc3VsdFxuICogQHBhcmFtIHtWTm9kZX0gbmV3UGFyZW50Vk5vZGUgVGhlIG5ldyB2aXJ0dWFsIG5vZGUgd2hvc2UgY2hpbGRyZW4gc2hvdWxkIGJlXG4gKiBkaWZmJ2VkIGFnYWluc3Qgb2xkUGFyZW50Vk5vZGVcbiAqIEBwYXJhbSB7Vk5vZGV9IG9sZFBhcmVudFZOb2RlIFRoZSBvbGQgdmlydHVhbCBub2RlIHdob3NlIGNoaWxkcmVuIHNob3VsZCBiZVxuICogZGlmZidlZCBhZ2FpbnN0IG5ld1BhcmVudFZOb2RlXG4gKiBAcGFyYW0ge29iamVjdH0gZ2xvYmFsQ29udGV4dCBUaGUgY3VycmVudCBjb250ZXh0IG9iamVjdCAtIG1vZGlmaWVkIGJ5XG4gKiBnZXRDaGlsZENvbnRleHRcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lc3BhY2UgQ3VycmVudCBuYW1lc3BhY2Ugb2YgdGhlIERPTSBub2RlIChIVE1MLCBTVkcsIG9yIE1hdGhNTClcbiAqIEBwYXJhbSB7QXJyYXk8UHJlYWN0RWxlbWVudD59IGV4Y2Vzc0RvbUNoaWxkcmVuXG4gKiBAcGFyYW0ge0FycmF5PENvbXBvbmVudD59IGNvbW1pdFF1ZXVlIExpc3Qgb2YgY29tcG9uZW50cyB3aGljaCBoYXZlIGNhbGxiYWNrc1xuICogdG8gaW52b2tlIGluIGNvbW1pdFJvb3RcbiAqIEBwYXJhbSB7UHJlYWN0RWxlbWVudH0gb2xkRG9tIFRoZSBjdXJyZW50IGF0dGFjaGVkIERPTSBlbGVtZW50IGFueSBuZXcgZG9tXG4gKiBlbGVtZW50cyBzaG91bGQgYmUgcGxhY2VkIGFyb3VuZC4gTGlrZWx5IGBudWxsYCBvbiBmaXJzdCByZW5kZXIgKGV4Y2VwdCB3aGVuXG4gKiBoeWRyYXRpbmcpLiBDYW4gYmUgYSBzaWJsaW5nIERPTSBlbGVtZW50IHdoZW4gZGlmZmluZyBGcmFnbWVudHMgdGhhdCBoYXZlXG4gKiBzaWJsaW5ncy4gSW4gbW9zdCBjYXNlcywgaXQgc3RhcnRzIG91dCBhcyBgb2xkQ2hpbGRyZW5bMF0uX2RvbWAuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzSHlkcmF0aW5nIFdoZXRoZXIgb3Igbm90IHdlIGFyZSBpbiBoeWRyYXRpb25cbiAqIEBwYXJhbSB7YW55W119IHJlZlF1ZXVlIGFuIGFycmF5IG9mIGVsZW1lbnRzIG5lZWRlZCB0byBpbnZva2UgcmVmc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZkNoaWxkcmVuKFxuXHRwYXJlbnREb20sXG5cdHJlbmRlclJlc3VsdCxcblx0bmV3UGFyZW50Vk5vZGUsXG5cdG9sZFBhcmVudFZOb2RlLFxuXHRnbG9iYWxDb250ZXh0LFxuXHRuYW1lc3BhY2UsXG5cdGV4Y2Vzc0RvbUNoaWxkcmVuLFxuXHRjb21taXRRdWV1ZSxcblx0b2xkRG9tLFxuXHRpc0h5ZHJhdGluZyxcblx0cmVmUXVldWVcbikge1xuXHRsZXQgaSxcblx0XHQvKiogQHR5cGUge1ZOb2RlfSAqL1xuXHRcdG9sZFZOb2RlLFxuXHRcdC8qKiBAdHlwZSB7Vk5vZGV9ICovXG5cdFx0Y2hpbGRWTm9kZSxcblx0XHQvKiogQHR5cGUge1ByZWFjdEVsZW1lbnR9ICovXG5cdFx0bmV3RG9tLFxuXHRcdC8qKiBAdHlwZSB7UHJlYWN0RWxlbWVudH0gKi9cblx0XHRmaXJzdENoaWxkRG9tO1xuXG5cdC8vIFRoaXMgaXMgYSBjb21wcmVzc2lvbiBvZiBvbGRQYXJlbnRWTm9kZSE9bnVsbCAmJiBvbGRQYXJlbnRWTm9kZSAhPSBFTVBUWV9PQkogJiYgb2xkUGFyZW50Vk5vZGUuX2NoaWxkcmVuIHx8IEVNUFRZX0FSUlxuXHQvLyBhcyBFTVBUWV9PQkouX2NoaWxkcmVuIHNob3VsZCBiZSBgdW5kZWZpbmVkYC5cblx0LyoqIEB0eXBlIHtWTm9kZVtdfSAqL1xuXHRsZXQgb2xkQ2hpbGRyZW4gPSAob2xkUGFyZW50Vk5vZGUgJiYgb2xkUGFyZW50Vk5vZGUuX2NoaWxkcmVuKSB8fCBFTVBUWV9BUlI7XG5cblx0bGV0IG5ld0NoaWxkcmVuTGVuZ3RoID0gcmVuZGVyUmVzdWx0Lmxlbmd0aDtcblxuXHRvbGREb20gPSBjb25zdHJ1Y3ROZXdDaGlsZHJlbkFycmF5KFxuXHRcdG5ld1BhcmVudFZOb2RlLFxuXHRcdHJlbmRlclJlc3VsdCxcblx0XHRvbGRDaGlsZHJlbixcblx0XHRvbGREb20sXG5cdFx0bmV3Q2hpbGRyZW5MZW5ndGhcblx0KTtcblxuXHRmb3IgKGkgPSAwOyBpIDwgbmV3Q2hpbGRyZW5MZW5ndGg7IGkrKykge1xuXHRcdGNoaWxkVk5vZGUgPSBuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV07XG5cdFx0aWYgKGNoaWxkVk5vZGUgPT0gTlVMTCkgY29udGludWU7XG5cblx0XHQvLyBBdCB0aGlzIHBvaW50LCBjb25zdHJ1Y3ROZXdDaGlsZHJlbkFycmF5IGhhcyBhc3NpZ25lZCBfaW5kZXggdG8gYmUgdGhlXG5cdFx0Ly8gbWF0Y2hpbmdJbmRleCBmb3IgdGhpcyBWTm9kZSdzIG9sZFZOb2RlIChvciAtMSBpZiB0aGVyZSBpcyBubyBvbGRWTm9kZSkuXG5cdFx0b2xkVk5vZGUgPVxuXHRcdFx0KGNoaWxkVk5vZGUuX2luZGV4ICE9IC0xICYmIG9sZENoaWxkcmVuW2NoaWxkVk5vZGUuX2luZGV4XSkgfHwgRU1QVFlfT0JKO1xuXG5cdFx0Ly8gVXBkYXRlIGNoaWxkVk5vZGUuX2luZGV4IHRvIGl0cyBmaW5hbCBpbmRleFxuXHRcdGNoaWxkVk5vZGUuX2luZGV4ID0gaTtcblxuXHRcdC8vIE1vcnBoIHRoZSBvbGQgZWxlbWVudCBpbnRvIHRoZSBuZXcgb25lLCBidXQgZG9uJ3QgYXBwZW5kIGl0IHRvIHRoZSBkb20geWV0XG5cdFx0bGV0IHJlc3VsdCA9IGRpZmYoXG5cdFx0XHRwYXJlbnREb20sXG5cdFx0XHRjaGlsZFZOb2RlLFxuXHRcdFx0b2xkVk5vZGUsXG5cdFx0XHRnbG9iYWxDb250ZXh0LFxuXHRcdFx0bmFtZXNwYWNlLFxuXHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdFx0XHRjb21taXRRdWV1ZSxcblx0XHRcdG9sZERvbSxcblx0XHRcdGlzSHlkcmF0aW5nLFxuXHRcdFx0cmVmUXVldWVcblx0XHQpO1xuXG5cdFx0Ly8gQWRqdXN0IERPTSBub2Rlc1xuXHRcdG5ld0RvbSA9IGNoaWxkVk5vZGUuX2RvbTtcblx0XHRpZiAoY2hpbGRWTm9kZS5yZWYgJiYgb2xkVk5vZGUucmVmICE9IGNoaWxkVk5vZGUucmVmKSB7XG5cdFx0XHRpZiAob2xkVk5vZGUucmVmKSB7XG5cdFx0XHRcdGFwcGx5UmVmKG9sZFZOb2RlLnJlZiwgTlVMTCwgY2hpbGRWTm9kZSk7XG5cdFx0XHR9XG5cdFx0XHRyZWZRdWV1ZS5wdXNoKFxuXHRcdFx0XHRjaGlsZFZOb2RlLnJlZixcblx0XHRcdFx0Y2hpbGRWTm9kZS5fY29tcG9uZW50IHx8IG5ld0RvbSxcblx0XHRcdFx0Y2hpbGRWTm9kZVxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRpZiAoZmlyc3RDaGlsZERvbSA9PSBOVUxMICYmIG5ld0RvbSAhPSBOVUxMKSB7XG5cdFx0XHRmaXJzdENoaWxkRG9tID0gbmV3RG9tO1xuXHRcdH1cblxuXHRcdGxldCBzaG91bGRQbGFjZSA9ICEhKGNoaWxkVk5vZGUuX2ZsYWdzICYgSU5TRVJUX1ZOT0RFKTtcblx0XHRpZiAoc2hvdWxkUGxhY2UgfHwgb2xkVk5vZGUuX2NoaWxkcmVuID09PSBjaGlsZFZOb2RlLl9jaGlsZHJlbikge1xuXHRcdFx0b2xkRG9tID0gaW5zZXJ0KGNoaWxkVk5vZGUsIG9sZERvbSwgcGFyZW50RG9tLCBzaG91bGRQbGFjZSk7XG5cblx0XHRcdC8vIFdoZW4gYSBtYXRjaGVkIFZOb2RlIGlzIHBoeXNpY2FsbHkgbW92ZWQgdmlhIElOU0VSVF9WTk9ERSwgaXRzIG9sZFxuXHRcdFx0Ly8gX2RvbSBwb2ludGVyIGJlY29tZXMgYSBzdGFsZSBwb3NpdGlvbmFsIHJlZmVyZW5jZS4gQ2xlYXIgaXQgc28gdGhhdFxuXHRcdFx0Ly8gZ2V0RG9tU2libGluZyAoY2FsbGVkIGZyb20gbmVzdGVkIGRpZmZzKSB3b24ndCByZXR1cm4gdGhpcyBzdGFsZVxuXHRcdFx0Ly8gcmVmZXJlbmNlIGFuZCBtaXMtcGxhY2Ugc3Vic2VxdWVudCBET00gbm9kZXMuIFNlZSAjNTA2NS5cblx0XHRcdGlmIChzaG91bGRQbGFjZSAmJiBvbGRWTm9kZS5fZG9tKSB7XG5cdFx0XHRcdG9sZFZOb2RlLl9kb20gPSBOVUxMO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAodHlwZW9mIGNoaWxkVk5vZGUudHlwZSA9PSAnZnVuY3Rpb24nICYmIHJlc3VsdCAhPT0gVU5ERUZJTkVEKSB7XG5cdFx0XHRvbGREb20gPSByZXN1bHQ7XG5cdFx0fSBlbHNlIGlmIChuZXdEb20pIHtcblx0XHRcdG9sZERvbSA9IG5ld0RvbS5uZXh0U2libGluZztcblx0XHR9XG5cblx0XHQvLyBVbnNldCBkaWZmaW5nIGZsYWdzXG5cdFx0Y2hpbGRWTm9kZS5fZmxhZ3MgJj0gfihJTlNFUlRfVk5PREUgfCBNQVRDSEVEKTtcblx0fVxuXG5cdG5ld1BhcmVudFZOb2RlLl9kb20gPSBmaXJzdENoaWxkRG9tO1xuXG5cdHJldHVybiBvbGREb207XG59XG5cbi8qKlxuICogQHBhcmFtIHtWTm9kZX0gbmV3UGFyZW50Vk5vZGVcbiAqIEBwYXJhbSB7Q29tcG9uZW50Q2hpbGRyZW5bXX0gcmVuZGVyUmVzdWx0XG4gKiBAcGFyYW0ge1ZOb2RlW119IG9sZENoaWxkcmVuXG4gKi9cbmZ1bmN0aW9uIGNvbnN0cnVjdE5ld0NoaWxkcmVuQXJyYXkoXG5cdG5ld1BhcmVudFZOb2RlLFxuXHRyZW5kZXJSZXN1bHQsXG5cdG9sZENoaWxkcmVuLFxuXHRvbGREb20sXG5cdG5ld0NoaWxkcmVuTGVuZ3RoXG4pIHtcblx0LyoqIEB0eXBlIHtudW1iZXJ9ICovXG5cdGxldCBpO1xuXHQvKiogQHR5cGUge1ZOb2RlfSAqL1xuXHRsZXQgY2hpbGRWTm9kZTtcblx0LyoqIEB0eXBlIHtWTm9kZX0gKi9cblx0bGV0IG9sZFZOb2RlO1xuXG5cdGxldCBvbGRDaGlsZHJlbkxlbmd0aCA9IG9sZENoaWxkcmVuLmxlbmd0aCxcblx0XHRyZW1haW5pbmdPbGRDaGlsZHJlbiA9IG9sZENoaWxkcmVuTGVuZ3RoO1xuXG5cdGxldCBza2V3ID0gMDtcblxuXHRuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW4gPSBuZXcgQXJyYXkobmV3Q2hpbGRyZW5MZW5ndGgpO1xuXHRmb3IgKGkgPSAwOyBpIDwgbmV3Q2hpbGRyZW5MZW5ndGg7IGkrKykge1xuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgV2UgYXJlIHJldXNpbmcgdGhlIGNoaWxkVk5vZGUgdmFyaWFibGUgdG8gaG9sZCBib3RoIHRoZVxuXHRcdC8vIHByZSBhbmQgcG9zdCBub3JtYWxpemVkIGNoaWxkVk5vZGVcblx0XHRjaGlsZFZOb2RlID0gcmVuZGVyUmVzdWx0W2ldO1xuXG5cdFx0aWYgKFxuXHRcdFx0Y2hpbGRWTm9kZSA9PSBOVUxMIHx8XG5cdFx0XHR0eXBlb2YgY2hpbGRWTm9kZSA9PSAnYm9vbGVhbicgfHxcblx0XHRcdHR5cGVvZiBjaGlsZFZOb2RlID09ICdmdW5jdGlvbidcblx0XHQpIHtcblx0XHRcdG5ld1BhcmVudFZOb2RlLl9jaGlsZHJlbltpXSA9IE5VTEw7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Ly8gSWYgdGhpcyBuZXdWTm9kZSBpcyBiZWluZyByZXVzZWQgKGUuZy4gPGRpdj57cmV1c2V9e3JldXNlfTwvZGl2PikgaW4gdGhlIHNhbWUgZGlmZixcblx0XHQvLyBvciB3ZSBhcmUgcmVuZGVyaW5nIGEgY29tcG9uZW50IChlLmcuIHNldFN0YXRlKSBjb3B5IHRoZSBvbGRWTm9kZXMgc28gaXQgY2FuIGhhdmVcblx0XHQvLyBpdCdzIG93biBET00gJiBldGMuIHBvaW50ZXJzXG5cdFx0ZWxzZSBpZiAoXG5cdFx0XHR0eXBlb2YgY2hpbGRWTm9kZSA9PSAnc3RyaW5nJyB8fFxuXHRcdFx0dHlwZW9mIGNoaWxkVk5vZGUgPT0gJ251bWJlcicgfHxcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB2YWxpZC10eXBlb2Zcblx0XHRcdHR5cGVvZiBjaGlsZFZOb2RlID09ICdiaWdpbnQnIHx8XG5cdFx0XHRjaGlsZFZOb2RlLmNvbnN0cnVjdG9yID09IFN0cmluZ1xuXHRcdCkge1xuXHRcdFx0Y2hpbGRWTm9kZSA9IG5ld1BhcmVudFZOb2RlLl9jaGlsZHJlbltpXSA9IGNyZWF0ZVZOb2RlKFxuXHRcdFx0XHROVUxMLFxuXHRcdFx0XHRjaGlsZFZOb2RlLFxuXHRcdFx0XHROVUxMLFxuXHRcdFx0XHROVUxMLFxuXHRcdFx0XHROVUxMXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSBpZiAoaXNBcnJheShjaGlsZFZOb2RlKSkge1xuXHRcdFx0Y2hpbGRWTm9kZSA9IG5ld1BhcmVudFZOb2RlLl9jaGlsZHJlbltpXSA9IGNyZWF0ZVZOb2RlKFxuXHRcdFx0XHRGcmFnbWVudCxcblx0XHRcdFx0eyBjaGlsZHJlbjogY2hpbGRWTm9kZSB9LFxuXHRcdFx0XHROVUxMLFxuXHRcdFx0XHROVUxMLFxuXHRcdFx0XHROVUxMXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSBpZiAoY2hpbGRWTm9kZS5jb25zdHJ1Y3RvciA9PT0gVU5ERUZJTkVEICYmIGNoaWxkVk5vZGUuX2RlcHRoID4gMCkge1xuXHRcdFx0Ly8gVk5vZGUgaXMgYWxyZWFkeSBpbiB1c2UsIGNsb25lIGl0LiBUaGlzIGNhbiBoYXBwZW4gaW4gdGhlIGZvbGxvd2luZ1xuXHRcdFx0Ly8gc2NlbmFyaW86XG5cdFx0XHQvLyAgIGNvbnN0IHJldXNlID0gPGRpdiAvPlxuXHRcdFx0Ly8gICA8ZGl2PntyZXVzZX08c3BhbiAvPntyZXVzZX08L2Rpdj5cblx0XHRcdGNoaWxkVk5vZGUgPSBuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV0gPSBjcmVhdGVWTm9kZShcblx0XHRcdFx0Y2hpbGRWTm9kZS50eXBlLFxuXHRcdFx0XHRjaGlsZFZOb2RlLnByb3BzLFxuXHRcdFx0XHRjaGlsZFZOb2RlLmtleSxcblx0XHRcdFx0Y2hpbGRWTm9kZS5yZWYgPyBjaGlsZFZOb2RlLnJlZiA6IE5VTEwsXG5cdFx0XHRcdGNoaWxkVk5vZGUuX29yaWdpbmFsXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV0gPSBjaGlsZFZOb2RlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHNrZXdlZEluZGV4ID0gaSArIHNrZXc7XG5cdFx0Y2hpbGRWTm9kZS5fcGFyZW50ID0gbmV3UGFyZW50Vk5vZGU7XG5cdFx0Y2hpbGRWTm9kZS5fZGVwdGggPSBuZXdQYXJlbnRWTm9kZS5fZGVwdGggKyAxO1xuXG5cdFx0Ly8gVGVtcG9yYXJpbHkgc3RvcmUgdGhlIG1hdGNoaW5nSW5kZXggb24gdGhlIF9pbmRleCBwcm9wZXJ0eSBzbyB3ZSBjYW4gcHVsbFxuXHRcdC8vIG91dCB0aGUgb2xkVk5vZGUgaW4gZGlmZkNoaWxkcmVuLiBXZSdsbCBvdmVycmlkZSB0aGlzIHRvIHRoZSBWTm9kZSdzXG5cdFx0Ly8gZmluYWwgaW5kZXggYWZ0ZXIgdXNpbmcgdGhpcyBwcm9wZXJ0eSB0byBnZXQgdGhlIG9sZFZOb2RlXG5cdFx0Y29uc3QgbWF0Y2hpbmdJbmRleCA9IChjaGlsZFZOb2RlLl9pbmRleCA9IGZpbmRNYXRjaGluZ0luZGV4KFxuXHRcdFx0Y2hpbGRWTm9kZSxcblx0XHRcdG9sZENoaWxkcmVuLFxuXHRcdFx0c2tld2VkSW5kZXgsXG5cdFx0XHRyZW1haW5pbmdPbGRDaGlsZHJlblxuXHRcdCkpO1xuXG5cdFx0b2xkVk5vZGUgPSBOVUxMO1xuXHRcdGlmIChtYXRjaGluZ0luZGV4ICE9IC0xKSB7XG5cdFx0XHRvbGRWTm9kZSA9IG9sZENoaWxkcmVuW21hdGNoaW5nSW5kZXhdO1xuXHRcdFx0cmVtYWluaW5nT2xkQ2hpbGRyZW4tLTtcblx0XHRcdGlmIChvbGRWTm9kZSkge1xuXHRcdFx0XHRvbGRWTm9kZS5fZmxhZ3MgfD0gTUFUQ0hFRDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBIZXJlLCB3ZSBkZWZpbmUgaXNNb3VudGluZyBmb3IgdGhlIHB1cnBvc2VzIG9mIHRoZSBza2V3IGRpZmZpbmdcblx0XHQvLyBhbGdvcml0aG0uIE5vZGVzIHRoYXQgYXJlIHVuc3VzcGVuZGluZyBhcmUgY29uc2lkZXJlZCBtb3VudGluZyBhbmQgd2UgZGV0ZWN0XG5cdFx0Ly8gdGhpcyBieSBjaGVja2luZyBpZiBvbGRWTm9kZS5fb3JpZ2luYWwgPT0gbnVsbFxuXHRcdGNvbnN0IGlzTW91bnRpbmcgPSBvbGRWTm9kZSA9PSBOVUxMIHx8IG9sZFZOb2RlLl9vcmlnaW5hbCA9PSBOVUxMO1xuXG5cdFx0aWYgKGlzTW91bnRpbmcpIHtcblx0XHRcdGlmIChtYXRjaGluZ0luZGV4ID09IC0xKSB7XG5cdFx0XHRcdC8vIFdoZW4gdGhlIGFycmF5IG9mIGNoaWxkcmVuIGlzIGdyb3dpbmcgd2UgbmVlZCB0byBkZWNyZWFzZSB0aGUgc2tld1xuXHRcdFx0XHQvLyBhcyB3ZSBhcmUgYWRkaW5nIGEgbmV3IGVsZW1lbnQgdG8gdGhlIGFycmF5LlxuXHRcdFx0XHQvLyBFeGFtcGxlOlxuXHRcdFx0XHQvLyBbMSwgMiwgM10gLS0+IFswLCAxLCAyLCAzXVxuXHRcdFx0XHQvLyBvbGRDaGlsZHJlbiAgIG5ld0NoaWxkcmVuXG5cdFx0XHRcdC8vXG5cdFx0XHRcdC8vIFRoZSBuZXcgZWxlbWVudCBpcyBhdCBpbmRleCAwLCBzbyBvdXIgc2tldyBpcyAwLFxuXHRcdFx0XHQvLyB3ZSBuZWVkIHRvIGRlY3JlYXNlIHRoZSBza2V3IGFzIHdlIGFyZSBhZGRpbmcgYSBuZXcgZWxlbWVudC5cblx0XHRcdFx0Ly8gVGhlIGRlY3JlYXNlIHdpbGwgY2F1c2UgdXMgdG8gY29tcGFyZSB0aGUgZWxlbWVudCBhdCBwb3NpdGlvbiAxXG5cdFx0XHRcdC8vIHdpdGggdmFsdWUgMSB3aXRoIHRoZSBlbGVtZW50IGF0IHBvc2l0aW9uIDAgd2l0aCB2YWx1ZSAwLlxuXHRcdFx0XHQvL1xuXHRcdFx0XHQvLyBBIGxpbmVhciBjb25jZXB0IGlzIGFwcGxpZWQgd2hlbiB0aGUgYXJyYXkgaXMgc2hyaW5raW5nLFxuXHRcdFx0XHQvLyBpZiB0aGUgbGVuZ3RoIGlzIHVuY2hhbmdlZCB3ZSBjYW4gYXNzdW1lIHRoYXQgbm8gc2tld1xuXHRcdFx0XHQvLyBjaGFuZ2VzIGFyZSBuZWVkZWQuXG5cdFx0XHRcdGlmIChuZXdDaGlsZHJlbkxlbmd0aCA+IG9sZENoaWxkcmVuTGVuZ3RoKSB7XG5cdFx0XHRcdFx0c2tldy0tO1xuXHRcdFx0XHR9IGVsc2UgaWYgKG5ld0NoaWxkcmVuTGVuZ3RoIDwgb2xkQ2hpbGRyZW5MZW5ndGgpIHtcblx0XHRcdFx0XHRza2V3Kys7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgd2UgYXJlIG1vdW50aW5nIGEgRE9NIFZOb2RlLCBtYXJrIGl0IGZvciBpbnNlcnRpb25cblx0XHRcdGlmICh0eXBlb2YgY2hpbGRWTm9kZS50eXBlICE9ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Y2hpbGRWTm9kZS5fZmxhZ3MgfD0gSU5TRVJUX1ZOT0RFO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAobWF0Y2hpbmdJbmRleCAhPSBza2V3ZWRJbmRleCkge1xuXHRcdFx0Ly8gV2hlbiB3ZSBtb3ZlIGVsZW1lbnRzIGFyb3VuZCBpLmUuIFswLCAxLCAyXSAtLT4gWzEsIDAsIDJdXG5cdFx0XHQvLyAtLT4gd2UgZGlmZiAxLCB3ZSBmaW5kIGl0IGF0IHBvc2l0aW9uIDEgd2hpbGUgb3VyIHNrZXdlZCBpbmRleCBpcyAwIGFuZCBvdXIgc2tldyBpcyAwXG5cdFx0XHQvLyAgICAgd2Ugc2V0IHRoZSBza2V3IHRvIDEgYXMgd2UgZm91bmQgYW4gb2Zmc2V0LlxuXHRcdFx0Ly8gLS0+IHdlIGRpZmYgMCwgd2UgZmluZCBpdCBhdCBwb3NpdGlvbiAwIHdoaWxlIG91ciBza2V3ZWQgaW5kZXggaXMgYXQgMiBhbmQgb3VyIHNrZXcgaXMgMVxuXHRcdFx0Ly8gICAgIHRoaXMgbWFrZXMgdXMgaW5jcmVhc2UgdGhlIHNrZXcgYWdhaW4uXG5cdFx0XHQvLyAtLT4gd2UgZGlmZiAyLCB3ZSBmaW5kIGl0IGF0IHBvc2l0aW9uIDIgd2hpbGUgb3VyIHNrZXdlZCBpbmRleCBpcyBhdCA0IGFuZCBvdXIgc2tldyBpcyAyXG5cdFx0XHQvL1xuXHRcdFx0Ly8gdGhpcyBiZWNvbWVzIGFuIG9wdGltaXphdGlvbiBxdWVzdGlvbiB3aGVyZSBjdXJyZW50bHkgd2Ugc2VlIGEgMSBlbGVtZW50IG9mZnNldCBhcyBhbiBpbnNlcnRpb25cblx0XHRcdC8vIG9yIGRlbGV0aW9uIGkuZS4gd2Ugb3B0aW1pemUgZm9yIFswLCAxLCAyXSAtLT4gWzksIDAsIDEsIDJdXG5cdFx0XHQvLyB3aGlsZSBhIG1vcmUgdGhhbiAxIG9mZnNldCB3ZSBzZWUgYXMgYSBzd2FwLlxuXHRcdFx0Ly8gV2UgY291bGQgcHJvYmFibHkgYnVpbGQgaGV1cmlzdGljcyBmb3IgaGF2aW5nIGFuIG9wdGltaXplZCBjb3Vyc2Ugb2YgYWN0aW9uIGhlcmUgYXMgd2VsbCwgYnV0XG5cdFx0XHQvLyBtaWdodCBnbyBhdCB0aGUgY29zdCBvZiBzb21lIGJ5dGVzLlxuXHRcdFx0Ly9cblx0XHRcdC8vIElmIHdlIHdhbnRlZCB0byBvcHRpbWl6ZSBmb3IgaS5lLiBvbmx5IHN3YXBzIHdlJ2QganVzdCBkbyB0aGUgbGFzdCB0d28gY29kZS1icmFuY2hlcyBhbmQgaGF2ZVxuXHRcdFx0Ly8gb25seSB0aGUgZmlyc3QgaXRlbSBiZSBhIHJlLXNjb3V0aW5nIGFuZCBhbGwgdGhlIG90aGVycyBmYWxsIGluIHRoZWlyIHNrZXdlZCBjb3VudGVyLXBhcnQuXG5cdFx0XHQvLyBXZSBjb3VsZCBhbHNvIGZ1cnRoZXIgb3B0aW1pemUgZm9yIHN3YXBzXG5cdFx0XHRpZiAobWF0Y2hpbmdJbmRleCA9PSBza2V3ZWRJbmRleCAtIDEpIHtcblx0XHRcdFx0c2tldy0tO1xuXHRcdFx0fSBlbHNlIGlmIChtYXRjaGluZ0luZGV4ID09IHNrZXdlZEluZGV4ICsgMSkge1xuXHRcdFx0XHRza2V3Kys7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAobWF0Y2hpbmdJbmRleCA+IHNrZXdlZEluZGV4KSB7XG5cdFx0XHRcdFx0c2tldy0tO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHNrZXcrKztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIE1vdmUgdGhpcyBWTm9kZSdzIERPTSBpZiB0aGUgb3JpZ2luYWwgaW5kZXggKG1hdGNoaW5nSW5kZXgpIGRvZXNuJ3Rcblx0XHRcdFx0Ly8gbWF0Y2ggdGhlIG5ldyBza2V3IGluZGV4IChpICsgbmV3IHNrZXcpXG5cdFx0XHRcdC8vIEluIHRoZSBmb3JtZXIgdHdvIGJyYW5jaGVzIHdlIGtub3cgdGhhdCBpdCBtYXRjaGVzIGFmdGVyIHNrZXdpbmdcblx0XHRcdFx0Y2hpbGRWTm9kZS5fZmxhZ3MgfD0gSU5TRVJUX1ZOT0RFO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIFJlbW92ZSByZW1haW5pbmcgb2xkQ2hpbGRyZW4gaWYgdGhlcmUgYXJlIGFueS4gTG9vcCBmb3J3YXJkcyBzbyB0aGF0IGFzIHdlXG5cdC8vIHVubW91bnQgRE9NIGZyb20gdGhlIGJlZ2lubmluZyBvZiB0aGUgb2xkQ2hpbGRyZW4sIHdlIGNhbiBhZGp1c3Qgb2xkRG9tIHRvXG5cdC8vIHBvaW50IHRvIHRoZSBuZXh0IGNoaWxkLCB3aGljaCBuZWVkcyB0byBiZSB0aGUgZmlyc3QgRE9NIG5vZGUgdGhhdCB3b24ndCBiZVxuXHQvLyB1bm1vdW50ZWQuXG5cdGlmIChyZW1haW5pbmdPbGRDaGlsZHJlbikge1xuXHRcdGZvciAoaSA9IDA7IGkgPCBvbGRDaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG5cdFx0XHRvbGRWTm9kZSA9IG9sZENoaWxkcmVuW2ldO1xuXHRcdFx0aWYgKG9sZFZOb2RlICE9IE5VTEwgJiYgKG9sZFZOb2RlLl9mbGFncyAmIE1BVENIRUQpID09IDApIHtcblx0XHRcdFx0aWYgKG9sZFZOb2RlLl9kb20gPT0gb2xkRG9tKSB7XG5cdFx0XHRcdFx0b2xkRG9tID0gZ2V0RG9tU2libGluZyhvbGRWTm9kZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR1bm1vdW50KG9sZFZOb2RlLCBvbGRWTm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIG9sZERvbTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1ZOb2RlfSBwYXJlbnRWTm9kZVxuICogQHBhcmFtIHtQcmVhY3RFbGVtZW50fSBvbGREb21cbiAqIEBwYXJhbSB7UHJlYWN0RWxlbWVudH0gcGFyZW50RG9tXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHNob3VsZFBsYWNlXG4gKiBAcmV0dXJucyB7UHJlYWN0RWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gaW5zZXJ0KHBhcmVudFZOb2RlLCBvbGREb20sIHBhcmVudERvbSwgc2hvdWxkUGxhY2UpIHtcblx0Ly8gTm90ZTogVk5vZGVzIGluIG5lc3RlZCBzdXNwZW5kZWQgdHJlZXMgbWF5IGJlIG1pc3NpbmcgX2NoaWxkcmVuLlxuXG5cdGlmICh0eXBlb2YgcGFyZW50Vk5vZGUudHlwZSA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0bGV0IGNoaWxkcmVuID0gcGFyZW50Vk5vZGUuX2NoaWxkcmVuO1xuXHRcdGZvciAobGV0IGkgPSAwOyBjaGlsZHJlbiAmJiBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChjaGlsZHJlbltpXSkge1xuXHRcdFx0XHQvLyBJZiB3ZSBlbnRlciB0aGlzIGNvZGUgcGF0aCBvbiBzQ1UgYmFpbG91dCwgd2hlcmUgd2UgY29weVxuXHRcdFx0XHQvLyBvbGRWTm9kZS5fY2hpbGRyZW4gdG8gbmV3Vk5vZGUuX2NoaWxkcmVuLCB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgb2xkXG5cdFx0XHRcdC8vIGNoaWxkcmVuJ3MgX3BhcmVudCBwb2ludGVyIHRvIHBvaW50IHRvIHRoZSBuZXdWTm9kZSAocGFyZW50Vk5vZGVcblx0XHRcdFx0Ly8gaGVyZSkuXG5cdFx0XHRcdGNoaWxkcmVuW2ldLl9wYXJlbnQgPSBwYXJlbnRWTm9kZTtcblx0XHRcdFx0b2xkRG9tID0gaW5zZXJ0KGNoaWxkcmVuW2ldLCBvbGREb20sIHBhcmVudERvbSwgc2hvdWxkUGxhY2UpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBvbGREb207XG5cdH0gZWxzZSBpZiAocGFyZW50Vk5vZGUuX2RvbSAhPSBvbGREb20pIHtcblx0XHRpZiAoc2hvdWxkUGxhY2UpIHtcblx0XHRcdGlmIChvbGREb20gJiYgcGFyZW50Vk5vZGUudHlwZSAmJiAhb2xkRG9tLnBhcmVudE5vZGUpIHtcblx0XHRcdFx0b2xkRG9tID0gZ2V0RG9tU2libGluZyhwYXJlbnRWTm9kZSk7XG5cdFx0XHR9XG5cdFx0XHRwYXJlbnREb20uaW5zZXJ0QmVmb3JlKHBhcmVudFZOb2RlLl9kb20sIG9sZERvbSB8fCBOVUxMKTtcblx0XHR9XG5cdFx0b2xkRG9tID0gcGFyZW50Vk5vZGUuX2RvbTtcblx0fVxuXG5cdGRvIHtcblx0XHRvbGREb20gPSBvbGREb20gJiYgb2xkRG9tLm5leHRTaWJsaW5nO1xuXHR9IHdoaWxlIChvbGREb20gIT0gTlVMTCAmJiBvbGREb20ubm9kZVR5cGUgPT0gOCk7XG5cblx0cmV0dXJuIG9sZERvbTtcbn1cblxuLyoqXG4gKiBGbGF0dGVuIGFuZCBsb29wIHRocm91Z2ggdGhlIGNoaWxkcmVuIG9mIGEgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge0NvbXBvbmVudENoaWxkcmVufSBjaGlsZHJlbiBUaGUgdW5mbGF0dGVuZWQgY2hpbGRyZW4gb2YgYSB2aXJ0dWFsXG4gKiBub2RlXG4gKiBAcmV0dXJucyB7Vk5vZGVbXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvQ2hpbGRBcnJheShjaGlsZHJlbiwgb3V0KSB7XG5cdG91dCA9IG91dCB8fCBbXTtcblx0aWYgKGNoaWxkcmVuID09IE5VTEwgfHwgdHlwZW9mIGNoaWxkcmVuID09ICdib29sZWFuJykge1xuXHR9IGVsc2UgaWYgKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG5cdFx0Y2hpbGRyZW4uc29tZShjaGlsZCA9PiB7XG5cdFx0XHR0b0NoaWxkQXJyYXkoY2hpbGQsIG91dCk7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0b3V0LnB1c2goY2hpbGRyZW4pO1xuXHR9XG5cdHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQHBhcmFtIHtWTm9kZX0gY2hpbGRWTm9kZVxuICogQHBhcmFtIHtWTm9kZVtdfSBvbGRDaGlsZHJlblxuICogQHBhcmFtIHtudW1iZXJ9IHNrZXdlZEluZGV4XG4gKiBAcGFyYW0ge251bWJlcn0gcmVtYWluaW5nT2xkQ2hpbGRyZW5cbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGZpbmRNYXRjaGluZ0luZGV4KFxuXHRjaGlsZFZOb2RlLFxuXHRvbGRDaGlsZHJlbixcblx0c2tld2VkSW5kZXgsXG5cdHJlbWFpbmluZ09sZENoaWxkcmVuXG4pIHtcblx0Y29uc3Qga2V5ID0gY2hpbGRWTm9kZS5rZXk7XG5cdGNvbnN0IHR5cGUgPSBjaGlsZFZOb2RlLnR5cGU7XG5cdGxldCBvbGRWTm9kZSA9IG9sZENoaWxkcmVuW3NrZXdlZEluZGV4XTtcblx0Y29uc3QgbWF0Y2hlZCA9IG9sZFZOb2RlICE9IE5VTEwgJiYgKG9sZFZOb2RlLl9mbGFncyAmIE1BVENIRUQpID09IDA7XG5cblx0Ly8gV2Ugb25seSBuZWVkIHRvIHBlcmZvcm0gYSBzZWFyY2ggaWYgdGhlcmUgYXJlIG1vcmUgY2hpbGRyZW5cblx0Ly8gKHJlbWFpbmluZ09sZENoaWxkcmVuKSB0byBzZWFyY2guIEhvd2V2ZXIsIGlmIHRoZSBvbGRWTm9kZSB3ZSBqdXN0IGxvb2tlZFxuXHQvLyBhdCBza2V3ZWRJbmRleCB3YXMgbm90IGFscmVhZHkgdXNlZCBpbiB0aGlzIGRpZmYsIHRoZW4gdGhlcmUgbXVzdCBiZSBhdFxuXHQvLyBsZWFzdCAxIG90aGVyIChzbyBncmVhdGVyIHRoYW4gMSkgcmVtYWluaW5nT2xkQ2hpbGRyZW4gdG8gYXR0ZW1wdCB0byBtYXRjaFxuXHQvLyBhZ2FpbnN0LiBTbyB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbiBjaGVja3MgdGhhdCBlbnN1cmluZ1xuXHQvLyByZW1haW5pbmdPbGRDaGlsZHJlbiA+IDEgaWYgdGhlIG9sZFZOb2RlIGlzIG5vdCBhbHJlYWR5IHVzZWQvbWF0Y2hlZC4gRWxzZVxuXHQvLyBpZiB0aGUgb2xkVk5vZGUgd2FzIG51bGwgb3IgbWF0Y2hlZCwgdGhlbiB0aGVyZSBjb3VsZCBuZWVkcyB0byBiZSBhdCBsZWFzdFxuXHQvLyAxIChha2EgYHJlbWFpbmluZ09sZENoaWxkcmVuID4gMGApIGNoaWxkcmVuIHRvIGZpbmQgYW5kIGNvbXBhcmUgYWdhaW5zdC5cblx0Ly9cblx0Ly8gSWYgdGhlcmUgaXMgYW4gdW5rZXllZCBmdW5jdGlvbmFsIFZOb2RlLCB0aGF0IGlzbid0IGEgYnVpbHQtaW4gbGlrZSBvdXIgRnJhZ21lbnQsXG5cdC8vIHdlIHNob3VsZCBub3Qgc2VhcmNoIGFzIHdlIHJpc2sgcmUtdXNpbmcgc3RhdGUgb2YgYW4gdW5yZWxhdGVkIFZOb2RlLiAocmV2ZXJ0ZWQgZm9yIG5vdylcblx0bGV0IHNob3VsZFNlYXJjaCA9XG5cdFx0Ly8gKHR5cGVvZiB0eXBlICE9ICdmdW5jdGlvbicgfHwgdHlwZSA9PT0gRnJhZ21lbnQgfHwga2V5KSAmJlxuXHRcdHJlbWFpbmluZ09sZENoaWxkcmVuID4gKG1hdGNoZWQgPyAxIDogMCk7XG5cblx0aWYgKFxuXHRcdChvbGRWTm9kZSA9PT0gTlVMTCAmJiBrZXkgPT0gbnVsbCkgfHxcblx0XHQobWF0Y2hlZCAmJiBrZXkgPT0gb2xkVk5vZGUua2V5ICYmIHR5cGUgPT0gb2xkVk5vZGUudHlwZSlcblx0KSB7XG5cdFx0cmV0dXJuIHNrZXdlZEluZGV4O1xuXHR9IGVsc2UgaWYgKHNob3VsZFNlYXJjaCkge1xuXHRcdGxldCB4ID0gc2tld2VkSW5kZXggLSAxO1xuXHRcdGxldCB5ID0gc2tld2VkSW5kZXggKyAxO1xuXHRcdHdoaWxlICh4ID49IDAgfHwgeSA8IG9sZENoaWxkcmVuLmxlbmd0aCkge1xuXHRcdFx0Y29uc3QgY2hpbGRJbmRleCA9IHggPj0gMCA/IHgtLSA6IHkrKztcblx0XHRcdG9sZFZOb2RlID0gb2xkQ2hpbGRyZW5bY2hpbGRJbmRleF07XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG9sZFZOb2RlICE9IE5VTEwgJiZcblx0XHRcdFx0KG9sZFZOb2RlLl9mbGFncyAmIE1BVENIRUQpID09IDAgJiZcblx0XHRcdFx0a2V5ID09IG9sZFZOb2RlLmtleSAmJlxuXHRcdFx0XHR0eXBlID09IG9sZFZOb2RlLnR5cGVcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm4gY2hpbGRJbmRleDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gLTE7XG59XG4iLCAiaW1wb3J0IHtcblx0RU1QVFlfQVJSLFxuXHRFTVBUWV9PQkosXG5cdE1BVEhfTkFNRVNQQUNFLFxuXHRNT0RFX0hZRFJBVEUsXG5cdE1PREVfU1VTUEVOREVELFxuXHROVUxMLFxuXHRSRVNFVF9NT0RFLFxuXHRTVkdfTkFNRVNQQUNFLFxuXHRVTkRFRklORUQsXG5cdFhIVE1MX05BTUVTUEFDRVxufSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCwgZ2V0RG9tU2libGluZyB9IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJy4uL2NyZWF0ZS1lbGVtZW50JztcbmltcG9ydCB7IGRpZmZDaGlsZHJlbiB9IGZyb20gJy4vY2hpbGRyZW4nO1xuaW1wb3J0IHsgc2V0UHJvcGVydHkgfSBmcm9tICcuL3Byb3BzJztcbmltcG9ydCB7IGFzc2lnbiwgaXNBcnJheSwgcmVtb3ZlTm9kZSwgc2xpY2UgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4uL29wdGlvbnMnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2ludGVybmFsJykuQ29tcG9uZW50Q2hpbGRyZW59IENvbXBvbmVudENoaWxkcmVuXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gQ29tcG9uZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IFByZWFjdEVsZW1lbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IFZOb2RlXG4gKi9cblxuLyoqXG4gKiBAdGVtcGxhdGUge2FueX0gVFxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5SZWY8VD59IFJlZjxUPlxuICovXG5cbi8qKlxuICogRGlmZiB0d28gdmlydHVhbCBub2RlcyBhbmQgYXBwbHkgcHJvcGVyIGNoYW5nZXMgdG8gdGhlIERPTVxuICogQHBhcmFtIHtQcmVhY3RFbGVtZW50fSBwYXJlbnREb20gVGhlIHBhcmVudCBvZiB0aGUgRE9NIGVsZW1lbnRcbiAqIEBwYXJhbSB7Vk5vZGV9IG5ld1ZOb2RlIFRoZSBuZXcgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge1ZOb2RlfSBvbGRWTm9kZSBUaGUgb2xkIHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtvYmplY3R9IGdsb2JhbENvbnRleHQgVGhlIGN1cnJlbnQgY29udGV4dCBvYmplY3QuIE1vZGlmaWVkIGJ5XG4gKiBnZXRDaGlsZENvbnRleHRcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lc3BhY2UgQ3VycmVudCBuYW1lc3BhY2Ugb2YgdGhlIERPTSBub2RlIChIVE1MLCBTVkcsIG9yIE1hdGhNTClcbiAqIEBwYXJhbSB7QXJyYXk8UHJlYWN0RWxlbWVudD59IGV4Y2Vzc0RvbUNoaWxkcmVuXG4gKiBAcGFyYW0ge0FycmF5PENvbXBvbmVudD59IGNvbW1pdFF1ZXVlIExpc3Qgb2YgY29tcG9uZW50cyB3aGljaCBoYXZlIGNhbGxiYWNrc1xuICogdG8gaW52b2tlIGluIGNvbW1pdFJvb3RcbiAqIEBwYXJhbSB7UHJlYWN0RWxlbWVudH0gb2xkRG9tIFRoZSBjdXJyZW50IGF0dGFjaGVkIERPTSBlbGVtZW50IGFueSBuZXcgZG9tXG4gKiBlbGVtZW50cyBzaG91bGQgYmUgcGxhY2VkIGFyb3VuZC4gTGlrZWx5IGBudWxsYCBvbiBmaXJzdCByZW5kZXIgKGV4Y2VwdCB3aGVuXG4gKiBoeWRyYXRpbmcpLiBDYW4gYmUgYSBzaWJsaW5nIERPTSBlbGVtZW50IHdoZW4gZGlmZmluZyBGcmFnbWVudHMgdGhhdCBoYXZlXG4gKiBzaWJsaW5ncy4gSW4gbW9zdCBjYXNlcywgaXQgc3RhcnRzIG91dCBhcyBgb2xkQ2hpbGRyZW5bMF0uX2RvbWAuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzSHlkcmF0aW5nIFdoZXRoZXIgb3Igbm90IHdlIGFyZSBpbiBoeWRyYXRpb25cbiAqIEBwYXJhbSB7YW55W119IHJlZlF1ZXVlIGFuIGFycmF5IG9mIGVsZW1lbnRzIG5lZWRlZCB0byBpbnZva2UgcmVmc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZihcblx0cGFyZW50RG9tLFxuXHRuZXdWTm9kZSxcblx0b2xkVk5vZGUsXG5cdGdsb2JhbENvbnRleHQsXG5cdG5hbWVzcGFjZSxcblx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdGNvbW1pdFF1ZXVlLFxuXHRvbGREb20sXG5cdGlzSHlkcmF0aW5nLFxuXHRyZWZRdWV1ZVxuKSB7XG5cdC8qKiBAdHlwZSB7YW55fSAqL1xuXHRsZXQgdG1wLFxuXHRcdG5ld1R5cGUgPSBuZXdWTm9kZS50eXBlO1xuXG5cdC8vIFdoZW4gcGFzc2luZyB0aHJvdWdoIGNyZWF0ZUVsZW1lbnQgaXQgYXNzaWducyB0aGUgb2JqZWN0XG5cdC8vIGNvbnN0cnVjdG9yIGFzIHVuZGVmaW5lZC4gVGhpcyB0byBwcmV2ZW50IEpTT04taW5qZWN0aW9uLlxuXHRpZiAobmV3Vk5vZGUuY29uc3RydWN0b3IgIT09IFVOREVGSU5FRCkgcmV0dXJuIE5VTEw7XG5cblx0Ly8gSWYgdGhlIHByZXZpb3VzIGRpZmYgYmFpbGVkIG91dCwgcmVzdW1lIGNyZWF0aW5nL2h5ZHJhdGluZy5cblx0aWYgKG9sZFZOb2RlLl9mbGFncyAmIE1PREVfU1VTUEVOREVEKSB7XG5cdFx0aXNIeWRyYXRpbmcgPSAhIShvbGRWTm9kZS5fZmxhZ3MgJiBNT0RFX0hZRFJBVEUpO1xuXHRcdG9sZERvbSA9IG5ld1ZOb2RlLl9kb20gPSBvbGRWTm9kZS5fZG9tO1xuXHRcdGV4Y2Vzc0RvbUNoaWxkcmVuID0gW29sZERvbV07XG5cdH1cblxuXHRpZiAoKHRtcCA9IG9wdGlvbnMuX2RpZmYpKSB0bXAobmV3Vk5vZGUpO1xuXG5cdG91dGVyOiBpZiAodHlwZW9mIG5ld1R5cGUgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdGxldCBvbGRDb21taXRRdWV1ZUxlbmd0aCA9IGNvbW1pdFF1ZXVlLmxlbmd0aDtcblx0XHR0cnkge1xuXHRcdFx0bGV0IGMsIGlzTmV3LCBvbGRQcm9wcywgb2xkU3RhdGUsIHNuYXBzaG90LCBjbGVhclByb2Nlc3NpbmdFeGNlcHRpb247XG5cdFx0XHRsZXQgbmV3UHJvcHMgPSBuZXdWTm9kZS5wcm9wcztcblx0XHRcdGNvbnN0IGlzQ2xhc3NDb21wb25lbnQgPSBuZXdUeXBlLnByb3RvdHlwZSAmJiBuZXdUeXBlLnByb3RvdHlwZS5yZW5kZXI7XG5cblx0XHRcdC8vIE5lY2Vzc2FyeSBmb3IgY3JlYXRlQ29udGV4dCBhcGkuIFNldHRpbmcgdGhpcyBwcm9wZXJ0eSB3aWxsIHBhc3Ncblx0XHRcdC8vIHRoZSBjb250ZXh0IHZhbHVlIGFzIGB0aGlzLmNvbnRleHRgIGp1c3QgZm9yIHRoaXMgY29tcG9uZW50LlxuXHRcdFx0dG1wID0gbmV3VHlwZS5jb250ZXh0VHlwZTtcblx0XHRcdGxldCBwcm92aWRlciA9IHRtcCAmJiBnbG9iYWxDb250ZXh0W3RtcC5faWRdO1xuXHRcdFx0bGV0IGNvbXBvbmVudENvbnRleHQgPSB0bXBcblx0XHRcdFx0PyBwcm92aWRlclxuXHRcdFx0XHRcdD8gcHJvdmlkZXIucHJvcHMudmFsdWVcblx0XHRcdFx0XHQ6IHRtcC5fZGVmYXVsdFZhbHVlXG5cdFx0XHRcdDogZ2xvYmFsQ29udGV4dDtcblxuXHRcdFx0Ly8gR2V0IGNvbXBvbmVudCBhbmQgc2V0IGl0IHRvIGBjYFxuXHRcdFx0aWYgKG9sZFZOb2RlLl9jb21wb25lbnQpIHtcblx0XHRcdFx0YyA9IG5ld1ZOb2RlLl9jb21wb25lbnQgPSBvbGRWTm9kZS5fY29tcG9uZW50O1xuXHRcdFx0XHRjbGVhclByb2Nlc3NpbmdFeGNlcHRpb24gPSBjLl9wcm9jZXNzaW5nRXhjZXB0aW9uID0gYy5fcGVuZGluZ0Vycm9yO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gSW5zdGFudGlhdGUgdGhlIG5ldyBjb21wb25lbnRcblx0XHRcdFx0aWYgKGlzQ2xhc3NDb21wb25lbnQpIHtcblx0XHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRoZSBjaGVjayBhYm92ZSB2ZXJpZmllcyB0aGF0IG5ld1R5cGUgaXMgc3VwcG9zZSB0byBiZSBjb25zdHJ1Y3RlZFxuXHRcdFx0XHRcdG5ld1ZOb2RlLl9jb21wb25lbnQgPSBjID0gbmV3IG5ld1R5cGUobmV3UHJvcHMsIGNvbXBvbmVudENvbnRleHQpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5ldy1jYXBcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRydXN0IG1lLCBDb21wb25lbnQgaW1wbGVtZW50cyB0aGUgaW50ZXJmYWNlIHdlIHdhbnRcblx0XHRcdFx0XHRuZXdWTm9kZS5fY29tcG9uZW50ID0gYyA9IG5ldyBCYXNlQ29tcG9uZW50KFxuXHRcdFx0XHRcdFx0bmV3UHJvcHMsXG5cdFx0XHRcdFx0XHRjb21wb25lbnRDb250ZXh0XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRjLmNvbnN0cnVjdG9yID0gbmV3VHlwZTtcblx0XHRcdFx0XHRjLnJlbmRlciA9IGRvUmVuZGVyO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChwcm92aWRlcikgcHJvdmlkZXIuc3ViKGMpO1xuXG5cdFx0XHRcdGlmICghYy5zdGF0ZSkgYy5zdGF0ZSA9IHt9O1xuXHRcdFx0XHRjLl9nbG9iYWxDb250ZXh0ID0gZ2xvYmFsQ29udGV4dDtcblx0XHRcdFx0aXNOZXcgPSBjLl9kaXJ0eSA9IHRydWU7XG5cdFx0XHRcdGMuX3JlbmRlckNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0XHRjLl9zdGF0ZUNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJbnZva2UgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXG5cdFx0XHRpZiAoaXNDbGFzc0NvbXBvbmVudCAmJiBjLl9uZXh0U3RhdGUgPT0gTlVMTCkge1xuXHRcdFx0XHRjLl9uZXh0U3RhdGUgPSBjLnN0YXRlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaXNDbGFzc0NvbXBvbmVudCAmJiBuZXdUeXBlLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyAhPSBOVUxMKSB7XG5cdFx0XHRcdGlmIChjLl9uZXh0U3RhdGUgPT0gYy5zdGF0ZSkge1xuXHRcdFx0XHRcdGMuX25leHRTdGF0ZSA9IGFzc2lnbih7fSwgYy5fbmV4dFN0YXRlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGFzc2lnbihcblx0XHRcdFx0XHRjLl9uZXh0U3RhdGUsXG5cdFx0XHRcdFx0bmV3VHlwZS5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV3UHJvcHMsIGMuX25leHRTdGF0ZSlcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0b2xkUHJvcHMgPSBjLnByb3BzO1xuXHRcdFx0b2xkU3RhdGUgPSBjLnN0YXRlO1xuXHRcdFx0Yy5fdm5vZGUgPSBuZXdWTm9kZTtcblxuXHRcdFx0Ly8gSW52b2tlIHByZS1yZW5kZXIgbGlmZWN5Y2xlIG1ldGhvZHNcblx0XHRcdGlmIChpc05ldykge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0aXNDbGFzc0NvbXBvbmVudCAmJlxuXHRcdFx0XHRcdG5ld1R5cGUuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID09IE5VTEwgJiZcblx0XHRcdFx0XHRjLmNvbXBvbmVudFdpbGxNb3VudCAhPSBOVUxMXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdGMuY29tcG9uZW50V2lsbE1vdW50KCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoaXNDbGFzc0NvbXBvbmVudCAmJiBjLmNvbXBvbmVudERpZE1vdW50ICE9IE5VTEwpIHtcblx0XHRcdFx0XHRjLl9yZW5kZXJDYWxsYmFja3MucHVzaChjLmNvbXBvbmVudERpZE1vdW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdGlzQ2xhc3NDb21wb25lbnQgJiZcblx0XHRcdFx0XHRuZXdUeXBlLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9PSBOVUxMICYmXG5cdFx0XHRcdFx0bmV3UHJvcHMgIT09IG9sZFByb3BzICYmXG5cdFx0XHRcdFx0Yy5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzICE9IE5VTExcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Yy5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5ld1Byb3BzLCBjb21wb25lbnRDb250ZXh0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRuZXdWTm9kZS5fb3JpZ2luYWwgPT0gb2xkVk5vZGUuX29yaWdpbmFsIHx8XG5cdFx0XHRcdFx0KCFjLl9mb3JjZSAmJlxuXHRcdFx0XHRcdFx0Yy5zaG91bGRDb21wb25lbnRVcGRhdGUgIT0gTlVMTCAmJlxuXHRcdFx0XHRcdFx0Yy5zaG91bGRDb21wb25lbnRVcGRhdGUoXG5cdFx0XHRcdFx0XHRcdG5ld1Byb3BzLFxuXHRcdFx0XHRcdFx0XHRjLl9uZXh0U3RhdGUsXG5cdFx0XHRcdFx0XHRcdGNvbXBvbmVudENvbnRleHRcblx0XHRcdFx0XHRcdCkgPT09IGZhbHNlKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHQvLyBNb3JlIGluZm8gYWJvdXQgdGhpcyBoZXJlOiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9Kb3ZpRGVDcm9vY2svYmVjNWYyY2U5MzU0NGQyZTYwNzBlZjhlMDAzNmU0ZThcblx0XHRcdFx0XHRpZiAobmV3Vk5vZGUuX29yaWdpbmFsICE9IG9sZFZOb2RlLl9vcmlnaW5hbCkge1xuXHRcdFx0XHRcdFx0Ly8gV2hlbiB3ZSBhcmUgZGVhbGluZyB3aXRoIGEgYmFpbCBiZWNhdXNlIG9mIHNDVSB3ZSBoYXZlIHRvIHVwZGF0ZVxuXHRcdFx0XHRcdFx0Ly8gdGhlIHByb3BzLCBzdGF0ZSBhbmQgZGlydHktc3RhdGUuXG5cdFx0XHRcdFx0XHQvLyB3aGVuIHdlIGFyZSBkZWFsaW5nIHdpdGggc3RyaWN0LWVxdWFsaXR5IHdlIGRvbid0IGFzIHRoZSBjaGlsZCBjb3VsZCBzdGlsbFxuXHRcdFx0XHRcdFx0Ly8gYmUgZGlydGllZCBzZWUgIzM4ODNcblx0XHRcdFx0XHRcdGMucHJvcHMgPSBuZXdQcm9wcztcblx0XHRcdFx0XHRcdGMuc3RhdGUgPSBjLl9uZXh0U3RhdGU7XG5cdFx0XHRcdFx0XHRjLl9kaXJ0eSA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdG5ld1ZOb2RlLl9kb20gPSBvbGRWTm9kZS5fZG9tO1xuXHRcdFx0XHRcdG5ld1ZOb2RlLl9jaGlsZHJlbiA9IG9sZFZOb2RlLl9jaGlsZHJlbjtcblx0XHRcdFx0XHRuZXdWTm9kZS5fY2hpbGRyZW4uc29tZSh2bm9kZSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAodm5vZGUpIHZub2RlLl9wYXJlbnQgPSBuZXdWTm9kZTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdEVNUFRZX0FSUi5wdXNoLmFwcGx5KGMuX3JlbmRlckNhbGxiYWNrcywgYy5fc3RhdGVDYWxsYmFja3MpO1xuXHRcdFx0XHRcdGMuX3N0YXRlQ2FsbGJhY2tzID0gW107XG5cblx0XHRcdFx0XHRpZiAoYy5fcmVuZGVyQ2FsbGJhY2tzLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0Y29tbWl0UXVldWUucHVzaChjKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRicmVhayBvdXRlcjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChjLmNvbXBvbmVudFdpbGxVcGRhdGUgIT0gTlVMTCkge1xuXHRcdFx0XHRcdGMuY29tcG9uZW50V2lsbFVwZGF0ZShuZXdQcm9wcywgYy5fbmV4dFN0YXRlLCBjb21wb25lbnRDb250ZXh0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChpc0NsYXNzQ29tcG9uZW50ICYmIGMuY29tcG9uZW50RGlkVXBkYXRlICE9IE5VTEwpIHtcblx0XHRcdFx0XHRjLl9yZW5kZXJDYWxsYmFja3MucHVzaCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRjLmNvbXBvbmVudERpZFVwZGF0ZShvbGRQcm9wcywgb2xkU3RhdGUsIHNuYXBzaG90KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRjLmNvbnRleHQgPSBjb21wb25lbnRDb250ZXh0O1xuXHRcdFx0Yy5wcm9wcyA9IG5ld1Byb3BzO1xuXHRcdFx0Yy5fcGFyZW50RG9tID0gcGFyZW50RG9tO1xuXHRcdFx0Yy5fZm9yY2UgPSBmYWxzZTtcblxuXHRcdFx0bGV0IHJlbmRlckhvb2sgPSBvcHRpb25zLl9yZW5kZXIsXG5cdFx0XHRcdGNvdW50ID0gMDtcblx0XHRcdGlmIChpc0NsYXNzQ29tcG9uZW50KSB7XG5cdFx0XHRcdGMuc3RhdGUgPSBjLl9uZXh0U3RhdGU7XG5cdFx0XHRcdGMuX2RpcnR5ID0gZmFsc2U7XG5cblx0XHRcdFx0aWYgKHJlbmRlckhvb2spIHJlbmRlckhvb2sobmV3Vk5vZGUpO1xuXG5cdFx0XHRcdHRtcCA9IGMucmVuZGVyKGMucHJvcHMsIGMuc3RhdGUsIGMuY29udGV4dCk7XG5cblx0XHRcdFx0RU1QVFlfQVJSLnB1c2guYXBwbHkoYy5fcmVuZGVyQ2FsbGJhY2tzLCBjLl9zdGF0ZUNhbGxiYWNrcyk7XG5cdFx0XHRcdGMuX3N0YXRlQ2FsbGJhY2tzID0gW107XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkbyB7XG5cdFx0XHRcdFx0Yy5fZGlydHkgPSBmYWxzZTtcblx0XHRcdFx0XHRpZiAocmVuZGVySG9vaykgcmVuZGVySG9vayhuZXdWTm9kZSk7XG5cblx0XHRcdFx0XHR0bXAgPSBjLnJlbmRlcihjLnByb3BzLCBjLnN0YXRlLCBjLmNvbnRleHQpO1xuXG5cdFx0XHRcdFx0Ly8gSGFuZGxlIHNldFN0YXRlIGNhbGxlZCBpbiByZW5kZXIsIHNlZSAjMjU1M1xuXHRcdFx0XHRcdGMuc3RhdGUgPSBjLl9uZXh0U3RhdGU7XG5cdFx0XHRcdH0gd2hpbGUgKGMuX2RpcnR5ICYmICsrY291bnQgPCAyNSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEhhbmRsZSBzZXRTdGF0ZSBjYWxsZWQgaW4gcmVuZGVyLCBzZWUgIzI1NTNcblx0XHRcdGMuc3RhdGUgPSBjLl9uZXh0U3RhdGU7XG5cblx0XHRcdGlmIChjLmdldENoaWxkQ29udGV4dCAhPSBOVUxMKSB7XG5cdFx0XHRcdGdsb2JhbENvbnRleHQgPSBhc3NpZ24oYXNzaWduKHt9LCBnbG9iYWxDb250ZXh0KSwgYy5nZXRDaGlsZENvbnRleHQoKSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpc0NsYXNzQ29tcG9uZW50ICYmICFpc05ldyAmJiBjLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlICE9IE5VTEwpIHtcblx0XHRcdFx0c25hcHNob3QgPSBjLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKG9sZFByb3BzLCBvbGRTdGF0ZSk7XG5cdFx0XHR9XG5cblx0XHRcdGxldCByZW5kZXJSZXN1bHQgPVxuXHRcdFx0XHR0bXAgIT0gTlVMTCAmJiB0bXAudHlwZSA9PT0gRnJhZ21lbnQgJiYgdG1wLmtleSA9PSBOVUxMXG5cdFx0XHRcdFx0PyBjbG9uZU5vZGUodG1wLnByb3BzLmNoaWxkcmVuKVxuXHRcdFx0XHRcdDogdG1wO1xuXG5cdFx0XHRvbGREb20gPSBkaWZmQ2hpbGRyZW4oXG5cdFx0XHRcdHBhcmVudERvbSxcblx0XHRcdFx0aXNBcnJheShyZW5kZXJSZXN1bHQpID8gcmVuZGVyUmVzdWx0IDogW3JlbmRlclJlc3VsdF0sXG5cdFx0XHRcdG5ld1ZOb2RlLFxuXHRcdFx0XHRvbGRWTm9kZSxcblx0XHRcdFx0Z2xvYmFsQ29udGV4dCxcblx0XHRcdFx0bmFtZXNwYWNlLFxuXHRcdFx0XHRleGNlc3NEb21DaGlsZHJlbixcblx0XHRcdFx0Y29tbWl0UXVldWUsXG5cdFx0XHRcdG9sZERvbSxcblx0XHRcdFx0aXNIeWRyYXRpbmcsXG5cdFx0XHRcdHJlZlF1ZXVlXG5cdFx0XHQpO1xuXG5cdFx0XHRjLmJhc2UgPSBuZXdWTm9kZS5fZG9tO1xuXG5cdFx0XHQvLyBXZSBzdWNjZXNzZnVsbHkgcmVuZGVyZWQgdGhpcyBWTm9kZSwgdW5zZXQgYW55IHN0b3JlZCBoeWRyYXRpb24vYmFpbG91dCBzdGF0ZTpcblx0XHRcdG5ld1ZOb2RlLl9mbGFncyAmPSBSRVNFVF9NT0RFO1xuXG5cdFx0XHRpZiAoYy5fcmVuZGVyQ2FsbGJhY2tzLmxlbmd0aCkge1xuXHRcdFx0XHRjb21taXRRdWV1ZS5wdXNoKGMpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY2xlYXJQcm9jZXNzaW5nRXhjZXB0aW9uKSB7XG5cdFx0XHRcdGMuX3BlbmRpbmdFcnJvciA9IGMuX3Byb2Nlc3NpbmdFeGNlcHRpb24gPSBOVUxMO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdC8vIFdlIHJlbW92ZSBhbnkgY29tcG9uZW50RGlkTW91bnQsIC4uLlxuXHRcdFx0Ly8gdGhhdCBoYXZlIGJlZW4gaW52YWxpZGF0ZWQgYnkgdXNcblx0XHRcdC8vIGludGVyY2VwdGluZyB0aGUgZXJyb3IuXG5cdFx0XHRjb21taXRRdWV1ZS5sZW5ndGggPSBvbGRDb21taXRRdWV1ZUxlbmd0aDtcblx0XHRcdG5ld1ZOb2RlLl9vcmlnaW5hbCA9IE5VTEw7XG5cdFx0XHQvLyBpZiBoeWRyYXRpbmcgb3IgY3JlYXRpbmcgaW5pdGlhbCB0cmVlLCBiYWlsb3V0IHByZXNlcnZlcyBET006XG5cdFx0XHRpZiAoaXNIeWRyYXRpbmcgfHwgZXhjZXNzRG9tQ2hpbGRyZW4gIT0gTlVMTCkge1xuXHRcdFx0XHRpZiAoZS50aGVuKSB7XG5cdFx0XHRcdFx0bmV3Vk5vZGUuX2ZsYWdzIHw9IGlzSHlkcmF0aW5nXG5cdFx0XHRcdFx0XHQ/IE1PREVfSFlEUkFURSB8IE1PREVfU1VTUEVOREVEXG5cdFx0XHRcdFx0XHQ6IE1PREVfU1VTUEVOREVEO1xuXG5cdFx0XHRcdFx0d2hpbGUgKG9sZERvbSAmJiBvbGREb20ubm9kZVR5cGUgPT0gOCAmJiBvbGREb20ubmV4dFNpYmxpbmcpIHtcblx0XHRcdFx0XHRcdG9sZERvbSA9IG9sZERvbS5uZXh0U2libGluZztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoZXhjZXNzRG9tQ2hpbGRyZW4gIT0gTlVMTCkge1xuXHRcdFx0XHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW5bZXhjZXNzRG9tQ2hpbGRyZW4uaW5kZXhPZihvbGREb20pXSA9IE5VTEw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG5ld1ZOb2RlLl9kb20gPSBvbGREb207XG5cdFx0XHRcdH0gZWxzZSBpZiAoZXhjZXNzRG9tQ2hpbGRyZW4gIT0gTlVMTCkge1xuXHRcdFx0XHRcdGZvciAobGV0IGkgPSBleGNlc3NEb21DaGlsZHJlbi5sZW5ndGg7IGktLTsgKSB7XG5cdFx0XHRcdFx0XHRyZW1vdmVOb2RlKGV4Y2Vzc0RvbUNoaWxkcmVuW2ldKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG5ld1ZOb2RlLl9kb20gPSBvbGRWTm9kZS5fZG9tO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAobmV3Vk5vZGUuX2NoaWxkcmVuID09IE5VTEwpIHtcblx0XHRcdFx0bmV3Vk5vZGUuX2NoaWxkcmVuID0gb2xkVk5vZGUuX2NoaWxkcmVuIHx8IFtdO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIWUudGhlbikgbWFya0FzRm9yY2UobmV3Vk5vZGUpO1xuXHRcdFx0b3B0aW9ucy5fY2F0Y2hFcnJvcihlLCBuZXdWTm9kZSwgb2xkVk5vZGUpO1xuXHRcdH1cblx0fSBlbHNlIGlmIChcblx0XHRleGNlc3NEb21DaGlsZHJlbiA9PSBOVUxMICYmXG5cdFx0bmV3Vk5vZGUuX29yaWdpbmFsID09IG9sZFZOb2RlLl9vcmlnaW5hbFxuXHQpIHtcblx0XHRuZXdWTm9kZS5fY2hpbGRyZW4gPSBvbGRWTm9kZS5fY2hpbGRyZW47XG5cdFx0bmV3Vk5vZGUuX2RvbSA9IG9sZFZOb2RlLl9kb207XG5cdH0gZWxzZSB7XG5cdFx0b2xkRG9tID0gbmV3Vk5vZGUuX2RvbSA9IGRpZmZFbGVtZW50Tm9kZXMoXG5cdFx0XHRvbGRWTm9kZS5fZG9tLFxuXHRcdFx0bmV3Vk5vZGUsXG5cdFx0XHRvbGRWTm9kZSxcblx0XHRcdGdsb2JhbENvbnRleHQsXG5cdFx0XHRuYW1lc3BhY2UsXG5cdFx0XHRleGNlc3NEb21DaGlsZHJlbixcblx0XHRcdGNvbW1pdFF1ZXVlLFxuXHRcdFx0aXNIeWRyYXRpbmcsXG5cdFx0XHRyZWZRdWV1ZVxuXHRcdCk7XG5cdH1cblxuXHRpZiAoKHRtcCA9IG9wdGlvbnMuZGlmZmVkKSkgdG1wKG5ld1ZOb2RlKTtcblxuXHRyZXR1cm4gbmV3Vk5vZGUuX2ZsYWdzICYgTU9ERV9TVVNQRU5ERUQgPyB1bmRlZmluZWQgOiBvbGREb207XG59XG5cbmZ1bmN0aW9uIG1hcmtBc0ZvcmNlKHZub2RlKSB7XG5cdGlmICh2bm9kZSkge1xuXHRcdGlmICh2bm9kZS5fY29tcG9uZW50KSB2bm9kZS5fY29tcG9uZW50Ll9mb3JjZSA9IHRydWU7XG5cdFx0aWYgKHZub2RlLl9jaGlsZHJlbikgdm5vZGUuX2NoaWxkcmVuLnNvbWUobWFya0FzRm9yY2UpO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxDb21wb25lbnQ+fSBjb21taXRRdWV1ZSBMaXN0IG9mIGNvbXBvbmVudHNcbiAqIHdoaWNoIGhhdmUgY2FsbGJhY2tzIHRvIGludm9rZSBpbiBjb21taXRSb290XG4gKiBAcGFyYW0ge1ZOb2RlfSByb290XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21taXRSb290KGNvbW1pdFF1ZXVlLCByb290LCByZWZRdWV1ZSkge1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHJlZlF1ZXVlLmxlbmd0aDsgaSsrKSB7XG5cdFx0YXBwbHlSZWYocmVmUXVldWVbaV0sIHJlZlF1ZXVlWysraV0sIHJlZlF1ZXVlWysraV0pO1xuXHR9XG5cblx0aWYgKG9wdGlvbnMuX2NvbW1pdCkgb3B0aW9ucy5fY29tbWl0KHJvb3QsIGNvbW1pdFF1ZXVlKTtcblxuXHRjb21taXRRdWV1ZS5zb21lKGMgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFJldXNlIHRoZSBjb21taXRRdWV1ZSB2YXJpYWJsZSBoZXJlIHNvIHRoZSB0eXBlIGNoYW5nZXNcblx0XHRcdGNvbW1pdFF1ZXVlID0gYy5fcmVuZGVyQ2FsbGJhY2tzO1xuXHRcdFx0Yy5fcmVuZGVyQ2FsbGJhY2tzID0gW107XG5cdFx0XHRjb21taXRRdWV1ZS5zb21lKGNiID0+IHtcblx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBTZWUgYWJvdmUgY29tbWVudCBvbiBjb21taXRRdWV1ZVxuXHRcdFx0XHRjYi5jYWxsKGMpO1xuXHRcdFx0fSk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0b3B0aW9ucy5fY2F0Y2hFcnJvcihlLCBjLl92bm9kZSk7XG5cdFx0fVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gY2xvbmVOb2RlKG5vZGUpIHtcblx0aWYgKHR5cGVvZiBub2RlICE9ICdvYmplY3QnIHx8IG5vZGUgPT0gTlVMTCB8fCBub2RlLl9kZXB0aCA+IDApIHtcblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdGlmIChpc0FycmF5KG5vZGUpKSB7XG5cdFx0cmV0dXJuIG5vZGUubWFwKGNsb25lTm9kZSk7XG5cdH1cblxuXHRpZiAobm9kZS5jb25zdHJ1Y3RvciAhPT0gVU5ERUZJTkVEKSByZXR1cm4gbnVsbDtcblxuXHRyZXR1cm4gYXNzaWduKHt9LCBub2RlKTtcbn1cblxuLyoqXG4gKiBEaWZmIHR3byB2aXJ0dWFsIG5vZGVzIHJlcHJlc2VudGluZyBET00gZWxlbWVudFxuICogQHBhcmFtIHtQcmVhY3RFbGVtZW50fSBkb20gVGhlIERPTSBlbGVtZW50IHJlcHJlc2VudGluZyB0aGUgdmlydHVhbCBub2Rlc1xuICogYmVpbmcgZGlmZmVkXG4gKiBAcGFyYW0ge1ZOb2RlfSBuZXdWTm9kZSBUaGUgbmV3IHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtWTm9kZX0gb2xkVk5vZGUgVGhlIG9sZCB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBnbG9iYWxDb250ZXh0IFRoZSBjdXJyZW50IGNvbnRleHQgb2JqZWN0XG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZXNwYWNlIEN1cnJlbnQgbmFtZXNwYWNlIG9mIHRoZSBET00gbm9kZSAoSFRNTCwgU1ZHLCBvciBNYXRoTUwpXG4gKiBAcGFyYW0ge0FycmF5PFByZWFjdEVsZW1lbnQ+fSBleGNlc3NEb21DaGlsZHJlblxuICogQHBhcmFtIHtBcnJheTxDb21wb25lbnQ+fSBjb21taXRRdWV1ZSBMaXN0IG9mIGNvbXBvbmVudHMgd2hpY2ggaGF2ZSBjYWxsYmFja3NcbiAqIHRvIGludm9rZSBpbiBjb21taXRSb290XG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzSHlkcmF0aW5nIFdoZXRoZXIgb3Igbm90IHdlIGFyZSBpbiBoeWRyYXRpb25cbiAqIEBwYXJhbSB7YW55W119IHJlZlF1ZXVlIGFuIGFycmF5IG9mIGVsZW1lbnRzIG5lZWRlZCB0byBpbnZva2UgcmVmc1xuICogQHJldHVybnMge1ByZWFjdEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGRpZmZFbGVtZW50Tm9kZXMoXG5cdGRvbSxcblx0bmV3Vk5vZGUsXG5cdG9sZFZOb2RlLFxuXHRnbG9iYWxDb250ZXh0LFxuXHRuYW1lc3BhY2UsXG5cdGV4Y2Vzc0RvbUNoaWxkcmVuLFxuXHRjb21taXRRdWV1ZSxcblx0aXNIeWRyYXRpbmcsXG5cdHJlZlF1ZXVlXG4pIHtcblx0bGV0IG9sZFByb3BzID0gb2xkVk5vZGUucHJvcHMgfHwgRU1QVFlfT0JKO1xuXHRsZXQgbmV3UHJvcHMgPSBuZXdWTm9kZS5wcm9wcztcblx0bGV0IG5vZGVUeXBlID0gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChuZXdWTm9kZS50eXBlKTtcblx0LyoqIEB0eXBlIHthbnl9ICovXG5cdGxldCBpO1xuXHQvKiogQHR5cGUge3sgX19odG1sPzogc3RyaW5nIH19ICovXG5cdGxldCBuZXdIdG1sO1xuXHQvKiogQHR5cGUge3sgX19odG1sPzogc3RyaW5nIH19ICovXG5cdGxldCBvbGRIdG1sO1xuXHQvKiogQHR5cGUge0NvbXBvbmVudENoaWxkcmVufSAqL1xuXHRsZXQgbmV3Q2hpbGRyZW47XG5cdGxldCB2YWx1ZTtcblx0bGV0IGlucHV0VmFsdWU7XG5cdGxldCBjaGVja2VkO1xuXG5cdC8vIFRyYWNrcyBlbnRlcmluZyBhbmQgZXhpdGluZyBuYW1lc3BhY2VzIHdoZW4gZGVzY2VuZGluZyB0aHJvdWdoIHRoZSB0cmVlLlxuXHRpZiAobm9kZVR5cGUgPT0gJ3N2ZycpIG5hbWVzcGFjZSA9IFNWR19OQU1FU1BBQ0U7XG5cdGVsc2UgaWYgKG5vZGVUeXBlID09ICdtYXRoJykgbmFtZXNwYWNlID0gTUFUSF9OQU1FU1BBQ0U7XG5cdGVsc2UgaWYgKCFuYW1lc3BhY2UpIG5hbWVzcGFjZSA9IFhIVE1MX05BTUVTUEFDRTtcblxuXHRpZiAoZXhjZXNzRG9tQ2hpbGRyZW4gIT0gTlVMTCkge1xuXHRcdGZvciAoaSA9IDA7IGkgPCBleGNlc3NEb21DaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFsdWUgPSBleGNlc3NEb21DaGlsZHJlbltpXTtcblxuXHRcdFx0Ly8gaWYgbmV3Vk5vZGUgbWF0Y2hlcyBhbiBlbGVtZW50IGluIGV4Y2Vzc0RvbUNoaWxkcmVuIG9yIHRoZSBgZG9tYFxuXHRcdFx0Ly8gYXJndW1lbnQgbWF0Y2hlcyBhbiBlbGVtZW50IGluIGV4Y2Vzc0RvbUNoaWxkcmVuLCByZW1vdmUgaXQgZnJvbVxuXHRcdFx0Ly8gZXhjZXNzRG9tQ2hpbGRyZW4gc28gaXQgaXNuJ3QgbGF0ZXIgcmVtb3ZlZCBpbiBkaWZmQ2hpbGRyZW5cblx0XHRcdGlmIChcblx0XHRcdFx0dmFsdWUgJiZcblx0XHRcdFx0J3NldEF0dHJpYnV0ZScgaW4gdmFsdWUgPT0gISFub2RlVHlwZSAmJlxuXHRcdFx0XHQobm9kZVR5cGUgPyB2YWx1ZS5sb2NhbE5hbWUgPT0gbm9kZVR5cGUgOiB2YWx1ZS5ub2RlVHlwZSA9PSAzKVxuXHRcdFx0KSB7XG5cdFx0XHRcdGRvbSA9IHZhbHVlO1xuXHRcdFx0XHRleGNlc3NEb21DaGlsZHJlbltpXSA9IE5VTEw7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGlmIChkb20gPT0gTlVMTCkge1xuXHRcdGlmIChub2RlVHlwZSA9PSBOVUxMKSB7XG5cdFx0XHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobmV3UHJvcHMpO1xuXHRcdH1cblxuXHRcdGRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcblx0XHRcdG5hbWVzcGFjZSxcblx0XHRcdG5vZGVUeXBlLFxuXHRcdFx0bmV3UHJvcHMuaXMgJiYgbmV3UHJvcHNcblx0XHQpO1xuXG5cdFx0Ly8gd2UgYXJlIGNyZWF0aW5nIGEgbmV3IG5vZGUsIHNvIHdlIGNhbiBhc3N1bWUgdGhpcyBpcyBhIG5ldyBzdWJ0cmVlIChpblxuXHRcdC8vIGNhc2Ugd2UgYXJlIGh5ZHJhdGluZyksIHRoaXMgZGVvcHRzIHRoZSBoeWRyYXRlXG5cdFx0aWYgKGlzSHlkcmF0aW5nKSB7XG5cdFx0XHRpZiAob3B0aW9ucy5faHlkcmF0aW9uTWlzbWF0Y2gpXG5cdFx0XHRcdG9wdGlvbnMuX2h5ZHJhdGlvbk1pc21hdGNoKG5ld1ZOb2RlLCBleGNlc3NEb21DaGlsZHJlbik7XG5cdFx0XHRpc0h5ZHJhdGluZyA9IGZhbHNlO1xuXHRcdH1cblx0XHQvLyB3ZSBjcmVhdGVkIGEgbmV3IHBhcmVudCwgc28gbm9uZSBvZiB0aGUgcHJldmlvdXNseSBhdHRhY2hlZCBjaGlsZHJlbiBjYW4gYmUgcmV1c2VkOlxuXHRcdGV4Y2Vzc0RvbUNoaWxkcmVuID0gTlVMTDtcblx0fVxuXG5cdGlmIChub2RlVHlwZSA9PSBOVUxMKSB7XG5cdFx0Ly8gRHVyaW5nIGh5ZHJhdGlvbiwgd2Ugc3RpbGwgaGF2ZSB0byBzcGxpdCBtZXJnZWQgdGV4dCBmcm9tIFNTUidkIEhUTUwuXG5cdFx0aWYgKG9sZFByb3BzICE9PSBuZXdQcm9wcyAmJiAoIWlzSHlkcmF0aW5nIHx8IGRvbS5kYXRhICE9IG5ld1Byb3BzKSkge1xuXHRcdFx0ZG9tLmRhdGEgPSBuZXdQcm9wcztcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Ly8gSWYgZXhjZXNzRG9tQ2hpbGRyZW4gd2FzIG5vdCBudWxsLCByZXBvcHVsYXRlIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudCdzIGNoaWxkcmVuOlxuXHRcdGV4Y2Vzc0RvbUNoaWxkcmVuID1cblx0XHRcdG5vZGVUeXBlID09ICd0ZXh0YXJlYScgJiYgbmV3UHJvcHMuZGVmYXVsdFZhbHVlICE9IE5VTExcblx0XHRcdFx0PyBOVUxMXG5cdFx0XHRcdDogZXhjZXNzRG9tQ2hpbGRyZW4gJiYgc2xpY2UuY2FsbChkb20uY2hpbGROb2Rlcyk7XG5cblx0XHQvLyBJZiB3ZSBhcmUgaW4gYSBzaXR1YXRpb24gd2hlcmUgd2UgYXJlIG5vdCBoeWRyYXRpbmcgYnV0IGFyZSB1c2luZ1xuXHRcdC8vIGV4aXN0aW5nIERPTSAoZS5nLiByZXBsYWNlTm9kZSkgd2Ugc2hvdWxkIHJlYWQgdGhlIGV4aXN0aW5nIERPTVxuXHRcdC8vIGF0dHJpYnV0ZXMgdG8gZGlmZiB0aGVtXG5cdFx0aWYgKCFpc0h5ZHJhdGluZyAmJiBleGNlc3NEb21DaGlsZHJlbiAhPSBOVUxMKSB7XG5cdFx0XHRvbGRQcm9wcyA9IHt9O1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IGRvbS5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhbHVlID0gZG9tLmF0dHJpYnV0ZXNbaV07XG5cdFx0XHRcdG9sZFByb3BzW3ZhbHVlLm5hbWVdID0gdmFsdWUudmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChpIGluIG9sZFByb3BzKSB7XG5cdFx0XHR2YWx1ZSA9IG9sZFByb3BzW2ldO1xuXHRcdFx0aWYgKGkgPT0gJ2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MJykge1xuXHRcdFx0XHRvbGRIdG1sID0gdmFsdWU7XG5cdFx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0XHRpICE9ICdjaGlsZHJlbicgJiZcblx0XHRcdFx0IShpIGluIG5ld1Byb3BzKSAmJlxuXHRcdFx0XHQhKGkgPT0gJ3ZhbHVlJyAmJiAnZGVmYXVsdFZhbHVlJyBpbiBuZXdQcm9wcykgJiZcblx0XHRcdFx0IShpID09ICdjaGVja2VkJyAmJiAnZGVmYXVsdENoZWNrZWQnIGluIG5ld1Byb3BzKVxuXHRcdFx0KSB7XG5cdFx0XHRcdHNldFByb3BlcnR5KGRvbSwgaSwgTlVMTCwgdmFsdWUsIG5hbWVzcGFjZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gRHVyaW5nIGh5ZHJhdGlvbiwgcHJvcHMgYXJlIG5vdCBkaWZmZWQgYXQgYWxsIChpbmNsdWRpbmcgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpXG5cdFx0Ly8gQFRPRE8gd2Ugc2hvdWxkIHdhcm4gaW4gZGVidWcgbW9kZSB3aGVuIHByb3BzIGRvbid0IG1hdGNoIGhlcmUuXG5cdFx0Zm9yIChpIGluIG5ld1Byb3BzKSB7XG5cdFx0XHR2YWx1ZSA9IG5ld1Byb3BzW2ldO1xuXHRcdFx0aWYgKGkgPT0gJ2NoaWxkcmVuJykge1xuXHRcdFx0XHRuZXdDaGlsZHJlbiA9IHZhbHVlO1xuXHRcdFx0fSBlbHNlIGlmIChpID09ICdkYW5nZXJvdXNseVNldElubmVySFRNTCcpIHtcblx0XHRcdFx0bmV3SHRtbCA9IHZhbHVlO1xuXHRcdFx0fSBlbHNlIGlmIChpID09ICd2YWx1ZScpIHtcblx0XHRcdFx0aW5wdXRWYWx1ZSA9IHZhbHVlO1xuXHRcdFx0fSBlbHNlIGlmIChpID09ICdjaGVja2VkJykge1xuXHRcdFx0XHRjaGVja2VkID0gdmFsdWU7XG5cdFx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0XHQoIWlzSHlkcmF0aW5nIHx8IHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSAmJlxuXHRcdFx0XHRvbGRQcm9wc1tpXSAhPT0gdmFsdWVcblx0XHRcdCkge1xuXHRcdFx0XHRzZXRQcm9wZXJ0eShkb20sIGksIHZhbHVlLCBvbGRQcm9wc1tpXSwgbmFtZXNwYWNlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBJZiB0aGUgbmV3IHZub2RlIGRpZG4ndCBoYXZlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLCBkaWZmIGl0cyBjaGlsZHJlblxuXHRcdGlmIChuZXdIdG1sKSB7XG5cdFx0XHQvLyBBdm9pZCByZS1hcHBseWluZyB0aGUgc2FtZSAnX19odG1sJyBpZiBpdCBkaWQgbm90IGNoYW5nZWQgYmV0d2VlbiByZS1yZW5kZXJcblx0XHRcdGlmIChcblx0XHRcdFx0IWlzSHlkcmF0aW5nICYmXG5cdFx0XHRcdCghb2xkSHRtbCB8fFxuXHRcdFx0XHRcdChuZXdIdG1sLl9faHRtbCAhPSBvbGRIdG1sLl9faHRtbCAmJiBuZXdIdG1sLl9faHRtbCAhPSBkb20uaW5uZXJIVE1MKSlcblx0XHRcdCkge1xuXHRcdFx0XHRkb20uaW5uZXJIVE1MID0gbmV3SHRtbC5fX2h0bWw7XG5cdFx0XHR9XG5cblx0XHRcdG5ld1ZOb2RlLl9jaGlsZHJlbiA9IFtdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAob2xkSHRtbCkgZG9tLmlubmVySFRNTCA9ICcnO1xuXG5cdFx0XHRkaWZmQ2hpbGRyZW4oXG5cdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0XHRcdFx0bmV3Vk5vZGUudHlwZSA9PSAndGVtcGxhdGUnID8gZG9tLmNvbnRlbnQgOiBkb20sXG5cdFx0XHRcdGlzQXJyYXkobmV3Q2hpbGRyZW4pID8gbmV3Q2hpbGRyZW4gOiBbbmV3Q2hpbGRyZW5dLFxuXHRcdFx0XHRuZXdWTm9kZSxcblx0XHRcdFx0b2xkVk5vZGUsXG5cdFx0XHRcdGdsb2JhbENvbnRleHQsXG5cdFx0XHRcdG5vZGVUeXBlID09ICdmb3JlaWduT2JqZWN0JyA/IFhIVE1MX05BTUVTUEFDRSA6IG5hbWVzcGFjZSxcblx0XHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdFx0XHRcdGNvbW1pdFF1ZXVlLFxuXHRcdFx0XHRleGNlc3NEb21DaGlsZHJlblxuXHRcdFx0XHRcdD8gZXhjZXNzRG9tQ2hpbGRyZW5bMF1cblx0XHRcdFx0XHQ6IG9sZFZOb2RlLl9jaGlsZHJlbiAmJiBnZXREb21TaWJsaW5nKG9sZFZOb2RlLCAwKSxcblx0XHRcdFx0aXNIeWRyYXRpbmcsXG5cdFx0XHRcdHJlZlF1ZXVlXG5cdFx0XHQpO1xuXG5cdFx0XHQvLyBSZW1vdmUgY2hpbGRyZW4gdGhhdCBhcmUgbm90IHBhcnQgb2YgYW55IHZub2RlLlxuXHRcdFx0aWYgKGV4Y2Vzc0RvbUNoaWxkcmVuICE9IE5VTEwpIHtcblx0XHRcdFx0Zm9yIChpID0gZXhjZXNzRG9tQ2hpbGRyZW4ubGVuZ3RoOyBpLS07ICkge1xuXHRcdFx0XHRcdHJlbW92ZU5vZGUoZXhjZXNzRG9tQ2hpbGRyZW5baV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQXMgYWJvdmUsIGRvbid0IGRpZmYgcHJvcHMgZHVyaW5nIGh5ZHJhdGlvblxuXHRcdGlmICghaXNIeWRyYXRpbmcgfHwgbm9kZVR5cGUgPT0gJ3RleHRhcmVhJykge1xuXHRcdFx0aSA9ICd2YWx1ZSc7XG5cdFx0XHRpZiAobm9kZVR5cGUgPT0gJ3Byb2dyZXNzJyAmJiBpbnB1dFZhbHVlID09IE5VTEwpIHtcblx0XHRcdFx0ZG9tLnJlbW92ZUF0dHJpYnV0ZSgndmFsdWUnKTtcblx0XHRcdH0gZWxzZSBpZiAoXG5cdFx0XHRcdGlucHV0VmFsdWUgIT0gVU5ERUZJTkVEICYmXG5cdFx0XHRcdC8vICMyNzU2IEZvciB0aGUgPHByb2dyZXNzPi1lbGVtZW50IHRoZSBpbml0aWFsIHZhbHVlIGlzIDAsXG5cdFx0XHRcdC8vIGRlc3BpdGUgdGhlIGF0dHJpYnV0ZSBub3QgYmVpbmcgcHJlc2VudC4gV2hlbiB0aGUgYXR0cmlidXRlXG5cdFx0XHRcdC8vIGlzIG1pc3NpbmcgdGhlIHByb2dyZXNzIGJhciBpcyB0cmVhdGVkIGFzIGluZGV0ZXJtaW5hdGUuXG5cdFx0XHRcdC8vIFRvIGZpeCB0aGF0IHdlJ2xsIGFsd2F5cyB1cGRhdGUgaXQgd2hlbiBpdCBpcyAwIGZvciBwcm9ncmVzcyBlbGVtZW50c1xuXHRcdFx0XHQoaW5wdXRWYWx1ZSAhPT0gZG9tW2ldIHx8XG5cdFx0XHRcdFx0KG5vZGVUeXBlID09ICdwcm9ncmVzcycgJiYgIWlucHV0VmFsdWUpIHx8XG5cdFx0XHRcdFx0Ly8gVGhpcyBpcyBvbmx5IGZvciBJRSAxMSB0byBmaXggPHNlbGVjdD4gdmFsdWUgbm90IGJlaW5nIHVwZGF0ZWQuXG5cdFx0XHRcdFx0Ly8gVG8gYXZvaWQgYSBzdGFsZSBzZWxlY3QgdmFsdWUgd2UgbmVlZCB0byBzZXQgdGhlIG9wdGlvbi52YWx1ZVxuXHRcdFx0XHRcdC8vIGFnYWluLCB3aGljaCB0cmlnZ2VycyBJRTExIHRvIHJlLWV2YWx1YXRlIHRoZSBzZWxlY3QgdmFsdWVcblx0XHRcdFx0XHQobm9kZVR5cGUgPT0gJ29wdGlvbicgJiYgaW5wdXRWYWx1ZSAhPSBvbGRQcm9wc1tpXSkpXG5cdFx0XHQpIHtcblx0XHRcdFx0c2V0UHJvcGVydHkoZG9tLCBpLCBpbnB1dFZhbHVlLCBvbGRQcm9wc1tpXSwgbmFtZXNwYWNlKTtcblx0XHRcdH1cblxuXHRcdFx0aSA9ICdjaGVja2VkJztcblx0XHRcdGlmIChjaGVja2VkICE9IFVOREVGSU5FRCAmJiBjaGVja2VkICE9IGRvbVtpXSkge1xuXHRcdFx0XHRzZXRQcm9wZXJ0eShkb20sIGksIGNoZWNrZWQsIG9sZFByb3BzW2ldLCBuYW1lc3BhY2UpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBkb207XG59XG5cbi8qKlxuICogSW52b2tlIG9yIHVwZGF0ZSBhIHJlZiwgZGVwZW5kaW5nIG9uIHdoZXRoZXIgaXQgaXMgYSBmdW5jdGlvbiBvciBvYmplY3QgcmVmLlxuICogQHBhcmFtIHtSZWY8YW55PiAmIHsgX3VubW91bnQ/OiB1bmtub3duIH19IHJlZlxuICogQHBhcmFtIHthbnl9IHZhbHVlXG4gKiBAcGFyYW0ge1ZOb2RlfSB2bm9kZVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlSZWYocmVmLCB2YWx1ZSwgdm5vZGUpIHtcblx0dHJ5IHtcblx0XHRpZiAodHlwZW9mIHJlZiA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRsZXQgaGFzUmVmVW5tb3VudCA9IHR5cGVvZiByZWYuX3VubW91bnQgPT0gJ2Z1bmN0aW9uJztcblx0XHRcdGlmIChoYXNSZWZVbm1vdW50KSB7XG5cdFx0XHRcdC8vIEB0cy1pZ25vcmUgVFMgZG9lc24ndCBsaWtlIG1vdmluZyBuYXJyb3dpbmcgY2hlY2tzIGludG8gdmFyaWFibGVzXG5cdFx0XHRcdHJlZi5fdW5tb3VudCgpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIWhhc1JlZlVubW91bnQgfHwgdmFsdWUgIT0gTlVMTCkge1xuXHRcdFx0XHQvLyBTdG9yZSB0aGUgY2xlYW51cCBmdW5jdGlvbiBvbiB0aGUgZnVuY3Rpb25cblx0XHRcdFx0Ly8gaW5zdGFuY2Ugb2JqZWN0IGl0c2VsZiB0byBhdm9pZCBzaGFwZVxuXHRcdFx0XHQvLyB0cmFuc2l0aW9uaW5nIHZub2RlXG5cdFx0XHRcdHJlZi5fdW5tb3VudCA9IHJlZih2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHJlZi5jdXJyZW50ID0gdmFsdWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRvcHRpb25zLl9jYXRjaEVycm9yKGUsIHZub2RlKTtcblx0fVxufVxuXG4vKipcbiAqIFVubW91bnQgYSB2aXJ0dWFsIG5vZGUgZnJvbSB0aGUgdHJlZSBhbmQgYXBwbHkgRE9NIGNoYW5nZXNcbiAqIEBwYXJhbSB7Vk5vZGV9IHZub2RlIFRoZSB2aXJ0dWFsIG5vZGUgdG8gdW5tb3VudFxuICogQHBhcmFtIHtWTm9kZX0gcGFyZW50Vk5vZGUgVGhlIHBhcmVudCBvZiB0aGUgVk5vZGUgdGhhdCBpbml0aWF0ZWQgdGhlIHVubW91bnRcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3NraXBSZW1vdmVdIEZsYWcgdGhhdCBpbmRpY2F0ZXMgdGhhdCBhIHBhcmVudCBub2RlIG9mIHRoZVxuICogY3VycmVudCBlbGVtZW50IGlzIGFscmVhZHkgZGV0YWNoZWQgZnJvbSB0aGUgRE9NLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdW5tb3VudCh2bm9kZSwgcGFyZW50Vk5vZGUsIHNraXBSZW1vdmUpIHtcblx0bGV0IHI7XG5cdGlmIChvcHRpb25zLnVubW91bnQpIG9wdGlvbnMudW5tb3VudCh2bm9kZSk7XG5cblx0aWYgKChyID0gdm5vZGUucmVmKSkge1xuXHRcdGlmICghci5jdXJyZW50IHx8IHIuY3VycmVudCA9PSB2bm9kZS5fZG9tKSB7XG5cdFx0XHRhcHBseVJlZihyLCBOVUxMLCBwYXJlbnRWTm9kZSk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKChyID0gdm5vZGUuX2NvbXBvbmVudCkgIT0gTlVMTCkge1xuXHRcdGlmIChyLmNvbXBvbmVudFdpbGxVbm1vdW50KSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRyLmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdG9wdGlvbnMuX2NhdGNoRXJyb3IoZSwgcGFyZW50Vk5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHIuYmFzZSA9IHIuX3BhcmVudERvbSA9IHIuX2dsb2JhbENvbnRleHQgPSBOVUxMO1xuXHR9XG5cblx0aWYgKChyID0gdm5vZGUuX2NoaWxkcmVuKSkge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgci5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKHJbaV0pIHtcblx0XHRcdFx0dW5tb3VudChcblx0XHRcdFx0XHRyW2ldLFxuXHRcdFx0XHRcdHBhcmVudFZOb2RlLFxuXHRcdFx0XHRcdHNraXBSZW1vdmUgfHwgdHlwZW9mIHZub2RlLnR5cGUgIT0gJ2Z1bmN0aW9uJ1xuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGlmICghc2tpcFJlbW92ZSkge1xuXHRcdHJlbW92ZU5vZGUodm5vZGUuX2RvbSk7XG5cdH1cblxuXHR2bm9kZS5fY29tcG9uZW50ID0gdm5vZGUuX3BhcmVudCA9IHZub2RlLl9kb20gPSBVTkRFRklORUQ7XG59XG5cbi8qKiBUaGUgYC5yZW5kZXIoKWAgbWV0aG9kIGZvciBhIFBGQyBiYWNraW5nIGluc3RhbmNlLiAqL1xuZnVuY3Rpb24gZG9SZW5kZXIocHJvcHMsIHN0YXRlLCBjb250ZXh0KSB7XG5cdHJldHVybiB0aGlzLmNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KTtcbn1cbiIsICJpbXBvcnQgeyBFTVBUWV9PQkosIE5VTEwgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBjb21taXRSb290LCBkaWZmIH0gZnJvbSAnLi9kaWZmL2luZGV4JztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIEZyYWdtZW50IH0gZnJvbSAnLi9jcmVhdGUtZWxlbWVudCc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuL29wdGlvbnMnO1xuaW1wb3J0IHsgc2xpY2UgfSBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIFJlbmRlciBhIFByZWFjdCB2aXJ0dWFsIG5vZGUgaW50byBhIERPTSBlbGVtZW50XG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudENoaWxkfSB2bm9kZSBUaGUgdmlydHVhbCBub2RlIHRvIHJlbmRlclxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50fSBwYXJlbnREb20gVGhlIERPTSBlbGVtZW50IHRvIHJlbmRlciBpbnRvXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnQgfCBvYmplY3R9IFtyZXBsYWNlTm9kZV0gT3B0aW9uYWw6IEF0dGVtcHQgdG8gcmUtdXNlIGFuXG4gKiBleGlzdGluZyBET00gdHJlZSByb290ZWQgYXQgYHJlcGxhY2VOb2RlYFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKHZub2RlLCBwYXJlbnREb20sIHJlcGxhY2VOb2RlKSB7XG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wcmVhY3Rqcy9wcmVhY3QvaXNzdWVzLzM3OTRcblx0aWYgKHBhcmVudERvbSA9PSBkb2N1bWVudCkge1xuXHRcdHBhcmVudERvbSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblx0fVxuXG5cdGlmIChvcHRpb25zLl9yb290KSBvcHRpb25zLl9yb290KHZub2RlLCBwYXJlbnREb20pO1xuXG5cdC8vIFdlIGFidXNlIHRoZSBgcmVwbGFjZU5vZGVgIHBhcmFtZXRlciBpbiBgaHlkcmF0ZSgpYCB0byBzaWduYWwgaWYgd2UgYXJlIGluXG5cdC8vIGh5ZHJhdGlvbiBtb2RlIG9yIG5vdCBieSBwYXNzaW5nIHRoZSBgaHlkcmF0ZWAgZnVuY3Rpb24gaW5zdGVhZCBvZiBhIERPTVxuXHQvLyBlbGVtZW50Li5cblx0bGV0IGlzSHlkcmF0aW5nID0gdHlwZW9mIHJlcGxhY2VOb2RlID09ICdmdW5jdGlvbic7XG5cblx0Ly8gVG8gYmUgYWJsZSB0byBzdXBwb3J0IGNhbGxpbmcgYHJlbmRlcigpYCBtdWx0aXBsZSB0aW1lcyBvbiB0aGUgc2FtZVxuXHQvLyBET00gbm9kZSwgd2UgbmVlZCB0byBvYnRhaW4gYSByZWZlcmVuY2UgdG8gdGhlIHByZXZpb3VzIHRyZWUuIFdlIGRvXG5cdC8vIHRoaXMgYnkgYXNzaWduaW5nIGEgbmV3IGBfY2hpbGRyZW5gIHByb3BlcnR5IHRvIERPTSBub2RlcyB3aGljaCBwb2ludHNcblx0Ly8gdG8gdGhlIGxhc3QgcmVuZGVyZWQgdHJlZS4gQnkgZGVmYXVsdCB0aGlzIHByb3BlcnR5IGlzIG5vdCBwcmVzZW50LCB3aGljaFxuXHQvLyBtZWFucyB0aGF0IHdlIGFyZSBtb3VudGluZyBhIG5ldyB0cmVlIGZvciB0aGUgZmlyc3QgdGltZS5cblx0bGV0IG9sZFZOb2RlID0gaXNIeWRyYXRpbmdcblx0XHQ/IE5VTExcblx0XHQ6IChyZXBsYWNlTm9kZSAmJiByZXBsYWNlTm9kZS5fY2hpbGRyZW4pIHx8IHBhcmVudERvbS5fY2hpbGRyZW47XG5cblx0dm5vZGUgPSAoKCFpc0h5ZHJhdGluZyAmJiByZXBsYWNlTm9kZSkgfHwgcGFyZW50RG9tKS5fY2hpbGRyZW4gPVxuXHRcdGNyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIE5VTEwsIFt2bm9kZV0pO1xuXG5cdC8vIExpc3Qgb2YgZWZmZWN0cyB0aGF0IG5lZWQgdG8gYmUgY2FsbGVkIGFmdGVyIGRpZmZpbmcuXG5cdGxldCBjb21taXRRdWV1ZSA9IFtdLFxuXHRcdHJlZlF1ZXVlID0gW107XG5cdGRpZmYoXG5cdFx0cGFyZW50RG9tLFxuXHRcdC8vIERldGVybWluZSB0aGUgbmV3IHZub2RlIHRyZWUgYW5kIHN0b3JlIGl0IG9uIHRoZSBET00gZWxlbWVudCBvblxuXHRcdC8vIG91ciBjdXN0b20gYF9jaGlsZHJlbmAgcHJvcGVydHkuXG5cdFx0dm5vZGUsXG5cdFx0b2xkVk5vZGUgfHwgRU1QVFlfT0JKLFxuXHRcdEVNUFRZX09CSixcblx0XHRwYXJlbnREb20ubmFtZXNwYWNlVVJJLFxuXHRcdCFpc0h5ZHJhdGluZyAmJiByZXBsYWNlTm9kZVxuXHRcdFx0PyBbcmVwbGFjZU5vZGVdXG5cdFx0XHQ6IG9sZFZOb2RlXG5cdFx0XHRcdD8gTlVMTFxuXHRcdFx0XHQ6IHBhcmVudERvbS5maXJzdENoaWxkXG5cdFx0XHRcdFx0PyBzbGljZS5jYWxsKHBhcmVudERvbS5jaGlsZE5vZGVzKVxuXHRcdFx0XHRcdDogTlVMTCxcblx0XHRjb21taXRRdWV1ZSxcblx0XHQhaXNIeWRyYXRpbmcgJiYgcmVwbGFjZU5vZGVcblx0XHRcdD8gcmVwbGFjZU5vZGVcblx0XHRcdDogb2xkVk5vZGVcblx0XHRcdFx0PyBvbGRWTm9kZS5fZG9tXG5cdFx0XHRcdDogcGFyZW50RG9tLmZpcnN0Q2hpbGQsXG5cdFx0aXNIeWRyYXRpbmcsXG5cdFx0cmVmUXVldWVcblx0KTtcblxuXHQvLyBGbHVzaCBhbGwgcXVldWVkIGVmZmVjdHNcblx0Y29tbWl0Um9vdChjb21taXRRdWV1ZSwgdm5vZGUsIHJlZlF1ZXVlKTtcblxuXHQvLyBUaGUgbGl2ZSBjaGlsZHJlbiBhcmUgdHJhY2tlZCBvbiBfY2hpbGRyZW4gYWZ0ZXIgZGlmZmluZy5cblx0dm5vZGUucHJvcHMuY2hpbGRyZW4gPSBOVUxMO1xufVxuXG4vKipcbiAqIFVwZGF0ZSBhbiBleGlzdGluZyBET00gZWxlbWVudCB3aXRoIGRhdGEgZnJvbSBhIFByZWFjdCB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50Q2hpbGR9IHZub2RlIFRoZSB2aXJ0dWFsIG5vZGUgdG8gcmVuZGVyXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IHBhcmVudERvbSBUaGUgRE9NIGVsZW1lbnQgdG8gdXBkYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoeWRyYXRlKHZub2RlLCBwYXJlbnREb20pIHtcblx0cmVuZGVyKHZub2RlLCBwYXJlbnREb20sIGh5ZHJhdGUpO1xufVxuIiwgImltcG9ydCB7IGFzc2lnbiwgc2xpY2UgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHsgY3JlYXRlVk5vZGUgfSBmcm9tICcuL2NyZWF0ZS1lbGVtZW50JztcbmltcG9ydCB7IE5VTEwsIFVOREVGSU5FRCB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBDbG9uZXMgdGhlIGdpdmVuIFZOb2RlLCBvcHRpb25hbGx5IGFkZGluZyBhdHRyaWJ1dGVzL3Byb3BzIGFuZCByZXBsYWNpbmcgaXRzXG4gKiBjaGlsZHJlbi5cbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9IHZub2RlIFRoZSB2aXJ0dWFsIERPTSBlbGVtZW50IHRvIGNsb25lXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHMgQXR0cmlidXRlcy9wcm9wcyB0byBhZGQgd2hlbiBjbG9uaW5nXG4gKiBAcGFyYW0ge0FycmF5PGltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudENoaWxkcmVuPn0gcmVzdCBBbnkgYWRkaXRpb25hbCBhcmd1bWVudHMgd2lsbCBiZSB1c2VkXG4gKiBhcyByZXBsYWNlbWVudCBjaGlsZHJlbi5cbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb25lRWxlbWVudCh2bm9kZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG5cdGxldCBub3JtYWxpemVkUHJvcHMgPSBhc3NpZ24oe30sIHZub2RlLnByb3BzKSxcblx0XHRrZXksXG5cdFx0cmVmLFxuXHRcdGk7XG5cblx0bGV0IGRlZmF1bHRQcm9wcztcblxuXHRpZiAodm5vZGUudHlwZSAmJiB2bm9kZS50eXBlLmRlZmF1bHRQcm9wcykge1xuXHRcdGRlZmF1bHRQcm9wcyA9IHZub2RlLnR5cGUuZGVmYXVsdFByb3BzO1xuXHR9XG5cblx0Zm9yIChpIGluIHByb3BzKSB7XG5cdFx0aWYgKGkgPT0gJ2tleScpIGtleSA9IHByb3BzW2ldO1xuXHRcdGVsc2UgaWYgKGkgPT0gJ3JlZicpIHJlZiA9IHByb3BzW2ldO1xuXHRcdGVsc2UgaWYgKHByb3BzW2ldID09PSBVTkRFRklORUQgJiYgZGVmYXVsdFByb3BzICE9IFVOREVGSU5FRCkge1xuXHRcdFx0bm9ybWFsaXplZFByb3BzW2ldID0gZGVmYXVsdFByb3BzW2ldO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRub3JtYWxpemVkUHJvcHNbaV0gPSBwcm9wc1tpXTtcblx0XHR9XG5cdH1cblxuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpIHtcblx0XHRub3JtYWxpemVkUHJvcHMuY2hpbGRyZW4gPVxuXHRcdFx0YXJndW1lbnRzLmxlbmd0aCA+IDMgPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMikgOiBjaGlsZHJlbjtcblx0fVxuXG5cdHJldHVybiBjcmVhdGVWTm9kZShcblx0XHR2bm9kZS50eXBlLFxuXHRcdG5vcm1hbGl6ZWRQcm9wcyxcblx0XHRrZXkgfHwgdm5vZGUua2V5LFxuXHRcdHJlZiB8fCB2bm9kZS5yZWYsXG5cdFx0TlVMTFxuXHQpO1xufVxuIiwgImltcG9ydCB7IE5VTEwgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG4vKipcbiAqIEZpbmQgdGhlIGNsb3Nlc3QgZXJyb3IgYm91bmRhcnkgdG8gYSB0aHJvd24gZXJyb3IgYW5kIGNhbGwgaXRcbiAqIEBwYXJhbSB7b2JqZWN0fSBlcnJvciBUaGUgdGhyb3duIHZhbHVlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5WTm9kZX0gdm5vZGUgVGhlIHZub2RlIHRoYXQgdGhyZXcgdGhlIGVycm9yIHRoYXQgd2FzIGNhdWdodCAoZXhjZXB0XG4gKiBmb3IgdW5tb3VudGluZyB3aGVuIHRoaXMgcGFyYW1ldGVyIGlzIHRoZSBoaWdoZXN0IHBhcmVudCB0aGF0IHdhcyBiZWluZ1xuICogdW5tb3VudGVkKVxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IFtvbGRWTm9kZV1cbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkVycm9ySW5mb30gW2Vycm9ySW5mb11cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9jYXRjaEVycm9yKGVycm9yLCB2bm9kZSwgb2xkVk5vZGUsIGVycm9ySW5mbykge1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5Db21wb25lbnR9ICovXG5cdGxldCBjb21wb25lbnQsXG5cdFx0LyoqIEB0eXBlIHtpbXBvcnQoJy4uL2ludGVybmFsJykuQ29tcG9uZW50VHlwZX0gKi9cblx0XHRjdG9yLFxuXHRcdC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cblx0XHRoYW5kbGVkO1xuXG5cdGZvciAoOyAodm5vZGUgPSB2bm9kZS5fcGFyZW50KTsgKSB7XG5cdFx0aWYgKChjb21wb25lbnQgPSB2bm9kZS5fY29tcG9uZW50KSAmJiAhY29tcG9uZW50Ll9wcm9jZXNzaW5nRXhjZXB0aW9uKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjdG9yID0gY29tcG9uZW50LmNvbnN0cnVjdG9yO1xuXG5cdFx0XHRcdGlmIChjdG9yICYmIGN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yICE9IE5VTEwpIHtcblx0XHRcdFx0XHRjb21wb25lbnQuc2V0U3RhdGUoY3Rvci5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IoZXJyb3IpKTtcblx0XHRcdFx0XHRoYW5kbGVkID0gY29tcG9uZW50Ll9kaXJ0eTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChjb21wb25lbnQuY29tcG9uZW50RGlkQ2F0Y2ggIT0gTlVMTCkge1xuXHRcdFx0XHRcdGNvbXBvbmVudC5jb21wb25lbnREaWRDYXRjaChlcnJvciwgZXJyb3JJbmZvIHx8IHt9KTtcblx0XHRcdFx0XHRoYW5kbGVkID0gY29tcG9uZW50Ll9kaXJ0eTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFRoaXMgaXMgYW4gZXJyb3IgYm91bmRhcnkuIE1hcmsgaXQgYXMgaGF2aW5nIGJhaWxlZCBvdXQsIGFuZCB3aGV0aGVyIGl0IHdhcyBtaWQtaHlkcmF0aW9uLlxuXHRcdFx0XHRpZiAoaGFuZGxlZCkge1xuXHRcdFx0XHRcdHJldHVybiAoY29tcG9uZW50Ll9wZW5kaW5nRXJyb3IgPSBjb21wb25lbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdGVycm9yID0gZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHR0aHJvdyBlcnJvcjtcbn1cbiIsICJpbXBvcnQgeyBvcHRpb25zIGFzIF9vcHRpb25zIH0gZnJvbSAncHJlYWN0JztcblxuLyoqIEB0eXBlIHtudW1iZXJ9ICovXG5sZXQgY3VycmVudEluZGV4O1xuXG4vKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gKi9cbmxldCBjdXJyZW50Q29tcG9uZW50O1xuXG4vKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gKi9cbmxldCBwcmV2aW91c0NvbXBvbmVudDtcblxuLyoqIEB0eXBlIHtudW1iZXJ9ICovXG5sZXQgY3VycmVudEhvb2sgPSAwO1xuXG4vKiogQHR5cGUge0FycmF5PGltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudD59ICovXG5sZXQgYWZ0ZXJQYWludEVmZmVjdHMgPSBbXTtcblxuLy8gQ2FzdCB0byB1c2UgaW50ZXJuYWwgT3B0aW9ucyB0eXBlXG5jb25zdCBvcHRpb25zID0gLyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5PcHRpb25zfSAqLyAoX29wdGlvbnMpO1xuXG5sZXQgb2xkQmVmb3JlRGlmZiA9IG9wdGlvbnMuX2RpZmY7XG5sZXQgb2xkQmVmb3JlUmVuZGVyID0gb3B0aW9ucy5fcmVuZGVyO1xubGV0IG9sZEFmdGVyRGlmZiA9IG9wdGlvbnMuZGlmZmVkO1xubGV0IG9sZENvbW1pdCA9IG9wdGlvbnMuX2NvbW1pdDtcbmxldCBvbGRCZWZvcmVVbm1vdW50ID0gb3B0aW9ucy51bm1vdW50O1xubGV0IG9sZFJvb3QgPSBvcHRpb25zLl9yb290O1xuXG4vLyBXZSB0YWtlIHRoZSBtaW5pbXVtIHRpbWVvdXQgZm9yIHJlcXVlc3RBbmltYXRpb25GcmFtZSB0byBlbnN1cmUgdGhhdFxuLy8gdGhlIGNhbGxiYWNrIGlzIGludm9rZWQgYWZ0ZXIgdGhlIG5leHQgZnJhbWUuIDM1bXMgaXMgYmFzZWQgb24gYSAzMGh6XG4vLyByZWZyZXNoIHJhdGUsIHdoaWNoIGlzIHRoZSBtaW5pbXVtIHJhdGUgZm9yIGEgc21vb3RoIHVzZXIgZXhwZXJpZW5jZS5cbmNvbnN0IFJBRl9USU1FT1VUID0gMzU7XG5sZXQgcHJldlJhZjtcblxuLyoqIEB0eXBlIHsodm5vZGU6IGltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlKSA9PiB2b2lkfSAqL1xub3B0aW9ucy5fZGlmZiA9IHZub2RlID0+IHtcblx0Y3VycmVudENvbXBvbmVudCA9IG51bGw7XG5cdGlmIChvbGRCZWZvcmVEaWZmKSBvbGRCZWZvcmVEaWZmKHZub2RlKTtcbn07XG5cbm9wdGlvbnMuX3Jvb3QgPSAodm5vZGUsIHBhcmVudERvbSkgPT4ge1xuXHRpZiAodm5vZGUgJiYgcGFyZW50RG9tLl9jaGlsZHJlbiAmJiBwYXJlbnREb20uX2NoaWxkcmVuLl9tYXNrKSB7XG5cdFx0dm5vZGUuX21hc2sgPSBwYXJlbnREb20uX2NoaWxkcmVuLl9tYXNrO1xuXHR9XG5cblx0aWYgKG9sZFJvb3QpIG9sZFJvb3Qodm5vZGUsIHBhcmVudERvbSk7XG59O1xuXG4vKiogQHR5cGUgeyh2bm9kZTogaW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGUpID0+IHZvaWR9ICovXG5vcHRpb25zLl9yZW5kZXIgPSB2bm9kZSA9PiB7XG5cdGlmIChvbGRCZWZvcmVSZW5kZXIpIG9sZEJlZm9yZVJlbmRlcih2bm9kZSk7XG5cblx0Y3VycmVudENvbXBvbmVudCA9IHZub2RlLl9jb21wb25lbnQ7XG5cdGN1cnJlbnRJbmRleCA9IDA7XG5cblx0Y29uc3QgaG9va3MgPSBjdXJyZW50Q29tcG9uZW50Ll9faG9va3M7XG5cdGlmIChob29rcykge1xuXHRcdGlmIChwcmV2aW91c0NvbXBvbmVudCA9PT0gY3VycmVudENvbXBvbmVudCkge1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzID0gW107XG5cdFx0XHRjdXJyZW50Q29tcG9uZW50Ll9yZW5kZXJDYWxsYmFja3MgPSBbXTtcblx0XHRcdGhvb2tzLl9saXN0LnNvbWUoaG9va0l0ZW0gPT4ge1xuXHRcdFx0XHRpZiAoaG9va0l0ZW0uX25leHRWYWx1ZSkge1xuXHRcdFx0XHRcdGhvb2tJdGVtLl92YWx1ZSA9IGhvb2tJdGVtLl9uZXh0VmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0aG9va0l0ZW0uX3BlbmRpbmdBcmdzID0gaG9va0l0ZW0uX25leHRWYWx1ZSA9IHVuZGVmaW5lZDtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRob29rcy5fcGVuZGluZ0VmZmVjdHMuc29tZShpbnZva2VDbGVhbnVwKTtcblx0XHRcdGhvb2tzLl9wZW5kaW5nRWZmZWN0cy5zb21lKGludm9rZUVmZmVjdCk7XG5cdFx0XHRob29rcy5fcGVuZGluZ0VmZmVjdHMgPSBbXTtcblx0XHRcdGN1cnJlbnRJbmRleCA9IDA7XG5cdFx0fVxuXHR9XG5cdHByZXZpb3VzQ29tcG9uZW50ID0gY3VycmVudENvbXBvbmVudDtcbn07XG5cbi8qKiBAdHlwZSB7KHZub2RlOiBpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZSkgPT4gdm9pZH0gKi9cbm9wdGlvbnMuZGlmZmVkID0gdm5vZGUgPT4ge1xuXHRpZiAob2xkQWZ0ZXJEaWZmKSBvbGRBZnRlckRpZmYodm5vZGUpO1xuXG5cdGNvbnN0IGMgPSB2bm9kZS5fY29tcG9uZW50O1xuXHRpZiAoYyAmJiBjLl9faG9va3MpIHtcblx0XHRpZiAoYy5fX2hvb2tzLl9wZW5kaW5nRWZmZWN0cy5sZW5ndGgpIGFmdGVyUGFpbnQoYWZ0ZXJQYWludEVmZmVjdHMucHVzaChjKSk7XG5cdFx0Yy5fX2hvb2tzLl9saXN0LnNvbWUoaG9va0l0ZW0gPT4ge1xuXHRcdFx0aWYgKGhvb2tJdGVtLl9wZW5kaW5nQXJncykge1xuXHRcdFx0XHRob29rSXRlbS5fYXJncyA9IGhvb2tJdGVtLl9wZW5kaW5nQXJncztcblx0XHRcdFx0aG9va0l0ZW0uX3BlbmRpbmdBcmdzID0gdW5kZWZpbmVkO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cdHByZXZpb3VzQ29tcG9uZW50ID0gY3VycmVudENvbXBvbmVudCA9IG51bGw7XG59O1xuXG4vLyBUT0RPOiBJbXByb3ZlIHR5cGluZyBvZiBjb21taXRRdWV1ZSBwYXJhbWV0ZXJcbi8qKiBAdHlwZSB7KHZub2RlOiBpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZSwgY29tbWl0UXVldWU6IGFueSkgPT4gdm9pZH0gKi9cbm9wdGlvbnMuX2NvbW1pdCA9ICh2bm9kZSwgY29tbWl0UXVldWUpID0+IHtcblx0Y29tbWl0UXVldWUuc29tZShjb21wb25lbnQgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb21wb25lbnQuX3JlbmRlckNhbGxiYWNrcy5zb21lKGludm9rZUNsZWFudXApO1xuXHRcdFx0Y29tcG9uZW50Ll9yZW5kZXJDYWxsYmFja3MgPSBjb21wb25lbnQuX3JlbmRlckNhbGxiYWNrcy5maWx0ZXIoY2IgPT5cblx0XHRcdFx0Y2IuX3ZhbHVlID8gaW52b2tlRWZmZWN0KGNiKSA6IHRydWVcblx0XHRcdCk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Y29tbWl0UXVldWUuc29tZShjID0+IHtcblx0XHRcdFx0aWYgKGMuX3JlbmRlckNhbGxiYWNrcykgYy5fcmVuZGVyQ2FsbGJhY2tzID0gW107XG5cdFx0XHR9KTtcblx0XHRcdGNvbW1pdFF1ZXVlID0gW107XG5cdFx0XHRvcHRpb25zLl9jYXRjaEVycm9yKGUsIGNvbXBvbmVudC5fdm5vZGUpO1xuXHRcdH1cblx0fSk7XG5cblx0aWYgKG9sZENvbW1pdCkgb2xkQ29tbWl0KHZub2RlLCBjb21taXRRdWV1ZSk7XG59O1xuXG4vKiogQHR5cGUgeyh2bm9kZTogaW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGUpID0+IHZvaWR9ICovXG5vcHRpb25zLnVubW91bnQgPSB2bm9kZSA9PiB7XG5cdGlmIChvbGRCZWZvcmVVbm1vdW50KSBvbGRCZWZvcmVVbm1vdW50KHZub2RlKTtcblxuXHRjb25zdCBjID0gdm5vZGUuX2NvbXBvbmVudDtcblx0aWYgKGMgJiYgYy5fX2hvb2tzKSB7XG5cdFx0bGV0IGhhc0Vycm9yZWQ7XG5cdFx0Yy5fX2hvb2tzLl9saXN0LnNvbWUocyA9PiB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRpbnZva2VDbGVhbnVwKHMpO1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRoYXNFcnJvcmVkID0gZTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRjLl9faG9va3MgPSB1bmRlZmluZWQ7XG5cdFx0aWYgKGhhc0Vycm9yZWQpIG9wdGlvbnMuX2NhdGNoRXJyb3IoaGFzRXJyb3JlZCwgYy5fdm5vZGUpO1xuXHR9XG59O1xuXG4vKipcbiAqIEdldCBhIGhvb2sncyBzdGF0ZSBmcm9tIHRoZSBjdXJyZW50Q29tcG9uZW50XG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBob29rIHRvIGdldFxuICogQHBhcmFtIHtudW1iZXJ9IHR5cGUgVGhlIGluZGV4IG9mIHRoZSBob29rIHRvIGdldFxuICogQHJldHVybnMge2FueX1cbiAqL1xuZnVuY3Rpb24gZ2V0SG9va1N0YXRlKGluZGV4LCB0eXBlKSB7XG5cdGlmIChvcHRpb25zLl9ob29rKSB7XG5cdFx0b3B0aW9ucy5faG9vayhjdXJyZW50Q29tcG9uZW50LCBpbmRleCwgY3VycmVudEhvb2sgfHwgdHlwZSk7XG5cdH1cblx0Y3VycmVudEhvb2sgPSAwO1xuXG5cdC8vIExhcmdlbHkgaW5zcGlyZWQgYnk6XG5cdC8vICogaHR0cHM6Ly9naXRodWIuY29tL21pY2hhZWwta2xlaW4vZnVuY3kuanMvYmxvYi9mNmJlNzM0NjhlNmVjNDZiMGZmNWFhM2NjNGM5YmFmNzJhMjkwMjVhL3NyYy9ob29rcy9jb3JlX2hvb2tzLm1qc1xuXHQvLyAqIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNoYWVsLWtsZWluL2Z1bmN5LmpzL2Jsb2IvNjUwYmVhYTU4YzQzYzMzYTc0ODIwYTNjOThiM2M3MDc5Y2YyZTMzMy9zcmMvcmVuZGVyZXIubWpzXG5cdC8vIE90aGVyIGltcGxlbWVudGF0aW9ucyB0byBsb29rIGF0OlxuXHQvLyAqIGh0dHBzOi8vY29kZXNhbmRib3guaW8vcy9tbm94MDVxcDhcblx0Y29uc3QgaG9va3MgPVxuXHRcdGN1cnJlbnRDb21wb25lbnQuX19ob29rcyB8fFxuXHRcdChjdXJyZW50Q29tcG9uZW50Ll9faG9va3MgPSB7XG5cdFx0XHRfbGlzdDogW10sXG5cdFx0XHRfcGVuZGluZ0VmZmVjdHM6IFtdXG5cdFx0fSk7XG5cblx0aWYgKGluZGV4ID49IGhvb2tzLl9saXN0Lmxlbmd0aCkge1xuXHRcdGhvb2tzLl9saXN0LnB1c2goe30pO1xuXHR9XG5cblx0cmV0dXJuIGhvb2tzLl9saXN0W2luZGV4XTtcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUge3Vua25vd259IFNcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2luZGV4JykuRGlzcGF0Y2g8aW1wb3J0KCcuL2luZGV4JykuU3RhdGVVcGRhdGVyPFM+Pn0gW2luaXRpYWxTdGF0ZV1cbiAqIEByZXR1cm5zIHtbUywgKHN0YXRlOiBTKSA9PiB2b2lkXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YXRlKGluaXRpYWxTdGF0ZSkge1xuXHRjdXJyZW50SG9vayA9IDE7XG5cdHJldHVybiB1c2VSZWR1Y2VyKGludm9rZU9yUmV0dXJuLCBpbml0aWFsU3RhdGUpO1xufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSB7dW5rbm93bn0gU1xuICogQHRlbXBsYXRlIHt1bmtub3dufSBBXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbmRleCcpLlJlZHVjZXI8UywgQT59IHJlZHVjZXJcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2luZGV4JykuRGlzcGF0Y2g8aW1wb3J0KCcuL2luZGV4JykuU3RhdGVVcGRhdGVyPFM+Pn0gaW5pdGlhbFN0YXRlXG4gKiBAcGFyYW0geyhpbml0aWFsU3RhdGU6IGFueSkgPT4gdm9pZH0gW2luaXRdXG4gKiBAcmV0dXJucyB7WyBTLCAoc3RhdGU6IFMpID0+IHZvaWQgXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlLCBpbml0KSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuUmVkdWNlckhvb2tTdGF0ZX0gKi9cblx0Y29uc3QgaG9va1N0YXRlID0gZ2V0SG9va1N0YXRlKGN1cnJlbnRJbmRleCsrLCAyKTtcblx0aG9va1N0YXRlLl9yZWR1Y2VyID0gcmVkdWNlcjtcblx0aWYgKCFob29rU3RhdGUuX2NvbXBvbmVudCkge1xuXHRcdGhvb2tTdGF0ZS5fdmFsdWUgPSBbXG5cdFx0XHQhaW5pdCA/IGludm9rZU9yUmV0dXJuKHVuZGVmaW5lZCwgaW5pdGlhbFN0YXRlKSA6IGluaXQoaW5pdGlhbFN0YXRlKSxcblxuXHRcdFx0YWN0aW9uID0+IHtcblx0XHRcdFx0Y29uc3QgY3VycmVudFZhbHVlID0gaG9va1N0YXRlLl9uZXh0VmFsdWVcblx0XHRcdFx0XHQ/IGhvb2tTdGF0ZS5fbmV4dFZhbHVlWzBdXG5cdFx0XHRcdFx0OiBob29rU3RhdGUuX3ZhbHVlWzBdO1xuXHRcdFx0XHRjb25zdCBuZXh0VmFsdWUgPSBob29rU3RhdGUuX3JlZHVjZXIoY3VycmVudFZhbHVlLCBhY3Rpb24pO1xuXG5cdFx0XHRcdGlmIChjdXJyZW50VmFsdWUgIT09IG5leHRWYWx1ZSkge1xuXHRcdFx0XHRcdGhvb2tTdGF0ZS5fbmV4dFZhbHVlID0gW25leHRWYWx1ZSwgaG9va1N0YXRlLl92YWx1ZVsxXV07XG5cdFx0XHRcdFx0aG9va1N0YXRlLl9jb21wb25lbnQuc2V0U3RhdGUoe30pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XTtcblxuXHRcdGhvb2tTdGF0ZS5fY29tcG9uZW50ID0gY3VycmVudENvbXBvbmVudDtcblxuXHRcdGlmICghY3VycmVudENvbXBvbmVudC5faGFzU2N1RnJvbUhvb2tzKSB7XG5cdFx0XHRjdXJyZW50Q29tcG9uZW50Ll9oYXNTY3VGcm9tSG9va3MgPSB0cnVlO1xuXHRcdFx0bGV0IHByZXZTY3UgPSBjdXJyZW50Q29tcG9uZW50LnNob3VsZENvbXBvbmVudFVwZGF0ZTtcblx0XHRcdGNvbnN0IHByZXZDV1UgPSBjdXJyZW50Q29tcG9uZW50LmNvbXBvbmVudFdpbGxVcGRhdGU7XG5cblx0XHRcdC8vIElmIHdlJ3JlIGRlYWxpbmcgd2l0aCBhIGZvcmNlZCB1cGRhdGUgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAgd2lsbFxuXHRcdFx0Ly8gbm90IGJlIGNhbGxlZC4gQnV0IHdlIHVzZSB0aGF0IHRvIHVwZGF0ZSB0aGUgaG9vayB2YWx1ZXMsIHNvIHdlXG5cdFx0XHQvLyBuZWVkIHRvIGNhbGwgaXQuXG5cdFx0XHRjdXJyZW50Q29tcG9uZW50LmNvbXBvbmVudFdpbGxVcGRhdGUgPSBmdW5jdGlvbiAocCwgcywgYykge1xuXHRcdFx0XHRpZiAodGhpcy5fZm9yY2UpIHtcblx0XHRcdFx0XHRsZXQgdG1wID0gcHJldlNjdTtcblx0XHRcdFx0XHQvLyBDbGVhciB0byBhdm9pZCBvdGhlciBzQ1UgaG9va3MgZnJvbSBiZWluZyBjYWxsZWRcblx0XHRcdFx0XHRwcmV2U2N1ID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdHVwZGF0ZUhvb2tTdGF0ZShwLCBzLCBjKTtcblx0XHRcdFx0XHRwcmV2U2N1ID0gdG1wO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHByZXZDV1UpIHByZXZDV1UuY2FsbCh0aGlzLCBwLCBzLCBjKTtcblx0XHRcdH07XG5cblx0XHRcdC8vIFRoaXMgU0NVIGhhcyB0aGUgcHVycG9zZSBvZiBiYWlsaW5nIG91dCBhZnRlciByZXBlYXRlZCB1cGRhdGVzXG5cdFx0XHQvLyB0byBzdGF0ZWZ1bCBob29rcy5cblx0XHRcdC8vIHdlIHN0b3JlIHRoZSBuZXh0IHZhbHVlIGluIF9uZXh0VmFsdWVbMF0gYW5kIGtlZXAgZG9pbmcgdGhhdCBmb3IgYWxsXG5cdFx0XHQvLyBzdGF0ZSBzZXR0ZXJzLCBpZiB3ZSBoYXZlIG5leHQgc3RhdGVzIGFuZFxuXHRcdFx0Ly8gYWxsIG5leHQgc3RhdGVzIHdpdGhpbiBhIGNvbXBvbmVudCBlbmQgdXAgYmVpbmcgZXF1YWwgdG8gdGhlaXIgb3JpZ2luYWwgc3RhdGVcblx0XHRcdC8vIHdlIGFyZSBzYWZlIHRvIGJhaWwgb3V0IGZvciB0aGlzIHNwZWNpZmljIGNvbXBvbmVudC5cblx0XHRcdC8qKlxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnRbXCJzaG91bGRDb21wb25lbnRVcGRhdGVcIl19XG5cdFx0XHQgKi9cblx0XHRcdC8vIEB0cy1pZ25vcmUgLSBXZSBkb24ndCB1c2UgVFMgdG8gZG93bnRyYW5zcGlsZVxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWlubmVyLWRlY2xhcmF0aW9uc1xuXHRcdFx0ZnVuY3Rpb24gdXBkYXRlSG9va1N0YXRlKHAsIHMsIGMpIHtcblx0XHRcdFx0aWYgKCFob29rU3RhdGUuX2NvbXBvbmVudC5fX2hvb2tzKSByZXR1cm4gdHJ1ZTtcblxuXHRcdFx0XHQvLyBXZSBjaGVjayB3aGV0aGVyIHdlIGhhdmUgY29tcG9uZW50cyB3aXRoIGEgbmV4dFZhbHVlIHNldCB0aGF0XG5cdFx0XHRcdC8vIGhhdmUgdmFsdWVzIHRoYXQgYXJlbid0IGVxdWFsIHRvIG9uZSBhbm90aGVyIHRoaXMgcHVzaGVzXG5cdFx0XHRcdC8vIHVzIHRvIHVwZGF0ZSBmdXJ0aGVyIGRvd24gdGhlIHRyZWVcblx0XHRcdFx0bGV0IHVwZGF0ZWRIb29rID0gZmFsc2U7XG5cdFx0XHRcdGxldCBzaG91bGRVcGRhdGUgPSBob29rU3RhdGUuX2NvbXBvbmVudC5wcm9wcyAhPT0gcDtcblx0XHRcdFx0aG9va1N0YXRlLl9jb21wb25lbnQuX19ob29rcy5fbGlzdC5zb21lKGhvb2tJdGVtID0+IHtcblx0XHRcdFx0XHRpZiAoaG9va0l0ZW0uX25leHRWYWx1ZSkge1xuXHRcdFx0XHRcdFx0dXBkYXRlZEhvb2sgPSB0cnVlO1xuXHRcdFx0XHRcdFx0Y29uc3QgY3VycmVudFZhbHVlID0gaG9va0l0ZW0uX3ZhbHVlWzBdO1xuXHRcdFx0XHRcdFx0aG9va0l0ZW0uX3ZhbHVlID0gaG9va0l0ZW0uX25leHRWYWx1ZTtcblx0XHRcdFx0XHRcdGhvb2tJdGVtLl9uZXh0VmFsdWUgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudFZhbHVlICE9PSBob29rSXRlbS5fdmFsdWVbMF0pIHNob3VsZFVwZGF0ZSA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRpZiAocHJldlNjdSkge1xuXHRcdFx0XHRcdGNvbnN0IHJlc3VsdCA9IHByZXZTY3UuY2FsbCh0aGlzLCBwLCBzLCBjKTtcblx0XHRcdFx0XHRyZXR1cm4gdXBkYXRlZEhvb2sgPyByZXN1bHQgfHwgc2hvdWxkVXBkYXRlIDogcmVzdWx0O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuICF1cGRhdGVkSG9vayB8fCBzaG91bGRVcGRhdGU7XG5cdFx0XHR9XG5cblx0XHRcdGN1cnJlbnRDb21wb25lbnQuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gdXBkYXRlSG9va1N0YXRlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBob29rU3RhdGUuX25leHRWYWx1ZSB8fCBob29rU3RhdGUuX3ZhbHVlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuRWZmZWN0fSBjYWxsYmFja1xuICogQHBhcmFtIHt1bmtub3duW119IGFyZ3NcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRWZmZWN0KGNhbGxiYWNrLCBhcmdzKSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuRWZmZWN0SG9va1N0YXRlfSAqL1xuXHRjb25zdCBzdGF0ZSA9IGdldEhvb2tTdGF0ZShjdXJyZW50SW5kZXgrKywgMyk7XG5cdGlmICghb3B0aW9ucy5fc2tpcEVmZmVjdHMgJiYgYXJnc0NoYW5nZWQoc3RhdGUuX2FyZ3MsIGFyZ3MpKSB7XG5cdFx0c3RhdGUuX3ZhbHVlID0gY2FsbGJhY2s7XG5cdFx0c3RhdGUuX3BlbmRpbmdBcmdzID0gYXJncztcblxuXHRcdGN1cnJlbnRDb21wb25lbnQuX19ob29rcy5fcGVuZGluZ0VmZmVjdHMucHVzaChzdGF0ZSk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkVmZmVjdH0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7dW5rbm93bltdfSBhcmdzXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUxheW91dEVmZmVjdChjYWxsYmFjaywgYXJncykge1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkVmZmVjdEhvb2tTdGF0ZX0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDQpO1xuXHRpZiAoIW9wdGlvbnMuX3NraXBFZmZlY3RzICYmIGFyZ3NDaGFuZ2VkKHN0YXRlLl9hcmdzLCBhcmdzKSkge1xuXHRcdHN0YXRlLl92YWx1ZSA9IGNhbGxiYWNrO1xuXHRcdHN0YXRlLl9wZW5kaW5nQXJncyA9IGFyZ3M7XG5cblx0XHRjdXJyZW50Q29tcG9uZW50Ll9yZW5kZXJDYWxsYmFja3MucHVzaChzdGF0ZSk7XG5cdH1cbn1cblxuLyoqIEB0eXBlIHsoaW5pdGlhbFZhbHVlOiB1bmtub3duKSA9PiB1bmtub3dufSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZihpbml0aWFsVmFsdWUpIHtcblx0Y3VycmVudEhvb2sgPSA1O1xuXHRyZXR1cm4gdXNlTWVtbygoKSA9PiAoeyBjdXJyZW50OiBpbml0aWFsVmFsdWUgfSksIFtdKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gcmVmXG4gKiBAcGFyYW0geygpID0+IG9iamVjdH0gY3JlYXRlSGFuZGxlXG4gKiBAcGFyYW0ge3Vua25vd25bXX0gYXJnc1xuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlSGFuZGxlLCBhcmdzKSB7XG5cdGN1cnJlbnRIb29rID0gNjtcblx0dXNlTGF5b3V0RWZmZWN0KFxuXHRcdCgpID0+IHtcblx0XHRcdGlmICh0eXBlb2YgcmVmID09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Y29uc3QgcmVzdWx0ID0gcmVmKGNyZWF0ZUhhbmRsZSgpKTtcblx0XHRcdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdFx0XHRyZWYobnVsbCk7XG5cdFx0XHRcdFx0aWYgKHJlc3VsdCAmJiB0eXBlb2YgcmVzdWx0ID09ICdmdW5jdGlvbicpIHJlc3VsdCgpO1xuXHRcdFx0XHR9O1xuXHRcdFx0fSBlbHNlIGlmIChyZWYpIHtcblx0XHRcdFx0cmVmLmN1cnJlbnQgPSBjcmVhdGVIYW5kbGUoKTtcblx0XHRcdFx0cmV0dXJuICgpID0+IChyZWYuY3VycmVudCA9IG51bGwpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0YXJncyA9PSBudWxsID8gYXJncyA6IGFyZ3MuY29uY2F0KHJlZilcblx0KTtcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUge3Vua25vd259IFRcbiAqIEBwYXJhbSB7KCkgPT4gVH0gZmFjdG9yeVxuICogQHBhcmFtIHt1bmtub3duW119IGFyZ3NcbiAqIEByZXR1cm5zIHtUfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVtbyhmYWN0b3J5LCBhcmdzKSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuTWVtb0hvb2tTdGF0ZTxUPn0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDcpO1xuXHRpZiAoYXJnc0NoYW5nZWQoc3RhdGUuX2FyZ3MsIGFyZ3MpKSB7XG5cdFx0c3RhdGUuX3ZhbHVlID0gZmFjdG9yeSgpO1xuXHRcdHN0YXRlLl9hcmdzID0gYXJncztcblx0XHRzdGF0ZS5fZmFjdG9yeSA9IGZhY3Rvcnk7XG5cdH1cblxuXHRyZXR1cm4gc3RhdGUuX3ZhbHVlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7dW5rbm93bltdfSBhcmdzXG4gKiBAcmV0dXJucyB7KCkgPT4gdm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNhbGxiYWNrKGNhbGxiYWNrLCBhcmdzKSB7XG5cdGN1cnJlbnRIb29rID0gODtcblx0cmV0dXJuIHVzZU1lbW8oKCkgPT4gY2FsbGJhY2ssIGFyZ3MpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuUHJlYWN0Q29udGV4dH0gY29udGV4dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ29udGV4dChjb250ZXh0KSB7XG5cdGNvbnN0IHByb3ZpZGVyID0gY3VycmVudENvbXBvbmVudC5jb250ZXh0W2NvbnRleHQuX2lkXTtcblx0Ly8gV2UgY291bGQgc2tpcCB0aGlzIGNhbGwgaGVyZSwgYnV0IHRoYW4gd2UnZCBub3QgY2FsbFxuXHQvLyBgb3B0aW9ucy5faG9va2AuIFdlIG5lZWQgdG8gZG8gdGhhdCBpbiBvcmRlciB0byBtYWtlXG5cdC8vIHRoZSBkZXZ0b29scyBhd2FyZSBvZiB0aGlzIGhvb2suXG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29udGV4dEhvb2tTdGF0ZX0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDkpO1xuXHQvLyBUaGUgZGV2dG9vbHMgbmVlZHMgYWNjZXNzIHRvIHRoZSBjb250ZXh0IG9iamVjdCB0b1xuXHQvLyBiZSBhYmxlIHRvIHB1bGwgb2YgdGhlIGRlZmF1bHQgdmFsdWUgd2hlbiBubyBwcm92aWRlclxuXHQvLyBpcyBwcmVzZW50IGluIHRoZSB0cmVlLlxuXHRzdGF0ZS5fY29udGV4dCA9IGNvbnRleHQ7XG5cdGlmICghcHJvdmlkZXIpIHJldHVybiBjb250ZXh0Ll9kZWZhdWx0VmFsdWU7XG5cdC8vIFRoaXMgaXMgcHJvYmFibHkgbm90IHNhZmUgdG8gY29udmVydCB0byBcIiFcIlxuXHRpZiAoc3RhdGUuX3ZhbHVlID09IG51bGwpIHtcblx0XHRzdGF0ZS5fdmFsdWUgPSB0cnVlO1xuXHRcdHByb3ZpZGVyLnN1YihjdXJyZW50Q29tcG9uZW50KTtcblx0fVxuXHRyZXR1cm4gcHJvdmlkZXIucHJvcHMudmFsdWU7XG59XG5cbi8qKlxuICogRGlzcGxheSBhIGN1c3RvbSBsYWJlbCBmb3IgYSBjdXN0b20gaG9vayBmb3IgdGhlIGRldnRvb2xzIHBhbmVsXG4gKiBAdHlwZSB7PFQ+KHZhbHVlOiBULCBjYj86ICh2YWx1ZTogVCkgPT4gc3RyaW5nIHwgbnVtYmVyKSA9PiB2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyKSB7XG5cdGlmIChvcHRpb25zLnVzZURlYnVnVmFsdWUpIHtcblx0XHRvcHRpb25zLnVzZURlYnVnVmFsdWUoXG5cdFx0XHRmb3JtYXR0ZXIgPyBmb3JtYXR0ZXIodmFsdWUpIDogLyoqIEB0eXBlIHthbnl9Ki8gKHZhbHVlKVxuXHRcdCk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0geyhlcnJvcjogdW5rbm93biwgZXJyb3JJbmZvOiBpbXBvcnQoJ3ByZWFjdCcpLkVycm9ySW5mbykgPT4gdm9pZH0gY2JcbiAqIEByZXR1cm5zIHtbdW5rbm93biwgKCkgPT4gdm9pZF19XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VFcnJvckJvdW5kYXJ5KGNiKSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuRXJyb3JCb3VuZGFyeUhvb2tTdGF0ZX0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDEwKTtcblx0Y29uc3QgZXJyU3RhdGUgPSB1c2VTdGF0ZSgpO1xuXHRzdGF0ZS5fdmFsdWUgPSBjYjtcblx0aWYgKCFjdXJyZW50Q29tcG9uZW50LmNvbXBvbmVudERpZENhdGNoKSB7XG5cdFx0Y3VycmVudENvbXBvbmVudC5jb21wb25lbnREaWRDYXRjaCA9IChlcnIsIGVycm9ySW5mbykgPT4ge1xuXHRcdFx0aWYgKHN0YXRlLl92YWx1ZSkgc3RhdGUuX3ZhbHVlKGVyciwgZXJyb3JJbmZvKTtcblx0XHRcdGVyclN0YXRlWzFdKGVycik7XG5cdFx0fTtcblx0fVxuXHRyZXR1cm4gW1xuXHRcdGVyclN0YXRlWzBdLFxuXHRcdCgpID0+IHtcblx0XHRcdGVyclN0YXRlWzFdKHVuZGVmaW5lZCk7XG5cdFx0fVxuXHRdO1xufVxuXG4vKiogQHR5cGUgeygpID0+IHN0cmluZ30gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VJZCgpIHtcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5JZEhvb2tTdGF0ZX0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDExKTtcblx0aWYgKCFzdGF0ZS5fdmFsdWUpIHtcblx0XHQvLyBHcmFiIGVpdGhlciB0aGUgcm9vdCBub2RlIG9yIHRoZSBuZWFyZXN0IGFzeW5jIGJvdW5kYXJ5IG5vZGUuXG5cdFx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX0gKi9cblx0XHRsZXQgcm9vdCA9IGN1cnJlbnRDb21wb25lbnQuX3Zub2RlO1xuXHRcdHdoaWxlIChyb290ICE9PSBudWxsICYmICFyb290Ll9tYXNrICYmIHJvb3QuX3BhcmVudCAhPT0gbnVsbCkge1xuXHRcdFx0cm9vdCA9IHJvb3QuX3BhcmVudDtcblx0XHR9XG5cblx0XHRsZXQgbWFzayA9IHJvb3QuX21hc2sgfHwgKHJvb3QuX21hc2sgPSBbMCwgMF0pO1xuXHRcdHN0YXRlLl92YWx1ZSA9ICdQJyArIG1hc2tbMF0gKyAnLScgKyBtYXNrWzFdKys7XG5cdH1cblxuXHRyZXR1cm4gc3RhdGUuX3ZhbHVlO1xufVxuXG4vKipcbiAqIEFmdGVyIHBhaW50IGVmZmVjdHMgY29uc3VtZXIuXG4gKi9cbmZ1bmN0aW9uIGZsdXNoQWZ0ZXJQYWludEVmZmVjdHMoKSB7XG5cdGxldCBjb21wb25lbnQ7XG5cdHdoaWxlICgoY29tcG9uZW50ID0gYWZ0ZXJQYWludEVmZmVjdHMuc2hpZnQoKSkpIHtcblx0XHRjb25zdCBob29rcyA9IGNvbXBvbmVudC5fX2hvb2tzO1xuXHRcdGlmICghY29tcG9uZW50Ll9wYXJlbnREb20gfHwgIWhvb2tzKSBjb250aW51ZTtcblx0XHR0cnkge1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzLnNvbWUoaW52b2tlQ2xlYW51cCk7XG5cdFx0XHRob29rcy5fcGVuZGluZ0VmZmVjdHMuc29tZShpbnZva2VFZmZlY3QpO1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzID0gW107XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzID0gW107XG5cdFx0XHRvcHRpb25zLl9jYXRjaEVycm9yKGUsIGNvbXBvbmVudC5fdm5vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5sZXQgSEFTX1JBRiA9IHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPT0gJ2Z1bmN0aW9uJztcblxuLyoqXG4gKiBTY2hlZHVsZSBhIGNhbGxiYWNrIHRvIGJlIGludm9rZWQgYWZ0ZXIgdGhlIGJyb3dzZXIgaGFzIGEgY2hhbmNlIHRvIHBhaW50IGEgbmV3IGZyYW1lLlxuICogRG8gdGhpcyBieSBjb21iaW5pbmcgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIChyQUYpICsgc2V0VGltZW91dCB0byBpbnZva2UgYSBjYWxsYmFjayBhZnRlclxuICogdGhlIG5leHQgYnJvd3NlciBmcmFtZS5cbiAqXG4gKiBBbHNvLCBzY2hlZHVsZSBhIHRpbWVvdXQgaW4gcGFyYWxsZWwgdG8gdGhlIHRoZSByQUYgdG8gZW5zdXJlIHRoZSBjYWxsYmFjayBpcyBpbnZva2VkXG4gKiBldmVuIGlmIFJBRiBkb2Vzbid0IGZpcmUgKGZvciBleGFtcGxlIGlmIHRoZSBicm93c2VyIHRhYiBpcyBub3QgdmlzaWJsZSlcbiAqXG4gKiBAcGFyYW0geygpID0+IHZvaWR9IGNhbGxiYWNrXG4gKi9cbmZ1bmN0aW9uIGFmdGVyTmV4dEZyYW1lKGNhbGxiYWNrKSB7XG5cdGNvbnN0IGRvbmUgPSAoKSA9PiB7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdGlmIChIQVNfUkFGKSBjYW5jZWxBbmltYXRpb25GcmFtZShyYWYpO1xuXHRcdHNldFRpbWVvdXQoY2FsbGJhY2spO1xuXHR9O1xuXHRjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dChkb25lLCBSQUZfVElNRU9VVCk7XG5cblx0bGV0IHJhZjtcblx0aWYgKEhBU19SQUYpIHtcblx0XHRyYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZG9uZSk7XG5cdH1cbn1cblxuLy8gTm90ZTogaWYgc29tZW9uZSB1c2VkIG9wdGlvbnMuZGVib3VuY2VSZW5kZXJpbmcgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUsXG4vLyB0aGVuIGVmZmVjdHMgd2lsbCBBTFdBWVMgcnVuIG9uIHRoZSBORVhUIGZyYW1lIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgb25lLCBpbmN1cnJpbmcgYSB+MTZtcyBkZWxheS5cbi8vIFBlcmhhcHMgdGhpcyBpcyBub3Qgc3VjaCBhIGJpZyBkZWFsLlxuLyoqXG4gKiBTY2hlZHVsZSBhZnRlclBhaW50RWZmZWN0cyBmbHVzaCBhZnRlciB0aGUgYnJvd3NlciBwYWludHNcbiAqIEBwYXJhbSB7bnVtYmVyfSBuZXdRdWV1ZUxlbmd0aFxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGFmdGVyUGFpbnQobmV3UXVldWVMZW5ndGgpIHtcblx0aWYgKG5ld1F1ZXVlTGVuZ3RoID09PSAxIHx8IHByZXZSYWYgIT09IG9wdGlvbnMucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG5cdFx0cHJldlJhZiA9IG9wdGlvbnMucmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuXHRcdChwcmV2UmFmIHx8IGFmdGVyTmV4dEZyYW1lKShmbHVzaEFmdGVyUGFpbnRFZmZlY3RzKTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuSG9va1N0YXRlfSBob29rXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gaW52b2tlQ2xlYW51cChob29rKSB7XG5cdC8vIEEgaG9vayBjbGVhbnVwIGNhbiBpbnRyb2R1Y2UgYSBjYWxsIHRvIHJlbmRlciB3aGljaCBjcmVhdGVzIGEgbmV3IHJvb3QsIHRoaXMgd2lsbCBjYWxsIG9wdGlvbnMudm5vZGVcblx0Ly8gYW5kIG1vdmUgdGhlIGN1cnJlbnRDb21wb25lbnQgYXdheS5cblx0Y29uc3QgY29tcCA9IGN1cnJlbnRDb21wb25lbnQ7XG5cdGxldCBjbGVhbnVwID0gaG9vay5fY2xlYW51cDtcblx0aWYgKHR5cGVvZiBjbGVhbnVwID09ICdmdW5jdGlvbicpIHtcblx0XHRob29rLl9jbGVhbnVwID0gdW5kZWZpbmVkO1xuXHRcdGNsZWFudXAoKTtcblx0fVxuXG5cdGN1cnJlbnRDb21wb25lbnQgPSBjb21wO1xufVxuXG4vKipcbiAqIEludm9rZSBhIEhvb2sncyBlZmZlY3RcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuRWZmZWN0SG9va1N0YXRlfSBob29rXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gaW52b2tlRWZmZWN0KGhvb2spIHtcblx0Ly8gQSBob29rIGNhbGwgY2FuIGludHJvZHVjZSBhIGNhbGwgdG8gcmVuZGVyIHdoaWNoIGNyZWF0ZXMgYSBuZXcgcm9vdCwgdGhpcyB3aWxsIGNhbGwgb3B0aW9ucy52bm9kZVxuXHQvLyBhbmQgbW92ZSB0aGUgY3VycmVudENvbXBvbmVudCBhd2F5LlxuXHRjb25zdCBjb21wID0gY3VycmVudENvbXBvbmVudDtcblx0aG9vay5fY2xlYW51cCA9IGhvb2suX3ZhbHVlKCk7XG5cdGN1cnJlbnRDb21wb25lbnQgPSBjb21wO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7dW5rbm93bltdfSBvbGRBcmdzXG4gKiBAcGFyYW0ge3Vua25vd25bXX0gbmV3QXJnc1xuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGFyZ3NDaGFuZ2VkKG9sZEFyZ3MsIG5ld0FyZ3MpIHtcblx0cmV0dXJuIChcblx0XHQhb2xkQXJncyB8fFxuXHRcdG9sZEFyZ3MubGVuZ3RoICE9PSBuZXdBcmdzLmxlbmd0aCB8fFxuXHRcdG5ld0FyZ3Muc29tZSgoYXJnLCBpbmRleCkgPT4gYXJnICE9PSBvbGRBcmdzW2luZGV4XSlcblx0KTtcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUgQXJnXG4gKiBAcGFyYW0ge0FyZ30gYXJnXG4gKiBAcGFyYW0geyhhcmc6IEFyZykgPT4gYW55fSBmXG4gKiBAcmV0dXJucyB7YW55fVxuICovXG5mdW5jdGlvbiBpbnZva2VPclJldHVybihhcmcsIGYpIHtcblx0cmV0dXJuIHR5cGVvZiBmID09ICdmdW5jdGlvbicgPyBmKGFyZykgOiBmO1xufVxuIiwgImV4cG9ydCB0eXBlIFRyaXBQYXJhbXMgPSB7XG4gIHNoYWRlck1vZGU6IG51bWJlcjtcbiAgc2hhZGVyTWl4OiBudW1iZXI7XG4gIHNoYWRlckRldGFpbDogbnVtYmVyO1xuICB3YXJwOiBudW1iZXI7XG4gIHN3aXJsOiBudW1iZXI7XG4gIHJpcHBsZTogbnVtYmVyO1xuICB6b29tOiBudW1iZXI7XG4gIGthbGVpZG86IG51bWJlcjtcbiAgbWlycm9yOiBudW1iZXI7XG4gIGNocm9tYTogbnVtYmVyO1xuICBodWU6IG51bWJlcjtcbiAgc2F0dXJhdGlvbjogbnVtYmVyO1xuICBjb250cmFzdDogbnVtYmVyO1xuICBzb2xhcml6ZTogbnVtYmVyO1xuICBlZGdlczogbnVtYmVyO1xuICBmZWVkYmFjazogbnVtYmVyO1xuICB0cmFpbHM6IG51bWJlcjtcbiAgZ2xpdGNoOiBudW1iZXI7XG4gIGdyYWluOiBudW1iZXI7XG4gIHNjYW5saW5lczogbnVtYmVyO1xuICBzdHJvYmU6IG51bWJlcjtcbiAgc2hhcGVzOiBudW1iZXI7XG4gIG1vdGlvbjogbnVtYmVyO1xuICBzcGVlZDogbnVtYmVyO1xuICBhdWRpbzogbnVtYmVyO1xuICBtb3VzZUZvcmNlOiBudW1iZXI7XG4gIG1vdXNlU2l6ZTogbnVtYmVyO1xuICBtb3VzZU1vZGU6IG51bWJlcjtcbn07XG5cbmV4cG9ydCBjb25zdCBDTEVBTjogVHJpcFBhcmFtcyA9IHtcbiAgc2hhZGVyTW9kZTogMCxcbiAgc2hhZGVyTWl4OiAwLFxuICBzaGFkZXJEZXRhaWw6IDAuNSxcbiAgd2FycDogMCxcbiAgc3dpcmw6IDAsXG4gIHJpcHBsZTogMCxcbiAgem9vbTogMCxcbiAga2FsZWlkbzogMCxcbiAgbWlycm9yOiAwLFxuICBjaHJvbWE6IDAsXG4gIGh1ZTogMCxcbiAgc2F0dXJhdGlvbjogMC41LFxuICBjb250cmFzdDogMC41LFxuICBzb2xhcml6ZTogMCxcbiAgZWRnZXM6IDAsXG4gIGZlZWRiYWNrOiAwLFxuICB0cmFpbHM6IDAuNSxcbiAgZ2xpdGNoOiAwLFxuICBncmFpbjogMCxcbiAgc2NhbmxpbmVzOiAwLFxuICBzdHJvYmU6IDAsXG4gIHNoYXBlczogMCxcbiAgbW90aW9uOiAwLjQ1LFxuICBzcGVlZDogMC44LFxuICBhdWRpbzogMCxcbiAgbW91c2VGb3JjZTogMC42NSxcbiAgbW91c2VTaXplOiAwLjQ1LFxuICBtb3VzZU1vZGU6IDAsXG59O1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9UUklQOiBUcmlwUGFyYW1zID0ge1xuICAuLi5DTEVBTixcbiAgc2hhZGVyTW9kZTogMSxcbiAgc2hhZGVyTWl4OiAwLjY4LFxuICBzaGFkZXJEZXRhaWw6IDAuNTgsXG4gIHdhcnA6IDAuNDgsXG4gIHN3aXJsOiAwLjQyLFxuICByaXBwbGU6IDAuMzIsXG4gIGthbGVpZG86IDAuMTgsXG4gIGNocm9tYTogMC4zOCxcbiAgaHVlOiAwLjE2LFxuICBzYXR1cmF0aW9uOiAwLjc4LFxuICBjb250cmFzdDogMC42MixcbiAgZWRnZXM6IDAuMjIsXG4gIGZlZWRiYWNrOiAwLjM0LFxuICB0cmFpbHM6IDAuNTYsXG4gIGdyYWluOiAwLjA4LFxuICBzaGFwZXM6IDAuMTgsXG4gIG1vdGlvbjogMC43LFxuICBzcGVlZDogMC44NSxcbiAgYXVkaW86IDAuMixcbiAgbW91c2VGb3JjZTogMC43Mixcbn07XG5cbmNvbnN0IFZFUlQgPSBgXG5hdHRyaWJ1dGUgdmVjMiBhX3BvcztcbnZhcnlpbmcgdmVjMiB2X3V2O1xuXG52b2lkIG1haW4oKSB7XG4gIHZfdXYgPSBhX3BvcyAqIDAuNSArIDAuNTtcbiAgZ2xfUG9zaXRpb24gPSB2ZWM0KGFfcG9zLCAwLjAsIDEuMCk7XG59XG5gO1xuXG5jb25zdCBDT1BZX0ZSQUcgPSBgXG5wcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcbnVuaWZvcm0gc2FtcGxlcjJEIHVfZnJhbWU7XG52YXJ5aW5nIHZlYzIgdl91djtcblxudm9pZCBtYWluKCkge1xuICBnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlMkQodV9mcmFtZSwgdl91dik7XG59XG5gO1xuXG5jb25zdCBGUkFHID0gYFxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xuXG51bmlmb3JtIHNhbXBsZXIyRCB1X3ZpZGVvO1xudW5pZm9ybSBzYW1wbGVyMkQgdV9wcmV2aW91cztcbnVuaWZvcm0gdmVjMiB1X3JlcztcbnVuaWZvcm0gdmVjMiB1X3ZpZGVvX3JlcztcbnVuaWZvcm0gZmxvYXQgdV90aW1lO1xudW5pZm9ybSBmbG9hdCB1X2F1ZGlvX2xldmVsO1xudW5pZm9ybSB2ZWMyIHVfcG9pbnRlcjtcbnVuaWZvcm0gdmVjMiB1X3BvaW50ZXJfdmVsb2NpdHk7XG51bmlmb3JtIGZsb2F0IHVfcG9pbnRlcl9kb3duO1xudW5pZm9ybSBmbG9hdCB1X3BvaW50ZXJfYWN0aXZlO1xuXG51bmlmb3JtIGZsb2F0IHVfc2hhZGVyX21vZGU7XG51bmlmb3JtIGZsb2F0IHVfc2hhZGVyX21peDtcbnVuaWZvcm0gZmxvYXQgdV9zaGFkZXJfZGV0YWlsO1xuXG51bmlmb3JtIGZsb2F0IHVfd2FycDtcbnVuaWZvcm0gZmxvYXQgdV9zd2lybDtcbnVuaWZvcm0gZmxvYXQgdV9yaXBwbGU7XG51bmlmb3JtIGZsb2F0IHVfem9vbTtcbnVuaWZvcm0gZmxvYXQgdV9rYWxlaWRvO1xudW5pZm9ybSBmbG9hdCB1X21pcnJvcjtcbnVuaWZvcm0gZmxvYXQgdV9jaHJvbWE7XG51bmlmb3JtIGZsb2F0IHVfaHVlO1xudW5pZm9ybSBmbG9hdCB1X3NhdHVyYXRpb247XG51bmlmb3JtIGZsb2F0IHVfY29udHJhc3Q7XG51bmlmb3JtIGZsb2F0IHVfc29sYXJpemU7XG51bmlmb3JtIGZsb2F0IHVfZWRnZXM7XG51bmlmb3JtIGZsb2F0IHVfZmVlZGJhY2s7XG51bmlmb3JtIGZsb2F0IHVfdHJhaWxzO1xudW5pZm9ybSBmbG9hdCB1X2dsaXRjaDtcbnVuaWZvcm0gZmxvYXQgdV9ncmFpbjtcbnVuaWZvcm0gZmxvYXQgdV9zY2FubGluZXM7XG51bmlmb3JtIGZsb2F0IHVfc3Ryb2JlO1xudW5pZm9ybSBmbG9hdCB1X3NoYXBlcztcbnVuaWZvcm0gZmxvYXQgdV9tb3Rpb247XG51bmlmb3JtIGZsb2F0IHVfc3BlZWQ7XG51bmlmb3JtIGZsb2F0IHVfYXVkaW87XG51bmlmb3JtIGZsb2F0IHVfbW91c2VfZm9yY2U7XG51bmlmb3JtIGZsb2F0IHVfbW91c2Vfc2l6ZTtcbnVuaWZvcm0gZmxvYXQgdV9tb3VzZV9tb2RlO1xuXG52YXJ5aW5nIHZlYzIgdl91djtcblxuI2RlZmluZSBQSSAzLjE0MTU5MjY1MzU5XG4jZGVmaW5lIFRBVSA2LjI4MzE4NTMwNzE4XG5cbmZsb2F0IGhhc2godmVjMiBwKSB7XG4gIHJldHVybiBmcmFjdChzaW4oZG90KHAsIHZlYzIoMTI3LjEsIDMxMS43KSkpICogNDM3NTguNTQ1MzEyMyk7XG59XG5cbmZsb2F0IG5vaXNlKHZlYzIgcCkge1xuICB2ZWMyIGkgPSBmbG9vcihwKTtcbiAgdmVjMiBmID0gZnJhY3QocCk7XG4gIHZlYzIgdSA9IGYgKiBmICogKDMuMCAtIDIuMCAqIGYpO1xuICByZXR1cm4gbWl4KFxuICAgIG1peChoYXNoKGkpLCBoYXNoKGkgKyB2ZWMyKDEuMCwgMC4wKSksIHUueCksXG4gICAgbWl4KGhhc2goaSArIHZlYzIoMC4wLCAxLjApKSwgaGFzaChpICsgdmVjMigxLjAsIDEuMCkpLCB1LngpLFxuICAgIHUueVxuICApO1xufVxuXG5mbG9hdCBmYm0odmVjMiBwKSB7XG4gIGZsb2F0IHZhbHVlID0gMC4wO1xuICB2YWx1ZSArPSBub2lzZShwKSAqIDAuNTtcbiAgcCA9IHAgKiAyLjAzICsgMTMuMTc7XG4gIHZhbHVlICs9IG5vaXNlKHApICogMC4yNTtcbiAgcCA9IHAgKiAyLjAxICsgNy4zMTtcbiAgdmFsdWUgKz0gbm9pc2UocCkgKiAwLjEyNTtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG52ZWMzIHJnYjJoc3YodmVjMyBjKSB7XG4gIHZlYzQgSyA9IHZlYzQoMC4wLCAtMS4wIC8gMy4wLCAyLjAgLyAzLjAsIC0xLjApO1xuICB2ZWM0IHAgPSBtaXgodmVjNChjLmJnLCBLLnd6KSwgdmVjNChjLmdiLCBLLnh5KSwgc3RlcChjLmIsIGMuZykpO1xuICB2ZWM0IHEgPSBtaXgodmVjNChwLnh5dywgYy5yKSwgdmVjNChjLnIsIHAueXp4KSwgc3RlcChwLngsIGMucikpO1xuICBmbG9hdCBkID0gcS54IC0gbWluKHEudywgcS55KTtcbiAgZmxvYXQgZSA9IDEuMGUtMTA7XG4gIHJldHVybiB2ZWMzKGFicyhxLnogKyAocS53IC0gcS55KSAvICg2LjAgKiBkICsgZSkpLCBkIC8gKHEueCArIGUpLCBxLngpO1xufVxuXG52ZWMzIGhzdjJyZ2IodmVjMyBjKSB7XG4gIHZlYzQgSyA9IHZlYzQoMS4wLCAyLjAgLyAzLjAsIDEuMCAvIDMuMCwgMy4wKTtcbiAgdmVjMyBwID0gYWJzKGZyYWN0KGMueHh4ICsgSy54eXopICogNi4wIC0gSy53d3cpO1xuICByZXR1cm4gYy56ICogbWl4KEsueHh4LCBjbGFtcChwIC0gSy54eHgsIDAuMCwgMS4wKSwgYy55KTtcbn1cblxudmVjMiByb3RhdGUyZCh2ZWMyIHAsIGZsb2F0IGFuZ2xlKSB7XG4gIGZsb2F0IGMgPSBjb3MoYW5nbGUpO1xuICBmbG9hdCBzID0gc2luKGFuZ2xlKTtcbiAgcmV0dXJuIG1hdDIoYywgLXMsIHMsIGMpICogcDtcbn1cblxuLy8gUmV0dXJucyB0aGUgY2xvc2VzdCBhbmltYXRlZCBjZWxsIGNlbnRlciBhbmQgZGlzdGFuY2UgdG8gaXRzIGJvcmRlci5cbi8vIEtlZXBpbmcgdGhpcyB0aW55IGFuZCBkZXRlcm1pbmlzdGljIG1ha2VzIHRoZSBtb3JlIGV4b3RpYyB3b3JsZHMgdmlhYmxlIG9uIFdlYkdMIDEuXG52b2lkIHZvcm9ub2lDZWxsKHZlYzIgcCwgZmxvYXQgdCwgb3V0IHZlYzIgY2VudGVyLCBvdXQgZmxvYXQgYm9yZGVyKSB7XG4gIHZlYzIgYmFzZSA9IGZsb29yKHApO1xuICB2ZWMyIGxvY2FsID0gZnJhY3QocCk7XG4gIGZsb2F0IG5lYXJlc3QgPSAxMC4wO1xuICBmbG9hdCBzZWNvbmQgPSAxMC4wO1xuICBjZW50ZXIgPSB2ZWMyKDAuMCk7XG4gIGZvciAoaW50IHkgPSAtMTsgeSA8PSAxOyB5KyspIHtcbiAgICBmb3IgKGludCB4ID0gLTE7IHggPD0gMTsgeCsrKSB7XG4gICAgICB2ZWMyIGNlbGwgPSB2ZWMyKGZsb2F0KHgpLCBmbG9hdCh5KSk7XG4gICAgICB2ZWMyIGlkID0gYmFzZSArIGNlbGw7XG4gICAgICB2ZWMyIHBvaW50ID0gY2VsbCArIDAuNSArIDAuMzYgKiBzaW4odmVjMihcbiAgICAgICAgaGFzaChpZCArIDMuMSkgKiBUQVUgKyB0LFxuICAgICAgICBoYXNoKGlkICsgOS43KSAqIFRBVSArIHQgKiAwLjgzXG4gICAgICApKTtcbiAgICAgIGZsb2F0IGQgPSBsZW5ndGgocG9pbnQgLSBsb2NhbCk7XG4gICAgICBpZiAoZCA8IG5lYXJlc3QpIHtcbiAgICAgICAgc2Vjb25kID0gbmVhcmVzdDtcbiAgICAgICAgbmVhcmVzdCA9IGQ7XG4gICAgICAgIGNlbnRlciA9IGlkICsgcG9pbnQ7XG4gICAgICB9IGVsc2UgaWYgKGQgPCBzZWNvbmQpIHtcbiAgICAgICAgc2Vjb25kID0gZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgYm9yZGVyID0gbWF4KDAuMCwgc2Vjb25kIC0gbmVhcmVzdCk7XG59XG5cbnZlYzIgc2hhZGVyV29ybGRXYXJwKHZlYzIgdXYsIGZsb2F0IHQsIGZsb2F0IGVuZXJneSkge1xuICBmbG9hdCBtb2RlID0gZmxvb3IodV9zaGFkZXJfbW9kZSArIDAuNSk7XG4gIGZsb2F0IG1peEFtb3VudCA9IHVfc2hhZGVyX21peDtcbiAgZmxvYXQgYXNwZWN0ID0gdV9yZXMueCAvIG1heCh1X3Jlcy55LCAxLjApO1xuICB2ZWMyIHAgPSAodXYgLSAwLjUpICogdmVjMihhc3BlY3QsIDEuMCk7XG4gIHZlYzIgd2FycGVkID0gcDtcbiAgZmxvYXQgZGV0YWlsID0gbWl4KDMuMCwgMTQuMCwgdV9zaGFkZXJfZGV0YWlsKTtcblxuICBpZiAobW9kZSA8IDAuNSkge1xuICAgIHJldHVybiB1djtcbiAgfSBlbHNlIGlmIChtb2RlIDwgMS41KSB7IC8vIE1lcmN1cnkgY2VsbHNcbiAgICB2ZWMyIGNlbnRlcjtcbiAgICBmbG9hdCBib3JkZXI7XG4gICAgdm9yb25vaUNlbGwocCAqIGRldGFpbCwgdCAqIDAuMTYsIGNlbnRlciwgYm9yZGVyKTtcbiAgICB2ZWMyIHEgPSBwICogZGV0YWlsIC0gY2VudGVyO1xuICAgIHdhcnBlZCA9IChjZW50ZXIgKyBxICogKDAuNTUgKyBsZW5ndGgocSkgKiAxLjM1KSkgLyBkZXRhaWw7XG4gICAgd2FycGVkICs9IG5vcm1hbGl6ZShxICsgMC4wMDEpICogc21vb3Roc3RlcCgwLjE2LCAwLjAsIGJvcmRlcikgKiAwLjAyNTtcbiAgfSBlbHNlIGlmIChtb2RlIDwgMi41KSB7IC8vIFdvcm1ob2xlXG4gICAgZmxvYXQgciA9IG1heChsZW5ndGgocCksIDAuMDI1KTtcbiAgICBmbG9hdCBhID0gYXRhbihwLnksIHAueCk7XG4gICAgYSArPSAxLjggLyAoMS4wICsgciAqIDkuMCkgKyB0ICogMC4xODtcbiAgICByID0gZnJhY3QociAqICgyLjIgKyB1X3NoYWRlcl9kZXRhaWwgKiAzLjApIC0gdCAqIDAuMTYpIC8gKDIuMiArIHVfc2hhZGVyX2RldGFpbCAqIDMuMCk7XG4gICAgd2FycGVkID0gdmVjMihjb3MoYSksIHNpbihhKSkgKiByICogMS44O1xuICB9IGVsc2UgaWYgKG1vZGUgPCAzLjUpIHsgLy8gUGl4ZWwgbWVsdFxuICAgIGZsb2F0IGJsb2NrcyA9IG1peCgxOC4wLCA5MC4wLCB1X3NoYWRlcl9kZXRhaWwpO1xuICAgIHZlYzIgY2VsbCA9IGZsb29yKHV2ICogdmVjMihibG9ja3MsIGJsb2NrcyAqIDAuNTYpKTtcbiAgICBmbG9hdCBkcm9wID0gaGFzaCh2ZWMyKGNlbGwueCwgZmxvb3IodCAqIDIuMCkpKSAqIDAuMjg7XG4gICAgZmxvYXQgZ2F0ZSA9IHN0ZXAoMC41MiwgaGFzaCh2ZWMyKGNlbGwueCAqIDAuMTMsIGZsb29yKHQgKiAxLjcpKSkpO1xuICAgIHdhcnBlZC55ICs9IGRyb3AgKiBnYXRlICogKDAuMzUgKyBlbmVyZ3kpO1xuICAgIHdhcnBlZC54ID0gKGZsb29yKCh3YXJwZWQueCAvIGFzcGVjdCArIDAuNSkgKiBibG9ja3MpICsgMC41KSAvIGJsb2NrcztcbiAgICB3YXJwZWQueCA9ICh3YXJwZWQueCAtIDAuNSkgKiBhc3BlY3Q7XG4gIH0gZWxzZSBpZiAobW9kZSA8IDYuNSAmJiBtb2RlID4gNS41KSB7IC8vIERhdGFtb3NoXG4gICAgZmxvYXQgYmFuZCA9IGZsb29yKHV2LnkgKiBtaXgoMTQuMCwgNzIuMCwgdV9zaGFkZXJfZGV0YWlsKSk7XG4gICAgZmxvYXQgY2xvY2sgPSBmbG9vcih0ICogNC4wKTtcbiAgICBmbG9hdCBidXJzdCA9IHN0ZXAoMC41MiwgaGFzaCh2ZWMyKGJhbmQsIGNsb2NrKSkpO1xuICAgIHdhcnBlZC54ICs9IChoYXNoKHZlYzIoYmFuZCArIDguMCwgY2xvY2spKSAtIDAuNSkgKiAwLjU1ICogYnVyc3Q7XG4gICAgd2FycGVkLnkgKz0gKGhhc2godmVjMihjbG9jaywgYmFuZCAqIDAuMSkpIC0gMC41KSAqIDAuMDM1O1xuICB9IGVsc2UgaWYgKG1vZGUgPCA3LjUgJiYgbW9kZSA+IDYuNSkgeyAvLyBSZWN1cnNpdmUgZHJlYW1cbiAgICB2ZWMyIHEgPSBwO1xuICAgIHEgPSBhYnMocSkgLSB2ZWMyKDAuMjQsIDAuMTIpO1xuICAgIHEgPSByb3RhdGUyZChxLCAwLjQ1ICsgc2luKHQgKiAwLjIpICogMC4xOCk7XG4gICAgcSA9IGFicyhxKSAtIHZlYzIoMC4xMywgMC4wOCk7XG4gICAgd2FycGVkID0gcSAqIG1peCgxLjcsIDMuOCwgdV9zaGFkZXJfZGV0YWlsKTtcbiAgfSBlbHNlIGlmIChtb2RlIDwgOS41ICYmIG1vZGUgPiA4LjUpIHsgLy8gU2xpdCBzY2FubmVyXG4gICAgZmxvYXQgY29sdW1ucyA9IG1peCgxMi4wLCA4MC4wLCB1X3NoYWRlcl9kZXRhaWwpO1xuICAgIGZsb2F0IGNvbHVtbiA9IGZsb29yKHV2LnggKiBjb2x1bW5zKSAvIGNvbHVtbnM7XG4gICAgd2FycGVkLnkgKz0gc2luKGNvbHVtbiAqIDU3LjAgKyB0ICogMS43KSAqIDAuMjQ7XG4gICAgd2FycGVkLnggKz0gc2luKHV2LnkgKiA0LjAgKyB0KSAqIDAuMDM1O1xuICB9IGVsc2UgaWYgKG1vZGUgPCAxMC41ICYmIG1vZGUgPiA5LjUpIHsgLy8gU2luZ3VsYXJpdHkgbGVuc1xuICAgIHZlYzIgb3JiaXQgPSB2ZWMyKHNpbih0ICogMC4yMyksIGNvcyh0ICogMC4xOSkpICogMC4xNiAqIHVfbW90aW9uO1xuICAgIHZlYzIgcSA9IHAgLSBvcmJpdDtcbiAgICBmbG9hdCByID0gbWF4KGxlbmd0aChxKSwgMC4wMzUpO1xuICAgIGZsb2F0IGxlbnMgPSAwLjA3NSAvIHI7XG4gICAgcSA9IHJvdGF0ZTJkKHEsIGxlbnMgKiAyLjQgKyB0ICogMC4wOCk7XG4gICAgd2FycGVkID0gb3JiaXQgKyBxICogKDEuMCAtIGxlbnMgKiAwLjYyKTtcbiAgfSBlbHNlIGlmIChtb2RlIDwgMTQuNSAmJiBtb2RlID4gMTMuNSkgeyAvLyBDdWJpc3Qgc2hhdHRlclxuICAgIGZsb2F0IHRpbGVzID0gbWl4KDMuMCwgMTEuMCwgdV9zaGFkZXJfZGV0YWlsKTtcbiAgICB2ZWMyIGNlbGwgPSBmbG9vcigocCArIDEuNSkgKiB0aWxlcyk7XG4gICAgdmVjMiBxID0gZnJhY3QoKHAgKyAxLjUpICogdGlsZXMpIC0gMC41O1xuICAgIGZsb2F0IGZsaXAgPSBzdGVwKDAuNSwgaGFzaChjZWxsKSk7XG4gICAgcSA9IHJvdGF0ZTJkKHEsIChoYXNoKGNlbGwgKyA0LjIpIC0gMC41KSAqIDEuOCArIHQgKiAwLjA0ICogKGZsaXAgKiAyLjAgLSAxLjApKTtcbiAgICBpZiAoZmxpcCA+IDAuNSkgcS54ID0gLXEueDtcbiAgICB3YXJwZWQgPSAoY2VsbCArIHEgKyAwLjUpIC8gdGlsZXMgLSAxLjU7XG4gIH0gZWxzZSBpZiAobW9kZSA8IDE1LjUgJiYgbW9kZSA+IDE0LjUpIHsgLy8gRWNobyBibG9vbVxuICAgIGZsb2F0IHIgPSBsZW5ndGgocCk7XG4gICAgd2FycGVkICo9IDEuMCArIHNpbihyICogbWl4KDE4LjAsIDUyLjAsIHVfc2hhZGVyX2RldGFpbCkgLSB0ICogMy4wKSAqIDAuMTE7XG4gICAgd2FycGVkID0gcm90YXRlMmQod2FycGVkLCBzaW4ociAqIDkuMCAtIHQpICogMC4xNik7XG4gIH0gZWxzZSBpZiAobW9kZSA+IDE2LjUgJiYgbW9kZSA8IDE3LjUpIHsgLy8gTGlxdWlkIHRvcG9ncmFwaHlcbiAgICBmbG9hdCB0ZXJyYWluID0gZmJtKHAgKiBkZXRhaWwgKyB2ZWMyKHQgKiAwLjEyLCAtdCAqIDAuMDgpKTtcbiAgICB3YXJwZWQgKz0gdmVjMihcbiAgICAgIHNpbigodGVycmFpbiArIHAueSkgKiAyNC4wKSxcbiAgICAgIGNvcygodGVycmFpbiArIHAueCkgKiAyMS4wKVxuICAgICkgKiAwLjA1NTtcbiAgfVxuXG4gIHZlYzIgcmVzdWx0ID0gbWl4KHAsIHdhcnBlZCwgbWl4QW1vdW50KTtcbiAgcmV0dXJuIHJlc3VsdCAvIHZlYzIoYXNwZWN0LCAxLjApICsgMC41O1xufVxuXG52ZWMyIGNvdmVyVmlkZW9Vdih2ZWMyIHV2KSB7XG4gIGZsb2F0IHNjcmVlbkFzcGVjdCA9IHVfcmVzLnggLyBtYXgodV9yZXMueSwgMS4wKTtcbiAgZmxvYXQgdmlkZW9Bc3BlY3QgPSB1X3ZpZGVvX3Jlcy54IC8gbWF4KHVfdmlkZW9fcmVzLnksIDEuMCk7XG4gIHZlYzIgcmVzdWx0ID0gdXY7XG4gIGlmIChzY3JlZW5Bc3BlY3QgPiB2aWRlb0FzcGVjdCkge1xuICAgIHJlc3VsdC55ID0gKHV2LnkgLSAwLjUpICogKHZpZGVvQXNwZWN0IC8gc2NyZWVuQXNwZWN0KSArIDAuNTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQueCA9ICh1di54IC0gMC41KSAqIChzY3JlZW5Bc3BlY3QgLyB2aWRlb0FzcGVjdCkgKyAwLjU7XG4gIH1cbiAgcmV0dXJuIHZlYzIocmVzdWx0LngsIDEuMCAtIHJlc3VsdC55KTtcbn1cblxudmVjMyB2aWRlb0F0KHZlYzIgdXYpIHtcbiAgcmV0dXJuIHRleHR1cmUyRCh1X3ZpZGVvLCBjbGFtcChjb3ZlclZpZGVvVXYodXYpLCAwLjAwMSwgMC45OTkpKS5yZ2I7XG59XG5cbnZlYzIga2FsZWlkb3Njb3BlKHZlYzIgdXYsIGZsb2F0IGFtb3VudCkge1xuICBmbG9hdCBhc3BlY3QgPSB1X3Jlcy54IC8gbWF4KHVfcmVzLnksIDEuMCk7XG4gIHZlYzIgcCA9ICh1diAtIDAuNSkgKiB2ZWMyKGFzcGVjdCwgMS4wKTtcbiAgZmxvYXQgcmFkaXVzID0gbGVuZ3RoKHApO1xuICBmbG9hdCBhbmdsZSA9IGF0YW4ocC55LCBwLngpO1xuICBmbG9hdCBzZWdtZW50cyA9IGZsb29yKG1peCgzLjAsIDE4LjAsIGFtb3VudCkpO1xuICBmbG9hdCBzZWdtZW50ID0gVEFVIC8gc2VnbWVudHM7XG4gIGFuZ2xlID0gYWJzKG1vZChhbmdsZSArIHNlZ21lbnQgKiAwLjUsIHNlZ21lbnQpIC0gc2VnbWVudCAqIDAuNSk7XG4gIHAgPSB2ZWMyKGNvcyhhbmdsZSksIHNpbihhbmdsZSkpICogcmFkaXVzO1xuICByZXR1cm4gcCAvIHZlYzIoYXNwZWN0LCAxLjApICsgMC41O1xufVxuXG52ZWMyIHBvaW50ZXJXYXJwKHZlYzIgdXYsIGZsb2F0IHQsIGZsb2F0IGVuZXJneSkge1xuICBmbG9hdCBhc3BlY3QgPSB1X3Jlcy54IC8gbWF4KHVfcmVzLnksIDEuMCk7XG4gIHZlYzIgZGVsdGEgPSAodXYgLSB1X3BvaW50ZXIpICogdmVjMihhc3BlY3QsIDEuMCk7XG4gIGZsb2F0IGRpc3QgPSBsZW5ndGgoZGVsdGEpO1xuICBmbG9hdCByYWRpdXMgPSBtaXgoMC4wNzUsIDAuNzIsIHVfbW91c2Vfc2l6ZSk7XG4gIGZsb2F0IGluZmx1ZW5jZSA9IGV4cCgtZGlzdCAqIGRpc3QgLyBtYXgocmFkaXVzICogcmFkaXVzLCAwLjAwMDEpKTtcbiAgZmxvYXQgcHJlc3NlZCA9IG1peCgwLjcyLCAxLjc1LCB1X3BvaW50ZXJfZG93bik7XG4gIGZsb2F0IGZvcmNlID0gdV9tb3VzZV9mb3JjZSAqIGluZmx1ZW5jZSAqIHByZXNzZWQgKiB1X3BvaW50ZXJfYWN0aXZlO1xuXG4gIGlmICh1X21vdXNlX21vZGUgPCAwLjUpIHtcbiAgICBkZWx0YSA9IHJvdGF0ZTJkKGRlbHRhLCBmb3JjZSAqICgxLjIgKyBlbmVyZ3kgKiAxLjgpKTtcbiAgfSBlbHNlIGlmICh1X21vdXNlX21vZGUgPCAxLjUpIHtcbiAgICBkZWx0YSAqPSAxLjAgLSBmb3JjZSAqIDAuNDg7XG4gIH0gZWxzZSBpZiAodV9tb3VzZV9tb2RlIDwgMi41KSB7XG4gICAgZGVsdGEueCArPSBzaW4oZGVsdGEueSAqIDQyLjAgLSB0ICogNS4wKSAqIGZvcmNlICogMC4wNzU7XG4gICAgZGVsdGEueSArPSB1X3BvaW50ZXJfdmVsb2NpdHkueSAqIGZvcmNlICogMC4xODtcbiAgfSBlbHNlIHtcbiAgICBmbG9hdCBtZWx0ID0gbm9pc2UodmVjMihkZWx0YS54ICogOS4wLCB0ICogMC43KSkgLSAwLjI1O1xuICAgIGRlbHRhLnkgKz0gbWVsdCAqIGZvcmNlICogMC4yOCArIHVfcG9pbnRlcl92ZWxvY2l0eS55ICogZm9yY2UgKiAwLjI7XG4gIH1cblxuICByZXR1cm4gdV9wb2ludGVyICsgZGVsdGEgLyB2ZWMyKGFzcGVjdCwgMS4wKTtcbn1cblxudmVjMiBzcGF0aWFsV2FycCh2ZWMyIHV2LCBmbG9hdCB0LCBmbG9hdCBlbmVyZ3kpIHtcbiAgZmxvYXQgYXNwZWN0ID0gdV9yZXMueCAvIG1heCh1X3Jlcy55LCAxLjApO1xuICB2ZWMyIHAgPSAodXYgLSAwLjUpICogdmVjMihhc3BlY3QsIDEuMCk7XG4gIGZsb2F0IHJhZGl1cyA9IGxlbmd0aChwKTtcblxuICBmbG9hdCBhdXRvUGhhc2UgPSB0ICogdV9tb3Rpb247XG4gIGZsb2F0IHN3aXJsID0gdV9zd2lybCAqICgxLjE1ICsgMS44ICogc2luKGF1dG9QaGFzZSAqIDAuMzcgKyByYWRpdXMgKiA0LjApKTtcbiAgc3dpcmwgKz0gZW5lcmd5ICogdV9zd2lybCAqIDEuNTtcbiAgcCA9IHJvdGF0ZTJkKHAsIHN3aXJsICogKDEuMCAtIHNtb290aHN0ZXAoMC4wNSwgMS4wNSwgcmFkaXVzKSkpO1xuXG4gIGZsb2F0IGJhcnJlbCA9IDEuMCArIHVfd2FycCAqIDAuNTUgKiAocmFkaXVzICogcmFkaXVzIC0gMC4yNSk7XG4gIHAgKj0gYmFycmVsO1xuXG4gIGZsb2F0IHdhdmVzID0gc2luKHJhZGl1cyAqIG1peCgxMi4wLCA1OC4wLCB1X3JpcHBsZSkgLSBhdXRvUGhhc2UgKiA0LjIpO1xuICBwICs9IG5vcm1hbGl6ZShwICsgMC4wMDAxKSAqIHdhdmVzICogdV9yaXBwbGUgKiAoMC4wMjUgKyBlbmVyZ3kgKiAwLjAzNSk7XG4gIHAueCArPSBzaW4ocC55ICogMTIuMCArIGF1dG9QaGFzZSAqIDEuNykgKiB1X3dhcnAgKiAwLjA0NTtcbiAgcC55ICs9IGNvcyhwLnggKiAxMS4wIC0gYXV0b1BoYXNlICogMS4zKSAqIHVfd2FycCAqIDAuMDQ7XG5cbiAgdmVjMiBmbHVpZCA9IHZlYzIoXG4gICAgZmJtKHAgKiAyLjggKyBhdXRvUGhhc2UgKiAwLjE5KSxcbiAgICBmYm0ocC55eCAqIDMuMSAtIGF1dG9QaGFzZSAqIDAuMTYpXG4gICkgLSAwLjU7XG4gIHAgKz0gZmx1aWQgKiB1X3dhcnAgKiAwLjEzO1xuICBwICo9IG1peCgxLjAsIDAuNDIsIHVfem9vbSk7XG5cbiAgcmV0dXJuIHAgLyB2ZWMyKGFzcGVjdCwgMS4wKSArIDAuNTtcbn1cblxudmVjMyBzY2VuZUF0KHZlYzIgdXYsIHZlYzIgZmVlZGJhY2tPZmZzZXQpIHtcbiAgdmVjMyBsaXZlID0gdmlkZW9BdCh1dik7XG4gIHZlYzMgcHJldmlvdXMgPSB0ZXh0dXJlMkQodV9wcmV2aW91cywgY2xhbXAodXYgKyBmZWVkYmFja09mZnNldCwgMC4wMDEsIDAuOTk5KSkucmdiO1xuICBmbG9hdCBwZXJzaXN0ZW5jZSA9IHVfZmVlZGJhY2sgKiBtaXgoMC4xNiwgMC45NCwgdV90cmFpbHMpO1xuICBwcmV2aW91cyAqPSBtaXgoMC45LCAxLjAxNSwgdV90cmFpbHMpO1xuICByZXR1cm4gbWl4KGxpdmUsIHByZXZpb3VzLCBjbGFtcChwZXJzaXN0ZW5jZSwgMC4wLCAwLjk2NSkpO1xufVxuXG5mbG9hdCBlZGdlQXQodmVjMiB1dikge1xuICB2ZWMyIHB4ID0gMS41IC8gdV9yZXM7XG4gIGZsb2F0IGwgPSBkb3QodmlkZW9BdCh1diAtIHZlYzIocHgueCwgMC4wKSksIHZlYzMoMC4yOTksIDAuNTg3LCAwLjExNCkpO1xuICBmbG9hdCByID0gZG90KHZpZGVvQXQodXYgKyB2ZWMyKHB4LngsIDAuMCkpLCB2ZWMzKDAuMjk5LCAwLjU4NywgMC4xMTQpKTtcbiAgZmxvYXQgYiA9IGRvdCh2aWRlb0F0KHV2IC0gdmVjMigwLjAsIHB4LnkpKSwgdmVjMygwLjI5OSwgMC41ODcsIDAuMTE0KSk7XG4gIGZsb2F0IHRvcCA9IGRvdCh2aWRlb0F0KHV2ICsgdmVjMigwLjAsIHB4LnkpKSwgdmVjMygwLjI5OSwgMC41ODcsIDAuMTE0KSk7XG4gIHJldHVybiBjbGFtcChsZW5ndGgodmVjMihyIC0gbCwgdG9wIC0gYikpICogNC41LCAwLjAsIDEuMCk7XG59XG5cbmZsb2F0IHN5bnRoU2hhcGVzKHZlYzIgdXYsIGZsb2F0IHQpIHtcbiAgZmxvYXQgYXNwZWN0ID0gdV9yZXMueCAvIG1heCh1X3Jlcy55LCAxLjApO1xuICB2ZWMyIHAgPSAodXYgLSAwLjUpICogdmVjMihhc3BlY3QsIDEuMCk7XG4gIGZsb2F0IHJlc3VsdCA9IDAuMDtcbiAgZm9yIChpbnQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICBmbG9hdCBmaSA9IGZsb2F0KGkpO1xuICAgIHZlYzIgY2VudGVyID0gdmVjMihcbiAgICAgIHNpbih0ICogKDAuMjEgKyBmaSAqIDAuMDQpICsgZmkgKiAyLjcpLFxuICAgICAgY29zKHQgKiAoMC4xOCArIGZpICogMC4wMykgKyBmaSAqIDEuOSlcbiAgICApICogdmVjMigwLjQ4LCAwLjM0KTtcbiAgICB2ZWMyIHEgPSBwIC0gY2VudGVyO1xuICAgIGZsb2F0IGFuZ2xlID0gYXRhbihxLnksIHEueCk7XG4gICAgZmxvYXQgcmFkaXVzID0gMC4wOCArIDAuMDM1ICogc2luKGFuZ2xlICogKDMuMCArIGZpKSArIHQgKyBmaSk7XG4gICAgZmxvYXQgcmluZyA9IGFicyhsZW5ndGgocSkgLSByYWRpdXMpO1xuICAgIHJlc3VsdCA9IG1heChyZXN1bHQsIHNtb290aHN0ZXAoMC4wMjIsIDAuMDAyLCByaW5nKSk7XG4gIH1cbiAgZmxvYXQgZ3JpZCA9IGFicyhzaW4oKHAueCArIHAueSkgKiAxNi4wICsgdCkgKiBzaW4oKHAueCAtIHAueSkgKiAxNi4wIC0gdCkpO1xuICByZXN1bHQgPSBtYXgocmVzdWx0LCBzbW9vdGhzdGVwKDAuMDgsIDAuMCwgZ3JpZCkgKiAwLjYpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG52ZWMzIHRoZXJtYWxQYWxldHRlKGZsb2F0IHgpIHtcbiAgeCA9IGNsYW1wKHgsIDAuMCwgMS4wKTtcbiAgdmVjMyBjb2xkID0gdmVjMygwLjAxNSwgMC4wLCAwLjEyKTtcbiAgdmVjMyB2aW9sZXQgPSB2ZWMzKDAuMzUsIDAuMCwgMC43Mik7XG4gIHZlYzMgZmlyZSA9IHZlYzMoMS4wLCAwLjA4LCAwLjApO1xuICB2ZWMzIGdvbGQgPSB2ZWMzKDEuMCwgMC44MiwgMC4wNCk7XG4gIHZlYzMgd2hpdGVIb3QgPSB2ZWMzKDEuMCwgMS4wLCAwLjg4KTtcbiAgdmVjMyBhID0gbWl4KGNvbGQsIHZpb2xldCwgc21vb3Roc3RlcCgwLjAsIDAuMywgeCkpO1xuICB2ZWMzIGIgPSBtaXgoYSwgZmlyZSwgc21vb3Roc3RlcCgwLjIyLCAwLjU1LCB4KSk7XG4gIHZlYzMgYyA9IG1peChiLCBnb2xkLCBzbW9vdGhzdGVwKDAuNDgsIDAuNzgsIHgpKTtcbiAgcmV0dXJuIG1peChjLCB3aGl0ZUhvdCwgc21vb3Roc3RlcCgwLjc2LCAxLjAsIHgpKTtcbn1cblxuLy8gLS0tIFJlYWN0b3IgM0QgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQSBjb21wYWN0IHNpZ25lZC1kaXN0YW5jZS1maWVsZCBzY2VuZS4gVW5saWtlIHRoZSBvdGhlciBzaWduYWwgd29ybGRzIHRoaXNcbi8vIHRyYWNlcyBhY3R1YWwgY2FtZXJhIHJheXMgdGhyb3VnaCBhIGxpdCAzRCBzcGFjZSwgdGhlbiBwcm9qZWN0cyB0aGUgc291cmNlXG4vLyBvbnRvIHRoZSBnZW9tZXRyeSBzbyB2aWRlbywgaW1hZ2VzIGFuZCBhdWRpbyBjYW52YXNlcyBiZWNvbWUgaXRzIHNraW4uXG5tYXQyIHJlYWN0b3JSb3QoZmxvYXQgYSkge1xuICBmbG9hdCBjID0gY29zKGEpO1xuICBmbG9hdCBzID0gc2luKGEpO1xuICByZXR1cm4gbWF0MihjLCAtcywgcywgYyk7XG59XG5cbmZsb2F0IHJlYWN0b3JUb3J1cyh2ZWMzIHAsIHZlYzIgcmFkaWkpIHtcbiAgcmV0dXJuIGxlbmd0aCh2ZWMyKGxlbmd0aChwLnh6KSAtIHJhZGlpLngsIHAueSkpIC0gcmFkaWkueTtcbn1cblxudmVjMiByZWFjdG9yTWFwKHZlYzMgcCwgZmxvYXQgdCwgZmxvYXQgZW5lcmd5KSB7XG4gIHZlYzMgY29yZSA9IHA7XG4gIGNvcmUueHogPSByZWFjdG9yUm90KHQgKiAwLjM0KSAqIGNvcmUueHo7XG4gIGNvcmUueHkgPSByZWFjdG9yUm90KHQgKiAwLjIzKSAqIGNvcmUueHk7XG4gIGZsb2F0IGZhY2V0cyA9IG1peCgzLjAsIDguMCwgdV9zaGFkZXJfZGV0YWlsKTtcbiAgZmxvYXQgYm9keSA9IGxlbmd0aChjb3JlKSAtIDAuNjg7XG4gIGJvZHkgKz0gc2luKGNvcmUueCAqIGZhY2V0cykgKiBzaW4oY29yZS55ICogZmFjZXRzKSAqIHNpbihjb3JlLnogKiBmYWNldHMpXG4gICAgKiAoMC4wNzUgKyBlbmVyZ3kgKiAwLjA0NSk7XG5cbiAgdmVjMyByaW5nQSA9IHA7XG4gIHJpbmdBLnh5ID0gcmVhY3RvclJvdCgwLjcyICsgdCAqIDAuMzEpICogcmluZ0EueHk7XG4gIGZsb2F0IHJpbmcgPSByZWFjdG9yVG9ydXMocmluZ0EsIHZlYzIoMS4wMiwgMC4wNDUgKyBlbmVyZ3kgKiAwLjAyNSkpO1xuXG4gIHZlYzMgcmluZ0IgPSBwO1xuICByaW5nQi55eiA9IHJlYWN0b3JSb3QoLTAuOSArIHQgKiAwLjIxKSAqIHJpbmdCLnl6O1xuICByaW5nID0gbWluKHJpbmcsIHJlYWN0b3JUb3J1cyhyaW5nQiwgdmVjMigxLjE4LCAwLjAyNikpKTtcblxuICB2ZWMzIHJpbmdDID0gcDtcbiAgcmluZ0MueHogPSByZWFjdG9yUm90KHQgKiAtMC4yNykgKiByaW5nQy54ejtcbiAgcmluZ0MueHkgPSByZWFjdG9yUm90KDEuMjUpICogcmluZ0MueHk7XG4gIHJpbmcgPSBtaW4ocmluZywgcmVhY3RvclRvcnVzKHJpbmdDLCB2ZWMyKDEuMzQsIDAuMDE4KSkpO1xuXG4gIGZsb2F0IGZsb29yUGxhbmUgPSBwLnkgKyAxLjE4O1xuICB2ZWMyIGhpdCA9IGJvZHkgPCByaW5nID8gdmVjMihib2R5LCAxLjApIDogdmVjMihyaW5nLCAyLjApO1xuICBpZiAoZmxvb3JQbGFuZSA8IGhpdC54KSBoaXQgPSB2ZWMyKGZsb29yUGxhbmUsIDMuMCk7XG4gIHJldHVybiBoaXQ7XG59XG5cbnZlYzMgcmVhY3Rvck5vcm1hbCh2ZWMzIHAsIGZsb2F0IHQsIGZsb2F0IGVuZXJneSkge1xuICB2ZWMyIGUgPSB2ZWMyKDAuMDAyNSwgMC4wKTtcbiAgZmxvYXQgZCA9IHJlYWN0b3JNYXAocCwgdCwgZW5lcmd5KS54O1xuICByZXR1cm4gbm9ybWFsaXplKHZlYzMoXG4gICAgcmVhY3Rvck1hcChwICsgZS54eXksIHQsIGVuZXJneSkueCAtIGQsXG4gICAgcmVhY3Rvck1hcChwICsgZS55eHksIHQsIGVuZXJneSkueCAtIGQsXG4gICAgcmVhY3Rvck1hcChwICsgZS55eXgsIHQsIGVuZXJneSkueCAtIGRcbiAgKSk7XG59XG5cbnZlYzMgcmVhY3RvckJhY2tncm91bmQodmVjMyByZCwgZmxvYXQgdCwgZmxvYXQgZW5lcmd5KSB7XG4gIGZsb2F0IGhvcml6b24gPSBwb3cobWF4KDAuMCwgMS4wIC0gYWJzKHJkLnkgKyAwLjAyKSAqIDUuMCksIDcuMCk7XG4gIGZsb2F0IHN0YXJTZWVkID0gaGFzaChmbG9vcih2ZWMyKGF0YW4ocmQueiwgcmQueCksIHJkLnkpICogdmVjMigyMTAuMCwgMzQwLjApKSk7XG4gIGZsb2F0IHN0YXJzID0gc3RlcCgwLjk5Miwgc3RhclNlZWQpICogcG93KG1heChyZC55ICsgMC40LCAwLjApLCAxLjUpO1xuICB2ZWMzIGR1c2sgPSBtaXgodmVjMygwLjAwMywgMC4wMDQsIDAuMDEyKSwgdmVjMygwLjAzNSwgMC4wMDgsIDAuMDcpLCBtYXgocmQueSwgMC4wKSk7XG4gIGR1c2sgKz0gaHN2MnJnYih2ZWMzKGZyYWN0KHVfaHVlICsgMC42NCksIDAuODIsIDEuMCkpICogaG9yaXpvbiAqICgwLjEyICsgZW5lcmd5ICogMC4xOCk7XG4gIGR1c2sgKz0gc3RhcnMgKiAoMC40NSArIDAuNTUgKiBzaW4oc3RhclNlZWQgKiA5MC4wICsgdCAqIDIuMCkpO1xuICByZXR1cm4gZHVzaztcbn1cblxudmVjMyByZW5kZXJSZWFjdG9yKHZlYzIgdXYsIGZsb2F0IHQsIGZsb2F0IGVuZXJneSkge1xuICBmbG9hdCBhc3BlY3QgPSB1X3Jlcy54IC8gbWF4KHVfcmVzLnksIDEuMCk7XG4gIHZlYzIgc2NyZWVuID0gKHV2ICogMi4wIC0gMS4wKSAqIHZlYzIoYXNwZWN0LCAxLjApO1xuXG4gIGZsb2F0IG1vdGlvbiA9IHVfbW90aW9uO1xuICBmbG9hdCBwb2ludGVyWWF3ID0gKHVfcG9pbnRlci54IC0gMC41KSAqIHVfcG9pbnRlcl9hY3RpdmUgKiAxLjE7XG4gIGZsb2F0IHBvaW50ZXJQaXRjaCA9ICh1X3BvaW50ZXIueSAtIDAuNSkgKiB1X3BvaW50ZXJfYWN0aXZlICogMC41NTtcbiAgZmxvYXQgb3JiaXQgPSB0ICogKDAuMTIgKyBtb3Rpb24gKiAwLjE2KSArIHBvaW50ZXJZYXc7XG4gIHZlYzMgcm8gPSB2ZWMzKHNpbihvcmJpdCkgKiAzLjQ1LCAwLjI4ICsgc2luKHQgKiAwLjE5KSAqIDAuMjIgLSBwb2ludGVyUGl0Y2gsIGNvcyhvcmJpdCkgKiAzLjQ1KTtcbiAgdmVjMyB0YXJnZXQgPSB2ZWMzKDAuMCwgLTAuMDQsIDAuMCk7XG4gIHZlYzMgZm9yd2FyZCA9IG5vcm1hbGl6ZSh0YXJnZXQgLSBybyk7XG4gIHZlYzMgcmlnaHQgPSBub3JtYWxpemUoY3Jvc3MoZm9yd2FyZCwgdmVjMygwLjAsIDEuMCwgMC4wKSkpO1xuICB2ZWMzIHVwID0gY3Jvc3MocmlnaHQsIGZvcndhcmQpO1xuICB2ZWMzIHJkID0gbm9ybWFsaXplKGZvcndhcmQgKiAxLjc1ICsgcmlnaHQgKiBzY3JlZW4ueCArIHVwICogc2NyZWVuLnkpO1xuXG4gIGZsb2F0IHRyYXZlbCA9IDAuMDtcbiAgZmxvYXQgbWF0ZXJpYWwgPSAwLjA7XG4gIGJvb2wgaGl0ID0gZmFsc2U7XG4gIGZvciAoaW50IGkgPSAwOyBpIDwgNjQ7IGkrKykge1xuICAgIHZlYzMgcG9zID0gcm8gKyByZCAqIHRyYXZlbDtcbiAgICB2ZWMyIHNjZW5lID0gcmVhY3Rvck1hcChwb3MsIHQsIGVuZXJneSk7XG4gICAgaWYgKHNjZW5lLnggPCAwLjAwMjUpIHtcbiAgICAgIG1hdGVyaWFsID0gc2NlbmUueTtcbiAgICAgIGhpdCA9IHRydWU7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgdHJhdmVsICs9IHNjZW5lLnggKiAwLjcyO1xuICAgIGlmICh0cmF2ZWwgPiA4LjApIGJyZWFrO1xuICB9XG5cbiAgdmVjMyBjb2wgPSByZWFjdG9yQmFja2dyb3VuZChyZCwgdCwgZW5lcmd5KTtcbiAgaWYgKGhpdCkge1xuICAgIHZlYzMgcG9zID0gcm8gKyByZCAqIHRyYXZlbDtcbiAgICB2ZWMzIG5vcm1hbCA9IHJlYWN0b3JOb3JtYWwocG9zLCB0LCBlbmVyZ3kpO1xuICAgIHZlYzMgdmlld0RpciA9IC1yZDtcbiAgICB2ZWMzIGxpZ2h0RGlyID0gbm9ybWFsaXplKHZlYzMoLTAuNiwgMC45LCAwLjQ1KSk7XG4gICAgZmxvYXQgZGlmZnVzZSA9IG1heChkb3Qobm9ybWFsLCBsaWdodERpciksIDAuMCk7XG4gICAgZmxvYXQgcmltID0gcG93KDEuMCAtIG1heChkb3Qobm9ybWFsLCB2aWV3RGlyKSwgMC4wKSwgMi40KTtcbiAgICBmbG9hdCBzcGVjdWxhciA9IHBvdyhtYXgoZG90KHJlZmxlY3QoLWxpZ2h0RGlyLCBub3JtYWwpLCB2aWV3RGlyKSwgMC4wKSwgNDIuMCk7XG4gICAgdmVjMyBuZW9uID0gaHN2MnJnYih2ZWMzKGZyYWN0KHVfaHVlICsgMC43MiArIGVuZXJneSAqIDAuMDgpLCAwLjksIDEuMCkpO1xuICAgIHZlYzMgaG90ID0gaHN2MnJnYih2ZWMzKGZyYWN0KHVfaHVlICsgMC4wNiksIDAuOCwgMS4wKSk7XG5cbiAgICBpZiAobWF0ZXJpYWwgPCAxLjUpIHtcbiAgICAgIHZlYzMgc3BoZXJlID0gbm9ybWFsaXplKHBvcyk7XG4gICAgICB2ZWMyIG1lZGlhVXYgPSB2ZWMyKGF0YW4oc3BoZXJlLnosIHNwaGVyZS54KSAvIFRBVSArIDAuNSwgYXNpbihjbGFtcChzcGhlcmUueSwgLTEuMCwgMS4wKSkgLyBQSSArIDAuNSk7XG4gICAgICBtZWRpYVV2LnggKz0gdCAqIDAuMDI1O1xuICAgICAgdmVjMyBtZWRpYSA9IHZpZGVvQXQoZnJhY3QobWVkaWFVdikpO1xuICAgICAgZmxvYXQgcHVsc2UgPSAwLjU1ICsgMC40NSAqIHNpbihsZW5ndGgocG9zKSAqIDM4LjAgLSB0ICogNC4wIC0gZW5lcmd5ICogNy4wKTtcbiAgICAgIGNvbCA9IG1lZGlhICogKDAuMjQgKyBkaWZmdXNlICogMC45KTtcbiAgICAgIGNvbCArPSBtaXgobmVvbiwgaG90LCBwdWxzZSkgKiAocmltICogMS4zNSArIHNwZWN1bGFyICogMS43ICsgcHVsc2UgKiBlbmVyZ3kgKiAwLjIyKTtcbiAgICB9IGVsc2UgaWYgKG1hdGVyaWFsIDwgMi41KSB7XG4gICAgICBmbG9hdCBjdXJyZW50ID0gMC42NSArIDAuMzUgKiBzaW4oYXRhbihwb3MueiwgcG9zLngpICogMTIuMCAtIHQgKiA3LjAgKyBwb3MueSAqIDE4LjApO1xuICAgICAgY29sID0gbWl4KG5lb24sIGhvdCwgY3VycmVudCkgKiAoMS40ICsgZW5lcmd5ICogMS4zKTtcbiAgICAgIGNvbCArPSB2ZWMzKDEuMCkgKiBzcGVjdWxhciAqIDIuMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdmVjMiBjZWxsID0gYWJzKGZyYWN0KHBvcy54eiAqIG1peCgyLjIsIDUuNSwgdV9zaGFkZXJfZGV0YWlsKSkgLSAwLjUpO1xuICAgICAgZmxvYXQgZ3JpZCA9IDEuMCAtIHNtb290aHN0ZXAoMC4wMTUsIDAuMDU1LCBtaW4oY2VsbC54LCBjZWxsLnkpKTtcbiAgICAgIHZlYzMgcmVmbGVjdGVkID0gcmVhY3RvckJhY2tncm91bmQocmVmbGVjdChyZCwgbm9ybWFsKSwgdCwgZW5lcmd5KTtcbiAgICAgIGNvbCA9IHJlZmxlY3RlZCAqIDAuMzUgKyB2ZWMzKDAuMDA4LCAwLjAxLCAwLjAxOCkgKiAoMC4zICsgZGlmZnVzZSk7XG4gICAgICBjb2wgKz0gbmVvbiAqIGdyaWQgKiAoMC40NSArIGVuZXJneSAqIDAuOSkgKiBleHAoLWxlbmd0aChwb3MueHopICogMC4xNCk7XG4gICAgICBjb2wgKz0gc3BlY3VsYXIgKiAwLjg7XG4gICAgfVxuXG4gICAgZmxvYXQgZm9nID0gMS4wIC0gZXhwKC10cmF2ZWwgKiB0cmF2ZWwgKiAwLjAxOCk7XG4gICAgY29sID0gbWl4KGNvbCwgcmVhY3RvckJhY2tncm91bmQocmQsIHQsIGVuZXJneSksIGZvZyk7XG4gIH1cblxuICAvLyBDaGVhcCBibG9vbSBhcm91bmQgdGhlIGNvcmUgc2lsaG91ZXR0ZSBrZWVwcyBpdCByZWFkYWJsZSBhZ2FpbnN0IGRhcmsgbWVkaWEuXG4gIGZsb2F0IGNvcmVHbG93ID0gMC4wMTggLyBtYXgoMC4wMTgsIGxlbmd0aChzY3JlZW4pIC0gMC4zKTtcbiAgY29sICs9IGhzdjJyZ2IodmVjMyhmcmFjdCh1X2h1ZSArIDAuNyksIDAuODIsIDEuMCkpICogY29yZUdsb3cgKiAoMC4xMiArIGVuZXJneSAqIDAuMTIpO1xuICByZXR1cm4gY29sO1xufVxuXG52ZWMzIHNoYWRlcldvcmxkQ29sb3IodmVjMyBjb2wsIHZlYzIgdXYsIGZsb2F0IHQsIGZsb2F0IGVuZXJneSkge1xuICBmbG9hdCBtb2RlID0gZmxvb3IodV9zaGFkZXJfbW9kZSArIDAuNSk7XG4gIGZsb2F0IGFtb3VudCA9IHVfc2hhZGVyX21peDtcbiAgZmxvYXQgbHVtID0gZG90KGNvbCwgdmVjMygwLjI5OSwgMC41ODcsIDAuMTE0KSk7XG4gIHZlYzMgbG9vayA9IGNvbDtcbiAgZmxvYXQgYXNwZWN0ID0gdV9yZXMueCAvIG1heCh1X3Jlcy55LCAxLjApO1xuICB2ZWMyIHAgPSAodXYgLSAwLjUpICogdmVjMihhc3BlY3QsIDEuMCk7XG5cbiAgaWYgKG1vZGUgPCAwLjUpIHtcbiAgICByZXR1cm4gY29sO1xuICB9IGVsc2UgaWYgKG1vZGUgPCAxLjUpIHsgLy8gTWVyY3VyeSBjZWxsc1xuICAgIHZlYzIgY2VudGVyO1xuICAgIGZsb2F0IGJvcmRlcjtcbiAgICBmbG9hdCBjZWxscyA9IG1peCgzLjAsIDE0LjAsIHVfc2hhZGVyX2RldGFpbCk7XG4gICAgdm9yb25vaUNlbGwocCAqIGNlbGxzLCB0ICogMC4xNiwgY2VudGVyLCBib3JkZXIpO1xuICAgIGZsb2F0IHNlYW0gPSBzbW9vdGhzdGVwKDAuMTMsIDAuMDE1LCBib3JkZXIpO1xuICAgIGZsb2F0IHNoaW5lID0gcG93KDEuMCAtIGNsYW1wKGx1bSwgMC4wLCAxLjApLCAyLjApO1xuICAgIGxvb2sgPSBtaXgoY29sICogdmVjMygwLjU4LCAwLjcsIDAuODIpLCB2ZWMzKDEuMCwgMC43OCwgMC45NSksIHNlYW0pO1xuICAgIGxvb2sgKz0gc2hpbmUgKiB2ZWMzKDAuMTgsIDAuMzIsIDAuNDYpO1xuICB9IGVsc2UgaWYgKG1vZGUgPCAyLjUpIHsgLy8gV29ybWhvbGVcbiAgICBmbG9hdCByaW5nID0gMC41ICsgMC41ICogc2luKGxlbmd0aChwKSAqIDc0LjAgLSB0ICogNS4wKTtcbiAgICBsb29rID0gbWl4KGNvbCwgY29sLmJyZywgcmluZyAqIDAuNyk7XG4gICAgbG9vayArPSBoc3YycmdiKHZlYzMoZnJhY3QobGVuZ3RoKHApICogMi40IC0gdCAqIDAuMDgpLCAwLjksIDEuMCkpICogcmluZyAqIDAuMTY7XG4gIH0gZWxzZSBpZiAobW9kZSA8IDMuNSkgeyAvLyBQaXhlbCBtZWx0XG4gICAgZmxvYXQgc3RlcHMgPSBtaXgoMTIuMCwgMy4wLCBhbW91bnQpO1xuICAgIGxvb2sgPSBmbG9vcihjb2wgKiBzdGVwcykgLyBzdGVwcztcbiAgICBsb29rID0gbWl4KGxvb2ssIGxvb2suZ2JyLCBzdGVwKDAuNjQsIGhhc2goZmxvb3IoZ2xfRnJhZ0Nvb3JkLnh5IC8gNy4wKSArIGZsb29yKHQgKiAyLjApKSkgKiAwLjQ1KTtcbiAgfSBlbHNlIGlmIChtb2RlIDwgNC41KSB7IC8vIFRoZXJtYWwgZ2hvc3RcbiAgICBmbG9hdCBoZWF0ID0gY2xhbXAobHVtICogMS4xNSArIGZibShwICogNS4wICsgdCAqIDAuMTIpICogMC4yMiArIGVuZXJneSAqIDAuMywgMC4wLCAxLjApO1xuICAgIGxvb2sgPSB0aGVybWFsUGFsZXR0ZShoZWF0KTtcbiAgICBsb29rICs9IHRoZXJtYWxQYWxldHRlKGNsYW1wKGVkZ2VBdCh1dikgKyAwLjI1LCAwLjAsIDEuMCkpICogZWRnZUF0KHV2KSAqIDAuNDI7XG4gIH0gZWxzZSBpZiAobW9kZSA8IDUuNSkgeyAvLyBIYWxmdG9uZSByaW90XG4gICAgZmxvYXQgc2NhbGUgPSBtaXgoMy4wLCAxMS4wLCB1X3NoYWRlcl9kZXRhaWwpO1xuICAgIHZlYzIgZG90VXYgPSBmcmFjdChnbF9GcmFnQ29vcmQueHkgLyBzY2FsZSkgLSAwLjU7XG4gICAgZmxvYXQgZG90TWFzayA9IHNtb290aHN0ZXAoMC40OCwgMC4wOCwgbGVuZ3RoKGRvdFV2KSAvIG1heCgwLjE4LCAxLjAgLSBsdW0pKTtcbiAgICB2ZWMzIGluayA9IGhzdjJyZ2IodmVjMyhmcmFjdChsdW0gKiAwLjcyICsgdCAqIDAuMDE1KSwgMC44NiwgMC45NSkpO1xuICAgIGxvb2sgPSBtaXgodmVjMygwLjAyNSksIGluaywgZG90TWFzayk7XG4gICAgZmxvYXQgY3Jvc3MgPSBzdGVwKDAuOTMsIHNpbigoZ2xfRnJhZ0Nvb3JkLnggKyBnbF9GcmFnQ29vcmQueSkgKiAwLjIyKSAqIDAuNSArIDAuNSk7XG4gICAgbG9vayArPSBjcm9zcyAqIGNvbCAqIDAuMzU7XG4gIH0gZWxzZSBpZiAobW9kZSA8IDYuNSkgeyAvLyBEYXRhbW9zaFxuICAgIGZsb2F0IGJsb2NrID0gaGFzaChmbG9vcih1diAqIHZlYzIoMzIuMCwgMTguMCkpICsgZmxvb3IodCAqIDMuMCkpO1xuICAgIGxvb2sgPSBtaXgoY29sLCBjb2wucmJnLCBzdGVwKDAuNTgsIGJsb2NrKSAqIDAuOCk7XG4gICAgbG9vayA9IGZsb29yKGxvb2sgKiBtaXgoMjAuMCwgNS4wLCBhbW91bnQpKSAvIG1peCgyMC4wLCA1LjAsIGFtb3VudCk7XG4gICAgbG9vay5yICs9IHN0ZXAoMC44MiwgYmxvY2spICogMC4zO1xuICB9IGVsc2UgaWYgKG1vZGUgPCA3LjUpIHsgLy8gUmVjdXJzaXZlIGRyZWFtXG4gICAgZmxvYXQgZGlhbW9uZCA9IGFicyhmcmFjdCgocC54ICsgcC55KSAqIDQuMCkgLSAwLjUpICsgYWJzKGZyYWN0KChwLnggLSBwLnkpICogNC4wKSAtIDAuNSk7XG4gICAgbG9vayA9IG1peChjb2wsIDEuMCAtIGNvbC5iZ3IsIHNtb290aHN0ZXAoMC4zNCwgMC43NSwgZGlhbW9uZCkpO1xuICAgIGxvb2sgKj0gMC44MiArIDAuMjggKiBzaW4oZGlhbW9uZCAqIDE4LjAgLSB0KTtcbiAgfSBlbHNlIGlmIChtb2RlIDwgOC41KSB7IC8vIE9pbCBzbGlja1xuICAgIGZsb2F0IGJhbmRzID0gZmxvb3IoKGx1bSArIGZibShwICogNy4wICsgdCAqIDAuMSkgKiAwLjM4KSAqIG1peCg1LjAsIDE3LjAsIHVfc2hhZGVyX2RldGFpbCkpO1xuICAgIGZsb2F0IGh1ZSA9IGZyYWN0KGJhbmRzICogMC4xMzcgKyBsdW0gKiAwLjMgKyB0ICogMC4wMjUpO1xuICAgIGxvb2sgPSBoc3YycmdiKHZlYzMoaHVlLCAwLjg2LCAwLjI0ICsgbHVtICogMC45MikpO1xuICAgIGxvb2sgKz0gcG93KGVkZ2VBdCh1diksIDAuNykgKiB2ZWMzKDAuNCwgMC42NSwgMS4wKTtcbiAgfSBlbHNlIGlmIChtb2RlIDwgOS41KSB7IC8vIFNsaXQgc2Nhbm5lclxuICAgIGZsb2F0IHN0cmlwZSA9IDAuNSArIDAuNSAqIHNpbih1di54ICogbWl4KDcwLjAsIDI4MC4wLCB1X3NoYWRlcl9kZXRhaWwpICsgdCAqIDQuMCk7XG4gICAgbG9vayA9IG1peChjb2wuZ3JiLCBjb2wuYnJnLCBzdHJpcGUpO1xuICAgIGxvb2sgKj0gMC43MiArIHN0cmlwZSAqIDAuNTtcbiAgfSBlbHNlIGlmIChtb2RlIDwgMTAuNSkgeyAvLyBTaW5ndWxhcml0eSBsZW5zXG4gICAgZmxvYXQgciA9IGxlbmd0aChwIC0gdmVjMihzaW4odCAqIDAuMjMpLCBjb3ModCAqIDAuMTkpKSAqIDAuMTYgKiB1X21vdGlvbik7XG4gICAgZmxvYXQgdm9pZERpc2sgPSBzbW9vdGhzdGVwKDAuMTE1LCAwLjE2NSwgcik7XG4gICAgZmxvYXQgYWNjcmV0aW9uID0gZXhwKC1hYnMociAtIDAuMjA1KSAqIDQ4LjApO1xuICAgIHZlYzMgZmlyZSA9IGhzdjJyZ2IodmVjMyhmcmFjdCh0ICogMC4wMjUgKyByKSwgMC45MiwgMS4wKSk7XG4gICAgbG9vayA9IGNvbCAqIHZvaWREaXNrICsgZmlyZSAqIGFjY3JldGlvbiAqICgxLjIgKyBlbmVyZ3kpO1xuICB9IGVsc2UgaWYgKG1vZGUgPCAxMS41KSB7IC8vIFN0YWluZWQgZ2xhc3NcbiAgICB2ZWMyIGNlbnRlcjtcbiAgICBmbG9hdCBib3JkZXI7XG4gICAgZmxvYXQgY2VsbHMgPSBtaXgoNC4wLCAxOC4wLCB1X3NoYWRlcl9kZXRhaWwpO1xuICAgIHZvcm9ub2lDZWxsKHAgKiBjZWxscywgdCAqIDAuMDQsIGNlbnRlciwgYm9yZGVyKTtcbiAgICBmbG9hdCBsZWFkID0gc21vb3Roc3RlcCgwLjA5NSwgMC4wMjUsIGJvcmRlcik7XG4gICAgdmVjMyBnbGFzcyA9IGhzdjJyZ2IodmVjMyhmcmFjdChsdW0gKiAwLjggKyBoYXNoKGZsb29yKGNlbnRlcikpICogMC40NSArIHVfaHVlKSwgMC44MiwgMC4zNSArIGx1bSAqIDAuNzgpKTtcbiAgICBsb29rID0gbWl4KGdsYXNzLCB2ZWMzKDAuMDA1KSwgbGVhZCAqIDAuOTQpO1xuICB9IGVsc2UgaWYgKG1vZGUgPCAxMi41KSB7IC8vIFNwZWN0cmFsIFgtcmF5XG4gICAgZmxvYXQgZWRnZSA9IGVkZ2VBdCh1dik7XG4gICAgZmxvYXQgYm9uZSA9IHBvdygxLjAgLSBsdW0sIDEuNjUpO1xuICAgIGxvb2sgPSB2ZWMzKDAuMCwgYm9uZSAqIDAuNDIsIGJvbmUgKiAwLjY4KSArIGhzdjJyZ2IodmVjMyhmcmFjdChlZGdlICsgdCAqIDAuMDQpLCAwLjc4LCAxLjApKSAqIGVkZ2UgKiAyLjI7XG4gIH0gZWxzZSBpZiAobW9kZSA8IDEzLjUpIHsgLy8gQ1JUIHZvaWRcbiAgICBmbG9hdCB0cmlhZCA9IG1vZChnbF9GcmFnQ29vcmQueCwgMy4wKTtcbiAgICB2ZWMzIG1hc2sgPSB0cmlhZCA8IDEuMCA/IHZlYzMoMS4wLCAwLjIyLCAwLjE4KSA6ICh0cmlhZCA8IDIuMCA/IHZlYzMoMC4xOCwgMS4wLCAwLjI0KSA6IHZlYzMoMC4yLCAwLjMsIDEuMCkpO1xuICAgIGZsb2F0IHJhc3RlciA9IDAuNzIgKyAwLjI4ICogc2luKGdsX0ZyYWdDb29yZC55ICogUEkpO1xuICAgIGxvb2sgPSBwb3cobWF4KGNvbCwgMC4wKSwgdmVjMygwLjc4KSkgKiBtYXNrICogMS43NSAqIHJhc3RlcjtcbiAgfSBlbHNlIGlmIChtb2RlIDwgMTQuNSkgeyAvLyBDdWJpc3Qgc2hhdHRlclxuICAgIGZsb2F0IGZhY2V0cyA9IGZsb29yKGx1bSAqIDUuMCkgLyA1LjA7XG4gICAgbG9vayA9IGhzdjJyZ2IodmVjMyhmcmFjdChmYWNldHMgKiAwLjcyICsgaGFzaChmbG9vcihwICogOC4wKSkgKiAwLjI4KSwgMC43NiwgMC4yOCArIGZhY2V0cykpO1xuICAgIGxvb2sgKz0gZWRnZUF0KHV2KSAqIHZlYzMoMS4wLCAwLjQ1LCAwLjE4KTtcbiAgfSBlbHNlIGlmIChtb2RlIDwgMTUuNSkgeyAvLyBFY2hvIGJsb29tXG4gICAgdmVjMiByYWRpYWwgPSBub3JtYWxpemUocCArIDAuMDAwMSkgLyB2ZWMyKGFzcGVjdCwgMS4wKTtcbiAgICB2ZWMzIGVjaG9BID0gc2NlbmVBdCh1diArIHJhZGlhbCAqIDAuMDE4LCByYWRpYWwgKiAwLjAwOCk7XG4gICAgdmVjMyBlY2hvQiA9IHNjZW5lQXQodXYgKyByYWRpYWwgKiAwLjA0MiwgcmFkaWFsICogMC4wMTYpO1xuICAgIGxvb2sgPSBtYXgoY29sLCBlY2hvQSAqIHZlYzMoMS4wLCAwLjM1LCAwLjgpKTtcbiAgICBsb29rID0gbWF4KGxvb2ssIGVjaG9CICogdmVjMygwLjE1LCAwLjcsIDEuMCkpO1xuICB9IGVsc2UgaWYgKG1vZGUgPCAxNi41KSB7IC8vIExhc2VyIGV0Y2hcbiAgICBmbG9hdCBlZGdlID0gZWRnZUF0KHV2KTtcbiAgICBmbG9hdCBldGNoZWQgPSBzbW9vdGhzdGVwKDAuMTIsIDAuNTIsIGVkZ2UgKyBhYnMobHVtIC0gMC41KSAqIDAuMTgpO1xuICAgIHZlYzMgbGFzZXIgPSBoc3YycmdiKHZlYzMoZnJhY3QodV9odWUgKyB0ICogMC4wNSArIHV2LnkgKiAwLjI1KSwgMS4wLCAxLjApKTtcbiAgICBsb29rID0gbGFzZXIgKiBldGNoZWQgKiAoMS4yICsgZWRnZSkgKyBjb2wgKiAwLjA4O1xuICB9IGVsc2UgaWYgKG1vZGUgPCAxNy41KSB7IC8vIExpcXVpZCB0b3BvZ3JhcGh5XG4gICAgZmxvYXQgdGVycmFpbiA9IGx1bSArIGZibShwICogbWl4KDQuMCwgMTIuMCwgdV9zaGFkZXJfZGV0YWlsKSArIHQgKiAwLjEpICogMC40MjtcbiAgICBmbG9hdCBjb250b3VyID0gc21vb3Roc3RlcCgwLjQyLCAwLjUsIGFicyhmcmFjdCh0ZXJyYWluICogOS4wKSAtIDAuNSkpO1xuICAgIGxvb2sgPSBoc3YycmdiKHZlYzMoZnJhY3QodGVycmFpbiAqIDAuNDggKyB0ICogMC4wMiksIDAuNzgsIDAuMTggKyBsdW0pKTtcbiAgICBsb29rICs9ICgxLjAgLSBjb250b3VyKSAqIHZlYzMoMC41NSwgMC45MiwgMS4wKSAqIDAuNTtcbiAgfSBlbHNlIHsgLy8gUmVhY3RvciAzRFxuICAgIGxvb2sgPSByZW5kZXJSZWFjdG9yKHV2LCB0LCBlbmVyZ3kpO1xuICB9XG5cbiAgcmV0dXJuIG1peChjb2wsIGxvb2ssIGFtb3VudCk7XG59XG5cbnZvaWQgbWFpbigpIHtcbiAgZmxvYXQgdCA9IHVfdGltZSAqIHVfc3BlZWQ7XG4gIGZsb2F0IGVuZXJneSA9IGNsYW1wKHVfYXVkaW9fbGV2ZWwgKiB1X2F1ZGlvLCAwLjAsIDEuMCk7XG4gIHZlYzIgdXYgPSB2X3V2O1xuXG4gIHV2ID0gc2hhZGVyV29ybGRXYXJwKHV2LCB0LCBlbmVyZ3kpO1xuXG4gIGlmICh1X2thbGVpZG8gPiAwLjAxNSkge1xuICAgIHV2ID0gbWl4KHV2LCBrYWxlaWRvc2NvcGUodXYsIHVfa2FsZWlkbyksIHNtb290aHN0ZXAoMC4wLCAwLjcsIHVfa2FsZWlkbykpO1xuICB9XG5cbiAgaWYgKHVfbWlycm9yID4gMC4wMSkge1xuICAgIHZlYzIgZm9sZGVkID0gYWJzKHV2ICogMi4wIC0gMS4wKTtcbiAgICBpZiAodV9taXJyb3IgPCAwLjUpIGZvbGRlZC55ID0gdXYueTtcbiAgICB1diA9IG1peCh1diwgZm9sZGVkLCBzbW9vdGhzdGVwKDAuMCwgMC43MiwgdV9taXJyb3IpKTtcbiAgfVxuXG4gIHV2ID0gcG9pbnRlcldhcnAodXYsIHQsIGVuZXJneSk7XG4gIHV2ID0gc3BhdGlhbFdhcnAodXYsIHQsIGVuZXJneSk7XG5cbiAgaWYgKHVfZ2xpdGNoID4gMC4wMSkge1xuICAgIGZsb2F0IHNsaWNlID0gZmxvb3IodXYueSAqIG1peCg4LjAsIDcwLjAsIHVfZ2xpdGNoKSk7XG4gICAgZmxvYXQgYnVyc3QgPSBzdGVwKDAuNzIgLSB1X2dsaXRjaCAqIDAuNCwgaGFzaCh2ZWMyKHNsaWNlLCBmbG9vcih0ICogNy4wKSkpKTtcbiAgICB1di54ICs9IChoYXNoKHZlYzIoc2xpY2UsIGZsb29yKHQgKiAxMy4wKSkpIC0gMC41KSAqIHVfZ2xpdGNoICogMC4xNyAqIGJ1cnN0O1xuICB9XG5cbiAgdmVjMiBmZWVkYmFja0RyaWZ0ID0gKHZlYzIoZmJtKHV2ICogMy4wICsgdCAqIDAuMSksIGZibSh1di55eCAqIDMuMCAtIHQgKiAwLjEpKSAtIDAuNSlcbiAgICAqIHVfZmVlZGJhY2sgKiB1X3dhcnAgKiAwLjAxODtcbiAgZmVlZGJhY2tEcmlmdCArPSB1X3BvaW50ZXJfdmVsb2NpdHkgKiB1X2ZlZWRiYWNrICogdV9wb2ludGVyX2Rvd24gKiAwLjAyNTtcblxuICB2ZWMyIGNocm9tYURpciA9IG5vcm1hbGl6ZSgodXYgLSBtaXgodmVjMigwLjUpLCB1X3BvaW50ZXIsIHVfcG9pbnRlcl9hY3RpdmUpKSAqIHZlYzIodV9yZXMueCAvIHVfcmVzLnksIDEuMCkgKyAwLjAwMDEpO1xuICBmbG9hdCBzcGxpdCA9IHVfY2hyb21hICogKDAuMDA0ICsgdV9jaHJvbWEgKiAwLjAyNikgKiAoMS4wICsgZW5lcmd5KTtcbiAgaWYgKHVfbW91c2VfbW9kZSA+IDEuNSAmJiB1X21vdXNlX21vZGUgPCAyLjUpIHtcbiAgICBzcGxpdCAqPSAxLjAgKyB1X21vdXNlX2ZvcmNlICogdV9wb2ludGVyX2FjdGl2ZSAqIDMuMDtcbiAgfVxuXG4gIHZlYzMgY2VudGVyID0gc2NlbmVBdCh1diwgZmVlZGJhY2tEcmlmdCk7XG4gIHZlYzMgY29sID0gdmVjMyhcbiAgICBzY2VuZUF0KHV2ICsgY2hyb21hRGlyICogc3BsaXQsIGZlZWRiYWNrRHJpZnQpLnIsXG4gICAgY2VudGVyLmcsXG4gICAgc2NlbmVBdCh1diAtIGNocm9tYURpciAqIHNwbGl0ICogMS4yLCBmZWVkYmFja0RyaWZ0KS5iXG4gICk7XG5cbiAgdmVjMyBoc3YgPSByZ2IyaHN2KG1heChjb2wsIDAuMCkpO1xuICBoc3YueCA9IGZyYWN0KGhzdi54ICsgdV9odWUgKyBzaW4odXYueCAqIDcuMCArIHQgKiB1X21vdGlvbikgKiB1X2h1ZSAqIDAuMTIpO1xuICBoc3YueSA9IGNsYW1wKGhzdi55ICogbWl4KDAuMTUsIDIuMTUsIHVfc2F0dXJhdGlvbiksIDAuMCwgMS4wKTtcbiAgY29sID0gaHN2MnJnYihoc3YpO1xuICBjb2wgPSAoY29sIC0gMC41KSAqIG1peCgwLjU1LCAyLjI1LCB1X2NvbnRyYXN0KSArIDAuNTtcblxuICB2ZWMzIHNvbGFyID0gMS4wIC0gYWJzKGNvbCAqIDIuMCAtIDEuMCk7XG4gIGNvbCA9IG1peChjb2wsIHNvbGFyLCB1X3NvbGFyaXplKTtcblxuICBmbG9hdCBlZGdlID0gZWRnZUF0KHV2KSAqIHVfZWRnZXM7XG4gIHZlYzMgZWRnZUNvbG9yID0gaHN2MnJnYih2ZWMzKGZyYWN0KHVfaHVlICsgdCAqIDAuMDM1ICsgZWRnZSksIDAuOTUsIDEuMCkpO1xuICBjb2wgKz0gZWRnZUNvbG9yICogZWRnZSAqICgwLjU1ICsgdV9lZGdlcyAqIDEuNCk7XG5cbiAgZmxvYXQgc2hhcGUgPSBzeW50aFNoYXBlcyh1diwgdCAqIHVfbW90aW9uKSAqIHVfc2hhcGVzO1xuICB2ZWMzIHNoYXBlQ29sb3IgPSBoc3YycmdiKHZlYzMoZnJhY3QodV9odWUgKyAwLjE3ICsgdCAqIDAuMDI1KSwgMC45LCAxLjApKTtcbiAgY29sID0gbWl4KGNvbCwgbWF4KGNvbCwgc2hhcGVDb2xvciksIHNoYXBlICogMC44Mik7XG5cbiAgY29sID0gc2hhZGVyV29ybGRDb2xvcihjb2wsIHV2LCB0LCBlbmVyZ3kpO1xuXG4gIGlmICh1X2dsaXRjaCA+IDAuMzUpIHtcbiAgICBmbG9hdCBsZXZlbHMgPSBtaXgoMzIuMCwgNC4wLCAodV9nbGl0Y2ggLSAwLjM1KSAvIDAuNjUpO1xuICAgIGNvbCA9IG1peChjb2wsIGZsb29yKGNvbCAqIGxldmVscykgLyBsZXZlbHMsICh1X2dsaXRjaCAtIDAuMzUpICogMC43Mik7XG4gIH1cblxuICBmbG9hdCBncmFpbiA9IGhhc2godl91diAqIHVfcmVzICsgZnJhY3QodCkgKiA5MTMuNykgLSAwLjU7XG4gIGNvbCArPSBncmFpbiAqIHVfZ3JhaW4gKiAwLjI4O1xuICBmbG9hdCBzY2FuID0gMC41ICsgMC41ICogc2luKHZfdXYueSAqIHVfcmVzLnkgKiBtaXgoMC40NSwgMS41LCB1X3NjYW5saW5lcykpO1xuICBjb2wgKj0gMS4wIC0gdV9zY2FubGluZXMgKiAoMC4wNSArIDAuMiAqIHNjYW4pO1xuXG4gIC8vIFNvZnQgbHVtaW5hbmNlIHB1bHNlIFx1MjAxNCBuZXZlciBoYXJkIG9uL29mZiAodGhhdCByZWFkcyBhcyBicm9rZW4gZmxpY2tlcikuXG4gIGZsb2F0IGZsYXNoID0gMC41ICsgMC41ICogc2luKHQgKiBtaXgoMy41LCAxMS4wLCB1X3N0cm9iZSkgKyBlbmVyZ3kgKiBQSSk7XG4gIGNvbCAqPSBtaXgoMS4wLCBtaXgoMC43OCwgMS4yMiwgZmxhc2gpLCB1X3N0cm9iZSAqIDAuNSk7XG4gIGNvbCAqPSAxLjAgKyBlbmVyZ3kgKiAwLjE2O1xuXG4gIGZsb2F0IHZpZ25ldHRlID0gc21vb3Roc3RlcCgwLjkyLCAwLjIyLCBsZW5ndGgodl91diAtIDAuNSkpO1xuICBjb2wgKj0gbWl4KDEuMCwgdmlnbmV0dGUsIDAuMTQpO1xuICBnbF9GcmFnQ29sb3IgPSB2ZWM0KGNsYW1wKGNvbCwgMC4wLCAxLjApLCAxLjApO1xufVxuYDtcblxuZnVuY3Rpb24gY29tcGlsZShnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LCB0eXBlOiBudW1iZXIsIHNvdXJjZTogc3RyaW5nKTogV2ViR0xTaGFkZXIge1xuICBjb25zdCBzaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIodHlwZSk7XG4gIGlmICghc2hhZGVyKSB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gY3JlYXRlIHNoYWRlclwiKTtcbiAgZ2wuc2hhZGVyU291cmNlKHNoYWRlciwgc291cmNlKTtcbiAgZ2wuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xuICBpZiAoIWdsLmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKSkge1xuICAgIGNvbnN0IGluZm8gPSBnbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcikgfHwgXCJVbmtub3duIHNoYWRlciBlcnJvclwiO1xuICAgIGdsLmRlbGV0ZVNoYWRlcihzaGFkZXIpO1xuICAgIHRocm93IG5ldyBFcnJvcihpbmZvKTtcbiAgfVxuICByZXR1cm4gc2hhZGVyO1xufVxuXG5mdW5jdGlvbiBtYWtlUHJvZ3JhbShcbiAgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCxcbiAgdmVydGV4OiBXZWJHTFNoYWRlcixcbiAgZnJhZ21lbnRTb3VyY2U6IHN0cmluZyxcbik6IHsgcHJvZ3JhbTogV2ViR0xQcm9ncmFtOyBmcmFnbWVudDogV2ViR0xTaGFkZXIgfSB7XG4gIGNvbnN0IGZyYWdtZW50ID0gY29tcGlsZShnbCwgZ2wuRlJBR01FTlRfU0hBREVSLCBmcmFnbWVudFNvdXJjZSk7XG4gIGNvbnN0IHByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKCk7XG4gIGlmICghcHJvZ3JhbSkgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGNyZWF0ZSBXZWJHTCBwcm9ncmFtXCIpO1xuICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgdmVydGV4KTtcbiAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGZyYWdtZW50KTtcbiAgZ2wubGlua1Byb2dyYW0ocHJvZ3JhbSk7XG4gIGlmICghZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBnbC5MSU5LX1NUQVRVUykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZ2wuZ2V0UHJvZ3JhbUluZm9Mb2cocHJvZ3JhbSkgfHwgXCJXZWJHTCBwcm9ncmFtIGZhaWxlZCB0byBsaW5rXCIpO1xuICB9XG4gIHJldHVybiB7IHByb2dyYW0sIGZyYWdtZW50IH07XG59XG5cbmV4cG9ydCB0eXBlIFBvaW50ZXJTdGF0ZSA9IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHZlbG9jaXR5WDogbnVtYmVyO1xuICB2ZWxvY2l0eVk6IG51bWJlcjtcbiAgZG93bjogYm9vbGVhbjtcbiAgYWN0aXZlOiBib29sZWFuO1xufTtcblxuZXhwb3J0IHR5cGUgVGV4U291cmNlID1cbiAgfCBIVE1MVmlkZW9FbGVtZW50XG4gIHwgSFRNTEltYWdlRWxlbWVudFxuICB8IEhUTUxDYW52YXNFbGVtZW50O1xuXG5leHBvcnQgdHlwZSBNb3JwaGVySGFuZGxlID0ge1xuICBzZXRQYXJhbXM6IChwYXJhbXM6IFRyaXBQYXJhbXMpID0+IHZvaWQ7XG4gIHNldFBvaW50ZXI6IChwb2ludGVyOiBQb2ludGVyU3RhdGUpID0+IHZvaWQ7XG4gIHNldFNvdXJjZTogKHNvdXJjZTogVGV4U291cmNlKSA9PiB2b2lkO1xuICBzZXRBdWRpb0xldmVsOiAobGV2ZWw6IG51bWJlcikgPT4gdm9pZDtcbiAgc2V0UGl4ZWxSYXRpb0NhcDogKGNhcDogbnVtYmVyKSA9PiB2b2lkO1xuICBjbGVhckZlZWRiYWNrOiAoKSA9PiB2b2lkO1xuICByZXNpemU6ICh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikgPT4gdm9pZDtcbiAgZGVzdHJveTogKCkgPT4gdm9pZDtcbn07XG5cbmZ1bmN0aW9uIHNvdXJjZVNpemUoc291cmNlOiBUZXhTb3VyY2UpOiB7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICByZWFkeTogYm9vbGVhbjtcbn0ge1xuICBpZiAoc291cmNlIGluc3RhbmNlb2YgSFRNTFZpZGVvRWxlbWVudCkge1xuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogTWF0aC5tYXgoc291cmNlLnZpZGVvV2lkdGgsIDEpLFxuICAgICAgaGVpZ2h0OiBNYXRoLm1heChzb3VyY2UudmlkZW9IZWlnaHQsIDEpLFxuICAgICAgLy8gU2tpcCBzZWVraW5nL2JsYW5rIGZyYW1lcyBzbyB0aGUgbGFzdCBnb29kIHRleHR1cmUgc3RheXMgb24gc2NyZWVuLlxuICAgICAgcmVhZHk6XG4gICAgICAgIHNvdXJjZS5yZWFkeVN0YXRlID49IDIgJiZcbiAgICAgICAgc291cmNlLnZpZGVvV2lkdGggPiAwICYmXG4gICAgICAgICFzb3VyY2Uuc2Vla2luZyxcbiAgICB9O1xuICB9XG4gIGlmIChzb3VyY2UgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiBNYXRoLm1heChzb3VyY2UubmF0dXJhbFdpZHRoLCAxKSxcbiAgICAgIGhlaWdodDogTWF0aC5tYXgoc291cmNlLm5hdHVyYWxIZWlnaHQsIDEpLFxuICAgICAgcmVhZHk6IHNvdXJjZS5jb21wbGV0ZSAmJiBzb3VyY2UubmF0dXJhbFdpZHRoID4gMCxcbiAgICB9O1xuICB9XG4gIHJldHVybiB7XG4gICAgd2lkdGg6IE1hdGgubWF4KHNvdXJjZS53aWR0aCwgMSksXG4gICAgaGVpZ2h0OiBNYXRoLm1heChzb3VyY2UuaGVpZ2h0LCAxKSxcbiAgICByZWFkeTogc291cmNlLndpZHRoID4gMCAmJiBzb3VyY2UuaGVpZ2h0ID4gMCxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1vcnBoZXIoXG4gIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsXG4gIGluaXRpYWxTb3VyY2U6IFRleFNvdXJjZSxcbiAgaW5pdGlhbDogVHJpcFBhcmFtcyA9IERFRkFVTFRfVFJJUCxcbik6IE1vcnBoZXJIYW5kbGUge1xuICBjb25zdCBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KFwid2ViZ2xcIiwge1xuICAgIGFscGhhOiBmYWxzZSxcbiAgICBhbnRpYWxpYXM6IGZhbHNlLFxuICAgIHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcbiAgfSk7XG4gIGlmICghZ2wpIHRocm93IG5ldyBFcnJvcihcIlRoaXMgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IFdlYkdMXCIpO1xuXG4gIGNvbnN0IHZlcnRleCA9IGNvbXBpbGUoZ2wsIGdsLlZFUlRFWF9TSEFERVIsIFZFUlQpO1xuICBjb25zdCBlZmZlY3QgPSBtYWtlUHJvZ3JhbShnbCwgdmVydGV4LCBGUkFHKTtcbiAgY29uc3QgY29weSA9IG1ha2VQcm9ncmFtKGdsLCB2ZXJ0ZXgsIENPUFlfRlJBRyk7XG5cbiAgY29uc3QgYnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBidWZmZXIpO1xuICBnbC5idWZmZXJEYXRhKFxuICAgIGdsLkFSUkFZX0JVRkZFUixcbiAgICBuZXcgRmxvYXQzMkFycmF5KFstMSwgLTEsIDEsIC0xLCAtMSwgMSwgMSwgMV0pLFxuICAgIGdsLlNUQVRJQ19EUkFXLFxuICApO1xuXG4gIGNvbnN0IHZpZGVvVGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcbiAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdmlkZW9UZXh0dXJlKTtcbiAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSk7XG4gIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1QsIGdsLkNMQU1QX1RPX0VER0UpO1xuICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTElORUFSKTtcbiAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLkxJTkVBUik7XG4gIGdsLnRleEltYWdlMkQoXG4gICAgZ2wuVEVYVFVSRV8yRCxcbiAgICAwLFxuICAgIGdsLlJHQkEsXG4gICAgMSxcbiAgICAxLFxuICAgIDAsXG4gICAgZ2wuUkdCQSxcbiAgICBnbC5VTlNJR05FRF9CWVRFLFxuICAgIG5ldyBVaW50OEFycmF5KFswLCAwLCAwLCAyNTVdKSxcbiAgKTtcblxuICBjb25zdCBmZWVkYmFja1RleHR1cmVzOiBXZWJHTFRleHR1cmVbXSA9IFtdO1xuICBjb25zdCBmcmFtZWJ1ZmZlcnM6IFdlYkdMRnJhbWVidWZmZXJbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkgKz0gMSkge1xuICAgIGNvbnN0IHRleHR1cmUgPSBnbC5jcmVhdGVUZXh0dXJlKCk7XG4gICAgY29uc3QgZnJhbWVidWZmZXIgPSBnbC5jcmVhdGVGcmFtZWJ1ZmZlcigpO1xuICAgIGlmICghdGV4dHVyZSB8fCAhZnJhbWVidWZmZXIpIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBjcmVhdGUgZmVlZGJhY2sgYnVmZmVyc1wiKTtcbiAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZXh0dXJlKTtcbiAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9TLCBnbC5DTEFNUF9UT19FREdFKTtcbiAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBnbC5DTEFNUF9UT19FREdFKTtcbiAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTElORUFSKTtcbiAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2wuTElORUFSKTtcbiAgICBnbC5iaW5kRnJhbWVidWZmZXIoZ2wuRlJBTUVCVUZGRVIsIGZyYW1lYnVmZmVyKTtcbiAgICBnbC5mcmFtZWJ1ZmZlclRleHR1cmUyRChcbiAgICAgIGdsLkZSQU1FQlVGRkVSLFxuICAgICAgZ2wuQ09MT1JfQVRUQUNITUVOVDAsXG4gICAgICBnbC5URVhUVVJFXzJELFxuICAgICAgdGV4dHVyZSxcbiAgICAgIDAsXG4gICAgKTtcbiAgICBmZWVkYmFja1RleHR1cmVzLnB1c2godGV4dHVyZSk7XG4gICAgZnJhbWVidWZmZXJzLnB1c2goZnJhbWVidWZmZXIpO1xuICB9XG4gIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgbnVsbCk7XG5cbiAgY29uc3QgdW5pZm9ybXMgPSBuZXcgTWFwPHN0cmluZywgV2ViR0xVbmlmb3JtTG9jYXRpb24gfCBudWxsPigpO1xuICBjb25zdCB1bmlmb3JtID0gKG5hbWU6IHN0cmluZykgPT4ge1xuICAgIGlmICghdW5pZm9ybXMuaGFzKG5hbWUpKSB1bmlmb3Jtcy5zZXQobmFtZSwgZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKGVmZmVjdC5wcm9ncmFtLCBuYW1lKSk7XG4gICAgcmV0dXJuIHVuaWZvcm1zLmdldChuYW1lKSA/PyBudWxsO1xuICB9O1xuXG4gIGxldCBwYXJhbXMgPSB7IC4uLmluaXRpYWwgfTtcbiAgbGV0IHNvdXJjZTogVGV4U291cmNlID0gaW5pdGlhbFNvdXJjZTtcbiAgbGV0IHBvaW50ZXI6IFBvaW50ZXJTdGF0ZSA9IHtcbiAgICB4OiAwLjUsXG4gICAgeTogMC41LFxuICAgIHZlbG9jaXR5WDogMCxcbiAgICB2ZWxvY2l0eVk6IDAsXG4gICAgZG93bjogZmFsc2UsXG4gICAgYWN0aXZlOiBmYWxzZSxcbiAgfTtcbiAgbGV0IHNtb290aFBvaW50ZXIgPSB7IC4uLnBvaW50ZXIgfTtcbiAgbGV0IGF1ZGlvTGV2ZWwgPSAwO1xuICBsZXQgc21vb3RoQXVkaW8gPSAwO1xuICBsZXQgcmFmID0gMDtcbiAgbGV0IGFsaXZlID0gdHJ1ZTtcbiAgbGV0IHJlYWRJbmRleCA9IDA7XG4gIGxldCBzdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICBsZXQgcGl4ZWxSYXRpb0NhcCA9IDEuNzU7XG4gIGxldCBsYXN0Q3NzV2lkdGggPSAxO1xuICBsZXQgbGFzdENzc0hlaWdodCA9IDE7XG5cbiAgZnVuY3Rpb24gYmluZEdlb21ldHJ5KHByb2dyYW06IFdlYkdMUHJvZ3JhbSkge1xuICAgIGdsLnVzZVByb2dyYW0ocHJvZ3JhbSk7XG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIGJ1ZmZlcik7XG4gICAgY29uc3QgcG9zaXRpb24gPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCBcImFfcG9zXCIpO1xuICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHBvc2l0aW9uKTtcbiAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHBvc2l0aW9uLCAyLCBnbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJGZWVkYmFjaygpIHtcbiAgICBmb3IgKGNvbnN0IGZyYW1lYnVmZmVyIG9mIGZyYW1lYnVmZmVycykge1xuICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBmcmFtZWJ1ZmZlcik7XG4gICAgICBnbC5jbGVhckNvbG9yKDAsIDAsIDAsIDEpO1xuICAgICAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XG4gICAgfVxuICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgbnVsbCk7XG4gIH1cblxuICBmdW5jdGlvbiBhbGxvY2F0ZUZlZWRiYWNrKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCB3aXBlID0gdHJ1ZSkge1xuICAgIGZvciAoY29uc3QgdGV4dHVyZSBvZiBmZWVkYmFja1RleHR1cmVzKSB7XG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZXh0dXJlKTtcbiAgICAgIGdsLnRleEltYWdlMkQoXG4gICAgICAgIGdsLlRFWFRVUkVfMkQsXG4gICAgICAgIDAsXG4gICAgICAgIGdsLlJHQkEsXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHQsXG4gICAgICAgIDAsXG4gICAgICAgIGdsLlJHQkEsXG4gICAgICAgIGdsLlVOU0lHTkVEX0JZVEUsXG4gICAgICAgIG51bGwsXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAod2lwZSkgY2xlYXJGZWVkYmFjaygpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyRnJhbWUoKSB7XG4gICAgaWYgKCFhbGl2ZSkgcmV0dXJuO1xuXG4gICAgY29uc3Qgd2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgY29uc3QgaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcbiAgICBjb25zdCB3cml0ZUluZGV4ID0gMSAtIHJlYWRJbmRleDtcblxuICAgIGNvbnN0IGZyYW1lID0gc291cmNlU2l6ZShzb3VyY2UpO1xuICAgIGlmIChmcmFtZS5yZWFkeSkge1xuICAgICAgZ2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFMCk7XG4gICAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB2aWRlb1RleHR1cmUpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCBnbC5SR0JBLCBnbC5SR0JBLCBnbC5VTlNJR05FRF9CWVRFLCBzb3VyY2UpO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIC8vIEEgc2luZ2xlIHVuYXZhaWxhYmxlIGZyYW1lIHNob3VsZCBub3Qgc3RvcCB0aGUgcmVuZGVyIGxvb3AuXG4gICAgICB9XG4gICAgfVxuXG4gICAgc21vb3RoUG9pbnRlci54ICs9IChwb2ludGVyLnggLSBzbW9vdGhQb2ludGVyLngpICogMC4yNDtcbiAgICBzbW9vdGhQb2ludGVyLnkgKz0gKHBvaW50ZXIueSAtIHNtb290aFBvaW50ZXIueSkgKiAwLjI0O1xuICAgIHNtb290aFBvaW50ZXIudmVsb2NpdHlYICs9IChwb2ludGVyLnZlbG9jaXR5WCAtIHNtb290aFBvaW50ZXIudmVsb2NpdHlYKSAqIDAuMTg7XG4gICAgc21vb3RoUG9pbnRlci52ZWxvY2l0eVkgKz0gKHBvaW50ZXIudmVsb2NpdHlZIC0gc21vb3RoUG9pbnRlci52ZWxvY2l0eVkpICogMC4xODtcbiAgICBwb2ludGVyLnZlbG9jaXR5WCAqPSAwLjgyO1xuICAgIHBvaW50ZXIudmVsb2NpdHlZICo9IDAuODI7XG4gICAgc21vb3RoQXVkaW8gKz0gKGF1ZGlvTGV2ZWwgLSBzbW9vdGhBdWRpbykgKiAoYXVkaW9MZXZlbCA+IHNtb290aEF1ZGlvID8gMC4yMiA6IDAuMDYpO1xuXG4gICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBmcmFtZWJ1ZmZlcnNbd3JpdGVJbmRleF0pO1xuICAgIGdsLnZpZXdwb3J0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgIGJpbmRHZW9tZXRyeShlZmZlY3QucHJvZ3JhbSk7XG5cbiAgICBnbC5hY3RpdmVUZXh0dXJlKGdsLlRFWFRVUkUwKTtcbiAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB2aWRlb1RleHR1cmUpO1xuICAgIGdsLmFjdGl2ZVRleHR1cmUoZ2wuVEVYVFVSRTEpO1xuICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIGZlZWRiYWNrVGV4dHVyZXNbcmVhZEluZGV4XSk7XG4gICAgZ2wudW5pZm9ybTFpKHVuaWZvcm0oXCJ1X3ZpZGVvXCIpLCAwKTtcbiAgICBnbC51bmlmb3JtMWkodW5pZm9ybShcInVfcHJldmlvdXNcIiksIDEpO1xuICAgIGdsLnVuaWZvcm0yZih1bmlmb3JtKFwidV9yZXNcIiksIHdpZHRoLCBoZWlnaHQpO1xuICAgIGdsLnVuaWZvcm0yZih1bmlmb3JtKFwidV92aWRlb19yZXNcIiksIGZyYW1lLndpZHRoLCBmcmFtZS5oZWlnaHQpO1xuICAgIGdsLnVuaWZvcm0xZih1bmlmb3JtKFwidV90aW1lXCIpLCAocGVyZm9ybWFuY2Uubm93KCkgLSBzdGFydCkgLyAxMDAwKTtcbiAgICBnbC51bmlmb3JtMWYodW5pZm9ybShcInVfYXVkaW9fbGV2ZWxcIiksIHNtb290aEF1ZGlvKTtcbiAgICBnbC51bmlmb3JtMmYodW5pZm9ybShcInVfcG9pbnRlclwiKSwgc21vb3RoUG9pbnRlci54LCBzbW9vdGhQb2ludGVyLnkpO1xuICAgIGdsLnVuaWZvcm0yZihcbiAgICAgIHVuaWZvcm0oXCJ1X3BvaW50ZXJfdmVsb2NpdHlcIiksXG4gICAgICBzbW9vdGhQb2ludGVyLnZlbG9jaXR5WCxcbiAgICAgIHNtb290aFBvaW50ZXIudmVsb2NpdHlZLFxuICAgICk7XG4gICAgZ2wudW5pZm9ybTFmKHVuaWZvcm0oXCJ1X3BvaW50ZXJfZG93blwiKSwgcG9pbnRlci5kb3duID8gMSA6IDApO1xuICAgIGdsLnVuaWZvcm0xZih1bmlmb3JtKFwidV9wb2ludGVyX2FjdGl2ZVwiKSwgcG9pbnRlci5hY3RpdmUgPyAxIDogMCk7XG5cbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwYXJhbXMpKSB7XG4gICAgICBnbC51bmlmb3JtMWYodW5pZm9ybShgdV8ke2tleS5yZXBsYWNlKC9bQS1aXS9nLCAoY2hhcikgPT4gYF8ke2NoYXIudG9Mb3dlckNhc2UoKX1gKX1gKSwgdmFsdWUpO1xuICAgIH1cbiAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFX1NUUklQLCAwLCA0KTtcblxuICAgIGdsLmJpbmRGcmFtZWJ1ZmZlcihnbC5GUkFNRUJVRkZFUiwgbnVsbCk7XG4gICAgZ2wudmlld3BvcnQoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgYmluZEdlb21ldHJ5KGNvcHkucHJvZ3JhbSk7XG4gICAgZ2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFMCk7XG4gICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgZmVlZGJhY2tUZXh0dXJlc1t3cml0ZUluZGV4XSk7XG4gICAgZ2wudW5pZm9ybTFpKGdsLmdldFVuaWZvcm1Mb2NhdGlvbihjb3B5LnByb2dyYW0sIFwidV9mcmFtZVwiKSwgMCk7XG4gICAgZ2wuZHJhd0FycmF5cyhnbC5UUklBTkdMRV9TVFJJUCwgMCwgNCk7XG5cbiAgICByZWFkSW5kZXggPSB3cml0ZUluZGV4O1xuICB9XG5cbiAgZnVuY3Rpb24gZHJhdygpIHtcbiAgICBpZiAoIWFsaXZlKSByZXR1cm47XG4gICAgcmVuZGVyRnJhbWUoKTtcbiAgICByYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XG4gIH1cblxuICBhbGxvY2F0ZUZlZWRiYWNrKDEsIDEpO1xuICBkcmF3KCk7XG5cbiAgcmV0dXJuIHtcbiAgICBzZXRQYXJhbXMobmV4dCkge1xuICAgICAgcGFyYW1zID0geyAuLi5uZXh0IH07XG4gICAgfSxcbiAgICBzZXRQb2ludGVyKG5leHQpIHtcbiAgICAgIHBvaW50ZXIgPSB7IC4uLm5leHQgfTtcbiAgICB9LFxuICAgIHNldFNvdXJjZShuZXh0KSB7XG4gICAgICBzb3VyY2UgPSBuZXh0O1xuICAgIH0sXG4gICAgc2V0QXVkaW9MZXZlbChsZXZlbCkge1xuICAgICAgYXVkaW9MZXZlbCA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIGxldmVsKSk7XG4gICAgfSxcbiAgICBzZXRQaXhlbFJhdGlvQ2FwKGNhcCkge1xuICAgICAgcGl4ZWxSYXRpb0NhcCA9IE1hdGgubWF4KDEsIE1hdGgubWluKDMsIGNhcCkpO1xuICAgICAgdGhpcy5yZXNpemUobGFzdENzc1dpZHRoLCBsYXN0Q3NzSGVpZ2h0KTtcbiAgICB9LFxuICAgIGNsZWFyRmVlZGJhY2ssXG4gICAgcmVzaXplKHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgIGxhc3RDc3NXaWR0aCA9IHdpZHRoO1xuICAgICAgbGFzdENzc0hlaWdodCA9IGhlaWdodDtcbiAgICAgIGNvbnN0IGRwciA9IE1hdGgubWluKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDEsIHBpeGVsUmF0aW9DYXApO1xuICAgICAgLy8gUm91bmQgKyBoeXN0ZXJlc2lzIHNvIHN1Yi1waXhlbCBsYXlvdXQgaml0dGVyIGNhbm5vdCB0aHJhc2ggdGhlXG4gICAgICAvLyBkcmF3aW5nIGJ1ZmZlciAoc2V0dGluZyBjYW52YXMud2lkdGggY2xlYXJzIGl0IFx1MjE5MiB2aXNpYmxlIGZsYXNoKS5cbiAgICAgIGNvbnN0IG5leHRXaWR0aCA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQod2lkdGggKiBkcHIpKTtcbiAgICAgIGNvbnN0IG5leHRIZWlnaHQgPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKGhlaWdodCAqIGRwcikpO1xuICAgICAgaWYgKFxuICAgICAgICBNYXRoLmFicyhjYW52YXMud2lkdGggLSBuZXh0V2lkdGgpIDwgMiAmJlxuICAgICAgICBNYXRoLmFicyhjYW52YXMuaGVpZ2h0IC0gbmV4dEhlaWdodCkgPCAyXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY2FudmFzLndpZHRoID0gbmV4dFdpZHRoO1xuICAgICAgY2FudmFzLmhlaWdodCA9IG5leHRIZWlnaHQ7XG4gICAgICBhbGxvY2F0ZUZlZWRiYWNrKG5leHRXaWR0aCwgbmV4dEhlaWdodCwgdHJ1ZSk7XG4gICAgICByZW5kZXJGcmFtZSgpO1xuICAgIH0sXG4gICAgZGVzdHJveSgpIHtcbiAgICAgIGFsaXZlID0gZmFsc2U7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyYWYpO1xuICAgICAgZm9yIChjb25zdCBmcmFtZWJ1ZmZlciBvZiBmcmFtZWJ1ZmZlcnMpIGdsLmRlbGV0ZUZyYW1lYnVmZmVyKGZyYW1lYnVmZmVyKTtcbiAgICAgIGZvciAoY29uc3QgdGV4dHVyZSBvZiBmZWVkYmFja1RleHR1cmVzKSBnbC5kZWxldGVUZXh0dXJlKHRleHR1cmUpO1xuICAgICAgZ2wuZGVsZXRlVGV4dHVyZSh2aWRlb1RleHR1cmUpO1xuICAgICAgZ2wuZGVsZXRlQnVmZmVyKGJ1ZmZlcik7XG4gICAgICBnbC5kZWxldGVQcm9ncmFtKGVmZmVjdC5wcm9ncmFtKTtcbiAgICAgIGdsLmRlbGV0ZVByb2dyYW0oY29weS5wcm9ncmFtKTtcbiAgICAgIGdsLmRlbGV0ZVNoYWRlcihlZmZlY3QuZnJhZ21lbnQpO1xuICAgICAgZ2wuZGVsZXRlU2hhZGVyKGNvcHkuZnJhZ21lbnQpO1xuICAgICAgZ2wuZGVsZXRlU2hhZGVyKHZlcnRleCk7XG4gICAgfSxcbiAgfTtcbn1cbiIsICJleHBvcnQgdHlwZSBTb3VyY2VLaW5kID0gXCJ2aWRlb1wiIHwgXCJhdWRpb1wiIHwgXCJpbWFnZVwiIHwgXCJkYXRhXCIgfCBcImxpdmVcIjtcblxuZXhwb3J0IHR5cGUgQXVkaW9WaXN1YWxJZCA9XG4gIHwgXCJiYXJzXCJcbiAgfCBcInJhZGlhbFwiXG4gIHwgXCJ0dW5uZWxcIlxuICB8IFwibGF0dGljZVwiXG4gIHwgXCJyaWJib25zXCJcbiAgfCBcImJsb29tXCJcbiAgfCBcInNoYXJkc1wiXG4gIHwgXCJwbGFzbWFcIjtcblxuZXhwb3J0IGNvbnN0IEFVRElPX1ZJU1VBTFM6IHtcbiAgaWQ6IEF1ZGlvVmlzdWFsSWQ7XG4gIG5hbWU6IHN0cmluZztcbn1bXSA9IFtcbiAgeyBpZDogXCJiYXJzXCIsIG5hbWU6IFwiV2F2ZSBiYXJzXCIgfSxcbiAgeyBpZDogXCJyYWRpYWxcIiwgbmFtZTogXCJSYWRpYWwgcHVsc2VcIiB9LFxuICB7IGlkOiBcInR1bm5lbFwiLCBuYW1lOiBcIlNpZ25hbCB0dW5uZWxcIiB9LFxuICB7IGlkOiBcImxhdHRpY2VcIiwgbmFtZTogXCJCYXNzIGxhdHRpY2VcIiB9LFxuICB7IGlkOiBcInJpYmJvbnNcIiwgbmFtZTogXCJSaWJib24gZmllbGRcIiB9LFxuICB7IGlkOiBcImJsb29tXCIsIG5hbWU6IFwiT3JiIGJsb29tXCIgfSxcbiAgeyBpZDogXCJzaGFyZHNcIiwgbmFtZTogXCJIYXJkIHNoYXJkc1wiIH0sXG4gIHsgaWQ6IFwicGxhc21hXCIsIG5hbWU6IFwiQWNpZCBwbGFzbWFcIiB9LFxuXTtcblxuY29uc3QgQVVESU9fRVhUID0gL1xcLihtcDN8d2F2fG9nZ3xtNGF8YWFjfGZsYWN8b3B1c3x3bWEpJC9pO1xuY29uc3QgSU1BR0VfRVhUID0gL1xcLihwbmd8anBlP2d8Z2lmfHdlYnB8Ym1wfHN2Z3xhdmlmfGljbykkL2k7XG5jb25zdCBWSURFT19FWFQgPSAvXFwuKG1wNHx3ZWJtfG1vdnxtNHZ8YXZpfG1rdnxvZ3YpJC9pO1xuXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NpZnlGaWxlKGZpbGU6IEZpbGUpOiBTb3VyY2VLaW5kIHtcbiAgY29uc3QgdHlwZSA9IGZpbGUudHlwZS50b0xvd2VyQ2FzZSgpO1xuICBpZiAodHlwZS5zdGFydHNXaXRoKFwidmlkZW8vXCIpKSByZXR1cm4gXCJ2aWRlb1wiO1xuICBpZiAodHlwZS5zdGFydHNXaXRoKFwiYXVkaW8vXCIpKSByZXR1cm4gXCJhdWRpb1wiO1xuICBpZiAodHlwZS5zdGFydHNXaXRoKFwiaW1hZ2UvXCIpKSByZXR1cm4gXCJpbWFnZVwiO1xuICBpZiAoQVVESU9fRVhULnRlc3QoZmlsZS5uYW1lKSkgcmV0dXJuIFwiYXVkaW9cIjtcbiAgaWYgKElNQUdFX0VYVC50ZXN0KGZpbGUubmFtZSkpIHJldHVybiBcImltYWdlXCI7XG4gIGlmIChWSURFT19FWFQudGVzdChmaWxlLm5hbWUpKSByZXR1cm4gXCJ2aWRlb1wiO1xuICByZXR1cm4gXCJkYXRhXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzb3VyY2VMYWJlbChraW5kOiBTb3VyY2VLaW5kKTogc3RyaW5nIHtcbiAgc3dpdGNoIChraW5kKSB7XG4gICAgY2FzZSBcInZpZGVvXCI6XG4gICAgICByZXR1cm4gXCJWaWRlb1wiO1xuICAgIGNhc2UgXCJhdWRpb1wiOlxuICAgICAgcmV0dXJuIFwiTXVzaWNcIjtcbiAgICBjYXNlIFwiaW1hZ2VcIjpcbiAgICAgIHJldHVybiBcIkltYWdlXCI7XG4gICAgY2FzZSBcImRhdGFcIjpcbiAgICAgIHJldHVybiBcIkRhdGFcIjtcbiAgICBjYXNlIFwibGl2ZVwiOlxuICAgICAgcmV0dXJuIFwiTGl2ZSBtaWNcIjtcbiAgICBkZWZhdWx0OiB7XG4gICAgICBjb25zdCBfZXhoYXVzdGl2ZTogbmV2ZXIgPSBraW5kO1xuICAgICAgcmV0dXJuIF9leGhhdXN0aXZlO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXVkaW9WaXN1YWxMYWJlbChpZDogQXVkaW9WaXN1YWxJZCk6IHN0cmluZyB7XG4gIHJldHVybiBBVURJT19WSVNVQUxTLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGlkKT8ubmFtZSA/PyBpZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVGltZWRTb3VyY2Uoa2luZDogU291cmNlS2luZCk6IGJvb2xlYW4ge1xuICByZXR1cm4ga2luZCA9PT0gXCJ2aWRlb1wiIHx8IGtpbmQgPT09IFwiYXVkaW9cIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc1BsYXliYWNrQ29udHJvbHMoa2luZDogU291cmNlS2luZCk6IGJvb2xlYW4ge1xuICByZXR1cm4ga2luZCA9PT0gXCJ2aWRlb1wiIHx8IGtpbmQgPT09IFwiYXVkaW9cIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUF1ZGlvVmlzdWFsKGV4Y2x1ZGU/OiBBdWRpb1Zpc3VhbElkKTogQXVkaW9WaXN1YWxJZCB7XG4gIGNvbnN0IHBvb2wgPSBleGNsdWRlXG4gICAgPyBBVURJT19WSVNVQUxTLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gZXhjbHVkZSlcbiAgICA6IEFVRElPX1ZJU1VBTFM7XG4gIGNvbnN0IHBpY2sgPSBwb29sW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvb2wubGVuZ3RoKV07XG4gIHJldHVybiBwaWNrPy5pZCA/PyBcImJhcnNcIjtcbn1cblxubGV0IGFtYmllbnRCaW5zID0gbmV3IFVpbnQ4QXJyYXkoMTI4KTtcbmxldCBtaXhlZEJpbnMgPSBuZXcgVWludDhBcnJheSgxMjgpO1xuXG5mdW5jdGlvbiBlbnN1cmVXb3JrQmlucyhsZW5ndGg6IG51bWJlcikge1xuICBpZiAoYW1iaWVudEJpbnMubGVuZ3RoICE9PSBsZW5ndGgpIGFtYmllbnRCaW5zID0gbmV3IFVpbnQ4QXJyYXkobGVuZ3RoKTtcbiAgaWYgKG1peGVkQmlucy5sZW5ndGggIT09IGxlbmd0aCkgbWl4ZWRCaW5zID0gbmV3IFVpbnQ4QXJyYXkobGVuZ3RoKTtcbn1cblxuLyoqIFN5bnRoZXRpYyBzcGVjdHJ1bSBzbyB2aXN1YWxpemVycyBrZWVwIG1vdmluZyB3aXRoIG5vIGF1ZGlvIC8gbm8gbWVkaWEuICovXG5leHBvcnQgZnVuY3Rpb24gZmlsbEFtYmllbnRTcGVjdHJ1bSh0YXJnZXQ6IFVpbnQ4QXJyYXksIHRpbWU6IG51bWJlcik6IG51bWJlciB7XG4gIGxldCB0b3RhbCA9IDA7XG4gIGNvbnN0IG4gPSB0YXJnZXQubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkgKz0gMSkge1xuICAgIGNvbnN0IHQgPSBpIC8gTWF0aC5tYXgobiAtIDEsIDEpO1xuICAgIGNvbnN0IHdhdmUgPVxuICAgICAgMC40ICtcbiAgICAgIDAuMjggKiBNYXRoLnNpbih0aW1lICogMC45NSArIHQgKiA4LjQpICtcbiAgICAgIDAuMTggKiBNYXRoLnNpbih0aW1lICogMS42NSArIHQgKiAxOS41KSArXG4gICAgICAwLjE0ICogTWF0aC5zaW4odGltZSAqIDAuMzMgKyB0ICogMy4yICsgTWF0aC5zaW4odGltZSAqIDAuMjEpICogMi4yKTtcbiAgICBjb25zdCBiYXNzID0gTWF0aC5leHAoLXQgKiAzLjQpICogKDAuNSArIDAuNSAqIE1hdGguc2luKHRpbWUgKiAxLjI1KSk7XG4gICAgY29uc3QgdmFsdWUgPSBNYXRoLnJvdW5kKFxuICAgICAgTWF0aC5taW4oMjU1LCBNYXRoLm1heCgwLCAod2F2ZSAqIDAuNzIgKyBiYXNzICogMC41OCkgKiAyMjUpKSxcbiAgICApO1xuICAgIHRhcmdldFtpXSA9IHZhbHVlO1xuICAgIHRvdGFsICs9IHZhbHVlO1xuICB9XG4gIHJldHVybiBNYXRoLm1pbigxLCB0b3RhbCAvIG4gLyAxNTUpO1xufVxuXG4vKiogS2VlcCBhIHZpc2libGUgZmxvb3IgdW5kZXIgbGl2ZSBzcGVjdHJ1bSBzbyBzaWxlbmNlIG5ldmVyIGdvZXMgYmxhbmsuICovXG5leHBvcnQgZnVuY3Rpb24gd2l0aEFtYmllbnRGbG9vcihcbiAgc3BlY3RydW06IFVpbnQ4QXJyYXksXG4gIGxldmVsOiBudW1iZXIsXG4gIHRpbWU6IG51bWJlcixcbik6IHsgc3BlY3RydW06IFVpbnQ4QXJyYXk7IGxldmVsOiBudW1iZXIgfSB7XG4gIGVuc3VyZVdvcmtCaW5zKHNwZWN0cnVtLmxlbmd0aCk7XG4gIGNvbnN0IGFtYmllbnRMZXZlbCA9IGZpbGxBbWJpZW50U3BlY3RydW0oYW1iaWVudEJpbnMsIHRpbWUpO1xuICBjb25zdCBzaWxlbmNlID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgKDAuMTYgLSBsZXZlbCkgLyAwLjE2KSk7XG4gIGlmIChzaWxlbmNlIDwgMC4wMikge1xuICAgIHJldHVybiB7IHNwZWN0cnVtLCBsZXZlbDogTWF0aC5tYXgobGV2ZWwsIDAuMikgfTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3BlY3RydW0ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBtaXhlZEJpbnNbaV0gPSBNYXRoLm1heChcbiAgICAgIHNwZWN0cnVtW2ldLFxuICAgICAgTWF0aC5yb3VuZChhbWJpZW50Qmluc1tpXSAqICgwLjQ1ICsgc2lsZW5jZSAqIDAuNTUpKSxcbiAgICApO1xuICB9XG4gIHJldHVybiB7XG4gICAgc3BlY3RydW06IG1peGVkQmlucyxcbiAgICBsZXZlbDogTWF0aC5tYXgobGV2ZWwsIGFtYmllbnRMZXZlbCAqICgwLjM1ICsgc2lsZW5jZSAqIDAuNDUpLCAwLjI2KSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmFkZShjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGFtb3VudDogbnVtYmVyKSB7XG4gIGN0eC5maWxsU3R5bGUgPSBgcmdiYSg2LCA2LCAxMCwgJHthbW91bnR9KWA7XG4gIGN0eC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbn1cblxuZnVuY3Rpb24gc2FtcGxlQXQoc3BlY3RydW06IFVpbnQ4QXJyYXksIHQ6IG51bWJlcik6IG51bWJlciB7XG4gIGNvbnN0IGluZGV4ID0gTWF0aC5taW4oXG4gICAgc3BlY3RydW0ubGVuZ3RoIC0gMSxcbiAgICBNYXRoLm1heCgwLCBNYXRoLmZsb29yKHQgKiAoc3BlY3RydW0ubGVuZ3RoIC0gMSkpKSxcbiAgKTtcbiAgcmV0dXJuIHNwZWN0cnVtW2luZGV4XSAvIDI1NTtcbn1cblxuZnVuY3Rpb24gYmFuZChzcGVjdHJ1bTogVWludDhBcnJheSwgZnJvbTogbnVtYmVyLCB0bzogbnVtYmVyKTogbnVtYmVyIHtcbiAgY29uc3Qgc3RhcnQgPSBNYXRoLmZsb29yKGZyb20gKiBzcGVjdHJ1bS5sZW5ndGgpO1xuICBjb25zdCBlbmQgPSBNYXRoLm1heChzdGFydCArIDEsIE1hdGguZmxvb3IodG8gKiBzcGVjdHJ1bS5sZW5ndGgpKTtcbiAgbGV0IHRvdGFsID0gMDtcbiAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpICs9IDEpIHRvdGFsICs9IHNwZWN0cnVtW2ldO1xuICByZXR1cm4gdG90YWwgLyAoZW5kIC0gc3RhcnQpIC8gMjU1O1xufVxuXG5mdW5jdGlvbiBwYWludEJhcnMoXG4gIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxuICB3aWR0aDogbnVtYmVyLFxuICBoZWlnaHQ6IG51bWJlcixcbiAgc3BlY3RydW06IFVpbnQ4QXJyYXksXG4gIGxldmVsOiBudW1iZXIsXG4gIHRpbWU6IG51bWJlcixcbikge1xuICBmYWRlKGN0eCwgd2lkdGgsIGhlaWdodCwgMC4wOCArICgxIC0gbGV2ZWwpICogMC4wNik7XG4gIGNvbnN0IGJpbnMgPSBNYXRoLm1pbig5Niwgc3BlY3RydW0ubGVuZ3RoKTtcbiAgY29uc3QgYmFyV2lkdGggPSB3aWR0aCAvIGJpbnM7XG4gIGNvbnN0IG1pZCA9IGhlaWdodCAqIDAuNTU7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBiaW5zOyBpICs9IDEpIHtcbiAgICBjb25zdCBzYW1wbGUgPSBzcGVjdHJ1bVtpXSAvIDI1NTtcbiAgICBjb25zdCBib29zdCA9IHNhbXBsZSAqICgwLjU1ICsgbGV2ZWwgKiAwLjkpO1xuICAgIGNvbnN0IHggPSBpICogYmFyV2lkdGg7XG4gICAgY29uc3QgaCA9IGJvb3N0ICogaGVpZ2h0ICogMC43MjtcbiAgICBjb25zdCBodWUgPSAoaSAvIGJpbnMpICogMjgwICsgdGltZSAqIDI4ICsgbGV2ZWwgKiA0MDtcbiAgICBjdHguZmlsbFN0eWxlID0gYGhzbCgke2h1ZSAlIDM2MH0gJHs1NSArIHNhbXBsZSAqIDQ1fSUgJHszOCArIHNhbXBsZSAqIDQyfSUpYDtcbiAgICBjdHguZmlsbFJlY3QoeCwgbWlkIC0gaCAqIDAuNTUsIE1hdGgubWF4KDEsIGJhcldpZHRoICogMC44MiksIGgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhaW50UmFkaWFsKFxuICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcbiAgd2lkdGg6IG51bWJlcixcbiAgaGVpZ2h0OiBudW1iZXIsXG4gIHNwZWN0cnVtOiBVaW50OEFycmF5LFxuICBsZXZlbDogbnVtYmVyLFxuICB0aW1lOiBudW1iZXIsXG4pIHtcbiAgZmFkZShjdHgsIHdpZHRoLCBoZWlnaHQsIDAuMSArICgxIC0gbGV2ZWwpICogMC4wNSk7XG4gIGNvbnN0IGN4ID0gd2lkdGggKiAwLjU7XG4gIGNvbnN0IGN5ID0gaGVpZ2h0ICogMC41O1xuICBjb25zdCBiaW5zID0gTWF0aC5taW4oNzIsIHNwZWN0cnVtLmxlbmd0aCk7XG4gIGNvbnN0IG1heFIgPSBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KSAqIDAuNDI7XG5cbiAgY3R4LnNhdmUoKTtcbiAgY3R4LnRyYW5zbGF0ZShjeCwgY3kpO1xuICBjdHgucm90YXRlKHRpbWUgKiAwLjM1KTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBiaW5zOyBpICs9IDEpIHtcbiAgICBjb25zdCBzYW1wbGUgPSBzcGVjdHJ1bVtpXSAvIDI1NTtcbiAgICBjb25zdCBhbmdsZSA9IChpIC8gYmlucykgKiBNYXRoLlBJICogMjtcbiAgICBjb25zdCBpbm5lciA9IG1heFIgKiAoMC4xOCArIGxldmVsICogMC4wOCk7XG4gICAgY29uc3Qgb3V0ZXIgPSBpbm5lciArIHNhbXBsZSAqIG1heFIgKiAoMC41NSArIGxldmVsICogMC41NSk7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oTWF0aC5jb3MoYW5nbGUpICogaW5uZXIsIE1hdGguc2luKGFuZ2xlKSAqIGlubmVyKTtcbiAgICBjdHgubGluZVRvKE1hdGguY29zKGFuZ2xlKSAqIG91dGVyLCBNYXRoLnNpbihhbmdsZSkgKiBvdXRlcik7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gYGhzbGEoJHsoaSAvIGJpbnMpICogMzAwICsgdGltZSAqIDQwfSA4NSUgJHs0NSArIHNhbXBsZSAqIDQwfSUgLyAkezAuMzUgKyBzYW1wbGUgKiAwLjY1fSlgO1xuICAgIGN0eC5saW5lV2lkdGggPSAyICsgc2FtcGxlICogNTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gIH1cbiAgY3R4LnJlc3RvcmUoKTtcblxuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC5hcmMoY3gsIGN5LCBtYXhSICogKDAuMTIgKyBsZXZlbCAqIDAuMiksIDAsIE1hdGguUEkgKiAyKTtcbiAgY3R4LmZpbGxTdHlsZSA9IGBoc2xhKCR7KHRpbWUgKiA1MCkgJSAzNjB9IDkwJSA2MCUgLyAkezAuMTIgKyBsZXZlbCAqIDAuMzV9KWA7XG4gIGN0eC5maWxsKCk7XG59XG5cbmZ1bmN0aW9uIHBhaW50VHVubmVsKFxuICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcbiAgd2lkdGg6IG51bWJlcixcbiAgaGVpZ2h0OiBudW1iZXIsXG4gIHNwZWN0cnVtOiBVaW50OEFycmF5LFxuICBsZXZlbDogbnVtYmVyLFxuICB0aW1lOiBudW1iZXIsXG4pIHtcbiAgZmFkZShjdHgsIHdpZHRoLCBoZWlnaHQsIDAuMTIpO1xuICBjb25zdCBjeCA9IHdpZHRoICogMC41O1xuICBjb25zdCBjeSA9IGhlaWdodCAqIDAuNTtcbiAgY29uc3QgcmluZ3MgPSAxODtcbiAgZm9yIChsZXQgaSA9IHJpbmdzOyBpID49IDA7IGkgLT0gMSkge1xuICAgIGNvbnN0IHQgPSBpIC8gcmluZ3M7XG4gICAgY29uc3QgZW5lcmd5ID0gc2FtcGxlQXQoc3BlY3RydW0sIDEgLSB0KSAqICgwLjUgKyBsZXZlbCk7XG4gICAgY29uc3QgcmFkaXVzID1cbiAgICAgIE1hdGgubWluKHdpZHRoLCBoZWlnaHQpICpcbiAgICAgICgwLjA1ICsgdCAqIDAuNTUgKyBNYXRoLnNpbih0aW1lICogMi4yICsgaSAqIDAuNCkgKiAwLjAyICsgZW5lcmd5ICogMC4wOCk7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5lbGxpcHNlKFxuICAgICAgY3ggKyBNYXRoLnNpbih0aW1lICogMC44ICsgaSAqIDAuMikgKiBlbmVyZ3kgKiAxOCxcbiAgICAgIGN5ICsgTWF0aC5jb3ModGltZSAqIDAuNyArIGkgKiAwLjE1KSAqIGVuZXJneSAqIDEyLFxuICAgICAgcmFkaXVzICogKHdpZHRoIC8gaGVpZ2h0KSxcbiAgICAgIHJhZGl1cyxcbiAgICAgIHRpbWUgKiAwLjE1LFxuICAgICAgMCxcbiAgICAgIE1hdGguUEkgKiAyLFxuICAgICk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gYGhzbGEoJHsyMjAgKyB0ICogMTIwICsgdGltZSAqIDMwICsgZW5lcmd5ICogODB9IDgwJSAkezM1ICsgZW5lcmd5ICogNDV9JSAvICR7MC4xNSArIGVuZXJneSAqIDAuN30pYDtcbiAgICBjdHgubGluZVdpZHRoID0gMS41ICsgZW5lcmd5ICogNjtcbiAgICBjdHguc3Ryb2tlKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFpbnRMYXR0aWNlKFxuICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcbiAgd2lkdGg6IG51bWJlcixcbiAgaGVpZ2h0OiBudW1iZXIsXG4gIHNwZWN0cnVtOiBVaW50OEFycmF5LFxuICBsZXZlbDogbnVtYmVyLFxuICB0aW1lOiBudW1iZXIsXG4pIHtcbiAgZmFkZShjdHgsIHdpZHRoLCBoZWlnaHQsIDAuMTQpO1xuICBjb25zdCBjb2xzID0gMTY7XG4gIGNvbnN0IHJvd3MgPSA5O1xuICBjb25zdCBjZWxsVyA9IHdpZHRoIC8gY29scztcbiAgY29uc3QgY2VsbEggPSBoZWlnaHQgLyByb3dzO1xuICBjb25zdCBiYXNzID0gYmFuZChzcGVjdHJ1bSwgMCwgMC4xOCk7XG4gIGNvbnN0IG1pZCA9IGJhbmQoc3BlY3RydW0sIDAuMTgsIDAuNTUpO1xuICBjb25zdCBoaWdoID0gYmFuZChzcGVjdHJ1bSwgMC41NSwgMSk7XG5cbiAgZm9yIChsZXQgeSA9IDA7IHkgPCByb3dzOyB5ICs9IDEpIHtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGNvbHM7IHggKz0gMSkge1xuICAgICAgY29uc3QgbiA9ICh4ICsgeSAqIGNvbHMpIC8gKGNvbHMgKiByb3dzKTtcbiAgICAgIGNvbnN0IHB1bHNlID1cbiAgICAgICAgc2FtcGxlQXQoc3BlY3RydW0sIG4pICogMC42NSArXG4gICAgICAgIGJhc3MgKiAoMSAtIE1hdGguYWJzKHggLyBjb2xzIC0gMC41KSkgK1xuICAgICAgICBtaWQgKiBNYXRoLnNpbih0aW1lICsgeCAqIDAuNCArIHkgKiAwLjMpICogMC4yNSArXG4gICAgICAgIGhpZ2ggKiAwLjE1O1xuICAgICAgY29uc3Qgc2l6ZSA9IE1hdGgubWF4KDAuMDgsIHB1bHNlKSAqICgwLjU1ICsgbGV2ZWwgKiAwLjcpO1xuICAgICAgY29uc3QgaHVlID0gODAgKyBuICogMjIwICsgdGltZSAqIDI1ICsgYmFzcyAqIDYwO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGBoc2xhKCR7aHVlICUgMzYwfSA4NSUgJHszMCArIHB1bHNlICogNDV9JSAvICR7MC4yICsgcHVsc2UgKiAwLjh9KWA7XG4gICAgICBjb25zdCB3ID0gY2VsbFcgKiBzaXplO1xuICAgICAgY29uc3QgaCA9IGNlbGxIICogc2l6ZTtcbiAgICAgIGN0eC5maWxsUmVjdChcbiAgICAgICAgeCAqIGNlbGxXICsgKGNlbGxXIC0gdykgKiAwLjUsXG4gICAgICAgIHkgKiBjZWxsSCArIChjZWxsSCAtIGgpICogMC41LFxuICAgICAgICB3LFxuICAgICAgICBoLFxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFpbnRSaWJib25zKFxuICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcbiAgd2lkdGg6IG51bWJlcixcbiAgaGVpZ2h0OiBudW1iZXIsXG4gIHNwZWN0cnVtOiBVaW50OEFycmF5LFxuICBsZXZlbDogbnVtYmVyLFxuICB0aW1lOiBudW1iZXIsXG4pIHtcbiAgZmFkZShjdHgsIHdpZHRoLCBoZWlnaHQsIDAuMDggKyAoMSAtIGxldmVsKSAqIDAuMDUpO1xuICBjb25zdCByaWJib25zID0gNztcbiAgZm9yIChsZXQgciA9IDA7IHIgPCByaWJib25zOyByICs9IDEpIHtcbiAgICBjb25zdCBiYXNlWSA9ICgociArIDEpIC8gKHJpYmJvbnMgKyAxKSkgKiBoZWlnaHQ7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGZvciAobGV0IHggPSAwOyB4IDw9IHdpZHRoOyB4ICs9IDYpIHtcbiAgICAgIGNvbnN0IHQgPSB4IC8gd2lkdGg7XG4gICAgICBjb25zdCBzYW1wbGUgPSBzYW1wbGVBdChzcGVjdHJ1bSwgKHQgKyByICogMC4wNykgJSAxKTtcbiAgICAgIGNvbnN0IHkgPVxuICAgICAgICBiYXNlWSArXG4gICAgICAgIE1hdGguc2luKHQgKiBNYXRoLlBJICogNCArIHRpbWUgKiAoMS4yICsgciAqIDAuMTUpICsgcikgKiAoMTggKyBsZXZlbCAqIDQwKSArXG4gICAgICAgIChzYW1wbGUgLSAwLjUpICogaGVpZ2h0ICogMC4yODtcbiAgICAgIGlmICh4ID09PSAwKSBjdHgubW92ZVRvKHgsIHkpO1xuICAgICAgZWxzZSBjdHgubGluZVRvKHgsIHkpO1xuICAgIH1cbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBgaHNsYSgkeyhyICogNDIgKyB0aW1lICogMzUgKyBsZXZlbCAqIDUwKSAlIDM2MH0gOTAlIDYwJSAvICR7MC4zNSArIGxldmVsICogMC40NX0pYDtcbiAgICBjdHgubGluZVdpZHRoID0gMiArIGxldmVsICogNSArIGJhbmQoc3BlY3RydW0sIHIgLyByaWJib25zLCAociArIDEpIC8gcmliYm9ucykgKiA4O1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYWludEJsb29tKFxuICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcbiAgd2lkdGg6IG51bWJlcixcbiAgaGVpZ2h0OiBudW1iZXIsXG4gIHNwZWN0cnVtOiBVaW50OEFycmF5LFxuICBsZXZlbDogbnVtYmVyLFxuICB0aW1lOiBudW1iZXIsXG4pIHtcbiAgZmFkZShjdHgsIHdpZHRoLCBoZWlnaHQsIDAuMSk7XG4gIGNvbnN0IGNvdW50ID0gMjg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkgKz0gMSkge1xuICAgIGNvbnN0IHQgPSBpIC8gY291bnQ7XG4gICAgY29uc3Qgc2FtcGxlID0gc2FtcGxlQXQoc3BlY3RydW0sIHQpO1xuICAgIGNvbnN0IG9yYml0ID0gMC4xNSArIHNhbXBsZSAqIDAuMzUgKyBsZXZlbCAqIDAuMTI7XG4gICAgY29uc3QgY3ggPVxuICAgICAgd2lkdGggKlxuICAgICAgKDAuNSArIE1hdGguY29zKHRpbWUgKiAoMC40ICsgdCkgKyBpICogMS43KSAqIG9yYml0ICogKDAuNyArIHNhbXBsZSkpO1xuICAgIGNvbnN0IGN5ID1cbiAgICAgIGhlaWdodCAqXG4gICAgICAoMC41ICsgTWF0aC5zaW4odGltZSAqICgwLjM1ICsgdCAqIDAuOCkgKyBpICogMS4zKSAqIG9yYml0ICogKDAuNTUgKyBzYW1wbGUpKTtcbiAgICBjb25zdCByYWRpdXMgPSAoOCArIHNhbXBsZSAqIDQ4ICsgbGV2ZWwgKiAyNCkgKiAoMC42ICsgKGkgJSAzKSAqIDAuMik7XG4gICAgY29uc3QgZ3JhZGllbnQgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoY3gsIGN5LCAwLCBjeCwgY3ksIHJhZGl1cyk7XG4gICAgY29uc3QgaHVlID0gKHQgKiAyODAgKyB0aW1lICogNDAgKyBzYW1wbGUgKiA5MCkgJSAzNjA7XG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsIGBoc2xhKCR7aHVlfSA5NSUgNzAlIC8gJHswLjM1ICsgc2FtcGxlICogMC41NX0pYCk7XG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAuNTUsIGBoc2xhKCR7KGh1ZSArIDQwKSAlIDM2MH0gODAlIDUwJSAvICR7MC4xMiArIHNhbXBsZSAqIDAuMjV9KWApO1xuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCBcImhzbGEoMCAwJSAwJSAvIDApXCIpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBncmFkaWVudDtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmFyYyhjeCwgY3ksIHJhZGl1cywgMCwgTWF0aC5QSSAqIDIpO1xuICAgIGN0eC5maWxsKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFpbnRTaGFyZHMoXG4gIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxuICB3aWR0aDogbnVtYmVyLFxuICBoZWlnaHQ6IG51bWJlcixcbiAgc3BlY3RydW06IFVpbnQ4QXJyYXksXG4gIGxldmVsOiBudW1iZXIsXG4gIHRpbWU6IG51bWJlcixcbikge1xuICBmYWRlKGN0eCwgd2lkdGgsIGhlaWdodCwgMC4xNik7XG4gIGNvbnN0IHNoYXJkcyA9IDI0O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNoYXJkczsgaSArPSAxKSB7XG4gICAgY29uc3QgdCA9IGkgLyBzaGFyZHM7XG4gICAgY29uc3Qgc2FtcGxlID0gc2FtcGxlQXQoc3BlY3RydW0sIHQpO1xuICAgIGNvbnN0IGVuZXJneSA9IHNhbXBsZSAqICgwLjQgKyBsZXZlbCk7XG4gICAgY29uc3QgeCA9IHdpZHRoICogKChNYXRoLnNpbihpICogMTIuOTg5OCArIHRpbWUpICogMC41ICsgMC41KSAqIDAuOSArIDAuMDUpO1xuICAgIGNvbnN0IHkgPSBoZWlnaHQgKiAoKE1hdGguY29zKGkgKiA3OC4yMzMgKyB0aW1lICogMC43KSAqIDAuNSArIDAuNSkgKiAwLjkgKyAwLjA1KTtcbiAgICBjb25zdCBsZW4gPSAyMCArIGVuZXJneSAqIDEyMDtcbiAgICBjb25zdCBhbmdsZSA9IHRpbWUgKiAoMC44ICsgdCkgKyBpICogMC45ICsgc2FtcGxlICogMztcbiAgICBjdHguc2F2ZSgpO1xuICAgIGN0eC50cmFuc2xhdGUoeCwgeSk7XG4gICAgY3R4LnJvdGF0ZShhbmdsZSk7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oMCwgLWxlbiAqIDAuMTUpO1xuICAgIGN0eC5saW5lVG8obGVuLCAwKTtcbiAgICBjdHgubGluZVRvKDAsIGxlbiAqIDAuMTUpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguZmlsbFN0eWxlID0gYGhzbGEoJHsoaSAqIDE3ICsgdGltZSAqIDYwKSAlIDM2MH0gOTAlICR7NDAgKyBlbmVyZ3kgKiA0MH0lIC8gJHswLjI1ICsgZW5lcmd5ICogMC43fSlgO1xuICAgIGN0eC5maWxsKCk7XG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYWludFBsYXNtYShcbiAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXG4gIHdpZHRoOiBudW1iZXIsXG4gIGhlaWdodDogbnVtYmVyLFxuICBzcGVjdHJ1bTogVWludDhBcnJheSxcbiAgbGV2ZWw6IG51bWJlcixcbiAgdGltZTogbnVtYmVyLFxuKSB7XG4gIGZhZGUoY3R4LCB3aWR0aCwgaGVpZ2h0LCAwLjA3KTtcbiAgY29uc3Qgc3RlcCA9IDg7XG4gIGNvbnN0IGJhc3MgPSBiYW5kKHNwZWN0cnVtLCAwLCAwLjIpO1xuICBjb25zdCBtaWQgPSBiYW5kKHNwZWN0cnVtLCAwLjIsIDAuNik7XG4gIGNvbnN0IGhpZ2ggPSBiYW5kKHNwZWN0cnVtLCAwLjYsIDEpO1xuICBmb3IgKGxldCB5ID0gMDsgeSA8IGhlaWdodDsgeSArPSBzdGVwKSB7XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCB3aWR0aDsgeCArPSBzdGVwKSB7XG4gICAgICBjb25zdCB1ID0geCAvIHdpZHRoO1xuICAgICAgY29uc3QgdiA9IHkgLyBoZWlnaHQ7XG4gICAgICBjb25zdCB3YXZlID1cbiAgICAgICAgTWF0aC5zaW4odSAqIDggKyB0aW1lICogMS40ICsgYmFzcyAqIDQpICpcbiAgICAgICAgICBNYXRoLmNvcyh2ICogNyAtIHRpbWUgKiAxLjEgKyBtaWQgKiAzKSAqXG4gICAgICAgICAgMC41ICtcbiAgICAgICAgMC41O1xuICAgICAgY29uc3Qgc3BhcmsgPSBzYW1wbGVBdChzcGVjdHJ1bSwgKHUgKyB2KSAqIDAuNSkgKiBoaWdoO1xuICAgICAgY29uc3QgdmFsdWUgPSBNYXRoLm1pbigxLCB3YXZlICogKDAuNDUgKyBsZXZlbCAqIDAuNCkgKyBzcGFyayAqIDAuNTUgKyBiYXNzICogMC4yKTtcbiAgICAgIGlmICh2YWx1ZSA8IDAuMTgpIGNvbnRpbnVlO1xuICAgICAgY29uc3QgaHVlID0gMTYwICsgdmFsdWUgKiAxNDAgKyB0aW1lICogMjAgKyBiYXNzICogNTA7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYGhzbGEoJHtodWUgJSAzNjB9IDg1JSAkezI1ICsgdmFsdWUgKiA1MH0lIC8gJHswLjE1ICsgdmFsdWUgKiAwLjd9KWA7XG4gICAgICBjdHguZmlsbFJlY3QoeCwgeSwgc3RlcCArIDEsIHN0ZXAgKyAxKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFpbnRWaXN1YWwoXG4gIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxuICB3aWR0aDogbnVtYmVyLFxuICBoZWlnaHQ6IG51bWJlcixcbiAgc3BlY3RydW06IFVpbnQ4QXJyYXksXG4gIGxldmVsOiBudW1iZXIsXG4gIHRpbWU6IG51bWJlcixcbiAgdmlzdWFsOiBBdWRpb1Zpc3VhbElkLFxuKSB7XG4gIHN3aXRjaCAodmlzdWFsKSB7XG4gICAgY2FzZSBcImJhcnNcIjpcbiAgICAgIHBhaW50QmFycyhjdHgsIHdpZHRoLCBoZWlnaHQsIHNwZWN0cnVtLCBsZXZlbCwgdGltZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwicmFkaWFsXCI6XG4gICAgICBwYWludFJhZGlhbChjdHgsIHdpZHRoLCBoZWlnaHQsIHNwZWN0cnVtLCBsZXZlbCwgdGltZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwidHVubmVsXCI6XG4gICAgICBwYWludFR1bm5lbChjdHgsIHdpZHRoLCBoZWlnaHQsIHNwZWN0cnVtLCBsZXZlbCwgdGltZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwibGF0dGljZVwiOlxuICAgICAgcGFpbnRMYXR0aWNlKGN0eCwgd2lkdGgsIGhlaWdodCwgc3BlY3RydW0sIGxldmVsLCB0aW1lKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJyaWJib25zXCI6XG4gICAgICBwYWludFJpYmJvbnMoY3R4LCB3aWR0aCwgaGVpZ2h0LCBzcGVjdHJ1bSwgbGV2ZWwsIHRpbWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImJsb29tXCI6XG4gICAgICBwYWludEJsb29tKGN0eCwgd2lkdGgsIGhlaWdodCwgc3BlY3RydW0sIGxldmVsLCB0aW1lKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJzaGFyZHNcIjpcbiAgICAgIHBhaW50U2hhcmRzKGN0eCwgd2lkdGgsIGhlaWdodCwgc3BlY3RydW0sIGxldmVsLCB0aW1lKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJwbGFzbWFcIjpcbiAgICAgIHBhaW50UGxhc21hKGN0eCwgd2lkdGgsIGhlaWdodCwgc3BlY3RydW0sIGxldmVsLCB0aW1lKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6IHtcbiAgICAgIGNvbnN0IF9leGhhdXN0aXZlOiBuZXZlciA9IHZpc3VhbDtcbiAgICAgIHJldHVybiBfZXhoYXVzdGl2ZTtcbiAgICB9XG4gIH1cbn1cblxuLyoqIFBhaW50IGEgcmVhY3RpdmUgZmllbGQgdXNlZCBhcyB0aGUgbW9ycGhlciB0ZXh0dXJlIGZvciBhdWRpbyAvIGxpdmUuICovXG5leHBvcnQgZnVuY3Rpb24gcGFpbnRBdWRpb1Zpc3VhbChcbiAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCxcbiAgc3BlY3RydW06IFVpbnQ4QXJyYXksXG4gIGxldmVsOiBudW1iZXIsXG4gIHRpbWU6IG51bWJlcixcbiAgdmlzdWFsOiBBdWRpb1Zpc3VhbElkLFxuKSB7XG4gIGNvbnN0IHdpZHRoID0gY2FudmFzLndpZHRoO1xuICBjb25zdCBoZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBpZiAoIWN0eCkgcmV0dXJuO1xuXG4gIGNvbnN0IHNpZ25hbCA9IHdpdGhBbWJpZW50Rmxvb3Ioc3BlY3RydW0sIGxldmVsLCB0aW1lKTtcbiAgcGFpbnRWaXN1YWwoY3R4LCB3aWR0aCwgaGVpZ2h0LCBzaWduYWwuc3BlY3RydW0sIHNpZ25hbC5sZXZlbCwgdGltZSwgdmlzdWFsKTtcbn1cblxuLyoqIElkbGUgZmllbGQgZm9yIHRoZSBlbXB0eSBzdGFnZSBcdTIwMTQgYWx3YXlzIHNvbWV0aGluZyBmb3IgdGhlIG1vcnBoZXIgdG8gY2hldy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYWludElkbGVWaXN1YWwoXG4gIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsXG4gIHZpc3VhbDogQXVkaW9WaXN1YWxJZCxcbiAgdGltZTogbnVtYmVyLFxuKTogbnVtYmVyIHtcbiAgZW5zdXJlU3BlY3RydW1DYW52YXMoY2FudmFzKTtcbiAgZW5zdXJlV29ya0JpbnMoMTI4KTtcbiAgY29uc3QgbGV2ZWwgPSBmaWxsQW1iaWVudFNwZWN0cnVtKGFtYmllbnRCaW5zLCB0aW1lKTtcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgaWYgKCFjdHgpIHJldHVybiBsZXZlbDtcbiAgcGFpbnRWaXN1YWwoY3R4LCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQsIGFtYmllbnRCaW5zLCBsZXZlbCwgdGltZSwgdmlzdWFsKTtcbiAgcmV0dXJuIGxldmVsO1xufVxuXG4vKiogVHVybiBhcmJpdHJhcnkgZmlsZSBieXRlcyBpbnRvIGEgc3RpbGwgdGV4dHVyZSB0aGUgbW9ycGhlciBjYW4gY2hldyBvbi4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYWludERhdGFCeXRlcyhjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBieXRlczogVWludDhBcnJheSkge1xuICBjb25zdCB3aWR0aCA9IDI1NjtcbiAgY29uc3QgaGVpZ2h0ID0gMjU2O1xuICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgaWYgKCFjdHgpIHJldHVybjtcblxuICBjb25zdCBpbWFnZSA9IGN0eC5jcmVhdGVJbWFnZURhdGEod2lkdGgsIGhlaWdodCk7XG4gIGNvbnN0IHRvdGFsID0gd2lkdGggKiBoZWlnaHQ7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG90YWw7IGkgKz0gMSkge1xuICAgIGNvbnN0IGEgPSBieXRlc1tpICUgYnl0ZXMubGVuZ3RoXSA/PyAwO1xuICAgIGNvbnN0IGIgPSBieXRlc1soaSAqIDMpICUgYnl0ZXMubGVuZ3RoXSA/PyAwO1xuICAgIGNvbnN0IGMgPSBieXRlc1soaSAqIDcgKyAxMykgJSBieXRlcy5sZW5ndGhdID8/IDA7XG4gICAgY29uc3QgbyA9IGkgKiA0O1xuICAgIGltYWdlLmRhdGFbb10gPSBhO1xuICAgIGltYWdlLmRhdGFbbyArIDFdID0gYjtcbiAgICBpbWFnZS5kYXRhW28gKyAyXSA9IChhIF4gYykgJiAyNTU7XG4gICAgaW1hZ2UuZGF0YVtvICsgM10gPSAyNTU7XG4gIH1cbiAgY3R4LnB1dEltYWdlRGF0YShpbWFnZSwgMCwgMCk7XG5cbiAgY29uc3Qgd2FzaCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgd2FzaC5hZGRDb2xvclN0b3AoMCwgXCJyZ2JhKDIxMCwyNTUsNjQsMC4xMilcIik7XG4gIHdhc2guYWRkQ29sb3JTdG9wKDAuNSwgXCJyZ2JhKDE1NywxMTQsMjU1LDAuMSlcIik7XG4gIHdhc2guYWRkQ29sb3JTdG9wKDEsIFwicmdiYSgyNTUsNzksMTYzLDAuMTIpXCIpO1xuICBjdHguZmlsbFN0eWxlID0gd2FzaDtcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5zdXJlU3BlY3RydW1DYW52YXMoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCkge1xuICBpZiAoY2FudmFzLndpZHRoICE9PSA2NDAgfHwgY2FudmFzLmhlaWdodCAhPT0gMzYwKSB7XG4gICAgY2FudmFzLndpZHRoID0gNjQwO1xuICAgIGNhbnZhcy5oZWlnaHQgPSAzNjA7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxldmVsRnJvbVNwZWN0cnVtKHNwZWN0cnVtOiBVaW50OEFycmF5KTogbnVtYmVyIHtcbiAgY29uc3QgYmlucyA9IE1hdGgubWluKDQ4LCBzcGVjdHJ1bS5sZW5ndGgpO1xuICBsZXQgdG90YWwgPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGJpbnM7IGkgKz0gMSlcbiAgICB0b3RhbCArPSBzcGVjdHJ1bVtpXSAqICgxLjM1IC0gKGkgLyBiaW5zKSAqIDAuNTUpO1xuICByZXR1cm4gTWF0aC5taW4oMSwgdG90YWwgLyBiaW5zIC8gMTkwKTtcbn1cbiIsICJjb25zdCBFTkNPREVEX0VOVElUSUVTID0gL1tcIiY8XS87XG5cbi8qKiBAcGFyYW0ge3N0cmluZ30gc3RyICovXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlRW50aXRpZXMoc3RyKSB7XG5cdC8vIFNraXAgYWxsIHdvcmsgZm9yIHN0cmluZ3Mgd2l0aCBubyBlbnRpdGllcyBuZWVkaW5nIGVuY29kaW5nOlxuXHRpZiAoc3RyLmxlbmd0aCA9PT0gMCB8fCBFTkNPREVEX0VOVElUSUVTLnRlc3Qoc3RyKSA9PT0gZmFsc2UpIHJldHVybiBzdHI7XG5cblx0bGV0IGxhc3QgPSAwLFxuXHRcdGkgPSAwLFxuXHRcdG91dCA9ICcnLFxuXHRcdGNoID0gJyc7XG5cblx0Ly8gU2VlayBmb3J3YXJkIGluIHN0ciB1bnRpbCB0aGUgbmV4dCBlbnRpdHkgY2hhcjpcblx0Zm9yICg7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcblx0XHRzd2l0Y2ggKHN0ci5jaGFyQ29kZUF0KGkpKSB7XG5cdFx0XHRjYXNlIDM0OlxuXHRcdFx0XHRjaCA9ICcmcXVvdDsnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMzg6XG5cdFx0XHRcdGNoID0gJyZhbXA7Jztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDYwOlxuXHRcdFx0XHRjaCA9ICcmbHQ7Jztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Ly8gQXBwZW5kIHNraXBwZWQvYnVmZmVyZWQgY2hhcmFjdGVycyBhbmQgdGhlIGVuY29kZWQgZW50aXR5OlxuXHRcdGlmIChpICE9PSBsYXN0KSBvdXQgKz0gc3RyLnNsaWNlKGxhc3QsIGkpO1xuXHRcdG91dCArPSBjaDtcblx0XHQvLyBTdGFydCB0aGUgbmV4dCBzZWVrL2J1ZmZlciBhZnRlciB0aGUgZW50aXR5J3Mgb2Zmc2V0OlxuXHRcdGxhc3QgPSBpICsgMTtcblx0fVxuXHRpZiAoaSAhPT0gbGFzdCkgb3V0ICs9IHN0ci5zbGljZShsYXN0LCBpKTtcblx0cmV0dXJuIG91dDtcbn1cbiIsICIvKiogTm9ybWFsIGh5ZHJhdGlvbiB0aGF0IGF0dGFjaGVzIHRvIGEgRE9NIHRyZWUgYnV0IGRvZXMgbm90IGRpZmYgaXQuICovXG5leHBvcnQgY29uc3QgTU9ERV9IWURSQVRFID0gMSA8PCA1O1xuLyoqIFNpZ25pZmllcyB0aGlzIFZOb2RlIHN1c3BlbmRlZCBvbiB0aGUgcHJldmlvdXMgcmVuZGVyICovXG5leHBvcnQgY29uc3QgTU9ERV9TVVNQRU5ERUQgPSAxIDw8IDc7XG4vKiogSW5kaWNhdGVzIHRoYXQgdGhpcyBub2RlIG5lZWRzIHRvIGJlIGluc2VydGVkIHdoaWxlIHBhdGNoaW5nIGNoaWxkcmVuICovXG5leHBvcnQgY29uc3QgSU5TRVJUX1ZOT0RFID0gMSA8PCAyO1xuLyoqIEluZGljYXRlcyBhIFZOb2RlIGhhcyBiZWVuIG1hdGNoZWQgd2l0aCBhbm90aGVyIFZOb2RlIGluIHRoZSBkaWZmICovXG5leHBvcnQgY29uc3QgTUFUQ0hFRCA9IDEgPDwgMTtcblxuLyoqIFJlc2V0IGFsbCBtb2RlIGZsYWdzICovXG5leHBvcnQgY29uc3QgUkVTRVRfTU9ERSA9IH4oTU9ERV9IWURSQVRFIHwgTU9ERV9TVVNQRU5ERUQpO1xuXG5leHBvcnQgY29uc3QgU1ZHX05BTUVTUEFDRSA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG5leHBvcnQgY29uc3QgWEhUTUxfTkFNRVNQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnO1xuZXhwb3J0IGNvbnN0IE1BVEhfTkFNRVNQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUwnO1xuXG5leHBvcnQgY29uc3QgTlVMTCA9IG51bGw7XG5leHBvcnQgY29uc3QgVU5ERUZJTkVEID0gdW5kZWZpbmVkO1xuZXhwb3J0IGNvbnN0IEVNUFRZX09CSiA9IC8qKiBAdHlwZSB7YW55fSAqLyAoe30pO1xuZXhwb3J0IGNvbnN0IEVNUFRZX0FSUiA9IFtdO1xuZXhwb3J0IGNvbnN0IElTX05PTl9ESU1FTlNJT05BTCA9XG5cdC9hY2l0fGV4KD86c3xnfG58cHwkKXxycGh8Z3JpZHxvd3N8bW5jfG50d3xpbmVbY2hdfHpvb3xeb3JkfGl0ZXJhL2k7XG4iLCAiaW1wb3J0IHsgb3B0aW9ucywgRnJhZ21lbnQgfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHsgZW5jb2RlRW50aXRpZXMgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IElTX05PTl9ESU1FTlNJT05BTCB9IGZyb20gJy4uLy4uL3NyYy9jb25zdGFudHMnO1xuXG5sZXQgdm5vZGVJZCA9IDA7XG5cbmNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXdcbiAqIFRoaXMgZmlsZSBleHBvcnRzIHZhcmlvdXMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBCYWJlbCdzIFwiYXV0b21hdGljXCIgSlNYIHJ1bnRpbWUgQVBJOlxuICogLSBqc3godHlwZSwgcHJvcHMsIGtleSlcbiAqIC0ganN4cyh0eXBlLCBwcm9wcywga2V5KVxuICogLSBqc3hERVYodHlwZSwgcHJvcHMsIGtleSwgX19zb3VyY2UsIF9fc2VsZilcbiAqXG4gKiBUaGUgaW1wbGVtZW50YXRpb24gb2YgY3JlYXRlVk5vZGUgaGVyZSBpcyBvcHRpbWl6ZWQgZm9yIHBlcmZvcm1hbmNlLlxuICogQmVuY2htYXJrczogaHR0cHM6Ly9lc2JlbmNoLmNvbS9iZW5jaC81ZjZiNTRhMGI0NjMyMTAwYTdkY2QyYjNcbiAqL1xuXG4vKipcbiAqIEpTWC5FbGVtZW50IGZhY3RvcnkgdXNlZCBieSBCYWJlbCdzIHtydW50aW1lOlwiYXV0b21hdGljXCJ9IEpTWCB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7Vk5vZGVbJ3R5cGUnXX0gdHlwZVxuICogQHBhcmFtIHtWTm9kZVsncHJvcHMnXX0gcHJvcHNcbiAqIEBwYXJhbSB7Vk5vZGVbJ2tleSddfSBba2V5XVxuICogQHBhcmFtIHt1bmtub3dufSBbaXNTdGF0aWNDaGlsZHJlbl1cbiAqIEBwYXJhbSB7dW5rbm93bn0gW19fc291cmNlXVxuICogQHBhcmFtIHt1bmtub3dufSBbX19zZWxmXVxuICovXG5mdW5jdGlvbiBjcmVhdGVWTm9kZSh0eXBlLCBwcm9wcywga2V5LCBpc1N0YXRpY0NoaWxkcmVuLCBfX3NvdXJjZSwgX19zZWxmKSB7XG5cdGlmICghcHJvcHMpIHByb3BzID0ge307XG5cdC8vIFdlJ2xsIHdhbnQgdG8gcHJlc2VydmUgYHJlZmAgaW4gcHJvcHMgdG8gZ2V0IHJpZCBvZiB0aGUgbmVlZCBmb3Jcblx0Ly8gZm9yd2FyZFJlZiBjb21wb25lbnRzIGluIHRoZSBmdXR1cmUsIGJ1dCB0aGF0IHNob3VsZCBoYXBwZW4gdmlhXG5cdC8vIGEgc2VwYXJhdGUgUFIuXG5cdGxldCBub3JtYWxpemVkUHJvcHMgPSBwcm9wcyxcblx0XHRyZWYsXG5cdFx0aTtcblxuXHRpZiAoJ3JlZicgaW4gbm9ybWFsaXplZFByb3BzKSB7XG5cdFx0bm9ybWFsaXplZFByb3BzID0ge307XG5cdFx0Zm9yIChpIGluIHByb3BzKSB7XG5cdFx0XHRpZiAoaSA9PSAncmVmJykge1xuXHRcdFx0XHRyZWYgPSBwcm9wc1tpXTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG5vcm1hbGl6ZWRQcm9wc1tpXSA9IHByb3BzW2ldO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKiBAdHlwZSB7Vk5vZGUgJiB7IF9fc291cmNlOiBhbnk7IF9fc2VsZjogYW55IH19ICovXG5cdGNvbnN0IHZub2RlID0ge1xuXHRcdHR5cGUsXG5cdFx0cHJvcHM6IG5vcm1hbGl6ZWRQcm9wcyxcblx0XHRrZXksXG5cdFx0cmVmLFxuXHRcdF9jaGlsZHJlbjogbnVsbCxcblx0XHRfcGFyZW50OiBudWxsLFxuXHRcdF9kZXB0aDogMCxcblx0XHRfZG9tOiBudWxsLFxuXHRcdF9jb21wb25lbnQ6IG51bGwsXG5cdFx0Y29uc3RydWN0b3I6IHVuZGVmaW5lZCxcblx0XHRfb3JpZ2luYWw6IC0tdm5vZGVJZCxcblx0XHRfaW5kZXg6IC0xLFxuXHRcdF9mbGFnczogMCxcblx0XHRfX3NvdXJjZSxcblx0XHRfX3NlbGZcblx0fTtcblxuXHQvLyBJZiBhIENvbXBvbmVudCBWTm9kZSwgY2hlY2sgZm9yIGFuZCBhcHBseSBkZWZhdWx0UHJvcHMuXG5cdC8vIE5vdGU6IGB0eXBlYCBpcyBvZnRlbiBhIFN0cmluZywgYW5kIGNhbiBiZSBgdW5kZWZpbmVkYCBpbiBkZXZlbG9wbWVudC5cblx0aWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nICYmIChyZWYgPSB0eXBlLmRlZmF1bHRQcm9wcykpIHtcblx0XHRmb3IgKGkgaW4gcmVmKVxuXHRcdFx0aWYgKG5vcm1hbGl6ZWRQcm9wc1tpXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdG5vcm1hbGl6ZWRQcm9wc1tpXSA9IHJlZltpXTtcblx0XHRcdH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnZub2RlKSBvcHRpb25zLnZub2RlKHZub2RlKTtcblx0cmV0dXJuIHZub2RlO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIHRlbXBsYXRlIHZub2RlLiBUaGlzIGZ1bmN0aW9uIGlzIG5vdCBleHBlY3RlZCB0byBiZVxuICogdXNlZCBkaXJlY3RseSwgYnV0IHJhdGhlciB0aHJvdWdoIGEgcHJlY29tcGlsZSBKU1ggdHJhbnNmb3JtXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSB0ZW1wbGF0ZXNcbiAqIEBwYXJhbSAge0FycmF5PHN0cmluZyB8IG51bGwgfCBWTm9kZT59IGV4cHJzXG4gKiBAcmV0dXJucyB7Vk5vZGV9XG4gKi9cbmZ1bmN0aW9uIGpzeFRlbXBsYXRlKHRlbXBsYXRlcywgLi4uZXhwcnMpIHtcblx0Y29uc3Qgdm5vZGUgPSBjcmVhdGVWTm9kZShGcmFnbWVudCwgeyB0cGw6IHRlbXBsYXRlcywgZXhwcnMgfSk7XG5cdC8vIEJ5cGFzcyByZW5kZXIgdG8gc3RyaW5nIHRvcCBsZXZlbCBGcmFnbWVudCBvcHRpbWl6YXRpb25cblx0dm5vZGUua2V5ID0gdm5vZGUuX3Zub2RlO1xuXHRyZXR1cm4gdm5vZGU7XG59XG5cbmNvbnN0IEpTX1RPX0NTUyA9IHt9O1xuY29uc3QgQ1NTX1JFR0VYID0gL1tBLVpdL2c7XG5cbi8qKlxuICogVW53cmFwIHBvdGVudGlhbCBzaWduYWxzLlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHJldHVybnMgeyp9XG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZUF0dHJWYWx1ZSh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUgIT09IG51bGwgJiZcblx0XHR0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmXG5cdFx0dHlwZW9mIHZhbHVlLnZhbHVlT2YgPT09ICdmdW5jdGlvbidcblx0XHQ/IHZhbHVlLnZhbHVlT2YoKVxuXHRcdDogdmFsdWU7XG59XG5cbi8qKlxuICogU2VyaWFsaXplIGFuIEhUTUwgYXR0cmlidXRlIHRvIGEgc3RyaW5nLiBUaGlzIGZ1bmN0aW9uIGlzIG5vdFxuICogZXhwZWN0ZWQgdG8gYmUgdXNlZCBkaXJlY3RseSwgYnV0IHJhdGhlciB0aHJvdWdoIGEgcHJlY29tcGlsZVxuICogSlNYIHRyYW5zZm9ybVxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIGF0dHJpYnV0ZSBuYW1lXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBhdHRyaWJ1dGUgdmFsdWVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGpzeEF0dHIobmFtZSwgdmFsdWUpIHtcblx0aWYgKG9wdGlvbnMuYXR0cikge1xuXHRcdGNvbnN0IHJlc3VsdCA9IG9wdGlvbnMuYXR0cihuYW1lLCB2YWx1ZSk7XG5cdFx0aWYgKHR5cGVvZiByZXN1bHQgPT09ICdzdHJpbmcnKSByZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0dmFsdWUgPSBub3JtYWxpemVBdHRyVmFsdWUodmFsdWUpO1xuXG5cdGlmIChuYW1lID09PSAncmVmJyB8fCBuYW1lID09PSAna2V5JykgcmV0dXJuICcnO1xuXHRpZiAobmFtZSA9PT0gJ3N0eWxlJyAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG5cdFx0bGV0IHN0ciA9ICcnO1xuXHRcdGZvciAobGV0IHByb3AgaW4gdmFsdWUpIHtcblx0XHRcdGxldCB2YWwgPSB2YWx1ZVtwcm9wXTtcblx0XHRcdGlmICh2YWwgIT0gbnVsbCAmJiB2YWwgIT09ICcnKSB7XG5cdFx0XHRcdGNvbnN0IG5hbWUgPVxuXHRcdFx0XHRcdHByb3BbMF0gPT0gJy0nXG5cdFx0XHRcdFx0XHQ/IHByb3Bcblx0XHRcdFx0XHRcdDogSlNfVE9fQ1NTW3Byb3BdIHx8XG5cdFx0XHRcdFx0XHRcdChKU19UT19DU1NbcHJvcF0gPSBwcm9wLnJlcGxhY2UoQ1NTX1JFR0VYLCAnLSQmJykudG9Mb3dlckNhc2UoKSk7XG5cblx0XHRcdFx0bGV0IHN1ZmZpeCA9ICc7Jztcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdHR5cGVvZiB2YWwgPT09ICdudW1iZXInICYmXG5cdFx0XHRcdFx0Ly8gRXhjbHVkZSBjdXN0b20tYXR0cmlidXRlc1xuXHRcdFx0XHRcdCFuYW1lLnN0YXJ0c1dpdGgoJy0tJykgJiZcblx0XHRcdFx0XHQhSVNfTk9OX0RJTUVOU0lPTkFMLnRlc3QobmFtZSlcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0c3VmZml4ID0gJ3B4Oyc7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3RyID0gc3RyICsgbmFtZSArICc6JyArIHZhbCArIHN1ZmZpeDtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIG5hbWUgKyAnPVwiJyArIGVuY29kZUVudGl0aWVzKHN0cikgKyAnXCInO1xuXHR9XG5cblx0aWYgKFxuXHRcdHZhbHVlID09IG51bGwgfHxcblx0XHR2YWx1ZSA9PT0gZmFsc2UgfHxcblx0XHR0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgfHxcblx0XHR0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG5cdCkge1xuXHRcdHJldHVybiAnJztcblx0fSBlbHNlIGlmICh2YWx1ZSA9PT0gdHJ1ZSkgcmV0dXJuIG5hbWU7XG5cblx0cmV0dXJuIG5hbWUgKyAnPVwiJyArIGVuY29kZUVudGl0aWVzKCcnICsgdmFsdWUpICsgJ1wiJztcbn1cblxuLyoqXG4gKiBFc2NhcGUgYSBkeW5hbWljIGNoaWxkIHBhc3NlZCB0byBganN4VGVtcGxhdGVgLiBUaGlzIGZ1bmN0aW9uXG4gKiBpcyBub3QgZXhwZWN0ZWQgdG8gYmUgdXNlZCBkaXJlY3RseSwgYnV0IHJhdGhlciB0aHJvdWdoIGFcbiAqIHByZWNvbXBpbGUgSlNYIHRyYW5zZm9ybVxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHJldHVybnMge3N0cmluZyB8IG51bGwgfCBWTm9kZSB8IEFycmF5PHN0cmluZyB8IG51bGwgfCBWTm9kZT59XG4gKi9cbmZ1bmN0aW9uIGpzeEVzY2FwZSh2YWx1ZSkge1xuXHRpZiAoXG5cdFx0dmFsdWUgPT0gbnVsbCB8fFxuXHRcdHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nIHx8XG5cdFx0dHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nXG5cdCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcblx0XHQvLyBDaGVjayBmb3IgVk5vZGVcblx0XHRpZiAodmFsdWUuY29uc3RydWN0b3IgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHZhbHVlO1xuXG5cdFx0aWYgKGlzQXJyYXkodmFsdWUpKSB7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhbHVlW2ldID0ganN4RXNjYXBlKHZhbHVlW2ldKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZW5jb2RlRW50aXRpZXMoJycgKyB2YWx1ZSk7XG59XG5cbmV4cG9ydCB7XG5cdGNyZWF0ZVZOb2RlIGFzIGpzeCxcblx0Y3JlYXRlVk5vZGUgYXMganN4cyxcblx0Y3JlYXRlVk5vZGUgYXMganN4REVWLFxuXHRGcmFnbWVudCxcblx0Ly8gcHJlY29tcGlsZWQgSlNYIHRyYW5zZm9ybVxuXHRqc3hUZW1wbGF0ZSxcblx0anN4QXR0cixcblx0anN4RXNjYXBlXG59O1xuIiwgImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7XG4gICAgQ0xFQU4sXG4gICAgY3JlYXRlTW9ycGhlcixcbiAgICBERUZBVUxUX1RSSVAsXG4gICAgdHlwZSBNb3JwaGVySGFuZGxlLFxuICAgIHR5cGUgUG9pbnRlclN0YXRlLFxuICAgIHR5cGUgVHJpcFBhcmFtcyxcbn0gZnJvbSBcIi4vbW9ycGhlclwiO1xuaW1wb3J0IHtcbiAgICBhdWRpb1Zpc3VhbExhYmVsLFxuICAgIGNsYXNzaWZ5RmlsZSxcbiAgICBlbnN1cmVTcGVjdHJ1bUNhbnZhcyxcbiAgICBoYXNQbGF5YmFja0NvbnRyb2xzLFxuICAgIGlzVGltZWRTb3VyY2UsXG4gICAgbGV2ZWxGcm9tU3BlY3RydW0sXG4gICAgcGFpbnRBdWRpb1Zpc3VhbCxcbiAgICBwYWludERhdGFCeXRlcyxcbiAgICBwYWludElkbGVWaXN1YWwsXG4gICAgcmFuZG9tQXVkaW9WaXN1YWwsXG4gICAgc291cmNlTGFiZWwsXG4gICAgdHlwZSBBdWRpb1Zpc3VhbElkLFxuICAgIHR5cGUgU291cmNlS2luZCxcbn0gZnJvbSBcIi4vbWVkaWFcIjtcblxudHlwZSBTbGlkZXJLZXkgPSBFeGNsdWRlPGtleW9mIFRyaXBQYXJhbXMsIFwibW91c2VNb2RlXCIgfCBcInNoYWRlck1vZGVcIj47XG50eXBlIEdyb3VwSWQgPSBcIndvcmxkXCIgfCBcInNwYWNlXCIgfCBcImNvbG9yXCIgfCBcInNpZ25hbFwiIHwgXCJtb3Rpb25cIiB8IFwiY3Vyc29yXCI7XG5cbmNvbnN0IFNUVURJT19WSUVXX0tFWSA9IFwidmF1ZGlvOnNob3dTdHVkaW9cIjtcblxuZnVuY3Rpb24gcmVhZFNob3dTdHVkaW8oKTogYm9vbGVhbiB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFNUVURJT19WSUVXX0tFWSkgPT09IFwiMVwiO1xuICAgIH0gY2F0Y2gge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5jb25zdCBGQVZJQ09OX1NWRyA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyIDMyXCI+XG4gIDxyZWN0IHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIGZpbGw9XCIjMDgwODBhXCIvPlxuICA8cGF0aCBkPVwiTTUgOC41IDIzLjUgNS41IDI2LjUgMjMuNSA4IDI2LjVaXCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjNmU2YzY4XCIgc3Ryb2tlLXdpZHRoPVwiMS4yXCIvPlxuICA8cGF0aCBkPVwiTTQgNy41IDI0LjUgNC41IDI3LjUgMjQuNSA3IDI3LjVaXCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjZThlNmUwXCIgc3Ryb2tlLXdpZHRoPVwiMS43XCIvPlxuICA8cGF0aCBkPVwiTTEwIDIyLjUgMjEuNSA5LjVcIiBzdHJva2U9XCIjZThlNmUwXCIgc3Ryb2tlLXdpZHRoPVwiMi40XCIgc3Ryb2tlLWxpbmVjYXA9XCJzcXVhcmVcIi8+XG4gIDxwYXRoIGQ9XCJNMTEuMiAyMi41IDIyLjcgOS41XCIgc3Ryb2tlPVwiI2E4Nzg4MFwiIHN0cm9rZS13aWR0aD1cIjEuMVwiIHN0cm9rZS1saW5lY2FwPVwic3F1YXJlXCIgb3BhY2l0eT1cIi44NVwiLz5cbiAgPHJlY3QgeD1cIjIwLjVcIiB5PVwiMjAuNVwiIHdpZHRoPVwiMy4yXCIgaGVpZ2h0PVwiMy4yXCIgZmlsbD1cIiNlOGU2ZTBcIi8+XG4gIDxyZWN0IHg9XCI2LjVcIiB5PVwiNi41XCIgd2lkdGg9XCIyLjJcIiBoZWlnaHQ9XCIyLjJcIiBmaWxsPVwiIzZlNmM2OFwiLz5cbjwvc3ZnPmA7XG5cbnR5cGUgU2xpZGVyU3BlYyA9IHtcbiAgICBrZXk6IFNsaWRlcktleTtcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIGhpbnQ6IHN0cmluZztcbiAgICBtaW4/OiBudW1iZXI7XG4gICAgbWF4PzogbnVtYmVyO1xufTtcblxuY29uc3QgR1JPVVBTOiB7XG4gICAgaWQ6IEdyb3VwSWQ7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIHNsaWRlcnM6IFNsaWRlclNwZWNbXTtcbn1bXSA9IFtcbiAgICB7XG4gICAgICAgIGlkOiBcIndvcmxkXCIsXG4gICAgICAgIGxhYmVsOiBcIldvcmxkXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlN3YXAgdGhlIHJlbmRlcmluZyBlbmdpbmUsIHRoZW4gdHVuZSBob3cgaGFyZCBpdCB0YWtlcyBvdmVyLlwiLFxuICAgICAgICBzbGlkZXJzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcInNoYWRlck1peFwiLFxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIldvcmxkIGludGVuc2l0eVwiLFxuICAgICAgICAgICAgICAgIGhpbnQ6IFwiQmxlbmQgdGhlIGVuZ2luZSB3aXRoIHlvdXIgc291cmNlXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJzaGFkZXJEZXRhaWxcIixcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJXb3JsZCBkZXRhaWxcIixcbiAgICAgICAgICAgICAgICBoaW50OiBcIlNjYWxlLCBkZW5zaXR5IGFuZCBjb21wbGV4aXR5XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogXCJzcGFjZVwiLFxuICAgICAgICBsYWJlbDogXCJTcGFjZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJCZW5kLCBmb2xkIGFuZCB0dW5uZWwgdGhyb3VnaCB0aGUgZnJhbWUuXCIsXG4gICAgICAgIHNsaWRlcnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwid2FycFwiLFxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIkZsdWlkIHdhcnBcIixcbiAgICAgICAgICAgICAgICBoaW50OiBcIk9yZ2FuaWMgZGlzcGxhY2VtZW50IGZpZWxkXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBrZXk6IFwic3dpcmxcIiwgbGFiZWw6IFwiU3dpcmxcIiwgaGludDogXCJSb3RhdGlvbmFsIGdyYXZpdHlcIiB9LFxuICAgICAgICAgICAgeyBrZXk6IFwicmlwcGxlXCIsIGxhYmVsOiBcIlJpcHBsZXNcIiwgaGludDogXCJSYWRpYWwgd2F2ZSBwcmVzc3VyZVwiIH0sXG4gICAgICAgICAgICB7IGtleTogXCJ6b29tXCIsIGxhYmVsOiBcIlR1bm5lbFwiLCBoaW50OiBcIlB1c2ggaW50byB0aGUgaW1hZ2VcIiB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJrYWxlaWRvXCIsXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiS2FsZWlkb3Njb3BlXCIsXG4gICAgICAgICAgICAgICAgaGludDogXCIzIHRvIDE4IG1pcnJvcmVkIHNlZ21lbnRzXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJtaXJyb3JcIixcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJNaXJyb3IgZm9sZFwiLFxuICAgICAgICAgICAgICAgIGhpbnQ6IFwiSG9yaXpvbnRhbCBpbnRvIHF1YWQgc3ltbWV0cnlcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiBcImNvbG9yXCIsXG4gICAgICAgIGxhYmVsOiBcIkNvbG9yXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlJlYnVpbGQgdGhlIHNwZWN0cnVtIGludG8gc29tZXRoaW5nIHJhZGlvYWN0aXZlLlwiLFxuICAgICAgICBzbGlkZXJzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcImNocm9tYVwiLFxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIlByaXNtIHNwbGl0XCIsXG4gICAgICAgICAgICAgICAgaGludDogXCJTZXBhcmF0ZSBSR0IgY2hhbm5lbHNcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IGtleTogXCJodWVcIiwgbGFiZWw6IFwiSHVlIG9yYml0XCIsIGhpbnQ6IFwiUm90YXRlIHRoZSBjb2xvciB3aGVlbFwiIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcInNhdHVyYXRpb25cIixcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJTYXR1cmF0aW9uXCIsXG4gICAgICAgICAgICAgICAgaGludDogXCJGcm9tIGRyYWluZWQgdG8gbnVjbGVhclwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiY29udHJhc3RcIixcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJDb250cmFzdFwiLFxuICAgICAgICAgICAgICAgIGhpbnQ6IFwiQ3J1c2ggYW5kIGV4cGFuZCB0b25lXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJzb2xhcml6ZVwiLFxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIlNvbGFyaXplXCIsXG4gICAgICAgICAgICAgICAgaGludDogXCJJbnZlcnQgYXJvdW5kIHRoZSBtaWR0b25lc1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiZWRnZXNcIixcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJOZW9uIGVkZ2VzXCIsXG4gICAgICAgICAgICAgICAgaGludDogXCJTcGVjdHJhbCBlZGdlIGV4dHJhY3Rpb25cIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiBcInNpZ25hbFwiLFxuICAgICAgICBsYWJlbDogXCJTaWduYWxcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiUmVjdXJzaXZlIGVjaG9lcywgZGFtYWdlZCBkYXRhIGFuZCBhbmFsb2cgZmlsdGguXCIsXG4gICAgICAgIHNsaWRlcnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiZmVlZGJhY2tcIixcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJGZWVkYmFja1wiLFxuICAgICAgICAgICAgICAgIGhpbnQ6IFwiRmVlZCB0aGUgbGFzdCBmcmFtZSBpbnRvIHRoaXMgb25lXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJ0cmFpbHNcIixcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJUcmFpbCBsZW5ndGhcIixcbiAgICAgICAgICAgICAgICBoaW50OiBcIlBlcnNpc3RlbmNlIG9mIHJlY3Vyc2l2ZSBlY2hvZXNcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcImdsaXRjaFwiLFxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIkRhdGEgcm90XCIsXG4gICAgICAgICAgICAgICAgaGludDogXCJTbGljZXMsIGp1bXBzIGFuZCBwb3N0ZXJpemF0aW9uXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBrZXk6IFwiZ3JhaW5cIiwgbGFiZWw6IFwiR3JhaW5cIiwgaGludDogXCJIaWdoLWZyZXF1ZW5jeSBub2lzZVwiIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcInNjYW5saW5lc1wiLFxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIlNjYW5saW5lc1wiLFxuICAgICAgICAgICAgICAgIGhpbnQ6IFwiQ1JUIHJhc3RlciB0ZXh0dXJlXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJzdHJvYmVcIixcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJTdHJvYmVcIixcbiAgICAgICAgICAgICAgICBoaW50OiBcIlNvZnQgbHVtaW5hbmNlIHB1bHNlXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogXCJtb3Rpb25cIixcbiAgICAgICAgbGFiZWw6IFwiTW90aW9uXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkdpdmUgdGhlIG1hY2hpbmUgaXRzIG93biBwdWxzZSBhbmQgbmVydm91cyBzeXN0ZW0uXCIsXG4gICAgICAgIHNsaWRlcnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwibW90aW9uXCIsXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiQXV0byBtb3Rpb25cIixcbiAgICAgICAgICAgICAgICBoaW50OiBcIkhvdyBtdWNoIHRoZSBzY2VuZSBldm9sdmVzIGl0c2VsZlwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwic3BlZWRcIixcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJUaW1lIHNwZWVkXCIsXG4gICAgICAgICAgICAgICAgaGludDogXCJTbG93IGRyaWZ0IHRvIHRvdGFsIHBhbmljXCIsXG4gICAgICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgICAgIG1heDogMixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcImF1ZGlvXCIsXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiQXVkaW8gcmVhY3RcIixcbiAgICAgICAgICAgICAgICBoaW50OiBcIkxldCBiYXNzIGFuZCB2b2x1bWUgaGl0IHRoZSBzaGFkZXJcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcInNoYXBlc1wiLFxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIlN5bnRoIGdlb21ldHJ5XCIsXG4gICAgICAgICAgICAgICAgaGludDogXCJHZW5lcmF0aXZlIG9yYml0aW5nIGdseXBoc1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IFwiY3Vyc29yXCIsXG4gICAgICAgIGxhYmVsOiBcIkN1cnNvclwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgIFwiVGhlIHN0YWdlIGlzIGFuIGluc3RydW1lbnQuIERyYWcgYWNyb3NzIGl0IGFuZCBob2xkIHRvIHB1c2ggaGFyZGVyLlwiLFxuICAgICAgICBzbGlkZXJzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBcIm1vdXNlRm9yY2VcIixcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJDdXJzb3IgZm9yY2VcIixcbiAgICAgICAgICAgICAgICBoaW50OiBcIlN0cmVuZ3RoIG9mIHlvdXIgZ2VzdHVyZVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwibW91c2VTaXplXCIsXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiRmllbGQgc2l6ZVwiLFxuICAgICAgICAgICAgICAgIGhpbnQ6IFwiUmFkaXVzIGFyb3VuZCB0aGUgY3Vyc29yXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG5dO1xuXG5jb25zdCBDVVJTT1JfTU9ERVMgPSBbXG4gICAgeyB2YWx1ZTogMCwgbmFtZTogXCJWb3J0ZXhcIiwgZ2x5cGg6IFwiXHUyMUJCXCIgfSxcbiAgICB7IHZhbHVlOiAxLCBuYW1lOiBcIkdyYXZpdHlcIiwgZ2x5cGg6IFwiXHUyNUNFXCIgfSxcbiAgICB7IHZhbHVlOiAyLCBuYW1lOiBcIlByaXNtXCIsIGdseXBoOiBcIlx1MjVCM1wiIH0sXG4gICAgeyB2YWx1ZTogMywgbmFtZTogXCJNZWx0XCIsIGdseXBoOiBcIlx1MjE5M1wiIH0sXG5dO1xuXG5jb25zdCBTSEFERVJfV09STERTID0gW1xuICAgIHsgdmFsdWU6IDAsIG5hbWU6IFwiUmF3IHNpZ25hbFwiLCBnbHlwaDogXCJcdTI1Q0JcIiB9LFxuICAgIHsgdmFsdWU6IDEsIG5hbWU6IFwiTWVyY3VyeSBjZWxsc1wiLCBnbHlwaDogXCJcdTI1QzlcIiB9LFxuICAgIHsgdmFsdWU6IDIsIG5hbWU6IFwiV29ybWhvbGVcIiwgZ2x5cGg6IFwiXHUyMUFGXCIgfSxcbiAgICB7IHZhbHVlOiAzLCBuYW1lOiBcIlBpeGVsIG1lbHRcIiwgZ2x5cGg6IFwiXHUyNUE1XCIgfSxcbiAgICB7IHZhbHVlOiA0LCBuYW1lOiBcIlRoZXJtYWwgZ2hvc3RcIiwgZ2x5cGg6IFwiXHUyNjY4XCIgfSxcbiAgICB7IHZhbHVlOiA1LCBuYW1lOiBcIkhhbGZ0b25lIHJpb3RcIiwgZ2x5cGg6IFwiXHUyODNGXCIgfSxcbiAgICB7IHZhbHVlOiA2LCBuYW1lOiBcIkRhdGFtb3NoXCIsIGdseXBoOiBcIlx1MjMwMVwiIH0sXG4gICAgeyB2YWx1ZTogNywgbmFtZTogXCJSZWN1cnNpdmUgZHJlYW1cIiwgZ2x5cGg6IFwiXHUyNUM3XCIgfSxcbiAgICB7IHZhbHVlOiA4LCBuYW1lOiBcIk9pbCBzbGlja1wiLCBnbHlwaDogXCJcdTIyNEJcIiB9LFxuICAgIHsgdmFsdWU6IDksIG5hbWU6IFwiU2xpdCBzY2FubmVyXCIsIGdseXBoOiBcIlx1MjVBNFwiIH0sXG4gICAgeyB2YWx1ZTogMTAsIG5hbWU6IFwiU2luZ3VsYXJpdHlcIiwgZ2x5cGg6IFwiXHUyNUNGXCIgfSxcbiAgICB7IHZhbHVlOiAxMSwgbmFtZTogXCJTdGFpbmVkIGdsYXNzXCIsIGdseXBoOiBcIlx1MkIyMVwiIH0sXG4gICAgeyB2YWx1ZTogMTIsIG5hbWU6IFwiU3BlY3RyYWwgWC1yYXlcIiwgZ2x5cGg6IFwiXHUyNzI3XCIgfSxcbiAgICB7IHZhbHVlOiAxMywgbmFtZTogXCJDUlQgdm9pZFwiLCBnbHlwaDogXCJcdTI1QTZcIiB9LFxuICAgIHsgdmFsdWU6IDE0LCBuYW1lOiBcIkN1YmlzdCBzaGF0dGVyXCIsIGdseXBoOiBcIlx1MjVFOVwiIH0sXG4gICAgeyB2YWx1ZTogMTUsIG5hbWU6IFwiRWNobyBibG9vbVwiLCBnbHlwaDogXCJcdTI1Q0VcIiB9LFxuICAgIHsgdmFsdWU6IDE2LCBuYW1lOiBcIkxhc2VyIGV0Y2hcIiwgZ2x5cGg6IFwiXHUyMzA3XCIgfSxcbiAgICB7IHZhbHVlOiAxNywgbmFtZTogXCJUb3BvZ3JhcGhpYyBhY2lkXCIsIGdseXBoOiBcIlx1MjI0MFwiIH0sXG4gICAgeyB2YWx1ZTogMTgsIG5hbWU6IFwiUmVhY3RvciAzRFwiLCBnbHlwaDogXCJcdTJCMjJcIiB9LFxuXSBhcyBjb25zdDtcblxuZnVuY3Rpb24gbWFrZVByZXNldChvdmVycmlkZXM6IFBhcnRpYWw8VHJpcFBhcmFtcz4pOiBUcmlwUGFyYW1zIHtcbiAgICByZXR1cm4geyAuLi5DTEVBTiwgLi4ub3ZlcnJpZGVzIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJhbmRvbVRyaXAoKTogVHJpcFBhcmFtcyB7XG4gICAgY29uc3QgbmV4dCA9IHsgLi4uQ0xFQU4gfTtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhuZXh0KSBhcyAoa2V5b2YgVHJpcFBhcmFtcylbXSkge1xuICAgICAgICBpZiAoa2V5ID09PSBcIm1vdXNlTW9kZVwiKSBuZXh0W2tleV0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KTtcbiAgICAgICAgZWxzZSBpZiAoa2V5ID09PSBcInNoYWRlck1vZGVcIilcbiAgICAgICAgICAgIG5leHRba2V5XSA9IDEgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoU0hBREVSX1dPUkxEUy5sZW5ndGggLSAxKSk7XG4gICAgICAgIGVsc2UgaWYgKGtleSA9PT0gXCJzcGVlZFwiKSBuZXh0W2tleV0gPSAwLjM1ICsgTWF0aC5yYW5kb20oKSAqIDEuMzU7XG4gICAgICAgIGVsc2UgaWYgKGtleSA9PT0gXCJjb250cmFzdFwiIHx8IGtleSA9PT0gXCJzYXR1cmF0aW9uXCIpXG4gICAgICAgICAgICBuZXh0W2tleV0gPSAwLjUgKyBNYXRoLnJhbmRvbSgpICogMC41O1xuICAgICAgICBlbHNlIGlmIChrZXkgPT09IFwic2hhZGVyTWl4XCIpIG5leHRba2V5XSA9IDAuNSArIE1hdGgucmFuZG9tKCkgKiAwLjU7XG4gICAgICAgIGVsc2UgaWYgKGtleSA9PT0gXCJzaGFwZXNcIikgbmV4dFtrZXldID0gMC4yOCArIE1hdGgucmFuZG9tKCkgKiAwLjUyO1xuICAgICAgICBlbHNlIGlmIChrZXkgPT09IFwibW90aW9uXCIpIG5leHRba2V5XSA9IDAuNCArIE1hdGgucmFuZG9tKCkgKiAwLjU1O1xuICAgICAgICBlbHNlIGlmIChrZXkgPT09IFwic2hhZGVyRGV0YWlsXCIpIG5leHRba2V5XSA9IDAuMzUgKyBNYXRoLnJhbmRvbSgpICogMC41NTtcbiAgICAgICAgZWxzZSBuZXh0W2tleV0gPSBNYXRoLnBvdyhNYXRoLnJhbmRvbSgpLCAxLjI1KTtcbiAgICB9XG4gICAgLy8gRW1wdHkgLyBkYXJrIHNvdXJjZXMgbmVlZCBnZW5lcmF0aXZlIHNpZ25hbCBcdTIwMTQga2VlcCBmZWVkYmFjayBmcm9tIGVhdGluZyB0aGUgZnJhbWUuXG4gICAgbmV4dC5mZWVkYmFjayA9IE1hdGgubWluKG5leHQuZmVlZGJhY2ssIDAuNzIpO1xuICAgIG5leHQuc2NhbmxpbmVzID0gTWF0aC5taW4obmV4dC5zY2FubGluZXMsIDAuNDUpO1xuICAgIG5leHQuc3Ryb2JlICo9IDAuMzU7XG4gICAgbmV4dC5hdWRpbyA9IE1hdGgubWluKG5leHQuYXVkaW8sIDAuNTUpO1xuICAgIHJldHVybiBuZXh0O1xufVxuXG5jb25zdCBQUkVTRVRTOiB7IG5hbWU6IHN0cmluZzsgY29kZTogc3RyaW5nOyBwYXJhbXM6IFRyaXBQYXJhbXMgfVtdID0gW1xuICAgIHsgbmFtZTogXCJQdXJlIHNpZ25hbFwiLCBjb2RlOiBcIjAwXCIsIHBhcmFtczogQ0xFQU4gfSxcbiAgICB7IG5hbWU6IFwiTGlxdWlkIGNocm9tZVwiLCBjb2RlOiBcIjAxXCIsIHBhcmFtczogREVGQVVMVF9UUklQIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIkV2ZW50IGhvcml6b25cIixcbiAgICAgICAgY29kZTogXCIwMlwiLFxuICAgICAgICBwYXJhbXM6IG1ha2VQcmVzZXQoe1xuICAgICAgICAgICAgd2FycDogMC43OCxcbiAgICAgICAgICAgIHN3aXJsOiAwLjk2LFxuICAgICAgICAgICAgcmlwcGxlOiAwLjU2LFxuICAgICAgICAgICAgem9vbTogMC4zOCxcbiAgICAgICAgICAgIGNocm9tYTogMC41MixcbiAgICAgICAgICAgIGh1ZTogMC42NCxcbiAgICAgICAgICAgIHNhdHVyYXRpb246IDAuOSxcbiAgICAgICAgICAgIGNvbnRyYXN0OiAwLjcyLFxuICAgICAgICAgICAgc29sYXJpemU6IDAuMjQsXG4gICAgICAgICAgICBmZWVkYmFjazogMC43NixcbiAgICAgICAgICAgIHRyYWlsczogMC45MSxcbiAgICAgICAgICAgIG1vdGlvbjogMC44MixcbiAgICAgICAgICAgIHNwZWVkOiAwLjcyLFxuICAgICAgICAgICAgYXVkaW86IDAuNTUsXG4gICAgICAgICAgICBtb3VzZUZvcmNlOiAwLjk0LFxuICAgICAgICAgICAgbW91c2VTaXplOiAwLjYyLFxuICAgICAgICAgICAgbW91c2VNb2RlOiAxLFxuICAgICAgICB9KSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJOZW9uIGNhdGhlZHJhbFwiLFxuICAgICAgICBjb2RlOiBcIjAzXCIsXG4gICAgICAgIHBhcmFtczogbWFrZVByZXNldCh7XG4gICAgICAgICAgICB3YXJwOiAwLjIyLFxuICAgICAgICAgICAgc3dpcmw6IDAuMTgsXG4gICAgICAgICAgICByaXBwbGU6IDAuMjgsXG4gICAgICAgICAgICBrYWxlaWRvOiAwLjg4LFxuICAgICAgICAgICAgbWlycm9yOiAwLjQyLFxuICAgICAgICAgICAgY2hyb21hOiAwLjQ4LFxuICAgICAgICAgICAgaHVlOiAwLjc4LFxuICAgICAgICAgICAgc2F0dXJhdGlvbjogMSxcbiAgICAgICAgICAgIGNvbnRyYXN0OiAwLjY2LFxuICAgICAgICAgICAgc29sYXJpemU6IDAuMTgsXG4gICAgICAgICAgICBlZGdlczogMC44NixcbiAgICAgICAgICAgIGZlZWRiYWNrOiAwLjI4LFxuICAgICAgICAgICAgdHJhaWxzOiAwLjY0LFxuICAgICAgICAgICAgc2hhcGVzOiAwLjU4LFxuICAgICAgICAgICAgbW90aW9uOiAwLjYyLFxuICAgICAgICAgICAgc3BlZWQ6IDAuNTYsXG4gICAgICAgICAgICBhdWRpbzogMC4zOCxcbiAgICAgICAgICAgIG1vdXNlRm9yY2U6IDAuNzYsXG4gICAgICAgICAgICBtb3VzZVNpemU6IDAuMzgsXG4gICAgICAgIH0pLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIkRhdGEgc1x1MDBFOWFuY2VcIixcbiAgICAgICAgY29kZTogXCIwNFwiLFxuICAgICAgICBwYXJhbXM6IG1ha2VQcmVzZXQoe1xuICAgICAgICAgICAgd2FycDogMC4zNCxcbiAgICAgICAgICAgIHJpcHBsZTogMC4yLFxuICAgICAgICAgICAgY2hyb21hOiAwLjgyLFxuICAgICAgICAgICAgaHVlOiAwLjQ4LFxuICAgICAgICAgICAgc2F0dXJhdGlvbjogMC44NixcbiAgICAgICAgICAgIGNvbnRyYXN0OiAwLjc0LFxuICAgICAgICAgICAgc29sYXJpemU6IDAuMzYsXG4gICAgICAgICAgICBlZGdlczogMC40MixcbiAgICAgICAgICAgIGZlZWRiYWNrOiAwLjUyLFxuICAgICAgICAgICAgdHJhaWxzOiAwLjc4LFxuICAgICAgICAgICAgZ2xpdGNoOiAwLjkyLFxuICAgICAgICAgICAgZ3JhaW46IDAuNDgsXG4gICAgICAgICAgICBzY2FubGluZXM6IDAuNzIsXG4gICAgICAgICAgICBzdHJvYmU6IDAuMTIsXG4gICAgICAgICAgICBtb3Rpb246IDAuNzQsXG4gICAgICAgICAgICBzcGVlZDogMS4zLFxuICAgICAgICAgICAgYXVkaW86IDAuNjQsXG4gICAgICAgICAgICBtb3VzZUZvcmNlOiAwLjgyLFxuICAgICAgICAgICAgbW91c2VTaXplOiAwLjMxLFxuICAgICAgICAgICAgbW91c2VNb2RlOiAyLFxuICAgICAgICB9KSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJDYW5keSBmcmFjdHVyZVwiLFxuICAgICAgICBjb2RlOiBcIjA1XCIsXG4gICAgICAgIHBhcmFtczogbWFrZVByZXNldCh7XG4gICAgICAgICAgICB3YXJwOiAwLjYyLFxuICAgICAgICAgICAgc3dpcmw6IDAuNDgsXG4gICAgICAgICAgICByaXBwbGU6IDAuNjYsXG4gICAgICAgICAgICBrYWxlaWRvOiAwLjcyLFxuICAgICAgICAgICAgbWlycm9yOiAwLjI2LFxuICAgICAgICAgICAgY2hyb21hOiAwLjcsXG4gICAgICAgICAgICBodWU6IDAuOSxcbiAgICAgICAgICAgIHNhdHVyYXRpb246IDEsXG4gICAgICAgICAgICBjb250cmFzdDogMC41OCxcbiAgICAgICAgICAgIHNvbGFyaXplOiAwLjc4LFxuICAgICAgICAgICAgZWRnZXM6IDAuNTIsXG4gICAgICAgICAgICBmZWVkYmFjazogMC40NixcbiAgICAgICAgICAgIHRyYWlsczogMC42MixcbiAgICAgICAgICAgIHNoYXBlczogMC43MixcbiAgICAgICAgICAgIG1vdGlvbjogMC45LFxuICAgICAgICAgICAgc3BlZWQ6IDEuMTIsXG4gICAgICAgICAgICBhdWRpbzogMC41LFxuICAgICAgICAgICAgbW91c2VGb3JjZTogMC44OCxcbiAgICAgICAgICAgIG1vdXNlU2l6ZTogMC41LFxuICAgICAgICAgICAgbW91c2VNb2RlOiAwLFxuICAgICAgICB9KSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJHaG9zdCBtZW1vcnlcIixcbiAgICAgICAgY29kZTogXCIwNlwiLFxuICAgICAgICBwYXJhbXM6IG1ha2VQcmVzZXQoe1xuICAgICAgICAgICAgd2FycDogMC4zLFxuICAgICAgICAgICAgc3dpcmw6IDAuMTYsXG4gICAgICAgICAgICByaXBwbGU6IDAuMixcbiAgICAgICAgICAgIHpvb206IDAuMTIsXG4gICAgICAgICAgICBjaHJvbWE6IDAuMjYsXG4gICAgICAgICAgICBodWU6IDAuNTYsXG4gICAgICAgICAgICBzYXR1cmF0aW9uOiAwLjQyLFxuICAgICAgICAgICAgY29udHJhc3Q6IDAuNyxcbiAgICAgICAgICAgIHNvbGFyaXplOiAwLjEyLFxuICAgICAgICAgICAgZWRnZXM6IDAuMTgsXG4gICAgICAgICAgICBmZWVkYmFjazogMC45MyxcbiAgICAgICAgICAgIHRyYWlsczogMC45OCxcbiAgICAgICAgICAgIGdyYWluOiAwLjIyLFxuICAgICAgICAgICAgc2NhbmxpbmVzOiAwLjI4LFxuICAgICAgICAgICAgbW90aW9uOiAwLjM2LFxuICAgICAgICAgICAgc3BlZWQ6IDAuMzIsXG4gICAgICAgICAgICBtb3VzZUZvcmNlOiAwLjcsXG4gICAgICAgICAgICBtb3VzZVNpemU6IDAuNzgsXG4gICAgICAgICAgICBtb3VzZU1vZGU6IDMsXG4gICAgICAgIH0pLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIk1lcmN1cnkgaGl2ZVwiLFxuICAgICAgICBjb2RlOiBcIjA3XCIsXG4gICAgICAgIHBhcmFtczogbWFrZVByZXNldCh7IHNoYWRlck1vZGU6IDEsIHNoYWRlck1peDogMC45Niwgc2hhZGVyRGV0YWlsOiAwLjc2LCB3YXJwOiAwLjIsIGNocm9tYTogMC4zNCwgaHVlOiAwLjU4LCBzYXR1cmF0aW9uOiAwLjcyLCBjb250cmFzdDogMC43MiwgZWRnZXM6IDAuMiwgbW90aW9uOiAwLjUyLCBzcGVlZDogMC42MiwgYXVkaW86IDAuNDggfSksXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiV29ybWhvbGUgYmFwdGlzbVwiLFxuICAgICAgICBjb2RlOiBcIjA4XCIsXG4gICAgICAgIHBhcmFtczogbWFrZVByZXNldCh7IHNoYWRlck1vZGU6IDIsIHNoYWRlck1peDogMC45Miwgc2hhZGVyRGV0YWlsOiAwLjc4LCBzd2lybDogMC4zNCwgem9vbTogMC40MiwgY2hyb21hOiAwLjc2LCBodWU6IDAuNzIsIHNhdHVyYXRpb246IDEsIGNvbnRyYXN0OiAwLjY4LCBmZWVkYmFjazogMC4zOCwgdHJhaWxzOiAwLjcsIG1vdGlvbjogMC43Miwgc3BlZWQ6IDAuODQsIGF1ZGlvOiAwLjYyIH0pLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIkZhbGxpbmcgcGl4ZWxzXCIsXG4gICAgICAgIGNvZGU6IFwiMDlcIixcbiAgICAgICAgcGFyYW1zOiBtYWtlUHJlc2V0KHsgc2hhZGVyTW9kZTogMywgc2hhZGVyTWl4OiAwLjk0LCBzaGFkZXJEZXRhaWw6IDAuNjQsIGNocm9tYTogMC40MiwgaHVlOiAwLjA4LCBzYXR1cmF0aW9uOiAwLjk0LCBjb250cmFzdDogMC43MiwgZ2xpdGNoOiAwLjI2LCBmZWVkYmFjazogMC4zLCB0cmFpbHM6IDAuNjgsIG1vdGlvbjogMC44Miwgc3BlZWQ6IDEuMDQsIGF1ZGlvOiAwLjQ0IH0pLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIlByZWRhdG9yIGZldmVyXCIsXG4gICAgICAgIGNvZGU6IFwiMTBcIixcbiAgICAgICAgcGFyYW1zOiBtYWtlUHJlc2V0KHsgc2hhZGVyTW9kZTogNCwgc2hhZGVyTWl4OiAxLCBzaGFkZXJEZXRhaWw6IDAuNywgd2FycDogMC4yMiwgcmlwcGxlOiAwLjE4LCBjb250cmFzdDogMC42OCwgZWRnZXM6IDAuMzQsIGdyYWluOiAwLjEyLCBtb3Rpb246IDAuNDgsIHNwZWVkOiAwLjU2LCBhdWRpbzogMC45MiB9KSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJDb21pYyB2aW9sZW5jZVwiLFxuICAgICAgICBjb2RlOiBcIjExXCIsXG4gICAgICAgIHBhcmFtczogbWFrZVByZXNldCh7IHNoYWRlck1vZGU6IDUsIHNoYWRlck1peDogMC45OCwgc2hhZGVyRGV0YWlsOiAwLjUyLCBrYWxlaWRvOiAwLjEyLCBodWU6IDAuOSwgc2F0dXJhdGlvbjogMSwgY29udHJhc3Q6IDAuODQsIHNvbGFyaXplOiAwLjE4LCBzaGFwZXM6IDAuMjQsIG1vdGlvbjogMC40NCwgc3BlZWQ6IDAuNSwgYXVkaW86IDAuMzQgfSksXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiQ29kZWMgcG9zc2Vzc2lvblwiLFxuICAgICAgICBjb2RlOiBcIjEyXCIsXG4gICAgICAgIHBhcmFtczogbWFrZVByZXNldCh7IHNoYWRlck1vZGU6IDYsIHNoYWRlck1peDogMC45OCwgc2hhZGVyRGV0YWlsOiAwLjgyLCBjaHJvbWE6IDAuODgsIGh1ZTogMC40Niwgc2F0dXJhdGlvbjogMC45LCBjb250cmFzdDogMC44MiwgZmVlZGJhY2s6IDAuNzgsIHRyYWlsczogMC45MiwgZ2xpdGNoOiAwLjgyLCBzY2FubGluZXM6IDAuMjgsIG1vdGlvbjogMC45LCBzcGVlZDogMS40NiwgYXVkaW86IDAuNzIgfSksXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiSW5maW5pdGUgZG9sbGhvdXNlXCIsXG4gICAgICAgIGNvZGU6IFwiMTNcIixcbiAgICAgICAgcGFyYW1zOiBtYWtlUHJlc2V0KHsgc2hhZGVyTW9kZTogNywgc2hhZGVyTWl4OiAwLjkyLCBzaGFkZXJEZXRhaWw6IDAuNzQsIG1pcnJvcjogMC4yNCwgY2hyb21hOiAwLjI4LCBodWU6IDAuMiwgc2F0dXJhdGlvbjogMC44NCwgY29udHJhc3Q6IDAuNjQsIHNvbGFyaXplOiAwLjMsIGZlZWRiYWNrOiAwLjQ4LCB0cmFpbHM6IDAuOCwgbW90aW9uOiAwLjQ4LCBzcGVlZDogMC40NiB9KSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJHYXNvbGluZSBhbmdlbFwiLFxuICAgICAgICBjb2RlOiBcIjE0XCIsXG4gICAgICAgIHBhcmFtczogbWFrZVByZXNldCh7IHNoYWRlck1vZGU6IDgsIHNoYWRlck1peDogMC45OCwgc2hhZGVyRGV0YWlsOiAwLjg4LCB3YXJwOiAwLjQyLCBzd2lybDogMC4yLCBodWU6IDAuNjgsIHNhdHVyYXRpb246IDEsIGNvbnRyYXN0OiAwLjcsIHNvbGFyaXplOiAwLjIyLCBlZGdlczogMC4zOCwgbW90aW9uOiAwLjU4LCBzcGVlZDogMC41NCwgYXVkaW86IDAuNTIgfSksXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiVGltZSBzbGljZXJcIixcbiAgICAgICAgY29kZTogXCIxNVwiLFxuICAgICAgICBwYXJhbXM6IG1ha2VQcmVzZXQoeyBzaGFkZXJNb2RlOiA5LCBzaGFkZXJNaXg6IDAuOTQsIHNoYWRlckRldGFpbDogMC43LCBjaHJvbWE6IDAuNSwgaHVlOiAwLjg0LCBzYXR1cmF0aW9uOiAwLjksIGNvbnRyYXN0OiAwLjc0LCBmZWVkYmFjazogMC40NCwgdHJhaWxzOiAwLjgyLCBzY2FubGluZXM6IDAuMiwgbW90aW9uOiAwLjc2LCBzcGVlZDogMS4wOCwgYXVkaW86IDAuNDYgfSksXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiRGVhZCBzdGFyXCIsXG4gICAgICAgIGNvZGU6IFwiMTZcIixcbiAgICAgICAgcGFyYW1zOiBtYWtlUHJlc2V0KHsgc2hhZGVyTW9kZTogMTAsIHNoYWRlck1peDogMSwgc2hhZGVyRGV0YWlsOiAwLjcyLCBzd2lybDogMC41OCwgem9vbTogMC4zLCBjaHJvbWE6IDAuMzgsIGh1ZTogMC4wMywgc2F0dXJhdGlvbjogMC45MiwgY29udHJhc3Q6IDAuODIsIGZlZWRiYWNrOiAwLjQsIHRyYWlsczogMC43MiwgbW90aW9uOiAwLjY0LCBzcGVlZDogMC41OCwgYXVkaW86IDAuODIsIG1vdXNlTW9kZTogMSB9KSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJSb3NlIHdpbmRvd1wiLFxuICAgICAgICBjb2RlOiBcIjE3XCIsXG4gICAgICAgIHBhcmFtczogbWFrZVByZXNldCh7IHNoYWRlck1vZGU6IDExLCBzaGFkZXJNaXg6IDAuOTgsIHNoYWRlckRldGFpbDogMC43LCBrYWxlaWRvOiAwLjM4LCBtaXJyb3I6IDAuMTYsIGh1ZTogMC45Miwgc2F0dXJhdGlvbjogMSwgY29udHJhc3Q6IDAuNjYsIGVkZ2VzOiAwLjE4LCBzaGFwZXM6IDAuMTgsIG1vdGlvbjogMC40LCBzcGVlZDogMC4zNiwgYXVkaW86IDAuNCB9KSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJHaG9zdCBhbmF0b215XCIsXG4gICAgICAgIGNvZGU6IFwiMThcIixcbiAgICAgICAgcGFyYW1zOiBtYWtlUHJlc2V0KHsgc2hhZGVyTW9kZTogMTIsIHNoYWRlck1peDogMSwgc2hhZGVyRGV0YWlsOiAwLjYsIHdhcnA6IDAuMTQsIHJpcHBsZTogMC4xOCwgY2hyb21hOiAwLjE4LCBodWU6IDAuNTQsIHNhdHVyYXRpb246IDAuNSwgY29udHJhc3Q6IDAuODgsIGVkZ2VzOiAwLjcyLCBmZWVkYmFjazogMC4yMiwgZ3JhaW46IDAuMTgsIG1vdGlvbjogMC40Miwgc3BlZWQ6IDAuNDgsIGF1ZGlvOiAwLjUgfSksXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiQXJjYWRlIGFmdGVybGlmZVwiLFxuICAgICAgICBjb2RlOiBcIjE5XCIsXG4gICAgICAgIHBhcmFtczogbWFrZVByZXNldCh7IHNoYWRlck1vZGU6IDEzLCBzaGFkZXJNaXg6IDAuOTgsIHNoYWRlckRldGFpbDogMC43OCwgd2FycDogMC4xMiwgY2hyb21hOiAwLjUsIGh1ZTogMC4zNCwgc2F0dXJhdGlvbjogMC45LCBjb250cmFzdDogMC43OCwgZmVlZGJhY2s6IDAuMzYsIHRyYWlsczogMC43NCwgZ3JhaW46IDAuMTYsIHNjYW5saW5lczogMC43NCwgbW90aW9uOiAwLjUyLCBzcGVlZDogMC42MiB9KSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJQaWNhc3NvIHBhbmljXCIsXG4gICAgICAgIGNvZGU6IFwiMjBcIixcbiAgICAgICAgcGFyYW1zOiBtYWtlUHJlc2V0KHsgc2hhZGVyTW9kZTogMTQsIHNoYWRlck1peDogMC45Niwgc2hhZGVyRGV0YWlsOiAwLjY2LCBtaXJyb3I6IDAuMTQsIGNocm9tYTogMC4zLCBodWU6IDAuMTIsIHNhdHVyYXRpb246IDEsIGNvbnRyYXN0OiAwLjcsIGVkZ2VzOiAwLjQ2LCBzaGFwZXM6IDAuMjYsIG1vdGlvbjogMC42OCwgc3BlZWQ6IDAuNywgYXVkaW86IDAuNDIgfSksXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiQ2hlcnViIGZlZWRiYWNrXCIsXG4gICAgICAgIGNvZGU6IFwiMjFcIixcbiAgICAgICAgcGFyYW1zOiBtYWtlUHJlc2V0KHsgc2hhZGVyTW9kZTogMTUsIHNoYWRlck1peDogMC45Miwgc2hhZGVyRGV0YWlsOiAwLjcyLCByaXBwbGU6IDAuMzgsIGNocm9tYTogMC41OCwgaHVlOiAwLjg2LCBzYXR1cmF0aW9uOiAwLjk0LCBjb250cmFzdDogMC42MiwgZmVlZGJhY2s6IDAuNjQsIHRyYWlsczogMC45LCBtb3Rpb246IDAuNywgc3BlZWQ6IDAuNjgsIGF1ZGlvOiAwLjcyIH0pLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIkxhc2VyIGF1dG9wc3lcIixcbiAgICAgICAgY29kZTogXCIyMlwiLFxuICAgICAgICBwYXJhbXM6IG1ha2VQcmVzZXQoeyBzaGFkZXJNb2RlOiAxNiwgc2hhZGVyTWl4OiAxLCBzaGFkZXJEZXRhaWw6IDAuODIsIGthbGVpZG86IDAuMjgsIGNocm9tYTogMC4zNiwgaHVlOiAwLjc2LCBzYXR1cmF0aW9uOiAxLCBjb250cmFzdDogMC45LCBlZGdlczogMC44OCwgZmVlZGJhY2s6IDAuMjgsIHRyYWlsczogMC42OCwgc2hhcGVzOiAwLjMsIG1vdGlvbjogMC42Niwgc3BlZWQ6IDAuNzYsIGF1ZGlvOiAwLjY4IH0pLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIkFjaWQgY2FydG9ncmFwaHlcIixcbiAgICAgICAgY29kZTogXCIyM1wiLFxuICAgICAgICBwYXJhbXM6IG1ha2VQcmVzZXQoeyBzaGFkZXJNb2RlOiAxNywgc2hhZGVyTWl4OiAwLjk4LCBzaGFkZXJEZXRhaWw6IDAuOCwgd2FycDogMC42Niwgc3dpcmw6IDAuMTIsIHJpcHBsZTogMC4yMiwgaHVlOiAwLjQ0LCBzYXR1cmF0aW9uOiAxLCBjb250cmFzdDogMC43NCwgc29sYXJpemU6IDAuMTYsIGVkZ2VzOiAwLjIsIG1vdGlvbjogMC43Miwgc3BlZWQ6IDAuNjIsIGF1ZGlvOiAwLjY2LCBtb3VzZU1vZGU6IDMgfSksXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiUmVhY3RvciBicmVhY2hcIixcbiAgICAgICAgY29kZTogXCIyNFwiLFxuICAgICAgICBwYXJhbXM6IG1ha2VQcmVzZXQoeyBzaGFkZXJNb2RlOiAxOCwgc2hhZGVyTWl4OiAxLCBzaGFkZXJEZXRhaWw6IDAuNzIsIHdhcnA6IDAuMDgsIHN3aXJsOiAwLjEyLCByaXBwbGU6IDAuMDgsIGNocm9tYTogMC4xOCwgaHVlOiAwLjgyLCBzYXR1cmF0aW9uOiAwLjksIGNvbnRyYXN0OiAwLjY4LCBmZWVkYmFjazogMC4yMiwgdHJhaWxzOiAwLjc0LCBncmFpbjogMC4wNiwgbW90aW9uOiAwLjc4LCBzcGVlZDogMC42MiwgYXVkaW86IDAuODIsIG1vdXNlRm9yY2U6IDAuNzgsIG1vdXNlU2l6ZTogMC41NiwgbW91c2VNb2RlOiAwIH0pLFxuICAgIH0sXG5dO1xuXG5mdW5jdGlvbiBmb3JtYXRUaW1lKHNlY29uZHM6IG51bWJlcik6IHN0cmluZyB7XG4gICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUoc2Vjb25kcykpIHJldHVybiBcIjA6MDBcIjtcbiAgICByZXR1cm4gYCR7TWF0aC5mbG9vcihzZWNvbmRzIC8gNjApfToke1N0cmluZyhNYXRoLmZsb29yKHNlY29uZHMgJSA2MCkpLnBhZFN0YXJ0KDIsIFwiMFwiKX1gO1xufVxuXG5mdW5jdGlvbiBzbGlkZXJWYWx1ZSh2YWx1ZTogbnVtYmVyLCBzcGVjOiBTbGlkZXJTcGVjKTogc3RyaW5nIHtcbiAgICBpZiAoc3BlYy5tYXggPT09IDIpIHJldHVybiBgJHt2YWx1ZS50b0ZpeGVkKDIpfVx1MDBEN2A7XG4gICAgcmV0dXJuIFN0cmluZyhNYXRoLnJvdW5kKHZhbHVlICogMTAwKSkucGFkU3RhcnQoMywgXCIwXCIpO1xufVxuXG5mdW5jdGlvbiBQbGF5UGF1c2VHbHlwaCh7IHBsYXlpbmcgfTogeyBwbGF5aW5nOiBib29sZWFuIH0pIHtcbiAgICBpZiAocGxheWluZykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGgtWzExcHhdIHctWzEwcHhdIGl0ZW1zLXN0cmV0Y2gganVzdGlmeS1iZXR3ZWVuXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3LVszcHhdIGJnLWN1cnJlbnRcIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInctWzNweF0gYmctY3VycmVudFwiIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMC41IGlubGluZS1ibG9jayBoLTAgdy0wIGJvcmRlci15LVs2cHhdIGJvcmRlci1sLVsxMHB4XSBib3JkZXIteS10cmFuc3BhcmVudCBib3JkZXItbC1jdXJyZW50XCJcbiAgICAgICAgLz5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBWb2x1bWVHbHlwaCh7IHZvbHVtZSB9OiB7IHZvbHVtZTogbnVtYmVyIH0pIHtcbiAgICBpZiAodm9sdW1lIDw9IDAuMDAxKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxNFwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTRcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInNxdWFyZVwiXG4gICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTQgOXY2aDRsNSA0VjVMOCA5SDR6XCIgLz5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE2IDlsNSA1TTIxIDlsLTUgNVwiIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2Z1xuICAgICAgICAgICAgd2lkdGg9XCIxNFwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxNFwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInNxdWFyZVwiXG4gICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTQgOXY2aDRsNSA0VjVMOCA5SDR6XCIgLz5cbiAgICAgICAgICAgIHt2b2x1bWUgPiAwLjQ1ID8gKFxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTYgOC41YTUgNSAwIDAgMSAwIDdcIiAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE1LjUgMTAuNWEyLjUgMi41IDAgMCAxIDAgM1wiIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L3N2Zz5cbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQXBwKCkge1xuICAgIGNvbnN0IHZpZGVvUmVmID0gdXNlUmVmPEhUTUxWaWRlb0VsZW1lbnQ+KG51bGwpO1xuICAgIGNvbnN0IGF1ZGlvUmVmID0gdXNlUmVmPEhUTUxBdWRpb0VsZW1lbnQ+KG51bGwpO1xuICAgIGNvbnN0IGltYWdlUmVmID0gdXNlUmVmPEhUTUxJbWFnZUVsZW1lbnQ+KG51bGwpO1xuICAgIGNvbnN0IHBhaW50Q2FudmFzUmVmID0gdXNlUmVmPEhUTUxDYW52YXNFbGVtZW50PihudWxsKTtcbiAgICBjb25zdCBjYW52YXNSZWYgPSB1c2VSZWY8SFRNTENhbnZhc0VsZW1lbnQ+KG51bGwpO1xuICAgIGNvbnN0IHN0YWdlUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgICBjb25zdCBjdXJzb3JSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuICAgIGNvbnN0IGZpbGVSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG4gICAgY29uc3QgbW9ycGhlclJlZiA9IHVzZVJlZjxNb3JwaGVySGFuZGxlIHwgbnVsbD4obnVsbCk7XG4gICAgY29uc3QgcmVjb3JkZXJSZWYgPSB1c2VSZWY8TWVkaWFSZWNvcmRlciB8IG51bGw+KG51bGwpO1xuICAgIGNvbnN0IGNodW5rc1JlZiA9IHVzZVJlZjxCbG9iW10+KFtdKTtcbiAgICBjb25zdCBvYmplY3RVcmxSZWYgPSB1c2VSZWY8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gICAgY29uc3QgYXVkaW9Db250ZXh0UmVmID0gdXNlUmVmPEF1ZGlvQ29udGV4dCB8IG51bGw+KG51bGwpO1xuICAgIGNvbnN0IGFuYWx5c2VyUmVmID0gdXNlUmVmPEFuYWx5c2VyTm9kZSB8IG51bGw+KG51bGwpO1xuICAgIGNvbnN0IHZpZGVvU291cmNlUmVmID0gdXNlUmVmPE1lZGlhRWxlbWVudEF1ZGlvU291cmNlTm9kZSB8IG51bGw+KG51bGwpO1xuICAgIGNvbnN0IGF1ZGlvU291cmNlUmVmID0gdXNlUmVmPE1lZGlhRWxlbWVudEF1ZGlvU291cmNlTm9kZSB8IG51bGw+KG51bGwpO1xuICAgIGNvbnN0IHN0cmVhbVNvdXJjZVJlZiA9IHVzZVJlZjxNZWRpYVN0cmVhbUF1ZGlvU291cmNlTm9kZSB8IG51bGw+KG51bGwpO1xuICAgIGNvbnN0IG1pY1N0cmVhbVJlZiA9IHVzZVJlZjxNZWRpYVN0cmVhbSB8IG51bGw+KG51bGwpO1xuICAgIGNvbnN0IGF1ZGlvUmFmUmVmID0gdXNlUmVmKDApO1xuICAgIGNvbnN0IHNwZWN0cnVtUmVmID0gdXNlUmVmKG5ldyBVaW50OEFycmF5KDEyOCkpO1xuICAgIGNvbnN0IHNvdXJjZUtpbmRSZWYgPSB1c2VSZWY8U291cmNlS2luZCB8IG51bGw+KG51bGwpO1xuICAgIGNvbnN0IGF1ZGlvVmlzdWFsUmVmID0gdXNlUmVmPEF1ZGlvVmlzdWFsSWQ+KFwicmFkaWFsXCIpO1xuICAgIGNvbnN0IGxhc3RQb2ludGVyUmVmID0gdXNlUmVmKHsgeDogMC41LCB5OiAwLjUsIGF0OiAwIH0pO1xuICAgIGNvbnN0IGdlc3R1cmVSZWYgPSB1c2VSZWY8e1xuICAgICAgICB4OiBudW1iZXI7XG4gICAgICAgIHk6IG51bWJlcjtcbiAgICAgICAgYXQ6IG51bWJlcjtcbiAgICAgICAgbW92ZWQ6IGJvb2xlYW47XG4gICAgfSB8IG51bGw+KG51bGwpO1xuICAgIGNvbnN0IGxhc3RWb2x1bWVSZWYgPSB1c2VSZWYoMC44KTtcbiAgICBjb25zdCBwb2ludGVyUmVmID0gdXNlUmVmPFBvaW50ZXJTdGF0ZT4oe1xuICAgICAgICB4OiAwLjUsXG4gICAgICAgIHk6IDAuNSxcbiAgICAgICAgdmVsb2NpdHlYOiAwLFxuICAgICAgICB2ZWxvY2l0eVk6IDAsXG4gICAgICAgIGRvd246IGZhbHNlLFxuICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgIH0pO1xuXG4gICAgY29uc3QgW3BhcmFtcywgc2V0UGFyYW1zXSA9IHVzZVN0YXRlPFRyaXBQYXJhbXM+KGNyZWF0ZVJhbmRvbVRyaXApO1xuICAgIGNvbnN0IFthY3RpdmVHcm91cCwgc2V0QWN0aXZlR3JvdXBdID0gdXNlU3RhdGU8R3JvdXBJZD4oXCJ3b3JsZFwiKTtcbiAgICBjb25zdCBbYWN0aXZlUHJlc2V0LCBzZXRBY3RpdmVQcmVzZXRdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW3Nob3dTdHVkaW8sIHNldFNob3dTdHVkaW9dID0gdXNlU3RhdGUocmVhZFNob3dTdHVkaW8pO1xuICAgIGNvbnN0IFtzb3VyY2VLaW5kLCBzZXRTb3VyY2VLaW5kXSA9IHVzZVN0YXRlPFNvdXJjZUtpbmQgfCBudWxsPihudWxsKTtcbiAgICBjb25zdCBbYXVkaW9WaXN1YWwsIHNldEF1ZGlvVmlzdWFsXSA9IHVzZVN0YXRlPEF1ZGlvVmlzdWFsSWQ+KHJhbmRvbUF1ZGlvVmlzdWFsKTtcbiAgICBjb25zdCBbcGxheWluZywgc2V0UGxheWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3JlY29yZGluZywgc2V0UmVjb3JkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbdm9sdW1lLCBzZXRWb2x1bWVdID0gdXNlU3RhdGUoMC44KTtcbiAgICBjb25zdCBbZmlsZU5hbWUsIHNldEZpbGVOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW2R1cmF0aW9uLCBzZXREdXJhdGlvbl0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbZnVsbHNjcmVlbiwgc2V0RnVsbHNjcmVlbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW21pY0FjdGl2ZSwgc2V0TWljQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IGhhc1NvdXJjZSA9IHNvdXJjZUtpbmQgIT09IG51bGw7XG4gICAgY29uc3QgdGltZWQgPSBzb3VyY2VLaW5kID8gaXNUaW1lZFNvdXJjZShzb3VyY2VLaW5kKSA6IGZhbHNlO1xuICAgIGNvbnN0IGNhblBsYXkgPSBzb3VyY2VLaW5kID8gaGFzUGxheWJhY2tDb250cm9scyhzb3VyY2VLaW5kKSA6IGZhbHNlO1xuICAgIGNvbnN0IGlzQXVkaW9WaXN1YWwgPSBzb3VyY2VLaW5kID09PSBcImF1ZGlvXCIgfHwgc291cmNlS2luZCA9PT0gXCJsaXZlXCI7XG4gICAgc291cmNlS2luZFJlZi5jdXJyZW50ID0gc291cmNlS2luZDtcbiAgICBhdWRpb1Zpc3VhbFJlZi5jdXJyZW50ID0gYXVkaW9WaXN1YWw7XG5cbiAgICBjb25zdCBncm91cCA9IEdST1VQUy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBhY3RpdmVHcm91cCkgPz8gR1JPVVBTWzBdO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcInZhdWRpb1wiO1xuXG4gICAgICAgIGNvbnN0IGhyZWYgPSBgZGF0YTppbWFnZS9zdmcreG1sLCR7ZW5jb2RlVVJJQ29tcG9uZW50KEZBVklDT05fU1ZHKX1gO1xuICAgICAgICBjb25zdCBsaW5rczogSFRNTExpbmtFbGVtZW50W10gPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCByZWwgb2YgW1wiaWNvblwiLCBcImFwcGxlLXRvdWNoLWljb25cIl0gYXMgY29uc3QpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MTGlua0VsZW1lbnQ+KFxuICAgICAgICAgICAgICAgIGBsaW5rW3JlbD1cIiR7cmVsfVwiXWAsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgbGluayA9IGV4aXN0aW5nID8/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuICAgICAgICAgICAgbGluay5yZWwgPSByZWw7XG4gICAgICAgICAgICBsaW5rLnR5cGUgPSBcImltYWdlL3N2Zyt4bWxcIjtcbiAgICAgICAgICAgIGxpbmsuaHJlZiA9IGhyZWY7XG4gICAgICAgICAgICBpZiAoIWV4aXN0aW5nKSBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgICAgICAgbGlua3MucHVzaChsaW5rKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGxpbmsgb2YgbGlua3MpIGxpbmsucmVtb3ZlKCk7XG4gICAgICAgIH07XG4gICAgfSwgW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgICAgIHN0eWxlLnRleHRDb250ZW50ID0gYFxuICAgICAgQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURNK01vbm86d2dodEAzMDA7NDAwOzUwMCZmYW1pbHk9U3BhY2UrR3JvdGVzazp3Z2h0QDQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXBcIik7XG5cbiAgICAgIDpyb290IHtcbiAgICAgICAgLS12b2lkOiAjMDgwODBhO1xuICAgICAgICAtLXBhbmVsOiAjMTAxMDE0O1xuICAgICAgICAtLXBhbmVsLTI6ICMxNTE1MWE7XG4gICAgICAgIC0tbGluZTogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcbiAgICAgICAgLS1saW5lLWhvdDogcmdiYSgyMzIsIDIzMCwgMjI0LCAwLjM1KTtcbiAgICAgICAgLS1hY2lkOiAjZThlNmUwO1xuICAgICAgICAtLXZpb2xldDogIzhhODY5MDtcbiAgICAgICAgLS1ob3Q6ICNhODc4ODA7XG4gICAgICAgIC0tcGFwZXI6ICNlOGU2ZTA7XG4gICAgICAgIC0tbXV0ZTogIzg1ODU4ZjtcbiAgICAgICAgLS10cmFjazogIzMwMzAzODtcbiAgICAgIH1cblxuICAgICAgaHRtbCwgYm9keSwgI2FwcCB7IG1hcmdpbjogMDsgbWluLWhlaWdodDogMTAwJTsgYmFja2dyb3VuZDogdmFyKC0tdm9pZCk7IH1cbiAgICAgICogeyBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG4gICAgICBidXR0b24sIGlucHV0IHsgZm9udDogaW5oZXJpdDsgfVxuICAgICAgYnV0dG9uIHsgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDsgfVxuXG4gICAgICBAa2V5ZnJhbWVzIHNjYW4geyBmcm9tIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTsgfSB0byB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDB2aCk7IH0gfVxuICAgICAgQGtleWZyYW1lcyBibGluayB7IDAlLCA0NSUgeyBvcGFjaXR5OiAxOyB9IDUwJSwgMTAwJSB7IG9wYWNpdHk6IDAuMTg7IH0gfVxuICAgICAgQGtleWZyYW1lcyBlbnRlciB7IGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7IH0gdG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH0gfVxuXG4gICAgICAucGFnZS1lbnRlciB7IGFuaW1hdGlvbjogZW50ZXIgNjAwbXMgY3ViaWMtYmV6aWVyKC4yLC44LC4yLDEpIGJvdGg7IH1cbiAgICAgIC5saXZlLWRvdCB7IGFuaW1hdGlvbjogYmxpbmsgMS41cyBzdGVwcygyLCBlbmQpIGluZmluaXRlOyB9XG5cbiAgICAgIC5rbm9iLXJhbmdlIHtcbiAgICAgICAgLS1maWxsOiA1MCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgY3Vyc29yOiBldy1yZXNpemU7XG4gICAgICB9XG4gICAgICAua25vYi1yYW5nZTo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xuICAgICAgICBoZWlnaHQ6IDNweDtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB2YXIoLS1hY2lkKSAwIHZhcigtLWZpbGwpLCB2YXIoLS10cmFjaykgdmFyKC0tZmlsbCkgMTAwJSk7XG4gICAgICB9XG4gICAgICAua25vYi1yYW5nZTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIHdpZHRoOiA5cHg7XG4gICAgICAgIGhlaWdodDogMTdweDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTdweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYWNpZCk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXZvaWQpO1xuICAgICAgfVxuICAgICAgLmtub2ItcmFuZ2U6Oi1tb3otcmFuZ2UtdHJhY2sgeyBoZWlnaHQ6IDNweDsgYmFja2dyb3VuZDogdmFyKC0tdHJhY2spOyB9XG4gICAgICAua25vYi1yYW5nZTo6LW1vei1yYW5nZS1wcm9ncmVzcyB7IGhlaWdodDogM3B4OyBiYWNrZ3JvdW5kOiB2YXIoLS1hY2lkKTsgfVxuICAgICAgLmtub2ItcmFuZ2U6Oi1tb3otcmFuZ2UtdGh1bWIge1xuICAgICAgICB3aWR0aDogOHB4OyBoZWlnaHQ6IDE2cHg7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFjaWQpOyBib3JkZXItcmFkaXVzOiAwOyBiYWNrZ3JvdW5kOiB2YXIoLS12b2lkKTtcbiAgICAgIH1cblxuICAgICAgLnRpbWVsaW5lIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7IGhlaWdodDogMTZweDsgbWFyZ2luOiAwOyBhcHBlYXJhbmNlOiBub25lOyAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgICAudGltZWxpbmU6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHsgaGVpZ2h0OiAycHg7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjIyKTsgfVxuICAgICAgLnRpbWVsaW5lOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7IC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgd2lkdGg6IDdweDsgaGVpZ2h0OiAxMnB4OyBtYXJnaW4tdG9wOiAtNXB4O1xuICAgICAgICBib3JkZXI6IDA7IGJvcmRlci1yYWRpdXM6IDA7IGJhY2tncm91bmQ6IHZhcigtLXBhcGVyKTtcbiAgICAgIH1cblxuICAgICAgLnZvbHVtZS1mbHlvdXQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogY2FsYygxMDAlICsgMnB4KTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggOHB4IDE0cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpbmUpO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDEwLCAxMCwgMTQsIDAuOTQpO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNDBtcyBlYXNlO1xuICAgICAgICB6LWluZGV4OiAyMDtcbiAgICAgIH1cbiAgICAgIC52b2x1bWUtY29udHJvbDpob3ZlciAudm9sdW1lLWZseW91dCxcbiAgICAgIC52b2x1bWUtY29udHJvbDpmb2N1cy13aXRoaW4gLnZvbHVtZS1mbHlvdXQge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICAgIH1cbiAgICAgIC52b2wtdmVydGljYWwge1xuICAgICAgICAtLWZpbGw6IDgwJTtcbiAgICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICAgIGhlaWdodDogODhweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XG4gICAgICAgIGRpcmVjdGlvbjogcnRsO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgY3Vyc29yOiBucy1yZXNpemU7XG4gICAgICB9XG4gICAgICAudm9sLXZlcnRpY2FsOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XG4gICAgICAgIHdpZHRoOiAzcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHZhcigtLWFjaWQpIDAgdmFyKC0tZmlsbCksIHZhcigtLXRyYWNrKSB2YXIoLS1maWxsKSAxMDAlKTtcbiAgICAgIH1cbiAgICAgIC52b2wtdmVydGljYWw6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICB3aWR0aDogMTdweDtcbiAgICAgICAgaGVpZ2h0OiA5cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtN3B4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hY2lkKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tdm9pZCk7XG4gICAgICB9XG4gICAgICAudm9sLXZlcnRpY2FsOjotbW96LXJhbmdlLXRyYWNrIHsgd2lkdGg6IDNweDsgYmFja2dyb3VuZDogdmFyKC0tdHJhY2spOyB9XG4gICAgICAudm9sLXZlcnRpY2FsOjotbW96LXJhbmdlLXByb2dyZXNzIHsgd2lkdGg6IDNweDsgYmFja2dyb3VuZDogdmFyKC0tYWNpZCk7IH1cbiAgICAgIC52b2wtdmVydGljYWw6Oi1tb3otcmFuZ2UtdGh1bWIge1xuICAgICAgICB3aWR0aDogMTZweDsgaGVpZ2h0OiA4cHg7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFjaWQpOyBib3JkZXItcmFkaXVzOiAwOyBiYWNrZ3JvdW5kOiB2YXIoLS12b2lkKTtcbiAgICAgIH1cblxuICAgICAgLnN0YWdlLWdyaWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOlxuICAgICAgICAgIGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwyNTUsMjU1LC4wMzUpIDFweCwgdHJhbnNwYXJlbnQgMXB4KSxcbiAgICAgICAgICBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjU1LDI1NSwyNTUsLjAzNSkgMXB4LCB0cmFuc3BhcmVudCAxcHgpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDM4cHggMzhweDtcbiAgICAgIH1cbiAgICAgIC5zdGFnZS1ncmlkOmZ1bGxzY3JlZW4sXG4gICAgICAuc3RhZ2UtZ3JpZDotd2Via2l0LWZ1bGwtc2NyZWVuIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICAgIH1cbiAgICAgIC5zdGFnZS1jaHJvbWUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNjBtcyBlYXNlO1xuICAgICAgfVxuICAgICAgLnN0YWdlLWdyaWQ6aG92ZXIgLnN0YWdlLWNocm9tZSxcbiAgICAgIC5zdGFnZS1ncmlkOmZ1bGxzY3JlZW4gLnN0YWdlLWNocm9tZSxcbiAgICAgIC5zdGFnZS1ncmlkOi13ZWJraXQtZnVsbC1zY3JlZW4gLnN0YWdlLWNocm9tZSxcbiAgICAgIC5zdGFnZS1jaHJvbWU6Zm9jdXMtd2l0aGluIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgICB9XG4gICAgICBAbWVkaWEgKGhvdmVyOiBub25lKSB7XG4gICAgICAgIC5zdGFnZS1jaHJvbWUgeyBvcGFjaXR5OiAxOyBwb2ludGVyLWV2ZW50czogYXV0bzsgfVxuICAgICAgfVxuXG4gICAgICAvKiBLZWVwIGRlY29kZWQgZnJhbWVzIGFsaXZlIFx1MjAxNCAwXHUwMEQ3MCBtZWRpYSBjYW4gZHJvcC9ibGFuayBpbnRlcm1pdHRlbnRseS4gKi9cbiAgICAgIC5zci1tZWRpYSB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICB3aWR0aDogMnB4O1xuICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG4gICAgYDtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgICAgIHJldHVybiAoKSA9PiBzdHlsZS5yZW1vdmUoKTtcbiAgICB9LCBbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBwYWludCA9IHBhaW50Q2FudmFzUmVmLmN1cnJlbnQ7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGNhbnZhc1JlZi5jdXJyZW50O1xuICAgICAgICBjb25zdCBzdGFnZSA9IHN0YWdlUmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmICghcGFpbnQgfHwgIWNhbnZhcyB8fCAhc3RhZ2UpIHJldHVybjtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZW5zdXJlU3BlY3RydW1DYW52YXMocGFpbnQpO1xuICAgICAgICAgICAgY29uc3QgbW9ycGhlciA9IGNyZWF0ZU1vcnBoZXIoY2FudmFzLCBwYWludCwgcGFyYW1zKTtcbiAgICAgICAgICAgIG1vcnBoZXJSZWYuY3VycmVudCA9IG1vcnBoZXI7XG4gICAgICAgICAgICBsZXQgcmVzaXplUmFmID0gMDtcbiAgICAgICAgICAgIGNvbnN0IHJlc2l6ZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyZXNpemVSYWYpO1xuICAgICAgICAgICAgICAgIHJlc2l6ZVJhZiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBzdGFnZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgbW9ycGhlci5yZXNpemUocmVjdC53aWR0aCwgcmVjdC5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlc2l6ZSgpO1xuICAgICAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIocmVzaXplKTtcbiAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUoc3RhZ2UpO1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyZXNpemVSYWYpO1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICBtb3JwaGVyLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICBtb3JwaGVyUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBjYXRjaCAoY2F1c2UpIHtcbiAgICAgICAgICAgIHNldEVycm9yKFxuICAgICAgICAgICAgICAgIGNhdXNlIGluc3RhbmNlb2YgRXJyb3JcbiAgICAgICAgICAgICAgICAgICAgPyBjYXVzZS5tZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgIDogXCJXZWJHTCBmYWlsZWQgdG8gc3RhcnRcIixcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBtb3JwaGVyUmVmLmN1cnJlbnQ/LnNldFBhcmFtcyhwYXJhbXMpO1xuICAgIH0sIFtwYXJhbXNdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChoYXNTb3VyY2UpIHJldHVybjtcbiAgICAgICAgY29uc3QgcGFpbnQgPSBwYWludENhbnZhc1JlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIXBhaW50KSByZXR1cm47XG5cbiAgICAgICAgbGV0IHJhZiA9IDA7XG4gICAgICAgIGNvbnN0IHRpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsZXZlbCA9IHBhaW50SWRsZVZpc3VhbChcbiAgICAgICAgICAgICAgICBwYWludCxcbiAgICAgICAgICAgICAgICBhdWRpb1Zpc3VhbFJlZi5jdXJyZW50LFxuICAgICAgICAgICAgICAgIHBlcmZvcm1hbmNlLm5vdygpIC8gMTAwMCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtb3JwaGVyUmVmLmN1cnJlbnQ/LnNldFNvdXJjZShwYWludCk7XG4gICAgICAgICAgICBtb3JwaGVyUmVmLmN1cnJlbnQ/LnNldEF1ZGlvTGV2ZWwobGV2ZWwgKiAwLjQpO1xuICAgICAgICAgICAgcmFmID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpY2spO1xuICAgICAgICB9O1xuICAgICAgICB0aWNrKCk7XG4gICAgICAgIHJldHVybiAoKSA9PiBjYW5jZWxBbmltYXRpb25GcmFtZShyYWYpO1xuICAgIH0sIFtoYXNTb3VyY2VdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHZpZGVvID0gdmlkZW9SZWYuY3VycmVudDtcbiAgICAgICAgY29uc3QgYXVkaW8gPSBhdWRpb1JlZi5jdXJyZW50O1xuICAgICAgICBpZiAodmlkZW8pIHtcbiAgICAgICAgICAgIHZpZGVvLnZvbHVtZSA9IHZvbHVtZTtcbiAgICAgICAgICAgIHZpZGVvLm11dGVkID0gdm9sdW1lID09PSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhdWRpbykge1xuICAgICAgICAgICAgYXVkaW8udm9sdW1lID0gdm9sdW1lO1xuICAgICAgICAgICAgYXVkaW8ubXV0ZWQgPSB2b2x1bWUgPT09IDA7XG4gICAgICAgIH1cbiAgICB9LCBbdm9sdW1lXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU1RVRElPX1ZJRVdfS0VZLCBzaG93U3R1ZGlvID8gXCIxXCIgOiBcIjBcIik7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgLy8gSWdub3JlIHF1b3RhIC8gcHJpdmF0ZS1tb2RlIGZhaWx1cmVzLlxuICAgICAgICB9XG4gICAgfSwgW3Nob3dTdHVkaW9dKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN5bmNGdWxsc2NyZWVuID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RhZ2UgPSBzdGFnZVJlZi5jdXJyZW50O1xuICAgICAgICAgICAgc2V0RnVsbHNjcmVlbighIXN0YWdlICYmIGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50ID09PSBzdGFnZSk7XG4gICAgICAgIH07XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmdWxsc2NyZWVuY2hhbmdlXCIsIHN5bmNGdWxsc2NyZWVuKTtcbiAgICAgICAgcmV0dXJuICgpID0+XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZnVsbHNjcmVlbmNoYW5nZVwiLCBzeW5jRnVsbHNjcmVlbik7XG4gICAgfSwgW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgb25LZXlEb3duID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoIShldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkpKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5LnRvTG93ZXJDYXNlKCkgIT09IFwiaVwiKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YWcgPSBldmVudC50YXJnZXQudGFnTmFtZTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIHRhZyA9PT0gXCJJTlBVVFwiIHx8XG4gICAgICAgICAgICAgICAgICAgIHRhZyA9PT0gXCJURVhUQVJFQVwiIHx8XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5pc0NvbnRlbnRFZGl0YWJsZVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHNldFNob3dTdHVkaW8oKHByZXZpb3VzKSA9PiAhcHJldmlvdXMpO1xuICAgICAgICB9O1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgb25LZXlEb3duKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBvbktleURvd24pO1xuICAgIH0sIFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBpZiAob2JqZWN0VXJsUmVmLmN1cnJlbnQpIFVSTC5yZXZva2VPYmplY3RVUkwob2JqZWN0VXJsUmVmLmN1cnJlbnQpO1xuICAgICAgICAgICAgaWYgKHJlY29yZGVyUmVmLmN1cnJlbnQ/LnN0YXRlID09PSBcInJlY29yZGluZ1wiKVxuICAgICAgICAgICAgICAgIHJlY29yZGVyUmVmLmN1cnJlbnQuc3RvcCgpO1xuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYXVkaW9SYWZSZWYuY3VycmVudCk7XG4gICAgICAgICAgICByZWxlYXNlTWljVHJhY2tzKCk7XG4gICAgICAgICAgICB2b2lkIGF1ZGlvQ29udGV4dFJlZi5jdXJyZW50Py5jbG9zZSgpO1xuICAgICAgICB9O1xuICAgIH0sIFtdKTtcblxuICAgIGZ1bmN0aW9uIHNldFBhcmFtKGtleTogU2xpZGVyS2V5LCB2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHNldEFjdGl2ZVByZXNldChcIlwiKTtcbiAgICAgICAgc2V0UGFyYW1zKChwcmV2aW91cykgPT4gKHsgLi4ucHJldmlvdXMsIFtrZXldOiB2YWx1ZSB9KSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXBwbHlQcmVzZXQobmFtZTogc3RyaW5nLCBuZXh0OiBUcmlwUGFyYW1zKSB7XG4gICAgICAgIHNldFBhcmFtcyh7IC4uLm5leHQgfSk7XG4gICAgICAgIHNldEFjdGl2ZVByZXNldChuYW1lKTtcbiAgICAgICAgbW9ycGhlclJlZi5jdXJyZW50Py5jbGVhckZlZWRiYWNrKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmFuZG9taXplKCkge1xuICAgICAgICBzZXRBdWRpb1Zpc3VhbChyYW5kb21BdWRpb1Zpc3VhbChhdWRpb1Zpc3VhbFJlZi5jdXJyZW50KSk7XG4gICAgICAgIHNldFBhcmFtcyhjcmVhdGVSYW5kb21UcmlwKCkpO1xuICAgICAgICBzZXRBY3RpdmVQcmVzZXQoXCJcIik7XG4gICAgICAgIG1vcnBoZXJSZWYuY3VycmVudD8uY2xlYXJGZWVkYmFjaygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG11dGF0ZSgpIHtcbiAgICAgICAgc2V0UGFyYW1zKChwcmV2aW91cykgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV4dCA9IHsgLi4ucHJldmlvdXMgfTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKG5leHQpIGFzIChrZXlvZiBUcmlwUGFyYW1zKVtdKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gXCJtb3VzZU1vZGVcIiB8fCBrZXkgPT09IFwic2hhZGVyTW9kZVwiKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXggPSBrZXkgPT09IFwic3BlZWRcIiA/IDIgOiAxO1xuICAgICAgICAgICAgICAgIG5leHRba2V5XSA9IE1hdGgubWF4KFxuICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgICBNYXRoLm1pbihtYXgsIG5leHRba2V5XSArIChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDAuMjYpLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfSk7XG4gICAgICAgIHNldEFjdGl2ZVByZXNldChcIlwiKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWxlYXNlTWljVHJhY2tzKCkge1xuICAgICAgICBmb3IgKGNvbnN0IHRyYWNrIG9mIG1pY1N0cmVhbVJlZi5jdXJyZW50Py5nZXRUcmFja3MoKSA/PyBbXSlcbiAgICAgICAgICAgIHRyYWNrLnN0b3AoKTtcbiAgICAgICAgbWljU3RyZWFtUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0b3BNaWMoKSB7XG4gICAgICAgIHJlbGVhc2VNaWNUcmFja3MoKTtcbiAgICAgICAgc2V0TWljQWN0aXZlKGZhbHNlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdG9wQXVkaW9Mb29wKCkge1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhdWRpb1JhZlJlZi5jdXJyZW50KTtcbiAgICAgICAgYXVkaW9SYWZSZWYuY3VycmVudCA9IDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzY29ubmVjdEdyYXBoKCkge1xuICAgICAgICBzdG9wQXVkaW9Mb29wKCk7XG4gICAgICAgIHZpZGVvU291cmNlUmVmLmN1cnJlbnQ/LmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgYXVkaW9Tb3VyY2VSZWYuY3VycmVudD8uZGlzY29ubmVjdCgpO1xuICAgICAgICBzdHJlYW1Tb3VyY2VSZWYuY3VycmVudD8uZGlzY29ubmVjdCgpO1xuICAgICAgICBhbmFseXNlclJlZi5jdXJyZW50Py5kaXNjb25uZWN0KCk7XG4gICAgICAgIHN0cmVhbVNvdXJjZVJlZi5jdXJyZW50ID0gbnVsbDtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRBdWRpb0NvbnRleHQoKSB7XG4gICAgICAgIGlmICghYXVkaW9Db250ZXh0UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IEF1ZGlvQ29udGV4dENsYXNzID0gd2luZG93LkF1ZGlvQ29udGV4dDtcbiAgICAgICAgICAgIGlmICghQXVkaW9Db250ZXh0Q2xhc3MpIHJldHVybiBudWxsO1xuICAgICAgICAgICAgYXVkaW9Db250ZXh0UmVmLmN1cnJlbnQgPSBuZXcgQXVkaW9Db250ZXh0Q2xhc3MoKTtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBhdWRpb0NvbnRleHRSZWYuY3VycmVudC5yZXN1bWUoKTtcbiAgICAgICAgcmV0dXJuIGF1ZGlvQ29udGV4dFJlZi5jdXJyZW50O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFyTWVkaWFFbGVtZW50cygpIHtcbiAgICAgICAgY29uc3QgdmlkZW8gPSB2aWRlb1JlZi5jdXJyZW50O1xuICAgICAgICBjb25zdCBhdWRpbyA9IGF1ZGlvUmVmLmN1cnJlbnQ7XG4gICAgICAgIGNvbnN0IGltYWdlID0gaW1hZ2VSZWYuY3VycmVudDtcbiAgICAgICAgaWYgKHZpZGVvKSB7XG4gICAgICAgICAgICB2aWRlby5wYXVzZSgpO1xuICAgICAgICAgICAgdmlkZW8ucmVtb3ZlQXR0cmlidXRlKFwic3JjXCIpO1xuICAgICAgICAgICAgdmlkZW8ubG9hZCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhdWRpbykge1xuICAgICAgICAgICAgYXVkaW8ucGF1c2UoKTtcbiAgICAgICAgICAgIGF1ZGlvLnJlbW92ZUF0dHJpYnV0ZShcInNyY1wiKTtcbiAgICAgICAgICAgIGF1ZGlvLmxvYWQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW1hZ2UpIHtcbiAgICAgICAgICAgIGltYWdlLnJlbW92ZUF0dHJpYnV0ZShcInNyY1wiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNhbXBsZUF1ZGlvTG9vcCgpIHtcbiAgICAgICAgY29uc3QgYW5hbHlzZXIgPSBhbmFseXNlclJlZi5jdXJyZW50O1xuICAgICAgICBjb25zdCBwYWludCA9IHBhaW50Q2FudmFzUmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmICghYW5hbHlzZXIpIHJldHVybjtcbiAgICAgICAgaWYgKHNwZWN0cnVtUmVmLmN1cnJlbnQubGVuZ3RoICE9PSBhbmFseXNlci5mcmVxdWVuY3lCaW5Db3VudCkge1xuICAgICAgICAgICAgc3BlY3RydW1SZWYuY3VycmVudCA9IG5ldyBVaW50OEFycmF5KGFuYWx5c2VyLmZyZXF1ZW5jeUJpbkNvdW50KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBiaW5zID0gc3BlY3RydW1SZWYuY3VycmVudDtcbiAgICAgICAgYW5hbHlzZXIuZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEoYmlucyk7XG4gICAgICAgIGNvbnN0IGxldmVsID0gbGV2ZWxGcm9tU3BlY3RydW0oYmlucyk7XG4gICAgICAgIG1vcnBoZXJSZWYuY3VycmVudD8uc2V0QXVkaW9MZXZlbChsZXZlbCk7XG5cbiAgICAgICAgY29uc3Qga2luZCA9IHNvdXJjZUtpbmRSZWYuY3VycmVudDtcbiAgICAgICAgaWYgKChraW5kID09PSBcImF1ZGlvXCIgfHwga2luZCA9PT0gXCJsaXZlXCIpICYmIHBhaW50KSB7XG4gICAgICAgICAgICBlbnN1cmVTcGVjdHJ1bUNhbnZhcyhwYWludCk7XG4gICAgICAgICAgICBwYWludEF1ZGlvVmlzdWFsKFxuICAgICAgICAgICAgICAgIHBhaW50LFxuICAgICAgICAgICAgICAgIGJpbnMsXG4gICAgICAgICAgICAgICAgbGV2ZWwsXG4gICAgICAgICAgICAgICAgcGVyZm9ybWFuY2Uubm93KCkgLyAxMDAwLFxuICAgICAgICAgICAgICAgIGF1ZGlvVmlzdWFsUmVmLmN1cnJlbnQsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgYXVkaW9SYWZSZWYuY3VycmVudCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShzYW1wbGVBdWRpb0xvb3ApO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIHJvdXRlU291cmNlKFxuICAgICAgICBzb3VyY2U6IE1lZGlhRWxlbWVudEF1ZGlvU291cmNlTm9kZSB8IE1lZGlhU3RyZWFtQXVkaW9Tb3VyY2VOb2RlLFxuICAgICAgICBtb25pdG9yOiBib29sZWFuLFxuICAgICkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gYXdhaXQgZ2V0QXVkaW9Db250ZXh0KCk7XG4gICAgICAgIGlmICghY29udGV4dCkgcmV0dXJuO1xuICAgICAgICBkaXNjb25uZWN0R3JhcGgoKTtcblxuICAgICAgICBsZXQgYW5hbHlzZXIgPSBhbmFseXNlclJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIWFuYWx5c2VyIHx8IGFuYWx5c2VyLmNvbnRleHQgIT09IGNvbnRleHQpIHtcbiAgICAgICAgICAgIGFuYWx5c2VyID0gY29udGV4dC5jcmVhdGVBbmFseXNlcigpO1xuICAgICAgICAgICAgYW5hbHlzZXIuZmZ0U2l6ZSA9IDI1NjtcbiAgICAgICAgICAgIGFuYWx5c2VyLnNtb290aGluZ1RpbWVDb25zdGFudCA9IDAuNztcbiAgICAgICAgICAgIGFuYWx5c2VyUmVmLmN1cnJlbnQgPSBhbmFseXNlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNvdXJjZS5jb25uZWN0KGFuYWx5c2VyKTtcbiAgICAgICAgaWYgKG1vbml0b3IpIGFuYWx5c2VyLmNvbm5lY3QoY29udGV4dC5kZXN0aW5hdGlvbik7XG4gICAgICAgIHNhbXBsZUF1ZGlvTG9vcCgpO1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGVuc3VyZUVsZW1lbnRBdWRpbyhcbiAgICAgICAgZWxlbWVudDogSFRNTE1lZGlhRWxlbWVudCxcbiAgICAgICAga2luZDogXCJ2aWRlb1wiIHwgXCJhdWRpb1wiLFxuICAgICkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IGF3YWl0IGdldEF1ZGlvQ29udGV4dCgpO1xuICAgICAgICAgICAgaWYgKCFjb250ZXh0KSByZXR1cm47XG5cbiAgICAgICAgICAgIGNvbnN0IHNsb3QgPSBraW5kID09PSBcInZpZGVvXCIgPyB2aWRlb1NvdXJjZVJlZiA6IGF1ZGlvU291cmNlUmVmO1xuICAgICAgICAgICAgaWYgKCFzbG90LmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBzbG90LmN1cnJlbnQgPSBjb250ZXh0LmNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZShlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF3YWl0IHJvdXRlU291cmNlKHNsb3QuY3VycmVudCwgdHJ1ZSk7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgLy8gVmlzdWFscyBzdGlsbCB3b3JrIGlmIFdlYiBBdWRpbyBpcyBibG9ja2VkLlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gc3RhcnRMaXZlTWljKG1vZGU6IFwiYmxhbmtcIiB8IFwib3ZlcmxheVwiID0gXCJvdmVybGF5XCIpIHtcbiAgICAgICAgc2V0RXJyb3IoXCJcIik7XG4gICAgICAgIGNvbnN0IGtpbmQgPSBzb3VyY2VLaW5kUmVmLmN1cnJlbnQ7XG4gICAgICAgIGNvbnN0IGtlZXBWaXN1YWwgPVxuICAgICAgICAgICAgbW9kZSA9PT0gXCJvdmVybGF5XCIgJiYgKGtpbmQgPT09IFwiaW1hZ2VcIiB8fCBraW5kID09PSBcImRhdGFcIik7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHN0b3BNaWMoKTtcbiAgICAgICAgICAgIGRpc2Nvbm5lY3RHcmFwaCgpO1xuXG4gICAgICAgICAgICBpZiAoIWtlZXBWaXN1YWwpIHtcbiAgICAgICAgICAgICAgICBjbGVhck1lZGlhRWxlbWVudHMoKTtcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0VXJsUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChvYmplY3RVcmxSZWYuY3VycmVudCk7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdFVybFJlZi5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBwYWludCA9IHBhaW50Q2FudmFzUmVmLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgaWYgKHBhaW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGVuc3VyZVNwZWN0cnVtQ2FudmFzKHBhaW50KTtcbiAgICAgICAgICAgICAgICAgICAgbW9ycGhlclJlZi5jdXJyZW50Py5zZXRTb3VyY2UocGFpbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtb3JwaGVyUmVmLmN1cnJlbnQ/LmNsZWFyRmVlZGJhY2soKTtcblxuICAgICAgICAgICAgICAgIHNldFNvdXJjZUtpbmQoXCJsaXZlXCIpO1xuICAgICAgICAgICAgICAgIHNldEZpbGVOYW1lKFwiTWljcm9waG9uZVwiKTtcbiAgICAgICAgICAgICAgICBzZXRBdWRpb1Zpc3VhbChyYW5kb21BdWRpb1Zpc3VhbCgpKTtcbiAgICAgICAgICAgICAgICBzZXRQbGF5aW5nKHRydWUpO1xuICAgICAgICAgICAgICAgIHNldFRpbWUoMCk7XG4gICAgICAgICAgICAgICAgc2V0RHVyYXRpb24oMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHN0cmVhbSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHtcbiAgICAgICAgICAgICAgICBhdWRpbzogdHJ1ZSxcbiAgICAgICAgICAgICAgICB2aWRlbzogZmFsc2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG1pY1N0cmVhbVJlZi5jdXJyZW50ID0gc3RyZWFtO1xuICAgICAgICAgICAgc2V0TWljQWN0aXZlKHRydWUpO1xuXG4gICAgICAgICAgICBzZXRQYXJhbXMoKHByZXZpb3VzKSA9PlxuICAgICAgICAgICAgICAgIHByZXZpb3VzLmF1ZGlvIDwgMC4zNSA/IHsgLi4ucHJldmlvdXMsIGF1ZGlvOiAwLjcyIH0gOiBwcmV2aW91cyxcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSBhd2FpdCBnZXRBdWRpb0NvbnRleHQoKTtcbiAgICAgICAgICAgIGlmICghY29udGV4dCkgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3Qgc291cmNlID0gY29udGV4dC5jcmVhdGVNZWRpYVN0cmVhbVNvdXJjZShzdHJlYW0pO1xuICAgICAgICAgICAgYXdhaXQgcm91dGVTb3VyY2Uoc291cmNlLCBmYWxzZSk7XG4gICAgICAgICAgICBzdHJlYW1Tb3VyY2VSZWYuY3VycmVudCA9IHNvdXJjZTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBzZXRFcnJvcihcIk1pY3JvcGhvbmUgYWNjZXNzIHdhcyBibG9ja2VkIG9yIHVuYXZhaWxhYmxlLlwiKTtcbiAgICAgICAgICAgIHN0b3BNaWMoKTtcbiAgICAgICAgICAgIGlmICgha2VlcFZpc3VhbCkge1xuICAgICAgICAgICAgICAgIHNldFNvdXJjZUtpbmQobnVsbCk7XG4gICAgICAgICAgICAgICAgc2V0UGxheWluZyhmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdG9wTGl2ZU1pYygpIHtcbiAgICAgICAgc3RvcE1pYygpO1xuICAgICAgICBkaXNjb25uZWN0R3JhcGgoKTtcbiAgICAgICAgbW9ycGhlclJlZi5jdXJyZW50Py5zZXRBdWRpb0xldmVsKDApO1xuICAgICAgICBpZiAoc291cmNlS2luZFJlZi5jdXJyZW50ID09PSBcImxpdmVcIikge1xuICAgICAgICAgICAgY2xlYXJNZWRpYUVsZW1lbnRzKCk7XG4gICAgICAgICAgICBpZiAob2JqZWN0VXJsUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKG9iamVjdFVybFJlZi5jdXJyZW50KTtcbiAgICAgICAgICAgICAgICBvYmplY3RVcmxSZWYuY3VycmVudCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtb3JwaGVyUmVmLmN1cnJlbnQ/LmNsZWFyRmVlZGJhY2soKTtcbiAgICAgICAgICAgIHNldFNvdXJjZUtpbmQobnVsbCk7XG4gICAgICAgICAgICBzZXRGaWxlTmFtZShcIlwiKTtcbiAgICAgICAgICAgIHNldFBsYXlpbmcoZmFsc2UpO1xuICAgICAgICAgICAgc2V0VGltZSgwKTtcbiAgICAgICAgICAgIHNldER1cmF0aW9uKDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9nZ2xlTWljKCkge1xuICAgICAgICBpZiAobWljQWN0aXZlKSB7XG4gICAgICAgICAgICBzdG9wTGl2ZU1pYygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZvaWQgc3RhcnRMaXZlTWljKFwib3ZlcmxheVwiKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhclN0YWdlKCkge1xuICAgICAgICBpZiAobWljQWN0aXZlKSB7XG4gICAgICAgICAgICB2b2lkIHN0YXJ0TGl2ZU1pYyhcImJsYW5rXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHN0b3BNaWMoKTtcbiAgICAgICAgZGlzY29ubmVjdEdyYXBoKCk7XG4gICAgICAgIGNsZWFyTWVkaWFFbGVtZW50cygpO1xuICAgICAgICBpZiAob2JqZWN0VXJsUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwob2JqZWN0VXJsUmVmLmN1cnJlbnQpO1xuICAgICAgICAgICAgb2JqZWN0VXJsUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIG1vcnBoZXJSZWYuY3VycmVudD8uY2xlYXJGZWVkYmFjaygpO1xuICAgICAgICBtb3JwaGVyUmVmLmN1cnJlbnQ/LnNldEF1ZGlvTGV2ZWwoMCk7XG4gICAgICAgIHNldFNvdXJjZUtpbmQobnVsbCk7XG4gICAgICAgIHNldEZpbGVOYW1lKFwiXCIpO1xuICAgICAgICBzZXRQbGF5aW5nKGZhbHNlKTtcbiAgICAgICAgc2V0VGltZSgwKTtcbiAgICAgICAgc2V0RHVyYXRpb24oMCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gb25GaWxlKGZpbGU6IEZpbGUgfCB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKCFmaWxlKSByZXR1cm47XG5cbiAgICAgICAgY29uc3Qga2luZCA9IGNsYXNzaWZ5RmlsZShmaWxlKTtcbiAgICAgICAgY29uc3QgcmVjb3JkaW5nTm93ID0gcmVjb3JkZXJSZWYuY3VycmVudD8uc3RhdGUgPT09IFwicmVjb3JkaW5nXCI7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzS2luZCA9IHNvdXJjZUtpbmRSZWYuY3VycmVudDtcbiAgICAgICAgLy8gU3RpbGwgc291cmNlcyBtdXN0IG5vdCB0ZWFyIGRvd24gbWljIC8gQVYgY2FwdHVyZVN0cmVhbSB0cmFja3MgdGhhdFxuICAgICAgICAvLyBhcmUgZmVlZGluZyBhbiBpbi1wcm9ncmVzcyBNZWRpYVJlY29yZGVyIFx1MjAxNCBlbmRpbmcgdGhvc2UgdHJhY2tzIHN0b3BzIGl0LlxuICAgICAgICBjb25zdCBzb2Z0U3RpbGxTd2FwID1cbiAgICAgICAgICAgIHJlY29yZGluZ05vdyAmJiAoa2luZCA9PT0gXCJpbWFnZVwiIHx8IGtpbmQgPT09IFwiZGF0YVwiKTtcbiAgICAgICAgY29uc3QgcHJlc2VydmVNaWMgPSBzb2Z0U3RpbGxTd2FwICYmICEhbWljU3RyZWFtUmVmLmN1cnJlbnQ7XG4gICAgICAgIGNvbnN0IHByZXNlcnZlQXZBdWRpbyA9XG4gICAgICAgICAgICBzb2Z0U3RpbGxTd2FwICYmXG4gICAgICAgICAgICAhbWljU3RyZWFtUmVmLmN1cnJlbnQgJiZcbiAgICAgICAgICAgIChwcmV2aW91c0tpbmQgPT09IFwidmlkZW9cIiB8fCBwcmV2aW91c0tpbmQgPT09IFwiYXVkaW9cIik7XG5cbiAgICAgICAgc2V0RXJyb3IoXCJcIik7XG5cbiAgICAgICAgaWYgKCFwcmVzZXJ2ZU1pYykgc3RvcE1pYygpO1xuXG4gICAgICAgIGlmIChwcmVzZXJ2ZU1pYykge1xuICAgICAgICAgICAgc3RvcEF1ZGlvTG9vcCgpO1xuICAgICAgICAgICAgdmlkZW9Tb3VyY2VSZWYuY3VycmVudD8uZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgYXVkaW9Tb3VyY2VSZWYuY3VycmVudD8uZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgaWYgKGFuYWx5c2VyUmVmLmN1cnJlbnQpIHNhbXBsZUF1ZGlvTG9vcCgpO1xuICAgICAgICB9IGVsc2UgaWYgKCFzb2Z0U3RpbGxTd2FwKSB7XG4gICAgICAgICAgICBkaXNjb25uZWN0R3JhcGgoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcHJlc2VydmVBdkF1ZGlvKSB7XG4gICAgICAgICAgICBjbGVhck1lZGlhRWxlbWVudHMoKTtcbiAgICAgICAgICAgIGlmIChvYmplY3RVcmxSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwob2JqZWN0VXJsUmVmLmN1cnJlbnQpO1xuICAgICAgICAgICAgICAgIG9iamVjdFVybFJlZi5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XG4gICAgICAgIGlmICghcHJlc2VydmVBdkF1ZGlvKSBvYmplY3RVcmxSZWYuY3VycmVudCA9IHVybDtcbiAgICAgICAgc2V0RmlsZU5hbWUoZmlsZS5uYW1lKTtcbiAgICAgICAgc2V0U291cmNlS2luZChraW5kKTtcbiAgICAgICAgaWYgKCFwcmVzZXJ2ZUF2QXVkaW8pIHtcbiAgICAgICAgICAgIHNldFBsYXlpbmcoZmFsc2UpO1xuICAgICAgICAgICAgc2V0VGltZSgwKTtcbiAgICAgICAgICAgIHNldER1cmF0aW9uKDApO1xuICAgICAgICB9XG4gICAgICAgIG1vcnBoZXJSZWYuY3VycmVudD8uY2xlYXJGZWVkYmFjaygpO1xuXG4gICAgICAgIGlmIChraW5kID09PSBcInZpZGVvXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHZpZGVvID0gdmlkZW9SZWYuY3VycmVudDtcbiAgICAgICAgICAgIGlmICghdmlkZW8pIHJldHVybjtcbiAgICAgICAgICAgIG1vcnBoZXJSZWYuY3VycmVudD8uc2V0U291cmNlKHZpZGVvKTtcbiAgICAgICAgICAgIHZpZGVvLnNyYyA9IHVybDtcbiAgICAgICAgICAgIHZpZGVvLnZvbHVtZSA9IHZvbHVtZTtcbiAgICAgICAgICAgIHZpZGVvLm11dGVkID0gdm9sdW1lID09PSAwO1xuICAgICAgICAgICAgdmlkZW8ubG9hZCgpO1xuICAgICAgICAgICAgdm9pZCBlbnN1cmVFbGVtZW50QXVkaW8odmlkZW8sIFwidmlkZW9cIikuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdm9pZCB2aWRlb1xuICAgICAgICAgICAgICAgICAgICAucGxheSgpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHNldFBsYXlpbmcodHJ1ZSkpXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiBzZXRQbGF5aW5nKGZhbHNlKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChraW5kID09PSBcImF1ZGlvXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGF1ZGlvID0gYXVkaW9SZWYuY3VycmVudDtcbiAgICAgICAgICAgIGNvbnN0IHBhaW50ID0gcGFpbnRDYW52YXNSZWYuY3VycmVudDtcbiAgICAgICAgICAgIGlmICghYXVkaW8gfHwgIXBhaW50KSByZXR1cm47XG4gICAgICAgICAgICBlbnN1cmVTcGVjdHJ1bUNhbnZhcyhwYWludCk7XG4gICAgICAgICAgICBtb3JwaGVyUmVmLmN1cnJlbnQ/LnNldFNvdXJjZShwYWludCk7XG4gICAgICAgICAgICBhdWRpby5zcmMgPSB1cmw7XG4gICAgICAgICAgICBhdWRpby52b2x1bWUgPSB2b2x1bWU7XG4gICAgICAgICAgICBhdWRpby5tdXRlZCA9IHZvbHVtZSA9PT0gMDtcbiAgICAgICAgICAgIGF1ZGlvLmxvYWQoKTtcbiAgICAgICAgICAgIHNldEF1ZGlvVmlzdWFsKHJhbmRvbUF1ZGlvVmlzdWFsKCkpO1xuICAgICAgICAgICAgc2V0UGFyYW1zKChwcmV2aW91cykgPT5cbiAgICAgICAgICAgICAgICBwcmV2aW91cy5hdWRpbyA8IDAuMjUgPyB7IC4uLnByZXZpb3VzLCBhdWRpbzogMC42NSB9IDogcHJldmlvdXMsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdm9pZCBlbnN1cmVFbGVtZW50QXVkaW8oYXVkaW8sIFwiYXVkaW9cIikuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdm9pZCBhdWRpb1xuICAgICAgICAgICAgICAgICAgICAucGxheSgpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHNldFBsYXlpbmcodHJ1ZSkpXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiBzZXRQbGF5aW5nKGZhbHNlKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChraW5kID09PSBcImltYWdlXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gaW1hZ2VSZWYuY3VycmVudDtcbiAgICAgICAgICAgIGlmICghaW1hZ2UpIHJldHVybjtcbiAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBtb3JwaGVyUmVmLmN1cnJlbnQ/LnNldFNvdXJjZShpbWFnZSk7XG4gICAgICAgICAgICAgICAgbW9ycGhlclJlZi5jdXJyZW50Py5jbGVhckZlZWRiYWNrKCk7XG4gICAgICAgICAgICAgICAgc2V0UGxheWluZyh0cnVlKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlc2VydmVBdkF1ZGlvKSBVUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaW1hZ2Uub25lcnJvciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRFcnJvcihcIkNvdWxkIG5vdCBkZWNvZGUgdGhhdCBpbWFnZS5cIik7XG4gICAgICAgICAgICAgICAgaWYgKHByZXNlcnZlQXZBdWRpbykgVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICAgICAgICAgICAgICAgIGlmIChyZWNvcmRpbmdOb3cgJiYgcHJldmlvdXNLaW5kKSBzZXRTb3VyY2VLaW5kKHByZXZpb3VzS2luZCk7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIXJlY29yZGluZ05vdykgc2V0U291cmNlS2luZChudWxsKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpbWFnZS5zcmMgPSB1cmw7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYWludCA9IHBhaW50Q2FudmFzUmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmICghcGFpbnQpIHJldHVybjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlciA9IGF3YWl0IGZpbGUuc2xpY2UoMCwgMTAyNCAqIDEwMjQpLmFycmF5QnVmZmVyKCk7XG4gICAgICAgICAgICBwYWludERhdGFCeXRlcyhwYWludCwgbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKSk7XG4gICAgICAgICAgICBtb3JwaGVyUmVmLmN1cnJlbnQ/LnNldFNvdXJjZShwYWludCk7XG4gICAgICAgICAgICBtb3JwaGVyUmVmLmN1cnJlbnQ/LmNsZWFyRmVlZGJhY2soKTtcbiAgICAgICAgICAgIHNldFBsYXlpbmcodHJ1ZSk7XG4gICAgICAgICAgICBpZiAoIXByZXNlcnZlTWljKSBtb3JwaGVyUmVmLmN1cnJlbnQ/LnNldEF1ZGlvTGV2ZWwoMC4xNSk7XG4gICAgICAgICAgICBpZiAocHJlc2VydmVBdkF1ZGlvKSBVUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgc2V0RXJyb3IoXCJDb3VsZCBub3QgcmVhZCB0aGF0IGZpbGUuXCIpO1xuICAgICAgICAgICAgaWYgKHByZXNlcnZlQXZBdWRpbykge1xuICAgICAgICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob2JqZWN0VXJsUmVmLmN1cnJlbnQgPT09IHVybCkge1xuICAgICAgICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcbiAgICAgICAgICAgICAgICBvYmplY3RVcmxSZWYuY3VycmVudCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVjb3JkaW5nTm93ICYmIHByZXZpb3VzS2luZCkgc2V0U291cmNlS2luZChwcmV2aW91c0tpbmQpO1xuICAgICAgICAgICAgZWxzZSBzZXRTb3VyY2VLaW5kKG51bGwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9nZ2xlUGxheSgpIHtcbiAgICAgICAgaWYgKCFjYW5QbGF5KSByZXR1cm47XG4gICAgICAgIGlmIChzb3VyY2VLaW5kID09PSBcInZpZGVvXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHZpZGVvID0gdmlkZW9SZWYuY3VycmVudDtcbiAgICAgICAgICAgIGlmICghdmlkZW8pIHJldHVybjtcbiAgICAgICAgICAgIHZvaWQgZW5zdXJlRWxlbWVudEF1ZGlvKHZpZGVvLCBcInZpZGVvXCIpO1xuICAgICAgICAgICAgaWYgKHZpZGVvLnBhdXNlZCkgdm9pZCB2aWRlby5wbGF5KCk7XG4gICAgICAgICAgICBlbHNlIHZpZGVvLnBhdXNlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNvdXJjZUtpbmQgPT09IFwiYXVkaW9cIikge1xuICAgICAgICAgICAgY29uc3QgYXVkaW8gPSBhdWRpb1JlZi5jdXJyZW50O1xuICAgICAgICAgICAgaWYgKCFhdWRpbykgcmV0dXJuO1xuICAgICAgICAgICAgdm9pZCBlbnN1cmVFbGVtZW50QXVkaW8oYXVkaW8sIFwiYXVkaW9cIik7XG4gICAgICAgICAgICBpZiAoYXVkaW8ucGF1c2VkKSB2b2lkIGF1ZGlvLnBsYXkoKTtcbiAgICAgICAgICAgIGVsc2UgYXVkaW8ucGF1c2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNlZWtNZWRpYSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmIChzb3VyY2VLaW5kID09PSBcInZpZGVvXCIgJiYgdmlkZW9SZWYuY3VycmVudCkge1xuICAgICAgICAgICAgdmlkZW9SZWYuY3VycmVudC5jdXJyZW50VGltZSA9IHZhbHVlO1xuICAgICAgICB9IGVsc2UgaWYgKHNvdXJjZUtpbmQgPT09IFwiYXVkaW9cIiAmJiBhdWRpb1JlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICBhdWRpb1JlZi5jdXJyZW50LmN1cnJlbnRUaW1lID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRNZWRpYVZvbHVtZShuZXh0OiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgY2xhbXBlZCA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIG5leHQpKTtcbiAgICAgICAgaWYgKGNsYW1wZWQgPiAwLjAwMSkgbGFzdFZvbHVtZVJlZi5jdXJyZW50ID0gY2xhbXBlZDtcbiAgICAgICAgc2V0Vm9sdW1lKGNsYW1wZWQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZU11dGUoKSB7XG4gICAgICAgIGlmICh2b2x1bWUgPiAwLjAwMSkge1xuICAgICAgICAgICAgbGFzdFZvbHVtZVJlZi5jdXJyZW50ID0gdm9sdW1lO1xuICAgICAgICAgICAgc2V0Vm9sdW1lKDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNldFZvbHVtZShsYXN0Vm9sdW1lUmVmLmN1cnJlbnQgPiAwLjAwMSA/IGxhc3RWb2x1bWVSZWYuY3VycmVudCA6IDAuOCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXRWaXN1YWxpemVyKCkge1xuICAgICAgICBhcHBseVByZXNldChcIlB1cmUgc2lnbmFsXCIsIENMRUFOKTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiB0b2dnbGVGdWxsc2NyZWVuKCkge1xuICAgICAgICBjb25zdCBzdGFnZSA9IHN0YWdlUmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmICghc3RhZ2UpIHJldHVybjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCA9PT0gc3RhZ2UpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBkb2N1bWVudC5leGl0RnVsbHNjcmVlbigpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKCk7XG4gICAgICAgICAgICAgICAgYXdhaXQgc3RhZ2UucmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgc3RhZ2UucmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBzZXRFcnJvcihcIkZ1bGxzY3JlZW4gaXMgbm90IGF2YWlsYWJsZSBoZXJlLlwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVBvaW50ZXIoXG4gICAgICAgIGV2ZW50OiBQb2ludGVyRXZlbnQsXG4gICAgICAgIGRvd24gPSBwb2ludGVyUmVmLmN1cnJlbnQuZG93bixcbiAgICApIHtcbiAgICAgICAgY29uc3Qgc3RhZ2UgPSBzdGFnZVJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIXN0YWdlKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHJlY3QgPSBzdGFnZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgeCA9IE1hdGgubWF4KFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIE1hdGgubWluKDEsIChldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0KSAvIHJlY3Qud2lkdGgpLFxuICAgICAgICApO1xuICAgICAgICBjb25zdCB0b3BZID0gTWF0aC5tYXgoXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgTWF0aC5taW4oMSwgKGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcCkgLyByZWN0LmhlaWdodCksXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHkgPSAxIC0gdG9wWTtcbiAgICAgICAgY29uc3Qgbm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIGNvbnN0IGVsYXBzZWQgPSBNYXRoLm1heCg4LCBub3cgLSBsYXN0UG9pbnRlclJlZi5jdXJyZW50LmF0KTtcbiAgICAgICAgY29uc3QgdmVsb2NpdHlYID0gKHggLSBsYXN0UG9pbnRlclJlZi5jdXJyZW50LngpICogKDE2IC8gZWxhcHNlZCk7XG4gICAgICAgIGNvbnN0IHZlbG9jaXR5WSA9ICh5IC0gbGFzdFBvaW50ZXJSZWYuY3VycmVudC55KSAqICgxNiAvIGVsYXBzZWQpO1xuICAgICAgICBsYXN0UG9pbnRlclJlZi5jdXJyZW50ID0geyB4LCB5LCBhdDogbm93IH07XG5cbiAgICAgICAgaWYgKGdlc3R1cmVSZWYuY3VycmVudCAmJiBkb3duKSB7XG4gICAgICAgICAgICBjb25zdCBkeCA9IGV2ZW50LmNsaWVudFggLSBnZXN0dXJlUmVmLmN1cnJlbnQueDtcbiAgICAgICAgICAgIGNvbnN0IGR5ID0gZXZlbnQuY2xpZW50WSAtIGdlc3R1cmVSZWYuY3VycmVudC55O1xuICAgICAgICAgICAgaWYgKGR4ICogZHggKyBkeSAqIGR5ID4gNjQpIGdlc3R1cmVSZWYuY3VycmVudC5tb3ZlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBwb2ludGVyUmVmLmN1cnJlbnQgPSB7IHgsIHksIHZlbG9jaXR5WCwgdmVsb2NpdHlZLCBkb3duLCBhY3RpdmU6IHRydWUgfTtcbiAgICAgICAgbW9ycGhlclJlZi5jdXJyZW50Py5zZXRQb2ludGVyKHBvaW50ZXJSZWYuY3VycmVudCk7XG4gICAgICAgIGlmIChjdXJzb3JSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgY3Vyc29yUmVmLmN1cnJlbnQuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICAgICAgICAgICAgY3Vyc29yUmVmLmN1cnJlbnQuc3R5bGUubGVmdCA9IGAke2V2ZW50LmNsaWVudFggLSByZWN0LmxlZnR9cHhgO1xuICAgICAgICAgICAgY3Vyc29yUmVmLmN1cnJlbnQuc3R5bGUudG9wID0gYCR7ZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wfXB4YDtcbiAgICAgICAgICAgIGNvbnN0IHNpemUgPSA3MCArIHBhcmFtcy5tb3VzZVNpemUgKiAyNTA7XG4gICAgICAgICAgICBjdXJzb3JSZWYuY3VycmVudC5zdHlsZS53aWR0aCA9IGAke3NpemV9cHhgO1xuICAgICAgICAgICAgY3Vyc29yUmVmLmN1cnJlbnQuc3R5bGUuaGVpZ2h0ID0gYCR7c2l6ZX1weGA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbmRQb2ludGVyR2VzdHVyZShldmVudDogUG9pbnRlckV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGdlc3R1cmUgPSBnZXN0dXJlUmVmLmN1cnJlbnQ7XG4gICAgICAgIGdlc3R1cmVSZWYuY3VycmVudCA9IG51bGw7XG4gICAgICAgIHVwZGF0ZVBvaW50ZXIoZXZlbnQsIGZhbHNlKTtcbiAgICAgICAgaWYgKCFnZXN0dXJlIHx8IGdlc3R1cmUubW92ZWQpIHJldHVybjtcbiAgICAgICAgaWYgKHBlcmZvcm1hbmNlLm5vdygpIC0gZ2VzdHVyZS5hdCA+IDQ1MCkgcmV0dXJuO1xuICAgICAgICBpZiAoIWNhblBsYXkpIHJldHVybjtcbiAgICAgICAgdG9nZ2xlUGxheSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlYWN0aXZhdGVQb2ludGVyKCkge1xuICAgICAgICBwb2ludGVyUmVmLmN1cnJlbnQgPSB7XG4gICAgICAgICAgICAuLi5wb2ludGVyUmVmLmN1cnJlbnQsXG4gICAgICAgICAgICBkb3duOiBmYWxzZSxcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgIH07XG4gICAgICAgIG1vcnBoZXJSZWYuY3VycmVudD8uc2V0UG9pbnRlcihwb2ludGVyUmVmLmN1cnJlbnQpO1xuICAgICAgICBpZiAoY3Vyc29yUmVmLmN1cnJlbnQpIGN1cnNvclJlZi5jdXJyZW50LnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwaWNrUmVjb3JkaW5nRm9ybWF0KGhhc0F1ZGlvOiBib29sZWFuKToge1xuICAgICAgICBtaW1lVHlwZTogc3RyaW5nO1xuICAgICAgICBleHRlbnNpb246IFwibXA0XCIgfCBcIndlYm1cIjtcbiAgICB9IHtcbiAgICAgICAgLy8gUHJlZmVyIFZQOS9oaWdoLWJpdHJhdGUgV2ViTSBcdTIwMTQgYnJvd3NlciBILjI2NCBjYXB0dXJlcyBhcmUgb2Z0ZW4gYmFzZWxpbmUgYW5kIHNvZnQuXG4gICAgICAgIGNvbnN0IHdpdGhBdWRpbyA9IGhhc0F1ZGlvXG4gICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgIFwidmlkZW8vd2VibTtjb2RlY3M9dnA5LG9wdXNcIixcbiAgICAgICAgICAgICAgICAgIFwidmlkZW8vd2VibTtjb2RlY3M9dnA5XCIsXG4gICAgICAgICAgICAgICAgICBcInZpZGVvL3dlYm07Y29kZWNzPXZwOCxvcHVzXCIsXG4gICAgICAgICAgICAgICAgICBcInZpZGVvL21wNDtjb2RlY3M9YXZjMS42NDAwMjgsbXA0YS40MC4yXCIsXG4gICAgICAgICAgICAgICAgICBcInZpZGVvL21wNDtjb2RlY3M9YXZjMS40RDQwMjgsbXA0YS40MC4yXCIsXG4gICAgICAgICAgICAgICAgICBcInZpZGVvL21wNDtjb2RlY3M9YXZjMS40RDAwMkEsbXA0YS40MC4yXCIsXG4gICAgICAgICAgICAgICAgICBcInZpZGVvL21wNDtjb2RlY3M9aDI2NCxhYWNcIixcbiAgICAgICAgICAgICAgICAgIFwidmlkZW8vbXA0XCIsXG4gICAgICAgICAgICAgICAgICBcInZpZGVvL3dlYm1cIixcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgOiBbXG4gICAgICAgICAgICAgICAgICBcInZpZGVvL3dlYm07Y29kZWNzPXZwOVwiLFxuICAgICAgICAgICAgICAgICAgXCJ2aWRlby93ZWJtO2NvZGVjcz12cDhcIixcbiAgICAgICAgICAgICAgICAgIFwidmlkZW8vbXA0O2NvZGVjcz1hdmMxLjY0MDAyOFwiLFxuICAgICAgICAgICAgICAgICAgXCJ2aWRlby9tcDQ7Y29kZWNzPWF2YzEuNEQ0MDI4XCIsXG4gICAgICAgICAgICAgICAgICBcInZpZGVvL21wNDtjb2RlY3M9YXZjMS40RDAwMkFcIixcbiAgICAgICAgICAgICAgICAgIFwidmlkZW8vbXA0O2NvZGVjcz1oMjY0XCIsXG4gICAgICAgICAgICAgICAgICBcInZpZGVvL21wNFwiLFxuICAgICAgICAgICAgICAgICAgXCJ2aWRlby93ZWJtXCIsXG4gICAgICAgICAgICAgIF07XG4gICAgICAgIGZvciAoY29uc3QgbWltZVR5cGUgb2Ygd2l0aEF1ZGlvKSB7XG4gICAgICAgICAgICBpZiAoTWVkaWFSZWNvcmRlci5pc1R5cGVTdXBwb3J0ZWQobWltZVR5cGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbWltZVR5cGUsXG4gICAgICAgICAgICAgICAgICAgIGV4dGVuc2lvbjogbWltZVR5cGUuc3RhcnRzV2l0aChcInZpZGVvL21wNFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcIm1wNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwid2VibVwiLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgbWltZVR5cGU6IFwiXCIsIGV4dGVuc2lvbjogXCJ3ZWJtXCIgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb2xsZWN0QXVkaW9UcmFja3MoKTogTWVkaWFTdHJlYW1UcmFja1tdIHtcbiAgICAgICAgaWYgKG1pY1N0cmVhbVJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gbWljU3RyZWFtUmVmLmN1cnJlbnQuZ2V0QXVkaW9UcmFja3MoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc291cmNlS2luZCA9PT0gXCJ2aWRlb1wiKSB7XG4gICAgICAgICAgICBjb25zdCB2aWRlbyA9IHZpZGVvUmVmLmN1cnJlbnQgYXNcbiAgICAgICAgICAgICAgICB8IChIVE1MVmlkZW9FbGVtZW50ICYgeyBjYXB0dXJlU3RyZWFtPzogKCkgPT4gTWVkaWFTdHJlYW0gfSlcbiAgICAgICAgICAgICAgICB8IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gdmlkZW8/LmNhcHR1cmVTdHJlYW0/LigpLmdldEF1ZGlvVHJhY2tzKCkgPz8gW107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNvdXJjZUtpbmQgPT09IFwiYXVkaW9cIikge1xuICAgICAgICAgICAgY29uc3QgYXVkaW8gPSBhdWRpb1JlZi5jdXJyZW50IGFzXG4gICAgICAgICAgICAgICAgfCAoSFRNTEF1ZGlvRWxlbWVudCAmIHsgY2FwdHVyZVN0cmVhbT86ICgpID0+IE1lZGlhU3RyZWFtIH0pXG4gICAgICAgICAgICAgICAgfCBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIGF1ZGlvPy5jYXB0dXJlU3RyZWFtPy4oKS5nZXRBdWRpb1RyYWNrcygpID8/IFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBib29zdFJlY29yZGluZ1Jlc29sdXRpb24oYWN0aXZlOiBib29sZWFuKSB7XG4gICAgICAgIGNvbnN0IG1vcnBoZXIgPSBtb3JwaGVyUmVmLmN1cnJlbnQ7XG4gICAgICAgIGNvbnN0IHN0YWdlID0gc3RhZ2VSZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCFtb3JwaGVyIHx8ICFzdGFnZSkgcmV0dXJuO1xuICAgICAgICBtb3JwaGVyLnNldFBpeGVsUmF0aW9DYXAoYWN0aXZlID8gMi43NSA6IDEuNzUpO1xuICAgICAgICBjb25zdCByZWN0ID0gc3RhZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIG1vcnBoZXIucmVzaXplKHJlY3Qud2lkdGgsIHJlY3QuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdGFydFJlY29yZGluZygpIHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gY2FudmFzUmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmICghY2FudmFzIHx8ICFoYXNTb3VyY2UgfHwgcmVjb3JkaW5nKSByZXR1cm47XG5cbiAgICAgICAgYm9vc3RSZWNvcmRpbmdSZXNvbHV0aW9uKHRydWUpO1xuXG4gICAgICAgIGNvbnN0IHN0cmVhbSA9IGNhbnZhcy5jYXB0dXJlU3RyZWFtKDYwKTtcbiAgICAgICAgZm9yIChjb25zdCB0cmFjayBvZiBjb2xsZWN0QXVkaW9UcmFja3MoKSkgc3RyZWFtLmFkZFRyYWNrKHRyYWNrKTtcblxuICAgICAgICBjb25zdCBmb3JtYXQgPSBwaWNrUmVjb3JkaW5nRm9ybWF0KHN0cmVhbS5nZXRBdWRpb1RyYWNrcygpLmxlbmd0aCA+IDApO1xuICAgICAgICBjb25zdCBoYXNBdWRpbyA9IHN0cmVhbS5nZXRBdWRpb1RyYWNrcygpLmxlbmd0aCA+IDA7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zOiBNZWRpYVJlY29yZGVyT3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICB2aWRlb0JpdHNQZXJTZWNvbmQ6IDIwXzAwMF8wMDAsXG4gICAgICAgICAgICAgICAgYXVkaW9CaXRzUGVyU2Vjb25kOiBoYXNBdWRpbyA/IDI1Nl8wMDAgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGZvcm1hdC5taW1lVHlwZSkgb3B0aW9ucy5taW1lVHlwZSA9IGZvcm1hdC5taW1lVHlwZTtcblxuICAgICAgICAgICAgY29uc3QgcmVjb3JkZXIgPSBmb3JtYXQubWltZVR5cGVcbiAgICAgICAgICAgICAgICA/IG5ldyBNZWRpYVJlY29yZGVyKHN0cmVhbSwgb3B0aW9ucylcbiAgICAgICAgICAgICAgICA6IG5ldyBNZWRpYVJlY29yZGVyKHN0cmVhbSwge1xuICAgICAgICAgICAgICAgICAgICAgIHZpZGVvQml0c1BlclNlY29uZDogMjBfMDAwXzAwMCxcbiAgICAgICAgICAgICAgICAgICAgICBhdWRpb0JpdHNQZXJTZWNvbmQ6IGhhc0F1ZGlvID8gMjU2XzAwMCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gKHJlY29yZGVyLm1pbWVUeXBlIHx8IGZvcm1hdC5taW1lVHlwZSkuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgXCJtcDRcIixcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA/IFwibXA0XCJcbiAgICAgICAgICAgICAgICA6IGZvcm1hdC5leHRlbnNpb247XG4gICAgICAgICAgICBjaHVua3NSZWYuY3VycmVudCA9IFtdO1xuICAgICAgICAgICAgcmVjb3JkZXIub25kYXRhYXZhaWxhYmxlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEuc2l6ZSA+IDApIGNodW5rc1JlZi5jdXJyZW50LnB1c2goZXZlbnQuZGF0YSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVjb3JkZXIub25zdG9wID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihjaHVua3NSZWYuY3VycmVudCwge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjb3JkZXIubWltZVR5cGUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIChleHRlbnNpb24gPT09IFwibXA0XCIgPyBcInZpZGVvL21wNFwiIDogXCJ2aWRlby93ZWJtXCIpLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICAgICAgICAgICAgY29uc3QgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgICAgICAgICAgYW5jaG9yLmhyZWYgPSB1cmw7XG4gICAgICAgICAgICAgICAgYW5jaG9yLmRvd25sb2FkID0gYCR7ZmlsZU5hbWUucmVwbGFjZSgvXFwuW14uXSskLywgXCJcIikgfHwgXCJtb3JwaFwifS1saXZlLW1peC4ke2V4dGVuc2lvbn1gO1xuICAgICAgICAgICAgICAgIGFuY2hvci5jbGljaygpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpLCAxMDAwKTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHRyYWNrIG9mIHN0cmVhbS5nZXRUcmFja3MoKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHJhY2sua2luZCA9PT0gXCJ2aWRlb1wiKSB0cmFjay5zdG9wKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJvb3N0UmVjb3JkaW5nUmVzb2x1dGlvbihmYWxzZSk7XG4gICAgICAgICAgICAgICAgc2V0UmVjb3JkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZWNvcmRlclJlZi5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZWNvcmRlci5zdGFydCgxMDAwKTtcbiAgICAgICAgICAgIHJlY29yZGVyUmVmLmN1cnJlbnQgPSByZWNvcmRlcjtcbiAgICAgICAgICAgIHNldFJlY29yZGluZyh0cnVlKTtcbiAgICAgICAgICAgIGlmIChzb3VyY2VLaW5kID09PSBcInZpZGVvXCIgJiYgdmlkZW9SZWYuY3VycmVudD8ucGF1c2VkKVxuICAgICAgICAgICAgICAgIHZvaWQgdmlkZW9SZWYuY3VycmVudC5wbGF5KCk7XG4gICAgICAgICAgICBpZiAoc291cmNlS2luZCA9PT0gXCJhdWRpb1wiICYmIGF1ZGlvUmVmLmN1cnJlbnQ/LnBhdXNlZClcbiAgICAgICAgICAgICAgICB2b2lkIGF1ZGlvUmVmLmN1cnJlbnQucGxheSgpO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIGJvb3N0UmVjb3JkaW5nUmVzb2x1dGlvbihmYWxzZSk7XG4gICAgICAgICAgICBzZXRFcnJvcihcIlRoaXMgYnJvd3NlciBjYW5ub3QgcmVjb3JkIHRoZSBsaXZlIGNhbnZhcy5cIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8bWFpblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGJnLVt2YXIoLS12b2lkKV0gdGV4dC1bdmFyKC0tcGFwZXIpXVwiXG4gICAgICAgICAgICBzdHlsZT17eyBmb250RmFtaWx5OiAnXCJETSBNb25vXCIsIHVpLW1vbm9zcGFjZSwgbW9ub3NwYWNlJyB9fVxuICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSBmaXhlZCBpbnNldC0wIG9wYWNpdHktNDBcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBcInJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMTQlIC0xMCUsIHJnYmEoMjMyLDIzMCwyMjQsLjA4KSwgdHJhbnNwYXJlbnQgMzIlKSwgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA5MiUgMjAlLCByZ2JhKDE2OCwxMjAsMTI4LC4wNiksIHRyYW5zcGFyZW50IDI4JSlcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgcmVmPXtmaWxlUmVmfVxuICAgICAgICAgICAgICAgIGFjY2VwdD1cIiovKlwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cbiAgICAgICAgICAgICAgICAgICAgdm9pZCBvbkZpbGUoZXZlbnQuY3VycmVudFRhcmdldC5maWxlcz8uWzBdID8/IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8YXVkaW9cbiAgICAgICAgICAgICAgICByZWY9e2F1ZGlvUmVmfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNyLW1lZGlhXCJcbiAgICAgICAgICAgICAgICBsb29wXG4gICAgICAgICAgICAgICAgb25UaW1lVXBkYXRlPXsoZXZlbnQpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWUoZXZlbnQuY3VycmVudFRhcmdldC5jdXJyZW50VGltZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb25Mb2FkZWRNZXRhZGF0YT17KGV2ZW50KSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXREdXJhdGlvbihldmVudC5jdXJyZW50VGFyZ2V0LmR1cmF0aW9uKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvblBsYXk9eygpID0+IHNldFBsYXlpbmcodHJ1ZSl9XG4gICAgICAgICAgICAgICAgb25QYXVzZT17KCkgPT4gc2V0UGxheWluZyhmYWxzZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGltZyByZWY9e2ltYWdlUmVmfSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJzci1tZWRpYVwiIC8+XG4gICAgICAgICAgICA8Y2FudmFzIHJlZj17cGFpbnRDYW52YXNSZWZ9IGNsYXNzTmFtZT1cInNyLW1lZGlhXCIgLz5cblxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHBhZ2UtZW50ZXIgcmVsYXRpdmUgbXgtYXV0byBweC0zIHB5LTMgbWQ6cHgtNiBtZDpweS01ICR7c2hvd1N0dWRpbyA/IFwibWF4LXctWzE1NDBweF1cIiA6IFwibWF4LXctWzEyMDBweF1cIn1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtzaG93U3R1ZGlvID8gKFxuICAgICAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIm1iLTQgZmxleCBpdGVtcy1lbmQganVzdGlmeS1iZXR3ZWVuIGJvcmRlci1iIGJvcmRlci1bdmFyKC0tbGluZSldIHBiLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1lbmQgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibS0wIHRleHQtWzIuNHJlbV0gZm9udC1ib2xkIGxlYWRpbmctWy43OF0gdHJhY2tpbmctWy0uMDllbV0gdGV4dC1bdmFyKC0tYWNpZCldIG1kOnRleHQtWzQuMXJlbV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ1wiU3BhY2UgR3JvdGVza1wiLCBzYW5zLXNlcmlmJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhdWRpb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgdGV4dC1bOXB4XSB1cHBlcmNhc2UgdHJhY2tpbmctWy4yZW1dIHRleHQtW3ZhcigtLW11dGUpXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGgtMS41IHctMS41IHJvdW5kZWQtZnVsbCAke3JlY29yZGluZyA/IFwibGl2ZS1kb3QgYmctWyNjNDViNmFdXCIgOiBcImJnLVt2YXIoLS1hY2lkKV1cIn1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1wcmVzc2VkPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiSGlkZSBzdHVkaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkhpZGUgc3R1ZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMSB0ZXh0LVt2YXIoLS1wYXBlcildLzcwIHRyYW5zaXRpb24gaG92ZXI6dGV4dC1bdmFyKC0tYWNpZCldXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd1N0dWRpbyhmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHVkaW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIm1iLTMgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtLTAgdGV4dC1bMS42cmVtXSBmb250LWJvbGQgbGVhZGluZy1ub25lIHRyYWNraW5nLVstLjA4ZW1dIHRleHQtW3ZhcigtLWFjaWQpXSBtZDp0ZXh0LVsycmVtXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ1wiU3BhY2UgR3JvdGVza1wiLCBzYW5zLXNlcmlmJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhdWRpb1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLXByZXNzZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJPcGVuIHN0dWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJPcGVuIHN0dWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1bOXB4XSB1cHBlcmNhc2UgdHJhY2tpbmctWy4yZW1dIHRleHQtW3ZhcigtLW11dGUpXSB0cmFuc2l0aW9uIGhvdmVyOnRleHQtW3ZhcigtLXBhcGVyKV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dTdHVkaW8odHJ1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaC0xLjUgdy0xLjUgcm91bmRlZC1mdWxsICR7cmVjb3JkaW5nID8gXCJsaXZlLWRvdCBiZy1bI2M0NWI2YV1cIiA6IFwiYmctW3ZhcigtLWFjaWQpXVwifWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHVkaW9cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgPHNlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZ3JpZCAke3Nob3dTdHVkaW8gPyBcImJnLVt2YXIoLS1wYW5lbCldIGxnOmdyaWQtY29scy1bbWlubWF4KDAsMWZyKV8yNDBweF1cIiA6IFwiYmctdHJhbnNwYXJlbnRcIn1gfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtzdGFnZVJlZn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHN0YWdlLWdyaWQgcmVsYXRpdmUgdG91Y2gtbm9uZSBjdXJzb3ItY3Jvc3NoYWlyIG92ZXJmbG93LWhpZGRlbiBiZy1ibGFjayAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dTdHVkaW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIm1pbi1oLVs0OHZoXSBtZDptaW4taC1bNjB2aF1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibWluLWgtWzYydmhdIG1kOm1pbi1oLVs3NHZoXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJhZ092ZXI9eyhldmVudCkgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJvcD17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2lkIG9uRmlsZShldmVudC5kYXRhVHJhbnNmZXI/LmZpbGVzPy5bMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUG9pbnRlck1vdmU9eyhldmVudCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVQb2ludGVyKGV2ZW50IGFzIHVua25vd24gYXMgUG9pbnRlckV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Qb2ludGVyRG93bj17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5zZXRQb2ludGVyQ2FwdHVyZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucG9pbnRlcklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VzdHVyZVJlZi5jdXJyZW50ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBldmVudC5jbGllbnRYLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBldmVudC5jbGllbnRZLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdDogcGVyZm9ybWFuY2Uubm93KCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVBvaW50ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50IGFzIHVua25vd24gYXMgUG9pbnRlckV2ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Qb2ludGVyVXA9eyhldmVudCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRQb2ludGVyR2VzdHVyZShldmVudCBhcyB1bmtub3duIGFzIFBvaW50ZXJFdmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUG9pbnRlckNhbmNlbD17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlc3R1cmVSZWYuY3VycmVudCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVhY3RpdmF0ZVBvaW50ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBvblBvaW50ZXJMZWF2ZT17ZGVhY3RpdmF0ZVBvaW50ZXJ9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx2aWRlb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17dmlkZW9SZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ItbWVkaWFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvb3BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5c0lubGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVGltZVVwZGF0ZT17KGV2ZW50KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lKGV2ZW50LmN1cnJlbnRUYXJnZXQuY3VycmVudFRpbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTG9hZGVkTWV0YWRhdGE9eyhldmVudCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RHVyYXRpb24oZXZlbnQuY3VycmVudFRhcmdldC5kdXJhdGlvbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25QbGF5PXsoKSA9PiBzZXRQbGF5aW5nKHRydWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUGF1c2U9eygpID0+IHNldFBsYXlpbmcoZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxjYW52YXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e2NhbnZhc1JlZn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGgtZnVsbCB3LWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17Y3Vyc29yUmVmfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvaW50ZXItZXZlbnRzLW5vbmUgYWJzb2x1dGUgbGVmdC0wIHRvcC0wIHotMjAgLXRyYW5zbGF0ZS14LTEvMiAtdHJhbnNsYXRlLXktMS8yIHJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLXdoaXRlLzUwIG9wYWNpdHktMCB0cmFuc2l0aW9uLVtvcGFjaXR5LHdpZHRoLGhlaWdodF0gZHVyYXRpb24tMTUwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImluc2V0IDAgMCAyNHB4IHJnYmEoMjU1LDI1NSwyNTUsLjA4KSwgMCAwIDEycHggcmdiYSgwLDAsMCwuMjUpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTEvMiB0b3AtMS8yIGgtMS41IHctMS41IC10cmFuc2xhdGUteC0xLzIgLXRyYW5zbGF0ZS15LTEvMiBiZy13aGl0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgeyFoYXNTb3VyY2UgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIHotMTAgZmxleCBjdXJzb3ItcG9pbnRlciBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctW3JnYmEoOCw4LDEwLC40OCldIHRleHQtY2VudGVyIHRleHQtW3ZhcigtLXBhcGVyKV0gdHJhbnNpdGlvbiBob3ZlcjpiZy1bcmdiYSg4LDgsMTAsLjU4KV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGZpbGVSZWYuY3VycmVudD8uY2xpY2soKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5rZXkgPT09IFwiRW50ZXJcIiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LmtleSA9PT0gXCIgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZVJlZi5jdXJyZW50Py5jbGljaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblBvaW50ZXJEb3duPXsoZXZlbnQpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUG9pbnRlclVwPXsoZXZlbnQpID0+IGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWItNSBncmlkIGgtMTYgdy0xNiBwbGFjZS1pdGVtcy1jZW50ZXIgcm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItW3ZhcigtLWFjaWQpXS81MCB0ZXh0LTJ4bCB0ZXh0LVt2YXIoLS1hY2lkKV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx1RkYwQlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIHRyYWNraW5nLVstLjA0ZW1dIG1kOnRleHQtNHhsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1wiU3BhY2UgR3JvdGVza1wiLCBzYW5zLXNlcmlmJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEltcG9ydCBhbnl0aGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm10LTIgdGV4dC1bMTBweF0gdXBwZXJjYXNlIHRyYWNraW5nLVsuMmVtXSB0ZXh0LVt2YXIoLS1tdXRlKV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpZGVvIFx1MDBCNyBtdXNpYyBcdTAwQjcgaW1hZ2UgXHUwMEI3IGFueSBmaWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2hvd1N0dWRpbyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHBvaW50ZXItZXZlbnRzLW5vbmUgYWJzb2x1dGUgbGVmdC0zIGZsZXggZ2FwLTIgdGV4dC1bOHB4XSB1cHBlcmNhc2UgdHJhY2tpbmctWy4xOGVtXSAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzU291cmNlID8gXCJ0b3AtMTRcIiA6IFwidG9wLTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItd2hpdGUvMjAgYmctYmxhY2svNTAgcHgtMiBweS0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA2MCBmcHMgY2FudmFzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci13aGl0ZS8yMCBiZy1ibGFjay81MCBweC0yIHB5LTEgdGV4dC1bdmFyKC0tYWNpZCldXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ1VSU09SX01PREVTLmZpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChtb2RlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZS52YWx1ZSA9PT0gcGFyYW1zLm1vdXNlTW9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApPy5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c291cmNlS2luZCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYm9yZGVyIGJnLWJsYWNrLzUwIHB4LTIgcHktMSAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VLaW5kID09PSBcImxpdmVcIiB8fCBtaWNBY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJib3JkZXItWyNjNDViNmFdLzUwIHRleHQtWyNiODZhNzRdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJib3JkZXItd2hpdGUvMjAgdGV4dC13aGl0ZS83MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzQXVkaW9WaXN1YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBhdWRpb1Zpc3VhbExhYmVsKGF1ZGlvVmlzdWFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG1pY0FjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYCR7c291cmNlTGFiZWwoc291cmNlS2luZCl9ICsgbWljYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogc291cmNlTGFiZWwoc291cmNlS2luZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtoYXNTb3VyY2UgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGFnZS1jaHJvbWUgYWJzb2x1dGUgbGVmdC0zIHRvcC0zIHotMzAgZmxleCBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbGVhciBzdGFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkNsZWFyIHN0YWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQgaC05IHctOSBwbGFjZS1pdGVtcy1jZW50ZXIgYm9yZGVyIGJvcmRlci13aGl0ZS8yNSBiZy1ibGFjay81NSB0ZXh0LXdoaXRlIGJhY2tkcm9wLWJsdXItc20gdHJhbnNpdGlvbiBob3Zlcjpib3JkZXItWyNjNDViNmFdIGhvdmVyOnRleHQtWyNjNDViNmFdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyU3RhZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblBvaW50ZXJEb3duPXsoZXZlbnQpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUG9pbnRlclVwPXsoZXZlbnQpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJzcXVhcmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk02IDZsMTIgMTJNMTggNkw2IDE4XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiVXBsb2FkIGZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJVcGxvYWQgZmlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkIGgtOSB3LTkgcGxhY2UtaXRlbXMtY2VudGVyIGJvcmRlciBib3JkZXItd2hpdGUvMjUgYmctYmxhY2svNTUgdGV4dC13aGl0ZSBiYWNrZHJvcC1ibHVyLXNtIHRyYW5zaXRpb24gaG92ZXI6Ym9yZGVyLXdoaXRlLzcwIGhvdmVyOnRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZVJlZi5jdXJyZW50Py5jbGljaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUG9pbnRlckRvd249eyhldmVudCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Qb2ludGVyVXA9eyhldmVudCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInNxdWFyZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEyIDE2VjRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNyA5bDUtNSA1IDVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNCAyMGgxNlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgICAgICAgICAgICAgICAge2hhc1NvdXJjZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YWdlLWNocm9tZSBhYnNvbHV0ZSByaWdodC0zIHRvcC0zIHotMzAgZmxleCBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJSZXNldCB2aXN1YWxpemVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUmVzZXQgdmlzdWFsaXplclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkIGgtOSB3LTkgcGxhY2UtaXRlbXMtY2VudGVyIGJvcmRlciBib3JkZXItd2hpdGUvMjUgYmctYmxhY2svNTUgdGV4dC13aGl0ZSBiYWNrZHJvcC1ibHVyLXNtIHRyYW5zaXRpb24gaG92ZXI6Ym9yZGVyLXdoaXRlLzcwIGhvdmVyOnRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRWaXN1YWxpemVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Qb2ludGVyRG93bj17KGV2ZW50KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblBvaW50ZXJVcD17KGV2ZW50KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwic3F1YXJlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMyAxMmE5IDkgMCAxIDAgMy02LjdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMyA0djVoNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbHNjcmVlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiRXhpdCBmdWxsc2NyZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkVudGVyIGZ1bGxzY3JlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxzY3JlZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkV4aXQgZnVsbHNjcmVlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJGdWxsc2NyZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQgaC05IHctOSBwbGFjZS1pdGVtcy1jZW50ZXIgYm9yZGVyIGJvcmRlci13aGl0ZS8yNSBiZy1ibGFjay81NSB0ZXh0LXdoaXRlIGJhY2tkcm9wLWJsdXItc20gdHJhbnNpdGlvbiBob3Zlcjpib3JkZXItd2hpdGUvNzAgaG92ZXI6dGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2lkIHRvZ2dsZUZ1bGxzY3JlZW4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblBvaW50ZXJEb3duPXsoZXZlbnQpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUG9pbnRlclVwPXsoZXZlbnQpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Z1bGxzY3JlZW4gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwic3F1YXJlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOSAzdjZIM1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTUgMjF2LTZoNlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjEgOWgtNlYzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zIDE1aDZ2NlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInNxdWFyZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTMgOVYzaDZcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIxIDlWM2gtNlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjEgMTV2NmgtNlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMyAxNXY2aDZcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAge3Nob3dTdHVkaW8gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPVwibWF4LWgtWzYwdmhdIG92ZXJmbG93LXktYXV0byBib3JkZXItdCBib3JkZXItW3ZhcigtLWxpbmUpXSBsZzpib3JkZXItbCBsZzpib3JkZXItdC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItYiBib3JkZXItW3ZhcigtLWxpbmUpXSBweC00IHB5LTMgdGV4dC1bOXB4XSB1cHBlcmNhc2UgdHJhY2tpbmctWy4yMmVtXSB0ZXh0LVt2YXIoLS1tdXRlKV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2NlbmUgbWVtb3J5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGxnOmJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtQUkVTRVRTLm1hcCgocHJlc2V0KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwcmVzZXQubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bncm91cCBmbGV4IHctZnVsbCBpdGVtcy1jZW50ZXIgZ2FwLTMgYm9yZGVyLWIgYm9yZGVyLXIgYm9yZGVyLVt2YXIoLS1saW5lKV0gcHgtMyBweS0zIHRleHQtbGVmdCB0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgdHJhY2tpbmctWy4wOGVtXSB0cmFuc2l0aW9uIGxnOmJvcmRlci1yLTAgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlUHJlc2V0ID09PSBwcmVzZXQubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImJnLVt2YXIoLS1hY2lkKV0gdGV4dC1bdmFyKC0tdm9pZCldXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJ0ZXh0LVt2YXIoLS1tdXRlKV0gaG92ZXI6Ymctd2hpdGUvWy4wNF0gaG92ZXI6dGV4dC1bdmFyKC0tcGFwZXIpXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwbHlQcmVzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZXQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNldC5wYXJhbXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1bOHB4XSAke2FjdGl2ZVByZXNldCA9PT0gcHJlc2V0Lm5hbWUgPyBcInRleHQtYmxhY2svNTBcIiA6IFwidGV4dC13aGl0ZS8yNVwifWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJlc2V0LmNvZGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntwcmVzZXQubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtYXV0byBvcGFjaXR5LTAgdHJhbnNpdGlvbiBncm91cC1ob3ZlcjpvcGFjaXR5LTEwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdTIxOTJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC1weCBiZy1bdmFyKC0tbGluZSldIHAtcHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1bdmFyKC0tcGFuZWwpXSBweC0yIHB5LTMgdGV4dC1bOXB4XSB1cHBlcmNhc2UgdHJhY2tpbmctWy4xMmVtXSB0ZXh0LVt2YXIoLS1hY2lkKV0gaG92ZXI6YmctW3ZhcigtLXBhbmVsLTIpXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXttdXRhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx1MDBCMSBNdXRhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctW3ZhcigtLXBhbmVsKV0gcHgtMiBweS0zIHRleHQtWzlweF0gdXBwZXJjYXNlIHRyYWNraW5nLVsuMTJlbV0gdGV4dC1bdmFyKC0taG90KV0gaG92ZXI6YmctW3ZhcigtLXBhbmVsLTIpXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtyYW5kb21pemV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx1MjcyNiBDaGFvc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYXNpZGU+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgICAgICAgIHshc2hvd1N0dWRpbyA/IChcbiAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aW1lZCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtdC0zIGJvcmRlciBib3JkZXItW3ZhcigtLWxpbmUpXSBiZy1bdmFyKC0tcGFuZWwpXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIHB4LTMgcHktMi41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZCBoLTkgdy05IHNocmluay0wIHBsYWNlLWl0ZW1zLWNlbnRlciBib3JkZXIgYm9yZGVyLVt2YXIoLS1saW5lKV0gdGV4dC1zbSBob3Zlcjpib3JkZXItW3ZhcigtLWFjaWQpXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlUGxheX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtwbGF5aW5nID8gXCJQYXVzZVwiIDogXCJQbGF5XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBsYXlQYXVzZUdseXBoIHBsYXlpbmc9e3BsYXlpbmd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInctMTAgc2hyaW5rLTAgdGV4dC1bOXB4XSB0YWJ1bGFyLW51bXMgdGV4dC1bdmFyKC0tbXV0ZSldXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1hdFRpbWUodGltZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0aW1lbGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXtNYXRoLm1heChkdXJhdGlvbiwgMC4wMSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD17MC4wMX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17TWF0aC5taW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgubWF4KGR1cmF0aW9uLCAwLjAxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJNZWRpYSBwb3NpdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17KGV2ZW50KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWVrTWVkaWEoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidy0xMCBzaHJpbmstMCB0ZXh0LXJpZ2h0IHRleHQtWzlweF0gdGFidWxhci1udW1zIHRleHQtW3ZhcigtLW11dGUpXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXRUaW1lKGR1cmF0aW9uKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidm9sdW1lLWNvbnRyb2wgcmVsYXRpdmUgc2hyaW5rLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkIGgtOSB3LTkgcGxhY2UtaXRlbXMtY2VudGVyIGJvcmRlciBib3JkZXItW3ZhcigtLWxpbmUpXSB0ZXh0LVt2YXIoLS1wYXBlcildIGhvdmVyOmJvcmRlci1bdmFyKC0tYWNpZCldIGhvdmVyOnRleHQtW3ZhcigtLWFjaWQpXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZU11dGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdm9sdW1lID4gMC4wMDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiTXV0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlVubXV0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWb2x1bWVHbHlwaCB2b2x1bWU9e3ZvbHVtZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZvbHVtZS1mbHlvdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ2b2wtdmVydGljYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi0tZmlsbFwiOiBgJHt2b2x1bWUgKiAxMDB9JWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9ezAuMDF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dm9sdW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlZvbHVtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0PXsoZXZlbnQpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TWVkaWFWb2x1bWUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zIGdyaWQgZ3JpZC1jb2xzLTIgZ2FwLXB4IGJvcmRlciBib3JkZXItW3ZhcigtLWxpbmUpXSBiZy1bdmFyKC0tbGluZSldIHNtOmdyaWQtY29scy00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctW3ZhcigtLXBhbmVsKV0gcHgtNCBweS00IHRleHQtWzExcHhdIHVwcGVyY2FzZSB0cmFja2luZy1bLjE2ZW1dIHRleHQtW3ZhcigtLWFjaWQpXSB0cmFuc2l0aW9uIGhvdmVyOmJnLVt2YXIoLS1wYW5lbC0yKV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXttdXRhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdTAwQjEgTXV0YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctW3ZhcigtLXBhbmVsKV0gcHgtNCBweS00IHRleHQtWzExcHhdIHVwcGVyY2FzZSB0cmFja2luZy1bLjE2ZW1dIHRleHQtW3ZhcigtLWhvdCldIHRyYW5zaXRpb24gaG92ZXI6YmctW3ZhcigtLXBhbmVsLTIpXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3JhbmRvbWl6ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx1MjcyNiBDaGFvc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTQgcHktNCB0ZXh0LVsxMXB4XSB1cHBlcmNhc2UgdHJhY2tpbmctWy4xNmVtXSB0cmFuc2l0aW9uICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaWNBY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiYmctWyNjNDViNmFdIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJiZy1bdmFyKC0tcGFuZWwpXSB0ZXh0LVt2YXIoLS1tdXRlKV0gaG92ZXI6YmctW3ZhcigtLXBhbmVsLTIpXSBob3Zlcjp0ZXh0LVt2YXIoLS1hY2lkKV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdm9pZCB0b2dnbGVNaWMoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx1MjVDRiBNaWNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVjb3JkaW5nID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLVsjYzQ1YjZhXSBweC00IHB5LTQgdGV4dC1bMTFweF0gdXBwZXJjYXNlIHRyYWNraW5nLVsuMTZlbV0gdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZWNvcmRlclJlZi5jdXJyZW50Py5zdG9wKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpdmUtZG90IGgtMS41IHctMS41IHJvdW5kZWQtZnVsbCBiZy13aGl0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RvcCArIHNhdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWhhc1NvdXJjZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLVt2YXIoLS1wYW5lbCldIHB4LTQgcHktNCB0ZXh0LVsxMXB4XSB1cHBlcmNhc2UgdHJhY2tpbmctWy4xNmVtXSB0ZXh0LVsjYjg2YTc0XSB0cmFuc2l0aW9uIGhvdmVyOmJnLVsjYzQ1YjZhXSBob3Zlcjp0ZXh0LXdoaXRlIGRpc2FibGVkOm9wYWNpdHktMjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c3RhcnRSZWNvcmRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx1MjVDRiBSZWNvcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgICAgICAgIHtzaG93U3R1ZGlvID8gKFxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYm9yZGVyLXggYm9yZGVyLWIgYm9yZGVyLVt2YXIoLS1saW5lKV0gYmctW3ZhcigtLXBhbmVsKV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgaXRlbXMtY2VudGVyIGdhcC0zIHB4LTMgcHktMiBtZDpncmlkLWNvbHMtW2F1dG9fbWlubWF4KDE4MHB4LDFmcilfYXV0b10gbWQ6cHgtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFjYW5QbGF5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQgaC04IHctOCBwbGFjZS1pdGVtcy1jZW50ZXIgYm9yZGVyIGJvcmRlci1bdmFyKC0tbGluZSldIHRleHQteHMgaG92ZXI6Ym9yZGVyLVt2YXIoLS1hY2lkKV0gZGlzYWJsZWQ6b3BhY2l0eS0yNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlUGxheX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtwbGF5aW5nID8gXCJQYXVzZVwiIDogXCJQbGF5XCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBsYXlQYXVzZUdseXBoIHBsYXlpbmc9e3BsYXlpbmd9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTggYm9yZGVyIGJvcmRlci1bdmFyKC0tbGluZSldIHB4LTMgdGV4dC1bOXB4XSB1cHBlcmNhc2UgdHJhY2tpbmctWy4xNGVtXSB0ZXh0LVt2YXIoLS1tdXRlKV0gaG92ZXI6Ym9yZGVyLVt2YXIoLS1wYXBlcildIGhvdmVyOnRleHQtW3ZhcigtLXBhcGVyKV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGZpbGVSZWYuY3VycmVudD8uY2xpY2soKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGFzU291cmNlID8gXCJSZXBsYWNlXCIgOiBcIkltcG9ydFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaC04IGJvcmRlciBweC0zIHRleHQtWzlweF0gdXBwZXJjYXNlIHRyYWNraW5nLVsuMTRlbV0gdHJhbnNpdGlvbiAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaWNBY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJib3JkZXItWyNjNDViNmFdIGJnLVsjYzQ1YjZhXS8xNSB0ZXh0LVsjYjg2YTc0XVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiYm9yZGVyLVt2YXIoLS1saW5lKV0gdGV4dC1bdmFyKC0tbXV0ZSldIGhvdmVyOmJvcmRlci1bdmFyKC0tYWNpZCldIGhvdmVyOnRleHQtW3ZhcigtLWFjaWQpXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdm9pZCB0b2dnbGVNaWMoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWljQWN0aXZlID8gXCJcdTI1Q0YgTGl2ZVwiIDogXCJNaWNcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWluLXctMCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aW1lZCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3LTEwIHNocmluay0wIHRleHQtWzlweF0gdGFidWxhci1udW1zIHRleHQtW3ZhcigtLW11dGUpXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1hdFRpbWUodGltZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0aW1lbGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXtNYXRoLm1heChkdXJhdGlvbiwgMC4wMSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwPXswLjAxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e01hdGgubWluKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5tYXgoZHVyYXRpb24sIDAuMDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshY2FuUGxheX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJNZWRpYSBwb3NpdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0PXsoZXZlbnQpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vla01lZGlhKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidy0xMCBzaHJpbmstMCB0ZXh0LXJpZ2h0IHRleHQtWzlweF0gdGFidWxhci1udW1zIHRleHQtW3ZhcigtLW11dGUpXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1hdFRpbWUoZHVyYXRpb24pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzlweF0gdXBwZXJjYXNlIHRyYWNraW5nLVsuMTZlbV0gdGV4dC1bdmFyKC0tbXV0ZSldXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzb3VyY2VLaW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGAke3NvdXJjZUxhYmVsKHNvdXJjZUtpbmQpfSBzb3VyY2UgXHUwMEI3IG5vIHRpbWVsaW5lYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIk5vIHNvdXJjZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmQgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJoaWRkZW4gaXRlbXMtY2VudGVyIGdhcC0yIHhsOmZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVs4cHhdIHVwcGVyY2FzZSB0cmFja2luZy1bLjE1ZW1dIHRleHQtW3ZhcigtLW11dGUpXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWb2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImtub2ItcmFuZ2Ugdy0yMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi0tZmlsbFwiOiBgJHt2b2x1bWUgKiAxMDB9JWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXsxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwPXswLjAxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dm9sdW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VLaW5kID09PSBcImxpdmVcIiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlS2luZCA9PT0gXCJpbWFnZVwiIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VLaW5kID09PSBcImRhdGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9eyhldmVudCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZvbHVtZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IXJlY29yZGluZyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWhhc1NvdXJjZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC04IGJvcmRlciBib3JkZXItWyNjNDViNmFdLzYwIHB4LTMgdGV4dC1bOXB4XSB1cHBlcmNhc2UgdHJhY2tpbmctWy4xNGVtXSB0ZXh0LVsjYjg2YTc0XSBob3ZlcjpiZy1bI2M0NWI2YV0gaG92ZXI6dGV4dC13aGl0ZSBkaXNhYmxlZDpvcGFjaXR5LTI1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c3RhcnRSZWNvcmRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdTI1Q0YgUmVjb3JkIG1peFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTggYmctWyNjNDViNmFdIHB4LTMgdGV4dC1bOXB4XSB1cHBlcmNhc2UgdHJhY2tpbmctWy4xNGVtXSB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY29yZGVyUmVmLmN1cnJlbnQ/LnN0b3AoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpdmUtZG90IGgtMS41IHctMS41IHJvdW5kZWQtZnVsbCBiZy13aGl0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdG9wICsgc2F2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmlsZU5hbWUgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJ1bmNhdGUgYm9yZGVyLXQgYm9yZGVyLVt2YXIoLS1saW5lKV0gcHgtNCBweS0xLjUgdGV4dC1bOHB4XSB1cHBlcmNhc2UgdHJhY2tpbmctWy4xMmVtXSB0ZXh0LXdoaXRlLzMwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c291cmNlS2luZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gaXNBdWRpb1Zpc3VhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGAke3NvdXJjZUxhYmVsKHNvdXJjZUtpbmQpfSBcdTAwQjcgJHthdWRpb1Zpc3VhbExhYmVsKGF1ZGlvVmlzdWFsKX0gLyAke2ZpbGVOYW1lfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBtaWNBY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGAke3NvdXJjZUxhYmVsKHNvdXJjZUtpbmQpfSArIG1pYyAvICR7ZmlsZU5hbWV9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYCR7c291cmNlTGFiZWwoc291cmNlS2luZCl9IC8gJHtmaWxlTmFtZX1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmaWxlTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm10LTQgYm9yZGVyIGJvcmRlci1bdmFyKC0tbGluZSldIGJnLVt2YXIoLS1wYW5lbCldXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0zIGJvcmRlci1iIGJvcmRlci1bdmFyKC0tbGluZSldIG1kOmdyaWQtY29scy02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtHUk9VUFMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bib3JkZXItciBib3JkZXItW3ZhcigtLWxpbmUpXSBweC0xIHB5LTMgdGV4dC1bOXB4XSB1cHBlcmNhc2UgdHJhY2tpbmctWy4xNGVtXSB0cmFuc2l0aW9uIGxhc3Q6Ym9yZGVyLXItMCBtZDpweC00ICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUdyb3VwID09PSBpdGVtLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiYmctW3ZhcigtLXBhcGVyKV0gdGV4dC1bdmFyKC0tdm9pZCldXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJ0ZXh0LVt2YXIoLS1tdXRlKV0gaG92ZXI6dGV4dC1bdmFyKC0tcGFwZXIpXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlR3JvdXAoaXRlbS5pZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXItMiBoaWRkZW4gb3BhY2l0eS0zNSBtZDppbmxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMHtpbmRleCArIDF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmF2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGxnOmdyaWQtY29scy1bMjIwcHhfMWZyXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1iIGJvcmRlci1bdmFyKC0tbGluZSldIHAtNCBsZzpib3JkZXItYi0wIGxnOmJvcmRlci1yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzlweF0gdXBwZXJjYXNlIHRyYWNraW5nLVsuMThlbV0gdGV4dC1bdmFyKC0tcGFwZXIpXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtncm91cC5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMiB0ZXh0LVs5cHhdIGxlYWRpbmctcmVsYXhlZCB0ZXh0LVt2YXIoLS1tdXRlKV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z3JvdXAuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAteC04IGdhcC15LTUgcC00IHNtOmdyaWQtY29scy0yIHhsOmdyaWQtY29scy0zIHhsOnAtNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjdGl2ZUdyb3VwID09PSBcIndvcmxkXCIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTpjb2wtc3Bhbi0yIHhsOmNvbC1zcGFuLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bOXB4XSB1cHBlcmNhc2UgdHJhY2tpbmctWy4xNGVtXSB0ZXh0LVt2YXIoLS1wYXBlcildXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVuZGVyaW5nIGVuZ2luZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bOHB4XSB1cHBlcmNhc2UgdHJhY2tpbmctWy4xZW1dIHRleHQtW3ZhcigtLW11dGUpXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtTSEFERVJfV09STERTLmxlbmd0aH0gd29ybGRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTEgc206Z3JpZC1jb2xzLTMgeGw6Z3JpZC1jb2xzLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtTSEFERVJfV09STERTLm1hcCgobW9kZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXttb2RlLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IG1pbi1oLTE0IGl0ZW1zLWNlbnRlciBnYXAtMiBib3JkZXIgcHgtMiBweS0yIHRleHQtbGVmdCB0ZXh0LVs4cHhdIHVwcGVyY2FzZSB0cmFja2luZy1bLjA4ZW1dIHRyYW5zaXRpb24gJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcy5zaGFkZXJNb2RlID09PSBtb2RlLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImJvcmRlci1bdmFyKC0tYWNpZCldIGJnLXdoaXRlL1suMDZdIHRleHQtW3ZhcigtLWFjaWQpXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImJvcmRlci1bdmFyKC0tbGluZSldIHRleHQtW3ZhcigtLW11dGUpXSBob3Zlcjp0ZXh0LVt2YXIoLS1wYXBlcildXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFBhcmFtcygocHJldmlvdXMpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucHJldmlvdXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhZGVyTW9kZTogbW9kZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFkZXJNaXg6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGUudmFsdWUgPT09IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBNYXRoLm1heChwcmV2aW91cy5zaGFkZXJNaXgsIDAuNzIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlUHJlc2V0KFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9ycGhlclJlZi5jdXJyZW50Py5jbGVhckZlZWRiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3LTUgc2hyaW5rLTAgdGV4dC1jZW50ZXIgdGV4dC1iYXNlIHRleHQtW3ZhcigtLWFjaWQpXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21vZGUuZ2x5cGh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e21vZGUubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjdGl2ZUdyb3VwID09PSBcImN1cnNvclwiID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206Y29sLXNwYW4tMiB4bDpjb2wtc3Bhbi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzlweF0gdXBwZXJjYXNlIHRyYWNraW5nLVsuMTRlbV0gdGV4dC1bdmFyKC0tcGFwZXIpXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdlc3R1cmUgYWxnb3JpdGhtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVs4cHhdIHVwcGVyY2FzZSB0cmFja2luZy1bLjFlbV0gdGV4dC1bdmFyKC0tbXV0ZSldXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTW92ZSAvIGRyYWcgLyBob2xkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTQgZ2FwLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtDVVJTT1JfTU9ERVMubWFwKChtb2RlKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e21vZGUubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yIGJvcmRlciBweC0yIHB5LTMgdGV4dC1bOXB4XSB1cHBlcmNhc2UgdHJhY2tpbmctWy4xZW1dIHRyYW5zaXRpb24gJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcy5tb3VzZU1vZGUgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImJvcmRlci1bdmFyKC0tYWNpZCldIGJnLXdoaXRlL1suMDZdIHRleHQtW3ZhcigtLWFjaWQpXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImJvcmRlci1bdmFyKC0tbGluZSldIHRleHQtW3ZhcigtLW11dGUpXSBob3Zlcjp0ZXh0LVt2YXIoLS1wYXBlcildXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFBhcmFtcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocHJldmlvdXMpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByZXZpb3VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3VzZU1vZGU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZVByZXNldChcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmFzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21vZGUuZ2x5cGh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmlubGluZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21vZGUubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtncm91cC5zbGlkZXJzLm1hcCgoc3BlYykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pbiA9IHNwZWMubWluID8/IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF4ID0gc3BlYy5tYXggPz8gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWxsID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKChwYXJhbXNbc3BlYy5rZXldIC0gbWluKSAvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobWF4IC0gbWluKSkgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3NwZWMua2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgbWluLXctMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMiBmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlbiBnYXAtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LVs5cHhdIHVwcGVyY2FzZSB0cmFja2luZy1bLjEzZW1dIHRleHQtW3ZhcigtLXBhcGVyKV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzcGVjLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm10LTEgYmxvY2sgdHJ1bmNhdGUgdGV4dC1bOHB4XSB0ZXh0LVt2YXIoLS1tdXRlKV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzcGVjLmhpbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGFidWxhci1udW1zIHRleHQtWzEwcHhdIHRleHQtW3ZhcigtLWFjaWQpXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2xpZGVyVmFsdWUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXNbc3BlYy5rZXldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlYyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImtub2ItcmFuZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLS1maWxsXCI6IGAke2ZpbGx9JWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17bWlufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD17bWF4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9ezAuMDF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3BhcmFtc1tzcGVjLmtleV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17KGV2ZW50KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQYXJhbShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWMua2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jdXJyZW50VGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtMyBweC0xIHB5LTQgdGV4dC1bOHB4XSB1cHBlcmNhc2UgdHJhY2tpbmctWy4xNWVtXSB0ZXh0LVt2YXIoLS1tdXRlKV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5FdmVyeXRoaW5nIHJlbmRlcnMgbGl2ZSBpbiB5b3VyIGJyb3dzZXI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1bdmFyKC0tYWNpZCldXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGx5UHJlc2V0KFwiUHVyZSBzaWduYWxcIiwgQ0xFQU4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlc2V0IGFsbCBwYXJhbWV0ZXJzIFx1MjFCQVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgICAgICAge2Vycm9yID8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGJvdHRvbS00IGxlZnQtMS8yIHotNTAgLXRyYW5zbGF0ZS14LTEvMiBib3JkZXIgYm9yZGVyLVsjYzQ1YjZhXSBiZy1bdmFyKC0tdm9pZCldIHB4LTQgcHktMyB0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgdHJhY2tpbmctWy4xMmVtXSB0ZXh0LVsjYjg2YTc0XVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9yfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21haW4+XG4gICAgKTtcbn1cbiIsICJpbXBvcnQgeyBoLCByZW5kZXIgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyBBcHAgfSBmcm9tIFwiLi4vY2xpZW50L2luZGV4LnRzeFwiO1xuXG5yZW5kZXIoaChBcHAsIHt9KSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNPLElDMEJNQTtBRDFCTixJRVVEQztBRlZDLElHR0hDO0FISEcsSUc4Rk1DO0FIOUZOLElJK0tIQztBSi9LRyxJSTBMSEM7QUoxTEcsSUk0TERDO0FKNUxDLElJc05EQztBSnROQyxJS1NIQztBTFRHLElLVU5DO0FMVk0sSUtXTkM7QUxYTSxJS3lCREM7QUx6QkMsSUtzQ0hDO0FMdENHLElLcUxEQztBTHJMQyxJS3NMREM7QUx0TEMsSU1FSUM7QU5GSixJQWlCTUMsSUFBZ0MsQ0FBRztBQWpCekMsSUFrQk1DLElBQVksQ0FBQTtBQWxCbEIsSUFtQk1DLElBQ1o7QUFwQk0sSUNDTUMsSUFBVUMsTUFBTUQ7QUFTdEIsU0FBU0UsRUFBT0MsSUFBS0MsSUFB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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Q0FBQztBQUFBLEVBQ3JOO0FBQUEsRUFDQTtBQUFBLElBQ0ksTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sUUFBUSxXQUFXLEVBQUUsWUFBWSxJQUFJLFdBQVcsR0FBRyxjQUFjLEtBQUssTUFBTSxNQUFNLFFBQVEsTUFBTSxRQUFRLE1BQU0sS0FBSyxNQUFNLFlBQVksS0FBSyxVQUFVLE1BQU0sT0FBTyxNQUFNLFVBQVUsTUFBTSxPQUFPLE1BQU0sUUFBUSxNQUFNLE9BQU8sTUFBTSxPQUFPLElBQUksQ0FBQztBQUFBLEVBQy9PO0FBQUEsRUFDQTtBQUFBLElBQ0ksTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sUUFBUSxXQUFXLEVBQUUsWUFBWSxJQUFJLFdBQVcsTUFBTSxjQUFjLE1BQU0sTUFBTSxNQUFNLFFBQVEsS0FBSyxLQUFLLE1BQU0sWUFBWSxLQUFLLFVBQVUsTUFBTSxVQUFVLE1BQU0sUUFBUSxNQUFNLE9BQU8sTUFBTSxXQUFXLE1BQU0sUUFBUSxNQUFNLE9BQU8sS0FBSyxDQUFDO0FBQUEsRUFDMU87QUFBQSxFQUNBO0FBQUEsSUFDSSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixRQUFRLFdBQVcsRUFBRSxZQUFZLElBQUksV0FBVyxNQUFNLGNBQWMsTUFBTSxRQUFRLE1BQU0sUUFBUSxLQUFLLEtBQUssTUFBTSxZQUFZLEdBQUcsVUFBVSxLQUFLLE9BQU8sTUFBTSxRQUFRLE1BQU0sUUFBUSxNQUFNLE9BQU8sS0FBSyxPQUFPLEtBQUssQ0FBQztBQUFBLEVBQ3BOO0FBQUEsRUFDQTtBQUFBLElBQ0ksTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sUUFBUSxXQUFXLEVBQUUsWUFBWSxJQUFJLFdBQVcsTUFBTSxjQUFjLE1BQU0sUUFBUSxNQUFNLFFBQVEsTUFBTSxLQUFLLE1BQU0sWUFBWSxNQUFNLFVBQVUsTUFBTSxVQUFVLE1BQU0sUUFBUSxLQUFLLFFBQVEsS0FBSyxPQUFPLE1BQU0sT0FBTyxLQUFLLENBQUM7QUFBQSxFQUMzTjtBQUFBLEVBQ0E7QUFBQSxJQUNJLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFFBQVEsV0FBVyxFQUFFLFlBQVksSUFBSSxXQUFXLEdBQUcsY0FBYyxNQUFNLFNBQVMsTUFBTSxRQUFRLE1BQU0sS0FBSyxNQUFNLFlBQVksR0FBRyxVQUFVLEtBQUssT0FBTyxNQUFNLFVBQVUsTUFBTSxRQUFRLE1BQU0sUUFBUSxLQUFLLFFBQVEsTUFBTSxPQUFPLE1BQU0sT0FBTyxLQUFLLENBQUM7QUFBQSxFQUNqUDtBQUFBLEVBQ0E7QUFBQSxJQUNJLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFFBQVEsV0FBVyxFQUFFLFlBQVksSUFBSSxXQUFXLE1BQU0sY0FBYyxLQUFLLE1BQU0sTUFBTSxPQUFPLE1BQU0sUUFBUSxNQUFNLEtBQUssTUFBTSxZQUFZLEdBQUcsVUFBVSxNQUFNLFVBQVUsTUFBTSxPQUFPLEtBQUssUUFBUSxNQUFNLE9BQU8sTUFBTSxPQUFPLE1BQU0sV0FBVyxFQUFFLENBQUM7QUFBQSxFQUNoUDtBQUFBLEVBQ0E7QUFBQSxJQUNJLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFFBQVEsV0FBVyxFQUFFLFlBQVksSUFBSSxXQUFXLEdBQUcsY0FBYyxNQUFNLE1BQU0sTUFBTSxPQUFPLE1BQU0sUUFBUSxNQUFNLFFBQVEsTUFBTSxLQUFLLE1BQU0sWUFBWSxLQUFLLFVBQVUsTUFBTSxVQUFVLE1BQU0sUUFBUSxNQUFNLE9BQU8sTUFBTSxRQUFRLE1BQU0sT0FBTyxNQUFNLE9BQU8sTUFBTSxZQUFZLE1BQU0sV0FBVyxNQUFNLFdBQVcsRUFBRSxDQUFDO0FBQUEsRUFDaFQ7QUFDSjtBQUVBLFNBQVMsV0FBVyxTQUF5QjtBQUN6QyxNQUFJLENBQUMsT0FBTyxTQUFTLE9BQU8sRUFBRyxRQUFPO0FBQ3RDLFNBQU8sR0FBRyxLQUFLLE1BQU0sVUFBVSxFQUFFLENBQUMsSUFBSSxPQUFPLEtBQUssTUFBTSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFNBQVMsR0FBRyxHQUFHLENBQUM7QUFDM0Y7QUFFQSxTQUFTLFlBQVksT0FBZSxNQUEwQjtBQUMxRCxNQUFJLEtBQUssUUFBUSxFQUFHLFFBQU8sR0FBRyxNQUFNLFFBQVEsQ0FBQyxDQUFDO0FBQzlDLFNBQU8sT0FBTyxLQUFLLE1BQU0sUUFBUSxHQUFHLENBQUMsRUFBRSxTQUFTLEdBQUcsR0FBRztBQUMxRDtBQUVBLFNBQVMsZUFBZSxFQUFFLFFBQVEsR0FBeUI7QUFDdkQsTUFBSSxTQUFTO0FBQ1QsV0FDSSxnQkFBQWE7QUFBQSxNQUFDO0FBQUE7QUFBQSxRQUNHLGVBQVk7QUFBQSxRQUNaLFdBQVU7QUFBQSxRQUVWO0FBQUEsMEJBQUFBLEdBQUMsVUFBSyxXQUFVLHNCQUFxQjtBQUFBLFVBQ3JDLGdCQUFBQSxHQUFDLFVBQUssV0FBVSxzQkFBcUI7QUFBQTtBQUFBO0FBQUEsSUFDekM7QUFBQSxFQUVSO0FBQ0EsU0FDSSxnQkFBQUE7QUFBQSxJQUFDO0FBQUE7QUFBQSxNQUNHLGVBQVk7QUFBQSxNQUNaLFdBQVU7QUFBQTtBQUFBLEVBQ2Q7QUFFUjtBQUVBLFNBQVMsWUFBWSxFQUFFLE9BQU8sR0FBdUI7QUFDakQsTUFBSSxVQUFVLE1BQU87QUFDakIsV0FDSSxnQkFBQUE7QUFBQSxNQUFDO0FBQUE7QUFBQSxRQUNHLE9BQU07QUFBQSxRQUNOLFFBQU87QUFBQSxRQUNQLFNBQVE7QUFBQSxRQUNSLE1BQUs7QUFBQSxRQUNMLFFBQU87QUFBQSxRQUNQLGFBQVk7QUFBQSxRQUNaLGVBQWM7QUFBQSxRQUNkLGVBQVk7QUFBQSxRQUVaO0FBQUEsMEJBQUFBLEdBQUMsVUFBSyxHQUFFLHlCQUF3QjtBQUFBLFVBQ2hDLGdCQUFBQSxHQUFDLFVBQUssR0FBRSx1QkFBc0I7QUFBQTtBQUFBO0FBQUEsSUFDbEM7QUFBQSxFQUVSO0FBQ0EsU0FDSSxnQkFBQUE7QUFBQSxJQUFDO0FBQUE7QUFBQSxNQUNHLE9BQU07QUFBQSxNQUNOLFFBQU87QUFBQSxNQUNQLFNBQVE7QUFBQSxNQUNSLE1BQUs7QUFBQSxNQUNMLFFBQU87QUFBQSxNQUNQLGFBQVk7QUFBQSxNQUNaLGVBQWM7QUFBQSxNQUNkLGVBQVk7QUFBQSxNQUVaO0FBQUEsd0JBQUFBLEdBQUMsVUFBSyxHQUFFLHlCQUF3QjtBQUFBLFFBQy9CLFNBQVMsT0FDTixnQkFBQUEsR0FBQyxVQUFLLEdBQUUseUJBQXdCLElBRWhDLGdCQUFBQSxHQUFDLFVBQUssR0FBRSxnQ0FBK0I7QUFBQTtBQUFBO0FBQUEsRUFFL0M7QUFFUjtBQUVPLFNBQVMsTUFBTTtBQUNsQixRQUFNLFdBQVdDLEdBQXlCLElBQUk7QUFDOUMsUUFBTSxXQUFXQSxHQUF5QixJQUFJO0FBQzlDLFFBQU0sV0FBV0EsR0FBeUIsSUFBSTtBQUM5QyxRQUFNLGlCQUFpQkEsR0FBMEIsSUFBSTtBQUNyRCxRQUFNLFlBQVlBLEdBQTBCLElBQUk7QUFDaEQsUUFBTSxXQUFXQSxHQUF1QixJQUFJO0FBQzVDLFFBQU0sWUFBWUEsR0FBdUIsSUFBSTtBQUM3QyxRQUFNLFVBQVVBLEdBQXlCLElBQUk7QUFDN0MsUUFBTSxhQUFhQSxHQUE2QixJQUFJO0FBQ3BELFFBQU0sY0FBY0EsR0FBNkIsSUFBSTtBQUNyRCxRQUFNLFlBQVlBLEdBQWUsQ0FBQyxDQUFDO0FBQ25DLFFBQU0sZUFBZUEsR0FBc0IsSUFBSTtBQUMvQyxRQUFNLGtCQUFrQkEsR0FBNEIsSUFBSTtBQUN4RCxRQUFNLGNBQWNBLEdBQTRCLElBQUk7QUFDcEQsUUFBTSxpQkFBaUJBLEdBQTJDLElBQUk7QUFDdEUsUUFBTSxpQkFBaUJBLEdBQTJDLElBQUk7QUFDdEUsUUFBTSxrQkFBa0JBLEdBQTBDLElBQUk7QUFDdEUsUUFBTSxlQUFlQSxHQUEyQixJQUFJO0FBQ3BELFFBQU0sY0FBY0EsR0FBTyxDQUFDO0FBQzVCLFFBQU0sY0FBY0EsR0FBTyxJQUFJLFdBQVcsR0FBRyxDQUFDO0FBQzlDLFFBQU0sZ0JBQWdCQSxHQUEwQixJQUFJO0FBQ3BELFFBQU0saUJBQWlCQSxHQUFzQixRQUFRO0FBQ3JELFFBQU0saUJBQWlCQSxHQUFPLEVBQUUsR0FBRyxLQUFLLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQztBQUN2RCxRQUFNLGFBQWFBLEdBS1QsSUFBSTtBQUNkLFFBQU0sZ0JBQWdCQSxHQUFPLEdBQUc7QUFDaEMsUUFBTSxhQUFhQSxHQUFxQjtBQUFBLElBQ3BDLEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUNILFdBQVc7QUFBQSxJQUNYLFdBQVc7QUFBQSxJQUNYLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxFQUNaLENBQUM7QUFFRCxRQUFNLENBQUMsUUFBUSxTQUFTLElBQUlDLEdBQXFCLGdCQUFnQjtBQUNqRSxRQUFNLENBQUMsYUFBYSxjQUFjLElBQUlBLEdBQWtCLE9BQU87QUFDL0QsUUFBTSxDQUFDLGNBQWMsZUFBZSxJQUFJQSxHQUFTLEVBQUU7QUFDbkQsUUFBTSxDQUFDLFlBQVksYUFBYSxJQUFJQSxHQUFTLGNBQWM7QUFDM0QsUUFBTSxDQUFDLFlBQVksYUFBYSxJQUFJQSxHQUE0QixJQUFJO0FBQ3BFLFFBQU0sQ0FBQyxhQUFhLGNBQWMsSUFBSUEsR0FBd0IsaUJBQWlCO0FBQy9FLFFBQU0sQ0FBQyxTQUFTLFVBQVUsSUFBSUEsR0FBUyxLQUFLO0FBQzVDLFFBQU0sQ0FBQyxXQUFXLFlBQVksSUFBSUEsR0FBUyxLQUFLO0FBQ2hELFFBQU0sQ0FBQyxRQUFRLFNBQVMsSUFBSUEsR0FBUyxHQUFHO0FBQ3hDLFFBQU0sQ0FBQyxVQUFVLFdBQVcsSUFBSUEsR0FBUyxFQUFFO0FBQzNDLFFBQU0sQ0FBQyxPQUFPLFFBQVEsSUFBSUEsR0FBUyxFQUFFO0FBQ3JDLFFBQU0sQ0FBQyxNQUFNLE9BQU8sSUFBSUEsR0FBUyxDQUFDO0FBQ2xDLFFBQU0sQ0FBQyxVQUFVLFdBQVcsSUFBSUEsR0FBUyxDQUFDO0FBQzFDLFFBQU0sQ0FBQyxZQUFZLGFBQWEsSUFBSUEsR0FBUyxLQUFLO0FBQ2xELFFBQU0sQ0FBQyxXQUFXLFlBQVksSUFBSUEsR0FBUyxLQUFLO0FBRWhELFFBQU0sWUFBWSxlQUFlO0FBQ2pDLFFBQU0sUUFBUSxhQUFhLGNBQWMsVUFBVSxJQUFJO0FBQ3ZELFFBQU0sVUFBVSxhQUFhLG9CQUFvQixVQUFVLElBQUk7QUFDL0QsUUFBTSxnQkFBZ0IsZUFBZSxXQUFXLGVBQWU7QUFDL0QsZ0JBQWMsVUFBVTtBQUN4QixpQkFBZSxVQUFVO0FBRXpCLFFBQU0sUUFBUSxPQUFPLEtBQUssQ0FBQyxTQUFTLEtBQUssT0FBTyxXQUFXLEtBQUssT0FBTyxDQUFDO0FBRXhFLEVBQUFDLEdBQVUsTUFBTTtBQUNaLGFBQVMsUUFBUTtBQUVqQixVQUFNLE9BQU8sc0JBQXNCLG1CQUFtQixXQUFXLENBQUM7QUFDbEUsVUFBTSxRQUEyQixDQUFDO0FBQ2xDLGVBQVcsT0FBTyxDQUFDLFFBQVEsa0JBQWtCLEdBQVk7QUFDckQsWUFBTSxXQUFXLFNBQVM7QUFBQSxRQUN0QixhQUFhLEdBQUc7QUFBQSxNQUNwQjtBQUNBLFlBQU0sT0FBTyxZQUFZLFNBQVMsY0FBYyxNQUFNO0FBQ3RELFdBQUssTUFBTTtBQUNYLFdBQUssT0FBTztBQUNaLFdBQUssT0FBTztBQUNaLFVBQUksQ0FBQyxTQUFVLFVBQVMsS0FBSyxZQUFZLElBQUk7QUFDN0MsWUFBTSxLQUFLLElBQUk7QUFBQSxJQUNuQjtBQUVBLFdBQU8sTUFBTTtBQUNULGlCQUFXLFFBQVEsTUFBTyxNQUFLLE9BQU87QUFBQSxJQUMxQztBQUFBLEVBQ0osR0FBRyxDQUFDLENBQUM7QUFFTCxFQUFBQSxHQUFVLE1BQU07QUFDWixVQUFNLFFBQVEsU0FBUyxjQUFjLE9BQU87QUFDNUMsVUFBTSxjQUFjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFpS3BCLGFBQVMsS0FBSyxZQUFZLEtBQUs7QUFDL0IsV0FBTyxNQUFNLE1BQU0sT0FBTztBQUFBLEVBQzlCLEdBQUcsQ0FBQyxDQUFDO0FBRUwsRUFBQUEsR0FBVSxNQUFNO0FBQ1osVUFBTSxRQUFRLGVBQWU7QUFDN0IsVUFBTSxTQUFTLFVBQVU7QUFDekIsVUFBTSxRQUFRLFNBQVM7QUFDdkIsUUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTztBQUVqQyxRQUFJO0FBQ0EsMkJBQXFCLEtBQUs7QUFDMUIsWUFBTSxVQUFVLGNBQWMsUUFBUSxPQUFPLE1BQU07QUFDbkQsaUJBQVcsVUFBVTtBQUNyQixVQUFJLFlBQVk7QUFDaEIsWUFBTSxTQUFTLE1BQU07QUFDakIsNkJBQXFCLFNBQVM7QUFDOUIsb0JBQVksc0JBQXNCLE1BQU07QUFDcEMsZ0JBQU0sT0FBTyxNQUFNLHNCQUFzQjtBQUN6QyxrQkFBUSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU07QUFBQSxRQUMxQyxDQUFDO0FBQUEsTUFDTDtBQUNBLGFBQU87QUFDUCxZQUFNLFdBQVcsSUFBSSxlQUFlLE1BQU07QUFDMUMsZUFBUyxRQUFRLEtBQUs7QUFDdEIsYUFBTyxNQUFNO0FBQ1QsNkJBQXFCLFNBQVM7QUFDOUIsaUJBQVMsV0FBVztBQUNwQixnQkFBUSxRQUFRO0FBQ2hCLG1CQUFXLFVBQVU7QUFBQSxNQUN6QjtBQUFBLElBQ0osU0FBUyxPQUFPO0FBQ1o7QUFBQSxRQUNJLGlCQUFpQixRQUNYLE1BQU0sVUFDTjtBQUFBLE1BQ1Y7QUFBQSxJQUNKO0FBQUEsRUFDSixHQUFHLENBQUMsQ0FBQztBQUVMLEVBQUFBLEdBQVUsTUFBTTtBQUNaLGVBQVcsU0FBUyxVQUFVLE1BQU07QUFBQSxFQUN4QyxHQUFHLENBQUMsTUFBTSxDQUFDO0FBRVgsRUFBQUEsR0FBVSxNQUFNO0FBQ1osUUFBSSxVQUFXO0FBQ2YsVUFBTSxRQUFRLGVBQWU7QUFDN0IsUUFBSSxDQUFDLE1BQU87QUFFWixRQUFJLE1BQU07QUFDVixVQUFNLE9BQU8sTUFBTTtBQUNmLFlBQU0sUUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBLGVBQWU7QUFBQSxRQUNmLFlBQVksSUFBSSxJQUFJO0FBQUEsTUFDeEI7QUFDQSxpQkFBVyxTQUFTLFVBQVUsS0FBSztBQUNuQyxpQkFBVyxTQUFTLGNBQWMsUUFBUSxHQUFHO0FBQzdDLFlBQU0sc0JBQXNCLElBQUk7QUFBQSxJQUNwQztBQUNBLFNBQUs7QUFDTCxXQUFPLE1BQU0scUJBQXFCLEdBQUc7QUFBQSxFQUN6QyxHQUFHLENBQUMsU0FBUyxDQUFDO0FBRWQsRUFBQUEsR0FBVSxNQUFNO0FBQ1osVUFBTSxRQUFRLFNBQVM7QUFDdkIsVUFBTSxRQUFRLFNBQVM7QUFDdkIsUUFBSSxPQUFPO0FBQ1AsWUFBTSxTQUFTO0FBQ2YsWUFBTSxRQUFRLFdBQVc7QUFBQSxJQUM3QjtBQUNBLFFBQUksT0FBTztBQUNQLFlBQU0sU0FBUztBQUNmLFlBQU0sUUFBUSxXQUFXO0FBQUEsSUFDN0I7QUFBQSxFQUNKLEdBQUcsQ0FBQyxNQUFNLENBQUM7QUFFWCxFQUFBQSxHQUFVLE1BQU07QUFDWixRQUFJO0FBQ0EsbUJBQWEsUUFBUSxpQkFBaUIsYUFBYSxNQUFNLEdBQUc7QUFBQSxJQUNoRSxRQUFRO0FBQUEsSUFFUjtBQUFBLEVBQ0osR0FBRyxDQUFDLFVBQVUsQ0FBQztBQUVmLEVBQUFBLEdBQVUsTUFBTTtBQUNaLFVBQU0saUJBQWlCLE1BQU07QUFDekIsWUFBTSxRQUFRLFNBQVM7QUFDdkIsb0JBQWMsQ0FBQyxDQUFDLFNBQVMsU0FBUyxzQkFBc0IsS0FBSztBQUFBLElBQ2pFO0FBQ0EsYUFBUyxpQkFBaUIsb0JBQW9CLGNBQWM7QUFDNUQsV0FBTyxNQUNILFNBQVMsb0JBQW9CLG9CQUFvQixjQUFjO0FBQUEsRUFDdkUsR0FBRyxDQUFDLENBQUM7QUFFTCxFQUFBQSxHQUFVLE1BQU07QUFDWixVQUFNLFlBQVksQ0FBQyxVQUF5QjtBQUN4QyxVQUFJLEVBQUUsTUFBTSxXQUFXLE1BQU0sU0FBVTtBQUN2QyxVQUFJLE1BQU0sSUFBSSxZQUFZLE1BQU0sSUFBSztBQUNyQyxVQUFJLE1BQU0sa0JBQWtCLGFBQWE7QUFDckMsY0FBTSxNQUFNLE1BQU0sT0FBTztBQUN6QixZQUNJLFFBQVEsV0FDUixRQUFRLGNBQ1IsTUFBTSxPQUFPO0FBRWI7QUFBQSxNQUNSO0FBQ0EsWUFBTSxlQUFlO0FBQ3JCLG9CQUFjLENBQUMsYUFBYSxDQUFDLFFBQVE7QUFBQSxJQUN6QztBQUNBLFdBQU8saUJBQWlCLFdBQVcsU0FBUztBQUM1QyxXQUFPLE1BQU0sT0FBTyxvQkFBb0IsV0FBVyxTQUFTO0FBQUEsRUFDaEUsR0FBRyxDQUFDLENBQUM7QUFFTCxFQUFBQSxHQUFVLE1BQU07QUFDWixXQUFPLE1BQU07QUFDVCxVQUFJLGFBQWEsUUFBUyxLQUFJLGdCQUFnQixhQUFhLE9BQU87QUFDbEUsVUFBSSxZQUFZLFNBQVMsVUFBVTtBQUMvQixvQkFBWSxRQUFRLEtBQUs7QUFDN0IsMkJBQXFCLFlBQVksT0FBTztBQUN4Qyx1QkFBaUI7QUFDakIsV0FBSyxnQkFBZ0IsU0FBUyxNQUFNO0FBQUEsSUFDeEM7QUFBQSxFQUNKLEdBQUcsQ0FBQyxDQUFDO0FBRUwsV0FBUyxTQUFTLEtBQWdCLE9BQWU7QUFDN0Msb0JBQWdCLEVBQUU7QUFDbEIsY0FBVSxDQUFDLGNBQWMsRUFBRSxHQUFHLFVBQVUsQ0FBQyxHQUFHLEdBQUcsTUFBTSxFQUFFO0FBQUEsRUFDM0Q7QUFFQSxXQUFTLFlBQVksTUFBYyxNQUFrQjtBQUNqRCxjQUFVLEVBQUUsR0FBRyxLQUFLLENBQUM7QUFDckIsb0JBQWdCLElBQUk7QUFDcEIsZUFBVyxTQUFTLGNBQWM7QUFBQSxFQUN0QztBQUVBLFdBQVMsWUFBWTtBQUNqQixtQkFBZSxrQkFBa0IsZUFBZSxPQUFPLENBQUM7QUFDeEQsY0FBVSxpQkFBaUIsQ0FBQztBQUM1QixvQkFBZ0IsRUFBRTtBQUNsQixlQUFXLFNBQVMsY0FBYztBQUFBLEVBQ3RDO0FBRUEsV0FBUyxTQUFTO0FBQ2QsY0FBVSxDQUFDLGFBQWE7QUFDcEIsWUFBTSxPQUFPLEVBQUUsR0FBRyxTQUFTO0FBQzNCLGlCQUFXLE9BQU8sT0FBTyxLQUFLLElBQUksR0FBMkI7QUFDekQsWUFBSSxRQUFRLGVBQWUsUUFBUSxhQUFjO0FBQ2pELGNBQU0sTUFBTSxRQUFRLFVBQVUsSUFBSTtBQUNsQyxhQUFLLEdBQUcsSUFBSSxLQUFLO0FBQUEsVUFDYjtBQUFBLFVBQ0EsS0FBSyxJQUFJLEtBQUssS0FBSyxHQUFHLEtBQUssS0FBSyxPQUFPLElBQUksT0FBTyxJQUFJO0FBQUEsUUFDMUQ7QUFBQSxNQUNKO0FBQ0EsYUFBTztBQUFBLElBQ1gsQ0FBQztBQUNELG9CQUFnQixFQUFFO0FBQUEsRUFDdEI7QUFFQSxXQUFTLG1CQUFtQjtBQUN4QixlQUFXLFNBQVMsYUFBYSxTQUFTLFVBQVUsS0FBSyxDQUFDO0FBQ3RELFlBQU0sS0FBSztBQUNmLGlCQUFhLFVBQVU7QUFBQSxFQUMzQjtBQUVBLFdBQVMsVUFBVTtBQUNmLHFCQUFpQjtBQUNqQixpQkFBYSxLQUFLO0FBQUEsRUFDdEI7QUFFQSxXQUFTLGdCQUFnQjtBQUNyQix5QkFBcUIsWUFBWSxPQUFPO0FBQ3hDLGdCQUFZLFVBQVU7QUFBQSxFQUMxQjtBQUVBLFdBQVMsa0JBQWtCO0FBQ3ZCLGtCQUFjO0FBQ2QsbUJBQWUsU0FBUyxXQUFXO0FBQ25DLG1CQUFlLFNBQVMsV0FBVztBQUNuQyxvQkFBZ0IsU0FBUyxXQUFXO0FBQ3BDLGdCQUFZLFNBQVMsV0FBVztBQUNoQyxvQkFBZ0IsVUFBVTtBQUFBLEVBQzlCO0FBRUEsaUJBQWUsa0JBQWtCO0FBQzdCLFFBQUksQ0FBQyxnQkFBZ0IsU0FBUztBQUMxQixZQUFNLG9CQUFvQixPQUFPO0FBQ2pDLFVBQUksQ0FBQyxrQkFBbUIsUUFBTztBQUMvQixzQkFBZ0IsVUFBVSxJQUFJLGtCQUFrQjtBQUFBLElBQ3BEO0FBQ0EsVUFBTSxnQkFBZ0IsUUFBUSxPQUFPO0FBQ3JDLFdBQU8sZ0JBQWdCO0FBQUEsRUFDM0I7QUFFQSxXQUFTLHFCQUFxQjtBQUMxQixVQUFNLFFBQVEsU0FBUztBQUN2QixVQUFNLFFBQVEsU0FBUztBQUN2QixVQUFNLFFBQVEsU0FBUztBQUN2QixRQUFJLE9BQU87QUFDUCxZQUFNLE1BQU07QUFDWixZQUFNLGdCQUFnQixLQUFLO0FBQzNCLFlBQU0sS0FBSztBQUFBLElBQ2Y7QUFDQSxRQUFJLE9BQU87QUFDUCxZQUFNLE1BQU07QUFDWixZQUFNLGdCQUFnQixLQUFLO0FBQzNCLFlBQU0sS0FBSztBQUFBLElBQ2Y7QUFDQSxRQUFJLE9BQU87QUFDUCxZQUFNLGdCQUFnQixLQUFLO0FBQUEsSUFDL0I7QUFBQSxFQUNKO0FBRUEsV0FBUyxrQkFBa0I7QUFDdkIsVUFBTSxXQUFXLFlBQVk7QUFDN0IsVUFBTSxRQUFRLGVBQWU7QUFDN0IsUUFBSSxDQUFDLFNBQVU7QUFDZixRQUFJLFlBQVksUUFBUSxXQUFXLFNBQVMsbUJBQW1CO0FBQzNELGtCQUFZLFVBQVUsSUFBSSxXQUFXLFNBQVMsaUJBQWlCO0FBQUEsSUFDbkU7QUFDQSxVQUFNLE9BQU8sWUFBWTtBQUN6QixhQUFTLHFCQUFxQixJQUFJO0FBQ2xDLFVBQU0sUUFBUSxrQkFBa0IsSUFBSTtBQUNwQyxlQUFXLFNBQVMsY0FBYyxLQUFLO0FBRXZDLFVBQU0sT0FBTyxjQUFjO0FBQzNCLFNBQUssU0FBUyxXQUFXLFNBQVMsV0FBVyxPQUFPO0FBQ2hELDJCQUFxQixLQUFLO0FBQzFCO0FBQUEsUUFDSTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQSxZQUFZLElBQUksSUFBSTtBQUFBLFFBQ3BCLGVBQWU7QUFBQSxNQUNuQjtBQUFBLElBQ0o7QUFFQSxnQkFBWSxVQUFVLHNCQUFzQixlQUFlO0FBQUEsRUFDL0Q7QUFFQSxpQkFBZSxZQUNYLFFBQ0EsU0FDRjtBQUNFLFVBQU0sVUFBVSxNQUFNLGdCQUFnQjtBQUN0QyxRQUFJLENBQUMsUUFBUztBQUNkLG9CQUFnQjtBQUVoQixRQUFJLFdBQVcsWUFBWTtBQUMzQixRQUFJLENBQUMsWUFBWSxTQUFTLFlBQVksU0FBUztBQUMzQyxpQkFBVyxRQUFRLGVBQWU7QUFDbEMsZUFBUyxVQUFVO0FBQ25CLGVBQVMsd0JBQXdCO0FBQ2pDLGtCQUFZLFVBQVU7QUFBQSxJQUMxQjtBQUVBLFdBQU8sUUFBUSxRQUFRO0FBQ3ZCLFFBQUksUUFBUyxVQUFTLFFBQVEsUUFBUSxXQUFXO0FBQ2pELG9CQUFnQjtBQUFBLEVBQ3BCO0FBRUEsaUJBQWUsbUJBQ1gsU0FDQSxNQUNGO0FBQ0UsUUFBSTtBQUNBLFlBQU0sVUFBVSxNQUFNLGdCQUFnQjtBQUN0QyxVQUFJLENBQUMsUUFBUztBQUVkLFlBQU0sT0FBTyxTQUFTLFVBQVUsaUJBQWlCO0FBQ2pELFVBQUksQ0FBQyxLQUFLLFNBQVM7QUFDZixhQUFLLFVBQVUsUUFBUSx5QkFBeUIsT0FBTztBQUFBLE1BQzNEO0FBQ0EsWUFBTSxZQUFZLEtBQUssU0FBUyxJQUFJO0FBQUEsSUFDeEMsUUFBUTtBQUFBLElBRVI7QUFBQSxFQUNKO0FBRUEsaUJBQWUsYUFBYSxPQUE0QixXQUFXO0FBQy9ELGFBQVMsRUFBRTtBQUNYLFVBQU0sT0FBTyxjQUFjO0FBQzNCLFVBQU0sYUFDRixTQUFTLGNBQWMsU0FBUyxXQUFXLFNBQVM7QUFFeEQsUUFBSTtBQUNBLGNBQVE7QUFDUixzQkFBZ0I7QUFFaEIsVUFBSSxDQUFDLFlBQVk7QUFDYiwyQkFBbUI7QUFDbkIsWUFBSSxhQUFhLFNBQVM7QUFDdEIsY0FBSSxnQkFBZ0IsYUFBYSxPQUFPO0FBQ3hDLHVCQUFhLFVBQVU7QUFBQSxRQUMzQjtBQUVBLGNBQU0sUUFBUSxlQUFlO0FBQzdCLFlBQUksT0FBTztBQUNQLCtCQUFxQixLQUFLO0FBQzFCLHFCQUFXLFNBQVMsVUFBVSxLQUFLO0FBQUEsUUFDdkM7QUFDQSxtQkFBVyxTQUFTLGNBQWM7QUFFbEMsc0JBQWMsTUFBTTtBQUNwQixvQkFBWSxZQUFZO0FBQ3hCLHVCQUFlLGtCQUFrQixDQUFDO0FBQ2xDLG1CQUFXLElBQUk7QUFDZixnQkFBUSxDQUFDO0FBQ1Qsb0JBQVksQ0FBQztBQUFBLE1BQ2pCO0FBRUEsWUFBTSxTQUFTLE1BQU0sVUFBVSxhQUFhLGFBQWE7QUFBQSxRQUNyRCxPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsTUFDWCxDQUFDO0FBQ0QsbUJBQWEsVUFBVTtBQUN2QixtQkFBYSxJQUFJO0FBRWpCO0FBQUEsUUFBVSxDQUFDLGFBQ1AsU0FBUyxRQUFRLE9BQU8sRUFBRSxHQUFHLFVBQVUsT0FBTyxLQUFLLElBQUk7QUFBQSxNQUMzRDtBQUVBLFlBQU0sVUFBVSxNQUFNLGdCQUFnQjtBQUN0QyxVQUFJLENBQUMsUUFBUztBQUNkLFlBQU0sU0FBUyxRQUFRLHdCQUF3QixNQUFNO0FBQ3JELFlBQU0sWUFBWSxRQUFRLEtBQUs7QUFDL0Isc0JBQWdCLFVBQVU7QUFBQSxJQUM5QixRQUFRO0FBQ0osZUFBUywrQ0FBK0M7QUFDeEQsY0FBUTtBQUNSLFVBQUksQ0FBQyxZQUFZO0FBQ2Isc0JBQWMsSUFBSTtBQUNsQixtQkFBVyxLQUFLO0FBQUEsTUFDcEI7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUVBLFdBQVMsY0FBYztBQUNuQixZQUFRO0FBQ1Isb0JBQWdCO0FBQ2hCLGVBQVcsU0FBUyxjQUFjLENBQUM7QUFDbkMsUUFBSSxjQUFjLFlBQVksUUFBUTtBQUNsQyx5QkFBbUI7QUFDbkIsVUFBSSxhQUFhLFNBQVM7QUFDdEIsWUFBSSxnQkFBZ0IsYUFBYSxPQUFPO0FBQ3hDLHFCQUFhLFVBQVU7QUFBQSxNQUMzQjtBQUNBLGlCQUFXLFNBQVMsY0FBYztBQUNsQyxvQkFBYyxJQUFJO0FBQ2xCLGtCQUFZLEVBQUU7QUFDZCxpQkFBVyxLQUFLO0FBQ2hCLGNBQVEsQ0FBQztBQUNULGtCQUFZLENBQUM7QUFBQSxJQUNqQjtBQUFBLEVBQ0o7QUFFQSxXQUFTLFlBQVk7QUFDakIsUUFBSSxXQUFXO0FBQ1gsa0JBQVk7QUFDWjtBQUFBLElBQ0o7QUFDQSxTQUFLLGFBQWEsU0FBUztBQUFBLEVBQy9CO0FBRUEsV0FBUyxhQUFhO0FBQ2xCLFFBQUksV0FBVztBQUNYLFdBQUssYUFBYSxPQUFPO0FBQ3pCO0FBQUEsSUFDSjtBQUNBLFlBQVE7QUFDUixvQkFBZ0I7QUFDaEIsdUJBQW1CO0FBQ25CLFFBQUksYUFBYSxTQUFTO0FBQ3RCLFVBQUksZ0JBQWdCLGFBQWEsT0FBTztBQUN4QyxtQkFBYSxVQUFVO0FBQUEsSUFDM0I7QUFDQSxlQUFXLFNBQVMsY0FBYztBQUNsQyxlQUFXLFNBQVMsY0FBYyxDQUFDO0FBQ25DLGtCQUFjLElBQUk7QUFDbEIsZ0JBQVksRUFBRTtBQUNkLGVBQVcsS0FBSztBQUNoQixZQUFRLENBQUM7QUFDVCxnQkFBWSxDQUFDO0FBQUEsRUFDakI7QUFFQSxpQkFBZSxPQUFPLE1BQXdCO0FBQzFDLFFBQUksQ0FBQyxLQUFNO0FBRVgsVUFBTSxPQUFPLGFBQWEsSUFBSTtBQUM5QixVQUFNLGVBQWUsWUFBWSxTQUFTLFVBQVU7QUFDcEQsVUFBTSxlQUFlLGNBQWM7QUFHbkMsVUFBTSxnQkFDRixpQkFBaUIsU0FBUyxXQUFXLFNBQVM7QUFDbEQsVUFBTSxjQUFjLGlCQUFpQixDQUFDLENBQUMsYUFBYTtBQUNwRCxVQUFNLGtCQUNGLGlCQUNBLENBQUMsYUFBYSxZQUNiLGlCQUFpQixXQUFXLGlCQUFpQjtBQUVsRCxhQUFTLEVBQUU7QUFFWCxRQUFJLENBQUMsWUFBYSxTQUFRO0FBRTFCLFFBQUksYUFBYTtBQUNiLG9CQUFjO0FBQ2QscUJBQWUsU0FBUyxXQUFXO0FBQ25DLHFCQUFlLFNBQVMsV0FBVztBQUNuQyxVQUFJLFlBQVksUUFBUyxpQkFBZ0I7QUFBQSxJQUM3QyxXQUFXLENBQUMsZUFBZTtBQUN2QixzQkFBZ0I7QUFBQSxJQUNwQjtBQUVBLFFBQUksQ0FBQyxpQkFBaUI7QUFDbEIseUJBQW1CO0FBQ25CLFVBQUksYUFBYSxTQUFTO0FBQ3RCLFlBQUksZ0JBQWdCLGFBQWEsT0FBTztBQUN4QyxxQkFBYSxVQUFVO0FBQUEsTUFDM0I7QUFBQSxJQUNKO0FBRUEsVUFBTSxNQUFNLElBQUksZ0JBQWdCLElBQUk7QUFDcEMsUUFBSSxDQUFDLGdCQUFpQixjQUFhLFVBQVU7QUFDN0MsZ0JBQVksS0FBSyxJQUFJO0FBQ3JCLGtCQUFjLElBQUk7QUFDbEIsUUFBSSxDQUFDLGlCQUFpQjtBQUNsQixpQkFBVyxLQUFLO0FBQ2hCLGNBQVEsQ0FBQztBQUNULGtCQUFZLENBQUM7QUFBQSxJQUNqQjtBQUNBLGVBQVcsU0FBUyxjQUFjO0FBRWxDLFFBQUksU0FBUyxTQUFTO0FBQ2xCLFlBQU0sUUFBUSxTQUFTO0FBQ3ZCLFVBQUksQ0FBQyxNQUFPO0FBQ1osaUJBQVcsU0FBUyxVQUFVLEtBQUs7QUFDbkMsWUFBTSxNQUFNO0FBQ1osWUFBTSxTQUFTO0FBQ2YsWUFBTSxRQUFRLFdBQVc7QUFDekIsWUFBTSxLQUFLO0FBQ1gsV0FBSyxtQkFBbUIsT0FBTyxPQUFPLEVBQUUsUUFBUSxNQUFNO0FBQ2xELGFBQUssTUFDQSxLQUFLLEVBQ0wsS0FBSyxNQUFNLFdBQVcsSUFBSSxDQUFDLEVBQzNCLE1BQU0sTUFBTSxXQUFXLEtBQUssQ0FBQztBQUFBLE1BQ3RDLENBQUM7QUFDRDtBQUFBLElBQ0o7QUFFQSxRQUFJLFNBQVMsU0FBUztBQUNsQixZQUFNLFFBQVEsU0FBUztBQUN2QixZQUFNQyxTQUFRLGVBQWU7QUFDN0IsVUFBSSxDQUFDLFNBQVMsQ0FBQ0EsT0FBTztBQUN0QiwyQkFBcUJBLE1BQUs7QUFDMUIsaUJBQVcsU0FBUyxVQUFVQSxNQUFLO0FBQ25DLFlBQU0sTUFBTTtBQUNaLFlBQU0sU0FBUztBQUNmLFlBQU0sUUFBUSxXQUFXO0FBQ3pCLFlBQU0sS0FBSztBQUNYLHFCQUFlLGtCQUFrQixDQUFDO0FBQ2xDO0FBQUEsUUFBVSxDQUFDLGFBQ1AsU0FBUyxRQUFRLE9BQU8sRUFBRSxHQUFHLFVBQVUsT0FBTyxLQUFLLElBQUk7QUFBQSxNQUMzRDtBQUNBLFdBQUssbUJBQW1CLE9BQU8sT0FBTyxFQUFFLFFBQVEsTUFBTTtBQUNsRCxhQUFLLE1BQ0EsS0FBSyxFQUNMLEtBQUssTUFBTSxXQUFXLElBQUksQ0FBQyxFQUMzQixNQUFNLE1BQU0sV0FBVyxLQUFLLENBQUM7QUFBQSxNQUN0QyxDQUFDO0FBQ0Q7QUFBQSxJQUNKO0FBRUEsUUFBSSxTQUFTLFNBQVM7QUFDbEIsWUFBTSxRQUFRLFNBQVM7QUFDdkIsVUFBSSxDQUFDLE1BQU87QUFDWixZQUFNLFNBQVMsTUFBTTtBQUNqQixtQkFBVyxTQUFTLFVBQVUsS0FBSztBQUNuQyxtQkFBVyxTQUFTLGNBQWM7QUFDbEMsbUJBQVcsSUFBSTtBQUNmLFlBQUksZ0JBQWlCLEtBQUksZ0JBQWdCLEdBQUc7QUFBQSxNQUNoRDtBQUNBLFlBQU0sVUFBVSxNQUFNO0FBQ2xCLGlCQUFTLDhCQUE4QjtBQUN2QyxZQUFJLGdCQUFpQixLQUFJLGdCQUFnQixHQUFHO0FBQzVDLFlBQUksZ0JBQWdCLGFBQWMsZUFBYyxZQUFZO0FBQUEsaUJBQ25ELENBQUMsYUFBYyxlQUFjLElBQUk7QUFBQSxNQUM5QztBQUNBLFlBQU0sTUFBTTtBQUNaO0FBQUEsSUFDSjtBQUVBLFVBQU0sUUFBUSxlQUFlO0FBQzdCLFFBQUksQ0FBQyxNQUFPO0FBQ1osUUFBSTtBQUNBLFlBQU0sU0FBUyxNQUFNLEtBQUssTUFBTSxHQUFHLE9BQU8sSUFBSSxFQUFFLFlBQVk7QUFDNUQscUJBQWUsT0FBTyxJQUFJLFdBQVcsTUFBTSxDQUFDO0FBQzVDLGlCQUFXLFNBQVMsVUFBVSxLQUFLO0FBQ25DLGlCQUFXLFNBQVMsY0FBYztBQUNsQyxpQkFBVyxJQUFJO0FBQ2YsVUFBSSxDQUFDLFlBQWEsWUFBVyxTQUFTLGNBQWMsSUFBSTtBQUN4RCxVQUFJLGdCQUFpQixLQUFJLGdCQUFnQixHQUFHO0FBQUEsSUFDaEQsUUFBUTtBQUNKLGVBQVMsMkJBQTJCO0FBQ3BDLFVBQUksaUJBQWlCO0FBQ2pCLFlBQUksZ0JBQWdCLEdBQUc7QUFBQSxNQUMzQixXQUFXLGFBQWEsWUFBWSxLQUFLO0FBQ3JDLFlBQUksZ0JBQWdCLEdBQUc7QUFDdkIscUJBQWEsVUFBVTtBQUFBLE1BQzNCO0FBQ0EsVUFBSSxnQkFBZ0IsYUFBYyxlQUFjLFlBQVk7QUFBQSxVQUN2RCxlQUFjLElBQUk7QUFBQSxJQUMzQjtBQUFBLEVBQ0o7QUFFQSxXQUFTLGFBQWE7QUFDbEIsUUFBSSxDQUFDLFFBQVM7QUFDZCxRQUFJLGVBQWUsU0FBUztBQUN4QixZQUFNLFFBQVEsU0FBUztBQUN2QixVQUFJLENBQUMsTUFBTztBQUNaLFdBQUssbUJBQW1CLE9BQU8sT0FBTztBQUN0QyxVQUFJLE1BQU0sT0FBUSxNQUFLLE1BQU0sS0FBSztBQUFBLFVBQzdCLE9BQU0sTUFBTTtBQUNqQjtBQUFBLElBQ0o7QUFDQSxRQUFJLGVBQWUsU0FBUztBQUN4QixZQUFNLFFBQVEsU0FBUztBQUN2QixVQUFJLENBQUMsTUFBTztBQUNaLFdBQUssbUJBQW1CLE9BQU8sT0FBTztBQUN0QyxVQUFJLE1BQU0sT0FBUSxNQUFLLE1BQU0sS0FBSztBQUFBLFVBQzdCLE9BQU0sTUFBTTtBQUFBLElBQ3JCO0FBQUEsRUFDSjtBQUVBLFdBQVMsVUFBVSxPQUFlO0FBQzlCLFFBQUksZUFBZSxXQUFXLFNBQVMsU0FBUztBQUM1QyxlQUFTLFFBQVEsY0FBYztBQUFBLElBQ25DLFdBQVcsZUFBZSxXQUFXLFNBQVMsU0FBUztBQUNuRCxlQUFTLFFBQVEsY0FBYztBQUFBLElBQ25DO0FBQUEsRUFDSjtBQUVBLFdBQVMsZUFBZSxNQUFjO0FBQ2xDLFVBQU0sVUFBVSxLQUFLLElBQUksR0FBRyxLQUFLLElBQUksR0FBRyxJQUFJLENBQUM7QUFDN0MsUUFBSSxVQUFVLEtBQU8sZUFBYyxVQUFVO0FBQzdDLGNBQVUsT0FBTztBQUFBLEVBQ3JCO0FBRUEsV0FBUyxhQUFhO0FBQ2xCLFFBQUksU0FBUyxNQUFPO0FBQ2hCLG9CQUFjLFVBQVU7QUFDeEIsZ0JBQVUsQ0FBQztBQUNYO0FBQUEsSUFDSjtBQUNBLGNBQVUsY0FBYyxVQUFVLE9BQVEsY0FBYyxVQUFVLEdBQUc7QUFBQSxFQUN6RTtBQUVBLFdBQVMsa0JBQWtCO0FBQ3ZCLGdCQUFZLGVBQWUsS0FBSztBQUFBLEVBQ3BDO0FBRUEsaUJBQWUsbUJBQW1CO0FBQzlCLFVBQU0sUUFBUSxTQUFTO0FBQ3ZCLFFBQUksQ0FBQyxNQUFPO0FBQ1osUUFBSTtBQUNBLFVBQUksU0FBUyxzQkFBc0IsT0FBTztBQUN0QyxjQUFNLFNBQVMsZUFBZTtBQUFBLE1BQ2xDLFdBQVcsU0FBUyxtQkFBbUI7QUFDbkMsY0FBTSxTQUFTLGVBQWU7QUFDOUIsY0FBTSxNQUFNLGtCQUFrQjtBQUFBLE1BQ2xDLE9BQU87QUFDSCxjQUFNLE1BQU0sa0JBQWtCO0FBQUEsTUFDbEM7QUFBQSxJQUNKLFFBQVE7QUFDSixlQUFTLG1DQUFtQztBQUFBLElBQ2hEO0FBQUEsRUFDSjtBQUVBLFdBQVMsY0FDTCxPQUNBLE9BQU8sV0FBVyxRQUFRLE1BQzVCO0FBQ0UsVUFBTSxRQUFRLFNBQVM7QUFDdkIsUUFBSSxDQUFDLE1BQU87QUFDWixVQUFNLE9BQU8sTUFBTSxzQkFBc0I7QUFDekMsVUFBTUMsS0FBSSxLQUFLO0FBQUEsTUFDWDtBQUFBLE1BQ0EsS0FBSyxJQUFJLElBQUksTUFBTSxVQUFVLEtBQUssUUFBUSxLQUFLLEtBQUs7QUFBQSxJQUN4RDtBQUNBLFVBQU0sT0FBTyxLQUFLO0FBQUEsTUFDZDtBQUFBLE1BQ0EsS0FBSyxJQUFJLElBQUksTUFBTSxVQUFVLEtBQUssT0FBTyxLQUFLLE1BQU07QUFBQSxJQUN4RDtBQUNBLFVBQU1DLEtBQUksSUFBSTtBQUNkLFVBQU0sTUFBTSxZQUFZLElBQUk7QUFDNUIsVUFBTSxVQUFVLEtBQUssSUFBSSxHQUFHLE1BQU0sZUFBZSxRQUFRLEVBQUU7QUFDM0QsVUFBTSxhQUFhRCxLQUFJLGVBQWUsUUFBUSxNQUFNLEtBQUs7QUFDekQsVUFBTSxhQUFhQyxLQUFJLGVBQWUsUUFBUSxNQUFNLEtBQUs7QUFDekQsbUJBQWUsVUFBVSxFQUFFLEdBQUFELElBQUcsR0FBQUMsSUFBRyxJQUFJLElBQUk7QUFFekMsUUFBSSxXQUFXLFdBQVcsTUFBTTtBQUM1QixZQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsUUFBUTtBQUM5QyxZQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsUUFBUTtBQUM5QyxVQUFJLEtBQUssS0FBSyxLQUFLLEtBQUssR0FBSSxZQUFXLFFBQVEsUUFBUTtBQUFBLElBQzNEO0FBRUEsZUFBVyxVQUFVLEVBQUUsR0FBQUQsSUFBRyxHQUFBQyxJQUFHLFdBQVcsV0FBVyxNQUFNLFFBQVEsS0FBSztBQUN0RSxlQUFXLFNBQVMsV0FBVyxXQUFXLE9BQU87QUFDakQsUUFBSSxVQUFVLFNBQVM7QUFDbkIsZ0JBQVUsUUFBUSxNQUFNLFVBQVU7QUFDbEMsZ0JBQVUsUUFBUSxNQUFNLE9BQU8sR0FBRyxNQUFNLFVBQVUsS0FBSyxJQUFJO0FBQzNELGdCQUFVLFFBQVEsTUFBTSxNQUFNLEdBQUcsTUFBTSxVQUFVLEtBQUssR0FBRztBQUN6RCxZQUFNLE9BQU8sS0FBSyxPQUFPLFlBQVk7QUFDckMsZ0JBQVUsUUFBUSxNQUFNLFFBQVEsR0FBRyxJQUFJO0FBQ3ZDLGdCQUFVLFFBQVEsTUFBTSxTQUFTLEdBQUcsSUFBSTtBQUFBLElBQzVDO0FBQUEsRUFDSjtBQUVBLFdBQVMsa0JBQWtCLE9BQXFCO0FBQzVDLFVBQU0sVUFBVSxXQUFXO0FBQzNCLGVBQVcsVUFBVTtBQUNyQixrQkFBYyxPQUFPLEtBQUs7QUFDMUIsUUFBSSxDQUFDLFdBQVcsUUFBUSxNQUFPO0FBQy9CLFFBQUksWUFBWSxJQUFJLElBQUksUUFBUSxLQUFLLElBQUs7QUFDMUMsUUFBSSxDQUFDLFFBQVM7QUFDZCxlQUFXO0FBQUEsRUFDZjtBQUVBLFdBQVMsb0JBQW9CO0FBQ3pCLGVBQVcsVUFBVTtBQUFBLE1BQ2pCLEdBQUcsV0FBVztBQUFBLE1BQ2QsTUFBTTtBQUFBLE1BQ04sUUFBUTtBQUFBLElBQ1o7QUFDQSxlQUFXLFNBQVMsV0FBVyxXQUFXLE9BQU87QUFDakQsUUFBSSxVQUFVLFFBQVMsV0FBVSxRQUFRLE1BQU0sVUFBVTtBQUFBLEVBQzdEO0FBRUEsV0FBUyxvQkFBb0IsVUFHM0I7QUFFRSxVQUFNLFlBQVksV0FDWjtBQUFBLE1BQ0k7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0osSUFDQTtBQUFBLE1BQ0k7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDSjtBQUNOLGVBQVcsWUFBWSxXQUFXO0FBQzlCLFVBQUksY0FBYyxnQkFBZ0IsUUFBUSxHQUFHO0FBQ3pDLGVBQU87QUFBQSxVQUNIO0FBQUEsVUFDQSxXQUFXLFNBQVMsV0FBVyxXQUFXLElBQ3BDLFFBQ0E7QUFBQSxRQUNWO0FBQUEsTUFDSjtBQUFBLElBQ0o7QUFDQSxXQUFPLEVBQUUsVUFBVSxJQUFJLFdBQVcsT0FBTztBQUFBLEVBQzdDO0FBRUEsV0FBUyxxQkFBeUM7QUFDOUMsUUFBSSxhQUFhLFNBQVM7QUFDdEIsYUFBTyxhQUFhLFFBQVEsZUFBZTtBQUFBLElBQy9DO0FBQ0EsUUFBSSxlQUFlLFNBQVM7QUFDeEIsWUFBTSxRQUFRLFNBQVM7QUFHdkIsYUFBTyxPQUFPLGdCQUFnQixFQUFFLGVBQWUsS0FBSyxDQUFDO0FBQUEsSUFDekQ7QUFDQSxRQUFJLGVBQWUsU0FBUztBQUN4QixZQUFNLFFBQVEsU0FBUztBQUd2QixhQUFPLE9BQU8sZ0JBQWdCLEVBQUUsZUFBZSxLQUFLLENBQUM7QUFBQSxJQUN6RDtBQUNBLFdBQU8sQ0FBQztBQUFBLEVBQ1o7QUFFQSxXQUFTLHlCQUF5QixRQUFpQjtBQUMvQyxVQUFNLFVBQVUsV0FBVztBQUMzQixVQUFNLFFBQVEsU0FBUztBQUN2QixRQUFJLENBQUMsV0FBVyxDQUFDLE1BQU87QUFDeEIsWUFBUSxpQkFBaUIsU0FBUyxPQUFPLElBQUk7QUFDN0MsVUFBTSxPQUFPLE1BQU0sc0JBQXNCO0FBQ3pDLFlBQVEsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNO0FBQUEsRUFDMUM7QUFFQSxXQUFTLGlCQUFpQjtBQUN0QixVQUFNLFNBQVMsVUFBVTtBQUN6QixRQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsVUFBVztBQUV4Qyw2QkFBeUIsSUFBSTtBQUU3QixVQUFNLFNBQVMsT0FBTyxjQUFjLEVBQUU7QUFDdEMsZUFBVyxTQUFTLG1CQUFtQixFQUFHLFFBQU8sU0FBUyxLQUFLO0FBRS9ELFVBQU0sU0FBUyxvQkFBb0IsT0FBTyxlQUFlLEVBQUUsU0FBUyxDQUFDO0FBQ3JFLFVBQU0sV0FBVyxPQUFPLGVBQWUsRUFBRSxTQUFTO0FBQ2xELFFBQUk7QUFDQSxZQUFNLFVBQWdDO0FBQUEsUUFDbEMsb0JBQW9CO0FBQUEsUUFDcEIsb0JBQW9CLFdBQVcsUUFBVTtBQUFBLE1BQzdDO0FBQ0EsVUFBSSxPQUFPLFNBQVUsU0FBUSxXQUFXLE9BQU87QUFFL0MsWUFBTSxXQUFXLE9BQU8sV0FDbEIsSUFBSSxjQUFjLFFBQVEsT0FBTyxJQUNqQyxJQUFJLGNBQWMsUUFBUTtBQUFBLFFBQ3RCLG9CQUFvQjtBQUFBLFFBQ3BCLG9CQUFvQixXQUFXLFFBQVU7QUFBQSxNQUM3QyxDQUFDO0FBQ1AsWUFBTSxhQUFhLFNBQVMsWUFBWSxPQUFPLFVBQVU7QUFBQSxRQUNyRDtBQUFBLE1BQ0osSUFDTSxRQUNBLE9BQU87QUFDYixnQkFBVSxVQUFVLENBQUM7QUFDckIsZUFBUyxrQkFBa0IsQ0FBQyxVQUFVO0FBQ2xDLFlBQUksTUFBTSxLQUFLLE9BQU8sRUFBRyxXQUFVLFFBQVEsS0FBSyxNQUFNLElBQUk7QUFBQSxNQUM5RDtBQUNBLGVBQVMsU0FBUyxNQUFNO0FBQ3BCLGNBQU0sT0FBTyxJQUFJLEtBQUssVUFBVSxTQUFTO0FBQUEsVUFDckMsTUFDSSxTQUFTLGFBQ1IsY0FBYyxRQUFRLGNBQWM7QUFBQSxRQUM3QyxDQUFDO0FBQ0QsY0FBTSxNQUFNLElBQUksZ0JBQWdCLElBQUk7QUFDcEMsY0FBTSxTQUFTLFNBQVMsY0FBYyxHQUFHO0FBQ3pDLGVBQU8sT0FBTztBQUNkLGVBQU8sV0FBVyxHQUFHLFNBQVMsUUFBUSxZQUFZLEVBQUUsS0FBSyxPQUFPLGFBQWEsU0FBUztBQUN0RixlQUFPLE1BQU07QUFDYixtQkFBVyxNQUFNLElBQUksZ0JBQWdCLEdBQUcsR0FBRyxHQUFJO0FBQy9DLG1CQUFXLFNBQVMsT0FBTyxVQUFVLEdBQUc7QUFDcEMsY0FBSSxNQUFNLFNBQVMsUUFBUyxPQUFNLEtBQUs7QUFBQSxRQUMzQztBQUNBLGlDQUF5QixLQUFLO0FBQzlCLHFCQUFhLEtBQUs7QUFDbEIsb0JBQVksVUFBVTtBQUFBLE1BQzFCO0FBQ0EsZUFBUyxNQUFNLEdBQUk7QUFDbkIsa0JBQVksVUFBVTtBQUN0QixtQkFBYSxJQUFJO0FBQ2pCLFVBQUksZUFBZSxXQUFXLFNBQVMsU0FBUztBQUM1QyxhQUFLLFNBQVMsUUFBUSxLQUFLO0FBQy9CLFVBQUksZUFBZSxXQUFXLFNBQVMsU0FBUztBQUM1QyxhQUFLLFNBQVMsUUFBUSxLQUFLO0FBQUEsSUFDbkMsUUFBUTtBQUNKLCtCQUF5QixLQUFLO0FBQzlCLGVBQVMsNkNBQTZDO0FBQUEsSUFDMUQ7QUFBQSxFQUNKO0FBRUEsU0FDSSxnQkFBQU47QUFBQSxJQUFDO0FBQUE7QUFBQSxNQUNHLFdBQVU7QUFBQSxNQUNWLE9BQU8sRUFBRSxZQUFZLHFDQUFxQztBQUFBLE1BRTFEO0FBQUEsd0JBQUFBO0FBQUEsVUFBQztBQUFBO0FBQUEsWUFDRyxXQUFVO0FBQUEsWUFDVixPQUFPO0FBQUEsY0FDSCxZQUNJO0FBQUEsWUFDUjtBQUFBO0FBQUEsUUFDSjtBQUFBLFFBRUEsZ0JBQUFBO0FBQUEsVUFBQztBQUFBO0FBQUEsWUFDRyxLQUFLO0FBQUEsWUFDTCxRQUFPO0FBQUEsWUFDUCxXQUFVO0FBQUEsWUFDVixNQUFLO0FBQUEsWUFDTCxVQUFVLENBQUMsVUFDUCxLQUFLLE9BQU8sTUFBTSxjQUFjLFFBQVEsQ0FBQyxLQUFLLE1BQVM7QUFBQTtBQUFBLFFBRS9EO0FBQUEsUUFFQSxnQkFBQUE7QUFBQSxVQUFDO0FBQUE7QUFBQSxZQUNHLEtBQUs7QUFBQSxZQUNMLFdBQVU7QUFBQSxZQUNWLE1BQUk7QUFBQSxZQUNKLGNBQWMsQ0FBQyxVQUNYLFFBQVEsTUFBTSxjQUFjLFdBQVc7QUFBQSxZQUUzQyxrQkFBa0IsQ0FBQyxVQUNmLFlBQVksTUFBTSxjQUFjLFFBQVE7QUFBQSxZQUU1QyxRQUFRLE1BQU0sV0FBVyxJQUFJO0FBQUEsWUFDN0IsU0FBUyxNQUFNLFdBQVcsS0FBSztBQUFBO0FBQUEsUUFDbkM7QUFBQSxRQUNBLGdCQUFBQSxHQUFDLFNBQUksS0FBSyxVQUFVLEtBQUksSUFBRyxXQUFVLFlBQVc7QUFBQSxRQUNoRCxnQkFBQUEsR0FBQyxZQUFPLEtBQUssZ0JBQWdCLFdBQVUsWUFBVztBQUFBLFFBRWxELGdCQUFBQTtBQUFBLFVBQUM7QUFBQTtBQUFBLFlBQ0csV0FBVyx5REFBeUQsYUFBYSxtQkFBbUIsZ0JBQWdCO0FBQUEsWUFFbkg7QUFBQSwyQkFDRyxnQkFBQUEsR0FBQyxZQUFPLFdBQVUsMEVBQ2Q7QUFBQSxnQ0FBQUEsR0FBQyxTQUFJLFdBQVUsd0JBQ1gsMEJBQUFBO0FBQUEsa0JBQUM7QUFBQTtBQUFBLG9CQUNHLFdBQVU7QUFBQSxvQkFDVixPQUFPO0FBQUEsc0JBQ0gsWUFBWTtBQUFBLG9CQUNoQjtBQUFBLG9CQUNIO0FBQUE7QUFBQSxnQkFFRCxHQUNKO0FBQUEsZ0JBQ0EsZ0JBQUFBLEdBQUMsU0FBSSxXQUFVLG1GQUNYO0FBQUEsa0NBQUFBO0FBQUEsb0JBQUM7QUFBQTtBQUFBLHNCQUNHLFdBQVcsNEJBQTRCLFlBQVksMEJBQTBCLGtCQUFrQjtBQUFBO0FBQUEsa0JBQ25HO0FBQUEsa0JBQ0EsZ0JBQUFBO0FBQUEsb0JBQUM7QUFBQTtBQUFBLHNCQUNHLE1BQUs7QUFBQSxzQkFDTCxnQkFBYztBQUFBLHNCQUNkLGNBQVc7QUFBQSxzQkFDWCxPQUFNO0FBQUEsc0JBQ04sV0FBVTtBQUFBLHNCQUNWLFNBQVMsTUFBTSxjQUFjLEtBQUs7QUFBQSxzQkFDckM7QUFBQTtBQUFBLGtCQUVEO0FBQUEsbUJBQ0o7QUFBQSxpQkFDSixJQUVBLGdCQUFBQSxHQUFDLFlBQU8sV0FBVSwwQ0FDZDtBQUFBLGdDQUFBQTtBQUFBLGtCQUFDO0FBQUE7QUFBQSxvQkFDRyxXQUFVO0FBQUEsb0JBQ1YsT0FBTztBQUFBLHNCQUNILFlBQVk7QUFBQSxvQkFDaEI7QUFBQSxvQkFDSDtBQUFBO0FBQUEsZ0JBRUQ7QUFBQSxnQkFDQSxnQkFBQUE7QUFBQSxrQkFBQztBQUFBO0FBQUEsb0JBQ0csTUFBSztBQUFBLG9CQUNMLGdCQUFjO0FBQUEsb0JBQ2QsY0FBVztBQUFBLG9CQUNYLE9BQU07QUFBQSxvQkFDTixXQUFVO0FBQUEsb0JBQ1YsU0FBUyxNQUFNLGNBQWMsSUFBSTtBQUFBLG9CQUVqQztBQUFBLHNDQUFBQTtBQUFBLHdCQUFDO0FBQUE7QUFBQSwwQkFDRyxXQUFXLDRCQUE0QixZQUFZLDBCQUEwQixrQkFBa0I7QUFBQTtBQUFBLHNCQUNuRztBQUFBLHNCQUFFO0FBQUE7QUFBQTtBQUFBLGdCQUVOO0FBQUEsaUJBQ0o7QUFBQSxjQUdKLGdCQUFBQTtBQUFBLGdCQUFDO0FBQUE7QUFBQSxrQkFDRyxXQUFXLFFBQVEsYUFBYSx5REFBeUQsZ0JBQWdCO0FBQUEsa0JBRXpHO0FBQUEsb0NBQUFBO0FBQUEsc0JBQUM7QUFBQTtBQUFBLHdCQUNHLEtBQUs7QUFBQSx3QkFDTCxXQUFXLDRFQUNQLGFBQ00saUNBQ0EsOEJBQ1Y7QUFBQSx3QkFDQSxZQUFZLENBQUMsVUFBVSxNQUFNLGVBQWU7QUFBQSx3QkFDNUMsUUFBUSxDQUFDLFVBQVU7QUFDZixnQ0FBTSxlQUFlO0FBQ3JCLCtCQUFLLE9BQU8sTUFBTSxjQUFjLFFBQVEsQ0FBQyxDQUFDO0FBQUEsd0JBQzlDO0FBQUEsd0JBQ0EsZUFBZSxDQUFDLFVBQ1osY0FBYyxLQUFnQztBQUFBLHdCQUVsRCxlQUFlLENBQUMsVUFBVTtBQUN0QixnQ0FBTSxjQUFjO0FBQUEsNEJBQ2hCLE1BQU07QUFBQSwwQkFDVjtBQUNBLHFDQUFXLFVBQVU7QUFBQSw0QkFDakIsR0FBRyxNQUFNO0FBQUEsNEJBQ1QsR0FBRyxNQUFNO0FBQUEsNEJBQ1QsSUFBSSxZQUFZLElBQUk7QUFBQSw0QkFDcEIsT0FBTztBQUFBLDBCQUNYO0FBQ0E7QUFBQSw0QkFDSTtBQUFBLDRCQUNBO0FBQUEsMEJBQ0o7QUFBQSx3QkFDSjtBQUFBLHdCQUNBLGFBQWEsQ0FBQyxVQUNWLGtCQUFrQixLQUFnQztBQUFBLHdCQUV0RCxpQkFBaUIsTUFBTTtBQUNuQixxQ0FBVyxVQUFVO0FBQ3JCLDRDQUFrQjtBQUFBLHdCQUN0QjtBQUFBLHdCQUNBLGdCQUFnQjtBQUFBLHdCQUVoQjtBQUFBLDBDQUFBQTtBQUFBLDRCQUFDO0FBQUE7QUFBQSw4QkFDRyxLQUFLO0FBQUEsOEJBQ0wsV0FBVTtBQUFBLDhCQUNWLE1BQUk7QUFBQSw4QkFDSixhQUFXO0FBQUEsOEJBQ1gsY0FBYyxDQUFDLFVBQ1gsUUFBUSxNQUFNLGNBQWMsV0FBVztBQUFBLDhCQUUzQyxrQkFBa0IsQ0FBQyxVQUNmLFlBQVksTUFBTSxjQUFjLFFBQVE7QUFBQSw4QkFFNUMsUUFBUSxNQUFNLFdBQVcsSUFBSTtBQUFBLDhCQUM3QixTQUFTLE1BQU0sV0FBVyxLQUFLO0FBQUE7QUFBQSwwQkFDbkM7QUFBQSwwQkFDQSxnQkFBQUE7QUFBQSw0QkFBQztBQUFBO0FBQUEsOEJBQ0csS0FBSztBQUFBLDhCQUNMLFdBQVU7QUFBQTtBQUFBLDBCQUNkO0FBQUEsMEJBRUEsZ0JBQUFBO0FBQUEsNEJBQUM7QUFBQTtBQUFBLDhCQUNHLEtBQUs7QUFBQSw4QkFDTCxXQUFVO0FBQUEsOEJBQ1YsT0FBTztBQUFBLGdDQUNILFdBQ0k7QUFBQSw4QkFDUjtBQUFBLDhCQUVBLDBCQUFBQSxHQUFDLFVBQUssV0FBVSxvRkFBbUY7QUFBQTtBQUFBLDBCQUN2RztBQUFBLDBCQUVDLENBQUMsWUFDRSxnQkFBQUE7QUFBQSw0QkFBQztBQUFBO0FBQUEsOEJBQ0csV0FBVTtBQUFBLDhCQUNWLE1BQUs7QUFBQSw4QkFDTCxVQUFVO0FBQUEsOEJBQ1YsU0FBUyxNQUFNLFFBQVEsU0FBUyxNQUFNO0FBQUEsOEJBQ3RDLFdBQVcsQ0FBQyxVQUFVO0FBQ2xCLG9DQUNJLE1BQU0sUUFBUSxXQUNkLE1BQU0sUUFBUSxLQUNoQjtBQUNFLHdDQUFNLGVBQWU7QUFDckIsMENBQVEsU0FBUyxNQUFNO0FBQUEsZ0NBQzNCO0FBQUEsOEJBQ0o7QUFBQSw4QkFDQSxlQUFlLENBQUMsVUFDWixNQUFNLGdCQUFnQjtBQUFBLDhCQUUxQixhQUFhLENBQUMsVUFBVSxNQUFNLGdCQUFnQjtBQUFBLDhCQUU5QztBQUFBLGdEQUFBQSxHQUFDLFVBQUssV0FBVSxrSEFBaUgsb0JBRWpJO0FBQUEsZ0NBQ0EsZ0JBQUFBO0FBQUEsa0NBQUM7QUFBQTtBQUFBLG9DQUNHLFdBQVU7QUFBQSxvQ0FDVixPQUFPO0FBQUEsc0NBQ0gsWUFDSTtBQUFBLG9DQUNSO0FBQUEsb0NBQ0g7QUFBQTtBQUFBLGdDQUVEO0FBQUEsZ0NBQ0EsZ0JBQUFBLEdBQUMsVUFBSyxXQUFVLGlFQUFnRSx1REFFaEY7QUFBQTtBQUFBO0FBQUEsMEJBQ0osSUFDQTtBQUFBLDBCQUVILGFBQ0csZ0JBQUFBO0FBQUEsNEJBQUM7QUFBQTtBQUFBLDhCQUNHLFdBQVcsd0ZBQ1AsWUFBWSxXQUFXLE9BQzNCO0FBQUEsOEJBRUE7QUFBQSxnREFBQUEsR0FBQyxVQUFLLFdBQVUsZ0RBQStDLDJCQUUvRDtBQUFBLGdDQUNBLGdCQUFBQSxHQUFDLFVBQUssV0FBVSxtRUFFUjtBQUFBLCtDQUFhO0FBQUEsb0NBQ1QsQ0FBQyxTQUNHLEtBQUssVUFBVSxPQUFPO0FBQUEsa0NBQzlCLEdBQUc7QUFBQSxrQ0FDTDtBQUFBLGtDQUFJO0FBQUEsbUNBRVY7QUFBQSxnQ0FDQyxhQUNHLGdCQUFBQTtBQUFBLGtDQUFDO0FBQUE7QUFBQSxvQ0FDRyxXQUFXLGdDQUNQLGVBQWUsVUFBVSxZQUNuQix1Q0FDQSwrQkFDVjtBQUFBLG9DQUVDLDBCQUNLLGlCQUFpQixXQUFXLElBQzVCLFlBQ0UsR0FBRyxZQUFZLFVBQVUsQ0FBQyxXQUMxQixZQUFZLFVBQVU7QUFBQTtBQUFBLGdDQUNsQyxJQUNBO0FBQUE7QUFBQTtBQUFBLDBCQUNSLElBQ0E7QUFBQSwwQkFFSCxZQUNHLGdCQUFBQSxHQUFDLFNBQUksV0FBVSxzREFDWDtBQUFBLDRDQUFBQTtBQUFBLDhCQUFDO0FBQUE7QUFBQSxnQ0FDRyxNQUFLO0FBQUEsZ0NBQ0wsY0FBVztBQUFBLGdDQUNYLE9BQU07QUFBQSxnQ0FDTixXQUFVO0FBQUEsZ0NBQ1YsU0FBUyxDQUFDLFVBQVU7QUFDaEIsd0NBQU0sZ0JBQWdCO0FBQ3RCLDZDQUFXO0FBQUEsZ0NBQ2Y7QUFBQSxnQ0FDQSxlQUFlLENBQUMsVUFDWixNQUFNLGdCQUFnQjtBQUFBLGdDQUUxQixhQUFhLENBQUMsVUFDVixNQUFNLGdCQUFnQjtBQUFBLGdDQUcxQiwwQkFBQUE7QUFBQSxrQ0FBQztBQUFBO0FBQUEsb0NBQ0csT0FBTTtBQUFBLG9DQUNOLFFBQU87QUFBQSxvQ0FDUCxTQUFRO0FBQUEsb0NBQ1IsTUFBSztBQUFBLG9DQUNMLFFBQU87QUFBQSxvQ0FDUCxhQUFZO0FBQUEsb0NBQ1osZUFBYztBQUFBLG9DQUNkLGVBQVk7QUFBQSxvQ0FFWiwwQkFBQUEsR0FBQyxVQUFLLEdBQUUsd0JBQXVCO0FBQUE7QUFBQSxnQ0FDbkM7QUFBQTtBQUFBLDRCQUNKO0FBQUEsNEJBQ0EsZ0JBQUFBO0FBQUEsOEJBQUM7QUFBQTtBQUFBLGdDQUNHLE1BQUs7QUFBQSxnQ0FDTCxjQUFXO0FBQUEsZ0NBQ1gsT0FBTTtBQUFBLGdDQUNOLFdBQVU7QUFBQSxnQ0FDVixTQUFTLENBQUMsVUFBVTtBQUNoQix3Q0FBTSxnQkFBZ0I7QUFDdEIsMENBQVEsU0FBUyxNQUFNO0FBQUEsZ0NBQzNCO0FBQUEsZ0NBQ0EsZUFBZSxDQUFDLFVBQ1osTUFBTSxnQkFBZ0I7QUFBQSxnQ0FFMUIsYUFBYSxDQUFDLFVBQ1YsTUFBTSxnQkFBZ0I7QUFBQSxnQ0FHMUIsMEJBQUFBO0FBQUEsa0NBQUM7QUFBQTtBQUFBLG9DQUNHLE9BQU07QUFBQSxvQ0FDTixRQUFPO0FBQUEsb0NBQ1AsU0FBUTtBQUFBLG9DQUNSLE1BQUs7QUFBQSxvQ0FDTCxRQUFPO0FBQUEsb0NBQ1AsYUFBWTtBQUFBLG9DQUNaLGVBQWM7QUFBQSxvQ0FDZCxlQUFZO0FBQUEsb0NBRVo7QUFBQSxzREFBQUEsR0FBQyxVQUFLLEdBQUUsWUFBVztBQUFBLHNDQUNuQixnQkFBQUEsR0FBQyxVQUFLLEdBQUUsZ0JBQWU7QUFBQSxzQ0FDdkIsZ0JBQUFBLEdBQUMsVUFBSyxHQUFFLFlBQVc7QUFBQTtBQUFBO0FBQUEsZ0NBQ3ZCO0FBQUE7QUFBQSw0QkFDSjtBQUFBLDZCQUNKLElBQ0E7QUFBQSwwQkFFSCxZQUNHLGdCQUFBQSxHQUFDLFNBQUksV0FBVSx1REFDWDtBQUFBLDRDQUFBQTtBQUFBLDhCQUFDO0FBQUE7QUFBQSxnQ0FDRyxNQUFLO0FBQUEsZ0NBQ0wsY0FBVztBQUFBLGdDQUNYLE9BQU07QUFBQSxnQ0FDTixXQUFVO0FBQUEsZ0NBQ1YsU0FBUyxDQUFDLFVBQVU7QUFDaEIsd0NBQU0sZ0JBQWdCO0FBQ3RCLGtEQUFnQjtBQUFBLGdDQUNwQjtBQUFBLGdDQUNBLGVBQWUsQ0FBQyxVQUNaLE1BQU0sZ0JBQWdCO0FBQUEsZ0NBRTFCLGFBQWEsQ0FBQyxVQUNWLE1BQU0sZ0JBQWdCO0FBQUEsZ0NBRzFCLDBCQUFBQTtBQUFBLGtDQUFDO0FBQUE7QUFBQSxvQ0FDRyxPQUFNO0FBQUEsb0NBQ04sUUFBTztBQUFBLG9DQUNQLFNBQVE7QUFBQSxvQ0FDUixNQUFLO0FBQUEsb0NBQ0wsUUFBTztBQUFBLG9DQUNQLGFBQVk7QUFBQSxvQ0FDWixlQUFjO0FBQUEsb0NBQ2QsZUFBWTtBQUFBLG9DQUVaO0FBQUEsc0RBQUFBLEdBQUMsVUFBSyxHQUFFLHlCQUF3QjtBQUFBLHNDQUNoQyxnQkFBQUEsR0FBQyxVQUFLLEdBQUUsWUFBVztBQUFBO0FBQUE7QUFBQSxnQ0FDdkI7QUFBQTtBQUFBLDRCQUNKO0FBQUEsNEJBQ0EsZ0JBQUFBO0FBQUEsOEJBQUM7QUFBQTtBQUFBLGdDQUNHLE1BQUs7QUFBQSxnQ0FDTCxjQUNJLGFBQ00sb0JBQ0E7QUFBQSxnQ0FFVixPQUNJLGFBQ00sb0JBQ0E7QUFBQSxnQ0FFVixXQUFVO0FBQUEsZ0NBQ1YsU0FBUyxDQUFDLFVBQVU7QUFDaEIsd0NBQU0sZ0JBQWdCO0FBQ3RCLHVDQUFLLGlCQUFpQjtBQUFBLGdDQUMxQjtBQUFBLGdDQUNBLGVBQWUsQ0FBQyxVQUNaLE1BQU0sZ0JBQWdCO0FBQUEsZ0NBRTFCLGFBQWEsQ0FBQyxVQUNWLE1BQU0sZ0JBQWdCO0FBQUEsZ0NBR3pCLHVCQUNHLGdCQUFBQTtBQUFBLGtDQUFDO0FBQUE7QUFBQSxvQ0FDRyxPQUFNO0FBQUEsb0NBQ04sUUFBTztBQUFBLG9DQUNQLFNBQVE7QUFBQSxvQ0FDUixNQUFLO0FBQUEsb0NBQ0wsUUFBTztBQUFBLG9DQUNQLGFBQVk7QUFBQSxvQ0FDWixlQUFjO0FBQUEsb0NBQ2QsZUFBWTtBQUFBLG9DQUVaO0FBQUEsc0RBQUFBLEdBQUMsVUFBSyxHQUFFLFlBQVc7QUFBQSxzQ0FDbkIsZ0JBQUFBLEdBQUMsVUFBSyxHQUFFLGVBQWM7QUFBQSxzQ0FDdEIsZ0JBQUFBLEdBQUMsVUFBSyxHQUFFLGNBQWE7QUFBQSxzQ0FDckIsZ0JBQUFBLEdBQUMsVUFBSyxHQUFFLGFBQVk7QUFBQTtBQUFBO0FBQUEsZ0NBQ3hCLElBRUEsZ0JBQUFBO0FBQUEsa0NBQUM7QUFBQTtBQUFBLG9DQUNHLE9BQU07QUFBQSxvQ0FDTixRQUFPO0FBQUEsb0NBQ1AsU0FBUTtBQUFBLG9DQUNSLE1BQUs7QUFBQSxvQ0FDTCxRQUFPO0FBQUEsb0NBQ1AsYUFBWTtBQUFBLG9DQUNaLGVBQWM7QUFBQSxvQ0FDZCxlQUFZO0FBQUEsb0NBRVo7QUFBQSxzREFBQUEsR0FBQyxVQUFLLEdBQUUsWUFBVztBQUFBLHNDQUNuQixnQkFBQUEsR0FBQyxVQUFLLEdBQUUsY0FBYTtBQUFBLHNDQUNyQixnQkFBQUEsR0FBQyxVQUFLLEdBQUUsZUFBYztBQUFBLHNDQUN0QixnQkFBQUEsR0FBQyxVQUFLLEdBQUUsYUFBWTtBQUFBO0FBQUE7QUFBQSxnQ0FDeEI7QUFBQTtBQUFBLDRCQUVSO0FBQUEsNkJBQ0osSUFDQTtBQUFBO0FBQUE7QUFBQSxvQkFDUjtBQUFBLG9CQUVDLGFBQ0csZ0JBQUFBLEdBQUMsV0FBTSxXQUFVLHdGQUNiO0FBQUEsc0NBQUFBLEdBQUMsU0FBSSxXQUFVLG9HQUFtRywwQkFFbEg7QUFBQSxzQkFDQSxnQkFBQUEsR0FBQyxTQUFJLFdBQVUsNkJBQ1Ysa0JBQVEsSUFBSSxDQUFDLFdBQ1YsZ0JBQUFBO0FBQUEsd0JBQUM7QUFBQTtBQUFBLDBCQUVHLE1BQUs7QUFBQSwwQkFDTCxXQUFXLG1LQUNQLGlCQUFpQixPQUFPLE9BQ2xCLHdDQUNBLG1FQUNWO0FBQUEsMEJBQ0EsU0FBUyxNQUNMO0FBQUEsNEJBQ0ksT0FBTztBQUFBLDRCQUNQLE9BQU87QUFBQSwwQkFDWDtBQUFBLDBCQUdKO0FBQUEsNENBQUFBO0FBQUEsOEJBQUM7QUFBQTtBQUFBLGdDQUNHLFdBQVcsY0FBYyxpQkFBaUIsT0FBTyxPQUFPLGtCQUFrQixlQUFlO0FBQUEsZ0NBRXhGLGlCQUFPO0FBQUE7QUFBQSw0QkFDWjtBQUFBLDRCQUNBLGdCQUFBQSxHQUFDLFVBQU0saUJBQU8sTUFBSztBQUFBLDRCQUNuQixnQkFBQUEsR0FBQyxVQUFLLFdBQVUsd0RBQXVELG9CQUV2RTtBQUFBO0FBQUE7QUFBQSx3QkF0QkssT0FBTztBQUFBLHNCQXVCaEIsQ0FDSCxHQUNMO0FBQUEsc0JBQ0EsZ0JBQUFBLEdBQUMsU0FBSSxXQUFVLGlEQUNYO0FBQUEsd0NBQUFBO0FBQUEsMEJBQUM7QUFBQTtBQUFBLDRCQUNHLE1BQUs7QUFBQSw0QkFDTCxXQUFVO0FBQUEsNEJBQ1YsU0FBUztBQUFBLDRCQUNaO0FBQUE7QUFBQSx3QkFFRDtBQUFBLHdCQUNBLGdCQUFBQTtBQUFBLDBCQUFDO0FBQUE7QUFBQSw0QkFDRyxNQUFLO0FBQUEsNEJBQ0wsV0FBVTtBQUFBLDRCQUNWLFNBQVM7QUFBQSw0QkFDWjtBQUFBO0FBQUEsd0JBRUQ7QUFBQSx5QkFDSjtBQUFBLHVCQUNKLElBQ0E7QUFBQTtBQUFBO0FBQUEsY0FDUjtBQUFBLGNBRUMsQ0FBQyxhQUNFLGdCQUFBQSxHQUFBLEtBQ0s7QUFBQSx3QkFDRyxnQkFBQUEsR0FBQyxhQUFRLFdBQVUsc0RBQ2YsMEJBQUFBLEdBQUMsU0FBSSxXQUFVLHVDQUNYO0FBQUEsa0NBQUFBO0FBQUEsb0JBQUM7QUFBQTtBQUFBLHNCQUNHLE1BQUs7QUFBQSxzQkFDTCxXQUFVO0FBQUEsc0JBQ1YsU0FBUztBQUFBLHNCQUNULGNBQVksVUFBVSxVQUFVO0FBQUEsc0JBRWhDLDBCQUFBQSxHQUFDLGtCQUFlLFNBQWtCO0FBQUE7QUFBQSxrQkFDdEM7QUFBQSxrQkFDQSxnQkFBQUEsR0FBQyxVQUFLLFdBQVUsNERBQ1gscUJBQVcsSUFBSSxHQUNwQjtBQUFBLGtCQUNBLGdCQUFBQTtBQUFBLG9CQUFDO0FBQUE7QUFBQSxzQkFDRyxXQUFVO0FBQUEsc0JBQ1YsTUFBSztBQUFBLHNCQUNMLEtBQUs7QUFBQSxzQkFDTCxLQUFLLEtBQUssSUFBSSxVQUFVLElBQUk7QUFBQSxzQkFDNUIsTUFBTTtBQUFBLHNCQUNOLE9BQU8sS0FBSztBQUFBLHdCQUNSO0FBQUEsd0JBQ0EsS0FBSyxJQUFJLFVBQVUsSUFBSTtBQUFBLHNCQUMzQjtBQUFBLHNCQUNBLGNBQVc7QUFBQSxzQkFDWCxTQUFTLENBQUMsVUFDTjtBQUFBLHdCQUNJO0FBQUEsMEJBQ0ksTUFBTSxjQUFjO0FBQUEsd0JBQ3hCO0FBQUEsc0JBQ0o7QUFBQTtBQUFBLGtCQUVSO0FBQUEsa0JBQ0EsZ0JBQUFBLEdBQUMsVUFBSyxXQUFVLHVFQUNYLHFCQUFXLFFBQVEsR0FDeEI7QUFBQSxrQkFDQSxnQkFBQUEsR0FBQyxTQUFJLFdBQVUsb0NBQ1g7QUFBQSxvQ0FBQUE7QUFBQSxzQkFBQztBQUFBO0FBQUEsd0JBQ0csTUFBSztBQUFBLHdCQUNMLFdBQVU7QUFBQSx3QkFDVixTQUFTO0FBQUEsd0JBQ1QsY0FDSSxTQUFTLE9BQ0gsU0FDQTtBQUFBLHdCQUdWLDBCQUFBQSxHQUFDLGVBQVksUUFBZ0I7QUFBQTtBQUFBLG9CQUNqQztBQUFBLG9CQUNBLGdCQUFBQSxHQUFDLFNBQUksV0FBVSxpQkFDWCwwQkFBQUE7QUFBQSxzQkFBQztBQUFBO0FBQUEsd0JBQ0csV0FBVTtBQUFBLHdCQUNWLE9BQU87QUFBQSwwQkFDSCxVQUFVLEdBQUcsU0FBUyxHQUFHO0FBQUEsd0JBQzdCO0FBQUEsd0JBQ0EsTUFBSztBQUFBLHdCQUNMLEtBQUs7QUFBQSx3QkFDTCxLQUFLO0FBQUEsd0JBQ0wsTUFBTTtBQUFBLHdCQUNOLE9BQU87QUFBQSx3QkFDUCxjQUFXO0FBQUEsd0JBQ1gsU0FBUyxDQUFDLFVBQ047QUFBQSwwQkFDSTtBQUFBLDRCQUNJLE1BQU0sY0FDRDtBQUFBLDBCQUNUO0FBQUEsd0JBQ0o7QUFBQTtBQUFBLG9CQUVSLEdBQ0o7QUFBQSxxQkFDSjtBQUFBLG1CQUNKLEdBQ0osSUFDQTtBQUFBLGdCQUNKLGdCQUFBQSxHQUFDLFNBQUksV0FBVSw0RkFDWDtBQUFBLGtDQUFBQTtBQUFBLG9CQUFDO0FBQUE7QUFBQSxzQkFDRyxNQUFLO0FBQUEsc0JBQ0wsV0FBVTtBQUFBLHNCQUNWLFNBQVM7QUFBQSxzQkFDWjtBQUFBO0FBQUEsa0JBRUQ7QUFBQSxrQkFDQSxnQkFBQUE7QUFBQSxvQkFBQztBQUFBO0FBQUEsc0JBQ0csTUFBSztBQUFBLHNCQUNMLFdBQVU7QUFBQSxzQkFDVixTQUFTO0FBQUEsc0JBQ1o7QUFBQTtBQUFBLGtCQUVEO0FBQUEsa0JBQ0EsZ0JBQUFBO0FBQUEsb0JBQUM7QUFBQTtBQUFBLHNCQUNHLE1BQUs7QUFBQSxzQkFDTCxXQUFXLCtEQUNQLFlBQ00sNEJBQ0EseUZBQ1Y7QUFBQSxzQkFDQSxTQUFTLE1BQU0sS0FBSyxVQUFVO0FBQUEsc0JBQ2pDO0FBQUE7QUFBQSxrQkFFRDtBQUFBLGtCQUNDLFlBQ0csZ0JBQUFBO0FBQUEsb0JBQUM7QUFBQTtBQUFBLHNCQUNHLE1BQUs7QUFBQSxzQkFDTCxXQUFVO0FBQUEsc0JBQ1YsU0FBUyxNQUFNLFlBQVksU0FBUyxLQUFLO0FBQUEsc0JBRXpDLDBCQUFBQSxHQUFDLFVBQUssV0FBVSxpREFDWjtBQUFBLHdDQUFBQSxHQUFDLFVBQUssV0FBVSw4Q0FBNkM7QUFBQSx3QkFBRTtBQUFBLHlCQUVuRTtBQUFBO0FBQUEsa0JBQ0osSUFFQSxnQkFBQUE7QUFBQSxvQkFBQztBQUFBO0FBQUEsc0JBQ0csTUFBSztBQUFBLHNCQUNMLFVBQVUsQ0FBQztBQUFBLHNCQUNYLFdBQVU7QUFBQSxzQkFDVixTQUFTO0FBQUEsc0JBQ1o7QUFBQTtBQUFBLGtCQUVEO0FBQUEsbUJBRVI7QUFBQSxpQkFDSixJQUNBO0FBQUEsY0FFSCxhQUNHLGdCQUFBQSxHQUFBLEtBQ0k7QUFBQSxnQ0FBQUEsR0FBQyxhQUFRLFdBQVUsNERBQ2Y7QUFBQSxrQ0FBQUEsR0FBQyxTQUFJLFdBQVUsd0ZBQ1g7QUFBQSxvQ0FBQUEsR0FBQyxTQUFJLFdBQVUsMkJBQ1g7QUFBQSxzQ0FBQUE7QUFBQSx3QkFBQztBQUFBO0FBQUEsMEJBQ0csTUFBSztBQUFBLDBCQUNMLFVBQVUsQ0FBQztBQUFBLDBCQUNYLFdBQVU7QUFBQSwwQkFDVixTQUFTO0FBQUEsMEJBQ1QsY0FBWSxVQUFVLFVBQVU7QUFBQSwwQkFFaEMsMEJBQUFBLEdBQUMsa0JBQWUsU0FBa0I7QUFBQTtBQUFBLHNCQUN0QztBQUFBLHNCQUNBLGdCQUFBQTtBQUFBLHdCQUFDO0FBQUE7QUFBQSwwQkFDRyxNQUFLO0FBQUEsMEJBQ0wsV0FBVTtBQUFBLDBCQUNWLFNBQVMsTUFBTSxRQUFRLFNBQVMsTUFBTTtBQUFBLDBCQUVyQyxzQkFBWSxZQUFZO0FBQUE7QUFBQSxzQkFDN0I7QUFBQSxzQkFDQSxnQkFBQUE7QUFBQSx3QkFBQztBQUFBO0FBQUEsMEJBQ0csTUFBSztBQUFBLDBCQUNMLFdBQVcsb0VBQ1AsWUFDTSxvREFDQSw2RkFDVjtBQUFBLDBCQUNBLFNBQVMsTUFBTSxLQUFLLFVBQVU7QUFBQSwwQkFFN0Isc0JBQVksZ0JBQVc7QUFBQTtBQUFBLHNCQUM1QjtBQUFBLHVCQUNKO0FBQUEsb0JBRUEsZ0JBQUFBLEdBQUMsU0FBSSxXQUFVLG1DQUNWLGtCQUNHLGdCQUFBQSxHQUFBLEtBQ0k7QUFBQSxzQ0FBQUEsR0FBQyxVQUFLLFdBQVUsNERBQ1gscUJBQVcsSUFBSSxHQUNwQjtBQUFBLHNCQUNBLGdCQUFBQTtBQUFBLHdCQUFDO0FBQUE7QUFBQSwwQkFDRyxXQUFVO0FBQUEsMEJBQ1YsTUFBSztBQUFBLDBCQUNMLEtBQUs7QUFBQSwwQkFDTCxLQUFLLEtBQUssSUFBSSxVQUFVLElBQUk7QUFBQSwwQkFDNUIsTUFBTTtBQUFBLDBCQUNOLE9BQU8sS0FBSztBQUFBLDRCQUNSO0FBQUEsNEJBQ0EsS0FBSyxJQUFJLFVBQVUsSUFBSTtBQUFBLDBCQUMzQjtBQUFBLDBCQUNBLFVBQVUsQ0FBQztBQUFBLDBCQUNYLGNBQVc7QUFBQSwwQkFDWCxTQUFTLENBQUMsVUFDTjtBQUFBLDRCQUNJO0FBQUEsOEJBQ0ksTUFBTSxjQUNEO0FBQUEsNEJBQ1Q7QUFBQSwwQkFDSjtBQUFBO0FBQUEsc0JBRVI7QUFBQSxzQkFDQSxnQkFBQUEsR0FBQyxVQUFLLFdBQVUsdUVBQ1gscUJBQVcsUUFBUSxHQUN4QjtBQUFBLHVCQUNKLElBRUEsZ0JBQUFBLEdBQUMsVUFBSyxXQUFVLDREQUNYLHVCQUNLLEdBQUcsWUFBWSxVQUFVLENBQUMsNkJBQzFCLGFBQ1YsR0FFUjtBQUFBLG9CQUVBLGdCQUFBQSxHQUFDLFNBQUksV0FBVSx1Q0FDWDtBQUFBLHNDQUFBQSxHQUFDLFdBQU0sV0FBVSxxQ0FDYjtBQUFBLHdDQUFBQSxHQUFDLFVBQUssV0FBVSw0REFBMkQsaUJBRTNFO0FBQUEsd0JBQ0EsZ0JBQUFBO0FBQUEsMEJBQUM7QUFBQTtBQUFBLDRCQUNHLFdBQVU7QUFBQSw0QkFDVixPQUFPO0FBQUEsOEJBQ0gsVUFBVSxHQUFHLFNBQVMsR0FBRztBQUFBLDRCQUM3QjtBQUFBLDRCQUNBLE1BQUs7QUFBQSw0QkFDTCxLQUFLO0FBQUEsNEJBQ0wsS0FBSztBQUFBLDRCQUNMLE1BQU07QUFBQSw0QkFDTixPQUFPO0FBQUEsNEJBQ1AsVUFDSSxlQUFlLFVBQ2YsZUFBZSxXQUNmLGVBQWU7QUFBQSw0QkFFbkIsU0FBUyxDQUFDLFVBQ047QUFBQSw4QkFDSTtBQUFBLGdDQUNJLE1BQU0sY0FDRDtBQUFBLDhCQUNUO0FBQUEsNEJBQ0o7QUFBQTtBQUFBLHdCQUVSO0FBQUEseUJBQ0o7QUFBQSxzQkFDQyxDQUFDLFlBQ0UsZ0JBQUFBO0FBQUEsd0JBQUM7QUFBQTtBQUFBLDBCQUNHLE1BQUs7QUFBQSwwQkFDTCxVQUFVLENBQUM7QUFBQSwwQkFDWCxXQUFVO0FBQUEsMEJBQ1YsU0FBUztBQUFBLDBCQUNaO0FBQUE7QUFBQSxzQkFFRCxJQUVBLGdCQUFBQTtBQUFBLHdCQUFDO0FBQUE7QUFBQSwwQkFDRyxNQUFLO0FBQUEsMEJBQ0wsV0FBVTtBQUFBLDBCQUNWLFNBQVMsTUFDTCxZQUFZLFNBQVMsS0FBSztBQUFBLDBCQUc5QiwwQkFBQUEsR0FBQyxVQUFLLFdBQVUsa0NBQ1o7QUFBQSw0Q0FBQUEsR0FBQyxVQUFLLFdBQVUsOENBQTZDO0FBQUEsNEJBQUU7QUFBQSw2QkFFbkU7QUFBQTtBQUFBLHNCQUNKO0FBQUEsdUJBRVI7QUFBQSxxQkFDSjtBQUFBLGtCQUNDLFdBQ0csZ0JBQUFBLEdBQUMsU0FBSSxXQUFVLDBHQUNWLHVCQUNLLGdCQUNJLEdBQUcsWUFBWSxVQUFVLENBQUMsU0FBTSxpQkFBaUIsV0FBVyxDQUFDLE1BQU0sUUFBUSxLQUMzRSxZQUNFLEdBQUcsWUFBWSxVQUFVLENBQUMsWUFBWSxRQUFRLEtBQzlDLEdBQUcsWUFBWSxVQUFVLENBQUMsTUFBTSxRQUFRLEtBQzlDLFVBQ1YsSUFDQTtBQUFBLG1CQUNSO0FBQUEsZ0JBRUEsZ0JBQUFBLEdBQUMsYUFBUSxXQUFVLHNEQUNmO0FBQUEsa0NBQUFBLEdBQUMsU0FBSSxXQUFVLGlFQUNWLGlCQUFPLElBQUksQ0FBQyxNQUFNLFVBQ2YsZ0JBQUFBO0FBQUEsb0JBQUM7QUFBQTtBQUFBLHNCQUVHLE1BQUs7QUFBQSxzQkFDTCxXQUFXLG9IQUNQLGdCQUFnQixLQUFLLEtBQ2YseUNBQ0EsOENBQ1Y7QUFBQSxzQkFDQSxTQUFTLE1BQU0sZUFBZSxLQUFLLEVBQUU7QUFBQSxzQkFFckM7QUFBQSx3Q0FBQUEsR0FBQyxVQUFLLFdBQVUsb0NBQW1DO0FBQUE7QUFBQSwwQkFDN0MsUUFBUTtBQUFBLDJCQUNkO0FBQUEsd0JBQ0MsS0FBSztBQUFBO0FBQUE7QUFBQSxvQkFaRCxLQUFLO0FBQUEsa0JBYWQsQ0FDSCxHQUNMO0FBQUEsa0JBRUEsZ0JBQUFBLEdBQUMsU0FBSSxXQUFVLGlDQUNYO0FBQUEsb0NBQUFBLEdBQUMsU0FBSSxXQUFVLCtEQUNYO0FBQUEsc0NBQUFBLEdBQUMsU0FBSSxXQUFVLDZEQUNWLGdCQUFNLE9BQ1g7QUFBQSxzQkFDQSxnQkFBQUEsR0FBQyxPQUFFLFdBQVUsc0RBQ1IsZ0JBQU0sYUFDWDtBQUFBLHVCQUNKO0FBQUEsb0JBRUEsZ0JBQUFBLEdBQUMsU0FBSSxXQUFVLGlFQUNWO0FBQUEsc0NBQWdCLFVBQ2IsZ0JBQUFBLEdBQUMsU0FBSSxXQUFVLCtCQUNYO0FBQUEsd0NBQUFBLEdBQUMsU0FBSSxXQUFVLDBDQUNYO0FBQUEsMENBQUFBLEdBQUMsVUFBSyxXQUFVLDZEQUE0RCw4QkFFNUU7QUFBQSwwQkFDQSxnQkFBQUEsR0FBQyxVQUFLLFdBQVUsMkRBQ1g7QUFBQSwwQ0FBYztBQUFBLDRCQUFPO0FBQUEsNkJBQzFCO0FBQUEsMkJBQ0o7QUFBQSx3QkFDQSxnQkFBQUEsR0FBQyxTQUFJLFdBQVUsd0RBQ1Ysd0JBQWMsSUFBSSxDQUFDLFNBQ2hCLGdCQUFBQTtBQUFBLDBCQUFDO0FBQUE7QUFBQSw0QkFFRyxNQUFLO0FBQUEsNEJBQ0wsV0FBVyxnSEFDUCxPQUFPLGVBQWUsS0FBSyxRQUNyQiwyREFDQSxtRUFDVjtBQUFBLDRCQUNBLFNBQVMsTUFBTTtBQUNYLHdDQUFVLENBQUMsY0FBYztBQUFBLGdDQUNyQixHQUFHO0FBQUEsZ0NBQ0gsWUFBWSxLQUFLO0FBQUEsZ0NBQ2pCLFdBQ0ksS0FBSyxVQUFVLElBQ1QsSUFDQSxLQUFLLElBQUksU0FBUyxXQUFXLElBQUk7QUFBQSw4QkFDL0MsRUFBRTtBQUNGLDhDQUFnQixFQUFFO0FBQ2xCLHlDQUFXLFNBQVMsY0FBYztBQUFBLDRCQUN0QztBQUFBLDRCQUVBO0FBQUEsOENBQUFBLEdBQUMsVUFBSyxXQUFVLHlEQUNYLGVBQUssT0FDVjtBQUFBLDhCQUNBLGdCQUFBQSxHQUFDLFVBQU0sZUFBSyxNQUFLO0FBQUE7QUFBQTtBQUFBLDBCQXZCWixLQUFLO0FBQUEsd0JBd0JkLENBQ0gsR0FDTDtBQUFBLHlCQUNKLElBQ0E7QUFBQSxzQkFFSCxnQkFBZ0IsV0FDYixnQkFBQUEsR0FBQyxTQUFJLFdBQVUsK0JBQ1g7QUFBQSx3Q0FBQUEsR0FBQyxTQUFJLFdBQVUsMENBQ1g7QUFBQSwwQ0FBQUEsR0FBQyxVQUFLLFdBQVUsNkRBQTRELCtCQUU1RTtBQUFBLDBCQUNBLGdCQUFBQSxHQUFDLFVBQUssV0FBVSwyREFBMEQsZ0NBRTFFO0FBQUEsMkJBQ0o7QUFBQSx3QkFDQSxnQkFBQUEsR0FBQyxTQUFJLFdBQVUsMEJBQ1YsdUJBQWEsSUFBSSxDQUFDLFNBQ2YsZ0JBQUFBO0FBQUEsMEJBQUM7QUFBQTtBQUFBLDRCQUVHLE1BQUs7QUFBQSw0QkFDTCxXQUFXLDJHQUNQLE9BQU8sY0FDUCxLQUFLLFFBQ0MsMkRBQ0EsbUVBQ1Y7QUFBQSw0QkFDQSxTQUFTLE1BQU07QUFDWDtBQUFBLGdDQUNJLENBQUMsY0FBYztBQUFBLGtDQUNYLEdBQUc7QUFBQSxrQ0FDSCxXQUNJLEtBQUs7QUFBQSxnQ0FDYjtBQUFBLDhCQUNKO0FBQ0EsOENBQWdCLEVBQUU7QUFBQSw0QkFDdEI7QUFBQSw0QkFFQTtBQUFBLDhDQUFBQSxHQUFDLFVBQUssV0FBVSxhQUNYLGVBQUssT0FDVjtBQUFBLDhCQUNBLGdCQUFBQSxHQUFDLFVBQUssV0FBVSxvQkFDWCxlQUFLLE1BQ1Y7QUFBQTtBQUFBO0FBQUEsMEJBeEJLLEtBQUs7QUFBQSx3QkF5QmQsQ0FDSCxHQUNMO0FBQUEseUJBQ0osSUFDQTtBQUFBLHNCQUVILE1BQU0sUUFBUSxJQUFJLENBQUMsU0FBUztBQUN6Qiw4QkFBTSxNQUFNLEtBQUssT0FBTztBQUN4Qiw4QkFBTSxNQUFNLEtBQUssT0FBTztBQUN4Qiw4QkFBTSxRQUNBLE9BQU8sS0FBSyxHQUFHLElBQUksUUFDaEIsTUFBTSxPQUNYO0FBQ0osK0JBQ0ksZ0JBQUFBO0FBQUEsMEJBQUM7QUFBQTtBQUFBLDRCQUVHLFdBQVU7QUFBQSw0QkFFVjtBQUFBLDhDQUFBQSxHQUFDLFNBQUksV0FBVSwrQ0FDWDtBQUFBLGdEQUFBQSxHQUFDLFVBQ0c7QUFBQSxrREFBQUEsR0FBQyxVQUFLLFdBQVUsbUVBQ1gsZUFBSyxPQUNWO0FBQUEsa0NBQ0EsZ0JBQUFBLEdBQUMsVUFBSyxXQUFVLHFEQUNYLGVBQUssTUFDVjtBQUFBLG1DQUNKO0FBQUEsZ0NBQ0EsZ0JBQUFBLEdBQUMsVUFBSyxXQUFVLDJEQUNYO0FBQUEsa0NBQ0csT0FBTyxLQUFLLEdBQUc7QUFBQSxrQ0FDZjtBQUFBLGdDQUNKLEdBQ0o7QUFBQSxpQ0FDSjtBQUFBLDhCQUNBLGdCQUFBQTtBQUFBLGdDQUFDO0FBQUE7QUFBQSxrQ0FDRyxXQUFVO0FBQUEsa0NBQ1YsT0FBTztBQUFBLG9DQUNILFVBQVUsR0FBRyxJQUFJO0FBQUEsa0NBQ3JCO0FBQUEsa0NBQ0EsTUFBSztBQUFBLGtDQUNMO0FBQUEsa0NBQ0E7QUFBQSxrQ0FDQSxNQUFNO0FBQUEsa0NBQ04sT0FBTyxPQUFPLEtBQUssR0FBRztBQUFBLGtDQUN0QixTQUFTLENBQUMsVUFDTjtBQUFBLG9DQUNJLEtBQUs7QUFBQSxvQ0FDTDtBQUFBLHNDQUNJLE1BQ0ssY0FDQTtBQUFBLG9DQUNUO0FBQUEsa0NBQ0o7QUFBQTtBQUFBLDhCQUVSO0FBQUE7QUFBQTtBQUFBLDBCQXZDSyxLQUFLO0FBQUEsd0JBd0NkO0FBQUEsc0JBRVIsQ0FBQztBQUFBLHVCQUNMO0FBQUEscUJBQ0o7QUFBQSxtQkFDSjtBQUFBLGdCQUVBLGdCQUFBQSxHQUFDLFlBQU8sV0FBVSx3SEFDZDtBQUFBLGtDQUFBQSxHQUFDLFVBQUsscURBQXVDO0FBQUEsa0JBQzdDLGdCQUFBQTtBQUFBLG9CQUFDO0FBQUE7QUFBQSxzQkFDRyxNQUFLO0FBQUEsc0JBQ0wsV0FBVTtBQUFBLHNCQUNWLFNBQVMsTUFDTCxZQUFZLGVBQWUsS0FBSztBQUFBLHNCQUV2QztBQUFBO0FBQUEsa0JBRUQ7QUFBQSxtQkFDSjtBQUFBLGlCQUNKLElBQ0E7QUFBQSxjQUVILFFBQ0csZ0JBQUFBLEdBQUMsU0FBSSxXQUFVLDBKQUNWLGlCQUNMLElBQ0E7QUFBQTtBQUFBO0FBQUEsUUFDUjtBQUFBO0FBQUE7QUFBQSxFQUNKO0FBRVI7OztBQzE4RUEsRUFBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLEdBQUcsU0FBUyxlQUFlLEtBQUssQ0FBQzsiLAogICJuYW1lcyI6IFsic2xpY2UiLCAib3B0aW9ucyIsICJ2bm9kZUlkIiwgImlzVmFsaWRFbGVtZW50IiwgInJlcmVuZGVyUXVldWUiLCAicHJldkRlYm91bmNlIiwgImRlZmVyIiwgImRlcHRoU29ydCIsICJfaWQiLCAiRVZFTlRfRElTUEFUQ0hFRCIsICJFVkVOVF9BVFRBQ0hFRCIsICJDQVBUVVJFX1JFR0VYIiwgImV2ZW50Q2xvY2siLCAiZXZlbnRQcm94eSIsICJldmVudFByb3h5Q2FwdHVyZSIsICJpIiwgIkVNUFRZX09CSiIsICJFTVBUWV9BUlIiLCAiSVNfTk9OX0RJTUVOU0lPTkFMIiwgImlzQXJyYXkiLCAiQXJyYXkiLCAiYXNzaWduIiwgIm9iaiIsICJwcm9wcyIsICJyZW1vdmVOb2RlIiwgIm5vZGUiLCAicGFyZW50Tm9kZSIsICJyZW1vdmVDaGlsZCIsICJjcmVhdGVFbGVtZW50IiwgInR5cGUiLCAiY2hpbGRyZW4iLCAia2V5IiwgInJlZiIsICJub3JtYWxpemVkUHJvcHMiLCAiYXJndW1lbnRzIiwgImxlbmd0aCIsICJjYWxsIiwgImRlZmF1bHRQcm9wcyIsICJjcmVhdGVWTm9kZSIsICJvcmlnaW5hbCIsICJ2bm9kZSIsICJfX2siLCAiX18iLCAiX19iIiwgIl9fZSIsICJfX2MiLCAiY29uc3RydWN0b3IiLCAiX192IiwgIl9faSIsICJfX3UiLCAiRnJhZ21lbnQiLCAicHJvcHMiLCAiY2hpbGRyZW4iLCAiQmFzZUNvbXBvbmVudCIsICJjb250ZXh0IiwgInRoaXMiLCAiZ2V0RG9tU2libGluZyIsICJ2bm9kZSIsICJjaGlsZEluZGV4IiwgIl9fIiwgIl9faSIsICJzaWJsaW5nIiwgIl9fayIsICJsZW5ndGgiLCAiX19lIiwgInR5cGUiLCAicmVuZGVyQ29tcG9uZW50IiwgImNvbXBvbmVudCIsICJfX1AiLCAiX19kIiwgIm9sZFZOb2RlIiwgIl9fdiIsICJvbGREb20iLCAiY29tbWl0UXVldWUiLCAicmVmUXVldWUiLCAibmV3Vk5vZGUiLCAiYXNzaWduIiwgIm9wdGlvbnMiLCAiZGlmZiIsICJfX24iLCAibmFtZXNwYWNlVVJJIiwgIl9fdSIsICJjb21taXRSb290IiwgInVwZGF0ZVBhcmVudERvbVBvaW50ZXJzIiwgIl9fYyIsICJiYXNlIiwgInNvbWUiLCAiY2hpbGQiLCAiZW5xdWV1ZVJlbmRlciIsICJjIiwgInJlcmVuZGVyUXVldWUiLCAicHVzaCIsICJwcm9jZXNzIiwgIl9fciIsICJwcmV2RGVib3VuY2UiLCAiZGVib3VuY2VSZW5kZXJpbmciLCAiZGVmZXIiLCAibCIsICJzb3J0IiwgImRlcHRoU29ydCIsICJzaGlmdCIsICJkaWZmQ2hpbGRyZW4iLCAicGFyZW50RG9tIiwgInJlbmRlclJlc3VsdCIsICJuZXdQYXJlbnRWTm9kZSIsICJvbGRQYXJlbnRWTm9kZSIsICJnbG9iYWxDb250ZXh0IiwgIm5hbWVzcGFjZSIsICJleGNlc3NEb21DaGlsZHJlbiIsICJpc0h5ZHJhdGluZyIsICJpIiwgImNoaWxkVk5vZGUiLCAibmV3RG9tIiwgImZpcnN0Q2hpbGREb20iLCAicmVzdWx0IiwgInNob3VsZFBsYWNlIiwgIm9sZENoaWxkcmVuIiwgIkVNUFRZX0FSUiIsICJuZXdDaGlsZHJlbkxlbmd0aCIsICJjb25zdHJ1Y3ROZXdDaGlsZHJlbkFycmF5IiwgIkVNUFRZX09CSiIsICJyZWYiLCAiYXBwbHlSZWYiLCAiaW5zZXJ0IiwgIm5leHRTaWJsaW5nIiwgInNrZXdlZEluZGV4IiwgIm1hdGNoaW5nSW5kZXgiLCAib2xkQ2hpbGRyZW5MZW5ndGgiLCAicmVtYWluaW5nT2xkQ2hpbGRyZW4iLCAic2tldyIsICJBcnJheSIsICJjb25zdHJ1Y3RvciIsICJTdHJpbmciLCAiY3JlYXRlVk5vZGUiLCAiaXNBcnJheSIsICJfX2IiLCAia2V5IiwgImZpbmRNYXRjaGluZ0luZGV4IiwgInVubW91bnQiLCAicGFyZW50Vk5vZGUiLCAicGFyZW50Tm9kZSIsICJpbnNlcnRCZWZvcmUiLCAibm9kZVR5cGUiLCAiZmluZE1hdGNoaW5nSW5kZXgiLCAiY2hpbGRWTm9kZSIsICJvbGRDaGlsZHJlbiIsICJza2V3ZWRJbmRleCIsICJyZW1haW5pbmdPbGRDaGlsZHJlbiIsICJ4IiwgInkiLCAiY2hpbGRJbmRleCIsICJrZXkiLCAidHlwZSIsICJvbGRWTm9kZSIsICJtYXRjaGVkIiwgIl9fdSIsICJsZW5ndGgiLCAic2V0U3R5bGUiLCAic3R5bGUiLCAidmFsdWUiLCAic2V0UHJvcGVydHkiLCAiSVNfTk9OX0RJTUVOU0lPTkFMIiwgInRlc3QiLCAiZG9tIiwgIm5hbWUiLCAib2xkVmFsdWUiLCAibmFtZXNwYWNlIiwgInVzZUNhcHR1cmUiLCAibG93ZXJDYXNlTmFtZSIsICJvIiwgImNzc1RleHQiLCAicmVwbGFjZSIsICJDQVBUVVJFX1JFR0VYIiwgInRvTG93ZXJDYXNlIiwgInNsaWNlIiwgImwiLCAiRVZFTlRfQVRUQUNIRUQiLCAiZXZlbnRDbG9jayIsICJhZGRFdmVudExpc3RlbmVyIiwgImV2ZW50UHJveHlDYXB0dXJlIiwgImV2ZW50UHJveHkiLCAicmVtb3ZlRXZlbnRMaXN0ZW5lciIsICJlIiwgInJlbW92ZUF0dHJpYnV0ZSIsICJzZXRBdHRyaWJ1dGUiLCAiY3JlYXRlRXZlbnRQcm94eSIsICJ0aGlzIiwgImV2ZW50SGFuZGxlciIsICJFVkVOVF9ESVNQQVRDSEVEIiwgIm9wdGlvbnMiLCAiZXZlbnQiLCAiZGlmZiIsICJwYXJlbnREb20iLCAibmV3Vk5vZGUiLCAiZ2xvYmFsQ29udGV4dCIsICJleGNlc3NEb21DaGlsZHJlbiIsICJjb21taXRRdWV1ZSIsICJvbGREb20iLCAiaXNIeWRyYXRpbmciLCAicmVmUXVldWUiLCAidG1wIiwgIm9sZENvbW1pdFF1ZXVlTGVuZ3RoIiwgImMiLCAiaXNOZXciLCAib2xkUHJvcHMiLCAib2xkU3RhdGUiLCAic25hcHNob3QiLCAiY2xlYXJQcm9jZXNzaW5nRXhjZXB0aW9uIiwgIm5ld1Byb3BzIiwgImlzQ2xhc3NDb21wb25lbnQiLCAicHJvdmlkZXIiLCAiY29tcG9uZW50Q29udGV4dCIsICJyZW5kZXJIb29rIiwgImNvdW50IiwgInJlbmRlclJlc3VsdCIsICJpIiwgIm5ld1R5cGUiLCAiY29uc3RydWN0b3IiLCAiX19lIiwgIl9fYiIsICJvdXRlciIsICJwcm9wcyIsICJwcm90b3R5cGUiLCAicmVuZGVyIiwgImNvbnRleHRUeXBlIiwgIl9fYyIsICJfXyIsICJfX0UiLCAiQmFzZUNvbXBvbmVudCIsICJkb1JlbmRlciIsICJzdWIiLCAic3RhdGUiLCAiX19uIiwgIl9fZCIsICJfX2giLCAiX3NiIiwgIl9fcyIsICJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCAiYXNzaWduIiwgIl9fdiIsICJjb21wb25lbnRXaWxsTW91bnQiLCAiY29tcG9uZW50RGlkTW91bnQiLCAicHVzaCIsICJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwgInNob3VsZENvbXBvbmVudFVwZGF0ZSIsICJfX2siLCAic29tZSIsICJ2bm9kZSIsICJFTVBUWV9BUlIiLCAiYXBwbHkiLCAiY29tcG9uZW50V2lsbFVwZGF0ZSIsICJjb21wb25lbnREaWRVcGRhdGUiLCAiY29udGV4dCIsICJfX1AiLCAiX19yIiwgImdldENoaWxkQ29udGV4dCIsICJnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSIsICJGcmFnbWVudCIsICJjbG9uZU5vZGUiLCAiY2hpbGRyZW4iLCAiZGlmZkNoaWxkcmVuIiwgImlzQXJyYXkiLCAiYmFzZSIsICJ0aGVuIiwgIk1PREVfSFlEUkFURSIsICJub2RlVHlwZSIsICJuZXh0U2libGluZyIsICJpbmRleE9mIiwgInJlbW92ZU5vZGUiLCAibWFya0FzRm9yY2UiLCAiZGlmZkVsZW1lbnROb2RlcyIsICJkaWZmZWQiLCAiY29tbWl0Um9vdCIsICJyb290IiwgImFwcGx5UmVmIiwgImNiIiwgImNhbGwiLCAibm9kZSIsICJtYXAiLCAibmV3SHRtbCIsICJvbGRIdG1sIiwgIm5ld0NoaWxkcmVuIiwgImlucHV0VmFsdWUiLCAiY2hlY2tlZCIsICJFTVBUWV9PQkoiLCAibG9jYWxOYW1lIiwgImRvY3VtZW50IiwgImNyZWF0ZVRleHROb2RlIiwgImNyZWF0ZUVsZW1lbnROUyIsICJpcyIsICJfX20iLCAiZGF0YSIsICJkZWZhdWx0VmFsdWUiLCAiY2hpbGROb2RlcyIsICJhdHRyaWJ1dGVzIiwgIl9faHRtbCIsICJpbm5lckhUTUwiLCAiY29udGVudCIsICJnZXREb21TaWJsaW5nIiwgInVuZGVmaW5lZCIsICJyZWYiLCAiaGFzUmVmVW5tb3VudCIsICJjdXJyZW50IiwgInVubW91bnQiLCAicGFyZW50Vk5vZGUiLCAic2tpcFJlbW92ZSIsICJyIiwgImNvbXBvbmVudFdpbGxVbm1vdW50IiwgInJlcGxhY2VOb2RlIiwgImRvY3VtZW50RWxlbWVudCIsICJjcmVhdGVFbGVtZW50IiwgIm5hbWVzcGFjZVVSSSIsICJmaXJzdENoaWxkIiwgInNsaWNlIiwgIkVNUFRZX0FSUiIsICJvcHRpb25zIiwgIl9fZSIsICJlcnJvciIsICJ2bm9kZSIsICJvbGRWTm9kZSIsICJlcnJvckluZm8iLCAiY29tcG9uZW50IiwgImN0b3IiLCAiaGFuZGxlZCIsICJfXyIsICJfX2MiLCAiY29uc3RydWN0b3IiLCAiZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yIiwgInNldFN0YXRlIiwgIl9fZCIsICJjb21wb25lbnREaWRDYXRjaCIsICJfX0UiLCAiZSIsICJ2bm9kZUlkIiwgImlzVmFsaWRFbGVtZW50IiwgIkJhc2VDb21wb25lbnQiLCAicHJvdG90eXBlIiwgInVwZGF0ZSIsICJjYWxsYmFjayIsICJzIiwgInRoaXMiLCAiX19zIiwgInN0YXRlIiwgImFzc2lnbiIsICJwcm9wcyIsICJfX3YiLCAiX3NiIiwgInB1c2giLCAiZW5xdWV1ZVJlbmRlciIsICJmb3JjZVVwZGF0ZSIsICJfX2giLCAicmVuZGVyIiwgIkZyYWdtZW50IiwgInJlcmVuZGVyUXVldWUiLCAiZGVmZXIiLCAiUHJvbWlzZSIsICJ0aGVuIiwgImJpbmQiLCAicmVzb2x2ZSIsICJzZXRUaW1lb3V0IiwgImRlcHRoU29ydCIsICJhIiwgImIiLCAiX19iIiwgInByb2Nlc3MiLCAiX19yIiwgIl9pZCIsICJNYXRoIiwgInJhbmRvbSIsICJ0b1N0cmluZyIsICJFVkVOVF9ESVNQQVRDSEVEIiwgIkVWRU5UX0FUVEFDSEVEIiwgIkNBUFRVUkVfUkVHRVgiLCAiZXZlbnRDbG9jayIsICJldmVudFByb3h5IiwgImNyZWF0ZUV2ZW50UHJveHkiLCAiZXZlbnRQcm94eUNhcHR1cmUiLCAiaSIsICJjdXJyZW50SW5kZXgiLCAiY3VycmVudENvbXBvbmVudCIsICJwcmV2aW91c0NvbXBvbmVudCIsICJwcmV2UmFmIiwgImN1cnJlbnRIb29rIiwgImFmdGVyUGFpbnRFZmZlY3RzIiwgIm9wdGlvbnMiLCAiX29wdGlvbnMiLCAib2xkQmVmb3JlRGlmZiIsICJfX2IiLCAib2xkQmVmb3JlUmVuZGVyIiwgIl9fciIsICJvbGRBZnRlckRpZmYiLCAiZGlmZmVkIiwgIm9sZENvbW1pdCIsICJfX2MiLCAib2xkQmVmb3JlVW5tb3VudCIsICJ1bm1vdW50IiwgIm9sZFJvb3QiLCAiX18iLCAiZ2V0SG9va1N0YXRlIiwgImluZGV4IiwgInR5cGUiLCAiX19oIiwgImhvb2tzIiwgIl9fSCIsICJsZW5ndGgiLCAicHVzaCIsICJ1c2VTdGF0ZSIsICJpbml0aWFsU3RhdGUiLCAidXNlUmVkdWNlciIsICJpbnZva2VPclJldHVybiIsICJyZWR1Y2VyIiwgImluaXQiLCAiaG9va1N0YXRlIiwgIl9yZWR1Y2VyIiwgImFjdGlvbiIsICJjdXJyZW50VmFsdWUiLCAiX19OIiwgIm5leHRWYWx1ZSIsICJzZXRTdGF0ZSIsICJfX2YiLCAidXBkYXRlSG9va1N0YXRlIiwgInAiLCAicyIsICJjIiwgInVwZGF0ZWRIb29rIiwgInNob3VsZFVwZGF0ZSIsICJwcm9wcyIsICJzb21lIiwgImhvb2tJdGVtIiwgInByZXZTY3UiLCAicmVzdWx0IiwgImNhbGwiLCAidGhpcyIsICJzaG91bGRDb21wb25lbnRVcGRhdGUiLCAicHJldkNXVSIsICJjb21wb25lbnRXaWxsVXBkYXRlIiwgIl9fZSIsICJ0bXAiLCAidXNlRWZmZWN0IiwgImNhbGxiYWNrIiwgImFyZ3MiLCAic3RhdGUiLCAiX19zIiwgImFyZ3NDaGFuZ2VkIiwgIl9wZW5kaW5nQXJncyIsICJ1c2VSZWYiLCAiaW5pdGlhbFZhbHVlIiwgImN1cnJlbnRIb29rIiwgInVzZU1lbW8iLCAiY3VycmVudCIsICJ1c2VNZW1vIiwgImZhY3RvcnkiLCAiYXJncyIsICJzdGF0ZSIsICJnZXRIb29rU3RhdGUiLCAiY3VycmVudEluZGV4IiwgImFyZ3NDaGFuZ2VkIiwgIl9fSCIsICJfXyIsICJfX2giLCAiZmx1c2hBZnRlclBhaW50RWZmZWN0cyIsICJjb21wb25lbnQiLCAiYWZ0ZXJQYWludEVmZmVjdHMiLCAic2hpZnQiLCAiaG9va3MiLCAiX19IIiwgIl9fUCIsICJfX2giLCAic29tZSIsICJpbnZva2VDbGVhbnVwIiwgImludm9rZUVmZmVjdCIsICJlIiwgIm9wdGlvbnMiLCAiX19lIiwgIl9fdiIsICJfX2IiLCAidm5vZGUiLCAiY3VycmVudENvbXBvbmVudCIsICJvbGRCZWZvcmVEaWZmIiwgIl9fIiwgInBhcmVudERvbSIsICJfX2siLCAiX19tIiwgIm9sZFJvb3QiLCAiX19yIiwgIm9sZEJlZm9yZVJlbmRlciIsICJjdXJyZW50SW5kZXgiLCAiX19jIiwgInByZXZpb3VzQ29tcG9uZW50IiwgImhvb2tJdGVtIiwgIl9fTiIsICJfcGVuZGluZ0FyZ3MiLCAiZGlmZmVkIiwgIm9sZEFmdGVyRGlmZiIsICJjIiwgImxlbmd0aCIsICJwdXNoIiwgInByZXZSYWYiLCAicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwgImFmdGVyTmV4dEZyYW1lIiwgImNvbW1pdFF1ZXVlIiwgImZpbHRlciIsICJjYiIsICJvbGRDb21taXQiLCAidW5tb3VudCIsICJvbGRCZWZvcmVVbm1vdW50IiwgImhhc0Vycm9yZWQiLCAicyIsICJIQVNfUkFGIiwgImNhbGxiYWNrIiwgInJhZiIsICJkb25lIiwgImNsZWFyVGltZW91dCIsICJ0aW1lb3V0IiwgImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwgInNldFRpbWVvdXQiLCAiaG9vayIsICJjb21wIiwgImNsZWFudXAiLCAiYXJnc0NoYW5nZWQiLCAib2xkQXJncyIsICJuZXdBcmdzIiwgImFyZyIsICJpbmRleCIsICJpbnZva2VPclJldHVybiIsICJmIiwgImkiLCAibiIsICJpIiwgInQiLCAieCIsICJoIiwgInkiLCAidyIsICJyIiwgInUiLCAidiIsICJhIiwgImIiLCAiYyIsICJvIiwgInZub2RlSWQiLCAiY3JlYXRlVk5vZGUiLCAidHlwZSIsICJwcm9wcyIsICJrZXkiLCAiaXNTdGF0aWNDaGlsZHJlbiIsICJfX3NvdXJjZSIsICJfX3NlbGYiLCAicmVmIiwgImkiLCAibm9ybWFsaXplZFByb3BzIiwgInZub2RlIiwgIl9fayIsICJfXyIsICJfX2IiLCAiX19lIiwgIl9fYyIsICJjb25zdHJ1Y3RvciIsICJfX3YiLCAidm5vZGVJZCIsICJfX2kiLCAiX191IiwgImRlZmF1bHRQcm9wcyIsICJvcHRpb25zIiwgInUiLCAiQSIsICJkIiwgImgiLCAicGFpbnQiLCAieCIsICJ5Il0KfQo=
