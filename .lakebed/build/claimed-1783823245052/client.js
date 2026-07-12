// ../../../../private/var/folders/gp/dqgz6cts6h96rxd5hhkxtydw0000gn/T/cursor-sandbox-cache/39232b1d130225932d107b58c3cdf645/npm/_npx/3eb8d3eaaf4ef1b4/node_modules/preact/dist/preact.module.js
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
  var s3, h3, p3, v3, y3, d3, _2, k3, x3, M, $2, I2, P2, A3, H2, T3, j3 = u4.type;
  if (void 0 !== u4.constructor) return null;
  128 & t3.__u && (c3 = !!(32 & t3.__u), o3 = [f4 = u4.__e = t3.__e]), (s3 = l.__b) && s3(u4);
  n: if ("function" == typeof j3) {
    h3 = e3.length;
    try {
      if (x3 = u4.props, M = j3.prototype && j3.prototype.render, $2 = (s3 = j3.contextType) && i3[s3.__c], I2 = s3 ? $2 ? $2.props.value : s3.__ : i3, t3.__c ? k3 = (p3 = u4.__c = t3.__c).__ = p3.__E : (M ? u4.__c = p3 = new j3(x3, I2) : (u4.__c = p3 = new C(x3, I2), p3.constructor = j3, p3.render = Q), $2 && $2.sub(p3), p3.state || (p3.state = {}), p3.__n = i3, v3 = p3.__d = true, p3.__h = [], p3._sb = []), M && null == p3.__s && (p3.__s = p3.state), M && null != j3.getDerivedStateFromProps && (p3.__s == p3.state && (p3.__s = m({}, p3.__s)), m(p3.__s, j3.getDerivedStateFromProps(x3, p3.__s))), y3 = p3.props, d3 = p3.state, p3.__v = u4, v3) M && null == j3.getDerivedStateFromProps && null != p3.componentWillMount && p3.componentWillMount(), M && null != p3.componentDidMount && p3.__h.push(p3.componentDidMount);
      else {
        if (M && null == j3.getDerivedStateFromProps && x3 !== y3 && null != p3.componentWillReceiveProps && p3.componentWillReceiveProps(x3, I2), u4.__v == t3.__v || !p3.__e && null != p3.shouldComponentUpdate && false === p3.shouldComponentUpdate(x3, p3.__s, I2)) {
          u4.__v != t3.__v && (p3.props = x3, p3.state = p3.__s, p3.__d = false), u4.__e = t3.__e, u4.__k = t3.__k, u4.__k.some(function(n3) {
            n3 && (n3.__ = u4);
          }), w.push.apply(p3.__h, p3._sb), p3._sb = [], p3.__h.length && e3.push(p3);
          break n;
        }
        null != p3.componentWillUpdate && p3.componentWillUpdate(x3, p3.__s, I2), M && null != p3.componentDidUpdate && p3.__h.push(function() {
          p3.componentDidUpdate(y3, d3, _2);
        });
      }
      if (p3.context = I2, p3.props = x3, p3.__P = n2, p3.__e = false, P2 = l.__r, A3 = 0, M) p3.state = p3.__s, p3.__d = false, P2 && P2(u4), s3 = p3.render(p3.props, p3.state, p3.context), w.push.apply(p3.__h, p3._sb), p3._sb = [];
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
  var s3, h3, p3, v3, y3, w3, _2, m3 = i3.props || d, k3 = t3.props, x3 = t3.type;
  if ("svg" == x3 ? o3 = "http://www.w3.org/2000/svg" : "math" == x3 ? o3 = "http://www.w3.org/1998/Math/MathML" : o3 || (o3 = "http://www.w3.org/1999/xhtml"), null != e3) {
    for (s3 = 0; s3 < e3.length; s3++) if ((y3 = e3[s3]) && "setAttribute" in y3 == !!x3 && (x3 ? y3.localName == x3 : 3 == y3.nodeType)) {
      u4 = y3, e3[s3] = null;
      break;
    }
  }
  if (null == u4) {
    if (null == x3) return document.createTextNode(k3);
    u4 = document.createElementNS(o3, x3, k3.is && k3), c3 && (l.__m && l.__m(t3, e3), c3 = false), e3 = null;
  }
  if (null == x3) m3 === k3 || c3 && u4.data == k3 || (u4.data = k3);
  else {
    if (e3 = "textarea" == x3 && null != k3.defaultValue ? null : e3 && n.call(u4.childNodes), !c3 && null != e3) for (m3 = {}, s3 = 0; s3 < u4.attributes.length; s3++) m3[(y3 = u4.attributes[s3]).name] = y3.value;
    for (s3 in m3) y3 = m3[s3], "dangerouslySetInnerHTML" == s3 ? p3 = y3 : "children" == s3 || s3 in k3 || "value" == s3 && "defaultValue" in k3 || "checked" == s3 && "defaultChecked" in k3 || N(u4, s3, null, y3, o3);
    for (s3 in k3) y3 = k3[s3], "children" == s3 ? v3 = y3 : "dangerouslySetInnerHTML" == s3 ? h3 = y3 : "value" == s3 ? w3 = y3 : "checked" == s3 ? _2 = y3 : c3 && "function" != typeof y3 || m3[s3] === y3 || N(u4, s3, y3, m3[s3], o3);
    if (h3) c3 || p3 && (h3.__html == p3.__html || h3.__html == u4.innerHTML) || (u4.innerHTML = h3.__html), t3.__k = [];
    else if (p3 && (u4.innerHTML = ""), L("template" == t3.type ? u4.content : u4, g(v3) ? v3 : [v3], t3, i3, r3, "foreignObject" == x3 ? "http://www.w3.org/1999/xhtml" : o3, e3, f4, e3 ? e3[0] : i3.__k && $(i3, 0), c3, a3), null != e3) for (s3 = e3.length; s3--; ) b(e3[s3]);
    c3 && "textarea" != x3 || (s3 = "value", "progress" == x3 && null == w3 ? u4.removeAttribute("value") : null != w3 && (w3 !== u4[s3] || "progress" == x3 && !w3 || "option" == x3 && w3 != m3[s3]) && N(u4, s3, w3, m3[s3], o3), s3 = "checked", null != _2 && _2 != u4[s3] && N(u4, s3, _2, m3[s3], o3));
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
function X(n2) {
  function l3(n3) {
    var u4, t3;
    return this.getChildContext || (u4 = /* @__PURE__ */ new Set(), (t3 = {})[l3.__c] = this, this.getChildContext = function() {
      return t3;
    }, this.componentWillUnmount = function() {
      u4 = null;
    }, this.shouldComponentUpdate = function(n4) {
      this.props.value != n4.value && u4.forEach(function(n5) {
        n5.__e = true, A(n5);
      });
    }, this.sub = function(n4) {
      u4.add(n4);
      var l4 = n4.componentWillUnmount;
      n4.componentWillUnmount = function() {
        u4 && u4.delete(n4), l4 && l4.call(n4);
      };
    }), n3.children;
  }
  return l3.__c = "__cC" + y++, l3.__ = n2, l3.Provider = l3.__l = (l3.Consumer = function(n3, l4) {
    return n3.children(l4);
  }).contextType = l3, l3;
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

// ../../../../private/var/folders/gp/dqgz6cts6h96rxd5hhkxtydw0000gn/T/cursor-sandbox-cache/39232b1d130225932d107b58c3cdf645/npm/_npx/3eb8d3eaaf4ef1b4/node_modules/lakebed/dist/client/internal.js
var DEFAULT_SHOO_BASE_URL = "https://shoo.dev";
var AUTH_STORAGE_KEY = "lakebed_identity";
var LEGACY_SHOO_STORAGE_KEY = "shoo_identity";
var PKCE_STORAGE_KEY = "lakebed_google_pkce";
var RETURN_TO_STORAGE_KEY = "lakebed_google_return_to";
var AUTH_RESUME_STORAGE_KEY = "lakebed_google_resume_attempt";
var PKCE_MAX_AGE_MS = 10 * 60 * 1e3;
var encoder = new TextEncoder();
var auth = createInitialAuth();
var authResumeStarted = false;
var authListeners = /* @__PURE__ */ new Set();
function getAuth() {
  return auth;
}
function setAuth(value) {
  auth = value;
}
function getAuthResumeStarted() {
  return authResumeStarted;
}
function setAuthResumeStarted(value) {
  authResumeStarted = value;
}
function addAuthListener(listener) {
  authListeners.add(listener);
}
function removeAuthListener(listener) {
  authListeners.delete(listener);
}
function emitAuth() {
  for (const listener of authListeners) {
    listener(auth);
  }
}
function normalizeBasePathValue(value) {
  const clean = String(value ?? "").replace(/\/+$/g, "");
  return clean === "/" ? "" : clean;
}
function basePath() {
  return normalizeBasePathValue(window.__LAKEBED_BASE_PATH__ ?? "");
}
function authConfig() {
  return window.__LAKEBED_AUTH__ ?? {};
}
function toGuestName(name) {
  return String(name ?? "local").replace(/^guest:/, "").trim().replace(/[^a-zA-Z0-9_.-]+/g, "-").replace(/^-+|-+$/g, "").toLowerCase() || "local";
}
function toDisplayName(name) {
  return toGuestName(name).split(/[-_\s.]+/).filter(Boolean).map((part) => `${part[0]?.toUpperCase() ?? ""}${part.slice(1)}`).join(" ");
}
function createGuestAuth(name) {
  const guestName = toGuestName(name);
  return {
    displayName: toDisplayName(guestName),
    isAuthenticated: false,
    isGuest: true,
    provider: "guest",
    userId: `guest:${guestName}`
  };
}
function withAuthLoading(value, isLoading) {
  return { ...value, isLoading };
}
function browserStorage() {
  if (typeof window === "undefined") {
    return null;
  }
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}
function browserSessionStorage() {
  if (typeof window === "undefined") {
    return null;
  }
  try {
    return window.sessionStorage;
  } catch {
    return null;
  }
}
function currentGuestName() {
  if (typeof window === "undefined") {
    return "local";
  }
  return new URLSearchParams(window.location.search).get("lakebed_guest") ?? "local";
}
function parseJson(value) {
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}
function decodeBase64Url(value) {
  const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
  const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, "=");
  return atob(padded);
}
function decodeIdentityClaims(idToken) {
  if (!idToken) {
    return null;
  }
  const parts = idToken.split(".");
  if (parts.length < 2) {
    return null;
  }
  return parseJson(decodeBase64Url(parts[1]));
}
function isExpiredClaims(claims) {
  return typeof claims?.exp === "number" && claims.exp * 1e3 <= Date.now();
}
function readStoredIdentity({ allowExpired = false } = {}) {
  const storage = browserStorage();
  if (!storage) {
    return { userId: null };
  }
  let raw = null;
  try {
    raw = storage.getItem(AUTH_STORAGE_KEY) ?? storage.getItem(LEGACY_SHOO_STORAGE_KEY);
  } catch {
    return { userId: null };
  }
  if (!raw) {
    return { userId: null };
  }
  const parsed = parseJson(raw);
  if (!parsed || typeof parsed !== "object") {
    return { userId: null };
  }
  const token = typeof parsed.token === "string" ? parsed.token : void 0;
  const claims = decodeIdentityClaims(token);
  const expired = isExpiredClaims(claims);
  if (expired && !allowExpired) {
    return { expired, userId: null };
  }
  return {
    expired,
    token,
    userId: typeof parsed.userId === "string" ? parsed.userId : typeof parsed.pairwiseSub === "string" ? parsed.pairwiseSub : null
  };
}
function storedAuthToken() {
  return readStoredIdentity().token ?? "";
}
function createGoogleAuthFromToken(token) {
  const claims = decodeIdentityClaims(token);
  const pairwiseSub = claims?.pairwise_sub ?? claims?.sub;
  if (!pairwiseSub) {
    return null;
  }
  const displayName = typeof claims.name === "string" && claims.name.trim() ? claims.name.trim() : "Google User";
  return {
    displayName,
    email: typeof claims.email === "string" ? claims.email : void 0,
    emailVerified: typeof claims.email_verified === "boolean" ? claims.email_verified : void 0,
    isAuthenticated: true,
    isGuest: false,
    picture: typeof claims.picture === "string" ? claims.picture : void 0,
    provider: "google",
    userId: `google:${pairwiseSub}`
  };
}
function createInitialAuth() {
  const token = storedAuthToken();
  const googleAuth = createGoogleAuthFromToken(token);
  if (googleAuth) {
    return withAuthLoading(googleAuth, true);
  }
  return withAuthLoading(createGuestAuth(currentGuestName()), typeof window !== "undefined");
}

// ../../../../private/var/folders/gp/dqgz6cts6h96rxd5hhkxtydw0000gn/T/cursor-sandbox-cache/39232b1d130225932d107b58c3cdf645/npm/_npx/3eb8d3eaaf4ef1b4/node_modules/preact/hooks/dist/hooks.module.js
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

// ../../../../private/var/folders/gp/dqgz6cts6h96rxd5hhkxtydw0000gn/T/cursor-sandbox-cache/39232b1d130225932d107b58c3cdf645/npm/_npx/3eb8d3eaaf4ef1b4/node_modules/lakebed/dist/client/transport.js
var socket = null;
var nextRequestId = 1;
var refreshRequested = false;
var queryValues = /* @__PURE__ */ new Map();
var queryListeners = /* @__PURE__ */ new Map();
var pending = /* @__PURE__ */ new Map();
var activeSubscriptions = /* @__PURE__ */ new Set();
function getQueryValue(name) {
  return queryValues.get(name);
}
function addQueryListener(name, listener) {
  activeSubscriptions.add(name);
  if (!queryListeners.has(name)) {
    queryListeners.set(name, /* @__PURE__ */ new Set());
  }
  queryListeners.get(name).add(listener);
}
function removeQueryListener(name, listener) {
  queryListeners.get(name)?.delete(listener);
}
function emitQuery(name, value) {
  queryValues.set(name, value);
  const listeners = queryListeners.get(name);
  if (!listeners) {
    return;
  }
  for (const listener of listeners) {
    listener(value);
  }
}
function refreshPage() {
  if (refreshRequested) {
    return;
  }
  refreshRequested = true;
  window.location.reload();
}
function send(message) {
  const ws = connect();
  const payload = JSON.stringify(message);
  if (ws.readyState === WebSocket.OPEN) {
    ws.send(payload);
    return;
  }
  ws.addEventListener("open", () => {
    ws.send(payload);
  }, { once: true });
}
function request(op, payload) {
  const id = nextRequestId++;
  send({ id, op, ...payload });
  return new Promise((resolve, reject) => {
    pending.set(id, { resolve, reject });
  });
}
function connect() {
  if (socket && socket.readyState !== WebSocket.CLOSED && socket.readyState !== WebSocket.CLOSING) {
    return socket;
  }
  void ensureAuthInitialized();
  const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
  const url = new URL(`${protocol}//${window.location.host}${basePath()}/__lakebed/ws`);
  const guestName = new URLSearchParams(window.location.search).get("lakebed_guest");
  if (guestName) {
    url.searchParams.set("lakebed_guest", guestName);
  }
  const token = storedAuthToken();
  if (token) {
    url.searchParams.set("lakebed_token", token);
  }
  socket = new WebSocket(url);
  const currentSocket = socket;
  currentSocket.addEventListener("open", () => {
    send({ op: "auth.get" });
    for (const name of activeSubscriptions) {
      send({ op: "query.subscribe", name });
    }
  });
  currentSocket.addEventListener("message", (event) => {
    const message = JSON.parse(String(event.data));
    if (message.op === "auth.result") {
      if (getAuthResumeStarted()) {
        return;
      }
      setAuth(withAuthLoading(message.auth, false));
      emitAuth();
      return;
    }
    if (message.op === "query.result") {
      emitQuery(message.name, message.data);
      return;
    }
    if (message.op === "refresh") {
      refreshPage();
      return;
    }
    if (message.id && pending.has(message.id)) {
      const handlers = pending.get(message.id);
      pending.delete(message.id);
      if (message.ok) {
        handlers.resolve(message.result);
      } else {
        handlers.reject(new Error(message.error ?? "Lakebed request failed"));
      }
    }
  });
  currentSocket.addEventListener("close", () => {
    if (socket !== currentSocket) {
      return;
    }
    window.setTimeout(() => {
      if (socket !== currentSocket) {
        return;
      }
      socket = null;
      connect();
    }, 500);
  });
  return socket;
}
function reconnect() {
  if (socket && socket.readyState !== WebSocket.CLOSED && socket.readyState !== WebSocket.CLOSING) {
    socket.close();
  }
  socket = null;
  connect();
}

// ../../../../private/var/folders/gp/dqgz6cts6h96rxd5hhkxtydw0000gn/T/cursor-sandbox-cache/39232b1d130225932d107b58c3cdf645/npm/_npx/3eb8d3eaaf4ef1b4/node_modules/lakebed/dist/client/auth.js
var authInitPromise = null;
var authInitialized = false;
function callbackPath() {
  return `${basePath()}/auth/callback`.replace(/\/{2,}/g, "/");
}
function currentRoute() {
  return `${window.location.pathname}${window.location.search}${window.location.hash}`;
}
function normalizeReturnTo(value) {
  if (!value) {
    return null;
  }
  try {
    const parsed = new URL(value, window.location.origin);
    if (parsed.origin !== window.location.origin) {
      return null;
    }
    const route = `${parsed.pathname}${parsed.search}${parsed.hash}`;
    if (!route.startsWith("/") || route.startsWith("//")) {
      return null;
    }
    return route;
  } catch {
    return null;
  }
}
function fallbackRoute() {
  return basePath() || "/";
}
function deriveRedirectUri(path) {
  return new URL(path, window.location.origin).toString();
}
function deriveClientIdFromRedirectUri(redirectUri) {
  return `origin:${new URL(redirectUri).origin}`;
}
function resolveGoogleAuthOptions(options = {}) {
  const resolvedCallbackPath = normalizeReturnTo(options.callbackPath) ?? callbackPath();
  const redirectUri = options.redirectUri ?? deriveRedirectUri(resolvedCallbackPath);
  return {
    callbackPath: resolvedCallbackPath,
    clientId: options.clientId ?? deriveClientIdFromRedirectUri(redirectUri),
    redirectUri,
    returnTo: normalizeReturnTo(options.returnTo) ?? currentRoute(),
    shooBaseUrl: String(options.shooBaseUrl ?? authConfig().shooBaseUrl ?? DEFAULT_SHOO_BASE_URL).replace(/\/+$/g, "")
  };
}
function randomString(length = 64) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";
  const random = crypto.getRandomValues(new Uint8Array(length));
  let value = "";
  for (let index = 0; index < random.length; index += 1) {
    value += chars[random[index] % chars.length];
  }
  return value;
}
function bytesToBase64Url(bytes) {
  let binary = "";
  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}
async function createPkceBundle() {
  const verifier = randomString(64);
  const state = randomString(32);
  const digest = await crypto.subtle.digest("SHA-256", encoder.encode(verifier));
  return {
    challenge: bytesToBase64Url(new Uint8Array(digest)),
    state,
    verifier
  };
}
function createSignInUrl(options, bundle) {
  const url = new URL("/authorize", options.shooBaseUrl);
  url.searchParams.set("client_id", options.clientId);
  url.searchParams.set("redirect_uri", options.redirectUri);
  url.searchParams.set("state", bundle.state);
  url.searchParams.set("code_challenge", bundle.challenge);
  url.searchParams.set("code_challenge_method", "S256");
  url.searchParams.set("pii", "true");
  return url.toString();
}
function persistIdentity(userId, token, expiresIn) {
  const storage = browserStorage();
  if (!storage) {
    return;
  }
  try {
    storage.setItem(AUTH_STORAGE_KEY, JSON.stringify({
      expiresIn,
      receivedAt: Date.now(),
      token,
      userId
    }));
  } catch {
  }
}
function clearStoredIdentity() {
  const storage = browserStorage();
  if (!storage) {
    return;
  }
  try {
    storage.removeItem(AUTH_STORAGE_KEY);
    storage.removeItem(LEGACY_SHOO_STORAGE_KEY);
  } catch {
  }
}
function clearAuthResumeAttempt() {
  const storage = browserSessionStorage();
  if (!storage) {
    return;
  }
  try {
    storage.removeItem(AUTH_RESUME_STORAGE_KEY);
  } catch {
  }
}
function parseCallback(url = window.location.href) {
  const parsed = new URL(url);
  const code = parsed.searchParams.get("code");
  const state = parsed.searchParams.get("state");
  if (!code || !state) {
    return null;
  }
  return { code, state };
}
function clearCallbackParams(url = window.location.href) {
  const next = new URL(url);
  next.searchParams.delete("code");
  next.searchParams.delete("state");
  next.searchParams.delete("error");
  window.history.replaceState({}, "", next.toString());
}
function popReturnTo() {
  const value = normalizeReturnTo(window.sessionStorage.getItem(RETURN_TO_STORAGE_KEY));
  window.sessionStorage.removeItem(RETURN_TO_STORAGE_KEY);
  return value;
}
async function exchangeCode({ code, codeVerifier, options }) {
  const body = new URLSearchParams({
    client_id: options.clientId,
    code,
    code_verifier: codeVerifier,
    grant_type: "authorization_code",
    redirect_uri: options.redirectUri
  });
  const response = await fetch(new URL("/token", options.shooBaseUrl), {
    body,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    method: "POST"
  });
  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Google sign-in token exchange failed (${response.status}): ${details || "no details"}`);
  }
  return response.json();
}
async function handleGoogleCallback() {
  const callback = parseCallback();
  if (!callback) {
    return null;
  }
  const rawPkce = window.sessionStorage.getItem(PKCE_STORAGE_KEY);
  const parsedPkce = rawPkce ? parseJson(rawPkce) : null;
  if (!parsedPkce?.state || !parsedPkce?.verifier) {
    throw new Error("Missing Google sign-in verifier. Start sign-in again.");
  }
  if (typeof parsedPkce.createdAt === "number" && Date.now() - parsedPkce.createdAt > PKCE_MAX_AGE_MS) {
    window.sessionStorage.removeItem(PKCE_STORAGE_KEY);
    throw new Error("Google sign-in verifier expired. Start sign-in again.");
  }
  if (parsedPkce.state !== callback.state) {
    throw new Error("Google sign-in state mismatch.");
  }
  const options = resolveGoogleAuthOptions();
  const token = await exchangeCode({
    code: callback.code,
    codeVerifier: parsedPkce.verifier,
    options
  });
  if (!token?.id_token || !token?.pairwise_sub) {
    throw new Error("Google sign-in token response was missing identity claims.");
  }
  persistIdentity(token.pairwise_sub, token.id_token, token.expires_in);
  clearAuthResumeAttempt();
  window.sessionStorage.removeItem(PKCE_STORAGE_KEY);
  const localAuth = createGoogleAuthFromToken(token.id_token);
  if (localAuth) {
    setAuth(withAuthLoading(localAuth, true));
    emitAuth();
  }
  const returnTo = popReturnTo() ?? fallbackRoute();
  clearCallbackParams();
  window.location.replace(returnTo);
  return token;
}
function authResumeAttemptKey(identity) {
  const claims = decodeIdentityClaims(identity.token);
  return [identity.userId, claims?.jti, claims?.exp].filter(Boolean).join(":") || identity.token;
}
function beginStoredGoogleSessionResume() {
  if (typeof window === "undefined" || getAuthResumeStarted()) {
    return false;
  }
  if (parseCallback()) {
    return false;
  }
  const search = new URLSearchParams(window.location.search);
  if (search.has("error") || window.location.pathname === callbackPath()) {
    return false;
  }
  if (search.has("lakebed_guest") || search.has("guest")) {
    return false;
  }
  const identity = readStoredIdentity({ allowExpired: true });
  if (!identity.token || !identity.expired) {
    return false;
  }
  const claims = decodeIdentityClaims(identity.token);
  if (!claims?.pairwise_sub && !claims?.sub) {
    clearStoredIdentity();
    return false;
  }
  const storage = browserSessionStorage();
  const attemptKey = authResumeAttemptKey(identity);
  try {
    if (storage?.getItem(AUTH_RESUME_STORAGE_KEY) === attemptKey) {
      return false;
    }
    storage?.setItem(AUTH_RESUME_STORAGE_KEY, attemptKey);
  } catch {
  }
  setAuthResumeStarted(true);
  setAuth(withAuthLoading(createGuestAuth(currentGuestName()), true));
  emitAuth();
  void signInWithGoogle({ returnTo: currentRoute() }).catch((error) => {
    console.error("[lakebed] Google session resume failed", error);
    setAuthResumeStarted(false);
    clearStoredIdentity();
    clearAuthResumeAttempt();
    setAuth(withAuthLoading(createGuestAuth(currentGuestName()), false));
    emitAuth();
    reconnect();
  });
  return true;
}
function ensureAuthInitialized() {
  if (authInitialized) {
    return Promise.resolve();
  }
  if (beginStoredGoogleSessionResume()) {
    authInitialized = true;
    return Promise.resolve();
  }
  authInitPromise ??= handleGoogleCallback().then(() => void 0).catch((error) => {
    console.error("[lakebed] Google sign-in failed", error);
  }).finally(() => {
    authInitialized = true;
  });
  return authInitPromise;
}
function useAuth() {
  const [value, setValue] = d2(getAuth());
  h2(() => {
    void ensureAuthInitialized();
    connect();
    addAuthListener(setValue);
    return () => {
      removeAuthListener(setValue);
    };
  }, []);
  return value;
}
async function signInWithGoogle(options = {}) {
  const resolved = resolveGoogleAuthOptions(options);
  const bundle = await createPkceBundle();
  window.sessionStorage.setItem(PKCE_STORAGE_KEY, JSON.stringify({
    createdAt: Date.now(),
    state: bundle.state,
    verifier: bundle.verifier
  }));
  window.sessionStorage.setItem(RETURN_TO_STORAGE_KEY, normalizeReturnTo(resolved.returnTo) === resolved.callbackPath ? fallbackRoute() : normalizeReturnTo(resolved.returnTo) ?? fallbackRoute());
  const url = createSignInUrl(resolved, bundle);
  window.location.assign(url);
  return { bundle, url };
}

// ../../../../private/var/folders/gp/dqgz6cts6h96rxd5hhkxtydw0000gn/T/cursor-sandbox-cache/39232b1d130225932d107b58c3cdf645/npm/_npx/3eb8d3eaaf4ef1b4/node_modules/lakebed/dist/client/router.js
var RouterContext = X(null);
var RouteContext = X({ params: {} });

// ../../../../private/var/folders/gp/dqgz6cts6h96rxd5hhkxtydw0000gn/T/cursor-sandbox-cache/39232b1d130225932d107b58c3cdf645/npm/_npx/3eb8d3eaaf4ef1b4/node_modules/lakebed/dist/client/hooks.js
function useQuery(name) {
  const [value, setValue] = d2(getQueryValue(name) ?? []);
  h2(() => {
    connect();
    addQueryListener(name, setValue);
    send({ op: "query.subscribe", name });
    return () => {
      removeQueryListener(name, setValue);
    };
  }, [name]);
  return value;
}
function useMutation(name) {
  return (...args) => request("mutation.run", { name, args });
}

// lakebed-source:shared/types.ts
var MAX_LAYERS = 12;
var MEDIA_KINDS = ["image", "video", "audio", "data"];
var BLEND_MODES = [
  "normal",
  "add",
  "screen",
  "multiply",
  "overlay",
  "difference",
  "lighten",
  "darken"
];
var TILE_MODES = ["crop", "repeat", "mirror"];
var BG_MODES = ["void", "gradient", "plasma", "tunnel"];
var POINTER_MODES = ["vortex", "gravity", "prism", "melt"];
var DEFAULT_LAYER_FX = {
  x: 0,
  y: 0,
  scale: 1,
  rotation: 0,
  opacity: 1,
  blend: "normal",
  visible: true,
  tile: 0,
  warp: 0,
  swirl: 0,
  ripple: 0,
  kaleido: 0,
  pixelate: 0,
  bulge: 0,
  mirror: 0,
  hue: 0,
  saturation: 1,
  contrast: 1,
  brightness: 1,
  invert: 0,
  posterize: 0,
  chroma: 0,
  edges: 0,
  tintAmount: 0,
  tintColor: "#a87880",
  spin: 0,
  drift: 0,
  pulse: 0,
  shimmer: 0
};
var DEFAULT_GLOBAL_FX = {
  bgMode: 0,
  bgA: "#060608",
  bgB: "#1a1216",
  feedback: 0,
  trails: 0.6,
  fbZoom: 0,
  fbRotate: 0,
  fbHue: 0,
  warp: 0,
  swirl: 0,
  ripple: 0,
  zoom: 0,
  kaleido: 0,
  mirror: 0,
  chroma: 0,
  hueOrbit: 0,
  saturation: 1,
  contrast: 1,
  solarize: 0,
  grain: 0,
  scanlines: 0,
  vignette: 0.22,
  strobe: 0,
  speed: 1,
  audioReact: 0,
  pointerForce: 0.6,
  pointerSize: 0.35,
  pointerMode: 0
};
function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}
function finite(value, fallback) {
  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}
function num(value, fallback, min, max) {
  return clamp(finite(value, fallback), min, max);
}
function color(value, fallback) {
  return typeof value === "string" && /^#[0-9a-f]{6}$/i.test(value) ? value : fallback;
}
function sanitizeLayerFx(input) {
  const t3 = input ?? {};
  const d3 = DEFAULT_LAYER_FX;
  return {
    x: num(t3.x, d3.x, -3, 3),
    y: num(t3.y, d3.y, -3, 3),
    scale: num(t3.scale, d3.scale, 0.05, 6),
    rotation: num(t3.rotation, d3.rotation, -3600, 3600),
    opacity: num(t3.opacity, d3.opacity, 0, 1),
    blend: BLEND_MODES.includes(t3.blend) ? t3.blend : "normal",
    visible: typeof t3.visible === "boolean" ? t3.visible : true,
    tile: num(t3.tile, d3.tile, 0, 2),
    warp: num(t3.warp, d3.warp, 0, 1),
    swirl: num(t3.swirl, d3.swirl, 0, 1),
    ripple: num(t3.ripple, d3.ripple, 0, 1),
    kaleido: num(t3.kaleido, d3.kaleido, 0, 1),
    pixelate: num(t3.pixelate, d3.pixelate, 0, 1),
    bulge: num(t3.bulge, d3.bulge, -1, 1),
    mirror: num(t3.mirror, d3.mirror, 0, 1),
    hue: num(t3.hue, d3.hue, 0, 1),
    saturation: num(t3.saturation, d3.saturation, 0, 2),
    contrast: num(t3.contrast, d3.contrast, 0, 2),
    brightness: num(t3.brightness, d3.brightness, 0, 2),
    invert: num(t3.invert, d3.invert, 0, 1),
    posterize: num(t3.posterize, d3.posterize, 0, 1),
    chroma: num(t3.chroma, d3.chroma, 0, 1),
    edges: num(t3.edges, d3.edges, 0, 1),
    tintAmount: num(t3.tintAmount, d3.tintAmount, 0, 1),
    tintColor: color(t3.tintColor, d3.tintColor),
    spin: num(t3.spin, d3.spin, -1, 1),
    drift: num(t3.drift, d3.drift, 0, 1),
    pulse: num(t3.pulse, d3.pulse, 0, 1),
    shimmer: num(t3.shimmer, d3.shimmer, 0, 1)
  };
}
function sanitizeGlobalFx(input) {
  const t3 = input ?? {};
  const d3 = DEFAULT_GLOBAL_FX;
  return {
    bgMode: num(t3.bgMode, d3.bgMode, 0, BG_MODES.length - 1),
    bgA: color(t3.bgA, d3.bgA),
    bgB: color(t3.bgB, d3.bgB),
    feedback: num(t3.feedback, d3.feedback, 0, 1),
    trails: num(t3.trails, d3.trails, 0, 1),
    fbZoom: num(t3.fbZoom, d3.fbZoom, -1, 1),
    fbRotate: num(t3.fbRotate, d3.fbRotate, -1, 1),
    fbHue: num(t3.fbHue, d3.fbHue, 0, 1),
    warp: num(t3.warp, d3.warp, 0, 1),
    swirl: num(t3.swirl, d3.swirl, 0, 1),
    ripple: num(t3.ripple, d3.ripple, 0, 1),
    zoom: num(t3.zoom, d3.zoom, 0, 1),
    kaleido: num(t3.kaleido, d3.kaleido, 0, 1),
    mirror: num(t3.mirror, d3.mirror, 0, 1),
    chroma: num(t3.chroma, d3.chroma, 0, 1),
    hueOrbit: num(t3.hueOrbit, d3.hueOrbit, 0, 1),
    saturation: num(t3.saturation, d3.saturation, 0, 2),
    contrast: num(t3.contrast, d3.contrast, 0, 2),
    solarize: num(t3.solarize, d3.solarize, 0, 1),
    grain: num(t3.grain, d3.grain, 0, 1),
    scanlines: num(t3.scanlines, d3.scanlines, 0, 1),
    vignette: num(t3.vignette, d3.vignette, 0, 1),
    strobe: num(t3.strobe, d3.strobe, 0, 1),
    speed: num(t3.speed, d3.speed, 0, 2),
    audioReact: num(t3.audioReact, d3.audioReact, 0, 1),
    pointerForce: num(t3.pointerForce, d3.pointerForce, 0, 1),
    pointerSize: num(t3.pointerSize, d3.pointerSize, 0.02, 1),
    pointerMode: num(t3.pointerMode, d3.pointerMode, 0, POINTER_MODES.length - 1)
  };
}
function cleanName(value, fallback) {
  const cleaned = value.replace(/\s+/g, " ").trim().slice(0, 80);
  return cleaned || fallback;
}
function sanitizeScene(input) {
  const raw = input ?? {};
  const layersRaw = Array.isArray(raw.layers) ? raw.layers.slice(0, MAX_LAYERS) : [];
  return {
    name: cleanName(typeof raw.name === "string" ? raw.name : "", "Untitled"),
    layers: layersRaw.filter((l3) => !!l3 && typeof l3 === "object").map((l3, index) => ({
      id: typeof l3.id === "string" && l3.id ? l3.id.slice(0, 40) : `layer-${index}`,
      imageId: typeof l3.imageId === "string" ? l3.imageId.slice(0, 60) : "",
      name: cleanName(typeof l3.name === "string" ? l3.name : "", "Layer"),
      mediaKind: MEDIA_KINDS.includes(l3.mediaKind) ? l3.mediaKind : "image",
      fx: sanitizeLayerFx(l3.fx)
    })),
    global: sanitizeGlobalFx(raw.global)
  };
}
function encodeScene(scene) {
  return JSON.stringify(scene);
}
function decodeScene(raw) {
  try {
    return sanitizeScene(JSON.parse(raw));
  } catch {
    return sanitizeScene(null);
  }
}

// lakebed-source:shared/presets.ts
function look(overrides) {
  return { ...DEFAULT_GLOBAL_FX, ...overrides };
}
var WORLD_PRESETS = [
  { name: "Clean signal", code: "00", global: look({}) },
  {
    name: "Liquid chrome",
    code: "01",
    global: look({
      warp: 0.5,
      swirl: 0.34,
      chroma: 0.3,
      hueOrbit: 0.24,
      saturation: 1.2,
      contrast: 1.12,
      feedback: 0.42,
      trails: 0.72,
      fbZoom: 0.12,
      grain: 0.1
    })
  },
  {
    name: "Echo tunnel",
    code: "02",
    global: look({
      zoom: 0.4,
      feedback: 0.82,
      trails: 0.9,
      fbZoom: 0.34,
      fbRotate: 0.14,
      fbHue: 0.12,
      chroma: 0.28,
      vignette: 0.4,
      hueOrbit: 0.16,
      contrast: 1.08
    })
  },
  {
    name: "Kaleido cathedral",
    code: "03",
    global: look({
      kaleido: 0.72,
      mirror: 0.3,
      chroma: 0.34,
      hueOrbit: 0.4,
      saturation: 1.5,
      contrast: 1.1,
      feedback: 0.26,
      trails: 0.6,
      ripple: 0.18,
      vignette: 0.3
    })
  },
  {
    name: "VHS seance",
    code: "04",
    global: look({
      scanlines: 0.66,
      grain: 0.5,
      chroma: 0.62,
      feedback: 0.42,
      trails: 0.68,
      saturation: 0.88,
      contrast: 1.22,
      vignette: 0.48,
      strobe: 0.08
    })
  },
  {
    name: "Acid bath",
    code: "05",
    global: look({
      warp: 0.68,
      ripple: 0.4,
      hueOrbit: 0.7,
      saturation: 1.85,
      solarize: 0.5,
      contrast: 1.15,
      feedback: 0.5,
      trails: 0.78,
      fbHue: 0.3,
      speed: 1.2
    })
  },
  {
    name: "Ghost trails",
    code: "06",
    global: look({
      feedback: 0.92,
      trails: 0.97,
      fbZoom: 0.06,
      fbRotate: -0.05,
      saturation: 0.6,
      contrast: 1.14,
      grain: 0.2,
      vignette: 0.5,
      speed: 0.5
    })
  },
  {
    name: "Neon autopsy",
    code: "07",
    global: look({
      chroma: 0.8,
      solarize: 0.28,
      contrast: 1.35,
      saturation: 1.6,
      kaleido: 0.18,
      hueOrbit: 0.32,
      feedback: 0.3,
      trails: 0.62,
      scanlines: 0.2
    })
  },
  {
    name: "Prism storm",
    code: "08",
    global: look({
      warp: 0.34,
      ripple: 0.28,
      chroma: 0.92,
      feedback: 0.56,
      trails: 0.8,
      fbZoom: -0.14,
      grain: 0.24,
      speed: 1.5,
      strobe: 0.16,
      contrast: 1.2
    })
  },
  {
    name: "Solar flare",
    code: "09",
    global: look({
      zoom: 0.26,
      swirl: 0.5,
      ripple: 0.34,
      hueOrbit: 0.5,
      saturation: 1.7,
      solarize: 0.72,
      feedback: 0.44,
      trails: 0.7,
      fbHue: 0.2,
      vignette: 0.36,
      strobe: 0.1,
      speed: 0.9
    })
  },
  {
    name: "Deep void",
    code: "10",
    global: look({
      bgMode: 2,
      mirror: 0.5,
      warp: 0.24,
      chroma: 0.2,
      saturation: 0.85,
      contrast: 1.25,
      feedback: 0.68,
      trails: 0.88,
      fbZoom: 0.2,
      vignette: 0.6,
      hueOrbit: 0.1,
      speed: 0.6
    })
  }
];
function rand(min = 0, max = 1) {
  return min + Math.random() * (max - min);
}
function chance(p3) {
  return Math.random() < p3;
}
function pickDistinct(items, count) {
  const pool = items.slice();
  const picks = [];
  while (picks.length < count && pool.length) {
    let total = 0;
    for (const item of pool) total += item.weight;
    let roll = Math.random() * total;
    let index = 0;
    for (; index < pool.length; index++) {
      roll -= pool[index].weight;
      if (roll <= 0) break;
    }
    picks.push(pool.splice(Math.min(index, pool.length - 1), 1)[0]);
  }
  return picks;
}
var WORLD_SPACE_POOL = [
  { key: "warp", weight: 3, min: 0.3, max: 0.9 },
  { key: "swirl", weight: 2.4, min: 0.25, max: 0.8 },
  { key: "zoom", weight: 2, min: 0.2, max: 0.6 },
  { key: "mirror", weight: 1.6, min: 0.2, max: 0.7 },
  { key: "ripple", weight: 0.9, min: 0.12, max: 0.4 },
  { key: "kaleido", weight: 0.6, min: 0.2, max: 0.7 }
];
function randomGlobalFx(base) {
  const next = {
    ...DEFAULT_GLOBAL_FX,
    bgA: base.bgA,
    bgB: base.bgB,
    audioReact: base.audioReact,
    pointerForce: base.pointerForce,
    pointerSize: base.pointerSize,
    pointerMode: Math.floor(rand(0, 4)),
    bgMode: Math.floor(rand(0, 4))
  };
  const spacePicks = pickDistinct(WORLD_SPACE_POOL, chance(0.5) ? 2 : 1);
  spacePicks.forEach((pick, index) => {
    const strength = rand(pick.min, pick.max) * (index === 0 ? 1 : 0.5);
    next[pick.key] = strength;
  });
  if (chance(0.55)) {
    next.feedback = rand(0.3, 0.85);
    next.trails = rand(0.5, 0.95);
    if (chance(0.6)) next.fbZoom = rand(-0.35, 0.35);
    if (chance(0.4)) next.fbRotate = rand(-0.25, 0.25);
    if (chance(0.4)) next.fbHue = rand(0.05, 0.4);
  }
  if (chance(0.5)) next.hueOrbit = rand(0.1, 0.7);
  if (chance(0.5)) next.chroma = rand(0.1, 0.7);
  if (chance(0.22)) next.solarize = rand(0.2, 0.7);
  next.saturation = rand(0.85, 1.6);
  next.contrast = rand(0.95, 1.3);
  if (chance(0.35)) next.grain = rand(0.05, 0.4);
  if (chance(0.22)) next.scanlines = rand(0.1, 0.5);
  if (chance(0.12)) next.strobe = rand(0.05, 0.3);
  next.vignette = rand(0.1, 0.5);
  next.speed = rand(0.45, 1.5);
  return next;
}
function mutateGlobalFx(current) {
  const next = { ...current };
  const keys = [
    "feedback",
    "trails",
    "fbZoom",
    "fbRotate",
    "fbHue",
    "warp",
    "swirl",
    "ripple",
    "zoom",
    "kaleido",
    "mirror",
    "chroma",
    "hueOrbit",
    "saturation",
    "contrast",
    "solarize",
    "grain",
    "scanlines",
    "vignette",
    "strobe",
    "speed"
  ];
  for (const key of keys) {
    const value = next[key];
    const max = key === "saturation" || key === "contrast" || key === "speed" ? 2 : 1;
    const min = key === "fbZoom" || key === "fbRotate" ? -1 : 0;
    next[key] = clamp(value + (Math.random() - 0.5) * 0.24, min, max);
  }
  next.feedback = Math.min(next.feedback, 0.9);
  return next;
}
var CHAOS_BLENDS = ["normal", "add", "screen", "overlay", "difference", "lighten"];
var LAYER_DISTORT_POOL = [
  { key: "warp", weight: 3, min: 0.2, max: 0.8 },
  { key: "swirl", weight: 2, min: 0.2, max: 0.7 },
  { key: "bulge", weight: 2, min: 0.3, max: 0.8 },
  { key: "pixelate", weight: 1.3, min: 0.15, max: 0.6 },
  { key: "mirror", weight: 1.2, min: 0.2, max: 0.7 },
  { key: "ripple", weight: 0.9, min: 0.1, max: 0.45 },
  { key: "kaleido", weight: 0.5, min: 0.25, max: 0.75 }
];
function randomLayerFx(current) {
  const next = {
    ...resetLayerFxEffects(current),
    blend: chance(0.4) ? CHAOS_BLENDS[Math.floor(rand(0, CHAOS_BLENDS.length))] : current.blend
  };
  const distortPicks = pickDistinct(LAYER_DISTORT_POOL, chance(0.45) ? 2 : 1);
  distortPicks.forEach((pick, index) => {
    let strength = rand(pick.min, pick.max) * (index === 0 ? 1 : 0.55);
    if (pick.key === "bulge" && chance(0.5)) strength = -strength;
    next[pick.key] = strength;
  });
  if (chance(0.6)) next.hue = Math.random();
  next.saturation = rand(0.75, 1.65);
  next.contrast = rand(0.9, 1.35);
  next.brightness = rand(0.9, 1.2);
  if (chance(0.22)) next.posterize = rand(0.2, 0.7);
  if (chance(0.4)) next.chroma = rand(0.1, 0.6);
  if (chance(0.18)) next.edges = rand(0.2, 0.8);
  if (chance(0.08)) next.invert = rand(0.5, 1);
  if (chance(0.15)) next.tintAmount = rand(0.2, 0.6);
  if (chance(0.35)) next.spin = rand(0.05, 0.4) * (chance(0.5) ? -1 : 1);
  if (chance(0.4)) next.drift = rand(0.1, 0.5);
  if (chance(0.35)) next.pulse = rand(0.1, 0.6);
  if (chance(0.45)) next.shimmer = rand(0.2, 0.8);
  return next;
}
function resetLayerFxEffects(current) {
  return {
    ...DEFAULT_LAYER_FX,
    x: current.x,
    y: current.y,
    scale: current.scale,
    rotation: current.rotation,
    opacity: current.opacity,
    blend: current.blend,
    visible: current.visible,
    tile: current.tile
  };
}
function blendIndex(blend) {
  const index = BLEND_MODES.indexOf(blend);
  return index < 0 ? 0 : index;
}

// lakebed-source:client/engine.ts
var VERT = `
attribute vec2 a_pos;
varying vec2 v_uv;
void main() {
  v_uv = a_pos * 0.5 + 0.5;
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`;
var GLSL_COMMON = `
precision highp float;
mat2 rot2(float a) { float c = cos(a); float s = sin(a); return mat2(c, -s, s, c); }
float hash21(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }
float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
float fbm(vec2 p) {
  float v = 0.0;
  float amp = 0.5;
  for (int i = 0; i < 4; i++) {
    v += amp * vnoise(p);
    p = p * 2.03 + vec2(17.3, 9.1);
    amp *= 0.5;
  }
  return v;
}
vec3 hueRotate(vec3 color, float angle) {
  const vec3 k = vec3(0.57735);
  float c = cos(angle);
  float s = sin(angle);
  return color * c + cross(k, color) * s + k * dot(k, color) * (1.0 - c);
}
float luma(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }
`;
var COPY_FRAG = `
precision mediump float;
varying vec2 v_uv;
uniform sampler2D u_tex;
void main() { gl_FragColor = vec4(texture2D(u_tex, v_uv).rgb, 1.0); }
`;
var BG_FRAG = `
${GLSL_COMMON}
varying vec2 v_uv;
uniform vec2 u_res;
uniform float u_time;
uniform float u_mode;
uniform vec3 u_color_a;
uniform vec3 u_color_b;
uniform float u_audio;

void main() {
  vec2 aspect = vec2(u_res.x / max(u_res.y, 1.0), 1.0);
  vec2 n = (v_uv - 0.5) * aspect;
  vec3 col = u_color_a;
  if (u_mode > 2.5) {
    // Tunnel rings
    float r = length(n) + 0.12;
    float a = atan(n.y, n.x);
    float wave = sin(2.4 / r - u_time * 1.6 + a * 3.0 + sin(u_time * 0.4) * 2.0);
    col = mix(u_color_a, u_color_b, 0.5 + 0.5 * wave);
    col *= smoothstep(0.0, 0.25, r) * (0.85 + u_audio * 0.5);
  } else if (u_mode > 1.5) {
    // Plasma
    float t = u_time * 0.25;
    float f = fbm(n * 2.2 + vec2(t, -t * 0.7));
    float g = fbm(n * 3.4 - vec2(t * 0.6, t) + f * 2.0);
    col = mix(u_color_a, u_color_b, clamp(g * 1.6 - 0.2 + u_audio * 0.3, 0.0, 1.0));
    col = hueRotate(col, f * 1.2 + t * 0.3);
  } else if (u_mode > 0.5) {
    // Drifting gradient
    vec2 dir = vec2(cos(u_time * 0.11), sin(u_time * 0.11));
    float g = clamp(dot(n, dir) * 0.9 + 0.5, 0.0, 1.0);
    col = mix(u_color_a, u_color_b, g);
  }
  gl_FragColor = vec4(col, 1.0);
}
`;
var LAYER_FRAG = `
${GLSL_COMMON}
varying vec2 v_uv;
uniform sampler2D u_dest;
uniform sampler2D u_img;
uniform vec2 u_res;
uniform vec2 u_img_texel;
uniform vec2 u_pos;
uniform vec2 u_ext;
uniform float u_rot;
uniform float u_time;
uniform float u_audio;
uniform float u_opacity;
uniform float u_blend;
uniform float u_tile;
uniform float u_warp;
uniform float u_swirl;
uniform float u_ripple;
uniform float u_kaleido;
uniform float u_pixelate;
uniform float u_bulge;
uniform float u_mirror;
uniform float u_hue;
uniform float u_sat;
uniform float u_con;
uniform float u_bri;
uniform float u_invert;
uniform float u_poster;
uniform float u_chroma;
uniform float u_edges;
uniform vec3 u_tint;
uniform float u_tint_amt;
uniform float u_shimmer;
uniform float u_seed;

vec2 tileUv(vec2 uv) {
  if (u_tile > 1.5) return abs(fract(uv * 0.5) * 2.0 - 1.0);
  if (u_tile > 0.5) return fract(uv);
  return uv;
}

float tileMask(vec2 uv) {
  if (u_tile > 0.5) return 1.0;
  vec2 inside = step(vec2(0.0), uv) * step(uv, vec2(1.0));
  return inside.x * inside.y;
}

vec4 tap(vec2 uv) {
  vec4 s = texture2D(u_img, clamp(tileUv(uv), 0.0, 1.0));
  s.a *= tileMask(uv);
  return s;
}

vec3 blendPix(vec3 d, vec3 s) {
  float m = u_blend;
  if (m < 0.5) return s;
  if (m < 1.5) return d + s;
  if (m < 2.5) return 1.0 - (1.0 - d) * (1.0 - s);
  if (m < 3.5) return d * s;
  if (m < 4.5) {
    vec3 lo = 2.0 * d * s;
    vec3 hi = 1.0 - 2.0 * (1.0 - d) * (1.0 - s);
    return mix(lo, hi, step(0.5, d));
  }
  if (m < 5.5) return abs(d - s);
  if (m < 6.5) return max(d, s);
  return min(d, s);
}

void main() {
  vec2 aspect = vec2(u_res.x / max(u_res.y, 1.0), 1.0);
  vec2 p = (v_uv - 0.5) * aspect;
  vec2 q = rot2(-u_rot) * (p - u_pos);
  vec2 c = q / max(u_ext, vec2(1e-5)) * 0.5;

  // Distort in aspect-normalized layer space so circular effects stay circular.
  vec2 la = vec2(max(u_ext.x, 1e-5) / max(u_ext.y, 1e-5), 1.0);
  vec2 n = c * la;
  float t = u_time + u_seed * 37.0;
  float shim = 1.0 + u_shimmer * 0.6 * sin(t * 0.9);

  n *= 1.0 + u_bulge * dot(n, n) * 3.2;

  if (u_swirl > 0.003) {
    float r = length(n);
    n = rot2(u_swirl * 6.0 * shim * exp(-r * 2.4)) * n;
  }
  if (u_kaleido > 0.003) {
    float seg = floor(2.0 + u_kaleido * 14.0);
    float slice = 6.2831853 / seg;
    float a = atan(n.y, n.x) + t * u_shimmer * 0.15;
    a = abs(mod(a, slice) - slice * 0.5);
    n = length(n) * vec2(cos(a), sin(a));
  }
  if (u_ripple > 0.003) {
    float r = length(n) + 1e-4;
    n += (n / r) * sin(r * 34.0 - t * 3.2) * u_ripple * 0.07 * shim;
  }
  if (u_warp > 0.003) {
    vec2 w = vec2(
      fbm(n * 3.0 + vec2(t * 0.22 * (0.3 + u_shimmer), u_seed)),
      fbm(n * 3.0 + vec2(u_seed + 7.3, -t * 0.19 * (0.3 + u_shimmer)))
    );
    n += (w - 0.5) * u_warp * 0.55;
  }
  n.x = mix(n.x, abs(n.x), clamp(u_mirror * 2.0, 0.0, 1.0));
  n.y = mix(n.y, abs(n.y), clamp(u_mirror * 2.0 - 1.0, 0.0, 1.0));

  c = n / la;
  vec2 uv = c + 0.5;

  if (u_pixelate > 0.003) {
    float cells = floor(mix(220.0, 6.0, pow(u_pixelate, 0.55)));
    uv = (floor(uv * cells) + 0.5) / cells;
  }

  vec2 cd = c * u_chroma * 0.1;
  vec4 sampleMid = tap(uv);
  vec3 col = vec3(tap(uv + cd).r, sampleMid.g, tap(uv - cd).b);
  float alpha = sampleMid.a;

  if (u_edges > 0.003) {
    vec2 e = max(u_img_texel * 1.5, vec2(0.0015));
    float gx = luma(tap(uv + vec2(e.x, 0.0)).rgb) - luma(tap(uv - vec2(e.x, 0.0)).rgb);
    float gy = luma(tap(uv + vec2(0.0, e.y)).rgb) - luma(tap(uv - vec2(0.0, e.y)).rgb);
    float g = clamp(length(vec2(gx, gy)) * 4.0, 0.0, 1.0);
    vec3 neon = g * (col * 1.6 + hueRotate(vec3(0.9, 0.2, 1.0), t * 0.5) * 0.7);
    col = mix(col, neon, u_edges);
  }

  // Grade
  col = (col - 0.5) * u_con + 0.5;
  col *= u_bri;
  col = mix(vec3(luma(col)), col, u_sat);
  col = hueRotate(col, u_hue * 6.2831853 + u_shimmer * 0.4 * sin(t * 0.6));
  if (u_poster > 0.003) {
    float levels = mix(14.0, 2.0, u_poster);
    col = mix(col, floor(col * levels + 0.5) / levels, clamp(u_poster * 4.0, 0.0, 1.0));
  }
  col = mix(col, 1.0 - col, u_invert);
  col = mix(col, vec3(luma(col)) * u_tint * 2.1, u_tint_amt);
  col = clamp(col, 0.0, 1.5);

  vec3 dest = texture2D(u_dest, v_uv).rgb;
  vec3 blended = clamp(blendPix(dest, col), 0.0, 1.0);
  float a = clamp(alpha * u_opacity * (1.0 + u_audio * 0.0), 0.0, 1.0);
  gl_FragColor = vec4(mix(dest, blended, a), 1.0);
}
`;
var POST_FRAG = `
${GLSL_COMMON}
varying vec2 v_uv;
uniform sampler2D u_scene;
uniform sampler2D u_prev;
uniform vec2 u_res;
uniform float u_time;
uniform float u_audio;
uniform vec2 u_pointer;
uniform vec2 u_pointer_vel;
uniform float u_pointer_down;
uniform float u_pointer_active;
uniform float u_feedback;
uniform float u_trails;
uniform float u_fb_zoom;
uniform float u_fb_rotate;
uniform float u_fb_hue;
uniform float u_warp;
uniform float u_swirl;
uniform float u_ripple;
uniform float u_zoom;
uniform float u_kaleido;
uniform float u_mirror;
uniform float u_chroma;
uniform float u_hue_orbit;
uniform float u_sat;
uniform float u_con;
uniform float u_solarize;
uniform float u_grain;
uniform float u_scanlines;
uniform float u_vignette;
uniform float u_strobe;
uniform float u_pointer_force;
uniform float u_pointer_size;
uniform float u_pointer_mode;

void main() {
  vec2 aspect = vec2(u_res.x / max(u_res.y, 1.0), 1.0);
  vec2 n = (v_uv - 0.5) * aspect;
  float t = u_time;
  float chromaAmt = u_chroma;

  // Cursor field
  if (u_pointer_active > 0.5 && u_pointer_force > 0.003) {
    vec2 pn = (u_pointer - 0.5) * aspect;
    vec2 d = n - pn;
    float sz = max(u_pointer_size * 0.8, 0.04);
    float infl = exp(-dot(d, d) / (sz * sz)) * u_pointer_force * (0.55 + 0.45 * u_pointer_down);
    if (u_pointer_mode < 0.5) {
      n = pn + rot2(infl * 2.6) * d;
    } else if (u_pointer_mode < 1.5) {
      n -= d * infl * 0.55;
    } else if (u_pointer_mode < 2.5) {
      chromaAmt += infl * 1.4;
      n += d * infl * 0.3;
    } else {
      n.y += infl * 0.3 * (0.55 + 0.45 * sin(t * 2.0 + n.x * 12.0));
    }
    n += u_pointer_vel * infl * 1.6;
  }

  // Space
  n *= 1.0 - u_zoom * (0.3 + 0.1 * sin(t * 0.7)) - u_audio * u_zoom * 0.15;
  if (u_swirl > 0.003) {
    float r = length(n);
    n = rot2(u_swirl * (3.4 + u_audio * 1.5) * exp(-r * 1.7) * sin(t * 0.23 + 1.9)) * n;
  }
  if (u_kaleido > 0.003) {
    float seg = floor(2.0 + u_kaleido * 15.0);
    float slice = 6.2831853 / seg;
    float a = atan(n.y, n.x) + t * 0.05;
    a = abs(mod(a, slice) - slice * 0.5);
    n = length(n) * vec2(cos(a), sin(a));
  }
  if (u_ripple > 0.003) {
    float r = length(n) + 1e-4;
    n += (n / r) * sin(r * 26.0 - t * 2.6) * u_ripple * 0.05;
  }
  if (u_warp > 0.003) {
    vec2 w = vec2(fbm(n * 2.4 + t * 0.16), fbm(n * 2.4 - t * 0.13 + 5.2));
    n += (w - 0.5) * u_warp * (0.34 + u_audio * 0.2);
  }
  n.x = mix(n.x, abs(n.x), clamp(u_mirror * 2.0, 0.0, 1.0));
  n.y = mix(n.y, abs(n.y), clamp(u_mirror * 2.0 - 1.0, 0.0, 1.0));

  vec2 uv = n / aspect + 0.5;

  vec2 cd = (uv - 0.5) * chromaAmt * 0.05;
  vec3 col = vec3(
    texture2D(u_scene, uv + cd).r,
    texture2D(u_scene, uv).g,
    texture2D(u_scene, uv - cd).b
  );

  // Feedback echo
  if (u_feedback > 0.003) {
    vec2 fp = (v_uv - 0.5) * aspect;
    fp = rot2(u_fb_rotate * 0.055) * fp;
    fp *= 1.0 - u_fb_zoom * 0.045;
    vec3 prev = texture2D(u_prev, fp / aspect + 0.5).rgb;
    prev = hueRotate(prev, u_fb_hue * 0.5);
    vec3 echo = prev * mix(0.55, 0.985, u_trails);
    col = mix(col, max(col, echo), u_feedback);
  }

  // Grade
  col = hueRotate(col, u_hue_orbit * t * 0.9);
  col = (col - 0.5) * u_con + 0.5;
  col = mix(vec3(luma(col)), col, u_sat);
  if (u_solarize > 0.003) {
    vec3 sol = mix(col, 1.0 - col, smoothstep(0.5 - 0.25, 0.5 + 0.25, col));
    col = mix(col, sol, u_solarize);
  }
  col *= 1.0 + u_strobe * (0.45 * sin(t * 11.0) + u_audio * 0.8);

  // Texture
  if (u_scanlines > 0.003) {
    col *= 1.0 - u_scanlines * 0.32 * (0.5 + 0.5 * sin(v_uv.y * u_res.y * 2.4));
  }
  if (u_grain > 0.003) {
    col += (hash21(v_uv * u_res + fract(t) * 61.7) - 0.5) * u_grain * 0.3;
  }
  vec2 vp = (v_uv - 0.5) * aspect;
  col *= 1.0 - u_vignette * smoothstep(0.35, 1.15, length(vp) * 1.35);

  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`;
function compile(gl, type, source) {
  const shader = gl.createShader(type);
  if (!shader) throw new Error("Could not create shader");
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const info = gl.getShaderInfoLog(shader) ?? "unknown";
    gl.deleteShader(shader);
    throw new Error(`Shader compile failed: ${info}`);
  }
  return shader;
}
function makeProgram(gl, frag) {
  const program = gl.createProgram();
  if (!program) throw new Error("Could not create program");
  gl.attachShader(program, compile(gl, gl.VERTEX_SHADER, VERT));
  gl.attachShader(program, compile(gl, gl.FRAGMENT_SHADER, frag));
  gl.bindAttribLocation(program, 0, "a_pos");
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    throw new Error(`Program link failed: ${gl.getProgramInfoLog(program) ?? "unknown"}`);
  }
  const uniforms = {};
  const count = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
  for (let i3 = 0; i3 < count; i3++) {
    const info = gl.getActiveUniform(program, i3);
    if (info) uniforms[info.name] = gl.getUniformLocation(program, info.name);
  }
  return { program, uniforms };
}
function hexToRgb(hex) {
  const match = /^#([0-9a-f]{6})$/i.exec(hex);
  if (!match) return [0, 0, 0];
  const value = parseInt(match[1], 16);
  return [(value >> 16 & 255) / 255, (value >> 8 & 255) / 255, (value & 255) / 255];
}
function textureSourceSize(source) {
  if (typeof HTMLVideoElement !== "undefined" && source instanceof HTMLVideoElement) {
    return {
      width: Math.max(1, source.videoWidth || source.width || 1),
      height: Math.max(1, source.videoHeight || source.height || 1)
    };
  }
  if (typeof HTMLImageElement !== "undefined" && source instanceof HTMLImageElement) {
    return {
      width: Math.max(1, source.naturalWidth || source.width || 1),
      height: Math.max(1, source.naturalHeight || source.height || 1)
    };
  }
  if (typeof HTMLCanvasElement !== "undefined" && source instanceof HTMLCanvasElement) {
    return { width: Math.max(1, source.width), height: Math.max(1, source.height) };
  }
  if (typeof ImageBitmap !== "undefined" && source instanceof ImageBitmap) {
    return { width: Math.max(1, source.width), height: Math.max(1, source.height) };
  }
  const anySource = source;
  return {
    width: Math.max(1, anySource.width ?? 1),
    height: Math.max(1, anySource.height ?? 1)
  };
}
function createEngine(canvas) {
  const gl = canvas.getContext("webgl", {
    antialias: false,
    alpha: false,
    depth: false,
    stencil: false,
    preserveDrawingBuffer: false,
    powerPreference: "high-performance"
  });
  if (!gl) throw new Error("WebGL is not available in this browser");
  const quad = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, quad);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  gl.enableVertexAttribArray(0);
  gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
  const programs = {
    bg: makeProgram(gl, BG_FRAG),
    layer: makeProgram(gl, LAYER_FRAG),
    post: makeProgram(gl, POST_FRAG),
    copy: makeProgram(gl, COPY_FRAG)
  };
  function makeTexture() {
    const texture = gl.createTexture();
    if (!texture) throw new Error("Could not create texture");
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    return texture;
  }
  function makeTarget(width2, height2) {
    const texture = makeTexture();
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width2, height2, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    const framebuffer = gl.createFramebuffer();
    if (!framebuffer) throw new Error("Could not create framebuffer");
    gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    return { framebuffer, texture, width: width2, height: height2 };
  }
  function resizeTarget(target, width2, height2) {
    if (target.width === width2 && target.height === height2) return;
    gl.bindTexture(gl.TEXTURE_2D, target.texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width2, height2, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    target.width = width2;
    target.height = height2;
  }
  let width = Math.max(2, canvas.width || 2);
  let height = Math.max(2, canvas.height || 2);
  let pixelRatioCap = 1.5;
  let cssWidth = width;
  let cssHeight = height;
  const targets = {
    sceneA: makeTarget(width, height),
    sceneB: makeTarget(width, height),
    postA: makeTarget(width, height),
    postB: makeTarget(width, height)
  };
  let postFlip = false;
  let needFeedbackClear = true;
  const missingTexture = makeTexture();
  {
    const size = 64;
    const data = new Uint8Array(size * size * 4);
    for (let y3 = 0; y3 < size; y3++) {
      for (let x3 = 0; x3 < size; x3++) {
        const i3 = (y3 * size + x3) * 4;
        const grid = x3 % 16 < 1 || y3 % 16 < 1 ? 1 : 0;
        data[i3] = grid ? 255 : 30 + x3 * 3 % 60;
        data[i3 + 1] = grid ? 40 : 8;
        data[i3 + 2] = grid ? 170 : 46 + y3 * 3 % 70;
        data[i3 + 3] = 255;
      }
    }
    gl.bindTexture(gl.TEXTURE_2D, missingTexture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, size, size, 0, gl.RGBA, gl.UNSIGNED_BYTE, data);
  }
  const images = /* @__PURE__ */ new Map();
  function drawQuad() {
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }
  function bindTargetOutput(target) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, target ? target.framebuffer : null);
    gl.viewport(0, 0, target ? target.width : width, target ? target.height : height);
  }
  function u1(p3, name, value) {
    const loc = p3.uniforms[name];
    if (loc) gl.uniform1f(loc, value);
  }
  function u22(p3, name, x3, y3) {
    const loc = p3.uniforms[name];
    if (loc) gl.uniform2f(loc, x3, y3);
  }
  function u32(p3, name, v3) {
    const loc = p3.uniforms[name];
    if (loc) gl.uniform3f(loc, v3[0], v3[1], v3[2]);
  }
  function uTex(p3, name, texture, unit) {
    const loc = p3.uniforms[name];
    if (!loc) return;
    gl.activeTexture(gl.TEXTURE0 + unit);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.uniform1i(loc, unit);
  }
  function render(state) {
    if (gl.isContextLost()) return;
    const g2 = state.global;
    const bg = programs.bg;
    gl.useProgram(bg.program);
    bindTargetOutput(targets.sceneA);
    u22(bg, "u_res", width, height);
    u1(bg, "u_time", state.time);
    u1(bg, "u_mode", g2.bgMode);
    u32(bg, "u_color_a", g2.bgA);
    u32(bg, "u_color_b", g2.bgB);
    u1(bg, "u_audio", state.audio * g2.audioReact);
    drawQuad();
    let source = targets.sceneA;
    let dest = targets.sceneB;
    const layerProgram = programs.layer;
    gl.useProgram(layerProgram.program);
    for (const layer of state.layers) {
      const image = images.get(layer.imageId);
      bindTargetOutput(dest);
      uTex(layerProgram, "u_dest", source.texture, 0);
      uTex(layerProgram, "u_img", image ? image.texture : missingTexture, 1);
      u22(layerProgram, "u_res", width, height);
      u22(
        layerProgram,
        "u_img_texel",
        image ? 1 / image.width : 1 / 64,
        image ? 1 / image.height : 1 / 64
      );
      u22(layerProgram, "u_pos", layer.pos[0], layer.pos[1]);
      u22(layerProgram, "u_ext", layer.ext[0], layer.ext[1]);
      u1(layerProgram, "u_rot", layer.rot);
      u1(layerProgram, "u_time", state.time);
      u1(layerProgram, "u_audio", state.audio * g2.audioReact);
      u1(layerProgram, "u_opacity", layer.opacity);
      u1(layerProgram, "u_blend", layer.blend);
      u1(layerProgram, "u_tile", layer.tile);
      u1(layerProgram, "u_warp", layer.warp);
      u1(layerProgram, "u_swirl", layer.swirl);
      u1(layerProgram, "u_ripple", layer.ripple);
      u1(layerProgram, "u_kaleido", layer.kaleido);
      u1(layerProgram, "u_pixelate", layer.pixelate);
      u1(layerProgram, "u_bulge", layer.bulge);
      u1(layerProgram, "u_mirror", layer.mirror);
      u1(layerProgram, "u_hue", layer.hue);
      u1(layerProgram, "u_sat", layer.saturation);
      u1(layerProgram, "u_con", layer.contrast);
      u1(layerProgram, "u_bri", layer.brightness);
      u1(layerProgram, "u_invert", layer.invert);
      u1(layerProgram, "u_poster", layer.posterize);
      u1(layerProgram, "u_chroma", layer.chroma);
      u1(layerProgram, "u_edges", layer.edges);
      u32(layerProgram, "u_tint", layer.tint);
      u1(layerProgram, "u_tint_amt", layer.tintAmount);
      u1(layerProgram, "u_shimmer", layer.shimmer);
      u1(layerProgram, "u_seed", layer.seed);
      drawQuad();
      const swap = source;
      source = dest;
      dest = swap;
    }
    if (needFeedbackClear) {
      for (const target of [targets.postA, targets.postB]) {
        bindTargetOutput(target);
        gl.clearColor(0, 0, 0, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);
      }
      needFeedbackClear = false;
    }
    const prev = postFlip ? targets.postA : targets.postB;
    const out = postFlip ? targets.postB : targets.postA;
    postFlip = !postFlip;
    const post = programs.post;
    gl.useProgram(post.program);
    bindTargetOutput(out);
    uTex(post, "u_scene", source.texture, 0);
    uTex(post, "u_prev", prev.texture, 1);
    u22(post, "u_res", width, height);
    u1(post, "u_time", state.time);
    u1(post, "u_audio", state.audio * g2.audioReact);
    u22(post, "u_pointer", state.pointer.x, state.pointer.y);
    u22(post, "u_pointer_vel", state.pointer.velocityX, state.pointer.velocityY);
    u1(post, "u_pointer_down", state.pointer.down ? 1 : 0);
    u1(post, "u_pointer_active", state.pointer.active ? 1 : 0);
    u1(post, "u_feedback", g2.feedback);
    u1(post, "u_trails", g2.trails);
    u1(post, "u_fb_zoom", g2.fbZoom);
    u1(post, "u_fb_rotate", g2.fbRotate);
    u1(post, "u_fb_hue", g2.fbHue);
    u1(post, "u_warp", g2.warp);
    u1(post, "u_swirl", g2.swirl);
    u1(post, "u_ripple", g2.ripple);
    u1(post, "u_zoom", g2.zoom);
    u1(post, "u_kaleido", g2.kaleido);
    u1(post, "u_mirror", g2.mirror);
    u1(post, "u_chroma", g2.chroma);
    u1(post, "u_hue_orbit", g2.hueOrbit);
    u1(post, "u_sat", g2.saturation);
    u1(post, "u_con", g2.contrast);
    u1(post, "u_solarize", g2.solarize);
    u1(post, "u_grain", g2.grain);
    u1(post, "u_scanlines", g2.scanlines);
    u1(post, "u_vignette", g2.vignette);
    u1(post, "u_strobe", g2.strobe);
    u1(post, "u_pointer_force", g2.pointerForce);
    u1(post, "u_pointer_size", g2.pointerSize);
    u1(post, "u_pointer_mode", g2.pointerMode);
    drawQuad();
    const copy = programs.copy;
    gl.useProgram(copy.program);
    bindTargetOutput(null);
    uTex(copy, "u_tex", out.texture, 0);
    drawQuad();
  }
  function applySize() {
    const ratio = Math.min(window.devicePixelRatio || 1, pixelRatioCap);
    const nextWidth = Math.max(2, Math.round(cssWidth * ratio));
    const nextHeight = Math.max(2, Math.round(cssHeight * ratio));
    if (nextWidth === width && nextHeight === height) return;
    width = nextWidth;
    height = nextHeight;
    canvas.width = width;
    canvas.height = height;
    for (const target of Object.values(targets)) resizeTarget(target, width, height);
    needFeedbackClear = true;
  }
  return {
    resize(nextCssWidth, nextCssHeight) {
      cssWidth = Math.max(1, nextCssWidth);
      cssHeight = Math.max(1, nextCssHeight);
      applySize();
    },
    setPixelRatioCap(cap) {
      pixelRatioCap = Math.max(0.5, cap);
      applySize();
    },
    setImage(imageId, sourceImage) {
      let entry = images.get(imageId);
      if (!entry) {
        entry = { texture: makeTexture(), width: 1, height: 1 };
        images.set(imageId, entry);
      }
      gl.bindTexture(gl.TEXTURE_2D, entry.texture);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, sourceImage);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
      const size = textureSourceSize(sourceImage);
      entry.width = size.width;
      entry.height = size.height;
    },
    removeImage(imageId) {
      const entry = images.get(imageId);
      if (!entry) return;
      gl.deleteTexture(entry.texture);
      images.delete(imageId);
    },
    hasImage(imageId) {
      return images.has(imageId);
    },
    render,
    clearFeedback() {
      needFeedbackClear = true;
    },
    destroy() {
      for (const entry of images.values()) gl.deleteTexture(entry.texture);
      images.clear();
      gl.deleteTexture(missingTexture);
      for (const target of Object.values(targets)) {
        gl.deleteFramebuffer(target.framebuffer);
        gl.deleteTexture(target.texture);
      }
      for (const { program } of Object.values(programs)) gl.deleteProgram(program);
      if (quad) gl.deleteBuffer(quad);
    }
  };
}

// lakebed-source:client/media.ts
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
function classifyBlob(blob, name = "") {
  return classifyFile(new File([blob], name || "file", { type: blob.type }));
}
function mediaKindLabel(kind) {
  switch (kind) {
    case "video":
      return "Video";
    case "audio":
      return "Audio";
    case "image":
      return "Image";
    case "data":
      return "Data";
    default: {
      const _exhaustive = kind;
      return _exhaustive;
    }
  }
}
function defaultLayerName(kind, fileName) {
  const stem = fileName.replace(/\.[a-z0-9]+$/i, "").trim();
  return stem || mediaKindLabel(kind);
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
  const len = bytes.length;
  for (let i3 = 0; i3 < total; i3 += 1) {
    const a3 = len ? bytes[i3 % len] ?? 0 : i3 * 37 & 255;
    const b2 = len ? bytes[i3 * 3 % len] ?? 0 : i3 * 91 & 255;
    const c3 = len ? bytes[(i3 * 7 + 13) % len] ?? 0 : i3 * 13 & 255;
    const o3 = i3 * 4;
    image.data[o3] = a3;
    image.data[o3 + 1] = b2;
    image.data[o3 + 2] = (a3 ^ c3) & 255;
    image.data[o3 + 3] = 255;
  }
  ctx.putImageData(image, 0, 0);
  const wash = ctx.createLinearGradient(0, 0, width, height);
  wash.addColorStop(0, "rgba(232,230,224,0.1)");
  wash.addColorStop(0.5, "rgba(168,120,128,0.12)");
  wash.addColorStop(1, "rgba(138,134,144,0.1)");
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
function paintAudioVisual(canvas, spectrum, level, time) {
  ensureSpectrumCanvas(canvas);
  const width = canvas.width;
  const height = canvas.height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  ctx.fillStyle = `rgba(8, 8, 10, ${0.1 + (1 - level) * 0.08})`;
  ctx.fillRect(0, 0, width, height);
  const bins = Math.min(96, spectrum.length);
  const barWidth = width / bins;
  const mid = height * 0.55;
  for (let i3 = 0; i3 < bins; i3 += 1) {
    const sample = spectrum[i3] / 255;
    const boost = sample * (0.55 + level * 0.9);
    const h3 = boost * height * 0.72;
    const hue = 20 + i3 / bins * 40 + time * 12 + level * 30;
    ctx.fillStyle = `hsl(${hue % 360} ${28 + sample * 35}% ${32 + sample * 38}%)`;
    ctx.fillRect(i3 * barWidth, mid - h3 * 0.55, Math.max(1, barWidth * 0.82), h3);
  }
  const cx = width * 0.5;
  const cy = height * 0.48;
  const radius = Math.min(width, height) * (0.08 + level * 0.18);
  const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius * 2.2);
  glow.addColorStop(0, `hsla(12 45% 62% / ${0.18 + level * 0.35})`);
  glow.addColorStop(1, "hsla(0 0% 0% / 0)");
  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.arc(cx, cy, radius * 2.2, 0, Math.PI * 2);
  ctx.fill();
}
function canvasThumb(source, width, height, maxDim = 96) {
  const scale = Math.min(1, maxDim / Math.max(width, height, 1));
  const thumb = document.createElement("canvas");
  thumb.width = Math.max(1, Math.round(width * scale));
  thumb.height = Math.max(1, Math.round(height * scale));
  const ctx = thumb.getContext("2d");
  if (!ctx) return "";
  ctx.drawImage(source, 0, 0, thumb.width, thumb.height);
  return thumb.toDataURL("image/jpeg", 0.7);
}

// lakebed-source:client/store.ts
var DB_NAME = "vaudio-2-images";
var STORE = "images";
var AUTOSAVE_KEY = "vaudio-2:autosave";
var MAX_TEXTURE_DIM = 2048;
var THUMB_DIM = 96;
var dbPromise = null;
function openDb() {
  if (!dbPromise) {
    dbPromise = new Promise((resolve, reject) => {
      const request2 = indexedDB.open(DB_NAME, 1);
      request2.onupgradeneeded = () => {
        if (!request2.result.objectStoreNames.contains(STORE)) {
          request2.result.createObjectStore(STORE);
        }
      };
      request2.onsuccess = () => resolve(request2.result);
      request2.onerror = () => reject(request2.error ?? new Error("IndexedDB open failed"));
    });
  }
  return dbPromise;
}
async function putImageBlob(id, blob) {
  const db = await openDb();
  await new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, "readwrite");
    tx.objectStore(STORE).put(blob, id);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error ?? new Error("IndexedDB write failed"));
  });
}
async function getImageBlob(id) {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const request2 = db.transaction(STORE, "readonly").objectStore(STORE).get(id);
    request2.onsuccess = () => resolve(request2.result instanceof Blob ? request2.result : null);
    request2.onerror = () => reject(request2.error ?? new Error("IndexedDB read failed"));
  });
}
function decodeImageBlob(blob) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(blob);
    const image = new Image();
    image.onload = () => {
      URL.revokeObjectURL(url);
      try {
        const scale = Math.min(1, MAX_TEXTURE_DIM / Math.max(image.naturalWidth, image.naturalHeight));
        const width = Math.max(1, Math.round(image.naturalWidth * scale));
        const height = Math.max(1, Math.round(image.naturalHeight * scale));
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const context = canvas.getContext("2d");
        if (!context) throw new Error("2D canvas unavailable");
        context.drawImage(image, 0, 0, width, height);
        const thumbScale = Math.min(1, THUMB_DIM / Math.max(width, height));
        const thumbCanvas = document.createElement("canvas");
        thumbCanvas.width = Math.max(1, Math.round(width * thumbScale));
        thumbCanvas.height = Math.max(1, Math.round(height * thumbScale));
        const thumbContext = thumbCanvas.getContext("2d");
        if (thumbContext) thumbContext.drawImage(canvas, 0, 0, thumbCanvas.width, thumbCanvas.height);
        resolve({
          canvas,
          thumb: thumbCanvas.toDataURL("image/jpeg", 0.7),
          width,
          height
        });
      } catch (cause) {
        reject(cause instanceof Error ? cause : new Error("Image decode failed"));
      }
    };
    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Could not decode that image"));
    };
    image.src = url;
  });
}
function newId(prefix) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}
function saveAutosave(scene) {
  try {
    localStorage.setItem(AUTOSAVE_KEY, encodeScene(scene));
  } catch {
  }
}
function loadAutosave() {
  try {
    const raw = localStorage.getItem(AUTOSAVE_KEY);
    if (!raw) return null;
    return decodeScene(raw);
  } catch {
    return null;
  }
}

// ../../../../private/var/folders/gp/dqgz6cts6h96rxd5hhkxtydw0000gn/T/cursor-sandbox-cache/39232b1d130225932d107b58c3cdf645/npm/_npx/3eb8d3eaaf4ef1b4/node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
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
var GLOBAL_CSS = `
@import url("https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Space+Grotesk:wght@400;500;600;700&display=swap");

:root {
  color-scheme: dark;
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

html, body, #app { margin: 0; height: 100%; background: var(--void); overscroll-behavior: none; }
body { font: 13px/1.45 "DM Mono", ui-monospace, monospace; color: var(--paper); -webkit-font-smoothing: antialiased; }
* { box-sizing: border-box; }
button, input, select { font: inherit; }
button { cursor: pointer; -webkit-tap-highlight-color: transparent; }
::selection { background: var(--acid); color: var(--void); }
::-webkit-scrollbar { width: 8px; height: 8px; }
::-webkit-scrollbar-thumb { background: var(--track); border-radius: 0; }
::-webkit-scrollbar-track { background: transparent; }

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

@keyframes rec-blink { 0%, 48% { opacity: 1; } 52%, 100% { opacity: 0.25; } }
.rec-dot { animation: rec-blink 1.1s steps(2, end) infinite; }
@keyframes fade-up { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
.pop { animation: fade-up 140ms cubic-bezier(.2,.8,.2,1) both; }
input[type="color"] { padding: 0; border: 1px solid var(--line); border-radius: 0; background: transparent; width: 26px; height: 20px; cursor: pointer; }
input[type="color"]::-webkit-color-swatch-wrapper { padding: 1px; }
input[type="color"]::-webkit-color-swatch { border: 0; border-radius: 0; }
select.fx-res {
  height: 26px; border-radius: 0; border: 1px solid var(--line);
  background: var(--panel); color: var(--mute); padding: 0 6px;
  font-family: "DM Mono", ui-monospace, monospace; font-size: 10px;
  letter-spacing: .06em; text-transform: uppercase; outline: none; cursor: pointer;
}
select.fx-res:hover { border-color: var(--line-hot); color: var(--paper); }
select.fx-res:disabled { opacity: .35; cursor: default; }
select.fx-res option { background: var(--panel); color: var(--paper); }
`;
var EXPORT_RESOLUTIONS = [
  { id: "screen", label: "Screen", height: 0 },
  { id: "720", label: "720p", height: 720 },
  { id: "1080", label: "1080p", height: 1080 },
  { id: "1440", label: "1440p", height: 1440 },
  { id: "2160", label: "4K", height: 2160 }
];
var MAX_EXPORT_EDGE = 8192;
function resolveExportSize(resolutionId, stage, screenScale = 1) {
  const aspect = Math.max(0.05, stage.width / Math.max(1, stage.height));
  let height;
  let width;
  if (resolutionId === "screen") {
    height = Math.max(2, Math.round(stage.height * screenScale));
    width = Math.max(2, Math.round(stage.width * screenScale));
  } else {
    const preset = EXPORT_RESOLUTIONS.find(
      (item) => item.id === resolutionId
    );
    height = preset?.height || 1080;
    width = Math.max(2, Math.round(height * aspect));
  }
  const longest = Math.max(width, height);
  if (longest > MAX_EXPORT_EDGE) {
    const scale = MAX_EXPORT_EDGE / longest;
    width = Math.max(2, Math.round(width * scale));
    height = Math.max(2, Math.round(height * scale));
  }
  return { width: width - width % 2, height: height - height % 2 };
}
var svg = (props, children) => /* @__PURE__ */ u3(
  "svg",
  {
    class: props.class ?? "w-[15px] h-[15px]",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "1.8",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "aria-hidden": "true",
    children
  }
);
var IPlus = (p3) => svg(p3, /* @__PURE__ */ u3("path", { d: "M12 5v14M5 12h14" }));
var IDice = (p3) => svg(
  p3,
  /* @__PURE__ */ u3(S, { children: [
    /* @__PURE__ */ u3("rect", { x: "4", y: "4", width: "16", height: "16", rx: "2.5" }),
    /* @__PURE__ */ u3("circle", { cx: "9", cy: "9", r: "0.6", fill: "currentColor" }),
    /* @__PURE__ */ u3("circle", { cx: "15", cy: "15", r: "0.6", fill: "currentColor" }),
    /* @__PURE__ */ u3("circle", { cx: "15", cy: "9", r: "0.6", fill: "currentColor" }),
    /* @__PURE__ */ u3("circle", { cx: "9", cy: "15", r: "0.6", fill: "currentColor" })
  ] })
);
var IWand = (p3) => svg(
  p3,
  /* @__PURE__ */ u3("path", { d: "M5 19 17 7m2-2-1.5 1.5M17 7l1.5 1.5M9 5.5 9.8 7.3 11.6 8 9.8 8.7 9 10.5 8.2 8.7 6.4 8 8.2 7.3Zm9 7 .6 1.4 1.4.6-1.4.6-.6 1.4-.6-1.4-1.4-.6 1.4-.6Z" })
);
var ISave = (p3) => svg(p3, /* @__PURE__ */ u3("path", { d: "M12 3v12m0 0 4-4m-4 4-4-4M4 17v3h16v-3" }));
var IFolder = (p3) => svg(
  p3,
  /* @__PURE__ */ u3("path", { d: "M3 6.5A1.5 1.5 0 0 1 4.5 5h4l2 2.5h9A1.5 1.5 0 0 1 21 9v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18Z" })
);
var IMic = (p3) => svg(
  p3,
  /* @__PURE__ */ u3(S, { children: [
    /* @__PURE__ */ u3("rect", { x: "9", y: "3", width: "6", height: "11", rx: "3" }),
    /* @__PURE__ */ u3("path", { d: "M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3" })
  ] })
);
var IDownload = (p3) => svg(p3, /* @__PURE__ */ u3("path", { d: "M12 4v11m0 0 4.5-4.5M12 15 7.5 10.5M4 19h16" }));
var IExpand = (p3) => svg(p3, /* @__PURE__ */ u3("path", { d: "M4 9V4h5M20 9V4h-5M4 15v5h5m11-5v5h-5" }));
var IEye = (p3) => svg(
  p3,
  /* @__PURE__ */ u3(S, { children: [
    /* @__PURE__ */ u3("path", { d: "M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" }),
    /* @__PURE__ */ u3("circle", { cx: "12", cy: "12", r: "2.6" })
  ] })
);
var IEyeOff = (p3) => svg(
  p3,
  /* @__PURE__ */ u3(S, { children: /* @__PURE__ */ u3("path", { d: "M4 4l16 16M9.9 5.9A9.5 9.5 0 0 1 12 5.5c6 0 9.5 6.5 9.5 6.5a17 17 0 0 1-3.3 4M6 7.5A16 16 0 0 0 2.5 12S6 18.5 12 18.5a9 9 0 0 0 3-.6" }) })
);
var ITrash = (p3) => svg(p3, /* @__PURE__ */ u3("path", { d: "M4.5 6.5h15m-11-2h7m-9.5 2 1 13h10l1-13M10 10v6m4-6v6" }));
var ICopy = (p3) => svg(
  p3,
  /* @__PURE__ */ u3(S, { children: [
    /* @__PURE__ */ u3("rect", { x: "8", y: "8", width: "12", height: "12", rx: "1.5" }),
    /* @__PURE__ */ u3("path", { d: "M16 5V5.5M16 5a1.5 1.5 0 0 0-1.5-1.5h-9A1.5 1.5 0 0 0 4 5v9A1.5 1.5 0 0 0 5.5 15.5H6" })
  ] })
);
var IUp = (p3) => svg(p3, /* @__PURE__ */ u3("path", { d: "m6 14 6-6 6 6" }));
var IDown = (p3) => svg(p3, /* @__PURE__ */ u3("path", { d: "m6 10 6 6 6-6" }));
var IPause = (p3) => svg(p3, /* @__PURE__ */ u3("path", { d: "M9 5v14M15 5v14" }));
var IPlay = (p3) => svg(p3, /* @__PURE__ */ u3("path", { d: "M7 5v14l12-7Z" }));
var IPanel = (p3) => svg(
  p3,
  /* @__PURE__ */ u3(S, { children: [
    /* @__PURE__ */ u3("rect", { x: "3", y: "4.5", width: "18", height: "15", rx: "1.5" }),
    /* @__PURE__ */ u3("path", { d: "M15.5 4.5v15" })
  ] })
);
var IMove = (p3) => svg(
  p3,
  /* @__PURE__ */ u3("path", { d: "M12 3v18M3 12h18M12 3 9.5 5.5M12 3l2.5 2.5M12 21l-2.5-2.5M12 21l2.5-2.5M3 12l2.5-2.5M3 12l2.5 2.5M21 12l-2.5-2.5M21 12l-2.5 2.5" })
);
var ISpark = (p3) => svg(
  p3,
  /* @__PURE__ */ u3("path", { d: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8Zm7 11 .8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8Z" })
);
function layerSeed(id) {
  let hash = 0;
  for (let i3 = 0; i3 < id.length; i3++)
    hash = hash * 31 + id.charCodeAt(i3) >>> 0;
  return hash % 1e3 / 1e3;
}
function formatDeg(value) {
  return `${Math.round(value)}\xB0`;
}
function formatX(value) {
  return `${value.toFixed(2)}\xD7`;
}
function pad3(value, min = 0, max = 1) {
  return String(Math.round((value - min) / (max - min) * 100)).padStart(
    3,
    "0"
  );
}
var PLAY_FX_KEYS = [
  { code: "KeyQ", cap: "Q", param: "warp", label: "warp" },
  { code: "KeyW", cap: "W", param: "swirl", label: "swirl" },
  { code: "KeyE", cap: "E", param: "ripple", label: "ripple" },
  { code: "KeyR", cap: "R", param: "zoom", label: "tunnel" },
  { code: "KeyT", cap: "T", param: "kaleido", label: "kaleido" },
  { code: "KeyY", cap: "Y", param: "mirror", label: "mirror" },
  { code: "KeyU", cap: "U", param: "chroma", label: "prism" },
  { code: "KeyI", cap: "I", param: "feedback", label: "echo" },
  { code: "KeyO", cap: "O", param: "trails", label: "trails" },
  { code: "KeyP", cap: "P", param: "strobe", label: "strobe" }
];
var PLAY_PIANO = [
  { code: "KeyA", cap: "A" },
  { code: "KeyS", cap: "S" },
  { code: "KeyD", cap: "D" },
  { code: "KeyF", cap: "F" },
  { code: "KeyG", cap: "G" },
  { code: "KeyH", cap: "H" },
  { code: "KeyJ", cap: "J" },
  { code: "KeyK", cap: "K" },
  { code: "KeyL", cap: "L" },
  { code: "Semicolon", cap: ";" },
  { code: "Quote", cap: "'" }
];
var PLAY_LAYER_KEYS = [
  { code: "KeyZ", cap: "Z" },
  { code: "KeyX", cap: "X" },
  { code: "KeyC", cap: "C" },
  { code: "KeyV", cap: "V" },
  { code: "KeyB", cap: "B" },
  { code: "KeyN", cap: "N" },
  { code: "KeyM", cap: "M" },
  { code: "Comma", cap: "," },
  { code: "Period", cap: "." },
  { code: "Slash", cap: "/" }
];
var PLAY_PRESET_CODES = [
  "Backquote",
  "Digit1",
  "Digit2",
  "Digit3",
  "Digit4",
  "Digit5",
  "Digit6",
  "Digit7",
  "Digit8",
  "Digit9",
  "Digit0"
];
function hslToHex(hueDeg, saturation, lightness) {
  const a3 = saturation * Math.min(lightness, 1 - lightness);
  const channel = (n2) => {
    const k3 = (n2 + hueDeg / 30) % 12;
    const c3 = lightness - a3 * Math.max(-1, Math.min(k3 - 3, 9 - k3, 1));
    return Math.round(c3 * 255).toString(16).padStart(2, "0");
  };
  return `#${channel(0)}${channel(8)}${channel(4)}`;
}
function emptyScene() {
  return { name: "Untitled", layers: [], global: { ...DEFAULT_GLOBAL_FX } };
}
function Slider(props) {
  const min = props.min ?? 0;
  const max = props.max ?? 1;
  const pct = clamp((props.value - min) / (max - min) * 100, 0, 100);
  return /* @__PURE__ */ u3(
    "label",
    {
      class: "block px-3 py-[5px] select-none",
      onDblClick: () => props.def !== void 0 && props.onChange(props.def),
      title: "Double-click to reset",
      children: [
        /* @__PURE__ */ u3("div", { class: "mb-0.5 flex items-baseline justify-between text-[9px] uppercase tracking-[0.14em] text-[var(--mute)]", children: [
          /* @__PURE__ */ u3("span", { children: props.label }),
          /* @__PURE__ */ u3("span", { class: "tabular-nums text-[var(--paper)]", children: props.format ? props.format(props.value) : pad3(props.value, min, max) })
        ] }),
        /* @__PURE__ */ u3(
          "input",
          {
            type: "range",
            class: "knob-range",
            style: { "--fill": `${pct}%` },
            min,
            max,
            step: 1e-3,
            value: props.value,
            onInput: (event) => props.onChange(
              parseFloat(
                event.currentTarget.value
              )
            )
          }
        )
      ]
    }
  );
}
function Section(props) {
  return /* @__PURE__ */ u3("section", { class: "border-b border-[var(--line)] pb-2", children: [
    /* @__PURE__ */ u3("header", { class: "flex h-8 items-center gap-2 px-3", children: [
      /* @__PURE__ */ u3(
        "span",
        {
          class: `text-[9px] font-medium uppercase tracking-[0.14em] ${props.accent ? "text-[var(--acid)]" : "text-[var(--mute)]"}`,
          children: props.title
        }
      ),
      /* @__PURE__ */ u3("span", { class: "h-px flex-1 bg-[var(--line)]" }),
      props.actions
    ] }),
    props.children
  ] });
}
function SegRow(props) {
  return /* @__PURE__ */ u3("div", { class: "px-3 py-[5px]", children: [
    /* @__PURE__ */ u3("div", { class: "mb-1 text-[9px] uppercase tracking-[0.14em] text-[var(--mute)]", children: props.label }),
    /* @__PURE__ */ u3("div", { class: "flex", children: props.options.map((option, index) => /* @__PURE__ */ u3(
      "button",
      {
        type: "button",
        onClick: () => props.onChange(index),
        class: `h-6 flex-1 border border-r-0 border-[var(--line)] text-[9px] uppercase tracking-wide last:border-r ${Math.round(props.value) === index ? "bg-[var(--acid)] text-[var(--void)]" : "bg-[var(--panel)] text-[var(--mute)] hover:text-[var(--paper)]"}`,
        children: option
      },
      option
    )) })
  ] });
}
function TopButton(props) {
  return /* @__PURE__ */ u3(
    "button",
    {
      type: "button",
      title: props.title,
      disabled: props.disabled,
      onClick: props.onClick,
      class: `flex h-[26px] items-center gap-1.5 border px-2 text-[10px] uppercase tracking-wide transition-colors disabled:opacity-30 ${props.active ? "border-[var(--acid)] bg-[var(--acid)]/15 text-[var(--acid)]" : props.danger ? "border-[#c45b6a] bg-[#c45b6a]/10 text-[#b86a74]" : "border-[var(--line)] bg-[var(--panel)] text-[var(--mute)] hover:border-[var(--line-hot)] hover:text-[var(--paper)]"}`,
      children: [
        props.children,
        props.label ? /* @__PURE__ */ u3("span", { class: "hidden lg:inline", children: props.label }) : null
      ]
    }
  );
}
function HelpKeyCap(props) {
  let border = "var(--line)";
  let capColor = "var(--paper)";
  let labelColor = "var(--mute)";
  let background = "var(--panel)";
  if (props.group === "preset") {
    border = "rgba(232,230,224,0.4)";
    labelColor = "var(--acid)";
    background = "rgba(232,230,224,0.05)";
  } else if (props.group === "fx") {
    border = "rgba(168,120,128,0.55)";
    labelColor = "#cf9aa6";
    background = "rgba(168,120,128,0.09)";
  } else if (props.group === "note") {
    const hue = props.hue ?? 0;
    border = `hsla(${hue}, 70%, 60%, 0.75)`;
    labelColor = `hsl(${hue}, 75%, 68%)`;
    capColor = `hsl(${hue}, 60%, 84%)`;
    background = `hsla(${hue}, 70%, 50%, 0.13)`;
  } else if (props.group === "layer") {
    border = "rgba(125,165,131,0.55)";
    labelColor = "#9cc4a2";
    background = "rgba(125,165,131,0.09)";
  } else if (props.group === "none") {
    capColor = "var(--track)";
  }
  return /* @__PURE__ */ u3(
    "div",
    {
      class: "flex h-[46px] flex-shrink-0 flex-col items-center justify-center gap-1 border px-0.5 text-center",
      style: {
        width: `${(props.u ?? 1) * 46}px`,
        borderColor: border,
        background
      },
      children: [
        /* @__PURE__ */ u3(
          "span",
          {
            class: "font-mono text-[11px] leading-none",
            style: { color: capColor },
            children: props.cap
          }
        ),
        props.label ? /* @__PURE__ */ u3(
          "span",
          {
            class: "text-[6.5px] uppercase leading-none tracking-[0.08em]",
            style: { color: labelColor },
            children: props.label
          }
        ) : null
      ]
    }
  );
}
function HelpList(props) {
  return /* @__PURE__ */ u3("div", { children: [
    /* @__PURE__ */ u3("h3", { class: "mb-2 text-[9px] font-medium uppercase tracking-[0.16em] text-[var(--acid)]", children: props.title }),
    /* @__PURE__ */ u3("ul", { class: "space-y-1.5", children: props.items.map(([term, body]) => /* @__PURE__ */ u3(
      "li",
      {
        class: "font-mono text-[9.5px] leading-relaxed text-[var(--mute)]",
        children: [
          /* @__PURE__ */ u3("span", { class: "text-[var(--paper)]", children: term }),
          " \u2014 ",
          body
        ]
      },
      term
    )) })
  ] });
}
function HelpModal(props) {
  const noteHue = (index) => Math.round(index / PLAY_PIANO.length * 360);
  const rows = [
    {
      offset: 0,
      keys: [
        { cap: "`", label: "00", group: "preset" },
        ...WORLD_PRESETS.slice(1).map((preset, index) => ({
          cap: String((index + 1) % 10),
          label: preset.code,
          group: "preset"
        })),
        { cap: "-", group: "none" },
        { cap: "=", group: "none" },
        { cap: "\u232B", u: 1.6, label: "wash", group: "sys" }
      ]
    },
    {
      offset: 0,
      keys: [
        { cap: "\u21E5", u: 1.4, label: "hide ui", group: "sys" },
        ...PLAY_FX_KEYS.map((key) => ({
          cap: key.cap,
          label: key.label,
          group: "fx"
        })),
        { cap: "[", label: "slower", group: "fx" },
        { cap: "]", label: "faster", group: "fx" },
        { cap: "\\", u: 1.2, label: "solar", group: "fx" }
      ]
    },
    {
      offset: 16,
      keys: [
        { cap: "\u21EA", u: 1.7, group: "none" },
        ...PLAY_PIANO.map((key, index) => ({
          cap: key.cap,
          label: "\u266A",
          group: "note",
          hue: noteHue(index)
        })),
        { cap: "\u23CE", u: 2, group: "none" }
      ]
    },
    {
      offset: 30,
      keys: [
        { cap: "\u21E7", u: 2.2, label: "invert", group: "sys" },
        ...PLAY_LAYER_KEYS.map((key, index) => ({
          cap: key.cap,
          label: `lyr ${index + 1}`,
          group: "layer"
        })),
        { cap: "\u21E7 /", u: 1.5, label: "manual", group: "sys" }
      ]
    },
    {
      offset: 170,
      keys: [{ cap: "space", u: 7, label: "freeze time", group: "sys" }]
    }
  ];
  return /* @__PURE__ */ u3(
    "div",
    {
      class: "fixed inset-0 z-[70] grid place-items-center bg-black/75 p-4",
      onClick: props.onClose,
      children: /* @__PURE__ */ u3(
        "div",
        {
          class: "pop max-h-[88vh] w-full max-w-[840px] overflow-y-auto border border-[var(--line)] bg-[var(--panel-2)] shadow-2xl",
          onClick: (event) => event.stopPropagation(),
          children: [
            /* @__PURE__ */ u3("header", { class: "flex items-center gap-2 border-b border-[var(--line)] px-4 py-3", children: [
              /* @__PURE__ */ u3("span", { class: "text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--acid)]", children: "Play mode \xB7 instrument manual" }),
              /* @__PURE__ */ u3("span", { class: "flex-1" }),
              /* @__PURE__ */ u3("span", { class: "hidden font-mono text-[9px] uppercase tracking-wide text-[var(--mute)] sm:inline", children: "every move is permanent \u2014 and undoable" }),
              /* @__PURE__ */ u3(
                "button",
                {
                  type: "button",
                  class: "ml-2 border border-[var(--line)] px-2 py-0.5 font-mono text-[10px] uppercase text-[var(--mute)] hover:border-[var(--line-hot)] hover:text-[var(--paper)]",
                  onClick: props.onClose,
                  children: "esc"
                }
              )
            ] }),
            /* @__PURE__ */ u3("div", { class: "overflow-x-auto p-4", children: /* @__PURE__ */ u3("div", { class: "flex min-w-[740px] flex-col gap-1", children: rows.map((row, rowIndex) => /* @__PURE__ */ u3(
              "div",
              {
                class: "flex gap-1",
                style: { marginLeft: `${row.offset}px` },
                children: row.keys.map((key, keyIndex) => /* @__PURE__ */ u3(
                  HelpKeyCap,
                  {
                    cap: key.cap,
                    label: key.label,
                    u: key.u,
                    group: key.group,
                    hue: key.hue
                  },
                  keyIndex
                ))
              },
              rowIndex
            )) }) }),
            /* @__PURE__ */ u3("div", { class: "grid gap-5 border-t border-[var(--line)] p-4 sm:grid-cols-3", children: [
              /* @__PURE__ */ u3(
                HelpList,
                {
                  title: "Mouse",
                  items: [
                    [
                      "tap",
                      "stamp the cursor field (vortex / gravity / prism / melt) into the world for good \u2014 the farther from center, the harder the hit"
                    ],
                    [
                      "tap a layer",
                      "the stamp lands on that layer instead of the world"
                    ],
                    ["shift-tap", "carve \u2014 subtracts instead of adds"],
                    ["double-tap", "step the kaleidoscope"],
                    [
                      "drag + release",
                      "throw the echo: feedback trails inherit the direction of your throw"
                    ],
                    [
                      "right-click",
                      "soothe \u2014 calms the world (or just the layer under the cursor)"
                    ],
                    ["wheel", "hue orbit \xB7 shift+wheel = saturation"]
                  ]
                }
              ),
              /* @__PURE__ */ u3(
                HelpList,
                {
                  title: "Keyboard",
                  items: [
                    ["number row", "world presets 00\u201310"],
                    [
                      "qwerty row",
                      "pump an effect up \xB7 shift drains it \xB7 hold to ramp"
                    ],
                    [
                      "home row",
                      "the hue piano \u2014 each key retunes every layer to a color note \xB7 shift paints the background instead"
                    ],
                    [
                      "bottom row",
                      "strike layers 1\u201310: re-rolls that layer's FX \xB7 shift resets it"
                    ],
                    ["[ ]", "time slower / faster \xB7 \\ solarize"],
                    ["arrows", "\u2190 \u2192 hue orbit \xB7 \u2191 \u2193 saturation"],
                    ["backspace", "wash the world back to clean signal"]
                  ]
                }
              ),
              /* @__PURE__ */ u3(
                HelpList,
                {
                  title: "Global",
                  items: [
                    ["esc", "back to arrange mode"],
                    ["space", "freeze time"],
                    ["tab", "hide the interface"],
                    ["\u2318Z / \u21E7\u2318Z", "undo / redo any move"],
                    [
                      "field",
                      "choose vortex / gravity / prism / melt under Cursor settings"
                    ]
                  ]
                }
              )
            ] })
          ]
        }
      )
    }
  );
}
function App() {
  const auth2 = useAuth();
  const scenesQuery = useQuery(
    "scenes"
  );
  const saveSceneMutation = useMutation("saveScene");
  const deleteSceneMutation = useMutation("deleteScene");
  const getSceneMutation = useMutation("getScene");
  const [scene, setScene] = d2(emptyScene);
  const [selectedId, setSelectedId] = d2(null);
  const [imageInfo, setImageInfo] = d2({});
  const [stageMode, setStageMode] = d2("arrange");
  const [uiHidden, setUiHidden] = d2(false);
  const [frozen, setFrozen] = d2(false);
  const [micActive, setMicActive] = d2(false);
  const [recording, setRecording] = d2(false);
  const [exportRes, setExportRes] = d2("1080");
  const [fullscreen, setFullscreen] = d2(false);
  const [presetsOpen, setPresetsOpen] = d2(false);
  const [scenesOpen, setScenesOpen] = d2(false);
  const [helpOpen, setHelpOpen] = d2(false);
  const [serverSceneId, setServerSceneId] = d2("");
  const [toast, setToast] = d2("");
  const [dragOver, setDragOver] = d2(false);
  const [engineError, setEngineError] = d2("");
  const stageRef = A2(null);
  const canvasRef = A2(null);
  const fileRef = A2(null);
  const engineRef = A2(null);
  const sceneRef = A2(scene);
  const imageInfoRef = A2(imageInfo);
  const stageModeRef = A2(stageMode);
  const frozenRef = A2(frozen);
  const timeRef = A2(Math.random() * 90);
  const audioLevelRef = A2(0);
  const analyserRef = A2(null);
  const audioContextRef = A2(null);
  const micStreamRef = A2(null);
  const spectrumRef = A2(new Uint8Array(128));
  const recorderRef = A2(null);
  const chunksRef = A2([]);
  const toastTimerRef = A2(0);
  const lastPointerRef = A2({ x: 0.5, y: 0.5, at: 0 });
  const pointerRef = A2({
    x: 0.5,
    y: 0.5,
    velocityX: 0,
    velocityY: 0,
    down: false,
    active: false
  });
  const dragRef = A2(null);
  const stageSizeRef = A2({ width: 1, height: 1 });
  const qualityRef = A2(1.5);
  const exportResRef = A2(exportRes);
  const exportLockRef = A2(
    null
  );
  const dragRafRef = A2(0);
  const dragPointRef = A2({ x: 0, y: 0 });
  const mediaRuntimesRef = A2(/* @__PURE__ */ new Map());
  const helpOpenRef = A2(false);
  const kickRef = A2({
    zoom: 0,
    strobe: 0,
    chroma: 0,
    ripple: 0,
    swirl: 0
  });
  const historyRef = A2({
    stack: [],
    index: -1
  });
  const historySkipRef = A2(false);
  const playGestureRef = A2(null);
  const lastTapAtRef = A2(0);
  sceneRef.current = scene;
  imageInfoRef.current = imageInfo;
  stageModeRef.current = stageMode;
  frozenRef.current = frozen;
  exportResRef.current = exportRes;
  helpOpenRef.current = helpOpen;
  const selected = scene.layers.find((layer) => layer.id === selectedId) ?? null;
  const sceneList = scenesQuery?.items ?? [];
  function showToast(message) {
    setToast(message);
    window.clearTimeout(toastTimerRef.current);
    toastTimerRef.current = window.setTimeout(() => setToast(""), 2600);
  }
  function updateGlobal(patch) {
    setScene((previous) => ({
      ...previous,
      global: { ...previous.global, ...patch }
    }));
  }
  function updateLayerFx(layerId, patch) {
    setScene((previous) => ({
      ...previous,
      layers: previous.layers.map(
        (layer) => layer.id === layerId ? { ...layer, fx: { ...layer.fx, ...patch } } : layer
      )
    }));
  }
  function replaceLayerFx(layerId, fx) {
    setScene((previous) => ({
      ...previous,
      layers: previous.layers.map(
        (layer) => layer.id === layerId ? { ...layer, fx } : layer
      )
    }));
  }
  function moveLayer(layerId, delta) {
    setScene((previous) => {
      const index = previous.layers.findIndex(
        (layer2) => layer2.id === layerId
      );
      const next = index + delta;
      if (index < 0 || next < 0 || next >= previous.layers.length)
        return previous;
      const layers = previous.layers.slice();
      const [layer] = layers.splice(index, 1);
      layers.splice(next, 0, layer);
      return { ...previous, layers };
    });
  }
  function duplicateLayer(layerId) {
    setScene((previous) => {
      if (previous.layers.length >= MAX_LAYERS) return previous;
      const index = previous.layers.findIndex(
        (layer) => layer.id === layerId
      );
      if (index < 0) return previous;
      const source = previous.layers[index];
      const copy = {
        id: newId("layer"),
        imageId: source.imageId,
        name: `${source.name} copy`,
        mediaKind: source.mediaKind,
        fx: {
          ...source.fx,
          x: source.fx.x + 0.06,
          y: source.fx.y - 0.06
        }
      };
      const layers = previous.layers.slice();
      layers.splice(index + 1, 0, copy);
      setSelectedId(copy.id);
      return { ...previous, layers };
    });
  }
  function removeLayer(layerId) {
    setScene((previous) => {
      const removed = previous.layers.find(
        (layer) => layer.id === layerId
      );
      const layers = previous.layers.filter(
        (layer) => layer.id !== layerId
      );
      if (removed && !layers.some((layer) => layer.imageId === removed.imageId)) {
        disposeMediaRuntime(removed.imageId);
        engineRef.current?.removeImage(removed.imageId);
        setImageInfo((info) => {
          const next = { ...info };
          delete next[removed.imageId];
          return next;
        });
      }
      return { ...previous, layers };
    });
    setSelectedId((current) => current === layerId ? null : current);
  }
  function applyHistorySnapshot(snapshot) {
    historySkipRef.current = true;
    const restored = decodeScene(snapshot);
    setScene(restored);
    sceneRef.current = restored;
    setSelectedId(
      (current) => restored.layers.some((layer) => layer.id === current) ? current : null
    );
    engineRef.current?.clearFeedback();
    void hydrateSceneImages(restored);
  }
  function undoScene() {
    const history = historyRef.current;
    const current = encodeScene(sceneRef.current);
    if (history.index >= 0 && history.stack[history.index] !== current) {
      history.stack = history.stack.slice(0, history.index + 1);
      history.stack.push(current);
      history.index++;
    }
    if (history.index <= 0) {
      showToast("Nothing to undo");
      return;
    }
    history.index--;
    applyHistorySnapshot(history.stack[history.index]);
    showToast("Undo");
  }
  function redoScene() {
    const history = historyRef.current;
    if (history.index >= history.stack.length - 1) {
      showToast("Nothing to redo");
      return;
    }
    history.index++;
    applyHistorySnapshot(history.stack[history.index]);
    showToast("Redo");
  }
  function disposeMediaRuntime(imageId) {
    const runtime = mediaRuntimesRef.current.get(imageId);
    if (!runtime) return;
    runtime.video?.pause();
    runtime.audio?.pause();
    if (runtime.video) {
      runtime.video.removeAttribute("src");
      runtime.video.load();
    }
    if (runtime.audio) {
      runtime.audio.removeAttribute("src");
      runtime.audio.load();
    }
    try {
      runtime.sourceNode?.disconnect();
    } catch {
    }
    try {
      runtime.analyser?.disconnect();
    } catch {
    }
    if (runtime.objectUrl) URL.revokeObjectURL(runtime.objectUrl);
    mediaRuntimesRef.current.delete(imageId);
  }
  function disposeAllMediaRuntimes() {
    for (const imageId of [...mediaRuntimesRef.current.keys()]) {
      disposeMediaRuntime(imageId);
    }
  }
  async function ensureMediaAudioContext() {
    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContext();
    }
    if (audioContextRef.current.state === "suspended") {
      await audioContextRef.current.resume();
    }
    return audioContextRef.current;
  }
  async function activateMedia(imageId, blob, kind, _fileName) {
    disposeMediaRuntime(imageId);
    const engine = engineRef.current;
    if (kind === "image") {
      const decoded = await decodeImageBlob(blob);
      engine?.setImage(imageId, decoded.canvas);
      mediaRuntimesRef.current.set(imageId, { kind });
      return {
        width: decoded.width,
        height: decoded.height,
        thumb: decoded.thumb,
        missing: false,
        kind
      };
    }
    if (kind === "data") {
      const canvas2 = document.createElement("canvas");
      const buffer = await blob.slice(0, 1024 * 1024).arrayBuffer();
      paintDataBytes(canvas2, new Uint8Array(buffer));
      engine?.setImage(imageId, canvas2);
      mediaRuntimesRef.current.set(imageId, { kind, canvas: canvas2 });
      return {
        width: canvas2.width,
        height: canvas2.height,
        thumb: canvasThumb(canvas2, canvas2.width, canvas2.height),
        missing: false,
        kind
      };
    }
    if (kind === "video") {
      const objectUrl2 = URL.createObjectURL(blob);
      const video = document.createElement("video");
      video.playsInline = true;
      video.muted = true;
      video.loop = true;
      video.preload = "auto";
      video.setAttribute("playsinline", "");
      video.setAttribute("webkit-playsinline", "");
      video.src = objectUrl2;
      await new Promise((resolve, reject) => {
        const onReady = () => {
          cleanup();
          resolve();
        };
        const onError = () => {
          cleanup();
          reject(new Error("Could not decode that video"));
        };
        const cleanup = () => {
          video.removeEventListener("loadeddata", onReady);
          video.removeEventListener("error", onError);
        };
        video.addEventListener("loadeddata", onReady);
        video.addEventListener("error", onError);
        video.load();
      });
      const width = Math.max(1, video.videoWidth);
      const height = Math.max(1, video.videoHeight);
      engine?.setImage(imageId, video);
      mediaRuntimesRef.current.set(imageId, { kind, objectUrl: objectUrl2, video });
      void video.play().catch(() => void 0);
      return {
        width,
        height,
        thumb: canvasThumb(video, width, height),
        missing: false,
        kind
      };
    }
    const objectUrl = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.loop = true;
    audio.preload = "auto";
    audio.src = objectUrl;
    const canvas = document.createElement("canvas");
    ensureSpectrumCanvas(canvas);
    paintAudioVisual(canvas, new Uint8Array(128), 0.25, 0);
    const context = await ensureMediaAudioContext();
    const sourceNode = context.createMediaElementSource(audio);
    const analyser = context.createAnalyser();
    analyser.fftSize = 256;
    analyser.smoothingTimeConstant = 0.72;
    sourceNode.connect(analyser);
    analyser.connect(context.destination);
    engine?.setImage(imageId, canvas);
    mediaRuntimesRef.current.set(imageId, {
      kind,
      objectUrl,
      audio,
      canvas,
      analyser,
      sourceNode,
      spectrum: new Uint8Array(analyser.frequencyBinCount)
    });
    void audio.play().catch(() => void 0);
    return {
      width: canvas.width,
      height: canvas.height,
      thumb: canvasThumb(canvas, canvas.width, canvas.height),
      missing: false,
      kind
    };
  }
  async function importFiles(files) {
    const list = Array.from(files);
    if (!list.length) return;
    let added = 0;
    let importedAudio = false;
    for (const file of list) {
      if (sceneRef.current.layers.length + added >= MAX_LAYERS) {
        showToast(`Layer limit is ${MAX_LAYERS}`);
        break;
      }
      const kind = classifyFile(file);
      try {
        const imageId = newId("img");
        await putImageBlob(imageId, file).catch(() => void 0);
        const info = await activateMedia(imageId, file, kind, file.name);
        setImageInfo((previous) => ({ ...previous, [imageId]: info }));
        const layer = {
          id: newId("layer"),
          imageId,
          name: cleanName(defaultLayerName(kind, file.name), mediaKindLabel(kind)),
          mediaKind: kind,
          fx: {
            ...DEFAULT_LAYER_FX,
            x: added * 0.07,
            y: added * -0.07
          }
        };
        setScene((previous) => ({
          ...previous,
          layers: [...previous.layers, layer]
        }));
        setSelectedId(layer.id);
        if (kind === "audio") importedAudio = true;
        added++;
      } catch {
        showToast(`Could not import ${mediaKindLabel(kind).toLowerCase()}`);
      }
    }
    if (importedAudio && sceneRef.current.global.audioReact < 0.25) {
      updateGlobal({ audioReact: 0.55 });
    }
  }
  async function hydrateSceneImages(target) {
    const engine = engineRef.current;
    if (!engine) return;
    const kindById = /* @__PURE__ */ new Map();
    const nameById = /* @__PURE__ */ new Map();
    for (const layer of target.layers) {
      if (!layer.imageId) continue;
      if (!kindById.has(layer.imageId)) {
        kindById.set(layer.imageId, layer.mediaKind ?? "image");
        nameById.set(layer.imageId, layer.name);
      }
    }
    for (const imageId of [...mediaRuntimesRef.current.keys()]) {
      if (!kindById.has(imageId)) {
        disposeMediaRuntime(imageId);
        engine.removeImage(imageId);
      }
    }
    for (const [imageId, kind] of kindById) {
      if (mediaRuntimesRef.current.has(imageId) && engine.hasImage(imageId)) {
        continue;
      }
      try {
        const blob = await getImageBlob(imageId);
        if (!blob) throw new Error("missing");
        const resolved = kind === "image" || kind === "video" || kind === "audio" || kind === "data" ? kind : classifyBlob(blob, nameById.get(imageId) ?? "");
        const info = await activateMedia(
          imageId,
          blob,
          resolved,
          nameById.get(imageId) ?? "media"
        );
        setImageInfo((previous) => ({ ...previous, [imageId]: info }));
      } catch {
        setImageInfo((previous) => ({
          ...previous,
          [imageId]: {
            width: 1,
            height: 1,
            thumb: "",
            missing: true,
            kind
          }
        }));
      }
    }
  }
  function syncLiveMediaTextures(engine, time) {
    let mediaLevel = 0;
    for (const [imageId, runtime] of mediaRuntimesRef.current) {
      if (runtime.kind === "video" && runtime.video) {
        if (runtime.video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
          engine.setImage(imageId, runtime.video);
        }
        continue;
      }
      if (runtime.kind === "audio" && runtime.audio && runtime.canvas && runtime.analyser) {
        const spectrum = runtime.spectrum && runtime.spectrum.length === runtime.analyser.frequencyBinCount ? runtime.spectrum : new Uint8Array(runtime.analyser.frequencyBinCount);
        runtime.spectrum = spectrum;
        runtime.analyser.getByteFrequencyData(spectrum);
        const level = levelFromSpectrum(spectrum);
        mediaLevel = Math.max(mediaLevel, level);
        paintAudioVisual(runtime.canvas, spectrum, level, time);
        engine.setImage(imageId, runtime.canvas);
      }
    }
    return mediaLevel;
  }
  function buildFrame() {
    const current = sceneRef.current;
    const info = imageInfoRef.current;
    const { width, height } = stageSizeRef.current;
    const aspect = Math.max(0.05, width / Math.max(1, height));
    const time = timeRef.current;
    const audio = audioLevelRef.current;
    const kick = kickRef.current;
    const layers = current.layers.filter((layer) => layer.fx.visible).map((layer) => {
      const fx = layer.fx;
      const seed = layerSeed(layer.id);
      const meta = info[layer.imageId];
      const imageAspect = meta && meta.width > 0 ? meta.width / Math.max(1, meta.height) : 1;
      const fitHeight = Math.min(1, aspect / imageAspect);
      const pulse = 1 + fx.pulse * (0.16 * Math.sin(time * 2.2 + seed * 20) + audio * current.global.audioReact * 0.5);
      const scale = fx.scale * pulse;
      const driftX = Math.sin(time * 0.57 + seed * 9.2) * fx.drift * 0.3;
      const driftY = Math.cos(time * 0.43 + seed * 5.7) * fx.drift * 0.3;
      return {
        id: layer.id,
        imageId: layer.imageId,
        pos: [fx.x + driftX, fx.y + driftY],
        ext: [
          Math.max(1e-4, fitHeight * imageAspect * scale / 2),
          Math.max(1e-4, fitHeight * scale / 2)
        ],
        rot: fx.rotation * Math.PI / 180 + fx.spin * time * 1.5,
        opacity: fx.opacity,
        blend: blendIndex(fx.blend),
        tile: Math.round(fx.tile),
        warp: fx.warp,
        swirl: fx.swirl,
        ripple: fx.ripple,
        kaleido: fx.kaleido,
        pixelate: fx.pixelate,
        bulge: fx.bulge,
        mirror: fx.mirror,
        hue: fx.hue,
        saturation: fx.saturation,
        contrast: fx.contrast,
        brightness: fx.brightness,
        invert: fx.invert,
        posterize: fx.posterize,
        chroma: fx.chroma,
        edges: fx.edges,
        tint: hexToRgb(fx.tintColor),
        tintAmount: fx.tintAmount,
        shimmer: fx.shimmer,
        seed
      };
    });
    const g2 = current.global;
    return {
      time,
      audio,
      pointer: pointerRef.current,
      layers,
      global: {
        bgMode: g2.bgMode,
        bgA: hexToRgb(g2.bgA),
        bgB: hexToRgb(g2.bgB),
        feedback: g2.feedback,
        trails: g2.trails,
        fbZoom: g2.fbZoom,
        fbRotate: g2.fbRotate,
        fbHue: g2.fbHue,
        warp: g2.warp,
        swirl: clamp(g2.swirl + kick.swirl, 0, 1),
        ripple: clamp(g2.ripple + kick.ripple, 0, 1),
        zoom: clamp(g2.zoom + kick.zoom, 0, 1),
        kaleido: g2.kaleido,
        mirror: g2.mirror,
        chroma: clamp(g2.chroma + kick.chroma, 0, 1),
        hueOrbit: g2.hueOrbit,
        saturation: g2.saturation,
        contrast: g2.contrast,
        solarize: g2.solarize,
        grain: g2.grain,
        scanlines: g2.scanlines,
        vignette: g2.vignette,
        strobe: clamp(g2.strobe + kick.strobe, 0, 1),
        audioReact: g2.audioReact,
        pointerForce: g2.pointerForce,
        pointerSize: g2.pointerSize,
        pointerMode: g2.pointerMode
      }
    };
  }
  h2(() => {
    const canvas = canvasRef.current;
    const stage = stageRef.current;
    if (!canvas || !stage) return;
    let engine;
    try {
      engine = createEngine(canvas);
    } catch (cause) {
      setEngineError(
        cause instanceof Error ? cause.message : "WebGL failed to start"
      );
      return;
    }
    engineRef.current = engine;
    const resize = () => {
      const rect = stage.getBoundingClientRect();
      stageSizeRef.current = { width: rect.width, height: rect.height };
      const lock = exportLockRef.current;
      if (lock) {
        engine.resize(lock.width, lock.height);
        engine.setPixelRatioCap(1);
      } else {
        engine.resize(rect.width, rect.height);
      }
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(stage);
    let raf = 0;
    let last = performance.now();
    let slowStreak = 0;
    let fastStreak = 0;
    const tick = (now) => {
      const dt = Math.min(0.1, (now - last) / 1e3);
      last = now;
      const analyser = analyserRef.current;
      let target = 0;
      if (analyser) {
        if (spectrumRef.current.length !== analyser.frequencyBinCount) {
          spectrumRef.current = new Uint8Array(
            analyser.frequencyBinCount
          );
        }
        analyser.getByteFrequencyData(spectrumRef.current);
        const bins = spectrumRef.current;
        let bass = 0;
        let total = 0;
        for (let i3 = 0; i3 < bins.length; i3++) {
          total += bins[i3];
          if (i3 < 10) bass += bins[i3];
        }
        target = Math.min(
          1,
          (bass / 10 * 2 + total / bins.length) / 3 / 148
        );
      }
      if (!frozenRef.current) {
        timeRef.current += dt * sceneRef.current.global.speed;
      }
      const mediaLevel = syncLiveMediaTextures(engine, timeRef.current);
      target = Math.max(target, mediaLevel);
      audioLevelRef.current += (target - audioLevelRef.current) * 0.28;
      const kick = kickRef.current;
      const kickDecay = Math.exp(-dt * 4.5);
      kick.zoom *= kickDecay;
      kick.strobe *= kickDecay;
      kick.chroma *= kickDecay;
      kick.ripple *= kickDecay;
      kick.swirl *= kickDecay;
      if (!exportLockRef.current) {
        if (dt > 0.024) {
          slowStreak++;
          fastStreak = 0;
        } else if (dt < 0.014) {
          fastStreak++;
          slowStreak = 0;
        } else {
          slowStreak = 0;
          fastStreak = 0;
        }
        if (slowStreak > 30 && qualityRef.current > 0.9) {
          qualityRef.current = Math.max(
            0.9,
            qualityRef.current - 0.2
          );
          engine.setPixelRatioCap(qualityRef.current);
          slowStreak = 0;
        } else if (fastStreak > 600 && qualityRef.current < 1.5) {
          qualityRef.current = Math.min(
            1.5,
            qualityRef.current + 0.2
          );
          engine.setPixelRatioCap(qualityRef.current);
          fastStreak = 0;
        }
      }
      engine.render(buildFrame());
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    const saved = loadAutosave();
    if (saved) {
      setScene(saved);
      sceneRef.current = saved;
      void hydrateSceneImages(saved);
    }
    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      disposeAllMediaRuntimes();
      engine.destroy();
      engineRef.current = null;
    };
  }, []);
  h2(() => {
    const timer = window.setTimeout(() => saveAutosave(scene), 350);
    return () => window.clearTimeout(timer);
  }, [scene]);
  h2(() => {
    if (historySkipRef.current) {
      historySkipRef.current = false;
      return;
    }
    const timer = window.setTimeout(() => {
      const history = historyRef.current;
      const snapshot = encodeScene(scene);
      if (history.stack[history.index] === snapshot) return;
      history.stack = history.stack.slice(0, history.index + 1);
      history.stack.push(snapshot);
      if (history.stack.length > 80) history.stack.shift();
      history.index = history.stack.length - 1;
    }, 400);
    return () => window.clearTimeout(timer);
  }, [scene]);
  h2(() => {
    return () => {
      for (const track of micStreamRef.current?.getTracks() ?? [])
        track.stop();
      if (recorderRef.current?.state === "recording")
        recorderRef.current.stop();
      void audioContextRef.current?.close();
    };
  }, []);
  h2(() => {
    const sync = () => setFullscreen(document.fullscreenElement === stageRef.current);
    document.addEventListener("fullscreenchange", sync);
    return () => document.removeEventListener("fullscreenchange", sync);
  }, []);
  h2(() => {
    document.title = "vaudio-2";
    const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" fill="#08080a"/>
  <path d="M5 8.5 23.5 5.5 26.5 23.5 8 26.5Z" fill="none" stroke="#6e6c68" stroke-width="1.2"/>
  <path d="M4 7.5 24.5 4.5 27.5 24.5 7 27.5Z" fill="none" stroke="#e8e6e0" stroke-width="1.7"/>
  <path d="M10 22.5 21.5 9.5" stroke="#e8e6e0" stroke-width="2.4" stroke-linecap="square"/>
  <path d="M11.2 22.5 22.7 9.5" stroke="#a87880" stroke-width="1.1" stroke-linecap="square" opacity=".85"/>
  <rect x="20.5" y="20.5" width="3.2" height="3.2" fill="#e8e6e0"/>
  <rect x="6.5" y="6.5" width="2.2" height="2.2" fill="#6e6c68"/>
</svg>`;
    const link = document.querySelector(
      'link[rel="icon"]'
    ) ?? document.createElement("link");
    link.rel = "icon";
    link.type = "image/svg+xml";
    link.href = `data:image/svg+xml,${encodeURIComponent(favicon)}`;
    if (!link.parentNode) document.head.appendChild(link);
  }, []);
  h2(() => {
    const onKeyDown = (event) => {
      const target = event.target;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable))
        return;
      const command = event.metaKey || event.ctrlKey;
      if (command) {
        const shortcut = event.key.toLowerCase();
        if (shortcut === "z") {
          event.preventDefault();
          if (event.shiftKey) redoScene();
          else undoScene();
        } else if (shortcut === "y") {
          event.preventDefault();
          redoScene();
        }
        return;
      }
      if (event.key === "Tab") {
        event.preventDefault();
        setUiHidden((previous) => !previous);
        return;
      }
      if (helpOpenRef.current) {
        if (event.key === "Escape" || event.key === "?") {
          event.preventDefault();
          setHelpOpen(false);
        }
        return;
      }
      if (event.key === "?") {
        event.preventDefault();
        setHelpOpen(true);
        return;
      }
      if (event.key === " ") {
        event.preventDefault();
        setFrozen((previous) => !previous);
        return;
      }
      if (stageModeRef.current === "play") {
        handlePlayKey(event);
        return;
      }
      const key = event.key.toLowerCase();
      if (key === "v") setStageMode("arrange");
      if (key === "p") setStageMode("play");
      if ((event.key === "Delete" || event.key === "Backspace") && selectedId) {
        event.preventDefault();
        removeLayer(selectedId);
      }
      if (selectedId && event.key.startsWith("Arrow")) {
        event.preventDefault();
        const step = event.shiftKey ? 0.05 : 0.01;
        const layer = sceneRef.current.layers.find(
          (l3) => l3.id === selectedId
        );
        if (!layer) return;
        const dx = event.key === "ArrowLeft" ? -step : event.key === "ArrowRight" ? step : 0;
        const dy = event.key === "ArrowDown" ? -step : event.key === "ArrowUp" ? step : 0;
        updateLayerFx(selectedId, {
          x: clamp(layer.fx.x + dx, -3, 3),
          y: clamp(layer.fx.y + dy, -3, 3)
        });
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedId]);
  h2(() => {
    const onPaste = (event) => {
      const files = [];
      for (const item of event.clipboardData?.items ?? []) {
        if (item.kind !== "file") continue;
        const file = item.getAsFile();
        if (file) files.push(file);
      }
      if (files.length) {
        event.preventDefault();
        void importFiles(files);
      }
    };
    window.addEventListener("paste", onPaste);
    return () => window.removeEventListener("paste", onPaste);
  }, []);
  function addKick(patch) {
    const kick = kickRef.current;
    for (const key of Object.keys(patch)) {
      kick[key] = Math.min(0.9, kick[key] + (patch[key] ?? 0));
    }
  }
  function stepGlobal(param, delta) {
    setScene((previous) => {
      const value = previous.global[param];
      if (typeof value !== "number") return previous;
      const max = param === "saturation" || param === "contrast" || param === "speed" ? 2 : 1;
      const min = param === "fbZoom" || param === "fbRotate" ? -1 : 0;
      return {
        ...previous,
        global: {
          ...previous.global,
          [param]: clamp(value + delta, min, max)
        }
      };
    });
  }
  function playNote(index, paintBackground) {
    const count = PLAY_PIANO.length;
    const position = count > 1 ? index / (count - 1) : 0;
    const hueDeg = Math.round(index / count * 360);
    if (paintBackground || sceneRef.current.layers.length === 0) {
      setScene((previous) => ({
        ...previous,
        global: {
          ...previous.global,
          bgA: hslToHex(hueDeg, 0.5, 0.09),
          bgB: hslToHex((hueDeg + 45) % 360, 0.55, 0.3)
        }
      }));
    } else {
      const hue = index / count;
      setScene((previous) => ({
        ...previous,
        layers: previous.layers.map((layer) => ({
          ...layer,
          fx: { ...layer.fx, hue }
        }))
      }));
    }
    addKick({
      zoom: 0.15 * (1 - position),
      ripple: 0.08,
      chroma: 0.05 + 0.13 * position,
      strobe: 0.1 * position
    });
  }
  function strikeLayer(index, reset) {
    const layer = sceneRef.current.layers[index];
    if (!layer) return;
    replaceLayerFx(
      layer.id,
      reset ? resetLayerFxEffects(layer.fx) : randomLayerFx(layer.fx)
    );
    setSelectedId(layer.id);
    addKick({ ripple: 0.14, strobe: 0.06 });
  }
  function washWorld() {
    setScene((previous) => ({
      ...previous,
      global: {
        ...DEFAULT_GLOBAL_FX,
        bgMode: previous.global.bgMode,
        bgA: previous.global.bgA,
        bgB: previous.global.bgB,
        audioReact: previous.global.audioReact,
        pointerForce: previous.global.pointerForce,
        pointerSize: previous.global.pointerSize,
        pointerMode: previous.global.pointerMode
      }
    }));
    engineRef.current?.clearFeedback();
  }
  function handlePlayKey(event) {
    const code = event.code;
    if (event.key === "Escape") {
      setStageMode("arrange");
      return;
    }
    const presetIndex = PLAY_PRESET_CODES.indexOf(code);
    if (presetIndex >= 0 && presetIndex < WORLD_PRESETS.length) {
      event.preventDefault();
      if (event.repeat) return;
      const preset = WORLD_PRESETS[presetIndex];
      updateGlobal(preset.global);
      engineRef.current?.clearFeedback();
      addKick({ strobe: 0.22, zoom: 0.08 });
      showToast(`${preset.code} \xB7 ${preset.name}`);
      return;
    }
    const fxKey = PLAY_FX_KEYS.find((item) => item.code === code);
    if (fxKey) {
      event.preventDefault();
      stepGlobal(fxKey.param, event.shiftKey ? -0.08 : 0.08);
      addKick({ chroma: 0.04, strobe: 0.05 });
      return;
    }
    if (code === "BracketLeft" || code === "BracketRight") {
      event.preventDefault();
      stepGlobal("speed", code === "BracketRight" ? 0.1 : -0.1);
      return;
    }
    if (code === "Backslash") {
      event.preventDefault();
      stepGlobal("solarize", event.shiftKey ? -0.15 : 0.15);
      addKick({ strobe: 0.1 });
      return;
    }
    const noteIndex = PLAY_PIANO.findIndex((item) => item.code === code);
    if (noteIndex >= 0) {
      event.preventDefault();
      playNote(noteIndex, event.shiftKey);
      return;
    }
    const layerIndex = PLAY_LAYER_KEYS.findIndex(
      (item) => item.code === code
    );
    if (layerIndex >= 0) {
      event.preventDefault();
      if (event.repeat) return;
      strikeLayer(layerIndex, event.shiftKey);
      return;
    }
    if (code === "Backspace") {
      event.preventDefault();
      if (event.repeat) return;
      washWorld();
      showToast("Washed the world clean");
      return;
    }
    if (event.key.startsWith("Arrow")) {
      event.preventDefault();
      if (event.key === "ArrowUp") stepGlobal("saturation", 0.08);
      if (event.key === "ArrowDown") stepGlobal("saturation", -0.08);
      if (event.key === "ArrowRight") stepGlobal("hueOrbit", 0.06);
      if (event.key === "ArrowLeft") stepGlobal("hueOrbit", -0.06);
    }
  }
  function stampTap(u4, v3, subtract) {
    const global = sceneRef.current.global;
    const mode = Math.round(global.pointerMode);
    const reach = Math.min(1, Math.hypot(u4 - 0.5, v3 - 0.5) / 0.62);
    const strength = (0.05 + 0.13 * reach) * (subtract ? -1 : 1);
    const { width, height } = stageSizeRef.current;
    const aspect = Math.max(0.05, width / Math.max(1, height));
    const hit = hitLayer((u4 - 0.5) * aspect, 0.5 - v3);
    if (hit) {
      if (mode === 1) {
        updateLayerFx(hit.id, {
          bulge: clamp(hit.fx.bulge - strength * 1.4, -1, 1)
        });
      } else {
        const param = mode === 0 ? "swirl" : mode === 2 ? "chroma" : "warp";
        const current = hit.fx[param];
        updateLayerFx(hit.id, {
          [param]: clamp(current + strength * 1.2, 0, 1)
        });
      }
    } else {
      const param = mode === 0 ? "swirl" : mode === 1 ? "zoom" : mode === 2 ? "chroma" : "warp";
      stepGlobal(param, strength);
    }
    addKick(
      mode === 0 ? { swirl: 0.12 } : mode === 1 ? { zoom: 0.12 } : mode === 2 ? { chroma: 0.14 } : { ripple: 0.12 }
    );
  }
  function stepKaleido() {
    const current = sceneRef.current.global.kaleido;
    const next = current < 0.1 ? 0.3 : current < 0.45 ? 0.6 : current < 0.75 ? 0.85 : 0;
    updateGlobal({ kaleido: next });
    addKick({ swirl: 0.16, strobe: 0.08 });
  }
  function soothePlay(sceneX, sceneY) {
    const hit = hitLayer(sceneX, sceneY);
    if (hit) {
      setScene((previous) => ({
        ...previous,
        layers: previous.layers.map(
          (layer) => layer.id === hit.id ? {
            ...layer,
            fx: {
              ...layer.fx,
              warp: layer.fx.warp * 0.55,
              swirl: layer.fx.swirl * 0.55,
              ripple: layer.fx.ripple * 0.55,
              kaleido: layer.fx.kaleido * 0.55,
              pixelate: layer.fx.pixelate * 0.55,
              bulge: layer.fx.bulge * 0.55,
              mirror: layer.fx.mirror * 0.55,
              chroma: layer.fx.chroma * 0.55
            }
          } : layer
        )
      }));
      return;
    }
    setScene((previous) => {
      const g2 = previous.global;
      return {
        ...previous,
        global: {
          ...g2,
          warp: g2.warp * 0.72,
          swirl: g2.swirl * 0.72,
          ripple: g2.ripple * 0.72,
          zoom: g2.zoom * 0.72,
          kaleido: g2.kaleido * 0.72,
          mirror: g2.mirror * 0.72,
          chroma: g2.chroma * 0.72,
          feedback: g2.feedback * 0.72,
          solarize: g2.solarize * 0.72,
          strobe: g2.strobe * 0.72
        }
      };
    });
  }
  function throwEcho(gesture, u4, v3) {
    const dx = u4 - gesture.startU;
    const lift = gesture.startV - v3;
    setScene((previous) => {
      const g2 = previous.global;
      return {
        ...previous,
        global: {
          ...g2,
          fbRotate: clamp(g2.fbRotate + dx * 0.7, -1, 1),
          fbZoom: clamp(g2.fbZoom + lift * 0.7, -1, 1),
          feedback: clamp(
            Math.max(g2.feedback, 0.3) + Math.min(0.2, gesture.path * 0.25),
            0,
            0.95
          ),
          trails: clamp(
            Math.max(g2.trails, 0.55) + Math.min(0.15, gesture.path * 0.12),
            0,
            0.96
          )
        }
      };
    });
    addKick({ zoom: 0.1, chroma: 0.08 });
  }
  function stagePoint(event) {
    const stage = stageRef.current;
    const rect = stage ? stage.getBoundingClientRect() : { left: 0, top: 0, width: 1, height: 1 };
    const u4 = clamp((event.clientX - rect.left) / rect.width, 0, 1);
    const v3 = clamp((event.clientY - rect.top) / rect.height, 0, 1);
    const aspect = rect.width / Math.max(1, rect.height);
    return { sceneX: (u4 - 0.5) * aspect, sceneY: 0.5 - v3, u: u4, v: v3 };
  }
  function hitLayer(sceneX, sceneY) {
    const current = sceneRef.current;
    const info = imageInfoRef.current;
    const { width, height } = stageSizeRef.current;
    const aspect = Math.max(0.05, width / Math.max(1, height));
    for (let i3 = current.layers.length - 1; i3 >= 0; i3--) {
      const layer = current.layers[i3];
      if (!layer.fx.visible) continue;
      const meta = info[layer.imageId];
      const imageAspect = meta && meta.width > 0 ? meta.width / Math.max(1, meta.height) : 1;
      const fitHeight = Math.min(1, aspect / imageAspect);
      const extX = fitHeight * imageAspect * layer.fx.scale / 2;
      const extY = fitHeight * layer.fx.scale / 2;
      const angle = -layer.fx.rotation * Math.PI / 180;
      const dx = sceneX - layer.fx.x;
      const dy = sceneY - layer.fx.y;
      const qx = Math.cos(angle) * dx - Math.sin(angle) * dy;
      const qy = Math.sin(angle) * dx + Math.cos(angle) * dy;
      if (Math.abs(qx) <= extX && Math.abs(qy) <= extY) return layer;
    }
    return null;
  }
  function updatePlayPointer(event, down) {
    const { u: u4, v: v3 } = stagePoint(event);
    const x3 = u4;
    const y3 = 1 - v3;
    const now = performance.now();
    const elapsed = Math.max(8, now - lastPointerRef.current.at);
    pointerRef.current = {
      x: x3,
      y: y3,
      velocityX: (x3 - lastPointerRef.current.x) * (16 / elapsed),
      velocityY: (y3 - lastPointerRef.current.y) * (16 / elapsed),
      down,
      active: true
    };
    lastPointerRef.current = { x: x3, y: y3, at: now };
  }
  function onStagePointerDown(event) {
    event.currentTarget.setPointerCapture(event.pointerId);
    if (stageModeRef.current === "play") {
      if (event.button === 2) {
        const { sceneX: sceneX2, sceneY: sceneY2 } = stagePoint(event);
        soothePlay(sceneX2, sceneY2);
        addKick({ ripple: 0.08 });
        return;
      }
      updatePlayPointer(event, true);
      const { u: u4, v: v3 } = stagePoint(event);
      playGestureRef.current = {
        startU: u4,
        startV: v3,
        lastU: u4,
        lastV: v3,
        path: 0,
        at: performance.now(),
        shift: event.shiftKey
      };
      return;
    }
    const { sceneX, sceneY } = stagePoint(event);
    const hit = hitLayer(sceneX, sceneY);
    if (hit) {
      setSelectedId(hit.id);
      dragRef.current = {
        layerId: hit.id,
        startX: sceneX,
        startY: sceneY,
        fxX: hit.fx.x,
        fxY: hit.fx.y
      };
    } else {
      setSelectedId(null);
      dragRef.current = null;
    }
  }
  function onStagePointerMove(event) {
    if (stageModeRef.current === "play") {
      updatePlayPointer(event, pointerRef.current.down);
      const gesture = playGestureRef.current;
      if (gesture) {
        const { u: u4, v: v3 } = stagePoint(event);
        gesture.path += Math.hypot(u4 - gesture.lastU, v3 - gesture.lastV);
        gesture.lastU = u4;
        gesture.lastV = v3;
      }
      return;
    }
    if (!dragRef.current) return;
    const { sceneX, sceneY } = stagePoint(event);
    dragPointRef.current = { x: sceneX, y: sceneY };
    if (dragRafRef.current) return;
    dragRafRef.current = requestAnimationFrame(() => {
      dragRafRef.current = 0;
      const drag = dragRef.current;
      if (!drag) return;
      updateLayerFx(drag.layerId, {
        x: clamp(
          drag.fxX + dragPointRef.current.x - drag.startX,
          -3,
          3
        ),
        y: clamp(
          drag.fxY + dragPointRef.current.y - drag.startY,
          -3,
          3
        )
      });
    });
  }
  function onStagePointerUp(event) {
    if (stageModeRef.current === "play") {
      updatePlayPointer(event, false);
      const gesture = playGestureRef.current;
      playGestureRef.current = null;
      if (!gesture || event.button === 2) return;
      const now = performance.now();
      const { u: u4, v: v3 } = stagePoint(event);
      if (now - gesture.at < 300 && gesture.path < 0.02) {
        if (now - lastTapAtRef.current < 360) {
          lastTapAtRef.current = 0;
          stepKaleido();
        } else {
          lastTapAtRef.current = now;
          stampTap(u4, v3, gesture.shift || event.shiftKey);
        }
      } else if (gesture.path > 0.03) {
        throwEcho(gesture, u4, v3);
      }
      return;
    }
    dragRef.current = null;
  }
  function onStagePointerLeave() {
    pointerRef.current = {
      ...pointerRef.current,
      down: false,
      active: false
    };
    dragRef.current = null;
    playGestureRef.current = null;
  }
  h2(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const onWheel = (event) => {
      if (stageModeRef.current === "play") {
        event.preventDefault();
        const delta = event.deltaY || event.deltaX;
        if (event.shiftKey) stepGlobal("saturation", -delta * 12e-4);
        else stepGlobal("hueOrbit", -delta * 6e-4);
        return;
      }
      if (stageModeRef.current !== "arrange") return;
      const layerId = selectedId;
      if (!layerId) return;
      event.preventDefault();
      const layer = sceneRef.current.layers.find((l3) => l3.id === layerId);
      if (!layer) return;
      if (event.shiftKey) {
        updateLayerFx(layerId, {
          rotation: layer.fx.rotation + (event.deltaY > 0 ? 3 : -3)
        });
      } else {
        updateLayerFx(layerId, {
          scale: clamp(
            layer.fx.scale * Math.exp(-event.deltaY * 16e-4),
            0.05,
            6
          )
        });
      }
    };
    stage.addEventListener("wheel", onWheel, { passive: false });
    return () => stage.removeEventListener("wheel", onWheel);
  }, [selectedId]);
  async function toggleMic() {
    if (micActive) {
      for (const track of micStreamRef.current?.getTracks() ?? [])
        track.stop();
      micStreamRef.current = null;
      analyserRef.current = null;
      audioLevelRef.current = 0;
      setMicActive(false);
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false
      });
      micStreamRef.current = stream;
      if (!audioContextRef.current)
        audioContextRef.current = new AudioContext();
      await audioContextRef.current.resume();
      const analyser = audioContextRef.current.createAnalyser();
      analyser.fftSize = 256;
      analyser.smoothingTimeConstant = 0.68;
      audioContextRef.current.createMediaStreamSource(stream).connect(analyser);
      analyserRef.current = analyser;
      setMicActive(true);
      if (sceneRef.current.global.audioReact < 0.3)
        updateGlobal({ audioReact: 0.7 });
      showToast("Mic live \u2014 audio drives the shader");
    } catch {
      showToast("Microphone was blocked");
    }
  }
  function restoreLiveCanvasSize() {
    const engine = engineRef.current;
    const stage = stageRef.current;
    if (!engine || !stage) return;
    const rect = stage.getBoundingClientRect();
    stageSizeRef.current = { width: rect.width, height: rect.height };
    engine.resize(rect.width, rect.height);
    engine.setPixelRatioCap(qualityRef.current);
  }
  function applyExportCanvasSize(resolutionId, screenScale = 1) {
    const engine = engineRef.current;
    if (!engine) return null;
    const size = resolveExportSize(
      resolutionId,
      stageSizeRef.current,
      screenScale
    );
    exportLockRef.current = size;
    engine.resize(size.width, size.height);
    engine.setPixelRatioCap(1);
    return size;
  }
  function toggleRecording() {
    const canvas = canvasRef.current;
    const engine = engineRef.current;
    if (!canvas || !engine) return;
    if (recording) {
      recorderRef.current?.stop();
      return;
    }
    const size = applyExportCanvasSize(
      exportResRef.current,
      window.devicePixelRatio || 1
    );
    if (!size) return;
    engine.render(buildFrame());
    const stream = canvas.captureStream(60);
    const mimeType = [
      "video/webm;codecs=vp9",
      "video/webm;codecs=vp8",
      "video/webm",
      "video/mp4"
    ].find((type) => MediaRecorder.isTypeSupported(type));
    try {
      const recorder = new MediaRecorder(stream, {
        mimeType,
        videoBitsPerSecond: 18e6
      });
      chunksRef.current = [];
      recorder.ondataavailable = (event) => {
        if (event.data.size) chunksRef.current.push(event.data);
      };
      recorder.onstop = () => {
        const extension = (recorder.mimeType || "video/webm").includes(
          "mp4"
        ) ? "mp4" : "webm";
        const blob = new Blob(chunksRef.current, {
          type: recorder.mimeType || "video/webm"
        });
        chunksRef.current = [];
        exportLockRef.current = null;
        restoreLiveCanvasSize();
        downloadBlob(blob, exportFilename(extension));
        recorderRef.current = null;
        setRecording(false);
      };
      recorder.start(250);
      recorderRef.current = recorder;
      setRecording(true);
      showToast(`Recording ${size.width}\xD7${size.height}`);
    } catch {
      exportLockRef.current = null;
      restoreLiveCanvasSize();
      showToast("Recording is not supported here");
    }
  }
  function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 4e3);
  }
  function exportFilename(extension) {
    const project = cleanName(sceneRef.current.name, "vaudio-2").replace(/[^\w\-]+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "") || "vaudio-2";
    const now = /* @__PURE__ */ new Date();
    const pad = (n2) => String(n2).padStart(2, "0");
    const stamp = [
      now.getFullYear(),
      pad(now.getMonth() + 1),
      pad(now.getDate()),
      "-",
      pad(now.getHours()),
      pad(now.getMinutes()),
      pad(now.getSeconds())
    ].join("");
    return `${project}-${stamp}.${extension}`;
  }
  function exportPng() {
    const engine = engineRef.current;
    const canvas = canvasRef.current;
    if (!engine || !canvas) return;
    const size = applyExportCanvasSize(exportResRef.current, 3);
    if (!size) return;
    engine.render(buildFrame());
    canvas.toBlob((blob) => {
      exportLockRef.current = null;
      restoreLiveCanvasSize();
      if (blob) {
        downloadBlob(blob, exportFilename("png"));
        showToast(`Exported ${size.width}\xD7${size.height}`);
      } else showToast("Export failed");
    }, "image/png");
  }
  function captureThumb() {
    const canvas = canvasRef.current;
    if (!canvas || !canvas.width) return "";
    try {
      engineRef.current?.render(buildFrame());
      const scale = 220 / Math.max(canvas.width, canvas.height);
      const thumbCanvas = document.createElement("canvas");
      thumbCanvas.width = Math.max(1, Math.round(canvas.width * scale));
      thumbCanvas.height = Math.max(1, Math.round(canvas.height * scale));
      const context = thumbCanvas.getContext("2d");
      if (!context) return "";
      context.drawImage(
        canvas,
        0,
        0,
        thumbCanvas.width,
        thumbCanvas.height
      );
      const data = thumbCanvas.toDataURL("image/jpeg", 0.62);
      return data.length < 58e3 ? data : "";
    } catch {
      return "";
    }
  }
  async function saveToServer() {
    try {
      const result = await saveSceneMutation(
        serverSceneId,
        scene.name,
        encodeScene(scene),
        captureThumb()
      );
      setServerSceneId(result.id);
      showToast("Scene saved");
    } catch (cause) {
      showToast(cause instanceof Error ? cause.message : "Save failed");
    }
  }
  async function loadFromServer(id) {
    try {
      const result = await getSceneMutation(id);
      const loaded = decodeScene(result.data);
      loaded.name = cleanName(result.name, loaded.name);
      setScene(loaded);
      sceneRef.current = loaded;
      setSelectedId(null);
      setServerSceneId(id);
      setScenesOpen(false);
      engineRef.current?.clearFeedback();
      await hydrateSceneImages(loaded);
      const missing = loaded.layers.some(
        (layer) => !engineRef.current?.hasImage(layer.imageId)
      );
      if (missing)
        showToast(
          "Some media files are not on this device \u2014 showing placeholders"
        );
    } catch {
      showToast("Could not load that scene");
    }
  }
  async function toggleFullscreen() {
    const stage = stageRef.current;
    if (!stage) return;
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await stage.requestFullscreen();
    } catch {
      showToast("Fullscreen is not available");
    }
  }
  const selectionBox = T2(() => {
    if (!selected || stageMode !== "arrange") return null;
    const meta = imageInfo[selected.imageId];
    const { width, height } = stageSizeRef.current;
    if (width < 2) return null;
    const aspect = width / Math.max(1, height);
    const imageAspect = meta && meta.width > 0 ? meta.width / Math.max(1, meta.height) : 1;
    const fitHeight = Math.min(1, aspect / imageAspect);
    const boxWidth = fitHeight * imageAspect * selected.fx.scale * height;
    const boxHeight = fitHeight * selected.fx.scale * height;
    const centerX = (0.5 + selected.fx.x / aspect) * width;
    const centerY = (0.5 - selected.fx.y) * height;
    return {
      boxWidth,
      boxHeight,
      centerX,
      centerY,
      rotation: selected.fx.rotation
    };
  }, [selected, imageInfo, stageMode, scene]);
  const worldPanel = /* @__PURE__ */ u3(S, { children: [
    /* @__PURE__ */ u3(Section, { title: "World presets", accent: true, children: /* @__PURE__ */ u3("div", { class: "grid grid-cols-2 gap-1 px-3 py-1", children: WORLD_PRESETS.map((preset) => /* @__PURE__ */ u3(
      "button",
      {
        type: "button",
        onClick: () => {
          updateGlobal(preset.global);
          engineRef.current?.clearFeedback();
        },
        class: "flex items-center gap-1.5 border border-[var(--line)] bg-[var(--panel)] px-1.5 py-1 text-left font-mono text-[9px] uppercase tracking-wide text-[var(--mute)] hover:border-[var(--acid)]/60 hover:text-[var(--paper)]",
        children: [
          /* @__PURE__ */ u3("span", { class: "text-[var(--acid)]/70", children: preset.code }),
          /* @__PURE__ */ u3("span", { class: "truncate", children: preset.name })
        ]
      },
      preset.code
    )) }) }),
    /* @__PURE__ */ u3(Section, { title: "Background", children: [
      /* @__PURE__ */ u3(
        SegRow,
        {
          label: "Mode",
          options: BG_MODES,
          value: scene.global.bgMode,
          onChange: (index) => updateGlobal({ bgMode: index })
        }
      ),
      /* @__PURE__ */ u3("div", { class: "flex items-center gap-3 px-3 py-1 text-[9px] uppercase tracking-[0.14em] text-[var(--mute)]", children: [
        /* @__PURE__ */ u3("label", { class: "flex items-center gap-1.5", children: [
          "A",
          /* @__PURE__ */ u3(
            "input",
            {
              type: "color",
              value: scene.global.bgA,
              onInput: (event) => updateGlobal({
                bgA: event.currentTarget.value
              })
            }
          )
        ] }),
        /* @__PURE__ */ u3("label", { class: "flex items-center gap-1.5", children: [
          "B",
          /* @__PURE__ */ u3(
            "input",
            {
              type: "color",
              value: scene.global.bgB,
              onInput: (event) => updateGlobal({
                bgB: event.currentTarget.value
              })
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ u3(Section, { title: "Space", children: [
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Fluid warp",
          value: scene.global.warp,
          def: 0,
          onChange: (value) => updateGlobal({ warp: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Swirl",
          value: scene.global.swirl,
          def: 0,
          onChange: (value) => updateGlobal({ swirl: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Ripples",
          value: scene.global.ripple,
          def: 0,
          onChange: (value) => updateGlobal({ ripple: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Tunnel zoom",
          value: scene.global.zoom,
          def: 0,
          onChange: (value) => updateGlobal({ zoom: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Kaleidoscope",
          value: scene.global.kaleido,
          def: 0,
          onChange: (value) => updateGlobal({ kaleido: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Mirror fold",
          value: scene.global.mirror,
          def: 0,
          onChange: (value) => updateGlobal({ mirror: value })
        }
      )
    ] }),
    /* @__PURE__ */ u3(Section, { title: "Feedback", children: [
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Feedback",
          value: scene.global.feedback,
          def: 0,
          onChange: (value) => updateGlobal({ feedback: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Trail length",
          value: scene.global.trails,
          def: 0.6,
          onChange: (value) => updateGlobal({ trails: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Echo zoom",
          value: scene.global.fbZoom,
          min: -1,
          max: 1,
          def: 0,
          format: (v3) => v3.toFixed(2),
          onChange: (value) => updateGlobal({ fbZoom: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Echo spin",
          value: scene.global.fbRotate,
          min: -1,
          max: 1,
          def: 0,
          format: (v3) => v3.toFixed(2),
          onChange: (value) => updateGlobal({ fbRotate: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Echo hue",
          value: scene.global.fbHue,
          def: 0,
          onChange: (value) => updateGlobal({ fbHue: value })
        }
      )
    ] }),
    /* @__PURE__ */ u3(Section, { title: "World color", children: [
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Prism split",
          value: scene.global.chroma,
          def: 0,
          onChange: (value) => updateGlobal({ chroma: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Hue orbit",
          value: scene.global.hueOrbit,
          def: 0,
          onChange: (value) => updateGlobal({ hueOrbit: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Saturation",
          value: scene.global.saturation,
          max: 2,
          def: 1,
          format: formatX,
          onChange: (value) => updateGlobal({ saturation: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Contrast",
          value: scene.global.contrast,
          max: 2,
          def: 1,
          format: formatX,
          onChange: (value) => updateGlobal({ contrast: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Solarize",
          value: scene.global.solarize,
          def: 0,
          onChange: (value) => updateGlobal({ solarize: value })
        }
      )
    ] }),
    /* @__PURE__ */ u3(Section, { title: "Signal", children: [
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Grain",
          value: scene.global.grain,
          def: 0,
          onChange: (value) => updateGlobal({ grain: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Scanlines",
          value: scene.global.scanlines,
          def: 0,
          onChange: (value) => updateGlobal({ scanlines: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Vignette",
          value: scene.global.vignette,
          def: 0.22,
          onChange: (value) => updateGlobal({ vignette: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Strobe",
          value: scene.global.strobe,
          def: 0,
          onChange: (value) => updateGlobal({ strobe: value })
        }
      )
    ] }),
    /* @__PURE__ */ u3(Section, { title: "Motion & audio", children: [
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Time speed",
          value: scene.global.speed,
          max: 2,
          def: 1,
          format: formatX,
          onChange: (value) => updateGlobal({ speed: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Audio react",
          value: scene.global.audioReact,
          def: 0,
          onChange: (value) => updateGlobal({ audioReact: value })
        }
      )
    ] }),
    /* @__PURE__ */ u3(Section, { title: "Cursor (play mode)", children: [
      /* @__PURE__ */ u3(
        SegRow,
        {
          label: "Field",
          options: POINTER_MODES,
          value: scene.global.pointerMode,
          onChange: (index) => updateGlobal({ pointerMode: index })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Force",
          value: scene.global.pointerForce,
          def: 0.6,
          onChange: (value) => updateGlobal({ pointerForce: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Field size",
          value: scene.global.pointerSize,
          min: 0.02,
          def: 0.35,
          onChange: (value) => updateGlobal({ pointerSize: value })
        }
      )
    ] })
  ] });
  const layerPanel = selected ? /* @__PURE__ */ u3(S, { children: [
    /* @__PURE__ */ u3(
      Section,
      {
        title: `Layer \xB7 ${selected.name}`,
        accent: true,
        actions: /* @__PURE__ */ u3(S, { children: [
          /* @__PURE__ */ u3(
            "button",
            {
              type: "button",
              title: "Shuffle layer FX",
              class: "text-[var(--mute)] hover:text-[var(--acid)]",
              onClick: () => replaceLayerFx(
                selected.id,
                randomLayerFx(selected.fx)
              ),
              children: /* @__PURE__ */ u3(IDice, { class: "h-3.5 w-3.5" })
            }
          ),
          /* @__PURE__ */ u3(
            "button",
            {
              type: "button",
              title: "Reset layer FX",
              class: "font-mono text-[9px] uppercase text-[var(--mute)] hover:text-[var(--paper)]",
              onClick: () => replaceLayerFx(
                selected.id,
                resetLayerFxEffects(selected.fx)
              ),
              children: "reset"
            }
          )
        ] }),
        children: [
          /* @__PURE__ */ u3("div", { class: "px-3 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--mute)]", children: [
            mediaKindLabel(selected.mediaKind),
            imageInfo[selected.imageId] && !imageInfo[selected.imageId].missing && ` \xB7 ${imageInfo[selected.imageId].width}\xD7${imageInfo[selected.imageId].height}`,
            imageInfo[selected.imageId]?.missing ? " \xB7 missing on device" : ""
          ] }),
          /* @__PURE__ */ u3("div", { class: "px-3 py-[5px]", children: [
            /* @__PURE__ */ u3("div", { class: "mb-1 text-[9px] uppercase tracking-[0.14em] text-[var(--mute)]", children: "Blend" }),
            /* @__PURE__ */ u3(
              "select",
              {
                class: "h-6 w-full border border-[var(--line)] bg-[var(--panel-2)] px-1 font-mono text-[10px] uppercase text-[var(--paper)] outline-none focus:border-[var(--acid)]",
                value: selected.fx.blend,
                onChange: (event) => updateLayerFx(selected.id, {
                  blend: event.currentTarget.value
                }),
                children: BLEND_MODES.map((mode) => /* @__PURE__ */ u3("option", { value: mode, children: mode }, mode))
              }
            )
          ] }),
          /* @__PURE__ */ u3(
            Slider,
            {
              label: "Opacity",
              value: selected.fx.opacity,
              def: 1,
              onChange: (value) => updateLayerFx(selected.id, { opacity: value })
            }
          ),
          /* @__PURE__ */ u3(
            SegRow,
            {
              label: "Canvas fill",
              options: TILE_MODES,
              value: selected.fx.tile,
              onChange: (index) => updateLayerFx(selected.id, { tile: index })
            }
          ),
          /* @__PURE__ */ u3(
            Slider,
            {
              label: "Scale",
              value: selected.fx.scale,
              min: 0.05,
              max: 6,
              def: 1,
              format: formatX,
              onChange: (value) => updateLayerFx(selected.id, { scale: value })
            }
          ),
          /* @__PURE__ */ u3(
            Slider,
            {
              label: "Rotation",
              value: selected.fx.rotation,
              min: -180,
              max: 180,
              def: 0,
              format: formatDeg,
              onChange: (value) => updateLayerFx(selected.id, { rotation: value })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ u3(Section, { title: "Distort", children: [
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Fluid warp",
          value: selected.fx.warp,
          def: 0,
          onChange: (value) => updateLayerFx(selected.id, { warp: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Swirl",
          value: selected.fx.swirl,
          def: 0,
          onChange: (value) => updateLayerFx(selected.id, { swirl: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Ripples",
          value: selected.fx.ripple,
          def: 0,
          onChange: (value) => updateLayerFx(selected.id, { ripple: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Kaleidoscope",
          value: selected.fx.kaleido,
          def: 0,
          onChange: (value) => updateLayerFx(selected.id, { kaleido: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Pixelate",
          value: selected.fx.pixelate,
          def: 0,
          onChange: (value) => updateLayerFx(selected.id, { pixelate: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Lens",
          value: selected.fx.bulge,
          min: -1,
          max: 1,
          def: 0,
          format: (v3) => v3.toFixed(2),
          onChange: (value) => updateLayerFx(selected.id, { bulge: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Mirror fold",
          value: selected.fx.mirror,
          def: 0,
          onChange: (value) => updateLayerFx(selected.id, { mirror: value })
        }
      )
    ] }),
    /* @__PURE__ */ u3(Section, { title: "Layer color", children: [
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Hue",
          value: selected.fx.hue,
          def: 0,
          onChange: (value) => updateLayerFx(selected.id, { hue: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Saturation",
          value: selected.fx.saturation,
          max: 2,
          def: 1,
          format: formatX,
          onChange: (value) => updateLayerFx(selected.id, { saturation: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Contrast",
          value: selected.fx.contrast,
          max: 2,
          def: 1,
          format: formatX,
          onChange: (value) => updateLayerFx(selected.id, { contrast: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Brightness",
          value: selected.fx.brightness,
          max: 2,
          def: 1,
          format: formatX,
          onChange: (value) => updateLayerFx(selected.id, { brightness: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Invert",
          value: selected.fx.invert,
          def: 0,
          onChange: (value) => updateLayerFx(selected.id, { invert: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Posterize",
          value: selected.fx.posterize,
          def: 0,
          onChange: (value) => updateLayerFx(selected.id, { posterize: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Prism split",
          value: selected.fx.chroma,
          def: 0,
          onChange: (value) => updateLayerFx(selected.id, { chroma: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Neon edges",
          value: selected.fx.edges,
          def: 0,
          onChange: (value) => updateLayerFx(selected.id, { edges: value })
        }
      ),
      /* @__PURE__ */ u3("div", { class: "flex items-center gap-2 px-3 py-[5px]", children: [
        /* @__PURE__ */ u3(
          "input",
          {
            type: "color",
            value: selected.fx.tintColor,
            onInput: (event) => updateLayerFx(selected.id, {
              tintColor: event.currentTarget.value
            })
          }
        ),
        /* @__PURE__ */ u3("div", { class: "flex-1", children: /* @__PURE__ */ u3(
          Slider,
          {
            label: "Tint",
            value: selected.fx.tintAmount,
            def: 0,
            onChange: (value) => updateLayerFx(selected.id, {
              tintAmount: value
            })
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ u3(Section, { title: "Layer motion", children: [
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Spin",
          value: selected.fx.spin,
          min: -1,
          max: 1,
          def: 0,
          format: (v3) => v3.toFixed(2),
          onChange: (value) => updateLayerFx(selected.id, { spin: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Drift",
          value: selected.fx.drift,
          def: 0,
          onChange: (value) => updateLayerFx(selected.id, { drift: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Pulse",
          value: selected.fx.pulse,
          def: 0,
          onChange: (value) => updateLayerFx(selected.id, { pulse: value })
        }
      ),
      /* @__PURE__ */ u3(
        Slider,
        {
          label: "Shimmer",
          value: selected.fx.shimmer,
          def: 0,
          onChange: (value) => updateLayerFx(selected.id, { shimmer: value })
        }
      )
    ] })
  ] }) : /* @__PURE__ */ u3(S, {});
  if (engineError) {
    return /* @__PURE__ */ u3("div", { class: "grid h-screen place-items-center bg-[var(--void)] p-8 text-center", children: /* @__PURE__ */ u3("div", { children: [
      /* @__PURE__ */ u3("p", { class: "mb-2 font-mono text-sm text-[#b86a74]", children: engineError }),
      /* @__PURE__ */ u3("p", { class: "font-mono text-xs text-[var(--mute)]", children: "vaudio-2 needs WebGL to run." })
    ] }) });
  }
  return /* @__PURE__ */ u3("div", { class: "relative flex h-screen w-screen flex-col overflow-hidden bg-[var(--void)] text-[var(--paper)] select-none", children: [
    /* @__PURE__ */ u3("style", { children: GLOBAL_CSS }),
    /* @__PURE__ */ u3(
      "div",
      {
        class: "pointer-events-none fixed inset-0 opacity-40",
        style: {
          background: "radial-gradient(circle at 14% -10%, rgba(232,230,224,.08), transparent 32%), radial-gradient(circle at 92% 20%, rgba(168,120,128,.06), transparent 28%)"
        }
      }
    ),
    !uiHidden && /* @__PURE__ */ u3("header", { class: "relative z-10 flex h-11 flex-shrink-0 items-center gap-1.5 border-b border-[var(--line)] bg-[var(--panel)] px-2.5", children: [
      /* @__PURE__ */ u3(
        "span",
        {
          class: "mr-1 text-[1.15rem] font-bold leading-none tracking-[-0.08em] text-[var(--acid)]",
          style: { fontFamily: '"Space Grotesk", sans-serif' },
          children: "vaudio-2"
        }
      ),
      /* @__PURE__ */ u3(
        "input",
        {
          class: "h-[26px] w-36 border border-transparent bg-transparent px-1.5 text-[12px] font-medium text-[var(--paper)] outline-none hover:border-[var(--line)] focus:border-[var(--acid)]/60",
          value: scene.name,
          onInput: (event) => setScene((previous) => ({
            ...previous,
            name: event.currentTarget.value
          })),
          onBlur: (event) => setScene((previous) => ({
            ...previous,
            name: cleanName(
              event.currentTarget.value,
              "Untitled"
            )
          }))
        }
      ),
      /* @__PURE__ */ u3("span", { class: "mx-1 h-4 w-px bg-[var(--line)]" }),
      /* @__PURE__ */ u3(
        TopButton,
        {
          title: "Arrange layers (V)",
          active: stageMode === "arrange",
          onClick: () => setStageMode("arrange"),
          label: "Arrange",
          children: /* @__PURE__ */ u3(IMove, {})
        }
      ),
      /* @__PURE__ */ u3(
        TopButton,
        {
          title: "Play the canvas with your cursor (P)",
          active: stageMode === "play",
          onClick: () => setStageMode("play"),
          label: "Play",
          children: /* @__PURE__ */ u3(ISpark, {})
        }
      ),
      /* @__PURE__ */ u3("span", { class: "mx-1 h-4 w-px bg-[var(--line)]" }),
      /* @__PURE__ */ u3(
        TopButton,
        {
          title: "Randomize everything",
          onClick: () => {
            setScene((previous) => ({
              ...previous,
              global: randomGlobalFx(previous.global),
              layers: previous.layers.map((layer) => ({
                ...layer,
                fx: randomLayerFx(layer.fx)
              }))
            }));
            engineRef.current?.clearFeedback();
          },
          label: "Chaos",
          children: /* @__PURE__ */ u3(IDice, {})
        }
      ),
      /* @__PURE__ */ u3(
        TopButton,
        {
          title: "Nudge the world somewhere new",
          onClick: () => updateGlobal(mutateGlobalFx(scene.global)),
          label: "Mutate",
          children: /* @__PURE__ */ u3(IWand, {})
        }
      ),
      /* @__PURE__ */ u3(
        TopButton,
        {
          title: frozen ? "Resume time (Space)" : "Freeze time (Space)",
          active: frozen,
          onClick: () => setFrozen((previous) => !previous),
          children: frozen ? /* @__PURE__ */ u3(IPlay, {}) : /* @__PURE__ */ u3(IPause, {})
        }
      ),
      /* @__PURE__ */ u3("span", { class: "flex-1" }),
      /* @__PURE__ */ u3(
        TopButton,
        {
          title: "Save scene to your library",
          onClick: () => void saveToServer(),
          label: "Save",
          children: /* @__PURE__ */ u3(ISave, {})
        }
      ),
      /* @__PURE__ */ u3("div", { class: "relative", children: [
        /* @__PURE__ */ u3(
          TopButton,
          {
            title: "Your saved scenes",
            active: scenesOpen,
            onClick: () => setScenesOpen((previous) => !previous),
            label: "Scenes",
            children: /* @__PURE__ */ u3(IFolder, {})
          }
        ),
        scenesOpen && /* @__PURE__ */ u3(S, { children: [
          /* @__PURE__ */ u3(
            "div",
            {
              class: "fixed inset-0 z-30",
              onClick: () => setScenesOpen(false)
            }
          ),
          /* @__PURE__ */ u3("div", { class: "pop absolute right-0 top-8 z-40 max-h-[60vh] w-64 overflow-y-auto border border-[var(--line)] bg-[var(--panel-2)] p-1.5 shadow-2xl", children: [
            sceneList.length === 0 && /* @__PURE__ */ u3("p", { class: "p-3 font-mono text-[10px] text-[var(--mute)]", children: [
              "No saved scenes yet.",
              auth2.isGuest ? " (Guest sessions save locally per deploy.)" : ""
            ] }),
            sceneList.map((meta) => /* @__PURE__ */ u3(
              "div",
              {
                class: "group flex items-center gap-2 p-1.5 hover:bg-[var(--line)]",
                children: [
                  /* @__PURE__ */ u3(
                    "button",
                    {
                      type: "button",
                      class: "flex min-w-0 flex-1 items-center gap-2 text-left",
                      onClick: () => void loadFromServer(meta.id),
                      children: [
                        /* @__PURE__ */ u3("span", { class: "grid h-9 w-14 flex-shrink-0 place-items-center overflow-hidden border border-[var(--line)] bg-black", children: meta.thumb ? /* @__PURE__ */ u3(
                          "img",
                          {
                            src: meta.thumb,
                            class: "h-full w-full object-cover"
                          }
                        ) : /* @__PURE__ */ u3("span", { class: "font-mono text-[8px] text-[var(--mute)]", children: "vaudio-2" }) }),
                        /* @__PURE__ */ u3("span", { class: "min-w-0", children: [
                          /* @__PURE__ */ u3("span", { class: "block truncate text-[11.5px] text-[var(--paper)]", children: meta.name }),
                          /* @__PURE__ */ u3("span", { class: "block font-mono text-[8.5px] text-[var(--mute)]", children: new Date(
                            meta.updatedAt
                          ).toLocaleString() })
                        ] })
                      ]
                    }
                  ),
                  /* @__PURE__ */ u3(
                    "button",
                    {
                      type: "button",
                      title: "Delete scene",
                      class: "text-[var(--mute)] opacity-0 hover:text-[#b86a74] group-hover:opacity-100",
                      onClick: () => {
                        void deleteSceneMutation(
                          meta.id
                        ).catch(
                          () => showToast(
                            "Delete failed"
                          )
                        );
                        if (meta.id === serverSceneId)
                          setServerSceneId("");
                      },
                      children: /* @__PURE__ */ u3(ITrash, { class: "h-3.5 w-3.5" })
                    }
                  )
                ]
              },
              meta.id
            ))
          ] })
        ] })
      ] }),
      /* @__PURE__ */ u3("span", { class: "mx-1 h-4 w-px bg-[var(--line)]" }),
      /* @__PURE__ */ u3(
        TopButton,
        {
          title: micActive ? "Stop microphone" : "Audio-react from your microphone",
          active: micActive,
          onClick: () => void toggleMic(),
          children: /* @__PURE__ */ u3(IMic, {})
        }
      ),
      /* @__PURE__ */ u3(
        TopButton,
        {
          title: recording ? "Stop recording" : "Record the canvas to video",
          danger: recording,
          onClick: toggleRecording,
          children: recording ? /* @__PURE__ */ u3("span", { class: "rec-dot inline-block h-2.5 w-2.5 rounded-full bg-[#c45b6a]" }) : /* @__PURE__ */ u3("span", { class: "inline-block h-2.5 w-2.5 rounded-full border-[1.5px] border-current" })
        }
      ),
      /* @__PURE__ */ u3(
        "select",
        {
          class: "fx-res",
          title: "Export / recording resolution (keeps stage aspect)",
          value: exportRes,
          disabled: recording,
          onChange: (event) => {
            const value = event.target.value;
            if (EXPORT_RESOLUTIONS.some(
              (item) => item.id === value
            )) {
              setExportRes(value);
            }
          },
          children: EXPORT_RESOLUTIONS.map((item) => /* @__PURE__ */ u3("option", { value: item.id, children: item.label }, item.id))
        }
      ),
      /* @__PURE__ */ u3(
        TopButton,
        {
          title: `Export PNG at ${EXPORT_RESOLUTIONS.find((item) => item.id === exportRes)?.label ?? "selected"} resolution`,
          onClick: exportPng,
          children: /* @__PURE__ */ u3(IDownload, {})
        }
      ),
      /* @__PURE__ */ u3(
        TopButton,
        {
          title: "Instrument manual (?)",
          active: helpOpen,
          onClick: () => setHelpOpen((previous) => !previous),
          children: /* @__PURE__ */ u3("span", { class: "grid h-[15px] w-[15px] place-items-center font-mono text-[11px] font-bold leading-none", children: "?" })
        }
      ),
      /* @__PURE__ */ u3(
        TopButton,
        {
          title: "Fullscreen",
          active: fullscreen,
          onClick: () => void toggleFullscreen(),
          children: /* @__PURE__ */ u3(IExpand, {})
        }
      ),
      /* @__PURE__ */ u3(
        TopButton,
        {
          title: "Hide interface (Tab)",
          onClick: () => setUiHidden(true),
          children: /* @__PURE__ */ u3(IPanel, {})
        }
      )
    ] }),
    /* @__PURE__ */ u3("div", { class: "relative z-10 flex min-h-0 flex-1", children: [
      !uiHidden && /* @__PURE__ */ u3("aside", { class: "flex w-[212px] flex-shrink-0 flex-col border-r border-[var(--line)] bg-[var(--panel)]", children: [
        /* @__PURE__ */ u3("header", { class: "flex h-8 flex-shrink-0 items-center gap-2 border-b border-[var(--line)] px-3", children: [
          /* @__PURE__ */ u3("span", { class: "text-[9px] font-medium uppercase tracking-[0.14em] text-[var(--mute)]", children: "Layers" }),
          /* @__PURE__ */ u3("span", { class: "font-mono text-[9px] text-[var(--mute)]", children: [
            scene.layers.length,
            "/",
            MAX_LAYERS
          ] }),
          /* @__PURE__ */ u3("span", { class: "flex-1" }),
          /* @__PURE__ */ u3(
            "button",
            {
              type: "button",
              title: "Import files",
              class: "text-[var(--mute)] hover:text-[var(--acid)]",
              onClick: () => fileRef.current?.click(),
              children: /* @__PURE__ */ u3(IPlus, {})
            }
          )
        ] }),
        /* @__PURE__ */ u3("div", { class: "min-h-0 flex-1 overflow-y-auto py-1", children: [
          scene.layers.length === 0 && /* @__PURE__ */ u3(
            "button",
            {
              type: "button",
              class: "mx-3 my-3 block w-[calc(100%-24px)] border border-dashed border-[var(--line)] px-3 py-6 text-center font-mono text-[10px] leading-relaxed text-[var(--mute)] hover:border-[var(--acid)]/50 hover:text-[var(--mute)]",
              onClick: () => fileRef.current?.click(),
              children: "Drop, paste, or click to import anything"
            }
          ),
          scene.layers.slice().reverse().map((layer) => {
            const meta = imageInfo[layer.imageId];
            const isSelected = layer.id === selectedId;
            return /* @__PURE__ */ u3(
              "div",
              {
                class: `group flex cursor-pointer items-center gap-2 px-2 py-1.5 ${isSelected ? "bg-[var(--acid)]/10" : "hover:bg-[var(--line)]"} ${layer.fx.visible ? "" : "opacity-45"}`,
                onClick: () => setSelectedId(layer.id),
                children: [
                  /* @__PURE__ */ u3(
                    "button",
                    {
                      type: "button",
                      title: layer.fx.visible ? "Hide" : "Show",
                      class: "flex-shrink-0 text-[var(--mute)] hover:text-[var(--paper)]",
                      onClick: (event) => {
                        event.stopPropagation();
                        updateLayerFx(layer.id, {
                          visible: !layer.fx.visible
                        });
                      },
                      children: layer.fx.visible ? /* @__PURE__ */ u3(IEye, { class: "h-3.5 w-3.5" }) : /* @__PURE__ */ u3(IEyeOff, { class: "h-3.5 w-3.5" })
                    }
                  ),
                  /* @__PURE__ */ u3(
                    "span",
                    {
                      class: `grid h-8 w-8 flex-shrink-0 place-items-center overflow-hidden border ${isSelected ? "border-[var(--acid)]/60" : "border-[var(--line)]"} bg-black`,
                      children: meta?.thumb ? /* @__PURE__ */ u3(
                        "img",
                        {
                          src: meta.thumb,
                          class: "h-full w-full object-cover"
                        }
                      ) : /* @__PURE__ */ u3("span", { class: "font-mono text-[8px] text-[#b86a74]", children: meta?.missing ? "?" : "\u2026" })
                    }
                  ),
                  /* @__PURE__ */ u3("span", { class: "min-w-0 flex-1 truncate text-[11px] text-[var(--paper)]", children: layer.name }),
                  layer.mediaKind !== "image" && /* @__PURE__ */ u3("span", { class: "flex-shrink-0 font-mono text-[8px] uppercase tracking-wider text-[var(--mute)]", children: layer.mediaKind === "video" ? "vid" : layer.mediaKind === "audio" ? "aud" : "dat" }),
                  /* @__PURE__ */ u3("span", { class: "hidden flex-shrink-0 items-center gap-0.5 group-hover:flex", children: [
                    /* @__PURE__ */ u3(
                      "button",
                      {
                        type: "button",
                        title: "Raise",
                        class: "text-[var(--mute)] hover:text-[var(--paper)]",
                        onClick: (event) => {
                          event.stopPropagation();
                          moveLayer(layer.id, 1);
                        },
                        children: /* @__PURE__ */ u3(IUp, { class: "h-3.5 w-3.5" })
                      }
                    ),
                    /* @__PURE__ */ u3(
                      "button",
                      {
                        type: "button",
                        title: "Lower",
                        class: "text-[var(--mute)] hover:text-[var(--paper)]",
                        onClick: (event) => {
                          event.stopPropagation();
                          moveLayer(layer.id, -1);
                        },
                        children: /* @__PURE__ */ u3(IDown, { class: "h-3.5 w-3.5" })
                      }
                    ),
                    /* @__PURE__ */ u3(
                      "button",
                      {
                        type: "button",
                        title: "Duplicate",
                        class: "text-[var(--mute)] hover:text-[var(--paper)]",
                        onClick: (event) => {
                          event.stopPropagation();
                          duplicateLayer(
                            layer.id
                          );
                        },
                        children: /* @__PURE__ */ u3(ICopy, { class: "h-3.5 w-3.5" })
                      }
                    ),
                    /* @__PURE__ */ u3(
                      "button",
                      {
                        type: "button",
                        title: "Delete",
                        class: "text-[var(--mute)] hover:text-[#b86a74]",
                        onClick: (event) => {
                          event.stopPropagation();
                          removeLayer(layer.id);
                        },
                        children: /* @__PURE__ */ u3(ITrash, { class: "h-3.5 w-3.5" })
                      }
                    )
                  ] })
                ]
              },
              layer.id
            );
          })
        ] }),
        /* @__PURE__ */ u3("footer", { class: "border-t border-[var(--line)] p-2", children: /* @__PURE__ */ u3("p", { class: "font-mono text-[8.5px] leading-relaxed text-[var(--mute)]", children: "V arrange \xB7 P play \xB7 Space freeze \xB7 Tab hide UI \xB7 \u2318Z undo \xB7 ? manual \xB7 drag / wheel / \u21E7wheel to move, scale, rotate" }) })
      ] }),
      /* @__PURE__ */ u3(
        "div",
        {
          ref: stageRef,
          class: `relative min-w-0 flex-1 overflow-hidden bg-black ${stageMode === "play" ? "cursor-crosshair" : "cursor-default"}`,
          onPointerDown: onStagePointerDown,
          onPointerMove: onStagePointerMove,
          onPointerUp: onStagePointerUp,
          onPointerLeave: onStagePointerLeave,
          onContextMenu: (event) => {
            if (stageModeRef.current === "play")
              event.preventDefault();
          },
          onDragOver: (event) => {
            event.preventDefault();
            setDragOver(true);
          },
          onDragLeave: () => setDragOver(false),
          onDrop: (event) => {
            event.preventDefault();
            setDragOver(false);
            if (event.dataTransfer?.files.length)
              void importFiles(event.dataTransfer.files);
          },
          children: [
            /* @__PURE__ */ u3("canvas", { ref: canvasRef, class: "block h-full w-full" }),
            selectionBox && /* @__PURE__ */ u3(
              "div",
              {
                class: "pointer-events-none absolute border border-[var(--acid)]/70",
                style: {
                  left: `${selectionBox.centerX - selectionBox.boxWidth / 2}px`,
                  top: `${selectionBox.centerY - selectionBox.boxHeight / 2}px`,
                  width: `${selectionBox.boxWidth}px`,
                  height: `${selectionBox.boxHeight}px`,
                  transform: `rotate(${selectionBox.rotation}deg)`,
                  boxShadow: "0 0 0 1px rgba(0,0,0,.6)"
                }
              }
            ),
            scene.layers.length === 0 && /* @__PURE__ */ u3("div", { class: "pointer-events-none absolute inset-0 grid place-items-center", children: /* @__PURE__ */ u3("p", { class: "border border-dashed border-[var(--line-hot)] bg-black/40 px-6 py-4 text-center font-mono text-[11px] leading-relaxed text-[var(--mute)]", children: "Drop images, video, audio, or any file" }) }),
            dragOver && /* @__PURE__ */ u3("div", { class: "pointer-events-none absolute inset-0 z-20 grid place-items-center bg-black/60", children: /* @__PURE__ */ u3("p", { class: "border border-dashed border-[var(--acid)] px-8 py-5 font-mono text-[11px] uppercase tracking-widest text-[var(--acid)]", children: "Release to add layers" }) }),
            stageMode === "play" && !uiHidden && /* @__PURE__ */ u3("div", { class: "pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 border border-[var(--line)] bg-black/60 px-3 py-1 font-mono text-[9px] uppercase tracking-widest text-[var(--mute)]", children: [
              "Play mode \u2014 tap, drag & play the keys \xB7 field:",
              " ",
              POINTER_MODES[Math.round(scene.global.pointerMode)],
              " ",
              "\xB7 ? manual"
            ] }),
            recording && /* @__PURE__ */ u3("div", { class: "pointer-events-none absolute left-3 top-3 flex items-center gap-2 border border-[#c45b6a]/50 bg-black/60 px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest text-[#b86a74]", children: [
              /* @__PURE__ */ u3("span", { class: "rec-dot inline-block h-2 w-2 rounded-full bg-[#c45b6a]" }),
              " ",
              "Rec"
            ] }),
            uiHidden && /* @__PURE__ */ u3(
              "button",
              {
                type: "button",
                class: "absolute bottom-3 right-3 border border-[var(--line)] bg-black/60 px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-widest text-[var(--mute)] hover:text-[var(--paper)]",
                onClick: () => setUiHidden(false),
                children: "Show UI (Tab)"
              }
            )
          ]
        }
      ),
      !uiHidden && /* @__PURE__ */ u3("aside", { class: "w-[264px] flex-shrink-0 overflow-y-auto border-l border-[var(--line)] bg-[var(--panel)]", children: [
        layerPanel,
        worldPanel,
        /* @__PURE__ */ u3("div", { class: "p-3 font-mono text-[8.5px] leading-relaxed text-[var(--mute)]", children: "Double-click any slider to reset it. Feedback + tunnel zoom + a kaleidoscope is a good way to lose an afternoon." })
      ] })
    ] }),
    helpOpen && /* @__PURE__ */ u3(HelpModal, { onClose: () => setHelpOpen(false) }),
    toast && /* @__PURE__ */ u3("div", { class: "pop pointer-events-none fixed bottom-5 left-1/2 z-50 -translate-x-1/2 border border-[var(--line)] bg-[var(--panel-2)] px-4 py-2 font-mono text-[10.5px] text-[var(--paper)] shadow-2xl", children: toast }),
    /* @__PURE__ */ u3(
      "input",
      {
        ref: fileRef,
        type: "file",
        accept: "*/*",
        multiple: true,
        class: "hidden",
        onChange: (event) => {
          const input = event.currentTarget;
          if (input.files?.length) void importFiles(input.files);
          input.value = "";
        }
      }
    )
  ] });
}

// lakebed-source:__lakebed/client-entry.tsx
R(k(App, {}), document.getElementById("app"));
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2NvbnN0YW50cy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvdXRpbC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvb3B0aW9ucy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvY3JlYXRlLWVsZW1lbnQuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2NvbXBvbmVudC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvZGlmZi9wcm9wcy5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvY3JlYXRlLWNvbnRleHQuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2RpZmYvY2hpbGRyZW4uanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL2RpZmYvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3Qvc3JjL3JlbmRlci5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvY2xvbmUtZWxlbWVudC5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9zcmMvZGlmZi9jYXRjaC1lcnJvci5qcyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL2xha2ViZWQvc3JjL2NsaWVudC9pbnRlcm5hbC50cyIsICIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcml2YXRlL3Zhci9mb2xkZXJzL2dwL2RxZ3o2Y3RzNmg5NnJ4ZDVoaGt4dHlkdzAwMDBnbi9UL2N1cnNvci1zYW5kYm94LWNhY2hlLzM5MjMyYjFkMTMwMjI1OTMyZDEwN2I1OGMzY2RmNjQ1L25wbS9fbnB4LzNlYjhkM2VhYWY0ZWYxYjQvbm9kZV9tb2R1bGVzL3ByZWFjdC9ob29rcy9zcmMvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9sYWtlYmVkL3NyYy9jbGllbnQvdHJhbnNwb3J0LnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3ByaXZhdGUvdmFyL2ZvbGRlcnMvZ3AvZHFnejZjdHM2aDk2cnhkNWhoa3h0eWR3MDAwMGduL1QvY3Vyc29yLXNhbmRib3gtY2FjaGUvMzkyMzJiMWQxMzAyMjU5MzJkMTA3YjU4YzNjZGY2NDUvbnBtL19ucHgvM2ViOGQzZWFhZjRlZjFiNC9ub2RlX21vZHVsZXMvbGFrZWJlZC9zcmMvY2xpZW50L2F1dGgudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9sYWtlYmVkL3NyYy9jbGllbnQvcm91dGVyLnRzIiwgIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3ByaXZhdGUvdmFyL2ZvbGRlcnMvZ3AvZHFnejZjdHM2aDk2cnhkNWhoa3h0eWR3MDAwMGduL1QvY3Vyc29yLXNhbmRib3gtY2FjaGUvMzkyMzJiMWQxMzAyMjU5MzJkMTA3YjU4YzNjZGY2NDUvbnBtL19ucHgvM2ViOGQzZWFhZjRlZjFiNC9ub2RlX21vZHVsZXMvbGFrZWJlZC9zcmMvY2xpZW50L2hvb2tzLnRzIiwgImxha2ViZWQtc291cmNlOnNoYXJlZC90eXBlcy50cyIsICJsYWtlYmVkLXNvdXJjZTpzaGFyZWQvcHJlc2V0cy50cyIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvZW5naW5lLnRzIiwgImxha2ViZWQtc291cmNlOmNsaWVudC9tZWRpYS50cyIsICJsYWtlYmVkLXNvdXJjZTpjbGllbnQvc3RvcmUudHMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3QvanN4LXJ1bnRpbWUvc3JjL3V0aWxzLmpzIiwgIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3ByaXZhdGUvdmFyL2ZvbGRlcnMvZ3AvZHFnejZjdHM2aDk2cnhkNWhoa3h0eWR3MDAwMGduL1QvY3Vyc29yLXNhbmRib3gtY2FjaGUvMzkyMzJiMWQxMzAyMjU5MzJkMTA3YjU4YzNjZGY2NDUvbnBtL19ucHgvM2ViOGQzZWFhZjRlZjFiNC9ub2RlX21vZHVsZXMvcHJlYWN0L3NyYy9jb25zdGFudHMuanMiLCAiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9wcmVhY3QvanN4LXJ1bnRpbWUvc3JjL2luZGV4LmpzIiwgImxha2ViZWQtc291cmNlOmNsaWVudC9pbmRleC50c3giLCAibGFrZWJlZC1zb3VyY2U6X19sYWtlYmVkL2NsaWVudC1lbnRyeS50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKiBOb3JtYWwgaHlkcmF0aW9uIHRoYXQgYXR0YWNoZXMgdG8gYSBET00gdHJlZSBidXQgZG9lcyBub3QgZGlmZiBpdC4gKi9cbmV4cG9ydCBjb25zdCBNT0RFX0hZRFJBVEUgPSAxIDw8IDU7XG4vKiogU2lnbmlmaWVzIHRoaXMgVk5vZGUgc3VzcGVuZGVkIG9uIHRoZSBwcmV2aW91cyByZW5kZXIgKi9cbmV4cG9ydCBjb25zdCBNT0RFX1NVU1BFTkRFRCA9IDEgPDwgNztcbi8qKiBJbmRpY2F0ZXMgdGhhdCB0aGlzIG5vZGUgbmVlZHMgdG8gYmUgaW5zZXJ0ZWQgd2hpbGUgcGF0Y2hpbmcgY2hpbGRyZW4gKi9cbmV4cG9ydCBjb25zdCBJTlNFUlRfVk5PREUgPSAxIDw8IDI7XG4vKiogSW5kaWNhdGVzIGEgVk5vZGUgaGFzIGJlZW4gbWF0Y2hlZCB3aXRoIGFub3RoZXIgVk5vZGUgaW4gdGhlIGRpZmYgKi9cbmV4cG9ydCBjb25zdCBNQVRDSEVEID0gMSA8PCAxO1xuXG4vKiogUmVzZXQgYWxsIG1vZGUgZmxhZ3MgKi9cbmV4cG9ydCBjb25zdCBSRVNFVF9NT0RFID0gfihNT0RFX0hZRFJBVEUgfCBNT0RFX1NVU1BFTkRFRCk7XG5cbmV4cG9ydCBjb25zdCBTVkdfTkFNRVNQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcbmV4cG9ydCBjb25zdCBYSFRNTF9OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCc7XG5leHBvcnQgY29uc3QgTUFUSF9OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTCc7XG5cbmV4cG9ydCBjb25zdCBOVUxMID0gbnVsbDtcbmV4cG9ydCBjb25zdCBVTkRFRklORUQgPSB1bmRlZmluZWQ7XG5leHBvcnQgY29uc3QgRU1QVFlfT0JKID0gLyoqIEB0eXBlIHthbnl9ICovICh7fSk7XG5leHBvcnQgY29uc3QgRU1QVFlfQVJSID0gW107XG5leHBvcnQgY29uc3QgSVNfTk9OX0RJTUVOU0lPTkFMID1cblx0L2FjaXR8ZXgoPzpzfGd8bnxwfCQpfHJwaHxncmlkfG93c3xtbmN8bnR3fGluZVtjaF18em9vfF5vcmR8aXRlcmEvaTtcbiIsICJpbXBvcnQgeyBFTVBUWV9BUlIgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuLyoqXG4gKiBBc3NpZ24gcHJvcGVydGllcyBmcm9tIGBwcm9wc2AgdG8gYG9iamBcbiAqIEB0ZW1wbGF0ZSBPLCBQIFRoZSBvYmogYW5kIHByb3BzIHR5cGVzXG4gKiBAcGFyYW0ge099IG9iaiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyB0b1xuICogQHBhcmFtIHtQfSBwcm9wcyBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcmV0dXJucyB7TyAmIFB9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24ob2JqLCBwcm9wcykge1xuXHQvLyBAdHMtZXhwZWN0LWVycm9yIFdlIGNoYW5nZSB0aGUgdHlwZSBvZiBgb2JqYCB0byBiZSBgTyAmIFBgXG5cdGZvciAobGV0IGkgaW4gcHJvcHMpIG9ialtpXSA9IHByb3BzW2ldO1xuXHRyZXR1cm4gLyoqIEB0eXBlIHtPICYgUH0gKi8gKG9iaik7XG59XG5cbi8qKlxuICogUmVtb3ZlIGEgY2hpbGQgbm9kZSBmcm9tIGl0cyBwYXJlbnQgaWYgYXR0YWNoZWQuIFRoaXMgaXMgYSB3b3JrYXJvdW5kIGZvclxuICogSUUxMSB3aGljaCBkb2Vzbid0IHN1cHBvcnQgYEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZSgpYC4gVXNpbmcgdGhpcyBmdW5jdGlvblxuICogaXMgc21hbGxlciB0aGFuIGluY2x1ZGluZyBhIGRlZGljYXRlZCBwb2x5ZmlsbC5cbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2luZGV4JykuQ29udGFpbmVyTm9kZX0gbm9kZSBUaGUgbm9kZSB0byByZW1vdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZU5vZGUobm9kZSkge1xuXHRpZiAobm9kZSAmJiBub2RlLnBhcmVudE5vZGUpIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbn1cblxuZXhwb3J0IGNvbnN0IHNsaWNlID0gRU1QVFlfQVJSLnNsaWNlO1xuIiwgImltcG9ydCB7IF9jYXRjaEVycm9yIH0gZnJvbSAnLi9kaWZmL2NhdGNoLWVycm9yJztcblxuLyoqXG4gKiBUaGUgYG9wdGlvbmAgb2JqZWN0IGNhbiBwb3RlbnRpYWxseSBjb250YWluIGNhbGxiYWNrIGZ1bmN0aW9uc1xuICogdGhhdCBhcmUgY2FsbGVkIGR1cmluZyB2YXJpb3VzIHN0YWdlcyBvZiBvdXIgcmVuZGVyZXIuIFRoaXMgaXMgdGhlXG4gKiBmb3VuZGF0aW9uIG9uIHdoaWNoIGFsbCBvdXIgYWRkb25zIGxpa2UgYHByZWFjdC9kZWJ1Z2AsIGBwcmVhY3QvY29tcGF0YCxcbiAqIGFuZCBgcHJlYWN0L2hvb2tzYCBhcmUgYmFzZWQgb24uIFNlZSB0aGUgYE9wdGlvbnNgIHR5cGUgaW4gYGludGVybmFsLmQudHNgXG4gKiBmb3IgYSBmdWxsIGxpc3Qgb2YgYXZhaWxhYmxlIG9wdGlvbiBob29rcyAobW9zdCBlZGl0b3JzL0lERXMgYWxsb3cgeW91IHRvXG4gKiBjdHJsK2NsaWNrIG9yIGNtZCtjbGljayBvbiBtYWMgdGhlIHR5cGUgZGVmaW5pdGlvbiBiZWxvdykuXG4gKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuT3B0aW9uc31cbiAqL1xuY29uc3Qgb3B0aW9ucyA9IHtcblx0X2NhdGNoRXJyb3Jcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG9wdGlvbnM7XG4iLCAiaW1wb3J0IHsgc2xpY2UgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi9vcHRpb25zJztcbmltcG9ydCB7IE5VTEwsIFVOREVGSU5FRCB9IGZyb20gJy4vY29uc3RhbnRzJztcblxubGV0IHZub2RlSWQgPSAwO1xuXG4vKipcbiAqIENyZWF0ZSBhbiB2aXJ0dWFsIG5vZGUgKHVzZWQgZm9yIEpTWClcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGVbXCJ0eXBlXCJdfSB0eXBlIFRoZSBub2RlIG5hbWUgb3IgQ29tcG9uZW50IGNvbnN0cnVjdG9yIGZvciB0aGlzXG4gKiB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7b2JqZWN0IHwgbnVsbCB8IHVuZGVmaW5lZH0gW3Byb3BzXSBUaGUgcHJvcGVydGllcyBvZiB0aGUgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge0FycmF5PGltcG9ydCgnLicpLkNvbXBvbmVudENoaWxkcmVuPn0gW2NoaWxkcmVuXSBUaGUgY2hpbGRyZW4gb2YgdGhlXG4gKiB2aXJ0dWFsIG5vZGVcbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG5cdGxldCBub3JtYWxpemVkUHJvcHMgPSB7fSxcblx0XHRrZXksXG5cdFx0cmVmLFxuXHRcdGk7XG5cdGZvciAoaSBpbiBwcm9wcykge1xuXHRcdGlmIChpID09ICdrZXknKSBrZXkgPSBwcm9wc1tpXTtcblx0XHRlbHNlIGlmIChpID09ICdyZWYnKSByZWYgPSBwcm9wc1tpXTtcblx0XHRlbHNlIG5vcm1hbGl6ZWRQcm9wc1tpXSA9IHByb3BzW2ldO1xuXHR9XG5cblx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKSB7XG5cdFx0bm9ybWFsaXplZFByb3BzLmNoaWxkcmVuID1cblx0XHRcdGFyZ3VtZW50cy5sZW5ndGggPiAzID8gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpIDogY2hpbGRyZW47XG5cdH1cblxuXHQvLyBJZiBhIENvbXBvbmVudCBWTm9kZSwgY2hlY2sgZm9yIGFuZCBhcHBseSBkZWZhdWx0UHJvcHNcblx0Ly8gTm90ZTogdHlwZSBtYXkgYmUgdW5kZWZpbmVkIGluIGRldmVsb3BtZW50LCBtdXN0IG5ldmVyIGVycm9yIGhlcmUuXG5cdGlmICh0eXBlb2YgdHlwZSA9PSAnZnVuY3Rpb24nICYmIHR5cGUuZGVmYXVsdFByb3BzICE9IE5VTEwpIHtcblx0XHRmb3IgKGkgaW4gdHlwZS5kZWZhdWx0UHJvcHMpIHtcblx0XHRcdGlmIChub3JtYWxpemVkUHJvcHNbaV0gPT09IFVOREVGSU5FRCkge1xuXHRcdFx0XHRub3JtYWxpemVkUHJvcHNbaV0gPSB0eXBlLmRlZmF1bHRQcm9wc1tpXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gY3JlYXRlVk5vZGUodHlwZSwgbm9ybWFsaXplZFByb3BzLCBrZXksIHJlZiwgTlVMTCk7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgVk5vZGUgKHVzZWQgaW50ZXJuYWxseSBieSBQcmVhY3QpXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlW1widHlwZVwiXX0gdHlwZSBUaGUgbm9kZSBuYW1lIG9yIENvbXBvbmVudFxuICogQ29uc3RydWN0b3IgZm9yIHRoaXMgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge29iamVjdCB8IHN0cmluZyB8IG51bWJlciB8IG51bGx9IHByb3BzIFRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgdmlydHVhbCBub2RlLlxuICogSWYgdGhpcyB2aXJ0dWFsIG5vZGUgcmVwcmVzZW50cyBhIHRleHQgbm9kZSwgdGhpcyBpcyB0aGUgdGV4dCBvZiB0aGUgbm9kZSAoc3RyaW5nIG9yIG51bWJlcikuXG4gKiBAcGFyYW0ge3N0cmluZyB8IG51bWJlciB8IG51bGx9IGtleSBUaGUga2V5IGZvciB0aGlzIHZpcnR1YWwgbm9kZSwgdXNlZCB3aGVuXG4gKiBkaWZmaW5nIGl0IGFnYWluc3QgaXRzIGNoaWxkcmVuXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlW1wicmVmXCJdfSByZWYgVGhlIHJlZiBwcm9wZXJ0eSB0aGF0IHdpbGxcbiAqIHJlY2VpdmUgYSByZWZlcmVuY2UgdG8gaXRzIGNyZWF0ZWQgY2hpbGRcbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVZOb2RlKHR5cGUsIHByb3BzLCBrZXksIHJlZiwgb3JpZ2luYWwpIHtcblx0Ly8gVjggc2VlbXMgdG8gYmUgYmV0dGVyIGF0IGRldGVjdGluZyB0eXBlIHNoYXBlcyBpZiB0aGUgb2JqZWN0IGlzIGFsbG9jYXRlZCBmcm9tIHRoZSBzYW1lIGNhbGwgc2l0ZVxuXHQvLyBEbyBub3QgaW5saW5lIGludG8gY3JlYXRlRWxlbWVudCBhbmQgY29lcmNlVG9WTm9kZSFcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX0gKi9cblx0Y29uc3Qgdm5vZGUgPSB7XG5cdFx0dHlwZSxcblx0XHRwcm9wcyxcblx0XHRrZXksXG5cdFx0cmVmLFxuXHRcdF9jaGlsZHJlbjogTlVMTCxcblx0XHRfcGFyZW50OiBOVUxMLFxuXHRcdF9kZXB0aDogMCxcblx0XHRfZG9tOiBOVUxMLFxuXHRcdF9jb21wb25lbnQ6IE5VTEwsXG5cdFx0Y29uc3RydWN0b3I6IFVOREVGSU5FRCxcblx0XHRfb3JpZ2luYWw6IG9yaWdpbmFsID09IE5VTEwgPyArK3Zub2RlSWQgOiBvcmlnaW5hbCxcblx0XHRfaW5kZXg6IC0xLFxuXHRcdF9mbGFnczogMFxuXHR9O1xuXG5cdC8vIE9ubHkgaW52b2tlIHRoZSB2bm9kZSBob29rIGlmIHRoaXMgd2FzICpub3QqIGEgZGlyZWN0IGNvcHk6XG5cdGlmIChvcmlnaW5hbCA9PSBOVUxMICYmIG9wdGlvbnMudm5vZGUgIT0gTlVMTCkgb3B0aW9ucy52bm9kZSh2bm9kZSk7XG5cblx0cmV0dXJuIHZub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmVmKCkge1xuXHRyZXR1cm4geyBjdXJyZW50OiBOVUxMIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGcmFnbWVudChwcm9wcykge1xuXHRyZXR1cm4gcHJvcHMuY2hpbGRyZW47XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYSB0aGUgYXJndW1lbnQgaXMgYSB2YWxpZCBQcmVhY3QgVk5vZGUuXG4gKiBAcGFyYW0geyp9IHZub2RlXG4gKiBAcmV0dXJucyB7dm5vZGUgaXMgVk5vZGV9XG4gKi9cbmV4cG9ydCBjb25zdCBpc1ZhbGlkRWxlbWVudCA9IHZub2RlID0+XG5cdHZub2RlICE9IE5VTEwgJiYgdm5vZGUuY29uc3RydWN0b3IgPT09IFVOREVGSU5FRDtcbiIsICJpbXBvcnQgeyBhc3NpZ24gfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHsgZGlmZiwgY29tbWl0Um9vdCB9IGZyb20gJy4vZGlmZi9pbmRleCc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuL29wdGlvbnMnO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICcuL2NyZWF0ZS1lbGVtZW50JztcbmltcG9ydCB7IE1PREVfSFlEUkFURSwgTlVMTCB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBCYXNlIENvbXBvbmVudCBjbGFzcy4gUHJvdmlkZXMgYHNldFN0YXRlKClgIGFuZCBgZm9yY2VVcGRhdGUoKWAsIHdoaWNoXG4gKiB0cmlnZ2VyIHJlbmRlcmluZ1xuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIFRoZSBpbml0aWFsIGNvbXBvbmVudCBwcm9wc1xuICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgVGhlIGluaXRpYWwgY29udGV4dCBmcm9tIHBhcmVudCBjb21wb25lbnRzJ1xuICogZ2V0Q2hpbGRDb250ZXh0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBCYXNlQ29tcG9uZW50KHByb3BzLCBjb250ZXh0KSB7XG5cdHRoaXMucHJvcHMgPSBwcm9wcztcblx0dGhpcy5jb250ZXh0ID0gY29udGV4dDtcbn1cblxuLyoqXG4gKiBVcGRhdGUgY29tcG9uZW50IHN0YXRlIGFuZCBzY2hlZHVsZSBhIHJlLXJlbmRlci5cbiAqIEB0aGlzIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9XG4gKiBAcGFyYW0ge29iamVjdCB8ICgoczogb2JqZWN0LCBwOiBvYmplY3QpID0+IG9iamVjdCl9IHVwZGF0ZSBBIGhhc2ggb2Ygc3RhdGVcbiAqIHByb3BlcnRpZXMgdG8gdXBkYXRlIHdpdGggbmV3IHZhbHVlcyBvciBhIGZ1bmN0aW9uIHRoYXQgZ2l2ZW4gdGhlIGN1cnJlbnRcbiAqIHN0YXRlIGFuZCBwcm9wcyByZXR1cm5zIGEgbmV3IHBhcnRpYWwgc3RhdGVcbiAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gW2NhbGxiYWNrXSBBIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbmNlIGNvbXBvbmVudCBzdGF0ZSBpc1xuICogdXBkYXRlZFxuICovXG5CYXNlQ29tcG9uZW50LnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uICh1cGRhdGUsIGNhbGxiYWNrKSB7XG5cdC8vIG9ubHkgY2xvbmUgc3RhdGUgd2hlbiBjb3B5aW5nIHRvIG5leHRTdGF0ZSB0aGUgZmlyc3QgdGltZS5cblx0bGV0IHM7XG5cdGlmICh0aGlzLl9uZXh0U3RhdGUgIT0gTlVMTCAmJiB0aGlzLl9uZXh0U3RhdGUgIT0gdGhpcy5zdGF0ZSkge1xuXHRcdHMgPSB0aGlzLl9uZXh0U3RhdGU7XG5cdH0gZWxzZSB7XG5cdFx0cyA9IHRoaXMuX25leHRTdGF0ZSA9IGFzc2lnbih7fSwgdGhpcy5zdGF0ZSk7XG5cdH1cblxuXHRpZiAodHlwZW9mIHVwZGF0ZSA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0Ly8gU29tZSBsaWJyYXJpZXMgbGlrZSBgaW1tZXJgIG1hcmsgdGhlIGN1cnJlbnQgc3RhdGUgYXMgcmVhZG9ubHksXG5cdFx0Ly8gcHJldmVudGluZyB1cyBmcm9tIG11dGF0aW5nIGl0LCBzbyB3ZSBuZWVkIHRvIGNsb25lIGl0LiBTZWUgIzI3MTZcblx0XHR1cGRhdGUgPSB1cGRhdGUoYXNzaWduKHt9LCBzKSwgdGhpcy5wcm9wcyk7XG5cdH1cblxuXHRpZiAodXBkYXRlKSB7XG5cdFx0YXNzaWduKHMsIHVwZGF0ZSk7XG5cdH1cblxuXHQvLyBTa2lwIHVwZGF0ZSBpZiB1cGRhdGVyIGZ1bmN0aW9uIHJldHVybmVkIG51bGxcblx0aWYgKHVwZGF0ZSA9PSBOVUxMKSByZXR1cm47XG5cblx0aWYgKHRoaXMuX3Zub2RlKSB7XG5cdFx0aWYgKGNhbGxiYWNrKSB7XG5cdFx0XHR0aGlzLl9zdGF0ZUNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcblx0XHR9XG5cdFx0ZW5xdWV1ZVJlbmRlcih0aGlzKTtcblx0fVxufTtcblxuLyoqXG4gKiBJbW1lZGlhdGVseSBwZXJmb3JtIGEgc3luY2hyb25vdXMgcmUtcmVuZGVyIG9mIHRoZSBjb21wb25lbnRcbiAqIEB0aGlzIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9XG4gKiBAcGFyYW0geygpID0+IHZvaWR9IFtjYWxsYmFja10gQSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzXG4gKiByZS1yZW5kZXJlZFxuICovXG5CYXNlQ29tcG9uZW50LnByb3RvdHlwZS5mb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRpZiAodGhpcy5fdm5vZGUpIHtcblx0XHQvLyBTZXQgcmVuZGVyIG1vZGUgc28gdGhhdCB3ZSBjYW4gZGlmZmVyZW50aWF0ZSB3aGVyZSB0aGUgcmVuZGVyIHJlcXVlc3Rcblx0XHQvLyBpcyBjb21pbmcgZnJvbS4gV2UgbmVlZCB0aGlzIGJlY2F1c2UgZm9yY2VVcGRhdGUgc2hvdWxkIG5ldmVyIGNhbGxcblx0XHQvLyBzaG91bGRDb21wb25lbnRVcGRhdGVcblx0XHR0aGlzLl9mb3JjZSA9IHRydWU7XG5cdFx0aWYgKGNhbGxiYWNrKSB0aGlzLl9yZW5kZXJDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG5cdFx0ZW5xdWV1ZVJlbmRlcih0aGlzKTtcblx0fVxufTtcblxuLyoqXG4gKiBBY2NlcHRzIGBwcm9wc2AgYW5kIGBzdGF0ZWAsIGFuZCByZXR1cm5zIGEgbmV3IFZpcnR1YWwgRE9NIHRyZWUgdG8gYnVpbGQuXG4gKiBWaXJ0dWFsIERPTSBpcyBnZW5lcmFsbHkgY29uc3RydWN0ZWQgdmlhIFtKU1hdKGh0dHBzOi8vamFzb25mb3JtYXQuY29tL3d0Zi1pcy1qc3gpLlxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzIFByb3BzIChlZzogSlNYIGF0dHJpYnV0ZXMpIHJlY2VpdmVkIGZyb20gcGFyZW50XG4gKiBlbGVtZW50L2NvbXBvbmVudFxuICogQHBhcmFtIHtvYmplY3R9IHN0YXRlIFRoZSBjb21wb25lbnQncyBjdXJyZW50IHN0YXRlXG4gKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCBDb250ZXh0IG9iamVjdCwgYXMgcmV0dXJuZWQgYnkgdGhlIG5lYXJlc3RcbiAqIGFuY2VzdG9yJ3MgYGdldENoaWxkQ29udGV4dCgpYFxuICogQHJldHVybnMge0NvbXBvbmVudENoaWxkcmVuIHwgdm9pZH1cbiAqL1xuQmFzZUNvbXBvbmVudC5wcm90b3R5cGUucmVuZGVyID0gRnJhZ21lbnQ7XG5cbi8qKlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX0gdm5vZGVcbiAqIEBwYXJhbSB7bnVtYmVyIHwgbnVsbH0gW2NoaWxkSW5kZXhdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREb21TaWJsaW5nKHZub2RlLCBjaGlsZEluZGV4KSB7XG5cdGlmIChjaGlsZEluZGV4ID09IE5VTEwpIHtcblx0XHQvLyBVc2UgY2hpbGRJbmRleD09bnVsbCBhcyBhIHNpZ25hbCB0byByZXN1bWUgdGhlIHNlYXJjaCBmcm9tIHRoZSB2bm9kZSdzIHNpYmxpbmdcblx0XHRyZXR1cm4gdm5vZGUuX3BhcmVudFxuXHRcdFx0PyBnZXREb21TaWJsaW5nKHZub2RlLl9wYXJlbnQsIHZub2RlLl9pbmRleCArIDEpXG5cdFx0XHQ6IE5VTEw7XG5cdH1cblxuXHRsZXQgc2libGluZztcblx0Zm9yICg7IGNoaWxkSW5kZXggPCB2bm9kZS5fY2hpbGRyZW4ubGVuZ3RoOyBjaGlsZEluZGV4KyspIHtcblx0XHRzaWJsaW5nID0gdm5vZGUuX2NoaWxkcmVuW2NoaWxkSW5kZXhdO1xuXG5cdFx0aWYgKHNpYmxpbmcgIT0gTlVMTCAmJiBzaWJsaW5nLl9kb20gIT0gTlVMTCkge1xuXHRcdFx0Ly8gU2luY2UgdXBkYXRlUGFyZW50RG9tUG9pbnRlcnMga2VlcHMgX2RvbSBwb2ludGVyIGNvcnJlY3QsXG5cdFx0XHQvLyB3ZSBjYW4gcmVseSBvbiBfZG9tIHRvIHRlbGwgdXMgaWYgdGhpcyBzdWJ0cmVlIGNvbnRhaW5zIGFcblx0XHRcdC8vIHJlbmRlcmVkIERPTSBub2RlLCBhbmQgd2hhdCB0aGUgZmlyc3QgcmVuZGVyZWQgRE9NIG5vZGUgaXNcblx0XHRcdHJldHVybiBzaWJsaW5nLl9kb207XG5cdFx0fVxuXHR9XG5cblx0Ly8gSWYgd2UgZ2V0IGhlcmUsIHdlIGhhdmUgbm90IGZvdW5kIGEgRE9NIG5vZGUgaW4gdGhpcyB2bm9kZSdzIGNoaWxkcmVuLlxuXHQvLyBXZSBtdXN0IHJlc3VtZSBmcm9tIHRoaXMgdm5vZGUncyBzaWJsaW5nIChpbiBpdCdzIHBhcmVudCBfY2hpbGRyZW4gYXJyYXkpXG5cdC8vIE9ubHkgY2xpbWIgdXAgYW5kIHNlYXJjaCB0aGUgcGFyZW50IGlmIHdlIGFyZW4ndCBzZWFyY2hpbmcgdGhyb3VnaCBhIERPTVxuXHQvLyBWTm9kZSAobWVhbmluZyB3ZSByZWFjaGVkIHRoZSBET00gcGFyZW50IG9mIHRoZSBvcmlnaW5hbCB2bm9kZSB0aGF0IGJlZ2FuXG5cdC8vIHRoZSBzZWFyY2gpXG5cdHJldHVybiB0eXBlb2Ygdm5vZGUudHlwZSA9PSAnZnVuY3Rpb24nID8gZ2V0RG9tU2libGluZyh2bm9kZSkgOiBOVUxMO1xufVxuXG4vKipcbiAqIFRyaWdnZXIgaW4tcGxhY2UgcmUtcmVuZGVyaW5nIG9mIGEgY29tcG9uZW50LlxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9IGNvbXBvbmVudCBUaGUgY29tcG9uZW50IHRvIHJlcmVuZGVyXG4gKi9cbmZ1bmN0aW9uIHJlbmRlckNvbXBvbmVudChjb21wb25lbnQpIHtcblx0aWYgKGNvbXBvbmVudC5fcGFyZW50RG9tICYmIGNvbXBvbmVudC5fZGlydHkpIHtcblx0XHRsZXQgb2xkVk5vZGUgPSBjb21wb25lbnQuX3Zub2RlLFxuXHRcdFx0b2xkRG9tID0gb2xkVk5vZGUuX2RvbSxcblx0XHRcdGNvbW1pdFF1ZXVlID0gW10sXG5cdFx0XHRyZWZRdWV1ZSA9IFtdLFxuXHRcdFx0bmV3Vk5vZGUgPSBhc3NpZ24oe30sIG9sZFZOb2RlKTtcblx0XHRuZXdWTm9kZS5fb3JpZ2luYWwgPSBvbGRWTm9kZS5fb3JpZ2luYWwgKyAxO1xuXHRcdGlmIChvcHRpb25zLnZub2RlKSBvcHRpb25zLnZub2RlKG5ld1ZOb2RlKTtcblxuXHRcdGRpZmYoXG5cdFx0XHRjb21wb25lbnQuX3BhcmVudERvbSxcblx0XHRcdG5ld1ZOb2RlLFxuXHRcdFx0b2xkVk5vZGUsXG5cdFx0XHRjb21wb25lbnQuX2dsb2JhbENvbnRleHQsXG5cdFx0XHRjb21wb25lbnQuX3BhcmVudERvbS5uYW1lc3BhY2VVUkksXG5cdFx0XHRvbGRWTm9kZS5fZmxhZ3MgJiBNT0RFX0hZRFJBVEUgPyBbb2xkRG9tXSA6IE5VTEwsXG5cdFx0XHRjb21taXRRdWV1ZSxcblx0XHRcdG9sZERvbSA9PSBOVUxMID8gZ2V0RG9tU2libGluZyhvbGRWTm9kZSkgOiBvbGREb20sXG5cdFx0XHQhIShvbGRWTm9kZS5fZmxhZ3MgJiBNT0RFX0hZRFJBVEUpLFxuXHRcdFx0cmVmUXVldWVcblx0XHQpO1xuXG5cdFx0bmV3Vk5vZGUuX29yaWdpbmFsID0gb2xkVk5vZGUuX29yaWdpbmFsO1xuXHRcdG5ld1ZOb2RlLl9wYXJlbnQuX2NoaWxkcmVuW25ld1ZOb2RlLl9pbmRleF0gPSBuZXdWTm9kZTtcblx0XHRjb21taXRSb290KGNvbW1pdFF1ZXVlLCBuZXdWTm9kZSwgcmVmUXVldWUpO1xuXHRcdG9sZFZOb2RlLl9kb20gPSBvbGRWTm9kZS5fcGFyZW50ID0gbnVsbDtcblxuXHRcdGlmIChuZXdWTm9kZS5fZG9tICE9IG9sZERvbSkge1xuXHRcdFx0dXBkYXRlUGFyZW50RG9tUG9pbnRlcnMobmV3Vk5vZGUpO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9IHZub2RlXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZVBhcmVudERvbVBvaW50ZXJzKHZub2RlKSB7XG5cdGlmICgodm5vZGUgPSB2bm9kZS5fcGFyZW50KSAhPSBOVUxMICYmIHZub2RlLl9jb21wb25lbnQgIT0gTlVMTCkge1xuXHRcdHZub2RlLl9kb20gPSB2bm9kZS5fY29tcG9uZW50LmJhc2UgPSBOVUxMO1xuXHRcdHZub2RlLl9jaGlsZHJlbi5zb21lKGNoaWxkID0+IHtcblx0XHRcdGlmIChjaGlsZCAhPSBOVUxMICYmIGNoaWxkLl9kb20gIT0gTlVMTCkge1xuXHRcdFx0XHRyZXR1cm4gKHZub2RlLl9kb20gPSB2bm9kZS5fY29tcG9uZW50LmJhc2UgPSBjaGlsZC5fZG9tKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiB1cGRhdGVQYXJlbnREb21Qb2ludGVycyh2bm9kZSk7XG5cdH1cbn1cblxuLyoqXG4gKiBUaGUgcmVuZGVyIHF1ZXVlXG4gKiBAdHlwZSB7QXJyYXk8aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50Pn1cbiAqL1xubGV0IHJlcmVuZGVyUXVldWUgPSBbXTtcblxuLypcbiAqIFRoZSB2YWx1ZSBvZiBgQ29tcG9uZW50LmRlYm91bmNlYCBtdXN0IGFzeW5jaHJvbm91c2x5IGludm9rZSB0aGUgcGFzc2VkIGluIGNhbGxiYWNrLiBJdCBpc1xuICogaW1wb3J0YW50IHRoYXQgY29udHJpYnV0b3JzIHRvIFByZWFjdCBjYW4gY29uc2lzdGVudGx5IHJlYXNvbiBhYm91dCB3aGF0IGNhbGxzIHRvIGBzZXRTdGF0ZWAsIGV0Yy5cbiAqIGRvLCBhbmQgd2hlbiB0aGVpciBlZmZlY3RzIHdpbGwgYmUgYXBwbGllZC4gU2VlIHRoZSBsaW5rcyBiZWxvdyBmb3Igc29tZSBmdXJ0aGVyIHJlYWRpbmcgb24gZGVzaWduaW5nXG4gKiBhc3luY2hyb25vdXMgQVBJcy5cbiAqICogW0Rlc2lnbmluZyBBUElzIGZvciBBc3luY2hyb255XShodHRwczovL2Jsb2cuaXpzLm1lLzIwMTMvMDgvZGVzaWduaW5nLWFwaXMtZm9yLWFzeW5jaHJvbnkpXG4gKiAqIFtDYWxsYmFja3Mgc3luY2hyb25vdXMgYW5kIGFzeW5jaHJvbm91c10oaHR0cHM6Ly9ibG9nLm9tZXRlci5jb20vMjAxMS8wNy8yNC9jYWxsYmFja3Mtc3luY2hyb25vdXMtYW5kLWFzeW5jaHJvbm91cy8pXG4gKi9cblxubGV0IHByZXZEZWJvdW5jZTtcblxuY29uc3QgZGVmZXIgPVxuXHR0eXBlb2YgUHJvbWlzZSA9PSAnZnVuY3Rpb24nXG5cdFx0PyBQcm9taXNlLnByb3RvdHlwZS50aGVuLmJpbmQoUHJvbWlzZS5yZXNvbHZlKCkpXG5cdFx0OiBzZXRUaW1lb3V0O1xuXG4vKipcbiAqIEVucXVldWUgYSByZXJlbmRlciBvZiBhIGNvbXBvbmVudFxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9IGMgVGhlIGNvbXBvbmVudCB0byByZXJlbmRlclxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5xdWV1ZVJlbmRlcihjKSB7XG5cdGlmIChcblx0XHQoIWMuX2RpcnR5ICYmXG5cdFx0XHQoYy5fZGlydHkgPSB0cnVlKSAmJlxuXHRcdFx0cmVyZW5kZXJRdWV1ZS5wdXNoKGMpICYmXG5cdFx0XHQhcHJvY2Vzcy5fcmVyZW5kZXJDb3VudCsrKSB8fFxuXHRcdHByZXZEZWJvdW5jZSAhPSBvcHRpb25zLmRlYm91bmNlUmVuZGVyaW5nXG5cdCkge1xuXHRcdHByZXZEZWJvdW5jZSA9IG9wdGlvbnMuZGVib3VuY2VSZW5kZXJpbmc7XG5cdFx0KHByZXZEZWJvdW5jZSB8fCBkZWZlcikocHJvY2Vzcyk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gYVxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnR9IGJcbiAqL1xuY29uc3QgZGVwdGhTb3J0ID0gKGEsIGIpID0+IGEuX3Zub2RlLl9kZXB0aCAtIGIuX3Zub2RlLl9kZXB0aDtcblxuLyoqIEZsdXNoIHRoZSByZW5kZXIgcXVldWUgYnkgcmVyZW5kZXJpbmcgYWxsIHF1ZXVlZCBjb21wb25lbnRzICovXG5mdW5jdGlvbiBwcm9jZXNzKCkge1xuXHR0cnkge1xuXHRcdGxldCBjLFxuXHRcdFx0bCA9IDE7XG5cblx0XHQvLyBEb24ndCB1cGRhdGUgYHJlbmRlckNvdW50YCB5ZXQuIEtlZXAgaXRzIHZhbHVlIG5vbi16ZXJvIHRvIHByZXZlbnQgdW5uZWNlc3Nhcnlcblx0XHQvLyBwcm9jZXNzKCkgY2FsbHMgZnJvbSBnZXR0aW5nIHNjaGVkdWxlZCB3aGlsZSBgcXVldWVgIGlzIHN0aWxsIGJlaW5nIGNvbnN1bWVkLlxuXHRcdHdoaWxlIChyZXJlbmRlclF1ZXVlLmxlbmd0aCkge1xuXHRcdFx0Ly8gS2VlcCB0aGUgcmVyZW5kZXIgcXVldWUgc29ydGVkIGJ5IChkZXB0aCwgaW5zZXJ0aW9uIG9yZGVyKS4gVGhlIHF1ZXVlXG5cdFx0XHQvLyB3aWxsIGluaXRpYWxseSBiZSBzb3J0ZWQgb24gdGhlIGZpcnN0IGl0ZXJhdGlvbiBvbmx5IGlmIGl0IGhhcyBtb3JlIHRoYW4gMSBpdGVtLlxuXHRcdFx0Ly9cblx0XHRcdC8vIE5ldyBpdGVtcyBjYW4gYmUgYWRkZWQgdG8gdGhlIHF1ZXVlIGUuZy4gd2hlbiByZXJlbmRlcmluZyBhIHByb3ZpZGVyLCBzbyB3ZSB3YW50IHRvXG5cdFx0XHQvLyBrZWVwIHRoZSBvcmRlciBmcm9tIHRvcCB0byBib3R0b20gd2l0aCB0aG9zZSBuZXcgaXRlbXMgc28gd2UgY2FuIGhhbmRsZSB0aGVtIGluIGFcblx0XHRcdC8vIHNpbmdsZSBwYXNzXG5cdFx0XHRpZiAocmVyZW5kZXJRdWV1ZS5sZW5ndGggPiBsKSB7XG5cdFx0XHRcdHJlcmVuZGVyUXVldWUuc29ydChkZXB0aFNvcnQpO1xuXHRcdFx0fVxuXG5cdFx0XHRjID0gcmVyZW5kZXJRdWV1ZS5zaGlmdCgpO1xuXHRcdFx0bCA9IHJlcmVuZGVyUXVldWUubGVuZ3RoO1xuXG5cdFx0XHRyZW5kZXJDb21wb25lbnQoYyk7XG5cdFx0fVxuXHR9IGZpbmFsbHkge1xuXHRcdHJlcmVuZGVyUXVldWUubGVuZ3RoID0gcHJvY2Vzcy5fcmVyZW5kZXJDb3VudCA9IDA7XG5cdH1cbn1cblxucHJvY2Vzcy5fcmVyZW5kZXJDb3VudCA9IDA7XG4iLCAiaW1wb3J0IHsgSVNfTk9OX0RJTUVOU0lPTkFMLCBOVUxMLCBTVkdfTkFNRVNQQUNFIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4uL29wdGlvbnMnO1xuXG4vLyBQZXItaW5zdGFuY2UgdW5pcXVlIGtleSBmb3IgZXZlbnQgY2xvY2sgc3RhbXBzLiBFYWNoIFByZWFjdCBjb3B5IG9uIHRoZSBwYWdlXG4vLyBnZXRzIGl0cyBvd24gcmFuZG9tIHN1ZmZpeCBzbyB0aGF0IGBfZGlzcGF0Y2hlZGAgLyBgX2F0dGFjaGVkYCBwcm9wZXJ0aWVzIG9uXG4vLyBzaGFyZWQgZXZlbnQgb2JqZWN0cyBhbmQgaGFuZGxlciBmdW5jdGlvbnMgY2Fubm90IGNvbGxpZGUgYWNyb3NzIGluc3RhbmNlcy5cbi8vIH4xIGluIDYwTSBjb2xsaXNpb24gb2RkcyAtIGlmIHlvdSBoYXZlIHRoYXQgbWFueSBwcmFlY3QgdmVyc2lvbnMgb24gdGhlIHBhZ2UsXG4vLyB5b3UgZGVzZXJ2ZSBzb21lIHdlaXJkIGJ1Z3MuXG4vLyBJbiAxMSB3ZSBjYW4gcmVwbGFjZSB0aGlzIHdpdGggYVxuLy8gU3ltYm9sXG5sZXQgX2lkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZyg4KSxcblx0RVZFTlRfRElTUEFUQ0hFRCA9ICdfX2QnICsgX2lkLFxuXHRFVkVOVF9BVFRBQ0hFRCA9ICdfX2EnICsgX2lkO1xuXG5mdW5jdGlvbiBzZXRTdHlsZShzdHlsZSwga2V5LCB2YWx1ZSkge1xuXHRpZiAoa2V5WzBdID09ICctJykge1xuXHRcdHN0eWxlLnNldFByb3BlcnR5KGtleSwgdmFsdWUgPT0gTlVMTCA/ICcnIDogdmFsdWUpO1xuXHR9IGVsc2UgaWYgKHZhbHVlID09IE5VTEwpIHtcblx0XHRzdHlsZVtrZXldID0gJyc7XG5cdH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlICE9ICdudW1iZXInIHx8IElTX05PTl9ESU1FTlNJT05BTC50ZXN0KGtleSkpIHtcblx0XHRzdHlsZVtrZXldID0gdmFsdWU7XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGVba2V5XSA9IHZhbHVlICsgJ3B4Jztcblx0fVxufVxuXG5jb25zdCBDQVBUVVJFX1JFR0VYID0gLyhQb2ludGVyQ2FwdHVyZSkkfENhcHR1cmUkL2k7XG5cbi8vIEEgbG9naWNhbCBjbG9jayB0byBzb2x2ZSBpc3N1ZXMgbGlrZSBodHRwczovL2dpdGh1Yi5jb20vcHJlYWN0anMvcHJlYWN0L2lzc3Vlcy8zOTI3LlxuLy8gV2hlbiB0aGUgRE9NIHBlcmZvcm1zIGFuIGV2ZW50IGl0IGxlYXZlcyBtaWNyby10aWNrcyBpbiBiZXR3ZWVuIGJ1YmJsaW5nIHVwIHdoaWNoIG1lYW5zIHRoYXRcbi8vIGFuIGV2ZW50IGNhbiB0cmlnZ2VyIG9uIGEgbmV3bHkgcmVhdGVkIERPTS1ub2RlIHdoaWxlIHRoZSBldmVudCBidWJibGVzIHVwLlxuLy9cbi8vIE9yaWdpbmFsbHkgaW5zcGlyZWQgYnkgVnVlXG4vLyAoaHR0cHM6Ly9naXRodWIuY29tL3Z1ZWpzL2NvcmUvYmxvYi9jYWViOGE2ODgxMWExYjBmNzkvcGFja2FnZXMvcnVudGltZS1kb20vc3JjL21vZHVsZXMvZXZlbnRzLnRzI0w5MC1MMTAxKSxcbi8vIGJ1dCBtb2RpZmllZCB0byB1c2UgYSBsb2dpY2FsIGNsb2NrIGluc3RlYWQgb2YgRGF0ZS5ub3coKSBpbiBjYXNlIGV2ZW50IGhhbmRsZXJzIGdldCBhdHRhY2hlZFxuLy8gYW5kIGV2ZW50cyBnZXQgZGlzcGF0Y2hlZCBkdXJpbmcgdGhlIHNhbWUgbWlsbGlzZWNvbmQuXG4vL1xuLy8gVGhlIGNsb2NrIGlzIGluY3JlbWVudGVkIGFmdGVyIGVhY2ggbmV3IGV2ZW50IGRpc3BhdGNoLiBUaGlzIGFsbG93cyAxIDAwMCAwMDAgbmV3IGV2ZW50c1xuLy8gcGVyIHNlY29uZCBmb3Igb3ZlciAyODAgeWVhcnMgYmVmb3JlIHRoZSB2YWx1ZSByZWFjaGVzIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSICgyKio1MyAtIDEpLlxubGV0IGV2ZW50Q2xvY2sgPSAwO1xuXG4vKipcbiAqIFNldCBhIHByb3BlcnR5IHZhbHVlIG9uIGEgRE9NIG5vZGVcbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IGRvbSBUaGUgRE9NIG5vZGUgdG8gbW9kaWZ5XG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgcHJvcGVydHkgdG8gc2V0XG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQgdGhlIHByb3BlcnR5IHRvXG4gKiBAcGFyYW0geyp9IG9sZFZhbHVlIFRoZSBvbGQgdmFsdWUgdGhlIHByb3BlcnR5IGhhZFxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVzcGFjZSBXaGV0aGVyIG9yIG5vdCB0aGlzIERPTSBub2RlIGlzIGFuIFNWRyBub2RlIG9yIG5vdFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0UHJvcGVydHkoZG9tLCBuYW1lLCB2YWx1ZSwgb2xkVmFsdWUsIG5hbWVzcGFjZSkge1xuXHRsZXQgdXNlQ2FwdHVyZTtcblxuXHRvOiBpZiAobmFtZSA9PSAnc3R5bGUnKSB7XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuXHRcdFx0ZG9tLnN0eWxlLmNzc1RleHQgPSB2YWx1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHR5cGVvZiBvbGRWYWx1ZSA9PSAnc3RyaW5nJykge1xuXHRcdFx0XHRkb20uc3R5bGUuY3NzVGV4dCA9IG9sZFZhbHVlID0gJyc7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChvbGRWYWx1ZSkge1xuXHRcdFx0XHRmb3IgKG5hbWUgaW4gb2xkVmFsdWUpIHtcblx0XHRcdFx0XHRpZiAoISh2YWx1ZSAmJiBuYW1lIGluIHZhbHVlKSkge1xuXHRcdFx0XHRcdFx0c2V0U3R5bGUoZG9tLnN0eWxlLCBuYW1lLCAnJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0XHRmb3IgKG5hbWUgaW4gdmFsdWUpIHtcblx0XHRcdFx0XHRpZiAoIW9sZFZhbHVlIHx8IHZhbHVlW25hbWVdICE9IG9sZFZhbHVlW25hbWVdKSB7XG5cdFx0XHRcdFx0XHRzZXRTdHlsZShkb20uc3R5bGUsIG5hbWUsIHZhbHVlW25hbWVdKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0Ly8gQmVuY2htYXJrIGZvciBjb21wYXJpc29uOiBodHRwczovL2VzYmVuY2guY29tL2JlbmNoLzU3NGM5NTRiZGI5NjViOWEwMDk2NWFjNlxuXHRlbHNlIGlmIChuYW1lWzBdID09ICdvJyAmJiBuYW1lWzFdID09ICduJykge1xuXHRcdHVzZUNhcHR1cmUgPSBuYW1lICE9IChuYW1lID0gbmFtZS5yZXBsYWNlKENBUFRVUkVfUkVHRVgsICckMScpKTtcblx0XHRjb25zdCBsb3dlckNhc2VOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0Ly8gSW5mZXIgY29ycmVjdCBjYXNpbmcgZm9yIERPTSBidWlsdC1pbiBldmVudHM6XG5cdFx0aWYgKGxvd2VyQ2FzZU5hbWUgaW4gZG9tIHx8IG5hbWUgPT0gJ29uRm9jdXNPdXQnIHx8IG5hbWUgPT0gJ29uRm9jdXNJbicpXG5cdFx0XHRuYW1lID0gbG93ZXJDYXNlTmFtZS5zbGljZSgyKTtcblx0XHRlbHNlIG5hbWUgPSBuYW1lLnNsaWNlKDIpO1xuXG5cdFx0aWYgKCFkb20uX2xpc3RlbmVycykgZG9tLl9saXN0ZW5lcnMgPSB7fTtcblx0XHRkb20uX2xpc3RlbmVyc1tuYW1lICsgdXNlQ2FwdHVyZV0gPSB2YWx1ZTtcblxuXHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0aWYgKCFvbGRWYWx1ZSkge1xuXHRcdFx0XHR2YWx1ZVtFVkVOVF9BVFRBQ0hFRF0gPSBldmVudENsb2NrO1xuXHRcdFx0XHRkb20uYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XHRuYW1lLFxuXHRcdFx0XHRcdHVzZUNhcHR1cmUgPyBldmVudFByb3h5Q2FwdHVyZSA6IGV2ZW50UHJveHksXG5cdFx0XHRcdFx0dXNlQ2FwdHVyZVxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFsdWVbRVZFTlRfQVRUQUNIRURdID0gb2xkVmFsdWVbRVZFTlRfQVRUQUNIRURdO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0bmFtZSxcblx0XHRcdFx0dXNlQ2FwdHVyZSA/IGV2ZW50UHJveHlDYXB0dXJlIDogZXZlbnRQcm94eSxcblx0XHRcdFx0dXNlQ2FwdHVyZVxuXHRcdFx0KTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0aWYgKG5hbWVzcGFjZSA9PSBTVkdfTkFNRVNQQUNFKSB7XG5cdFx0XHQvLyBOb3JtYWxpemUgaW5jb3JyZWN0IHByb3AgdXNhZ2UgZm9yIFNWRzpcblx0XHRcdC8vIC0geGxpbms6aHJlZiAvIHhsaW5rSHJlZiAtLT4gaHJlZiAoeGxpbms6aHJlZiB3YXMgcmVtb3ZlZCBmcm9tIFNWRyBhbmQgaXNuJ3QgbmVlZGVkKVxuXHRcdFx0Ly8gLSBjbGFzc05hbWUgLS0+IGNsYXNzXG5cdFx0XHRuYW1lID0gbmFtZS5yZXBsYWNlKC94bGluayhIfDpoKS8sICdoJykucmVwbGFjZSgvc05hbWUkLywgJ3MnKTtcblx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0bmFtZSAhPSAnd2lkdGgnICYmXG5cdFx0XHRuYW1lICE9ICdoZWlnaHQnICYmXG5cdFx0XHRuYW1lICE9ICdocmVmJyAmJlxuXHRcdFx0bmFtZSAhPSAnbGlzdCcgJiZcblx0XHRcdG5hbWUgIT0gJ2Zvcm0nICYmXG5cdFx0XHQvLyBEZWZhdWx0IHZhbHVlIGluIGJyb3dzZXJzIGlzIGAtMWAgYW5kIGFuIGVtcHR5IHN0cmluZyBpc1xuXHRcdFx0Ly8gY2FzdCB0byBgMGAgaW5zdGVhZFxuXHRcdFx0bmFtZSAhPSAndGFiSW5kZXgnICYmXG5cdFx0XHRuYW1lICE9ICdkb3dubG9hZCcgJiZcblx0XHRcdG5hbWUgIT0gJ3Jvd1NwYW4nICYmXG5cdFx0XHRuYW1lICE9ICdjb2xTcGFuJyAmJlxuXHRcdFx0bmFtZSAhPSAncm9sZScgJiZcblx0XHRcdG5hbWUgIT0gJ3BvcG92ZXInICYmXG5cdFx0XHRuYW1lIGluIGRvbVxuXHRcdCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0ZG9tW25hbWVdID0gdmFsdWUgPT0gTlVMTCA/ICcnIDogdmFsdWU7XG5cdFx0XHRcdC8vIGxhYmVsbGVkIGJyZWFrIGlzIDFiIHNtYWxsZXIgaGVyZSB0aGFuIGEgcmV0dXJuIHN0YXRlbWVudCAoc29ycnkpXG5cdFx0XHRcdGJyZWFrIG87XG5cdFx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdH1cblxuXHRcdC8vIGFyaWEtIGFuZCBkYXRhLSBhdHRyaWJ1dGVzIGhhdmUgbm8gYm9vbGVhbiByZXByZXNlbnRhdGlvbi5cblx0XHQvLyBBIGBmYWxzZWAgdmFsdWUgaXMgZGlmZmVyZW50IGZyb20gdGhlIGF0dHJpYnV0ZSBub3QgYmVpbmdcblx0XHQvLyBwcmVzZW50LCBzbyB3ZSBjYW4ndCByZW1vdmUgaXQuIEZvciBub24tYm9vbGVhbiBhcmlhXG5cdFx0Ly8gYXR0cmlidXRlcyB3ZSBjb3VsZCB0cmVhdCBmYWxzZSBhcyBhIHJlbW92YWwsIGJ1dCB0aGVcblx0XHQvLyBhbW91bnQgb2YgZXhjZXB0aW9ucyB3b3VsZCBjb3N0IHRvbyBtYW55IGJ5dGVzLiBPbiB0b3Agb2Zcblx0XHQvLyB0aGF0IG90aGVyIGZyYW1ld29ya3MgZ2VuZXJhbGx5IHN0cmluZ2lmeSBgZmFsc2VgLlxuXG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHQvLyBuZXZlciBzZXJpYWxpemUgZnVuY3Rpb25zIGFzIGF0dHJpYnV0ZSB2YWx1ZXNcblx0XHR9IGVsc2UgaWYgKHZhbHVlICE9IE5VTEwgJiYgKHZhbHVlICE9PSBmYWxzZSB8fCBuYW1lWzRdID09ICctJykpIHtcblx0XHRcdGRvbS5zZXRBdHRyaWJ1dGUobmFtZSwgbmFtZSA9PSAncG9wb3ZlcicgJiYgdmFsdWUgPT0gdHJ1ZSA/ICcnIDogdmFsdWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb20ucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIENyZWF0ZSBhbiBldmVudCBwcm94eSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gdXNlQ2FwdHVyZSBJcyB0aGUgZXZlbnQgaGFuZGxlciBmb3IgdGhlIGNhcHR1cmUgcGhhc2UuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjcmVhdGVFdmVudFByb3h5KHVzZUNhcHR1cmUpIHtcblx0LyoqXG5cdCAqIFByb3h5IGFuIGV2ZW50IHRvIGhvb2tlZCBldmVudCBoYW5kbGVyc1xuXHQgKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5QcmVhY3RFdmVudH0gZSBUaGUgZXZlbnQgb2JqZWN0IGZyb20gdGhlIGJyb3dzZXJcblx0ICogQHByaXZhdGVcblx0ICovXG5cdHJldHVybiBmdW5jdGlvbiAoZSkge1xuXHRcdGlmICh0aGlzLl9saXN0ZW5lcnMpIHtcblx0XHRcdGNvbnN0IGV2ZW50SGFuZGxlciA9IHRoaXMuX2xpc3RlbmVyc1tlLnR5cGUgKyB1c2VDYXB0dXJlXTtcblx0XHRcdGlmIChlW0VWRU5UX0RJU1BBVENIRURdID09IE5VTEwpIHtcblx0XHRcdFx0ZVtFVkVOVF9ESVNQQVRDSEVEXSA9IGV2ZW50Q2xvY2srKztcblxuXHRcdFx0XHQvLyBXaGVuIGBlW0VWRU5UX0RJU1BBVENIRURdYCBpcyBzbWFsbGVyIHRoYW4gdGhlIHRpbWUgd2hlbiB0aGUgdGFyZ2V0ZWQgZXZlbnRcblx0XHRcdFx0Ly8gaGFuZGxlciB3YXMgYXR0YWNoZWQgd2Uga25vdyB3ZSBoYXZlIGJ1YmJsZWQgdXAgdG8gYW4gZWxlbWVudCB0aGF0IHdhcyBhZGRlZFxuXHRcdFx0XHQvLyBkdXJpbmcgcGF0Y2hpbmcgdGhlIERPTS5cblx0XHRcdH0gZWxzZSBpZiAoZVtFVkVOVF9ESVNQQVRDSEVEXSA8IGV2ZW50SGFuZGxlcltFVkVOVF9BVFRBQ0hFRF0pIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGV2ZW50SGFuZGxlcihvcHRpb25zLmV2ZW50ID8gb3B0aW9ucy5ldmVudChlKSA6IGUpO1xuXHRcdH1cblx0fTtcbn1cblxuY29uc3QgZXZlbnRQcm94eSA9IGNyZWF0ZUV2ZW50UHJveHkoZmFsc2UpO1xuY29uc3QgZXZlbnRQcm94eUNhcHR1cmUgPSBjcmVhdGVFdmVudFByb3h5KHRydWUpO1xuIiwgImltcG9ydCB7IGVucXVldWVSZW5kZXIgfSBmcm9tICcuL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBOVUxMIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgbGV0IGkgPSAwO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29udGV4dChkZWZhdWx0VmFsdWUpIHtcblx0ZnVuY3Rpb24gQ29udGV4dChwcm9wcykge1xuXHRcdGlmICghdGhpcy5nZXRDaGlsZENvbnRleHQpIHtcblx0XHRcdC8qKiBAdHlwZSB7U2V0PGltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudD4gfCBudWxsfSAqL1xuXHRcdFx0bGV0IHN1YnMgPSBuZXcgU2V0KCk7XG5cdFx0XHRsZXQgY3R4ID0ge307XG5cdFx0XHRjdHhbQ29udGV4dC5faWRdID0gdGhpcztcblxuXHRcdFx0dGhpcy5nZXRDaGlsZENvbnRleHQgPSAoKSA9PiBjdHg7XG5cblx0XHRcdHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XG5cdFx0XHRcdHN1YnMgPSBOVUxMO1xuXHRcdFx0fTtcblxuXHRcdFx0dGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbiAoX3Byb3BzKSB7XG5cdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgZXZlblxuXHRcdFx0XHRpZiAodGhpcy5wcm9wcy52YWx1ZSAhPSBfcHJvcHMudmFsdWUpIHtcblx0XHRcdFx0XHRzdWJzLmZvckVhY2goYyA9PiB7XG5cdFx0XHRcdFx0XHRjLl9mb3JjZSA9IHRydWU7XG5cdFx0XHRcdFx0XHRlbnF1ZXVlUmVuZGVyKGMpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHR0aGlzLnN1YiA9IGMgPT4ge1xuXHRcdFx0XHRzdWJzLmFkZChjKTtcblx0XHRcdFx0bGV0IG9sZCA9IGMuY29tcG9uZW50V2lsbFVubW91bnQ7XG5cdFx0XHRcdGMuY29tcG9uZW50V2lsbFVubW91bnQgPSAoKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHN1YnMpIHtcblx0XHRcdFx0XHRcdHN1YnMuZGVsZXRlKGMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAob2xkKSBvbGQuY2FsbChjKTtcblx0XHRcdFx0fTtcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHByb3BzLmNoaWxkcmVuO1xuXHR9XG5cblx0Q29udGV4dC5faWQgPSAnX19jQycgKyBpKys7XG5cdENvbnRleHQuX2RlZmF1bHRWYWx1ZSA9IGRlZmF1bHRWYWx1ZTtcblxuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkZ1bmN0aW9uQ29tcG9uZW50fSAqL1xuXHRDb250ZXh0LkNvbnN1bWVyID0gKHByb3BzLCBjb250ZXh0VmFsdWUpID0+IHtcblx0XHRyZXR1cm4gcHJvcHMuY2hpbGRyZW4oY29udGV4dFZhbHVlKTtcblx0fTtcblxuXHQvLyB3ZSBjb3VsZCBhbHNvIGdldCByaWQgb2YgX2NvbnRleHRSZWYgZW50aXJlbHlcblx0Q29udGV4dC5Qcm92aWRlciA9XG5cdFx0Q29udGV4dC5fY29udGV4dFJlZiA9XG5cdFx0Q29udGV4dC5Db25zdW1lci5jb250ZXh0VHlwZSA9XG5cdFx0XHRDb250ZXh0O1xuXG5cdHJldHVybiBDb250ZXh0O1xufVxuIiwgImltcG9ydCB7IGRpZmYsIHVubW91bnQsIGFwcGx5UmVmIH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgeyBjcmVhdGVWTm9kZSwgRnJhZ21lbnQgfSBmcm9tICcuLi9jcmVhdGUtZWxlbWVudCc7XG5pbXBvcnQge1xuXHRFTVBUWV9PQkosXG5cdEVNUFRZX0FSUixcblx0SU5TRVJUX1ZOT0RFLFxuXHRNQVRDSEVELFxuXHRVTkRFRklORUQsXG5cdE5VTExcbn0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCB7IGdldERvbVNpYmxpbmcgfSBmcm9tICcuLi9jb21wb25lbnQnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2ludGVybmFsJykuQ29tcG9uZW50Q2hpbGRyZW59IENvbXBvbmVudENoaWxkcmVuXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gQ29tcG9uZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IFByZWFjdEVsZW1lbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IFZOb2RlXG4gKi9cblxuLyoqXG4gKiBEaWZmIHRoZSBjaGlsZHJlbiBvZiBhIHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtQcmVhY3RFbGVtZW50fSBwYXJlbnREb20gVGhlIERPTSBlbGVtZW50IHdob3NlIGNoaWxkcmVuIGFyZSBiZWluZ1xuICogZGlmZmVkXG4gKiBAcGFyYW0ge0NvbXBvbmVudENoaWxkcmVuW119IHJlbmRlclJlc3VsdFxuICogQHBhcmFtIHtWTm9kZX0gbmV3UGFyZW50Vk5vZGUgVGhlIG5ldyB2aXJ0dWFsIG5vZGUgd2hvc2UgY2hpbGRyZW4gc2hvdWxkIGJlXG4gKiBkaWZmJ2VkIGFnYWluc3Qgb2xkUGFyZW50Vk5vZGVcbiAqIEBwYXJhbSB7Vk5vZGV9IG9sZFBhcmVudFZOb2RlIFRoZSBvbGQgdmlydHVhbCBub2RlIHdob3NlIGNoaWxkcmVuIHNob3VsZCBiZVxuICogZGlmZidlZCBhZ2FpbnN0IG5ld1BhcmVudFZOb2RlXG4gKiBAcGFyYW0ge29iamVjdH0gZ2xvYmFsQ29udGV4dCBUaGUgY3VycmVudCBjb250ZXh0IG9iamVjdCAtIG1vZGlmaWVkIGJ5XG4gKiBnZXRDaGlsZENvbnRleHRcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lc3BhY2UgQ3VycmVudCBuYW1lc3BhY2Ugb2YgdGhlIERPTSBub2RlIChIVE1MLCBTVkcsIG9yIE1hdGhNTClcbiAqIEBwYXJhbSB7QXJyYXk8UHJlYWN0RWxlbWVudD59IGV4Y2Vzc0RvbUNoaWxkcmVuXG4gKiBAcGFyYW0ge0FycmF5PENvbXBvbmVudD59IGNvbW1pdFF1ZXVlIExpc3Qgb2YgY29tcG9uZW50cyB3aGljaCBoYXZlIGNhbGxiYWNrc1xuICogdG8gaW52b2tlIGluIGNvbW1pdFJvb3RcbiAqIEBwYXJhbSB7UHJlYWN0RWxlbWVudH0gb2xkRG9tIFRoZSBjdXJyZW50IGF0dGFjaGVkIERPTSBlbGVtZW50IGFueSBuZXcgZG9tXG4gKiBlbGVtZW50cyBzaG91bGQgYmUgcGxhY2VkIGFyb3VuZC4gTGlrZWx5IGBudWxsYCBvbiBmaXJzdCByZW5kZXIgKGV4Y2VwdCB3aGVuXG4gKiBoeWRyYXRpbmcpLiBDYW4gYmUgYSBzaWJsaW5nIERPTSBlbGVtZW50IHdoZW4gZGlmZmluZyBGcmFnbWVudHMgdGhhdCBoYXZlXG4gKiBzaWJsaW5ncy4gSW4gbW9zdCBjYXNlcywgaXQgc3RhcnRzIG91dCBhcyBgb2xkQ2hpbGRyZW5bMF0uX2RvbWAuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzSHlkcmF0aW5nIFdoZXRoZXIgb3Igbm90IHdlIGFyZSBpbiBoeWRyYXRpb25cbiAqIEBwYXJhbSB7YW55W119IHJlZlF1ZXVlIGFuIGFycmF5IG9mIGVsZW1lbnRzIG5lZWRlZCB0byBpbnZva2UgcmVmc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZkNoaWxkcmVuKFxuXHRwYXJlbnREb20sXG5cdHJlbmRlclJlc3VsdCxcblx0bmV3UGFyZW50Vk5vZGUsXG5cdG9sZFBhcmVudFZOb2RlLFxuXHRnbG9iYWxDb250ZXh0LFxuXHRuYW1lc3BhY2UsXG5cdGV4Y2Vzc0RvbUNoaWxkcmVuLFxuXHRjb21taXRRdWV1ZSxcblx0b2xkRG9tLFxuXHRpc0h5ZHJhdGluZyxcblx0cmVmUXVldWVcbikge1xuXHRsZXQgaSxcblx0XHQvKiogQHR5cGUge1ZOb2RlfSAqL1xuXHRcdG9sZFZOb2RlLFxuXHRcdC8qKiBAdHlwZSB7Vk5vZGV9ICovXG5cdFx0Y2hpbGRWTm9kZSxcblx0XHQvKiogQHR5cGUge1ByZWFjdEVsZW1lbnR9ICovXG5cdFx0bmV3RG9tLFxuXHRcdC8qKiBAdHlwZSB7UHJlYWN0RWxlbWVudH0gKi9cblx0XHRmaXJzdENoaWxkRG9tO1xuXG5cdC8vIFRoaXMgaXMgYSBjb21wcmVzc2lvbiBvZiBvbGRQYXJlbnRWTm9kZSE9bnVsbCAmJiBvbGRQYXJlbnRWTm9kZSAhPSBFTVBUWV9PQkogJiYgb2xkUGFyZW50Vk5vZGUuX2NoaWxkcmVuIHx8IEVNUFRZX0FSUlxuXHQvLyBhcyBFTVBUWV9PQkouX2NoaWxkcmVuIHNob3VsZCBiZSBgdW5kZWZpbmVkYC5cblx0LyoqIEB0eXBlIHtWTm9kZVtdfSAqL1xuXHRsZXQgb2xkQ2hpbGRyZW4gPSAob2xkUGFyZW50Vk5vZGUgJiYgb2xkUGFyZW50Vk5vZGUuX2NoaWxkcmVuKSB8fCBFTVBUWV9BUlI7XG5cblx0bGV0IG5ld0NoaWxkcmVuTGVuZ3RoID0gcmVuZGVyUmVzdWx0Lmxlbmd0aDtcblxuXHRvbGREb20gPSBjb25zdHJ1Y3ROZXdDaGlsZHJlbkFycmF5KFxuXHRcdG5ld1BhcmVudFZOb2RlLFxuXHRcdHJlbmRlclJlc3VsdCxcblx0XHRvbGRDaGlsZHJlbixcblx0XHRvbGREb20sXG5cdFx0bmV3Q2hpbGRyZW5MZW5ndGhcblx0KTtcblxuXHRmb3IgKGkgPSAwOyBpIDwgbmV3Q2hpbGRyZW5MZW5ndGg7IGkrKykge1xuXHRcdGNoaWxkVk5vZGUgPSBuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV07XG5cdFx0aWYgKGNoaWxkVk5vZGUgPT0gTlVMTCkgY29udGludWU7XG5cblx0XHQvLyBBdCB0aGlzIHBvaW50LCBjb25zdHJ1Y3ROZXdDaGlsZHJlbkFycmF5IGhhcyBhc3NpZ25lZCBfaW5kZXggdG8gYmUgdGhlXG5cdFx0Ly8gbWF0Y2hpbmdJbmRleCBmb3IgdGhpcyBWTm9kZSdzIG9sZFZOb2RlIChvciAtMSBpZiB0aGVyZSBpcyBubyBvbGRWTm9kZSkuXG5cdFx0b2xkVk5vZGUgPVxuXHRcdFx0KGNoaWxkVk5vZGUuX2luZGV4ICE9IC0xICYmIG9sZENoaWxkcmVuW2NoaWxkVk5vZGUuX2luZGV4XSkgfHwgRU1QVFlfT0JKO1xuXG5cdFx0Ly8gVXBkYXRlIGNoaWxkVk5vZGUuX2luZGV4IHRvIGl0cyBmaW5hbCBpbmRleFxuXHRcdGNoaWxkVk5vZGUuX2luZGV4ID0gaTtcblxuXHRcdC8vIE1vcnBoIHRoZSBvbGQgZWxlbWVudCBpbnRvIHRoZSBuZXcgb25lLCBidXQgZG9uJ3QgYXBwZW5kIGl0IHRvIHRoZSBkb20geWV0XG5cdFx0bGV0IHJlc3VsdCA9IGRpZmYoXG5cdFx0XHRwYXJlbnREb20sXG5cdFx0XHRjaGlsZFZOb2RlLFxuXHRcdFx0b2xkVk5vZGUsXG5cdFx0XHRnbG9iYWxDb250ZXh0LFxuXHRcdFx0bmFtZXNwYWNlLFxuXHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdFx0XHRjb21taXRRdWV1ZSxcblx0XHRcdG9sZERvbSxcblx0XHRcdGlzSHlkcmF0aW5nLFxuXHRcdFx0cmVmUXVldWVcblx0XHQpO1xuXG5cdFx0Ly8gQWRqdXN0IERPTSBub2Rlc1xuXHRcdG5ld0RvbSA9IGNoaWxkVk5vZGUuX2RvbTtcblx0XHRpZiAoY2hpbGRWTm9kZS5yZWYgJiYgb2xkVk5vZGUucmVmICE9IGNoaWxkVk5vZGUucmVmKSB7XG5cdFx0XHRpZiAob2xkVk5vZGUucmVmKSB7XG5cdFx0XHRcdGFwcGx5UmVmKG9sZFZOb2RlLnJlZiwgTlVMTCwgY2hpbGRWTm9kZSk7XG5cdFx0XHR9XG5cdFx0XHRyZWZRdWV1ZS5wdXNoKFxuXHRcdFx0XHRjaGlsZFZOb2RlLnJlZixcblx0XHRcdFx0Y2hpbGRWTm9kZS5fY29tcG9uZW50IHx8IG5ld0RvbSxcblx0XHRcdFx0Y2hpbGRWTm9kZVxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRpZiAoZmlyc3RDaGlsZERvbSA9PSBOVUxMICYmIG5ld0RvbSAhPSBOVUxMKSB7XG5cdFx0XHRmaXJzdENoaWxkRG9tID0gbmV3RG9tO1xuXHRcdH1cblxuXHRcdGxldCBzaG91bGRQbGFjZSA9ICEhKGNoaWxkVk5vZGUuX2ZsYWdzICYgSU5TRVJUX1ZOT0RFKTtcblx0XHRpZiAoc2hvdWxkUGxhY2UgfHwgb2xkVk5vZGUuX2NoaWxkcmVuID09PSBjaGlsZFZOb2RlLl9jaGlsZHJlbikge1xuXHRcdFx0b2xkRG9tID0gaW5zZXJ0KGNoaWxkVk5vZGUsIG9sZERvbSwgcGFyZW50RG9tLCBzaG91bGRQbGFjZSk7XG5cblx0XHRcdC8vIFdoZW4gYSBtYXRjaGVkIFZOb2RlIGlzIHBoeXNpY2FsbHkgbW92ZWQgdmlhIElOU0VSVF9WTk9ERSwgaXRzIG9sZFxuXHRcdFx0Ly8gX2RvbSBwb2ludGVyIGJlY29tZXMgYSBzdGFsZSBwb3NpdGlvbmFsIHJlZmVyZW5jZS4gQ2xlYXIgaXQgc28gdGhhdFxuXHRcdFx0Ly8gZ2V0RG9tU2libGluZyAoY2FsbGVkIGZyb20gbmVzdGVkIGRpZmZzKSB3b24ndCByZXR1cm4gdGhpcyBzdGFsZVxuXHRcdFx0Ly8gcmVmZXJlbmNlIGFuZCBtaXMtcGxhY2Ugc3Vic2VxdWVudCBET00gbm9kZXMuIFNlZSAjNTA2NS5cblx0XHRcdGlmIChzaG91bGRQbGFjZSAmJiBvbGRWTm9kZS5fZG9tKSB7XG5cdFx0XHRcdG9sZFZOb2RlLl9kb20gPSBOVUxMO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAodHlwZW9mIGNoaWxkVk5vZGUudHlwZSA9PSAnZnVuY3Rpb24nICYmIHJlc3VsdCAhPT0gVU5ERUZJTkVEKSB7XG5cdFx0XHRvbGREb20gPSByZXN1bHQ7XG5cdFx0fSBlbHNlIGlmIChuZXdEb20pIHtcblx0XHRcdG9sZERvbSA9IG5ld0RvbS5uZXh0U2libGluZztcblx0XHR9XG5cblx0XHQvLyBVbnNldCBkaWZmaW5nIGZsYWdzXG5cdFx0Y2hpbGRWTm9kZS5fZmxhZ3MgJj0gfihJTlNFUlRfVk5PREUgfCBNQVRDSEVEKTtcblx0fVxuXG5cdG5ld1BhcmVudFZOb2RlLl9kb20gPSBmaXJzdENoaWxkRG9tO1xuXG5cdHJldHVybiBvbGREb207XG59XG5cbi8qKlxuICogQHBhcmFtIHtWTm9kZX0gbmV3UGFyZW50Vk5vZGVcbiAqIEBwYXJhbSB7Q29tcG9uZW50Q2hpbGRyZW5bXX0gcmVuZGVyUmVzdWx0XG4gKiBAcGFyYW0ge1ZOb2RlW119IG9sZENoaWxkcmVuXG4gKi9cbmZ1bmN0aW9uIGNvbnN0cnVjdE5ld0NoaWxkcmVuQXJyYXkoXG5cdG5ld1BhcmVudFZOb2RlLFxuXHRyZW5kZXJSZXN1bHQsXG5cdG9sZENoaWxkcmVuLFxuXHRvbGREb20sXG5cdG5ld0NoaWxkcmVuTGVuZ3RoXG4pIHtcblx0LyoqIEB0eXBlIHtudW1iZXJ9ICovXG5cdGxldCBpO1xuXHQvKiogQHR5cGUge1ZOb2RlfSAqL1xuXHRsZXQgY2hpbGRWTm9kZTtcblx0LyoqIEB0eXBlIHtWTm9kZX0gKi9cblx0bGV0IG9sZFZOb2RlO1xuXG5cdGxldCBvbGRDaGlsZHJlbkxlbmd0aCA9IG9sZENoaWxkcmVuLmxlbmd0aCxcblx0XHRyZW1haW5pbmdPbGRDaGlsZHJlbiA9IG9sZENoaWxkcmVuTGVuZ3RoO1xuXG5cdGxldCBza2V3ID0gMDtcblxuXHRuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW4gPSBuZXcgQXJyYXkobmV3Q2hpbGRyZW5MZW5ndGgpO1xuXHRmb3IgKGkgPSAwOyBpIDwgbmV3Q2hpbGRyZW5MZW5ndGg7IGkrKykge1xuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgV2UgYXJlIHJldXNpbmcgdGhlIGNoaWxkVk5vZGUgdmFyaWFibGUgdG8gaG9sZCBib3RoIHRoZVxuXHRcdC8vIHByZSBhbmQgcG9zdCBub3JtYWxpemVkIGNoaWxkVk5vZGVcblx0XHRjaGlsZFZOb2RlID0gcmVuZGVyUmVzdWx0W2ldO1xuXG5cdFx0aWYgKFxuXHRcdFx0Y2hpbGRWTm9kZSA9PSBOVUxMIHx8XG5cdFx0XHR0eXBlb2YgY2hpbGRWTm9kZSA9PSAnYm9vbGVhbicgfHxcblx0XHRcdHR5cGVvZiBjaGlsZFZOb2RlID09ICdmdW5jdGlvbidcblx0XHQpIHtcblx0XHRcdG5ld1BhcmVudFZOb2RlLl9jaGlsZHJlbltpXSA9IE5VTEw7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Ly8gSWYgdGhpcyBuZXdWTm9kZSBpcyBiZWluZyByZXVzZWQgKGUuZy4gPGRpdj57cmV1c2V9e3JldXNlfTwvZGl2PikgaW4gdGhlIHNhbWUgZGlmZixcblx0XHQvLyBvciB3ZSBhcmUgcmVuZGVyaW5nIGEgY29tcG9uZW50IChlLmcuIHNldFN0YXRlKSBjb3B5IHRoZSBvbGRWTm9kZXMgc28gaXQgY2FuIGhhdmVcblx0XHQvLyBpdCdzIG93biBET00gJiBldGMuIHBvaW50ZXJzXG5cdFx0ZWxzZSBpZiAoXG5cdFx0XHR0eXBlb2YgY2hpbGRWTm9kZSA9PSAnc3RyaW5nJyB8fFxuXHRcdFx0dHlwZW9mIGNoaWxkVk5vZGUgPT0gJ251bWJlcicgfHxcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB2YWxpZC10eXBlb2Zcblx0XHRcdHR5cGVvZiBjaGlsZFZOb2RlID09ICdiaWdpbnQnIHx8XG5cdFx0XHRjaGlsZFZOb2RlLmNvbnN0cnVjdG9yID09IFN0cmluZ1xuXHRcdCkge1xuXHRcdFx0Y2hpbGRWTm9kZSA9IG5ld1BhcmVudFZOb2RlLl9jaGlsZHJlbltpXSA9IGNyZWF0ZVZOb2RlKFxuXHRcdFx0XHROVUxMLFxuXHRcdFx0XHRjaGlsZFZOb2RlLFxuXHRcdFx0XHROVUxMLFxuXHRcdFx0XHROVUxMLFxuXHRcdFx0XHROVUxMXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSBpZiAoaXNBcnJheShjaGlsZFZOb2RlKSkge1xuXHRcdFx0Y2hpbGRWTm9kZSA9IG5ld1BhcmVudFZOb2RlLl9jaGlsZHJlbltpXSA9IGNyZWF0ZVZOb2RlKFxuXHRcdFx0XHRGcmFnbWVudCxcblx0XHRcdFx0eyBjaGlsZHJlbjogY2hpbGRWTm9kZSB9LFxuXHRcdFx0XHROVUxMLFxuXHRcdFx0XHROVUxMLFxuXHRcdFx0XHROVUxMXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSBpZiAoY2hpbGRWTm9kZS5jb25zdHJ1Y3RvciA9PT0gVU5ERUZJTkVEICYmIGNoaWxkVk5vZGUuX2RlcHRoID4gMCkge1xuXHRcdFx0Ly8gVk5vZGUgaXMgYWxyZWFkeSBpbiB1c2UsIGNsb25lIGl0LiBUaGlzIGNhbiBoYXBwZW4gaW4gdGhlIGZvbGxvd2luZ1xuXHRcdFx0Ly8gc2NlbmFyaW86XG5cdFx0XHQvLyAgIGNvbnN0IHJldXNlID0gPGRpdiAvPlxuXHRcdFx0Ly8gICA8ZGl2PntyZXVzZX08c3BhbiAvPntyZXVzZX08L2Rpdj5cblx0XHRcdGNoaWxkVk5vZGUgPSBuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV0gPSBjcmVhdGVWTm9kZShcblx0XHRcdFx0Y2hpbGRWTm9kZS50eXBlLFxuXHRcdFx0XHRjaGlsZFZOb2RlLnByb3BzLFxuXHRcdFx0XHRjaGlsZFZOb2RlLmtleSxcblx0XHRcdFx0Y2hpbGRWTm9kZS5yZWYgPyBjaGlsZFZOb2RlLnJlZiA6IE5VTEwsXG5cdFx0XHRcdGNoaWxkVk5vZGUuX29yaWdpbmFsXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRuZXdQYXJlbnRWTm9kZS5fY2hpbGRyZW5baV0gPSBjaGlsZFZOb2RlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHNrZXdlZEluZGV4ID0gaSArIHNrZXc7XG5cdFx0Y2hpbGRWTm9kZS5fcGFyZW50ID0gbmV3UGFyZW50Vk5vZGU7XG5cdFx0Y2hpbGRWTm9kZS5fZGVwdGggPSBuZXdQYXJlbnRWTm9kZS5fZGVwdGggKyAxO1xuXG5cdFx0Ly8gVGVtcG9yYXJpbHkgc3RvcmUgdGhlIG1hdGNoaW5nSW5kZXggb24gdGhlIF9pbmRleCBwcm9wZXJ0eSBzbyB3ZSBjYW4gcHVsbFxuXHRcdC8vIG91dCB0aGUgb2xkVk5vZGUgaW4gZGlmZkNoaWxkcmVuLiBXZSdsbCBvdmVycmlkZSB0aGlzIHRvIHRoZSBWTm9kZSdzXG5cdFx0Ly8gZmluYWwgaW5kZXggYWZ0ZXIgdXNpbmcgdGhpcyBwcm9wZXJ0eSB0byBnZXQgdGhlIG9sZFZOb2RlXG5cdFx0Y29uc3QgbWF0Y2hpbmdJbmRleCA9IChjaGlsZFZOb2RlLl9pbmRleCA9IGZpbmRNYXRjaGluZ0luZGV4KFxuXHRcdFx0Y2hpbGRWTm9kZSxcblx0XHRcdG9sZENoaWxkcmVuLFxuXHRcdFx0c2tld2VkSW5kZXgsXG5cdFx0XHRyZW1haW5pbmdPbGRDaGlsZHJlblxuXHRcdCkpO1xuXG5cdFx0b2xkVk5vZGUgPSBOVUxMO1xuXHRcdGlmIChtYXRjaGluZ0luZGV4ICE9IC0xKSB7XG5cdFx0XHRvbGRWTm9kZSA9IG9sZENoaWxkcmVuW21hdGNoaW5nSW5kZXhdO1xuXHRcdFx0cmVtYWluaW5nT2xkQ2hpbGRyZW4tLTtcblx0XHRcdGlmIChvbGRWTm9kZSkge1xuXHRcdFx0XHRvbGRWTm9kZS5fZmxhZ3MgfD0gTUFUQ0hFRDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBIZXJlLCB3ZSBkZWZpbmUgaXNNb3VudGluZyBmb3IgdGhlIHB1cnBvc2VzIG9mIHRoZSBza2V3IGRpZmZpbmdcblx0XHQvLyBhbGdvcml0aG0uIE5vZGVzIHRoYXQgYXJlIHVuc3VzcGVuZGluZyBhcmUgY29uc2lkZXJlZCBtb3VudGluZyBhbmQgd2UgZGV0ZWN0XG5cdFx0Ly8gdGhpcyBieSBjaGVja2luZyBpZiBvbGRWTm9kZS5fb3JpZ2luYWwgPT0gbnVsbFxuXHRcdGNvbnN0IGlzTW91bnRpbmcgPSBvbGRWTm9kZSA9PSBOVUxMIHx8IG9sZFZOb2RlLl9vcmlnaW5hbCA9PSBOVUxMO1xuXG5cdFx0aWYgKGlzTW91bnRpbmcpIHtcblx0XHRcdGlmIChtYXRjaGluZ0luZGV4ID09IC0xKSB7XG5cdFx0XHRcdC8vIFdoZW4gdGhlIGFycmF5IG9mIGNoaWxkcmVuIGlzIGdyb3dpbmcgd2UgbmVlZCB0byBkZWNyZWFzZSB0aGUgc2tld1xuXHRcdFx0XHQvLyBhcyB3ZSBhcmUgYWRkaW5nIGEgbmV3IGVsZW1lbnQgdG8gdGhlIGFycmF5LlxuXHRcdFx0XHQvLyBFeGFtcGxlOlxuXHRcdFx0XHQvLyBbMSwgMiwgM10gLS0+IFswLCAxLCAyLCAzXVxuXHRcdFx0XHQvLyBvbGRDaGlsZHJlbiAgIG5ld0NoaWxkcmVuXG5cdFx0XHRcdC8vXG5cdFx0XHRcdC8vIFRoZSBuZXcgZWxlbWVudCBpcyBhdCBpbmRleCAwLCBzbyBvdXIgc2tldyBpcyAwLFxuXHRcdFx0XHQvLyB3ZSBuZWVkIHRvIGRlY3JlYXNlIHRoZSBza2V3IGFzIHdlIGFyZSBhZGRpbmcgYSBuZXcgZWxlbWVudC5cblx0XHRcdFx0Ly8gVGhlIGRlY3JlYXNlIHdpbGwgY2F1c2UgdXMgdG8gY29tcGFyZSB0aGUgZWxlbWVudCBhdCBwb3NpdGlvbiAxXG5cdFx0XHRcdC8vIHdpdGggdmFsdWUgMSB3aXRoIHRoZSBlbGVtZW50IGF0IHBvc2l0aW9uIDAgd2l0aCB2YWx1ZSAwLlxuXHRcdFx0XHQvL1xuXHRcdFx0XHQvLyBBIGxpbmVhciBjb25jZXB0IGlzIGFwcGxpZWQgd2hlbiB0aGUgYXJyYXkgaXMgc2hyaW5raW5nLFxuXHRcdFx0XHQvLyBpZiB0aGUgbGVuZ3RoIGlzIHVuY2hhbmdlZCB3ZSBjYW4gYXNzdW1lIHRoYXQgbm8gc2tld1xuXHRcdFx0XHQvLyBjaGFuZ2VzIGFyZSBuZWVkZWQuXG5cdFx0XHRcdGlmIChuZXdDaGlsZHJlbkxlbmd0aCA+IG9sZENoaWxkcmVuTGVuZ3RoKSB7XG5cdFx0XHRcdFx0c2tldy0tO1xuXHRcdFx0XHR9IGVsc2UgaWYgKG5ld0NoaWxkcmVuTGVuZ3RoIDwgb2xkQ2hpbGRyZW5MZW5ndGgpIHtcblx0XHRcdFx0XHRza2V3Kys7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgd2UgYXJlIG1vdW50aW5nIGEgRE9NIFZOb2RlLCBtYXJrIGl0IGZvciBpbnNlcnRpb25cblx0XHRcdGlmICh0eXBlb2YgY2hpbGRWTm9kZS50eXBlICE9ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Y2hpbGRWTm9kZS5fZmxhZ3MgfD0gSU5TRVJUX1ZOT0RFO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAobWF0Y2hpbmdJbmRleCAhPSBza2V3ZWRJbmRleCkge1xuXHRcdFx0Ly8gV2hlbiB3ZSBtb3ZlIGVsZW1lbnRzIGFyb3VuZCBpLmUuIFswLCAxLCAyXSAtLT4gWzEsIDAsIDJdXG5cdFx0XHQvLyAtLT4gd2UgZGlmZiAxLCB3ZSBmaW5kIGl0IGF0IHBvc2l0aW9uIDEgd2hpbGUgb3VyIHNrZXdlZCBpbmRleCBpcyAwIGFuZCBvdXIgc2tldyBpcyAwXG5cdFx0XHQvLyAgICAgd2Ugc2V0IHRoZSBza2V3IHRvIDEgYXMgd2UgZm91bmQgYW4gb2Zmc2V0LlxuXHRcdFx0Ly8gLS0+IHdlIGRpZmYgMCwgd2UgZmluZCBpdCBhdCBwb3NpdGlvbiAwIHdoaWxlIG91ciBza2V3ZWQgaW5kZXggaXMgYXQgMiBhbmQgb3VyIHNrZXcgaXMgMVxuXHRcdFx0Ly8gICAgIHRoaXMgbWFrZXMgdXMgaW5jcmVhc2UgdGhlIHNrZXcgYWdhaW4uXG5cdFx0XHQvLyAtLT4gd2UgZGlmZiAyLCB3ZSBmaW5kIGl0IGF0IHBvc2l0aW9uIDIgd2hpbGUgb3VyIHNrZXdlZCBpbmRleCBpcyBhdCA0IGFuZCBvdXIgc2tldyBpcyAyXG5cdFx0XHQvL1xuXHRcdFx0Ly8gdGhpcyBiZWNvbWVzIGFuIG9wdGltaXphdGlvbiBxdWVzdGlvbiB3aGVyZSBjdXJyZW50bHkgd2Ugc2VlIGEgMSBlbGVtZW50IG9mZnNldCBhcyBhbiBpbnNlcnRpb25cblx0XHRcdC8vIG9yIGRlbGV0aW9uIGkuZS4gd2Ugb3B0aW1pemUgZm9yIFswLCAxLCAyXSAtLT4gWzksIDAsIDEsIDJdXG5cdFx0XHQvLyB3aGlsZSBhIG1vcmUgdGhhbiAxIG9mZnNldCB3ZSBzZWUgYXMgYSBzd2FwLlxuXHRcdFx0Ly8gV2UgY291bGQgcHJvYmFibHkgYnVpbGQgaGV1cmlzdGljcyBmb3IgaGF2aW5nIGFuIG9wdGltaXplZCBjb3Vyc2Ugb2YgYWN0aW9uIGhlcmUgYXMgd2VsbCwgYnV0XG5cdFx0XHQvLyBtaWdodCBnbyBhdCB0aGUgY29zdCBvZiBzb21lIGJ5dGVzLlxuXHRcdFx0Ly9cblx0XHRcdC8vIElmIHdlIHdhbnRlZCB0byBvcHRpbWl6ZSBmb3IgaS5lLiBvbmx5IHN3YXBzIHdlJ2QganVzdCBkbyB0aGUgbGFzdCB0d28gY29kZS1icmFuY2hlcyBhbmQgaGF2ZVxuXHRcdFx0Ly8gb25seSB0aGUgZmlyc3QgaXRlbSBiZSBhIHJlLXNjb3V0aW5nIGFuZCBhbGwgdGhlIG90aGVycyBmYWxsIGluIHRoZWlyIHNrZXdlZCBjb3VudGVyLXBhcnQuXG5cdFx0XHQvLyBXZSBjb3VsZCBhbHNvIGZ1cnRoZXIgb3B0aW1pemUgZm9yIHN3YXBzXG5cdFx0XHRpZiAobWF0Y2hpbmdJbmRleCA9PSBza2V3ZWRJbmRleCAtIDEpIHtcblx0XHRcdFx0c2tldy0tO1xuXHRcdFx0fSBlbHNlIGlmIChtYXRjaGluZ0luZGV4ID09IHNrZXdlZEluZGV4ICsgMSkge1xuXHRcdFx0XHRza2V3Kys7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAobWF0Y2hpbmdJbmRleCA+IHNrZXdlZEluZGV4KSB7XG5cdFx0XHRcdFx0c2tldy0tO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHNrZXcrKztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIE1vdmUgdGhpcyBWTm9kZSdzIERPTSBpZiB0aGUgb3JpZ2luYWwgaW5kZXggKG1hdGNoaW5nSW5kZXgpIGRvZXNuJ3Rcblx0XHRcdFx0Ly8gbWF0Y2ggdGhlIG5ldyBza2V3IGluZGV4IChpICsgbmV3IHNrZXcpXG5cdFx0XHRcdC8vIEluIHRoZSBmb3JtZXIgdHdvIGJyYW5jaGVzIHdlIGtub3cgdGhhdCBpdCBtYXRjaGVzIGFmdGVyIHNrZXdpbmdcblx0XHRcdFx0Y2hpbGRWTm9kZS5fZmxhZ3MgfD0gSU5TRVJUX1ZOT0RFO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIFJlbW92ZSByZW1haW5pbmcgb2xkQ2hpbGRyZW4gaWYgdGhlcmUgYXJlIGFueS4gTG9vcCBmb3J3YXJkcyBzbyB0aGF0IGFzIHdlXG5cdC8vIHVubW91bnQgRE9NIGZyb20gdGhlIGJlZ2lubmluZyBvZiB0aGUgb2xkQ2hpbGRyZW4sIHdlIGNhbiBhZGp1c3Qgb2xkRG9tIHRvXG5cdC8vIHBvaW50IHRvIHRoZSBuZXh0IGNoaWxkLCB3aGljaCBuZWVkcyB0byBiZSB0aGUgZmlyc3QgRE9NIG5vZGUgdGhhdCB3b24ndCBiZVxuXHQvLyB1bm1vdW50ZWQuXG5cdGlmIChyZW1haW5pbmdPbGRDaGlsZHJlbikge1xuXHRcdGZvciAoaSA9IDA7IGkgPCBvbGRDaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG5cdFx0XHRvbGRWTm9kZSA9IG9sZENoaWxkcmVuW2ldO1xuXHRcdFx0aWYgKG9sZFZOb2RlICE9IE5VTEwgJiYgKG9sZFZOb2RlLl9mbGFncyAmIE1BVENIRUQpID09IDApIHtcblx0XHRcdFx0aWYgKG9sZFZOb2RlLl9kb20gPT0gb2xkRG9tKSB7XG5cdFx0XHRcdFx0b2xkRG9tID0gZ2V0RG9tU2libGluZyhvbGRWTm9kZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR1bm1vdW50KG9sZFZOb2RlLCBvbGRWTm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIG9sZERvbTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge1ZOb2RlfSBwYXJlbnRWTm9kZVxuICogQHBhcmFtIHtQcmVhY3RFbGVtZW50fSBvbGREb21cbiAqIEBwYXJhbSB7UHJlYWN0RWxlbWVudH0gcGFyZW50RG9tXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHNob3VsZFBsYWNlXG4gKiBAcmV0dXJucyB7UHJlYWN0RWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gaW5zZXJ0KHBhcmVudFZOb2RlLCBvbGREb20sIHBhcmVudERvbSwgc2hvdWxkUGxhY2UpIHtcblx0Ly8gTm90ZTogVk5vZGVzIGluIG5lc3RlZCBzdXNwZW5kZWQgdHJlZXMgbWF5IGJlIG1pc3NpbmcgX2NoaWxkcmVuLlxuXG5cdGlmICh0eXBlb2YgcGFyZW50Vk5vZGUudHlwZSA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0bGV0IGNoaWxkcmVuID0gcGFyZW50Vk5vZGUuX2NoaWxkcmVuO1xuXHRcdGZvciAobGV0IGkgPSAwOyBjaGlsZHJlbiAmJiBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChjaGlsZHJlbltpXSkge1xuXHRcdFx0XHQvLyBJZiB3ZSBlbnRlciB0aGlzIGNvZGUgcGF0aCBvbiBzQ1UgYmFpbG91dCwgd2hlcmUgd2UgY29weVxuXHRcdFx0XHQvLyBvbGRWTm9kZS5fY2hpbGRyZW4gdG8gbmV3Vk5vZGUuX2NoaWxkcmVuLCB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgb2xkXG5cdFx0XHRcdC8vIGNoaWxkcmVuJ3MgX3BhcmVudCBwb2ludGVyIHRvIHBvaW50IHRvIHRoZSBuZXdWTm9kZSAocGFyZW50Vk5vZGVcblx0XHRcdFx0Ly8gaGVyZSkuXG5cdFx0XHRcdGNoaWxkcmVuW2ldLl9wYXJlbnQgPSBwYXJlbnRWTm9kZTtcblx0XHRcdFx0b2xkRG9tID0gaW5zZXJ0KGNoaWxkcmVuW2ldLCBvbGREb20sIHBhcmVudERvbSwgc2hvdWxkUGxhY2UpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBvbGREb207XG5cdH0gZWxzZSBpZiAocGFyZW50Vk5vZGUuX2RvbSAhPSBvbGREb20pIHtcblx0XHRpZiAoc2hvdWxkUGxhY2UpIHtcblx0XHRcdGlmIChvbGREb20gJiYgcGFyZW50Vk5vZGUudHlwZSAmJiAhb2xkRG9tLnBhcmVudE5vZGUpIHtcblx0XHRcdFx0b2xkRG9tID0gZ2V0RG9tU2libGluZyhwYXJlbnRWTm9kZSk7XG5cdFx0XHR9XG5cdFx0XHRwYXJlbnREb20uaW5zZXJ0QmVmb3JlKHBhcmVudFZOb2RlLl9kb20sIG9sZERvbSB8fCBOVUxMKTtcblx0XHR9XG5cdFx0b2xkRG9tID0gcGFyZW50Vk5vZGUuX2RvbTtcblx0fVxuXG5cdGRvIHtcblx0XHRvbGREb20gPSBvbGREb20gJiYgb2xkRG9tLm5leHRTaWJsaW5nO1xuXHR9IHdoaWxlIChvbGREb20gIT0gTlVMTCAmJiBvbGREb20ubm9kZVR5cGUgPT0gOCk7XG5cblx0cmV0dXJuIG9sZERvbTtcbn1cblxuLyoqXG4gKiBGbGF0dGVuIGFuZCBsb29wIHRocm91Z2ggdGhlIGNoaWxkcmVuIG9mIGEgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge0NvbXBvbmVudENoaWxkcmVufSBjaGlsZHJlbiBUaGUgdW5mbGF0dGVuZWQgY2hpbGRyZW4gb2YgYSB2aXJ0dWFsXG4gKiBub2RlXG4gKiBAcmV0dXJucyB7Vk5vZGVbXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvQ2hpbGRBcnJheShjaGlsZHJlbiwgb3V0KSB7XG5cdG91dCA9IG91dCB8fCBbXTtcblx0aWYgKGNoaWxkcmVuID09IE5VTEwgfHwgdHlwZW9mIGNoaWxkcmVuID09ICdib29sZWFuJykge1xuXHR9IGVsc2UgaWYgKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG5cdFx0Y2hpbGRyZW4uc29tZShjaGlsZCA9PiB7XG5cdFx0XHR0b0NoaWxkQXJyYXkoY2hpbGQsIG91dCk7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0b3V0LnB1c2goY2hpbGRyZW4pO1xuXHR9XG5cdHJldHVybiBvdXQ7XG59XG5cbi8qKlxuICogQHBhcmFtIHtWTm9kZX0gY2hpbGRWTm9kZVxuICogQHBhcmFtIHtWTm9kZVtdfSBvbGRDaGlsZHJlblxuICogQHBhcmFtIHtudW1iZXJ9IHNrZXdlZEluZGV4XG4gKiBAcGFyYW0ge251bWJlcn0gcmVtYWluaW5nT2xkQ2hpbGRyZW5cbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGZpbmRNYXRjaGluZ0luZGV4KFxuXHRjaGlsZFZOb2RlLFxuXHRvbGRDaGlsZHJlbixcblx0c2tld2VkSW5kZXgsXG5cdHJlbWFpbmluZ09sZENoaWxkcmVuXG4pIHtcblx0Y29uc3Qga2V5ID0gY2hpbGRWTm9kZS5rZXk7XG5cdGNvbnN0IHR5cGUgPSBjaGlsZFZOb2RlLnR5cGU7XG5cdGxldCBvbGRWTm9kZSA9IG9sZENoaWxkcmVuW3NrZXdlZEluZGV4XTtcblx0Y29uc3QgbWF0Y2hlZCA9IG9sZFZOb2RlICE9IE5VTEwgJiYgKG9sZFZOb2RlLl9mbGFncyAmIE1BVENIRUQpID09IDA7XG5cblx0Ly8gV2Ugb25seSBuZWVkIHRvIHBlcmZvcm0gYSBzZWFyY2ggaWYgdGhlcmUgYXJlIG1vcmUgY2hpbGRyZW5cblx0Ly8gKHJlbWFpbmluZ09sZENoaWxkcmVuKSB0byBzZWFyY2guIEhvd2V2ZXIsIGlmIHRoZSBvbGRWTm9kZSB3ZSBqdXN0IGxvb2tlZFxuXHQvLyBhdCBza2V3ZWRJbmRleCB3YXMgbm90IGFscmVhZHkgdXNlZCBpbiB0aGlzIGRpZmYsIHRoZW4gdGhlcmUgbXVzdCBiZSBhdFxuXHQvLyBsZWFzdCAxIG90aGVyIChzbyBncmVhdGVyIHRoYW4gMSkgcmVtYWluaW5nT2xkQ2hpbGRyZW4gdG8gYXR0ZW1wdCB0byBtYXRjaFxuXHQvLyBhZ2FpbnN0LiBTbyB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbiBjaGVja3MgdGhhdCBlbnN1cmluZ1xuXHQvLyByZW1haW5pbmdPbGRDaGlsZHJlbiA+IDEgaWYgdGhlIG9sZFZOb2RlIGlzIG5vdCBhbHJlYWR5IHVzZWQvbWF0Y2hlZC4gRWxzZVxuXHQvLyBpZiB0aGUgb2xkVk5vZGUgd2FzIG51bGwgb3IgbWF0Y2hlZCwgdGhlbiB0aGVyZSBjb3VsZCBuZWVkcyB0byBiZSBhdCBsZWFzdFxuXHQvLyAxIChha2EgYHJlbWFpbmluZ09sZENoaWxkcmVuID4gMGApIGNoaWxkcmVuIHRvIGZpbmQgYW5kIGNvbXBhcmUgYWdhaW5zdC5cblx0Ly9cblx0Ly8gSWYgdGhlcmUgaXMgYW4gdW5rZXllZCBmdW5jdGlvbmFsIFZOb2RlLCB0aGF0IGlzbid0IGEgYnVpbHQtaW4gbGlrZSBvdXIgRnJhZ21lbnQsXG5cdC8vIHdlIHNob3VsZCBub3Qgc2VhcmNoIGFzIHdlIHJpc2sgcmUtdXNpbmcgc3RhdGUgb2YgYW4gdW5yZWxhdGVkIFZOb2RlLiAocmV2ZXJ0ZWQgZm9yIG5vdylcblx0bGV0IHNob3VsZFNlYXJjaCA9XG5cdFx0Ly8gKHR5cGVvZiB0eXBlICE9ICdmdW5jdGlvbicgfHwgdHlwZSA9PT0gRnJhZ21lbnQgfHwga2V5KSAmJlxuXHRcdHJlbWFpbmluZ09sZENoaWxkcmVuID4gKG1hdGNoZWQgPyAxIDogMCk7XG5cblx0aWYgKFxuXHRcdChvbGRWTm9kZSA9PT0gTlVMTCAmJiBrZXkgPT0gbnVsbCkgfHxcblx0XHQobWF0Y2hlZCAmJiBrZXkgPT0gb2xkVk5vZGUua2V5ICYmIHR5cGUgPT0gb2xkVk5vZGUudHlwZSlcblx0KSB7XG5cdFx0cmV0dXJuIHNrZXdlZEluZGV4O1xuXHR9IGVsc2UgaWYgKHNob3VsZFNlYXJjaCkge1xuXHRcdGxldCB4ID0gc2tld2VkSW5kZXggLSAxO1xuXHRcdGxldCB5ID0gc2tld2VkSW5kZXggKyAxO1xuXHRcdHdoaWxlICh4ID49IDAgfHwgeSA8IG9sZENoaWxkcmVuLmxlbmd0aCkge1xuXHRcdFx0Y29uc3QgY2hpbGRJbmRleCA9IHggPj0gMCA/IHgtLSA6IHkrKztcblx0XHRcdG9sZFZOb2RlID0gb2xkQ2hpbGRyZW5bY2hpbGRJbmRleF07XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG9sZFZOb2RlICE9IE5VTEwgJiZcblx0XHRcdFx0KG9sZFZOb2RlLl9mbGFncyAmIE1BVENIRUQpID09IDAgJiZcblx0XHRcdFx0a2V5ID09IG9sZFZOb2RlLmtleSAmJlxuXHRcdFx0XHR0eXBlID09IG9sZFZOb2RlLnR5cGVcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm4gY2hpbGRJbmRleDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gLTE7XG59XG4iLCAiaW1wb3J0IHtcblx0RU1QVFlfQVJSLFxuXHRFTVBUWV9PQkosXG5cdE1BVEhfTkFNRVNQQUNFLFxuXHRNT0RFX0hZRFJBVEUsXG5cdE1PREVfU1VTUEVOREVELFxuXHROVUxMLFxuXHRSRVNFVF9NT0RFLFxuXHRTVkdfTkFNRVNQQUNFLFxuXHRVTkRFRklORUQsXG5cdFhIVE1MX05BTUVTUEFDRVxufSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCwgZ2V0RG9tU2libGluZyB9IGZyb20gJy4uL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJy4uL2NyZWF0ZS1lbGVtZW50JztcbmltcG9ydCB7IGRpZmZDaGlsZHJlbiB9IGZyb20gJy4vY2hpbGRyZW4nO1xuaW1wb3J0IHsgc2V0UHJvcGVydHkgfSBmcm9tICcuL3Byb3BzJztcbmltcG9ydCB7IGFzc2lnbiwgaXNBcnJheSwgcmVtb3ZlTm9kZSwgc2xpY2UgfSBmcm9tICcuLi91dGlsJztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4uL29wdGlvbnMnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2ludGVybmFsJykuQ29tcG9uZW50Q2hpbGRyZW59IENvbXBvbmVudENoaWxkcmVuXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gQ29tcG9uZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IFByZWFjdEVsZW1lbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IFZOb2RlXG4gKi9cblxuLyoqXG4gKiBAdGVtcGxhdGUge2FueX0gVFxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5SZWY8VD59IFJlZjxUPlxuICovXG5cbi8qKlxuICogRGlmZiB0d28gdmlydHVhbCBub2RlcyBhbmQgYXBwbHkgcHJvcGVyIGNoYW5nZXMgdG8gdGhlIERPTVxuICogQHBhcmFtIHtQcmVhY3RFbGVtZW50fSBwYXJlbnREb20gVGhlIHBhcmVudCBvZiB0aGUgRE9NIGVsZW1lbnRcbiAqIEBwYXJhbSB7Vk5vZGV9IG5ld1ZOb2RlIFRoZSBuZXcgdmlydHVhbCBub2RlXG4gKiBAcGFyYW0ge1ZOb2RlfSBvbGRWTm9kZSBUaGUgb2xkIHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtvYmplY3R9IGdsb2JhbENvbnRleHQgVGhlIGN1cnJlbnQgY29udGV4dCBvYmplY3QuIE1vZGlmaWVkIGJ5XG4gKiBnZXRDaGlsZENvbnRleHRcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lc3BhY2UgQ3VycmVudCBuYW1lc3BhY2Ugb2YgdGhlIERPTSBub2RlIChIVE1MLCBTVkcsIG9yIE1hdGhNTClcbiAqIEBwYXJhbSB7QXJyYXk8UHJlYWN0RWxlbWVudD59IGV4Y2Vzc0RvbUNoaWxkcmVuXG4gKiBAcGFyYW0ge0FycmF5PENvbXBvbmVudD59IGNvbW1pdFF1ZXVlIExpc3Qgb2YgY29tcG9uZW50cyB3aGljaCBoYXZlIGNhbGxiYWNrc1xuICogdG8gaW52b2tlIGluIGNvbW1pdFJvb3RcbiAqIEBwYXJhbSB7UHJlYWN0RWxlbWVudH0gb2xkRG9tIFRoZSBjdXJyZW50IGF0dGFjaGVkIERPTSBlbGVtZW50IGFueSBuZXcgZG9tXG4gKiBlbGVtZW50cyBzaG91bGQgYmUgcGxhY2VkIGFyb3VuZC4gTGlrZWx5IGBudWxsYCBvbiBmaXJzdCByZW5kZXIgKGV4Y2VwdCB3aGVuXG4gKiBoeWRyYXRpbmcpLiBDYW4gYmUgYSBzaWJsaW5nIERPTSBlbGVtZW50IHdoZW4gZGlmZmluZyBGcmFnbWVudHMgdGhhdCBoYXZlXG4gKiBzaWJsaW5ncy4gSW4gbW9zdCBjYXNlcywgaXQgc3RhcnRzIG91dCBhcyBgb2xkQ2hpbGRyZW5bMF0uX2RvbWAuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzSHlkcmF0aW5nIFdoZXRoZXIgb3Igbm90IHdlIGFyZSBpbiBoeWRyYXRpb25cbiAqIEBwYXJhbSB7YW55W119IHJlZlF1ZXVlIGFuIGFycmF5IG9mIGVsZW1lbnRzIG5lZWRlZCB0byBpbnZva2UgcmVmc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZihcblx0cGFyZW50RG9tLFxuXHRuZXdWTm9kZSxcblx0b2xkVk5vZGUsXG5cdGdsb2JhbENvbnRleHQsXG5cdG5hbWVzcGFjZSxcblx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdGNvbW1pdFF1ZXVlLFxuXHRvbGREb20sXG5cdGlzSHlkcmF0aW5nLFxuXHRyZWZRdWV1ZVxuKSB7XG5cdC8qKiBAdHlwZSB7YW55fSAqL1xuXHRsZXQgdG1wLFxuXHRcdG5ld1R5cGUgPSBuZXdWTm9kZS50eXBlO1xuXG5cdC8vIFdoZW4gcGFzc2luZyB0aHJvdWdoIGNyZWF0ZUVsZW1lbnQgaXQgYXNzaWducyB0aGUgb2JqZWN0XG5cdC8vIGNvbnN0cnVjdG9yIGFzIHVuZGVmaW5lZC4gVGhpcyB0byBwcmV2ZW50IEpTT04taW5qZWN0aW9uLlxuXHRpZiAobmV3Vk5vZGUuY29uc3RydWN0b3IgIT09IFVOREVGSU5FRCkgcmV0dXJuIE5VTEw7XG5cblx0Ly8gSWYgdGhlIHByZXZpb3VzIGRpZmYgYmFpbGVkIG91dCwgcmVzdW1lIGNyZWF0aW5nL2h5ZHJhdGluZy5cblx0aWYgKG9sZFZOb2RlLl9mbGFncyAmIE1PREVfU1VTUEVOREVEKSB7XG5cdFx0aXNIeWRyYXRpbmcgPSAhIShvbGRWTm9kZS5fZmxhZ3MgJiBNT0RFX0hZRFJBVEUpO1xuXHRcdG9sZERvbSA9IG5ld1ZOb2RlLl9kb20gPSBvbGRWTm9kZS5fZG9tO1xuXHRcdGV4Y2Vzc0RvbUNoaWxkcmVuID0gW29sZERvbV07XG5cdH1cblxuXHRpZiAoKHRtcCA9IG9wdGlvbnMuX2RpZmYpKSB0bXAobmV3Vk5vZGUpO1xuXG5cdG91dGVyOiBpZiAodHlwZW9mIG5ld1R5cGUgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdGxldCBvbGRDb21taXRRdWV1ZUxlbmd0aCA9IGNvbW1pdFF1ZXVlLmxlbmd0aDtcblx0XHR0cnkge1xuXHRcdFx0bGV0IGMsIGlzTmV3LCBvbGRQcm9wcywgb2xkU3RhdGUsIHNuYXBzaG90LCBjbGVhclByb2Nlc3NpbmdFeGNlcHRpb247XG5cdFx0XHRsZXQgbmV3UHJvcHMgPSBuZXdWTm9kZS5wcm9wcztcblx0XHRcdGNvbnN0IGlzQ2xhc3NDb21wb25lbnQgPSBuZXdUeXBlLnByb3RvdHlwZSAmJiBuZXdUeXBlLnByb3RvdHlwZS5yZW5kZXI7XG5cblx0XHRcdC8vIE5lY2Vzc2FyeSBmb3IgY3JlYXRlQ29udGV4dCBhcGkuIFNldHRpbmcgdGhpcyBwcm9wZXJ0eSB3aWxsIHBhc3Ncblx0XHRcdC8vIHRoZSBjb250ZXh0IHZhbHVlIGFzIGB0aGlzLmNvbnRleHRgIGp1c3QgZm9yIHRoaXMgY29tcG9uZW50LlxuXHRcdFx0dG1wID0gbmV3VHlwZS5jb250ZXh0VHlwZTtcblx0XHRcdGxldCBwcm92aWRlciA9IHRtcCAmJiBnbG9iYWxDb250ZXh0W3RtcC5faWRdO1xuXHRcdFx0bGV0IGNvbXBvbmVudENvbnRleHQgPSB0bXBcblx0XHRcdFx0PyBwcm92aWRlclxuXHRcdFx0XHRcdD8gcHJvdmlkZXIucHJvcHMudmFsdWVcblx0XHRcdFx0XHQ6IHRtcC5fZGVmYXVsdFZhbHVlXG5cdFx0XHRcdDogZ2xvYmFsQ29udGV4dDtcblxuXHRcdFx0Ly8gR2V0IGNvbXBvbmVudCBhbmQgc2V0IGl0IHRvIGBjYFxuXHRcdFx0aWYgKG9sZFZOb2RlLl9jb21wb25lbnQpIHtcblx0XHRcdFx0YyA9IG5ld1ZOb2RlLl9jb21wb25lbnQgPSBvbGRWTm9kZS5fY29tcG9uZW50O1xuXHRcdFx0XHRjbGVhclByb2Nlc3NpbmdFeGNlcHRpb24gPSBjLl9wcm9jZXNzaW5nRXhjZXB0aW9uID0gYy5fcGVuZGluZ0Vycm9yO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gSW5zdGFudGlhdGUgdGhlIG5ldyBjb21wb25lbnRcblx0XHRcdFx0aWYgKGlzQ2xhc3NDb21wb25lbnQpIHtcblx0XHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRoZSBjaGVjayBhYm92ZSB2ZXJpZmllcyB0aGF0IG5ld1R5cGUgaXMgc3VwcG9zZSB0byBiZSBjb25zdHJ1Y3RlZFxuXHRcdFx0XHRcdG5ld1ZOb2RlLl9jb21wb25lbnQgPSBjID0gbmV3IG5ld1R5cGUobmV3UHJvcHMsIGNvbXBvbmVudENvbnRleHQpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5ldy1jYXBcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRydXN0IG1lLCBDb21wb25lbnQgaW1wbGVtZW50cyB0aGUgaW50ZXJmYWNlIHdlIHdhbnRcblx0XHRcdFx0XHRuZXdWTm9kZS5fY29tcG9uZW50ID0gYyA9IG5ldyBCYXNlQ29tcG9uZW50KFxuXHRcdFx0XHRcdFx0bmV3UHJvcHMsXG5cdFx0XHRcdFx0XHRjb21wb25lbnRDb250ZXh0XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRjLmNvbnN0cnVjdG9yID0gbmV3VHlwZTtcblx0XHRcdFx0XHRjLnJlbmRlciA9IGRvUmVuZGVyO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChwcm92aWRlcikgcHJvdmlkZXIuc3ViKGMpO1xuXG5cdFx0XHRcdGlmICghYy5zdGF0ZSkgYy5zdGF0ZSA9IHt9O1xuXHRcdFx0XHRjLl9nbG9iYWxDb250ZXh0ID0gZ2xvYmFsQ29udGV4dDtcblx0XHRcdFx0aXNOZXcgPSBjLl9kaXJ0eSA9IHRydWU7XG5cdFx0XHRcdGMuX3JlbmRlckNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0XHRjLl9zdGF0ZUNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJbnZva2UgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXG5cdFx0XHRpZiAoaXNDbGFzc0NvbXBvbmVudCAmJiBjLl9uZXh0U3RhdGUgPT0gTlVMTCkge1xuXHRcdFx0XHRjLl9uZXh0U3RhdGUgPSBjLnN0YXRlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaXNDbGFzc0NvbXBvbmVudCAmJiBuZXdUeXBlLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyAhPSBOVUxMKSB7XG5cdFx0XHRcdGlmIChjLl9uZXh0U3RhdGUgPT0gYy5zdGF0ZSkge1xuXHRcdFx0XHRcdGMuX25leHRTdGF0ZSA9IGFzc2lnbih7fSwgYy5fbmV4dFN0YXRlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGFzc2lnbihcblx0XHRcdFx0XHRjLl9uZXh0U3RhdGUsXG5cdFx0XHRcdFx0bmV3VHlwZS5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV3UHJvcHMsIGMuX25leHRTdGF0ZSlcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0b2xkUHJvcHMgPSBjLnByb3BzO1xuXHRcdFx0b2xkU3RhdGUgPSBjLnN0YXRlO1xuXHRcdFx0Yy5fdm5vZGUgPSBuZXdWTm9kZTtcblxuXHRcdFx0Ly8gSW52b2tlIHByZS1yZW5kZXIgbGlmZWN5Y2xlIG1ldGhvZHNcblx0XHRcdGlmIChpc05ldykge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0aXNDbGFzc0NvbXBvbmVudCAmJlxuXHRcdFx0XHRcdG5ld1R5cGUuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID09IE5VTEwgJiZcblx0XHRcdFx0XHRjLmNvbXBvbmVudFdpbGxNb3VudCAhPSBOVUxMXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdGMuY29tcG9uZW50V2lsbE1vdW50KCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoaXNDbGFzc0NvbXBvbmVudCAmJiBjLmNvbXBvbmVudERpZE1vdW50ICE9IE5VTEwpIHtcblx0XHRcdFx0XHRjLl9yZW5kZXJDYWxsYmFja3MucHVzaChjLmNvbXBvbmVudERpZE1vdW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdGlzQ2xhc3NDb21wb25lbnQgJiZcblx0XHRcdFx0XHRuZXdUeXBlLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9PSBOVUxMICYmXG5cdFx0XHRcdFx0bmV3UHJvcHMgIT09IG9sZFByb3BzICYmXG5cdFx0XHRcdFx0Yy5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzICE9IE5VTExcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Yy5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5ld1Byb3BzLCBjb21wb25lbnRDb250ZXh0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRuZXdWTm9kZS5fb3JpZ2luYWwgPT0gb2xkVk5vZGUuX29yaWdpbmFsIHx8XG5cdFx0XHRcdFx0KCFjLl9mb3JjZSAmJlxuXHRcdFx0XHRcdFx0Yy5zaG91bGRDb21wb25lbnRVcGRhdGUgIT0gTlVMTCAmJlxuXHRcdFx0XHRcdFx0Yy5zaG91bGRDb21wb25lbnRVcGRhdGUoXG5cdFx0XHRcdFx0XHRcdG5ld1Byb3BzLFxuXHRcdFx0XHRcdFx0XHRjLl9uZXh0U3RhdGUsXG5cdFx0XHRcdFx0XHRcdGNvbXBvbmVudENvbnRleHRcblx0XHRcdFx0XHRcdCkgPT09IGZhbHNlKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHQvLyBNb3JlIGluZm8gYWJvdXQgdGhpcyBoZXJlOiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9Kb3ZpRGVDcm9vY2svYmVjNWYyY2U5MzU0NGQyZTYwNzBlZjhlMDAzNmU0ZThcblx0XHRcdFx0XHRpZiAobmV3Vk5vZGUuX29yaWdpbmFsICE9IG9sZFZOb2RlLl9vcmlnaW5hbCkge1xuXHRcdFx0XHRcdFx0Ly8gV2hlbiB3ZSBhcmUgZGVhbGluZyB3aXRoIGEgYmFpbCBiZWNhdXNlIG9mIHNDVSB3ZSBoYXZlIHRvIHVwZGF0ZVxuXHRcdFx0XHRcdFx0Ly8gdGhlIHByb3BzLCBzdGF0ZSBhbmQgZGlydHktc3RhdGUuXG5cdFx0XHRcdFx0XHQvLyB3aGVuIHdlIGFyZSBkZWFsaW5nIHdpdGggc3RyaWN0LWVxdWFsaXR5IHdlIGRvbid0IGFzIHRoZSBjaGlsZCBjb3VsZCBzdGlsbFxuXHRcdFx0XHRcdFx0Ly8gYmUgZGlydGllZCBzZWUgIzM4ODNcblx0XHRcdFx0XHRcdGMucHJvcHMgPSBuZXdQcm9wcztcblx0XHRcdFx0XHRcdGMuc3RhdGUgPSBjLl9uZXh0U3RhdGU7XG5cdFx0XHRcdFx0XHRjLl9kaXJ0eSA9IGZhbHNlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdG5ld1ZOb2RlLl9kb20gPSBvbGRWTm9kZS5fZG9tO1xuXHRcdFx0XHRcdG5ld1ZOb2RlLl9jaGlsZHJlbiA9IG9sZFZOb2RlLl9jaGlsZHJlbjtcblx0XHRcdFx0XHRuZXdWTm9kZS5fY2hpbGRyZW4uc29tZSh2bm9kZSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAodm5vZGUpIHZub2RlLl9wYXJlbnQgPSBuZXdWTm9kZTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdEVNUFRZX0FSUi5wdXNoLmFwcGx5KGMuX3JlbmRlckNhbGxiYWNrcywgYy5fc3RhdGVDYWxsYmFja3MpO1xuXHRcdFx0XHRcdGMuX3N0YXRlQ2FsbGJhY2tzID0gW107XG5cblx0XHRcdFx0XHRpZiAoYy5fcmVuZGVyQ2FsbGJhY2tzLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0Y29tbWl0UXVldWUucHVzaChjKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRicmVhayBvdXRlcjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChjLmNvbXBvbmVudFdpbGxVcGRhdGUgIT0gTlVMTCkge1xuXHRcdFx0XHRcdGMuY29tcG9uZW50V2lsbFVwZGF0ZShuZXdQcm9wcywgYy5fbmV4dFN0YXRlLCBjb21wb25lbnRDb250ZXh0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChpc0NsYXNzQ29tcG9uZW50ICYmIGMuY29tcG9uZW50RGlkVXBkYXRlICE9IE5VTEwpIHtcblx0XHRcdFx0XHRjLl9yZW5kZXJDYWxsYmFja3MucHVzaCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRjLmNvbXBvbmVudERpZFVwZGF0ZShvbGRQcm9wcywgb2xkU3RhdGUsIHNuYXBzaG90KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRjLmNvbnRleHQgPSBjb21wb25lbnRDb250ZXh0O1xuXHRcdFx0Yy5wcm9wcyA9IG5ld1Byb3BzO1xuXHRcdFx0Yy5fcGFyZW50RG9tID0gcGFyZW50RG9tO1xuXHRcdFx0Yy5fZm9yY2UgPSBmYWxzZTtcblxuXHRcdFx0bGV0IHJlbmRlckhvb2sgPSBvcHRpb25zLl9yZW5kZXIsXG5cdFx0XHRcdGNvdW50ID0gMDtcblx0XHRcdGlmIChpc0NsYXNzQ29tcG9uZW50KSB7XG5cdFx0XHRcdGMuc3RhdGUgPSBjLl9uZXh0U3RhdGU7XG5cdFx0XHRcdGMuX2RpcnR5ID0gZmFsc2U7XG5cblx0XHRcdFx0aWYgKHJlbmRlckhvb2spIHJlbmRlckhvb2sobmV3Vk5vZGUpO1xuXG5cdFx0XHRcdHRtcCA9IGMucmVuZGVyKGMucHJvcHMsIGMuc3RhdGUsIGMuY29udGV4dCk7XG5cblx0XHRcdFx0RU1QVFlfQVJSLnB1c2guYXBwbHkoYy5fcmVuZGVyQ2FsbGJhY2tzLCBjLl9zdGF0ZUNhbGxiYWNrcyk7XG5cdFx0XHRcdGMuX3N0YXRlQ2FsbGJhY2tzID0gW107XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkbyB7XG5cdFx0XHRcdFx0Yy5fZGlydHkgPSBmYWxzZTtcblx0XHRcdFx0XHRpZiAocmVuZGVySG9vaykgcmVuZGVySG9vayhuZXdWTm9kZSk7XG5cblx0XHRcdFx0XHR0bXAgPSBjLnJlbmRlcihjLnByb3BzLCBjLnN0YXRlLCBjLmNvbnRleHQpO1xuXG5cdFx0XHRcdFx0Ly8gSGFuZGxlIHNldFN0YXRlIGNhbGxlZCBpbiByZW5kZXIsIHNlZSAjMjU1M1xuXHRcdFx0XHRcdGMuc3RhdGUgPSBjLl9uZXh0U3RhdGU7XG5cdFx0XHRcdH0gd2hpbGUgKGMuX2RpcnR5ICYmICsrY291bnQgPCAyNSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEhhbmRsZSBzZXRTdGF0ZSBjYWxsZWQgaW4gcmVuZGVyLCBzZWUgIzI1NTNcblx0XHRcdGMuc3RhdGUgPSBjLl9uZXh0U3RhdGU7XG5cblx0XHRcdGlmIChjLmdldENoaWxkQ29udGV4dCAhPSBOVUxMKSB7XG5cdFx0XHRcdGdsb2JhbENvbnRleHQgPSBhc3NpZ24oYXNzaWduKHt9LCBnbG9iYWxDb250ZXh0KSwgYy5nZXRDaGlsZENvbnRleHQoKSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpc0NsYXNzQ29tcG9uZW50ICYmICFpc05ldyAmJiBjLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlICE9IE5VTEwpIHtcblx0XHRcdFx0c25hcHNob3QgPSBjLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKG9sZFByb3BzLCBvbGRTdGF0ZSk7XG5cdFx0XHR9XG5cblx0XHRcdGxldCByZW5kZXJSZXN1bHQgPVxuXHRcdFx0XHR0bXAgIT0gTlVMTCAmJiB0bXAudHlwZSA9PT0gRnJhZ21lbnQgJiYgdG1wLmtleSA9PSBOVUxMXG5cdFx0XHRcdFx0PyBjbG9uZU5vZGUodG1wLnByb3BzLmNoaWxkcmVuKVxuXHRcdFx0XHRcdDogdG1wO1xuXG5cdFx0XHRvbGREb20gPSBkaWZmQ2hpbGRyZW4oXG5cdFx0XHRcdHBhcmVudERvbSxcblx0XHRcdFx0aXNBcnJheShyZW5kZXJSZXN1bHQpID8gcmVuZGVyUmVzdWx0IDogW3JlbmRlclJlc3VsdF0sXG5cdFx0XHRcdG5ld1ZOb2RlLFxuXHRcdFx0XHRvbGRWTm9kZSxcblx0XHRcdFx0Z2xvYmFsQ29udGV4dCxcblx0XHRcdFx0bmFtZXNwYWNlLFxuXHRcdFx0XHRleGNlc3NEb21DaGlsZHJlbixcblx0XHRcdFx0Y29tbWl0UXVldWUsXG5cdFx0XHRcdG9sZERvbSxcblx0XHRcdFx0aXNIeWRyYXRpbmcsXG5cdFx0XHRcdHJlZlF1ZXVlXG5cdFx0XHQpO1xuXG5cdFx0XHRjLmJhc2UgPSBuZXdWTm9kZS5fZG9tO1xuXG5cdFx0XHQvLyBXZSBzdWNjZXNzZnVsbHkgcmVuZGVyZWQgdGhpcyBWTm9kZSwgdW5zZXQgYW55IHN0b3JlZCBoeWRyYXRpb24vYmFpbG91dCBzdGF0ZTpcblx0XHRcdG5ld1ZOb2RlLl9mbGFncyAmPSBSRVNFVF9NT0RFO1xuXG5cdFx0XHRpZiAoYy5fcmVuZGVyQ2FsbGJhY2tzLmxlbmd0aCkge1xuXHRcdFx0XHRjb21taXRRdWV1ZS5wdXNoKGMpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY2xlYXJQcm9jZXNzaW5nRXhjZXB0aW9uKSB7XG5cdFx0XHRcdGMuX3BlbmRpbmdFcnJvciA9IGMuX3Byb2Nlc3NpbmdFeGNlcHRpb24gPSBOVUxMO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdC8vIFdlIHJlbW92ZSBhbnkgY29tcG9uZW50RGlkTW91bnQsIC4uLlxuXHRcdFx0Ly8gdGhhdCBoYXZlIGJlZW4gaW52YWxpZGF0ZWQgYnkgdXNcblx0XHRcdC8vIGludGVyY2VwdGluZyB0aGUgZXJyb3IuXG5cdFx0XHRjb21taXRRdWV1ZS5sZW5ndGggPSBvbGRDb21taXRRdWV1ZUxlbmd0aDtcblx0XHRcdG5ld1ZOb2RlLl9vcmlnaW5hbCA9IE5VTEw7XG5cdFx0XHQvLyBpZiBoeWRyYXRpbmcgb3IgY3JlYXRpbmcgaW5pdGlhbCB0cmVlLCBiYWlsb3V0IHByZXNlcnZlcyBET006XG5cdFx0XHRpZiAoaXNIeWRyYXRpbmcgfHwgZXhjZXNzRG9tQ2hpbGRyZW4gIT0gTlVMTCkge1xuXHRcdFx0XHRpZiAoZS50aGVuKSB7XG5cdFx0XHRcdFx0bmV3Vk5vZGUuX2ZsYWdzIHw9IGlzSHlkcmF0aW5nXG5cdFx0XHRcdFx0XHQ/IE1PREVfSFlEUkFURSB8IE1PREVfU1VTUEVOREVEXG5cdFx0XHRcdFx0XHQ6IE1PREVfU1VTUEVOREVEO1xuXG5cdFx0XHRcdFx0d2hpbGUgKG9sZERvbSAmJiBvbGREb20ubm9kZVR5cGUgPT0gOCAmJiBvbGREb20ubmV4dFNpYmxpbmcpIHtcblx0XHRcdFx0XHRcdG9sZERvbSA9IG9sZERvbS5uZXh0U2libGluZztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoZXhjZXNzRG9tQ2hpbGRyZW4gIT0gTlVMTCkge1xuXHRcdFx0XHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW5bZXhjZXNzRG9tQ2hpbGRyZW4uaW5kZXhPZihvbGREb20pXSA9IE5VTEw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG5ld1ZOb2RlLl9kb20gPSBvbGREb207XG5cdFx0XHRcdH0gZWxzZSBpZiAoZXhjZXNzRG9tQ2hpbGRyZW4gIT0gTlVMTCkge1xuXHRcdFx0XHRcdGZvciAobGV0IGkgPSBleGNlc3NEb21DaGlsZHJlbi5sZW5ndGg7IGktLTsgKSB7XG5cdFx0XHRcdFx0XHRyZW1vdmVOb2RlKGV4Y2Vzc0RvbUNoaWxkcmVuW2ldKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG5ld1ZOb2RlLl9kb20gPSBvbGRWTm9kZS5fZG9tO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAobmV3Vk5vZGUuX2NoaWxkcmVuID09IE5VTEwpIHtcblx0XHRcdFx0bmV3Vk5vZGUuX2NoaWxkcmVuID0gb2xkVk5vZGUuX2NoaWxkcmVuIHx8IFtdO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIWUudGhlbikgbWFya0FzRm9yY2UobmV3Vk5vZGUpO1xuXHRcdFx0b3B0aW9ucy5fY2F0Y2hFcnJvcihlLCBuZXdWTm9kZSwgb2xkVk5vZGUpO1xuXHRcdH1cblx0fSBlbHNlIGlmIChcblx0XHRleGNlc3NEb21DaGlsZHJlbiA9PSBOVUxMICYmXG5cdFx0bmV3Vk5vZGUuX29yaWdpbmFsID09IG9sZFZOb2RlLl9vcmlnaW5hbFxuXHQpIHtcblx0XHRuZXdWTm9kZS5fY2hpbGRyZW4gPSBvbGRWTm9kZS5fY2hpbGRyZW47XG5cdFx0bmV3Vk5vZGUuX2RvbSA9IG9sZFZOb2RlLl9kb207XG5cdH0gZWxzZSB7XG5cdFx0b2xkRG9tID0gbmV3Vk5vZGUuX2RvbSA9IGRpZmZFbGVtZW50Tm9kZXMoXG5cdFx0XHRvbGRWTm9kZS5fZG9tLFxuXHRcdFx0bmV3Vk5vZGUsXG5cdFx0XHRvbGRWTm9kZSxcblx0XHRcdGdsb2JhbENvbnRleHQsXG5cdFx0XHRuYW1lc3BhY2UsXG5cdFx0XHRleGNlc3NEb21DaGlsZHJlbixcblx0XHRcdGNvbW1pdFF1ZXVlLFxuXHRcdFx0aXNIeWRyYXRpbmcsXG5cdFx0XHRyZWZRdWV1ZVxuXHRcdCk7XG5cdH1cblxuXHRpZiAoKHRtcCA9IG9wdGlvbnMuZGlmZmVkKSkgdG1wKG5ld1ZOb2RlKTtcblxuXHRyZXR1cm4gbmV3Vk5vZGUuX2ZsYWdzICYgTU9ERV9TVVNQRU5ERUQgPyB1bmRlZmluZWQgOiBvbGREb207XG59XG5cbmZ1bmN0aW9uIG1hcmtBc0ZvcmNlKHZub2RlKSB7XG5cdGlmICh2bm9kZSkge1xuXHRcdGlmICh2bm9kZS5fY29tcG9uZW50KSB2bm9kZS5fY29tcG9uZW50Ll9mb3JjZSA9IHRydWU7XG5cdFx0aWYgKHZub2RlLl9jaGlsZHJlbikgdm5vZGUuX2NoaWxkcmVuLnNvbWUobWFya0FzRm9yY2UpO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtIHtBcnJheTxDb21wb25lbnQ+fSBjb21taXRRdWV1ZSBMaXN0IG9mIGNvbXBvbmVudHNcbiAqIHdoaWNoIGhhdmUgY2FsbGJhY2tzIHRvIGludm9rZSBpbiBjb21taXRSb290XG4gKiBAcGFyYW0ge1ZOb2RlfSByb290XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21taXRSb290KGNvbW1pdFF1ZXVlLCByb290LCByZWZRdWV1ZSkge1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHJlZlF1ZXVlLmxlbmd0aDsgaSsrKSB7XG5cdFx0YXBwbHlSZWYocmVmUXVldWVbaV0sIHJlZlF1ZXVlWysraV0sIHJlZlF1ZXVlWysraV0pO1xuXHR9XG5cblx0aWYgKG9wdGlvbnMuX2NvbW1pdCkgb3B0aW9ucy5fY29tbWl0KHJvb3QsIGNvbW1pdFF1ZXVlKTtcblxuXHRjb21taXRRdWV1ZS5zb21lKGMgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFJldXNlIHRoZSBjb21taXRRdWV1ZSB2YXJpYWJsZSBoZXJlIHNvIHRoZSB0eXBlIGNoYW5nZXNcblx0XHRcdGNvbW1pdFF1ZXVlID0gYy5fcmVuZGVyQ2FsbGJhY2tzO1xuXHRcdFx0Yy5fcmVuZGVyQ2FsbGJhY2tzID0gW107XG5cdFx0XHRjb21taXRRdWV1ZS5zb21lKGNiID0+IHtcblx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBTZWUgYWJvdmUgY29tbWVudCBvbiBjb21taXRRdWV1ZVxuXHRcdFx0XHRjYi5jYWxsKGMpO1xuXHRcdFx0fSk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0b3B0aW9ucy5fY2F0Y2hFcnJvcihlLCBjLl92bm9kZSk7XG5cdFx0fVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gY2xvbmVOb2RlKG5vZGUpIHtcblx0aWYgKHR5cGVvZiBub2RlICE9ICdvYmplY3QnIHx8IG5vZGUgPT0gTlVMTCB8fCBub2RlLl9kZXB0aCA+IDApIHtcblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdGlmIChpc0FycmF5KG5vZGUpKSB7XG5cdFx0cmV0dXJuIG5vZGUubWFwKGNsb25lTm9kZSk7XG5cdH1cblxuXHRpZiAobm9kZS5jb25zdHJ1Y3RvciAhPT0gVU5ERUZJTkVEKSByZXR1cm4gbnVsbDtcblxuXHRyZXR1cm4gYXNzaWduKHt9LCBub2RlKTtcbn1cblxuLyoqXG4gKiBEaWZmIHR3byB2aXJ0dWFsIG5vZGVzIHJlcHJlc2VudGluZyBET00gZWxlbWVudFxuICogQHBhcmFtIHtQcmVhY3RFbGVtZW50fSBkb20gVGhlIERPTSBlbGVtZW50IHJlcHJlc2VudGluZyB0aGUgdmlydHVhbCBub2Rlc1xuICogYmVpbmcgZGlmZmVkXG4gKiBAcGFyYW0ge1ZOb2RlfSBuZXdWTm9kZSBUaGUgbmV3IHZpcnR1YWwgbm9kZVxuICogQHBhcmFtIHtWTm9kZX0gb2xkVk5vZGUgVGhlIG9sZCB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBnbG9iYWxDb250ZXh0IFRoZSBjdXJyZW50IGNvbnRleHQgb2JqZWN0XG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZXNwYWNlIEN1cnJlbnQgbmFtZXNwYWNlIG9mIHRoZSBET00gbm9kZSAoSFRNTCwgU1ZHLCBvciBNYXRoTUwpXG4gKiBAcGFyYW0ge0FycmF5PFByZWFjdEVsZW1lbnQ+fSBleGNlc3NEb21DaGlsZHJlblxuICogQHBhcmFtIHtBcnJheTxDb21wb25lbnQ+fSBjb21taXRRdWV1ZSBMaXN0IG9mIGNvbXBvbmVudHMgd2hpY2ggaGF2ZSBjYWxsYmFja3NcbiAqIHRvIGludm9rZSBpbiBjb21taXRSb290XG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzSHlkcmF0aW5nIFdoZXRoZXIgb3Igbm90IHdlIGFyZSBpbiBoeWRyYXRpb25cbiAqIEBwYXJhbSB7YW55W119IHJlZlF1ZXVlIGFuIGFycmF5IG9mIGVsZW1lbnRzIG5lZWRlZCB0byBpbnZva2UgcmVmc1xuICogQHJldHVybnMge1ByZWFjdEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGRpZmZFbGVtZW50Tm9kZXMoXG5cdGRvbSxcblx0bmV3Vk5vZGUsXG5cdG9sZFZOb2RlLFxuXHRnbG9iYWxDb250ZXh0LFxuXHRuYW1lc3BhY2UsXG5cdGV4Y2Vzc0RvbUNoaWxkcmVuLFxuXHRjb21taXRRdWV1ZSxcblx0aXNIeWRyYXRpbmcsXG5cdHJlZlF1ZXVlXG4pIHtcblx0bGV0IG9sZFByb3BzID0gb2xkVk5vZGUucHJvcHMgfHwgRU1QVFlfT0JKO1xuXHRsZXQgbmV3UHJvcHMgPSBuZXdWTm9kZS5wcm9wcztcblx0bGV0IG5vZGVUeXBlID0gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChuZXdWTm9kZS50eXBlKTtcblx0LyoqIEB0eXBlIHthbnl9ICovXG5cdGxldCBpO1xuXHQvKiogQHR5cGUge3sgX19odG1sPzogc3RyaW5nIH19ICovXG5cdGxldCBuZXdIdG1sO1xuXHQvKiogQHR5cGUge3sgX19odG1sPzogc3RyaW5nIH19ICovXG5cdGxldCBvbGRIdG1sO1xuXHQvKiogQHR5cGUge0NvbXBvbmVudENoaWxkcmVufSAqL1xuXHRsZXQgbmV3Q2hpbGRyZW47XG5cdGxldCB2YWx1ZTtcblx0bGV0IGlucHV0VmFsdWU7XG5cdGxldCBjaGVja2VkO1xuXG5cdC8vIFRyYWNrcyBlbnRlcmluZyBhbmQgZXhpdGluZyBuYW1lc3BhY2VzIHdoZW4gZGVzY2VuZGluZyB0aHJvdWdoIHRoZSB0cmVlLlxuXHRpZiAobm9kZVR5cGUgPT0gJ3N2ZycpIG5hbWVzcGFjZSA9IFNWR19OQU1FU1BBQ0U7XG5cdGVsc2UgaWYgKG5vZGVUeXBlID09ICdtYXRoJykgbmFtZXNwYWNlID0gTUFUSF9OQU1FU1BBQ0U7XG5cdGVsc2UgaWYgKCFuYW1lc3BhY2UpIG5hbWVzcGFjZSA9IFhIVE1MX05BTUVTUEFDRTtcblxuXHRpZiAoZXhjZXNzRG9tQ2hpbGRyZW4gIT0gTlVMTCkge1xuXHRcdGZvciAoaSA9IDA7IGkgPCBleGNlc3NEb21DaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFsdWUgPSBleGNlc3NEb21DaGlsZHJlbltpXTtcblxuXHRcdFx0Ly8gaWYgbmV3Vk5vZGUgbWF0Y2hlcyBhbiBlbGVtZW50IGluIGV4Y2Vzc0RvbUNoaWxkcmVuIG9yIHRoZSBgZG9tYFxuXHRcdFx0Ly8gYXJndW1lbnQgbWF0Y2hlcyBhbiBlbGVtZW50IGluIGV4Y2Vzc0RvbUNoaWxkcmVuLCByZW1vdmUgaXQgZnJvbVxuXHRcdFx0Ly8gZXhjZXNzRG9tQ2hpbGRyZW4gc28gaXQgaXNuJ3QgbGF0ZXIgcmVtb3ZlZCBpbiBkaWZmQ2hpbGRyZW5cblx0XHRcdGlmIChcblx0XHRcdFx0dmFsdWUgJiZcblx0XHRcdFx0J3NldEF0dHJpYnV0ZScgaW4gdmFsdWUgPT0gISFub2RlVHlwZSAmJlxuXHRcdFx0XHQobm9kZVR5cGUgPyB2YWx1ZS5sb2NhbE5hbWUgPT0gbm9kZVR5cGUgOiB2YWx1ZS5ub2RlVHlwZSA9PSAzKVxuXHRcdFx0KSB7XG5cdFx0XHRcdGRvbSA9IHZhbHVlO1xuXHRcdFx0XHRleGNlc3NEb21DaGlsZHJlbltpXSA9IE5VTEw7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGlmIChkb20gPT0gTlVMTCkge1xuXHRcdGlmIChub2RlVHlwZSA9PSBOVUxMKSB7XG5cdFx0XHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobmV3UHJvcHMpO1xuXHRcdH1cblxuXHRcdGRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcblx0XHRcdG5hbWVzcGFjZSxcblx0XHRcdG5vZGVUeXBlLFxuXHRcdFx0bmV3UHJvcHMuaXMgJiYgbmV3UHJvcHNcblx0XHQpO1xuXG5cdFx0Ly8gd2UgYXJlIGNyZWF0aW5nIGEgbmV3IG5vZGUsIHNvIHdlIGNhbiBhc3N1bWUgdGhpcyBpcyBhIG5ldyBzdWJ0cmVlIChpblxuXHRcdC8vIGNhc2Ugd2UgYXJlIGh5ZHJhdGluZyksIHRoaXMgZGVvcHRzIHRoZSBoeWRyYXRlXG5cdFx0aWYgKGlzSHlkcmF0aW5nKSB7XG5cdFx0XHRpZiAob3B0aW9ucy5faHlkcmF0aW9uTWlzbWF0Y2gpXG5cdFx0XHRcdG9wdGlvbnMuX2h5ZHJhdGlvbk1pc21hdGNoKG5ld1ZOb2RlLCBleGNlc3NEb21DaGlsZHJlbik7XG5cdFx0XHRpc0h5ZHJhdGluZyA9IGZhbHNlO1xuXHRcdH1cblx0XHQvLyB3ZSBjcmVhdGVkIGEgbmV3IHBhcmVudCwgc28gbm9uZSBvZiB0aGUgcHJldmlvdXNseSBhdHRhY2hlZCBjaGlsZHJlbiBjYW4gYmUgcmV1c2VkOlxuXHRcdGV4Y2Vzc0RvbUNoaWxkcmVuID0gTlVMTDtcblx0fVxuXG5cdGlmIChub2RlVHlwZSA9PSBOVUxMKSB7XG5cdFx0Ly8gRHVyaW5nIGh5ZHJhdGlvbiwgd2Ugc3RpbGwgaGF2ZSB0byBzcGxpdCBtZXJnZWQgdGV4dCBmcm9tIFNTUidkIEhUTUwuXG5cdFx0aWYgKG9sZFByb3BzICE9PSBuZXdQcm9wcyAmJiAoIWlzSHlkcmF0aW5nIHx8IGRvbS5kYXRhICE9IG5ld1Byb3BzKSkge1xuXHRcdFx0ZG9tLmRhdGEgPSBuZXdQcm9wcztcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Ly8gSWYgZXhjZXNzRG9tQ2hpbGRyZW4gd2FzIG5vdCBudWxsLCByZXBvcHVsYXRlIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudCdzIGNoaWxkcmVuOlxuXHRcdGV4Y2Vzc0RvbUNoaWxkcmVuID1cblx0XHRcdG5vZGVUeXBlID09ICd0ZXh0YXJlYScgJiYgbmV3UHJvcHMuZGVmYXVsdFZhbHVlICE9IE5VTExcblx0XHRcdFx0PyBOVUxMXG5cdFx0XHRcdDogZXhjZXNzRG9tQ2hpbGRyZW4gJiYgc2xpY2UuY2FsbChkb20uY2hpbGROb2Rlcyk7XG5cblx0XHQvLyBJZiB3ZSBhcmUgaW4gYSBzaXR1YXRpb24gd2hlcmUgd2UgYXJlIG5vdCBoeWRyYXRpbmcgYnV0IGFyZSB1c2luZ1xuXHRcdC8vIGV4aXN0aW5nIERPTSAoZS5nLiByZXBsYWNlTm9kZSkgd2Ugc2hvdWxkIHJlYWQgdGhlIGV4aXN0aW5nIERPTVxuXHRcdC8vIGF0dHJpYnV0ZXMgdG8gZGlmZiB0aGVtXG5cdFx0aWYgKCFpc0h5ZHJhdGluZyAmJiBleGNlc3NEb21DaGlsZHJlbiAhPSBOVUxMKSB7XG5cdFx0XHRvbGRQcm9wcyA9IHt9O1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IGRvbS5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhbHVlID0gZG9tLmF0dHJpYnV0ZXNbaV07XG5cdFx0XHRcdG9sZFByb3BzW3ZhbHVlLm5hbWVdID0gdmFsdWUudmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChpIGluIG9sZFByb3BzKSB7XG5cdFx0XHR2YWx1ZSA9IG9sZFByb3BzW2ldO1xuXHRcdFx0aWYgKGkgPT0gJ2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MJykge1xuXHRcdFx0XHRvbGRIdG1sID0gdmFsdWU7XG5cdFx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0XHRpICE9ICdjaGlsZHJlbicgJiZcblx0XHRcdFx0IShpIGluIG5ld1Byb3BzKSAmJlxuXHRcdFx0XHQhKGkgPT0gJ3ZhbHVlJyAmJiAnZGVmYXVsdFZhbHVlJyBpbiBuZXdQcm9wcykgJiZcblx0XHRcdFx0IShpID09ICdjaGVja2VkJyAmJiAnZGVmYXVsdENoZWNrZWQnIGluIG5ld1Byb3BzKVxuXHRcdFx0KSB7XG5cdFx0XHRcdHNldFByb3BlcnR5KGRvbSwgaSwgTlVMTCwgdmFsdWUsIG5hbWVzcGFjZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gRHVyaW5nIGh5ZHJhdGlvbiwgcHJvcHMgYXJlIG5vdCBkaWZmZWQgYXQgYWxsIChpbmNsdWRpbmcgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwpXG5cdFx0Ly8gQFRPRE8gd2Ugc2hvdWxkIHdhcm4gaW4gZGVidWcgbW9kZSB3aGVuIHByb3BzIGRvbid0IG1hdGNoIGhlcmUuXG5cdFx0Zm9yIChpIGluIG5ld1Byb3BzKSB7XG5cdFx0XHR2YWx1ZSA9IG5ld1Byb3BzW2ldO1xuXHRcdFx0aWYgKGkgPT0gJ2NoaWxkcmVuJykge1xuXHRcdFx0XHRuZXdDaGlsZHJlbiA9IHZhbHVlO1xuXHRcdFx0fSBlbHNlIGlmIChpID09ICdkYW5nZXJvdXNseVNldElubmVySFRNTCcpIHtcblx0XHRcdFx0bmV3SHRtbCA9IHZhbHVlO1xuXHRcdFx0fSBlbHNlIGlmIChpID09ICd2YWx1ZScpIHtcblx0XHRcdFx0aW5wdXRWYWx1ZSA9IHZhbHVlO1xuXHRcdFx0fSBlbHNlIGlmIChpID09ICdjaGVja2VkJykge1xuXHRcdFx0XHRjaGVja2VkID0gdmFsdWU7XG5cdFx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0XHQoIWlzSHlkcmF0aW5nIHx8IHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSAmJlxuXHRcdFx0XHRvbGRQcm9wc1tpXSAhPT0gdmFsdWVcblx0XHRcdCkge1xuXHRcdFx0XHRzZXRQcm9wZXJ0eShkb20sIGksIHZhbHVlLCBvbGRQcm9wc1tpXSwgbmFtZXNwYWNlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBJZiB0aGUgbmV3IHZub2RlIGRpZG4ndCBoYXZlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLCBkaWZmIGl0cyBjaGlsZHJlblxuXHRcdGlmIChuZXdIdG1sKSB7XG5cdFx0XHQvLyBBdm9pZCByZS1hcHBseWluZyB0aGUgc2FtZSAnX19odG1sJyBpZiBpdCBkaWQgbm90IGNoYW5nZWQgYmV0d2VlbiByZS1yZW5kZXJcblx0XHRcdGlmIChcblx0XHRcdFx0IWlzSHlkcmF0aW5nICYmXG5cdFx0XHRcdCghb2xkSHRtbCB8fFxuXHRcdFx0XHRcdChuZXdIdG1sLl9faHRtbCAhPSBvbGRIdG1sLl9faHRtbCAmJiBuZXdIdG1sLl9faHRtbCAhPSBkb20uaW5uZXJIVE1MKSlcblx0XHRcdCkge1xuXHRcdFx0XHRkb20uaW5uZXJIVE1MID0gbmV3SHRtbC5fX2h0bWw7XG5cdFx0XHR9XG5cblx0XHRcdG5ld1ZOb2RlLl9jaGlsZHJlbiA9IFtdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAob2xkSHRtbCkgZG9tLmlubmVySFRNTCA9ICcnO1xuXG5cdFx0XHRkaWZmQ2hpbGRyZW4oXG5cdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3Jcblx0XHRcdFx0bmV3Vk5vZGUudHlwZSA9PSAndGVtcGxhdGUnID8gZG9tLmNvbnRlbnQgOiBkb20sXG5cdFx0XHRcdGlzQXJyYXkobmV3Q2hpbGRyZW4pID8gbmV3Q2hpbGRyZW4gOiBbbmV3Q2hpbGRyZW5dLFxuXHRcdFx0XHRuZXdWTm9kZSxcblx0XHRcdFx0b2xkVk5vZGUsXG5cdFx0XHRcdGdsb2JhbENvbnRleHQsXG5cdFx0XHRcdG5vZGVUeXBlID09ICdmb3JlaWduT2JqZWN0JyA/IFhIVE1MX05BTUVTUEFDRSA6IG5hbWVzcGFjZSxcblx0XHRcdFx0ZXhjZXNzRG9tQ2hpbGRyZW4sXG5cdFx0XHRcdGNvbW1pdFF1ZXVlLFxuXHRcdFx0XHRleGNlc3NEb21DaGlsZHJlblxuXHRcdFx0XHRcdD8gZXhjZXNzRG9tQ2hpbGRyZW5bMF1cblx0XHRcdFx0XHQ6IG9sZFZOb2RlLl9jaGlsZHJlbiAmJiBnZXREb21TaWJsaW5nKG9sZFZOb2RlLCAwKSxcblx0XHRcdFx0aXNIeWRyYXRpbmcsXG5cdFx0XHRcdHJlZlF1ZXVlXG5cdFx0XHQpO1xuXG5cdFx0XHQvLyBSZW1vdmUgY2hpbGRyZW4gdGhhdCBhcmUgbm90IHBhcnQgb2YgYW55IHZub2RlLlxuXHRcdFx0aWYgKGV4Y2Vzc0RvbUNoaWxkcmVuICE9IE5VTEwpIHtcblx0XHRcdFx0Zm9yIChpID0gZXhjZXNzRG9tQ2hpbGRyZW4ubGVuZ3RoOyBpLS07ICkge1xuXHRcdFx0XHRcdHJlbW92ZU5vZGUoZXhjZXNzRG9tQ2hpbGRyZW5baV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQXMgYWJvdmUsIGRvbid0IGRpZmYgcHJvcHMgZHVyaW5nIGh5ZHJhdGlvblxuXHRcdGlmICghaXNIeWRyYXRpbmcgfHwgbm9kZVR5cGUgPT0gJ3RleHRhcmVhJykge1xuXHRcdFx0aSA9ICd2YWx1ZSc7XG5cdFx0XHRpZiAobm9kZVR5cGUgPT0gJ3Byb2dyZXNzJyAmJiBpbnB1dFZhbHVlID09IE5VTEwpIHtcblx0XHRcdFx0ZG9tLnJlbW92ZUF0dHJpYnV0ZSgndmFsdWUnKTtcblx0XHRcdH0gZWxzZSBpZiAoXG5cdFx0XHRcdGlucHV0VmFsdWUgIT0gVU5ERUZJTkVEICYmXG5cdFx0XHRcdC8vICMyNzU2IEZvciB0aGUgPHByb2dyZXNzPi1lbGVtZW50IHRoZSBpbml0aWFsIHZhbHVlIGlzIDAsXG5cdFx0XHRcdC8vIGRlc3BpdGUgdGhlIGF0dHJpYnV0ZSBub3QgYmVpbmcgcHJlc2VudC4gV2hlbiB0aGUgYXR0cmlidXRlXG5cdFx0XHRcdC8vIGlzIG1pc3NpbmcgdGhlIHByb2dyZXNzIGJhciBpcyB0cmVhdGVkIGFzIGluZGV0ZXJtaW5hdGUuXG5cdFx0XHRcdC8vIFRvIGZpeCB0aGF0IHdlJ2xsIGFsd2F5cyB1cGRhdGUgaXQgd2hlbiBpdCBpcyAwIGZvciBwcm9ncmVzcyBlbGVtZW50c1xuXHRcdFx0XHQoaW5wdXRWYWx1ZSAhPT0gZG9tW2ldIHx8XG5cdFx0XHRcdFx0KG5vZGVUeXBlID09ICdwcm9ncmVzcycgJiYgIWlucHV0VmFsdWUpIHx8XG5cdFx0XHRcdFx0Ly8gVGhpcyBpcyBvbmx5IGZvciBJRSAxMSB0byBmaXggPHNlbGVjdD4gdmFsdWUgbm90IGJlaW5nIHVwZGF0ZWQuXG5cdFx0XHRcdFx0Ly8gVG8gYXZvaWQgYSBzdGFsZSBzZWxlY3QgdmFsdWUgd2UgbmVlZCB0byBzZXQgdGhlIG9wdGlvbi52YWx1ZVxuXHRcdFx0XHRcdC8vIGFnYWluLCB3aGljaCB0cmlnZ2VycyBJRTExIHRvIHJlLWV2YWx1YXRlIHRoZSBzZWxlY3QgdmFsdWVcblx0XHRcdFx0XHQobm9kZVR5cGUgPT0gJ29wdGlvbicgJiYgaW5wdXRWYWx1ZSAhPSBvbGRQcm9wc1tpXSkpXG5cdFx0XHQpIHtcblx0XHRcdFx0c2V0UHJvcGVydHkoZG9tLCBpLCBpbnB1dFZhbHVlLCBvbGRQcm9wc1tpXSwgbmFtZXNwYWNlKTtcblx0XHRcdH1cblxuXHRcdFx0aSA9ICdjaGVja2VkJztcblx0XHRcdGlmIChjaGVja2VkICE9IFVOREVGSU5FRCAmJiBjaGVja2VkICE9IGRvbVtpXSkge1xuXHRcdFx0XHRzZXRQcm9wZXJ0eShkb20sIGksIGNoZWNrZWQsIG9sZFByb3BzW2ldLCBuYW1lc3BhY2UpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBkb207XG59XG5cbi8qKlxuICogSW52b2tlIG9yIHVwZGF0ZSBhIHJlZiwgZGVwZW5kaW5nIG9uIHdoZXRoZXIgaXQgaXMgYSBmdW5jdGlvbiBvciBvYmplY3QgcmVmLlxuICogQHBhcmFtIHtSZWY8YW55PiAmIHsgX3VubW91bnQ/OiB1bmtub3duIH19IHJlZlxuICogQHBhcmFtIHthbnl9IHZhbHVlXG4gKiBAcGFyYW0ge1ZOb2RlfSB2bm9kZVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlSZWYocmVmLCB2YWx1ZSwgdm5vZGUpIHtcblx0dHJ5IHtcblx0XHRpZiAodHlwZW9mIHJlZiA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRsZXQgaGFzUmVmVW5tb3VudCA9IHR5cGVvZiByZWYuX3VubW91bnQgPT0gJ2Z1bmN0aW9uJztcblx0XHRcdGlmIChoYXNSZWZVbm1vdW50KSB7XG5cdFx0XHRcdC8vIEB0cy1pZ25vcmUgVFMgZG9lc24ndCBsaWtlIG1vdmluZyBuYXJyb3dpbmcgY2hlY2tzIGludG8gdmFyaWFibGVzXG5cdFx0XHRcdHJlZi5fdW5tb3VudCgpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIWhhc1JlZlVubW91bnQgfHwgdmFsdWUgIT0gTlVMTCkge1xuXHRcdFx0XHQvLyBTdG9yZSB0aGUgY2xlYW51cCBmdW5jdGlvbiBvbiB0aGUgZnVuY3Rpb25cblx0XHRcdFx0Ly8gaW5zdGFuY2Ugb2JqZWN0IGl0c2VsZiB0byBhdm9pZCBzaGFwZVxuXHRcdFx0XHQvLyB0cmFuc2l0aW9uaW5nIHZub2RlXG5cdFx0XHRcdHJlZi5fdW5tb3VudCA9IHJlZih2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHJlZi5jdXJyZW50ID0gdmFsdWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRvcHRpb25zLl9jYXRjaEVycm9yKGUsIHZub2RlKTtcblx0fVxufVxuXG4vKipcbiAqIFVubW91bnQgYSB2aXJ0dWFsIG5vZGUgZnJvbSB0aGUgdHJlZSBhbmQgYXBwbHkgRE9NIGNoYW5nZXNcbiAqIEBwYXJhbSB7Vk5vZGV9IHZub2RlIFRoZSB2aXJ0dWFsIG5vZGUgdG8gdW5tb3VudFxuICogQHBhcmFtIHtWTm9kZX0gcGFyZW50Vk5vZGUgVGhlIHBhcmVudCBvZiB0aGUgVk5vZGUgdGhhdCBpbml0aWF0ZWQgdGhlIHVubW91bnRcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3NraXBSZW1vdmVdIEZsYWcgdGhhdCBpbmRpY2F0ZXMgdGhhdCBhIHBhcmVudCBub2RlIG9mIHRoZVxuICogY3VycmVudCBlbGVtZW50IGlzIGFscmVhZHkgZGV0YWNoZWQgZnJvbSB0aGUgRE9NLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdW5tb3VudCh2bm9kZSwgcGFyZW50Vk5vZGUsIHNraXBSZW1vdmUpIHtcblx0bGV0IHI7XG5cdGlmIChvcHRpb25zLnVubW91bnQpIG9wdGlvbnMudW5tb3VudCh2bm9kZSk7XG5cblx0aWYgKChyID0gdm5vZGUucmVmKSkge1xuXHRcdGlmICghci5jdXJyZW50IHx8IHIuY3VycmVudCA9PSB2bm9kZS5fZG9tKSB7XG5cdFx0XHRhcHBseVJlZihyLCBOVUxMLCBwYXJlbnRWTm9kZSk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKChyID0gdm5vZGUuX2NvbXBvbmVudCkgIT0gTlVMTCkge1xuXHRcdGlmIChyLmNvbXBvbmVudFdpbGxVbm1vdW50KSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRyLmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdG9wdGlvbnMuX2NhdGNoRXJyb3IoZSwgcGFyZW50Vk5vZGUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHIuYmFzZSA9IHIuX3BhcmVudERvbSA9IHIuX2dsb2JhbENvbnRleHQgPSBOVUxMO1xuXHR9XG5cblx0aWYgKChyID0gdm5vZGUuX2NoaWxkcmVuKSkge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgci5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKHJbaV0pIHtcblx0XHRcdFx0dW5tb3VudChcblx0XHRcdFx0XHRyW2ldLFxuXHRcdFx0XHRcdHBhcmVudFZOb2RlLFxuXHRcdFx0XHRcdHNraXBSZW1vdmUgfHwgdHlwZW9mIHZub2RlLnR5cGUgIT0gJ2Z1bmN0aW9uJ1xuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGlmICghc2tpcFJlbW92ZSkge1xuXHRcdHJlbW92ZU5vZGUodm5vZGUuX2RvbSk7XG5cdH1cblxuXHR2bm9kZS5fY29tcG9uZW50ID0gdm5vZGUuX3BhcmVudCA9IHZub2RlLl9kb20gPSBVTkRFRklORUQ7XG59XG5cbi8qKiBUaGUgYC5yZW5kZXIoKWAgbWV0aG9kIGZvciBhIFBGQyBiYWNraW5nIGluc3RhbmNlLiAqL1xuZnVuY3Rpb24gZG9SZW5kZXIocHJvcHMsIHN0YXRlLCBjb250ZXh0KSB7XG5cdHJldHVybiB0aGlzLmNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KTtcbn1cbiIsICJpbXBvcnQgeyBFTVBUWV9PQkosIE5VTEwgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBjb21taXRSb290LCBkaWZmIH0gZnJvbSAnLi9kaWZmL2luZGV4JztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIEZyYWdtZW50IH0gZnJvbSAnLi9jcmVhdGUtZWxlbWVudCc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuL29wdGlvbnMnO1xuaW1wb3J0IHsgc2xpY2UgfSBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIFJlbmRlciBhIFByZWFjdCB2aXJ0dWFsIG5vZGUgaW50byBhIERPTSBlbGVtZW50XG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudENoaWxkfSB2bm9kZSBUaGUgdmlydHVhbCBub2RlIHRvIHJlbmRlclxuICogQHBhcmFtIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5QcmVhY3RFbGVtZW50fSBwYXJlbnREb20gVGhlIERPTSBlbGVtZW50IHRvIHJlbmRlciBpbnRvXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnQgfCBvYmplY3R9IFtyZXBsYWNlTm9kZV0gT3B0aW9uYWw6IEF0dGVtcHQgdG8gcmUtdXNlIGFuXG4gKiBleGlzdGluZyBET00gdHJlZSByb290ZWQgYXQgYHJlcGxhY2VOb2RlYFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKHZub2RlLCBwYXJlbnREb20sIHJlcGxhY2VOb2RlKSB7XG5cdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wcmVhY3Rqcy9wcmVhY3QvaXNzdWVzLzM3OTRcblx0aWYgKHBhcmVudERvbSA9PSBkb2N1bWVudCkge1xuXHRcdHBhcmVudERvbSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblx0fVxuXG5cdGlmIChvcHRpb25zLl9yb290KSBvcHRpb25zLl9yb290KHZub2RlLCBwYXJlbnREb20pO1xuXG5cdC8vIFdlIGFidXNlIHRoZSBgcmVwbGFjZU5vZGVgIHBhcmFtZXRlciBpbiBgaHlkcmF0ZSgpYCB0byBzaWduYWwgaWYgd2UgYXJlIGluXG5cdC8vIGh5ZHJhdGlvbiBtb2RlIG9yIG5vdCBieSBwYXNzaW5nIHRoZSBgaHlkcmF0ZWAgZnVuY3Rpb24gaW5zdGVhZCBvZiBhIERPTVxuXHQvLyBlbGVtZW50Li5cblx0bGV0IGlzSHlkcmF0aW5nID0gdHlwZW9mIHJlcGxhY2VOb2RlID09ICdmdW5jdGlvbic7XG5cblx0Ly8gVG8gYmUgYWJsZSB0byBzdXBwb3J0IGNhbGxpbmcgYHJlbmRlcigpYCBtdWx0aXBsZSB0aW1lcyBvbiB0aGUgc2FtZVxuXHQvLyBET00gbm9kZSwgd2UgbmVlZCB0byBvYnRhaW4gYSByZWZlcmVuY2UgdG8gdGhlIHByZXZpb3VzIHRyZWUuIFdlIGRvXG5cdC8vIHRoaXMgYnkgYXNzaWduaW5nIGEgbmV3IGBfY2hpbGRyZW5gIHByb3BlcnR5IHRvIERPTSBub2RlcyB3aGljaCBwb2ludHNcblx0Ly8gdG8gdGhlIGxhc3QgcmVuZGVyZWQgdHJlZS4gQnkgZGVmYXVsdCB0aGlzIHByb3BlcnR5IGlzIG5vdCBwcmVzZW50LCB3aGljaFxuXHQvLyBtZWFucyB0aGF0IHdlIGFyZSBtb3VudGluZyBhIG5ldyB0cmVlIGZvciB0aGUgZmlyc3QgdGltZS5cblx0bGV0IG9sZFZOb2RlID0gaXNIeWRyYXRpbmdcblx0XHQ/IE5VTExcblx0XHQ6IChyZXBsYWNlTm9kZSAmJiByZXBsYWNlTm9kZS5fY2hpbGRyZW4pIHx8IHBhcmVudERvbS5fY2hpbGRyZW47XG5cblx0dm5vZGUgPSAoKCFpc0h5ZHJhdGluZyAmJiByZXBsYWNlTm9kZSkgfHwgcGFyZW50RG9tKS5fY2hpbGRyZW4gPVxuXHRcdGNyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIE5VTEwsIFt2bm9kZV0pO1xuXG5cdC8vIExpc3Qgb2YgZWZmZWN0cyB0aGF0IG5lZWQgdG8gYmUgY2FsbGVkIGFmdGVyIGRpZmZpbmcuXG5cdGxldCBjb21taXRRdWV1ZSA9IFtdLFxuXHRcdHJlZlF1ZXVlID0gW107XG5cdGRpZmYoXG5cdFx0cGFyZW50RG9tLFxuXHRcdC8vIERldGVybWluZSB0aGUgbmV3IHZub2RlIHRyZWUgYW5kIHN0b3JlIGl0IG9uIHRoZSBET00gZWxlbWVudCBvblxuXHRcdC8vIG91ciBjdXN0b20gYF9jaGlsZHJlbmAgcHJvcGVydHkuXG5cdFx0dm5vZGUsXG5cdFx0b2xkVk5vZGUgfHwgRU1QVFlfT0JKLFxuXHRcdEVNUFRZX09CSixcblx0XHRwYXJlbnREb20ubmFtZXNwYWNlVVJJLFxuXHRcdCFpc0h5ZHJhdGluZyAmJiByZXBsYWNlTm9kZVxuXHRcdFx0PyBbcmVwbGFjZU5vZGVdXG5cdFx0XHQ6IG9sZFZOb2RlXG5cdFx0XHRcdD8gTlVMTFxuXHRcdFx0XHQ6IHBhcmVudERvbS5maXJzdENoaWxkXG5cdFx0XHRcdFx0PyBzbGljZS5jYWxsKHBhcmVudERvbS5jaGlsZE5vZGVzKVxuXHRcdFx0XHRcdDogTlVMTCxcblx0XHRjb21taXRRdWV1ZSxcblx0XHQhaXNIeWRyYXRpbmcgJiYgcmVwbGFjZU5vZGVcblx0XHRcdD8gcmVwbGFjZU5vZGVcblx0XHRcdDogb2xkVk5vZGVcblx0XHRcdFx0PyBvbGRWTm9kZS5fZG9tXG5cdFx0XHRcdDogcGFyZW50RG9tLmZpcnN0Q2hpbGQsXG5cdFx0aXNIeWRyYXRpbmcsXG5cdFx0cmVmUXVldWVcblx0KTtcblxuXHQvLyBGbHVzaCBhbGwgcXVldWVkIGVmZmVjdHNcblx0Y29tbWl0Um9vdChjb21taXRRdWV1ZSwgdm5vZGUsIHJlZlF1ZXVlKTtcblxuXHQvLyBUaGUgbGl2ZSBjaGlsZHJlbiBhcmUgdHJhY2tlZCBvbiBfY2hpbGRyZW4gYWZ0ZXIgZGlmZmluZy5cblx0dm5vZGUucHJvcHMuY2hpbGRyZW4gPSBOVUxMO1xufVxuXG4vKipcbiAqIFVwZGF0ZSBhbiBleGlzdGluZyBET00gZWxlbWVudCB3aXRoIGRhdGEgZnJvbSBhIFByZWFjdCB2aXJ0dWFsIG5vZGVcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29tcG9uZW50Q2hpbGR9IHZub2RlIFRoZSB2aXJ0dWFsIG5vZGUgdG8gcmVuZGVyXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLlByZWFjdEVsZW1lbnR9IHBhcmVudERvbSBUaGUgRE9NIGVsZW1lbnQgdG8gdXBkYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoeWRyYXRlKHZub2RlLCBwYXJlbnREb20pIHtcblx0cmVuZGVyKHZub2RlLCBwYXJlbnREb20sIGh5ZHJhdGUpO1xufVxuIiwgImltcG9ydCB7IGFzc2lnbiwgc2xpY2UgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHsgY3JlYXRlVk5vZGUgfSBmcm9tICcuL2NyZWF0ZS1lbGVtZW50JztcbmltcG9ydCB7IE5VTEwsIFVOREVGSU5FRCB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBDbG9uZXMgdGhlIGdpdmVuIFZOb2RlLCBvcHRpb25hbGx5IGFkZGluZyBhdHRyaWJ1dGVzL3Byb3BzIGFuZCByZXBsYWNpbmcgaXRzXG4gKiBjaGlsZHJlbi5cbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGV9IHZub2RlIFRoZSB2aXJ0dWFsIERPTSBlbGVtZW50IHRvIGNsb25lXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHMgQXR0cmlidXRlcy9wcm9wcyB0byBhZGQgd2hlbiBjbG9uaW5nXG4gKiBAcGFyYW0ge0FycmF5PGltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudENoaWxkcmVuPn0gcmVzdCBBbnkgYWRkaXRpb25hbCBhcmd1bWVudHMgd2lsbCBiZSB1c2VkXG4gKiBhcyByZXBsYWNlbWVudCBjaGlsZHJlbi5cbiAqIEByZXR1cm5zIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb25lRWxlbWVudCh2bm9kZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG5cdGxldCBub3JtYWxpemVkUHJvcHMgPSBhc3NpZ24oe30sIHZub2RlLnByb3BzKSxcblx0XHRrZXksXG5cdFx0cmVmLFxuXHRcdGk7XG5cblx0bGV0IGRlZmF1bHRQcm9wcztcblxuXHRpZiAodm5vZGUudHlwZSAmJiB2bm9kZS50eXBlLmRlZmF1bHRQcm9wcykge1xuXHRcdGRlZmF1bHRQcm9wcyA9IHZub2RlLnR5cGUuZGVmYXVsdFByb3BzO1xuXHR9XG5cblx0Zm9yIChpIGluIHByb3BzKSB7XG5cdFx0aWYgKGkgPT0gJ2tleScpIGtleSA9IHByb3BzW2ldO1xuXHRcdGVsc2UgaWYgKGkgPT0gJ3JlZicpIHJlZiA9IHByb3BzW2ldO1xuXHRcdGVsc2UgaWYgKHByb3BzW2ldID09PSBVTkRFRklORUQgJiYgZGVmYXVsdFByb3BzICE9IFVOREVGSU5FRCkge1xuXHRcdFx0bm9ybWFsaXplZFByb3BzW2ldID0gZGVmYXVsdFByb3BzW2ldO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRub3JtYWxpemVkUHJvcHNbaV0gPSBwcm9wc1tpXTtcblx0XHR9XG5cdH1cblxuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpIHtcblx0XHRub3JtYWxpemVkUHJvcHMuY2hpbGRyZW4gPVxuXHRcdFx0YXJndW1lbnRzLmxlbmd0aCA+IDMgPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMikgOiBjaGlsZHJlbjtcblx0fVxuXG5cdHJldHVybiBjcmVhdGVWTm9kZShcblx0XHR2bm9kZS50eXBlLFxuXHRcdG5vcm1hbGl6ZWRQcm9wcyxcblx0XHRrZXkgfHwgdm5vZGUua2V5LFxuXHRcdHJlZiB8fCB2bm9kZS5yZWYsXG5cdFx0TlVMTFxuXHQpO1xufVxuIiwgImltcG9ydCB7IE5VTEwgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuXG4vKipcbiAqIEZpbmQgdGhlIGNsb3Nlc3QgZXJyb3IgYm91bmRhcnkgdG8gYSB0aHJvd24gZXJyb3IgYW5kIGNhbGwgaXRcbiAqIEBwYXJhbSB7b2JqZWN0fSBlcnJvciBUaGUgdGhyb3duIHZhbHVlXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5WTm9kZX0gdm5vZGUgVGhlIHZub2RlIHRoYXQgdGhyZXcgdGhlIGVycm9yIHRoYXQgd2FzIGNhdWdodCAoZXhjZXB0XG4gKiBmb3IgdW5tb3VudGluZyB3aGVuIHRoaXMgcGFyYW1ldGVyIGlzIHRoZSBoaWdoZXN0IHBhcmVudCB0aGF0IHdhcyBiZWluZ1xuICogdW5tb3VudGVkKVxuICogQHBhcmFtIHtpbXBvcnQoJy4uL2ludGVybmFsJykuVk5vZGV9IFtvbGRWTm9kZV1cbiAqIEBwYXJhbSB7aW1wb3J0KCcuLi9pbnRlcm5hbCcpLkVycm9ySW5mb30gW2Vycm9ySW5mb11cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9jYXRjaEVycm9yKGVycm9yLCB2bm9kZSwgb2xkVk5vZGUsIGVycm9ySW5mbykge1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi4vaW50ZXJuYWwnKS5Db21wb25lbnR9ICovXG5cdGxldCBjb21wb25lbnQsXG5cdFx0LyoqIEB0eXBlIHtpbXBvcnQoJy4uL2ludGVybmFsJykuQ29tcG9uZW50VHlwZX0gKi9cblx0XHRjdG9yLFxuXHRcdC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cblx0XHRoYW5kbGVkO1xuXG5cdGZvciAoOyAodm5vZGUgPSB2bm9kZS5fcGFyZW50KTsgKSB7XG5cdFx0aWYgKChjb21wb25lbnQgPSB2bm9kZS5fY29tcG9uZW50KSAmJiAhY29tcG9uZW50Ll9wcm9jZXNzaW5nRXhjZXB0aW9uKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjdG9yID0gY29tcG9uZW50LmNvbnN0cnVjdG9yO1xuXG5cdFx0XHRcdGlmIChjdG9yICYmIGN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yICE9IE5VTEwpIHtcblx0XHRcdFx0XHRjb21wb25lbnQuc2V0U3RhdGUoY3Rvci5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IoZXJyb3IpKTtcblx0XHRcdFx0XHRoYW5kbGVkID0gY29tcG9uZW50Ll9kaXJ0eTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChjb21wb25lbnQuY29tcG9uZW50RGlkQ2F0Y2ggIT0gTlVMTCkge1xuXHRcdFx0XHRcdGNvbXBvbmVudC5jb21wb25lbnREaWRDYXRjaChlcnJvciwgZXJyb3JJbmZvIHx8IHt9KTtcblx0XHRcdFx0XHRoYW5kbGVkID0gY29tcG9uZW50Ll9kaXJ0eTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFRoaXMgaXMgYW4gZXJyb3IgYm91bmRhcnkuIE1hcmsgaXQgYXMgaGF2aW5nIGJhaWxlZCBvdXQsIGFuZCB3aGV0aGVyIGl0IHdhcyBtaWQtaHlkcmF0aW9uLlxuXHRcdFx0XHRpZiAoaGFuZGxlZCkge1xuXHRcdFx0XHRcdHJldHVybiAoY29tcG9uZW50Ll9wZW5kaW5nRXJyb3IgPSBjb21wb25lbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdGVycm9yID0gZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHR0aHJvdyBlcnJvcjtcbn1cbiIsIG51bGwsICJpbXBvcnQgeyBvcHRpb25zIGFzIF9vcHRpb25zIH0gZnJvbSAncHJlYWN0JztcblxuLyoqIEB0eXBlIHtudW1iZXJ9ICovXG5sZXQgY3VycmVudEluZGV4O1xuXG4vKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gKi9cbmxldCBjdXJyZW50Q29tcG9uZW50O1xuXG4vKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudH0gKi9cbmxldCBwcmV2aW91c0NvbXBvbmVudDtcblxuLyoqIEB0eXBlIHtudW1iZXJ9ICovXG5sZXQgY3VycmVudEhvb2sgPSAwO1xuXG4vKiogQHR5cGUge0FycmF5PGltcG9ydCgnLi9pbnRlcm5hbCcpLkNvbXBvbmVudD59ICovXG5sZXQgYWZ0ZXJQYWludEVmZmVjdHMgPSBbXTtcblxuLy8gQ2FzdCB0byB1c2UgaW50ZXJuYWwgT3B0aW9ucyB0eXBlXG5jb25zdCBvcHRpb25zID0gLyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5PcHRpb25zfSAqLyAoX29wdGlvbnMpO1xuXG5sZXQgb2xkQmVmb3JlRGlmZiA9IG9wdGlvbnMuX2RpZmY7XG5sZXQgb2xkQmVmb3JlUmVuZGVyID0gb3B0aW9ucy5fcmVuZGVyO1xubGV0IG9sZEFmdGVyRGlmZiA9IG9wdGlvbnMuZGlmZmVkO1xubGV0IG9sZENvbW1pdCA9IG9wdGlvbnMuX2NvbW1pdDtcbmxldCBvbGRCZWZvcmVVbm1vdW50ID0gb3B0aW9ucy51bm1vdW50O1xubGV0IG9sZFJvb3QgPSBvcHRpb25zLl9yb290O1xuXG4vLyBXZSB0YWtlIHRoZSBtaW5pbXVtIHRpbWVvdXQgZm9yIHJlcXVlc3RBbmltYXRpb25GcmFtZSB0byBlbnN1cmUgdGhhdFxuLy8gdGhlIGNhbGxiYWNrIGlzIGludm9rZWQgYWZ0ZXIgdGhlIG5leHQgZnJhbWUuIDM1bXMgaXMgYmFzZWQgb24gYSAzMGh6XG4vLyByZWZyZXNoIHJhdGUsIHdoaWNoIGlzIHRoZSBtaW5pbXVtIHJhdGUgZm9yIGEgc21vb3RoIHVzZXIgZXhwZXJpZW5jZS5cbmNvbnN0IFJBRl9USU1FT1VUID0gMzU7XG5sZXQgcHJldlJhZjtcblxuLyoqIEB0eXBlIHsodm5vZGU6IGltcG9ydCgnLi9pbnRlcm5hbCcpLlZOb2RlKSA9PiB2b2lkfSAqL1xub3B0aW9ucy5fZGlmZiA9IHZub2RlID0+IHtcblx0Y3VycmVudENvbXBvbmVudCA9IG51bGw7XG5cdGlmIChvbGRCZWZvcmVEaWZmKSBvbGRCZWZvcmVEaWZmKHZub2RlKTtcbn07XG5cbm9wdGlvbnMuX3Jvb3QgPSAodm5vZGUsIHBhcmVudERvbSkgPT4ge1xuXHRpZiAodm5vZGUgJiYgcGFyZW50RG9tLl9jaGlsZHJlbiAmJiBwYXJlbnREb20uX2NoaWxkcmVuLl9tYXNrKSB7XG5cdFx0dm5vZGUuX21hc2sgPSBwYXJlbnREb20uX2NoaWxkcmVuLl9tYXNrO1xuXHR9XG5cblx0aWYgKG9sZFJvb3QpIG9sZFJvb3Qodm5vZGUsIHBhcmVudERvbSk7XG59O1xuXG4vKiogQHR5cGUgeyh2bm9kZTogaW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGUpID0+IHZvaWR9ICovXG5vcHRpb25zLl9yZW5kZXIgPSB2bm9kZSA9PiB7XG5cdGlmIChvbGRCZWZvcmVSZW5kZXIpIG9sZEJlZm9yZVJlbmRlcih2bm9kZSk7XG5cblx0Y3VycmVudENvbXBvbmVudCA9IHZub2RlLl9jb21wb25lbnQ7XG5cdGN1cnJlbnRJbmRleCA9IDA7XG5cblx0Y29uc3QgaG9va3MgPSBjdXJyZW50Q29tcG9uZW50Ll9faG9va3M7XG5cdGlmIChob29rcykge1xuXHRcdGlmIChwcmV2aW91c0NvbXBvbmVudCA9PT0gY3VycmVudENvbXBvbmVudCkge1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzID0gW107XG5cdFx0XHRjdXJyZW50Q29tcG9uZW50Ll9yZW5kZXJDYWxsYmFja3MgPSBbXTtcblx0XHRcdGhvb2tzLl9saXN0LnNvbWUoaG9va0l0ZW0gPT4ge1xuXHRcdFx0XHRpZiAoaG9va0l0ZW0uX25leHRWYWx1ZSkge1xuXHRcdFx0XHRcdGhvb2tJdGVtLl92YWx1ZSA9IGhvb2tJdGVtLl9uZXh0VmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0aG9va0l0ZW0uX3BlbmRpbmdBcmdzID0gaG9va0l0ZW0uX25leHRWYWx1ZSA9IHVuZGVmaW5lZDtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRob29rcy5fcGVuZGluZ0VmZmVjdHMuc29tZShpbnZva2VDbGVhbnVwKTtcblx0XHRcdGhvb2tzLl9wZW5kaW5nRWZmZWN0cy5zb21lKGludm9rZUVmZmVjdCk7XG5cdFx0XHRob29rcy5fcGVuZGluZ0VmZmVjdHMgPSBbXTtcblx0XHRcdGN1cnJlbnRJbmRleCA9IDA7XG5cdFx0fVxuXHR9XG5cdHByZXZpb3VzQ29tcG9uZW50ID0gY3VycmVudENvbXBvbmVudDtcbn07XG5cbi8qKiBAdHlwZSB7KHZub2RlOiBpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZSkgPT4gdm9pZH0gKi9cbm9wdGlvbnMuZGlmZmVkID0gdm5vZGUgPT4ge1xuXHRpZiAob2xkQWZ0ZXJEaWZmKSBvbGRBZnRlckRpZmYodm5vZGUpO1xuXG5cdGNvbnN0IGMgPSB2bm9kZS5fY29tcG9uZW50O1xuXHRpZiAoYyAmJiBjLl9faG9va3MpIHtcblx0XHRpZiAoYy5fX2hvb2tzLl9wZW5kaW5nRWZmZWN0cy5sZW5ndGgpIGFmdGVyUGFpbnQoYWZ0ZXJQYWludEVmZmVjdHMucHVzaChjKSk7XG5cdFx0Yy5fX2hvb2tzLl9saXN0LnNvbWUoaG9va0l0ZW0gPT4ge1xuXHRcdFx0aWYgKGhvb2tJdGVtLl9wZW5kaW5nQXJncykge1xuXHRcdFx0XHRob29rSXRlbS5fYXJncyA9IGhvb2tJdGVtLl9wZW5kaW5nQXJncztcblx0XHRcdFx0aG9va0l0ZW0uX3BlbmRpbmdBcmdzID0gdW5kZWZpbmVkO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cdHByZXZpb3VzQ29tcG9uZW50ID0gY3VycmVudENvbXBvbmVudCA9IG51bGw7XG59O1xuXG4vLyBUT0RPOiBJbXByb3ZlIHR5cGluZyBvZiBjb21taXRRdWV1ZSBwYXJhbWV0ZXJcbi8qKiBAdHlwZSB7KHZub2RlOiBpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZSwgY29tbWl0UXVldWU6IGFueSkgPT4gdm9pZH0gKi9cbm9wdGlvbnMuX2NvbW1pdCA9ICh2bm9kZSwgY29tbWl0UXVldWUpID0+IHtcblx0Y29tbWl0UXVldWUuc29tZShjb21wb25lbnQgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb21wb25lbnQuX3JlbmRlckNhbGxiYWNrcy5zb21lKGludm9rZUNsZWFudXApO1xuXHRcdFx0Y29tcG9uZW50Ll9yZW5kZXJDYWxsYmFja3MgPSBjb21wb25lbnQuX3JlbmRlckNhbGxiYWNrcy5maWx0ZXIoY2IgPT5cblx0XHRcdFx0Y2IuX3ZhbHVlID8gaW52b2tlRWZmZWN0KGNiKSA6IHRydWVcblx0XHRcdCk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Y29tbWl0UXVldWUuc29tZShjID0+IHtcblx0XHRcdFx0aWYgKGMuX3JlbmRlckNhbGxiYWNrcykgYy5fcmVuZGVyQ2FsbGJhY2tzID0gW107XG5cdFx0XHR9KTtcblx0XHRcdGNvbW1pdFF1ZXVlID0gW107XG5cdFx0XHRvcHRpb25zLl9jYXRjaEVycm9yKGUsIGNvbXBvbmVudC5fdm5vZGUpO1xuXHRcdH1cblx0fSk7XG5cblx0aWYgKG9sZENvbW1pdCkgb2xkQ29tbWl0KHZub2RlLCBjb21taXRRdWV1ZSk7XG59O1xuXG4vKiogQHR5cGUgeyh2bm9kZTogaW1wb3J0KCcuL2ludGVybmFsJykuVk5vZGUpID0+IHZvaWR9ICovXG5vcHRpb25zLnVubW91bnQgPSB2bm9kZSA9PiB7XG5cdGlmIChvbGRCZWZvcmVVbm1vdW50KSBvbGRCZWZvcmVVbm1vdW50KHZub2RlKTtcblxuXHRjb25zdCBjID0gdm5vZGUuX2NvbXBvbmVudDtcblx0aWYgKGMgJiYgYy5fX2hvb2tzKSB7XG5cdFx0bGV0IGhhc0Vycm9yZWQ7XG5cdFx0Yy5fX2hvb2tzLl9saXN0LnNvbWUocyA9PiB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRpbnZva2VDbGVhbnVwKHMpO1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRoYXNFcnJvcmVkID0gZTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRjLl9faG9va3MgPSB1bmRlZmluZWQ7XG5cdFx0aWYgKGhhc0Vycm9yZWQpIG9wdGlvbnMuX2NhdGNoRXJyb3IoaGFzRXJyb3JlZCwgYy5fdm5vZGUpO1xuXHR9XG59O1xuXG4vKipcbiAqIEdldCBhIGhvb2sncyBzdGF0ZSBmcm9tIHRoZSBjdXJyZW50Q29tcG9uZW50XG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBob29rIHRvIGdldFxuICogQHBhcmFtIHtudW1iZXJ9IHR5cGUgVGhlIGluZGV4IG9mIHRoZSBob29rIHRvIGdldFxuICogQHJldHVybnMge2FueX1cbiAqL1xuZnVuY3Rpb24gZ2V0SG9va1N0YXRlKGluZGV4LCB0eXBlKSB7XG5cdGlmIChvcHRpb25zLl9ob29rKSB7XG5cdFx0b3B0aW9ucy5faG9vayhjdXJyZW50Q29tcG9uZW50LCBpbmRleCwgY3VycmVudEhvb2sgfHwgdHlwZSk7XG5cdH1cblx0Y3VycmVudEhvb2sgPSAwO1xuXG5cdC8vIExhcmdlbHkgaW5zcGlyZWQgYnk6XG5cdC8vICogaHR0cHM6Ly9naXRodWIuY29tL21pY2hhZWwta2xlaW4vZnVuY3kuanMvYmxvYi9mNmJlNzM0NjhlNmVjNDZiMGZmNWFhM2NjNGM5YmFmNzJhMjkwMjVhL3NyYy9ob29rcy9jb3JlX2hvb2tzLm1qc1xuXHQvLyAqIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNoYWVsLWtsZWluL2Z1bmN5LmpzL2Jsb2IvNjUwYmVhYTU4YzQzYzMzYTc0ODIwYTNjOThiM2M3MDc5Y2YyZTMzMy9zcmMvcmVuZGVyZXIubWpzXG5cdC8vIE90aGVyIGltcGxlbWVudGF0aW9ucyB0byBsb29rIGF0OlxuXHQvLyAqIGh0dHBzOi8vY29kZXNhbmRib3guaW8vcy9tbm94MDVxcDhcblx0Y29uc3QgaG9va3MgPVxuXHRcdGN1cnJlbnRDb21wb25lbnQuX19ob29rcyB8fFxuXHRcdChjdXJyZW50Q29tcG9uZW50Ll9faG9va3MgPSB7XG5cdFx0XHRfbGlzdDogW10sXG5cdFx0XHRfcGVuZGluZ0VmZmVjdHM6IFtdXG5cdFx0fSk7XG5cblx0aWYgKGluZGV4ID49IGhvb2tzLl9saXN0Lmxlbmd0aCkge1xuXHRcdGhvb2tzLl9saXN0LnB1c2goe30pO1xuXHR9XG5cblx0cmV0dXJuIGhvb2tzLl9saXN0W2luZGV4XTtcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUge3Vua25vd259IFNcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2luZGV4JykuRGlzcGF0Y2g8aW1wb3J0KCcuL2luZGV4JykuU3RhdGVVcGRhdGVyPFM+Pn0gW2luaXRpYWxTdGF0ZV1cbiAqIEByZXR1cm5zIHtbUywgKHN0YXRlOiBTKSA9PiB2b2lkXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVN0YXRlKGluaXRpYWxTdGF0ZSkge1xuXHRjdXJyZW50SG9vayA9IDE7XG5cdHJldHVybiB1c2VSZWR1Y2VyKGludm9rZU9yUmV0dXJuLCBpbml0aWFsU3RhdGUpO1xufVxuXG4vKipcbiAqIEB0ZW1wbGF0ZSB7dW5rbm93bn0gU1xuICogQHRlbXBsYXRlIHt1bmtub3dufSBBXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbmRleCcpLlJlZHVjZXI8UywgQT59IHJlZHVjZXJcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2luZGV4JykuRGlzcGF0Y2g8aW1wb3J0KCcuL2luZGV4JykuU3RhdGVVcGRhdGVyPFM+Pn0gaW5pdGlhbFN0YXRlXG4gKiBAcGFyYW0geyhpbml0aWFsU3RhdGU6IGFueSkgPT4gdm9pZH0gW2luaXRdXG4gKiBAcmV0dXJucyB7WyBTLCAoc3RhdGU6IFMpID0+IHZvaWQgXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlLCBpbml0KSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuUmVkdWNlckhvb2tTdGF0ZX0gKi9cblx0Y29uc3QgaG9va1N0YXRlID0gZ2V0SG9va1N0YXRlKGN1cnJlbnRJbmRleCsrLCAyKTtcblx0aG9va1N0YXRlLl9yZWR1Y2VyID0gcmVkdWNlcjtcblx0aWYgKCFob29rU3RhdGUuX2NvbXBvbmVudCkge1xuXHRcdGhvb2tTdGF0ZS5fdmFsdWUgPSBbXG5cdFx0XHQhaW5pdCA/IGludm9rZU9yUmV0dXJuKHVuZGVmaW5lZCwgaW5pdGlhbFN0YXRlKSA6IGluaXQoaW5pdGlhbFN0YXRlKSxcblxuXHRcdFx0YWN0aW9uID0+IHtcblx0XHRcdFx0Y29uc3QgY3VycmVudFZhbHVlID0gaG9va1N0YXRlLl9uZXh0VmFsdWVcblx0XHRcdFx0XHQ/IGhvb2tTdGF0ZS5fbmV4dFZhbHVlWzBdXG5cdFx0XHRcdFx0OiBob29rU3RhdGUuX3ZhbHVlWzBdO1xuXHRcdFx0XHRjb25zdCBuZXh0VmFsdWUgPSBob29rU3RhdGUuX3JlZHVjZXIoY3VycmVudFZhbHVlLCBhY3Rpb24pO1xuXG5cdFx0XHRcdGlmIChjdXJyZW50VmFsdWUgIT09IG5leHRWYWx1ZSkge1xuXHRcdFx0XHRcdGhvb2tTdGF0ZS5fbmV4dFZhbHVlID0gW25leHRWYWx1ZSwgaG9va1N0YXRlLl92YWx1ZVsxXV07XG5cdFx0XHRcdFx0aG9va1N0YXRlLl9jb21wb25lbnQuc2V0U3RhdGUoe30pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XTtcblxuXHRcdGhvb2tTdGF0ZS5fY29tcG9uZW50ID0gY3VycmVudENvbXBvbmVudDtcblxuXHRcdGlmICghY3VycmVudENvbXBvbmVudC5faGFzU2N1RnJvbUhvb2tzKSB7XG5cdFx0XHRjdXJyZW50Q29tcG9uZW50Ll9oYXNTY3VGcm9tSG9va3MgPSB0cnVlO1xuXHRcdFx0bGV0IHByZXZTY3UgPSBjdXJyZW50Q29tcG9uZW50LnNob3VsZENvbXBvbmVudFVwZGF0ZTtcblx0XHRcdGNvbnN0IHByZXZDV1UgPSBjdXJyZW50Q29tcG9uZW50LmNvbXBvbmVudFdpbGxVcGRhdGU7XG5cblx0XHRcdC8vIElmIHdlJ3JlIGRlYWxpbmcgd2l0aCBhIGZvcmNlZCB1cGRhdGUgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAgd2lsbFxuXHRcdFx0Ly8gbm90IGJlIGNhbGxlZC4gQnV0IHdlIHVzZSB0aGF0IHRvIHVwZGF0ZSB0aGUgaG9vayB2YWx1ZXMsIHNvIHdlXG5cdFx0XHQvLyBuZWVkIHRvIGNhbGwgaXQuXG5cdFx0XHRjdXJyZW50Q29tcG9uZW50LmNvbXBvbmVudFdpbGxVcGRhdGUgPSBmdW5jdGlvbiAocCwgcywgYykge1xuXHRcdFx0XHRpZiAodGhpcy5fZm9yY2UpIHtcblx0XHRcdFx0XHRsZXQgdG1wID0gcHJldlNjdTtcblx0XHRcdFx0XHQvLyBDbGVhciB0byBhdm9pZCBvdGhlciBzQ1UgaG9va3MgZnJvbSBiZWluZyBjYWxsZWRcblx0XHRcdFx0XHRwcmV2U2N1ID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdHVwZGF0ZUhvb2tTdGF0ZShwLCBzLCBjKTtcblx0XHRcdFx0XHRwcmV2U2N1ID0gdG1wO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHByZXZDV1UpIHByZXZDV1UuY2FsbCh0aGlzLCBwLCBzLCBjKTtcblx0XHRcdH07XG5cblx0XHRcdC8vIFRoaXMgU0NVIGhhcyB0aGUgcHVycG9zZSBvZiBiYWlsaW5nIG91dCBhZnRlciByZXBlYXRlZCB1cGRhdGVzXG5cdFx0XHQvLyB0byBzdGF0ZWZ1bCBob29rcy5cblx0XHRcdC8vIHdlIHN0b3JlIHRoZSBuZXh0IHZhbHVlIGluIF9uZXh0VmFsdWVbMF0gYW5kIGtlZXAgZG9pbmcgdGhhdCBmb3IgYWxsXG5cdFx0XHQvLyBzdGF0ZSBzZXR0ZXJzLCBpZiB3ZSBoYXZlIG5leHQgc3RhdGVzIGFuZFxuXHRcdFx0Ly8gYWxsIG5leHQgc3RhdGVzIHdpdGhpbiBhIGNvbXBvbmVudCBlbmQgdXAgYmVpbmcgZXF1YWwgdG8gdGhlaXIgb3JpZ2luYWwgc3RhdGVcblx0XHRcdC8vIHdlIGFyZSBzYWZlIHRvIGJhaWwgb3V0IGZvciB0aGlzIHNwZWNpZmljIGNvbXBvbmVudC5cblx0XHRcdC8qKlxuXHRcdFx0ICpcblx0XHRcdCAqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5Db21wb25lbnRbXCJzaG91bGRDb21wb25lbnRVcGRhdGVcIl19XG5cdFx0XHQgKi9cblx0XHRcdC8vIEB0cy1pZ25vcmUgLSBXZSBkb24ndCB1c2UgVFMgdG8gZG93bnRyYW5zcGlsZVxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWlubmVyLWRlY2xhcmF0aW9uc1xuXHRcdFx0ZnVuY3Rpb24gdXBkYXRlSG9va1N0YXRlKHAsIHMsIGMpIHtcblx0XHRcdFx0aWYgKCFob29rU3RhdGUuX2NvbXBvbmVudC5fX2hvb2tzKSByZXR1cm4gdHJ1ZTtcblxuXHRcdFx0XHQvLyBXZSBjaGVjayB3aGV0aGVyIHdlIGhhdmUgY29tcG9uZW50cyB3aXRoIGEgbmV4dFZhbHVlIHNldCB0aGF0XG5cdFx0XHRcdC8vIGhhdmUgdmFsdWVzIHRoYXQgYXJlbid0IGVxdWFsIHRvIG9uZSBhbm90aGVyIHRoaXMgcHVzaGVzXG5cdFx0XHRcdC8vIHVzIHRvIHVwZGF0ZSBmdXJ0aGVyIGRvd24gdGhlIHRyZWVcblx0XHRcdFx0bGV0IHVwZGF0ZWRIb29rID0gZmFsc2U7XG5cdFx0XHRcdGxldCBzaG91bGRVcGRhdGUgPSBob29rU3RhdGUuX2NvbXBvbmVudC5wcm9wcyAhPT0gcDtcblx0XHRcdFx0aG9va1N0YXRlLl9jb21wb25lbnQuX19ob29rcy5fbGlzdC5zb21lKGhvb2tJdGVtID0+IHtcblx0XHRcdFx0XHRpZiAoaG9va0l0ZW0uX25leHRWYWx1ZSkge1xuXHRcdFx0XHRcdFx0dXBkYXRlZEhvb2sgPSB0cnVlO1xuXHRcdFx0XHRcdFx0Y29uc3QgY3VycmVudFZhbHVlID0gaG9va0l0ZW0uX3ZhbHVlWzBdO1xuXHRcdFx0XHRcdFx0aG9va0l0ZW0uX3ZhbHVlID0gaG9va0l0ZW0uX25leHRWYWx1ZTtcblx0XHRcdFx0XHRcdGhvb2tJdGVtLl9uZXh0VmFsdWUgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudFZhbHVlICE9PSBob29rSXRlbS5fdmFsdWVbMF0pIHNob3VsZFVwZGF0ZSA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRpZiAocHJldlNjdSkge1xuXHRcdFx0XHRcdGNvbnN0IHJlc3VsdCA9IHByZXZTY3UuY2FsbCh0aGlzLCBwLCBzLCBjKTtcblx0XHRcdFx0XHRyZXR1cm4gdXBkYXRlZEhvb2sgPyByZXN1bHQgfHwgc2hvdWxkVXBkYXRlIDogcmVzdWx0O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuICF1cGRhdGVkSG9vayB8fCBzaG91bGRVcGRhdGU7XG5cdFx0XHR9XG5cblx0XHRcdGN1cnJlbnRDb21wb25lbnQuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gdXBkYXRlSG9va1N0YXRlO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBob29rU3RhdGUuX25leHRWYWx1ZSB8fCBob29rU3RhdGUuX3ZhbHVlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuRWZmZWN0fSBjYWxsYmFja1xuICogQHBhcmFtIHt1bmtub3duW119IGFyZ3NcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRWZmZWN0KGNhbGxiYWNrLCBhcmdzKSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuRWZmZWN0SG9va1N0YXRlfSAqL1xuXHRjb25zdCBzdGF0ZSA9IGdldEhvb2tTdGF0ZShjdXJyZW50SW5kZXgrKywgMyk7XG5cdGlmICghb3B0aW9ucy5fc2tpcEVmZmVjdHMgJiYgYXJnc0NoYW5nZWQoc3RhdGUuX2FyZ3MsIGFyZ3MpKSB7XG5cdFx0c3RhdGUuX3ZhbHVlID0gY2FsbGJhY2s7XG5cdFx0c3RhdGUuX3BlbmRpbmdBcmdzID0gYXJncztcblxuXHRcdGN1cnJlbnRDb21wb25lbnQuX19ob29rcy5fcGVuZGluZ0VmZmVjdHMucHVzaChzdGF0ZSk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkVmZmVjdH0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7dW5rbm93bltdfSBhcmdzXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUxheW91dEVmZmVjdChjYWxsYmFjaywgYXJncykge1xuXHQvKiogQHR5cGUge2ltcG9ydCgnLi9pbnRlcm5hbCcpLkVmZmVjdEhvb2tTdGF0ZX0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDQpO1xuXHRpZiAoIW9wdGlvbnMuX3NraXBFZmZlY3RzICYmIGFyZ3NDaGFuZ2VkKHN0YXRlLl9hcmdzLCBhcmdzKSkge1xuXHRcdHN0YXRlLl92YWx1ZSA9IGNhbGxiYWNrO1xuXHRcdHN0YXRlLl9wZW5kaW5nQXJncyA9IGFyZ3M7XG5cblx0XHRjdXJyZW50Q29tcG9uZW50Ll9yZW5kZXJDYWxsYmFja3MucHVzaChzdGF0ZSk7XG5cdH1cbn1cblxuLyoqIEB0eXBlIHsoaW5pdGlhbFZhbHVlOiB1bmtub3duKSA9PiB1bmtub3dufSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVJlZihpbml0aWFsVmFsdWUpIHtcblx0Y3VycmVudEhvb2sgPSA1O1xuXHRyZXR1cm4gdXNlTWVtbygoKSA9PiAoeyBjdXJyZW50OiBpbml0aWFsVmFsdWUgfSksIFtdKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gcmVmXG4gKiBAcGFyYW0geygpID0+IG9iamVjdH0gY3JlYXRlSGFuZGxlXG4gKiBAcGFyYW0ge3Vua25vd25bXX0gYXJnc1xuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlSGFuZGxlLCBhcmdzKSB7XG5cdGN1cnJlbnRIb29rID0gNjtcblx0dXNlTGF5b3V0RWZmZWN0KFxuXHRcdCgpID0+IHtcblx0XHRcdGlmICh0eXBlb2YgcmVmID09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0Y29uc3QgcmVzdWx0ID0gcmVmKGNyZWF0ZUhhbmRsZSgpKTtcblx0XHRcdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdFx0XHRyZWYobnVsbCk7XG5cdFx0XHRcdFx0aWYgKHJlc3VsdCAmJiB0eXBlb2YgcmVzdWx0ID09ICdmdW5jdGlvbicpIHJlc3VsdCgpO1xuXHRcdFx0XHR9O1xuXHRcdFx0fSBlbHNlIGlmIChyZWYpIHtcblx0XHRcdFx0cmVmLmN1cnJlbnQgPSBjcmVhdGVIYW5kbGUoKTtcblx0XHRcdFx0cmV0dXJuICgpID0+IChyZWYuY3VycmVudCA9IG51bGwpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0YXJncyA9PSBudWxsID8gYXJncyA6IGFyZ3MuY29uY2F0KHJlZilcblx0KTtcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUge3Vua25vd259IFRcbiAqIEBwYXJhbSB7KCkgPT4gVH0gZmFjdG9yeVxuICogQHBhcmFtIHt1bmtub3duW119IGFyZ3NcbiAqIEByZXR1cm5zIHtUfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVtbyhmYWN0b3J5LCBhcmdzKSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuTWVtb0hvb2tTdGF0ZTxUPn0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDcpO1xuXHRpZiAoYXJnc0NoYW5nZWQoc3RhdGUuX2FyZ3MsIGFyZ3MpKSB7XG5cdFx0c3RhdGUuX3ZhbHVlID0gZmFjdG9yeSgpO1xuXHRcdHN0YXRlLl9hcmdzID0gYXJncztcblx0XHRzdGF0ZS5fZmFjdG9yeSA9IGZhY3Rvcnk7XG5cdH1cblxuXHRyZXR1cm4gc3RhdGUuX3ZhbHVlO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7KCkgPT4gdm9pZH0gY2FsbGJhY2tcbiAqIEBwYXJhbSB7dW5rbm93bltdfSBhcmdzXG4gKiBAcmV0dXJucyB7KCkgPT4gdm9pZH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNhbGxiYWNrKGNhbGxiYWNrLCBhcmdzKSB7XG5cdGN1cnJlbnRIb29rID0gODtcblx0cmV0dXJuIHVzZU1lbW8oKCkgPT4gY2FsbGJhY2ssIGFyZ3MpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuUHJlYWN0Q29udGV4dH0gY29udGV4dFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ29udGV4dChjb250ZXh0KSB7XG5cdGNvbnN0IHByb3ZpZGVyID0gY3VycmVudENvbXBvbmVudC5jb250ZXh0W2NvbnRleHQuX2lkXTtcblx0Ly8gV2UgY291bGQgc2tpcCB0aGlzIGNhbGwgaGVyZSwgYnV0IHRoYW4gd2UnZCBub3QgY2FsbFxuXHQvLyBgb3B0aW9ucy5faG9va2AuIFdlIG5lZWQgdG8gZG8gdGhhdCBpbiBvcmRlciB0byBtYWtlXG5cdC8vIHRoZSBkZXZ0b29scyBhd2FyZSBvZiB0aGlzIGhvb2suXG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuQ29udGV4dEhvb2tTdGF0ZX0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDkpO1xuXHQvLyBUaGUgZGV2dG9vbHMgbmVlZHMgYWNjZXNzIHRvIHRoZSBjb250ZXh0IG9iamVjdCB0b1xuXHQvLyBiZSBhYmxlIHRvIHB1bGwgb2YgdGhlIGRlZmF1bHQgdmFsdWUgd2hlbiBubyBwcm92aWRlclxuXHQvLyBpcyBwcmVzZW50IGluIHRoZSB0cmVlLlxuXHRzdGF0ZS5fY29udGV4dCA9IGNvbnRleHQ7XG5cdGlmICghcHJvdmlkZXIpIHJldHVybiBjb250ZXh0Ll9kZWZhdWx0VmFsdWU7XG5cdC8vIFRoaXMgaXMgcHJvYmFibHkgbm90IHNhZmUgdG8gY29udmVydCB0byBcIiFcIlxuXHRpZiAoc3RhdGUuX3ZhbHVlID09IG51bGwpIHtcblx0XHRzdGF0ZS5fdmFsdWUgPSB0cnVlO1xuXHRcdHByb3ZpZGVyLnN1YihjdXJyZW50Q29tcG9uZW50KTtcblx0fVxuXHRyZXR1cm4gcHJvdmlkZXIucHJvcHMudmFsdWU7XG59XG5cbi8qKlxuICogRGlzcGxheSBhIGN1c3RvbSBsYWJlbCBmb3IgYSBjdXN0b20gaG9vayBmb3IgdGhlIGRldnRvb2xzIHBhbmVsXG4gKiBAdHlwZSB7PFQ+KHZhbHVlOiBULCBjYj86ICh2YWx1ZTogVCkgPT4gc3RyaW5nIHwgbnVtYmVyKSA9PiB2b2lkfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyKSB7XG5cdGlmIChvcHRpb25zLnVzZURlYnVnVmFsdWUpIHtcblx0XHRvcHRpb25zLnVzZURlYnVnVmFsdWUoXG5cdFx0XHRmb3JtYXR0ZXIgPyBmb3JtYXR0ZXIodmFsdWUpIDogLyoqIEB0eXBlIHthbnl9Ki8gKHZhbHVlKVxuXHRcdCk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0geyhlcnJvcjogdW5rbm93biwgZXJyb3JJbmZvOiBpbXBvcnQoJ3ByZWFjdCcpLkVycm9ySW5mbykgPT4gdm9pZH0gY2JcbiAqIEByZXR1cm5zIHtbdW5rbm93biwgKCkgPT4gdm9pZF19XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VFcnJvckJvdW5kYXJ5KGNiKSB7XG5cdC8qKiBAdHlwZSB7aW1wb3J0KCcuL2ludGVybmFsJykuRXJyb3JCb3VuZGFyeUhvb2tTdGF0ZX0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDEwKTtcblx0Y29uc3QgZXJyU3RhdGUgPSB1c2VTdGF0ZSgpO1xuXHRzdGF0ZS5fdmFsdWUgPSBjYjtcblx0aWYgKCFjdXJyZW50Q29tcG9uZW50LmNvbXBvbmVudERpZENhdGNoKSB7XG5cdFx0Y3VycmVudENvbXBvbmVudC5jb21wb25lbnREaWRDYXRjaCA9IChlcnIsIGVycm9ySW5mbykgPT4ge1xuXHRcdFx0aWYgKHN0YXRlLl92YWx1ZSkgc3RhdGUuX3ZhbHVlKGVyciwgZXJyb3JJbmZvKTtcblx0XHRcdGVyclN0YXRlWzFdKGVycik7XG5cdFx0fTtcblx0fVxuXHRyZXR1cm4gW1xuXHRcdGVyclN0YXRlWzBdLFxuXHRcdCgpID0+IHtcblx0XHRcdGVyclN0YXRlWzFdKHVuZGVmaW5lZCk7XG5cdFx0fVxuXHRdO1xufVxuXG4vKiogQHR5cGUgeygpID0+IHN0cmluZ30gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VJZCgpIHtcblx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5JZEhvb2tTdGF0ZX0gKi9cblx0Y29uc3Qgc3RhdGUgPSBnZXRIb29rU3RhdGUoY3VycmVudEluZGV4KyssIDExKTtcblx0aWYgKCFzdGF0ZS5fdmFsdWUpIHtcblx0XHQvLyBHcmFiIGVpdGhlciB0aGUgcm9vdCBub2RlIG9yIHRoZSBuZWFyZXN0IGFzeW5jIGJvdW5kYXJ5IG5vZGUuXG5cdFx0LyoqIEB0eXBlIHtpbXBvcnQoJy4vaW50ZXJuYWwnKS5WTm9kZX0gKi9cblx0XHRsZXQgcm9vdCA9IGN1cnJlbnRDb21wb25lbnQuX3Zub2RlO1xuXHRcdHdoaWxlIChyb290ICE9PSBudWxsICYmICFyb290Ll9tYXNrICYmIHJvb3QuX3BhcmVudCAhPT0gbnVsbCkge1xuXHRcdFx0cm9vdCA9IHJvb3QuX3BhcmVudDtcblx0XHR9XG5cblx0XHRsZXQgbWFzayA9IHJvb3QuX21hc2sgfHwgKHJvb3QuX21hc2sgPSBbMCwgMF0pO1xuXHRcdHN0YXRlLl92YWx1ZSA9ICdQJyArIG1hc2tbMF0gKyAnLScgKyBtYXNrWzFdKys7XG5cdH1cblxuXHRyZXR1cm4gc3RhdGUuX3ZhbHVlO1xufVxuXG4vKipcbiAqIEFmdGVyIHBhaW50IGVmZmVjdHMgY29uc3VtZXIuXG4gKi9cbmZ1bmN0aW9uIGZsdXNoQWZ0ZXJQYWludEVmZmVjdHMoKSB7XG5cdGxldCBjb21wb25lbnQ7XG5cdHdoaWxlICgoY29tcG9uZW50ID0gYWZ0ZXJQYWludEVmZmVjdHMuc2hpZnQoKSkpIHtcblx0XHRjb25zdCBob29rcyA9IGNvbXBvbmVudC5fX2hvb2tzO1xuXHRcdGlmICghY29tcG9uZW50Ll9wYXJlbnREb20gfHwgIWhvb2tzKSBjb250aW51ZTtcblx0XHR0cnkge1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzLnNvbWUoaW52b2tlQ2xlYW51cCk7XG5cdFx0XHRob29rcy5fcGVuZGluZ0VmZmVjdHMuc29tZShpbnZva2VFZmZlY3QpO1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzID0gW107XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0aG9va3MuX3BlbmRpbmdFZmZlY3RzID0gW107XG5cdFx0XHRvcHRpb25zLl9jYXRjaEVycm9yKGUsIGNvbXBvbmVudC5fdm5vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5sZXQgSEFTX1JBRiA9IHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPT0gJ2Z1bmN0aW9uJztcblxuLyoqXG4gKiBTY2hlZHVsZSBhIGNhbGxiYWNrIHRvIGJlIGludm9rZWQgYWZ0ZXIgdGhlIGJyb3dzZXIgaGFzIGEgY2hhbmNlIHRvIHBhaW50IGEgbmV3IGZyYW1lLlxuICogRG8gdGhpcyBieSBjb21iaW5pbmcgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIChyQUYpICsgc2V0VGltZW91dCB0byBpbnZva2UgYSBjYWxsYmFjayBhZnRlclxuICogdGhlIG5leHQgYnJvd3NlciBmcmFtZS5cbiAqXG4gKiBBbHNvLCBzY2hlZHVsZSBhIHRpbWVvdXQgaW4gcGFyYWxsZWwgdG8gdGhlIHRoZSByQUYgdG8gZW5zdXJlIHRoZSBjYWxsYmFjayBpcyBpbnZva2VkXG4gKiBldmVuIGlmIFJBRiBkb2Vzbid0IGZpcmUgKGZvciBleGFtcGxlIGlmIHRoZSBicm93c2VyIHRhYiBpcyBub3QgdmlzaWJsZSlcbiAqXG4gKiBAcGFyYW0geygpID0+IHZvaWR9IGNhbGxiYWNrXG4gKi9cbmZ1bmN0aW9uIGFmdGVyTmV4dEZyYW1lKGNhbGxiYWNrKSB7XG5cdGNvbnN0IGRvbmUgPSAoKSA9PiB7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdGlmIChIQVNfUkFGKSBjYW5jZWxBbmltYXRpb25GcmFtZShyYWYpO1xuXHRcdHNldFRpbWVvdXQoY2FsbGJhY2spO1xuXHR9O1xuXHRjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dChkb25lLCBSQUZfVElNRU9VVCk7XG5cblx0bGV0IHJhZjtcblx0aWYgKEhBU19SQUYpIHtcblx0XHRyYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZG9uZSk7XG5cdH1cbn1cblxuLy8gTm90ZTogaWYgc29tZW9uZSB1c2VkIG9wdGlvbnMuZGVib3VuY2VSZW5kZXJpbmcgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUsXG4vLyB0aGVuIGVmZmVjdHMgd2lsbCBBTFdBWVMgcnVuIG9uIHRoZSBORVhUIGZyYW1lIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgb25lLCBpbmN1cnJpbmcgYSB+MTZtcyBkZWxheS5cbi8vIFBlcmhhcHMgdGhpcyBpcyBub3Qgc3VjaCBhIGJpZyBkZWFsLlxuLyoqXG4gKiBTY2hlZHVsZSBhZnRlclBhaW50RWZmZWN0cyBmbHVzaCBhZnRlciB0aGUgYnJvd3NlciBwYWludHNcbiAqIEBwYXJhbSB7bnVtYmVyfSBuZXdRdWV1ZUxlbmd0aFxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGFmdGVyUGFpbnQobmV3UXVldWVMZW5ndGgpIHtcblx0aWYgKG5ld1F1ZXVlTGVuZ3RoID09PSAxIHx8IHByZXZSYWYgIT09IG9wdGlvbnMucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG5cdFx0cHJldlJhZiA9IG9wdGlvbnMucmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuXHRcdChwcmV2UmFmIHx8IGFmdGVyTmV4dEZyYW1lKShmbHVzaEFmdGVyUGFpbnRFZmZlY3RzKTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuSG9va1N0YXRlfSBob29rXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gaW52b2tlQ2xlYW51cChob29rKSB7XG5cdC8vIEEgaG9vayBjbGVhbnVwIGNhbiBpbnRyb2R1Y2UgYSBjYWxsIHRvIHJlbmRlciB3aGljaCBjcmVhdGVzIGEgbmV3IHJvb3QsIHRoaXMgd2lsbCBjYWxsIG9wdGlvbnMudm5vZGVcblx0Ly8gYW5kIG1vdmUgdGhlIGN1cnJlbnRDb21wb25lbnQgYXdheS5cblx0Y29uc3QgY29tcCA9IGN1cnJlbnRDb21wb25lbnQ7XG5cdGxldCBjbGVhbnVwID0gaG9vay5fY2xlYW51cDtcblx0aWYgKHR5cGVvZiBjbGVhbnVwID09ICdmdW5jdGlvbicpIHtcblx0XHRob29rLl9jbGVhbnVwID0gdW5kZWZpbmVkO1xuXHRcdGNsZWFudXAoKTtcblx0fVxuXG5cdGN1cnJlbnRDb21wb25lbnQgPSBjb21wO1xufVxuXG4vKipcbiAqIEludm9rZSBhIEhvb2sncyBlZmZlY3RcbiAqIEBwYXJhbSB7aW1wb3J0KCcuL2ludGVybmFsJykuRWZmZWN0SG9va1N0YXRlfSBob29rXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gaW52b2tlRWZmZWN0KGhvb2spIHtcblx0Ly8gQSBob29rIGNhbGwgY2FuIGludHJvZHVjZSBhIGNhbGwgdG8gcmVuZGVyIHdoaWNoIGNyZWF0ZXMgYSBuZXcgcm9vdCwgdGhpcyB3aWxsIGNhbGwgb3B0aW9ucy52bm9kZVxuXHQvLyBhbmQgbW92ZSB0aGUgY3VycmVudENvbXBvbmVudCBhd2F5LlxuXHRjb25zdCBjb21wID0gY3VycmVudENvbXBvbmVudDtcblx0aG9vay5fY2xlYW51cCA9IGhvb2suX3ZhbHVlKCk7XG5cdGN1cnJlbnRDb21wb25lbnQgPSBjb21wO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7dW5rbm93bltdfSBvbGRBcmdzXG4gKiBAcGFyYW0ge3Vua25vd25bXX0gbmV3QXJnc1xuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGFyZ3NDaGFuZ2VkKG9sZEFyZ3MsIG5ld0FyZ3MpIHtcblx0cmV0dXJuIChcblx0XHQhb2xkQXJncyB8fFxuXHRcdG9sZEFyZ3MubGVuZ3RoICE9PSBuZXdBcmdzLmxlbmd0aCB8fFxuXHRcdG5ld0FyZ3Muc29tZSgoYXJnLCBpbmRleCkgPT4gYXJnICE9PSBvbGRBcmdzW2luZGV4XSlcblx0KTtcbn1cblxuLyoqXG4gKiBAdGVtcGxhdGUgQXJnXG4gKiBAcGFyYW0ge0FyZ30gYXJnXG4gKiBAcGFyYW0geyhhcmc6IEFyZykgPT4gYW55fSBmXG4gKiBAcmV0dXJucyB7YW55fVxuICovXG5mdW5jdGlvbiBpbnZva2VPclJldHVybihhcmcsIGYpIHtcblx0cmV0dXJuIHR5cGVvZiBmID09ICdmdW5jdGlvbicgPyBmKGFyZykgOiBmO1xufVxuIiwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgIi8vIFNjZW5lIGRvY3VtZW50IHR5cGVzIHNoYXJlZCBieSBjbGllbnQgYW5kIHNlcnZlciwgcGx1cyBzYW5pdGl6ZXJzIGFuZCB0aGVcbi8vIEpTT04gY29kZWMuIEEgc2NlbmUgaXMgc21hbGwgKHBhcmFtcyBvbmx5KSBcdTIwMTQgbWVkaWEgYmxvYnMgbGl2ZSBjbGllbnQtc2lkZS5cblxuZXhwb3J0IGNvbnN0IFNDRU5FX0RBVEFfTElNSVQgPSA2MF8wMDA7XG5leHBvcnQgY29uc3QgVEhVTUJfTElNSVQgPSA2MF8wMDA7XG5leHBvcnQgY29uc3QgTUFYX0xBWUVSUyA9IDEyO1xuXG5leHBvcnQgY29uc3QgTUVESUFfS0lORFMgPSBbXCJpbWFnZVwiLCBcInZpZGVvXCIsIFwiYXVkaW9cIiwgXCJkYXRhXCJdIGFzIGNvbnN0O1xuZXhwb3J0IHR5cGUgTWVkaWFLaW5kID0gKHR5cGVvZiBNRURJQV9LSU5EUylbbnVtYmVyXTtcblxuZXhwb3J0IGNvbnN0IEJMRU5EX01PREVTID0gW1xuICBcIm5vcm1hbFwiLFxuICBcImFkZFwiLFxuICBcInNjcmVlblwiLFxuICBcIm11bHRpcGx5XCIsXG4gIFwib3ZlcmxheVwiLFxuICBcImRpZmZlcmVuY2VcIixcbiAgXCJsaWdodGVuXCIsXG4gIFwiZGFya2VuXCIsXG5dIGFzIGNvbnN0O1xuZXhwb3J0IHR5cGUgQmxlbmRNb2RlID0gKHR5cGVvZiBCTEVORF9NT0RFUylbbnVtYmVyXTtcblxuZXhwb3J0IGNvbnN0IFRJTEVfTU9ERVMgPSBbXCJjcm9wXCIsIFwicmVwZWF0XCIsIFwibWlycm9yXCJdIGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgQkdfTU9ERVMgPSBbXCJ2b2lkXCIsIFwiZ3JhZGllbnRcIiwgXCJwbGFzbWFcIiwgXCJ0dW5uZWxcIl0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBQT0lOVEVSX01PREVTID0gW1widm9ydGV4XCIsIFwiZ3Jhdml0eVwiLCBcInByaXNtXCIsIFwibWVsdFwiXSBhcyBjb25zdDtcblxuLyoqIFBlci1sYXllciBlZmZlY3QgKyB0cmFuc2Zvcm0gc3RhY2suIEFsbCAwLi4xIHVubGVzcyBub3RlZC4gKi9cbmV4cG9ydCB0eXBlIExheWVyRnggPSB7XG4gIC8vIFRyYW5zZm9ybSAoc2NlbmUgdW5pdHM6IHgveSBhcmUgY2VudGVyIG9mZnNldHMsIC0yLi4yOyBzY2FsZSAwLjA1Li42KVxuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgc2NhbGU6IG51bWJlcjtcbiAgLyoqIERlZ3JlZXMgKi9cbiAgcm90YXRpb246IG51bWJlcjtcbiAgb3BhY2l0eTogbnVtYmVyO1xuICBibGVuZDogQmxlbmRNb2RlO1xuICB2aXNpYmxlOiBib29sZWFuO1xuICAvKiogMCBjcm9wLCAxIHJlcGVhdCwgMiBtaXJyb3ItcmVwZWF0IFx1MjAxNCByZXBlYXQgbWFrZXMgYSBzaW5nbGUgaW1hZ2UgaW5maW5pdGUgKi9cbiAgdGlsZTogbnVtYmVyO1xuICAvLyBEaXN0b3J0XG4gIHdhcnA6IG51bWJlcjtcbiAgc3dpcmw6IG51bWJlcjtcbiAgcmlwcGxlOiBudW1iZXI7XG4gIGthbGVpZG86IG51bWJlcjtcbiAgcGl4ZWxhdGU6IG51bWJlcjtcbiAgLyoqIC0xIHBpbmNoIC4uIDEgYnVsZ2UgKi9cbiAgYnVsZ2U6IG51bWJlcjtcbiAgbWlycm9yOiBudW1iZXI7XG4gIC8vIENvbG9yXG4gIGh1ZTogbnVtYmVyO1xuICAvKiogMC4uMiAqL1xuICBzYXR1cmF0aW9uOiBudW1iZXI7XG4gIC8qKiAwLi4yICovXG4gIGNvbnRyYXN0OiBudW1iZXI7XG4gIC8qKiAwLi4yICovXG4gIGJyaWdodG5lc3M6IG51bWJlcjtcbiAgaW52ZXJ0OiBudW1iZXI7XG4gIHBvc3Rlcml6ZTogbnVtYmVyO1xuICBjaHJvbWE6IG51bWJlcjtcbiAgZWRnZXM6IG51bWJlcjtcbiAgdGludEFtb3VudDogbnVtYmVyO1xuICB0aW50Q29sb3I6IHN0cmluZztcbiAgLy8gTW90aW9uIChhbmltYXRlZCBieSB0aGUgZW5naW5lIGNsb2NrKVxuICAvKiogLTEuLjEgcmV2b2x1dGlvbnMtaXNoICovXG4gIHNwaW46IG51bWJlcjtcbiAgZHJpZnQ6IG51bWJlcjtcbiAgcHVsc2U6IG51bWJlcjtcbiAgc2hpbW1lcjogbnVtYmVyO1xufTtcblxuZXhwb3J0IHR5cGUgU2NlbmVMYXllciA9IHtcbiAgaWQ6IHN0cmluZztcbiAgLyoqIEluZGV4ZWREQiBtZWRpYSBrZXkgb24gdGhlIGNsaWVudCB0aGF0IGNyZWF0ZWQgaXQuICovXG4gIGltYWdlSWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICAvKiogSG93IHRoZSBJbmRleGVkREIgYmxvYiBzaG91bGQgYmUgZGVjb2RlZCAvIHBsYXllZC4gRGVmYXVsdHMgdG8gaW1hZ2UuICovXG4gIG1lZGlhS2luZDogTWVkaWFLaW5kO1xuICBmeDogTGF5ZXJGeDtcbn07XG5cbi8qKiBHbG9iYWwgcG9zdC1wcm9jZXNzaW5nIHBhcmFtcy4gQWxsIDAuLjEgdW5sZXNzIG5vdGVkLiAqL1xuZXhwb3J0IHR5cGUgR2xvYmFsRnggPSB7XG4gIGJnTW9kZTogbnVtYmVyO1xuICBiZ0E6IHN0cmluZztcbiAgYmdCOiBzdHJpbmc7XG4gIC8vIEZlZWRiYWNrXG4gIGZlZWRiYWNrOiBudW1iZXI7XG4gIHRyYWlsczogbnVtYmVyO1xuICAvKiogLTEuLjEgKi9cbiAgZmJab29tOiBudW1iZXI7XG4gIC8qKiAtMS4uMSAqL1xuICBmYlJvdGF0ZTogbnVtYmVyO1xuICBmYkh1ZTogbnVtYmVyO1xuICAvLyBTcGFjZVxuICB3YXJwOiBudW1iZXI7XG4gIHN3aXJsOiBudW1iZXI7XG4gIHJpcHBsZTogbnVtYmVyO1xuICB6b29tOiBudW1iZXI7XG4gIGthbGVpZG86IG51bWJlcjtcbiAgbWlycm9yOiBudW1iZXI7XG4gIC8vIENvbG9yXG4gIGNocm9tYTogbnVtYmVyO1xuICBodWVPcmJpdDogbnVtYmVyO1xuICAvKiogMC4uMiAqL1xuICBzYXR1cmF0aW9uOiBudW1iZXI7XG4gIC8qKiAwLi4yICovXG4gIGNvbnRyYXN0OiBudW1iZXI7XG4gIHNvbGFyaXplOiBudW1iZXI7XG4gIC8vIFNpZ25hbFxuICBncmFpbjogbnVtYmVyO1xuICBzY2FubGluZXM6IG51bWJlcjtcbiAgdmlnbmV0dGU6IG51bWJlcjtcbiAgc3Ryb2JlOiBudW1iZXI7XG4gIC8vIE1vdGlvblxuICAvKiogMC4uMiAqL1xuICBzcGVlZDogbnVtYmVyO1xuICBhdWRpb1JlYWN0OiBudW1iZXI7XG4gIC8vIEN1cnNvclxuICBwb2ludGVyRm9yY2U6IG51bWJlcjtcbiAgcG9pbnRlclNpemU6IG51bWJlcjtcbiAgcG9pbnRlck1vZGU6IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIFNjZW5lID0ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGxheWVyczogU2NlbmVMYXllcltdO1xuICBnbG9iYWw6IEdsb2JhbEZ4O1xufTtcblxuZXhwb3J0IHR5cGUgU2NlbmVNZXRhID0ge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHVwZGF0ZWRBdDogc3RyaW5nO1xuICB0aHVtYjogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfTEFZRVJfRlg6IExheWVyRnggPSB7XG4gIHg6IDAsXG4gIHk6IDAsXG4gIHNjYWxlOiAxLFxuICByb3RhdGlvbjogMCxcbiAgb3BhY2l0eTogMSxcbiAgYmxlbmQ6IFwibm9ybWFsXCIsXG4gIHZpc2libGU6IHRydWUsXG4gIHRpbGU6IDAsXG4gIHdhcnA6IDAsXG4gIHN3aXJsOiAwLFxuICByaXBwbGU6IDAsXG4gIGthbGVpZG86IDAsXG4gIHBpeGVsYXRlOiAwLFxuICBidWxnZTogMCxcbiAgbWlycm9yOiAwLFxuICBodWU6IDAsXG4gIHNhdHVyYXRpb246IDEsXG4gIGNvbnRyYXN0OiAxLFxuICBicmlnaHRuZXNzOiAxLFxuICBpbnZlcnQ6IDAsXG4gIHBvc3Rlcml6ZTogMCxcbiAgY2hyb21hOiAwLFxuICBlZGdlczogMCxcbiAgdGludEFtb3VudDogMCxcbiAgdGludENvbG9yOiBcIiNhODc4ODBcIixcbiAgc3BpbjogMCxcbiAgZHJpZnQ6IDAsXG4gIHB1bHNlOiAwLFxuICBzaGltbWVyOiAwLFxufTtcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfR0xPQkFMX0ZYOiBHbG9iYWxGeCA9IHtcbiAgYmdNb2RlOiAwLFxuICBiZ0E6IFwiIzA2MDYwOFwiLFxuICBiZ0I6IFwiIzFhMTIxNlwiLFxuICBmZWVkYmFjazogMCxcbiAgdHJhaWxzOiAwLjYsXG4gIGZiWm9vbTogMCxcbiAgZmJSb3RhdGU6IDAsXG4gIGZiSHVlOiAwLFxuICB3YXJwOiAwLFxuICBzd2lybDogMCxcbiAgcmlwcGxlOiAwLFxuICB6b29tOiAwLFxuICBrYWxlaWRvOiAwLFxuICBtaXJyb3I6IDAsXG4gIGNocm9tYTogMCxcbiAgaHVlT3JiaXQ6IDAsXG4gIHNhdHVyYXRpb246IDEsXG4gIGNvbnRyYXN0OiAxLFxuICBzb2xhcml6ZTogMCxcbiAgZ3JhaW46IDAsXG4gIHNjYW5saW5lczogMCxcbiAgdmlnbmV0dGU6IDAuMjIsXG4gIHN0cm9iZTogMCxcbiAgc3BlZWQ6IDEsXG4gIGF1ZGlvUmVhY3Q6IDAsXG4gIHBvaW50ZXJGb3JjZTogMC42LFxuICBwb2ludGVyU2l6ZTogMC4zNSxcbiAgcG9pbnRlck1vZGU6IDAsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY2xhbXAodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIE1hdGgubWluKG1heCwgTWF0aC5tYXgobWluLCB2YWx1ZSkpO1xufVxuXG5mdW5jdGlvbiBmaW5pdGUodmFsdWU6IHVua25vd24sIGZhbGxiYWNrOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiICYmIE51bWJlci5pc0Zpbml0ZSh2YWx1ZSkgPyB2YWx1ZSA6IGZhbGxiYWNrO1xufVxuXG5mdW5jdGlvbiBudW0odmFsdWU6IHVua25vd24sIGZhbGxiYWNrOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBjbGFtcChmaW5pdGUodmFsdWUsIGZhbGxiYWNrKSwgbWluLCBtYXgpO1xufVxuXG5mdW5jdGlvbiBjb2xvcih2YWx1ZTogdW5rbm93biwgZmFsbGJhY2s6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgJiYgL14jWzAtOWEtZl17Nn0kL2kudGVzdCh2YWx1ZSkgPyB2YWx1ZSA6IGZhbGxiYWNrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FuaXRpemVMYXllckZ4KGlucHV0OiBQYXJ0aWFsPExheWVyRng+IHwgbnVsbCB8IHVuZGVmaW5lZCk6IExheWVyRngge1xuICBjb25zdCB0ID0gaW5wdXQgPz8ge307XG4gIGNvbnN0IGQgPSBERUZBVUxUX0xBWUVSX0ZYO1xuICByZXR1cm4ge1xuICAgIHg6IG51bSh0LngsIGQueCwgLTMsIDMpLFxuICAgIHk6IG51bSh0LnksIGQueSwgLTMsIDMpLFxuICAgIHNjYWxlOiBudW0odC5zY2FsZSwgZC5zY2FsZSwgMC4wNSwgNiksXG4gICAgcm90YXRpb246IG51bSh0LnJvdGF0aW9uLCBkLnJvdGF0aW9uLCAtMzYwMCwgMzYwMCksXG4gICAgb3BhY2l0eTogbnVtKHQub3BhY2l0eSwgZC5vcGFjaXR5LCAwLCAxKSxcbiAgICBibGVuZDogQkxFTkRfTU9ERVMuaW5jbHVkZXModC5ibGVuZCBhcyBCbGVuZE1vZGUpID8gKHQuYmxlbmQgYXMgQmxlbmRNb2RlKSA6IFwibm9ybWFsXCIsXG4gICAgdmlzaWJsZTogdHlwZW9mIHQudmlzaWJsZSA9PT0gXCJib29sZWFuXCIgPyB0LnZpc2libGUgOiB0cnVlLFxuICAgIHRpbGU6IG51bSh0LnRpbGUsIGQudGlsZSwgMCwgMiksXG4gICAgd2FycDogbnVtKHQud2FycCwgZC53YXJwLCAwLCAxKSxcbiAgICBzd2lybDogbnVtKHQuc3dpcmwsIGQuc3dpcmwsIDAsIDEpLFxuICAgIHJpcHBsZTogbnVtKHQucmlwcGxlLCBkLnJpcHBsZSwgMCwgMSksXG4gICAga2FsZWlkbzogbnVtKHQua2FsZWlkbywgZC5rYWxlaWRvLCAwLCAxKSxcbiAgICBwaXhlbGF0ZTogbnVtKHQucGl4ZWxhdGUsIGQucGl4ZWxhdGUsIDAsIDEpLFxuICAgIGJ1bGdlOiBudW0odC5idWxnZSwgZC5idWxnZSwgLTEsIDEpLFxuICAgIG1pcnJvcjogbnVtKHQubWlycm9yLCBkLm1pcnJvciwgMCwgMSksXG4gICAgaHVlOiBudW0odC5odWUsIGQuaHVlLCAwLCAxKSxcbiAgICBzYXR1cmF0aW9uOiBudW0odC5zYXR1cmF0aW9uLCBkLnNhdHVyYXRpb24sIDAsIDIpLFxuICAgIGNvbnRyYXN0OiBudW0odC5jb250cmFzdCwgZC5jb250cmFzdCwgMCwgMiksXG4gICAgYnJpZ2h0bmVzczogbnVtKHQuYnJpZ2h0bmVzcywgZC5icmlnaHRuZXNzLCAwLCAyKSxcbiAgICBpbnZlcnQ6IG51bSh0LmludmVydCwgZC5pbnZlcnQsIDAsIDEpLFxuICAgIHBvc3Rlcml6ZTogbnVtKHQucG9zdGVyaXplLCBkLnBvc3Rlcml6ZSwgMCwgMSksXG4gICAgY2hyb21hOiBudW0odC5jaHJvbWEsIGQuY2hyb21hLCAwLCAxKSxcbiAgICBlZGdlczogbnVtKHQuZWRnZXMsIGQuZWRnZXMsIDAsIDEpLFxuICAgIHRpbnRBbW91bnQ6IG51bSh0LnRpbnRBbW91bnQsIGQudGludEFtb3VudCwgMCwgMSksXG4gICAgdGludENvbG9yOiBjb2xvcih0LnRpbnRDb2xvciwgZC50aW50Q29sb3IpLFxuICAgIHNwaW46IG51bSh0LnNwaW4sIGQuc3BpbiwgLTEsIDEpLFxuICAgIGRyaWZ0OiBudW0odC5kcmlmdCwgZC5kcmlmdCwgMCwgMSksXG4gICAgcHVsc2U6IG51bSh0LnB1bHNlLCBkLnB1bHNlLCAwLCAxKSxcbiAgICBzaGltbWVyOiBudW0odC5zaGltbWVyLCBkLnNoaW1tZXIsIDAsIDEpLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FuaXRpemVHbG9iYWxGeChpbnB1dDogUGFydGlhbDxHbG9iYWxGeD4gfCBudWxsIHwgdW5kZWZpbmVkKTogR2xvYmFsRngge1xuICBjb25zdCB0ID0gaW5wdXQgPz8ge307XG4gIGNvbnN0IGQgPSBERUZBVUxUX0dMT0JBTF9GWDtcbiAgcmV0dXJuIHtcbiAgICBiZ01vZGU6IG51bSh0LmJnTW9kZSwgZC5iZ01vZGUsIDAsIEJHX01PREVTLmxlbmd0aCAtIDEpLFxuICAgIGJnQTogY29sb3IodC5iZ0EsIGQuYmdBKSxcbiAgICBiZ0I6IGNvbG9yKHQuYmdCLCBkLmJnQiksXG4gICAgZmVlZGJhY2s6IG51bSh0LmZlZWRiYWNrLCBkLmZlZWRiYWNrLCAwLCAxKSxcbiAgICB0cmFpbHM6IG51bSh0LnRyYWlscywgZC50cmFpbHMsIDAsIDEpLFxuICAgIGZiWm9vbTogbnVtKHQuZmJab29tLCBkLmZiWm9vbSwgLTEsIDEpLFxuICAgIGZiUm90YXRlOiBudW0odC5mYlJvdGF0ZSwgZC5mYlJvdGF0ZSwgLTEsIDEpLFxuICAgIGZiSHVlOiBudW0odC5mYkh1ZSwgZC5mYkh1ZSwgMCwgMSksXG4gICAgd2FycDogbnVtKHQud2FycCwgZC53YXJwLCAwLCAxKSxcbiAgICBzd2lybDogbnVtKHQuc3dpcmwsIGQuc3dpcmwsIDAsIDEpLFxuICAgIHJpcHBsZTogbnVtKHQucmlwcGxlLCBkLnJpcHBsZSwgMCwgMSksXG4gICAgem9vbTogbnVtKHQuem9vbSwgZC56b29tLCAwLCAxKSxcbiAgICBrYWxlaWRvOiBudW0odC5rYWxlaWRvLCBkLmthbGVpZG8sIDAsIDEpLFxuICAgIG1pcnJvcjogbnVtKHQubWlycm9yLCBkLm1pcnJvciwgMCwgMSksXG4gICAgY2hyb21hOiBudW0odC5jaHJvbWEsIGQuY2hyb21hLCAwLCAxKSxcbiAgICBodWVPcmJpdDogbnVtKHQuaHVlT3JiaXQsIGQuaHVlT3JiaXQsIDAsIDEpLFxuICAgIHNhdHVyYXRpb246IG51bSh0LnNhdHVyYXRpb24sIGQuc2F0dXJhdGlvbiwgMCwgMiksXG4gICAgY29udHJhc3Q6IG51bSh0LmNvbnRyYXN0LCBkLmNvbnRyYXN0LCAwLCAyKSxcbiAgICBzb2xhcml6ZTogbnVtKHQuc29sYXJpemUsIGQuc29sYXJpemUsIDAsIDEpLFxuICAgIGdyYWluOiBudW0odC5ncmFpbiwgZC5ncmFpbiwgMCwgMSksXG4gICAgc2NhbmxpbmVzOiBudW0odC5zY2FubGluZXMsIGQuc2NhbmxpbmVzLCAwLCAxKSxcbiAgICB2aWduZXR0ZTogbnVtKHQudmlnbmV0dGUsIGQudmlnbmV0dGUsIDAsIDEpLFxuICAgIHN0cm9iZTogbnVtKHQuc3Ryb2JlLCBkLnN0cm9iZSwgMCwgMSksXG4gICAgc3BlZWQ6IG51bSh0LnNwZWVkLCBkLnNwZWVkLCAwLCAyKSxcbiAgICBhdWRpb1JlYWN0OiBudW0odC5hdWRpb1JlYWN0LCBkLmF1ZGlvUmVhY3QsIDAsIDEpLFxuICAgIHBvaW50ZXJGb3JjZTogbnVtKHQucG9pbnRlckZvcmNlLCBkLnBvaW50ZXJGb3JjZSwgMCwgMSksXG4gICAgcG9pbnRlclNpemU6IG51bSh0LnBvaW50ZXJTaXplLCBkLnBvaW50ZXJTaXplLCAwLjAyLCAxKSxcbiAgICBwb2ludGVyTW9kZTogbnVtKHQucG9pbnRlck1vZGUsIGQucG9pbnRlck1vZGUsIDAsIFBPSU5URVJfTU9ERVMubGVuZ3RoIC0gMSksXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhbk5hbWUodmFsdWU6IHN0cmluZywgZmFsbGJhY2s6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IGNsZWFuZWQgPSB2YWx1ZS5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKS50cmltKCkuc2xpY2UoMCwgODApO1xuICByZXR1cm4gY2xlYW5lZCB8fCBmYWxsYmFjaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhbml0aXplU2NlbmUoaW5wdXQ6IHVua25vd24pOiBTY2VuZSB7XG4gIGNvbnN0IHJhdyA9IChpbnB1dCA/PyB7fSkgYXMgUGFydGlhbDxTY2VuZT47XG4gIGNvbnN0IGxheWVyc1JhdyA9IEFycmF5LmlzQXJyYXkocmF3LmxheWVycykgPyByYXcubGF5ZXJzLnNsaWNlKDAsIE1BWF9MQVlFUlMpIDogW107XG4gIHJldHVybiB7XG4gICAgbmFtZTogY2xlYW5OYW1lKHR5cGVvZiByYXcubmFtZSA9PT0gXCJzdHJpbmdcIiA/IHJhdy5uYW1lIDogXCJcIiwgXCJVbnRpdGxlZFwiKSxcbiAgICBsYXllcnM6IGxheWVyc1Jhd1xuICAgICAgLmZpbHRlcigobCk6IGwgaXMgU2NlbmVMYXllciA9PiAhIWwgJiYgdHlwZW9mIGwgPT09IFwib2JqZWN0XCIpXG4gICAgICAubWFwKChsLCBpbmRleCkgPT4gKHtcbiAgICAgICAgaWQ6IHR5cGVvZiBsLmlkID09PSBcInN0cmluZ1wiICYmIGwuaWQgPyBsLmlkLnNsaWNlKDAsIDQwKSA6IGBsYXllci0ke2luZGV4fWAsXG4gICAgICAgIGltYWdlSWQ6IHR5cGVvZiBsLmltYWdlSWQgPT09IFwic3RyaW5nXCIgPyBsLmltYWdlSWQuc2xpY2UoMCwgNjApIDogXCJcIixcbiAgICAgICAgbmFtZTogY2xlYW5OYW1lKHR5cGVvZiBsLm5hbWUgPT09IFwic3RyaW5nXCIgPyBsLm5hbWUgOiBcIlwiLCBcIkxheWVyXCIpLFxuICAgICAgICBtZWRpYUtpbmQ6IE1FRElBX0tJTkRTLmluY2x1ZGVzKGwubWVkaWFLaW5kIGFzIE1lZGlhS2luZClcbiAgICAgICAgICA/IChsLm1lZGlhS2luZCBhcyBNZWRpYUtpbmQpXG4gICAgICAgICAgOiBcImltYWdlXCIsXG4gICAgICAgIGZ4OiBzYW5pdGl6ZUxheWVyRngobC5meCksXG4gICAgICB9KSksXG4gICAgZ2xvYmFsOiBzYW5pdGl6ZUdsb2JhbEZ4KHJhdy5nbG9iYWwpLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlU2NlbmUoc2NlbmU6IFNjZW5lKTogc3RyaW5nIHtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHNjZW5lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZVNjZW5lKHJhdzogc3RyaW5nKTogU2NlbmUge1xuICB0cnkge1xuICAgIHJldHVybiBzYW5pdGl6ZVNjZW5lKEpTT04ucGFyc2UocmF3KSk7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBzYW5pdGl6ZVNjZW5lKG51bGwpO1xuICB9XG59XG4iLCAiLy8gTmFtZWQgZ2xvYmFsLUZYIGxvb2tzLCBwbHVzIHJhbmRvbWl6ZSAvIG11dGF0ZSBoZWxwZXJzIGZvciBib3RoIHRoZSB3b3JsZFxuLy8gcGlwZWxpbmUgYW5kIHBlci1sYXllciBlZmZlY3Qgc3RhY2tzLlxuXG5pbXBvcnQge1xuICBCTEVORF9NT0RFUyxcbiAgREVGQVVMVF9HTE9CQUxfRlgsXG4gIERFRkFVTFRfTEFZRVJfRlgsXG4gIGNsYW1wLFxuICB0eXBlIEJsZW5kTW9kZSxcbiAgdHlwZSBHbG9iYWxGeCxcbiAgdHlwZSBMYXllckZ4LFxufSBmcm9tIFwiLi90eXBlc1wiO1xuXG5mdW5jdGlvbiBsb29rKG92ZXJyaWRlczogUGFydGlhbDxHbG9iYWxGeD4pOiBHbG9iYWxGeCB7XG4gIHJldHVybiB7IC4uLkRFRkFVTFRfR0xPQkFMX0ZYLCAuLi5vdmVycmlkZXMgfTtcbn1cblxuZXhwb3J0IGNvbnN0IFdPUkxEX1BSRVNFVFM6IHsgbmFtZTogc3RyaW5nOyBjb2RlOiBzdHJpbmc7IGdsb2JhbDogR2xvYmFsRnggfVtdID0gW1xuICB7IG5hbWU6IFwiQ2xlYW4gc2lnbmFsXCIsIGNvZGU6IFwiMDBcIiwgZ2xvYmFsOiBsb29rKHt9KSB9LFxuICB7XG4gICAgbmFtZTogXCJMaXF1aWQgY2hyb21lXCIsXG4gICAgY29kZTogXCIwMVwiLFxuICAgIGdsb2JhbDogbG9vayh7XG4gICAgICB3YXJwOiAwLjUsIHN3aXJsOiAwLjM0LCBjaHJvbWE6IDAuMywgaHVlT3JiaXQ6IDAuMjQsIHNhdHVyYXRpb246IDEuMixcbiAgICAgIGNvbnRyYXN0OiAxLjEyLCBmZWVkYmFjazogMC40MiwgdHJhaWxzOiAwLjcyLCBmYlpvb206IDAuMTIsIGdyYWluOiAwLjEsXG4gICAgfSksXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkVjaG8gdHVubmVsXCIsXG4gICAgY29kZTogXCIwMlwiLFxuICAgIGdsb2JhbDogbG9vayh7XG4gICAgICB6b29tOiAwLjQsIGZlZWRiYWNrOiAwLjgyLCB0cmFpbHM6IDAuOSwgZmJab29tOiAwLjM0LCBmYlJvdGF0ZTogMC4xNCxcbiAgICAgIGZiSHVlOiAwLjEyLCBjaHJvbWE6IDAuMjgsIHZpZ25ldHRlOiAwLjQsIGh1ZU9yYml0OiAwLjE2LCBjb250cmFzdDogMS4wOCxcbiAgICB9KSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiS2FsZWlkbyBjYXRoZWRyYWxcIixcbiAgICBjb2RlOiBcIjAzXCIsXG4gICAgZ2xvYmFsOiBsb29rKHtcbiAgICAgIGthbGVpZG86IDAuNzIsIG1pcnJvcjogMC4zLCBjaHJvbWE6IDAuMzQsIGh1ZU9yYml0OiAwLjQsIHNhdHVyYXRpb246IDEuNSxcbiAgICAgIGNvbnRyYXN0OiAxLjEsIGZlZWRiYWNrOiAwLjI2LCB0cmFpbHM6IDAuNiwgcmlwcGxlOiAwLjE4LCB2aWduZXR0ZTogMC4zLFxuICAgIH0pLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJWSFMgc2VhbmNlXCIsXG4gICAgY29kZTogXCIwNFwiLFxuICAgIGdsb2JhbDogbG9vayh7XG4gICAgICBzY2FubGluZXM6IDAuNjYsIGdyYWluOiAwLjUsIGNocm9tYTogMC42MiwgZmVlZGJhY2s6IDAuNDIsXG4gICAgICB0cmFpbHM6IDAuNjgsIHNhdHVyYXRpb246IDAuODgsIGNvbnRyYXN0OiAxLjIyLCB2aWduZXR0ZTogMC40OCwgc3Ryb2JlOiAwLjA4LFxuICAgIH0pLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJBY2lkIGJhdGhcIixcbiAgICBjb2RlOiBcIjA1XCIsXG4gICAgZ2xvYmFsOiBsb29rKHtcbiAgICAgIHdhcnA6IDAuNjgsIHJpcHBsZTogMC40LCBodWVPcmJpdDogMC43LCBzYXR1cmF0aW9uOiAxLjg1LCBzb2xhcml6ZTogMC41LFxuICAgICAgY29udHJhc3Q6IDEuMTUsIGZlZWRiYWNrOiAwLjUsIHRyYWlsczogMC43OCwgZmJIdWU6IDAuMywgc3BlZWQ6IDEuMixcbiAgICB9KSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiR2hvc3QgdHJhaWxzXCIsXG4gICAgY29kZTogXCIwNlwiLFxuICAgIGdsb2JhbDogbG9vayh7XG4gICAgICBmZWVkYmFjazogMC45MiwgdHJhaWxzOiAwLjk3LCBmYlpvb206IDAuMDYsIGZiUm90YXRlOiAtMC4wNSwgc2F0dXJhdGlvbjogMC42LFxuICAgICAgY29udHJhc3Q6IDEuMTQsIGdyYWluOiAwLjIsIHZpZ25ldHRlOiAwLjUsIHNwZWVkOiAwLjUsXG4gICAgfSksXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIk5lb24gYXV0b3BzeVwiLFxuICAgIGNvZGU6IFwiMDdcIixcbiAgICBnbG9iYWw6IGxvb2soe1xuICAgICAgY2hyb21hOiAwLjgsIHNvbGFyaXplOiAwLjI4LCBjb250cmFzdDogMS4zNSwgc2F0dXJhdGlvbjogMS42LFxuICAgICAga2FsZWlkbzogMC4xOCwgaHVlT3JiaXQ6IDAuMzIsIGZlZWRiYWNrOiAwLjMsIHRyYWlsczogMC42Miwgc2NhbmxpbmVzOiAwLjIsXG4gICAgfSksXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlByaXNtIHN0b3JtXCIsXG4gICAgY29kZTogXCIwOFwiLFxuICAgIGdsb2JhbDogbG9vayh7XG4gICAgICB3YXJwOiAwLjM0LCByaXBwbGU6IDAuMjgsIGNocm9tYTogMC45MiwgZmVlZGJhY2s6IDAuNTYsIHRyYWlsczogMC44LFxuICAgICAgZmJab29tOiAtMC4xNCwgZ3JhaW46IDAuMjQsIHNwZWVkOiAxLjUsIHN0cm9iZTogMC4xNiwgY29udHJhc3Q6IDEuMixcbiAgICB9KSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiU29sYXIgZmxhcmVcIixcbiAgICBjb2RlOiBcIjA5XCIsXG4gICAgZ2xvYmFsOiBsb29rKHtcbiAgICAgIHpvb206IDAuMjYsIHN3aXJsOiAwLjUsIHJpcHBsZTogMC4zNCwgaHVlT3JiaXQ6IDAuNSwgc2F0dXJhdGlvbjogMS43LFxuICAgICAgc29sYXJpemU6IDAuNzIsIGZlZWRiYWNrOiAwLjQ0LCB0cmFpbHM6IDAuNywgZmJIdWU6IDAuMiwgdmlnbmV0dGU6IDAuMzYsXG4gICAgICBzdHJvYmU6IDAuMSwgc3BlZWQ6IDAuOSxcbiAgICB9KSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiRGVlcCB2b2lkXCIsXG4gICAgY29kZTogXCIxMFwiLFxuICAgIGdsb2JhbDogbG9vayh7XG4gICAgICBiZ01vZGU6IDIsIG1pcnJvcjogMC41LCB3YXJwOiAwLjI0LCBjaHJvbWE6IDAuMiwgc2F0dXJhdGlvbjogMC44NSxcbiAgICAgIGNvbnRyYXN0OiAxLjI1LCBmZWVkYmFjazogMC42OCwgdHJhaWxzOiAwLjg4LCBmYlpvb206IDAuMiwgdmlnbmV0dGU6IDAuNixcbiAgICAgIGh1ZU9yYml0OiAwLjEsIHNwZWVkOiAwLjYsXG4gICAgfSksXG4gIH0sXG5dO1xuXG5mdW5jdGlvbiByYW5kKG1pbiA9IDAsIG1heCA9IDEpOiBudW1iZXIge1xuICByZXR1cm4gbWluICsgTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pO1xufVxuXG5mdW5jdGlvbiBjaGFuY2UocDogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpIDwgcDtcbn1cblxudHlwZSBFZmZlY3RQaWNrID0geyBrZXk6IHN0cmluZzsgd2VpZ2h0OiBudW1iZXI7IG1pbjogbnVtYmVyOyBtYXg6IG51bWJlciB9O1xuXG5mdW5jdGlvbiBwaWNrRGlzdGluY3QoaXRlbXM6IEVmZmVjdFBpY2tbXSwgY291bnQ6IG51bWJlcik6IEVmZmVjdFBpY2tbXSB7XG4gIGNvbnN0IHBvb2wgPSBpdGVtcy5zbGljZSgpO1xuICBjb25zdCBwaWNrczogRWZmZWN0UGlja1tdID0gW107XG4gIHdoaWxlIChwaWNrcy5sZW5ndGggPCBjb3VudCAmJiBwb29sLmxlbmd0aCkge1xuICAgIGxldCB0b3RhbCA9IDA7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHBvb2wpIHRvdGFsICs9IGl0ZW0ud2VpZ2h0O1xuICAgIGxldCByb2xsID0gTWF0aC5yYW5kb20oKSAqIHRvdGFsO1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgZm9yICg7IGluZGV4IDwgcG9vbC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHJvbGwgLT0gcG9vbFtpbmRleF0ud2VpZ2h0O1xuICAgICAgaWYgKHJvbGwgPD0gMCkgYnJlYWs7XG4gICAgfVxuICAgIHBpY2tzLnB1c2gocG9vbC5zcGxpY2UoTWF0aC5taW4oaW5kZXgsIHBvb2wubGVuZ3RoIC0gMSksIDEpWzBdKTtcbiAgfVxuICByZXR1cm4gcGlja3M7XG59XG5cbi8vIEthbGVpZG8vcmlwcGxlIGFyZSB3ZWlnaHRlZCBsb3c6IHN5bW1ldHJpYyBtYW5kYWxhcyBhbGwgbG9vayBhbGlrZSwgc28gYVxuLy8gY2hhb3Mgcm9sbCBzaG91bGQgdXN1YWxseSBiZSBidWlsdCBvbiB3YXJwIC8gc3dpcmwgLyB6b29tIC8gbWlycm9yIGluc3RlYWQuXG5jb25zdCBXT1JMRF9TUEFDRV9QT09MOiBFZmZlY3RQaWNrW10gPSBbXG4gIHsga2V5OiBcIndhcnBcIiwgd2VpZ2h0OiAzLjAsIG1pbjogMC4zLCBtYXg6IDAuOSB9LFxuICB7IGtleTogXCJzd2lybFwiLCB3ZWlnaHQ6IDIuNCwgbWluOiAwLjI1LCBtYXg6IDAuOCB9LFxuICB7IGtleTogXCJ6b29tXCIsIHdlaWdodDogMi4wLCBtaW46IDAuMiwgbWF4OiAwLjYgfSxcbiAgeyBrZXk6IFwibWlycm9yXCIsIHdlaWdodDogMS42LCBtaW46IDAuMiwgbWF4OiAwLjcgfSxcbiAgeyBrZXk6IFwicmlwcGxlXCIsIHdlaWdodDogMC45LCBtaW46IDAuMTIsIG1heDogMC40IH0sXG4gIHsga2V5OiBcImthbGVpZG9cIiwgd2VpZ2h0OiAwLjYsIG1pbjogMC4yLCBtYXg6IDAuNyB9LFxuXTtcblxuLyoqXG4gKiBTdHJ1Y3R1cmVkIGNoYW9zOiBvbmUgc3Ryb25nIHNwYWNlIGVmZmVjdCAocGx1cyBzb21ldGltZXMgYSBzb2Z0IHNlY29uZCksXG4gKiBhbiBvcHRpb25hbCBmZWVkYmFjayByZWNpcGUsIGEgY29sb3IgbW92ZSBhbmQgbGlnaHQgdGV4dHVyZSBcdTIwMTQgZXZlcnl0aGluZ1xuICogZWxzZSBzdGF5cyB6ZXJvIHNvIGVhY2ggcm9sbCBoYXMgYSBkaXN0aW5jdCBjaGFyYWN0ZXIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21HbG9iYWxGeChiYXNlOiBHbG9iYWxGeCk6IEdsb2JhbEZ4IHtcbiAgY29uc3QgbmV4dDogR2xvYmFsRnggPSB7XG4gICAgLi4uREVGQVVMVF9HTE9CQUxfRlgsXG4gICAgYmdBOiBiYXNlLmJnQSxcbiAgICBiZ0I6IGJhc2UuYmdCLFxuICAgIGF1ZGlvUmVhY3Q6IGJhc2UuYXVkaW9SZWFjdCxcbiAgICBwb2ludGVyRm9yY2U6IGJhc2UucG9pbnRlckZvcmNlLFxuICAgIHBvaW50ZXJTaXplOiBiYXNlLnBvaW50ZXJTaXplLFxuICAgIHBvaW50ZXJNb2RlOiBNYXRoLmZsb29yKHJhbmQoMCwgNCkpLFxuICAgIGJnTW9kZTogTWF0aC5mbG9vcihyYW5kKDAsIDQpKSxcbiAgfTtcblxuICBjb25zdCBzcGFjZVBpY2tzID0gcGlja0Rpc3RpbmN0KFdPUkxEX1NQQUNFX1BPT0wsIGNoYW5jZSgwLjUpID8gMiA6IDEpO1xuICBzcGFjZVBpY2tzLmZvckVhY2goKHBpY2ssIGluZGV4KSA9PiB7XG4gICAgY29uc3Qgc3RyZW5ndGggPSByYW5kKHBpY2subWluLCBwaWNrLm1heCkgKiAoaW5kZXggPT09IDAgPyAxIDogMC41KTtcbiAgICAobmV4dCBhcyB1bmtub3duIGFzIFJlY29yZDxzdHJpbmcsIG51bWJlcj4pW3BpY2sua2V5XSA9IHN0cmVuZ3RoO1xuICB9KTtcblxuICBpZiAoY2hhbmNlKDAuNTUpKSB7XG4gICAgbmV4dC5mZWVkYmFjayA9IHJhbmQoMC4zLCAwLjg1KTtcbiAgICBuZXh0LnRyYWlscyA9IHJhbmQoMC41LCAwLjk1KTtcbiAgICBpZiAoY2hhbmNlKDAuNikpIG5leHQuZmJab29tID0gcmFuZCgtMC4zNSwgMC4zNSk7XG4gICAgaWYgKGNoYW5jZSgwLjQpKSBuZXh0LmZiUm90YXRlID0gcmFuZCgtMC4yNSwgMC4yNSk7XG4gICAgaWYgKGNoYW5jZSgwLjQpKSBuZXh0LmZiSHVlID0gcmFuZCgwLjA1LCAwLjQpO1xuICB9XG5cbiAgaWYgKGNoYW5jZSgwLjUpKSBuZXh0Lmh1ZU9yYml0ID0gcmFuZCgwLjEsIDAuNyk7XG4gIGlmIChjaGFuY2UoMC41KSkgbmV4dC5jaHJvbWEgPSByYW5kKDAuMSwgMC43KTtcbiAgaWYgKGNoYW5jZSgwLjIyKSkgbmV4dC5zb2xhcml6ZSA9IHJhbmQoMC4yLCAwLjcpO1xuICBuZXh0LnNhdHVyYXRpb24gPSByYW5kKDAuODUsIDEuNik7XG4gIG5leHQuY29udHJhc3QgPSByYW5kKDAuOTUsIDEuMyk7XG5cbiAgaWYgKGNoYW5jZSgwLjM1KSkgbmV4dC5ncmFpbiA9IHJhbmQoMC4wNSwgMC40KTtcbiAgaWYgKGNoYW5jZSgwLjIyKSkgbmV4dC5zY2FubGluZXMgPSByYW5kKDAuMSwgMC41KTtcbiAgaWYgKGNoYW5jZSgwLjEyKSkgbmV4dC5zdHJvYmUgPSByYW5kKDAuMDUsIDAuMyk7XG4gIG5leHQudmlnbmV0dGUgPSByYW5kKDAuMSwgMC41KTtcbiAgbmV4dC5zcGVlZCA9IHJhbmQoMC40NSwgMS41KTtcbiAgcmV0dXJuIG5leHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtdXRhdGVHbG9iYWxGeChjdXJyZW50OiBHbG9iYWxGeCk6IEdsb2JhbEZ4IHtcbiAgY29uc3QgbmV4dCA9IHsgLi4uY3VycmVudCB9O1xuICBjb25zdCBrZXlzOiAoa2V5b2YgR2xvYmFsRngpW10gPSBbXG4gICAgXCJmZWVkYmFja1wiLCBcInRyYWlsc1wiLCBcImZiWm9vbVwiLCBcImZiUm90YXRlXCIsIFwiZmJIdWVcIiwgXCJ3YXJwXCIsIFwic3dpcmxcIixcbiAgICBcInJpcHBsZVwiLCBcInpvb21cIiwgXCJrYWxlaWRvXCIsIFwibWlycm9yXCIsIFwiY2hyb21hXCIsIFwiaHVlT3JiaXRcIiwgXCJzYXR1cmF0aW9uXCIsXG4gICAgXCJjb250cmFzdFwiLCBcInNvbGFyaXplXCIsIFwiZ3JhaW5cIiwgXCJzY2FubGluZXNcIiwgXCJ2aWduZXR0ZVwiLFxuICAgIFwic3Ryb2JlXCIsIFwic3BlZWRcIixcbiAgXTtcbiAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgIGNvbnN0IHZhbHVlID0gbmV4dFtrZXldIGFzIG51bWJlcjtcbiAgICBjb25zdCBtYXggPSBrZXkgPT09IFwic2F0dXJhdGlvblwiIHx8IGtleSA9PT0gXCJjb250cmFzdFwiIHx8IGtleSA9PT0gXCJzcGVlZFwiID8gMiA6IDE7XG4gICAgY29uc3QgbWluID0ga2V5ID09PSBcImZiWm9vbVwiIHx8IGtleSA9PT0gXCJmYlJvdGF0ZVwiID8gLTEgOiAwO1xuICAgIChuZXh0W2tleV0gYXMgbnVtYmVyKSA9IGNsYW1wKHZhbHVlICsgKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMC4yNCwgbWluLCBtYXgpO1xuICB9XG4gIG5leHQuZmVlZGJhY2sgPSBNYXRoLm1pbihuZXh0LmZlZWRiYWNrLCAwLjkpO1xuICByZXR1cm4gbmV4dDtcbn1cblxuY29uc3QgQ0hBT1NfQkxFTkRTOiBCbGVuZE1vZGVbXSA9IFtcIm5vcm1hbFwiLCBcImFkZFwiLCBcInNjcmVlblwiLCBcIm92ZXJsYXlcIiwgXCJkaWZmZXJlbmNlXCIsIFwibGlnaHRlblwiXTtcblxuY29uc3QgTEFZRVJfRElTVE9SVF9QT09MOiBFZmZlY3RQaWNrW10gPSBbXG4gIHsga2V5OiBcIndhcnBcIiwgd2VpZ2h0OiAzLjAsIG1pbjogMC4yLCBtYXg6IDAuOCB9LFxuICB7IGtleTogXCJzd2lybFwiLCB3ZWlnaHQ6IDIuMCwgbWluOiAwLjIsIG1heDogMC43IH0sXG4gIHsga2V5OiBcImJ1bGdlXCIsIHdlaWdodDogMi4wLCBtaW46IDAuMywgbWF4OiAwLjggfSxcbiAgeyBrZXk6IFwicGl4ZWxhdGVcIiwgd2VpZ2h0OiAxLjMsIG1pbjogMC4xNSwgbWF4OiAwLjYgfSxcbiAgeyBrZXk6IFwibWlycm9yXCIsIHdlaWdodDogMS4yLCBtaW46IDAuMiwgbWF4OiAwLjcgfSxcbiAgeyBrZXk6IFwicmlwcGxlXCIsIHdlaWdodDogMC45LCBtaW46IDAuMSwgbWF4OiAwLjQ1IH0sXG4gIHsga2V5OiBcImthbGVpZG9cIiwgd2VpZ2h0OiAwLjUsIG1pbjogMC4yNSwgbWF4OiAwLjc1IH0sXG5dO1xuXG4vKipcbiAqIFJhbmRvbWl6ZSBhIGxheWVyJ3MgZWZmZWN0IHN0YWNrIHdoaWxlIGtlZXBpbmcgaXRzIHBsYWNlbWVudCArIHZpc2liaWxpdHkuXG4gKiBTYW1lIHN0cnVjdHVyZSBhcyB0aGUgd29ybGQgcm9sbDogMS0yIGRpc3RvcnRpb25zLCBhIGNvbG9yIG1vdmUsIGEgYml0IG9mXG4gKiBtb3Rpb24gXHUyMDE0IG5vdCBldmVyeSBrbm9iIGF0IG9uY2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21MYXllckZ4KGN1cnJlbnQ6IExheWVyRngpOiBMYXllckZ4IHtcbiAgY29uc3QgbmV4dDogTGF5ZXJGeCA9IHtcbiAgICAuLi5yZXNldExheWVyRnhFZmZlY3RzKGN1cnJlbnQpLFxuICAgIGJsZW5kOiBjaGFuY2UoMC40KSA/IENIQU9TX0JMRU5EU1tNYXRoLmZsb29yKHJhbmQoMCwgQ0hBT1NfQkxFTkRTLmxlbmd0aCkpXSA6IGN1cnJlbnQuYmxlbmQsXG4gIH07XG5cbiAgY29uc3QgZGlzdG9ydFBpY2tzID0gcGlja0Rpc3RpbmN0KExBWUVSX0RJU1RPUlRfUE9PTCwgY2hhbmNlKDAuNDUpID8gMiA6IDEpO1xuICBkaXN0b3J0UGlja3MuZm9yRWFjaCgocGljaywgaW5kZXgpID0+IHtcbiAgICBsZXQgc3RyZW5ndGggPSByYW5kKHBpY2subWluLCBwaWNrLm1heCkgKiAoaW5kZXggPT09IDAgPyAxIDogMC41NSk7XG4gICAgaWYgKHBpY2sua2V5ID09PSBcImJ1bGdlXCIgJiYgY2hhbmNlKDAuNSkpIHN0cmVuZ3RoID0gLXN0cmVuZ3RoO1xuICAgIChuZXh0IGFzIHVua25vd24gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPilbcGljay5rZXldID0gc3RyZW5ndGg7XG4gIH0pO1xuXG4gIGlmIChjaGFuY2UoMC42KSkgbmV4dC5odWUgPSBNYXRoLnJhbmRvbSgpO1xuICBuZXh0LnNhdHVyYXRpb24gPSByYW5kKDAuNzUsIDEuNjUpO1xuICBuZXh0LmNvbnRyYXN0ID0gcmFuZCgwLjksIDEuMzUpO1xuICBuZXh0LmJyaWdodG5lc3MgPSByYW5kKDAuOSwgMS4yKTtcbiAgaWYgKGNoYW5jZSgwLjIyKSkgbmV4dC5wb3N0ZXJpemUgPSByYW5kKDAuMiwgMC43KTtcbiAgaWYgKGNoYW5jZSgwLjQpKSBuZXh0LmNocm9tYSA9IHJhbmQoMC4xLCAwLjYpO1xuICBpZiAoY2hhbmNlKDAuMTgpKSBuZXh0LmVkZ2VzID0gcmFuZCgwLjIsIDAuOCk7XG4gIGlmIChjaGFuY2UoMC4wOCkpIG5leHQuaW52ZXJ0ID0gcmFuZCgwLjUsIDEpO1xuICBpZiAoY2hhbmNlKDAuMTUpKSBuZXh0LnRpbnRBbW91bnQgPSByYW5kKDAuMiwgMC42KTtcblxuICBpZiAoY2hhbmNlKDAuMzUpKSBuZXh0LnNwaW4gPSByYW5kKDAuMDUsIDAuNCkgKiAoY2hhbmNlKDAuNSkgPyAtMSA6IDEpO1xuICBpZiAoY2hhbmNlKDAuNCkpIG5leHQuZHJpZnQgPSByYW5kKDAuMSwgMC41KTtcbiAgaWYgKGNoYW5jZSgwLjM1KSkgbmV4dC5wdWxzZSA9IHJhbmQoMC4xLCAwLjYpO1xuICBpZiAoY2hhbmNlKDAuNDUpKSBuZXh0LnNoaW1tZXIgPSByYW5kKDAuMiwgMC44KTtcbiAgcmV0dXJuIG5leHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldExheWVyRnhFZmZlY3RzKGN1cnJlbnQ6IExheWVyRngpOiBMYXllckZ4IHtcbiAgcmV0dXJuIHtcbiAgICAuLi5ERUZBVUxUX0xBWUVSX0ZYLFxuICAgIHg6IGN1cnJlbnQueCxcbiAgICB5OiBjdXJyZW50LnksXG4gICAgc2NhbGU6IGN1cnJlbnQuc2NhbGUsXG4gICAgcm90YXRpb246IGN1cnJlbnQucm90YXRpb24sXG4gICAgb3BhY2l0eTogY3VycmVudC5vcGFjaXR5LFxuICAgIGJsZW5kOiBjdXJyZW50LmJsZW5kLFxuICAgIHZpc2libGU6IGN1cnJlbnQudmlzaWJsZSxcbiAgICB0aWxlOiBjdXJyZW50LnRpbGUsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBibGVuZEluZGV4KGJsZW5kOiBCbGVuZE1vZGUpOiBudW1iZXIge1xuICBjb25zdCBpbmRleCA9IEJMRU5EX01PREVTLmluZGV4T2YoYmxlbmQpO1xuICByZXR1cm4gaW5kZXggPCAwID8gMCA6IGluZGV4O1xufVxuIiwgIi8vIFdlYkdMIGNvbXBvc2l0b3IuIFBpcGVsaW5lIHBlciBmcmFtZTpcbi8vICAgYmFja2dyb3VuZCBzaGFkZXIgLT4gc2NlbmUgRkJPXG4vLyAgIGZvciBlYWNoIGxheWVyOiBcdTAwRkNiZXItc2hhZGVyIChkaXN0b3J0ICsgY29sb3IgKyBibGVuZCBvdmVyIGRlc3QpIC0+IHBpbmctcG9uZyBzY2VuZSBGQk9cbi8vICAgcG9zdCBzaGFkZXIgKHNwYWNlIHdhcnAsIGZlZWRiYWNrIGVjaG8sIGdyYWRlKSAtPiBwaW5nLXBvbmcgcG9zdCBGQk9cbi8vICAgY29weSBwb3N0IEZCTyAtPiBzY3JlZW5cbi8vIFRoZSBwb3N0IHBpbmctcG9uZyBkb3VibGVzIGFzIHRoZSBmZWVkYmFjayBidWZmZXIsIHdoaWNoIGlzIHdoYXQgbWFrZXNcbi8vIHRyYWlscyAvIGVjaG8tdHVubmVsIGVmZmVjdHMgcG9zc2libGUuXG5cbmV4cG9ydCB0eXBlIFBvaW50ZXJTdGF0ZSA9IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHZlbG9jaXR5WDogbnVtYmVyO1xuICB2ZWxvY2l0eVk6IG51bWJlcjtcbiAgZG93bjogYm9vbGVhbjtcbiAgYWN0aXZlOiBib29sZWFuO1xufTtcblxuZXhwb3J0IHR5cGUgTGF5ZXJSZW5kZXJTdGF0ZSA9IHtcbiAgaWQ6IHN0cmluZztcbiAgaW1hZ2VJZDogc3RyaW5nO1xuICBwb3M6IFtudW1iZXIsIG51bWJlcl07XG4gIGV4dDogW251bWJlciwgbnVtYmVyXTtcbiAgcm90OiBudW1iZXI7XG4gIG9wYWNpdHk6IG51bWJlcjtcbiAgYmxlbmQ6IG51bWJlcjtcbiAgdGlsZTogbnVtYmVyO1xuICB3YXJwOiBudW1iZXI7XG4gIHN3aXJsOiBudW1iZXI7XG4gIHJpcHBsZTogbnVtYmVyO1xuICBrYWxlaWRvOiBudW1iZXI7XG4gIHBpeGVsYXRlOiBudW1iZXI7XG4gIGJ1bGdlOiBudW1iZXI7XG4gIG1pcnJvcjogbnVtYmVyO1xuICBodWU6IG51bWJlcjtcbiAgc2F0dXJhdGlvbjogbnVtYmVyO1xuICBjb250cmFzdDogbnVtYmVyO1xuICBicmlnaHRuZXNzOiBudW1iZXI7XG4gIGludmVydDogbnVtYmVyO1xuICBwb3N0ZXJpemU6IG51bWJlcjtcbiAgY2hyb21hOiBudW1iZXI7XG4gIGVkZ2VzOiBudW1iZXI7XG4gIHRpbnQ6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcbiAgdGludEFtb3VudDogbnVtYmVyO1xuICBzaGltbWVyOiBudW1iZXI7XG4gIHNlZWQ6IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIEdsb2JhbFJlbmRlclN0YXRlID0ge1xuICBiZ01vZGU6IG51bWJlcjtcbiAgYmdBOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XG4gIGJnQjogW251bWJlciwgbnVtYmVyLCBudW1iZXJdO1xuICBmZWVkYmFjazogbnVtYmVyO1xuICB0cmFpbHM6IG51bWJlcjtcbiAgZmJab29tOiBudW1iZXI7XG4gIGZiUm90YXRlOiBudW1iZXI7XG4gIGZiSHVlOiBudW1iZXI7XG4gIHdhcnA6IG51bWJlcjtcbiAgc3dpcmw6IG51bWJlcjtcbiAgcmlwcGxlOiBudW1iZXI7XG4gIHpvb206IG51bWJlcjtcbiAga2FsZWlkbzogbnVtYmVyO1xuICBtaXJyb3I6IG51bWJlcjtcbiAgY2hyb21hOiBudW1iZXI7XG4gIGh1ZU9yYml0OiBudW1iZXI7XG4gIHNhdHVyYXRpb246IG51bWJlcjtcbiAgY29udHJhc3Q6IG51bWJlcjtcbiAgc29sYXJpemU6IG51bWJlcjtcbiAgZ3JhaW46IG51bWJlcjtcbiAgc2NhbmxpbmVzOiBudW1iZXI7XG4gIHZpZ25ldHRlOiBudW1iZXI7XG4gIHN0cm9iZTogbnVtYmVyO1xuICBhdWRpb1JlYWN0OiBudW1iZXI7XG4gIHBvaW50ZXJGb3JjZTogbnVtYmVyO1xuICBwb2ludGVyU2l6ZTogbnVtYmVyO1xuICBwb2ludGVyTW9kZTogbnVtYmVyO1xufTtcblxuZXhwb3J0IHR5cGUgRnJhbWVTdGF0ZSA9IHtcbiAgdGltZTogbnVtYmVyO1xuICBhdWRpbzogbnVtYmVyO1xuICBwb2ludGVyOiBQb2ludGVyU3RhdGU7XG4gIGxheWVyczogTGF5ZXJSZW5kZXJTdGF0ZVtdO1xuICBnbG9iYWw6IEdsb2JhbFJlbmRlclN0YXRlO1xufTtcblxuZXhwb3J0IHR5cGUgRW5naW5lSGFuZGxlID0ge1xuICByZXNpemUoY3NzV2lkdGg6IG51bWJlciwgY3NzSGVpZ2h0OiBudW1iZXIpOiB2b2lkO1xuICBzZXRQaXhlbFJhdGlvQ2FwKGNhcDogbnVtYmVyKTogdm9pZDtcbiAgc2V0SW1hZ2UoaW1hZ2VJZDogc3RyaW5nLCBzb3VyY2U6IFRleEltYWdlU291cmNlKTogdm9pZDtcbiAgcmVtb3ZlSW1hZ2UoaW1hZ2VJZDogc3RyaW5nKTogdm9pZDtcbiAgaGFzSW1hZ2UoaW1hZ2VJZDogc3RyaW5nKTogYm9vbGVhbjtcbiAgcmVuZGVyKHN0YXRlOiBGcmFtZVN0YXRlKTogdm9pZDtcbiAgY2xlYXJGZWVkYmFjaygpOiB2b2lkO1xuICBkZXN0cm95KCk6IHZvaWQ7XG59O1xuXG5jb25zdCBWRVJUID0gYFxuYXR0cmlidXRlIHZlYzIgYV9wb3M7XG52YXJ5aW5nIHZlYzIgdl91djtcbnZvaWQgbWFpbigpIHtcbiAgdl91diA9IGFfcG9zICogMC41ICsgMC41O1xuICBnbF9Qb3NpdGlvbiA9IHZlYzQoYV9wb3MsIDAuMCwgMS4wKTtcbn1cbmA7XG5cbmNvbnN0IEdMU0xfQ09NTU9OID0gYFxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xubWF0MiByb3QyKGZsb2F0IGEpIHsgZmxvYXQgYyA9IGNvcyhhKTsgZmxvYXQgcyA9IHNpbihhKTsgcmV0dXJuIG1hdDIoYywgLXMsIHMsIGMpOyB9XG5mbG9hdCBoYXNoMjEodmVjMiBwKSB7IHJldHVybiBmcmFjdChzaW4oZG90KHAsIHZlYzIoMTI3LjEsIDMxMS43KSkpICogNDM3NTguNTQ1MzEyMyk7IH1cbmZsb2F0IHZub2lzZSh2ZWMyIHApIHtcbiAgdmVjMiBpID0gZmxvb3IocCk7XG4gIHZlYzIgZiA9IGZyYWN0KHApO1xuICB2ZWMyIHUgPSBmICogZiAqICgzLjAgLSAyLjAgKiBmKTtcbiAgZmxvYXQgYSA9IGhhc2gyMShpKTtcbiAgZmxvYXQgYiA9IGhhc2gyMShpICsgdmVjMigxLjAsIDAuMCkpO1xuICBmbG9hdCBjID0gaGFzaDIxKGkgKyB2ZWMyKDAuMCwgMS4wKSk7XG4gIGZsb2F0IGQgPSBoYXNoMjEoaSArIHZlYzIoMS4wLCAxLjApKTtcbiAgcmV0dXJuIG1peChtaXgoYSwgYiwgdS54KSwgbWl4KGMsIGQsIHUueCksIHUueSk7XG59XG5mbG9hdCBmYm0odmVjMiBwKSB7XG4gIGZsb2F0IHYgPSAwLjA7XG4gIGZsb2F0IGFtcCA9IDAuNTtcbiAgZm9yIChpbnQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICB2ICs9IGFtcCAqIHZub2lzZShwKTtcbiAgICBwID0gcCAqIDIuMDMgKyB2ZWMyKDE3LjMsIDkuMSk7XG4gICAgYW1wICo9IDAuNTtcbiAgfVxuICByZXR1cm4gdjtcbn1cbnZlYzMgaHVlUm90YXRlKHZlYzMgY29sb3IsIGZsb2F0IGFuZ2xlKSB7XG4gIGNvbnN0IHZlYzMgayA9IHZlYzMoMC41NzczNSk7XG4gIGZsb2F0IGMgPSBjb3MoYW5nbGUpO1xuICBmbG9hdCBzID0gc2luKGFuZ2xlKTtcbiAgcmV0dXJuIGNvbG9yICogYyArIGNyb3NzKGssIGNvbG9yKSAqIHMgKyBrICogZG90KGssIGNvbG9yKSAqICgxLjAgLSBjKTtcbn1cbmZsb2F0IGx1bWEodmVjMyBjKSB7IHJldHVybiBkb3QoYywgdmVjMygwLjI5OSwgMC41ODcsIDAuMTE0KSk7IH1cbmA7XG5cbmNvbnN0IENPUFlfRlJBRyA9IGBcbnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xudmFyeWluZyB2ZWMyIHZfdXY7XG51bmlmb3JtIHNhbXBsZXIyRCB1X3RleDtcbnZvaWQgbWFpbigpIHsgZ2xfRnJhZ0NvbG9yID0gdmVjNCh0ZXh0dXJlMkQodV90ZXgsIHZfdXYpLnJnYiwgMS4wKTsgfVxuYDtcblxuY29uc3QgQkdfRlJBRyA9IGBcbiR7R0xTTF9DT01NT059XG52YXJ5aW5nIHZlYzIgdl91djtcbnVuaWZvcm0gdmVjMiB1X3JlcztcbnVuaWZvcm0gZmxvYXQgdV90aW1lO1xudW5pZm9ybSBmbG9hdCB1X21vZGU7XG51bmlmb3JtIHZlYzMgdV9jb2xvcl9hO1xudW5pZm9ybSB2ZWMzIHVfY29sb3JfYjtcbnVuaWZvcm0gZmxvYXQgdV9hdWRpbztcblxudm9pZCBtYWluKCkge1xuICB2ZWMyIGFzcGVjdCA9IHZlYzIodV9yZXMueCAvIG1heCh1X3Jlcy55LCAxLjApLCAxLjApO1xuICB2ZWMyIG4gPSAodl91diAtIDAuNSkgKiBhc3BlY3Q7XG4gIHZlYzMgY29sID0gdV9jb2xvcl9hO1xuICBpZiAodV9tb2RlID4gMi41KSB7XG4gICAgLy8gVHVubmVsIHJpbmdzXG4gICAgZmxvYXQgciA9IGxlbmd0aChuKSArIDAuMTI7XG4gICAgZmxvYXQgYSA9IGF0YW4obi55LCBuLngpO1xuICAgIGZsb2F0IHdhdmUgPSBzaW4oMi40IC8gciAtIHVfdGltZSAqIDEuNiArIGEgKiAzLjAgKyBzaW4odV90aW1lICogMC40KSAqIDIuMCk7XG4gICAgY29sID0gbWl4KHVfY29sb3JfYSwgdV9jb2xvcl9iLCAwLjUgKyAwLjUgKiB3YXZlKTtcbiAgICBjb2wgKj0gc21vb3Roc3RlcCgwLjAsIDAuMjUsIHIpICogKDAuODUgKyB1X2F1ZGlvICogMC41KTtcbiAgfSBlbHNlIGlmICh1X21vZGUgPiAxLjUpIHtcbiAgICAvLyBQbGFzbWFcbiAgICBmbG9hdCB0ID0gdV90aW1lICogMC4yNTtcbiAgICBmbG9hdCBmID0gZmJtKG4gKiAyLjIgKyB2ZWMyKHQsIC10ICogMC43KSk7XG4gICAgZmxvYXQgZyA9IGZibShuICogMy40IC0gdmVjMih0ICogMC42LCB0KSArIGYgKiAyLjApO1xuICAgIGNvbCA9IG1peCh1X2NvbG9yX2EsIHVfY29sb3JfYiwgY2xhbXAoZyAqIDEuNiAtIDAuMiArIHVfYXVkaW8gKiAwLjMsIDAuMCwgMS4wKSk7XG4gICAgY29sID0gaHVlUm90YXRlKGNvbCwgZiAqIDEuMiArIHQgKiAwLjMpO1xuICB9IGVsc2UgaWYgKHVfbW9kZSA+IDAuNSkge1xuICAgIC8vIERyaWZ0aW5nIGdyYWRpZW50XG4gICAgdmVjMiBkaXIgPSB2ZWMyKGNvcyh1X3RpbWUgKiAwLjExKSwgc2luKHVfdGltZSAqIDAuMTEpKTtcbiAgICBmbG9hdCBnID0gY2xhbXAoZG90KG4sIGRpcikgKiAwLjkgKyAwLjUsIDAuMCwgMS4wKTtcbiAgICBjb2wgPSBtaXgodV9jb2xvcl9hLCB1X2NvbG9yX2IsIGcpO1xuICB9XG4gIGdsX0ZyYWdDb2xvciA9IHZlYzQoY29sLCAxLjApO1xufVxuYDtcblxuY29uc3QgTEFZRVJfRlJBRyA9IGBcbiR7R0xTTF9DT01NT059XG52YXJ5aW5nIHZlYzIgdl91djtcbnVuaWZvcm0gc2FtcGxlcjJEIHVfZGVzdDtcbnVuaWZvcm0gc2FtcGxlcjJEIHVfaW1nO1xudW5pZm9ybSB2ZWMyIHVfcmVzO1xudW5pZm9ybSB2ZWMyIHVfaW1nX3RleGVsO1xudW5pZm9ybSB2ZWMyIHVfcG9zO1xudW5pZm9ybSB2ZWMyIHVfZXh0O1xudW5pZm9ybSBmbG9hdCB1X3JvdDtcbnVuaWZvcm0gZmxvYXQgdV90aW1lO1xudW5pZm9ybSBmbG9hdCB1X2F1ZGlvO1xudW5pZm9ybSBmbG9hdCB1X29wYWNpdHk7XG51bmlmb3JtIGZsb2F0IHVfYmxlbmQ7XG51bmlmb3JtIGZsb2F0IHVfdGlsZTtcbnVuaWZvcm0gZmxvYXQgdV93YXJwO1xudW5pZm9ybSBmbG9hdCB1X3N3aXJsO1xudW5pZm9ybSBmbG9hdCB1X3JpcHBsZTtcbnVuaWZvcm0gZmxvYXQgdV9rYWxlaWRvO1xudW5pZm9ybSBmbG9hdCB1X3BpeGVsYXRlO1xudW5pZm9ybSBmbG9hdCB1X2J1bGdlO1xudW5pZm9ybSBmbG9hdCB1X21pcnJvcjtcbnVuaWZvcm0gZmxvYXQgdV9odWU7XG51bmlmb3JtIGZsb2F0IHVfc2F0O1xudW5pZm9ybSBmbG9hdCB1X2NvbjtcbnVuaWZvcm0gZmxvYXQgdV9icmk7XG51bmlmb3JtIGZsb2F0IHVfaW52ZXJ0O1xudW5pZm9ybSBmbG9hdCB1X3Bvc3RlcjtcbnVuaWZvcm0gZmxvYXQgdV9jaHJvbWE7XG51bmlmb3JtIGZsb2F0IHVfZWRnZXM7XG51bmlmb3JtIHZlYzMgdV90aW50O1xudW5pZm9ybSBmbG9hdCB1X3RpbnRfYW10O1xudW5pZm9ybSBmbG9hdCB1X3NoaW1tZXI7XG51bmlmb3JtIGZsb2F0IHVfc2VlZDtcblxudmVjMiB0aWxlVXYodmVjMiB1dikge1xuICBpZiAodV90aWxlID4gMS41KSByZXR1cm4gYWJzKGZyYWN0KHV2ICogMC41KSAqIDIuMCAtIDEuMCk7XG4gIGlmICh1X3RpbGUgPiAwLjUpIHJldHVybiBmcmFjdCh1dik7XG4gIHJldHVybiB1djtcbn1cblxuZmxvYXQgdGlsZU1hc2sodmVjMiB1dikge1xuICBpZiAodV90aWxlID4gMC41KSByZXR1cm4gMS4wO1xuICB2ZWMyIGluc2lkZSA9IHN0ZXAodmVjMigwLjApLCB1dikgKiBzdGVwKHV2LCB2ZWMyKDEuMCkpO1xuICByZXR1cm4gaW5zaWRlLnggKiBpbnNpZGUueTtcbn1cblxudmVjNCB0YXAodmVjMiB1dikge1xuICB2ZWM0IHMgPSB0ZXh0dXJlMkQodV9pbWcsIGNsYW1wKHRpbGVVdih1diksIDAuMCwgMS4wKSk7XG4gIHMuYSAqPSB0aWxlTWFzayh1dik7XG4gIHJldHVybiBzO1xufVxuXG52ZWMzIGJsZW5kUGl4KHZlYzMgZCwgdmVjMyBzKSB7XG4gIGZsb2F0IG0gPSB1X2JsZW5kO1xuICBpZiAobSA8IDAuNSkgcmV0dXJuIHM7XG4gIGlmIChtIDwgMS41KSByZXR1cm4gZCArIHM7XG4gIGlmIChtIDwgMi41KSByZXR1cm4gMS4wIC0gKDEuMCAtIGQpICogKDEuMCAtIHMpO1xuICBpZiAobSA8IDMuNSkgcmV0dXJuIGQgKiBzO1xuICBpZiAobSA8IDQuNSkge1xuICAgIHZlYzMgbG8gPSAyLjAgKiBkICogcztcbiAgICB2ZWMzIGhpID0gMS4wIC0gMi4wICogKDEuMCAtIGQpICogKDEuMCAtIHMpO1xuICAgIHJldHVybiBtaXgobG8sIGhpLCBzdGVwKDAuNSwgZCkpO1xuICB9XG4gIGlmIChtIDwgNS41KSByZXR1cm4gYWJzKGQgLSBzKTtcbiAgaWYgKG0gPCA2LjUpIHJldHVybiBtYXgoZCwgcyk7XG4gIHJldHVybiBtaW4oZCwgcyk7XG59XG5cbnZvaWQgbWFpbigpIHtcbiAgdmVjMiBhc3BlY3QgPSB2ZWMyKHVfcmVzLnggLyBtYXgodV9yZXMueSwgMS4wKSwgMS4wKTtcbiAgdmVjMiBwID0gKHZfdXYgLSAwLjUpICogYXNwZWN0O1xuICB2ZWMyIHEgPSByb3QyKC11X3JvdCkgKiAocCAtIHVfcG9zKTtcbiAgdmVjMiBjID0gcSAvIG1heCh1X2V4dCwgdmVjMigxZS01KSkgKiAwLjU7XG5cbiAgLy8gRGlzdG9ydCBpbiBhc3BlY3Qtbm9ybWFsaXplZCBsYXllciBzcGFjZSBzbyBjaXJjdWxhciBlZmZlY3RzIHN0YXkgY2lyY3VsYXIuXG4gIHZlYzIgbGEgPSB2ZWMyKG1heCh1X2V4dC54LCAxZS01KSAvIG1heCh1X2V4dC55LCAxZS01KSwgMS4wKTtcbiAgdmVjMiBuID0gYyAqIGxhO1xuICBmbG9hdCB0ID0gdV90aW1lICsgdV9zZWVkICogMzcuMDtcbiAgZmxvYXQgc2hpbSA9IDEuMCArIHVfc2hpbW1lciAqIDAuNiAqIHNpbih0ICogMC45KTtcblxuICBuICo9IDEuMCArIHVfYnVsZ2UgKiBkb3QobiwgbikgKiAzLjI7XG5cbiAgaWYgKHVfc3dpcmwgPiAwLjAwMykge1xuICAgIGZsb2F0IHIgPSBsZW5ndGgobik7XG4gICAgbiA9IHJvdDIodV9zd2lybCAqIDYuMCAqIHNoaW0gKiBleHAoLXIgKiAyLjQpKSAqIG47XG4gIH1cbiAgaWYgKHVfa2FsZWlkbyA+IDAuMDAzKSB7XG4gICAgZmxvYXQgc2VnID0gZmxvb3IoMi4wICsgdV9rYWxlaWRvICogMTQuMCk7XG4gICAgZmxvYXQgc2xpY2UgPSA2LjI4MzE4NTMgLyBzZWc7XG4gICAgZmxvYXQgYSA9IGF0YW4obi55LCBuLngpICsgdCAqIHVfc2hpbW1lciAqIDAuMTU7XG4gICAgYSA9IGFicyhtb2QoYSwgc2xpY2UpIC0gc2xpY2UgKiAwLjUpO1xuICAgIG4gPSBsZW5ndGgobikgKiB2ZWMyKGNvcyhhKSwgc2luKGEpKTtcbiAgfVxuICBpZiAodV9yaXBwbGUgPiAwLjAwMykge1xuICAgIGZsb2F0IHIgPSBsZW5ndGgobikgKyAxZS00O1xuICAgIG4gKz0gKG4gLyByKSAqIHNpbihyICogMzQuMCAtIHQgKiAzLjIpICogdV9yaXBwbGUgKiAwLjA3ICogc2hpbTtcbiAgfVxuICBpZiAodV93YXJwID4gMC4wMDMpIHtcbiAgICB2ZWMyIHcgPSB2ZWMyKFxuICAgICAgZmJtKG4gKiAzLjAgKyB2ZWMyKHQgKiAwLjIyICogKDAuMyArIHVfc2hpbW1lciksIHVfc2VlZCkpLFxuICAgICAgZmJtKG4gKiAzLjAgKyB2ZWMyKHVfc2VlZCArIDcuMywgLXQgKiAwLjE5ICogKDAuMyArIHVfc2hpbW1lcikpKVxuICAgICk7XG4gICAgbiArPSAodyAtIDAuNSkgKiB1X3dhcnAgKiAwLjU1O1xuICB9XG4gIG4ueCA9IG1peChuLngsIGFicyhuLngpLCBjbGFtcCh1X21pcnJvciAqIDIuMCwgMC4wLCAxLjApKTtcbiAgbi55ID0gbWl4KG4ueSwgYWJzKG4ueSksIGNsYW1wKHVfbWlycm9yICogMi4wIC0gMS4wLCAwLjAsIDEuMCkpO1xuXG4gIGMgPSBuIC8gbGE7XG4gIHZlYzIgdXYgPSBjICsgMC41O1xuXG4gIGlmICh1X3BpeGVsYXRlID4gMC4wMDMpIHtcbiAgICBmbG9hdCBjZWxscyA9IGZsb29yKG1peCgyMjAuMCwgNi4wLCBwb3codV9waXhlbGF0ZSwgMC41NSkpKTtcbiAgICB1diA9IChmbG9vcih1diAqIGNlbGxzKSArIDAuNSkgLyBjZWxscztcbiAgfVxuXG4gIHZlYzIgY2QgPSBjICogdV9jaHJvbWEgKiAwLjE7XG4gIHZlYzQgc2FtcGxlTWlkID0gdGFwKHV2KTtcbiAgdmVjMyBjb2wgPSB2ZWMzKHRhcCh1diArIGNkKS5yLCBzYW1wbGVNaWQuZywgdGFwKHV2IC0gY2QpLmIpO1xuICBmbG9hdCBhbHBoYSA9IHNhbXBsZU1pZC5hO1xuXG4gIGlmICh1X2VkZ2VzID4gMC4wMDMpIHtcbiAgICB2ZWMyIGUgPSBtYXgodV9pbWdfdGV4ZWwgKiAxLjUsIHZlYzIoMC4wMDE1KSk7XG4gICAgZmxvYXQgZ3ggPSBsdW1hKHRhcCh1diArIHZlYzIoZS54LCAwLjApKS5yZ2IpIC0gbHVtYSh0YXAodXYgLSB2ZWMyKGUueCwgMC4wKSkucmdiKTtcbiAgICBmbG9hdCBneSA9IGx1bWEodGFwKHV2ICsgdmVjMigwLjAsIGUueSkpLnJnYikgLSBsdW1hKHRhcCh1diAtIHZlYzIoMC4wLCBlLnkpKS5yZ2IpO1xuICAgIGZsb2F0IGcgPSBjbGFtcChsZW5ndGgodmVjMihneCwgZ3kpKSAqIDQuMCwgMC4wLCAxLjApO1xuICAgIHZlYzMgbmVvbiA9IGcgKiAoY29sICogMS42ICsgaHVlUm90YXRlKHZlYzMoMC45LCAwLjIsIDEuMCksIHQgKiAwLjUpICogMC43KTtcbiAgICBjb2wgPSBtaXgoY29sLCBuZW9uLCB1X2VkZ2VzKTtcbiAgfVxuXG4gIC8vIEdyYWRlXG4gIGNvbCA9IChjb2wgLSAwLjUpICogdV9jb24gKyAwLjU7XG4gIGNvbCAqPSB1X2JyaTtcbiAgY29sID0gbWl4KHZlYzMobHVtYShjb2wpKSwgY29sLCB1X3NhdCk7XG4gIGNvbCA9IGh1ZVJvdGF0ZShjb2wsIHVfaHVlICogNi4yODMxODUzICsgdV9zaGltbWVyICogMC40ICogc2luKHQgKiAwLjYpKTtcbiAgaWYgKHVfcG9zdGVyID4gMC4wMDMpIHtcbiAgICBmbG9hdCBsZXZlbHMgPSBtaXgoMTQuMCwgMi4wLCB1X3Bvc3Rlcik7XG4gICAgY29sID0gbWl4KGNvbCwgZmxvb3IoY29sICogbGV2ZWxzICsgMC41KSAvIGxldmVscywgY2xhbXAodV9wb3N0ZXIgKiA0LjAsIDAuMCwgMS4wKSk7XG4gIH1cbiAgY29sID0gbWl4KGNvbCwgMS4wIC0gY29sLCB1X2ludmVydCk7XG4gIGNvbCA9IG1peChjb2wsIHZlYzMobHVtYShjb2wpKSAqIHVfdGludCAqIDIuMSwgdV90aW50X2FtdCk7XG4gIGNvbCA9IGNsYW1wKGNvbCwgMC4wLCAxLjUpO1xuXG4gIHZlYzMgZGVzdCA9IHRleHR1cmUyRCh1X2Rlc3QsIHZfdXYpLnJnYjtcbiAgdmVjMyBibGVuZGVkID0gY2xhbXAoYmxlbmRQaXgoZGVzdCwgY29sKSwgMC4wLCAxLjApO1xuICBmbG9hdCBhID0gY2xhbXAoYWxwaGEgKiB1X29wYWNpdHkgKiAoMS4wICsgdV9hdWRpbyAqIDAuMCksIDAuMCwgMS4wKTtcbiAgZ2xfRnJhZ0NvbG9yID0gdmVjNChtaXgoZGVzdCwgYmxlbmRlZCwgYSksIDEuMCk7XG59XG5gO1xuXG5jb25zdCBQT1NUX0ZSQUcgPSBgXG4ke0dMU0xfQ09NTU9OfVxudmFyeWluZyB2ZWMyIHZfdXY7XG51bmlmb3JtIHNhbXBsZXIyRCB1X3NjZW5lO1xudW5pZm9ybSBzYW1wbGVyMkQgdV9wcmV2O1xudW5pZm9ybSB2ZWMyIHVfcmVzO1xudW5pZm9ybSBmbG9hdCB1X3RpbWU7XG51bmlmb3JtIGZsb2F0IHVfYXVkaW87XG51bmlmb3JtIHZlYzIgdV9wb2ludGVyO1xudW5pZm9ybSB2ZWMyIHVfcG9pbnRlcl92ZWw7XG51bmlmb3JtIGZsb2F0IHVfcG9pbnRlcl9kb3duO1xudW5pZm9ybSBmbG9hdCB1X3BvaW50ZXJfYWN0aXZlO1xudW5pZm9ybSBmbG9hdCB1X2ZlZWRiYWNrO1xudW5pZm9ybSBmbG9hdCB1X3RyYWlscztcbnVuaWZvcm0gZmxvYXQgdV9mYl96b29tO1xudW5pZm9ybSBmbG9hdCB1X2ZiX3JvdGF0ZTtcbnVuaWZvcm0gZmxvYXQgdV9mYl9odWU7XG51bmlmb3JtIGZsb2F0IHVfd2FycDtcbnVuaWZvcm0gZmxvYXQgdV9zd2lybDtcbnVuaWZvcm0gZmxvYXQgdV9yaXBwbGU7XG51bmlmb3JtIGZsb2F0IHVfem9vbTtcbnVuaWZvcm0gZmxvYXQgdV9rYWxlaWRvO1xudW5pZm9ybSBmbG9hdCB1X21pcnJvcjtcbnVuaWZvcm0gZmxvYXQgdV9jaHJvbWE7XG51bmlmb3JtIGZsb2F0IHVfaHVlX29yYml0O1xudW5pZm9ybSBmbG9hdCB1X3NhdDtcbnVuaWZvcm0gZmxvYXQgdV9jb247XG51bmlmb3JtIGZsb2F0IHVfc29sYXJpemU7XG51bmlmb3JtIGZsb2F0IHVfZ3JhaW47XG51bmlmb3JtIGZsb2F0IHVfc2NhbmxpbmVzO1xudW5pZm9ybSBmbG9hdCB1X3ZpZ25ldHRlO1xudW5pZm9ybSBmbG9hdCB1X3N0cm9iZTtcbnVuaWZvcm0gZmxvYXQgdV9wb2ludGVyX2ZvcmNlO1xudW5pZm9ybSBmbG9hdCB1X3BvaW50ZXJfc2l6ZTtcbnVuaWZvcm0gZmxvYXQgdV9wb2ludGVyX21vZGU7XG5cbnZvaWQgbWFpbigpIHtcbiAgdmVjMiBhc3BlY3QgPSB2ZWMyKHVfcmVzLnggLyBtYXgodV9yZXMueSwgMS4wKSwgMS4wKTtcbiAgdmVjMiBuID0gKHZfdXYgLSAwLjUpICogYXNwZWN0O1xuICBmbG9hdCB0ID0gdV90aW1lO1xuICBmbG9hdCBjaHJvbWFBbXQgPSB1X2Nocm9tYTtcblxuICAvLyBDdXJzb3IgZmllbGRcbiAgaWYgKHVfcG9pbnRlcl9hY3RpdmUgPiAwLjUgJiYgdV9wb2ludGVyX2ZvcmNlID4gMC4wMDMpIHtcbiAgICB2ZWMyIHBuID0gKHVfcG9pbnRlciAtIDAuNSkgKiBhc3BlY3Q7XG4gICAgdmVjMiBkID0gbiAtIHBuO1xuICAgIGZsb2F0IHN6ID0gbWF4KHVfcG9pbnRlcl9zaXplICogMC44LCAwLjA0KTtcbiAgICBmbG9hdCBpbmZsID0gZXhwKC1kb3QoZCwgZCkgLyAoc3ogKiBzeikpICogdV9wb2ludGVyX2ZvcmNlICogKDAuNTUgKyAwLjQ1ICogdV9wb2ludGVyX2Rvd24pO1xuICAgIGlmICh1X3BvaW50ZXJfbW9kZSA8IDAuNSkge1xuICAgICAgbiA9IHBuICsgcm90MihpbmZsICogMi42KSAqIGQ7XG4gICAgfSBlbHNlIGlmICh1X3BvaW50ZXJfbW9kZSA8IDEuNSkge1xuICAgICAgbiAtPSBkICogaW5mbCAqIDAuNTU7XG4gICAgfSBlbHNlIGlmICh1X3BvaW50ZXJfbW9kZSA8IDIuNSkge1xuICAgICAgY2hyb21hQW10ICs9IGluZmwgKiAxLjQ7XG4gICAgICBuICs9IGQgKiBpbmZsICogMC4zO1xuICAgIH0gZWxzZSB7XG4gICAgICBuLnkgKz0gaW5mbCAqIDAuMyAqICgwLjU1ICsgMC40NSAqIHNpbih0ICogMi4wICsgbi54ICogMTIuMCkpO1xuICAgIH1cbiAgICBuICs9IHVfcG9pbnRlcl92ZWwgKiBpbmZsICogMS42O1xuICB9XG5cbiAgLy8gU3BhY2VcbiAgbiAqPSAxLjAgLSB1X3pvb20gKiAoMC4zICsgMC4xICogc2luKHQgKiAwLjcpKSAtIHVfYXVkaW8gKiB1X3pvb20gKiAwLjE1O1xuICBpZiAodV9zd2lybCA+IDAuMDAzKSB7XG4gICAgZmxvYXQgciA9IGxlbmd0aChuKTtcbiAgICBuID0gcm90Mih1X3N3aXJsICogKDMuNCArIHVfYXVkaW8gKiAxLjUpICogZXhwKC1yICogMS43KSAqIHNpbih0ICogMC4yMyArIDEuOSkpICogbjtcbiAgfVxuICBpZiAodV9rYWxlaWRvID4gMC4wMDMpIHtcbiAgICBmbG9hdCBzZWcgPSBmbG9vcigyLjAgKyB1X2thbGVpZG8gKiAxNS4wKTtcbiAgICBmbG9hdCBzbGljZSA9IDYuMjgzMTg1MyAvIHNlZztcbiAgICBmbG9hdCBhID0gYXRhbihuLnksIG4ueCkgKyB0ICogMC4wNTtcbiAgICBhID0gYWJzKG1vZChhLCBzbGljZSkgLSBzbGljZSAqIDAuNSk7XG4gICAgbiA9IGxlbmd0aChuKSAqIHZlYzIoY29zKGEpLCBzaW4oYSkpO1xuICB9XG4gIGlmICh1X3JpcHBsZSA+IDAuMDAzKSB7XG4gICAgZmxvYXQgciA9IGxlbmd0aChuKSArIDFlLTQ7XG4gICAgbiArPSAobiAvIHIpICogc2luKHIgKiAyNi4wIC0gdCAqIDIuNikgKiB1X3JpcHBsZSAqIDAuMDU7XG4gIH1cbiAgaWYgKHVfd2FycCA+IDAuMDAzKSB7XG4gICAgdmVjMiB3ID0gdmVjMihmYm0obiAqIDIuNCArIHQgKiAwLjE2KSwgZmJtKG4gKiAyLjQgLSB0ICogMC4xMyArIDUuMikpO1xuICAgIG4gKz0gKHcgLSAwLjUpICogdV93YXJwICogKDAuMzQgKyB1X2F1ZGlvICogMC4yKTtcbiAgfVxuICBuLnggPSBtaXgobi54LCBhYnMobi54KSwgY2xhbXAodV9taXJyb3IgKiAyLjAsIDAuMCwgMS4wKSk7XG4gIG4ueSA9IG1peChuLnksIGFicyhuLnkpLCBjbGFtcCh1X21pcnJvciAqIDIuMCAtIDEuMCwgMC4wLCAxLjApKTtcblxuICB2ZWMyIHV2ID0gbiAvIGFzcGVjdCArIDAuNTtcblxuICB2ZWMyIGNkID0gKHV2IC0gMC41KSAqIGNocm9tYUFtdCAqIDAuMDU7XG4gIHZlYzMgY29sID0gdmVjMyhcbiAgICB0ZXh0dXJlMkQodV9zY2VuZSwgdXYgKyBjZCkucixcbiAgICB0ZXh0dXJlMkQodV9zY2VuZSwgdXYpLmcsXG4gICAgdGV4dHVyZTJEKHVfc2NlbmUsIHV2IC0gY2QpLmJcbiAgKTtcblxuICAvLyBGZWVkYmFjayBlY2hvXG4gIGlmICh1X2ZlZWRiYWNrID4gMC4wMDMpIHtcbiAgICB2ZWMyIGZwID0gKHZfdXYgLSAwLjUpICogYXNwZWN0O1xuICAgIGZwID0gcm90Mih1X2ZiX3JvdGF0ZSAqIDAuMDU1KSAqIGZwO1xuICAgIGZwICo9IDEuMCAtIHVfZmJfem9vbSAqIDAuMDQ1O1xuICAgIHZlYzMgcHJldiA9IHRleHR1cmUyRCh1X3ByZXYsIGZwIC8gYXNwZWN0ICsgMC41KS5yZ2I7XG4gICAgcHJldiA9IGh1ZVJvdGF0ZShwcmV2LCB1X2ZiX2h1ZSAqIDAuNSk7XG4gICAgdmVjMyBlY2hvID0gcHJldiAqIG1peCgwLjU1LCAwLjk4NSwgdV90cmFpbHMpO1xuICAgIGNvbCA9IG1peChjb2wsIG1heChjb2wsIGVjaG8pLCB1X2ZlZWRiYWNrKTtcbiAgfVxuXG4gIC8vIEdyYWRlXG4gIGNvbCA9IGh1ZVJvdGF0ZShjb2wsIHVfaHVlX29yYml0ICogdCAqIDAuOSk7XG4gIGNvbCA9IChjb2wgLSAwLjUpICogdV9jb24gKyAwLjU7XG4gIGNvbCA9IG1peCh2ZWMzKGx1bWEoY29sKSksIGNvbCwgdV9zYXQpO1xuICBpZiAodV9zb2xhcml6ZSA+IDAuMDAzKSB7XG4gICAgdmVjMyBzb2wgPSBtaXgoY29sLCAxLjAgLSBjb2wsIHNtb290aHN0ZXAoMC41IC0gMC4yNSwgMC41ICsgMC4yNSwgY29sKSk7XG4gICAgY29sID0gbWl4KGNvbCwgc29sLCB1X3NvbGFyaXplKTtcbiAgfVxuICBjb2wgKj0gMS4wICsgdV9zdHJvYmUgKiAoMC40NSAqIHNpbih0ICogMTEuMCkgKyB1X2F1ZGlvICogMC44KTtcblxuICAvLyBUZXh0dXJlXG4gIGlmICh1X3NjYW5saW5lcyA+IDAuMDAzKSB7XG4gICAgY29sICo9IDEuMCAtIHVfc2NhbmxpbmVzICogMC4zMiAqICgwLjUgKyAwLjUgKiBzaW4odl91di55ICogdV9yZXMueSAqIDIuNCkpO1xuICB9XG4gIGlmICh1X2dyYWluID4gMC4wMDMpIHtcbiAgICBjb2wgKz0gKGhhc2gyMSh2X3V2ICogdV9yZXMgKyBmcmFjdCh0KSAqIDYxLjcpIC0gMC41KSAqIHVfZ3JhaW4gKiAwLjM7XG4gIH1cbiAgdmVjMiB2cCA9ICh2X3V2IC0gMC41KSAqIGFzcGVjdDtcbiAgY29sICo9IDEuMCAtIHVfdmlnbmV0dGUgKiBzbW9vdGhzdGVwKDAuMzUsIDEuMTUsIGxlbmd0aCh2cCkgKiAxLjM1KTtcblxuICBnbF9GcmFnQ29sb3IgPSB2ZWM0KGNsYW1wKGNvbCwgMC4wLCAxLjApLCAxLjApO1xufVxuYDtcblxudHlwZSBUYXJnZXQgPSB7XG4gIGZyYW1lYnVmZmVyOiBXZWJHTEZyYW1lYnVmZmVyO1xuICB0ZXh0dXJlOiBXZWJHTFRleHR1cmU7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xufTtcblxudHlwZSBQcm9ncmFtID0ge1xuICBwcm9ncmFtOiBXZWJHTFByb2dyYW07XG4gIHVuaWZvcm1zOiBSZWNvcmQ8c3RyaW5nLCBXZWJHTFVuaWZvcm1Mb2NhdGlvbiB8IG51bGw+O1xufTtcblxuZnVuY3Rpb24gY29tcGlsZShnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LCB0eXBlOiBudW1iZXIsIHNvdXJjZTogc3RyaW5nKTogV2ViR0xTaGFkZXIge1xuICBjb25zdCBzaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIodHlwZSk7XG4gIGlmICghc2hhZGVyKSB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgY3JlYXRlIHNoYWRlclwiKTtcbiAgZ2wuc2hhZGVyU291cmNlKHNoYWRlciwgc291cmNlKTtcbiAgZ2wuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xuICBpZiAoIWdsLmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKSkge1xuICAgIGNvbnN0IGluZm8gPSBnbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcikgPz8gXCJ1bmtub3duXCI7XG4gICAgZ2wuZGVsZXRlU2hhZGVyKHNoYWRlcik7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBTaGFkZXIgY29tcGlsZSBmYWlsZWQ6ICR7aW5mb31gKTtcbiAgfVxuICByZXR1cm4gc2hhZGVyO1xufVxuXG5mdW5jdGlvbiBtYWtlUHJvZ3JhbShnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LCBmcmFnOiBzdHJpbmcpOiBQcm9ncmFtIHtcbiAgY29uc3QgcHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKTtcbiAgaWYgKCFwcm9ncmFtKSB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgY3JlYXRlIHByb2dyYW1cIik7XG4gIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCBjb21waWxlKGdsLCBnbC5WRVJURVhfU0hBREVSLCBWRVJUKSk7XG4gIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCBjb21waWxlKGdsLCBnbC5GUkFHTUVOVF9TSEFERVIsIGZyYWcpKTtcbiAgZ2wuYmluZEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIDAsIFwiYV9wb3NcIik7XG4gIGdsLmxpbmtQcm9ncmFtKHByb2dyYW0pO1xuICBpZiAoIWdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBQcm9ncmFtIGxpbmsgZmFpbGVkOiAke2dsLmdldFByb2dyYW1JbmZvTG9nKHByb2dyYW0pID8/IFwidW5rbm93blwifWApO1xuICB9XG4gIGNvbnN0IHVuaWZvcm1zOiBSZWNvcmQ8c3RyaW5nLCBXZWJHTFVuaWZvcm1Mb2NhdGlvbiB8IG51bGw+ID0ge307XG4gIGNvbnN0IGNvdW50ID0gZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBnbC5BQ1RJVkVfVU5JRk9STVMpIGFzIG51bWJlcjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgY29uc3QgaW5mbyA9IGdsLmdldEFjdGl2ZVVuaWZvcm0ocHJvZ3JhbSwgaSk7XG4gICAgaWYgKGluZm8pIHVuaWZvcm1zW2luZm8ubmFtZV0gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgaW5mby5uYW1lKTtcbiAgfVxuICByZXR1cm4geyBwcm9ncmFtLCB1bmlmb3JtcyB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGV4VG9SZ2IoaGV4OiBzdHJpbmcpOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0ge1xuICBjb25zdCBtYXRjaCA9IC9eIyhbMC05YS1mXXs2fSkkL2kuZXhlYyhoZXgpO1xuICBpZiAoIW1hdGNoKSByZXR1cm4gWzAsIDAsIDBdO1xuICBjb25zdCB2YWx1ZSA9IHBhcnNlSW50KG1hdGNoWzFdLCAxNik7XG4gIHJldHVybiBbKCh2YWx1ZSA+PiAxNikgJiAyNTUpIC8gMjU1LCAoKHZhbHVlID4+IDgpICYgMjU1KSAvIDI1NSwgKHZhbHVlICYgMjU1KSAvIDI1NV07XG59XG5cbmZ1bmN0aW9uIHRleHR1cmVTb3VyY2VTaXplKHNvdXJjZTogVGV4SW1hZ2VTb3VyY2UpOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0ge1xuICBpZiAodHlwZW9mIEhUTUxWaWRlb0VsZW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgc291cmNlIGluc3RhbmNlb2YgSFRNTFZpZGVvRWxlbWVudCkge1xuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogTWF0aC5tYXgoMSwgc291cmNlLnZpZGVvV2lkdGggfHwgc291cmNlLndpZHRoIHx8IDEpLFxuICAgICAgaGVpZ2h0OiBNYXRoLm1heCgxLCBzb3VyY2UudmlkZW9IZWlnaHQgfHwgc291cmNlLmhlaWdodCB8fCAxKSxcbiAgICB9O1xuICB9XG4gIGlmICh0eXBlb2YgSFRNTEltYWdlRWxlbWVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzb3VyY2UgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiBNYXRoLm1heCgxLCBzb3VyY2UubmF0dXJhbFdpZHRoIHx8IHNvdXJjZS53aWR0aCB8fCAxKSxcbiAgICAgIGhlaWdodDogTWF0aC5tYXgoMSwgc291cmNlLm5hdHVyYWxIZWlnaHQgfHwgc291cmNlLmhlaWdodCB8fCAxKSxcbiAgICB9O1xuICB9XG4gIGlmICh0eXBlb2YgSFRNTENhbnZhc0VsZW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgc291cmNlIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICByZXR1cm4geyB3aWR0aDogTWF0aC5tYXgoMSwgc291cmNlLndpZHRoKSwgaGVpZ2h0OiBNYXRoLm1heCgxLCBzb3VyY2UuaGVpZ2h0KSB9O1xuICB9XG4gIGlmICh0eXBlb2YgSW1hZ2VCaXRtYXAgIT09IFwidW5kZWZpbmVkXCIgJiYgc291cmNlIGluc3RhbmNlb2YgSW1hZ2VCaXRtYXApIHtcbiAgICByZXR1cm4geyB3aWR0aDogTWF0aC5tYXgoMSwgc291cmNlLndpZHRoKSwgaGVpZ2h0OiBNYXRoLm1heCgxLCBzb3VyY2UuaGVpZ2h0KSB9O1xuICB9XG4gIGNvbnN0IGFueVNvdXJjZSA9IHNvdXJjZSBhcyB7IHdpZHRoPzogbnVtYmVyOyBoZWlnaHQ/OiBudW1iZXIgfTtcbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogTWF0aC5tYXgoMSwgYW55U291cmNlLndpZHRoID8/IDEpLFxuICAgIGhlaWdodDogTWF0aC5tYXgoMSwgYW55U291cmNlLmhlaWdodCA/PyAxKSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVuZ2luZShjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KTogRW5naW5lSGFuZGxlIHtcbiAgY29uc3QgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdsXCIsIHtcbiAgICBhbnRpYWxpYXM6IGZhbHNlLFxuICAgIGFscGhhOiBmYWxzZSxcbiAgICBkZXB0aDogZmFsc2UsXG4gICAgc3RlbmNpbDogZmFsc2UsXG4gICAgcHJlc2VydmVEcmF3aW5nQnVmZmVyOiBmYWxzZSxcbiAgICBwb3dlclByZWZlcmVuY2U6IFwiaGlnaC1wZXJmb3JtYW5jZVwiLFxuICB9KSBhcyBXZWJHTFJlbmRlcmluZ0NvbnRleHQgfCBudWxsO1xuICBpZiAoIWdsKSB0aHJvdyBuZXcgRXJyb3IoXCJXZWJHTCBpcyBub3QgYXZhaWxhYmxlIGluIHRoaXMgYnJvd3NlclwiKTtcblxuICBjb25zdCBxdWFkID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBxdWFkKTtcbiAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkoWy0xLCAtMSwgMywgLTEsIC0xLCAzXSksIGdsLlNUQVRJQ19EUkFXKTtcbiAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoMCk7XG4gIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoMCwgMiwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcblxuICBjb25zdCBwcm9ncmFtcyA9IHtcbiAgICBiZzogbWFrZVByb2dyYW0oZ2wsIEJHX0ZSQUcpLFxuICAgIGxheWVyOiBtYWtlUHJvZ3JhbShnbCwgTEFZRVJfRlJBRyksXG4gICAgcG9zdDogbWFrZVByb2dyYW0oZ2wsIFBPU1RfRlJBRyksXG4gICAgY29weTogbWFrZVByb2dyYW0oZ2wsIENPUFlfRlJBRyksXG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZVRleHR1cmUoKTogV2ViR0xUZXh0dXJlIHtcbiAgICBjb25zdCB0ZXh0dXJlID0gZ2whLmNyZWF0ZVRleHR1cmUoKTtcbiAgICBpZiAoIXRleHR1cmUpIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBjcmVhdGUgdGV4dHVyZVwiKTtcbiAgICBnbCEuYmluZFRleHR1cmUoZ2whLlRFWFRVUkVfMkQsIHRleHR1cmUpO1xuICAgIGdsIS50ZXhQYXJhbWV0ZXJpKGdsIS5URVhUVVJFXzJELCBnbCEuVEVYVFVSRV9NSU5fRklMVEVSLCBnbCEuTElORUFSKTtcbiAgICBnbCEudGV4UGFyYW1ldGVyaShnbCEuVEVYVFVSRV8yRCwgZ2whLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2whLkxJTkVBUik7XG4gICAgZ2whLnRleFBhcmFtZXRlcmkoZ2whLlRFWFRVUkVfMkQsIGdsIS5URVhUVVJFX1dSQVBfUywgZ2whLkNMQU1QX1RPX0VER0UpO1xuICAgIGdsIS50ZXhQYXJhbWV0ZXJpKGdsIS5URVhUVVJFXzJELCBnbCEuVEVYVFVSRV9XUkFQX1QsIGdsIS5DTEFNUF9UT19FREdFKTtcbiAgICByZXR1cm4gdGV4dHVyZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1ha2VUYXJnZXQod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiBUYXJnZXQge1xuICAgIGNvbnN0IHRleHR1cmUgPSBtYWtlVGV4dHVyZSgpO1xuICAgIGdsIS50ZXhJbWFnZTJEKGdsIS5URVhUVVJFXzJELCAwLCBnbCEuUkdCQSwgd2lkdGgsIGhlaWdodCwgMCwgZ2whLlJHQkEsIGdsIS5VTlNJR05FRF9CWVRFLCBudWxsKTtcbiAgICBjb25zdCBmcmFtZWJ1ZmZlciA9IGdsIS5jcmVhdGVGcmFtZWJ1ZmZlcigpO1xuICAgIGlmICghZnJhbWVidWZmZXIpIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBjcmVhdGUgZnJhbWVidWZmZXJcIik7XG4gICAgZ2whLmJpbmRGcmFtZWJ1ZmZlcihnbCEuRlJBTUVCVUZGRVIsIGZyYW1lYnVmZmVyKTtcbiAgICBnbCEuZnJhbWVidWZmZXJUZXh0dXJlMkQoZ2whLkZSQU1FQlVGRkVSLCBnbCEuQ09MT1JfQVRUQUNITUVOVDAsIGdsIS5URVhUVVJFXzJELCB0ZXh0dXJlLCAwKTtcbiAgICBnbCEuYmluZEZyYW1lYnVmZmVyKGdsIS5GUkFNRUJVRkZFUiwgbnVsbCk7XG4gICAgcmV0dXJuIHsgZnJhbWVidWZmZXIsIHRleHR1cmUsIHdpZHRoLCBoZWlnaHQgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2l6ZVRhcmdldCh0YXJnZXQ6IFRhcmdldCwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcbiAgICBpZiAodGFyZ2V0LndpZHRoID09PSB3aWR0aCAmJiB0YXJnZXQuaGVpZ2h0ID09PSBoZWlnaHQpIHJldHVybjtcbiAgICBnbCEuYmluZFRleHR1cmUoZ2whLlRFWFRVUkVfMkQsIHRhcmdldC50ZXh0dXJlKTtcbiAgICBnbCEudGV4SW1hZ2UyRChnbCEuVEVYVFVSRV8yRCwgMCwgZ2whLlJHQkEsIHdpZHRoLCBoZWlnaHQsIDAsIGdsIS5SR0JBLCBnbCEuVU5TSUdORURfQllURSwgbnVsbCk7XG4gICAgdGFyZ2V0LndpZHRoID0gd2lkdGg7XG4gICAgdGFyZ2V0LmhlaWdodCA9IGhlaWdodDtcbiAgfVxuXG4gIGxldCB3aWR0aCA9IE1hdGgubWF4KDIsIGNhbnZhcy53aWR0aCB8fCAyKTtcbiAgbGV0IGhlaWdodCA9IE1hdGgubWF4KDIsIGNhbnZhcy5oZWlnaHQgfHwgMik7XG4gIGxldCBwaXhlbFJhdGlvQ2FwID0gMS41O1xuICBsZXQgY3NzV2lkdGggPSB3aWR0aDtcbiAgbGV0IGNzc0hlaWdodCA9IGhlaWdodDtcblxuICBjb25zdCB0YXJnZXRzID0ge1xuICAgIHNjZW5lQTogbWFrZVRhcmdldCh3aWR0aCwgaGVpZ2h0KSxcbiAgICBzY2VuZUI6IG1ha2VUYXJnZXQod2lkdGgsIGhlaWdodCksXG4gICAgcG9zdEE6IG1ha2VUYXJnZXQod2lkdGgsIGhlaWdodCksXG4gICAgcG9zdEI6IG1ha2VUYXJnZXQod2lkdGgsIGhlaWdodCksXG4gIH07XG4gIGxldCBwb3N0RmxpcCA9IGZhbHNlO1xuICBsZXQgbmVlZEZlZWRiYWNrQ2xlYXIgPSB0cnVlO1xuXG4gIC8vIFBsYWNlaG9sZGVyIHRleHR1cmUgZm9yIGxheWVycyB3aG9zZSBpbWFnZSBpcyBtaXNzaW5nIChlLmcuIGEgc2NlbmUgbG9hZGVkXG4gIC8vIG9uIGFub3RoZXIgZGV2aWNlKTogYW4gYW5pbWF0ZWQtbG9va2luZyBtYWdlbnRhL2RlZXAtYmx1ZSBncmlkLlxuICBjb25zdCBtaXNzaW5nVGV4dHVyZSA9IG1ha2VUZXh0dXJlKCk7XG4gIHtcbiAgICBjb25zdCBzaXplID0gNjQ7XG4gICAgY29uc3QgZGF0YSA9IG5ldyBVaW50OEFycmF5KHNpemUgKiBzaXplICogNCk7XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBzaXplOyB5KyspIHtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgc2l6ZTsgeCsrKSB7XG4gICAgICAgIGNvbnN0IGkgPSAoeSAqIHNpemUgKyB4KSAqIDQ7XG4gICAgICAgIGNvbnN0IGdyaWQgPSAoeCAlIDE2IDwgMSB8fCB5ICUgMTYgPCAxKSA/IDEgOiAwO1xuICAgICAgICBkYXRhW2ldID0gZ3JpZCA/IDI1NSA6IDMwICsgKCh4ICogMykgJSA2MCk7XG4gICAgICAgIGRhdGFbaSArIDFdID0gZ3JpZCA/IDQwIDogODtcbiAgICAgICAgZGF0YVtpICsgMl0gPSBncmlkID8gMTcwIDogNDYgKyAoKHkgKiAzKSAlIDcwKTtcbiAgICAgICAgZGF0YVtpICsgM10gPSAyNTU7XG4gICAgICB9XG4gICAgfVxuICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIG1pc3NpbmdUZXh0dXJlKTtcbiAgICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIGdsLlJHQkEsIHNpemUsIHNpemUsIDAsIGdsLlJHQkEsIGdsLlVOU0lHTkVEX0JZVEUsIGRhdGEpO1xuICB9XG5cbiAgY29uc3QgaW1hZ2VzID0gbmV3IE1hcDxzdHJpbmcsIHsgdGV4dHVyZTogV2ViR0xUZXh0dXJlOyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9PigpO1xuXG4gIGZ1bmN0aW9uIGRyYXdRdWFkKCkge1xuICAgIGdsIS5kcmF3QXJyYXlzKGdsIS5UUklBTkdMRVMsIDAsIDMpO1xuICB9XG5cbiAgZnVuY3Rpb24gYmluZFRhcmdldE91dHB1dCh0YXJnZXQ6IFRhcmdldCB8IG51bGwpIHtcbiAgICBnbCEuYmluZEZyYW1lYnVmZmVyKGdsIS5GUkFNRUJVRkZFUiwgdGFyZ2V0ID8gdGFyZ2V0LmZyYW1lYnVmZmVyIDogbnVsbCk7XG4gICAgZ2whLnZpZXdwb3J0KDAsIDAsIHRhcmdldCA/IHRhcmdldC53aWR0aCA6IHdpZHRoLCB0YXJnZXQgPyB0YXJnZXQuaGVpZ2h0IDogaGVpZ2h0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHUxKHA6IFByb2dyYW0sIG5hbWU6IHN0cmluZywgdmFsdWU6IG51bWJlcikge1xuICAgIGNvbnN0IGxvYyA9IHAudW5pZm9ybXNbbmFtZV07XG4gICAgaWYgKGxvYykgZ2whLnVuaWZvcm0xZihsb2MsIHZhbHVlKTtcbiAgfVxuICBmdW5jdGlvbiB1MihwOiBQcm9ncmFtLCBuYW1lOiBzdHJpbmcsIHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgY29uc3QgbG9jID0gcC51bmlmb3Jtc1tuYW1lXTtcbiAgICBpZiAobG9jKSBnbCEudW5pZm9ybTJmKGxvYywgeCwgeSk7XG4gIH1cbiAgZnVuY3Rpb24gdTMocDogUHJvZ3JhbSwgbmFtZTogc3RyaW5nLCB2OiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0pIHtcbiAgICBjb25zdCBsb2MgPSBwLnVuaWZvcm1zW25hbWVdO1xuICAgIGlmIChsb2MpIGdsIS51bmlmb3JtM2YobG9jLCB2WzBdLCB2WzFdLCB2WzJdKTtcbiAgfVxuICBmdW5jdGlvbiB1VGV4KHA6IFByb2dyYW0sIG5hbWU6IHN0cmluZywgdGV4dHVyZTogV2ViR0xUZXh0dXJlLCB1bml0OiBudW1iZXIpIHtcbiAgICBjb25zdCBsb2MgPSBwLnVuaWZvcm1zW25hbWVdO1xuICAgIGlmICghbG9jKSByZXR1cm47XG4gICAgZ2whLmFjdGl2ZVRleHR1cmUoZ2whLlRFWFRVUkUwICsgdW5pdCk7XG4gICAgZ2whLmJpbmRUZXh0dXJlKGdsIS5URVhUVVJFXzJELCB0ZXh0dXJlKTtcbiAgICBnbCEudW5pZm9ybTFpKGxvYywgdW5pdCk7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXIoc3RhdGU6IEZyYW1lU3RhdGUpIHtcbiAgICBpZiAoZ2whLmlzQ29udGV4dExvc3QoKSkgcmV0dXJuO1xuICAgIGNvbnN0IGcgPSBzdGF0ZS5nbG9iYWw7XG5cbiAgICAvLyBCYWNrZ3JvdW5kXG4gICAgY29uc3QgYmcgPSBwcm9ncmFtcy5iZztcbiAgICBnbCEudXNlUHJvZ3JhbShiZy5wcm9ncmFtKTtcbiAgICBiaW5kVGFyZ2V0T3V0cHV0KHRhcmdldHMuc2NlbmVBKTtcbiAgICB1MihiZywgXCJ1X3Jlc1wiLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB1MShiZywgXCJ1X3RpbWVcIiwgc3RhdGUudGltZSk7XG4gICAgdTEoYmcsIFwidV9tb2RlXCIsIGcuYmdNb2RlKTtcbiAgICB1MyhiZywgXCJ1X2NvbG9yX2FcIiwgZy5iZ0EpO1xuICAgIHUzKGJnLCBcInVfY29sb3JfYlwiLCBnLmJnQik7XG4gICAgdTEoYmcsIFwidV9hdWRpb1wiLCBzdGF0ZS5hdWRpbyAqIGcuYXVkaW9SZWFjdCk7XG4gICAgZHJhd1F1YWQoKTtcblxuICAgIC8vIExheWVyczogcGluZy1wb25nIGNvbXBvc2l0ZVxuICAgIGxldCBzb3VyY2UgPSB0YXJnZXRzLnNjZW5lQTtcbiAgICBsZXQgZGVzdCA9IHRhcmdldHMuc2NlbmVCO1xuICAgIGNvbnN0IGxheWVyUHJvZ3JhbSA9IHByb2dyYW1zLmxheWVyO1xuICAgIGdsIS51c2VQcm9ncmFtKGxheWVyUHJvZ3JhbS5wcm9ncmFtKTtcbiAgICBmb3IgKGNvbnN0IGxheWVyIG9mIHN0YXRlLmxheWVycykge1xuICAgICAgY29uc3QgaW1hZ2UgPSBpbWFnZXMuZ2V0KGxheWVyLmltYWdlSWQpO1xuICAgICAgYmluZFRhcmdldE91dHB1dChkZXN0KTtcbiAgICAgIHVUZXgobGF5ZXJQcm9ncmFtLCBcInVfZGVzdFwiLCBzb3VyY2UudGV4dHVyZSwgMCk7XG4gICAgICB1VGV4KGxheWVyUHJvZ3JhbSwgXCJ1X2ltZ1wiLCBpbWFnZSA/IGltYWdlLnRleHR1cmUgOiBtaXNzaW5nVGV4dHVyZSwgMSk7XG4gICAgICB1MihsYXllclByb2dyYW0sIFwidV9yZXNcIiwgd2lkdGgsIGhlaWdodCk7XG4gICAgICB1MihcbiAgICAgICAgbGF5ZXJQcm9ncmFtLFxuICAgICAgICBcInVfaW1nX3RleGVsXCIsXG4gICAgICAgIGltYWdlID8gMSAvIGltYWdlLndpZHRoIDogMSAvIDY0LFxuICAgICAgICBpbWFnZSA/IDEgLyBpbWFnZS5oZWlnaHQgOiAxIC8gNjRcbiAgICAgICk7XG4gICAgICB1MihsYXllclByb2dyYW0sIFwidV9wb3NcIiwgbGF5ZXIucG9zWzBdLCBsYXllci5wb3NbMV0pO1xuICAgICAgdTIobGF5ZXJQcm9ncmFtLCBcInVfZXh0XCIsIGxheWVyLmV4dFswXSwgbGF5ZXIuZXh0WzFdKTtcbiAgICAgIHUxKGxheWVyUHJvZ3JhbSwgXCJ1X3JvdFwiLCBsYXllci5yb3QpO1xuICAgICAgdTEobGF5ZXJQcm9ncmFtLCBcInVfdGltZVwiLCBzdGF0ZS50aW1lKTtcbiAgICAgIHUxKGxheWVyUHJvZ3JhbSwgXCJ1X2F1ZGlvXCIsIHN0YXRlLmF1ZGlvICogZy5hdWRpb1JlYWN0KTtcbiAgICAgIHUxKGxheWVyUHJvZ3JhbSwgXCJ1X29wYWNpdHlcIiwgbGF5ZXIub3BhY2l0eSk7XG4gICAgICB1MShsYXllclByb2dyYW0sIFwidV9ibGVuZFwiLCBsYXllci5ibGVuZCk7XG4gICAgICB1MShsYXllclByb2dyYW0sIFwidV90aWxlXCIsIGxheWVyLnRpbGUpO1xuICAgICAgdTEobGF5ZXJQcm9ncmFtLCBcInVfd2FycFwiLCBsYXllci53YXJwKTtcbiAgICAgIHUxKGxheWVyUHJvZ3JhbSwgXCJ1X3N3aXJsXCIsIGxheWVyLnN3aXJsKTtcbiAgICAgIHUxKGxheWVyUHJvZ3JhbSwgXCJ1X3JpcHBsZVwiLCBsYXllci5yaXBwbGUpO1xuICAgICAgdTEobGF5ZXJQcm9ncmFtLCBcInVfa2FsZWlkb1wiLCBsYXllci5rYWxlaWRvKTtcbiAgICAgIHUxKGxheWVyUHJvZ3JhbSwgXCJ1X3BpeGVsYXRlXCIsIGxheWVyLnBpeGVsYXRlKTtcbiAgICAgIHUxKGxheWVyUHJvZ3JhbSwgXCJ1X2J1bGdlXCIsIGxheWVyLmJ1bGdlKTtcbiAgICAgIHUxKGxheWVyUHJvZ3JhbSwgXCJ1X21pcnJvclwiLCBsYXllci5taXJyb3IpO1xuICAgICAgdTEobGF5ZXJQcm9ncmFtLCBcInVfaHVlXCIsIGxheWVyLmh1ZSk7XG4gICAgICB1MShsYXllclByb2dyYW0sIFwidV9zYXRcIiwgbGF5ZXIuc2F0dXJhdGlvbik7XG4gICAgICB1MShsYXllclByb2dyYW0sIFwidV9jb25cIiwgbGF5ZXIuY29udHJhc3QpO1xuICAgICAgdTEobGF5ZXJQcm9ncmFtLCBcInVfYnJpXCIsIGxheWVyLmJyaWdodG5lc3MpO1xuICAgICAgdTEobGF5ZXJQcm9ncmFtLCBcInVfaW52ZXJ0XCIsIGxheWVyLmludmVydCk7XG4gICAgICB1MShsYXllclByb2dyYW0sIFwidV9wb3N0ZXJcIiwgbGF5ZXIucG9zdGVyaXplKTtcbiAgICAgIHUxKGxheWVyUHJvZ3JhbSwgXCJ1X2Nocm9tYVwiLCBsYXllci5jaHJvbWEpO1xuICAgICAgdTEobGF5ZXJQcm9ncmFtLCBcInVfZWRnZXNcIiwgbGF5ZXIuZWRnZXMpO1xuICAgICAgdTMobGF5ZXJQcm9ncmFtLCBcInVfdGludFwiLCBsYXllci50aW50KTtcbiAgICAgIHUxKGxheWVyUHJvZ3JhbSwgXCJ1X3RpbnRfYW10XCIsIGxheWVyLnRpbnRBbW91bnQpO1xuICAgICAgdTEobGF5ZXJQcm9ncmFtLCBcInVfc2hpbW1lclwiLCBsYXllci5zaGltbWVyKTtcbiAgICAgIHUxKGxheWVyUHJvZ3JhbSwgXCJ1X3NlZWRcIiwgbGF5ZXIuc2VlZCk7XG4gICAgICBkcmF3UXVhZCgpO1xuICAgICAgY29uc3Qgc3dhcCA9IHNvdXJjZTtcbiAgICAgIHNvdXJjZSA9IGRlc3Q7XG4gICAgICBkZXN0ID0gc3dhcDtcbiAgICB9XG5cbiAgICAvLyBQb3N0ICsgZmVlZGJhY2tcbiAgICBpZiAobmVlZEZlZWRiYWNrQ2xlYXIpIHtcbiAgICAgIGZvciAoY29uc3QgdGFyZ2V0IG9mIFt0YXJnZXRzLnBvc3RBLCB0YXJnZXRzLnBvc3RCXSkge1xuICAgICAgICBiaW5kVGFyZ2V0T3V0cHV0KHRhcmdldCk7XG4gICAgICAgIGdsIS5jbGVhckNvbG9yKDAsIDAsIDAsIDEpO1xuICAgICAgICBnbCEuY2xlYXIoZ2whLkNPTE9SX0JVRkZFUl9CSVQpO1xuICAgICAgfVxuICAgICAgbmVlZEZlZWRiYWNrQ2xlYXIgPSBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgcHJldiA9IHBvc3RGbGlwID8gdGFyZ2V0cy5wb3N0QSA6IHRhcmdldHMucG9zdEI7XG4gICAgY29uc3Qgb3V0ID0gcG9zdEZsaXAgPyB0YXJnZXRzLnBvc3RCIDogdGFyZ2V0cy5wb3N0QTtcbiAgICBwb3N0RmxpcCA9ICFwb3N0RmxpcDtcblxuICAgIGNvbnN0IHBvc3QgPSBwcm9ncmFtcy5wb3N0O1xuICAgIGdsIS51c2VQcm9ncmFtKHBvc3QucHJvZ3JhbSk7XG4gICAgYmluZFRhcmdldE91dHB1dChvdXQpO1xuICAgIHVUZXgocG9zdCwgXCJ1X3NjZW5lXCIsIHNvdXJjZS50ZXh0dXJlLCAwKTtcbiAgICB1VGV4KHBvc3QsIFwidV9wcmV2XCIsIHByZXYudGV4dHVyZSwgMSk7XG4gICAgdTIocG9zdCwgXCJ1X3Jlc1wiLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB1MShwb3N0LCBcInVfdGltZVwiLCBzdGF0ZS50aW1lKTtcbiAgICB1MShwb3N0LCBcInVfYXVkaW9cIiwgc3RhdGUuYXVkaW8gKiBnLmF1ZGlvUmVhY3QpO1xuICAgIHUyKHBvc3QsIFwidV9wb2ludGVyXCIsIHN0YXRlLnBvaW50ZXIueCwgc3RhdGUucG9pbnRlci55KTtcbiAgICB1Mihwb3N0LCBcInVfcG9pbnRlcl92ZWxcIiwgc3RhdGUucG9pbnRlci52ZWxvY2l0eVgsIHN0YXRlLnBvaW50ZXIudmVsb2NpdHlZKTtcbiAgICB1MShwb3N0LCBcInVfcG9pbnRlcl9kb3duXCIsIHN0YXRlLnBvaW50ZXIuZG93biA/IDEgOiAwKTtcbiAgICB1MShwb3N0LCBcInVfcG9pbnRlcl9hY3RpdmVcIiwgc3RhdGUucG9pbnRlci5hY3RpdmUgPyAxIDogMCk7XG4gICAgdTEocG9zdCwgXCJ1X2ZlZWRiYWNrXCIsIGcuZmVlZGJhY2spO1xuICAgIHUxKHBvc3QsIFwidV90cmFpbHNcIiwgZy50cmFpbHMpO1xuICAgIHUxKHBvc3QsIFwidV9mYl96b29tXCIsIGcuZmJab29tKTtcbiAgICB1MShwb3N0LCBcInVfZmJfcm90YXRlXCIsIGcuZmJSb3RhdGUpO1xuICAgIHUxKHBvc3QsIFwidV9mYl9odWVcIiwgZy5mYkh1ZSk7XG4gICAgdTEocG9zdCwgXCJ1X3dhcnBcIiwgZy53YXJwKTtcbiAgICB1MShwb3N0LCBcInVfc3dpcmxcIiwgZy5zd2lybCk7XG4gICAgdTEocG9zdCwgXCJ1X3JpcHBsZVwiLCBnLnJpcHBsZSk7XG4gICAgdTEocG9zdCwgXCJ1X3pvb21cIiwgZy56b29tKTtcbiAgICB1MShwb3N0LCBcInVfa2FsZWlkb1wiLCBnLmthbGVpZG8pO1xuICAgIHUxKHBvc3QsIFwidV9taXJyb3JcIiwgZy5taXJyb3IpO1xuICAgIHUxKHBvc3QsIFwidV9jaHJvbWFcIiwgZy5jaHJvbWEpO1xuICAgIHUxKHBvc3QsIFwidV9odWVfb3JiaXRcIiwgZy5odWVPcmJpdCk7XG4gICAgdTEocG9zdCwgXCJ1X3NhdFwiLCBnLnNhdHVyYXRpb24pO1xuICAgIHUxKHBvc3QsIFwidV9jb25cIiwgZy5jb250cmFzdCk7XG4gICAgdTEocG9zdCwgXCJ1X3NvbGFyaXplXCIsIGcuc29sYXJpemUpO1xuICAgIHUxKHBvc3QsIFwidV9ncmFpblwiLCBnLmdyYWluKTtcbiAgICB1MShwb3N0LCBcInVfc2NhbmxpbmVzXCIsIGcuc2NhbmxpbmVzKTtcbiAgICB1MShwb3N0LCBcInVfdmlnbmV0dGVcIiwgZy52aWduZXR0ZSk7XG4gICAgdTEocG9zdCwgXCJ1X3N0cm9iZVwiLCBnLnN0cm9iZSk7XG4gICAgdTEocG9zdCwgXCJ1X3BvaW50ZXJfZm9yY2VcIiwgZy5wb2ludGVyRm9yY2UpO1xuICAgIHUxKHBvc3QsIFwidV9wb2ludGVyX3NpemVcIiwgZy5wb2ludGVyU2l6ZSk7XG4gICAgdTEocG9zdCwgXCJ1X3BvaW50ZXJfbW9kZVwiLCBnLnBvaW50ZXJNb2RlKTtcbiAgICBkcmF3UXVhZCgpO1xuXG4gICAgLy8gUHJlc2VudFxuICAgIGNvbnN0IGNvcHkgPSBwcm9ncmFtcy5jb3B5O1xuICAgIGdsIS51c2VQcm9ncmFtKGNvcHkucHJvZ3JhbSk7XG4gICAgYmluZFRhcmdldE91dHB1dChudWxsKTtcbiAgICB1VGV4KGNvcHksIFwidV90ZXhcIiwgb3V0LnRleHR1cmUsIDApO1xuICAgIGRyYXdRdWFkKCk7XG4gIH1cblxuICBmdW5jdGlvbiBhcHBseVNpemUoKSB7XG4gICAgY29uc3QgcmF0aW8gPSBNYXRoLm1pbih3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxLCBwaXhlbFJhdGlvQ2FwKTtcbiAgICBjb25zdCBuZXh0V2lkdGggPSBNYXRoLm1heCgyLCBNYXRoLnJvdW5kKGNzc1dpZHRoICogcmF0aW8pKTtcbiAgICBjb25zdCBuZXh0SGVpZ2h0ID0gTWF0aC5tYXgoMiwgTWF0aC5yb3VuZChjc3NIZWlnaHQgKiByYXRpbykpO1xuICAgIGlmIChuZXh0V2lkdGggPT09IHdpZHRoICYmIG5leHRIZWlnaHQgPT09IGhlaWdodCkgcmV0dXJuO1xuICAgIHdpZHRoID0gbmV4dFdpZHRoO1xuICAgIGhlaWdodCA9IG5leHRIZWlnaHQ7XG4gICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICBmb3IgKGNvbnN0IHRhcmdldCBvZiBPYmplY3QudmFsdWVzKHRhcmdldHMpKSByZXNpemVUYXJnZXQodGFyZ2V0LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICBuZWVkRmVlZGJhY2tDbGVhciA9IHRydWU7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlc2l6ZShuZXh0Q3NzV2lkdGgsIG5leHRDc3NIZWlnaHQpIHtcbiAgICAgIGNzc1dpZHRoID0gTWF0aC5tYXgoMSwgbmV4dENzc1dpZHRoKTtcbiAgICAgIGNzc0hlaWdodCA9IE1hdGgubWF4KDEsIG5leHRDc3NIZWlnaHQpO1xuICAgICAgYXBwbHlTaXplKCk7XG4gICAgfSxcbiAgICBzZXRQaXhlbFJhdGlvQ2FwKGNhcCkge1xuICAgICAgcGl4ZWxSYXRpb0NhcCA9IE1hdGgubWF4KDAuNSwgY2FwKTtcbiAgICAgIGFwcGx5U2l6ZSgpO1xuICAgIH0sXG4gICAgc2V0SW1hZ2UoaW1hZ2VJZCwgc291cmNlSW1hZ2UpIHtcbiAgICAgIGxldCBlbnRyeSA9IGltYWdlcy5nZXQoaW1hZ2VJZCk7XG4gICAgICBpZiAoIWVudHJ5KSB7XG4gICAgICAgIGVudHJ5ID0geyB0ZXh0dXJlOiBtYWtlVGV4dHVyZSgpLCB3aWR0aDogMSwgaGVpZ2h0OiAxIH07XG4gICAgICAgIGltYWdlcy5zZXQoaW1hZ2VJZCwgZW50cnkpO1xuICAgICAgfVxuICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgZW50cnkudGV4dHVyZSk7XG4gICAgICBnbC5waXhlbFN0b3JlaShnbC5VTlBBQ0tfRkxJUF9ZX1dFQkdMLCB0cnVlKTtcbiAgICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgZ2wuUkdCQSwgZ2wuUkdCQSwgZ2wuVU5TSUdORURfQllURSwgc291cmNlSW1hZ2UpO1xuICAgICAgZ2wucGl4ZWxTdG9yZWkoZ2wuVU5QQUNLX0ZMSVBfWV9XRUJHTCwgZmFsc2UpO1xuICAgICAgY29uc3Qgc2l6ZSA9IHRleHR1cmVTb3VyY2VTaXplKHNvdXJjZUltYWdlKTtcbiAgICAgIGVudHJ5LndpZHRoID0gc2l6ZS53aWR0aDtcbiAgICAgIGVudHJ5LmhlaWdodCA9IHNpemUuaGVpZ2h0O1xuICAgIH0sXG4gICAgcmVtb3ZlSW1hZ2UoaW1hZ2VJZCkge1xuICAgICAgY29uc3QgZW50cnkgPSBpbWFnZXMuZ2V0KGltYWdlSWQpO1xuICAgICAgaWYgKCFlbnRyeSkgcmV0dXJuO1xuICAgICAgZ2wuZGVsZXRlVGV4dHVyZShlbnRyeS50ZXh0dXJlKTtcbiAgICAgIGltYWdlcy5kZWxldGUoaW1hZ2VJZCk7XG4gICAgfSxcbiAgICBoYXNJbWFnZShpbWFnZUlkKSB7XG4gICAgICByZXR1cm4gaW1hZ2VzLmhhcyhpbWFnZUlkKTtcbiAgICB9LFxuICAgIHJlbmRlcixcbiAgICBjbGVhckZlZWRiYWNrKCkge1xuICAgICAgbmVlZEZlZWRiYWNrQ2xlYXIgPSB0cnVlO1xuICAgIH0sXG4gICAgZGVzdHJveSgpIHtcbiAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgaW1hZ2VzLnZhbHVlcygpKSBnbC5kZWxldGVUZXh0dXJlKGVudHJ5LnRleHR1cmUpO1xuICAgICAgaW1hZ2VzLmNsZWFyKCk7XG4gICAgICBnbC5kZWxldGVUZXh0dXJlKG1pc3NpbmdUZXh0dXJlKTtcbiAgICAgIGZvciAoY29uc3QgdGFyZ2V0IG9mIE9iamVjdC52YWx1ZXModGFyZ2V0cykpIHtcbiAgICAgICAgZ2wuZGVsZXRlRnJhbWVidWZmZXIodGFyZ2V0LmZyYW1lYnVmZmVyKTtcbiAgICAgICAgZ2wuZGVsZXRlVGV4dHVyZSh0YXJnZXQudGV4dHVyZSk7XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IHsgcHJvZ3JhbSB9IG9mIE9iamVjdC52YWx1ZXMocHJvZ3JhbXMpKSBnbC5kZWxldGVQcm9ncmFtKHByb2dyYW0pO1xuICAgICAgaWYgKHF1YWQpIGdsLmRlbGV0ZUJ1ZmZlcihxdWFkKTtcbiAgICB9LFxuICB9O1xufVxuIiwgImltcG9ydCB0eXBlIHsgTWVkaWFLaW5kIH0gZnJvbSBcIi4uL3NoYXJlZC90eXBlc1wiO1xuXG5jb25zdCBBVURJT19FWFQgPSAvXFwuKG1wM3x3YXZ8b2dnfG00YXxhYWN8ZmxhY3xvcHVzfHdtYSkkL2k7XG5jb25zdCBJTUFHRV9FWFQgPSAvXFwuKHBuZ3xqcGU/Z3xnaWZ8d2VicHxibXB8c3ZnfGF2aWZ8aWNvKSQvaTtcbmNvbnN0IFZJREVPX0VYVCA9IC9cXC4obXA0fHdlYm18bW92fG00dnxhdml8bWt2fG9ndikkL2k7XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFzc2lmeUZpbGUoZmlsZTogRmlsZSk6IE1lZGlhS2luZCB7XG4gIGNvbnN0IHR5cGUgPSBmaWxlLnR5cGUudG9Mb3dlckNhc2UoKTtcbiAgaWYgKHR5cGUuc3RhcnRzV2l0aChcInZpZGVvL1wiKSkgcmV0dXJuIFwidmlkZW9cIjtcbiAgaWYgKHR5cGUuc3RhcnRzV2l0aChcImF1ZGlvL1wiKSkgcmV0dXJuIFwiYXVkaW9cIjtcbiAgaWYgKHR5cGUuc3RhcnRzV2l0aChcImltYWdlL1wiKSkgcmV0dXJuIFwiaW1hZ2VcIjtcbiAgaWYgKEFVRElPX0VYVC50ZXN0KGZpbGUubmFtZSkpIHJldHVybiBcImF1ZGlvXCI7XG4gIGlmIChJTUFHRV9FWFQudGVzdChmaWxlLm5hbWUpKSByZXR1cm4gXCJpbWFnZVwiO1xuICBpZiAoVklERU9fRVhULnRlc3QoZmlsZS5uYW1lKSkgcmV0dXJuIFwidmlkZW9cIjtcbiAgcmV0dXJuIFwiZGF0YVwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NpZnlCbG9iKGJsb2I6IEJsb2IsIG5hbWUgPSBcIlwiKTogTWVkaWFLaW5kIHtcbiAgcmV0dXJuIGNsYXNzaWZ5RmlsZShuZXcgRmlsZShbYmxvYl0sIG5hbWUgfHwgXCJmaWxlXCIsIHsgdHlwZTogYmxvYi50eXBlIH0pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lZGlhS2luZExhYmVsKGtpbmQ6IE1lZGlhS2luZCk6IHN0cmluZyB7XG4gIHN3aXRjaCAoa2luZCkge1xuICAgIGNhc2UgXCJ2aWRlb1wiOlxuICAgICAgcmV0dXJuIFwiVmlkZW9cIjtcbiAgICBjYXNlIFwiYXVkaW9cIjpcbiAgICAgIHJldHVybiBcIkF1ZGlvXCI7XG4gICAgY2FzZSBcImltYWdlXCI6XG4gICAgICByZXR1cm4gXCJJbWFnZVwiO1xuICAgIGNhc2UgXCJkYXRhXCI6XG4gICAgICByZXR1cm4gXCJEYXRhXCI7XG4gICAgZGVmYXVsdDoge1xuICAgICAgY29uc3QgX2V4aGF1c3RpdmU6IG5ldmVyID0ga2luZDtcbiAgICAgIHJldHVybiBfZXhoYXVzdGl2ZTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRMYXllck5hbWUoa2luZDogTWVkaWFLaW5kLCBmaWxlTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3Qgc3RlbSA9IGZpbGVOYW1lLnJlcGxhY2UoL1xcLlthLXowLTldKyQvaSwgXCJcIikudHJpbSgpO1xuICByZXR1cm4gc3RlbSB8fCBtZWRpYUtpbmRMYWJlbChraW5kKTtcbn1cblxuLyoqIEZpcnN0IDFNQiBvZiBhbiBhcmJpdHJhcnkgZmlsZSwgcGFpbnRlZCBhcyBhIDI1Nlx1MDBENzI1NiBieXRlIHRleHR1cmUuICovXG5leHBvcnQgZnVuY3Rpb24gcGFpbnREYXRhQnl0ZXMoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgYnl0ZXM6IFVpbnQ4QXJyYXkpIHtcbiAgY29uc3Qgd2lkdGggPSAyNTY7XG4gIGNvbnN0IGhlaWdodCA9IDI1NjtcbiAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIGlmICghY3R4KSByZXR1cm47XG5cbiAgY29uc3QgaW1hZ2UgPSBjdHguY3JlYXRlSW1hZ2VEYXRhKHdpZHRoLCBoZWlnaHQpO1xuICBjb25zdCB0b3RhbCA9IHdpZHRoICogaGVpZ2h0O1xuICBjb25zdCBsZW4gPSBieXRlcy5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG90YWw7IGkgKz0gMSkge1xuICAgIGNvbnN0IGEgPSBsZW4gPyAoYnl0ZXNbaSAlIGxlbl0gPz8gMCkgOiAoaSAqIDM3KSAmIDI1NTtcbiAgICBjb25zdCBiID0gbGVuID8gKGJ5dGVzWyhpICogMykgJSBsZW5dID8/IDApIDogKGkgKiA5MSkgJiAyNTU7XG4gICAgY29uc3QgYyA9IGxlbiA/IChieXRlc1soaSAqIDcgKyAxMykgJSBsZW5dID8/IDApIDogKGkgKiAxMykgJiAyNTU7XG4gICAgY29uc3QgbyA9IGkgKiA0O1xuICAgIGltYWdlLmRhdGFbb10gPSBhO1xuICAgIGltYWdlLmRhdGFbbyArIDFdID0gYjtcbiAgICBpbWFnZS5kYXRhW28gKyAyXSA9IChhIF4gYykgJiAyNTU7XG4gICAgaW1hZ2UuZGF0YVtvICsgM10gPSAyNTU7XG4gIH1cbiAgY3R4LnB1dEltYWdlRGF0YShpbWFnZSwgMCwgMCk7XG5cbiAgY29uc3Qgd2FzaCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgd2FzaC5hZGRDb2xvclN0b3AoMCwgXCJyZ2JhKDIzMiwyMzAsMjI0LDAuMSlcIik7XG4gIHdhc2guYWRkQ29sb3JTdG9wKDAuNSwgXCJyZ2JhKDE2OCwxMjAsMTI4LDAuMTIpXCIpO1xuICB3YXNoLmFkZENvbG9yU3RvcCgxLCBcInJnYmEoMTM4LDEzNCwxNDQsMC4xKVwiKTtcbiAgY3R4LmZpbGxTdHlsZSA9IHdhc2g7XG4gIGN0eC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuc3VyZVNwZWN0cnVtQ2FudmFzKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgaWYgKGNhbnZhcy53aWR0aCAhPT0gNjQwIHx8IGNhbnZhcy5oZWlnaHQgIT09IDM2MCkge1xuICAgIGNhbnZhcy53aWR0aCA9IDY0MDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gMzYwO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZXZlbEZyb21TcGVjdHJ1bShzcGVjdHJ1bTogVWludDhBcnJheSk6IG51bWJlciB7XG4gIGNvbnN0IGJpbnMgPSBNYXRoLm1pbig0OCwgc3BlY3RydW0ubGVuZ3RoKTtcbiAgbGV0IHRvdGFsID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBiaW5zOyBpICs9IDEpXG4gICAgdG90YWwgKz0gc3BlY3RydW1baV0gKiAoMS4zNSAtIChpIC8gYmlucykgKiAwLjU1KTtcbiAgcmV0dXJuIE1hdGgubWluKDEsIHRvdGFsIC8gYmlucyAvIDE5MCk7XG59XG5cbi8qKiBSZWFjdGl2ZSBmaWVsZCB1c2VkIGFzIHRoZSBsYXllciB0ZXh0dXJlIGZvciBhdWRpbyBmaWxlcy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYWludEF1ZGlvVmlzdWFsKFxuICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LFxuICBzcGVjdHJ1bTogVWludDhBcnJheSxcbiAgbGV2ZWw6IG51bWJlcixcbiAgdGltZTogbnVtYmVyLFxuKSB7XG4gIGVuc3VyZVNwZWN0cnVtQ2FudmFzKGNhbnZhcyk7XG4gIGNvbnN0IHdpZHRoID0gY2FudmFzLndpZHRoO1xuICBjb25zdCBoZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBpZiAoIWN0eCkgcmV0dXJuO1xuXG4gIGN0eC5maWxsU3R5bGUgPSBgcmdiYSg4LCA4LCAxMCwgJHswLjEgKyAoMSAtIGxldmVsKSAqIDAuMDh9KWA7XG4gIGN0eC5maWxsUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcblxuICBjb25zdCBiaW5zID0gTWF0aC5taW4oOTYsIHNwZWN0cnVtLmxlbmd0aCk7XG4gIGNvbnN0IGJhcldpZHRoID0gd2lkdGggLyBiaW5zO1xuICBjb25zdCBtaWQgPSBoZWlnaHQgKiAwLjU1O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGJpbnM7IGkgKz0gMSkge1xuICAgIGNvbnN0IHNhbXBsZSA9IHNwZWN0cnVtW2ldIC8gMjU1O1xuICAgIGNvbnN0IGJvb3N0ID0gc2FtcGxlICogKDAuNTUgKyBsZXZlbCAqIDAuOSk7XG4gICAgY29uc3QgaCA9IGJvb3N0ICogaGVpZ2h0ICogMC43MjtcbiAgICBjb25zdCBodWUgPSAyMCArIChpIC8gYmlucykgKiA0MCArIHRpbWUgKiAxMiArIGxldmVsICogMzA7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGBoc2woJHtodWUgJSAzNjB9ICR7MjggKyBzYW1wbGUgKiAzNX0lICR7MzIgKyBzYW1wbGUgKiAzOH0lKWA7XG4gICAgY3R4LmZpbGxSZWN0KGkgKiBiYXJXaWR0aCwgbWlkIC0gaCAqIDAuNTUsIE1hdGgubWF4KDEsIGJhcldpZHRoICogMC44MiksIGgpO1xuICB9XG5cbiAgY29uc3QgY3ggPSB3aWR0aCAqIDAuNTtcbiAgY29uc3QgY3kgPSBoZWlnaHQgKiAwLjQ4O1xuICBjb25zdCByYWRpdXMgPSBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KSAqICgwLjA4ICsgbGV2ZWwgKiAwLjE4KTtcbiAgY29uc3QgZ2xvdyA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudChjeCwgY3ksIDAsIGN4LCBjeSwgcmFkaXVzICogMi4yKTtcbiAgZ2xvdy5hZGRDb2xvclN0b3AoMCwgYGhzbGEoMTIgNDUlIDYyJSAvICR7MC4xOCArIGxldmVsICogMC4zNX0pYCk7XG4gIGdsb3cuYWRkQ29sb3JTdG9wKDEsIFwiaHNsYSgwIDAlIDAlIC8gMClcIik7XG4gIGN0eC5maWxsU3R5bGUgPSBnbG93O1xuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC5hcmMoY3gsIGN5LCByYWRpdXMgKiAyLjIsIDAsIE1hdGguUEkgKiAyKTtcbiAgY3R4LmZpbGwoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbnZhc1RodW1iKFxuICBzb3VyY2U6IENhbnZhc0ltYWdlU291cmNlLFxuICB3aWR0aDogbnVtYmVyLFxuICBoZWlnaHQ6IG51bWJlcixcbiAgbWF4RGltID0gOTYsXG4pOiBzdHJpbmcge1xuICBjb25zdCBzY2FsZSA9IE1hdGgubWluKDEsIG1heERpbSAvIE1hdGgubWF4KHdpZHRoLCBoZWlnaHQsIDEpKTtcbiAgY29uc3QgdGh1bWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICB0aHVtYi53aWR0aCA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQod2lkdGggKiBzY2FsZSkpO1xuICB0aHVtYi5oZWlnaHQgPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKGhlaWdodCAqIHNjYWxlKSk7XG4gIGNvbnN0IGN0eCA9IHRodW1iLmdldENvbnRleHQoXCIyZFwiKTtcbiAgaWYgKCFjdHgpIHJldHVybiBcIlwiO1xuICBjdHguZHJhd0ltYWdlKHNvdXJjZSwgMCwgMCwgdGh1bWIud2lkdGgsIHRodW1iLmhlaWdodCk7XG4gIHJldHVybiB0aHVtYi50b0RhdGFVUkwoXCJpbWFnZS9qcGVnXCIsIDAuNyk7XG59XG4iLCAiLy8gQ2xpZW50LXNpZGUgcGVyc2lzdGVuY2U6IG1lZGlhIGJsb2JzIGxpdmUgaW4gSW5kZXhlZERCIChzY2VuZXMgc2F2ZWQgdG8gdGhlXG4vLyBzZXJ2ZXIgYXJlIHBhcmFtcy1vbmx5IEpTT04pLCBhbmQgdGhlIHdvcmtpbmcgc2NlbmUgYXV0b3NhdmVzIHRvIGxvY2FsU3RvcmFnZS5cblxuaW1wb3J0IHsgZGVjb2RlU2NlbmUsIGVuY29kZVNjZW5lLCB0eXBlIFNjZW5lIH0gZnJvbSBcIi4uL3NoYXJlZC90eXBlc1wiO1xuXG5jb25zdCBEQl9OQU1FID0gXCJ2YXVkaW8tMi1pbWFnZXNcIjtcbmNvbnN0IFNUT1JFID0gXCJpbWFnZXNcIjtcbmNvbnN0IEFVVE9TQVZFX0tFWSA9IFwidmF1ZGlvLTI6YXV0b3NhdmVcIjtcbmNvbnN0IE1BWF9URVhUVVJFX0RJTSA9IDIwNDg7XG5jb25zdCBUSFVNQl9ESU0gPSA5NjtcblxubGV0IGRiUHJvbWlzZTogUHJvbWlzZTxJREJEYXRhYmFzZT4gfCBudWxsID0gbnVsbDtcblxuZnVuY3Rpb24gb3BlbkRiKCk6IFByb21pc2U8SURCRGF0YWJhc2U+IHtcbiAgaWYgKCFkYlByb21pc2UpIHtcbiAgICBkYlByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4oREJfTkFNRSwgMSk7XG4gICAgICByZXF1ZXN0Lm9udXBncmFkZW5lZWRlZCA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0LnJlc3VsdC5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKFNUT1JFKSkge1xuICAgICAgICAgIHJlcXVlc3QucmVzdWx0LmNyZWF0ZU9iamVjdFN0b3JlKFNUT1JFKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4gcmVzb2x2ZShyZXF1ZXN0LnJlc3VsdCk7XG4gICAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoKSA9PiByZWplY3QocmVxdWVzdC5lcnJvciA/PyBuZXcgRXJyb3IoXCJJbmRleGVkREIgb3BlbiBmYWlsZWRcIikpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBkYlByb21pc2U7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwdXRJbWFnZUJsb2IoaWQ6IHN0cmluZywgYmxvYjogQmxvYik6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCBkYiA9IGF3YWl0IG9wZW5EYigpO1xuICBhd2FpdCBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgdHggPSBkYi50cmFuc2FjdGlvbihTVE9SRSwgXCJyZWFkd3JpdGVcIik7XG4gICAgdHgub2JqZWN0U3RvcmUoU1RPUkUpLnB1dChibG9iLCBpZCk7XG4gICAgdHgub25jb21wbGV0ZSA9ICgpID0+IHJlc29sdmUoKTtcbiAgICB0eC5vbmVycm9yID0gKCkgPT4gcmVqZWN0KHR4LmVycm9yID8/IG5ldyBFcnJvcihcIkluZGV4ZWREQiB3cml0ZSBmYWlsZWRcIikpO1xuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEltYWdlQmxvYihpZDogc3RyaW5nKTogUHJvbWlzZTxCbG9iIHwgbnVsbD4ge1xuICBjb25zdCBkYiA9IGF3YWl0IG9wZW5EYigpO1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBkYi50cmFuc2FjdGlvbihTVE9SRSwgXCJyZWFkb25seVwiKS5vYmplY3RTdG9yZShTVE9SRSkuZ2V0KGlkKTtcbiAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9ICgpID0+IHJlc29sdmUocmVxdWVzdC5yZXN1bHQgaW5zdGFuY2VvZiBCbG9iID8gcmVxdWVzdC5yZXN1bHQgOiBudWxsKTtcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoKSA9PiByZWplY3QocmVxdWVzdC5lcnJvciA/PyBuZXcgRXJyb3IoXCJJbmRleGVkREIgcmVhZCBmYWlsZWRcIikpO1xuICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUltYWdlQmxvYihpZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IGRiID0gYXdhaXQgb3BlbkRiKCk7XG4gIGF3YWl0IG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCB0eCA9IGRiLnRyYW5zYWN0aW9uKFNUT1JFLCBcInJlYWR3cml0ZVwiKTtcbiAgICB0eC5vYmplY3RTdG9yZShTVE9SRSkuZGVsZXRlKGlkKTtcbiAgICB0eC5vbmNvbXBsZXRlID0gKCkgPT4gcmVzb2x2ZSgpO1xuICAgIHR4Lm9uZXJyb3IgPSAoKSA9PiByZWplY3QodHguZXJyb3IgPz8gbmV3IEVycm9yKFwiSW5kZXhlZERCIGRlbGV0ZSBmYWlsZWRcIikpO1xuICB9KTtcbn1cblxuZXhwb3J0IHR5cGUgRGVjb2RlZEltYWdlID0ge1xuICAvKiogRG93bnNjYWxlZCB0byBHUFUtZnJpZW5kbHkgc2l6ZTsgdXBsb2FkIHRoaXMgYXMgdGhlIHRleHR1cmUuICovXG4gIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIC8qKiBUaW55IGRhdGEgVVJMIGZvciB0aGUgbGF5ZXJzIHBhbmVsLiAqL1xuICB0aHVtYjogc3RyaW5nO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVJbWFnZUJsb2IoYmxvYjogQmxvYik6IFByb21pc2U8RGVjb2RlZEltYWdlPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHNjYWxlID0gTWF0aC5taW4oMSwgTUFYX1RFWFRVUkVfRElNIC8gTWF0aC5tYXgoaW1hZ2UubmF0dXJhbFdpZHRoLCBpbWFnZS5uYXR1cmFsSGVpZ2h0KSk7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZChpbWFnZS5uYXR1cmFsV2lkdGggKiBzY2FsZSkpO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKGltYWdlLm5hdHVyYWxIZWlnaHQgKiBzY2FsZSkpO1xuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIGlmICghY29udGV4dCkgdGhyb3cgbmV3IEVycm9yKFwiMkQgY2FudmFzIHVuYXZhaWxhYmxlXCIpO1xuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgMCwgMCwgd2lkdGgsIGhlaWdodCk7XG5cbiAgICAgICAgY29uc3QgdGh1bWJTY2FsZSA9IE1hdGgubWluKDEsIFRIVU1CX0RJTSAvIE1hdGgubWF4KHdpZHRoLCBoZWlnaHQpKTtcbiAgICAgICAgY29uc3QgdGh1bWJDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICB0aHVtYkNhbnZhcy53aWR0aCA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQod2lkdGggKiB0aHVtYlNjYWxlKSk7XG4gICAgICAgIHRodW1iQ2FudmFzLmhlaWdodCA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQoaGVpZ2h0ICogdGh1bWJTY2FsZSkpO1xuICAgICAgICBjb25zdCB0aHVtYkNvbnRleHQgPSB0aHVtYkNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIGlmICh0aHVtYkNvbnRleHQpIHRodW1iQ29udGV4dC5kcmF3SW1hZ2UoY2FudmFzLCAwLCAwLCB0aHVtYkNhbnZhcy53aWR0aCwgdGh1bWJDYW52YXMuaGVpZ2h0KTtcblxuICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICBjYW52YXMsXG4gICAgICAgICAgdGh1bWI6IHRodW1iQ2FudmFzLnRvRGF0YVVSTChcImltYWdlL2pwZWdcIiwgMC43KSxcbiAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICBoZWlnaHQsXG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoY2F1c2UpIHtcbiAgICAgICAgcmVqZWN0KGNhdXNlIGluc3RhbmNlb2YgRXJyb3IgPyBjYXVzZSA6IG5ldyBFcnJvcihcIkltYWdlIGRlY29kZSBmYWlsZWRcIikpO1xuICAgICAgfVxuICAgIH07XG4gICAgaW1hZ2Uub25lcnJvciA9ICgpID0+IHtcbiAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcbiAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJDb3VsZCBub3QgZGVjb2RlIHRoYXQgaW1hZ2VcIikpO1xuICAgIH07XG4gICAgaW1hZ2Uuc3JjID0gdXJsO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5ld0lkKHByZWZpeDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAke3ByZWZpeH0tJHtEYXRlLm5vdygpLnRvU3RyaW5nKDM2KX0tJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyLCA4KX1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUF1dG9zYXZlKHNjZW5lOiBTY2VuZSk6IHZvaWQge1xuICB0cnkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKEFVVE9TQVZFX0tFWSwgZW5jb2RlU2NlbmUoc2NlbmUpKTtcbiAgfSBjYXRjaCB7XG4gICAgLy8gUXVvdGEgLyBwcml2YXRlIG1vZGUgXHUyMDE0IGxvc2luZyBhdXRvc2F2ZSBpcyBhY2NlcHRhYmxlLlxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkQXV0b3NhdmUoKTogU2NlbmUgfCBudWxsIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByYXcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShBVVRPU0FWRV9LRVkpO1xuICAgIGlmICghcmF3KSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gZGVjb2RlU2NlbmUocmF3KTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiIsICJjb25zdCBFTkNPREVEX0VOVElUSUVTID0gL1tcIiY8XS87XG5cbi8qKiBAcGFyYW0ge3N0cmluZ30gc3RyICovXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlRW50aXRpZXMoc3RyKSB7XG5cdC8vIFNraXAgYWxsIHdvcmsgZm9yIHN0cmluZ3Mgd2l0aCBubyBlbnRpdGllcyBuZWVkaW5nIGVuY29kaW5nOlxuXHRpZiAoc3RyLmxlbmd0aCA9PT0gMCB8fCBFTkNPREVEX0VOVElUSUVTLnRlc3Qoc3RyKSA9PT0gZmFsc2UpIHJldHVybiBzdHI7XG5cblx0bGV0IGxhc3QgPSAwLFxuXHRcdGkgPSAwLFxuXHRcdG91dCA9ICcnLFxuXHRcdGNoID0gJyc7XG5cblx0Ly8gU2VlayBmb3J3YXJkIGluIHN0ciB1bnRpbCB0aGUgbmV4dCBlbnRpdHkgY2hhcjpcblx0Zm9yICg7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcblx0XHRzd2l0Y2ggKHN0ci5jaGFyQ29kZUF0KGkpKSB7XG5cdFx0XHRjYXNlIDM0OlxuXHRcdFx0XHRjaCA9ICcmcXVvdDsnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMzg6XG5cdFx0XHRcdGNoID0gJyZhbXA7Jztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDYwOlxuXHRcdFx0XHRjaCA9ICcmbHQ7Jztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Ly8gQXBwZW5kIHNraXBwZWQvYnVmZmVyZWQgY2hhcmFjdGVycyBhbmQgdGhlIGVuY29kZWQgZW50aXR5OlxuXHRcdGlmIChpICE9PSBsYXN0KSBvdXQgKz0gc3RyLnNsaWNlKGxhc3QsIGkpO1xuXHRcdG91dCArPSBjaDtcblx0XHQvLyBTdGFydCB0aGUgbmV4dCBzZWVrL2J1ZmZlciBhZnRlciB0aGUgZW50aXR5J3Mgb2Zmc2V0OlxuXHRcdGxhc3QgPSBpICsgMTtcblx0fVxuXHRpZiAoaSAhPT0gbGFzdCkgb3V0ICs9IHN0ci5zbGljZShsYXN0LCBpKTtcblx0cmV0dXJuIG91dDtcbn1cbiIsICIvKiogTm9ybWFsIGh5ZHJhdGlvbiB0aGF0IGF0dGFjaGVzIHRvIGEgRE9NIHRyZWUgYnV0IGRvZXMgbm90IGRpZmYgaXQuICovXG5leHBvcnQgY29uc3QgTU9ERV9IWURSQVRFID0gMSA8PCA1O1xuLyoqIFNpZ25pZmllcyB0aGlzIFZOb2RlIHN1c3BlbmRlZCBvbiB0aGUgcHJldmlvdXMgcmVuZGVyICovXG5leHBvcnQgY29uc3QgTU9ERV9TVVNQRU5ERUQgPSAxIDw8IDc7XG4vKiogSW5kaWNhdGVzIHRoYXQgdGhpcyBub2RlIG5lZWRzIHRvIGJlIGluc2VydGVkIHdoaWxlIHBhdGNoaW5nIGNoaWxkcmVuICovXG5leHBvcnQgY29uc3QgSU5TRVJUX1ZOT0RFID0gMSA8PCAyO1xuLyoqIEluZGljYXRlcyBhIFZOb2RlIGhhcyBiZWVuIG1hdGNoZWQgd2l0aCBhbm90aGVyIFZOb2RlIGluIHRoZSBkaWZmICovXG5leHBvcnQgY29uc3QgTUFUQ0hFRCA9IDEgPDwgMTtcblxuLyoqIFJlc2V0IGFsbCBtb2RlIGZsYWdzICovXG5leHBvcnQgY29uc3QgUkVTRVRfTU9ERSA9IH4oTU9ERV9IWURSQVRFIHwgTU9ERV9TVVNQRU5ERUQpO1xuXG5leHBvcnQgY29uc3QgU1ZHX05BTUVTUEFDRSA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG5leHBvcnQgY29uc3QgWEhUTUxfTkFNRVNQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnO1xuZXhwb3J0IGNvbnN0IE1BVEhfTkFNRVNQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUwnO1xuXG5leHBvcnQgY29uc3QgTlVMTCA9IG51bGw7XG5leHBvcnQgY29uc3QgVU5ERUZJTkVEID0gdW5kZWZpbmVkO1xuZXhwb3J0IGNvbnN0IEVNUFRZX09CSiA9IC8qKiBAdHlwZSB7YW55fSAqLyAoe30pO1xuZXhwb3J0IGNvbnN0IEVNUFRZX0FSUiA9IFtdO1xuZXhwb3J0IGNvbnN0IElTX05PTl9ESU1FTlNJT05BTCA9XG5cdC9hY2l0fGV4KD86c3xnfG58cHwkKXxycGh8Z3JpZHxvd3N8bW5jfG50d3xpbmVbY2hdfHpvb3xeb3JkfGl0ZXJhL2k7XG4iLCAiaW1wb3J0IHsgb3B0aW9ucywgRnJhZ21lbnQgfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHsgZW5jb2RlRW50aXRpZXMgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IElTX05PTl9ESU1FTlNJT05BTCB9IGZyb20gJy4uLy4uL3NyYy9jb25zdGFudHMnO1xuXG5sZXQgdm5vZGVJZCA9IDA7XG5cbmNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXdcbiAqIFRoaXMgZmlsZSBleHBvcnRzIHZhcmlvdXMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBCYWJlbCdzIFwiYXV0b21hdGljXCIgSlNYIHJ1bnRpbWUgQVBJOlxuICogLSBqc3godHlwZSwgcHJvcHMsIGtleSlcbiAqIC0ganN4cyh0eXBlLCBwcm9wcywga2V5KVxuICogLSBqc3hERVYodHlwZSwgcHJvcHMsIGtleSwgX19zb3VyY2UsIF9fc2VsZilcbiAqXG4gKiBUaGUgaW1wbGVtZW50YXRpb24gb2YgY3JlYXRlVk5vZGUgaGVyZSBpcyBvcHRpbWl6ZWQgZm9yIHBlcmZvcm1hbmNlLlxuICogQmVuY2htYXJrczogaHR0cHM6Ly9lc2JlbmNoLmNvbS9iZW5jaC81ZjZiNTRhMGI0NjMyMTAwYTdkY2QyYjNcbiAqL1xuXG4vKipcbiAqIEpTWC5FbGVtZW50IGZhY3RvcnkgdXNlZCBieSBCYWJlbCdzIHtydW50aW1lOlwiYXV0b21hdGljXCJ9IEpTWCB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7Vk5vZGVbJ3R5cGUnXX0gdHlwZVxuICogQHBhcmFtIHtWTm9kZVsncHJvcHMnXX0gcHJvcHNcbiAqIEBwYXJhbSB7Vk5vZGVbJ2tleSddfSBba2V5XVxuICogQHBhcmFtIHt1bmtub3dufSBbaXNTdGF0aWNDaGlsZHJlbl1cbiAqIEBwYXJhbSB7dW5rbm93bn0gW19fc291cmNlXVxuICogQHBhcmFtIHt1bmtub3dufSBbX19zZWxmXVxuICovXG5mdW5jdGlvbiBjcmVhdGVWTm9kZSh0eXBlLCBwcm9wcywga2V5LCBpc1N0YXRpY0NoaWxkcmVuLCBfX3NvdXJjZSwgX19zZWxmKSB7XG5cdGlmICghcHJvcHMpIHByb3BzID0ge307XG5cdC8vIFdlJ2xsIHdhbnQgdG8gcHJlc2VydmUgYHJlZmAgaW4gcHJvcHMgdG8gZ2V0IHJpZCBvZiB0aGUgbmVlZCBmb3Jcblx0Ly8gZm9yd2FyZFJlZiBjb21wb25lbnRzIGluIHRoZSBmdXR1cmUsIGJ1dCB0aGF0IHNob3VsZCBoYXBwZW4gdmlhXG5cdC8vIGEgc2VwYXJhdGUgUFIuXG5cdGxldCBub3JtYWxpemVkUHJvcHMgPSBwcm9wcyxcblx0XHRyZWYsXG5cdFx0aTtcblxuXHRpZiAoJ3JlZicgaW4gbm9ybWFsaXplZFByb3BzKSB7XG5cdFx0bm9ybWFsaXplZFByb3BzID0ge307XG5cdFx0Zm9yIChpIGluIHByb3BzKSB7XG5cdFx0XHRpZiAoaSA9PSAncmVmJykge1xuXHRcdFx0XHRyZWYgPSBwcm9wc1tpXTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG5vcm1hbGl6ZWRQcm9wc1tpXSA9IHByb3BzW2ldO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKiBAdHlwZSB7Vk5vZGUgJiB7IF9fc291cmNlOiBhbnk7IF9fc2VsZjogYW55IH19ICovXG5cdGNvbnN0IHZub2RlID0ge1xuXHRcdHR5cGUsXG5cdFx0cHJvcHM6IG5vcm1hbGl6ZWRQcm9wcyxcblx0XHRrZXksXG5cdFx0cmVmLFxuXHRcdF9jaGlsZHJlbjogbnVsbCxcblx0XHRfcGFyZW50OiBudWxsLFxuXHRcdF9kZXB0aDogMCxcblx0XHRfZG9tOiBudWxsLFxuXHRcdF9jb21wb25lbnQ6IG51bGwsXG5cdFx0Y29uc3RydWN0b3I6IHVuZGVmaW5lZCxcblx0XHRfb3JpZ2luYWw6IC0tdm5vZGVJZCxcblx0XHRfaW5kZXg6IC0xLFxuXHRcdF9mbGFnczogMCxcblx0XHRfX3NvdXJjZSxcblx0XHRfX3NlbGZcblx0fTtcblxuXHQvLyBJZiBhIENvbXBvbmVudCBWTm9kZSwgY2hlY2sgZm9yIGFuZCBhcHBseSBkZWZhdWx0UHJvcHMuXG5cdC8vIE5vdGU6IGB0eXBlYCBpcyBvZnRlbiBhIFN0cmluZywgYW5kIGNhbiBiZSBgdW5kZWZpbmVkYCBpbiBkZXZlbG9wbWVudC5cblx0aWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nICYmIChyZWYgPSB0eXBlLmRlZmF1bHRQcm9wcykpIHtcblx0XHRmb3IgKGkgaW4gcmVmKVxuXHRcdFx0aWYgKG5vcm1hbGl6ZWRQcm9wc1tpXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdG5vcm1hbGl6ZWRQcm9wc1tpXSA9IHJlZltpXTtcblx0XHRcdH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnZub2RlKSBvcHRpb25zLnZub2RlKHZub2RlKTtcblx0cmV0dXJuIHZub2RlO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIHRlbXBsYXRlIHZub2RlLiBUaGlzIGZ1bmN0aW9uIGlzIG5vdCBleHBlY3RlZCB0byBiZVxuICogdXNlZCBkaXJlY3RseSwgYnV0IHJhdGhlciB0aHJvdWdoIGEgcHJlY29tcGlsZSBKU1ggdHJhbnNmb3JtXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSB0ZW1wbGF0ZXNcbiAqIEBwYXJhbSAge0FycmF5PHN0cmluZyB8IG51bGwgfCBWTm9kZT59IGV4cHJzXG4gKiBAcmV0dXJucyB7Vk5vZGV9XG4gKi9cbmZ1bmN0aW9uIGpzeFRlbXBsYXRlKHRlbXBsYXRlcywgLi4uZXhwcnMpIHtcblx0Y29uc3Qgdm5vZGUgPSBjcmVhdGVWTm9kZShGcmFnbWVudCwgeyB0cGw6IHRlbXBsYXRlcywgZXhwcnMgfSk7XG5cdC8vIEJ5cGFzcyByZW5kZXIgdG8gc3RyaW5nIHRvcCBsZXZlbCBGcmFnbWVudCBvcHRpbWl6YXRpb25cblx0dm5vZGUua2V5ID0gdm5vZGUuX3Zub2RlO1xuXHRyZXR1cm4gdm5vZGU7XG59XG5cbmNvbnN0IEpTX1RPX0NTUyA9IHt9O1xuY29uc3QgQ1NTX1JFR0VYID0gL1tBLVpdL2c7XG5cbi8qKlxuICogVW53cmFwIHBvdGVudGlhbCBzaWduYWxzLlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHJldHVybnMgeyp9XG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZUF0dHJWYWx1ZSh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUgIT09IG51bGwgJiZcblx0XHR0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmXG5cdFx0dHlwZW9mIHZhbHVlLnZhbHVlT2YgPT09ICdmdW5jdGlvbidcblx0XHQ/IHZhbHVlLnZhbHVlT2YoKVxuXHRcdDogdmFsdWU7XG59XG5cbi8qKlxuICogU2VyaWFsaXplIGFuIEhUTUwgYXR0cmlidXRlIHRvIGEgc3RyaW5nLiBUaGlzIGZ1bmN0aW9uIGlzIG5vdFxuICogZXhwZWN0ZWQgdG8gYmUgdXNlZCBkaXJlY3RseSwgYnV0IHJhdGhlciB0aHJvdWdoIGEgcHJlY29tcGlsZVxuICogSlNYIHRyYW5zZm9ybVxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIGF0dHJpYnV0ZSBuYW1lXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBhdHRyaWJ1dGUgdmFsdWVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGpzeEF0dHIobmFtZSwgdmFsdWUpIHtcblx0aWYgKG9wdGlvbnMuYXR0cikge1xuXHRcdGNvbnN0IHJlc3VsdCA9IG9wdGlvbnMuYXR0cihuYW1lLCB2YWx1ZSk7XG5cdFx0aWYgKHR5cGVvZiByZXN1bHQgPT09ICdzdHJpbmcnKSByZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0dmFsdWUgPSBub3JtYWxpemVBdHRyVmFsdWUodmFsdWUpO1xuXG5cdGlmIChuYW1lID09PSAncmVmJyB8fCBuYW1lID09PSAna2V5JykgcmV0dXJuICcnO1xuXHRpZiAobmFtZSA9PT0gJ3N0eWxlJyAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG5cdFx0bGV0IHN0ciA9ICcnO1xuXHRcdGZvciAobGV0IHByb3AgaW4gdmFsdWUpIHtcblx0XHRcdGxldCB2YWwgPSB2YWx1ZVtwcm9wXTtcblx0XHRcdGlmICh2YWwgIT0gbnVsbCAmJiB2YWwgIT09ICcnKSB7XG5cdFx0XHRcdGNvbnN0IG5hbWUgPVxuXHRcdFx0XHRcdHByb3BbMF0gPT0gJy0nXG5cdFx0XHRcdFx0XHQ/IHByb3Bcblx0XHRcdFx0XHRcdDogSlNfVE9fQ1NTW3Byb3BdIHx8XG5cdFx0XHRcdFx0XHRcdChKU19UT19DU1NbcHJvcF0gPSBwcm9wLnJlcGxhY2UoQ1NTX1JFR0VYLCAnLSQmJykudG9Mb3dlckNhc2UoKSk7XG5cblx0XHRcdFx0bGV0IHN1ZmZpeCA9ICc7Jztcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdHR5cGVvZiB2YWwgPT09ICdudW1iZXInICYmXG5cdFx0XHRcdFx0Ly8gRXhjbHVkZSBjdXN0b20tYXR0cmlidXRlc1xuXHRcdFx0XHRcdCFuYW1lLnN0YXJ0c1dpdGgoJy0tJykgJiZcblx0XHRcdFx0XHQhSVNfTk9OX0RJTUVOU0lPTkFMLnRlc3QobmFtZSlcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0c3VmZml4ID0gJ3B4Oyc7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3RyID0gc3RyICsgbmFtZSArICc6JyArIHZhbCArIHN1ZmZpeDtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIG5hbWUgKyAnPVwiJyArIGVuY29kZUVudGl0aWVzKHN0cikgKyAnXCInO1xuXHR9XG5cblx0aWYgKFxuXHRcdHZhbHVlID09IG51bGwgfHxcblx0XHR2YWx1ZSA9PT0gZmFsc2UgfHxcblx0XHR0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgfHxcblx0XHR0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG5cdCkge1xuXHRcdHJldHVybiAnJztcblx0fSBlbHNlIGlmICh2YWx1ZSA9PT0gdHJ1ZSkgcmV0dXJuIG5hbWU7XG5cblx0cmV0dXJuIG5hbWUgKyAnPVwiJyArIGVuY29kZUVudGl0aWVzKCcnICsgdmFsdWUpICsgJ1wiJztcbn1cblxuLyoqXG4gKiBFc2NhcGUgYSBkeW5hbWljIGNoaWxkIHBhc3NlZCB0byBganN4VGVtcGxhdGVgLiBUaGlzIGZ1bmN0aW9uXG4gKiBpcyBub3QgZXhwZWN0ZWQgdG8gYmUgdXNlZCBkaXJlY3RseSwgYnV0IHJhdGhlciB0aHJvdWdoIGFcbiAqIHByZWNvbXBpbGUgSlNYIHRyYW5zZm9ybVxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHJldHVybnMge3N0cmluZyB8IG51bGwgfCBWTm9kZSB8IEFycmF5PHN0cmluZyB8IG51bGwgfCBWTm9kZT59XG4gKi9cbmZ1bmN0aW9uIGpzeEVzY2FwZSh2YWx1ZSkge1xuXHRpZiAoXG5cdFx0dmFsdWUgPT0gbnVsbCB8fFxuXHRcdHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nIHx8XG5cdFx0dHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nXG5cdCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcblx0XHQvLyBDaGVjayBmb3IgVk5vZGVcblx0XHRpZiAodmFsdWUuY29uc3RydWN0b3IgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHZhbHVlO1xuXG5cdFx0aWYgKGlzQXJyYXkodmFsdWUpKSB7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhbHVlW2ldID0ganN4RXNjYXBlKHZhbHVlW2ldKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZW5jb2RlRW50aXRpZXMoJycgKyB2YWx1ZSk7XG59XG5cbmV4cG9ydCB7XG5cdGNyZWF0ZVZOb2RlIGFzIGpzeCxcblx0Y3JlYXRlVk5vZGUgYXMganN4cyxcblx0Y3JlYXRlVk5vZGUgYXMganN4REVWLFxuXHRGcmFnbWVudCxcblx0Ly8gcHJlY29tcGlsZWQgSlNYIHRyYW5zZm9ybVxuXHRqc3hUZW1wbGF0ZSxcblx0anN4QXR0cixcblx0anN4RXNjYXBlXG59O1xuIiwgImltcG9ydCB7IHVzZUF1dGgsIHVzZU11dGF0aW9uLCB1c2VRdWVyeSB9IGZyb20gXCJsYWtlYmVkL2NsaWVudFwiO1xuaW1wb3J0IHR5cGUgeyBDb21wb25lbnRDaGlsZHJlbiB9IGZyb20gXCJwcmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJwcmVhY3QvaG9va3NcIjtcbmltcG9ydCB7XG4gICAgQkdfTU9ERVMsXG4gICAgQkxFTkRfTU9ERVMsXG4gICAgREVGQVVMVF9HTE9CQUxfRlgsXG4gICAgREVGQVVMVF9MQVlFUl9GWCxcbiAgICBNQVhfTEFZRVJTLFxuICAgIFBPSU5URVJfTU9ERVMsXG4gICAgVElMRV9NT0RFUyxcbiAgICBjbGFtcCxcbiAgICBjbGVhbk5hbWUsXG4gICAgZGVjb2RlU2NlbmUsXG4gICAgZW5jb2RlU2NlbmUsXG4gICAgdHlwZSBCbGVuZE1vZGUsXG4gICAgdHlwZSBHbG9iYWxGeCxcbiAgICB0eXBlIExheWVyRngsXG4gICAgdHlwZSBNZWRpYUtpbmQsXG4gICAgdHlwZSBTY2VuZSxcbiAgICB0eXBlIFNjZW5lTGF5ZXIsXG4gICAgdHlwZSBTY2VuZU1ldGEsXG59IGZyb20gXCIuLi9zaGFyZWQvdHlwZXNcIjtcbmltcG9ydCB7XG4gICAgV09STERfUFJFU0VUUyxcbiAgICBibGVuZEluZGV4LFxuICAgIG11dGF0ZUdsb2JhbEZ4LFxuICAgIHJhbmRvbUdsb2JhbEZ4LFxuICAgIHJhbmRvbUxheWVyRngsXG4gICAgcmVzZXRMYXllckZ4RWZmZWN0cyxcbn0gZnJvbSBcIi4uL3NoYXJlZC9wcmVzZXRzXCI7XG5pbXBvcnQge1xuICAgIGNyZWF0ZUVuZ2luZSxcbiAgICBoZXhUb1JnYixcbiAgICB0eXBlIEVuZ2luZUhhbmRsZSxcbiAgICB0eXBlIEZyYW1lU3RhdGUsXG4gICAgdHlwZSBMYXllclJlbmRlclN0YXRlLFxuICAgIHR5cGUgUG9pbnRlclN0YXRlLFxufSBmcm9tIFwiLi9lbmdpbmVcIjtcbmltcG9ydCB7XG4gICAgY2FudmFzVGh1bWIsXG4gICAgY2xhc3NpZnlCbG9iLFxuICAgIGNsYXNzaWZ5RmlsZSxcbiAgICBkZWZhdWx0TGF5ZXJOYW1lLFxuICAgIGVuc3VyZVNwZWN0cnVtQ2FudmFzLFxuICAgIGxldmVsRnJvbVNwZWN0cnVtLFxuICAgIG1lZGlhS2luZExhYmVsLFxuICAgIHBhaW50QXVkaW9WaXN1YWwsXG4gICAgcGFpbnREYXRhQnl0ZXMsXG59IGZyb20gXCIuL21lZGlhXCI7XG5pbXBvcnQge1xuICAgIGRlY29kZUltYWdlQmxvYixcbiAgICBnZXRJbWFnZUJsb2IsXG4gICAgbG9hZEF1dG9zYXZlLFxuICAgIG5ld0lkLFxuICAgIHB1dEltYWdlQmxvYixcbiAgICBzYXZlQXV0b3NhdmUsXG59IGZyb20gXCIuL3N0b3JlXCI7XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gc3R5bGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmNvbnN0IEdMT0JBTF9DU1MgPSBgXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RE0rTW9ubzp3Z2h0QDMwMDs0MDA7NTAwJmZhbWlseT1TcGFjZStHcm90ZXNrOndnaHRANDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcFwiKTtcblxuOnJvb3Qge1xuICBjb2xvci1zY2hlbWU6IGRhcms7XG4gIC0tdm9pZDogIzA4MDgwYTtcbiAgLS1wYW5lbDogIzEwMTAxNDtcbiAgLS1wYW5lbC0yOiAjMTUxNTFhO1xuICAtLWxpbmU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG4gIC0tbGluZS1ob3Q6IHJnYmEoMjMyLCAyMzAsIDIyNCwgMC4zNSk7XG4gIC0tYWNpZDogI2U4ZTZlMDtcbiAgLS12aW9sZXQ6ICM4YTg2OTA7XG4gIC0taG90OiAjYTg3ODgwO1xuICAtLXBhcGVyOiAjZThlNmUwO1xuICAtLW11dGU6ICM4NTg1OGY7XG4gIC0tdHJhY2s6ICMzMDMwMzg7XG59XG5cbmh0bWwsIGJvZHksICNhcHAgeyBtYXJnaW46IDA7IGhlaWdodDogMTAwJTsgYmFja2dyb3VuZDogdmFyKC0tdm9pZCk7IG92ZXJzY3JvbGwtYmVoYXZpb3I6IG5vbmU7IH1cbmJvZHkgeyBmb250OiAxM3B4LzEuNDUgXCJETSBNb25vXCIsIHVpLW1vbm9zcGFjZSwgbW9ub3NwYWNlOyBjb2xvcjogdmFyKC0tcGFwZXIpOyAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDsgfVxuKiB7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cbmJ1dHRvbiwgaW5wdXQsIHNlbGVjdCB7IGZvbnQ6IGluaGVyaXQ7IH1cbmJ1dHRvbiB7IGN1cnNvcjogcG9pbnRlcjsgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDsgfVxuOjpzZWxlY3Rpb24geyBiYWNrZ3JvdW5kOiB2YXIoLS1hY2lkKTsgY29sb3I6IHZhcigtLXZvaWQpOyB9XG46Oi13ZWJraXQtc2Nyb2xsYmFyIHsgd2lkdGg6IDhweDsgaGVpZ2h0OiA4cHg7IH1cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIgeyBiYWNrZ3JvdW5kOiB2YXIoLS10cmFjayk7IGJvcmRlci1yYWRpdXM6IDA7IH1cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sgeyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfVxuXG4ua25vYi1yYW5nZSB7XG4gIC0tZmlsbDogNTAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxOHB4O1xuICBtYXJnaW46IDA7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogZXctcmVzaXplO1xufVxuLmtub2ItcmFuZ2U6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdmFyKC0tYWNpZCkgMCB2YXIoLS1maWxsKSwgdmFyKC0tdHJhY2spIHZhcigtLWZpbGwpIDEwMCUpO1xufVxuLmtub2ItcmFuZ2U6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICB3aWR0aDogOXB4O1xuICBoZWlnaHQ6IDE3cHg7XG4gIG1hcmdpbi10b3A6IC03cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFjaWQpO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS12b2lkKTtcbn1cbi5rbm9iLXJhbmdlOjotbW96LXJhbmdlLXRyYWNrIHsgaGVpZ2h0OiAzcHg7IGJhY2tncm91bmQ6IHZhcigtLXRyYWNrKTsgfVxuLmtub2ItcmFuZ2U6Oi1tb3otcmFuZ2UtcHJvZ3Jlc3MgeyBoZWlnaHQ6IDNweDsgYmFja2dyb3VuZDogdmFyKC0tYWNpZCk7IH1cbi5rbm9iLXJhbmdlOjotbW96LXJhbmdlLXRodW1iIHtcbiAgd2lkdGg6IDhweDsgaGVpZ2h0OiAxNnB4OyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hY2lkKTsgYm9yZGVyLXJhZGl1czogMDsgYmFja2dyb3VuZDogdmFyKC0tdm9pZCk7XG59XG5cbkBrZXlmcmFtZXMgcmVjLWJsaW5rIHsgMCUsIDQ4JSB7IG9wYWNpdHk6IDE7IH0gNTIlLCAxMDAlIHsgb3BhY2l0eTogMC4yNTsgfSB9XG4ucmVjLWRvdCB7IGFuaW1hdGlvbjogcmVjLWJsaW5rIDEuMXMgc3RlcHMoMiwgZW5kKSBpbmZpbml0ZTsgfVxuQGtleWZyYW1lcyBmYWRlLXVwIHsgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSg2cHgpOyB9IHRvIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9IH1cbi5wb3AgeyBhbmltYXRpb246IGZhZGUtdXAgMTQwbXMgY3ViaWMtYmV6aWVyKC4yLC44LC4yLDEpIGJvdGg7IH1cbmlucHV0W3R5cGU9XCJjb2xvclwiXSB7IHBhZGRpbmc6IDA7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpbmUpOyBib3JkZXItcmFkaXVzOiAwOyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgd2lkdGg6IDI2cHg7IGhlaWdodDogMjBweDsgY3Vyc29yOiBwb2ludGVyOyB9XG5pbnB1dFt0eXBlPVwiY29sb3JcIl06Oi13ZWJraXQtY29sb3Itc3dhdGNoLXdyYXBwZXIgeyBwYWRkaW5nOiAxcHg7IH1cbmlucHV0W3R5cGU9XCJjb2xvclwiXTo6LXdlYmtpdC1jb2xvci1zd2F0Y2ggeyBib3JkZXI6IDA7IGJvcmRlci1yYWRpdXM6IDA7IH1cbnNlbGVjdC5meC1yZXMge1xuICBoZWlnaHQ6IDI2cHg7IGJvcmRlci1yYWRpdXM6IDA7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpbmUpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wYW5lbCk7IGNvbG9yOiB2YXIoLS1tdXRlKTsgcGFkZGluZzogMCA2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkRNIE1vbm9cIiwgdWktbW9ub3NwYWNlLCBtb25vc3BhY2U7IGZvbnQtc2l6ZTogMTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC4wNmVtOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBvdXRsaW5lOiBub25lOyBjdXJzb3I6IHBvaW50ZXI7XG59XG5zZWxlY3QuZngtcmVzOmhvdmVyIHsgYm9yZGVyLWNvbG9yOiB2YXIoLS1saW5lLWhvdCk7IGNvbG9yOiB2YXIoLS1wYXBlcik7IH1cbnNlbGVjdC5meC1yZXM6ZGlzYWJsZWQgeyBvcGFjaXR5OiAuMzU7IGN1cnNvcjogZGVmYXVsdDsgfVxuc2VsZWN0LmZ4LXJlcyBvcHRpb24geyBiYWNrZ3JvdW5kOiB2YXIoLS1wYW5lbCk7IGNvbG9yOiB2YXIoLS1wYXBlcik7IH1cbmA7XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBleHBvcnQgcmVzb2x1dGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbmNvbnN0IEVYUE9SVF9SRVNPTFVUSU9OUyA9IFtcbiAgICB7IGlkOiBcInNjcmVlblwiLCBsYWJlbDogXCJTY3JlZW5cIiwgaGVpZ2h0OiAwIH0sXG4gICAgeyBpZDogXCI3MjBcIiwgbGFiZWw6IFwiNzIwcFwiLCBoZWlnaHQ6IDcyMCB9LFxuICAgIHsgaWQ6IFwiMTA4MFwiLCBsYWJlbDogXCIxMDgwcFwiLCBoZWlnaHQ6IDEwODAgfSxcbiAgICB7IGlkOiBcIjE0NDBcIiwgbGFiZWw6IFwiMTQ0MHBcIiwgaGVpZ2h0OiAxNDQwIH0sXG4gICAgeyBpZDogXCIyMTYwXCIsIGxhYmVsOiBcIjRLXCIsIGhlaWdodDogMjE2MCB9LFxuXSBhcyBjb25zdDtcblxudHlwZSBFeHBvcnRSZXNvbHV0aW9uSWQgPSAodHlwZW9mIEVYUE9SVF9SRVNPTFVUSU9OUylbbnVtYmVyXVtcImlkXCJdO1xuXG5jb25zdCBNQVhfRVhQT1JUX0VER0UgPSA4MTkyO1xuXG5mdW5jdGlvbiByZXNvbHZlRXhwb3J0U2l6ZShcbiAgICByZXNvbHV0aW9uSWQ6IEV4cG9ydFJlc29sdXRpb25JZCxcbiAgICBzdGFnZTogeyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9LFxuICAgIC8qKiBGb3IgXCJzY3JlZW5cIiBQTkcgZXhwb3J0cyBcdTIwMTQgbXVsdGlwbHkgdGhlIGxpdmUgc3RhZ2UgYnkgdGhpcy4gKi9cbiAgICBzY3JlZW5TY2FsZSA9IDEsXG4pOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0ge1xuICAgIGNvbnN0IGFzcGVjdCA9IE1hdGgubWF4KDAuMDUsIHN0YWdlLndpZHRoIC8gTWF0aC5tYXgoMSwgc3RhZ2UuaGVpZ2h0KSk7XG4gICAgbGV0IGhlaWdodDogbnVtYmVyO1xuICAgIGxldCB3aWR0aDogbnVtYmVyO1xuICAgIGlmIChyZXNvbHV0aW9uSWQgPT09IFwic2NyZWVuXCIpIHtcbiAgICAgICAgaGVpZ2h0ID0gTWF0aC5tYXgoMiwgTWF0aC5yb3VuZChzdGFnZS5oZWlnaHQgKiBzY3JlZW5TY2FsZSkpO1xuICAgICAgICB3aWR0aCA9IE1hdGgubWF4KDIsIE1hdGgucm91bmQoc3RhZ2Uud2lkdGggKiBzY3JlZW5TY2FsZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHByZXNldCA9IEVYUE9SVF9SRVNPTFVUSU9OUy5maW5kKFxuICAgICAgICAgICAgKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHJlc29sdXRpb25JZCxcbiAgICAgICAgKTtcbiAgICAgICAgaGVpZ2h0ID0gcHJlc2V0Py5oZWlnaHQgfHwgMTA4MDtcbiAgICAgICAgd2lkdGggPSBNYXRoLm1heCgyLCBNYXRoLnJvdW5kKGhlaWdodCAqIGFzcGVjdCkpO1xuICAgIH1cbiAgICBjb25zdCBsb25nZXN0ID0gTWF0aC5tYXgod2lkdGgsIGhlaWdodCk7XG4gICAgaWYgKGxvbmdlc3QgPiBNQVhfRVhQT1JUX0VER0UpIHtcbiAgICAgICAgY29uc3Qgc2NhbGUgPSBNQVhfRVhQT1JUX0VER0UgLyBsb25nZXN0O1xuICAgICAgICB3aWR0aCA9IE1hdGgubWF4KDIsIE1hdGgucm91bmQod2lkdGggKiBzY2FsZSkpO1xuICAgICAgICBoZWlnaHQgPSBNYXRoLm1heCgyLCBNYXRoLnJvdW5kKGhlaWdodCAqIHNjYWxlKSk7XG4gICAgfVxuICAgIC8vIEtlZXAgZXZlbiBkaW1lbnNpb25zIFx1MjAxNCBmcmllbmRsaWVyIGZvciB2aWRlbyBlbmNvZGVycy5cbiAgICByZXR1cm4geyB3aWR0aDogd2lkdGggLSAod2lkdGggJSAyKSwgaGVpZ2h0OiBoZWlnaHQgLSAoaGVpZ2h0ICUgMikgfTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBpY29ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxudHlwZSBJY29uUHJvcHMgPSB7IGNsYXNzPzogc3RyaW5nIH07XG5jb25zdCBzdmcgPSAocHJvcHM6IEljb25Qcm9wcywgY2hpbGRyZW46IENvbXBvbmVudENoaWxkcmVuKSA9PiAoXG4gICAgPHN2Z1xuICAgICAgICBjbGFzcz17cHJvcHMuY2xhc3MgPz8gXCJ3LVsxNXB4XSBoLVsxNXB4XVwifVxuICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICBzdHJva2Utd2lkdGg9XCIxLjhcIlxuICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgIDwvc3ZnPlxuKTtcbmNvbnN0IElQbHVzID0gKHA6IEljb25Qcm9wcykgPT4gc3ZnKHAsIDxwYXRoIGQ9XCJNMTIgNXYxNE01IDEyaDE0XCIgLz4pO1xuY29uc3QgSURpY2UgPSAocDogSWNvblByb3BzKSA9PlxuICAgIHN2ZyhcbiAgICAgICAgcCxcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxyZWN0IHg9XCI0XCIgeT1cIjRcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiByeD1cIjIuNVwiIC8+XG4gICAgICAgICAgICA8Y2lyY2xlIGN4PVwiOVwiIGN5PVwiOVwiIHI9XCIwLjZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgLz5cbiAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIxNVwiIGN5PVwiMTVcIiByPVwiMC42XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIC8+XG4gICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTVcIiBjeT1cIjlcIiByPVwiMC42XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIC8+XG4gICAgICAgICAgICA8Y2lyY2xlIGN4PVwiOVwiIGN5PVwiMTVcIiByPVwiMC42XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIC8+XG4gICAgICAgIDwvPixcbiAgICApO1xuY29uc3QgSVdhbmQgPSAocDogSWNvblByb3BzKSA9PlxuICAgIHN2ZyhcbiAgICAgICAgcCxcbiAgICAgICAgPHBhdGggZD1cIk01IDE5IDE3IDdtMi0yLTEuNSAxLjVNMTcgN2wxLjUgMS41TTkgNS41IDkuOCA3LjMgMTEuNiA4IDkuOCA4LjcgOSAxMC41IDguMiA4LjcgNi40IDggOC4yIDcuM1ptOSA3IC42IDEuNCAxLjQuNi0xLjQuNi0uNiAxLjQtLjYtMS40LTEuNC0uNiAxLjQtLjZaXCIgLz4sXG4gICAgKTtcbmNvbnN0IElTYXZlID0gKHA6IEljb25Qcm9wcykgPT5cbiAgICBzdmcocCwgPHBhdGggZD1cIk0xMiAzdjEybTAgMCA0LTRtLTQgNC00LTRNNCAxN3YzaDE2di0zXCIgLz4pO1xuY29uc3QgSUZvbGRlciA9IChwOiBJY29uUHJvcHMpID0+XG4gICAgc3ZnKFxuICAgICAgICBwLFxuICAgICAgICA8cGF0aCBkPVwiTTMgNi41QTEuNSAxLjUgMCAwIDEgNC41IDVoNGwyIDIuNWg5QTEuNSAxLjUgMCAwIDEgMjEgOXY5YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtMTVBMS41IDEuNSAwIDAgMSAzIDE4WlwiIC8+LFxuICAgICk7XG5jb25zdCBJTWljID0gKHA6IEljb25Qcm9wcykgPT5cbiAgICBzdmcoXG4gICAgICAgIHAsXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8cmVjdCB4PVwiOVwiIHk9XCIzXCIgd2lkdGg9XCI2XCIgaGVpZ2h0PVwiMTFcIiByeD1cIjNcIiAvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk01LjUgMTEuNWE2LjUgNi41IDAgMCAwIDEzIDBNMTIgMTh2M1wiIC8+XG4gICAgICAgIDwvPixcbiAgICApO1xuY29uc3QgSURvd25sb2FkID0gKHA6IEljb25Qcm9wcykgPT5cbiAgICBzdmcocCwgPHBhdGggZD1cIk0xMiA0djExbTAgMCA0LjUtNC41TTEyIDE1IDcuNSAxMC41TTQgMTloMTZcIiAvPik7XG5jb25zdCBJRXhwYW5kID0gKHA6IEljb25Qcm9wcykgPT5cbiAgICBzdmcocCwgPHBhdGggZD1cIk00IDlWNGg1TTIwIDlWNGgtNU00IDE1djVoNW0xMS01djVoLTVcIiAvPik7XG5jb25zdCBJRXllID0gKHA6IEljb25Qcm9wcykgPT5cbiAgICBzdmcoXG4gICAgICAgIHAsXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTIuNSAxMlM2IDUuNSAxMiA1LjUgMjEuNSAxMiAyMS41IDEyIDE4IDE4LjUgMTIgMTguNSAyLjUgMTIgMi41IDEyWlwiIC8+XG4gICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjIuNlwiIC8+XG4gICAgICAgIDwvPixcbiAgICApO1xuY29uc3QgSUV5ZU9mZiA9IChwOiBJY29uUHJvcHMpID0+XG4gICAgc3ZnKFxuICAgICAgICBwLFxuICAgICAgICA8PlxuICAgICAgICAgICAgPHBhdGggZD1cIk00IDRsMTYgMTZNOS45IDUuOUE5LjUgOS41IDAgMCAxIDEyIDUuNWM2IDAgOS41IDYuNSA5LjUgNi41YTE3IDE3IDAgMCAxLTMuMyA0TTYgNy41QTE2IDE2IDAgMCAwIDIuNSAxMlM2IDE4LjUgMTIgMTguNWE5IDkgMCAwIDAgMy0uNlwiIC8+XG4gICAgICAgIDwvPixcbiAgICApO1xuY29uc3QgSVRyYXNoID0gKHA6IEljb25Qcm9wcykgPT5cbiAgICBzdmcocCwgPHBhdGggZD1cIk00LjUgNi41aDE1bS0xMS0yaDdtLTkuNSAyIDEgMTNoMTBsMS0xM00xMCAxMHY2bTQtNnY2XCIgLz4pO1xuY29uc3QgSUNvcHkgPSAocDogSWNvblByb3BzKSA9PlxuICAgIHN2ZyhcbiAgICAgICAgcCxcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxyZWN0IHg9XCI4XCIgeT1cIjhcIiB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiMTJcIiByeD1cIjEuNVwiIC8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTE2IDVWNS41TTE2IDVhMS41IDEuNSAwIDAgMC0xLjUtMS41aC05QTEuNSAxLjUgMCAwIDAgNCA1djlBMS41IDEuNSAwIDAgMCA1LjUgMTUuNUg2XCIgLz5cbiAgICAgICAgPC8+LFxuICAgICk7XG5jb25zdCBJVXAgPSAocDogSWNvblByb3BzKSA9PiBzdmcocCwgPHBhdGggZD1cIm02IDE0IDYtNiA2IDZcIiAvPik7XG5jb25zdCBJRG93biA9IChwOiBJY29uUHJvcHMpID0+IHN2ZyhwLCA8cGF0aCBkPVwibTYgMTAgNiA2IDYtNlwiIC8+KTtcbmNvbnN0IElQYXVzZSA9IChwOiBJY29uUHJvcHMpID0+IHN2ZyhwLCA8cGF0aCBkPVwiTTkgNXYxNE0xNSA1djE0XCIgLz4pO1xuY29uc3QgSVBsYXkgPSAocDogSWNvblByb3BzKSA9PiBzdmcocCwgPHBhdGggZD1cIk03IDV2MTRsMTItN1pcIiAvPik7XG5jb25zdCBJUGFuZWwgPSAocDogSWNvblByb3BzKSA9PlxuICAgIHN2ZyhcbiAgICAgICAgcCxcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxyZWN0IHg9XCIzXCIgeT1cIjQuNVwiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxNVwiIHJ4PVwiMS41XCIgLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTUuNSA0LjV2MTVcIiAvPlxuICAgICAgICA8Lz4sXG4gICAgKTtcbmNvbnN0IElNb3ZlID0gKHA6IEljb25Qcm9wcykgPT5cbiAgICBzdmcoXG4gICAgICAgIHAsXG4gICAgICAgIDxwYXRoIGQ9XCJNMTIgM3YxOE0zIDEyaDE4TTEyIDMgOS41IDUuNU0xMiAzbDIuNSAyLjVNMTIgMjFsLTIuNS0yLjVNMTIgMjFsMi41LTIuNU0zIDEybDIuNS0yLjVNMyAxMmwyLjUgMi41TTIxIDEybC0yLjUtMi41TTIxIDEybC0yLjUgMi41XCIgLz4sXG4gICAgKTtcbmNvbnN0IElTcGFyayA9IChwOiBJY29uUHJvcHMpID0+XG4gICAgc3ZnKFxuICAgICAgICBwLFxuICAgICAgICA8cGF0aCBkPVwiTTEyIDNsMS44IDUuMkwxOSAxMGwtNS4yIDEuOEwxMiAxN2wtMS44LTUuMkw1IDEwbDUuMi0xLjhabTcgMTEgLjggMi4yTDIyIDE3bC0yLjIuOEwxOSAyMGwtLjgtMi4yTDE2IDE3bDIuMi0uOFpcIiAvPixcbiAgICApO1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gaGVscGVycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5mdW5jdGlvbiBsYXllclNlZWQoaWQ6IHN0cmluZyk6IG51bWJlciB7XG4gICAgbGV0IGhhc2ggPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaWQubGVuZ3RoOyBpKyspXG4gICAgICAgIGhhc2ggPSAoaGFzaCAqIDMxICsgaWQuY2hhckNvZGVBdChpKSkgPj4+IDA7XG4gICAgcmV0dXJuIChoYXNoICUgMTAwMCkgLyAxMDAwO1xufVxuXG5mdW5jdGlvbiBmb3JtYXREZWcodmFsdWU6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke01hdGgucm91bmQodmFsdWUpfVx1MDBCMGA7XG59XG5mdW5jdGlvbiBmb3JtYXRYKHZhbHVlOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHt2YWx1ZS50b0ZpeGVkKDIpfVx1MDBEN2A7XG59XG5mdW5jdGlvbiBwYWQzKHZhbHVlOiBudW1iZXIsIG1pbiA9IDAsIG1heCA9IDEpOiBzdHJpbmcge1xuICAgIHJldHVybiBTdHJpbmcoTWF0aC5yb3VuZCgoKHZhbHVlIC0gbWluKSAvIChtYXggLSBtaW4pKSAqIDEwMCkpLnBhZFN0YXJ0KFxuICAgICAgICAzLFxuICAgICAgICBcIjBcIixcbiAgICApO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcGxheSBtb2RlIG1hcHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyoqIFRyYW5zaWVudCBwZXItaGl0IGJvb3N0cyBsYXllcmVkIG9udG8gdGhlIHdvcmxkIEZYOyBkZWNheXMgZXZlcnkgZnJhbWUuICovXG50eXBlIEtpY2tTdGF0ZSA9IHtcbiAgICB6b29tOiBudW1iZXI7XG4gICAgc3Ryb2JlOiBudW1iZXI7XG4gICAgY2hyb21hOiBudW1iZXI7XG4gICAgcmlwcGxlOiBudW1iZXI7XG4gICAgc3dpcmw6IG51bWJlcjtcbn07XG5cbmNvbnN0IFBMQVlfRlhfS0VZUzoge1xuICAgIGNvZGU6IHN0cmluZztcbiAgICBjYXA6IHN0cmluZztcbiAgICBwYXJhbToga2V5b2YgR2xvYmFsRng7XG4gICAgbGFiZWw6IHN0cmluZztcbn1bXSA9IFtcbiAgICB7IGNvZGU6IFwiS2V5UVwiLCBjYXA6IFwiUVwiLCBwYXJhbTogXCJ3YXJwXCIsIGxhYmVsOiBcIndhcnBcIiB9LFxuICAgIHsgY29kZTogXCJLZXlXXCIsIGNhcDogXCJXXCIsIHBhcmFtOiBcInN3aXJsXCIsIGxhYmVsOiBcInN3aXJsXCIgfSxcbiAgICB7IGNvZGU6IFwiS2V5RVwiLCBjYXA6IFwiRVwiLCBwYXJhbTogXCJyaXBwbGVcIiwgbGFiZWw6IFwicmlwcGxlXCIgfSxcbiAgICB7IGNvZGU6IFwiS2V5UlwiLCBjYXA6IFwiUlwiLCBwYXJhbTogXCJ6b29tXCIsIGxhYmVsOiBcInR1bm5lbFwiIH0sXG4gICAgeyBjb2RlOiBcIktleVRcIiwgY2FwOiBcIlRcIiwgcGFyYW06IFwia2FsZWlkb1wiLCBsYWJlbDogXCJrYWxlaWRvXCIgfSxcbiAgICB7IGNvZGU6IFwiS2V5WVwiLCBjYXA6IFwiWVwiLCBwYXJhbTogXCJtaXJyb3JcIiwgbGFiZWw6IFwibWlycm9yXCIgfSxcbiAgICB7IGNvZGU6IFwiS2V5VVwiLCBjYXA6IFwiVVwiLCBwYXJhbTogXCJjaHJvbWFcIiwgbGFiZWw6IFwicHJpc21cIiB9LFxuICAgIHsgY29kZTogXCJLZXlJXCIsIGNhcDogXCJJXCIsIHBhcmFtOiBcImZlZWRiYWNrXCIsIGxhYmVsOiBcImVjaG9cIiB9LFxuICAgIHsgY29kZTogXCJLZXlPXCIsIGNhcDogXCJPXCIsIHBhcmFtOiBcInRyYWlsc1wiLCBsYWJlbDogXCJ0cmFpbHNcIiB9LFxuICAgIHsgY29kZTogXCJLZXlQXCIsIGNhcDogXCJQXCIsIHBhcmFtOiBcInN0cm9iZVwiLCBsYWJlbDogXCJzdHJvYmVcIiB9LFxuXTtcblxuY29uc3QgUExBWV9QSUFOTzogeyBjb2RlOiBzdHJpbmc7IGNhcDogc3RyaW5nIH1bXSA9IFtcbiAgICB7IGNvZGU6IFwiS2V5QVwiLCBjYXA6IFwiQVwiIH0sXG4gICAgeyBjb2RlOiBcIktleVNcIiwgY2FwOiBcIlNcIiB9LFxuICAgIHsgY29kZTogXCJLZXlEXCIsIGNhcDogXCJEXCIgfSxcbiAgICB7IGNvZGU6IFwiS2V5RlwiLCBjYXA6IFwiRlwiIH0sXG4gICAgeyBjb2RlOiBcIktleUdcIiwgY2FwOiBcIkdcIiB9LFxuICAgIHsgY29kZTogXCJLZXlIXCIsIGNhcDogXCJIXCIgfSxcbiAgICB7IGNvZGU6IFwiS2V5SlwiLCBjYXA6IFwiSlwiIH0sXG4gICAgeyBjb2RlOiBcIktleUtcIiwgY2FwOiBcIktcIiB9LFxuICAgIHsgY29kZTogXCJLZXlMXCIsIGNhcDogXCJMXCIgfSxcbiAgICB7IGNvZGU6IFwiU2VtaWNvbG9uXCIsIGNhcDogXCI7XCIgfSxcbiAgICB7IGNvZGU6IFwiUXVvdGVcIiwgY2FwOiBcIidcIiB9LFxuXTtcblxuY29uc3QgUExBWV9MQVlFUl9LRVlTOiB7IGNvZGU6IHN0cmluZzsgY2FwOiBzdHJpbmcgfVtdID0gW1xuICAgIHsgY29kZTogXCJLZXlaXCIsIGNhcDogXCJaXCIgfSxcbiAgICB7IGNvZGU6IFwiS2V5WFwiLCBjYXA6IFwiWFwiIH0sXG4gICAgeyBjb2RlOiBcIktleUNcIiwgY2FwOiBcIkNcIiB9LFxuICAgIHsgY29kZTogXCJLZXlWXCIsIGNhcDogXCJWXCIgfSxcbiAgICB7IGNvZGU6IFwiS2V5QlwiLCBjYXA6IFwiQlwiIH0sXG4gICAgeyBjb2RlOiBcIktleU5cIiwgY2FwOiBcIk5cIiB9LFxuICAgIHsgY29kZTogXCJLZXlNXCIsIGNhcDogXCJNXCIgfSxcbiAgICB7IGNvZGU6IFwiQ29tbWFcIiwgY2FwOiBcIixcIiB9LFxuICAgIHsgY29kZTogXCJQZXJpb2RcIiwgY2FwOiBcIi5cIiB9LFxuICAgIHsgY29kZTogXCJTbGFzaFwiLCBjYXA6IFwiL1wiIH0sXG5dO1xuXG4vKiogQmFja3F1b3RlICsgZGlnaXQgcm93LCBpbmRleC1hbGlnbmVkIHdpdGggV09STERfUFJFU0VUUy4gKi9cbmNvbnN0IFBMQVlfUFJFU0VUX0NPREVTID0gW1xuICAgIFwiQmFja3F1b3RlXCIsXG4gICAgXCJEaWdpdDFcIixcbiAgICBcIkRpZ2l0MlwiLFxuICAgIFwiRGlnaXQzXCIsXG4gICAgXCJEaWdpdDRcIixcbiAgICBcIkRpZ2l0NVwiLFxuICAgIFwiRGlnaXQ2XCIsXG4gICAgXCJEaWdpdDdcIixcbiAgICBcIkRpZ2l0OFwiLFxuICAgIFwiRGlnaXQ5XCIsXG4gICAgXCJEaWdpdDBcIixcbl07XG5cbmZ1bmN0aW9uIGhzbFRvSGV4KGh1ZURlZzogbnVtYmVyLCBzYXR1cmF0aW9uOiBudW1iZXIsIGxpZ2h0bmVzczogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBjb25zdCBhID0gc2F0dXJhdGlvbiAqIE1hdGgubWluKGxpZ2h0bmVzcywgMSAtIGxpZ2h0bmVzcyk7XG4gICAgY29uc3QgY2hhbm5lbCA9IChuOiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgayA9IChuICsgaHVlRGVnIC8gMzApICUgMTI7XG4gICAgICAgIGNvbnN0IGMgPSBsaWdodG5lc3MgLSBhICogTWF0aC5tYXgoLTEsIE1hdGgubWluKGsgLSAzLCA5IC0gaywgMSkpO1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChjICogMjU1KVxuICAgICAgICAgICAgLnRvU3RyaW5nKDE2KVxuICAgICAgICAgICAgLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICB9O1xuICAgIHJldHVybiBgIyR7Y2hhbm5lbCgwKX0ke2NoYW5uZWwoOCl9JHtjaGFubmVsKDQpfWA7XG59XG5cbnR5cGUgSW1hZ2VJbmZvID0ge1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgdGh1bWI6IHN0cmluZztcbiAgICBtaXNzaW5nOiBib29sZWFuO1xuICAgIGtpbmQ6IE1lZGlhS2luZDtcbn07XG5cbnR5cGUgTWVkaWFSdW50aW1lID0ge1xuICAgIGtpbmQ6IE1lZGlhS2luZDtcbiAgICBvYmplY3RVcmw/OiBzdHJpbmc7XG4gICAgdmlkZW8/OiBIVE1MVmlkZW9FbGVtZW50O1xuICAgIGF1ZGlvPzogSFRNTEF1ZGlvRWxlbWVudDtcbiAgICBjYW52YXM/OiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBhbmFseXNlcj86IEFuYWx5c2VyTm9kZTtcbiAgICBzb3VyY2VOb2RlPzogTWVkaWFFbGVtZW50QXVkaW9Tb3VyY2VOb2RlO1xuICAgIHNwZWN0cnVtPzogVWludDhBcnJheTtcbn07XG5cbmZ1bmN0aW9uIGVtcHR5U2NlbmUoKTogU2NlbmUge1xuICAgIHJldHVybiB7IG5hbWU6IFwiVW50aXRsZWRcIiwgbGF5ZXJzOiBbXSwgZ2xvYmFsOiB7IC4uLkRFRkFVTFRfR0xPQkFMX0ZYIH0gfTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHNtYWxsIGNvbnRyb2xzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuZnVuY3Rpb24gU2xpZGVyKHByb3BzOiB7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICB2YWx1ZTogbnVtYmVyO1xuICAgIG1pbj86IG51bWJlcjtcbiAgICBtYXg/OiBudW1iZXI7XG4gICAgZGVmPzogbnVtYmVyO1xuICAgIGZvcm1hdD86ICh2YWx1ZTogbnVtYmVyKSA9PiBzdHJpbmc7XG4gICAgb25DaGFuZ2U6ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkO1xufSkge1xuICAgIGNvbnN0IG1pbiA9IHByb3BzLm1pbiA/PyAwO1xuICAgIGNvbnN0IG1heCA9IHByb3BzLm1heCA/PyAxO1xuICAgIGNvbnN0IHBjdCA9IGNsYW1wKCgocHJvcHMudmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbikpICogMTAwLCAwLCAxMDApO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgY2xhc3M9XCJibG9jayBweC0zIHB5LVs1cHhdIHNlbGVjdC1ub25lXCJcbiAgICAgICAgICAgIG9uRGJsQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgcHJvcHMuZGVmICE9PSB1bmRlZmluZWQgJiYgcHJvcHMub25DaGFuZ2UocHJvcHMuZGVmKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGl0bGU9XCJEb3VibGUtY2xpY2sgdG8gcmVzZXRcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItMC41IGZsZXggaXRlbXMtYmFzZWxpbmUganVzdGlmeS1iZXR3ZWVuIHRleHQtWzlweF0gdXBwZXJjYXNlIHRyYWNraW5nLVswLjE0ZW1dIHRleHQtW3ZhcigtLW11dGUpXVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPntwcm9wcy5sYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YWJ1bGFyLW51bXMgdGV4dC1bdmFyKC0tcGFwZXIpXVwiPlxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZm9ybWF0XG4gICAgICAgICAgICAgICAgICAgICAgICA/IHByb3BzLmZvcm1hdChwcm9wcy52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogcGFkMyhwcm9wcy52YWx1ZSwgbWluLCBtYXgpfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImtub2ItcmFuZ2VcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IFwiLS1maWxsXCI6IGAke3BjdH0lYCB9fVxuICAgICAgICAgICAgICAgIG1pbj17bWlufVxuICAgICAgICAgICAgICAgIG1heD17bWF4fVxuICAgICAgICAgICAgICAgIHN0ZXA9ezAuMDAxfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZX1cbiAgICAgICAgICAgICAgICBvbklucHV0PXsoZXZlbnQpID0+XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLm9uQ2hhbmdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICk7XG59XG5cbmZ1bmN0aW9uIFNlY3Rpb24ocHJvcHM6IHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGFjY2VudD86IGJvb2xlYW47XG4gICAgYWN0aW9ucz86IENvbXBvbmVudENoaWxkcmVuO1xuICAgIGNoaWxkcmVuOiBDb21wb25lbnRDaGlsZHJlbjtcbn0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImJvcmRlci1iIGJvcmRlci1bdmFyKC0tbGluZSldIHBiLTJcIj5cbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3M9XCJmbGV4IGgtOCBpdGVtcy1jZW50ZXIgZ2FwLTIgcHgtM1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPXtgdGV4dC1bOXB4XSBmb250LW1lZGl1bSB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMTRlbV0gJHtwcm9wcy5hY2NlbnQgPyBcInRleHQtW3ZhcigtLWFjaWQpXVwiIDogXCJ0ZXh0LVt2YXIoLS1tdXRlKV1cIn1gfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImgtcHggZmxleC0xIGJnLVt2YXIoLS1saW5lKV1cIiAvPlxuICAgICAgICAgICAgICAgIHtwcm9wcy5hY3Rpb25zfVxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBTZWdSb3cocHJvcHM6IHtcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIG9wdGlvbnM6IHJlYWRvbmx5IHN0cmluZ1tdO1xuICAgIHZhbHVlOiBudW1iZXI7XG4gICAgb25DaGFuZ2U6IChpbmRleDogbnVtYmVyKSA9PiB2b2lkO1xufSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3M9XCJweC0zIHB5LVs1cHhdXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItMSB0ZXh0LVs5cHhdIHVwcGVyY2FzZSB0cmFja2luZy1bMC4xNGVtXSB0ZXh0LVt2YXIoLS1tdXRlKV1cIj5cbiAgICAgICAgICAgICAgICB7cHJvcHMubGFiZWx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAge3Byb3BzLm9wdGlvbnMubWFwKChvcHRpb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17b3B0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vbkNoYW5nZShpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz17YGgtNiBmbGV4LTEgYm9yZGVyIGJvcmRlci1yLTAgYm9yZGVyLVt2YXIoLS1saW5lKV0gdGV4dC1bOXB4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSBsYXN0OmJvcmRlci1yICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5yb3VuZChwcm9wcy52YWx1ZSkgPT09IGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJiZy1bdmFyKC0tYWNpZCldIHRleHQtW3ZhcigtLXZvaWQpXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJiZy1bdmFyKC0tcGFuZWwpXSB0ZXh0LVt2YXIoLS1tdXRlKV0gaG92ZXI6dGV4dC1bdmFyKC0tcGFwZXIpXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gVG9wQnV0dG9uKHByb3BzOiB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBhY3RpdmU/OiBib29sZWFuO1xuICAgIGRhbmdlcj86IGJvb2xlYW47XG4gICAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICAgIG9uQ2xpY2s6ICgpID0+IHZvaWQ7XG4gICAgY2hpbGRyZW46IENvbXBvbmVudENoaWxkcmVuO1xuICAgIGxhYmVsPzogc3RyaW5nO1xufSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgdGl0bGU9e3Byb3BzLnRpdGxlfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e3Byb3BzLmRpc2FibGVkfVxuICAgICAgICAgICAgb25DbGljaz17cHJvcHMub25DbGlja31cbiAgICAgICAgICAgIGNsYXNzPXtgZmxleCBoLVsyNnB4XSBpdGVtcy1jZW50ZXIgZ2FwLTEuNSBib3JkZXIgcHgtMiB0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0cmFuc2l0aW9uLWNvbG9ycyBkaXNhYmxlZDpvcGFjaXR5LTMwICR7XG4gICAgICAgICAgICAgICAgcHJvcHMuYWN0aXZlXG4gICAgICAgICAgICAgICAgICAgID8gXCJib3JkZXItW3ZhcigtLWFjaWQpXSBiZy1bdmFyKC0tYWNpZCldLzE1IHRleHQtW3ZhcigtLWFjaWQpXVwiXG4gICAgICAgICAgICAgICAgICAgIDogcHJvcHMuZGFuZ2VyXG4gICAgICAgICAgICAgICAgICAgICAgPyBcImJvcmRlci1bI2M0NWI2YV0gYmctWyNjNDViNmFdLzEwIHRleHQtWyNiODZhNzRdXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiYm9yZGVyLVt2YXIoLS1saW5lKV0gYmctW3ZhcigtLXBhbmVsKV0gdGV4dC1bdmFyKC0tbXV0ZSldIGhvdmVyOmJvcmRlci1bdmFyKC0tbGluZS1ob3QpXSBob3Zlcjp0ZXh0LVt2YXIoLS1wYXBlcildXCJcbiAgICAgICAgICAgIH1gfVxuICAgICAgICA+XG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICB7cHJvcHMubGFiZWwgPyAoXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoaWRkZW4gbGc6aW5saW5lXCI+e3Byb3BzLmxhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICApO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBoZWxwIG1vZGFsIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxudHlwZSBIZWxwS2V5R3JvdXAgPSBcInByZXNldFwiIHwgXCJmeFwiIHwgXCJub3RlXCIgfCBcImxheWVyXCIgfCBcInN5c1wiIHwgXCJub25lXCI7XG5cbnR5cGUgSGVscEtleURlZiA9IHtcbiAgICBjYXA6IHN0cmluZztcbiAgICBsYWJlbD86IHN0cmluZztcbiAgICB1PzogbnVtYmVyO1xuICAgIGdyb3VwOiBIZWxwS2V5R3JvdXA7XG4gICAgaHVlPzogbnVtYmVyO1xufTtcblxuZnVuY3Rpb24gSGVscEtleUNhcChwcm9wczogSGVscEtleURlZiAmIHsga2V5Pzogc3RyaW5nIHwgbnVtYmVyIH0pIHtcbiAgICBsZXQgYm9yZGVyID0gXCJ2YXIoLS1saW5lKVwiO1xuICAgIGxldCBjYXBDb2xvciA9IFwidmFyKC0tcGFwZXIpXCI7XG4gICAgbGV0IGxhYmVsQ29sb3IgPSBcInZhcigtLW11dGUpXCI7XG4gICAgbGV0IGJhY2tncm91bmQgPSBcInZhcigtLXBhbmVsKVwiO1xuICAgIGlmIChwcm9wcy5ncm91cCA9PT0gXCJwcmVzZXRcIikge1xuICAgICAgICBib3JkZXIgPSBcInJnYmEoMjMyLDIzMCwyMjQsMC40KVwiO1xuICAgICAgICBsYWJlbENvbG9yID0gXCJ2YXIoLS1hY2lkKVwiO1xuICAgICAgICBiYWNrZ3JvdW5kID0gXCJyZ2JhKDIzMiwyMzAsMjI0LDAuMDUpXCI7XG4gICAgfSBlbHNlIGlmIChwcm9wcy5ncm91cCA9PT0gXCJmeFwiKSB7XG4gICAgICAgIGJvcmRlciA9IFwicmdiYSgxNjgsMTIwLDEyOCwwLjU1KVwiO1xuICAgICAgICBsYWJlbENvbG9yID0gXCIjY2Y5YWE2XCI7XG4gICAgICAgIGJhY2tncm91bmQgPSBcInJnYmEoMTY4LDEyMCwxMjgsMC4wOSlcIjtcbiAgICB9IGVsc2UgaWYgKHByb3BzLmdyb3VwID09PSBcIm5vdGVcIikge1xuICAgICAgICBjb25zdCBodWUgPSBwcm9wcy5odWUgPz8gMDtcbiAgICAgICAgYm9yZGVyID0gYGhzbGEoJHtodWV9LCA3MCUsIDYwJSwgMC43NSlgO1xuICAgICAgICBsYWJlbENvbG9yID0gYGhzbCgke2h1ZX0sIDc1JSwgNjglKWA7XG4gICAgICAgIGNhcENvbG9yID0gYGhzbCgke2h1ZX0sIDYwJSwgODQlKWA7XG4gICAgICAgIGJhY2tncm91bmQgPSBgaHNsYSgke2h1ZX0sIDcwJSwgNTAlLCAwLjEzKWA7XG4gICAgfSBlbHNlIGlmIChwcm9wcy5ncm91cCA9PT0gXCJsYXllclwiKSB7XG4gICAgICAgIGJvcmRlciA9IFwicmdiYSgxMjUsMTY1LDEzMSwwLjU1KVwiO1xuICAgICAgICBsYWJlbENvbG9yID0gXCIjOWNjNGEyXCI7XG4gICAgICAgIGJhY2tncm91bmQgPSBcInJnYmEoMTI1LDE2NSwxMzEsMC4wOSlcIjtcbiAgICB9IGVsc2UgaWYgKHByb3BzLmdyb3VwID09PSBcIm5vbmVcIikge1xuICAgICAgICBjYXBDb2xvciA9IFwidmFyKC0tdHJhY2spXCI7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwiZmxleCBoLVs0NnB4XSBmbGV4LXNocmluay0wIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMSBib3JkZXIgcHgtMC41IHRleHQtY2VudGVyXCJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGAkeyhwcm9wcy51ID8/IDEpICogNDZ9cHhgLFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBib3JkZXIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZCxcbiAgICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJmb250LW1vbm8gdGV4dC1bMTFweF0gbGVhZGluZy1ub25lXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogY2FwQ29sb3IgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7cHJvcHMuY2FwfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAge3Byb3BzLmxhYmVsID8gKFxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1bNi41cHhdIHVwcGVyY2FzZSBsZWFkaW5nLW5vbmUgdHJhY2tpbmctWzAuMDhlbV1cIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogbGFiZWxDb2xvciB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5mdW5jdGlvbiBIZWxwTGlzdChwcm9wczogeyB0aXRsZTogc3RyaW5nOyBpdGVtczogW3N0cmluZywgc3RyaW5nXVtdIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgzIGNsYXNzPVwibWItMiB0ZXh0LVs5cHhdIGZvbnQtbWVkaXVtIHVwcGVyY2FzZSB0cmFja2luZy1bMC4xNmVtXSB0ZXh0LVt2YXIoLS1hY2lkKV1cIj5cbiAgICAgICAgICAgICAgICB7cHJvcHMudGl0bGV9XG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwic3BhY2UteS0xLjVcIj5cbiAgICAgICAgICAgICAgICB7cHJvcHMuaXRlbXMubWFwKChbdGVybSwgYm9keV0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Rlcm19XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvbnQtbW9ubyB0ZXh0LVs5LjVweF0gbGVhZGluZy1yZWxheGVkIHRleHQtW3ZhcigtLW11dGUpXVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1bdmFyKC0tcGFwZXIpXVwiPnt0ZXJtfTwvc3Bhbj4gXHUyMDE0IHtib2R5fVxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gSGVscE1vZGFsKHByb3BzOiB7IG9uQ2xvc2U6ICgpID0+IHZvaWQgfSkge1xuICAgIGNvbnN0IG5vdGVIdWUgPSAoaW5kZXg6IG51bWJlcikgPT5cbiAgICAgICAgTWF0aC5yb3VuZCgoaW5kZXggLyBQTEFZX1BJQU5PLmxlbmd0aCkgKiAzNjApO1xuICAgIGNvbnN0IHJvd3M6IHsgb2Zmc2V0OiBudW1iZXI7IGtleXM6IEhlbHBLZXlEZWZbXSB9W10gPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgICAgIGtleXM6IFtcbiAgICAgICAgICAgICAgICB7IGNhcDogXCJgXCIsIGxhYmVsOiBcIjAwXCIsIGdyb3VwOiBcInByZXNldFwiIH0sXG4gICAgICAgICAgICAgICAgLi4uV09STERfUFJFU0VUUy5zbGljZSgxKS5tYXAoKHByZXNldCwgaW5kZXgpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgIGNhcDogU3RyaW5nKChpbmRleCArIDEpICUgMTApLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogcHJlc2V0LmNvZGUsXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwOiBcInByZXNldFwiIGFzIGNvbnN0LFxuICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgICAgICB7IGNhcDogXCItXCIsIGdyb3VwOiBcIm5vbmVcIiB9LFxuICAgICAgICAgICAgICAgIHsgY2FwOiBcIj1cIiwgZ3JvdXA6IFwibm9uZVwiIH0sXG4gICAgICAgICAgICAgICAgeyBjYXA6IFwiXHUyMzJCXCIsIHU6IDEuNiwgbGFiZWw6IFwid2FzaFwiLCBncm91cDogXCJzeXNcIiB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICAgICAga2V5czogW1xuICAgICAgICAgICAgICAgIHsgY2FwOiBcIlx1MjFFNVwiLCB1OiAxLjQsIGxhYmVsOiBcImhpZGUgdWlcIiwgZ3JvdXA6IFwic3lzXCIgfSxcbiAgICAgICAgICAgICAgICAuLi5QTEFZX0ZYX0tFWVMubWFwKChrZXkpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgIGNhcDoga2V5LmNhcCxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGtleS5sYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXA6IFwiZnhcIiBhcyBjb25zdCxcbiAgICAgICAgICAgICAgICB9KSksXG4gICAgICAgICAgICAgICAgeyBjYXA6IFwiW1wiLCBsYWJlbDogXCJzbG93ZXJcIiwgZ3JvdXA6IFwiZnhcIiB9LFxuICAgICAgICAgICAgICAgIHsgY2FwOiBcIl1cIiwgbGFiZWw6IFwiZmFzdGVyXCIsIGdyb3VwOiBcImZ4XCIgfSxcbiAgICAgICAgICAgICAgICB7IGNhcDogXCJcXFxcXCIsIHU6IDEuMiwgbGFiZWw6IFwic29sYXJcIiwgZ3JvdXA6IFwiZnhcIiB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgb2Zmc2V0OiAxNixcbiAgICAgICAgICAgIGtleXM6IFtcbiAgICAgICAgICAgICAgICB7IGNhcDogXCJcdTIxRUFcIiwgdTogMS43LCBncm91cDogXCJub25lXCIgfSxcbiAgICAgICAgICAgICAgICAuLi5QTEFZX1BJQU5PLm1hcCgoa2V5LCBpbmRleCkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgY2FwOiBrZXkuY2FwLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJcdTI2NkFcIixcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXA6IFwibm90ZVwiIGFzIGNvbnN0LFxuICAgICAgICAgICAgICAgICAgICBodWU6IG5vdGVIdWUoaW5kZXgpLFxuICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgICAgICB7IGNhcDogXCJcdTIzQ0VcIiwgdTogMi4wLCBncm91cDogXCJub25lXCIgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG9mZnNldDogMzAsXG4gICAgICAgICAgICBrZXlzOiBbXG4gICAgICAgICAgICAgICAgeyBjYXA6IFwiXHUyMUU3XCIsIHU6IDIuMiwgbGFiZWw6IFwiaW52ZXJ0XCIsIGdyb3VwOiBcInN5c1wiIH0sXG4gICAgICAgICAgICAgICAgLi4uUExBWV9MQVlFUl9LRVlTLm1hcCgoa2V5LCBpbmRleCkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgY2FwOiBrZXkuY2FwLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogYGx5ciAke2luZGV4ICsgMX1gLFxuICAgICAgICAgICAgICAgICAgICBncm91cDogXCJsYXllclwiIGFzIGNvbnN0LFxuICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgICAgICB7IGNhcDogXCJcdTIxRTcgL1wiLCB1OiAxLjUsIGxhYmVsOiBcIm1hbnVhbFwiLCBncm91cDogXCJzeXNcIiB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgb2Zmc2V0OiAxNzAsXG4gICAgICAgICAgICBrZXlzOiBbeyBjYXA6IFwic3BhY2VcIiwgdTogNywgbGFiZWw6IFwiZnJlZXplIHRpbWVcIiwgZ3JvdXA6IFwic3lzXCIgfV0sXG4gICAgICAgIH0sXG4gICAgXTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzcz1cImZpeGVkIGluc2V0LTAgei1bNzBdIGdyaWQgcGxhY2UtaXRlbXMtY2VudGVyIGJnLWJsYWNrLzc1IHAtNFwiXG4gICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5vbkNsb3NlfVxuICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJwb3AgbWF4LWgtWzg4dmhdIHctZnVsbCBtYXgtdy1bODQwcHhdIG92ZXJmbG93LXktYXV0byBib3JkZXIgYm9yZGVyLVt2YXIoLS1saW5lKV0gYmctW3ZhcigtLXBhbmVsLTIpXSBzaGFkb3ctMnhsXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBib3JkZXItYiBib3JkZXItW3ZhcigtLWxpbmUpXSBweC00IHB5LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LVsxMXB4XSBmb250LW1lZGl1bSB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMThlbV0gdGV4dC1bdmFyKC0tYWNpZCldXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBQbGF5IG1vZGUgXHUwMEI3IGluc3RydW1lbnQgbWFudWFsXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmbGV4LTFcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhpZGRlbiBmb250LW1vbm8gdGV4dC1bOXB4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LVt2YXIoLS1tdXRlKV0gc206aW5saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVyeSBtb3ZlIGlzIHBlcm1hbmVudCBcdTIwMTQgYW5kIHVuZG9hYmxlXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1sLTIgYm9yZGVyIGJvcmRlci1bdmFyKC0tbGluZSldIHB4LTIgcHktMC41IGZvbnQtbW9ubyB0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgdGV4dC1bdmFyKC0tbXV0ZSldIGhvdmVyOmJvcmRlci1bdmFyKC0tbGluZS1ob3QpXSBob3Zlcjp0ZXh0LVt2YXIoLS1wYXBlcildXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xvc2V9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIGVzY1xuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3ZlcmZsb3cteC1hdXRvIHAtNFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBtaW4tdy1bNzQwcHhdIGZsZXgtY29sIGdhcC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cm93cy5tYXAoKHJvdywgcm93SW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cm93SW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmxleCBnYXAtMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IGAke3Jvdy5vZmZzZXR9cHhgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cm93LmtleXMubWFwKChrZXksIGtleUluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVscEtleUNhcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17a2V5SW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwPXtrZXkuY2FwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtrZXkubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdT17a2V5LnV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXA9e2tleS5ncm91cH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodWU9e2tleS5odWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZCBnYXAtNSBib3JkZXItdCBib3JkZXItW3ZhcigtLWxpbmUpXSBwLTQgc206Z3JpZC1jb2xzLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPEhlbHBMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk1vdXNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRhcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0YW1wIHRoZSBjdXJzb3IgZmllbGQgKHZvcnRleCAvIGdyYXZpdHkgLyBwcmlzbSAvIG1lbHQpIGludG8gdGhlIHdvcmxkIGZvciBnb29kIFx1MjAxNCB0aGUgZmFydGhlciBmcm9tIGNlbnRlciwgdGhlIGhhcmRlciB0aGUgaGl0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGFwIGEgbGF5ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aGUgc3RhbXAgbGFuZHMgb24gdGhhdCBsYXllciBpbnN0ZWFkIG9mIHRoZSB3b3JsZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1wic2hpZnQtdGFwXCIsIFwiY2FydmUgXHUyMDE0IHN1YnRyYWN0cyBpbnN0ZWFkIG9mIGFkZHNcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1wiZG91YmxlLXRhcFwiLCBcInN0ZXAgdGhlIGthbGVpZG9zY29wZVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZHJhZyArIHJlbGVhc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aHJvdyB0aGUgZWNobzogZmVlZGJhY2sgdHJhaWxzIGluaGVyaXQgdGhlIGRpcmVjdGlvbiBvZiB5b3VyIHRocm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmlnaHQtY2xpY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzb290aGUgXHUyMDE0IGNhbG1zIHRoZSB3b3JsZCAob3IganVzdCB0aGUgbGF5ZXIgdW5kZXIgdGhlIGN1cnNvcilcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcIndoZWVsXCIsIFwiaHVlIG9yYml0IFx1MDBCNyBzaGlmdCt3aGVlbCA9IHNhdHVyYXRpb25cIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8SGVscExpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiS2V5Ym9hcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJudW1iZXIgcm93XCIsIFwid29ybGQgcHJlc2V0cyAwMFx1MjAxMzEwXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJxd2VydHkgcm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHVtcCBhbiBlZmZlY3QgdXAgXHUwMEI3IHNoaWZ0IGRyYWlucyBpdCBcdTAwQjcgaG9sZCB0byByYW1wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaG9tZSByb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aGUgaHVlIHBpYW5vIFx1MjAxNCBlYWNoIGtleSByZXR1bmVzIGV2ZXJ5IGxheWVyIHRvIGEgY29sb3Igbm90ZSBcdTAwQjcgc2hpZnQgcGFpbnRzIHRoZSBiYWNrZ3JvdW5kIGluc3RlYWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3R0b20gcm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RyaWtlIGxheWVycyAxXHUyMDEzMTA6IHJlLXJvbGxzIHRoYXQgbGF5ZXIncyBGWCBcdTAwQjcgc2hpZnQgcmVzZXRzIGl0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJbIF1cIiwgXCJ0aW1lIHNsb3dlciAvIGZhc3RlciBcdTAwQjcgXFxcXCBzb2xhcml6ZVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJhcnJvd3NcIiwgXCJcdTIxOTAgXHUyMTkyIGh1ZSBvcmJpdCBcdTAwQjcgXHUyMTkxIFx1MjE5MyBzYXR1cmF0aW9uXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcImJhY2tzcGFjZVwiLCBcIndhc2ggdGhlIHdvcmxkIGJhY2sgdG8gY2xlYW4gc2lnbmFsXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEhlbHBMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkdsb2JhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcImVzY1wiLCBcImJhY2sgdG8gYXJyYW5nZSBtb2RlXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcInNwYWNlXCIsIFwiZnJlZXplIHRpbWVcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1widGFiXCIsIFwiaGlkZSB0aGUgaW50ZXJmYWNlXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcIlx1MjMxOFogLyBcdTIxRTdcdTIzMThaXCIsIFwidW5kbyAvIHJlZG8gYW55IG1vdmVcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZpZWxkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hvb3NlIHZvcnRleCAvIGdyYXZpdHkgLyBwcmlzbSAvIG1lbHQgdW5kZXIgQ3Vyc29yIHNldHRpbmdzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gYXBwIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgICBjb25zdCBhdXRoID0gdXNlQXV0aCgpO1xuICAgIGNvbnN0IHNjZW5lc1F1ZXJ5ID0gdXNlUXVlcnk8eyByZWFkeTogYm9vbGVhbjsgaXRlbXM6IFNjZW5lTWV0YVtdIH0+KFxuICAgICAgICBcInNjZW5lc1wiLFxuICAgICk7XG4gICAgY29uc3Qgc2F2ZVNjZW5lTXV0YXRpb24gPSB1c2VNdXRhdGlvbjxcbiAgICAgICAgW3N0cmluZywgc3RyaW5nLCBzdHJpbmcsIHN0cmluZ10sXG4gICAgICAgIHsgaWQ6IHN0cmluZyB9XG4gICAgPihcInNhdmVTY2VuZVwiKTtcbiAgICBjb25zdCBkZWxldGVTY2VuZU11dGF0aW9uID0gdXNlTXV0YXRpb248W3N0cmluZ10sIHZvaWQ+KFwiZGVsZXRlU2NlbmVcIik7XG4gICAgY29uc3QgZ2V0U2NlbmVNdXRhdGlvbiA9IHVzZU11dGF0aW9uPFxuICAgICAgICBbc3RyaW5nXSxcbiAgICAgICAgeyBpZDogc3RyaW5nOyBuYW1lOiBzdHJpbmc7IGRhdGE6IHN0cmluZyB9XG4gICAgPihcImdldFNjZW5lXCIpO1xuXG4gICAgY29uc3QgW3NjZW5lLCBzZXRTY2VuZV0gPSB1c2VTdGF0ZTxTY2VuZT4oZW1wdHlTY2VuZSk7XG4gICAgY29uc3QgW3NlbGVjdGVkSWQsIHNldFNlbGVjdGVkSWRdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gICAgY29uc3QgW2ltYWdlSW5mbywgc2V0SW1hZ2VJbmZvXSA9IHVzZVN0YXRlPFJlY29yZDxzdHJpbmcsIEltYWdlSW5mbz4+KHt9KTtcbiAgICBjb25zdCBbc3RhZ2VNb2RlLCBzZXRTdGFnZU1vZGVdID0gdXNlU3RhdGU8XCJhcnJhbmdlXCIgfCBcInBsYXlcIj4oXCJhcnJhbmdlXCIpO1xuICAgIGNvbnN0IFt1aUhpZGRlbiwgc2V0VWlIaWRkZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtmcm96ZW4sIHNldEZyb3plbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW21pY0FjdGl2ZSwgc2V0TWljQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbcmVjb3JkaW5nLCBzZXRSZWNvcmRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtleHBvcnRSZXMsIHNldEV4cG9ydFJlc10gPSB1c2VTdGF0ZTxFeHBvcnRSZXNvbHV0aW9uSWQ+KFwiMTA4MFwiKTtcbiAgICBjb25zdCBbZnVsbHNjcmVlbiwgc2V0RnVsbHNjcmVlbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3ByZXNldHNPcGVuLCBzZXRQcmVzZXRzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3NjZW5lc09wZW4sIHNldFNjZW5lc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtoZWxwT3Blbiwgc2V0SGVscE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtzZXJ2ZXJTY2VuZUlkLCBzZXRTZXJ2ZXJTY2VuZUlkXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gICAgY29uc3QgW3RvYXN0LCBzZXRUb2FzdF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbZHJhZ092ZXIsIHNldERyYWdPdmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbZW5naW5lRXJyb3IsIHNldEVuZ2luZUVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgY29uc3Qgc3RhZ2VSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuICAgIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZjxIVE1MQ2FudmFzRWxlbWVudD4obnVsbCk7XG4gICAgY29uc3QgZmlsZVJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcbiAgICBjb25zdCBlbmdpbmVSZWYgPSB1c2VSZWY8RW5naW5lSGFuZGxlIHwgbnVsbD4obnVsbCk7XG4gICAgY29uc3Qgc2NlbmVSZWYgPSB1c2VSZWYoc2NlbmUpO1xuICAgIGNvbnN0IGltYWdlSW5mb1JlZiA9IHVzZVJlZihpbWFnZUluZm8pO1xuICAgIGNvbnN0IHN0YWdlTW9kZVJlZiA9IHVzZVJlZihzdGFnZU1vZGUpO1xuICAgIGNvbnN0IGZyb3plblJlZiA9IHVzZVJlZihmcm96ZW4pO1xuICAgIGNvbnN0IHRpbWVSZWYgPSB1c2VSZWYoTWF0aC5yYW5kb20oKSAqIDkwKTtcbiAgICBjb25zdCBhdWRpb0xldmVsUmVmID0gdXNlUmVmKDApO1xuICAgIGNvbnN0IGFuYWx5c2VyUmVmID0gdXNlUmVmPEFuYWx5c2VyTm9kZSB8IG51bGw+KG51bGwpO1xuICAgIGNvbnN0IGF1ZGlvQ29udGV4dFJlZiA9IHVzZVJlZjxBdWRpb0NvbnRleHQgfCBudWxsPihudWxsKTtcbiAgICBjb25zdCBtaWNTdHJlYW1SZWYgPSB1c2VSZWY8TWVkaWFTdHJlYW0gfCBudWxsPihudWxsKTtcbiAgICBjb25zdCBzcGVjdHJ1bVJlZiA9IHVzZVJlZihuZXcgVWludDhBcnJheSgxMjgpKTtcbiAgICBjb25zdCByZWNvcmRlclJlZiA9IHVzZVJlZjxNZWRpYVJlY29yZGVyIHwgbnVsbD4obnVsbCk7XG4gICAgY29uc3QgY2h1bmtzUmVmID0gdXNlUmVmPEJsb2JbXT4oW10pO1xuICAgIGNvbnN0IHRvYXN0VGltZXJSZWYgPSB1c2VSZWYoMCk7XG4gICAgY29uc3QgbGFzdFBvaW50ZXJSZWYgPSB1c2VSZWYoeyB4OiAwLjUsIHk6IDAuNSwgYXQ6IDAgfSk7XG4gICAgY29uc3QgcG9pbnRlclJlZiA9IHVzZVJlZjxQb2ludGVyU3RhdGU+KHtcbiAgICAgICAgeDogMC41LFxuICAgICAgICB5OiAwLjUsXG4gICAgICAgIHZlbG9jaXR5WDogMCxcbiAgICAgICAgdmVsb2NpdHlZOiAwLFxuICAgICAgICBkb3duOiBmYWxzZSxcbiAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICB9KTtcbiAgICBjb25zdCBkcmFnUmVmID0gdXNlUmVmPHtcbiAgICAgICAgbGF5ZXJJZDogc3RyaW5nO1xuICAgICAgICBzdGFydFg6IG51bWJlcjtcbiAgICAgICAgc3RhcnRZOiBudW1iZXI7XG4gICAgICAgIGZ4WDogbnVtYmVyO1xuICAgICAgICBmeFk6IG51bWJlcjtcbiAgICB9IHwgbnVsbD4obnVsbCk7XG4gICAgY29uc3Qgc3RhZ2VTaXplUmVmID0gdXNlUmVmKHsgd2lkdGg6IDEsIGhlaWdodDogMSB9KTtcbiAgICBjb25zdCBxdWFsaXR5UmVmID0gdXNlUmVmKDEuNSk7XG4gICAgY29uc3QgZXhwb3J0UmVzUmVmID0gdXNlUmVmKGV4cG9ydFJlcyk7XG4gICAgY29uc3QgZXhwb3J0TG9ja1JlZiA9IHVzZVJlZjx7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0gfCBudWxsPihcbiAgICAgICAgbnVsbCxcbiAgICApO1xuICAgIGNvbnN0IGRyYWdSYWZSZWYgPSB1c2VSZWYoMCk7XG4gICAgY29uc3QgZHJhZ1BvaW50UmVmID0gdXNlUmVmKHsgeDogMCwgeTogMCB9KTtcbiAgICBjb25zdCBtZWRpYVJ1bnRpbWVzUmVmID0gdXNlUmVmKG5ldyBNYXA8c3RyaW5nLCBNZWRpYVJ1bnRpbWU+KCkpO1xuICAgIGNvbnN0IGhlbHBPcGVuUmVmID0gdXNlUmVmKGZhbHNlKTtcbiAgICBjb25zdCBraWNrUmVmID0gdXNlUmVmPEtpY2tTdGF0ZT4oe1xuICAgICAgICB6b29tOiAwLFxuICAgICAgICBzdHJvYmU6IDAsXG4gICAgICAgIGNocm9tYTogMCxcbiAgICAgICAgcmlwcGxlOiAwLFxuICAgICAgICBzd2lybDogMCxcbiAgICB9KTtcbiAgICBjb25zdCBoaXN0b3J5UmVmID0gdXNlUmVmPHsgc3RhY2s6IHN0cmluZ1tdOyBpbmRleDogbnVtYmVyIH0+KHtcbiAgICAgICAgc3RhY2s6IFtdLFxuICAgICAgICBpbmRleDogLTEsXG4gICAgfSk7XG4gICAgY29uc3QgaGlzdG9yeVNraXBSZWYgPSB1c2VSZWYoZmFsc2UpO1xuICAgIGNvbnN0IHBsYXlHZXN0dXJlUmVmID0gdXNlUmVmPHtcbiAgICAgICAgc3RhcnRVOiBudW1iZXI7XG4gICAgICAgIHN0YXJ0VjogbnVtYmVyO1xuICAgICAgICBsYXN0VTogbnVtYmVyO1xuICAgICAgICBsYXN0VjogbnVtYmVyO1xuICAgICAgICBwYXRoOiBudW1iZXI7XG4gICAgICAgIGF0OiBudW1iZXI7XG4gICAgICAgIHNoaWZ0OiBib29sZWFuO1xuICAgIH0gfCBudWxsPihudWxsKTtcbiAgICBjb25zdCBsYXN0VGFwQXRSZWYgPSB1c2VSZWYoMCk7XG5cbiAgICBzY2VuZVJlZi5jdXJyZW50ID0gc2NlbmU7XG4gICAgaW1hZ2VJbmZvUmVmLmN1cnJlbnQgPSBpbWFnZUluZm87XG4gICAgc3RhZ2VNb2RlUmVmLmN1cnJlbnQgPSBzdGFnZU1vZGU7XG4gICAgZnJvemVuUmVmLmN1cnJlbnQgPSBmcm96ZW47XG4gICAgZXhwb3J0UmVzUmVmLmN1cnJlbnQgPSBleHBvcnRSZXM7XG4gICAgaGVscE9wZW5SZWYuY3VycmVudCA9IGhlbHBPcGVuO1xuXG4gICAgY29uc3Qgc2VsZWN0ZWQgPVxuICAgICAgICBzY2VuZS5sYXllcnMuZmluZCgobGF5ZXIpID0+IGxheWVyLmlkID09PSBzZWxlY3RlZElkKSA/PyBudWxsO1xuICAgIGNvbnN0IHNjZW5lTGlzdCA9IHNjZW5lc1F1ZXJ5Py5pdGVtcyA/PyBbXTtcblxuICAgIGZ1bmN0aW9uIHNob3dUb2FzdChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgc2V0VG9hc3QobWVzc2FnZSk7XG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodG9hc3RUaW1lclJlZi5jdXJyZW50KTtcbiAgICAgICAgdG9hc3RUaW1lclJlZi5jdXJyZW50ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4gc2V0VG9hc3QoXCJcIiksIDI2MDApO1xuICAgIH1cblxuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBzY2VuZSB1cGRhdGVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICBmdW5jdGlvbiB1cGRhdGVHbG9iYWwocGF0Y2g6IFBhcnRpYWw8R2xvYmFsRng+KSB7XG4gICAgICAgIHNldFNjZW5lKChwcmV2aW91cykgPT4gKHtcbiAgICAgICAgICAgIC4uLnByZXZpb3VzLFxuICAgICAgICAgICAgZ2xvYmFsOiB7IC4uLnByZXZpb3VzLmdsb2JhbCwgLi4ucGF0Y2ggfSxcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUxheWVyRngobGF5ZXJJZDogc3RyaW5nLCBwYXRjaDogUGFydGlhbDxMYXllckZ4Pikge1xuICAgICAgICBzZXRTY2VuZSgocHJldmlvdXMpID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2aW91cyxcbiAgICAgICAgICAgIGxheWVyczogcHJldmlvdXMubGF5ZXJzLm1hcCgobGF5ZXIpID0+XG4gICAgICAgICAgICAgICAgbGF5ZXIuaWQgPT09IGxheWVySWRcbiAgICAgICAgICAgICAgICAgICAgPyB7IC4uLmxheWVyLCBmeDogeyAuLi5sYXllci5meCwgLi4ucGF0Y2ggfSB9XG4gICAgICAgICAgICAgICAgICAgIDogbGF5ZXIsXG4gICAgICAgICAgICApLFxuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVwbGFjZUxheWVyRngobGF5ZXJJZDogc3RyaW5nLCBmeDogTGF5ZXJGeCkge1xuICAgICAgICBzZXRTY2VuZSgocHJldmlvdXMpID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2aW91cyxcbiAgICAgICAgICAgIGxheWVyczogcHJldmlvdXMubGF5ZXJzLm1hcCgobGF5ZXIpID0+XG4gICAgICAgICAgICAgICAgbGF5ZXIuaWQgPT09IGxheWVySWQgPyB7IC4uLmxheWVyLCBmeCB9IDogbGF5ZXIsXG4gICAgICAgICAgICApLFxuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW92ZUxheWVyKGxheWVySWQ6IHN0cmluZywgZGVsdGE6IG51bWJlcikge1xuICAgICAgICBzZXRTY2VuZSgocHJldmlvdXMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcHJldmlvdXMubGF5ZXJzLmZpbmRJbmRleChcbiAgICAgICAgICAgICAgICAobGF5ZXIpID0+IGxheWVyLmlkID09PSBsYXllcklkLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IG5leHQgPSBpbmRleCArIGRlbHRhO1xuICAgICAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBuZXh0IDwgMCB8fCBuZXh0ID49IHByZXZpb3VzLmxheWVycy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzO1xuICAgICAgICAgICAgY29uc3QgbGF5ZXJzID0gcHJldmlvdXMubGF5ZXJzLnNsaWNlKCk7XG4gICAgICAgICAgICBjb25zdCBbbGF5ZXJdID0gbGF5ZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICBsYXllcnMuc3BsaWNlKG5leHQsIDAsIGxheWVyKTtcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnByZXZpb3VzLCBsYXllcnMgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHVwbGljYXRlTGF5ZXIobGF5ZXJJZDogc3RyaW5nKSB7XG4gICAgICAgIHNldFNjZW5lKChwcmV2aW91cykgPT4ge1xuICAgICAgICAgICAgaWYgKHByZXZpb3VzLmxheWVycy5sZW5ndGggPj0gTUFYX0xBWUVSUykgcmV0dXJuIHByZXZpb3VzO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwcmV2aW91cy5sYXllcnMuZmluZEluZGV4KFxuICAgICAgICAgICAgICAgIChsYXllcikgPT4gbGF5ZXIuaWQgPT09IGxheWVySWQsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKGluZGV4IDwgMCkgcmV0dXJuIHByZXZpb3VzO1xuICAgICAgICAgICAgY29uc3Qgc291cmNlID0gcHJldmlvdXMubGF5ZXJzW2luZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IGNvcHk6IFNjZW5lTGF5ZXIgPSB7XG4gICAgICAgICAgICAgICAgaWQ6IG5ld0lkKFwibGF5ZXJcIiksXG4gICAgICAgICAgICAgICAgaW1hZ2VJZDogc291cmNlLmltYWdlSWQsXG4gICAgICAgICAgICAgICAgbmFtZTogYCR7c291cmNlLm5hbWV9IGNvcHlgLFxuICAgICAgICAgICAgICAgIG1lZGlhS2luZDogc291cmNlLm1lZGlhS2luZCxcbiAgICAgICAgICAgICAgICBmeDoge1xuICAgICAgICAgICAgICAgICAgICAuLi5zb3VyY2UuZngsXG4gICAgICAgICAgICAgICAgICAgIHg6IHNvdXJjZS5meC54ICsgMC4wNixcbiAgICAgICAgICAgICAgICAgICAgeTogc291cmNlLmZ4LnkgLSAwLjA2LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgbGF5ZXJzID0gcHJldmlvdXMubGF5ZXJzLnNsaWNlKCk7XG4gICAgICAgICAgICBsYXllcnMuc3BsaWNlKGluZGV4ICsgMSwgMCwgY29weSk7XG4gICAgICAgICAgICBzZXRTZWxlY3RlZElkKGNvcHkuaWQpO1xuICAgICAgICAgICAgcmV0dXJuIHsgLi4ucHJldmlvdXMsIGxheWVycyB9O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVMYXllcihsYXllcklkOiBzdHJpbmcpIHtcbiAgICAgICAgc2V0U2NlbmUoKHByZXZpb3VzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZW1vdmVkID0gcHJldmlvdXMubGF5ZXJzLmZpbmQoXG4gICAgICAgICAgICAgICAgKGxheWVyKSA9PiBsYXllci5pZCA9PT0gbGF5ZXJJZCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBsYXllcnMgPSBwcmV2aW91cy5sYXllcnMuZmlsdGVyKFxuICAgICAgICAgICAgICAgIChsYXllcikgPT4gbGF5ZXIuaWQgIT09IGxheWVySWQsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHJlbW92ZWQgJiZcbiAgICAgICAgICAgICAgICAhbGF5ZXJzLnNvbWUoKGxheWVyKSA9PiBsYXllci5pbWFnZUlkID09PSByZW1vdmVkLmltYWdlSWQpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAvLyBUaGUgSW5kZXhlZERCIGJsb2IgaXMga2VwdCBzbyB1bmRvIGNhbiBicmluZyB0aGUgbGF5ZXIgYmFjay5cbiAgICAgICAgICAgICAgICBkaXNwb3NlTWVkaWFSdW50aW1lKHJlbW92ZWQuaW1hZ2VJZCk7XG4gICAgICAgICAgICAgICAgZW5naW5lUmVmLmN1cnJlbnQ/LnJlbW92ZUltYWdlKHJlbW92ZWQuaW1hZ2VJZCk7XG4gICAgICAgICAgICAgICAgc2V0SW1hZ2VJbmZvKChpbmZvKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5leHQgPSB7IC4uLmluZm8gfTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG5leHRbcmVtb3ZlZC5pbWFnZUlkXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyAuLi5wcmV2aW91cywgbGF5ZXJzIH07XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRTZWxlY3RlZElkKChjdXJyZW50KSA9PiAoY3VycmVudCA9PT0gbGF5ZXJJZCA/IG51bGwgOiBjdXJyZW50KSk7XG4gICAgfVxuXG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB1bmRvIC8gcmVkbyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICBmdW5jdGlvbiBhcHBseUhpc3RvcnlTbmFwc2hvdChzbmFwc2hvdDogc3RyaW5nKSB7XG4gICAgICAgIGhpc3RvcnlTa2lwUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICBjb25zdCByZXN0b3JlZCA9IGRlY29kZVNjZW5lKHNuYXBzaG90KTtcbiAgICAgICAgc2V0U2NlbmUocmVzdG9yZWQpO1xuICAgICAgICBzY2VuZVJlZi5jdXJyZW50ID0gcmVzdG9yZWQ7XG4gICAgICAgIHNldFNlbGVjdGVkSWQoKGN1cnJlbnQpID0+XG4gICAgICAgICAgICByZXN0b3JlZC5sYXllcnMuc29tZSgobGF5ZXIpID0+IGxheWVyLmlkID09PSBjdXJyZW50KVxuICAgICAgICAgICAgICAgID8gY3VycmVudFxuICAgICAgICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgKTtcbiAgICAgICAgZW5naW5lUmVmLmN1cnJlbnQ/LmNsZWFyRmVlZGJhY2soKTtcbiAgICAgICAgdm9pZCBoeWRyYXRlU2NlbmVJbWFnZXMocmVzdG9yZWQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVuZG9TY2VuZSgpIHtcbiAgICAgICAgY29uc3QgaGlzdG9yeSA9IGhpc3RvcnlSZWYuY3VycmVudDtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IGVuY29kZVNjZW5lKHNjZW5lUmVmLmN1cnJlbnQpO1xuICAgICAgICBpZiAoaGlzdG9yeS5pbmRleCA+PSAwICYmIGhpc3Rvcnkuc3RhY2tbaGlzdG9yeS5pbmRleF0gIT09IGN1cnJlbnQpIHtcbiAgICAgICAgICAgIC8vIEEgY2hhbmdlIGlzIHN0aWxsIGluc2lkZSB0aGUgZGVib3VuY2Ugd2luZG93IFx1MjAxNCBjb21taXQgaXQgZmlyc3RcbiAgICAgICAgICAgIC8vIHNvIHJlZG8gY2FuIGJyaW5nIGl0IGJhY2suXG4gICAgICAgICAgICBoaXN0b3J5LnN0YWNrID0gaGlzdG9yeS5zdGFjay5zbGljZSgwLCBoaXN0b3J5LmluZGV4ICsgMSk7XG4gICAgICAgICAgICBoaXN0b3J5LnN0YWNrLnB1c2goY3VycmVudCk7XG4gICAgICAgICAgICBoaXN0b3J5LmluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhpc3RvcnkuaW5kZXggPD0gMCkge1xuICAgICAgICAgICAgc2hvd1RvYXN0KFwiTm90aGluZyB0byB1bmRvXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGhpc3RvcnkuaW5kZXgtLTtcbiAgICAgICAgYXBwbHlIaXN0b3J5U25hcHNob3QoaGlzdG9yeS5zdGFja1toaXN0b3J5LmluZGV4XSk7XG4gICAgICAgIHNob3dUb2FzdChcIlVuZG9cIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVkb1NjZW5lKCkge1xuICAgICAgICBjb25zdCBoaXN0b3J5ID0gaGlzdG9yeVJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoaGlzdG9yeS5pbmRleCA+PSBoaXN0b3J5LnN0YWNrLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHNob3dUb2FzdChcIk5vdGhpbmcgdG8gcmVkb1wiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBoaXN0b3J5LmluZGV4Kys7XG4gICAgICAgIGFwcGx5SGlzdG9yeVNuYXBzaG90KGhpc3Rvcnkuc3RhY2tbaGlzdG9yeS5pbmRleF0pO1xuICAgICAgICBzaG93VG9hc3QoXCJSZWRvXCIpO1xuICAgIH1cblxuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtZWRpYSBpbXBvcnRzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICBmdW5jdGlvbiBkaXNwb3NlTWVkaWFSdW50aW1lKGltYWdlSWQ6IHN0cmluZykge1xuICAgICAgICBjb25zdCBydW50aW1lID0gbWVkaWFSdW50aW1lc1JlZi5jdXJyZW50LmdldChpbWFnZUlkKTtcbiAgICAgICAgaWYgKCFydW50aW1lKSByZXR1cm47XG4gICAgICAgIHJ1bnRpbWUudmlkZW8/LnBhdXNlKCk7XG4gICAgICAgIHJ1bnRpbWUuYXVkaW8/LnBhdXNlKCk7XG4gICAgICAgIGlmIChydW50aW1lLnZpZGVvKSB7XG4gICAgICAgICAgICBydW50aW1lLnZpZGVvLnJlbW92ZUF0dHJpYnV0ZShcInNyY1wiKTtcbiAgICAgICAgICAgIHJ1bnRpbWUudmlkZW8ubG9hZCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChydW50aW1lLmF1ZGlvKSB7XG4gICAgICAgICAgICBydW50aW1lLmF1ZGlvLnJlbW92ZUF0dHJpYnV0ZShcInNyY1wiKTtcbiAgICAgICAgICAgIHJ1bnRpbWUuYXVkaW8ubG9hZCgpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBydW50aW1lLnNvdXJjZU5vZGU/LmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAvLyBhbHJlYWR5IGRpc2Nvbm5lY3RlZFxuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBydW50aW1lLmFuYWx5c2VyPy5kaXNjb25uZWN0KCk7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgLy8gYWxyZWFkeSBkaXNjb25uZWN0ZWRcbiAgICAgICAgfVxuICAgICAgICBpZiAocnVudGltZS5vYmplY3RVcmwpIFVSTC5yZXZva2VPYmplY3RVUkwocnVudGltZS5vYmplY3RVcmwpO1xuICAgICAgICBtZWRpYVJ1bnRpbWVzUmVmLmN1cnJlbnQuZGVsZXRlKGltYWdlSWQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3Bvc2VBbGxNZWRpYVJ1bnRpbWVzKCkge1xuICAgICAgICBmb3IgKGNvbnN0IGltYWdlSWQgb2YgWy4uLm1lZGlhUnVudGltZXNSZWYuY3VycmVudC5rZXlzKCldKSB7XG4gICAgICAgICAgICBkaXNwb3NlTWVkaWFSdW50aW1lKGltYWdlSWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZW5zdXJlTWVkaWFBdWRpb0NvbnRleHQoKTogUHJvbWlzZTxBdWRpb0NvbnRleHQ+IHtcbiAgICAgICAgaWYgKCFhdWRpb0NvbnRleHRSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgYXVkaW9Db250ZXh0UmVmLmN1cnJlbnQgPSBuZXcgQXVkaW9Db250ZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF1ZGlvQ29udGV4dFJlZi5jdXJyZW50LnN0YXRlID09PSBcInN1c3BlbmRlZFwiKSB7XG4gICAgICAgICAgICBhd2FpdCBhdWRpb0NvbnRleHRSZWYuY3VycmVudC5yZXN1bWUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXVkaW9Db250ZXh0UmVmLmN1cnJlbnQ7XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gYWN0aXZhdGVNZWRpYShcbiAgICAgICAgaW1hZ2VJZDogc3RyaW5nLFxuICAgICAgICBibG9iOiBCbG9iLFxuICAgICAgICBraW5kOiBNZWRpYUtpbmQsXG4gICAgICAgIF9maWxlTmFtZTogc3RyaW5nLFxuICAgICk6IFByb21pc2U8SW1hZ2VJbmZvPiB7XG4gICAgICAgIGRpc3Bvc2VNZWRpYVJ1bnRpbWUoaW1hZ2VJZCk7XG4gICAgICAgIGNvbnN0IGVuZ2luZSA9IGVuZ2luZVJlZi5jdXJyZW50O1xuXG4gICAgICAgIGlmIChraW5kID09PSBcImltYWdlXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlY29kZWQgPSBhd2FpdCBkZWNvZGVJbWFnZUJsb2IoYmxvYik7XG4gICAgICAgICAgICBlbmdpbmU/LnNldEltYWdlKGltYWdlSWQsIGRlY29kZWQuY2FudmFzKTtcbiAgICAgICAgICAgIG1lZGlhUnVudGltZXNSZWYuY3VycmVudC5zZXQoaW1hZ2VJZCwgeyBraW5kIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogZGVjb2RlZC53aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGRlY29kZWQuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHRodW1iOiBkZWNvZGVkLnRodW1iLFxuICAgICAgICAgICAgICAgIG1pc3Npbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGtpbmQsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtpbmQgPT09IFwiZGF0YVwiKSB7XG4gICAgICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICAgICAgY29uc3QgYnVmZmVyID0gYXdhaXQgYmxvYi5zbGljZSgwLCAxMDI0ICogMTAyNCkuYXJyYXlCdWZmZXIoKTtcbiAgICAgICAgICAgIHBhaW50RGF0YUJ5dGVzKGNhbnZhcywgbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKSk7XG4gICAgICAgICAgICBlbmdpbmU/LnNldEltYWdlKGltYWdlSWQsIGNhbnZhcyk7XG4gICAgICAgICAgICBtZWRpYVJ1bnRpbWVzUmVmLmN1cnJlbnQuc2V0KGltYWdlSWQsIHsga2luZCwgY2FudmFzIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FudmFzLndpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogY2FudmFzLmhlaWdodCxcbiAgICAgICAgICAgICAgICB0aHVtYjogY2FudmFzVGh1bWIoY2FudmFzLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpLFxuICAgICAgICAgICAgICAgIG1pc3Npbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGtpbmQsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGtpbmQgPT09IFwidmlkZW9cIikge1xuICAgICAgICAgICAgY29uc3Qgb2JqZWN0VXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICAgICAgICAgIGNvbnN0IHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInZpZGVvXCIpO1xuICAgICAgICAgICAgdmlkZW8ucGxheXNJbmxpbmUgPSB0cnVlO1xuICAgICAgICAgICAgdmlkZW8ubXV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdmlkZW8ubG9vcCA9IHRydWU7XG4gICAgICAgICAgICB2aWRlby5wcmVsb2FkID0gXCJhdXRvXCI7XG4gICAgICAgICAgICB2aWRlby5zZXRBdHRyaWJ1dGUoXCJwbGF5c2lubGluZVwiLCBcIlwiKTtcbiAgICAgICAgICAgIHZpZGVvLnNldEF0dHJpYnV0ZShcIndlYmtpdC1wbGF5c2lubGluZVwiLCBcIlwiKTtcbiAgICAgICAgICAgIHZpZGVvLnNyYyA9IG9iamVjdFVybDtcblxuICAgICAgICAgICAgYXdhaXQgbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9uUmVhZHkgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29uc3Qgb25FcnJvciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYW51cCgpO1xuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiQ291bGQgbm90IGRlY29kZSB0aGF0IHZpZGVvXCIpKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNvbnN0IGNsZWFudXAgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZpZGVvLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkZWRkYXRhXCIsIG9uUmVhZHkpO1xuICAgICAgICAgICAgICAgICAgICB2aWRlby5yZW1vdmVFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgb25FcnJvcik7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB2aWRlby5hZGRFdmVudExpc3RlbmVyKFwibG9hZGVkZGF0YVwiLCBvblJlYWR5KTtcbiAgICAgICAgICAgICAgICB2aWRlby5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgb25FcnJvcik7XG4gICAgICAgICAgICAgICAgdmlkZW8ubG9hZCgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gTWF0aC5tYXgoMSwgdmlkZW8udmlkZW9XaWR0aCk7XG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBNYXRoLm1heCgxLCB2aWRlby52aWRlb0hlaWdodCk7XG4gICAgICAgICAgICBlbmdpbmU/LnNldEltYWdlKGltYWdlSWQsIHZpZGVvKTtcbiAgICAgICAgICAgIG1lZGlhUnVudGltZXNSZWYuY3VycmVudC5zZXQoaW1hZ2VJZCwgeyBraW5kLCBvYmplY3RVcmwsIHZpZGVvIH0pO1xuICAgICAgICAgICAgdm9pZCB2aWRlby5wbGF5KCkuY2F0Y2goKCkgPT4gdW5kZWZpbmVkKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICAgICAgdGh1bWI6IGNhbnZhc1RodW1iKHZpZGVvLCB3aWR0aCwgaGVpZ2h0KSxcbiAgICAgICAgICAgICAgICBtaXNzaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBraW5kLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGF1ZGlvXG4gICAgICAgIGNvbnN0IG9iamVjdFVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICAgIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImF1ZGlvXCIpO1xuICAgICAgICBhdWRpby5sb29wID0gdHJ1ZTtcbiAgICAgICAgYXVkaW8ucHJlbG9hZCA9IFwiYXV0b1wiO1xuICAgICAgICBhdWRpby5zcmMgPSBvYmplY3RVcmw7XG5cbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgZW5zdXJlU3BlY3RydW1DYW52YXMoY2FudmFzKTtcbiAgICAgICAgcGFpbnRBdWRpb1Zpc3VhbChjYW52YXMsIG5ldyBVaW50OEFycmF5KDEyOCksIDAuMjUsIDApO1xuXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBhd2FpdCBlbnN1cmVNZWRpYUF1ZGlvQ29udGV4dCgpO1xuICAgICAgICBjb25zdCBzb3VyY2VOb2RlID0gY29udGV4dC5jcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UoYXVkaW8pO1xuICAgICAgICBjb25zdCBhbmFseXNlciA9IGNvbnRleHQuY3JlYXRlQW5hbHlzZXIoKTtcbiAgICAgICAgYW5hbHlzZXIuZmZ0U2l6ZSA9IDI1NjtcbiAgICAgICAgYW5hbHlzZXIuc21vb3RoaW5nVGltZUNvbnN0YW50ID0gMC43MjtcbiAgICAgICAgc291cmNlTm9kZS5jb25uZWN0KGFuYWx5c2VyKTtcbiAgICAgICAgYW5hbHlzZXIuY29ubmVjdChjb250ZXh0LmRlc3RpbmF0aW9uKTtcblxuICAgICAgICBlbmdpbmU/LnNldEltYWdlKGltYWdlSWQsIGNhbnZhcyk7XG4gICAgICAgIG1lZGlhUnVudGltZXNSZWYuY3VycmVudC5zZXQoaW1hZ2VJZCwge1xuICAgICAgICAgICAga2luZCxcbiAgICAgICAgICAgIG9iamVjdFVybCxcbiAgICAgICAgICAgIGF1ZGlvLFxuICAgICAgICAgICAgY2FudmFzLFxuICAgICAgICAgICAgYW5hbHlzZXIsXG4gICAgICAgICAgICBzb3VyY2VOb2RlLFxuICAgICAgICAgICAgc3BlY3RydW06IG5ldyBVaW50OEFycmF5KGFuYWx5c2VyLmZyZXF1ZW5jeUJpbkNvdW50KSxcbiAgICAgICAgfSk7XG4gICAgICAgIHZvaWQgYXVkaW8ucGxheSgpLmNhdGNoKCgpID0+IHVuZGVmaW5lZCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoOiBjYW52YXMud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IGNhbnZhcy5oZWlnaHQsXG4gICAgICAgICAgICB0aHVtYjogY2FudmFzVGh1bWIoY2FudmFzLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpLFxuICAgICAgICAgICAgbWlzc2luZzogZmFsc2UsXG4gICAgICAgICAgICBraW5kLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGltcG9ydEZpbGVzKGZpbGVzOiBJdGVyYWJsZTxGaWxlPikge1xuICAgICAgICBjb25zdCBsaXN0ID0gQXJyYXkuZnJvbShmaWxlcyk7XG4gICAgICAgIGlmICghbGlzdC5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgbGV0IGFkZGVkID0gMDtcbiAgICAgICAgbGV0IGltcG9ydGVkQXVkaW8gPSBmYWxzZTtcbiAgICAgICAgZm9yIChjb25zdCBmaWxlIG9mIGxpc3QpIHtcbiAgICAgICAgICAgIGlmIChzY2VuZVJlZi5jdXJyZW50LmxheWVycy5sZW5ndGggKyBhZGRlZCA+PSBNQVhfTEFZRVJTKSB7XG4gICAgICAgICAgICAgICAgc2hvd1RvYXN0KGBMYXllciBsaW1pdCBpcyAke01BWF9MQVlFUlN9YCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBraW5kID0gY2xhc3NpZnlGaWxlKGZpbGUpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZUlkID0gbmV3SWQoXCJpbWdcIik7XG4gICAgICAgICAgICAgICAgYXdhaXQgcHV0SW1hZ2VCbG9iKGltYWdlSWQsIGZpbGUpLmNhdGNoKCgpID0+IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5mbyA9IGF3YWl0IGFjdGl2YXRlTWVkaWEoaW1hZ2VJZCwgZmlsZSwga2luZCwgZmlsZS5uYW1lKTtcbiAgICAgICAgICAgICAgICBzZXRJbWFnZUluZm8oKHByZXZpb3VzKSA9PiAoeyAuLi5wcmV2aW91cywgW2ltYWdlSWRdOiBpbmZvIH0pKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsYXllcjogU2NlbmVMYXllciA9IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IG5ld0lkKFwibGF5ZXJcIiksXG4gICAgICAgICAgICAgICAgICAgIGltYWdlSWQsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGNsZWFuTmFtZShkZWZhdWx0TGF5ZXJOYW1lKGtpbmQsIGZpbGUubmFtZSksIG1lZGlhS2luZExhYmVsKGtpbmQpKSxcbiAgICAgICAgICAgICAgICAgICAgbWVkaWFLaW5kOiBraW5kLFxuICAgICAgICAgICAgICAgICAgICBmeDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uREVGQVVMVF9MQVlFUl9GWCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGFkZGVkICogMC4wNyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGFkZGVkICogLTAuMDcsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBzZXRTY2VuZSgocHJldmlvdXMpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgIC4uLnByZXZpb3VzLFxuICAgICAgICAgICAgICAgICAgICBsYXllcnM6IFsuLi5wcmV2aW91cy5sYXllcnMsIGxheWVyXSxcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRJZChsYXllci5pZCk7XG4gICAgICAgICAgICAgICAgaWYgKGtpbmQgPT09IFwiYXVkaW9cIikgaW1wb3J0ZWRBdWRpbyA9IHRydWU7XG4gICAgICAgICAgICAgICAgYWRkZWQrKztcbiAgICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgICAgIHNob3dUb2FzdChgQ291bGQgbm90IGltcG9ydCAke21lZGlhS2luZExhYmVsKGtpbmQpLnRvTG93ZXJDYXNlKCl9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGltcG9ydGVkQXVkaW8gJiYgc2NlbmVSZWYuY3VycmVudC5nbG9iYWwuYXVkaW9SZWFjdCA8IDAuMjUpIHtcbiAgICAgICAgICAgIHVwZGF0ZUdsb2JhbCh7IGF1ZGlvUmVhY3Q6IDAuNTUgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBoeWRyYXRlU2NlbmVJbWFnZXModGFyZ2V0OiBTY2VuZSkge1xuICAgICAgICBjb25zdCBlbmdpbmUgPSBlbmdpbmVSZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCFlbmdpbmUpIHJldHVybjtcbiAgICAgICAgY29uc3Qga2luZEJ5SWQgPSBuZXcgTWFwPHN0cmluZywgTWVkaWFLaW5kPigpO1xuICAgICAgICBjb25zdCBuYW1lQnlJZCA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmc+KCk7XG4gICAgICAgIGZvciAoY29uc3QgbGF5ZXIgb2YgdGFyZ2V0LmxheWVycykge1xuICAgICAgICAgICAgaWYgKCFsYXllci5pbWFnZUlkKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmICgha2luZEJ5SWQuaGFzKGxheWVyLmltYWdlSWQpKSB7XG4gICAgICAgICAgICAgICAga2luZEJ5SWQuc2V0KGxheWVyLmltYWdlSWQsIGxheWVyLm1lZGlhS2luZCA/PyBcImltYWdlXCIpO1xuICAgICAgICAgICAgICAgIG5hbWVCeUlkLnNldChsYXllci5pbWFnZUlkLCBsYXllci5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3QgaW1hZ2VJZCBvZiBbLi4ubWVkaWFSdW50aW1lc1JlZi5jdXJyZW50LmtleXMoKV0pIHtcbiAgICAgICAgICAgIGlmICgha2luZEJ5SWQuaGFzKGltYWdlSWQpKSB7XG4gICAgICAgICAgICAgICAgZGlzcG9zZU1lZGlhUnVudGltZShpbWFnZUlkKTtcbiAgICAgICAgICAgICAgICBlbmdpbmUucmVtb3ZlSW1hZ2UoaW1hZ2VJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IFtpbWFnZUlkLCBraW5kXSBvZiBraW5kQnlJZCkge1xuICAgICAgICAgICAgaWYgKG1lZGlhUnVudGltZXNSZWYuY3VycmVudC5oYXMoaW1hZ2VJZCkgJiYgZW5naW5lLmhhc0ltYWdlKGltYWdlSWQpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCBnZXRJbWFnZUJsb2IoaW1hZ2VJZCk7XG4gICAgICAgICAgICAgICAgaWYgKCFibG9iKSB0aHJvdyBuZXcgRXJyb3IoXCJtaXNzaW5nXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc29sdmVkOiBNZWRpYUtpbmQgPVxuICAgICAgICAgICAgICAgICAgICBraW5kID09PSBcImltYWdlXCIgfHxcbiAgICAgICAgICAgICAgICAgICAga2luZCA9PT0gXCJ2aWRlb1wiIHx8XG4gICAgICAgICAgICAgICAgICAgIGtpbmQgPT09IFwiYXVkaW9cIiB8fFxuICAgICAgICAgICAgICAgICAgICBraW5kID09PSBcImRhdGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBraW5kXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGNsYXNzaWZ5QmxvYihibG9iLCBuYW1lQnlJZC5nZXQoaW1hZ2VJZCkgPz8gXCJcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5mbyA9IGF3YWl0IGFjdGl2YXRlTWVkaWEoXG4gICAgICAgICAgICAgICAgICAgIGltYWdlSWQsXG4gICAgICAgICAgICAgICAgICAgIGJsb2IsXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVkLFxuICAgICAgICAgICAgICAgICAgICBuYW1lQnlJZC5nZXQoaW1hZ2VJZCkgPz8gXCJtZWRpYVwiLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgc2V0SW1hZ2VJbmZvKChwcmV2aW91cykgPT4gKHsgLi4ucHJldmlvdXMsIFtpbWFnZUlkXTogaW5mbyB9KSk7XG4gICAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgICAgICBzZXRJbWFnZUluZm8oKHByZXZpb3VzKSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAuLi5wcmV2aW91cyxcbiAgICAgICAgICAgICAgICAgICAgW2ltYWdlSWRdOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRodW1iOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWlzc2luZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3luY0xpdmVNZWRpYVRleHR1cmVzKGVuZ2luZTogRW5naW5lSGFuZGxlLCB0aW1lOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICBsZXQgbWVkaWFMZXZlbCA9IDA7XG4gICAgICAgIGZvciAoY29uc3QgW2ltYWdlSWQsIHJ1bnRpbWVdIG9mIG1lZGlhUnVudGltZXNSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgaWYgKHJ1bnRpbWUua2luZCA9PT0gXCJ2aWRlb1wiICYmIHJ1bnRpbWUudmlkZW8pIHtcbiAgICAgICAgICAgICAgICBpZiAocnVudGltZS52aWRlby5yZWFkeVN0YXRlID49IEhUTUxNZWRpYUVsZW1lbnQuSEFWRV9DVVJSRU5UX0RBVEEpIHtcbiAgICAgICAgICAgICAgICAgICAgZW5naW5lLnNldEltYWdlKGltYWdlSWQsIHJ1bnRpbWUudmlkZW8pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChydW50aW1lLmtpbmQgPT09IFwiYXVkaW9cIiAmJiBydW50aW1lLmF1ZGlvICYmIHJ1bnRpbWUuY2FudmFzICYmIHJ1bnRpbWUuYW5hbHlzZXIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzcGVjdHJ1bSA9XG4gICAgICAgICAgICAgICAgICAgIHJ1bnRpbWUuc3BlY3RydW0gJiZcbiAgICAgICAgICAgICAgICAgICAgcnVudGltZS5zcGVjdHJ1bS5sZW5ndGggPT09IHJ1bnRpbWUuYW5hbHlzZXIuZnJlcXVlbmN5QmluQ291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gcnVudGltZS5zcGVjdHJ1bVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBuZXcgVWludDhBcnJheShydW50aW1lLmFuYWx5c2VyLmZyZXF1ZW5jeUJpbkNvdW50KTtcbiAgICAgICAgICAgICAgICBydW50aW1lLnNwZWN0cnVtID0gc3BlY3RydW07XG4gICAgICAgICAgICAgICAgcnVudGltZS5hbmFseXNlci5nZXRCeXRlRnJlcXVlbmN5RGF0YShzcGVjdHJ1bSk7XG4gICAgICAgICAgICAgICAgY29uc3QgbGV2ZWwgPSBsZXZlbEZyb21TcGVjdHJ1bShzcGVjdHJ1bSk7XG4gICAgICAgICAgICAgICAgbWVkaWFMZXZlbCA9IE1hdGgubWF4KG1lZGlhTGV2ZWwsIGxldmVsKTtcbiAgICAgICAgICAgICAgICBwYWludEF1ZGlvVmlzdWFsKHJ1bnRpbWUuY2FudmFzLCBzcGVjdHJ1bSwgbGV2ZWwsIHRpbWUpO1xuICAgICAgICAgICAgICAgIGVuZ2luZS5zZXRJbWFnZShpbWFnZUlkLCBydW50aW1lLmNhbnZhcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1lZGlhTGV2ZWw7XG4gICAgfVxuXG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBlbmdpbmUgbG9vcCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgIGZ1bmN0aW9uIGJ1aWxkRnJhbWUoKTogRnJhbWVTdGF0ZSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSBzY2VuZVJlZi5jdXJyZW50O1xuICAgICAgICBjb25zdCBpbmZvID0gaW1hZ2VJbmZvUmVmLmN1cnJlbnQ7XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gc3RhZ2VTaXplUmVmLmN1cnJlbnQ7XG4gICAgICAgIGNvbnN0IGFzcGVjdCA9IE1hdGgubWF4KDAuMDUsIHdpZHRoIC8gTWF0aC5tYXgoMSwgaGVpZ2h0KSk7XG4gICAgICAgIGNvbnN0IHRpbWUgPSB0aW1lUmVmLmN1cnJlbnQ7XG4gICAgICAgIGNvbnN0IGF1ZGlvID0gYXVkaW9MZXZlbFJlZi5jdXJyZW50O1xuICAgICAgICBjb25zdCBraWNrID0ga2lja1JlZi5jdXJyZW50O1xuXG4gICAgICAgIGNvbnN0IGxheWVyczogTGF5ZXJSZW5kZXJTdGF0ZVtdID0gY3VycmVudC5sYXllcnNcbiAgICAgICAgICAgIC5maWx0ZXIoKGxheWVyKSA9PiBsYXllci5meC52aXNpYmxlKVxuICAgICAgICAgICAgLm1hcCgobGF5ZXIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmeCA9IGxheWVyLmZ4O1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlZWQgPSBsYXllclNlZWQobGF5ZXIuaWQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1ldGEgPSBpbmZvW2xheWVyLmltYWdlSWRdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlQXNwZWN0ID1cbiAgICAgICAgICAgICAgICAgICAgbWV0YSAmJiBtZXRhLndpZHRoID4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBtZXRhLndpZHRoIC8gTWF0aC5tYXgoMSwgbWV0YS5oZWlnaHQpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IDE7XG4gICAgICAgICAgICAgICAgY29uc3QgZml0SGVpZ2h0ID0gTWF0aC5taW4oMSwgYXNwZWN0IC8gaW1hZ2VBc3BlY3QpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHB1bHNlID1cbiAgICAgICAgICAgICAgICAgICAgMSArXG4gICAgICAgICAgICAgICAgICAgIGZ4LnB1bHNlICpcbiAgICAgICAgICAgICAgICAgICAgICAgICgwLjE2ICogTWF0aC5zaW4odGltZSAqIDIuMiArIHNlZWQgKiAyMCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1ZGlvICogY3VycmVudC5nbG9iYWwuYXVkaW9SZWFjdCAqIDAuNSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2NhbGUgPSBmeC5zY2FsZSAqIHB1bHNlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRyaWZ0WCA9XG4gICAgICAgICAgICAgICAgICAgIE1hdGguc2luKHRpbWUgKiAwLjU3ICsgc2VlZCAqIDkuMikgKiBmeC5kcmlmdCAqIDAuMztcbiAgICAgICAgICAgICAgICBjb25zdCBkcmlmdFkgPVxuICAgICAgICAgICAgICAgICAgICBNYXRoLmNvcyh0aW1lICogMC40MyArIHNlZWQgKiA1LjcpICogZnguZHJpZnQgKiAwLjM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGxheWVyLmlkLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZUlkOiBsYXllci5pbWFnZUlkLFxuICAgICAgICAgICAgICAgICAgICBwb3M6IFtmeC54ICsgZHJpZnRYLCBmeC55ICsgZHJpZnRZXSxcbiAgICAgICAgICAgICAgICAgICAgZXh0OiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoLm1heCgxZS00LCAoZml0SGVpZ2h0ICogaW1hZ2VBc3BlY3QgKiBzY2FsZSkgLyAyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgubWF4KDFlLTQsIChmaXRIZWlnaHQgKiBzY2FsZSkgLyAyKSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgcm90OiAoZngucm90YXRpb24gKiBNYXRoLlBJKSAvIDE4MCArIGZ4LnNwaW4gKiB0aW1lICogMS41LFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBmeC5vcGFjaXR5LFxuICAgICAgICAgICAgICAgICAgICBibGVuZDogYmxlbmRJbmRleChmeC5ibGVuZCksXG4gICAgICAgICAgICAgICAgICAgIHRpbGU6IE1hdGgucm91bmQoZngudGlsZSksXG4gICAgICAgICAgICAgICAgICAgIHdhcnA6IGZ4LndhcnAsXG4gICAgICAgICAgICAgICAgICAgIHN3aXJsOiBmeC5zd2lybCxcbiAgICAgICAgICAgICAgICAgICAgcmlwcGxlOiBmeC5yaXBwbGUsXG4gICAgICAgICAgICAgICAgICAgIGthbGVpZG86IGZ4LmthbGVpZG8sXG4gICAgICAgICAgICAgICAgICAgIHBpeGVsYXRlOiBmeC5waXhlbGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgYnVsZ2U6IGZ4LmJ1bGdlLFxuICAgICAgICAgICAgICAgICAgICBtaXJyb3I6IGZ4Lm1pcnJvcixcbiAgICAgICAgICAgICAgICAgICAgaHVlOiBmeC5odWUsXG4gICAgICAgICAgICAgICAgICAgIHNhdHVyYXRpb246IGZ4LnNhdHVyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyYXN0OiBmeC5jb250cmFzdCxcbiAgICAgICAgICAgICAgICAgICAgYnJpZ2h0bmVzczogZnguYnJpZ2h0bmVzcyxcbiAgICAgICAgICAgICAgICAgICAgaW52ZXJ0OiBmeC5pbnZlcnQsXG4gICAgICAgICAgICAgICAgICAgIHBvc3Rlcml6ZTogZngucG9zdGVyaXplLFxuICAgICAgICAgICAgICAgICAgICBjaHJvbWE6IGZ4LmNocm9tYSxcbiAgICAgICAgICAgICAgICAgICAgZWRnZXM6IGZ4LmVkZ2VzLFxuICAgICAgICAgICAgICAgICAgICB0aW50OiBoZXhUb1JnYihmeC50aW50Q29sb3IpLFxuICAgICAgICAgICAgICAgICAgICB0aW50QW1vdW50OiBmeC50aW50QW1vdW50LFxuICAgICAgICAgICAgICAgICAgICBzaGltbWVyOiBmeC5zaGltbWVyLFxuICAgICAgICAgICAgICAgICAgICBzZWVkLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBnID0gY3VycmVudC5nbG9iYWw7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0aW1lLFxuICAgICAgICAgICAgYXVkaW8sXG4gICAgICAgICAgICBwb2ludGVyOiBwb2ludGVyUmVmLmN1cnJlbnQsXG4gICAgICAgICAgICBsYXllcnMsXG4gICAgICAgICAgICBnbG9iYWw6IHtcbiAgICAgICAgICAgICAgICBiZ01vZGU6IGcuYmdNb2RlLFxuICAgICAgICAgICAgICAgIGJnQTogaGV4VG9SZ2IoZy5iZ0EpLFxuICAgICAgICAgICAgICAgIGJnQjogaGV4VG9SZ2IoZy5iZ0IpLFxuICAgICAgICAgICAgICAgIGZlZWRiYWNrOiBnLmZlZWRiYWNrLFxuICAgICAgICAgICAgICAgIHRyYWlsczogZy50cmFpbHMsXG4gICAgICAgICAgICAgICAgZmJab29tOiBnLmZiWm9vbSxcbiAgICAgICAgICAgICAgICBmYlJvdGF0ZTogZy5mYlJvdGF0ZSxcbiAgICAgICAgICAgICAgICBmYkh1ZTogZy5mYkh1ZSxcbiAgICAgICAgICAgICAgICB3YXJwOiBnLndhcnAsXG4gICAgICAgICAgICAgICAgc3dpcmw6IGNsYW1wKGcuc3dpcmwgKyBraWNrLnN3aXJsLCAwLCAxKSxcbiAgICAgICAgICAgICAgICByaXBwbGU6IGNsYW1wKGcucmlwcGxlICsga2ljay5yaXBwbGUsIDAsIDEpLFxuICAgICAgICAgICAgICAgIHpvb206IGNsYW1wKGcuem9vbSArIGtpY2suem9vbSwgMCwgMSksXG4gICAgICAgICAgICAgICAga2FsZWlkbzogZy5rYWxlaWRvLFxuICAgICAgICAgICAgICAgIG1pcnJvcjogZy5taXJyb3IsXG4gICAgICAgICAgICAgICAgY2hyb21hOiBjbGFtcChnLmNocm9tYSArIGtpY2suY2hyb21hLCAwLCAxKSxcbiAgICAgICAgICAgICAgICBodWVPcmJpdDogZy5odWVPcmJpdCxcbiAgICAgICAgICAgICAgICBzYXR1cmF0aW9uOiBnLnNhdHVyYXRpb24sXG4gICAgICAgICAgICAgICAgY29udHJhc3Q6IGcuY29udHJhc3QsXG4gICAgICAgICAgICAgICAgc29sYXJpemU6IGcuc29sYXJpemUsXG4gICAgICAgICAgICAgICAgZ3JhaW46IGcuZ3JhaW4sXG4gICAgICAgICAgICAgICAgc2NhbmxpbmVzOiBnLnNjYW5saW5lcyxcbiAgICAgICAgICAgICAgICB2aWduZXR0ZTogZy52aWduZXR0ZSxcbiAgICAgICAgICAgICAgICBzdHJvYmU6IGNsYW1wKGcuc3Ryb2JlICsga2ljay5zdHJvYmUsIDAsIDEpLFxuICAgICAgICAgICAgICAgIGF1ZGlvUmVhY3Q6IGcuYXVkaW9SZWFjdCxcbiAgICAgICAgICAgICAgICBwb2ludGVyRm9yY2U6IGcucG9pbnRlckZvcmNlLFxuICAgICAgICAgICAgICAgIHBvaW50ZXJTaXplOiBnLnBvaW50ZXJTaXplLFxuICAgICAgICAgICAgICAgIHBvaW50ZXJNb2RlOiBnLnBvaW50ZXJNb2RlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBjYW52YXMgPSBjYW52YXNSZWYuY3VycmVudDtcbiAgICAgICAgY29uc3Qgc3RhZ2UgPSBzdGFnZVJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIWNhbnZhcyB8fCAhc3RhZ2UpIHJldHVybjtcblxuICAgICAgICBsZXQgZW5naW5lOiBFbmdpbmVIYW5kbGU7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBlbmdpbmUgPSBjcmVhdGVFbmdpbmUoY2FudmFzKTtcbiAgICAgICAgfSBjYXRjaCAoY2F1c2UpIHtcbiAgICAgICAgICAgIHNldEVuZ2luZUVycm9yKFxuICAgICAgICAgICAgICAgIGNhdXNlIGluc3RhbmNlb2YgRXJyb3JcbiAgICAgICAgICAgICAgICAgICAgPyBjYXVzZS5tZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgIDogXCJXZWJHTCBmYWlsZWQgdG8gc3RhcnRcIixcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZW5naW5lUmVmLmN1cnJlbnQgPSBlbmdpbmU7XG5cbiAgICAgICAgY29uc3QgcmVzaXplID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVjdCA9IHN0YWdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgc3RhZ2VTaXplUmVmLmN1cnJlbnQgPSB7IHdpZHRoOiByZWN0LndpZHRoLCBoZWlnaHQ6IHJlY3QuaGVpZ2h0IH07XG4gICAgICAgICAgICBjb25zdCBsb2NrID0gZXhwb3J0TG9ja1JlZi5jdXJyZW50O1xuICAgICAgICAgICAgaWYgKGxvY2spIHtcbiAgICAgICAgICAgICAgICBlbmdpbmUucmVzaXplKGxvY2sud2lkdGgsIGxvY2suaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBlbmdpbmUuc2V0UGl4ZWxSYXRpb0NhcCgxKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZW5naW5lLnJlc2l6ZShyZWN0LndpZHRoLCByZWN0LmhlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJlc2l6ZSgpO1xuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcihyZXNpemUpO1xuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHN0YWdlKTtcblxuICAgICAgICBsZXQgcmFmID0gMDtcbiAgICAgICAgbGV0IGxhc3QgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgbGV0IHNsb3dTdHJlYWsgPSAwO1xuICAgICAgICBsZXQgZmFzdFN0cmVhayA9IDA7XG4gICAgICAgIGNvbnN0IHRpY2sgPSAobm93OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGR0ID0gTWF0aC5taW4oMC4xLCAobm93IC0gbGFzdCkgLyAxMDAwKTtcbiAgICAgICAgICAgIGxhc3QgPSBub3c7XG5cbiAgICAgICAgICAgIGNvbnN0IGFuYWx5c2VyID0gYW5hbHlzZXJSZWYuY3VycmVudDtcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSAwO1xuICAgICAgICAgICAgaWYgKGFuYWx5c2VyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNwZWN0cnVtUmVmLmN1cnJlbnQubGVuZ3RoICE9PSBhbmFseXNlci5mcmVxdWVuY3lCaW5Db3VudCkge1xuICAgICAgICAgICAgICAgICAgICBzcGVjdHJ1bVJlZi5jdXJyZW50ID0gbmV3IFVpbnQ4QXJyYXkoXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmFseXNlci5mcmVxdWVuY3lCaW5Db3VudCxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYW5hbHlzZXIuZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEoc3BlY3RydW1SZWYuY3VycmVudCk7XG4gICAgICAgICAgICAgICAgY29uc3QgYmlucyA9IHNwZWN0cnVtUmVmLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgbGV0IGJhc3MgPSAwO1xuICAgICAgICAgICAgICAgIGxldCB0b3RhbCA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiaW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvdGFsICs9IGJpbnNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChpIDwgMTApIGJhc3MgKz0gYmluc1tpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gTWF0aC5taW4oXG4gICAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAgICgoYmFzcyAvIDEwKSAqIDIgKyB0b3RhbCAvIGJpbnMubGVuZ3RoKSAvIDMgLyAxNDgsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFmcm96ZW5SZWYuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIHRpbWVSZWYuY3VycmVudCArPSBkdCAqIHNjZW5lUmVmLmN1cnJlbnQuZ2xvYmFsLnNwZWVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBtZWRpYUxldmVsID0gc3luY0xpdmVNZWRpYVRleHR1cmVzKGVuZ2luZSwgdGltZVJlZi5jdXJyZW50KTtcbiAgICAgICAgICAgIHRhcmdldCA9IE1hdGgubWF4KHRhcmdldCwgbWVkaWFMZXZlbCk7XG4gICAgICAgICAgICBhdWRpb0xldmVsUmVmLmN1cnJlbnQgKz0gKHRhcmdldCAtIGF1ZGlvTGV2ZWxSZWYuY3VycmVudCkgKiAwLjI4O1xuXG4gICAgICAgICAgICAvLyBQZXJjdXNzaXZlIHBsYXktbW9kZSBraWNrcyBmYWRlIG91dCBvbiB0aGVpciBvd24uXG4gICAgICAgICAgICBjb25zdCBraWNrID0ga2lja1JlZi5jdXJyZW50O1xuICAgICAgICAgICAgY29uc3Qga2lja0RlY2F5ID0gTWF0aC5leHAoLWR0ICogNC41KTtcbiAgICAgICAgICAgIGtpY2suem9vbSAqPSBraWNrRGVjYXk7XG4gICAgICAgICAgICBraWNrLnN0cm9iZSAqPSBraWNrRGVjYXk7XG4gICAgICAgICAgICBraWNrLmNocm9tYSAqPSBraWNrRGVjYXk7XG4gICAgICAgICAgICBraWNrLnJpcHBsZSAqPSBraWNrRGVjYXk7XG4gICAgICAgICAgICBraWNrLnN3aXJsICo9IGtpY2tEZWNheTtcblxuICAgICAgICAgICAgLy8gQWRhcHRpdmUgcXVhbGl0eTogZHJvcCBpbnRlcm5hbCByZXNvbHV0aW9uIHdoZW4gZnJhbWVzIHJ1biBzbG93LFxuICAgICAgICAgICAgLy8gY3JlZXAgYmFjayB1cCB3aGVuIHRoZXJlIGlzIGhlYWRyb29tLiBTa2lwIHdoaWxlIGV4cG9ydC1sb2NrZWQuXG4gICAgICAgICAgICBpZiAoIWV4cG9ydExvY2tSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChkdCA+IDAuMDI0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNsb3dTdHJlYWsrKztcbiAgICAgICAgICAgICAgICAgICAgZmFzdFN0cmVhayA9IDA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkdCA8IDAuMDE0KSB7XG4gICAgICAgICAgICAgICAgICAgIGZhc3RTdHJlYWsrKztcbiAgICAgICAgICAgICAgICAgICAgc2xvd1N0cmVhayA9IDA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2xvd1N0cmVhayA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGZhc3RTdHJlYWsgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc2xvd1N0cmVhayA+IDMwICYmIHF1YWxpdHlSZWYuY3VycmVudCA+IDAuOSkge1xuICAgICAgICAgICAgICAgICAgICBxdWFsaXR5UmVmLmN1cnJlbnQgPSBNYXRoLm1heChcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuOSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1YWxpdHlSZWYuY3VycmVudCAtIDAuMixcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgZW5naW5lLnNldFBpeGVsUmF0aW9DYXAocXVhbGl0eVJlZi5jdXJyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgc2xvd1N0cmVhayA9IDA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmYXN0U3RyZWFrID4gNjAwICYmIHF1YWxpdHlSZWYuY3VycmVudCA8IDEuNSkge1xuICAgICAgICAgICAgICAgICAgICBxdWFsaXR5UmVmLmN1cnJlbnQgPSBNYXRoLm1pbihcbiAgICAgICAgICAgICAgICAgICAgICAgIDEuNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1YWxpdHlSZWYuY3VycmVudCArIDAuMixcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgZW5naW5lLnNldFBpeGVsUmF0aW9DYXAocXVhbGl0eVJlZi5jdXJyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgZmFzdFN0cmVhayA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbmdpbmUucmVuZGVyKGJ1aWxkRnJhbWUoKSk7XG4gICAgICAgICAgICByYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGljayk7XG4gICAgICAgIH07XG4gICAgICAgIHJhZiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aWNrKTtcblxuICAgICAgICAvLyBSZXN0b3JlIHRoZSBsYXN0IHdvcmtpbmcgc2NlbmUuXG4gICAgICAgIGNvbnN0IHNhdmVkID0gbG9hZEF1dG9zYXZlKCk7XG4gICAgICAgIGlmIChzYXZlZCkge1xuICAgICAgICAgICAgc2V0U2NlbmUoc2F2ZWQpO1xuICAgICAgICAgICAgc2NlbmVSZWYuY3VycmVudCA9IHNhdmVkO1xuICAgICAgICAgICAgdm9pZCBoeWRyYXRlU2NlbmVJbWFnZXMoc2F2ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJhZik7XG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICBkaXNwb3NlQWxsTWVkaWFSdW50aW1lcygpO1xuICAgICAgICAgICAgZW5naW5lLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIGVuZ2luZVJlZi5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICAgIH0sIFtdKTtcblxuICAgIC8vIEF1dG9zYXZlIChkZWJvdW5jZWQpXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgdGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBzYXZlQXV0b3NhdmUoc2NlbmUpLCAzNTApO1xuICAgICAgICByZXR1cm4gKCkgPT4gd2luZG93LmNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgfSwgW3NjZW5lXSk7XG5cbiAgICAvLyBVbmRvIGhpc3RvcnkgKGRlYm91bmNlZCBcdTIwMTQgY29hbGVzY2VzIHNsaWRlciBkcmFncyBhbmQga2V5IHJpZmZzIGludG8gb25lIGVudHJ5KVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChoaXN0b3J5U2tpcFJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICBoaXN0b3J5U2tpcFJlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBoaXN0b3J5ID0gaGlzdG9yeVJlZi5jdXJyZW50O1xuICAgICAgICAgICAgY29uc3Qgc25hcHNob3QgPSBlbmNvZGVTY2VuZShzY2VuZSk7XG4gICAgICAgICAgICBpZiAoaGlzdG9yeS5zdGFja1toaXN0b3J5LmluZGV4XSA9PT0gc25hcHNob3QpIHJldHVybjtcbiAgICAgICAgICAgIGhpc3Rvcnkuc3RhY2sgPSBoaXN0b3J5LnN0YWNrLnNsaWNlKDAsIGhpc3RvcnkuaW5kZXggKyAxKTtcbiAgICAgICAgICAgIGhpc3Rvcnkuc3RhY2sucHVzaChzbmFwc2hvdCk7XG4gICAgICAgICAgICBpZiAoaGlzdG9yeS5zdGFjay5sZW5ndGggPiA4MCkgaGlzdG9yeS5zdGFjay5zaGlmdCgpO1xuICAgICAgICAgICAgaGlzdG9yeS5pbmRleCA9IGhpc3Rvcnkuc3RhY2subGVuZ3RoIC0gMTtcbiAgICAgICAgfSwgNDAwKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5jbGVhclRpbWVvdXQodGltZXIpO1xuICAgIH0sIFtzY2VuZV0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdHJhY2sgb2YgbWljU3RyZWFtUmVmLmN1cnJlbnQ/LmdldFRyYWNrcygpID8/IFtdKVxuICAgICAgICAgICAgICAgIHRyYWNrLnN0b3AoKTtcbiAgICAgICAgICAgIGlmIChyZWNvcmRlclJlZi5jdXJyZW50Py5zdGF0ZSA9PT0gXCJyZWNvcmRpbmdcIilcbiAgICAgICAgICAgICAgICByZWNvcmRlclJlZi5jdXJyZW50LnN0b3AoKTtcbiAgICAgICAgICAgIHZvaWQgYXVkaW9Db250ZXh0UmVmLmN1cnJlbnQ/LmNsb3NlKCk7XG4gICAgICAgIH07XG4gICAgfSwgW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgc3luYyA9ICgpID0+XG4gICAgICAgICAgICBzZXRGdWxsc2NyZWVuKGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50ID09PSBzdGFnZVJlZi5jdXJyZW50KTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZ1bGxzY3JlZW5jaGFuZ2VcIiwgc3luYyk7XG4gICAgICAgIHJldHVybiAoKSA9PiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiZnVsbHNjcmVlbmNoYW5nZVwiLCBzeW5jKTtcbiAgICB9LCBbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwidmF1ZGlvLTJcIjtcbiAgICAgICAgY29uc3QgZmF2aWNvbiA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDMyIDMyXCI+XG4gIDxyZWN0IHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIGZpbGw9XCIjMDgwODBhXCIvPlxuICA8cGF0aCBkPVwiTTUgOC41IDIzLjUgNS41IDI2LjUgMjMuNSA4IDI2LjVaXCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjNmU2YzY4XCIgc3Ryb2tlLXdpZHRoPVwiMS4yXCIvPlxuICA8cGF0aCBkPVwiTTQgNy41IDI0LjUgNC41IDI3LjUgMjQuNSA3IDI3LjVaXCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjZThlNmUwXCIgc3Ryb2tlLXdpZHRoPVwiMS43XCIvPlxuICA8cGF0aCBkPVwiTTEwIDIyLjUgMjEuNSA5LjVcIiBzdHJva2U9XCIjZThlNmUwXCIgc3Ryb2tlLXdpZHRoPVwiMi40XCIgc3Ryb2tlLWxpbmVjYXA9XCJzcXVhcmVcIi8+XG4gIDxwYXRoIGQ9XCJNMTEuMiAyMi41IDIyLjcgOS41XCIgc3Ryb2tlPVwiI2E4Nzg4MFwiIHN0cm9rZS13aWR0aD1cIjEuMVwiIHN0cm9rZS1saW5lY2FwPVwic3F1YXJlXCIgb3BhY2l0eT1cIi44NVwiLz5cbiAgPHJlY3QgeD1cIjIwLjVcIiB5PVwiMjAuNVwiIHdpZHRoPVwiMy4yXCIgaGVpZ2h0PVwiMy4yXCIgZmlsbD1cIiNlOGU2ZTBcIi8+XG4gIDxyZWN0IHg9XCI2LjVcIiB5PVwiNi41XCIgd2lkdGg9XCIyLjJcIiBoZWlnaHQ9XCIyLjJcIiBmaWxsPVwiIzZlNmM2OFwiLz5cbjwvc3ZnPmA7XG4gICAgICAgIGNvbnN0IGxpbmsgPVxuICAgICAgICAgICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgJ2xpbmtbcmVsPVwiaWNvblwiXScsXG4gICAgICAgICAgICApIGFzIEhUTUxMaW5rRWxlbWVudCB8IG51bGwpID8/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuICAgICAgICBsaW5rLnJlbCA9IFwiaWNvblwiO1xuICAgICAgICBsaW5rLnR5cGUgPSBcImltYWdlL3N2Zyt4bWxcIjtcbiAgICAgICAgbGluay5ocmVmID0gYGRhdGE6aW1hZ2Uvc3ZnK3htbCwke2VuY29kZVVSSUNvbXBvbmVudChmYXZpY29uKX1gO1xuICAgICAgICBpZiAoIWxpbmsucGFyZW50Tm9kZSkgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICB9LCBbXSk7XG5cbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBrZXlib2FyZCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3Qgb25LZXlEb3duID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQgfCBudWxsO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHRhcmdldCAmJlxuICAgICAgICAgICAgICAgICh0YXJnZXQudGFnTmFtZSA9PT0gXCJJTlBVVFwiIHx8XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC50YWdOYW1lID09PSBcIlRFWFRBUkVBXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmlzQ29udGVudEVkaXRhYmxlKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgY29uc3QgY29tbWFuZCA9IGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleTtcbiAgICAgICAgICAgIGlmIChjb21tYW5kKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hvcnRjdXQgPSBldmVudC5rZXkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICBpZiAoc2hvcnRjdXQgPT09IFwielwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5zaGlmdEtleSkgcmVkb1NjZW5lKCk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgdW5kb1NjZW5lKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzaG9ydGN1dCA9PT0gXCJ5XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVkb1NjZW5lKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJUYWJcIikge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgc2V0VWlIaWRkZW4oKHByZXZpb3VzKSA9PiAhcHJldmlvdXMpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChoZWxwT3BlblJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIiB8fCBldmVudC5rZXkgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIHNldEhlbHBPcGVuKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHNldEhlbHBPcGVuKHRydWUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiIFwiKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBzZXRGcm96ZW4oKHByZXZpb3VzKSA9PiAhcHJldmlvdXMpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHN0YWdlTW9kZVJlZi5jdXJyZW50ID09PSBcInBsYXlcIikge1xuICAgICAgICAgICAgICAgIGhhbmRsZVBsYXlLZXkoZXZlbnQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qga2V5ID0gZXZlbnQua2V5LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSBcInZcIikgc2V0U3RhZ2VNb2RlKFwiYXJyYW5nZVwiKTtcbiAgICAgICAgICAgIGlmIChrZXkgPT09IFwicFwiKSBzZXRTdGFnZU1vZGUoXCJwbGF5XCIpO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIChldmVudC5rZXkgPT09IFwiRGVsZXRlXCIgfHwgZXZlbnQua2V5ID09PSBcIkJhY2tzcGFjZVwiKSAmJlxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSWRcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlTGF5ZXIoc2VsZWN0ZWRJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRJZCAmJiBldmVudC5rZXkuc3RhcnRzV2l0aChcIkFycm93XCIpKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGVwID0gZXZlbnQuc2hpZnRLZXkgPyAwLjA1IDogMC4wMTtcbiAgICAgICAgICAgICAgICBjb25zdCBsYXllciA9IHNjZW5lUmVmLmN1cnJlbnQubGF5ZXJzLmZpbmQoXG4gICAgICAgICAgICAgICAgICAgIChsKSA9PiBsLmlkID09PSBzZWxlY3RlZElkLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgaWYgKCFsYXllcikgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGNvbnN0IGR4ID1cbiAgICAgICAgICAgICAgICAgICAgZXZlbnQua2V5ID09PSBcIkFycm93TGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IC1zdGVwXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGV2ZW50LmtleSA9PT0gXCJBcnJvd1JpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzdGVwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogMDtcbiAgICAgICAgICAgICAgICBjb25zdCBkeSA9XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmtleSA9PT0gXCJBcnJvd0Rvd25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyAtc3RlcFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBldmVudC5rZXkgPT09IFwiQXJyb3dVcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gc3RlcFxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IDA7XG4gICAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJGeChzZWxlY3RlZElkLCB7XG4gICAgICAgICAgICAgICAgICAgIHg6IGNsYW1wKGxheWVyLmZ4LnggKyBkeCwgLTMsIDMpLFxuICAgICAgICAgICAgICAgICAgICB5OiBjbGFtcChsYXllci5meC55ICsgZHksIC0zLCAzKSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIG9uS2V5RG93bik7XG4gICAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgb25LZXlEb3duKTtcbiAgICB9LCBbc2VsZWN0ZWRJZF0pO1xuXG4gICAgLy8gUGFzdGUgZmlsZXNcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBvblBhc3RlID0gKGV2ZW50OiBDbGlwYm9hcmRFdmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmlsZXM6IEZpbGVbXSA9IFtdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGV2ZW50LmNsaXBib2FyZERhdGE/Lml0ZW1zID8/IFtdKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0ua2luZCAhPT0gXCJmaWxlXCIpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBpdGVtLmdldEFzRmlsZSgpO1xuICAgICAgICAgICAgICAgIGlmIChmaWxlKSBmaWxlcy5wdXNoKGZpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZpbGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdm9pZCBpbXBvcnRGaWxlcyhmaWxlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicGFzdGVcIiwgb25QYXN0ZSk7XG4gICAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBhc3RlXCIsIG9uUGFzdGUpO1xuICAgIH0sIFtdKTtcblxuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHBsYXkgcGVyZm9ybWFuY2UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgZnVuY3Rpb24gYWRkS2ljayhwYXRjaDogUGFydGlhbDxLaWNrU3RhdGU+KSB7XG4gICAgICAgIGNvbnN0IGtpY2sgPSBraWNrUmVmLmN1cnJlbnQ7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHBhdGNoKSBhcyAoa2V5b2YgS2lja1N0YXRlKVtdKSB7XG4gICAgICAgICAgICBraWNrW2tleV0gPSBNYXRoLm1pbigwLjksIGtpY2tba2V5XSArIChwYXRjaFtrZXldID8/IDApKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0ZXBHbG9iYWwocGFyYW06IGtleW9mIEdsb2JhbEZ4LCBkZWx0YTogbnVtYmVyKSB7XG4gICAgICAgIHNldFNjZW5lKChwcmV2aW91cykgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBwcmV2aW91cy5nbG9iYWxbcGFyYW1dO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJudW1iZXJcIikgcmV0dXJuIHByZXZpb3VzO1xuICAgICAgICAgICAgY29uc3QgbWF4ID1cbiAgICAgICAgICAgICAgICBwYXJhbSA9PT0gXCJzYXR1cmF0aW9uXCIgfHxcbiAgICAgICAgICAgICAgICBwYXJhbSA9PT0gXCJjb250cmFzdFwiIHx8XG4gICAgICAgICAgICAgICAgcGFyYW0gPT09IFwic3BlZWRcIlxuICAgICAgICAgICAgICAgICAgICA/IDJcbiAgICAgICAgICAgICAgICAgICAgOiAxO1xuICAgICAgICAgICAgY29uc3QgbWluID0gcGFyYW0gPT09IFwiZmJab29tXCIgfHwgcGFyYW0gPT09IFwiZmJSb3RhdGVcIiA/IC0xIDogMDtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4ucHJldmlvdXMsXG4gICAgICAgICAgICAgICAgZ2xvYmFsOiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnByZXZpb3VzLmdsb2JhbCxcbiAgICAgICAgICAgICAgICAgICAgW3BhcmFtXTogY2xhbXAodmFsdWUgKyBkZWx0YSwgbWluLCBtYXgpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwbGF5Tm90ZShpbmRleDogbnVtYmVyLCBwYWludEJhY2tncm91bmQ6IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc3QgY291bnQgPSBQTEFZX1BJQU5PLmxlbmd0aDtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBjb3VudCA+IDEgPyBpbmRleCAvIChjb3VudCAtIDEpIDogMDtcbiAgICAgICAgY29uc3QgaHVlRGVnID0gTWF0aC5yb3VuZCgoaW5kZXggLyBjb3VudCkgKiAzNjApO1xuICAgICAgICBpZiAocGFpbnRCYWNrZ3JvdW5kIHx8IHNjZW5lUmVmLmN1cnJlbnQubGF5ZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgc2V0U2NlbmUoKHByZXZpb3VzKSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnByZXZpb3VzLFxuICAgICAgICAgICAgICAgIGdsb2JhbDoge1xuICAgICAgICAgICAgICAgICAgICAuLi5wcmV2aW91cy5nbG9iYWwsXG4gICAgICAgICAgICAgICAgICAgIGJnQTogaHNsVG9IZXgoaHVlRGVnLCAwLjUsIDAuMDkpLFxuICAgICAgICAgICAgICAgICAgICBiZ0I6IGhzbFRvSGV4KChodWVEZWcgKyA0NSkgJSAzNjAsIDAuNTUsIDAuMyksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGh1ZSA9IGluZGV4IC8gY291bnQ7XG4gICAgICAgICAgICBzZXRTY2VuZSgocHJldmlvdXMpID0+ICh7XG4gICAgICAgICAgICAgICAgLi4ucHJldmlvdXMsXG4gICAgICAgICAgICAgICAgbGF5ZXJzOiBwcmV2aW91cy5sYXllcnMubWFwKChsYXllcikgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgLi4ubGF5ZXIsXG4gICAgICAgICAgICAgICAgICAgIGZ4OiB7IC4uLmxheWVyLmZ4LCBodWUgfSxcbiAgICAgICAgICAgICAgICB9KSksXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTG93IG5vdGVzIHRodW1wLCBoaWdoIG5vdGVzIHNwYXJrbGUuXG4gICAgICAgIGFkZEtpY2soe1xuICAgICAgICAgICAgem9vbTogMC4xNSAqICgxIC0gcG9zaXRpb24pLFxuICAgICAgICAgICAgcmlwcGxlOiAwLjA4LFxuICAgICAgICAgICAgY2hyb21hOiAwLjA1ICsgMC4xMyAqIHBvc2l0aW9uLFxuICAgICAgICAgICAgc3Ryb2JlOiAwLjEgKiBwb3NpdGlvbixcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RyaWtlTGF5ZXIoaW5kZXg6IG51bWJlciwgcmVzZXQ6IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc3QgbGF5ZXIgPSBzY2VuZVJlZi5jdXJyZW50LmxheWVyc1tpbmRleF07XG4gICAgICAgIGlmICghbGF5ZXIpIHJldHVybjtcbiAgICAgICAgcmVwbGFjZUxheWVyRngoXG4gICAgICAgICAgICBsYXllci5pZCxcbiAgICAgICAgICAgIHJlc2V0ID8gcmVzZXRMYXllckZ4RWZmZWN0cyhsYXllci5meCkgOiByYW5kb21MYXllckZ4KGxheWVyLmZ4KSxcbiAgICAgICAgKTtcbiAgICAgICAgc2V0U2VsZWN0ZWRJZChsYXllci5pZCk7XG4gICAgICAgIGFkZEtpY2soeyByaXBwbGU6IDAuMTQsIHN0cm9iZTogMC4wNiB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3YXNoV29ybGQoKSB7XG4gICAgICAgIHNldFNjZW5lKChwcmV2aW91cykgPT4gKHtcbiAgICAgICAgICAgIC4uLnByZXZpb3VzLFxuICAgICAgICAgICAgZ2xvYmFsOiB7XG4gICAgICAgICAgICAgICAgLi4uREVGQVVMVF9HTE9CQUxfRlgsXG4gICAgICAgICAgICAgICAgYmdNb2RlOiBwcmV2aW91cy5nbG9iYWwuYmdNb2RlLFxuICAgICAgICAgICAgICAgIGJnQTogcHJldmlvdXMuZ2xvYmFsLmJnQSxcbiAgICAgICAgICAgICAgICBiZ0I6IHByZXZpb3VzLmdsb2JhbC5iZ0IsXG4gICAgICAgICAgICAgICAgYXVkaW9SZWFjdDogcHJldmlvdXMuZ2xvYmFsLmF1ZGlvUmVhY3QsXG4gICAgICAgICAgICAgICAgcG9pbnRlckZvcmNlOiBwcmV2aW91cy5nbG9iYWwucG9pbnRlckZvcmNlLFxuICAgICAgICAgICAgICAgIHBvaW50ZXJTaXplOiBwcmV2aW91cy5nbG9iYWwucG9pbnRlclNpemUsXG4gICAgICAgICAgICAgICAgcG9pbnRlck1vZGU6IHByZXZpb3VzLmdsb2JhbC5wb2ludGVyTW9kZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pKTtcbiAgICAgICAgZW5naW5lUmVmLmN1cnJlbnQ/LmNsZWFyRmVlZGJhY2soKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVQbGF5S2V5KGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGNvZGUgPSBldmVudC5jb2RlO1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgICAgICBzZXRTdGFnZU1vZGUoXCJhcnJhbmdlXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJlc2V0SW5kZXggPSBQTEFZX1BSRVNFVF9DT0RFUy5pbmRleE9mKGNvZGUpO1xuICAgICAgICBpZiAocHJlc2V0SW5kZXggPj0gMCAmJiBwcmVzZXRJbmRleCA8IFdPUkxEX1BSRVNFVFMubGVuZ3RoKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKGV2ZW50LnJlcGVhdCkgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3QgcHJlc2V0ID0gV09STERfUFJFU0VUU1twcmVzZXRJbmRleF07XG4gICAgICAgICAgICB1cGRhdGVHbG9iYWwocHJlc2V0Lmdsb2JhbCk7XG4gICAgICAgICAgICBlbmdpbmVSZWYuY3VycmVudD8uY2xlYXJGZWVkYmFjaygpO1xuICAgICAgICAgICAgYWRkS2ljayh7IHN0cm9iZTogMC4yMiwgem9vbTogMC4wOCB9KTtcbiAgICAgICAgICAgIHNob3dUb2FzdChgJHtwcmVzZXQuY29kZX0gXHUwMEI3ICR7cHJlc2V0Lm5hbWV9YCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmeEtleSA9IFBMQVlfRlhfS0VZUy5maW5kKChpdGVtKSA9PiBpdGVtLmNvZGUgPT09IGNvZGUpO1xuICAgICAgICBpZiAoZnhLZXkpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzdGVwR2xvYmFsKGZ4S2V5LnBhcmFtLCBldmVudC5zaGlmdEtleSA/IC0wLjA4IDogMC4wOCk7XG4gICAgICAgICAgICBhZGRLaWNrKHsgY2hyb21hOiAwLjA0LCBzdHJvYmU6IDAuMDUgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29kZSA9PT0gXCJCcmFja2V0TGVmdFwiIHx8IGNvZGUgPT09IFwiQnJhY2tldFJpZ2h0XCIpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzdGVwR2xvYmFsKFwic3BlZWRcIiwgY29kZSA9PT0gXCJCcmFja2V0UmlnaHRcIiA/IDAuMSA6IC0wLjEpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2RlID09PSBcIkJhY2tzbGFzaFwiKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc3RlcEdsb2JhbChcInNvbGFyaXplXCIsIGV2ZW50LnNoaWZ0S2V5ID8gLTAuMTUgOiAwLjE1KTtcbiAgICAgICAgICAgIGFkZEtpY2soeyBzdHJvYmU6IDAuMSB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5vdGVJbmRleCA9IFBMQVlfUElBTk8uZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLmNvZGUgPT09IGNvZGUpO1xuICAgICAgICBpZiAobm90ZUluZGV4ID49IDApIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBwbGF5Tm90ZShub3RlSW5kZXgsIGV2ZW50LnNoaWZ0S2V5KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxheWVySW5kZXggPSBQTEFZX0xBWUVSX0tFWVMuZmluZEluZGV4KFxuICAgICAgICAgICAgKGl0ZW0pID0+IGl0ZW0uY29kZSA9PT0gY29kZSxcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGxheWVySW5kZXggPj0gMCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmIChldmVudC5yZXBlYXQpIHJldHVybjtcbiAgICAgICAgICAgIHN0cmlrZUxheWVyKGxheWVySW5kZXgsIGV2ZW50LnNoaWZ0S2V5KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb2RlID09PSBcIkJhY2tzcGFjZVwiKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKGV2ZW50LnJlcGVhdCkgcmV0dXJuO1xuICAgICAgICAgICAgd2FzaFdvcmxkKCk7XG4gICAgICAgICAgICBzaG93VG9hc3QoXCJXYXNoZWQgdGhlIHdvcmxkIGNsZWFuXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV2ZW50LmtleS5zdGFydHNXaXRoKFwiQXJyb3dcIikpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkFycm93VXBcIikgc3RlcEdsb2JhbChcInNhdHVyYXRpb25cIiwgMC4wOCk7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkFycm93RG93blwiKSBzdGVwR2xvYmFsKFwic2F0dXJhdGlvblwiLCAtMC4wOCk7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkFycm93UmlnaHRcIikgc3RlcEdsb2JhbChcImh1ZU9yYml0XCIsIDAuMDYpO1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJBcnJvd0xlZnRcIikgc3RlcEdsb2JhbChcImh1ZU9yYml0XCIsIC0wLjA2KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0YW1wVGFwKHU6IG51bWJlciwgdjogbnVtYmVyLCBzdWJ0cmFjdDogYm9vbGVhbikge1xuICAgICAgICBjb25zdCBnbG9iYWwgPSBzY2VuZVJlZi5jdXJyZW50Lmdsb2JhbDtcbiAgICAgICAgY29uc3QgbW9kZSA9IE1hdGgucm91bmQoZ2xvYmFsLnBvaW50ZXJNb2RlKTtcbiAgICAgICAgY29uc3QgcmVhY2ggPSBNYXRoLm1pbigxLCBNYXRoLmh5cG90KHUgLSAwLjUsIHYgLSAwLjUpIC8gMC42Mik7XG4gICAgICAgIGNvbnN0IHN0cmVuZ3RoID0gKDAuMDUgKyAwLjEzICogcmVhY2gpICogKHN1YnRyYWN0ID8gLTEgOiAxKTtcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBzdGFnZVNpemVSZWYuY3VycmVudDtcbiAgICAgICAgY29uc3QgYXNwZWN0ID0gTWF0aC5tYXgoMC4wNSwgd2lkdGggLyBNYXRoLm1heCgxLCBoZWlnaHQpKTtcbiAgICAgICAgY29uc3QgaGl0ID0gaGl0TGF5ZXIoKHUgLSAwLjUpICogYXNwZWN0LCAwLjUgLSB2KTtcbiAgICAgICAgaWYgKGhpdCkge1xuICAgICAgICAgICAgaWYgKG1vZGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAvLyBHcmF2aXR5IHBpbmNoZXMgdGhlIGxheWVyIGlud2FyZC5cbiAgICAgICAgICAgICAgICB1cGRhdGVMYXllckZ4KGhpdC5pZCwge1xuICAgICAgICAgICAgICAgICAgICBidWxnZTogY2xhbXAoaGl0LmZ4LmJ1bGdlIC0gc3RyZW5ndGggKiAxLjQsIC0xLCAxKSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyYW0gPVxuICAgICAgICAgICAgICAgICAgICBtb2RlID09PSAwID8gXCJzd2lybFwiIDogbW9kZSA9PT0gMiA/IFwiY2hyb21hXCIgOiBcIndhcnBcIjtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50ID0gKGhpdC5meCBhcyB1bmtub3duIGFzIFJlY29yZDxzdHJpbmcsIG51bWJlcj4pW1xuICAgICAgICAgICAgICAgICAgICBwYXJhbVxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJGeChoaXQuaWQsIHtcbiAgICAgICAgICAgICAgICAgICAgW3BhcmFtXTogY2xhbXAoY3VycmVudCArIHN0cmVuZ3RoICogMS4yLCAwLCAxKSxcbiAgICAgICAgICAgICAgICB9IGFzIFBhcnRpYWw8TGF5ZXJGeD4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcGFyYW0gPVxuICAgICAgICAgICAgICAgIG1vZGUgPT09IDBcbiAgICAgICAgICAgICAgICAgICAgPyBcInN3aXJsXCJcbiAgICAgICAgICAgICAgICAgICAgOiBtb2RlID09PSAxXG4gICAgICAgICAgICAgICAgICAgICAgPyBcInpvb21cIlxuICAgICAgICAgICAgICAgICAgICAgIDogbW9kZSA9PT0gMlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcImNocm9tYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwid2FycFwiO1xuICAgICAgICAgICAgc3RlcEdsb2JhbChwYXJhbSwgc3RyZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIGFkZEtpY2soXG4gICAgICAgICAgICBtb2RlID09PSAwXG4gICAgICAgICAgICAgICAgPyB7IHN3aXJsOiAwLjEyIH1cbiAgICAgICAgICAgICAgICA6IG1vZGUgPT09IDFcbiAgICAgICAgICAgICAgICAgID8geyB6b29tOiAwLjEyIH1cbiAgICAgICAgICAgICAgICAgIDogbW9kZSA9PT0gMlxuICAgICAgICAgICAgICAgICAgICA/IHsgY2hyb21hOiAwLjE0IH1cbiAgICAgICAgICAgICAgICAgICAgOiB7IHJpcHBsZTogMC4xMiB9LFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0ZXBLYWxlaWRvKCkge1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gc2NlbmVSZWYuY3VycmVudC5nbG9iYWwua2FsZWlkbztcbiAgICAgICAgY29uc3QgbmV4dCA9XG4gICAgICAgICAgICBjdXJyZW50IDwgMC4xID8gMC4zIDogY3VycmVudCA8IDAuNDUgPyAwLjYgOiBjdXJyZW50IDwgMC43NSA/IDAuODUgOiAwO1xuICAgICAgICB1cGRhdGVHbG9iYWwoeyBrYWxlaWRvOiBuZXh0IH0pO1xuICAgICAgICBhZGRLaWNrKHsgc3dpcmw6IDAuMTYsIHN0cm9iZTogMC4wOCB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzb290aGVQbGF5KHNjZW5lWDogbnVtYmVyLCBzY2VuZVk6IG51bWJlcikge1xuICAgICAgICBjb25zdCBoaXQgPSBoaXRMYXllcihzY2VuZVgsIHNjZW5lWSk7XG4gICAgICAgIGlmIChoaXQpIHtcbiAgICAgICAgICAgIHNldFNjZW5lKChwcmV2aW91cykgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2aW91cyxcbiAgICAgICAgICAgICAgICBsYXllcnM6IHByZXZpb3VzLmxheWVycy5tYXAoKGxheWVyKSA9PlxuICAgICAgICAgICAgICAgICAgICBsYXllci5pZCA9PT0gaGl0LmlkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmxheWVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZng6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5sYXllci5meCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YXJwOiBsYXllci5meC53YXJwICogMC41NSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2lybDogbGF5ZXIuZnguc3dpcmwgKiAwLjU1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpcHBsZTogbGF5ZXIuZngucmlwcGxlICogMC41NSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrYWxlaWRvOiBsYXllci5meC5rYWxlaWRvICogMC41NSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwaXhlbGF0ZTogbGF5ZXIuZngucGl4ZWxhdGUgKiAwLjU1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1bGdlOiBsYXllci5meC5idWxnZSAqIDAuNTUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWlycm9yOiBsYXllci5meC5taXJyb3IgKiAwLjU1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNocm9tYTogbGF5ZXIuZnguY2hyb21hICogMC41NSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogbGF5ZXIsXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzZXRTY2VuZSgocHJldmlvdXMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGcgPSBwcmV2aW91cy5nbG9iYWw7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnByZXZpb3VzLFxuICAgICAgICAgICAgICAgIGdsb2JhbDoge1xuICAgICAgICAgICAgICAgICAgICAuLi5nLFxuICAgICAgICAgICAgICAgICAgICB3YXJwOiBnLndhcnAgKiAwLjcyLFxuICAgICAgICAgICAgICAgICAgICBzd2lybDogZy5zd2lybCAqIDAuNzIsXG4gICAgICAgICAgICAgICAgICAgIHJpcHBsZTogZy5yaXBwbGUgKiAwLjcyLFxuICAgICAgICAgICAgICAgICAgICB6b29tOiBnLnpvb20gKiAwLjcyLFxuICAgICAgICAgICAgICAgICAgICBrYWxlaWRvOiBnLmthbGVpZG8gKiAwLjcyLFxuICAgICAgICAgICAgICAgICAgICBtaXJyb3I6IGcubWlycm9yICogMC43MixcbiAgICAgICAgICAgICAgICAgICAgY2hyb21hOiBnLmNocm9tYSAqIDAuNzIsXG4gICAgICAgICAgICAgICAgICAgIGZlZWRiYWNrOiBnLmZlZWRiYWNrICogMC43MixcbiAgICAgICAgICAgICAgICAgICAgc29sYXJpemU6IGcuc29sYXJpemUgKiAwLjcyLFxuICAgICAgICAgICAgICAgICAgICBzdHJvYmU6IGcuc3Ryb2JlICogMC43MixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdGhyb3dFY2hvKFxuICAgICAgICBnZXN0dXJlOiB7IHN0YXJ0VTogbnVtYmVyOyBzdGFydFY6IG51bWJlcjsgcGF0aDogbnVtYmVyIH0sXG4gICAgICAgIHU6IG51bWJlcixcbiAgICAgICAgdjogbnVtYmVyLFxuICAgICkge1xuICAgICAgICBjb25zdCBkeCA9IHUgLSBnZXN0dXJlLnN0YXJ0VTtcbiAgICAgICAgY29uc3QgbGlmdCA9IGdlc3R1cmUuc3RhcnRWIC0gdjtcbiAgICAgICAgc2V0U2NlbmUoKHByZXZpb3VzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBnID0gcHJldmlvdXMuZ2xvYmFsO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2aW91cyxcbiAgICAgICAgICAgICAgICBnbG9iYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uZyxcbiAgICAgICAgICAgICAgICAgICAgZmJSb3RhdGU6IGNsYW1wKGcuZmJSb3RhdGUgKyBkeCAqIDAuNywgLTEsIDEpLFxuICAgICAgICAgICAgICAgICAgICBmYlpvb206IGNsYW1wKGcuZmJab29tICsgbGlmdCAqIDAuNywgLTEsIDEpLFxuICAgICAgICAgICAgICAgICAgICBmZWVkYmFjazogY2xhbXAoXG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoLm1heChnLmZlZWRiYWNrLCAwLjMpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLm1pbigwLjIsIGdlc3R1cmUucGF0aCAqIDAuMjUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuOTUsXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIHRyYWlsczogY2xhbXAoXG4gICAgICAgICAgICAgICAgICAgICAgICBNYXRoLm1heChnLnRyYWlscywgMC41NSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgubWluKDAuMTUsIGdlc3R1cmUucGF0aCAqIDAuMTIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIDAuOTYsXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICBhZGRLaWNrKHsgem9vbTogMC4xLCBjaHJvbWE6IDAuMDggfSk7XG4gICAgfVxuXG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gc3RhZ2UgaW50ZXJhY3Rpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICBmdW5jdGlvbiBzdGFnZVBvaW50KGV2ZW50OiBQb2ludGVyRXZlbnQpOiB7XG4gICAgICAgIHNjZW5lWDogbnVtYmVyO1xuICAgICAgICBzY2VuZVk6IG51bWJlcjtcbiAgICAgICAgdTogbnVtYmVyO1xuICAgICAgICB2OiBudW1iZXI7XG4gICAgfSB7XG4gICAgICAgIGNvbnN0IHN0YWdlID0gc3RhZ2VSZWYuY3VycmVudDtcbiAgICAgICAgY29uc3QgcmVjdCA9IHN0YWdlXG4gICAgICAgICAgICA/IHN0YWdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgICA6IHsgbGVmdDogMCwgdG9wOiAwLCB3aWR0aDogMSwgaGVpZ2h0OiAxIH07XG4gICAgICAgIGNvbnN0IHUgPSBjbGFtcCgoZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdCkgLyByZWN0LndpZHRoLCAwLCAxKTtcbiAgICAgICAgY29uc3QgdiA9IGNsYW1wKChldmVudC5jbGllbnRZIC0gcmVjdC50b3ApIC8gcmVjdC5oZWlnaHQsIDAsIDEpO1xuICAgICAgICBjb25zdCBhc3BlY3QgPSByZWN0LndpZHRoIC8gTWF0aC5tYXgoMSwgcmVjdC5oZWlnaHQpO1xuICAgICAgICByZXR1cm4geyBzY2VuZVg6ICh1IC0gMC41KSAqIGFzcGVjdCwgc2NlbmVZOiAwLjUgLSB2LCB1LCB2IH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGl0TGF5ZXIoc2NlbmVYOiBudW1iZXIsIHNjZW5lWTogbnVtYmVyKTogU2NlbmVMYXllciB8IG51bGwge1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gc2NlbmVSZWYuY3VycmVudDtcbiAgICAgICAgY29uc3QgaW5mbyA9IGltYWdlSW5mb1JlZi5jdXJyZW50O1xuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHN0YWdlU2l6ZVJlZi5jdXJyZW50O1xuICAgICAgICBjb25zdCBhc3BlY3QgPSBNYXRoLm1heCgwLjA1LCB3aWR0aCAvIE1hdGgubWF4KDEsIGhlaWdodCkpO1xuICAgICAgICBmb3IgKGxldCBpID0gY3VycmVudC5sYXllcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IGxheWVyID0gY3VycmVudC5sYXllcnNbaV07XG4gICAgICAgICAgICBpZiAoIWxheWVyLmZ4LnZpc2libGUpIGNvbnRpbnVlO1xuICAgICAgICAgICAgY29uc3QgbWV0YSA9IGluZm9bbGF5ZXIuaW1hZ2VJZF07XG4gICAgICAgICAgICBjb25zdCBpbWFnZUFzcGVjdCA9XG4gICAgICAgICAgICAgICAgbWV0YSAmJiBtZXRhLndpZHRoID4gMFxuICAgICAgICAgICAgICAgICAgICA/IG1ldGEud2lkdGggLyBNYXRoLm1heCgxLCBtZXRhLmhlaWdodClcbiAgICAgICAgICAgICAgICAgICAgOiAxO1xuICAgICAgICAgICAgY29uc3QgZml0SGVpZ2h0ID0gTWF0aC5taW4oMSwgYXNwZWN0IC8gaW1hZ2VBc3BlY3QpO1xuICAgICAgICAgICAgY29uc3QgZXh0WCA9IChmaXRIZWlnaHQgKiBpbWFnZUFzcGVjdCAqIGxheWVyLmZ4LnNjYWxlKSAvIDI7XG4gICAgICAgICAgICBjb25zdCBleHRZID0gKGZpdEhlaWdodCAqIGxheWVyLmZ4LnNjYWxlKSAvIDI7XG4gICAgICAgICAgICBjb25zdCBhbmdsZSA9ICgtbGF5ZXIuZngucm90YXRpb24gKiBNYXRoLlBJKSAvIDE4MDtcbiAgICAgICAgICAgIGNvbnN0IGR4ID0gc2NlbmVYIC0gbGF5ZXIuZngueDtcbiAgICAgICAgICAgIGNvbnN0IGR5ID0gc2NlbmVZIC0gbGF5ZXIuZngueTtcbiAgICAgICAgICAgIGNvbnN0IHF4ID0gTWF0aC5jb3MoYW5nbGUpICogZHggLSBNYXRoLnNpbihhbmdsZSkgKiBkeTtcbiAgICAgICAgICAgIGNvbnN0IHF5ID0gTWF0aC5zaW4oYW5nbGUpICogZHggKyBNYXRoLmNvcyhhbmdsZSkgKiBkeTtcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhxeCkgPD0gZXh0WCAmJiBNYXRoLmFicyhxeSkgPD0gZXh0WSkgcmV0dXJuIGxheWVyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVBsYXlQb2ludGVyKGV2ZW50OiBQb2ludGVyRXZlbnQsIGRvd246IGJvb2xlYW4pIHtcbiAgICAgICAgY29uc3QgeyB1LCB2IH0gPSBzdGFnZVBvaW50KGV2ZW50KTtcbiAgICAgICAgY29uc3QgeCA9IHU7XG4gICAgICAgIGNvbnN0IHkgPSAxIC0gdjtcbiAgICAgICAgY29uc3Qgbm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIGNvbnN0IGVsYXBzZWQgPSBNYXRoLm1heCg4LCBub3cgLSBsYXN0UG9pbnRlclJlZi5jdXJyZW50LmF0KTtcbiAgICAgICAgcG9pbnRlclJlZi5jdXJyZW50ID0ge1xuICAgICAgICAgICAgeCxcbiAgICAgICAgICAgIHksXG4gICAgICAgICAgICB2ZWxvY2l0eVg6ICh4IC0gbGFzdFBvaW50ZXJSZWYuY3VycmVudC54KSAqICgxNiAvIGVsYXBzZWQpLFxuICAgICAgICAgICAgdmVsb2NpdHlZOiAoeSAtIGxhc3RQb2ludGVyUmVmLmN1cnJlbnQueSkgKiAoMTYgLyBlbGFwc2VkKSxcbiAgICAgICAgICAgIGRvd24sXG4gICAgICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgIH07XG4gICAgICAgIGxhc3RQb2ludGVyUmVmLmN1cnJlbnQgPSB7IHgsIHksIGF0OiBub3cgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblN0YWdlUG9pbnRlckRvd24oZXZlbnQ6IFBvaW50ZXJFdmVudCkge1xuICAgICAgICAoZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MRWxlbWVudCkuc2V0UG9pbnRlckNhcHR1cmUoZXZlbnQucG9pbnRlcklkKTtcbiAgICAgICAgaWYgKHN0YWdlTW9kZVJlZi5jdXJyZW50ID09PSBcInBsYXlcIikge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gMikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgc2NlbmVYLCBzY2VuZVkgfSA9IHN0YWdlUG9pbnQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIHNvb3RoZVBsYXkoc2NlbmVYLCBzY2VuZVkpO1xuICAgICAgICAgICAgICAgIGFkZEtpY2soeyByaXBwbGU6IDAuMDggfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXBkYXRlUGxheVBvaW50ZXIoZXZlbnQsIHRydWUpO1xuICAgICAgICAgICAgY29uc3QgeyB1LCB2IH0gPSBzdGFnZVBvaW50KGV2ZW50KTtcbiAgICAgICAgICAgIHBsYXlHZXN0dXJlUmVmLmN1cnJlbnQgPSB7XG4gICAgICAgICAgICAgICAgc3RhcnRVOiB1LFxuICAgICAgICAgICAgICAgIHN0YXJ0VjogdixcbiAgICAgICAgICAgICAgICBsYXN0VTogdSxcbiAgICAgICAgICAgICAgICBsYXN0VjogdixcbiAgICAgICAgICAgICAgICBwYXRoOiAwLFxuICAgICAgICAgICAgICAgIGF0OiBwZXJmb3JtYW5jZS5ub3coKSxcbiAgICAgICAgICAgICAgICBzaGlmdDogZXZlbnQuc2hpZnRLZXksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgc2NlbmVYLCBzY2VuZVkgfSA9IHN0YWdlUG9pbnQoZXZlbnQpO1xuICAgICAgICBjb25zdCBoaXQgPSBoaXRMYXllcihzY2VuZVgsIHNjZW5lWSk7XG4gICAgICAgIGlmIChoaXQpIHtcbiAgICAgICAgICAgIHNldFNlbGVjdGVkSWQoaGl0LmlkKTtcbiAgICAgICAgICAgIGRyYWdSZWYuY3VycmVudCA9IHtcbiAgICAgICAgICAgICAgICBsYXllcklkOiBoaXQuaWQsXG4gICAgICAgICAgICAgICAgc3RhcnRYOiBzY2VuZVgsXG4gICAgICAgICAgICAgICAgc3RhcnRZOiBzY2VuZVksXG4gICAgICAgICAgICAgICAgZnhYOiBoaXQuZngueCxcbiAgICAgICAgICAgICAgICBmeFk6IGhpdC5meC55LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFNlbGVjdGVkSWQobnVsbCk7XG4gICAgICAgICAgICBkcmFnUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25TdGFnZVBvaW50ZXJNb3ZlKGV2ZW50OiBQb2ludGVyRXZlbnQpIHtcbiAgICAgICAgaWYgKHN0YWdlTW9kZVJlZi5jdXJyZW50ID09PSBcInBsYXlcIikge1xuICAgICAgICAgICAgdXBkYXRlUGxheVBvaW50ZXIoZXZlbnQsIHBvaW50ZXJSZWYuY3VycmVudC5kb3duKTtcbiAgICAgICAgICAgIGNvbnN0IGdlc3R1cmUgPSBwbGF5R2VzdHVyZVJlZi5jdXJyZW50O1xuICAgICAgICAgICAgaWYgKGdlc3R1cmUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHUsIHYgfSA9IHN0YWdlUG9pbnQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGdlc3R1cmUucGF0aCArPSBNYXRoLmh5cG90KHUgLSBnZXN0dXJlLmxhc3RVLCB2IC0gZ2VzdHVyZS5sYXN0Vik7XG4gICAgICAgICAgICAgICAgZ2VzdHVyZS5sYXN0VSA9IHU7XG4gICAgICAgICAgICAgICAgZ2VzdHVyZS5sYXN0ViA9IHY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFkcmFnUmVmLmN1cnJlbnQpIHJldHVybjtcbiAgICAgICAgY29uc3QgeyBzY2VuZVgsIHNjZW5lWSB9ID0gc3RhZ2VQb2ludChldmVudCk7XG4gICAgICAgIGRyYWdQb2ludFJlZi5jdXJyZW50ID0geyB4OiBzY2VuZVgsIHk6IHNjZW5lWSB9O1xuICAgICAgICAvLyBDb2FsZXNjZSBwb2ludGVyIGV2ZW50cyB0byBvbmUgc3RhdGUgdXBkYXRlIHBlciBmcmFtZS5cbiAgICAgICAgaWYgKGRyYWdSYWZSZWYuY3VycmVudCkgcmV0dXJuO1xuICAgICAgICBkcmFnUmFmUmVmLmN1cnJlbnQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgZHJhZ1JhZlJlZi5jdXJyZW50ID0gMDtcbiAgICAgICAgICAgIGNvbnN0IGRyYWcgPSBkcmFnUmVmLmN1cnJlbnQ7XG4gICAgICAgICAgICBpZiAoIWRyYWcpIHJldHVybjtcbiAgICAgICAgICAgIHVwZGF0ZUxheWVyRngoZHJhZy5sYXllcklkLCB7XG4gICAgICAgICAgICAgICAgeDogY2xhbXAoXG4gICAgICAgICAgICAgICAgICAgIGRyYWcuZnhYICsgZHJhZ1BvaW50UmVmLmN1cnJlbnQueCAtIGRyYWcuc3RhcnRYLFxuICAgICAgICAgICAgICAgICAgICAtMyxcbiAgICAgICAgICAgICAgICAgICAgMyxcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIHk6IGNsYW1wKFxuICAgICAgICAgICAgICAgICAgICBkcmFnLmZ4WSArIGRyYWdQb2ludFJlZi5jdXJyZW50LnkgLSBkcmFnLnN0YXJ0WSxcbiAgICAgICAgICAgICAgICAgICAgLTMsXG4gICAgICAgICAgICAgICAgICAgIDMsXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblN0YWdlUG9pbnRlclVwKGV2ZW50OiBQb2ludGVyRXZlbnQpIHtcbiAgICAgICAgaWYgKHN0YWdlTW9kZVJlZi5jdXJyZW50ID09PSBcInBsYXlcIikge1xuICAgICAgICAgICAgdXBkYXRlUGxheVBvaW50ZXIoZXZlbnQsIGZhbHNlKTtcbiAgICAgICAgICAgIGNvbnN0IGdlc3R1cmUgPSBwbGF5R2VzdHVyZVJlZi5jdXJyZW50O1xuICAgICAgICAgICAgcGxheUdlc3R1cmVSZWYuY3VycmVudCA9IG51bGw7XG4gICAgICAgICAgICBpZiAoIWdlc3R1cmUgfHwgZXZlbnQuYnV0dG9uID09PSAyKSByZXR1cm47XG4gICAgICAgICAgICBjb25zdCBub3cgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgICAgIGNvbnN0IHsgdSwgdiB9ID0gc3RhZ2VQb2ludChldmVudCk7XG4gICAgICAgICAgICBpZiAobm93IC0gZ2VzdHVyZS5hdCA8IDMwMCAmJiBnZXN0dXJlLnBhdGggPCAwLjAyKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vdyAtIGxhc3RUYXBBdFJlZi5jdXJyZW50IDwgMzYwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RUYXBBdFJlZi5jdXJyZW50ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgc3RlcEthbGVpZG8oKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsYXN0VGFwQXRSZWYuY3VycmVudCA9IG5vdztcbiAgICAgICAgICAgICAgICAgICAgc3RhbXBUYXAodSwgdiwgZ2VzdHVyZS5zaGlmdCB8fCBldmVudC5zaGlmdEtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChnZXN0dXJlLnBhdGggPiAwLjAzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3dFY2hvKGdlc3R1cmUsIHUsIHYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGRyYWdSZWYuY3VycmVudCA9IG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25TdGFnZVBvaW50ZXJMZWF2ZSgpIHtcbiAgICAgICAgcG9pbnRlclJlZi5jdXJyZW50ID0ge1xuICAgICAgICAgICAgLi4ucG9pbnRlclJlZi5jdXJyZW50LFxuICAgICAgICAgICAgZG93bjogZmFsc2UsXG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICB9O1xuICAgICAgICBkcmFnUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICBwbGF5R2VzdHVyZVJlZi5jdXJyZW50ID0gbnVsbDtcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBzdGFnZSA9IHN0YWdlUmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmICghc3RhZ2UpIHJldHVybjtcbiAgICAgICAgY29uc3Qgb25XaGVlbCA9IChldmVudDogV2hlZWxFdmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKHN0YWdlTW9kZVJlZi5jdXJyZW50ID09PSBcInBsYXlcIikge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVsdGEgPSBldmVudC5kZWx0YVkgfHwgZXZlbnQuZGVsdGFYO1xuICAgICAgICAgICAgICAgIGlmIChldmVudC5zaGlmdEtleSkgc3RlcEdsb2JhbChcInNhdHVyYXRpb25cIiwgLWRlbHRhICogMC4wMDEyKTtcbiAgICAgICAgICAgICAgICBlbHNlIHN0ZXBHbG9iYWwoXCJodWVPcmJpdFwiLCAtZGVsdGEgKiAwLjAwMDYpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdGFnZU1vZGVSZWYuY3VycmVudCAhPT0gXCJhcnJhbmdlXCIpIHJldHVybjtcbiAgICAgICAgICAgIGNvbnN0IGxheWVySWQgPSBzZWxlY3RlZElkO1xuICAgICAgICAgICAgaWYgKCFsYXllcklkKSByZXR1cm47XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgbGF5ZXIgPSBzY2VuZVJlZi5jdXJyZW50LmxheWVycy5maW5kKChsKSA9PiBsLmlkID09PSBsYXllcklkKTtcbiAgICAgICAgICAgIGlmICghbGF5ZXIpIHJldHVybjtcbiAgICAgICAgICAgIGlmIChldmVudC5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZUxheWVyRngobGF5ZXJJZCwge1xuICAgICAgICAgICAgICAgICAgICByb3RhdGlvbjogbGF5ZXIuZngucm90YXRpb24gKyAoZXZlbnQuZGVsdGFZID4gMCA/IDMgOiAtMyksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHVwZGF0ZUxheWVyRngobGF5ZXJJZCwge1xuICAgICAgICAgICAgICAgICAgICBzY2FsZTogY2xhbXAoXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllci5meC5zY2FsZSAqIE1hdGguZXhwKC1ldmVudC5kZWx0YVkgKiAwLjAwMTYpLFxuICAgICAgICAgICAgICAgICAgICAgICAgMC4wNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDYsXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHN0YWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBvbldoZWVsLCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xuICAgICAgICByZXR1cm4gKCkgPT4gc3RhZ2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIG9uV2hlZWwpO1xuICAgIH0sIFtzZWxlY3RlZElkXSk7XG5cbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gYXVkaW8gLyByZWNvcmQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgIGFzeW5jIGZ1bmN0aW9uIHRvZ2dsZU1pYygpIHtcbiAgICAgICAgaWYgKG1pY0FjdGl2ZSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCB0cmFjayBvZiBtaWNTdHJlYW1SZWYuY3VycmVudD8uZ2V0VHJhY2tzKCkgPz8gW10pXG4gICAgICAgICAgICAgICAgdHJhY2suc3RvcCgpO1xuICAgICAgICAgICAgbWljU3RyZWFtUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICAgICAgYW5hbHlzZXJSZWYuY3VycmVudCA9IG51bGw7XG4gICAgICAgICAgICBhdWRpb0xldmVsUmVmLmN1cnJlbnQgPSAwO1xuICAgICAgICAgICAgc2V0TWljQWN0aXZlKGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qgc3RyZWFtID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoe1xuICAgICAgICAgICAgICAgIGF1ZGlvOiB0cnVlLFxuICAgICAgICAgICAgICAgIHZpZGVvOiBmYWxzZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbWljU3RyZWFtUmVmLmN1cnJlbnQgPSBzdHJlYW07XG4gICAgICAgICAgICBpZiAoIWF1ZGlvQ29udGV4dFJlZi5jdXJyZW50KVxuICAgICAgICAgICAgICAgIGF1ZGlvQ29udGV4dFJlZi5jdXJyZW50ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuICAgICAgICAgICAgYXdhaXQgYXVkaW9Db250ZXh0UmVmLmN1cnJlbnQucmVzdW1lKCk7XG4gICAgICAgICAgICBjb25zdCBhbmFseXNlciA9IGF1ZGlvQ29udGV4dFJlZi5jdXJyZW50LmNyZWF0ZUFuYWx5c2VyKCk7XG4gICAgICAgICAgICBhbmFseXNlci5mZnRTaXplID0gMjU2O1xuICAgICAgICAgICAgYW5hbHlzZXIuc21vb3RoaW5nVGltZUNvbnN0YW50ID0gMC42ODtcbiAgICAgICAgICAgIGF1ZGlvQ29udGV4dFJlZi5jdXJyZW50XG4gICAgICAgICAgICAgICAgLmNyZWF0ZU1lZGlhU3RyZWFtU291cmNlKHN0cmVhbSlcbiAgICAgICAgICAgICAgICAuY29ubmVjdChhbmFseXNlcik7XG4gICAgICAgICAgICBhbmFseXNlclJlZi5jdXJyZW50ID0gYW5hbHlzZXI7XG4gICAgICAgICAgICBzZXRNaWNBY3RpdmUodHJ1ZSk7XG4gICAgICAgICAgICBpZiAoc2NlbmVSZWYuY3VycmVudC5nbG9iYWwuYXVkaW9SZWFjdCA8IDAuMylcbiAgICAgICAgICAgICAgICB1cGRhdGVHbG9iYWwoeyBhdWRpb1JlYWN0OiAwLjcgfSk7XG4gICAgICAgICAgICBzaG93VG9hc3QoXCJNaWMgbGl2ZSBcdTIwMTQgYXVkaW8gZHJpdmVzIHRoZSBzaGFkZXJcIik7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgc2hvd1RvYXN0KFwiTWljcm9waG9uZSB3YXMgYmxvY2tlZFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc3RvcmVMaXZlQ2FudmFzU2l6ZSgpIHtcbiAgICAgICAgY29uc3QgZW5naW5lID0gZW5naW5lUmVmLmN1cnJlbnQ7XG4gICAgICAgIGNvbnN0IHN0YWdlID0gc3RhZ2VSZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCFlbmdpbmUgfHwgIXN0YWdlKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHJlY3QgPSBzdGFnZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgc3RhZ2VTaXplUmVmLmN1cnJlbnQgPSB7IHdpZHRoOiByZWN0LndpZHRoLCBoZWlnaHQ6IHJlY3QuaGVpZ2h0IH07XG4gICAgICAgIGVuZ2luZS5yZXNpemUocmVjdC53aWR0aCwgcmVjdC5oZWlnaHQpO1xuICAgICAgICBlbmdpbmUuc2V0UGl4ZWxSYXRpb0NhcChxdWFsaXR5UmVmLmN1cnJlbnQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFwcGx5RXhwb3J0Q2FudmFzU2l6ZShcbiAgICAgICAgcmVzb2x1dGlvbklkOiBFeHBvcnRSZXNvbHV0aW9uSWQsXG4gICAgICAgIHNjcmVlblNjYWxlID0gMSxcbiAgICApIHtcbiAgICAgICAgY29uc3QgZW5naW5lID0gZW5naW5lUmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmICghZW5naW5lKSByZXR1cm4gbnVsbDtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IHJlc29sdmVFeHBvcnRTaXplKFxuICAgICAgICAgICAgcmVzb2x1dGlvbklkLFxuICAgICAgICAgICAgc3RhZ2VTaXplUmVmLmN1cnJlbnQsXG4gICAgICAgICAgICBzY3JlZW5TY2FsZSxcbiAgICAgICAgKTtcbiAgICAgICAgZXhwb3J0TG9ja1JlZi5jdXJyZW50ID0gc2l6ZTtcbiAgICAgICAgZW5naW5lLnJlc2l6ZShzaXplLndpZHRoLCBzaXplLmhlaWdodCk7XG4gICAgICAgIGVuZ2luZS5zZXRQaXhlbFJhdGlvQ2FwKDEpO1xuICAgICAgICByZXR1cm4gc2l6ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVSZWNvcmRpbmcoKSB7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGNhbnZhc1JlZi5jdXJyZW50O1xuICAgICAgICBjb25zdCBlbmdpbmUgPSBlbmdpbmVSZWYuY3VycmVudDtcbiAgICAgICAgaWYgKCFjYW52YXMgfHwgIWVuZ2luZSkgcmV0dXJuO1xuICAgICAgICBpZiAocmVjb3JkaW5nKSB7XG4gICAgICAgICAgICByZWNvcmRlclJlZi5jdXJyZW50Py5zdG9wKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2l6ZSA9IGFwcGx5RXhwb3J0Q2FudmFzU2l6ZShcbiAgICAgICAgICAgIGV4cG9ydFJlc1JlZi5jdXJyZW50LFxuICAgICAgICAgICAgd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMSxcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKCFzaXplKSByZXR1cm47XG4gICAgICAgIC8vIE9uZSBmcmFtZSBhdCB0aGUgbG9ja2VkIHNpemUgYmVmb3JlIGNhcHR1cmVTdHJlYW0gcmVhZHMgZGltZW5zaW9ucy5cbiAgICAgICAgZW5naW5lLnJlbmRlcihidWlsZEZyYW1lKCkpO1xuICAgICAgICBjb25zdCBzdHJlYW0gPSBjYW52YXMuY2FwdHVyZVN0cmVhbSg2MCk7XG4gICAgICAgIGNvbnN0IG1pbWVUeXBlID0gW1xuICAgICAgICAgICAgXCJ2aWRlby93ZWJtO2NvZGVjcz12cDlcIixcbiAgICAgICAgICAgIFwidmlkZW8vd2VibTtjb2RlY3M9dnA4XCIsXG4gICAgICAgICAgICBcInZpZGVvL3dlYm1cIixcbiAgICAgICAgICAgIFwidmlkZW8vbXA0XCIsXG4gICAgICAgIF0uZmluZCgodHlwZSkgPT4gTWVkaWFSZWNvcmRlci5pc1R5cGVTdXBwb3J0ZWQodHlwZSkpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVjb3JkZXIgPSBuZXcgTWVkaWFSZWNvcmRlcihzdHJlYW0sIHtcbiAgICAgICAgICAgICAgICBtaW1lVHlwZSxcbiAgICAgICAgICAgICAgICB2aWRlb0JpdHNQZXJTZWNvbmQ6IDE4XzAwMF8wMDAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNodW5rc1JlZi5jdXJyZW50ID0gW107XG4gICAgICAgICAgICByZWNvcmRlci5vbmRhdGFhdmFpbGFibGUgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5zaXplKSBjaHVua3NSZWYuY3VycmVudC5wdXNoKGV2ZW50LmRhdGEpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlY29yZGVyLm9uc3RvcCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBleHRlbnNpb24gPSAocmVjb3JkZXIubWltZVR5cGUgfHwgXCJ2aWRlby93ZWJtXCIpLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgICBcIm1wNFwiLFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgPyBcIm1wNFwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJ3ZWJtXCI7XG4gICAgICAgICAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKGNodW5rc1JlZi5jdXJyZW50LCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IHJlY29yZGVyLm1pbWVUeXBlIHx8IFwidmlkZW8vd2VibVwiLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNodW5rc1JlZi5jdXJyZW50ID0gW107XG4gICAgICAgICAgICAgICAgZXhwb3J0TG9ja1JlZi5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgICAgICAgICByZXN0b3JlTGl2ZUNhbnZhc1NpemUoKTtcbiAgICAgICAgICAgICAgICBkb3dubG9hZEJsb2IoYmxvYiwgZXhwb3J0RmlsZW5hbWUoZXh0ZW5zaW9uKSk7XG4gICAgICAgICAgICAgICAgcmVjb3JkZXJSZWYuY3VycmVudCA9IG51bGw7XG4gICAgICAgICAgICAgICAgc2V0UmVjb3JkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZWNvcmRlci5zdGFydCgyNTApO1xuICAgICAgICAgICAgcmVjb3JkZXJSZWYuY3VycmVudCA9IHJlY29yZGVyO1xuICAgICAgICAgICAgc2V0UmVjb3JkaW5nKHRydWUpO1xuICAgICAgICAgICAgc2hvd1RvYXN0KGBSZWNvcmRpbmcgJHtzaXplLndpZHRofVx1MDBENyR7c2l6ZS5oZWlnaHR9YCk7XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgZXhwb3J0TG9ja1JlZi5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgICAgIHJlc3RvcmVMaXZlQ2FudmFzU2l6ZSgpO1xuICAgICAgICAgICAgc2hvd1RvYXN0KFwiUmVjb3JkaW5nIGlzIG5vdCBzdXBwb3J0ZWQgaGVyZVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRvd25sb2FkQmxvYihibG9iOiBCbG9iLCBmaWxlbmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICAgIGNvbnN0IGFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICBhbmNob3IuaHJlZiA9IHVybDtcbiAgICAgICAgYW5jaG9yLmRvd25sb2FkID0gZmlsZW5hbWU7XG4gICAgICAgIGFuY2hvci5jbGljaygpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IFVSTC5yZXZva2VPYmplY3RVUkwodXJsKSwgNDAwMCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXhwb3J0RmlsZW5hbWUoZXh0ZW5zaW9uOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID1cbiAgICAgICAgICAgIGNsZWFuTmFtZShzY2VuZVJlZi5jdXJyZW50Lm5hbWUsIFwidmF1ZGlvLTJcIilcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvW15cXHdcXC1dKy9nLCBcIi1cIilcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvLSsvZywgXCItXCIpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL14tfC0kL2csIFwiXCIpIHx8IFwidmF1ZGlvLTJcIjtcbiAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgICAgY29uc3QgcGFkID0gKG46IG51bWJlcikgPT4gU3RyaW5nKG4pLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICAgICAgY29uc3Qgc3RhbXAgPSBbXG4gICAgICAgICAgICBub3cuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAgIHBhZChub3cuZ2V0TW9udGgoKSArIDEpLFxuICAgICAgICAgICAgcGFkKG5vdy5nZXREYXRlKCkpLFxuICAgICAgICAgICAgXCItXCIsXG4gICAgICAgICAgICBwYWQobm93LmdldEhvdXJzKCkpLFxuICAgICAgICAgICAgcGFkKG5vdy5nZXRNaW51dGVzKCkpLFxuICAgICAgICAgICAgcGFkKG5vdy5nZXRTZWNvbmRzKCkpLFxuICAgICAgICBdLmpvaW4oXCJcIik7XG4gICAgICAgIHJldHVybiBgJHtwcm9qZWN0fS0ke3N0YW1wfS4ke2V4dGVuc2lvbn1gO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGV4cG9ydFBuZygpIHtcbiAgICAgICAgY29uc3QgZW5naW5lID0gZW5naW5lUmVmLmN1cnJlbnQ7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGNhbnZhc1JlZi5jdXJyZW50O1xuICAgICAgICBpZiAoIWVuZ2luZSB8fCAhY2FudmFzKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHNpemUgPSBhcHBseUV4cG9ydENhbnZhc1NpemUoZXhwb3J0UmVzUmVmLmN1cnJlbnQsIDMpO1xuICAgICAgICBpZiAoIXNpemUpIHJldHVybjtcbiAgICAgICAgZW5naW5lLnJlbmRlcihidWlsZEZyYW1lKCkpO1xuICAgICAgICBjYW52YXMudG9CbG9iKChibG9iKSA9PiB7XG4gICAgICAgICAgICBleHBvcnRMb2NrUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICAgICAgcmVzdG9yZUxpdmVDYW52YXNTaXplKCk7XG4gICAgICAgICAgICBpZiAoYmxvYikge1xuICAgICAgICAgICAgICAgIGRvd25sb2FkQmxvYihibG9iLCBleHBvcnRGaWxlbmFtZShcInBuZ1wiKSk7XG4gICAgICAgICAgICAgICAgc2hvd1RvYXN0KGBFeHBvcnRlZCAke3NpemUud2lkdGh9XHUwMEQ3JHtzaXplLmhlaWdodH1gKTtcbiAgICAgICAgICAgIH0gZWxzZSBzaG93VG9hc3QoXCJFeHBvcnQgZmFpbGVkXCIpO1xuICAgICAgICB9LCBcImltYWdlL3BuZ1wiKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYXB0dXJlVGh1bWIoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gY2FudmFzUmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmICghY2FudmFzIHx8ICFjYW52YXMud2lkdGgpIHJldHVybiBcIlwiO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gVGhlIGRyYXdpbmcgYnVmZmVyIGlzIG5vdCBwcmVzZXJ2ZWQgXHUyMDE0IHJlZHJhdyBzbyB0aGUgZ3JhYiBpc24ndCBibGFuay5cbiAgICAgICAgICAgIGVuZ2luZVJlZi5jdXJyZW50Py5yZW5kZXIoYnVpbGRGcmFtZSgpKTtcbiAgICAgICAgICAgIGNvbnN0IHNjYWxlID0gMjIwIC8gTWF0aC5tYXgoY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIGNvbnN0IHRodW1iQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgICAgIHRodW1iQ2FudmFzLndpZHRoID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZChjYW52YXMud2lkdGggKiBzY2FsZSkpO1xuICAgICAgICAgICAgdGh1bWJDYW52YXMuaGVpZ2h0ID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZChjYW52YXMuaGVpZ2h0ICogc2NhbGUpKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aHVtYkNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgICAgICBpZiAoIWNvbnRleHQpIHJldHVybiBcIlwiO1xuICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICAgICAgY2FudmFzLFxuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICB0aHVtYkNhbnZhcy53aWR0aCxcbiAgICAgICAgICAgICAgICB0aHVtYkNhbnZhcy5oZWlnaHQsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRodW1iQ2FudmFzLnRvRGF0YVVSTChcImltYWdlL2pwZWdcIiwgMC42Mik7XG4gICAgICAgICAgICByZXR1cm4gZGF0YS5sZW5ndGggPCA1OF8wMDAgPyBkYXRhIDogXCJcIjtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBzZXJ2ZXIgc2NlbmVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gc2F2ZVRvU2VydmVyKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2F2ZVNjZW5lTXV0YXRpb24oXG4gICAgICAgICAgICAgICAgc2VydmVyU2NlbmVJZCxcbiAgICAgICAgICAgICAgICBzY2VuZS5uYW1lLFxuICAgICAgICAgICAgICAgIGVuY29kZVNjZW5lKHNjZW5lKSxcbiAgICAgICAgICAgICAgICBjYXB0dXJlVGh1bWIoKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBzZXRTZXJ2ZXJTY2VuZUlkKHJlc3VsdC5pZCk7XG4gICAgICAgICAgICBzaG93VG9hc3QoXCJTY2VuZSBzYXZlZFwiKTtcbiAgICAgICAgfSBjYXRjaCAoY2F1c2UpIHtcbiAgICAgICAgICAgIHNob3dUb2FzdChjYXVzZSBpbnN0YW5jZW9mIEVycm9yID8gY2F1c2UubWVzc2FnZSA6IFwiU2F2ZSBmYWlsZWRcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkRnJvbVNlcnZlcihpZDogc3RyaW5nKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRTY2VuZU11dGF0aW9uKGlkKTtcbiAgICAgICAgICAgIGNvbnN0IGxvYWRlZCA9IGRlY29kZVNjZW5lKHJlc3VsdC5kYXRhKTtcbiAgICAgICAgICAgIGxvYWRlZC5uYW1lID0gY2xlYW5OYW1lKHJlc3VsdC5uYW1lLCBsb2FkZWQubmFtZSk7XG4gICAgICAgICAgICBzZXRTY2VuZShsb2FkZWQpO1xuICAgICAgICAgICAgc2NlbmVSZWYuY3VycmVudCA9IGxvYWRlZDtcbiAgICAgICAgICAgIHNldFNlbGVjdGVkSWQobnVsbCk7XG4gICAgICAgICAgICBzZXRTZXJ2ZXJTY2VuZUlkKGlkKTtcbiAgICAgICAgICAgIHNldFNjZW5lc09wZW4oZmFsc2UpO1xuICAgICAgICAgICAgZW5naW5lUmVmLmN1cnJlbnQ/LmNsZWFyRmVlZGJhY2soKTtcbiAgICAgICAgICAgIGF3YWl0IGh5ZHJhdGVTY2VuZUltYWdlcyhsb2FkZWQpO1xuICAgICAgICAgICAgY29uc3QgbWlzc2luZyA9IGxvYWRlZC5sYXllcnMuc29tZShcbiAgICAgICAgICAgICAgICAobGF5ZXIpID0+ICFlbmdpbmVSZWYuY3VycmVudD8uaGFzSW1hZ2UobGF5ZXIuaW1hZ2VJZCksXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKG1pc3NpbmcpXG4gICAgICAgICAgICAgICAgc2hvd1RvYXN0KFxuICAgICAgICAgICAgICAgICAgICBcIlNvbWUgbWVkaWEgZmlsZXMgYXJlIG5vdCBvbiB0aGlzIGRldmljZSBcdTIwMTQgc2hvd2luZyBwbGFjZWhvbGRlcnNcIixcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIHNob3dUb2FzdChcIkNvdWxkIG5vdCBsb2FkIHRoYXQgc2NlbmVcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiB0b2dnbGVGdWxsc2NyZWVuKCkge1xuICAgICAgICBjb25zdCBzdGFnZSA9IHN0YWdlUmVmLmN1cnJlbnQ7XG4gICAgICAgIGlmICghc3RhZ2UpIHJldHVybjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCkgYXdhaXQgZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4oKTtcbiAgICAgICAgICAgIGVsc2UgYXdhaXQgc3RhZ2UucmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBzaG93VG9hc3QoXCJGdWxsc2NyZWVuIGlzIG5vdCBhdmFpbGFibGVcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBzZWxlY3Rpb24gYm94IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgIGNvbnN0IHNlbGVjdGlvbkJveCA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgICBpZiAoIXNlbGVjdGVkIHx8IHN0YWdlTW9kZSAhPT0gXCJhcnJhbmdlXCIpIHJldHVybiBudWxsO1xuICAgICAgICBjb25zdCBtZXRhID0gaW1hZ2VJbmZvW3NlbGVjdGVkLmltYWdlSWRdO1xuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHN0YWdlU2l6ZVJlZi5jdXJyZW50O1xuICAgICAgICBpZiAod2lkdGggPCAyKSByZXR1cm4gbnVsbDtcbiAgICAgICAgY29uc3QgYXNwZWN0ID0gd2lkdGggLyBNYXRoLm1heCgxLCBoZWlnaHQpO1xuICAgICAgICBjb25zdCBpbWFnZUFzcGVjdCA9XG4gICAgICAgICAgICBtZXRhICYmIG1ldGEud2lkdGggPiAwID8gbWV0YS53aWR0aCAvIE1hdGgubWF4KDEsIG1ldGEuaGVpZ2h0KSA6IDE7XG4gICAgICAgIGNvbnN0IGZpdEhlaWdodCA9IE1hdGgubWluKDEsIGFzcGVjdCAvIGltYWdlQXNwZWN0KTtcbiAgICAgICAgY29uc3QgYm94V2lkdGggPSBmaXRIZWlnaHQgKiBpbWFnZUFzcGVjdCAqIHNlbGVjdGVkLmZ4LnNjYWxlICogaGVpZ2h0O1xuICAgICAgICBjb25zdCBib3hIZWlnaHQgPSBmaXRIZWlnaHQgKiBzZWxlY3RlZC5meC5zY2FsZSAqIGhlaWdodDtcbiAgICAgICAgY29uc3QgY2VudGVyWCA9ICgwLjUgKyBzZWxlY3RlZC5meC54IC8gYXNwZWN0KSAqIHdpZHRoO1xuICAgICAgICBjb25zdCBjZW50ZXJZID0gKDAuNSAtIHNlbGVjdGVkLmZ4LnkpICogaGVpZ2h0O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYm94V2lkdGgsXG4gICAgICAgICAgICBib3hIZWlnaHQsXG4gICAgICAgICAgICBjZW50ZXJYLFxuICAgICAgICAgICAgY2VudGVyWSxcbiAgICAgICAgICAgIHJvdGF0aW9uOiBzZWxlY3RlZC5meC5yb3RhdGlvbixcbiAgICAgICAgfTtcbiAgICB9LCBbc2VsZWN0ZWQsIGltYWdlSW5mbywgc3RhZ2VNb2RlLCBzY2VuZV0pO1xuXG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcmVuZGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICBjb25zdCB3b3JsZFBhbmVsID0gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFNlY3Rpb24gdGl0bGU9XCJXb3JsZCBwcmVzZXRzXCIgYWNjZW50PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkIGdyaWQtY29scy0yIGdhcC0xIHB4LTMgcHktMVwiPlxuICAgICAgICAgICAgICAgICAgICB7V09STERfUFJFU0VUUy5tYXAoKHByZXNldCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cHJlc2V0LmNvZGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVHbG9iYWwocHJlc2V0Lmdsb2JhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZ2luZVJlZi5jdXJyZW50Py5jbGVhckZlZWRiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgYm9yZGVyIGJvcmRlci1bdmFyKC0tbGluZSldIGJnLVt2YXIoLS1wYW5lbCldIHB4LTEuNSBweS0xIHRleHQtbGVmdCBmb250LW1vbm8gdGV4dC1bOXB4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LVt2YXIoLS1tdXRlKV0gaG92ZXI6Ym9yZGVyLVt2YXIoLS1hY2lkKV0vNjAgaG92ZXI6dGV4dC1bdmFyKC0tcGFwZXIpXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LVt2YXIoLS1hY2lkKV0vNzBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ByZXNldC5jb2RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRydW5jYXRlXCI+e3ByZXNldC5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvU2VjdGlvbj5cbiAgICAgICAgICAgIDxTZWN0aW9uIHRpdGxlPVwiQmFja2dyb3VuZFwiPlxuICAgICAgICAgICAgICAgIDxTZWdSb3dcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJNb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17QkdfTU9ERVN9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzY2VuZS5nbG9iYWwuYmdNb2RlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGluZGV4KSA9PiB1cGRhdGVHbG9iYWwoeyBiZ01vZGU6IGluZGV4IH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIHB4LTMgcHktMSB0ZXh0LVs5cHhdIHVwcGVyY2FzZSB0cmFja2luZy1bMC4xNGVtXSB0ZXh0LVt2YXIoLS1tdXRlKV1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQVxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2NlbmUuZ2xvYmFsLmJnQX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0PXsoZXZlbnQpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUdsb2JhbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ0E6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2NlbmUuZ2xvYmFsLmJnQn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0PXsoZXZlbnQpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUdsb2JhbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ0I6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvU2VjdGlvbj5cbiAgICAgICAgICAgIDxTZWN0aW9uIHRpdGxlPVwiU3BhY2VcIj5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRmx1aWQgd2FycFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzY2VuZS5nbG9iYWwud2FycH1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB1cGRhdGVHbG9iYWwoeyB3YXJwOiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTd2lybFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzY2VuZS5nbG9iYWwuc3dpcmx9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdXBkYXRlR2xvYmFsKHsgc3dpcmw6IHZhbHVlIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlJpcHBsZXNcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2NlbmUuZ2xvYmFsLnJpcHBsZX1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB1cGRhdGVHbG9iYWwoeyByaXBwbGU6IHZhbHVlIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlR1bm5lbCB6b29tXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NjZW5lLmdsb2JhbC56b29tfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHVwZGF0ZUdsb2JhbCh7IHpvb206IHZhbHVlIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkthbGVpZG9zY29wZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzY2VuZS5nbG9iYWwua2FsZWlkb31cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB1cGRhdGVHbG9iYWwoeyBrYWxlaWRvOiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJNaXJyb3IgZm9sZFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzY2VuZS5nbG9iYWwubWlycm9yfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHVwZGF0ZUdsb2JhbCh7IG1pcnJvcjogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvU2VjdGlvbj5cbiAgICAgICAgICAgIDxTZWN0aW9uIHRpdGxlPVwiRmVlZGJhY2tcIj5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRmVlZGJhY2tcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2NlbmUuZ2xvYmFsLmZlZWRiYWNrfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHVwZGF0ZUdsb2JhbCh7IGZlZWRiYWNrOiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUcmFpbCBsZW5ndGhcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2NlbmUuZ2xvYmFsLnRyYWlsc31cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswLjZ9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHVwZGF0ZUdsb2JhbCh7IHRyYWlsczogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRWNobyB6b29tXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NjZW5lLmdsb2JhbC5mYlpvb219XG4gICAgICAgICAgICAgICAgICAgIG1pbj17LTF9XG4gICAgICAgICAgICAgICAgICAgIG1heD17MX1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9eyh2KSA9PiB2LnRvRml4ZWQoMil9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHVwZGF0ZUdsb2JhbCh7IGZiWm9vbTogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRWNobyBzcGluXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NjZW5lLmdsb2JhbC5mYlJvdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgbWluPXstMX1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsxfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdD17KHYpID0+IHYudG9GaXhlZCgyKX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdXBkYXRlR2xvYmFsKHsgZmJSb3RhdGU6IHZhbHVlIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVjaG8gaHVlXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NjZW5lLmdsb2JhbC5mYkh1ZX1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB1cGRhdGVHbG9iYWwoeyBmYkh1ZTogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvU2VjdGlvbj5cbiAgICAgICAgICAgIDxTZWN0aW9uIHRpdGxlPVwiV29ybGQgY29sb3JcIj5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUHJpc20gc3BsaXRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2NlbmUuZ2xvYmFsLmNocm9tYX1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB1cGRhdGVHbG9iYWwoeyBjaHJvbWE6IHZhbHVlIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkh1ZSBvcmJpdFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzY2VuZS5nbG9iYWwuaHVlT3JiaXR9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdXBkYXRlR2xvYmFsKHsgaHVlT3JiaXQ6IHZhbHVlIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNhdHVyYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2NlbmUuZ2xvYmFsLnNhdHVyYXRpb259XG4gICAgICAgICAgICAgICAgICAgIG1heD17Mn1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXsxfVxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9e2Zvcm1hdFh9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHVwZGF0ZUdsb2JhbCh7IHNhdHVyYXRpb246IHZhbHVlIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNvbnRyYXN0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NjZW5lLmdsb2JhbC5jb250cmFzdH1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsyfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezF9XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdD17Zm9ybWF0WH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdXBkYXRlR2xvYmFsKHsgY29udHJhc3Q6IHZhbHVlIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNvbGFyaXplXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NjZW5lLmdsb2JhbC5zb2xhcml6ZX1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB1cGRhdGVHbG9iYWwoeyBzb2xhcml6ZTogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvU2VjdGlvbj5cbiAgICAgICAgICAgIDxTZWN0aW9uIHRpdGxlPVwiU2lnbmFsXCI+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkdyYWluXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NjZW5lLmdsb2JhbC5ncmFpbn1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB1cGRhdGVHbG9iYWwoeyBncmFpbjogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2NhbmxpbmVzXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NjZW5lLmdsb2JhbC5zY2FubGluZXN9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdXBkYXRlR2xvYmFsKHsgc2NhbmxpbmVzOiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJWaWduZXR0ZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzY2VuZS5nbG9iYWwudmlnbmV0dGV9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MC4yMn1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdXBkYXRlR2xvYmFsKHsgdmlnbmV0dGU6IHZhbHVlIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlN0cm9iZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzY2VuZS5nbG9iYWwuc3Ryb2JlfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHVwZGF0ZUdsb2JhbCh7IHN0cm9iZTogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvU2VjdGlvbj5cbiAgICAgICAgICAgIDxTZWN0aW9uIHRpdGxlPVwiTW90aW9uICYgYXVkaW9cIj5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVGltZSBzcGVlZFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzY2VuZS5nbG9iYWwuc3BlZWR9XG4gICAgICAgICAgICAgICAgICAgIG1heD17Mn1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXsxfVxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9e2Zvcm1hdFh9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHVwZGF0ZUdsb2JhbCh7IHNwZWVkOiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBdWRpbyByZWFjdFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzY2VuZS5nbG9iYWwuYXVkaW9SZWFjdH1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB1cGRhdGVHbG9iYWwoeyBhdWRpb1JlYWN0OiB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICAgICAgPFNlY3Rpb24gdGl0bGU9XCJDdXJzb3IgKHBsYXkgbW9kZSlcIj5cbiAgICAgICAgICAgICAgICA8U2VnUm93XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRmllbGRcIlxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtQT0lOVEVSX01PREVTfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2NlbmUuZ2xvYmFsLnBvaW50ZXJNb2RlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGluZGV4KSA9PiB1cGRhdGVHbG9iYWwoeyBwb2ludGVyTW9kZTogaW5kZXggfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRm9yY2VcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2NlbmUuZ2xvYmFsLnBvaW50ZXJGb3JjZX1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswLjZ9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHVwZGF0ZUdsb2JhbCh7IHBvaW50ZXJGb3JjZTogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRmllbGQgc2l6ZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzY2VuZS5nbG9iYWwucG9pbnRlclNpemV9XG4gICAgICAgICAgICAgICAgICAgIG1pbj17MC4wMn1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswLjM1fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB1cGRhdGVHbG9iYWwoeyBwb2ludGVyU2l6ZTogdmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvU2VjdGlvbj5cbiAgICAgICAgPC8+XG4gICAgKTtcblxuICAgIGNvbnN0IGxheWVyUGFuZWwgPSBzZWxlY3RlZCA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxTZWN0aW9uXG4gICAgICAgICAgICAgICAgdGl0bGU9e2BMYXllciBcdTAwQjcgJHtzZWxlY3RlZC5uYW1lfWB9XG4gICAgICAgICAgICAgICAgYWNjZW50XG4gICAgICAgICAgICAgICAgYWN0aW9ucz17XG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJTaHVmZmxlIGxheWVyIEZYXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtW3ZhcigtLW11dGUpXSBob3Zlcjp0ZXh0LVt2YXIoLS1hY2lkKV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VMYXllckZ4KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5kb21MYXllckZ4KHNlbGVjdGVkLmZ4KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SURpY2UgY2xhc3M9XCJoLTMuNSB3LTMuNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlJlc2V0IGxheWVyIEZYXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvbnQtbW9ubyB0ZXh0LVs5cHhdIHVwcGVyY2FzZSB0ZXh0LVt2YXIoLS1tdXRlKV0gaG92ZXI6dGV4dC1bdmFyKC0tcGFwZXIpXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZUxheWVyRngoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0TGF5ZXJGeEVmZmVjdHMoc2VsZWN0ZWQuZngpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJweC0zIHB5LTEgZm9udC1tb25vIHRleHQtWzlweF0gdXBwZXJjYXNlIHRyYWNraW5nLVswLjE0ZW1dIHRleHQtW3ZhcigtLW11dGUpXVwiPlxuICAgICAgICAgICAgICAgICAgICB7bWVkaWFLaW5kTGFiZWwoc2VsZWN0ZWQubWVkaWFLaW5kKX1cbiAgICAgICAgICAgICAgICAgICAge2ltYWdlSW5mb1tzZWxlY3RlZC5pbWFnZUlkXSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgIWltYWdlSW5mb1tzZWxlY3RlZC5pbWFnZUlkXS5taXNzaW5nICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBgIFx1MDBCNyAke2ltYWdlSW5mb1tzZWxlY3RlZC5pbWFnZUlkXS53aWR0aH1cdTAwRDcke2ltYWdlSW5mb1tzZWxlY3RlZC5pbWFnZUlkXS5oZWlnaHR9YH1cbiAgICAgICAgICAgICAgICAgICAge2ltYWdlSW5mb1tzZWxlY3RlZC5pbWFnZUlkXT8ubWlzc2luZyA/IFwiIFx1MDBCNyBtaXNzaW5nIG9uIGRldmljZVwiIDogXCJcIn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHgtMyBweS1bNXB4XVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItMSB0ZXh0LVs5cHhdIHVwcGVyY2FzZSB0cmFja2luZy1bMC4xNGVtXSB0ZXh0LVt2YXIoLS1tdXRlKV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEJsZW5kXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImgtNiB3LWZ1bGwgYm9yZGVyIGJvcmRlci1bdmFyKC0tbGluZSldIGJnLVt2YXIoLS1wYW5lbC0yKV0gcHgtMSBmb250LW1vbm8gdGV4dC1bMTBweF0gdXBwZXJjYXNlIHRleHQtW3ZhcigtLXBhcGVyKV0gb3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1bdmFyKC0tYWNpZCldXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZC5meC5ibGVuZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJGeChzZWxlY3RlZC5pZCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibGVuZDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MU2VsZWN0RWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnZhbHVlIGFzIEJsZW5kTW9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7QkxFTkRfTU9ERVMubWFwKChtb2RlKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e21vZGV9IHZhbHVlPXttb2RlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21vZGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk9wYWNpdHlcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWQuZngub3BhY2l0eX1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXsxfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJGeChzZWxlY3RlZC5pZCwgeyBvcGFjaXR5OiB2YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2VnUm93XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2FudmFzIGZpbGxcIlxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtUSUxFX01PREVTfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWQuZngudGlsZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhpbmRleCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxheWVyRngoc2VsZWN0ZWQuaWQsIHsgdGlsZTogaW5kZXggfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNjYWxlXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkLmZ4LnNjYWxlfVxuICAgICAgICAgICAgICAgICAgICBtaW49ezAuMDV9XG4gICAgICAgICAgICAgICAgICAgIG1heD17Nn1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXsxfVxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9e2Zvcm1hdFh9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVMYXllckZ4KHNlbGVjdGVkLmlkLCB7IHNjYWxlOiB2YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUm90YXRpb25cIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWQuZngucm90YXRpb259XG4gICAgICAgICAgICAgICAgICAgIG1pbj17LTE4MH1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsxODB9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0PXtmb3JtYXREZWd9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVMYXllckZ4KHNlbGVjdGVkLmlkLCB7IHJvdGF0aW9uOiB2YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvU2VjdGlvbj5cbiAgICAgICAgICAgIDxTZWN0aW9uIHRpdGxlPVwiRGlzdG9ydFwiPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJGbHVpZCB3YXJwXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkLmZ4LndhcnB9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxheWVyRngoc2VsZWN0ZWQuaWQsIHsgd2FycDogdmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlN3aXJsXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkLmZ4LnN3aXJsfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVMYXllckZ4KHNlbGVjdGVkLmlkLCB7IHN3aXJsOiB2YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUmlwcGxlc1wiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZC5meC5yaXBwbGV9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxheWVyRngoc2VsZWN0ZWQuaWQsIHsgcmlwcGxlOiB2YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiS2FsZWlkb3Njb3BlXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkLmZ4LmthbGVpZG99XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxheWVyRngoc2VsZWN0ZWQuaWQsIHsga2FsZWlkbzogdmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBpeGVsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkLmZ4LnBpeGVsYXRlfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVMYXllckZ4KHNlbGVjdGVkLmlkLCB7IHBpeGVsYXRlOiB2YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTGVuc1wiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZC5meC5idWxnZX1cbiAgICAgICAgICAgICAgICAgICAgbWluPXstMX1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsxfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdD17KHYpID0+IHYudG9GaXhlZCgyKX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxheWVyRngoc2VsZWN0ZWQuaWQsIHsgYnVsZ2U6IHZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJNaXJyb3IgZm9sZFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZC5meC5taXJyb3J9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxheWVyRngoc2VsZWN0ZWQuaWQsIHsgbWlycm9yOiB2YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvU2VjdGlvbj5cbiAgICAgICAgICAgIDxTZWN0aW9uIHRpdGxlPVwiTGF5ZXIgY29sb3JcIj5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiSHVlXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkLmZ4Lmh1ZX1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXswfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJGeChzZWxlY3RlZC5pZCwgeyBodWU6IHZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTYXR1cmF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkLmZ4LnNhdHVyYXRpb259XG4gICAgICAgICAgICAgICAgICAgIG1heD17Mn1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXsxfVxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9e2Zvcm1hdFh9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVMYXllckZ4KHNlbGVjdGVkLmlkLCB7IHNhdHVyYXRpb246IHZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDb250cmFzdFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZC5meC5jb250cmFzdH1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsyfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezF9XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdD17Zm9ybWF0WH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxheWVyRngoc2VsZWN0ZWQuaWQsIHsgY29udHJhc3Q6IHZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJCcmlnaHRuZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkLmZ4LmJyaWdodG5lc3N9XG4gICAgICAgICAgICAgICAgICAgIG1heD17Mn1cbiAgICAgICAgICAgICAgICAgICAgZGVmPXsxfVxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9e2Zvcm1hdFh9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVMYXllckZ4KHNlbGVjdGVkLmlkLCB7IGJyaWdodG5lc3M6IHZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJJbnZlcnRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWQuZnguaW52ZXJ0fVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVMYXllckZ4KHNlbGVjdGVkLmlkLCB7IGludmVydDogdmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBvc3Rlcml6ZVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZC5meC5wb3N0ZXJpemV9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxheWVyRngoc2VsZWN0ZWQuaWQsIHsgcG9zdGVyaXplOiB2YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUHJpc20gc3BsaXRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWQuZnguY2hyb21hfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVMYXllckZ4KHNlbGVjdGVkLmlkLCB7IGNocm9tYTogdmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk5lb24gZWRnZXNcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWQuZnguZWRnZXN9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxheWVyRngoc2VsZWN0ZWQuaWQsIHsgZWRnZXM6IHZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBweC0zIHB5LVs1cHhdXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZC5meC50aW50Q29sb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0PXsoZXZlbnQpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJGeChzZWxlY3RlZC5pZCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW50Q29sb3I6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTElucHV0RWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlRpbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZC5meC50aW50QW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVMYXllckZ4KHNlbGVjdGVkLmlkLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW50QW1vdW50OiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvU2VjdGlvbj5cbiAgICAgICAgICAgIDxTZWN0aW9uIHRpdGxlPVwiTGF5ZXIgbW90aW9uXCI+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNwaW5cIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWQuZnguc3Bpbn1cbiAgICAgICAgICAgICAgICAgICAgbWluPXstMX1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsxfVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdD17KHYpID0+IHYudG9GaXhlZCgyKX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxheWVyRngoc2VsZWN0ZWQuaWQsIHsgc3BpbjogdmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRyaWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkLmZ4LmRyaWZ0fVxuICAgICAgICAgICAgICAgICAgICBkZWY9ezB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVMYXllckZ4KHNlbGVjdGVkLmlkLCB7IGRyaWZ0OiB2YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUHVsc2VcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWQuZngucHVsc2V9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxheWVyRngoc2VsZWN0ZWQuaWQsIHsgcHVsc2U6IHZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTaGltbWVyXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkLmZ4LnNoaW1tZXJ9XG4gICAgICAgICAgICAgICAgICAgIGRlZj17MH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxheWVyRngoc2VsZWN0ZWQuaWQsIHsgc2hpbW1lcjogdmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1NlY3Rpb24+XG4gICAgICAgIDwvPlxuICAgICkgOiAoXG4gICAgICAgIDw+PC8+XG4gICAgKTtcblxuICAgIGlmIChlbmdpbmVFcnJvcikge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQgaC1zY3JlZW4gcGxhY2UtaXRlbXMtY2VudGVyIGJnLVt2YXIoLS12b2lkKV0gcC04IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtYi0yIGZvbnQtbW9ubyB0ZXh0LXNtIHRleHQtWyNiODZhNzRdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZW5naW5lRXJyb3J9XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJmb250LW1vbm8gdGV4dC14cyB0ZXh0LVt2YXIoLS1tdXRlKV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhdWRpby0yIG5lZWRzIFdlYkdMIHRvIHJ1bi5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlIGZsZXggaC1zY3JlZW4gdy1zY3JlZW4gZmxleC1jb2wgb3ZlcmZsb3ctaGlkZGVuIGJnLVt2YXIoLS12b2lkKV0gdGV4dC1bdmFyKC0tcGFwZXIpXSBzZWxlY3Qtbm9uZVwiPlxuICAgICAgICAgICAgPHN0eWxlPntHTE9CQUxfQ1NTfTwvc3R5bGU+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJwb2ludGVyLWV2ZW50cy1ub25lIGZpeGVkIGluc2V0LTAgb3BhY2l0eS00MFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAxNCUgLTEwJSwgcmdiYSgyMzIsMjMwLDIyNCwuMDgpLCB0cmFuc3BhcmVudCAzMiUpLCByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDkyJSAyMCUsIHJnYmEoMTY4LDEyMCwxMjgsLjA2KSwgdHJhbnNwYXJlbnQgMjglKVwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICB7LyogVG9wIGJhciAqL31cbiAgICAgICAgICAgIHshdWlIaWRkZW4gJiYgKFxuICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3M9XCJyZWxhdGl2ZSB6LTEwIGZsZXggaC0xMSBmbGV4LXNocmluay0wIGl0ZW1zLWNlbnRlciBnYXAtMS41IGJvcmRlci1iIGJvcmRlci1bdmFyKC0tbGluZSldIGJnLVt2YXIoLS1wYW5lbCldIHB4LTIuNVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtci0xIHRleHQtWzEuMTVyZW1dIGZvbnQtYm9sZCBsZWFkaW5nLW5vbmUgdHJhY2tpbmctWy0wLjA4ZW1dIHRleHQtW3ZhcigtLWFjaWQpXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250RmFtaWx5OiAnXCJTcGFjZSBHcm90ZXNrXCIsIHNhbnMtc2VyaWYnIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhdWRpby0yXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImgtWzI2cHhdIHctMzYgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCBiZy10cmFuc3BhcmVudCBweC0xLjUgdGV4dC1bMTJweF0gZm9udC1tZWRpdW0gdGV4dC1bdmFyKC0tcGFwZXIpXSBvdXRsaW5lLW5vbmUgaG92ZXI6Ym9yZGVyLVt2YXIoLS1saW5lKV0gZm9jdXM6Ym9yZGVyLVt2YXIoLS1hY2lkKV0vNjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NjZW5lLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0PXsoZXZlbnQpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2NlbmUoKHByZXZpb3VzKSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5wcmV2aW91cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogKGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTElucHV0RWxlbWVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17KGV2ZW50KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNjZW5lKChwcmV2aW91cykgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucHJldmlvdXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGNsZWFuTmFtZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJVbnRpdGxlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm14LTEgaC00IHctcHggYmctW3ZhcigtLWxpbmUpXVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxUb3BCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQXJyYW5nZSBsYXllcnMgKFYpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17c3RhZ2VNb2RlID09PSBcImFycmFuZ2VcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFN0YWdlTW9kZShcImFycmFuZ2VcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkFycmFuZ2VcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SU1vdmUgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Ub3BCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxUb3BCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUGxheSB0aGUgY2FudmFzIHdpdGggeW91ciBjdXJzb3IgKFApXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17c3RhZ2VNb2RlID09PSBcInBsYXlcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFN0YWdlTW9kZShcInBsYXlcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBsYXlcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SVNwYXJrIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvVG9wQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm14LTEgaC00IHctcHggYmctW3ZhcigtLWxpbmUpXVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxUb3BCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUmFuZG9taXplIGV2ZXJ5dGhpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNjZW5lKChwcmV2aW91cykgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucHJldmlvdXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbDogcmFuZG9tR2xvYmFsRngocHJldmlvdXMuZ2xvYmFsKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJzOiBwcmV2aW91cy5sYXllcnMubWFwKChsYXllcikgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmxheWVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZng6IHJhbmRvbUxheWVyRngobGF5ZXIuZngpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZ2luZVJlZi5jdXJyZW50Py5jbGVhckZlZWRiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDaGFvc1wiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJRGljZSAvPlxuICAgICAgICAgICAgICAgICAgICA8L1RvcEJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPFRvcEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJOdWRnZSB0aGUgd29ybGQgc29tZXdoZXJlIG5ld1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUdsb2JhbChtdXRhdGVHbG9iYWxGeChzY2VuZS5nbG9iYWwpKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJNdXRhdGVcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SVdhbmQgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Ub3BCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxUb3BCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm96ZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIlJlc3VtZSB0aW1lIChTcGFjZSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiRnJlZXplIHRpbWUgKFNwYWNlKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2Zyb3plbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEZyb3plbigocHJldmlvdXMpID0+ICFwcmV2aW91cyl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtmcm96ZW4gPyA8SVBsYXkgLz4gOiA8SVBhdXNlIC8+fVxuICAgICAgICAgICAgICAgICAgICA8L1RvcEJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmbGV4LTFcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8VG9wQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlNhdmUgc2NlbmUgdG8geW91ciBsaWJyYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHZvaWQgc2F2ZVRvU2VydmVyKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNhdmVcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SVNhdmUgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Ub3BCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvcEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiWW91ciBzYXZlZCBzY2VuZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17c2NlbmVzT3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTY2VuZXNPcGVuKChwcmV2aW91cykgPT4gIXByZXZpb3VzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNjZW5lc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElGb2xkZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9wQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAge3NjZW5lc09wZW4gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZml4ZWQgaW5zZXQtMCB6LTMwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNjZW5lc09wZW4oZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wIGFic29sdXRlIHJpZ2h0LTAgdG9wLTggei00MCBtYXgtaC1bNjB2aF0gdy02NCBvdmVyZmxvdy15LWF1dG8gYm9yZGVyIGJvcmRlci1bdmFyKC0tbGluZSldIGJnLVt2YXIoLS1wYW5lbC0yKV0gcC0xLjUgc2hhZG93LTJ4bFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NjZW5lTGlzdC5sZW5ndGggPT09IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicC0zIGZvbnQtbW9ubyB0ZXh0LVsxMHB4XSB0ZXh0LVt2YXIoLS1tdXRlKV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTm8gc2F2ZWQgc2NlbmVzIHlldC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2F1dGguaXNHdWVzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIiAoR3Vlc3Qgc2Vzc2lvbnMgc2F2ZSBsb2NhbGx5IHBlciBkZXBsb3kuKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzY2VuZUxpc3QubWFwKChtZXRhKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e21ldGEuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZ3JvdXAgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgcC0xLjUgaG92ZXI6YmctW3ZhcigtLWxpbmUpXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmxleCBtaW4tdy0wIGZsZXgtMSBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1sZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdm9pZCBsb2FkRnJvbVNlcnZlcihtZXRhLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImdyaWQgaC05IHctMTQgZmxleC1zaHJpbmstMCBwbGFjZS1pdGVtcy1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuIGJvcmRlciBib3JkZXItW3ZhcigtLWxpbmUpXSBiZy1ibGFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZXRhLnRodW1iID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e21ldGEudGh1bWJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImgtZnVsbCB3LWZ1bGwgb2JqZWN0LWNvdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZvbnQtbW9ubyB0ZXh0LVs4cHhdIHRleHQtW3ZhcigtLW11dGUpXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmF1ZGlvLTJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1pbi13LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrIHRydW5jYXRlIHRleHQtWzExLjVweF0gdGV4dC1bdmFyKC0tcGFwZXIpXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWV0YS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrIGZvbnQtbW9ubyB0ZXh0LVs4LjVweF0gdGV4dC1bdmFyKC0tbXV0ZSldXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuZXcgRGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGEudXBkYXRlZEF0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnRvTG9jYWxlU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkRlbGV0ZSBzY2VuZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtW3ZhcigtLW11dGUpXSBvcGFjaXR5LTAgaG92ZXI6dGV4dC1bI2I4NmE3NF0gZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQgZGVsZXRlU2NlbmVNdXRhdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLmNhdGNoKCgpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dUb2FzdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRGVsZXRlIGZhaWxlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhLmlkID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2ZXJTY2VuZUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZXJ2ZXJTY2VuZUlkKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElUcmFzaCBjbGFzcz1cImgtMy41IHctMy41XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJteC0xIGgtNCB3LXB4IGJnLVt2YXIoLS1saW5lKV1cIiAvPlxuICAgICAgICAgICAgICAgICAgICA8VG9wQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWljQWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJTdG9wIG1pY3JvcGhvbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiQXVkaW8tcmVhY3QgZnJvbSB5b3VyIG1pY3JvcGhvbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXttaWNBY3RpdmV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB2b2lkIHRvZ2dsZU1pYygpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SU1pYyAvPlxuICAgICAgICAgICAgICAgICAgICA8L1RvcEJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPFRvcEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY29yZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiU3RvcCByZWNvcmRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiUmVjb3JkIHRoZSBjYW52YXMgdG8gdmlkZW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGFuZ2VyPXtyZWNvcmRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVSZWNvcmRpbmd9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZWNvcmRpbmcgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyZWMtZG90IGlubGluZS1ibG9jayBoLTIuNSB3LTIuNSByb3VuZGVkLWZ1bGwgYmctWyNjNDViNmFdXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmxpbmUtYmxvY2sgaC0yLjUgdy0yLjUgcm91bmRlZC1mdWxsIGJvcmRlci1bMS41cHhdIGJvcmRlci1jdXJyZW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvVG9wQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZ4LXJlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkV4cG9ydCAvIHJlY29yZGluZyByZXNvbHV0aW9uIChrZWVwcyBzdGFnZSBhc3BlY3QpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtleHBvcnRSZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17cmVjb3JkaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MU2VsZWN0RWxlbWVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZhbHVlIGFzIEV4cG9ydFJlc29sdXRpb25JZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVYUE9SVF9SRVNPTFVUSU9OUy5zb21lKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEV4cG9ydFJlcyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge0VYUE9SVF9SRVNPTFVUSU9OUy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aXRlbS5pZH0gdmFsdWU9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPFRvcEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2BFeHBvcnQgUE5HIGF0ICR7RVhQT1JUX1JFU09MVVRJT05TLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGV4cG9ydFJlcyk/LmxhYmVsID8/IFwic2VsZWN0ZWRcIn0gcmVzb2x1dGlvbmB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtleHBvcnRQbmd9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJRG93bmxvYWQgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Ub3BCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxUb3BCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiSW5zdHJ1bWVudCBtYW51YWwgKD8pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17aGVscE9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRIZWxwT3BlbigocHJldmlvdXMpID0+ICFwcmV2aW91cyl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZ3JpZCBoLVsxNXB4XSB3LVsxNXB4XSBwbGFjZS1pdGVtcy1jZW50ZXIgZm9udC1tb25vIHRleHQtWzExcHhdIGZvbnQtYm9sZCBsZWFkaW5nLW5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvVG9wQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8VG9wQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkZ1bGxzY3JlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXtmdWxsc2NyZWVufVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdm9pZCB0b2dnbGVGdWxsc2NyZWVuKCl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJRXhwYW5kIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvVG9wQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8VG9wQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkhpZGUgaW50ZXJmYWNlIChUYWIpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFVpSGlkZGVuKHRydWUpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SVBhbmVsIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvVG9wQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlIHotMTAgZmxleCBtaW4taC0wIGZsZXgtMVwiPlxuICAgICAgICAgICAgICAgIHsvKiBMYXllcnMgcGFuZWwgKi99XG4gICAgICAgICAgICAgICAgeyF1aUhpZGRlbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxhc2lkZSBjbGFzcz1cImZsZXggdy1bMjEycHhdIGZsZXgtc2hyaW5rLTAgZmxleC1jb2wgYm9yZGVyLXIgYm9yZGVyLVt2YXIoLS1saW5lKV0gYmctW3ZhcigtLXBhbmVsKV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3M9XCJmbGV4IGgtOCBmbGV4LXNocmluay0wIGl0ZW1zLWNlbnRlciBnYXAtMiBib3JkZXItYiBib3JkZXItW3ZhcigtLWxpbmUpXSBweC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LVs5cHhdIGZvbnQtbWVkaXVtIHVwcGVyY2FzZSB0cmFja2luZy1bMC4xNGVtXSB0ZXh0LVt2YXIoLS1tdXRlKV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGF5ZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZm9udC1tb25vIHRleHQtWzlweF0gdGV4dC1bdmFyKC0tbXV0ZSldXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzY2VuZS5sYXllcnMubGVuZ3RofS97TUFYX0xBWUVSU31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmbGV4LTFcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiSW1wb3J0IGZpbGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LVt2YXIoLS1tdXRlKV0gaG92ZXI6dGV4dC1bdmFyKC0tYWNpZCldXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZmlsZVJlZi5jdXJyZW50Py5jbGljaygpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElQbHVzIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtaW4taC0wIGZsZXgtMSBvdmVyZmxvdy15LWF1dG8gcHktMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzY2VuZS5sYXllcnMubGVuZ3RoID09PSAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm14LTMgbXktMyBibG9jayB3LVtjYWxjKDEwMCUtMjRweCldIGJvcmRlciBib3JkZXItZGFzaGVkIGJvcmRlci1bdmFyKC0tbGluZSldIHB4LTMgcHktNiB0ZXh0LWNlbnRlciBmb250LW1vbm8gdGV4dC1bMTBweF0gbGVhZGluZy1yZWxheGVkIHRleHQtW3ZhcigtLW11dGUpXSBob3Zlcjpib3JkZXItW3ZhcigtLWFjaWQpXS81MCBob3Zlcjp0ZXh0LVt2YXIoLS1tdXRlKV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZmlsZVJlZi5jdXJyZW50Py5jbGljaygpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEcm9wLCBwYXN0ZSwgb3IgY2xpY2sgdG8gaW1wb3J0IGFueXRoaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NjZW5lLmxheWVyc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmV2ZXJzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGxheWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXRhID0gaW1hZ2VJbmZvW2xheWVyLmltYWdlSWRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IGxheWVyLmlkID09PSBzZWxlY3RlZElkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bGF5ZXIuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPXtgZ3JvdXAgZmxleCBjdXJzb3ItcG9pbnRlciBpdGVtcy1jZW50ZXIgZ2FwLTIgcHgtMiBweS0xLjUgJHtpc1NlbGVjdGVkID8gXCJiZy1bdmFyKC0tYWNpZCldLzEwXCIgOiBcImhvdmVyOmJnLVt2YXIoLS1saW5lKV1cIn0gJHtsYXllci5meC52aXNpYmxlID8gXCJcIiA6IFwib3BhY2l0eS00NVwifWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZElkKGxheWVyLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllci5meC52aXNpYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJIaWRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlNob3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmbGV4LXNocmluay0wIHRleHQtW3ZhcigtLW11dGUpXSBob3Zlcjp0ZXh0LVt2YXIoLS1wYXBlcildXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUxheWVyRngobGF5ZXIuaWQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFsYXllci5meC52aXNpYmxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xheWVyLmZ4LnZpc2libGUgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElFeWUgY2xhc3M9XCJoLTMuNSB3LTMuNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJRXllT2ZmIGNsYXNzPVwiaC0zLjUgdy0zLjVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz17YGdyaWQgaC04IHctOCBmbGV4LXNocmluay0wIHBsYWNlLWl0ZW1zLWNlbnRlciBvdmVyZmxvdy1oaWRkZW4gYm9yZGVyICR7aXNTZWxlY3RlZCA/IFwiYm9yZGVyLVt2YXIoLS1hY2lkKV0vNjBcIiA6IFwiYm9yZGVyLVt2YXIoLS1saW5lKV1cIn0gYmctYmxhY2tgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWV0YT8udGh1bWIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e21ldGEudGh1bWJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaC1mdWxsIHctZnVsbCBvYmplY3QtY292ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZm9udC1tb25vIHRleHQtWzhweF0gdGV4dC1bI2I4NmE3NF1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21ldGE/Lm1pc3NpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCI/XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcdTIwMjZcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWluLXctMCBmbGV4LTEgdHJ1bmNhdGUgdGV4dC1bMTFweF0gdGV4dC1bdmFyKC0tcGFwZXIpXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xheWVyLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xheWVyLm1lZGlhS2luZCAhPT0gXCJpbWFnZVwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmxleC1zaHJpbmstMCBmb250LW1vbm8gdGV4dC1bOHB4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdGV4dC1bdmFyKC0tbXV0ZSldXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xheWVyLm1lZGlhS2luZCA9PT0gXCJ2aWRlb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJ2aWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGxheWVyLm1lZGlhS2luZCA9PT0gXCJhdWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImF1ZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImRhdFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhpZGRlbiBmbGV4LXNocmluay0wIGl0ZW1zLWNlbnRlciBnYXAtMC41IGdyb3VwLWhvdmVyOmZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlJhaXNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtW3ZhcigtLW11dGUpXSBob3Zlcjp0ZXh0LVt2YXIoLS1wYXBlcildXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVMYXllcihsYXllci5pZCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SVVwIGNsYXNzPVwiaC0zLjUgdy0zLjVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJMb3dlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LVt2YXIoLS1tdXRlKV0gaG92ZXI6dGV4dC1bdmFyKC0tcGFwZXIpXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZlTGF5ZXIobGF5ZXIuaWQsIC0xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJRG93biBjbGFzcz1cImgtMy41IHctMy41XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRHVwbGljYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtW3ZhcigtLW11dGUpXSBob3Zlcjp0ZXh0LVt2YXIoLS1wYXBlcildXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cGxpY2F0ZUxheWVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXIuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SUNvcHkgY2xhc3M9XCJoLTMuNSB3LTMuNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LVt2YXIoLS1tdXRlKV0gaG92ZXI6dGV4dC1bI2I4NmE3NF1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTGF5ZXIobGF5ZXIuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElUcmFzaCBjbGFzcz1cImgtMy41IHctMy41XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvb3RlciBjbGFzcz1cImJvcmRlci10IGJvcmRlci1bdmFyKC0tbGluZSldIHAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9udC1tb25vIHRleHQtWzguNXB4XSBsZWFkaW5nLXJlbGF4ZWQgdGV4dC1bdmFyKC0tbXV0ZSldXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFYgYXJyYW5nZSBcdTAwQjcgUCBwbGF5IFx1MDBCNyBTcGFjZSBmcmVlemUgXHUwMEI3IFRhYiBoaWRlIFVJXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx1MDBCNyBcdTIzMThaIHVuZG8gXHUwMEI3ID8gbWFudWFsIFx1MDBCNyBkcmFnIC8gd2hlZWwgLyBcdTIxRTd3aGVlbCB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZlLCBzY2FsZSwgcm90YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvYXNpZGU+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIHsvKiBTdGFnZSAqL31cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHJlZj17c3RhZ2VSZWZ9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPXtgcmVsYXRpdmUgbWluLXctMCBmbGV4LTEgb3ZlcmZsb3ctaGlkZGVuIGJnLWJsYWNrICR7c3RhZ2VNb2RlID09PSBcInBsYXlcIiA/IFwiY3Vyc29yLWNyb3NzaGFpclwiIDogXCJjdXJzb3ItZGVmYXVsdFwifWB9XG4gICAgICAgICAgICAgICAgICAgIG9uUG9pbnRlckRvd249e29uU3RhZ2VQb2ludGVyRG93bn1cbiAgICAgICAgICAgICAgICAgICAgb25Qb2ludGVyTW92ZT17b25TdGFnZVBvaW50ZXJNb3ZlfVxuICAgICAgICAgICAgICAgICAgICBvblBvaW50ZXJVcD17b25TdGFnZVBvaW50ZXJVcH1cbiAgICAgICAgICAgICAgICAgICAgb25Qb2ludGVyTGVhdmU9e29uU3RhZ2VQb2ludGVyTGVhdmV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ29udGV4dE1lbnU9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YWdlTW9kZVJlZi5jdXJyZW50ID09PSBcInBsYXlcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBvbkRyYWdPdmVyPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXREcmFnT3Zlcih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgb25EcmFnTGVhdmU9eygpID0+IHNldERyYWdPdmVyKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgb25Ecm9wPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXREcmFnT3ZlcihmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGF0YVRyYW5zZmVyPy5maWxlcy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm9pZCBpbXBvcnRGaWxlcyhldmVudC5kYXRhVHJhbnNmZXIuZmlsZXMpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGNhbnZhcyByZWY9e2NhbnZhc1JlZn0gY2xhc3M9XCJibG9jayBoLWZ1bGwgdy1mdWxsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAge3NlbGVjdGlvbkJveCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwb2ludGVyLWV2ZW50cy1ub25lIGFic29sdXRlIGJvcmRlciBib3JkZXItW3ZhcigtLWFjaWQpXS83MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogYCR7c2VsZWN0aW9uQm94LmNlbnRlclggLSBzZWxlY3Rpb25Cb3guYm94V2lkdGggLyAyfXB4YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBgJHtzZWxlY3Rpb25Cb3guY2VudGVyWSAtIHNlbGVjdGlvbkJveC5ib3hIZWlnaHQgLyAyfXB4YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGAke3NlbGVjdGlvbkJveC5ib3hXaWR0aH1weGAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYCR7c2VsZWN0aW9uQm94LmJveEhlaWdodH1weGAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZSgke3NlbGVjdGlvbkJveC5yb3RhdGlvbn1kZWcpYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiBcIjAgMCAwIDFweCByZ2JhKDAsMCwwLC42KVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICB7c2NlbmUubGF5ZXJzLmxlbmd0aCA9PT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBpbnNldC0wIGdyaWQgcGxhY2UtaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJib3JkZXIgYm9yZGVyLWRhc2hlZCBib3JkZXItW3ZhcigtLWxpbmUtaG90KV0gYmctYmxhY2svNDAgcHgtNiBweS00IHRleHQtY2VudGVyIGZvbnQtbW9ubyB0ZXh0LVsxMXB4XSBsZWFkaW5nLXJlbGF4ZWQgdGV4dC1bdmFyKC0tbXV0ZSldXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERyb3AgaW1hZ2VzLCB2aWRlbywgYXVkaW8sIG9yIGFueSBmaWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHtkcmFnT3ZlciAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBpbnNldC0wIHotMjAgZ3JpZCBwbGFjZS1pdGVtcy1jZW50ZXIgYmctYmxhY2svNjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImJvcmRlciBib3JkZXItZGFzaGVkIGJvcmRlci1bdmFyKC0tYWNpZCldIHB4LTggcHktNSBmb250LW1vbm8gdGV4dC1bMTFweF0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCB0ZXh0LVt2YXIoLS1hY2lkKV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVsZWFzZSB0byBhZGQgbGF5ZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHtzdGFnZU1vZGUgPT09IFwicGxheVwiICYmICF1aUhpZGRlbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBib3R0b20tMyBsZWZ0LTEvMiAtdHJhbnNsYXRlLXgtMS8yIGJvcmRlciBib3JkZXItW3ZhcigtLWxpbmUpXSBiZy1ibGFjay82MCBweC0zIHB5LTEgZm9udC1tb25vIHRleHQtWzlweF0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCB0ZXh0LVt2YXIoLS1tdXRlKV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGF5IG1vZGUgXHUyMDE0IHRhcCwgZHJhZyAmIHBsYXkgdGhlIGtleXMgXHUwMEI3IGZpZWxkOntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBPSU5URVJfTU9ERVNbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKHNjZW5lLmdsb2JhbC5wb2ludGVyTW9kZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH17XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHUwMEI3ID8gbWFudWFsXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAge3JlY29yZGluZyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBsZWZ0LTMgdG9wLTMgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgYm9yZGVyIGJvcmRlci1bI2M0NWI2YV0vNTAgYmctYmxhY2svNjAgcHgtMi41IHB5LTEgZm9udC1tb25vIHRleHQtWzlweF0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCB0ZXh0LVsjYjg2YTc0XVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmVjLWRvdCBpbmxpbmUtYmxvY2sgaC0yIHctMiByb3VuZGVkLWZ1bGwgYmctWyNjNDViNmFdXCIgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVjXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAge3VpSGlkZGVuICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImFic29sdXRlIGJvdHRvbS0zIHJpZ2h0LTMgYm9yZGVyIGJvcmRlci1bdmFyKC0tbGluZSldIGJnLWJsYWNrLzYwIHB4LTIuNSBweS0xLjUgZm9udC1tb25vIHRleHQtWzlweF0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCB0ZXh0LVt2YXIoLS1tdXRlKV0gaG92ZXI6dGV4dC1bdmFyKC0tcGFwZXIpXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VWlIaWRkZW4oZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNob3cgVUkgKFRhYilcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgey8qIENvbnRyb2xzIHBhbmVsICovfVxuICAgICAgICAgICAgICAgIHshdWlIaWRkZW4gJiYgKFxuICAgICAgICAgICAgICAgICAgICA8YXNpZGUgY2xhc3M9XCJ3LVsyNjRweF0gZmxleC1zaHJpbmstMCBvdmVyZmxvdy15LWF1dG8gYm9yZGVyLWwgYm9yZGVyLVt2YXIoLS1saW5lKV0gYmctW3ZhcigtLXBhbmVsKV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtsYXllclBhbmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAge3dvcmxkUGFuZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC0zIGZvbnQtbW9ubyB0ZXh0LVs4LjVweF0gbGVhZGluZy1yZWxheGVkIHRleHQtW3ZhcigtLW11dGUpXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvdWJsZS1jbGljayBhbnkgc2xpZGVyIHRvIHJlc2V0IGl0LiBGZWVkYmFjayArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHVubmVsIHpvb20gKyBhIGthbGVpZG9zY29wZSBpcyBhIGdvb2Qgd2F5IHRvIGxvc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbiBhZnRlcm5vb24uXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9hc2lkZT5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHtoZWxwT3BlbiAmJiA8SGVscE1vZGFsIG9uQ2xvc2U9eygpID0+IHNldEhlbHBPcGVuKGZhbHNlKX0gLz59XG5cbiAgICAgICAgICAgIHt0b2FzdCAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcCBwb2ludGVyLWV2ZW50cy1ub25lIGZpeGVkIGJvdHRvbS01IGxlZnQtMS8yIHotNTAgLXRyYW5zbGF0ZS14LTEvMiBib3JkZXIgYm9yZGVyLVt2YXIoLS1saW5lKV0gYmctW3ZhcigtLXBhbmVsLTIpXSBweC00IHB5LTIgZm9udC1tb25vIHRleHQtWzEwLjVweF0gdGV4dC1bdmFyKC0tcGFwZXIpXSBzaGFkb3ctMnhsXCI+XG4gICAgICAgICAgICAgICAgICAgIHt0b2FzdH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHJlZj17ZmlsZVJlZn1cbiAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICAgICAgYWNjZXB0PVwiKi8qXCJcbiAgICAgICAgICAgICAgICBtdWx0aXBsZVxuICAgICAgICAgICAgICAgIGNsYXNzPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXQuZmlsZXM/Lmxlbmd0aCkgdm9pZCBpbXBvcnRGaWxlcyhpbnB1dC5maWxlcyk7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiIsICJpbXBvcnQgeyBoLCByZW5kZXIgfSBmcm9tIFwicHJlYWN0XCI7XG5pbXBvcnQgeyBBcHAgfSBmcm9tIFwiLi4vY2xpZW50L2luZGV4LnRzeFwiO1xuXG5yZW5kZXIoaChBcHAsIHt9KSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNPLElDMEJNQTtBRDFCTixJRVVEQztBRlZDLElHR0hDO0FISEcsSUc4Rk1DO0FIOUZOLElJK0tIQztBSi9LRyxJSTBMSEM7QUoxTEcsSUk0TERDO0FKNUxDLElJc05EQztBSnROQyxJS1NIQztBTFRHLElLVU5DO0FMVk0sSUtXTkM7QUxYTSxJS3lCREM7QUx6QkMsSUtzQ0hDO0FMdENHLElLcUxEQztBTHJMQyxJS3NMREM7QUx0TEMsSU1FSUM7QU5GSixJQWlCTUMsSUFBZ0MsQ0FBRztBQWpCekMsSUFrQk1DLElBQVksQ0FBQTtBQWxCbEIsSUFtQk1DLElBQ1o7QUFwQk0sSUNDTUMsSUFBVUMsTUFBTUQ7QUFTdEIsU0FBU0UsRUFBT0MsSUFBS0MsSUFBQUE7QUFFM0IsV0FBU1IsTUFBS1EsR0FBT0QsQ0FBQUEsR0FBSVAsRUFBQUEsSUFBS1EsR0FBTVIsRUFBQUE7QUFDcEMsU0FBNkJPO0FBQzlCO0FBUWdCLFNBQUFFLEVBQVdDLElBQUFBO0FBQ3RCQSxFQUFBQSxNQUFRQSxHQUFLQyxjQUFZRCxHQUFLQyxXQUFXQyxZQUFZRixFQUFBQTtBQUMxRDtBRVZnQixTQUFBRyxFQUFjQyxJQUFNTixJQUFPTyxJQUFBQTtBQUMxQyxNQUNDQyxJQUNBQyxJQUNBakIsSUFIR2tCLEtBQWtCLENBQUE7QUFJdEIsT0FBS2xCLE1BQUtRLEdBQ0EsVUFBTFIsS0FBWWdCLEtBQU1SLEdBQU1SLEVBQUFBLElBQ2QsU0FBTEEsS0FBWWlCLEtBQU1ULEdBQU1SLEVBQUFBLElBQzVCa0IsR0FBZ0JsQixFQUFBQSxJQUFLUSxHQUFNUixFQUFBQTtBQVVqQyxNQVBJbUIsVUFBVUMsU0FBUyxNQUN0QkYsR0FBZ0JILFdBQ2ZJLFVBQVVDLFNBQVMsSUFBSW5DLEVBQU1vQyxLQUFL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QUFHLENBQUM7QUFBQSxJQUNwQyxRQUFRLElBQUlELEdBQUUsUUFBUUMsR0FBRSxRQUFRLElBQUksQ0FBQztBQUFBLElBQ3JDLFVBQVUsSUFBSUQsR0FBRSxVQUFVQyxHQUFFLFVBQVUsSUFBSSxDQUFDO0FBQUEsSUFDM0MsT0FBTyxJQUFJRCxHQUFFLE9BQU9DLEdBQUUsT0FBTyxHQUFHLENBQUM7QUFBQSxJQUNqQyxNQUFNLElBQUlELEdBQUUsTUFBTUMsR0FBRSxNQUFNLEdBQUcsQ0FBQztBQUFBLElBQzlCLE9BQU8sSUFBSUQsR0FBRSxPQUFPQyxHQUFFLE9BQU8sR0FBRyxDQUFDO0FBQUEsSUFDakMsUUFBUSxJQUFJRCxHQUFFLFFBQVFDLEdBQUUsUUFBUSxHQUFHLENBQUM7QUFBQSxJQUNwQyxNQUFNLElBQUlELEdBQUUsTUFBTUMsR0FBRSxNQUFNLEdBQUcsQ0FBQztBQUFBLElBQzlCLFNBQVMsSUFBSUQsR0FBRSxTQUFTQyxHQUFFLFNBQVMsR0FBRyxDQUFDO0FBQUEsSUFDdkMsUUFBUSxJQUFJRCxHQUFFLFFBQVFDLEdBQUUsUUFBUSxHQUFHLENBQUM7QUFBQSxJQUNwQyxRQUFRLElBQUlELEdBQUUsUUFBUUMsR0FBRSxRQUFRLEdBQUcsQ0FBQztBQUFBLElBQ3BDLFVBQVUsSUFBSUQsR0FBRSxVQUFVQyxHQUFFLFVBQVUsR0FBRyxDQUFDO0FBQUEsSUFDMUMsWUFBWSxJQUFJRCxHQUFFLFlBQVlDLEdBQUUsWUFBWSxHQUFHLENBQUM7QUFBQSxJQUNoRCxVQUFVLElBQUlELEdBQUUsVUFBVUMsR0FBRSxVQUFVLEdBQUcsQ0FBQztBQUFBLElBQzFDLFVBQVUsSUFBSUQsR0FBRSxVQUFVQyxHQUFFLFVBQVUsR0FBRyxDQUFDO0FBQUEsSUFDMUMsT0FBTyxJQUFJRCxHQUFFLE9BQU9DLEdBQUUsT0FBTyxHQUFHLENBQUM7QUFBQSxJQUNqQyxXQUFXLElBQUlELEdBQUUsV0FBV0MsR0FBRSxXQUFXLEdBQUcsQ0FBQztBQUFBLElBQzdDLFVBQVUsSUFBSUQsR0FBRSxVQUFVQyxHQUFFLFVBQVUs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QUFLLFFBQVE7QUFBQSxNQUFNLFVBQVU7QUFBQSxNQUNoRSxPQUFPO0FBQUEsTUFBTSxRQUFRO0FBQUEsTUFBTSxVQUFVO0FBQUEsTUFBSyxVQUFVO0FBQUEsTUFBTSxVQUFVO0FBQUEsSUFDdEUsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixRQUFRLEtBQUs7QUFBQSxNQUNYLFNBQVM7QUFBQSxNQUFNLFFBQVE7QUFBQSxNQUFLLFFBQVE7QUFBQSxNQUFNLFVBQVU7QUFBQSxNQUFLLFlBQVk7QUFBQSxNQUNyRSxVQUFVO0FBQUEsTUFBSyxVQUFVO0FBQUEsTUFBTSxRQUFRO0FBQUEsTUFBSyxRQUFRO0FBQUEsTUFBTSxVQUFVO0FBQUEsSUFDdEUsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixRQUFRLEtBQUs7QUFBQSxNQUNYLFdBQVc7QUFBQSxNQUFNLE9BQU87QUFBQSxNQUFLLFFBQVE7QUFBQSxNQUFNLFVBQVU7QUFBQSxNQUNyRCxRQUFRO0FBQUEsTUFBTSxZQUFZO0FBQUEsTUFBTSxVQUFVO0FBQUEsTUFBTSxVQUFVO0FBQUEsTUFBTSxRQUFRO0FBQUEsSUFDMUUsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixRQUFRLEtBQUs7QUFBQSxNQUNYLE1BQU07QUFBQSxNQUFNLFFBQVE7QUFBQSxNQUFLLFVBQVU7QUFBQSxNQUFLLFlBQVk7QUFBQSxNQUFNLFVBQVU7QUFBQSxNQUNwRSxVQUFVO0FBQUEsTUFBTSxVQUFVO0FBQUEsTUFBSyxRQUFRO0FBQUEsTUFBTSxPQUFPO0FBQUEsTUFBSyxPQUFPO0FBQUEsSUFDbEUsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixRQUFRLEtBQUs7QUFBQSxNQUNYLFVBQVU7QUFB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXFKYixJQUFNLFlBQVk7QUFBQSxFQUNoQixXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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QU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxHQUFHLFNBQVMsZUFBZSxLQUFLLENBQUM7IiwKICAibmFtZXMiOiBbInNsaWNlIiwgIm9wdGlvbnMiLCAidm5vZGVJZCIsICJpc1ZhbGlkRWxlbWVudCIsICJyZXJlbmRlclF1ZXVlIiwgInByZXZEZWJvdW5jZSIsICJkZWZlciIsICJkZXB0aFNvcnQiLCAiX2lkIiwgIkVWRU5UX0RJU1BBVENIRUQiLCAiRVZFTlRfQVRUQUNIRUQiLCAiQ0FQVFVSRV9SRUdFWCIsICJldmVudENsb2NrIiwgImV2ZW50UHJveHkiLCAiZXZlbnRQcm94eUNhcHR1cmUiLCAiaSIsICJFTVBUWV9PQkoiLCAiRU1QVFlfQVJSIiwgIklTX05PTl9ESU1FTlNJT05BTCIsICJpc0FycmF5IiwgIkFycmF5IiwgImFzc2lnbiIsICJvYmoiLCAicHJvcHMiLCAicmVtb3ZlTm9kZSIsICJub2RlIiwgInBhcmVudE5vZGUiLCAicmVtb3ZlQ2hpbGQiLCAiY3JlYXRlRWxlbWVudCIsICJ0eXBlIiwgImNoaWxkcmVuIiwgImtleSIsICJyZWYiLCAibm9ybWFsaXplZFByb3BzIiwgImFyZ3VtZW50cyIsICJsZW5ndGgiLCAiY2FsbCIsICJkZWZhdWx0UHJvcHMiLCAiY3JlYXRlVk5vZGUiLCAib3JpZ2luYWwiLCAidm5vZGUiLCAiX19rIiwgIl9fIiwgIl9fYiIsICJfX2UiLCAiX19jIiwgImNvbnN0cnVjdG9yIiwgIl9fdiIsICJfX2kiLCAiX191IiwgIkZyYWdtZW50IiwgInByb3BzIiwgImNoaWxkcmVuIiwgIkJhc2VDb21wb25lbnQiLCAiY29udGV4dCIsICJ0aGlzIiwgImdldERvbVNpYmxpbmciLCAidm5vZGUiLCAiY2hpbGRJbmRleCIsICJfXyIsICJfX2kiLCAic2libGluZyIsICJfX2siLCAibGVuZ3RoIiwgIl9fZSIsICJ0eXBlIiwgInJlbmRlckNvbXBvbmVudCIsICJjb21wb25lbnQiLCAiX19QIiwgIl9fZCIsICJvbGRWTm9kZSIsICJfX3YiLCAib2xkRG9tIiwgImNvbW1pdFF1ZXVlIiwgInJlZlF1ZXVlIiwgIm5ld1ZOb2RlIiwgImFzc2lnbiIsICJvcHRpb25zIiwgImRpZmYiLCAiX19uIiwgIm5hbWVzcGFjZVVSSSIsICJfX3UiLCAiY29tbWl0Um9vdCIsICJ1cGRhdGVQYXJlbnREb21Qb2ludGVycyIsICJfX2MiLCAiYmFzZSIsICJzb21lIiwgImNoaWxkIiwgImVucXVldWVSZW5kZXIiLCAiYyIsICJyZXJlbmRlclF1ZXVlIiwgInB1c2giLCAicHJvY2VzcyIsICJfX3IiLCAicHJldkRlYm91bmNlIiwgImRlYm91bmNlUmVuZGVyaW5nIiwgImRlZmVyIiwgImwiLCAic29ydCIsICJkZXB0aFNvcnQiLCAic2hpZnQiLCAiZGlmZkNoaWxkcmVuIiwgInBhcmVudERvbSIsICJyZW5kZXJSZXN1bHQiLCAibmV3UGFyZW50Vk5vZGUiLCAib2xkUGFyZW50Vk5vZGUiLCAiZ2xvYmFsQ29udGV4dCIsICJuYW1lc3BhY2UiLCAiZXhjZXNzRG9tQ2hpbGRyZW4iLCAiaXNIeWRyYXRpbmciLCAiaSIsICJjaGlsZFZOb2RlIiwgIm5ld0RvbSIsICJmaXJzdENoaWxkRG9tIiwgInJlc3VsdCIsICJzaG91bGRQbGFjZSIsICJvbGRDaGlsZHJlbiIsICJFTVBUWV9BUlIiLCAibmV3Q2hpbGRyZW5MZW5ndGgiLCAiY29uc3RydWN0TmV3Q2hpbGRyZW5BcnJheSIsICJFTVBUWV9PQkoiLCAicmVmIiwgImFwcGx5UmVmIiwgImluc2VydCIsICJuZXh0U2libGluZyIsICJza2V3ZWRJbmRleCIsICJtYXRjaGluZ0luZGV4IiwgIm9sZENoaWxkcmVuTGVuZ3RoIiwgInJlbWFpbmluZ09sZENoaWxkcmVuIiwgInNrZXciLCAiQXJyYXkiLCAiY29uc3RydWN0b3IiLCAiU3RyaW5nIiwgImNyZWF0ZVZOb2RlIiwgImlzQXJyYXkiLCAiX19iIiwgImtleSIsICJmaW5kTWF0Y2hpbmdJbmRleCIsICJ1bm1vdW50IiwgInBhcmVudFZOb2RlIiwgInBhcmVudE5vZGUiLCAiaW5zZXJ0QmVmb3JlIiwgIm5vZGVUeXBlIiwgImZpbmRNYXRjaGluZ0luZGV4IiwgImNoaWxkVk5vZGUiLCAib2xkQ2hpbGRyZW4iLCAic2tld2VkSW5kZXgiLCAicmVtYWluaW5nT2xkQ2hpbGRyZW4iLCAieCIsICJ5IiwgImNoaWxkSW5kZXgiLCAia2V5IiwgInR5cGUiLCAib2xkVk5vZGUiLCAibWF0Y2hlZCIsICJfX3UiLCAibGVuZ3RoIiwgInNldFN0eWxlIiwgInN0eWxlIiwgInZhbHVlIiwgInNldFByb3BlcnR5IiwgIklTX05PTl9ESU1FTlNJT05BTCIsICJ0ZXN0IiwgImRvbSIsICJuYW1lIiwgIm9sZFZhbHVlIiwgIm5hbWVzcGFjZSIsICJ1c2VDYXB0dXJlIiwgImxvd2VyQ2FzZU5hbWUiLCAibyIsICJjc3NUZXh0IiwgInJlcGxhY2UiLCAiQ0FQVFVSRV9SRUdFWCIsICJ0b0xvd2VyQ2FzZSIsICJzbGljZSIsICJsIiwgIkVWRU5UX0FUVEFDSEVEIiwgImV2ZW50Q2xvY2siLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJldmVudFByb3h5Q2FwdHVyZSIsICJldmVudFByb3h5IiwgInJlbW92ZUV2ZW50TGlzdGVuZXIiLCAiZSIsICJyZW1vdmVBdHRyaWJ1dGUiLCAic2V0QXR0cmlidXRlIiwgImNyZWF0ZUV2ZW50UHJveHkiLCAidGhpcyIsICJldmVudEhhbmRsZXIiLCAiRVZFTlRfRElTUEFUQ0hFRCIsICJvcHRpb25zIiwgImV2ZW50IiwgImRpZmYiLCAicGFyZW50RG9tIiwgIm5ld1ZOb2RlIiwgImdsb2JhbENvbnRleHQiLCAiZXhjZXNzRG9tQ2hpbGRyZW4iLCAiY29tbWl0UXVldWUiLCAib2xkRG9tIiwgImlzSHlkcmF0aW5nIiwgInJlZlF1ZXVlIiwgInRtcCIsICJvbGRDb21taXRRdWV1ZUxlbmd0aCIsICJjIiwgImlzTmV3IiwgIm9sZFByb3BzIiwgIm9sZFN0YXRlIiwgInNuYXBzaG90IiwgImNsZWFyUHJvY2Vzc2luZ0V4Y2VwdGlvbiIsICJuZXdQcm9wcyIsICJpc0NsYXNzQ29tcG9uZW50IiwgInByb3ZpZGVyIiwgImNvbXBvbmVudENvbnRleHQiLCAicmVuZGVySG9vayIsICJjb3VudCIsICJyZW5kZXJSZXN1bHQiLCAiaSIsICJuZXdUeXBlIiwgImNvbnN0cnVjdG9yIiwgIl9fZSIsICJfX2IiLCAib3V0ZXIiLCAicHJvcHMiLCAicHJvdG90eXBlIiwgInJlbmRlciIsICJjb250ZXh0VHlwZSIsICJfX2MiLCAiX18iLCAiX19FIiwgIkJhc2VDb21wb25lbnQiLCAiZG9SZW5kZXIiLCAic3ViIiwgInN0YXRlIiwgIl9fbiIsICJfX2QiLCAiX19oIiwgIl9zYiIsICJfX3MiLCAiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzIiwgImFzc2lnbiIsICJfX3YiLCAiY29tcG9uZW50V2lsbE1vdW50IiwgImNvbXBvbmVudERpZE1vdW50IiwgInB1c2giLCAiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsICJzaG91bGRDb21wb25lbnRVcGRhdGUiLCAiX19rIiwgInNvbWUiLCAidm5vZGUiLCAiRU1QVFlfQVJSIiwgImFwcGx5IiwgImNvbXBvbmVudFdpbGxVcGRhdGUiLCAiY29tcG9uZW50RGlkVXBkYXRlIiwgImNvbnRleHQiLCAiX19QIiwgIl9fciIsICJnZXRDaGlsZENvbnRleHQiLCAiZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUiLCAiRnJhZ21lbnQiLCAiY2xvbmVOb2RlIiwgImNoaWxkcmVuIiwgImRpZmZDaGlsZHJlbiIsICJpc0FycmF5IiwgImJhc2UiLCAidGhlbiIsICJNT0RFX0hZRFJBVEUiLCAibm9kZVR5cGUiLCAibmV4dFNpYmxpbmciLCAiaW5kZXhPZiIsICJyZW1vdmVOb2RlIiwgIm1hcmtBc0ZvcmNlIiwgImRpZmZFbGVtZW50Tm9kZXMiLCAiZGlmZmVkIiwgImNvbW1pdFJvb3QiLCAicm9vdCIsICJhcHBseVJlZiIsICJjYiIsICJjYWxsIiwgIm5vZGUiLCAibWFwIiwgIm5ld0h0bWwiLCAib2xkSHRtbCIsICJuZXdDaGlsZHJlbiIsICJpbnB1dFZhbHVlIiwgImNoZWNrZWQiLCAiRU1QVFlfT0JKIiwgImxvY2FsTmFtZSIsICJkb2N1bWVudCIsICJjcmVhdGVUZXh0Tm9kZSIsICJjcmVhdGVFbGVtZW50TlMiLCAiaXMiLCAiX19tIiwgImRhdGEiLCAiZGVmYXVsdFZhbHVlIiwgImNoaWxkTm9kZXMiLCAiYXR0cmlidXRlcyIsICJfX2h0bWwiLCAiaW5uZXJIVE1MIiwgImNvbnRlbnQiLCAiZ2V0RG9tU2libGluZyIsICJ1bmRlZmluZWQiLCAicmVmIiwgImhhc1JlZlVubW91bnQiLCAiY3VycmVudCIsICJ1bm1vdW50IiwgInBhcmVudFZOb2RlIiwgInNraXBSZW1vdmUiLCAiciIsICJjb21wb25lbnRXaWxsVW5tb3VudCIsICJyZXBsYWNlTm9kZSIsICJkb2N1bWVudEVsZW1lbnQiLCAiY3JlYXRlRWxlbWVudCIsICJuYW1lc3BhY2VVUkkiLCAiZmlyc3RDaGlsZCIsICJjcmVhdGVDb250ZXh0IiwgImRlZmF1bHRWYWx1ZSIsICJDb250ZXh0IiwgInByb3BzIiwgInN1YnMiLCAiY3R4IiwgInRoaXMiLCAiZ2V0Q2hpbGRDb250ZXh0IiwgIlNldCIsICJfX2MiLCAiY29tcG9uZW50V2lsbFVubW91bnQiLCAic2hvdWxkQ29tcG9uZW50VXBkYXRlIiwgIl9wcm9wcyIsICJ2YWx1ZSIsICJmb3JFYWNoIiwgImMiLCAiX19lIiwgImVucXVldWVSZW5kZXIiLCAic3ViIiwgImFkZCIsICJvbGQiLCAiZGVsZXRlIiwgImNhbGwiLCAiY2hpbGRyZW4iLCAiaSIsICJfXyIsICJQcm92aWRlciIsICJfX2wiLCAiQ29uc3VtZXIiLCAiY29udGV4dFZhbHVlIiwgImNvbnRleHRUeXBlIiwgInNsaWNlIiwgIkVNUFRZX0FSUiIsICJvcHRpb25zIiwgImVycm9yIiwgInZub2RlIiwgIm9sZFZOb2RlIiwgImVycm9ySW5mbyIsICJjb21wb25lbnQiLCAiY3RvciIsICJoYW5kbGVkIiwgImNvbnN0cnVjdG9yIiwgImdldERlcml2ZWRTdGF0ZUZyb21FcnJvciIsICJzZXRTdGF0ZSIsICJfX2QiLCAiY29tcG9uZW50RGlkQ2F0Y2giLCAiX19FIiwgImUiLCAidm5vZGVJZCIsICJpc1ZhbGlkRWxlbWVudCIsICJCYXNlQ29tcG9uZW50IiwgInByb3RvdHlwZSIsICJ1cGRhdGUiLCAiY2FsbGJhY2siLCAicyIsICJfX3MiLCAic3RhdGUiLCAiYXNzaWduIiwgIl9fdiIsICJfc2IiLCAicHVzaCIsICJmb3JjZVVwZGF0ZSIsICJfX2giLCAicmVuZGVyIiwgIkZyYWdtZW50IiwgInJlcmVuZGVyUXVldWUiLCAiZGVmZXIiLCAiUHJvbWlzZSIsICJ0aGVuIiwgImJpbmQiLCAicmVzb2x2ZSIsICJzZXRUaW1lb3V0IiwgImRlcHRoU29ydCIsICJhIiwgImIiLCAiX19iIiwgInByb2Nlc3MiLCAiX19yIiwgIl9pZCIsICJNYXRoIiwgInJhbmRvbSIsICJ0b1N0cmluZyIsICJFVkVOVF9ESVNQQVRDSEVEIiwgIkVWRU5UX0FUVEFDSEVEIiwgIkNBUFRVUkVfUkVHRVgiLCAiZXZlbnRDbG9jayIsICJldmVudFByb3h5IiwgImNyZWF0ZUV2ZW50UHJveHkiLCAiZXZlbnRQcm94eUNhcHR1cmUiLCAiY3VycmVudEluZGV4IiwgImN1cnJlbnRDb21wb25lbnQiLCAicHJldmlvdXNDb21wb25lbnQiLCAicHJldlJhZiIsICJjdXJyZW50SG9vayIsICJhZnRlclBhaW50RWZmZWN0cyIsICJvcHRpb25zIiwgIl9vcHRpb25zIiwgIm9sZEJlZm9yZURpZmYiLCAiX19iIiwgIm9sZEJlZm9yZVJlbmRlciIsICJfX3IiLCAib2xkQWZ0ZXJEaWZmIiwgImRpZmZlZCIsICJvbGRDb21taXQiLCAiX19jIiwgIm9sZEJlZm9yZVVubW91bnQiLCAidW5tb3VudCIsICJvbGRSb290IiwgIl9fIiwgImdldEhvb2tTdGF0ZSIsICJpbmRleCIsICJ0eXBlIiwgIl9faCIsICJob29rcyIsICJfX0giLCAibGVuZ3RoIiwgInB1c2giLCAidXNlU3RhdGUiLCAiaW5pdGlhbFN0YXRlIiwgInVzZVJlZHVjZXIiLCAiaW52b2tlT3JSZXR1cm4iLCAicmVkdWNlciIsICJpbml0IiwgImhvb2tTdGF0ZSIsICJfcmVkdWNlciIsICJhY3Rpb24iLCAiY3VycmVudFZhbHVlIiwgIl9fTiIsICJuZXh0VmFsdWUiLCAic2V0U3RhdGUiLCAiX19mIiwgInVwZGF0ZUhvb2tTdGF0ZSIsICJwIiwgInMiLCAiYyIsICJ1cGRhdGVkSG9vayIsICJzaG91bGRVcGRhdGUiLCAicHJvcHMiLCAic29tZSIsICJob29rSXRlbSIsICJwcmV2U2N1IiwgInJlc3VsdCIsICJjYWxsIiwgInRoaXMiLCAic2hvdWxkQ29tcG9uZW50VXBkYXRlIiwgInByZXZDV1UiLCAiY29tcG9uZW50V2lsbFVwZGF0ZSIsICJfX2UiLCAidG1wIiwgInVzZUVmZmVjdCIsICJjYWxsYmFjayIsICJhcmdzIiwgInN0YXRlIiwgIl9fcyIsICJhcmdzQ2hhbmdlZCIsICJfcGVuZGluZ0FyZ3MiLCAidXNlUmVmIiwgImluaXRpYWxWYWx1ZSIsICJjdXJyZW50SG9vayIsICJ1c2VNZW1vIiwgImN1cnJlbnQiLCAidXNlTWVtbyIsICJmYWN0b3J5IiwgImFyZ3MiLCAic3RhdGUiLCAiZ2V0SG9va1N0YXRlIiwgImN1cnJlbnRJbmRleCIsICJhcmdzQ2hhbmdlZCIsICJfX0giLCAiX18iLCAiX19oIiwgImZsdXNoQWZ0ZXJQYWludEVmZmVjdHMiLCAiY29tcG9uZW50IiwgImFmdGVyUGFpbnRFZmZlY3RzIiwgInNoaWZ0IiwgImhvb2tzIiwgIl9fSCIsICJfX1AiLCAiX19oIiwgInNvbWUiLCAiaW52b2tlQ2xlYW51cCIsICJpbnZva2VFZmZlY3QiLCAiZSIsICJvcHRpb25zIiwgIl9fZSIsICJfX3YiLCAiX19iIiwgInZub2RlIiwgImN1cnJlbnRDb21wb25lbnQiLCAib2xkQmVmb3JlRGlmZiIsICJfXyIsICJwYXJlbnREb20iLCAiX19rIiwgIl9fbSIsICJvbGRSb290IiwgIl9fciIsICJvbGRCZWZvcmVSZW5kZXIiLCAiY3VycmVudEluZGV4IiwgIl9fYyIsICJwcmV2aW91c0NvbXBvbmVudCIsICJob29rSXRlbSIsICJfX04iLCAiX3BlbmRpbmdBcmdzIiwgImRpZmZlZCIsICJvbGRBZnRlckRpZmYiLCAiYyIsICJsZW5ndGgiLCAicHVzaCIsICJwcmV2UmFmIiwgInJlcXVlc3RBbmltYXRpb25GcmFtZSIsICJhZnRlck5leHRGcmFtZSIsICJjb21taXRRdWV1ZSIsICJmaWx0ZXIiLCAiY2IiLCAib2xkQ29tbWl0IiwgInVubW91bnQiLCAib2xkQmVmb3JlVW5tb3VudCIsICJoYXNFcnJvcmVkIiwgInMiLCAiSEFTX1JBRiIsICJjYWxsYmFjayIsICJyYWYiLCAiZG9uZSIsICJjbGVhclRpbWVvdXQiLCAidGltZW91dCIsICJjYW5jZWxBbmltYXRpb25GcmFtZSIsICJzZXRUaW1lb3V0IiwgImhvb2siLCAiY29tcCIsICJjbGVhbnVwIiwgImFyZ3NDaGFuZ2VkIiwgIm9sZEFyZ3MiLCAibmV3QXJncyIsICJhcmciLCAiaW5kZXgiLCAiaW52b2tlT3JSZXR1cm4iLCAiZiIsICJkIiwgImgiLCAiZCIsICJoIiwgInQiLCAiZCIsICJsIiwgInAiLCAiaSIsICJ3aWR0aCIsICJoZWlnaHQiLCAieSIsICJ4IiwgInAiLCAidTIiLCAidTMiLCAidiIsICJnIiwgImkiLCAiYSIsICJiIiwgImMiLCAibyIsICJoIiwgInJlcXVlc3QiLCAidm5vZGVJZCIsICJjcmVhdGVWTm9kZSIsICJ0eXBlIiwgInByb3BzIiwgImtleSIsICJpc1N0YXRpY0NoaWxkcmVuIiwgIl9fc291cmNlIiwgIl9fc2VsZiIsICJyZWYiLCAiaSIsICJub3JtYWxpemVkUHJvcHMiLCAidm5vZGUiLCAiX19rIiwgIl9fIiwgIl9fYiIsICJfX2UiLCAiX19jIiwgImNvbnN0cnVjdG9yIiwgIl9fdiIsICJ2bm9kZUlkIiwgIl9faSIsICJfX3UiLCAiZGVmYXVsdFByb3BzIiwgIm9wdGlvbnMiLCAidSIsICJwIiwgImkiLCAiYSIsICJuIiwgImsiLCAiYyIsICJhdXRoIiwgImQiLCAiQSIsICJsYXllciIsICJjYW52YXMiLCAib2JqZWN0VXJsIiwgImciLCAiaCIsICJsIiwgInYiLCAieCIsICJ5IiwgInNjZW5lWCIsICJzY2VuZVkiLCAiVCJdCn0K
